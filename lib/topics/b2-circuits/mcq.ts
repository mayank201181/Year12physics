import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: CURRENT, OHM'S LAW & KIRCHHOFF BASICS
  // ===========================================================================
  {
    id: "b2-circuits-m1",
    title: "Paper 1A · Set 1: Current, Ohm's Law & Kirchhoff Basics",
    level: "SL",
    questions: [
      {
        id: "b2-circuits-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Charge conservation & SI time conversion",
        question:
          "A steady current of 2.5 A flows through a lamp for 4.0 minutes. What is the total electric charge that passes through the lamp?",
        options: ["600 C", "10 C", "96 C", "150 C"],
        answerIndex: 0,
        hints: [
          "Recall that electric current is the rate of charge flow: {{I = Δq / Δt}}.",
          "Convert 4.0 minutes into SI base seconds ({{4.0 * 60 = 240}} s) before multiplying by 2.5 A.",
        ],
        explanation:
          "Convert time to seconds first: {{Δt = 4.0 * 60 = 240}} s. Then {{Δq = I Δt = 2.5 * 240 = 600}} C. Forgetting to convert minutes to seconds gives the tempting trap of 10 C.",
      },
      {
        id: "b2-circuits-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Definition of potential difference",
        question:
          "How much electrical energy is transferred to thermal energy when 4.0 C of charge passes through a resistor with a potential difference of 15 V across it?",
        options: ["3.75 J", "60 J", "19 J", "240 J"],
        answerIndex: 1,
        hints: [
          "Potential difference is energy transferred per unit charge: {{V = W / q}}.",
          "Rearrange to {{W = V q}} and substitute 15 V and 4.0 C.",
        ],
        explanation:
          "Since {{V = W / q}}, the energy transferred is {{W = V q = 15 * 4.0 = 60}} J. Dividing 15 by 4.0 gives 3.75 J, which confuses the equation with {{W = V / q}}.",
      },
      {
        id: "b2-circuits-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "current-pd-ohm",
        strategy: "Drift velocity proportionality",
        question:
          "Two copper wires P and Q are joined end-to-end in series and carry the same steady current. Wire Q has twice the diameter of wire P. What is the ratio {{v_Q / v_P}} of the mean electron drift speeds?",
        options: ["4.0", "2.0", "0.25", "0.50"],
        answerIndex: 2,
        hints: [
          "Both wires are copper (same {{n}} and {{q}}) and in series (same {{I}}). Use {{I = n A v q}}.",
          "How does cross-sectional area {{A = π d^2 / 4}} change when diameter doubles?",
          "Since {{A_Q = 4 A_P}} and {{v ∝ 1 / A}}, find {{v_Q / v_P}}.",
        ],
        explanation:
          "From {{I = n A v q}} with identical {{I}}, {{n}}, and {{q}}, drift speed satisfies {{v ∝ 1/A ∝ 1/d^2}}. Doubling the diameter quadruples the area, so the electrons drift at one quarter the speed: {{v_Q / v_P = 0.25}}. Choosing 0.50 forgets that area depends on diameter squared.",
      },
      {
        id: "b2-circuits-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "current-pd-ohm",
        strategy: "Point-ratio definition of resistance",
        question:
          "At a potential difference of 8.0 V, the current in a filament lamp is 0.50 A, and the tangent to its I–V graph at that point has a gradient of 0.025 A V⁻¹. What is the resistance of the lamp at 8.0 V?",
        options: ["40 Ω", "4.0 Ω", "0.20 Ω", "16 Ω"],
        answerIndex: 3,
        hints: [
          "Does resistance on a non-ohmic I–V curve depend on the local tangent slope or on the coordinates {{(V, I)}}?",
          "Apply the fundamental definition {{R = V / I}} directly at the operating point.",
        ],
        explanation:
          "Resistance at any point on an I–V graph is ALWAYS the coordinate ratio {{R = V / I = 8.0 / 0.50 = 16}} Ω. Taking the reciprocal of the tangent gradient ({{1 / 0.025 = 40}} Ω) is a classic IB trap that gives differential resistance, not the component's actual resistance.",
      },
      {
        id: "b2-circuits-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Resistivity geometric scaling",
        question:
          "Wire X of length {{L}} and diameter {{d}} has a resistance of 12 Ω. Wire Y, made from the same alloy at the same temperature, has length {{3L}} and diameter {{2d}}. What is the resistance of wire Y?",
        options: ["18 Ω", "9.0 Ω", "6.0 Ω", "4.5 Ω"],
        answerIndex: 1,
        hints: [
          "Write {{R = ρ L / A}} with {{A = π d^2 / 4}}, so {{R ∝ L / d^2}}.",
          "Tripling length multiplies {{R}} by 3; doubling diameter divides {{R}} by {{2^2 = 4}}.",
        ],
        explanation:
          "Since {{R ∝ L / d^2}}, scaling length by 3 and diameter by 2 multiplies resistance by {{3 / 2^2 = 3/4}}. Thus {{R_Y = (3/4) * 12 = 9.0}} Ω. Getting 18 Ω comes from dividing by 2 instead of {{2^2}}.",
      },
      {
        id: "b2-circuits-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "current-pd-ohm",
        strategy: "Constant-volume stretching",
        question:
          "A uniform metal wire of resistance 5.0 Ω is drawn uniformly through a die until its length triples, with no change in volume or resistivity. What is its new resistance?",
        options: ["10 Ω", "15 Ω", "45 Ω", "25 Ω"],
        answerIndex: 2,
        hints: [
          "Volume {{A L}} stays constant as the wire is stretched.",
          "If {{L}} triples, the cross-sectional area {{A}} must shrink to {{A / 3}}.",
          "Substitute {{3L}} and {{A / 3}} into {{R = ρ L / A}}.",
        ],
        explanation:
          "Because volume {{A L}} is conserved, tripling the length divides the cross-sectional area by 3. Therefore {{R' = ρ(3L)/(A/3) = 9 ρ L / A = 9 * 5.0 = 45}} Ω. Choosing 15 Ω ignores the simultaneous thinning of the wire.",
      },
      {
        id: "b2-circuits-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Conservation principles behind Kirchhoff's laws",
        question:
          "Which pairing correctly states the conservation laws underlying Kirchhoff's first (junction) law and second (loop) law?",
        options: [
          "Junction: conservation of energy; Loop: conservation of charge",
          "Junction: conservation of momentum; Loop: conservation of energy",
          "Junction: conservation of charge; Loop: conservation of power",
          "Junction: conservation of charge; Loop: conservation of energy",
        ],
        answerIndex: 3,
        hints: [
          "Current is charge per second, so {{ΣI = 0}} at a node prevents charge from accumulating or vanishing.",
          "Potential difference is energy per coulomb, so {{ΣV = 0}} around a loop balances energy gained and lost.",
        ],
        explanation:
          "Kirchhoff's junction rule ({{ΣI = 0}}) expresses conservation of electric charge, while Kirchhoff's loop rule ({{ΣV = 0}}) expresses conservation of energy around any closed path. Swapping the two is a common memory slip.",
      },
      {
        id: "b2-circuits-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Inside-out network reduction",
        question:
          "Three identical 6.0 Ω resistors are wired so that two are in parallel with each other, and this parallel pair is in series with the third resistor. What is the equivalent resistance of the network?",
        options: ["9.0 Ω", "18 Ω", "2.0 Ω", "4.0 Ω"],
        answerIndex: 0,
        hints: [
          "First find the equivalent resistance of two identical 6.0 Ω resistors in parallel.",
          "Add the third 6.0 Ω resistor in series with that parallel result.",
        ],
        explanation:
          "Two 6.0 Ω resistors in parallel give {{R_p = 6.0 / 2 = 3.0}} Ω. Adding the third 6.0 Ω resistor in series gives {{R_(\"tot\") = 3.0 + 6.0 = 9.0}} Ω. By contrast, 2.0 Ω is all three in parallel and 18 Ω is all three in series.",
      },
      {
        id: "b2-circuits-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Inverse-resistance current division",
        question:
          "A 4.0 Ω resistor and a 12.0 Ω resistor are connected in parallel, and a total current of 4.0 A enters the combination. What is the current through the 4.0 Ω resistor?",
        options: ["1.0 A", "2.0 A", "3.0 A", "3.5 A"],
        answerIndex: 2,
        hints: [
          "Both resistors share the same potential difference, so the smaller resistance carries the larger share of current.",
          "Find {{R_p = (4.0 * 12.0)/(4.0 + 12.0) = 3.0}} Ω, then compute {{V = I R_p}} and {{I_4 = V / 4.0}}.",
        ],
        explanation:
          "The equivalent parallel resistance is {{R_p = (4.0 * 12.0)/(4.0 + 12.0) = 3.0}} Ω, so the shared p.d. is {{V = 4.0 * 3.0 = 12}} V. Hence {{I_4 = 12 / 4.0 = 3.0}} A (with 1.0 A flowing in the 12.0 Ω branch; picking 1.0 A confuses the two branches).",
      },
      {
        id: "b2-circuits-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "emf-internal-resistance",
        strategy: "IB definition of EMF vs p.d.",
        question:
          "Which statement accurately defines the electromotive force (EMF) of an electrical cell?",
        options: [
          "The electrostatic force pushing each free electron around an open circuit loop",
          "The electrical energy converted into thermal energy per unit charge across the load",
          "The maximum electrical power delivered to an external resistor during a short circuit",
          "The non-electrical energy converted to electrical energy per unit charge by the cell",
        ],
        answerIndex: 3,
        hints: [
          "Despite the word 'force' in its historical name, EMF is measured in volts (joules per coulomb), not newtons.",
          "Focus on the direction of energy conversion inside the source: chemical (non-electrical) → electrical.",
        ],
        explanation:
          "EMF ({{ε}}) is defined as the total non-electrical energy (such as chemical energy) converted to electrical energy per unit charge passing through the source. Energy transferred *out* of electrical form across the load defines potential difference, not EMF.",
      },
      {
        id: "b2-circuits-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "Terminal p.d. equation",
        question:
          "A battery of EMF 6.0 V and internal resistance 0.50 Ω supplies a steady current of 2.4 A to an external circuit. What is the terminal potential difference across the battery?",
        options: ["4.8 V", "7.2 V", "3.6 V", "5.5 V"],
        answerIndex: 0,
        hints: [
          "Calculate the lost volts {{I r}} dropped across the internal resistance.",
          "Subtract lost volts from the EMF using {{V = ε - I r}}.",
        ],
        explanation:
          "The lost volts across the internal resistance are {{I r = 2.4 * 0.50 = 1.2}} V, leaving terminal p.d. {{V = 6.0 - 1.2 = 4.8}} V. Adding 1.2 V to get 7.2 V applies only when a cell is being *charged*, not discharged.",
      },
      {
        id: "b2-circuits-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "emf-internal-resistance",
        strategy: "Interpreting intercepts of a V–I graph",
        question:
          "A linear graph of terminal potential difference {{V}} against current {{I}} for a real cell has a vertical-axis intercept of 1.50 V and a horizontal-axis intercept of 3.0 A. What are the EMF and internal resistance of the cell?",
        options: [
          "EMF = 1.50 V and internal resistance = 2.0 Ω",
          "EMF = 1.50 V and internal resistance = 0.50 Ω",
          "EMF = 3.0 V and internal resistance = 0.50 Ω",
          "EMF = 1.50 V and internal resistance = 4.5 Ω",
        ],
        answerIndex: 1,
        hints: [
          "Compare {{V = ε - I r}} with {{y = c + m x}}.",
          "The y-intercept gives {{ε}} directly, and the magnitude of the slope is {{r = ΔV / ΔI = ε / I_(\"sc\")}}.",
        ],
        explanation:
          "At {{I = 0}}, {{V = ε = 1.50}} V. At {{V = 0}}, {{I_(\"sc\") = ε / r = 3.0}} A, so {{r = 1.50 / 3.0 = 0.50}} Ω. Dividing 3.0 by 1.50 gives the reciprocal trap of 2.0 Ω.",
      },
      {
        id: "b2-circuits-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "potential-dividers-sensors",
        strategy: "Potential divider formula",
        question:
          "An ideal 12.0 V supply is connected across two resistors {{R_1 = 3.0}} kΩ and {{R_2 = 9.0}} kΩ in series. What is the unloaded potential difference across {{R_2}}?",
        options: ["9.0 V", "3.0 V", "4.0 V", "8.0 V"],
        answerIndex: 0,
        hints: [
          "Use {{V_2 = V_(\"in\") * R_2 / (R_1 + R_2)}}.",
          "Since {{R_2}} is three quarters of the total 12.0 kΩ resistance, it receives three quarters of 12.0 V.",
        ],
        explanation:
          "{{V_2 = 12.0 * 9.0 / (3.0 + 9.0) = 12.0 * 9.0 / 12.0 = 9.0}} V. Choosing 3.0 V gives the potential difference across {{R_1}} instead of {{R_2}}.",
      },
      {
        id: "b2-circuits-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "potential-dividers-sensors",
        strategy: "Cause-and-effect chain for NTC thermistor",
        question:
          "An NTC thermistor is wired in series with a fixed resistor across an ideal 6.0 V battery. As the temperature of the thermistor increases, what happens to the circuit current and the p.d. across the fixed resistor?",
        options: [
          "Current increases and p.d. across the fixed resistor decreases",
          "Current increases and p.d. across the fixed resistor increases",
          "Current decreases and p.d. across the fixed resistor increases",
          "Current decreases and p.d. across the fixed resistor decreases",
        ],
        answerIndex: 1,
        hints: [
          "Recall how an NTC (negative temperature coefficient) thermistor's resistance responds to rising temperature.",
          "Lower total resistance increases series current {{I}}, and for the fixed resistor {{V_(\"fixed\") = I R_(\"fixed\")}}.",
        ],
        explanation:
          "Warming an NTC thermistor decreases its resistance, lowering total circuit resistance and increasing the current {{I}}. Because {{R_(\"fixed\")}} is constant, {{V_(\"fixed\") = I R_(\"fixed\")}} increases (while {{V_(\"therm\")}} decreases so their sum stays 6.0 V).",
      },
      {
        id: "b2-circuits-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "current-pd-ohm",
        strategy: "Power at constant voltage",
        question:
          "Lamp A (rated 60 W at 240 V) and Lamp B (rated 120 W at 240 V) are connected in parallel across a 240 V supply. Which comparison of Lamp B relative to Lamp A is correct?",
        options: [
          "Lamp B has twice the resistance and carries half the current",
          "Lamp B has twice the resistance and carries twice the current",
          "Lamp B has half the resistance and carries twice the current",
          "Lamp B has half the resistance and carries half the current",
        ],
        answerIndex: 2,
        hints: [
          "In parallel, both lamps receive the same 240 V, so use {{P = V^2 / R}} and {{P = V I}}.",
          "Higher power at the same voltage requires a *smaller* resistance and a *larger* current.",
        ],
        explanation:
          "At 240 V, {{R = V^2 / P}}, so doubling rated power halves resistance ({{R_B = 480}} Ω vs {{R_A = 960}} Ω), and {{I = P / V}} doubles current ({{I_B = 0.50}} A vs {{I_A = 0.25}} A). Assuming higher wattage means higher resistance confuses parallel with series.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: NETWORKS, INTERNAL RESISTANCE & POWER
  // ===========================================================================
  {
    id: "b2-circuits-m2",
    title: "Paper 1A · Set 2: Networks, Internal Resistance & Power",
    level: "SL",
    questions: [
      {
        id: "b2-circuits-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Power ratio in series (same current)",
        question:
          "Two resistors with constant resistances {{R_A = 960}} Ω and {{R_B = 480}} Ω are connected in series across a 240 V supply. What is the ratio {{P_A / P_B}} of the powers dissipated in them?",
        options: ["0.25", "0.50", "1.0", "2.0"],
        answerIndex: 3,
        hints: [
          "In series, which electrical quantity is identical for both resistors?",
          "Use {{P = I^2 R}} so that {{I^2}} cancels out in the ratio {{P_A / P_B}}.",
        ],
        explanation:
          "Series resistors carry identical current {{I}}, so {{P = I^2 R}} gives {{P_A / P_B = R_A / R_B = 960 / 480 = 2.0}}. Picking 0.50 mistakenly applies the parallel constant-voltage formula {{P = V^2 / R}}.",
      },
      {
        id: "b2-circuits-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "current-pd-ohm",
        strategy: "Microscopic model of metallic resistance",
        question:
          "Which microscopic statement best explains why the resistance of a tungsten lamp filament increases as its temperature rises?",
        options: [
          "Positive lattice ions vibrate with larger amplitude, increasing electron collision frequency",
          "Free conduction electrons lose electric charge at high temperature, lowering total current",
          "The number density of free conduction electrons drops rapidly as thermal energy increases",
          "Thermal expansion shrinks the wire length dramatically while tripling its cross-sectional area",
        ],
        answerIndex: 0,
        hints: [
          "In a metal, free electron density {{n}} barely changes with temperature.",
          "Think about how hotter lattice ions impede the drift of conduction electrons.",
        ],
        explanation:
          "As temperature rises in a metal, positive lattice ions oscillate with greater amplitude, increasing the rate of scattering collisions with drifting electrons and increasing resistivity. Electron charge is invariant and metallic {{n}} stays virtually constant.",
      },
      {
        id: "b2-circuits-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Quantization of charge in current",
        question:
          "An electron beam produces a steady current of 3.2 mA. How many electrons strike the target every second? (Elementary charge {{e = 1.6 * 10^(-19)}} C.)",
        options: [
          "{{2.0 * 10^19}}",
          "{{2.0 * 10^16}}",
          "{{5.0 * 10^15}}",
          "{{5.1 * 10^(-22)}}",
        ],
        answerIndex: 1,
        hints: [
          "Convert 3.2 mA to amperes: {{3.2 * 10^(-3)}} A = {{3.2 * 10^(-3)}} C s⁻¹.",
          "Divide the charge per second by the charge of one electron, {{1.6 * 10^(-19)}} C.",
        ],
        explanation:
          "Number of electrons per second is {{N / t = I / e = (3.2 * 10^(-3)) / (1.6 * 10^(-19)) = 2.0 * 10^16}}. Getting {{2.0 * 10^19}} forgets the milli prefix ({{10^(-3)}}).",
      },
      {
        id: "b2-circuits-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Three-branch parallel reduction",
        question:
          "A 2.0 Ω resistor is connected in series with a parallel block made of three resistors: 6.0 Ω, 6.0 Ω, and 3.0 Ω. What is the total equivalent resistance?",
        options: ["17 Ω", "2.7 Ω", "3.5 Ω", "5.0 Ω"],
        answerIndex: 2,
        hints: [
          "Compute {{1 / R_p = 1/6.0 + 1/6.0 + 1/3.0}} using a common denominator of 6.",
          "Invert {{1 / R_p}} to obtain {{R_p}}, then add the 2.0 Ω series resistor.",
        ],
        explanation:
          "For the parallel block, {{1 / R_p = 1/6 + 1/6 + 2/6 = 4/6 = 2/3}}, so {{R_p = 1.5}} Ω. Adding the 2.0 Ω series resistor yields {{R_(\"tot\") = 2.0 + 1.5 = 3.5}} Ω. Forgetting to invert {{2/3}} produces the trap value {{2.0 + 0.67 ≈ 2.7}} Ω.",
      },
      {
        id: "b2-circuits-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Kirchhoff's junction rule",
        question:
          "Four wires meet at a circuit junction. Currents of 3.5 A and 1.8 A flow into the junction, while a current of 4.1 A flows out along the third wire. What is the current in the fourth wire?",
        options: [
          "1.2 A flowing into the junction",
          "1.2 A flowing out of the junction",
          "9.4 A flowing out of the junction",
          "2.4 A flowing into the junction",
        ],
        answerIndex: 1,
        hints: [
          "Sum all currents entering the junction and compare with currents leaving.",
          "Total entering is {{3.5 + 1.8 = 5.3}} A, which exceeds 4.1 A leaving.",
        ],
        explanation:
          "By Kirchhoff's junction rule, {{ΣI_(\"in\") = ΣI_(\"out\")}}. Total incoming current is {{3.5 + 1.8 = 5.3}} A, so the fourth wire must carry {{5.3 - 4.1 = 1.2}} A **out** of the junction to conserve charge.",
      },
      {
        id: "b2-circuits-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Non-ideal voltmeter loading",
        question:
          "Two 20 kΩ resistors are connected in series across an ideal 12.0 V cell. A non-ideal voltmeter of resistance 20 kΩ is connected across one of the resistors. What reading does the voltmeter show?",
        options: ["6.0 V", "8.0 V", "3.0 V", "4.0 V"],
        answerIndex: 3,
        hints: [
          "A real voltmeter acts as a resistor wired in parallel with the component it measures.",
          "Combine the 20 kΩ voltmeter in parallel with the 20 kΩ resistor ({{R_p = 10}} kΩ), then apply the potential divider formula.",
        ],
        explanation:
          "The 20 kΩ voltmeter in parallel with the 20 kΩ resistor gives {{R_p = 10}} kΩ, now in series with the other 20 kΩ resistor. Thus the voltmeter reads {{12.0 * 10 / (20 + 10) = 4.0}} V — significantly below the unloaded 6.0 V.",
      },
      {
        id: "b2-circuits-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "External parallel load with real cell",
        question:
          "A battery of EMF 15.0 V and internal resistance 1.0 Ω is connected across two 8.0 Ω resistors wired in parallel. What total current flows through the battery?",
        options: ["3.0 A", "0.88 A", "1.67 A", "3.75 A"],
        answerIndex: 0,
        hints: [
          "Find the equivalent resistance of the external parallel pair first: {{R_(\"ext\") = 8.0 / 2}}.",
          "Add internal resistance {{r = 1.0}} Ω to {{R_(\"ext\")}} before applying {{I = ε / (R_(\"ext\") + r)}}.",
        ],
        explanation:
          "Two 8.0 Ω resistors in parallel have {{R_(\"ext\") = 4.0}} Ω. Including internal resistance gives {{R_(\"tot\") = 4.0 + 1.0 = 5.0}} Ω, so {{I = 15.0 / 5.0 = 3.0}} A. Omitting {{r}} yields the distractor 3.75 A.",
      },
      {
        id: "b2-circuits-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "Opposing cells in series",
        question:
          "Cell 1 (EMF 6.0 V, internal resistance 0.8 Ω) and Cell 2 (EMF 2.0 V, internal resistance 0.4 Ω) are connected in series with opposing polarities across a 6.8 Ω external resistor. What is the circuit current?",
        options: ["1.0 A", "0.56 A", "0.50 A", "0.59 A"],
        answerIndex: 2,
        hints: [
          "Opposing cells subtract EMFs: {{ε_(\"net\") = 6.0 - 2.0}}.",
          "Do internal resistances subtract or add when a cell is reversed? Resistance ALWAYS adds!",
        ],
        explanation:
          "Net EMF is {{6.0 - 2.0 = 4.0}} V, while total resistance is {{6.8 + 0.8 + 0.4 = 8.0}} Ω because internal resistances always add regardless of polarity. Hence {{I = 4.0 / 8.0 = 0.50}} A. Subtracting {{r_2}} mistakenly gives 0.56 A.",
      },
      {
        id: "b2-circuits-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "Maximum power transfer condition",
        question:
          "A real cell of EMF 8.0 V and internal resistance 2.0 Ω is connected to a variable load resistor {{R}}. What is the maximum possible power that can be dissipated in {{R}}?",
        options: ["32 W", "16 W", "8.0 W", "4.0 W"],
        answerIndex: 2,
        hints: [
          "Maximum power is transferred to the external load when {{R = r}}.",
          "Set {{R = 2.0}} Ω, find {{I = ε / (R + r)}}, and calculate {{P = I^2 R}} (or use {{ε^2 / (4r)}}).",
        ],
        explanation:
          "Maximum load power occurs when {{R = r = 2.0}} Ω, giving {{I = 8.0 / 4.0 = 2.0}} A and {{P_(\"max\") = I^2 R = 2.0^2 * 2.0 = 8.0}} W. Calculating {{ε^2 / r = 32}} W gives the total short-circuit internal heating, not load power.",
      },
      {
        id: "b2-circuits-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "Charging a rechargeable cell",
        question:
          "A 12.0 V rechargeable battery with internal resistance 0.25 Ω is charged by a 14.5 V power supply of negligible internal resistance. What charging current flows into the battery?",
        options: ["58 A", "10 A", "48 A", "106 A"],
        answerIndex: 1,
        hints: [
          "During charging, the charger pushes current against the battery's EMF: {{V_(\"charger\") = ε + I r}}.",
          "Solve {{14.5 - 12.0 = I * 0.25}} for {{I}}.",
        ],
        explanation:
          "The net driving voltage pushing current through the 0.25 Ω internal resistance is {{14.5 - 12.0 = 2.5}} V, so {{I = 2.5 / 0.25 = 10}} A. Adding the two voltages instead of subtracting gives the large trap of 106 A.",
      },
      {
        id: "b2-circuits-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "Electrical transfer efficiency",
        question:
          "A battery with internal resistance 0.50 Ω powers an external resistor of resistance 4.5 Ω. What percentage of the battery's total chemical power is transferred to the external resistor?",
        options: ["10%", "11%", "89%", "90%"],
        answerIndex: 3,
        hints: [
          "Both {{R}} and {{r}} carry the same current {{I}}, so {{η = I^2 R / (I^2 (R + r))}}.",
          "Evaluate {{R / (R + r)}} and convert to a percentage.",
        ],
        explanation:
          "Efficiency is {{η = R / (R + r) = 4.5 / (4.5 + 0.50) = 4.5 / 5.0 = 0.90 = 90%}}. The remaining 10% is dissipated as thermal energy inside the battery.",
      },
      {
        id: "b2-circuits-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "emf-internal-resistance",
        strategy: "Impact of adding parallel load on a real cell",
        question:
          "Two identical lamps L₁ and L₂ are wired in parallel across a real cell that has significant internal resistance {{r}}. Initially only L₁ is switched ON. When L₂ is switched ON, what happens to the cell's terminal p.d. and the brightness of L₁?",
        options: [
          "Terminal p.d. decreases and L₁ becomes dimmer",
          "Terminal p.d. stays constant and L₁ keeps the same brightness",
          "Terminal p.d. decreases and L₁ becomes brighter",
          "Terminal p.d. increases and L₁ becomes brighter",
        ],
        answerIndex: 0,
        hints: [
          "Switching on a parallel branch reduces the external resistance {{R_(\"ext\")}}, increasing total current {{I}} from the cell.",
          "Use {{V = ε - I r}} to see what happens to the terminal p.d. applied across L₁.",
        ],
        explanation:
          "Adding L₂ in parallel lowers external resistance, so total current {{I}} drawn from the cell increases. Larger lost volts {{I r}} reduce terminal p.d. {{V = ε - I r}}, so L₁ receives less voltage and dims — exactly like car headlights during ignition.",
      },
      {
        id: "b2-circuits-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "potential-dividers-sensors",
        strategy: "Sensor output placement logic",
        question:
          "An LDR is wired in series with a fixed resistor {{R}} across an ideal 10 V supply. To make the output potential difference {{V_(\"out\")}} increase as the room gets darker, where must {{V_(\"out\")}} be connected?",
        options: [
          "Across the fixed resistor R so V_out tracks the rising circuit current",
          "Across both the LDR and the fixed resistor together across the supply",
          "In series between the LDR and the fixed resistor using a low-resistance wire",
          "Across the LDR so V_out rises as the LDR resistance increases in darkness",
        ],
        answerIndex: 3,
        hints: [
          "In darkness, fewer photons strike the LDR, so its resistance increases sharply.",
          "In a series potential divider, the component whose resistance grows takes a larger share of the supply voltage.",
        ],
        explanation:
          "As ambient light falls, the LDR's resistance increases, so its fractional share {{R_(\"LDR\") / (R + R_(\"LDR\"))}} of the 10 V supply increases. Measuring {{V_(\"out\")}} across the LDR therefore makes {{V_(\"out\")}} rise in darkness.",
      },
      {
        id: "b2-circuits-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "potential-dividers-sensors",
        strategy: "Uniform potentiometer wire ratio",
        question:
          "A uniform 1.00 m resistance wire of total resistance 20 Ω is connected across an ideal 5.0 V supply. A sliding contact sits 30 cm from the 0 V end. What is the unloaded output p.d. between the slider and the 0 V end?",
        options: ["3.5 V", "2.0 V", "1.5 V", "0.60 V"],
        answerIndex: 2,
        hints: [
          "For a uniform wire, resistance is directly proportional to length ({{R ∝ L}}).",
          "Multiply 5.0 V by the length fraction {{30 \" cm\" / 100 \" cm\"}}.",
        ],
        explanation:
          "Because the wire is uniform, {{V_(\"out\") = V_(\"in\") * (x / L) = 5.0 * (0.30 / 1.00) = 1.5}} V. Getting 3.5 V measures the p.d. from the slider to the +5.0 V end instead of the 0 V end.",
      },
      {
        id: "b2-circuits-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Short-circuit bypass analysis",
        question:
          "Three identical lamps X, Y, and Z are connected in series across an ideal 12 V battery. A switch S is wired directly in parallel across lamp Y. When switch S is closed, what happens to the three lamps?",
        options: [
          "All three lamps go out because the battery is short-circuited",
          "Lamp Y goes out while lamps X and Z both become brighter",
          "Lamp Y stays lit while lamps X and Z both become dimmer",
          "Lamp Y goes out while lamps X and Z keep the same brightness",
        ],
        answerIndex: 1,
        hints: [
          "Closing S creates a zero-resistance path around Y, forcing {{V_Y = 0}} V.",
          "With only X and Z remaining in series across 12 V, each receives 6 V instead of 4 V.",
        ],
        explanation:
          "The closed switch short-circuits lamp Y (zero p.d. across Y, so Y goes out) and removes Y's resistance from the loop. Total resistance drops from {{3R}} to {{2R}}, so current increases and X and Z each receive 6 V instead of 4 V, becoming brighter.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: DIVIDERS, SENSORS & SYNTHESIS
  // ===========================================================================
  {
    id: "b2-circuits-m3",
    title: "Paper 1A · Set 3: Dividers, Sensors & Synthesis",
    level: "SL",
    questions: [
      {
        id: "b2-circuits-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Loop rule with forward-biased diode",
        question:
          "A silicon diode with a constant forward voltage drop of 0.70 V is connected in series with a 220 Ω resistor across an ideal 5.1 V supply (forward bias). What is the current through the resistor?",
        options: ["23 mA", "3.2 mA", "20 mA", "26 mA"],
        answerIndex: 2,
        hints: [
          "Use Kirchhoff's loop rule to find the p.d. remaining across the 220 Ω resistor.",
          "Calculate {{I = (5.1 - 0.70) / 220}} and convert A to mA.",
        ],
        explanation:
          "The p.d. across the resistor is {{V_R = 5.1 - 0.70 = 4.4}} V, so {{I = 4.4 / 220 = 0.020}} A = 20 mA. Ignoring the 0.70 V diode threshold gives 23 mA, while adding 0.70 V gives 26 mA.",
      },
      {
        id: "b2-circuits-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Power–energy conversion",
        question:
          "An electric kettle rated at 2.4 kW operates continuously for 5.0 minutes. How much electrical energy does it transfer?",
        options: ["12 kJ", "480 kJ", "144 kJ", "720 kJ"],
        answerIndex: 3,
        hints: [
          "Convert 5.0 minutes into seconds: {{5.0 * 60 = 300}} s.",
          "Multiply power in kW (2.4 kJ s⁻¹) by 300 s.",
        ],
        explanation:
          "Using {{E = P t}}, {{E = 2.4 \" kW\" * 300 \" s\" = 720}} kJ (or 0.72 MJ). Multiplying 2.4 by 5.0 without converting minutes to seconds yields the common trap 12 kJ.",
      },
      {
        id: "b2-circuits-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "current-pd-ohm",
        strategy: "Rearranging the resistivity formula",
        question:
          "A uniform cylindrical wire of length 4.0 m and cross-sectional area {{2.0 * 10^(-7)}} m² has a resistance of 3.4 Ω. What is the resistivity of the metal?",
        options: [
          "{{1.7 * 10^(-7)}} Ω m",
          "{{6.8 * 10^(-7)}} Ω m",
          "{{2.7 * 10^(-6)}} Ω m",
          "{{8.5 * 10^(-8)}} Ω m",
        ],
        answerIndex: 0,
        hints: [
          "Rearrange {{R = ρ L / A}} to isolate resistivity: {{ρ = R A / L}}.",
          "Substitute {{R = 3.4}} Ω, {{A = 2.0 * 10^(-7)}} m², and {{L = 4.0}} m.",
        ],
        explanation:
          "{{ρ = R A / L = (3.4 * 2.0 * 10^(-7)) / 4.0 = 1.7 * 10^(-7)}} Ω m. Multiplying by 4.0 instead of dividing yields {{2.7 * 10^(-6)}} Ω m.",
      },
      {
        id: "b2-circuits-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Balanced bridge symmetry",
        question:
          "Four resistors form a bridge between terminals A and B: the top branch has 4.0 Ω followed by 8.0 Ω (midpoint X), and the bottom branch has 6.0 Ω followed by 12.0 Ω (midpoint Y). A 5.0 Ω resistor connects X to Y. What is the equivalent resistance between A and B?",
        options: ["5.0 Ω", "7.2 Ω", "12.2 Ω", "30 Ω"],
        answerIndex: 1,
        hints: [
          "Compare the potential divider ratios of the top branch ({{4 : 8}}) and the bottom branch ({{6 : 12}}).",
          "Because {{V_X = V_Y}}, zero current flows through the 5.0 Ω bridge resistor — you can ignore it completely!",
          "Find the parallel combination of the top series branch (12 Ω) and bottom series branch (18 Ω).",
        ],
        explanation:
          "Since {{4.0 / 8.0 = 6.0 / 12.0 = 1/2}}, midpoints X and Y are at the exact same electric potential, so zero current passes through the 5.0 Ω resistor. The network reduces to 12 Ω in parallel with 18 Ω: {{R_(\"AB\") = (12 * 18)/(12 + 18) = 216 / 30 = 7.2}} Ω.",
      },
      {
        id: "b2-circuits-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Identical cells in parallel",
        question:
          "Two identical cells, each of EMF 1.5 V and internal resistance 0.60 Ω, are connected in parallel with matching polarity. What are the equivalent EMF and equivalent internal resistance of the combination?",
        options: [
          "EMF = 1.5 V and internal resistance = 0.30 Ω",
          "EMF = 3.0 V and internal resistance = 0.30 Ω",
          "EMF = 1.5 V and internal resistance = 1.2 Ω",
          "EMF = 3.0 V and internal resistance = 1.2 Ω",
        ],
        answerIndex: 0,
        hints: [
          "In parallel, each coulomb passes through only ONE cell, so EMF does not double.",
          "The two 0.60 Ω internal resistances sit in parallel with each other.",
        ],
        explanation:
          "Identical cells in parallel keep the same EMF (1.5 V) because every charge passes through only one cell, while their internal resistances combine in parallel to give {{0.60 / 2 = 0.30}} Ω. By contrast, connecting them in series gives 3.0 V and 1.2 Ω.",
      },
      {
        id: "b2-circuits-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Branch-current subtraction",
        question:
          "An ideal 12.0 V battery supplies a total current of 2.5 A to two resistors connected in parallel. One resistor has a value of 8.0 Ω. What is the resistance of the second resistor?",
        options: ["4.8 Ω", "6.0 Ω", "12 Ω", "16 Ω"],
        answerIndex: 2,
        hints: [
          "Both resistors have 12.0 V across them, so find the current in the 8.0 Ω branch first.",
          "Subtract that branch current from 2.5 A using Kirchhoff's junction rule, then compute {{R_2 = 12.0 / I_2}}.",
        ],
        explanation:
          "The current through the 8.0 Ω resistor is {{I_1 = 12.0 / 8.0 = 1.5}} A. By KCL, {{I_2 = 2.5 - 1.5 = 1.0}} A, so {{R_2 = 12.0 / 1.0 = 12}} Ω. Computing {{12.0 / 2.5 = 4.8}} Ω finds total parallel resistance instead of {{R_2}}.",
      },
      {
        id: "b2-circuits-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "emf-internal-resistance",
        strategy: "Extrapolating V = ε − Ir from two data points",
        question:
          "A battery's terminal p.d. is 5.4 V when the current is 1.0 A, and 4.2 V when the current is 3.0 A. What is the EMF of the battery?",
        options: ["5.4 V", "4.8 V", "6.6 V", "6.0 V"],
        answerIndex: 3,
        hints: [
          "First find internal resistance from the gradient magnitude: {{r = -(V_2 - V_1)/(I_2 - I_1)}}.",
          "Substitute {{r}} back into {{ε = V + I r}} using either data pair.",
        ],
        explanation:
          "From {{V = ε - I r}}, internal resistance is {{r = (5.4 - 4.2)/(3.0 - 1.0) = 1.2 / 2.0 = 0.60}} Ω. Therefore {{ε = 5.4 + 1.0 * 0.60 = 6.0}} V (verified by {{4.2 + 3.0 * 0.60 = 6.0}} V). Picking 5.4 V mistakes the lowest-current reading for open-circuit EMF.",
      },
      {
        id: "b2-circuits-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "emf-internal-resistance",
        strategy: "Internal vs external power dissipation",
        question:
          "A battery of EMF 10.0 V and internal resistance 2.0 Ω is connected across an external 3.0 Ω resistor. What power is dissipated as heat *inside* the battery?",
        options: ["12 W", "8.0 W", "20 W", "50 W"],
        answerIndex: 1,
        hints: [
          "Find the circuit current first: {{I = ε / (R + r)}}.",
          "Internal power dissipation is {{P_(\"int\") = I^2 r}}, using the internal resistance 2.0 Ω.",
        ],
        explanation:
          "Circuit current is {{I = 10.0 / (3.0 + 2.0) = 2.0}} A. Power dissipated inside the battery is {{P_(\"int\") = I^2 r = 2.0^2 * 2.0 = 8.0}} W. By comparison, 12 W is dissipated in the 3.0 Ω load and 20 W is total chemical power.",
      },
      {
        id: "b2-circuits-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "emf-internal-resistance",
        strategy: "Equal load power at two resistances",
        question:
          "A real cell of internal resistance {{r}} delivers the exact same power to a 2.0 Ω external resistor as it does to an 8.0 Ω external resistor. What is the value of {{r}}?",
        options: ["5.0 Ω", "3.0 Ω", "1.6 Ω", "4.0 Ω"],
        answerIndex: 3,
        hints: [
          "Write {{P = ε^2 R / (R + r)^2}} for {{R_1 = 2.0}} Ω and {{R_2 = 8.0}} Ω and equate them.",
          "Cancel {{ε^2}} and cross-multiply: {{2.0 (8.0 + r)^2 = 8.0 (2.0 + r)^2}} → take square roots or expand.",
        ],
        explanation:
          "Equating {{2 / (2 + r)^2 = 8 / (8 + r)^2}} gives {{(8 + r)^2 = 4(2 + r)^2}}, so {{8 + r = 2(2 + r)}} (since {{r > 0}}), yielding {{r = 4.0}} Ω — the geometric mean {{sqrt(R_1 R_2)}} rather than the arithmetic mean 5.0 Ω.",
      },
      {
        id: "b2-circuits-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "potential-dividers-sensors",
        strategy: "Open-circuit voltmeter fault finding",
        question:
          "Two 10 Ω resistors {{R_1}} and {{R_2}} are wired in series across an ideal 9.0 V battery. Resistor {{R_2}} fails into an open circuit (infinite resistance). What does an ideal voltmeter read across {{R_1}} and across {{R_2}}?",
        options: [
          "0 V across R₁ and 9.0 V across R₂",
          "9.0 V across R₁ and 0 V across R₂",
          "4.5 V across R₁ and 4.5 V across R₂",
          "0 V across R₁ and 0 V across R₂",
        ],
        answerIndex: 0,
        hints: [
          "An open circuit stops current completely ({{I = 0}} everywhere in the series loop).",
          "Apply {{V_1 = I R_1}} for the intact resistor, then Kirchhoff's loop rule {{V_1 + V_2 = 9.0}} V.",
        ],
        explanation:
          "With {{R_2}} open-circuited, current is 0 A everywhere, so the p.d. across intact {{R_1}} is {{V_1 = 0 * 10 = 0}} V. By KVL, the full supply EMF of 9.0 V appears across the open break {{R_2}}.",
      },
      {
        id: "b2-circuits-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "potential-dividers-sensors",
        strategy: "Ratio shortcut for potential dividers",
        question:
          "An ideal 15.0 V supply feeds a potential divider with fixed resistor {{R_1}} and sensor {{R_2 = 6.0}} kΩ. What value of {{R_1}} gives an unloaded output p.d. of 5.0 V across {{R_2}}?",
        options: ["3.0 kΩ", "18 kΩ", "12 kΩ", "9.0 kΩ"],
        answerIndex: 2,
        hints: [
          "Find {{V_1 = V_(\"in\") - V_2 = 15.0 - 5.0 = 10.0}} V.",
          "Use the series ratio {{R_1 / R_2 = V_1 / V_2}}.",
        ],
        explanation:
          "Since {{V_2 = 5.0}} V, the p.d. across {{R_1}} must be {{15.0 - 5.0 = 10.0}} V — twice {{V_2}}. Therefore {{R_1 = 2 R_2 = 2 * 6.0 = 12}} kΩ. Selecting 18 kΩ computes total resistance {{R_1 + R_2}} rather than {{R_1}} alone.",
      },
      {
        id: "b2-circuits-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "potential-dividers-sensors",
        strategy: "Geometry of a metallic strain gauge",
        question:
          "A metallic foil strain gauge bonded to a concrete beam is stretched slightly when a truck crosses the bridge. Why does the electrical resistance of the strain gauge increase?",
        options: [
          "Its length decreases while its cross-sectional area increases under tensile stress",
          "Its length increases while its cross-sectional area decreases slightly under tension",
          "Stretching releases additional free electrons that block current flow in the foil",
          "Tensile stress cools the metal lattice and lowers its intrinsic electrical resistivity",
        ],
        answerIndex: 1,
        hints: [
          "Recall the resistivity equation {{R = ρ L / A}} for a uniform metal conductor.",
          "What happens to the length {{L}} and cross-sectional area {{A}} of a wire or foil when stretched?",
        ],
        explanation:
          "Under tensile strain, the metal foil lengthens ({{L}} increases) and narrows slightly ({{A}} decreases), so both geometric changes increase {{R = ρ L / A}}.",
      },
      {
        id: "b2-circuits-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "potential-dividers-sensors",
        strategy: "Loaded potential divider voltage drop",
        question:
          "A 12.0 V ideal supply powers a potential divider with {{R_1 = 400}} Ω and {{R_2 = 400}} Ω. A 400 Ω load resistor is then connected in parallel across {{R_2}}. By how much does the p.d. across {{R_2}} drop?",
        options: ["2.0 V", "4.0 V", "3.0 V", "1.5 V"],
        answerIndex: 0,
        hints: [
          "First note the unloaded p.d. across {{R_2}} (6.0 V).",
          "Find the parallel resistance of {{R_2}} and the 400 Ω load ({{200}} Ω), compute the new {{V_(\"out\")}}, and subtract from 6.0 V.",
        ],
        explanation:
          "Unloaded, {{V_(\"out\") = 6.0}} V. Connecting the 400 Ω load across {{R_2}} reduces the bottom section to {{400 || 400 = 200}} Ω, giving {{V_(\"loaded\") = 12.0 * 200 / (400 + 200) = 4.0}} V. The p.d. therefore drops by {{6.0 - 4.0 = 2.0}} V (4.0 V is the final reading, not the drop).",
      },
      {
        id: "b2-circuits-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "potential-dividers-sensors",
        strategy: "Potentiometer vs rheostat experimental design",
        question:
          "Why is a potential divider (potentiometer) preferred over a single series variable resistor when investigating the full I–V characteristic of a filament lamp?",
        options: [
          "A potential divider eliminates the internal resistance of the battery during measurements",
          "A potential divider keeps the filament temperature strictly constant across all voltages",
          "A potential divider uses less energy from the power supply at every single slider setting",
          "A potential divider allows the lamp p.d. to be varied smoothly starting from 0 V",
        ],
        answerIndex: 3,
        hints: [
          "Think about the minimum possible voltage you can place across a lamp with a finite series rheostat.",
          "Can a series variable resistor ever bring the lamp p.d. all the way down to 0 V without opening the switch?",
        ],
        explanation:
          "With a potentiometer, sliding the wiper to the 0 V end applies exactly 0 V across the lamp, allowing continuous readings from {{0 \" V\"}} to {{V_(\"in\")}}. A series variable resistor always leaves a non-zero p.d. across the lamp.",
      },
      {
        id: "b2-circuits-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "series-parallel-kirchhoff",
        strategy: "Kirchhoff's loop rule with two opposing ideal cells",
        question:
          "Two ideal cells (6.0 V and 4.0 V) are wired in a single closed loop with opposing polarities alongside two resistors of 3.0 Ω and 2.0 Ω. What is the potential difference across the 3.0 Ω resistor?",
        options: ["6.0 V", "0.80 V", "1.2 V", "2.0 V"],
        answerIndex: 2,
        hints: [
          "Apply Kirchhoff's loop rule: net EMF around the loop is {{6.0 - 4.0 = 2.0}} V.",
          "Divide the net EMF by total loop resistance ({{3.0 + 2.0 = 5.0}} Ω) to find {{I}}, then compute {{V = I * 3.0}}.",
        ],
        explanation:
          "Net EMF around the loop is {{6.0 - 4.0 = 2.0}} V and total resistance is {{5.0}} Ω, so {{I = 2.0 / 5.0 = 0.40}} A. The p.d. across the 3.0 Ω resistor is {{0.40 * 3.0 = 1.2}} V (while 0.80 V is dropped across the 2.0 Ω resistor).",
      },
    ],
  },
];
