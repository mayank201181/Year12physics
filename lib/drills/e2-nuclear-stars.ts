import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

function roundSig(n: number, sig = 3): number {
  if (n === 0) return 0;
  return clean(parseFloat(n.toPrecision(sig)));
}

const ISOTOPES = [
  { name: "technetium-99m", unit: "hours" },
  { name: "sodium-24", unit: "hours" },
  { name: "iodine-131", unit: "days" },
  { name: "phosphorus-32", unit: "days" },
  { name: "radon-222", unit: "days" },
  { name: "barium-137m", unit: "minutes" },
] as const;

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: Half-Life, Background Radiation & Decay Chains [SL, level 1]
  // ===========================================================================
  {
    id: "e2-nuclear-stars.half-life-decay",
    topicId: "e2-nuclear-stars",
    title: "Half-Life, Background Subtraction & Decay Chains",
    level: 1,
    ibLevel: "SL",
    guideRef: "binding-energy-decay",
    generate(rng, tier) {
      if (tier === 1) {
        const iso = rng.pick(ISOTOPES);
        const n = rng.int(2, 5);
        const halfLife = rng.int(2, 18);
        const aFinal = rng.int(5, 25);
        const factor = 2 ** n;
        const a0 = aFinal * factor;
        const t = n * halfLife;

        if (rng.bool(0.5)) {
          const linearTrap = roundTo(a0 / n, 1);
          const traps =
            Math.abs(linearTrap - aFinal) > 0.5
              ? [
                  {
                    spec: { type: "number" as const, value: linearTrap, tolerance: 0.2 },
                    feedback: `Activity halves ${n} times (divide by {{2^${n} = ${factor}}}), not divide by ${n}!`,
                  },
                ]
              : undefined;
          return {
            prompt: `A sample of ${iso.name} has a half-life of **${halfLife} ${iso.unit}** and an initial activity of **${a0} Bq**. Calculate its activity in Bq after **${t} ${iso.unit}**.`,
            answer: { type: "number", value: aFinal, display: `${aFinal} Bq` },
            hint: `First find how many half-lives have elapsed: {{n = ${t} / ${halfLife}}}.`,
            traps,
            solution: [
              `Number of half-lives: {{n = ${t} / ${halfLife} = ${n}}}.`,
              `Remaining activity: {{A = ${a0} / 2^${n} = ${a0} / ${factor} = ${aFinal}}} Bq.`,
            ],
          };
        }

        const trapHalf = roundTo(t / factor, 2);
        const traps =
          Math.abs(trapHalf - halfLife) > 0.2
            ? [
                {
                  spec: { type: "number" as const, value: trapHalf, tolerance: 0.05 },
                  feedback: `Divide the elapsed time by the number of half-lives (${n}), not by {{2^${n} = ${factor}}}.`,
                },
              ]
            : undefined;
        return {
          prompt: `The activity of a ${iso.name} sample falls from **${a0} Bq** to **${aFinal} Bq** in **${t} ${iso.unit}**. Calculate its half-life in ${iso.unit}.`,
          answer: { type: "number", value: halfLife, display: `${halfLife} ${iso.unit}` },
          hint: `Find the fraction remaining ({{${aFinal} / ${a0} = 1/${factor}}}) and express it as {{(1/2)^n}}.`,
          traps,
          solution: [
            `Fraction remaining = {{${aFinal} / ${a0} = 1/${factor} = (1/2)^${n}}}, so **${n} half-lives** elapsed.`,
            `Half-life {{T_½ = ${t} / ${n} = ${halfLife}}} ${iso.unit}.`,
          ],
        };
      }

      if (tier === 2) {
        const iso = rng.pick(ISOTOPES);
        const bg = rng.int(12, 36);
        const n = rng.int(2, 4);
        const factor = 2 ** n;
        const cFinal = rng.int(8, 30);
        const c0 = cFinal * factor;
        const r0 = c0 + bg;
        const rFinal = cFinal + bg;
        const halfLife = rng.int(2, 16);
        const t = n * halfLife;

        if (rng.bool(0.55)) {
          const noSubTrap = roundTo(r0 / factor, 1);
          return {
            prompt: `A GM counter records **${r0} counts min⁻¹** near a ${iso.name} source ({{T_½ = ${halfLife}}} ${iso.unit}). The constant background count rate is **${bg} counts min⁻¹**. Calculate the total count rate (in counts min⁻¹) recorded **${t} ${iso.unit}** later.`,
            answer: { type: "number", value: rFinal },
            hint: `Subtract the ${bg} counts min⁻¹ background *before* halving ${n} times, then add ${bg} back at the end.`,
            traps: [
              {
                spec: { type: "number", value: cFinal },
                feedback: `${cFinal} counts min⁻¹ is the source alone — add the ${bg} counts min⁻¹ background back for the total GM reading!`,
              },
              {
                spec: { type: "number", value: noSubTrap, tolerance: 0.2 },
                feedback: `Subtract the background (${bg} counts min⁻¹) *before* halving, because background radiation does not decay!`,
              },
            ],
            solution: [
              `Corrected initial source rate = {{${r0} - ${bg} = ${c0}}} counts min⁻¹.`,
              `Elapsed half-lives = {{${t} / ${halfLife} = ${n}}}, so remaining source rate = {{${c0} / 2^${n} = ${cFinal}}} counts min⁻¹.`,
              `Total GM tube reading = {{${cFinal} + ${bg} = ${rFinal}}} counts min⁻¹.`,
            ],
          };
        }

        return {
          prompt: `A GM counter near a ${iso.name} sample drops from **${r0} counts min⁻¹** to **${rFinal} counts min⁻¹** over **${t} ${iso.unit}**. The background rate is **${bg} counts min⁻¹**. Determine the half-life in ${iso.unit}.`,
          answer: { type: "number", value: halfLife, display: `${halfLife} ${iso.unit}` },
          hint: `Subtract ${bg} from BOTH readings before finding how many halvings occurred.`,
          solution: [
            `Corrected rates: initial = {{${r0} - ${bg} = ${c0}}} min⁻¹; final = {{${rFinal} - ${bg} = ${cFinal}}} min⁻¹.`,
            `Ratio = {{${cFinal} / ${c0} = 1/${factor} = (1/2)^${n}}} ⇒ **${n} half-lives** elapsed.`,
            `Half-life {{T_½ = ${t} / ${n} = ${halfLife}}} ${iso.unit}.`,
          ],
        };
      }

      // Tier 3: Reverse background problem OR α/β⁻ decay chain counting
      if (rng.bool(0.5)) {
        const bg = rng.int(10, 30);
        const n = rng.int(3, 5);
        const factor = 2 ** n;
        const cFinal = rng.int(5, 18);
        const c0 = cFinal * factor;
        const rFinal = cFinal + bg;
        const r0 = c0 + bg;
        const halfLife = rng.int(3, 15);
        const t = n * halfLife;
        const iso = rng.pick(ISOTOPES);
        return {
          prompt: `After **${t} ${iso.unit}**, a GM counter placed near a ${iso.name} source ({{T_½ = ${halfLife}}} ${iso.unit}) reads **${rFinal} counts min⁻¹**. If background radiation is **${bg} counts min⁻¹**, calculate the **initial** GM reading (in counts min⁻¹) at {{t = 0}}.`,
          answer: { type: "number", value: r0 },
          hint: `Subtract background from ${rFinal} first, multiply by {{2^${n} = ${factor}}} to go backward in time, then add background back.`,
          traps: [
            {
              spec: { type: "number", value: c0 },
              feedback: `${c0} is the initial *source* rate alone — add the ${bg} counts min⁻¹ background for the GM tube reading!`,
            },
            {
              spec: { type: "number", value: rFinal * factor },
              feedback: `You multiplied the background rate by ${factor} too! Subtract ${bg} before scaling backward.`,
            },
          ],
          solution: [
            `Remaining source rate = {{${rFinal} - ${bg} = ${cFinal}}} counts min⁻¹.`,
            `Working back {{n = ${t} / ${halfLife} = ${n}}} half-lives: {{C_0 = ${cFinal} * 2^${n} = ${c0}}} counts min⁻¹.`,
            `Initial GM reading = {{${c0} + ${bg} = ${r0}}} counts min⁻¹.`,
          ],
        };
      }

      // Sequential α and β⁻ decay chain
      const a1 = rng.int(108, 119) * 2; // 216..238
      const z1 = rng.int(84, 92);
      const nAlpha = rng.int(2, 5);
      let nBeta = rng.int(1, 5);
      if (nBeta === nAlpha) nBeta = nAlpha === 5 ? 4 : nAlpha + 1;
      const a2 = a1 - 4 * nAlpha;
      const z2 = z1 - 2 * nAlpha + nBeta;
      return {
        prompt: `A heavy parent nuclide with **A = ${a1}, Z = ${z1}** decays into a daughter nuclide with **A = ${a2}, Z = ${z2}** through a sequence of α and β⁻ decays. Calculate the number of **β⁻ particles** emitted.`,
        answer: { type: "number", value: nBeta },
        hint: `Only α decays change A (by −4 each). Find the α count first, then see how many β⁻ decays (each +1 to Z) reach Z = ${z2}.`,
        traps: [
          {
            spec: { type: "number", value: nAlpha },
            feedback: `${nAlpha} is the number of **α-particles** emitted — now track Z to find the number of β⁻ particles!`,
          },
        ],
        solution: [
          `Number of α decays = {{(${a1} - ${a2}) / 4 = ${4 * nAlpha} / 4 = ${nAlpha}}}.`,
          `After ${nAlpha} α decays, proton number drops to {{${z1} - 2(${nAlpha}) = ${z1 - 2 * nAlpha}}}.`,
          `To reach Z = ${z2}, each β⁻ adds +1 to Z: {{${z2} - ${z1 - 2 * nAlpha} = ${nBeta}}} β⁻ particles.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: Parallax, Wien's Law, Luminosity & HR Ratios [SL, level 2]
  // ===========================================================================
  {
    id: "e2-nuclear-stars.parallax-luminosity",
    topicId: "e2-nuclear-stars",
    title: "Stellar Parallax, Wien's Law & Luminosity Ratios",
    level: 2,
    ibLevel: "SL",
    guideRef: "fusion-stars-hr",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          const pMilli = rng.int(15, 250);
          const p = roundTo(pMilli / 1000, 3);
          const dPc = roundSig(1 / p, 3);
          const tol = Math.max(0.05, roundTo(dPc * 0.015, 3));
          return {
            prompt: `A nearby star has an annual parallax angle of **${num(p)} arcsec**. Calculate its distance from Earth in **parsecs** to 3 significant figures.`,
            answer: { type: "number", value: dPc, tolerance: tol, display: `${num(dPc)} pc` },
            hint: `Use {{d = 1 / p}} with *p* in arcseconds.`,
            solution: [
              `{{d = 1 / ${num(p)} = ${num(dPc)}}} pc (to 3 s.f.).`,
            ],
          };
        }

        const lamNm = rng.int(22, 95) * 10; // 220..950 nm
        const temp = roundSig(2.9e6 / lamNm, 3);
        const tol = Math.max(30, Math.round(temp * 0.015));
        return {
          prompt: `A star's blackbody spectrum peaks at **{{λ_max = ${lamNm}}} nm**. Using Wien's displacement law ({{λ_max T = 2.90 * 10^(-3)}} m K), calculate its surface temperature in **kelvin** to 3 significant figures.`,
          answer: { type: "number", value: temp, tolerance: tol, display: `${num(temp)} K` },
          hint: `Convert ${lamNm} nm to metres ({{${num(roundTo(lamNm * 1e-9, 10))}}} m) and divide {{2.90 * 10^(-3)}} by {{λ_max}}.`,
          solution: [
            `Convert wavelength: {{λ_max = ${lamNm} * 10^(-9)}} m.`,
            `{{T = (2.90 * 10^(-3)) / (${lamNm} * 10^(-9)) = ${num(temp)}}} K (to 3 s.f.).`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          const rRatio = rng.pick([0.5, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]);
          const tRatio = rng.pick([0.5, 1.5, 2, 2.5, 3]);
          const lExact = clean(rRatio * rRatio * tRatio ** 4);
          const lAns = roundSig(lExact, 3);
          const tol = Math.max(0.02, roundTo(lAns * 0.015, 3));
          const trapSquared = roundSig(rRatio * rRatio * tRatio * tRatio, 3);
          const traps =
            Math.abs(trapSquared - lAns) > tol * 2
              ? [
                  {
                    spec: { type: "number" as const, value: trapSquared, tolerance: Math.max(0.02, roundTo(trapSquared * 0.015, 3)) },
                    feedback: `Raise the temperature ratio to the **fourth** power ({{T^4}}), not squared!`,
                  },
                ]
              : undefined;
          return {
            prompt: `Star X has radius **{{${num(rRatio)} R_☉}}** and surface temperature **{{${num(tRatio)} T_☉}}**. Calculate its luminosity as a multiple of solar luminosity {{L_☉}} (to 3 significant figures).`,
            answer: { type: "number", value: lAns, tolerance: tol },
            hint: `Use the Stefan–Boltzmann ratio {{L / L_☉ = (R / R_☉)^2 (T / T_☉)^4}}.`,
            traps,
            solution: [
              `{{L / L_☉ = (${num(rRatio)})^2 * (${num(tRatio)})^4 = ${num(clean(rRatio * rRatio))} * ${num(clean(tRatio ** 4))} = ${num(lAns)}}}.`,
            ],
          };
        }

        // Solve for radius ratio R / R_sun cleanly
        if (rng.bool(0.5)) {
          const m = rng.int(3, 25);
          const rAns = 4 * m;
          const lRatio = m * m;
          return {
            prompt: `A red giant has luminosity **{{${lRatio} L_☉}}** and surface temperature **{{0.50 T_☉}}**. Calculate its radius as a multiple of the Sun's radius {{R_☉}}.`,
            answer: { type: "number", value: rAns },
            hint: `Substitute into {{L / L_☉ = (R / R_☉)^2 (0.50)^4}} and remember {{(0.50)^4 = 1/16}}.`,
            traps: [
              {
                spec: { type: "number", value: m },
                feedback: `You found {{sqrt(${lRatio}) = ${m}}} — remember to divide by {{(0.50)^2 = 0.25}} (multiply by 4)!`,
              },
            ],
            solution: [
              `{{${lRatio} = (R / R_☉)^2 (0.50)^4 = (R / R_☉)^2 / 16}}.`,
              `{{(R / R_☉)^2 = ${16 * lRatio} => R / R_☉ = ${rAns}}}.`,
            ],
          };
        }

        const rAns = rng.int(2, 18);
        const lRatio = 16 * rAns * rAns;
        return {
          prompt: `A hot blue star has luminosity **{{${lRatio} L_☉}}** and surface temperature **{{2.0 T_☉}}**. Calculate its radius as a multiple of the Sun's radius {{R_☉}}.`,
          answer: { type: "number", value: rAns },
          hint: `Use {{L / L_☉ = (R / R_☉)^2 (2.0)^4}} where {{2^4 = 16}}.`,
          solution: [
            `{{${lRatio} = 16 (R / R_☉)^2 => (R / R_☉)^2 = ${rAns * rAns} => R / R_☉ = ${rAns}}}.`,
          ],
        };
      }

      // Tier 3: Parallax + equal/ratio apparent brightness OR mass-luminosity scaling
      if (rng.bool(0.55)) {
        const pBase = rng.pick([0.01, 0.015, 0.02, 0.025, 0.03, 0.04, 0.05]);
        const dRatio = rng.int(2, 6);
        const bRatio = rng.int(1, 5);
        const pX = pBase;
        const pY = roundTo(pBase * dRatio, 3);
        const lRatio = bRatio * dRatio * dRatio;
        const trapNoSquare = bRatio * dRatio;
        return {
          prompt: `Star X has parallax angle **${num(pX)} arcsec** and Star Y has parallax angle **${num(pY)} arcsec**. Observed from Earth, Star X's apparent brightness is **${bRatio}×** that of Star Y ({{b_X = ${bRatio} b_Y}}). Calculate the luminosity ratio **{{L_X / L_Y}}**.`,
          answer: { type: "number", value: lRatio },
          hint: `First find {{d_X / d_Y = p_Y / p_X = ${dRatio}}}, then use {{L_X / L_Y = (b_X / b_Y)(d_X / d_Y)^2}}.`,
          traps: [
            {
              spec: { type: "number", value: trapNoSquare },
              feedback: `Apparent brightness obeys the inverse-**square** law — square the distance ratio {{${dRatio}^2 = ${dRatio * dRatio}}}!`,
            },
          ],
          solution: [
            `Since {{d = 1 / p}}, {{d_X / d_Y = ${num(pY)} / ${num(pX)} = ${dRatio}}}.`,
            `From {{b = L / (4 pi d^2)}}, {{L_X / L_Y = (b_X / b_Y)(d_X / d_Y)^2 = ${bRatio} * ${dRatio}^2 = ${lRatio}}}.`,
          ],
        };
      }

      const mass = rng.pick([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20]);
      const lRatio = roundSig(mass ** 3.5, 3);
      const tol = Math.max(0.1, roundSig(lRatio * 0.015, 2));
      return {
        prompt: `A main-sequence star has mass **{{${num(mass)} M_☉}}**. Using the mass–luminosity relation {{L / L_☉ = (M / M_☉)^3.5}}, calculate its luminosity as a multiple of {{L_☉}} (to 3 significant figures).`,
        answer: { type: "number", value: lRatio, tolerance: tol },
        hint: `Evaluate {{${num(mass)}^3.5}} on your calculator.`,
        solution: [
          `{{L / L_☉ = (${num(mass)})^3.5 = ${num(lRatio)}}} (to 3 s.f.).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: HL Decay Constant, Exponential Law & Binding Energy [HL, level 2]
  // ===========================================================================
  {
    id: "e2-nuclear-stars.binding-decay-hl",
    topicId: "e2-nuclear-stars",
    title: "HL Decay Constant, Exponential Decay & Linearized ln A",
    level: 2,
    ibLevel: "HL",
    guideRef: "decay-law-hl",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          const unit = rng.pick(["s", "min", "h"]);
          const invUnit = unit === "s" ? "s⁻¹" : unit === "min" ? "min⁻¹" : "h⁻¹";
          const halfLife = rng.int(4, 90);
          const lam = roundSig(Math.LN2 / halfLife, 3);
          const tol = Math.max(0.0002, roundSig(lam * 0.015, 2));
          const trapNoLn2 = roundSig(1 / halfLife, 3);
          return {
            prompt: `A radioactive nuclide has a half-life of **${halfLife} ${unit}**. Calculate its decay constant {{λ}} in **${invUnit}** to 3 significant figures.`,
            answer: { type: "number", value: lam, tolerance: tol },
            hint: `Use {{λ = ln(2) / T_½}} with {{ln(2) ≈ 0.6931}}.`,
            traps: [
              {
                spec: { type: "number", value: trapNoLn2, tolerance: Math.max(0.0005, roundSig(trapNoLn2 * 0.015, 2)) },
                feedback: `You computed {{1 / T_½}} — multiply by {{ln(2) ≈ 0.693}}!`,
              },
            ],
            solution: [
              `{{λ = ln(2) / ${halfLife} = 0.69315 / ${halfLife} = ${num(lam)}}} ${invUnit}.`,
            ],
          };
        }

        const lamMilli = rng.int(8, 85);
        const lam = roundTo(lamMilli / 1000, 3); // 0.008..0.085 s^-1
        const halfLife = roundSig(Math.LN2 / lam, 3);
        const tol = Math.max(0.1, roundSig(halfLife * 0.015, 2));
        return {
          prompt: `A radioisotope has decay constant **{{λ = ${num(lam)}}} s⁻¹**. Calculate its half-life {{T_½}} in **seconds** to 3 significant figures.`,
          answer: { type: "number", value: halfLife, tolerance: tol, display: `${num(halfLife)} s` },
          hint: `Rearrange {{T_½ = ln(2) / λ}}.`,
          solution: [
            `{{T_½ = ln(2) / ${num(lam)} = 0.69315 / ${num(lam)} = ${num(halfLife)}}} s.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          const a0 = rng.int(20, 95) * 10; // 200..950 Bq
          const lam = roundTo(rng.int(3, 18) * 0.005, 3); // 0.015..0.090 h^-1
          const t = rng.int(4, 16) * 2; // 8..32 h
          const expArg = roundTo(lam * t, 4);
          const aExact = a0 * Math.exp(-expArg);
          const aAns = roundSig(aExact, 3);
          const tol = Math.max(1, roundSig(aAns * 0.015, 2));
          const dropTrap = roundSig(a0 - aExact, 3);
          const traps =
            Math.abs(dropTrap - aAns) > tol * 4
              ? [
                  {
                    spec: { type: "number" as const, value: dropTrap, tolerance: Math.max(1, roundSig(dropTrap * 0.015, 2)) },
                    feedback: `That is the *decrease* in activity {{A_0(1 - e^(-λ t))}} — evaluate {{A_0 e^(-λ t)}} for the remaining activity!`,
                  },
                ]
              : undefined;
          return {
            prompt: `A radioactive source has initial activity **${a0} Bq** and decay constant **{{λ = ${num(lam)}}} h⁻¹**. Calculate its activity in **Bq** after **${t} hours** (to 3 significant figures).`,
            answer: { type: "number", value: aAns, tolerance: tol, display: `${num(aAns)} Bq` },
            hint: `Compute {{λ t = ${num(expArg)}}} first, then evaluate {{A = ${a0} * e^(-${num(expArg)})}}.`,
            traps,
            solution: [
              `Exponent: {{λ t = ${num(lam)} * ${t} = ${num(expArg)}}}.`,
              `Remaining activity: {{A = ${a0} * e^(-${num(expArg)}) = ${num(aAns)}}} Bq.`,
            ],
          };
        }

        // Linearized ln A vs t graph -> find T_1/2
        const y0 = roundTo(rng.int(60, 95) / 10, 1);
        const lam = roundTo(rng.int(4, 32) * 0.005, 3); // 0.020..0.160 min^-1
        const t1 = rng.pick([10, 20, 25, 40]);
        const y1 = roundTo(y0 - lam * t1, 3);
        const halfLife = roundSig(Math.LN2 / lam, 3);
        const tol = Math.max(0.05, roundSig(halfLife * 0.015, 2));
        return {
          prompt: `A straight-line graph of {{ln A}} against time *t* (in minutes) passes through **(0, ${num(y0)})** and **(${t1}, ${num(y1)})**. Determine the half-life of the sample in **minutes** to 3 significant figures.`,
          answer: { type: "number", value: halfLife, tolerance: tol, display: `${num(halfLife)} minutes` },
          hint: `The gradient of {{ln A}} vs *t* equals {{ -λ }}; once you find {{λ}}, use {{T_½ = ln(2) / λ}}.`,
          solution: [
            `Gradient = {{(${num(y1)} - ${num(y0)}) / (${t1} - 0) = -${num(lam)}}} min⁻¹ ⇒ {{λ = ${num(lam)}}} min⁻¹.`,
            `Half-life {{T_½ = ln(2) / ${num(lam)} = ${num(halfLife)}}} minutes.`,
          ],
        };
      }

      // Tier 3: Time to drop to p% remaining OR binding energy per nucleon from Δm
      if (rng.bool(0.55)) {
        const halfLife = rng.int(4, 60);
        const pct = rng.int(12, 42);
        const unit = rng.pick(["hours", "days"]);
        const tAns = roundSig(halfLife * (Math.log(100 / pct) / Math.LN2), 3);
        const tol = Math.max(0.1, roundSig(tAns * 0.015, 2));
        return {
          prompt: `A radioisotope has a half-life of **${halfLife} ${unit}**. Calculate the time in **${unit}** for its activity to fall to **${pct}%** of its initial value (to 3 significant figures).`,
          answer: { type: "number", value: tAns, tolerance: tol, display: `${num(tAns)} ${unit}` },
          hint: `Set {{${num(roundTo(pct / 100, 2))} = e^(-λ t)}} where {{λ = ln(2) / ${halfLife}}}, then take natural logarithms.`,
          solution: [
            `{{${pct}/100 = e^(-λ t) => λ t = ln(100 / ${pct}) = ${num(roundTo(Math.log(100 / pct), 4))}}}.`,
            `With {{λ = ln(2) / ${halfLife}}}, {{t = ${halfLife} * ln(100 / ${pct}) / ln(2) = ${num(tAns)}}} ${unit}.`,
          ],
        };
      }

      // Binding energy per nucleon from mass defect
      const aNum = rng.int(10, 60);
      const dmPerNucleon = rng.int(720, 940) / 100000; // 0.00720..0.00940 u/nucleon
      const dm = roundTo(aNum * dmPerNucleon, 5);
      const ebTotal = roundSig(dm * 931.5, 3);
      const ebPer = roundSig((dm * 931.5) / aNum, 3);
      const tol = Math.max(0.03, roundSig(ebPer * 0.015, 2));
      return {
        prompt: `A nuclide with nucleon number **A = ${aNum}** has a mass defect of **${num(dm)} u**. Using {{1 u = 931.5}} MeV c⁻², calculate its **binding energy per nucleon** in MeV to 3 significant figures.`,
        answer: { type: "number", value: ebPer, tolerance: tol, display: `${num(ebPer)} MeV` },
        hint: `Multiply ${num(dm)} u by 931.5 MeV u⁻¹ for total binding energy, then divide by A = ${aNum}.`,
        traps: [
          {
            spec: { type: "number", value: ebTotal, tolerance: Math.max(0.5, roundSig(ebTotal * 0.015, 2)) },
            feedback: `${num(ebTotal)} MeV is the *total* binding energy — remember to divide by A = ${aNum} nucleons!`,
          },
        ],
        solution: [
          `Total binding energy {{E_B = ${num(dm)} * 931.5 = ${num(ebTotal)}}} MeV.`,
          `Binding energy per nucleon = {{${num(ebTotal)} / ${aNum} = ${num(ebPer)}}} MeV.`,
        ],
      };
    },
  },
];
