import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ — 10 questions (4 MCQ balanced [0,1,2,3] + 6 ShortQ)
  // ===========================================================================
  quiz: [
    {
      id: "d1-fields-motion-quiz-q01",
      kind: "mcq",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Define",
      guideRef: "gravitational-fields-orbits",
      question: "Which statement correctly defines gravitational field strength {{g}} at a point in space?",
      options: [
        "The gravitational force per unit mass acting on a small test mass",
        "The work done per unit mass bringing a test mass from infinity",
        "The gravitational potential energy stored per unit mass at that point",
        "The product of the source mass and the universal gravitational constant",
      ],
      answerIndex: 0,
      hints: [
        "Recall the defining equation {{g = F / m}}.",
      ],
      explanation:
        "Gravitational field strength is defined as {{g = F / m}}, the gravitational force per unit mass acting on a small test mass placed at that point. Work done per unit mass from infinity defines gravitational potential {{V_g}}.",
    },
    {
      id: "d1-fields-motion-quiz-q02",
      kind: "short",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "gravitational-fields-orbits",
      strategy: "Kepler's Third Law ratio",
      question:
        "Satellite A orbits a planet in a circular orbit of radius {{2 R}} with a period of {{4.0}} hours. Satellite B orbits the same planet in a circular orbit of radius {{8 R}}. Calculate the orbital period of Satellite B in hours.",
      answer: { type: "number", value: 32, tolerance: 0.1, display: "32 hours" },
      traps: [
        {
          spec: { type: "number", value: 16, tolerance: 0.1 },
          feedback: "You scaled linearly ({{T ∝ r}}). Kepler's Third Law gives {{T^2 ∝ r^3}}, so {{T ∝ r^(3/2)}}.",
        },
        {
          spec: { type: "number", value: 64, tolerance: 0.1 },
          feedback: "Remember to take the square root of {{4^3 = 64}} to get the factor {{8}}, then multiply by {{4.0}} hours.",
        },
      ],
      hints: [
        "Find the orbital radius ratio {{r_B / r_A = 8 R / (2 R) = 4}}.",
        "Apply Kepler's Third Law: {{(T_B / T_A)^2 = (r_B / r_A)^3}}.",
      ],
      solution: [
        "Radius ratio: {{r_B / r_A = 8 R / (2 R) = 4}}.",
        "By Kepler's Third Law: {{(T_B / 4.0)^2 = 4^3 = 64}}.",
        "Take the square root: {{T_B / 4.0 = 8 ⇒ T_B = 32}} hours.",
      ],
    },
    {
      id: "d1-fields-motion-quiz-q03",
      kind: "short",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "electric-magnetic-fields",
      strategy: "Coulomb's law",
      question:
        "Two point charges {{+2.0}} μC and {{+5.0}} μC are separated by {{0.30}} m in vacuum ({{k = 8.99 * 10^9}} N m² C⁻²). Calculate the magnitude of the repulsive electrostatic force between them in N (to 2 s.f.).",
      answer: { type: "number", value: 1.0, tolerance: 0.02, display: "1.0 N" },
      traps: [
        {
          spec: { type: "number", value: 0.3, tolerance: 0.01 },
          feedback: "You forgot to square the distance {{r = 0.30}} m in Coulomb's law {{F = k q_1 q_2 / r^2}}.",
        },
      ],
      hints: [
        "Convert microcoulombs to coulombs: {{1}} μC = {{10^(-6)}} C.",
        "Substitute into {{F = k q_1 q_2 / r^2}}, remembering to square {{0.30}} m.",
      ],
      solution: [
        "{{F = (8.99 * 10^9 * 2.0 * 10^(-6) * 5.0 * 10^(-6)) / 0.30^2}}.",
        "{{F = (8.99 * 10^(-2)) / 0.090 = 0.999}} N ≈ {{1.0}} N.",
      ],
    },
    {
      id: "d1-fields-motion-quiz-q04",
      kind: "mcq",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "electric-magnetic-fields",
      question:
        "Two large parallel plates separated by {{5.0}} mm have a potential difference of {{250}} V between them. What is the uniform electric field strength between the plates?",
      options: [
        "{{1.25 * 10^3}} V m⁻¹",
        "{{5.0 * 10^4}} V m⁻¹",
        "{{5.0 * 10^1}} V m⁻¹",
        "{{2.0 * 10^(-5)}} V m⁻¹",
      ],
      answerIndex: 1,
      hints: [
        "Convert {{5.0}} mm into metres ({{5.0 * 10^(-3)}} m).",
        "Compute {{E = V / d}}.",
      ],
      explanation:
        "Converting {{d = 5.0 * 10^(-3)}} m gives {{E = 250 / (5.0 * 10^(-3)) = 5.0 * 10^4}} V m⁻¹. Dividing by {{5.0}} without converting millimetres gives {{50}} V m⁻¹.",
    },
    {
      id: "d1-fields-motion-quiz-q05",
      kind: "short",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "motion-em-fields",
      strategy: "Velocity selector",
      question:
        "A velocity selector uses perpendicular uniform fields {{E = 1.8 * 10^4}} V m⁻¹ and {{B = 0.060}} T. Calculate the speed (in m s⁻¹) of ions that pass straight through undeflected.",
      answer: { type: "number", value: 300000, tolerance: 500, display: "300000 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 1080, tolerance: 10 },
          feedback: "You multiplied {{E * B}} instead of dividing: {{q E = q v B ⇒ v = E / B}}.",
        },
      ],
      hints: [
        "Balance electric force {{q E}} against magnetic force {{q v B}}.",
        "Divide {{E}} by {{B}}.",
      ],
      solution: [
        "Undeflected balance: {{q E = q v B ⇒ v = E / B}}.",
        "{{v = (1.8 * 10^4) / 0.060 = 3.0 * 10^5}} m s⁻¹ ({{300 000}} m s⁻¹).",
      ],
    },
    {
      id: "d1-fields-motion-quiz-q06",
      kind: "short",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "motion-em-fields",
      question:
        "A straight conductor of length {{0.80}} m carries a current of {{3.5}} A perpendicular to a uniform magnetic field of {{0.25}} T. Calculate the magnitude of the magnetic force on the conductor in N.",
      answer: { type: "number", value: 0.7, tolerance: 0.01, display: "0.70 N" },
      hints: [
        "Use {{F = B I L sin θ}} with {{θ = 90°}}.",
        "Multiply {{0.25 * 3.5 * 0.80}}.",
      ],
      solution: [
        "{{F = B I L sin 90° = 0.25 * 3.5 * 0.80 * 1 = 0.70}} N.",
      ],
    },
    {
      id: "d1-fields-motion-quiz-q07",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "gravitational-electric-potentials-hl",
      question:
        "The gravitational potential at the surface of a planet is {{-4.0 * 10^7}} J kg⁻¹. What is the escape velocity from the planet's surface?",
      options: [
        "{{4.47 * 10^3}} m s⁻¹",
        "{{6.32 * 10^3}} m s⁻¹",
        "{{8.94 * 10^3}} m s⁻¹",
        "{{1.26 * 10^4}} m s⁻¹",
      ],
      answerIndex: 2,
      hints: [
        "Set total energy equal to zero at launch: {{(1/2) m v_esc^2 + m V_g = 0}}.",
        "Solve {{v_esc = sqrt(-2 V_g)}}.",
      ],
      explanation:
        "Escape requires {{(1/2) m v_esc^2 + m V_g = 0 ⇒ v_esc = sqrt(-2 V_g) = sqrt(8.0 * 10^7) = 8.94 * 10^3}} m s⁻¹. Omitting the factor of 2 gives circular orbital speed {{6.32 * 10^3}} m s⁻¹.",
    },
    {
      id: "d1-fields-motion-quiz-q08",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "gravitational-electric-potentials-hl",
      question:
        "Calculate the electric potential (in kV, to 3 s.f.) at a distance of {{0.50}} m from an isolated point charge of {{+3.0}} μC in vacuum ({{k = 8.99 * 10^9}} N m² C⁻²).",
      answer: { type: "number", value: 53.9, tolerance: 0.2, display: "53.9 kV" },
      traps: [
        {
          spec: { type: "number", value: 108, tolerance: 1 },
          feedback: "Electric potential uses {{r}} (not {{r^2}}): {{V_e = k q / r}}.",
        },
      ],
      hints: [
        "Use {{V_e = k q / r}} — remember potential varies as {{1 / r}}, not {{1 / r^2}}.",
        "Divide your answer in volts by {{1000}} to convert to kV.",
      ],
      solution: [
        "{{V_e = (8.99 * 10^9 * 3.0 * 10^(-6)) / 0.50 = 53 940}} V.",
        "Convert to kilovolts: {{V_e = 53.9}} kV.",
      ],
    },
    {
      id: "d1-fields-motion-quiz-q09",
      kind: "mcq",
      level: "SL",
      difficulty: "core",
      commandTerm: "Describe",
      guideRef: "motion-em-fields",
      question:
        "Two long parallel wires separated by distance {{r}} carry steady currents in the **same** direction. How do the wires interact and how does the force per unit length depend on {{r}}?",
      options: [
        "They repel, with force per unit length proportional to {{1 / r}}",
        "They repel, with force per unit length proportional to {{1 / r^2}}",
        "They attract, with force per unit length proportional to {{1 / r^2}}",
        "They attract, with force per unit length proportional to {{1 / r}}",
      ],
      answerIndex: 3,
      hints: [
        "Recall the direction rule for parallel currents in the same direction.",
        "Check the power of {{r}} in {{F / L = μ_0 I_1 I_2 / (2 pi r)}}.",
      ],
      explanation:
        "Parallel currents in the same direction **attract**, and {{F / L = μ_0 I_1 I_2 / (2 pi r)}} shows the force per unit length is inversely proportional to {{r}} (not {{r^2}}).",
    },
    {
      id: "d1-fields-motion-quiz-q10",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "gravitational-electric-potentials-hl",
      question:
        "A spacecraft of mass {{2000}} kg moves from a point where gravitational potential is {{-4.5 * 10^7}} J kg⁻¹ to a higher point where gravitational potential is {{-1.5 * 10^7}} J kg⁻¹. Calculate the minimum work done against gravity in GJ ({{10^9}} J).",
      answer: { type: "number", value: 60, tolerance: 0.5, display: "60 GJ" },
      traps: [
        {
          spec: { type: "number", value: -60, tolerance: 0.5 },
          feedback: "Check the sign: moving outward makes {{V_g}} less negative, so {{ΔV_g = V_2 - V_1 > 0}} and positive work is done.",
        },
        {
          spec: { type: "number", value: 120, tolerance: 1 },
          feedback: "You added the magnitudes instead of subtracting: {{(-1.5) - (-4.5) = +3.0}}, not {{6.0}}.",
        },
      ],
      hints: [
        "Compute the change in gravitational potential {{ΔV_g = V_final - V_initial}}.",
        "Multiply by mass {{W = m ΔV_g}} and divide by {{10^9}} to express in GJ.",
      ],
      solution: [
        "{{ΔV_g = (-1.5 * 10^7) - (-4.5 * 10^7) = +3.0 * 10^7}} J kg⁻¹.",
        "{{W = m ΔV_g = 2000 * 3.0 * 10^7 = 6.0 * 10^10}} J = {{60}} GJ.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS — 2 structured IB Paper 2 sets (15 questions each)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1: Gravitational & Electric Fields Structured (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "d1-fields-motion-p1",
      title: "Paper 2 · Gravitational & Electric Fields Structured",
      level: "SL",
      questions: [
        {
          id: "d1-fields-motion-p1-q01",
          kind: "written",
          level: "SL",
          difficulty: "warmup",
          commandTerm: "Define",
          guideRef: "gravitational-fields-orbits",
          marks: 2,
          question:
            "Define gravitational field strength at a point, and show using SI base units why N kg⁻¹ is identical to m s⁻².",
          hints: [
            "State the definition in words using a small test mass.",
            "Substitute the SI base units of the newton ({{kg m s^(-2)}}) into N kg⁻¹.",
          ],
          modelAnswer:
            "Gravitational field strength is the force per unit mass acting on a small test mass placed at that point (g = F/m). Since 1 N = 1 kg m s⁻², dividing by kg gives N kg⁻¹ = (kg m s⁻²) kg⁻¹ = m s⁻², which is the acceleration of free fall.",
          markScheme: [
            {
              point: "Defines g as gravitational force per unit mass acting on a small test mass.",
              keywords: ["force per unit mass", "test mass"],
            },
            {
              point: "Replaces N with kg m s⁻² and cancels kg to obtain m s⁻².",
              keywords: ["kg m s", "cancel", "acceleration of free fall"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q02",
          kind: "short",
          level: "SL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "gravitational-fields-orbits",
          question:
            "Jupiter has mass {{M = 1.90 * 10^27}} kg and radius {{R = 7.15 * 10^7}} m. Using {{G = 6.67 * 10^(-11)}} N m² kg⁻², calculate the gravitational field strength at Jupiter's cloud-top surface in N kg⁻¹ (to 3 s.f.).",
          answer: { type: "number", value: 24.8, tolerance: 0.2, display: "24.8 N kg⁻¹" },
          hints: [
            "Use {{g = G M / R^2}}.",
            "Remember to square the radius {{7.15 * 10^7}} m.",
          ],
          solution: [
            "{{g = (G M) / R^2 = (6.67 * 10^(-11) * 1.90 * 10^27) / (7.15 * 10^7)^2}}.",
            "{{g = (1.267 * 10^17) / (5.112 * 10^15) = 24.8}} N kg⁻¹.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q03",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "gravitational-fields-orbits",
          strategy: "Centre-to-centre orbital radius",
          question:
            "A navigation satellite orbits Earth ({{M = 5.97 * 10^24}} kg, {{R_E = 6.37 * 10^6}} m) in a circular orbit at altitude {{h = 2000}} km above the surface. Calculate its orbital speed in m s⁻¹ (to 3 s.f.).",
          answer: { type: "number", value: 6900, tolerance: 30, display: "6900 m s⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 14100, tolerance: 150 },
              feedback: "You used altitude {{2000}} km alone instead of centre-to-centre radius {{r = R_E + h = 8.37 * 10^6}} m.",
            },
          ],
          hints: [
            "First find the centre-to-centre orbital radius {{r = R_E + h}} in metres.",
            "Substitute into {{v = sqrt(G M / r)}}.",
          ],
          solution: [
            "{{r = 6.37 * 10^6 + 2.00 * 10^6 = 8.37 * 10^6}} m.",
            "{{v = sqrt((6.67 * 10^(-11) * 5.97 * 10^24) / (8.37 * 10^6)) = sqrt(4.757 * 10^7) = 6897}} m s⁻¹ ≈ {{6900}} m s⁻¹.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q04",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Derive",
          guideRef: "gravitational-fields-orbits",
          marks: 3,
          question:
            "Derive Kepler's Third Law, {{T^2 = ((4 pi^2) / (G M)) r^3}}, for a satellite of mass {{m}} moving in a circular orbit of radius {{r}} around a planet of mass {{M}}.",
          hints: [
            "Begin by equating Newton's gravitational force to the centripetal force.",
            "Substitute circular orbital speed {{v = 2 pi r / T}} and rearrange for {{T^2}}.",
          ],
          modelAnswer:
            "The gravitational attraction supplies the centripetal force: G M m / r² = m v² / r. Cancelling m and one factor of r gives v² = G M / r. Substituting the circular speed v = 2πr / T gives 4π²r² / T² = G M / r. Rearranging yields T² = (4π² / (GM)) r³.",
          markScheme: [
            {
              point: "Equates gravitational force to centripetal force: GMm/r² = mv²/r.",
              keywords: ["centripetal", "mv", "g m m", "gmm"],
            },
            {
              point: "Substitutes orbital speed v = 2πr / T.",
              keywords: ["2πr", "2pir", "2 pi r"],
            },
            {
              point: "Completes algebraic rearrangement clearly to T² = (4π²/(GM)) r³.",
              keywords: ["4π²", "4pi", "rearranging"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q05",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Determine",
          guideRef: "gravitational-fields-orbits",
          question:
            "A geostationary satellite orbits Earth ({{M = 5.97 * 10^24}} kg) with period {{T = 8.64 * 10^4}} s. Calculate its centre-to-centre orbital radius in km (to 3 s.f., using {{G = 6.67 * 10^(-11)}} N m² kg⁻²).",
          answer: { type: "number", value: 42200, tolerance: 300, display: "42200 km" },
          hints: [
            "Rearrange Kepler's Third Law for {{r^3 = G M T^2 / (4 pi^2)}}.",
            "Take the cube root to obtain {{r}} in metres, then divide by {{1000}} for km.",
          ],
          solution: [
            "{{r^3 = (G M T^2) / (4 pi^2) = (6.67 * 10^(-11) * 5.97 * 10^24 * (8.64 * 10^4)^2) / (4 pi^2)}}.",
            "{{r^3 = (2.973 * 10^24) / 39.48 = 7.530 * 10^22}} m³.",
            "{{r = cbrt(7.530 * 10^22) = 4.223 * 10^7}} m ≈ {{42 200}} km.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q06",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "gravitational-fields-orbits",
          marks: 3,
          question:
            "Explain why astronauts aboard an orbiting space station appear to float weightlessly even though Earth's gravitational pull on them is still nearly 90% of their weight on the ground.",
          hints: [
            "Compare the centripetal acceleration of the astronaut with that of the space station.",
            "Connect this shared acceleration to the normal reaction force from the cabin floor.",
          ],
          modelAnswer:
            "Both the astronaut and the space station accelerate radially towards Earth at the exact same rate g = GM/r² because gravitational acceleration is independent of mass. They are therefore in continuous free fall together around Earth. Consequently, there is zero normal contact force between the astronaut and the station floor, creating apparent weightlessness.",
          markScheme: [
            {
              point: "States both astronaut and station have the same centripetal acceleration g = GM/r² (independent of mass).",
              keywords: ["same rate", "independent of mass", "accelerate radially"],
            },
            {
              point: "Identifies that both are in continuous free fall towards Earth.",
              keywords: ["free fall", "continuous"],
            },
            {
              point: "Concludes that the normal contact / reaction force on the astronaut is zero.",
              keywords: ["normal contact", "reaction force", "zero normal"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q07",
          kind: "written",
          level: "SL",
          difficulty: "warmup",
          commandTerm: "Define",
          guideRef: "electric-magnetic-fields",
          marks: 2,
          question:
            "Define electric field strength at a point and state why the test charge used in the definition must be small.",
          hints: [
            "Specify the sign of the test charge in {{E = F / q}}.",
            "What would a large test charge do to the existing distribution of source charges?",
          ],
          modelAnswer:
            "Electric field strength is the electrostatic force per unit positive test charge placed at that point (E = F/q). The test charge must be vanishingly small so that its own electric field does not distort or redistribute the source charges producing the field being measured.",
          markScheme: [
            {
              point: "Defines E as electric force per unit positive test charge.",
              keywords: ["per unit positive", "positive test"],
            },
            {
              point: "Explains a small test charge avoids distorting or shifting the original source charge distribution.",
              keywords: ["distort", "redistribute", "alter"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q08",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "electric-magnetic-fields",
          question:
            "Two point charges {{q_1 = +4.0}} μC and {{q_2 = -6.0}} μC are separated by {{0.20}} m in vacuum ({{k = 8.99 * 10^9}} N m² C⁻²). Calculate the magnitude of the attractive electrostatic force between them in N (to 3 s.f.).",
          answer: { type: "number", value: 5.39, tolerance: 0.05, display: "5.39 N" },
          traps: [
            {
              spec: { type: "number", value: 1.08, tolerance: 0.02 },
              feedback: "You forgot to square {{0.20}} m in the denominator of Coulomb's law.",
            },
          ],
          hints: [
            "Use magnitudes in {{F = k |q_1 q_2| / r^2}}.",
            "Convert both charges from μC to C ({{10^(-6)}}) and square {{0.20}} m.",
          ],
          solution: [
            "{{F = (8.99 * 10^9 * 4.0 * 10^(-6) * 6.0 * 10^(-6)) / 0.20^2}}.",
            "{{F = 0.2158 / 0.040 = 5.39}} N.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q09",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Determine",
          guideRef: "electric-magnetic-fields",
          strategy: "Millikan force balance",
          question:
            "In a Millikan apparatus, an oil drop of mass {{4.80 * 10^(-15)}} kg hovers stationary between two horizontal parallel plates {{1.0}} cm apart when the potential difference is {{981}} V ({{g = 9.81}} m s⁻², {{e = 1.60 * 10^(-19)}} C). Determine the integer number of excess electrons carried by the drop.",
          answer: { type: "number", value: 3, tolerance: 0.05, display: "3 electrons" },
          hints: [
            "Equate upward electric force {{q V / d}} to downward weight {{m g}} to find charge {{q}}.",
            "Divide {{q}} by the elementary charge {{e = 1.60 * 10^(-19)}} C.",
          ],
          solution: [
            "Electric field: {{E = V / d = 981 / 0.010 = 9.81 * 10^4}} V m⁻¹.",
            "Equilibrium {{q E = m g ⇒ q = (4.80 * 10^(-15) * 9.81) / (9.81 * 10^4) = 4.80 * 10^(-19)}} C.",
            "Number of excess electrons: {{n = q / e = (4.80 * 10^(-19)) / (1.60 * 10^(-19)) = 3}}.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q10",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "electric-magnetic-fields",
          marks: 4,
          question:
            "Explain how Millikan's oil-drop experiment demonstrates that electric charge is quantized, including how the charge on a single suspended droplet is determined and how data from many droplets lead to the value of {{e}}.",
          hints: [
            "State the two balanced vertical forces on a hovering droplet and write the equation for {{q}}.",
            "Explain how the droplet's mass is obtained (from terminal velocity with the field switched off) and how {{e}} emerges as the highest common factor of all measured charges.",
          ],
          modelAnswer:
            "Charged oil droplets are sprayed between horizontal parallel plates with adjustable potential difference V and separation d. When a droplet is held stationary, its upward electrostatic force balances its downward weight: qV/d = mg, giving q = mgd/V (with mass m found from the droplet's terminal speed in air when the voltage is switched off). Measuring q for hundreds of different droplets shows that every measured charge is an integer multiple of a smallest discrete unit (q = ne). The greatest common divisor of all observed charges equals the elementary charge e = 1.60 × 10⁻¹⁹ C, proving quantization.",
          markScheme: [
            {
              point: "States vertical force balance qE = mg (or qV/d = mg) for a hovering droplet.",
              keywords: ["qv/d = mg", "qe = mg", "balances its downward weight", "hovering"],
            },
            {
              point: "Notes how droplet mass/radius is determined independently (e.g. terminal velocity with field off).",
              keywords: ["terminal speed", "terminal velocity", "voltage is switched off"],
            },
            {
              point: "States all measured droplet charges are integer multiples of a fundamental quantum (q = ne).",
              keywords: ["integer multiple", "q = ne", "discrete"],
            },
            {
              point: "Identifies the greatest common divisor / smallest step size across many droplets as e = 1.60 × 10⁻¹⁹ C.",
              keywords: ["greatest common divisor", "highest common factor", "1.60"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics or incorrect mechanism.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States force balance qV/d = mg OR notes charge comes in multiples of e, with partial reasoning.",
              indicators: ["Writes qE = mg correctly", "Mentions discrete multiples without explaining data analysis"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Complete experimental chain: force balance, independent mass determination, and greatest-common-factor deduction of e = 1.60 × 10⁻¹⁹ C.",
              indicators: ["Links terminal speed to mass m", "Explicitly explains GCD / integer steps across many droplets"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q11",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "electric-magnetic-fields",
          strategy: "Zero-field square-root shortcut",
          question:
            "Two point charges {{+4.0}} μC and {{+16.0}} μC are fixed {{0.60}} m apart. Calculate the distance (in m) from the {{+4.0}} μC charge along the line joining them where the net electric field is zero.",
          answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20 m" },
          traps: [
            {
              spec: { type: "number", value: 0.12, tolerance: 0.005 },
              feedback: "You forgot to take the square root of the charge ratio {{16 / 4 = 4}} (giving {{2}}, not {{4}}).",
            },
          ],
          hints: [
            "Set the field magnitudes equal at distance {{x}} from {{+4.0}} μC: {{4 / x^2 = 16 / (0.60 - x)^2}}.",
            "Take the square root of both sides: {{(0.60 - x) / x = 2}}.",
          ],
          solution: [
            "{{(k * 4.0) / x^2 = (k * 16.0) / (0.60 - x)^2 ⇒ ((0.60 - x) / x)^2 = 4}}.",
            "Take positive square root: {{(0.60 - x) / x = 2 ⇒ 0.60 - x = 2 x ⇒ 3 x = 0.60 ⇒ x = 0.20}} m.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q12",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Compare and contrast",
          guideRef: "electric-magnetic-fields",
          marks: 3,
          question:
            "Compare and contrast Newton's law of universal gravitation and Coulomb's law of electrostatics.",
          hints: [
            "Identify one structural mathematical similarity (inverse-square dependence on centre-to-centre separation).",
            "Identify two physical differences (attractive-only vs attractive/repulsive, medium dependence, or relative strength).",
          ],
          modelAnswer:
            "Both are inverse-square central force laws proportional to the product of the interacting properties (masses or charges) and inversely proportional to r². However, gravitational force is always attractive because mass has only one sign, whereas electrostatic force can be either attractive or repulsive depending on whether charges are opposite or like. Furthermore, electrostatic force depends on the permittivity of the intervening medium (and is enormously stronger at the atomic scale), whereas gravity is unaffected by the medium.",
          markScheme: [
            {
              point: "Similarity: both follow an inverse-square law (∝ 1/r²) proportional to the product of masses/charges.",
              keywords: ["inverse-square", "inverse square", "1/r"],
            },
            {
              point: "Difference 1: gravity is strictly attractive, whereas electrostatic force can be attractive or repulsive.",
              keywords: ["always attractive", "repulsive"],
            },
            {
              point: "Difference 2: electrostatic force depends on the permittivity of the medium (or is vastly stronger per fundamental particle) while gravity is unaffected by the medium.",
              keywords: ["permittivity", "medium", "stronger"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q13",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Describe",
          guideRef: "electric-magnetic-fields",
          marks: 3,
          question:
            "Describe the magnetic field pattern inside and outside a long current-carrying solenoid, and explain how to identify its magnetic North pole.",
          hints: [
            "Describe the spacing and shape of lines inside the core versus outside.",
            "State the right-hand grip rule for a coil/solenoid.",
          ],
          modelAnswer:
            "Inside a long solenoid, the magnetic field lines are straight, parallel, and equally spaced, indicating a strong uniform field along the axis. Outside the solenoid, the field lines loop back from the North end to the South end in closed loops resembling a bar magnet's field (much weaker and spreading out). Using the right-hand grip rule, curl the fingers of your right hand in the direction of conventional current around the coils; your extended thumb points directly towards the solenoid's North pole.",
          markScheme: [
            {
              point: "Inside: parallel, straight, equally spaced field lines representing a uniform field.",
              keywords: ["parallel", "equally spaced", "uniform"],
            },
            {
              point: "Outside: curved closed loops returning from North to South like a bar magnet.",
              keywords: ["bar magnet", "closed loops", "curved"],
            },
            {
              point: "Right-hand grip rule: curled fingers follow conventional current, thumb points to North pole.",
              keywords: ["right-hand", "right hand", "thumb", "curled fingers"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p1-q14",
          kind: "short",
          level: "SL",
          difficulty: "challenge",
          commandTerm: "Calculate",
          guideRef: "electric-magnetic-fields",
          strategy: "2D projectile kinematics in uniform E-field",
          question:
            "An electron ({{e = 1.60 * 10^(-19)}} C, {{m_e = 9.11 * 10^(-31)}} kg) enters horizontally at {{2.0 * 10^7}} m s⁻¹ midway between horizontal parallel plates of length {{0.080}} m with a uniform downward electric field of {{1.14 * 10^4}} V m⁻¹. Calculate the vertical upward deflection of the electron as it exits the plates, in mm (to 2 s.f.).",
          answer: { type: "number", value: 16, tolerance: 0.4, display: "16 mm" },
          hints: [
            "Find the transit time {{t = L / v_x}} using the constant horizontal velocity.",
            "Find vertical acceleration {{a = e E / m_e}} (ignoring tiny weight {{m_e g}}).",
            "Compute vertical displacement {{y = (1/2) a t^2}} and convert metres to millimetres.",
          ],
          solution: [
            "Transit time: {{t = 0.080 / (2.0 * 10^7) = 4.0 * 10^(-9)}} s.",
            "Upward acceleration: {{a = (e E) / m_e = (1.60 * 10^(-19) * 1.14 * 10^4) / (9.11 * 10^(-31)) = 2.00 * 10^15}} m s⁻².",
            "Vertical deflection: {{y = (1/2) a t^2 = 0.5 * 2.00 * 10^15 * (4.0 * 10^(-9))^2 = 0.0160}} m = {{16}} mm.",
          ],
        },
        {
          id: "d1-fields-motion-p1-q15",
          kind: "written",
          level: "SL",
          difficulty: "challenge",
          commandTerm: "Discuss",
          guideRef: "gravitational-fields-orbits",
          marks: 5,
          question:
            "A space agency compares placing an Earth-observation satellite in a polar low-Earth orbit (altitude {{800}} km) versus a geostationary orbit. Discuss how the two orbits differ in orbital radius, orbital speed, orbital period, gravitational field strength, and Earth-surface coverage.",
          hints: [
            "Apply {{v = sqrt(GM/r)}}, {{T^2 ∝ r^3}}, and {{g = GM/r^2}} to compare low vs high orbits.",
            "Compare global high-resolution scanning over Earth's rotating surface (polar LEO) with continuous fixed-hemisphere monitoring (geostationary).",
          ],
          modelAnswer:
            "The geostationary orbit has a much larger orbital radius (about 42 200 km from Earth's centre) than the polar low-Earth orbit (about 7170 km). Because orbital speed scales as v = √(GM/r), the geostationary satellite travels significantly slower (~3.1 km s⁻¹ vs ~7.5 km s⁻¹). By Kepler's Third Law (T² ∝ r³), the geostationary period is exactly 24 hours whereas the low polar orbit takes only ~100 minutes. Since g = GM/r², the gravitational field strength at geostationary height is much weaker (~0.22 N kg⁻¹ vs ~7.7 N kg⁻¹). Finally, a polar LEO sweeps over the entire globe (including poles) at close range for high-resolution imaging, whereas a geostationary satellite stays permanently fixed above one equatorial longitude for uninterrupted real-time monitoring of one hemisphere.",
          markScheme: [
            {
              point: "Radius: geostationary has a much larger orbital radius (~42 200 km) than polar LEO (~7170 km).",
              keywords: ["much larger", "42 200", "larger orbital"],
            },
            {
              point: "Speed: geostationary moves slower because v = √(GM/r) decreases with r.",
              keywords: ["slower", "decreases with r", "3.1"],
            },
            {
              point: "Period: geostationary period is 24 h, far longer than LEO (~100 min) via T² ∝ r³.",
              keywords: ["24 hour", "24 h", "kepler"],
            },
            {
              point: "Field strength: g = GM/r² is much weaker at geostationary altitude than in LEO.",
              keywords: ["much weaker", "0.22", "weaker"],
            },
            {
              point: "Coverage trade-off: polar LEO maps the whole Earth in high detail; geostationary gives continuous fixed coverage over one region/hemisphere (poor polar view).",
              keywords: ["entire globe", "high-resolution", "continuous", "permanently fixed"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid physical comparison.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly compares 1–2 orbital parameters without linking them to inverse-square or Kepler laws.",
              indicators: ["Identifies 24 h period or higher altitude only"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately contrasts radius, speed, period and g using physical relationships, with brief coverage comment.",
              indicators: ["Uses v ∝ 1/√r and g ∝ 1/r² explicitly"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Comprehensive comparison across all five dimensions with explicit equations/scalings and clear remote-sensing trade-offs.",
              indicators: ["Addresses all 5 quantities plus polar global mapping vs fixed continuous monitoring"],
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2: Potentials [HL] & Motion in EM Fields [SL] (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "d1-fields-motion-p2",
      title: "Paper 2 · Potentials, Escape Velocity & Motion in EM Fields",
      level: "SL",
      questions: [
        {
          id: "d1-fields-motion-p2-q01",
          kind: "written",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Define",
          guideRef: "gravitational-electric-potentials-hl",
          marks: 2,
          question:
            "Define gravitational potential at a point and explain why its value is always negative.",
          hints: [
            "Reference infinity in the work-per-unit-mass definition.",
            "Combine the zero reference at infinity with the purely attractive nature of gravity.",
          ],
          modelAnswer:
            "Gravitational potential at a point is the work done per unit mass in bringing a small test mass from infinity to that point (V_g = −GM/r). It is always negative because zero potential is defined at infinity and gravity is exclusively attractive, so an external agent must supply positive energy to pull a mass outward from the potential well back to zero at infinity.",
          markScheme: [
            {
              point: "Defines V_g as work done per unit mass bringing a small test mass from infinity to that point.",
              keywords: ["work done per unit mass", "infinity"],
            },
            {
              point: "Explains zero is set at infinity and gravity is purely attractive (so mass sits in a negative potential well).",
              keywords: ["purely attractive", "exclusively attractive", "potential well", "zero potential"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "gravitational-electric-potentials-hl",
          question:
            "The Moon has mass {{M = 7.35 * 10^22}} kg and radius {{R = 1.74 * 10^6}} m. Calculate the gravitational potential at the Moon's surface in J kg⁻¹ to 3 s.f. (use {{G = 6.67 * 10^(-11)}} N m² kg⁻²; include the minus sign).",
          answer: { type: "number", value: -2.82e6, tolerance: 3e4, display: "{{-2.82 * 10^6}} J kg⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 2.82e6, tolerance: 3e4 },
              feedback: "Remember gravitational potential is always **negative**: {{V_g = -G M / R}}.",
            },
          ],
          hints: [
            "Use {{V_g = -G M / R}} (note {{R}} is to the first power, not squared!).",
            "Don't forget the negative sign.",
          ],
          solution: [
            "{{V_g = -(G M) / R = -(6.67 * 10^(-11) * 7.35 * 10^22) / (1.74 * 10^6)}}.",
            "{{V_g = -(4.902 * 10^12) / (1.74 * 10^6) = -2.82 * 10^6}} J kg⁻¹.",
          ],
        },
        {
          id: "d1-fields-motion-p2-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "gravitational-electric-potentials-hl",
          question:
            "Using the Moon's mass {{M = 7.35 * 10^22}} kg and radius {{R = 1.74 * 10^6}} m, calculate the escape velocity from the lunar surface in m s⁻¹ (to 3 s.f.).",
          answer: { type: "number", value: 2370, tolerance: 20, display: "2370 m s⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 1680, tolerance: 20 },
              feedback: "That is the circular orbital speed {{sqrt(G M / R)}} — escape speed needs the factor of 2 inside the root: {{sqrt(2 G M / R)}}.",
            },
          ],
          hints: [
            "Apply {{v_esc = sqrt(2 G M / R)}} (or {{sqrt(-2 V_g)}}).",
            "Substitute {{M = 7.35 * 10^22}} kg and {{R = 1.74 * 10^6}} m.",
          ],
          solution: [
            "{{v_esc = sqrt((2 G M) / R) = sqrt((2 * 6.67 * 10^(-11) * 7.35 * 10^22) / (1.74 * 10^6))}}.",
            "{{v_esc = sqrt(5.635 * 10^6) = 2374}} m s⁻¹ ≈ {{2370}} m s⁻¹.",
          ],
        },
        {
          id: "d1-fields-motion-p2-q04",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Derive",
          guideRef: "gravitational-electric-potentials-hl",
          marks: 3,
          question:
            "Derive the expression {{E_T = -(G M m) / (2 r)}} for the total mechanical energy of a satellite of mass {{m}} in a circular orbit of radius {{r}} around a planet of mass {{M}}.",
          hints: [
            "Start from {{G M m / r^2 = m v^2 / r}} to express kinetic energy {{E_k = (1/2) m v^2}}.",
            "Add {{E_k}} and gravitational potential energy {{E_p = -G M m / r}}.",
          ],
          modelAnswer:
            "Equating gravitational pull to centripetal force gives GMm/r² = mv²/r, so mv² = GMm/r. Multiplying by 1/2 yields kinetic energy E_k = +GMm/(2r). Adding the gravitational potential energy E_p = −GMm/r gives total energy E_T = GMm/(2r) − GMm/r = −GMm/(2r).",
          markScheme: [
            {
              point: "Uses circular orbit balance GMm/r² = mv²/r to obtain E_k = +GMm/(2r).",
              keywords: ["centripetal", "gm m/(2r)", "gmm/(2r)", "kinetic energy"],
            },
            {
              point: "States gravitational potential energy E_p = −GMm/r.",
              keywords: ["potential energy", "-gmm/r", "−gmm/r"],
            },
            {
              point: "Sums E_k + E_p cleanly to obtain E_T = −GMm/(2r).",
              keywords: ["-gmm/(2r)", "−gmm/(2r)", "total energy"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "gravitational-electric-potentials-hl",
          strategy: "Scalar superposition of electric potential",
          question:
            "Two point charges {{+5.0}} μC and {{-3.0}} μC are fixed {{0.40}} m apart in vacuum ({{k = 8.99 * 10^9}} N m² C⁻²). Calculate the net electric potential at the midpoint between them in kV (to 3 s.f.).",
          answer: { type: "number", value: 89.9, tolerance: 0.5, display: "89.9 kV" },
          traps: [
            {
              spec: { type: "number", value: 360, tolerance: 3 },
              feedback: "You added magnitudes {{5 + 3 = 8}} μC! Electric potential is a signed scalar: {{+5.0 + (-3.0) = +2.0}} μC.",
            },
          ],
          hints: [
            "Distance from each charge to the midpoint is {{r = 0.20}} m.",
            "Add the signed scalar potentials: {{V_e = k(q_1 + q_2) / r}}, then divide by {{1000}} for kV.",
          ],
          solution: [
            "{{r = 0.20}} m, {{q_1 + q_2 = (+5.0 - 3.0) * 10^(-6) = +2.0 * 10^(-6)}} C.",
            "{{V_e = (8.99 * 10^9 * 2.0 * 10^(-6)) / 0.20 = 89 900}} V = {{89.9}} kV.",
          ],
        },
        {
          id: "d1-fields-motion-p2-q06",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "gravitational-electric-potentials-hl",
          marks: 3,
          question:
            "Explain why electric field lines must always intersect equipotential surfaces at {{90°}}, and state how the spacing of adjacent equipotentials indicates field strength.",
          hints: [
            "Suppose a field component existed parallel to an equipotential surface — what would happen to work done moving a charge along that surface?",
            "Relate field magnitude to {{|ΔV_e / Δr|}}.",
          ],
          modelAnswer:
            "Every point on an equipotential surface has the same potential (ΔV = 0), so zero work (W = qΔV = 0) is done when moving a test charge along the surface. If the electric field had a non-zero component parallel to the surface, a force would act along the displacement and non-zero work would be done, which is a contradiction; hence field lines must be perpendicular (90°) to equipotentials. Because E = −ΔV/Δr, closer spacing between equal-ΔV equipotentials indicates a larger potential gradient and therefore a stronger electric field.",
          markScheme: [
            {
              point: "States zero work is done moving a charge along an equipotential because ΔV = 0.",
              keywords: ["zero work", "δv = 0", "dv = 0", "same potential"],
            },
            {
              point: "Deduces there can be no component of force/field parallel to the surface, so field lines meet at 90°.",
              keywords: ["no component", "parallel", "perpendicular"],
            },
            {
              point: "Links closer equipotential spacing (for equal ΔV) to a steeper potential gradient and stronger field via E = −ΔV/Δr.",
              keywords: ["closer spacing", "gradient", "stronger"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "gravitational-electric-potentials-hl",
          strategy: "Orbital transfer energy ΔE_T",
          question:
            "A {{1200}} kg satellite orbits Earth ({{M = 5.97 * 10^24}} kg) in a circular orbit of radius {{r_1 = 7.00 * 10^6}} m and is transferred to a higher circular orbit of radius {{r_2 = 1.40 * 10^7}} m. Calculate the minimum energy required for this transfer in GJ (to 3 s.f.).",
          answer: { type: "number", value: 17.1, tolerance: 0.2, display: "17.1 GJ" },
          traps: [
            {
              spec: { type: "number", value: 34.1, tolerance: 0.4 },
              feedback: "That is {{ΔE_p}} alone! Because the satellite slows down in the higher orbit, half of the extra potential energy comes from its drop in kinetic energy, so {{ΔE_T = (1/2) ΔE_p}}.",
            },
          ],
          hints: [
            "Use total orbital energy {{E_T = -G M m / (2 r)}} for both orbits.",
            "Compute {{ΔE_T = E_T2 - E_T1 = (G M m / 2)(1 / r_1 - 1 / r_2)}} and convert to GJ ({{10^9}} J).",
          ],
          solution: [
            "{{ΔE_T = -(G M m) / (2 r_2) - (-(G M m) / (2 r_1)) = ((G M m) / 2) (1 / r_1 - 1 / r_2)}}.",
            "Since {{r_2 = 2 r_1}}, {{1 / r_1 - 1 / r_2 = 1 / (2 r_1)}}, so {{ΔE_T = (G M m) / (4 r_1)}}.",
            "{{ΔE_T = (6.67 * 10^(-11) * 5.97 * 10^24 * 1200) / (4 * 7.00 * 10^6) = 1.707 * 10^10}} J ≈ {{17.1}} GJ.",
          ],
        },
        {
          id: "d1-fields-motion-p2-q08",
          kind: "written",
          level: "SL",
          difficulty: "warmup",
          commandTerm: "Explain",
          guideRef: "motion-em-fields",
          marks: 2,
          question:
            "Explain why a uniform static magnetic field changes the velocity of a moving charged particle without changing its kinetic energy.",
          hints: [
            "State the angle between the magnetic force and the velocity vector.",
            "Link perpendicular force to zero work done and constant speed.",
          ],
          modelAnswer:
            "The magnetic Lorentz force acts permanently at 90° (perpendicular) to the particle's instantaneous velocity vector, which alters the direction of motion and therefore changes the vector velocity. Because force and displacement are perpendicular, the magnetic field performs zero work (W = Fs cos 90° = 0), so the particle's speed and kinetic energy remain unchanged.",
          markScheme: [
            {
              point: "States magnetic force is always perpendicular to velocity, changing direction (hence velocity).",
              keywords: ["perpendicular", "90°", "direction"],
            },
            {
              point: "Concludes zero work is done (cos 90° = 0), so speed and kinetic energy stay constant.",
              keywords: ["zero work", "cos 90", "unchanged", "constant"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q09",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "motion-em-fields",
          question:
            "A proton ({{m = 1.67 * 10^(-27)}} kg, {{q = 1.60 * 10^(-19)}} C) enters a uniform {{0.50}} T magnetic field perpendicularly at {{4.0 * 10^6}} m s⁻¹. Calculate the radius of its circular path in cm (to 3 s.f.).",
          answer: { type: "number", value: 8.35, tolerance: 0.08, display: "8.35 cm" },
          hints: [
            "Equate {{q v B = m v^2 / r}} to get {{r = m v / (q B)}}.",
            "Multiply your result in metres by {{100}} to convert to cm.",
          ],
          solution: [
            "{{r = (m v) / (q B) = (1.67 * 10^(-27) * 4.0 * 10^6) / (1.60 * 10^(-19) * 0.50)}}.",
            "{{r = (6.68 * 10^(-21)) / (8.00 * 10^(-20)) = 0.0835}} m = {{8.35}} cm.",
          ],
        },
        {
          id: "d1-fields-motion-p2-q10",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Determine",
          guideRef: "motion-em-fields",
          strategy: "Mass spectrometer identification",
          question:
            "Singly ionised atoms ({{q = 1.60 * 10^(-19)}} C) pass undeflected through a velocity selector ({{E = 3.0 * 10^4}} V m⁻¹, {{B = 0.15}} T) and enter a deflection chamber with {{B' = 0.25}} T, curving in a circular arc of radius {{0.100}} m. Determine the ion mass in unified atomic mass units u ({{1}} u = {{1.66 * 10^(-27)}} kg), to 2 s.f.",
          answer: { type: "number", value: 12, tolerance: 0.2, display: "12 u" },
          hints: [
            "First find the selected speed {{v = E / B}}.",
            "Rearrange {{r = m v / (q B')}} for mass {{m}} in kg, then divide by {{1.66 * 10^(-27)}} kg.",
          ],
          solution: [
            "Selected speed: {{v = E / B = (3.0 * 10^4) / 0.15 = 2.0 * 10^5}} m s⁻¹.",
            "Ion mass: {{m = (q B' r) / v = (1.60 * 10^(-19) * 0.25 * 0.100) / (2.0 * 10^5) = 2.00 * 10^(-26)}} kg.",
            "In atomic mass units: {{m = (2.00 * 10^(-26)) / (1.66 * 10^(-27)) = 12.0}} u (Carbon-12).",
          ],
        },
        {
          id: "d1-fields-motion-p2-q11",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "motion-em-fields",
          marks: 4,
          question:
            "Explain how a Bainbridge mass spectrometer uses a velocity selector followed by a uniform deflection chamber to separate isotopes of the same element, including the key equations.",
          hints: [
            "Explain how perpendicular E and B fields balance forces so only ions with {{v = E / B}} pass the slit.",
            "Show how the deflection chamber bends ions into semicircular arcs of radius {{r = m v / (q B')}}, separating isotopes by mass-to-charge ratio.",
          ],
          modelAnswer:
            "Ionised atoms enter crossed perpendicular electric (E) and magnetic (B) fields arranged so the electric force qE and magnetic force qvB act in opposite directions. Only ions whose speed satisfies qE = qvB, giving v = E/B, experience zero net force and pass straight through the collimating slit regardless of mass or charge. These equal-speed ions then enter a uniform magnetic field B' perpendicular to their velocity, where the magnetic force supplies the centripetal force qvB' = mv²/r, bending them into circular paths of radius r = mv/(qB'). Because v, B' and charge q are identical for singly ionised isotopes, radius r is directly proportional to mass m, so heavier isotopes trace wider semicircles and hit the detector at distinct positions (distance 2r from the slit).",
          markScheme: [
            {
              point: "Explains crossed E and B fields exert opposing forces qE and qvB inside the velocity selector.",
              keywords: ["opposing", "opposite direction", "qe", "qvb"],
            },
            {
              point: "Derives selected speed v = E/B for undeflected passage through the slit.",
              keywords: ["v = e/b", "e/b", "undeflected"],
            },
            {
              point: "Equates qvB' = mv²/r in the uniform B-field chamber to obtain circular radius r = mv/(qB').",
              keywords: ["mv²/r", "mv^2/r", "mv/(qb", "centripetal"],
            },
            {
              point: "Concludes r ∝ m for identical v, q and B', so different isotopes land at distinct detector distances 2r.",
              keywords: ["proportional to mass", "heavier", "distinct", "detector"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes either the velocity selector OR magnetic circular deflection with limited algebraic links.",
              indicators: ["Quotes v = E/B or r = mv/(qB) without full force derivations"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear physical and algebraic explanation of both stages, showing why identical-charge isotopes separate spatially by mass.",
              indicators: ["Derives both v = E/B and r = mv/(qB')", "Explicitly links r ∝ m to distinct detector positions"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q12",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "motion-em-fields",
          question:
            "Two long straight parallel wires separated by {{4.0}} cm carry currents of {{6.0}} A and {{10.0}} A in opposite directions. Using {{μ_0 = 4 pi * 10^(-7)}} T m A⁻¹, calculate the magnitude of the magnetic force on a {{1.5}} m length of either wire in mN ({{10^(-3)}} N).",
          answer: { type: "number", value: 0.45, tolerance: 0.01, display: "0.45 mN" },
          hints: [
            "Convert {{4.0}} cm to {{0.040}} m and use {{F = (μ_0 I_1 I_2 L) / (2 pi r)}}.",
            "Multiply your answer in N by {{1000}} to express in mN.",
          ],
          solution: [
            "{{F / L = (2.00 * 10^(-7) * 6.0 * 10.0) / 0.040 = 3.0 * 10^(-4)}} N m⁻¹.",
            "{{F = 3.0 * 10^(-4) * 1.5 = 4.5 * 10^(-4)}} N = {{0.45}} mN (repulsive).",
          ],
        },
        {
          id: "d1-fields-motion-p2-q13",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "motion-em-fields",
          marks: 3,
          question:
            "Explain, using magnetic field directions and Fleming's left-hand rule, why two long parallel conductors carrying currents in the same direction attract each other, and state why both wires experience equal-magnitude forces even when {{I_1 ≠ I_2}}.",
          hints: [
            "Use the right-hand grip rule on wire 1 to find the direction of its magnetic field at wire 2.",
            "Apply Fleming's left-hand rule to wire 2, then cite Newton's Third Law (or the symmetry of {{I_1 I_2}}).",
          ],
          modelAnswer:
            "By the right-hand grip rule, wire 1 creates concentric circular magnetic field lines around itself; at the position of wire 2 (say to its right, with both currents upwards), wire 1's magnetic field points perpendicularly into the page. Applying Fleming's left-hand rule to wire 2 (first finger into the page, second finger upwards along current I₂), the thumb points to the left — directly towards wire 1, so the wires attract. Both wires feel forces of identical magnitude because they form a Newton's Third Law action–reaction pair (confirmed algebraically since F/L = μ₀I₁I₂/(2πr) is symmetric in I₁ and I₂).",
          markScheme: [
            {
              point: "Uses right-hand grip rule on wire 1 to establish the perpendicular B-field direction at wire 2.",
              keywords: ["right-hand grip", "right hand grip", "circular magnetic field", "into the page"],
            },
            {
              point: "Applies Fleming's left-hand rule to wire 2 showing force points towards wire 1 (attraction).",
              keywords: ["thumb", "towards wire 1", "attract"],
            },
            {
              point: "Explains equal magnitude via Newton's Third Law (or symmetry of the product I₁I₂ in F/L).",
              keywords: ["third law", "3rd law", "action", "symmetric"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Explain",
          guideRef: "gravitational-electric-potentials-hl",
          marks: 4,
          question:
            "Explain the 'satellite drag paradox': why slight atmospheric resistance in low Earth orbit causes a satellite's orbital speed and kinetic energy to **increase** even though friction removes mechanical energy from the satellite.",
          hints: [
            "Write {{E_T = -G M m / (2 r)}}, {{E_p = -G M m / r}}, and {{E_k = +G M m / (2 r)}}.",
            "Track what happens to {{r}} when {{E_T}} decreases (becomes more negative), and trace how the drop in {{E_p}} splits between thermal heating and extra {{E_k}}.",
          ],
          modelAnswer:
            "Work done against atmospheric drag dissipates mechanical energy as heat, causing the satellite's total mechanical energy E_T = −GMm/(2r) to decrease (become more negative). For E_T to become more negative, the orbital radius r must shrink as the satellite spirals lower. At a smaller radius r, gravitational potential energy E_p = −GMm/r drops by twice the loss in total energy; half of this released potential energy is converted into thermal energy via drag while the remaining half increases the satellite's kinetic energy E_k = +GMm/(2r), making it move faster (v = √(GM/r)).",
          markScheme: [
            {
              point: "Drag dissipates energy as thermal energy, reducing total energy E_T = −GMm/(2r) (making it more negative).",
              keywords: ["heat", "thermal", "more negative"],
            },
            {
              point: "Deduces orbital radius r decreases as E_T becomes more negative.",
              keywords: ["radius r", "shrink", "spirals lower", "smaller radius"],
            },
            {
              point: "Shows E_k = +GMm/(2r) (or v = √(GM/r)) increases when r shrinks.",
              keywords: ["gm m/(2r)", "gmm/(2r)", "faster", "v = √(gm/r)"],
            },
            {
              point: "Quantitatively notes that lost gravitational potential energy (ΔE_p = −2ΔE_k) splits equally between thermal dissipation and kinetic energy gain.",
              keywords: ["potential energy", "half", "twice"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics or claims satellite slows down.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States orbit drops to smaller radius where v is larger, without energy-budget justification.",
              indicators: ["Mentions r decreases so v increases via v = √(GM/r)"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Full HL energy analysis connecting negative E_T, shrinking r, and the 50/50 split of released gravitational potential energy into heat and kinetic energy.",
              indicators: ["Uses E_T = −GMm/(2r) and E_p = −GMm/r explicitly", "Explains energy conservation cleanly"],
            },
          ],
        },
        {
          id: "d1-fields-motion-p2-q15",
          kind: "written",
          level: "SL",
          difficulty: "challenge",
          commandTerm: "Compare and contrast",
          guideRef: "motion-em-fields",
          marks: 5,
          question:
            "Compare and contrast the motion of a proton entering perpendicularly into (i) a uniform electric field and (ii) a uniform magnetic field, addressing force direction, path shape, work done, kinetic energy, and the effect of doubling the proton's entry speed.",
          hints: [
            "In a uniform E-field, force {{q E}} stays constant in one fixed direction (like gravity on a horizontal projectile).",
            "In a uniform B-field, force {{q v B}} stays perpendicular to velocity at all times, tracing a circle of radius {{r = m v / (q B)}}.",
          ],
          modelAnswer:
            "In both fields the proton experiences a transverse force proportional to its charge q that deflects it from a straight line. In the uniform electric field, the force F = qE stays fixed in magnitude and direction parallel to E, producing constant acceleration and a parabolic trajectory; the electric field does positive work on the proton, increasing its speed and kinetic energy. In contrast, in the uniform magnetic field the force F = qvB continuously rotates to stay perpendicular to velocity, acting as a centripetal force that produces a circular path; zero work is done so speed and kinetic energy remain constant. If the entry speed is doubled, in the electric field the transit time across plates halves and the vertical deflection drops to one-quarter (y ∝ 1/v²), whereas in the magnetic field the circular radius doubles (r = mv/(qB) ∝ v) while the orbital period stays unchanged.",
          markScheme: [
            {
              point: "Similarity: both deflect the proton transversely with force proportional to charge q.",
              keywords: ["transverse", "proportional to its charge", "deflect"],
            },
            {
              point: "E-field force is fixed in direction (parallel to E) producing a parabolic trajectory.",
              keywords: ["parabolic", "parallel to e", "fixed in magnitude"],
            },
            {
              point: "B-field force remains perpendicular to velocity producing a circular path.",
              keywords: ["circular", "centripetal", "perpendicular to velocity"],
            },
            {
              point: "Work & KE contrast: E-field does positive work (KE increases), whereas B-field does zero work (KE constant).",
              keywords: ["positive work", "zero work", "remain constant"],
            },
            {
              point: "Doubling speed: E-field deflection decreases (quarters across fixed plates, y ∝ 1/v²), while B-field circular radius doubles (r ∝ v).",
              keywords: ["one-quarter", "radius doubles", "1/v"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies parabolic vs circular trajectories or constant vs increasing KE with limited detail.",
              indicators: ["Correctly names parabola and circle"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly contrasts force direction, path shape, work done and kinetic energy in both fields.",
              indicators: ["Links perpendicular B-force to zero work and parallel E-force to positive work"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, rigorous comparison across all five criteria including quantitative scaling when entry speed doubles.",
              indicators: ["Includes both y ∝ 1/v² in E-field and r ∝ v in B-field"],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET — 8 stretch IB SL/HL synthesis questions
  // ===========================================================================
  challenge: [
    {
      id: "d1-fields-motion-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "gravitational-electric-potentials-hl",
      strategy: "Scalar superposition of gravitational potential",
      question:
        "Two identical stars, each of mass {{M = 2.00 * 10^30}} kg, have centres separated by {{4.00 * 10^11}} m. Calculate the total gravitational potential at the exact midpoint between them in J kg⁻¹ (to 3 s.f., using {{G = 6.67 * 10^(-11)}} N m² kg⁻²; include the minus sign).",
      answer: { type: "number", value: -1.33e9, tolerance: 2e7, display: "{{-1.33 * 10^9}} J kg⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0, tolerance: 1e-6 },
          feedback: "The gravitational **field** {{g}} is zero at the midpoint, NOT the gravitational potential! Negative scalars add rather than cancel.",
        },
        {
          spec: { type: "number", value: -6.67e8, tolerance: 1e7 },
          feedback: "You calculated the potential of only one star (or used {{d}} instead of {{d/2}}). Both stars contribute equally!",
        },
      ],
      hints: [
        "Distance from each star to the midpoint is {{r = 2.00 * 10^11}} m.",
        "Gravitational potential is a negative scalar — add the contributions from both stars: {{V_total = 2(-G M / r)}}.",
      ],
      solution: [
        "Each star lies at {{r = 2.00 * 10^11}} m from the midpoint.",
        "{{V_total = -(G M) / r - (G M) / r = -(2 G M) / r}}.",
        "{{V_total = -(2 * 6.67 * 10^(-11) * 2.00 * 10^30) / (2.00 * 10^11) = -1.33 * 10^9}} J kg⁻¹.",
      ],
    },
    {
      id: "d1-fields-motion-ch-q02",
      kind: "short",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "gravitational-fields-orbits",
      strategy: "Binary star orbit separation vs radius",
      question:
        "Two identical stars of mass {{M = 1.50 * 10^30}} kg each orbit their common centre of mass in a circle of radius {{R = 1.00 * 10^11}} m, remaining diametrically opposite each other. Calculate the orbital speed of each star in m s⁻¹ (to 3 s.f.).",
      answer: { type: "number", value: 15800, tolerance: 150, display: "15800 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 31600, tolerance: 300 },
          feedback: "You used {{R^2}} instead of {{(2 R)^2}} in Newton's gravitation! The stars are separated by the full diameter {{2 R}}.",
        },
      ],
      hints: [
        "Centre-to-centre distance between the two stars is {{2 R = 2.00 * 10^11}} m, while each star's circular path radius is {{R}}.",
        "Equate {{G M^2 / (2 R)^2 = M v^2 / R}} and solve for {{v = sqrt(G M / (4 R))}}.",
      ],
      solution: [
        "Gravitational pull equals centripetal force: {{(G M^2) / (2 R)^2 = (M v^2) / R}}.",
        "Simplify: {{v = sqrt((G M) / (4 R)) = sqrt((6.67 * 10^(-11) * 1.50 * 10^30) / (4.00 * 10^11))}}.",
        "{{v = sqrt(2.501 * 10^8) = 15 815}} m s⁻¹ ≈ {{15 800}} m s⁻¹.",
      ],
    },
    {
      id: "d1-fields-motion-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "gravitational-electric-potentials-hl",
      strategy: "Energy conservation at closest approach",
      question:
        "An alpha particle ({{q = 3.20 * 10^(-19)}} C) with kinetic energy {{8.00 * 10^(-13)}} J ({{5.00}} MeV) is fired head-on from infinity towards a fixed gold nucleus ({{Q = 79 e = 1.264 * 10^(-17)}} C). Using {{k = 8.99 * 10^9}} N m² C⁻², calculate the distance of closest approach in m (give your answer in standard form to 3 s.f.).",
      answer: {
        type: "number",
        value: 4.55e-14,
        tolerance: 0.06e-14,
        standardForm: true,
        display: "{{4.55 * 10^(-14)}} m",
      },
      hints: [
        "At closest approach, all initial kinetic energy converts into electrostatic potential energy {{E_p = k Q q / d}}.",
        "Rearrange for {{d = k Q q / E_k}}.",
      ],
      solution: [
        "By energy conservation: {{E_k = (k Q q) / d ⇒ d = (k Q q) / E_k}}.",
        "{{d = (8.99 * 10^9 * 1.264 * 10^(-17) * 3.20 * 10^(-19)) / (8.00 * 10^(-13))}}.",
        "{{d = (3.636 * 10^(-26)) / (8.00 * 10^(-13)) = 4.55 * 10^(-14)}} m.",
      ],
    },
    {
      id: "d1-fields-motion-ch-q04",
      kind: "short",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "motion-em-fields",
      strategy: "Isotope diameter separation",
      question:
        "Singly ionised chlorine isotopes ³⁵Cl⁺ ({{m_1 = 35}} u) and ³⁷Cl⁺ ({{m_2 = 37}} u, {{1}} u = {{1.66 * 10^(-27)}} kg, {{q = 1.60 * 10^(-19)}} C) enter a uniform magnetic field {{B = 0.40}} T perpendicularly at {{2.50 * 10^5}} m s⁻¹ and complete semicircles to strike a detector plate. Calculate the linear separation between the two isotope marks on the detector in mm (to 3 s.f.).",
      answer: { type: "number", value: 25.9, tolerance: 0.3, display: "25.9 mm" },
      traps: [
        {
          spec: { type: "number", value: 13.0, tolerance: 0.2 },
          feedback: "That is the difference in **radii** {{r_2 - r_1}}! After a semicircle, ions land a full **diameter** {{2 r}} from the slit, so multiply by 2.",
        },
      ],
      hints: [
        "Each ion strikes the detector at distance {{2 r = 2 m v / (q B)}} from the entry slit.",
        "Subtract directly: {{Δd = 2 (m_2 - m_1) v / (q B)}} with {{m_2 - m_1 = 2}} u.",
      ],
      solution: [
        "Mass difference: {{Δm = 2 * 1.66 * 10^(-27) = 3.32 * 10^(-27)}} kg.",
        "Detector separation equals difference in diameters: {{Δd = (2 Δm v) / (q B)}}.",
        "{{Δd = (2 * 3.32 * 10^(-27) * 2.50 * 10^5) / (1.60 * 10^(-19) * 0.40) = 0.02594}} m = {{25.9}} mm.",
      ],
    },
    {
      id: "d1-fields-motion-ch-q05",
      kind: "short",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Determine",
      guideRef: "motion-em-fields",
      strategy: "Zero-field line between parallel currents",
      question:
        "Two long parallel wires lie in the same plane: Wire 1 carries {{4.0}} A into the page at {{x = 0}}, and Wire 2 carries {{16.0}} A into the page at {{x = 0.30}} m. Determine the position {{x}} (in m, between the two wires) where a third parallel current-carrying wire experiences zero net magnetic force.",
      answer: { type: "number", value: 0.06, tolerance: 0.002, display: "0.060 m" },
      traps: [
        {
          spec: { type: "number", value: 0.1, tolerance: 0.003 },
          feedback: "Careful! Magnetic force per unit length scales as {{1 / r}} (NOT {{1 / r^2}}), so do not take a square root of {{16 / 4}}.",
        },
      ],
      hints: [
        "Between two parallel currents in the same direction, their magnetic forces on a third wire oppose each other.",
        "Equate {{μ_0 I_1 I_3 / (2 pi x) = μ_0 I_2 I_3 / (2 pi (0.30 - x))}} — note the linear power of {{x}}!",
      ],
      solution: [
        "Forces cancel when {{I_1 / x = I_2 / (0.30 - x)}} (since {{F / L ∝ I / r}}, not {{1 / r^2}}).",
        "{{4.0 / x = 16.0 / (0.30 - x) ⇒ 0.30 - x = 4 x ⇒ 5 x = 0.30 ⇒ x = 0.060}} m.",
      ],
    },
    {
      id: "d1-fields-motion-ch-q06",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Derive",
      guideRef: "gravitational-electric-potentials-hl",
      marks: 5,
      question:
        "A spacecraft of mass {{m}} orbits a planet of mass {{M}} in a circular orbit of radius {{R_1}} and uses its engines to move into a higher circular orbit of radius {{R_2 = 3 R_1}}. Derive an expression in terms of {{G}}, {{M}}, {{m}} and {{R_1}} for the minimum work done by the engines, and explain why the spacecraft finishes moving **slower** even though positive work was supplied.",
      hints: [
        "Write total orbital energy {{E_T = -G M m / (2 r)}} at {{R_1}} and {{3 R_1}}, then compute {{W = E_T2 - E_T1}}.",
        "Also compute {{ΔE_p}} and {{ΔE_k}} separately to show where the engine work goes!",
      ],
      modelAnswer:
        "In a circular orbit of radius r, total mechanical energy is E_T = −GMm/(2r). At initial radius R₁, E_T1 = −GMm/(2R₁); at final radius 3R₁, E_T2 = −GMm/(6R₁). The minimum work supplied by the engines equals W = E_T2 − E_T1 = −GMm/(6R₁) − (−GMm/(2R₁)) = +GMm/(3R₁). Although positive work is done on the spacecraft, climbing the gravitational potential well increases potential energy by ΔE_p = +2GMm/(3R₁), which is double the engine work supplied. Therefore the missing half must come from the spacecraft's own kinetic energy (ΔE_k = −GMm/(3R₁)), leaving it travelling slower in the higher orbit (v ∝ 1/√r).",
      markScheme: [
        {
          point: "Writes total orbital energies E_T1 = −GMm/(2R₁) and E_T2 = −GMm/(6R₁).",
          keywords: ["6r", "2r", "total mechanical energy"],
        },
        {
          point: "Subtracts E_T2 − E_T1 accurately to derive W = +GMm/(3R₁).",
          keywords: ["3r", "gmm/(3r", "gm m/(3r"],
        },
        {
          point: "Notes gravitational potential energy increases by ΔE_p = +2GMm/(3R₁) (twice the work supplied).",
          keywords: ["potential well", "double", "2gmm/(3r", "potential energy"],
        },
        {
          point: "Explains kinetic energy must decrease (ΔE_k = −GMm/(3R₁)) to make up the extra potential energy gain.",
          keywords: ["kinetic energy", "decrease", "missing"],
        },
        {
          point: "Confirms final circular speed is lower since v = √(GM/r) decreases with radius.",
          keywords: ["slower", "1/√r", "higher orbit"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid derivation or physical reasoning.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Quotes E_T = −GMm/(2r) with arithmetic slips or qualitatively notes slower speed without energy breakdown.",
          indicators: ["Finds partial energy difference"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Derives W = GMm/(3R₁) cleanly and links slower final speed to gain in gravitational potential energy.",
          indicators: ["Exact expression GMm/(3R₁)", "Mentions conversion of KE into PE"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete derivation of W = GMm/(3R₁) plus exact quantitative energy budget showing ΔE_p = 2W and ΔE_k = −W.",
          indicators: ["Explicitly balances W, ΔE_p and ΔE_k"],
        },
      ],
    },
    {
      id: "d1-fields-motion-ch-q07",
      kind: "short",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "motion-em-fields",
      strategy: "Cyclotron maximum exit energy",
      question:
        "A medical cyclotron has a uniform magnetic field {{B = 1.20}} T and a maximum dee radius {{R = 0.50}} m. Calculate the maximum kinetic energy of emerging protons ({{m_p = 1.67 * 10^(-27)}} kg, {{q = 1.60 * 10^(-19)}} C) in MeV ({{1}} MeV = {{1.60 * 10^(-13)}} J), to 3 s.f.",
      answer: { type: "number", value: 17.2, tolerance: 0.2, display: "17.2 MeV" },
      hints: [
        "At the exit radius {{R}}, find the maximum speed from {{R = m_p v / (q B) ⇒ v = q B R / m_p}}.",
        "Substitute {{v}} into {{E_k = (1/2) m_p v^2 = q^2 B^2 R^2 / (2 m_p)}} and divide by {{1.60 * 10^(-13)}} J MeV⁻¹.",
      ],
      solution: [
        "Exit speed: {{v = (q B R) / m_p = (1.60 * 10^(-19) * 1.20 * 0.50) / (1.67 * 10^(-27)) = 5.749 * 10^7}} m s⁻¹.",
        "Kinetic energy: {{E_k = (1/2) m_p v^2 = 0.5 * 1.67 * 10^(-27) * (5.749 * 10^7)^2 = 2.759 * 10^(-12)}} J.",
        "Convert to MeV: {{E_k = (2.759 * 10^(-12)) / (1.60 * 10^(-13)) = 17.2}} MeV.",
      ],
    },
    {
      id: "d1-fields-motion-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "gravitational-electric-potentials-hl",
      marks: 6,
      question:
        "Consider the straight line joining the surfaces of Earth (mass {{M}}) and the Moon (mass {{m_M < M}}). Analyse how both the net gravitational field strength {{g}} and the net gravitational potential {{V_g}} vary along this line, explaining the exact significance of the neutral point P and why less energy is required to reach Earth from the Moon than to escape completely to infinity.",
      hints: [
        "Locate where Earth's pull equals the Moon's pull (closer to the less massive Moon) and note that {{g}} reverses direction across P.",
        "Track {{V_g = V_Earth + V_Moon}} (always negative!) and show why P corresponds to a local maximum (zero gradient) of {{V_g}}.",
        "Compare the potential barrier height {{V_P - V_Moon}} against {{0 - V_Moon}} (reaching infinity).",
      ],
      modelAnswer:
        "Starting at Earth's surface, the net gravitational field g is strongly directed towards Earth and decreases with distance as Earth's pull weakens and the Moon's opposing pull grows. At a neutral point P much closer to the less massive Moon (where GM/x² = Gm_M/(D − x)²), the two opposing vectors cancel so g = 0; beyond P, g reverses direction and points towards the Moon, rising sharply near the lunar surface. Meanwhile, the total gravitational potential V_g = −GM/x − Gm_M/(D − x) is a scalar sum of two negative terms and remains negative everywhere between the two surfaces. Because g = −ΔV_g/Δr, the zero-field point P corresponds to a negative local maximum (zero-gradient peak or saddle ridge) on the V_g graph, with V_P < 0. A spacecraft launched from the Moon towards Earth only needs enough kinetic energy to climb over the barrier to P, requiring m(V_P − V_Moon) per unit launch, after which Earth's gravity pulls it in for free. Because V_P is negative (below zero at infinity), this barrier ΔV = V_P − V_Moon is strictly smaller than the energy m(0 − V_Moon) required to escape completely to infinity.",
      markScheme: [
        {
          point: "Describes g decreasing from Earth, passing through zero at neutral point P closer to the Moon, then reversing towards the Moon.",
          keywords: ["closer to the less massive moon", "closer to the moon", "reverses direction"],
        },
        {
          point: "States neutral point P satisfies GM/x² = Gm_M/(D − x)² (vector pulls equal and opposite).",
          keywords: ["cancel", "opposing", "gm/x"],
        },
        {
          point: "States V_g is a scalar sum of two negative potentials and remains strictly negative everywhere between them.",
          keywords: ["scalar sum", "remains negative", "strictly negative"],
        },
        {
          point: "Links g = −ΔV_g/Δr to identify P as a negative local maximum (zero gradient peak) of V_g.",
          keywords: ["local maximum", "zero-gradient", "zero gradient", "saddle"],
        },
        {
          point: "Explains a lunar probe only needs energy m(V_P − V_Moon) to crest P before falling towards Earth.",
          keywords: ["climb over", "barrier", "v_p − v_moon", "v_p - v_moon"],
        },
        {
          point: "Concludes this energy is smaller than escaping to infinity because V_P < 0 (strictly below zero potential at infinity).",
          keywords: ["v_p is negative", "below zero", "strictly smaller"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant physics.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Locates the neutral point closer to the Moon and describes g reversing, with little or incorrect treatment of V_g.",
          indicators: ["Correctly explains g = 0 closer to Moon", "Often wrongly claims V_g = 0 at P"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly analyses both g and negative V_g along the line, identifying P as a local peak where ΔV_g/Δr = 0.",
          indicators: ["Explicitly uses g = −ΔV_g/Δr", "Shows V_g < 0 everywhere"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Complete, rigorous synthesis linking vector g, scalar V_g potential barrier at P, and quantitative comparison between Earth-return energy m(V_P − V_Moon) and full escape energy m(0 − V_Moon).",
          indicators: ["Contrasts V_P < 0 directly against V_∞ = 0", "Clear cause-and-effect across all 6 mark points"],
        },
      ],
    },
  ],
};
