import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

// Curated harmonic pairs [R1, R2, Rp] where (R1 * R2) / (R1 + R2) = Rp exactly.
const HARMONIC_PAIRS: ReadonlyArray<readonly [number, number, number]> = [
  [3, 6, 2],
  [4, 12, 3],
  [5, 20, 4],
  [6, 12, 4],
  [6, 30, 5],
  [8, 24, 6],
  [9, 18, 6],
  [10, 15, 6],
  [12, 24, 8],
  [12, 36, 9],
  [15, 30, 10],
  [12, 60, 10],
  [20, 30, 12],
  [15, 60, 12],
  [20, 60, 15],
  [24, 48, 16],
];

function divisorsOf(n: number): number[] {
  const out: number[] = [];
  for (let d = 2; d <= n / 2; d++) {
    if (n % d === 0) out.push(d);
  }
  return out;
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: OHM'S LAW, POWER, CHARGE & RESISTIVITY SCALING (SL, LEVEL 1)
  // ===========================================================================
  {
    id: "b2-circuits.ohm-power",
    topicId: "b2-circuits",
    title: "Ohm's Law, Power & Resistivity Scaling",
    level: 1,
    ibLevel: "SL",
    guideRef: "current-pd-ohm",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 3);
        if (mode === 0) {
          const I = clean(rng.int(1, 18) * 0.5);
          const R = rng.int(2, 24);
          const V = clean(I * R);
          return {
            prompt: `A resistor of resistance ${R} Ω carries a steady current of ${num(I)} A. Calculate the potential difference across it in V.`,
            answer: { type: "number", value: V, tolerance: 0.05, display: `${num(V)} V` },
            hint: "Use Ohm's law: {{V = I R}}.",
            solution: [`{{V = I R = ${num(I)} * ${R} = ${num(V)}}} V.`],
          };
        }
        if (mode === 1) {
          const I = clean(rng.int(1, 16) * 0.5);
          const R = rng.int(2, 18);
          const V = clean(I * R);
          return {
            prompt: `A potential difference of ${num(V)} V is applied across a ${R} Ω resistor. Calculate the current through the resistor in A.`,
            answer: { type: "number", value: I, tolerance: 0.02, display: `${num(I)} A` },
            hint: "Rearrange {{V = I R}} to {{I = V / R}}.",
            solution: [`{{I = V / R = ${num(V)} / ${R} = ${num(I)}}} A.`],
          };
        }
        if (mode === 2) {
          const V = rng.int(6, 36);
          const I = clean(rng.int(1, 16) * 0.5);
          const P = clean(V * I);
          return {
            prompt: `An appliance operates at ${V} V and draws a current of ${num(I)} A. Calculate its electrical power in W.`,
            answer: { type: "number", value: P, tolerance: 0.1, display: `${num(P)} W` },
            hint: "Use {{P = I V}}.",
            solution: [`{{P = I V = ${num(I)} * ${V} = ${num(P)}}} W.`],
          };
        }
        const I = clean(rng.int(1, 14) * 0.5);
        const t = rng.int(2, 20) * 10;
        const q = clean(I * t);
        return {
          prompt: `A steady current of ${num(I)} A flows past a point in a wire for ${t} s. Calculate the total charge passing that point in C.`,
          answer: { type: "number", value: q, tolerance: 0.5, display: `${num(q)} C` },
          hint: "Rearrange {{I = Δq / Δt}} to {{Δq = I Δt}}.",
          solution: [`{{Δq = I Δt = ${num(I)} * ${t} = ${num(q)}}} C.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const I = rng.int(2, 12);
          const R = rng.int(3, 28);
          const P = I * I * R;
          const trapV = I * R;
          return {
            prompt: `A current of ${I} A passes through a ${R} Ω heating element. Calculate the thermal power dissipated in W.`,
            answer: { type: "number", value: P, tolerance: 0.5, display: `${P} W` },
            traps: [
              {
                spec: { type: "number", value: trapV },
                feedback: `{{${I} * ${R} = ${trapV}}} V is the potential difference — remember to square the current in {{P = I^2 R}}!`,
              },
            ],
            hint: "Use {{P = I^2 R}}.",
            solution: [`{{P = I^2 R = ${I}^2 * ${R} = ${I * I} * ${R} = ${P}}} W.`],
          };
        }
        if (mode === 1) {
          const R = rng.pick([4, 5, 6, 8, 10, 12, 15, 16, 20, 24, 25, 30, 40]);
          let I = rng.pick([2, 3, 4, 5, 6, 8, 10]);
          if (I === R) I = 3;
          const V = I * R;
          const P = V * I;
          return {
            prompt: `An ohmic heater is rated at ${P} W when operated at ${V} V. Calculate the resistance of the heater in Ω.`,
            answer: { type: "number", value: R, tolerance: 0.05, display: `${R} Ω` },
            traps: [
              {
                spec: { type: "number", value: I },
                feedback: `${I} A is the current ({{P / V}}); now compute {{R = V / I}} (or use {{R = V^2 / P}}).`,
              },
            ],
            hint: "Rearrange {{P = V^2 / R}} to {{R = V^2 / P}}.",
            solution: [
              `{{R = V^2 / P = ${V}^2 / ${P} = ${V * V} / ${P} = ${R}}} Ω (check: {{I = ${P} / ${V} = ${I}}} A, {{R = ${V} / ${I} = ${R}}} Ω).`,
            ],
          };
        }
        const I = clean(rng.int(1, 16) * 0.5);
        const mins = rng.int(2, 15);
        const q = clean(I * mins * 60);
        const trapNoSec = clean(I * mins);
        return {
          prompt: `A steady current of ${num(I)} A flows through a battery charger for ${mins} minutes. Calculate the total charge transferred in C.`,
          answer: { type: "number", value: q, tolerance: 0.5, display: `${num(q)} C` },
          traps: [
            {
              spec: { type: "number", value: trapNoSec },
              feedback: `Convert ${mins} minutes into seconds ({{${mins} * 60 = ${mins * 60}}} s) before multiplying by ${num(I)} A!`,
            },
          ],
          hint: "Convert time from minutes to SI seconds first, then apply {{Δq = I Δt}}.",
          solution: [
            `Time in seconds: {{Δt = ${mins} * 60 = ${mins * 60}}} s.`,
            `Charge: {{Δq = ${num(I)} * ${mins * 60} = ${num(q)}}} C.`,
          ],
        };
      }

      // Tier 3: resistivity scaling, constant-volume stretching, or energy in kJ
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const base = rng.int(2, 14);
        const R0 = base * 4; // divisible by 4 so diameter ×2 gives exact integer
        const kL = rng.pick([2, 3, 5, 6, 7]);
        const Rnew = base * kL;
        const trapHalf = base * 2 * kL;
        return {
          prompt: `Wire X of length {{L}} and diameter {{d}} has a resistance of ${R0} Ω. Wire Y, made of the same alloy at the same temperature, has length {{${kL}L}} and diameter {{2d}}. Calculate the resistance of Wire Y in Ω.`,
          answer: { type: "number", value: Rnew, tolerance: 0.1, display: `${Rnew} Ω` },
          traps: [
            {
              spec: { type: "number", value: trapHalf },
              feedback: "Doubling the diameter quadruples cross-sectional area ({{A ∝ d^2}}), dividing resistance by 4 — not 2!",
            },
          ],
          hint: `Since {{R = ρ L / A}} and {{A ∝ d^2}}, scaling length by ${kL} and diameter by 2 multiplies {{R}} by {{${kL} / 4}}.`,
          solution: [
            `Length scales by ${kL} (×${kL}); diameter doubles so area quadruples (÷4).`,
            `{{R_Y = ${R0} * (${kL} / 4) = ${Rnew}}} Ω.`,
          ],
        };
      }
      if (mode === 1) {
        const R0 = rng.int(2, 18);
        const k = rng.pick([2, 3, 4, 5]);
        const Rnew = R0 * k * k;
        const trapLinear = R0 * k;
        return {
          prompt: `A uniform metal wire of resistance ${R0} Ω is stretched uniformly at constant volume and resistivity until its length becomes ${k} times longer. Calculate its new resistance in Ω.`,
          answer: { type: "number", value: Rnew, tolerance: 0.1, display: `${Rnew} Ω` },
          traps: [
            {
              spec: { type: "number", value: trapLinear },
              feedback: `Constant volume ({{A L}}) means making the wire ${k}× longer ALSO shrinks its area by a factor of ${k}, multiplying resistance by {{${k}^2 = ${k * k}}}!`,
            },
          ],
          hint: "At constant volume, multiplying {{L}} by {{k}} divides area {{A}} by {{k}}, so {{R ∝ k^2}}.",
          solution: [
            `With {{L' = ${k}L}} and {{A' = A / ${k}}}, {{R' = ρ(${k}L)/(A/${k}) = ${k * k} R_0}}.`,
            `{{R' = ${k * k} * ${R0} = ${Rnew}}} Ω.`,
          ],
        };
      }
      const V = rng.pick([100, 120, 200, 220, 240]);
      const I = rng.pick([2, 2.5, 4, 5, 6, 8, 10]);
      const mins = rng.int(2, 12);
      const energyKJ = clean((V * I * mins * 60) / 1000);
      const trapNoMin = clean((V * I * mins) / 1000);
      return {
        prompt: `An electric kettle draws ${num(I)} A from a ${V} V supply for ${mins} minutes. Calculate the total electrical energy transferred in kJ.`,
        answer: { type: "number", value: energyKJ, tolerance: 0.1, display: `${num(energyKJ)} kJ` },
        traps: [
          {
            spec: { type: "number", value: trapNoMin },
            feedback: `Convert ${mins} minutes to seconds (${mins * 60} s) before applying {{E = V I t}}!`,
          },
        ],
        hint: "Calculate power {{P = V I}} in watts, multiply by time in seconds, then divide by 1000 for kJ.",
        solution: [
          `Power: {{P = ${V} * ${num(I)} = ${clean(V * I)}}} W = ${num(clean((V * I) / 1000))} kW.`,
          `Energy: {{E = ${num(clean((V * I) / 1000))} * (${mins} * 60) = ${num(energyKJ)}}} kJ.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: SERIES, PARALLEL & KIRCHHOFF NETWORKS (SL, LEVEL 2)
  // ===========================================================================
  {
    id: "b2-circuits.series-parallel",
    topicId: "b2-circuits",
    title: "Series, Parallel & Kirchhoff Networks",
    level: 2,
    ibLevel: "SL",
    guideRef: "series-parallel-kirchhoff",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const [a, b, p] = rng.pick(HARMONIC_PAIRS);
          const scale = rng.pick([1, 2, 3]);
          const R1 = a * scale;
          const R2 = b * scale;
          const Rp = p * scale;
          return {
            prompt: `A ${R1} Ω resistor and a ${R2} Ω resistor are connected in parallel. Calculate their equivalent resistance in Ω.`,
            answer: { type: "number", value: Rp, tolerance: 0.05, display: `${Rp} Ω` },
            traps: [
              {
                spec: { type: "number", value: R1 + R2 },
                feedback: `${R1 + R2} Ω is the series sum — for parallel resistors use {{R_p = (R_1 R_2)/(R_1 + R_2)}}!`,
              },
            ],
            hint: "Use {{R_p = (R_1 R_2)/(R_1 + R_2)}} and check that {{R_p}} is smaller than both resistors.",
            solution: [
              `{{R_p = (${R1} * ${R2}) / (${R1} + ${R2}) = ${R1 * R2} / ${R1 + R2} = ${Rp}}} Ω.`,
            ],
          };
        }
        if (mode === 1) {
          const R1 = rng.int(3, 25);
          const R2 = rng.int(3, 25);
          const R3 = rng.int(3, 25);
          const Rs = R1 + R2 + R3;
          return {
            prompt: `Three resistors of ${R1} Ω, ${R2} Ω, and ${R3} Ω are connected in series. Calculate their combined resistance in Ω.`,
            answer: { type: "number", value: Rs, tolerance: 0.05, display: `${Rs} Ω` },
            hint: "In series, resistances simply add: {{R_s = R_1 + R_2 + R_3}}.",
            solution: [`{{R_s = ${R1} + ${R2} + ${R3} = ${Rs}}} Ω.`],
          };
        }
        const iIn1 = clean(rng.int(4, 30) * 0.5);
        const iIn2 = clean(rng.int(2, 24) * 0.5);
        const totalIn = clean(iIn1 + iIn2);
        const iOut1 = clean(rng.int(2, Math.floor(totalIn * 2) - 2) * 0.5);
        const iOut2 = clean(totalIn - iOut1);
        return {
          prompt: `Four wires meet at a junction. Currents of ${num(iIn1)} A and ${num(iIn2)} A flow INTO the junction, while ${num(iOut1)} A flows OUT along a third wire. Calculate the current (in A) flowing OUT along the fourth wire.`,
          answer: { type: "number", value: iOut2, tolerance: 0.02, display: `${num(iOut2)} A` },
          hint: "Apply Kirchhoff's junction rule: total current IN equals total current OUT.",
          solution: [
            `Total incoming current: {{${num(iIn1)} + ${num(iIn2)} = ${num(totalIn)}}} A.`,
            `Fourth wire outgoing current: {{${num(totalIn)} - ${num(iOut1)} = ${num(iOut2)}}} A.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const [a, b, p] = rng.pick(HARMONIC_PAIRS);
          const scale = rng.pick([1, 2]);
          const R1 = a * scale;
          const R2 = b * scale;
          const Rp = p * scale;
          const Rs = rng.int(2, 20);
          const Rtot = Rs + Rp;
          return {
            prompt: `A ${Rs} Ω resistor is wired in series with a parallel combination of ${R1} Ω and ${R2} Ω resistors. Calculate the total equivalent resistance of the network in Ω.`,
            answer: { type: "number", value: Rtot, tolerance: 0.05, display: `${Rtot} Ω` },
            traps: [
              {
                spec: { type: "number", value: Rs + R1 + R2 },
                feedback: "First collapse the parallel pair ({{R_p = (R_1 R_2)/(R_1 + R_2)}}) before adding the series resistor!",
              },
            ],
            hint: "Collapse the parallel block first, then add the series resistor.",
            solution: [
              `Parallel block: {{R_p = (${R1} * ${R2}) / (${R1} + ${R2}) = ${Rp}}} Ω.`,
              `Total resistance: {{R_(\"tot\") = ${Rs} + ${Rp} = ${Rtot}}} Ω.`,
            ],
          };
        }
        // Current division between two parallel branches with guaranteed exact integers
        const V = rng.pick([12, 18, 24, 30, 36, 48, 60]);
        const divs = divisorsOf(V);
        const R1 = rng.pick(divs);
        const others = divs.filter((d) => d !== R1);
        const R2 = rng.pick(others);
        const I1 = V / R1;
        const I2 = V / R2;
        const Itot = I1 + I2;
        return {
          prompt: `A ${R1} Ω resistor and a ${R2} Ω resistor are wired in parallel, carrying a combined total current of ${Itot} A. Calculate the current through the ${R1} Ω resistor in A.`,
          answer: { type: "number", value: I1, tolerance: 0.02, display: `${I1} A` },
          traps: [
            {
              spec: { type: "number", value: I2 },
              feedback: `${I2} A is the current through the ${R2} Ω branch — remember smaller resistance takes the LARGER current!`,
            },
          ],
          hint: "Find {{R_p = (R_1 R_2)/(R_1 + R_2)}}, compute shared voltage {{V = I_(\"tot\") R_p}}, then divide by {{R_1}}.",
          solution: [
            `Shared p.d. across both branches: {{V = I_(\"tot\") * (R_1 R_2)/(R_1 + R_2) = ${Itot} * ${R1 * R2} / ${R1 + R2} = ${V}}} V.`,
            `Current through ${R1} Ω: {{I_1 = ${V} / ${R1} = ${I1}}} A (and {{${I2}}} A through ${R2} Ω).`,
          ],
        };
      }

      // Tier 3: Mixed network branch current/power OR unknown parallel resistor X
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const Vp = rng.pick([12, 18, 24, 36]);
        const divs = divisorsOf(Vp).filter((d) => d >= 3 && d <= 18);
        const R1 = rng.pick(divs);
        const R2 = rng.pick(divs.filter((d) => d !== R1));
        const I1 = Vp / R1;
        const I2 = Vp / R2;
        const Itot = I1 + I2;
        const Rs = rng.int(1, 8);
        const Vsupply = Vp + Itot * Rs;
        const askPower = rng.bool();
        if (askPower) {
          const P1 = Vp * I1;
          return {
            prompt: `An ideal ${Vsupply} V supply powers a ${Rs} Ω series resistor followed by a parallel pair of ${R1} Ω and ${R2} Ω resistors. Calculate the power dissipated in the ${R1} Ω resistor in W.`,
            answer: { type: "number", value: P1, tolerance: 0.2, display: `${P1} W` },
            hint: "Find total resistance {{R_s + R_p}}, total current {{I_(\"tot\")}}, p.d. across the parallel pair {{V_p = V - I_(\"tot\") R_s}}, then {{P_1 = V_p^2 / R_1}}.",
            solution: [
              `Parallel pair: {{R_p = (${R1} * ${R2}) / (${R1} + ${R2}) = ${num(roundTo((R1 * R2) / (R1 + R2), 3))}}} Ω.`,
              `Total current {{I_(\"tot\") = ${Itot}}} A drops {{${Itot} * ${Rs} = ${Itot * Rs}}} V across the ${Rs} Ω resistor, leaving {{V_p = ${Vp}}} V across the parallel pair.`,
              `Power in ${R1} Ω resistor: {{P_1 = ${Vp}^2 / ${R1} = ${P1}}} W.`,
            ],
          };
        }
        return {
          prompt: `An ideal ${Vsupply} V supply powers a ${Rs} Ω series resistor followed by a parallel pair of ${R1} Ω and ${R2} Ω resistors. Calculate the current through the ${R1} Ω resistor in A.`,
          answer: { type: "number", value: I1, tolerance: 0.02, display: `${I1} A` },
          traps: [
            {
              spec: { type: "number", value: I2 },
              feedback: `${I2} A is the current through the ${R2} Ω branch rather than the ${R1} Ω branch.`,
            },
          ],
          hint: `Collapse the parallel pair to find total current {{I_("tot")}}, subtract {{I_("tot") R_s}} from ${Vsupply} V to get {{V_p}}, then compute {{V_p / R_1}}.`,
          solution: [
            `Total current {{I_(\"tot\") = ${Itot}}} A drops {{${Itot * Rs}}} V across ${Rs} Ω, leaving {{V_p = ${Vsupply} - ${Itot * Rs} = ${Vp}}} V across the parallel pair.`,
            `Current through ${R1} Ω: {{I_1 = ${Vp} / ${R1} = ${I1}}} A.`,
          ],
        };
      }
      // Find unknown parallel resistor X
      const V = rng.pick([12, 18, 24, 30, 36, 48, 60]);
      const divs = divisorsOf(V);
      const R1 = rng.pick(divs);
      const X = rng.pick(divs.filter((d) => d !== R1));
      const I1 = V / R1;
      const IX = V / X;
      const Itot = I1 + IX;
      return {
        prompt: `A ${R1} Ω resistor and an unknown resistor {{X}} are connected in parallel across an ideal ${V} V battery. If the total current drawn from the battery is ${Itot} A, calculate {{X}} in Ω.`,
        answer: { type: "number", value: X, tolerance: 0.05, display: `${X} Ω` },
        hint: "Compute {{I_1 = V / R_1}}, subtract from {{I_(\"tot\")}} using KCL to get {{I_X}}, then {{X = V / I_X}}.",
        solution: [
          `Current in ${R1} Ω branch: {{I_1 = ${V} / ${R1} = ${I1}}} A.`,
          `Current in unknown branch: {{I_X = ${Itot} - ${I1} = ${IX}}} A.`,
          `Resistance {{X = ${V} / ${IX} = ${X}}} Ω.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: EMF, INTERNAL RESISTANCE & POTENTIAL DIVIDERS (SL, LEVEL 2)
  // ===========================================================================
  {
    id: "b2-circuits.emf-divider",
    topicId: "b2-circuits",
    title: "EMF, Internal Resistance & Potential Dividers",
    level: 2,
    ibLevel: "SL",
    guideRef: "emf-internal-resistance",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const r = clean(rng.int(1, 10) * 0.2);
          const I = clean(rng.int(1, 10) * 0.5);
          const lost = clean(I * r);
          const eps = clean(Math.ceil(lost) + rng.int(2, 16));
          const V = clean(eps - lost);
          const trapAdd = clean(eps + lost);
          return {
            prompt: `A battery of EMF ${num(eps)} V and internal resistance ${num(r)} Ω delivers a current of ${num(I)} A. Calculate its terminal potential difference in V.`,
            answer: { type: "number", value: V, tolerance: 0.02, display: `${num(V)} V` },
            traps: [
              {
                spec: { type: "number", value: trapAdd },
                feedback: "For a discharging cell, subtract lost volts {{I r}} from {{ε}}: {{V = ε - I r}}.",
              },
            ],
            hint: "Use {{V = ε - I r}}.",
            solution: [
              `Lost volts: {{I r = ${num(I)} * ${num(r)} = ${num(lost)}}} V.`,
              `Terminal p.d.: {{V = ${num(eps)} - ${num(lost)} = ${num(V)}}} V.`,
            ],
          };
        }
        // Basic potential divider
        const a = rng.int(1, 6);
        let b = rng.int(1, 6);
        if (b === a) b = a + 1;
        const sum = a + b;
        const mult = rng.int(1, 5);
        const Vin = sum * mult;
        const kScale = rng.int(1, 5);
        const R1 = a * kScale;
        const R2 = b * kScale;
        const Vout = b * mult;
        const trapV1 = a * mult;
        return {
          prompt: `An ideal ${Vin} V supply feeds a potential divider with {{R_1 = ${R1}}} kΩ and {{R_2 = ${R2}}} kΩ in series. Calculate the unloaded potential difference across {{R_2}} in V.`,
          answer: { type: "number", value: Vout, tolerance: 0.05, display: `${Vout} V` },
          traps: [
            {
              spec: { type: "number", value: trapV1 },
              feedback: `${trapV1} V is the p.d. across {{R_1}} — place {{R_2}} in the numerator of {{V_(\"out\") = V_(\"in\") R_2 / (R_1 + R_2)}}!`,
            },
          ],
          hint: "Apply {{V_(\"out\") = V_(\"in\") * R_2 / (R_1 + R_2)}}.",
          solution: [
            `{{V_(\"out\") = ${Vin} * ${R2} / (${R1} + ${R2}) = ${Vin} * ${R2} / ${R1 + R2} = ${Vout}}} V.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const I = clean(rng.int(1, 8) * 0.5);
          const r = clean(rng.int(1, 6) * 0.5);
          const R = rng.int(2, 18);
          const eps = clean(I * (R + r));
          const trapTotal = clean(R + r);
          return {
            prompt: `A cell of EMF ${num(eps)} V and internal resistance ${num(r)} Ω drives a current of ${num(I)} A through an external resistor {{R}}. Calculate {{R}} in Ω.`,
            answer: { type: "number", value: R, tolerance: 0.05, display: `${R} Ω` },
            traps: [
              {
                spec: { type: "number", value: trapTotal },
                feedback: `${num(trapTotal)} Ω is total resistance {{R + r}}; subtract internal resistance {{${num(r)}}} Ω!`,
              },
            ],
            hint: "From {{ε = I(R + r)}}, compute {{R + r = ε / I}} then subtract {{r}}.",
            solution: [
              `Total resistance: {{R + r = ${num(eps)} / ${num(I)} = ${num(trapTotal)}}} Ω.`,
              `External resistance: {{R = ${num(trapTotal)} - ${num(r)} = ${R}}} Ω.`,
            ],
          };
        }
        if (mode === 1) {
          // Two (I, V) readings -> determine internal resistance r or EMF eps
          const r = clean(rng.int(1, 10) * 0.2);
          const I1 = clean(rng.int(1, 4) * 0.5);
          const dI = clean(rng.int(2, 6) * 0.5);
          const I2 = clean(I1 + dI);
          const eps = clean(Math.ceil(I2 * r) + rng.int(3, 12));
          const V1 = clean(eps - I1 * r);
          const V2 = clean(eps - I2 * r);
          if (rng.bool()) {
            return {
              prompt: `A battery has terminal p.d. ${num(V1)} V at current ${num(I1)} A, and ${num(V2)} V at current ${num(I2)} A. Calculate its internal resistance {{r}} in Ω.`,
              answer: { type: "number", value: r, tolerance: 0.02, display: `${num(r)} Ω` },
              hint: "Use the negative gradient of {{V = ε - I r}}: {{r = (V_1 - V_2) / (I_2 - I_1)}}.",
              solution: [
                `{{r = (${num(V1)} - ${num(V2)}) / (${num(I2)} - ${num(I1)}) = ${num(clean(V1 - V2))} / ${num(dI)} = ${num(r)}}} Ω.`,
              ],
            };
          }
          return {
            prompt: `A battery has terminal p.d. ${num(V1)} V when delivering ${num(I1)} A, and ${num(V2)} V when delivering ${num(I2)} A. Determine its EMF {{ε}} in V.`,
            answer: { type: "number", value: eps, tolerance: 0.05, display: `${num(eps)} V` },
            traps: [
              {
                spec: { type: "number", value: V1 },
                feedback: `${num(V1)} V is the terminal p.d. at ${num(I1)} A, not open-circuit EMF — first find {{r}} and compute {{ε = V_1 + I_1 r}}!`,
              },
            ],
            hint: "First find {{r = (V_1 - V_2)/(I_2 - I_1)}}, then substitute into {{ε = V_1 + I_1 r}}.",
            solution: [
              `Internal resistance: {{r = (${num(V1)} - ${num(V2)}) / (${num(I2)} - ${num(I1)}) = ${num(r)}}} Ω.`,
              `EMF: {{ε = ${num(V1)} + ${num(I1)} * ${num(r)} = ${num(eps)}}} V.`,
            ],
          };
        }
        // Sensor divider: find required fixed resistor R1
        const a = rng.int(1, 5);
        let b = rng.int(1, 5);
        if (b === a) b = a + 1;
        const mult = rng.int(1, 4);
        const V1 = a * mult;
        const V2 = b * mult;
        const Vin = V1 + V2;
        const k = rng.int(1, 6);
        const R2 = b * k;
        const R1 = a * k;
        return {
          prompt: `An ideal ${Vin} V supply powers a fixed resistor {{R_1}} in series with a sensor of resistance ${R2} kΩ. Calculate the value of {{R_1}} (in kΩ) required so that the unloaded p.d. across the sensor is ${V2} V.`,
          answer: { type: "number", value: R1, tolerance: 0.05, display: `${R1} kΩ` },
          traps: [
            {
              spec: { type: "number", value: R1 + R2 },
              feedback: `${R1 + R2} kΩ is the total series resistance {{R_1 + R_2}}; subtract the ${R2} kΩ sensor!`,
            },
          ],
          hint: "Find {{V_1 = V_(\"in\") - V_2}}, then apply the ratio {{R_1 / R_2 = V_1 / V_2}}.",
          solution: [
            `Potential difference across {{R_1}}: {{V_1 = ${Vin} - ${V2} = ${V1}}} V.`,
            `Using {{R_1 / ${R2} = ${V1} / ${V2}}}, we get {{R_1 = ${R1}}} kΩ.`,
          ],
        };
      }

      // Tier 3: Max power transfer, battery charging, or loaded potential divider
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const r = rng.pick([0.5, 1, 1.5, 2, 2.5, 3, 4]);
        const Imax = rng.int(2, 8);
        const eps = clean(2 * Imax * r);
        const Pmax = clean(Imax * Imax * r);
        const trapShort = clean(4 * Pmax);
        return {
          prompt: `A real power source has EMF ${num(eps)} V and internal resistance ${num(r)} Ω. Calculate the maximum electrical power (in W) it can deliver to an external variable resistor.`,
          answer: { type: "number", value: Pmax, tolerance: 0.1, display: `${num(Pmax)} W` },
          traps: [
            {
              spec: { type: "number", value: trapShort },
              feedback: "{{ε^2 / r}} is short-circuit internal heating — maximum load power occurs at {{R = r}}, giving {{P_(\"max\") = ε^2 / (4r)}}!",
            },
          ],
          hint: "Maximum power transfer occurs when load resistance {{R = r}}, yielding {{P_(\"max\") = ε^2 / (4 r)}}.",
          solution: [
            `Set {{R = r = ${num(r)}}} Ω: current {{I = ${num(eps)} / (2 * ${num(r)}) = ${Imax}}} A.`,
            `Maximum load power: {{P_(\"max\") = I^2 R = ${Imax}^2 * ${num(r)} = ${num(Pmax)}}} W.`,
          ],
        };
      }
      if (mode === 1) {
        const eps = rng.int(6, 24);
        const r = clean(rng.int(1, 5) * 0.2);
        const I = rng.int(2, 12);
        const Vc = clean(eps + I * r);
        const trapSum = clean((Vc + eps) / r);
        return {
          prompt: `A rechargeable battery of EMF ${eps} V and internal resistance ${num(r)} Ω is charged by a ${num(Vc)} V DC supply of negligible internal resistance. Calculate the charging current in A.`,
          answer: { type: "number", value: I, tolerance: 0.05, display: `${I} A` },
          traps: [
            {
              spec: { type: "number", value: trapSum },
              feedback: "The battery's EMF opposes the charger, so subtract {{ε}} from {{V_(\"charger\")}}: {{I = (V_(\"charger\") - ε) / r}}!",
            },
          ],
          hint: "During charging, {{V_(\"charger\") = ε + I r}}, so {{I = (V_(\"charger\") - ε) / r}}.",
          solution: [
            `Net charging voltage: {{${num(Vc)} - ${eps} = ${num(clean(Vc - eps))}}} V.`,
            `Charging current: {{I = ${num(clean(Vc - eps))} / ${num(r)} = ${I}}} A.`,
          ],
        };
      }
      // Loaded potential divider with clean harmonic pair
      const [R2, RL, Reff] = rng.pick(HARMONIC_PAIRS.slice(0, 12));
      const R1 = rng.int(2, 16);
      const Itot = rng.pick([0.5, 1, 1.5, 2]);
      const Vin = clean(Itot * (R1 + Reff));
      const Vloaded = clean(Itot * Reff);
      const Vunloaded = roundTo((Vin * R2) / (R1 + R2), 2);
      const traps =
        Math.abs(Vunloaded - Vloaded) > 0.05
          ? [
              {
                spec: { type: "number" as const, value: Vunloaded, tolerance: 0.05 },
                feedback: `${num(Vunloaded)} V ignores the ${RL} Ω load wired in parallel across {{R_2}}!`,
              },
            ]
          : undefined;
      return {
        prompt: `An ideal ${num(Vin)} V supply drives a potential divider with {{R_1 = ${R1}}} Ω and {{R_2 = ${R2}}} Ω. A ${RL} Ω load resistor is connected in parallel across {{R_2}}. Calculate the loaded output p.d. across the load in V.`,
        answer: { type: "number", value: Vloaded, tolerance: 0.05, display: `${num(Vloaded)} V` },
        traps,
        hint: "First combine {{R_2}} and the load in parallel to get {{R_(\"eff\")}}, then apply {{V_(\"out\") = V_(\"in\") R_(\"eff\") / (R_1 + R_(\"eff\"))}}.",
        solution: [
          `Parallel bottom section: {{R_(\"eff\") = (${R2} * ${RL}) / (${R2} + ${RL}) = ${Reff}}} Ω.`,
          `Loaded output p.d.: {{V_(\"out\") = ${num(Vin)} * ${Reff} / (${R1} + ${Reff}) = ${num(Vloaded)}}} V.`,
        ],
      };
    },
  },
];
