"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

const G = 9.81;

// =============================================================================
// WIDGET 1: 2D PROJECTILE MOTION SIMULATOR
// =============================================================================
function ProjectileSimulator() {
  const [speed, setSpeed] = useState(24);
  const [angle, setAngle] = useState(40);
  const [height, setHeight] = useState(0);
  const [frac, setFrac] = useState(0.5);
  const [showDrag, setShowDrag] = useState<"off" | "on">("off");

  const rad = (angle * Math.PI) / 180;
  const ux = speed * Math.cos(rad);
  const uy = speed * Math.sin(rad);

  const flightTime = (uy + Math.sqrt(uy * uy + 2 * G * height)) / G;
  const tPeak = uy > 0 ? uy / G : 0;
  const maxHeight = height + (uy * uy) / (2 * G);
  const range = ux * flightTime;

  // Current scrubbed instant
  const tNow = frac * flightTime;
  const xNow = ux * tNow;
  const yNow = Math.max(0, height + uy * tNow - 0.5 * G * tNow * tNow);
  const vxNow = ux;
  const vyNow = uy - G * tNow;
  const vNow = Math.hypot(vxNow, vyNow);

  // Dynamic coordinate bounds (keep aspect clean & readable with margin)
  const W = 480;
  const H = 260;
  const padL = 42;
  const padR = 24;
  const padT = 26;
  const padB = 34;

  const xMax = Math.max(20, Math.ceil((Math.max(range, 10) * 1.15) / 10) * 10);
  const yMax = Math.max(15, Math.ceil((Math.max(maxHeight, height + 5) * 1.25) / 5) * 5);

  const sx = (W - padL - padR) / xMax;
  const sy = (H - padT - padB) / yMax;
  const px = (x: number) => padL + x * sx;
  const py = (y: number) => H - padB - y * sy;

  // Build ideal parabolic path
  const steps = 64;
  const idealPts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const ti = (i / steps) * flightTime;
    const xi = ux * ti;
    const yi = Math.max(0, height + uy * ti - 0.5 * G * ti * ti);
    idealPts.push(`${i === 0 ? "M" : "L"} ${px(xi).toFixed(1)} ${py(yi).toFixed(1)}`);
  }
  const idealPath = idealPts.join(" ");

  // Qualitative air-resistance path (linear drag numerical Euler preview)
  let dragPath = "";
  if (showDrag === "on") {
    const kDrag = 0.032; // illustrative drag coefficient per unit mass
    const dt = Math.max(0.015, flightTime / 140);
    let dx = 0;
    let dy = height;
    let dvx = ux;
    let dvy = uy;
    const dPts: string[] = [`M ${px(0).toFixed(1)} ${py(height).toFixed(1)}`];
    for (let i = 0; i < 400 && dy >= 0; i++) {
      const spd = Math.hypot(dvx, dvy);
      const ax = -kDrag * spd * dvx * 0.15;
      const ay = -G - kDrag * spd * dvy * 0.15;
      dvx += ax * dt;
      dvy += ay * dt;
      dx += dvx * dt;
      dy += dvy * dt;
      const yClamped = Math.max(0, dy);
      if (dx <= xMax) dPts.push(`L ${px(dx).toFixed(1)} ${py(yClamped).toFixed(1)}`);
      if (dy <= 0) break;
    }
    dragPath = dPts.join(" ");
  }

  // Velocity vector pixel scaling at scrubbed point
  const vecScale = 44 / Math.max(speed, 15);
  const bx = px(xNow);
  const by = py(yNow);
  const vxEnd = Math.min(W - 8, Math.max(8, bx + vxNow * vecScale));
  const vyEnd = Math.min(H - 8, Math.max(8, by - vyNow * vecScale));

  const xPeakPx = px(ux * tPeak);
  const yPeakPx = py(maxHeight);

  // Clean axis ticks (4 divisions)
  const xTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(xMax * f));
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(yMax * f));

  return (
    <WidgetFrame
      title="2D Projectile Motion Simulator"
      tryThis={[
        "Set launch height {{h = 0}} m and compare range at {{θ = 30°}} vs {{θ = 60°}} — then find the angle giving maximum range.",
        "Raise cliff height to {{h = 25}} m: is the maximum-range angle still 45°, or strictly less than 45°?",
        "Drag the time slider across the peak: watch {{v_x}} stay frozen while {{v_y}} crosses zero and reverses.",
      ]}
      caption={
        <>
          At <strong className="tabular-nums">t = {tNow.toFixed(2)} s</strong>, the horizontal velocity stays constant at{" "}
          <strong className="tabular-nums">v_x = {vxNow.toFixed(1)} m s⁻¹</strong> (<M>a_x = 0</M>), while vertical
          velocity is <strong className="tabular-nums">v_y = {vyNow.toFixed(1)} m s⁻¹</strong> under constant{" "}
          <M>a_y = -9.81</M> m s⁻².{" "}
          {Math.abs(vyNow) < 0.8 && uy > 0
            ? "Right near the peak: vertical velocity is zero, yet total speed is still u cos θ!"
            : height > 0
              ? `Launching from h = ${height} m adds extra fall time, shifting the optimal range angle below 45°.`
              : `On level ground, range follows R = u² sin(2θ) / g and peaks at θ = 45°.`}
        </>
      }
    >
      <div className="space-y-4">
        {/* Live SVG Canvas */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Projectile trajectory for speed ${speed} metres per second, angle ${angle} degrees, height ${height} metres`}
            className="mx-auto block h-auto w-full max-w-[540px]"
          >
            <defs>
              <marker id="proj-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
              </marker>
              <marker id="proj-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
              </marker>
              <marker id="proj-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
              </marker>
            </defs>

            {/* Gridlines */}
            {xTicks.map((xt) => (
              <g key={`x${xt}`}>
                <line x1={px(xt)} x2={px(xt)} y1={padT} y2={H - padB} className="stroke-line" strokeWidth={1} />
                <text x={px(xt)} y={H - padB + 15} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {xt}
                </text>
              </g>
            ))}
            {yTicks.map((yt) => (
              <g key={`y${yt}`}>
                <line x1={padL} x2={W - padR} y1={py(yt)} y2={py(yt)} className="stroke-line" strokeWidth={1} />
                <text x={padL - 7} y={py(yt) + 3.5} fontSize={10} textAnchor="end" className="fill-ink-2">
                  {yt}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} className="stroke-ink-2" strokeWidth={1.8} />
            <line x1={padL} x2={padL} y1={padT} y2={H - padB} className="stroke-ink-2" strokeWidth={1.8} />
            <text x={W - padR} y={H - 5} fontSize={10} fontWeight={700} textAnchor="end" className="fill-ink-2">
              x / m
            </text>
            <text x={padL + 4} y={16} fontSize={10} fontWeight={700} className="fill-ink-2">
              y / m
            </text>

            {/* Cliff pedestal when h > 0 */}
            {height > 0 ? (
              <rect
                x={padL - 16}
                y={py(height)}
                width={16}
                height={H - padB - py(height)}
                fill="#64748b"
                fillOpacity={0.35}
                stroke="#64748b"
                strokeWidth={1.2}
              />
            ) : null}

            {/* Peak height guide */}
            {uy > 0 ? (
              <g>
                <line
                  x1={xPeakPx}
                  x2={xPeakPx}
                  y1={yPeakPx}
                  y2={H - padB}
                  stroke="#94a3b8"
                  strokeWidth={1.2}
                  strokeDasharray="4 3"
                />
                <circle cx={xPeakPx} cy={yPeakPx} r={3.5} fill="#64748b" />
                <text
                  x={Math.min(W - 55, Math.max(padL + 36, xPeakPx))}
                  y={Math.max(16, yPeakPx - 8)}
                  fontSize={10}
                  fontWeight={700}
                  textAnchor="middle"
                  className="fill-ink-2"
                >
                  H = {maxHeight.toFixed(1)} m
                </text>
              </g>
            ) : null}

            {/* Air resistance reference path */}
            {dragPath ? (
              <path d={dragPath} fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 4" />
            ) : null}

            {/* Ideal trajectory */}
            <path d={idealPath} fill="none" stroke="#2563eb" strokeWidth={2.6} />

            {/* Landing marker */}
            <circle cx={px(range)} cy={py(0)} r={4} fill="#2563eb" />

            {/* Live velocity vector components at scrubbed time */}
            {Math.abs(vxNow) > 0.2 ? (
              <line x1={bx} y1={by} x2={vxEnd} y2={by} stroke="#16a34a" strokeWidth={2.2} markerEnd="url(#proj-green)" />
            ) : null}
            {Math.abs(vyNow) > 0.2 ? (
              <line x1={bx} y1={by} x2={bx} y2={vyEnd} stroke="#dc2626" strokeWidth={2.2} markerEnd="url(#proj-red)" />
            ) : null}
            {vNow > 0.2 ? (
              <line
                x1={bx}
                y1={by}
                x2={vxEnd}
                y2={vyEnd}
                stroke="#2563eb"
                strokeWidth={2.4}
                markerEnd="url(#proj-blue)"
              />
            ) : null}

            {/* Projectile dot */}
            <circle cx={bx} cy={by} r={5.5} fill="#2563eb" stroke="#ffffff" strokeWidth={1.8} />

            {/* Compact legend */}
            <g transform={`translate(${W - 142}, 10)`}>
              <line x1={0} y1={6} x2={14} y2={6} stroke="#16a34a" strokeWidth={2.2} />
              <text x={18} y={9.5} fontSize={9.5} fontWeight={700} className="fill-ink-2">
                v_x
              </text>
              <line x1={40} y1={6} x2={54} y2={6} stroke="#dc2626" strokeWidth={2.2} />
              <text x={58} y={9.5} fontSize={9.5} fontWeight={700} className="fill-ink-2">
                v_y
              </text>
              <line x1={80} y1={6} x2={94} y2={6} stroke="#2563eb" strokeWidth={2.4} />
              <text x={98} y={9.5} fontSize={9.5} fontWeight={700} className="fill-ink-2">
                v
              </text>
            </g>
          </svg>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Launch speed u" value={speed} min={5} max={40} step={1} onChange={setSpeed} format={(v) => `${v} m s⁻¹`} />
          <Slider label="Launch angle θ" value={angle} min={0} max={85} step={1} onChange={setAngle} format={(v) => `${v}°`} />
          <Slider label="Launch height h" value={height} min={0} max={40} step={1} onChange={setHeight} format={(v) => `${v} m`} />
          <Slider
            label="Time scrub t"
            value={Math.round(frac * 100)}
            min={0}
            max={100}
            step={1}
            onChange={(v) => setFrac(v / 100)}
            format={() => `${tNow.toFixed(2)} s`}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Air drag comparison (qualitative)</span>
          <Segmented
            label="Air drag overlay"
            value={showDrag}
            onChange={setShowDrag}
            options={[
              { value: "off", label: "Vacuum only" },
              { value: "on", label: "Show drag curve" },
            ]}
          />
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Flight time T" value={`${flightTime.toFixed(2)} s`} tone="ink" />
          <Readout label="Peak height H" value={`${maxHeight.toFixed(1)} m`} tone="brand" />
          <Readout label="Range R" value={`${range.toFixed(1)} m`} tone="good" />
          <Readout label="Speed at t" value={`${vNow.toFixed(1)} m s⁻¹`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: INCLINED PLANE & FRICTION LAB
// =============================================================================
function InclinedPlaneLab() {
  const [angle, setAngle] = useState(25);
  const [mass, setMass] = useState(5);
  const [muS, setMuS] = useState(0.5);
  const [muD, setMuD] = useState(0.35);

  const handleMuSChange = (next: number) => {
    setMuS(next);
    if (muD > next) setMuD(next);
  };
  const handleMuDChange = (next: number) => {
    setMuD(Math.min(next, muS));
  };

  const rad = (angle * Math.PI) / 180;
  const weight = mass * G;
  const fParallel = weight * Math.sin(rad);
  const fNormal = weight * Math.cos(rad);
  const fStaticMax = muS * fNormal;
  const fDynamic = muD * fNormal;

  const isSliding = angle > 0 && fParallel > fStaticMax + 1e-6;
  const actualFriction = isSliding ? fDynamic : fParallel;
  const fNet = isSliding ? Math.max(0, fParallel - fDynamic) : 0;
  const accel = fNet / mass;
  const criticalAngle = (Math.atan(muS) * 180) / Math.PI;

  // Dynamic SVG geometry for ramp at exact angle θ
  const W = 480;
  const H = 265;
  const xBaseLeft = 72;
  const yBase = 226;
  const rampLen = 290;
  const xTop = xBaseLeft + rampLen * Math.cos(rad);
  const yTop = yBase - rampLen * Math.sin(rad);

  // Midpoint along ramp surface for block base
  const midFrac = 0.52;
  const surfX = xBaseLeft + rampLen * midFrac * Math.cos(rad);
  const surfY = yBase - rampLen * midFrac * Math.sin(rad);

  // Unit vectors in SVG coordinates (y downwards!)
  // Up-slope: (+cos, -sin); Down-slope: (-cos, +sin)
  // Outward normal (away from slope): (-sin, -cos); Into slope: (+sin, +cos)
  const uxUp = Math.cos(rad);
  const uyUp = -Math.sin(rad);
  const nxOut = -Math.sin(rad);
  const nyOut = -Math.cos(rad);

  const blockHalfH = 18;
  const cmX = surfX + nxOut * blockHalfH;
  const cmY = surfY + nyOut * blockHalfH;

  // Scale arrows relative to weight so visual proportions stay readable across masses 1..20 kg
  const arrowRef = 76;
  const scaleF = (f: number) => (weight > 0 ? Math.min(92, (f / weight) * arrowRef) : 0);

  const lenW = arrowRef;
  const lenN = scaleF(fNormal);
  const lenPar = scaleF(fParallel);
  const lenPerp = scaleF(fNormal);
  const lenFric = scaleF(actualFriction);

  // Angle arc at base
  const arcR = 46;
  const arcEndX = xBaseLeft + arcR * Math.cos(rad);
  const arcEndY = yBase - arcR * Math.sin(rad);

  return (
    <WidgetFrame
      title="Inclined Plane & Friction Lab"
      tryThis={[
        "Keep {{μ_s = 0.50}} and slowly increase ramp angle {{θ}} until the block just breaks free — verify that {{θ_c = arctan(μ_s) ≈ 26.6°}}.",
        "Once at the slip threshold, double the mass {{m}} from 5 kg to 10 kg: does the critical angle change?",
        "Notice how {{F_f}} jumps DOWN from {{μ_s F_N}} to {{μ_d F_N}} the moment sliding starts, causing an instant positive acceleration!",
      ]}
      caption={
        isSliding ? (
          <>
            <strong className="text-bad">Sliding down the ramp!</strong> Downhill pull{" "}
            <strong className="tabular-nums">mg sin θ = {fParallel.toFixed(1)} N</strong> exceeds maximum static
            friction <strong className="tabular-nums">μ_s F_N = {fStaticMax.toFixed(1)} N</strong>, so dynamic friction{" "}
            <strong className="tabular-nums">F_f = μ_d F_N = {fDynamic.toFixed(1)} N</strong> takes over, leaving net
            force <strong className="tabular-nums">{fNet.toFixed(1)} N</strong> and acceleration{" "}
            <strong className="tabular-nums">a = {accel.toFixed(2)} m s⁻²</strong>.
          </>
        ) : (
          <>
            <strong className="text-good">At rest (static equilibrium).</strong> Downhill pull{" "}
            <strong className="tabular-nums">mg sin θ = {fParallel.toFixed(1)} N</strong> is within maximum static
            friction <strong className="tabular-nums">μ_s F_N = {fStaticMax.toFixed(1)} N</strong>, so static friction
            self-adjusts to exactly <strong className="tabular-nums">F_f = {actualFriction.toFixed(1)} N</strong> (slip
            threshold: <strong className="tabular-nums">θ_c = {criticalAngle.toFixed(1)}°</strong>).
          </>
        )
      }
    >
      <div className="space-y-4">
        {/* Status pill */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${
              isSliding ? "bg-bad-soft text-bad" : "bg-good-soft text-good"
            }`}
          >
            {isSliding ? `Sliding · a = ${accel.toFixed(2)} m s⁻²` : "At Rest · ΣF = 0"}
          </span>
          <span className="text-xs font-bold text-ink-2 tabular-nums">
            Slip threshold θ_c = arctan({muS.toFixed(2)}) = {criticalAngle.toFixed(1)}°
          </span>
        </div>

        {/* Live SVG Ramp & FBD */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Free-body diagram on a ${angle} degree inclined plane for a ${mass} kilogram block`}
            className="mx-auto block h-auto w-full max-w-[540px]"
          >
            <defs>
              <marker id="inc-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
              </marker>
              <marker id="inc-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
              </marker>
              <marker id="inc-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
              </marker>
              <marker id="inc-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
              </marker>
            </defs>

            {/* Ground line */}
            <line x1={32} x2={448} y1={yBase} y2={yBase} className="stroke-ink-2" strokeWidth={2} />

            {/* Ramp wedge */}
            {angle > 0 ? (
              <polygon
                points={`${xBaseLeft},${yBase} ${xTop.toFixed(1)},${yBase} ${xTop.toFixed(1)},${yTop.toFixed(1)}`}
                fill="#94a3b8"
                fillOpacity={0.22}
                className="stroke-ink-2"
                strokeWidth={1.8}
              />
            ) : (
              <line x1={xBaseLeft} x2={xTop} y1={yBase} y2={yBase} className="stroke-ink" strokeWidth={3} />
            )}

            {/* Angle arc & label */}
            {angle >= 4 ? (
              <g>
                <path
                  d={`M ${xBaseLeft + arcR} ${yBase} A ${arcR} ${arcR} 0 0 0 ${arcEndX.toFixed(1)} ${arcEndY.toFixed(1)}`}
                  fill="none"
                  className="stroke-ink"
                  strokeWidth={1.4}
                />
                <text
                  x={xBaseLeft + arcR + 12}
                  y={yBase - Math.min(20, angle * 0.45)}
                  fontSize={11}
                  fontWeight={700}
                  className="fill-ink"
                >
                  {angle}°
                </text>
              </g>
            ) : null}

            {/* Block */}
            <g transform={`translate(${cmX.toFixed(1)}, ${cmY.toFixed(1)}) rotate(${-angle})`}>
              <rect
                x={-28}
                y={-blockHalfH}
                width={56}
                height={blockHalfH * 2}
                rx={4}
                fill={isSliding ? "#ffedd5" : "#dbeafe"}
                stroke={isSliding ? "#c2410c" : "#2563eb"}
                strokeWidth={2}
              />
              <text x={0} y={4.5} fontSize={11.5} fontWeight={800} textAnchor="middle" fill={isSliding ? "#9a3412" : "#1e3a8a"}>
                {mass} kg
              </text>
            </g>

            {/* Weight components (dashed blue) */}
            {lenPerp > 4 ? (
              <line
                x1={cmX}
                y1={cmY}
                x2={cmX - nxOut * lenPerp}
                y2={cmY - nyOut * lenPerp}
                stroke="#2563eb"
                strokeWidth={1.8}
                strokeDasharray="4 3"
                markerEnd="url(#inc-blue)"
              />
            ) : null}
            {lenPar > 4 ? (
              <line
                x1={cmX}
                y1={cmY}
                x2={cmX - uxUp * lenPar}
                y2={cmY - uyUp * lenPar}
                stroke="#2563eb"
                strokeWidth={1.8}
                strokeDasharray="4 3"
                markerEnd="url(#inc-blue)"
              />
            ) : null}

            {/* Weight mg straight down (red) */}
            <line
              x1={cmX}
              y1={cmY}
              x2={cmX}
              y2={Math.min(H - 6, cmY + lenW)}
              stroke="#dc2626"
              strokeWidth={2.6}
              markerEnd="url(#inc-red)"
            />
            <text x={cmX + 7} y={Math.min(H - 8, cmY + lenW - 2)} fontSize={11} fontWeight={800} fill="#dc2626">
              mg
            </text>

            {/* Normal force F_N (green) */}
            {lenN > 4 ? (
              <g>
                <line
                  x1={cmX}
                  y1={cmY}
                  x2={cmX + nxOut * lenN}
                  y2={cmY + nyOut * lenN}
                  stroke="#16a34a"
                  strokeWidth={2.6}
                  markerEnd="url(#inc-green)"
                />
                <text
                  x={cmX + nxOut * (lenN + 14)}
                  y={Math.max(14, cmY + nyOut * (lenN + 14) + 3)}
                  fontSize={11}
                  fontWeight={800}
                  textAnchor="middle"
                  fill="#16a34a"
                >
                  F_N
                </text>
              </g>
            ) : null}

            {/* Friction F_f up the slope (amber) */}
            {lenFric > 4 ? (
              <g>
                <line
                  x1={cmX}
                  y1={cmY}
                  x2={cmX + uxUp * lenFric}
                  y2={cmY + uyUp * lenFric}
                  stroke="#d97706"
                  strokeWidth={2.6}
                  markerEnd="url(#inc-amber)"
                />
                <text
                  x={cmX + uxUp * (lenFric + 15)}
                  y={Math.max(14, cmY + uyUp * (lenFric + 15) + 3)}
                  fontSize={11}
                  fontWeight={800}
                  textAnchor="middle"
                  fill="#d97706"
                >
                  F_f
                </text>
              </g>
            ) : null}

            {/* Centre-of-mass dot */}
            <circle cx={cmX} cy={cmY} r={3.2} className="fill-ink" />

            {/* Legend */}
            <g transform="translate(12, 14)">
              <text x={0} y={0} fontSize={10} fontWeight={700} fill="#dc2626">
                ● mg (weight)
              </text>
              <text x={0} y={14} fontSize={10} fontWeight={700} fill="#16a34a">
                ● F_N (normal)
              </text>
              <text x={0} y={28} fontSize={10} fontWeight={700} fill="#d97706">
                ● F_f (friction)
              </text>
              <text x={0} y={42} fontSize={10} fontWeight={700} fill="#2563eb">
                ┄ mg sin θ, mg cos θ
              </text>
            </g>
          </svg>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Ramp angle θ" value={angle} min={0} max={60} step={1} onChange={setAngle} format={(v) => `${v}°`} />
          <Slider label="Block mass m" value={mass} min={1} max={20} step={1} onChange={setMass} format={(v) => `${v} kg`} />
          <Slider
            label="Static friction μ_s"
            value={muS}
            min={0}
            max={1}
            step={0.05}
            onChange={handleMuSChange}
            format={(v) => v.toFixed(2)}
          />
          <Slider
            label="Dynamic friction μ_d"
            value={muD}
            min={0}
            max={1}
            step={0.05}
            onChange={handleMuDChange}
            format={(v) => v.toFixed(2)}
          />
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="mg sin θ" value={`${fParallel.toFixed(1)} N`} tone="brand" />
          <Readout label="F_N = mg cos θ" value={`${fNormal.toFixed(1)} N`} tone="ink" />
          <Readout label={isSliding ? "Dynamic F_f" : "Static F_f"} value={`${actualFriction.toFixed(1)} N`} tone="ink" />
          <Readout
            label="Net accel a"
            value={`${accel.toFixed(2)} m s⁻²`}
            tone={isSliding ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "projectile-simulator",
    title: "2D Projectile Motion Simulator",
    blurb: "Vary launch speed, angle and cliff height to see horizontal/vertical velocity vectors, peak height, range and air drag.",
    Component: ProjectileSimulator,
  },
  {
    id: "inclined-plane-lab",
    title: "Inclined Plane & Friction Lab",
    blurb: "Tilt the ramp and tune static vs dynamic friction to test F_f ≤ μ_s F_N, critical slip angle, and sliding acceleration.",
    Component: InclinedPlaneLab,
  },
];
