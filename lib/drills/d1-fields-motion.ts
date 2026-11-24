import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const G = 6.67e-11;
const K_E = 8.99e9;
const E_CHG = 1.60e-19;
const M_P = 1.67e-27;
const U_MASS = 1.66e-27;
const MU0_OVER_2PI = 2.0e-7;

function sig3(n: number): number {
  return parseFloat(n.toPrecision(3));
}

function fmtSci(n: number): string {
  const s = sig3(n);
  const sign = s < 0 ? "-" : "";
  const abs = Math.abs(s);
  const exp = Math.floor(Math.log10(abs));
  const mant = clean(abs / Math.pow(10, exp), 3);
  return `{{${sign}${mant} * 10^(${exp})}}`;
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 — SL, Level 1: Gravitation, Orbits & Coulomb / Uniform E-Fields
  // ===========================================================================
  {
    id: "d1-fields-motion.gravity-coulomb",
    topicId: "d1-fields-motion",
    title: "Gravitation, Orbits & Coulomb's Law",
    level: 1,
    ibLevel: "SL",
    guideRef: "gravitational-fields-orbits",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      // ----- TIER 1: Inverse-square scaling, uniform E = V/d, surface g scaling -----
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Inverse-square force scaling
          const mult = rng.pick([2, 3, 4, 5]);
          const qScale = rng.pick([1, 2, 3]);
          const baseUnit = rng.int(2, 12);
          const f0 = baseUnit * mult * mult;
          const ans = clean((f0 * qScale) / (mult * mult));
          const isGravity = rng.bool();
          const trapNoSquare = clean((f0 * qScale) / mult);
          const prompt = isGravity
            ? `Two masses attract each other with a gravitational force of {{${f0}}} N at separation {{r}}. If one mass is multiplied by {{${qScale}}} and the separation is multiplied by {{${mult}}}, calculate the new gravitational force in N.`
            : `Two point charges repel each other with a force of {{${f0}}} N at separation {{r}}. If one charge is multiplied by {{${qScale}}} and the separation is multiplied by {{${mult}}}, calculate the new electrostatic force in N.`;
          return {
            prompt,
            answer: { type: "number", value: ans, tolerance: 0.05, display: `${num(ans)} N` },
            traps: [
              {
                spec: { type: "number", value: trapNoSquare, tolerance: 0.05 },
                feedback: `Remember the inverse-**square** law ({{1 / r^2}}): multiplying {{r}} by {{${mult}}} divides the force by {{${mult}^2 = ${mult * mult}}}, not by {{${mult}}}.`,
              },
            ],
            hint: `Use {{F ∝ (m_1 m_2) / r^2}} (or {{q_1 q_2 / r^2}}): divide by {{${mult}^2}}.`,
            solution: [
              `By the inverse-square law, multiplying separation by {{${mult}}} divides force by {{${mult}^2 = ${mult * mult}}}.`,
              `{{F' = (${f0} * ${qScale}) / ${mult * mult} = ${num(ans)}}} N.`,
            ],
          };
        }
        if (mode === 1) {
          // Uniform parallel-plate field E = V / d
          const dCm = rng.pick([0.5, 1.0, 2.0, 2.5, 4.0, 5.0]);
          const eK = rng.int(4, 45) * 1000; // V m^-1
          const v = clean((eK * dCm) / 100);
          const trapCm = clean(v / dCm);
          return {
            prompt: `Two large parallel conducting plates separated by {{${num(dCm)}}} cm have a potential difference of {{${num(v)}}} V between them. Calculate the uniform electric field strength between the plates in V m⁻¹.`,
            answer: { type: "number", value: eK, tolerance: 5, display: `${num(eK)} V m⁻¹` },
            traps: [
              {
                spec: { type: "number", value: trapCm, tolerance: 1 },
                feedback: "Convert the plate separation from cm to metres ({{÷ 100}}) before dividing {{V / d}}.",
              },
            ],
            hint: "Convert {{d}} from cm to m, then compute {{E = V / d}}.",
            solution: [
              `Convert separation to metres: {{d = ${num(dCm)} / 100 = ${num(clean(dCm / 100))}}} m.`,
              `{{E = V / d = ${num(v)} / ${num(clean(dCm / 100))} = ${num(eK)}}} V m⁻¹.`,
            ],
          };
        }
        // Surface g scaling on an exoplanet
        const mRatio = rng.pick([2, 3, 4, 6, 8, 9, 12]);
        const rRatio = rng.pick([2, 3, 4]);
        const g0 = rng.pick([9.8, 10]);
        const ans = roundTo((g0 * mRatio) / (rRatio * rRatio), 2);
        const trapNoSq = roundTo((g0 * mRatio) / rRatio, 2);
        return {
          prompt: `An exoplanet has {{${mRatio}}} times the mass and {{${rRatio}}} times the radius of a reference planet whose surface gravitational field strength is {{${num(g0)}}} N kg⁻¹. Calculate the exoplanet's surface gravitational field strength in N kg⁻¹ (to 2 d.p.).`,
          answer: { type: "number", value: ans, tolerance: 0.03, display: `${num(ans)} N kg⁻¹` },
          traps:
            Math.abs(trapNoSq - ans) > 0.1
              ? [
                  {
                    spec: { type: "number", value: trapNoSq, tolerance: 0.05 },
                    feedback: `Don't forget to square the radius ratio in {{g = G M / R^2}}: divide by {{${rRatio}^2 = ${rRatio * rRatio}}}.`,
                  },
                ]
              : undefined,
          hint: `Use {{g' = g_0 * (M'/M) / (R'/R)^2}}.`,
          solution: [
            `From {{g = G M / R^2}}, scale factor is {{${mRatio} / ${rRatio}^2 = ${mRatio} / ${rRatio * rRatio}}}.`,
            `{{g' = ${num(g0)} * ${mRatio} / ${rRatio * rRatio} = ${num(ans)}}} N kg⁻¹.`,
          ],
        };
      }

      // ----- TIER 2: Coulomb force, planetary g = GM/R^2, Kepler's 3rd Law -----
      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Coulomb's law numerical calculation
          const q1 = rng.int(2, 12); // uC
          const q2 = rng.int(2, 12); // uC
          const r = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6]);
          const fExact = (K_E * q1 * 1e-6 * q2 * 1e-6) / (r * r);
          const ans = sig3(fExact);
          const trapNoSq = sig3(fExact * r);
          const tol = Math.max(0.02, clean(ans * 0.015, 3));
          return {
            prompt: `Two point charges {{+${q1}.0}} μC and {{+${q2}.0}} μC are separated by {{${num(r)}}} m in vacuum ({{k = 8.99 * 10^9}} N m² C⁻²). Calculate the magnitude of the electrostatic force between them in N (to 3 s.f.).`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} N` },
            traps:
              Math.abs(trapNoSq - ans) > tol * 2
                ? [
                    {
                      spec: { type: "number", value: trapNoSq, tolerance: Math.max(0.02, clean(trapNoSq * 0.02, 3)) },
                      feedback: `You forgot to square {{r = ${num(r)}}} m in {{F = k q_1 q_2 / r^2}}.`,
                    },
                  ]
                : undefined,
            hint: "Convert μC to C ({{* 10^(-6)}}) and substitute into {{F = k q_1 q_2 / r^2}}.",
            solution: [
              `{{F = (8.99 * 10^9 * ${q1}.0 * 10^(-6) * ${q2}.0 * 10^(-6)) / ${num(r)}^2}}.`,
              `{{F = ${num(ans)}}} N (to 3 s.f.).`,
            ],
          };
        }
        if (mode === 1) {
          // Planet surface g = GM / R^2
          const mMant = roundTo(rng.int(15, 95) / 10, 1); // 1.5 .. 9.5
          const mExp = rng.pick([23, 24, 25]);
          const rMant = roundTo(rng.int(20, 85) / 10, 1); // 2.0 .. 8.5
          const rExp = mExp === 25 ? 7 : 6;
          const mass = mMant * Math.pow(10, mExp);
          const rad = rMant * Math.pow(10, rExp);
          const gExact = (G * mass) / (rad * rad);
          const ans = sig3(gExact);
          const tol = Math.max(0.02, clean(ans * 0.015, 3));
          return {
            prompt: `A spherical planet has mass {{${num(mMant)} * 10^(${mExp})}} kg and radius {{${num(rMant)} * 10^(${rExp})}} m. Using {{G = 6.67 * 10^(-11)}} N m² kg⁻², calculate its surface gravitational field strength in N kg⁻¹ (to 3 s.f.).`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} N kg⁻¹` },
            hint: "Use {{g = G M / R^2}}, squaring both the mantissa and the power of 10 in {{R}}.",
            solution: [
              `{{g = (6.67 * 10^(-11) * ${num(mMant)} * 10^(${mExp})) / (${num(rMant)} * 10^(${rExp}))^2}}.`,
              `{{g = ${num(ans)}}} N kg⁻¹ (to 3 s.f.).`,
            ],
          };
        }
        // Kepler's 3rd Law ratio
        const t1 = roundTo(rng.int(12, 60) / 10, 1); // 1.2 .. 6.0 days
        const rRatio = rng.pick([2, 3, 4, 5, 6, 9]);
        const t2Exact = t1 * Math.pow(rRatio, 1.5);
        const ans = sig3(t2Exact);
        const tol = Math.max(0.05, clean(ans * 0.015, 3));
        const trapLin = sig3(t1 * rRatio);
        return {
          prompt: `Moon A orbits a planet at circular radius {{R}} with period {{${num(t1)}}} days. Moon B orbits the same planet at circular radius {{${rRatio} R}}. Using Kepler's Third Law, calculate the orbital period of Moon B in days (to 3 s.f.).`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} days` },
          traps: [
            {
              spec: { type: "number", value: trapLin, tolerance: Math.max(0.05, clean(trapLin * 0.02, 3)) },
              feedback: "Period is NOT proportional to {{r}}: Kepler's Third Law gives {{T^2 ∝ r^3}}, so multiply by {{r^(3/2)}}.",
            },
          ],
          hint: `Use {{(T_B / T_A)^2 = (${rRatio})^3}}, then take the square root.`,
          solution: [
            `By Kepler's Third Law: {{(T_B / ${num(t1)})^2 = ${rRatio}^3 = ${rRatio * rRatio * rRatio}}}.`,
            `{{T_B = ${num(t1)} * sqrt(${rRatio * rRatio * rRatio}) = ${num(ans)}}} days.`,
          ],
        };
      }

      // ----- TIER 3: Zero-field point, orbital speed with altitude r=R+h, Millikan n -----
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Zero electric field point between +q and +n^2 q
        const n = rng.pick([2, 3, 4, 5]);
        const qBase = rng.int(1, 5);
        const q2 = qBase * n * n;
        const unitCm = rng.int(4, 15);
        const dCm = unitCm * (1 + n);
        const xCm = unitCm;
        const trapNoRoot = roundTo(dCm / (1 + n * n), 1);
        return {
          prompt: `Two positive point charges {{+${qBase}.0}} μC and {{+${q2}.0}} μC are fixed {{${dCm}}} cm apart. Calculate the distance (in cm) from the {{+${qBase}.0}} μC charge along the line joining them where the net electric field is zero.`,
          answer: { type: "number", value: xCm, tolerance: 0.1, display: `${xCm} cm` },
          traps:
            Math.abs(trapNoRoot - xCm) > 0.5
              ? [
                  {
                    spec: { type: "number", value: trapNoRoot, tolerance: 0.15 },
                    feedback: `Take the square root of the charge ratio {{${q2} / ${qBase} = ${n * n}}} to get {{${n}}}, not {{${n * n}}}.`,
                  },
                ]
              : undefined,
          hint: `Solve {{${qBase} / x^2 = ${q2} / (${dCm} - x)^2}} by taking square roots of both sides.`,
          solution: [
            `Equating field magnitudes: {{${qBase} / x^2 = ${q2} / (${dCm} - x)^2 ⇒ ((${dCm} - x) / x)^2 = ${n * n}}}.`,
            `Take positive square root: {{(${dCm} - x) / x = ${n} ⇒ ${dCm} = ${1 + n} x ⇒ x = ${xCm}}} cm.`,
          ],
        };
      }
      if (mode === 1) {
        // Circular orbital speed at altitude h above planet of mass M, radius R
        const mMant = roundTo(rng.int(20, 85) / 10, 1); // * 10^24 kg
        const rKm = rng.int(40, 80) * 100; // 4000..8000 km
        const hKm = rng.int(3, 25) * 100; // 300..2500 km
        const rTotM = (rKm + hKm) * 1000;
        const vExact = Math.sqrt((G * mMant * 1e24) / rTotM);
        const ans = sig3(vExact);
        const tol = Math.max(20, clean(ans * 0.015, 3));
        const trapAltOnly = sig3(Math.sqrt((G * mMant * 1e24) / (hKm * 1000)));
        return {
          prompt: `A satellite orbits a planet (mass {{${num(mMant)} * 10^24}} kg, radius {{${rKm}}} km) in a circular orbit at altitude {{${hKm}}} km above the surface. Calculate its orbital speed in m s⁻¹ (to 3 s.f.).`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} m s⁻¹` },
          traps:
            Math.abs(trapAltOnly - ans) > tol * 2
              ? [
                  {
                    spec: { type: "number", value: trapAltOnly, tolerance: Math.max(20, clean(trapAltOnly * 0.02, 3)) },
                    feedback: `Add the planet's radius to the altitude: {{r = R + h = ${rKm + hKm}}} km!`,
                  },
                ]
              : undefined,
          hint: "Compute centre-to-centre radius {{r = (R + h) * 1000}} m, then apply {{v = sqrt(G M / r)}}.",
          solution: [
            `Centre-to-centre radius: {{r = (${rKm} + ${hKm}) * 10^3 = ${rTotM}}} m.`,
            `{{v = sqrt((6.67 * 10^(-11) * ${num(mMant)} * 10^24) / ${rTotM}) = ${num(ans)}}} m s⁻¹.`,
          ],
        };
      }
      // Millikan oil-drop integer electron count
      const nElec = rng.int(2, 9);
      const dCm = rng.pick([1.0, 1.5, 2.0, 2.5]);
      const vMult = rng.pick([0.5, 1.0, 1.5, 2.0]);
      // q = n * 1.60e-19; choose V = 981 * vMult * (dCm / 1.0) so E = V/d = 9.81e4 * vMult
      // Then m = q * E / 9.81 = n * 1.60e-19 * 1e4 * vMult = n * 1.60 * vMult * 1e-15 kg!
      const vVolts = roundTo(981 * vMult * dCm, 1);
      const mCoeff = roundTo(nElec * 1.6 * vMult, 2);
      return {
        prompt: `In a Millikan experiment, an oil drop of mass {{${num(mCoeff)} * 10^(-15)}} kg hovers motionless between horizontal parallel plates {{${num(dCm)}}} cm apart with potential difference {{${num(vVolts)}}} V ({{g = 9.81}} m s⁻², {{e = 1.60 * 10^(-19)}} C). Calculate the integer number of excess electrons on the drop.`,
        answer: { type: "number", value: nElec, tolerance: 0.05, display: `${nElec} electrons` },
        hint: "Use {{q (V / d) = m g}} to find {{q}}, then divide by {{e = 1.60 * 10^(-19)}} C.",
        solution: [
          `Electric field: {{E = V / d = ${num(vVolts)} / ${num(clean(dCm / 100))} = ${num(clean(98100 * vMult))}}} V m⁻¹.`,
          `Charge: {{q = (m g) / E = (${num(mCoeff)} * 10^(-15) * 9.81) / ${num(clean(98100 * vMult))} = ${num(clean(nElec * 1.6))} * 10^(-19)}} C.`,
          `Number of excess electrons: {{n = q / e = ${nElec}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 — SL, Level 2: Magnetic Forces, Velocity Selector & Cyclotron Paths
  // ===========================================================================
  {
    id: "d1-fields-motion.em-force",
    topicId: "d1-fields-motion",
    title: "EM Forces, Velocity Selector & Cyclotron Radius",
    level: 2,
    ibLevel: "SL",
    guideRef: "motion-em-fields",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      // ----- TIER 1: F = BIL, velocity selector v = E/B, F = qvB -----
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // F = B I L perpendicular
          const b = roundTo(rng.int(2, 18) / 20, 2); // 0.10 .. 0.90 T
          const current = roundTo(rng.int(10, 80) / 10, 1); // 1.0 .. 8.0 A
          const len = roundTo(rng.int(2, 15) / 10, 1); // 0.2 .. 1.5 m
          const ans = roundTo(b * current * len, 3);
          return {
            prompt: `A straight wire of length {{${num(len)}}} m carries a current of {{${num(current)}}} A perpendicular to a uniform magnetic field of {{${num(b)}}} T. Calculate the magnitude of the magnetic force on the wire in N.`,
            answer: { type: "number", value: ans, tolerance: 0.01, display: `${num(ans)} N` },
            hint: "Use {{F = B I L sin 90° = B I L}}.",
            solution: [`{{F = B I L = ${num(b)} * ${num(current)} * ${num(len)} = ${num(ans)}}} N.`],
          };
        }
        if (mode === 1) {
          // Velocity selector v = E / B
          const b = roundTo(rng.int(2, 15) * 0.02, 2); // 0.04 .. 0.30 T
          const vBase = rng.int(2, 9) * 5; // 10 .. 45 (× 10^4 m s^-1)
          const v = vBase * 10000;
          const eField = clean(v * b);
          const trapMult = clean(eField * b);
          return {
            prompt: `A crossed-field velocity selector has {{E = ${num(eField)}}} V m⁻¹ perpendicular to {{B = ${num(b)}}} T. Calculate the speed (in m s⁻¹) of ions that pass straight through undeflected.`,
            answer: { type: "number", value: v, tolerance: clean(v * 0.01), display: `${num(v)} m s⁻¹` },
            traps: [
              {
                spec: { type: "number", value: trapMult, tolerance: Math.max(1, clean(trapMult * 0.02)) },
                feedback: "Divide {{E}} by {{B}} (not multiply!): {{q E = q v B ⇒ v = E / B}}.",
              },
            ],
            hint: "Balance {{q E = q v B}} to obtain {{v = E / B}}.",
            solution: [`{{v = E / B = ${num(eField)} / ${num(b)} = ${num(v)}}} m s⁻¹.`],
          };
        }
        // F = q v B for microcoulomb charge (answer in mN)
        const qMicro = rng.int(2, 12); // uC
        const vSpeed = rng.int(2, 15) * 100; // 200 .. 1500 m s^-1
        const b = roundTo(rng.int(2, 12) / 10, 1); // 0.2 .. 1.2 T
        const fMilli = roundTo(qMicro * 1e-6 * vSpeed * b * 1000, 3);
        return {
          prompt: `A particle carrying charge {{+${qMicro}.0}} μC moves at {{${vSpeed}}} m s⁻¹ perpendicular to a uniform magnetic field of {{${num(b)}}} T. Calculate the magnitude of the magnetic force on the particle in mN ({{10^(-3)}} N).`,
          answer: { type: "number", value: fMilli, tolerance: 0.02, display: `${num(fMilli)} mN` },
          hint: "Convert μC to C, compute {{F = q v B}} in N, then multiply by {{1000}} for mN.",
          solution: [
            `{{F = q v B = (${qMicro}.0 * 10^(-6)) * ${vSpeed} * ${num(b)} = ${num(clean(fMilli / 1000))}}} N.`,
            `In millinewtons: {{F = ${num(fMilli)}}} mN.`,
          ],
        };
      }

      // ----- TIER 2: Angled BIL sin θ, cyclotron radius r = mv/(qB), parallel wires -----
      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Angled wire F = B I L sin θ
          const theta = rng.pick([30, 60]);
          const b = roundTo(rng.int(3, 15) / 10, 1);
          const current = roundTo(rng.int(15, 85) / 10, 1);
          const len = roundTo(rng.int(3, 12) / 10, 1);
          const fExact = b * current * len * Math.sin((theta * Math.PI) / 180);
          const fCos = b * current * len * Math.cos((theta * Math.PI) / 180);
          const ans = sig3(fExact);
          const trapCos = sig3(fCos);
          const tol = Math.max(0.01, clean(ans * 0.015, 3));
          return {
            prompt: `A straight wire of length {{${num(len)}}} m carries a current of {{${num(current)}}} A at an angle of {{${theta}°}} to a uniform magnetic field of {{${num(b)}}} T. Calculate the magnitude of the magnetic force on the wire in N (to 3 s.f.).`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} N` },
            traps: [
              {
                spec: { type: "number", value: trapCos, tolerance: Math.max(0.01, clean(trapCos * 0.02, 3)) },
                feedback: `Use {{sin ${theta}°}}, not {{cos ${theta}°}}, in {{F = B I L sin θ}}.`,
              },
            ],
            hint: `Substitute into {{F = B I L sin ${theta}°}}.`,
            solution: [
              `{{F = B I L sin ${theta}° = ${num(b)} * ${num(current)} * ${num(len)} * sin ${theta}°}}.`,
              `{{F = ${num(ans)}}} N.`,
            ],
          };
        }
        if (mode === 1) {
          // Cyclotron circular radius for proton or alpha particle (in cm)
          const isAlpha = rng.bool();
          const m = isAlpha ? 4 * M_P : M_P;
          const q = isAlpha ? 2 * E_CHG : E_CHG;
          const vMant = roundTo(rng.int(15, 65) / 10, 1); // * 10^6 m s^-1
          const b = roundTo(rng.int(2, 12) / 10, 1); // 0.2 .. 1.2 T
          const rCm = sig3(((m * vMant * 1e6) / (q * b)) * 100);
          const tol = Math.max(0.08, clean(rCm * 0.015, 3));
          const name = isAlpha
            ? "An alpha particle ({{m = 6.68 * 10^(-27)}} kg, {{q = 3.20 * 10^(-19)}} C)"
            : "A proton ({{m = 1.67 * 10^(-27)}} kg, {{q = 1.60 * 10^(-19)}} C)";
          return {
            prompt: `${name} enters a uniform {{${num(b)}}} T magnetic field perpendicularly at {{${num(vMant)} * 10^6}} m s⁻¹. Calculate the radius of its circular path in cm (to 3 s.f.).`,
            answer: { type: "number", value: rCm, tolerance: tol, display: `${num(rCm)} cm` },
            hint: "Equate {{q v B = m v^2 / r}} to get {{r = m v / (q B)}}, then convert metres to cm.",
            solution: [
              `{{r = (m v) / (q B) = (${isAlpha ? "6.68" : "1.67"} * 10^(-27) * ${num(vMant)} * 10^6) / (${isAlpha ? "3.20" : "1.60"} * 10^(-19) * ${num(b)})}}.`,
              `{{r = ${num(clean(rCm / 100, 3))}}} m = {{${num(rCm)}}} cm.`,
            ],
          };
        }
        // Force between two parallel wires (in mN)
        const i1 = rng.int(4, 20);
        const i2 = rng.int(4, 20);
        const rCm = rng.pick([2.0, 2.5, 4.0, 5.0, 8.0, 10.0]);
        const len = roundTo(rng.int(10, 40) / 10, 1); // 1.0 .. 4.0 m
        const fMilli = sig3(((MU0_OVER_2PI * i1 * i2 * len) / (rCm / 100)) * 1000);
        const tol = Math.max(0.01, clean(fMilli * 0.015, 3));
        return {
          prompt: `Two long parallel wires separated by {{${num(rCm)}}} cm carry steady currents of {{${i1}.0}} A and {{${i2}.0}} A. Using {{μ_0 = 4 pi * 10^(-7)}} T m A⁻¹, calculate the magnitude of the magnetic force on a {{${num(len)}}} m section of either wire in mN (to 3 s.f.).`,
          answer: { type: "number", value: fMilli, tolerance: tol, display: `${num(fMilli)} mN` },
          hint: "Use {{F = (μ_0 I_1 I_2 L) / (2 pi r)}} with {{μ_0 / (2 pi) = 2.00 * 10^(-7)}} N A⁻² and {{r}} in metres.",
          solution: [
            `{{F / L = (2.00 * 10^(-7) * ${i1}.0 * ${i2}.0) / ${num(clean(rCm / 100))}}} N m⁻¹.`,
            `Multiply by {{L = ${num(len)}}} m and convert to mN: {{F = ${num(fMilli)}}} mN.`,
          ],
        };
      }

      // ----- TIER 3: Isotope detector Δd = 2Δr, wire levitation, V-accelerated proton radius -----
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Isotope separation Δd = 2 (Δm v) / (q B) in mm
        const a1 = rng.pick([12, 20, 35, 39, 63]);
        const deltaA = rng.pick([1, 2, 3, 4]);
        const a2 = a1 + deltaA;
        const vMant = roundTo(rng.int(15, 45) / 10, 1); // * 10^5 m s^-1
        const b = roundTo(rng.int(2, 8) / 10, 1); // 0.2 .. 0.8 T
        const deltaR = (deltaA * U_MASS * vMant * 1e5) / (E_CHG * b);
        const deltaDMm = sig3(2 * deltaR * 1000);
        const trapRadius = sig3(deltaR * 1000);
        const tol = Math.max(0.1, clean(deltaDMm * 0.015, 3));
        return {
          prompt: `Two singly ionised isotopes of mass {{${a1}}} u and {{${a2}}} u ({{1}} u = {{1.66 * 10^(-27)}} kg, {{q = 1.60 * 10^(-19)}} C) enter a uniform {{${num(b)}}} T magnetic field perpendicularly at {{${num(vMant)} * 10^5}} m s⁻¹ and complete semicircles onto a flat detector. Calculate the separation between their impact marks on the detector in mm (to 3 s.f.).`,
          answer: { type: "number", value: deltaDMm, tolerance: tol, display: `${num(deltaDMm)} mm` },
          traps: [
            {
              spec: { type: "number", value: trapRadius, tolerance: Math.max(0.1, clean(trapRadius * 0.02, 3)) },
              feedback: "You calculated the difference in **radii** {{r_2 - r_1}} — after a semicircle, ions land a full **diameter** {{2 r}} from the slit, so multiply by 2!",
            },
          ],
          hint: "Each ion lands at diameter {{2 r = 2 m v / (q B)}} from the entry slit, so {{Δd = 2 Δm v / (q B)}}.",
          solution: [
            `Mass difference: {{Δm = ${deltaA} * 1.66 * 10^(-27) = ${num(clean(deltaA * 1.66, 3))} * 10^(-27)}} kg.`,
            `Detector separation: {{Δd = (2 Δm v) / (q B) = (2 * ${num(clean(deltaA * 1.66, 3))} * 10^(-27) * ${num(vMant)} * 10^5) / (1.60 * 10^(-19) * ${num(b)})}}.`,
            `{{Δd = ${num(deltaDMm)}}} mm.`,
          ],
        };
      }
      if (mode === 1) {
        // Magnetic levitation of a horizontal wire: B I L = m g
        const massG = rng.int(12, 85); // grams
        const len = roundTo(rng.int(3, 12) / 10, 1); // m
        const b = roundTo(rng.int(2, 10) / 10, 1); // T
        const iExact = ((massG / 1000) * 9.81) / (b * len);
        const ans = sig3(iExact);
        const tol = Math.max(0.02, clean(ans * 0.015, 3));
        return {
          prompt: `A straight horizontal wire of mass {{${massG}}} g and length {{${num(len)}}} m rests perpendicular to a horizontal uniform magnetic field of {{${num(b)}}} T. Using {{g = 9.81}} m s⁻², calculate the minimum current (in A, to 3 s.f.) needed to levitate the wire.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} A` },
          hint: "Convert mass from g to kg, then equate {{B I L = m g}}.",
          solution: [
            `Convert mass: {{m = ${num(clean(massG / 1000))}}} kg.`,
            `Equilibrium {{B I L = m g ⇒ I = (${num(clean(massG / 1000))} * 9.81) / (${num(b)} * ${num(len)}) = ${num(ans)}}} A.`,
          ],
        };
      }
      // Proton accelerated across voltage V enters perpendicular B-field -> radius in cm
      const vKv = rng.int(2, 25); // kV
      const b = roundTo(rng.int(2, 10) / 10, 1); // T
      const vSpeed = Math.sqrt((2 * E_CHG * vKv * 1000) / M_P);
      const rCm = sig3(((M_P * vSpeed) / (E_CHG * b)) * 100);
      const tol = Math.max(0.05, clean(rCm * 0.015, 3));
      return {
        prompt: `A proton ({{m = 1.67 * 10^(-27)}} kg, {{q = 1.60 * 10^(-19)}} C) is accelerated from rest through a potential difference of {{${vKv}.0}} kV and then enters a uniform {{${num(b)}}} T magnetic field perpendicularly. Calculate the radius of its circular path in cm (to 3 s.f.).`,
        answer: { type: "number", value: rCm, tolerance: tol, display: `${num(rCm)} cm` },
        hint: "Find entry speed from {{(1/2) m v^2 = q V}}, then substitute into {{r = m v / (q B)}}.",
        solution: [
          `Speed: {{v = sqrt((2 q V) / m) = sqrt((2 * 1.60 * 10^(-19) * ${vKv * 1000}) / (1.67 * 10^(-27))) = ${num(sig3(vSpeed))}}} m s⁻¹.`,
          `Radius: {{r = (m v) / (q B) = ${num(clean(rCm / 100, 3))}}} m = {{${num(rCm)}}} cm.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 — HL, Level 2: Potentials, Equipotentials, Orbital Energy & Escape
  // ===========================================================================
  {
    id: "d1-fields-motion.potentials-escape-hl",
    topicId: "d1-fields-motion",
    title: "Potentials, Equipotentials & Escape Speed (HL)",
    level: 2,
    ibLevel: "HL",
    guideRef: "gravitational-electric-potentials-hl",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      // ----- TIER 1: W = mΔV_g, E = |ΔV/Δr|, v_esc = √2 v_orb -----
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Work done W = m ΔV_g in GJ
          const m = rng.pick([200, 400, 500, 800, 1000, 1500, 2000]);
          const v1Mag = rng.int(40, 80); // × 10^6 J kg^-1 (so -v1Mag * 10^6)
          const deltaVMag = rng.int(10, 35); // × 10^6 J kg^-1
          const v2Mag = v1Mag - deltaVMag;
          const workGJ = roundTo((m * deltaVMag * 1e6) / 1e9, 2);
          const trapNeg = -workGJ;
          return {
            prompt: `A {{${m}}} kg spacecraft moves from a point where gravitational potential is {{-${v1Mag} * 10^6}} J kg⁻¹ to a higher point where gravitational potential is {{-${v2Mag} * 10^6}} J kg⁻¹. Calculate the minimum work done against gravity in GJ ({{10^9}} J).`,
            answer: { type: "number", value: workGJ, tolerance: 0.05, display: `${num(workGJ)} GJ` },
            traps: [
              {
                spec: { type: "number", value: trapNeg, tolerance: 0.05 },
                feedback: "Moving outward climbs the potential well, so {{ΔV_g = V_2 - V_1 > 0}} and the work done against gravity is **positive**.",
              },
            ],
            hint: "Compute {{ΔV_g = V_2 - V_1}}, multiply by {{m}}, and divide by {{10^9}} for GJ.",
            solution: [
              `{{ΔV_g = (-${v2Mag} - (-${v1Mag})) * 10^6 = +${deltaVMag} * 10^6}} J kg⁻¹.`,
              `{{W = m ΔV_g = ${m} * ${deltaVMag} * 10^6 = ${num(workGJ)} * 10^9}} J = {{${num(workGJ)}}} GJ.`,
            ],
          };
        }
        if (mode === 1) {
          // Electric field magnitude from parallel equipotential lines
          const dCm = rng.pick([0.5, 1.0, 2.0, 2.5, 4.0, 5.0]);
          const vLow = rng.int(10, 80) * 5;
          const step = rng.int(4, 24) * 10;
          const vHigh = vLow + step;
          const eVal = clean(step / (dCm / 100));
          const trapCm = clean(step / dCm);
          return {
            prompt: `Two parallel equipotential surfaces {{${num(dCm)}}} cm apart have electric potentials of {{+${vHigh}}} V and {{+${vLow}}} V. Calculate the magnitude of the uniform electric field strength between them in V m⁻¹.`,
            answer: { type: "number", value: eVal, tolerance: 2, display: `${num(eVal)} V m⁻¹` },
            traps: [
              {
                spec: { type: "number", value: trapCm, tolerance: 1 },
                feedback: "Convert cm to metres before computing {{E = |ΔV / Δr|}}.",
              },
            ],
            hint: "Use {{E = |-ΔV_e / Δr|}} with {{Δr}} in metres.",
            solution: [
              `{{ΔV = ${vHigh} - ${vLow} = ${step}}} V across {{Δr = ${num(clean(dCm / 100))}}} m.`,
              `{{E = ${step} / ${num(clean(dCm / 100))} = ${num(eVal)}}} V m⁻¹.`,
            ],
          };
        }
        // Escape velocity from circular orbital speed v_esc = √2 v_orb
        const vOrb = rng.int(15, 95) * 100; // 1500 .. 9500 m s^-1
        const vEsc = sig3(Math.SQRT2 * vOrb);
        const tol = Math.max(15, clean(vEsc * 0.015, 3));
        const trapDouble = 2 * vOrb;
        return {
          prompt: `A satellite is in a circular orbit around a planet with orbital speed {{${vOrb}}} m s⁻¹. Calculate the minimum escape speed from this exact orbital radius in m s⁻¹ (to 3 s.f.).`,
          answer: { type: "number", value: vEsc, tolerance: tol, display: `${num(vEsc)} m s⁻¹` },
          traps: [
            {
              spec: { type: "number", value: trapDouble, tolerance: Math.max(20, clean(trapDouble * 0.02)) },
              feedback: "Escape speed doubles the **kinetic energy**, so speed increases by {{sqrt(2) ≈ 1.414}}, not by {{2}}!",
            },
          ],
          hint: "Compare {{v_orb = sqrt(G M / r)}} with {{v_esc = sqrt(2 G M / r)}}.",
          solution: [
            `{{v_esc = sqrt(2) * v_orb = 1.414 * ${vOrb} = ${num(vEsc)}}} m s⁻¹.`,
          ],
        };
      }

      // ----- TIER 2: Surface V_g, escape velocity √(2GM/R), dipole/pair V_e -----
      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Surface gravitational potential V_g = -GM/R (in J kg^-1)
          const mMant = roundTo(rng.int(15, 85) / 10, 1); // * 10^24 kg
          const rMant = roundTo(rng.int(25, 80) / 10, 1); // * 10^6 m
          const vgExact = -(G * mMant * 1e24) / (rMant * 1e6);
          const ans = sig3(vgExact);
          const tol = Math.abs(clean(ans * 0.015, 3));
          return {
            prompt: `A planet has mass {{${num(mMant)} * 10^24}} kg and radius {{${num(rMant)} * 10^6}} m. Using {{G = 6.67 * 10^(-11)}} N m² kg⁻², calculate the gravitational potential at its surface in J kg⁻¹ (include the minus sign; 3 s.f.).`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${fmtSci(ans)} J kg⁻¹` },
            traps: [
              {
                spec: { type: "number", value: -ans, tolerance: tol },
                feedback: "Gravitational potential is always **negative** ({{V_g = -G M / R}}) with zero at infinity.",
              },
            ],
            hint: "Apply {{V_g = -G M / R}} (note {{R}} is NOT squared).",
            solution: [
              `{{V_g = -(6.67 * 10^(-11) * ${num(mMant)} * 10^24) / (${num(rMant)} * 10^6)}}.`,
              `{{V_g = ${fmtSci(ans)}}} J kg⁻¹.`,
            ],
          };
        }
        if (mode === 1) {
          // Escape velocity v_esc = √(2GM/R)
          const mMant = roundTo(rng.int(15, 90) / 10, 1); // * 10^23 or 10^24 kg
          const mExp = rng.pick([23, 24]);
          const rMant = roundTo(rng.int(18, 75) / 10, 1); // * 10^6 m
          const vEscExact = Math.sqrt((2 * G * mMant * Math.pow(10, mExp)) / (rMant * 1e6));
          const ans = sig3(vEscExact);
          const trapOrb = sig3(vEscExact / Math.SQRT2);
          const tol = Math.max(15, clean(ans * 0.015, 3));
          return {
            prompt: `A spherical moon/planet has mass {{${num(mMant)} * 10^(${mExp})}} kg and radius {{${num(rMant)} * 10^6}} m. Calculate the surface escape velocity in m s⁻¹ (to 3 s.f.).`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} m s⁻¹` },
            traps: [
              {
                spec: { type: "number", value: trapOrb, tolerance: Math.max(15, clean(trapOrb * 0.02, 3)) },
                feedback: "You computed circular orbital speed {{sqrt(G M / R)}} — escape velocity needs the factor of 2: {{sqrt(2 G M / R)}}.",
              },
            ],
            hint: "Use {{v_esc = sqrt(2 G M / R)}}.",
            solution: [
              `{{v_esc = sqrt((2 * 6.67 * 10^(-11) * ${num(mMant)} * 10^(${mExp})) / (${num(rMant)} * 10^6))}}.`,
              `{{v_esc = ${num(ans)}}} m s⁻¹.`,
            ],
          };
        }
        // Electric potential at midpoint between +q1 and -q2 (in kV)
        const q1 = rng.int(4, 14);
        const q2 = rng.int(1, q1 - 1); // ensures net V > 0 and q1 != q2
        const halfR = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5]);
        const sep = clean(2 * halfR);
        const vKv = sig3(((K_E * (q1 - q2) * 1e-6) / halfR) / 1000);
        const trapAdd = sig3(((K_E * (q1 + q2) * 1e-6) / halfR) / 1000);
        const tol = Math.max(0.2, clean(vKv * 0.015, 3));
        return {
          prompt: `Point charges {{+${q1}.0}} μC and {{-${q2}.0}} μC are separated by {{${num(sep)}}} m in vacuum ({{k = 8.99 * 10^9}} N m² C⁻²). Calculate the net electric potential at the midpoint between them in kV (to 3 s.f.).`,
          answer: { type: "number", value: vKv, tolerance: tol, display: `${num(vKv)} kV` },
          traps: [
            {
              spec: { type: "number", value: trapAdd, tolerance: Math.max(0.3, clean(trapAdd * 0.02, 3)) },
              feedback: "Electric potential is a signed scalar: add {{+${q1}.0}} μC and {{-${q2}.0}} μC algebraically (subtracting magnitudes).",
            },
          ],
          hint: `Distance to each charge is {{r = ${num(halfR)}}} m; sum {{V_e = k(q_1 + q_2) / r}} with signs.`,
          solution: [
            `Distance from midpoint to each charge: {{r = ${num(halfR)}}} m; {{q_1 + q_2 = +${q1 - q2}.0}} μC.`,
            `{{V_e = (8.99 * 10^9 * ${q1 - q2}.0 * 10^(-6)) / ${num(halfR)} = ${num(vKv)}}} kV.`,
          ],
        };
      }

      // ----- TIER 3: Orbital transfer ΔE_T, Rutherford closest approach, surface-to-orbit launch -----
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Orbital transfer r1 -> k * r1 around planet M
        const mSat = rng.pick([400, 600, 800, 1000, 1200, 1500]);
        const r1Mant = roundTo(rng.int(65, 95) / 10, 1); // * 10^6 m
        const factor = rng.pick([2, 3, 4]);
        const r2Mant = clean(r1Mant * factor);
        const mPlanet = 5.97e24;
        const dETExact = ((G * mPlanet * mSat) / 2) * (1 / (r1Mant * 1e6) - 1 / (r2Mant * 1e6));
        const ansGJ = sig3(dETExact / 1e9);
        const trapPE = sig3((2 * dETExact) / 1e9);
        const tol = Math.max(0.1, clean(ansGJ * 0.015, 3));
        return {
          prompt: `A {{${mSat}}} kg satellite orbits Earth ({{M = 5.97 * 10^24}} kg) in a circular orbit of radius {{${num(r1Mant)} * 10^6}} m and is raised to a circular orbit of radius {{${num(r2Mant)} * 10^6}} m. Calculate the minimum energy required for this transfer in GJ (to 3 s.f.).`,
          answer: { type: "number", value: ansGJ, tolerance: tol, display: `${num(ansGJ)} GJ` },
          traps: [
            {
              spec: { type: "number", value: trapPE, tolerance: Math.max(0.2, clean(trapPE * 0.02, 3)) },
              feedback: "You computed {{ΔE_p}} alone! Use total orbital energy {{E_T = -G M m / (2 r)}} so {{ΔE_T = (1/2) ΔE_p}}.",
            },
          ],
          hint: "Use {{ΔE_T = E_T2 - E_T1 = ((G M m) / 2)(1 / r_1 - 1 / r_2)}}.",
          solution: [
            `{{ΔE_T = ((6.67 * 10^(-11) * 5.97 * 10^24 * ${mSat}) / 2) * (1 / (${num(r1Mant)} * 10^6) - 1 / (${num(r2Mant)} * 10^6))}}.`,
            `{{ΔE_T = ${num(ansGJ)} * 10^9}} J = {{${num(ansGJ)}}} GJ.`,
          ],
        };
      }
      if (mode === 1) {
        // Alpha particle closest approach d = k Q q / E_k
        const z = rng.pick([29, 47, 74, 79, 82, 92]);
        const ekMeV = roundTo(rng.int(30, 85) / 10, 1); // 3.0 .. 8.5 MeV
        const ekJ = ekMeV * 1.60e-13;
        const dExact = (K_E * (z * E_CHG) * (2 * E_CHG)) / ekJ;
        const ans = sig3(dExact);
        const tol = clean(ans * 0.018, 3);
        return {
          prompt: `An alpha particle ({{q = 2 e}}) with kinetic energy {{${num(ekMeV)}}} MeV ({{1}} MeV = {{1.60 * 10^(-13)}} J) is fired head-on towards a stationary nucleus of atomic number {{Z = ${z}}} ({{Q = ${z} e}}). Calculate the distance of closest approach in m (give your answer in standard form to 3 s.f.).`,
          answer: {
            type: "number",
            value: ans,
            tolerance: tol,
            standardForm: true,
            display: `${fmtSci(ans)} m`,
          },
          hint: "Equate initial kinetic energy {{E_k}} to electrostatic potential energy {{k (Z e)(2 e) / d}}.",
          solution: [
            `Convert kinetic energy: {{E_k = ${num(ekMeV)} * 1.60 * 10^(-13)}} J.`,
            `{{d = (k * ${z} e * 2 e) / E_k = ${fmtSci(ans)}}} m.`,
          ],
        };
      }
      // Launch energy from rest on planet surface (radius R) to circular orbit at radius nR
      const mSat = rng.pick([300, 500, 800, 1000, 1200]);
      const nMult = rng.pick([2, 3, 4]);
      const rMant = roundTo(rng.int(50, 75) / 10, 1); // * 10^6 m
      const mPlanet = roundTo(rng.int(35, 70) / 10, 1); // * 10^24 kg
      // E_i = -GMm/R, E_f = -GMm/(2 n R) => W = (GMm/R)(1 - 1/(2n))
      const wExact = ((G * mPlanet * 1e24 * mSat) / (rMant * 1e6)) * (1 - 1 / (2 * nMult));
      const ansGJ = sig3(wExact / 1e9);
      const trapPEOnly = sig3((((G * mPlanet * 1e24 * mSat) / (rMant * 1e6)) * (1 - 1 / nMult)) / 1e9);
      const tol = Math.max(0.1, clean(ansGJ * 0.015, 3));
      return {
        prompt: `Calculate the minimum energy (in GJ, to 3 s.f.) needed to launch a {{${mSat}}} kg satellite from rest on the surface of a non-rotating planet (mass {{${num(mPlanet)} * 10^24}} kg, radius {{${num(rMant)} * 10^6}} m) into a circular orbit of radius {{${nMult} R}}.`,
        answer: { type: "number", value: ansGJ, tolerance: tol, display: `${num(ansGJ)} GJ` },
        traps: [
          {
            spec: { type: "number", value: trapPEOnly, tolerance: Math.max(0.15, clean(trapPEOnly * 0.02, 3)) },
            feedback: "You calculated the gain in potential energy {{ΔE_p}} alone — don't forget the kinetic energy {{+G M m / (2 r)}} needed to stay in orbit!",
          },
        ],
        hint: `Compute {{W = E_T(final) - E_p(surface) = -G M m / (${2 * nMult} R) - (-G M m / R)}}.`,
        solution: [
          `Initial surface energy: {{E_i = -G M m / R}}; final orbital total energy: {{E_f = -G M m / (${2 * nMult} R)}}.`,
          `{{W = E_f - E_i = ((${2 * nMult - 1}) / ${2 * nMult}) * (G M m / R) = ${num(ansGJ)}}} GJ.`,
        ],
      };
    },
  },
];
