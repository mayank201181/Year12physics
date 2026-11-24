import type { Drill, DrillItem } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, num, roundTo } from "./helpers.ts";

function safeTrap(traps: Trap[], ans: number, tol: number, wrong: number, feedback: string) {
  const w = clean(wrong);
  if (!Number.isFinite(w)) return;
  if (Math.abs(w - ans) <= Math.max(tol * 2.5, 1e-6)) return;
  if (traps.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - w) <= tol)) return;
  traps.push({ spec: { type: "number", value: w, tolerance: Math.max(tol, 1e-4) }, feedback });
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: WAVE EQUATION, STRING SPEED, EM SPECTRUM & INTENSITY (SL, level 1)
  // ===========================================================================
  {
    id: "c1-shm-waves.wave-equation",
    topicId: "c1-shm-waves",
    title: "Wave Equation, String Speed & Intensity",
    level: 1,
    ibLevel: "SL",
    guideRef: "wave-model-graphs",
    generate(rng, tier): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Find v = f * lambda
          const f = rng.pick([4, 5, 8, 10, 12, 15, 20, 25, 40, 50, 60, 80, 100, 120, 200, 250]);
          const lam = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.2, 1.5, 2.0, 2.5, 3.0]);
          const v = clean(f * lam);
          const tol = Math.max(0.02, roundTo(v * 0.01, 4));
          const traps: Trap[] = [];
          safeTrap(traps, v, tol, roundTo(f / lam, 2), "Multiply frequency and wavelength (v = fλ), rather than dividing f by λ.");
          return {
            prompt: `A travelling wave has frequency {{${num(f)}}} Hz and wavelength {{${num(lam)}}} m. Calculate its wave speed {{v}} in m s⁻¹.`,
            answer: { type: "number", value: v, tolerance: tol, display: `${num(v)} m s⁻¹` },
            hint: "Use the universal wave equation {{v = fλ}}.",
            traps,
            solution: [
              "Apply {{v = fλ}}:",
              `{{v = ${num(f)} * ${num(lam)} = ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        if (mode === 1) {
          // Find lambda = v / f with exact decimal
          const lam = rng.pick([0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8, 1.2, 1.25, 1.5, 2.0, 2.5, 3.0, 4.0]);
          const f = rng.pick([20, 40, 50, 60, 80, 100, 120, 160, 200, 250, 400, 500]);
          const v = clean(f * lam);
          const tol = 0.01;
          const traps: Trap[] = [];
          safeTrap(traps, lam, tol, roundTo(f / v, 3), "Rearranging v = fλ gives λ = v/f, not f/v.");
          return {
            prompt: `A wave travels at {{${num(v)}}} m s⁻¹ with frequency {{${num(f)}}} Hz. Calculate its wavelength {{λ}} in metres.`,
            answer: { type: "number", value: lam, tolerance: tol, display: `${num(lam)} m` },
            hint: "Rearrange {{v = fλ}} to solve for {{λ = v / f}}.",
            traps,
            solution: [
              "Rearrange {{v = fλ}} to {{λ = v / f}}:",
              `{{λ = ${num(v)} / ${num(f)} = ${num(lam)}}} m.`,
            ],
          };
        }
        // mode === 2: Find f = v / lambda
        const f = rng.pick([15, 20, 25, 30, 40, 50, 60, 75, 80, 100, 125, 150, 200, 250, 300, 400]);
        const lam = rng.pick([0.2, 0.25, 0.4, 0.5, 0.8, 1.2, 1.5, 2.0, 2.5]);
        const v = clean(f * lam);
        const tol = 0.05;
        const traps: Trap[] = [];
        safeTrap(traps, f, tol, clean(v * lam), "Divide wave speed by wavelength (f = v/λ), rather than multiplying.");
        return {
          prompt: `A wave of wavelength {{${num(lam)}}} m travels at {{${num(v)}}} m s⁻¹. Calculate its frequency {{f}} in Hz.`,
          answer: { type: "number", value: f, tolerance: tol, display: `${num(f)} Hz` },
          hint: "Rearrange {{v = fλ}} to {{f = v / λ}}.",
          traps,
          solution: [
            "Rearrange {{v = fλ}} to {{f = v / λ}}:",
            `{{f = ${num(v)} / ${num(lam)} = ${num(f)}}} Hz.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Graph counts: N wavelengths in D m, M cycles in t s
          const nLam = rng.pick([2, 2.5, 3, 4, 5]);
          const lam = rng.pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1.2, 1.5]);
          const dist = clean(nLam * lam);
          const nT = rng.pick([4, 5, 8, 10, 12, 20]);
          const f = rng.pick([5, 10, 20, 25, 40, 50]);
          const tTotal = clean(nT / f);
          const v = clean(f * lam);
          const tol = Math.max(0.05, roundTo(v * 0.01, 4));
          return {
            prompt: `A displacement–distance snapshot shows {{${num(nLam)}}} wavelengths in {{${num(dist)}}} m, while a displacement–time graph for one particle shows {{${num(nT)}}} complete oscillations in {{${num(tTotal)}}} s. Calculate the wave speed {{v}} in m s⁻¹.`,
            answer: { type: "number", value: v, tolerance: tol, display: `${num(v)} m s⁻¹` },
            hint: "Find {{λ}} from the spatial span and {{f = N/t}} from the time span, then compute {{v = fλ}}.",
            solution: [
              `Wavelength: {{λ = ${num(dist)} / ${num(nLam)} = ${num(lam)}}} m.`,
              `Frequency: {{f = ${num(nT)} / ${num(tTotal)} = ${num(f)}}} Hz.`,
              `Wave speed: {{v = fλ = ${num(f)} * ${num(lam)} = ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        if (mode === 1) {
          // String wave speed v = sqrt(F_T / mu) exact integer!
          const v = rng.pick([40, 50, 60, 80, 90, 100, 120, 140, 150, 160, 180, 200, 220, 250]);
          const muMilli = rng.pick([1, 2, 2.5, 4, 5, 8, 10]); // g/m = 10^-3 kg/m
          const mu = clean(muMilli * 1e-3);
          const ft = clean(mu * v * v);
          const tol = 0.2;
          const traps: Trap[] = [];
          safeTrap(traps, v, tol, clean(ft / mu), "Remember to take the square root in v = √(F_T / μ)!");
          return {
            prompt: `A stretched string with linear mass density {{μ = ${num(mu)}}} kg m⁻¹ is held at a tension of {{${num(ft)}}} N. Calculate the speed {{v}} of transverse waves on the string in m s⁻¹.`,
            answer: { type: "number", value: v, tolerance: tol, display: `${num(v)} m s⁻¹` },
            hint: "Apply {{v = sqrt(F_T / μ)}}.",
            traps,
            solution: [
              `{{v = sqrt(F_T / μ) = sqrt(${num(ft)} / ${num(mu)}) = sqrt(${num(clean(v * v))}) = ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        // mode === 2: EM wave c = f * lambda (MHz -> m, or nm -> THz)
        if (rng.bool()) {
          const fMHz = rng.pick([15, 20, 25, 30, 40, 50, 60, 75, 100, 120, 150, 200, 250, 300, 400, 500, 600]);
          const lam = roundTo(300 / fMHz, 3);
          const tol = Math.max(0.005, roundTo(lam * 0.015, 4));
          return {
            prompt: `An electromagnetic wave broadcasts at {{${num(fMHz)}}} MHz in vacuum ({{c = 3.00 * 10^8}} m s⁻¹). Calculate its wavelength {{λ}} in metres (give your answer to 3 significant figures).`,
            answer: { type: "number", value: lam, tolerance: tol, display: `${num(lam)} m` },
            hint: "Convert MHz to {{10^6}} Hz and evaluate {{λ = c / f}}.",
            solution: [
              `{{f = ${num(fMHz)} * 10^6}} Hz.`,
              `{{λ = c / f = (3.00 * 10^8) / (${num(fMHz)} * 10^6) = ${num(lam)}}} m.`,
            ],
          };
        }
        const lamNm = rng.pick([150, 200, 250, 300, 400, 500, 600, 750, 800, 1000, 1200, 1500, 2000, 2500, 3000]);
        const fTHz = clean(300000 / lamNm);
        const tol = Math.max(0.5, roundTo(fTHz * 0.01, 2));
        return {
          prompt: `An electromagnetic wave has vacuum wavelength {{${num(lamNm)}}} nm ({{c = 3.00 * 10^8}} m s⁻¹). Calculate its frequency in THz ({{1 THz = 10^12 Hz}}).`,
          answer: { type: "number", value: fTHz, tolerance: tol, display: `${num(fTHz)} THz` },
          hint: "Convert nm to {{10^(-9)}} m, compute {{f = c / λ}}, then divide by {{10^12}}.",
          solution: [
            `{{f = (3.00 * 10^8) / (${num(lamNm)} * 10^(-9)) = ${num(fTHz)} * 10^12}} Hz = {{${num(fTHz)}}} THz.`,
          ],
        };
      }

      // TIER 3: Multi-step synthesis (string m, L, F_T, f -> lambda; OR inverse-square intensity; OR medium change)
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // String m (g), L (m), F_T (N), f (Hz) -> lambda (m)
        const v = rng.pick([60, 80, 100, 120, 150, 160, 180, 200, 240]);
        const L = rng.pick([0.5, 0.8, 1.0, 1.2, 1.5, 2.0]);
        const muMilli = rng.pick([2, 2.5, 4, 5]); // g/m
        const massG = clean(muMilli * L);
        const mu = clean(muMilli * 1e-3);
        const ft = clean(mu * v * v);
        const lam = rng.pick([0.2, 0.25, 0.4, 0.5, 0.8, 1.0]);
        const f = clean(v / lam);
        const tol = 0.01;
        return {
          prompt: `A string of length {{${num(L)}}} m and mass {{${num(massG)}}} g is held at tension {{${num(ft)}}} N while vibrating at {{${num(f)}}} Hz. Calculate the wavelength {{λ}} of the waves on the string in metres.`,
          answer: { type: "number", value: lam, tolerance: tol, display: `${num(lam)} m` },
          hint: "Convert mass to kg to get {{μ = m/L}}, find {{v = sqrt(F_T / μ)}}, then compute {{λ = v / f}}.",
          solution: [
            `Linear mass density: {{μ = (${num(massG)} * 10^(-3)) / ${num(L)} = ${num(mu)}}} kg m⁻¹.`,
            `Wave speed: {{v = sqrt(${num(ft)} / ${num(mu)}) = ${num(v)}}} m s⁻¹.`,
            `Wavelength: {{λ = v / f = ${num(v)} / ${num(f)} = ${num(lam)}}} m.`,
          ],
        };
      }
      if (mode === 1) {
        // Inverse-square intensity ratio I2 = I1 * (r1/r2)^2
        const r1 = rng.pick([1.5, 2, 2.5, 3, 4, 5, 6]);
        const factor = rng.pick([2, 2.5, 3, 4, 5]);
        const r2 = clean(r1 * factor);
        const i2 = rng.pick([2, 3, 4, 5, 6, 8, 9, 10, 12, 15]);
        const i1 = clean(i2 * factor * factor);
        const tol = 0.05;
        const traps: Trap[] = [];
        safeTrap(traps, i2, tol, roundTo(i1 / factor, 2), "Intensity follows the inverse-square law (I ∝ 1/r²), not 1/r!");
        return {
          prompt: `At a distance of {{${num(r1)}}} m from an isotropic point source, the wave intensity is {{${num(i1)}}} W m⁻². Calculate the intensity (in W m⁻²) at a distance of {{${num(r2)}}} m from the source.`,
          answer: { type: "number", value: i2, tolerance: tol, display: `${num(i2)} W m⁻²` },
          hint: "Apply {{I_2 = I_1 (r_1 / r_2)^2}}.",
          traps,
          solution: [
            `Distance increases by a factor of {{${num(r2)} / ${num(r1)} = ${num(factor)}}}.`,
            `By {{I ∝ 1/r^2}}, {{I_2 = ${num(i1)} / (${num(factor)})^2 = ${num(i1)} / ${num(clean(factor * factor))} = ${num(i2)}}} W m⁻².`,
          ],
        };
      }
      // mode === 2: Amplitude and distance combined or amplitude scaling
      const r1 = rng.pick([2, 3, 4, 5, 6, 8, 10]);
      const k = rng.pick([2, 3, 4, 5]);
      const r2 = clean(r1 * k);
      const i1 = rng.pick([12, 18, 24, 30, 36, 48, 60]);
      const a1 = rng.pick([2, 3, 4, 5, 6, 8, 10]); // mm
      const aRatio = rng.pick([1.5, 2, 2.5, 3, 4]);
      const a2 = clean(a1 * aRatio);
      const i2 = clean(i1 * aRatio * aRatio);
      const tol = Math.max(0.1, roundTo(i2 * 0.01, 2));
      const traps: Trap[] = [];
      safeTrap(traps, i2, tol, clean(i1 * aRatio), "Intensity scales with amplitude SQUARED (I ∝ A²), not linearly with A!");
      // Keep r1/r2 unused warning away by branching on bool
      if (rng.bool()) {
        const aFar = roundTo(a2 / k, 2);
        const tolA = 0.02;
        const trapsA: Trap[] = [];
        safeTrap(trapsA, aFar, tolA, roundTo(a2 / (k * k), 2), "Intensity falls as 1/r², so amplitude (∝ √I) falls as 1/r, not 1/r²!");
        return {
          prompt: `An isotropic point source emits waves of amplitude {{${num(a2)}}} mm at a distance of {{${num(r1)}}} m in a non-absorbing medium. Calculate the wave amplitude (in mm, to 2 decimal places) at a distance of {{${num(r2)}}} m.`,
          answer: { type: "number", value: aFar, tolerance: tolA, display: `${num(aFar)} mm` },
          hint: "Combine {{I ∝ 1/r^2}} with {{I ∝ A^2}} to find how {{A}} scales with {{r}}.",
          traps: trapsA,
          solution: [
            `Because {{I ∝ 1/r^2}} and {{I ∝ A^2}}, amplitude scales as {{A ∝ 1/r}}.`,
            `Distance increases by {{${num(r2)} / ${num(r1)} = ${num(k)}}}, so {{A_2 = ${num(a2)} / ${num(k)} = ${num(aFar)}}} mm.`,
          ],
        };
      }
      return {
        prompt: `A wave of amplitude {{${num(a1)}}} mm has intensity {{${num(i1)}}} W m⁻². Keeping frequency and medium unchanged, its amplitude is increased to {{${num(a2)}}} mm. Calculate the new intensity in W m⁻².`,
        answer: { type: "number", value: i2, tolerance: tol, display: `${num(i2)} W m⁻²` },
        hint: "Apply {{I_2 / I_1 = (A_2 / A_1)^2}}.",
        traps,
        solution: [
          `Amplitude ratio: {{A_2 / A_1 = ${num(a2)} / ${num(a1)} = ${num(aRatio)}}}.`,
          `Since {{I ∝ A^2}}, {{I_2 = ${num(i1)} * (${num(aRatio)})^2 = ${num(i2)}}} W m⁻².`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: SHM DEFINING LAW, MASS–SPRING & SIMPLE PENDULUM (SL, level 2)
  // ===========================================================================
  {
    id: "c1-shm-waves.pendulum-spring",
    topicId: "c1-shm-waves",
    title: "SHM Acceleration, Springs & Pendulums",
    level: 2,
    ibLevel: "SL",
    guideRef: "shm-foundations",
    generate(rng, tier): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // a = -w^2 x (signed)
          const w = rng.pick([2, 3, 4, 5, 6, 8, 10, 12, 15]);
          const xMag = rng.pick([0.02, 0.03, 0.04, 0.05, 0.06, 0.08, 0.1, 0.12, 0.15, 0.2]);
          const sign = rng.bool() ? 1 : -1;
          const x = clean(sign * xMag);
          const a = clean(-w * w * x);
          const tol = Math.max(0.01, roundTo(Math.abs(a) * 0.01, 4));
          const traps: Trap[] = [];
          safeTrap(traps, a, tol, -a, "Check the minus sign in a = −ω²x: acceleration is always opposite in sign to displacement!");
          safeTrap(traps, a, tol, clean(-w * x), "Remember to SQUARE ω in a = −ω²x!");
          return {
            prompt: `A particle executes SHM with angular frequency {{ω = ${num(w)}}} rad s⁻¹. Calculate its acceleration {{a}} (in m s⁻², including its sign) when displacement is {{x = ${x > 0 ? "+" : ""}${num(x)}}} m.`,
            answer: { type: "number", value: a, tolerance: tol, display: `${num(a)} m s⁻²` },
            hint: "Substitute into {{a = -ω^2 x}}, squaring {{ω}} and keeping the minus sign.",
            traps,
            solution: [
              `{{a = -ω^2 x = -(${num(w)})^2 (${num(x)}) = -${num(w * w)} * (${num(x)}) = ${num(a)}}} m s⁻².`,
            ],
          };
        }
        // Find ω from a and x
        const w = rng.pick([4, 5, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 25]);
        const x = rng.pick([0.02, 0.04, 0.05, 0.08, 0.1, 0.12, 0.15, 0.2]);
        const aMag = clean(w * w * x);
        const tol = 0.05;
        const traps: Trap[] = [];
        safeTrap(traps, w, tol, clean(w * w), "You found ω² = |a|/x — take the square root to get ω!");
        return {
          prompt: `An SHM oscillator has acceleration {{a = -${num(aMag)}}} m s⁻² when its displacement is {{x = +${num(x)}}} m. Calculate its angular frequency {{ω}} in rad s⁻¹.`,
          answer: { type: "number", value: w, tolerance: tol, display: `${num(w)} rad s⁻¹` },
          hint: "Rearrange {{a = -ω^2 x}} to {{ω = sqrt(-a / x)}}.",
          traps,
          solution: [
            `{{ω^2 = -a / x = ${num(aMag)} / ${num(x)} = ${num(w * w)}}} s⁻².`,
            `{{ω = sqrt(${num(w * w)}) = ${num(w)}}} rad s⁻¹.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          // Mass-spring period T = 2*pi*sqrt(m/k)
          const ratio = rng.pick([0.01, 0.0225, 0.04, 0.0625, 0.09, 0.16, 0.25, 0.36, 0.49, 0.64]);
          const k = rng.pick([10, 16, 20, 25, 40, 50, 80, 100]);
          const m = clean(ratio * k);
          const T = roundTo(2 * Math.PI * Math.sqrt(m / k), 2);
          const tol = 0.02;
          const traps: Trap[] = [];
          safeTrap(traps, T, tol, roundTo(Math.sqrt(m / k), 2), "Don't forget the factor of 2π in T = 2π√(m/k)!");
          return {
            prompt: `A mass of {{${num(m)}}} kg oscillates on a spring of constant {{k = ${num(k)}}} N m⁻¹. Calculate the oscillation period {{T}} in seconds (give your answer to 2 decimal places).`,
            answer: { type: "number", value: T, tolerance: tol, display: `${num(T)} s` },
            hint: "Apply {{T = 2π sqrt(m / k)}}.",
            traps,
            solution: [
              `{{T = 2π sqrt(m / k) = 2π sqrt(${num(m)} / ${num(k)}) = 2π * ${num(roundTo(Math.sqrt(ratio), 3))} ≈ ${num(T)}}} s.`,
            ],
          };
        }
        // Simple pendulum period T = 2*pi*sqrt(l/g) on Earth (g = 9.8 m s^-2)
        const l = rng.pick([0.25, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75, 0.8, 0.9, 1.0, 1.2, 1.4, 1.5, 1.8, 2.0, 2.2, 2.5]);
        const g = 9.8;
        const T = roundTo(2 * Math.PI * Math.sqrt(l / g), 2);
        const tol = 0.02;
        const traps: Trap[] = [];
        safeTrap(traps, T, tol, roundTo(Math.sqrt(l / g), 2), "Don't forget to multiply √(l/g) by 2π!");
        return {
          prompt: `A simple pendulum of length {{l = ${num(l)}}} m swings through a small angle on Earth (take {{g = 9.8}} m s⁻²). Calculate its period {{T}} in seconds (give your answer to 2 decimal places).`,
          answer: { type: "number", value: T, tolerance: tol, display: `${num(T)} s` },
          hint: "Apply {{T = 2π sqrt(l / g)}}.",
          traps,
          solution: [
            `{{T = 2π sqrt(l / g) = 2π sqrt(${num(l)} / 9.8) ≈ ${num(T)}}} s.`,
          ],
        };
      }

      // TIER 3: Rearranging for k, l, or planet g / a-x graph -> k
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // From a and x + mass m -> spring constant k = m * (-a/x)
        const w = rng.pick([5, 6, 8, 10, 12, 15, 20]);
        const x = rng.pick([0.02, 0.04, 0.05, 0.08, 0.1]);
        const m = rng.pick([0.2, 0.25, 0.4, 0.5, 0.6, 0.8, 1.0, 1.2]);
        const aMag = clean(w * w * x);
        const k = clean(m * w * w);
        const tol = 0.2;
        return {
          prompt: `A block of mass {{${num(m)}}} kg on a spring executes SHM. At displacement {{x = +${num(x)}}} m, its acceleration is {{a = -${num(aMag)}}} m s⁻². Calculate the spring constant {{k}} in N m⁻¹.`,
          answer: { type: "number", value: k, tolerance: tol, display: `${num(k)} N m⁻¹` },
          hint: "Find {{ω^2 = -a / x}} first, then use {{k = m ω^2}} (or directly {{k = m|a|/x}}).",
          solution: [
            `From {{a = -ω^2 x}}, {{ω^2 = ${num(aMag)} / ${num(x)} = ${num(w * w)}}} s⁻².`,
            `Spring constant: {{k = m ω^2 = ${num(m)} * ${num(w * w)} = ${num(k)}}} N m⁻¹.`,
          ],
        };
      }
      if (mode === 1) {
        // Exoplanet g = 4*pi^2 * l / T^2 (exact g!)
        const g = rng.pick([1.6, 2.5, 3.6, 4.0, 5.0, 6.4, 8.0, 10.0, 12.5, 16.0, 20.0, 25.0]);
        const ratioSqrt = rng.pick([0.2, 0.25, 0.3, 0.35, 0.4, 0.5]); // sqrt(l/g)
        const l = clean(g * ratioSqrt * ratioSqrt);
        const T = roundTo(2 * Math.PI * ratioSqrt, 3);
        const tol = Math.max(0.05, roundTo(g * 0.015, 3));
        return {
          prompt: `On a distant planet, a simple pendulum of length {{l = ${num(l)}}} m has a small-angle period of {{T = ${num(T)}}} s. Calculate the planet's gravitational field strength {{g}} in m s⁻² (give your answer to 1 decimal place).`,
          answer: { type: "number", value: g, tolerance: tol, display: `${num(g)} m s⁻²` },
          hint: "Square {{T = 2π sqrt(l / g)}} to obtain {{g = (4π^2 l) / T^2}}.",
          solution: [
            `Rearranging {{T = 2π sqrt(l/g)}} gives {{g = (4π^2 l) / T^2}}.`,
            `{{g = (4π^2 * ${num(l)}) / (${num(T)})^2 ≈ ${num(g)}}} m s⁻².`,
          ],
        };
      }
      // mode === 2: Rearrange T = 2*pi*sqrt(l/g) for length l on Earth
      const T = rng.pick([0.8, 1.0, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.5, 2.8, 3.0, 3.2]);
      const l = roundTo((9.8 * T * T) / (4 * Math.PI * Math.PI), 2);
      const tol = 0.02;
      return {
        prompt: `Calculate the length {{l}} (in metres, to 2 decimal places) of a simple pendulum whose small-angle period on Earth ({{g = 9.8}} m s⁻²) is {{T = ${num(T)}}} s.`,
        answer: { type: "number", value: l, tolerance: tol, display: `${num(l)} m` },
        hint: "Rearrange {{T = 2π sqrt(l / g)}} to {{l = (g T^2) / (4π^2)}}.",
        solution: [
          `{{l = (g T^2) / (4π^2) = (9.8 * ${num(T)}^2) / (4π^2) ≈ ${num(l)}}} m.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: HL QUANTITATIVE SHM VELOCITY, PHASE & ENERGY (HL, level 2)
  // ===========================================================================
  {
    id: "c1-shm-waves.shm-energy-hl",
    topicId: "c1-shm-waves",
    title: "SHM Speed, Phase & Energy (HL)",
    level: 2,
    ibLevel: "HL",
    guideRef: "shm-equations-hl",
    generate(rng, tier): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // v_max = w * x0
          const w = rng.pick([4, 5, 6, 8, 10, 12, 15, 20, 25]);
          const x0 = rng.pick([0.02, 0.03, 0.04, 0.05, 0.06, 0.08, 0.1, 0.12, 0.15, 0.2]);
          const vmax = clean(w * x0);
          const tol = Math.max(0.005, roundTo(vmax * 0.01, 4));
          const traps: Trap[] = [];
          safeTrap(traps, vmax, tol, clean(w * w * x0), "That is maximum acceleration ω²x₀; maximum speed is v_max = ωx₀.");
          return {
            prompt: `An SHM oscillator has angular frequency {{ω = ${num(w)}}} rad s⁻¹ and amplitude {{x_0 = ${num(x0)}}} m. Calculate its maximum speed {{v_max}} in m s⁻¹.`,
            answer: { type: "number", value: vmax, tolerance: tol, display: `${num(vmax)} m s⁻¹` },
            hint: "Maximum speed occurs at equilibrium: {{v_max = ω x_0}}.",
            traps,
            solution: [`{{v_max = ω x_0 = ${num(w)} * ${num(x0)} = ${num(vmax)}}} m s⁻¹.`],
          };
        }
        if (mode === 1) {
          // E_T = 0.5 * m * w^2 * x0^2
          const m = rng.pick([0.2, 0.4, 0.5, 0.6, 0.8, 1.0, 1.2, 2.0]);
          const w = rng.pick([2, 4, 5, 6, 8, 10]);
          const x0 = rng.pick([0.05, 0.1, 0.15, 0.2, 0.25]);
          const et = clean(0.5 * m * w * w * x0 * x0);
          const tol = Math.max(0.001, roundTo(et * 0.01, 4));
          const traps: Trap[] = [];
          safeTrap(traps, et, tol, clean(m * w * w * x0 * x0), "Remember the factor of ½ in E_T = ½mω²x₀²!");
          return {
            prompt: `A {{${num(m)}}} kg mass oscillates with SHM at {{ω = ${num(w)}}} rad s⁻¹ and amplitude {{x_0 = ${num(x0)}}} m. Calculate its total mechanical energy {{E_T}} in joules.`,
            answer: { type: "number", value: et, tolerance: tol, display: `${num(et)} J` },
            hint: "Evaluate {{E_T = 1/2 m ω^2 x_0^2}}.",
            traps,
            solution: [
              `{{E_T = 1/2 m ω^2 x_0^2 = 0.5 * ${num(m)} * (${num(w)})^2 * (${num(x0)})^2 = ${num(et)}}} J.`,
            ],
          };
        }
        // Phase difference Δφ = 2π(Δt/T)
        const T = rng.pick([0.4, 0.5, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0]);
        const frac = rng.pick([0.1, 0.125, 0.2, 0.25, 0.375, 0.4, 0.5]);
        const dt = clean(T * frac);
        const dphi = roundTo(2 * Math.PI * frac, 2);
        const tol = 0.02;
        return {
          prompt: `Two SHM oscillators both have period {{T = ${num(T)}}} s, and one reaches its peak {{Δt = ${num(dt)}}} s after the other. Calculate their phase difference {{Δφ}} in radians (give your answer to 2 decimal places).`,
          answer: { type: "number", value: dphi, tolerance: tol, display: `${num(dphi)} rad` },
          hint: "Apply {{Δφ = 2π (Δt / T)}}.",
          solution: [
            `{{Δφ = 2π (Δt / T) = 2π (${num(dt)} / ${num(T)}) = 2π * ${num(frac)} ≈ ${num(dphi)}}} rad.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        const triples: ReadonlyArray<[number, number, number]> = [
          [3, 4, 5],
          [4, 3, 5],
          [5, 12, 13],
          [12, 5, 13],
          [8, 15, 17],
          [15, 8, 17],
          [7, 24, 25],
          [24, 7, 25],
        ];
        const [a, b, c] = rng.pick(triples);
        const scale = rng.pick([0.01, 0.02]);
        const x = clean(a * scale);
        const rem = clean(b * scale);
        const x0 = clean(c * scale);

        if (mode === 0) {
          // Exact speed v = w * sqrt(x0^2 - x^2)
          const w = rng.pick([4, 5, 6, 8, 10, 12, 15, 20]);
          const v = clean(w * rem);
          const tol = Math.max(0.01, roundTo(v * 0.01, 4));
          const traps: Trap[] = [];
          safeTrap(traps, v, tol, clean(w * x0), "That is v_max = ωx₀ at equilibrium; use v = ω√(x₀² − x²) at displacement x.");
          safeTrap(traps, v, tol, clean(w * (x0 - x)), "Square before subtracting: √(x₀² − x²) ≠ x₀ − x!");
          return {
            prompt: `An SHM oscillator has angular frequency {{ω = ${num(w)}}} rad s⁻¹ and amplitude {{x_0 = ${num(x0)}}} m. Calculate its speed (in m s⁻¹) at displacement {{x = ${num(x)}}} m.`,
            answer: { type: "number", value: v, tolerance: tol, display: `${num(v)} m s⁻¹` },
            hint: "Use {{|v| = ω sqrt(x_0^2 - x^2)}}.",
            traps,
            solution: [
              `{{sqrt(x_0^2 - x^2) = sqrt(${num(x0)}^2 - ${num(x)}^2) = ${num(rem)}}} m.`,
              `{{|v| = ${num(w)} * ${num(rem)} = ${num(v)}}} m s⁻¹.`,
            ],
          };
        }
        // Exact kinetic energy E_k = 0.5 * m * w^2 * (x0^2 - x^2)
        const m = rng.pick([0.2, 0.4, 0.5, 0.8, 1.0, 2.0]);
        const w = rng.pick([5, 10, 20]);
        const ek = clean(0.5 * m * w * w * rem * rem);
        const ep = clean(0.5 * m * w * w * x * x);
        const tol = Math.max(0.001, roundTo(ek * 0.01, 4));
        const traps: Trap[] = [];
        safeTrap(traps, ek, tol, ep, "That is the potential energy E_p = ½mω²x²; kinetic energy is E_k = ½mω²(x₀² − x²).");
        return {
          prompt: `A {{${num(m)}}} kg mass executes SHM with {{ω = ${num(w)}}} rad s⁻¹ and amplitude {{x_0 = ${num(x0)}}} m. Calculate its kinetic energy {{E_k}} (in joules) at displacement {{x = ${num(x)}}} m.`,
          answer: { type: "number", value: ek, tolerance: tol, display: `${num(ek)} J` },
          hint: "Apply {{E_k = 1/2 m ω^2 (x_0^2 - x^2)}}.",
          traps,
          solution: [
            `{{x_0^2 - x^2 = ${num(x0)}^2 - ${num(x)}^2 = ${num(clean(rem * rem))}}} m².`,
            `{{E_k = 0.5 * ${num(m)} * ${num(w)}^2 * ${num(clean(rem * rem))} = ${num(ek)}}} J.`,
          ],
        };
      }

      // TIER 3: Energy fraction / reverse amplitude / two-point ω deduction
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Given E_T and x/x0 ratio, find E_k
        const frac = rng.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]);
        const et = rng.pick([0.4, 0.5, 0.8, 1.0, 1.2, 1.6, 2.0, 2.5, 3.2, 4.0, 5.0]);
        const ep = clean(et * frac * frac);
        const ek = clean(et - ep);
        const tol = Math.max(0.002, roundTo(ek * 0.01, 4));
        const traps: Trap[] = [];
        safeTrap(traps, ek, tol, ep, "That is potential energy E_p = E_T(x/x₀)²; subtract from E_T to find E_k!");
        safeTrap(traps, ek, tol, clean(et * (1 - frac)), "Remember E_p scales as (x/x₀)², not linearly with x/x₀!");
        return {
          prompt: `An SHM oscillator has total mechanical energy {{E_T = ${num(et)}}} J and amplitude {{x_0}}. Calculate its kinetic energy {{E_k}} (in joules) when its displacement is {{x = ${num(frac)} x_0}}.`,
          answer: { type: "number", value: ek, tolerance: tol, display: `${num(ek)} J` },
          hint: "Use {{E_p = E_T (x / x_0)^2}} and {{E_k = E_T - E_p}}.",
          traps,
          solution: [
            `Potential energy: {{E_p = ${num(et)} * (${num(frac)})^2 = ${num(ep)}}} J.`,
            `Kinetic energy: {{E_k = E_T - E_p = ${num(et)} - ${num(ep)} = ${num(ek)}}} J.`,
          ],
        };
      }
      if (mode === 1) {
        // Given v_max and speed v1 at x1 -> find amplitude x0 using exact Pythagorean triples
        const triples: ReadonlyArray<[number, number, number]> = [
          [3, 4, 5],
          [4, 3, 5],
          [5, 12, 13],
          [12, 5, 13],
          [8, 15, 17],
          [15, 8, 17],
        ];
        const [a, b, c] = rng.pick(triples);
        const scale = rng.pick([0.01, 0.02]);
        const x1 = clean(a * scale);
        const x0 = clean(c * scale);
        const w = rng.pick([5, 8, 10, 12, 15, 20]);
        const vmax = clean(w * x0);
        const v1 = clean(w * b * scale);
        const tol = 0.002;
        return {
          prompt: `An SHM particle has maximum speed {{v_max = ${num(vmax)}}} m s⁻¹. At displacement {{x = ${num(x1)}}} m, its speed is {{${num(v1)}}} m s⁻¹. Calculate its amplitude {{x_0}} in metres.`,
          answer: { type: "number", value: x0, tolerance: tol, display: `${num(x0)} m` },
          hint: "Divide {{v = ω sqrt(x_0^2 - x^2)}} by {{v_max = ω x_0}} to cancel {{ω}}, then solve for {{x_0}}.",
          solution: [
            `{{v / v_max = sqrt(1 - (x / x_0)^2) = ${num(v1)} / ${num(vmax)} = ${b}/${c}}}.`,
            `Squaring gives {{(x / x_0)^2 = 1 - (${b}/${c})^2 = (${a}/${c})^2}} ⇒ {{x / x_0 = ${a}/${c}}}.`,
            `Therefore {{x_0 = (${c}/${a}) * ${num(x1)} = ${num(x0)}}} m.`,
          ],
        };
      }
      // mode === 2: Two (x, v) pairs -> deduce ω via w^2 = (v1^2 - v2^2)/(x2^2 - x1^2)
      const triples: ReadonlyArray<[number, number, number]> = [
        [3, 4, 5],
        [5, 12, 13],
        [8, 15, 17],
      ];
      const [a, b] = rng.pick(triples);
      const scale = rng.pick([0.01, 0.02]);
      const x1 = clean(a * scale);
      const x2 = clean(b * scale);
      const w = rng.pick([4, 5, 6, 8, 10, 12, 15, 20, 25]);
      // At x1 = a*scale, sqrt(x0^2 - x1^2) = b*scale -> v1 = w*b*scale
      // At x2 = b*scale, sqrt(x0^2 - x2^2) = a*scale -> v2 = w*a*scale
      const v1 = clean(w * b * scale);
      const v2 = clean(w * a * scale);
      const tol = 0.1;
      return {
        prompt: `An SHM particle has speed {{${num(v1)}}} m s⁻¹ at displacement {{${num(x1)}}} m, and speed {{${num(v2)}}} m s⁻¹ at displacement {{${num(x2)}}} m. Calculate its angular frequency {{ω}} in rad s⁻¹.`,
        answer: { type: "number", value: w, tolerance: tol, display: `${num(w)} rad s⁻¹` },
        hint: "Subtract {{v_2^2 = ω^2(x_0^2 - x_2^2)}} from {{v_1^2 = ω^2(x_0^2 - x_1^2)}} to eliminate {{x_0^2}}.",
        solution: [
          `Subtracting eliminates {{x_0^2}}: {{v_1^2 - v_2^2 = ω^2 (x_2^2 - x_1^2)}}.`,
          `{{ω = sqrt((${num(v1)}^2 - ${num(v2)}^2) / (${num(x2)}^2 - ${num(x1)}^2)) = ${num(w)}}} rad s⁻¹.`,
        ],
      };
    },
  },
];
