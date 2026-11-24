// ---------------------------------------------------------------------------
// IB Diploma Physics (First Assessment 2025) — Paper 2 (HL)
// 20 structured & extended-response questions spanning ALL 10 topics across
// Themes A–E with deep HL extensions (A.4, A.5, B.4, C.1/C.3/C.5 HL,
// D.1–D.2 potentials, D.4 induction, E.2 quantum, E.3 HL decay).
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const SVG_MINKOWSKI =
  '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minkowski spacetime diagram with orthogonal platform axes x and ct, 45-degree dashed light cone, tilted train axes ct prime and x prime, and rear flash E_R occurring at an earlier ct coordinate than front flash E_F">' +
  '<rect x="0" y="0" width="460" height="320" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#d97706" stroke-width="1.3" stroke-dasharray="5,4">' +
  '<line x1="130" y1="285" x2="380" y2="35"/><line x1="330" y1="285" x2="80" y2="35"/>' +
  "</g>" +
  '<text x="378" y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#b45309" text-anchor="end">Light cone (ct = x)</text>' +
  '<g stroke="#0f172a" stroke-width="2">' +
  '<line x1="40" y1="185" x2="420" y2="185"/><line x1="230" y1="292" x2="230" y2="28"/>' +
  "</g>" +
  '<polygon points="426,185 416,180 416,190" fill="#0f172a"/>' +
  '<polygon points="230,22 225,32 235,32" fill="#0f172a"/>' +
  '<text x="428" y="189" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a">x</text>' +
  '<text x="230" y="16" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">ct</text>' +
  '<g stroke="#2563eb" stroke-width="2">' +
  '<line x1="180" y1="285" x2="305" y2="35"/><line x1="70" y1="265" x2="390" y2="105"/>' +
  "</g>" +
  '<polygon points="308,29 299,36 308,40" fill="#2563eb"/>' +
  '<polygon points="396,102 385,102 389,111" fill="#2563eb"/>' +
  '<text x="312" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">ct′</text>' +
  '<text x="402" y="103" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">x′ (t′ = 0)</text>' +
  '<g stroke="#dc2626" stroke-width="1.4" stroke-dasharray="4,3">' +
  '<line x1="130" y1="235" x2="230" y2="235"/><line x1="330" y1="135" x2="230" y2="135"/>' +
  "</g>" +
  '<circle cx="130" cy="235" r="5" fill="#dc2626"/><circle cx="330" cy="135" r="5" fill="#dc2626"/>' +
  '<g font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">' +
  '<text x="122" y="253" text-anchor="middle">E_R (rear)</text><text x="338" y="153" text-anchor="middle">E_F (front)</text>' +
  '<text x="237" y="239">ct_R</text><text x="223" y="139" text-anchor="end">ct_F</text>' +
  "</g>" +
  "</svg>";

const SVG_PV_CYCLE =
  '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pressure versus volume thermodynamic cycle A to B to C to A showing adiabatic expansion A to B, isobaric compression B to C, isovolumetric heating C to A, and shaded enclosed net work area">' +
  '<rect x="0" y="0" width="460" height="300" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<path d="M 135 70 Q 210 175 360 195 L 135 195 Z" fill="#dbeafe"/>' +
  '<g stroke="#0f172a" stroke-width="2">' +
  '<line x1="70" y1="245" x2="420" y2="245"/><line x1="70" y1="245" x2="70" y2="35"/>' +
  "</g>" +
  '<polygon points="426,245 416,240 416,250" fill="#0f172a"/>' +
  '<polygon points="70,29 65,39 75,39" fill="#0f172a"/>' +
  '<text x="245" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Volume V</text>' +
  '<text x="32" y="140" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle" transform="rotate(-90 32 140)">Pressure P</text>' +
  '<path d="M 135 70 Q 210 175 360 195" fill="none" stroke="#2563eb" stroke-width="2.6"/>' +
  '<line x1="360" y1="195" x2="135" y2="195" stroke="#dc2626" stroke-width="2.6"/>' +
  '<line x1="135" y1="195" x2="135" y2="70" stroke="#059669" stroke-width="2.6"/>' +
  '<polygon points="234,158 222,154 228,145" fill="#2563eb"/>' +
  '<polygon points="242,195 254,190 254,200" fill="#dc2626"/>' +
  '<polygon points="135,128 130,140 140,140" fill="#059669"/>' +
  '<g fill="#0f172a">' +
  '<circle cx="135" cy="70" r="4.2"/><circle cx="360" cy="195" r="4.2"/><circle cx="135" cy="195" r="4.2"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="12" font-weight="700">' +
  '<text x="122" y="64" fill="#0f172a">A</text><text x="370" y="199" fill="#0f172a">B</text><text x="118" y="207" fill="#0f172a">C</text>' +
  '<text x="275" y="138" fill="#1d4ed8">A → B: Adiabatic</text>' +
  '<text x="248" y="218" fill="#b91c1c" text-anchor="middle">B → C: Isobaric</text>' +
  '<text x="80" y="136" fill="#047857">C → A:</text><text x="80" y="151" fill="#047857">Isovol.</text>' +
  '<text x="195" y="180" fill="#1e3a8a" font-size="11">Net work W_net</text>' +
  "</g>" +
  "</svg>";

export const paper: ExamPaper = {
  id: "exam-p2-hl",
  title: "Paper 2 (HL) · Structured & Extended Response",
  paperType: "Paper 2 (HL)",
  level: "HL",
  calculator: true,
  minutes: 150,
  questions: [
    // ===================== Q01: A.2 Vector Impulse & Average Force (SL core) ==
    {
      id: "exam-p2-hl-q01",
      kind: "short",
      topicId: "a1-mechanics",
      guideRef: "momentum-circular",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Use signed velocities in F_avg = m(v − u) / Δt",
      question:
        "A `0.058 kg` tennis ball approaches a racket horizontally at `24.0 m s⁻¹` and rebounds directly back along the same line at `32.0 m s⁻¹`. The contact duration between the ball and strings is `4.0 ms`. Calculate the magnitude of the average force exerted by the racket on the ball, to 3 significant figures (in `N`).",
      answer: { type: "number", value: 812, tolerance: 5, display: "812 N" },
      traps: [
        {
          spec: { type: "number", value: 116, tolerance: 2 },
          feedback: "You subtracted 32.0 − 24.0 = 8.0 m s⁻¹ without reversing the sign of the incoming velocity; Δv = 32.0 − (−24.0) = 56.0 m s⁻¹.",
        },
      ],
      hints: [
        "Choose a positive direction (e.g. rebound direction `+`), so `u = −24.0 m s⁻¹` and `v = +32.0 m s⁻¹`.",
        "Convert contact time `4.0 ms = 4.0 × 10⁻³ s` and apply `F_avg = Δp / Δt = m(v − u) / Δt`.",
      ],
      solution: [
        "Taking the rebound direction as positive: `Δv = 32.0 − (−24.0) = 56.0 m s⁻¹`.",
        "Impulse magnitude: `Δp = 0.058 × 56.0 = 3.248 N s`.",
        "Average force: `F_avg = 3.248 / (4.0 × 10⁻³) = 812 N`.",
      ],
      commonError: "Forgetting that velocity reverses direction, giving `Δv = 8.0 m s⁻¹` instead of `56.0 m s⁻¹`.",
    },

    // ===================== Q02: A.4 Rotational SUVAT & Braking Torque (HL) ==
    {
      id: "exam-p2-hl-q02",
      kind: "short",
      topicId: "a2-rotational-relativity",
      guideRef: "torque-rotational-kinematics",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert revolutions to radians, find α from ω² = ω₀² + 2αθ, then τ = Iα",
      question:
        "A uniform flywheel with moment of inertia `I = 0.450 kg m²` rotates initially at `12.0 rad s⁻¹`. A constant braking torque brings it uniformly to rest in exactly `4.00` complete revolutions. Calculate the magnitude of the braking torque, to 3 significant figures (in `N m`).",
      answer: { type: "number", value: 1.29, tolerance: 0.02, display: "1.29 N m" },
      traps: [
        {
          spec: { type: "number", value: 8.1, tolerance: 0.1 },
          feedback: "Convert 4.00 revolutions into radians (θ = 4.00 × 2π = 8π rad) before substituting into rotational SUVAT or work-energy.",
        },
      ],
      hints: [
        "Convert angular displacement to radians: `θ = 4.00 × 2π = 8π rad`.",
        "Either use rotational SUVAT `0 = ω_i² + 2αθ` followed by `|τ| = I|α|`, or use rotational work–energy `τθ = {{1/2}} I ω_i²`.",
      ],
      solution: [
        "Angular displacement: `θ = 4.00 × 2π = 25.13 rad`.",
        "Rotational work–energy: `τ θ = {{1/2}} I ω_i² = {{1/2}}(0.450)(12.0)² = 32.4 J`.",
        "`τ = 32.4 / 25.13 = 1.29 N m` (equivalently `|α| = 144 / (16π) = 2.865 rad s⁻²` and `τ = 0.450 × 2.865 = 1.29 N m`).",
      ],
      commonError: "Plugging `θ = 4.00` revolutions directly instead of converting to `8π = 25.13 rad`.",
    },

    // ===================== Q03: A.4 Angular Momentum & Rotational KE (HL, 5m) ==
    {
      id: "exam-p2-hl-q03",
      kind: "written",
      topicId: "a2-rotational-relativity",
      guideRef: "moment-inertia-angular-momentum",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 5,
      strategy: "Apply Στ_ext = 0 → L conserved, express E_k = L²/(2I), and identify internal muscular work",
      question:
        "An ice skater spins freely on frictionless ice with arms outstretched at angular velocity `ω₁`, and then pulls both arms tightly against the chest so angular velocity rises to `ω₂ = 2.5 ω₁`. Explain why angular momentum is conserved, deduce the ratio of final to initial moment of inertia `I₂ / I₁`, and explain quantitatively how the skater's rotational kinetic energy changes and where any energy change originates.",
      hints: [
        "What condition on external torque guarantees conservation of angular momentum `L = Iω`?",
        "Use `I₁ ω₁ = I₂ ω₂` to evaluate `I₂ / I₁`.",
        "Rewrite rotational kinetic energy as `E_k = L² / (2I)` to see immediately what happens when `I` shrinks while `L` stays fixed.",
        "Consider the inward radial force the skater's muscles exert while pulling the arms closer to the spin axis.",
      ],
      modelAnswer:
        "Because the ice is frictionless, zero net external torque acts about the vertical spin axis (`Στ_ext = 0`), so total angular momentum `L = Iω` is conserved. Pulling mass radially inward decreases the moment of inertia (`I = Σmr²`); equating `I₁ω₁ = I₂(2.5ω₁)` yields `I₂ / I₁ = 1 / 2.5 = 0.40`. Expressing rotational kinetic energy as `E_k = L² / (2I)`, since `L` stays constant while `I` shrinks by a factor of `2.5`, the rotational kinetic energy increases by a factor of `2.5` (`E_k,2 = 2.5 E_k,1`). This gain does not violate conservation of energy because the skater's muscles perform positive internal mechanical work pulling the arms inward toward the axis. Consequently, internal biochemical energy stored in the muscles converts into the extra rotational kinetic energy.",
      markScheme: [
        {
          point: "Zero net external torque acts (`Στ_ext = 0` on frictionless ice), so angular momentum `L = Iω` is conserved.",
          keywords: ["external torque", "zero", "iω"],
        },
        {
          point: "Pulling mass closer to axis reduces `I = Σmr²`; deduces `I₂ / I₁ = 0.40` (or `2/5`).",
          keywords: ["0.40", "0.4", "2/5"],
        },
        {
          point: "Shows via `E_k = L²/(2I)` or `{{1/2}}Iω²` that rotational kinetic energy increases by a factor of `2.5`.",
          keywords: ["increases", "2.5", "l²/(2i)", "l^2"],
        },
        {
          point: "Explains that the skater's muscles perform positive internal mechanical work pulling the arms radially inward.",
          keywords: ["internal", "work", "muscles", "inward"],
        },
        {
          point: "Identifies conversion from internal chemical / biochemical energy to additional rotational kinetic energy.",
          keywords: ["chemical", "biochemical", "stored"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States angular momentum is conserved or finds `I₂/I₁ = 0.40`, but wrongly claims rotational kinetic energy stays constant.",
          indicators: ["Assumes `E_k` is conserved alongside `L`"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly derives `I₂/I₁ = 0.40` and shows `E_k` grows by `2.5×`, with minor omissions on zero external torque or biochemical work source.",
          indicators: ["Quantifies `2.5×` KE rise; partial justification of internal work"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Rigorous synthesis linking zero external torque, `I₂/I₁ = 0.40`, `E_k = L²/(2I)` rising by `2.5×`, and internal muscular work converting chemical energy into rotational kinetic energy.",
          indicators: ["All 5 analytical and physical points rigorously connected"],
        },
      ],
      commonError: "Assuming rotational kinetic energy is conserved simply because no external torque acts — internal forces do work when the body's shape changes!",
    },

    // ===================== Q04: A.5 Relativistic Velocity Addition (HL) =====
    {
      id: "exam-p2-hl-q04",
      kind: "short",
      topicId: "a2-rotational-relativity",
      guideRef: "lorentz-spacetime-diagrams",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Apply relativistic velocity addition u = (u' + v) / (1 + u'v/c²)",
      question:
        "Spaceship A travels directly away from Earth to the right at `0.600c`. Spaceship A fires a probe forward (to the right) at `0.700c` relative to Spaceship A. Calculate the speed of the probe relative to Earth as a multiple of `c`, to 3 significant figures (enter just the decimal multiple of `c`, e.g. `0.850`).",
      answer: { type: "number", value: 0.915, tolerance: 0.005, display: "0.915" },
      traps: [
        {
          spec: { type: "number", value: 1.3, tolerance: 0.02 },
          feedback: "1.30c uses Galilean addition (0.600 + 0.700), which violates Einstein's postulate that nothing exceeds c; divide by (1 + u'v/c²).",
        },
        {
          spec: { type: "number", value: 0.172, tolerance: 0.01 },
          feedback: "You subtracted velocities instead of adding them — the probe is fired forward in the same direction as Spaceship A's motion.",
        },
      ],
      hints: [
        "Use the relativistic velocity addition formula for motion in the same direction: `u = (u' + v) / (1 + u'v/c²)`.",
        "Substitute `v = 0.600c` and `u' = 0.700c` and check that your answer is strictly less than `1.000`.",
      ],
      solution: [
        "Since the probe moves forward relative to Spaceship A, invert `u' = (u − v)/(1 − uv/c²)` to `u = (u' + v) / (1 + u'v/c²)`.",
        "`u / c = (0.700 + 0.600) / (1 + 0.700 × 0.600) = 1.300 / 1.420 = 0.9155 ≈ 0.915` (i.e. `0.915c`).",
      ],
      commonError: "Applying the subtraction sign `(u' − v)/(1 − u'v/c²)` instead of addition when transforming from the moving ship frame back to the Earth frame.",
    },

    // ===================== Q05: A.5 Minkowski Simultaneity (HL, 4m) =========
    {
      id: "exam-p2-hl-q05",
      kind: "written",
      topicId: "a2-rotational-relativity",
      guideRef: "lorentz-spacetime-diagrams",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 4,
      strategy: "Use tilted x' line of simultaneity ct = (v/c)x to order events in frame S",
      diagram: SVG_MINKOWSKI,
      question:
        "Two flashbulbs at the rear and front ends of a relativistic train moving in the `+x` direction emit light flashes simultaneously in the train's rest frame `S'` (`t' = 0`), represented by events `E_R` and `E_F` on the Minkowski spacetime diagram above. Explain using the diagram why an observer on the stationary platform (`S`) does not judge the two flashes to be simultaneous, and deduce which flash occurs first in the platform frame.",
      hints: [
        "In frame `S`, which geometric lines represent events occurring at the same time `t`?",
        "In frame `S'`, why is the `x'` axis (`t' = 0`) tilted upward toward the 45° light cone?",
        "Project `E_R` and `E_F` horizontally onto the vertical `ct` axis to compare `ct_R` and `ct_F`.",
      ],
      modelAnswer:
        "In the platform frame `S`, the moving train's time axis `ct'` tilts toward the `45°` light cone with slope `c/v`, and to keep the speed of light invariant along `ct = x`, the train's space axis `x'` (line of constant `t' = 0`) tilts symmetrically upward with slope `v/c` (`ct = (v/c)x`). Events simultaneous in `S'` lie along the tilted `x'` axis, whereas events simultaneous in the platform frame `S` lie along horizontal lines of constant `ct`. Projecting `E_R` and `E_F` horizontally onto the vertical `ct` axis shows `ct_R < ct_F`, so the two flashes occur at different platform times. Therefore the rear flash `E_R` occurs strictly before the front flash `E_F` in the platform frame (consistent with light travelling at invariant speed `c` while the train midpoint moves away from the rear beam and toward the front beam).",
      markScheme: [
        {
          point: "Notes that the `x'` axis (line of simultaneity in `S'`) tilts upward toward the light cone with slope `v/c` (symmetrically with `ct'`).",
          keywords: ["tilts", "v/c", "symmetrically", "slope"],
        },
        {
          point: "Contrasts lines of simultaneity: horizontal lines (constant `ct`) in platform frame `S` vs tilted lines parallel to `x'` in frame `S'`.",
          keywords: ["horizontal", "constant ct", "parallel"],
        },
        {
          point: "Projects events onto the `ct` axis to show `ct_R < ct_F` (different `ct` coordinates, hence not simultaneous in `S`).",
          keywords: ["ct_r < ct_f", "different", "project"],
        },
        {
          point: "Concludes correctly that the rear flash (`E_R`) occurs first in the platform frame.",
          keywords: ["rear", "before", "first"],
        },
      ],
      commonError: "Claiming the *front* flash happens first because its `x`-coordinate is larger — higher `ct` means *later* in time, so the rear flash at lower `ct` happens *first*!",
    },

    // ===================== Q06: B.4 Carnot Heat Engine (HL) =================
    {
      id: "exam-p2-hl-q06",
      kind: "short",
      topicId: "b1-thermal-gases",
      guideRef: "thermodynamics-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert reservoir temperatures to Kelvin before η = 1 − T_C/T_H",
      question:
        "A reversible Carnot heat engine operates between a hot thermal reservoir at `527 °C` and a cold reservoir at `127 °C`. In each cycle, the engine absorbs `2.40 kJ` of thermal energy from the hot reservoir. Calculate the net mechanical work output per cycle, to 3 significant figures (in `kJ`).",
      answer: { type: "number", value: 1.2, tolerance: 0.02, display: "1.20 kJ" },
      traps: [
        {
          spec: { type: "number", value: 1.82, tolerance: 0.05 },
          feedback: "You substituted Celsius temperatures (127/527) instead of absolute Kelvin temperatures (400 K / 800 K).",
        },
      ],
      hints: [
        "Convert both temperatures to kelvin first: `T_H = 527 + 273 = 800 K`, `T_C = 127 + 273 = 400 K`.",
        "Calculate Carnot efficiency `η = 1 − T_C / T_H`, then multiply by `Q_H = 2.40 kJ`.",
      ],
      solution: [
        "Kelvin temperatures: `T_H = 527 + 273 = 800 K` and `T_C = 127 + 273 = 400 K`.",
        "Carnot efficiency: `η = 1 − (400 / 800) = 0.500` (`50.0%`).",
        "Net work per cycle: `W = η Q_H = 0.500 × 2.40 = 1.20 kJ`.",
      ],
      commonError: "Using Celsius in `1 − T_C / T_H` (`1 − 127/527 = 75.9%`), which massively overestimates efficiency.",
    },

    // ===================== Q07: B.4 First Law & p-V Cycle Analysis (HL, 5m) ==
    {
      id: "exam-p2-hl-q07",
      kind: "written",
      topicId: "b1-thermal-gases",
      guideRef: "thermodynamics-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 5,
      strategy: "Apply Q = ΔU + W process-by-process, interpret loop area, and use state-function property of S",
      diagram: SVG_PV_CYCLE,
      question:
        "A fixed amount of ideal monatomic gas undergoes the closed clockwise thermodynamic cycle `A → B → C → A` shown above, consisting of an adiabatic expansion `A → B`, an isobaric compression `B → C`, and an isovolumetric heating `C → A`. Using `Q = ΔU + W`, explain the signs (`+`, `−`, or `0`) of `Q`, `ΔU`, and `W` for each stage, state what the shaded enclosed area represents, and state the net change in entropy of the gas over one full cycle.",
      hints: [
        "Remember the sign convention: `W > 0` when the gas expands (`ΔV > 0`), and `ΔU ∝ ΔT` for an ideal gas.",
        "For `A → B` (adiabatic), `Q = 0`; use `0 = ΔU + W` to deduce the sign of `ΔU`.",
        "For `B → C` (constant `P`, shrinking `V`), check how both `W` and `T = PV/(nR)` change.",
        "Entropy `S` is a thermodynamic state function — what happens to any state function after returning to starting state `A`?",
      ],
      modelAnswer:
        "During adiabatic expansion `A → B`, no heat enters or leaves (`Q = 0`), volume increases so work done by the gas is positive (`W > 0`), and from `0 = ΔU + W` internal energy falls (`ΔU < 0`, gas cools). During isobaric compression `B → C`, volume shrinks so work is negative (`W < 0`, work done on gas), temperature falls at constant pressure (`T ∝ V`) so internal energy falls (`ΔU < 0`), and therefore heat is rejected (`Q = ΔU + W < 0`). During isovolumetric heating `C → A`, volume stays fixed so work is zero (`W = 0`), pressure and temperature rise so internal energy increases (`ΔU > 0`), and heat is absorbed (`Q = ΔU > 0`). The shaded area enclosed by the clockwise loop equals the net positive mechanical work output per cycle (`W_net = Q_net` since `ΔU_cycle = 0`). Because entropy is a state function and the gas returns to its exact initial macrostate `A`, the net entropy change of the gas over one complete cycle is strictly zero (`ΔS_gas = 0`).",
      markScheme: [
        {
          point: "Adiabatic `A → B`: `Q = 0`, `W > 0` (expansion), and `ΔU < 0` (temperature drops via `0 = ΔU + W`).",
          keywords: ["q = 0", "cools", "internal energy falls"],
        },
        {
          point: "Isobaric `B → C`: `W < 0` (compression), `ΔU < 0` (temperature drops at constant `P`), and `Q < 0` (heat rejected).",
          keywords: ["rejected", "w < 0", "work done on gas"],
        },
        {
          point: "Isovolumetric `C → A`: `W = 0` (fixed volume), `ΔU > 0` (temperature rises), and `Q > 0` (heat absorbed).",
          keywords: ["w = 0", "absorbed", "fixed"],
        },
        {
          point: "Identifies enclosed clockwise loop area as the net positive mechanical work done by the gas per cycle (`W_net`).",
          keywords: ["net positive", "work output", "w_net"],
        },
        {
          point: "States net entropy change of the gas over a full cycle is zero (`ΔS_gas = 0`) because entropy is a state function.",
          keywords: ["state function", "zero", "macrostate"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly signs `Q`, `ΔU`, `W` for only one stage, or confuses the entropy of the gas with the entropy of the universe.",
          indicators: ["Sign errors in adiabatic/isobaric stages or claims `ΔS_gas > 0`"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately analyses signs across all three stages and identifies the enclosed net-work area, with minor omission on the state-function entropy justification.",
          indicators: ["All three First Law stages solid; brief or missing `ΔS_gas = 0` reason"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, rigorous First and Second Law cycle analysis with all 9 signs justified, net-work area identified, and `ΔS_gas = 0` justified via state function.",
          indicators: ["Zero sign errors across `Q, ΔU, W` plus state-function entropy clarity"],
        },
      ],
      commonError: "Saying entropy of the *gas* increases over one complete cycle — total entropy of the *universe* increases, whereas the gas returns to state `A` so `ΔS_gas = 0`.",
    },

    // ===================== Q08: B.5 Maximum Power Transfer (SL core) ========
    {
      id: "exam-p2-hl-q08",
      kind: "short",
      topicId: "b2-circuits",
      guideRef: "emf-internal-resistance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply maximum power transfer condition R = r, giving P_max = ε²/(4r)",
      question:
        "A battery of EMF `9.0 V` and internal resistance `1.2 Ω` is connected to a variable external load resistor `R`. Calculate the maximum possible electrical power that can be dissipated in the external load resistor `R`, to 3 significant figures (in `W`).",
      answer: { type: "number", value: 16.9, tolerance: 0.15, display: "16.9 W" },
      traps: [
        {
          spec: { type: "number", value: 67.5, tolerance: 0.5 },
          feedback: "67.5 W is ε²/r (short-circuit internal power when R = 0); maximum power in the *external* load occurs at R = r, giving P_max = ε²/(4r).",
        },
      ],
      hints: [
        "Maximum power is transferred to an external load resistor when its resistance equals the internal resistance: `R = r = 1.2 Ω`.",
        "Find circuit current `I = ε / (2r)` and compute load power `P = I² R = ε² / (4r)`.",
      ],
      solution: [
        "Maximum power transfer occurs when `R = r = 1.2 Ω`.",
        "Circuit current: `I = 9.0 / (1.2 + 1.2) = 3.75 A`.",
        "Load power: `P_max = I² R = (3.75)² × 1.2 = 16.875 W ≈ 16.9 W` (or `ε² / (4r) = 81.0 / 4.8 = 16.9 W`).",
      ],
      commonError: "Computing `ε² / r = 67.5 W`, which is the short-circuit power dissipated entirely *inside* the battery when `R = 0`.",
    },

    // ===================== Q09: C.1 Quantitative SHM Total Energy (HL) ======
    {
      id: "exam-p2-hl-q09",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "shm-equations-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Find ω = 2π/T then substitute into E_T = ½ m ω² x₀²",
      question:
        "A `0.250 kg` block attached to a horizontal spring executes simple harmonic motion with amplitude `0.080 m` and period `0.500 s`. Calculate the total mechanical energy of the oscillating block–spring system, to 3 significant figures (in `J`).",
      answer: { type: "number", value: 0.126, tolerance: 0.002, display: "0.126 J" },
      traps: [
        {
          spec: { type: "number", value: 0.0101, tolerance: 0.0005 },
          feedback: "Remember to square ω in E_T = ½ m ω² x₀² — ω = 4π = 12.57 rad s⁻¹, so ω² = 157.9 rad² s⁻².",
        },
      ],
      hints: [
        "First find angular frequency `ω = 2π / T = 2π / 0.500 = 4π rad s⁻¹`.",
        "Substitute into `E_T = {{1/2}} m ω² x₀²`.",
      ],
      solution: [
        "Angular frequency: `ω = 2π / 0.500 = 4π = 12.57 rad s⁻¹`.",
        "Total energy: `E_T = {{1/2}}(0.250)(12.57)²(0.080)² = 0.1263 J ≈ 0.126 J`.",
      ],
      commonError: "Forgetting to square either `ω` or `x₀`, or using frequency `f = 2 Hz` instead of angular frequency `ω = 2πf`.",
    },

    // ===================== Q10: C.3 Double-Slit Missing Order (HL) ==========
    {
      id: "exam-p2-hl-q10",
      kind: "short",
      topicId: "c2-wave-phenomena",
      guideRef: "single-slit-grating-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Determine",
      strategy: "Match double-slit maximum d sin θ = nλ with single-slit first minimum b sin θ = λ",
      question:
        "Coherent laser light of wavelength `633 nm` illuminates a double slit where each individual slit has width `b = 0.040 mm` and the centre-to-centre slit separation is `d = 0.200 mm`. Determine the lowest positive double-slit interference order `n` that is completely missing due to modulation by the first single-slit diffraction minimum.",
      answer: { type: "number", value: 5, tolerance: 0, display: "5" },
      traps: [
        {
          spec: { type: "number", value: 4, tolerance: 0 },
          feedback: "There are 4 visible positive maxima (n = 1, 2, 3, 4) inside the central diffraction envelope, which means the missing order itself is n = d/b = 5.",
        },
      ],
      hints: [
        "Write the angular condition for the `n`th double-slit bright fringe: `d sin θ = nλ`.",
        "Write the angular condition for the 1st single-slit diffraction minimum: `b sin θ = λ`.",
        "Divide the two equations so `λ` and `sin θ` cancel cleanly.",
      ],
      solution: [
        "Double-slit bright maximum: `sin θ = nλ / d`. First single-slit minimum: `sin θ = λ / b`.",
        "A fringe is suppressed when both angles coincide: `nλ / d = λ / b` → `n = d / b = 0.200 / 0.040 = 5`.",
      ],
      commonError: "Answering `9` (total visible bright fringes inside the central diffraction envelope) or `4` instead of the missing order `n = d/b = 5`.",
    },

    // ===================== Q11: C.5 Quantitative Sound Doppler (HL) =========
    {
      id: "exam-p2-hl-q11",
      kind: "short",
      topicId: "c2-wave-phenomena",
      guideRef: "doppler-effect-sl-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply receding-source Doppler equation f' = f v / (v + u_s)",
      question:
        "An ambulance sounding a siren at `820 Hz` drives directly away from a stationary pedestrian at `26.0 m s⁻¹`. The speed of sound in air is `340 m s⁻¹`. Calculate the frequency heard by the pedestrian, to 3 significant figures (in `Hz`).",
      answer: { type: "number", value: 762, tolerance: 3, display: "762 Hz" },
      traps: [
        {
          spec: { type: "number", value: 888, tolerance: 4 },
          feedback: "888 Hz uses (v − u_s), which is for an approaching source; a receding source stretches wavefronts and lowers the observed frequency.",
        },
        {
          spec: { type: "number", value: 757, tolerance: 3 },
          feedback: "757 Hz uses the moving-observer formula f(v − u_o)/v instead of the moving-source formula f v / (v + u_s).",
        },
      ],
      hints: [
        "Identify whether the *source* or the *observer* is moving, and whether observed frequency should rise or fall.",
        "For a receding source, use `f' = f v / (v + u_s)` so that the denominator is larger and `f' < f`.",
      ],
      solution: [
        "Since the source recedes from a stationary observer, `f' = f v / (v + u_s)`.",
        "`f' = 820 × (340 / (340 + 26.0)) = 278800 / 366 = 761.7 Hz ≈ 762 Hz`.",
      ],
      commonError: "Swapping the moving-source formula `f v / (v ± u_s)` with the moving-observer formula `f (v ∓ u_o) / v`.",
    },

    // ===================== Q12: D.1 Escape Speed from Mars (HL) =============
    {
      id: "exam-p2-hl-q12",
      kind: "short",
      topicId: "d1-fields-motion",
      guideRef: "gravitational-electric-potentials-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Set total energy at surface to zero: ½mv_esc² − GMm/R = 0",
      question:
        "Mars has mass `M = 6.42 × 10²³ kg` and radius `R = 3.39 × 10⁶ m` (take `G = 6.67 × 10⁻¹¹ N m² kg⁻²`). Calculate the escape speed from the surface of Mars, to 3 significant figures (in `m s⁻¹`).",
      answer: { type: "number", value: 5030, tolerance: 25, display: "5030 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 3550, tolerance: 25 },
          feedback: "3550 m s⁻¹ is the circular orbital speed √(GM/R); escape speed includes a factor of 2 inside the root: √(2GM/R).",
        },
      ],
      hints: [
        "Escape to infinity with zero residual kinetic energy requires `{{1/2}} m v_esc² − GMm/R = 0`.",
        "Solve `v_esc = {{sqrt(2GM / R)}}`.",
      ],
      solution: [
        "From energy conservation: `v_esc = {{sqrt(2GM / R)}}`.",
        "`v_esc = {{sqrt(2 * 6.67 * 10^(-11) * 6.42 * 10^23 / (3.39 * 10^6))}} = {{sqrt(2.526 * 10^7)}} = 5026 m s⁻¹ ≈ 5030 m s⁻¹`.",
      ],
      commonError: "Omitting the factor of `2` inside the square root, giving surface orbital speed instead of escape speed.",
    },

    // ===================== Q13: D.1 Orbital Energy & Atmospheric Drag (HL, 5m) ==
    {
      id: "exam-p2-hl-q13",
      kind: "written",
      topicId: "d1-fields-motion",
      guideRef: "gravitational-electric-potentials-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Derive",
      marks: 5,
      strategy: "Equate centripetal & gravitational force → derive E_k, E_p, E_T → explain orbital decay paradox",
      question:
        "A spacecraft of mass `m` moves in a circular orbit of radius `r` around a planet of mass `M`. Derive expressions for its kinetic energy `E_k`, gravitational potential energy `E_p`, and total mechanical energy `E_T` in terms of `G`, `M`, `m`, and `r`. Then explain the apparent paradox of why weak atmospheric drag causes the spacecraft's orbital speed to *increase* as its orbit decays.",
      hints: [
        "Start from Newton's second law for circular orbit: `mv²/r = GMm/r²`, then multiply both sides by `{{1/2}}r` to get `E_k` directly.",
        "Combine `E_k = +GMm/(2r)` with gravitational potential energy `E_p = −GMm/r` (zero at infinity).",
        "If drag removes total energy `E_T` (making `E_T = −GMm/(2r)` more negative), what must happen to `r`, `E_p`, and `E_k = +GMm/(2r)`?",
      ],
      modelAnswer:
        "Equating gravitational attraction to centripetal force gives `mv²/r = GMm/r²`, so `mv² = GMm/r`. Multiplying by `{{1/2}}` yields kinetic energy `E_k = +GMm/(2r)`. With zero potential defined at infinity, gravitational potential energy is `E_p = −GMm/r`. Summing both terms gives total mechanical energy `E_T = E_k + E_p = GMm/(2r) − GMm/r = −GMm/(2r)`. Weak atmospheric drag does negative work, dissipating thermal energy and making total energy `E_T` more negative, which forces the orbital radius `r` to shrink. As `r` decreases, gravitational potential energy drops twice as much as total energy drops: half of the released gravitational potential energy heats the atmosphere while the remaining half converts into extra kinetic energy (`E_k = +GMm/(2r)` rises), accelerating the spacecraft to a faster orbital speed `v = {{sqrt(GM/r)}}`.",
      markScheme: [
        {
          point: "Equates centripetal and gravitational forces (`mv²/r = GMm/r²`) to derive `E_k = +GMm/(2r)`.",
          keywords: ["gm", "2r", "mv²/r", "centripetal"],
        },
        {
          point: "States gravitational potential energy `E_p = −GMm/r` (with zero at infinity).",
          keywords: ["−gmm/r", "-gmm/r", "infinity"],
        },
        {
          point: "Combines `E_k + E_p` to derive total energy `E_T = −GMm/(2r)`.",
          keywords: ["−gmm/(2r)", "-gmm/(2r)", "summing"],
        },
        {
          point: "Explains that drag removes total energy (making `E_T` more negative), so orbital radius `r` decreases.",
          keywords: ["more negative", "shrink", "radius", "decreases"],
        },
        {
          point: "Resolves paradox: falling to smaller `r` releases twice as much gravitational potential energy as is lost to heat, so half goes into raising `E_k = +GMm/(2r)` and speed `v`.",
          keywords: ["half", "heat", "faster", "extra kinetic"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Quotes `E_p` or `E_T` from the Data Booklet without deriving `E_k` from `mv²/r = GMm/r²`, or cannot resolve why speed rises under drag.",
          indicators: ["Missing force-balance derivation or confuses sign of `E_T`"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly derives `E_k`, `E_p`, and `E_T = −GMm/(2r)` and notes `r` decreases, with partial explanation of how gravitational PE feeds both heat and kinetic energy.",
          indicators: ["Clean derivation; brief or qualitative resolution of the drag paradox"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete step-by-step derivation from Newton's laws plus a crystal-clear energy-partition explanation of why losing total energy lowers `r` and boosts orbital speed.",
          indicators: ["Explicit `mv²/r = GMm/r²` start and 50/50 split of lost `E_p` between thermal dissipation and `ΔE_k`"],
        },
      ],
      commonError: "Writing `E_T = +GMm/(2r)` (missing the minus sign for a bound orbit) or concluding that a more negative `E_T` means a *larger* radius `r`.",
    },

    // ===================== Q14: D.4 Motional EMF & Magnetic Braking (HL) ====
    {
      id: "exam-p2-hl-q14",
      kind: "short",
      topicId: "d2-induction",
      guideRef: "motional-emf",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Find ε = BvL, induced current I = ε/R, then braking force F = BIL",
      question:
        "A straight metal rod of length `0.40 m` slides at a constant speed of `5.0 m s⁻¹` along two parallel frictionless horizontal rails joined by a `2.5 Ω` resistor. A uniform vertical magnetic field of `0.60 T` acts perpendicular to the plane of the rails. Calculate the horizontal applied force needed to keep the rod moving at constant speed, to 3 significant figures (in `N`).",
      answer: { type: "number", value: 0.115, tolerance: 0.002, display: "0.115 N" },
      traps: [
        {
          spec: { type: "number", value: 1.2, tolerance: 0.02 },
          feedback: "1.20 V is the induced motional EMF ε = BvL; next find induced current I = ε/R and magnetic braking force F = BIL.",
        },
        {
          spec: { type: "number", value: 0.576, tolerance: 0.01 },
          feedback: "0.576 W is the electrical power ε²/R; divide power by speed v = 5.0 m s⁻¹ to find the applied force F = P/v.",
        },
      ],
      hints: [
        "Calculate the motional EMF induced across the moving rod: `ε = BvL`.",
        "Find the induced current `I = ε / R` flowing through the closed loop.",
        "Calculate the opposing magnetic braking force `F = BIL` (or `F = B²L²v / R`) that the applied force must balance.",
      ],
      solution: [
        "Induced EMF: `ε = BvL = 0.60 × 5.0 × 0.40 = 1.20 V`.",
        "Induced current: `I = ε / R = 1.20 / 2.5 = 0.48 A`.",
        "Applied force balancing magnetic braking: `F = BIL = 0.60 × 0.48 × 0.40 = 0.1152 N ≈ 0.115 N`.",
      ],
      commonError: "Stopping after calculating EMF (`1.20 V`) or power (`0.576 W`) instead of solving for the braking force `F = B²L²v/R`.",
    },

    // ===================== Q15: D.4 Magnet Dropped Through Copper Tube (HL, 5m) ==
    {
      id: "exam-p2-hl-q15",
      kind: "written",
      topicId: "d2-induction",
      guideRef: "faraday-lenz-laws",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 5,
      strategy: "Changing flux → Faraday eddy currents → Lenz opposing poles/braking → balance mg → GPE to Joule heat",
      question:
        "A strong cylindrical neodymium magnet is dropped from rest down the axis of a long, vertical, thick-walled non-magnetic copper pipe. Unlike an identical unmagnetised steel cylinder, the magnet falls very slowly and quickly reaches a low constant speed. Explain this behaviour using Faraday's law, Lenz's law, and conservation of energy.",
      hints: [
        "Explain what changes inside rings of the copper wall as the magnet passes through them.",
        "Invoke Faraday's law (`ε = −ΔΦ/Δt`) to explain the formation of circular eddy currents in the conducting copper.",
        "Invoke Lenz's law to explain why the magnetic field of those eddy currents pushes upward against the falling magnet.",
        "Explain why a constant terminal speed is reached and what energy transformation occurs.",
      ],
      modelAnswer:
        "As the magnet falls through the conducting copper pipe, the magnetic flux linked with circular horizontal rings of the copper wall changes continuously. By Faraday's law (`ε = −ΔΦ/Δt`), an EMF is induced around the pipe wall, driving circular eddy currents in the low-resistance copper. By Lenz's law, these eddy currents generate magnetic fields that oppose the motion causing the flux change—producing a repelling like pole below the magnet and an attracting opposite pole above it—resulting in a net upward magnetic braking force. Because induced EMF and braking force grow proportionally with speed (`ΔΦ/Δt ∝ v`), the upward magnetic force increases as the magnet accelerates until it equals the downward weight (`mg`), establishing a low constant terminal speed. In terms of energy conservation, gravitational potential energy lost by the descending magnet converts into electrical energy of the eddy currents and dissipates as Joule heating (`I²R`) warming the copper wall.",
      markScheme: [
        {
          point: "States that falling motion causes a continuous change in magnetic flux linked with sections of the copper wall.",
          keywords: ["flux", "changes", "rings"],
        },
        {
          point: "Applies Faraday's law (`ε = −ΔΦ/Δt`): induced EMF drives circular eddy currents in the conducting copper.",
          keywords: ["eddy currents", "emf", "faraday"],
        },
        {
          point: "Applies Lenz's law: eddy-current magnetic fields oppose the motion (repulsive below / attractive above), exerting an upward braking force.",
          keywords: ["oppose", "upward", "braking"],
        },
        {
          point: "Links faster speed to larger `ΔΦ/Δt` and larger braking force until upward force balances weight `mg`, yielding constant terminal speed.",
          keywords: ["balances", "weight", "terminal"],
        },
        {
          point: "Energy conservation: lost gravitational potential energy converts into electrical energy and dissipates as Joule thermal heating (`I²R`) in the copper.",
          keywords: ["gravitational potential", "joule", "heating", "thermal"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Attributes slow fall to magnetic attraction to copper (incorrect — copper is non-ferromagnetic) or states Lenz's law without eddy currents or force balance.",
          indicators: ["Fails to identify induced eddy currents or energy dissipation"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly connects changing flux, Faraday eddy currents, and Lenz's upward braking force, with minor omission on terminal-velocity balance or Joule heating.",
          indicators: ["Accurate Faraday/Lenz mechanism; partial energy or `F_mag = mg` link"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Authoritative HL explanation integrating changing flux, Faraday eddy currents, Lenz opposing poles, speed-dependent force balance (`F_mag = mg`), and GPE-to-Joule-heat energy conservation.",
          indicators: ["All 5 physical steps articulated cleanly with no ferromagnetic misconceptions"],
        },
      ],
      commonError: "Claiming copper is magnetically attracted to the magnet — copper is non-ferromagnetic, so magnetic forces arise solely from *induced eddy currents* while the magnet moves.",
    },

    // ===================== Q16: E.2 Photoelectric Stopping Potential (HL) ===
    {
      id: "exam-p2-hl-q16",
      kind: "short",
      topicId: "e1-atom-quantum",
      guideRef: "photoelectric-compton-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Compute photon energy hc/λ in eV, subtract work function Φ, then V_s = E_k,max / e",
      question:
        "Ultraviolet light of wavelength `200 nm` strikes a clean metal photocathode whose work function is `Φ = 4.20 eV`. Take `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `e = 1.60 × 10⁻¹⁹ C`. Calculate the stopping potential `V_s` required to halt the most energetic photoelectrons, to 3 significant figures (in `V`).",
      answer: { type: "number", value: 2.02, tolerance: 0.03, display: "2.02 V" },
      traps: [
        {
          spec: { type: "number", value: 6.22, tolerance: 0.05 },
          feedback: "6.22 V corresponds to the full photon energy (6.22 eV) without subtracting the metal's work function Φ = 4.20 eV.",
        },
      ],
      hints: [
        "Compute the incident photon energy `E = hc / λ` in joules, then divide by `e = 1.60 × 10⁻¹⁹` to express it in `eV`.",
        "Apply Einstein's photoelectric equation `E_k,max = hf − Φ` in `eV`.",
        "Remember that an electron with maximum kinetic energy `X eV` is halted by a stopping potential of `X V` (`eV_s = E_k,max`).",
      ],
      solution: [
        "Photon energy: `E = hc / λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (200 × 10⁻⁹) = 9.945 × 10⁻¹⁹ J`.",
        "In electronvolts: `E = (9.945 × 10⁻¹⁹) / (1.60 × 10⁻¹⁹) = 6.216 eV`.",
        "Maximum kinetic energy: `E_k,max = 6.216 − 4.20 = 2.016 eV` → stopping potential `V_s = 2.02 V`.",
      ],
      commonError: "Mixing joules and electronvolts inside `eV_s = hf − Φ` without converting both terms to the same energy unit.",
    },

    // ===================== Q17: E.2 de Broglie Wavelength of Accelerated e⁻ (HL) ==
    {
      id: "exam-p2-hl-q17",
      kind: "short",
      topicId: "e1-atom-quantum",
      guideRef: "wave-particle-duality-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Use E_k = eV, p = √(2m_e eV), and λ = h/p",
      question:
        "In a Davisson–Germer electron diffraction experiment, electrons are accelerated from rest through a potential difference of `54.0 V`. Take `h = 6.63 × 10⁻³⁴ J s`, `m_e = 9.11 × 10⁻³¹ kg`, and `e = 1.60 × 10⁻¹⁹ C`. Calculate the de Broglie wavelength of the electrons in nanometres (`nm`), to 3 significant figures.",
      answer: { type: "number", value: 0.167, tolerance: 0.003, display: "0.167 nm" },
      traps: [
        {
          spec: { type: "number", value: 1.67e-10, tolerance: 0.03e-10 },
          feedback: "1.67 × 10⁻¹⁰ m is right in metres — convert to nanometres (multiply by 10⁹) to get 0.167 nm.",
        },
      ],
      hints: [
        "Find the kinetic energy gained by each electron: `E_k = eV = (1.60 × 10⁻¹⁹)(54.0)`.",
        "Find momentum `p = {{sqrt(2 m_e e V)}}` and substitute into `λ = h / p`.",
        "Convert metres to nanometres (`1 m = 10⁹ nm`).",
      ],
      solution: [
        "Electron kinetic energy: `E_k = eV = 1.60 × 10⁻¹⁹ × 54.0 = 8.64 × 10⁻¹⁸ J`.",
        "Momentum: `p = {{sqrt(2 * 9.11 * 10^(-31) * 8.64 * 10^(-18))}} = 3.968 × 10⁻²⁴ kg m s⁻¹`.",
        "de Broglie wavelength: `λ = h / p = 6.63 × 10⁻³⁴ / (3.968 × 10⁻²⁴) = 1.671 × 10⁻¹⁰ m = 0.167 nm`.",
      ],
      commonError: "Forgetting the factor of `2` inside `p = √(2mE_k)` or using `λ = hc/E` (the massless photon equation!) for a massive electron.",
    },

    // ===================== Q18: E.2 Wave Theory Failures vs Photon Model (HL, 6m) ==
    {
      id: "exam-p2-hl-q18",
      kind: "written",
      topicId: "e1-atom-quantum",
      guideRef: "photoelectric-compton-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 6,
      strategy: "Contrast classical wave predictions against photon explanations across threshold, delay, E_k,max, current, Φ, and V_s–f graph",
      question:
        "Explain three experimental observations of the photoelectric effect that cannot be reconciled with classical wave theory of light, and show how Einstein's photon model quantitatively accounts for each observation, including the role of the work function `Φ` and Millikan's stopping-potential graph.",
      hints: [
        "Structure your response around the three classic discrepancies: (1) existence of threshold frequency `f₀`, (2) instantaneous emission even at dim intensity, and (3) `E_k,max` independent of intensity.",
        "For EACH discrepancy, explicitly state what classical wave theory predicted AND how one-to-one photon–electron energy delivery (`hf`) explains the actual data.",
        "Define work function `Φ` and explain what the gradient and intercept of `V_s` against `f` confirm.",
      ],
      modelAnswer:
        "First, experiments reveal a sharp threshold frequency `f₀` below which no electrons escape regardless of brightness; classical wave theory predicted any frequency should eject electrons if intensity is large enough, whereas Einstein's model treats light as discrete quanta of energy `hf` interacting one-to-one with electrons so liberation is impossible unless `hf ≥ Φ` (where work function `Φ` is the minimum energy required to free a surface electron). Second, emission begins instantaneously when `f ≥ f₀` even at ultra-low intensity; wave theory predicted a measurable time lag while continuous wave energy accumulated across the atom, whereas a single photon delivers its entire quantum `hf` immediately upon absorption. Third, maximum photoelectron kinetic energy `E_k,max` increases linearly with frequency and does not depend on intensity; wave theory predicted brighter light (larger electric field amplitude) would raise `E_k,max`, whereas `E_k,max = hf − Φ` depends solely on photon frequency `f` and `Φ`. Raising intensity at fixed `f ≥ f₀` simply increases the rate of incident photons per second, proportionally raising the photoelectric current without changing `E_k,max`. Finally, Millikan's linear plot of stopping potential `V_s = (h/e)f − Φ/e` against `f` yields the universal gradient `h/e` independent of the metal, quantitatively verifying the photon hypothesis.",
      markScheme: [
        {
          point: "Threshold frequency `f₀`: classical wave predicts any frequency works at high intensity; photon model requires a single photon with `hf ≥ Φ`.",
          keywords: ["threshold", "hf ≥ φ", "hf >= φ", "one-to-one"],
        },
        {
          point: "Instantaneous emission: classical wave predicts a time lag at low intensity; photon delivers discrete energy `hf` immediately upon absorption.",
          keywords: ["instantaneous", "time lag", "immediately"],
        },
        {
          point: "`E_k,max` independent of intensity: classical wave predicts larger amplitude/intensity boosts `E_k,max`; photon equation `E_k,max = hf − Φ` depends only on `f` and `Φ`.",
          keywords: ["independent of intensity", "hf − φ", "hf - φ", "amplitude"],
        },
        {
          point: "Defines work function `Φ` as the minimum energy needed to remove an electron from the metal surface.",
          keywords: ["minimum energy", "surface", "free"],
        },
        {
          point: "Explains that increasing intensity (at `f ≥ f₀`) increases incident photon flux per second, proportionally increasing photoelectric current only.",
          keywords: ["photons per second", "current", "flux"],
        },
        {
          point: "Links `V_s = (h/e)f − Φ/e`: Millikan's straight-line graph has universal gradient `h/e` independent of metal, verifying quantum theory.",
          keywords: ["h/e", "gradient", "universal"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Lists one or two photoelectric facts without contrasting classical wave predictions or connecting to `hf = Φ + E_k,max`.",
          indicators: ["Missing classical-vs-quantum contrast or confuses frequency and intensity"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately contrasts classical wave failures and photon explanations for at least two observations, with minor gaps on intensity-current role or Millikan's `h/e` slope.",
          indicators: ["Solid qualitative explanation of threshold, delay, and `E_k,max`"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Complete, rigorous HL synthesis contrasting all three classical failures against one-to-one photon absorption, defining `Φ`, explaining photocurrent scaling, and linking `V_s` vs `f` gradient `h/e`.",
          indicators: ["All 6 mark points addressed with exact IB terminology and mathematical precision"],
        },
      ],
      commonError: "Stating 'a photon has more energy when intensity increases' — higher intensity at fixed frequency means *more photons per second*, NOT higher energy per photon.",
    },

    // ===================== Q19: E.3 Exponential Decay Law (HL) ==============
    {
      id: "exam-p2-hl-q19",
      kind: "short",
      topicId: "e2-nuclear-stars",
      guideRef: "decay-law-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Find decay constant λ = ln 2 / T_½ then evaluate A = A₀ e^(−λt)",
      question:
        "A medical sample of iodine-131 has a half-life of `8.00 days` and an initial activity of `6.40 MBq`. Calculate the activity of the sample after `20.0 days`, to 3 significant figures (in `MBq`).",
      answer: { type: "number", value: 1.13, tolerance: 0.02, display: "1.13 MBq" },
      traps: [
        {
          spec: { type: "number", value: 1.6, tolerance: 0.05 },
          feedback: "1.60 MBq is the activity after 2.0 half-lives (16.0 days); 20.0 days is 2.5 half-lives, so divide once more by √2.",
        },
      ],
      hints: [
        "Find the decay constant `λ = ln(2) / 8.00 = 0.08664 day⁻¹` (or note `20.0 / 8.00 = 2.50` half-lives).",
        "Compute `A = A₀ e^(−λt) = 6.40 × 2^(−2.50)`.",
      ],
      solution: [
        "Decay constant: `λ = ln(2) / 8.00 = 0.08664 day⁻¹`.",
        "Activity after `20.0 days`: `A = 6.40 × e^(−0.08664 × 20.0) = 6.40 × 0.1768 = 1.13 MBq`.",
      ],
      commonError: "Interpolating linearly halfway between `2` half-lives (`1.60 MBq`) and `3` half-lives (`0.80 MBq`) to get `1.20 MBq` instead of using exponential decay (`1.13 MBq`).",
    },

    // ===================== Q20: E.3 Neutrino Evidence & ln A Graph (HL, 5m) ==
    {
      id: "exam-p2-hl-q20",
      kind: "written",
      topicId: "e2-nuclear-stars",
      guideRef: "decay-law-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 5,
      strategy: "Contrast 2-body discrete α spectrum with 3-body continuous β⁻ spectrum (neutrino), then linearize A = A₀ e^(−λt)",
      question:
        "Alpha decay from a given parent isotope yields alpha particles with discrete kinetic energies, whereas beta-minus (`β⁻`) decay from a given parent isotope emits electrons with a continuous spectrum of kinetic energies up to a maximum value `E_max`. Explain how this difference provided key evidence for the electron antineutrino, and derive how the decay constant `λ` is determined graphically from measurements of activity `A` over time `t`.",
      hints: [
        "In alpha decay (`X → Y + α`), how many product particles share the fixed decay energy and momentum?",
        "Why did a continuous range of electron energies (`0` to `E_max`) appear to violate conservation of energy if only two products existed?",
        "Explain how a third neutral, nearly massless particle resolves the missing energy.",
        "Take natural logarithms (`ln`) of `A = A₀ e^(−λt)` and identify the gradient.",
      ],
      modelAnswer:
        "Alpha decay is a two-body process (`X → Y + α`), so conservation of energy and linear momentum uniquely fixes the kinetic energy carried by the alpha particle and recoil daughter, yielding sharp discrete energy lines. If `β⁻` decay likewise produced only two bodies (daughter nucleus plus electron), every emitted electron would carry the single fixed maximum energy `E_max`; observing a continuous spectrum from zero up to `E_max` appeared to violate conservation of energy (as well as momentum and spin). Pauli resolved this by proposing a third, electrically neutral, virtually massless particle—the electron antineutrino (`ν̄_e`)—in a three-body decay (`n → p + e⁻ + ν̄_e`) so the available energy `E_max` is shared randomly in varying proportions between the electron and the antineutrino. To determine the decay constant graphically, take the natural logarithm of the exponential law `A = A₀ e^(−λt)`, giving `ln A = ln A₀ − λt`. Plotting `ln A` on the vertical axis against elapsed time `t` on the horizontal axis produces a straight line whose gradient equals `−λ` (so `λ = −gradient`).",
      markScheme: [
        {
          point: "Alpha decay is a two-body decay where energy and momentum conservation fix a unique kinetic energy for the alpha particle (discrete lines).",
          keywords: ["two-body", "conservation", "fixed", "recoil"],
        },
        {
          point: "A continuous electron energy spectrum below `E_max` would violate energy/momentum conservation in a two-body decay.",
          keywords: ["violate", "two bodies", "missing", "maximum"],
        },
        {
          point: "A third neutral, nearly massless particle (electron antineutrino `ν̄_e`) shares the decay energy `E_max` randomly with the electron in a three-body decay.",
          keywords: ["third", "three-body", "shared", "neutral"],
        },
        {
          point: "Takes natural logarithm of `A = A₀ e^(−λt)` to derive `ln A = ln A₀ − λt`.",
          keywords: ["ln a", "natural logarithm", "e^(−λt)", "e^(-λt)"],
        },
        {
          point: "Plots `ln A` against `t` to obtain a straight line whose gradient equals `−λ` (`λ = −gradient`).",
          keywords: ["straight line", "gradient", "−λ", "-λ"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States that the antineutrino carries away missing energy or mentions plotting `ln A`, without contrasting two-body vs three-body conservation or showing the `ln` derivation.",
          indicators: ["Missing two-body α justification or lacks `ln A = ln A₀ − λt` step"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains the continuous β⁻ energy-sharing argument accurately and derives `ln A = ln A₀ − λt`, with minor omission on the two-body α contrast or negative gradient sign.",
          indicators: ["Solid neutrino evidence and logarithmic plot; minor precision gap"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Rigorous HL analysis contrasting two-body discrete α decay with three-body energy sharing by the neutral antineutrino, plus full logarithmic linearization yielding `gradient = −λ`.",
          indicators: ["All 5 analytical and mathematical points cleanly demonstrated"],
        },
      ],
      commonError: "Forgetting the minus sign in `gradient = −λ`, or claiming `β⁻` emits a *neutrino* rather than an *antineutrino* (`β⁻` emits `ν̄_e`, whereas `β⁺` emits `ν_e`).",
    },
  ],
};
