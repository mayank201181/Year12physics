import type { Drill, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const SUBSTANCES = [
  { name: "water", c: 4200 },
  { name: "aluminium", c: 900 },
  { name: "copper", c: 380 },
  { name: "iron", c: 450 },
  { name: "ethanol", c: 2400 },
  { name: "glass", c: 840 },
] as const;

const LATENT_ITEMS = [
  { verb: "melt", substance: "ice at 0 °C", symbol: "L_f", L: 334 },
  { verb: "boil", substance: "water at 100 °C", symbol: "L_v", L: 2260 },
  { verb: "melt", substance: "solid aluminium at 660 °C", symbol: "L_f", L: 400 },
  { verb: "melt", substance: "solid copper at 1085 °C", symbol: "L_f", L: 205 },
  { verb: "vaporise", substance: "liquid ethanol at 78 °C", symbol: "L_v", L: 840 },
] as const;

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 — B.1 & B.2 Heat Transfer, Radiation & Planetary Balance (SL, L1)
  // ===========================================================================
  {
    id: "b1-thermal-gases.heat-transfer",
    topicId: "b1-thermal-gases",
    title: "Calorimetry, Conduction, Wien's Law & Albedo",
    level: 1,
    ibLevel: "SL",
    guideRef: "thermal-transfers-radiation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Q = m c ΔT
          const sub = rng.pick(SUBSTANCES);
          const m = rng.pick([0.2, 0.25, 0.4, 0.5, 0.8, 1.0, 1.5, 2.0, 2.5]);
          const t1 = rng.int(10, 35);
          const dT = rng.int(15, 60);
          const t2 = t1 + dT;
          const ans = clean(m * sub.c * dT);
          const trapT2 = clean(m * sub.c * t2);
          return {
            prompt: `A **${num(m)} kg** sample of ${sub.name} ({{c = ${sub.c}}} J kg⁻¹ K⁻¹) is heated from **${t1} °C** to **${t2} °C**. Calculate the thermal energy absorbed in joules.`,
            answer: { type: "number", value: ans, display: `${num(ans)} J` },
            traps: [
              {
                spec: { type: "number", value: trapT2 },
                feedback: `Use the temperature CHANGE ΔT = ${t2} − ${t1} = ${dT} K, not the final temperature ${t2} °C.`,
              },
            ],
            hint: "Use {{Q = m c ΔT}} with {{ΔT = T_final - T_initial}}.",
            solution: [
              `Temperature change: {{ΔT = ${t2} - ${t1} = ${dT}}} K.`,
              `{{Q = m c ΔT = ${num(m)} * ${sub.c} * ${dT} = ${num(ans)}}} J.`,
            ],
          };
        }
        if (mode === 1) {
          // Q = m L
          const item = rng.pick(LATENT_ITEMS);
          const m = clean(rng.int(2, 24) / 10);
          const ans = roundTo(m * item.L, 1);
          return {
            prompt: `Calculate the thermal energy, in kilojoules (kJ), required to completely ${item.verb} **${num(m)} kg** of ${item.substance} ({{${item.symbol} = ${item.L}}} kJ kg⁻¹).`,
            answer: { type: "number", value: ans, display: `${num(ans)} kJ` },
            hint: `During a phase change at constant temperature, use {{Q = m ${item.symbol}}}.`,
            solution: [
              `Apply {{Q = m ${item.symbol} = ${num(m)} * ${item.L} = ${num(ans)}}} kJ.`,
            ],
          };
        }
        // Planetary absorbed intensity I_abs = (1 - α) S / 4
        const S = rng.int(12, 48) * 40;
        const alphaPct = rng.int(1, 8) * 10;
        const alpha = clean(alphaPct / 100);
        const absFrac = clean(1 - alpha);
        const ans = clean((absFrac * S) / 4);
        const trapRefl = clean((alpha * S) / 4);
        const trapNo4 = clean(absFrac * S);
        const traps = [
          {
            spec: { type: "number" as const, value: trapNo4 },
            feedback: "Remember to divide by 4 to average over the planet's full spherical surface area (πR² / 4πR²).",
          },
        ];
        if (trapRefl !== ans) {
          traps.push({
            spec: { type: "number" as const, value: trapRefl },
            feedback: `${num(trapRefl)} W m⁻² is the reflected intensity — use (1 − α) = ${num(absFrac)} for absorbed intensity!`,
          });
        }
        return {
          prompt: `A planet receives top-of-atmosphere stellar intensity {{S = ${S}}} W m⁻² and has albedo {{α = ${alpha.toFixed(2)}}}. Calculate the average stellar intensity **absorbed** over the planet's spherical surface in W m⁻².`,
          answer: { type: "number", value: ans, display: `${num(ans)} W m⁻²` },
          traps,
          hint: "Average absorbed intensity is {{I_abs = ((1 - α) S) / 4}}.",
          solution: [
            `Absorbed fraction: {{1 - α = 1 - ${alpha.toFixed(2)} = ${absFrac.toFixed(2)}}}.`,
            `Average over sphere: {{I_abs = (${absFrac.toFixed(2)} * ${S}) / 4 = ${num(ans)}}} W m⁻².`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Steady-state conduction ΔQ/Δt = k A ΔT / Δx
          const k = rng.pick([0.4, 0.8, 1.2, 2.0, 40, 80, 200, 400]);
          const A = clean(rng.int(2, 15) / 10);
          const dxMm = rng.pick([2, 4, 5, 8, 10, 20]);
          const dx = clean(dxMm / 1000);
          const t1 = rng.int(5, 25);
          const dT = rng.int(10, 55);
          const t2 = t1 + dT;
          const ans = roundTo((k * A * dT) / dx, 1);
          const trapMm = roundTo((k * A * dT) / dxMm, 3);
          return {
            prompt: `A flat wall slab of thermal conductivity {{k = ${num(k)}}} W m⁻¹ K⁻¹, cross-sectional area **${num(A)} m²**, and thickness **${dxMm} mm** separates faces held at **${t2} °C** and **${t1} °C**. Calculate the steady-state rate of heat conduction in watts.`,
            answer: { type: "number", value: ans, tolerance: Math.max(0.1, roundTo(ans * 0.005, 2)), display: `${num(ans)} W` },
            traps: [
              {
                spec: { type: "number", value: trapMm, tolerance: Math.max(0.01, roundTo(trapMm * 0.005, 3)) },
                feedback: `Convert thickness ${dxMm} mm to ${num(dx)} m before dividing!`,
              },
            ],
            hint: "Use {{ΔQ / Δt = k A ΔT / Δx}} with {{Δx}} in metres.",
            solution: [
              `Convert thickness: {{Δx = ${dxMm} * 10^(-3) = ${num(dx)}}} m; {{ΔT = ${t2} - ${t1} = ${dT}}} K.`,
              `{{ΔQ / Δt = (${num(k)} * ${num(A)} * ${dT}) / ${num(dx)} = ${num(ans)}}} W.`,
            ],
          };
        }
        if (mode === 1) {
          // Wien's displacement law
          const T = rng.int(20, 115) * 100;
          const ans = Math.round(2.9e6 / T);
          const trapUm = roundTo(2900 / T, 2);
          return {
            prompt: `A blackbody star has surface temperature **${T} K**. Using Wien's displacement law ({{λ_max T = 2.90 * 10^(-3)}} m K), calculate its peak emission wavelength {{λ_max}} to the nearest nanometre (nm).`,
            answer: { type: "number", value: ans, tolerance: 1, display: `${ans} nm` },
            traps: [
              {
                spec: { type: "number", value: trapUm, tolerance: 0.05 },
                feedback: `${num(trapUm)} is in micrometres (μm); multiply by 1000 to convert to nanometres (nm).`,
              },
            ],
            hint: "Solve {{λ_max = (2.90 * 10^(-3)) / T}} in metres, then multiply by {{10^9}} for nanometres.",
            solution: [
              `{{λ_max = (2.90 * 10^(-3)) / ${T} = ${roundTo(2.9e6 / T, 1)} * 10^(-9)}} m.`,
              `To the nearest nanometre: **${ans} nm**.`,
            ],
          };
        }
        // Two-stage water warming + boiling
        const m = clean(rng.int(2, 16) * 0.25);
        const t1 = rng.int(10, 75);
        const dT = 100 - t1;
        const q1 = roundTo(m * 4.2 * dT, 2);
        const q2 = roundTo(m * 2260, 2);
        const ans = roundTo(q1 + q2, 2);
        return {
          prompt: `Calculate the total thermal energy, in kilojoules (kJ), required to warm **${num(m)} kg** of liquid water from **${t1} °C** to **100 °C** ({{c = 4.20}} kJ kg⁻¹ K⁻¹) and then completely boil it into steam ({{L_v = 2260}} kJ kg⁻¹).`,
          answer: { type: "number", value: ans, tolerance: 0.5, display: `${num(ans)} kJ` },
          traps: [
            {
              spec: { type: "number", value: q1, tolerance: 0.5 },
              feedback: "You calculated the warming energy m c ΔT only — add the latent heat of boiling m L_v!",
            },
            {
              spec: { type: "number", value: q2, tolerance: 0.5 },
              feedback: "You calculated the boiling energy m L_v only — add the warming energy m c ΔT!",
            },
          ],
          hint: "Sum two separate terms: {{Q = m c ΔT + m L_v}}.",
          solution: [
            `Warming to 100 °C: {{Q_1 = ${num(m)} * 4.20 * (100 - ${t1}) = ${num(q1)}}} kJ.`,
            `Vaporisation at 100 °C: {{Q_2 = ${num(m)} * 2260 = ${num(q2)}}} kJ.`,
            `Total energy: {{Q = ${num(q1)} + ${num(q2)} = ${num(ans)}}} kJ.`,
          ],
        };
      }

      // TIER 3 — Mixtures, Stefan–Boltzmann star ratios, or Heater time
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Method of mixtures
        const metal = rng.pick([
          { name: "copper", c: 380 },
          { name: "iron", c: 450 },
          { name: "aluminium", c: 900 },
        ]);
        const mM = clean(rng.int(2, 10) / 10);
        const mW = clean(rng.int(3, 10) / 10);
        const tW = rng.int(15, 28);
        const tM = rng.int(90, 180);
        const cM = clean(mM * metal.c);
        const cW = clean(mW * 4200);
        const ans = roundTo((cM * tM + cW * tW) / (cM + cW), 1);
        const mid = roundTo((tM + tW) / 2, 1);
        return {
          prompt: `A **${num(mM)} kg** block of ${metal.name} ({{c = ${metal.c}}} J kg⁻¹ K⁻¹) at **${tM} °C** is lowered into **${num(mW)} kg** of water ({{c = 4200}} J kg⁻¹ K⁻¹) at **${tW} °C** inside an insulated calorimeter. Calculate the equilibrium temperature in °C (to 1 decimal place).`,
          answer: { type: "number", value: ans, tolerance: 0.15, display: `${num(ans)} °C` },
          traps:
            Math.abs(mid - ans) > 1
              ? [
                  {
                    spec: { type: "number", value: mid, tolerance: 0.2 },
                    feedback: "Do not average the temperatures — weight each temperature by its heat capacity (m c)!",
                  },
                ]
              : undefined,
          hint: "Equate heat lost by metal to heat gained by water: {{m_m c_m (T_m - T_f) = m_w c_w (T_f - T_w)}}.",
          solution: [
            `Heat capacities: {{C_m = ${num(mM)} * ${metal.c} = ${num(cM)}}} J K⁻¹; {{C_w = ${num(mW)} * 4200 = ${num(cW)}}} J K⁻¹.`,
            `Solve {{${num(cM)}(${tM} - T_f) = ${num(cW)}(T_f - ${tW})}}: {{T_f = (${num(cM)} * ${tM} + ${num(cW)} * ${tW}) / (${num(cM)} + ${num(cW)}) = ${num(ans)}}} °C.`,
          ],
        };
      }
      if (mode === 1) {
        // Stefan–Boltzmann ratio L = 4π R² σ T⁴
        const rFac = rng.pick([2, 3, 4]);
        const tFac = rng.pick([0.5, 2, 3]);
        const LY = tFac === 0.5 ? rng.pick([4, 8, 12, 16, 20, 24]) : rng.int(1, 10);
        const mult = clean(rFac * rFac * Math.pow(tFac, 4));
        const ans = clean(LY * mult);
        const trapNo4 = clean(LY * rFac * rFac * tFac);
        return {
          prompt: `Blackbody Star Y has luminosity **${LY} × 10²⁶ W**. Blackbody Star X has **${rFac}×** the radius of Star Y and **${num(tFac)}×** the Kelvin surface temperature of Star Y. Calculate the luminosity of Star X in units of **10²⁶ W** (enter just the numerical coefficient).`,
          answer: { type: "number", value: ans, display: `${num(ans)}` },
          traps:
            trapNo4 !== ans
              ? [
                  {
                    spec: { type: "number", value: trapNo4 },
                    feedback: "Remember Stefan–Boltzmann scales as T⁴ (fourth power), not linearly with T!",
                  },
                ]
              : undefined,
          hint: "Use {{L_X / L_Y = (R_X / R_Y)^2 * (T_X / T_Y)^4}}.",
          solution: [
            `Luminosity scaling: {{L ∝ R^2 T^4}}, so factor = {{${rFac}^2 * (${num(tFac)})^4 = ${rFac * rFac} * ${num(Math.pow(tFac, 4))} = ${num(mult)}}}.`,
            `{{L_X = ${LY} * ${num(mult)} = ${num(ans)}}} (× 10²⁶ W).`,
          ],
        };
      }
      // Electric kettle heating time to boil
      const power = rng.pick([1000, 1200, 1500, 1800, 2000, 2400, 2500, 3000]);
      const m = clean(rng.int(2, 12) * 0.25);
      const t1 = rng.int(15, 65);
      const dT = 100 - t1;
      const Q = clean(m * 4200 * dT);
      const ans = Math.round(Q / power);
      return {
        prompt: `A **${power} W** electric kettle heats **${num(m)} kg** of water ({{c = 4200}} J kg⁻¹ K⁻¹) from **${t1} °C** to **100 °C** with negligible heat loss. Calculate the time taken to the nearest second.`,
        answer: { type: "number", value: ans, tolerance: 1, display: `${ans} s` },
        hint: "Find {{Q = m c ΔT}} in joules, then divide by power {{P}} in watts.",
        solution: [
          `{{Q = m c ΔT = ${num(m)} * 4200 * (100 - ${t1}) = ${num(Q)}}} J.`,
          `{{t = Q / P = ${num(Q)} / ${power} ≈ ${ans}}} s.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 — B.3 Ideal Gas Laws & Kinetic Theory (SL, L2)
  // ===========================================================================
  {
    id: "b1-thermal-gases.ideal-gas",
    topicId: "b1-thermal-gases",
    title: "Ideal Gas Laws, Combined Law & Kinetic Theory",
    level: 2,
    ibLevel: "SL",
    guideRef: "gas-laws-kmt",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Boyle's law P1 V1 = P2 V2
          const factor = rng.pick([2, 3, 4, 5]);
          const compress = rng.bool();
          const vSmall = rng.int(2, 12) * 5;
          const vLarge = vSmall * factor;
          const pSmall = rng.int(4, 24) * 10;
          const pLarge = pSmall * factor;
          const [V1, V2, P1, P2] = compress
            ? [vLarge, vSmall, pSmall, pLarge]
            : [vSmall, vLarge, pLarge, pSmall];
          const trapInv = roundTo(P1 * (V2 / V1), 1);
          return {
            prompt: `A fixed mass of ideal gas occupies **${V1} cm³** at pressure **${P1} kPa**. Its volume is changed slowly at constant temperature to **${V2} cm³**. Calculate the new pressure in kPa.`,
            answer: { type: "number", value: P2, display: `${P2} kPa` },
            traps: [
              {
                spec: { type: "number", value: trapInv, tolerance: 0.2 },
                feedback: "Boyle's law is an INVERSE proportion (P₁V₁ = P₂V₂) — smaller volume means higher pressure!",
              },
            ],
            hint: "Use Boyle's law: {{P_1 V_1 = P_2 V_2}}.",
            solution: [
              `At constant temperature, {{P_2 = P_1 (V_1 / V_2) = ${P1} * (${V1} / ${V2}) = ${P2}}} kPa.`,
            ],
          };
        }
        if (mode === 1) {
          // Gay-Lussac pressure law P1/T1 = P2/T2
          const T1 = 250;
          const steps = rng.int(1, 14);
          const T2 = 250 + steps * 25;
          const P1 = rng.int(6, 30) * 10;
          const P2 = clean((P1 * T2) / T1);
          return {
            prompt: `A sealed rigid tank of ideal gas is at pressure **${P1} kPa** and temperature **${T1} K**. It is heated to **${T2} K** at constant volume. Calculate the new pressure in kPa.`,
            answer: { type: "number", value: P2, display: `${num(P2)} kPa` },
            hint: "At constant volume, {{P_1 / T_1 = P_2 / T_2}}.",
            solution: [
              `{{P_2 = P_1 (T_2 / T_1) = ${P1} * (${T2} / ${T1}) = ${num(P2)}}} kPa.`,
            ],
          };
        }
        // Charles's law V1/T1 = V2/T2
        const T1 = rng.pick([200, 250, 300]);
        const mult = rng.pick([0.6, 0.8, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0, 2.5]);
        const T2 = clean(T1 * mult);
        const V1 = clean(rng.int(4, 24) * 0.5);
        const V2 = clean(V1 * mult);
        return {
          prompt: `A flexible balloon contains **${num(V1)} L** of ideal gas at **${T1} K** and constant atmospheric pressure. Its temperature changes to **${T2} K**. Calculate the new volume in litres (L).`,
          answer: { type: "number", value: V2, display: `${num(V2)} L` },
          hint: "At constant pressure, Charles's law gives {{V_1 / T_1 = V_2 / T_2}}.",
          solution: [
            `{{V_2 = V_1 (T_2 / T_1) = ${num(V1)} * (${T2} / ${T1}) = ${num(V2)}}} L.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Combined gas law with Celsius inputs!
          const T1 = rng.pick([250, 300, 350, 400]);
          const tRatio = rng.pick([0.8, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0]);
          const T2 = clean(T1 * tRatio);
          const t1C = T1 - 273;
          const t2C = T2 - 273;
          const vRatio = rng.pick([0.5, 1.5, 2, 2.5, 3]);
          const V2 = rng.int(2, 10) * 2;
          const V1 = clean(V2 * vRatio);
          const P1 = rng.int(6, 24) * 10;
          const P2 = clean(P1 * vRatio * tRatio);
          const traps = [];
          if (t1C > 0 && t2C > 0) {
            const trapC = roundTo(P1 * vRatio * (t2C / t1C), 1);
            if (Math.abs(trapC - P2) > 2) {
              traps.push({
                spec: { type: "number" as const, value: trapC, tolerance: 1 },
                feedback: `Convert Celsius temperatures to Kelvin first (${t1C} °C = ${T1} K; ${t2C} °C = ${T2} K)!`,
              });
            }
          }
          return {
            prompt: `A fixed mass of ideal gas occupies **${num(V1)} L** at **${P1} kPa** and **${num(t1C)} °C**. Its volume becomes **${V2} L** at **${num(t2C)} °C**. Taking {{T / "K" = t / "°C" + 273}}, calculate the new pressure in kPa.`,
            answer: { type: "number", value: P2, display: `${num(P2)} kPa` },
            traps: traps.length ? traps : undefined,
            hint: "Convert both temperatures to Kelvin first, then apply {{(P_1 V_1) / T_1 = (P_2 V_2) / T_2}}.",
            solution: [
              `Kelvin temperatures: {{T_1 = ${num(t1C)} + 273 = ${T1}}} K; {{T_2 = ${num(t2C)} + 273 = ${T2}}} K.`,
              `{{P_2 = P_1 (V_1 / V_2) (T_2 / T_1) = ${P1} * (${num(V1)} / ${V2}) * (${T2} / ${T1}) = ${num(P2)}}} kPa.`,
            ],
          };
        }
        if (mode === 1) {
          // PV = nRT solving for P in kPa
          const n = clean(rng.int(2, 16) * 0.5);
          const T = rng.int(5, 16) * 50;
          const V = rng.pick([0.02, 0.025, 0.04, 0.05, 0.08, 0.1]);
          const P_kPa = roundTo((n * 8.31 * T) / (V * 1000), 1);
          return {
            prompt: `A sealed cylinder of volume **${num(V)} m³** contains **${num(n)} mol** of an ideal gas at **${T} K**. Using {{R = 8.31}} J K⁻¹ mol⁻¹, calculate the gas pressure in kilopascals (kPa, to 1 d.p.).`,
            answer: {
              type: "number",
              value: P_kPa,
              tolerance: Math.max(0.5, roundTo(P_kPa * 0.005, 1)),
              display: `${num(P_kPa)} kPa`,
            },
            hint: "Calculate {{P = n R T / V}} in Pa, then divide by 1000 for kPa.",
            solution: [
              `{{P = (n R T) / V = (${num(n)} * 8.31 * ${T}) / ${num(V)} = ${roundTo((n * 8.31 * T) / V, 0)}}} Pa.`,
              `Convert to kPa: **${num(P_kPa)} kPa**.`,
            ],
          };
        }
        // Monatomic internal energy U = (3/2) PV in kJ
        const P_kPa = rng.int(10, 50) * 10;
        const V_L = rng.int(5, 45) * 2;
        const V_m3 = clean(V_L / 1000);
        const ans = roundTo(1.5 * P_kPa * V_m3, 2);
        const trapPV = roundTo(P_kPa * V_m3, 2);
        return {
          prompt: `A vessel of volume **${num(V_m3)} m³** holds an ideal monatomic gas at pressure **${P_kPa} kPa**. Calculate the total internal energy {{U}} of the gas in kilojoules (kJ).`,
          answer: { type: "number", value: ans, tolerance: 0.05, display: `${num(ans)} kJ` },
          traps: [
            {
              spec: { type: "number", value: trapPV, tolerance: 0.05 },
              feedback: "Remember the factor of 3/2 in U = (3/2) nRT = (3/2) PV for a monatomic ideal gas!",
            },
          ],
          hint: "Combine {{U = (3/2) n R T}} with {{P V = n R T}} to get {{U = (3/2) P V}}.",
          solution: [
            `For an ideal monatomic gas, {{U = (3/2) P V = 1.5 * (${P_kPa} * 10^3) * ${num(V_m3)} = ${num(clean(ans * 1000))}}} J = **${num(ans)} kJ**.`,
          ],
        };
      }

      // TIER 3 — Kinetic theory v_rms, Connected vessels, or Leaking cylinder
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // P = (1/3) ρ v_rms² solving for v_rms
        const vrms = rng.int(6, 18) * 50;
        const rho = clean(rng.int(4, 24) * 0.15);
        const P_kPa = roundTo(((1 / 3) * rho * vrms * vrms) / 1000, 2);
        const trapNo3 = Math.round(vrms / Math.sqrt(3));
        return {
          prompt: `An ideal gas of density **${num(rho)} kg m⁻³** exerts pressure **${num(P_kPa)} kPa**. Using kinetic theory ({{P = (1/3) ρ v_rms^2}}), calculate the root-mean-square speed {{v_rms}} of its molecules in m s⁻¹.`,
          answer: { type: "number", value: vrms, tolerance: 1, display: `${vrms} m s⁻¹` },
          traps: [
            {
              spec: { type: "number", value: trapNo3, tolerance: 2 },
              feedback: "Multiply P by 3 before dividing by density: v_rms = √(3P / ρ)!",
            },
          ],
          hint: "Rearrange {{P = (1/3) ρ v_rms^2}} to {{v_rms = sqrt(3 P / ρ)}}, converting kPa to Pa first.",
          solution: [
            `Convert pressure: {{P = ${num(clean(P_kPa * 1000))}}} Pa.`,
            `{{v_rms = sqrt((3 * ${num(clean(P_kPa * 1000))}) / ${num(rho)}) = sqrt(${vrms * vrms}) = ${vrms}}} m s⁻¹.`,
          ],
        };
      }
      if (mode === 1) {
        // Connected vessels at constant T: P_f = (P1 V1 + P2 V2)/(V1 + V2) exact integer!
        const v1 = rng.int(1, 5);
        const v2 = rng.int(1, 5);
        const pf = rng.int(15, 40) * 10;
        const maxD = Math.min(8, Math.floor((pf - 30) / (10 * v1)));
        const d = rng.int(1, Math.max(1, maxD)) * 10;
        const p1 = pf + d * v2;
        const p2 = pf - d * v1;
        const avg = roundTo((p1 + p2) / 2, 1);
        return {
          prompt: `Two rigid vessels at constant temperature are joined by a closed tap. Vessel X (volume **${v1} L**) holds ideal gas at **${p1} kPa**, while Vessel Y (volume **${v2} L**) holds the same gas at **${p2} kPa**. The tap is opened at constant temperature. Calculate the final equilibrium pressure in kPa.`,
          answer: { type: "number", value: pf, display: `${pf} kPa` },
          traps:
            Math.abs(avg - pf) >= 5
              ? [
                  {
                    spec: { type: "number", value: avg, tolerance: 0.5 },
                    feedback: "Do not take an unweighted average — weight each pressure by its vessel volume!",
                  },
                ]
              : undefined,
          hint: "Conserve total moles at constant {{T}}: {{P_f (V_1 + V_2) = P_1 V_1 + P_2 V_2}}.",
          solution: [
            `Total {{P V}} before mixing: {{${p1}(${v1}) + ${p2}(${v2}) = ${p1 * v1 + p2 * v2}}} kPa·L.`,
            `Divide by total volume {{${v1} + ${v2} = ${v1 + v2}}} L: {{P_f = ${p1 * v1 + p2 * v2} / ${v1 + v2} = ${pf}}} kPa.`,
          ],
        };
      }
      // Leaking rigid cylinder: n2 = n1 (P2/P1)(T1/T2) exact integer!
      const n1 = rng.pick([4, 5, 6, 8, 10]);
      const n2 = rng.int(1, n1 - 1);
      const T1 = 300;
      const k = rng.pick([4, 6, 7, 8]);
      const T2 = 60 * k;
      const P1 = 50 * n1;
      const P2 = 10 * n2 * k;
      return {
        prompt: `A rigid cylinder initially holds **${n1} mol** of ideal gas at **${P1} kPa** and **${T1} K**. Gas leaks out until the pressure becomes **${P2} kPa** while the temperature reaches **${T2} K**. How many moles of gas remain in the cylinder?`,
        answer: { type: "number", value: n2, display: `${n2} mol` },
        hint: "At constant volume, {{n ∝ P / T}}, so {{n_2 = n_1 (P_2 / P_1) (T_1 / T_2)}}.",
        solution: [
          `From {{P V = n R T}} with constant {{V}}: {{n_2 = n_1 (P_2 / P_1) (T_1 / T_2)}}.`,
          `{{n_2 = ${n1} * (${P2} / ${P1}) * (${T1} / ${T2}) = ${n2}}} mol.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 — B.4 First Law, Adiabatic, Carnot & Entropy (HL, L2)
  // ===========================================================================
  {
    id: "b1-thermal-gases.carnot-first-law",
    topicId: "b1-thermal-gases",
    title: "First Law, p–V Work, Carnot Efficiency & Entropy (HL)",
    level: 2,
    ibLevel: "HL",
    guideRef: "thermodynamics-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // First law Q = ΔU + W
          const heatIn = rng.bool();
          const expand = rng.bool();
          const qMag = rng.int(3, 25) * 50;
          const wMag = rng.int(2, 20) * 50;
          const Q = heatIn ? qMag : -qMag;
          const W = expand ? wMag : -wMag;
          const dU = Q - W;
          const heatText = heatIn ? `absorbs **${qMag} J** of thermal energy` : `releases **${qMag} J** of thermal energy`;
          const workText = expand ? `expands doing **${wMag} J** of work on its surroundings` : `has **${wMag} J** of work done ON it by a piston`;
          const trapFlipW = Q + W;
          return {
            prompt: `An ideal gas ${heatText} while it ${workText}. Using the IB First Law ({{Q = ΔU + W}}), calculate the change in internal energy {{ΔU}} in joules (include a minus sign if negative).`,
            answer: { type: "number", value: dU, display: `${num(dU)} J` },
            traps:
              trapFlipW !== dU
                ? [
                    {
                      spec: { type: "number", value: trapFlipW },
                      feedback: "Check the sign of work W: expansion is +W (by gas), compression is −W (on gas).",
                    },
                  ]
                : undefined,
            hint: "Assign signs carefully ({{Q > 0}} heat IN; {{W > 0}} expansion work BY gas) and solve {{ΔU = Q - W}}.",
            solution: [
              `Signed quantities: {{Q = ${num(Q)}}} J and {{W = ${num(W)}}} J.`,
              `{{ΔU = Q - W = ${num(Q)} - (${num(W)}) = ${num(dU)}}} J.`,
            ],
          };
        }
        if (mode === 1) {
          // Isobaric work W = P ΔV
          const pScale = rng.int(10, 50); // × 10^4 Pa = 1.0..5.0 × 10^5 Pa
          const P_kPa = pScale * 10;
          const v1_L = rng.int(10, 35);
          const dv_L = rng.int(5, 35);
          const v2_L = v1_L + dv_L;
          const W = clean(P_kPa * dv_L); // kPa * L = J!
          return {
            prompt: `An ideal gas at constant pressure **${P_kPa} kPa** expands isobarically from **${num(clean(v1_L / 1000))} m³** to **${num(clean(v2_L / 1000))} m³**. Calculate the mechanical work {{W}} done by the gas in joules.`,
            answer: { type: "number", value: W, display: `${W} J` },
            traps: [
              {
                spec: { type: "number", value: clean(P_kPa * v2_L) },
                feedback: `Use the volume CHANGE ΔV = ${num(clean(dv_L / 1000))} m³, not the final volume!`,
              },
            ],
            hint: "Convert kPa to Pa and compute {{W = P (V_2 - V_1)}}.",
            solution: [
              `{{ΔV = ${num(clean(v2_L / 1000))} - ${num(clean(v1_L / 1000))} = ${num(clean(dv_L / 1000))}}} m³.`,
              `{{W = P ΔV = (${P_kPa} * 10^3) * ${num(clean(dv_L / 1000))} = ${W}}} J.`,
            ],
          };
        }
        // Carnot efficiency in Kelvin
        const pairs: Array<[number, number]> = [
          [400, 200], [400, 240], [400, 280], [400, 300], [400, 320],
          [500, 200], [500, 250], [500, 300], [500, 350], [500, 400],
          [600, 240], [600, 270], [600, 300], [600, 360], [600, 420], [600, 450], [600, 480],
          [800, 200], [800, 240], [800, 280], [800, 320], [800, 360], [800, 400], [800, 480], [800, 560], [800, 600],
          [1000, 250], [1000, 300], [1000, 350], [1000, 400], [1000, 450], [1000, 500], [1000, 600], [1000, 700],
        ];
        const [TH, TC] = rng.pick(pairs);
        const eff = clean((1 - TC / TH) * 100);
        const trapRatio = clean((TC / TH) * 100);
        return {
          prompt: `A Carnot heat engine operates between a hot reservoir at **${TH} K** and a cold reservoir at **${TC} K**. Calculate its maximum theoretical efficiency as a percentage.`,
          answer: { type: "number", value: eff, display: `${num(eff)}%` },
          traps:
            trapRatio !== eff
              ? [
                  {
                    spec: { type: "number", value: trapRatio },
                    feedback: `${num(trapRatio)}% is T_C / T_H — subtract from 100% to get Carnot efficiency!`,
                  },
                ]
              : undefined,
          hint: "Apply {{η_Carnot = (1 - T_C / T_H) * 100%}}.",
          solution: [
            `{{η_Carnot = (1 - ${TC} / ${TH}) * 100% = (1 - ${num(clean(TC / TH))}) * 100% = ${num(eff)}%}}.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Monatomic isobaric expansion total heat Q = (5/2) P ΔV
          const P_kPa = rng.int(10, 40) * 10;
          const v1_L = rng.int(10, 30);
          const dv_L = rng.int(4, 26) * 2;
          const v2_L = v1_L + dv_L;
          const W = clean(P_kPa * dv_L);
          const dU = clean(1.5 * W);
          const Q = clean(2.5 * W);
          return {
            prompt: `An ideal **monatomic** gas expands isobarically at constant pressure **${P_kPa} kPa** from **${num(clean(v1_L / 1000))} m³** to **${num(clean(v2_L / 1000))} m³**. Calculate the total thermal energy {{Q}} supplied to the gas in joules.`,
            answer: { type: "number", value: Q, display: `${Q} J` },
            traps: [
              {
                spec: { type: "number", value: W },
                feedback: `${W} J is only the mechanical work W — add ΔU = (3/2) P ΔV = ${dU} J!`,
              },
              {
                spec: { type: "number", value: dU },
                feedback: `${dU} J is only ΔU — add mechanical work W = P ΔV = ${W} J!`,
              },
            ],
            hint: "For a monatomic ideal gas at constant pressure, {{W = P ΔV}}, {{ΔU = (3/2) P ΔV}}, and {{Q = ΔU + W}}.",
            solution: [
              `Work done by gas: {{W = P ΔV = (${P_kPa} * 10^3) * ${num(clean(dv_L / 1000))} = ${W}}} J.`,
              `Internal energy change: {{ΔU = (3/2) P ΔV = 1.5 * ${W} = ${dU}}} J.`,
              `First Law: {{Q = ΔU + W = ${dU} + ${W} = ${Q}}} J.`,
            ],
          };
        }
        if (mode === 1) {
          // Carnot work output with Celsius temperatures!
          const setups: Array<[number, number, number]> = [
            [500, 300, 40], [500, 350, 30], [500, 400, 20],
            [600, 300, 50], [600, 360, 40], [600, 420, 30], [600, 450, 25], [600, 480, 20],
            [800, 320, 60], [800, 400, 50], [800, 480, 40], [800, 600, 25],
            [1000, 300, 70], [1000, 400, 60], [1000, 500, 50], [1000, 600, 40],
          ];
          const [TH, TC, effPct] = rng.pick(setups);
          const tHC = TH - 273;
          const tCC = TC - 273;
          const QH = rng.int(4, 24) * 200;
          const W = clean((QH * effPct) / 100);
          const QC = QH - W;
          return {
            prompt: `A Carnot heat engine operates between **${tHC} °C** and **${tCC} °C** (take {{T / "K" = t / "°C" + 273}}), absorbing **${QH} J** per cycle from the hot reservoir. Calculate the net work output per cycle in joules.`,
            answer: { type: "number", value: W, display: `${W} J` },
            traps:
              QC !== W
                ? [
                    {
                      spec: { type: "number", value: QC },
                      feedback: `${QC} J is the waste heat rejected Q_C — subtract from ${QH} J to get useful work W_net!`,
                    },
                  ]
                : undefined,
            hint: "Convert both temperatures to Kelvin first, compute {{η = 1 - T_C / T_H}}, then {{W_net = η Q_H}}.",
            solution: [
              `Kelvin temperatures: {{T_H = ${tHC} + 273 = ${TH}}} K; {{T_C = ${tCC} + 273 = ${TC}}} K.`,
              `{{η = 1 - ${TC} / ${TH} = ${num(clean(effPct / 100))}}} (${effPct}%).`,
              `{{W_net = ${num(clean(effPct / 100))} * ${QH} = ${W}}} J.`,
            ],
          };
        }
        // Net entropy change of irreversible conduction between two reservoirs
        const TC = rng.pick([200, 250, 300, 400]);
        const mult = rng.pick([2, 3, 4]);
        const TH = TC * mult;
        const k = rng.int(2, 18);
        const Q = TH * k;
        const dSH = -k;
        const dSC = mult * k;
        const ans = dSC + dSH;
        return {
          prompt: `Through a conducting rod, **${Q} J** of thermal energy flows spontaneously from a large hot reservoir at **${TH} K** to a large cold reservoir at **${TC} K**. Calculate the net entropy change {{ΔS_total}} of the two reservoirs in J K⁻¹.`,
          answer: { type: "number", value: ans, display: `${ans} J K⁻¹` },
          traps: [
            {
              spec: { type: "number", value: -ans },
              feedback: "Spontaneous conduction is irreversible, so total entropy of the universe must INCREASE (+ΔS > 0)!",
            },
            {
              spec: { type: "number", value: dSC + k },
              feedback: "Heat LEAVES the hot reservoir, so ΔS_H = −Q / T_H is negative!",
            },
          ],
          hint: "Compute {{ΔS_total = -Q / T_H + Q / T_C}}.",
          solution: [
            `Hot reservoir loses heat: {{ΔS_H = -${Q} / ${TH} = ${num(dSH)}}} J K⁻¹.`,
            `Cold reservoir gains heat: {{ΔS_C = +${Q} / ${TC} = +${dSC}}} J K⁻¹.`,
            `Net entropy change: {{ΔS_total = ${num(dSH)} + ${dSC} = +${ans}}} J K⁻¹.`,
          ],
        };
      }

      // TIER 3 — Adiabatic monatomic PV^(5/3)=const / TV^(2/3)=const, p–V Cycle Area, Minimum T_H
      const mode = rng.int(0, 2);
      if (mode === 0) {
        const useTemp = rng.bool();
        if (useTemp) {
          // Adiabatic TV^(2/3) = const with factor 8 or 27
          const expand = rng.bool();
          const vFactor = rng.pick([8, 27]);
          const tFactor = vFactor === 8 ? 4 : 9;
          const tSmall = rng.int(4, 15) * 25;
          const tBig = tSmall * tFactor;
          const [T1, T2] = expand ? [tBig, tSmall] : [tSmall, tBig];
          const action = expand ? `expands adiabatically to **${vFactor} times** its initial volume` : `is compressed adiabatically to **1/${vFactor}** of its initial volume`;
          return {
            prompt: `An ideal monatomic gas initially at **${T1} K** ${action}. Using {{P V^(5/3) = "const"}} and the ideal gas law, calculate its final Kelvin temperature.`,
            answer: { type: "number", value: T2, display: `${T2} K` },
            hint: "Eliminate {{P}} using {{P V = n R T}} to obtain {{T V^(2/3) = \"const\"}}.",
            solution: [
              `Combining {{P V^(5/3) = "const"}} with {{P = n R T / V}} gives {{T V^(2/3) = "const"}}.`,
              `Volume ratio factor {{${vFactor}^(2/3) = (${vFactor === 8 ? 2 : 3})^2 = ${tFactor}}}, so {{T_2 = ${expand ? `${T1} / ${tFactor}` : `${T1} * ${tFactor}`} = ${T2}}} K.`,
            ],
          };
        }
        // Adiabatic PV^(5/3) = const with factor 8 (8^(5/3) = 32)
        const expand = rng.bool();
        const pSmall = rng.int(4, 30) * 5;
        const pBig = pSmall * 32;
        const [P1, P2] = expand ? [pBig, pSmall] : [pSmall, pBig];
        const trapBoyle = expand ? roundTo(P1 / 8, 1) : P1 * 8;
        const action = expand ? "expands adiabatically to **8 times** its original volume" : "is compressed adiabatically to **1/8** of its original volume";
        return {
          prompt: `An ideal monatomic gas initially at pressure **${P1} kPa** ${action}. Using {{P V^(5/3) = "const"}}, calculate its final pressure in kPa.`,
          answer: { type: "number", value: P2, display: `${P2} kPa` },
          traps: [
            {
              spec: { type: "number", value: trapBoyle, tolerance: 0.5 },
              feedback: "That uses isothermal Boyle's law (PV = const) instead of adiabatic PV^(5/3) = const (8^(5/3) = 32)!",
            },
          ],
          hint: "Apply {{P_1 V_1^(5/3) = P_2 V_2^(5/3)}} and notice {{8^(5/3) = (8^(1/3))^5 = 2^5 = 32}}.",
          solution: [
            `Since {{8^(5/3) = 2^5 = 32}}, {{P_2 = ${expand ? `${P1} / 32` : `${P1} * 32`} = ${P2}}} kPa.`,
          ],
        };
      }
      if (mode === 1) {
        // Clockwise rectangular or right-triangular p–V cycle net work in kJ
        const isTriangle = rng.bool();
        const p1 = rng.int(1, 4) * 50;
        const dp = rng.int(2, 8) * 50;
        const p2 = p1 + dp;
        const v1L = rng.int(1, 5) * 10;
        const dvL = rng.int(2, 10) * 10;
        const v2L = v1L + dvL;
        const rectKJ = clean((dp * dvL) / 1000);
        const ans = isTriangle ? clean(rectKJ / 2) : rectKJ;
        const shapeDesc = isTriangle
          ? `a clockwise right-triangular cycle with vertices at ({{${num(clean(v1L / 1000))}}} m³, ${p1} kPa), ({{${num(clean(v1L / 1000))}}} m³, ${p2} kPa), and ({{${num(clean(v2L / 1000))}}} m³, ${p1} kPa)`
          : `a clockwise rectangular cycle between pressures **${p1} kPa** and **${p2} kPa** and between volumes **${num(clean(v1L / 1000))} m³** and **${num(clean(v2L / 1000))} m³**`;
        return {
          prompt: `An ideal gas completes ${shapeDesc} on a {{P}}–{{V}} diagram. Calculate the net work done BY the gas in one cycle in kilojoules (kJ).`,
          answer: { type: "number", value: ans, display: `${num(ans)} kJ` },
          traps: isTriangle
            ? [
                {
                  spec: { type: "number", value: rectKJ },
                  feedback: "Remember a triangle's area is (1/2) × base × height!",
                },
              ]
            : undefined,
          hint: "Net work in a clockwise closed cycle equals the positive enclosed area on the {{P}}–{{V}} diagram.",
          solution: [
            `{{ΔP = ${p2} - ${p1} = ${dp}}} kPa; {{ΔV = ${num(clean(v2L / 1000))} - ${num(clean(v1L / 1000))} = ${num(clean(dvL / 1000))}}} m³.`,
            isTriangle
              ? `Triangle area: {{W_net = (1/2) * ${dp} * ${num(clean(dvL / 1000))} = ${num(ans)}}} kJ.`
              : `Rectangle area: {{W_net = ${dp} * ${num(clean(dvL / 1000))} = ${num(ans)}}} kJ.`,
          ],
        };
      }
      // Minimum T_H needed for target Carnot efficiency
      const configs: Array<[number, number]> = [
        [20, 80], [25, 75], [40, 60], [50, 50], [60, 40], [75, 25],
      ];
      const [effPct, remPct] = rng.pick(configs);
      const minK = Math.ceil(200 / remPct);
      const maxK = Math.floor(480 / remPct);
      const k = rng.int(minK, Math.max(minK, maxK));
      const TC = k * remPct;
      const TH = k * 100;
      return {
        prompt: `A heat engine rejects waste heat to a cold river reservoir at **${TC} K**. What is the **minimum** hot-reservoir Kelvin temperature {{T_H}} theoretically required to achieve an efficiency of **${effPct}%**?`,
        answer: { type: "number", value: TH, display: `${TH} K` },
        hint: `Set {{η_Carnot = 1 - T_C / T_H = ${num(clean(effPct / 100))}}} and solve for {{T_H}}.`,
        solution: [
          `From {{1 - T_C / T_H = ${num(clean(effPct / 100))}}}, {{T_C / T_H = ${num(clean(remPct / 100))}}}.`,
          `{{T_H = ${TC} / ${num(clean(remPct / 100))} = ${TH}}} K.`,
        ],
      };
    },
  },
];
