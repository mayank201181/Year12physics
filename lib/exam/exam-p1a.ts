// ---------------------------------------------------------------------------
// IB Diploma Physics (First Assessment 2025) — Paper 1A · Multiple Choice
// 25 MCQs spanning all 10 topics (17 SL core + 8 HL-only tagged level: "HL").
// Calculator & Data Booklet permitted (FA2025). Balanced answerIndex: [6,6,6,7].
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1a",
  title: "Paper 1A · Multiple Choice (SL & HL)",
  paperType: "Paper 1A · Multiple Choice",
  level: "SL",
  calculator: true,
  minutes: 60,
  questions: [
    // ===================== Q01: A.1 Projectiles (SL) ========================
    {
      id: "exam-p1a-q01",
      kind: "mcq",
      topicId: "a1-mechanics",
      guideRef: "kinematics-projectiles",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Independent horizontal and vertical components",
      question:
        "A ball is projected horizontally from the edge of a vertical cliff of height `19.6 m` at a speed of `12.0 m s⁻¹`. Air resistance is negligible (take `g = 9.81 m s⁻²`). What horizontal distance does the ball travel before striking the level ground below?",
      options: ["24.0 m", "17.0 m", "34.0 m", "48.0 m"],
      answerIndex: 0,
      hints: [
        "Vertical and horizontal motions are independent: find the time of flight from the vertical drop first.",
        "Since launch is horizontal, initial vertical velocity is `u_y = 0`, so `h = {{1/2}} g t²`.",
      ],
      explanation:
        "From vertical free fall with `u_y = 0`, `t = {{sqrt(2h/g)}} = {{sqrt(2 * 19.6 / 9.81)}} = 2.00 s`. With constant horizontal velocity, the range is `x = v_x t = 12.0 × 2.00 = 24.0 m`. Omitting the factor of 2 inside the square root gives `17.0 m`, while dropping the `{{1/2}}` altogether doubles the time to `4.00 s` and yields `48.0 m`.",
    },

    // ===================== Q02: A.2 Static vs Dynamic Friction (SL) =========
    {
      id: "exam-p1a-q02",
      kind: "mcq",
      topicId: "a1-mechanics",
      guideRef: "forces-newton-friction",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Compare applied force against maximum static friction",
      question:
        "A `4.0 kg` block rests on a rough horizontal table where the coefficient of static friction is `μ_s = 0.50` and the coefficient of dynamic friction is `μ_d = 0.30`. A steady horizontal pulling force of `15.0 N` is applied to the block (take `g = 9.81 m s⁻²`). What is the magnitude of the frictional force acting on the block?",
      options: ["11.8 N", "19.6 N", "15.0 N", "39.2 N"],
      answerIndex: 2,
      hints: [
        "First calculate the normal reaction force `F_N = mg` and the maximum possible static friction `F_s,max = μ_s F_N`.",
        "Check whether the applied `15.0 N` pull is large enough to overcome `F_s,max`.",
        "If the block does not move, static friction matches only the applied force so that `ΣF = 0`.",
      ],
      explanation:
        "The normal force is `F_N = 4.0 × 9.81 = 39.24 N`, so the maximum static friction is `F_s,max = 0.50 × 39.24 = 19.6 N`. Because the applied force (`15.0 N`) is smaller than `19.6 N`, the block stays at rest and static friction adjusts to balance the pull at exactly `15.0 N`. Quoting `19.6 N` forgets that `F_f ≤ μ_s F_N` is an inequality, while `11.8 N` wrongly applies dynamic friction to a stationary object.",
    },

    // ===================== Q03: A.2 Momentum & Inelastic Collision (SL) =====
    {
      id: "exam-p1a-q03",
      kind: "mcq",
      topicId: "a1-mechanics",
      guideRef: "momentum-circular",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Conservation of linear momentum followed by kinetic energy comparison",
      question:
        "On a frictionless track, trolley X of mass `2.0 kg` moves at `6.0 m s⁻¹` and collides with a stationary trolley Y of mass `4.0 kg`. The two trolleys stick together after impact. What fraction of the initial kinetic energy is dissipated during the collision?",
      options: ["{{1/3}}", "{{2/3}}", "{{1/2}}", "{{3/4}}"],
      answerIndex: 1,
      hints: [
        "Use conservation of momentum `m_X u_X = (m_X + m_Y) v` to find the common speed after impact.",
        "Calculate both the initial kinetic energy `E_k,i` and the final kinetic energy `E_k,f`.",
        "The question asks for the fraction *dissipated*, namely `(E_k,i − E_k,f) / E_k,i`, not the fraction remaining.",
      ],
      explanation:
        "By conservation of momentum, `v = (2.0 × 6.0) / (2.0 + 4.0) = 2.0 m s⁻¹`. The initial kinetic energy is `E_k,i = {{1/2}}(2.0)(6.0)² = 36 J`, and the final kinetic energy is `E_k,f = {{1/2}}(6.0)(2.0)² = 12 J`. Thus `24 J` is dissipated, giving a dissipated fraction of `{{24/36}} = {{2/3}}`. Selecting `{{1/3}}` gives the fraction of kinetic energy retained rather than lost.",
    },

    // ===================== Q04: A.3 Power on an Incline (SL) ================
    {
      id: "exam-p1a-q04",
      kind: "mcq",
      topicId: "a1-mechanics",
      guideRef: "work-energy-power",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Resolve weight along the slope and apply P = Fv",
      question:
        "A cyclist and bicycle of combined mass `80 kg` ride up a straight road inclined at `5.0°` to the horizontal at a constant speed of `6.0 m s⁻¹`. Resistive drag and rolling resistance total `25 N` parallel to the slope (take `g = 9.81 m s⁻²`). What is the useful mechanical power output of the cyclist?",
      options: ["150 W", "260 W", "410 W", "560 W"],
      answerIndex: 3,
      hints: [
        "At constant velocity along the slope, the cyclist's forward driving force must balance both resistive drag and the downhill component of weight.",
        "Compute the downhill weight component `mg sin 5.0°` and add the `25 N` drag force.",
        "Multiply total driving force by speed using `P = Fv`.",
      ],
      explanation:
        "The component of weight down the slope is `mg sin 5.0° = 80 × 9.81 × sin 5.0° = 68.4 N`. To maintain constant speed, the forward driving force must equal `68.4 + 25 = 93.4 N`. Therefore `P = Fv = 93.4 × 6.0 = 560 W`. Values of `150 W` and `410 W` account for only drag or only gravity, while `260 W` wrongly subtracts the two opposing forces.",
    },

    // ===================== Q05: A.4 Rolling Energy Ratio (HL) ===============
    {
      id: "exam-p1a-q05",
      kind: "mcq",
      topicId: "a2-rotational-relativity",
      guideRef: "moment-inertia-angular-momentum",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Translational plus rotational energy conservation with v = ωR",
      question:
        "A uniform solid sphere (`I = {{2/5}}MR²`) and a thin-walled hollow cylinder (`I = MR²`) of identical mass `M` and radius `R` are released from rest at the top of the same incline and roll without slipping. What is the ratio `v_sphere / v_cylinder` of their translational speeds at the bottom?",
      options: ["1.20", "1.00", "1.43", "0.84"],
      answerIndex: 0,
      hints: [
        "Set gravitational potential energy `Mgh` equal to translational plus rotational kinetic energy: `{{1/2}}Mv² + {{1/2}}Iω²`.",
        "Substitute the rolling-without-slipping condition `ω = v/R` so `M` and `R` cancel out.",
        "Remember to take the square root of the ratio of `v²` values.",
      ],
      explanation:
        "From `Mgh = {{1/2}}Mv²(1 + I/(MR²))`, the solid sphere has `v_sphere² = {{10/7}}gh` whereas the hollow cylinder has `v_cylinder² = gh`. Taking the square root gives `v_sphere / v_cylinder = {{sqrt(10/7)}} = 1.20`. Choosing `1.43` omits the square root (`10/7`), while `1.00` neglects rotational kinetic energy completely.",
    },

    // ===================== Q06: A.5 Muon Time Dilation (HL) =================
    {
      id: "exam-p1a-q06",
      kind: "mcq",
      topicId: "a2-rotational-relativity",
      guideRef: "galilean-special-relativity",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Lorentz factor and Earth-frame dilated lifetime",
      question:
        "Cosmic-ray muons travel vertically downward toward Earth's surface at speed `0.980c` relative to Earth. Their proper mean lifetime is `2.20 μs`. What mean distance do the muons travel in Earth's reference frame before decaying?",
      options: ["0.647 km", "0.129 km", "3.25 km", "16.3 km"],
      answerIndex: 2,
      hints: [
        "First compute the Lorentz factor `γ = 1 / {{sqrt(1 - v^2/c^2)}}` for `v/c = 0.980`.",
        "In Earth's frame, the muon clock runs slower so the dilated lifetime is `Δt = γ Δt₀`.",
        "Multiply the Earth-frame speed `0.980 × 3.00 × 10⁸ m s⁻¹` by the dilated lifetime `Δt`.",
      ],
      explanation:
        "With `v/c = 0.980`, `γ = 1 / {{sqrt(1 - 0.980^2)}} = 1 / {{sqrt(0.0396)}} = 5.025`. The dilated lifetime in Earth's frame is `Δt = 5.025 × 2.20 × 10⁻⁶ = 11.06 μs`, giving a distance `d = (0.980 × 3.00 × 10⁸)(11.06 × 10⁻⁶) = 3250 m = 3.25 km`. The value `0.647 km` ignores relativistic time dilation, and `0.129 km` divides by `γ` instead of multiplying.",
    },

    // ===================== Q07: B.1 Stefan-Boltzmann Luminosity (SL) ========
    {
      id: "exam-p1a-q07",
      kind: "mcq",
      topicId: "b1-thermal-gases",
      guideRef: "thermal-transfers-radiation",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Proportional scaling with L ∝ R²T⁴",
      question:
        "Star P has radius `R` and surface temperature `T`. Star Q has radius `{{R/2}}` and surface temperature `2T`. Both stars radiate as ideal black bodies. What is the ratio of their luminosities `L_Q / L_P`?",
      options: ["2", "4", "8", "16"],
      answerIndex: 1,
      hints: [
        "Use the Stefan–Boltzmann law for a spherical black body: `L = 4πR²σT⁴`.",
        "Evaluate `(R_Q / R_P)² × (T_Q / T_P)⁴` carefully.",
      ],
      explanation:
        "Since `L = 4πR²σT⁴`, scaling radius by `{{1/2}}` multiplies surface area by `({{1/2}})² = {{1/4}}`, while doubling temperature multiplies `T⁴` by `2⁴ = 16`. Hence `L_Q / L_P = {{1/4}} × 16 = 4`. Choosing `8` mistakenly scales area linearly with radius, and `16` ignores the smaller radius.",
    },

    // ===================== Q08: B.2 Greenhouse Mechanism (SL) ===============
    {
      id: "exam-p1a-q08",
      kind: "mcq",
      topicId: "b1-thermal-gases",
      guideRef: "greenhouse-effect",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Resonant absorption and isotropic re-emission of terrestrial IR",
      question:
        "Which statement best explains why greenhouse gases such as carbon dioxide and water vapour raise the equilibrium temperature of Earth's surface?",
      options: [
        "They absorb incoming short-wavelength solar ultraviolet radiation directly and conduct thermal energy down to the ocean.",
        "They increase Earth's surface albedo by reflecting visible sunlight back toward the ground before it reaches outer space.",
        "They trap convective warm air mechanically at the tropopause by forming a dense physical barrier that blocks rising currents.",
        "They absorb outgoing long-wavelength terrestrial infrared photons at resonant frequencies and re-emit radiation in all directions.",
      ],
      answerIndex: 3,
      hints: [
        "Compare the peak wavelength of solar radiation (visible/near-IR) with that emitted by Earth's ~288 K surface (infrared).",
        "Recall what happens to molecular vibrational modes when photons match their natural frequency, and in which directions re-emission occurs.",
      ],
      explanation:
        "Earth's cool surface emits long-wavelength infrared radiation whose frequencies match the resonant vibrational modes of greenhouse gas molecules. Those molecules absorb outgoing infrared photons and re-emit them isotropically in all directions, returning part of the radiant flux back to the surface. Greenhouse gases are largely transparent to incoming visible sunlight and do not act as a mechanical lid.",
    },

    // ===================== Q09: B.3 Ideal Gas Kelvin Scale (SL) =============
    {
      id: "exam-p1a-q09",
      kind: "mcq",
      topicId: "b1-thermal-gases",
      guideRef: "gas-laws-kmt",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert Celsius to Kelvin before applying P/T = constant",
      question:
        "A fixed amount of ideal gas is sealed inside a rigid cylinder at `27 °C` and a pressure of `120 kPa`. The cylinder is heated until the gas temperature reaches `327 °C`. What is the new pressure of the gas?",
      options: ["240 kPa", "170 kPa", "480 kPa", "1450 kPa"],
      answerIndex: 0,
      hints: [
        "For a fixed amount of ideal gas at constant volume, `P ∝ T` where `T` must be the absolute temperature in kelvin.",
        "Convert both `27 °C` and `327 °C` to kelvin by adding `273` before taking the ratio.",
      ],
      explanation:
        "Converting to kelvin gives `T₁ = 27 + 273 = 300 K` and `T₂ = 327 + 273 = 600 K`. Because volume and mole count are constant, `P₂ = P₁(T₂/T₁) = 120 × (600/300) = 240 kPa`. Using Celsius values directly (`327/27`) produces the huge error `1450 kPa`.",
    },

    // ===================== Q10: B.4 Isobaric First Law (HL) =================
    {
      id: "exam-p1a-q10",
      kind: "mcq",
      topicId: "b1-thermal-gases",
      guideRef: "thermodynamics-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Combine W = PΔV and ΔU = (3/2)PΔV in Q = ΔU + W",
      question:
        "A fixed sample of ideal monatomic gas expands isobarically at a constant pressure of `2.00 × 10⁵ Pa`, increasing in volume from `1.50 × 10⁻³ m³` to `4.50 × 10⁻³ m³`. How much thermal energy `Q` is supplied to the gas?",
      options: ["600 J", "900 J", "1500 J", "300 J"],
      answerIndex: 2,
      hints: [
        "First find the mechanical work done by the gas during the isobaric expansion: `W = P ΔV`.",
        "For an ideal monatomic gas, `U = {{3/2}} nRT = {{3/2}} PV`, so at constant pressure `ΔU = {{3/2}} P ΔV`.",
        "Apply the First Law of Thermodynamics: `Q = ΔU + W`.",
      ],
      explanation:
        "The work done by the gas is `W = P ΔV = (2.00 × 10⁵)(3.00 × 10⁻³) = 600 J`. Since `U = {{3/2}} PV` for a monatomic ideal gas, the increase in internal energy at constant pressure is `ΔU = {{3/2}} P ΔV = 900 J`. By the First Law, `Q = ΔU + W = 900 + 600 = 1500 J`. Choosing `600 J` forgets the temperature rise (`ΔU`), and `900 J` omits the expansion work.",
    },

    // ===================== Q11: B.5 Resistivity Scaling (SL) ================
    {
      id: "exam-p1a-q11",
      kind: "mcq",
      topicId: "b2-circuits",
      guideRef: "current-pd-ohm",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Scale resistance using R = 4ρL/(πd²)",
      question:
        "Two cylindrical wires, X and Y, are made of the same metal at the same temperature. Wire Y has twice the length and twice the diameter of wire X. Wire X has a resistance of `8.0 Ω`. What is the resistance of wire Y?",
      options: ["16.0 Ω", "8.0 Ω", "2.0 Ω", "4.0 Ω"],
      answerIndex: 3,
      hints: [
        "Recall `R = ρL/A`, where cross-sectional area `A = πd²/4` scales with the *square* of the diameter.",
        "Find the combined factor when `L` is multiplied by `2` and `A` is multiplied by `2² = 4`.",
      ],
      explanation:
        "Since `R = ρL / A ∝ L / d²`, doubling the length multiplies resistance by `2`, while doubling the diameter quadruples the cross-sectional area and divides resistance by `4`. Overall, `R_Y = 8.0 × (2 / 4) = 4.0 Ω`. Selecting `8.0 Ω` forgets to square the diameter when computing area.",
    },

    // ===================== Q12: B.5 EMF & Internal Resistance (SL) ==========
    {
      id: "exam-p1a-q12",
      kind: "mcq",
      topicId: "b2-circuits",
      guideRef: "emf-internal-resistance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Find equivalent external resistance, total current, then V = ε − Ir",
      question:
        "A cell of EMF `12.0 V` and internal resistance `1.5 Ω` is connected in series with two `9.0 Ω` resistors wired in parallel with each other. What is the terminal potential difference across the cell?",
      options: ["3.0 V", "9.0 V", "10.5 V", "11.1 V"],
      answerIndex: 1,
      hints: [
        "Combine the two parallel `9.0 Ω` resistors first using `1/R_p = 1/9.0 + 1/9.0`.",
        "Find the total circuit current `I = ε / (R_ext + r)`.",
        "Calculate terminal p.d. using `V = ε − Ir` (or `V = I R_ext`).",
      ],
      explanation:
        "The two `9.0 Ω` resistors in parallel have equivalent resistance `R_ext = 4.5 Ω`. Total circuit resistance is `4.5 + 1.5 = 6.0 Ω`, so `I = 12.0 / 6.0 = 2.0 A`. The terminal potential difference is `V = ε − Ir = 12.0 − (2.0)(1.5) = 9.0 V`. The distractor `3.0 V` is the lost voltage `Ir` across the internal resistance, while `11.1 V` wrongly puts the two `9.0 Ω` resistors in series.",
    },

    // ===================== Q13: C.1 Quantitative SHM Speed (HL) =============
    {
      id: "exam-p1a-q13",
      kind: "mcq",
      topicId: "c1-shm-waves",
      guideRef: "shm-equations-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply v = ω√(x₀² − x²)",
      question:
        "A particle undergoes simple harmonic motion with amplitude `x₀ = 0.10 m` and angular frequency `ω = 4.0 rad s⁻¹`. What is the speed of the particle when its displacement from equilibrium is `x = 0.060 m`?",
      options: ["0.32 m s⁻¹", "0.40 m s⁻¹", "0.24 m s⁻¹", "0.16 m s⁻¹"],
      answerIndex: 0,
      hints: [
        "Use the displacement–velocity SHM relation `v = ±ω {{sqrt(x_0^2 - x^2)}}`.",
        "Square both `0.10` and `0.060` *before* subtracting, then take the square root.",
      ],
      explanation:
        "Substituting into `v = ω {{sqrt(x_0^2 - x^2)}}` gives `v = 4.0 × {{sqrt(0.10^2 - 0.060^2)}} = 4.0 × {{sqrt(0.0064)}} = 4.0 × 0.080 = 0.32 m s⁻¹`. The value `0.16 m s⁻¹` arises from the common error `ω(x₀ − x)`, while `0.40 m s⁻¹` is the maximum speed at equilibrium.",
    },

    // ===================== Q14: C.2 Intensity, Distance & Amplitude (SL) ====
    {
      id: "exam-p1a-q14",
      kind: "mcq",
      topicId: "c1-shm-waves",
      guideRef: "em-spectrum-intensity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Combine I ∝ 1/r² with I ∝ A²",
      question:
        "An isotropic point source emits sound waves of constant power into open air with negligible absorption. At a distance of `3.0 m` from the source, the wave amplitude is `A`. What is the wave amplitude at a distance of `6.0 m` from the source?",
      options: ["{{A/4}}", "{{A/sqrt(2)}}", "{{A/2}}", "{{A/8}}"],
      answerIndex: 2,
      hints: [
        "How does wave *intensity* `I` change when distance `r` doubles (`I = P / (4πr²)`)?",
        "Now link intensity to amplitude via `I ∝ A²` — take the square root of the intensity factor.",
      ],
      explanation:
        "By the inverse-square law `I ∝ 1/r²`, doubling the distance from `3.0 m` to `6.0 m` reduces intensity to one-quarter (`I/4`). Since intensity is proportional to amplitude squared (`I ∝ A²`), amplitude varies as `A ∝ 1/r`, so it halves to `{{A/2}}`. Selecting `{{A/4}}` confuses wave amplitude with wave intensity.",
    },

    // ===================== Q15: C.3 Double-Slit Fringe Position (SL) ========
    {
      id: "exam-p1a-q15",
      kind: "mcq",
      topicId: "c2-wave-phenomena",
      guideRef: "refraction-diffraction-double-slit",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Fringe spacing s = λD/d multiplied by fringe order",
      question:
        "Monochromatic light of wavelength `600 nm` passes through two narrow slits separated by `0.30 mm` and forms interference fringes on a screen `1.50 m` away. What is the distance along the screen from the central bright maximum to the third-order bright fringe?",
      options: ["3.0 mm", "6.0 mm", "7.5 mm", "9.0 mm"],
      answerIndex: 3,
      hints: [
        "Convert all lengths to metres (`600 nm = 6.00 × 10⁻⁷ m`, `0.30 mm = 3.0 × 10⁻⁴ m`) and calculate the fringe spacing `s = λD/d`.",
        "The central maximum is order `n = 0`, so how many fringe spacings lie between `n = 0` and `n = 3`?",
      ],
      explanation:
        "The adjacent bright fringe spacing is `s = λD/d = (6.00 × 10⁻⁷ × 1.50) / (3.0 × 10⁻⁴) = 3.0 × 10⁻³ m = 3.0 mm`. The third-order bright fringe (`n = 3`) lies `3s = 3 × 3.0 = 9.0 mm` from the central maximum (`n = 0`). Answering `3.0 mm` gives only a single fringe spacing, while `7.5 mm` corresponds to `2.5s` (the third dark fringe).",
    },

    // ===================== Q16: C.3 Diffraction Grating Max Order (HL) ======
    {
      id: "exam-p1a-q16",
      kind: "mcq",
      topicId: "c2-wave-phenomena",
      guideRef: "single-slit-grating-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Determine",
      strategy: "Use nλ = d sin θ with sin θ < 1",
      question:
        "Monochromatic light of wavelength `450 nm` is incident normally on a diffraction grating ruled with `500` lines per millimetre. What is the highest order diffraction maximum that can be observed?",
      options: ["3", "4", "5", "9"],
      answerIndex: 1,
      hints: [
        "Find the slit spacing `d` in metres from `500 lines mm⁻¹`: `d = (1.00 × 10⁻³ m) / 500`.",
        "Apply `nλ = d sin θ` and use the upper bound `sin θ ≤ 1`, then round *down* to the nearest integer.",
      ],
      explanation:
        "The grating spacing is `d = 1.00 × 10⁻³ / 500 = 2.00 × 10⁻⁶ m = 2000 nm`. Since `sin θ = nλ / d ≤ 1`, we require `n ≤ 2000 / 450 = 4.44`. Because order `n` must be an integer, the highest observable order is `n = 4`. Rounding up to `5` violates `sin θ ≤ 1`, whereas `9` counts the total number of bright maxima (`2n + 1`) across both sides plus the central order.",
    },

    // ===================== Q17: C.4 Standing Waves in Closed Pipe (SL) ======
    {
      id: "exam-p1a-q17",
      kind: "mcq",
      topicId: "c2-wave-phenomena",
      guideRef: "standing-waves-resonance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Open–closed pipes support odd harmonics only",
      question:
        "An organ pipe of length `0.85 m` is closed at one end and open at the other. The speed of sound in air is `340 m s⁻¹`. What is the frequency of the next allowed harmonic immediately above the fundamental frequency?",
      options: ["300 Hz", "200 Hz", "100 Hz", "400 Hz"],
      answerIndex: 0,
      hints: [
        "Sketch a displacement node at the closed end and an antinode at the open end: the fundamental fits `{{1/4}} λ` inside `L`.",
        "Calculate the fundamental frequency `f₁ = v / (4L)`.",
        "Remember that an open–closed pipe supports *only odd harmonics* (`f₁, 3f₁, 5f₁, …`).",
      ],
      explanation:
        "For a pipe closed at one end, the fundamental wavelength is `λ₁ = 4L = 3.40 m`, giving `f₁ = 340 / 3.40 = 100 Hz`. Because a node is required at the closed end and an antinode at the open end, only odd multiples of `f₁` can form, so the next harmonic is `f₃ = 3f₁ = 300 Hz`. Choosing `200 Hz` wrongly assumes even harmonics exist as in an open–open pipe.",
    },

    // ===================== Q18: D.1 Kepler's Third Law (SL) =================
    {
      id: "exam-p1a-q18",
      kind: "mcq",
      topicId: "d1-fields-motion",
      guideRef: "gravitational-fields-orbits",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Apply Kepler's third law T² ∝ r³",
      question:
        "Satellite X moves in a circular orbit of radius `R` around a planet with orbital period `T`. Satellite Y moves in a circular orbit of radius `4R` around the same planet. What is the orbital period of satellite Y?",
      options: ["2T", "4T", "8T", "16T"],
      answerIndex: 2,
      hints: [
        "Equate gravitational attraction to centripetal force to recall Kepler's third law: `T² ∝ r³`.",
        "Take the square root of `4³` to find `T_Y / T_X`.",
      ],
      explanation:
        "From Kepler's third law `T² = (4π² / GM) r³`, we have `T_Y / T_X = (4R / R)^(3/2) = 4^(3/2) = ({{sqrt(4)}})³ = 8`, so `T_Y = 8T`. Choosing `4T` treats period as directly proportional to radius, while `16T` squares the radius ratio instead of raising it to the `3/2` power.",
    },

    // ===================== Q19: D.3 Cyclotron Radius (SL) ===================
    {
      id: "exam-p1a-q19",
      kind: "mcq",
      topicId: "d1-fields-motion",
      guideRef: "motion-em-fields",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Scale circular cyclotron radius r = mv/(qB)",
      question:
        "A proton (mass `m_p`, charge `+e`) enters a uniform magnetic field perpendicularly at speed `v` and follows a circular path of radius `r`. An alpha particle (mass `4m_p`, charge `+2e`) enters the same magnetic field perpendicularly at speed `2v`. What is the radius of the alpha particle's circular path?",
      options: ["r", "2r", "8r", "4r"],
      answerIndex: 3,
      hints: [
        "Equate the magnetic Lorentz force `qvB` to centripetal force `mv²/r` to obtain `r = mv/(qB)`.",
        "Substitute `4m_p`, `2v`, and `2e` into the ratio `r_α / r_p`.",
      ],
      explanation:
        "From `qvB = mv²/r`, the circular radius is `r = mv / (qB)`. For the alpha particle, `r_α / r = [(4m_p)(2v) / (2eB)] ÷ [m_p v / (eB)] = (4 × 2) / 2 = 4`, giving `4r`. Choosing `2r` overlooks the doubled speed, while `8r` forgets that an alpha particle carries twice the proton's charge.",
    },

    // ===================== Q20: D.4 Faraday's Law Calculation (HL) ==========
    {
      id: "exam-p1a-q20",
      kind: "mcq",
      topicId: "d2-induction",
      guideRef: "faraday-lenz-laws",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply |ε| = N A |ΔB| / Δt",
      question:
        "A flat circular coil of `200` turns and cross-sectional area `5.0 × 10⁻³ m²` lies perpendicular to a uniform magnetic field. The magnetic flux density decreases uniformly from `0.40 T` to `0.10 T` in `0.25 s`. What is the magnitude of the induced EMF in the coil?",
      options: ["0.30 V", "1.20 V", "1.60 V", "0.40 V"],
      answerIndex: 1,
      hints: [
        "Because the field is perpendicular to the coil plane, `θ = 0°` and `Φ = BA`.",
        "Compute the *change* in flux density `|ΔB| = 0.40 − 0.10 = 0.30 T`, not the initial value.",
        "Divide `N A |ΔB|` by the time interval `Δt = 0.25 s`.",
      ],
      explanation:
        "The change in flux through one turn is `|ΔΦ| = A |ΔB| = (5.0 × 10⁻³)(0.40 − 0.10) = 1.50 × 10⁻³ Wb`. By Faraday's law, `|ε| = N |ΔΦ| / Δt = (200 × 1.50 × 10⁻³) / 0.25 = 1.20 V`. Obtaining `1.60 V` mistakenly uses the initial field `0.40 T` rather than `ΔB`, while `0.30 V` omits dividing by `0.25 s`.",
    },

    // ===================== Q21: D.4 AC Generator Frequency Doubling (HL) ====
    {
      id: "exam-p1a-q21",
      kind: "mcq",
      topicId: "d2-induction",
      guideRef: "ac-generators-sinusoidal",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Determine",
      strategy: "Use ε(t) = NBAω sin(ωt) and T = 2π/ω",
      question:
        "An ideal rotating-coil AC generator spins at constant angular speed `ω` in a uniform magnetic field, producing a sinusoidal EMF with peak value `ε₀` and period `T`. The angular speed is doubled to `2ω` while all other parameters stay unchanged. What are the new peak EMF and the new period?",
      options: [
        "Peak EMF `2ε₀` and period `{{T/2}}`",
        "Peak EMF `ε₀` and period `{{T/2}}`",
        "Peak EMF `2ε₀` and period `2T`",
        "Peak EMF `4ε₀` and period `{{T/2}}`",
      ],
      answerIndex: 0,
      hints: [
        "Differentiate magnetic flux linkage `NΦ = NBA cos(ωt)` with respect to time to see how `ω` enters the amplitude of `ε(t)`.",
        "Also check how period `T = 2π/ω` depends on angular speed `ω`.",
      ],
      explanation:
        "From Faraday's law, `ε(t) = NBAω sin(ωt)`, so peak EMF `ε_max = NBAω` is directly proportional to `ω` and doubles to `2ε₀` when the coil spins twice as fast (magnetic flux lines are cut at twice the rate). Simultaneously, period `T = 2π/ω` is inversely proportional to `ω` and halves to `{{T/2}}`.",
    },

    // ===================== Q22: E.1 Atomic Transition Wavelength (SL) =======
    {
      id: "exam-p1a-q22",
      kind: "mcq",
      topicId: "e1-atom-quantum",
      guideRef: "atomic-spectra-levels",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Convert ΔE from eV to J then solve λ = hc/ΔE",
      question:
        "An electron in a hydrogen atom transitions downward from an energy level at `−1.51 eV` to an energy level at `−3.40 eV`. Take `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `e = 1.60 × 10⁻¹⁹ C`. What is the wavelength of the emitted photon?",
      options: ["365 nm", "823 nm", "253 nm", "658 nm"],
      answerIndex: 3,
      hints: [
        "First find the energy difference `ΔE = (−1.51) − (−3.40)` in electronvolts, then convert to joules by multiplying by `1.60 × 10⁻¹⁹`.",
        "Use `λ = hc / ΔE` and express the answer in nanometres (`1 nm = 10⁻⁹ m`).",
      ],
      explanation:
        "The emitted photon energy is `ΔE = (−1.51) − (−3.40) = 1.89 eV = 1.89 × 1.60 × 10⁻¹⁹ = 3.024 × 10⁻¹⁹ J`. Thus `λ = hc / ΔE = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (3.024 × 10⁻¹⁹) = 6.58 × 10⁻⁷ m = 658 nm` (the red Balmer H-alpha line). Values of `365 nm` and `823 nm` use a single level energy rather than the difference, and `253 nm` adds the magnitudes of the two levels.",
    },

    // ===================== Q23: E.2 Photoelectric Intensity Effect (HL) =====
    {
      id: "exam-p1a-q23",
      kind: "mcq",
      topicId: "e1-atom-quantum",
      guideRef: "photoelectric-compton-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Distinguish photon energy (frequency) from photon flux (intensity)",
      question:
        "Monochromatic light of frequency above the threshold frequency strikes a clean metal cathode in a photocell. The light intensity is doubled while its frequency remains constant. How do the stopping potential `V_s` and the maximum photoelectric current `I_max` change?",
      options: [
        "Stopping potential doubles and maximum current doubles",
        "Stopping potential stays unchanged and maximum current stays unchanged",
        "Stopping potential stays unchanged and maximum current doubles",
        "Stopping potential doubles and maximum current stays unchanged",
      ],
      answerIndex: 2,
      hints: [
        "Examine Einstein's photoelectric equation `eV_s = hf − Φ`: does light intensity appear in it?",
        "At constant photon frequency, what does doubling the incident intensity do to the number of photons arriving per second?",
      ],
      explanation:
        "Because `eV_s = hf − Φ`, the stopping potential depends only on photon frequency `f` and the metal's work function `Φ`, so `V_s` stays unchanged when frequency is fixed. Doubling the intensity at fixed frequency doubles the number of incident photons per second, which doubles the rate of electron emission and therefore doubles `I_max`.",
    },

    // ===================== Q24: E.3 Half-Life from Count Rate (SL) ==========
    {
      id: "exam-p1a-q24",
      kind: "mcq",
      topicId: "e2-nuclear-stars",
      guideRef: "binding-energy-decay",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Count integer half-lives from powers of two",
      question:
        "A freshly prepared sample of a pure radioactive nuclide has a background-corrected count rate of `640 s⁻¹`. Exactly `18.0 hours` later, the corrected count rate has fallen to `80 s⁻¹`. What is the half-life of the nuclide?",
      options: ["2.25 hours", "6.00 hours", "9.00 hours", "4.50 hours"],
      answerIndex: 1,
      hints: [
        "Find how many times `640` must be halved to reach `80`.",
        "Divide the total elapsed time `18.0 hours` by that number of half-lives.",
      ],
      explanation:
        "The activity drops by a factor of `640 / 80 = 8 = 2³`, meaning `3` half-lives have elapsed (`640 → 320 → 160 → 80`). Therefore `T_½ = 18.0 / 3 = 6.00 hours`. Dividing `18.0` directly by the activity ratio `8` gives the wrong distractor `2.25 hours`.",
    },

    // ===================== Q25: E.5 Stellar Brightness & Radii (SL) =========
    {
      id: "exam-p1a-q25",
      kind: "mcq",
      topicId: "e2-nuclear-stars",
      guideRef: "fusion-stars-hr",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Combine b = L/(4πd²) with L = 4πR²σT⁴",
      question:
        "Two main-sequence stars, Alpha and Beta, have identical surface temperatures and identical apparent brightnesses when viewed from Earth. Star Alpha is twice as far from Earth as Star Beta. What is the ratio of their radii `R_Alpha / R_Beta`?",
      options: ["0.5", "1", "4", "2"],
      answerIndex: 3,
      hints: [
        "Use `b = L / (4πd²)` to find the luminosity ratio `L_Alpha / L_Beta` when `b` is the same and `d` doubles.",
        "Substitute `L = 4πR²σT⁴` with equal temperatures `T` to relate `R` directly to `d`.",
      ],
      explanation:
        "Combining `b = L / (4πd²)` with `L = 4πR²σT⁴` gives `b = σT⁴ (R / d)²`. Because both stars have the same apparent brightness `b` and the same temperature `T`, the ratio `R / d` must be equal for both stars. Since Alpha is twice as distant (`d_Alpha = 2 d_Beta`), its radius must also be twice as large (`R_Alpha / R_Beta = 2`). Choosing `4` gives the ratio of luminosities rather than radii.",
    },
  ],
};
