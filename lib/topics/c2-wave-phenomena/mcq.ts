import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: SL Core (15 MCQs — answerIndex spread: 0×4, 1×4, 2×4, 3×3)
  // ===========================================================================
  {
    id: "c2-wave-phenomena-m1",
    title: "Paper 1A · Refraction, Interference & Standing Waves (SL Core)",
    level: "SL",
    questions: [
      {
        id: "c2-wave-phenomena-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Frequency invariance at boundaries",
        question:
          "A beam of monochromatic light travels from air ({{n = 1.00}}) into a glass block ({{n = 1.50}}). How do its frequency, wavelength, and wave speed change upon entering the glass?",
        options: [
          "Frequency decreases; wavelength decreases; speed stays constant.",
          "Frequency stays constant; wavelength and speed both decrease.",
          "Frequency increases; wavelength stays constant; speed increases.",
          "Frequency stays constant; wavelength increases; speed decreases.",
        ],
        answerIndex: 1,
        explanation:
          "Wave frequency is determined solely by the source and never changes across a boundary. Entering optically denser glass slows the wave ({{v = c / n}}), and by {{v = f λ}} the wavelength decreases in the same proportion.",
        hints: [
          "Which wave quantity is fixed by the oscillating source and cannot change at a boundary?",
          "Use {{n = c / v}} and {{v = f λ}} to see how speed and wavelength respond when {{n}} increases.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Snell's law",
        question:
          "A light ray in air ({{n_1 = 1.00}}) strikes a flat glass block ({{n_2 = 1.50}}) at an angle of incidence of 30° to the normal. What is the exact value of {{sin θ_2}} inside the glass?",
        options: ["{{1/6}}", "{{1/2}}", "{{3/4}}", "{{1/3}}"],
        answerIndex: 3,
        explanation:
          "By Snell's law, {{n_1 sin θ_1 = n_2 sin θ_2}}. Substituting {{1.00 * sin 30° = 1.50 * sin θ_2}} gives {{0.50 = 1.50 sin θ_2}}, so {{sin θ_2 = 0.50 / 1.50 = 1/3}}. Multiplying instead of dividing by 1.50 yields the wrong value {{3/4}}.",
        hints: [
          "Write down Snell's law: {{n_1 sin θ_1 = n_2 sin θ_2}}.",
          "Recall {{sin 30° = 1/2}} and divide by {{n_2 = 1.50 = 3/2}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Critical angle for TIR",
        question:
          "Light travels inside diamond ({{n_1 = 2.40}}) toward a boundary with water ({{n_2 = 1.33}}). Under which condition does total internal reflection occur?",
        options: [
          "Angle of incidence in diamond exceeds 33.7°.",
          "Angle of incidence in diamond is less than 33.7°.",
          "Angle of incidence in water exceeds 33.7°.",
          "Angle of incidence in diamond exceeds 56.3°.",
        ],
        answerIndex: 0,
        explanation:
          "Total internal reflection occurs from higher to lower refractive index when {{θ_1 > θ_c}}. Here {{sin θ_c = n_2 / n_1 = 1.33 / 2.40 = 0.554}}, so {{θ_c = 33.7°}}. Measuring to the boundary instead of the normal gives the complementary distractor 56.3°.",
        hints: [
          "Use {{sin θ_c = n_2 / n_1}} with {{n_1 > n_2}}.",
          "TIR happens when the incidence angle to the normal is *greater* than {{θ_c}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Aperture-to-wavelength comparison",
        question:
          "Plane water waves of wavelength 4.0 cm travel across a ripple tank toward a barrier containing a narrow gap. Which gap width produces the most pronounced spreading into the shadow region?",
        options: ["40 cm", "20 cm", "4.0 cm", "80 cm"],
        answerIndex: 2,
        explanation:
          "Diffraction is most pronounced when the gap width {{b}} is comparable to the wavelength {{λ}} ({{b ≈ λ}}). Much wider gaps (20 cm, 40 cm, 80 cm) let the central portion of the wavefront pass almost straight through.",
        hints: [
          "Compare aperture width {{b}} with wavelength {{λ = 4.0}} cm.",
          "Maximum semicircular spreading occurs when {{b ≈ λ}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Path difference in wavelengths",
        question:
          "Two coherent loudspeakers oscillating in phase emit sound of wavelength 0.80 m. A microphone is placed 3.40 m from one speaker and 5.40 m from the other. What is detected at the microphone?",
        options: [
          "Constructive interference because path difference is 2.00 m.",
          "Destructive interference because path difference is {{2.5 λ}}.",
          "Constructive interference because path difference is {{2.5 λ}}.",
          "Destructive interference because path difference is {{2.0 λ}}.",
        ],
        answerIndex: 1,
        explanation:
          "The path difference is {{Δ = 5.40 - 3.40 = 2.00}} m. Dividing by {{λ = 0.80}} m gives {{2.00 / 0.80 = 2.5 λ}}, which is an odd half-integer multiple {{(n + 1/2) λ}}, producing destructive interference (minimum intensity). Checking only the raw metre value (2.00 m) without dividing by {{λ}} is a classic trap.",
        hints: [
          "First find the path difference {{Δ = d_2 - d_1}} in metres.",
          "Divide {{Δ}} by {{λ = 0.80}} m to see whether it is a whole or half-integer number of wavelengths.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Young's double-slit fringe spacing",
        question:
          "Monochromatic light of wavelength 600 nm passes through two parallel slits separated by 0.50 mm onto a screen 2.0 m away. What is the spacing between adjacent bright fringes?",
        options: ["2.4 mm", "1.2 mm", "4.8 mm", "0.60 mm"],
        answerIndex: 0,
        explanation:
          "Using {{s = (λ D)/d}} in SI units: {{s = (600 * 10^(-9) * 2.0)/(0.50 * 10^(-3)) = 2.4 * 10^(-3)}} m = 2.4 mm. Forgetting the factor of 2 in {{D}} gives 1.2 mm.",
        hints: [
          "Convert {{λ = 600 * 10^(-9)}} m and {{d = 0.50 * 10^(-3)}} m.",
          "Substitute directly into {{s = (λ D)/d}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Proportional scaling",
        question:
          "In a Young's double-slit experiment using monochromatic light, the slit separation {{d}} is halved and the screen distance {{D}} is doubled. By what factor does the fringe spacing {{s}} change?",
        options: ["0.25", "1.0", "2.0", "4.0"],
        answerIndex: 3,
        explanation:
          "Since {{s = (λ D)/d}}, doubling {{D}} multiplies {{s}} by 2 and halving {{d}} multiplies {{s}} by another factor of 2, giving {{s' = 4 s}}. Assuming {{s ∝ d}} mistakenly cancels the two changes to 1.0.",
        hints: [
          "Write {{s = (λ D)/d}} and replace {{D}} by {{2D}} and {{d}} by {{d/2}}.",
          "Dividing by {{1/2}} multiplies the fraction by 2.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "standing-waves-resonance",
        strategy: "Standing vs progressive wave properties",
        question:
          "Which statement accurately describes a standing wave formed on a stretched string?",
        options: [
          "All particles along the string oscillate with the same amplitude.",
          "Energy is steadily transferred from one fixed end to the other.",
          "Particles between adjacent nodes oscillate in phase with zero net energy transfer.",
          "The distance between two adjacent nodes equals one full wavelength.",
        ],
        answerIndex: 2,
        explanation:
          "In a standing wave, there is zero net energy transfer along the string, and every point between two adjacent nodes reaches its maximum displacement at the exact same instant (in phase). Adjacent nodes are separated by {{λ / 2}}, not {{λ}}.",
        hints: [
          "Recall how energy transfer, amplitude, and phase behave differently in standing waves compared with progressive waves.",
          "Check the spacing between adjacent nodes: is it {{λ}} or {{λ / 2}}?",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "standing-waves-resonance",
        strategy: "Counting standing-wave loops",
        question:
          "A standing wave on a 1.60 m stretched rope exhibits 5 nodes in total (including both fixed ends). What is the wavelength of the waves forming this standing wave?",
        options: ["0.80 m", "0.40 m", "0.64 m", "1.60 m"],
        answerIndex: 0,
        explanation:
          "Five nodes enclose 4 half-wavelength loops ({{n = 4}}). Each loop has length {{λ / 2 = 1.60 / 4 = 0.40}} m, so the full wavelength is {{λ = 0.80}} m. Dividing 1.60 m by 5 nodes mistakenly gives 0.64 m.",
        hints: [
          "Sketch 5 nodes along the string and count how many antinode loops fit between them.",
          "Each loop equals {{λ / 2}}, so {{L = 4 (λ / 2) = 2 λ}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "standing-waves-resonance",
        strategy: "String speed and fundamental frequency",
        question:
          "A stretched wire fixed at both ends has a fundamental frequency of 110 Hz. If the tension in the wire is multiplied by 4 while its length and mass per unit length stay constant, what is the new fundamental frequency?",
        options: ["156 Hz", "220 Hz", "440 Hz", "55 Hz"],
        answerIndex: 1,
        explanation:
          "Wave speed along a string is {{v = sqrt(T / μ)}}, and fundamental frequency is {{f_1 = v / (2L)}}. Multiplying {{T}} by 4 multiplies {{v}} (and hence {{f_1}}) by {{sqrt(4) = 2}}, giving {{2 * 110 = 220}} Hz. Forgetting the square root gives the trap answer 440 Hz.",
        hints: [
          "Link fundamental frequency {{f_1 = v / (2L)}} to string wave speed {{v = sqrt(T / μ)}}.",
          "How does {{sqrt(T)}} change when {{T}} increases by a factor of 4?",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "standing-waves-resonance",
        strategy: "Open–closed pipe harmonics",
        question:
          "A cylindrical pipe of length 0.50 m is closed at one end and open at the other. Taking the speed of sound in air as 340 m s⁻¹, what is the frequency of its 3rd harmonic?",
        options: ["170 Hz", "340 Hz", "510 Hz", "680 Hz"],
        answerIndex: 2,
        explanation:
          "For an open–closed pipe, {{λ_1 = 4L = 2.0}} m, so the fundamental frequency is {{f_1 = 340 / 2.0 = 170}} Hz. The 3rd harmonic (the second allowed resonant mode) is {{f_3 = 3 f_1 = 510}} Hz. Using {{2 f_1 = 340}} Hz forgets that even harmonics cannot form.",
        hints: [
          "First find the fundamental frequency of an open–closed pipe using {{f_1 = v / (4L)}}.",
          "Multiply {{f_1}} by 3 to get the 3rd harmonic.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "standing-waves-resonance",
        strategy: "Boundary conditions in pipes",
        question:
          "Pipe X is open at both ends and has fundamental frequency {{f_X}}. Pipe Y has the exact same length {{L}} in the same room but is closed at one end, with fundamental frequency {{f_Y}}. How are {{f_X}} and {{f_Y}} related?",
        options: [
          "{{f_X = (1/2) f_Y}}",
          "{{f_X = f_Y}}",
          "{{f_X = 4 f_Y}}",
          "{{f_X = 2 f_Y}}",
        ],
        answerIndex: 3,
        explanation:
          "For the open–open pipe, {{f_X = v / (2L)}}. For the open–closed pipe of equal length, {{f_Y = v / (4L)}}. Therefore {{f_X / f_Y = 2}}, meaning the open–open pipe sounds an octave higher ({{f_X = 2 f_Y}}).",
        hints: [
          "Compare the fundamental wavelength {{λ_1}} of an open–open pipe ({{2L}}) with an open–closed pipe ({{4L}}).",
          "At fixed wave speed {{v}}, halving {{λ}} doubles {{f}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "standing-waves-resonance",
        strategy: "Effect of damping on resonance",
        question:
          "A driven mass–spring oscillator initially experiences light damping. When fluid damping is increased to a moderate level, how does its amplitude versus driving-frequency resonance curve change?",
        options: [
          "Peak amplitude falls, the curve broadens, and peak frequency shifts slightly lower.",
          "Peak amplitude rises, the curve narrows, and peak frequency shifts slightly higher.",
          "Peak amplitude falls, the curve narrows, and peak frequency remains exactly constant.",
          "Peak amplitude stays unchanged, the curve broadens, and peak frequency shifts higher.",
        ],
        answerIndex: 0,
        explanation:
          "Increasing resistive damping dissipates more energy per cycle, lowering the maximum amplitude across all driving frequencies, broadening the resonance response, and shifting the peak frequency slightly below the undamped natural frequency {{f_0}}.",
        hints: [
          "Does stronger friction/drag make the resonant amplitude taller or shorter?",
          "Recall how damping affects peak height, curve width, and peak position relative to {{f_0}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Qualitative moving-source wavefronts",
        question:
          "An emergency vehicle sounds a constant-frequency siren while driving steadily toward a stationary pedestrian. Compared with when the vehicle is parked, what does the pedestrian measure?",
        options: [
          "Longer wavelength and higher frequency in the air.",
          "Shorter wavelength and higher frequency in the air.",
          "Unchanged wavelength and higher frequency in the air.",
          "Shorter wavelength and lower frequency in the air.",
        ],
        answerIndex: 1,
        explanation:
          "Because the source chases its own emitted wavefronts, successive crests are crowded closer together in front of it (shorter wavelength {{λ'}}). Since sound speed {{v}} in air is unchanged, {{f' = v / λ'}} increases. Unchanged wavelength only applies to a moving observer.",
        hints: [
          "Picture circular wavefronts emitted by a source moving toward the listener.",
          "Are wavefronts ahead of the source compressed or stretched?",
        ],
      },
      {
        id: "c2-wave-phenomena-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Astronomical EM Doppler shift",
        question:
          "A laboratory absorption line of wavelength 500.0 nm is observed at 505.0 nm in the spectrum of a distant galaxy. What is the radial velocity of the galaxy relative to Earth ({{c = 3.00 * 10^8}} m s⁻¹)?",
        options: [
          "{{3.0 * 10^6}} m s⁻¹ approaching Earth",
          "{{1.5 * 10^6}} m s⁻¹ receding from Earth",
          "{{3.0 * 10^6}} m s⁻¹ receding from Earth",
          "{{6.0 * 10^6}} m s⁻¹ approaching Earth",
        ],
        answerIndex: 2,
        explanation:
          "Because {{λ' > λ_0}}, the light is redshifted and the galaxy is receding. Using {{Δλ / λ_0 ≈ v / c}}: {{v = (5.0 / 500.0) * 3.00 * 10^8 = 3.0 * 10^6}} m s⁻¹ away from Earth.",
        hints: [
          "Does an increase from 500.0 nm to 505.0 nm represent redshift (receding) or blueshift (approaching)?",
          "Apply {{v = c (Δλ / λ_0)}} with {{Δλ = 5.0}} nm.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: SL + HL Mix (15 MCQs — answerIndex spread: 0×4, 1×3, 2×4, 3×4)
  // ===========================================================================
  {
    id: "c2-wave-phenomena-m2",
    title: "Paper 1A · Wave Phenomena, Resonance & Redshift (SL + HL Mix)",
    level: "SL",
    questions: [
      {
        id: "c2-wave-phenomena-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Normal vs boundary angle check",
        question:
          "A laser ray in air ({{n = 1.00}}) strikes a calm water surface ({{n = 1.33}}) at an angle of 35° to the **surface** of the water. Which expression equals {{sin θ_2}} for the refracted ray in water?",
        options: [
          "{{(sin 35°) / 1.33}}",
          "{{1.33 sin 35°}}",
          "{{(sin 55°) / 1.33}}",
          "{{1.33 sin 55°}}",
        ],
        answerIndex: 2,
        explanation:
          "Angles in Snell's law are measured to the normal, not the surface: {{θ_1 = 90° - 35° = 55°}}. Therefore {{1.00 sin 55° = 1.33 sin θ_2}}, giving {{sin θ_2 = (sin 55°) / 1.33}}. Plugging 35° directly into Snell's law is the most common exam error.",
        hints: [
          "Notice that 35° is measured to the water *surface*, not to the normal!",
          "Find {{θ_1 = 90° - 35°}}, then apply {{n_1 sin θ_1 = n_2 sin θ_2}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "White-light double-slit superposition",
        question:
          "White light replaces a monochromatic laser in Young's double-slit experiment. What pattern is observed near the centre of the screen?",
        options: [
          "A white central maximum flanked by spectra with violet closest to the centre.",
          "A white central maximum flanked by spectra with red closest to the centre.",
          "A dark central minimum flanked by bright white fringes of equal spacing.",
          "A continuous rainbow across the centre with no distinct bright maximum.",
        ],
        answerIndex: 0,
        explanation:
          "At the centre, path difference is zero for every wavelength, so all colours interfere constructively to form a white fringe. Since {{s = λ D / d}}, violet (shortest {{λ}}) has the smallest fringe spacing and appears closest to the centre while red sits further out.",
        hints: [
          "What is the path difference at the exact midpoint of the screen for every colour?",
          "Using {{s = λ D / d}}, which colour has the smallest spacing {{s}} from the centre?",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "refraction-diffraction-double-slit",
        strategy: "Wavelength change in a refractive medium",
        question:
          "A double-slit apparatus produces fringes spaced 5.0 mm apart in air. The entire setup is then immersed in a clear liquid of refractive index 1.25. What is the new fringe spacing?",
        options: ["6.25 mm", "5.0 mm", "3.2 mm", "4.0 mm"],
        answerIndex: 3,
        explanation:
          "Inside a medium of refractive index {{n = 1.25}}, the frequency is unchanged so wavelength shrinks to {{λ' = λ / n}}. Because {{s = λ D / d}}, fringe spacing shrinks by the same factor: {{s' = 5.0 / 1.25 = 4.0}} mm.",
        hints: [
          "How does light wavelength change when moving from air into a medium of refractive index {{n = 1.25}}?",
          "Substitute {{λ' = λ / 1.25}} into {{s = λ D / d}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "single-slit-grating-hl",
        strategy: "Single-slit central maximum full width",
        question:
          "Monochromatic light of wavelength 600 nm passes through a single slit of width 0.12 mm. What is the angular width of the entire **central maximum**?",
        options: ["0.0050 rad", "0.010 rad", "0.020 rad", "0.0025 rad"],
        answerIndex: 1,
        explanation:
          "The first diffraction minimum lies at {{θ = λ / b = (600 * 10^(-9)) / (0.12 * 10^(-3)) = 0.0050}} rad on each side of centre. The full angular width of the central maximum from {{-θ}} to {{+θ}} is {{2θ = 0.010}} rad. Stopping at 0.0050 rad gives only the half-width.",
        hints: [
          "Remember {{θ = λ / b}} gives the angle from the centre to the *first* minimum (the half-width).",
          "Double {{θ}} to obtain the full angular width of the central maximum.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "single-slit-grating-hl",
        strategy: "Inverse slit-width scaling",
        question:
          "A laser illuminates a single slit of width {{b}}, projecting a diffraction pattern onto a distant screen. If {{b}} is halved while laser intensity and wavelength stay constant, how do the central maximum width and central peak intensity change?",
        options: [
          "Central width halves and central peak intensity increases.",
          "Central width halves and central peak intensity decreases.",
          "Central width doubles and central peak intensity increases.",
          "Central width doubles and central peak intensity decreases.",
        ],
        answerIndex: 3,
        explanation:
          "Central maximum width is {{2 λ D / b}}, which doubles when {{b}} is halved. Meanwhile, halving the slit width admits half as much total power and spreads it over twice the area, so the central peak intensity drops sharply (to one-quarter of its original value).",
        hints: [
          "Check how {{θ = λ / b}} responds when {{b}} becomes {{b / 2}}.",
          "Think about both the reduced power entering a narrower slit and the wider spread on the screen.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "single-slit-grating-hl",
        strategy: "Missing order ratio d/b",
        question:
          "In a modulated double-slit experiment, the slit separation is {{d = 0.25}} mm and each individual slit has width {{b = 0.050}} mm. Which double-slit interference order is the first missing order?",
        options: ["{{n = 2}}", "{{n = 4}}", "{{n = 5}}", "{{n = 6}}"],
        answerIndex: 2,
        explanation:
          "A missing order occurs when a double-slit maximum ({{d sin θ = n λ}}) coincides with the first single-slit minimum ({{b sin θ = λ}}), giving {{n = d / b = 0.25 / 0.050 = 5}}. Subtracting 1 confuses missing order with the highest visible order inside the central envelope ({{n = 4}}).",
        hints: [
          "Equate the double-slit maximum condition {{sin θ = n λ / d}} with the first single-slit minimum {{sin θ = λ / b}}.",
          "Compute the ratio {{d / b}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "single-slit-grating-hl",
        strategy: "Diffraction grating equation",
        question:
          "A monochromatic laser strikes a diffraction grating of slit spacing {{d = 2.00 * 10^(-6)}} m at normal incidence. The 1st-order bright spot is measured at {{θ = 18.0°}} ({{sin 18.0° = 0.309}}). What is the wavelength of the laser?",
        options: ["618 nm", "309 nm", "650 nm", "485 nm"],
        answerIndex: 0,
        explanation:
          "Applying {{n λ = d sin θ}} with {{n = 1}}: {{λ = 2.00 * 10^(-6) * 0.309 = 6.18 * 10^(-7)}} m = 618 nm. Dividing by 2 mistakenly yields the 2nd-order value 309 nm.",
        hints: [
          "Use {{n λ = d sin θ}} with {{n = 1}}.",
          "Convert the result from metres into nanometres ({{1 nm = 10^(-9) m}}).",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "standing-waves-resonance",
        strategy: "Ratio of consecutive pipe resonances",
        question:
          "Two consecutive resonant frequencies of an air-filled pipe are measured to be 300 Hz and 400 Hz. What type of pipe is it, and what is its fundamental frequency?",
        options: [
          "Open–closed pipe with fundamental frequency 100 Hz.",
          "Open–open pipe with fundamental frequency 100 Hz.",
          "Open–closed pipe with fundamental frequency 50 Hz.",
          "Open–open pipe with fundamental frequency 150 Hz.",
        ],
        answerIndex: 1,
        explanation:
          "The ratio of the two consecutive resonances is {{300 / 400 = 3 / 4}}. Because even harmonics (such as the 4th) are present, the pipe must be open at both ends (open–open). Its fundamental frequency is the spacing {{Δf = 400 - 300 = 100}} Hz.",
        hints: [
          "Simplify the fraction {{300 / 400}} to identify which harmonics these are.",
          "Can an open–closed pipe produce an even harmonic like the 4th harmonic?",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "standing-waves-resonance",
        strategy: "Displacement vs pressure nodes",
        question:
          "A standing sound wave resonates inside an organ pipe that is closed at one end and open at the other. Which pair of conditions exists at the **closed** end?",
        options: [
          "Displacement antinode and pressure node.",
          "Displacement antinode and pressure antinode.",
          "Displacement node and pressure antinode.",
          "Displacement node and pressure node.",
        ],
        answerIndex: 2,
        explanation:
          "Air molecules cannot move into the rigid barrier, so the closed end is a **displacement node**. Because air alternately piles up against and pulls away from the closed barrier, pressure fluctuates maximally there—making it a **pressure antinode**.",
        hints: [
          "Can air particles vibrate back and forth through a solid closed wall?",
          "Where air particles crowd together and pull apart against a wall, is pressure variation zero or maximum?",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "standing-waves-resonance",
        strategy: "Phase across standing-wave nodes",
        question:
          "A string of length {{L}} fixed at both ends vibrates in its 3rd harmonic. Point P lies at {{L / 6}} from the left end and point Q lies at {{L / 2}}. What is the phase difference between the oscillations of P and Q?",
        options: ["0 rad", "{{π / 2}} rad", "{{2π / 3}} rad", "{{π}} rad"],
        answerIndex: 3,
        explanation:
          "In the 3rd harmonic, nodes occur at {{0, L/3, 2L/3, L}}. Point P ({{L/6}}) sits in the first loop while point Q ({{L/2}}) sits in the adjacent second loop, separated by the node at {{L/3}}. Points in adjacent loops oscillate in exact antiphase: {{π}} rad.",
        hints: [
          "Locate the nodes of the 3rd harmonic along length {{L}} (every {{L / 3}}).",
          "Count how many nodes lie between {{x = L/6}} and {{x = L/2}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "standing-waves-resonance",
        strategy: "Damping regimes",
        question:
          "A vehicle shock absorber is tuned so that after hitting a pothole, the car body returns to its equilibrium height in the shortest possible time without overshooting or bouncing. Which type of damping is used?",
        options: [
          "Critical damping",
          "Light damping",
          "Heavy damping",
          "Undamped oscillation",
        ],
        answerIndex: 0,
        explanation:
          "Critical damping returns a displaced system to equilibrium in the minimum time without oscillating past equilibrium. Heavy damping also avoids oscillation but returns much more slowly, whereas light damping causes multiple bounces.",
        hints: [
          "Eliminate regimes that allow bouncing (oscillation).",
          "Between overdamping and critical damping, which returns to rest faster?",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Radial velocity component in EM Doppler",
        question:
          "A binary star moves in a circular orbit viewed edge-on from Earth, causing its spectral lines to shift periodically between red and blue. At which point in its orbit is the **redshift** greatest?",
        options: [
          "When the star moves directly across the line of sight at maximum speed.",
          "When the star moves directly toward Earth along the line of sight.",
          "When the star moves directly away from Earth along the line of sight.",
          "When the star passes directly behind its companion star along the line of sight.",
        ],
        answerIndex: 2,
        explanation:
          "Redshift depends on the radial velocity component directed away from the observer. When the star moves directly away from Earth along the line of sight, its recession speed reaches maximum and redshift peaks; when moving perpendicular to the line of sight, the classical radial Doppler shift is zero.",
        hints: [
          "Does redshift correspond to motion toward Earth, away from Earth, or perpendicular to the line of sight?",
          "At which orbital position is the recession velocity component largest?",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Reflected EM wave double Doppler shift",
        question:
          "A stationary police radar gun emits 10.0 GHz microwaves that reflect off a car approaching directly at 30.0 m s⁻¹. Using the double-shift relation {{Δf / f ≈ (2 v) / c}} ({{c = 3.00 * 10^8}} m s⁻¹), what is the frequency shift {{Δf}} of the reflected signal?",
        options: ["0.50 kHz", "1.0 kHz", "4.0 kHz", "2.0 kHz"],
        answerIndex: 3,
        explanation:
          "Because the moving car both receives and re-emits the microwaves, the shift doubles: {{Δf = (10.0 * 10^9) * (2 * 30.0) / (3.00 * 10^8) = 2000}} Hz = 2.0 kHz. Omitting the reflection factor of 2 gives the trap answer 1.0 kHz.",
        hints: [
          "Convert 10.0 GHz to {{10.0 * 10^9}} Hz.",
          "Substitute directly into {{Δf = f (2v / c)}}—don't drop the factor of 2 for reflection!",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Moving source receding",
        question:
          "A train sounding a 500 Hz horn moves directly away from a stationary observer on a platform at 34 m s⁻¹. Taking the speed of sound in air as 340 m s⁻¹, what frequency does the observer hear?",
        options: ["450 Hz", "455 Hz", "550 Hz", "556 Hz"],
        answerIndex: 1,
        explanation:
          "For a receding source, {{f' = f (v / (v + u_s)) = 500 * (340 / (340 + 34)) = 500 * (340 / 374) = 454.5}} Hz ≈ 455 Hz. Using the moving-observer formula {{500 * (340 - 34) / 340}} incorrectly gives 450 Hz.",
        hints: [
          "Because the *source* is moving away, {{u_s}} goes in the denominator with a plus sign so {{f' < f}}.",
          "Calculate {{500 * 340 / 374}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Moving observer approaching",
        question:
          "A stationary warning siren emits a 440 Hz tone in air ({{v = 340}} m s⁻¹). A cyclist rides directly toward the siren at 17 m s⁻¹. What frequency does the cyclist hear, and how does the sound wavelength in air compare with its stationary value?",
        options: [
          "462 Hz, with wavelength in air unchanged.",
          "463 Hz, with wavelength in air shortened.",
          "418 Hz, with wavelength in air unchanged.",
          "462 Hz, with wavelength in air shortened.",
        ],
        answerIndex: 0,
        explanation:
          "For a moving observer approaching a stationary source, {{f' = f ((v + u_o) / v) = 440 * (357 / 340) = 462}} Hz. Because the source is stationary in the air, the spacing between emitted wavefronts (the wavelength in air) is completely unchanged.",
        hints: [
          "Use the moving-observer formula {{f' = f ((v + u_o) / v)}}.",
          "Does the motion of a listener change the physical spacing of wavefronts travelling through the air?",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: HL Focus (15 MCQs — answerIndex spread: 0×3, 1×4, 2×4, 3×4)
  // ===========================================================================
  {
    id: "c2-wave-phenomena-m3",
    title: "Paper 1A · Diffraction Gratings, Modulation & Doppler (HL Focus)",
    level: "HL",
    questions: [
      {
        id: "c2-wave-phenomena-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "single-slit-grating-hl",
        strategy: "Maximum grating order floor(d/λ)",
        question:
          "Monochromatic green light of wavelength 550 nm is incident normally on a diffraction grating ruled with 400 lines per mm. What is the highest integer order maximum observable?",
        options: ["2", "3", "5", "4"],
        answerIndex: 3,
        explanation:
          "First find the slit spacing: {{d = 1 / (4.00 * 10^5) = 2.50 * 10^(-6)}} m = 2500 nm. Setting {{sin θ <= 1}} gives {{n <= d / λ = 2500 / 550 = 4.55}}. Rounding down (since {{n = 5}} would require {{sin θ > 1}}) yields {{n_max = 4}}.",
        hints: [
          "Convert 400 lines mm⁻¹ to lines m⁻¹, then take the reciprocal to find {{d}}.",
          "Compute {{d / λ}} and round **down** to the nearest integer.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "single-slit-grating-hl",
        strategy: "Effect of illuminating more slits N",
        question:
          "A laser beam of fixed intensity is expanded so that it illuminates twice as many slits on the *same* diffraction grating (unchanged spacing {{d}} and wavelength {{λ}}). How do the principal maxima change?",
        options: [
          "Angles double; peaks become wider and twice as intense.",
          "Angles stay unchanged; peaks become narrower and four times as intense.",
          "Angles halve; peaks become narrower and twice as intense.",
          "Angles stay unchanged; peaks keep the same width and double in intensity.",
        ],
        answerIndex: 1,
        explanation:
          "Because {{d}} and {{λ}} are unchanged, {{n λ = d sin θ}} gives identical angles. Doubling the number of illuminated slits {{N}} doubles the resultant wave amplitude at every principal maximum, multiplying peak intensity by {{2^2 = 4}}, while making the maxima sharper (narrower).",
        hints: [
          "Does {{n λ = d sin θ}} depend on the number of illuminated slits {{N}}?",
          "Recall how resultant amplitude ({{∝ N}}) relates to peak intensity ({{I ∝ A^2}}).",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Describe",
        guideRef: "single-slit-grating-hl",
        strategy: "White-light grating dispersion",
        question:
          "White light (400 nm violet to 700 nm red) strikes a diffraction grating normally. Which statement correctly describes the resulting interference pattern?",
        options: [
          "The central maximum is violet, and higher orders bend violet more than red.",
          "The central maximum is white, and higher orders bend violet more than red.",
          "The central maximum is white, and higher orders bend red more than violet.",
          "All orders appear white because every wavelength satisfies the same equation.",
        ],
        answerIndex: 2,
        explanation:
          "At {{n = 0}}, {{θ = 0°}} for every wavelength, producing a white central beam. For {{n >= 1}}, {{sin θ = (n λ) / d}}, so longer-wavelength red light diffracts through a **larger** angle than shorter-wavelength violet light (the reverse of a glass prism).",
        hints: [
          "Check {{θ}} at {{n = 0}} for all wavelengths.",
          "From {{sin θ = (n λ) / d}}, does larger {{λ}} give a larger or smaller diffraction angle?",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "single-slit-grating-hl",
        strategy: "Spectral overlap condition n λ",
        question:
          "White light spanning 400 nm (violet) to 700 nm (red) passes normally through a fine diffraction grating. Where does spectral overlap between adjacent orders first occur?",
        options: [
          "3rd-order violet overlaps 2nd-order red.",
          "2nd-order violet overlaps 1st-order red.",
          "4th-order violet overlaps 3rd-order red.",
          "5th-order violet overlaps 4th-order red.",
        ],
        answerIndex: 0,
        explanation:
          "Order {{n}} violet overlaps order {{n - 1}} red whenever {{n λ_violet < (n - 1) λ_red}}, i.e., {{400 n < 700 (n - 1)}}. For {{n = 2}}: {{800 > 700}} (no overlap). For {{n = 3}}: {{1200 < 1400}} (overlap occurs!). Thus 3rd-order violet falls at a smaller angle than 2nd-order red.",
        hints: [
          "Compare {{n λ}} for violet (400 nm) with {{(n - 1) λ}} for red (700 nm).",
          "Test {{n = 2}} ({{800}} vs {{700}}) and then {{n = 3}} ({{1200}} vs {{1400}}).",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "single-slit-grating-hl",
        strategy: "Counting fringes inside central envelope",
        question:
          "A double-slit aperture has slit separation {{d}} equal to exactly 4 times each individual slit width {{b}} ({{d / b = 4}}). How many bright interference fringes appear strictly inside the central single-slit diffraction maximum?",
        options: ["4", "6", "7", "9"],
        answerIndex: 2,
        explanation:
          "Because {{d / b = 4}}, orders {{n = ±4}} fall on the first single-slit minima and are missing. The visible bright fringes inside the central envelope are {{n = -3, -2, -1, 0, +1, +2, +3}}, giving {{2(4) - 1 = 7}} fringes in total. Forgetting the central {{n = 0}} fringe yields 6.",
        hints: [
          "Which order {{n}} lands on the first single-slit zero when {{d / b = 4}}?",
          "List every integer order from {{-(n - 1)}} through 0 to {{+(n - 1)}} and count them all.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "single-slit-grating-hl",
        strategy: "Coinciding grating orders",
        question:
          "Two wavelengths {{λ_1}} and {{λ_2}} illuminate a diffraction grating simultaneously. The 2nd-order maximum of {{λ_1 = 600}} nm coincides at the exact same angle as the 3rd-order maximum of {{λ_2}}. What is {{λ_2}}?",
        options: ["900 nm", "450 nm", "300 nm", "400 nm"],
        answerIndex: 3,
        explanation:
          "At the same diffraction angle {{θ}}, {{d sin θ}} is identical for both wavelengths: {{2 λ_1 = 3 λ_2}}. Therefore {{λ_2 = (2 * 600) / 3 = 400}} nm. Inverting the ratio gives the distractor 900 nm.",
        hints: [
          "Write {{n λ = d sin θ}} for both wavelengths at the same angle {{θ}}.",
          "Equate {{2 λ_1 = 3 λ_2}} and solve for {{λ_2}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "single-slit-grating-hl",
        strategy: "Higher-order single-slit minima",
        question:
          "Light of wavelength 500 nm passes through a single slit of width 0.25 mm onto a screen 3.0 m away. What is the linear distance along the screen from the centre of the central maximum to the **2nd dark minimum**?",
        options: ["6.0 mm", "12 mm", "18 mm", "24 mm"],
        answerIndex: 1,
        explanation:
          "The {{m}}-th single-slit minimum occurs at {{θ_m ≈ (m λ)/b}}. For {{m = 2}}, {{y_2 = (2 λ D)/b = (2 * 500 * 10^(-9) * 3.0)/(0.25 * 10^(-3)) = 0.012}} m = 12 mm. Computing only the 1st minimum gives 6.0 mm.",
        hints: [
          "Single-slit dark minima sit at {{y_m = (m λ D)/b}} for {{m = 1, 2, 3, ...}}.",
          "Substitute {{m = 2}} carefully in SI metres.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "single-slit-grating-hl",
        strategy: "Non-linearity of sin θ in gratings",
        question:
          "Monochromatic light passes normally through a diffraction grating and produces its 1st-order maximum at {{θ_1 = 20.0°}}. What is the diffraction angle {{θ_2}} of the 2nd-order maximum?",
        options: ["43.2°", "40.0°", "38.6°", "46.8°"],
        answerIndex: 0,
        explanation:
          "Because {{sin θ_n = (n λ) / d}}, we have {{sin θ_2 = 2 sin θ_1 = 2 sin 20.0° = 0.6840}}, giving {{θ_2 = 43.2°}}. Simply doubling the angle to 40.0° wrongly assumes the small-angle approximation holds at large angles.",
        hints: [
          "Never double {{θ}} directly for a diffraction grating—double {{sin θ}} instead!",
          "Find {{sin θ_2 = 2 sin 20.0°}}, then take {{arcsin}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Stretched wavelength behind moving source",
        question:
          "A loudspeaker emitting 340 Hz sound moves straight away from a stationary microphone at 20 m s⁻¹ in air where sound speed is 340 m s⁻¹. What is the wavelength of the sound waves arriving at the microphone?",
        options: ["0.94 m", "1.00 m", "1.12 m", "1.06 m"],
        answerIndex: 3,
        explanation:
          "Behind a receding source, each wavefront is stretched by {{u_s T = u_s / f}}, giving {{λ' = (v + u_s) / f = (340 + 20) / 340 = 1.06}} m. Using {{v - u_s}} computes the compressed wavelength ahead of the speaker (0.94 m).",
        hints: [
          "Wavefronts behind a receding source are stretched: {{λ' = (v + u_s) / f}}.",
          "Substitute {{v = 340}}, {{u_s = 20}}, and {{f = 340}} Hz.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Asymmetry of mechanical Doppler effect",
        question:
          "A whistle emits 600 Hz in still air ({{v = 340}} m s⁻¹). In Case X, the whistle moves at 40 m s⁻¹ toward a stationary listener (heard as {{f_X}}). In Case Y, the listener moves at 40 m s⁻¹ toward a stationary whistle (heard as {{f_Y}}). How do {{f_X}} and {{f_Y}} compare?",
        options: [
          "Both exceed 600 Hz, and {{f_X}} equals {{f_Y}}.",
          "Both exceed 600 Hz, and {{f_Y}} is greater than {{f_X}}.",
          "Both exceed 600 Hz, and {{f_X}} is greater than {{f_Y}}.",
          "Only {{f_X}} exceeds 600 Hz while {{f_Y}} equals 600 Hz.",
        ],
        answerIndex: 2,
        explanation:
          "For a moving source, {{f_X = 600 * (340 / 300) = 680}} Hz. For a moving observer, {{f_Y = 600 * (380 / 340) = 671}} Hz. Because sound travels relative to air, approaching at equal speed always gives a larger shift when the source moves ({{v / (v - u) > (v + u) / v}}).",
        hints: [
          "Calculate {{f_X = f v / (v - u)}} and {{f_Y = f (v + u) / v}} with {{u = 40}} and {{v = 340}}.",
          "Compare {{340 / 300}} with {{380 / 340}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Two-step ultrasound echo Doppler shift",
        question:
          "A hovering stationary bat emits a 40.0 kHz ultrasonic pulse in air ({{v = 340}} m s⁻¹). The pulse reflects off an insect flying directly toward the bat at 10.0 m s⁻¹. What frequency does the bat detect in the reflected echo?",
        options: ["41.2 kHz", "42.4 kHz", "37.7 kHz", "44.8 kHz"],
        answerIndex: 1,
        explanation:
          "First, the insect acts as an approaching observer: {{f_1 = 40.0 * (350 / 340)}} kHz. Immediately reflecting the pulse, the insect acts as an approaching source: {{f_2 = f_1 * (340 / 330) = 40.0 * (350 / 330) = 42.4}} kHz. Applying only a single shift yields 41.2 kHz.",
        hints: [
          "Treat the reflection in two steps: first insect as moving observer, then insect as moving source.",
          "Notice the two factors of {{v = 340}} cancel: {{f_echo = f ((v + u) / (v - u))}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Inverting moving-source Doppler equation",
        question:
          "A stationary roadside observer hears a frequency of 510 Hz from an approaching car whose horn has a rest frequency of 450 Hz. Taking the speed of sound as 340 m s⁻¹, what is the speed of the car?",
        options: ["25 m s⁻¹", "30 m s⁻¹", "45 m s⁻¹", "40 m s⁻¹"],
        answerIndex: 3,
        explanation:
          "Using {{f' = f (v / (v - u_s))}}: {{510 = 450 * (340 / (340 - u_s))}}, so {{340 - u_s = 340 * (450 / 510) = 300}} m s⁻¹, giving {{u_s = 40}} m s⁻¹. Using the moving-observer formula wrongly gives 45 m s⁻¹.",
        hints: [
          "Write {{510 = 450 * (340 / (340 - u_s))}}.",
          "Rearrange for {{340 - u_s = 340 * (450 / 510)}} before solving for {{u_s}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "doppler-effect-sl-hl",
        strategy: "Ratio of extreme Doppler frequencies",
        question:
          "A buzzer emitting 600 Hz is whirled in a horizontal circle at a constant tangential speed of 17 m s⁻¹ in air ({{v = 340}} m s⁻¹). A distant stationary listener in the plane of the circle measures maximum frequency {{f_max}} and minimum frequency {{f_min}}. What is the ratio {{f_max / f_min}}?",
        options: ["1.05", "1.11", "1.16", "1.21"],
        answerIndex: 1,
        explanation:
          "At maximum approach {{f_max = f v / (v - u_s)}}, and at maximum recession {{f_min = f v / (v + u_s)}}. Dividing eliminates {{f}} and {{v}} in the numerator: {{f_max / f_min = (v + u_s) / (v - u_s) = 357 / 323 = 1.11}}.",
        hints: [
          "Write expressions for {{f_max}} (moving straight toward listener) and {{f_min}} (moving straight away).",
          "Take the ratio {{f_max / f_min}} and simplify algebraically before plugging in numbers.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "standing-waves-resonance",
        strategy: "Eliminating end correction in resonance tubes",
        question:
          "A 512 Hz tuning fork is held over a vertical water-filled resonance tube (an open–closed pipe). The first loud resonance occurs at air-column length 16.0 cm, and the next resonance occurs at 49.0 cm. What is the speed of sound in the tube?",
        options: ["338 m s⁻¹", "328 m s⁻¹", "348 m s⁻¹", "169 m s⁻¹"],
        answerIndex: 0,
        explanation:
          "Subtracting consecutive resonant lengths cancels the unknown end correction: {{L_2 - L_1 = λ / 2 = 49.0 - 16.0 = 33.0}} cm = 0.330 m, so {{λ = 0.660}} m. Therefore {{v = f λ = 512 * 0.660 = 338}} m s⁻¹. Using {{λ = 4 * 0.160}} fails to eliminate the end correction and gives 328 m s⁻¹.",
        hints: [
          "Why is {{49.0}} cm not quite {{3 * 16.0}} cm? Because of the open-end correction {{e}}!",
          "Subtract the two lengths: {{L_2 - L_1 = λ / 2}}, then compute {{v = f λ}}.",
        ],
      },
      {
        id: "c2-wave-phenomena-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "single-slit-grating-hl",
        strategy: "Comparing two gratings via sin θ",
        question:
          "The same monochromatic laser illuminates two diffraction gratings in turn. Grating X has 300 lines mm⁻¹ and produces its 1st-order maximum at angle {{θ_X}}. Grating Y has 600 lines mm⁻¹ and produces its 1st-order maximum at angle {{θ_Y}}. Which relation is strictly true?",
        options: [
          "{{θ_Y = 2 θ_X}}",
          "{{sin θ_Y = (1/2) sin θ_X}}",
          "{{sin θ_Y = 2 sin θ_X}}",
          "{{tan θ_Y = 2 tan θ_X}}",
        ],
        answerIndex: 2,
        explanation:
          "Doubling the lines per mm halves the slit spacing ({{d_Y = d_X / 2}}). From {{λ = d sin θ}}, halving {{d}} at fixed {{λ}} exactly doubles {{sin θ}}, giving {{sin θ_Y = 2 sin θ_X}}. Because the sine function is non-linear, {{θ_Y}} is *not* equal to {{2 θ_X}}.",
        hints: [
          "How does slit spacing {{d = 1 / N}} compare between 300 lines mm⁻¹ and 600 lines mm⁻¹?",
          "Apply {{1 * λ = d sin θ}} to both gratings and form the ratio {{sin θ_Y / sin θ_X}}.",
        ],
      },
    ],
  },
];
