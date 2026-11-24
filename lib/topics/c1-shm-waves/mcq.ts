import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 — SL Core Foundations (15 MCQs: 0:4, 1:4, 2:4, 3:3)
  // ===========================================================================
  {
    id: "c1-shm-waves-m1",
    title: "MCQ Paper 1 — Core SHM, Waves & EM Spectrum (SL)",
    level: "SL",
    questions: [
      {
        id: "c1-shm-waves-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "shm-foundations",
        strategy: "SHM defining equation",
        question:
          "Which statement correctly describes the acceleration of an object executing Simple Harmonic Motion (SHM)?",
        options: [
          "Directly proportional to displacement and directed towards equilibrium",
          "Inversely proportional to displacement and directed towards equilibrium",
          "Directly proportional to velocity and directed opposite to motion",
          "Constant in magnitude and always directed towards equilibrium",
        ],
        answerIndex: 0,
        hints: [
          "Recall the defining equation of SHM: {{a = -ω^2 x}}.",
          "Both the proportionality to {{x}} and the meaning of the minus sign are essential.",
        ],
        explanation:
          "The defining equation {{a = -ω^2 x}} means acceleration is directly proportional to displacement {{x}} and always directed opposite to {{x}}, i.e. towards the equilibrium position. Constant acceleration (such as free fall) or proportionality to velocity (such as viscous drag) does not produce SHM.",
      },
      {
        id: "c1-shm-waves-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "shm-foundations",
        strategy: "Proportionality scaling",
        question:
          "A mass {{m}} attached to an ideal spring oscillates with period {{T}}. If the mass is replaced by {{4m}} on the same spring, what is the new period?",
        options: ["{{T/2}}", "{{sqrt(2) T}}", "{{2T}}", "{{4T}}"],
        answerIndex: 2,
        hints: [
          "Write the mass–spring period formula from C.1.",
          "Because {{T = 2π sqrt(m/k)}}, how does {{T}} scale with {{m}}?",
        ],
        explanation:
          "Since {{T = 2π sqrt(m/k)}}, we have {{T ∝ sqrt(m)}}. Replacing {{m}} by {{4m}} multiplies the period by {{sqrt(4) = 2}}, giving {{2T}}. Choosing {{4T}} forgets the square root.",
      },
      {
        id: "c1-shm-waves-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "shm-foundations",
        strategy: "Proportionality scaling",
        question:
          "A simple pendulum of length {{l}} and bob mass {{m}} has small-angle period {{T}} on Earth (field strength {{g}}). It is moved to a planet with gravitational field strength {{g/4}} and its bob mass is doubled to {{2m}}. What is its new period?",
        options: ["{{T}}", "{{2T}}", "{{2 sqrt(2) T}}", "{{4T}}"],
        answerIndex: 1,
        hints: [
          "Check which variables appear in {{T = 2π sqrt(l/g)}}.",
          "Does changing the bob mass affect a simple pendulum's period? Now substitute {{g -> g/4}}.",
        ],
        explanation:
          "A simple pendulum's period {{T = 2π sqrt(l/g)}} is independent of bob mass {{m}}. Dividing {{g}} by 4 multiplies {{l/g}} by 4, so the period multiplies by {{sqrt(4) = 2}}, giving {{2T}}. Including {{sqrt(2)}} mistakenly assumes mass affects the pendulum period.",
      },
      {
        id: "c1-shm-waves-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "shm-foundations",
        strategy: "Gradient of a–x graph",
        question:
          "An object executes SHM. Its acceleration–displacement graph is a straight line passing through the origin and the point {{(+0.040 m, -9.0 m s^(-2))}}. What is its angular frequency {{ω}}?",
        options: [
          "{{0.60}} rad s⁻¹",
          "{{3.0}} rad s⁻¹",
          "{{225}} rad s⁻¹",
          "{{15}} rad s⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Use {{a = -ω^2 x}} to find {{ω^2}} first.",
          "Compute {{ω^2 = -a/x = 9.0 / 0.040}}, then remember to take the square root.",
        ],
        explanation:
          "From {{a = -ω^2 x}}, {{ω^2 = 9.0 / 0.040 = 225}} s⁻², so {{ω = sqrt(225) = 15}} rad s⁻¹. Selecting {{225}} rad s⁻¹ is the classic slip of reading the slope magnitude as {{ω}} instead of {{ω^2}}.",
      },
      {
        id: "c1-shm-waves-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "shm-foundations",
        strategy: "Equilibrium vs turning points",
        question:
          "A frictionless horizontal mass–spring oscillator passes through its equilibrium position ({{x = 0}}). Which row correctly describes its kinetic energy and acceleration magnitude at that instant?",
        options: [
          "Kinetic energy: maximum; acceleration magnitude: zero",
          "Kinetic energy: zero; acceleration magnitude: maximum",
          "Kinetic energy: maximum; acceleration magnitude: maximum",
          "Kinetic energy: zero; acceleration magnitude: zero",
        ],
        answerIndex: 0,
        hints: [
          "At {{x = 0}}, substitute into {{a = -ω^2 x}} to find the acceleration.",
          "At equilibrium all mechanical energy is kinetic because potential energy is at its minimum.",
        ],
        explanation:
          "At equilibrium ({{x = 0}}), the restoring force and tangential acceleration {{a = -ω^2 x = 0}} vanish, while speed and kinetic energy reach their maximum values. At the turning points ({{x = ±x_0}}) the roles reverse.",
      },
      {
        id: "c1-shm-waves-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "wave-model-graphs",
        strategy: "Wave classification",
        question:
          "Which statement correctly distinguishes a transverse wave from a longitudinal wave?",
        options: [
          "Transverse waves always travel faster than longitudinal waves",
          "Transverse waves oscillate perpendicular to energy transfer",
          "Transverse waves transfer matter along the direction of motion",
          "Transverse waves require an elastic medium in order to propagate",
        ],
        answerIndex: 1,
        hints: [
          "Compare the direction of oscillation relative to the direction of wave propagation.",
          "Remember that all electromagnetic waves are transverse and travel through vacuum.",
        ],
        explanation:
          "In a transverse wave, oscillations occur perpendicular to the direction of energy transfer, whereas in a longitudinal wave they occur parallel to it. Neither type produces net matter transfer, and EM transverse waves do not require a medium.",
      },
      {
        id: "c1-shm-waves-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "wave-model-graphs",
        strategy: "Wave equation v = fλ",
        question:
          "A sound wave of frequency {{680}} Hz travels through air at a speed of {{340}} m s⁻¹. What is the wavelength of the sound wave?",
        options: ["{{0.25}} m", "{{2.0}} m", "{{0.50}} m", "{{1.5}} m"],
        answerIndex: 2,
        hints: [
          "Rearrange the wave equation {{v = fλ}} for {{λ}}.",
          "Divide wave speed by frequency: {{λ = 340 / 680}}.",
        ],
        explanation:
          "Using {{v = fλ}}, we get {{λ = v/f = 340 / 680 = 0.50}} m. Selecting {{2.0}} m comes from inverting the ratio as {{f/v}}.",
      },
      {
        id: "c1-shm-waves-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "wave-model-graphs",
        strategy: "String wave speed",
        question:
          "A taut string with linear mass density {{μ = 5.0 * 10^(-3)}} kg m⁻¹ is held at a tension of {{72}} N. What is the speed of transverse waves along the string?",
        options: [
          "{{120}} m s⁻¹",
          "{{60}} m s⁻¹",
          "{{144}} m s⁻¹",
          "{{240}} m s⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "Recall {{v = sqrt(F_T / μ)}} for transverse waves on a string.",
          "Evaluate {{72 / (5.0 * 10^(-3)) = 14400}}, then take the square root.",
        ],
        explanation:
          "Using {{v = sqrt(F_T / μ) = sqrt(72 / 0.0050) = sqrt(14400) = 120}} m s⁻¹. Dividing by {{0.0050}} is equivalent to multiplying by {{200}}, and forgetting to take the exact root leads to {{144}} m s⁻¹.",
      },
      {
        id: "c1-shm-waves-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "wave-model-graphs",
        strategy: "Boundary invariance of frequency",
        question:
          "A surface water wave travels from deep water into shallow water, where its speed decreases. How do its frequency and wavelength change?",
        options: [
          "Frequency decreases and wavelength stays constant",
          "Frequency increases and wavelength decreases",
          "Frequency stays constant and wavelength increases",
          "Frequency stays constant and wavelength decreases",
        ],
        answerIndex: 3,
        hints: [
          "Which wave quantity is fixed solely by the source and never changes at a boundary?",
          "With {{f}} constant in {{v = fλ}}, what happens to {{λ}} when {{v}} decreases?",
        ],
        explanation:
          "When any wave enters a new medium, its frequency {{f}} stays constant because it is set by the source. Since {{v = fλ}} and speed {{v}} decreases in shallow water, the wavelength {{λ = v/f}} must decrease in the same proportion.",
      },
      {
        id: "c1-shm-waves-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "wave-model-graphs",
        strategy: "Reading displacement–distance graphs",
        question:
          "On a displacement–distance snapshot of a travelling wave, a crest is located at {{x = 0.20}} m and the adjacent trough is at {{x = 0.50}} m. If the wave frequency is {{10}} Hz, what is the wave speed?",
        options: [
          "{{3.0}} m s⁻¹",
          "{{6.0}} m s⁻¹",
          "{{12}} m s⁻¹",
          "{{1.5}} m s⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "What fraction of a full wavelength separates a crest from the very next trough?",
          "Find {{λ}} from {{1/2 λ = 0.50 - 0.20}}, then multiply by {{f = 10}} Hz.",
        ],
        explanation:
          "A crest to the adjacent trough spans half a wavelength: {{λ/2 = 0.50 - 0.20 = 0.30}} m, so {{λ = 0.60}} m. Therefore {{v = fλ = 10 * 0.60 = 6.0}} m s⁻¹. Obtaining {{3.0}} m s⁻¹ mistakes the crest-to-trough distance for a full wavelength.",
      },
      {
        id: "c1-shm-waves-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "em-spectrum-intensity",
        strategy: "EM spectrum ordering",
        question:
          "Which list orders regions of the electromagnetic spectrum by **increasing frequency**?",
        options: [
          "Gamma rays, X-rays, ultraviolet, visible light",
          "Infrared, microwave, visible light, ultraviolet",
          "Microwave, infrared, visible light, ultraviolet",
          "Radio waves, ultraviolet, infrared, microwaves",
        ],
        answerIndex: 2,
        hints: [
          "Increasing frequency corresponds to decreasing wavelength ({{f = c/λ}}).",
          "Recall the sequence: Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma.",
        ],
        explanation:
          "From lowest to highest frequency (longest to shortest wavelength), the sequence is radio, microwave, infrared, visible, ultraviolet, X-rays, and gamma rays. Thus microwave → infrared → visible → ultraviolet increases monotonically in frequency.",
      },
      {
        id: "c1-shm-waves-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "em-spectrum-intensity",
        strategy: "EM frequency and band lookup",
        question:
          "An electromagnetic wave travels in a vacuum with wavelength {{600}} nm ({{6.00 * 10^(-7)}} m). Take {{c = 3.00 * 10^8}} m s⁻¹. What are its frequency and EM region?",
        options: [
          "{{5.0 * 10^14}} Hz, ultraviolet region",
          "{{2.0 * 10^15}} Hz, visible region",
          "{{5.0 * 10^13}} Hz, infrared region",
          "{{5.0 * 10^14}} Hz, visible region",
        ],
        answerIndex: 3,
        hints: [
          "Calculate {{f = c/λ = (3.00 * 10^8)/(6.00 * 10^(-7))}}.",
          "Visible light spans 400 nm (violet) to 700 nm (red).",
        ],
        explanation:
          "{{f = (3.00 * 10^8)/(6.00 * 10^(-7)) = 5.00 * 10^14}} Hz. Because {{600}} nm lies between {{400}} nm and {{700}} nm, it falls squarely inside the visible region (orange light).",
      },
      {
        id: "c1-shm-waves-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "em-spectrum-intensity",
        strategy: "Inverse-square law",
        question:
          "An isotropic point source emits waves with intensity {{I_0}} at distance {{r}}. Assuming no absorption, what is the intensity at distance {{4r}}?",
        options: ["{{I_0 / 16}}", "{{I_0 / 8}}", "{{I_0 / 4}}", "{{I_0 / 2}}"],
        answerIndex: 0,
        hints: [
          "Intensity from a point isotropic source satisfies {{I = P / (4π r^2)}}.",
          "Squaring the distance factor of 4 gives the reduction factor for intensity.",
        ],
        explanation:
          "By the inverse-square law {{I ∝ 1/r^2}}, multiplying the distance by 4 spreads the power over {{4^2 = 16}} times the spherical surface area, reducing intensity to {{I_0 / 16}}.",
      },
      {
        id: "c1-shm-waves-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "em-spectrum-intensity",
        strategy: "Intensity–amplitude scaling",
        question:
          "Two waves of identical frequency travel in the same medium. Wave Y has three times the amplitude of Wave X ({{A_Y = 3 A_X}}). What is the intensity ratio {{I_Y / I_X}}?",
        options: ["{{3}}", "{{6}}", "{{9}}", "{{1/9}}"],
        answerIndex: 2,
        hints: [
          "Recall how wave intensity depends on amplitude.",
          "Square the amplitude ratio: {{I_Y / I_X = (A_Y / A_X)^2}}.",
        ],
        explanation:
          "Because wave intensity is proportional to amplitude squared ({{I ∝ A^2}}), tripling the amplitude increases intensity by a factor of {{3^2 = 9}}.",
      },
      {
        id: "c1-shm-waves-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "em-spectrum-intensity",
        strategy: "Combining I ∝ 1/r² and I ∝ A²",
        question:
          "An isotropic point source produces waves of amplitude {{A_0}} at distance {{r}} in a non-absorbing medium. What is the wave amplitude at distance {{3r}}?",
        options: [
          "{{A_0 / 9}}",
          "{{A_0 / 3}}",
          "{{A_0 / sqrt(3)}}",
          "{{3 A_0}}",
        ],
        answerIndex: 1,
        hints: [
          "First find by what factor the intensity drops when distance triples.",
          "Now apply {{I ∝ A^2}} (so {{A ∝ sqrt(I)}}) to find the amplitude factor.",
        ],
        explanation:
          "Tripling distance reduces intensity by {{3^2 = 9}} (since {{I ∝ 1/r^2}}). Because {{I ∝ A^2}}, amplitude scales as {{sqrt(I) ∝ 1/r}}, so amplitude becomes {{A_0 / sqrt(9) = A_0 / 3}}. Choosing {{A_0 / 9}} confuses amplitude with intensity.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 — Mixed SL Core & HL SHM (15 MCQs: 0:4, 1:3, 2:4, 3:4)
  // ===========================================================================
  {
    id: "c1-shm-waves-m2",
    title: "MCQ Paper 2 — Oscillators, Wave Graphs & HL SHM",
    level: "SL",
    questions: [
      {
        id: "c1-shm-waves-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "shm-foundations",
        strategy: "Identifying invariants in T = 2π√(m/k)",
        question:
          "A mass–spring system oscillates vertically on Earth ({{g = 9.8}} m s⁻²) with period {{1.6}} s. It is transported to the Moon ({{g = 1.6}} m s⁻²) and released with twice its original amplitude. What is its new period?",
        options: ["{{0.65}} s", "{{3.2}} s", "{{1.6}} s", "{{4.0}} s"],
        answerIndex: 2,
        hints: [
          "Write down the period formula for a mass–spring system.",
          "Check whether either {{g}} or amplitude {{x_0}} appears in {{T = 2π sqrt(m/k)}}.",
        ],
        explanation:
          "For a mass–spring oscillator, {{T = 2π sqrt(m/k)}} depends only on mass and spring stiffness—neither gravity {{g}} nor amplitude {{x_0}} affects it. Weaker lunar gravity merely reduces the static equilibrium extension, leaving the period unchanged at {{1.6}} s.",
      },
      {
        id: "c1-shm-waves-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "shm-foundations",
        strategy: "Angular frequency from cycle count",
        question:
          "A {{0.40}} kg mass on a spring completes {{20}} full oscillations in {{10.0}} s. What is its angular frequency {{ω}}?",
        options: [
          "{{12.6}} rad s⁻¹",
          "{{6.28}} rad s⁻¹",
          "{{3.14}} rad s⁻¹",
          "{{2.00}} rad s⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "Find the frequency {{f = N / t}} first.",
          "Convert frequency to angular frequency using {{ω = 2πf}}.",
        ],
        explanation:
          "The frequency is {{f = 20 / 10.0 = 2.00}} Hz, so the angular frequency is {{ω = 2πf = 4π ≈ 12.6}} rad s⁻¹. Selecting {{2.00}} rad s⁻¹ forgets the factor of {{2π}}.",
      },
      {
        id: "c1-shm-waves-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "shm-foundations",
        strategy: "Testing the SHM condition",
        question:
          "A perfectly elastic ball bounces repeatedly to the same height on a hard horizontal floor. Why is its vertical motion **not** Simple Harmonic Motion?",
        options: [
          "Its gravitational potential energy remains constant throughout the bounce",
          "Its velocity never changes sign at the turning points of the motion",
          "Its total mechanical energy drops to zero at the lowest point of contact",
          "Its acceleration is constant in flight rather than proportional to displacement",
        ],
        answerIndex: 3,
        hints: [
          "What is the ball's acceleration while moving freely through the air?",
          "Compare constant gravitational acceleration with the SHM condition {{a = -ω^2 x}}.",
        ],
        explanation:
          "Although the bouncing ball is periodic, while airborne its acceleration is constant ({{-g}}) rather than proportional to displacement from an equilibrium point. SHM strictly requires {{a = -ω^2 x}} throughout the entire cycle.",
      },
      {
        id: "c1-shm-waves-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Velocity–displacement equation",
        question:
          "A particle executes SHM with amplitude {{x_0 = 0.10}} m and angular frequency {{ω = 8.0}} rad s⁻¹. What is its speed when its displacement is {{x = 0.060}} m?",
        options: [
          "{{0.48}} m s⁻¹",
          "{{0.64}} m s⁻¹",
          "{{0.80}} m s⁻¹",
          "{{0.32}} m s⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Use the HL velocity–displacement equation {{v = ±ω sqrt(x_0^2 - x^2)}}.",
          "Recognise the 3–4–5 triangle: {{sqrt(0.10^2 - 0.060^2) = 0.080}} m.",
        ],
        explanation:
          "{{|v| = ω sqrt(x_0^2 - x^2) = 8.0 * sqrt(0.10^2 - 0.060^2) = 8.0 * 0.080 = 0.64}} m s⁻¹. Getting {{0.80}} m s⁻¹ computes the maximum speed at equilibrium instead of at {{x = 0.060}} m, while {{0.32}} m s⁻¹ mistakenly uses {{ω(x_0 - x)}} without squaring.",
      },
      {
        id: "c1-shm-waves-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "shm-equations-hl",
        strategy: "Phase difference between x and v",
        question:
          "Which statement accurately describes the phase relationship between velocity {{v}} and displacement {{x}} in SHM?",
        options: [
          "Velocity and displacement are always in phase (phase difference 0)",
          "Velocity is in antiphase with displacement (phase difference π rad)",
          "Velocity leads displacement by a quarter cycle (phase difference π/2 rad)",
          "Velocity lags displacement by a quarter cycle (phase difference π/2 rad)",
        ],
        answerIndex: 2,
        hints: [
          "Compare {{x = x_0 sin(ωt)}} and {{v = ω x_0 cos(ωt)}}.",
          "Recall the identity {{cos(θ) = sin(θ + π/2)}}: does {{v}} peak before or after {{x}}?",
        ],
        explanation:
          "Since {{x = x_0 sin(ωt)}} and {{v = ω x_0 cos(ωt) = ω x_0 sin(ωt + π/2)}}, velocity reaches its positive peak a quarter period ({{T/4}}) **before** displacement does—so velocity leads displacement by {{π/2}} rad. It is acceleration that is in antiphase ({{π}} rad) with displacement.",
      },
      {
        id: "c1-shm-waves-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Energy fraction E_p/E_T = (x/x_0)²",
        question:
          "An SHM oscillator has total mechanical energy {{E_T = 0.80}} J and amplitude {{x_0}}. What is its kinetic energy {{E_k}} when its displacement is {{x = x_0 / 2}}?",
        options: ["{{0.20}} J", "{{0.40}} J", "{{0.57}} J", "{{0.60}} J"],
        answerIndex: 3,
        hints: [
          "First find the fraction of total energy stored as potential energy: {{E_p / E_T = (x / x_0)^2}}.",
          "Subtract {{E_p}} from {{E_T}} to obtain {{E_k}}.",
        ],
        explanation:
          "At {{x = x_0/2}}, potential energy is {{E_p = (1/2)^2 E_T = 1/4(0.80) = 0.20}} J. Therefore kinetic energy is {{E_k = E_T - E_p = 0.80 - 0.20 = 0.60}} J. Choosing {{0.40}} J falls for the misconception that energy splits 50–50 at half amplitude.",
      },
      {
        id: "c1-shm-waves-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Reading ω and x₀ from x(t)",
        question:
          "The displacement of an SHM oscillator (in metres) varies with time {{t}} (in seconds) as {{x(t) = 0.040 cos(10t)}}. What is the magnitude of its maximum acceleration?",
        options: [
          "{{4.0}} m s⁻²",
          "{{0.40}} m s⁻²",
          "{{40}} m s⁻²",
          "{{2.0}} m s⁻²",
        ],
        answerIndex: 0,
        hints: [
          "Read {{x_0}} and {{ω}} directly from {{x(t) = x_0 cos(ωt)}}.",
          "Evaluate {{|a_max| = ω^2 x_0}}.",
        ],
        explanation:
          "Comparing with {{x_0 cos(ωt)}} gives {{x_0 = 0.040}} m and {{ω = 10}} rad s⁻¹. Thus {{|a_max| = ω^2 x_0 = 10^2 * 0.040 = 4.0}} m s⁻². Obtaining {{0.40}} m s⁻² computes {{v_max = ω x_0}} instead of {{a_max}}.",
      },
      {
        id: "c1-shm-waves-m2-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "shm-equations-hl",
        strategy: "Frequency of energy oscillations",
        question:
          "A mass on a spring executes SHM with frequency {{f = 3.0}} Hz. How many times per second does its kinetic energy reach a maximum?",
        options: ["{{3.0}} s⁻¹", "{{6.0}} s⁻¹", "{{1.5}} s⁻¹", "{{12}} s⁻¹"],
        answerIndex: 1,
        hints: [
          "Where in each oscillation cycle does kinetic energy reach a maximum?",
          "How many times does the mass pass through equilibrium during ONE complete oscillation?",
        ],
        explanation:
          "The oscillator passes through equilibrium ({{x = 0}}) **twice** in every full cycle—once moving right and once moving left—so {{E_k}} peaks at frequency {{2f = 6.0}} s⁻¹ (mathematically, {{cos^2(ωt) = 1/2(1 + cos(2ωt))}}).",
      },
      {
        id: "c1-shm-waves-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "wave-model-graphs",
        strategy: "Longitudinal y–x graph decoding",
        question:
          "A longitudinal sound wave travels to the right. Taking displacements to the right as positive, where is a **compression** located on a displacement–distance graph?",
        options: [
          "At a maximum positive displacement peak (zero gradient)",
          "At a maximum negative displacement trough (zero gradient)",
          "At zero displacement where the graph has a positive gradient",
          "At zero displacement where the graph has a negative gradient",
        ],
        answerIndex: 3,
        hints: [
          "For particles to crowd together at point P, which way must particles immediately to the left and right of P be displaced?",
          "Left particles must shift right ({{y > 0}}) and right particles must shift left ({{y < 0}}). What is the gradient of {{y}} vs {{x}} across P?",
        ],
        explanation:
          "At a zero crossing with a **negative gradient**, particles just to the left have positive displacement (shifted right) while particles just to the right have negative displacement (shifted left). Both sides crowd inwards onto the crossing, creating maximum density—a compression. A positive-gradient zero crossing produces a rarefaction.",
      },
      {
        id: "c1-shm-waves-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "wave-model-graphs",
        strategy: "Nudging a wave snapshot forward",
        question:
          "A sinusoidal transverse wave travels in the {{+x}} direction along a rope. At {{t = 0}}, particle P sits at equilibrium ({{y = 0}}) where the displacement–distance graph slopes downwards (negative gradient). In which direction is particle P moving at {{t = 0}}?",
        options: [
          "Downwards in the negative y-direction",
          "To the right in the positive x-direction",
          "Upwards in the positive y-direction",
          "Instantaneously at rest with zero velocity",
        ],
        answerIndex: 2,
        hints: [
          "Because the slope at P is negative, there is a crest immediately to the LEFT of P and a trough to the RIGHT.",
          "Nudge the whole wave slightly to the right (the travel direction): does the curve at P's x-position move up or down?",
        ],
        explanation:
          "Where the snapshot slopes downwards at {{y = 0}}, a crest lies immediately to the left of P. As the wave moves right, that crest shifts onto P's position, lifting particle P **upwards** in the {{+y}} direction. Remember particles in a transverse wave never travel along {{+x}}.",
      },
      {
        id: "c1-shm-waves-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "wave-model-graphs",
        strategy: "Proportionality in v = √(F_T/μ)",
        question:
          "Transverse waves travel along a wire at speed {{v_0}}. If the wire is replaced with one of half the linear mass density ({{μ/2}}) and the tension is doubled ({{2 F_T}}), what is the new wave speed?",
        options: ["{{2 v_0}}", "{{4 v_0}}", "{{sqrt(2) v_0}}", "{{v_0}}"],
        answerIndex: 0,
        hints: [
          "Use {{v = sqrt(F_T / μ)}}.",
          "Substitute {{2 F_T}} for {{F_T}} and {{μ/2}} for {{μ}} inside the square root.",
        ],
        explanation:
          "{{v' = sqrt((2 F_T) / (μ/2)) = sqrt(4 F_T / μ) = 2 sqrt(F_T / μ) = 2 v_0}}. Choosing {{v_0}} mistakenly assumes the two factors of 2 cancel instead of multiplying to 4 inside the radical.",
      },
      {
        id: "c1-shm-waves-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "wave-model-graphs",
        strategy: "Period from y–t graph + wave equation",
        question:
          "A displacement–time graph for one particle in a travelling wave shows {{5}} complete cycles in {{0.025}} s. If the wave travels at {{400}} m s⁻¹, what is its wavelength?",
        options: ["{{0.50}} m", "{{10}} m", "{{1.0}} m", "{{2.0}} m"],
        answerIndex: 3,
        hints: [
          "Compute the period {{T = 0.025 / 5}} s (or frequency {{f = 5 / 0.025}} Hz).",
          "Apply {{λ = v T = v / f}}.",
        ],
        explanation:
          "The frequency is {{f = 5 / 0.025 = 200}} Hz (period {{T = 0.0050}} s). Hence {{λ = v/f = 400 / 200 = 2.0}} m. Obtaining {{10}} m forgets to divide {{0.025}} s by 5 cycles.",
      },
      {
        id: "c1-shm-waves-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "em-spectrum-intensity",
        strategy: "EM spectrum overlap",
        question:
          "X-rays and gamma rays overlap in wavelength around {{10^(-11)}} m. What physically distinguishes them?",
        options: [
          "Gamma rays travel faster in a vacuum than X-rays do",
          "Gamma rays originate from atomic nuclei whereas X-rays do not",
          "X-rays are longitudinal waves whereas gamma rays are transverse",
          "X-rays cannot be polarised whereas gamma rays can be polarised",
        ],
        answerIndex: 1,
        hints: [
          "Both X-rays and gamma rays are transverse electromagnetic waves travelling at {{c}} in vacuum.",
          "Think about what emits each type of radiation: atomic electrons vs nuclear transitions.",
        ],
        explanation:
          "All EM waves are transverse, polarisable, and travel at {{c}} in vacuum. Where X-rays and gamma rays overlap in wavelength, they are distinguished purely by **origin**: gamma rays are emitted by excited atomic nuclei, while X-rays come from decelerating fast electrons or inner-shell atomic transitions.",
      },
      {
        id: "c1-shm-waves-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "em-spectrum-intensity",
        strategy: "SI prefixes in c = fλ",
        question:
          "An FM radio station broadcasts at {{100}} MHz ({{1.00 * 10^8}} Hz). What is the wavelength of these waves in a vacuum ({{c = 3.00 * 10^8}} m s⁻¹)?",
        options: [
          "{{3.00}} m",
          "{{0.333}} m",
          "{{30.0}} m",
          "{{3.00 * 10^(-2)}} m",
        ],
        answerIndex: 0,
        hints: [
          "Convert {{100}} MHz to Hz: {{100 * 10^6 = 1.00 * 10^8}} Hz.",
          "Compute {{λ = c / f}}.",
        ],
        explanation:
          "{{λ = c/f = (3.00 * 10^8)/(1.00 * 10^8) = 3.00}} m, which sits comfortably inside the radio wave band ({{> 0.1}} m).",
      },
      {
        id: "c1-shm-waves-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "em-spectrum-intensity",
        strategy: "Inverse-square ratio method",
        question:
          "At a distance of {{2.0}} m from an isotropic point source, a detector measures intensity {{90}} W m⁻². At what distance from the source will the detector measure {{10}} W m⁻²?",
        options: ["{{18}} m", "{{4.5}} m", "{{6.0}} m", "{{3.0}} m"],
        answerIndex: 2,
        hints: [
          "Use the ratio {{I_2 / I_1 = (r_1 / r_2)^2}}.",
          "Intensity drops by a factor of {{90/10 = 9}}, so by what factor must distance increase?",
        ],
        explanation:
          "Since {{I_2 / I_1 = 10/90 = 1/9 = (r_1/r_2)^2}}, taking the square root gives {{r_2 / r_1 = sqrt(9) = 3}}. Thus {{r_2 = 3 * 2.0 = 6.0}} m. Selecting {{18}} m forgets to take the square root of 9.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 — HL Quantitative SHM & Synthesis (15 MCQs: 0:3, 1:4, 2:4, 3:4)
  // ===========================================================================
  {
    id: "c1-shm-waves-m3",
    title: "MCQ Paper 3 — HL Quantitative SHM, Phase & Wave Synthesis",
    level: "HL",
    questions: [
      {
        id: "c1-shm-waves-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "shm-equations-hl",
        strategy: "Energy proportionality scaling",
        question:
          "An SHM oscillator of fixed mass {{m}} has total mechanical energy {{E_0}}. Both its amplitude {{x_0}} and its angular frequency {{ω}} are doubled. What is its new total energy?",
        options: ["{{4 E_0}}", "{{16 E_0}}", "{{8 E_0}}", "{{2 E_0}}"],
        answerIndex: 1,
        hints: [
          "Write the HL total energy equation {{E_T = 1/2 m ω^2 x_0^2}}.",
          "Each of {{ω}} and {{x_0}} is squared, so each doubling multiplies {{E_T}} by 4.",
        ],
        explanation:
          "From {{E_T = 1/2 m ω^2 x_0^2}}, doubling {{ω}} multiplies {{E_T}} by {{2^2 = 4}} and doubling {{x_0}} multiplies it by another {{2^2 = 4}}, giving {{4 * 4 = 16 E_0}}.",
      },
      {
        id: "c1-shm-waves-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "shm-equations-hl",
        strategy: "Setting E_p = E_k = ½E_T",
        question:
          "At what displacement magnitude {{|x|}} (in terms of amplitude {{x_0}}) does an SHM oscillator have equal kinetic and potential energies?",
        options: [
          "{{x_0 / 4}}",
          "{{x_0 / 2}}",
          "{{sqrt(3) x_0 / 2}}",
          "{{x_0 / sqrt(2)}}",
        ],
        answerIndex: 3,
        hints: [
          "When {{E_k = E_p}}, each equals {{1/2 E_T}}.",
          "Solve {{1/2 m ω^2 x^2 = 1/2 (1/2 m ω^2 x_0^2)}} for {{|x|}}.",
        ],
        explanation:
          "Setting {{E_p = 1/2 E_T}} gives {{(x / x_0)^2 = 1/2}}, so {{|x| = x_0 / sqrt(2) ≈ 0.707 x_0}}. Half amplitude ({{x_0/2}}) gives {{E_p = 1/4 E_T}}, not {{1/2 E_T}}.",
      },
      {
        id: "c1-shm-waves-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Phase difference Δφ = 2π(Δt/T)",
        question:
          "Two SHM oscillators P and Q both have period {{T = 0.80}} s. Oscillator Q reaches its positive maximum displacement {{0.20}} s after oscillator P. What is the phase difference between P and Q?",
        options: [
          "{{π/4}} rad",
          "{{π}} rad",
          "{{π/2}} rad",
          "{{2π}} rad",
        ],
        answerIndex: 2,
        hints: [
          "Find what fraction of a full period {{0.20}} s represents.",
          "Multiply that fraction by {{2π}} rad using {{Δφ = 2π (Δt / T)}}.",
        ],
        explanation:
          "The time delay is {{Δt / T = 0.20 / 0.80 = 1/4}} of a period, so the phase difference is {{Δφ = 2π(1/4) = π/2}} rad ({{90°}}).",
      },
      {
        id: "c1-shm-waves-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "shm-equations-hl",
        strategy: "Initial conditions & differentiation",
        question:
          "A particle is released from rest at maximum positive displacement {{x = +x_0}} at {{t = 0}} and executes SHM with angular frequency {{ω}}. Which equation gives its velocity {{v(t)}}?",
        options: [
          "{{-ω x_0 sin(ωt)}}",
          "{{+ω x_0 sin(ωt)}}",
          "{{+ω x_0 cos(ωt)}}",
          "{{-ω x_0 cos(ωt)}}",
        ],
        answerIndex: 0,
        hints: [
          "When {{x(0) = +x_0}} and {{v(0) = 0}}, displacement is {{x(t) = x_0 cos(ωt)}}.",
          "Just after {{t = 0}}, the particle moves from {{+x_0}} back towards zero, so {{v}} must be negative.",
        ],
        explanation:
          "Releasing from rest at {{+x_0}} gives {{x(t) = x_0 cos(ωt)}}. Differentiating yields {{v(t) = dx/dt = -ω x_0 sin(ωt)}}, which is zero at {{t = 0}} and immediately negative as the particle accelerates towards equilibrium.",
      },
      {
        id: "c1-shm-waves-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Computing E_T from f, m and x₀",
        question:
          "A {{0.50}} kg block executes SHM with amplitude {{0.080}} m and frequency {{2.5}} Hz. What is its total mechanical energy?",
        options: ["{{0.197}} J", "{{0.790}} J", "{{4.93}} J", "{{0.395}} J"],
        answerIndex: 3,
        hints: [
          "First convert frequency {{f = 2.5}} Hz to angular frequency {{ω = 2πf = 5π}} rad s⁻¹.",
          "Substitute into {{E_T = 1/2 m ω^2 x_0^2}}.",
        ],
        explanation:
          "{{ω = 2π(2.5) = 5π}} rad s⁻¹, so {{E_T = 1/2 (0.50)(5π)^2 (0.080)^2 = 0.25 * 25π^2 * 0.0064 = 0.04π^2 ≈ 0.395}} J. Getting {{4.93}} J forgets to square the amplitude {{0.080}} m.",
      },
      {
        id: "c1-shm-waves-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Eliminating ω via v / v_max",
        question:
          "An SHM oscillator has maximum speed {{v_max = 0.50}} m s⁻¹. At displacement {{x = 0.030}} m, its speed is {{0.40}} m s⁻¹. What is its amplitude {{x_0}}?",
        options: ["{{0.040}} m", "{{0.050}} m", "{{0.060}} m", "{{0.075}} m"],
        answerIndex: 1,
        hints: [
          "Divide {{v = ω sqrt(x_0^2 - x^2)}} by {{v_max = ω x_0}} to cancel {{ω}}.",
          "Solve {{0.40 / 0.50 = sqrt(1 - (x/x_0)^2)}} for {{x_0}}.",
        ],
        explanation:
          "Dividing {{v / v_max = sqrt(1 - (x/x_0)^2) = 0.40/0.50 = 4/5}} gives {{1 - (x/x_0)^2 = 16/25}}, so {{x/x_0 = 3/5}}. With {{x = 0.030}} m, {{x_0 = (5/3)(0.030) = 0.050}} m.",
      },
      {
        id: "c1-shm-waves-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "shm-equations-hl",
        strategy: "Linking E_k/E_T to (v/v_max)²",
        question:
          "At a certain instant in SHM, an oscillator's potential energy is {{0.36 E_T}}, where {{E_T}} is its total energy. What is the ratio of its speed {{v}} to its maximum speed {{v_max}}?",
        options: ["{{0.36}}", "{{0.64}}", "{{0.80}}", "{{0.60}}"],
        answerIndex: 2,
        hints: [
          "Use conservation of energy {{E_k = E_T - E_p}} to find {{E_k / E_T}}.",
          "Since {{E_k = 1/2 m v^2}} and {{E_T = 1/2 m v_max^2}}, relate {{v/v_max}} to {{sqrt(E_k / E_T)}}.",
        ],
        explanation:
          "Conservation of energy gives {{E_k = E_T - 0.36 E_T = 0.64 E_T}}. Since {{E_k / E_T = (v / v_max)^2}}, taking the square root yields {{v / v_max = sqrt(0.64) = 0.80}}. Choosing {{0.60}} finds {{|x|/x_0}} rather than {{v/v_max}}.",
      },
      {
        id: "c1-shm-waves-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "shm-equations-hl",
        strategy: "Reading E–t SHM graphs",
        question:
          "For an undamped SHM oscillator with displacement {{x(t) = x_0 sin(ωt)}}, which statement about its energy–time graph over one complete period {{T}} is correct?",
        options: [
          "Kinetic energy reaches one maximum and one minimum during time T",
          "Potential energy reaches its maximum at t = 0 and again at t = T",
          "Total mechanical energy oscillates smoothly between 0 and ½mω²x₀²",
          "Kinetic and potential energy curves intersect four times during time T",
        ],
        answerIndex: 3,
        hints: [
          "Remember {{E_p ∝ sin^2(ωt)}} and {{E_k ∝ cos^2(ωt)}} both oscillate at frequency {{2f}}.",
          "Find how many solutions {{sin^2(ωt) = cos^2(ωt)}} has in {{0 <= t < T}}.",
        ],
        explanation:
          "Over one period {{T}}, both {{E_k}} and {{E_p}} complete **two** full oscillations, crossing each other at {{t = T/8, 3T/8, 5T/8, 7T/8}}—four intersections in total (where {{E_k = E_p = 1/2 E_T}}). Total energy remains constant throughout.",
      },
      {
        id: "c1-shm-waves-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "shm-equations-hl",
        strategy: "Non-uniform speed in SHM (phase angle)",
        question:
          "A mass on a spring oscillates in SHM with amplitude {{x_0}} and period {{T}}. Released from rest at {{x = +x_0}} at {{t = 0}}, what is the shortest time taken to reach {{x = +x_0 / 2}}?",
        options: ["{{T/6}}", "{{T/8}}", "{{T/12}}", "{{T/4}}"],
        answerIndex: 0,
        hints: [
          "Use {{x(t) = x_0 cos(ωt)}} with {{ω = 2π/T}}.",
          "Solve {{cos(2πt / T) = 1/2}} for the smallest positive time {{t}}.",
        ],
        explanation:
          "Setting {{x_0 cos(2πt/T) = x_0/2}} gives {{cos(2πt/T) = 1/2}}, whose first positive solution is {{2πt/T = π/3}}, so {{t = T/6}}. Selecting {{T/8}} mistakenly assumes constant speed; the mass starts slowly from rest near {{+x_0}} so the first half of the distance takes {{T/6}} while the faster second half takes only {{T/12}}.",
      },
      {
        id: "c1-shm-waves-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "shm-foundations",
        strategy: "Series vs parallel effective spring constant",
        question:
          "Two identical springs of constant {{k}} connected in **parallel** carry mass {{m}} with period {{T_p}}. The same two springs connected in **series** carry the same mass {{m}} with period {{T_s}}. What is the ratio {{T_s / T_p}}?",
        options: ["{{sqrt(2)}}", "{{1/2}}", "{{2}}", "{{4}}"],
        answerIndex: 2,
        hints: [
          "Find the effective spring constants: parallel gives {{k_p = 2k}} and series gives {{k_s = k/2}}.",
          "Substitute both into {{T = 2π sqrt(m/k_eff)}} and take the ratio {{T_s / T_p}}.",
        ],
        explanation:
          "Two identical springs in parallel have {{k_p = 2k}} whereas in series they have {{k_s = k/2}}, a ratio {{k_p / k_s = 4}}. Since {{T ∝ 1/sqrt(k_eff)}}, {{T_s / T_p = sqrt(k_p / k_s) = sqrt(4) = 2}}.",
      },
      {
        id: "c1-shm-waves-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Suggest",
        guideRef: "shm-foundations",
        strategy: "Applying T = 2π√(l/g) to pendulum clocks",
        question:
          "On a hot day, thermal expansion lengthens the metal rod of a simple-pendulum clock so the clock loses time (runs slowly). Which adjustment restores accurate timekeeping?",
        options: [
          "Increase the mass of the pendulum bob to increase the restoring force",
          "Raise the pendulum bob slightly up the rod to reduce the effective length",
          "Increase the swing amplitude so the bob moves faster through equilibrium",
          "Lower the pendulum bob slightly down the rod to increase the effective length",
        ],
        answerIndex: 1,
        hints: [
          "A clock that loses time has a period {{T}} that is slightly too long.",
          "Check {{T = 2π sqrt(l/g)}}: what must change to shorten {{T}}?",
        ],
        explanation:
          "Because {{T = 2π sqrt(l/g)}}, lengthening the rod increases {{T}} (making ticks occur less frequently so the clock runs slowly). Raising the bob slightly shortens the effective length {{l}}, reducing {{T}} back to its calibrated value. Neither bob mass nor small amplitude changes {{T}}.",
      },
      {
        id: "c1-shm-waves-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "wave-model-graphs",
        strategy: "Two-step string wave calculation",
        question:
          "A string of length {{0.80}} m and mass {{4.0}} g is stretched under a tension of {{50}} N. Waves of frequency {{250}} Hz are sent along the string. What is their wavelength?",
        options: ["{{2.5}} m", "{{0.20}} m", "{{0.80}} m", "{{0.40}} m"],
        answerIndex: 3,
        hints: [
          "Convert mass to kg ({{4.0 * 10^(-3)}} kg) and compute {{μ = m/L}}.",
          "Find {{v = sqrt(F_T / μ)}}, then apply {{λ = v / f}}.",
        ],
        explanation:
          "Linear density {{μ = (4.0 * 10^(-3))/0.80 = 5.0 * 10^(-3)}} kg m⁻¹. Wave speed {{v = sqrt(50 / 0.0050) = sqrt(10000) = 100}} m s⁻¹. Finally, {{λ = v/f = 100 / 250 = 0.40}} m.",
      },
      {
        id: "c1-shm-waves-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "wave-model-graphs",
        strategy: "Wave speed vs maximum particle SHM speed",
        question:
          "A sinusoidal transverse wave has amplitude {{A = 0.020}} m, wavelength {{λ = 0.80}} m, and wave speed {{v = 16}} m s⁻¹. What is the maximum transverse speed of a particle on the string?",
        options: [
          "{{16}} m s⁻¹",
          "{{0.40}} m s⁻¹",
          "{{2.5}} m s⁻¹",
          "{{5.0}} m s⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Find the wave frequency {{f = v / λ}} first.",
          "Each particle executes SHM with amplitude {{A}} and angular frequency {{ω = 2πf}}; compute {{v_max = ω A}}.",
        ],
        explanation:
          "Wave frequency is {{f = v/λ = 16 / 0.80 = 20}} Hz, so each oscillating particle has {{ω = 2πf = 40π}} rad s⁻¹. Its maximum SHM speed is {{v_max = ω A = 40π * 0.020 = 0.80π ≈ 2.5}} m s⁻¹—distinct from the {{16}} m s⁻¹ wave propagation speed!",
      },
      {
        id: "c1-shm-waves-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "em-spectrum-intensity",
        strategy: "Simultaneous power and distance scaling",
        question:
          "Point source 1 of power {{P_1}} sits at distance {{d}} from a sensor, giving intensity {{I}}. Point source 2 of power {{P_2 = 9 P_1}} is placed at distance {{3d}} from the sensor. What intensity does source 2 produce on its own?",
        options: ["{{3I}}", "{{I}}", "{{I / 3}}", "{{9I}}"],
        answerIndex: 1,
        hints: [
          "Write {{I = P / (4π r^2)}} for both sources.",
          "Compare {{P_2 / r_2^2 = (9 P_1) / (3d)^2}} with {{P_1 / d^2}}.",
        ],
        explanation:
          "{{I_2 = (9 P_1) / (4π (3d)^2) = (9 P_1) / (9 * 4π d^2) = P_1 / (4π d^2) = I}}. The 9-fold increase in power cancels the {{3^2 = 9}}-fold geometric spreading.",
      },
      {
        id: "c1-shm-waves-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "em-spectrum-intensity",
        strategy: "Equal amplitude implies equal intensity",
        question:
          "Two isotropic point sources X and Y emit waves of identical frequency into the same non-absorbing medium. At a detector {{2.0}} m from X and {{6.0}} m from Y, the waves from X and Y arrive with **equal amplitude**. What is the power ratio {{P_Y / P_X}}?",
        options: ["{{9}}", "{{3}}", "{{81}}", "{{1/9}}"],
        answerIndex: 0,
        hints: [
          "If two identical-frequency waves in the same medium arrive with equal amplitude, how do their intensities compare?",
          "Set {{P_X / (4π r_X^2) = P_Y / (4π r_Y^2)}} and solve for {{P_Y / P_X}}.",
        ],
        explanation:
          "Equal amplitude (at the same frequency and medium) implies equal intensity at the detector ({{I_X = I_Y}}). Therefore {{P_Y / P_X = (r_Y / r_X)^2 = (6.0 / 2.0)^2 = 9}}. Choosing {{81}} squares the ratio twice.",
      },
    ],
  },
];
