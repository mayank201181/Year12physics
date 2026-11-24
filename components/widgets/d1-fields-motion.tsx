"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

const G_CONST = 6.67e-11;
const M_EARTH = 5.97e24;
const R_EARTH = 6.37e6;

// =============================================================================
// WIDGET 1: Orbital Mechanics & Escape Velocity Lab
// =============================================================================
function OrbitalEscapeLab() {
  const [massRatio, setMassRatio] = useState(1.0);
  const [radiusRatio, setRadiusRatio] = useState(1.5);
  const [mode, setMode] = useState<"circular" | "escape">("circular");

  const mass = massRatio * M_EARTH;
  const rMeters = radiusRatio * R_EARTH;
  const rKm = rMeters / 1000;

  const gVal = (G_CONST * mass) / (rMeters * rMeters);
  const vOrb = Math.sqrt((G_CONST * mass) / rMeters);
  const vEsc = Math.SQRT2 * vOrb;
  const periodHours = (2 * Math.PI * rMeters) / vOrb / 3600;
  const vgMJ = -(G_CONST * mass) / rMeters / 1e6;

  // Left orbit SVG geometry (centred at cx=145, cy=138)
  const cx = 145;
  const cy = 138;
  const planetPx = 15 + Math.cbrt(massRatio) * 6; // visual planet radius ~18–25 px
  const orbitPx = 28 + ((radiusRatio - 1.0) / 6.0) * 86; // maps r/R_E in [1,7] to [28,114] px
  const satAngle = -Math.PI / 4; // top-right (45 deg)
  const satX = cx + orbitPx * Math.cos(satAngle);
  const satY = cy + orbitPx * Math.sin(satAngle);

  // Tangent unit vector (anticlockwise) and inward unit vector
  const tx = -Math.sin(satAngle);
  const ty = Math.cos(satAngle);
  const rx = -Math.cos(satAngle);
  const ry = -Math.sin(satAngle);

  const vArrowLen = mode === "escape" ? 46 : 32;
  const gArrowLen = Math.max(14, Math.min(38, 12 + gVal * 2.2));

  // Right panel: live V_g(r) potential well graph (x in [332, 540], y in [48, 232])
  // Horizontal axis at y=58 (V_g = 0), vertical axis at x=334 (r = 0)
  const gx0 = 334;
  const gxMax = 538;
  const gyZero = 58;
  const gyBottom = 232;
  const vMinScale = -250; // MJ kg^-1 floor for graph scaling

  const mapR = (rr: number) => gx0 + ((rr - 0.5) / 6.8) * (gxMax - gx0);
  const mapV = (vMJ: number) => {
    const clamped = Math.max(vMinScale, Math.min(0, vMJ));
    return gyZero + (clamped / vMinScale) * (gyBottom - gyZero);
  };

  const curvePts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const rr = 1.0 + (i / 40) * 6.0;
    const vHere = -(G_CONST * mass) / (rr * R_EARTH) / 1e6;
    if (vHere >= vMinScale) {
      curvePts.push(`${mapR(rr).toFixed(1)},${mapV(vHere).toFixed(1)}`);
    }
  }

  const curGX = mapR(radiusRatio);
  const curGY = mapV(vgMJ);
  const isNearGeo = Math.abs(massRatio - 1.0) < 0.05 && Math.abs(radiusRatio - 6.6) <= 0.15;

  return (
    <WidgetFrame
      title="Orbital Mechanics & Escape Velocity Lab"
      tryThis={[
        "Keep Earth mass at {{1.0 M_E}} and slide orbital radius to {{6.6 R_E}} — watch the period lock onto **24 hours** (geostationary orbit!).",
        "Double the orbital radius from {{1.5 R_E}} to {{3.0 R_E}}: verify that {{g}} quarters ({{1/r^2}}) while {{V_g}} only halves ({{1/r}}).",
        "Toggle **Escape Trajectory** and compare {{v_esc}} with {{v_orb}}: notice the ratio stays strictly {{sqrt(2) ≈ 1.414}}.",
      ]}
      caption={
        <span>
          At <M>{`r = ${radiusRatio.toFixed(1)} R_E`}</M> ({Math.round(rKm).toLocaleString("en-GB")} km from the centre) around a{" "}
          <strong>{massRatio.toFixed(1)} M_E</strong> planet, gravity pulls at{" "}
          <strong>{gVal.toFixed(2)} N kg⁻¹</strong>.{" "}
          {isNearGeo
            ? "You found Earth's geostationary ring (T ≈ 24 h) — a satellite here hovers fixed over one point on the equator!"
            : mode === "escape"
              ? `Boosting speed by 41.4% from ${(vOrb / 1000).toFixed(2)} km s⁻¹ to ${(vEsc / 1000).toFixed(2)} km s⁻¹ raises total energy from negative to zero, freeing the spacecraft to infinity.`
              : `A circular orbit requires ${(vOrb / 1000).toFixed(2)} km s⁻¹ (period ${periodHours.toFixed(1)} h), sitting inside a gravitational potential well of ${vgMJ.toFixed(1)} MJ kg⁻¹.`}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<string>
            label="Planet preset"
            value={
              Math.abs(massRatio - 0.1) < 0.01
                ? "mars"
                : Math.abs(massRatio - 1.0) < 0.01
                  ? "earth"
                  : Math.abs(massRatio - 3.0) < 0.01
                    ? "super"
                    : "custom"
            }
            onChange={(v) => {
              if (v === "mars") setMassRatio(0.1);
              else if (v === "earth") setMassRatio(1.0);
              else if (v === "super") setMassRatio(3.0);
            }}
            options={[
              { value: "mars", label: "Mars (0.1 M_E)" },
              { value: "earth", label: "Earth (1.0 M_E)" },
              { value: "super", label: "Super-Earth (3.0 M_E)" },
            ]}
          />
          <Segmented
            label="Trajectory mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "circular", label: "Circular Orbit" },
              { value: "escape", label: "Escape Trajectory (HL)" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Planet mass M / M_E"
            value={massRatio}
            min={0.1}
            max={4.0}
            step={0.1}
            onChange={setMassRatio}
            format={(v) => `${v.toFixed(1)} M_E`}
          />
          <Slider
            label="Orbital radius r / R_E"
            value={radiusRatio}
            min={1.0}
            max={7.0}
            step={0.1}
            onChange={setRadiusRatio}
            format={(v) => `${v.toFixed(1)} R_E (${Math.round(v * 6370).toLocaleString("en-GB")} km)`}
          />
        </div>

        <svg
          viewBox="0 0 560 270"
          className="h-auto w-full rounded-xl"
          role="img"
          aria-label="Live orbital path around planet and gravitational potential well graph"
        >
          <rect x="0" y="0" width="560" height="270" rx="12" fill="#0f172a" />
          <text x="145" y="20" fill="#93c5fd" fontSize="12" fontWeight="700" textAnchor="middle">
            Orbit &amp; Equipotentials
          </text>
          <text x="435" y="20" fill="#fde047" fontSize="12" fontWeight="700" textAnchor="middle">
            Potential Well V_g = −GM / r (HL)
          </text>
          <line x1="294" y1="14" x2="294" y2="256" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Faint equipotential rings */}
          {[40, 66, 98].map((rr) => (
            <circle
              key={rr}
              cx={cx}
              cy={cy}
              r={rr}
              fill="none"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          ))}

          {/* Current circular orbit ring */}
          <circle
            cx={cx}
            cy={cy}
            r={orbitPx}
            fill="none"
            stroke={mode === "circular" ? "#38bdf8" : "#475569"}
            strokeWidth={mode === "circular" ? 2.2 : 1.4}
            strokeDasharray={mode === "circular" ? "6 4" : "3 4"}
          />

          {/* Escape parabolic path if in escape mode */}
          {mode === "escape" ? (
            <path
              d={`M ${satX.toFixed(1)} ${satY.toFixed(1)} Q ${(satX + tx * 65).toFixed(1)} ${(satY + ty * 65).toFixed(1)}, ${(satX + tx * 120 - rx * 40).toFixed(1)} ${Math.max(24, satY + ty * 115 - ry * 35).toFixed(1)}`}
              fill="none"
              stroke="#facc15"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
          ) : null}

          {/* Planet */}
          <circle cx={cx} cy={cy} r={planetPx} fill="#1d4ed8" stroke="#93c5fd" strokeWidth="2" />
          <text x={cx} y={cy + 4} fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
            {massRatio.toFixed(1)}M
          </text>

          {/* Velocity vector */}
          <line
            x1={satX}
            y1={satY}
            x2={satX + tx * vArrowLen}
            y2={satY + ty * vArrowLen}
            stroke={mode === "escape" ? "#facc15" : "#4ade80"}
            strokeWidth="2.8"
          />
          <text
            x={satX + tx * (vArrowLen + 12)}
            y={satY + ty * (vArrowLen + 12)}
            fill={mode === "escape" ? "#fde047" : "#4ade80"}
            fontSize="11"
            fontWeight="700"
            textAnchor="middle"
          >
            {mode === "escape" ? "v_esc" : "v_orb"}
          </text>

          {/* Inward g arrow */}
          <line
            x1={satX}
            y1={satY}
            x2={satX + rx * gArrowLen}
            y2={satY + ry * gArrowLen}
            stroke="#f87171"
            strokeWidth="2.6"
          />
          <text
            x={satX + rx * (gArrowLen + 10)}
            y={satY + ry * (gArrowLen + 10)}
            fill="#fca5a5"
            fontSize="11"
            fontWeight="700"
            textAnchor="middle"
          >
            g
          </text>

          {/* Satellite */}
          <circle cx={satX} cy={satY} r="6.5" fill="#facc15" stroke="#fef08a" strokeWidth="1.5" />

          {/* Right panel: Potential Well Graph */}
          <line x1={gx0} y1={gyZero} x2={gxMax} y2={gyZero} stroke="#cbd5e1" strokeWidth="1.6" />
          <line x1={gx0} y1={40} x2={gx0} y2={gyBottom + 8} stroke="#cbd5e1" strokeWidth="1.6" />
          <text x={gxMax - 4} y={gyZero - 7} fill="#94a3b8" fontSize="10" textAnchor="end">
            r (V_g = 0 at ∞)
          </text>
          <text x={gx0 - 6} y={gyZero + 4} fill="#e2e8f0" fontSize="10" textAnchor="end">
            0
          </text>
          <text x={gx0 - 6} y={gyBottom} fill="#94a3b8" fontSize="9.5" textAnchor="end">
            −250
          </text>
          <text x={gx0 - 6} y={(gyZero + gyBottom) / 2} fill="#93c5fd" fontSize="10" fontWeight="700" textAnchor="end">
            MJ/kg
          </text>

          {/* V_g(r) curve */}
          {curvePts.length > 1 ? (
            <polyline fill="none" stroke="#38bdf8" strokeWidth="2.6" points={curvePts.join(" ")} />
          ) : null}

          {/* Escape energy jump indicator */}
          <line
            x1={curGX}
            y1={curGY}
            x2={curGX}
            y2={gyZero}
            stroke={mode === "escape" ? "#facc15" : "#475569"}
            strokeWidth={mode === "escape" ? 2 : 1.3}
            strokeDasharray="4 3"
          />
          <circle cx={curGX} cy={curGY} r="5.5" fill="#facc15" stroke="#0f172a" strokeWidth="1.5" />
          <text
            x={Math.min(502, curGX + 8)}
            y={Math.min(226, curGY + 14)}
            fill="#fde047"
            fontSize="10.5"
            fontWeight="700"
          >
            {vgMJ.toFixed(1)} MJ/kg
          </text>
          <text x="435" y="256" fill="#cbd5e1" fontSize="10.5" textAnchor="middle">
            Gradient = ΔV_g/Δr gives field magnitude g = {gVal.toFixed(2)} N kg⁻¹
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <Readout label="Field g" value={`${gVal.toFixed(2)} N kg⁻¹`} />
          <Readout label="Orbital speed v" value={`${(vOrb / 1000).toFixed(2)} km s⁻¹`} tone="good" />
          <Readout label="Period T" value={`${periodHours.toFixed(1)} h`} tone="ink" />
          <Readout label="Potential V_g (HL)" value={`${vgMJ.toFixed(1)} MJ kg⁻¹`} />
          <Readout label="Escape v_esc (HL)" value={`${(vEsc / 1000).toFixed(2)} km s⁻¹`} tone="good" />
          <Readout label="v_esc / v_orb" value="1.414 (√2)" tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Mass Spectrometer & Velocity Selector
// =============================================================================
function MassSpectrometerLab() {
  const [eKv, setEKv] = useState(40); // kV m^-1
  const [bField, setBField] = useState(0.2); // T
  const [v1e5, setV1e5] = useState(2.0); // × 10^5 m s^-1
  const [qm1e7, setQm1e7] = useState(0.8); // × 10^7 C kg^-1 (0.80 ≈ C-12+)

  const eVal = eKv * 1000;
  const vVal = v1e5 * 1e5;
  const qmVal = qm1e7 * 1e7;

  const vSel = eVal / bField; // m s^-1
  const vSel1e5 = vSel / 1e5;
  const relErr = (vVal - vSel) / vSel;
  const passesSlit = Math.abs(relErr) <= 0.035;

  // Radius in deflection chamber (using actual v if it passes, or selected speed preview)
  const radiusM = vVal / (qmVal * bField);
  const radiusCm = radiusM * 100;
  const diameterCm = 2 * radiusCm;

  // SVG selector geometry: plates x=60..235, beam enters y=185
  // + plate at y=125 (E downward), - plate at y=245, B into page (⊗)
  // For +q moving right: F_e down, F_B up
  const slitX = 252;
  const beamY = 185;
  const maxDeflect = 56;
  const deflectY = Math.max(-maxDeflect, Math.min(maxDeflect, -relErr * 115)); // negative = upward in SVG
  const exitY = beamY + deflectY;

  // Force arrow lengths inside selector (at x=148, y=185)
  const feLen = Math.max(14, Math.min(46, (eKv / 100) * 44));
  const fbLen = Math.max(14, Math.min(46, ((vVal * bField) / 100000) * 44));

  // Deflection chamber semicircle: scale 1 cm -> 3.0 px (r up to ~25 cm fits cleanly inside chamber)
  const pxPerCm = 2.8;
  const rPxRaw = radiusCm * pxPerCm;
  const rPx = Math.max(16, Math.min(76, rPxRaw));
  const hitWallTop = rPxRaw > 76;
  const hitY = beamY - 2 * rPx;

  return (
    <WidgetFrame
      title="Mass Spectrometer & Velocity Selector"
      tryThis={[
        "Start at {{E = 40}} kV m⁻¹, {{B = 0.20}} T: adjust particle speed {{v}} away from {{2.0 * 10^5}} m s⁻¹ and watch {{F_B}} vs {{F_e}} steer the ion into the slit wall!",
        "Restore {{v = E / B}} so the beam passes straight through, then toggle between **¹²C⁺** and **¹⁴C⁺** to see how heavier isotopes strike higher on the detector ({{d = 2 r ∝ m / q}}).",
        "Double **both** {{E}} and {{B}} together: verify {{v_sel = E / B}} stays identical while the circular deflection radius {{r = m v / (q B)}} halves!",
      ]}
      caption={
        passesSlit ? (
          <span>
            <strong>Beam passes slit!</strong> Because <M>{"v ≈ E / B"}</M> ({vSel1e5.toFixed(2)} × 10⁵ m s⁻¹), upward magnetic force{" "}
            <M>{"q v B"}</M> cancels downward electric force <M>{"q E"}</M>. In the deflection chamber, the ion executes a semicircle of radius{" "}
            <strong>{radiusCm.toFixed(1)} cm</strong> and hits the detector <strong>{diameterCm.toFixed(1)} cm</strong> above the slit
            {hitWallTop ? " (exceeds chamber ceiling scale — increase B or q/m to keep it inside!)." : "."}
          </span>
        ) : relErr > 0 ? (
          <span>
            <strong>Blocked (too fast):</strong> At {v1e5.toFixed(1)} × 10⁵ m s⁻¹ &gt; {vSel1e5.toFixed(2)} × 10⁵ m s⁻¹, upward magnetic force{" "}
            <M>{"F_B = q v B"}</M> exceeds downward <M>{"F_e = q E"}</M>, curving the positive ion upwards into the upper collimator wall. Lower{" "}
            <M>{"v"}</M> (or raise <M>{"E"}</M>) to match <M>{"E / B"}</M>.
          </span>
        ) : (
          <span>
            <strong>Blocked (too slow):</strong> At {v1e5.toFixed(1)} × 10⁵ m s⁻¹ &lt; {vSel1e5.toFixed(2)} × 10⁵ m s⁻¹, downward electric force{" "}
            <M>{"F_e = q E"}</M> dominates over upward <M>{"F_B = q v B"}</M>, curving the positive ion downwards into the lower collimator wall. Raise{" "}
            <M>{"v"}</M> (or raise <M>{"B"}</M>) to match <M>{"E / B"}</M>.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<string>
            label="Isotope preset"
            value={
              Math.abs(qm1e7 - 0.8) < 0.02
                ? "c12"
                : Math.abs(qm1e7 - 0.69) < 0.02
                  ? "c14"
                  : Math.abs(qm1e7 - 0.48) < 0.02
                    ? "ne20"
                    : Math.abs(qm1e7 - 0.44) < 0.02
                      ? "ne22"
                      : "custom"
            }
            onChange={(v) => {
              if (v === "c12") setQm1e7(0.8);
              else if (v === "c14") setQm1e7(0.69);
              else if (v === "ne20") setQm1e7(0.48);
              else if (v === "ne22") setQm1e7(0.44);
            }}
            options={[
              { value: "c12", label: "¹²C⁺" },
              { value: "c14", label: "¹⁴C⁺" },
              { value: "ne20", label: "²⁰Ne⁺" },
              { value: "ne22", label: "²²Ne⁺" },
            ]}
          />
          <button
            type="button"
            onClick={() => setV1e5(Math.max(0.5, Math.min(5.0, +vSel1e5.toFixed(1))))}
            className="rounded-lg border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand hover:bg-brand/20"
          >
            Snap v = E / B ({vSel1e5.toFixed(2)} × 10⁵)
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Electric field E"
            value={eKv}
            min={10}
            max={100}
            step={5}
            onChange={setEKv}
            format={(v) => `${v} kV m⁻¹`}
          />
          <Slider
            label="Magnetic field B (into page)"
            value={bField}
            min={0.1}
            max={0.5}
            step={0.02}
            onChange={setBField}
            format={(v) => `${v.toFixed(2)} T`}
          />
          <Slider
            label="Particle speed v"
            value={v1e5}
            min={0.5}
            max={5.0}
            step={0.1}
            onChange={setV1e5}
            format={(v) => `${v.toFixed(1)} × 10⁵ m s⁻¹`}
          />
          <Slider
            label="Charge-to-mass ratio q / m"
            value={qm1e7}
            min={0.25}
            max={1.2}
            step={0.01}
            onChange={setQm1e7}
            format={(v) => `${v.toFixed(2)} × 10⁷ C kg⁻¹`}
          />
        </div>

        <svg
          viewBox="0 0 560 275"
          className="h-auto w-full rounded-xl"
          role="img"
          aria-label="Interactive Bainbridge mass spectrometer showing velocity selector deflection and semicircular trajectory"
        >
          <rect x="0" y="0" width="560" height="275" rx="12" fill="#0f172a" />
          <text x="148" y="20" fill="#93c5fd" fontSize="11.5" fontWeight="700" textAnchor="middle">
            1. Velocity Selector (E ↓, B ⊗)
          </text>
          <text x="406" y="20" fill="#86efac" fontSize="11.5" fontWeight="700" textAnchor="middle">
            2. Deflection Chamber (B ⊗)
          </text>

          {/* Deflection chamber background */}
          <rect x={slitX + 8} y="30" width="286" height="225" rx="6" fill="#1e293b" fillOpacity="0.55" stroke="#334155" />

          {/* B-field crosses (⊗) in both regions */}
          {[
            [95, 150],
            [200, 150],
            [95, 220],
            [200, 220],
            [305, 62],
            [385, 62],
            [465, 62],
            [520, 62],
            [385, 135],
            [465, 135],
            [520, 135],
            [385, 215],
            [465, 215],
            [520, 215],
          ].map(([bx, by], idx) => (
            <g key={idx} stroke="#38bdf8" strokeWidth="1.2" opacity="0.65" fill="none">
              <circle cx={bx} cy={by} r="4.5" />
              <line x1={bx - 3} y1={by - 3} x2={bx + 3} y2={by + 3} />
              <line x1={bx + 3} y1={by - 3} x2={bx - 3} y2={by + 3} />
            </g>
          ))}

          {/* Parallel plates (+ top at y=120, - bottom at y=242) */}
          <rect x="64" y="118" width="168" height="9" rx="2" fill="#dc2626" stroke="#fca5a5" strokeWidth="1" />
          <text x="148" y="112" fill="#fca5a5" fontSize="10.5" fontWeight="700" textAnchor="middle">
            + Plate ({eKv} kV/m ↓)
          </text>
          <rect x="64" y="243" width="168" height="9" rx="2" fill="#2563eb" stroke="#93c5fd" strokeWidth="1" />
          <text x="148" y="265" fill="#93c5fd" fontSize="10.5" fontWeight="700" textAnchor="middle">
            − Plate
          </text>

          {/* Collimating slit wall + detector strip */}
          <rect x={slitX} y="30" width="8" height="147" fill="#64748b" />
          <rect x={slitX} y="193" width="8" height="62" fill="#64748b" />
          {/* Highlighted detector strip on right side of upper wall */}
          <rect x={slitX + 8} y="32" width="4" height="145" fill="#475569" />

          {/* Incoming beam to plates */}
          <line x1="16" y1={beamY} x2="64" y2={beamY} stroke="#facc15" strokeWidth="2.6" />
          <text x="36" y={beamY - 10} fill="#fde047" fontSize="10.5" fontWeight="700" textAnchor="middle">
            +q
          </text>

          {/* Trajectory inside velocity selector */}
          <path
            d={`M 64 ${beamY} Q 158 ${beamY} ${slitX} ${exitY.toFixed(1)}`}
            fill="none"
            stroke={passesSlit ? "#4ade80" : "#f87171"}
            strokeWidth="2.8"
          />

          {/* Live scaled force arrows on ion inside selector */}
          <circle cx="148" cy={beamY} r="5" fill="#facc15" />
          <line x1="148" y1={beamY - 5} x2="148" y2={beamY - 5 - fbLen} stroke="#4ade80" strokeWidth="2.4" />
          <text x="155" y={beamY - 8 - fbLen * 0.5} fill="#4ade80" fontSize="9.5" fontWeight="700">
            F_B
          </text>
          <line x1="148" y1={beamY + 5} x2="148" y2={beamY + 5 + feLen} stroke="#f87171" strokeWidth="2.4" />
          <text x="155" y={beamY + 12 + feLen * 0.5} fill="#fca5a5" fontSize="9.5" fontWeight="700">
            F_e
          </text>

          {/* If passes slit: draw semicircular trajectory in deflection chamber */}
          {passesSlit ? (
            <g>
              <line x1={slitX} y1={beamY} x2={slitX + 10} y2={beamY} stroke="#4ade80" strokeWidth="2.8" />
              <path
                d={`M ${slitX + 10} ${beamY} A ${rPx.toFixed(1)} ${rPx.toFixed(1)} 0 0 0 ${slitX + 10} ${hitY.toFixed(1)}`}
                fill="none"
                stroke="#facc15"
                strokeWidth="3"
              />
              {/* Radius annotation */}
              <line
                x1={slitX + 10}
                y1={beamY - rPx}
                x2={slitX + 10 + rPx}
                y2={beamY - rPx}
                stroke="#94a3b8"
                strokeWidth="1.3"
                strokeDasharray="3 3"
              />
              <text
                x={slitX + 14 + rPx * 0.5}
                y={beamY - rPx - 5}
                fill="#e2e8f0"
                fontSize="10.5"
                fontWeight="700"
                textAnchor="middle"
              >
                r = {radiusCm.toFixed(1)} cm
              </text>
              {/* Detector hit glow */}
              <circle cx={slitX + 10} cy={hitY} r="5.5" fill="#4ade80" stroke="#ffffff" strokeWidth="1.5" />
              <text x={slitX + 20} y={Math.max(46, hitY + 4)} fill="#86efac" fontSize="10.5" fontWeight="700">
                Detector hit (d = {diameterCm.toFixed(1)} cm)
              </text>
            </g>
          ) : (
            <g>
              <circle cx={slitX} cy={exitY} r="5" fill="#f87171" />
              <text x="406" y="138" fill="#fca5a5" fontSize="12" fontWeight="700" textAnchor="middle">
                Ion blocked by collimator wall
              </text>
              <text x="406" y="158" fill="#94a3b8" fontSize="10.5" textAnchor="middle">
                Match v = E / B = {vSel1e5.toFixed(2)} × 10⁵ m s⁻¹ to pass slit
              </text>
            </g>
          )}
        </svg>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Selected v = E / B" value={`${vSel1e5.toFixed(2)} × 10⁵`} />
          <Readout
            label="Slit status"
            value={passesSlit ? "Passes ✓" : relErr > 0 ? "Deflected Up" : "Deflected Down"}
            tone={passesSlit ? "good" : "bad"}
          />
          <Readout label="Radius r" value={`${radiusCm.toFixed(1)} cm`} tone="ink" />
          <Readout label="Detector d = 2r" value={`${diameterCm.toFixed(1)} cm`} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "orbital-escape-lab",
    title: "Orbital Mechanics & Escape Velocity Lab",
    blurb: "Adjust planet mass and orbital radius to explore g, circular speed, Kepler's period, gravitational potential wells and escape velocity.",
    Component: OrbitalEscapeLab,
  },
  {
    id: "mass-spectrometer-lab",
    title: "Mass Spectrometer & Velocity Selector",
    blurb: "Tune E, B, ion speed and q/m to pass ions cleanly through the crossed-field slit and separate isotopes by semicircular deflection radius.",
    Component: MassSpectrometerLab,
  },
];
