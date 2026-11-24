import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ — 10 Questions (6 short + 4 balanced MCQ)
  // ===========================================================================
  quiz: [
    {
      id: "b1-thermal-gases-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "thermal-transfers-radiation",
      question:
        "A {{0.50}} kg block of copper (specific heat capacity {{c = 380}} J kg⁻¹ K⁻¹) is warmed from {{20}} °C to {{70}} °C. Calculate the thermal energy absorbed by the copper in joules.",
      answer: { type: "number", value: 9500, display: "9500 J" },
      traps: [
        {
          spec: { type: "number", value: 13300 },
          feedback: "You multiplied by 70 °C instead of the temperature change ΔT = 70 − 20 = 50 K.",
        },
        {
          spec: { type: "number", value: 19000 },
          feedback: "Remember to multiply by the mass m = 0.50 kg.",
        },
      ],
      solution: [
        "Find the temperature change: {{ΔT = 70 - 20 = 50}} K.",
        "Apply {{Q = m c ΔT = 0.50 * 380 * 50 = 9500}} J.",
      ],
      hints: [
        "Use {{Q = m c ΔT}} with {{ΔT = T_final - T_initial}}.",
      ],
      strategy: "Specific heat capacity calculation",
    },
    {
      id: "b1-thermal-gases-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "thermal-transfers-radiation",
      question:
        "Which mechanism of thermal energy transfer can carry energy from the Sun to Earth across the vacuum of space?",
      options: [
        "Thermal radiation via electromagnetic waves",
        "Thermal conduction via vibrating lattice ions",
        "Natural convection via rising low-density currents",
        "Molecular diffusion via random particle collisions",
      ],
      answerIndex: 0,
      explanation:
        "Thermal radiation travels as electromagnetic waves requiring no material medium. Conduction, convection, and diffusion all require matter (particles or fluids) and cannot occur in a vacuum.",
      hints: [
        "Space between the Sun and Earth contains virtually no matter — which mechanism needs no particles?",
      ],
      strategy: "Compare media required for heat transfer modes",
    },
    {
      id: "b1-thermal-gases-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "thermal-transfers-radiation",
      question:
        "A blackbody star has surface temperature {{5800}} K. Using Wien's displacement law ({{λ_max T = 2.90 * 10^(-3)}} m K), calculate its peak emission wavelength {{λ_max}} in nanometres (nm).",
      answer: { type: "number", value: 500, display: "500 nm" },
      traps: [
        {
          spec: { type: "number", value: 0.5 },
          feedback: "0.5 is in micrometres (μm); multiply by 1000 to convert to nanometres (nm).",
        },
      ],
      solution: [
        "Rearrange Wien's law: {{λ_max = (2.90 * 10^(-3)) / 5800 = 5.00 * 10^(-7)}} m.",
        "Convert metres to nanometres (× 10⁹): {{5.00 * 10^(-7) * 10^9 = 500}} nm.",
      ],
      hints: [
        "Solve {{λ_max T = 2.90 * 10^(-3)}} for {{λ_max}} in metres.",
        "Multiply metres by {{10^9}} to obtain nanometres.",
      ],
      strategy: "Wien's displacement law and metric prefixes",
    },
    {
      id: "b1-thermal-gases-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "greenhouse-effect",
      question:
        "A snow-covered glacier receives {{600}} W m⁻² of incident solar radiation and scatters {{480}} W m⁻² back into space. Calculate the glacier's albedo {{α}} as a decimal.",
      answer: { type: "number", value: 0.8, display: "0.80" },
      traps: [
        {
          spec: { type: "number", value: 0.2 },
          feedback: "0.20 is the absorbed fraction (1 − α); albedo is the reflected fraction P_scattered / P_incident.",
        },
      ],
      solution: [
        "Apply the definition of albedo: {{α = P_scattered / P_incident = 480 / 600 = 0.80}}.",
      ],
      hints: [
        "Albedo is the ratio of scattered/reflected power to total incident power.",
        "Divide 480 by 600.",
      ],
      strategy: "Definition of albedo",
    },
    {
      id: "b1-thermal-gases-quiz-q05",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "greenhouse-effect",
      question:
        "Which atmospheric gas does NOT absorb terrestrial infrared radiation and therefore is NOT a greenhouse gas?",
      options: [
        "Water vapour (H₂O)",
        "Nitrogen (N₂)",
        "Methane (CH₄)",
        "Nitrous oxide (N₂O)",
      ],
      answerIndex: 1,
      explanation:
        "Nitrogen (N₂) is a symmetric diatomic molecule whose vibration produces no change in electric dipole moment, so it cannot resonantly absorb infrared photons. H₂O, CH₄, and N₂O are all IR-active greenhouse gases.",
      hints: [
        "Recall that symmetric diatomic gases making up 99% of dry air cannot resonate with IR photons.",
      ],
      strategy: "Identify IR-active vs IR-inactive atmospheric molecules",
    },
    {
      id: "b1-thermal-gases-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "gas-laws-kmt",
      question:
        "A sealed syringe traps {{60}} cm³ of ideal gas at pressure {{100}} kPa. The plunger is pushed slowly at constant temperature until the volume is {{15}} cm³. Calculate the new gas pressure in kPa.",
      answer: { type: "number", value: 400, display: "400 kPa" },
      traps: [
        {
          spec: { type: "number", value: 25 },
          feedback: "Compressing a gas to a smaller volume must INCREASE pressure, not decrease it!",
        },
      ],
      solution: [
        "At constant temperature, Boyle's law gives {{P_1 V_1 = P_2 V_2}}.",
        "{{P_2 = P_1 (V_1 / V_2) = 100 * (60 / 15) = 400}} kPa.",
      ],
      hints: [
        "Use Boyle's law: {{P_1 V_1 = P_2 V_2}}.",
        "The volume decreases by a factor of 4, so the pressure multiplies by 4.",
      ],
      strategy: "Boyle's law inverse proportion",
    },
    {
      id: "b1-thermal-gases-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "gas-laws-kmt",
      question:
        "When the Kelvin temperature of a fixed volume of ideal gas doubles, by what factor does the average translational kinetic energy of its molecules change?",
      options: ["1.4", "4", "2", "16"],
      answerIndex: 2,
      explanation:
        "Average translational kinetic energy is directly proportional to Kelvin temperature: {{E_k = (3/2) k_B T}}. Doubling {{T}} doubles {{E_k}}. Choosing 1.4 gives the factor for rms speed ({{sqrt(2)}}), not kinetic energy.",
      hints: [
        "Recall {{E_k = (3/2) k_B T}}.",
        "Is {{E_k}} proportional to {{T}}, {{sqrt(T)}}, or {{T^2}}?",
      ],
      strategy: "Direct proportionality between Ek and Kelvin T",
    },
    {
      id: "b1-thermal-gases-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "thermodynamics-hl",
      question:
        "An ideal gas releases {{150}} J of thermal energy to its surroundings while {{400}} J of mechanical work is done ON the gas by a piston. Calculate the change in internal energy {{ΔU}} of the gas in joules.",
      answer: { type: "number", value: 250, display: "250 J" },
      traps: [
        {
          spec: { type: "number", value: -550 },
          feedback: "Work done ON the gas is negative in IB convention (W = −400 J), so ΔU = Q − W = −150 − (−400) = +250 J.",
        },
        {
          spec: { type: "number", value: 550 },
          feedback: "Thermal energy leaves the gas, so Q = −150 J (not +150 J).",
        },
      ],
      solution: [
        "Assign IB signs: heat leaves the gas so {{Q = -150}} J; work is done ON the gas so {{W = -400}} J.",
        "Apply {{Q = ΔU + W}}: {{-150 = ΔU + (-400)}} → {{ΔU = -150 + 400 = +250}} J.",
      ],
      hints: [
        "Write the IB First Law {{Q = ΔU + W}} and identify the sign of {{Q}} and {{W}} carefully.",
        "Heat leaving gives {{Q = -150}} J; compression (work done ON gas) gives {{W = -400}} J.",
      ],
      strategy: "IB First Law sign assignment",
    },
    {
      id: "b1-thermal-gases-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "thermodynamics-hl",
      question:
        "A Carnot heat engine operates between a hot reservoir at {{800}} K and a cold reservoir at {{320}} K. Calculate its theoretical efficiency as a percentage.",
      answer: { type: "number", value: 60, display: "60%" },
      traps: [
        {
          spec: { type: "number", value: 40 },
          feedback: "40% is T_C / T_H (the rejected fraction); subtract from 100% to get efficiency!",
        },
      ],
      solution: [
        "Apply {{η_Carnot = 1 - T_C / T_H = 1 - 320 / 800 = 1 - 0.40 = 0.60}}.",
        "As a percentage, {{η_Carnot = 60%}}.",
      ],
      hints: [
        "Use {{η_Carnot = 1 - T_C / T_H}}.",
        "Convert the decimal result to a percentage.",
      ],
      strategy: "Carnot efficiency formula",
    },
    {
      id: "b1-thermal-gases-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "thermodynamics-hl",
      question:
        "During which process is the change in internal energy {{ΔU}} of a fixed mass of ideal gas strictly equal to zero?",
      options: [
        "Adiabatic expansion",
        "Isobaric heating",
        "Isovolumetric cooling",
        "Isothermal compression",
      ],
      answerIndex: 3,
      explanation:
        "Internal energy of an ideal gas depends solely on temperature ({{U = (3/2) n R T}}). Only during an isothermal process is temperature constant ({{ΔT = 0}}), guaranteeing {{ΔU = 0}}.",
      hints: [
        "Which thermodynamic state variable solely determines the internal energy of an ideal gas?",
        "Which named process keeps that variable constant?",
      ],
      strategy: "Link ΔU = 0 directly to constant T",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS — P1 (15 Qs) & P2 (15 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -------------------------------------------------------------------------
    {
      id: "b1-thermal-gases-p1",
      title: "Practice Paper 1 · Structured IB Paper 2 Problems (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "b1-thermal-gases-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "Calculate the thermal energy, in kilojoules (kJ), required to completely melt {{1.5}} kg of ice at {{0}} °C without changing its temperature (specific latent heat of fusion {{L_f = 334}} kJ kg⁻¹).",
          answer: { type: "number", value: 501, display: "501 kJ" },
          traps: [
            {
              spec: { type: "number", value: 223, tolerance: 1 },
              feedback: "Multiply mass by L_f rather than dividing.",
            },
          ],
          solution: [
            "Apply {{Q = m L_f = 1.5 * 334 = 501}} kJ.",
          ],
          hints: ["During melting at 0 °C, use {{Q = m L_f}}."],
          strategy: "Latent heat of fusion",
        },
        {
          id: "b1-thermal-gases-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "Calculate the total thermal energy, in kilojoules (kJ), required to heat {{0.50}} kg of liquid water from {{20}} °C to {{100}} °C ({{c = 4.20}} kJ kg⁻¹ K⁻¹) and then completely vaporise it into steam at {{100}} °C ({{L_v = 2260}} kJ kg⁻¹).",
          answer: { type: "number", value: 1298, display: "1298 kJ" },
          traps: [
            {
              spec: { type: "number", value: 168 },
              feedback: "168 kJ only warms the water to 100 °C — don't forget the boiling term m L_v!",
            },
            {
              spec: { type: "number", value: 1130 },
              feedback: "1130 kJ is only the boiling energy — add the 168 kJ needed to reach 100 °C.",
            },
          ],
          solution: [
            "Energy to warm water from 20 °C to 100 °C: {{Q_1 = m c ΔT = 0.50 * 4.20 * (100 - 20) = 168}} kJ.",
            "Energy to boil water at 100 °C: {{Q_2 = m L_v = 0.50 * 2260 = 1130}} kJ.",
            "Total energy required: {{Q_total = 168 + 1130 = 1298}} kJ.",
          ],
          hints: [
            "Split the process into two stages: warming liquid water ({{m c ΔT}}) and boiling at 100 °C ({{m L_v}}).",
            "Compute each stage in kJ and sum them.",
          ],
          strategy: "Multi-stage heating curve summation",
        },
        {
          id: "b1-thermal-gases-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "thermal-transfers-radiation",
          marks: 4,
          question:
            "Explain, in terms of molecular energies and forces: (a) why the temperature of boiling water stays fixed at 100 °C even while energy enters continuously, and (b) why vaporising 1 kg of water requires far more energy than melting 1 kg of ice.",
          modelAnswer:
            "(a) Temperature depends only on the average random translational kinetic energy of the molecules. During boiling, the incoming thermal energy goes entirely into breaking intermolecular bonds, which increases intermolecular potential energy while leaving average kinetic energy unchanged.\n\n(b) Melting only weakens rigid crystal lattice bonds so neighbouring molecules can slide past one another while staying close together. Vaporisation must completely separate the molecules against intermolecular attractions and also perform mechanical expansion work against surrounding atmospheric pressure.",
          markScheme: [
            {
              point: "Links temperature directly to average random kinetic energy of molecules (which stays constant during boiling).",
              keywords: ["average", "kinetic", "unchanged"],
            },
            {
              point: "States that supplied energy breaks intermolecular bonds and increases intermolecular potential energy.",
              keywords: ["potential", "breaking", "bonds"],
            },
            {
              point: "Contrasts melting (loosening/weakening lattice bonds, molecules stay close) with vaporisation (completely separating molecules).",
              keywords: ["lattice", "separate", "attractions"],
            },
            {
              point: "Notes that vaporisation also requires work done expanding against atmospheric pressure.",
              keywords: ["expansion", "atmospheric", "pressure"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics or only restates the prompt.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies constant kinetic energy OR rising potential energy during boiling, with a partial contrast between melting and boiling.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly distinguishes molecular kinetic vs potential energy during phase change AND accounts for complete molecular separation plus atmospheric expansion work during vaporisation.",
            },
          ],
          hints: [
            "For part (a), state what temperature measures microscopically and which part of internal energy changes during a phase transition.",
            "For part (b), compare how far apart molecules move during melting vs boiling, AND remember gas volume expands enormously against air pressure!",
          ],
          strategy: "Microscopic kinetic vs potential energy comparison",
        },
        {
          id: "b1-thermal-gases-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "A well-insulated copper rod ({{k = 400}} W m⁻¹ K⁻¹) has length {{0.50}} m and cross-sectional area {{2.0 * 10^(-4)}} m². One end is held at {{100}} °C and the other at {{20}} °C. Calculate the steady-state rate of thermal energy conduction along the rod in watts.",
          answer: { type: "number", value: 12.8, display: "12.8 W" },
          traps: [
            {
              spec: { type: "number", value: 6.4 },
              feedback: "Remember to divide by the rod length Δx = 0.50 m (dividing by 0.5 doubles the value).",
            },
          ],
          solution: [
            "Temperature difference: {{ΔT = 100 - 20 = 80}} K.",
            "Apply {{ΔQ / Δt = k A (ΔT / Δx) = 400 * (2.0 * 10^(-4)) * (80 / 0.50) = 0.080 * 160 = 12.8}} W.",
          ],
          hints: [
            "Write Fourier's steady-state conduction equation: {{ΔQ / Δt = k A ΔT / Δx}}.",
            "Compute {{ΔT / Δx = 80 / 0.50 = 160}} K m⁻¹ first.",
          ],
          strategy: "Steady-state thermal conduction rate",
        },
        {
          id: "b1-thermal-gases-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "A heated metal sphere of surface area {{0.020}} m² and emissivity {{e = 0.50}} is held at {{1000}} K. Using {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴, calculate the thermal radiation power emitted by the sphere in watts.",
          answer: { type: "number", value: 567, display: "567 W" },
          traps: [
            {
              spec: { type: "number", value: 1134 },
              feedback: "Remember to multiply by the surface emissivity e = 0.50.",
            },
          ],
          solution: [
            "Apply {{P = e σ A T^4 = 0.50 * (5.67 * 10^(-8)) * 0.020 * (1000)^4}}.",
            "Since {{0.50 * 0.020 = 10^(-2)}} and {{1000^4 = 10^12}}, {{P = 5.67 * 10^(-8) * 10^(-2) * 10^12 = 5.67 * 10^2 = 567}} W.",
          ],
          hints: [
            "Use the Stefan–Boltzmann law with emissivity: {{P = e σ A T^4}}.",
            "Simplify the powers of 10: {{10^(-8) * 10^(-2) * 10^12 = 10^2}}.",
          ],
          strategy: "Stefan–Boltzmann law with emissivity",
        },
        {
          id: "b1-thermal-gases-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "At Earth's orbital distance of {{1.0}} AU from the Sun, the solar constant is {{1360}} W m⁻². Using the inverse-square law for apparent brightness, calculate the solar intensity at Jupiter's orbit of {{5.0}} AU in W m⁻².",
          answer: { type: "number", value: 54.4, display: "54.4 W m⁻²" },
          traps: [
            {
              spec: { type: "number", value: 272 },
              feedback: "Apparent brightness follows an inverse-SQUARE law (divide by 5² = 25, not by 5).",
            },
          ],
          solution: [
            "From {{b = L / (4 pi d^2)}}, intensity scales as {{1 / d^2}}.",
            "{{I_Jupiter = 1360 / (5.0)^2 = 1360 / 25 = 54.4}} W m⁻².",
          ],
          hints: [
            "How does {{b = L / (4 pi d^2)}} change when distance increases by a factor of 5?",
            "Divide 1360 by {{5^2 = 25}}.",
          ],
          strategy: "Inverse-square brightness scaling",
        },
        {
          id: "b1-thermal-gases-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "greenhouse-effect",
          marks: 4,
          question:
            "Explain the physical and molecular mechanism by which carbon dioxide and water vapour warm Earth's surface above its airless equilibrium temperature.",
          modelAnswer:
            "1. The Sun (~5800 K) emits primarily short-wave visible radiation (~0.5 μm), which passes largely unabsorbed through the atmosphere and heats Earth's surface.\n2. The cooler terrestrial surface (~288 K) emits long-wave infrared radiation (~10 μm).\n3. Polyatomic molecules such as CO₂ and H₂O have natural vibrational frequencies matching these infrared photons (with changing electric dipole moments), so they absorb outgoing IR by resonance.\n4. Excited greenhouse molecules rapidly re-emit infrared photons isotropically in all directions; the downward component returns energy to the surface, raising surface temperature until outgoing top-of-atmosphere radiation balances absorbed sunlight.",
          markScheme: [
            {
              point: "States that incoming short-wave visible solar radiation is transmitted through the atmosphere to warm the surface.",
              keywords: ["short-wave", "visible", "transmitted"],
            },
            {
              point: "States that Earth's surface emits long-wave infrared radiation.",
              keywords: ["long-wave", "infrared", "emits"],
            },
            {
              point: "Explains resonant absorption by matching natural vibrational modes / dipole moment changes of greenhouse molecules.",
              keywords: ["resonance", "vibrational", "dipole"],
            },
            {
              point: "Explains isotropic re-emission in all directions, returning radiation downward to warm the surface.",
              keywords: ["all directions", "downward", "re-emit"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid physics or conflates greenhouse effect with ozone depletion.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Distinguishes short-wave solar from long-wave infrared radiation, or mentions absorption/re-emission without molecular resonance.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Complete four-step radiative and molecular mechanism: short-wave transmission, long-wave IR surface emission, resonant vibrational/dipole absorption, and isotropic re-emission back to Earth.",
            },
          ],
          hints: [
            "Compare the peak wavelengths of solar radiation vs terrestrial radiation.",
            "Include BOTH the molecular absorption mechanism (vibrational resonance / dipole) AND isotropic re-emission back downward.",
          ],
          strategy: "Four-point IB greenhouse explanation template",
        },
        {
          id: "b1-thermal-gases-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "greenhouse-effect",
          question:
            "An airless rocky planet orbits a star where the top-of-atmosphere stellar intensity is {{S = 1400}} W m⁻². The planet's global albedo is {{α = 0.20}}. Calculate the average stellar intensity absorbed across the planet's spherical surface in W m⁻².",
          answer: { type: "number", value: 280, display: "280 W m⁻²" },
          traps: [
            {
              spec: { type: "number", value: 70 },
              feedback: "70 W m⁻² is the reflected intensity (α S / 4); use (1 − α) for absorbed intensity.",
            },
            {
              spec: { type: "number", value: 1120 },
              feedback: "Don't forget to divide by 4 to average over the planet's spherical surface area!",
            },
          ],
          solution: [
            "Absorbed fraction is {{1 - α = 1 - 0.20 = 0.80}}.",
            "Average absorbed intensity over the sphere: {{I_abs = ((1 - α) S) / 4 = (0.80 * 1400) / 4 = 280}} W m⁻².",
          ],
          hints: [
            "Recall {{I_abs = ((1 - α) S) / 4}}.",
            "Multiply {{0.80 * 1400}} and divide by 4.",
          ],
          strategy: "Planetary absorbed intensity formula",
        },
        {
          id: "b1-thermal-gases-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Describe",
          guideRef: "greenhouse-effect",
          marks: 3,
          question:
            "Describe how the shrinking of Arctic sea ice acts as a positive feedback loop on global surface temperature.",
          modelAnswer:
            "Bright white sea ice has a very high albedo (~0.85), whereas open ocean water exposed beneath it is dark with a very low albedo (~0.06). As warming melts sea ice, the planet's average albedo decreases, increasing the absorbed fraction (1 − α) of incoming sunlight. The extra absorbed solar energy drives additional surface warming, which melts even more ice in a self-reinforcing cycle.",
          markScheme: [
            {
              point: "Contrasts high albedo of ice/snow with low albedo of dark open ocean water.",
              keywords: ["ocean", "dark", "0.06"],
            },
            {
              point: "States that melting ice lowers average albedo so a greater fraction (1 − α) of solar radiation is absorbed.",
              keywords: ["decreases", "absorbed", "fraction"],
            },
            {
              point: "Concludes that extra absorbed energy produces further warming, melting more ice (self-reinforcing).",
              keywords: ["self-reinforcing", "additional", "cycle"],
            },
          ],
          hints: [
            "Compare the reflectiveness (albedo) of sea ice versus dark ocean water.",
            "Connect lower albedo to {{I_abs = (1 - α) S / 4}} and explain why the loop reinforces itself.",
          ],
          strategy: "Causal chain for climate feedback loops",
        },
        {
          id: "b1-thermal-gases-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "gas-laws-kmt",
          question:
            "A scuba diving cylinder of internal volume {{0.012}} m³ holds compressed air (treated as an ideal gas) at pressure {{2.00 * 10^7}} Pa and temperature {{27}} °C. Using {{R = 8.31}} J K⁻¹ mol⁻¹ and {{T / \"K\" = t / \"°C\" + 273}}, calculate the number of moles of air in the cylinder to 3 significant figures.",
          answer: { type: "number", value: 96.3, tolerance: 0.3, display: "96.3 mol" },
          traps: [
            {
              spec: { type: "number", value: 1070, tolerance: 10 },
              feedback: "Convert 27 °C to 300 K before substituting into PV = nRT!",
            },
          ],
          solution: [
            "Convert temperature to Kelvin: {{T = 27 + 273 = 300}} K.",
            "Rearrange {{P V = n R T}}: {{n = (P V) / (R T) = (2.00 * 10^7 * 0.012) / (8.31 * 300) = 240000 / 2493 = 96.27}} mol ≈ **96.3 mol**.",
          ],
          hints: [
            "Convert {{27}} °C to Kelvin first.",
            "Solve {{n = P V / (R T)}} using all SI units.",
          ],
          strategy: "Ideal gas equation in SI units",
        },
        {
          id: "b1-thermal-gases-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "gas-laws-kmt",
          marks: 3,
          question:
            "A fixed mass of ideal gas inside a sealed rigid steel tank is warmed from 300 K to 400 K. Use the kinetic model of an ideal gas to explain why the pressure exerted on the tank walls rises.",
          modelAnswer:
            "Raising Kelvin temperature increases the average random translational kinetic energy and hence the average speed of the gas molecules. Faster molecules undergo a larger change in momentum during each elastic collision with the walls and also strike the walls more frequently (greater collision rate). By Newton's second law (F = Δp/Δt), the greater average normal force per unit wall area increases the gas pressure.",
          markScheme: [
            {
              point: "Links higher temperature to greater average molecular kinetic energy and higher average speed.",
              keywords: ["average speed", "kinetic energy", "molecules"],
            },
            {
              point: "Identifies BOTH larger momentum change per collision AND higher frequency/rate of wall collisions.",
              keywords: ["momentum", "frequently", "collision"],
            },
            {
              point: "Applies Newton's second law (F = Δp/Δt) to link greater average force per unit area to higher pressure.",
              keywords: ["newton", "force", "unit"],
            },
          ],
          hints: [
            "State what happens to average molecular speed when Kelvin temperature rises.",
            "There are TWO microscopic reasons force per unit area increases at constant volume — mention both momentum change per hit and collision rate!",
          ],
          strategy: "Two-factor microscopic pressure explanation",
        },
        {
          id: "b1-thermal-gases-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "gas-laws-kmt",
          question:
            "At {{300}} K, the molecules of an ideal gas have root-mean-square speed {{400}} m s⁻¹. At what Kelvin temperature will their root-mean-square speed double to {{800}} m s⁻¹?",
          answer: { type: "number", value: 1200, display: "1200 K" },
          traps: [
            {
              spec: { type: "number", value: 600 },
              feedback: "v_rms scales as √T (not T), so doubling v_rms requires quadrupling T!",
            },
          ],
          solution: [
            "Since {{(1/2) m v_rms^2 = (3/2) k_B T}}, Kelvin temperature is proportional to {{v_rms^2}}.",
            "{{T_2 = T_1 (v_2 / v_1)^2 = 300 * (800 / 400)^2 = 300 * 4 = 1200}} K.",
          ],
          hints: [
            "Relate {{T}} to {{v_rms}} via {{(1/2) m v_rms^2 = (3/2) k_B T}}.",
            "Notice {{T ∝ v_rms^2}}.",
          ],
          strategy: "Quadratic temperature–speed scaling",
        },
        {
          id: "b1-thermal-gases-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "thermodynamics-hl",
          question:
            "An ideal monatomic gas at constant pressure {{2.5 * 10^5}} Pa expands isobarically from {{0.012}} m³ to {{0.020}} m³. Calculate the mechanical work {{W}} done by the gas in joules.",
          answer: { type: "number", value: 2000, display: "2000 J" },
          traps: [
            {
              spec: { type: "number", value: 5000 },
              feedback: "Use ΔV = 0.020 − 0.012 = 0.008 m³, not the final volume 0.020 m³.",
            },
          ],
          solution: [
            "Volume change: {{ΔV = 0.020 - 0.012 = 0.008}} m³.",
            "Isobaric work: {{W = P ΔV = (2.5 * 10^5) * 0.008 = 2000}} J.",
          ],
          hints: [
            "Use {{W = P ΔV}} for an isobaric process.",
            "Calculate {{ΔV = V_2 - V_1}} first.",
          ],
          strategy: "Isobaric work W = PΔV",
        },
        {
          id: "b1-thermal-gases-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Distinguish",
          guideRef: "thermodynamics-hl",
          marks: 4,
          question:
            "Distinguish between an isothermal expansion and an adiabatic expansion of an ideal monatomic gas starting from the same state (P₁, V₁) to the same final volume V₂, comparing heat flow, internal energy, temperature, and p–V curve slope.",
          modelAnswer:
            "In an isothermal expansion, temperature remains constant, so internal energy change is zero (ΔU = 0) and thermal energy must enter from a reservoir equal to the work performed (Q = W > 0). In an adiabatic expansion, no thermal energy enters or leaves (Q = 0), so the gas pays for expansion work out of its own internal energy (ΔU = −W < 0), causing its temperature to drop. Because temperature falls alongside rising volume, pressure decreases faster along the adiabat (PV^(5/3) = const), making the adiabatic curve steeper and lower on a p–V graph than the hyperbolic isotherm (PV = const), enclosing less work area.",
          markScheme: [
            {
              point: "Isothermal: constant temperature, ΔU = 0, and heat enters Q = W > 0.",
              keywords: ["q = w", "zero", "reservoir"],
            },
            {
              point: "Adiabatic: zero heat flow (Q = 0), so ΔU = −W < 0 and temperature drops.",
              keywords: ["q = 0", "drop", "own"],
            },
            {
              point: "Cites steeper adiabatic relation PV^(5/3) = const compared to isothermal PV = const.",
              keywords: ["steeper", "5/3", "hyperbolic"],
            },
            {
              point: "Concludes that the adiabat lies below the isotherm and does less mechanical work.",
              keywords: ["lower", "less", "area"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Confuses isothermal with adiabatic or omits First Law reasoning.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly states ΔT = 0 for isothermal and Q = 0 for adiabatic, with limited p–V comparison.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Applies the First Law rigorously to both processes, explains why adiabatic temperature falls, and accurately compares p–V steepness (PV^(5/3) vs PV) and work done.",
            },
          ],
          hints: [
            "Apply {{Q = ΔU + W}} separately to {{ΔT = 0}} (isothermal) and {{Q = 0}} (adiabatic).",
            "Compare {{P ∝ V^(-1)}} with {{P ∝ V^(-5/3)}} to explain which curve is steeper.",
          ],
          strategy: "Systematic First Law & p–V comparison",
        },
        {
          id: "b1-thermal-gases-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "thermodynamics-hl",
          marks: 3,
          question:
            "Inside a kitchen freezer, liquid water freezes into crystalline ice, causing the entropy of the water to decrease. Explain why this does not contradict the Second Law of Thermodynamics.",
          modelAnswer:
            "The Second Law requires the total entropy of an isolated system (the water plus its surroundings/universe) never to decrease, not the entropy of an open sub-system alone. Freezing is non-spontaneous inside the warm room and requires external electrical work by the freezer's compressor, releasing latent heat plus work energy into the kitchen air. Consequently, the entropy increase of the room surroundings exceeds the entropy reduction of the freezing water, giving ΔS_universe > 0.",
          markScheme: [
            {
              point: "Clarifies that the Second Law applies to the total entropy of an isolated system (system + surroundings), allowing local decreases.",
              keywords: ["isolated", "universe", "local"],
            },
            {
              point: "Identifies external electrical work supplied by the compressor releasing heat into the room.",
              keywords: ["electrical", "compressor", "latent"],
            },
            {
              point: "Concludes that the surroundings' entropy increase exceeds the water's entropy decrease (ΔS_universe > 0).",
              keywords: ["exceeds", "surroundings", "0"],
            },
          ],
          hints: [
            "Is the water inside a plugged-in freezer an *isolated* system?",
            "Account for the heat rejected into the room and compare {{ΔS_surroundings}} with {{|ΔS_water|}}.",
          ],
          strategy: "System vs universe entropy accounting",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -------------------------------------------------------------------------
    {
      id: "b1-thermal-gases-p2",
      title: "Practice Paper 2 · Climate Balance, Gas Models & HL Cycles",
      level: "HL",
      questions: [
        {
          id: "b1-thermal-gases-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "A {{0.40}} kg iron block ({{c = 450}} J kg⁻¹ K⁻¹) heated to {{120}} °C is lowered into {{0.30}} kg of water ({{c = 4200}} J kg⁻¹ K⁻¹) at {{20}} °C inside a perfectly insulated vessel. Calculate the final equilibrium temperature in °C.",
          answer: { type: "number", value: 32.5, display: "32.5 °C" },
          traps: [
            {
              spec: { type: "number", value: 70 },
              feedback: "70 °C is just the simple average — water has a much larger heat capacity (mc) than the iron block!",
            },
          ],
          solution: [
            "Heat lost by iron = heat gained by water: {{0.40 * 450 * (120 - T) = 0.30 * 4200 * (T - 20)}}.",
            "Simplify heat capacities: {{180(120 - T) = 1260(T - 20)}}. Divide both sides by 180: {{120 - T = 7(T - 20)}}.",
            "{{120 - T = 7 T - 140}} → {{8 T = 260}} → {{T = 32.5}} °C.",
          ],
          hints: [
            "Set {{m_Fe c_Fe (120 - T) = m_w c_w (T - 20)}}.",
            "Notice {{1260 / 180 = 7}} simplifies the equation cleanly!",
          ],
          strategy: "Method of mixtures calorimetry",
        },
        {
          id: "b1-thermal-gases-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "thermal-transfers-radiation",
          question:
            "An orange giant star behaves as an ideal black body whose peak spectral intensity occurs at {{λ_max = 725}} nm. Using Wien's constant {{2.90 * 10^(-3)}} m K, calculate the star's surface temperature in kelvin.",
          answer: { type: "number", value: 4000, display: "4000 K" },
          traps: [
            {
              spec: { type: "number", value: 0.004 },
              feedback: "Convert 725 nm to 7.25 × 10⁻⁷ m before dividing!",
            },
          ],
          solution: [
            "Convert wavelength to metres: {{λ_max = 725 * 10^(-9) = 7.25 * 10^(-7)}} m.",
            "{{T = (2.90 * 10^(-3)) / (7.25 * 10^(-7)) = 4000}} K.",
          ],
          hints: [
            "Convert {{725}} nm to metres ({{7.25 * 10^(-7)}} m).",
            "Compute {{2.90 * 10^(-3) / (7.25 * 10^(-7))}}.",
          ],
          strategy: "Wien's law temperature calculation",
        },
        {
          id: "b1-thermal-gases-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "thermal-transfers-radiation",
          marks: 4,
          question:
            "Compare and contrast thermal conduction, convection, and thermal radiation in terms of the microscopic mechanism of energy transfer and the medium required.",
          modelAnswer:
            "All three mechanisms transfer thermal energy spontaneously down a temperature gradient from hotter to cooler regions, yet their mechanisms and media differ fundamentally. Conduction transfers energy without bulk matter movement via adjacent lattice vibrations (phonons) and, in metals, mobile free electrons; it requires a material medium (strongest in solids). Convection requires a fluid (liquid or gas) and transports energy through bulk circulation driven by thermal expansion, density differences, and buoyancy forces. Thermal radiation requires no material medium at all, transferring energy as electromagnetic waves at the speed of light through a vacuum.",
          markScheme: [
            {
              point: "Similarity: all three transfer thermal energy from hotter to cooler regions along a temperature gradient.",
              keywords: ["gradient", "hotter", "cooler"],
            },
            {
              point: "Conduction: lattice vibrations and free electrons in metals, no bulk flow, requires matter (best in solids).",
              keywords: ["lattice", "electrons", "solids"],
            },
            {
              point: "Convection: bulk fluid motion driven by density changes and buoyancy in liquids or gases.",
              keywords: ["bulk", "buoyancy", "density"],
            },
            {
              point: "Radiation: electromagnetic waves travelling at speed of light, requiring no medium (works in vacuum).",
              keywords: ["electromagnetic", "vacuum", "no material"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid physics.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly describes media or mechanisms for one or two transfer modes without full comparison.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Identifies shared energy-transfer direction AND clearly contrasts microscopic mechanism and required medium for all three modes.",
            },
          ],
          hints: [
            "A 'Compare and contrast' command term requires at least one similarity AND clear differences.",
            "For each mode specify BOTH how energy moves microscopically AND what medium (solid / fluid / vacuum) is needed.",
          ],
          strategy: "Structured IB Compare and Contrast response",
        },
        {
          id: "b1-thermal-gases-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "greenhouse-effect",
          question:
            "An airless blackbody planet ({{e = 1}}) absorbs an average stellar intensity of {{459}} W m⁻² over its spherical surface. Using {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴, calculate its radiative equilibrium surface temperature to the nearest kelvin.",
          answer: { type: "number", value: 300, tolerance: 1, display: "300 K" },
          traps: [
            {
              spec: { type: "number", value: 90000, tolerance: 200 },
              feedback: "You took the square root instead of the FOURTH root of T⁴!",
            },
          ],
          solution: [
            "Equate absorbed and radiated intensities: {{σ T^4 = 459}} W m⁻².",
            "{{T^4 = 459 / (5.67 * 10^(-8)) = 8.095 * 10^9}} K⁴.",
            "Take the fourth root: {{T = (8.095 * 10^9)^(1/4) = 299.96}} K ≈ **300 K**.",
          ],
          hints: [
            "Set {{σ T^4 = 459}} and solve for {{T^4}}.",
            "Take the square root TWICE to evaluate the fourth root!",
          ],
          strategy: "Radiative equilibrium fourth-root calculation",
        },
        {
          id: "b1-thermal-gases-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "greenhouse-effect",
          marks: 5,
          question:
            "Discuss why a simple airless blackbody model predicts a frozen Earth (~255 K) whereas Earth's observed mean temperature is 288 K, and evaluate how anthropogenic emissions produce the enhanced greenhouse effect.",
          modelAnswer:
            "With solar constant S = 1360 W m⁻² and albedo α = 0.30, Earth absorbs on average (1 − α)S/4 = 238 W m⁻² over its sphere. Equating 238 W m⁻² to σT⁴ yields T = 255 K (−18 °C) because this bare-rock model ignores Earth's atmosphere. In reality, naturally occurring greenhouse gases (mainly water vapour and CO₂) transmit short-wave sunlight while absorbing Earth's long-wave infrared emission and radiating a large flux back down to the surface, creating a +33 K natural greenhouse warming to 288 K that sustains liquid oceans. Burning fossil fuels, deforestation, and agriculture elevate atmospheric CO₂ and CH₄ concentrations, increasing infrared optical thickness and temporarily reducing outgoing IR to space below 238 W m⁻². This positive radiative forcing shifts Earth toward a higher equilibrium temperature, amplified by positive feedbacks such as ice-albedo loss and rising water-vapour humidity.",
          markScheme: [
            {
              point: "Calculates or explains absorbed solar intensity (1 − α)S/4 = 238 W m⁻² yielding 255 K without an atmosphere.",
              keywords: ["238", "albedo", "ignores"],
            },
            {
              point: "Explains the natural greenhouse effect (+33 K warming via atmospheric IR absorption and back-radiation).",
              keywords: ["natural", "33", "back"],
            },
            {
              point: "Identifies human sources (fossil fuels, deforestation, agriculture) raising CO₂ and CH₄ concentrations.",
              keywords: ["fossil", "methane", "ch4"],
            },
            {
              point: "Explains enhanced radiative imbalance (outgoing IR temporarily drops below absorbed solar, driving warming).",
              keywords: ["forcing", "imbalance", "optical"],
            },
            {
              point: "Evaluates amplifying climate feedbacks (e.g. ice-albedo loss or water-vapour feedback).",
              keywords: ["feedbacks", "ice-albedo", "amplified"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid physics.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic recognition that the atmosphere warms Earth and fossil fuels add CO₂, lacking quantitative radiative-budget links.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly connects the 238 W m⁻² radiative budget to the 255 K vs 288 K difference and accurately distinguishes natural vs enhanced greenhouse forcing.",
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Thorough, quantitative discussion linking absorbed solar intensity, natural +33 K back-radiation, anthropogenic radiative imbalance, and climate feedback amplification.",
            },
          ],
          hints: [
            "Start with the quantitative radiative budget: {{(1 - α) S / 4 = 238}} W m⁻² → 255 K.",
            "Distinguish clearly between the essential natural greenhouse effect (+33 K) and the enhanced anthropogenic effect plus feedbacks.",
          ],
          strategy: "Quantitative radiative budget + natural vs enhanced greenhouse",
        },
        {
          id: "b1-thermal-gases-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "gas-laws-kmt",
          question:
            "A weather balloon is inflated at ground level with {{2.0}} m³ of helium at pressure {{100}} kPa and temperature {{27}} °C. It ascends into the stratosphere where pressure falls to {{20}} kPa and temperature drops to {{−33}} °C. Taking {{T / \"K\" = t / \"°C\" + 273}}, calculate the balloon's new volume in m³.",
          answer: { type: "number", value: 8, display: "8.0 m³" },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback: "10 m³ assumes constant temperature — include the Kelvin temperature ratio 240 / 300 = 0.80!",
            },
          ],
          solution: [
            "Convert temperatures to Kelvin: {{T_1 = 27 + 273 = 300}} K and {{T_2 = -33 + 273 = 240}} K.",
            "Apply combined gas law {{V_2 = V_1 (P_1 / P_2) (T_2 / T_1) = 2.0 * (100 / 20) * (240 / 300) = 2.0 * 5 * 0.80 = 8.0}} m³.",
          ],
          hints: [
            "Convert both {{27}} °C and {{−33}} °C to Kelvin first.",
            "Solve {{(P_1 V_1) / T_1 = (P_2 V_2) / T_2}} for {{V_2}}.",
          ],
          strategy: "Combined gas law with Kelvin conversion",
        },
        {
          id: "b1-thermal-gases-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "gas-laws-kmt",
          marks: 4,
          question:
            "State three assumptions of the kinetic model of an ideal gas, and explain why a real gas deviates markedly from ideal behaviour at very high pressure and low temperature.",
          modelAnswer:
            "Three assumptions of the ideal-gas kinetic model are: (1) the total volume of the molecules themselves is negligible compared with the container volume; (2) no intermolecular forces act between particles except during collisions; and (3) all collisions between molecules and with container walls are perfectly elastic (and of negligible duration). At very high pressure, molecules are packed tightly together so their finite molecular volume is no longer negligible relative to the container. At low temperature, molecules move slowly with small kinetic energy, so attractive intermolecular forces become significant and can even cause liquefaction.",
          markScheme: [
            {
              point: "States negligible molecular volume compared to container volume.",
              keywords: ["negligible", "container", "volume"],
            },
            {
              point: "States zero intermolecular forces between collisions AND perfectly elastic collisions.",
              keywords: ["intermolecular", "elastic", "collisions"],
            },
            {
              point: "High pressure deviation: molecules packed close so finite particle volume is no longer negligible.",
              keywords: ["packed", "finite", "tightly"],
            },
            {
              point: "Low temperature deviation: low kinetic energy makes attractive forces significant (leading to liquefaction).",
              keywords: ["attractive", "liquefaction", "slowly"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid kinetic-theory assumptions stated.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Lists 2–3 assumptions accurately OR explains one real-gas deviation condition.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately states 3 ideal-gas assumptions AND links high-pressure/low-temperature real-gas failures directly to finite molecular size and attractive forces.",
            },
          ],
          hints: [
            "List assumptions specifically about molecular volume, intermolecular forces, and elastic collisions.",
            "Link high pressure to *molecular size* and low temperature to *intermolecular attractions / liquefaction*.",
          ],
          strategy: "Match real-gas failures to exact violated assumptions",
        },
        {
          id: "b1-thermal-gases-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "gas-laws-kmt",
          question:
            "An ideal gas exerts a pressure of {{1.2 * 10^5}} Pa while its molecules have root-mean-square speed {{600}} m s⁻¹. Using {{P = (1/3) ρ v_rms^2}}, calculate the density {{ρ}} of the gas in kg m⁻³.",
          answer: { type: "number", value: 1, display: "1.0 kg m⁻³" },
          traps: [
            {
              spec: { type: "number", value: 0.33, tolerance: 0.02 },
              feedback: "Remember to multiply P by 3 when rearranging P = (1/3) ρ v_rms²!",
            },
          ],
          solution: [
            "Rearrange {{P = (1/3) ρ v_rms^2}} to {{ρ = (3 P) / v_rms^2}}.",
            "{{ρ = (3 * 1.2 * 10^5) / 600^2 = (3.6 * 10^5) / (3.6 * 10^5) = 1.0}} kg m⁻³.",
          ],
          hints: [
            "Rearrange {{P = (1/3) ρ v_rms^2}} to make {{ρ}} the subject.",
            "Notice {{600^2 = 3.6 * 10^5}} matches {{3 P}} exactly!",
          ],
          strategy: "Kinetic theory pressure–density equation",
        },
        {
          id: "b1-thermal-gases-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "thermodynamics-hl",
          question:
            "Exactly {{2.0}} mol of an ideal monatomic gas is warmed at constant pressure from {{300}} K to {{500}} K. Using {{R = 8.31}} J K⁻¹ mol⁻¹, calculate the total thermal energy {{Q}} supplied to the gas in joules.",
          answer: { type: "number", value: 8310, display: "8310 J" },
          traps: [
            {
              spec: { type: "number", value: 4986 },
              feedback: "4986 J is only ΔU — at constant pressure, the gas expands and also performs W = nRΔT = 3324 J of work!",
            },
            {
              spec: { type: "number", value: 3324 },
              feedback: "3324 J is only the mechanical work W — add ΔU = (3/2) nRΔT!",
            },
          ],
          solution: [
            "Temperature change: {{ΔT = 500 - 300 = 200}} K.",
            "Internal energy change: {{ΔU = (3/2) n R ΔT = 1.5 * 2.0 * 8.31 * 200 = 4986}} J.",
            "Isobaric work done by gas: {{W = P ΔV = n R ΔT = 2.0 * 8.31 * 200 = 3324}} J.",
            "First Law: {{Q = ΔU + W = 4986 + 3324 = 8310}} J (equivalently {{(5/2) n R ΔT}}).",
          ],
          hints: [
            "Compute both {{ΔU = (3/2) n R ΔT}} AND {{W = P ΔV = n R ΔT}}.",
            "Sum them via the First Law {{Q = ΔU + W}}.",
          ],
          strategy: "Isobaric heating Q = (5/2)nRΔT",
        },
        {
          id: "b1-thermal-gases-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "thermodynamics-hl",
          question:
            "An ideal monatomic gas initially at temperature {{600}} K and volume {{V_0}} expands adiabatically until its volume reaches {{8 V_0}}. Using {{P V^(5/3) = \"const\"}} and the ideal gas law, calculate its final Kelvin temperature.",
          answer: { type: "number", value: 150, display: "150 K" },
          traps: [
            {
              spec: { type: "number", value: 75 },
              feedback: "Using P = nRT/V in P V^(5/3) = const yields T V^(2/3) = const, not T V = const.",
            },
          ],
          solution: [
            "Substitute {{P = n R T / V}} into {{P V^(5/3) = \"const\"}} to get {{T V^(2/3) = \"const\"}}.",
            "{{T_2 = T_1 (V_1 / V_2)^(2/3) = 600 * (1 / 8)^(2/3) = 600 * (1 / 4) = 150}} K.",
          ],
          hints: [
            "Eliminate {{P}} using {{P V = n R T}} to express the adiabatic law in terms of {{T}} and {{V}}.",
            "Evaluate {{(1/8)^(2/3) = ((1/8)^(1/3))^2 = (1/2)^2 = 1/4}}.",
          ],
          strategy: "Derive and apply TV^(2/3) = const",
        },
        {
          id: "b1-thermal-gases-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "thermodynamics-hl",
          question:
            "A thermal power station operates with overall thermal efficiency {{35%}} and delivers {{700}} MW of useful electrical power. Calculate the rate at which waste heat is rejected to the cooling water in megawatts (MW).",
          answer: { type: "number", value: 1300, display: "1300 MW" },
          traps: [
            {
              spec: { type: "number", value: 2000 },
              feedback: "2000 MW is the total input thermal power Q_H; subtract the 700 MW useful output to find waste heat Q_C!",
            },
          ],
          solution: [
            "From {{η = P_out / P_in}}, total thermal input power is {{P_in = 700 / 0.35 = 2000}} MW.",
            "Waste heat rejected per second: {{P_waste = P_in - P_out = 2000 - 700 = 1300}} MW.",
          ],
          hints: [
            "First find total heat input rate {{P_in = P_out / η}}.",
            "Use energy conservation {{P_in = P_out + P_waste}}.",
          ],
          strategy: "Heat engine power balance",
        },
        {
          id: "b1-thermal-gases-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "thermodynamics-hl",
          marks: 5,
          question:
            "An ideal monatomic gas executes a clockwise rectangular cycle A→B→C→D→A on a p–V diagram: A→B isovolumetric heating, B→C isobaric expansion, C→D isovolumetric cooling, and D→A isobaric compression. Analyse the sign (+, −, or 0) of ΔU, W, and Q on each leg, and state how to compute the cycle's thermal efficiency.",
          modelAnswer:
            "Leg A→B (isovolumetric heating): volume is unchanged so W = 0; pressure and temperature rise so ΔU > 0 and Q = ΔU > 0 (heat enters).\nLeg B→C (isobaric expansion): volume increases so W = PΔV > 0; temperature rises further so ΔU > 0 and Q = ΔU + W > 0 (heat enters).\nLeg C→D (isovolumetric cooling): W = 0; pressure and temperature fall so ΔU < 0 and Q < 0 (heat rejected).\nLeg D→A (isobaric compression): volume decreases so W < 0; temperature falls so ΔU < 0 and Q < 0 (heat rejected).\nOver the closed cycle ΔU_net = 0, so W_net equals the enclosed rectangular area (P_high − P_low)(V_high − V_low). Thermal efficiency is η = W_net / Q_H, where Q_H = Q_AB + Q_BC sums only the positive heat-input legs.",
          markScheme: [
            {
              point: "A→B: W = 0, ΔU > 0, Q > 0 (heat absorbed).",
              keywords: ["w = 0", "enters", "unchanged"],
            },
            {
              point: "B→C: W > 0, ΔU > 0, Q > 0 (heat absorbed).",
              keywords: ["pδv", "further", "increases"],
            },
            {
              point: "C→D: W = 0, ΔU < 0, Q < 0 (heat rejected).",
              keywords: ["rejected", "fall", "c→d"],
            },
            {
              point: "D→A: W < 0, ΔU < 0, Q < 0 (heat rejected).",
              keywords: ["d→a", "decreases", "w < 0"],
            },
            {
              point: "Efficiency: η = W_net / Q_H using enclosed area for W_net and summing ONLY positive Q legs (Q_AB + Q_BC) for Q_H.",
              keywords: ["enclosed", "q_ab + q_bc", "only"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid First Law analysis.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correct signs on 1–2 legs or states η = W/Q without specifying Q_H.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Correct ΔU, W, Q signs on all four legs, OR minor slip with clear enclosed-area efficiency method.",
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Flawless sign table across all four legs AND explicitly defines η = W_net / (Q_AB + Q_BC) using only positive heat-input legs.",
            },
          ],
          hints: [
            "Check volume change for W, check PV = nRT product change for ΔU, then apply Q = ΔU + W.",
            "Remember the denominator of efficiency is Q_H (sum of positive Q legs ONLY), not Q_net!",
          ],
          strategy: "Four-leg First Law sign table",
        },
        {
          id: "b1-thermal-gases-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "thermodynamics-hl",
          question:
            "A reversible Carnot engine absorbs {{2400}} J per cycle from a hot reservoir at {{600}} K and rejects thermal energy to a cold reservoir at {{450}} K. Calculate the net mechanical work output per cycle in joules.",
          answer: { type: "number", value: 600, display: "600 J" },
          traps: [
            {
              spec: { type: "number", value: 1800 },
              feedback: "1800 J is the rejected waste heat Q_C — subtract from 2400 J to find net work W!",
            },
          ],
          solution: [
            "Carnot efficiency: {{η = 1 - T_C / T_H = 1 - 450 / 600 = 0.25}} (25%).",
            "Net work output: {{W_net = η Q_H = 0.25 * 2400 = 600}} J.",
          ],
          hints: [
            "First calculate {{η = 1 - T_C / T_H}}.",
            "Multiply {{η}} by {{Q_H = 2400}} J.",
          ],
          strategy: "Carnot efficiency to work output",
        },
        {
          id: "b1-thermal-gases-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Derive",
          guideRef: "thermodynamics-hl",
          marks: 4,
          question:
            "Using the entropy statement of the Second Law of Thermodynamics, derive the Carnot efficiency upper bound η ≤ 1 − T_C/T_H for any cyclic heat engine operating between reservoirs at Kelvin temperatures T_H and T_C, and explain why 100% efficiency is unattainable.",
          modelAnswer:
            "Over one complete cycle, the working gas returns to its initial thermodynamic state, so its net entropy change is zero (ΔS_gas = 0). The hot reservoir loses heat Q_H at T_H (ΔS_H = −Q_H/T_H) and the cold reservoir gains heat Q_C at T_C (ΔS_C = +Q_C/T_C). By the Second Law, total entropy change cannot be negative: −Q_H/T_H + Q_C/T_C ≥ 0, which rearranges to Q_C/Q_H ≥ T_C/T_H. Substituting into thermal efficiency η = 1 − Q_C/Q_H gives η ≤ 1 − T_C/T_H, with equality only for an ideal reversible cycle. Achieving η = 100% would require either Q_C = 0 (making ΔS_total = −Q_H/T_H < 0) or a cold reservoir at absolute zero (T_C = 0 K), which is physically unreachable.",
          markScheme: [
            {
              point: "Notes that over a full cycle ΔS_gas = 0, so ΔS_total = −Q_H/T_H + Q_C/T_C.",
              keywords: ["δs_gas = 0", "−q_h/t_h", "+q_c/t_c"],
            },
            {
              point: "Applies Second Law ΔS_total ≥ 0 to obtain Q_C/Q_H ≥ T_C/T_H.",
              keywords: ["q_c/q_h ≥ t_c/t_h", "negative", "rearranges"],
            },
            {
              point: "Substitutes into η = 1 − Q_C/Q_H to obtain η ≤ 1 − T_C/T_H (equality for reversible Carnot cycle).",
              keywords: ["reversible", "equality", "1 − q_c/q_h"],
            },
            {
              point: "Explains 100% efficiency requires T_C = 0 K (unattainable absolute zero) or Q_C = 0 (decreasing total entropy).",
              keywords: ["absolute zero", "unreachable", "q_c = 0"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid derivation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Writes entropy terms for reservoirs OR states absolute zero is impossible without completing the inequality proof.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Rigorous step-by-step derivation from ΔS_total ≥ 0 to η ≤ 1 − T_C/T_H plus clear physical reason why η = 100% is impossible.",
            },
          ],
          hints: [
            "What is the entropy change of the working gas itself over one complete cycle?",
            "Write {{ΔS_total = -Q_H / T_H + Q_C / T_C >= 0}} and isolate {{Q_C / Q_H}}.",
          ],
          strategy: "Entropy proof of the Carnot bound",
        },
        {
          id: "b1-thermal-gases-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "thermodynamics-hl",
          marks: 3,
          question:
            "Explain the physical meaning of Ω in Boltzmann's entropy equation S = k_B ln Ω, and use statistical probability to explain why a gas initially confined to half a container expands spontaneously to fill the whole container rather than spontaneously retreating back into one half.",
          modelAnswer:
            "Here Ω represents the number of distinct microscopic arrangements (microstates — positions and momenta of all particles) that produce the same observable macroscopic state. When the partition is removed, every molecule has twice as many spatial positions available, multiplying Ω by a factor of 2^N (where N ~ 10²³), which vastly increases entropy S = k_B ln Ω. Because the uniformly distributed macrostate corresponds to overwhelmingly more microstates than the half-filled state, random molecular motion makes spontaneous un-mixing statistically negligible (probability ~ 2^(−N) ≈ 0).",
          markScheme: [
            {
              point: "Defines Ω as the number of distinct microscopic arrangements (microstates) corresponding to a given macrostate.",
              keywords: ["microstates", "arrangements", "macroscopic"],
            },
            {
              point: "Explains that doubling available volume multiplies accessible microstates dramatically (by 2^N), increasing S.",
              keywords: ["2^n", "twice", "vastly"],
            },
            {
              point: "Links overwhelming number of uniform microstates to statistical irreversibility (negligible probability of retreating).",
              keywords: ["uniformly", "overwhelmingly", "negligible"],
            },
          ],
          hints: [
            "Define both *microstate* and *macrostate* clearly.",
            "How many ways can {{N}} molecules each choose between left and right halves ({{2^N}})?",
          ],
          strategy: "Statistical interpretation of entropy and irreversibility",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET — 8 Hard Multi-Step IB & Olympiad-Style Problems
  // ===========================================================================
  challenge: [
    {
      id: "b1-thermal-gases-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "thermal-transfers-radiation",
      question:
        "Exactly {{0.10}} kg of steam at {{100}} °C ({{L_v = 2.26 * 10^6}} J kg⁻¹) is bubbled into {{1.00}} kg of water at {{20}} °C ({{c = 4200}} J kg⁻¹ K⁻¹) inside a perfectly insulated calorimeter. All the steam condenses. Calculate the final equilibrium temperature in °C to 3 significant figures.",
      answer: { type: "number", value: 76.2, tolerance: 0.3, display: "76.2 °C" },
      traps: [
        {
          spec: { type: "number", value: 73.8, tolerance: 0.3 },
          feedback: "You included the condensation energy m_s L_v, but forgot that the 0.10 kg of condensed hot water ALSO cools from 100 °C to T_f!",
        },
      ],
      solution: [
        "First verify all steam condenses: latent energy released = {{0.10 * 2.26 * 10^6 = 226000}} J, whereas warming 1.00 kg of water to 100 °C requires {{1.00 * 4200 * 80 = 336000}} J > 226 000 J, so {{T_f < 100}} °C.",
        "Equate heat lost by steam (condensing + cooling condensed water) to heat gained by cool water: {{m_s L_v + m_s c (100 - T_f) = m_w c (T_f - 20)}}.",
        "{{226000 + 420(100 - T_f) = 4200(T_f - 20)}} → {{268000 - 420 T_f = 4200 T_f - 84000}}.",
        "{{4620 T_f = 352000}} → {{T_f = 352000 / 4620 = 76.19}} °C ≈ **76.2 °C**.",
      ],
      hints: [
        "Verify first whether {{m_s L_v}} is less than the energy needed to boil the 1.00 kg of water.",
        "Remember the {{0.10}} kg of condensed steam becomes liquid water at 100 °C that cools down to {{T_f}}!",
        "Solve {{226000 + 0.10(4200)(100 - T_f) = 1.00(4200)(T_f - 20)}}.",
      ],
      strategy: "Two-term condensation calorimetry",
    },
    {
      id: "b1-thermal-gases-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "thermal-transfers-radiation",
      question:
        "Two blackbody stars in a binary system have identical luminosity {{L}}. Star A has peak emission wavelength {{400}} nm and Star B has peak emission wavelength {{800}} nm. Calculate the radius ratio {{R_B / R_A}}.",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "Temperature doubles, so T⁴ increases by 16× — taking the square root for R² gives 4, not 2!",
        },
        {
          spec: { type: "number", value: 16 },
          feedback: "16 is (R_B / R_A)² — take the square root to get R_B / R_A!",
        },
      ],
      solution: [
        "By Wien's law ({{λ_max T = \"const\"}}), {{T_A / T_B = λ_B / λ_A = 800 / 400 = 2}}.",
        "Since both stars have identical luminosity {{L = 4 pi R^2 σ T^4}}, {{R_A^2 T_A^4 = R_B^2 T_B^4}}.",
        "{{(R_B / R_A)^2 = (T_A / T_B)^4 = 2^4 = 16}} → {{R_B / R_A = sqrt(16) = 4}}.",
      ],
      hints: [
        "First find the temperature ratio {{T_A / T_B}} from Wien's displacement law.",
        "Equate {{R_A^2 T_A^4 = R_B^2 T_B^4}} and solve for {{R_B / R_A}}.",
      ],
      strategy: "Coupled Wien and Stefan–Boltzmann ratio",
    },
    {
      id: "b1-thermal-gases-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "greenhouse-effect",
      question:
        "A planet with a blackbody surface ({{e_s = 1}}) absorbs average solar intensity {{I_abs = 240}} W m⁻². Above it sits a uniform single-layer atmosphere of infrared emissivity/absorptivity {{e_a = 0.80}} (it absorbs 80% of upward surface IR, transmits 20% directly to space, and emits {{e_a σ T_a^4}} both upward and downward). Assuming radiative equilibrium at both the atmosphere and top of atmosphere, calculate the infrared intensity {{σ T_s^4}} emitted by the planet's surface in W m⁻².",
      answer: { type: "number", value: 400, display: "400 W m⁻²" },
      traps: [
        {
          spec: { type: "number", value: 480 },
          feedback: "480 W m⁻² is for a 100%-opaque blackbody atmosphere (e_a = 1); here e_a = 0.80 lets 20% escape directly.",
        },
        {
          spec: { type: "number", value: 300 },
          feedback: "Check your algebra: atmosphere emits equally up and down, so σT_a⁴ = (1/2) σT_s⁴.",
        },
      ],
      solution: [
        "Let {{I_s = σ T_s^4}} and {{I_a = σ T_a^4}}. Atmosphere energy balance (in = out): {{e_a I_s = 2 e_a I_a}} → {{I_a = (1/2) I_s}}.",
        "Top-of-atmosphere energy balance: transmitted surface IR + upward atmospheric IR = absorbed solar intensity: {{(1 - e_a) I_s + e_a I_a = I_abs}}.",
        "Substitute {{I_a = (1/2) I_s}}: {{(1 - e_a + e_a / 2) I_s = (1 - e_a / 2) I_s = I_abs}}.",
        "With {{e_a = 0.80}} and {{I_abs = 240}} W m⁻²: {{(1 - 0.40) I_s = 240}} → {{I_s = 240 / 0.60 = 400}} W m⁻² (giving {{T_s ≈ 290}} K!).",
      ],
      hints: [
        "Write energy balance for the atmosphere alone first: it absorbs {{e_a σ T_s^4}} and radiates {{e_a σ T_a^4}} upward AND downward.",
        "From the atmosphere balance, deduce {{σ T_a^4 = (1/2) σ T_s^4}}.",
        "Substitute this into the top-of-atmosphere balance {{(1 - e_a) σ T_s^4 + e_a σ T_a^4 = 240}}.",
      ],
      strategy: "Coupled radiative balance for partial-emissivity atmosphere",
    },
    {
      id: "b1-thermal-gases-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "gas-laws-kmt",
      question:
        "Two rigid flasks of identical volume {{V}} are connected by a narrow open tube of negligible volume. Initially, both flasks hold ideal gas at {{300}} K and pressure {{150}} kPa. Flask 2 is then heated to {{600}} K while Flask 1 is held strictly at {{300}} K. Calculate the new common equilibrium pressure in kPa.",
      answer: { type: "number", value: 200, display: "200 kPa" },
      traps: [
        {
          spec: { type: "number", value: 225 },
          feedback: "225 kPa is the simple average of 150 and 300 kPa, which ignores that gas migrates from the hotter flask to the cooler flask!",
        },
      ],
      solution: [
        "Total number of moles {{n_total}} is conserved across both flasks.",
        "Initially: {{n_total = (P_0 V) / (R * 300) + (P_0 V) / (R * 300) = (2 * 150 * V) / (300 R) = V / R}}.",
        "Finally at common pressure {{P_f}}: {{n_total = (P_f V) / (300 R) + (P_f V) / (600 R) = (P_f V / R)(1/300 + 1/600) = (P_f V) / (200 R)}}.",
        "Equating total moles: {{V / R = (P_f V) / (200 R)}} → {{P_f = 200}} kPa.",
      ],
      hints: [
        "Can gas flow between the two flasks until both share the same final pressure {{P_f}}?",
        "Conserve total moles: {{n_1 + n_2 = n_1' + n_2'}} using {{n = P V / (R T)}} for each flask separately.",
      ],
      strategy: "Conservation of total moles across unequal-temperature vessels",
    },
    {
      id: "b1-thermal-gases-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "thermodynamics-hl",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" role="img" aria-label="Clockwise rectangular thermodynamic cycle ABCD on a pressure-volume graph between pressure P0 and 3 P0 and between volume V0 and 7 V0">' +
        '<rect x="4" y="4" width="412" height="212" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<line x1="56" y1="184" x2="392" y2="184" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<line x1="56" y1="184" x2="56" y2="24" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<text x="224" y="208" text-anchor="middle" font-size="11" fill="var(--ink-2)">Volume V</text>' +
        '<text x="20" y="106" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 20 106)">Pressure P</text>' +
        '<rect x="100" y="54" width="240" height="86" fill="#2563eb" fill-opacity="0.16" stroke="#2563eb" stroke-width="2.6"/>' +
        '<text x="90" y="148" text-anchor="end" font-size="11" font-weight="700" fill="var(--ink)">A</text>' +
        '<text x="90" y="52" text-anchor="end" font-size="11" font-weight="700" fill="var(--ink)">B</text>' +
        '<text x="348" y="52" font-size="11" font-weight="700" fill="var(--ink)">C</text>' +
        '<text x="348" y="148" font-size="11" font-weight="700" fill="var(--ink)">D</text>' +
        '<text x="48" y="144" text-anchor="end" font-size="10" fill="var(--ink-2)">P₀</text>' +
        '<text x="48" y="58" text-anchor="end" font-size="10" fill="var(--ink-2)">3P₀</text>' +
        '<text x="100" y="198" text-anchor="middle" font-size="10" fill="var(--ink-2)">V₀</text>' +
        '<text x="340" y="198" text-anchor="middle" font-size="10" fill="var(--ink-2)">7V₀</text>' +
        '<text x="220" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">B → C (isobaric expansion)</text>' +
        '<text x="220" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Clockwise cycle · Wnet = 12 P₀V₀</text>' +
        '<text x="220" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">D → A (isobaric compression)</text>' +
        '</svg>',
      question:
        "An ideal **monatomic** gas executes the clockwise rectangular cycle {{A -> B -> C -> D -> A}} shown above, with {{A(V_0, P_0)}}, {{B(V_0, 3 P_0)}}, {{C(7 V_0, 3 P_0)}}, and {{D(7 V_0, P_0)}}. Calculate the thermal efficiency of this heat engine as a percentage.",
      answer: { type: "number", value: 25, display: "25%" },
      traps: [
        {
          spec: { type: "number", value: 33.3, tolerance: 0.4 },
          feedback: "Remember to divide W_net by total heat INPUT Q_H (48 P₀V₀), not rejected heat Q_C (36 P₀V₀).",
        },
        {
          spec: { type: "number", value: 95.2, tolerance: 0.3 },
          feedback: "95.2% is the Carnot efficiency between T_A and T_C — this rectangular cycle is irreversible and far less efficient!",
        },
      ],
      solution: [
        "Net work per cycle equals the enclosed area: {{W_net = (3 P_0 - P_0)(7 V_0 - V_0) = (2 P_0)(6 V_0) = 12 P_0 V_0}}.",
        "Identify heat-absorbing legs (where {{Q > 0}}): A→B (isovolumetric heating) and B→C (isobaric expansion). Legs C→D and D→A reject heat.",
        "Leg A→B: {{W = 0}}, {{Q_AB = ΔU_AB = (3/2) V_0 (3 P_0 - P_0) = 3 P_0 V_0}}.",
        "Leg B→C: {{W_BC = 3 P_0 (6 V_0) = 18 P_0 V_0}}, {{ΔU_BC = (3/2)(3 P_0)(6 V_0) = 27 P_0 V_0}}, so {{Q_BC = 18 + 27 = 45 P_0 V_0}}.",
        "Total heat input: {{Q_H = 3 P_0 V_0 + 45 P_0 V_0 = 48 P_0 V_0}}. Efficiency: {{η = W_net / Q_H = 12 / 48 = 0.25 = 25%}}.",
      ],
      hints: [
        "Find {{W_net}} from the enclosed area of the rectangle in terms of {{P_0 V_0}}.",
        "Find {{Q_AB}} and {{Q_BC}} using {{U = (3/2) P V}} and {{Q = ΔU + W}} — ONLY legs A→B and B→C absorb heat!",
        "Divide {{W_net}} by {{Q_H = Q_AB + Q_BC}}.",
      ],
      strategy: "Full monatomic cycle efficiency from p–V coordinates",
    },
    {
      id: "b1-thermal-gases-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "thermodynamics-hl",
      question:
        "Two reversible Carnot engines operate in series. Engine 1 absorbs heat {{Q_1}} from a hot reservoir at {{T_1 = 900}} K and rejects heat {{Q_2}} to an intermediate reservoir at temperature {{T_2}}. Engine 2 absorbs all of {{Q_2}} at {{T_2}} and rejects heat {{Q_3}} to a cold reservoir at {{T_3 = 300}} K. If both engines perform the **exact same net work output** per cycle ({{W_1 = W_2}}), calculate {{T_2}} in kelvin.",
      answer: { type: "number", value: 600, display: "600 K" },
      traps: [
        {
          spec: { type: "number", value: 520, tolerance: 2 },
          feedback: "520 K = √(900 × 300) makes the two engines have equal EFFICIENCIES, not equal WORK outputs!",
        },
      ],
      solution: [
        "For reversible Carnot engines, {{Q_1 / T_1 = Q_2 / T_2 = Q_3 / T_3 = k}} (constant entropy flux).",
        "Work of Engine 1: {{W_1 = Q_1 - Q_2 = k (T_1 - T_2)}}.",
        "Work of Engine 2: {{W_2 = Q_2 - Q_3 = k (T_2 - T_3)}}.",
        "Setting {{W_1 = W_2}}: {{T_1 - T_2 = T_2 - T_3}} → {{T_2 = (T_1 + T_3) / 2 = (900 + 300) / 2 = 600}} K.",
      ],
      hints: [
        "For a reversible Carnot cycle, {{Q_C / Q_H = T_C / T_H}}, so heat flow is directly proportional to Kelvin temperature!",
        "Express both {{W_1 = Q_1 - Q_2}} and {{W_2 = Q_2 - Q_3}} in terms of {{Q_1}}, {{T_1}}, {{T_2}}, and {{T_3}}.",
      ],
      strategy: "Entropy-flux shortcut for cascaded Carnot engines",
    },
    {
      id: "b1-thermal-gases-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "thermodynamics-hl",
      marks: 5,
      question:
        "An ideal monatomic gas inside a perfectly insulated cylinder is compressed rapidly to half its initial volume. A student claims: 'Because Q = 0, internal energy cannot change and the final pressure is simply 2 P₁.' Evaluate both parts of this claim qualitatively and quantitatively.",
      modelAnswer:
        "Both parts of the student's claim are incorrect because the student confuses adiabatic compression (Q = 0) with isothermal compression (ΔT = 0).\n1. Internal energy: Applying the First Law Q = ΔU + W with Q = 0 gives ΔU = −W. Because the gas is compressed, external work is done ON the gas (W < 0), making ΔU > 0. Therefore internal energy and temperature both increase substantially.\n2. Quantitative temperature factor: From TV^(2/3) = const, halving V gives T₂/T₁ = 2^(2/3) ≈ 1.59 (a 59% rise in Kelvin temperature and internal energy).\n3. Quantitative pressure factor: Applying the monatomic adiabatic equation PV^(5/3) = const instead of Boyle's law gives P₂ = P₁ (V₁/V₂)^(5/3) = P₁ × 2^(5/3) ≈ 3.17 P₁, which is far greater than 2 P₁ because rising temperature boosts pressure on top of smaller volume.",
      markScheme: [
        {
          point: "Identifies that both parts of the claim are wrong because the student confuses adiabatic (Q = 0) with isothermal (ΔT = 0).",
          keywords: ["incorrect", "confuses", "isothermal"],
        },
        {
          point: "Uses First Law (0 = ΔU + W) with negative compression work (W < 0) to prove ΔU > 0 and temperature rises.",
          keywords: ["δu = −w", "w < 0", "increase"],
        },
        {
          point: "Quantifies temperature / internal energy rise via TV^(2/3) = const: factor 2^(2/3) ≈ 1.59.",
          keywords: ["1.59", "2/3", "tv"],
        },
        {
          point: "Applies monatomic adiabatic relation PV^(5/3) = const to find P₂ = 2^(5/3) P₁ ≈ 3.17 P₁.",
          keywords: ["3.17", "5/3", "pv"],
        },
        {
          point: "Explains physically why P₂ > 2 P₁: higher molecular speed/temperature adds to the pressure rise from smaller volume.",
          keywords: ["far greater", "boosts", "boyle"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Agrees with the student or provides no valid thermodynamic reasoning.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Rejects the claim qualitatively via First Law (work heats the gas) without quantitative adiabatic factors.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear First Law refutation AND calculates either the pressure factor (3.17) or temperature factor (1.59).",
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete qualitative and quantitative evaluation diagnosing the isothermal fallacy, proving ΔU > 0 from Q = ΔU + W, and computing both T₂ ≈ 1.59 T₁ and P₂ ≈ 3.17 P₁.",
        },
      ],
      hints: [
        "Does {{Q = 0}} imply {{ΔU = 0}} when work is being done on the gas?",
        "Compute the exact pressure multiplier {{2^(5/3)}} and temperature multiplier {{2^(2/3)}}.",
      ],
      strategy: "Quantitative evaluation of thermodynamic misconceptions",
    },
    {
      id: "b1-thermal-gases-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "thermodynamics-hl",
      marks: 6,
      question:
        "Two identical metal blocks (mass m, specific heat capacity c) at initial temperatures 400 K and 200 K are placed in direct contact inside a perfectly insulated box and reach 300 K. Discuss: (a) how energy conservation determines 300 K, (b) why total entropy increases even though heat lost equals heat gained, and (c) what happens if a reversible Carnot engine extracts maximum work between the two blocks instead.",
      modelAnswer:
        "(a) Because the box is perfectly insulated, Q_net = 0 and W = 0, so total internal energy is conserved (First Law): mc(400 − T_f) = mc(T_f − 200), immediately giving the arithmetic mean T_f = 300 K.\n(b) Every small packet of thermal energy δQ leaving the hotter block at temperature T_hot reduces its entropy by −δQ/T_hot, while entering the cooler block at T_cold < T_hot increases the cooler block's entropy by +δQ/T_cold. Since T_cold < T_hot throughout equilibration, +δQ/T_cold > δQ/T_hot for every packet, so total entropy increases strictly (ΔS_total = mc ln(300²/(400×200)) = mc ln(9/8) > 0), confirming direct conduction is irreversible.\n(c) Inserting a reversible Carnot engine between the blocks keeps ΔS_total = 0 rather than generating entropy. The engine converts part of the heat flow into useful mechanical work W_max, meaning less heat reaches the cold block and the two blocks finish at the geometric mean temperature T_f = √(400 × 200) ≈ 283 K — lower than 300 K, with the missing internal energy mc(600 − 2×283) ≈ 34 mc extracted as useful work!",
      markScheme: [
        {
          point: "Applies First Law / energy conservation inside insulated box to obtain arithmetic mean 300 K.",
          keywords: ["conserved", "arithmetic", "first law"],
        },
        {
          point: "Compares entropy packets −δQ/T_hot and +δQ/T_cold for each transfer step.",
          keywords: ["packet", "t_hot", "t_cold"],
        },
        {
          point: "Explains that because T_cold < T_hot, entropy gained exceeds entropy lost, making ΔS_total > 0 (irreversible).",
          keywords: ["irreversible", "strictly", "9/8"],
        },
        {
          point: "States that a reversible Carnot engine keeps ΔS_total = 0 while extracting useful mechanical work.",
          keywords: ["δs_total = 0", "useful", "converts"],
        },
        {
          point: "Deduces that final temperature is lower than 300 K (specifically geometric mean √(400×200) ≈ 283 K).",
          keywords: ["geometric", "283", "lower"],
        },
        {
          point: "Links the difference in final thermal energy directly to the maximum extracted mechanical work.",
          keywords: ["missing", "w_max", "extracted"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid thermodynamic analysis.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Explains arithmetic mean via energy conservation and states qualitatively that entropy rises.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly proves ΔS_total > 0 by comparing δQ/T_cold > δQ/T_hot and recognises that a Carnot engine extracts work and lowers final temperature.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Masterful synthesis integrating First Law (300 K), differential entropy inequality (irreversibility), and zero-entropy-generation Carnot work extraction down to the geometric mean (283 K).",
        },
      ],
      hints: [
        "For (b), consider a tiny packet {{δQ}} transferring while {{T_hot > T_cold}} and compare {{-δQ / T_hot}} with {{+δQ / T_cold}}.",
        "For (c), if useful work leaves the insulated system, can the blocks still end up at 300 K? Set {{ΔS_1 + ΔS_2 = 0}} using {{ΔS = m c ln(T_f / T_i)}}!",
      ],
      strategy: "Compare irreversible equilibration with reversible Carnot work extraction",
    },
  ],
};
