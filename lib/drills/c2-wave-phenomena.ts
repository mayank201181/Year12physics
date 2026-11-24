import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { num, ordinal, roundTo } from "./helpers.ts";

const DEG = 180 / Math.PI;
const RAD = Math.PI / 180;

function safeTrap(val: number, ans: number, tol: number, feedback: string, out: Trap[]) {
  const cleanVal = roundTo(val, 4);
  if (!Number.isFinite(cleanVal) || cleanVal <= 0) return;
  if (Math.abs(cleanVal - ans) > Math.max(tol * 2.5, 0.05 * Math.abs(ans), 0.15)) {
    out.push({ spec: { type: "number", value: cleanVal, tolerance: Math.max(tol, 0.01) }, feedback });
  }
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: Snell's Law, TIR & Young's Double-Slit (SL, level 1)
  // ===========================================================================
  {
    id: "c2-wave-phenomena.snell-double-slit",
    topicId: "c2-wave-phenomena",
    title: "Snell's Law, TIR & Double-Slit Fringes",
    level: 1,
    ibLevel: "SL",
    guideRef: "refraction-diffraction-double-slit",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.45)) {
          // Wavelength inside a refractive medium: λ_2 = λ_1 / n
          const lamAir = rng.pick([420, 450, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700]);
          const media: Array<[string, number]> = [
            ["water", 1.33],
            ["acrylic", 1.49],
            ["crown glass", 1.52],
            ["flint glass", 1.62],
            ["sapphire", 1.77],
            ["cubic zirconia", 2.15],
            ["diamond", 2.42],
          ];
          const [mat, n] = rng.pick(media);
          const ans = roundTo(lamAir / n, 0);
          const traps: Trap[] = [];
          safeTrap(roundTo(lamAir * n, 0), ans, 2, "Wavelength shrinks when entering a denser medium — divide by n rather than multiplying.", traps);
          return {
            prompt: `Monochromatic light of wavelength ${lamAir} nm in air ({{n = 1.00}}) enters ${mat} ({{n = ${num(n)}}}). Calculate its wavelength inside the ${mat} in nm (to the nearest integer).`,
            answer: { type: "number", value: ans, tolerance: 2, display: `${num(ans)} nm` },
            solution: [
              "Frequency remains constant across the boundary, so {{λ_2 = λ_1 / n}}.",
              `{{λ_2 = ${lamAir} / ${num(n)} = ${num(roundTo(lamAir / n, 1))}}} nm ≈ ${num(ans)} nm.`,
            ],
            hint: "Does wavelength get shorter or longer in a medium with larger {{n}}? Use {{λ_2 = λ_1 / n}}.",
            traps,
          };
        }

        // Young's double-slit fringe spacing s = λ D / d in mm
        const lamNm = rng.pick([440, 480, 500, 520, 540, 560, 580, 600, 620, 640, 650, 660, 680, 700]);
        const dMm = rng.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
        const Dm = rng.pick([1.2, 1.5, 1.6, 1.8, 2.0, 2.4, 2.5, 3.0]);
        const ans = roundTo((lamNm * Dm) / (dMm * 1000), 2);
        const tol = Math.max(0.03, roundTo(ans * 0.015, 3));
        const traps: Trap[] = [];
        safeTrap(ans / 1000, ans, tol, "That is the spacing in metres — multiply by 1000 to convert to mm.", traps);
        return {
          prompt: `Light of wavelength ${lamNm} nm passes through two slits separated by ${num(dMm)} mm onto a screen ${num(Dm)} m away. Calculate the fringe spacing {{s}} in mm (to 2 decimal places).`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} mm` },
          solution: [
            `Convert to metres: {{λ = ${lamNm} * 10^(-9)}} m, {{d = ${num(dMm)} * 10^(-3)}} m, {{D = ${num(Dm)}}} m.`,
            `Apply {{s = (λ D)/d = (${lamNm} * 10^(-9) * ${num(Dm)})/(${num(dMm)} * 10^(-3)) = ${num(roundTo(ans / 1000, 6))}}} m = ${num(ans)} mm.`,
          ],
          hint: "Convert {{λ}} and {{d}} to metres, compute {{s = (λ D)/d}}, then multiply by 1000 for mm.",
          traps,
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          // Snell's law refraction angle θ_2
          const theta1 = rng.pick([20, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 60]);
          const n2 = rng.pick([1.33, 1.42, 1.48, 1.5, 1.52, 1.58, 1.62, 1.65, 1.75]);
          const sin2 = Math.sin(theta1 * RAD) / n2;
          const ans = roundTo(Math.asin(sin2) * DEG, 1);
          const traps: Trap[] = [];
          const wrongComp = roundTo(Math.asin(Math.sin((90 - theta1) * RAD) / n2) * DEG, 1);
          safeTrap(wrongComp, ans, 0.2, "The given angle is already measured to the normal — do not subtract from 90°.", traps);
          return {
            prompt: `A ray of light in air ({{n_1 = 1.00}}) strikes a flat block of refractive index {{n_2 = ${num(n2)}}} at an angle of incidence {{θ_1 = ${theta1}°}} to the normal. Calculate the angle of refraction {{θ_2}} in degrees (to 1 decimal place).`,
            answer: { type: "number", value: ans, tolerance: 0.2, display: `${num(ans)}°` },
            solution: [
              `Apply Snell's law: {{1.00 sin ${theta1}° = ${num(n2)} sin θ_2}}.`,
              `{{sin θ_2 = ${num(roundTo(Math.sin(theta1 * RAD), 4))} / ${num(n2)} = ${num(roundTo(sin2, 4))}}}.`,
              `{{θ_2 = ${num(ans)}°}}.`,
            ],
            hint: "Use {{sin θ_2 = (sin θ_1) / n_2}} in degree mode.",
            traps,
          };
        }
        if (mode === 2) {
          // Critical angle between core n1 and cladding n2
          const n1 = rng.pick([1.48, 1.5, 1.52, 1.56, 1.6, 1.64, 1.68, 1.72, 1.8, 2.0, 2.4]);
          const n2Options = [1.0, 1.25, 1.33, 1.38, 1.42, 1.44].filter((x) => x < n1 - 0.08);
          const n2 = rng.pick(n2Options);
          const ans = roundTo(Math.asin(n2 / n1) * DEG, 1);
          const traps: Trap[] = [];
          if (n2 > 1.05) {
            safeTrap(roundTo(Math.asin(1 / n1) * DEG, 1), ans, 0.2, "Use n₂ / n₁ with the second medium's refractive index, not 1 / n₁.", traps);
          }
          return {
            prompt: `Light travels from a medium of refractive index {{n_1 = ${num(n1)}}} toward a boundary with a medium of refractive index {{n_2 = ${num(n2)}}}. Calculate the critical angle {{θ_c}} in degrees (to 1 decimal place).`,
            answer: { type: "number", value: ans, tolerance: 0.2, display: `${num(ans)}°` },
            solution: [
              `Apply {{sin θ_c = n_2 / n_1 = ${num(n2)} / ${num(n1)} = ${num(roundTo(n2 / n1, 4))}}}.`,
              `{{θ_c = ${num(ans)}°}}.`,
            ],
            hint: "For TIR from denser {{n_1}} to less dense {{n_2}}, use {{sin θ_c = n_2 / n_1}}.",
            traps,
          };
        }
        // Invert Young's double-slit across k fringe spacings (from 1st to (k+1)th bright fringe)
        const lamNm = rng.pick([440, 480, 500, 520, 540, 560, 600, 620, 640, 660, 680]);
        const dMm = rng.pick([0.25, 0.3, 0.4, 0.45, 0.5, 0.6]);
        const Dm = rng.pick([1.5, 1.8, 2.0, 2.4, 2.5]);
        const spacings = rng.pick([4, 5, 6, 8]);
        const sMm = (lamNm * Dm) / (dMm * 1000);
        const spanMm = roundTo(sMm * spacings, 2);
        const ans = roundTo(((spanMm / spacings) * dMm * 1000) / Dm, 0);
        const traps: Trap[] = [];
        safeTrap(roundTo(((spanMm / (spacings + 1)) * dMm * 1000) / Dm, 0), ans, 4, `From the 1st bright fringe to the ${ordinal(spacings + 1)} bright fringe there are ${spacings} spacings, not ${spacings + 1}!`, traps);
        return {
          prompt: `In a double-slit experiment with {{d = ${num(dMm)}}} mm and {{D = ${num(Dm)}}} m, the distance from the **1st bright fringe** to the **${ordinal(spacings + 1)} bright fringe** on the same side of centre is ${num(spanMm)} mm. Calculate the wavelength {{λ}} in nm (to the nearest integer).`,
          answer: { type: "number", value: ans, tolerance: 3, display: `${num(ans)} nm` },
          solution: [
            `Number of fringe spacings = ${spacings + 1} − 1 = ${spacings}, so {{s = ${num(spanMm)} / ${spacings} = ${num(roundTo(spanMm / spacings, 3))}}} mm.`,
            `Rearrange {{λ = (s d)/D}}: {{λ = (${num(roundTo(spanMm / spacings, 3))} * 10^(-3) * ${num(dMm)} * 10^(-3)) / ${num(Dm)} = ${num(ans)}}} nm.`,
          ],
          hint: `First find the spacing {{s}} by dividing ${num(spanMm)} mm by (${spacings + 1} − 1) = ${spacings}.`,
          traps,
        };
      }

      // TIER 3: Stretch multi-step
      const mode = rng.int(1, 3);
      if (mode === 1) {
        // Angle given to the SURFACE instead of the normal!
        const surfAngle = rng.pick([20, 24, 28, 30, 32, 35, 38, 40, 50, 52, 55, 58, 60, 65]);
        const theta1 = 90 - surfAngle;
        const n2 = rng.pick([1.33, 1.45, 1.5, 1.54, 1.6, 1.66]);
        const sin2 = Math.sin(theta1 * RAD) / n2;
        const ans = roundTo(Math.asin(sin2) * DEG, 1);
        const traps: Trap[] = [];
        const wrongSurf = roundTo(Math.asin(Math.sin(surfAngle * RAD) / n2) * DEG, 1);
        safeTrap(wrongSurf, ans, 0.2, `You plugged ${surfAngle}° (angle to the surface) into Snell's law instead of θ₁ = 90° − ${surfAngle}° = ${theta1}° to the normal!`, traps);
        return {
          prompt: `A laser ray in air ({{n_1 = 1.00}}) hits a glass surface ({{n_2 = ${num(n2)}}}) at an angle of **${surfAngle}° to the glass surface**. Calculate the angle of refraction {{θ_2}} (measured to the normal) in degrees to 1 decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.2, display: `${num(ans)}°` },
          solution: [
            `Convert from surface angle to normal angle: {{θ_1 = 90° - ${surfAngle}° = ${theta1}°}}.`,
            `Apply Snell's law: {{sin θ_2 = (sin ${theta1}°) / ${num(n2)} = ${num(roundTo(sin2, 4))}}} → {{θ_2 = ${num(ans)}°}}.`,
          ],
          hint: "Subtract the surface angle from 90° to find {{θ_1}} to the normal before applying Snell's law.",
          traps,
        };
      }
      if (mode === 2) {
        // Double-slit immersed in liquid of refractive index n
        const sAir = rng.pick([2.4, 2.8, 3.0, 3.2, 3.6, 4.0, 4.2, 4.5, 4.8, 5.0, 5.4, 6.0, 6.4, 7.2]);
        const nLiq = rng.pick([1.2, 1.25, 1.33, 1.36, 1.4, 1.44, 1.5, 1.6]);
        const ans = roundTo(sAir / nLiq, 2);
        const tol = Math.max(0.03, roundTo(ans * 0.015, 3));
        const traps: Trap[] = [];
        safeTrap(roundTo(sAir * nLiq, 2), ans, tol, "Submerging the apparatus shrinks wavelength to λ/n, so fringe spacing decreases — divide by n.", traps);
        return {
          prompt: `A Young's double-slit apparatus produces bright fringes spaced ${num(sAir)} mm apart in air. The entire setup is submerged in a clear liquid of refractive index {{n = ${num(nLiq)}}}. Calculate the new fringe spacing in mm (to 2 decimal places).`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} mm` },
          solution: [
            `Inside the liquid, frequency is unchanged so wavelength shrinks to {{λ' = λ / ${num(nLiq)}}}.`,
            `Since {{s ∝ λ}}, the new fringe spacing is {{s' = ${num(sAir)} / ${num(nLiq)} = ${num(ans)}}} mm.`,
          ],
          hint: "How does wavelength {{λ}} change inside a medium of refractive index {{n}}? Use {{s' = s / n}}.",
          traps,
        };
      }
      // Path difference in wavelengths from two coherent sources
      const lam = rng.pick([0.4, 0.5, 0.6, 0.8, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0]);
      const mult = rng.pick([1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5]);
      const d1 = roundTo(rng.int(10, 40) * 0.5, 1);
      const d2 = roundTo(d1 + mult * lam, 2);
      const ans = mult;
      const traps: Trap[] = [];
      safeTrap(roundTo(d2 - d1, 2), ans, 0.05, "You gave the raw path difference in cm — divide by the wavelength λ to express it as a multiple of λ.", traps);
      return {
        prompt: `Two coherent in-phase transmitters emit waves of wavelength ${num(lam)} cm. A receiver lies ${num(d1)} cm from the first transmitter and ${num(d2)} cm from the second. Express the path difference as a multiple of {{λ}} (e.g. 2.5).`,
        answer: { type: "number", value: ans, tolerance: 0.02, display: `${num(ans)}` },
        solution: [
          `Raw path difference: {{Δ = ${num(d2)} - ${num(d1)} = ${num(roundTo(d2 - d1, 2))}}} cm.`,
          `Divide by wavelength: {{Δ / λ = ${num(roundTo(d2 - d1, 2))} / ${num(lam)} = ${num(ans)}}} (so ${Number.isInteger(ans) ? "constructive" : "destructive"} interference occurs).`,
        ],
        hint: "Subtract the two distances, then divide by {{λ}}.",
        traps,
      };
    },
  },

  // ===========================================================================
  // DRILL 2: Standing Waves on Strings & Pipes (SL, level 2)
  // ===========================================================================
  {
    id: "c2-wave-phenomena.standing-waves",
    topicId: "c2-wave-phenomena",
    title: "Standing Waves on Strings & Pipes",
    level: 2,
    ibLevel: "SL",
    guideRef: "standing-waves-resonance",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Wavelength from number of nodes on fixed string of length L
          const loops = rng.int(2, 6);
          const nodes = loops + 1;
          const halfLam = rng.pick([0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6]);
          const L = roundTo(loops * halfLam, 2);
          const ans = roundTo(2 * halfLam, 2);
          const traps: Trap[] = [];
          safeTrap(halfLam, ans, 0.02, "Adjacent nodes are half a wavelength apart — multiply by 2 to get λ.", traps);
          safeTrap(roundTo((2 * L) / nodes, 2), ans, 0.02, `With ${nodes} nodes (including both ends), there are ${loops} loops, not ${nodes}!`, traps);
          return {
            prompt: `A standing wave on a stretched string of length ${num(L)} m displays **${nodes} nodes** in total (including both fixed ends). Calculate the wavelength {{λ}} in metres (to 2 decimal places).`,
            answer: { type: "number", value: ans, tolerance: 0.02, display: `${num(ans)} m` },
            solution: [
              `${nodes} nodes enclose ${loops} half-wavelength loops ({{n = ${loops}}}).`,
              `{{λ = (2 L) / ${loops} = (2 * ${num(L)}) / ${loops} = ${num(ans)}}} m.`,
            ],
            hint: "Count the number of loops between the nodes: {{n = (" + nodes + " - 1)}}; each loop is {{λ / 2}}.",
            traps,
          };
        }
        // Fundamental frequency of open–open vs open–closed pipe
        const isClosed = rng.bool(0.5);
        const v = rng.pick([330, 336, 340, 344]);
        const L = rng.pick([0.34, 0.4, 0.425, 0.5, 0.6, 0.68, 0.75, 0.8, 0.85, 1.0, 1.2, 1.25, 1.5]);
        const rawF = isClosed ? v / (4 * L) : v / (2 * L);
        const ans = roundTo(rawF, 1);
        const traps: Trap[] = [];
        const altF = roundTo(isClosed ? v / (2 * L) : v / (4 * L), 1);
        safeTrap(altF, ans, 0.5, isClosed ? "An open–closed pipe has λ₁ = 4L (so f₁ = v / 4L), not 2L." : "An open–open pipe has λ₁ = 2L (so f₁ = v / 2L), not 4L.", traps);
        return {
          prompt: `An air pipe of length ${num(L)} m is **${isClosed ? "closed at one end and open at the other" : "open at both ends"}**. Taking the speed of sound as ${v} m s⁻¹, calculate its fundamental frequency in Hz (to 1 decimal place).`,
          answer: { type: "number", value: ans, tolerance: 0.4, display: `${num(ans)} Hz` },
          solution: [
            isClosed ? `For an open–closed pipe, {{λ_1 = 4 L = ${num(roundTo(4 * L, 3))}}} m.` : `For an open–open pipe, {{λ_1 = 2 L = ${num(roundTo(2 * L, 3))}}} m.`,
            `{{f_1 = v / λ_1 = ${v} / ${num(roundTo(isClosed ? 4 * L : 2 * L, 3))} = ${num(ans)}}} Hz.`,
          ],
          hint: isClosed ? "Use {{f_1 = v / (4 L)}} for an open–closed pipe." : "Use {{f_1 = v / (2 L)}} for an open–open pipe.",
          traps,
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          // Open–closed pipe higher odd harmonic (3rd, 5th, or 7th)
          const h = rng.pick([3, 5, 7]);
          const v = rng.pick([330, 336, 340, 344]);
          const L = rng.pick([0.34, 0.425, 0.5, 0.6, 0.68, 0.8, 0.85, 1.0, 1.2, 1.25]);
          const ans = roundTo((h * v) / (4 * L), 1);
          const traps: Trap[] = [];
          safeTrap(roundTo((h * v) / (2 * L), 1), ans, 1, "Use 4L in the denominator for an open–closed pipe, not 2L.", traps);
          return {
            prompt: `A cylindrical pipe of length ${num(L)} m is closed at one end and open at the other. Taking the speed of sound as ${v} m s⁻¹, calculate the frequency of its **${ordinal(h)} harmonic** in Hz (to 1 decimal place).`,
            answer: { type: "number", value: ans, tolerance: 0.6, display: `${num(ans)} Hz` },
            solution: [
              `Fundamental frequency: {{f_1 = v / (4 L) = ${v} / (4 * ${num(L)}) = ${num(roundTo(v / (4 * L), 2))}}} Hz.`,
              `${ordinal(h)} harmonic: {{f_${h} = ${h} f_1 = ${num(ans)}}} Hz.`,
            ],
            hint: `Compute {{f_1 = v / (4 L)}}, then multiply by ${h}.`,
            traps,
          };
        }
        if (mode === 2) {
          // Stretched string wave speed from harmonic n, L, and f_n
          const n = rng.pick([2, 3, 4, 5]);
          const L = rng.pick([0.45, 0.6, 0.75, 0.8, 0.9, 1.0, 1.2, 1.5]);
          const f = rng.pick([180, 240, 300, 320, 360, 400, 420, 450, 480, 540, 600]);
          const lam = (2 * L) / n;
          const ans = roundTo(f * lam, 1);
          const traps: Trap[] = [];
          safeTrap(roundTo(f * (L / n), 1), ans, 0.6, "For a fixed string, λ_n = 2L / n, not L / n.", traps);
          return {
            prompt: `A stretched string of length ${num(L)} m fixed at both ends vibrates in its **${ordinal(n)} harmonic** at ${f} Hz. Calculate the speed of transverse waves along the string in m s⁻¹ (to 1 decimal place).`,
            answer: { type: "number", value: ans, tolerance: 0.6, display: `${num(ans)} m s^-1` },
            solution: [
              `Wavelength in the ${ordinal(n)} harmonic: {{λ = (2 L) / ${n} = ${num(roundTo(lam, 4))}}} m.`,
              `Wave speed: {{v = f λ = ${f} * ${num(roundTo(lam, 4))} = ${num(ans)}}} m s⁻¹.`,
            ],
            hint: "First find {{λ_n = (2 L) / n}}, then use {{v = f λ}}.",
            traps,
          };
        }
        // String fundamental frequency from tension T, linear density μ, length L
        const muMg = rng.pick([0.5, 0.8, 1.0, 1.25, 1.6, 2.0, 2.5, 4.0]); // in 10^-3 kg m^-1
        const T = rng.pick([40, 50, 64, 80, 90, 100, 128, 144, 160, 180, 200]);
        const L = rng.pick([0.5, 0.6, 0.64, 0.75, 0.8, 0.9, 1.0]);
        const v = Math.sqrt(T / (muMg * 1e-3));
        const ans = roundTo(v / (2 * L), 1);
        const traps: Trap[] = [];
        safeTrap(roundTo(v / L, 1), ans, 1, "Remember λ₁ = 2L, so divide wave speed by 2L rather than L.", traps);
        return {
          prompt: `A guitar string of length ${num(L)} m and mass per unit length {{μ = ${num(muMg)} * 10^(-3)}} kg m⁻¹ is held at tension ${T} N. Calculate its fundamental frequency in Hz (to 1 decimal place).`,
          answer: { type: "number", value: ans, tolerance: 0.8, display: `${num(ans)} Hz` },
          solution: [
            `Wave speed: {{v = sqrt(T / μ) = sqrt(${T} / (${num(muMg)} * 10^(-3))) = ${num(roundTo(v, 2))}}} m s⁻¹.`,
            `Fundamental frequency: {{f_1 = v / (2 L) = ${num(roundTo(v, 2))} / ${num(roundTo(2 * L, 2))} = ${num(ans)}}} Hz.`,
          ],
          hint: "Compute {{v = sqrt(T / μ)}} first, then divide by {{2 L}}.",
          traps,
        };
      }

      // TIER 3: Stretch multi-step
      const mode = rng.int(1, 3);
      if (mode === 1) {
        // Mystery pipe length from two consecutive resonant frequencies
        const isClosed = rng.bool(0.5);
        const v = rng.pick([336, 340, 344]);
        const f1 = rng.pick([60, 75, 80, 85, 90, 100, 110, 120, 125, 140, 150, 160]);
        const [h1, h2] = isClosed ? rng.pick([[1, 3], [3, 5], [5, 7]] as const) : rng.pick([[2, 3], [3, 4], [4, 5]] as const);
        const fa = h1 * f1;
        const fb = h2 * f1;
        const L = isClosed ? v / (4 * f1) : v / (2 * f1);
        const ans = roundTo(L, 2);
        const traps: Trap[] = [];
        safeTrap(roundTo(isClosed ? v / (2 * f1) : v / (4 * f1), 2), ans, 0.02, `Check the ratio ${fa} : ${fb} = ${h1} : ${h2} — this identifies an ${isClosed ? "open–closed" : "open–open"} pipe!`, traps);
        return {
          prompt: `Two **consecutive** resonant frequencies of an air-filled pipe (${v} m s⁻¹) are ${fa} Hz and ${fb} Hz. Deduce the pipe type and calculate its length {{L}} in metres (to 2 decimal places).`,
          answer: { type: "number", value: ans, tolerance: 0.02, display: `${num(ans)} m` },
          solution: [
            `Ratio {{${fa} / ${fb} = ${h1} / ${h2}}} → ${isClosed ? "consecutive odd harmonics, so the pipe is **open–closed**" : "consecutive integer harmonics including an even harmonic, so the pipe is **open–open**"}.`,
            `Fundamental frequency {{f_1 = ${f1}}} Hz.`,
            isClosed ? `{{L = v / (4 f_1) = ${v} / (4 * ${f1}) = ${num(ans)}}} m.` : `{{L = v / (2 f_1) = ${v} / (2 * ${f1}) = ${num(ans)}}} m.`,
          ],
          hint: `Simplify the ratio {{${fa} / ${fb}}} to identify whether the pipe is open–open or open–closed, then find {{f_1}} and {{L}}.`,
          traps,
        };
      }
      if (mode === 2) {
        // Resonance water tube with end correction: v = 2 f (L2 - L1)
        const f = rng.pick([384, 426, 440, 480, 512, 540, 600, 640]);
        const vTrue = rng.pick([332, 336, 340, 344, 348]);
        const eCm = rng.pick([0.6, 0.8, 1.0, 1.2, 1.5]);
        const lamCm = (vTrue / f) * 100;
        const L1 = roundTo(lamCm / 4 - eCm, 1);
        const L2 = roundTo((3 * lamCm) / 4 - eCm, 1);
        const ans = roundTo(2 * f * ((L2 - L1) / 100), 0);
        const traps: Trap[] = [];
        safeTrap(roundTo(4 * f * (L1 / 100), 0), ans, 3, "Using 4 L₁ ignores the open-end correction e — subtract L₂ − L₁ = λ/2 to eliminate e!", traps);
        return {
          prompt: `A ${f} Hz tuning fork excites consecutive resonances in a vertical water-filled tube (with an unknown end correction) at air-column lengths ${num(L1)} cm and ${num(L2)} cm. Calculate the speed of sound in m s⁻¹ (to the nearest integer).`,
          answer: { type: "number", value: ans, tolerance: 2, display: `${num(ans)} m s^-1` },
          solution: [
            `Subtracting eliminates the end correction: {{λ / 2 = ${num(L2)} - ${num(L1)} = ${num(roundTo(L2 - L1, 1))}}} cm = {{${num(roundTo((L2 - L1) / 100, 4))}}} m.`,
            `Wavelength {{λ = ${num(roundTo((2 * (L2 - L1)) / 100, 4))}}} m.`,
            `Speed of sound {{v = f λ = ${f} * ${num(roundTo((2 * (L2 - L1)) / 100, 4))} = ${num(ans)}}} m s⁻¹.`,
          ],
          hint: "Compute {{L_2 - L_1 = λ / 2}} in metres, double to get {{λ}}, then multiply by {{f}}.",
          traps,
        };
      }
      // String tension change → new fundamental frequency
      const fOld = rng.pick([100, 120, 150, 160, 180, 200, 220, 240, 250, 300]);
      const tOld = rng.pick([40, 50, 60, 80, 90, 100, 120]);
      const factor = rng.pick([1.44, 1.69, 1.96, 2.25, 2.56, 3.24, 4.0]);
      const tNew = roundTo(tOld * factor, 1);
      const ans = roundTo(fOld * Math.sqrt(factor), 1);
      const traps: Trap[] = [];
      safeTrap(roundTo(fOld * factor, 1), ans, 1, "Frequency scales with √T, not directly with T!", traps);
      return {
        prompt: `A stretched wire fixed at both ends has fundamental frequency ${fOld} Hz at tension ${num(tOld)} N. If the tension is increased to ${num(tNew)} N (same length and wire), calculate the new fundamental frequency in Hz (to 1 decimal place).`,
        answer: { type: "number", value: ans, tolerance: 0.5, display: `${num(ans)} Hz` },
        solution: [
          "Since {{f_1 = (1 / (2 L)) sqrt(T / μ)}}, we have {{f_new / f_old = sqrt(T_new / T_old)}}.",
          `{{f_new = ${fOld} * sqrt(${num(tNew)} / ${num(tOld)}) = ${fOld} * ${num(roundTo(Math.sqrt(factor), 3))} = ${num(ans)}}} Hz.`,
        ],
        hint: "Use the ratio {{f_new = f_old * sqrt(T_new / T_old)}}.",
        traps,
      };
    },
  },

  // ===========================================================================
  // DRILL 3: Diffraction Gratings, Single-Slit & Doppler Effect (HL, level 2)
  // ===========================================================================
  {
    id: "c2-wave-phenomena.grating-doppler-hl",
    topicId: "c2-wave-phenomena",
    title: "Single-Slit, Gratings & Doppler Equations [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "single-slit-grating-hl",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          // Single-slit FULL central maximum width W = 2 λ D / b in mm
          const lamNm = rng.pick([450, 480, 500, 520, 540, 560, 600, 630, 640, 660, 680]);
          const bMm = rng.pick([0.08, 0.1, 0.12, 0.15, 0.16, 0.2, 0.25]);
          const Dm = rng.pick([1.2, 1.5, 1.6, 1.8, 2.0, 2.4, 2.5, 3.0]);
          const halfMm = (lamNm * Dm) / (bMm * 1000);
          const ans = roundTo(2 * halfMm, 1);
          const traps: Trap[] = [];
          safeTrap(roundTo(halfMm, 1), ans, 0.2, "That is the half-width (centre to 1st minimum) — double it for the full width of the central maximum!", traps);
          return {
            prompt: `[HL] Light of wavelength ${lamNm} nm passes through a single slit of width ${num(bMm)} mm onto a screen ${num(Dm)} m away. Calculate the **full linear width** of the central bright maximum in mm (to 1 decimal place).`,
            answer: { type: "number", value: ans, tolerance: 0.2, display: `${num(ans)} mm` },
            solution: [
              `Half-width to 1st minimum: {{y = (λ D)/b = (${lamNm} * 10^(-9) * ${num(Dm)})/(${num(bMm)} * 10^(-3)) = ${num(roundTo(halfMm, 2))}}} mm.`,
              `Full central maximum width = {{2 y = ${num(ans)}}} mm.`,
            ],
            hint: "Use {{W = (2 λ D)/b}} — remember the factor of 2!",
            traps,
          };
        }
        if (mode === 2) {
          // Missing order & fringes inside central envelope
          const ratio = rng.int(3, 9);
          const bMm = rng.pick([0.04, 0.05, 0.06, 0.08, 0.1, 0.12]);
          const dMm = roundTo(bMm * ratio, 3);
          const askCount = rng.bool(0.5);
          if (askCount) {
            const ans = 2 * ratio - 1;
            const traps: Trap[] = [];
            safeTrap(ratio, ans, 0, "d / b is the first missing order; count all visible orders from −(k−1) through 0 to +(k−1).", traps);
            safeTrap(2 * ratio - 2, ans, 0, "Don't forget to include the central n = 0 bright fringe!", traps);
            return {
              prompt: `[HL] A double slit has centre-to-centre separation {{d = ${num(dMm)}}} mm and individual slit width {{b = ${num(bMm)}}} mm. How many bright interference fringes lie strictly **inside** the central single-slit diffraction maximum?`,
              answer: { type: "number", value: ans, tolerance: 0, display: `${ans}` },
              solution: [
                `First missing order: {{k = d / b = ${num(dMm)} / ${num(bMm)} = ${ratio}}}.`,
                `Visible orders strictly inside the central envelope run from ${-(ratio - 1)} through 0 to +${ratio - 1}: {{2(${ratio}) - 1 = ${ans}}} fringes.`,
              ],
              hint: "Compute {{k = d / b}}, then count all integers strictly between {{-k}} and {{+k}} ({{2k - 1}}).",
              traps,
            };
          }
          return {
            prompt: `[HL] A double slit has separation {{d = ${num(dMm)}}} mm and individual slit width {{b = ${num(bMm)}}} mm. State the order number {{n}} of the **first missing** bright interference fringe.`,
            answer: { type: "number", value: ratio, tolerance: 0, display: `${ratio}` },
            solution: [
              `Missing order occurs when a double-slit maximum hits the first single-slit minimum: {{n = d / b = ${num(dMm)} / ${num(bMm)} = ${ratio}}}.`,
            ],
            hint: "Divide slit separation {{d}} by individual slit width {{b}}.",
          };
        }
        // EM Doppler shift Δλ = λ (v / c) in nm
        const lam0 = rng.pick([434, 486, 500, 520, 589, 600, 656, 672]);
        const vFactor = rng.pick([1.5, 2.0, 2.4, 3.0, 3.6, 4.5, 5.0, 6.0, 7.5, 9.0, 12.0]); // × 10^6 m/s
        const dLam = roundTo((lam0 * vFactor) / 300, 2); // (vFactor * 1e6) / (300 * 1e6)
        return {
          prompt: `A galaxy recedes at {{${num(vFactor)} * 10^6}} m s⁻¹. A laboratory spectral line lies at ${lam0} nm. Using {{c = 3.00 * 10^8}} m s⁻¹, calculate the wavelength shift {{Δλ}} in nm (to 2 decimal places).`,
          answer: { type: "number", value: dLam, tolerance: 0.05, display: `${num(dLam)} nm` },
          solution: [
            `Apply {{Δλ / λ_0 ≈ v / c}}: {{Δλ = ${lam0} * (${num(vFactor)} * 10^6) / (3.00 * 10^8) = ${num(dLam)}}} nm.`,
          ],
          hint: "Multiply {{λ_0}} by the speed fraction {{v / c}}.",
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          // Diffraction grating angle θ from n λ = d sin θ
          const linesPerMm = rng.pick([250, 300, 400, 450, 500, 600]);
          const dNm = 1e6 / linesPerMm;
          const lamNm = rng.pick([440, 480, 500, 520, 540, 560, 589, 600, 632, 650]);
          const maxValidN = Math.floor((0.92 * dNm) / lamNm);
          const n = Math.max(1, rng.int(1, Math.min(3, maxValidN)));
          const sinT = (n * lamNm) / dNm;
          const ans = roundTo(Math.asin(sinT) * DEG, 1);
          const traps: Trap[] = [];
          if (n > 1) {
            safeTrap(roundTo(Math.asin(lamNm / dNm) * DEG, 1), ans, 0.2, `You calculated the 1st-order angle — multiply by order n = ${n}!`, traps);
          }
          return {
            prompt: `[HL] Light of wavelength ${lamNm} nm hits a diffraction grating ruled with ${linesPerMm} lines mm⁻¹ at normal incidence. Calculate the diffraction angle of the **${n === 1 ? "1st" : n === 2 ? "2nd" : "3rd"}-order** maximum in degrees (to 1 decimal place).`,
            answer: { type: "number", value: ans, tolerance: 0.2, display: `${num(ans)}°` },
            solution: [
              `Slit spacing: {{d = 1 / (${linesPerMm} * 10^3) = ${num(roundTo(dNm / 1000, 3))}}} μm = ${num(roundTo(dNm, 1))} nm.`,
              `Apply {{sin θ = (n λ)/d = (${n} * ${lamNm}) / ${num(roundTo(dNm, 1))} = ${num(roundTo(sinT, 4))}}}.`,
              `{{θ = ${num(ans)}°}}.`,
            ],
            hint: "Convert lines mm⁻¹ to {{d}} in metres (or nm), then solve {{sin θ = (n λ)/d}}.",
            traps,
          };
        }
        if (mode === 2) {
          // Highest order or total bright spots on diffraction grating
          const linesPerMm = rng.pick([300, 350, 400, 450, 500, 550, 600, 650]);
          const dNm = 1e6 / linesPerMm;
          const lamNm = rng.pick([420, 450, 488, 510, 532, 560, 589, 610, 633, 656, 680]);
          const ratio = dNm / lamNm;
          const nMax = Math.floor(ratio - 1e-6);
          const askTotal = rng.bool(0.5);
          if (askTotal) {
            const total = 2 * nMax + 1;
            const traps: Trap[] = [];
            safeTrap(nMax, total, 0, "That is n_max on one side only — include both sides plus the central n = 0 beam (2n_max + 1).", traps);
            return {
              prompt: `[HL] Monochromatic light of wavelength ${lamNm} nm strikes a ${linesPerMm} lines mm⁻¹ diffraction grating normally. Calculate the **total number of bright maxima** visible across both sides including the central {{n = 0}} beam.`,
              answer: { type: "number", value: total, tolerance: 0, display: `${total}` },
              solution: [
                `Slit spacing: {{d = ${num(roundTo(dNm, 1))}}} nm, so {{d / λ = ${num(roundTo(ratio, 2))}}}.`,
                `Rounding down gives {{n_max = ${nMax}}}, so total bright spots = {{2(${nMax}) + 1 = ${total}}}.`,
              ],
              hint: "Compute {{n_max = floor(d / λ)}}, then calculate {{2 n_max + 1}}.",
              traps,
            };
          }
          return {
            prompt: `[HL] Light of wavelength ${lamNm} nm hits a ${linesPerMm} lines mm⁻¹ diffraction grating at normal incidence. Determine the **highest integer order {{n_max}}** observable.`,
            answer: { type: "number", value: nMax, tolerance: 0, display: `${nMax}` },
            solution: [
              `Slit spacing: {{d = 1 / (${linesPerMm} * 10^3)}} m = ${num(roundTo(dNm, 1))} nm.`,
              `Setting {{sin θ <= 1}} gives {{n <= d / λ = ${num(roundTo(ratio, 2))}}} → round down to {{n_max = ${nMax}}}.`,
            ],
            hint: "Compute {{d / λ}} and round **down** to an integer because {{sin θ <= 1}}.",
          };
        }
        // HL Moving-source OR moving-observer sound Doppler
        const v = rng.pick([330, 340, 344]);
        const f = rng.pick([400, 440, 480, 500, 550, 600, 680, 720, 800]);
        const u = rng.pick([12, 15, 17, 20, 24, 25, 30, 34, 40]);
        const movingSource = rng.bool(0.55);
        const approaching = rng.bool(0.5);
        const rawF = movingSource
          ? approaching
            ? (f * v) / (v - u)
            : (f * v) / (v + u)
          : approaching
            ? (f * (v + u)) / v
            : (f * (v - u)) / v;
        const ans = roundTo(rawF, 1);
        const traps: Trap[] = [];
        const oppSign = movingSource
          ? approaching
            ? (f * v) / (v + u)
            : (f * v) / (v - u)
          : approaching
            ? (f * (v - u)) / v
            : (f * (v + u)) / v;
        safeTrap(roundTo(oppSign, 1), ans, 0.8, approaching ? "Approaching raises the observed frequency — check your sign!" : "Receding lowers the observed frequency — check your sign!", traps);
        return {
          prompt: movingSource
            ? `[HL] A sound source emitting ${f} Hz moves directly **${approaching ? "toward" : "away from"}** a stationary listener at ${u} m s⁻¹ in still air ({{v = ${v}}} m s⁻¹). Calculate the observed frequency in Hz (to 1 decimal place).`
            : `[HL] A stationary horn emits ${f} Hz in still air ({{v = ${v}}} m s⁻¹). A vehicle moves directly **${approaching ? "toward" : "away from"}** the horn at ${u} m s⁻¹. Calculate the frequency heard in the vehicle in Hz (to 1 decimal place).`,
          answer: { type: "number", value: ans, tolerance: 0.6, display: `${num(ans)} Hz` },
          solution: movingSource
            ? [
                `Moving source ${approaching ? "approaching" : "receding"}: {{f' = f (v / (v ${approaching ? "-" : "+"} u_s))}}.`,
                `{{f' = ${f} * (${v} / (${v} ${approaching ? "-" : "+"} ${u})) = ${num(ans)}}} Hz.`,
              ]
            : [
                `Moving observer ${approaching ? "approaching" : "receding"}: {{f' = f ((v ${approaching ? "+" : "-"} u_o) / v)}}.`,
                `{{f' = ${f} * ((${v} ${approaching ? "+" : "-"} ${u}) / ${v}) = ${num(ans)}}} Hz.`,
              ],
          hint: movingSource
            ? `Put {{u_s}} in the denominator and pick the sign that makes {{f' ${approaching ? ">" : "<"} ${f}}} Hz.`
            : `Put {{u_o}} in the numerator and pick the sign that makes {{f' ${approaching ? ">" : "<"} ${f}}} Hz.`,
          traps,
        };
      }

      // TIER 3: HL stretch multi-step
      const mode = rng.int(1, 3);
      if (mode === 1) {
        // Invert moving-source Doppler to find source speed u_s
        const v = rng.pick([330, 340, 344]);
        const uTrue = rng.pick([15, 18, 20, 22, 25, 28, 30, 32, 34, 36, 40, 45]);
        const f = rng.pick([400, 450, 500, 550, 600, 650, 700, 750, 800]);
        const approaching = rng.bool(0.55);
        const fObs = roundTo(approaching ? (f * v) / (v - uTrue) : (f * v) / (v + uTrue), 1);
        const ans = roundTo(approaching ? v * (1 - f / fObs) : v * (f / fObs - 1), 1);
        return {
          prompt: `[HL] A stationary listener measures ${num(fObs)} Hz from a vehicle sounding a ${f} Hz horn in still air ({{v = ${v}}} m s⁻¹). Calculate the speed of the vehicle in m s⁻¹ (to 1 decimal place).`,
          answer: { type: "number", value: ans, tolerance: 0.3, display: `${num(ans)} m s^-1` },
          solution: [
            `Because {{${num(fObs)} ${approaching ? ">" : "<"} ${f}}}, the vehicle is ${approaching ? "approaching" : "receding"}: {{${num(fObs)} = ${f} * (${v} / (${v} ${approaching ? "-" : "+"} u_s))}}.`,
            `Rearranging: {{${v} ${approaching ? "-" : "+"} u_s = ${v} * (${f} / ${num(fObs)}) = ${num(roundTo((v * f) / fObs, 2))}}}.`,
            `{{u_s = ${num(ans)}}} m s⁻¹.`,
          ],
          hint: `First decide if the source is approaching or receding by comparing ${num(fObs)} Hz with ${f} Hz, then solve for {{u_s}}.`,
        };
      }
      if (mode === 2) {
        // Two-step reflected ultrasound / bat echo f'' = f (v ± u) / (v ∓ u)
        const v = rng.pick([336, 340, 344]);
        const fKhz = rng.pick([30, 32, 35, 36, 40, 42, 45, 48, 50, 55, 60]);
        const u = rng.pick([6, 8, 10, 12, 14, 15, 16, 18, 20]);
        const approaching = rng.bool(0.6);
        const ans = roundTo(approaching ? (fKhz * (v + u)) / (v - u) : (fKhz * (v - u)) / (v + u), 2);
        const traps: Trap[] = [];
        const singleShift = roundTo(approaching ? (fKhz * (v + u)) / v : (fKhz * (v - u)) / v, 2);
        safeTrap(singleShift, ans, 0.08, "A reflected echo undergoes a DOUBLE Doppler shift — apply the shift both upon arrival and upon reflection!", traps);
        return {
          prompt: `[HL] A hovering bat emits a ${fKhz}.0 kHz ultrasonic pulse in air ({{v = ${v}}} m s⁻¹) that reflects off an insect flying directly **${approaching ? "toward" : "away from"}** the bat at ${u}.0 m s⁻¹. Calculate the frequency of the reflected echo detected by the bat in kHz (to 2 decimal places).`,
          answer: { type: "number", value: ans, tolerance: 0.06, display: `${num(ans)} kHz` },
          solution: [
            `Two-step reflection shift: {{f'' = f ((v ${approaching ? "+" : "-"} u) / (v ${approaching ? "-" : "+"} u))}}.`,
            `{{f'' = ${fKhz}.0 * (${approaching ? v + u : v - u} / ${approaching ? v - u : v + u}) = ${num(ans)}}} kHz.`,
          ],
          hint: "Treat the insect first as a moving observer, then immediately as a moving source re-emitting the wave.",
          traps,
        };
      }
      // Exact grating trigonometry (tan θ → sin θ → d in μm)
      const lamNm = rng.pick([450, 488, 514, 532, 589, 600, 632, 650, 670]);
      const Dm = rng.pick([1.0, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0]);
      const yM = roundTo(Dm * rng.pick([0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6]), 2);
      const theta = Math.atan(yM / Dm);
      const sinT = Math.sin(theta);
      const ans = roundTo(lamNm / (sinT * 1000), 2); // μm
      const traps: Trap[] = [];
      const smallApprox = roundTo((lamNm * Dm) / (yM * 1000), 2);
      safeTrap(smallApprox, ans, 0.03, "That uses the small-angle approximation d ≈ λD / y! Find θ = arctan(y / D) and use exact d = λ / sin θ.", traps);
      return {
        prompt: `[HL] A laser of wavelength ${lamNm} nm strikes a diffraction grating normally. On a flat screen ${num(Dm)} m behind the grating, the 1st-order bright spot lies ${num(yM)} m from the central spot. Without using the small-angle approximation, calculate the slit spacing {{d}} in μm (to 2 decimal places).`,
        answer: { type: "number", value: ans, tolerance: 0.03, display: `${num(ans)} μm` },
        solution: [
          `Find exact angle from right triangle: {{tan θ = ${num(yM)} / ${num(Dm)} = ${num(roundTo(yM / Dm, 4))}}} → {{θ = ${num(roundTo(theta * DEG, 2))}°}}.`,
          `Compute {{sin θ = ${num(roundTo(sinT, 4))}}}.`,
          `Apply {{d = λ / sin θ = (${lamNm} * 10^(-9)) / ${num(roundTo(sinT, 4))} = ${num(ans)}}} μm.`,
        ],
        hint: "Find {{θ = arctan(y / D)}} first, then evaluate {{d = λ / sin θ}}.",
        traps,
      };
    },
  },
];
