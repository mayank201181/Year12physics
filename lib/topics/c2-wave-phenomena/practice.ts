import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 Qs: 6 short + 4 MCQ balanced 0,1,2,3)
  // ===========================================================================
  quiz: [
    {
      id: "c2-wave-phenomena-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "refraction-diffraction-double-slit",
      strategy: "Refractive index n = c / v",
      question:
        "Monochromatic light travels through a transparent plastic block at {{2.00 * 10^8}} m s⁻¹. Taking {{c = 3.00 * 10^8}} m s⁻¹, calculate the refractive index of the plastic (to 2 decimal places).",
      answer: { type: "number", value: 1.5, tolerance: 0.02, display: "1.50" },
      traps: [
        {
          spec: { type: "number", value: 0.67, tolerance: 0.02 },
          feedback: "You calculated v / c instead of c / v; refractive index is always ≥ 1.",
        },
      ],
      solution: [
        "Apply {{n = c / v}}.",
        "{{n = (3.00 * 10^8) / (2.00 * 10^8) = 1.50}}.",
      ],
      hints: [
        "Recall the definition of absolute refractive index {{n = c / v}}.",
        "Check that {{n >= 1}} since light travels slower in plastic than in vacuum.",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "refraction-diffraction-double-slit",
      strategy: "Coherence requirement",
      question:
        "Which condition must two overlapping light beams satisfy to produce a stable, observable interference pattern?",
      options: [
        "They must maintain a constant phase difference and identical frequency.",
        "They must travel in opposite directions with identical speed.",
        "They must originate from two separate independent filament bulbs.",
        "They must have different wavelengths that sum to a whole number.",
      ],
      answerIndex: 0,
      explanation:
        "A stable interference pattern requires coherent sources, meaning they oscillate at the same frequency and maintain a constant phase relationship over time. Independent filament lamps emit random phase jumps and cannot form steady fringes.",
      hints: [
        "Recall the IB definition of *coherence*.",
        "Why can two separate lamps not produce stationary interference fringes?",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "refraction-diffraction-double-slit",
      strategy: "Young's double-slit fringe spacing",
      question:
        "Green light of wavelength 500 nm passes through two slits separated by 0.25 mm onto a screen 1.50 m away. Calculate the fringe spacing {{s}} in mm.",
      answer: { type: "number", value: 3, tolerance: 0.05, display: "3.0 mm" },
      traps: [
        {
          spec: { type: "number", value: 0.003, tolerance: 0.0001 },
          feedback: "That is the spacing in metres — multiply by 1000 to convert to mm.",
        },
      ],
      solution: [
        "Convert to SI metres: {{λ = 500 * 10^(-9)}} m, {{d = 0.25 * 10^(-3)}} m, {{D = 1.50}} m.",
        "Calculate {{s = (λ D)/d = (500 * 10^(-9) * 1.50)/(0.25 * 10^(-3)) = 3.0 * 10^(-3)}} m = 3.0 mm.",
      ],
      hints: [
        "Convert nm ({{10^(-9)}}) and mm ({{10^(-3)}}) into metres first.",
        "Use {{s = (λ D)/d}} and convert the final answer to millimetres.",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Compare",
      guideRef: "single-slit-grating-hl",
      strategy: "Single-slit central maximum width",
      question:
        "In a single-slit diffraction pattern formed by monochromatic light, how does the angular width of the central bright maximum compare with that of the first secondary maximum?",
      options: [
        "The central maximum is half as wide as the first secondary maximum.",
        "The central maximum is twice as wide as the first secondary maximum.",
        "The central maximum has the same width as every secondary maximum.",
        "The central maximum is four times as wide as the first secondary maximum.",
      ],
      answerIndex: 1,
      explanation:
        "The central maximum spans from {{-λ/b}} to {{+λ/b}}, giving angular width {{2λ/b}}. Every secondary maximum spans between consecutive minima (such as {{λ/b}} to {{2λ/b}}), giving angular width {{λ/b}}—half as wide.",
      hints: [
        "Locate the zeros of a single-slit pattern: {{±λ/b, ±2λ/b, ±3λ/b}}.",
        "Subtract the positions of the minima bordering the central peak versus a secondary peak.",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "single-slit-grating-hl",
      strategy: "Missing order ratio d / b",
      question:
        "A double-slit aperture has slit separation {{d = 0.36}} mm and individual slit width {{b = 0.060}} mm. State the order number {{n}} of the first missing interference maximum.",
      answer: { type: "number", value: 6, tolerance: 0, display: "6" },
      traps: [
        {
          spec: { type: "number", value: 5, tolerance: 0 },
          feedback: "5 is the highest visible order inside the central envelope; the missing order itself is d / b.",
        },
      ],
      solution: [
        "A missing order occurs when a double-slit maximum coincides with the first single-slit minimum: {{n = d / b}}.",
        "{{n = 0.36 / 0.060 = 6}}.",
      ],
      hints: [
        "Equate the double-slit maximum {{n λ / d}} with the first single-slit minimum {{λ / b}}.",
        "Divide {{d = 0.36}} mm by {{b = 0.060}} mm.",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "standing-waves-resonance",
      strategy: "Node-to-node spacing equals λ / 2",
      question:
        "Two adjacent nodes on a standing wave along a vibrating cord are 0.35 m apart. Calculate the wavelength {{λ}} of the wave in metres.",
      answer: { type: "number", value: 0.7, tolerance: 0.01, display: "0.70 m" },
      traps: [
        {
          spec: { type: "number", value: 0.35, tolerance: 0.005 },
          feedback: "Adjacent nodes are half a wavelength apart, not a full wavelength — double 0.35 m.",
        },
      ],
      solution: [
        "Distance between adjacent nodes equals {{λ / 2}}.",
        "{{λ = 2 * 0.35 = 0.70}} m.",
      ],
      hints: [
        "How many half-wavelengths fit between two neighbouring nodes?",
        "Multiply the node-to-node distance by 2.",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "standing-waves-resonance",
      strategy: "Open–closed pipe harmonic selection",
      question:
        "Which sequence of harmonics can form standing sound waves inside an organ pipe closed at one end and open at the other?",
      options: [
        "All integer multiples of the fundamental frequency ({{f_1, 2f_1, 3f_1, ...}}).",
        "Even integer multiples of the fundamental frequency ({{2f_1, 4f_1, 6f_1, ...}}).",
        "Odd integer multiples of the fundamental frequency ({{f_1, 3f_1, 5f_1, ...}}).",
        "Only the fundamental frequency {{f_1}} without any higher harmonics.",
      ],
      answerIndex: 2,
      explanation:
        "Requiring a displacement node at the closed end and a displacement antinode at the open end fits an odd number of quarter-wavelengths inside {{L}}, permitting only odd harmonics ({{1, 3, 5, ...}}).",
      hints: [
        "What boundary conditions sit at the closed end and the open end?",
        "How many quarter-wavelengths can fit between a node and an antinode?",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "standing-waves-resonance",
      strategy: "Open–open pipe fundamental",
      question:
        "An organ pipe open at both ends has length 0.85 m. Taking the speed of sound in air as 340 m s⁻¹, calculate its fundamental frequency in Hz.",
      answer: { type: "number", value: 200, tolerance: 0.5, display: "200 Hz" },
      traps: [
        {
          spec: { type: "number", value: 100, tolerance: 0.5 },
          feedback: "100 Hz is for an open–closed pipe (v / 4L); an open–open pipe has f₁ = v / 2L.",
        },
      ],
      solution: [
        "For an open–open pipe, {{λ_1 = 2L = 2 * 0.85 = 1.70}} m.",
        "{{f_1 = v / λ_1 = 340 / 1.70 = 200}} Hz.",
      ],
      hints: [
        "Recall that an open–open pipe fits half a wavelength in its fundamental mode: {{λ_1 = 2L}}.",
        "Compute {{f_1 = v / (2L)}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q09",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "doppler-effect-sl-hl",
      strategy: "Redshift interpretation",
      question:
        "Absorption lines in the light from a distant galaxy appear at longer wavelengths than the corresponding laboratory lines. What does this observation imply?",
      options: [
        "The galaxy is moving rapidly toward Earth at constant speed.",
        "The galaxy is orbiting transversely perpendicular to our line of sight.",
        "The speed of light emitted by the galaxy is slower than {{c}}.",
        "The galaxy is receding away from Earth along our line of sight.",
      ],
      answerIndex: 3,
      explanation:
        "A shift toward longer wavelengths (lower frequency) is a redshift, which arises when the source is receding from the observer. Light always propagates through vacuum at speed {{c}}.",
      hints: [
        "Are longer wavelengths shifted toward the red end or blue end of the visible spectrum?",
        "Does redshift indicate recession or approach?",
      ],
    },
    {
      id: "c2-wave-phenomena-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "doppler-effect-sl-hl",
      strategy: "Moving source approaching",
      question:
        "A siren emitting 600 Hz approaches a stationary observer at 40 m s⁻¹ in still air ({{v = 340}} m s⁻¹). Calculate the observed frequency in Hz.",
      answer: { type: "number", value: 680, tolerance: 1, display: "680 Hz" },
      traps: [
        {
          spec: { type: "number", value: 671, tolerance: 1 },
          feedback: "You used the moving-observer equation f(v + u)/v; here the source is moving, so use fv/(v − u_s).",
        },
        {
          spec: { type: "number", value: 537, tolerance: 1 },
          feedback: "An approaching source produces a higher frequency — use a minus sign in the denominator.",
        },
      ],
      solution: [
        "Moving source approaching: {{f' = f (v / (v - u_s))}}.",
        "{{f' = 600 * (340 / (340 - 40)) = 600 * (340 / 300) = 680}} Hz.",
      ],
      hints: [
        "Because the source approaches, {{f'}} must be higher than 600 Hz.",
        "Substitute {{v = 340}} and {{u_s = 40}} into {{f' = f v / (v - u_s)}}.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (P1 SL Core + P2 SL/HL, 15 Qs each)
  // ===========================================================================
  papers: [
    {
      id: "c2-wave-phenomena-p1",
      title: "Paper 2 · Refraction, Interference & Standing Waves (SL Core)",
      level: "SL",
      questions: [
        {
          id: "c2-wave-phenomena-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Snell's law refraction angle",
          question:
            "A narrow ray of light travels from air ({{n_1 = 1.00}}) into crown glass ({{n_2 = 1.52}}) with an angle of incidence {{θ_1 = 42.0°}} to the normal. Calculate the angle of refraction {{θ_2}} in degrees to 1 decimal place.",
          answer: { type: "number", value: 26.1, tolerance: 0.2, display: "26.1°" },
          solution: [
            "Apply Snell's law: {{1.00 sin 42.0° = 1.52 sin θ_2}}.",
            "{{sin θ_2 = 0.6691 / 1.52 = 0.4402}}.",
            "{{θ_2 = 26.1°}} (1 d.p.).",
          ],
          hints: [
            "Write {{n_1 sin θ_1 = n_2 sin θ_2}} and check your calculator is in degree mode.",
            "Divide {{sin 42.0°}} by 1.52, then take inverse sine.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Wavelength in a medium λ_2 = λ_1 / n",
          question:
            "Orange light of wavelength 600 nm in air ({{n = 1.00}}) enters pure water ({{n = 1.33}}). Calculate the wavelength of this light inside the water in nm (to the nearest integer).",
          answer: { type: "number", value: 451, tolerance: 2, display: "451 nm" },
          traps: [
            {
              spec: { type: "number", value: 798, tolerance: 2 },
              feedback: "Wavelength decreases when entering a denser medium — divide by 1.33 rather than multiplying.",
            },
          ],
          solution: [
            "Frequency is constant across the boundary, so {{n_1 / n_2 = λ_2 / λ_1}}.",
            "{{λ_2 = 600 / 1.33 = 451}} nm.",
          ],
          hints: [
            "Does light speed up or slow down entering water from air?",
            "Use {{λ_water = λ_air / n}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Core–cladding critical angle",
          question:
            "An optical fibre consists of a glass core ({{n_1 = 1.60}}) coated with plastic cladding ({{n_2 = 1.40}}). Calculate the critical angle {{θ_c}} at the core–cladding boundary in degrees to 1 decimal place.",
          answer: { type: "number", value: 61.0, tolerance: 0.2, display: "61.0°" },
          traps: [
            {
              spec: { type: "number", value: 38.7, tolerance: 0.3 },
              feedback: "You used 1 / 1.60 (air outside) instead of n₂ / n₁ = 1.40 / 1.60.",
            },
          ],
          solution: [
            "Apply {{sin θ_c = n_2 / n_1 = 1.40 / 1.60 = 0.875}}.",
            "{{θ_c = 61.0°}}.",
          ],
          hints: [
            "Remember the cladding has {{n_2 = 1.40}}, not 1.00!",
            "Compute {{arcsin(1.40 / 1.60)}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Conditions and mechanism of TIR",
          marks: 3,
          question:
            "Explain how a step-index optical fibre confines infrared laser pulses along curved paths, stating both necessary conditions for total internal reflection.",
          modelAnswer:
            "The glass core has a higher refractive index than the surrounding cladding, so rays travelling from the core toward the boundary move from an optically denser to a less dense medium. Provided each ray meets the core–cladding wall at an incidence angle greater than the critical angle, no refraction occurs and the entire light pulse undergoes repeated internal reflections along the fibre with minimal attenuation.",
          markScheme: [
            {
              point: "Core has a higher refractive index than the cladding (optically denser to less dense medium).",
              keywords: ["higher refractive index", "denser to", "less dense"],
            },
            {
              point: "Angle of incidence at the boundary exceeds the critical angle.",
              keywords: ["greater than the critical", "exceeds the critical", "critical angle"],
            },
            {
              point: "Light undergoes repeated internal reflection with no refraction out of the core.",
              keywords: ["repeated internal reflection", "no refraction", "minimal attenuation"],
            },
          ],
          hints: [
            "State the refractive-index relationship between core and cladding.",
            "State the angle condition relative to the critical angle {{θ_c}}.",
            "Link repeated reflections to keeping energy trapped around bends.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Path difference in terms of λ",
          question:
            "Two coherent in-phase microwave transmitters emit waves of wavelength 3.0 cm. A detector stands 42.0 cm from transmitter 1 and 52.5 cm from transmitter 2. Calculate the path difference expressed as a multiple of {{λ}} (give a decimal number, e.g. 2.5).",
          answer: { type: "number", value: 3.5, tolerance: 0.02, display: "3.5" },
          traps: [
            {
              spec: { type: "number", value: 10.5, tolerance: 0.1 },
              feedback: "10.5 cm is the raw path difference in cm — divide by λ = 3.0 cm to express it in wavelengths.",
            },
          ],
          solution: [
            "Raw path difference: {{Δ = 52.5 - 42.0 = 10.5}} cm.",
            "In wavelengths: {{Δ / λ = 10.5 / 3.0 = 3.5}} (so destructive interference occurs).",
          ],
          hints: [
            "Subtract the two distances to get {{Δ}} in cm.",
            "Divide {{Δ}} by {{λ = 3.0}} cm.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Counting spacings between fringes",
          question:
            "In a double-slit experiment with slit separation {{d = 0.45}} mm and screen distance {{D = 1.80}} m, the distance measured from the **1st bright fringe** to the **7th bright fringe** on the same side of centre is 14.4 mm. Calculate the light wavelength {{λ}} in nm.",
          answer: { type: "number", value: 600, tolerance: 2, display: "600 nm" },
          traps: [
            {
              spec: { type: "number", value: 514, tolerance: 3 },
              feedback: "From the 1st bright fringe to the 7th bright fringe there are 7 − 1 = 6 fringe spacings, not 7!",
            },
          ],
          solution: [
            "Number of fringe spacings from 1st to 7th bright fringe is {{7 - 1 = 6}}.",
            "One fringe spacing: {{s = 14.4 / 6 = 2.40}} mm = {{2.40 * 10^(-3)}} m.",
            "{{λ = (s d) / D = (2.40 * 10^(-3) * 0.45 * 10^(-3)) / 1.80 = 6.00 * 10^(-7)}} m = 600 nm.",
          ],
          hints: [
            "Count carefully: how many gaps lie between fringe #1 and fringe #7?",
            "Divide 14.4 mm by 6 to get {{s}}, then rearrange {{s = (λ D)/d}} for {{λ}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "refraction-diffraction-double-slit",
          strategy: "Superposition & white-light dispersion",
          marks: 4,
          question:
            "Explain how alternating bright and dark fringes are formed on a distant screen in Young's double-slit experiment, and describe what happens to the pattern when monochromatic red light is replaced by white light.",
          modelAnswer:
            "Waves diffracting from the two coherent slits overlap and superpose on the screen. Where the path difference from the slits equals an integer number of wavelengths (nλ), waves arrive in phase and interfere constructively to create bright maxima; where the path difference is a half-integer number of wavelengths ((n+½)λ), waves arrive in antiphase and interfere destructively to form dark minima. With white light, zero path difference at the centre makes all colours reinforce into a white central fringe, flanked by short coloured spectra with violet closest to the centre and red furthest out because fringe spacing is proportional to wavelength.",
          markScheme: [
            {
              point: "Coherent waves from the two slits diffract, overlap, and superpose.",
              keywords: ["coherent", "superpose", "overlap"],
            },
            {
              point: "Constructive interference (bright) when path difference is nλ (in phase); destructive (dark) when (n+½)λ (antiphase).",
              keywords: ["constructive", "destructive", "path difference"],
            },
            {
              point: "White light gives a white central maximum where path difference is zero for all wavelengths.",
              keywords: ["white central", "zero path difference"],
            },
            {
              point: "Coloured flanking spectra appear with violet closer to centre than red since s ∝ λ.",
              keywords: ["violet closest", "violet closer", "coloured spectra"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics reached." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic mention of constructive/destructive interference OR white central fringe without linking path difference and wavelength dependence.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear path-difference conditions for bright/dark fringes plus accurate white-light description linking violet/red ordering to s = λD/d.",
            },
          ],
          hints: [
            "Start with coherence and the principle of superposition.",
            "Give the exact path-difference rules for bright versus dark fringes.",
            "For white light, check the centre first (zero path difference), then compare violet and red fringe spacings.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "standing-waves-resonance",
          strategy: "Combining v = sqrt(T/μ) with f₁ = v/(2L)",
          question:
            "A stretched guitar string of length 0.80 m has linear mass density {{μ = 1.0 * 10^(-3)}} kg m⁻¹ and is held under a tension of 160 N. Calculate its fundamental frequency in Hz.",
          answer: { type: "number", value: 250, tolerance: 1, display: "250 Hz" },
          traps: [
            {
              spec: { type: "number", value: 500, tolerance: 1 },
              feedback: "Remember λ₁ = 2L (not L), so divide wave speed by 2L = 1.60 m.",
            },
          ],
          solution: [
            "Wave speed along the string: {{v = sqrt(T / μ) = sqrt(160 / (1.0 * 10^(-3))) = sqrt(160000) = 400}} m s⁻¹.",
            "Fundamental wavelength: {{λ_1 = 2L = 1.60}} m.",
            "Fundamental frequency: {{f_1 = v / λ_1 = 400 / 1.60 = 250}} Hz.",
          ],
          hints: [
            "First find wave speed using {{v = sqrt(T / μ)}}.",
            "Then substitute into {{f_1 = v / (2L)}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "standing-waves-resonance",
          strategy: "Higher string harmonic speed",
          question:
            "A 1.20 m string fixed at both ends resonates in its 4th harmonic at 480 Hz. Calculate the speed of transverse waves along the string in m s⁻¹.",
          answer: { type: "number", value: 288, tolerance: 1, display: "288 m s^-1" },
          traps: [
            {
              spec: { type: "number", value: 576, tolerance: 1 },
              feedback: "In the 4th harmonic there are 4 half-wavelengths along L, so λ₄ = 2L / 4 = 0.60 m, not 1.20 m.",
            },
          ],
          solution: [
            "For the 4th harmonic on a fixed string, {{λ_4 = (2L) / 4 = 2.40 / 4 = 0.60}} m.",
            "Wave speed: {{v = f λ = 480 * 0.60 = 288}} m s⁻¹.",
          ],
          hints: [
            "Use {{λ_n = (2L) / n}} with {{n = 4}}.",
            "Multiply {{f}} by {{λ_4}} using {{v = f λ}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "standing-waves-resonance",
          strategy: "Structured comparison of wave types",
          marks: 4,
          question:
            "Compare and contrast a standing wave on a stretched string with a progressive transverse wave travelling along an identical string, referring to energy transfer, amplitude, phase, and wavelength.",
          modelAnswer:
            "Both waves share the same wave speed determined by string tension and mass density, and obey v = fλ. However, a progressive wave transfers energy along the string, whereas a standing wave stores vibrational energy locally with zero net energy transfer. In an undamped progressive wave every point oscillates with the same amplitude and phase varies continuously with position; in a standing wave amplitude varies spatially from zero at nodes to maximum at antinodes, points between adjacent nodes oscillate in phase, and points across a node oscillate in antiphase (π rad). Finally, adjacent standing-wave nodes are separated by half a wavelength rather than a full wavelength.",
          markScheme: [
            {
              point: "Similarity: both travel with the same speed √(T/μ) and obey v = fλ (or both involve transverse oscillation of string particles).",
              keywords: ["same wave speed", "obey v = fλ", "transverse"],
            },
            {
              point: "Energy transfer: progressive wave transfers energy along string; standing wave has zero net energy transfer.",
              keywords: ["zero net energy", "no net energy", "stores vibrational"],
            },
            {
              point: "Amplitude: constant along a progressive wave; varies from zero at nodes to maximum at antinodes in a standing wave.",
              keywords: ["zero at nodes", "maximum at antinodes", "varies spatially"],
            },
            {
              point: "Phase: varies continuously along progressive wave; points between nodes are in phase and across a node are in antiphase.",
              keywords: ["in phase", "antiphase", "varies continuously"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid similarity or contrast stated." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies one or two contrasts (usually energy transfer or nodes/antinodes) with no clear similarity or imprecise phase statement.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Gives a clear similarity plus accurate, paired contrasts across energy transfer, amplitude variation, and phase behaviour.",
            },
          ],
          hints: [
            "Remember 'Compare and contrast' requires BOTH at least one similarity and clear point-by-point differences.",
            "Address energy transfer, spatial amplitude profile, and phase relationships explicitly.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "standing-waves-resonance",
          strategy: "Open–closed 5th harmonic",
          question:
            "A cylindrical pipe of length 0.425 m is closed at one end and open at the other. Taking the speed of sound as 340 m s⁻¹, calculate the frequency of its **5th harmonic** in Hz.",
          answer: { type: "number", value: 1000, tolerance: 2, display: "1000 Hz" },
          traps: [
            {
              spec: { type: "number", value: 2000, tolerance: 2 },
              feedback: "2000 Hz uses the open–open fundamental (v / 2L); use f₁ = v / 4L for an open–closed pipe.",
            },
          ],
          solution: [
            "Fundamental frequency of open–closed pipe: {{f_1 = v / (4L) = 340 / (4 * 0.425) = 340 / 1.70 = 200}} Hz.",
            "5th harmonic frequency: {{f_5 = 5 f_1 = 5 * 200 = 1000}} Hz.",
          ],
          hints: [
            "First find {{f_1 = v / (4L)}}.",
            "Multiply {{f_1}} by 5 to find the 5th harmonic.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "standing-waves-resonance",
          strategy: "Resonance condition & damping effects",
          marks: 3,
          question:
            "Outline what is meant by resonance in a forced oscillating system, and describe two changes seen in its amplitude–frequency graph when damping increases.",
          modelAnswer:
            "Resonance occurs when the frequency of an external periodic driving force matches the natural frequency of the oscillator, causing maximum rate of energy transfer and maximum steady-state amplitude. When damping increases, the peak amplitude becomes significantly smaller, the resonance peak becomes broader (flatter), and the frequency at which maximum amplitude occurs shifts slightly below the undamped natural frequency.",
          markScheme: [
            {
              point: "Driving frequency equals natural frequency, giving maximum amplitude / maximum energy transfer.",
              keywords: ["natural frequency", "maximum rate of energy", "maximum steady-state amplitude"],
            },
            {
              point: "Increased damping lowers the peak amplitude and broadens the resonance curve.",
              keywords: ["significantly smaller", "broader", "flatter"],
            },
            {
              point: "Peak frequency shifts slightly downward below the undamped natural frequency.",
              keywords: ["shifts slightly below", "below the undamped"],
            },
          ],
          hints: [
            "Connect driving frequency {{f_d}} to natural frequency {{f_0}} and energy transfer.",
            "Recall all three graphical effects of damping: height, width, and peak position.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "doppler-effect-sl-hl",
          strategy: "EM Doppler wavelength shift",
          question:
            "A galaxy recedes from Earth at {{9.00 * 10^6}} m s⁻¹. A hydrogen absorption line measured in the laboratory has wavelength 656.0 nm. Calculate the wavelength shift {{Δλ}} in nm to 1 decimal place ({{c = 3.00 * 10^8}} m s⁻¹).",
          answer: { type: "number", value: 19.7, tolerance: 0.15, display: "19.7 nm" },
          traps: [
            {
              spec: { type: "number", value: 675.7, tolerance: 0.2 },
              feedback: "675.7 nm is the new observed wavelength λ' — the question asked specifically for the shift Δλ.",
            },
          ],
          solution: [
            "Apply {{Δλ / λ_0 ≈ v / c}}.",
            "{{Δλ = 656.0 * (9.00 * 10^6) / (3.00 * 10^8) = 656.0 * 0.0300 = 19.68}} nm ≈ 19.7 nm.",
          ],
          hints: [
            "Check whether the question asks for {{Δλ}} or the new wavelength {{λ'}}.",
            "Multiply 656.0 nm by {{v / c = 0.0300}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "doppler-effect-sl-hl",
          strategy: "Wavefront compression and stretching",
          marks: 3,
          question:
            "Explain, in terms of emitted wavefronts and wave speed, why a stationary listener hears a higher pitch as a racing car approaches and a lower pitch once it passes.",
          modelAnswer:
            "As the car moves toward the listener, it advances in the direction of its previously emitted crests, crowding successive wavefronts closer together and reducing the wavelength in front of it. Because the speed of sound in air remains constant, more wavefronts arrive per second, raising the observed frequency and pitch (f' = v/λ'). After passing, the car moves away from crests travelling toward the listener, stretching the wavelength behind it so fewer crests arrive per second and the heard pitch drops.",
          markScheme: [
            {
              point: "Approaching source crowds/compresses wavefronts ahead, shortening the wavelength.",
              keywords: ["crowding", "reducing the wavelength", "closer together"],
            },
            {
              point: "Wave speed in air is constant, so shorter λ increases arrival rate / observed frequency.",
              keywords: ["speed of sound in air remains constant", "more wavefronts arrive", "raising the observed frequency"],
            },
            {
              point: "After passing, receding source stretches wavefronts (longer λ), lowering observed frequency.",
              keywords: ["stretching the wavelength", "fewer crests", "pitch drops"],
            },
          ],
          hints: [
            "Mention what happens to wavefront spacing in front of the moving car.",
            "State explicitly that wave speed {{v}} in air is unchanged so {{f' = v / λ'}} rises.",
            "Explain the reverse (stretched wavefronts) after the car passes.",
          ],
        },
        {
          id: "c2-wave-phenomena-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "standing-waves-resonance",
          strategy: "Full quantitative and conceptual comparison of pipes",
          marks: 5,
          question:
            "Two 0.68 m organ pipes—Pipe A open at both ends and Pipe B closed at one end—resonate in air where sound speed is 340 m s⁻¹. Deduce the fundamental frequency and the next higher resonant frequency for each pipe, and explain how their end boundary conditions produce different harmonic series.",
          modelAnswer:
            "Pipe A (open–open) has displacement antinodes at both ends, fitting half a wavelength in its fundamental mode (λ₁ = 2L = 1.36 m), giving fundamental frequency f₁ = 340 / 1.36 = 250 Hz. Because all integer multiples of λ/2 fit between two antinodes, its next resonance is the 2nd harmonic at 500 Hz. Pipe B (open–closed) enforces a displacement node at the closed end and an antinode at the open end, fitting only a quarter-wavelength in its fundamental mode (λ₁ = 4L = 2.72 m), so f₁ = 340 / 2.72 = 125 Hz. Because only odd numbers of quarter-wavelengths satisfy asymmetric node–antinode boundaries, even harmonics are forbidden and its next resonance is the 3rd harmonic at 375 Hz.",
          markScheme: [
            {
              point: "Pipe A fundamental: λ₁ = 2L = 1.36 m and f₁ = 250 Hz.",
              keywords: ["250 hz", "1.36 m"],
            },
            {
              point: "Pipe A next resonance is 2nd harmonic at 500 Hz.",
              keywords: ["500 hz", "2nd harmonic"],
            },
            {
              point: "Pipe B fundamental: λ₁ = 4L = 2.72 m and f₁ = 125 Hz.",
              keywords: ["125 hz", "2.72 m"],
            },
            {
              point: "Pipe B next resonance is 3rd harmonic at 375 Hz (even harmonics forbidden).",
              keywords: ["375 hz", "3rd harmonic"],
            },
            {
              point: "Links boundary conditions (A–A fits any integer λ/2 vs N–A fits only odd λ/4) to the harmonic spectra.",
              keywords: ["antinodes at both ends", "odd numbers of quarter", "even harmonics are forbidden"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No correct frequencies or boundary physics." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Computes fundamental frequencies for one or both pipes but misidentifies the next open–closed mode or omits boundary-condition reasoning.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Correct frequencies for both pipes with partial boundary explanation, or clear boundary explanation with one arithmetic slip.",
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "All four frequencies exact (250, 500, 125, 375 Hz) and crisp physical link from N/A end conditions to all vs odd-only harmonics.",
            },
          ],
          hints: [
            "Compute {{f_1 = v / (2L)}} for open–open Pipe A and {{f_1 = v / (4L)}} for open–closed Pipe B.",
            "Remember the next allowed resonance of Pipe B is the **3rd** harmonic ({{3 f_1}}), not the 2nd!",
            "Explicitly name displacement nodes and antinodes at the pipe ends.",
          ],
        },
      ],
    },

    // =========================================================================
    // PAPER P2: SL + HL (15 Qs)
    // =========================================================================
    {
      id: "c2-wave-phenomena-p2",
      title: "Paper 2 · Single-Slit, Gratings, Pipes & Doppler (SL + HL)",
      level: "HL",
      questions: [
        {
          id: "c2-wave-phenomena-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "single-slit-grating-hl",
          strategy: "Full width of central single-slit maximum",
          question:
            "Monochromatic light of wavelength 540 nm passes through a single slit of width 0.090 mm and falls on a screen 2.50 m away. Calculate the total linear width of the **central bright maximum** in mm.",
          answer: { type: "number", value: 30, tolerance: 0.3, display: "30 mm" },
          traps: [
            {
              spec: { type: "number", value: 15, tolerance: 0.2 },
              feedback: "15 mm is the half-width from the centre to the 1st minimum — double it for the total central maximum width.",
            },
          ],
          solution: [
            "First minimum angle: {{θ = λ / b = (540 * 10^(-9)) / (0.090 * 10^(-3)) = 6.0 * 10^(-3)}} rad.",
            "Linear half-width: {{y = D θ = 2.50 * 6.0 * 10^(-3) = 0.015}} m = 15 mm.",
            "Full central maximum width: {{2y = 30}} mm.",
          ],
          hints: [
            "Compute the first minimum position {{y = (λ D)/b}}.",
            "Double {{y}} because the central maximum spans from {{-y}} to {{+y}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "single-slit-grating-hl",
          strategy: "Inverting central angular width 2λ/b",
          question:
            "Light of wavelength 640 nm passes through a single narrow slit, forming a central bright maximum whose total angular width is 0.016 rad. Calculate the slit width {{b}} in μm.",
          answer: { type: "number", value: 80, tolerance: 1, display: "80 μm" },
          traps: [
            {
              spec: { type: "number", value: 40, tolerance: 1 },
              feedback: "0.016 rad is the full width (2λ/b), so the first minimum is at θ = 0.008 rad!",
            },
          ],
          solution: [
            "Total angular width = {{2 λ / b = 0.016}} rad, so {{λ / b = 0.0080}} rad.",
            "{{b = (640 * 10^(-9)) / 0.0080 = 8.0 * 10^(-5)}} m = 80 μm.",
          ],
          hints: [
            "Halve the total angular width to find the first minimum angle {{θ = λ / b}}.",
            "Solve {{b = λ / θ}} and convert metres to micrometres ({{1 μm = 10^(-6) m}}).",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "single-slit-grating-hl",
          strategy: "Pairing Huygens wavelets across half-slit",
          marks: 3,
          question:
            "Explain, using Huygens secondary wavelets and path difference, why the first dark minimum of a single-slit diffraction pattern occurs at {{b sin θ = λ}}.",
          modelAnswer:
            "By Huygens' principle, every point across the slit of width b acts as a coherent source of secondary wavelets. Divide the slit into a top half and a bottom half, pairing each wavelet in the upper half with a partner exactly b/2 below it. At angle θ where (b/2) sin θ = λ/2, every pair arrives with a path difference of half a wavelength (antiphase) and cancels completely by destructive interference, giving total darkness at b sin θ = λ.",
          markScheme: [
            {
              point: "Points across the slit act as coherent secondary wavelet sources.",
              keywords: ["secondary wavelets", "huygens", "coherent source"],
            },
            {
              point: "Pairs wavelets from the top half and bottom half separated by b/2.",
              keywords: ["top half", "bottom half", "b/2"],
            },
            {
              point: "Path difference (b/2) sin θ = λ/2 causes complete destructive cancellation, simplifying to b sin θ = λ.",
              keywords: ["destructive interference", "cancels completely", "half a wavelength"],
            },
          ],
          hints: [
            "Treat the slit width {{b}} as a line of coherent secondary wavelet sources.",
            "Split the slit into two halves separated by {{b / 2}} and pair corresponding sources.",
            "Set the pair path difference to {{λ / 2}} and simplify.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "single-slit-grating-hl",
          strategy: "Peaks strictly inside central diffraction envelope",
          question:
            "A double-slit slide has centre-to-centre slit separation {{d = 0.35}} mm and individual slit width {{b = 0.070}} mm. Calculate the total number of bright interference fringes visible strictly inside the central single-slit diffraction envelope.",
          answer: { type: "number", value: 9, tolerance: 0, display: "9" },
          traps: [
            {
              spec: { type: "number", value: 5, tolerance: 0 },
              feedback: "5 is the missing order number d / b — count all bright orders from −4 through 0 to +4.",
            },
            {
              spec: { type: "number", value: 8, tolerance: 0 },
              feedback: "Don't forget to include the central n = 0 maximum!",
            },
          ],
          solution: [
            "Ratio {{d / b = 0.35 / 0.070 = 5}}, so orders {{n = ±5}} are missing.",
            "Visible bright orders inside the central envelope: {{n = -4, -3, -2, -1, 0, +1, +2, +3, +4}}.",
            "Total count: {{2(5) - 1 = 9}} fringes.",
          ],
          hints: [
            "Find the first missing order {{k = d / b}}.",
            "Count all integers strictly between {{-k}} and {{+k}} (formula {{2k - 1}}).",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "single-slit-grating-hl",
          strategy: "Diffraction grating angle",
          question:
            "Light of wavelength 600 nm is incident normally on a diffraction grating ruled with 500 lines mm⁻¹. Calculate the diffraction angle of the **2nd-order** maximum in degrees to 1 decimal place.",
          answer: { type: "number", value: 36.9, tolerance: 0.2, display: "36.9°" },
          traps: [
            {
              spec: { type: "number", value: 17.5, tolerance: 0.2 },
              feedback: "17.5° is the 1st-order angle — multiply by n = 2 for the 2nd order.",
            },
          ],
          solution: [
            "Slit spacing: {{d = 1 / (5.00 * 10^5) = 2.00 * 10^(-6)}} m.",
            "Apply {{n λ = d sin θ}} with {{n = 2}}: {{sin θ = (2 * 600 * 10^(-9)) / (2.00 * 10^(-6)) = 0.600}}.",
            "{{θ = 36.9°}}.",
          ],
          hints: [
            "Convert 500 lines mm⁻¹ to lines m⁻¹ and invert to get {{d}}.",
            "Solve {{sin θ = (2 λ) / d}} and take {{arcsin}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "single-slit-grating-hl",
          strategy: "Total bright spots 2 n_max + 1",
          question:
            "A green laser ({{λ = 532}} nm) strikes a diffraction grating with 450 lines mm⁻¹ at normal incidence. Calculate the **total number of bright maxima** visible across a full semicircular screen (including the central {{n = 0}} beam).",
          answer: { type: "number", value: 9, tolerance: 0, display: "9" },
          traps: [
            {
              spec: { type: "number", value: 4, tolerance: 0 },
              feedback: "4 is the highest order n_max on one side — remember both sides plus the central n = 0 beam (2n_max + 1).",
            },
          ],
          solution: [
            "Slit spacing: {{d = 1 / (4.50 * 10^5) = 2.222 * 10^(-6)}} m = 2222 nm.",
            "Maximum order: {{n <= d / λ = 2222 / 532 = 4.18}} → {{n_max = 4}}.",
            "Total bright maxima: {{2(4) + 1 = 9}}.",
          ],
          hints: [
            "Find {{d = 1 / (450 * 10^3)}} m, then round {{d / λ}} down to get {{n_max}}.",
            "Count negative orders, zero order, and positive orders: {{2 n_max + 1}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "single-slit-grating-hl",
          strategy: "Multi-slit sharpening & spectral dispersion",
          marks: 4,
          question:
            "Explain how the monochromatic interference pattern changes when a double slit of separation {{d}} is replaced by a diffraction grating of identical slit spacing {{d}} with many slits illuminated, and explain why white light produces spectra with red bent further than violet.",
          modelAnswer:
            "Because the slit spacing d is unchanged, principal maxima remain at the exact same angles satisfying nλ = d sin θ. However, illuminating N slits causes N wavelets to reinforce in phase at each principal maximum, boosting peak intensity proportionally to N², while even a tiny angular shift causes destructive cancellation among the many slits, making the bright maxima much sharper and narrower with wide dark regions between them. With white light, sin θ = nλ/d is directly proportional to wavelength for n ≥ 1, so longer-wavelength red light diffracts through a larger angle than shorter-wavelength violet light.",
          markScheme: [
            {
              point: "Principal maxima stay at the same angles since d and nλ = d sin θ are unchanged.",
              keywords: ["exact same angles", "same angles", "unchanged"],
            },
            {
              point: "Peak intensity increases strongly (proportional to N²) because more slits contribute in phase.",
              keywords: ["n²", "n^2", "peak intensity"],
            },
            {
              point: "Maxima become much sharper/narrower with wider dark regions due to multi-slit cancellation off-angle.",
              keywords: ["much sharper", "narrower", "wide dark"],
            },
            {
              point: "From sin θ = nλ/d, larger wavelength red gives a larger angle than shorter wavelength violet.",
              keywords: ["longer-wavelength red", "larger angle", "proportional to wavelength"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant grating physics." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States maxima are brighter/sharper OR notes red bends more than violet without citing nλ = d sin θ or unchanged positions.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly contrasts angular position, sharpness, and N² intensity scaling, and justifies red > violet dispersion quantitatively via sin θ = nλ/d.",
            },
          ],
          hints: [
            "Check three features of the monochromatic maxima: positions, brightness, and sharpness.",
            "For white light, rearrange {{n λ = d sin θ}} for {{sin θ}} to show why red has a larger angle than violet.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "standing-waves-resonance",
          strategy: "Mystery pipe length from consecutive resonances",
          question:
            "Two consecutive resonant frequencies of a pipe filled with air ({{v = 340}} m s⁻¹) are 255 Hz and 425 Hz. Determine the length of the pipe in metres (to 2 decimal places).",
          answer: { type: "number", value: 1, tolerance: 0.02, display: "1.00 m" },
          traps: [
            {
              spec: { type: "number", value: 2, tolerance: 0.02 },
              feedback: "The ratio 255 : 425 = 3 : 5 proves this is an open–closed pipe (L = v / 4f₁), not open–open.",
            },
          ],
          solution: [
            "Ratio {{255 / 425 = 3 / 5}} → consecutive odd harmonics (3rd and 5th), so the pipe is **open–closed**.",
            "Spacing between consecutive odd harmonics is {{2 f_1 = 425 - 255 = 170}} Hz, giving {{f_1 = 85}} Hz.",
            "Length {{L = v / (4 f_1) = 340 / (4 * 85) = 1.00}} m.",
          ],
          hints: [
            "Simplify the ratio {{255 / 425}} to determine whether the pipe is open–open or open–closed.",
            "For an open–closed pipe, consecutive resonances differ by {{2 f_1}}, and {{L = v / (4 f_1)}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "standing-waves-resonance",
          strategy: "Standing-wave formation & odd-harmonic proof",
          marks: 4,
          question:
            "Explain how a standing sound wave is established inside a cylindrical tube closed at one end, and explain why only odd harmonics can resonate in this tube.",
          modelAnswer:
            "Sound waves travelling down the tube reflect off the closed barrier and superpose with the incoming waves of identical frequency, wavelength, and amplitude moving in the opposite direction, forming fixed displacement nodes and antinodes. Air cannot oscillate through the rigid barrier, forcing a displacement node at the closed end, while free air at the mouth forms a displacement antinode at the open end. Because the spacing from a node to an adjacent antinode is λ/4 and additional half-wavelength loops add multiples of λ/2, the pipe length must satisfy L = (2k−1)λ/4, yielding only odd multiples of the fundamental frequency v/(4L).",
          markScheme: [
            {
              point: "Incident and reflected waves of same f, λ, amplitude travelling in opposite directions superpose.",
              keywords: ["reflect", "opposite direction", "superpose"],
            },
            {
              point: "Closed end is a displacement node and open end is a displacement antinode.",
              keywords: ["node at the closed", "antinode at the open"],
            },
            {
              point: "Distance from node to antinode requires odd multiples of λ/4 inside L.",
              keywords: ["λ/4", "quarter", "2k-1"],
            },
            {
              point: "Substituting into f = v/λ yields f = (2k−1)v/(4L), so only odd multiples of f₁ exist.",
              keywords: ["odd multiples", "v/(4l)", "fundamental frequency"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid standing-wave explanation." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mentions reflection/superposition OR end node/antinode without deriving the odd-harmonic condition.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Full formation mechanism plus clear link from N–A boundary conditions to L = (2k−1)λ/4 and odd harmonics.",
            },
          ],
          hints: [
            "Start with reflection + superposition of identical opposite-travelling waves.",
            "Identify the node at the closed end and antinode at the open end.",
            "Show algebraically why {{L}} must be an odd multiple of {{λ / 4}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "doppler-effect-sl-hl",
          strategy: "Moving source approaching",
          question:
            "An emergency vehicle sounding a 720 Hz tone drives directly toward a stationary pedestrian at 20 m s⁻¹ in still air ({{v = 340}} m s⁻¹). Calculate the frequency heard by the pedestrian in Hz.",
          answer: { type: "number", value: 765, tolerance: 1, display: "765 Hz" },
          traps: [
            {
              spec: { type: "number", value: 762, tolerance: 1 },
              feedback: "762 Hz uses the moving-observer equation — here the source is moving, so put u_s in the denominator.",
            },
          ],
          solution: [
            "Moving source approaching: {{f' = f (v / (v - u_s))}}.",
            "{{f' = 720 * (340 / (340 - 20)) = 720 * (340 / 320) = 765}} Hz.",
          ],
          hints: [
            "Identify that the source is moving toward a stationary observer.",
            "Compute {{720 * 340 / 320}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "doppler-effect-sl-hl",
          strategy: "Moving observer receding",
          question:
            "A stationary harbour foghorn emits a 510 Hz note in still air ({{v = 340}} m s⁻¹). A ferry sails straight away from the foghorn at 10.0 m s⁻¹. Calculate the frequency heard on the ferry in Hz.",
          answer: { type: "number", value: 495, tolerance: 1, display: "495 Hz" },
          traps: [
            {
              spec: { type: "number", value: 525, tolerance: 1 },
              feedback: "Moving away lowers the heard frequency — subtract u_o in the numerator.",
            },
          ],
          solution: [
            "Moving observer receding: {{f' = f ((v - u_o) / v)}}.",
            "{{f' = 510 * ((340 - 10) / 340) = 510 * (330 / 340) = 495}} Hz.",
          ],
          hints: [
            "Here the *observer* is moving away from a stationary source.",
            "Apply {{f' = f ((v - u_o) / v)}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "doppler-effect-sl-hl",
          strategy: "Wavelength behind a receding source",
          question:
            "A car sounding a 400 Hz horn drives directly away from a stationary microphone at 25 m s⁻¹ in air where sound travels at 340 m s⁻¹. Calculate the wavelength of the sound waves arriving at the microphone in metres (to 3 significant figures).",
          answer: { type: "number", value: 0.913, tolerance: 0.005, display: "0.913 m" },
          traps: [
            {
              spec: { type: "number", value: 0.85, tolerance: 0.005 },
              feedback: "0.85 m is the stationary wavelength v / f; behind a receding source wavefronts are stretched to (v + u_s) / f.",
            },
          ],
          solution: [
            "Behind a receding source, each wavelength stretches to {{λ' = (v + u_s) / f}}.",
            "{{λ' = (340 + 25) / 400 = 365 / 400 = 0.9125}} m ≈ 0.913 m.",
          ],
          hints: [
            "Does a receding source compress or stretch wavefronts behind it?",
            "Compute {{λ' = (v + u_s) / f}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "doppler-effect-sl-hl",
          strategy: "Physical asymmetry of mechanical Doppler effect",
          marks: 3,
          question:
            "Explain why, for sound waves travelling in still air at speed {{v}}, a source approaching a stationary listener at speed {{u}} produces a higher observed frequency than a listener approaching a stationary source at the same speed {{u}}.",
          modelAnswer:
            "Sound propagates through a physical medium (air), so motion relative to the air breaks symmetry between source and observer. A moving source physically compresses the wavelength in air to (v − u)/f, giving f_source = f v/(v − u), whereas a moving observer leaves the wavelength in air unchanged and simply sweeps past wavefronts faster, giving f_obs = f (v + u)/v. Comparing the two factors shows v/(v − u) > (v + u)/v because cross-multiplying gives v² > v² − u², so the moving source always produces a higher frequency.",
          markScheme: [
            {
              point: "Sound requires a medium (air), so source motion and observer motion relative to the medium are physically distinct.",
              keywords: ["medium", "relative to the air", "breaks symmetry"],
            },
            {
              point: "Moving source alters wavelength in air giving fv/(v − u), whereas moving observer leaves λ unchanged giving f(v + u)/v.",
              keywords: ["compresses the wavelength", "wavelength in air unchanged"],
            },
            {
              point: "Algebraic proof that v/(v − u) > (v + u)/v since v² > v² − u².",
              keywords: ["v² > v² - u²", "v^2 > v^2 - u^2", "always produces a higher"],
            },
          ],
          hints: [
            "Mention the role of the physical medium (air) for mechanical sound waves.",
            "Compare what happens to wavelength in air in both cases.",
            "Show mathematically why {{v / (v - u) > (v + u) / v}}.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "single-slit-grating-hl",
          strategy: "Full modulated double-slit quantitative analysis",
          marks: 4,
          question:
            "Monochromatic light of wavelength 600 nm passes through two slits of separation {{d = 0.30}} mm and individual width {{b = 0.10}} mm onto a screen 2.00 m away. Calculate the interference fringe spacing {{s}} and the linear width of the central diffraction maximum, and deduce the missing orders and total bright fringes strictly inside the central envelope.",
          modelAnswer:
            "The fine double-slit fringe spacing is s = λD/d = (600 × 10⁻⁹ × 2.00) / (0.30 × 10⁻³) = 4.0 mm. The first single-slit diffraction minimum lies at y₁ = λD/b = (600 × 10⁻⁹ × 2.00) / (0.10 × 10⁻³) = 12 mm, so the total linear width of the central diffraction maximum is 2y₁ = 24 mm. Because the ratio d/b = 0.30/0.10 = 3, interference orders n = ±3, ±6, ±9… coincide with single-slit minima and are missing. Only orders −2, −1, 0, +1, and +2 lie inside the central envelope, giving 5 bright interference fringes.",
          markScheme: [
            {
              point: "Interference fringe spacing s = λD/d = 4.0 mm.",
              keywords: ["4.0 mm", "4 mm"],
            },
            {
              point: "Central diffraction maximum total width = 2λD/b = 24 mm.",
              keywords: ["24 mm", "2y"],
            },
            {
              point: "Ratio d/b = 3 identifies missing orders at n = ±3 (and integer multiples ±6, ±9…).",
              keywords: ["d/b = 0.30/0.10 = 3", "±3", "n = ±3"],
            },
            {
              point: "Deduces 5 bright fringes inside the central diffraction envelope (−2, −1, 0, +1, +2).",
              keywords: ["5 bright", "2, -1, 0, +1"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid calculations or deductions." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Finds fringe spacing OR half-width of diffraction envelope but misses doubling or missing-order count.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately calculates s = 4.0 mm, full central width 24 mm, missing orders ±3, and 5 central fringes.",
            },
          ],
          hints: [
            "Compute {{s = (λ D)/d}} first, then the full central envelope width {{2 λ D / b}}.",
            "Take {{d / b}} to locate the missing orders and list all surviving orders inside the central peak.",
          ],
        },
        {
          id: "c2-wave-phenomena-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "doppler-effect-sl-hl",
          strategy: "Medical Doppler ultrasound double shift",
          marks: 6,
          question:
            "A stationary medical Doppler ultrasound probe emits 5.00 MHz sound waves into blood tissue ({{v = 1540}} m s⁻¹). The waves reflect directly back from red blood cells approaching the probe at {{u = 0.77}} m s⁻¹. Explain why the echo undergoes a double Doppler shift, calculate the frequency shift {{Δf}} using the approximation {{Δf / f ≈ (2 u) / v}}, compare this with the exact two-step equation, and evaluate why the approximation is valid.",
          modelAnswer:
            "The echo experiences two consecutive shifts: first, approaching red blood cells act as a moving observer, intercepting wavefronts at an elevated frequency f₁ = f(v + u)/v; second, as the cells immediately scatter the waves back toward the stationary transducer, they act as a moving source compressing the reflected wavelength, producing f'' = f₁ v/(v − u) = f(v + u)/(v − u). Using the double-shift approximation gives Δf ≈ 5.00 × 10⁶ × (2 × 0.77 / 1540) = 5.00 × 10⁶ × 1.00 × 10⁻³ = 5.00 kHz. Evaluating the exact expression yields f'' = 5.00 × 10⁶ × (1540.77 / 1539.23) = 5.0050025 MHz, so Δf_exact = 5.0025 kHz ≈ 5.00 kHz—agreeing to 0.05%. The approximation is highly accurate here because u/v = 5.0 × 10⁻⁴ ≪ 1, making higher-order terms of size (u/v)² negligible.",
          markScheme: [
            {
              point: "Step 1: blood cells act as an approaching moving observer receiving f₁ = f(v+u)/v.",
              keywords: ["moving observer", "f(v + u)/v"],
            },
            {
              point: "Step 2: cells reflect waves as an approaching moving source giving f'' = f(v+u)/(v−u).",
              keywords: ["moving source", "f(v + u)/(v - u)"],
            },
            {
              point: "Correct approximate shift calculation yielding Δf = 5.00 kHz (5000 Hz).",
              keywords: ["5.00 khz", "5000 hz"],
            },
            {
              point: "Exact two-step calculation yielding 5.0025 kHz (or 5.0050025 MHz).",
              keywords: ["5.0025 khz", "1540.77 / 1539.23", "5.0050025"],
            },
            {
              point: "Compares values explicitly (agrees to 3 s.f. / ~0.05% error).",
              keywords: ["0.05%", "agreeing to"],
            },
            {
              point: "Justifies validity via u ≪ v (u/v = 5 × 10⁻⁴ ≪ 1), so higher-order terms are negligible.",
              keywords: ["negligible", "5.0 × 10⁻⁴", "higher-order"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid Doppler analysis." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States double shift qualitatively OR computes 5.00 kHz from formula without deriving the two-step mechanism.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Explains both moving-observer and moving-source stages and obtains 5.00 kHz, but comparison with exact formula or u ≪ v justification is incomplete.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Rigorous two-step derivation, accurate approximate and exact calculations, quantitative agreement check, and clear u/v ≪ 1 justification.",
            },
          ],
          hints: [
            "Break reflection into two roles for the blood cells: receiver first, transmitter second.",
            "Notice that {{2 * 0.77 / 1540 = 0.00100}} cleanly!",
            "Compare the exact fraction {{1540.77 / 1539.23}} with {{1.001}} and cite {{u / v << 1}}.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 stretch IB problems, all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "c2-wave-phenomena-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "refraction-diffraction-double-slit",
      strategy: "TIR inside a submerged 45° prism",
      question:
        "A light ray enters a right-angled isosceles glass prism (45°–45°–90°) normally through one short face and strikes the internal hypotenuse at 45° to the normal. If the entire prism is submerged in water ({{n_w = 1.33}}), calculate the **minimum** refractive index {{n_min}} the glass must have for total internal reflection to still occur at the hypotenuse (give your answer to 2 decimal places).",
      answer: { type: "number", value: 1.88, tolerance: 0.02, display: "1.88" },
      traps: [
        {
          spec: { type: "number", value: 1.41, tolerance: 0.02 },
          feedback: "1.41 is the minimum index in air (1 / sin 45°); in water you must use n_w / sin 45°.",
        },
      ],
      solution: [
        "For TIR at {{θ_1 = 45°}}, we need {{θ_c <= 45°}}, so {{sin θ_c = n_w / n_min <= sin 45°}}.",
        "Rearranging: {{n_min = n_w / sin 45° = 1.33 * sqrt(2) = 1.88}}.",
      ],
      hints: [
        "Set the critical angle {{θ_c}} equal to the incidence angle 45° at the glass–water hypotenuse.",
        "Apply {{sin 45° = n_w / n_min}} with {{n_w = 1.33}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "single-slit-grating-hl",
      strategy: "Exact grating trigonometry (tan θ → sin θ)",
      question:
        "A red He–Ne laser ({{λ = 632}} nm) illuminates a diffraction grating normally. On a flat screen 1.50 m behind the grating, the 1st-order bright spot appears 0.500 m from the central maximum. Without using the small-angle approximation, calculate the grating slit spacing {{d}} in μm (to 2 decimal places).",
      answer: { type: "number", value: 2, tolerance: 0.02, display: "2.00 μm" },
      traps: [
        {
          spec: { type: "number", value: 1.9, tolerance: 0.02 },
          feedback: "1.90 μm comes from using the small-angle approximation d ≈ λD / y instead of finding θ = arctan(y / D) and using sin θ!",
        },
      ],
      solution: [
        "Find the exact angle from the right triangle formed by screen distance {{D = 1.50}} m and spot offset {{y = 0.500}} m: {{tan θ = 0.500 / 1.50 = 1/3}} → {{θ = 18.435°}}.",
        "Compute {{sin θ = sin 18.435° = 1 / sqrt(10) = 0.3162}}.",
        "Apply {{1 * λ = d sin θ}}: {{d = (632 * 10^(-9)) / 0.3162 = 2.00 * 10^(-6)}} m = 2.00 μm.",
      ],
      hints: [
        "Find {{θ}} using {{tan θ = y / D = 0.500 / 1.50}}—do NOT assume {{sin θ ≈ tan θ}}!",
        "Once you have {{sin θ}}, solve {{d = λ / sin θ}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "standing-waves-resonance",
      strategy: "Quadratic tension scaling T ∝ f²",
      question:
        "A stretched piano wire of fixed length and mass per unit length vibrates at a fundamental frequency of 220 Hz. By what **percentage** must the tension in the wire be increased to raise its fundamental frequency by 10% to 242 Hz?",
      answer: { type: "number", value: 21, tolerance: 0.2, display: "21%" },
      traps: [
        {
          spec: { type: "number", value: 10, tolerance: 0.2 },
          feedback: "Frequency scales with √T, not linearly with T — square the factor 1.10!",
        },
        {
          spec: { type: "number", value: 20, tolerance: 0.2 },
          feedback: "20% is only a rough linear approximation; compute the exact square (1.10)² − 1 = 21%.",
        },
      ],
      solution: [
        "Since {{f_1 = (1 / (2L)) sqrt(T / μ)}}, tension scales as {{T ∝ f_1^2}}.",
        "Increasing {{f_1}} by 10% multiplies {{f_1}} by 1.10, so {{T' / T = (1.10)^2 = 1.21}}.",
        "Therefore tension must increase by {{(1.21 - 1) * 100% = 21%}}.",
      ],
      hints: [
        "Express tension {{T}} as a function of {{f_1}} from {{f_1 = sqrt(T/μ) / (2L)}}.",
        "Square the frequency multiplier 1.10 to find the exact tension ratio.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "doppler-effect-sl-hl",
      strategy: "Eliminating unknown source frequency via ratio",
      question:
        "An express train races at constant speed {{u_s}} past a stationary platform observer in still air ({{v = 340}} m s⁻¹). As the train passes, the frequency of its horn heard by the observer drops abruptly from 550 Hz (approaching) to 450 Hz (receding). Calculate the speed {{u_s}} of the train in m s⁻¹.",
      answer: { type: "number", value: 34, tolerance: 0.3, display: "34 m s^-1" },
      solution: [
        "Write both Doppler equations: {{f_app = f v / (v - u_s) = 550}} Hz and {{f_rec = f v / (v + u_s) = 450}} Hz.",
        "Divide the two equations to eliminate the unknown rest frequency {{f}}: {{550 / 450 = (v + u_s) / (v - u_s) = 11 / 9}}.",
        "Cross-multiply: {{9(340 + u_s) = 11(340 - u_s)}} → {{20 u_s = 2 * 340 = 680}} → {{u_s = 34}} m s⁻¹.",
      ],
      hints: [
        "You don't know the emitted frequency {{f}}—divide the approaching equation by the receding equation to eliminate {{f}}!",
        "Simplify {{550 / 450 = 11 / 9 = (340 + u_s) / (340 - u_s)}} and solve for {{u_s}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "single-slit-grating-hl",
      strategy: "Lowest common multiple of wavelengths in a grating",
      question:
        "Two laser beams of wavelengths {{λ_A = 450}} nm and {{λ_B = 600}} nm strike a 500 lines mm⁻¹ diffraction grating together at normal incidence. Calculate the smallest **non-zero** diffraction angle (in degrees to 1 decimal place) at which a maximum of {{λ_A}} coincides exactly with a maximum of {{λ_B}}.",
      answer: { type: "number", value: 64.2, tolerance: 0.2, display: "64.2°" },
      solution: [
        "Coincidence requires {{n_A λ_A = n_B λ_B}}, so {{450 n_A = 600 n_B}} → {{3 n_A = 4 n_B}}.",
        "The smallest positive integer solution is {{n_A = 4}} and {{n_B = 3}}, giving {{n λ = 1800}} nm.",
        "Slit spacing {{d = 1 / (5.00 * 10^5) = 2.00 * 10^(-6)}} m = 2000 nm.",
        "{{sin θ = 1800 / 2000 = 0.900}} → {{θ = 64.2°}}.",
      ],
      hints: [
        "Set {{n_A (450) = n_B (600)}} and find the smallest positive integers {{n_A, n_B}}.",
        "Compute {{d = 2000}} nm and find {{θ = arcsin(n_A λ_A / d)}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "single-slit-grating-hl",
      strategy: "Parametric analysis of modulated double slits",
      marks: 5,
      question:
        "Derive the missing-order condition for a double slit of separation {{d}} and individual slit width {{b}}. Then deduce what happens to (i) the fine interference fringe spacing, (ii) the width of the central single-slit envelope, and (iii) the number of bright fringes inside the central envelope when {{b}} is doubled while {{d}}, {{λ}}, and {{D}} stay constant.",
      modelAnswer:
        "Double-slit bright maxima satisfy d sin θ = nλ (n = 0, 1, 2…), whereas single-slit diffraction zeros satisfy b sin θ = mλ (m = 1, 2, 3…). Dividing the two equations eliminates sin θ and λ, yielding the missing-order condition n/m = d/b whenever a double-slit peak aligns with a diffraction zero. If individual slit width b is doubled at fixed d, λ, and D: (i) the fine fringe spacing s = λD/d remains completely unchanged because it depends only on d; (ii) the central diffraction envelope width 2λD/b halves; and (iii) the ratio d/b halves, so roughly half as many interference fringes fit inside the narrowed central diffraction envelope (with the first missing order dropping to half its previous order number).",
      markScheme: [
        {
          point: "States double-slit maxima d sin θ = nλ and single-slit minima b sin θ = mλ.",
          keywords: ["d sin θ = nλ", "b sin θ = mλ"],
        },
        {
          point: "Divides equations to derive n/m = d/b (suppressing order n when it coincides with minimum m).",
          keywords: ["n/m = d/b", "eliminates sin θ"],
        },
        {
          point: "Fine fringe spacing s = λD/d stays unchanged.",
          keywords: ["completely unchanged", "depends only on d"],
        },
        {
          point: "Central diffraction envelope width 2λD/b halves.",
          keywords: ["width 2λd/b halves", "envelope width"],
        },
        {
          point: "Fewer fringes (roughly half as many) appear inside the central envelope as d/b halves.",
          keywords: ["ratio d/b halves", "half as many"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid derivation or deduction." },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Writes n/m = d/b without clear derivation, or correctly predicts only one of the three parameter changes.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clean derivation of n/m = d/b and two accurate parameter deductions with clear reasoning.",
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Full derivation from both equations plus all three effects (unchanged s, halved envelope, halved d/b & fewer central peaks) rigorously justified.",
        },
      ],
      hints: [
        "Write both {{d sin θ = n λ}} and {{b sin θ = m λ}} and take their ratio.",
        "Check which formulas contain {{b}} and which depend only on {{d}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "standing-waves-resonance",
      strategy: "Resonance tube end-correction elimination & thermal effect",
      marks: 5,
      question:
        "A 512 Hz tuning fork excites loud resonances in a vertical water-filled tube (open at top, closed at water surface) at air-column lengths {{L_1 = 15.8}} cm and {{L_2 = 49.0}} cm. Explain how subtracting {{L_2 - L_1}} eliminates the unknown end correction {{e}}, calculate the speed of sound {{v}} and end correction {{e}}, and predict how warming the air affects the resonant lengths.",
      modelAnswer:
        "Because the displacement antinode sits a small fixed distance e above the open rim, the first two resonances satisfy L₁ + e = λ/4 and L₂ + e = 3λ/4. Subtracting the first equation from the second cancels e identically, giving L₂ − L₁ = λ/2 = 49.0 − 15.8 = 33.2 cm = 0.332 m, so wavelength λ = 0.664 m. The speed of sound is therefore v = fλ = 512 × 0.664 = 340 m s⁻¹. Substituting back into L₁ + e = λ/4 = 16.6 cm yields end correction e = 16.6 − 15.8 = 0.8 cm. Warming the air increases the speed of sound v at fixed tuning-fork frequency f, lengthening λ = v/f and causing both resonant air-column lengths to increase.",
      markScheme: [
        {
          point: "Sets up L₁ + e = λ/4 and L₂ + e = 3λ/4, showing subtraction cancels e to give L₂ − L₁ = λ/2.",
          keywords: ["l₁ + e = λ/4", "cancels e", "3λ/4"],
        },
        {
          point: "Finds λ = 2(0.332) = 0.664 m.",
          keywords: ["0.664 m", "33.2 cm"],
        },
        {
          point: "Calculates speed of sound v = 512 × 0.664 = 340 m s⁻¹.",
          keywords: ["340 m s⁻¹", "340 m/s", "512 × 0.664"],
        },
        {
          point: "Determines end correction e = 16.6 − 15.8 = 0.8 cm.",
          keywords: ["0.8 cm", "16.6"],
        },
        {
          point: "Predicts warming air raises v and λ (at fixed f), so resonant lengths increase.",
          keywords: ["increases the speed of sound", "lengthening λ", "lengths to increase"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid method or calculation." },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Finds λ/2 = 33.2 cm or speed 340 m s⁻¹ without proving cancellation of e or finding e.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly eliminates e, finds v = 340 m s⁻¹ and e = 0.8 cm, or omits the temperature prediction.",
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete algebraic elimination of e, exact v = 340 m s⁻¹ and e = 0.8 cm, plus accurate thermal reasoning.",
        },
      ],
      hints: [
        "Write the effective acoustic length as {{L + e}} for the 1st harmonic ({{λ/4}}) and 3rd harmonic ({{3λ/4}}).",
        "Subtract the two equations to find {{λ}} and {{v}}, then solve back for {{e}}.",
        "Remember warm air has faster molecular speeds, raising sound speed {{v}}.",
      ],
    },
    {
      id: "c2-wave-phenomena-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "doppler-effect-sl-hl",
      strategy: "Moving emitter + stationary reflector two-step Doppler",
      marks: 6,
      question:
        "A bat flying straight toward a stationary cave wall at speed {{u_b}} emits a 33.0 kHz ultrasonic chirp in still air ({{v = 340}} m s⁻¹). Derive an exact expression for the reflected echo frequency {{f''}} heard by the bat, calculate the frequency arriving at the wall and the final echo frequency when {{u_b = 10.0}} m s⁻¹, and show whether the result would change if the bat hovered stationary while the wall moved toward it at {{10.0}} m s⁻¹.",
      modelAnswer:
        "First, the flying bat acts as a moving source approaching the stationary wall, so the wall receives compressed wavefronts at frequency f₁ = f v/(v − u_b). For f = 33.0 kHz, u_b = 10.0 m s⁻¹, and v = 340 m s⁻¹, f₁ = 33.0 × (340 / 330) = 34.0 kHz. Second, the stationary wall reflects these waves unchanged in frequency (acting as a stationary source emitting f₁) while the bat flies into the returning wavefronts as a moving observer: f'' = f₁ (v + u_b)/v = f [v/(v − u_b)] × [(v + u_b)/v] = f (v + u_b)/(v − u_b). Evaluating gives f'' = 33.0 × (350 / 330) = 35.0 kHz. If instead the bat hovered stationary and the wall approached at u_b, the wall would first receive as a moving observer f(v + u_b)/v and then re-emit as a moving source multiplying by v/(v − u_b); the two factors of v cancel in the exact same way, giving the identical echo frequency f(v + u_b)/(v − u_b) = 35.0 kHz despite air being a medium.",
      markScheme: [
        {
          point: "Wall receives moving-source frequency f₁ = f v / (v − u_b).",
          keywords: ["moving source", "f v/(v - u_b)", "compressed wavefronts"],
        },
        {
          point: "Calculates frequency at the wall f₁ = 34.0 kHz.",
          keywords: ["34.0 khz", "34 khz"],
        },
        {
          point: "Bat detects reflected waves as an approaching moving observer: f'' = f₁ (v + u_b)/v.",
          keywords: ["moving observer", "(v + u_b)/v"],
        },
        {
          point: "Cancels v to derive exact formula f'' = f (v + u_b)/(v − u_b).",
          keywords: ["f (v + u_b)/(v - u_b)", "f(v + u_b)/(v - u_b)"],
        },
        {
          point: "Calculates final echo frequency f'' = 35.0 kHz.",
          keywords: ["35.0 khz", "35 khz"],
        },
        {
          point: "Proves stationary bat + moving wall reverses the order of the same two factors, giving the identical 35.0 kHz echo.",
          keywords: ["identical echo", "cancel in the exact same way", "re-emit as a moving source"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid Doppler derivation." },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Finds the wall frequency 34.0 kHz OR applies only a single Doppler shift.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Derives f'' = f(v + u_b)/(v − u_b) and computes 35.0 kHz, but comparison with moving-wall scenario is missing or flawed.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Complete two-step derivation, exact 34.0 kHz and 35.0 kHz values, and rigorous algebraic proof that swapping moving bat and moving wall yields the exact same echo.",
        },
      ],
      hints: [
        "Stage 1: moving bat emits to stationary wall ({{f_1 = f v / (v - u_b)}}).",
        "Stage 2: stationary wall re-emits {{f_1}} to approaching bat ({{f'' = f_1 (v + u_b) / v}}).",
        "Check what happens to the product of the two fractions when the bat is stationary and the wall moves instead!",
      ],
    },
  ],
};
