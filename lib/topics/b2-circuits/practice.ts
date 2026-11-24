import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 QUESTIONS: 6 SHORT + 4 BALANCED MCQs)
  // ===========================================================================
  quiz: [
    {
      id: "b2-circuits-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "current-pd-ohm",
      strategy: "Charge = current × time in seconds",
      question:
        "A steady current of 1.5 A flows through a torch bulb for 2.0 minutes. Calculate the total charge (in C) that passes through the bulb.",
      answer: { type: "number", value: 180, tolerance: 0.5, display: "180 C" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "Convert 2.0 minutes to seconds (120 s) before multiplying by 1.5 A.",
        },
      ],
      hints: [
        "Use {{Δq = I Δt}} with time in SI seconds.",
        "Multiply {{1.5 \" A\"}} by {{120 \" s\"}}.",
      ],
      solution: [
        "Convert time to seconds: {{Δt = 2.0 * 60 = 120}} s.",
        "Calculate charge: {{Δq = I Δt = 1.5 * 120 = 180}} C.",
      ],
    },
    {
      id: "b2-circuits-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "current-pd-ohm",
      strategy: "Graphical signature of Ohm's law",
      question:
        "Which I–V graph shape identifies an ohmic metallic conductor held at constant temperature?",
      options: [
        "A straight line passing directly through the origin",
        "A straight line with a positive vertical intercept",
        "An S-shaped curve flattening at large voltages",
        "A flat horizontal line followed by a sharp upward bend",
      ],
      answerIndex: 0,
      hints: [
        "Ohm's law states that current is directly proportional to potential difference ({{I ∝ V}}).",
      ],
      explanation:
        "Direct proportionality ({{I = V / R}} with constant {{R}}) always graphs as a straight line through the origin (0, 0). A non-zero intercept means {{V / I}} varies with voltage.",
    },
    {
      id: "b2-circuits-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "current-pd-ohm",
      strategy: "Electrical power P = IV",
      question:
        "A 24 V electric heater draws a steady current of 4.0 A. Calculate the electrical power (in W) dissipated by the heater.",
      answer: { type: "number", value: 96, tolerance: 0.5, display: "96 W" },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "{{24 / 4.0 = 6.0}} Ω is the heater's resistance, not its power! Use {{P = I V}}.",
        },
      ],
      hints: [
        "Use {{P = I V}} directly with {{V = 24}} V and {{I = 4.0}} A.",
        "Compute {{24 * 4.0}}.",
      ],
      solution: [
        "Apply {{P = I V = 4.0 * 24 = 96}} W.",
      ],
    },
    {
      id: "b2-circuits-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "series-parallel-kirchhoff",
      strategy: "Parallel resistance product-over-sum",
      question:
        "A 10 Ω resistor and a 15 Ω resistor are connected in parallel. Calculate their equivalent resistance in Ω.",
      answer: { type: "number", value: 6, tolerance: 0.05, display: "6.0 Ω" },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "25 Ω is the series combination! For parallel resistors use {{1/R_p = 1/10 + 1/15}}.",
        },
      ],
      hints: [
        "Use {{1 / R_p = 1 / 10 + 1 / 15}} or the two-resistor formula {{R_p = (R_1 R_2)/(R_1 + R_2)}}.",
        "Compute {{(10 * 15) / (10 + 15) = 150 / 25}}.",
      ],
      solution: [
        "{{R_p = (10 * 15) / (10 + 15) = 150 / 25 = 6.0}} Ω (notice 6.0 Ω is smaller than the smallest branch resistor, 10 Ω).",
      ],
    },
    {
      id: "b2-circuits-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "series-parallel-kirchhoff",
      strategy: "Ideal measuring instruments",
      question:
        "Which row correctly states the resistance and connection of an ideal ammeter and an ideal voltmeter?",
      options: [
        "Ammeter: infinite resistance in series; Voltmeter: zero resistance in parallel",
        "Ammeter: zero resistance in series; Voltmeter: infinite resistance in parallel",
        "Ammeter: zero resistance in parallel; Voltmeter: infinite resistance in series",
        "Ammeter: infinite resistance in parallel; Voltmeter: zero resistance in series",
      ],
      answerIndex: 1,
      hints: [
        "An ammeter measures through-current without hindering flow; a voltmeter measures p.d. across a component without stealing current.",
        "Zero resistance goes in series; infinite resistance goes in parallel.",
      ],
      explanation:
        "An ideal ammeter has zero resistance and connects in series so it causes zero voltage drop, while an ideal voltmeter has infinite resistance and connects in parallel so it draws zero current.",
    },
    {
      id: "b2-circuits-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "emf-internal-resistance",
      strategy: "Complete-circuit EMF equation",
      question:
        "A battery of EMF 9.0 V and internal resistance 1.5 Ω is connected to a 7.5 Ω external resistor. Calculate the circuit current in A.",
      answer: { type: "number", value: 1, tolerance: 0.02, display: "1.0 A" },
      traps: [
        {
          spec: { type: "number", value: 1.2 },
          feedback: "Remember to include the internal resistance {{r = 1.5}} Ω in total resistance: {{R + r = 9.0}} Ω.",
        },
      ],
      hints: [
        "Internal resistance acts in series with the external resistor: {{ε = I(R + r)}}.",
        "Divide 9.0 V by {{7.5 + 1.5 = 9.0}} Ω.",
      ],
      solution: [
        "Total loop resistance is {{R + r = 7.5 + 1.5 = 9.0}} Ω.",
        "Current: {{I = ε / (R + r) = 9.0 / 9.0 = 1.0}} A.",
      ],
    },
    {
      id: "b2-circuits-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "emf-internal-resistance",
      strategy: "Terminal p.d. V = ε − Ir",
      question:
        "A 12.0 V battery with internal resistance 0.80 Ω delivers a steady current of 2.5 A. Calculate the terminal potential difference across the battery in V.",
      answer: { type: "number", value: 10, tolerance: 0.05, display: "10.0 V" },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "When discharging, subtract lost volts {{I r}} from {{ε}} instead of adding.",
        },
      ],
      hints: [
        "Calculate the lost volts {{I r = 2.5 * 0.80}}.",
        "Subtract the lost volts from 12.0 V using {{V = ε - I r}}.",
      ],
      solution: [
        "Lost volts: {{I r = 2.5 * 0.80 = 2.0}} V.",
        "Terminal p.d.: {{V = 12.0 - 2.0 = 10.0}} V.",
      ],
    },
    {
      id: "b2-circuits-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "emf-internal-resistance",
      strategy: "Maximum power transfer theorem",
      question:
        "A real cell of EMF {{ε}} and internal resistance {{r}} is connected to an external variable resistor {{R}}. Under what condition is maximum power transferred to {{R}}?",
      options: [
        "When R is zero, delivering 100% electrical efficiency",
        "When R is much larger than r, giving nearly 100% efficiency",
        "When R equals r, delivering exactly 50% electrical efficiency",
        "When R equals twice r, delivering 75% electrical efficiency",
      ],
      answerIndex: 2,
      hints: [
        "Load power {{P = ε^2 R / (R + r)^2}} vanishes both at {{R = 0}} and as {{R → ∞}}.",
        "Its peak lies precisely where external resistance matches internal resistance.",
      ],
      explanation:
        "Maximum power is transferred to the load when {{R = r}}, yielding {{P_(\"max\") = ε^2 / (4r)}}. Because equal power is dissipated in {{R}} and {{r}}, the efficiency is exactly 50%.",
    },
    {
      id: "b2-circuits-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "potential-dividers-sensors",
      strategy: "Potential divider formula",
      question:
        "An ideal 10.0 V supply is wired across {{R_1 = 2.0}} kΩ and {{R_2 = 8.0}} kΩ in series. Calculate the unloaded potential difference across {{R_2}} in V.",
      answer: { type: "number", value: 8, tolerance: 0.05, display: "8.0 V" },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2.0 V is the potential difference across {{R_1}}; use {{R_2}} in the numerator.",
        },
      ],
      hints: [
        "Apply {{V_2 = V_(\"in\") * R_2 / (R_1 + R_2)}}.",
        "Compute {{10.0 * 8.0 / (2.0 + 8.0)}}.",
      ],
      solution: [
        "{{V_2 = 10.0 * 8.0 / (2.0 + 8.0) = 80 / 10 = 8.0}} V.",
      ],
    },
    {
      id: "b2-circuits-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Describe",
      guideRef: "potential-dividers-sensors",
      strategy: "Photoconductivity in an LDR",
      question:
        "When bright sunlight falls on a light-dependent resistor (LDR), how do its free charge carrier density and electrical resistance change?",
      options: [
        "Free carrier density decreases and electrical resistance increases",
        "Free carrier density stays constant and electrical resistance decreases",
        "Free carrier density decreases and electrical resistance decreases",
        "Free carrier density increases and electrical resistance decreases",
      ],
      answerIndex: 3,
      hints: [
        "Incoming light photons supply energy to liberate bound electrons in the semiconductor.",
        "More free charge carriers mean current flows more easily.",
      ],
      explanation:
        "Absorbed light photons excite additional electrons into the conduction band of the semiconductor, increasing free charge carrier density {{n}} and causing the LDR's resistance to drop steeply.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (PAPER 2 STYLE — 2 PAPERS × 15 QUESTIONS)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1: CURRENT, RESISTIVITY & KIRCHHOFF CIRCUITS
    // -------------------------------------------------------------------------
    {
      id: "b2-circuits-p1",
      title: "Paper 2 · Set 1: Current, Resistivity & Kirchhoff Circuits",
      level: "SL",
      questions: [
        {
          id: "b2-circuits-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "current-pd-ohm",
          strategy: "Average current from charge pulse",
          question:
            "A lightning flash transfers 30 C of electric charge between a cloud and the ground in 1.5 ms. Calculate the mean electric current in kA.",
          answer: { type: "number", value: 20, tolerance: 0.2, display: "20 kA" },
          traps: [
            {
              spec: { type: "number", value: 20000 },
              feedback: "20 000 A is correct in amperes — convert to kilooamperes (kA) by dividing by 1000!",
            },
          ],
          hints: [
            "Convert 1.5 ms to {{1.5 * 10^(-3)}} s and use {{I = Δq / Δt}}.",
            "Divide your answer in amperes by 1000 to express it in kA.",
          ],
          solution: [
            "{{I = Δq / Δt = 30 / (1.5 * 10^(-3)) = 20000 \" A\" = 20 \" kA\"}}.",
          ],
        },
        {
          id: "b2-circuits-p1-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Define",
          guideRef: "current-pd-ohm",
          strategy: "Exact IB definition and graphical test",
          question:
            "State Ohm's law and describe the exact graphical criterion used to verify whether a circuit component is ohmic.",
          marks: 2,
          hints: [
            "Make sure you include the physical condition required for Ohm's law to hold.",
            "Mention BOTH features of an ohmic I–V plot (its shape and where it crosses the axes).",
          ],
          modelAnswer:
            "Current through a metallic conductor is directly proportional to potential difference across it provided temperature remains constant. On a plot of current against voltage, this produces a straight line passing through the origin.",
          markScheme: [
            {
              point: "Current is directly proportional to potential difference at constant temperature.",
              keywords: ["proportional", "constant temperature", "temperature remains constant"],
            },
            {
              point: "I–V plot is a straight line passing through the origin (0, 0).",
              keywords: ["straight line", "origin", "through zero"],
            },
          ],
          commonError:
            "Writing only 'V = IR' without stating direct proportionality at constant temperature, or writing 'straight line' while omitting 'through the origin'.",
        },
        {
          id: "b2-circuits-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "current-pd-ohm",
          strategy: "Direct resistivity formula",
          question:
            "A uniform copper cable of length 12.0 m and cross-sectional area {{4.0 * 10^(-7)}} m² has resistivity {{1.7 * 10^(-8)}} Ω m. Calculate the resistance of the cable in Ω.",
          answer: { type: "number", value: 0.51, tolerance: 0.01, display: "0.51 Ω" },
          hints: [
            "Recall {{R = (ρ L) / A}} from the IB Physics Data Booklet.",
            "Substitute {{ρ = 1.7 * 10^(-8)}}, {{L = 12.0}}, and {{A = 4.0 * 10^(-7)}} carefully watching powers of ten.",
          ],
          solution: [
            "{{R = (ρ L) / A = (1.7 * 10^(-8) * 12.0) / (4.0 * 10^(-7))}}",
            "{{R = (2.04 * 10^(-7)) / (4.0 * 10^(-7)) = 0.51 \" Ω\"}}.",
          ],
        },
        {
          id: "b2-circuits-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "current-pd-ohm",
          strategy: "Diameter-to-area conversion & resistivity",
          question:
            "A cylindrical alloy wire of length 5.0 m and diameter 0.50 mm has a resistance of 6.4 Ω. Calculate the resistivity of the alloy in Ω m (give your answer to 2 significant figures, e.g. `1.8 * 10^-7`).",
          answer: { type: "number", value: 2.5e-7, tolerance: 0.08e-7, display: "{{2.5 * 10^(-7)}} Ω m" },
          traps: [
            {
              spec: { type: "number", value: 1.0e-6, tolerance: 0.05e-6 },
              feedback: "Watch out — you used diameter instead of radius in {{A = π r^2}} (which is 4 times too big)!",
            },
          ],
          hints: [
            "Halve the diameter to find radius in metres: {{r = 0.25 \" mm\" = 2.5 * 10^(-4)}} m.",
            "Compute area {{A = π r^2 ≈ 1.96 * 10^(-7)}} m², then apply {{ρ = R A / L}}.",
          ],
          solution: [
            "Radius {{r = 0.25 * 10^(-3) = 2.5 * 10^(-4)}} m.",
            "Area {{A = π (2.5 * 10^(-4))^2 = 1.963 * 10^(-7)}} m².",
            "{{ρ = (R A) / L = (6.4 * 1.963 * 10^(-7)) / 5.0 = 2.51 * 10^(-7) ≈ 2.5 * 10^(-7)}} Ω m.",
          ],
        },
        {
          id: "b2-circuits-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "current-pd-ohm",
          strategy: "Drift speed from I = nAvq",
          question:
            "A metallic wire of cross-sectional area {{2.0 * 10^(-6)}} m² has free electron number density {{8.0 * 10^28}} m⁻³ and carries a steady current of 6.4 A. Calculate the mean drift speed of the electrons in m s⁻¹ (use {{e = 1.6 * 10^(-19)}} C).",
          answer: { type: "number", value: 0.00025, tolerance: 0.00001, display: "{{2.5 * 10^(-4)}} m s^-1" },
          hints: [
            "Rearrange {{I = n A v e}} to get {{v = I / (n A e)}}.",
            "Compute the denominator {{8.0 * 10^28 * 2.0 * 10^(-6) * 1.6 * 10^(-19) = 2.56 * 10^4}}, then divide 6.4 by it.",
          ],
          solution: [
            "{{v = I / (n A e) = 6.4 / (8.0 * 10^28 * 2.0 * 10^(-6) * 1.6 * 10^(-19))}}",
            "{{v = 6.4 / (2.56 * 10^4) = 2.5 * 10^(-4)}} m s⁻¹ (0.25 mm s⁻¹).",
          ],
        },
        {
          id: "b2-circuits-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "current-pd-ohm",
          strategy: "Linking macroscopic I–V shape to lattice scattering",
          question:
            "Explain why a tungsten filament lamp fails to obey Ohm's law as the applied voltage increases, and state how its resistance at a specific voltage should be determined from its I–V graph.",
          marks: 4,
          hints: [
            "Start with Joule heating as current increases through the tungsten filament.",
            "Describe what happens to the positive lattice ions and electron collisions.",
            "State the resulting change in {{V / I}} and explicitly warn against taking the local tangent slope.",
          ],
          modelAnswer:
            "As applied p.d. rises, larger current causes Joule heating so the filament temperature rises significantly. Hotter positive lattice ions vibrate with greater amplitude, making collisions with drifting conduction electrons more frequent. Consequently, resistance increases and the I–V curve flattens rather than staying linear. At any chosen operating point, resistance must be calculated from the coordinate ratio V/I (not the reciprocal of the tangent gradient).",
          markScheme: [
            {
              point: "Higher current dissipates thermal energy (Joule heating), increasing filament temperature.",
              keywords: ["heating", "temperature rises", "hotter", "thermal energy"],
            },
            {
              point: "Positive metal lattice ions vibrate with greater amplitude.",
              keywords: ["lattice", "ions vibrate", "greater amplitude", "oscillate"],
            },
            {
              point: "More frequent collisions with drifting electrons increase resistance, flattening the curve.",
              keywords: ["collisions", "flattens", "more frequent"],
            },
            {
              point: "Resistance at a point is determined by the ratio V/I directly, not 1/(tangent gradient).",
              keywords: ["ratio v/i", "v/i", "not the reciprocal", "tangent"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics or incorrect microscopic model." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies heating/higher resistance or mentions V/I without linking lattice vibrations to electron collisions.",
              indicators: ["Mentions temperature rises or resistance increases without microscopic mechanism"],
            },
            {
              band: "3",
              marks: [3, 3],
              descriptor: "Clear microscopic explanation of lattice vibrations and collisions, with minor omission on graphical calculation.",
            },
            {
              band: "4",
              marks: [4, 4],
              descriptor: "Complete causal chain from Joule heating to lattice ion amplitude, electron scattering, curve flattening, and exact V/I ratio method.",
              indicators: ["Explicitly contrasts coordinate ratio V/I with tangent gradient"],
            },
          ],
        },
        {
          id: "b2-circuits-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "current-pd-ohm",
          strategy: "Resistance from rated power and voltage",
          question:
            "An electric water heater is rated at 3.0 kW when operated at 240 V. Calculate the operating resistance of its heating element in Ω.",
          answer: { type: "number", value: 19.2, tolerance: 0.1, display: "19.2 Ω" },
          traps: [
            {
              spec: { type: "number", value: 12.5 },
              feedback: "12.5 A is the operating current ({{3000 / 240}}); now compute {{R = 240 / 12.5}}.",
            },
          ],
          hints: [
            "Convert 3.0 kW to 3000 W and use {{P = V^2 / R}}.",
            "Evaluate {{R = 240^2 / 3000}}.",
          ],
          solution: [
            "Rearrange {{P = V^2 / R}} to {{R = V^2 / P}}.",
            "{{R = 240^2 / 3000 = 57600 / 3000 = 19.2}} Ω.",
          ],
        },
        {
          id: "b2-circuits-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Three resistors in parallel",
          question:
            "Three resistors of 12 Ω, 6.0 Ω, and 4.0 Ω are connected in parallel. Calculate their combined resistance in Ω.",
          answer: { type: "number", value: 2, tolerance: 0.02, display: "2.0 Ω" },
          traps: [
            {
              spec: { type: "number", value: 0.5 },
              feedback: "0.5 Ω⁻¹ is {{1 / R_p}} — don't forget to take the reciprocal at the end!",
            },
          ],
          hints: [
            "Use {{1 / R_p = 1/12 + 1/6 + 1/4}} with common denominator 12.",
            "Remember to invert the sum {{6 / 12 = 1 / 2}} to find {{R_p}}.",
          ],
          solution: [
            "{{1 / R_p = 1/12 + 2/12 + 3/12 = 6/12 = 1/2}} Ω⁻¹.",
            "Invert: {{R_p = 2.0}} Ω.",
          ],
        },
        {
          id: "b2-circuits-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Mixed network collapse and branch power",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 175" role="img" aria-label="Circuit with 24 V ideal battery, 4.0 ohm series resistor, and parallel branches of 6.0 ohm and 12.0 ohm">' +
            '<rect x="0" y="0" width="420" height="175" fill="#ffffff" rx="6"/>' +
            '<line x1="45" y1="35" x2="95" y2="35" stroke="#1e293b" stroke-width="2.2"/>' +
            '<rect x="95" y="23" width="66" height="24" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="3"/>' +
            '<text x="128" y="39" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1e3a8a" text-anchor="middle">4.0 Ω</text>' +
            '<line x1="161" y1="35" x2="220" y2="35" stroke="#1e293b" stroke-width="2.2"/>' +
            '<circle cx="220" cy="35" r="3.5" fill="#dc2626"/>' +
            '<line x1="220" y1="35" x2="255" y2="35" stroke="#1e293b" stroke-width="2.2"/>' +
            '<rect x="255" y="23" width="66" height="24" fill="#f0fdf4" stroke="#15803d" stroke-width="2" rx="3"/>' +
            '<text x="288" y="39" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#14532d" text-anchor="middle">6.0 Ω</text>' +
            '<line x1="321" y1="35" x2="365" y2="35" stroke="#1e293b" stroke-width="2.2"/>' +
            '<line x1="220" y1="35" x2="220" y2="95" stroke="#1e293b" stroke-width="2.2"/>' +
            '<line x1="220" y1="95" x2="255" y2="95" stroke="#1e293b" stroke-width="2.2"/>' +
            '<rect x="255" y="83" width="66" height="24" fill="#fefce8" stroke="#ca8a04" stroke-width="2" rx="3"/>' +
            '<text x="288" y="99" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#713f12" text-anchor="middle">12.0 Ω</text>' +
            '<line x1="321" y1="95" x2="365" y2="95" stroke="#1e293b" stroke-width="2.2"/>' +
            '<circle cx="365" cy="95" r="3.5" fill="#dc2626"/>' +
            '<line x1="365" y1="35" x2="365" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
            '<line x1="45" y1="148" x2="365" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
            '<line x1="45" y1="35" x2="45" y2="82" stroke="#1e293b" stroke-width="2.2"/>' +
            '<line x1="29" y1="82" x2="61" y2="82" stroke="#1e293b" stroke-width="2.2"/>' +
            '<line x1="37" y1="94" x2="53" y2="94" stroke="#1e293b" stroke-width="4.5"/>' +
            '<line x1="45" y1="94" x2="45" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
            '<text x="19" y="92" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">24 V</text>' +
            "</svg>",
          question:
            "In the circuit shown, an ideal 24 V battery is connected to a 4.0 Ω series resistor followed by a parallel pair of 6.0 Ω and 12.0 Ω resistors. Calculate the power dissipated in the 12.0 Ω resistor in W.",
          answer: { type: "number", value: 12, tolerance: 0.1, display: "12 W" },
          traps: [
            {
              spec: { type: "number", value: 48 },
              feedback: "48 W assumes the full 24 V lies across the 12.0 Ω resistor — half of 24 V is dropped across the 4.0 Ω series resistor!",
            },
          ],
          hints: [
            "Collapse the parallel pair: {{R_p = (6.0 * 12.0)/(6.0 + 12.0) = 4.0}} Ω.",
            "Since the series resistor is also 4.0 Ω, the 24 V divides equally: 12 V across the parallel pair.",
            "Use {{P = V_p^2 / 12.0}}.",
          ],
          solution: [
            "Parallel block: {{R_p = (6.0 * 12.0)/(6.0 + 12.0) = 4.0}} Ω.",
            "Total resistance {{R_(\"tot\") = 4.0 + 4.0 = 8.0}} Ω, so total current {{I = 24 / 8.0 = 3.0}} A.",
            "Parallel p.d.: {{V_p = 3.0 * 4.0 = 12.0}} V.",
            "Power in 12.0 Ω branch: {{P = 12.0^2 / 12.0 = 12}} W.",
          ],
        },
        {
          id: "b2-circuits-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Conservation laws and ideal meter reasoning",
          question:
            "Identify the physical conservation principle underlying each of Kirchhoff's two circuit laws, and explain why an ideal voltmeter should possess infinite resistance.",
          marks: 3,
          hints: [
            "Link the junction rule to charge and the loop rule to energy.",
            "Explain how a voltmeter is connected (parallel) and what happens to circuit current if it has infinite resistance.",
          ],
          modelAnswer:
            "Kirchhoff's first (junction) law follows from conservation of electric charge, since charge cannot accumulate or disappear at a node. Kirchhoff's second (loop) law follows from conservation of energy around any closed path. Because a voltmeter is wired in parallel across a component, infinite resistance ensures it draws zero current so it does not alter the branch resistance or measured voltage.",
          markScheme: [
            {
              point: "Junction law expresses conservation of electric charge.",
              keywords: ["charge", "junction", "first law"],
            },
            {
              point: "Loop law expresses conservation of energy.",
              keywords: ["energy", "loop", "second law"],
            },
            {
              point: "Wired in parallel, infinite resistance draws zero current so the circuit p.d. is unaltered.",
              keywords: ["draws zero current", "no current", "parallel", "does not alter"],
            },
          ],
        },
        {
          id: "b2-circuits-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Junction current subtraction",
          question:
            "A 15 Ω resistor and an unknown resistor {{X}} are wired in parallel across an ideal 30 V battery. If the total current leaving the battery is 5.0 A, calculate {{X}} in Ω.",
          answer: { type: "number", value: 10, tolerance: 0.05, display: "10 Ω" },
          hints: [
            "Calculate the current in the 15 Ω branch using {{I_1 = 30 / 15}}.",
            "Subtract {{I_1}} from 5.0 A to get {{I_X}}, then calculate {{X = 30 / I_X}}.",
          ],
          solution: [
            "Current through 15 Ω: {{I_1 = 30 / 15 = 2.0}} A.",
            "By KCL, current through {{X}}: {{I_X = 5.0 - 2.0 = 3.0}} A.",
            "{{X = 30 / 3.0 = 10}} Ω.",
          ],
        },
        {
          id: "b2-circuits-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Rated lamp resistance with cable resistance",
          question:
            "Two identical lamps rated at 12 V, 24 W are connected in parallel across an ideal 12 V supply via a supply cable of resistance 0.25 Ω in series with the parallel pair. Assuming the lamp resistances stay fixed at their rated values, calculate the total current drawn from the supply in A (to 3 significant figures).",
          answer: { type: "number", value: 3.69, tolerance: 0.03, display: "3.69 A" },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "4.0 A ignores the 0.25 Ω cable resistance in series with the parallel lamps.",
            },
          ],
          hints: [
            "Find each lamp's resistance from {{R = V^2 / P = 12^2 / 24 = 6.0}} Ω.",
            "Combine the two 6.0 Ω lamps in parallel (3.0 Ω), add the 0.25 Ω cable in series, and divide 12 V by total resistance.",
          ],
          solution: [
            "Each lamp: {{R_(\"lamp\") = 12^2 / 24 = 6.0}} Ω.",
            "Two lamps in parallel: {{R_p = 6.0 / 2 = 3.0}} Ω.",
            "Total resistance with cable: {{R_(\"tot\") = 3.0 + 0.25 = 3.25}} Ω.",
            "Supply current: {{I = 12 / 3.25 = 3.692 ≈ 3.69}} A.",
          ],
        },
        {
          id: "b2-circuits-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Quantifying voltmeter loading error",
          question:
            "Two 100 kΩ resistors are connected in series across an ideal 10.0 V supply. A student measures the p.d. across one resistor using a moving-coil voltmeter whose resistance is 100 kΩ. Calculate the reading shown and discuss why switching to a 10 MΩ digital voltmeter dramatically improves measurement accuracy.",
          marks: 4,
          hints: [
            "First note what the true unloaded p.d. across each 100 kΩ resistor is (5.0 V).",
            "Combine the 100 kΩ voltmeter in parallel with the 100 kΩ resistor (50 kΩ) and calculate the loaded divider reading.",
            "Explain why 10 MΩ ≫ 100 kΩ makes parallel loading negligible.",
          ],
          modelAnswer:
            "Without a meter, the supply divides evenly to give 5.0 V across each resistor. Wiring the 100 kΩ meter in parallel with one resistor halves that section's effective resistance to 50 kΩ. The new divider output is 10.0 × 50 / (100 + 50) = 3.33 V, a large systematic under-reading. Replacing it with a 10 MΩ digital instrument draws negligible bypass current because 10 MΩ is 100 times larger than 100 kΩ, keeping the parallel combination close to 99 kΩ and the reading close to 5.0 V.",
          markScheme: [
            {
              point: "Combines 100 kΩ voltmeter in parallel with 100 kΩ resistor to obtain 50 kΩ.",
              keywords: ["50 kω", "50k", "halves", "50"],
            },
            {
              point: "Calculates loaded reading as 3.33 V (or 3.3 V) compared to true 5.0 V.",
              keywords: ["3.33", "3.3 v", "3.33 v"],
            },
            {
              point: "Explains that the 10 MΩ meter draws negligible current / barely lowers parallel resistance.",
              keywords: ["negligible", "100 times", "barely", "99 k"],
            },
            {
              point: "Concludes that the digital reading stays very close to the true 5.0 V, minimizing systematic loading error.",
              keywords: ["5.0 v", "systematic", "loading", "close to"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid circuit calculation or physical reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Either calculates 3.33 V correctly OR gives qualitative comment on high resistance without linking loading." },
            { band: "3", marks: [3, 3], descriptor: "Correct 3.33 V calculation plus qualitative comparison with 10 MΩ meter." },
            {
              band: "4",
              marks: [4, 4],
              descriptor: "Full quantitative calculation (50 kΩ → 3.33 V vs 5.0 V) and sharp physical explanation of negligible current draw for 10 MΩ ≫ 100 kΩ.",
              indicators: ["Explicitly compares 3.33 V systematic error against unloaded 5.0 V"],
            },
          ],
        },
        {
          id: "b2-circuits-p1-q14",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "series-parallel-kirchhoff",
          strategy: "Two-loop Kirchhoff / nodal analysis",
          question:
            "In a two-loop circuit between nodes A and B, the left branch holds an ideal 10.0 V cell (+ toward A) in series with a 2.0 Ω resistor, the right branch holds an ideal 4.0 V cell (+ toward A) in series with a 2.0 Ω resistor, and the central branch directly between A and B holds a 4.0 Ω resistor. Calculate the potential difference across the central 4.0 Ω resistor in V.",
          answer: { type: "number", value: 5.6, tolerance: 0.05, display: "5.6 V" },
          hints: [
            "Let node B be 0 V and node A be {{V_A}}. Write the current leaving node A into all three branches.",
            "By Kirchhoff's junction rule at A: {{(V_A - 10.0)/2.0 + (V_A - 4.0)/2.0 + V_A/4.0 = 0}}.",
            "Multiply through by 4.0 to get {{5 V_A = 28.0}}.",
          ],
          solution: [
            "Take node B as 0 V and let node A have potential {{V_A}}.",
            "Apply KCL at A (sum of currents leaving A equals 0): {{(V_A - 10.0)/2.0 + (V_A - 4.0)/2.0 + V_A/4.0 = 0}}.",
            "Multiply by 4: {{2(V_A - 10.0) + 2(V_A - 4.0) + V_A = 0}} → {{5 V_A = 28.0}} → {{V_A = 5.6}} V.",
          ],
        },
        {
          id: "b2-circuits-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "current-pd-ohm",
          strategy: "Transmission-line Joule heating calculation",
          question:
            "Transmission cables of total resistance 2.0 Ω carry 100 kW of electrical power from a power station to a town. Calculate the thermal power wasted in the cables when transmitted at 1.0 kV versus 20 kV, and explain why national grids step voltage up for long-distance transmission.",
          marks: 5,
          hints: [
            "Find line current at each voltage using {{I = P / V}} (100 A at 1.0 kV; 5.0 A at 20 kV).",
            "Compute cable power loss using {{P_(\"loss\") = I^2 R_(\"cable\")}} — do NOT use {{V^2 / R}} with transmission voltage!",
            "Explain the {{1 / V^2}} scaling of wasted heat.",
          ],
          modelAnswer:
            "At 1.0 kV, line current is I = 100 000 / 1000 = 100 A, so thermal dissipation in the 2.0 Ω cable is I²R = 100² × 2.0 = 20 000 W (20 kW, a 20% loss). At 20 kV, line current drops twenty-fold to I = 100 000 / 20 000 = 5.0 A, cutting cable waste to 5.0² × 2.0 = 50 W (0.05% loss). Because cable heating scales as I²R = (P/V)²R ∝ 1/V², multiplying transmission voltage by 20 slashes resistive losses by a factor of 400, enabling far higher grid efficiency and thinner conductors.",
          markScheme: [
            {
              point: "Calculates current at 1.0 kV as 100 A and cable loss as 20 kW (20 000 W).",
              keywords: ["100 a", "20 kw", "20 000", "20000"],
            },
            {
              point: "Calculates current at 20 kV as 5.0 A.",
              keywords: ["5.0 a", "5 a"],
            },
            {
              point: "Calculates cable loss at 20 kV as 50 W.",
              keywords: ["50 w", "0.05 kw"],
            },
            {
              point: "Identifies that cable heating follows I²R (∝ 1/V² for fixed transmitted power).",
              keywords: ["i²r", "i^2", "1/v", "factor of 400", "400"],
            },
            {
              point: "Concludes stepping up voltage lowers current, minimizing resistive energy loss / allowing thinner cables.",
              keywords: ["efficiency", "thinner", "slashes", "minimizing", "lowers current"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Uses V²/R with supply voltage or shows no valid physics." },
            { band: "1–2", marks: [1, 2], descriptor: "Computes currents or one power loss correctly, with limited explanation." },
            { band: "3–4", marks: [3, 4], descriptor: "Computes both losses (20 kW and 50 W) accurately with partial explanation of I²R scaling." },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Exact calculations at both voltages plus clear derivation/explanation of 400× loss reduction and engineering benefits.",
              indicators: ["Explicitly links 20× lower current to 400× smaller I²R cable heating"],
            },
          ],
          commonError:
            "Calculating cable loss with {{V^2 / R}} using the 20 kV line voltage — the 20 kV is across the line-plus-town, NOT dropped across the cable alone!",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2: EMF, INTERNAL RESISTANCE & POTENTIAL DIVIDERS
    // -------------------------------------------------------------------------
    {
      id: "b2-circuits-p2",
      title: "Paper 2 · Set 2: EMF, Internal Resistance & Potential Dividers",
      level: "SL",
      questions: [
        {
          id: "b2-circuits-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "emf-internal-resistance",
          strategy: "Short-circuit current limit",
          question:
            "A dry cell has an EMF of 4.5 V and an internal resistance of 0.50 Ω. Calculate the maximum (short-circuit) current it can supply in A.",
          answer: { type: "number", value: 9, tolerance: 0.05, display: "9.0 A" },
          hints: [
            "During a short circuit, external resistance {{R = 0}} Ω.",
            "Apply {{I_(\"sc\") = ε / r = 4.5 / 0.50}}.",
          ],
          solution: [
            "At short circuit ({{R = 0}}), {{I_(\"sc\") = ε / r = 4.5 / 0.50 = 9.0}} A.",
          ],
        },
        {
          id: "b2-circuits-p2-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "emf-internal-resistance",
          strategy: "Direction of energy conversion per unit charge",
          question:
            "Distinguish between the electromotive force (EMF) of a battery and the terminal potential difference across its terminals while it powers a lamp.",
          marks: 2,
          hints: [
            "Contrast non-electrical → electrical energy per coulomb against electrical → other forms per coulomb across the external load.",
            "Note why terminal p.d. is smaller than EMF when current flows.",
          ],
          modelAnswer:
            "EMF is the total chemical (non-electrical) energy converted into electrical energy per unit charge by the cell. Terminal potential difference is the electrical energy converted to other forms per unit charge across the external circuit, which is smaller than EMF by the lost volts Ir dropped across internal resistance.",
          markScheme: [
            {
              point: "EMF = non-electrical (chemical) energy converted to electrical energy per unit charge.",
              keywords: ["non-electrical", "chemical", "per unit charge"],
            },
            {
              point: "Terminal p.d. = energy transferred across the external load per unit charge, lower than EMF by lost volts Ir.",
              keywords: ["external", "lost volts", "internal resistance", "smaller than emf"],
            },
          ],
        },
        {
          id: "b2-circuits-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "emf-internal-resistance",
          strategy: "Solving ε = I(R + r) for R",
          question:
            "A battery of EMF 12.0 V and internal resistance 0.40 Ω drives a steady current of 5.0 A through an external resistor {{R}}. Calculate {{R}} in Ω.",
          answer: { type: "number", value: 2, tolerance: 0.02, display: "2.0 Ω" },
          traps: [
            {
              spec: { type: "number", value: 2.4 },
              feedback: "2.4 Ω is total circuit resistance {{R + r}}; subtract internal resistance 0.40 Ω!",
            },
          ],
          hints: [
            "Find total resistance {{R + r = ε / I = 12.0 / 5.0 = 2.4}} Ω.",
            "Subtract {{r = 0.40}} Ω to obtain {{R}}.",
          ],
          solution: [
            "{{R + r = ε / I = 12.0 / 5.0 = 2.40}} Ω.",
            "{{R = 2.40 - 0.40 = 2.0}} Ω.",
          ],
        },
        {
          id: "b2-circuits-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "emf-internal-resistance",
          strategy: "False-origin V–I graph extrapolation",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 215" role="img" aria-label="False-origin graph of terminal voltage V against current I starting at I = 0.5 A, showing straight line from (0.5 A, 5.6 V) to (2.5 A, 4.0 V)">' +
            '<rect x="0" y="0" width="420" height="215" fill="#ffffff" rx="6"/>' +
            // Grid box x: 75..375 (I from 0.5 to 2.5 -> 150px per A), y: 25..175 (V from 3.5 to 6.0 -> 60px per V)
            '<rect x="75" y="25" width="300" height="150" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>' +
            // Vertical grid lines at I = 0.5, 1.0, 1.5, 2.0, 2.5
            '<line x1="150" y1="25" x2="150" y2="175" stroke="#e2e8f0" stroke-width="1"/>' +
            '<line x1="225" y1="25" x2="225" y2="175" stroke="#e2e8f0" stroke-width="1"/>' +
            '<line x1="300" y1="25" x2="300" y2="175" stroke="#e2e8f0" stroke-width="1"/>' +
            // Horizontal grid lines at V = 4.0 (y=145), 4.5 (y=115), 5.0 (y=85), 5.5 (y=55), 6.0 (y=25)
            '<line x1="75" y1="55" x2="375" y2="55" stroke="#e2e8f0" stroke-width="1"/>' +
            '<line x1="75" y1="85" x2="375" y2="85" stroke="#e2e8f0" stroke-width="1"/>' +
            '<line x1="75" y1="115" x2="375" y2="115" stroke="#e2e8f0" stroke-width="1"/>' +
            '<line x1="75" y1="145" x2="375" y2="145" stroke="#e2e8f0" stroke-width="1"/>' +
            // Axes
            '<line x1="75" y1="175" x2="385" y2="175" stroke="#334155" stroke-width="1.8"/>' +
            '<line x1="75" y1="175" x2="75" y2="18" stroke="#334155" stroke-width="1.8"/>' +
            // Line from (0.5, 5.6) -> x=75, y=25+(6.0-5.6)*60=49 to (2.5, 4.0) -> x=375, y=145
            '<line x1="75" y1="49" x2="375" y2="145" stroke="#2563eb" stroke-width="2.8"/>' +
            '<circle cx="75" cy="49" r="4.5" fill="#dc2626"/>' +
            '<circle cx="375" cy="145" r="4.5" fill="#dc2626"/>' +
            '<text x="86" y="45" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">(0.50 A, 5.60 V)</text>' +
            '<text x="366" y="135" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="end">(2.50 A, 4.00 V)</text>' +
            // Tick labels
            '<text x="75" y="191" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="middle">0.5</text>' +
            '<text x="150" y="191" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="middle">1.0</text>' +
            '<text x="225" y="191" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="middle">1.5</text>' +
            '<text x="300" y="191" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="middle">2.0</text>' +
            '<text x="375" y="191" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="middle">2.5</text>' +
            '<text x="225" y="207" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Current I / A (note: false origin at 0.5 A!)</text>' +
            '<text x="67" y="149" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="end">4.0</text>' +
            '<text x="67" y="89" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="end">5.0</text>' +
            '<text x="67" y="29" font-family="system-ui,sans-serif" font-size="10" fill="#475569" text-anchor="end">6.0</text>' +
            '<text x="24" y="102" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle" transform="rotate(-90 24 102)">V / V</text>' +
            "</svg>",
          question:
            "The false-origin V–I graph shown plots measurements from a real battery starting at {{I = 0.50}} A. Using the two marked points (0.50 A, 5.60 V) and (2.50 A, 4.00 V), determine the EMF {{ε}} of the battery in V.",
          answer: { type: "number", value: 6, tolerance: 0.05, display: "6.0 V" },
          traps: [
            {
              spec: { type: "number", value: 5.6 },
              feedback: "Watch the false origin! 5.60 V is the reading at {{I = 0.50}} A, NOT at {{I = 0}} A. Calculate {{r}} from the gradient and extrapolate back to {{I = 0}}.",
            },
          ],
          hints: [
            "First find internal resistance from the slope magnitude: {{r = (5.60 - 4.00) / (2.50 - 0.50)}}.",
            "Substitute {{r = 0.80}} Ω into {{ε = V + I r}} using either coordinate pair.",
          ],
          solution: [
            "Gradient {{m = (4.00 - 5.60)/(2.50 - 0.50) = -1.60 / 2.00 = -0.80}} Ω, so {{r = 0.80}} Ω.",
            "Extrapolate to {{I = 0}}: {{ε = V + I r = 5.60 + 0.50 * 0.80 = 6.0}} V.",
          ],
        },
        {
          id: "b2-circuits-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "emf-internal-resistance",
          strategy: "Simultaneous equations for ε and r",
          question:
            "A cell drives a current of 1.2 A through a 4.0 Ω resistor. When the resistor is replaced by a 9.0 Ω resistor, the current falls to 0.60 A. Calculate the EMF {{ε}} of the cell in V.",
          answer: { type: "number", value: 6, tolerance: 0.05, display: "6.0 V" },
          hints: [
            "Write {{ε = 1.2(4.0 + r)}} and {{ε = 0.60(9.0 + r)}}.",
            "Equate the right-hand sides to solve for {{r = 1.0}} Ω, then substitute back to get {{ε}}.",
          ],
          solution: [
            "{{1.2(4.0 + r) = 0.60(9.0 + r)}} → {{4.8 + 1.2 r = 5.4 + 0.60 r}}.",
            "{{0.60 r = 0.60}} → {{r = 1.0}} Ω.",
            "{{ε = 1.2(4.0 + 1.0) = 6.0}} V.",
          ],
        },
        {
          id: "b2-circuits-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "emf-internal-resistance",
          strategy: "Maximum load power formula",
          question:
            "A solar array is modelled as a source of EMF 18.0 V and internal resistance 3.0 Ω. Calculate the maximum electrical power (in W) it can transfer to a matched external load.",
          answer: { type: "number", value: 27, tolerance: 0.2, display: "27 W" },
          traps: [
            {
              spec: { type: "number", value: 108 },
              feedback: "{{18^2 / 3 = 108}} W is the total power dissipated internally on short circuit! Maximum load power occurs at {{R = r}}, giving {{ε^2 / (4r)}}.",
            },
          ],
          hints: [
            "Maximum power transfer occurs when load resistance {{R = r = 3.0}} Ω.",
            "Compute {{I = 18.0 / 6.0 = 3.0}} A and {{P = I^2 R}}, or apply {{P_(\"max\") = ε^2 / (4 r)}}.",
          ],
          solution: [
            "Set {{R = r = 3.0}} Ω: {{I = 18.0 / (3.0 + 3.0) = 3.0}} A.",
            "{{P_(\"max\") = I^2 R = 3.0^2 * 3.0 = 27}} W.",
          ],
        },
        {
          id: "b2-circuits-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "emf-internal-resistance",
          strategy: "Standard IB internal resistance practical",
          question:
            "Outline the circuit setup and graphical analysis needed to determine the EMF {{ε}} and internal resistance {{r}} of a dry cell in the laboratory, and explain why the circuit switch should be opened between readings.",
          marks: 4,
          hints: [
            "Specify the series components (cell, switch, ammeter, variable resistor) and the parallel voltmeter across the cell terminals.",
            "State what is plotted (terminal p.d. V on y-axis vs current I on x-axis) and how ε and r are read from intercept and gradient.",
            "Think about battery heating/depletion changing r and ε during prolonged current draw.",
          ],
          modelAnswer:
            "Wire the cell in series with a switch, ammeter, and variable resistor, and connect a high-resistance voltmeter in parallel directly across the cell terminals. Vary the rheostat across at least six settings, recording pairs of current I and terminal p.d. V. Plot V on the vertical axis against I on the horizontal axis; from V = ε − Ir, the y-intercept equals ε and the negative gradient gives internal resistance r. Opening the switch between measurements prevents battery heating and chemical depletion from drifting ε and r.",
          markScheme: [
            {
              point: "Correct circuit: ammeter and variable resistor in series with cell; voltmeter in parallel across cell terminals.",
              keywords: ["ammeter", "variable resistor", "voltmeter in parallel", "rheostat"],
            },
            {
              point: "Plots terminal p.d. V against current I across multiple settings.",
              keywords: ["plot v", "against i", "v against i", "multiple"],
            },
            {
              point: "Identifies y-intercept as EMF ε and magnitude of negative gradient as internal resistance r.",
              keywords: ["y-intercept", "intercept", "gradient"],
            },
            {
              point: "Opening switch avoids heating/draining the cell, keeping ε and r constant during the experiment.",
              keywords: ["heating", "depletion", "draining", "constant"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No workable experimental design." },
            { band: "1–2", marks: [1, 2], descriptor: "Correct circuit OR graphical reading described, missing control precautions." },
            { band: "3", marks: [3, 3], descriptor: "Complete circuit and graphical extraction of ε and r, brief or incomplete precaution." },
            {
              band: "4",
              marks: [4, 4],
              descriptor: "Full IB-standard experimental method: exact meter placement, V–I linear analysis (intercept & gradient), and physical justification for opening the switch.",
            },
          ],
        },
        {
          id: "b2-circuits-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "emf-internal-resistance",
          strategy: "Reversed cell inside a battery pack",
          question:
            "Three identical cells, each of EMF 1.5 V and internal resistance 0.40 Ω, are placed in a torch holder in series, but one cell is inserted backwards. The battery pack powers a 2.8 Ω lamp. Calculate the current through the lamp in A.",
          answer: { type: "number", value: 0.375, tolerance: 0.005, display: "0.375 A" },
          traps: [
            {
              spec: { type: "number", value: 1.125, tolerance: 0.01 },
              feedback: "Reversing one cell makes the net EMF {{1.5 + 1.5 - 1.5 = 1.5}} V, not 4.5 V!",
            },
          ],
          hints: [
            "Two cells push forward and one pushes backward: net EMF = {{1.5 + 1.5 - 1.5 = 1.5}} V.",
            "All three internal resistances still add in series: {{r_(\"tot\") = 3 * 0.40 = 1.2}} Ω.",
          ],
          solution: [
            "Net EMF: {{ε_(\"net\") = 1.5 + 1.5 - 1.5 = 1.5}} V.",
            "Total loop resistance: {{R_(\"tot\") = 2.8 + 3(0.40) = 4.0}} Ω.",
            "Current: {{I = 1.5 / 4.0 = 0.375}} A.",
          ],
        },
        {
          id: "b2-circuits-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "potential-dividers-sensors",
          strategy: "Standard potential divider output",
          question:
            "An ideal 18.0 V supply feeds a series potential divider with {{R_1 = 4.5}} kΩ and {{R_2 = 1.5}} kΩ. Calculate the unloaded potential difference across {{R_2}} in V.",
          answer: { type: "number", value: 4.5, tolerance: 0.05, display: "4.5 V" },
          hints: [
            "Apply {{V_2 = V_(\"in\") * R_2 / (R_1 + R_2)}}.",
            "Compute {{18.0 * 1.5 / (4.5 + 1.5) = 18.0 * 1.5 / 6.0}}.",
          ],
          solution: [
            "{{V_2 = 18.0 * 1.5 / (4.5 + 1.5) = 18.0 / 4 = 4.5}} V.",
          ],
        },
        {
          id: "b2-circuits-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "potential-dividers-sensors",
          strategy: "Inverting the potential divider ratio",
          question:
            "An automatic night-light circuit uses an ideal 9.0 V supply across a fixed resistor {{R_1 = 12}} kΩ in series with an LDR. The switching comparator activates when the p.d. across the LDR rises to 6.0 V. Calculate the resistance of the LDR (in kΩ) at the switching threshold.",
          answer: { type: "number", value: 24, tolerance: 0.2, display: "24 kΩ" },
          hints: [
            "Subtract 6.0 V from 9.0 V to find the p.d. across the 12 kΩ fixed resistor (3.0 V).",
            "Since {{V_(\"LDR\") = 2 V_1}}, {{R_(\"LDR\")}} must be twice {{R_1}}.",
          ],
          solution: [
            "{{V_1 = 9.0 - 6.0 = 3.0}} V.",
            "Using {{R_(\"LDR\") / R_1 = V_(\"LDR\") / V_1 = 6.0 / 3.0 = 2}}, we obtain {{R_(\"LDR\") = 2 * 12 = 24}} kΩ.",
          ],
        },
        {
          id: "b2-circuits-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "potential-dividers-sensors",
          strategy: "Microscopic semiconductor response + divider design",
          question:
            "A greenhouse cooling fan activates when its input trigger voltage rises above a threshold. The designer pairs an NTC thermistor in series with a fixed resistor across a 12 V supply. Explain microscopically why the thermistor's resistance changes as the greenhouse heats up, deduce across which component the fan trigger must be wired, and explain the resulting voltage change.",
          marks: 4,
          hints: [
            "Mention thermal excitation of extra free charge carriers in the semiconductor thermistor.",
            "Follow the chain: temperature ↑ → thermistor resistance ↓ → thermistor p.d. ↓ → fixed resistor p.d. ↑.",
          ],
          modelAnswer:
            "Heating the semiconductor thermistor supplies thermal energy that liberates many more electrons into the conduction band, dramatically increasing free charge carrier density and lowering its resistance. Because the thermistor and fixed resistor share the constant 12 V supply in series, a falling thermistor resistance gives it a smaller fraction of 12 V while raising the share across the fixed resistor. Therefore the trigger must be connected across the fixed resistor so its output rises above threshold when hot.",
          markScheme: [
            {
              point: "Thermal energy excites more free charge carriers (higher carrier density n) in the semiconductor.",
              keywords: ["free charge carriers", "carrier density", "conduction band", "liberates"],
            },
            {
              point: "Thermistor resistance decreases sharply as temperature rises.",
              keywords: ["lowering its resistance", "resistance decreases", "falling thermistor resistance"],
            },
            {
              point: "Deduces that the trigger must be connected across the fixed resistor.",
              keywords: ["across the fixed resistor", "fixed resistor"],
            },
            {
              point: "Explains via series voltage sharing (or higher current I) that p.d. across the fixed resistor increases while thermistor p.d. drops.",
              keywords: ["smaller fraction", "larger share", "raising the share", "rises above threshold"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Incorrect thermistor behaviour or reversed circuit placement." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies falling resistance and/or fixed resistor placement without microscopic carrier explanation." },
            { band: "3", marks: [3, 3], descriptor: "Correct placement and voltage-sharing logic, partial microscopic mechanism." },
            {
              band: "4",
              marks: [4, 4],
              descriptor: "Complete link from semiconductor charge-carrier generation to falling R, series potential sharing, and fixed-resistor trigger placement.",
            },
          ],
        },
        {
          id: "b2-circuits-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "potential-dividers-sensors",
          strategy: "Loaded potentiometer wire",
          question:
            "A uniform 1.00 m potentiometer wire of total resistance 30 Ω is wired across an ideal 12.0 V supply. A sliding contact is set at the exact midpoint (50 cm from the 0 V end), and a 30 Ω load resistor is connected between the slider and the 0 V end. Calculate the potential difference across the 30 Ω load in V.",
          answer: { type: "number", value: 4.8, tolerance: 0.05, display: "4.8 V" },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "6.0 V is the unloaded midpoint voltage — remember the 30 Ω load sits in parallel with the bottom 15 Ω half of the wire!",
            },
          ],
          hints: [
            "At the midpoint, the wire splits into a 15 Ω top half and a 15 Ω bottom half.",
            "Combine the 15 Ω bottom half in parallel with the 30 Ω load: {{R_(\"eff\") = (15 * 30)/(15 + 30) = 10}} Ω.",
            "Apply the divider equation with 15 Ω on top and 10 Ω on the bottom.",
          ],
          solution: [
            "Top half = 15 Ω; bottom half = 15 Ω.",
            "Bottom section with parallel 30 Ω load: {{R_(\"eff\") = (15 * 30)/(15 + 30) = 10}} Ω.",
            "{{V_(\"load\") = 12.0 * 10 / (15 + 10) = 120 / 25 = 4.8}} V.",
          ],
        },
        {
          id: "b2-circuits-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "potential-dividers-sensors",
          strategy: "Potential divider powered by a real cell",
          question:
            "A battery of EMF 24 V and internal resistance 2.0 Ω powers a potential divider made of {{R_1 = 6.0}} Ω and {{R_2 = 4.0}} Ω in series (with no external load). Calculate the potential difference across {{R_2}} in V.",
          answer: { type: "number", value: 8, tolerance: 0.05, display: "8.0 V" },
          traps: [
            {
              spec: { type: "number", value: 9.6 },
              feedback: "9.6 V forgets that internal resistance {{r = 2.0}} Ω drops 4.0 V internally before the supply even reaches the divider!",
            },
          ],
          hints: [
            "Treat internal resistance {{r = 2.0}} Ω as a third series resistor in the loop.",
            "Total resistance is {{2.0 + 6.0 + 4.0 = 12.0}} Ω, so find {{I = 24 / 12.0}} and then {{V_2 = I R_2}}.",
          ],
          solution: [
            "Total loop resistance {{R_(\"tot\") = 2.0 + 6.0 + 4.0 = 12.0}} Ω.",
            "Current {{I = 24 / 12.0 = 2.0}} A.",
            "Output p.d. across {{R_2}}: {{V_2 = 2.0 * 4.0 = 8.0}} V.",
          ],
        },
        {
          id: "b2-circuits-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "potential-dividers-sensors",
          strategy: "Open-circuit diagnostic reasoning",
          question:
            "Two identical bulbs A and B are wired in series across an ideal 6.0 V battery. Bulb B's filament breaks (creating an open circuit). Deduce what an ideal voltmeter reads across bulb A and across bulb B, justifying both readings.",
          marks: 3,
          hints: [
            "What is the series current once bulb B's filament snaps?",
            "Apply {{V_A = I R_A}} for intact bulb A, then Kirchhoff's loop rule for broken bulb B.",
          ],
          modelAnswer:
            "With the broken filament stopping all charge flow, circuit current drops to zero everywhere. Across intact bulb A, Ohm's law V = IR gives 0 × R = 0 V. By Kirchhoff's loop rule (V_A + V_B = 6.0 V), the entire supply potential of 6.0 V therefore appears across the open break at bulb B.",
          markScheme: [
            {
              point: "Current everywhere in the series loop drops to 0 A due to the break.",
              keywords: ["zero", "0 a", "stops", "stopping all charge"],
            },
            {
              point: "Voltmeter across intact bulb A reads 0 V because V_A = I R_A = 0.",
              keywords: ["0 v", "v = ir", "0 × r"],
            },
            {
              point: "Voltmeter across broken bulb B reads the full 6.0 V by Kirchhoff's loop rule.",
              keywords: ["6.0 v", "full", "loop rule", "entire supply"],
            },
          ],
        },
        {
          id: "b2-circuits-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "emf-internal-resistance",
          strategy: "Engineering trade-off: maximum power vs efficiency",
          question:
            "A 24 V battery pack with internal resistance 0.60 Ω can either drive a rapid high-power medical actuator or supply steady backup lighting. State the load resistance required for maximum power transfer, calculate the maximum load power and efficiency at that point, and evaluate the trade-off between maximum power transfer and maximum electrical efficiency.",
          marks: 6,
          hints: [
            "Set {{R = r = 0.60}} Ω to find {{P_(\"max\") = ε^2 / (4r)}}.",
            "Evaluate efficiency {{η = R / (R + r)}} both at {{R = r}} and for {{R ≫ r}}.",
            "Discuss internal heating vs rapid energy delivery for the two engineering contexts.",
          ],
          modelAnswer:
            "Maximum load power occurs when external resistance matches internal resistance, R = r = 0.60 Ω. At this matched load, current is I = 24 / (0.60 + 0.60) = 20 A, giving P_max = I²R = 20² × 0.60 = 240 W (equivalently ε²/4r = 576 / 2.4 = 240 W). Efficiency η = R / (R + r) equals 50%, meaning an equal 240 W is wasted as internal battery heat. Achieving high efficiency (approaching 100%) requires R ≫ r so internal heating I²r becomes negligible, though total delivered power drops well below 240 W. Engineers therefore choose R ≈ r for short bursts needing peak power (e.g. actuators or audio matching), whereas steady backup lighting and national grids require R ≫ r to conserve battery energy and prevent overheating.",
          markScheme: [
            {
              point: "States maximum power transfer condition R = r = 0.60 Ω.",
              keywords: ["0.60 ω", "r = r", "matches internal"],
            },
            {
              point: "Calculates maximum load power as 240 W.",
              keywords: ["240 w", "240"],
            },
            {
              point: "Determines efficiency at maximum power as 50% (equal internal heating of 240 W).",
              keywords: ["50%", "half", "0.5"],
            },
            {
              point: "Identifies that high efficiency requires R ≫ r (from η = R/(R+r)), minimizing internal I²r heating.",
              keywords: ["r ≫ r", "r >> r", "much larger", "negligible"],
            },
            {
              point: "Recognizes the trade-off: high efficiency yields lower load power, while peak power wastes half the energy as heat.",
              keywords: ["trade-off", "below 240", "overheating", "wasted as internal"],
            },
            {
              point: "Matches each regime appropriately to the two applications (peak bursts vs long-duration backup lighting).",
              keywords: ["short bursts", "backup lighting", "conserve battery", "peak power"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid physics or calculations." },
            { band: "1–2", marks: [1, 2], descriptor: "States R = r or calculates P_max with minimal efficiency discussion." },
            { band: "3–4", marks: [3, 4], descriptor: "Correct 240 W and 50% values plus basic explanation of R ≫ r for high efficiency." },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Accurate quantitative results (0.60 Ω, 240 W, 50%) integrated into a balanced engineering evaluation comparing peak-power bursts against efficient continuous delivery and thermal limits.",
              indicators: ["Explicitly contrasts internal heat dissipation at 50% efficiency against R ≫ r low-loss operation"],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 IB EXTENSION / SYNTHESIS PROBLEMS)
  // ===========================================================================
  challenge: [
    {
      id: "b2-circuits-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "current-pd-ohm",
      strategy: "Constant-volume diameter scaling (R ∝ 1/d⁴)",
      question:
        "A cylindrical aluminium wire of resistance 4.0 Ω is melted and recast (at constant volume and resistivity) into a uniform wire with half the original diameter. Calculate the resistance of the recast wire in Ω.",
      answer: { type: "number", value: 64, tolerance: 0.5, display: "64 Ω" },
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "16 Ω only accounts for the 4× smaller area — constant volume ALSO makes the wire 4× longer!",
        },
      ],
      hints: [
        "Halving diameter reduces cross-sectional area {{A = π d^2 / 4}} by a factor of 4.",
        "Because metal volume {{V = A L}} is unchanged, dividing {{A}} by 4 multiplies length {{L}} by 4.",
        "Substitute {{4 L}} and {{A / 4}} into {{R = ρ L / A}}.",
      ],
      solution: [
        "Halving diameter scales area to {{A' = A / 4}}.",
        "Constant volume {{A' L' = A L}} forces {{L' = 4 L}}.",
        "{{R' = ρ(4 L) / (A / 4) = 16 (ρ L / A) = 16 * 4.0 = 64}} Ω.",
      ],
    },
    {
      id: "b2-circuits-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "series-parallel-kirchhoff",
      strategy: "Exploiting Wheatstone bridge symmetry",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 185" role="img" aria-label="Wheatstone bridge between A and B: top branch 3.0 ohm and 6.0 ohm, bottom branch 6.0 ohm and 12.0 ohm, middle bridge 7.0 ohm, powered by 36 V">' +
        '<rect x="0" y="0" width="420" height="185" fill="#ffffff" rx="6"/>' +
        // Diamond/rectangular bridge from A(75,92) to B(345,92)
        '<line x1="32" y1="92" x2="75" y2="92" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="345" y1="92" x2="388" y2="92" stroke="#1e293b" stroke-width="2.2"/>' +
        '<circle cx="75" cy="92" r="4" fill="#dc2626"/>' +
        '<circle cx="345" cy="92" r="4" fill="#dc2626"/>' +
        '<text x="58" y="84" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">A</text>' +
        '<text x="362" y="84" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">B</text>' +
        // Top branch through X(210,36)
        '<line x1="75" y1="92" x2="75" y2="36" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="75" y1="36" x2="108" y2="36" stroke="#1e293b" stroke-width="2.2"/>' +
        '<rect x="108" y="24" width="60" height="24" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="3"/>' +
        '<text x="138" y="40" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">3.0 Ω</text>' +
        '<line x1="168" y1="36" x2="252" y2="36" stroke="#1e293b" stroke-width="2.2"/>' +
        '<rect x="252" y="24" width="60" height="24" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="3"/>' +
        '<text x="282" y="40" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">6.0 Ω</text>' +
        '<line x1="312" y1="36" x2="345" y2="36" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="345" y1="36" x2="345" y2="92" stroke="#1e293b" stroke-width="2.2"/>' +
        // Bottom branch through Y(210,148)
        '<line x1="75" y1="92" x2="75" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="75" y1="148" x2="108" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
        '<rect x="108" y="136" width="60" height="24" fill="#f0fdf4" stroke="#15803d" stroke-width="2" rx="3"/>' +
        '<text x="138" y="152" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">6.0 Ω</text>' +
        '<line x1="168" y1="148" x2="252" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
        '<rect x="252" y="136" width="60" height="24" fill="#f0fdf4" stroke="#15803d" stroke-width="2" rx="3"/>' +
        '<text x="282" y="152" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">12.0 Ω</text>' +
        '<line x1="312" y1="148" x2="345" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="345" y1="148" x2="345" y2="92" stroke="#1e293b" stroke-width="2.2"/>' +
        // Middle vertical 7.0 ohm bridge X to Y
        '<line x1="210" y1="36" x2="210" y2="66" stroke="#1e293b" stroke-width="2.2"/>' +
        '<rect x="184" y="66" width="52" height="52" fill="#fffbeb" stroke="#d97706" stroke-width="2" rx="3"/>' +
        '<text x="210" y="96" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">7.0 Ω</text>' +
        '<line x1="210" y1="118" x2="210" y2="148" stroke="#1e293b" stroke-width="2.2"/>' +
        '<circle cx="210" cy="36" r="3.5" fill="#1e293b"/>' +
        '<circle cx="210" cy="148" r="3.5" fill="#1e293b"/>' +
        '<text x="210" y="20" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#475569" text-anchor="middle">X</text>' +
        '<text x="210" y="172" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#475569" text-anchor="middle">Y</text>' +
        '<text x="22" y="110" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#2563eb">36 V</text>' +
        "</svg>",
      question:
        "An ideal 36 V battery is connected across terminals A and B of the 5-resistor bridge network shown. Calculate the total electrical power dissipated in the entire network in W.",
      answer: { type: "number", value: 216, tolerance: 1, display: "216 W" },
      hints: [
        "Check the resistance ratio of the top branch ({{3.0 / 6.0}}) against the bottom branch ({{6.0 / 12.0}}).",
        "Because the bridge is balanced, {{V_X = V_Y}} and zero current passes through the central 7.0 Ω resistor!",
        "Collapse the top branch (9.0 Ω) in parallel with the bottom branch (18.0 Ω) to get {{R_(\"AB\") = 6.0}} Ω, then compute {{P = V^2 / R_(\"AB\")}}.",
      ],
      solution: [
        "Ratio check: {{3.0 / 6.0 = 6.0 / 12.0 = 1/2}}, so nodes X and Y are at equal potential and the 7.0 Ω bridge carries 0 A.",
        "Removing the 7.0 Ω branch leaves 9.0 Ω in parallel with 18.0 Ω: {{R_(\"AB\") = (9.0 * 18.0)/(9.0 + 18.0) = 6.0}} Ω.",
        "Total power: {{P = 36^2 / 6.0 = 1296 / 6.0 = 216}} W.",
      ],
    },
    {
      id: "b2-circuits-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "emf-internal-resistance",
      strategy: "Equal power at two distinct loads",
      question:
        "A real battery delivers exactly 18.0 W to a 2.0 Ω external resistor, and also delivers exactly 18.0 W when connected to an 8.0 Ω external resistor instead. Calculate the EMF {{ε}} of the battery in V.",
      answer: { type: "number", value: 18, tolerance: 0.1, display: "18.0 V" },
      hints: [
        "Find the current for each load directly from {{P = I^2 R}}: {{I_1 = sqrt(18.0 / 2.0) = 3.0}} A and {{I_2 = sqrt(18.0 / 8.0) = 1.5}} A.",
        "Set {{ε = 3.0(2.0 + r) = 1.5(8.0 + r)}} to find {{r = 4.0}} Ω.",
        "Substitute {{r = 4.0}} Ω back to find {{ε}}.",
      ],
      solution: [
        "For {{R_1 = 2.0}} Ω: {{I_1 = sqrt(18.0 / 2.0) = 3.0}} A.",
        "For {{R_2 = 8.0}} Ω: {{I_2 = sqrt(18.0 / 8.0) = 1.5}} A.",
        "Equate EMFs: {{3.0(2.0 + r) = 1.5(8.0 + r)}} → {{6.0 + 3.0 r = 12.0 + 1.5 r}} → {{r = 4.0}} Ω (note {{r = sqrt(R_1 R_2)}}!).",
        "Therefore {{ε = 3.0(2.0 + 4.0) = 18.0}} V.",
      ],
    },
    {
      id: "b2-circuits-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "series-parallel-kirchhoff",
      strategy: "Collapse ladder right-to-left, unfold left-to-right",
      question:
        "A multi-stage resistor ladder is powered by an ideal 20.0 V supply. Leaving the supply in series is a 2.0 Ω resistor, followed by a vertical 6.0 Ω shunt resistor in parallel with the rest of the ladder. Continuing right is a series 3.0 Ω resistor, followed by a vertical 4.0 Ω shunt resistor in parallel with a final right-hand branch containing two 6.0 Ω resistors in series. Calculate the current (in A) through those far-right 6.0 Ω resistors.",
      answer: { type: "number", value: 0.5, tolerance: 0.01, display: "0.50 A" },
      hints: [
        "Work right to left: two 6.0 Ω in series (12 Ω) in parallel with 4.0 Ω gives {{R_1 = 3.0}} Ω.",
        "Add the 3.0 Ω series resistor (6.0 Ω), put in parallel with the 6.0 Ω shunt ({{R_2 = 3.0}} Ω), then add the input 2.0 Ω ({{R_(\"tot\") = 5.0}} Ω).",
        "Unfold left to right: {{I_(\"tot\") = 4.0}} A splits 50/50 at the first junction (2.0 A continues right), then divides 3:1 across 4.0 Ω and 12.0 Ω.",
      ],
      solution: [
        "Far-right parallel block: {{(12.0 * 4.0)/(12.0 + 4.0) = 3.0}} Ω.",
        "Add 3.0 Ω series → 6.0 Ω; parallel with 6.0 Ω shunt → 3.0 Ω; add 2.0 Ω input → {{R_(\"tot\") = 5.0}} Ω.",
        "Total supply current {{I_(\"tot\") = 20.0 / 5.0 = 4.0}} A. At the 6.0 Ω || 6.0 Ω split, 2.0 A flows right.",
        "Potential across the far-right 3.0 Ω block is {{2.0 * 3.0 = 6.0}} V, so current in the 12.0 Ω end branch is {{6.0 / 12.0 = 0.50}} A.",
      ],
    },
    {
      id: "b2-circuits-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "emf-internal-resistance",
      strategy: "Parallel unequal real batteries under load",
      question:
        "A weak car battery ({{ε_1 = 12.6}} V, {{r_1 = 0.050}} Ω) is jump-started by connecting a booster battery ({{ε_2 = 14.4}} V, {{r_2 = 0.050}} Ω) directly in parallel across its terminals (`+` to `+`, `−` to `−`). While both batteries simultaneously power a 0.10 Ω starter motor across their shared terminals, calculate the terminal voltage {{V}} across the starter motor in V.",
      answer: { type: "number", value: 10.8, tolerance: 0.05, display: "10.8 V" },
      hints: [
        "Let {{V}} be the shared terminal voltage across both batteries and the 0.10 Ω starter motor.",
        "Write currents supplied by each battery: {{I_1 = (12.6 - V)/0.050}} and {{I_2 = (14.4 - V)/0.050}}.",
        "By Kirchhoff's junction rule, {{I_1 + I_2 = V / 0.10}}. Multiply through by 0.10 and solve for {{V}}.",
      ],
      solution: [
        "By KCL at the positive bus: {{(12.6 - V)/0.050 + (14.4 - V)/0.050 = V / 0.10}}.",
        "Multiply by 0.10: {{2(12.6 - V) + 2(14.4 - V) = V}} → {{25.2 + 28.8 = 5 V}}.",
        "{{5 V = 54.0}} → {{V = 10.8}} V (booster delivers 72 A, car battery 36 A, total 108 A into the starter).",
      ],
    },
    {
      id: "b2-circuits-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "potential-dividers-sensors",
      strategy: "Loaded sensor potential divider shift",
      question:
        "A 14.0 V ideal supply powers a potential divider consisting of a fixed top resistor {{R_1 = 1.0}} kΩ and a bottom NTC thermistor whose resistance is 2.0 kΩ at 20 °C and 0.50 kΩ at 60 °C. A permanent 2.0 kΩ load resistor is wired in parallel across the thermistor. Calculate the drop in output voltage ({{V_20 - V_60}}) in V as temperature rises from 20 °C to 60 °C.",
      answer: { type: "number", value: 3, tolerance: 0.05, display: "3.0 V" },
      hints: [
        "At 20 °C, combine the 2.0 kΩ thermistor in parallel with the 2.0 kΩ load ({{R_(\"eff\") = 1.0}} kΩ) and find {{V_20}}.",
        "At 60 °C, combine 0.50 kΩ in parallel with 2.0 kΩ ({{R_(\"eff\") = 0.40}} kΩ) and find {{V_60}}.",
        "Subtract {{V_60}} from {{V_20}}.",
      ],
      solution: [
        "At 20 °C: {{R_(\"eff\") = (2.0 * 2.0)/(2.0 + 2.0) = 1.0}} kΩ → {{V_20 = 14.0 * 1.0 / (1.0 + 1.0) = 7.0}} V.",
        "At 60 °C: {{R_(\"eff\") = (0.50 * 2.0)/(0.50 + 2.0) = 0.40}} kΩ → {{V_60 = 14.0 * 0.40 / (1.0 + 0.40) = 4.0}} V.",
        "Output voltage drop: {{V_20 - V_60 = 7.0 - 4.0 = 3.0}} V.",
      ],
    },
    {
      id: "b2-circuits-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Derive",
      guideRef: "emf-internal-resistance",
      strategy: "Algebraic proof of maximum power transfer",
      question:
        "Starting from {{ε = I(R + r)}} and {{P = I^2 R}}, prove that the power dissipated in an external load {{R}} reaches its maximum when {{R = r}}, deduce the exact expression for {{P_(\"max\")}}, and prove that the electrical transfer efficiency at this peak is always 50%.",
      marks: 5,
      hints: [
        "Substitute {{I = ε / (R + r)}} into {{P = I^2 R}} to write {{P}} solely in terms of {{ε}}, {{R}}, and {{r}}.",
        "Rewrite the denominator using {{(R + r)^2 = (R - r)^2 + 4 R r}} (or differentiate {{dP / dR = 0}}).",
        "Evaluate both {{P}} and {{η = R / (R + r)}} at {{R = r}}.",
      ],
      modelAnswer:
        "Substituting I = ε / (R + r) into load power gives P = ε²R / (R + r)². Expanding and rewriting the denominator via (R + r)² = (R − r)² + 4Rr yields P = ε² / [(R − r)²/R + 4r]. Because (R − r)²/R is always non-negative, the denominator achieves its absolute minimum value of 4r precisely when (R − r) = 0, i.e., when R = r. Substituting R = r gives P_max = ε² / (4r). Finally, transfer efficiency η = P_load / P_total = I²R / [I²(R + r)] = R / (R + r), which equals r / (2r) = 0.50 or 50% regardless of ε.",
      markScheme: [
        {
          point: "Substitutes I = ε/(R + r) to obtain P = ε²R / (R + r)².",
          keywords: ["ε²r", "ε^2", "(r + r)²", "(r + r)^2"],
        },
        {
          point: "Uses algebraic completion (R − r)² + 4Rr OR calculus dP/dR = 0 validly.",
          keywords: ["(r − r)²", "(r - r)^2", "4rr", "dp/dr"],
        },
        {
          point: "Shows extremum/minimum denominator occurs strictly when R = r.",
          keywords: ["minimum", "r = r", "zero", "non-negative"],
        },
        {
          point: "Obtains exact peak power expression P_max = ε² / (4r).",
          keywords: ["ε² / (4r)", "ε^2 / (4r)", "4r"],
        },
        {
          point: "Proves efficiency η = R / (R + r) = r / (2r) = 0.50 (50%).",
          keywords: ["r / (2r)", "50%", "0.50", "r / (r + r)"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid derivation steps." },
        { band: "1–2", marks: [1, 2], descriptor: "Writes P = ε²R/(R+r)² or states results without proof." },
        { band: "3–4", marks: [3, 4], descriptor: "Completes algebraic/calculus proof of R = r and P_max with incomplete efficiency proof." },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Rigorous step-by-step derivation of R = r, P_max = ε²/(4r), and universal 50% efficiency.",
        },
      ],
    },
    {
      id: "b2-circuits-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "current-pd-ohm",
      strategy: "Series combination of ohmic and non-ohmic components",
      question:
        "A tungsten filament lamp and an ohmic fixed resistor are connected in series across a variable DC supply whose voltage is slowly raised from 0 V to 12 V. Analyse how the fraction of the supply voltage across the lamp changes as supply voltage rises, and describe how the combined series I–V graph compares with the straight-line I–V graph of the fixed resistor alone.",
      marks: 5,
      hints: [
        "How does {{R_(\"lamp\")}} change relative to constant {{R_(\"fixed\")}} as current increases?",
        "Use the potential divider fraction {{V_(\"lamp\") / V_(\"supply\") = R_(\"lamp\") / (R_(\"lamp\") + R_(\"fixed\"))}}.",
        "For any given voltage {{V}}, compare total series resistance {{R_(\"lamp\") + R_(\"fixed\")}} against {{R_(\"fixed\")}} alone to place the combined curve.",
      ],
      modelAnswer:
        "As the supply ramps up from 0 V to 12 V, rising current heats the tungsten filament, amplifying lattice vibrations so R_lamp increases while R_fixed stays unchanged. Because the series voltage share across the lamp equals R_lamp / (R_lamp + R_fixed) = 1 / (1 + R_fixed / R_lamp), growing R_lamp forces the lamp to claim an increasingly larger proportion of the total supply voltage. Meanwhile, total resistance (R_lamp + R_fixed) always exceeds R_fixed and climbs with current. Consequently, the combined I–V plot starts at the origin, lies strictly below the straight line of the resistor alone at every positive voltage, and bends progressively downward (decreasing slope) as voltage grows.",
      markScheme: [
        {
          point: "Identifies that heating raises R_lamp while R_fixed remains constant.",
          keywords: ["r_lamp increases", "heats", "remains constant", "unchanged"],
        },
        {
          point: "Applies series potential sharing R_lamp / (R_lamp + R_fixed) to show the lamp's voltage fraction increases.",
          keywords: ["proportion", "voltage share", "larger", "fraction"],
        },
        {
          point: "Notes total resistance R_lamp + R_fixed is always greater than R_fixed alone.",
          keywords: ["exceeds", "greater than", "total resistance"],
        },
        {
          point: "Deduces the combined I–V curve passes through the origin and lies below the fixed-resistor straight line.",
          keywords: ["below the straight line", "strictly below", "origin"],
        },
        {
          point: "Describes the combined curve bending downward (flattening / decreasing gradient) at higher voltages.",
          keywords: ["downward", "flattening", "decreasing slope", "bends"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant analysis of series non-ohmic behaviour." },
        { band: "1–2", marks: [1, 2], descriptor: "States lamp heats up and resistance rises without analysing voltage fraction or combined graph." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly deduces rising voltage share across lamp and qualitative flattening of combined I–V plot." },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Full quantitative/algebraic justification of the rising lamp voltage fraction plus accurate placement and curvature of the combined I–V graph relative to the resistor alone.",
        },
      ],
    },
  ],
};
