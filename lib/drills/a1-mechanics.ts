import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const G = 9.81;

function safeTrap(traps: Trap[], ans: number, tol: number, wrongVal: number, feedback: string) {
  const w = clean(wrongVal);
  if (!Number.isFinite(w)) return;
  if (Math.abs(w - ans) <= Math.max(tol * 2.5, 0.05)) return;
  if (traps.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - w) <= 0.02)) return;
  traps.push({ spec: { type: "number", value: w, tolerance: Math.max(tol, 0.02) }, feedback });
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: SUVAT & 1D / 2D KINEMATICS (Level 1 — SL Core)
  // ===========================================================================
  {
    id: "a1-mechanics.suvat",
    topicId: "a1-mechanics",
    title: "SUVAT & Kinematics Fluency",
    level: 1,
    ibLevel: "SL",
    guideRef: "kinematics-projectiles",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // v = u + at
          const u = rng.int(2, 22);
          const a = rng.pick([1, 1.5, 2, 2.5, 3, 4, 5, 6]);
          const t = rng.int(2, 10);
          const v = clean(u + a * t);
          const traps: Trap[] = [];
          safeTrap(traps, v, 0.05, clean(a * t), "Remember to add the initial velocity u to at.");
          safeTrap(traps, v, 0.05, clean(u - a * t), "The object is accelerating positively, so add at rather than subtracting.");
          return {
            prompt: `A trolley moving at **${num(u)} m s⁻¹** accelerates uniformly at **${num(a)} m s⁻²** for **${num(t)} s**. Calculate its final velocity in m s⁻¹.`,
            answer: { type: "number", value: v, tolerance: 0.05, display: `${num(v)} m s⁻¹` },
            traps,
            hint: "Use the SUVAT equation without displacement: v = u + at.",
            solution: [
              `Knowns: {{u = ${u}}} m s⁻¹, {{a = ${a}}} m s⁻², {{t = ${t}}} s.`,
              `{{v = u + at = ${u} + (${a})(${t}) = ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        if (mode === 1) {
          // s = ((u + v) / 2) t
          const u = rng.int(2, 18);
          const dv = rng.int(2, 14) * 2; // even so (u+v)/2 is exact integer
          const v = u + dv;
          const t = rng.int(2, 12);
          const s = clean(((u + v) / 2) * t);
          const traps: Trap[] = [];
          safeTrap(traps, s, 0.1, clean((u + v) * t), "Divide (u + v) by 2 to get average velocity before multiplying by t.");
          safeTrap(traps, s, 0.1, clean(u * t), "That uses only the initial velocity — average u and v first.");
          return {
            prompt: `A cyclist accelerates uniformly from **${num(u)} m s⁻¹** to **${num(v)} m s⁻¹** in **${num(t)} s**. Calculate the distance covered in metres.`,
            answer: { type: "number", value: s, tolerance: 0.1, display: `${num(s)} m` },
            traps,
            hint: "Acceleration is not given, so use s = ((u + v)/2)t.",
            solution: [
              `Average velocity: {{(${u} + ${v})/2 = ${num((u + v) / 2)}}} m s⁻¹.`,
              `Displacement: {{s = ${num((u + v) / 2)} * ${t} = ${num(s)}}} m.`,
            ],
          };
        }
        // a = (v - u) / t constructed backwards for clean a
        const a = rng.pick([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5]);
        const t = rng.int(2, 10) * 2; // even so a*t is integer
        const u = rng.int(2, 20);
        const v = clean(u + a * t);
        const traps: Trap[] = [];
        safeTrap(traps, a, 0.02, roundTo(v / t, 2), "Subtract initial velocity u from final velocity v before dividing by t.");
        return {
          prompt: `A train accelerates uniformly from **${num(u)} m s⁻¹** to **${num(v)} m s⁻¹** over **${num(t)} s**. Calculate its acceleration in m s⁻².`,
          answer: { type: "number", value: a, tolerance: 0.02, display: `${num(a)} m s⁻²` },
          traps,
          hint: "Rearrange v = u + at to give a = (v − u) / t.",
          solution: [
            `Change in velocity: {{v - u = ${num(v)} - ${num(u)} = ${num(v - u)}}} m s⁻¹.`,
            `Acceleration: {{a = ${num(v - u)} / ${t} = ${num(a)}}} m s⁻².`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // s = ut + 1/2 a t^2
          const u = rng.int(3, 20);
          const a = rng.pick([1, 2, 3, 4, 5, 6]);
          const t = rng.int(2, 5) * 2; // even so 0.5*a*t^2 is exact integer
          const s = clean(u * t + 0.5 * a * t * t);
          const traps: Trap[] = [];
          safeTrap(traps, s, 0.1, clean(u * t + a * t * t), "Remember the factor of ½ in s = ut + ½at².");
          safeTrap(traps, s, 0.1, clean(0.5 * a * t * t), "Don't forget the ut term — the object did not start from rest!");
          return {
            prompt: `A glider starts at **${num(u)} m s⁻¹** and accelerates uniformly at **${num(a)} m s⁻²** for **${num(t)} s**. Calculate its displacement in metres.`,
            answer: { type: "number", value: s, tolerance: 0.1, display: `${num(s)} m` },
            traps,
            hint: "Final velocity v is unknown, so use s = ut + ½at².",
            solution: [
              `{{s = ut + (1/2)at^2 = (${u})(${t}) + (1/2)(${a})(${t})^2}}.`,
              `{{s = ${num(u * t)} + ${num(0.5 * a * t * t)} = ${num(s)}}} m.`,
            ],
          };
        }
        if (mode === 1) {
          // Braking distance s = u^2 / (2|a|)
          const aMag = rng.pick([2, 4, 5, 8]);
          const u = rng.int(4, 22) * 2; // 8..44
          const s = clean((u * u) / (2 * aMag));
          const traps: Trap[] = [];
          safeTrap(traps, s, 0.1, clean((u * u) / aMag), "Divide u² by 2|a| (not just |a|) in v² = u² + 2as.");
          safeTrap(traps, s, 0.1, clean(u / aMag), "u / |a| gives the stopping TIME in seconds, not stopping distance in metres.");
          return {
            prompt: `A car travelling at **${num(u)} m s⁻¹** brakes with a constant deceleration of **${num(aMag)} m s⁻²** until it comes to rest. Calculate its braking distance in metres.`,
            answer: { type: "number", value: s, tolerance: 0.1, display: `${num(s)} m` },
            traps,
            hint: "Use v² = u² + 2as with v = 0 and a = −deceleration.",
            solution: [
              `With {{v = 0}} and {{a = -${aMag}}} m s⁻²: {{0 = ${u}^2 - 2(${aMag})s}}.`,
              `{{s = ${u * u} / ${2 * aMag} = ${num(s)}}} m.`,
            ],
          };
        }
        // Vertical throw max height H = u^2 / (2g)
        const u = rng.int(10, 38);
        const hExact = (u * u) / (2 * G);
        const h = roundTo(hExact, 1);
        const traps: Trap[] = [];
        safeTrap(traps, h, 0.15, roundTo((u * u) / G, 1), "Remember the factor of 2 in H = u²/(2g).");
        safeTrap(traps, h, 0.15, roundTo(u / G, 1), "u/g is the time to peak — use H = u²/(2g) for maximum height.");
        return {
          prompt: `A ball is thrown vertically upwards at **${num(u)} m s⁻¹** (take {{g = 9.81}} m s⁻² and neglect air resistance). Calculate the maximum height reached in metres, to 1 decimal place.`,
          answer: { type: "number", value: h, tolerance: 0.15, display: `${num(h)} m` },
          traps,
          hint: "At the peak v = 0; rearrange 0 = u² − 2gH.",
          solution: [
            `At maximum height, {{v = 0}} and {{a = -9.81}} m s⁻².`,
            `{{H = u^2 / (2g) = ${u}^2 / (2 * 9.81) = ${u * u} / 19.62 ≈ ${num(h)}}} m.`,
          ],
        };
      }

      // TIER 3: Horizontal cliff projectile OR two-stage motion
      if (rng.bool(0.55)) {
        const ux = rng.int(6, 28);
        const h = rng.int(12, 85);
        const t = Math.sqrt((2 * h) / G);
        const x = roundTo(ux * t, 1);
        const traps: Trap[] = [];
        safeTrap(traps, x, 0.2, roundTo(ux * Math.sqrt(h / G), 1), "In h = ½gt², solve t = √(2h/g) — don't forget the factor of 2!");
        return {
          prompt: `A stone is launched horizontally at **${num(ux)} m s⁻¹** from the edge of a **${num(h)} m** vertical cliff ({{g = 9.81}} m s⁻², negligible air resistance). Calculate the horizontal distance from the base of the cliff where it lands, in metres to 1 decimal place.`,
          answer: { type: "number", value: x, tolerance: 0.2, display: `${num(x)} m` },
          traps,
          hint: "Find fall time t = √(2h/g) from vertical motion (u_y = 0), then compute x = u_x t.",
          solution: [
            `Vertically ({{u_y = 0}}): {{${h} = (1/2)(9.81)t^2}} ⇒ {{t = sqrt(${2 * h} / 9.81) ≈ ${num(roundTo(t, 3))}}} s.`,
            `Horizontally (constant velocity): {{x = ${ux} * ${num(roundTo(t, 3))} ≈ ${num(x)}}} m.`,
          ],
        };
      }
      const a = rng.pick([1.5, 2, 2.5, 3, 4]);
      const t1 = rng.pick([4, 6, 8, 10]);
      const t2 = rng.int(3, 12);
      const vTop = clean(a * t1);
      const s1 = clean(0.5 * a * t1 * t1);
      const s2 = clean(vTop * t2);
      const total = clean(s1 + s2);
      const traps: Trap[] = [];
      safeTrap(traps, total, 0.1, clean(0.5 * a * (t1 + t2) * (t1 + t2)), "The car accelerates only for the first stage, NOT the entire journey!");
      safeTrap(traps, total, 0.1, s2, "Remember to include the distance covered during the initial acceleration stage.");
      return {
        prompt: `A car starts from rest, accelerates uniformly at **${num(a)} m s⁻²** for **${num(t1)} s**, and then cruises at that constant velocity for a further **${num(t2)} s**. Calculate the total displacement covered in metres.`,
        answer: { type: "number", value: total, tolerance: 0.1, display: `${num(total)} m` },
        traps,
        hint: "Split into two stages: triangle area ½at₁² plus rectangle area (at₁)t₂.",
        solution: [
          `Stage 1: {{v = ${a} * ${t1} = ${num(vTop)}}} m s⁻¹; {{s_1 = (1/2)(${a})(${t1})^2 = ${num(s1)}}} m.`,
          `Stage 2: {{s_2 = ${num(vTop)} * ${t2} = ${num(s2)}}} m.`,
          `Total displacement: {{s = ${num(s1)} + ${num(s2)} = ${num(total)}}} m.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: MOMENTUM, IMPULSE & CIRCULAR MOTION (Level 2 — SL Core)
  // ===========================================================================
  {
    id: "a1-mechanics.momentum-impulse",
    topicId: "a1-mechanics",
    title: "Momentum, Impulse & Circular Force",
    level: 2,
    ibLevel: "SL",
    guideRef: "momentum-circular",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Impulse J = F * dt
          const f = rng.int(5, 55) * 4; // 20..220 N
          const dt = rng.pick([0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5]);
          const j = clean(f * dt);
          const traps: Trap[] = [];
          safeTrap(traps, j, 0.05, roundTo(f / dt, 1), "Impulse is F × Δt, not F / Δt.");
          return {
            prompt: `A constant horizontal force of **${num(f)} N** pushes a trolley for **${num(dt)} s**. Calculate the magnitude of the impulse delivered in N s.`,
            answer: { type: "number", value: j, tolerance: 0.05, display: `${num(j)} N s` },
            traps,
            hint: "Use J = F Δt.",
            solution: [
              `Impulse: {{J = F Δt = ${f} * ${dt} = ${num(j)}}} N s.`,
            ],
          };
        }
        // Stick-together collision with stationary target
        const m1 = rng.int(1, 6);
        const m2 = rng.int(1, 6);
        const u1 = rng.int(3, 18);
        const v = roundTo((m1 * u1) / (m1 + m2), 2);
        const traps: Trap[] = [];
        safeTrap(traps, v, 0.03, roundTo((m1 * u1) / m2, 2), "After sticking together, divide total momentum by the COMBINED mass (m₁ + m₂).");
        return {
          prompt: `A **${num(m1)} kg** glider moving at **${num(u1)} m s⁻¹** collides with and sticks to a stationary **${num(m2)} kg** glider on a frictionless air track. Calculate their common speed after impact in m s⁻¹, to 2 decimal places.`,
          answer: { type: "number", value: v, tolerance: 0.02, display: `${num(v)} m s⁻¹` },
          traps,
          hint: "Conserve linear momentum: m₁ u₁ = (m₁ + m₂) v.",
          solution: [
            `Initial momentum: {{p = ${m1} * ${u1} = ${m1 * u1}}} kg m s⁻¹.`,
            `Combined mass: {{M = ${m1} + ${m2} = ${m1 + m2}}} kg.`,
            `Common speed: {{v = ${m1 * u1} / ${m1 + m2} ≈ ${num(v)}}} m s⁻¹.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          // Wall rebound average force F = m(u + v) / dt
          const m = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6]);
          const u = rng.int(10, 28);
          const v = rng.int(4, u - 2); // distinct from u so trap m(u-v)/dt differs cleanly
          const dt = rng.pick([0.01, 0.02, 0.025, 0.04, 0.05]);
          const f = roundTo((m * (u + v)) / dt, 1);
          const traps: Trap[] = [];
          safeTrap(traps, f, 0.5, roundTo((m * (u - v)) / dt, 1), "Velocity reverses on rebound! Use Δp = m(v − (−u)) = m(v + u), not m(u − v).");
          safeTrap(traps, f, 0.5, roundTo(m * (u + v), 2), "That is the impulse Δp in N s — divide by contact time Δt to get force in newtons.");
          return {
            prompt: `A **${num(m)} kg** ball travelling at **${num(u)} m s⁻¹** hits a rigid wall perpendicularly and rebounds straight back at **${num(v)} m s⁻¹**. Contact lasts **${num(dt)} s**. Calculate the magnitude of the average force exerted by the wall on the ball in newtons, to 1 decimal place.`,
            answer: { type: "number", value: f, tolerance: 0.5, display: `${num(f)} N` },
            traps,
            hint: "Take rebound direction as positive: Δp = m(v − (−u)) = m(v + u), then F = Δp / Δt.",
            solution: [
              `Rebound reverses velocity sign: {{Δp = ${m} * (${v} - (-${u})) = ${m} * ${u + v} = ${num(clean(m * (u + v)))}}} N s.`,
              `Average force: {{F = Δp / Δt = ${num(clean(m * (u + v)))} / ${dt} = ${num(f)}}} N.`,
            ],
          };
        }
        // Triangular F-t graph final speed
        const fMax = rng.int(5, 30) * 4; // 20..120
        const dt = rng.pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1.0]);
        const m = rng.int(1, 5);
        const j = clean(0.5 * fMax * dt);
        const v = roundTo(j / m, 2);
        const traps: Trap[] = [];
        safeTrap(traps, v, 0.03, roundTo((fMax * dt) / m, 2), "The F–t graph is a TRIANGLE: area = ½ × base × height, not base × height.");
        return {
          prompt: `A triangular force–time pulse acts on a stationary **${num(m)} kg** puck on smooth ice for **${num(dt)} s**, rising linearly from 0 N to a peak of **${num(fMax)} N** and returning to 0 N. Calculate the puck's final speed in m s⁻¹, to 2 decimal places.`,
          answer: { type: "number", value: v, tolerance: 0.02, display: `${num(v)} m s⁻¹` },
          traps,
          hint: "Impulse equals the triangular area ½ F_max Δt, then v = J / m.",
          solution: [
            `Impulse (area of triangle): {{J = (1/2)(${dt})(${fMax}) = ${num(j)}}} N s.`,
            `Final speed: {{v = J / m = ${num(j)} / ${m} = ${num(v)}}} m s⁻¹.`,
          ],
        };
      }

      // TIER 3: Head-on opposing inelastic collision OR flat-curve max cornering speed
      if (rng.bool(0.5)) {
        const m1 = rng.int(2, 6);
        const m2 = rng.int(1, 5);
        const u1 = rng.int(5, 14);
        const u2 = rng.int(2, 10);
        const pNet = m1 * u1 - m2 * u2;
        if (pNet === 0) {
          // nudge u1 by +1 to avoid trivial 0 trap edge cases
          const u1Adj = u1 + 1;
          const v = roundTo((m1 * u1Adj - m2 * u2) / (m1 + m2), 2);
          return {
            prompt: `A **${num(m1)} kg** trolley moving right at **${num(u1Adj)} m s⁻¹** collides head-on with a **${num(m2)} kg** trolley moving left at **${num(u2)} m s⁻¹** on a frictionless track, and they stick together. Taking right as positive, calculate their common velocity after impact in m s⁻¹, to 2 decimal places.`,
            answer: { type: "number", value: v, tolerance: 0.02, display: `${num(v)} m s⁻¹` },
            hint: "Assign u₂ a negative sign because it moves left: (m₁ u₁ − m₂ u₂) / (m₁ + m₂).",
            solution: [
              `Total initial momentum: {{p = (${m1})(${u1Adj}) + (${m2})(-${u2}) = ${num(m1 * u1Adj - m2 * u2)}}} kg m s⁻¹.`,
              `Common velocity: {{v = ${num(m1 * u1Adj - m2 * u2)} / ${m1 + m2} ≈ ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        const v = roundTo(pNet / (m1 + m2), 2);
        const traps: Trap[] = [];
        safeTrap(traps, v, 0.03, roundTo((m1 * u1 + m2 * u2) / (m1 + m2), 2), "The second trolley moves LEFT — give its velocity a negative sign!");
        return {
          prompt: `A **${num(m1)} kg** trolley moving right at **${num(u1)} m s⁻¹** collides head-on with a **${num(m2)} kg** trolley moving left at **${num(u2)} m s⁻¹** on a frictionless track, and they stick together. Taking right as positive, calculate their common velocity after impact in m s⁻¹, to 2 decimal places.`,
          answer: { type: "number", value: v, tolerance: 0.02, display: `${num(v)} m s⁻¹` },
          traps,
          hint: "Assign u₂ a negative sign because it moves left: v = (m₁ u₁ − m₂ u₂) / (m₁ + m₂).",
          solution: [
            `Total initial momentum: {{p = (${m1})(${u1}) + (${m2})(-${u2}) = ${num(pNet)}}} kg m s⁻¹.`,
            `Common velocity: {{v = ${num(pNet)} / ${m1 + m2} ≈ ${num(v)}}} m s⁻¹.`,
          ],
        };
      }
      // Flat curve max cornering speed v = sqrt(mu_s * g * r)
      const mu = rng.pick([0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8]);
      const r = rng.int(4, 24) * 5; // 20..120 m
      const vMax = roundTo(Math.sqrt(mu * G * r), 1);
      const traps: Trap[] = [];
      safeTrap(traps, vMax, 0.15, roundTo(mu * G * r, 1), "Remember to take the square root of μ_s g r!");
      return {
        prompt: `A car negotiates a flat circular bend of radius **${num(r)} m** where the coefficient of static friction between tyres and road is **${num(mu)}** ({{g = 9.81}} m s⁻²). Calculate the maximum safe cornering speed without skidding in m s⁻¹, to 1 decimal place.`,
        answer: { type: "number", value: vMax, tolerance: 0.15, display: `${num(vMax)} m s⁻¹` },
        traps,
        hint: "Set maximum static friction equal to centripetal force: μ_s mg = mv²/r ⇒ v = √(μ_s g r).",
        solution: [
          `Static friction provides centripetal force: {{μ_s m g = (m v^2)/r}} ⇒ {{v = sqrt(μ_s g r)}}.`,
          `{{v = sqrt(${mu} * 9.81 * ${r}) = sqrt(${num(roundTo(mu * G * r, 2))}) ≈ ${num(vMax)}}} m s⁻¹.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: WORK, ENERGY, POWER & EFFICIENCY (Level 2 — SL Core)
  // ===========================================================================
  {
    id: "a1-mechanics.work-energy",
    topicId: "a1-mechanics",
    title: "Work, Energy, Power & Efficiency",
    level: 2,
    ibLevel: "SL",
    guideRef: "work-energy-power",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Work W = F s cos 60° (0.5) or cos 0° (1)
          const angle = rng.pick([0, 60]);
          const f = rng.int(4, 30) * 5; // 20..150 N
          const s = rng.int(3, 25);
          const w = clean(angle === 0 ? f * s : 0.5 * f * s);
          const traps: Trap[] = [];
          if (angle === 60) {
            safeTrap(traps, w, 0.5, clean(f * s), "Remember to multiply by cos 60° = 0.50 in W = Fs cos θ.");
          }
          return {
            prompt:
              angle === 0
                ? `A constant horizontal force of **${num(f)} N** pushes a trolley **${num(s)} m** along the direction of the force. Calculate the mechanical work done in joules.`
                : `A constant tension of **${num(f)} N** pulls a sled **${num(s)} m** along level snow via a rope angled at **60°** above the horizontal. Calculate the work done by the tension in joules.`,
            answer: { type: "number", value: w, tolerance: 0.5, display: `${num(w)} J` },
            traps,
            hint: "Use W = F s cos θ (cos 60° = 0.5).",
            solution: [
              angle === 0
                ? `{{W = F s = ${f} * ${s} = ${num(w)}}} J.`
                : `{{W = F s cos 60° = ${f} * ${s} * 0.5 = ${num(w)}}} J.`,
            ],
          };
        }
        if (mode === 1) {
          // Elastic PE E_H = 1/2 k x^2
          const k = rng.int(4, 40) * 20; // 80..800 N m^-1
          const x = rng.pick([0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]);
          const e = clean(0.5 * k * x * x);
          const traps: Trap[] = [];
          safeTrap(traps, e, 0.05, clean(k * x * x), "Remember the factor of ½ in E_H = ½kΔx².");
          safeTrap(traps, e, 0.05, clean(0.5 * k * x), "Don't forget to square the extension Δx!");
          return {
            prompt: `A spring of spring constant **${num(k)} N m⁻¹** is stretched by **${num(x)} m** within its elastic limit. Calculate the elastic potential energy stored in joules.`,
            answer: { type: "number", value: e, tolerance: 0.05, display: `${num(e)} J` },
            traps,
            hint: "Apply E_H = ½ k Δx².",
            solution: [
              `{{E_H = (1/2) k Δx^2 = (1/2)(${k})(${x})^2 = ${num(e)}}} J.`,
            ],
          };
        }
        // Efficiency %
        const pIn = rng.int(2, 24) * 100; // 200..2400 W
        const eff = rng.int(7, 18) * 5; // 35..90 %
        const pOut = clean((pIn * eff) / 100);
        const traps: Trap[] = [];
        safeTrap(traps, eff, 0.5, clean(100 - eff), "That is the percentage of WASTED power — efficiency uses useful output power.");
        return {
          prompt: `A motor draws **${num(pIn)} W** of electrical power and delivers **${num(pOut)} W** of useful mechanical power. Calculate the percentage efficiency of the motor.`,
          answer: { type: "number", value: eff, tolerance: 0.5, display: `${num(eff)}%` },
          traps,
          hint: "Efficiency η = (P_useful / P_total) × 100%.",
          solution: [
            `{{η = (${pOut} / ${pIn}) * 100% = ${num(eff)}%}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Frictionless drop speed v = sqrt(2gh)
          const h = rng.int(2, 40);
          const v = roundTo(Math.sqrt(2 * G * h), 1);
          const traps: Trap[] = [];
          safeTrap(traps, v, 0.15, roundTo(Math.sqrt(G * h), 1), "Equating mgh = ½mv² gives v = √(2gh) — don't drop the factor of 2!");
          return {
            prompt: `A sled starts from rest at the top of a frictionless hill of vertical height **${num(h)} m** ({{g = 9.81}} m s⁻²). Calculate its speed at the bottom of the hill in m s⁻¹, to 1 decimal place.`,
            answer: { type: "number", value: v, tolerance: 0.15, display: `${num(v)} m s⁻¹` },
            traps,
            hint: "Use mechanical energy conservation: mgh = ½mv² ⇒ v = √(2gh).",
            solution: [
              `Mass cancels from {{m g h = (1/2) m v^2}}, giving {{v = sqrt(2 g h)}}.`,
              `{{v = sqrt(2 * 9.81 * ${h}) = sqrt(${num(roundTo(2 * G * h, 2))}) ≈ ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        // Electric hoist input power with efficiency (in kW to 2 dp)
        const m = rng.int(4, 30) * 25; // 100..750 kg
        const h = rng.int(4, 20);
        const t = rng.int(5, 24);
        const eff = rng.pick([60, 65, 70, 75, 80, 85, 90]);
        const pOutW = (m * G * h) / t;
        const pInKw = roundTo(pOutW / (eff / 100) / 1000, 2);
        const traps: Trap[] = [];
        safeTrap(traps, pInKw, 0.04, roundTo(pOutW / 1000, 2), "That is the useful mechanical output power — divide by efficiency to get electrical input power.");
        safeTrap(traps, pInKw, 0.04, roundTo((pOutW * (eff / 100)) / 1000, 2), "Input power must exceed output power — divide by efficiency rather than multiplying.");
        return {
          prompt: `An electric crane of efficiency **${num(eff)}%** lifts a **${num(m)} kg** load vertically through **${num(h)} m** at constant speed in **${num(t)} s** ({{g = 9.81}} m s⁻²). Calculate the electrical input power in kilowatts (kW), to 2 decimal places.`,
          answer: { type: "number", value: pInKw, tolerance: 0.03, display: `${num(pInKw)} kW` },
          traps,
          hint: "Find P_out = mgh / t first, convert to kW, then compute P_in = P_out / η.",
          solution: [
            `Useful output power: {{P_out = (${m} * 9.81 * ${h}) / ${t} ≈ ${num(roundTo(pOutW, 1))}}} W = ${num(roundTo(pOutW / 1000, 3))} kW.`,
            `Electrical input power: {{P_in = P_out / ${num(eff / 100)} ≈ ${num(pInKw)}}} kW.`,
          ],
        };
      }

      // TIER 3: Rough ramp energy dissipation OR hill-climbing power P = (F_d + mg sin θ)v
      if (rng.bool(0.5)) {
        const m = rng.pick([1.5, 2, 2.5, 3, 4, 5, 6]);
        const h = rng.int(3, 12);
        const vIdeal = Math.sqrt(2 * G * h);
        // pick v between 40% and 78% of vIdeal, clean 0.5 step
        const vMin = Math.max(2, Math.ceil(vIdeal * 0.4 * 2) / 2);
        const vMax = Math.floor(vIdeal * 0.78 * 2) / 2;
        const steps = Math.max(1, Math.round((vMax - vMin) * 2));
        const v = clean(vMin + rng.int(0, steps) * 0.5);
        const ep = m * G * h;
        const ek = 0.5 * m * v * v;
        const loss = roundTo(ep - ek, 1);
        const traps: Trap[] = [];
        safeTrap(traps, loss, 0.25, roundTo(ep, 1), "Subtract the block's final kinetic energy ½mv² from its initial gravitational PE.");
        safeTrap(traps, loss, 0.25, roundTo(ek, 1), "That is the final kinetic energy — friction loss is mgh − ½mv².");
        return {
          prompt: `A **${num(m)} kg** crate starts from rest at the top of a rough ramp of vertical height **${num(h)} m** ({{g = 9.81}} m s⁻²) and reaches the foot of the ramp at **${num(v)} m s⁻¹**. Calculate the mechanical energy dissipated against friction in joules, to 1 decimal place.`,
          answer: { type: "number", value: loss, tolerance: 0.25, display: `${num(loss)} J` },
          traps,
          hint: "Energy dissipated against friction equals initial gravitational PE minus final kinetic energy: mgh − ½mv².",
          solution: [
            `Initial gravitational PE: {{E_p = ${m} * 9.81 * ${h} = ${num(roundTo(ep, 2))}}} J.`,
            `Final kinetic energy: {{E_k = (1/2)(${m})(${v})^2 = ${num(roundTo(ek, 2))}}} J.`,
            `Energy dissipated by friction: {{W_f = ${num(roundTo(ep, 2))} - ${num(roundTo(ek, 2))} ≈ ${num(loss)}}} J.`,
          ],
        };
      }
      // Hill climb power in kW to 1 dp
      const m = rng.int(9, 18) * 100; // 900..1800 kg
      const sinT = rng.pick([0.05, 0.08, 0.1, 0.12, 0.15]);
      const v = rng.int(10, 26);
      const fd = rng.int(6, 18) * 50; // 300..900 N
      const fDrive = m * G * sinT + fd;
      const pKw = roundTo((fDrive * v) / 1000, 1);
      const traps: Trap[] = [];
      safeTrap(traps, pKw, 0.2, roundTo((fd * v) / 1000, 1), "Include the downhill weight component mg sin θ as well as resistive drag!");
      safeTrap(traps, pKw, 0.2, roundTo((m * G * sinT * v) / 1000, 1), "Add the resistive drag force to mg sin θ before multiplying by v.");
      return {
        prompt: `A **${num(m)} kg** car climbs a straight hill with slope {{sin θ = ${num(sinT)}}} at a steady speed of **${num(v)} m s⁻¹** against a constant resistive drag of **${num(fd)} N** ({{g = 9.81}} m s⁻²). Calculate the useful driving power of the engine in kilowatts (kW), to 1 decimal place.`,
        answer: { type: "number", value: pKw, tolerance: 0.2, display: `${num(pKw)} kW` },
        traps,
        hint: "At steady speed uphill, F_drive = F_drag + mg sin θ, and useful power P = F_drive v.",
        solution: [
          `Downhill weight component: {{m g sin θ = ${m} * 9.81 * ${sinT} = ${num(roundTo(m * G * sinT, 1))}}} N.`,
          `Total driving force: {{F_drive = ${num(roundTo(m * G * sinT, 1))} + ${fd} = ${num(roundTo(fDrive, 1))}}} N.`,
          `Useful power: {{P = F_drive v = ${num(roundTo(fDrive, 1))} * ${v} ≈ ${num(pKw)}}} kW.`,
        ],
      };
    },
  },
];
