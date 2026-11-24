import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK TOPIC QUIZ (10 Qs: 4 balanced MCQs [0,1,2,3] + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "e2-nuclear-stars-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "binding-energy-decay",
      strategy: "Multiply mass defect in u by 931.5 MeV u⁻¹",
      question:
        "A nucleus has a mass defect of {{0.0500}} u. Using {{1 u = 931.5}} MeV c⁻², calculate its total binding energy in MeV to 3 significant figures.",
      answer: { type: "number", value: 46.6, tolerance: 0.2, display: "46.6 MeV" },
      traps: [
        {
          spec: { type: "number", value: 0.05, tolerance: 0.002 },
          feedback: "That is the mass defect in u — multiply by 931.5 MeV u⁻¹ to convert to energy in MeV.",
        },
      ],
      hints: ["Use {{E_B = Δm * 931.5}} MeV."],
      solution: [
        "{{E_B = 0.0500 * 931.5 = 46.575}} MeV.",
        "Rounding to 3 significant figures gives **46.6 MeV**.",
      ],
    },
    {
      id: "e2-nuclear-stars-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "binding-energy-decay",
      strategy: "Subtract background before halving, then add background back",
      question:
        "A GM tube records {{180}} counts min⁻¹ near a radioactive source whose half-life is {{4.0}} hours. The background count rate is {{20}} counts min⁻¹. Calculate the total count rate (in counts min⁻¹) recorded {{12}} hours later.",
      answer: { type: "number", value: 40 },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20 counts min⁻¹ is the source rate alone — remember to add back the 20 counts min⁻¹ background reading!",
        },
        {
          spec: { type: "number", value: 22.5, tolerance: 0.2 },
          feedback: "Subtract the 20 counts min⁻¹ background *before* halving the count rate 3 times.",
        },
      ],
      hints: ["Subtract 20 first to get 160 counts min⁻¹, halve it 3 times ({{12 / 4 = 3}}), then add 20 back."],
      solution: [
        "Corrected initial source rate = {{180 - 20 = 160}} counts min⁻¹.",
        "Number of half-lives = {{12 / 4.0 = 3}}, so remaining source rate = {{160 / 2^3 = 20}} counts min⁻¹.",
        "Total GM reading = {{20 + 20 = 40}} counts min⁻¹.",
      ],
    },
    {
      id: "e2-nuclear-stars-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "binding-energy-decay",
      strategy: "Locate the binding-energy-per-nucleon peak",
      question: "Which nuclide lies at the broad peak of the binding energy per nucleon curve (highest nuclear stability)?",
      options: [
        "Iron-56 (⁵⁶Fe)",
        "Helium-4 (⁴He)",
        "Carbon-12 (¹²C)",
        "Uranium-235 (²³⁵U)",
      ],
      answerIndex: 0,
      hints: ["The peak occurs around nucleon number A ≈ 56–62 (~8.8 MeV nucleon⁻¹)."],
      explanation:
        "Iron-56 (and nickel-62) sit at the peak of the {{E_B / A}} curve at ~8.8 MeV per nucleon. Helium-4 is a sharp local peak (~7.1 MeV), while uranium-235 sits lower on the right (~7.6 MeV).",
    },
    {
      id: "e2-nuclear-stars-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "decay-law-hl",
      strategy: "Apply λ = ln(2) / T_½",
      question:
        "A radioisotope has a half-life of {{20.0}} s. Calculate its decay constant {{λ}} in s⁻¹ to 3 significant figures.",
      answer: { type: "number", value: 0.0347, tolerance: 0.0005 },
      traps: [
        {
          spec: { type: "number", value: 0.05, tolerance: 0.001 },
          feedback: "You computed {{1 / T_½}} — remember the factor of {{ln(2) ≈ 0.693}} in {{λ = ln(2) / T_½}}.",
        },
      ],
      hints: [
        "Use the HL relationship {{T_½ = ln(2) / λ}}.",
        "Rearrange to {{λ = ln(2) / 20.0}}.",
      ],
      solution: [
        "{{λ = ln(2) / T_½ = 0.69315 / 20.0 = 0.03466}} s⁻¹ ≈ **0.0347** s⁻¹.",
      ],
    },
    {
      id: "e2-nuclear-stars-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "decay-law-hl",
      strategy: "Link continuous β⁻ energy spectrum to the antineutrino",
      question: "What does the continuous kinetic energy spectrum of emitted β⁻ particles provide direct experimental evidence for?",
      options: [
        "Quantized nuclear energy shells inside heavy isotopes",
        "Emission of an electron antineutrino alongside the electron",
        "Spontaneous fission of neutron-rich daughter nuclei",
        "Quantum tunnelling of alpha particles through the barrier",
      ],
      answerIndex: 1,
      hints: [
        "A two-body decay would force every β⁻ electron to carry the exact same kinetic energy.",
        "What neutral particle shares the decay energy with the β⁻ electron?",
      ],
      explanation:
        "Because β⁻ electrons emerge with any kinetic energy from 0 up to {{E_max}}, a third particle — the **electron antineutrino** (ν̄_e) — must carry away the missing energy and momentum.",
    },
    {
      id: "e2-nuclear-stars-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "nuclear-fission",
      strategy: "Conserve total nucleon number A across reactants and products",
      question:
        "In the induced fission ²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + *x* ¹₀n, calculate the integer number of neutrons *x* released.",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "Don't forget the incident neutron on the left-hand side: total A on the left is 235 + 1 = 236.",
        },
      ],
      hints: [
        "Add up total nucleon number A on the left: {{235 + 1 = 236}}.",
        "Subtract {{140 + 94}} from 236.",
      ],
      solution: [
        "Left-hand nucleon total = {{235 + 1 = 236}}.",
        "Right-hand nucleon total = {{140 + 94 + x = 234 + x}}.",
        "Solving {{234 + x = 236}} gives **x = 2** neutrons.",
      ],
    },
    {
      id: "e2-nuclear-stars-quiz-q07",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "nuclear-fission",
      strategy: "Control rods absorb neutrons; moderator slows them",
      question: "Which nuclear reactor component is raised or lowered to **absorb** neutrons and regulate the fission rate?",
      options: [
        "Graphite moderator",
        "Heat exchanger",
        "Boron control rods",
        "Concrete shielding",
      ],
      answerIndex: 2,
      hints: ["Control rods Catch (absorb) neutrons; the Moderator Makes neutrons Mellow (slow)."],
      explanation:
        "**Boron (or cadmium) control rods** absorb neutrons strongly so operators can maintain a steady chain reaction or shut the reactor down rapidly.",
    },
    {
      id: "e2-nuclear-stars-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "fusion-stars-hr",
      strategy: "Apply d = 1 / p",
      question: "A star has an annual parallax angle of {{0.125}} arcsec. Calculate its distance from Earth in parsecs.",
      answer: { type: "number", value: 8, display: "8 pc" },
      hints: ["Use {{d = 1 / p}} with *p* in arcseconds."],
      solution: ["{{d = 1 / 0.125 = 8}} pc."],
    },
    {
      id: "e2-nuclear-stars-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "fusion-stars-hr",
      strategy: "Apply Wien's displacement law λ_max T = 2.90 × 10⁻³ m K",
      question:
        "A star's emission spectrum peaks at {{λ_max = 500}} nm. Using {{λ_max T = 2.90 * 10^(-3)}} m K, calculate its surface temperature in kelvin to 3 significant figures.",
      answer: { type: "number", value: 5800, tolerance: 20, display: "5800 K" },
      hints: [
        "Convert {{500}} nm to metres: {{5.00 * 10^(-7)}} m.",
        "Divide {{2.90 * 10^(-3)}} by {{5.00 * 10^(-7)}}.",
      ],
      solution: [
        "{{T = (2.90 * 10^(-3)) / (5.00 * 10^(-7)) = 5800}} K.",
      ],
    },
    {
      id: "e2-nuclear-stars-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "fusion-stars-hr",
      strategy: "Remember inverted HR temperature axis",
      question: "In which region of a standard Hertzsprung–Russell (HR) diagram are **Red Giants** located?",
      options: [
        "Bottom-left (hot and dim)",
        "Top-left (hot and luminous)",
        "Bottom-right (cool and dim)",
        "Top-right (cool and luminous)",
      ],
      answerIndex: 3,
      hints: [
        "Red means cool surface temperature — which side of the inverted HR x-axis is cool?",
        "Giant means huge radius and high luminosity — top or bottom?",
      ],
      explanation:
        "Red Giants are cool (right side of the inverted temperature axis) yet very luminous (near the top) because of their enormous surface areas, placing them in the **top-right** region.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS P1 & P2 (15 Qs each — mix of ShortQ & WrittenQ)
  // ===========================================================================
  papers: [
    {
      id: "e2-nuclear-stars-p1",
      title: "Paper P1 · Binding Energy, Decay & Fission Reactors",
      level: "SL",
      questions: [
        {
          id: "e2-nuclear-stars-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "binding-energy-decay",
          strategy: "Neutron number N = A − Z",
          question: "Calculate the number of neutrons in a single uranium-235 nucleus (²³⁵₉₂U).",
          answer: { type: "number", value: 143 },
          traps: [
            { spec: { type: "number", value: 92 }, feedback: "92 is the proton number Z — subtract Z from A = 235 to find neutrons." },
            { spec: { type: "number", value: 235 }, feedback: "235 is the total nucleon number (protons + neutrons)." },
          ],
          hints: ["Use {{N = A - Z = 235 - 92}}."],
          solution: ["{{N = 235 - 92 = 143}} neutrons."],
        },
        {
          id: "e2-nuclear-stars-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "binding-energy-decay",
          strategy: "Find Δm with full precision, multiply by 931.5 MeV, then divide by A",
          question:
            "A carbon-12 nucleus (¹²₆C) has a nuclear mass of {{11.99671}} u. Using {{m_p = 1.00728}} u, {{m_n = 1.00867}} u, and {{1 u = 931.5}} MeV c⁻², calculate its **binding energy per nucleon** in MeV to 3 significant figures.",
          answer: { type: "number", value: 7.68, tolerance: 0.04, display: "7.68 MeV" },
          traps: [
            {
              spec: { type: "number", value: 92.2, tolerance: 0.5 },
              feedback: "92.2 MeV is the *total* binding energy — divide by A = 12 to find binding energy **per nucleon**.",
            },
          ],
          hints: [
            "Compute the mass of 6 protons + 6 neutrons keeping all 5 decimal places.",
            "Subtract {{11.99671}} u to get {{Δm}}, convert to MeV, and finally divide by {{A = 12}}.",
          ],
          solution: [
            "Mass of separated nucleons = {{6(1.00728) + 6(1.00867) = 6.04368 + 6.05202 = 12.09570}} u.",
            "Mass defect {{Δm = 12.09570 - 11.99671 = 0.09899}} u.",
            "Total binding energy {{E_B = 0.09899 * 931.5 = 92.21}} MeV.",
            "Binding energy per nucleon = {{92.21 / 12 = 7.68}} MeV.",
          ],
          commonError: "Rounding intermediate masses to 3 s.f. or forgetting to divide total binding energy by A = 12.",
        },
        {
          id: "e2-nuclear-stars-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "binding-energy-decay",
          strategy: "Link movement upward toward the Fe-56 peak to mass decrease and E = Δmc²",
          question:
            "Explain, with reference to the binding energy per nucleon curve, why both the fusion of light nuclei and the fission of heavy nuclei release nuclear energy.",
          marks: 3,
          hints: [
            "Name the region where binding energy per nucleon reaches its maximum.",
            "State which direction fusion (left) and fission (right) move products on the curve.",
            "Connect an *increase* in binding energy to the resulting decrease in total rest mass.",
          ],
          modelAnswer:
            "The curve reaches its maximum stability peak around iron-56 (and nickel-62) at roughly 8.8 MeV per nucleon. Both joining light nuclei (left side) and splitting heavy nuclei (right side) produce daughter nuclides with a higher binding energy per nucleon than the initial reactants. Because products are more tightly bound, their total rest mass is smaller than the reactants' mass, and this mass defect Δm is released as kinetic and radiant energy according to E = Δmc².",
          markScheme: [
            {
              point: "States that binding energy per nucleon peaks around iron-56 / nickel-62 (A ≈ 56–62).",
              keywords: ["iron-56", "fe-56", "nickel-62", "ni-62", "peak", "maximum"],
            },
            {
              point: "Explains that both processes produce products with higher binding energy per nucleon than reactants.",
              keywords: ["higher", "greater", "increases", "more tightly bound"],
            },
            {
              point: "Links increased binding energy to a decrease in total rest mass (mass defect) converted to energy via E = Δmc².",
              keywords: ["mass defect", "smaller", "decreases", "mc²", "mc^2", "rest mass"],
            },
          ],
          commonError: "Writing that binding energy 'decreases' during exothermic reactions — binding energy INCREASES while rest mass DECREASES.",
        },
        {
          id: "e2-nuclear-stars-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "binding-energy-decay",
          strategy: "Determine α count from ΔA, then find β⁻ count from remaining ΔZ",
          question:
            "Radium-226 (²²⁶₈₈Ra) decays into polonium-214 (²¹⁴₈₄Po) via a sequence of α and β⁻ decays. Calculate the number of **β⁻ particles** emitted in this chain.",
          answer: { type: "number", value: 2 },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "3 is the number of α-particles emitted — now check how much Z must increase after those 3 α decays!",
            },
          ],
          hints: [
            "First find the number of α decays from {{ΔA = 226 - 214 = 12}} (each α lowers A by 4).",
            "Those 3 α decays reduce Z from 88 to {{88 - 6 = 82}}. How many β⁻ decays raise Z from 82 to 84?",
          ],
          solution: [
            "Number of α decays = {{(226 - 214) / 4 = 12 / 4 = 3}}.",
            "After 3 α decays, proton number becomes {{88 - 3(2) = 82}}.",
            "To reach Z = 84 (Po), each β⁻ decay adds +1 to Z, requiring {{84 - 82 = 2}} β⁻ particles.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "binding-energy-decay",
          strategy: "Count integer half-lives n = t / T_½ and divide by 2^n",
          question:
            "A hospital prepares a technetium-99m sample ({{T_½ = 6.0}} hours) with an initial activity of {{640}} MBq. Calculate its activity in MBq after {{30}} hours.",
          answer: { type: "number", value: 20, display: "20 MBq" },
          traps: [
            {
              spec: { type: "number", value: 128 },
              feedback: "You divided by 5 instead of {{2^5 = 32}} — activity halves every 6.0 hours!",
            },
          ],
          hints: [
            "Find the number of half-lives: {{n = 30 / 6.0 = 5}}.",
            "Divide {{640}} MBq by {{2^5 = 32}}.",
          ],
          solution: [
            "Elapsed half-lives: {{n = 30 / 6.0 = 5}}.",
            "Remaining activity: {{A = 640 / 2^5 = 640 / 32 = 20}} MBq.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "binding-energy-decay",
          strategy: "Contrast force ranges of electrostatic vs strong nuclear interaction",
          question:
            "Explain why stable heavy nuclei (with {{Z > 20}}) contain progressively more neutrons than protons.",
          marks: 3,
          hints: [
            "Compare the range of electrostatic repulsion between protons with the range of the strong nuclear force.",
            "Explain what extra neutrons contribute to attraction versus repulsion.",
          ],
          modelAnswer:
            "Electrostatic repulsion between positively charged protons is long-range, so every proton repels all other protons across the entire nucleus. In contrast, the attractive strong nuclear force is very short-range (~2–3 fm), acting only between immediate neighbouring nucleons. Adding extra neutrons supplies additional strong-force attraction and increases spacing between protons without introducing any extra Coulomb repulsion.",
          markScheme: [
            {
              point: "Electrostatic / Coulomb repulsion between protons is long-range (acts across the whole nucleus).",
              keywords: ["long-range", "coulomb", "electrostatic", "repulsion"],
            },
            {
              point: "Strong nuclear force is very short-range (acts only between adjacent nucleons).",
              keywords: ["short-range", "strong nuclear", "strong-force", "neighbouring", "adjacent"],
            },
            {
              point: "Extra neutrons add strong attraction / separation without adding electrostatic repulsion.",
              keywords: ["without", "spacing", "attraction", "neutral"],
            },
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "nuclear-fission",
          strategy: "Conserve total A on both sides including the incident neutron",
          question:
            "Balance the induced uranium-235 fission reaction: ²³⁵₉₂U + ¹₀n → ¹³⁹₅₆Ba + ⁹⁴₃₆Kr + *x* ¹₀n. Calculate the number of neutrons *x* emitted.",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "Remember to count the incident thermal neutron (+1) on the left-hand side.",
            },
          ],
          hints: [
            "Total A on left = {{235 + 1 = 236}}.",
            "Total A on right = {{139 + 94 + x = 233 + x}}.",
          ],
          solution: [
            "{{235 + 1 = 139 + 94 + x => 236 = 233 + x => x = 3}} neutrons.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "nuclear-fission",
          strategy: "Convert Δm in u directly to MeV using 931.5 MeV u⁻¹",
          question:
            "In one induced fission of uranium-235, the total rest mass decreases by {{0.198}} u. Calculate the energy released in MeV to 3 significant figures (use {{1 u = 931.5}} MeV c⁻²).",
          answer: { type: "number", value: 184, tolerance: 1, display: "184 MeV" },
          hints: [
            "Multiply {{0.198}} u directly by {{931.5}} MeV u⁻¹.",
            "Round the final result to 3 s.f.",
          ],
          solution: [
            "{{Q = 0.198 * 931.5 = 184.44}} MeV ≈ **184 MeV**.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "nuclear-fission",
          strategy: "P_elec = η × P_th",
          question:
            "A nuclear reactor produces {{2.40}} GW ({{2400}} MW) of thermal power and converts it into electricity at {{35}}% efficiency. Calculate the electrical power output in MW.",
          answer: { type: "number", value: 840, tolerance: 2, display: "840 MW" },
          hints: [
            "Electrical output is smaller than thermal power: {{P_elec = η * P_th}}.",
            "Multiply {{2400}} MW by {{0.35}}.",
          ],
          solution: [
            "{{P_elec = 0.35 * 2400 = 840}} MW.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "nuclear-fission",
          strategy: "Divide electrical power by η first, then divide by energy per fission",
          question:
            "A fission power plant generates {{800}} MW of electrical power at {{25}}% overall efficiency. Each ²³⁵U fission releases {{3.20 * 10^(-11)}} J. Calculate the number of fissions occurring every second (give your answer in standard form to 3 s.f., e.g. 2.50 * 10^18).",
          answer: {
            type: "number",
            value: 1.0e20,
            tolerance: 2e18,
            standardForm: true,
            display: "{{1.00 * 10^20}}",
          },
          traps: [
            {
              spec: { type: "number", value: 2.5e19, tolerance: 5e17 },
              feedback: "You divided electrical power directly by energy per fission — first divide by efficiency 0.25 to obtain thermal power!",
            },
            {
              spec: { type: "number", value: 6.25e18, tolerance: 2e17 },
              feedback: "You multiplied by 0.25 instead of dividing! Thermal power is *larger* than electrical output.",
            },
          ],
          hints: [
            "Compute thermal power required: {{P_th = 800 / 0.25 = 3200}} MW = {{3.20 * 10^9}} W.",
            "Divide {{3.20 * 10^9}} J s⁻¹ by {{3.20 * 10^(-11)}} J per fission.",
          ],
          solution: [
            "Thermal power {{P_th = P_elec / η = 800 / 0.25 = 3200}} MW = {{3.20 * 10^9}} W.",
            "Fission rate = {{(3.20 * 10^9) / (3.20 * 10^(-11)) = 1.00 * 10^20}} s⁻¹.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "nuclear-fission",
          strategy: "Address each reactor component distinctly with clear nuclear physics",
          question:
            "Explain the distinct functions of the moderator, control rods, and heat exchanger in a pressurized thermal fission reactor, and explain why the moderator must be built from light nuclei rather than heavy nuclei.",
          marks: 5,
          hints: [
            "State what the moderator does to fast fission neutrons and why thermal neutrons matter for U-235.",
            "Use elastic-collision momentum/energy transfer to explain why light nuclei (H, D, C) outperform heavy nuclei.",
            "Contrast control rods (neutron absorption) and heat exchanger (isolating radioactive primary coolant from steam).",
          ],
          modelAnswer:
            "Fast neutrons (~2 MeV) released in U-235 fission have a very low capture probability, so the moderator (such as water or graphite) slows them down to thermal speeds (~0.025 eV) via repeated elastic collisions so they can reliably induce further U-235 fissions. Light nuclei are essential because elastic collisions transfer the maximum fraction of kinetic energy when the target mass is close to a neutron's mass (off heavy nuclei, neutrons bounce back at almost full speed). Control rods (boron or cadmium) strongly absorb neutrons and are moved deeper or shallower to keep the average secondary fissions per event at exactly one — or to shut down the reaction completely. Finally, the heat exchanger transfers thermal energy from the hot, neutron-activated primary coolant to boil clean water in a separate secondary steam loop, preventing radioactive contamination from reaching the turbines.",
          markScheme: [
            {
              point: "Moderator slows fast neutrons down to thermal speeds so U-235 can capture them effectively.",
              keywords: ["slows", "thermal", "capture"],
            },
            {
              point: "Slowing occurs via elastic collisions.",
              keywords: ["elastic"],
            },
            {
              point: "Light nuclei maximize kinetic energy transfer per collision because their mass is close to a neutron's mass.",
              keywords: ["similar mass", "close to a neutron", "kinetic energy", "maximum"],
            },
            {
              point: "Control rods (boron/cadmium) absorb neutrons to regulate fission rate or shut down the core.",
              keywords: ["absorb", "boron", "cadmium", "regulate", "shut down"],
            },
            {
              point: "Heat exchanger transfers thermal energy to a secondary steam loop while isolating radioactive primary coolant.",
              keywords: ["secondary", "steam", "isolat", "contamination", "radioactive"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics or roles completely reversed." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies one or two components accurately with limited physical justification.",
              indicators: ["Mentions slowing or absorbing neutrons without elastic-collision reasoning or loop isolation."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Correctly explains all three components with partial collision or safety detail.",
              indicators: ["Distinguishes slowing vs absorbing clearly; omits either light-nucleus mass matching or contamination isolation."],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, accurate IB Physics explanation linking all three components to underlying nuclear and mechanics principles.",
              indicators: ["Elastic collision mass-matching + thermal capture + boron/cadmium absorption + primary/secondary isolation."],
            },
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Multiply total mass decrease in u by 931.5 MeV u⁻¹",
          question:
            "In the solar proton–proton chain (4 ¹₁H → ⁴₂He + 2 e⁺ + 2 ν_e + γ), the net rest mass decreases by {{0.0287}} u (take {{1 u = 931.5 MeV c^(-2)}}). Calculate the total energy released in MeV to 3 significant figures.",
          answer: { type: "number", value: 26.7, tolerance: 0.2, display: "26.7 MeV" },
          hints: [
            "Use {{Q = Δm * 931.5}} MeV.",
            "Calculate {{0.0287 * 931.5}} and round to 3 s.f.",
          ],
          solution: [
            "{{Q = 0.0287 * 931.5 = 26.73}} MeV ≈ **26.7 MeV**.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Rearrange Wien's displacement law T = 2.90 × 10⁻³ / λ_max",
          question:
            "An orange giant star has peak blackbody emission wavelength {{λ_max = 725}} nm. Using {{λ_max T = 2.90 * 10^(-3)}} m K, calculate its surface temperature in kelvin to 3 significant figures.",
          answer: { type: "number", value: 4000, tolerance: 20, display: "4000 K" },
          hints: [
            "Convert 725 nm to metres: {{7.25 * 10^(-7)}} m.",
            "Compute {{(2.90 * 10^(-3)) / (7.25 * 10^(-7))}}.",
          ],
          solution: [
            "{{T = (2.90 * 10^(-3)) / (7.25 * 10^(-7)) = 4000}} K.",
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "nuclear-fission",
          strategy: "Balance two concrete advantages against two concrete challenges",
          question:
            "Evaluate nuclear fission as a large-scale electricity source by outlining two distinct advantages and two distinct environmental or safety challenges.",
          marks: 4,
          hints: [
            "Advantages: think of energy density per kg of fuel, operational greenhouse gas emissions, and reliable baseload output.",
            "Challenges: think of long-lived high-level radioactive waste disposal, core meltdown/accident risk, and weapons proliferation.",
          ],
          modelAnswer:
            "Advantages: (1) Fission fuel has an extraordinarily high energy density (~8 × 10¹³ J kg⁻¹ for U-235, millions of times higher than coal), requiring minimal fuel transport; (2) Reactors supply continuous, weather-independent baseload power with near-zero operational CO₂ emissions. Challenges: (1) Spent fuel contains intensely radioactive fission fragments and plutonium requiring secure cooling ponds and deep geological storage for thousands of years; (2) Loss of cooling risks core meltdown and widespread radionuclide release (as at Chernobyl or Fukushima), alongside proliferation risks from enriched fuel or plutonium.",
          markScheme: [
            {
              point: "Advantage 1: extremely high energy density / tiny fuel mass required.",
              keywords: ["energy density", "high density", "minimal fuel", "baseload"],
            },
            {
              point: "Advantage 2: virtually zero operational CO₂ / greenhouse gas emissions.",
              keywords: ["co₂", "co2", "greenhouse", "carbon"],
            },
            {
              point: "Challenge 1: long-lived high-level radioactive waste requiring secure long-term storage.",
              keywords: ["waste", "geological", "storage", "spent fuel", "thousands of years"],
            },
            {
              point: "Challenge 2: risk of core meltdown / radiation leak or nuclear weapons proliferation / decommissioning cost.",
              keywords: ["meltdown", "proliferation", "accident", "leak", "decommissioning"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid evaluation points." },
            { band: "1–2", marks: [1, 2], descriptor: "Presents a one-sided view or vague points without specific physics/environmental context." },
            { band: "3–4", marks: [3, 4], descriptor: "Balanced evaluation giving two clear advantages and two concrete nuclear safety/waste challenges." },
          ],
        },
        {
          id: "e2-nuclear-stars-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "fusion-stars-hr",
          strategy: "Link Coulomb barrier, kinetic energy/tunnelling, strong force range, and collision rate",
          question:
            "Explain why sustained nuclear fusion of protons into helium in a stellar core requires both extremely high temperature (~{{10^7}} K) and very high core density.",
          marks: 3,
          hints: [
            "What force acts between two approaching positively charged protons?",
            "How close must nuclei come for the strong nuclear force to bind them, and what role does density play?",
          ],
          modelAnswer:
            "Positively charged protons experience strong electrostatic (Coulomb) repulsion as they approach each other. Extreme core temperature provides very high average kinetic energy (aided by quantum tunnelling) so protons can approach within ~10⁻¹⁵ m, where the short-range attractive strong nuclear force overcomes repulsion and binds them. High core density ensures a sufficiently high collision frequency to maintain steady fusion power output.",
          markScheme: [
            {
              point: "Identifies electrostatic / Coulomb repulsion between positively charged nuclei.",
              keywords: ["coulomb", "electrostatic", "repulsion", "positively charged"],
            },
            {
              point: "High temperature gives high kinetic energy (and tunnelling) to reach strong nuclear force range (~10⁻¹⁵ m).",
              keywords: ["kinetic energy", "strong nuclear", "strong-force", "tunnelling"],
            },
            {
              point: "High density ensures a high rate / frequency of collisions between nuclei.",
              keywords: ["collision", "frequency", "rate of"],
            },
          ],
        },
      ],
    },

    // =========================================================================
    // PAPER P2: HL Exponential Decay Law & Stellar Astrophysics / HR Diagrams
    // =========================================================================
    {
      id: "e2-nuclear-stars-p2",
      title: "Paper P2 · HL Exponential Decay & Stellar Astrophysics",
      level: "SL",
      questions: [
        {
          id: "e2-nuclear-stars-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "decay-law-hl",
          strategy: "Use λ = ln(2) / T_½ keeping consistent time units",
          question:
            "A medical isotope has a half-life of {{5.00}} hours. Calculate its decay constant {{λ}} in h⁻¹ to 3 significant figures.",
          answer: { type: "number", value: 0.139, tolerance: 0.002 },
          hints: [
            "Use {{λ = ln(2) / T_½}} with {{T_½ = 5.00}} h.",
            "Evaluate {{0.69315 / 5.00}}.",
          ],
          solution: [
            "{{λ = ln(2) / 5.00 = 0.69315 / 5.00 = 0.1386}} h⁻¹ ≈ **0.139** h⁻¹.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "decay-law-hl",
          strategy: "Apply A₀ = λN₀ in Bq then convert to MBq",
          question:
            "A sample initially contains {{N_0 = 8.00 * 10^12}} radioactive nuclei with decay constant {{λ = 2.50 * 10^(-5)}} s⁻¹. Calculate its initial activity {{A_0}} in **MBq** to 3 significant figures.",
          answer: { type: "number", value: 200, tolerance: 2, display: "200 MBq" },
          hints: [
            "Since {{λ}} is already in s⁻¹, {{A_0 = λ N_0}} gives activity directly in Bq.",
            "Divide by {{10^6}} to convert Bq to MBq.",
          ],
          solution: [
            "{{A_0 = (2.50 * 10^(-5))(8.00 * 10^12) = 2.00 * 10^8}} Bq.",
            "Converting to megabecquerels: {{2.00 * 10^8 / 10^6 = 200}} MBq.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "decay-law-hl",
          strategy: "Evaluate A = A₀ e^(−λt)",
          question:
            "A radioisotope has initial activity {{A_0 = 500}} Bq and decay constant {{λ = 0.040}} min⁻¹. Calculate its activity in Bq after {{30.0}} minutes (to 3 significant figures).",
          answer: { type: "number", value: 151, tolerance: 1.5, display: "151 Bq" },
          traps: [
            {
              spec: { type: "number", value: 349, tolerance: 2 },
              feedback: "349 Bq is the *drop* in activity {{A_0(1 - e^(-λ t))}} — evaluate {{A_0 e^(-λ t)}} directly.",
            },
          ],
          hints: [
            "Compute the exponent {{λ t = 0.040 * 30.0 = 1.20}}.",
            "Evaluate {{A = 500 * e^(-1.20)}}.",
          ],
          solution: [
            "{{λ t = 0.040 * 30.0 = 1.20}}.",
            "{{A = 500 * e^(-1.20) = 500 * 0.3012 = 150.6 ≈ 151}} Bq.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "decay-law-hl",
          strategy: "Solve 0.20 = e^(−λt) using natural logarithms",
          question:
            "A radioactive sample has half-life {{T_½ = 12.0}} days. Calculate the time in days required for its activity to drop to {{20.0}}% of its initial value (to 3 significant figures).",
          answer: { type: "number", value: 27.9, tolerance: 0.3, display: "27.9 days" },
          hints: [
            "Set {{A / A_0 = 0.20 = e^(-λ t)}} where {{λ = ln(2) / 12.0}} day⁻¹.",
            "Take natural logs: {{t = T_½ * ln(5) / ln(2)}} — check that the answer sits between 2 and 3 half-lives (24–36 days).",
          ],
          solution: [
            "{{0.20 = e^(-λ t) => λ t = ln(5) = 1.6094}}.",
            "With {{λ = ln(2) / 12.0 = 0.05776}} day⁻¹, {{t = 1.6094 / 0.05776 = 27.86 ≈ 27.9}} days.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "decay-law-hl",
          strategy: "Extract λ = −gradient from ln A vs t, then compute T_½ = ln(2)/λ",
          question:
            "A straight-line graph of {{ln A}} (with *A* in Bq) against time *t* (in hours) passes through the points (0, 8.20) and (10.0, 5.70). Calculate the half-life of the isotope in hours to 3 significant figures.",
          answer: { type: "number", value: 2.77, tolerance: 0.04, display: "2.77 hours" },
          hints: [
            "Find the gradient of the line: {{(5.70 - 8.20) / (10.0 - 0) = -0.250}} h⁻¹.",
            "Since gradient = {{ -λ }}, set {{λ = 0.250}} h⁻¹ and compute {{T_½ = ln(2) / λ}}.",
          ],
          solution: [
            "Gradient = {{(5.70 - 8.20) / 10.0 = -0.250}} h⁻¹ ⇒ {{λ = 0.250}} h⁻¹.",
            "{{T_½ = ln(2) / 0.250 = 0.69315 / 0.250 = 2.77}} hours.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "decay-law-hl",
          strategy: "Compare discrete α lines with continuous β⁻ curve and apply conservation laws",
          question:
            "Contrast the kinetic energy spectra of α-particles and β⁻-particles emitted from decaying nuclei, and explain what each spectrum proves about nuclear physics.",
          marks: 4,
          hints: [
            "Describe the shape of the α kinetic energy spectrum (discrete spikes) and what it implies about nuclear energy levels.",
            "Describe the shape of the β⁻ kinetic energy spectrum (continuous up to E_max).",
            "Explain why energy and momentum conservation in a two-body decay cannot produce a continuous β⁻ spectrum, proving the antineutrino.",
          ],
          modelAnswer:
            "Emitted α-particles exhibit sharp, discrete kinetic energies (just like γ-ray photons), demonstrating that atomic nuclei exist only in discrete, quantized energy levels. By contrast, β⁻ electrons emerge with a continuous distribution of kinetic energies ranging from zero up to a fixed maximum E_max. If β⁻ decay involved only two outgoing bodies (daughter nucleus and electron), conservation of energy and momentum would force every electron to take one unique energy. The missing energy is carried away by a third, electrically neutral particle — the electron antineutrino (ν̄_e) — sharing total energy with the electron.",
          markScheme: [
            {
              point: "α-particles have sharp, discrete kinetic energies.",
              keywords: ["discrete", "sharp", "fixed"],
            },
            {
              point: "Discrete α energies prove nuclei possess quantized energy levels.",
              keywords: ["quantized", "energy levels", "nuclear levels"],
            },
            {
              point: "β⁻ particles have a continuous energy spectrum up to a maximum E_max.",
              keywords: ["continuous", "maximum", "range"],
            },
            {
              point: "Conservation of energy and momentum requires a third neutral particle (electron antineutrino) to carry the remaining energy.",
              keywords: ["antineutrino", "neutrino", "third", "conserve", "conservation"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant distinction between spectra." },
            { band: "1–2", marks: [1, 2], descriptor: "States discrete vs continuous shapes without linking clearly to quantized levels or conservation laws." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear contrast connecting discrete α energies to quantized nuclear levels and continuous β⁻ energies to the antineutrino via energy/momentum conservation." },
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "decay-law-hl",
          strategy: "Use λ = A / N for ultra-long-lived nuclides",
          question:
            "A pure sample of a long-lived radioisotope containing {{5.00 * 10^21}} nuclei has a measured activity of {{24.6}} Bq. Calculate its decay constant {{λ}} in s⁻¹ (give your answer in standard form to 3 s.f., e.g. 3.10 * 10^-19).",
          answer: {
            type: "number",
            value: 4.92e-21,
            tolerance: 1e-22,
            standardForm: true,
            display: "{{4.92 * 10^(-21)}}",
          },
          hints: [
            "Rearrange {{A = λ N}} to {{λ = A / N}}.",
            "Divide {{24.6}} s⁻¹ by {{5.00 * 10^21}}.",
          ],
          solution: [
            "{{λ = A / N = 24.6 / (5.00 * 10^21) = 4.92 * 10^(-21)}} s⁻¹.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Halve the 6-month total angular shift to get parallax angle p, then d = 1/p",
          question:
            "Over a 6-month period, a nearby star shifts by a **total angle** of {{0.160}} arcsec against distant background stars. Calculate its distance from Earth in parsecs.",
          answer: { type: "number", value: 12.5, tolerance: 0.1, display: "12.5 pc" },
          traps: [
            {
              spec: { type: "number", value: 6.25, tolerance: 0.1 },
              feedback: "Watch the factor of 2! The parallax angle *p* is **half** the total 6-month angular shift (1 AU baseline, not 2 AU).",
            },
          ],
          hints: [
            "Over 6 months Earth moves 2 AU across its orbit, so the parallax angle *p* is **half** of {{0.160}} arcsec.",
            "Compute {{d = 1 / p = 1 / 0.080}}.",
          ],
          solution: [
            "Parallax angle {{p = 0.160 / 2 = 0.080}} arcsec.",
            "Distance {{d = 1 / p = 1 / 0.080 = 12.5}} pc.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Apply b = L / (4πd²)",
          question:
            "A star of luminosity {{L = 4.00 * 10^27}} W lies at a distance {{d = 2.00 * 10^17}} m from Earth. Calculate its apparent brightness *b* in W m⁻² (give your answer in standard form to 3 s.f., e.g. 3.20 * 10^-10).",
          answer: {
            type: "number",
            value: 7.96e-9,
            tolerance: 1.5e-10,
            standardForm: true,
            display: "{{7.96 * 10^(-9)}}",
          },
          hints: [
            "Substitute into the inverse-square law {{b = L / (4 pi d^2)}}.",
            "Compute {{4 pi (2.00 * 10^17)^2 = 16 pi * 10^34 ≈ 5.027 * 10^35}} m² first.",
          ],
          solution: [
            "{{b = (4.00 * 10^27) / (4 pi * (2.00 * 10^17)^2) = (4.00 * 10^27) / (5.0265 * 10^35) = 7.96 * 10^(-9)}} W m⁻².",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Use ratio form L/L_☉ = (R/R_☉)²(T/T_☉)⁴",
          question:
            "Star S has surface temperature {{T_S = 2.00 T_☉}} and radius {{R_S = 3.00 R_☉}}. Calculate its luminosity as a multiple of the Sun's luminosity {{L_☉}}.",
          answer: { type: "number", value: 144 },
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "Raise the temperature ratio to the **fourth** power ({{2^4 = 16}}), not the first power!" },
            { spec: { type: "number", value: 36 }, feedback: "Raise temperature to the fourth power ({{2^4 = 16}}), not squared." },
          ],
          hints: [
            "Write {{L_S / L_☉ = (R_S / R_☉)^2 (T_S / T_☉)^4}}.",
            "Evaluate {{3^2 * 2^4 = 9 * 16}}.",
          ],
          solution: [
            "{{L_S / L_☉ = (3.00)^2 * (2.00)^4 = 9 * 16 = 144}}.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Rearrange Stefan–Boltzmann ratio for R/R_☉",
          question:
            "A red giant has luminosity {{L = 625 L_☉}} and surface temperature {{T = 0.50 T_☉}}. Calculate its radius as a multiple of the Sun's radius {{R_☉}}.",
          answer: { type: "number", value: 100 },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "You took {{sqrt(625) = 25}} — don't forget to divide by {{(0.50)^2 = 0.25}} (since {{R ∝ sqrt(L) / T^2}})!",
            },
          ],
          hints: [
            "From {{L / L_☉ = (R / R_☉)^2 (T / T_☉)^4}}, solve for {{R / R_☉ = sqrt(L / L_☉) / (T / T_☉)^2}}.",
            "Evaluate {{sqrt(625) / (0.50)^2 = 25 / 0.25}}.",
          ],
          solution: [
            "{{625 = (R / R_☉)^2 (0.50)^4 = (R / R_☉)^2 / 16}}.",
            "{{(R / R_☉)^2 = 10 000 => R / R_☉ = 100}}.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fusion-stars-hr",
          strategy: "Apply mass–luminosity relation L/L_☉ = (M/M_☉)^3.5",
          question:
            "A main-sequence star has mass {{M = 4.0 M_☉}}. Using {{L / L_☉ = (M / M_☉)^3.5}}, calculate its luminosity as a multiple of {{L_☉}}.",
          answer: { type: "number", value: 128, tolerance: 1 },
          hints: [
            "Rewrite {{4^3.5 = (2^2)^3.5 = 2^7}}.",
            "Or compute {{4^3 * sqrt(4) = 64 * 2}}.",
          ],
          solution: [
            "{{L / L_☉ = 4.0^3.5 = 4^3 * 4^0.5 = 64 * 2 = 128}}.",
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "fusion-stars-hr",
          strategy: "Compare fuel scaling (∝ M) with luminosity burn rate (∝ M^3.5)",
          question:
            "Using the mass–luminosity relation {{L ∝ M^3.5}}, explain why a high-mass blue O-type star has a dramatically shorter main-sequence lifetime than a low-mass red dwarf.",
          marks: 3,
          hints: [
            "How does the total amount of available hydrogen fuel depend on stellar mass M?",
            "How does the rate of energy consumption (luminosity L) scale with M?",
            "Divide fuel supply by burn rate to find how lifetime τ scales with M.",
          ],
          modelAnswer:
            "The total hydrogen fuel available for fusion is proportional to the star's mass (fuel ∝ M), while the rate at which it consumes fuel is given by its luminosity, which increases far more steeply as L ∝ M^3.5. Therefore, main-sequence lifetime scales as τ ∝ fuel / rate ∝ M / M^3.5 = M^(−2.5). Consequently, massive O-type stars exhaust their core hydrogen orders of magnitude faster than red dwarfs.",
          markScheme: [
            {
              point: "Available hydrogen fuel supply scales proportionally to mass M.",
              keywords: ["fuel", "proportional to", "mass"],
            },
            {
              point: "Energy burn rate (luminosity) scales much more rapidly as M^3.5.",
              keywords: ["burn", "consum", "rate", "3.5", "steeply"],
            },
            {
              point: "Lifetime scales as τ ∝ M / L ∝ M^(−2.5), so higher mass yields a much shorter lifetime.",
              keywords: ["-2.5", "−2.5", "m/l", "m / l", "faster", "exhaust"],
            },
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "fusion-stars-hr",
          strategy: "Chain parallax → brightness/luminosity → Wien's law → Stefan–Boltzmann",
          question:
            "Outline the sequence of measurements and physical laws astronomers use to determine the radius of a nearby star (within 50 pc) from Earth-based observations.",
          marks: 4,
          hints: [
            "Step 1: Find distance d from annual parallax angle p.",
            "Step 2: Combine d with apparent brightness b to obtain luminosity L.",
            "Step 3: Use the spectrum peak wavelength λ_max with Wien's law to find surface temperature T.",
            "Step 4: Solve Stefan–Boltzmann's law for radius R.",
          ],
          modelAnswer:
            "First, measure the star's parallax angle p (half its 6-month angular shift against distant background stars) in arcseconds to obtain distance d = 1/p in parsecs, then convert d to metres. Second, measure its apparent brightness b (W m⁻²) at Earth and calculate luminosity L = 4πd²b. Third, record its blackbody spectrum to locate peak wavelength λ_max and apply Wien's displacement law (λ_max T = 2.90 × 10⁻³ m K) to determine surface temperature T. Finally, substitute L and T into Stefan–Boltzmann's law (L = 4πR²σT⁴) to solve for radius R.",
          markScheme: [
            {
              point: "Measure parallax angle p to find distance d = 1/p (and convert pc to m).",
              keywords: ["parallax", "1/p", "parsecs"],
            },
            {
              point: "Combine apparent brightness b and distance d via b = L/(4πd²) to calculate luminosity L.",
              keywords: ["brightness", "4πd²", "4pid^2", "luminosity"],
            },
            {
              point: "Measure peak wavelength λ_max from spectrum and apply Wien's law to find surface temperature T.",
              keywords: ["wien", "peak wavelength", "λ_max", "temperature"],
            },
            {
              point: "Substitute L and T into Stefan–Boltzmann law L = 4πR²σT⁴ to find R.",
              keywords: ["stefan", "boltzmann", "σt⁴", "t^4"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No coherent observational method." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies one or two steps (e.g. parallax or Wien's law) without linking them to radius." },
            { band: "3–4", marks: [3, 4], descriptor: "Complete logical four-step chain linking parallax, apparent brightness, Wien's law, and Stefan–Boltzmann's law to stellar radius." },
          ],
        },
        {
          id: "e2-nuclear-stars-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "fusion-stars-hr",
          strategy: "Contrast evolutionary stages, final fusion elements, and degeneracy limits",
          question:
            "Compare and contrast the post-main-sequence evolution and final remnants of a {{1 M_☉}} star and a {{20 M_☉}} star, referring to their movement on the HR diagram and the forces stabilizing their remnants.",
          marks: 6,
          hints: [
            "Similarity: both leave the main sequence toward the upper-right (cooling and expanding) once core hydrogen runs out.",
            "1 M_☉ star: Red Giant → He fuses to C/O → Planetary Nebula → White Dwarf (bottom-left) supported by electron degeneracy pressure below the 1.4 M_☉ Chandrasekhar limit.",
            "20 M_☉ star: Red Supergiant (top-right) → fuses elements up to iron-56 → core-collapse Type II Supernova → Neutron Star (neutron degeneracy pressure) or Black Hole.",
          ],
          modelAnswer:
            "Both stars leave the main sequence toward the upper-right of the HR diagram once core hydrogen is exhausted, as their cores contract and their outer envelopes expand and cool. However, their subsequent evolution diverges sharply due to mass. The 1 M_☉ star ascends into a Red Giant, fuses helium into carbon and oxygen, and gently ejects its outer layers as a planetary nebula; its exposed hot core moves to the bottom-left as a cooling White Dwarf stabilized against gravity by electron degeneracy pressure (possible because its remnant core stays below the 1.4 M_☉ Chandrasekhar limit). By contrast, the 20 M_☉ star evolves horizontally near the top into a luminous Red Supergiant, fusing successively heavier shells all the way to iron-56. Because iron fusion is endothermic, its core collapses catastrophically in a Type II Supernova explosion, leaving an ultra-dense Neutron Star stabilized by neutron degeneracy pressure (up to ~2–3 M_☉, the Oppenheimer–Volkoff limit) or collapsing further into a Black Hole.",
          markScheme: [
            {
              point: "Similarity: both move up-right on the HR diagram (expanding and cooling) after core H exhaustion.",
              keywords: ["upper-right", "up-right", "expand", "cool", "both"],
            },
            {
              point: "1 M_☉ star becomes a Red Giant (fusing He to C/O) and sheds a planetary nebula.",
              keywords: ["red giant", "planetary nebula", "carbon"],
            },
            {
              point: "1 M_☉ remnant becomes a White Dwarf (bottom-left) stabilized by electron degeneracy pressure below the 1.4 M_☉ Chandrasekhar limit.",
              keywords: ["white dwarf", "electron degeneracy", "chandrasekhar", "1.4"],
            },
            {
              point: "20 M_☉ star becomes a Red Supergiant fusing elements up to iron-56.",
              keywords: ["supergiant", "iron-56", "fe-56", "iron"],
            },
            {
              point: "Core collapse triggers a Type II Supernova once exothermic fusion ends at iron.",
              keywords: ["supernova", "endothermic", "collapses"],
            },
            {
              point: "20 M_☉ remnant forms a Neutron Star (supported by neutron degeneracy pressure) or a Black Hole.",
              keywords: ["neutron star", "neutron degeneracy", "black hole"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant comparison." },
            { band: "1–2", marks: [1, 2], descriptor: "Names final remnants (white dwarf vs neutron star/black hole) with minimal evolutionary or HR detail." },
            { band: "3–4", marks: [3, 4], descriptor: "Outlines both tracks accurately on the HR diagram, omitting either iron fusion limit or degeneracy pressures." },
            { band: "5–6", marks: [5, 6], descriptor: "Thorough IB comparison covering shared initial expansion, HR positions, planetary nebula vs supernova, iron barrier, electron vs neutron degeneracy pressure, and mass limits." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "e2-nuclear-stars-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "binding-energy-decay",
      strategy: "Keep full 5 d.p. precision throughout mass defect calculation",
      question:
        "An oxygen-16 nucleus (¹⁶₈O) has nuclear mass {{15.99052}} u. Given {{m_p = 1.00728}} u, {{m_n = 1.00867}} u, and {{1 u = 931.5}} MeV c⁻², calculate its **binding energy per nucleon** in MeV to 3 significant figures.",
      answer: { type: "number", value: 7.98, tolerance: 0.04, display: "7.98 MeV" },
      traps: [
        {
          spec: { type: "number", value: 128, tolerance: 1 },
          feedback: "128 MeV is the *total* binding energy — remember to divide by A = 16 nucleons!",
        },
      ],
      hints: [
        "Oxygen-16 has 8 protons and 8 neutrons: compute {{8(1.00728 + 1.00867) = 16.12760}} u.",
        "Subtract {{15.99052}} u to obtain {{Δm = 0.13708}} u.",
        "Multiply by {{931.5}} MeV u⁻¹ and divide by 16.",
      ],
      solution: [
        "Separated nucleons mass = {{8(1.00728) + 8(1.00867) = 16.12760}} u.",
        "Mass defect {{Δm = 16.12760 - 15.99052 = 0.13708}} u.",
        "Total binding energy {{E_B = 0.13708 * 931.5 = 127.69}} MeV.",
        "Binding energy per nucleon = {{127.69 / 16 = 7.98}} MeV.",
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "decay-law-hl",
      strategy: "Apply radiocarbon dating t = T_½ ln(A₀/A) / ln(2)",
      question:
        "An ancient wooden beam has a carbon-14 ({{T_½ = 5730}} years) activity per gram equal to {{35.0}}% of that in freshly cut wood. Calculate the age of the wooden beam in years to 3 significant figures.",
      answer: { type: "number", value: 8680, tolerance: 80, display: "8680 years" },
      hints: [
        "Write {{A / A_0 = 0.350 = e^(-λ t)}} with {{λ = ln(2) / 5730}} yr⁻¹.",
        "Take natural logarithms: {{t = 5730 * ln(1 / 0.350) / ln(2)}}.",
        "Check reasonableness: 35% lies between 50% (5730 yr) and 25% (11 460 yr).",
      ],
      solution: [
        "{{0.350 = e^(-λ t) => λ t = -ln(0.350) = 1.0498}}.",
        "{{λ = ln(2) / 5730 = 1.2097 * 10^(-4)}} yr⁻¹.",
        "{{t = 1.0498 / (1.2097 * 10^(-4)) = 8678 ≈ 8680}} years.",
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "decay-law-hl",
      strategy: "Compare both initial activities via A = (ln 2 / T_½) N before decaying for 6 h",
      question:
        "At {{t = 0}}, a source contains {{4.00 * 10^14}} nuclei of isotope X ({{T_½ = 2.00}} h) and {{1.20 * 10^15}} nuclei of isotope Y ({{T_½ = 6.00}} h). Calculate the activity ratio {{A_X / A_Y}} after {{6.00}} hours (give your answer as a decimal).",
      answer: { type: "number", value: 0.25, tolerance: 0.005 },
      traps: [
        {
          spec: { type: "number", value: 0.0833, tolerance: 0.002 },
          feedback: "You compared surviving *nuclei* instead of *activities* — remember {{A = λ N}} and {{λ_X = 3 λ_Y}}!",
        },
      ],
      hints: [
        "First compare their *initial* activities: {{A_(X,0) / A_(Y,0) = (λ_X N_(X,0)) / (λ_Y N_(Y,0)) = (T_Y / T_X)(N_(X,0) / N_(Y,0))}}.",
        "Notice {{3 * (4.00 * 10^14 / 1.20 * 10^15) = 1.00}} — both isotopes start with identical initial activity!",
        "After 6.00 hours, X undergoes 3 half-lives (factor 1/8) while Y undergoes 1 half-life (factor 1/2).",
      ],
      solution: [
        "Initial activity ratio: {{A_(X,0) / A_(Y,0) = (6.00 / 2.00) * (4.00 * 10^14 / 1.20 * 10^15) = 3 * (1/3) = 1}}.",
        "After 6.00 h: X has undergone {{6 / 2 = 3}} half-lives ({{A_X = A_(X,0) / 8}}); Y has undergone {{6 / 6 = 1}} half-life ({{A_Y = A_(Y,0) / 2}}).",
        "Therefore {{A_X / A_Y = (1/8) / (1/2) = 1/4 = 0.25}}.",
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "nuclear-fission",
      strategy: "Total energy → number of fissions → mass of U-235 nuclei fissioned",
      question:
        "A naval reactor runs continuously at a thermal power of {{150}} MW for {{100}} days. Each ²³⁵U fission releases {{3.20 * 10^(-11)}} J. Using {{m(U-235) = 235 * 1.661 * 10^(-27)}} kg, calculate the total mass of ²³⁵U nuclei that undergo fission in kg (to 3 significant figures).",
      answer: { type: "number", value: 15.8, tolerance: 0.2, display: "15.8 kg" },
      traps: [
        {
          spec: { type: "number", value: 0.0144, tolerance: 0.0005 },
          feedback: "0.0144 kg (14.4 g) is the *mass defect* converted into energy ({{E / c^2}}), NOT the total mass of U-235 atoms split!",
        },
      ],
      hints: [
        "Find total thermal energy over 100 days: {{E = (1.50 * 10^8)(100 * 86400) = 1.296 * 10^15}} J.",
        "Divide *E* by {{3.20 * 10^(-11)}} J to get the number of U-235 nuclei fissioned.",
        "Multiply that number of nuclei by the mass of one U-235 nucleus ({{3.903 * 10^(-25)}} kg).",
      ],
      solution: [
        "Total energy {{E = P t = (1.50 * 10^8)(100 * 86400) = 1.296 * 10^15}} J.",
        "Number of fissions {{N = (1.296 * 10^15) / (3.20 * 10^(-11)) = 4.05 * 10^25}}.",
        "Mass of U-235 consumed = {{(4.05 * 10^25) * 235 * 1.661 * 10^(-27) = 15.8}} kg.",
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "fusion-stars-hr",
      strategy: "Combine parallax, brightness, Wien's law and Stefan–Boltzmann (4π cancels!)",
      question:
        "A star has parallax angle {{p = 0.0500}} arcsec ({{1 pc = 3.09 * 10^16}} m), apparent brightness {{b = 1.28 * 10^(-8)}} W m⁻², and peak wavelength {{λ_max = 362.5}} nm. Using {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴ and {{λ_max T = 2.90 * 10^(-3)}} m K, calculate the star's radius *R* in metres (give your answer in standard form to 3 s.f., e.g. 2.15 * 10^8).",
      answer: {
        type: "number",
        value: 4.59e9,
        tolerance: 8e7,
        standardForm: true,
        display: "{{4.59 * 10^9}}",
      },
      hints: [
        "Find {{d = 1 / 0.0500 = 20.0}} pc = {{6.18 * 10^17}} m, and {{T = (2.90 * 10^(-3)) / (3.625 * 10^(-7)) = 8000}} K.",
        "Combine {{L = 4 pi d^2 b}} and {{L = 4 pi R^2 σ T^4}} — notice {{4 pi}} cancels cleanly, giving {{R = d sqrt(b / (σ T^4))}}!",
        "Evaluate {{R = (6.18 * 10^17) sqrt((1.28 * 10^(-8)) / (5.67 * 10^(-8) * 8000^4))}}.",
      ],
      solution: [
        "Distance {{d = 1 / 0.0500 = 20.0}} pc = {{20.0 * 3.09 * 10^16 = 6.18 * 10^17}} m.",
        "Surface temperature {{T = (2.90 * 10^(-3)) / (3.625 * 10^(-7)) = 8000}} K.",
        "Equating {{4 pi d^2 b = 4 pi R^2 σ T^4}} gives {{R = d sqrt(b / (σ T^4))}}.",
        "{{R = (6.18 * 10^17) * sqrt((1.28 * 10^(-8)) / (5.67 * 10^(-8) * 4.096 * 10^15)) = 4.59 * 10^9}} m (~6.6 {{R_☉}}).",
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Estimate",
      guideRef: "fusion-stars-hr",
      strategy: "E_total = (0.0070 × 0.10 M_☉) c², then lifetime t = E_total / L_☉",
      question:
        "The Sun ({{M_☉ = 1.99 * 10^30}} kg, {{L_☉ = 3.83 * 10^26}} W) fuses {{10}}% of its mass during its main-sequence lifetime, converting {{0.70}}% of the fused hydrogen mass directly into radiant energy. Using {{c = 3.00 * 10^8}} m s⁻¹ and {{1 yr = 3.16 * 10^7}} s, estimate the Sun's main-sequence lifetime in **billions of years** (to 3 significant figures).",
      answer: { type: "number", value: 10.4, tolerance: 0.2 },
      hints: [
        "Find the mass actually converted to energy: {{Δm = 0.0070 * 0.10 * 1.99 * 10^30 = 1.393 * 10^27}} kg.",
        "Total energy radiated {{E = Δm c^2 = 1.254 * 10^44}} J.",
        "Divide *E* by {{L_☉ = 3.83 * 10^26}} W to get seconds, then divide by {{3.16 * 10^7}} s yr⁻¹ and by {{10^9}}.",
      ],
      solution: [
        "Mass converted to energy {{Δm = 0.0070 * 0.10 * 1.99 * 10^30 = 1.393 * 10^27}} kg.",
        "Total energy released {{E = Δm c^2 = (1.393 * 10^27)(9.00 * 10^16) = 1.254 * 10^44}} J.",
        "Lifetime in seconds {{t = (1.254 * 10^44) / (3.83 * 10^26) = 3.273 * 10^17}} s.",
        "In years: {{(3.273 * 10^17) / (3.16 * 10^7) = 1.036 * 10^10}} yr ≈ **10.4** billion years.",
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "decay-law-hl",
      strategy: "Separate variables, integrate from N₀ to N, derive T_½, then contrast lab methods",
      question:
        "Starting from the differential decay law {{dN / dt = -λ N}}, derive both {{N = N_0 e^(-λ t)}} and {{T_½ = ln(2) / λ}}, and explain why measuring the half-life of uranium-238 (~{{4.5 * 10^9}} yr) requires a different experimental method from measuring iodine-131 (~8 days).",
      marks: 5,
      hints: [
        "Separate variables: {{dN / N = -λ dt}} and integrate from {{(0, N_0)}} to {{(t, N)}}.",
        "Substitute {{N = N_0 / 2}} at {{t = T_½}} to solve for {{T_½}}.",
        "For iodine-131, activity drops measurably over days (plot ln A vs t); for U-238, activity is constant over human lifetimes so weigh a pure sample to get N and use λ = A/N.",
      ],
      modelAnswer:
        "Separating variables gives dN/N = −λ dt. Integrating from N₀ at t = 0 to N at time t yields ln(N/N₀) = −λt, and exponentiating both sides produces N = N₀ e^(−λt). Setting N = ½N₀ when t = T_½ gives ½ = e^(−λT_½), so taking natural logs yields λT_½ = ln 2 and hence T_½ = (ln 2)/λ. For short-lived iodine-131, activity declines appreciably over days, allowing a linearized plot of ln A against time whose negative slope directly determines λ. By contrast, U-238's activity stays virtually unchanging over human timescales, so physicists instead determine the exact number of atoms N from the mass of a pure sample (via molar mass and Avogadro's constant), measure its current activity A, and compute λ = A/N and T_½ = (N ln 2)/A.",
      markScheme: [
        {
          point: "Separates variables (dN/N = −λ dt) and integrates to ln(N/N₀) = −λt.",
          keywords: ["separat", "integrat", "ln(n/n", "dn/n"],
        },
        {
          point: "Exponentiates cleanly to obtain N = N₀ e^(−λt).",
          keywords: ["exponentiat", "e^(-λt)", "e^(-λ t)", "e^-λt"],
        },
        {
          point: "Substitutes N = ½N₀ at t = T_½ to obtain T_½ = (ln 2)/λ.",
          keywords: ["½n", "0.5", "ln 2", "ln(2)"],
        },
        {
          point: "Short-lived isotope (I-131): measure declining activity over time and take gradient of ln A vs t.",
          keywords: ["ln a", "gradient", "slope", "declin"],
        },
        {
          point: "Ultra-long-lived isotope (U-238): activity appears constant, so weigh pure sample for N (via Avogadro) and use λ = A/N.",
          keywords: ["avogadro", "molar mass", "weigh", "a/n", "unchanging", "constant"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid derivation or experimental distinction." },
        { band: "1–2", marks: [1, 2], descriptor: "Partial derivation or identifies one measurement approach without clear mathematical steps." },
        { band: "3–4", marks: [3, 4], descriptor: "Correct calculus derivation of both relations with a partial experimental comparison." },
        { band: "5", marks: [5, 5], descriptor: "Rigorous calculus derivation of both laws plus complete practical contrast between ln A vs t fitting and the A = λN mass-activity method." },
      ],
    },
    {
      id: "e2-nuclear-stars-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "fusion-stars-hr",
      strategy: "Unite the binding-energy curve (E.3) with stellar nucleosynthesis and supernovae (E.5)",
      question:
        "Using the binding energy per nucleon curve, explain why massive stars release energy by fusing successively heavier elements up to iron-56, why hydrostatic equilibrium fails abruptly once an iron core forms, and how elements heavier than iron (such as gold and uranium) are produced and distributed through space.",
      marks: 5,
      hints: [
        "Explain why every fusion stage up to A = 56 releases energy (climbing upward on the E_B/A curve).",
        "Explain why fusing beyond iron-56 absorbs energy (endothermic) and removes outward radiation pressure.",
        "Describe core collapse → Type II supernova shockwave / neutron capture (and neutron star mergers) forging heavy nuclei and dispersing them into interstellar gas clouds.",
      ],
      modelAnswer:
        "From hydrogen up to iron-56, the binding energy per nucleon rises steadily toward its peak (~8.8 MeV per nucleon). Consequently, every successive core fusion stage (H → He → C → O → Si → Fe) increases binding energy per nucleon, converting mass defect into radiant energy that sustains outward radiation pressure against gravity. Once an iron-56 core accumulates, any further fusion moves past the peak to lower binding energy per nucleon and is strictly endothermic (absorbs energy). With outward radiation pressure suddenly extinguished, gravity crushes the core in less than a second, triggering a violent Type II supernova rebound. The enormous surplus energy and intense neutron flux during the supernova (and subsequent neutron-star mergers) drive endothermic neutron-capture reactions that synthesize elements heavier than iron — including gold and uranium — and blast them across the galaxy to seed future planets and stars.",
      markScheme: [
        {
          point: "Up to Fe-56, binding energy per nucleon increases with A, so each fusion stage is exothermic.",
          keywords: ["rises", "increases", "peak", "exothermic"],
        },
        {
          point: "Released energy supplies outward radiation pressure balancing inward gravity.",
          keywords: ["radiation pressure", "gravity", "outward"],
        },
        {
          point: "Fusing past Fe-56 moves downward to lower E_B/A and is endothermic (absorbs energy).",
          keywords: ["endothermic", "absorbs", "lower"],
        },
        {
          point: "Loss of outward pressure triggers rapid gravitational core collapse and a Type II supernova.",
          keywords: ["core collapse", "crushes", "supernova"],
        },
        {
          point: "Supernova energy / intense neutron flux (or neutron-star mergers) forges elements heavier than iron and disperses them into interstellar space.",
          keywords: ["neutron-capture", "neutron flux", "neutron-star", "dispers", "blast", "synthesiz"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant physics linking nuclear binding energy to stellar nucleosynthesis." },
        { band: "1–2", marks: [1, 2], descriptor: "States that fusion stops at iron and a supernova occurs without binding-energy justification." },
        { band: "3–4", marks: [3, 4], descriptor: "Links the Fe-56 peak to endothermic fusion and core collapse, with brief mention of heavy-element production." },
        { band: "5", marks: [5, 5], descriptor: "Full synthesis uniting the E_B/A curve, radiation pressure failure, Type II supernova core collapse, and rapid neutron-capture synthesis/dispersal of heavy elements." },
      ],
    },
  ],
};
