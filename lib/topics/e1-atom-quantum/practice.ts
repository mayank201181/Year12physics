import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 questions: 4 MCQ [idx 0,1,2,3] + 4 ShortQ + 2 WrittenQ)
  // ===========================================================================
  quiz: [
    {
      id: "e1-atom-quantum-quiz-q01",
      kind: "mcq",
      level: "SL",
      difficulty: "warmup",
      guideRef: "atomic-spectra-levels",
      commandTerm: "Identify",
      question:
        "In Geiger and Marsden's gold-foil experiment, roughly 1 in 8000 α-particles was deflected through an angle greater than 90°. What key atomic feature did this prove?",
      options: [
        "Positive charge and almost all atomic mass sit in a tiny dense nucleus",
        "Gold atoms have tightly packed orbital electrons across the whole volume",
        "Alpha particles attract gold atoms through the gravitational force",
        "Positive charge is spread uniformly across a solid metallic sphere",
      ],
      answerIndex: 0,
      explanation:
        "Rebounding a heavy, fast, positively charged α-particle backward requires a huge repulsive electrostatic force from an object far more massive than the α-particle — proving the positive charge and nearly all the atom's mass are packed into a tiny, dense central nucleus.",
      hints: [
        "Could a light electron or a thin smeared-out positive charge ever bounce a heavy α-particle straight back?",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q02",
      kind: "short",
      level: "SL",
      difficulty: "warmup",
      guideRef: "atomic-spectra-levels",
      commandTerm: "Calculate",
      question:
        "An electron in an atom drops from an excited energy level at −2.10 eV to a lower level at −5.40 eV. Calculate the energy of the emitted photon in eV (to 2 decimal places).",
      answer: { type: "number", value: 3.3, tolerance: 0.02, display: "3.30 eV" },
      traps: [
        { spec: { type: "number", value: -3.3, tolerance: 0.02 }, feedback: "Photon energy is always positive: take the magnitude ΔE = E_upper − E_lower." },
        { spec: { type: "number", value: 7.5, tolerance: 0.02 }, feedback: "Subtract the two energies rather than adding their magnitudes: −2.10 − (−5.40)." },
      ],
      solution: [
        "Use {{ΔE = E_i - E_f}}.",
        "{{ΔE = -2.10 - (-5.40) = 3.30}} eV.",
      ],
      hints: [
        "Find the positive difference between the upper level (−2.10 eV) and the lower level (−5.40 eV).",
      ],
      commonError: "Adding 2.10 + 5.40 = 7.50 eV instead of taking the difference between two negative levels.",
    },
    {
      id: "e1-atom-quantum-quiz-q03",
      kind: "short",
      level: "HL",
      difficulty: "core",
      guideRef: "nuclear-radius-bohr-hl",
      commandTerm: "Calculate",
      question:
        "Using {{R = R_0 A^(1/3)}} with {{R_0 = 1.20}} fm, calculate the nuclear radius of aluminium-27 (*A* = 27) in femtometres (enter the numerical value to 2 decimal places).",
      answer: { type: "number", value: 3.6, tolerance: 0.02 },
      traps: [
        { spec: { type: "number", value: 32.4, tolerance: 0.2 }, feedback: "You multiplied by A = 27 instead of taking the cube root A^(1/3) = 3." },
      ],
      solution: [
        "Evaluate the cube root of nucleon number A = 27: {{27^(1/3) = 3}}.",
        "Multiply by {{R_0 = 1.20}} fm: {{R = 1.20 * 3 = 3.60}} fm.",
      ],
      hints: [
        "First find the cube root of 27.",
        "Multiply your result by {{R_0 = 1.20}} fm.",
      ],
      commonError: "Forgetting the cube root or taking the square root instead of the cube root.",
    },
    {
      id: "e1-atom-quantum-quiz-q04",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      guideRef: "nuclear-radius-bohr-hl",
      commandTerm: "Determine",
      question:
        "According to the Bohr model, the *n* = 2 level of hydrogen has energy −3.40 eV. What is the minimum energy required to ionize a hydrogen atom that is already in the *n* = 2 state?",
      options: [
        "13.6 eV",
        "3.40 eV",
        "10.2 eV",
        "1.70 eV",
      ],
      answerIndex: 1,
      explanation:
        "Ionization raises the electron to E = 0 eV (n = ∞). From E_2 = −3.40 eV, the minimum energy needed is ΔE = 0 − (−3.40) = 3.40 eV. Note that 13.6 eV is ionization from the ground state n = 1, and 10.2 eV is the n = 1 → 2 excitation gap.",
      hints: [
        "What is the energy of a free, ionized electron at n = ∞?",
        "Subtract the starting energy (−3.40 eV) from 0 eV.",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q05",
      kind: "short",
      level: "HL",
      difficulty: "core",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Calculate",
      question:
        "Ultraviolet photons of energy 4.80 eV strike a copper plate whose work function is Φ = 4.50 eV. Calculate the stopping potential {{V_s}} in volts (to 2 decimal places).",
      answer: { type: "number", value: 0.3, tolerance: 0.01, display: "0.30 V" },
      traps: [
        { spec: { type: "number", value: 9.3, tolerance: 0.05 }, feedback: "Subtract the work function from the photon energy: E_k,max = hf − Φ." },
      ],
      solution: [
        "Apply Einstein's photoelectric equation: {{E_(k,max) = hf - Φ = 4.80 - 4.50 = 0.30}} eV.",
        "Since {{e V_s = E_(k,max)}}, an energy of 0.30 eV gives {{V_s = 0.30}} V.",
      ],
      hints: [
        "Find {{E_(k,max) = hf - Φ}} in eV.",
        "Divide the energy in eV by e (numerically identical in volts).",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q06",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Identify",
      question:
        "In a photoelectric cell illuminated by light above the threshold frequency, which change increases the stopping potential {{V_s}}?",
      options: [
        "Doubling the intensity of the light source while keeping frequency constant",
        "Replacing the cathode with a metal that has a larger work function",
        "Increasing the frequency of the incident monochromatic light",
        "Increasing the surface area of the metal emitter plate",
      ],
      answerIndex: 2,
      explanation:
        "From eV_s = hf − Φ, raising incident frequency f increases photon energy hf and therefore raises V_s. Increasing intensity or area only increases photocurrent, and raising Φ decreases V_s.",
      hints: [
        "Look at Einstein's equation {{e V_s = hf - Φ}}.",
        "Which change makes the right-hand side larger?",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q07",
      kind: "short",
      level: "HL",
      difficulty: "core",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Calculate",
      question:
        "An X-ray photon undergoes Compton scattering through an angle of 60° off a free electron. Taking {{h/(m_e c) = 2.43}} pm, calculate the wavelength shift Δλ in picometres (enter the numerical value to 2 decimal places).",
      answer: { type: "number", value: 1.22, tolerance: 0.02 },
      traps: [
        { spec: { type: "number", value: 2.43, tolerance: 0.02 }, feedback: "2.43 pm is the shift at 90°; at 60°, evaluate 1 − cos 60° = 0.50." },
      ],
      solution: [
        "Use {{Δλ = (h/(m_e c))(1 - cos θ)}}.",
        "At θ = 60°, {{cos 60° = 0.50}}, so {{Δλ = 2.43 * (1 - 0.50) = 1.215 ≈ 1.22}} pm.",
      ],
      hints: [
        "Recall {{cos 60° = 0.5}}.",
        "Multiply 2.43 pm by {{(1 - 0.5)}}.",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q08",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      guideRef: "wave-particle-duality-hl",
      commandTerm: "Deduce",
      question:
        "The accelerating potential difference in an electron diffraction tube is increased by a factor of 9. By what factor does the de Broglie wavelength of the electrons change?",
      options: [
        "It increases by a factor of 3",
        "It increases by a factor of 9",
        "It decreases by a factor of 9",
        "It decreases by a factor of 3",
      ],
      answerIndex: 3,
      explanation:
        "Since λ = h / √(2meV), λ is inversely proportional to √V. Multiplying V by 9 multiplies √V by 3, so λ is divided by 3 (decreases by a factor of 3).",
      hints: [
        "Check the dependence of λ on V in {{λ = h / sqrt(2 m e V)}}.",
        "Take the square root of 9 and remember V is in the denominator.",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q09",
      kind: "written",
      level: "SL",
      difficulty: "core",
      guideRef: "atomic-spectra-levels",
      commandTerm: "Explain",
      marks: 3,
      question:
        "Explain why every chemical element produces a unique line spectrum and why its dark absorption lines match the exact wavelengths of its bright emission lines.",
      modelAnswer:
        "Each element has a distinct nuclear charge and electron configuration, giving it a unique set of discrete, quantized energy levels. Photons are emitted during downward transitions or absorbed during upward transitions only when their energy matches the exact gap ΔE = hc/λ between two levels. Because the same fixed pairs of energy differences govern both upward and downward jumps, the missing wavelengths in absorption coincide identically with the bright wavelengths in emission.",
      markScheme: [
        {
          point: "Each element has a unique set of discrete (quantized) atomic energy levels (due to its specific nuclear charge / electron configuration).",
          keywords: ["discrete", "quantized", "unique set"],
        },
        {
          point: "Transitions emit or absorb photons whose energy equals the exact energy-level difference ΔE = hf = hc/λ.",
          keywords: ["hc/λ", "hf", "energy-level difference", "exact gap"],
        },
        {
          point: "The same energy gaps govern both upward (absorption) and downward (emission) jumps, so both occur at identical wavelengths.",
          keywords: ["upward", "downward", "same", "identical"],
        },
      ],
      hints: [
        "Start with what makes one element's energy levels different from another's.",
        "Connect transition energy ΔE to photon wavelength λ using {{ΔE = hc/λ}}.",
        "Compare the gaps used in upward transitions versus downward transitions.",
      ],
    },
    {
      id: "e1-atom-quantum-quiz-q10",
      kind: "written",
      level: "HL",
      difficulty: "core",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Explain",
      marks: 3,
      question:
        "Explain why the existence of a threshold frequency and instantaneous photoelectron emission contradict classical wave theory, and how Einstein's photon model resolves both.",
      modelAnswer:
        "Classical wave theory distributes energy continuously across the wavefront in proportion to intensity, predicting that sufficiently bright light of any frequency should eventually free electrons and that dim light should require a measurable soaking delay. In Einstein's quantum model, electromagnetic radiation consists of discrete energy packets (photons) with E = hf transferred in one-to-one interactions with single electrons. An electron escapes immediately if one photon supplies at least the work function (hf ≥ Φ), and no emission occurs at any intensity if hf < Φ.",
      markScheme: [
        {
          point: "Classical wave theory predicts any frequency can liberate electrons given high intensity and predicts a time delay at low intensity as energy accumulates continuously.",
          keywords: ["continuously", "accumulate", "soaking", "delay"],
        },
        {
          point: "Einstein proposed light arrives in discrete quanta (photons) of energy E = hf absorbed in one-to-one interactions by single electrons.",
          keywords: ["one-to-one", "discrete", "quanta", "single electrons"],
        },
        {
          point: "Emission happens immediately whenever hf ≥ Φ (giving f₀ = Φ/h) and cannot occur if a single photon carries less than the work function.",
          keywords: ["work function", "hf ≥ φ", "immediately"],
        },
      ],
      hints: [
        "State what classical wave theory expects for bright low-frequency light and dim high-frequency light.",
        "Introduce single-photon energy {{E = hf}} and one-to-one absorption.",
        "Link the condition {{hf ≥ Φ}} to both instant ejection and the cutoff at {{f_0}}.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (p1 & p2, 15 Qs each — mix of ShortQ and WrittenQ)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: E.1 Atomic Structure, Spectra, Nuclear Radius & Bohr (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "e1-atom-quantum-p1",
      title: "Paper 2 · Atomic Spectra, Rutherford, Nuclear Radius & Bohr",
      level: "SL",
      questions: [
        {
          id: "e1-atom-quantum-p1-q01",
          kind: "short",
          level: "SL",
          difficulty: "warmup",
          guideRef: "atomic-spectra-levels",
          commandTerm: "Calculate",
          question:
            "Calculate the energy, in eV (to 2 decimal places), of a violet photon of frequency {{7.50 * 10^(14)}} Hz. (Use {{h = 6.63 * 10^(-34)}} J s and {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 3.11, tolerance: 0.03, display: "3.11 eV" },
          solution: [
            "Compute energy in joules: {{E = hf = 6.63 * 10^(-34) * 7.50 * 10^(14) = 4.973 * 10^(-19)}} J.",
            "Convert to electronvolts: {{E = (4.973 * 10^(-19)) / (1.60 * 10^(-19)) = 3.11}} eV.",
          ],
          hints: [
            "First calculate E in joules using {{E = hf}}.",
            "Divide by {{1.60 * 10^(-19)}} J eV⁻¹ to convert to eV.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q02",
          kind: "written",
          level: "SL",
          difficulty: "warmup",
          guideRef: "atomic-spectra-levels",
          commandTerm: "Outline",
          marks: 3,
          question:
            "Outline the three principal observations from the Geiger–Marsden–Rutherford α-scattering experiment and state the conclusion about atomic structure deduced from each.",
          modelAnswer:
            "First, more than 99% of incident α-particles passed straight through the thin gold foil with minimal deflection, proving that the atom is mostly empty space. Second, a small fraction were deflected through moderate angles, showing that the central core carries a positive electric charge that repels positive α-particles. Third, roughly 1 in 8000 rebounded through angles greater than 90°, showing that nearly all of the atom's mass and positive charge are concentrated in a tiny, dense central nucleus.",
          markScheme: [
            {
              point: "Most α-particles pass straight through undeflected → the atom is mostly empty space.",
              keywords: ["empty space", "straight through"],
            },
            {
              point: "A small fraction deflect through moderate angles → a positive charge repels the positive α-particles.",
              keywords: ["repels", "positive electric charge", "moderate angles"],
            },
            {
              point: "Very few (~1 in 8000) scatter through > 90° (backscatter) → nearly all mass and positive charge sit in a tiny, dense nucleus.",
              keywords: ["tiny, dense", "90°", "rebounded", "dense central nucleus"],
            },
          ],
          hints: [
            "Structure your response as three Observation → Conclusion pairs.",
            "Distinguish small/moderate deflections (positive charge) from > 90° rebounds (tiny, dense, massive nucleus).",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q03",
          kind: "short",
          level: "SL",
          difficulty: "core",
          guideRef: "atomic-spectra-levels",
          commandTerm: "Calculate",
          question:
            "An electron in hydrogen drops from *n* = 4 (−0.85 eV) to *n* = 2 (−3.40 eV), producing the cyan Balmer-β line. Calculate the wavelength of the emitted photon in nm to 3 significant figures. (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 488, tolerance: 3, display: "488 nm" },
          solution: [
            "Energy gap: {{ΔE = -0.85 - (-3.40) = 2.55}} eV.",
            "Convert to joules: {{ΔE = 2.55 * 1.60 * 10^(-19) = 4.08 * 10^(-19)}} J.",
            "Wavelength: {{λ = hc / ΔE = (6.63 * 10^(-34) * 3.00 * 10^8) / (4.08 * 10^(-19)) = 4.88 * 10^(-7)}} m = 488 nm (high-precision: 486 nm).",
          ],
          hints: [
            "Find ΔE in eV, then convert to joules.",
            "Rearrange {{ΔE = hc/λ}} to get λ in metres, then multiply by {{10^9}} for nm.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q04",
          kind: "short",
          level: "SL",
          difficulty: "core",
          guideRef: "atomic-spectra-levels",
          commandTerm: "Calculate",
          question:
            "A red helium–neon laser of wavelength 633 nm emits a continuous power of {{3.14 * 10^(-3)}} W. Calculate the number of photons emitted per second, expressed as {{X * 10^(16)}} s⁻¹ (enter the value of *X* to 2 decimal places; use {{h = 6.63 * 10^(-34)}} J s and {{c = 3.00 * 10^8}} m s⁻¹).",
          answer: { type: "number", value: 1, tolerance: 0.02 },
          solution: [
            "Single-photon energy: {{E = hc/λ = (6.63 * 10^(-34) * 3.00 * 10^8) / (633 * 10^(-9)) = 3.142 * 10^(-19)}} J.",
            "Photon emission rate: {{N/t = P/E = (3.14 * 10^(-3)) / (3.142 * 10^(-19)) = 1.00 * 10^(16)}} s⁻¹.",
            "Therefore X = 1.00.",
          ],
          hints: [
            "First find the energy of ONE photon of wavelength 633 nm using {{E = hc/λ}}.",
            "Divide the total power P (joules per second) by the energy per photon.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q05",
          kind: "written",
          level: "SL",
          difficulty: "core",
          guideRef: "atomic-spectra-levels",
          commandTerm: "Compare and contrast",
          marks: 4,
          question:
            "Compare and contrast an emission line spectrum and an absorption line spectrum of hydrogen gas, explaining how each is produced and why their characteristic lines appear at identical wavelengths.",
          modelAnswer:
            "An emission spectrum is produced by heating or electrically exciting a low-pressure hydrogen gas so electrons drop from higher to lower discrete energy levels, releasing photons that form bright coloured lines against a dark background. An absorption spectrum is produced by passing continuous white light through a cool, low-pressure hydrogen gas; electrons absorb matching photons to jump upward and re-emit them randomly in all directions, leaving dark lines against a continuous rainbow. Both spectra are discrete and share identical wavelengths because both arise from the exact same quantized energy-level differences ΔE = hc/λ of hydrogen.",
          markScheme: [
            {
              point: "Emission: excited hot/discharged gas has electrons dropping to lower levels, producing bright coloured lines on a dark background.",
              keywords: ["bright coloured lines", "dark background", "lower"],
            },
            {
              point: "Absorption: continuous white light passes through cool gas, leaving dark lines against a continuous rainbow background.",
              keywords: ["white light", "cool", "dark lines", "continuous rainbow"],
            },
            {
              point: "In absorption, re-emitted photons scatter randomly in all directions rather than along the original beam.",
              keywords: ["all directions", "randomly", "re-emit"],
            },
            {
              point: "Similarity: both are discrete and match at identical wavelengths because they correspond to the exact same quantized level gaps ΔE = hc/λ.",
              keywords: ["quantized", "hc/λ", "exact same"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Basic visual distinction between emission and absorption spectra with incomplete reference to experimental conditions or energy levels." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear, balanced comparison of visual appearance, experimental production (including isotropic re-emission), and identical wavelengths via quantized ΔE = hc/λ." },
          ],
          hints: [
            "Contrast BOTH visual appearance (background vs lines) AND physical setup (hot/excited gas vs cool gas + white light).",
            "Explain why absorbed light looks dark even though excited electrons quickly drop back down.",
            "Conclude with the shared quantum reason their wavelengths match.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Calculate",
          question:
            "A 6.40 MeV α-particle (charge +2*e*) travels directly head-on toward a stationary silver nucleus (*Z* = 47). Calculate its distance of closest approach in femtometres (enter the numerical value to 3 significant figures; use {{k = 8.99 * 10^9}} N m² C⁻² and {{e = 1.60 * 10^(-19)}} C).",
          answer: { type: "number", value: 21.1, tolerance: 0.3 },
          traps: [
            { spec: { type: "number", value: 10.6, tolerance: 0.2 }, feedback: "Remember an α-particle carries charge +2e, not +e!" },
          ],
          solution: [
            "Convert kinetic energy to joules: {{E_k = 6.40 * 10^6 * 1.60 * 10^(-19) = 1.024 * 10^(-12)}} J.",
            "Equate {{E_k = k(2e)(47e)/d}} and rearrange: {{d = (8.99 * 10^9 * 94 * (1.60 * 10^(-19))^2) / (1.024 * 10^(-12))}}.",
            "Evaluate: {{d = 2.11 * 10^(-14)}} m = 21.1 fm.",
          ],
          hints: [
            "At closest approach, all initial kinetic energy converts to electrostatic potential energy {{k q_1 q_2 / d}}.",
            "Don't forget {{q_1 = +2e}} for an α-particle and {{q_2 = +47e}} for silver!",
          ],
          commonError: "Using +e instead of +2e for the α-particle, which halves the true distance.",
        },
        {
          id: "e1-atom-quantum-p1-q07",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Explain",
          marks: 3,
          question:
            "Explain why a distance-of-closest-approach calculation at 6.40 MeV provides only an upper limit for the silver nuclear radius, and state what happens to the scattering pattern if the α-particle energy is increased enough to touch the nucleus.",
          modelAnswer:
            "At 6.40 MeV, electrostatic Coulomb repulsion halts and reverses the α-particle well outside the nuclear boundary (21.1 fm is several times larger than silver's ~5.7 fm radius), so the actual nucleus must be smaller than this turning distance. Additionally, ignoring recoil of the silver nucleus slightly alters the value. Once α-energy is raised high enough to approach within ~10⁻¹⁵ m of the nuclear surface, the attractive short-range strong nuclear force acts alongside Coulomb repulsion, causing measured large-angle scattering intensities to deviate below Rutherford's purely electrostatic prediction.",
          markScheme: [
            {
              point: "Coulomb repulsion turns the α-particle back before reaching the nuclear surface, so the true radius must be smaller than d.",
              keywords: ["outside", "before reaching", "smaller", "boundary"],
            },
            {
              point: "At sufficiently high energy (femtometre separation), the attractive short-range strong nuclear force begins to act.",
              keywords: ["strong nuclear force", "short-range", "attractive"],
            },
            {
              point: "Measured large-angle scattering deviates (falls below) Rutherford's pure-Coulomb prediction.",
              keywords: ["deviate", "below", "rutherford"],
            },
          ],
          hints: [
            "Does a 6.40 MeV α-particle actually touch the silver nucleus, or does it stop outside?",
            "Which force turns on at ~10⁻¹⁵ m once contact is approached?",
            "State clearly how the observed intensity compares with Rutherford's formula.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Calculate",
          question:
            "The nuclear radius of oxygen-16 (*A* = 16) is 3.02 fm. Using {{R = R_0 A^(1/3)}}, calculate the nuclear radius of iron-56 (*A* = 56) in femtometres (enter the numerical value to 3 significant figures).",
          answer: { type: "number", value: 4.59, tolerance: 0.05 },
          traps: [
            { spec: { type: "number", value: 10.57, tolerance: 0.1 }, feedback: "Radius scales with A^(1/3), not linearly with A!" },
          ],
          solution: [
            "Take the ratio to eliminate {{R_0}}: {{R_(Fe) / R_O = (56/16)^(1/3) = 3.5^(1/3) = 1.518}}.",
            "Multiply by 3.02 fm: {{R_(Fe) = 3.02 * 1.518 = 4.59}} fm.",
          ],
          hints: [
            "Use the scaling ratio {{R_2 / R_1 = (A_2 / A_1)^(1/3)}}.",
            "Compute {{(56/16)^(1/3)}} and multiply by 3.02 fm.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q09",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Derive",
          marks: 3,
          question:
            "Starting from {{R = R_0 A^(1/3)}}, show algebraically that nuclear density is approximately constant across all nuclides, and state what this implies about how nucleons pack inside a nucleus.",
          modelAnswer:
            "Treating the nucleus as a sphere, its volume is V = (4/3)πR³ = (4/3)π(R₀A^(1/3))³ = (4/3)πR₀³A, which is directly proportional to A. Approximating nuclear mass as M ≈ Au (where u is the unified atomic mass unit), the density is ρ = M/V = (Au) / ((4/3)πR₀³A) = 3u / (4πR₀³) ≈ 2.3 × 10¹⁷ kg m⁻³. Because A cancels completely, nuclear density is independent of nucleon number, implying that nucleons are closely packed like incompressible spheres interacting via a short-range force.",
          markScheme: [
            {
              point: "Substitutes R = R₀A^(1/3) into spherical volume V = (4/3)πR³ to obtain V = (4/3)πR₀³A (volume ∝ A).",
              keywords: ["(4/3)π", "proportional to a", "volume"],
            },
            {
              point: "Divides mass M ≈ Au by volume V so that nucleon number A cancels, giving ρ = 3u / (4πR₀³).",
              keywords: ["cancels", "3u", "au"],
            },
            {
              point: "Concludes that nucleons are tightly/closely packed (incompressible) due to the short-range strong force.",
              keywords: ["incompressible", "closely packed", "short-range"],
            },
          ],
          hints: [
            "Write the volume of a sphere {{V = (4/3)π R^3}} and cube {{R_0 A^(1/3)}}.",
            "Write mass as {{M ≈ A u}} and compute {{ρ = M/V}}.",
            "Interpret constant density physically in terms of nucleon spacing.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q10",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Calculate",
          question:
            "High-energy electrons of de Broglie wavelength 2.40 fm diffract off a carbon-12 nucleus, producing a first diffraction minimum at θ = 26.8°. Using {{sin θ ≈ λ/D}}, calculate the nuclear **radius** *R* of carbon-12 in femtometres (enter the numerical value to 2 decimal places).",
          answer: { type: "number", value: 2.66, tolerance: 0.04 },
          traps: [
            { spec: { type: "number", value: 5.32, tolerance: 0.08 }, feedback: "5.32 fm is the nuclear DIAMETER D — divide by 2 to get the radius R!" },
          ],
          solution: [
            "Solve {{sin θ ≈ λ/D}} for nuclear diameter D: {{D = λ / sin 26.8° = 2.40 / 0.4509 = 5.32}} fm.",
            "Halve the diameter to find radius: {{R = D / 2 = 2.66}} fm.",
          ],
          hints: [
            "Rearrange {{sin θ ≈ λ/D}} to find the nuclear diameter D first.",
            "Read carefully: the question asks for the RADIUS R, not the diameter D!",
          ],
          commonError: "Reporting the diameter D = 5.32 fm instead of halving it to get R = 2.66 fm.",
        },
        {
          id: "e1-atom-quantum-p1-q11",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Calculate",
          question:
            "Using the Bohr hydrogen formula {{E_n = -13.6/n^2}} eV, calculate the energy (in eV, to 2 decimal places) of the infrared photon emitted during the Paschen-α transition (*n* = 4 → *n* = 3).",
          answer: { type: "number", value: 0.66, tolerance: 0.02, display: "0.66 eV" },
          solution: [
            "Find {{E_4 = -13.6 / 16 = -0.850}} eV and {{E_3 = -13.6 / 9 = -1.511}} eV.",
            "Take the difference: {{ΔE = -0.850 - (-1.511) = 0.661 ≈ 0.66}} eV.",
          ],
          hints: [
            "Compute {{E_4}} and {{E_3}} separately using {{E_n = -13.6/n^2}}.",
            "Find the positive gap {{E_4 - E_3}}.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Explain",
          marks: 3,
          question:
            "Explain why classical electromagnetic theory predicted that Rutherford's nuclear atom should collapse rapidly, and outline how Bohr's postulates resolved this instability.",
          modelAnswer:
            "In a circular orbit around the nucleus, an electron continuously experiences centripetal acceleration. Classical electromagnetism predicts that any accelerating electric charge continuously radiates electromagnetic energy, so the electron should rapidly lose energy and spiral into the nucleus while emitting a continuous spectrum. Bohr resolved this by postulating that electrons can occupy only discrete stationary orbits where orbital angular momentum is quantized (mvr = nh/2π), within which they do not radiate energy; photons are emitted or absorbed only during jumps between allowed orbits.",
          markScheme: [
            {
              point: "An orbiting electron undergoes centripetal acceleration, and classically an accelerating charge radiates EM waves continuously.",
              keywords: ["centripetal", "accelerating", "radiates"],
            },
            {
              point: "Continuous energy loss would cause the electron to spiral into the nucleus (collapsing the atom).",
              keywords: ["spiral", "lose energy"],
            },
            {
              point: "Bohr postulated discrete non-radiating stationary states with quantized angular momentum mvr = nh/(2π), radiating only during transitions.",
              keywords: ["stationary", "angular momentum", "transitions", "nh/2π"],
            },
          ],
          hints: [
            "Why is an electron moving in a circle accelerating even at constant speed?",
            "What does classical Maxwell theory say accelerating charges always do?",
            "State Bohr's stationary-state and angular-momentum quantization postulates.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q13",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Calculate",
          question:
            "Calculate the orbital angular momentum *L* of an electron in the *n* = 3 Bohr orbit of hydrogen, expressed as {{X * 10^(-34)}} J s (enter the value of *X* to 2 decimal places; use {{h = 6.63 * 10^(-34)}} J s).",
          answer: { type: "number", value: 3.17, tolerance: 0.03 },
          solution: [
            "Apply Bohr's rule {{L = nh/(2π)}} with n = 3.",
            "{{L = (3 * 6.63 * 10^(-34)) / (2π) = 3.166 * 10^(-34) ≈ 3.17 * 10^(-34)}} J s.",
          ],
          hints: [
            "Substitute n = 3 and {{h = 6.63 * 10^(-34)}} into {{L = nh/(2π)}}.",
            "Remember to divide by {{2π}} (≈ 6.283), not just π.",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Compare",
          marks: 4,
          question:
            "Evaluate high-energy electron diffraction and α-particle closest-approach scattering as experimental methods for measuring nuclear radius.",
          modelAnswer:
            "Distance-of-closest-approach scattering using moderate-energy α-particles is conceptually simple (equating E_k to Coulomb PE), but it provides only an upper bound on nuclear radius because Coulomb repulsion halts the α-particle outside the nucleus, and at higher energies the short-range strong nuclear force distorts pure-Coulomb trajectories. High-energy electron diffraction gives a far more accurate, direct measure of nuclear diameter via sin θ ≈ λ/D because electrons are leptons unaffected by the strong nuclear force and can be accelerated to de Broglie wavelengths around 1 fm. However, electron diffraction requires costly high-energy particle accelerators (hundreds of MeV) and produces weak diffraction minima that are challenging to resolve cleanly.",
          markScheme: [
            {
              point: "α-scattering closest approach yields only an upper bound at low energy and suffers strong-force distortion at high energy.",
              keywords: ["upper bound", "strong nuclear force", "distorts"],
            },
            {
              point: "Electrons are leptons unaffected by the strong nuclear force, interacting strictly electromagnetically for cleaner sizing.",
              keywords: ["leptons", "unaffected", "electromagnetically"],
            },
            {
              point: "High-energy electrons achieve λ ~ 1 fm matching nuclear diameter D so sin θ ≈ λ/D resolves nuclear radius accurately.",
              keywords: ["1 fm", "λ/d", "accurate"],
            },
            {
              point: "Limitation of electron diffraction: requires very high-energy accelerators (hundreds of MeV) and weak minima can be hard to locate precisely.",
              keywords: ["accelerators", "mev", "weak"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies at least one valid point about α-scattering or electron diffraction without balanced evaluation." },
            { band: "3–4", marks: [3, 4], descriptor: "Thorough evaluation contrasting strong-force effects, upper-bound limitation of α-particles, lepton advantage and λ ~ 1 fm sizing of electrons, plus practical accelerator/resolution constraints." },
          ],
          hints: [
            "Why is α-closest-approach only an upper limit unless you push into the strong-force regime?",
            "Why do electrons bypass the strong nuclear force?",
            "Include a practical limitation of electron diffraction (energy needed to get λ ~ 1 fm).",
          ],
        },
        {
          id: "e1-atom-quantum-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          guideRef: "nuclear-radius-bohr-hl",
          commandTerm: "Discuss",
          marks: 5,
          question:
            "Discuss how experimental evidence progressively transformed atomic models from Thomson's plum pudding model to the Bohr model of hydrogen, and state one major limitation that remained in the Bohr model.",
          modelAnswer:
            "Thomson's plum pudding model distributed positive charge uniformly across the atom, predicting tiny α-particle deflections. Geiger and Marsden's discovery of rare large-angle backscattering (> 90°) forced Rutherford to introduce the nuclear model, concentrating positive charge and nearly all mass into a minuscule core surrounded by empty space. However, Rutherford's classical planetary atom could neither explain atomic stability (accelerating electrons should radiate continuously and spiral inward) nor explain sharp discrete line spectra emitted by gases. Bohr solved both puzzles by quantizing orbital angular momentum (mvr = nh/2π), producing stable non-radiating stationary states with E_n = −13.6/n² eV that predicted hydrogen's spectral wavelengths accurately. Nevertheless, the Bohr model still failed to predict spectra of multi-electron atoms accurately, could not explain varying spectral line intensities or fine-structure splitting, and treated electrons as following classical fixed trajectories.",
          markScheme: [
            {
              point: "Explains Thomson's diffuse positive-charge model and how Rutherford's > 90° α-backscattering replaced it with a tiny dense nucleus.",
              keywords: ["backscattering", "dense nucleus", "90°"],
            },
            {
              point: "Identifies failures of Rutherford's classical model: accelerating electrons should spiral inward and emit continuous rather than discrete spectra.",
              keywords: ["spiral inward", "continuous", "discrete"],
            },
            {
              point: "Explains Bohr's quantization mvr = nh/(2π) and stationary non-radiating energy levels.",
              keywords: ["nh/2π", "stationary", "quantizing"],
            },
            {
              point: "Links Bohr's model quantitatively to hydrogen's discrete line spectra via E_n = −13.6/n² eV.",
              keywords: ["−13.6/n²", "-13.6/n²", "spectral wavelengths"],
            },
            {
              point: "States a genuine limitation of the Bohr model (fails for multi-electron atoms, cannot explain line intensities, fine structure, or classical trajectory assumption).",
              keywords: ["multi-electron", "intensities", "fine-structure", "trajectories"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Chronological mention of Thomson, Rutherford, and Bohr with minimal linkage to experimental anomalies." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear evidence-driven progression through Rutherford scattering and line spectra to Bohr quantization, missing either quantitative precision or a clear limitation." },
            { band: "5", marks: [5, 5], descriptor: "Comprehensive, cohesive synthesis linking each experimental anomaly to its theoretical leap, plus an accurate limitation of the Bohr model." },
          ],
          hints: [
            "Trace the chain: Thomson → Rutherford (evidence: α-backscattering) → Bohr (evidence: stability & line spectra).",
            "Include Bohr's exact angular momentum and energy-level relations.",
            "Finish with why quantum mechanics eventually replaced Bohr's circular orbits (e.g. helium/multi-electron atoms, line intensities).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: E.2 Photoelectric Effect, Compton Scattering & Matter Waves (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "e1-atom-quantum-p2",
      title: "Paper 2 · Photoelectric Effect, Compton & Matter Waves (HL)",
      level: "HL",
      questions: [
        {
          id: "e1-atom-quantum-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Calculate",
          question:
            "Caesium has a photoelectric work function of Φ = 2.14 eV. Calculate its threshold wavelength {{λ_0}} in nm to 3 significant figures. (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 581, tolerance: 3, display: "581 nm" },
          solution: [
            "Convert work function to joules: {{Φ = 2.14 * 1.60 * 10^(-19) = 3.424 * 10^(-19)}} J.",
            "Use {{Φ = hc / λ_0}}: {{λ_0 = (6.63 * 10^(-34) * 3.00 * 10^8) / (3.424 * 10^(-19)) = 5.81 * 10^(-7)}} m = 581 nm.",
          ],
          hints: [
            "At threshold, {{hc / λ_0 = Φ}}.",
            "Convert 2.14 eV to joules before dividing into hc.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Calculate",
          question:
            "Ultraviolet light of wavelength 200 nm illuminates a clean platinum surface (Φ = 5.65 eV). Calculate the maximum kinetic energy {{E_(k,max)}} of the emitted photoelectrons in eV to 2 decimal places. (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 0.57, tolerance: 0.03, display: "0.57 eV" },
          solution: [
            "Photon energy: {{E = hc/λ = (6.63 * 10^(-34) * 3.00 * 10^8) / (200 * 10^(-9)) = 9.945 * 10^(-19)}} J.",
            "Convert to eV: {{E = (9.945 * 10^(-19)) / (1.60 * 10^(-19)) = 6.22}} eV.",
            "Subtract work function: {{E_(k,max) = 6.22 - 5.65 = 0.57}} eV.",
          ],
          hints: [
            "Find the energy of a 200 nm photon in joules, then convert to eV.",
            "Apply {{E_(k,max) = hf - Φ}}.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q03",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Explain",
          marks: 4,
          question:
            "Explain how Einstein's photon theory accounts for four key experimental observations of the photoelectric effect that cannot be explained by the classical wave model of light.",
          modelAnswer:
            "First, a sharp threshold frequency f₀ exists below which no intensity frees electrons, because each electron absorbs a single photon and needs hf ≥ Φ to escape. Second, emission is instantaneous above f₀ even in very dim light, because energy arrives in localized packets rather than spreading slowly over a wavefront. Third, maximum kinetic energy increases linearly with frequency (E_k,max = hf − Φ) rather than with intensity, because frequency alone fixes each photon's energy. Fourth, raising intensity at fixed frequency above f₀ increases the photocurrent proportionally without changing E_k,max, because more identical photons arrive per second and eject more electrons per second.",
          markScheme: [
            {
              point: "Threshold frequency f₀: single photon must supply at least Φ (hf ≥ Φ); classical waves predict emission at any frequency if bright enough.",
              keywords: ["threshold frequency", "hf ≥ φ", "single photon"],
            },
            {
              point: "Instantaneous emission: localized one-to-one quantum transfer needs no soaking/accumulation time.",
              keywords: ["instantaneous", "localized", "wavefront"],
            },
            {
              point: "E_k,max depends linearly on frequency (E_k,max = hf − Φ), not on intensity.",
              keywords: ["linearly", "hf − φ", "hf - φ"],
            },
            {
              point: "Intensity controls photon arrival rate per second, increasing photocurrent without changing E_k,max.",
              keywords: ["photocurrent", "photons arrive per second", "more electrons"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions 1–2 observations accurately or lists facts without connecting them to the single-photon interaction mechanism." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains all four observations (f₀, instant emission, E_k,max vs f, photocurrent vs intensity) via discrete one-to-one photon absorption." },
          ],
          hints: [
            "Cover all four pillars: (1) threshold f₀, (2) instant release, (3) E_k,max vs f, (4) photocurrent vs intensity.",
            "Keep returning to the core mechanism: one photon of energy hf transfers all its energy to one electron.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Determine",
          question:
            "In a Millikan photoelectric investigation, the stopping potential is 0.85 V at frequency {{7.50 * 10^(14)}} Hz and 2.51 V at {{1.15 * 10^(15)}} Hz. Determine the experimental value of Planck's constant *h* from this data, expressed as {{X * 10^(-34)}} J s (enter *X* to 2 decimal places; use {{e = 1.60 * 10^(-19)}} C).",
          answer: { type: "number", value: 6.64, tolerance: 0.04 },
          traps: [
            { spec: { type: "number", value: 4.15, tolerance: 0.04 }, feedback: "4.15 × 10⁻¹⁵ V s is the gradient h/e — multiply by e = 1.60 × 10⁻¹⁹ C to get h!" },
          ],
          solution: [
            "Find the gradient of the {{V_s}} vs *f* graph: {{m = ΔV_s / Δf = (2.51 - 0.85) / (1.15 * 10^(15) - 7.50 * 10^(14)) = 1.66 / (4.00 * 10^(14)) = 4.15 * 10^(-15)}} V s.",
            "Since {{V_s = (h/e) f - Φ/e}}, the gradient equals {{h/e}}.",
            "Multiply by *e*: {{h = 4.15 * 10^(-15) * 1.60 * 10^(-19) = 6.64 * 10^(-34)}} J s, so X = 6.64.",
          ],
          hints: [
            "Compute the slope {{ΔV_s / Δf}} using the two data points.",
            "Remember the slope of {{V_s}} vs f is {{h/e}}, NOT h!",
          ],
          commonError: "Forgetting to multiply the gradient of a V_s–f graph by the elementary charge e.",
        },
        {
          id: "e1-atom-quantum-p2-q05",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Describe",
          marks: 3,
          question:
            "Describe how the stopping potential {{V_s}} is determined using a vacuum photocell circuit, and explain why the current falls gradually to zero rather than dropping off suddenly as the opposing voltage is increased.",
          modelAnswer:
            "A variable reverse (opposing) potential difference is applied so the collector anode is negative relative to the illuminated metal cathode, repelling emitted electrons back toward the cathode. The reverse voltage is increased smoothly until the microammeter reads exactly zero current; that voltage is the stopping potential V_s, where eV_s = E_k,max stops even the fastest electrons. The current decreases gradually instead of abruptly because emitted photoelectrons emerge with a continuous range of kinetic energies from 0 up to E_k,max (deeper electrons lose energy in collisions while escaping), so progressively higher reverse voltages turn back successively faster electrons.",
          markScheme: [
            {
              point: "Apply a reverse/opposing potential difference making the collector negative relative to the emitter so photoelectrons are repelled.",
              keywords: ["reverse", "negative", "repelling"],
            },
            {
              point: "Increase the reverse voltage until the ammeter reads zero current (V_s stops the most energetic electrons, eV_s = E_k,max).",
              keywords: ["zero current", "fastest", "microammeter"],
            },
            {
              point: "Current drops gradually because electrons leave with a spread/range of kinetic energies (0 to E_k,max) as deeper electrons lose energy in collisions.",
              keywords: ["range of kinetic energies", "deeper", "collisions"],
            },
          ],
          hints: [
            "Which electrode is made negative to oppose electron motion?",
            "What ammeter reading defines the exact value of {{V_s}}?",
            "Why are slower electrons stopped before faster ones?",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Calculate",
          question:
            "An X-ray photon of initial wavelength 0.0600 nm undergoes Compton scattering through θ = 120° off a free electron. Using {{h/(m_e c) = 0.00243}} nm, calculate the wavelength of the scattered photon in nm to 4 decimal places.",
          answer: { type: "number", value: 0.0636, tolerance: 0.0002, display: "0.0636 nm" },
          traps: [
            { spec: { type: "number", value: 0.0612, tolerance: 0.0002 }, feedback: "Watch the sign of cos 120° = −0.5! So 1 − cos 120° = 1 − (−0.5) = 1.5, not 0.5." },
          ],
          solution: [
            "Evaluate {{1 - cos 120° = 1 - (-0.5) = 1.50}}.",
            "Compute shift: {{Δλ = 0.00243 * 1.50 = 0.003645}} nm.",
            "Add to initial wavelength: {{λ_f = 0.0600 + 0.003645 = 0.0636}} nm.",
          ],
          hints: [
            "Check the sign of cos 120° (obtuse angle → negative cosine!).",
            "Add Δλ to 0.0600 nm because the scattered photon always has a LONGER wavelength.",
          ],
          commonError: "Taking cos 120° = +0.5 instead of −0.5.",
        },
        {
          id: "e1-atom-quantum-p2-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Calculate",
          question:
            "An X-ray photon of wavelength 0.0400 nm is Compton-scattered straight backward (θ = 180°, so {{λ_f = 0.04486}} nm) off a stationary free electron. Calculate the kinetic energy gained by the recoiling electron in keV to 2 decimal places. (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 3.37, tolerance: 0.05, display: "3.37 keV" },
          solution: [
            "Initial photon energy: {{E_i = hc / λ_i = (1.989 * 10^(-25)) / (4.00 * 10^(-11)) = 4.973 * 10^(-15)}} J = 31.08 keV.",
            "Scattered photon energy: {{E_f = hc / λ_f = (1.989 * 10^(-25)) / (4.486 * 10^(-11)) = 4.434 * 10^(-15)}} J = 27.71 keV.",
            "By energy conservation, recoil electron kinetic energy is {{E_k = E_i - E_f = 31.08 - 27.71 = 3.37}} keV.",
          ],
          hints: [
            "Find the incident photon energy {{hc/λ_i}} and scattered photon energy {{hc/λ_f}}.",
            "Subtract them and convert from joules to keV (divide by {{1.60 * 10^(-16)}}).",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q08",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "photoelectric-compton-hl",
          commandTerm: "Explain",
          marks: 3,
          question:
            "Explain how Compton scattering proves that electromagnetic radiation carries linear momentum, and explain why the Compton effect is easily detected with X-rays yet negligible for visible light.",
          modelAnswer:
            "Classical wave theory predicts that an incident wave drives a free electron to oscillate and re-radiate at the exact same wavelength (Δλ = 0). The observed angle-dependent wavelength increase Δλ = (h/m_e c)(1 − cos θ) can only be derived by treating the interaction as an elastic particle collision conserving both relativistic energy and momentum, establishing photon momentum p = h/λ. Because the maximum shift is fixed at ~4.86 pm regardless of λ_i, the fractional shift Δλ/λ_i is several percent for X-rays (~0.1 nm) but only ~10⁻⁵ for visible light (~500 nm), making it negligible optically.",
          markScheme: [
            {
              point: "Classical wave theory predicts no wavelength change (Δλ = 0) upon scattering.",
              keywords: ["same wavelength", "δλ = 0", "re-radiate"],
            },
            {
              point: "Explaining the angle-dependent shift Δλ requires conserving both energy and linear momentum with photon momentum p = h/λ.",
              keywords: ["p = h/λ", "conserving", "particle collision"],
            },
            {
              point: "Since Δλ ~ 2.4 pm is fixed, the fractional shift Δλ/λ_i is significant for short-wavelength X-rays (~0.1 nm) but minuscule (~10⁻⁵) for ~500 nm visible light.",
              keywords: ["fractional", "500 nm", "2.4 pm", "4.86 pm"],
            },
          ],
          hints: [
            "Contrast classical scattering (no frequency change) with the quantum collision derivation.",
            "Mention photon momentum {{p = h/λ}} explicitly.",
            "Compare the fixed ~2.4 pm Compton shift against ~0.1 nm X-rays vs ~500 nm visible light.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Calculate",
          question:
            "Electrons are accelerated from rest through a potential difference of 400 V. Calculate their de Broglie wavelength in nm to 3 significant figures. (Use {{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 0.0614, tolerance: 0.0006, display: "0.0614 nm" },
          solution: [
            "Use {{λ = h / sqrt(2 m_e e V)}}.",
            "Compute momentum: {{p = sqrt(2 * 9.11 * 10^(-31) * 1.60 * 10^(-19) * 400) = 1.080 * 10^(-23)}} kg m s⁻¹.",
            "Evaluate wavelength: {{λ = (6.63 * 10^(-34)) / (1.080 * 10^(-23)) = 6.14 * 10^(-11)}} m = 0.0614 nm.",
          ],
          hints: [
            "Find kinetic energy {{E_k = eV}} in joules, then {{p = sqrt(2 m_e E_k)}}.",
            "Divide Planck's constant h by p, then multiply by {{10^9}} to convert metres to nm.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q10",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Calculate",
          question:
            "A thermal neutron of mass {{1.67 * 10^(-27)}} kg travels at 2200 m s⁻¹. Calculate its de Broglie wavelength in nm to 3 significant figures. (Use {{h = 6.63 * 10^(-34)}} J s.)",
          answer: { type: "number", value: 0.18, tolerance: 0.003, display: "0.180 nm" },
          solution: [
            "Compute momentum: {{p = mv = 1.67 * 10^(-27) * 2200 = 3.674 * 10^(-24)}} kg m s⁻¹.",
            "Apply {{λ = h/p}}: {{λ = (6.63 * 10^(-34)) / (3.674 * 10^(-24)) = 1.80 * 10^(-10)}} m = 0.180 nm.",
          ],
          hints: [
            "Calculate linear momentum {{p = mv}} directly.",
            "Use {{λ = h/p}} and convert metres to nanometres (× 10⁹).",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Explain",
          marks: 4,
          question:
            "Describe the pattern seen on the fluorescent screen when fast electrons pass through thin polycrystalline graphite, explain how this demonstrates wave behaviour, and predict and explain the effect of increasing the accelerating potential difference *V*.",
          modelAnswer:
            "A bright central spot surrounded by concentric bright and dark circular rings appears on the phosphor screen. The carbon crystal planes have regular interatomic spacings (~0.2 nm) comparable to the electrons' de Broglie wavelength, so electrons undergo wave diffraction and constructive/destructive interference; random crystal orientations around the beam axis produce circular rings rather than isolated spots. Increasing the accelerating voltage V increases electron kinetic energy and momentum p = √(2meV), which shortens the de Broglie wavelength λ = h/p. Since diffraction angles obey sin θ ∝ λ/d, a smaller λ reduces θ and causes the concentric rings to shrink inward toward the centre.",
          markScheme: [
            {
              point: "Concentric bright and dark circular rings appear around a central bright spot.",
              keywords: ["concentric", "rings", "central"],
            },
            {
              point: "Diffraction/interference occurs because the electron de Broglie wavelength is comparable to graphite's interatomic plane spacing (with randomly oriented microcrystals forming rings).",
              keywords: ["interatomic", "interference", "randomly oriented", "crystal planes"],
            },
            {
              point: "Increasing V raises momentum p = √(2meV) and decreases de Broglie wavelength λ = h/p.",
              keywords: ["shortens", "momentum", "√(2mev)", "h/p"],
            },
            {
              point: "Smaller λ decreases diffraction angle (sin θ ∝ λ/d), so the rings shrink/contract in diameter.",
              keywords: ["shrink", "contract", "reduces θ"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes rings or states rings shrink without clear quantitative link to λ = h/√(2meV) and atomic lattice spacing." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurate description of concentric rings, clear lattice-interference explanation, and full causal chain V ↑ → p ↑ → λ ↓ → θ ↓ → rings shrink." },
          ],
          hints: [
            "Describe the exact visual geometry on the screen (not just 'fringes').",
            "Explain BOTH why diffraction happens (λ ~ lattice spacing) AND why it forms rings (polycrystalline grains).",
            "Trace the causal chain V ↑ → p ↑ → λ ↓ → ring radius ↓.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Derive",
          marks: 3,
          question:
            "Show how de Broglie's matter-wave hypothesis leads directly to Bohr's orbital angular momentum quantization rule, and explain why non-integer quantum numbers *n* cannot form stable atomic states.",
          modelAnswer:
            "For an electron wave wrapped around a circular orbit of radius r to persist as a closed standing wave, an exact integer number of de Broglie wavelengths must fit around the circumference: 2πr = nλ (n = 1, 2, 3, …). Substituting de Broglie's relation λ = h/(mv) gives 2πr = nh/(mv), which rearranges immediately to Bohr's condition mvr = nh/(2π). If n were not an integer, the wave would fail to join in phase after each full orbit and would cancel itself out through destructive interference.",
          markScheme: [
            {
              point: "States the circular standing-wave circumference condition 2πr = nλ for integer n.",
              keywords: ["2πr = nλ", "circumference", "standing wave"],
            },
            {
              point: "Substitutes λ = h/(mv) and rearranges algebraically to mvr = nh/(2π).",
              keywords: ["h/(mv)", "mvr = nh/(2π)", "nh/(2π)"],
            },
            {
              point: "Non-integer wavelengths are out of phase on successive laps and cancel via destructive interference.",
              keywords: ["destructive interference", "out of phase", "cancel"],
            },
          ],
          hints: [
            "Start with the circumference {{2π r}} equal to an integer multiple of λ.",
            "Replace λ with {{h/(mv)}} and solve for {{mvr}}.",
            "Think about wave superposition when the ends of a wave loop do not meet smoothly.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q13",
          kind: "short",
          level: "HL",
          difficulty: "core",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Calculate",
          question:
            "An electron microscope requires electrons with a de Broglie wavelength of 0.0100 nm ({{1.00 * 10^(-11)}} m). Calculate the non-relativistic accelerating potential difference *V* required, in kV to 3 significant figures. (Use {{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C.)",
          answer: { type: "number", value: 15.1, tolerance: 0.2, display: "15.1 kV" },
          solution: [
            "Find required momentum: {{p = h/λ = (6.63 * 10^(-34)) / (1.00 * 10^(-11)) = 6.63 * 10^(-23)}} kg m s⁻¹.",
            "Find kinetic energy: {{E_k = p^2 / (2 m_e) = (6.63 * 10^(-23))^2 / (2 * 9.11 * 10^(-31)) = 2.413 * 10^(-15)}} J.",
            "Solve {{eV = E_k}}: {{V = (2.413 * 10^(-15)) / (1.60 * 10^(-19)) = 1.51 * 10^4}} V = 15.1 kV.",
          ],
          hints: [
            "First find momentum {{p = h/λ}}, then kinetic energy {{E_k = p^2 / (2 m_e)}}.",
            "Divide {{E_k}} by e to get volts, then divide by 1000 for kilovolts.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "core",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Explain",
          marks: 3,
          question:
            "Explain what is meant by wave–particle duality using experimental examples for light and for single electrons passing through a double slit.",
          modelAnswer:
            "Wave–particle duality means that both electromagnetic radiation and matter exhibit wave-like propagation and interference as well as localized particle-like energy and momentum exchanges. Light behaves as a wave in Young's double-slit interference (forming bright and dark fringes) yet acts as discrete photons in the photoelectric effect and Compton scattering. When electrons are fired one by one through a double slit, each arrives as a single localized spot on the detector (particle behaviour), yet thousands of detections accumulate into an interference fringe pattern governed by wave superposition.",
          markScheme: [
            {
              point: "Defines duality: both radiation and matter display wave-like propagation/interference and particle-like localized energy/momentum transfers.",
              keywords: ["propagation", "localized", "both"],
            },
            {
              point: "Light examples: double-slit/diffraction (wave) versus photoelectric effect or Compton scattering (particle/photons).",
              keywords: ["young's", "photoelectric", "compton", "photons"],
            },
            {
              point: "Single-electron double slit: each click lands as a localized dot (particle), while accumulated hits build interference fringes (wave).",
              keywords: ["one by one", "localized spot", "fringe pattern", "accumulate"],
            },
          ],
          hints: [
            "Include BOTH sides for light (one wave experiment, one particle experiment).",
            "For single electrons through a double slit, explicitly distinguish one individual arrival from the long-run pattern.",
          ],
        },
        {
          id: "e1-atom-quantum-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          guideRef: "wave-particle-duality-hl",
          commandTerm: "Evaluate",
          marks: 6,
          question:
            "Evaluate how the photoelectric effect, Compton scattering, and electron diffraction overturned classical physics, stating the defining equation and decisive experimental signature for each phenomenon.",
          modelAnswer:
            "Classical physics strictly separated continuous electromagnetic waves from localized material particles, yet three landmark discoveries unified them into quantum duality. First, the photoelectric effect obeyed Einstein's relation E_k,max = hf − Φ = eV_s: its decisive signatures — a sharp threshold frequency f₀, instantaneous release even in faint light, and stopping potential independent of intensity — proved light transfers energy in discrete quanta rather than smoothly over wavefronts. Second, Compton scattering followed Δλ = (h/m_e c)(1 − cos θ): observing scattered X-rays shift to longer wavelengths strictly as a function of angle θ proved massless photons carry linear momentum p = h/λ like colliding billiard balls, refuting classical constant-wavelength re-radiation. Third, electron diffraction (Davisson–Germer and thin graphite) obeyed de Broglie's wavelength λ = h/p = h/√(2meV): observing concentric interference rings that shrink when accelerating voltage rises proved solid matter particles propagate and interfere like waves. Collectively, these three experiments established that wave and particle descriptions are complementary aspects of every quantum entity, with wave behaviour governing propagation and quantum packets governing interaction and detection.",
          markScheme: [
            {
              point: "Photoelectric equation E_k,max = hf − Φ = eV_s accurately stated.",
              keywords: ["hf − φ", "hf - φ", "evs"],
            },
            {
              point: "Photoelectric signature (threshold f₀, instant emission, or V_s independent of intensity) linked to quantized light energy.",
              keywords: ["threshold frequency", "instantaneous", "discrete quanta"],
            },
            {
              point: "Compton equation Δλ = (h/m_e c)(1 − cos θ) and photon momentum p = h/λ accurately stated.",
              keywords: ["cos θ", "p = h/λ"],
            },
            {
              point: "Compton signature: angle-dependent shift to longer wavelengths refutes classical constant-wavelength scattering.",
              keywords: ["longer wavelengths", "billiard", "angle"],
            },
            {
              point: "Electron diffraction relation λ = h/p = h/√(2meV) linked to concentric rings shrinking as accelerating voltage rises.",
              keywords: ["√(2mev)", "concentric", "shrink"],
            },
            {
              point: "Synthesis/evaluation: dissolves classical wave/particle split — wave superposition governs propagation while discrete quanta govern interaction/detection.",
              keywords: ["complementary", "propagation", "detection"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes one or two phenomena qualitatively with limited mathematical precision or weak connection to classical failures." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately covers all three phenomena with most equations and signatures, though synthesis or classical contrast is partial." },
            { band: "5–6", marks: [5, 6], descriptor: "Authoritative evaluation giving exact equations, decisive experimental signatures, classical refutations, and a unified synthesis of quantum wave–particle duality." },
          ],
          hints: [
            "Organize cleanly into 3 focused paragraphs (Photoelectric, Compton, Electron Diffraction) + 1 synthesis conclusion.",
            "Give the exact equation AND the killer classical contradiction for all three.",
            "Finish by summarizing when wave behaviour vs particle behaviour manifests.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 IB HL stretch questions — 5 ShortQ + 3 WrittenQ)
  // ===========================================================================
  challenge: [
    {
      id: "e1-atom-quantum-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Calculate",
      question:
        "A clean metal plate exhibits a stopping potential of 1.85 V when illuminated by 300 nm ultraviolet light. If the wavelength is changed to 200 nm, calculate the new stopping potential {{V_2}} in volts to 2 decimal places. (Use {{hc = 1240}} eV nm.)",
      answer: { type: "number", value: 3.92, tolerance: 0.04, display: "3.92 V" },
      traps: [
        { spec: { type: "number", value: 2.78, tolerance: 0.04 }, feedback: "V_s is NOT directly proportional to 1/λ because of the constant work function offset −Φ/e!" },
      ],
      solution: [
        "Method 1 (difference): Subtract the two Einstein equations to cancel Φ: {{e(V_2 - V_1) = hc(1/λ_2 - 1/λ_1)}}.",
        "{{V_2 - 1.85 = 1240 * (1/200 - 1/300) = 1240 / 600 = 2.07}} V.",
        "Therefore {{V_2 = 1.85 + 2.07 = 3.92}} V.",
      ],
      solutions: [
        {
          label: "Via work function Φ",
          steps: [
            "Photon energy at 300 nm: {{E_1 = 1240/300 = 4.133}} eV ⇒ {{Φ = 4.133 - 1.85 = 2.283}} eV.",
            "Photon energy at 200 nm: {{E_2 = 1240/200 = 6.200}} eV ⇒ {{V_2 = 6.200 - 2.283 = 3.92}} V.",
          ],
        },
      ],
      hints: [
        "First find the unknown work function Φ using the 300 nm data (or take the difference between the two wavelengths so Φ cancels!).",
        "Compute {{1240/300}} eV and {{1240/200}} eV.",
        "Remember {{V_2}} increases by more than a simple 3/2 ratio because Φ stays constant.",
      ],
      strategy: "Eliminating an unknown constant (Φ) by subtracting two state equations",
    },
    {
      id: "e1-atom-quantum-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      guideRef: "wave-particle-duality-hl",
      commandTerm: "Calculate",
      question:
        "A hydrogen atom undergoes the Lyman-α transition (*n* = 2 → *n* = 1, releasing a 10.2 eV photon), which then strikes a clean gold plate of work function Φ = 5.10 eV. Calculate the **minimum** de Broglie wavelength of the emitted photoelectrons in nm to 3 significant figures. (Use {{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C.)",
      answer: { type: "number", value: 0.544, tolerance: 0.008, display: "0.544 nm" },
      solution: [
        "Maximum photoelectron kinetic energy: {{E_(k,max) = 10.2 - 5.10 = 5.10}} eV = {{5.10 * 1.60 * 10^(-19) = 8.16 * 10^(-19)}} J.",
        "The shortest wavelength corresponds to the largest momentum: {{p_(max) = sqrt(2 m_e E_(k,max)) = sqrt(2 * 9.11 * 10^(-31) * 8.16 * 10^(-19)) = 1.219 * 10^(-24)}} kg m s⁻¹.",
        "Minimum de Broglie wavelength: {{λ_(min) = h / p_(max) = (6.63 * 10^(-34)) / (1.219 * 10^(-24)) = 5.44 * 10^(-10)}} m = 0.544 nm.",
      ],
      hints: [
        "Find {{E_(k,max)}} of the fastest emitted photoelectrons using Einstein's equation.",
        "Convert {{E_(k,max)}} to joules — why do the FASTEST electrons have the MINIMUM de Broglie wavelength?",
        "Substitute into {{λ = h / sqrt(2 m_e E_(k,max))}}.",
      ],
      strategy: "Chaining Bohr transition → Photoelectric effect → de Broglie wavelength",
    },
    {
      id: "e1-atom-quantum-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Determine",
      question:
        "An X-ray photon loses exactly 10.0% of its initial energy when it undergoes Compton scattering at θ = 90° off a stationary free electron (where Δλ = 2.43 pm). Calculate the initial wavelength {{λ_i}} of the X-ray photon in picometres (enter the numerical value to 3 significant figures).",
      answer: { type: "number", value: 21.9, tolerance: 0.2 },
      traps: [
        { spec: { type: "number", value: 24.3, tolerance: 0.2 }, feedback: "Watch the algebra! Losing 10% energy means E_f/E_i = λ_i/λ_f = 0.90, so Δλ/λ_f = 0.10 (meaning λ_f = 24.3 pm, so λ_i = 24.3 − 2.43 = 21.9 pm)!" },
      ],
      solution: [
        "Since the photon loses 10.0% of its energy, {{E_f = 0.90 E_i}}.",
        "Using {{E = hc/λ}}: {{λ_i / λ_f = 0.90}} ⇒ {{λ_f = (10/9) λ_i}}.",
        "Therefore {{Δλ = λ_f - λ_i = (1/9) λ_i}} ⇒ {{λ_i = 9 * Δλ = 9 * 2.43 = 21.87 ≈ 21.9}} pm.",
      ],
      hints: [
        "Translate 'loses 10% of its energy' into a ratio {{E_f / E_i = 0.90}}.",
        "Convert {{E_f / E_i}} into a wavelength ratio {{λ_i / λ_f = 0.90}}.",
        "Substitute {{λ_f = λ_i + 2.43}} pm and solve for {{λ_i}}.",
      ],
      commonError: "Setting Δλ/λ_i = 0.10 (which gives λ_f = 24.3 pm instead of λ_i = 21.9 pm).",
    },
    {
      id: "e1-atom-quantum-ch-q04",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Derive",
      marks: 5,
      question:
        "Monochromatic light of total radiant power *P* and wavelength λ (< {{λ_0}}) strikes a photocathode where a fixed fraction η of incident photons eject an electron. Derive an expression for the saturation photocurrent {{I_(max)}} in terms of *P*, λ, η, *h*, *c*, and *e*, and explain why reducing λ at constant power *P* raises {{V_s}} yet lowers {{I_(max)}}.",
      modelAnswer:
        "Each photon carries energy E = hc/λ, so the number of photons arriving per second is N/t = P / (hc/λ) = Pλ/(hc). Because a fraction η of photons liberate an electron, the electron emission rate is ηPλ/(hc). Multiplying by elementary charge e gives the saturation photocurrent I_max = ηePλ/(hc). If λ is decreased while total power P remains constant, each photon carries greater energy hc/λ, so E_k,max = hc/λ − Φ and stopping potential V_s both increase. Simultaneously, fewer high-energy photons are required each second to deliver the same fixed power P (since I_max ∝ λ), causing the saturation photocurrent to decrease.",
      markScheme: [
        {
          point: "Expresses photon arrival rate per second as N/t = P / (hc/λ) = Pλ/(hc).",
          keywords: ["pλ/(hc)", "arriving per second", "hc/λ"],
        },
        {
          point: "Includes quantum efficiency η to get electron emission rate ηPλ/(hc).",
          keywords: ["ηpλ/(hc)", "emission rate"],
        },
        {
          point: "Multiplies by elementary charge e to obtain I_max = ηePλ/(hc).",
          keywords: ["ηepλ/(hc)", "elementary charge"],
        },
        {
          point: "Shorter λ increases individual photon energy hc/λ, thereby increasing E_k,max and stopping potential V_s.",
          keywords: ["greater energy", "both increase", "e_k,max"],
        },
        {
          point: "At fixed power P, higher energy per photon means fewer photons arrive per second, reducing I_max.",
          keywords: ["fewer", "same fixed power", "i_max ∝ λ"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–2", marks: [1, 2], descriptor: "Partial derivation of photon rate or qualitative prediction of V_s without reconciling constant power P." },
        { band: "3–4", marks: [3, 4], descriptor: "Correct derivation of I_max or solid constant-power explanation, with one minor algebraic or logical gap." },
        { band: "5", marks: [5, 5], descriptor: "Exact algebraic derivation I_max = ηePλ/(hc) combined with crisp physical reasoning linking constant power to fewer photons/sec and higher V_s." },
      ],
      hints: [
        "Start from total power {{P = (N/t) * (hc/λ)}} and solve for photon rate N/t.",
        "Multiply by η (electrons per photon) and by charge e (coulombs per electron) to get current.",
        "Examine how your formula for {{I_(max)}} depends on λ when P is held constant!",
      ],
    },
    {
      id: "e1-atom-quantum-ch-q05",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      guideRef: "nuclear-radius-bohr-hl",
      commandTerm: "Determine",
      question:
        "High-energy electron diffraction reveals that an unknown nuclide has a nuclear radius 50.0% larger than that of oxygen-16 (*A* = 16). Determine the nucleon number *A* of the unknown nuclide.",
      answer: { type: "number", value: 54 },
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "Radius is NOT linear in A: cubing the radius ratio 1.5 gives 1.5³ = 3.375, so A = 16 × 3.375!" },
      ],
      solution: [
        "A 50% larger radius means {{R / R_O = 1.5 = 3/2}}.",
        "From {{R = R_0 A^(1/3)}}, cube both sides: {{A / 16 = (3/2)^3 = 27/8}}.",
        "Multiply by 16: {{A = 16 * (27/8) = 54}}.",
      ],
      hints: [
        "Translate '50.0% larger' into the ratio {{R / R_O = 3/2}}.",
        "Since {{R ∝ A^(1/3)}}, solve {{(A/16)^(1/3) = 3/2}} by cubing both sides.",
      ],
    },
    {
      id: "e1-atom-quantum-ch-q06",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      guideRef: "nuclear-radius-bohr-hl",
      commandTerm: "Estimate",
      question:
        "Estimate the minimum initial kinetic energy, in MeV (to 3 significant figures), required for a head-on α-particle (+2*e*) to just reach the surface of a stationary lead-208 nucleus (*Z* = 82, nuclear radius *R* = 7.11 fm), neglecting the α-particle's own radius. (Use {{k = 8.99 * 10^9}} N m² C⁻² and {{e = 1.60 * 10^(-19)}} C.)",
      answer: { type: "number", value: 33.2, tolerance: 0.4, display: "33.2 MeV" },
      solution: [
        "Set initial kinetic energy equal to electrostatic potential energy at distance d = R = 7.11 fm: {{E_k = k(2e)(82e)/R}}.",
        "Divide by one factor of *e* to compute directly in eV: {{E_k = (8.99 * 10^9 * 164 * 1.60 * 10^(-19)) / (7.11 * 10^(-15)) = 3.32 * 10^7}} eV.",
        "Convert to MeV: {{E_k = 33.2}} MeV.",
      ],
      hints: [
        "At the nuclear surface, the separation is {{d = 7.11 * 10^(-15)}} m.",
        "Calculate {{E_k = k(2e)(82e)/d}} in joules, then divide by {{1.60 * 10^(-13)}} J MeV⁻¹.",
      ],
    },
    {
      id: "e1-atom-quantum-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      guideRef: "photoelectric-compton-hl",
      commandTerm: "Explain",
      marks: 4,
      question:
        "Explain, with reference to conservation laws, why a completely isolated free electron in empty space can scatter a photon (Compton scattering) but CANNOT completely absorb a photon (as happens in the photoelectric effect).",
      modelAnswer:
        "In any isolated interaction, both total energy and total linear momentum must be conserved simultaneously. Suppose a stationary free electron completely absorbed a photon of energy E = pc and momentum p = h/λ, leaving only the moving electron afterward. Conserving momentum requires the electron to gain momentum p, which gives it kinetic energy E_k = p²/(2m_e) (or relativistically √(p²c² + m_e²c⁴) − m_e c²), which is strictly less than pc for any non-zero mass m_e — violating energy conservation! In Compton scattering, a second outgoing photon carries away part of the energy and momentum so both laws can be satisfied; in the photoelectric effect, the massive metal lattice absorbs the leftover recoil momentum while taking negligible kinetic energy.",
      markScheme: [
        {
          point: "Both total energy AND total linear momentum must be conserved simultaneously.",
          keywords: ["simultaneously", "both total energy", "linear momentum"],
        },
        {
          point: "Complete absorption by a free electron cannot satisfy both equations (if p_e = p_photon, the electron's kinetic energy is strictly less than the photon's energy pc).",
          keywords: ["strictly less", "violating", "pc"],
        },
        {
          point: "In Compton scattering, the scattered photon provides an extra degree of freedom so both energy and momentum balance.",
          keywords: ["outgoing photon", "scattered photon", "satisfied"],
        },
        {
          point: "In the photoelectric effect, the bound atom / heavy metal lattice absorbs the excess recoil momentum.",
          keywords: ["lattice", "recoil momentum"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions energy/momentum conservation qualitatively without showing why complete absorption fails." },
        { band: "3–4", marks: [3, 4], descriptor: "Rigorous conservation-law argument contrasting free-electron impossibility with Compton's outgoing photon and the photoelectric lattice recoil." },
      ],
      hints: [
        "Try setting the electron's final momentum equal to the photon's initial momentum {{p = E/c}} — does its kinetic energy match E?",
        "What third body absorbs recoil momentum in the photoelectric effect?",
        "What outgoing body balances momentum in Compton scattering?",
      ],
    },
    {
      id: "e1-atom-quantum-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      guideRef: "wave-particle-duality-hl",
      commandTerm: "Derive",
      marks: 6,
      question:
        "Combine Coulomb's centripetal force law with de Broglie's standing-wave orbit condition {{2π r = n λ}} for a hydrogen atom to show that orbital radius scales as {{r_n ∝ n^2}} and total electron energy scales as {{E_n ∝ -1/n^2}}. Use this scaling to explain why Lyman transitions are ultraviolet while Balmer transitions lie in the visible spectrum.",
      modelAnswer:
        "For circular motion under Coulomb attraction, m_e v²/r = ke²/r², so m_e v²r = ke² and kinetic energy is E_k = (1/2)m_e v² = ke²/(2r). Combining electrostatic potential energy E_p = −ke²/r gives total mechanical energy E = E_k + E_p = −ke²/(2r). From de Broglie's standing-wave condition 2πr = nλ = nh/(m_e v), we obtain Bohr's rule v = nh/(2π m_e r). Substituting v into m_e v²r = ke² yields m_e (n²h²)/(4π² m_e² r²) · r = ke², which solves to r_n = n²h² / (4π² m_e k e²), proving r_n ∝ n². Substituting r_n back into E = −ke²/(2r_n) gives E_n = −(2π² m_e k² e⁴ / h²)(1/n²) = −13.6/n² eV, proving E_n ∝ −1/n². Because levels converge rapidly as 1/n², transitions down to n = 1 (Lyman) span huge gaps (≥ 10.2 eV, λ ≤ 122 nm, ultraviolet), whereas transitions down to n = 2 (Balmer) span smaller gaps (1.89–3.40 eV, 365–656 nm, visible light).",
      markScheme: [
        {
          point: "Sets Coulomb force equal to centripetal force m_e v²/r = ke²/r² to find E_k = ke²/(2r).",
          keywords: ["ke²/r²", "ke²/(2r)", "centripetal"],
        },
        {
          point: "Combines kinetic and electrostatic potential energy (−ke²/r) to obtain total energy E = −ke²/(2r).",
          keywords: ["−ke²/(2r)", "-ke²/(2r)", "potential energy"],
        },
        {
          point: "Uses 2πr = nλ = nh/(m_e v) to express orbital speed v = nh/(2π m_e r).",
          keywords: ["nh/(2π m_e r)", "nh/(m_e v)", "bohr's rule"],
        },
        {
          point: "Substitutes v into the force equation to solve for r_n = n²h²/(4π² m_e k e²), showing r_n ∝ n².",
          keywords: ["4π²", "r_n ∝ n²", "n²h²"],
        },
        {
          point: "Substitutes r_n into total energy E = −ke²/(2r_n) to demonstrate E_n ∝ −1/n² (matching −13.6/n² eV).",
          keywords: ["−1/n²", "-1/n²", "−13.6/n²", "-13.6/n²"],
        },
        {
          point: "Uses rapid 1/n² convergence to contrast large Lyman gaps (≥ 10.2 eV, UV) with smaller Balmer gaps (1.89–3.40 eV, visible).",
          keywords: ["10.2 ev", "1.89", "converge"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        { band: "1–2", marks: [1, 2], descriptor: "States Coulomb force or standing-wave relation without completing either scaling derivation." },
        { band: "3–4", marks: [3, 4], descriptor: "Successfully derives r_n ∝ n² and E_n ∝ −1/n² with minor algebraic slips, or omits quantitative Lyman/Balmer comparison." },
        { band: "5–6", marks: [5, 6], descriptor: "Flawless, transparent derivation of both r_n ∝ n² and E_n ∝ −1/n² plus clear energy-gap explanation of UV Lyman vs visible Balmer series." },
      ],
      hints: [
        "Step 1: Equate {{m_e v^2/r = k e^2/r^2}} to express {{E_k}} and total energy {{E = E_k + E_p}} in terms of r.",
        "Step 2: Use {{2π r = n h/(m_e v)}} to isolate v and substitute into Step 1 to solve for {{r_n}}.",
        "Step 3: Plug {{r_n ∝ n^2}} into {{E = -k e^2/(2r_n)}}, then compare ΔE for n=1 vs n=2.",
      ],
    },
  ],
};
