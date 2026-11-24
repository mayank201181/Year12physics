"use client";

import { useEffect, useRef, useState } from "react";
import { M, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, makePlane, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Minkowski Spacetime & Lorentz Explorer
// ============================================================================

function MinkowskiLorentzExplorer() {
  const [beta, setBeta] = useState(0.6);

  const gamma = 1 / Math.sqrt(1 - beta * beta);
  const thetaDeg = (Math.atan(beta) * 180) / Math.PI;

  // Muon reference: proper lifetime τ₀ = 2.20 μs, Mt Washington drop d = 2.00 km
  const tau0Us = 2.2;
  const dilatedTauUs = gamma * tau0Us;
  const dropKm = 2.0;
  const contractedDropKm = dropKm / gamma;

  // Ship reference: proper length L₀ = 100 m
  const L0Ship = 100;
  const contractedShip = L0Ship / gamma;

  // Survival fraction over 2.0 km drop: N/N0 = exp(-t_travel / τ)
  // t_travel (μs) = (2000 m) / (beta * 3e8 m/s) * 1e6 = 20 / (3 * beta) μs
  const travelUs = beta > 0.001 ? 20 / (3 * beta) : Infinity;
  const relSurvivalPct = beta > 0.001 ? Math.exp(-travelUs / dilatedTauUs) * 100 : 0;
  const classSurvivalPct = beta > 0.001 ? Math.exp(-travelUs / tau0Us) * 100 : 0;

  // Minkowski SVG coordinate plane: x in [-1, 4], ct in [-1, 4]
  const plane = makePlane({ width: 360, height: 320, xMin: -1, xMax: 4, yMin: -1, yMax: 4, pad: 28 });
  const { px, py } = plane;

  // Endpoints for ct' axis (x = beta * ct) and x' axis (ct = beta * x)
  const ctPrimeEndX = beta * 4;
  const ctPrimeStartX = beta * -1;
  const xPrimeEndY = beta * 4;
  const xPrimeStartY = beta * -1;

  // Unit calibration tick on ct' axis: (x, ct) = (gamma * beta, gamma)
  const unitTickX = gamma * beta;
  const unitTickY = gamma;
  const showUnitTick = unitTickX <= 3.9 && unitTickY <= 3.9;

  // Calibration hyperbola (ct)^2 - x^2 = 1 for x in [-1, 3.8]
  const hyperbolaPts: string[] = [];
  for (let x = -1; x <= 3.8; x += 0.1) {
    const ct = Math.sqrt(1 + x * x);
    if (ct <= 4) hyperbolaPts.push(`${px(x).toFixed(1)},${py(ct).toFixed(1)}`);
  }

  // Two events simultaneous in S: A=(1.0, 2.2) and B=(2.6, 2.2)
  const evA = { x: 1.0, ct: 2.2 };
  const evB = { x: 2.6, ct: 2.2 };
  // Line parallel to x' through (x0, ct0): ct - ct0 = beta * (x - x0)
  // Intersects ct' axis (x = beta * ct): ct_hit = (ct0 - beta * x0) / (1 - beta^2)
  const hitA_ct = (evA.ct - beta * evA.x) / (1 - beta * beta);
  const hitA_x = beta * hitA_ct;
  const hitB_ct = (evB.ct - beta * evB.x) / (1 - beta * beta);
  const hitB_x = beta * hitB_ct;
  const ctPrimeA = gamma * (evA.ct - beta * evA.x);
  const ctPrimeB = gamma * (evB.ct - beta * evB.x);

  return (
    <WidgetFrame
      title="Minkowski Spacetime & Lorentz Explorer"
      tryThis={[
        "Drag {{v/c}} to {{0.60}} and {{0.80}} — verify the classic exact values {{γ = 1.25}} and {{γ = 1.67}}.",
        "Watch how the tilted {{ct'}} and {{x'}} axes scissor symmetrically toward the 45° light cone as {{v/c → 0.95}}.",
        "Compare the green simultaneity lines from **A** and **B**: at {{v > 0}}, why does **B** always hit {{ct'}} **below** **A**?",
      ]}
      caption={
        beta === 0 ? (
          <span>
            At <M>{"v = 0"}</M>, frame <M>{"S'"}</M> coincides with <M>{"S"}</M>: <M>{"γ = 1.00"}</M>, axes are orthogonal, and events <strong>A</strong> and <strong>B</strong> are simultaneous in both frames.
          </span>
        ) : (
          <span>
            At <M>{`v = ${beta.toFixed(2)}c`}</M>, both <M>{"ct'"}</M> and <M>{"x'"}</M> tilt inward by{" "}
            <strong>{thetaDeg.toFixed(1)}°</strong> toward the 45° light cone. Events <strong>A</strong> and <strong>B</strong> are simultaneous in <M>{"S"}</M> (<M>{"ct = 2.2"}</M>), but in <M>{"S'"}</M>, <strong>B</strong> happens earlier (<M>{`ct'_B = ${ctPrimeB.toFixed(2)}`}</M> vs <M>{`ct'_A = ${ctPrimeA.toFixed(2)}`}</M>).
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Slider
            label={<span>Relative frame velocity <M>{"v / c"}</M></span>}
            value={beta}
            min={0}
            max={0.95}
            step={0.01}
            onChange={setBeta}
            format={(v) => `${v.toFixed(2)} c`}
          />
          <div className="flex flex-wrap gap-1.5">
            {[0, 0.5, 0.6, 0.8, 0.95].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setBeta(preset)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  Math.abs(beta - preset) < 0.005
                    ? "border-brand bg-brand text-brand-ink"
                    : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {preset.toFixed(2)}c
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center">
          {/* Live SVG Minkowski Diagram */}
          <div className="rounded-xl border border-line bg-surface-2/60 p-2">
            <svg
              viewBox="0 0 360 320"
              className="mx-auto block w-full max-w-[360px]"
              role="img"
              aria-label={`Minkowski spacetime diagram for v = ${beta.toFixed(2)}c showing tilted ct' and x' axes at ${thetaDeg.toFixed(1)} degrees`}
            >
              <PlaneGrid plane={plane} step={1} labels />

              {/* 45-degree Light Cone */}
              <line
                x1={px(-1)}
                y1={py(-1)}
                x2={px(4)}
                y2={py(4)}
                stroke="var(--accent)"
                strokeWidth={2}
                strokeDasharray="6 4"
              />
              <line
                x1={px(-1)}
                y1={py(1)}
                x2={px(1)}
                y2={py(-1)}
                stroke="var(--accent)"
                strokeWidth={1.6}
                strokeDasharray="6 4"
              />
              <text x={px(3.55)} y={py(3.82)} fontSize={10} fontWeight={700} fill="var(--accent)" textAnchor="end">
                Light (45°)
              </text>

              {/* Invariant calibration hyperbola (ct)^2 - x^2 = 1 */}
              <polyline
                points={hyperbolaPts.join(" ")}
                fill="none"
                stroke="var(--s-algebra)"
                strokeWidth={1.4}
                strokeDasharray="3 3"
                opacity={0.8}
              />

              {/* S axes labels */}
              <text x={px(3.92)} y={py(0) - 6} fontSize={11} fontWeight={800} className="fill-ink" textAnchor="end">
                x
              </text>
              <text x={px(0) - 8} y={py(3.85)} fontSize={11} fontWeight={800} className="fill-ink" textAnchor="end">
                ct
              </text>

              {/* Tilted ct' axis */}
              <line
                x1={px(ctPrimeStartX)}
                y1={py(-1)}
                x2={px(ctPrimeEndX)}
                y2={py(4)}
                stroke="var(--brand)"
                strokeWidth={2.5}
              />
              <text
                x={Math.min(px(ctPrimeEndX) + 6, 336)}
                y={py(3.8)}
                fontSize={12}
                fontWeight={800}
                fill="var(--brand)"
              >
                ct′
              </text>

              {/* Tilted x' axis */}
              <line
                x1={px(-1)}
                y1={py(xPrimeStartY)}
                x2={px(4)}
                y2={py(xPrimeEndY)}
                stroke="var(--brand)"
                strokeWidth={2.5}
              />
              <text
                x={px(3.92)}
                y={Math.max(py(xPrimeEndY) - 6, 20)}
                fontSize={12}
                fontWeight={800}
                fill="var(--brand)"
                textAnchor="end"
              >
                x′
              </text>

              {/* Unit tick ct' = 1 on hyperbola */}
              {showUnitTick ? (
                <g>
                  <circle cx={px(unitTickX)} cy={py(unitTickY)} r={4} fill="var(--s-algebra)" />
                  <text
                    x={px(unitTickX) + 6}
                    y={py(unitTickY) + 4}
                    fontSize={9.5}
                    fontWeight={700}
                    fill="var(--s-algebra)"
                  >
                    ct′=1
                  </text>
                </g>
              ) : null}

              {/* Horizontal line of simultaneity in S through A and B */}
              <line
                x1={px(0)}
                y1={py(evA.ct)}
                x2={px(evB.x)}
                y2={py(evB.ct)}
                stroke="var(--bad)"
                strokeWidth={1.3}
                strokeDasharray="3 3"
              />

              {/* S' lines of simultaneity from A and B to ct' */}
              {hitA_ct >= -0.9 && hitA_ct <= 3.9 ? (
                <line
                  x1={px(hitA_x)}
                  y1={py(hitA_ct)}
                  x2={px(evA.x)}
                  y2={py(evA.ct)}
                  stroke="var(--good)"
                  strokeWidth={1.6}
                  strokeDasharray="4 2"
                />
              ) : null}
              {hitB_ct >= -0.9 && hitB_ct <= 3.9 ? (
                <line
                  x1={px(hitB_x)}
                  y1={py(hitB_ct)}
                  x2={px(evB.x)}
                  y2={py(evB.ct)}
                  stroke="var(--good)"
                  strokeWidth={1.6}
                  strokeDasharray="4 2"
                />
              ) : null}

              {/* Events A and B */}
              <circle cx={px(evA.x)} cy={py(evA.ct)} r={4.5} fill="var(--bad)" />
              <text x={px(evA.x)} y={py(evA.ct) - 8} fontSize={11} fontWeight={800} fill="var(--bad)" textAnchor="middle">
                A
              </text>
              <circle cx={px(evB.x)} cy={py(evB.ct)} r={4.5} fill="var(--bad)" />
              <text x={px(evB.x)} y={py(evB.ct) - 8} fontSize={11} fontWeight={800} fill="var(--bad)" textAnchor="middle">
                B
              </text>
            </svg>
          </div>

          {/* Readouts + Muon Survival Bar */}
          <div className="space-y-3 min-w-0">
            <div className="grid grid-cols-2 gap-2">
              <Readout label="Lorentz factor γ" value={gamma.toFixed(2)} tone="brand" />
              <Readout label="Axis tilt θ = tan⁻¹(v/c)" value={`${thetaDeg.toFixed(1)}°`} tone="ink" />
              <Readout label="Dilated τ (τ₀ = 2.20 μs)" value={`${dilatedTauUs.toFixed(2)} μs`} tone="good" />
              <Readout label="Contracted L (L₀ = 100 m)" value={`${contractedShip.toFixed(1)} m`} tone="bad" />
            </div>

            {/* Muon survival comparison over 2.0 km Mount Washington drop */}
            <div className="rounded-xl border border-line bg-surface p-3 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-ink-2">
                <span>Muon survival (2.0 km drop)</span>
                <span className="tabular-nums text-ink">L′ = {contractedDropKm.toFixed(2)} km</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div>
                  <div className="flex justify-between font-bold">
                    <span className="text-good">Relativistic (with γ)</span>
                    <span className="tabular-nums text-good">{relSurvivalPct.toFixed(1)}%</span>
                  </div>
                  <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-good transition-all duration-150"
                      style={{ width: `${Math.min(100, relSurvivalPct)}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-ink-2">
                    <span>Classical (no dilation)</span>
                    <span className="tabular-nums">{classSurvivalPct.toFixed(1)}%</span>
                  </div>
                  <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-ink-2/50 transition-all duration-150"
                      style={{ width: `${Math.min(100, classSurvivalPct)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Rolling Race Lab (Hoop vs Solid Cylinder vs Solid Sphere)
// ============================================================================

type BodyKey = "sphere" | "cylinder" | "hoop";

interface RollingBody {
  key: BodyKey;
  label: string;
  formula: string;
  c: number;
  color: string;
}

const BODIES: readonly RollingBody[] = [
  { key: "sphere", label: "Solid sphere", formula: "I = (2/5)mR^2", c: 0.4, color: "var(--good)" },
  { key: "cylinder", label: "Solid cylinder", formula: "I = (1/2)mR^2", c: 0.5, color: "var(--brand)" },
  { key: "hoop", label: "Thin hoop", formula: "I = mR^2", c: 1.0, color: "var(--bad)" },
];

function RollingRaceLab() {
  const [height, setHeight] = useState(2.0); // vertical height h in metres
  const [angleDeg, setAngleDeg] = useState(25); // incline angle in degrees
  const [mass, setMass] = useState(2.0); // mass in kg (shows mass cancels for v!)
  const [focus, setFocus] = useState<BodyKey>("sphere");
  const [progress, setProgress] = useState(0); // normalized 0..1 of slowest finisher's time
  const [running, setRunning] = useState(false);

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const g = 9.81;
  const sinTheta = Math.sin((angleDeg * Math.PI) / 180);
  const rampLen = height / sinTheta;

  const stats = BODIES.map((b) => {
    const a = (g * sinTheta) / (1 + b.c);
    const vFinal = Math.sqrt((2 * g * height) / (1 + b.c));
    const tFinish = Math.sqrt((2 * rampLen) / a);
    const transPct = (1 / (1 + b.c)) * 100;
    const rotPct = (b.c / (1 + b.c)) * 100;
    const totalJ = mass * g * height;
    const transJ = totalJ / (1 + b.c);
    const rotJ = totalJ - transJ;
    return { ...b, a, vFinal, tFinish, transPct, rotPct, totalJ, transJ, rotJ };
  });

  const tMax = Math.max(...stats.map((s) => s.tFinish));
  const simTime = progress * tMax;
  const selected = stats.find((s) => s.key === focus) ?? stats[0];

  useEffect(() => {
    if (!running) return;
    const durationMs = 2400; // visual animation length
    startRef.current = performance.now() - progress * durationMs;
    const step = (now: number) => {
      const p = Math.min(1, (now - startRef.current) / durationMs);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setRunning(false);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const handleRun = () => {
    if (progress >= 0.99) setProgress(0);
    setRunning(true);
  };
  const handleReset = () => {
    setRunning(false);
    setProgress(0);
  };

  // Ramp SVG geometry (viewBox 0 0 380 185)
  const topX = 48;
  const topY = 34;
  const botX = 342;
  const botY = 158;
  const dx = botX - topX;
  const dy = botY - topY;
  const rampAngleRad = Math.atan2(dy, dx);
  const nx = Math.sin(rampAngleRad); // unit normal pointing up-right off ramp
  const ny = -Math.cos(rampAngleRad);
  const radiusPx = 13;

  return (
    <WidgetFrame
      title="Rolling Race Lab: Hoop vs Cylinder vs Sphere"
      tryThis={[
        "Click **Run race** and watch the solid sphere pull ahead of the solid cylinder and thin hoop.",
        "Slide **Mass {{m}}** from {{1 kg}} to {{10 kg}}: notice total energy changes, yet **every arrival speed {{v}} stays completely unchanged**!",
        "Switch the focus tab to compare each body's exact translational vs rotational kinetic energy split.",
      ]}
      caption={
        <span>
          <strong>{selected.label}</strong> (<M>{selected.formula}</M>): puts{" "}
          <strong>{selected.transPct.toFixed(1)}%</strong> of <M>{"mgh"}</M> into forward motion and{" "}
          <strong>{selected.rotPct.toFixed(1)}%</strong> into spin, reaching{" "}
          <strong>{selected.vFinal.toFixed(2)} m s⁻¹</strong> in <strong>{selected.tFinish.toFixed(2)} s</strong> (independent of mass!).
        </span>
      }
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label={<span>Ramp height <M>{"h"}</M></span>}
            value={height}
            min={0.5}
            max={5.0}
            step={0.1}
            onChange={(v) => {
              setRunning(false);
              setHeight(v);
            }}
            format={(v) => `${v.toFixed(1)} m`}
          />
          <Slider
            label={<span>Incline angle <M>{"θ"}</M></span>}
            value={angleDeg}
            min={10}
            max={45}
            step={1}
            onChange={(v) => {
              setRunning(false);
              setAngleDeg(v);
            }}
            format={(v) => `${v}°`}
          />
          <Slider
            label={<span>Body mass <M>{"m"}</M></span>}
            value={mass}
            min={1.0}
            max={10.0}
            step={0.5}
            onChange={setMass}
            format={(v) => `${v.toFixed(1)} kg`}
          />
        </div>

        {/* Race Track SVG + Play controls */}
        <div className="rounded-xl border border-line bg-surface-2/60 p-3 space-y-2.5">
          <svg
            viewBox="0 0 380 185"
            className="mx-auto block w-full max-w-[440px]"
            role="img"
            aria-label="Interactive incline race comparing a solid sphere, solid cylinder, and thin hoop rolling without slipping"
          >
            {/* Incline surface */}
            <polygon
              points={`${topX},${topY} ${botX},${botY} ${topX},${botY}`}
              fill="var(--surface)"
              stroke="var(--line)"
              strokeWidth={2}
            />
            <line x1={topX} y1={topY} x2={botX} y2={botY} stroke="var(--ink-2)" strokeWidth={2.5} />
            {/* Height label */}
            <line x1={topX - 16} y1={topY} x2={topX - 16} y2={botY} stroke="var(--good)" strokeWidth={1.6} />
            <text x={topX - 21} y={(topY + botY) / 2 + 4} fontSize={10.5} fontWeight={700} fill="var(--good)" textAnchor="end">
              {height.toFixed(1)}m
            </text>
            {/* Angle label */}
            <text x={botX - 44} y={botY - 6} fontSize={10} fontWeight={700} className="fill-ink-2">
              {angleDeg}°
            </text>

            {/* Three rolling bodies slightly staggered perpendicular to surface for visibility */}
            {stats.map((b, idx) => {
              const frac = Math.min(1, (0.5 * b.a * simTime * simTime) / rampLen);
              const laneOffset = (idx - 1) * 5; // subtle visual layering
              const cx = topX + frac * dx + nx * (radiusPx + 2 + laneOffset * 0.5);
              const cy = topY + frac * dy + ny * (radiusPx + 2 + laneOffset * 0.5);
              const spinAngle = frac * 14; // radians turned visually
              const spokeX = cx + Math.cos(spinAngle) * (radiusPx - 2);
              const spokeY = cy + Math.sin(spinAngle) * (radiusPx - 2);
              const isFocus = b.key === focus;
              return (
                <g key={b.key} opacity={isFocus ? 1 : 0.78}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={radiusPx}
                    fill={b.key === "hoop" ? "none" : b.color}
                    fillOpacity={b.key === "sphere" ? 0.35 : 0.22}
                    stroke={b.color}
                    strokeWidth={b.key === "hoop" ? 4 : isFocus ? 2.8 : 2}
                  />
                  <line x1={cx} y1={cy} x2={spokeX} y2={spokeY} stroke={b.color} strokeWidth={1.8} />
                  <circle cx={cx} cy={cy} r={2} fill={b.color} />
                </g>
              );
            })}

            {/* Compact legend */}
            <g fontSize={10} fontWeight={700}>
              <circle cx={215} cy={22} r={5} fill="var(--good)" fillOpacity={0.35} stroke="var(--good)" strokeWidth={2} />
              <text x={225} y={25} fill="var(--good)">1st Sphere</text>
              <circle cx={215} cy={38} r={5} fill="var(--brand)" fillOpacity={0.25} stroke="var(--brand)" strokeWidth={2} />
              <text x={225} y={41} fill="var(--brand)">2nd Cylinder</text>
              <circle cx={215} cy={54} r={5} fill="none" stroke="var(--bad)" strokeWidth={2.5} />
              <text x={225} y={57} fill="var(--bad)">3rd Hoop</text>
            </g>
          </svg>

          <div className="flex flex-wrap items-center gap-2">
            <button type="button" className="btn btn-primary btn-sm" onClick={handleRun} disabled={running}>
              {running ? "Rolling…" : progress >= 0.99 ? "Replay race" : "Run race"}
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
              Reset
            </button>
            <div className="flex-1 min-w-[140px]">
              <Slider
                label="Time scrub"
                value={progress}
                min={0}
                max={1}
                step={0.01}
                onChange={(v) => {
                  setRunning(false);
                  setProgress(v);
                }}
                format={(p) => `${(p * tMax).toFixed(2)} s`}
              />
            </div>
          </div>
        </div>

        {/* Energy Partition Bars for All Three */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Inspect body</span>
            <Segmented
              label="Choose rolling body"
              value={focus}
              onChange={setFocus}
              options={BODIES.map((b) => ({ value: b.key, label: b.label }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Readout label="Arrival speed v" value={`${selected.vFinal.toFixed(2)} m s⁻¹`} tone="brand" />
            <Readout label="Acceleration a" value={`${selected.a.toFixed(2)} m s⁻²`} tone="ink" />
            <Readout label="Trans. KE (½mv²)" value={`${selected.transJ.toFixed(1)} J`} tone="good" />
            <Readout label="Rot. KE (½Iω²)" value={`${selected.rotJ.toFixed(1)} J`} tone="bad" />
          </div>

          <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-bold text-ink-2">
              Translational vs Rotational Energy Split (Total <M>{"mgh"}</M> = {(mass * g * height).toFixed(1)} J)
            </div>
            {stats.map((s) => (
              <div key={s.key} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className={s.key === focus ? "text-brand" : "text-ink"}>
                    {s.label} ({s.vFinal.toFixed(2)} m s⁻¹)
                  </span>
                  <span className="tabular-nums text-ink-2">
                    {s.transPct.toFixed(1)}% trans · {s.rotPct.toFixed(1)}% rot
                  </span>
                </div>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full bg-brand" style={{ width: `${s.transPct}%` }} />
                  <div className="h-full bg-accent" style={{ width: `${s.rotPct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "minkowski-lorentz-explorer",
    title: "Minkowski Spacetime & Lorentz Explorer",
    blurb: "Slide v/c from 0 to 0.95 to tilt the ct' and x' axes, test relativity of simultaneity, and compare relativistic vs classical muon survival.",
    Component: MinkowskiLorentzExplorer,
  },
  {
    id: "rolling-race-lab",
    title: "Rolling Race Lab",
    blurb: "Race a solid sphere, solid cylinder, and thin hoop down an incline and compare their translational vs rotational kinetic energy splits.",
    Component: RollingRaceLab,
  },
];
