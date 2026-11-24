import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 Qs: 6 short + 4 balanced MCQs)
  // ===========================================================================
  quiz: [
    {
      id: "c1-shm-waves-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "shm-foundations",
      strategy: "Frequency f = N / t",
      question:
        "A mass–spring system completes {{25}} full oscillations in {{5.0}} s. Calculate its frequency {{f}} in Hz.",
      answer: { type: "number", value: 5, tolerance: 0.05, display: "5 Hz" },
      traps: [
        {
          spec: { type: "number", value: 0.2, tolerance: 0.01 },
          feedback: "That is the period T = 5.0/25 = 0.20 s; frequency is f = N/t = 1/T.",
        },
      ],
      hints: [
        "Frequency is the number of oscillations per second: {{f = N / t}}.",
      ],
      solution: [
        "{{f = N / t = 25 / 5.0 = 5.0}} Hz.",
      ],
      commonError: "Calculating period T = t/N instead of frequency f = N/t.",
    },
    {
      id: "c1-shm-waves-quiz-q02",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "shm-foundations",
      strategy: "SHM defining equation a = −ω²x",
      question:
        "A mass executes SHM with angular frequency {{ω = 6.0}} rad s⁻¹. Calculate its acceleration (in m s⁻², including its sign) at displacement {{x = +0.050}} m.",
      answer: { type: "number", value: -1.8, tolerance: 0.02, display: "−1.8 m s⁻²" },
      traps: [
        {
          spec: { type: "number", value: 1.8, tolerance: 0.02 },
          feedback: "Remember the minus sign in a = −ω²x: positive displacement produces negative acceleration.",
        },
        {
          spec: { type: "number", value: -0.3, tolerance: 0.01 },
          feedback: "You must square ω in a = −ω²x (6.0² = 36, not 6.0).",
        },
      ],
      hints: [
        "Substitute directly into the SHM defining equation {{a = -ω^2 x}}.",
        "Square {{ω = 6.0}} first and keep the minus sign.",
      ],
      solution: [
        "{{a = -ω^2 x = -(6.0)^2 (0.050) = -36 * 0.050 = -1.8}} m s⁻².",
      ],
      commonError: "Omitting the negative sign or forgetting to square ω.",
    },
    {
      id: "c1-shm-waves-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "shm-foundations",
      strategy: "Mass–spring period formula",
      question:
        "A block of mass {{0.20}} kg is attached to a spring of spring constant {{k = 20}} N m⁻¹. What is its oscillation period {{T}}?",
      options: ["{{0.63}} s", "{{0.063}} s", "{{6.3}} s", "{{0.10}} s"],
      answerIndex: 0,
      hints: [
        "Use {{T = 2π sqrt(m/k)}}.",
        "Compute {{sqrt(0.20 / 20) = sqrt(0.01) = 0.10}}, then multiply by {{2π}}.",
      ],
      explanation:
        "{{T = 2π sqrt(m/k) = 2π sqrt(0.20/20) = 2π(0.10) = 0.20π ≈ 0.63}} s. Obtaining {{0.10}} s forgets the factor of {{2π}}.",
    },
    {
      id: "c1-shm-waves-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "shm-equations-hl",
      strategy: "Maximum SHM speed v_max = ωx₀",
      question:
        "An SHM oscillator has amplitude {{x_0 = 0.050}} m and angular frequency {{ω = 12}} rad s⁻¹. Calculate its maximum speed {{v_max}} in m s⁻¹.",
      answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 7.2, tolerance: 0.05 },
          feedback: "That is |a_max| = ω²x₀; maximum speed is v_max = ωx₀ (do not square ω).",
        },
      ],
      hints: [
        "Maximum speed occurs at equilibrium ({{x = 0}}).",
        "Evaluate {{v_max = ω x_0}}.",
      ],
      solution: [
        "{{v_max = ω x_0 = 12 * 0.050 = 0.60}} m s⁻¹.",
      ],
    },
    {
      id: "c1-shm-waves-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "shm-equations-hl",
      strategy: "Potential energy ratio E_p / E_T = (x/x₀)²",
      question:
        "At what displacement magnitude {{|x|}} (in terms of amplitude {{x_0}}) is an SHM oscillator's potential energy equal to one-quarter of its total energy ({{E_p = 1/4 E_T}})?",
      options: [
        "{{x_0 / 4}}",
        "{{x_0 / 2}}",
        "{{x_0 / sqrt(2)}}",
        "{{3 x_0 / 4}}",
      ],
      answerIndex: 1,
      hints: [
        "Recall {{E_p / E_T = (x / x_0)^2}}.",
        "Solve {{(x / x_0)^2 = 1/4}} by taking the square root.",
      ],
      explanation:
        "Since {{E_p ∝ x^2}}, setting {{(x / x_0)^2 = 1/4}} yields {{|x| = x_0 / 2}}. Note that {{x_0 / sqrt(2)}} gives {{E_p = 1/2 E_T}}, not {{1/4 E_T}}.",
    },
    {
      id: "c1-shm-waves-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "wave-model-graphs",
      strategy: "Wave equation v = fλ",
      question:
        "A travelling wave has frequency {{40}} Hz and wavelength {{0.25}} m. Calculate its speed {{v}} in m s⁻¹.",
      answer: { type: "number", value: 10, tolerance: 0.05, display: "10 m s⁻¹" },
      hints: ["Multiply frequency and wavelength using {{v = fλ}}."],
      solution: ["{{v = fλ = 40 * 0.25 = 10}} m s⁻¹."],
    },
    {
      id: "c1-shm-waves-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "wave-model-graphs",
      strategy: "String wave speed v = √(F_T/μ)",
      question:
        "A string of linear mass density {{μ = 0.0050}} kg m⁻¹ is stretched to a tension of {{18}} N. Calculate the speed {{v}} of transverse waves on the string in m s⁻¹.",
      answer: { type: "number", value: 60, tolerance: 0.2, display: "60 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 3600, tolerance: 5 },
          feedback: "You found F_T/μ = 3600 m² s⁻² — remember to take the square root!",
        },
      ],
      hints: [
        "Use {{v = sqrt(F_T / μ)}}.",
        "Compute {{18 / 0.0050 = 3600}}, then take the square root.",
      ],
      solution: [
        "{{v = sqrt(F_T / μ) = sqrt(18 / 0.0050) = sqrt(3600) = 60}} m s⁻¹.",
      ],
    },
    {
      id: "c1-shm-waves-quiz-q08",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "wave-model-graphs",
      strategy: "Reading y–t vs y–x wave graphs",
      question:
        "Which quantity can be read **directly** from a single displacement–time graph of one oscillating particle in a travelling wave?",
      options: [
        "The wavelength of the travelling wave",
        "The propagation speed of the wave profile",
        "The time period of the oscillation",
        "The distance between adjacent compressions",
      ],
      answerIndex: 2,
      hints: [
        "The horizontal axis of a displacement–time graph measures time, not space.",
      ],
      explanation:
        "A displacement–time graph tracks one particle over time, so its horizontal peak-to-peak separation gives the time period {{T}} (and hence frequency {{f = 1/T}}). Wavelength and compression spacing require a displacement–distance snapshot.",
    },
    {
      id: "c1-shm-waves-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "em-spectrum-intensity",
      strategy: "Using c = fλ and unit conversion",
      question:
        "A radar beam has frequency {{1.50 * 10^10}} Hz in vacuum ({{c = 3.00 * 10^8}} m s⁻¹). Calculate its wavelength in **centimetres** (cm).",
      answer: { type: "number", value: 2, tolerance: 0.02, display: "2.0 cm" },
      traps: [
        {
          spec: { type: "number", value: 0.02, tolerance: 0.001 },
          feedback: "That is the wavelength in metres (0.020 m) — multiply by 100 to convert to cm.",
        },
      ],
      hints: [
        "Find {{λ = c / f}} in metres first.",
        "Convert metres to centimetres by multiplying by {{100}}.",
      ],
      solution: [
        "{{λ = c / f = (3.00 * 10^8) / (1.50 * 10^10) = 0.020}} m.",
        "In centimetres: {{0.020 * 100 = 2.0}} cm.",
      ],
    },
    {
      id: "c1-shm-waves-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Predict",
      guideRef: "em-spectrum-intensity",
      strategy: "Intensity–amplitude squared law",
      question:
        "If the amplitude of a wave is doubled while its frequency and medium stay unchanged, how does its intensity change?",
      options: [
        "It decreases to half its original value",
        "It remains unchanged at its original value",
        "It increases to twice its original value",
        "It increases to four times its original value",
      ],
      answerIndex: 3,
      hints: [
        "Recall the proportionality linking wave intensity {{I}} and amplitude {{A}}.",
        "Because {{I ∝ A^2}}, doubling {{A}} scales {{I}} by {{2^2}}.",
      ],
      explanation:
        "Wave intensity is proportional to amplitude squared ({{I ∝ A^2}}), so doubling the amplitude increases intensity by a factor of {{2^2 = 4}}.",
    },
  ],

  // ===========================================================================
  // STRUCTURED IB PRACTICE PAPERS (p1 & p2, 15 Qs each)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1 — Core IB SL/HL Structured Questions (9 short + 6 written)
    // -------------------------------------------------------------------------
    {
      id: "c1-shm-waves-p1",
      title: "Practice Paper 1 — Structured Core IB Questions (SL)",
      level: "SL",
      questions: [
        {
          id: "c1-shm-waves-p1-q01",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "shm-foundations",
          strategy: "Two-clause IB definition of SHM",
          marks: 2,
          question: "Define Simple Harmonic Motion (SHM).",
          hints: [
            "An IB 2-mark definition needs two distinct facts about acceleration.",
            "State both how the magnitude of acceleration depends on displacement AND which way it points.",
          ],
          modelAnswer:
            "Oscillatory motion in which the acceleration is directly proportional to the displacement from a fixed equilibrium position, and is always directed towards that equilibrium position (opposite in direction to displacement, {{a = -ω^2 x}}).",
          markScheme: [
            {
              point: "Acceleration is directly proportional to displacement from a fixed equilibrium position.",
              keywords: ["proportional", "directly proportional"],
            },
            {
              point: "Acceleration is always directed towards the equilibrium position (opposite to displacement).",
              keywords: ["towards", "opposite", "fixed point", "equilibrium"],
            },
          ],
          commonError: "Omitting 'directed towards equilibrium' or writing 'velocity' instead of 'acceleration'.",
        },
        {
          id: "c1-shm-waves-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "shm-foundations",
          strategy: "Mass–spring period calculation",
          question:
            "A block of mass {{0.80}} kg hangs on a vertical spring of spring constant {{k = 20}} N m⁻¹. Calculate the period {{T}} of vertical SHM in seconds (give your answer to 2 decimal places).",
          answer: { type: "number", value: 1.26, tolerance: 0.02, display: "1.26 s" },
          traps: [
            {
              spec: { type: "number", value: 0.2, tolerance: 0.01 },
              feedback: "You evaluated √(m/k) = 0.20 — don't forget to multiply by 2π!",
            },
            {
              spec: { type: "number", value: 31.4, tolerance: 0.2 },
              feedback: "You inverted the fraction as √(k/m) instead of √(m/k).",
            },
          ],
          hints: [
            "Recall that a vertical spring obeys the same formula {{T = 2π sqrt(m/k)}} as a horizontal spring.",
            "Calculate {{sqrt(0.80 / 20) = sqrt(0.04) = 0.20}}, then multiply by {{2π}}.",
          ],
          solution: [
            "Apply {{T = 2π sqrt(m/k)}}:",
            "{{T = 2π sqrt(0.80 / 20) = 2π sqrt(0.040) = 2π(0.20) = 0.40π ≈ 1.26}} s.",
          ],
        },
        {
          id: "c1-shm-waves-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "shm-foundations",
          strategy: "Gradient of a–x graph → ω → f",
          question:
            "An SHM oscillator has an acceleration–displacement ({{a}}–{{x}}) graph whose straight line has a gradient of {{-64}} s⁻². Calculate the oscillation frequency {{f}} in Hz (give your answer to 2 decimal places).",
          answer: { type: "number", value: 1.27, tolerance: 0.02, display: "1.27 Hz" },
          traps: [
            {
              spec: { type: "number", value: 10.19, tolerance: 0.1 },
              feedback: "The gradient equals −ω², not −ω! Take the square root of 64 before dividing by 2π.",
            },
            {
              spec: { type: "number", value: 0.79, tolerance: 0.02 },
              feedback: "That is the period T = 2π/ω ≈ 0.79 s; frequency is f = ω/(2π).",
            },
          ],
          hints: [
            "Compare {{a = -ω^2 x}} with {{y = mx}} to extract {{ω^2 = 64}} s⁻².",
            "Take the square root to get {{ω = 8.0}} rad s⁻¹, then compute {{f = ω / (2π)}}.",
          ],
          solution: [
            "Gradient {{= -ω^2 = -64}} s⁻² ⇒ {{ω = sqrt(64) = 8.0}} rad s⁻¹.",
            "{{f = ω / (2π) = 8.0 / (2π) = 4/π ≈ 1.27}} Hz.",
          ],
        },
        {
          id: "c1-shm-waves-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "shm-foundations",
          strategy: "Rearranging pendulum formula for g",
          question:
            "An astronaut measures a simple pendulum of length {{l = 0.45}} m on an exoplanet and records a small-angle period of {{T = 1.885}} s. Calculate the surface gravitational field strength {{g}} of the exoplanet in m s⁻² (give your answer to 1 decimal place).",
          answer: { type: "number", value: 5, tolerance: 0.05, display: "5.0 m s⁻²" },
          hints: [
            "Square both sides of {{T = 2π sqrt(l/g)}} to get {{T^2 = 4π^2 l / g}}.",
            "Rearrange for {{g = 4π^2 l / T^2}} and substitute {{l = 0.45}} m, {{T = 1.885}} s.",
          ],
          solution: [
            "Squaring {{T = 2π sqrt(l/g)}} gives {{g = (4π^2 l) / T^2}}.",
            "{{g = (4π^2 * 0.45) / (1.885)^2 = 17.765 / 3.553 ≈ 5.0}} m s⁻².",
          ],
        },
        {
          id: "c1-shm-waves-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "shm-foundations",
          strategy: "Small-angle pendulum approximation & mass independence",
          marks: 3,
          question:
            "A metal bob hangs from a light string of length {{l}} and swings through angle {{θ}}. Explain why its motion approximates SHM only for small angles, and state the effect on its period if a bob of twice the mass is used on the same length string.",
          hints: [
            "Write the tangential component of weight pulling the bob back towards equilibrium.",
            "Explain how {{sin(θ)}} behaves for small angles in radians.",
            "Check whether bob mass {{m}} remains after dividing {{F = ma}} by {{m}}.",
          ],
          modelAnswer:
            "The tangential restoring force along the arc is {{-mg sin(θ)}}, giving tangential acceleration {{a = -g sin(θ)}}. Only when {{θ}} is small (in radians) does the linear approximation {{sin(θ) ≈ θ = x/l}} hold, yielding {{a ≈ -(g/l)x}}, which is proportional to displacement and opposite in sign. Because {{m}} cancels out, {{T = 2π sqrt(l/g)}} is independent of mass, so doubling the bob's mass leaves the period unchanged.",
          markScheme: [
            {
              point: "Identifies tangential restoring force −mg sin θ (or tangential acceleration a = −g sin θ).",
              keywords: ["sin", "restoring", "tangential"],
            },
            {
              point: "Uses small-angle approximation sin θ ≈ θ = x/l (in radians) to obtain a ≈ −(g/l)x proportional to x.",
              keywords: ["radians", "x/l", "linear", "proportional"],
            },
            {
              point: "States period stays unchanged because T = 2π√(l/g) is independent of mass.",
              keywords: ["unchanged", "same", "independent of mass", "no change"],
            },
          ],
        },
        {
          id: "c1-shm-waves-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Describe",
          guideRef: "shm-foundations",
          strategy: "Qualitative kinematics and energy exchange across a half-cycle",
          marks: 4,
          question:
            "Describe how the kinetic energy, potential energy, velocity, and acceleration of an undamped horizontal mass–spring oscillator change as the mass moves from maximum positive extension ({{+x_0}}) through equilibrium ({{0}}) to maximum compression ({{-x_0}}).",
          hints: [
            "Break the motion into three landmarks: at {{+x_0}}, at {{x = 0}}, and at {{-x_0}}.",
            "Track both the energy transfer between {{E_p}} and {{E_k}} and the directions of {{v}} and {{a}}.",
            "Mention that total mechanical energy {{E_T = E_k + E_p}} remains constant throughout.",
          ],
          modelAnswer:
            "At maximum positive extension, the block is momentarily stationary with zero kinetic energy, peak elastic potential energy, and maximum leftward acceleration. Travelling towards the midpoint, elastic potential energy converts into kinetic energy as speed rises and leftward acceleration diminishes. Passing through zero displacement, speed and kinetic energy peak while elastic potential energy and acceleration both vanish. Compressing the spring towards {{-x_0}}, kinetic energy transforms back into elastic potential energy while acceleration reverses rightwards, decelerating the block to rest at {{-x_0}}; throughout the entire journey, total mechanical energy stays strictly constant.",
          markScheme: [
            {
              point: "At +x₀: momentarily at rest (E_k = 0), maximum elastic potential energy, maximum acceleration towards equilibrium.",
              keywords: ["stationary", "rest", "elastic potential", "leftward"],
            },
            {
              point: "Approaching x = 0: E_p converts into E_k as speed increases and acceleration magnitude decreases.",
              keywords: ["converts", "transforms", "speed rises", "increases", "diminishes"],
            },
            {
              point: "At x = 0: speed and E_k reach maximum while E_p and acceleration are zero.",
              keywords: ["vanish", "zero displacement", "peak", "fastest"],
            },
            {
              point: "Moving to −x₀: acceleration reverses direction, E_k converts back to E_p until rest at −x₀, with constant total mechanical energy.",
              keywords: ["reverses", "decelerating", "constant", "conserved"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant physics description of energy or kinematics.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Partial description identifying extrema at endpoints or midpoint, with omissions in direction of acceleration or energy conservation.",
              indicators: ["Mentions energy swap between E_k and E_p OR identifies speed/acceleration at one landmark."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear, coherent progression across all three positions accurately linking E_k, E_p, velocity, direction reversal of acceleration, and constant total energy.",
              indicators: ["Explicitly notes reversal of acceleration past x = 0 and conservation of total mechanical energy."],
            },
          ],
        },
        {
          id: "c1-shm-waves-p1-q07",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "wave-model-graphs",
          strategy: "Wave equation λ = v / f",
          question:
            "A loudspeaker emits a sound wave of frequency {{512}} Hz travelling at {{332.8}} m s⁻¹ in air. Calculate its wavelength {{λ}} in metres (give your answer to 2 decimal places).",
          answer: { type: "number", value: 0.65, tolerance: 0.01, display: "0.65 m" },
          hints: ["Rearrange {{v = fλ}} to {{λ = v / f}}."],
          solution: ["{{λ = v / f = 332.8 / 512 = 0.65}} m."],
        },
        {
          id: "c1-shm-waves-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "wave-model-graphs",
          strategy: "Combining y–x and y–t wave graphs",
          question:
            "A displacement–distance snapshot of a transverse wave shows {{3}} complete wavelengths spanning {{2.40}} m. A displacement–time graph for one particle records {{10}} complete cycles in {{0.40}} s. Calculate the wave speed {{v}} in m s⁻¹.",
          answer: { type: "number", value: 20, tolerance: 0.1, display: "20 m s⁻¹" },
          hints: [
            "Calculate {{λ = 2.40 / 3}} m from the spatial snapshot.",
            "Calculate {{f = 10 / 0.40}} Hz from the time record, then multiply {{v = fλ}}.",
          ],
          solution: [
            "Wavelength: {{λ = 2.40 / 3 = 0.80}} m.",
            "Frequency: {{f = 10 / 0.40 = 25}} Hz (period {{T = 0.040}} s).",
            "Wave speed: {{v = fλ = 25 * 0.80 = 20}} m s⁻¹.",
          ],
        },
        {
          id: "c1-shm-waves-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "wave-model-graphs",
          strategy: "Rearranging string speed formula for tension",
          question:
            "A violin string of length {{0.60}} m has mass {{1.5}} g and carries transverse waves at speed {{180}} m s⁻¹. Calculate the tension {{F_T}} in the string in newtons.",
          answer: { type: "number", value: 81, tolerance: 0.5, display: "81 N" },
          traps: [
            {
              spec: { type: "number", value: 81000, tolerance: 100 },
              feedback: "Remember to convert mass from grams to kilograms (1.5 g = 0.0015 kg) before computing μ.",
            },
          ],
          hints: [
            "Convert mass to kg and find linear mass density {{μ = m / L}}.",
            "Square {{v = sqrt(F_T / μ)}} to solve {{F_T = μ v^2}}.",
          ],
          solution: [
            "Linear density: {{μ = (1.5 * 10^(-3) kg) / (0.60 m) = 2.5 * 10^(-3)}} kg m⁻¹.",
            "Tension: {{F_T = μ v^2 = (2.5 * 10^(-3)) * 180^2 = 0.0025 * 32400 = 81}} N.",
          ],
        },
        {
          id: "c1-shm-waves-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "wave-model-graphs",
          strategy: "IB 'Compare and contrast' requires BOTH a similarity and a difference",
          marks: 3,
          question:
            "Compare and contrast transverse mechanical waves and longitudinal mechanical waves, including one example of each.",
          hints: [
            "'Compare' means state at least one similarity (what do both transport, and what do they both require?).",
            "'Contrast' means state the oscillation direction relative to energy transfer (and polarisability).",
            "Include one mechanical example of each (avoid using light for a mechanical wave!).",
          ],
          modelAnswer:
            "Both types require a material medium and transfer energy without any net transport of matter (obeying {{v = fλ}}). However, particles in a transverse wave oscillate perpendicular to the direction of energy propagation (forming crests and troughs and allowing polarisation), whereas particles in a longitudinal wave oscillate parallel to energy propagation (forming compressions and rarefactions and preventing polarisation). Examples include waves on a stretched string or seismic S-waves (transverse) and sound waves or seismic P-waves (longitudinal).",
          markScheme: [
            {
              point: "Similarity: both transfer energy without net transfer of matter (and/or both require a material medium).",
              keywords: ["energy", "no net", "without", "material medium"],
            },
            {
              point: "Difference: transverse oscillates perpendicular to energy transfer; longitudinal oscillates parallel to energy transfer.",
              keywords: ["perpendicular", "parallel"],
            },
            {
              point: "Valid mechanical example of each (e.g. string/water/S-wave and sound/ultrasound/P-wave).",
              keywords: ["sound", "p-wave", "ultrasound", "slinky"],
            },
          ],
        },
        {
          id: "c1-shm-waves-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "wave-model-graphs",
          strategy: "Interpreting longitudinal displacement–distance graphs",
          marks: 3,
          question:
            "A sinusoidal longitudinal sound wave travels rightward through air. Taking rightward particle displacement as positive, explain how to locate both a **compression** and a **rarefaction** on a displacement–distance graph.",
          hints: [
            "Ask where particles on the left shift right ({{+}}) while particles on the right shift left ({{-}}).",
            "Identify both the displacement value and the sign of the gradient at that point.",
            "Contrast this with a rarefaction where neighbouring particles pull away from the crossing.",
          ],
          modelAnswer:
            "A compression occurs where the graph crosses zero displacement with a negative gradient: particles just left of the crossing have positive displacement (shifted right) while particles just right have negative displacement (shifted left), so air molecules crowd inwards to form maximum density and pressure. Conversely, a rarefaction occurs at a zero crossing with a positive gradient, where neighbouring molecules shift away from the crossing in opposite directions to create minimum density and pressure.",
          markScheme: [
            {
              point: "Identifies compression at zero displacement with a negative gradient.",
              keywords: ["negative gradient", "negative slope"],
            },
            {
              point: "Explains left particles shift right (+) and right particles shift left (−), crowding molecules together (high density/pressure).",
              keywords: ["crowd", "converge", "maximum density", "high pressure", "high density"],
            },
            {
              point: "Identifies rarefaction at zero displacement with a positive gradient where neighbouring particles move apart (low density/pressure).",
              keywords: ["positive gradient", "positive slope", "minimum density", "low pressure", "away"],
            },
          ],
        },
        {
          id: "c1-shm-waves-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "em-spectrum-intensity",
          strategy: "EM frequency from vacuum wavelength",
          question:
            "An infrared LED emits radiation of vacuum wavelength {{1200}} nm ({{1.20 * 10^(-6)}} m). Take {{c = 3.00 * 10^8}} m s⁻¹. Calculate its frequency in THz ({{1 THz = 10^12 Hz}}).",
          answer: { type: "number", value: 250, tolerance: 1, display: "250 THz" },
          hints: [
            "Compute {{f = c / λ = (3.00 * 10^8) / (1.20 * 10^(-6))}} in Hz.",
            "Divide by {{10^12}} to convert Hz to THz.",
          ],
          solution: [
            "{{f = c / λ = (3.00 * 10^8) / (1.20 * 10^(-6)) = 2.50 * 10^14}} Hz.",
            "Converting to THz: {{(2.50 * 10^14) / 10^12 = 250}} THz.",
          ],
        },
        {
          id: "c1-shm-waves-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "em-spectrum-intensity",
          strategy: "Direct inverse-square intensity I = P/(4πr²)",
          question:
            "An isotropic point lamp radiates {{100}} W of electromagnetic power uniformly in all directions. Calculate the wave intensity {{I}} (in W m⁻², to 2 decimal places) at a distance of {{2.50}} m from the lamp.",
          answer: { type: "number", value: 1.27, tolerance: 0.02, display: "1.27 W m⁻²" },
          traps: [
            {
              spec: { type: "number", value: 3.18, tolerance: 0.05 },
              feedback: "Remember to square the distance r in I = P/(4πr²).",
            },
            {
              spec: { type: "number", value: 16, tolerance: 0.2 },
              feedback: "You divided by r² alone — include the spherical factor 4π in the denominator.",
            },
          ],
          hints: [
            "Substitute into {{I = P / (4π r^2)}}.",
            "Evaluate {{4π * (2.50)^2 = 25π ≈ 78.54}} m² first.",
          ],
          solution: [
            "{{I = P / (4π r^2) = 100 / (4π * 2.50^2) = 100 / (25π) = 4/π ≈ 1.27}} W m⁻².",
          ],
        },
        {
          id: "c1-shm-waves-p1-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "em-spectrum-intensity",
          strategy: "Intensity ratio I₂/I₁ = (r₁/r₂)²",
          question:
            "At a distance of {{3.0}} m from an isotropic point source, the wave intensity is {{50}} W m⁻². Calculate the intensity (in W m⁻²) at a distance of {{7.5}} m from the source.",
          answer: { type: "number", value: 8, tolerance: 0.1, display: "8.0 W m⁻²" },
          traps: [
            {
              spec: { type: "number", value: 20, tolerance: 0.2 },
              feedback: "You scaled as 1/r instead of 1/r² — square the distance ratio (3.0/7.5)².",
            },
          ],
          hints: [
            "Find the distance ratio {{r_2 / r_1 = 7.5 / 3.0 = 2.5}}.",
            "Apply {{I_2 = I_1 (r_1 / r_2)^2 = 50 / (2.5)^2}}.",
          ],
          solution: [
            "Distance increases by a factor of {{7.5 / 3.0 = 2.5}}.",
            "By {{I ∝ 1/r^2}}, {{I_2 = 50 / (2.5)^2 = 50 / 6.25 = 8.0}} W m⁻².",
          ],
        },
        {
          id: "c1-shm-waves-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "em-spectrum-intensity",
          strategy: "Deriving inverse-square law, assumptions & amplitude scaling",
          marks: 5,
          question:
            "Explain the physical origin of {{I = P / (4π r^2)}} for an isotropic point source, state **two** assumptions required for this equation to hold, and deduce how the wave amplitude {{A}} depends on distance {{r}}.",
          hints: [
            "Start with energy conservation across concentric spheres of surface area {{4πr^2}}.",
            "List the physical idealisations about the emitter and the surrounding medium.",
            "Combine {{I ∝ 1/r^2}} with {{I ∝ A^2}} to solve for {{A}} in terms of {{r}}.",
          ],
          modelAnswer:
            "By conservation of energy, total emitted power {{P}} spreads evenly across concentric spherical shells of surface area {{4πr^2}} centred on the emitter. Because intensity is defined as power per unit area perpendicular to propagation ({{I = P/A}}), dividing yields {{I = P/(4πr^2)}}, so intensity is inversely proportional to {{r^2}}. Two key assumptions are: (1) the emitter radiates uniformly in all directions from a negligible size, and (2) the surrounding medium is non-absorbing so no energy is dissipated or scattered. Finally, since {{I ∝ A^2}} and {{I ∝ 1/r^2}}, we obtain {{A^2 ∝ 1/r^2}}, meaning amplitude is inversely proportional to distance ({{A ∝ 1/r}}).",
          markScheme: [
            {
              point: "Total emitted power spreads evenly over spherical surfaces of area 4πr².",
              keywords: ["spherical", "sphere", "surface area", "4πr"],
            },
            {
              point: "Intensity is power per unit area (I = P/A), leading to I = P/(4πr²) ∝ 1/r².",
              keywords: ["power per unit area", "p/a", "inversely proportional"],
            },
            {
              point: "Assumption 1: source radiates uniformly in all directions / negligible physical size.",
              keywords: ["uniformly in all directions", "all directions", "negligible size", "isotropic"],
            },
            {
              point: "Assumption 2: no absorption / scattering / energy loss in the medium.",
              keywords: ["non-absorbing", "no absorption", "dissipated", "no energy"],
            },
            {
              point: "Combines I ∝ A² with I ∝ 1/r² to deduce A ∝ 1/r (inversely proportional to distance).",
              keywords: ["1/r", "inversely proportional to distance", "inversely proportional to r"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid physics reasoning.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States the inverse-square formula or one assumption without deriving spherical spreading or amplitude scaling.",
              indicators: ["Mentions spherical area 4πr² OR one assumption."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains spherical energy spreading and states assumptions clearly, with a minor gap in either one assumption or the A ∝ 1/r deduction.",
              indicators: ["Correctly derives I = P/(4πr²) from power per unit area and identifies non-absorbing medium."],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, rigorous IB explanation covering spherical spreading, I = P/A definition, both physical assumptions, and clean deduction of A ∝ 1/r.",
              indicators: ["Explicitly links I ∝ A² and I ∝ 1/r² to conclude A ∝ 1/r."],
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2 — HL Quantitative SHM & Synthesis (9 short + 6 written)
    // -------------------------------------------------------------------------
    {
      id: "c1-shm-waves-p2",
      title: "Practice Paper 2 — Quantitative SHM (HL) & Wave Synthesis",
      level: "HL",
      questions: [
        {
          id: "c1-shm-waves-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "shm-equations-hl",
          strategy: "Evaluating x(t) = x₀ sin(ωt) in radians",
          question:
            "A particle executes SHM according to {{x(t) = 0.10 sin(5.0 t)}}, where {{x}} is in metres and {{t}} is in seconds. Calculate its displacement {{x}} (in metres, to 3 decimal places) at {{t = 0.20}} s.",
          answer: { type: "number", value: 0.084, tolerance: 0.002, display: "0.084 m" },
          traps: [
            {
              spec: { type: "number", value: 0.00175, tolerance: 0.0005 },
              feedback: "Your calculator is in DEGREES! Switch to RADIANS before evaluating sin(1.00 rad).",
            },
          ],
          hints: [
            "Compute the phase angle {{ωt = 5.0 * 0.20 = 1.00}} rad.",
            "Ensure your calculator is in **radian mode**, then evaluate {{0.10 sin(1.00)}}.",
          ],
          solution: [
            "Phase angle: {{ωt = 5.0 * 0.20 = 1.00}} rad.",
            "{{x = 0.10 sin(1.00 rad) = 0.10 * 0.8415 ≈ 0.084}} m.",
          ],
          commonError: "Leaving the calculator in degree mode instead of radian mode.",
        },
        {
          id: "c1-shm-waves-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "shm-equations-hl",
          strategy: "v_max = ωx₀ = 2πfx₀",
          question:
            "A {{0.25}} kg mass executes SHM with amplitude {{x_0 = 0.10}} m and frequency {{f = 2.0}} Hz. Calculate its maximum speed {{v_max}} in m s⁻¹ (give your answer to 2 decimal places).",
          answer: { type: "number", value: 1.26, tolerance: 0.02, display: "1.26 m s⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 0.2, tolerance: 0.01 },
              feedback: "You multiplied f × x₀ instead of ω × x₀ — include the 2π factor in ω = 2πf.",
            },
          ],
          hints: [
            "Convert frequency to angular frequency: {{ω = 2πf}}.",
            "Multiply by amplitude: {{v_max = ω x_0}}.",
          ],
          solution: [
            "{{ω = 2πf = 2π(2.0) = 4π ≈ 12.57}} rad s⁻¹.",
            "{{v_max = ω x_0 = 4π(0.10) = 0.40π ≈ 1.26}} m s⁻¹.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "shm-equations-hl",
          strategy: "Speed from displacement via v = ±ω√(x₀² − x²)",
          question:
            "An SHM oscillator has amplitude {{x_0 = 0.17}} m and angular frequency {{ω = 5.0}} rad s⁻¹. Calculate its speed (in m s⁻¹) when its displacement is {{x = -0.080}} m.",
          answer: { type: "number", value: 0.75, tolerance: 0.01, display: "0.75 m s⁻¹" },
          hints: [
            "Use {{|v| = ω sqrt(x_0^2 - x^2)}}; note that {{(-0.080)^2 = +0.0064}}.",
            "Recognise the 8–15–17 right triangle: {{sqrt(0.17^2 - 0.08^2) = 0.15}} m.",
          ],
          solution: [
            "{{|v| = ω sqrt(x_0^2 - x^2) = 5.0 sqrt(0.17^2 - (-0.080)^2)}}",
            "{{|v| = 5.0 sqrt(0.0289 - 0.0064) = 5.0 * 0.15 = 0.75}} m s⁻¹.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "shm-equations-hl",
          strategy: "Total SHM energy E_T = ½mω²x₀²",
          question:
            "A {{0.60}} kg mass oscillates with SHM at angular frequency {{ω = 4.0}} rad s⁻¹ and amplitude {{x_0 = 0.25}} m. Calculate its total mechanical energy {{E_T}} in joules.",
          answer: { type: "number", value: 0.3, tolerance: 0.005, display: "0.30 J" },
          hints: [
            "Write {{E_T = 1/2 m ω^2 x_0^2}}.",
            "Square both {{ω = 4.0}} and {{x_0 = 0.25}} carefully.",
          ],
          solution: [
            "{{E_T = 1/2 m ω^2 x_0^2 = 0.5 * 0.60 * (4.0)^2 * (0.25)^2 = 0.30 * 16 * 0.0625 = 0.30}} J.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "shm-equations-hl",
          strategy: "Kinetic energy at position x",
          question:
            "A {{0.50}} kg mass executes SHM with {{ω = 10}} rad s⁻¹ and amplitude {{x_0 = 0.10}} m. Calculate its kinetic energy {{E_k}} (in joules) at displacement {{x = 0.060}} m.",
          answer: { type: "number", value: 0.16, tolerance: 0.005, display: "0.16 J" },
          traps: [
            {
              spec: { type: "number", value: 0.09, tolerance: 0.005 },
              feedback: "0.09 J is the potential energy E_p at x = 0.060 m; subtract from E_T = 0.25 J to get E_k!",
            },
          ],
          hints: [
            "Use {{E_k = 1/2 m ω^2 (x_0^2 - x^2)}}.",
            "Compute {{x_0^2 - x^2 = 0.0100 - 0.0036 = 0.0064}} m², then multiply by {{1/2 m ω^2 = 25}}.",
          ],
          solution: [
            "{{E_k = 1/2 m ω^2 (x_0^2 - x^2) = 0.5 * 0.50 * 10^2 * (0.10^2 - 0.060^2)}}",
            "{{E_k = 25 * 0.0064 = 0.16}} J.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Derive",
          guideRef: "shm-equations-hl",
          strategy: "Eliminating phase via sin²θ + cos²θ = 1",
          marks: 4,
          question:
            "Starting from {{x = x_0 sin(ωt + φ)}} and {{v = ω x_0 cos(ωt + φ)}}, derive {{v = ±ω sqrt(x_0^2 - x^2)}} and prove that the total mechanical energy {{E_T = 1/2 m ω^2 x_0^2}} is independent of position {{x}}.",
          hints: [
            "Isolate {{sin(ωt + φ)}} and {{cos(ωt + φ)}} in the two starting equations.",
            "Square and add them using the Pythagorean trigonometric identity.",
            "Substitute {{v^2}} into {{E_k = 1/2 m v^2}} and add {{E_p = 1/2 m ω^2 x^2}}.",
          ],
          modelAnswer:
            "Rearranging gives {{sin(ωt + φ) = x / x_0}} and {{cos(ωt + φ) = v / (ω x_0)}}. Applying the trigonometric identity {{sin^2(θ) + cos^2(θ) = 1}} yields {{(x/x_0)^2 + (v/(ω x_0))^2 = 1}}, which simplifies to {{v^2 = ω^2(x_0^2 - x^2)}} and hence {{v = ±ω sqrt(x_0^2 - x^2)}}. Substituting into kinetic energy gives {{E_k = 1/2 m v^2 = 1/2 m ω^2(x_0^2 - x^2)}}, while potential energy is {{E_p = 1/2 m ω^2 x^2}}. Summing {{E_T = E_k + E_p = 1/2 m ω^2 x_0^2}} causes the {{x^2}} terms to cancel identically, leaving a strictly constant total energy.",
          markScheme: [
            {
              point: "Isolates sin(ωt + φ) = x/x₀ and cos(ωt + φ) = v/(ωx₀).",
              keywords: ["x/x_0", "x / x_0", "x/x0", "cos"],
            },
            {
              point: "Uses sin²θ + cos²θ = 1 to obtain v = ±ω√(x₀² − x²).",
              keywords: ["sin^2", "identity", "trigonometric", "sqrt"],
            },
            {
              point: "Substitutes into E_k = ½mω²(x₀² − x²) and states E_p = ½mω²x².",
              keywords: ["e_k", "e_p", "kinetic energy", "potential energy"],
            },
            {
              point: "Adds E_k + E_p to show x² cancels, giving constant E_T = ½mω²x₀².",
              keywords: ["cancel", "cancels", "constant", "summing"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid algebraic derivation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Completes either the velocity–displacement derivation OR the energy sum, with incomplete algebra on the other part.",
              indicators: ["Applies sin² + cos² = 1 correctly OR adds E_k and E_p to cancel x²."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clean, complete step-by-step derivation of v = ±ω√(x₀² − x²) followed by explicit cancellation of x² in E_k + E_p = E_T.",
              indicators: ["Shows both the ± square root step and the exact cancellation of ±½mω²x²."],
            },
          ],
        },
        {
          id: "c1-shm-waves-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "shm-equations-hl",
          strategy: "Phase difference Δφ = 2π(Δt/T) & leading oscillator",
          marks: 3,
          question:
            "Two identical pendulums A and B each have period {{T = 1.20}} s. Pendulum A passes equilibrium moving rightward at {{t = 0}}, while pendulum B passes equilibrium moving rightward at {{t = 0.40}} s. Determine the phase difference in radians between A and B, and explain which pendulum leads.",
          hints: [
            "Find what fraction of a cycle {{Δt = 0.40}} s represents.",
            "Multiply that fraction by {{2π}} rad.",
            "The oscillator that hits a given motion state **earlier** in time leads the other.",
          ],
          modelAnswer:
            "Using {{Δφ = 2π(Δt / T)}}, the time separation {{Δt = 0.40}} s is {{0.40 / 1.20 = 1/3}} of one cycle, giving a phase difference of {{Δφ = 2π/3 ≈ 2.09}} rad ({{120°}}). Because pendulum A reaches the equilibrium rightward state earlier than pendulum B, pendulum A leads pendulum B by {{2π/3}} rad.",
          markScheme: [
            {
              point: "Applies Δφ = 2π(Δt / T) with Δt = 0.40 s and T = 1.20 s.",
              keywords: ["2π", "1/3", "0.40 / 1.20", "0.40/1.20"],
            },
            {
              point: "Evaluates Δφ = 2π/3 rad (or 2.09 rad / 2.1 rad).",
              keywords: ["2π/3", "2pi/3", "2.09", "2.1"],
            },
            {
              point: "Identifies pendulum A as leading because it reaches the same motion state earlier.",
              keywords: ["a leads", "earlier", "ahead"],
            },
          ],
        },
        {
          id: "c1-shm-waves-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Describe",
          guideRef: "shm-equations-hl",
          strategy: "Contrasting Energy–Displacement vs Energy–Time SHM graphs",
          marks: 4,
          question:
            "Describe the shapes and key mathematical features of the graphs of {{E_k}}, {{E_p}}, and {{E_T}} for an undamped SHM oscillator plotted against (a) displacement {{x}} from {{-x_0}} to {{+x_0}}, and (b) time {{t}} from {{0}} to {{T}} (given {{x = 0}} at {{t = 0}}).",
          hints: [
            "Against {{x}}, recall {{E_p ∝ x^2}} and {{E_k ∝ x_0^2 - x^2}}: what geometric curve is quadratic?",
            "State the exact {{x}}-coordinates where {{E_k}} and {{E_p}} cross.",
            "Against {{t}}, track the squared sine/cosine curves and how many cycles they complete in time {{T}}.",
          ],
          modelAnswer:
            "Against displacement, {{E_p}} forms an upward parabola with vertex at the origin reaching {{E_T}} at {{±x_0}}, while {{E_k}} traces a symmetric inverted parabola peaking at {{(0, E_T)}} and touching zero at {{±x_0}}. Both parabolas intersect at {{x = ±x_0/√2}} where each equals half of the constant horizontal {{E_T}} line. Against time, {{E_p ∝ sin^2(ωt)}} and {{E_k ∝ cos^2(ωt)}} are smooth non-negative curves oscillating between {{0}} and {{E_T}} at twice the motion frequency (completing two cycles of period {{T/2}} during time {{T}} and intersecting four times).",
          markScheme: [
            {
              point: "Against x: E_p is an upward parabola (0 at origin) and E_k is an inverted parabola (peaks at origin).",
              keywords: ["parabola", "inverted", "vertex"],
            },
            {
              point: "Against x: curves cross at x = ±x₀/√2 (≈ ±0.71x₀) at ½E_T; E_T is a constant horizontal line.",
              keywords: ["√2", "sqrt(2)", "0.71", "horizontal"],
            },
            {
              point: "Against t: E_p and E_k are non-negative squared sinusoidal curves oscillating between 0 and E_T.",
              keywords: ["non-negative", "sin^2", "cos^2", "always positive"],
            },
            {
              point: "Against t: both energies oscillate at frequency 2f (period T/2, completing two cycles in T).",
              keywords: ["twice", "two cycles", "t/2", "2f"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid description of SHM energy graphs.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly describes either the displacement graphs OR the time graphs, or omits quantitative features like ±x₀/√2 and frequency 2f.",
              indicators: ["Mentions parabolic shape vs x OR constant E_T horizontal line."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Comprehensive comparison accurately detailing symmetric parabolas crossing at ±x₀/√2 AND non-negative squared-sinusoids oscillating at frequency 2f.",
              indicators: ["Explicitly identifies both ±x₀/√2 intersection and two energy cycles per period T."],
            },
          ],
        },
        {
          id: "c1-shm-waves-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "shm-foundations",
          strategy: "Pendulum scaling T ∝ 1/√g",
          question:
            "A simple pendulum has period {{1.50}} s on Earth ({{g = 9.8}} m s⁻²). Keeping its length unchanged, it is moved to a region with {{g = 24.5}} m s⁻². Calculate its new period in seconds (give your answer to 2 decimal places).",
          answer: { type: "number", value: 0.95, tolerance: 0.02, display: "0.95 s" },
          hints: [
            "Use proportionality {{T_2 / T_1 = sqrt(g_1 / g_2)}} so you don't even need {{l}}.",
            "Note {{24.5 / 9.8 = 2.5}}, so compute {{1.50 / sqrt(2.5)}}.",
          ],
          solution: [
            "Since {{T = 2π sqrt(l/g)}}, {{T_2 = T_1 sqrt(g_1 / g_2)}}.",
            "{{T_2 = 1.50 sqrt(9.8 / 24.5) = 1.50 / sqrt(2.5) ≈ 0.95}} s.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "wave-model-graphs",
          strategy: "Scaling string wave speed v ∝ √F_T",
          question:
            "A harp string of length {{1.20}} m and mass {{6.0}} g carries transverse waves at {{120}} m s⁻¹. If the tension on this same string is multiplied by {{2.25}}, calculate the new wave speed in m s⁻¹.",
          answer: { type: "number", value: 180, tolerance: 0.5, display: "180 m s⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 270, tolerance: 1 },
              feedback: "Wave speed scales as √F_T, not F_T directly — multiply by √2.25 = 1.5, not 2.25.",
            },
          ],
          hints: [
            "Since the same string is used, {{μ}} is unchanged and {{v ∝ sqrt(F_T)}}.",
            "Evaluate {{sqrt(2.25) = 1.5}} and multiply by {{120}} m s⁻¹.",
          ],
          solution: [
            "From {{v = sqrt(F_T / μ)}} with fixed {{μ}}, {{v' = v sqrt(2.25) = 120 * 1.5 = 180}} m s⁻¹.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "em-spectrum-intensity",
          strategy: "X-ray wavelength in nanometres",
          question:
            "A medical X-ray tube emits photons of frequency {{6.00 * 10^18}} Hz. Take {{c = 3.00 * 10^8}} m s⁻¹. Calculate the wavelength in **nanometres** (nm).",
          answer: { type: "number", value: 0.05, tolerance: 0.001, display: "0.050 nm" },
          hints: [
            "Compute {{λ = c / f = (3.00 * 10^8) / (6.00 * 10^18) = 5.00 * 10^(-11)}} m.",
            "Divide by {{10^(-9)}} (i.e. multiply by {{10^9}}) to convert metres to nm.",
          ],
          solution: [
            "{{λ = c / f = (3.00 * 10^8) / (6.00 * 10^18) = 5.00 * 10^(-11)}} m.",
            "In nanometres: {{5.00 * 10^(-11) * 10^9 = 0.050}} nm.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "em-spectrum-intensity",
          strategy: "Received power P_rec = I × A_dish",
          question:
            "A receiving dish of collecting area {{2.0}} m² faces an isotropic transmitter emitting {{800}} W at a distance of {{100}} m. Calculate the power captured by the dish in **milliwatts** (mW, give your answer to 2 decimal places).",
          answer: { type: "number", value: 12.73, tolerance: 0.15, display: "12.73 mW" },
          traps: [
            {
              spec: { type: "number", value: 6.37, tolerance: 0.1 },
              feedback: "That is the intensity in mW m⁻² — multiply by the 2.0 m² dish area!",
            },
          ],
          hints: [
            "First calculate intensity at the dish: {{I = P / (4π r^2)}}.",
            "Multiply intensity by dish area {{2.0}} m² to get received power in watts, then multiply by {{1000}} for mW.",
          ],
          solution: [
            "{{I = 800 / (4π * 100^2) = 800 / (40000π) = 0.02 / π ≈ 6.366 * 10^(-3)}} W m⁻².",
            "{{P_rec = I * A = (6.366 * 10^(-3)) * 2.0 = 1.273 * 10^(-2)}} W = {{12.73}} mW.",
          ],
        },
        {
          id: "c1-shm-waves-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "wave-model-graphs",
          strategy: "Distinguishing y–x vs y–t graphs cleanly",
          marks: 3,
          question:
            "A student glances at a sinusoidal wave graph without reading the horizontal axis and claims 'the crest-to-crest gap is always the wavelength.' Explain why this claim may be wrong by distinguishing displacement–distance and displacement–time graphs and showing how both are combined to find wave speed.",
          hints: [
            "State what a displacement–distance graph shows (fixed time → spatial separation).",
            "State what a displacement–time graph shows (fixed particle → temporal separation).",
            "Write the equation combining both readings to obtain wave speed.",
          ],
          modelAnswer:
            "A displacement–distance graph freezes time to show a spatial snapshot of all medium particles, so its peak-to-peak separation gives wavelength {{λ}}. By contrast, a displacement–time graph tracks a single fixed particle over time, so its peak-to-peak separation gives the time period {{T}} (yielding frequency {{f = 1/T}}), not wavelength. Combining {{λ}} from the spatial graph with {{T}} (or {{f}}) from the temporal graph yields wave speed via {{v = λ/T = fλ}}.",
          markScheme: [
            {
              point: "Displacement–distance graph is a frozen spatial snapshot whose peak-to-peak separation is wavelength λ.",
              keywords: ["snapshot", "spatial", "wavelength"],
            },
            {
              point: "Displacement–time graph tracks one fixed particle over time; peak-to-peak separation is period T (not λ).",
              keywords: ["single", "one particle", "fixed particle", "period"],
            },
            {
              point: "Combines both using v = λ/T = fλ.",
              keywords: ["λ/t", "fλ", "v = fλ", "v = λ/t"],
            },
          ],
        },
        {
          id: "c1-shm-waves-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "em-spectrum-intensity",
          strategy: "Isotropic spreading vs collimated laser beam",
          marks: 3,
          question:
            "A red laser pointer and a small bare filament bulb both radiate {{5.0}} mW of visible light. Explain why the bulb's intensity falls approximately as {{1/r^2}} with distance while the laser beam's intensity stays nearly unchanged across a {{10}} m room.",
          hints: [
            "Compare the geometry of how energy leaves a bare bulb versus a laser.",
            "Apply {{I = P/A}} to both situations.",
          ],
          modelAnswer:
            "The bare bulb radiates roughly uniformly in all directions, so its optical power spreads across expanding spherical surfaces of area {{4πr^2}}, making intensity fall as {{I = P/(4πr^2) ∝ 1/r^2}}. By contrast, a laser emits a highly collimated, narrow directional beam whose cross-sectional area {{A}} barely diverges across {{10}} m. Since {{I = P/A}} with constant power and almost constant beam area, the laser's intensity stays nearly uniform.",
          markScheme: [
            {
              point: "Bulb emits in all directions, spreading power over spherical area 4πr² so I ∝ 1/r².",
              keywords: ["all directions", "spherical", "4πr", "uniformly"],
            },
            {
              point: "Laser produces a collimated / narrow directional beam with minimal divergence.",
              keywords: ["collimated", "narrow", "directional", "barely diverges"],
            },
            {
              point: "Using I = P/A, nearly constant cross-sectional area A keeps laser intensity almost constant.",
              keywords: ["p/a", "cross-sectional area", "constant beam area", "almost constant"],
            },
          ],
        },
        {
          id: "c1-shm-waves-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "shm-equations-hl",
          strategy: "Full quantitative HL SHM synthesis",
          marks: 6,
          question:
            "A {{0.20}} kg glider oscillates on a frictionless horizontal air track with effective spring constant {{k_eff = 45}} N m⁻¹. At {{t = 0}} it is released from rest at {{x = +0.080}} m. (a) Calculate {{ω}}, period {{T}}, maximum speed {{v_max}}, and total mechanical energy {{E_T}}. (b) Determine the positive displacement {{x}} where {{E_k = 3 E_p}}, and calculate the shortest time after {{t = 0}} to reach this position.",
          hints: [
            "Start with {{ω = sqrt(k_eff / m)}} and {{T = 2π / ω}}.",
            "Compute {{v_max = ω x_0}} and {{E_T = 1/2 m ω^2 x_0^2}}.",
            "If {{E_k = 3 E_p}}, then {{E_p = 1/4 E_T}} ⇒ find {{x}} via {{(x/x_0)^2 = 1/4}}.",
            "Use {{x(t) = x_0 cos(ωt)}} (since released from rest at {{+x_0}}) to solve for the shortest time {{t}}.",
          ],
          modelAnswer:
            "(a) Angular frequency {{ω = sqrt(k_eff / m) = sqrt(45 / 0.20) = sqrt(225) = 15}} rad s⁻¹, giving period {{T = 2π / 15 ≈ 0.419}} s. Maximum speed is {{v_max = ω x_0 = 15 * 0.080 = 1.20}} m s⁻¹. Total mechanical energy is {{E_T = 1/2 m ω^2 x_0^2 = 0.5 * 0.20 * 225 * 0.0064 = 0.144}} J. (b) Combining {{E_k = 3 E_p}} with {{E_k + E_p = E_T}} gives {{4 E_p = E_T}}, so {{(x/x_0)^2 = 1/4}} and the positive displacement is {{x = +x_0/2 = +0.040}} m. Since motion begins from rest at maximum extension, {{x(t) = x_0 cos(ωt)}}; setting {{cos(15t) = 0.5}} gives {{15t = π/3}} rad, so the shortest elapsed time is {{t = π/45 ≈ 0.0698}} s (equivalently {{T/6}}).",
          markScheme: [
            {
              point: "Computes ω = √(45/0.20) = 15 rad s⁻¹.",
              keywords: ["15 rad", "sqrt(225)", "= 15"],
            },
            {
              point: "Computes T = 2π/15 ≈ 0.419 s (or 0.42 s).",
              keywords: ["0.419", "0.42", "2π / 15", "2π/15"],
            },
            {
              point: "Computes v_max = ωx₀ = 1.20 m s⁻¹ (or 1.2 m s⁻¹).",
              keywords: ["1.20", "1.2 m"],
            },
            {
              point: "Computes E_T = ½mω²x₀² = 0.144 J (or 0.14 J).",
              keywords: ["0.144", "0.14 j"],
            },
            {
              point: "Deduces E_p = ¼E_T ⇒ x = +x₀/2 = +0.040 m.",
              keywords: ["0.040", "0.04 m", "x_0/2"],
            },
            {
              point: "Solves x₀ cos(15t) = 0.5 x₀ ⇒ 15t = π/3 ⇒ t = π/45 ≈ 0.0698 s (or 0.070 s / T/6).",
              keywords: ["0.0698", "0.070", "π/45", "t/6"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid quantitative progress.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly calculates basic kinematics (ω and/or T) with errors in energy or phase solving.",
              indicators: ["Obtains ω = 15 rad s⁻¹ and/or v_max = 1.20 m s⁻¹."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Completes part (a) accurately and finds x = 0.040 m, but assumes uniform speed (T/8) instead of cosine phase for time.",
              indicators: ["Correct E_T = 0.144 J and x = 0.040 m from energy ratio."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Flawless multi-step HL analysis accurately solving both energy partitioning and non-uniform cosine timing t = π/45 ≈ 0.0698 s.",
              indicators: ["Uses cos(15t) = 0.5 in radians to obtain t = T/6 ≈ 0.0698 s."],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 IB Grade-7 Synthesis Questions, ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "c1-shm-waves-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "shm-equations-hl",
      strategy: "Phase-angle timing in non-uniform SHM",
      question:
        "A particle performs SHM with period {{T = 1.20}} s and amplitude {{x_0 = 0.12}} m. At {{t = 0}}, it passes equilibrium moving in the positive direction. Calculate the shortest time (in seconds) it takes to travel from {{x = +0.060}} m to {{x = +0.12}} m.",
      answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20 s" },
      traps: [
        {
          spec: { type: "number", value: 0.15, tolerance: 0.005 },
          feedback: "0.15 s = T/8 assumes constant speed! Near the turning point the mass slows down, so the outer half takes T/6 = 0.20 s.",
        },
        {
          spec: { type: "number", value: 0.1, tolerance: 0.005 },
          feedback: "0.10 s = T/12 is the fast time from 0 to +0.060 m; the slower outer half from +0.060 m to +0.12 m takes T/6 = 0.20 s.",
        },
      ],
      hints: [
        "Model displacement as {{x(t) = x_0 sin(2πt / T)}}.",
        "Find {{t_1}} when {{sin(2πt_1/T) = 0.060/0.12 = 1/2}} and {{t_2}} when {{sin(2πt_2/T) = 1}}.",
        "Subtract {{t_2 - t_1 = T/4 - T/12 = T/6}}.",
      ],
      solution: [
        "Using {{x(t) = x_0 sin(2πt/T)}}: at {{x = +x_0/2}}, {{2πt_1/T = π/6}} ⇒ {{t_1 = T/12 = 0.10}} s.",
        "At {{x = +x_0}}, {{2πt_2/T = π/2}} ⇒ {{t_2 = T/4 = 0.30}} s.",
        "Time elapsed: {{Δt = 0.30 - 0.10 = 0.20}} s (exactly {{T/6}}).",
      ],
    },
    {
      id: "c1-shm-waves-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "shm-equations-hl",
      strategy: "Simultaneous equations with v² = ω²(x₀² − x²)",
      question:
        "A particle executing SHM has speed {{0.80}} m s⁻¹ when its displacement is {{0.030}} m, and speed {{0.60}} m s⁻¹ when its displacement is {{0.040}} m. Calculate its angular frequency {{ω}} in rad s⁻¹.",
      answer: { type: "number", value: 20, tolerance: 0.2, display: "20 rad s⁻¹" },
      hints: [
        "Square the HL speed equation for both data points: {{v_1^2 = ω^2(x_0^2 - x_1^2)}} and {{v_2^2 = ω^2(x_0^2 - x_2^2)}}.",
        "Subtract the second equation from the first to eliminate the unknown {{x_0^2}}!",
        "Solve {{v_1^2 - v_2^2 = ω^2(x_2^2 - x_1^2)}} for {{ω}}.",
      ],
      solution: [
        "Subtracting {{v_2^2 = ω^2(x_0^2 - x_2^2)}} from {{v_1^2 = ω^2(x_0^2 - x_1^2)}} eliminates {{x_0^2}}:",
        "{{v_1^2 - v_2^2 = ω^2(x_2^2 - x_1^2)}}",
        "{{0.80^2 - 0.60^2 = ω^2(0.040^2 - 0.030^2)}} ⇒ {{0.28 = ω^2(0.0007)}}",
        "{{ω^2 = 0.28 / 0.0007 = 400}} s⁻² ⇒ {{ω = 20}} rad s⁻¹.",
      ],
    },
    {
      id: "c1-shm-waves-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "shm-foundations",
      strategy: "Effective stiffness of opposing springs",
      question:
        "A {{0.40}} kg glider sits on a frictionless horizontal track between two fixed walls, attached to spring 1 ({{k_1 = 60}} N m⁻¹) on its left and spring 2 ({{k_2 = 100}} N m⁻¹) on its right. Calculate its oscillation frequency {{f}} in Hz (give your answer to 2 decimal places).",
      answer: { type: "number", value: 3.18, tolerance: 0.02, display: "3.18 Hz" },
      traps: [
        {
          spec: { type: "number", value: 1.54, tolerance: 0.03 },
          feedback: "When displaced right by x, spring 1 pulls left AND spring 2 pushes left — they act in PARALLEL (k_eff = k₁ + k₂ = 160 N m⁻¹), not in series!",
        },
      ],
      hints: [
        "Imagine displacing the glider rightward by {{+x}}: which way does spring 1 pull, and which way does spring 2 push?",
        "Both forces act leftward, so {{F_net = -(k_1 + k_2)x}} ⇒ {{k_eff = 160}} N m⁻¹.",
        "Compute {{ω = sqrt(k_eff / m)}} and {{f = ω / (2π)}}.",
      ],
      solution: [
        "Displacing by {{+x}} stretches spring 1 (pulling left by {{k_1 x}}) and compresses spring 2 (pushing left by {{k_2 x}}), so {{k_eff = k_1 + k_2 = 160}} N m⁻¹.",
        "{{ω = sqrt(k_eff / m) = sqrt(160 / 0.40) = sqrt(400) = 20}} rad s⁻¹.",
        "{{f = ω / (2π) = 20 / (2π) = 10/π ≈ 3.18}} Hz.",
      ],
    },
    {
      id: "c1-shm-waves-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "shm-foundations",
      strategy: "Fractional pendulum drift over 24 hours",
      question:
        "A pendulum clock keeps exact time at sea level ({{g_0 = 9.8}} m s⁻²). Moved to a mountain observatory where gravitational field strength is {{0.40}}% smaller ({{g' = 0.996 g_0}}), how many seconds does the clock lose in {{24}} hours ({{86400}} s)? Give your answer to the nearest whole second.",
      answer: { type: "number", value: 173, tolerance: 1.5, display: "173 s" },
      traps: [
        {
          spec: { type: "number", value: 346, tolerance: 3 },
          feedback: "Because T ∝ 1/√g, a 0.40% drop in g changes the period by only HALF as much (≈ 0.20%), not 0.40%!",
        },
      ],
      hints: [
        "Compare the clock's new tick rate {{f'/f = T/T' = sqrt(g'/g_0) = sqrt(0.996)}}.",
        "In {{86400}} true seconds, the clock only advances {{86400 * sqrt(0.996)}} seconds.",
        "Subtract from {{86400}} s (or use the small-change rule: {{0.20}}% of {{86400}} s).",
      ],
      solution: [
        "Since {{T ∝ 1/sqrt(g)}}, in each true second the clock registers {{T/T' = sqrt(g'/g_0) = sqrt(0.996) ≈ 0.997998}} clock-seconds.",
        "Time lost in {{86400}} s: {{86400 * (1 - sqrt(0.996)) = 86400 * 0.002002 ≈ 173}} s.",
      ],
    },
    {
      id: "c1-shm-waves-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "wave-model-graphs",
      strategy: "Comparing wave speed v with max particle SHM speed v_y,max",
      question:
        "A sinusoidal transverse wave of amplitude {{A = 0.025}} m and frequency {{f = 40}} Hz travels along a string of linear mass density {{μ = 0.0040}} kg m⁻¹ held at tension {{F_T = 40}} N. Calculate the ratio {{v / v_max}} of the wave speed to the maximum transverse particle speed (give your answer to 1 decimal place).",
      answer: { type: "number", value: 15.9, tolerance: 0.15, display: "15.9" },
      hints: [
        "First find the wave propagation speed along the string: {{v = sqrt(F_T / μ)}}.",
        "Next find the maximum transverse SHM speed of a particle on the string: {{v_max = 2πfA}}.",
        "Take the dimensionless ratio {{v / v_max}}.",
      ],
      solution: [
        "Wave speed: {{v = sqrt(40 / 0.0040) = sqrt(10000) = 100}} m s⁻¹.",
        "Maximum particle speed: {{v_max = 2πfA = 2π(40)(0.025) = 2π ≈ 6.283}} m s⁻¹.",
        "Ratio: {{v / v_max = 100 / (2π) = 50/π ≈ 15.9}}.",
      ],
    },
    {
      id: "c1-shm-waves-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "em-spectrum-intensity",
      strategy: "Spherical amplitude scaling A ∝ 1/r",
      question:
        "A detector is moved directly away from an isotropic point source by an extra {{4.0}} m in a non-absorbing medium. This reduces the wave **amplitude** at the detector to {{60}}% of its original value. Calculate the detector's original distance {{r_1}} from the source in metres.",
      answer: { type: "number", value: 6, tolerance: 0.05, display: "6.0 m" },
      traps: [
        {
          spec: { type: "number", value: 13.7, tolerance: 0.2 },
          feedback: "Amplitude obeys A ∝ 1/r (not 1/r²!), because I ∝ 1/r² and I ∝ A² combine to give A ∝ 1/r.",
        },
      ],
      hints: [
        "Combine {{I ∝ 1/r^2}} with {{I ∝ A^2}} to get the distance dependence of amplitude {{A}}.",
        "Set {{A_2 / A_1 = r_1 / (r_1 + 4.0) = 0.60}} and solve for {{r_1}}.",
      ],
      solution: [
        "For an unabsorbed spherical wave, {{I ∝ 1/r^2}} and {{I ∝ A^2}} imply {{A ∝ 1/r}}.",
        "Therefore {{r_1 / (r_1 + 4.0) = 0.60 = 3/5}} ⇒ {{5 r_1 = 3 r_1 + 12.0}} ⇒ {{2 r_1 = 12.0}} ⇒ {{r_1 = 6.0}} m.",
      ],
    },
    {
      id: "c1-shm-waves-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "shm-equations-hl",
      strategy: "Combining Newton's 2nd law with SHM maximum acceleration",
      marks: 5,
      question:
        "A small block of mass {{m}} sits on top of a horizontal platform executing **vertical** SHM of frequency {{f}} and amplitude {{x_0}}. (a) Identify the vertical forces on the block at the highest point of oscillation and write an expression for the normal contact force {{F_N}}. (b) Deduce the maximum amplitude {{x_0,max}} before the block loses contact with the platform, and evaluate {{x_0,max}} for {{f = 2.5}} Hz (take {{g = 9.8}} m s⁻²).",
      hints: [
        "At the top ({{x = +x_0}}), the acceleration points **downwards** with magnitude {{ω^2 x_0}}.",
        "Write Newton's second law downwards: {{mg - F_N = m a}}.",
        "The block just begins to lift off when {{F_N = 0}}, giving {{ω^2 x_0,max = g}}.",
      ],
      modelAnswer:
        "(a) At the top turning point, two vertical forces act on the block: weight {{mg}} downwards and normal reaction {{F_N}} upwards. Since the platform accelerates downwards at {{a = ω^2 x_0}}, Newton's second law gives {{mg - F_N = m ω^2 x_0}}, so {{F_N = m(g - ω^2 x_0)}}. (b) Loss of contact first happens when {{F_N}} drops to zero, requiring {{ω^2 x_0,max = g}}, so {{x_0,max = g / ω^2 = g / (4π^2 f^2)}}. Substituting {{g = 9.8}} m s⁻² and {{f = 2.5}} Hz gives {{x_0,max = 9.8 / (4π^2 * 6.25) = 9.8 / (25π^2) ≈ 0.040}} m ({{4.0}} cm).",
      markScheme: [
        {
          point: "Identifies downward weight mg and upward normal reaction F_N at the top point.",
          keywords: ["weight", "downwards", "upwards", "mg"],
        },
        {
          point: "Applies Newton's 2nd law with downward SHM acceleration ω²x₀: mg − F_N = mω²x₀ (or F_N = m(g − ω²x₀)).",
          keywords: ["mg - f_n", "g - ω^2", "m(g", "second law"],
        },
        {
          point: "Sets loss-of-contact condition F_N = 0.",
          keywords: ["f_n = 0", "drops to zero", "zero"],
        },
        {
          point: "Deduces x₀,max = g/ω² = g/(4π²f²).",
          keywords: ["g / ω^2", "g/ω^2", "4π^2", "4pi^2"],
        },
        {
          point: "Evaluates x₀,max ≈ 0.040 m (or 0.0397 m / 4.0 cm).",
          keywords: ["0.040", "0.0397", "4.0 cm", "0.04 m"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid dynamics or SHM connection.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies forces or equates peak acceleration to g qualitatively without clear Newton's 2nd law derivation.",
          indicators: ["States acceleration cannot exceed g OR identifies F_N = 0."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Derives F_N = m(g − ω²x₀) and g/(4π²f²) cleanly, with a minor arithmetic or unit slip.",
          indicators: ["Correct formula g/(4π²f²) derived from mg − F_N = mω²x₀."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, exam-standard HL derivation and numerical evaluation to 0.040 m (4.0 cm).",
          indicators: ["All five mark points clearly demonstrated with correct units."],
        },
      ],
    },
    {
      id: "c1-shm-waves-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "em-spectrum-intensity",
      strategy: "Equating inverse-square intensities between and beyond two sources",
      marks: 5,
      question:
        "Two isotropic point radio transmitters A ({{P_A = 16}} W) and B ({{P_B = 4.0}} W) are placed {{120}} m apart along a straight road. (a) Calculate the exact distance {{x}} from A (between A and B) where both signals have equal intensity, and locate the **second** point along the road outside segment AB where intensities are also equal. (b) State how the wave amplitudes compare at these points, assuming identical broadcast frequencies.",
      hints: [
        "Set {{P_A / (4π x^2) = P_B / (4π (120 - x)^2)}} and take the positive square root of both sides.",
        "For the external point beyond weaker transmitter B, use distance {{x - 120}} from B.",
        "Use {{I ∝ A^2}} for part (b).",
      ],
      modelAnswer:
        "(a) Equating intensities {{16 / (4π x^2) = 4.0 / (4π (120 - x)^2)}} simplifies to {{4 / x^2 = 1 / (120 - x)^2}}. Taking the square root for the point between them yields {{2 / x = 1 / (120 - x)}}, so {{240 - 2x = x}} and {{x = 80}} m from A ({{40}} m from B). Taking the alternative root beyond the weaker emitter B gives {{2 / x = 1 / (x - 120)}}, solving to {{2x - 240 = x}}, so the external point lies {{240}} m from A ({{120}} m past B) where the extra distance compensates for A's quadruple power. (b) Because both waves share the same frequency and medium and have equal intensity, {{I ∝ A^2}} guarantees that their wave amplitudes are equal ({{A_A = A_B}}).",
      markScheme: [
        {
          point: "Equates P_A/(4πx²) = P_B/(4π(120 − x)²) and cancels 4π.",
          keywords: ["16 /", "4 / x^2", "equating", "120 - x"],
        },
        {
          point: "Takes square root to solve 2/x = 1/(120 − x) ⇒ x = 80 m from A.",
          keywords: ["80 m", "= 80", "40 m"],
        },
        {
          point: "Recognises the second root lies beyond weaker source B (distance x − 120 from B).",
          keywords: ["beyond", "weaker", "x - 120", "external"],
        },
        {
          point: "Solves 2/x = 1/(x − 120) ⇒ x = 240 m from A (120 m past B).",
          keywords: ["240 m", "= 240", "120 m past"],
        },
        {
          point: "Concludes amplitudes are equal (A_A = A_B) because I ∝ A² at identical frequency.",
          keywords: ["amplitudes are equal", "a_a = a_b", "equal amplitude", "i ∝ a^2"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid inverse-square setup.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Sets up inverse-square ratio correctly and finds the internal point x = 80 m (or states equal amplitudes).",
          indicators: ["Obtains x = 80 m between the transmitters."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly finds x = 80 m and explains the external point qualitatively or solves x = 240 m with minor gaps.",
          indicators: ["Locates x = 240 m outside AB beyond the weaker transmitter."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete algebraic analysis locating both x = 80 m and x = 240 m and rigorously deducing equal amplitudes via I ∝ A².",
          indicators: ["Both exact positions plus clear justification of A_A = A_B."],
        },
      ],
    },
  ],
};
