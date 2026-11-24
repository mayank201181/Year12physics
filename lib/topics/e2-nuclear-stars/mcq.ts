import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: Binding Energy, Radioactive Decay, Fission & Stars (Core Mix)
  // answerIndex spread: 0×4, 1×4, 2×4, 3×3
  // ===========================================================================
  {
    id: "e2-nuclear-stars-m1",
    title: "Paper M1 · Core Concepts & Calculations",
    level: "SL",
    questions: [
      {
        id: "e2-nuclear-stars-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "binding-energy-decay",
        strategy: "Distinguish binding energy from kinetic or ionization energy",
        question: "Which statement correctly defines the **nuclear binding energy** of a nucleus?",
        options: [
          "The minimum work needed to completely separate a nucleus into its individual nucleons at infinity.",
          "The total kinetic energy possessed by all protons and neutrons moving inside a stable atomic nucleus.",
          "The minimum thermal energy required to strip all orbiting atomic electrons away from a neutral atom.",
          "The total electrostatic potential energy stored between neighbouring protons inside a stable nucleus.",
        ],
        answerIndex: 0,
        hints: [
          "Think about assembling a nucleus from free nucleons: mass disappears and energy is released.",
          "To reverse that assembly, you must supply energy to pull every nucleon far apart.",
        ],
        explanation:
          "Nuclear binding energy {{E_B = Δm c^2}} is the minimum work required to completely separate a nucleus into free protons and neutrons at infinity (equivalently, the energy released when the nucleus forms). Stripping electrons is atomic ionization energy, which is millions of times smaller.",
      },
      {
        id: "e2-nuclear-stars-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "binding-energy-decay",
        strategy: "Conserve nucleon number A, charge Z and lepton number",
        question: "Carbon-14 (¹⁴₆C) undergoes β⁻ decay. Which set of decay products is correct?",
        options: [
          "¹⁴₅B + e⁻ + ν̄_e",
          "¹⁴₇N + e⁻ + ν̄_e",
          "¹⁴₇N + e⁻ + ν_e",
          "¹⁰₄Be + e⁻ + ν̄_e",
        ],
        answerIndex: 1,
        hints: [
          "In β⁻ decay, a neutron converts into a proton inside the nucleus, so A stays constant while Z increases by 1.",
          "To conserve electron lepton number (0 before decay, +1 for the electron), the neutral particle must have lepton number −1.",
        ],
        explanation:
          "In β⁻ decay, a neutron turns into a proton ({{n -> p + e^- +}} ν̄_e), so A stays 14 and Z rises from 6 to 7 (nitrogen-14). An electron **antineutrino** (ν̄_e), not a neutrino (ν_e), is emitted to conserve lepton number.",
      },
      {
        id: "e2-nuclear-stars-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "binding-energy-decay",
        strategy: "Convert mass defect to MeV then divide by nucleon number A",
        question:
          "A nuclide with nucleon number {{A = 16}} has a mass defect of {{Δm = 0.120}} u. Using {{1 u = 931.5}} MeV c⁻², what is its **binding energy per nucleon**?",
        options: [
          "{{5.59}} MeV",
          "{{14.0}} MeV",
          "{{6.99}} MeV",
          "{{112}} MeV",
        ],
        answerIndex: 2,
        hints: [
          "First find the total binding energy {{E_B = Δm * 931.5}} MeV.",
          "Remember the question asks for binding energy **per nucleon**, so divide {{E_B}} by {{A = 16}}.",
        ],
        explanation:
          "Total binding energy is {{E_B = 0.120 * 931.5 = 111.78}} MeV. Dividing by {{A = 16}} nucleons gives {{111.78 / 16 = 6.99}} MeV nucleon⁻¹. Stopping at 112 MeV forgets to divide by A, and 14.0 MeV divides by Z = 8 instead of A = 16.",
      },
      {
        id: "e2-nuclear-stars-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "binding-energy-decay",
        strategy: "Subtract background count rate before counting half-lives",
        question:
          "A GM counter near a radioactive sample records {{260}} counts min⁻¹ at {{t = 0}} and {{50}} counts min⁻¹ after {{18}} hours. The constant background count rate is {{20}} counts min⁻¹. What is the half-life of the sample?",
        options: [
          "{{4.5}} hours",
          "{{7.5}} hours",
          "{{9.0}} hours",
          "{{6.0}} hours",
        ],
        answerIndex: 3,
        hints: [
          "Subtract the 20 counts min⁻¹ background from BOTH readings before comparing them.",
          "How many halvings take the corrected count rate from 240 down to 30?",
        ],
        explanation:
          "Subtracting background gives corrected rates of {{260 - 20 = 240}} min⁻¹ and {{50 - 20 = 30}} min⁻¹. Since {{30 / 240 = 1/8 = (1/2)^3}}, exactly 3 half-lives elapsed in 18 hours, so {{T_½ = 18 / 3 = 6.0}} hours. Dividing 50/260 without removing background gives the wrong fraction.",
      },
      {
        id: "e2-nuclear-stars-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "binding-energy-decay",
        strategy: "Compare range of strong nuclear vs electrostatic force",
        question: "Why do heavy stable nuclei contain significantly more neutrons than protons ({{N > Z}})?",
        options: [
          "Extra neutrons increase short-range strong nuclear attraction without adding long-range electrostatic repulsion.",
          "Extra neutrons cancel out the positive charge of the protons so the total nuclear charge becomes zero.",
          "Extra neutrons extend the effective range of the strong nuclear force so it acts across the entire nucleus.",
          "Extra neutrons slow down orbiting atomic electrons so they cannot be captured by inner nuclear protons.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the range of the electrostatic force between protons with the range of the strong nuclear force.",
          "What does adding a neutral neutron contribute to each of those two forces?",
        ],
        explanation:
          "Electrostatic repulsion acts across the entire nucleus (every proton repels every other proton), whereas the strong nuclear force only acts between immediate neighbours (~2–3 fm). Adding neutrons boosts local strong-force binding and proton separation without adding electrostatic repulsion.",
      },
      {
        id: "e2-nuclear-stars-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "decay-law-hl",
        strategy: "Convert half-life to seconds before using λ = ln(2)/T_½",
        question: "A radioisotope has a half-life of {{10.0}} minutes. What is its decay constant {{λ}} in s⁻¹?",
        options: [
          "{{6.93 * 10^(-2)}} s⁻¹",
          "{{1.16 * 10^(-3)}} s⁻¹",
          "{{1.67 * 10^(-3)}} s⁻¹",
          "{{8.33 * 10^(-4)}} s⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "First convert 10.0 minutes into seconds: {{T_½ = 10.0 * 60 = 600}} s.",
          "Use the HL relation {{λ = ln(2) / T_½}} with {{ln(2) ≈ 0.693}}.",
        ],
        explanation:
          "Converting to seconds gives {{T_½ = 600}} s, so {{λ = ln(2) / 600 = 0.69315 / 600 = 1.16 * 10^(-3)}} s⁻¹. Using {{6.93 * 10^(-2)}} forgets to convert minutes to seconds (that is min⁻¹), while {{1.67 * 10^(-3)}} uses {{1 / T_½}} instead of {{ln(2) / T_½}}.",
      },
      {
        id: "e2-nuclear-stars-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "decay-law-hl",
        strategy: "Match ln A = ln A₀ − λt to y = c + mx",
        question:
          "A graph of {{ln(A)}} (with *A* in Bq) against time *t* (in s) for a pure radioisotope is a straight line with y-intercept {{5.0}} and gradient {{ -0.025}} s⁻¹. What are the initial activity {{A_0}} and decay constant {{λ}}?",
        options: [
          "{{A_0 = 5.0}} Bq and {{λ = 0.025}} s⁻¹",
          "{{A_0 = 10^5}} Bq and {{λ = -0.025}} s⁻¹",
          "{{A_0 = e^5}} Bq and {{λ = 0.025}} s⁻¹",
          "{{A_0 = e^5}} Bq and {{λ = 40}} s⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Take natural logarithms of {{A = A_0 e^(-λ t)}} to get {{ln A = ln A_0 - λ t}}.",
          "Match the intercept to {{ln A_0}} (base *e*, not base 10) and note that {{λ}} is always positive.",
        ],
        explanation:
          "From {{ln A = ln A_0 - λ t}}, the y-intercept is {{ln A_0 = 5.0}}, so {{A_0 = e^5}} Bq (~148 Bq). The gradient is {{ -λ = -0.025}} s⁻¹, giving {{λ = +0.025}} s⁻¹. Taking the reciprocal (40) confuses {{λ}} with the mean lifetime {{1 / λ}}.",
      },
      {
        id: "e2-nuclear-stars-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "decay-law-hl",
        strategy: "Connect continuous β-energy distribution to three-body conservation",
        question: "What experimental observation led Wolfgang Pauli to hypothesize the existence of the neutrino in β⁻ decay?",
        options: [
          "Emitted β⁻ electrons appear only at one sharp energy, proving the existence of discrete nuclear energy shells.",
          "Emitted β⁻ electrons travel faster than the speed of light in vacuum, violating the postulates of relativity.",
          "Emitted β⁻ electrons carry a positive electric charge, requiring a negatively charged neutral particle for balance.",
          "Emitted β⁻ electrons show a continuous energy spectrum up to a maximum, requiring a third particle to conserve energy.",
        ],
        answerIndex: 3,
        hints: [
          "In a two-body decay (daughter + electron), energy and momentum conservation would force every electron to have the exact same kinetic energy.",
          "What shape does the measured β⁻ kinetic energy distribution actually have?",
        ],
        explanation:
          "Unlike discrete α-particle energies, β⁻ electrons emerge with a **continuous** spectrum of kinetic energies from 0 up to {{E_max}}. A third, nearly massless neutral particle (the electron antineutrino ν̄_e) carries away the remaining energy and momentum so conservation laws hold.",
      },
      {
        id: "e2-nuclear-stars-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "nuclear-fission",
        strategy: "Separate moderator (slows) from control rods (absorbs)",
        question: "What is the primary function of the **moderator** in a thermal nuclear fission reactor?",
        options: [
          "Slows fast fission neutrons to thermal speeds via elastic collisions so U-235 can capture them.",
          "Absorbs excess thermal neutrons so the fission chain reaction stays steady or shuts down safely.",
          "Transfers thermal energy from the radioactive primary core to boil secondary water into steam.",
          "Shields technicians outside the reactor vessel from penetrating gamma radiation and stray neutrons.",
        ],
        answerIndex: 0,
        hints: [
          "Remember: Moderator Makes neutrons Mellow (slow); Control rods Catch (absorb) neutrons.",
          "Does U-235 capture fast (~2 MeV) neutrons or slow thermal (~0.025 eV) neutrons more readily?",
        ],
        explanation:
          "The moderator (e.g. water or graphite) slows fast fission neutrons down to thermal speeds through elastic collisions with light nuclei so they have a high probability of inducing fission in ²³⁵U. Absorbing excess neutrons is the job of the **control rods**.",
      },
      {
        id: "e2-nuclear-stars-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "nuclear-fission",
        strategy: "Balance total A (top) and Z (bottom) including all neutrons",
        question:
          "A uranium-235 nucleus undergoes induced fission according to: ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ᴬ_Z Kr + 3 ¹₀n. What are the values of *A* and *Z* for the krypton nucleus?",
        options: [
          "{{A = 92}}, {{Z = 36}}",
          "{{A = 89}}, {{Z = 36}}",
          "{{A = 89}}, {{Z = 38}}",
          "{{A = 88}}, {{Z = 36}}",
        ],
        answerIndex: 1,
        hints: [
          "Don't forget the incident neutron on the left: total A on the left is {{235 + 1 = 236}}.",
          "On the right, three emitted neutrons contribute +3 to A and 0 to Z.",
        ],
        explanation:
          "Nucleon conservation: {{235 + 1 = 144 + A + 3 => A = 236 - 147 = 89}}. Charge conservation: {{92 + 0 = 56 + Z + 0 => Z = 36}}. Getting 92 forgets the 3 emitted neutrons, and getting 88 forgets the incident neutron on the left.",
      },
      {
        id: "e2-nuclear-stars-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "nuclear-fission",
        strategy: "Multiply binding energy per nucleon by A before subtracting",
        question:
          "A heavy nucleus ({{A = 240}}, binding energy per nucleon {{7.6}} MeV) splits into two identical fragments (each {{A = 120}}, binding energy per nucleon {{8.5}} MeV). How much energy is released in this fission?",
        options: [
          "{{0.90}} MeV",
          "{{108}} MeV",
          "{{216}} MeV",
          "{{432}} MeV",
        ],
        answerIndex: 2,
        hints: [
          "Find the *increase* in binding energy per nucleon: {{8.5 - 7.6 = 0.9}} MeV per nucleon.",
          "Multiply that change per nucleon by the total number of nucleons ({{240}}).",
        ],
        explanation:
          "Total product BE = {{2 * 120 * 8.5 = 2040}} MeV; reactant BE = {{240 * 7.6 = 1824}} MeV. Energy released = {{2040 - 1824 = 216}} MeV (equivalently {{240 * 0.9 = 216}} MeV). Obtaining 108 MeV forgets there are *two* fragments of 120 nucleons each.",
      },
      {
        id: "e2-nuclear-stars-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "fusion-stars-hr",
        strategy: "Apply d(pc) = 1 / p(arcsec)",
        question: "A nearby star has an annual parallax angle of {{0.040}} arcseconds. What is its distance from Earth?",
        options: [
          "{{0.040}} pc",
          "{{4.0}} pc",
          "{{12.5}} pc",
          "{{25}} pc",
        ],
        answerIndex: 3,
        hints: [
          "Distance in parsecs is the reciprocal of parallax angle in arcseconds: {{d = 1 / p}}.",
        ],
        explanation:
          "Using {{d = 1 / p = 1 / 0.040 = 25}} pc. Smaller parallax angles correspond to *greater* distances from Earth.",
      },
      {
        id: "e2-nuclear-stars-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "fusion-stars-hr",
        strategy: "Identify the two opposing forces in hydrostatic equilibrium",
        question: "What maintains a main-sequence star like the Sun in stable **hydrostatic equilibrium** for billions of years?",
        options: [
          "Inward gravitational attraction balanced by outward radiation and thermal gas pressure from core fusion.",
          "Inward electrostatic attraction between protons balanced by outward strong nuclear repulsion in the core.",
          "Inward electron degeneracy pressure balanced by outward centrifugal force from rapid stellar rotation.",
          "Inward radiation pressure from nearby galaxies balanced by outward magnetic pressure from stellar spots.",
        ],
        answerIndex: 0,
        hints: [
          "What force tries to crush a massive ball of gas inward?",
          "What pushes outward while hydrogen fuses into helium in the core?",
        ],
        explanation:
          "During the main sequence, inward gravitational attraction is exactly balanced by outward radiation pressure and thermal gas pressure produced by nuclear fusion in the core. Electron degeneracy pressure supports white dwarfs only after fusion ceases.",
      },
      {
        id: "e2-nuclear-stars-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "fusion-stars-hr",
        strategy: "Use Stefan–Boltzmann ratio L₁/L₂ = (R₁/R₂)²(T₁/T₂)⁴",
        question:
          "Star P has twice the radius ({{R_P = 2 R_Q}}) and half the surface temperature ({{T_P = (1/2) T_Q}}) of Star Q. What is the luminosity ratio {{L_P / L_Q}}?",
        options: [
          "{{0.125}}",
          "{{0.25}}",
          "{{0.50}}",
          "{{4.0}}",
        ],
        answerIndex: 1,
        hints: [
          "Write the ratio form of Stefan–Boltzmann's law: {{L_P / L_Q = (R_P / R_Q)^2 (T_P / T_Q)^4}}.",
          "Square the radius factor (2) and raise the temperature factor (1/2) to the **fourth** power.",
        ],
        explanation:
          "{{L_P / L_Q = 2^2 * (1/2)^4 = 4 * (1/16) = 1/4 = 0.25}}. Because luminosity scales with {{T^4}}, halving temperature slashes luminosity by a factor of 16, outweighing the 4× boost from doubling radius.",
      },
      {
        id: "e2-nuclear-stars-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "fusion-stars-hr",
        strategy: "Recall inverted HR temperature axis and constant-radius diagonals",
        question:
          "Compared to the Sun, a typical white dwarf has a much higher surface temperature and much lower luminosity. Where does it sit on an HR diagram, and how does its radius compare with the Sun's?",
        options: [
          "Bottom-right region, with a radius much smaller than the Sun.",
          "Top-left region, with a radius much larger than the Sun.",
          "Bottom-left region, with a radius much smaller than the Sun.",
          "Top-right region, with a radius much larger than the Sun.",
        ],
        answerIndex: 2,
        hints: [
          "Remember that surface temperature on an HR diagram increases to the **left**!",
          "Low luminosity sits near the bottom; from {{L ∝ R^2 T^4}}, high T and tiny L demand a tiny radius R.",
        ],
        explanation:
          "Because the HR horizontal axis runs from hot (left) to cool (right), a hot dim white dwarf lies in the **bottom-left** region. Since {{L = 4 pi R^2 σ T^4}}, emitting very little power at a very high temperature means its surface area (and radius) must be tiny (~0.01 {{R_☉}}).",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Stability, Decay Chains, Reactor Control & Stellar Physics
  // answerIndex spread: 0×3, 1×4, 2×4, 3×4
  // ===========================================================================
  {
    id: "e2-nuclear-stars-m2",
    title: "Paper M2 · Nuclear Stability, Reactors & Stars",
    level: "SL",
    questions: [
      {
        id: "e2-nuclear-stars-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "binding-energy-decay",
        strategy: "Compare binding energy per nucleon, not total binding energy",
        question:
          "Nucleus X has {{A = 12}} and total binding energy {{92.2}} MeV; nucleus Y has {{A = 56}} and total binding energy {{492.3}} MeV. Which nucleus is more stable, and why?",
        options: [
          "Nucleus X, because a smaller nucleon number always implies fewer repulsive proton pairs.",
          "Nucleus Y, because it has the greater binding energy per nucleon (8.79 MeV vs 7.68 MeV).",
          "Nucleus X, because it requires less total energy to separate completely into free nucleons.",
          "Nucleus Y, because a greater nucleon number always produces higher binding energy per nucleon.",
        ],
        answerIndex: 1,
        hints: [
          "Nuclear stability is determined by binding energy **per nucleon** ({{E_B / A}}), not total {{E_B}}.",
          "Divide 92.2 by 12 and 492.3 by 56 to compare.",
        ],
        explanation:
          "{{E_B / A}} is {{92.2 / 12 = 7.68}} MeV for X and {{492.3 / 56 = 8.79}} MeV for Y (⁵⁶Fe). Higher binding energy per nucleon means greater stability. Note that greater A does *not* always mean higher {{E_B / A}} (above A ≈ 62 it decreases).",
      },
      {
        id: "e2-nuclear-stars-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "binding-energy-decay",
        strategy: "Use ΔA to find α count first, then adjust Z with β⁻",
        question:
          "Uranium-238 (²³⁸₉₂U) decays to uranium-234 (²³⁴₉₂U) through a short sequence of α and β⁻ decays. Which particles are emitted in total?",
        options: [
          "One alpha particle and one beta-minus particle.",
          "Two alpha particles and two beta-minus particles.",
          "One alpha particle and two beta-minus particles.",
          "One alpha particle and two beta-plus particles.",
        ],
        answerIndex: 2,
        hints: [
          "Only α decay changes the nucleon number A (each α reduces A by 4).",
          "After subtracting the α decay's ΔZ = −2, how many β⁻ decays (each ΔZ = +1) return Z to 92?",
        ],
        explanation:
          "Since A drops by {{238 - 234 = 4}}, exactly **one α-particle** is emitted, lowering Z from 92 to 90. Returning Z from 90 back to 92 requires **two β⁻ decays** (each increases Z by +1 while leaving A unchanged).",
      },
      {
        id: "e2-nuclear-stars-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "binding-energy-decay",
        strategy: "Match absorbers: paper (α), mm Al (β), thick Pb (γ)",
        question:
          "A radioactive sample sits in front of a GM tube. Inserting thin paper produces **no change** in count rate; inserting {{3}} mm of aluminium causes a large drop; inserting {{5}} cm of lead reduces the remaining count rate further. What radiations does the sample emit?",
        options: [
          "Alpha and beta radiation only.",
          "Alpha and gamma radiation only.",
          "Beta radiation only.",
          "Beta and gamma radiation only.",
        ],
        answerIndex: 3,
        hints: [
          "If α-particles were present, thin paper would absorb them and reduce the count rate.",
          "What radiation penetrates 3 mm of aluminium and requires thick lead to attenuate?",
        ],
        explanation:
          "No drop with thin paper rules out α-radiation. The sharp drop with 3 mm aluminium confirms β-radiation, while the penetrating component attenuated only by thick lead confirms γ-radiation.",
      },
      {
        id: "e2-nuclear-stars-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "decay-law-hl",
        strategy: "Distinguish decayed nuclei N₀ − N from remaining nuclei N",
        question:
          "A pure radioactive sample starts with {{N_0}} undecayed nuclei. After a time equal to {{2 T_½}}, what fraction of the original nuclei have **decayed**?",
        options: [
          "{{3/4}} (75%)",
          "{{1/4}} (25%)",
          "{{1/2}} (50%)",
          "{{7/8}} (87.5%)",
        ],
        answerIndex: 0,
        hints: [
          "After 2 half-lives, what fraction of the original nuclei **remain** undecayed?",
          "Subtract the remaining fraction from 1 to find the **decayed** fraction: {{1 - (1/2)^2}}.",
        ],
        explanation:
          "After {{2 T_½}}, the fraction remaining undecayed is {{N / N_0 = (1/2)^2 = 1/4}}. Therefore the fraction that have **decayed** is {{1 - 1/4 = 3/4}} (75%). Answering 1/4 is the classic mistake of confusing remaining with decayed nuclei.",
      },
      {
        id: "e2-nuclear-stars-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "decay-law-hl",
        strategy: "Combine λ = ln(2)/T_½ with N = A/λ",
        question:
          "A sample of a radioisotope with half-life {{T_½ = 1000}} s currently has an activity of {{6.93 * 10^6}} Bq. How many undecayed nuclei are present in the sample?",
        options: [
          "{{4.80 * 10^9}}",
          "{{1.00 * 10^10}}",
          "{{6.93 * 10^9}}",
          "{{1.44 * 10^10}}",
        ],
        answerIndex: 1,
        hints: [
          "Calculate the decay constant first: {{λ = ln(2) / 1000 ≈ 6.93 * 10^(-4)}} s⁻¹.",
          "Rearrange {{A = λ N}} to solve for {{N = A / λ}}.",
        ],
        explanation:
          "With {{λ = 0.69315 / 1000 = 6.93 * 10^(-4)}} s⁻¹, we get {{N = A / λ = (6.93 * 10^6) / (6.93 * 10^(-4)) = 1.00 * 10^10}} nuclei. Answering {{6.93 * 10^9}} omits the factor of {{ln(2)}}.",
      },
      {
        id: "e2-nuclear-stars-m2-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "decay-law-hl",
        strategy: "Relate daughter-to-parent ratio to initial parent population N₀ = N_P + N_D",
        question:
          "A mineral crystal originally contained pure radioactive parent isotope P ({{T_½ = 1.2 * 10^9}} yr) and zero stable daughter isotope D. Today the measured atomic ratio is {{N_D / N_P = 7}}. What is the age of the crystal?",
        options: [
          "{{2.4 * 10^9}} yr",
          "{{8.4 * 10^9}} yr",
          "{{3.6 * 10^9}} yr",
          "{{4.8 * 10^9}} yr",
        ],
        answerIndex: 2,
        hints: [
          "Every decayed parent atom became one daughter atom, so the original parent count was {{N_0 = N_P + N_D}}.",
          "If {{N_D = 7 N_P}}, then {{N_P / N_0 = 1 / 8}}. How many half-lives reduce a sample to 1/8?",
        ],
        explanation:
          "Since {{N_0 = N_P + N_D = N_P + 7 N_P = 8 N_P}}, the surviving parent fraction is {{N_P / N_0 = 1/8 = (1/2)^3}}. Thus 3 half-lives have elapsed: {{t = 3 * 1.2 * 10^9 = 3.6 * 10^9}} yr.",
      },
      {
        id: "e2-nuclear-stars-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "decay-law-hl",
        strategy: "Connect discrete emission energies to quantized nuclear states",
        question:
          "Alpha particles emitted by a given radioisotope appear only at specific, sharp kinetic energies, often followed by gamma photons of discrete energies. What does this observation demonstrate?",
        options: [
          "Alpha particles share their decay energy continuously with an emitted electron antineutrino.",
          "Nuclear binding energy per nucleon is identical for every isotope in the periodic table.",
          "Decay probability increases steadily with time once a nucleus enters an excited state.",
          "Atomic nuclei possess discrete, quantized energy levels analogous to atomic electron shells.",
        ],
        answerIndex: 3,
        hints: [
          "Compare discrete nuclear α and γ energies with discrete atomic optical line spectra.",
          "What must be true of the initial and final nuclear states if only certain energy differences ΔE occur?",
        ],
        explanation:
          "Sharp, discrete α and γ energies mean transitions occur only between fixed energy differences {{ΔE}}, providing direct experimental evidence for **discrete, quantized nuclear energy levels**.",
      },
      {
        id: "e2-nuclear-stars-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "nuclear-fission",
        strategy: "Apply elastic-collision kinetic energy transfer",
        question:
          "Why is water (H₂O) or graphite (¹²C) effective as a reactor moderator, whereas lead (²⁰⁸Pb) is ineffective?",
        options: [
          "Light nuclei have masses close to a neutron's mass, maximizing kinetic energy transfer per elastic collision.",
          "Light nuclei strongly absorb fast fission neutrons and then re-emit them later as slow thermal neutrons.",
          "Heavy lead nuclei undergo spontaneous fission whenever struck by fast neutrons emitted from uranium-235.",
          "Light nuclei exert a much stronger electrostatic repulsion on incoming neutrons, decelerating them quickly.",
        ],
        answerIndex: 0,
        hints: [
          "Think of a billiard ball colliding elastically with another identical ball versus bouncing off a bowling ball.",
          "Neutrons are electrically neutral, so electrostatic repulsion cannot act on them!",
        ],
        explanation:
          "In an elastic collision, the fraction of kinetic energy transferred is largest when the target nucleus has a mass comparable to the neutron's mass (like ¹H, ²H, or ¹²C). Off a heavy lead nucleus, a neutron rebounds with almost unchanged speed.",
      },
      {
        id: "e2-nuclear-stars-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "nuclear-fission",
        strategy: "Control rods absorb neutrons to regulate fission rate",
        question:
          "While a nuclear fission reactor operates at steady power, boron control rods are lowered slightly deeper into the core. What is the immediate effect?",
        options: [
          "Fast neutrons are slowed more effectively, increasing the fission rate and raising thermal power.",
          "More neutrons are absorbed, reducing the fission rate and lowering the reactor's thermal power.",
          "More U-235 nuclei split per second because boron reflects escaping neutrons back into the fuel.",
          "The half-life of U-235 increases, preventing further spontaneous radioactive decay in the fuel rods.",
        ],
        answerIndex: 1,
        hints: [
          "Boron and cadmium have very high neutron-absorption cross-sections.",
          "If fewer neutrons survive to strike other U-235 nuclei, what happens to the rate of fission?",
        ],
        explanation:
          "Control rods absorb neutrons. Lowering them deeper removes more neutrons from the chain reaction, causing the average number of secondary fissions per fission to dip below 1 so the fission rate and thermal power decrease.",
      },
      {
        id: "e2-nuclear-stars-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "nuclear-fission",
        strategy: "Convert electrical power to thermal power via P_th = P_elec / η",
        question:
          "A nuclear power plant generates {{600}} MW of **electrical** power at {{40}}% overall efficiency. Each ²³⁵U fission releases {{3.0 * 10^(-11)}} J. How many fissions occur every second?",
        options: [
          "{{8.0 * 10^18}} s⁻¹",
          "{{2.0 * 10^19}} s⁻¹",
          "{{5.0 * 10^19}} s⁻¹",
          "{{1.25 * 10^20}} s⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Thermal power from the reactor core must be *larger* than electrical output: {{P_th = P_elec / η}}.",
          "Divide {{P_th}} (in W = J s⁻¹) by {{3.0 * 10^(-11)}} J per fission.",
        ],
        explanation:
          "Thermal power required is {{P_th = 600 / 0.40 = 1500}} MW = {{1.5 * 10^9}} W. Fission rate = {{(1.5 * 10^9) / (3.0 * 10^(-11)) = 5.0 * 10^19}} s⁻¹. Multiplying by 0.40 gives {{8.0 * 10^18}} s⁻¹ (too small), and ignoring efficiency gives {{2.0 * 10^19}} s⁻¹.",
      },
      {
        id: "e2-nuclear-stars-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "fusion-stars-hr",
        strategy: "Overcome electrostatic Coulomb barrier to reach strong-force range",
        question: "Why does stellar proton–proton fusion require core temperatures of at least ~{{10^7}} K?",
        options: [
          "Protons must break apart into free quarks before the strong nuclear force can bind them into helium.",
          "High temperatures strengthen the gravitational pull between individual protons inside the stellar core.",
          "Protons must exceed the speed of light so that mass–energy equivalence can convert mass into photons.",
          "Protons need high kinetic energy to overcome electrostatic Coulomb repulsion and reach strong-force range.",
        ],
        answerIndex: 3,
        hints: [
          "Both protons carry a positive charge +e, so they repel each other electrostatically.",
          "How close must two protons approach (~{{10^(-15)}} m) before the attractive strong nuclear force takes over?",
        ],
        explanation:
          "Two positively charged protons strongly repel via the Coulomb force. Extreme temperature (~{{10^7}} K) provides sufficient thermal kinetic energy (aided by quantum tunnelling) to bring protons within the ~{{10^(-15)}} m range of the attractive strong nuclear force.",
      },
      {
        id: "e2-nuclear-stars-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "fusion-stars-hr",
        strategy: "Apply Wien's displacement law λ_max T = 2.90 × 10⁻³ m K",
        question:
          "The blackbody spectrum of Star A peaks at {{λ_max = 290}} nm and that of Star B peaks at {{λ_max = 580}} nm. Using Wien's displacement law ({{λ_max T = 2.90 * 10^(-3)}} m K), what are their surface temperatures?",
        options: [
          "{{T_A = 10 000}} K (hotter) and {{T_B = 5 000}} K (cooler)",
          "{{T_A = 5 000}} K (cooler) and {{T_B = 10 000}} K (hotter)",
          "{{T_A = 1 000}} K (cooler) and {{T_B = 2 000}} K (hotter)",
          "{{T_A = 20 000}} K (hotter) and {{T_B = 10 000}} K (cooler)",
        ],
        answerIndex: 0,
        hints: [
          "Convert nanometres to metres: {{290 nm = 2.90 * 10^(-7)}} m.",
          "Shorter peak wavelength means a **higher** surface temperature: {{T = (2.90 * 10^(-3)) / λ_max}}.",
        ],
        explanation:
          "For Star A, {{T_A = (2.90 * 10^(-3)) / (2.90 * 10^(-7)) = 10 000}} K. Since Star B's peak wavelength is twice as long (580 nm), its surface temperature is half as large: {{T_B = 5 000}} K.",
      },
      {
        id: "e2-nuclear-stars-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "fusion-stars-hr",
        strategy: "Apply inverse-square brightness ratio b₁/b₂ = (L₁/L₂)/(d₁/d₂)²",
        question:
          "Star X has 9 times the luminosity of Star Y ({{L_X = 9 L_Y}}) and is 3 times further from Earth ({{d_X = 3 d_Y}}). How does Star X's apparent brightness {{b_X}} compare with {{b_Y}}?",
        options: [
          "{{b_X = 3 b_Y}} (Star X appears three times brighter)",
          "{{b_X = b_Y}} (both stars appear equally bright)",
          "{{b_X = (1/3) b_Y}} (Star X appears three times dimmer)",
          "{{b_X = 9 b_Y}} (Star X appears nine times brighter)",
        ],
        answerIndex: 1,
        hints: [
          "Apparent brightness follows {{b = L / (4 pi d^2)}}.",
          "Compare the factor of 9 in the numerator with {{3^2}} in the denominator.",
        ],
        explanation:
          "Using {{b_X / b_Y = (L_X / L_Y) / (d_X / d_Y)^2 = 9 / 3^2 = 9 / 9 = 1}}, the two stars have identical apparent brightness from Earth! Forgetting to square distance gives the incorrect factor of 3.",
      },
      {
        id: "e2-nuclear-stars-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "fusion-stars-hr",
        strategy: "Use L ∝ M^3.5 and lifetime τ ∝ M / L ∝ M^(−2.5)",
        question:
          "Main-sequence Star M has twice the mass of the Sun ({{M = 2 M_☉}}). Using the mass–luminosity relation {{L ∝ M^3.5}}, how do its luminosity and main-sequence lifetime compare with the Sun's?",
        options: [
          "Roughly 11 times more luminous, with a much longer main-sequence lifetime.",
          "Roughly 7 times more luminous, with twice the Sun's main-sequence lifetime.",
          "Roughly 11 times more luminous, with a much shorter main-sequence lifetime.",
          "Roughly 4 times more luminous, with the exact same main-sequence lifetime.",
        ],
        answerIndex: 2,
        hints: [
          "Evaluate {{2^3.5 = 2^3 * sqrt(2) ≈ 8 * 1.414 ≈ 11.3}}.",
          "Although Star M has 2× as much fuel, it burns fuel ~11× faster — so does it last longer or shorter?",
        ],
        explanation:
          "Luminosity scales as {{2^3.5 ≈ 11.3 L_☉}}. Main-sequence lifetime scales as fuel/burn-rate {{∝ M / L ∝ 2 / 11.3 ≈ 0.18}} times the Sun's lifetime — massive stars burn fiercely and die young.",
      },
      {
        id: "e2-nuclear-stars-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "State",
        guideRef: "fusion-stars-hr",
        strategy: "Match remnant type to supporting degeneracy pressure",
        question:
          "Once nuclear fusion ceases in a Sun-like star, what prevents its remaining white dwarf core (mass {{< 1.4 M_☉}}) from collapsing further under gravity?",
        options: [
          "Outward radiation pressure produced by slow residual iron fusion in the core.",
          "Neutron degeneracy pressure produced after protons capture all core electrons.",
          "Thermal gas pressure maintained by continuous gravitational contraction heating.",
          "Electron degeneracy pressure arising from the Pauli exclusion principle.",
        ],
        answerIndex: 3,
        hints: [
          "Fusion has completely stopped in a white dwarf, so radiation pressure is gone.",
          "Which quantum degeneracy pressure operates below the 1.4 {{M_☉}} Chandrasekhar limit?",
        ],
        explanation:
          "Below the **Chandrasekhar limit (~1.4 {{M_☉}})**, **electron degeneracy pressure** (no two electrons can occupy the same quantum state) halts gravitational collapse in a white dwarf. Neutron degeneracy pressure supports neutron stars formed above this limit.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: Higher-Order Analysis, HL Exponential Proofs & Astrophysics
  // answerIndex spread: 0×4, 1×3, 2×4, 3×4
  // ===========================================================================
  {
    id: "e2-nuclear-stars-m3",
    title: "Paper M3 · Synthesis & Higher-Order Thinking",
    level: "SL",
    questions: [
      {
        id: "e2-nuclear-stars-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "binding-energy-decay",
        strategy: "Conserve A, Z and lepton number in β⁺ decay",
        question:
          "Fluorine-18 (¹⁸₉F), widely used in medical PET scans, decays by β⁺ emission. Which decay products are formed?",
        options: [
          "¹⁸₁₀Ne + e⁺ + ν_e",
          "¹⁸₈O + e⁺ + ν̄_e",
          "¹⁸₈O + e⁺ + ν_e",
          "¹⁴₇N + e⁺ + ν_e",
        ],
        answerIndex: 2,
        hints: [
          "In β⁺ decay, a proton converts into a neutron, so A stays constant while Z decreases by 1.",
          "The positron e⁺ is an antilepton (lepton number −1), so the neutral companion must be a **neutrino** (lepton number +1).",
        ],
        explanation:
          "In β⁺ decay, {{p -> n + e^+ +}} ν_e: nucleon number stays 18, proton number drops from 9 to 8 (oxygen-18), and an electron **neutrino** (ν_e) is emitted alongside the positron e⁺ to conserve lepton number.",
      },
      {
        id: "e2-nuclear-stars-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "binding-energy-decay",
        strategy: "Compare the steepness of the left vs right slope of the BE/A curve",
        question:
          "Why does nuclear fusion of light nuclei release far more energy per kilogram of fuel than nuclear fission of uranium-235?",
        options: [
          "Heavy uranium nuclei have negative binding energy per nucleon, whereas helium nuclei have positive binding energy.",
          "Nuclear fusion converts one hundred percent of the initial proton rest mass directly into gamma-ray photons.",
          "Fission fragments always lie to the left of iron-56, where binding energy per nucleon is significantly lower.",
          "The binding-energy-per-nucleon curve climbs much more steeply on the fusion side than it falls on the fission side.",
        ],
        answerIndex: 3,
        hints: [
          "Compare {{Δ(E_B / A)}} for fusing hydrogen into helium (~6.7 MeV/nucleon) versus fissioning U-235 (~0.85 MeV/nucleon).",
          "Both processes convert only a small fraction (<1%) of rest mass, NOT 100%.",
        ],
        explanation:
          "On the {{E_B / A}} vs A curve, the left slope from ¹H to ⁴He rises sharply (~7 MeV per nucleon!), whereas the right slope from ²³⁵U to A ≈ 120 rises gently (~0.85 MeV per nucleon). Thus fusion yields roughly 8× more energy per nucleon (and per kilogram) than fission.",
      },
      {
        id: "e2-nuclear-stars-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "binding-energy-decay",
        strategy: "Subtract product rest mass from reactant rest mass, then multiply by 931.5 MeV",
        question:
          "In deuterium–tritium fusion (²₁H + ³₁H → ⁴₂He + ¹₀n), the total rest mass of reactants is {{5.03015}} u and the total rest mass of products is {{5.01127}} u. What energy is released per reaction?",
        options: [
          "{{17.6}} MeV",
          "{{8.80}} MeV",
          "{{35.2}} MeV",
          "{{0.0189}} MeV",
        ],
        answerIndex: 0,
        hints: [
          "Calculate the mass decrease carefully without premature rounding: {{Δm = 5.03015 - 5.01127}} u.",
          "Convert {{Δm}} in u to MeV using {{1 u = 931.5}} MeV c⁻².",
        ],
        explanation:
          "The mass decrease is {{Δm = 5.03015 - 5.01127 = 0.01888}} u. Multiplying by {{931.5}} MeV u⁻¹ yields {{Q = 0.01888 * 931.5 = 17.6}} MeV. Leaving the answer as 0.0189 forgets the u-to-MeV conversion.",
      },
      {
        id: "e2-nuclear-stars-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "decay-law-hl",
        strategy: "Evaluate A = A₀ e^(−λt) directly",
        question:
          "A radioactive sample has decay constant {{λ = 0.050}} h⁻¹ and initial activity {{1000}} Bq. What is its activity after {{20}} hours?",
        options: [
          "{{500}} Bq",
          "{{368}} Bq",
          "{{250}} Bq",
          "{{632}} Bq",
        ],
        answerIndex: 1,
        hints: [
          "Compute the dimensionless exponent {{λ t = 0.050 * 20 = 1.00}}.",
          "Evaluate {{A = 1000 * e^(-1)}} (recall {{e^(-1) ≈ 0.368}}).",
        ],
        explanation:
          "Since {{λ t = 0.050 * 20 = 1.00}}, {{A = 1000 e^(-1) = 1000 * 0.3679 ≈ 368}} Bq. Note that 632 Bq equals {{1000(1 - e^(-1))}} — the *decrease* in activity rather than the remaining activity!",
      },
      {
        id: "e2-nuclear-stars-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "decay-law-hl",
        strategy: "Use A = (ln 2 / T_½) N to relate activity inversely to half-life",
        question:
          "Sample X has half-life *T* and sample Y has half-life {{4T}}. At a given instant, both samples contain the exact same number of undecayed nuclei *N*. What is the ratio of their activities {{A_X / A_Y}}?",
        options: [
          "{{1/4}}",
          "{{1}}",
          "{{4}}",
          "{{16}}",
        ],
        answerIndex: 2,
        hints: [
          "Express activity in terms of *N* and half-life: {{A = λ N = (ln(2) / T_½) N}}.",
          "For equal *N*, which isotope decays faster — the shorter half-life or the longer half-life?",
        ],
        explanation:
          "Because {{A = (ln(2) / T_½) N}}, activity is **inversely** proportional to half-life when *N* is the same. Since X has a 4× shorter half-life, its decay constant and activity are 4× greater: {{A_X / A_Y = 4}}.",
      },
      {
        id: "e2-nuclear-stars-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Suggest",
        guideRef: "decay-law-hl",
        strategy: "Use A = λN = (ln 2 / T_½)N when T_½ is too long to observe decay",
        question:
          "How can physicists accurately determine the half-life of uranium-238 ({{T_½ ≈ 4.5 * 10^9}} years) in a laboratory measurement lasting only a few hours?",
        options: [
          "Heat the uranium sample to extreme temperatures so its decay rate accelerates into a measurable range.",
          "Plot ln(A) against time over two hours and extrapolate the straight line until activity drops by half.",
          "Bombard the uranium sample with thermal neutrons and divide the induced fission rate by Avogadro's constant.",
          "Find the number of nuclei N from the sample mass and measure its activity A, then compute {{T_½ = N ln(2) / A}}.",
        ],
        answerIndex: 3,
        hints: [
          "Over two hours, the activity of ²³⁸U decreases by less than 1 part in {{10^13}}, so a {{ln(A)}} vs *t* slope is zero within noise.",
          "Can you determine {{λ}} from a single measurement of *A* if you know how many nuclei *N* are in a weighed pure sample?",
        ],
        explanation:
          "For ultra-long half-lives, activity stays essentially constant over human timescales. Weighing a pure sample yields {{N = (m / M) N_A}}, measuring its current activity gives {{λ = A / N}}, and thus {{T_½ = ln(2) / λ = N ln(2) / A}}.",
      },
      {
        id: "e2-nuclear-stars-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Derive",
        guideRef: "decay-law-hl",
        strategy: "Take natural log of A / A₀ = 0.10 = e^(−λt)",
        question:
          "A radioisotope has half-life {{T_½}}. Which expression gives the time *t* required for its activity to drop to {{10}}% of its initial value?",
        options: [
          "{{T_½ * ln(10) / ln(2)}}",
          "{{T_½ * ln(2) / ln(10)}}",
          "{{10 * T_½ * ln(2)}}",
          "{{T_½ / ln(10)}}",
        ],
        answerIndex: 0,
        hints: [
          "Set {{A / A_0 = 0.10 = 1/10 = e^(-λ t)}} and take natural logarithms of both sides.",
          "Substitute {{λ = ln(2) / T_½}} and check that *t* must be slightly over {{3 T_½}} (since {{2^3 = 8}} and {{2^4 = 16}}).",
        ],
        explanation:
          "From {{1/10 = e^(-λ t)}}, {{λ t = ln(10)}}. Substituting {{λ = ln(2) / T_½}} yields {{t = T_½ * ln(10) / ln(2) ≈ 3.32 T_½}}, which sensibly sits between 3 half-lives (12.5%) and 4 half-lives (6.25%).",
      },
      {
        id: "e2-nuclear-stars-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "nuclear-fission",
        strategy: "Relate critical mass to surface-area-to-volume neutron escape",
        question: "Why does a sub-critical sphere of pure uranium-235 fail to sustain a fission chain reaction?",
        options: [
          "Its density is too low, so the strong nuclear force cannot bind neighbouring uranium atoms inside the fuel.",
          "Its surface-area-to-volume ratio is too large, so too many neutrons escape before striking another U-235 nucleus.",
          "Its temperature is too low, so fast neutrons lack the kinetic energy needed to overcome Coulomb repulsion.",
          "Its proton number is too small, so each fission event produces zero secondary neutrons to continue the chain.",
        ],
        answerIndex: 1,
        hints: [
          "Neutron production scales with volume ({{∝ r^3}}), while neutron leakage through the outside scales with surface area ({{∝ r^2}}).",
          "What happens to the surface-to-volume ratio ({{3 / r}}) when a sphere is too small?",
        ],
        explanation:
          "Below the **critical mass**, the sphere's surface-area-to-volume ratio is too large: on average, fewer than one neutron per fission strikes another ²³⁵U nucleus before escaping through the surface, so the chain reaction dies out.",
      },
      {
        id: "e2-nuclear-stars-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "nuclear-fission",
        strategy: "Track where energy appears immediately after fission",
        question:
          "Immediately after a uranium-235 nucleus undergoes fission inside a fuel rod, in what form does the largest fraction (~80%) of the released energy initially appear?",
        options: [
          "Electromagnetic energy of the prompt gamma-ray photons.",
          "Kinetic energy of the two or three emitted fast neutrons.",
          "Kinetic energy of the two heavy fission fragment nuclei.",
          "Rest-mass energy of the antineutrinos emitted during beta decay.",
        ],
        answerIndex: 2,
        hints: [
          "The two positively charged daughter fragments form right next to each other (~{{10^(-14)}} m apart) and fly apart violently under electrostatic repulsion.",
          "Their collisions with surrounding uranium atoms heat up the fuel rod.",
        ],
        explanation:
          "Roughly 80–85% of the ~200 MeV fission release appears immediately as **kinetic energy of the two heavy fission fragments** propelled apart by Coulomb repulsion. Their collisions rapidly convert this into thermal energy inside the fuel rod.",
      },
      {
        id: "e2-nuclear-stars-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "nuclear-fission",
        strategy: "Explain safety isolation between primary coolant and steam loop",
        question:
          "Why does a pressurized water reactor include a **heat exchanger** between the primary coolant loop and the secondary steam loop?",
        options: [
          "To slow fast neutrons down to thermal speeds before they enter the generator coils and demagnetize them.",
          "To enrich natural uranium from 0.7% to 4% U-235 using high-pressure steam distillation inside the core.",
          "To convert kinetic energy of escaping alpha particles directly into alternating electrical current without turbines.",
          "To transfer thermal energy to generate steam while keeping radioactive core coolant isolated from the turbine.",
        ],
        answerIndex: 3,
        hints: [
          "Primary coolant passes straight through the radioactive core and becomes neutron-activated.",
          "You do NOT want radioactive water leaking into the turbine hall or condenser cooling river.",
        ],
        explanation:
          "The heat exchanger transfers thermal energy across sealed metal tubing from the pressurized, potentially radioactive primary coolant to clean water in the secondary loop, generating non-radioactive steam to drive the turbines safely.",
      },
      {
        id: "e2-nuclear-stars-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "fusion-stars-hr",
        strategy: "Link stellar core collapse directly to the Fe-56 peak on the BE/A curve",
        question:
          "Why does exothermic nuclear fusion abruptly stop once a massive red supergiant develops an iron-56 core?",
        options: [
          "Iron-56 sits at the binding-energy-per-nucleon peak, so fusing iron absorbs energy rather than releasing it.",
          "Iron-56 loses its magnetic field at core temperatures, so magnetic confinement can no longer trap the plasma.",
          "Iron-56 nuclei are too light to attract one another via gravity, causing the outer envelope to drift away gently.",
          "Iron-56 spontaneously fissions back into hydrogen nuclei, cooling the stellar core below fusion temperatures.",
        ],
        answerIndex: 0,
        hints: [
          "Recall where ⁵⁶Fe sits on the binding energy per nucleon curve.",
          "Does moving to nuclei heavier than ⁵⁶Fe increase or decrease binding energy per nucleon?",
        ],
        explanation:
          "Because ⁵⁶Fe lies at the peak of the binding-energy-per-nucleon curve, fusing iron into heavier elements *decreases* binding energy per nucleon and is **endothermic** (absorbs energy). Outward radiation pressure vanishes and the core collapses catastrophically into a Type II supernova.",
      },
      {
        id: "e2-nuclear-stars-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "fusion-stars-hr",
        strategy: "Connect distance > 100 pc to tiny parallax angle < 0.01 arcsec",
        question:
          "Why is ground-based stellar parallax generally limited to measuring distances of stars closer than about {{100}} pc?",
        options: [
          "Beyond 100 pc, starlight slows down below c because interstellar dust raises the refractive index of space.",
          "Beyond 100 pc, the parallax angle drops below 0.01 arcsec and is obscured by atmospheric blurring.",
          "Beyond 100 pc, stars stop obeying the inverse-square law for brightness because of gravitational lensing.",
          "Beyond 100 pc, Earth's orbital diameter shrinks to zero relative to the Sun's motion in the galaxy.",
        ],
        answerIndex: 1,
        hints: [
          "At {{d = 100}} pc, what is the parallax angle {{p = 1 / d}} in arcseconds?",
          "Why do space telescopes like Gaia extend parallax measurements far beyond ground-based limits?",
        ],
        explanation:
          "At 100 pc, {{p = 1 / 100 = 0.01}} arcsec — a tiny angle comparable to blurring from Earth's turbulent atmosphere. Space observatories like ESA's Gaia operate above the atmosphere and measure micro-arcsecond parallaxes far further away.",
      },
      {
        id: "e2-nuclear-stars-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "fusion-stars-hr",
        strategy: "With equal L, R ∝ 1/T²",
        question:
          "On an HR diagram, Star A has luminosity {{10^4 L_☉}} and surface temperature {{3000}} K, while Star B has the same luminosity {{10^4 L_☉}} and surface temperature {{12 000}} K. What is the ratio of their radii {{R_A / R_B}}?",
        options: [
          "{{4}}",
          "{{8}}",
          "{{16}}",
          "{{64}}",
        ],
        answerIndex: 2,
        hints: [
          "Since {{L_A = L_B}}, Stefan–Boltzmann gives {{R_A^2 T_A^4 = R_B^2 T_B^4}}.",
          "Take the square root of both sides: {{R_A / R_B = (T_B / T_A)^2}}.",
        ],
        explanation:
          "With identical luminosity, {{(R_A / R_B)^2 = (T_B / T_A)^4 => R_A / R_B = (T_B / T_A)^2 = (12000 / 3000)^2 = 4^2 = 16}}. The cooler star needs 16× the radius (256× the surface area) to match the hotter star's power output.",
      },
      {
        id: "e2-nuclear-stars-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "fusion-stars-hr",
        strategy: "Match evolutionary track to low/medium-mass star (M < 8 M_☉)",
        question: "Which sequence correctly describes the future evolution of the Sun after core hydrogen is exhausted?",
        options: [
          "Main Sequence → Red Supergiant → Type II Supernova → Neutron Star",
          "Main Sequence → White Dwarf → Red Giant → Black Hole",
          "Main Sequence → Blue Supergiant → Planetary Nebula → Neutron Star",
          "Main Sequence → Red Giant → Planetary Nebula → White Dwarf",
        ],
        answerIndex: 3,
        hints: [
          "The Sun has mass {{1 M_☉}} (well below the ~8 {{M_☉}} supernova threshold).",
          "After expanding into a Red Giant and shedding its outer layers, what compact remnant remains?",
        ],
        explanation:
          "Low- and medium-mass stars like the Sun evolve from the **Main Sequence** into a **Red Giant**, expel their outer envelope as a **Planetary Nebula**, and leave behind a cooling carbon–oxygen **White Dwarf**.",
      },
      {
        id: "e2-nuclear-stars-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "fusion-stars-hr",
        strategy: "Combine parallax d = 1/p with b = L/(4πd²)",
        question:
          "Stars X and Y have the exact same apparent brightness *b* as seen from Earth. Star X has parallax angle {{p_X = 0.020}} arcsec and Star Y has parallax angle {{p_Y = 0.080}} arcsec. What is the luminosity ratio {{L_X / L_Y}}?",
        options: [
          "{{16}}",
          "{{4}}",
          "{{1/4}}",
          "{{1/16}}",
        ],
        answerIndex: 0,
        hints: [
          "Find the distance ratio from {{d = 1 / p}}: Star X has a 4× smaller parallax angle, so it is 4× *further* away.",
          "If {{b_X = b_Y}}, then {{L_X / d_X^2 = L_Y / d_Y^2}}, so {{L_X / L_Y = (d_X / d_Y)^2}}.",
        ],
        explanation:
          "Distance {{d_X = 1 / 0.020 = 50}} pc and {{d_Y = 1 / 0.080 = 12.5}} pc, so {{d_X / d_Y = 4}}. Since both have the same apparent brightness {{b = L / (4 pi d^2)}}, Star X must be {{4^2 = 16}} times more luminous than Star Y.",
      },
    ],
  },
];
