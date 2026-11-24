"use client";
import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

const SIGMA = 5.67e-8;
const WIEN_B = 2.9e-3; // m K
const SOLAR_S = 1360; // W m^-2
const R_GAS = 8.31; // J K^-1 mol^-1

// =============================================================================
// WIDGET 1: Blackbody Spectrum & Greenhouse Balance Lab
// =============================================================================

/** Relative Planck spectral radiance B(λ, T) for λ in μm and T in K. */
function planckRel(lambdaUm: number, T: number): number {
  const x = 14388 / (lambdaUm * T);
  if (x > 60) return 0;
  return 1 / (Math.pow(lambdaUm, 5) * (Math.exp(x) - 1));
}

/** Approximate star/blackbody glow hex colour for display badge. */
function tempToColor(T: number): string {
  if (T < 3000) return "#dc2626";
  if (T < 4200) return "#ea580c";
  if (T < 5400) return "#f59e0b";
  if (T < 6400) return "#eab308";
  if (T < 7600) return "#60a5fa";
  return "#3b82f6";
}

function spectralRegion(lambdaNm: number): string {
  if (lambdaNm < 380) return "Ultraviolet (UV)";
  if (lambdaNm <= 700) return "Visible light";
  return "Infrared (IR)";
}

function BlackbodyGreenhouseWidget() {
  const [temp, setTemp] = useState(5800);
  const [albedo, setAlbedo] = useState(0.3);
  const [emissivity, setEmissivity] = useState(1.0);

  // Blackbody quantities
  const lambdaMaxM = WIEN_B / temp;
  const lambdaMaxNm = Math.round(lambdaMaxM * 1e9);
  const lambdaMaxUm = lambdaMaxM * 1e6;
  const radIntensityMW = (emissivity * SIGMA * Math.pow(temp, 4)) / 1e6;
  const region = spectralRegion(lambdaMaxNm);
  const glowColor = tempToColor(temp);

  // Planetary radiative equilibrium (Earth S = 1360 W m^-2)
  const iAbs = ((1 - albedo) * SOLAR_S) / 4;
  const tPlanetK = Math.pow(iAbs / (emissivity * SIGMA), 0.25);
  const tPlanetC = tPlanetK - 273.15;
  const tEarthLambdaUm = (WIEN_B / tPlanetK) * 1e6;

  // Build SVG Planck curve for λ in [0.15, 2.50] μm
  const W = 560;
  const H = 230;
  const padL = 48;
  const padR = 18;
  const padT = 24;
  const padB = 38;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const lamMin = 0.15;
  const lamMax = 2.5;

  const toX = (lam: number) => padL + ((lam - lamMin) / (lamMax - lamMin)) * plotW;

  // Compute points for active T and reference 5800 K curve
  const samples = 95;
  const vals: Array<{ lam: number; y: number }> = [];
  const refVals: Array<{ lam: number; y: number }> = [];
  let peakY = 0;
  for (let i = 0; i <= samples; i++) {
    const lam = lamMin + (i / samples) * (lamMax - lamMin);
    const y = emissivity * planckRel(lam, temp);
    const r = planckRel(lam, 5800);
    vals.push({ lam, y });
    refVals.push({ lam, y: r });
    if (y > peakY) peakY = y;
  }
  const refPeak = Math.max(...refVals.map((p) => p.y));
  const yScaleMax = Math.max(peakY, refPeak * 0.25, 1e-9);
  const toY = (val: number) => padT + plotH - (val / yScaleMax) * (plotH - 8);

  const activePath = vals
    .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.lam).toFixed(1)} ${toY(p.y).toFixed(1)}`)
    .join(" ");
  const activeFill = `${activePath} L ${toX(lamMax).toFixed(1)} ${(padT + plotH).toFixed(1)} L ${toX(lamMin).toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  const refPath = refVals
    .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.lam).toFixed(1)} ${toY(Math.min(p.y, yScaleMax * 1.05)).toFixed(1)}`)
    .join(" ");

  const visX1 = toX(0.38);
  const visX2 = toX(0.7);
  const peakInView = lambdaMaxUm >= lamMin && lambdaMaxUm <= lamMax;
  const peakX = toX(Math.min(lamMax, Math.max(lamMin, lambdaMaxUm)));
  const peakVal = emissivity * planckRel(Math.min(lamMax, Math.max(lamMin, lambdaMaxUm)), temp);

  return (
    <WidgetFrame
      title="Blackbody Spectrum & Greenhouse Balance Lab"
      tryThis={[
        "Slide **T** from 3000 K to 8000 K and watch {{λ_max}} march from IR through Visible into UV.",
        "Keep **α = 0.30** (Earth) and lower **e** from 1.00 to 0.61 to see Earth warm from −18 °C to +15 °C!",
        "Set **α = 0.80, e = 1.00** to simulate an ice-covered Snowball Earth.",
      ]}
      caption={
        <span>
          At <strong>{temp} K</strong> (emissivity <strong>{emissivity.toFixed(2)}</strong>), the radiator peaks at{" "}
          <strong>{lambdaMaxNm} nm</strong> ({region}) with radiated intensity{" "}
          <strong>{radIntensityMW.toFixed(2)} MW m⁻²</strong>. For an Earth-orbit planet ({" "}
          <M>{"S = 1360"}</M> W m⁻²) with albedo <strong>{albedo.toFixed(2)}</strong> and effective space emissivity{" "}
          <strong>{emissivity.toFixed(2)}</strong>, absorbed sunlight is <strong>{iAbs.toFixed(0)} W m⁻²</strong>,
          giving equilibrium temperature <strong>{tPlanetK.toFixed(1)} K</strong> (
          <strong>{tPlanetC >= 0 ? `+${tPlanetC.toFixed(1)}` : `−${Math.abs(tPlanetC).toFixed(1)}`} °C</strong>) and
          terrestrial IR peak <strong>{tEarthLambdaUm.toFixed(1)} μm</strong>.
        </span>
      }
    >
      <div className="flex flex-wrap gap-2 mb-3">
        <button
          type="button"
          onClick={() => {
            setTemp(5800);
            setAlbedo(0.3);
            setEmissivity(1.0);
          }}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
        >
          Airless Earth (α=0.30, e=1.00)
        </button>
        <button
          type="button"
          onClick={() => {
            setTemp(5800);
            setAlbedo(0.3);
            setEmissivity(0.61);
          }}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
        >
          Greenhouse Earth (e=0.61 → 288 K)
        </button>
        <button
          type="button"
          onClick={() => {
            setTemp(3000);
            setAlbedo(0.8);
            setEmissivity(1.0);
          }}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
        >
          Red Dwarf / Snowball (3000 K, α=0.80)
        </button>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto rounded-xl border border-line bg-surface-2"
        role="img"
        aria-label={`Live Planck blackbody spectrum curve for temperature ${temp} K peaking at ${lambdaMaxNm} nanometres in the ${region} band`}
      >
        <defs>
          <linearGradient id="visRainbowB1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.32" />
            <stop offset="28%" stopColor="#2563eb" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#16a34a" stopOpacity="0.32" />
            <stop offset="78%" stopColor="#eab308" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* Spectral regions */}
        <rect x={padL} y={padT} width={visX1 - padL} height={plotH} fill="#7c3aed" opacity="0.07" />
        <rect x={visX1} y={padT} width={visX2 - visX1} height={plotH} fill="url(#visRainbowB1)" />
        <rect x={visX2} y={padT} width={W - padR - visX2} height={plotH} fill="#dc2626" opacity="0.05" />

        <text x={(padL + visX1) / 2} y={padT + 12} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#7c3aed">
          UV
        </text>
        <text x={(visX1 + visX2) / 2} y={padT + 12} textAnchor="middle" fontSize={9.5} fontWeight={700} className="fill-ink">
          Visible
        </text>
        <text x={(visX2 + W - padR) / 2} y={padT + 12} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#dc2626">
          Infrared (IR)
        </text>

        {/* Axes */}
        <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} className="stroke-ink" strokeWidth={1.5} />
        <line x1={padL} y1={padT + plotH} x2={padL} y2={padT} className="stroke-ink" strokeWidth={1.5} />

        {/* X ticks */}
        {[0.4, 0.7, 1.0, 1.5, 2.0, 2.5].map((tick) => (
          <g key={tick}>
            <line x1={toX(tick)} y1={padT + plotH} x2={toX(tick)} y2={padT + plotH + 4} className="stroke-ink-2" strokeWidth={1} />
            <text x={toX(tick)} y={padT + plotH + 15} textAnchor="middle" fontSize={9.5} className="fill-ink-2">
              {tick.toFixed(1)}
            </text>
          </g>
        ))}
        <text x={padL + plotW / 2} y={H - 6} textAnchor="middle" fontSize={10.5} className="fill-ink-2">
          Wavelength λ (μm) · Dashed reference = 5800 K black body
        </text>
        <text
          x={14}
          y={padT + plotH / 2}
          textAnchor="middle"
          fontSize={10.5}
          className="fill-ink-2"
          transform={`rotate(-90 14 ${padT + plotH / 2})`}
        >
          Spectral radiance
        </text>

        {/* Reference 5800 K curve */}
        <path d={refPath} fill="none" className="stroke-ink-2" strokeWidth={1.3} strokeDasharray="4 3" opacity={0.6} />

        {/* Active curve */}
        <path d={activeFill} fill={glowColor} opacity={0.18} />
        <path d={activePath} fill="none" stroke={glowColor} strokeWidth={2.8} />

        {/* Peak Wien marker */}
        {peakInView ? (
          <g>
            <line
              x1={peakX}
              y1={toY(peakVal)}
              x2={peakX}
              y2={padT + plotH}
              stroke={glowColor}
              strokeWidth={1.5}
              strokeDasharray="3 3"
            />
            <circle cx={peakX} cy={toY(peakVal)} r={4.5} fill={glowColor} />
            <text
              x={Math.min(W - padR - 52, Math.max(padL + 52, peakX))}
              y={Math.max(padT + 26, toY(peakVal) - 8)}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              fill={glowColor}
            >
              λmax = {lambdaMaxNm} nm
            </text>
          </g>
        ) : null}

        {/* Glowing star colour swatch */}
        <circle cx={W - padR - 22} cy={padT + 30} r={12} fill={glowColor} stroke="var(--ink)" strokeWidth={1} />
        <text x={W - padR - 22} y={padT + 53} textAnchor="middle" fontSize={9} fontWeight={700} className="fill-ink">
          {temp} K
        </text>
      </svg>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Slider
          label="Blackbody Temp T"
          value={temp}
          min={2000}
          max={9000}
          step={100}
          onChange={setTemp}
          format={(v) => `${v} K`}
        />
        <Slider
          label="Planetary Albedo α"
          value={albedo}
          min={0}
          max={0.85}
          step={0.05}
          onChange={setAlbedo}
          format={(v) => v.toFixed(2)}
        />
        <Slider
          label="Emissivity e"
          value={emissivity}
          min={0.5}
          max={1.0}
          step={0.01}
          onChange={setEmissivity}
          format={(v) => v.toFixed(2)}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label="Wien Peak λmax" value={`${lambdaMaxNm} nm`} tone="brand" />
        <Readout label="Spectral Band" value={region.split(" ")[0]} tone="ink" />
        <Readout label="Absorbed Solar" value={`${iAbs.toFixed(0)} W m⁻²`} tone="good" />
        <Readout
          label="Planet Eq. Temp"
          value={`${tPlanetK.toFixed(0)} K`}
          tone={tPlanetK >= 273 ? "good" : "bad"}
        />
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: p–V Thermodynamic Cycle Explorer (HL)
// =============================================================================

type ProcessMode = "carnot" | "isobaric" | "isochoric" | "isothermal" | "adiabatic";

function PVThermodynamicExplorerWidget() {
  const [mode, setMode] = useState<ProcessMode>("carnot");
  const [tHot, setTHot] = useState(600);
  const [tCold, setTCold] = useState(300);
  const [volRatio, setVolRatio] = useState(2.2);

  // Ensure T_C stays strictly below T_H
  const safeTCold = Math.min(tCold, tHot - 80);
  const safeTHot = Math.max(tHot, safeTCold + 80);

  // Reference state A: n = 1.00 mol monatomic gas, V_A = 0.010 m^3
  const n = 1.0;
  const VA = 0.01;
  const VB = VA * volRatio;
  const adiaExpFactor = Math.pow(safeTHot / safeTCold, 1.5); // V_C / V_B = (T_H / T_C)^(3/2)

  // Compute physics readouts (in J) and exact p–V curves in (V [m³], P [kPa])
  const pAt = (V: number, T: number) => (n * R_GAS * T) / V / 1000; // kPa

  let workJ = 0;
  let dUJ = 0;
  let heatJ = 0;
  const carnotEffPct = (1 - safeTCold / safeTHot) * 100;
  let summaryLine = "";

  // Collect curves for plotting
  type Curve = { pts: Array<[number, number]>; color: string; label: string; dashed?: boolean };
  const curves: Curve[] = [];
  let fillPoly: Array<[number, number]> = [];
  const dots: Array<{ v: number; p: number; name: string; color: string }> = [];

  if (mode === "isobaric") {
    const P = pAt(VA, safeTHot);
    const TB = safeTHot * volRatio;
    workJ = n * R_GAS * safeTHot * (volRatio - 1);
    dUJ = 1.5 * workJ;
    heatJ = 2.5 * workJ;
    const pts: Array<[number, number]> = [
      [VA, P],
      [VB, P],
    ];
    curves.push({ pts, color: "#dc2626", label: "Isobaric expansion (P const)" });
    fillPoly = [
      [VA, 0],
      [VA, P],
      [VB, P],
      [VB, 0],
    ];
    dots.push({ v: VA, p: P, name: "A", color: "#dc2626" }, { v: VB, p: P, name: "B", color: "#dc2626" });
    summaryLine = `Isobaric expansion at ${P.toFixed(0)} kPa raises T from ${safeTHot} K to ${TB.toFixed(0)} K: 40% of Q becomes work W and 60% raises ΔU.`;
  } else if (mode === "isochoric") {
    const P1 = pAt(VA, safeTCold);
    const P2 = pAt(VA, safeTHot);
    workJ = 0;
    dUJ = 1.5 * n * R_GAS * (safeTHot - safeTCold);
    heatJ = dUJ;
    curves.push({
      pts: [
        [VA, P1],
        [VA, P2],
      ],
      color: "#7c3aed",
      label: "Isovolumetric heating (V const)",
    });
    dots.push({ v: VA, p: P1, name: "A", color: "#2563eb" }, { v: VA, p: P2, name: "B", color: "#dc2626" });
    summaryLine = `Isovolumetric heating from ${safeTCold} K to ${safeTHot} K does zero work (W = 0), so 100% of heat Q increases internal energy ΔU.`;
  } else if (mode === "isothermal") {
    workJ = n * R_GAS * safeTHot * Math.log(volRatio);
    dUJ = 0;
    heatJ = workJ;
    const pts: Array<[number, number]> = [];
    for (let i = 0; i <= 40; i++) {
      const v = VA + (i / 40) * (VB - VA);
      pts.push([v, pAt(v, safeTHot)]);
    }
    curves.push({ pts, color: "#ea580c", label: `Isotherm (${safeTHot} K)` });
    fillPoly = [[VA, 0], ...pts, [VB, 0]];
    dots.push(
      { v: VA, p: pAt(VA, safeTHot), name: "A", color: "#ea580c" },
      { v: VB, p: pAt(VB, safeTHot), name: "B", color: "#ea580c" },
    );
    summaryLine = `Isothermal expansion at ${safeTHot} K keeps ΔU = 0, so every joule of absorbed heat Q turns directly into expansion work W = nRT ln(V_B/V_A).`;
  } else if (mode === "adiabatic") {
    const VEnd = VA * adiaExpFactor;
    heatJ = 0;
    dUJ = 1.5 * n * R_GAS * (safeTCold - safeTHot);
    workJ = -dUJ;
    const adiaPts: Array<[number, number]> = [];
    const isoRef: Array<[number, number]> = [];
    const pA = pAt(VA, safeTHot);
    const kAdia = pA * Math.pow(VA, 5 / 3);
    for (let i = 0; i <= 40; i++) {
      const v = VA + (i / 40) * (VEnd - VA);
      adiaPts.push([v, kAdia / Math.pow(v, 5 / 3)]);
      isoRef.push([v, pAt(v, safeTHot)]);
    }
    curves.push({ pts: isoRef, color: "#94a3b8", label: "Isotherm reference", dashed: true });
    curves.push({ pts: adiaPts, color: "#7c3aed", label: "Adiabatic (Q = 0, steeper!)" });
    fillPoly = [[VA, 0], ...adiaPts, [VEnd, 0]];
    dots.push(
      { v: VA, p: pA, name: "A", color: "#dc2626" },
      { v: VEnd, p: pAt(VEnd, safeTCold), name: "B", color: "#2563eb" },
    );
    summaryLine = `Adiabatic expansion (Q = 0) cools the gas from ${safeTHot} K to ${safeTCold} K as internal energy pays for work (W = −ΔU). Notice the curve drops steeper than the dashed isotherm!`;
  } else {
    // Full Carnot cycle A -> B -> C -> D -> A
    const VC = VB * adiaExpFactor;
    const VD = VA * adiaExpFactor;
    const qH = n * R_GAS * safeTHot * Math.log(volRatio);
    const qC = n * R_GAS * safeTCold * Math.log(volRatio);
    workJ = qH - qC;
    dUJ = 0;
    heatJ = qH;

    const legAB: Array<[number, number]> = [];
    const legBC: Array<[number, number]> = [];
    const legCD: Array<[number, number]> = [];
    const legDA: Array<[number, number]> = [];

    const kBC = pAt(VB, safeTHot) * Math.pow(VB, 5 / 3);
    const kDA = pAt(VA, safeTHot) * Math.pow(VA, 5 / 3);

    for (let i = 0; i <= 24; i++) {
      const f = i / 24;
      const vAB = VA + f * (VB - VA);
      legAB.push([vAB, pAt(vAB, safeTHot)]);
      const vBC = VB + f * (VC - VB);
      legBC.push([vBC, kBC / Math.pow(vBC, 5 / 3)]);
      const vCD = VC + f * (VD - VC);
      legCD.push([vCD, pAt(vCD, safeTCold)]);
      const vDA = VD + f * (VA - VD);
      legDA.push([vDA, kDA / Math.pow(vDA, 5 / 3)]);
    }

    curves.push(
      { pts: legAB, color: "#dc2626", label: "A→B Isothermal (TH)" },
      { pts: legBC, color: "#7c3aed", label: "B→C Adiabatic" },
      { pts: legCD, color: "#2563eb", label: "C→D Isothermal (TC)" },
      { pts: legDA, color: "#0d9488", label: "D→A Adiabatic" },
    );
    fillPoly = [...legAB, ...legBC, ...legCD, ...legDA];
    dots.push(
      { v: VA, p: pAt(VA, safeTHot), name: "A", color: "#dc2626" },
      { v: VB, p: pAt(VB, safeTHot), name: "B", color: "#7c3aed" },
      { v: VC, p: pAt(VC, safeTCold), name: "C", color: "#2563eb" },
      { v: VD, p: pAt(VD, safeTCold), name: "D", color: "#0d9488" },
    );
    summaryLine = `Carnot cycle absorbs Q_H = ${qH.toFixed(0)} J at ${safeTHot} K, rejects Q_C = ${qC.toFixed(0)} J at ${safeTCold} K, and converts W_net = ${workJ.toFixed(0)} J (shaded area) at theoretical ceiling η = ${carnotEffPct.toFixed(1)}%.`;
  }

  // Dynamic plot bounds
  const allPts = curves.flatMap((c) => c.pts);
  const vMax = Math.max(...allPts.map((p) => p[0]), 0.04) * 1.12;
  const pMax = Math.max(...allPts.map((p) => p[1]), 400) * 1.14;

  const W = 560;
  const H = 240;
  const padL = 54;
  const padR = 20;
  const padT = 22;
  const padB = 38;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const toX = (v: number) => padL + (v / vMax) * plotW;
  const toY = (p: number) => padT + plotH - (p / pMax) * plotH;

  const polyStr = fillPoly.map(([v, p]) => `${toX(v).toFixed(1)},${toY(p).toFixed(1)}`).join(" ");

  return (
    <WidgetFrame
      title="p–V Thermodynamic Cycle Explorer (HL)"
      tryThis={[
        "Switch between **Isothermal** and **Adiabatic** to verify why an adiabat always falls steeper than an isotherm.",
        "In **Carnot Cycle**, lower {{T_C}} by 100 K vs raising {{T_H}} by 100 K — which boosts {{η_Carnot}} more?",
        "Inspect **Isobaric** vs **Isochoric** to see why {{Q > ΔU}} when a gas expands against constant pressure.",
      ]}
      caption={<span>{summaryLine}</span>}
    >
      <div className="mb-3">
        <Segmented<ProcessMode>
          label="Thermodynamic process selector"
          value={mode}
          onChange={setMode}
          options={[
            { value: "carnot", label: "Carnot Cycle" },
            { value: "isobaric", label: "Isobaric" },
            { value: "isochoric", label: "Isochoric" },
            { value: "isothermal", label: "Isothermal" },
            { value: "adiabatic", label: "Adiabatic" },
          ]}
        />
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto rounded-xl border border-line bg-surface-2"
        role="img"
        aria-label={`Interactive pressure versus volume diagram for ${mode} process between ${safeTHot} K and ${safeTCold} K`}
      >
        {/* Subtle horizontal grid */}
        {[0.25, 0.5, 0.75, 1].map((frac) => {
          const pVal = pMax * frac;
          const y = toY(pVal);
          return (
            <g key={frac}>
              <line x1={padL} y1={y} x2={W - padR} y2={y} className="stroke-line" strokeWidth={1} />
              <text x={padL - 6} y={y + 3} textAnchor="end" fontSize={9.5} className="fill-ink-2">
                {Math.round(pVal)}
              </text>
            </g>
          );
        })}

        {/* Axes */}
        <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} className="stroke-ink" strokeWidth={1.6} />
        <line x1={padL} y1={padT + plotH} x2={padL} y2={padT} className="stroke-ink" strokeWidth={1.6} />

        {/* X axis ticks */}
        {[0.25, 0.5, 0.75, 1].map((frac) => {
          const vVal = vMax * frac;
          const x = toX(vVal);
          return (
            <g key={frac}>
              <line x1={x} y1={padT + plotH} x2={x} y2={padT + plotH + 4} className="stroke-ink-2" strokeWidth={1} />
              <text x={x} y={padT + plotH + 15} textAnchor="middle" fontSize={9.5} className="fill-ink-2">
                {(vVal * 1000).toFixed(0)}
              </text>
            </g>
          );
        })}

        <text x={padL + plotW / 2} y={H - 6} textAnchor="middle" fontSize={10.5} className="fill-ink-2">
          Volume V (litres · 1 L = 10⁻³ m³)
        </text>
        <text
          x={14}
          y={padT + plotH / 2}
          textAnchor="middle"
          fontSize={10.5}
          className="fill-ink-2"
          transform={`rotate(-90 14 ${padT + plotH / 2})`}
        >
          Pressure P (kPa)
        </text>

        {/* Shaded Work Area */}
        {fillPoly.length > 2 ? (
          <polygon points={polyStr} fill="#2563eb" fillOpacity={0.18} />
        ) : null}

        {/* Curves */}
        {curves.map((c) => {
          const d = c.pts
            .map(([v, p], i) => `${i === 0 ? "M" : "L"} ${toX(v).toFixed(1)} ${toY(p).toFixed(1)}`)
            .join(" ");
          return (
            <path
              key={c.label}
              d={d}
              fill="none"
              stroke={c.color}
              strokeWidth={c.dashed ? 1.6 : 2.8}
              strokeDasharray={c.dashed ? "5 4" : undefined}
              strokeLinecap="round"
            />
          );
        })}

        {/* Vertices */}
        {dots.map((pt) => (
          <g key={pt.name}>
            <circle cx={toX(pt.v)} cy={toY(pt.p)} r={4.5} fill={pt.color} stroke="var(--surface)" strokeWidth={1.2} />
            <text
              x={toX(pt.v) + 7}
              y={toY(pt.p) - 5}
              fontSize={11}
              fontWeight={700}
              className="fill-ink"
            >
              {pt.name}
            </text>
          </g>
        ))}

        {/* Compact legend top-right */}
        <g transform={`translate(${W - padR - 148}, ${padT + 4})`}>
          {curves.map((c, idx) => (
            <g key={c.label} transform={`translate(0, ${idx * 15})`}>
              <line
                x1={0}
                y1={6}
                x2={16}
                y2={6}
                stroke={c.color}
                strokeWidth={2.5}
                strokeDasharray={c.dashed ? "4 3" : undefined}
              />
              <text x={21} y={9.5} fontSize={9.5} fontWeight={600} className="fill-ink">
                {c.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Slider
          label="Hot Temp T_H"
          value={safeTHot}
          min={400}
          max={1000}
          step={20}
          onChange={(v) => {
            setTHot(v);
            if (tCold > v - 80) setTCold(v - 80);
          }}
          format={(v) => `${v} K`}
        />
        <Slider
          label="Cold Temp T_C"
          value={safeTCold}
          min={200}
          max={Math.max(220, safeTHot - 80)}
          step={20}
          onChange={setTCold}
          format={(v) => `${v} K`}
        />
        <Slider
          label="Expansion Ratio V_B/V_A"
          value={volRatio}
          min={1.4}
          max={3.4}
          step={0.1}
          onChange={setVolRatio}
          format={(v) => `${v.toFixed(1)}×`}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label={mode === "carnot" ? "Net Work Wnet" : "Work W"} value={`${Math.round(workJ)} J`} tone="brand" />
        <Readout
          label="ΔU (1 mol)"
          value={`${dUJ >= 0 ? `+${Math.round(dUJ)}` : `−${Math.abs(Math.round(dUJ))}`} J`}
          tone={dUJ === 0 ? "ink" : dUJ > 0 ? "good" : "bad"}
        />
        <Readout label={mode === "carnot" ? "Heat Input QH" : "Heat Q"} value={`${Math.round(heatJ)} J`} tone="ink" />
        <Readout label="Carnot ηmax" value={`${carnotEffPct.toFixed(1)}%`} tone="good" />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "blackbody-greenhouse-lab",
    title: "Blackbody Spectrum & Greenhouse Balance Lab",
    blurb: "Explore Wien's shift, Stefan–Boltzmann radiation, albedo and Earth's greenhouse temperature live.",
    Component: BlackbodyGreenhouseWidget,
  },
  {
    id: "pv-thermodynamic-cycle-hl",
    title: "p–V Thermodynamic Cycle Explorer (HL)",
    blurb: "Compare Isobaric, Isochoric, Isothermal, Adiabatic and Carnot cycles with live W, ΔU, Q and η.",
    Component: PVThermodynamicExplorerWidget,
  },
];
