"use client";

import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Helper: approximate visible wavelength (400–700 nm) → CSS rgb() string
// ---------------------------------------------------------------------------
function wavelengthToRgb(nm: number): string {
  let r = 0;
  let g = 0;
  let b = 0;
  if (nm < 440) {
    r = -(nm - 440) / 40;
    b = 1;
  } else if (nm < 490) {
    g = (nm - 440) / 50;
    b = 1;
  } else if (nm < 510) {
    g = 1;
    b = -(nm - 510) / 20;
  } else if (nm < 580) {
    r = (nm - 510) / 70;
    g = 1;
  } else if (nm < 645) {
    r = 1;
    g = -(nm - 645) / 65;
  } else {
    r = 1;
  }
  const toByte = (c: number) => Math.round(Math.max(0, Math.min(1, c)) * 230);
  return `rgb(${toByte(r)}, ${toByte(g)}, ${toByte(b)})`;
}

// ===========================================================================
// WIDGET 1: Double-Slit & Single-Slit Diffraction Modulator
// ===========================================================================
function DiffractionModulator() {
  const [lambdaNm, setLambdaNm] = useState(580);
  const [dMm, setDMm] = useState(0.24);
  const [bMm, setBMm] = useState(0.06);

  const D = 2.0; // fixed screen distance in metres
  const yRangeMm = 28; // plot from -28 mm to +28 mm
  const color = wavelengthToRgb(lambdaNm);

  const ratio = dMm / bMm;
  const sExactMm = ((lambdaNm * 1e-9 * D) / (dMm * 1e-3)) * 1000;
  const firstMinMm = ((lambdaNm * 1e-9 * D) / (bMm * 1e-3)) * 1000;
  const centralWidthMm = 2 * firstMinMm;

  const nearestInt = Math.round(ratio);
  const isMissingExact = Math.abs(ratio - nearestInt) < 0.04;
  const maxOrderInside = Math.ceil(ratio - 1e-9) - 1;
  const peaksInCentral = Math.max(1, 2 * maxOrderInside + 1);

  const W = 540;
  const H = 260;
  const padL = 36;
  const padR = 16;
  const plotW = W - padL - padR;
  const stripTop = 14;
  const stripH = 28;
  const graphTop = 62;
  const graphBot = 222;
  const graphH = graphBot - graphTop;

  const yToX = (yMm: number) => padL + ((yMm + yRangeMm) / (2 * yRangeMm)) * plotW;

  const { modPath, modFill, envPath, stripCells, missingMarkers } = useMemo(() => {
    const toX = (yMm: number) => padL + ((yMm + yRangeMm) / (2 * yRangeMm)) * plotW;
    const N = 360;
    const modPts: string[] = [];
    const envPts: string[] = [];
    const lamM = lambdaNm * 1e-9;
    const dM = dMm * 1e-3;
    const bM = bMm * 1e-3;

    for (let i = 0; i <= N; i++) {
      const yMm = -yRangeMm + (2 * yRangeMm * i) / N;
      const sinTheta = (yMm * 1e-3) / D;
      const beta = (Math.PI * bM * sinTheta) / lamM;
      const alpha = (Math.PI * dM * sinTheta) / lamM;
      const sinc = Math.abs(beta) < 1e-7 ? 1 : Math.sin(beta) / beta;
      const env = sinc * sinc;
      const mod = env * Math.cos(alpha) * Math.cos(alpha);
      const x = toX(yMm);
      const yEnv = graphBot - env * graphH;
      const yMod = graphBot - mod * graphH;
      envPts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${yEnv.toFixed(1)}`);
      modPts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${yMod.toFixed(1)}`);
    }

    // Simulated optical fringe band (140 vertical slivers)
    const cells: { x: number; w: number; opacity: number }[] = [];
    const Mcells = 140;
    const cellW = plotW / Mcells;
    for (let i = 0; i < Mcells; i++) {
      const yMm = -yRangeMm + (2 * yRangeMm * (i + 0.5)) / Mcells;
      const sinTheta = (yMm * 1e-3) / D;
      const beta = (Math.PI * bM * sinTheta) / lamM;
      const alpha = (Math.PI * dM * sinTheta) / lamM;
      const sinc = Math.abs(beta) < 1e-7 ? 1 : Math.sin(beta) / beta;
      const intensity = sinc * sinc * Math.cos(alpha) * Math.cos(alpha);
      // Slight gamma lift so dim secondary peaks remain visible like real laser viewing
      cells.push({ x: padL + i * cellW, w: cellW + 0.6, opacity: Math.pow(intensity, 0.55) });
    }

    // Exact or near-exact missing orders on the plot
    const missing: { x: number; n: number }[] = [];
    if (Math.abs(ratio - Math.round(ratio)) < 0.04) {
      const k = Math.round(ratio);
      for (let m = 1; m <= 3; m++) {
        const ord = m * k;
        const pos = ord * sExactMm;
        if (pos <= yRangeMm - 1) {
          missing.push({ x: toX(pos), n: ord });
          missing.push({ x: toX(-pos), n: -ord });
        }
      }
    }

    const fill = `${modPts.join(" ")} L${toX(yRangeMm).toFixed(1)},${graphBot} L${toX(-yRangeMm).toFixed(1)},${graphBot} Z`;
    return {
      modPath: modPts.join(" "),
      modFill: fill,
      envPath: envPts.join(" "),
      stripCells: cells,
      missingMarkers: missing,
    };
  }, [lambdaNm, dMm, bMm, ratio, sExactMm, graphH, plotW]);

  return (
    <WidgetFrame
      title="Double-Slit & Single-Slit Diffraction Modulator"
      tryThis={[
        "Keep {{d = 0.24}} mm fixed and slide slit width {{b}} from 0.04 mm to 0.08 mm: watch the envelope narrow while the fine fringe spacing stays locked!",
        "Set {{d / b = 4}} (e.g. {{d = 0.24}} mm, {{b = 0.06}} mm) to see orders {{n = ±4}} completely extinguished by the first single-slit zero.",
        "Sweep wavelength {{λ}} from violet (420 nm) to red (680 nm) and watch both patterns stretch together.",
      ]}
      caption={
        <>
          At screen distance <strong>D = 2.00 m</strong>, fine double-slit maxima sit every{" "}
          <strong>{sExactMm.toFixed(2)} mm</strong> (<M>{"s = (λ D)/d"}</M>) inside a single-slit envelope of central
          width <strong>{centralWidthMm.toFixed(1)} mm</strong> (<M>{"2 λ D / b"}</M>). With{" "}
          <strong>d / b = {ratio.toFixed(2)}</strong>,{" "}
          {isMissingExact ? (
            <>
              double-slit orders <strong>n = ±{nearestInt}, ±{2 * nearestInt}…</strong> land right on single-slit zeros
              and <strong>vanish (missing orders)</strong>, leaving <strong>{peaksInCentral} bright fringes</strong>{" "}
              strictly inside the central envelope.
            </>
          ) : (
            <>
              no order lands identically on a zero, leaving <strong>{peaksInCentral} bright fringes</strong> strictly
              inside the central diffraction envelope.
            </>
          )}
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Wavelength λ"
            value={lambdaNm}
            min={400}
            max={700}
            step={10}
            onChange={setLambdaNm}
            format={(v) => `${v} nm`}
          />
          <Slider
            label="Slit separation d"
            value={dMm}
            min={0.16}
            max={0.48}
            step={0.02}
            onChange={setDMm}
            format={(v) => `${v.toFixed(2)} mm`}
          />
          <Slider
            label="Slit width b"
            value={bMm}
            min={0.02}
            max={0.12}
            step={0.01}
            onChange={setBMm}
            format={(v) => `${v.toFixed(2)} mm`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label={`Modulated double-slit intensity graph for wavelength ${lambdaNm} nm, slit separation ${dMm.toFixed(2)} mm, and slit width ${bMm.toFixed(2)} mm`}
          >
            {/* Dark simulated screen strip */}
            <rect x={padL} y={stripTop} width={plotW} height={stripH} rx={6} fill="#090d1a" />
            {stripCells.map((c, idx) => (
              <rect
                key={idx}
                x={c.x}
                y={stripTop + 2}
                width={c.w}
                height={stripH - 4}
                fill={color}
                fillOpacity={c.opacity}
              />
            ))}
            <text x={padL + 6} y={stripTop + 11} fontSize={9} fontWeight={700} fill="#e2e8f0">
              Screen view (D = 2.0 m)
            </text>

            {/* Graph frame & axes */}
            <line x1={padL} y1={graphBot} x2={W - padR} y2={graphBot} className="stroke-ink-2" strokeWidth={1.4} />
            <line x1={padL} y1={graphTop} x2={padL} y2={graphBot} className="stroke-ink-2" strokeWidth={1.2} />
            <line
              x1={yToX(0)}
              y1={graphTop}
              x2={yToX(0)}
              y2={graphBot}
              className="stroke-line"
              strokeWidth={1}
              strokeDasharray="3,3"
            />

            {/* First single-slit minimum markers */}
            {firstMinMm <= yRangeMm ? (
              <>
                <line
                  x1={yToX(firstMinMm)}
                  y1={graphTop + 6}
                  x2={yToX(firstMinMm)}
                  y2={graphBot}
                  stroke="#d97706"
                  strokeWidth={1.2}
                  strokeDasharray="3,3"
                />
                <line
                  x1={yToX(-firstMinMm)}
                  y1={graphTop + 6}
                  x2={yToX(-firstMinMm)}
                  y2={graphBot}
                  stroke="#d97706"
                  strokeWidth={1.2}
                  strokeDasharray="3,3"
                />
                <text x={yToX(firstMinMm)} y={graphTop + 4} textAnchor="middle" fontSize={9} fontWeight={700} fill="#d97706">
                  +λD/b
                </text>
                <text x={yToX(-firstMinMm)} y={graphTop + 4} textAnchor="middle" fontSize={9} fontWeight={700} fill="#d97706">
                  −λD/b
                </text>
              </>
            ) : null}

            {/* Modulated intensity curve */}
            <path d={modFill} fill={color} fillOpacity={0.22} />
            <path d={modPath} fill="none" stroke={color} strokeWidth={2} />

            {/* Single-slit envelope */}
            <path d={envPath} fill="none" stroke="#d97706" strokeWidth={1.7} strokeDasharray="5,4" />

            {/* Missing order markers */}
            {missingMarkers.map((m) => (
              <g key={m.n}>
                <circle cx={m.x} cy={graphBot} r={4.5} fill="#ffffff" stroke="#dc2626" strokeWidth={2} />
                <text x={m.x} y={graphBot + 14} textAnchor="middle" fontSize={9} fontWeight={800} fill="#dc2626">
                  ×{Math.abs(m.n)}
                </text>
              </g>
            ))}

            {/* X-axis ticks */}
            {[-20, -10, 0, 10, 20].map((mm) => (
              <g key={mm}>
                <line x1={yToX(mm)} y1={graphBot} x2={yToX(mm)} y2={graphBot + 4} className="stroke-ink-2" strokeWidth={1} />
                <text x={yToX(mm)} y={graphBot + 26} textAnchor="middle" fontSize={10} className="fill-ink-2">
                  {mm === 0 ? "0" : `${mm > 0 ? "+" : "−"}${Math.abs(mm)} mm`}
                </text>
              </g>
            ))}

            {/* Y-axis label & legend */}
            <text x={14} y={(graphTop + graphBot) / 2} textAnchor="middle" fontSize={10} fontWeight={700} className="fill-ink-2" transform={`rotate(-90 14 ${(graphTop + graphBot) / 2})`}>
              Relative Intensity I / I₀
            </text>
            <line x1={W - 148} y1={graphTop + 10} x2={W - 128} y2={graphTop + 10} stroke="#d97706" strokeWidth={1.8} strokeDasharray="4,3" />
            <text x={W - 122} y={graphTop + 13} fontSize={9.5} fontWeight={700} fill="#d97706">
              Single-slit envelope
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Fringe spacing s" value={`${sExactMm.toFixed(2)} mm`} />
          <Readout label="Central width" value={`${centralWidthMm.toFixed(1)} mm`} tone="ink" />
          <Readout label="Ratio d / b" value={ratio.toFixed(2)} tone={isMissingExact ? "bad" : "brand"} />
          <Readout label="Central peaks" value={`${peaksInCentral}`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// WIDGET 2: Standing Wave Pipe & String Harmonics Lab
// ===========================================================================
type ResonatorMode = "string" | "open-open" | "open-closed";

function StandingWaveLab() {
  const [system, setSystem] = useState<ResonatorMode>("string");
  const [modeIndex, setModeIndex] = useState(2); // 1..5
  const [lengthM, setLengthM] = useState(1.2);

  const waveSpeed = system === "string" ? 240 : 340;
  const harmonic = system === "open-closed" ? 2 * modeIndex - 1 : modeIndex;
  const wavelength = system === "open-closed" ? (4 * lengthM) / harmonic : (2 * lengthM) / harmonic;
  const freq = waveSpeed / wavelength;
  const fundamental = system === "open-closed" ? waveSpeed / (4 * lengthM) : waveSpeed / (2 * lengthM);

  const W = 540;
  const H = 215;
  const x0 = 46;
  const x1 = 494;
  const spanX = x1 - x0;
  const midY = 104;
  const amp = 46;

  const { upperPath, lowerPath, envFill, nodes, antinodes } = useMemo(() => {
    const N = 240;
    const up: string[] = [];
    const lo: string[] = [];
    for (let i = 0; i <= N; i++) {
      const frac = i / N;
      const x = x0 + frac * spanX;
      let val = 0;
      if (system === "string") {
        val = Math.sin(harmonic * Math.PI * frac);
      } else if (system === "open-open") {
        val = Math.cos(harmonic * Math.PI * frac);
      } else {
        val = Math.sin((harmonic * Math.PI * frac) / 2);
      }
      const y1 = midY - val * amp;
      const y2 = midY + val * amp;
      up.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y1.toFixed(1)}`);
      lo.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y2.toFixed(1)}`);
    }

    // Envelope fill polygon (upper left-to-right, then lower right-to-left)
    const revLo: string[] = [];
    for (let i = N; i >= 0; i--) {
      const frac = i / N;
      const x = x0 + frac * spanX;
      let val = 0;
      if (system === "string") val = Math.sin(harmonic * Math.PI * frac);
      else if (system === "open-open") val = Math.cos(harmonic * Math.PI * frac);
      else val = Math.sin((harmonic * Math.PI * frac) / 2);
      revLo.push(`L${x.toFixed(1)},${(midY + val * amp).toFixed(1)}`);
    }

    const ns: number[] = [];
    const as: number[] = [];
    if (system === "string") {
      for (let k = 0; k <= harmonic; k++) ns.push(k / harmonic);
      for (let k = 0; k < harmonic; k++) as.push((k + 0.5) / harmonic);
    } else if (system === "open-open") {
      for (let k = 0; k <= harmonic; k++) as.push(k / harmonic);
      for (let k = 0; k < harmonic; k++) ns.push((k + 0.5) / harmonic);
    } else {
      // Closed at left (x=0 -> node), open at right (x=L -> antinode)
      for (let k = 0; k < modeIndex; k++) {
        ns.push((2 * k) / harmonic);
        as.push((2 * k + 1) / harmonic);
      }
    }

    return {
      upperPath: up.join(" "),
      lowerPath: lo.join(" "),
      envFill: `${up.join(" ")} ${revLo.join(" ")} Z`,
      nodes: ns,
      antinodes: as,
    };
  }, [system, harmonic, modeIndex, spanX]);

  const fmtOrd = (n: number) => (n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`);
  const ordinalH = fmtOrd(harmonic);
  const nextOddOrd = fmtOrd(harmonic + 2);

  const bracketEnd =
    system === "open-closed" && harmonic === 1
      ? x1
      : system === "open-closed"
        ? x0 + (2 / harmonic) * spanX
        : x0 + (1 / harmonic) * spanX;
  const bracketLabel = system === "open-closed" && harmonic === 1 ? "λ / 4 = L" : "λ / 2";

  return (
    <WidgetFrame
      title="Standing Wave Pipe & String Harmonics Lab"
      tryThis={[
        "Compare **Open–Open Pipe** vs **Open–Closed Pipe** at the same length {{L = 1.20}} m: see why the open–closed fundamental drops by a full octave!",
        "Switch to **Open–Closed Pipe** and step through modes 1 → 5: notice only **odd harmonics** (1st, 3rd, 5th, 7th, 9th) can satisfy a node at the closed wall and an antinode at the open mouth.",
        "Verify that adjacent nodes are always separated by {{λ / 2}} and node-to-antinode spacing is {{λ / 4}}.",
      ]}
      caption={
        <>
          {system === "string" && (
            <>
              <strong>Fixed String (N–N, v = 240 m s⁻¹):</strong> Both ends are fixed nodes, fitting{" "}
              <strong>{harmonic} half-wavelength{harmonic > 1 ? "s" : ""}</strong> inside L (<M>{"λ_n = (2L)/n"}</M>).
              All integer harmonics exist: next mode is <strong>{Math.round((harmonic + 1) * fundamental)} Hz</strong>.
            </>
          )}
          {system === "open-open" && (
            <>
              <strong>Open–Open Pipe (A–A, v = 340 m s⁻¹):</strong> Both open mouths are displacement antinodes
              (pressure nodes), allowing all harmonics (<M>{"f_n = (n v)/(2L)"}</M>). Fundamental{" "}
              <strong>{fundamental.toFixed(1)} Hz</strong>; next resonance{" "}
              <strong>{((harmonic + 1) * fundamental).toFixed(1)} Hz</strong>.
            </>
          )}
          {system === "open-closed" && (
            <>
              <strong>Open–Closed Pipe (N–A, v = 340 m s⁻¹):</strong> Closed left cap forces a displacement node while
              open right mouth forces an antinode, permitting <strong>odd harmonics only</strong> (
              <M>{"λ = (4L)/(2k - 1)"}</M>). Fundamental <strong>{fundamental.toFixed(1)} Hz</strong>; next allowed
              resonance is the <strong>{nextOddOrd} harmonic</strong> at{" "}
              <strong>{((harmonic + 2) * fundamental).toFixed(1)} Hz</strong>.
            </>
          )}
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Resonator type"
            value={system}
            onChange={setSystem}
            options={[
              { value: "string", label: "Fixed String" },
              { value: "open-open", label: "Open–Open Pipe" },
              { value: "open-closed", label: "Open–Closed Pipe" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label={system === "open-closed" ? "Resonant mode (odd harmonic)" : "Harmonic number n"}
            value={modeIndex}
            min={1}
            max={5}
            step={1}
            onChange={setModeIndex}
            format={() =>
              system === "open-closed" ? `${ordinalH} harmonic (mode ${modeIndex})` : `${ordinalH} harmonic (n = ${harmonic})`
            }
          />
          <Slider
            label="Length L"
            value={lengthM}
            min={0.4}
            max={2.0}
            step={0.05}
            onChange={setLengthM}
            format={(v) => `${v.toFixed(2)} m`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label={`Standing wave diagram for ${system} in the ${ordinalH} harmonic with length ${lengthM.toFixed(2)} metres, wavelength ${wavelength.toFixed(2)} metres, and frequency ${freq.toFixed(1)} hertz`}
          >
            {/* Pipe walls OR String end-clamps */}
            {system !== "string" ? (
              <g>
                <rect x={x0} y={midY - amp - 12} width={spanX} height={2 * amp + 24} fill="currentColor" fillOpacity={0.04} />
                <line x1={x0} y1={midY - amp - 12} x2={x1} y2={midY - amp - 12} className="stroke-ink" strokeWidth={3} />
                <line x1={x0} y1={midY + amp + 12} x2={x1} y2={midY + amp + 12} className="stroke-ink" strokeWidth={3} />
                {system === "open-closed" ? (
                  <line x1={x0} y1={midY - amp - 13} x2={x0} y2={midY + amp + 13} className="stroke-ink" strokeWidth={5} />
                ) : null}
                <text x={x0 - 8} y={midY + 4} textAnchor="end" fontSize={10} fontWeight={700} className="fill-ink-2">
                  {system === "open-closed" ? "Closed" : "Open"}
                </text>
                <text x={x1 + 8} y={midY + 4} textAnchor="start" fontSize={10} fontWeight={700} className="fill-ink-2">
                  Open
                </text>
              </g>
            ) : (
              <g>
                <rect x={x0 - 8} y={midY - 26} width={8} height={52} rx={2} className="fill-ink-2" />
                <rect x={x1} y={midY - 26} width={8} height={52} rx={2} className="fill-ink-2" />
              </g>
            )}

            {/* Equilibrium axis */}
            <line x1={x0} y1={midY} x2={x1} y2={midY} className="stroke-line" strokeWidth={1.3} strokeDasharray="4,4" />

            {/* Standing wave envelope */}
            <path d={envFill} className="fill-brand" fillOpacity={0.14} />
            <path d={upperPath} fill="none" className="stroke-brand" strokeWidth={2.5} />
            <path d={lowerPath} fill="none" className="stroke-brand" strokeWidth={1.8} strokeDasharray="5,4" />

            {/* Antinodes */}
            {antinodes.map((f, idx) => {
              const x = x0 + f * spanX;
              return (
                <g key={`a-${idx}`}>
                  <line x1={x} y1={midY - amp + 6} x2={x} y2={midY + amp - 6} stroke="#0d9488" strokeWidth={1.3} strokeDasharray="2,2" />
                  <circle cx={x} cy={midY - amp} r={3} fill="#0d9488" />
                  <circle cx={x} cy={midY + amp} r={3} fill="#0d9488" />
                  <text x={x} y={midY - amp - 18} textAnchor="middle" fontSize={10} fontWeight={800} fill="#0d9488">
                    A
                  </text>
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((f, idx) => {
              const x = x0 + f * spanX;
              return (
                <g key={`n-${idx}`}>
                  <circle cx={x} cy={midY} r={4.5} fill="#dc2626" stroke="#ffffff" strokeWidth={1.3} />
                  <text x={x} y={midY + amp + 26} textAnchor="middle" fontSize={10} fontWeight={800} fill="#dc2626">
                    N
                  </text>
                </g>
              );
            })}

            {/* Wavelength segment bracket at bottom */}
            <g>
              <line x1={x0} y1={H - 18} x2={bracketEnd} y2={H - 18} stroke="#2563eb" strokeWidth={1.8} />
              <line x1={x0} y1={H - 23} x2={x0} y2={H - 13} stroke="#2563eb" strokeWidth={1.6} />
              <line x1={bracketEnd} y1={H - 23} x2={bracketEnd} y2={H - 13} stroke="#2563eb" strokeWidth={1.6} />
              <text x={(x0 + bracketEnd) / 2} y={H - 4} textAnchor="middle" fontSize={10} fontWeight={700} className="fill-brand">
                {bracketLabel} = {(bracketLabel.includes("4") ? wavelength / 4 : wavelength / 2).toFixed(2)} m
              </text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Harmonic" value={ordinalH} />
          <Readout label="Wavelength λ" value={`${wavelength.toFixed(2)} m`} tone="ink" />
          <Readout label="Frequency f" value={`${freq.toFixed(1)} Hz`} tone="good" />
          <Readout label="Nodes · Antinodes" value={`${nodes.length} N · ${antinodes.length} A`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "double-slit-diffraction-modulator",
    title: "Double-Slit & Single-Slit Diffraction Modulator",
    blurb: "Adjust wavelength λ, slit separation d, and slit width b to see interference fringes modulated inside the single-slit envelope and trigger missing orders.",
    Component: DiffractionModulator,
  },
  {
    id: "standing-wave-harmonics-lab",
    title: "Standing Wave Pipe & String Harmonics Lab",
    blurb: "Switch between a fixed string, open–open pipe, and open–closed pipe to explore nodes, antinodes, wavelengths λₙ, and resonant frequencies fₙ.",
    Component: StandingWaveLab,
  },
];
