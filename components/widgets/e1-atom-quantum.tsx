"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

const HC_EV_NM = 1239.84; // exact hc/e in eV·nm
const H_OVER_E_14 = 0.41357; // h/e in V per (10^14 Hz)

type MetalKey = "Na" | "Zn" | "Cu" | "Pt";

const METALS: Record<MetalKey, { name: string; symbol: MetalKey; phi: number; color: string }> = {
  Na: { name: "Sodium (Na)", symbol: "Na", phi: 2.28, color: "#2563eb" },
  Zn: { name: "Zinc (Zn)", symbol: "Zn", phi: 4.3, color: "#0d9488" },
  Cu: { name: "Copper (Cu)", symbol: "Cu", phi: 4.5, color: "#ea580c" },
  Pt: { name: "Platinum (Pt)", symbol: "Pt", phi: 5.65, color: "#7c3aed" },
};

/** Approximate perceptual colour for wavelength in nm (UV -> violet, IR -> deep crimson). */
function wavelengthColor(nm: number): { hex: string; region: string } {
  if (nm < 380) return { hex: "#8b5cf6", region: "Ultraviolet (UV)" };
  if (nm < 440) return { hex: "#6d28d9", region: "Visible · Violet" };
  if (nm < 485) return { hex: "#2563eb", region: "Visible · Blue" };
  if (nm < 510) return { hex: "#06b6d4", region: "Visible · Cyan" };
  if (nm < 565) return { hex: "#16a34a", region: "Visible · Green" };
  if (nm < 595) return { hex: "#eab308", region: "Visible · Yellow" };
  if (nm < 625) return { hex: "#f97316", region: "Visible · Orange" };
  if (nm <= 750) return { hex: "#dc2626", region: "Visible · Red" };
  return { hex: "#9f1239", region: "Infrared (IR)" };
}

// =============================================================================
// WIDGET 1: Photoelectric Effect & Millikan Graph Lab (HL)
// =============================================================================
function PhotoelectricLab() {
  const [metalKey, setMetalKey] = useState<MetalKey>("Na");
  const [wavelength, setWavelength] = useState<number>(360);
  const [intensity, setIntensity] = useState<number>(60);

  const metal = METALS[metalKey];
  const f14 = 3000 / wavelength; // frequency in 10^14 Hz
  const photonEv = HC_EV_NM / wavelength;
  const f014 = metal.phi / H_OVER_E_14;
  const lambda0 = HC_EV_NM / metal.phi;
  const emits = photonEv >= metal.phi;
  const ekMax = emits ? photonEv - metal.phi : 0;
  const vs = ekMax;
  const currentPct = emits ? intensity : 0;
  const { hex: rayColor, region } = wavelengthColor(wavelength);

  // Millikan graph coordinate mapping: x = f14 in [0, 22], y = Vs in [-6.5, 6.5]
  const gx = (f: number) => 46 + (f / 22) * 238;
  const gy = (v: number) => 118 - (v / 6.5) * 96;

  // Number of photons & ejected electrons to draw in the vacuum cell
  const rayCount = Math.max(2, Math.round(intensity / 18));
  const electronCount = emits ? Math.max(1, Math.round(intensity / 16)) : 0;
  const speedArrowLen = emits ? Math.min(34, 10 + vs * 4.5) : 0;

  return (
    <WidgetFrame
      title="Photoelectric Effect & Millikan Graph Lab (HL)"
      tryThis={[
        "Start on **Sodium (Na)** at 360 nm and slide **Intensity** from 20% to 100%. Watch the electron stream grow while the dot on the {{V_s}}–*f* graph stays completely frozen!",
        "Drag **Wavelength** past 544 nm on Sodium (or switch to **Zinc**) to cross the threshold {{f_0}} and watch emission stop instantly.",
        "Switch across **Na → Zn → Cu → Pt** and notice every metal's line has the exact same slope {{h/e}}.",
      ]}
      caption={
        emits ? (
          <span>
            Each {wavelength} nm photon ({region}) carries <strong>{photonEv.toFixed(2)} eV</strong>, exceeding {metal.name}&apos;s work function ({metal.phi.toFixed(2)} eV). Electrons eject immediately with <M>{"E_(k,max)"}</M> = <strong>{ekMax.toFixed(2)} eV</strong> and stopping potential <M>{"V_s"}</M> = <strong>{vs.toFixed(2)} V</strong>. Changing intensity alters only the photocurrent ({currentPct}%), never <M>{"V_s"}</M>.
          </span>
        ) : (
          <span>
            Each {wavelength} nm photon ({region}) carries only <strong>{photonEv.toFixed(2)} eV</strong>, which is below {metal.name}&apos;s work function (<strong>{metal.phi.toFixed(2)} eV</strong>, threshold <M>{"λ_0"}</M> = {lambda0.toFixed(0)} nm). Even at <strong>100% intensity</strong>, zero electrons are emitted!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ink-2">Target metal cathode</span>
          <Segmented
            label="Target metal"
            value={metalKey}
            onChange={setMetalKey}
            options={(Object.keys(METALS) as MetalKey[]).map((k) => ({
              value: k,
              label: `${k} (${METALS[k].phi.toFixed(2)} eV)`,
            }))}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Light wavelength λ"
            value={wavelength}
            min={150}
            max={700}
            step={5}
            onChange={setWavelength}
            format={(v) => `${v} nm (${(3000 / v).toFixed(1)} × 10¹⁴ Hz)`}
          />
          <Slider
            label="Light intensity (brightness)"
            value={intensity}
            min={20}
            max={100}
            step={10}
            onChange={setIntensity}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Panel A: Live Photocell */}
          <div className="rounded-xl border border-line bg-surface-2 p-2">
            <svg
              viewBox="0 0 300 220"
              className="h-auto w-full"
              role="img"
              aria-label={`Photocell with ${metal.name} illuminated by ${wavelength} nm light at ${intensity}% intensity; ${emits ? `emitting electrons with stopping potential ${vs.toFixed(2)} V` : "no photoelectrons emitted because photon energy is below work function"}`}
            >
              <text x="150" y="18" textAnchor="middle" fontSize="11.5" fontWeight="700" className="fill-ink">
                Vacuum Photocell ({metal.name})
              </text>

              {/* Vacuum glass tube */}
              <rect x="20" y="32" width="260" height="156" rx="18" className="fill-surface stroke-line" strokeWidth="1.8" />

              {/* Metal cathode (left) */}
              <rect x="38" y="56" width="16" height="108" rx="3" fill={metal.color} />
              <text x="46" y="180" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-ink-2">
                Cathode ({metal.symbol})
              </text>

              {/* Collector anode (right) */}
              <rect x="248" y="64" width="12" height="92" rx="3" className="fill-ink-2" />
              <text x="254" y="180" textAnchor="middle" fontSize="9.5" fontWeight="700" className="fill-ink-2">
                Collector
              </text>

              {/* Incident light rays from top-right onto cathode */}
              {Array.from({ length: rayCount }, (_, i) => {
                const yHit = 68 + (i * 84) / Math.max(1, rayCount - 1);
                return (
                  <g key={`ray-${i}`}>
                    <line
                      x1={118 + i * 10}
                      y1={36}
                      x2={55}
                      y2={yHit}
                      stroke={rayColor}
                      strokeWidth="2.2"
                      strokeDasharray="6 3"
                      strokeOpacity="0.9"
                    />
                    <circle cx={55} cy={yHit} r="2.5" fill={rayColor} />
                  </g>
                );
              })}

              {/* Emitted electrons or No Emission banner */}
              {emits ? (
                <g>
                  {Array.from({ length: electronCount }, (_, i) => {
                    const y = 72 + (i * 76) / Math.max(1, electronCount - 1);
                    const x = 92 + ((i * 43) % 105);
                    return (
                      <g key={`e-${i}`}>
                        <line
                          x1={x}
                          y1={y}
                          x2={Math.min(242, x + speedArrowLen)}
                          y2={y}
                          stroke="#16a34a"
                          strokeWidth="1.8"
                        />
                        <circle cx={x} cy={y} r="6.5" fill="#16a34a" />
                        <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fontWeight="700" fill="#ffffff">
                          e⁻
                        </text>
                      </g>
                    );
                  })}
                  <rect x="86" y="192" width="128" height="20" rx="6" className="fill-good-soft" />
                  <text x="150" y="205" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-good">
                    Emission! (f ≥ f₀)
                  </text>
                </g>
              ) : (
                <g>
                  <rect x="78" y="94" width="152" height="36" rx="8" className="fill-bad-soft" />
                  <text x="154" y="110" textAnchor="middle" fontSize="10.5" fontWeight="800" className="fill-bad">
                    No Electrons Ejected
                  </text>
                  <text x="154" y="123" textAnchor="middle" fontSize="9.5" className="fill-bad">
                    hf ({photonEv.toFixed(2)} eV) &lt; Φ ({metal.phi.toFixed(2)} eV)
                  </text>
                  <rect x="86" y="192" width="128" height="20" rx="6" className="fill-bad-soft" />
                  <text x="150" y="205" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-bad">
                    Below Threshold (f &lt; f₀)
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Panel B: Millikan V_s vs f Graph */}
          <div className="rounded-xl border border-line bg-surface-2 p-2">
            <svg
              viewBox="0 0 300 220"
              className="h-auto w-full"
              role="img"
              aria-label={`Millikan stopping potential versus frequency graph showing parallel lines of gradient h over e and current operating point at f = ${f14.toFixed(1)} times 10 to the 14 Hz and Vs = ${vs.toFixed(2)} V`}
            >
              <text x="155" y="18" textAnchor="middle" fontSize="11.5" fontWeight="700" className="fill-ink">
                Millikan Graph (V_s vs f, slope = h/e)
              </text>

              {/* Grid lines */}
              {[5, 10, 15, 20].map((f) => (
                <g key={`fx-${f}`}>
                  <line x1={gx(f)} y1={24} x2={gx(f)} y2={206} className="stroke-line" strokeWidth="1" />
                  <text x={gx(f)} y={gy(0) + 13} textAnchor="middle" fontSize="9" className="fill-ink-2">
                    {f}
                  </text>
                </g>
              ))}
              {[-4, -2, 2, 4, 6].map((v) => (
                <g key={`vy-${v}`}>
                  <line x1={46} y1={gy(v)} x2={284} y2={gy(v)} className="stroke-line" strokeWidth="1" />
                  <text x={41} y={gy(v) + 3} textAnchor="end" fontSize="9" className="fill-ink-2">
                    {v}
                  </text>
                </g>
              ))}

              {/* Axes */}
              <line x1={46} y1={22} x2={46} y2={208} className="stroke-ink-2" strokeWidth="1.6" />
              <line x1={42} y1={gy(0)} x2={288} y2={gy(0)} className="stroke-ink-2" strokeWidth="1.6" />
              <text x={32} y={32} textAnchor="end" fontSize="10" fontWeight="700" className="fill-ink">
                V_s (V)
              </text>
              <text x={286} y={gy(0) - 5} textAnchor="end" fontSize="9.5" fontWeight="700" className="fill-ink">
                f (×10¹⁴ Hz)
              </text>

              {/* Faint comparison lines for other metals */}
              {(Object.keys(METALS) as MetalKey[])
                .filter((k) => k !== metalKey)
                .map((k) => {
                  const m = METALS[k];
                  const mf0 = m.phi / H_OVER_E_14;
                  const fTop = Math.min(21.5, (6.2 + m.phi) / H_OVER_E_14);
                  const vTop = H_OVER_E_14 * fTop - m.phi;
                  return (
                    <line
                      key={`other-${k}`}
                      x1={gx(mf0)}
                      y1={gy(0)}
                      x2={gx(fTop)}
                      y2={gy(vTop)}
                      stroke={m.color}
                      strokeOpacity="0.28"
                      strokeWidth="1.6"
                    />
                  );
                })}

              {/* Active metal extrapolated dashed segment (0 to f0) */}
              <line
                x1={gx(0)}
                y1={gy(-metal.phi)}
                x2={gx(f014)}
                y2={gy(0)}
                stroke={metal.color}
                strokeWidth="1.8"
                strokeDasharray="4 3"
              />
              {/* Active metal solid segment (f0 to edge) */}
              {(() => {
                const fEnd = Math.min(21.5, (6.2 + metal.phi) / H_OVER_E_14);
                const vEnd = H_OVER_E_14 * fEnd - metal.phi;
                return (
                  <line
                    x1={gx(f014)}
                    y1={gy(0)}
                    x2={gx(fEnd)}
                    y2={gy(vEnd)}
                    stroke={metal.color}
                    strokeWidth="2.8"
                  />
                );
              })()}

              {/* Threshold f0 & y-intercept -Phi/e markers */}
              <circle cx={gx(f014)} cy={gy(0)} r="3.5" fill={metal.color} />
              <text x={gx(f014)} y={gy(0) + 24} textAnchor="middle" fontSize="9" fontWeight="700" fill={metal.color}>
                f₀ = {f014.toFixed(1)}
              </text>
              <circle cx={gx(0)} cy={gy(-metal.phi)} r="3.5" fill={metal.color} />
              <text x={gx(0) + 5} y={gy(-metal.phi) + 3} fontSize="9" fontWeight="700" fill={metal.color}>
                −Φ/e = −{metal.phi.toFixed(2)} V
              </text>

              {/* Current frequency vertical guide and plotted operating dot */}
              <line
                x1={gx(f14)}
                y1={gy(0)}
                x2={gx(f14)}
                y2={gy(vs)}
                stroke={rayColor}
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />
              <circle
                cx={gx(f14)}
                cy={gy(vs)}
                r="6"
                fill={emits ? "#16a34a" : "#dc2626"}
                stroke="#ffffff"
                strokeWidth="2"
              />
              <text
                x={Math.min(242, Math.max(82, gx(f14)))}
                y={Math.max(36, gy(vs) - 10)}
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="800"
                fill={emits ? "#15803d" : "#dc2626"}
              >
                ({f14.toFixed(1)}, {vs.toFixed(2)} V)
              </text>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Photon hf" value={`${photonEv.toFixed(2)} eV`} tone="brand" />
          <Readout label="E_k,max" value={`${ekMax.toFixed(2)} eV`} tone={emits ? "good" : "bad"} />
          <Readout label="Stopping V_s" value={`${vs.toFixed(2)} V`} tone={emits ? "good" : "bad"} />
          <Readout label="Photocurrent" value={emits ? `${currentPct}%` : "0%"} tone={emits ? "ink" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Hydrogen Energy-Level Transition Spectrometer
// =============================================================================
function HydrogenSpectrometer() {
  const [ni, setNi] = useState<number>(3);
  const [nf, setNf] = useState<number>(2);

  const energyOf = (n: number) => -13.6 / (n * n);
  const ei = energyOf(ni);
  const ef = energyOf(nf);
  const same = ni === nf;
  const isEmission = ni > nf;
  const deltaE = Math.abs(ei - ef);
  const lambdaNm = same ? 0 : HC_EV_NM / deltaE;
  const lowN = Math.min(ni, nf);

  const seriesName = same
    ? "No transition"
    : lowN === 1
      ? "Lyman (UV)"
      : lowN === 2
        ? "Balmer (Visible)"
        : lowN === 3
          ? "Paschen (IR)"
          : lowN === 4
            ? "Brackett (IR)"
            : "Pfund (IR)";

  const { hex: lineColor, region } = same ? { hex: "#64748b", region: "—" } : wavelengthColor(lambdaNm);

  // Visually clear (non-overlapping) y-positions for n = 1..6 + infinity
  const levelY: Record<number, number> = {
    1: 214,
    2: 146,
    3: 106,
    4: 78,
    5: 56,
    6: 38,
  };
  const yInf = 18;

  const inVisible = !same && lambdaNm >= 380 && lambdaNm <= 750;

  return (
    <WidgetFrame
      title="Hydrogen Energy-Level Transition Spectrometer"
      tryThis={[
        "Compare **Balmer** visible lines (**3→2** red 656 nm, **4→2** cyan 486 nm, **5→2** blue 434 nm, **6→2** violet 410 nm).",
        "Drop into **n = 1** (**2→1** Lyman-α): notice Δ*E* jumps to 10.2 eV, pushing λ deep into the **ultraviolet** (122 nm)!",
        "Swap {{n_i}} and {{n_f}} (e.g. **2→3** instead of **3→2**) to flip from **emission** to **absorption** at the exact same wavelength.",
      ]}
      caption={
        same ? (
          <span>
            Select two <strong>different</strong> quantum numbers (<M>{"n_i != n_f"}</M>) to emit or absorb a photon!
          </span>
        ) : (
          <span>
            Transition <M>{`n = ${ni} -> n = ${nf}`}</M> is <strong>{isEmission ? "photon emission" : "photon absorption"}</strong> in the <strong>{seriesName}</strong> series: <M>{`ΔE = ${deltaE.toFixed(2)}`}</M> eV gives <M>{`λ = hc/ΔE = ${lambdaNm.toFixed(0)}`}</M> nm ({region}).
          </span>
        )
      }
    >
      <div className="space-y-4">
        {/* Quick famous-line presets */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { label: "Lyman-α (2→1)", a: 2, b: 1 },
            { label: "Balmer H-α (3→2)", a: 3, b: 2 },
            { label: "Balmer H-β (4→2)", a: 4, b: 2 },
            { label: "Balmer H-γ (5→2)", a: 5, b: 2 },
            { label: "Paschen-α (4→3)", a: 4, b: 3 },
            { label: "Absorb (2→3)", a: 2, b: 3 },
          ].map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setNi(p.a);
                setNf(p.b);
              }}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                ni === p.a && nf === p.b
                  ? "border-brand bg-brand-soft text-brand"
                  : "border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface-2 px-3 py-2">
            <Stepper label="Initial level n_i" value={ni} min={1} max={6} onChange={setNi} />
          </div>
          <div className="rounded-xl border border-line bg-surface-2 px-3 py-2">
            <Stepper label="Final level n_f" value={nf} min={1} max={6} onChange={setNf} />
          </div>
        </div>

        {/* Live Energy Ladder + Spectroscope SVG */}
        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 264"
            className="h-auto w-full"
            role="img"
            aria-label={`Hydrogen energy-level ladder showing transition from n=${ni} to n=${nf}${same ? " (no transition)" : `, ${isEmission ? "emitting" : "absorbing"} a ${lambdaNm.toFixed(0)} nm ${seriesName} photon`}`}
          >
            <defs>
              <linearGradient id="visRainbow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6d28d9" />
                <stop offset="22%" stopColor="#2563eb" />
                <stop offset="38%" stopColor="#06b6d4" />
                <stop offset="54%" stopColor="#16a34a" />
                <stop offset="68%" stopColor="#eab308" />
                <stop offset="82%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <marker id="specArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill={lineColor} />
              </marker>
            </defs>

            {/* Left: Hydrogen Energy Ladder */}
            <line x1="68" y1={yInf} x2="262" y2={yInf} className="stroke-ink-2" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="60" y={yInf + 4} textAnchor="end" fontSize="10" className="fill-ink-2">
              n = ∞
            </text>
            <text x="268" y={yInf + 4} fontSize="10" className="fill-ink-2">
              0.00 eV
            </text>

            {[1, 2, 3, 4, 5, 6].map((n) => {
              const y = levelY[n];
              const active = n === ni || n === nf;
              return (
                <g key={`lvl-${n}`}>
                  <line
                    x1="68"
                    y1={y}
                    x2="262"
                    y2={y}
                    stroke={active ? lineColor : undefined}
                    className={active ? undefined : "stroke-ink"}
                    strokeWidth={active ? 2.8 : 1.5}
                    strokeOpacity={active ? 1 : 0.45}
                  />
                  <text
                    x="60"
                    y={y + 4}
                    textAnchor="end"
                    fontSize="10.5"
                    fontWeight={active ? "800" : "600"}
                    className={active ? "fill-ink" : "fill-ink-2"}
                  >
                    n = {n}
                  </text>
                  <text
                    x="268"
                    y={y + 4}
                    fontSize="10"
                    fontWeight={active ? "800" : "500"}
                    className={active ? "fill-ink" : "fill-ink-2"}
                  >
                    {energyOf(n).toFixed(2)} eV
                  </text>
                </g>
              );
            })}

            {/* Electron marker & Transition Arrow */}
            {!same ? (
              <g>
                <circle cx="165" cy={levelY[ni]} r="6" fill={lineColor} />
                <line
                  x1="165"
                  y1={levelY[ni] + (isEmission ? 7 : -7)}
                  x2="165"
                  y2={levelY[nf] + (isEmission ? -8 : 8)}
                  stroke={lineColor}
                  strokeWidth="3.2"
                  markerEnd="url(#specArrow)"
                />
                <rect x="178" y={(levelY[ni] + levelY[nf]) / 2 - 14} width="78" height="26" rx="6" className="fill-surface stroke-line" />
                <text
                  x="217"
                  y={(levelY[ni] + levelY[nf]) / 2 - 2}
                  textAnchor="middle"
                  fontSize="9.5"
                  fontWeight="800"
                  fill={lineColor}
                >
                  {isEmission ? "EMIT" : "ABSORB"}
                </text>
                <text
                  x="217"
                  y={(levelY[ni] + levelY[nf]) / 2 + 9}
                  textAnchor="middle"
                  fontSize="9.5"
                  fontWeight="700"
                  className="fill-ink"
                >
                  {deltaE.toFixed(2)} eV
                </text>
              </g>
            ) : (
              <circle cx="165" cy={levelY[ni]} r="6.5" className="fill-brand" />
            )}

            {/* Right: Spectroscope Strip & Photon Readout */}
            <g transform="translate(230, 0)">
              <text x="206" y="42" textAnchor="middle" fontSize="11.5" fontWeight="700" className="fill-ink">
                {same
                  ? "Spectroscope View"
                  : isEmission
                    ? "Emission Line Spectrum View"
                    : "Absorption Line Spectrum View"}
              </text>

              {/* Visible spectrum strip box (x=108..318 in local coords? Let's place x=106..318? Wait: parent width is 560, translate 230 leaves 330px) */}
              {(() => {
                // Local coords inside translate(230, 0): x from 96 to 316 -> width 220
                const bx = 96;
                const bw = 220;
                const mapVis = (nm: number) => bx + ((nm - 380) / (750 - 380)) * bw;
                const balmerLines = [656.3, 486.1, 434.0, 410.2];
                return (
                  <g>
                    {/* Background strip: black for emission, rainbow for absorption */}
                    <rect
                      x={bx}
                      y={58}
                      width={bw}
                      height={54}
                      rx="6"
                      fill={!same && !isEmission ? "url(#visRainbow)" : "#0f172a"}
                      stroke="#475569"
                      strokeWidth="1.5"
                    />

                    {/* Faint reference Balmer lines */}
                    {balmerLines.map((b) => (
                      <line
                        key={`ref-${b}`}
                        x1={mapVis(b)}
                        y1={60}
                        x2={mapVis(b)}
                        y2={110}
                        stroke={!same && !isEmission ? "#0f172a" : wavelengthColor(b).hex}
                        strokeOpacity={!same && !isEmission ? 0.35 : 0.25}
                        strokeWidth="1.5"
                      />
                    ))}

                    {/* Active line if in visible range */}
                    {inVisible ? (
                      <g>
                        <line
                          x1={mapVis(lambdaNm)}
                          y1={58}
                          x2={mapVis(lambdaNm)}
                          y2={112}
                          stroke={isEmission ? lineColor : "#0f172a"}
                          strokeWidth={isEmission ? 4.5 : 4}
                        />
                        <polygon
                          points={`${mapVis(lambdaNm)},115 ${mapVis(lambdaNm) - 5},123 ${mapVis(lambdaNm) + 5},123`}
                          fill={lineColor}
                        />
                      </g>
                    ) : !same ? (
                      <text x={bx + bw / 2} y={89} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#e2e8f0">
                        {lambdaNm < 380 ? "← Ultraviolet (λ < 380 nm)" : "Infrared (λ > 750 nm) →"}
                      </text>
                    ) : null}

                    {/* Scale ticks */}
                    {[400, 500, 600, 700].map((nm) => (
                      <text key={`tk-${nm}`} x={mapVis(nm)} y={136} textAnchor="middle" fontSize="9" className="fill-ink-2">
                        {nm} nm
                      </text>
                    ))}

                    {/* Summary card inside SVG */}
                    <rect x={bx} y={150} width={bw} height={74} rx="8" className="fill-surface stroke-line" strokeWidth="1.2" />
                    <text x={bx + bw / 2} y={170} textAnchor="middle" fontSize="10.5" fontWeight="800" fill={lineColor}>
                      {seriesName}
                    </text>
                    <text x={bx + bw / 2} y={189} textAnchor="middle" fontSize="10" className="fill-ink">
                      {same ? "Pick n_i ≠ n_f" : `λ = ${lambdaNm.toFixed(1)} nm · f = ${(3000 / lambdaNm).toFixed(2)} × 10¹⁴ Hz`}
                    </text>
                    <text x={bx + bw / 2} y={208} textAnchor="middle" fontSize="9.5" className="fill-ink-2">
                      {same ? "E_n = −13.6 / n² eV" : `E(${ni}) = ${ei.toFixed(2)} eV → E(${nf}) = ${ef.toFixed(2)} eV`}
                    </text>
                  </g>
                );
              })()}
            </g>

            {/* Bottom note */}
            <text x="280" y="252" textAnchor="middle" fontSize="10" className="fill-ink-2">
              Hydrogen energy levels converge as n → ∞: E_n = −13.6 / n² eV (vertical scale expanded for clarity)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout
            label="Process"
            value={same ? "None" : isEmission ? "Emission" : "Absorption"}
            tone={same ? "ink" : isEmission ? "good" : "brand"}
          />
          <Readout label="ΔE" value={same ? "0.00 eV" : `${deltaE.toFixed(2)} eV`} tone="brand" />
          <Readout label="Wavelength λ" value={same ? "—" : `${lambdaNm.toFixed(0)} nm`} tone="ink" />
          <Readout label="Series" value={seriesName.split(" ")[0]} tone={inVisible ? "good" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "photoelectric-millikan-lab",
    title: "Photoelectric Effect & Millikan Graph Lab (HL)",
    blurb: "Switch metals and sweep wavelength & intensity to separate frequency (V_s) from intensity (photocurrent) live.",
    Component: PhotoelectricLab,
  },
  {
    id: "hydrogen-transition-spectrometer",
    title: "Hydrogen Energy-Level Transition Spectrometer",
    blurb: "Jump electrons between n = 1..6 to compute ΔE, wavelength λ, and watch Lyman, Balmer & Paschen spectral lines appear.",
    Component: HydrogenSpectrometer,
  },
];
