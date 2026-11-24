import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

/** Round a positive number cleanly to 3 significant figures with zero FP noise. */
function sig3(x: number): number {
  if (x === 0) return 0;
  return clean(Number(x.toPrecision(3)));
}

/** Reasonable tolerance (~1.5%) for 3 s.f. physics calculations. */
function tol3(x: number, floor = 0.01): number {
  return clean(Math.max(floor, Number((Math.abs(x) * 0.015).toPrecision(2))));
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: MAGNETIC FLUX & FLUX LINKAGE (LEVEL 1, HL)
  // ===========================================================================
  {
    id: "d2-induction.flux-linkage",
    topicId: "d2-induction",
    title: "Magnetic Flux & Flux Linkage",
    level: 1,
    ibLevel: "HL",
    guideRef: "magnetic-flux-linkage",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const N = rng.pick([20, 40, 50, 80, 100, 120, 150, 200, 250, 300, 400]);
        const B = rng.pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
        const aCm2 = rng.pick([20, 25, 40, 50, 60, 80, 100, 120, 150, 200, 250]);
        const A = clean(aCm2 * 1e-4);
        const fluxOne = clean(B * A);
        const fluxLink = clean(N * fluxOne);
        const ans = sig3(fluxLink);
        const tol = tol3(ans, 0.002);
        const trapNoN = sig3(fluxOne);
        const traps =
          Math.abs(trapNoN - ans) > tol * 3
            ? [
                {
                  spec: { type: "number" as const, value: trapNoN, tolerance: tol3(trapNoN, 0.0002) },
                  feedback: `That is the flux through one turn — multiply by {{N = ${N}}} to find magnetic flux linkage!`,
                },
              ]
            : undefined;
        return {
          prompt: `A flat coil of {{${N}}} turns and area {{${aCm2} cm^2}} lies with its plane perpendicular to a uniform magnetic field of {{${num(B)} T}}. Calculate the magnetic flux linkage in webers (Wb) to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} Wb` },
          traps,
          hint: "Convert {{cm^2}} to {{m^2}} using {{1 cm^2 = 10^(-4) m^2}}, then use {{NΦ = N B A}} (since {{theta = 0°}}).",
          solution: [
            `Convert area: {{A = ${aCm2} * 10^(-4) = ${num(A)} m^2}}.`,
            `Plane perpendicular to {{B}} means {{theta = 0°}} ({{cos 0° = 1}}).`,
            `{{NΦ = N B A = ${N} * ${num(B)} * ${num(A)} = ${num(ans)} Wb}}.`,
          ],
        };
      }

      if (tier === 2) {
        const N = rng.pick([50, 80, 100, 120, 150, 200, 250, 300, 400]);
        const B = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]);
        const wCm = rng.pick([4, 5, 6, 8, 10, 12, 15]);
        const hCm = rng.pick([5, 6, 8, 10, 12, 15, 20]);
        const planeGiven = rng.bool(0.6);
        const deg = rng.pick([20, 25, 30, 35, 55, 60, 65, 70]);
        const theta = planeGiven ? 90 - deg : deg;
        const A = clean((wCm / 100) * (hCm / 100));
        const cosT = Math.cos((theta * Math.PI) / 180);
        const sinT = Math.sin((theta * Math.PI) / 180);
        const ansMwb = sig3(N * B * A * cosT * 1000);
        const tol = tol3(ansMwb, 0.1);
        const wrongMwb = sig3(N * B * A * sinT * 1000);
        const traps =
          Math.abs(wrongMwb - ansMwb) > tol * 3
            ? [
                {
                  spec: { type: "number" as const, value: wrongMwb, tolerance: tol3(wrongMwb, 0.1) },
                  feedback: planeGiven
                    ? `Watch the angle trap! {{${deg}°}} is to the **plane**, so the angle to the **normal** is {{theta = 90° - ${deg}° = ${theta}°}}.`
                    : `Use {{cos ${theta}°}} because {{${theta}°}} is already the angle to the **normal**.`,
                },
              ]
            : undefined;
        const anglePhrase = planeGiven
          ? `The **plane of the coil** makes an angle of {{${deg}°}} with the magnetic field lines.`
          : `The **normal to the coil** makes an angle of {{${deg}°}} with the magnetic field lines.`;
        return {
          prompt: `A rectangular coil of {{${N}}} turns measures {{${wCm} cm * ${hCm} cm}} in a uniform magnetic field of {{${num(B)} T}}. ${anglePhrase} Calculate the magnetic flux linkage in mWb to 3 significant figures.`,
          answer: { type: "number", value: ansMwb, tolerance: tol, display: `${num(ansMwb)} mWb` },
          traps,
          hint: planeGiven
            ? `First convert the plane angle to the normal angle: {{theta = 90° - ${deg}° = ${theta}°}}, then use {{NΦ = NBA cos theta}}.`
            : `Convert cm to m for area {{A}}, then apply {{NΦ = NBA cos ${theta}°}} and multiply by 1000 for mWb.`,
          solution: [
            `Area {{A = ${num(clean(wCm / 100))} * ${num(clean(hCm / 100))} = ${num(A)} m^2}}.`,
            planeGiven
              ? `Normal angle {{theta = 90° - ${deg}° = ${theta}°}}.`
              : `Normal angle is given directly as {{theta = ${theta}°}}.`,
            `{{NΦ = ${N} * ${num(B)} * ${num(A)} * cos ${theta}° = ${num(sig3(ansMwb / 1000))} Wb = ${num(ansMwb)} mWb}}.`,
          ],
        };
      }

      // Tier 3: Flipping 180 deg circular coil OR rotating between theta1 and theta2
      if (rng.bool(0.5)) {
        const N = rng.pick([100, 150, 200, 250, 300, 400, 500]);
        const rCm = rng.pick([2.5, 3.0, 4.0, 5.0, 6.0, 7.5, 8.0]);
        const B = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6]);
        const r = clean(rCm / 100);
        const A = Math.PI * r * r;
        const single = N * B * A;
        const ans = sig3(2 * single);
        const tol = tol3(ans, 0.005);
        const halfTrap = sig3(single);
        return {
          prompt: `A circular coil of {{${N}}} turns and radius {{${num(rCm)} cm}} initially lies with its plane perpendicular to a uniform {{${num(B)} T}} magnetic field. It is flipped completely over through {{180°}}. Calculate the magnitude of the change in magnetic flux linkage {{|Δ(NΦ)|}} in Wb to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} Wb` },
          traps: [
            {
              spec: { type: "number", value: halfTrap, tolerance: tol3(halfTrap, 0.003) },
              feedback: "Flipping by {{180°}} takes flux linkage from {{+NBA}} to {{-NBA}}, so the change is **{{2NBA}}**, not {{NBA}}!",
            },
            {
              spec: { type: "number", value: 0, tolerance: 0.001 },
              feedback: "Flux is signed relative to the coil's normal — reversing by {{180°}} flips its sign, giving {{|Δ(NΦ)| = 2NBA}}.",
            },
          ],
          hint: "Compute {{A = pi r^2}} with {{r}} in metres, then remember flipping {{180°}} gives {{|Δ(NΦ)| = 2 N B A}}.",
          solution: [
            `Area {{A = pi * (${num(r)})^2 = ${num(sig3(A))} m^2}}.`,
            `Initial flux linkage {{NΦ_1 = +NBA = +${num(halfTrap)} Wb}}; after {{180°}} flip, {{NΦ_2 = -${num(halfTrap)} Wb}}.`,
            `{{|Δ(NΦ)| = 2 N B A = ${num(ans)} Wb}} (3 s.f.).`,
          ],
        };
      }

      const N = rng.pick([100, 150, 200, 250, 300, 400]);
      const B = rng.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
      const aM2 = rng.pick([0.004, 0.005, 0.006, 0.008, 0.01, 0.012, 0.015, 0.02]);
      const t1 = rng.pick([0, 20, 30]);
      const t2 = rng.pick([60, 120, 150, 180]);
      const c1 = Math.cos((t1 * Math.PI) / 180);
      const c2 = Math.cos((t2 * Math.PI) / 180);
      const ans = sig3(N * B * aM2 * Math.abs(c2 - c1));
      const tol = tol3(ans, 0.004);
      return {
        prompt: `A {{${N}}}-turn flat coil of area {{${num(aM2)} m^2}} sits in a uniform {{${num(B)} T}} magnetic field. The angle {{theta}} between the magnetic field and the coil's normal changes from {{${t1}°}} to {{${t2}°}}. Calculate the magnitude of the change in magnetic flux linkage in Wb to 3 significant figures.`,
        answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} Wb` },
        hint: "Watch the sign of {{cos theta}} when {{theta > 90°}}: compute {{|Δ(NΦ)| = N B A |cos theta_2 - cos theta_1|}}.",
        solution: [
          `{{N B A = ${N} * ${num(B)} * ${num(aM2)} = ${num(clean(N * B * aM2))} Wb}}.`,
          `{{cos ${t1}° = ${num(roundTo(c1, 4))}}} and {{cos ${t2}° = ${num(roundTo(c2, 4))}}}.`,
          `{{|Δ(NΦ)| = ${num(clean(N * B * aM2))} * |${num(roundTo(c2, 4))} - ${num(roundTo(c1, 4))}| = ${num(ans)} Wb}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: FARADAY'S LAW & MOTIONAL EMF (LEVEL 2, HL)
  // ===========================================================================
  {
    id: "d2-induction.faraday-motional",
    topicId: "d2-induction",
    title: "Faraday's Law, Motional EMF & Braking",
    level: 2,
    ibLevel: "HL",
    guideRef: "faraday-lenz-laws",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          const N = rng.pick([50, 80, 100, 120, 150, 200, 250, 300, 400, 500]);
          const phi1 = rng.pick([1.0, 1.5, 2.0, 2.5, 3.0]);
          const dPhi = rng.pick([1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0]);
          const phi2 = clean(phi1 + dPhi);
          const dt = rng.pick([0.02, 0.04, 0.05, 0.08, 0.1, 0.2, 0.25]);
          const ans = sig3((N * dPhi * 1e-3) / dt);
          const tol = tol3(ans, 0.02);
          const trapNoN = sig3((dPhi * 1e-3) / dt);
          return {
            prompt: `The magnetic flux through one turn of a {{${N}}}-turn coil increases uniformly from {{${num(phi1)} mWb}} to {{${num(phi2)} mWb}} in {{${num(dt)} s}}. Calculate the magnitude of the induced EMF in volts to 3 significant figures.`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
            traps:
              Math.abs(trapNoN - ans) > tol * 3
                ? [
                    {
                      spec: { type: "number", value: trapNoN, tolerance: tol3(trapNoN, 0.001) },
                      feedback: `Don't forget to multiply by {{N = ${N}}} turns in {{|ε| = N (ΔΦ / Δt)}}!`,
                    },
                  ]
                : undefined,
            hint: "Find {{ΔΦ = Φ_2 - Φ_1}} in webers ({{1 mWb = 10^(-3) Wb}}), then apply {{|ε| = N (ΔΦ / Δt)}}.",
            solution: [
              `{{ΔΦ = (${num(phi2)} - ${num(phi1)}) * 10^(-3) = ${num(clean(dPhi * 1e-3))} Wb}}.`,
              `{{|ε| = ${N} * ${num(clean(dPhi * 1e-3))} / ${num(dt)} = ${num(ans)} V}}.`,
            ],
          };
        }

        const B = rng.pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
        const L = rng.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2]);
        const v = rng.pick([2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 8.0, 10, 12, 15]);
        const ans = sig3(B * v * L);
        const tol = tol3(ans, 0.01);
        return {
          prompt: `A straight conducting rod of length {{${num(L)} m}} moves at {{${num(v)} m s^(-1)}} perpendicular to a uniform magnetic field of {{${num(B)} T}}. Calculate the motional EMF induced across its ends in volts to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
          hint: "Apply the motional EMF relation {{ε = B v L}}.",
          solution: [`{{ε = B v L = ${num(B)} * ${num(v)} * ${num(L)} = ${num(ans)} V}}.`],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const N = rng.pick([100, 150, 200, 250, 300, 400, 500]);
          const aCm2 = rng.pick([15, 20, 25, 30, 40, 50, 60, 80]);
          const A = clean(aCm2 * 1e-4);
          const reverse = rng.bool(0.5);
          const B1 = rng.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6]);
          const B2 = reverse ? clean(-B1) : clean(B1 + rng.pick([0.2, 0.3, 0.4, 0.5, 0.6]));
          const dB = clean(Math.abs(B2 - B1));
          const dt = rng.pick([0.04, 0.05, 0.08, 0.1, 0.15, 0.2]);
          const R = rng.pick([1.5, 2.0, 2.5, 4.0, 5.0, 6.0, 8.0, 10]);
          const emf = (N * A * dB) / dt;
          const I = sig3(emf / R);
          const tol = tol3(I, 0.01);
          const traps = [];
          const emfRounded = sig3(emf);
          if (Math.abs(emfRounded - I) > tol * 3) {
            traps.push({
              spec: { type: "number" as const, value: emfRounded, tolerance: tol3(emfRounded, 0.02) },
              feedback: `That is the induced EMF in volts — divide by {{R = ${num(R)} Ω}} to get the induced current!`,
            });
          }
          if (reverse) {
            const halfI = sig3(I / 2);
            if (Math.abs(halfI - I) > tol * 3) {
              traps.push({
                spec: { type: "number" as const, value: halfI, tolerance: tol3(halfI, 0.01) },
                feedback: `Reversing from {{+${num(B1)} T}} to {{-${num(B1)} T}} gives {{|ΔB| = ${num(dB)} T}}, twice {{${num(B1)} T}}!`,
              });
            }
          }
          const fieldPhrase = reverse
            ? `reverses uniformly from {{+${num(B1)} T}} to {{-${num(B1)} T}}`
            : `increases uniformly from {{${num(B1)} T}} to {{${num(B2)} T}}`;
          return {
            prompt: `A {{${N}}}-turn closed coil of area {{${aCm2} cm^2}} and total resistance {{${num(R)} Ω}} sits perpendicular to a uniform magnetic field that ${fieldPhrase} in {{${num(dt)} s}}. Calculate the magnitude of the induced current in amperes (A) to 3 significant figures.`,
            answer: { type: "number", value: I, tolerance: tol, display: `${num(I)} A` },
            traps: traps.length ? traps : undefined,
            hint: "Convert {{cm^2}} to {{m^2}}, find {{|ε| = N A |ΔB| / Δt}}, then divide by {{R}}.",
            solution: [
              `{{A = ${aCm2} * 10^(-4) = ${num(A)} m^2}} and {{|ΔB| = ${num(dB)} T}}.`,
              `{{|ε| = ${N} * ${num(A)} * ${num(dB)} / ${num(dt)} = ${num(sig3(emf))} V}}.`,
              `{{I = ε / R = ${num(sig3(emf))} / ${num(R)} = ${num(I)} A}}.`,
            ],
          };
        }

        const B = rng.pick([0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0]);
        const L = rng.pick([0.25, 0.3, 0.4, 0.5, 0.6, 0.8, 1.0]);
        const v = rng.pick([2.0, 3.0, 4.0, 5.0, 6.0, 8.0, 10]);
        const R = rng.pick([0.5, 0.8, 1.0, 1.5, 2.0, 2.5, 4.0, 5.0]);
        const askPower = rng.bool(0.45);
        const emf = B * v * L;
        const Fb = (B * B * L * L * v) / R;
        const P = Fb * v;
        if (askPower) {
          const ans = sig3(P);
          const tol = tol3(ans, 0.01);
          const trapF = sig3(Fb);
          return {
            prompt: `A conducting rod of length {{${num(L)} m}} is pulled at constant speed {{${num(v)} m s^(-1)}} along frictionless rails connected across a {{${num(R)} Ω}} resistor in a perpendicular {{${num(B)} T}} magnetic field. Calculate the external mechanical power input in watts (W) to 3 significant figures.`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} W` },
            traps:
              Math.abs(trapF - ans) > tol * 3
                ? [
                    {
                      spec: { type: "number", value: trapF, tolerance: tol3(trapF, 0.005) },
                      feedback: "That is the pulling force {{F_B}} in newtons — multiply by {{v}} (or use {{ε^2 / R}}) for power!",
                    },
                  ]
                : undefined,
            hint: "Use energy balance: {{P_mech = P_elec = ε^2 / R = (B v L)^2 / R}}.",
            solution: [
              `{{ε = B v L = ${num(B)} * ${num(v)} * ${num(L)} = ${num(sig3(emf))} V}}.`,
              `{{P = ε^2 / R = (${num(sig3(emf))})^2 / ${num(R)} = ${num(ans)} W}}.`,
            ],
          };
        }
        const ans = sig3(Fb);
        const tol = tol3(ans, 0.005);
        const trapP = sig3(P);
        return {
          prompt: `A conducting rod of length {{${num(L)} m}} slides at {{${num(v)} m s^(-1)}} along smooth horizontal rails joined by a {{${num(R)} Ω}} resistor in a perpendicular {{${num(B)} T}} magnetic field. Calculate the magnetic braking force on the rod in newtons (N) to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} N` },
          traps:
            Math.abs(trapP - ans) > tol * 3
              ? [
                  {
                    spec: { type: "number", value: trapP, tolerance: tol3(trapP, 0.01) },
                    feedback: "That is the power {{P = Fv}} in watts — use {{F_B = B^2 L^2 v / R}} for force!",
                  },
                ]
              : undefined,
          hint: "Compute {{ε = BvL}}, {{I = ε / R}}, then {{F_B = B I L = B^2 L^2 v / R}}.",
          solution: [
            `{{ε = ${num(B)} * ${num(v)} * ${num(L)} = ${num(sig3(emf))} V}}, {{I = ${num(sig3(emf / R))} A}}.`,
            `{{F_B = B I L = (${num(B)}^2 * ${num(L)}^2 * ${num(v)}) / ${num(R)} = ${num(ans)} N}}.`,
          ],
        };
      }

      // Tier 3: Terminal speed on vertical rails, rotating rod, or total charge Q = N|ΔΦ|/R
      const pickMode = rng.int(0, 2);
      if (pickMode === 0) {
        const mG = rng.pick([20, 25, 30, 40, 50, 60, 75, 80, 100]);
        const m = clean(mG / 1000);
        const L = rng.pick([0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
        const B = rng.pick([0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0]);
        const R = rng.pick([0.25, 0.4, 0.5, 0.6, 0.8, 1.0, 1.2, 1.5]);
        const g = 9.81;
        const ans = sig3((m * g * R) / (B * B * L * L));
        const tol = tol3(ans, 0.02);
        return {
          prompt: `A metal rod of mass {{${mG} g}} and length {{${num(L)} m}} slides without friction down vertical conducting rails joined at the top by a {{${num(R)} Ω}} resistor in a perpendicular horizontal {{${num(B)} T}} field. Taking {{g = 9.81 m s^(-2)}}, calculate its terminal speed in {{m s^(-1)}} to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} m s^-1` },
          hint: "Equate upward magnetic braking force to weight: {{B^2 L^2 v_T / R = m g}}.",
          solution: [
            `Convert mass: {{m = ${num(m)} kg}}.`,
            `At terminal speed, {{(B^2 L^2 v_T) / R = m g ⇒ v_T = (m g R) / (B^2 L^2)}}.`,
            `{{v_T = (${num(m)} * 9.81 * ${num(R)}) / (${num(B)}^2 * ${num(L)}^2) = ${num(ans)} m s^(-1)}}.`,
          ],
        };
      }
      if (pickMode === 1) {
        const L = rng.pick([0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0]);
        const B = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
        const omega = rng.pick([6, 8, 10, 12, 15, 18, 20, 25, 30]);
        const ans = sig3(0.5 * B * omega * L * L);
        const tol = tol3(ans, 0.01);
        const trapDouble = sig3(B * omega * L * L);
        return {
          prompt: `A straight conducting rod of length {{${num(L)} m}} rotates in a flat plane about one fixed pivot end at {{ω = ${omega} rad s^(-1)}}, perpendicular to a uniform {{${num(B)} T}} magnetic field. Calculate the induced EMF between the pivot and outer tip in volts to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
          traps: [
            {
              spec: { type: "number", value: trapDouble, tolerance: tol3(trapDouble, 0.02) },
              feedback: "You used the tip speed {{ωL}} across the whole rod — average speed is {{1/2 ωL}}, giving {{ε = 1/2 B ω L^2}}!",
            },
          ],
          hint: "Average linear speed along the rod is {{v_avg = 1/2 ω L}}, so {{ε = 1/2 B ω L^2}}.",
          solution: [
            `Speed varies linearly from {{0}} at pivot to {{ωL}} at tip, so {{v_avg = 1/2 ωL}}.`,
            `{{ε = 1/2 B ω L^2 = 0.5 * ${num(B)} * ${omega} * (${num(L)})^2 = ${num(ans)} V}}.`,
          ],
        };
      }

      const N = rng.pick([100, 150, 200, 250, 300, 400, 500]);
      const aCm2 = rng.pick([20, 25, 40, 50, 60, 80, 100]);
      const A = clean(aCm2 * 1e-4);
      const B = rng.pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]);
      const dt = rng.pick([0.02, 0.05, 0.08, 0.12, 0.25]);
      const R = rng.pick([2.0, 2.5, 4.0, 5.0, 8.0, 10]);
      const ans = sig3((N * B * A) / R);
      const tol = tol3(ans, 0.004);
      return {
        prompt: `A {{${N}}}-turn closed coil of area {{${aCm2} cm^2}} and resistance {{${num(R)} Ω}} sits perpendicular to a uniform {{${num(B)} T}} field. The field drops to zero in {{${num(dt)} s}}. Calculate the total charge {{Q}} in coulombs (C) that circulates around the coil to 3 significant figures.`,
        answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} C` },
        hint: "Notice {{Q = I Δt = (N ΔΦ / (R Δt)) * Δt = N ΔΦ / R}} — the time {{Δt}} cancels completely!",
        solution: [
          `{{A = ${aCm2} * 10^(-4) = ${num(A)} m^2}}.`,
          `{{Q = N B A / R = (${N} * ${num(B)} * ${num(A)}) / ${num(R)} = ${num(ans)} C}} (independent of {{Δt = ${num(dt)} s}}).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: AC GENERATORS & SINUSOIDAL EMF (LEVEL 2, HL)
  // ===========================================================================
  {
    id: "d2-induction.ac-generator",
    topicId: "d2-induction",
    title: "AC Generators & Sinusoidal EMF",
    level: 2,
    ibLevel: "HL",
    guideRef: "ac-generators-sinusoidal",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.55)) {
          const N = rng.pick([40, 50, 60, 80, 100, 120, 150, 200, 250]);
          const B = rng.pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5]);
          const A = rng.pick([0.01, 0.015, 0.02, 0.025, 0.03, 0.04, 0.05]);
          const omega = rng.pick([10, 15, 20, 25, 30, 40, 50, 60]);
          const ans = sig3(N * B * A * omega);
          const tol = tol3(ans, 0.05);
          return {
            prompt: `A rotating AC generator coil has {{${N}}} turns and cross-sectional area {{${num(A)} m^2}}, spinning at angular speed {{ω = ${omega} rad s^(-1)}} in a uniform magnetic field of {{${num(B)} T}}. Calculate the peak induced EMF in volts to 3 significant figures.`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
            hint: "Use {{ε_0 = N B A ω}} directly (since {{ω}} is already in {{rad s^(-1)}}).",
            solution: [`{{ε_0 = N B A ω = ${N} * ${num(B)} * ${num(A)} * ${omega} = ${num(ans)} V}}.`],
          };
        }

        const f1 = rng.pick([10, 15, 20, 25, 30, 40, 50]);
        const mult = rng.pick([1.5, 2, 2.5, 3, 4]);
        const f2 = clean(f1 * mult);
        const e1 = rng.pick([6, 8, 10, 12, 14, 16, 18, 20, 24]);
        const ans = sig3(e1 * mult);
        const tol = tol3(ans, 0.05);
        return {
          prompt: `An AC generator produces a peak EMF of {{${e1} V}} when rotating at frequency {{${f1} Hz}}. If the rotation frequency is increased to {{${num(f2)} Hz}} (all else unchanged), calculate the new peak EMF in volts.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
          traps: [
            {
              spec: { type: "number", value: e1, tolerance: 0.05 },
              feedback: "Increasing {{f}} increases **both** output frequency AND peak EMF, because {{ε_0 = 2π f N B A ∝ f}}!",
            },
          ],
          hint: "Peak EMF is directly proportional to rotational frequency: {{ε_0 = 2π f N B A ∝ f}}.",
          solution: [
            `Frequency scales by {{${num(f2)} / ${f1} = ${num(mult)}}}.`,
            `Peak EMF scales by the same factor: {{ε_0' = ${e1} * ${num(mult)} = ${num(ans)} V}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          const N = rng.pick([50, 80, 100, 120, 150, 200, 250, 300]);
          const B = rng.pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5]);
          const aCm2 = rng.pick([80, 100, 120, 150, 160, 200, 250, 300]);
          const A = clean(aCm2 * 1e-4);
          const f = rng.pick([15, 20, 25, 30, 40, 50, 60]);
          const omega = 2 * Math.PI * f;
          const ans = sig3(N * B * A * omega);
          const tol = tol3(ans, 0.1);
          const trapNo2Pi = sig3(N * B * A * f);
          return {
            prompt: `A {{${N}}}-turn generator coil of area {{${aCm2} cm^2}} rotates at frequency {{${f} Hz}} inside a uniform magnetic field of {{${num(B)} T}}. Calculate the peak induced EMF in volts to 3 significant figures.`,
            answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
            traps: [
              {
                spec: { type: "number", value: trapNo2Pi, tolerance: tol3(trapNo2Pi, 0.05) },
                feedback: "Remember to convert frequency {{f}} (Hz) to angular speed {{ω = 2π f}}!",
              },
            ],
            hint: "Convert {{cm^2}} to {{m^2}} and use {{ε_0 = 2 pi f N B A}}.",
            solution: [
              `{{A = ${aCm2} * 10^(-4) = ${num(A)} m^2}} and {{ω = 2 pi (${f}) = ${num(sig3(omega))} rad s^(-1)}}.`,
              `{{ε_0 = ${N} * ${num(B)} * ${num(A)} * ${num(sig3(omega))} = ${num(ans)} V}}.`,
            ],
          };
        }

        const e0 = rng.pick([12, 15, 18, 20, 24, 30, 36, 40, 48, 60]);
        const tMs = rng.pick([10, 12.5, 16, 20, 25, 40, 50]);
        const T = clean(tMs / 1000);
        const omega = (2 * Math.PI) / T;
        const ansMwb = sig3((e0 / omega) * 1000);
        const tol = tol3(ansMwb, 0.1);
        return {
          prompt: `An oscilloscope trace of an AC generator shows a sinusoidal EMF of peak amplitude {{${e0} V}} and period {{${num(tMs)} ms}}. Calculate the maximum magnetic flux linkage {{NΦ_0}} of the coil in mWb to 3 significant figures.`,
          answer: { type: "number", value: ansMwb, tolerance: tol, display: `${num(ansMwb)} mWb` },
          hint: "Compute {{ω = 2π / T}} (with {{T}} in seconds), then rearrange {{ε_0 = (NΦ_0) ω}} for {{NΦ_0}}.",
          solution: [
            `{{T = ${num(T)} s}}, so {{ω = 2 pi / ${num(T)} = ${num(sig3(omega))} rad s^(-1)}}.`,
            `{{NΦ_0 = ε_0 / ω = ${e0} / ${num(sig3(omega))} = ${num(sig3(ansMwb / 1000))} Wb = ${num(ansMwb)} mWb}}.`,
          ],
        };
      }

      // Tier 3: Pythagorean flux-EMF relation OR average power dissipation P_avg = ε₀²/(2R)
      if (rng.bool(0.5)) {
        const e0 = rng.pick([20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150]);
        const pct = rng.pick([20, 28, 30, 40, 50, 60, 70, 80, 90, 96]);
        const fracPhi = pct / 100;
        const sinVal = Math.sqrt(1 - fracPhi * fracPhi);
        const ans = sig3(e0 * sinVal);
        const tol = tol3(ans, 0.1);
        const linearTrap = sig3(e0 * (1 - fracPhi));
        const traps =
          Math.abs(linearTrap - ans) > tol * 3
            ? [
                {
                  spec: { type: "number" as const, value: linearTrap, tolerance: tol3(linearTrap, 0.1) },
                  feedback: "Flux and EMF obey {{cos^2(ωt) + sin^2(ωt) = 1}}, NOT a linear subtraction {{1 - " + num(fracPhi) + "}}!",
                },
              ]
            : undefined;
        return {
          prompt: `A rotating AC generator coil has a peak induced EMF of {{${e0} V}}. At an instant when the magnetic flux linkage through the coil is {{${pct}%}} of its maximum value, calculate the magnitude of the instantaneous induced EMF in volts to 3 significant figures.`,
          answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} V` },
          traps,
          hint: "Set {{cos(ωt) = " + num(fracPhi) + "}}, find {{|sin(ωt)| = sqrt(1 - cos^2(ωt))}}, and multiply by {{ε_0}}.",
          solution: [
            `{{cos(ωt) = ${num(fracPhi)}}} ⇒ {{|sin(ωt)| = sqrt(1 - ${num(fracPhi)}^2) = ${num(roundTo(sinVal, 4))}}}.`,
            `{{|ε| = ε_0 |sin(ωt)| = ${e0} * ${num(roundTo(sinVal, 4))} = ${num(ans)} V}}.`,
          ],
        };
      }

      const N = rng.pick([100, 150, 200, 250, 300]);
      const B = rng.pick([0.15, 0.2, 0.25, 0.3, 0.4]);
      const A = rng.pick([0.01, 0.015, 0.02, 0.025, 0.03]);
      const f = rng.pick([25, 30, 40, 50, 60]);
      const R = rng.pick([10, 15, 20, 25, 40, 50]);
      const e0 = 2 * Math.PI * f * N * B * A;
      const pPeak = (e0 * e0) / R;
      const ans = sig3(0.5 * pPeak);
      const tol = tol3(ans, 0.1);
      const trapPeak = sig3(pPeak);
      return {
        prompt: `An ideal AC generator ({{N = ${N}}}, {{A = ${num(A)} m^2}}, {{B = ${num(B)} T}}) rotates at {{${f} Hz}} across a pure {{${R} Ω}} resistive load. Calculate the **average** electrical power dissipated in the resistor in watts (W) to 3 significant figures.`,
        answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)} W` },
        traps: [
          {
            spec: { type: "number", value: trapPeak, tolerance: tol3(trapPeak, 0.2) },
            feedback: "That is the **peak** power {{ε_0^2 / R}} — average power over a sinusoidal cycle is half of peak power: {{P_avg = ε_0^2 / (2R)}}!",
          },
        ],
        hint: "Find peak EMF {{ε_0 = 2π f N B A}}, then compute average power {{P_avg = ε_0^2 / (2R)}}.",
        solution: [
          `Peak EMF {{ε_0 = 2 pi (${f})(${N})(${num(B)})(${num(A)}) = ${num(sig3(e0))} V}}.`,
          `Average power {{P_avg = ε_0^2 / (2R) = (${num(sig3(e0))})^2 / (2 * ${R}) = ${num(ans)} W}}.`,
        ],
      };
    },
  },
];
