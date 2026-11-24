import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Torque, Moment of Inertia & Rolling Energy (Level 1, HL)
  // =========================================================================
  {
    id: "a2-rotational-relativity.torque-inertia",
    topicId: "a2-rotational-relativity",
    title: "Torque, moment of inertia & rolling speed",
    level: 1,
    ibLevel: "HL",
    guideRef: "moment-inertia-angular-momentum",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Lever-arm torque τ = F r sin θ (θ = 30° or 90°)
          const F = rng.int(6, 30) * 2; // 12..60 N even
          const r = clean(rng.int(2, 15) / 10); // 0.2..1.5 m
          const angle = rng.pick([30, 90] as const);
          const sinVal = angle === 30 ? 0.5 : 1;
          const tau = roundTo(F * r * sinVal, 2);
          const traps =
            angle === 30
              ? [
                  {
                    spec: { type: "number" as const, value: roundTo(F * r, 2), tolerance: 0.02 },
                    feedback: "Remember to multiply by {{sin(30°) = 0.5}} for the perpendicular component of force.",
                  },
                ]
              : [];
          return {
            prompt: `A force of {{${num(F)} N}} acts at {{${num(r)} m}} from a pivot at an angle of {{${angle}°}} to the lever arm. Calculate the magnitude of the torque about the pivot, in N m.`,
            answer: { type: "number", value: tau, tolerance: 0.02, display: `${num(tau)} N m` },
            traps,
            hint: "Use {{τ = F r sin θ}}.",
            solution: [
              `{{τ = F r sin(${angle}°) = ${num(F)} * ${num(r)} * ${num(sinVal)} = ${num(tau)} N m}}.`,
            ],
          };
        }
        // Discrete moment of inertia I = m1 r1^2 + m2 r2^2
        const m1 = rng.int(1, 6);
        const m2 = rng.int(1, 6);
        const r1 = rng.pick([0.5, 1.0, 1.5, 2.0] as const);
        const r2 = rng.pick([0.5, 1.0, 1.5, 2.0] as const);
        const I = roundTo(m1 * r1 * r1 + m2 * r2 * r2, 2);
        const linearTrap = roundTo(m1 * r1 + m2 * r2, 2);
        const traps =
          Math.abs(linearTrap - I) > 0.1
            ? [
                {
                  spec: { type: "number" as const, value: linearTrap, tolerance: 0.02 },
                  feedback: "Remember to **square** each distance {{r_i}} in {{I = Σ m_i r_i^2}}.",
                },
              ]
            : [];
        return {
          prompt: `A light rigid rod carries point masses of {{${m1} kg}} at {{${num(r1)} m}} and {{${m2} kg}} at {{${num(r2)} m}} from a perpendicular pivot axis. Calculate the total moment of inertia about the pivot, in kg m².`,
          answer: { type: "number", value: I, tolerance: 0.02, display: `${num(I)} kg m²` },
          traps,
          hint: "Moment of inertia is a positive scalar sum: {{I = m_1 r_1^2 + m_2 r_2^2}}.",
          solution: [
            `{{I = ${m1}(${num(r1)})^2 + ${m2}(${num(r2)})^2 = ${num(roundTo(m1 * r1 * r1, 2))} + ${num(roundTo(m2 * r2 * r2, 2))} = ${num(I)} kg m^2}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Angular acceleration α = τ / I for solid disc (I = 0.5 m R^2) or hoop (I = m R^2)
          const isDisc = rng.bool(0.5);
          const shape = isDisc ? "uniform solid disc ({{I = (1/2)mR^2}})" : "thin hollow hoop ({{I = mR^2}})";
          const c = isDisc ? 0.5 : 1;
          const m = rng.pick([2, 4, 5, 6, 8, 10] as const);
          const R = rng.pick([0.2, 0.25, 0.4, 0.5, 0.8, 1.0] as const);
          const F = rng.int(4, 24);
          const I = clean(c * m * R * R);
          const tau = clean(F * R);
          const alpha = roundTo(tau / I, 2);
          const wrongInertiaAlpha = roundTo(tau / ((isDisc ? 1 : 0.5) * m * R * R), 2);
          const traps =
            Math.abs(wrongInertiaAlpha - alpha) > 0.1
              ? [
                  {
                    spec: { type: "number" as const, value: wrongInertiaAlpha, tolerance: 0.02 },
                    feedback: isDisc
                      ? "A solid disc has {{I = (1/2)mR^2}}, not {{mR^2}}."
                      : "A thin hollow hoop has {{I = mR^2}}, not {{(1/2)mR^2}}.",
                  },
                ]
              : [];
          return {
            prompt: `A ${shape} of mass {{${m} kg}} and radius {{${num(R)} m}} rotates freely on a central axle. A constant tangential force of {{${F} N}} acts on its rim. Calculate its angular acceleration in rad s⁻² (to 2 decimal places).`,
            answer: { type: "number", value: alpha, tolerance: 0.02, display: `${num(alpha)} rad s⁻²` },
            traps,
            hint: "Compute {{I}}, find {{τ = F R}}, then use {{α = τ / I}}.",
            solution: [
              `{{I = ${isDisc ? "(1/2)" : ""}(${m})(${num(R)})^2 = ${num(roundTo(I, 4))} kg m^2}} and {{τ = ${F} * ${num(R)} = ${num(roundTo(tau, 3))} N m}}.`,
              `{{α = τ / I = ${num(roundTo(tau, 3))} / ${num(roundTo(I, 4))} = ${num(alpha)} rad s^(-2)}}.`,
            ],
          };
        }
        // Conservation of angular momentum I1 ω1 = I2 ω2
        const I1 = clean(rng.int(12, 48) / 10); // 1.2..4.8
        const factor = rng.pick([0.25, 0.4, 0.5, 0.6, 0.75, 1.25, 1.5, 2.0] as const);
        const I2 = roundTo(I1 * factor, 2);
        const w1 = rng.int(2, 12);
        const w2 = roundTo((I1 * w1) / I2, 2);
        const wrongRatio = roundTo((I2 * w1) / I1, 2);
        const traps =
          Math.abs(wrongRatio - w2) > 0.1
            ? [
                {
                  spec: { type: "number" as const, value: wrongRatio, tolerance: 0.02 },
                  feedback: "Angular speed is **inversely** proportional to moment of inertia: {{ω_2 = ω_1 (I_1 / I_2)}}.",
                },
              ]
            : [];
        return {
          prompt: `An isolated spinning platform with moment of inertia {{${num(I1)} kg m^2}} rotates at {{${w1} rad s^(-1)}}. Its moment of inertia changes internally to {{${num(I2)} kg m^2}} with zero external torque. Calculate the new angular velocity in rad s⁻¹ (to 2 decimal places).`,
          answer: { type: "number", value: w2, tolerance: 0.02, display: `${num(w2)} rad s⁻¹` },
          traps,
          hint: "Conserve angular momentum: {{I_1 ω_1 = I_2 ω_2}}.",
          solution: [
            `{{ω_2 = (I_1 ω_1) / I_2 = (${num(I1)} * ${w1}) / ${num(I2)} = ${num(w2)} rad s^(-1)}}.`,
          ],
        };
      }

      // Tier 3: Rolling without slipping speed down ramp OR angular impulse → rotational KE
      if (rng.bool(0.55)) {
        const bodies = [
          { name: "solid sphere", formula: "(2/5)mR^2", c: 0.4 },
          { name: "solid cylinder", formula: "(1/2)mR^2", c: 0.5 },
          { name: "thin hollow hoop", formula: "mR^2", c: 1.0 },
        ] as const;
        const body = rng.pick(bodies);
        const h = clean(rng.int(8, 50) / 10); // 0.8..5.0 m
        const g = 9.81;
        const v = roundTo(Math.sqrt((2 * g * h) / (1 + body.c)), 2);
        const slideV = roundTo(Math.sqrt(2 * g * h), 2);
        return {
          prompt: `A uniform ${body.name} ({{I = ${body.formula}}}) rolls without slipping from rest down an incline of vertical height {{${num(h)} m}}. Taking {{g = 9.81 m s^(-2)}}, calculate its linear speed at the bottom in m s⁻¹ (to 2 decimal places).`,
          answer: { type: "number", value: v, tolerance: 0.02, display: `${num(v)} m s⁻¹` },
          traps: [
            {
              spec: { type: "number", value: slideV, tolerance: 0.02 },
              feedback: "That is {{sqrt(2gh)}} for frictionless sliding—include rotational kinetic energy {{(1/2)Iω^2}}!",
            },
          ],
          hint: "Use energy conservation: {{mgh = (1/2)mv^2 (1 + I/(mR^2))}}.",
          solution: [
            `With {{c = ${num(body.c)}}}, {{mgh = (1/2)mv^2 (1 + ${num(body.c)}) = ${num(clean(0.5 * (1 + body.c)))} mv^2}}.`,
            `{{v = sqrt((2 * 9.81 * ${num(h)}) / ${num(clean(1 + body.c))}) = ${num(v)} m s^(-1)}}.`,
          ],
        };
      }

      const I = clean(rng.int(4, 20) / 10); // 0.4..2.0
      const tau = rng.int(3, 15);
      const t = rng.int(2, 8);
      const L = tau * t;
      const Ek = roundTo((L * L) / (2 * I), 1);
      const noHalf = roundTo((L * L) / I, 1);
      return {
        prompt: `A flywheel of moment of inertia {{${num(I)} kg m^2}}, initially at rest, experiences a constant net torque of {{${tau} N m}} for {{${t} s}}. Calculate its final rotational kinetic energy in joules (to 1 decimal place).`,
        answer: { type: "number", value: Ek, tolerance: 0.1, display: `${num(Ek)} J` },
        traps: [
          {
            spec: { type: "number", value: noHalf, tolerance: 0.1 },
            feedback: "Don't forget the factor of {{1/2}} in {{E_k = L^2 / (2I) = (1/2)Iω^2}}.",
          },
        ],
        hint: "Find angular momentum {{L = τ t}}, then use {{E_k = L^2 / (2I)}}.",
        solution: [
          `Angular impulse: {{L = τ t = ${tau} * ${t} = ${L} N m s}}.`,
          `Rotational KE: {{E_k = L^2 / (2I) = ${L}^2 / (2 * ${num(I)}) = ${num(Ek)} J}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Lorentz Factor, Time Dilation & Length Contraction (Level 2, HL)
  // =========================================================================
  {
    id: "a2-rotational-relativity.lorentz-factor",
    topicId: "a2-rotational-relativity",
    title: "Lorentz factor γ, time dilation & length contraction",
    level: 2,
    ibLevel: "HL",
    guideRef: "galilean-special-relativity",
    generate(rng, tier) {
      if (tier === 1) {
        // Compute γ to 2 d.p. from β in [0.40..0.96]
        const beta = clean(rng.int(40, 96) / 100);
        const obj = rng.pick(["muon", "proton", "spacecraft", "pion", "electron", "probe"] as const);
        const gamma = roundTo(1 / Math.sqrt(1 - beta * beta), 2);
        const noSqrt = roundTo(1 / (1 - beta * beta), 2);
        const invGamma = roundTo(Math.sqrt(1 - beta * beta), 2);
        return {
          prompt: `A ${obj} travels through a laboratory at speed {{${beta.toFixed(2)}c}}. Calculate its Lorentz factor {{γ}} (to 2 decimal places).`,
          answer: { type: "number", value: gamma, tolerance: 0.02, display: gamma.toFixed(2) },
          traps: [
            {
              spec: { type: "number", value: noSqrt, tolerance: 0.02 },
              feedback: "Remember to take the **square root** of {{1 - v^2/c^2}} before inverting!",
            },
            {
              spec: { type: "number", value: invGamma, tolerance: 0.02 },
              feedback: "{{γ}} is always {{>= 1}} — invert {{sqrt(1 - v^2/c^2)}}!",
            },
          ],
          hint: "Compute {{γ = 1 / sqrt(1 - (v/c)^2)}}.",
          solution: [
            `{{1 - v^2/c^2 = 1 - ${beta.toFixed(2)}^2 = ${roundTo(1 - beta * beta, 4)}}}.`,
            `{{γ = 1 / sqrt(${roundTo(1 - beta * beta, 4)}) = ${gamma.toFixed(2)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        const beta = clean(rng.int(50, 95) / 100);
        const gammaExact = 1 / Math.sqrt(1 - beta * beta);
        if (rng.bool(0.5)) {
          // Time dilation Δt = γ Δt0
          const t0 = clean(rng.int(20, 250) / 10); // 2.0..25.0 μs
          const dt = roundTo(gammaExact * t0, 2);
          const divTrap = roundTo(t0 / gammaExact, 2);
          return {
            prompt: `An unstable particle has proper lifetime {{${num(t0)} μs}} and moves through a detector at {{${beta.toFixed(2)}c}}. Calculate its dilated lifetime measured in the detector frame, in μs (to 2 decimal places).`,
            answer: { type: "number", value: dt, tolerance: 0.05, display: `${num(dt)} μs` },
            traps: [
              {
                spec: { type: "number", value: divTrap, tolerance: 0.05 },
                feedback: "Proper time {{Δt_0}} is the **shortest** time — multiply by {{γ}} ({{Δt = γ Δt_0}}), never divide!",
              },
            ],
            hint: "Find {{γ = 1 / sqrt(1 - v^2/c^2)}}, then apply {{Δt = γ Δt_0}}.",
            solution: [
              `{{γ = 1 / sqrt(1 - ${beta.toFixed(2)}^2) = ${roundTo(gammaExact, 4)}}}.`,
              `{{Δt = γ Δt_0 = ${roundTo(gammaExact, 4)} * ${num(t0)} = ${num(dt)} μs}}.`,
            ],
          };
        }
        // Length contraction L = L0 / γ
        const L0 = rng.int(4, 30) * 10; // 40..300 m
        const L = roundTo(L0 / gammaExact, 1);
        const mulTrap = roundTo(L0 * gammaExact, 1);
        return {
          prompt: `A starship of proper length {{${L0} m}} flies past an orbital station at {{${beta.toFixed(2)}c}}. Calculate the length of the starship measured by the station, in metres (to 1 decimal place).`,
          answer: { type: "number", value: L, tolerance: 0.2, display: `${num(L)} m` },
          traps: [
            {
              spec: { type: "number", value: mulTrap, tolerance: 0.2 },
              feedback: "Proper length {{L_0}} is the **longest** length — divide by {{γ}} ({{L = L_0 / γ}}), never multiply!",
            },
          ],
          hint: "Find {{γ = 1 / sqrt(1 - v^2/c^2)}}, then apply {{L = L_0 / γ}}.",
          solution: [
            `{{γ = 1 / sqrt(1 - ${beta.toFixed(2)}^2) = ${roundTo(gammaExact, 4)}}}.`,
            `{{L = L_0 / γ = ${L0} / ${roundTo(gammaExact, 4)} = ${num(L)} m}}.`,
          ],
        };
      }

      // Tier 3: Invert γ to find v/c OR find ship proper time for interstellar trip
      if (rng.bool(0.5)) {
        const gamma = clean(rng.int(13, 60) / 10); // 1.3..6.0
        const beta = roundTo(Math.sqrt(1 - 1 / (gamma * gamma)), 3);
        const noSqrt = roundTo(1 - 1 / (gamma * gamma), 3);
        const traps =
          Math.abs(noSqrt - beta) > 0.015
            ? [
                {
                  spec: { type: "number" as const, value: noSqrt, tolerance: 0.005 },
                  feedback: "Remember to take the square root of {{1 - 1/γ^2}} to find {{v/c}}.",
                },
              ]
            : [];
        return {
          prompt: `A moving clock runs slowly by a Lorentz factor of {{γ = ${num(gamma)}}}. Calculate its speed as a multiple of {{c}} (to 3 decimal places).`,
          answer: { type: "number", value: beta, tolerance: 0.005, display: `${beta.toFixed(3)} c` },
          traps,
          hint: "Rearrange {{γ = 1 / sqrt(1 - v^2/c^2)}} to get {{v / c = sqrt(1 - 1 / γ^2)}}.",
          solution: [
            `{{v^2 / c^2 = 1 - 1 / ${num(gamma)}^2 = ${roundTo(1 - 1 / (gamma * gamma), 5)}}}.`,
            `{{v / c = sqrt(${roundTo(1 - 1 / (gamma * gamma), 5)}) = ${beta.toFixed(3)}}} ⇒ {{v = ${beta.toFixed(3)} c}}.`,
          ],
        };
      }

      const L0 = clean(rng.int(30, 180) / 10); // 3.0..18.0 ly
      const beta = clean(rng.int(55, 95) / 100);
      const gammaExact = 1 / Math.sqrt(1 - beta * beta);
      const earthTime = roundTo(L0 / beta, 2);
      const shipTime = roundTo(L0 / (beta * gammaExact), 2);
      return {
        prompt: `A spacecraft flies from Earth to a star at Earth proper distance {{${num(L0)} ly}} at constant speed {{${beta.toFixed(2)}c}}. Calculate the journey time measured on the spacecraft's onboard clock, in years (to 2 decimal places).`,
        answer: { type: "number", value: shipTime, tolerance: 0.03, display: `${num(shipTime)} years` },
        traps: [
          {
            spec: { type: "number", value: earthTime, tolerance: 0.03 },
            feedback: "{{L_0 / v}} is the Earth-frame time; divide by {{γ}} for the spacecraft's proper time!",
          },
        ],
        hint: "Find Earth time {{Δt = L_0 / v}}, then divide by {{γ}} (or contract {{L = L_0 / γ}} first).",
        solution: [
          `Earth time: {{Δt = ${num(L0)} / ${beta.toFixed(2)} = ${num(earthTime)} years}}; {{γ = ${roundTo(gammaExact, 4)}}}.`,
          `Spacecraft proper time: {{Δt_0 = Δt / γ = ${num(shipTime)} years}}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Relativistic Velocity Addition (Level 2, HL)
  // =========================================================================
  {
    id: "a2-rotational-relativity.velocity-addition",
    topicId: "a2-rotational-relativity",
    title: "Relativistic velocity addition",
    level: 2,
    ibLevel: "HL",
    guideRef: "lorentz-spacetime-diagrams",
    generate(rng, tier) {
      if (tier === 1) {
        // Same direction launch from moving rocket: u = (u' + v)/(1 + u'v/c^2)
        const v = clean(rng.int(6, 17) * 5 / 100); // 0.30..0.85
        const uPrime = clean(rng.int(6, 17) * 5 / 100); // 0.30..0.85
        const u = roundTo((uPrime + v) / (1 + uPrime * v), 3);
        const galilean = roundTo(uPrime + v, 3);
        return {
          prompt: `A rocket flies past a space station at {{${v.toFixed(2)}c}} and launches a probe straight ahead at {{${uPrime.toFixed(2)}c}} relative to the rocket. Calculate the probe's speed relative to the station, as a multiple of {{c}} (to 3 decimal places).`,
          answer: { type: "number", value: u, tolerance: 0.005, display: `${u.toFixed(3)} c` },
          traps: [
            {
              spec: { type: "number", value: galilean, tolerance: 0.005 },
              feedback: "That is Galilean addition ({{u' + v}}) — divide by {{1 + u'v/c^2}}!",
            },
          ],
          hint: "Use the inverse velocity addition formula {{u = (u' + v) / (1 + u'v/c^2)}}.",
          solution: [
            `{{u = (${uPrime.toFixed(2)}c + ${v.toFixed(2)}c) / (1 + ${uPrime.toFixed(2)} * ${v.toFixed(2)}) = ${roundTo(uPrime + v, 2)}c / ${roundTo(1 + uPrime * v, 4)} = ${u.toFixed(3)} c}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Head-on approach: ship A at +v, ship B at -w in Earth frame
        const v = clean(rng.int(8, 18) * 5 / 100); // 0.40..0.90
        const w = clean(rng.int(8, 18) * 5 / 100); // 0.40..0.90
        const rel = roundTo((v + w) / (1 + v * w), 3);
        const galilean = roundTo(v + w, 3);
        return {
          prompt: `In Earth's frame, spacecraft A flies east at {{+${v.toFixed(2)}c}} and spacecraft B flies west toward A at {{-${w.toFixed(2)}c}}. Calculate the speed of spacecraft B measured by spacecraft A, as a multiple of {{c}} (to 3 decimal places).`,
          answer: { type: "number", value: rel, tolerance: 0.005, display: `${rel.toFixed(3)} c` },
          traps: [
            {
              spec: { type: "number", value: galilean, tolerance: 0.005 },
              feedback: "That is Earth's closing rate ({{v + w}}), not the relativistic speed measured by A!",
            },
          ],
          hint: `Set {{S'}} = ship A ({{v = +${v.toFixed(2)}c}}) and {{u = -${w.toFixed(2)}c}} in {{u' = (u - v) / (1 - uv/c^2)}}.`,
          solution: [
            `{{u' = (-${w.toFixed(2)}c - ${v.toFixed(2)}c) / (1 - (-${w.toFixed(2)})(${v.toFixed(2)})) = -${roundTo(v + w, 2)}c / ${roundTo(1 + v * w, 4)} = -${rel.toFixed(3)} c}}.`,
            `Speed measured by A is {{${rel.toFixed(3)} c}}.`,
          ],
        };
      }

      // Tier 3: Overtaking in the same direction: u' = (u - v) / (1 - uv/c^2) with u > v
      const vIdx = rng.int(6, 14); // 0.30..0.70
      const uIdx = rng.int(vIdx + 2, 19); // at least +0.10 higher, up to 0.95
      const v = clean((vIdx * 5) / 100);
      const u = clean((uIdx * 5) / 100);
      const uPrime = roundTo((u - v) / (1 - u * v), 3);
      const galilean = roundTo(u - v, 3);
      return {
        prompt: `In Earth's frame, ship A moves at {{+${v.toFixed(2)}c}} while ship B overtakes it in the same direction at {{+${u.toFixed(2)}c}}. Calculate the speed of ship B as measured by ship A, as a multiple of {{c}} (to 3 decimal places).`,
        answer: { type: "number", value: uPrime, tolerance: 0.005, display: `${uPrime.toFixed(3)} c` },
        traps: [
          {
            spec: { type: "number", value: galilean, tolerance: 0.005 },
            feedback: "That is the Galilean difference ({{u - v}}) — divide by {{1 - uv/c^2}}!",
          },
        ],
        hint: "Use {{u' = (u - v) / (1 - uv/c^2)}} with both velocities positive.",
        solution: [
          `{{u' = (${u.toFixed(2)}c - ${v.toFixed(2)}c) / (1 - ${u.toFixed(2)} * ${v.toFixed(2)}) = ${roundTo(u - v, 2)}c / ${roundTo(1 - u * v, 4)} = ${uPrime.toFixed(3)} c}}.`,
        ],
      };
    },
  },
];
