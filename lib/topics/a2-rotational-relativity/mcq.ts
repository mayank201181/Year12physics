import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Rigid Body Mechanics (A.4)
  // =========================================================================
  {
    id: "a2-rotational-relativity-m1",
    title: "Paper 1A · Rigid Body Mechanics (A.4)",
    level: "HL",
    questions: [
      {
        id: "a2-rotational-relativity-m1-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Lever-arm torque τ = Fr sin θ",
        question:
          "A force of {{25 N}} is applied at a distance of {{0.40 m}} from a pivot at an angle of {{30°}} to the lever arm. What is the magnitude of the torque about the pivot?",
        options: ["5.0 N m", "8.7 N m", "10 N m", "20 N m"],
        answerIndex: 0,
        hints: [
          "Torque uses only the component of force perpendicular to the lever arm.",
          "Substitute into {{τ = F r sin θ}} with {{θ = 30°}}.",
        ],
        explanation:
          "Using {{τ = F r sin θ = 25 * 0.40 * sin(30°) = 10 * 0.50 = 5.0 N m}}. Using {{cos(30°)}} gives {{8.7 N m}} (the radial component that produces no rotation), while omitting {{sin(30°)}} gives {{10 N m}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "torque-rotational-kinematics",
        strategy: "Definition of a couple",
        question: "Which pair of forces constitutes a pure couple acting on a rigid body?",
        options: [
          "Two equal, opposite forces acting along the exact same line of action",
          "Two equal, opposite, parallel forces acting along different lines of action",
          "Two equal, parallel forces acting in the same direction at opposite ends",
          "Two unequal, opposite forces acting perpendicular to the same pivot axis",
        ],
        answerIndex: 1,
        hints: [
          "A couple must produce zero net translational force ({{ΣF = 0}}) yet a non-zero net torque.",
          "Think of both hands turning a steering wheel in opposite tangential directions.",
        ],
        explanation:
          "A pure couple consists of two forces equal in magnitude, opposite in direction ({{ΣF = 0}}), and separated by a non-zero perpendicular distance {{d}} so their torques add to {{Fd}}. Collinear opposite forces produce zero torque, while same-direction forces give non-zero net force.",
      },
      {
        id: "a2-rotational-relativity-m1-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Couple torque τ = Fd",
        question:
          "A steering wheel of diameter {{0.40 m}} is turned by a couple of two tangential {{15 N}} forces applied at opposite ends of a diameter. What is the magnitude of the net torque about any axis perpendicular to the wheel?",
        options: ["0 N m", "3.0 N m", "6.0 N m", "12 N m"],
        answerIndex: 2,
        hints: [
          "What is the perpendicular separation {{d}} between the two parallel lines of action?",
          "Apply {{τ = F d}}, or sum the two individual torques {{F r + F r}} about the centre.",
        ],
        explanation:
          "The perpendicular separation between the two opposite tangential forces is the full diameter {{d = 0.40 m}}, so {{τ = F d = 15 * 0.40 = 6.0 N m}}. Using the radius {{0.20 m}} gives {{3.0 N m}}, which counts only one of the two forces.",
      },
      {
        id: "a2-rotational-relativity-m1-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Unit conversion to rad s⁻¹ + rotational SUVAT",
        question:
          "A motor shaft accelerates uniformly from {{120 rev min^(-1)}} to {{480 rev min^(-1)}} in {{3.0 s}}. What is its angular acceleration?",
        options: ["{{2π rad s^(-2)}}", "{{6π rad s^(-2)}}", "{{8π rad s^(-2)}}", "{{4π rad s^(-2)}}"],
        answerIndex: 3,
        hints: [
          "Convert both angular speeds from rev min⁻¹ into rad s⁻¹ using {{ω = (2π * rpm)/60}}.",
          "Compute {{α = (ω_f - ω_i) / t}}.",
        ],
        explanation:
          "Converting to rad s⁻¹ gives {{ω_i = 120 * 2π/60 = 4π rad s^(-1)}} and {{ω_f = 480 * 2π/60 = 16π rad s^(-1)}}. Therefore {{α = (16π - 4π) / 3.0 = 4π rad s^(-2)}}. Forgetting the factor of {{2}} in {{2π}} gives {{2π rad s^(-2)}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Rotational SUVAT",
        question:
          "A flywheel initially at rest accelerates uniformly at {{4.0 rad s^(-2)}}. Through what angular displacement does it turn during the first {{5.0 s}}?",
        options: ["50 rad", "20 rad", "25 rad", "100 rad"],
        answerIndex: 0,
        hints: [
          "Identify the knowns: {{ω_i = 0}}, {{α = 4.0 rad s^(-2)}}, {{t = 5.0 s}}.",
          "Use {{Δθ = ω_i t + (1/2)αt^2}}.",
        ],
        explanation:
          "With {{ω_i = 0}}, {{Δθ = (1/2)αt^2 = 0.5 * 4.0 * 5.0^2 = 50 rad}}. Computing {{αt = 20}} gives the final angular velocity (in rad s⁻¹), while omitting the factor of {{1/2}} gives {{100 rad}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "torque-rotational-kinematics",
        strategy: "Rotational equilibrium Στ = 0",
        question:
          "A uniform metre rule of mass {{0.20 kg}} is pivoted at the {{25 cm}} mark. A hanging mass {{m}} is suspended from the {{5 cm}} mark so that the rule balances horizontally. What is the value of {{m}}?",
        options: ["0.16 kg", "0.25 kg", "0.40 kg", "0.50 kg"],
        answerIndex: 1,
        hints: [
          "Where does the weight of a uniform metre rule act?",
          "Measure each lever arm from the pivot at {{25 cm}}: the rule's centre of mass is at {{50 cm}} ({{25 cm}} to the right), while {{m}} is at {{5 cm}} ({{20 cm}} to the left).",
        ],
        explanation:
          "Taking moments about the {{25 cm}} pivot: {{m g (20 cm) = (0.20 kg) g (25 cm)}}, so {{m = 0.20 * 25 / 20 = 0.25 kg}}. Swapping the two lever arms yields the tempting distractor {{0.16 kg}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Discrete moment of inertia I = Σ m r²",
        question:
          "Three point masses, each of mass {{2.0 kg}}, are fixed to a light rod at distances {{0.50 m}}, {{1.0 m}}, and {{2.0 m}} from a perpendicular rotation axis. What is the total moment of inertia about this axis?",
        options: ["5.25 kg m²", "7.0 kg m²", "10.5 kg m²", "24.5 kg m²"],
        answerIndex: 2,
        hints: [
          "Remember that each distance {{r_i}} must be **squared** before summing.",
          "Evaluate {{I = m(r_1^2 + r_2^2 + r_3^2)}}.",
        ],
        explanation:
          "{{I = Σ m_i r_i^2 = 2.0(0.50^2 + 1.0^2 + 2.0^2) = 2.0(0.25 + 1.0 + 4.0) = 10.5 kg m^2}}. Forgetting to square the radii gives {{7.0 kg m^2}}, and summing the radii before squaring gives {{24.5 kg m^2}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Newton's second law for rotation τ = Iα",
        question:
          "A uniform solid disc ({{I = (1/2)mR^2}}) of mass {{4.0 kg}} and radius {{0.50 m}} rotates freely on a central axle. A constant tangential force of {{6.0 N}} is applied to its rim. What is its angular acceleration?",
        options: ["1.5 rad s⁻²", "3.0 rad s⁻²", "12 rad s⁻²", "6.0 rad s⁻²"],
        answerIndex: 3,
        hints: [
          "Calculate the moment of inertia {{I = (1/2)mR^2}} and the applied torque {{τ = F R}}.",
          "Apply {{α = τ / I}}.",
        ],
        explanation:
          "{{I = 0.5 * 4.0 * 0.50^2 = 0.50 kg m^2}} and {{τ = F R = 6.0 * 0.50 = 3.0 N m}}, so {{α = τ / I = 3.0 / 0.50 = 6.0 rad s^(-2)}}. Using {{I = mR^2}} halves the answer to {{3.0 rad s^(-2)}}, while dividing {{F}} directly by {{I}} gives {{12 rad s^(-2)}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Angular impulse ΔL = τΔt",
        question:
          "A constant net torque of {{8.0 N m}} acts for {{2.5 s}} on a flywheel initially at rest with moment of inertia {{4.0 kg m^2}}. What is the flywheel's final angular velocity?",
        options: ["5.0 rad s⁻¹", "2.0 rad s⁻¹", "10 rad s⁻¹", "20 rad s⁻¹"],
        answerIndex: 0,
        hints: [
          "Relate torque and time to angular momentum change: {{ΔL = τ Δt = I ω_f}}.",
          "Equivalently, find {{α = τ / I}} first and then {{ω_f = α t}}.",
        ],
        explanation:
          "Angular impulse is {{ΔL = τ Δt = 8.0 * 2.5 = 20 N m s}}. Since {{L = Iω}}, {{ω_f = 20 / 4.0 = 5.0 rad s^(-1)}}. Stopping at {{τ/I}} gives the angular acceleration {{2.0 rad s^(-2)}}, while forgetting to divide by {{I}} gives {{20}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Conservation of L and E_k = L²/(2I)",
        question:
          "An isolated spinning ice skater halves her moment of inertia by pulling her arms tightly inward. Assuming negligible external torque, how do her angular momentum {{L}} and rotational kinetic energy {{E_k}} change?",
        options: [
          "{{L}} doubles and {{E_k}} stays unchanged",
          "{{L}} stays unchanged and {{E_k}} doubles",
          "{{L}} stays unchanged and {{E_k}} quadruples",
          "{{L}} halves and {{E_k}} stays unchanged",
        ],
        answerIndex: 1,
        hints: [
          "When net external torque is zero, what happens to total angular momentum {{L}}?",
          "Express rotational kinetic energy in terms of {{L}} and {{I}}: {{E_k = L^2 / (2I)}}.",
        ],
        explanation:
          "Because {{Στ_(ext) = 0}}, angular momentum {{L = Iω}} stays **unchanged** (so {{ω}} doubles when {{I}} halves). From {{E_k = L^2 / (2I)}}, halving {{I}} at constant {{L}} **doubles** {{E_k}}—supplied by internal muscular work. Thinking {{E_k}} scales as {{ω^2}} without noticing {{I}} halved leads to the quadrupling distractor.",
      },
      {
        id: "a2-rotational-relativity-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Inelastic rotational collision",
        question:
          "Two identical uniform discs, each of moment of inertia {{I}}, share a frictionless vertical axle. The lower disc spins at {{ω}} while the upper disc is initially at rest. The upper disc drops onto the lower disc until both rotate together. What fraction of the initial rotational kinetic energy is dissipated?",
        options: [
          "Zero (total kinetic energy is conserved)",
          "One-quarter of the initial kinetic energy",
          "One-half of the initial kinetic energy",
          "Three-quarters of the initial kinetic energy",
        ],
        answerIndex: 2,
        hints: [
          "Conserve angular momentum to find the common final angular velocity {{ω_f}}.",
          "Compare {{E_(kf) = (1/2)(2I)ω_f^2}} with {{E_(ki) = (1/2)Iω^2}}.",
        ],
        explanation:
          "Conservation of angular momentum gives {{Iω = (2I)ω_f}} ⇒ {{ω_f = ω/2}}. Initial kinetic energy is {{E_(ki) = (1/2)Iω^2}}, and final kinetic energy is {{E_(kf) = (1/2)(2I)(ω/2)^2 = (1/4)Iω^2 = (1/2)E_(ki)}}. Thus exactly **one-half** is dissipated as heat by internal friction.",
      },
      {
        id: "a2-rotational-relativity-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Rolling race shape factor c = I/(mR²)",
        question:
          "A solid sphere ({{I = (2/5)mR^2}}), a solid cylinder ({{I = (1/2)mR^2}}), a thin hollow sphere ({{I = (2/3)mR^2}}), and a thin hoop ({{I = mR^2}}) roll without slipping from rest down the same incline. Which object reaches the bottom with the greatest translational speed?",
        options: [
          "The thin hoop, because its mass sits furthest from the axis",
          "The hollow sphere, because its cavity balances torque and mass",
          "The solid cylinder, because it has the widest line of contact",
          "The solid sphere, because it has the smallest {{I/(mR^2)}} ratio",
        ],
        answerIndex: 3,
        hints: [
          "Use energy conservation {{mgh = (1/2)mv^2 (1 + I/(mR^2))}}.",
          "Which body locks the **smallest** fraction of {{mgh}} into rotational kinetic energy?",
        ],
        explanation:
          "Since {{v = sqrt(2gh / (1 + c))}} where {{c = I/(mR^2)}}, the smallest {{c}} produces the greatest speed {{v}}. Because {{2/5 < 1/2 < 2/3 < 1}}, the **solid sphere** allocates the highest fraction ({{5/7 ≈ 71.4%}}) to translational kinetic energy and wins.",
      },
      {
        id: "a2-rotational-relativity-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Energy partition in rolling without slipping",
        question:
          "A uniform solid cylinder ({{I = (1/2)mR^2}}) rolls without slipping across a horizontal floor. What is the ratio of its rotational kinetic energy to its **total** kinetic energy?",
        options: ["{{1/3}}", "{{1/2}}", "{{2/3}}", "{{1/4}}"],
        answerIndex: 0,
        hints: [
          "Express {{E_(k,rot) = (1/2)Iω^2}} in terms of {{mv^2}} using {{ω = v/R}}.",
          "Divide {{E_(k,rot)}} by the **sum** {{E_(k,trans) + E_(k,rot)}}, not by {{E_(k,trans)}} alone.",
        ],
        explanation:
          "{{E_(k,trans) = (1/2)mv^2}} and {{E_(k,rot) = (1/2)((1/2)mR^2)(v/R)^2 = (1/4)mv^2}}. Total kinetic energy is {{(3/4)mv^2}}, so {{E_(k,rot) / E_(k,total) = (1/4) / (3/4) = 1/3}}. The distractor {{1/2}} is the ratio of rotational to translational KE, while {{2/3}} is translational to total KE.",
      },
      {
        id: "a2-rotational-relativity-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Coupled translational and rotational Newton's 2nd law",
        question:
          "A uniform solid cylinder ({{I = (1/2)mR^2}}) rolls without slipping down a plane inclined at angle {{θ}} to the horizontal. What is the linear acceleration {{a}} of its centre of mass down the plane?",
        options: ["{{(1/2) g sin θ}}", "{{(2/3) g sin θ}}", "{{(3/4) g sin θ}}", "{{g sin θ}}"],
        answerIndex: 1,
        hints: [
          "Write Newton's 2nd law down the slope: {{mg sin θ - f_s = ma}}.",
          "Write the rotational law about the centre of mass: {{f_s R = Iα = (1/2)mR^2 (a/R)}}, then eliminate {{f_s}}.",
        ],
        explanation:
          "From {{f_s R = (1/2)mR^2 (a/R)}} we get {{f_s = (1/2)ma}}. Substituting into {{mg sin θ - f_s = ma}} gives {{mg sin θ = (3/2)ma}}, hence {{a = (2/3) g sin θ}}. A frictionless sliding block would accelerate at {{g sin θ}}, while a thin hoop accelerates at {{(1/2) g sin θ}}.",
      },
      {
        id: "a2-rotational-relativity-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Rotational power P = τω",
        question:
          "An electric motor applies a constant torque of {{20 N m}} to a drive shaft spinning at a steady angular speed of {{15 rad s^(-1)}}. What mechanical power is delivered to the shaft?",
        options: ["150 W", "600 W", "300 W", "1880 W"],
        answerIndex: 2,
        hints: [
          "Rotational work is {{W = τ Δθ}}; divide by time {{Δt}} to get rotational power.",
          "Evaluate {{P = τ ω}} directly since {{ω}} is already in rad s⁻¹.",
        ],
        explanation:
          "Rotational mechanical power is {{P = ΔW / Δt = τ(Δθ/Δt) = τω = 20 * 15 = 300 W}}. Multiplying by {{2π}} (mistakenly treating rad s⁻¹ as rev s⁻¹) gives {{1885 W}}, while inserting a factor of {{1/2}} gives {{150 W}}.",
      },
    ],
  },

  // =========================================================================
  // PAPER M2: Special Relativity & Spacetime (A.5)
  // =========================================================================
  {
    id: "a2-rotational-relativity-m2",
    title: "Paper 1A · Special Relativity & Spacetime (A.5)",
    level: "HL",
    questions: [
      {
        id: "a2-rotational-relativity-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "State",
        guideRef: "galilean-special-relativity",
        strategy: "Einstein's two postulates",
        question:
          "Which statement accurately expresses both of Einstein's postulates of special relativity?",
        options: [
          "The laws of physics are identical in all inertial frames, and the vacuum speed of light is the same for all inertial observers.",
          "The laws of physics hold identically at rest, and the vacuum speed of light depends only on the velocity of the light source.",
          "Time intervals are identical in all inertial frames, and light travels at speed c only relative to a stationary reference medium.",
          "The laws of physics are identical in all accelerating frames, and the speed of light increases when moving toward the source.",
        ],
        answerIndex: 0,
        hints: [
          "Special relativity applies specifically to **inertial** (non-accelerating) reference frames.",
          "Does the speed of light depend on source motion or observer motion?",
        ],
        explanation:
          "Einstein's two postulates state that (1) physical laws take the same form in all **inertial** reference frames, and (2) the speed of light in vacuum, {{c}}, is invariant for all inertial observers regardless of source or observer velocity. Accelerating frames belong to general relativity.",
      },
      {
        id: "a2-rotational-relativity-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Lorentz factor γ = 1/√(1 − v²/c²)",
        question:
          "A spacecraft moves past Earth at {{0.80c}}. What is its Lorentz factor {{γ}} (to 3 significant figures)?",
        options: ["0.60", "1.67", "1.25", "2.78"],
        answerIndex: 1,
        hints: [
          "Square {{v/c = 0.80}} first, then subtract from {{1}}.",
          "Take the square root and then the reciprocal: {{γ = 1 / sqrt(1 - 0.80^2)}}.",
        ],
        explanation:
          "{{γ = 1 / sqrt(1 - 0.64) = 1 / sqrt(0.36) = 1 / 0.60 = 5/3 ≈ 1.67}}. Forgetting the square root yields {{2.78}}, forgetting to invert gives {{0.60}}, and {{1.25}} corresponds to {{v = 0.60c}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Identify proper time Δt₀ vs dilated time Δt",
        question:
          "A beacon mounted on a spaceship flashes twice, {{4.0 s}} apart according to a clock on the ship. The ship passes a space station at {{0.60c}} ({{γ = 1.25}}). What time interval between the flashes is measured by observers on the space station?",
        options: ["3.2 s", "4.0 s", "5.0 s", "6.25 s"],
        answerIndex: 2,
        hints: [
          "Which observer sees both flashes happen at the **same spatial position**?",
          "The ship clock measures proper time {{Δt_0 = 4.0 s}}; multiply by {{γ}} for the station frame.",
        ],
        explanation:
          "Both flashes occur at the same point on the ship, so {{Δt_0 = 4.0 s}} is the proper time. Station observers measure a dilated interval {{Δt = γ Δt_0 = 1.25 * 4.0 = 5.0 s}}. Dividing by {{γ}} incorrectly yields {{3.2 s}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Length contraction acts only parallel to velocity",
        question:
          "A cube has proper side length {{1.00 m}} in its rest frame. It moves past a laboratory at {{0.80c}} ({{γ = 5/3}}) in a direction parallel to one of its edges. What is the volume of the cube measured in the laboratory frame?",
        options: ["0.22 m³", "0.36 m³", "1.00 m³", "0.60 m³"],
        answerIndex: 3,
        hints: [
          "Does length contraction change dimensions **perpendicular** to the direction of motion?",
          "Contract ONLY the edge parallel to the velocity: {{L = L_0 / γ}}.",
        ],
        explanation:
          "Only the side parallel to the velocity contracts: {{L = 1.00 / (5/3) = 0.60 m}}. The two transverse sides remain {{1.00 m}} each, so the measured volume is {{0.60 * 1.00 * 1.00 = 0.60 m^3}}. Contracting all three sides erroneously gives {{0.60^3 = 0.22 m^3}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "galilean-special-relativity",
        strategy: "Muon decay in Earth frame vs muon rest frame",
        question:
          "Muons created {{10 km}} above sea level travel downward at {{0.995c}} ({{γ ≈ 10}}) and reach Earth's surface in large numbers despite a proper mean lifetime of {{2.2 μs}}. How does an observer in the **muon's rest frame** explain their survival?",
        options: [
          "The muon's lifetime remains 2.2 μs, while the 10 km atmosphere contracts to about 1.0 km.",
          "The muon's lifetime dilates to about 22 μs, while the atmosphere remains 10 km thick.",
          "The muon's lifetime dilates to about 22 μs, and the atmosphere contracts to about 1.0 km.",
          "The muon's lifetime shortens to 0.22 μs, while the atmosphere expands to about 100 km.",
        ],
        answerIndex: 0,
        hints: [
          "In its **own rest frame**, is the muon's internal clock moving or at rest?",
          "What is moving in the muon's rest frame—the muon, or Earth's atmosphere?",
        ],
        explanation:
          "In the muon's rest frame, the muon is at rest so its mean lifetime is simply its proper lifetime {{2.2 μs}}, while the {{10 km}} atmosphere rushes past at {{0.995c}} and length-contracts to {{10 / 10 = 1.0 km}}. Applying both effects in the same frame double-counts relativity.",
      },
      {
        id: "a2-rotational-relativity-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Proper distance vs proper travel time",
        question:
          "Two stars are mutually at rest at a proper separation of {{12.0 ly}}. A spacecraft travels directly from one star to the other at {{0.80c}} ({{γ = 5/3}}). How much time elapses on the spacecraft's onboard clock during the trip?",
        options: ["7.2 years", "9.0 years", "15.0 years", "25.0 years"],
        answerIndex: 1,
        hints: [
          "First find the journey duration measured in the stars' frame: {{Δt = L_0 / v}}.",
          "The spacecraft's clock is present at both departure and arrival, so it measures the **proper time** {{Δt_0 = Δt / γ}}.",
        ],
        explanation:
          "In the stars' rest frame, {{Δt = 12.0 ly / 0.80c = 15.0 years}}. The onboard clock measures proper time {{Δt_0 = Δt / γ = 15.0 / (5/3) = 9.0 years}}. Equivalently, in the ship frame the distance contracts to {{7.2 ly}}, taking {{7.2 / 0.80 = 9.0 years}}. Multiplying {{15.0}} by {{γ}} wrongly gives {{25.0 years}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Inverse relativistic velocity addition",
        question:
          "A rocket flies past a space station at {{0.60c}} and fires a probe forward at {{0.60c}} relative to the rocket. What is the speed of the probe relative to the space station?",
        options: ["0.60c", "0.75c", "0.88c", "1.20c"],
        answerIndex: 2,
        hints: [
          "Use the inverse velocity addition formula {{u = (u' + v) / (1 + u'v/c^2)}} because both velocities point in the same direction.",
          "Substitute {{u' = 0.60c}} and {{v = 0.60c}}.",
        ],
        explanation:
          "{{u = (0.60c + 0.60c) / (1 + 0.60 * 0.60) = 1.20c / 1.36 ≈ 0.882c ≈ 0.88c}}. Galilean addition wrongly yields {{1.20c}}, violating Einstein's cosmic speed limit.",
      },
      {
        id: "a2-rotational-relativity-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Head-on relativistic velocity addition",
        question:
          "In a laboratory frame {{S}}, particle P moves to the right at {{+0.80c}} and particle Q moves to the left at {{-0.80c}}. What is the speed of particle Q measured in the rest frame of particle P?",
        options: ["0.80c", "0.90c", "1.60c", "0.98c"],
        answerIndex: 3,
        hints: [
          "Let frame {{S'}} be particle P's rest frame ({{v = +0.80c}}), and set {{u = -0.80c}} for particle Q.",
          "Substitute carefully with signs into {{u' = (u - v) / (1 - uv/c^2)}}.",
        ],
        explanation:
          "With {{v = +0.80c}} and {{u = -0.80c}}: {{u' = (-0.80c - 0.80c) / (1 - (-0.80)(0.80)) = -1.60c / 1.64 ≈ -0.976c}}, so the speed is {{0.98c}}. Note that {{1.60c}} is merely the lab observer's closing rate, not the speed measured by particle P.",
      },
      {
        id: "a2-rotational-relativity-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Lorentz time transformation & relativity of simultaneity",
        question:
          "Frame {{S'}} moves at {{v = 0.60c}} ({{γ = 1.25}}) along {{+x}} relative to frame {{S}}. Two firecrackers explode simultaneously in {{S}} ({{Δt = 0}}) at {{x_1 = 0}} and {{x_2 = +1000 m}}. Taking {{c = 3.00 * 10^8 m s^(-1)}}, what is the time interval {{Δt' = t'_2 - t'_1}} measured in {{S'}}?",
        options: ["−2.5 μs", "+2.5 μs", "−2.0 μs", "0 μs"],
        answerIndex: 0,
        hints: [
          "Use the Lorentz transformation for time intervals: {{Δt' = γ(Δt - vΔx/c^2)}}.",
          "Notice {{Δt = 0}}, {{Δx = +1000 m}}, and {{v/c^2 = 0.60 / c}}—keep track of the minus sign!",
        ],
        explanation:
          "With {{Δt = 0}}, {{Δt' = -γ v Δx / c^2 = -1.25 * 0.60 * 1000 / (3.00 * 10^8) = -2.50 * 10^(-6) s = -2.5 μs}}. The negative sign means firecracker 2 (further in {{+x}}) explodes **earlier** than firecracker 1 in {{S'}}. Omitting {{γ}} gives {{-2.0 μs}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Invariant spacetime interval",
        question:
          "Two events in inertial frame {{S}} have separations {{Δx = 600 m}} and {{cΔt = 1000 m}}. What is the value of the invariant spacetime interval {{(Δs)^2}} measured in any other inertial frame {{S'}}?",
        options: [
          "{{1.60 * 10^5 m^2}}",
          "{{6.40 * 10^5 m^2}}",
          "{{1.36 * 10^6 m^2}}",
          "{{4.00 * 10^5 m^2}}",
        ],
        answerIndex: 1,
        hints: [
          "The spacetime interval {{(Δs)^2 = (cΔt)^2 - (Δx)^2}} is identical in **every** inertial frame.",
          "Square each term **before** subtracting.",
        ],
        explanation:
          "{{(Δs)^2 = (cΔt)^2 - (Δx)^2 = 1000^2 - 600^2 = 1.00 * 10^6 - 3.60 * 10^5 = 6.40 * 10^5 m^2}}, which is invariant across all inertial frames. Adding the squares gives {{1.36 * 10^6 m^2}}, and subtracting before squaring gives {{1.60 * 10^5 m^2}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Minkowski axis tilt angle tan θ = v/c",
        question:
          "On a Minkowski spacetime diagram with horizontal axis {{x}} and vertical axis {{ct}}, what angle does the {{ct'}}-axis of a frame moving at {{v = 0.50c}} make with the vertical {{ct}}-axis?",
        options: ["30.0°", "45.0°", "26.6°", "63.4°"],
        answerIndex: 2,
        hints: [
          "The {{ct'}}-axis is the worldline {{x = vt = (v/c)(ct)}}.",
          "Use {{tan θ = v / c}}, not {{sin θ = v / c}}.",
        ],
        explanation:
          "The angle between the {{ct'}}-axis and the {{ct}}-axis satisfies {{tan θ = v/c = 0.50}}, giving {{θ = tan^(-1)(0.50) = 26.6°}}. Using {{sin^(-1)(0.50)}} yields the common distractor {{30.0°}}, while {{63.4°}} is the angle from the horizontal {{x}}-axis.",
      },
      {
        id: "a2-rotational-relativity-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Reading simultaneity on a Minkowski diagram",
        question:
          "On a Minkowski diagram for frame {{S}}, frame {{S'}} moves in the {{+x}} direction at speed {{v}}. Event P (at {{x = 1}}) and Event Q (at {{x = 3}}) lie on the same horizontal line (same {{ct}} in {{S}}). Which statement about P and Q in frame {{S'}} is correct?",
        options: [
          "Events P and Q are still simultaneous in frame {{S'}}.",
          "Event P occurs earlier than event Q in frame {{S'}}.",
          "Event P and event Q can be linked by a light ray.",
          "Event Q occurs earlier than event P in frame {{S'}}.",
        ],
        answerIndex: 3,
        hints: [
          "Draw lines parallel to the tilted {{x'}}-axis through P and through Q.",
          "Which line intersects the {{ct'}}-axis at a **smaller** (lower) value of {{ct'}}?",
        ],
        explanation:
          "Lines of simultaneity in {{S'}} are parallel to the {{x'}}-axis, which slopes upward at gradient {{+v/c}}. Tracing back parallel to {{x'}} from Q (larger {{x}}) hits the {{ct'}}-axis **lower** than from P, so {{t'_Q < t'_P}}: event Q occurs **earlier** than event P in {{S'}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Classification of spacetime intervals",
        question:
          "Two events in inertial frame {{S}} have separations {{Δx = 500 m}} and {{cΔt = 300 m}}. Which conclusion about these two events is physically valid?",
        options: [
          "They are spacelike separated; no causal signal can link them and a frame exists where they are simultaneous.",
          "They are timelike separated; a massive particle can travel between them and measure their proper time.",
          "They are lightlike separated; a photon emitted at the first event arrives exactly at the second event.",
          "They are spacelike separated; their time ordering is strictly identical in every inertial reference frame.",
        ],
        answerIndex: 0,
        hints: [
          "Compute the sign of {{(Δs)^2 = (cΔt)^2 - (Δx)^2}}.",
          "Can light travel {{500 m}} in the time it takes light to travel {{300 m}}?",
        ],
        explanation:
          "{{(Δs)^2 = 300^2 - 500^2 = -1.60 * 10^5 m^2 < 0}}, so the events are **spacelike** separated. Because {{|Δx| > c|Δt|}}, no signal at or below {{c}} can connect them causally, a frame moving at {{v = c(cΔt/Δx) = 0.60c}} sees them as simultaneous, and faster frames reverse their time order.",
      },
      {
        id: "a2-rotational-relativity-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Inverting the Lorentz factor",
        question:
          "At what speed {{v}} relative to an observer is a moving rod measured to have exactly half its proper length?",
        options: ["0.500c", "0.866c", "0.707c", "0.750c"],
        answerIndex: 1,
        hints: [
          "Set {{L = L_0 / γ = (1/2)L_0}}, which tells you the required value of {{γ}}.",
          "Solve {{1 / sqrt(1 - v^2/c^2) = 2}} for {{v/c}}.",
        ],
        explanation:
          "For {{L = L_0 / 2}}, we need {{γ = 2}}, so {{1 - v^2/c^2 = 1/4}} ⇒ {{v^2/c^2 = 3/4}} ⇒ {{v = (sqrt(3)/2)c ≈ 0.866c}}. Forgetting the final square root gives {{0.750c}}, while assuming linearity gives {{0.500c}}.",
      },
      {
        id: "a2-rotational-relativity-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Consistency of velocity addition with Postulate 2",
        question:
          "A spaceship moves away from Earth at {{0.80c}} and fires a laser pulse straight ahead. What speed do Earth observers measure for the laser pulse, and how does relativistic velocity addition confirm it?",
        options: [
          "1.80c, because Galilean addition adds the spaceship speed directly to c.",
          "0.98c, because the relativistic denominator compresses speeds close to c.",
          "0.80c, because the light beam is dragged along at the spaceship's speed.",
          "1.00c, because {{(c + 0.80c) / (1 + 0.80)}} simplifies identically to c.",
        ],
        answerIndex: 3,
        hints: [
          "Einstein's second postulate immediately fixes the vacuum speed of light in every inertial frame.",
          "Substitute {{u' = c}} and {{v = 0.80c}} into {{u = (u' + v)/(1 + u'v/c^2)}}.",
        ],
        explanation:
          "Substituting {{u' = c}} and {{v = 0.80c}} gives {{u = (c + 0.80c) / (1 + (c)(0.80c)/c^2) = 1.80c / 1.80 = 1.00c}}, confirming that relativistic velocity addition preserves the invariant speed of light {{c}}.",
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Mixed HL Synthesis (A.4 & A.5)
  // =========================================================================
  {
    id: "a2-rotational-relativity-m3",
    title: "Paper 1A · Mixed HL Synthesis (A.4 & A.5)",
    level: "HL",
    questions: [
      {
        id: "a2-rotational-relativity-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Strategic pivot selection in equilibrium",
        question:
          "A uniform plank of weight {{200 N}} and length {{4.0 m}} rests horizontally on two supports: support A at the left end ({{0 m}}) and support B at {{3.0 m}} from the left end. What is the upward normal force exerted by support B?",
        options: ["133 N", "67 N", "100 N", "150 N"],
        answerIndex: 0,
        hints: [
          "Choose support A as the pivot so its unknown normal force has zero lever arm.",
          "Balance the clockwise torque of the weight (at {{2.0 m}}) with the anticlockwise torque of support B (at {{3.0 m}}).",
        ],
        explanation:
          "Taking moments about support A: {{N_B * 3.0 = 200 * 2.0 = 400 N m}} ⇒ {{N_B = 133.3 N ≈ 133 N}}. Support A carries the remaining {{67 N}}, while {{100 N}} assumes the supports share the weight equally despite asymmetric placement.",
      },
      {
        id: "a2-rotational-relativity-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Area under torque–time graph = ΔL",
        question:
          "A flywheel of moment of inertia {{2.0 kg m^2}} starts from rest. The net torque acting on it increases linearly from {{0 N m}} at {{t = 0}} to {{12 N m}} at {{t = 4.0 s}}. What is the flywheel's angular velocity at {{t = 4.0 s}}?",
        options: ["6.0 rad s⁻¹", "12 rad s⁻¹", "24 rad s⁻¹", "48 rad s⁻¹"],
        answerIndex: 1,
        hints: [
          "Angular impulse {{ΔL}} equals the **area** under the torque–time graph.",
          "Find the triangular area {{(1/2) * base * height}}, then divide by {{I}}.",
        ],
        explanation:
          "The area under the triangular {{τ}}-{{t}} graph is {{ΔL = (1/2)(4.0)(12) = 24 N m s}}. Since {{ΔL = Iω}}, {{ω = 24 / 2.0 = 12 rad s^(-1)}}. Treating the torque as constant at {{12 N m}} doubles the answer to {{24 rad s^(-1)}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Energy conservation for a rolling hoop",
        question:
          "A thin hollow hoop ({{I = mR^2}}) rolls without slipping from rest down an incline of vertical height {{5.0 m}}. Taking {{g = 9.8 m s^(-2)}}, what is its linear speed at the bottom?",
        options: ["5.0 m s⁻¹", "8.1 m s⁻¹", "7.0 m s⁻¹", "9.9 m s⁻¹"],
        answerIndex: 2,
        hints: [
          "Write total energy conservation: {{mgh = (1/2)mv^2 + (1/2)Iω^2}} with {{ω = v/R}}.",
          "For a hoop ({{I = mR^2}}), both kinetic energy terms equal {{(1/2)mv^2}}.",
        ],
        explanation:
          "Substituting {{I = mR^2}} and {{ω = v/R}} gives {{mgh = (1/2)mv^2 + (1/2)mv^2 = mv^2}}, so {{v = sqrt(gh) = sqrt(9.8 * 5.0) = sqrt(49) = 7.0 m s^(-1)}}. Ignoring rotation yields {{sqrt(2gh) = 9.9 m s^(-1)}}, while using a solid cylinder's inertia yields {{8.1 m s^(-1)}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Orthogonal tangential and centripetal acceleration",
        question:
          "A disc of radius {{0.25 m}} rotates with instantaneous angular velocity {{4.0 rad s^(-1)}} and angular acceleration {{8.0 rad s^(-2)}}. What is the magnitude of the **total** linear acceleration of a point on its rim?",
        options: ["2.0 m s⁻²", "4.0 m s⁻²", "6.0 m s⁻²", "4.5 m s⁻²"],
        answerIndex: 3,
        hints: [
          "Compute both components: tangential {{a_t = rα}} and centripetal {{a_c = rω^2}}.",
          "Because {{a_t}} and {{a_c}} are perpendicular, combine them with Pythagoras' theorem.",
        ],
        explanation:
          "{{a_t = rα = 0.25 * 8.0 = 2.0 m s^(-2)}} and {{a_c = rω^2 = 0.25 * 4.0^2 = 4.0 m s^(-2)}}. Since these vectors are perpendicular, {{a = sqrt(2.0^2 + 4.0^2) = sqrt(20) ≈ 4.5 m s^(-2)}}. Adding them directly wrongly gives {{6.0 m s^(-2)}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "galilean-special-relativity",
        strategy: "Galilean invariance",
        question:
          "Under a Galilean transformation between two inertial frames moving at constant relative velocity {{v}}, which quantity measured for a moving particle is **invariant** (identical in both frames)?",
        options: [
          "The acceleration of the particle",
          "The velocity of the particle",
          "The kinetic energy of the particle",
          "The linear momentum of the particle",
        ],
        answerIndex: 0,
        hints: [
          "Differentiate the Galilean velocity transformation {{u' = u - v}} with respect to time.",
          "Does shifting {{u}} by a constant {{v}} change {{p = mv}} or {{E_k = (1/2)mv^2}}?",
        ],
        explanation:
          "Because {{v}} is constant between inertial frames and {{t' = t}}, differentiating {{u' = u - v}} gives {{a' = a}}: **acceleration** (and hence net force {{F = ma}}) is Galilean-invariant. Velocity, momentum, and kinetic energy all depend on the observer's frame.",
      },
      {
        id: "a2-rotational-relativity-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Time dilation of radioactive half-life",
        question:
          "A beam of {{1600}} unstable particles with proper half-life {{1.5 μs}} travels through a laboratory at a speed where {{γ = 4.0}}. How many particles remain undecayed after {{12.0 μs}} as measured by laboratory clocks?",
        options: ["6", "400", "800", "100"],
        answerIndex: 1,
        hints: [
          "First find the dilated half-life measured in the laboratory frame: {{T_(1/2) = γ T_(1/2,0)}}.",
          "Count how many **dilated** half-lives fit into {{12.0 μs}}.",
        ],
        explanation:
          "The dilated half-life in the lab is {{T_(1/2) = 4.0 * 1.5 = 6.0 μs}}. Therefore {{12.0 μs}} equals exactly {{2}} dilated half-lives, leaving {{1600 * (1/2)^2 = 400}} particles. Forgetting time dilation gives {{8}} half-lives (only {{6}} particles).",
      },
      {
        id: "a2-rotational-relativity-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Velocity from worldline gradient on a Minkowski diagram",
        question:
          "On a Minkowski spacetime diagram (horizontal axis {{x}}, vertical axis {{ct}}), a particle's straight worldline passes through {{(0, 0)}} and {{(x = 3.0 m, ct = 5.0 m)}}. What is the particle's velocity?",
        options: ["0.36c", "0.80c", "0.60c", "1.67c"],
        answerIndex: 2,
        hints: [
          "Remember that {{ct}} is on the **vertical** axis, so gradient {{Δ(ct)/Δx = c/v}}, not {{v/c}}!",
          "Calculate {{v/c = Δx / (cΔt)}}.",
        ],
        explanation:
          "Since {{x = vt = (v/c)(ct)}}, {{v/c = Δx / (cΔt) = 3.0 / 5.0 = 0.60}}, so {{v = 0.60c}}. Taking the ordinary slope {{Δy/Δx = 5.0/3.0}} yields the unphysical speed {{1.67c}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Lorentz coordinate transformation for x'",
        question:
          "Frame {{S'}} moves at {{v = 0.80c}} ({{γ = 5/3}}) in the {{+x}} direction relative to frame {{S}}, with origins coinciding at {{t = t' = 0}}. An event occurs at {{x = 180 m}} and {{ct = 150 m}} in {{S}}. What is its spatial coordinate {{x'}} in {{S'}}?",
        options: ["36 m", "60 m", "500 m", "100 m"],
        answerIndex: 3,
        hints: [
          "Rewrite {{x' = γ(x - vt)}} cleanly as {{x' = γ(x - (v/c)(ct))}}.",
          "Substitute {{γ = 5/3}}, {{v/c = 0.80}}, {{x = 180 m}}, and {{ct = 150 m}}.",
        ],
        explanation:
          "{{x' = γ(x - (v/c)(ct)) = (5/3)(180 - 0.80 * 150) = (5/3)(180 - 120) = (5/3)(60) = 100 m}}. Omitting {{γ}} gives the Galilean value {{60 m}}, dividing by {{γ}} gives {{36 m}}, and using a plus sign instead of minus gives {{500 m}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Unwinding cylinder τ = Iα and a = Rα",
        question:
          "A light string is wound around a uniform solid cylinder ({{I = (1/2)mR^2}}) of mass {{2.0 kg}} and radius {{0.20 m}} mounted on a fixed frictionless central axle. The string is pulled with a constant tension of {{10 N}} without slipping. What is the linear acceleration of the string?",
        options: ["10 m s⁻²", "5.0 m s⁻²", "2.5 m s⁻²", "50 m s⁻²"],
        answerIndex: 0,
        hints: [
          "The string tension provides torque {{τ = T R = I α}}.",
          "Use {{a = R α}} (or eliminate {{R}} directly from {{T R = (1/2)mR^2 (a/R)}}).",
        ],
        explanation:
          "From {{τ = Iα}}, {{T R = (1/2)mR^2 (a/R)}}, so {{a = 2T / m = 2(10) / 2.0 = 10 m s^(-2)}} (explicitly {{I = 0.04 kg m^2}}, {{τ = 2.0 N m}}, {{α = 50 rad s^(-2)}}, {{a = Rα = 10 m s^(-2)}}). Stopping at {{α}} gives {{50}}, while using {{I = mR^2}} gives {{5.0 m s^(-2)}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Scaling of I, ω, and E_k during stellar collapse",
        question:
          "A spinning star collapses radially to one-third of its original radius with no mass loss and zero external torque. By what factor does its rotational kinetic energy change?",
        options: [
          "Increases by a factor of 3",
          "Increases by a factor of 9",
          "Increases by a factor of 27",
          "Increases by a factor of 81",
        ],
        answerIndex: 1,
        hints: [
          "Since {{I ∝ mR^2}}, how does {{I}} scale when {{R}} becomes {{R/3}}?",
          "With angular momentum {{L}} constant, use {{E_k = L^2 / (2I)}}.",
        ],
        explanation:
          "Reducing {{R}} by a factor of {{3}} reduces {{I ∝ R^2}} by a factor of {{3^2 = 9}}. Because {{L}} is conserved, {{E_k = L^2 / (2I)}} increases by a factor of **9** (drawn from gravitational potential energy). Confusing {{E_k ∝ ω^2}} at fixed {{I}} gives the distractor {{81}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Inverse Lorentz transformation from proper time",
        question:
          "A spaceship passes Earth at {{v = 0.80c}} ({{γ = 5/3}}). Two lights flash at the **same spot** inside the spaceship, {{3.0 μs}} apart on the ship's clock. Taking {{c = 3.00 * 10^8 m s^(-1)}}, what is the spatial distance {{Δx}} between these two flashes in Earth's frame?",
        options: ["432 m", "720 m", "1200 m", "1500 m"],
        answerIndex: 2,
        hints: [
          "In the ship's frame {{S'}}, {{Δx' = 0}} and {{Δt' = 3.0 μs}}.",
          "Apply the inverse Lorentz transformation {{Δx = γ(Δx' + v Δt')}}, or find Earth's dilated time {{Δt = γ Δt'}} and compute {{v Δt}}.",
        ],
        explanation:
          "Using {{Δx = γ(0 + v Δt') = (5/3)(0.80 * 3.00 * 10^8 * 3.0 * 10^(-6)) = (5/3)(720 m) = 1200 m}}. Omitting {{γ}} gives {{720 m}}, while multiplying {{c}} instead of {{v}} by {{Δt = 5.0 μs}} gives {{1500 m}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "torque-rotational-kinematics",
        strategy: "Time-independent rotational SUVAT",
        question:
          "A turbine rotor decelerates uniformly from {{30 rad s^(-1)}} to {{10 rad s^(-1)}} while rotating through {{40 rad}}. What is its angular acceleration?",
        options: ["−0.50 rad s⁻²", "−20 rad s⁻²", "+10 rad s⁻²", "−10 rad s⁻²"],
        answerIndex: 3,
        hints: [
          "Since time {{t}} is unknown, pick the time-independent equation {{ω_f^2 = ω_i^2 + 2αΔθ}}.",
          "Check the sign: the rotor is **slowing down**, so {{α}} must be negative.",
        ],
        explanation:
          "From {{ω_f^2 = ω_i^2 + 2αΔθ}}: {{10^2 = 30^2 + 2α(40)}} ⇒ {{100 - 900 = 80α}} ⇒ {{α = -800 / 80 = -10 rad s^(-2)}}. Omitting the factor of {{2}} gives {{-20 rad s^(-2)}}, while dividing {{Δω}} by {{Δθ}} gives {{-0.50 rad s^(-2)}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "galilean-special-relativity",
        strategy: "Twin paradox round-trip proper time",
        question:
          "Two identical clocks A and B are synchronised on Earth. Clock B flies at {{0.60c}} ({{γ = 1.25}}) to a beacon at Earth proper distance {{3.0 ly}} and immediately returns to Earth at {{0.60c}}. Upon return, how does the elapsed time on clock B compare with clock A?",
        options: [
          "0 years difference (the symmetry cancels out)",
          "2.0 years less than clock A",
          "1.0 year less than clock A",
          "2.5 years less than clock A",
        ],
        answerIndex: 1,
        hints: [
          "Find the total round-trip time measured by Earth clock A: {{Δt_A = (2 * 3.0 ly) / 0.60c}}.",
          "Clock B switches inertial frames at the turnaround and records proper time {{Δt_B = Δt_A / γ}} along each leg.",
        ],
        explanation:
          "Earth's total round-trip time is {{Δt_A = 6.0 / 0.60 = 10.0 years}}. Along both inertial legs, clock B records proper time {{Δt_B = 10.0 / 1.25 = 8.0 years}}. Thus clock B reads **2.0 years less** than clock A ({{1.0 year}} is only half the trip, and turnaround breaks symmetry).",
      },
      {
        id: "a2-rotational-relativity-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Identify",
        guideRef: "lorentz-spacetime-diagrams",
        strategy: "Length contraction geometry on a Minkowski diagram",
        question:
          "On a Minkowski diagram for Earth's frame {{S}}, a spaceship {{S'}} moves at velocity {{+v}}. A metre rule lies at rest along Earth's {{x}}-axis between {{x = 0}} and {{x = L_0}}. Which segment on the diagram represents the length of this rule as measured by observers in {{S'}}?",
        options: [
          "The segment cut along the horizontal {{x}}-axis between the rule's two vertical worldlines.",
          "The segment cut along the tilted {{ct'}}-axis between the rule's two vertical worldlines.",
          "The segment cut along the tilted {{x'}}-axis between the rule's two vertical worldlines.",
          "The segment cut along the 45° light-cone line between the rule's two vertical worldlines.",
        ],
        answerIndex: 2,
        hints: [
          "To measure the length of a moving object, an observer must record the positions of both ends **simultaneously** in their own frame.",
          "Which line on the Minkowski diagram represents {{t' = 0}} (simultaneity in {{S'}})?",
        ],
        explanation:
          "Observers in {{S'}} measure the rule's length by locating its two ends simultaneously in {{S'}}—that is, along the {{x'}}-axis ({{t' = 0}}), where the two vertical worldlines ({{x = 0}} and {{x = L_0}}) intersect the tilted {{x'}}-axis. The horizontal {{x}}-axis gives the proper length {{L_0}} in {{S}}.",
      },
      {
        id: "a2-rotational-relativity-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "moment-inertia-angular-momentum",
        strategy: "Rolling uphill using total kinetic energy",
        question:
          "A uniform solid sphere ({{I = (2/5)mR^2}}) rolls without slipping up a ramp with an initial centre-of-mass speed of {{5.0 m s^(-1)}}. Taking {{g = 10 m s^(-2)}}, what maximum vertical height {{h}} does its centre of mass reach?",
        options: ["0.50 m", "1.25 m", "2.50 m", "1.75 m"],
        answerIndex: 3,
        hints: [
          "BOTH translational and rotational kinetic energy convert into gravitational potential energy {{mgh}}.",
          "Write {{(1/2)mv^2 + (1/2)((2/5)mR^2)(v/R)^2 = mgh}} and solve for {{h}}.",
        ],
        explanation:
          "Total initial kinetic energy is {{(1/2)mv^2 (1 + 2/5) = (7/10)mv^2}}. Equating to {{mgh}} gives {{h = 0.7 v^2 / g = 0.7 * 25 / 10 = 1.75 m}}. Omitting rotational kinetic energy underestimates the height at {{1.25 m}}, while using a hoop ({{c = 1}}) overestimates it at {{2.50 m}}.",
      },
    ],
  },
];
