"use client";
import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: INTERNAL RESISTANCE & MAXIMUM POWER LAB
// =============================================================================
function InternalResistanceLab() {
  const [emf, setEmf] = useState(12.0);
  const [rInt, setRInt] = useState(2.0);
  const [rLoad, setRLoad] = useState(4.0);

  const rTotal = rLoad + rInt;
  const current = emf / rTotal;
  const vTerminal = current * rLoad;
  const vLost = current * rInt;
  const pLoad = current * current * rLoad;
  const pInt = current * current * rInt;
  const pMax = (emf * emf) / (4 * rInt);
  const iShort = emf / rInt;
  const efficiency = (rLoad / rTotal) * 100;
  const atPeak = Math.abs(rLoad - rInt) < 0.01;

  // --- SVG 1: V-I graph (x: I from 0..iAxisMax, y: V from 0..vAxisMax) ---
  const vAxisMax = Math.max(24, Math.ceil(emf / 4) * 4);
  const iAxisMax = Math.max(8, Math.ceil(iShort / 2) * 2);
  const gx0 = 46;
  const gx1 = 278;
  const gy0 = 166;
  const gy1 = 26;
  const mapIx = (iVal: number) => gx0 + (Math.min(iVal, iAxisMax) / iAxisMax) * (gx1 - gx0);
  const mapVy = (vVal: number) => gy0 - (Math.min(vVal, vAxisMax) / vAxisMax) * (gy0 - gy1);

  const curIx = mapIx(current);
  const curVy = mapVy(vTerminal);
  const emfY = mapVy(emf);
  const scX = mapIx(iShort);

  // --- SVG 2: P vs R graph (R from 0..15 Ω, P from 0..pAxisMax) ---
  const rAxisMax = 15;
  const pAxisMax = Math.max(10, Math.ceil((pMax * 1.18) / 5) * 5);
  const px0 = 46;
  const px1 = 278;
  const py0 = 166;
  const py1 = 26;
  const mapRx = (rVal: number) => px0 + (rVal / rAxisMax) * (px1 - px0);
  const mapPy = (pVal: number) => py0 - (Math.min(pVal, pAxisMax) / pAxisMax) * (py0 - py1);

  const curvePts: string[] = [];
  for (let step = 0; step <= 75; step++) {
    const r = (step / 75) * rAxisMax;
    const i = emf / (r + rInt);
    const p = i * i * r;
    curvePts.push(`${step === 0 ? "M" : "L"} ${mapRx(r).toFixed(1)} ${mapPy(p).toFixed(1)}`);
  }
  const pCurvePath = curvePts.join(" ");
  const peakRx = mapRx(Math.min(rInt, rAxisMax));
  const peakPy = mapPy(pMax);
  const curRx = mapRx(rLoad);
  const curPy = mapPy(pLoad);

  return (
    <WidgetFrame
      title="Internal Resistance & Maximum Power Lab"
      tryThis={[
        "Slide external load R until Load Power hits its golden peak — notice R = r and efficiency is exactly 50%.",
        "Set R = 0 Ω to short-circuit the cell: terminal p.d. collapses to 0 V while current hits {{I = ε / r}}.",
        "Make R much larger than r (e.g. R = 15 Ω, r = 1 Ω): compare efficiency η against load power.",
      ]}
      caption={
        atPeak ? (
          <span>
            <strong>Peak power matched (R = r = {rInt.toFixed(1)} Ω)!</strong> Load power reaches{" "}
            <M>{`P_("max") = ε^2 / (4r)`}</M> = <strong>{pMax.toFixed(1)} W</strong>, while an equal{" "}
            <strong>{pInt.toFixed(1)} W</strong> heats the battery itself (efficiency = <strong>50.0%</strong>).
          </span>
        ) : rLoad === 0 ? (
          <span>
            <strong>Short circuit (R = 0 Ω)!</strong> All <strong>{emf.toFixed(1)} V</strong> drops across internal
            resistance <em>r</em>, driving maximum current <strong>{iShort.toFixed(2)} A</strong> and dissipating{" "}
            <strong>{pInt.toFixed(1)} W</strong> entirely as internal battery heat!
          </span>
        ) : (
          <span>
            Lost volts <M>{"I r"}</M> = <strong>{vLost.toFixed(2)} V</strong>, leaving terminal p.d.{" "}
            <M>{"V = ε - I r"}</M> = <strong>{vTerminal.toFixed(2)} V</strong> across the load.{" "}
            {rLoad > rInt
              ? "Because R > r, efficiency exceeds 50%, wasting less energy inside the cell."
              : "Because R < r, more than half the battery's chemical power is wasted as internal heat!"}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider label="EMF ε" value={emf} min={3} max={24} step={0.5} onChange={setEmf} format={(v) => `${v.toFixed(1)} V`} />
          <Slider label="Internal r" value={rInt} min={0.5} max={6} step={0.5} onChange={setRInt} format={(v) => `${v.toFixed(1)} Ω`} />
          <Slider label="Load R" value={rLoad} min={0} max={15} step={0.5} onChange={setRLoad} format={(v) => `${v.toFixed(1)} Ω`} />
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Current I" value={`${current.toFixed(2)} A`} tone="brand" />
          <Readout label="Terminal V" value={`${vTerminal.toFixed(2)} V`} tone={vTerminal < 0.25 * emf ? "bad" : "ink"} />
          <Readout
            label={atPeak ? "Load P (Peak!)" : "Load Power P"}
            value={`${pLoad.toFixed(1)} W`}
            tone={atPeak ? "good" : "brand"}
          />
          <Readout label="Efficiency η" value={`${efficiency.toFixed(0)}%`} tone={efficiency >= 75 ? "good" : efficiency < 40 ? "bad" : "ink"} />
        </div>

        {/* Live compact circuit bar */}
        <div className="rounded-xl border border-line bg-surface-2 p-2.5">
          <svg
            viewBox="0 0 560 112"
            role="img"
            aria-label={`Live real cell circuit with EMF ${emf.toFixed(1)} V, internal resistance ${rInt.toFixed(1)} ohms, and external load ${rLoad.toFixed(1)} ohms`}
            className="mx-auto block h-auto w-full max-w-[540px]"
          >
            {/* Dashed real cell box */}
            <rect x="28" y="10" width="218" height="58" rx="8" className="fill-warn-soft stroke-accent" strokeWidth={1.6} strokeDasharray="5,4" />
            <text x="137" y="24" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-warn">
              Real Cell (V = {vTerminal.toFixed(2)} V across terminals)
            </text>
            {/* Wires */}
            <path d="M 16 44 H 66 M 78 44 H 134 M 196 44 H 544 V 92 H 416 M 332 92 H 158 M 126 92 H 16 V 44" fill="none" className="stroke-ink" strokeWidth={2.2} />
            {/* Ideal cell plates */}
            <line x1="66" y1="29" x2="66" y2="59" className="stroke-ink" strokeWidth={2.2} />
            <line x1="78" y1="35" x2="78" y2="53" className="stroke-ink" strokeWidth={4.5} />
            <text x="72" y="64" fontSize="10.5" fontWeight="800" textAnchor="middle" className="fill-ink">
              {emf.toFixed(1)} V
            </text>
            {/* Internal resistor r */}
            <rect x="134" y="33" width="62" height="22" rx="3" className="fill-bad-soft stroke-bad" strokeWidth={2} />
            <text x="165" y="48" fontSize="11" fontWeight="800" textAnchor="middle" className="fill-bad">
              r = {rInt.toFixed(1)} Ω
            </text>
            {/* Terminal dots */}
            <circle cx="28" cy="44" r="4" className="fill-brand" />
            <circle cx="246" cy="44" r="4" className="fill-brand" />
            {/* Lost volts & internal heat pill */}
            <text x="395" y="34" fontSize="10.5" fontWeight="700" textAnchor="middle" className="fill-bad">
              Lost volts Ir = {vLost.toFixed(2)} V · Internal heat = {pInt.toFixed(1)} W
            </text>
            {/* Ammeter */}
            <circle cx="142" cy="92" r="15" className="fill-good-soft stroke-good" strokeWidth={2} />
            <text x="142" y="96" fontSize="11" fontWeight="800" textAnchor="middle" className="fill-good">
              A
            </text>
            <text x="208" y="86" fontSize="10.5" fontWeight="700" className="fill-good">
              I = {current.toFixed(2)} A
            </text>
            {/* External Load R */}
            <rect x="332" y="79" width="84" height="26" rx="4" className="fill-brand-soft stroke-brand" strokeWidth={2} />
            <text x="374" y="96" fontSize="11" fontWeight="800" textAnchor="middle" className="fill-brand">
              R = {rLoad.toFixed(1)} Ω
            </text>
          </svg>
        </div>

        {/* Dual Live Graphs */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Graph 1: V vs I */}
          <div className="rounded-xl border border-line bg-surface-2 p-2.5">
            <svg
              viewBox="0 0 296 196"
              role="img"
              aria-label={`Terminal voltage versus current line V = ${emf.toFixed(1)} minus ${rInt.toFixed(1)} I`}
              className="block h-auto w-full"
            >
              <text x="158" y="15" fontSize="11.5" fontWeight="800" textAnchor="middle" className="fill-ink">
                V–I Graph (gradient = −{rInt.toFixed(1)} Ω)
              </text>
              {/* Plot frame */}
              <rect x={gx0} y={gy1} width={gx1 - gx0} height={gy0 - gy1} className="fill-surface stroke-line" strokeWidth={1} />
              {/* Axes */}
              <line x1={gx0} y1={gy0} x2={gx1 + 6} y2={gy0} className="stroke-ink-2" strokeWidth={1.6} />
              <line x1={gx0} y1={gy0} x2={gx0} y2={gy1 - 6} className="stroke-ink-2" strokeWidth={1.6} />
              {/* Dashed EMF line */}
              <line x1={gx0} y1={emfY} x2={gx1} y2={emfY} className="stroke-line" strokeWidth={1.2} strokeDasharray="4,3" />
              {/* Linear V = eps - Ir */}
              <line x1={gx0} y1={emfY} x2={scX} y2={gy0} className="stroke-brand" strokeWidth={2.6} strokeLinecap="round" />
              {/* Vertical split at current I: red lost volts, green terminal V */}
              <line x1={curIx} y1={emfY} x2={curIx} y2={curVy} className="stroke-bad" strokeWidth={2.5} />
              <line x1={curIx} y1={curVy} x2={curIx} y2={gy0} className="stroke-good" strokeWidth={2.5} />
              {/* Operating point */}
              <circle cx={curIx} cy={curVy} r="5" className="fill-brand stroke-surface" strokeWidth={2} />
              {/* Intercept markers */}
              <circle cx={gx0} cy={emfY} r="3.5" className="fill-accent" />
              <text x={gx0 - 5} y={emfY + 3.5} fontSize="9.5" fontWeight="700" textAnchor="end" className="fill-warn">
                {emf.toFixed(0)}V
              </text>
              <text x={gx0 - 5} y={gy0 + 3} fontSize="9" textAnchor="end" className="fill-ink-2">
                0
              </text>
              <text x={gx1} y={gy0 + 13} fontSize="9" textAnchor="end" className="fill-ink-2">
                {iAxisMax} A
              </text>
              <text x={scX} y={gy0 + 13} fontSize="9" fontWeight="700" textAnchor="middle" className="fill-bad">
                {iShort <= iAxisMax ? `${iShort.toFixed(1)}A` : ""}
              </text>
              <text x={(gx0 + gx1) / 2} y="190" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-ink-2">
                Current I / A
              </text>
              <text x="14" y="100" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-ink-2" transform="rotate(-90 14 100)">
                V / V
              </text>
            </svg>
          </div>

          {/* Graph 2: Load Power P vs R */}
          <div className="rounded-xl border border-line bg-surface-2 p-2.5">
            <svg
              viewBox="0 0 296 196"
              role="img"
              aria-label={`External load power versus load resistance curve peaking at R equals ${rInt.toFixed(1)} ohms with ${pMax.toFixed(1)} watts`}
              className="block h-auto w-full"
            >
              <text x="158" y="15" fontSize="11.5" fontWeight="800" textAnchor="middle" className="fill-ink">
                Load Power P vs R (peak at R = {rInt.toFixed(1)} Ω)
              </text>
              <rect x={px0} y={py1} width={px1 - px0} height={py0 - py1} className="fill-surface stroke-line" strokeWidth={1} />
              <line x1={px0} y1={py0} x2={px1 + 6} y2={py0} className="stroke-ink-2" strokeWidth={1.6} />
              <line x1={px0} y1={py0} x2={px0} y2={py1 - 6} className="stroke-ink-2" strokeWidth={1.6} />
              {/* Vertical dashed peak line at R = r */}
              <line x1={peakRx} y1={peakPy} x2={peakRx} y2={py0} className="stroke-accent" strokeWidth={1.6} strokeDasharray="4,3" />
              {/* P(R) curve */}
              <path d={pCurvePath} fill="none" className="stroke-brand" strokeWidth={2.6} strokeLinecap="round" />
              {/* Peak marker */}
              <circle cx={peakRx} cy={peakPy} r="4.5" className="fill-accent" />
              <text x={Math.min(peakRx + 6, 224)} y={Math.max(peakPy - 5, 36)} fontSize="9.5" fontWeight="700" className="fill-warn">
                P_max = {pMax.toFixed(1)} W
              </text>
              {/* Live operating dot */}
              <line x1={curRx} y1={curPy} x2={curRx} y2={py0} className="stroke-good" strokeWidth={1.4} strokeDasharray="3,2" />
              <circle cx={curRx} cy={curPy} r="5.5" className={atPeak ? "fill-good stroke-surface" : "fill-brand stroke-surface"} strokeWidth={2} />
              {/* Axis ticks */}
              <text x={px0 - 5} y={py1 + 5} fontSize="9" textAnchor="end" className="fill-ink-2">
                {pAxisMax}W
              </text>
              <text x={px0 - 5} y={py0 + 3} fontSize="9" textAnchor="end" className="fill-ink-2">
                0
              </text>
              <text x={px0} y={py0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                0
              </text>
              <text x={mapRx(5)} y={py0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                5
              </text>
              <text x={mapRx(10)} y={py0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                10
              </text>
              <text x={px1} y={py0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                15 Ω
              </text>
              <text x={(px0 + px1) / 2} y="190" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-ink-2">
                Load Resistance R / Ω
              </text>
              <text x="14" y="100" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-ink-2" transform="rotate(-90 14 100)">
                P / W
              </text>
            </svg>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: POTENTIAL DIVIDER & SENSOR CIRCUIT EXPLORER
// =============================================================================
function PotentialDividerExplorer() {
  const [sensor, setSensor] = useState<"ntc" | "ldr">("ntc");
  const [tap, setTap] = useState<"sensor" | "fixed">("sensor");
  const [envVal, setEnvVal] = useState(25); // °C (0..80) for NTC, or % light (0..100) for LDR
  const [rFixed, setRFixed] = useState(5.0); // kΩ
  const [vIn, setVIn] = useState(12.0); // V

  const sensorR = (x: number, kind: "ntc" | "ldr") => {
    if (kind === "ntc") {
      // 10 kΩ at 25 °C, drops steeply from ~30.8 kΩ (0 °C) to ~0.84 kΩ (80 °C)
      return 10.0 * Math.exp(-0.045 * (x - 25));
    }
    // LDR: 30 kΩ in total dark (0%), drops to ~0.64 kΩ in bright sunlight (100%)
    return 0.4 + 29.6 * Math.exp(-0.048 * x);
  };

  const envMax = sensor === "ntc" ? 80 : 100;
  const clampedEnv = Math.min(envVal, envMax);
  const rSens = sensorR(clampedEnv, sensor);
  const rTotal = rFixed + rSens;
  const currentMa = vIn / rTotal; // V / kΩ = mA!
  const vSensor = (vIn * rSens) / rTotal;
  const vFixed = (vIn * rFixed) / rTotal;
  const vOut = tap === "sensor" ? vSensor : vFixed;
  const threshold = vIn * 0.5;
  const triggered = vOut >= threshold;

  // Build V_out vs Environment response curve
  const gx0 = 44;
  const gx1 = 278;
  const gy0 = 166;
  const gy1 = 26;
  const mapEx = (x: number) => gx0 + (x / envMax) * (gx1 - gx0);
  const mapVy = (v: number) => gy0 - (v / vIn) * (gy0 - gy1);

  const vPts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = (i / 60) * envMax;
    const rs = sensorR(x, sensor);
    const vo = tap === "sensor" ? (vIn * rs) / (rFixed + rs) : (vIn * rFixed) / (rFixed + rs);
    vPts.push(`${i === 0 ? "M" : "L"} ${mapEx(x).toFixed(1)} ${mapVy(vo).toFixed(1)}`);
  }
  const vCurve = vPts.join(" ");
  const curEx = mapEx(clampedEnv);
  const curVy = mapVy(vOut);
  const threshY = mapVy(threshold);

  const handleSensorChange = (next: "ntc" | "ldr") => {
    setSensor(next);
    setEnvVal(next === "ntc" ? 25 : 40);
  };

  const envLabel = sensor === "ntc" ? "Temperature T" : "Light Intensity";
  const envUnit = sensor === "ntc" ? "°C" : "%";
  const scenarioText =
    sensor === "ntc"
      ? tap === "fixed"
        ? "Overheat / cooling-fan alarm (turns ON when HOT)"
        : "Frost / cold-weather heater (turns ON when COLD)"
      : tap === "sensor"
        ? "Automatic streetlight (turns ON in DARKNESS)"
        : "Daylight blind / brightness trigger (turns ON in BRIGHT light)";

  return (
    <WidgetFrame
      title="Potential Divider & Sensor Circuit Explorer"
      tryThis={[
        "Switch between **NTC Thermistor** and **LDR** and drag the environment slider to watch semiconductor resistance drop.",
        "Toggle **V_out across Sensor vs Fixed R₁** to see how swapping output terminals flips the response curve upside down!",
        "Adjust fixed resistor **R₁** to calibrate the exact temperature or brightness at which the circuit crosses the 50% trigger threshold.",
      ]}
      caption={
        <span>
          <strong>Active design:</strong> {scenarioText}. Current circuit share:{" "}
          <M>{tap === "sensor" ? 'V_("out") = V_("in") * R_("sensor") / (R_1 + R_("sensor"))' : 'V_("out") = V_("in") * R_1 / (R_1 + R_("sensor"))'}</M>{" "}
          = <strong>{vOut.toFixed(2)} V</strong> (with{" "}
          <strong>{vFixed.toFixed(2)} V + {vSensor.toFixed(2)} V = {vIn.toFixed(1)} V</strong> always conserved!).
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Sensor type"
            value={sensor}
            onChange={handleSensorChange}
            options={[
              { value: "ntc", label: "🌡️ NTC Thermistor" },
              { value: "ldr", label: "☀️ LDR (Light)" },
            ]}
          />
          <Segmented
            label="Output terminal placement"
            value={tap}
            onChange={setTap}
            options={[
              { value: "sensor", label: "V_out across Sensor" },
              { value: "fixed", label: "V_out across Fixed R₁" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label={envLabel}
            value={clampedEnv}
            min={0}
            max={envMax}
            step={sensor === "ntc" ? 1 : 2}
            onChange={setEnvVal}
            format={(v) => `${v} ${envUnit}`}
          />
          <Slider
            label="Fixed Resistor R₁"
            value={rFixed}
            min={0.5}
            max={20}
            step={0.5}
            onChange={setRFixed}
            format={(v) => `${v.toFixed(1)} kΩ`}
          />
          <Slider
            label="Supply V_in"
            value={vIn}
            min={3}
            max={18}
            step={1}
            onChange={setVIn}
            format={(v) => `${v.toFixed(0)} V`}
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label={sensor === "ntc" ? "R_thermistor" : "R_LDR"} value={`${rSens.toFixed(2)} kΩ`} tone="ink" />
          <Readout label="Output V_out" value={`${vOut.toFixed(2)} V`} tone={triggered ? "good" : "brand"} />
          <Readout label="Current I" value={`${currentMa.toFixed(2)} mA`} tone="brand" />
          <Readout label={`Trigger (≥${threshold.toFixed(1)}V)`} value={triggered ? "ON ⚡" : "OFF"} tone={triggered ? "good" : "ink"} />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Left SVG: Live Potential Divider Schematic */}
          <div className="rounded-xl border border-line bg-surface-2 p-2.5">
            <svg
              viewBox="0 0 296 196"
              role="img"
              aria-label={`Live potential divider schematic with supply ${vIn} V, fixed resistor ${rFixed} kilohms, and ${sensor === "ntc" ? "NTC thermistor" : "LDR"} at ${rSens.toFixed(2)} kilohms`}
              className="block h-auto w-full"
            >
              <text x="148" y="15" fontSize="11.5" fontWeight="800" textAnchor="middle" className="fill-ink">
                Live Potential Divider Schematic
              </text>
              {/* Top & bottom rails */}
              <line x1="48" y1="30" x2="218" y2="30" className="stroke-ink" strokeWidth={2} />
              <line x1="48" y1="178" x2="218" y2="178" className="stroke-ink" strokeWidth={2} />
              <circle cx="48" cy="30" r="3.5" className="fill-bad" />
              <circle cx="48" cy="178" r="3.5" className="fill-brand" />
              <text x="41" y="34" fontSize="10.5" fontWeight="800" textAnchor="end" className="fill-bad">
                +{vIn.toFixed(0)}V
              </text>
              <text x="41" y="182" fontSize="10.5" fontWeight="800" textAnchor="end" className="fill-brand">
                0V
              </text>

              {/* Vertical divider chain at x = 132 */}
              <line x1="132" y1="30" x2="132" y2="44" className="stroke-ink" strokeWidth={2} />
              <line x1="132" y1="94" x2="132" y2="116" className="stroke-ink" strokeWidth={2} />
              <line x1="132" y1="166" x2="132" y2="178" className="stroke-ink" strokeWidth={2} />

              {/* Top component: Fixed R1 if tap==="sensor", Sensor if tap==="fixed" so V_out is ALWAYS cleanly shown on bottom! */}
              {tap === "sensor" ? (
                <>
                  {/* Top = Fixed R1 */}
                  <rect x="118" y="44" width="28" height="50" rx="3" className="fill-brand-soft stroke-brand" strokeWidth={2} />
                  <text x="110" y="65" fontSize="10.5" fontWeight="800" textAnchor="end" className="fill-brand">
                    R₁ = {rFixed.toFixed(1)}k
                  </text>
                  <text x="110" y="80" fontSize="9.5" fontWeight="700" textAnchor="end" className="fill-ink-2">
                    {vFixed.toFixed(2)} V
                  </text>
                  {/* Bottom = Sensor */}
                  <rect x="118" y="116" width="28" height="50" rx="3" className="fill-good-soft stroke-good" strokeWidth={2.2} />
                  {sensor === "ntc" ? (
                    <polyline points="110,160 116,160 152,122" fill="none" className="stroke-good" strokeWidth={2} />
                  ) : (
                    <>
                      <circle cx="132" cy="141" r="21" fill="none" className="stroke-good" strokeWidth={1.5} />
                      <line x1="99" y1="120" x2="110" y2="130" className="stroke-accent" strokeWidth={1.8} />
                      <line x1="103" y1="114" x2="114" y2="124" className="stroke-accent" strokeWidth={1.8} />
                    </>
                  )}
                  <text x="108" y="140" fontSize="10.5" fontWeight="800" textAnchor="end" className="fill-good">
                    {sensor === "ntc" ? "NTC" : "LDR"}
                  </text>
                  <text x="108" y="154" fontSize="9.5" fontWeight="700" textAnchor="end" className="fill-good">
                    {rSens.toFixed(1)}k
                  </text>
                </>
              ) : (
                <>
                  {/* Top = Sensor */}
                  <rect x="118" y="44" width="28" height="50" rx="3" className="fill-warn-soft stroke-accent" strokeWidth={2} />
                  {sensor === "ntc" ? (
                    <polyline points="110,88 116,88 152,50" fill="none" className="stroke-warn" strokeWidth={2} />
                  ) : (
                    <>
                      <circle cx="132" cy="69" r="21" fill="none" className="stroke-accent" strokeWidth={1.5} />
                      <line x1="99" y1="48" x2="110" y2="58" className="stroke-accent" strokeWidth={1.8} />
                      <line x1="103" y1="42" x2="114" y2="52" className="stroke-accent" strokeWidth={1.8} />
                    </>
                  )}
                  <text x="108" y="66" fontSize="10.5" fontWeight="800" textAnchor="end" className="fill-warn">
                    {sensor === "ntc" ? "NTC" : "LDR"} {rSens.toFixed(1)}k
                  </text>
                  <text x="108" y="80" fontSize="9.5" fontWeight="700" textAnchor="end" className="fill-ink-2">
                    {vSensor.toFixed(2)} V
                  </text>
                  {/* Bottom = Fixed R1 */}
                  <rect x="118" y="116" width="28" height="50" rx="3" className="fill-good-soft stroke-good" strokeWidth={2.2} />
                  <text x="110" y="139" fontSize="10.5" fontWeight="800" textAnchor="end" className="fill-good">
                    R₁ = {rFixed.toFixed(1)}k
                  </text>
                  <text x="110" y="154" fontSize="9.5" fontWeight="700" textAnchor="end" className="fill-good">
                    (output)
                  </text>
                </>
              )}

              {/* Middle tap to V_out */}
              <circle cx="132" cy="105" r="4" className="fill-good" />
              <line x1="132" y1="105" x2="218" y2="105" className="stroke-good" strokeWidth={2} />
              <circle cx="218" cy="105" r="4" className="fill-good" />
              <circle cx="218" cy="178" r="4" className="fill-good" />
              <line x1="218" y1="112" x2="218" y2="171" className="stroke-good" strokeWidth={1.5} strokeDasharray="3,3" />
              {/* V_out readout box */}
              <rect x="225" y="122" width="64" height="38" rx="6" className={triggered ? "fill-good-soft stroke-good" : "fill-surface stroke-line"} strokeWidth={1.8} />
              <text x="257" y="137" fontSize="9.5" fontWeight="700" textAnchor="middle" className="fill-ink-2">
                V_out
              </text>
              <text x="257" y="153" fontSize="12" fontWeight="800" textAnchor="middle" className={triggered ? "fill-good" : "fill-ink"}>
                {vOut.toFixed(2)}V
              </text>
              {/* Status lamp */}
              <circle cx="257" cy="64" r="14" className={triggered ? "fill-good stroke-good" : "fill-surface stroke-line"} strokeWidth={2} />
              <text x="257" y="68" fontSize="9.5" fontWeight="800" textAnchor="middle" className={triggered ? "fill-surface" : "fill-ink-2"}>
                {triggered ? "ON" : "OFF"}
              </text>
              <text x="257" y="90" fontSize="9" fontWeight="700" textAnchor="middle" className="fill-ink-2">
                Relay
              </text>
            </svg>
          </div>

          {/* Right SVG: Live V_out vs Temperature / Light curve */}
          <div className="rounded-xl border border-line bg-surface-2 p-2.5">
            <svg
              viewBox="0 0 296 196"
              role="img"
              aria-label={`Output voltage V_out versus ${envLabel} curve with live operating point at ${clampedEnv} ${envUnit} and ${vOut.toFixed(2)} volts`}
              className="block h-auto w-full"
            >
              <text x="158" y="15" fontSize="11.5" fontWeight="800" textAnchor="middle" className="fill-ink">
                V_out vs {sensor === "ntc" ? "Temperature" : "Light Level"}
              </text>
              <rect x={gx0} y={gy1} width={gx1 - gx0} height={gy0 - gy1} className="fill-surface stroke-line" strokeWidth={1} />
              <line x1={gx0} y1={gy0} x2={gx1 + 6} y2={gy0} className="stroke-ink-2" strokeWidth={1.6} />
              <line x1={gx0} y1={gy0} x2={gx0} y2={gy1 - 6} className="stroke-ink-2" strokeWidth={1.6} />
              {/* Threshold horizontal dashed line */}
              <line x1={gx0} y1={threshY} x2={gx1} y2={threshY} className="stroke-accent" strokeWidth={1.5} strokeDasharray="5,3" />
              <text x={gx1 - 4} y={threshY - 4} fontSize="9" fontWeight="700" textAnchor="end" className="fill-warn">
                Trigger ({threshold.toFixed(1)} V)
              </text>
              {/* Response curve */}
              <path d={vCurve} fill="none" className="stroke-brand" strokeWidth={2.8} strokeLinecap="round" />
              {/* Live dot & drop line */}
              <line x1={curEx} y1={curVy} x2={curEx} y2={gy0} className={triggered ? "stroke-good" : "stroke-brand"} strokeWidth={1.4} strokeDasharray="3,2" />
              <circle cx={curEx} cy={curVy} r="5.5" className={triggered ? "fill-good stroke-surface" : "fill-brand stroke-surface"} strokeWidth={2} />
              {/* Axis ticks */}
              <text x={gx0 - 5} y={gy1 + 5} fontSize="9" textAnchor="end" className="fill-ink-2">
                {vIn.toFixed(0)}V
              </text>
              <text x={gx0 - 5} y={gy0 + 3} fontSize="9" textAnchor="end" className="fill-ink-2">
                0
              </text>
              <text x={gx0} y={gy0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                0{envUnit}
              </text>
              <text x={(gx0 + gx1) / 2} y={gy0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                {envMax / 2}{envUnit}
              </text>
              <text x={gx1} y={gy0 + 13} fontSize="9" textAnchor="middle" className="fill-ink-2">
                {envMax}{envUnit}
              </text>
              <text x={(gx0 + gx1) / 2} y="190" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-ink-2">
                {sensor === "ntc" ? "Temperature / °C" : "Light Intensity / %"}
              </text>
              <text x="14" y="100" fontSize="10" fontWeight="700" textAnchor="middle" className="fill-ink-2" transform="rotate(-90 14 100)">
                V_out / V
              </text>
            </svg>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "internal-resistance-power",
    title: "Internal Resistance & Maximum Power Lab",
    blurb: "Vary EMF ε, internal resistance r, and load R to explore lost volts, the V–I line, and peak power transfer at R = r.",
    Component: InternalResistanceLab,
  },
  {
    id: "potential-divider-sensors",
    title: "Potential Divider & Sensor Circuit Explorer",
    blurb: "Test NTC thermistors and LDRs in a live potential divider, flip V_out terminals, and watch automated threshold switching.",
    Component: PotentialDividerExplorer,
  },
];
