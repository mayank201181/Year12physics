"use client";
import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// Helpers for Widget 1: Interactive Hertzsprung–Russell (HR) Star Explorer
// ============================================================================
const T_SUN = 5780;

function starColour(tempK: number): string {
  // Smooth physically inspired blackbody colour ramp (2600 K -> 36 000 K)
  if (tempK < 3600) return "#ff6b4a";
  if (tempK < 4800) return "#ffa45b";
  if (tempK < 6000) return "#ffe484";
  if (tempK < 7800) return "#fff6d6";
  if (tempK < 11000) return "#dbeeff";
  if (tempK < 20000) return "#9ecbff";
  return "#6aa8ff";
}

function spectralClass(tempK: number): string {
  if (tempK >= 30000) return "O (Blue)";
  if (tempK >= 10000) return "B (Blue-white)";
  if (tempK >= 7500) return "A (White)";
  if (tempK >= 6000) return "F (Yellow-white)";
  if (tempK >= 5200) return "G (Yellow)";
  if (tempK >= 3700) return "K (Orange)";
  return "M (Red)";
}

function classifyStar(tempK: number, rSolar: number, lSolar: number): { label: string; note: string } {
  if (rSolar <= 0.05 && tempK >= 4800) {
    return {
      label: "White Dwarf",
      note: "Very small Earth-sized radius (bottom-left): hot surface yet dim overall because surface area 4πR² is tiny.",
    };
  }
  if (lSolar >= 3000 && rSolar >= 15) {
    return {
      label: tempK < 5500 ? "Red Supergiant" : "Blue Supergiant",
      note: "Extreme luminosity near the top of the HR diagram — an enormous bloated envelope in the late stages of a massive star.",
    };
  }
  if (tempK <= 5600 && lSolar >= 15 && rSolar >= 4) {
    return {
      label: "Red Giant",
      note: "Cool surface (right side) yet high luminosity (upper-right) thanks to a vastly expanded radius after core hydrogen exhaustion.",
    };
  }
  const logL = Math.log10(lSolar);
  const expectedMsLogL = 4.6 * Math.log10(tempK / T_SUN);
  if (Math.abs(logL - expectedMsLogL) <= 1.25 && rSolar >= 0.08 && rSolar <= 22) {
    return {
      label: "Main Sequence",
      note: "Stable core hydrogen fusion in hydrostatic equilibrium, obeying the mass–luminosity relation L ∝ M³·⁵.",
    };
  }
  if (lSolar > 100 && tempK > 5600) {
    return {
      label: "Luminous Giant",
      note: "Hot and expanded star lying above the Main Sequence band.",
    };
  }
  return {
    label: lSolar < 0.05 ? "Compact Subdwarf" : "Subgiant",
    note: "Transitional region between major stellar groups on the HR diagram.",
  };
}

function fmtSolar(val: number): string {
  if (val >= 10000 || val < 0.001) {
    const exp = Math.floor(Math.log10(val));
    const mant = val / 10 ** exp;
    return `${mant.toFixed(2)} × 10^${exp}`;
  }
  if (val >= 100) return val.toFixed(0);
  if (val >= 10) return val.toFixed(1);
  if (val >= 1) return val.toFixed(2);
  return val.toFixed(3);
}

type StarPreset = "sun" | "betelgeuse" | "siriusB" | "rigel" | "custom";

const PRESETS: Record<Exclude<StarPreset, "custom">, { logT: number; logR: number; name: string }> = {
  sun: { logT: Math.log10(5780), logR: 0, name: "Sun" },
  betelgeuse: { logT: Math.log10(3500), logR: Math.log10(750), name: "Betelgeuse" },
  siriusB: { logT: Math.log10(25000), logR: Math.log10(0.0085), name: "Sirius B" },
  rigel: { logT: Math.log10(12100), logR: Math.log10(78), name: "Rigel" },
};

function HRStarExplorer() {
  const [preset, setPreset] = useState<StarPreset>("sun");
  const [logT, setLogT] = useState<number>(Math.log10(5780));
  const [logR, setLogR] = useState<number>(0);

  const tempK = Math.round(10 ** logT / 10) * 10;
  const rSolar = 10 ** logR;
  const lSolar = rSolar * rSolar * (tempK / T_SUN) ** 4;
  const logL = Math.log10(lSolar);
  const lambdaNm = Math.round((2.9e-3 / tempK) * 1e9);
  const colour = starColour(tempK);
  const spec = spectralClass(tempK);
  const starClass = classifyStar(tempK, rSolar, lSolar);

  // SVG plot geometry: inverted log10(T) on x [4.602 (40000K) -> 3.398 (2500K)], log10(L/Lsun) on y [-4 -> +6]
  const W = 560;
  const H = 320;
  const left = 64;
  const right = 532;
  const top = 36;
  const bottom = 266;
  const logTMax = Math.log10(40000);
  const logTMin = Math.log10(2500);
  const logLMin = -4;
  const logLMax = 6;

  const xOfT = (t: number) => left + ((logTMax - Math.log10(t)) / (logTMax - logTMin)) * (right - left);
  const yOfLogL = (ll: number) => bottom - ((ll - logLMin) / (logLMax - logLMin)) * (bottom - top);

  const clampedX = Math.max(left + 6, Math.min(right - 6, xOfT(tempK)));
  const clampedY = Math.max(top + 6, Math.min(bottom - 6, yOfLogL(logL)));
  const outOfPlot = logL > logLMax || logL < logLMin;

  // Constant radius lines: logL = 2*log10(R) + 4*log10(T/T_sun)
  const constRadiusLine = (r: number) => {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i <= 40; i++) {
      const lt = logTMax - (i / 40) * (logTMax - logTMin);
      const t = 10 ** lt;
      const ll = 2 * Math.log10(r) + 4 * Math.log10(t / T_SUN);
      if (ll >= logLMin && ll <= logLMax) {
        pts.push([xOfT(t), yOfLogL(ll)]);
      }
    }
    return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  };

  const applyPreset = (p: StarPreset) => {
    setPreset(p);
    if (p !== "custom") {
      setLogT(PRESETS[p].logT);
      setLogR(PRESETS[p].logR);
    }
  };

  return (
    <WidgetFrame
      title="Interactive Hertzsprung–Russell (HR) Star Explorer"
      tryThis={[
        "Start at the Sun, then drop temperature to ~3500 K and slide radius up to ~50 {{R_☉}} to build a **Red Giant**.",
        "Keep luminosity near {{1 L_☉}} while doubling temperature — by what factor must radius shrink?",
        "Switch between **Sirius B** and **Betelgeuse** to see how {{L ∝ R^2 T^4}} separates White Dwarfs from Supergiants.",
      ]}
      caption={
        <span>
          <strong>{starClass.label}</strong> ({spec}): {starClass.note}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<StarPreset>
            label="Star presets"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "sun", label: "Sun" },
              { value: "betelgeuse", label: "Betelgeuse" },
              { value: "siriusB", label: "Sirius B" },
              { value: "rigel", label: "Rigel" },
              { value: "custom", label: "Custom" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="Surface temperature T"
            value={logT}
            min={Math.log10(2600)}
            max={Math.log10(36000)}
            step={0.01}
            onChange={(v) => {
              setLogT(v);
              setPreset("custom");
            }}
            format={() => `${tempK.toLocaleString("en-GB")} K`}
          />
          <Slider
            label="Stellar radius R / R☉"
            value={logR}
            min={-2.2}
            max={3.0}
            step={0.02}
            onChange={(v) => {
              setLogR(v);
              setPreset("custom");
            }}
            format={() => `${fmtSolar(rSolar)} R☉`}
          />
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Interactive Hertzsprung-Russell diagram plotting a ${starClass.label} at ${tempK} kelvin and luminosity ${fmtSolar(lSolar)} solar luminosities`}
            className="h-auto w-full"
          >
            <rect x={left} y={top} width={right - left} height={bottom - top} fill="var(--surface)" stroke="var(--ink)" strokeWidth={1.4} />

            {/* Constant-radius diagonal lines */}
            {[0.01, 1, 100].map((r) => (
              <path
                key={r}
                d={constRadiusLine(r)}
                fill="none"
                stroke="var(--line)"
                strokeWidth={1.1}
                strokeDasharray="4 4"
              />
            ))}

            {/* Reference stellar groups */}
            <ellipse cx={xOfT(5200)} cy={yOfLogL(4.8)} rx={138} ry={18} fill="var(--bad-soft)" opacity={0.75} />
            <text x={xOfT(5200)} y={yOfLogL(4.8) + 4} fontSize={10.5} fontWeight={800} fill="var(--bad)" textAnchor="middle">
              Supergiants
            </text>

            <ellipse cx={xOfT(4100)} cy={yOfLogL(2.1)} rx={58} ry={24} fill="var(--accent-soft)" opacity={0.85} />
            <text x={xOfT(4100)} y={yOfLogL(2.1) + 4} fontSize={10.5} fontWeight={800} fill="var(--warn)" textAnchor="middle">
              Red Giants
            </text>

            <path
              d={`M ${xOfT(32000).toFixed(1)} ${yOfLogL(5.0).toFixed(1)} C ${xOfT(14000).toFixed(1)} ${yOfLogL(2.4).toFixed(1)}, ${xOfT(7500).toFixed(1)} ${yOfLogL(0.8).toFixed(1)}, ${xOfT(5780).toFixed(1)} ${yOfLogL(0).toFixed(1)} C ${xOfT(4200).toFixed(1)} ${yOfLogL(-1.1).toFixed(1)}, ${xOfT(3200).toFixed(1)} ${yOfLogL(-2.4).toFixed(1)}, ${xOfT(2750).toFixed(1)} ${yOfLogL(-3.3).toFixed(1)}`}
              fill="none"
              stroke="var(--brand-soft)"
              strokeWidth={24}
              strokeLinecap="round"
            />
            <text
              x={xOfT(9500)}
              y={yOfLogL(1.2) + 4}
              fontSize={10.5}
              fontWeight={800}
              fill="var(--brand)"
              textAnchor="middle"
              transform={`rotate(24 ${xOfT(9500).toFixed(1)} ${(yOfLogL(1.2) + 4).toFixed(1)})`}
            >
              Main Sequence
            </text>

            <ellipse cx={xOfT(14000)} cy={yOfLogL(-2.6)} rx={66} ry={18} fill="var(--info-soft)" opacity={0.85} />
            <text x={xOfT(14000)} y={yOfLogL(-2.6) + 4} fontSize={10.5} fontWeight={800} fill="var(--info)" textAnchor="middle">
              White Dwarfs
            </text>

            {/* Reference Sun marker */}
            <circle cx={xOfT(T_SUN)} cy={yOfLogL(0)} r={4} fill="var(--accent)" stroke="var(--ink)" strokeWidth={1.2} />
            <text x={xOfT(T_SUN) - 7} y={yOfLogL(0) + 14} fontSize={9.5} fontWeight={700} fill="var(--ink-2)" textAnchor="end">
              Sun
            </text>

            {/* Live crosshairs */}
            <line x1={clampedX} y1={top} x2={clampedX} y2={bottom} stroke="var(--ink-2)" strokeWidth={1} strokeDasharray="3 3" opacity={0.6} />
            <line x1={left} y1={clampedY} x2={right} y2={clampedY} stroke="var(--ink-2)" strokeWidth={1} strokeDasharray="3 3" opacity={0.6} />

            {/* Live plotted star */}
            <circle cx={clampedX} cy={clampedY} r={Math.max(7, Math.min(20, 10 + logR * 3.5))} fill={colour} opacity={0.32} />
            <circle cx={clampedX} cy={clampedY} r={Math.max(4.5, Math.min(12, 6.5 + logR * 1.8))} fill={colour} stroke="var(--ink)" strokeWidth={1.6} />
            {outOfPlot ? (
              <text x={clampedX} y={clampedY < (top + bottom) / 2 ? top + 18 : bottom - 8} fontSize={9.5} fontWeight={800} fill="var(--bad)" textAnchor="middle">
                {logL > logLMax ? "▲ Above 10⁶ L☉" : "▼ Below 10⁻⁴ L☉"}
              </text>
            ) : null}

            {/* Y-axis ticks */}
            {[-4, -2, 0, 2, 4, 6].map((e) => (
              <g key={e}>
                <line x1={left - 4} y1={yOfLogL(e)} x2={left} y2={yOfLogL(e)} stroke="var(--ink)" strokeWidth={1.2} />
                <text x={left - 8} y={yOfLogL(e) + 3.5} fontSize={10} fill="var(--ink-2)" textAnchor="end">
                  {e === 0 ? "1" : `10^${e}`}
                </text>
              </g>
            ))}
            <text x={18} y={(top + bottom) / 2} transform={`rotate(-90 18 ${(top + bottom) / 2})`} fontSize={11} fontWeight={700} fill="var(--ink)" textAnchor="middle">
              Luminosity (L / L☉)
            </text>

            {/* X-axis inverted temperature ticks */}
            {[40000, 20000, 10000, 5800, 3000].map((t) => (
              <g key={t}>
                <line x1={xOfT(t)} y1={bottom} x2={xOfT(t)} y2={bottom + 4} stroke="var(--ink)" strokeWidth={1.2} />
                <text x={xOfT(t)} y={bottom + 16} fontSize={10} fill="var(--ink-2)" textAnchor="middle">
                  {t.toLocaleString("en-GB")}
                </text>
              </g>
            ))}
            <text x={(left + right) / 2} y={bottom + 36} fontSize={11} fontWeight={700} fill="var(--ink)" textAnchor="middle">
              ← Hotter (Blue)     Surface Temperature, T / K     Cooler (Red) →
            </text>

            {/* Top spectral class strip */}
            {[
              { cls: "O", t: 35000 },
              { cls: "B", t: 18000 },
              { cls: "A", t: 9000 },
              { cls: "F", t: 6700 },
              { cls: "G", t: 5600 },
              { cls: "K", t: 4400 },
              { cls: "M", t: 3100 },
            ].map((s) => (
              <text key={s.cls} x={xOfT(s.t)} y={24} fontSize={11} fontWeight={800} fill="var(--ink-2)" textAnchor="middle">
                {s.cls}
              </text>
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Luminosity" value={`${fmtSolar(lSolar)} L☉`} tone="brand" />
          <Readout label="Wien λmax" value={`${lambdaNm} nm`} tone="ink" />
          <Readout label="Spectral Class" value={spec.split(" ")[0]} tone="good" />
          <Readout label="HR Region" value={starClass.label} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// Widget 2: Radioactive Decay & Half-Life Simulator (Exponential + Linearized)
// ============================================================================
type DecayView = "both" | "exp" | "lin";

function RadioactiveDecaySimulator() {
  const [n0Millions, setN0Millions] = useState<number>(800); // N₀ in 10^6 nuclei
  const [halfLife, setHalfLife] = useState<number>(8); // T_½ in s
  const [time, setTime] = useState<number>(12); // elapsed time t in s
  const [view, setView] = useState<DecayView>("both");

  const tMax = 40;
  const lambda = Math.LN2 / halfLife; // s^-1
  const nRemain = n0Millions * Math.exp(-lambda * time); // in 10^6 nuclei
  const nDecayed = n0Millions - nRemain;
  const activityMBq = lambda * nRemain; // since N is in 10^6 nuclei, λN is exact MBq!
  const halfLivesElapsed = time / halfLife;

  // Exponential curve SVG coordinates
  const W = 320;
  const H = 220;
  const padL = 44;
  const padR = 16;
  const padT = 22;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const xOf = (t: number) => padL + (t / tMax) * plotW;
  const yExpOf = (nVal: number) => padT + plotH - (nVal / 1000) * plotH;

  // Build smooth exponential path
  const expPts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const ti = (i / 80) * tMax;
    const ni = n0Millions * Math.exp(-lambda * ti);
    expPts.push(`${i === 0 ? "M" : "L"} ${xOf(ti).toFixed(1)} ${yExpOf(ni).toFixed(1)}`);
  }
  const expPath = expPts.join(" ");

  // Linearized ln(N / 10^6) vs t coordinates
  const lnMin = 0;
  const lnMax = Math.log(1000) + 0.3; // ~7.21
  const yLinOf = (lnVal: number) => padT + plotH - ((lnVal - lnMin) / (lnMax - lnMin)) * plotH;
  const lnN0 = Math.log(n0Millions);
  const lnNt = Math.log(Math.max(1e-6, nRemain));
  const tZeroCross = lnN0 / lambda;
  const tEndLine = Math.min(tMax, tZeroCross);
  const lnEndLine = Math.max(lnMin, lnN0 - lambda * tEndLine);

  // Gradient triangle on linearized plot
  const tTri1 = Math.min(4, tEndLine * 0.2);
  const tTri2 = Math.min(tTri1 + Math.min(12, halfLife * 1.2), tEndLine * 0.85);
  const lnTri1 = lnN0 - lambda * tTri1;
  const lnTri2 = lnN0 - lambda * tTri2;

  return (
    <WidgetFrame
      title="Radioactive Decay & Half-Life Simulator"
      tryThis={[
        "Set {{T_½ = 8}} s and drag time *t* to 8 s, 16 s, and 24 s — verify *N* drops to 50%, 25%, and 12.5%.",
        "Double the half-life {{T_½}} and watch how the straight-line slope {{ -λ }} on the {{ln N}} graph becomes half as steep!",
        "Notice that changing {{N_0}} shifts the {{ln N}} intercept vertically without changing its gradient {{ -λ }}.",
      ]}
      caption={
        <span>
          At <M>{`t = ${time.toFixed(1)}`}</M> s (<M>{`${halfLivesElapsed.toFixed(2)} T_½`}</M>),{" "}
          <strong>{((nRemain / n0Millions) * 100).toFixed(1)}%</strong> of the original nuclei remain undecayed. Because{" "}
          <M>{"A = λ N"}</M>, activity decays with the exact same half-life and decay constant <M>{`λ = ${lambda.toFixed(4)}`}</M> s⁻¹.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<DecayView>
            label="Decay plot view"
            value={view}
            onChange={setView}
            options={[
              { value: "both", label: "Both Graphs" },
              { value: "exp", label: "Exponential N(t)" },
              { value: "lin", label: "Linearized ln N" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Initial nuclei N₀"
            value={n0Millions}
            min={100}
            max={1000}
            step={50}
            onChange={setN0Millions}
            format={(v) => `${v} × 10⁶`}
          />
          <Slider
            label="Half-life T½"
            value={halfLife}
            min={2}
            max={20}
            step={0.5}
            onChange={setHalfLife}
            format={(v) => `${v.toFixed(1)} s`}
          />
          <Slider
            label="Elapsed time t"
            value={time}
            min={0}
            max={tMax}
            step={0.5}
            onChange={setTime}
            format={(v) => `${v.toFixed(1)} s`}
          />
        </div>

        <div className={`grid gap-3 ${view === "both" ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {view !== "lin" ? (
            <div className="w-full overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
              <div className="mb-1 text-center text-xs font-extrabold text-ink">Exponential Decay: N(t) = N₀ e⁻λᵗ</div>
              <svg
                viewBox={`0 0 ${W} ${H}`}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Exponential decay curve showing ${nRemain.toFixed(1)} million nuclei remaining at t equals ${time} seconds`}
                className="h-auto w-full"
              >
                <rect x={padL} y={padT} width={plotW} height={plotH} fill="var(--surface)" stroke="var(--line)" strokeWidth={1} />
                {/* Half-life step markers */}
                {[1, 2, 3].map((k) => {
                  const tk = k * halfLife;
                  if (tk > tMax) return null;
                  const nk = n0Millions / 2 ** k;
                  return (
                    <g key={k} stroke="var(--line)" strokeWidth={1} strokeDasharray="3 3">
                      <line x1={xOf(tk)} y1={yExpOf(nk)} x2={xOf(tk)} y2={padT + plotH} />
                      <line x1={padL} y1={yExpOf(nk)} x2={xOf(tk)} y2={yExpOf(nk)} />
                      <text x={xOf(tk)} y={padT + plotH + 12} fontSize={8.5} fill="var(--ink-2)" textAnchor="middle" stroke="none">
                        {k}T½
                      </text>
                    </g>
                  );
                })}
                {/* Axes */}
                <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--ink)" strokeWidth={1.4} />
                <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="var(--ink)" strokeWidth={1.4} />
                {/* Exponential curve */}
                <path d={expPath} fill="none" stroke="var(--brand)" strokeWidth={2.6} />
                {/* Current time guide & marker */}
                <line x1={xOf(time)} y1={yExpOf(nRemain)} x2={xOf(time)} y2={padT + plotH} stroke="var(--accent)" strokeWidth={1.6} strokeDasharray="4 3" />
                <circle cx={xOf(time)} cy={yExpOf(nRemain)} r={5.5} fill="var(--accent)" stroke="var(--ink)" strokeWidth={1.4} />
                {/* Y labels */}
                {[0, 500, 1000].map((v) => (
                  <text key={v} x={padL - 6} y={yExpOf(v) + 3} fontSize={9.5} fill="var(--ink-2)" textAnchor="end">
                    {v}
                  </text>
                ))}
                <text x={14} y={padT + plotH / 2} transform={`rotate(-90 14 ${padT + plotH / 2})`} fontSize={9.5} fontWeight={700} fill="var(--ink)" textAnchor="middle">
                  N (×10⁶)
                </text>
                <text x={padL + plotW / 2} y={H - 6} fontSize={9.5} fontWeight={700} fill="var(--ink)" textAnchor="middle">
                  Time t (s)
                </text>
              </svg>
            </div>
          ) : null}

          {view !== "exp" ? (
            <div className="w-full overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
              <div className="mb-1 text-center text-xs font-extrabold text-ink">
                Linearized Plot: ln N = ln N₀ − λt (slope = −{lambda.toFixed(3)} s⁻¹)
              </div>
              <svg
                viewBox={`0 0 ${W} ${H}`}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Linearized natural log of nuclei versus time with straight-line gradient minus ${lambda.toFixed(3)} per second`}
                className="h-auto w-full"
              >
                <rect x={padL} y={padT} width={plotW} height={plotH} fill="var(--surface)" stroke="var(--line)" strokeWidth={1} />
                {/* Axes */}
                <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="var(--ink)" strokeWidth={1.4} />
                <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="var(--ink)" strokeWidth={1.4} />
                {/* Straight line */}
                <line x1={xOf(0)} y1={yLinOf(lnN0)} x2={xOf(tEndLine)} y2={yLinOf(lnEndLine)} stroke="var(--good)" strokeWidth={2.6} />
                {/* Gradient triangle */}
                {tTri2 > tTri1 + 1 && lnTri2 > lnMin + 0.2 ? (
                  <g>
                    <path
                      d={`M ${xOf(tTri1).toFixed(1)} ${yLinOf(lnTri1).toFixed(1)} L ${xOf(tTri1).toFixed(1)} ${yLinOf(lnTri2).toFixed(1)} L ${xOf(tTri2).toFixed(1)} ${yLinOf(lnTri2).toFixed(1)}`}
                      fill="none"
                      stroke="var(--bad)"
                      strokeWidth={1.5}
                      strokeDasharray="3 3"
                    />
                    <text
                      x={(xOf(tTri1) + xOf(tTri2)) / 2}
                      y={yLinOf(lnTri2) + 12}
                      fontSize={9}
                      fontWeight={700}
                      fill="var(--bad)"
                      textAnchor="middle"
                    >
                      slope = −λ
                    </text>
                  </g>
                ) : null}
                {/* Current time marker (clamped if below lnMin) */}
                {lnNt >= lnMin ? (
                  <g>
                    <line x1={xOf(time)} y1={yLinOf(lnNt)} x2={xOf(time)} y2={padT + plotH} stroke="var(--accent)" strokeWidth={1.5} strokeDasharray="4 3" />
                    <circle cx={xOf(time)} cy={yLinOf(lnNt)} r={5.5} fill="var(--accent)" stroke="var(--ink)" strokeWidth={1.4} />
                  </g>
                ) : null}
                {/* Y labels */}
                {[0, 2, 4, 6].map((v) => (
                  <text key={v} x={padL - 6} y={yLinOf(v) + 3} fontSize={9.5} fill="var(--ink-2)" textAnchor="end">
                    {v}
                  </text>
                ))}
                {/* X ticks */}
                {[0, 10, 20, 30, 40].map((v) => (
                  <text key={v} x={xOf(v)} y={padT + plotH + 12} fontSize={9} fill="var(--ink-2)" textAnchor="middle">
                    {v}
                  </text>
                ))}
                <text x={14} y={padT + plotH / 2} transform={`rotate(-90 14 ${padT + plotH / 2})`} fontSize={9.5} fontWeight={700} fill="var(--ink)" textAnchor="middle">
                  ln(N / 10⁶)
                </text>
                <text x={padL + plotW / 2} y={H - 6} fontSize={9.5} fontWeight={700} fill="var(--ink)" textAnchor="middle">
                  Time t (s)
                </text>
              </svg>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Decay Constant λ" value={`${lambda.toFixed(4)} s⁻¹`} tone="good" />
          <Readout label="Remaining N(t)" value={`${nRemain.toFixed(1)} × 10⁶`} tone="brand" />
          <Readout label="Decayed N₀ − N" value={`${nDecayed.toFixed(1)} × 10⁶`} tone="bad" />
          <Readout label="Activity A = λN" value={`${activityMBq.toFixed(1)} MBq`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hr-star-explorer",
    title: "Interactive Hertzsprung–Russell (HR) Star Explorer",
    blurb: "Tune stellar surface temperature T and radius R/R☉ to plot live stars on the inverted-T HR diagram and watch L ∝ R²T⁴ classify Giants, Supergiants, Main Sequence stars and White Dwarfs.",
    Component: HRStarExplorer,
  },
  {
    id: "radioactive-decay-sim",
    title: "Radioactive Decay & Half-Life Simulator",
    blurb: "Adjust initial nuclei N₀, half-life T½, and elapsed time t to compare exponential N(t) decay side-by-side with the linearized ln N vs t plot (gradient −λ) and live activity A = λN.",
    Component: RadioactiveDecaySimulator,
  },
];
