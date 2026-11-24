"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: AC GENERATOR FLUX & EMF SYNCHRONISER
// =============================================================================
function ACGeneratorSynchroniser() {
  const [turns, setTurns] = useState(100);
  const [fieldB, setFieldB] = useState(0.2);
  const [areaCm2, setAreaCm2] = useState(200); // 200 cm² = 0.020 m²
  const [freq, setFreq] = useState(25);
  const [cursorMs, setCursorMs] = useState(10);
  const [commutation, setCommutation] = useState<"ac" | "dc">("ac");

  const area = areaCm2 * 1e-4;
  const omega = 2 * Math.PI * freq;
  const peakFlux = turns * fieldB * area; // Wb
  const peakEmf = peakFlux * omega; // V
  const periodMs = 1000 / freq;

  const tSec = cursorMs / 1000;
  const angleRad = omega * tSec;
  const angleDeg = ((angleRad * 180) / Math.PI) % 360;
  const instFlux = peakFlux * Math.cos(angleRad);
  const rawEmf = peakEmf * Math.sin(angleRad);
  const instEmf = commutation === "dc" ? Math.abs(rawEmf) : rawEmf;

  // Graph geometry inside viewBox="0 0 540 310"
  const tWindowMs = 40; // Fixed 40 ms window so doubling f visibly doubles cycles AND amplitude
  const gx0 = 166;
  const gx1 = 516;
  const gw = gx1 - gx0;

  const fluxCy = 84;
  const fluxHalfH = 54;
  const fluxMaxScale = peakFlux <= 1.2 ? 1.2 : 2.4;

  const emfCy = 226;
  const emfHalfH = 56;
  const emfMaxScale = peakEmf <= 200 ? 200 : 400;

  const samples = 160;
  const fluxPts: string[] = [];
  const emfPts: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const ms = (i / samples) * tWindowMs;
    const x = gx0 + (ms / tWindowMs) * gw;
    const phase = 2 * Math.PI * freq * (ms / 1000);
    const fVal = peakFlux * Math.cos(phase);
    const eRaw = peakEmf * Math.sin(phase);
    const eVal = commutation === "dc" ? Math.abs(eRaw) : eRaw;
    const fy = fluxCy - (fVal / fluxMaxScale) * fluxHalfH;
    const ey = emfCy - (eVal / emfMaxScale) * emfHalfH;
    fluxPts.push(`${x.toFixed(1)},${fy.toFixed(1)}`);
    emfPts.push(`${x.toFixed(1)},${ey.toFixed(1)}`);
  }

  const cursorX = gx0 + (cursorMs / tWindowMs) * gw;
  const cursorFluxY = fluxCy - (instFlux / fluxMaxScale) * fluxHalfH;
  const cursorEmfY = emfCy - (instEmf / emfMaxScale) * emfHalfH;

  // Mini rotating coil (centered at 66, 152)
  // At angleRad = 0: coil plane is vertical (perp to horizontal B), normal points right (+x)
  const coilCx = 66;
  const coilCy = 152;
  const coilR = 34;
  const planeAngle = angleRad + Math.PI / 2; // vertical when theta = 0
  const dxPlane = Math.cos(planeAngle) * coilR;
  const dyPlane = -Math.sin(planeAngle) * coilR;
  const dxNorm = Math.cos(angleRad) * 32;
  const dyNorm = -Math.sin(angleRad) * 32;

  return (
    <WidgetFrame
      title="AC Generator Flux & EMF Synchroniser"
      tryThis={[
        "Slide **frequency {{f}}** from {{25 Hz}} to {{50 Hz}}: watch the EMF wave double in **both** height and cycle count while peak flux {{NBA}} stays fixed!",
        "Move the **time cursor** to {{10 ms}} (at {{25 Hz}}): notice flux crosses zero right when the coil lies parallel to {{B}} and EMF hits its peak.",
        "Switch between **Slip Rings (AC)** and **Split-Ring (DC)** to see how a commutator flips every negative lobe positive.",
      ]}
      caption={
        <>
          At <strong>t = {cursorMs} ms</strong> (θ = {angleDeg.toFixed(0)}°): instantaneous flux linkage is{" "}
          <strong>{instFlux.toFixed(3)} Wb</strong> and induced EMF is{" "}
          <strong>{instEmf.toFixed(1)} V</strong>. Because{" "}
          <M>{"ε(t) = -d(NΦ)/dt = 2 pi f N B A sin(2 pi f t)"}</M>, flux and EMF are always{" "}
          <strong>90° out of phase</strong>, and doubling <M>{"f"}</M> doubles both frequency and peak EMF{" "}
          <M>{"ε_0"}</M>.
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Output contacts</span>
          <Segmented
            label="Generator output contacts"
            value={commutation}
            onChange={setCommutation}
            options={[
              { value: "ac", label: "Slip Rings (AC)" },
              { value: "dc", label: "Split-Ring (DC)" },
            ]}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 540 310"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Live AC generator simulation with ${turns} turns, ${fieldB.toFixed(2)} T, ${freq} Hz producing peak flux linkage ${peakFlux.toFixed(2)} Wb and peak EMF ${peakEmf.toFixed(1)} V`}
            className="block h-auto w-full"
          >
            {/* Left panel: Live coil orientation in uniform horizontal B */}
            <rect x="8" y="20" width="118" height="270" rx="10" className="fill-surface stroke-line" strokeWidth="1.2" />
            <text x="67" y="42" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
              Coil at t = {cursorMs} ms
            </text>
            <text x="67" y="56" fontSize="10" textAnchor="middle" className="fill-ink-2">
              θ = {angleDeg.toFixed(0)}°
            </text>

            {/* Horizontal B field lines */}
            <g className="stroke-brand" strokeWidth="1.3" opacity="0.45">
              <line x1="20" y1="112" x2="112" y2="112" />
              <line x1="20" y1="132" x2="112" y2="132" />
              <line x1="20" y1="152" x2="112" y2="152" />
              <line x1="20" y1="172" x2="112" y2="172" />
              <line x1="20" y1="192" x2="112" y2="192" />
            </g>
            <text x="108" y="106" fontSize="10" fontWeight="700" textAnchor="end" className="fill-brand">
              B →
            </text>

            {/* Reference circle */}
            <circle cx={coilCx} cy={coilCy} r={coilR} fill="none" className="stroke-line" strokeWidth="1.2" strokeDasharray="3,3" />

            {/* Rotating coil edge */}
            <line
              x1={coilCx - dxPlane}
              y1={coilCy - dyPlane}
              x2={coilCx + dxPlane}
              y2={coilCy + dyPlane}
              stroke="#d97706"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Tracking dot on one side of coil */}
            <circle cx={coilCx + dxPlane} cy={coilCy + dyPlane} r="4" fill="#dc2626" />
            <circle cx={coilCx - dxPlane} cy={coilCy - dyPlane} r="3.5" fill="#2563eb" />

            {/* Area normal arrow */}
            <line
              x1={coilCx}
              y1={coilCy}
              x2={coilCx + dxNorm}
              y2={coilCy + dyNorm}
              stroke="#dc2626"
              strokeWidth="2.2"
              strokeDasharray="4,2"
            />
            <circle cx={coilCx + dxNorm} cy={coilCy + dyNorm} r="2.6" fill="#dc2626" />

            <text x="67" y="218" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-brand">
              NΦ = {instFlux.toFixed(2)} Wb
            </text>
            <text x="67" y="236" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-bad">
              ε = {instEmf.toFixed(1)} V
            </text>
            <text x="67" y="264" fontSize="9.5" textAnchor="middle" className="fill-ink-2">
              {Math.abs(Math.cos(angleRad)) > 0.92
                ? "Max flux · Zero EMF"
                : Math.abs(Math.sin(angleRad)) > 0.92
                  ? "Zero flux · Peak EMF!"
                  : "Rotating in B-field"}
            </text>

            {/* Vertical time gridlines every 10 ms */}
            {[0, 10, 20, 30, 40].map((ms) => {
              const x = gx0 + (ms / tWindowMs) * gw;
              return (
                <g key={ms}>
                  <line x1={x} y1={24} x2={x} y2={288} className="stroke-line" strokeWidth="1" strokeDasharray="3,3" />
                  <text x={x} y={302} fontSize="10" textAnchor="middle" className="fill-ink-2">
                    {ms} ms
                  </text>
                </g>
              );
            })}

            {/* TOP GRAPH: Flux linkage NPhi(t) */}
            <text x={gx0} y={20} fontSize="11.5" fontWeight="700" className="fill-brand">
              Flux Linkage NΦ(t) = NBA cos(ωt)
            </text>
            <line x1={gx0} y1={fluxCy - fluxHalfH} x2={gx0} y2={fluxCy + fluxHalfH} className="stroke-ink-2" strokeWidth="1.4" />
            <line x1={gx0} y1={fluxCy} x2={gx1} y2={fluxCy} className="stroke-ink-2" strokeWidth="1.2" />
            <text x={gx0 - 6} y={fluxCy - fluxHalfH + 4} fontSize="9.5" textAnchor="end" className="fill-ink-2">
              +{fluxMaxScale.toFixed(1)} Wb
            </text>
            <text x={gx0 - 6} y={fluxCy + 3} fontSize="9.5" textAnchor="end" className="fill-ink-2">
              0
            </text>
            <text x={gx0 - 6} y={fluxCy + fluxHalfH + 3} fontSize="9.5" textAnchor="end" className="fill-ink-2">
              −{fluxMaxScale.toFixed(1)} Wb
            </text>
            <polyline points={fluxPts.join(" ")} fill="none" className="stroke-brand" strokeWidth="2.6" strokeLinejoin="round" />

            {/* BOTTOM GRAPH: Induced EMF e(t) */}
            <text x={gx0} y={162} fontSize="11.5" fontWeight="700" className="fill-bad">
              Induced EMF {commutation === "ac" ? "ε(t) = ε₀ sin(ωt) [AC]" : "|ε₀ sin(ωt)| [Split-Ring DC]"}
            </text>
            <line x1={gx0} y1={emfCy - emfHalfH} x2={gx0} y2={emfCy + emfHalfH} className="stroke-ink-2" strokeWidth="1.4" />
            <line x1={gx0} y1={emfCy} x2={gx1} y2={emfCy} className="stroke-ink-2" strokeWidth="1.2" />
            <text x={gx0 - 6} y={emfCy - emfHalfH + 4} fontSize="9.5" textAnchor="end" className="fill-ink-2">
              +{emfMaxScale} V
            </text>
            <text x={gx0 - 6} y={emfCy + 3} fontSize="9.5" textAnchor="end" className="fill-ink-2">
              0
            </text>
            <text x={gx0 - 6} y={emfCy + emfHalfH + 3} fontSize="9.5" textAnchor="end" className="fill-ink-2">
              −{emfMaxScale} V
            </text>
            <polyline points={emfPts.join(" ")} fill="none" className="stroke-bad" strokeWidth="2.6" strokeLinejoin="round" />

            {/* Live vertical time cursor across both graphs */}
            <line x1={cursorX} y1={26} x2={cursorX} y2={286} stroke="#15803d" strokeWidth="1.8" strokeDasharray="4,3" />
            <circle cx={cursorX} cy={cursorFluxY} r="4.5" className="fill-brand" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx={cursorX} cy={cursorEmfY} r="4.5" className="fill-bad" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Rotation frequency f"
            value={freq}
            min={10}
            max={50}
            step={5}
            onChange={setFreq}
            format={(v) => `${v} Hz`}
          />
          <Slider
            label="Time cursor t"
            value={cursorMs}
            min={0}
            max={40}
            step={1}
            onChange={setCursorMs}
            format={(v) => `${v} ms`}
          />
          <Slider
            label="Coil turns N"
            value={turns}
            min={50}
            max={150}
            step={10}
            onChange={setTurns}
            format={(v) => `${v} turns`}
          />
          <Slider
            label="Magnetic field B"
            value={fieldB}
            min={0.1}
            max={0.3}
            step={0.05}
            onChange={setFieldB}
            format={(v) => `${v.toFixed(2)} T`}
          />
          <Slider
            label="Coil area A"
            value={areaCm2}
            min={100}
            max={250}
            step={25}
            onChange={setAreaCm2}
            format={(v) => `${(v * 1e-4).toFixed(4)} m²`}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Peak Flux NΦ₀" value={`${peakFlux.toFixed(3)} Wb`} tone="brand" />
          <Readout label="Peak EMF ε₀" value={`${peakEmf.toFixed(1)} V`} tone="bad" />
          <Readout label="Angular ω" value={`${omega.toFixed(0)} rad/s`} tone="ink" />
          <Readout label="Period T" value={`${periodMs.toFixed(1)} ms`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: SLIDING-ROD MOTIONAL EMF & MAGNETIC BRAKING LAB
// =============================================================================
function MotionalEmfBrakingLab() {
  const [fieldB, setFieldB] = useState(0.6);
  const [lengthL, setLengthL] = useState(0.5);
  const [speedV, setSpeedV] = useState(4.0);
  const [resistanceR, setResistanceR] = useState(2.0);
  const [circuitState, setCircuitState] = useState<"closed" | "open">("closed");

  const emf = fieldB * speedV * lengthL;
  const closed = circuitState === "closed";
  const current = closed ? emf / resistanceR : 0;
  const forceB = closed ? fieldB * current * lengthL : 0; // = B²L²v / R
  const powerMech = forceB * speedV;
  const powerElec = closed ? (emf * emf) / resistanceR : 0;

  // Visual scaling inside viewBox="0 0 540 235"
  const railHalfSep = 28 + lengthL * 42; // 36..70 px
  const railTopY = 118 - railHalfSep;
  const railBotY = 118 + railHalfSep;
  const rodX = 278;

  const vArrowLen = Math.min(95, speedV * 9.5);
  const fArrowLen = Math.min(115, forceB * 48);
  const bOpacity = 0.25 + (fieldB / 1.2) * 0.65;
  const powerMaxBar = 16; // W
  const powerPct = Math.min(100, (powerElec / powerMaxBar) * 100);

  return (
    <WidgetFrame
      title="Sliding-Rod Motional EMF & Magnetic Braking Lab"
      tryThis={[
        "Double **magnetic field {{B}}** from {{0.40 T}} to {{0.80 T}}: watch EMF double while braking force {{F_B}} and power {{P}} **quadruple** ({{∝ B^2}})!",
        "Switch to **Open Circuit**: verify that motional EMF {{ε = BvL}} stays non-zero, while current {{I}} and braking force {{F_B}} drop instantly to **0**.",
        "Adjust **resistance {{R}}**: lowering {{R}} increases current and makes the rod much harder to push.",
      ]}
      caption={
        closed ? (
          <>
            To hold constant speed <strong>v = {speedV.toFixed(1)} m s⁻¹</strong> against magnetic braking{" "}
            <strong>F_B = {forceB.toFixed(3)} N</strong>, your hand supplies{" "}
            <M>{"P_mech = F_app v"}</M> = <strong>{powerMech.toFixed(2)} W</strong>, which matches Joule heating{" "}
            <M>{"P_elec = I^2 R"}</M> = <strong>{powerElec.toFixed(2)} W</strong> to the last decimal place!
          </>
        ) : (
          <>
            <strong>Open circuit:</strong> Lorentz force still separates electrons in the moving rod, maintaining{" "}
            <strong>ε = BvL = {emf.toFixed(2)} V</strong> across its ends — but with{" "}
            <strong>I = 0 A</strong>, magnetic braking force vanishes (<strong>F_B = 0 N</strong>) and zero power is required!
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Rail circuit switch</span>
          <Segmented
            label="Rail circuit switch"
            value={circuitState}
            onChange={setCircuitState}
            options={[
              { value: "closed", label: "Closed Loop (R)" },
              { value: "open", label: "Open Circuit (I = 0)" },
            ]}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 540 235"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Sliding conducting rod of length ${lengthL.toFixed(2)} m moving at ${speedV.toFixed(1)} m/s in a ${fieldB.toFixed(2)} T field producing ${emf.toFixed(2)} V EMF and ${forceB.toFixed(3)} N braking force`}
            className="block h-auto w-full"
          >
            <defs>
              <marker id="wArrGrn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L9,5 L0,9 z" fill="#15803d" />
              </marker>
              <marker id="wArrRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L9,5 L0,9 z" fill="#dc2626" />
              </marker>
              <marker id="wArrPurp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,1 L9,5 L0,9 z" fill="#7c3aed" />
              </marker>
            </defs>

            {/* Magnetic field region */}
            <rect
              x="92"
              y="18"
              width="320"
              height="200"
              rx="10"
              className="fill-brand-soft stroke-brand"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              strokeDasharray="5,4"
            />
            <text x="404" y="34" fontSize="10.5" fontWeight="700" textAnchor="end" className="fill-brand">
              B = {fieldB.toFixed(2)} T (into page ⊗)
            </text>

            {/* Grid of X symbols with opacity reflecting B */}
            <g className="stroke-brand" strokeWidth="1.4" fill="none" opacity={bOpacity}>
              {[126, 186, 246, 306, 366].map((x) =>
                [56, 118, 180].map((y) => (
                  <g key={`${x}-${y}`} transform={`translate(${x},${y})`}>
                    <circle r="5.5" />
                    <path d="M-3.5,-3.5 L3.5,3.5 M3.5,-3.5 L-3.5,3.5" />
                  </g>
                )),
              )}
            </g>

            {/* Conducting rails */}
            <polyline
              points={`396,${railTopY} 54,${railTopY} 54,${railTopY + 14}`}
              fill="none"
              className="stroke-ink"
              strokeWidth="3.2"
            />
            <polyline
              points={`54,${railBotY - 14} 54,${railBotY} 396,${railBotY}`}
              fill="none"
              className="stroke-ink"
              strokeWidth="3.2"
            />

            {/* Left side: resistor R + open/closed switch */}
            <line x1="54" y1={railTopY + 14} x2="54" y2="96" className="stroke-ink" strokeWidth="2.6" />
            <rect x="44" y="96" width="20" height="42" rx="3" className="fill-surface stroke-ink" strokeWidth="2" />
            <text x="36" y="121" fontSize="11.5" fontWeight="700" textAnchor="end" className="fill-ink">
              {resistanceR.toFixed(1)} Ω
            </text>
            {closed ? (
              <line x1="54" y1="138" x2="54" y2={railBotY - 14} className="stroke-good" strokeWidth="2.8" />
            ) : (
              <g>
                <line x1="54" y1="138" x2="68" y2={Math.min(railBotY - 16, 152)} stroke="#dc2626" strokeWidth="2.8" />
                <circle cx="54" cy="138" r="2.6" fill="#dc2626" />
                <circle cx="54" cy={railBotY - 14} r="2.6" fill="#dc2626" />
                <text x="72" y="156" fontSize="9.5" fontWeight="700" fill="#dc2626">
                  OPEN
                </text>
              </g>
            )}

            {/* Sliding metal rod */}
            <rect
              x={rodX - 6}
              y={railTopY - 8}
              width="12"
              height={railBotY - railTopY + 16}
              rx="4"
              fill="#f59e0b"
              stroke="#92400e"
              strokeWidth="2"
            />
            {speedV > 0 ? (
              <>
                <text x={rodX - 15} y={railTopY - 2} fontSize="12" fontWeight="700" fill="#dc2626">
                  +
                </text>
                <text x={rodX - 15} y={railBotY + 12} fontSize="13" fontWeight="700" fill="#2563eb">
                  −
                </text>
              </>
            ) : null}
            <text x={rodX} y={railTopY - 14} fontSize="10.5" fontWeight="700" textAnchor="middle" className="fill-ink">
              L = {lengthL.toFixed(2)} m
            </text>

            {/* Induced current arrow when closed and v > 0 */}
            {closed && current > 0.001 ? (
              <g>
                <line
                  x1={rodX}
                  y1={118 + Math.min(26, railHalfSep - 10)}
                  x2={rodX}
                  y2={118 - Math.min(26, railHalfSep - 10)}
                  stroke="#7c3aed"
                  strokeWidth="2.4"
                  markerEnd="url(#wArrPurp)"
                />
                <line
                  x1="185"
                  y1={railTopY}
                  x2="152"
                  y2={railTopY}
                  stroke="#7c3aed"
                  strokeWidth="2.4"
                  markerEnd="url(#wArrPurp)"
                />
                <text x="168" y={railTopY - 7} fontSize="10.5" fontWeight="700" textAnchor="middle" fill="#7c3aed">
                  I = {current.toFixed(2)} A
                </text>
              </g>
            ) : null}

            {/* Velocity vector arrow (right) */}
            {vArrowLen > 3 ? (
              <g>
                <line
                  x1={rodX + 9}
                  y1={104}
                  x2={rodX + 9 + vArrowLen}
                  y2={104}
                  stroke="#15803d"
                  strokeWidth="2.8"
                  markerEnd="url(#wArrGrn)"
                />
                <text x={rodX + 13 + vArrowLen} y={108} fontSize="11" fontWeight="700" fill="#15803d">
                  v
                </text>
              </g>
            ) : null}

            {/* Magnetic braking force vector arrow (left) */}
            {fArrowLen > 3 ? (
              <g>
                <line
                  x1={rodX - 9}
                  y1={132}
                  x2={rodX - 9 - fArrowLen}
                  y2={132}
                  stroke="#dc2626"
                  strokeWidth="2.8"
                  markerEnd="url(#wArrRed)"
                />
                <text x={rodX - 13 - fArrowLen} y={136} fontSize="10.5" fontWeight="700" textAnchor="end" fill="#dc2626">
                  F_B
                </text>
              </g>
            ) : null}

            {/* Right panel: Live Energy / Power Balance bars */}
            <rect x="424" y="18" width="108" height="200" rx="10" className="fill-surface stroke-line" strokeWidth="1.2" />
            <text x="478" y="38" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
              Power Balance
            </text>
            <text x="478" y="52" fontSize="9.5" textAnchor="middle" className="fill-ink-2">
              Fv vs I²R
            </text>

            {/* Bar track 1: P_mech */}
            <rect x="444" y="64" width="24" height="114" rx="4" className="fill-surface-2 stroke-line" strokeWidth="1" />
            <rect
              x="444"
              y={178 - (powerPct / 100) * 114}
              width="24"
              height={(powerPct / 100) * 114}
              rx="4"
              className="fill-brand"
            />
            <text x="456" y="193" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-brand">
              P_mech
            </text>

            {/* Bar track 2: P_elec */}
            <rect x="488" y="64" width="24" height="114" rx="4" className="fill-surface-2 stroke-line" strokeWidth="1" />
            <rect
              x="488"
              y={178 - (powerPct / 100) * 114}
              width="24"
              height={(powerPct / 100) * 114}
              rx="4"
              className="fill-bad"
            />
            <text x="500" y="193" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-bad">
              P_elec
            </text>

            <text x="478" y="210" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-good">
              {powerElec.toFixed(2)} W = {powerMech.toFixed(2)} W
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Magnetic field B"
            value={fieldB}
            min={0.1}
            max={1.2}
            step={0.05}
            onChange={setFieldB}
            format={(v) => `${v.toFixed(2)} T`}
          />
          <Slider
            label="Rod length L"
            value={lengthL}
            min={0.2}
            max={1.0}
            step={0.05}
            onChange={setLengthL}
            format={(v) => `${v.toFixed(2)} m`}
          />
          <Slider
            label="Sliding speed v"
            value={speedV}
            min={0}
            max={10}
            step={0.5}
            onChange={setSpeedV}
            format={(v) => `${v.toFixed(1)} m s⁻¹`}
          />
          <Slider
            label="Loop resistance R"
            value={resistanceR}
            min={0.5}
            max={5.0}
            step={0.5}
            onChange={setResistanceR}
            format={(v) => `${v.toFixed(1)} Ω`}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Motional EMF ε" value={`${emf.toFixed(2)} V`} tone="brand" />
          <Readout label="Current I" value={`${current.toFixed(2)} A`} tone="ink" />
          <Readout label="Braking Force F_B" value={`${forceB.toFixed(3)} N`} tone="bad" />
          <Readout label="Power P = Fv" value={`${powerElec.toFixed(2)} W`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "ac-generator-synchroniser",
    title: "AC Generator Flux & EMF Synchroniser",
    blurb: "Spin a coil at different frequencies and watch why doubling f doubles BOTH peak EMF ε₀ AND output frequency while staying 90° out of phase with flux.",
    Component: ACGeneratorSynchroniser,
  },
  {
    id: "motional-emf-braking-lab",
    title: "Sliding-Rod Motional EMF & Magnetic Braking Lab",
    blurb: "Drag B, L, v, and R on a sliding-rod rail circuit to verify ε = BvL, magnetic braking F_B = B²L²v/R, and exact power conservation Fv = I²R.",
    Component: MotionalEmfBrakingLab,
  },
];
