import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

// IB Physics FA 2025 Data Booklet constants
const H = 6.63e-34; // J s
const C = 3.0e8; // m s^-1
const E_CHG = 1.6e-19; // C
const M_E = 9.11e-31; // kg
const HC_EV_NM = (H * C) / (E_CHG * 1e-9); // 1243.125 eV nm
const COMPTON_NM = 0.00243; // h / (m_e c) in nm
const H_OVER_E_14 = (H / E_CHG) * 1e14; // 0.414375 V per (10^14 Hz)

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 (SL, level 1): Photon Energy, Wavelength & Atomic Transitions
  // ===========================================================================
  {
    id: "e1-atom-quantum.photon-energy",
    topicId: "e1-atom-quantum",
    title: "Photon Energy & Atomic Transitions",
    level: 1,
    ibLevel: "SL",
    guideRef: "atomic-spectra-levels",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          // Level gap in eV
          const eUpper = roundTo(-rng.int(5, 32) / 10, 2);
          const gap = roundTo(rng.int(12, 85) / 10, 2);
          const eLower = roundTo(eUpper - gap, 2);
          const ans = clean(gap);
          const sumTrap = roundTo(Math.abs(eUpper) + Math.abs(eLower), 2);
          const traps =
            Math.abs(sumTrap - ans) > 0.1
              ? [
                  {
                    spec: { type: "number" as const, value: sumTrap, tolerance: 0.02 },
                    feedback: "Subtract the two energy levels (E_upper − E_lower) rather than adding their magnitudes.",
                  },
                ]
              : undefined;
          return {
            prompt: `An electron in an atom drops from an excited level at ${num(eUpper)} eV to a lower level at ${num(eLower)} eV. Calculate the energy of the emitted photon in eV (to 2 decimal places).`,
            answer: { type: "number", value: ans, tolerance: 0.02, display: `${ans.toFixed(2)} eV` },
            traps,
            hint: "Take the positive difference ΔE = E_upper − E_lower.",
            solution: [
              `Use {{ΔE = E_i - E_f}}.`,
              `{{ΔE = ${eUpper.toFixed(2)} - (${eLower.toFixed(2)}) = ${ans.toFixed(2)}}} eV.`,
            ],
          };
        } else {
          // Frequency (× 10^14 Hz) -> photon energy in eV
          const f14 = roundTo(rng.int(25, 135) / 10, 1);
          const eJ19 = roundTo((H * f14 * 1e14) / 1e-19, 3);
          const ans = roundTo((H * f14 * 1e14) / E_CHG, 2);
          return {
            prompt: `A photon has frequency {{${f14.toFixed(1)} * 10^(14)}} Hz. Calculate its energy in eV to 2 decimal places. (Use {{h = 6.63 * 10^(-34)}} J s and {{e = 1.60 * 10^(-19)}} C.)`,
            answer: { type: "number", value: ans, tolerance: 0.03, display: `${ans.toFixed(2)} eV` },
            hint: "Compute E = hf in joules, then divide by 1.60 × 10⁻¹⁹ J eV⁻¹.",
            solution: [
              `{{E = hf = 6.63 * 10^(-34) * ${f14.toFixed(1)} * 10^(14) = ${eJ19} * 10^(-19)}} J.`,
              `Convert to eV: {{E = (${eJ19} * 10^(-19)) / (1.60 * 10^(-19)) = ${ans.toFixed(2)}}} eV.`,
            ],
          };
        }
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Wavelength (nm) -> photon energy in eV
          const lamNm = rng.int(32, 160) * 5; // 160 to 800 nm
          const eJ19 = roundTo(((H * C) / (lamNm * 1e-9)) / 1e-19, 3);
          const ans = roundTo(HC_EV_NM / lamNm, 2);
          const tol = Math.max(0.03, roundTo(ans * 0.015, 3));
          return {
            prompt: `Calculate the energy, in eV (to 2 decimal places), of a photon with wavelength ${lamNm} nm. (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C.)`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${ans.toFixed(2)} eV` },
            hint: "Find E = hc/λ in joules (with λ in metres), then divide by 1.60 × 10⁻¹⁹.",
            solution: [
              `{{E = hc/λ = (6.63 * 10^(-34) * 3.00 * 10^8) / (${lamNm} * 10^(-9)) = ${eJ19} * 10^(-19)}} J.`,
              `Divide by {{1.60 * 10^(-19)}} J eV⁻¹: {{E = ${ans.toFixed(2)}}} eV.`,
            ],
          };
        } else {
          // Atomic transition (eV levels) -> emitted wavelength in nm
          const eUpper = roundTo(-rng.int(6, 28) / 10, 2);
          const gap = roundTo(rng.int(16, 78) / 10, 2);
          const eLower = roundTo(eUpper - gap, 2);
          const eJ19 = roundTo(gap * 1.6, 3);
          const ans = roundTo(HC_EV_NM / gap, 0);
          const tol = Math.max(3, roundTo(ans * 0.015, 0));
          return {
            prompt: `An atomic electron transitions from ${num(eUpper)} eV down to ${num(eLower)} eV. Calculate the wavelength of the emitted photon in nm (to the nearest integer; use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C).`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${ans} nm` },
            hint: "Find ΔE in eV, convert to joules, then evaluate λ = hc / ΔE.",
            solution: [
              `{{ΔE = ${eUpper.toFixed(2)} - (${eLower.toFixed(2)}) = ${gap.toFixed(2)}}} eV = {{${eJ19} * 10^(-19)}} J.`,
              `{{λ = hc / ΔE = (1.989 * 10^(-25)) / (${eJ19} * 10^(-19)) = ${ans}}} nm.`,
            ],
          };
        }
      }

      // Tier 3
      if (rng.bool()) {
        // Laser power & wavelength -> photons per second (× 10^16 s^-1)
        const lamNm = rng.int(60, 150) * 5; // 300 to 750 nm
        const powerMw = roundTo(rng.int(4, 50) / 2, 1); // 2.0 to 25.0 mW
        const ePhoton = (H * C) / (lamNm * 1e-9);
        const eJ19 = roundTo(ePhoton / 1e-19, 3);
        const rate16 = roundTo((powerMw * 1e-3) / ePhoton / 1e16, 2);
        const tol = Math.max(0.03, roundTo(rate16 * 0.015, 3));
        return {
          prompt: `A monochromatic laser of wavelength ${lamNm} nm emits radiant power ${powerMw.toFixed(1)} mW ({{${powerMw.toFixed(1)} * 10^(-3)}} W). Calculate the number of photons emitted per second, expressed as {{X * 10^(16)}} s⁻¹ (enter *X* to 2 decimal places; {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹).`,
          answer: { type: "number", value: rate16, tolerance: tol },
          hint: "Compute single-photon energy E = hc/λ, then divide total power P by E.",
          solution: [
            `Single-photon energy: {{E = hc/λ = (1.989 * 10^(-25)) / (${lamNm} * 10^(-9)) = ${eJ19} * 10^(-19)}} J.`,
            `Rate: {{N/t = P/E = (${powerMw.toFixed(1)} * 10^(-3)) / (${eJ19} * 10^(-19)) = ${rate16.toFixed(2)} * 10^(16)}} s⁻¹.`,
          ],
        };
      } else {
        // Given lower level and emitted wavelength, find upper bound level (negative eV)
        const lamNm = rng.int(50, 140) * 5; // 250 to 700 nm -> dE in [1.78, 4.97] eV
        const eLower = roundTo(-rng.int(60, 125) / 10, 2); // -6.00 to -12.50 eV
        const dE = roundTo(HC_EV_NM / lamNm, 2);
        const eUpper = roundTo(eLower + dE, 2); // strictly < -1.0 eV
        const tol = Math.max(0.04, roundTo(Math.abs(eUpper) * 0.015, 3));
        return {
          prompt: `An electron drops from an unknown excited level down to ${num(eLower)} eV, emitting a photon of wavelength ${lamNm} nm. Calculate the energy of the upper level in eV (include the minus sign, to 2 decimal places; {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C).`,
          answer: { type: "number", value: eUpper, tolerance: tol, display: `${num(eUpper)} eV` },
          hint: "Find ΔE = hc/λ in eV, then add ΔE to the lower level E_lower.",
          solution: [
            `Photon energy: {{ΔE = hc/(λe) = ${dE.toFixed(2)}}} eV.`,
            `Upper level: {{E_(upper) = ${eLower.toFixed(2)} + ${dE.toFixed(2)} = ${eUpper.toFixed(2)}}} eV.`,
          ],
        };
      }
    },
  },

  // ===========================================================================
  // DRILL 2 (HL, level 2): Photoelectric Effect & Compton Scattering
  // ===========================================================================
  {
    id: "e1-atom-quantum.photoelectric-hl",
    topicId: "e1-atom-quantum",
    title: "Photoelectric Effect & Compton Scattering (HL)",
    level: 2,
    ibLevel: "HL",
    guideRef: "photoelectric-compton-hl",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          // Stopping potential from photon energy (eV) and work function (eV)
          const phi = roundTo(rng.int(36, 92) / 20, 2); // 1.80 to 4.60 eV
          const vs = roundTo(rng.int(6, 70) / 20, 2); // 0.30 to 3.50 V
          const hf = roundTo(phi + vs, 2);
          const sumTrap = roundTo(hf + phi, 2);
          return {
            prompt: `Monochromatic light with photon energy ${hf.toFixed(2)} eV illuminates a metal surface of work function Φ = ${phi.toFixed(2)} eV. Calculate the stopping potential {{V_s}} in volts (to 2 decimal places).`,
            answer: { type: "number", value: vs, tolerance: 0.02, display: `${vs.toFixed(2)} V` },
            traps: [
              {
                spec: { type: "number", value: sumTrap, tolerance: 0.02 },
                feedback: "Subtract the work function from the photon energy: eV_s = hf − Φ.",
              },
            ],
            hint: "Use eV_s = hf − Φ directly in eV (1 eV per electron gives 1 V).",
            solution: [
              `{{E_(k,max) = hf - Φ = ${hf.toFixed(2)} - ${phi.toFixed(2)} = ${vs.toFixed(2)}}} eV.`,
              `Therefore {{V_s = E_(k,max)/e = ${vs.toFixed(2)}}} V.`,
            ],
          };
        } else {
          // Threshold frequency f_0 (× 10^14 Hz) from work function Φ in eV
          const phi = roundTo(rng.int(38, 114) / 20, 2); // 1.90 to 5.70 eV
          const phiJ19 = roundTo(phi * 1.6, 3);
          const f014 = roundTo((phi * E_CHG) / H / 1e14, 2);
          const tol = Math.max(0.04, roundTo(f014 * 0.015, 3));
          return {
            prompt: `A metal surface has a work function of Φ = ${phi.toFixed(2)} eV. Calculate its photoelectric threshold frequency {{f_0}}, expressed as {{X * 10^(14)}} Hz (enter *X* to 2 decimal places; {{h = 6.63 * 10^(-34)}} J s, {{e = 1.60 * 10^(-19)}} C).`,
            answer: { type: "number", value: f014, tolerance: tol },
            hint: "Convert Φ to joules (× 1.60 × 10⁻¹⁹), then divide by Planck's constant h.",
            solution: [
              `Convert work function: {{Φ = ${phi.toFixed(2)} * 1.60 * 10^(-19) = ${phiJ19} * 10^(-19)}} J.`,
              `{{f_0 = Φ/h = (${phiJ19} * 10^(-19)) / (6.63 * 10^(-34)) = ${f014.toFixed(2)} * 10^(14)}} Hz.`,
            ],
          };
        }
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Wavelength (nm) + metal Φ -> stopping potential V_s
          const metals = [
            { name: "caesium", phi: 2.14 },
            { name: "sodium", phi: 2.28 },
            { name: "potassium", phi: 2.30 },
            { name: "calcium", phi: 2.87 },
            { name: "magnesium", phi: 3.66 },
            { name: "zinc", phi: 4.30 },
            { name: "copper", phi: 4.50 },
          ];
          const metal = rng.pick(metals);
          const maxLam = Math.floor(HC_EV_NM / (metal.phi + 0.4) / 5) * 5;
          const minLam = 140;
          const lamNm = rng.int(minLam / 5, Math.max(minLam / 5 + 1, maxLam / 5)) * 5;
          const hfEv = roundTo(HC_EV_NM / lamNm, 2);
          const vs = roundTo(HC_EV_NM / lamNm - metal.phi, 2);
          const tol = Math.max(0.04, roundTo(vs * 0.02, 3));
          return {
            prompt: `Ultraviolet light of wavelength ${lamNm} nm shines on clean ${metal.name} (Φ = ${metal.phi.toFixed(2)} eV). Calculate the stopping potential {{V_s}} in volts to 2 decimal places. (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C.)`,
            answer: { type: "number", value: vs, tolerance: tol, display: `${vs.toFixed(2)} V` },
            hint: "Calculate photon energy E = hc/λ in eV, then subtract Φ to obtain V_s.",
            solution: [
              `Photon energy: {{E = hc/(λe) = ${hfEv.toFixed(2)}}} eV.`,
              `Stopping potential: {{V_s = E - Φ = ${hfEv.toFixed(2)} - ${metal.phi.toFixed(2)} = ${vs.toFixed(2)}}} V.`,
            ],
          };
        } else {
          // Compton scattering wavelength λ_f (in nm to 4 d.p.)
          const lamI = roundTo(rng.int(15, 75) * 0.002, 4); // 0.0300 to 0.1500 nm
          const angles = [30, 45, 60, 90, 120, 135, 150, 180] as const;
          const theta = rng.pick(angles);
          const rad = (theta * Math.PI) / 180;
          const dLam = roundTo(COMPTON_NM * (1 - Math.cos(rad)), 5);
          const lamF = roundTo(lamI + dLam, 4);
          return {
            prompt: `An X-ray photon of initial wavelength ${lamI.toFixed(4)} nm undergoes Compton scattering through θ = ${theta}° off a stationary free electron. Using {{h/(m_e c) = 0.00243}} nm, calculate the scattered wavelength {{λ_f}} in nm to 4 decimal places.`,
            answer: { type: "number", value: lamF, tolerance: 0.0002, display: `${lamF.toFixed(4)} nm` },
            hint: "Evaluate Δλ = 0.00243(1 − cos θ) in degrees, then add Δλ to λ_i.",
            solution: [
              `{{Δλ = 0.00243 * (1 - cos ${theta}°) = ${dLam.toFixed(5)}}} nm.`,
              `{{λ_f = ${lamI.toFixed(4)} + ${dLam.toFixed(5)} = ${lamF.toFixed(4)}}} nm.`,
            ],
          };
        }
      }

      // Tier 3
      if (rng.bool()) {
        // Max photoelectron speed v_max (× 10^5 m s^-1)
        const phi = roundTo(rng.int(40, 90) / 20, 2); // 2.00 to 4.50 eV
        const ekEv = roundTo(rng.int(8, 84) / 20, 2); // 0.40 to 4.20 eV
        const hf = roundTo(phi + ekEv, 2);
        const ekJ19 = roundTo(ekEv * 1.6, 3);
        const v5 = roundTo(Math.sqrt((2 * ekEv * E_CHG) / M_E) / 1e5, 2);
        const tol = Math.max(0.04, roundTo(v5 * 0.015, 3));
        return {
          prompt: `Photons of energy ${hf.toFixed(2)} eV strike a metal with work function Φ = ${phi.toFixed(2)} eV. Calculate the maximum speed of emitted photoelectrons, expressed as {{X * 10^5}} m s⁻¹ (enter *X* to 2 decimal places; {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C).`,
          answer: { type: "number", value: v5, tolerance: tol },
          hint: "Find E_k,max = hf − Φ in joules, then solve v_max = √(2 E_k,max / m_e).",
          solution: [
            `{{E_(k,max) = ${hf.toFixed(2)} - ${phi.toFixed(2)} = ${ekEv.toFixed(2)}}} eV = {{${ekJ19} * 10^(-19)}} J.`,
            `{{v_(max) = sqrt((2 * ${ekJ19} * 10^(-19)) / (9.11 * 10^(-31))) = ${v5.toFixed(2)} * 10^5}} m s⁻¹.`,
          ],
        };
      } else {
        // Millikan V_s–f two-point shift
        const f1 = roundTo(rng.int(60, 95) / 10, 1); // ×10^14 Hz
        const df = roundTo(rng.int(15, 55) / 10, 1); // ×10^14 Hz
        const f2 = roundTo(f1 + df, 1);
        const v1 = roundTo(rng.int(8, 36) / 20, 2); // 0.40 to 1.80 V
        const v2 = roundTo(v1 + H_OVER_E_14 * df, 2);
        const tol = Math.max(0.04, roundTo(v2 * 0.015, 3));
        return {
          prompt: `On a metal surface, light of frequency {{${f1.toFixed(1)} * 10^(14)}} Hz gives a stopping potential of ${v1.toFixed(2)} V. Calculate the stopping potential (in volts, to 2 decimal places) when the frequency is raised to {{${f2.toFixed(1)} * 10^(14)}} Hz. (Use {{h/e = 4.14 * 10^(-15)}} V s.)`,
          answer: { type: "number", value: v2, tolerance: tol, display: `${v2.toFixed(2)} V` },
          hint: "Since the Millikan graph has gradient h/e, use ΔV_s = (h/e) Δf.",
          solution: [
            `Change in frequency: {{Δf = (${f2.toFixed(1)} - ${f1.toFixed(1)}) * 10^(14) = ${df.toFixed(1)} * 10^(14)}} Hz.`,
            `{{ΔV_s = (h/e) Δf = 4.14 * 10^(-15) * ${df.toFixed(1)} * 10^(14) = ${roundTo(H_OVER_E_14 * df, 2).toFixed(2)}}} V.`,
            `{{V_2 = ${v1.toFixed(2)} + ${roundTo(H_OVER_E_14 * df, 2).toFixed(2)} = ${v2.toFixed(2)}}} V.`,
          ],
        };
      }
    },
  },

  // ===========================================================================
  // DRILL 3 (HL, level 2): Bohr Hydrogen Levels, Nuclear Radius & de Broglie
  // ===========================================================================
  {
    id: "e1-atom-quantum.bohr-debroglie-hl",
    topicId: "e1-atom-quantum",
    title: "Bohr Model, Nuclear Radius & de Broglie (HL)",
    level: 2,
    ibLevel: "HL",
    guideRef: "wave-particle-duality-hl",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          // Bohr hydrogen transition energy in eV
          const nf = rng.int(1, 4);
          const ni = rng.int(nf + 1, 8);
          const eNi = roundTo(-13.6 / (ni * ni), 3);
          const eNf = roundTo(-13.6 / (nf * nf), 3);
          const dE = roundTo(13.6 * (1 / (nf * nf) - 1 / (ni * ni)), 2);
          return {
            prompt: `Using the Bohr formula {{E_n = -13.6/n^2}} eV, calculate the energy (in eV, to 2 decimal places) of the photon emitted when a hydrogen electron drops from *n* = ${ni} to *n* = ${nf}.`,
            answer: { type: "number", value: dE, tolerance: 0.03, display: `${dE.toFixed(2)} eV` },
            hint: "Calculate E_ni and E_nf using −13.6 / n², then take the positive difference E_ni − E_nf.",
            solution: [
              `{{E_${ni} = -13.6/${ni}^2 = ${eNi.toFixed(3)}}} eV and {{E_${nf} = -13.6/${nf}^2 = ${eNf.toFixed(3)}}} eV.`,
              `{{ΔE = ${eNi.toFixed(3)} - (${eNf.toFixed(3)}) = ${dE.toFixed(2)}}} eV.`,
            ],
          };
        } else {
          // Nuclear radius R = R_0 A^(1/3) in fm
          const A = rng.int(8, 238);
          const ans = roundTo(1.2 * Math.cbrt(A), 2);
          return {
            prompt: `Estimate the nuclear radius of a nuclide with nucleon number *A* = ${A}, using {{R = R_0 A^(1/3)}} with {{R_0 = 1.20}} fm (enter the numerical value in fm to 2 decimal places).`,
            answer: { type: "number", value: ans, tolerance: 0.03 },
            hint: "Take the cube root of A, then multiply by 1.20 fm.",
            solution: [
              `Compute cube root: {{${A}^(1/3) = ${roundTo(Math.cbrt(A), 3)}}}.`,
              `{{R = 1.20 * ${roundTo(Math.cbrt(A), 3)} = ${ans.toFixed(2)}}} fm.`,
            ],
          };
        }
      }

      if (tier === 2) {
        if (rng.bool()) {
          // de Broglie wavelength of electron accelerated through V (in pm, number only)
          const V = rng.int(4, 100) * 50; // 200 V to 5000 V
          const p = Math.sqrt(2 * M_E * E_CHG * V);
          const lamPm = roundTo((H / p) * 1e12, 1);
          const tol = Math.max(0.4, roundTo(lamPm * 0.015, 2));
          return {
            prompt: `An electron is accelerated from rest through a potential difference of ${V} V. Calculate its de Broglie wavelength in picometres (enter the numerical value to 1 decimal place; {{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C).`,
            answer: { type: "number", value: lamPm, tolerance: tol },
            hint: "Use λ = h / √(2 m_e e V), then multiply metres by 10¹² to convert to pm.",
            solution: [
              `{{p = sqrt(2 * 9.11 * 10^(-31) * 1.60 * 10^(-19) * ${V}) = ${roundTo(p / 1e-23, 3)} * 10^(-23)}} kg m s⁻¹.`,
              `{{λ = h/p = ${lamPm.toFixed(1)} * 10^(-12)}} m = ${lamPm.toFixed(1)} pm.`,
            ],
          };
        } else {
          // de Broglie wavelength from electron speed v (× 10^6 m s^-1) in nm
          const v6 = roundTo(rng.int(10, 98) / 10, 1); // 1.0 to 9.8 × 10^6 m s^-1
          const p = M_E * v6 * 1e6;
          const lamNm = roundTo((H / p) * 1e9, 3);
          const tol = Math.max(0.003, roundTo(lamNm * 0.015, 4));
          return {
            prompt: `An electron travels at speed {{${v6.toFixed(1)} * 10^6}} m s⁻¹. Calculate its de Broglie wavelength in nm to 3 decimal places. (Use {{h = 6.63 * 10^(-34)}} J s and {{m_e = 9.11 * 10^(-31)}} kg.)`,
            answer: { type: "number", value: lamNm, tolerance: tol, display: `${lamNm.toFixed(3)} nm` },
            hint: "Compute momentum p = m_e v, then divide Planck's constant h by p and multiply by 10⁹ for nm.",
            solution: [
              `{{p = m_e v = 9.11 * 10^(-31) * ${v6.toFixed(1)} * 10^6 = ${roundTo(p / 1e-24, 3)} * 10^(-24)}} kg m s⁻¹.`,
              `{{λ = h/p = ${lamNm.toFixed(3)} * 10^(-9)}} m = ${lamNm.toFixed(3)} nm.`,
            ],
          };
        }
      }

      // Tier 3
      if (rng.bool()) {
        // Required accelerating potential V for target electron de Broglie wavelength λ (in pm)
        const lamPm = roundTo(rng.int(30, 160) / 2, 1); // 15.0 to 80.0 pm
        const lamM = lamPm * 1e-12;
        const V = roundTo((H * H) / (2 * M_E * E_CHG * lamM * lamM), 0);
        const tol = Math.max(5, roundTo(V * 0.02, 0));
        return {
          prompt: `An electron diffraction experiment requires electrons with a de Broglie wavelength of ${lamPm.toFixed(1)} pm ({{${lamPm.toFixed(1)} * 10^(-12)}} m). Calculate the non-relativistic accelerating potential difference *V* required, in volts (to the nearest whole volt; {{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C).`,
          answer: { type: "number", value: V, tolerance: tol, display: `${V} V` },
          hint: "Rearrange λ = h / √(2 m_e e V) to obtain V = h² / (2 m_e e λ²).",
          solution: [
            `Square {{λ = h / sqrt(2 m_e e V)}} and solve for *V*: {{V = h^2 / (2 m_e e λ^2)}}.`,
            `Substitute {{λ = ${lamPm.toFixed(1)} * 10^(-12)}} m: {{V = ${V}}} V.`,
          ],
        };
      } else {
        // Synthesis: Photoelectric -> minimum de Broglie wavelength of photoelectrons (nm)
        const phi = roundTo(rng.int(18, 36) / 10, 2); // 1.80 to 3.60 eV
        const ekEv = roundTo(rng.int(6, 65) / 10, 2); // 0.60 to 6.50 eV
        const hf = roundTo(phi + ekEv, 2);
        const pMax = Math.sqrt(2 * M_E * ekEv * E_CHG);
        const lamMinNm = roundTo((H / pMax) * 1e9, 3);
        const tol = Math.max(0.008, roundTo(lamMinNm * 0.015, 4));
        return {
          prompt: `Photons of energy ${hf.toFixed(2)} eV eject photoelectrons from a metal of work function Φ = ${phi.toFixed(2)} eV. Calculate the **minimum** de Broglie wavelength among the emitted electrons in nm to 3 decimal places. ({{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C.)`,
          answer: { type: "number", value: lamMinNm, tolerance: tol, display: `${lamMinNm.toFixed(3)} nm` },
          hint: "Find E_k,max = hf − Φ in joules, then apply λ_min = h / √(2 m_e E_k,max).",
          solution: [
            `{{E_(k,max) = ${hf.toFixed(2)} - ${phi.toFixed(2)} = ${ekEv.toFixed(2)}}} eV = {{${roundTo(ekEv * 1.6, 3)} * 10^(-19)}} J.`,
            `{{p_(max) = sqrt(2 m_e E_(k,max)) = ${roundTo(pMax / 1e-25, 2)} * 10^(-25)}} kg m s⁻¹.`,
            `{{λ_(min) = h / p_(max) = ${lamMinNm.toFixed(3)}}} nm.`,
          ],
        };
      }
    },
  },
];
