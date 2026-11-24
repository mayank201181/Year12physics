import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 QUESTIONS)
  // ===========================================================================
  quiz: [
    {
      id: "d2-induction-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "magnetic-flux-linkage",
      question:
        "A single flat circular loop of area {{0.030 m^2}} sits in a uniform magnetic field of {{0.60 T}}. The **normal** to the loop makes an angle of {{60°}} with the magnetic field. What is the magnetic flux through the loop?",
      options: ["9.0 mWb", "15.6 mWb", "18.0 mWb", "4.5 mWb"],
      answerIndex: 0,
      hints: [
        "Since the angle given is already between {{B}} and the **normal**, use {{theta = 60°}} directly in {{Φ = B A cos theta}}.",
      ],
      explanation:
        "{{Φ = B A cos 60° = 0.60 * 0.030 * 0.50 = 0.0090 Wb = 9.0 mWb}}. Using {{sin 60°}} gives {{15.6 mWb}}.",
    },
    {
      id: "d2-induction-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "magnetic-flux-linkage",
      question:
        "An 80-turn rectangular coil of dimensions {{0.10 m * 0.15 m}} lies with its plane perpendicular to a uniform magnetic field of {{0.25 T}}. Calculate the magnetic flux linkage in webers (Wb).",
      answer: { type: "number", value: 0.3, tolerance: 0.005, display: "0.30 Wb" },
      traps: [
        {
          spec: { type: "number", value: 0.00375, tolerance: 0.0002 },
          feedback: "That is the flux through a single turn — multiply by {{N = 80}} to get flux linkage!",
        },
      ],
      hints: [
        "Compute the area {{A = 0.10 * 0.15}} first, then multiply by {{N}} and {{B}}.",
      ],
      solution: [
        "Area {{A = 0.10 * 0.15 = 0.015 m^2}}.",
        "Plane perpendicular to {{B}} means {{theta = 0°}} ({{cos 0° = 1}}).",
        "{{NΦ = N B A = 80 * 0.25 * 0.015 = 0.30 Wb}}.",
      ],
    },
    {
      id: "d2-induction-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "faraday-lenz-laws",
      question:
        "The magnetic flux linkage through a stationary coil decreases uniformly from {{0.45 Wb}} to {{0.05 Wb}} in {{0.080 s}}. What is the magnitude of the induced EMF?",
      options: ["0.032 V", "5.0 V", "6.25 V", "0.50 V"],
      answerIndex: 1,
      hints: [
        "Apply Faraday's law directly using the change in flux linkage: {{|ε| = |Δ(NΦ)| / Δt}}.",
      ],
      explanation:
        "{{|Δ(NΦ)| = 0.45 - 0.05 = 0.40 Wb}}. Dividing by {{0.080 s}} gives {{|ε| = 0.40 / 0.080 = 5.0 V}}.",
    },
    {
      id: "d2-induction-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "faraday-lenz-laws",
      question:
        "A 600-turn coil of area {{3.0 * 10^(-3) m^2}} lies perpendicular to a uniform magnetic field whose flux density increases linearly from {{0.10 T}} to {{0.50 T}} in {{0.15 s}}. Calculate the magnitude of the induced EMF in volts.",
      answer: { type: "number", value: 4.8, tolerance: 0.05, display: "4.8 V" },
      traps: [
        {
          spec: { type: "number", value: 0.008, tolerance: 0.0005 },
          feedback: "You calculated EMF for one turn — multiply by {{N = 600}}!",
        },
        {
          spec: { type: "number", value: 6, tolerance: 0.05 },
          feedback: "Use the **change** {{ΔB = 0.50 - 0.10 = 0.40 T}}, not just the final value {{0.50 T}}.",
        },
      ],
      hints: [
        "Find {{ΔB = 0.50 - 0.10 = 0.40 T}}.",
        "Use {{|ε| = N A (ΔB / Δt)}}.",
      ],
      solution: [
        "{{ΔB = 0.50 - 0.10 = 0.40 T}}.",
        "{{|ε| = N A (ΔB / Δt) = 600 * 3.0 * 10^(-3) * (0.40 / 0.15) = 1.8 * 2.667 = 4.8 V}}.",
      ],
    },
    {
      id: "d2-induction-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "motional-emf",
      question:
        "A conducting rod of length {{0.80 m}} slides at {{2.5 m s^(-1)}} along smooth rails connected across a {{1.2 Ω}} resistor in a uniform perpendicular magnetic field of {{0.30 T}}. What is the induced current?",
      options: ["0.60 A", "0.72 A", "0.50 A", "2.0 A"],
      answerIndex: 2,
      hints: [
        "First calculate the motional EMF {{ε = B v L}}.",
        "Divide the EMF by circuit resistance {{R = 1.2 Ω}}.",
      ],
      explanation:
        "{{ε = 0.30 * 2.5 * 0.80 = 0.60 V}}, so {{I = ε / R = 0.60 / 1.2 = 0.50 A}}. Leaving the answer as {{0.60}} stops at the EMF rather than current.",
    },
    {
      id: "d2-induction-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "motional-emf",
      question:
        "A straight metal rod of length {{0.50 m}} slides at {{4.0 m s^(-1)}} along frictionless horizontal rails joined by a {{2.0 Ω}} resistor in a uniform vertical magnetic field of {{0.80 T}}. Calculate the magnitude of the magnetic braking force on the rod in newtons (N).",
      answer: { type: "number", value: 0.32, tolerance: 0.005, display: "0.32 N" },
      traps: [
        {
          spec: { type: "number", value: 1.28, tolerance: 0.02 },
          feedback: "That is the power {{P = Fv}} in watts — for force, use {{F_B = B^2 L^2 v / R}} (or {{BIL}}).",
        },
      ],
      hints: [
        "Find {{ε = BvL}} and {{I = ε / R}}, then compute {{F_B = B I L}}.",
        "Alternatively use {{F_B = B^2 L^2 v / R}} directly.",
      ],
      solution: [
        "{{ε = 0.80 * 4.0 * 0.50 = 1.6 V}}, so {{I = 1.6 / 2.0 = 0.80 A}}.",
        "{{F_B = B I L = 0.80 * 0.80 * 0.50 = 0.32 N}}.",
      ],
    },
    {
      id: "d2-induction-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "ac-generators-sinusoidal",
      question:
        "An AC generator spinning at {{25 Hz}} produces a peak EMF of {{12 V}}. If the rotation rate is increased to {{75 Hz}}, what are the new peak EMF and output frequency?",
      options: ["12 V and 75 Hz", "36 V and 25 Hz", "108 V and 75 Hz", "36 V and 75 Hz"],
      answerIndex: 3,
      hints: [
        "By what factor has the rotational frequency increased ({{75 / 25}})?",
        "Since {{ε_0 = 2π f N B A}}, peak EMF scales directly with {{f}}.",
      ],
      explanation:
        "Tripling the rotation rate from {{25 Hz}} to {{75 Hz}} triples both the output frequency (to **75 Hz**) and the peak EMF (to {{3 * 12 = 36 V}}).",
    },
    {
      id: "d2-induction-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "ac-generators-sinusoidal",
      question:
        "A generator coil of {{150}} turns and cross-sectional area {{0.020 m^2}} rotates at angular speed {{ω = 30 rad s^(-1)}} in a uniform magnetic field of {{0.40 T}}. Calculate the peak induced EMF in volts.",
      answer: { type: "number", value: 36, tolerance: 0.5, display: "36 V" },
      hints: [
        "Use {{ε_0 = N B A ω}}.",
        "{{ω}} is already in {{rad s^(-1)}}, so multiply the four numbers directly.",
      ],
      solution: ["{{ε_0 = N B A ω = 150 * 0.40 * 0.020 * 30 = 36 V}}."],
    },
    {
      id: "d2-induction-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "faraday-lenz-laws",
      marks: 2,
      question:
        "Explain why pushing a bar magnet quickly into a closed conducting coil requires a larger external force than pushing the same magnet slowly.",
      hints: [
        "Link faster speed to the rate of change of magnetic flux linkage (Faraday's law).",
        "Link the larger induced current to the opposing magnetic force (Lenz's law).",
      ],
      modelAnswer:
        "Moving faster increases the rate of change of flux linkage, inducing a larger EMF and greater current by Faraday's law. This larger current produces a stronger opposing magnetic field (Lenz's law), exerting a greater repulsive force that must be overcome.",
      markScheme: [
        {
          point: "Faster motion gives greater rate of change of flux linkage, inducing larger EMF and current (Faraday's law).",
          keywords: ["rate of change", "larger emf", "greater current", "faraday"],
        },
        {
          point: "Larger induced current produces a stronger opposing magnetic field/repulsive force (Lenz's law).",
          keywords: ["opposing", "repulsive", "stronger magnetic field", "lenz"],
        },
      ],
    },
    {
      id: "d2-induction-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "ac-generators-sinusoidal",
      marks: 2,
      question:
        "Explain why the induced EMF of a rotating AC generator coil is instantaneously zero at the moment when the magnetic flux through the coil is maximum.",
      hints: [
        "What does Faraday's law equate induced EMF to — the value of flux, or its gradient/rate of change?",
        "Examine the tangent slope of {{NΦ(t) = NBA cos(ωt)}} at its peak.",
      ],
      modelAnswer:
        "By Faraday's law, induced EMF equals the negative rate of change (gradient) of flux linkage, not the flux value itself. At maximum flux (coil plane perpendicular to B), the cosine curve reaches a stationary turning point where the gradient dΦ/dt is momentarily zero, so EMF vanishes.",
      markScheme: [
        {
          point: "Induced EMF is proportional to the rate of change (gradient/derivative) of flux linkage, not flux magnitude.",
          keywords: ["rate of change", "gradient", "derivative"],
        },
        {
          point: "At maximum flux the flux–time curve has a stationary turning point where gradient dΦ/dt = 0 (sides move parallel to B).",
          keywords: ["turning point", "parallel", "dφ/dt", "stationary", "slope is zero"],
        },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (2 PAPERS × 15 QUESTIONS)
  // ===========================================================================
  papers: [
    {
      id: "d2-induction-p1",
      title: "Paper 2 · Flux, Faraday, Lenz & Motional EMF",
      level: "HL",
      questions: [
        {
          id: "d2-induction-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "magnetic-flux-linkage",
          question:
            "A circular coil of {{100}} turns and radius {{6.0 cm}} lies with its plane perpendicular to a uniform magnetic field of {{0.25 T}}. Calculate the magnetic flux linkage in Wb to 3 significant figures.",
          answer: { type: "number", value: 0.283, tolerance: 0.004, display: "0.283 Wb" },
          traps: [
            {
              spec: { type: "number", value: 0.00283, tolerance: 0.0001 },
              feedback: "Remember to multiply by {{N = 100}} turns for flux linkage!",
            },
          ],
          hints: [
            "Convert radius {{6.0 cm = 0.060 m}} and find area {{A = pi r^2}}.",
            "Compute {{NΦ = N B A}} since {{theta = 0°}}.",
          ],
          solution: [
            "{{A = pi * (0.060)^2 = 1.131 * 10^(-2) m^2}}.",
            "{{NΦ = 100 * 0.25 * 1.131 * 10^(-2) = 0.2827 ≈ 0.283 Wb}}.",
          ],
        },
        {
          id: "d2-induction-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "magnetic-flux-linkage",
          question:
            "A 250-turn rectangular coil measuring {{8.0 cm * 12.0 cm}} sits in a uniform magnetic field of {{0.50 T}}. The **plane of the coil** makes an angle of {{30°}} with the magnetic field lines. Calculate the magnetic flux linkage in Wb.",
          answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60 Wb" },
          traps: [
            {
              spec: { type: "number", value: 1.04, tolerance: 0.02 },
              feedback: "You used {{cos 30°}}! Since {{30°}} is between the **plane** and {{B}}, the normal angle is {{theta = 90° - 30° = 60°}}.",
            },
            {
              spec: { type: "number", value: 1.2, tolerance: 0.02 },
              feedback: "Include the orientation factor {{cos 60° = 0.50}}.",
            },
          ],
          hints: [
            "Convert both dimensions to metres: {{0.080 m * 0.120 m}}.",
            "Find the angle to the **normal**: {{theta = 90° - 30° = 60°}}.",
          ],
          solution: [
            "{{A = 0.080 * 0.120 = 9.6 * 10^(-3) m^2}}.",
            "Normal angle {{theta = 90° - 30° = 60°}}, so {{cos 60° = 0.50}}.",
            "{{NΦ = 250 * 0.50 * 9.6 * 10^(-3) * 0.50 = 0.60 Wb}}.",
          ],
        },
        {
          id: "d2-induction-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "magnetic-flux-linkage",
          marks: 3,
          question:
            "Distinguish between magnetic flux and magnetic flux linkage, and explain why rotating a coil through {{180°}} from {{theta = 0°}} in a uniform field gives a flux-linkage change of {{2NBA}} rather than zero.",
          hints: [
            "Define single-turn flux {{Φ = BA cos theta}} versus {{N}}-turn flux linkage {{NΦ}}.",
            "Think of the sign of {{cos 0°}} versus {{cos 180°}}.",
          ],
          modelAnswer:
            "Magnetic flux Φ = BA cos θ measures field threading a single loop area, whereas flux linkage multiplies that single-loop flux by the turn count N (NΦ = NBA cos θ). Because flux is signed relative to the area normal, rotating from 0° (+NBA) to 180° (−NBA) reverses the normal direction, yielding Δ(NΦ) = −NBA − NBA = −2NBA of magnitude 2NBA.",
          markScheme: [
            {
              point: "Magnetic flux is BA cos θ for one loop/surface, while flux linkage is N times the flux (NΦ = NBA cos θ) for an N-turn coil.",
              keywords: ["single loop", "turn count", "multiplies", "n turns"],
            },
            {
              point: "Flux is a signed scalar relative to the normal vector, changing from +NBA at 0° to −NBA at 180°.",
              keywords: ["signed", "reverses", "−nba", "-nba", "normal direction"],
            },
            {
              point: "Subtracting initial from final gives magnitude |−NBA − NBA| = 2NBA.",
              keywords: ["2nba", "double", "subtracting"],
            },
          ],
        },
        {
          id: "d2-induction-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "faraday-lenz-laws",
          question:
            "A 400-turn search coil of area {{2.5 * 10^(-3) m^2}} initially perpendicular to a uniform {{0.60 T}} magnetic field is pulled completely out into a field-free region in {{0.050 s}}. Calculate the magnitude of the average induced EMF in volts.",
          answer: { type: "number", value: 12, tolerance: 0.15, display: "12 V" },
          traps: [
            {
              spec: { type: "number", value: 0.03, tolerance: 0.002 },
              feedback: "Don't forget to multiply by {{N = 400}} turns!",
            },
          ],
          hints: [
            "Initial flux per turn is {{BA}}, final flux is {{0}}.",
            "Apply {{|ε| = N |ΔΦ| / Δt}}.",
          ],
          solution: [
            "{{|ΔΦ| = B A = 0.60 * 2.5 * 10^(-3) = 1.5 * 10^(-3) Wb}}.",
            "{{|ε| = 400 * 1.5 * 10^(-3) / 0.050 = 0.60 / 0.050 = 12 V}}.",
          ],
        },
        {
          id: "d2-induction-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "faraday-lenz-laws",
          question:
            "A 500-turn closed coil of area {{4.0 * 10^(-3) m^2}} and total resistance {{8.0 Ω}} sits perpendicular to a uniform magnetic field that reverses linearly from {{+0.30 T}} to {{-0.30 T}} in {{0.10 s}}. Calculate the induced current in amperes (A).",
          answer: { type: "number", value: 1.5, tolerance: 0.02, display: "1.5 A" },
          traps: [
            {
              spec: { type: "number", value: 0.75, tolerance: 0.02 },
              feedback: "Reversing from {{+0.30 T}} to {{-0.30 T}} gives {{|ΔB| = 0.60 T}}, not {{0.30 T}}!",
            },
            {
              spec: { type: "number", value: 12, tolerance: 0.15 },
              feedback: "That is the induced EMF in volts — divide by resistance {{8.0 Ω}} to get current.",
            },
          ],
          hints: [
            "Compute {{|ΔB| = |-0.30 - 0.30| = 0.60 T}}.",
            "Find {{|ε| = N A |ΔB| / Δt}}, then divide by {{R = 8.0 Ω}}.",
          ],
          solution: [
            "{{|ΔB| = 0.60 T}}.",
            "{{|ε| = 500 * 4.0 * 10^(-3) * 0.60 / 0.10 = 12 V}}.",
            "{{I = ε / R = 12 / 8.0 = 1.5 A}}.",
          ],
        },
        {
          id: "d2-induction-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "faraday-lenz-laws",
          marks: 4,
          question:
            "Explain why Lenz's law is a necessary consequence of the law of conservation of energy, illustrating your argument by pushing the North pole of a bar magnet towards a closed conducting coil.",
          hints: [
            "First state Lenz's law accurately (opposes the **change** in flux).",
            "Trace the contradiction if the induced pole instead *attracted* the approaching magnet.",
            "Conclude by linking mechanical work done against repulsion to Joule heating {{I^2 R t}}.",
          ],
          modelAnswer:
            "Lenz's law states that any induced current creates a magnetic field opposing the flux change causing it. Pushing a North pole toward a closed loop therefore induces a North polarity on the near face, repelling the magnet. If instead a South polarity appeared, the resulting attraction would accelerate the magnet faster, increasing flux-change rate, current, kinetic energy, and resistive heating indefinitely without external work — violating energy conservation. Consequently, the external agent must do positive mechanical work against the repulsive force, converting work into electrical/thermal energy.",
          markScheme: [
            {
              point: "Correct statement that induced current opposes the flux change, creating a repelling North pole on the near coil face.",
              keywords: ["opposing", "repelling", "north polarity", "flux change"],
            },
            {
              point: "Hypothetical opposite (induced South pole) would attract and accelerate the magnet spontaneously.",
              keywords: ["south", "attract", "accelerate"],
            },
            {
              point: "Runaway gain in both kinetic energy and electrical/thermal energy with zero work input violates energy conservation.",
              keywords: ["kinetic energy", "without external work", "violating", "indefinitely"],
            },
            {
              point: "Mechanical work done pushing against repulsion converts into electrical/thermal energy in the circuit.",
              keywords: ["mechanical work", "thermal energy", "electrical"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics or only restates the question.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States Lenz's law or identifies repulsion of the approaching pole without developing the energy-conservation proof.",
              indicators: ["Mentions opposing pole or mechanical work but omits the runaway-energy contradiction."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Complete, rigorous proof by contradiction linking opposing polarity, runaway kinetic + electrical energy impossibility, and mechanical-to-electrical work conversion.",
              indicators: ["Explicitly analyses the opposite-polarity hypothesis and equates external mechanical work to dissipated electrical energy."],
            },
          ],
        },
        {
          id: "d2-induction-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "faraday-lenz-laws",
          question:
            "A 150-turn coil enters a uniform magnetic field, producing a constant rectangular EMF pulse of {{4.5 V}} lasting {{0.020 s}}. Determine the change in magnetic flux through a **single turn**, in mWb.",
          answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60 mWb" },
          traps: [
            {
              spec: { type: "number", value: 90, tolerance: 1 },
              feedback: "That is the change in flux **linkage** {{NΔΦ}} in mWb — divide by {{N = 150}} for a single turn!",
            },
          ],
          hints: [
            "Area under the {{ε}}–{{t}} pulse equals {{|Δ(NΦ)| = ε Δt}}.",
            "Divide by {{N = 150}} and convert Wb to mWb ({{1 Wb = 1000 mWb}}).",
          ],
          solution: [
            "Area under pulse = {{|Δ(NΦ)| = 4.5 * 0.020 = 0.090 Wb}}.",
            "Single-turn flux change: {{|ΔΦ| = 0.090 / 150 = 6.0 * 10^(-4) Wb = 0.60 mWb}}.",
          ],
        },
        {
          id: "d2-induction-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "faraday-lenz-laws",
          marks: 5,
          question:
            "A bar magnet is released from rest directly above a long vertical solenoid connected to a voltage data-logger and falls completely through it. Describe and explain the key features of the resulting induced EMF versus time graph.",
          hints: [
            "Break the fall into three stages: entering, fully inside, and exiting.",
            "Account for polarity reversal, why the second peak is larger and narrower, and how the areas of the two pulses compare.",
          ],
          modelAnswer:
            "The trace displays two pulses separated by a zero-EMF plateau while the magnet travels entirely inside the long solenoid where flux is constant (ΔΦ/Δt = 0). The entry and exit pulses have opposite polarities because flux increases on entry and decreases on exit (Lenz's law). Because gravity accelerates the magnet continuously downward, its exit speed exceeds its entry speed, giving a greater rate of flux change: hence the second pulse has a taller peak amplitude and a narrower time duration. Finally, both pulses enclose equal areas because the magnitude of total flux-linkage change equals NΦ_max during both entry (0 to NΦ_max) and exit (NΦ_max back to 0).",
          markScheme: [
            {
              point: "Two pulses separated by zero EMF while magnet is completely inside (constant flux, ΔΦ/Δt = 0).",
              keywords: ["two pulses", "zero-emf", "plateau", "constant"],
            },
            {
              point: "Entry and exit pulses have opposite polarities (flux increases on entry, decreases on exit).",
              keywords: ["opposite polarit", "increases", "decreases"],
            },
            {
              point: "Gravity accelerates the magnet so exit speed is greater than entry speed.",
              keywords: ["gravity", "accelerates", "exit speed"],
            },
            {
              point: "Greater exit speed yields larger rate of flux change → taller peak and narrower duration for second pulse.",
              keywords: ["taller", "narrower", "shorter"],
            },
            {
              point: "Enclosed areas of both pulses are equal because total flux-linkage change magnitude is NΦ_max for both entry and exit.",
              keywords: ["equal area", "nφ_max", "same area"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid features of the EMF–time graph identified.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies two opposite pulses or notes acceleration without linking to peak height, width, and enclosed area.",
              indicators: ["Describes shape superficially without connecting area to flux linkage."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains polarity reversal, taller/narrower second pulse via gravitational acceleration, and zero middle region, with minor omission on equal areas.",
              indicators: ["Connects faster exit speed to Faraday's law rate of change."],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, quantitatively grounded analysis covering all five features including equal enclosed areas representing NΦ_max.",
              indicators: ["Explicitly justifies equal areas via ∫|ε|dt = NΦ_max alongside polarity, plateau, height, and width."],
            },
          ],
        },
        {
          id: "d2-induction-p1-q09",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "motional-emf",
          question:
            "A steel train axle of length {{1.50 m}} travels horizontally at {{80 m s^(-1)}} through a region where the vertical component of Earth's magnetic field is {{4.0 * 10^(-5) T}}. Calculate the induced EMF between its wheels in millivolts (mV).",
          answer: { type: "number", value: 4.8, tolerance: 0.05, display: "4.8 mV" },
          hints: [
            "Use {{ε = B v L}} to find volts, then multiply by {{1000}} to convert to millivolts.",
          ],
          solution: [
            "{{ε = 4.0 * 10^(-5) * 80 * 1.50 = 4.8 * 10^(-3) V = 4.8 mV}}.",
          ],
        },
        {
          id: "d2-induction-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Derive",
          guideRef: "motional-emf",
          marks: 3,
          question:
            "Derive the equation {{ε = BvL}} for an isolated straight conducting rod of length {{L}} moving at speed {{v}} perpendicular to a uniform magnetic field {{B}}, by analysing forces on conduction electrons inside the rod.",
          hints: [
            "State the magnetic Lorentz force on each free electron of charge {{e}}.",
            "Explain the buildup of an internal electric field {{E = ε / L}} and set electric force equal to magnetic force in equilibrium.",
          ],
          modelAnswer:
            "Each free electron of charge e moving with the conductor experiences a magnetic Lorentz force F_B = evB along the rod's axis, driving negative charge toward one end and leaving positive charge at the other. This charge separation establishes an internal uniform electric field E = ε/L exerting an opposing electrostatic force F_E = eE. Equilibrium is reached when eE = evB, giving E = vB and hence potential difference ε = EL = BvL.",
          markScheme: [
            {
              point: "Conduction electrons experience magnetic Lorentz force F_B = evB (or qvB) along the rod, causing charge separation.",
              keywords: ["lorentz", "evb", "qvb", "charge separation"],
            },
            {
              point: "Charge separation creates an internal uniform electric field E = ε/L exerting opposing electrostatic force eE (or qE).",
              keywords: ["electric field", "electrostatic", "opposing", "ee"],
            },
            {
              point: "Setting eE = evB gives E = vB, so potential difference ε = EL = BvL.",
              keywords: ["equilibrium", "e = vb", "el = bvl", "potential difference"],
            },
          ],
        },
        {
          id: "d2-induction-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "motional-emf",
          question:
            "A straight metal rod of length {{0.45 m}} slides at {{6.0 m s^(-1)}} along smooth horizontal rails joined by a {{2.7 Ω}} resistor in a perpendicular uniform magnetic field of {{0.50 T}}. Calculate the induced current in amperes (A).",
          answer: { type: "number", value: 0.5, tolerance: 0.01, display: "0.50 A" },
          traps: [
            {
              spec: { type: "number", value: 1.35, tolerance: 0.02 },
              feedback: "That is the induced EMF in volts — divide by {{2.7 Ω}} to find the current!",
            },
          ],
          hints: [
            "Compute {{ε = B v L}} first.",
            "Apply {{I = ε / R}}.",
          ],
          solution: [
            "{{ε = 0.50 * 6.0 * 0.45 = 1.35 V}}.",
            "{{I = 1.35 / 2.7 = 0.50 A}}.",
          ],
        },
        {
          id: "d2-induction-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "motional-emf",
          question:
            "A conducting rod of length {{0.50 m}} slides at constant speed {{5.0 m s^(-1)}} on frictionless rails connected across a {{4.0 Ω}} resistor in a uniform perpendicular magnetic field of {{0.80 T}}. Calculate the external mechanical power input in watts (W).",
          answer: { type: "number", value: 1, tolerance: 0.02, display: "1.0 W" },
          traps: [
            {
              spec: { type: "number", value: 0.2, tolerance: 0.005 },
              feedback: "That is the pulling force {{F}} in newtons — multiply by speed {{v = 5.0 m s^(-1)}} for power!",
            },
          ],
          hints: [
            "By conservation of energy, mechanical power equals electrical power dissipated: {{P = ε^2 / R}}.",
            "Find {{ε = BvL = 2.0 V}}, then compute {{P = ε^2 / R}} (or {{P = F_B v}}).",
          ],
          solution: [
            "{{ε = 0.80 * 5.0 * 0.50 = 2.0 V}}.",
            "{{P_mech = P_elec = ε^2 / R = (2.0)^2 / 4.0 = 1.0 W}}.",
          ],
        },
        {
          id: "d2-induction-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "motional-emf",
          question:
            "A conducting rod of mass {{0.050 kg}} and length {{0.40 m}} slides without friction down vertical rails connected at the top by a {{0.80 Ω}} resistor, inside a uniform horizontal field {{B = 0.50 T}} perpendicular to the rails. Taking {{g = 9.8 m s^(-2)}}, calculate its terminal velocity in {{m s^(-1)}}.",
          answer: { type: "number", value: 9.8, tolerance: 0.1, display: "9.8 m s^-1" },
          hints: [
            "At terminal velocity, upward magnetic braking force balances weight: {{(B^2 L^2 v_T) / R = m g}}.",
            "Solve {{v_T = (m g R) / (B^2 L^2)}}.",
          ],
          solution: [
            "Equate {{F_B = m g ⇒ (B^2 L^2 v_T) / R = m g}}.",
            "{{v_T = (0.050 * 9.8 * 0.80) / (0.50^2 * 0.40^2) = 0.392 / 0.040 = 9.8 m s^(-1)}}.",
          ],
        },
        {
          id: "d2-induction-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "motional-emf",
          marks: 3,
          question:
            "A closed square copper frame moves at constant horizontal speed through a wide uniform vertical magnetic field. Explain why no current flows while the entire frame is inside the field, yet opposite currents flow while entering and leaving.",
          hints: [
            "Use both Faraday's law ({{ΔΦ/Δt}}) and opposite-edge motional EMFs.",
            "Link the direction reversal between entry and exit to Lenz's law.",
          ],
          modelAnswer:
            "While wholly inside the uniform field, total enclosed flux remains constant (ΔΦ/Δt = 0) — equivalently, equal motional EMFs BvL across the leading and trailing edges oppose each other around the circuit — giving zero net EMF and zero current. While entering, enclosed flux increases, inducing a current whose magnetic field opposes that increase (Lenz's law). While exiting, enclosed flux decreases, so the induced current reverses direction to oppose the reduction in flux.",
          markScheme: [
            {
              point: "Fully inside: enclosed flux is constant (ΔΦ/Δt = 0) / leading and trailing edge EMFs cancel, so net EMF and current are zero.",
              keywords: ["constant", "cancel", "zero net emf", "oppose each other"],
            },
            {
              point: "Entering: flux increases, inducing current in one direction to oppose the increase.",
              keywords: ["increases", "opposes that increase", "oppose the increase"],
            },
            {
              point: "Exiting: flux decreases, so current reverses direction to oppose the reduction in flux (Lenz's law).",
              keywords: ["decreases", "reverses", "lenz"],
            },
          ],
        },
        {
          id: "d2-induction-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "motional-emf",
          marks: 4,
          question:
            "High-speed trains often use non-contact eddy-current brakes in which copper fins pass between strong electromagnets. Explain how these brakes decelerate the train, why a separate mechanical brake is still needed to hold the train stationary, and what happens to the train's kinetic energy.",
          hints: [
            "Trace changing flux → circulating eddy currents → opposing magnetic force (Lenz's law).",
            "Remember {{F_B ∝ v}} — what happens to the braking force when {{v → 0}}?",
          ],
          modelAnswer:
            "As the conducting fin enters and moves through the electromagnet's field, changing magnetic flux induces circulating eddy currents in the copper (Faraday's law). By Lenz's law, the magnetic field of these currents interacts with the electromagnet to exert a braking force opposing motion. Because induced EMF, current, and braking force are all proportional to speed (F ∝ v), the magnetic braking force falls smoothly to zero as the train stops, so friction pads are required to lock the wheels stationary. Throughout deceleration, the train's translational kinetic energy converts via Joule heating (I²R) into thermal energy inside the copper fins.",
          markScheme: [
            {
              point: "Changing magnetic flux in the moving conductor induces circulating eddy currents (Faraday's law).",
              keywords: ["eddy currents", "changing magnetic flux", "faraday"],
            },
            {
              point: "Eddy currents experience/produce a magnetic braking force opposing motion (Lenz's law).",
              keywords: ["lenz", "opposing motion", "braking force"],
            },
            {
              point: "Braking force is proportional to velocity (F ∝ v) and vanishes at v = 0, so mechanical/friction brakes are needed to hold stationary.",
              keywords: ["proportional to speed", "falls smoothly to zero", "v = 0", "friction"],
            },
            {
              point: "Kinetic energy of the train dissipates as thermal energy (Joule heating I²R) in the copper fins.",
              keywords: ["thermal energy", "joule heating", "i²r", "dissipate"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics of electromagnetic braking.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies eddy currents and opposing braking force without explaining the v = 0 limitation or energy dissipation.",
              indicators: ["Mentions Lenz's law qualitatively but omits F ∝ v and Joule heating."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Thorough explanation combining Faraday's law, Lenz's law, velocity dependence F ∝ v requiring friction lock at rest, and kinetic-to-thermal energy transfer.",
              indicators: ["Clearly distinguishes zero braking at rest from active motion braking and identifies I²R heating."],
            },
          ],
        },
      ],
    },

    // =========================================================================
    // PAPER 2: AC GENERATORS & INTEGRATED D.4 HL
    // =========================================================================
    {
      id: "d2-induction-p2",
      title: "Paper 2 · AC Generators & Integrated D.4 HL",
      level: "HL",
      questions: [
        {
          id: "d2-induction-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ac-generators-sinusoidal",
          question:
            "A 120-turn generator coil of area {{0.025 m^2}} spins at angular speed {{ω = 40 rad s^(-1)}} inside a uniform magnetic field of {{0.30 T}}. Calculate the peak induced EMF in volts.",
          answer: { type: "number", value: 36, tolerance: 0.5, display: "36 V" },
          hints: ["Substitute directly into {{ε_0 = N B A ω}}."],
          solution: ["{{ε_0 = 120 * 0.30 * 0.025 * 40 = 36 V}}."],
        },
        {
          id: "d2-induction-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ac-generators-sinusoidal",
          question:
            "A 250-turn coil of area {{0.016 m^2}} rotates at frequency {{50 Hz}} inside a uniform magnetic field of {{0.15 T}}. Calculate the peak induced EMF in volts to 3 significant figures.",
          answer: { type: "number", value: 188, tolerance: 1.5, display: "188 V" },
          traps: [
            {
              spec: { type: "number", value: 30, tolerance: 0.5 },
              feedback: "Remember to convert frequency {{f}} to angular speed {{ω = 2π f}}!",
            },
          ],
          hints: [
            "Convert {{f = 50 Hz}} to {{ω = 2π f = 100π rad s^(-1)}}.",
            "Compute {{ε_0 = N B A ω}}.",
          ],
          solution: [
            "{{ω = 2 pi (50) = 100 pi ≈ 314.2 rad s^(-1)}}.",
            "{{ε_0 = 250 * 0.15 * 0.016 * 100 pi = 60 pi ≈ 188 V}} (3 s.f.).",
          ],
        },
        {
          id: "d2-induction-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "ac-generators-sinusoidal",
          question:
            "An oscilloscope connected to an AC generator displays a sinusoidal EMF of peak amplitude {{24.0 V}} and period {{0.020 s}}. Determine the maximum magnetic flux linkage {{NΦ_0}} of the coil in mWb to 3 significant figures.",
          answer: { type: "number", value: 76.4, tolerance: 0.8, display: "76.4 mWb" },
          hints: [
            "Find angular speed {{ω = 2π / T}}.",
            "Rearrange {{ε_0 = (NΦ_0) ω}} for {{NΦ_0}}, then convert Wb to mWb.",
          ],
          solution: [
            "{{ω = 2 pi / 0.020 = 100 pi ≈ 314.16 rad s^(-1)}}.",
            "{{NΦ_0 = ε_0 / ω = 24.0 / (100 pi) = 0.07639 Wb = 76.4 mWb}}.",
          ],
        },
        {
          id: "d2-induction-p2-q04",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Derive",
          guideRef: "ac-generators-sinusoidal",
          marks: 3,
          question:
            "Starting from {{NΦ(t) = NBA cos(ωt)}}, derive the expression for induced EMF {{ε(t)}} of an AC generator and explain the resulting phase relationship between flux linkage and EMF.",
          hints: [
            "Apply Faraday's law in differential form: {{ε(t) = -d(NΦ)/dt}}.",
            "Differentiate {{cos(ωt)}} using the chain rule and compare the sine and cosine waveforms.",
          ],
          modelAnswer:
            "Applying Faraday's law in derivative form gives ε(t) = −d(NΦ)/dt = −d/dt[NBA cos(ωt)]. Differentiating by the chain rule pulls out −ω sin(ωt), so the double negative cancels to yield ε(t) = NBAω sin(ωt). Because a sine wave is displaced by a quarter cycle (90° or π/2 rad) from a cosine wave, induced EMF reaches maximum amplitude precisely when flux linkage crosses zero, and vanishes whenever flux linkage reaches ±NBA.",
          markScheme: [
            {
              point: "Applies Faraday's law ε = −d(NΦ)/dt to NBA cos(ωt).",
              keywords: ["-d(nφ)/dt", "derivative", "faraday"],
            },
            {
              point: "Correct chain-rule differentiation yielding ε(t) = NBAω sin(ωt) with sign cancellation.",
              keywords: ["chain rule", "nbaω sin(ωt)", "nbaw sin(wt)", "sin(ωt)"],
            },
            {
              point: "Identifies 90° (π/2 rad / quarter-cycle) phase shift: peak EMF occurs at zero flux and zero EMF at maximum flux.",
              keywords: ["90°", "π/2", "quarter cycle", "crosses zero"],
            },
          ],
        },
        {
          id: "d2-induction-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ac-generators-sinusoidal",
          question:
            "The magnetic flux linkage of a rotating coil varies as {{NΦ(t) = 0.050 cos(80 pi t)}} (in Wb, with {{t}} in seconds). Calculate the peak induced EMF in volts to 3 significant figures.",
          answer: { type: "number", value: 12.6, tolerance: 0.15, display: "12.6 V" },
          traps: [
            {
              spec: { type: "number", value: 4, tolerance: 0.05 },
              feedback: "Remember {{ω = 80π}}, not {{80}} — include the factor of {{π}}!",
            },
          ],
          hints: [
            "Read {{NΦ_0 = 0.050 Wb}} and {{ω = 80π rad s^(-1)}}.",
            "Multiply {{ε_0 = NΦ_0 ω}}.",
          ],
          solution: [
            "{{NΦ_0 = 0.050 Wb}} and {{ω = 80 pi rad s^(-1)}}.",
            "{{ε_0 = 0.050 * 80 pi = 4.0 pi ≈ 12.6 V}} (3 s.f.).",
          ],
        },
        {
          id: "d2-induction-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "ac-generators-sinusoidal",
          marks: 4,
          question:
            "An AC generator produces a sinusoidal EMF of amplitude {{ε_0}} and period {{T}}. Explain how the EMF–time graph changes when (a) the rotational frequency is doubled, and (b) instead, only the magnetic field strength {{B}} is doubled at the original frequency.",
          hints: [
            "Compare both amplitude {{ε_0 = 2π f N B A}} and period {{T = 1/f}} in each case.",
            "In part (a), **two** graph features change simultaneously; in part (b), only **one** changes.",
          ],
          modelAnswer:
            "When rotational frequency doubles to 2f, the coil completes each cycle in half the time so the period halves to T/2 (twice as many waves appear per second). Simultaneously, the same maximum flux change occurs twice as rapidly, so by Faraday's law (ε₀ = 2πfNBA) the peak amplitude doubles to 2ε₀. By contrast, doubling only B at the original spin rate leaves period T and frequency unchanged while doubling peak flux linkage and therefore doubling peak amplitude to 2ε₀.",
          markScheme: [
            {
              point: "Doubling frequency halves the period to T/2 (doubles wave frequency on horizontal axis).",
              keywords: ["t/2", "period halves", "half the time", "twice as many waves"],
            },
            {
              point: "Doubling frequency also doubles peak EMF to 2ε₀ because rate of flux change doubles (ε₀ = 2πfNBA).",
              keywords: ["2ε₀", "2e0", "peak amplitude doubles", "twice as rapidly"],
            },
            {
              point: "Doubling only B doubles peak EMF to 2ε₀ (since flux linkage doubles).",
              keywords: ["peak flux linkage", "doubling peak amplitude"],
            },
            {
              point: "Doubling only B leaves period T and output frequency completely unchanged.",
              keywords: ["unchanged", "original spin rate"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No correct graph transformations identified.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies one change per scenario (e.g. misses peak EMF doubling when f doubles).",
              indicators: ["Commonly treats doubling f as affecting only the time axis."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately contrasts both amplitude and period changes for both modifications with Faraday's law justification.",
              indicators: ["Explicitly links ε₀ = 2πfNBA to simultaneous 2ε₀ and T/2 scaling, contrasted against amplitude-only scaling for 2B."],
            },
          ],
        },
        {
          id: "d2-induction-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ac-generators-sinusoidal",
          question:
            "An AC generator outputs a peak EMF of {{15 V}} when rotating at {{20 Hz}}. If the number of turns on the coil is doubled and the rotation frequency is raised to {{50 Hz}} (with {{B}} and {{A}} unchanged), calculate the new peak EMF in volts.",
          answer: { type: "number", value: 75, tolerance: 0.5, display: "75 V" },
          hints: [
            "Use the proportionality {{ε_0 ∝ N f}}.",
            "Scale {{15 V}} by {{2 * (50 / 20)}}.",
          ],
          solution: [
            "Scale factor = {{2 * (50 / 20) = 5.0}}.",
            "New peak EMF = {{5.0 * 15 = 75 V}}.",
          ],
        },
        {
          id: "d2-induction-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Distinguish",
          guideRef: "ac-generators-sinusoidal",
          marks: 3,
          question:
            "Distinguish between the construction and output EMF waveform of a rotating-coil generator equipped with slip rings versus one equipped with a split-ring commutator.",
          hints: [
            "Describe how each device contacts the external brushes.",
            "Contrast alternating sinusoidal output against rectified unidirectional pulsing output.",
          ],
          modelAnswer:
            "Slip rings consist of two continuous separate metal rings, each permanently wired to one coil end and sliding against its own stationary brush, delivering an alternating sinusoidal EMF that reverses polarity every half-turn. A split-ring commutator consists of a single ring divided into two insulated semicircular halves that swap brush contacts every half-turn precisely when ε = 0. This reverses the external connection each half-cycle, converting negative lobes positive to produce a pulsating unidirectional (full-wave) DC output |ε₀ sin(ωt)|.",
          markScheme: [
            {
              point: "Slip rings: two separate continuous rings keeping fixed contact with each coil end, giving alternating sinusoidal AC output.",
              keywords: ["two continuous", "separate", "alternating sinusoidal", "reverses polarity"],
            },
            {
              point: "Split-ring commutator: one ring split into two insulated halves swapping brush contacts every half-turn at ε = 0.",
              keywords: ["insulated", "swap", "half-turn", "ε = 0"],
            },
            {
              point: "Commutator output is pulsating unidirectional (full-wave) DC voltage |ε₀ sin(ωt)| (all lobes same sign).",
              keywords: ["pulsating", "unidirectional", "full-wave", "dc"],
            },
          ],
        },
        {
          id: "d2-induction-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ac-generators-sinusoidal",
          question:
            "An AC generator of peak EMF {{40 V}} rotates at {{25 Hz}}, starting at {{t = 0}} with its coil plane perpendicular to {{B}} (so {{ε(t) = 40 sin(2 pi f t)}}). Calculate the instantaneous EMF in volts at {{t = 0.0050 s}} to 3 significant figures.",
          answer: { type: "number", value: 28.3, tolerance: 0.3, display: "28.3 V" },
          hints: [
            "Make sure your calculator is in **radians** (or convert {{2π f t}} to degrees)!",
            "{{2π(25)(0.0050) = π/4 rad = 45°}}.",
          ],
          solution: [
            "Phase angle {{ωt = 2 pi (25)(0.0050) = 0.25 pi rad = 45°}}.",
            "{{ε = 40 sin(45°) = 40 * 0.7071 = 28.3 V}}.",
          ],
        },
        {
          id: "d2-induction-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "magnetic-flux-linkage",
          question:
            "A 300-turn circular coil of radius {{5.0 cm}} sits in a uniform {{0.40 T}} magnetic field with the **normal** to the coil making an angle of {{60°}} to the field. Calculate the magnetic flux linkage in Wb to 3 significant figures.",
          answer: { type: "number", value: 0.471, tolerance: 0.005, display: "0.471 Wb" },
          hints: [
            "Compute circular area {{A = pi (0.050)^2}}.",
            "Since the angle to the normal is {{60°}}, compute {{N B A cos 60°}}.",
          ],
          solution: [
            "{{A = pi * (0.050)^2 = 7.854 * 10^(-3) m^2}}.",
            "{{NΦ = 300 * 0.40 * 7.854 * 10^(-3) * cos 60° = 0.471 Wb}}.",
          ],
        },
        {
          id: "d2-induction-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "faraday-lenz-laws",
          question:
            "A 200-turn closed coil of area {{0.010 m^2}} and total resistance {{5.0 Ω}} lies perpendicular to a uniform {{0.75 T}} magnetic field. The magnetic field is switched off until it reaches zero. Calculate the total electric charge {{Q}} in coulombs (C) that flows around the coil.",
          answer: { type: "number", value: 0.3, tolerance: 0.005, display: "0.30 C" },
          hints: [
            "Combine {{I = ε / R = N |ΔΦ| / (R Δt)}} with {{Q = I Δt}} — notice that {{Δt}} cancels completely!",
            "Compute {{Q = N |ΔΦ| / R = N B A / R}}.",
          ],
          solution: [
            "{{Q = I Δt = (N |ΔΦ| / (R Δt)) * Δt = N B A / R}}.",
            "{{Q = (200 * 0.75 * 0.010) / 5.0 = 1.5 / 5.0 = 0.30 C}}.",
          ],
        },
        {
          id: "d2-induction-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "ac-generators-sinusoidal",
          marks: 3,
          question:
            "Explain why cranking a hand-operated AC generator feels effortless when its terminals are open, but becomes noticeably harder to turn the moment a low-resistance bulb is connected across it.",
          hints: [
            "Contrast induced current when the circuit is open versus closed.",
            "Use Lenz's law (opposing magnetic torque) and conservation of energy ({{P = τω = I^2 R}}).",
          ],
          modelAnswer:
            "With open terminals no current can flow (I = 0), so zero magnetic torque acts on the rotating windings and only mechanical friction opposes turning. Connecting the bulb completes the circuit, allowing large induced current to circulate. By Lenz's law, that current interacts with the stator magnetic field to produce a strong opposing braking torque, requiring extra mechanical work from the crank to supply the bulb's electrical power output.",
          markScheme: [
            {
              point: "Open circuit has I = 0, so zero opposing magnetic torque (only friction).",
              keywords: ["i = 0", "no current", "zero magnetic torque", "friction"],
            },
            {
              point: "Closing circuit through the bulb lets induced current flow, creating an opposing magnetic torque (Lenz's law).",
              keywords: ["lenz", "braking torque", "opposing", "current to circulate"],
            },
            {
              point: "Conservation of energy: extra mechanical work/power must be supplied by the hand to match electrical power dissipated in the bulb.",
              keywords: ["mechanical work", "electrical power", "energy"],
            },
          ],
        },
        {
          id: "d2-induction-p2-q13",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ac-generators-sinusoidal",
          question:
            "A rotating AC generator coil has a peak induced EMF of {{50 V}}. At an instant when the magnetic flux linkage through the coil is {{80%}} of its maximum value, calculate the magnitude of the instantaneous induced EMF in volts.",
          answer: { type: "number", value: 30, tolerance: 0.3, display: "30 V" },
          traps: [
            {
              spec: { type: "number", value: 10, tolerance: 0.2 },
              feedback: "Flux and EMF obey {{cos^2(ωt) + sin^2(ωt) = 1}}, not a linear sum {{0.80 + 0.20 = 1}}!",
            },
          ],
          hints: [
            "Since {{NΦ / NΦ_0 = cos(ωt) = 0.80}}, use {{|sin(ωt)| = sqrt(1 - cos^2(ωt))}}.",
            "Multiply {{|sin(ωt)|}} by {{ε_0 = 50 V}}.",
          ],
          solution: [
            "{{cos(ωt) = 0.80 ⇒ |sin(ωt)| = sqrt(1 - 0.80^2) = sqrt(0.36) = 0.60}}.",
            "{{|ε| = 50 * 0.60 = 30 V}}.",
          ],
        },
        {
          id: "d2-induction-p2-q14",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "motional-emf",
          question:
            "A square wire loop of side {{0.20 m}} and total resistance {{0.40 Ω}} is pulled at a steady speed of {{3.0 m s^(-1)}} perpendicularly out of a uniform {{0.50 T}} magnetic field. Calculate the total thermal energy dissipated in the loop in joules (J) as it moves from fully inside to fully outside the field.",
          answer: { type: "number", value: 0.015, tolerance: 0.0004, display: "0.015 J" },
          hints: [
            "Find induced EMF {{ε = BvL}} and electrical power {{P = ε^2 / R}} while the trailing edge crosses the field.",
            "Multiply power by the exit time {{Δt = L / v}} (equivalently {{E = B^2 L^3 v / R}}).",
          ],
          solution: [
            "{{ε = 0.50 * 3.0 * 0.20 = 0.30 V}}.",
            "Power {{P = ε^2 / R = 0.090 / 0.40 = 0.225 W}}.",
            "Exit duration {{Δt = L / v = 0.20 / 3.0 = 0.0667 s}}.",
            "Total thermal energy {{E = P Δt = 0.225 * (0.20 / 3.0) = 0.015 J}}.",
          ],
        },
        {
          id: "d2-induction-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "ac-generators-sinusoidal",
          marks: 6,
          question:
            "A wind turbine drives a rotating-coil AC generator connected across a purely resistive heating load. Discuss how Faraday's law produces its sinusoidal EMF and phase relation to flux, how doubling the wind-driven rotational speed changes peak EMF, frequency, and average heating power, and how Lenz's law alters the opposing torque on the blades if load resistance is reduced.",
          hints: [
            "Cover three distinct parts: (1) sinusoidal EMF & 90° phase shift, (2) scaling of {{ε_0}}, {{f}}, and {{P_avg ∝ f^2}} when speed doubles, (3) Lenz opposing torque when {{R}} decreases.",
            "Quote exact equations ({{ε_0 = 2πfNBA}}, {{P_avg = ε_0^2 / (2R)}}) to secure top markband credit.",
          ],
          modelAnswer:
            "Spinning the coil in a uniform field varies flux linkage cosinusoidally as NΦ(t) = NBA cos(ωt). By Faraday's law, differentiating yields a sinusoidal output ε(t) = NBAω sin(ωt), placing induced EMF 90° (π/2 rad) out of phase with flux linkage so voltage peaks precisely when flux passes through zero. Doubling the spin rate from f to 2f doubles both the output frequency and peak voltage (ε₀ = 2πfNBA doubles because flux changes twice as fast). Because average heating power P_avg = ε₀²/(2R) scales with voltage squared, doubling rotation speed quadruples thermal power output (4×). Finally, lowering load resistance R increases induced current I = ε/R; by Lenz's law, this stronger current generates a larger opposing magnetic torque on the rotor blades, requiring higher wind torque to maintain steady rotation.",
          markScheme: [
            {
              point: "Flux linkage varies as NΦ = NBA cos(ωt); Faraday's law ε = −d(NΦ)/dt produces sinusoidal EMF ε = NBAω sin(ωt).",
              keywords: ["cos(ωt)", "sin(ωt)", "faraday", "differentiating"],
            },
            {
              point: "90° (π/2 rad) phase shift: peak EMF occurs at zero flux (and vice versa).",
              keywords: ["90°", "π/2", "zero", "phase"],
            },
            {
              point: "Doubling spin rate doubles output frequency (halves period).",
              keywords: ["doubles both", "2f", "output frequency"],
            },
            {
              point: "Doubling spin rate doubles peak EMF ε₀ = 2πfNBA (twice as fast flux change).",
              keywords: ["peak voltage", "2πfnba", "twice as fast"],
            },
            {
              point: "Average heating power P_avg = ε₀²/(2R) quadruples (4×) since power scales with ε₀² ∝ f².",
              keywords: ["quadruples", "4×", "squared", "p_avg"],
            },
            {
              point: "Reducing load resistance increases induced current, increasing Lenz's opposing magnetic torque on the rotor blades.",
              keywords: ["larger opposing", "stronger current", "lenz", "rotor"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant induction physics addressed.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic qualitative points on sinusoidal AC or faster spinning, with major gaps in power scaling and Lenz torque.",
              indicators: ["Mentions faster speed increases EMF without quantifying 4× power or 90° phase shift."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear explanation of sinusoidal generation, 2f scaling of frequency & peak EMF, and opposing torque, with minor quantitative omission.",
              indicators: ["Accurately treats at least two of the three strands with correct equations."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Comprehensive, mathematically precise synthesis integrating Faraday's law, 90° phase shift, 2× EMF/frequency, 4× average power, and Lenz's braking torque.",
              indicators: ["Connects all three strands seamlessly with explicit proportionality P_avg ∝ f² and torque–current feedback."],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 IB HL STRETCH QUESTIONS)
  // ===========================================================================
  challenge: [
    {
      id: "d2-induction-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "motional-emf",
      question:
        "A straight copper rod of length {{0.60 m}} rotates in a flat plane about one fixed pivot end at {{5.0}} revolutions per second inside a uniform {{0.40 T}} magnetic field perpendicular to the plane of rotation. Calculate the induced EMF between the pivot and outer tip in volts to 3 significant figures.",
      answer: { type: "number", value: 2.26, tolerance: 0.03, display: "2.26 V" },
      traps: [
        {
          spec: { type: "number", value: 4.52, tolerance: 0.05 },
          feedback: "You used the tip speed {{ωL}} for the whole rod — average speed along the rod is {{1/2 ωL}}, giving {{ε = 1/2 B ω L^2}}!",
        },
      ],
      hints: [
        "Find the area swept out in one full revolution: {{ΔA = pi L^2}} in time {{T = 1/f}}.",
        "Apply Faraday's law {{ε = B (ΔA / T) = B f pi L^2 = 1/2 B ω L^2}}.",
      ],
      solution: [
        "In one period {{T = 1/f}}, the rod sweeps circular area {{A = pi L^2}}.",
        "{{ε = B A f = 0.40 * pi * (0.60)^2 * 5.0 = 0.72 pi ≈ 2.26 V}} (3 s.f.).",
      ],
    },
    {
      id: "d2-induction-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "faraday-lenz-laws",
      question:
        "A 500-turn solenoid of cross-sectional area {{2.0 * 10^(-3) m^2}} lies perpendicular to a time-varying uniform magnetic field {{B(t) = 0.80 - 2.5 t^2}} (where {{B}} is in tesla and {{t}} is in seconds). Calculate the magnitude of the instantaneous induced EMF at {{t = 0.40 s}} in volts.",
      answer: { type: "number", value: 2, tolerance: 0.04, display: "2.0 V" },
      hints: [
        "Differentiate {{B(t)}} with respect to time to find the instantaneous rate {{dB/dt}}.",
        "Evaluate {{|dB/dt|}} at {{t = 0.40 s}}, then multiply by {{N A}}.",
      ],
      solution: [
        "{{dB / dt = -5.0 t}}. At {{t = 0.40 s}}, {{|dB / dt| = 5.0 * 0.40 = 2.0 T s^(-1)}}.",
        "{{|ε| = N A |dB / dt| = 500 * 2.0 * 10^(-3) * 2.0 = 2.0 V}}.",
      ],
    },
    {
      id: "d2-induction-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "motional-emf",
      question:
        "A conducting rod of mass {{0.080 kg}} and length {{0.50 m}} slides without friction down parallel conducting rails inclined at {{30°}} to the horizontal. The rails are joined at the top by a {{0.40 Ω}} resistor and sit in a uniform magnetic field of {{0.80 T}} directed **perpendicular to the inclined plane of the rails**. Taking {{g = 9.8 m s^(-2)}}, calculate the rod's terminal velocity in {{m s^(-1)}}.",
      answer: { type: "number", value: 0.98, tolerance: 0.02, display: "0.98 m s^-1" },
      traps: [
        {
          spec: { type: "number", value: 1.96, tolerance: 0.03 },
          feedback: "Only the weight component down the incline ({{m g sin 30°}}) drives the rod!",
        },
      ],
      hints: [
        "Resolve weight parallel to the rails: {{F_down = m g sin 30°}}.",
        "Set the up-slope magnetic braking force {{B^2 L^2 v_T / R}} equal to {{m g sin 30°}}.",
      ],
      solution: [
        "At terminal velocity: {{(B^2 L^2 v_T) / R = m g sin 30°}}.",
        "{{v_T = (0.080 * 9.8 * 0.40 * 0.50) / (0.80^2 * 0.50^2) = 0.1568 / 0.16 = 0.98 m s^(-1)}}.",
      ],
    },
    {
      id: "d2-induction-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "ac-generators-sinusoidal",
      question:
        "An ideal AC generator produces sinusoidal EMF {{ε(t) = 120 sin(100 pi t)}} (in volts) across a pure {{20 Ω}} heating resistor. Given that the mean value of {{sin^2(ωt)}} over one full cycle is {{1/2}}, calculate the average electrical power dissipated in the resistor in watts (W).",
      answer: { type: "number", value: 360, tolerance: 3, display: "360 W" },
      traps: [
        {
          spec: { type: "number", value: 720, tolerance: 5 },
          feedback: "{{720 W}} is the **peak** instantaneous power — average power over a sinusoidal cycle is half of peak power!",
        },
      ],
      hints: [
        "Compute peak power {{P_max = ε_0^2 / R}} first.",
        "Take the cycle average using {{P_avg = 1/2 P_max = ε_0^2 / (2R)}}.",
      ],
      solution: [
        "Peak EMF {{ε_0 = 120 V}}, so peak power {{P_max = 120^2 / 20 = 720 W}}.",
        "Average power {{P_avg = 1/2 * 720 = 360 W}}.",
      ],
    },
    {
      id: "d2-induction-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "magnetic-flux-linkage",
      question:
        "A 250-turn flat coil of area {{4.0 * 10^(-3) m^2}} sits in a uniform {{0.80 T}} magnetic field. The angle {{theta}} between the magnetic field and the coil's normal is rotated from {{30°}} to {{150°}} in {{0.040 s}}. Calculate the magnitude of the average induced EMF in volts to 3 significant figures.",
      answer: { type: "number", value: 34.6, tolerance: 0.4, display: "34.6 V" },
      traps: [
        {
          spec: { type: "number", value: 0, tolerance: 0.01 },
          feedback: "{{cos 150° = -cos 30°}} (negative!), so the flux changes sign rather than staying equal!",
        },
      ],
      hints: [
        "Note the sign: {{cos 30° = +0.866}} while {{cos 150° = -0.866}}.",
        "Compute {{|Δ(NΦ)| = N B A |cos 150° - cos 30°| = N B A sqrt(3)}} and divide by {{0.040 s}}.",
      ],
      solution: [
        "{{N B A = 250 * 0.80 * 4.0 * 10^(-3) = 0.80 Wb}}.",
        "{{|Δ(NΦ)| = 0.80 * |-0.8660 - 0.8660| = 0.80 * sqrt(3) = 1.386 Wb}}.",
        "{{|ε_avg| = 1.386 / 0.040 = 34.6 V}} (3 s.f.).",
      ],
    },
    {
      id: "d2-induction-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "faraday-lenz-laws",
      marks: 4,
      question:
        "Show that the total charge {{Q}} circulated around a closed coil of {{N}} turns and resistance {{R}} during a uniform flux change {{ΔΦ}} equals {{N |ΔΦ| / R}}, independent of the duration {{Δt}}, and explain why the total thermal energy dissipated DOES depend on {{Δt}}.",
      hints: [
        "Substitute {{I = |ε| / R}} and Faraday's law into {{Q = I Δt}}.",
        "Now substitute into {{E = I^2 R Δt}} and see which power of {{Δt}} survives!",
      ],
      modelAnswer:
        "By Faraday's law, |ε| = N|ΔΦ|/Δt, driving current I = |ε|/R = N|ΔΦ|/(RΔt). Total transferred charge is Q = IΔt = [N|ΔΦ|/(RΔt)] × Δt = N|ΔΦ|/R, in which the time interval Δt cancels identically. However, Joule thermal energy scales with current squared: E = I²RΔt = [N²(ΔΦ)²/(R²(Δt)²)] RΔt = N²(ΔΦ)²/(RΔt), which is inversely proportional to Δt — performing the same flux change twice as fast dissipates twice as much thermal energy.",
      markScheme: [
        {
          point: "Combines Faraday's law |ε| = N|ΔΦ|/Δt with Ohm's law I = |ε|/R.",
          keywords: ["faraday", "i = |ε|/r", "ohm", "n|δφ|/(rδt)"],
        },
        {
          point: "Substitutes into Q = IΔt and shows Δt cancels to give Q = N|ΔΦ|/R.",
          keywords: ["q = iδt", "cancels", "n|δφ|/r"],
        },
        {
          point: "Writes Joule heating expression E = I²RΔt (or ε²Δt/R) and derives E = N²(ΔΦ)²/(RΔt).",
          keywords: ["i²rδt", "squared", "n²(δφ)²"],
        },
        {
          point: "Concludes thermal energy is inversely proportional to Δt (faster change dissipates more heat).",
          keywords: ["inversely proportional", "twice as much", "more heat", "faster"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid derivation of charge or energy.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Derives Q = N|ΔΦ|/R cleanly but does not derive or explain the 1/Δt dependence of thermal energy.",
          indicators: ["Cancels Δt for charge without evaluating I²RΔt."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Full algebraic derivation of both Q (Δt-independent) and E ∝ 1/Δt with clear physical interpretation.",
          indicators: ["Clearly contrasts linear IΔt cancellation against quadratic I²RΔt surviving 1/Δt."],
        },
      ],
    },
    {
      id: "d2-induction-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "motional-emf",
      marks: 5,
      question:
        "A conducting rod of mass {{m}} and length {{L}} is launched with initial speed {{v_0}} along frictionless horizontal U-rails joined by a resistor {{R}} inside a uniform vertical magnetic field {{B}}, with no external force applied afterwards. Derive an expression for its acceleration {{a}} in terms of {{v}}, describe how {{v}} varies with time, and state the total thermal energy dissipated in {{R}}.",
      hints: [
        "Combine {{ε = BvL}}, {{I = ε/R}}, {{F_B = -BIL}}, and Newton's second law {{F = ma}}.",
        "Recognise {{dv/dt = -k v}} as exponential decay! And use conservation of energy for total heat.",
      ],
      modelAnswer:
        "Moving at instantaneous speed v induces motional EMF ε = BvL and current I = BvL/R. By Lenz's law, the rod experiences a retarding magnetic force F = −BIL = −B²L²v/R. Applying Newton's second law (a = F/m) gives acceleration a = −[B²L²/(mR)] v. Because deceleration magnitude is directly proportional to remaining velocity, speed decreases exponentially toward zero (steep initial slowing that progressively flattens out). By conservation of energy on frictionless rails, all initial translational kinetic energy transforms into Joule heating, so total thermal energy dissipated in the resistor equals ½mv₀² — remarkably independent of B, L, and R.",
      markScheme: [
        {
          point: "Finds motional EMF ε = BvL and induced current I = BvL/R.",
          keywords: ["ε = bvl", "bvl/r", "motional emf"],
        },
        {
          point: "Finds opposing braking force F = −BIL = −B²L²v/R.",
          keywords: ["retarding", "−b²l²v/r", "-b²l²v/r", "bil"],
        },
        {
          point: "Applies Newton's second law to obtain a = −(B²L²/(mR)) v.",
          keywords: ["newton", "b²l²/(mr)", "f/m"],
        },
        {
          point: "Describes exponential decay of speed toward zero (deceleration decreases as v decreases).",
          keywords: ["exponential", "proportional to remaining", "flattens"],
        },
        {
          point: "Applies conservation of energy to state total dissipated thermal energy = ½mv₀² (independent of B, L, R).",
          keywords: ["½mv₀²", "0.5mv", "conservation of energy", "independent"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid mechanics or induction steps.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Obtains braking force or qualitatively notes slowing down without deriving a(v) or identifying exponential decay and ½mv₀².",
          indicators: ["Misses minus sign / Newton's second law or wrongly claims constant deceleration."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly derives a = −(B²L²/(mR))v and identifies either exponential decay or ½mv₀² energy dissipation.",
          indicators: ["Connects proportional drag to non-uniform slowing."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete synthesis deriving a ∝ −v, identifying exponential velocity decay, and proving total heat equals ½mv₀² directly via energy conservation.",
          indicators: ["Explicitly notes independence of total dissipated heat from B, L, and R."],
        },
      ],
    },
    {
      id: "d2-induction-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "ac-generators-sinusoidal",
      marks: 5,
      question:
        "A rectangular coil of {{N}} turns, side length {{L}} (parallel to the axis), and width {{w}} (perpendicular to the axis) rotates at constant angular speed {{ω}} in a uniform magnetic field {{B}} perpendicular to the axis. Using the **motional EMF** expression on the two long moving sides, derive {{ε(t) = NBAω sin(ωt)}} and explain why the two end segments of length {{w}} contribute zero EMF.",
      hints: [
        "Each long side moves in a circle of radius {{r = w/2}} at tangential speed {{v = ω(w/2)}}.",
        "Only the perpendicular component {{v_⊥ = v sin(ωt)}} cuts field lines, and the two long sides push current in the **same sense** around the loop (so they ADD!).",
      ],
      modelAnswer:
        "Each long side of length L travels on a circular path of radius r = w/2 at tangential speed v = ωr = ωw/2. When the coil normal makes angle θ = ωt with B, the velocity component cutting perpendicularly across magnetic field lines is v_⊥ = v sin(ωt). Each long side therefore develops motional EMF ε_side = B L v_⊥ = ½ B L w ω sin(ωt). Because the two long sides move in opposite directions across B, their induced EMFs drive current in the same sense around the loop and add together: for N turns, ε(t) = 2N ε_side = N B (Lw) ω sin(ωt) = NBAω sin(ωt), since area A = Lw. The two short end segments of length w contribute zero EMF because their velocities lie in the plane containing B and their own length (cutting no magnetic flux).",
      markScheme: [
        {
          point: "Identifies circular radius r = w/2 and tangential speed v = ωw/2 of each long side.",
          keywords: ["w/2", "tangential speed", "ωr"],
        },
        {
          point: "Resolves perpendicular velocity component v_⊥ = v sin(ωt) cutting magnetic field lines.",
          keywords: ["v sin(ωt)", "perpendicular", "component"],
        },
        {
          point: "Finds single-side EMF B L (ωw/2) sin(ωt) and explains that the two opposite-moving sides add in series around the loop.",
          keywords: ["same sense", "add together", "2n"],
        },
        {
          point: "Substitutes coil area A = Lw and N turns to obtain ε(t) = NBAω sin(ωt).",
          keywords: ["a = lw", "nbaω sin(ωt)", "lw"],
        },
        {
          point: "Explains short end segments contribute zero EMF because they cut no flux (motion/length coplanar with B).",
          keywords: ["cutting no", "coplanar", "end segments", "zero emf"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid motional-EMF derivation attempted.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States v = ωr or ε = BvL without correctly resolving sin(ωt) or summing the two active sides.",
          indicators: ["Often misses factor of 2 or drops w/2."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly derives ε = NBAω sin(ωt) via two active sides with minor omission regarding why ends add or why short sides give zero.",
          indicators: ["Clear algebra linking 2(w/2)L = A."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Rigorous, crystal-clear geometric derivation proving exact equivalence between motional EMF and Faraday's law, including zero contribution of the end wires.",
          indicators: ["Justifies constructive addition of opposite long sides and zero flux cutting by end wires."],
        },
      ],
    },
  ],
};
