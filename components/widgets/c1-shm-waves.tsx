"use client";

import { useEffect, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: SHM Phase & Energy Synchroniser
// =============================================================================
function ShmPhaseEnergyWidget() {
  const [x0, setX0] = useState(0.16); // m
  const [omega, setOmega] = useState(4.0); // rad s^-1
  const [t, setT] = useState(0.2); // s
  const [playing, setPlaying] = useState(false);

  const m = 1.0; // 1.0 kg reference mass so energy numbers read cleanly
  const T = (2 * Math.PI) / omega;

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setT((prev) => {
        const next = prev + dt * 0.65;
        return next > T ? next - T : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, T]);

  const tClamped = Math.min(t, T);
  const phase = omega * tClamped; // rad
  const x = x0 * Math.sin(phase);
  const v = omega * x0 * Math.cos(phase);
  const a = -omega * omega * x;

  const vMax = omega * x0;
  const aMax = omega * omega * x0;

  const eT = 0.5 * m * omega * omega * x0 * x0;
  const eP = 0.5 * m * omega * omega * x * x;
  const eK = Math.max(0, eT - eP);

  // Ratios in [-1, 1] for bars
  const xNorm = x0 > 0 ? x / x0 : 0;
  const vNorm = vMax > 0 ? v / vMax : 0;
  const aNorm = aMax > 0 ? a / aMax : 0;

  // Mass-spring SVG geometry (left top: x in 20..250, center at 142)
  const eqX = 148;
  const travelPx = 68 * (x0 / 0.25);
  const blockX = eqX + xNorm * travelPx;
  const wallX = 28;
  const springEnd = blockX - 18;
  const coils = 10;
  const springPts: string[] = [`${wallX},62`, `${wallX + 8},62`];
  const span = Math.max(24, springEnd - (wallX + 16));
  for (let i = 0; i < coils; i++) {
    const sx = wallX + 8 + ((i + 0.5) / coils) * span;
    const sy = i % 2 === 0 ? 50 : 74;
    springPts.push(`${sx.toFixed(1)},${sy}`);
  }
  springPts.push(`${springEnd.toFixed(1)},62`);

  // Energy parabola geometry (right panel: x in 295..515, center 405, base y=218, top y=58)
  const pCx = 405;
  const pHalfW = 92;
  const pBaseY = 218;
  const pTopY = 58;
  const pH = pBaseY - pTopY; // 160
  const maxRefE = 0.5 * m * 8.0 * 8.0 * 0.25 * 0.25; // 2.0 J full scale
  const eScaleH = Math.max(28, Math.min(pH, (eT / maxRefE) * pH));
  const eTopY = pBaseY - eScaleH;

  // Build smooth polyline paths for E_p and E_k parabolas
  const epPts: string[] = [];
  const ekPts: string[] = [];
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const u = -1 + (2 * i) / steps; // -1..1
    const px = pCx + u * pHalfW;
    const pyEp = pBaseY - u * u * eScaleH;
    const pyEk = pBaseY - (1 - u * u) * eScaleH;
    epPts.push(`${px.toFixed(1)},${pyEp.toFixed(1)}`);
    ekPts.push(`${px.toFixed(1)},${pyEk.toFixed(1)}`);
  }

  const curPx = pCx + xNorm * pHalfW;
  const curEpY = pBaseY - xNorm * xNorm * eScaleH;
  const curEkY = pBaseY - (1 - xNorm * xNorm) * eScaleH;
  const crossDx = pHalfW / Math.SQRT2;
  const crossY = pBaseY - 0.5 * eScaleH;

  const presetValues = ["0", "0.125", "0.25", "0.5", "0.75"];
  const fracNow = T > 0 ? tClamped / T : 0;
  const activePreset =
    presetValues.find((p) => Math.abs(fracNow - Number(p)) < 0.015) ?? "";

  const setPreset = (frac: string) => {
    setPlaying(false);
    setT(Number(frac) * T);
  };

  // Dynamic plain-language caption
  let stateNote = "Energy is actively transferring between kinetic and potential forms while E_T stays fixed.";
  if (Math.abs(xNorm) < 0.08) {
    stateNote =
      "Passing through equilibrium (x ≈ 0): restoring acceleration vanishes, speed peaks at |v_max| = ωx₀, and almost 100% of energy is kinetic!";
  } else if (Math.abs(xNorm) > 0.96) {
    stateNote =
      "At a turning point (x ≈ ±x₀): the mass momentarily stops (v ≈ 0, E_k ≈ 0) while restoring acceleration |a| = ω²x₀ and E_p reach their maxima.";
  } else if (Math.abs(Math.abs(xNorm) - Math.SQRT1_2) < 0.06) {
    stateNote =
      "Right at the crossover x ≈ ±x₀/√2 (±0.71x₀): kinetic energy and potential energy split E_T exactly 50–50!";
  }

  return (
    <WidgetFrame
      title="SHM Phase & Energy Synchroniser"
      tryThis={[
        "Jump to **t = T/8** (x = +x₀/√2 ≈ +0.71x₀) and confirm **E_k = E_p = ½E_T** — NOT at half amplitude!",
        "Double the amplitude **x₀** from 0.10 m to 0.20 m and watch total energy **E_T** quadruple (×4).",
        "Step across one cycle and notice **v** peaks a quarter-period before **x**, while **a** always points opposite to **x**.",
      ]}
      caption={
        <div>
          <strong>Live physics check (m = 1.0 kg):</strong> {stateNote}
        </div>
      }
    >
      <div className="space-y-4">
        {/* Preset phase buttons + play/pause */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Jump to SHM phase"
            value={activePreset}
            onChange={setPreset}
            options={[
              { value: "0", label: "t = 0" },
              { value: "0.125", label: "T/8 (E_k=E_p)" },
              { value: "0.25", label: "T/4 (+x₀)" },
              { value: "0.5", label: "T/2 (x=0)" },
              { value: "0.75", label: "3T/4 (−x₀)" },
            ]}
          />
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? "⏸ Pause" : "▶ Animate"}
          </button>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="Amplitude x₀"
            value={x0}
            min={0.05}
            max={0.25}
            step={0.01}
            onChange={setX0}
            format={(val) => `${val.toFixed(2)} m`}
          />
          <Slider
            label="Angular freq ω"
            value={omega}
            min={1.0}
            max={8.0}
            step={0.5}
            onChange={(val) => {
              const frac = T > 0 ? tClamped / T : 0;
              setOmega(val);
              setT(frac * ((2 * Math.PI) / val));
            }}
            format={(val) => `${val.toFixed(1)} rad s⁻¹`}
          />
          <Slider
            label="Time t"
            value={Number(tClamped.toFixed(3))}
            min={0}
            max={Number(T.toFixed(3))}
            step={0.01}
            onChange={(val) => {
              setPlaying(false);
              setT(val);
            }}
            format={(val) => `${val.toFixed(2)} s (${Math.round((val / T) * 360)}°)`}
          />
        </div>

        {/* Interactive SVG Canvas */}
        <div className="rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 540 265"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live SHM oscillator animation with signed x, v, a phase bars and kinetic and potential energy parabola graph"
            className="h-auto w-full"
          >
            {/* LEFT TOP: Mass-Spring Oscillator */}
            <text x="142" y="18" fontSize="12" fontWeight="700" textAnchor="middle" fill="#171a2f">
              Mass–Spring Oscillator (T = {T.toFixed(2)} s)
            </text>
            {/* Wall & floor */}
            <rect x="18" y="34" width="10" height="58" fill="#cbd5e1" stroke="#475569" strokeWidth="1.2" />
            <line x1="18" y1="92" x2="262" y2="92" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Equilibrium marker */}
            <line x1={eqX} y1="28" x2={eqX} y2="100" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
            <text x={eqX} y="111" fontSize="9.5" textAnchor="middle" fill="#64748b">
              x = 0
            </text>
            {/* Extreme markers */}
            <line x1={eqX - travelPx} y1="84" x2={eqX - travelPx} y2="96" stroke="#2563eb" strokeWidth="1.4" />
            <line x1={eqX + travelPx} y1="84" x2={eqX + travelPx} y2="96" stroke="#2563eb" strokeWidth="1.4" />
            <text x={eqX - travelPx} y="109" fontSize="9" textAnchor="middle" fill="#2563eb">
              −x₀
            </text>
            <text x={eqX + travelPx} y="109" fontSize="9" textAnchor="middle" fill="#2563eb">
              +x₀
            </text>

            {/* Spring */}
            <polyline points={springPts.join(" ")} fill="none" stroke="#334155" strokeWidth="2" />
            {/* Mass block */}
            <rect
              x={blockX - 18}
              y="44"
              width="36"
              height="36"
              rx="5"
              fill="#dbeafe"
              stroke="#2563eb"
              strokeWidth="2.2"
            />
            <text x={blockX} y="66" fontSize="11" fontWeight="700" textAnchor="middle" fill="#1d4ed8">
              1 kg
            </text>

            {/* Velocity arrow above block */}
            {Math.abs(vNorm) > 0.06 ? (
              <g>
                <line
                  x1={blockX}
                  y1="35"
                  x2={blockX + vNorm * 44}
                  y2="35"
                  stroke="#15803d"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <circle cx={blockX + vNorm * 44} cy="35" r="3" fill="#15803d" />
                <text
                  x={blockX + vNorm * 22}
                  y="30"
                  fontSize="9.5"
                  fontWeight="700"
                  textAnchor="middle"
                  fill="#15803d"
                >
                  v
                </text>
              </g>
            ) : null}

            {/* Acceleration arrow on block */}
            {Math.abs(aNorm) > 0.06 ? (
              <g>
                <line
                  x1={blockX}
                  y1="85"
                  x2={blockX + aNorm * 44}
                  y2="85"
                  stroke="#c2410c"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx={blockX + aNorm * 44} cy="85" r="3" fill="#c2410c" />
              </g>
            ) : null}

            {/* LEFT BOTTOM: Signed Phase Bars for x, v, a */}
            <text x="142" y="135" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="#171a2f">
              Phase Meters (normalised to ±100%)
            </text>
            {[
              { label: "x / x₀", val: xNorm, color: "#2563eb", y: 152 },
              { label: "v / v_max", val: vNorm, color: "#15803d", y: 186 },
              { label: "a / a_max", val: aNorm, color: "#c2410c", y: 220 },
            ].map((row) => {
              const cx = 160;
              const halfBar = 88;
              const w = Math.abs(row.val) * halfBar;
              const rx = row.val >= 0 ? cx : cx - w;
              return (
                <g key={row.label}>
                  <text x="64" y={row.y + 13} fontSize="10.5" fontWeight="700" textAnchor="end" fill={row.color}>
                    {row.label}
                  </text>
                  <rect x={cx - halfBar} y={row.y} width={halfBar * 2} height="18" rx="4" fill="#f1f5f9" stroke="#e2e8f0" />
                  <line x1={cx} y1={row.y - 2} x2={cx} y2={row.y + 20} stroke="#64748b" strokeWidth="1.2" />
                  <rect x={rx} y={row.y + 2} width={w} height="14" rx="3" fill={row.color} opacity="0.85" />
                </g>
              );
            })}
            <text x="160" y="253" fontSize="9.5" textAnchor="middle" fill="#64748b">
              Notice: a is always exact opposite of x (a = −ω²x)
            </text>

            {/* Divider */}
            <line x1="274" y1="12" x2="274" y2="255" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* RIGHT PANEL: Energy Parabola vs Displacement */}
            <text x={pCx} y="18" fontSize="12" fontWeight="700" textAnchor="middle" fill="#171a2f">
              Energy Parabola: E_k + E_p = E_T
            </text>
            {/* Axes */}
            <line x1="294" y1={pBaseY} x2="520" y2={pBaseY} stroke="#475569" strokeWidth="1.4" />
            <line x1={pCx} y1="42" x2={pCx} y2={pBaseY + 8} stroke="#475569" strokeWidth="1.4" />
            <text x="524" y={pBaseY + 4} fontSize="10.5" fontWeight="700" fill="#171a2f">
              x
            </text>
            <text x={pCx + 6} y="46" fontSize="10" fontWeight="700" fill="#171a2f">
              Energy (J)
            </text>

            {/* E_T horizontal roof */}
            <line
              x1={pCx - pHalfW}
              y1={eTopY}
              x2={pCx + pHalfW}
              y2={eTopY}
              stroke="#171a2f"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            <text x={pCx + pHalfW} y={eTopY - 6} fontSize="10" fontWeight="700" textAnchor="end" fill="#171a2f">
              E_T = {eT.toFixed(3)} J
            </text>

            {/* E_p and E_k curves */}
            <polyline points={epPts.join(" ")} fill="none" stroke="#c2410c" strokeWidth="2.5" />
            <polyline points={ekPts.join(" ")} fill="none" stroke="#15803d" strokeWidth="2.5" />

            {/* Crossover points ±x0/sqrt(2) */}
            <circle cx={pCx - crossDx} cy={crossY} r="3.2" fill="#7c3aed" />
            <circle cx={pCx + crossDx} cy={crossY} r="3.2" fill="#7c3aed" />

            {/* Live vertical tracker at current x */}
            <line x1={curPx} y1={eTopY} x2={curPx} y2={pBaseY} stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx={curPx} cy={curEkY} r="5" fill="#15803d" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx={curPx} cy={curEpY} r="5" fill="#c2410c" stroke="#ffffff" strokeWidth="1.5" />

            {/* Axis ticks & legend */}
            <text x={pCx - pHalfW} y={pBaseY + 14} fontSize="9.5" textAnchor="middle" fill="#171a2f">
              −x₀
            </text>
            <text x={pCx + pHalfW} y={pBaseY + 14} fontSize="9.5" textAnchor="middle" fill="#171a2f">
              +x₀
            </text>
            <text x={pCx} y={pBaseY + 14} fontSize="9.5" textAnchor="middle" fill="#171a2f">
              0
            </text>
            <text x="310" y="253" fontSize="10" fontWeight="700" fill="#15803d">
              ● E_k (kinetic)
            </text>
            <text x="405" y="253" fontSize="10" fontWeight="700" fill="#c2410c">
              ● E_p (potential)
            </text>
            <text x="515" y="253" fontSize="9.5" fontWeight="700" textAnchor="end" fill="#7c3aed">
              ● ±x₀/√2
            </text>
          </svg>
        </div>

        {/* Live Readouts */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          <Readout label="x(t)" value={`${x >= 0 ? "+" : "−"}${Math.abs(x).toFixed(3)} m`} tone="brand" />
          <Readout label="v(t)" value={`${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(2)} m s⁻¹`} tone="good" />
          <Readout label="a(t)" value={`${a >= 0 ? "+" : "−"}${Math.abs(a).toFixed(2)} m s⁻²`} tone="bad" />
          <Readout label="E_k" value={`${eK.toFixed(3)} J`} tone="good" />
          <Readout label="E_p" value={`${eP.toFixed(3)} J`} tone="bad" />
          <Readout label="E_T (const)" value={`${eT.toFixed(3)} J`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Travelling Wave & Inverse-Square Intensity Lab
// =============================================================================
function WaveIntensityLabWidget() {
  const [freq, setFreq] = useState(2.0); // Hz
  const [lambda, setLambda] = useState(2.0); // m
  const [amp0, setAmp0] = useState(2.0); // reference amplitude at r = 1 m
  const [dist, setDist] = useState(1.0); // m
  const [viewMode, setViewMode] = useState<"space" | "time">("space");

  const speed = freq * lambda; // v = f * lambda
  const period = 1 / freq; // T = 1 / f
  const localAmp = amp0 / dist; // spherical wave A(r) = A0 / r
  const relIntensity = (amp0 * amp0) / (dist * dist); // I ∝ A0^2 / r^2

  // Wave SVG geometry (left/top box: x in 38..330, center y = 112, max half-height = 68)
  const wLeft = 38;
  const wRight = 328;
  const wSpan = wRight - wLeft; // 290 px
  const wMidY = 112;
  const ampPx = Math.min(64, (localAmp / 3.0) * 64);

  // Domain: 6.0 m in space mode, 1.5 s in time mode
  const domainMax = viewMode === "space" ? 6.0 : 1.5;
  const cycleLen = viewMode === "space" ? lambda : period;

  const wavePts: string[] = [];
  const nextPts: string[] = [];
  const samples = 120;
  for (let i = 0; i <= samples; i++) {
    const u = (i / samples) * domainMax;
    const px = wLeft + (i / samples) * wSpan;
    const yNow = Math.sin((2 * Math.PI * u) / cycleLen);
    const yLater = Math.sin((2 * Math.PI * (u - 0.08 * cycleLen)) / cycleLen);
    wavePts.push(`${px.toFixed(1)},${(wMidY - yNow * ampPx).toFixed(1)}`);
    nextPts.push(`${px.toFixed(1)},${(wMidY - yLater * ampPx).toFixed(1)}`);
  }

  // Highlight one wavelength or period bracket if it fits inside domainMax
  const bracketEndU = Math.min(domainMax, cycleLen);
  const bStartX = wLeft + (0.25 * cycleLen / domainMax) * wSpan;
  const bEndX = wLeft + (1.25 * cycleLen / domainMax) * wSpan;
  const showBracket = 1.25 * cycleLen <= domainMax + 0.01;

  // Highlight particle P at u = 0.5 * cycleLen (zero crossing with negative slope -> moves UP in space mode)
  const pU = 0.5 * cycleLen;
  const showParticle = pU <= domainMax && viewMode === "space";
  const pX = wLeft + (pU / domainMax) * wSpan;

  // Right panel: Inverse-square concentric wavefronts (center at 382, 118, radius 1m = 26px..5m = 130px)
  const srcX = 368;
  const srcY = 118;
  const rScale = 28; // 5 m -> 140 px (368 + 140 = 508 <= 540)
  const detX = srcX + dist * rScale;

  // Intensity bar (relative to max possible 3^2/1^2 = 9.0)
  const maxRelI = 9.0;
  const barFrac = Math.min(1, relIntensity / maxRelI);

  return (
    <WidgetFrame
      title="Travelling Wave & Inverse-Square Intensity Lab"
      tryThis={[
        "Toggle between **y–x (Snapshot)** and **y–t (1 Particle)** to see why the same curve reads **λ** on one axis and **T** on the other.",
        "Double the detector distance **r** from 1.0 m to 2.0 m: verify that **I** drops to **¼** while local amplitude **A(r)** only drops to **½**.",
        "Double source amplitude **A₀** from 1.0 to 2.0 at fixed r: watch relative intensity **I ∝ A²** jump by **×4**!",
      ]}
      caption={
        <div>
          <strong>Live model:</strong> Wave speed{" "}
          <strong>
            v = fλ = {freq.toFixed(1)} × {lambda.toFixed(2)} = {speed.toFixed(2)} m s⁻¹
          </strong>
          . At distance <strong>r = {dist.toFixed(2)} m</strong>, spherical spreading scales amplitude to{" "}
          <strong>A(r) = A₀/r = {localAmp.toFixed(2)}</strong> and relative intensity to{" "}
          <strong>I ∝ A₀²/r² = {relIntensity.toFixed(2)}</strong> (
          {((1 / (dist * dist)) * 100).toFixed(0)}% of its value at 1 m).
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Wave graph axis mode"
            value={viewMode}
            onChange={setViewMode}
            options={[
              { value: "space", label: "Displacement–Distance (y–x)" },
              { value: "time", label: "Displacement–Time (y–t)" },
            ]}
          />
          <span className="chip">
            {viewMode === "space" ? `1 cycle = λ = ${lambda.toFixed(2)} m` : `1 cycle = T = ${period.toFixed(2)} s`}
          </span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Frequency f"
            value={freq}
            min={1.0}
            max={8.0}
            step={0.5}
            onChange={setFreq}
            format={(val) => `${val.toFixed(1)} Hz`}
          />
          <Slider
            label="Wavelength λ"
            value={lambda}
            min={0.5}
            max={4.0}
            step={0.25}
            onChange={setLambda}
            format={(val) => `${val.toFixed(2)} m`}
          />
          <Slider
            label="Source amplitude A₀ (at 1 m)"
            value={amp0}
            min={0.5}
            max={3.0}
            step={0.1}
            onChange={setAmp0}
            format={(val) => `${val.toFixed(1)} units`}
          />
          <Slider
            label="Detector distance r"
            value={dist}
            min={1.0}
            max={5.0}
            step={0.25}
            onChange={setDist}
            format={(val) => `${val.toFixed(2)} m`}
          />
        </div>

        {/* SVG Display */}
        <div className="rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 540 250"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live travelling wave plot alongside concentric spherical shells illustrating inverse-square intensity and amplitude falloff"
            className="h-auto w-full"
          >
            {/* LEFT PANEL: Wave Plot */}
            <text x="183" y="18" fontSize="12" fontWeight="700" textAnchor="middle" fill="#171a2f">
              {viewMode === "space"
                ? `Wave Snapshot at r = ${dist.toFixed(2)} m (wave →)`
                : `Single Particle Oscillation at r = ${dist.toFixed(2)} m`}
            </text>
            {/* Axes */}
            <line x1={wLeft} y1={wMidY} x2={wRight + 6} y2={wMidY} stroke="#475569" strokeWidth="1.4" />
            <line x1={wLeft} y1="36" x2={wLeft} y2="188" stroke="#475569" strokeWidth="1.4" />
            <text x="28" y="46" fontSize="11" fontWeight="700" textAnchor="end" fill="#171a2f">
              y
            </text>
            <text x={wRight} y={wMidY + 16} fontSize="10.5" fontWeight="700" textAnchor="end" fill="#171a2f">
              {viewMode === "space" ? "distance x (m)" : "time t (s)"}
            </text>

            {/* Axis ticks */}
            {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
              const tx = wLeft + frac * wSpan;
              const label = (frac * domainMax).toFixed(viewMode === "space" ? 1 : 2);
              return (
                <g key={frac}>
                  <line x1={tx} y1={wMidY - 3} x2={tx} y2={wMidY + 3} stroke="#64748b" strokeWidth="1" />
                  {frac > 0 ? (
                    <text x={tx} y="200" fontSize="9.5" textAnchor="middle" fill="#64748b">
                      {label}
                    </text>
                  ) : null}
                </g>
              );
            })}

            {/* Slightly later wave (space mode only) */}
            {viewMode === "space" ? (
              <polyline
                points={nextPts.join(" ")}
                fill="none"
                stroke="#93c5fd"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            ) : null}

            {/* Primary wave */}
            <polyline
              points={wavePts.join(" ")}
              fill="none"
              stroke={viewMode === "space" ? "#2563eb" : "#7c3aed"}
              strokeWidth="2.6"
            />

            {/* Wavelength or Period bracket */}
            {showBracket ? (
              <g>
                <line x1={bStartX} y1="36" x2={bEndX} y2="36" stroke="#1d4ed8" strokeWidth="1.5" />
                <line x1={bStartX} y1="31" x2={bStartX} y2="42" stroke="#1d4ed8" strokeWidth="1.5" />
                <line x1={bEndX} y1="31" x2={bEndX} y2="42" stroke="#1d4ed8" strokeWidth="1.5" />
                <text
                  x={(bStartX + bEndX) / 2}
                  y="31"
                  fontSize="10.5"
                  fontWeight="700"
                  textAnchor="middle"
                  fill="#1d4ed8"
                >
                  {viewMode === "space" ? `λ = ${lambda.toFixed(2)} m` : `T = ${period.toFixed(2)} s`}
                </text>
              </g>
            ) : (
              <text x="183" y="34" fontSize="10" fontWeight="700" textAnchor="middle" fill="#1d4ed8">
                {viewMode === "space"
                  ? `λ = ${lambda.toFixed(2)} m (partial cycle shown: ${bracketEndU.toFixed(1)} m)`
                  : `T = ${period.toFixed(2)} s`}
              </text>
            )}

            {/* Particle P velocity nudge indicator */}
            {showParticle ? (
              <g>
                <circle cx={pX} cy={wMidY} r="4.2" fill="#15803d" />
                <line x1={pX} y1={wMidY - 4} x2={pX} y2={wMidY - 26} stroke="#15803d" strokeWidth="2.2" />
                <polygon points={`${pX},${wMidY - 30} ${pX - 4},${wMidY - 22} ${pX + 4},${wMidY - 22}`} fill="#15803d" />
                <text x={pX + 7} y={wMidY - 16} fontSize="9.5" fontWeight="700" fill="#15803d">
                  v_y ↑
                </text>
              </g>
            ) : null}

            {/* Amplitude marker */}
            <text x={wLeft + 6} y="224" fontSize="10" fontWeight="700" fill="#c2410c">
              Local amplitude A(r) = {localAmp.toFixed(2)} units
            </text>

            {/* Divider */}
            <line x1="346" y1="12" x2="346" y2="238" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* RIGHT PANEL: Spherical Wavefront Shells & Intensity Meter */}
            <text x="442" y="18" fontSize="12" fontWeight="700" textAnchor="middle" fill="#171a2f">
              Spherical Spreading (I ∝ A₀²/r²)
            </text>

            {/* Concentric shell arcs for r = 1, 2, 3, 4, 5 m */}
            {[1, 2, 3, 4, 5].map((rm) => {
              const rad = rm * rScale;
              const active = Math.abs(rm - dist) < 0.13;
              return (
                <g key={rm}>
                  <path
                    d={`M ${(srcX + rad * Math.cos(-0.68)).toFixed(1)} ${(srcY + rad * Math.sin(-0.68)).toFixed(1)} A ${rad} ${rad} 0 0 1 ${(srcX + rad * Math.cos(0.68)).toFixed(1)} ${(srcY + rad * Math.sin(0.68)).toFixed(1)}`}
                    fill="none"
                    stroke={active ? "#2563eb" : "#cbd5e1"}
                    strokeWidth={active ? 2.4 : 1.3}
                  />
                  <text x={srcX + rad} y={srcY + rad * 0.72 + 10} fontSize="8.5" textAnchor="middle" fill="#64748b">
                    {rm}m
                  </text>
                </g>
              );
            })}

            {/* Source dot */}
            <circle cx={srcX} cy={srcY} r="7" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
            <text x={srcX} y={srcY + 22} fontSize="9" fontWeight="700" textAnchor="middle" fill="#92400e">
              Source
            </text>

            {/* Ray line to detector */}
            <line x1={srcX + 7} y1={srcY} x2={detX} y2={srcY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Detector icon */}
            <rect x={detX - 5} y={srcY - 12} width="10" height="24" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.5" />
            <text x={detX} y={srcY - 17} fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#1d4ed8">
              r={dist.toFixed(1)}m
            </text>

            {/* Relative Intensity Meter Bar */}
            <text x="362" y="206" fontSize="10" fontWeight="700" fill="#171a2f">
              Relative Intensity I = {relIntensity.toFixed(2)}
            </text>
            <rect x="362" y="213" width="160" height="16" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
            <rect
              x="363"
              y="214"
              width={Math.max(4, barFrac * 158)}
              height="14"
              rx="3"
              fill={relIntensity >= 4 ? "#c2410c" : relIntensity >= 1 ? "#f59e0b" : "#2563eb"}
            />
          </svg>
        </div>

        {/* Live Readouts */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Wave speed v" value={`${speed.toFixed(2)} m s⁻¹`} tone="brand" />
          <Readout label="Period T" value={`${period.toFixed(3)} s`} tone="ink" />
          <Readout label="Amplitude A(r)" value={`${localAmp.toFixed(2)}`} tone="good" />
          <Readout label="Rel. Intensity I" value={`${relIntensity.toFixed(2)}`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "shm-phase-energy",
    title: "SHM Phase & Energy Synchroniser",
    blurb: "Drag amplitude x₀, angular frequency ω, and time t to link x–v–a phase shifts with the E_k + E_p = E_T energy parabola.",
    Component: ShmPhaseEnergyWidget,
  },
  {
    id: "wave-intensity-lab",
    title: "Travelling Wave & Inverse-Square Intensity Lab",
    blurb: "Explore v = fλ, compare y–x vs y–t graphs, and watch how spherical spreading scales I ∝ A₀²/r² and A ∝ 1/r.",
    Component: WaveIntensityLabWidget,
  },
];
