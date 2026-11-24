import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // =========================================================================
  // DIAGNOSTIC QUIZ (10 Qs)
  // =========================================================================
  quiz: [
    {
      id: "a2-rotational-relativity-quiz-q01",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "torque-rotational-kinematics",
      strategy: "Perpendicular torque τ = Fr",
      question:
        "A wrench of length {{0.30 m}} is pulled with a force of {{50 N}} perpendicular to the handle. Calculate the magnitude of the torque about the bolt, in N m.",
      answer: { type: "number", value: 15, display: "15 N m" },
      traps: [
        { spec: { type: "number", value: 166.7, tolerance: 1 }, feedback: "Multiply force by lever arm ({{τ = Fr}}), rather than dividing {{F}} by {{r}}." },
      ],
      hints: [
        "When the force is perpendicular to the handle, {{sin(90°) = 1}}.",
        "Calculate {{τ = F r = 50 * 0.30}}.",
      ],
      solution: ["{{τ = F r sin(90°) = 50 * 0.30 * 1 = 15 N m}}."],
    },
    {
      id: "a2-rotational-relativity-quiz-q02",
      kind: "mcq",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "torque-rotational-kinematics",
      strategy: "Convert rpm to rad s⁻¹",
      question: "A turntable rotates steadily at {{300 rev min^(-1)}}. What is its angular velocity in rad s⁻¹?",
      options: ["{{10π rad s^(-1)}}", "{{5π rad s^(-1)}}", "{{20π rad s^(-1)}}", "{{300 rad s^(-1)}}"],
      answerIndex: 0,
      hints: [
        "First convert revolutions per minute to revolutions per second by dividing by {{60}}.",
        "Multiply frequency {{f}} by {{2π}} to obtain {{ω}} in rad s⁻¹.",
      ],
      explanation:
        "{{f = 300 / 60 = 5.0 rev s^(-1)}}, so {{ω = 2πf = 10π rad s^(-1)}}. Forgetting the factor of {{2}} gives {{5π rad s^(-1)}}.",
    },
    {
      id: "a2-rotational-relativity-quiz-q03",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "torque-rotational-kinematics",
      strategy: "Rotational SUVAT Δθ = ½(ω_i + ω_f)t",
      question:
        "A spinning wheel accelerates uniformly from {{6.0 rad s^(-1)}} to {{18 rad s^(-1)}} in {{4.0 s}}. Calculate its angular displacement during this interval, in radians.",
      answer: { type: "number", value: 48, display: "48 rad" },
      traps: [
        { spec: { type: "number", value: 96 }, feedback: "Use the **average** angular speed {{(1/2)(ω_i + ω_f)}} before multiplying by time." },
      ],
      hints: [
        "You know {{ω_i}}, {{ω_f}}, and {{t}}—no need to find {{α}} first.",
        "Use {{Δθ = (1/2)(ω_i + ω_f)t}}.",
      ],
      solution: [
        "Average angular velocity: {{(6.0 + 18) / 2 = 12 rad s^(-1)}}.",
        "{{Δθ = 12 * 4.0 = 48 rad}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-quiz-q04",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "moment-inertia-angular-momentum",
      strategy: "Discrete moment of inertia I = Σmr²",
      question:
        "Two {{1.5 kg}} point masses are fixed to a light rigid bar at distances {{0.40 m}} and {{0.60 m}} on opposite sides of a perpendicular pivot. Calculate the total moment of inertia about the pivot, in kg m² (to 2 decimal places).",
      answer: { type: "number", value: 0.78, tolerance: 0.01, display: "0.78 kg m²" },
      traps: [
        { spec: { type: "number", value: 1.5 }, feedback: "Remember to square each distance {{r_i}} before adding: {{0.40^2 + 0.60^2 = 0.52}}, not {{0.40 + 0.60}}." },
        { spec: { type: "number", value: 0.3, tolerance: 0.01 }, feedback: "Moment of inertia is always **positive** and adds on both sides of the pivot—never subtract the two terms!" },
      ],
      hints: [
        "Moment of inertia is a scalar sum {{I = m_1 r_1^2 + m_2 r_2^2}}—both sides add positively.",
        "Compute {{1.5 * 0.40^2 + 1.5 * 0.60^2}}.",
      ],
      solution: [
        "{{I = 1.5(0.40^2 + 0.60^2) = 1.5(0.16 + 0.36) = 1.5 * 0.52 = 0.78 kg m^2}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-quiz-q05",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Compare",
      guideRef: "moment-inertia-angular-momentum",
      strategy: "Compare rotational kinetic energy using ω = v/R",
      question:
        "A solid cylinder ({{I = (1/2)mR^2}}) and a thin hoop ({{I = mR^2}}) of identical mass and radius roll without slipping across a floor at the same linear speed {{v}}. How does the hoop's rotational kinetic energy compare with the cylinder's?",
      options: [
        "Equal to the cylinder's rotational kinetic energy",
        "Twice the cylinder's rotational kinetic energy",
        "Half the cylinder's rotational kinetic energy",
        "Four times the cylinder's rotational kinetic energy",
      ],
      answerIndex: 1,
      hints: [
        "Since both have the same {{v}} and {{R}} and roll without slipping, they have the same {{ω = v/R}}.",
        "Compare {{E_(k,rot) = (1/2)Iω^2}} directly using the ratio of their moments of inertia.",
      ],
      explanation:
        "Both share the same {{ω = v/R}}, so {{E_(k,rot) = (1/2)Iω^2}} is directly proportional to {{I}}. Since {{I_(hoop) = mR^2 = 2 * ((1/2)mR^2) = 2 I_(cyl)}}, the hoop has **twice** the rotational kinetic energy.",
    },
    {
      id: "a2-rotational-relativity-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "moment-inertia-angular-momentum",
      strategy: "Rotational kinetic energy E_k = ½Iω²",
      question:
        "A disc with moment of inertia {{0.80 kg m^2}} spins at {{5.0 rad s^(-1)}}. Calculate its rotational kinetic energy, in joules.",
      answer: { type: "number", value: 10, display: "10 J" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "Don't forget the factor of {{1/2}} in {{E_k = (1/2)Iω^2}}." },
        { spec: { type: "number", value: 4 }, feedback: "{{Iω = 4}} is the angular momentum {{L}}; remember to square {{ω}} and multiply by {{1/2}}." },
      ],
      hints: [
        "Use {{E_k = (1/2)Iω^2}}.",
        "Substitute {{I = 0.80}} and {{ω = 5.0}}.",
      ],
      solution: ["{{E_k = (1/2)(0.80)(5.0)^2 = 0.40 * 25 = 10 J}}."],
    },
    {
      id: "a2-rotational-relativity-quiz-q07",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "galilean-special-relativity",
      strategy: "Lorentz factor γ = 1/√(1 − v²/c²)",
      question:
        "Calculate the Lorentz factor {{γ}} for a proton travelling at {{0.60c}} (give your answer to 2 decimal places).",
      answer: { type: "number", value: 1.25, tolerance: 0.01, display: "1.25" },
      traps: [
        { spec: { type: "number", value: 0.8 }, feedback: "You computed {{sqrt(1 - v^2/c^2) = 0.80}}; remember {{γ}} is the **reciprocal** {{1 / 0.80}}." },
        { spec: { type: "number", value: 1.56, tolerance: 0.02 }, feedback: "Don't forget to take the square root of {{1 - 0.60^2 = 0.64}} before inverting!" },
      ],
      hints: [
        "Compute {{1 - 0.60^2 = 1 - 0.36 = 0.64}}.",
        "Take the square root ({{0.80}}) and invert.",
      ],
      solution: ["{{γ = 1 / sqrt(1 - 0.60^2) = 1 / sqrt(0.64) = 1 / 0.80 = 1.25}}."],
    },
    {
      id: "a2-rotational-relativity-quiz-q08",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "galilean-special-relativity",
      strategy: "Length contraction L = L₀ / γ",
      question:
        "A spacecraft of proper length {{200 m}} passes a space station at {{0.80c}} ({{γ = 5/3}}). What length of the spacecraft is measured by observers on the station?",
      options: ["72 m", "333 m", "120 m", "160 m"],
      answerIndex: 2,
      hints: [
        "Proper length {{L_0 = 200 m}} is always the **longest** measured length.",
        "Divide {{L_0}} by {{γ = 5/3}}.",
      ],
      explanation:
        "Length contraction gives {{L = L_0 / γ = 200 / (5/3) = 120 m}}. Multiplying by {{γ}} incorrectly produces {{333 m}}.",
    },
    {
      id: "a2-rotational-relativity-quiz-q09",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "lorentz-spacetime-diagrams",
      strategy: "Invariant spacetime interval Δs = √((cΔt)² − (Δx)²)",
      question:
        "Two events in inertial frame {{S}} have separations {{Δx = 800 m}} and {{cΔt = 1000 m}}. Calculate the invariant spacetime interval {{Δs = sqrt((cΔt)^2 - (Δx)^2)}}, in metres.",
      answer: { type: "number", value: 600, display: "600 m" },
      traps: [
        { spec: { type: "number", value: 1281, tolerance: 2 }, feedback: "The spacetime interval uses a **minus** sign: {{(cΔt)^2 - (Δx)^2}}, not a plus sign!" },
        { spec: { type: "number", value: 200 }, feedback: "Square {{cΔt}} and {{Δx}} first before subtracting and taking the square root." },
      ],
      hints: [
        "Notice the minus sign inside {{(Δs)^2 = (cΔt)^2 - (Δx)^2}}.",
        "Recognise the 3–4–5 triangle scaled by {{200}}.",
      ],
      solution: [
        "{{(Δs)^2 = 1000^2 - 800^2 = 1000000 - 640000 = 360000 m^2}}.",
        "{{Δs = sqrt(360000) = 600 m}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-quiz-q10",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "lorentz-spacetime-diagrams",
      strategy: "Minkowski x'-axis angle tan θ = v/c",
      question:
        "Frame {{S'}} moves at {{0.75c}} in the {{+x}} direction relative to frame {{S}}. On a Minkowski diagram ({{x}} horizontal, {{ct}} vertical), what angle does the {{x'}}-axis make with the {{x}}-axis?",
      options: ["48.6°", "45.0°", "53.1°", "36.9°"],
      answerIndex: 3,
      hints: [
        "Both the {{ct'}}-axis and the {{x'}}-axis tilt inward by the same angle {{θ}}.",
        "Use {{tan θ = v / c = 0.75}} and take the inverse tangent.",
      ],
      explanation:
        "From {{tan θ = v / c = 0.75}}, taking the inverse tangent yields {{θ = 36.87° ≈ 36.9°}}. Using {{sin^(-1)(0.75)}} gives {{48.6°}}, while {{53.1°}} is the complement {{90° - 36.9°}}.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 (A.4) & P2 (A.5)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER P1: Rigid Body Mechanics (A.4 HL)
    // -----------------------------------------------------------------------
    {
      id: "a2-rotational-relativity-p1",
      title: "Paper 2 · Rigid Body Mechanics (A.4 HL)",
      level: "HL",
      questions: [
        {
          id: "a2-rotational-relativity-p1-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "torque-rotational-kinematics",
          strategy: "Torque τ = Fr sin θ",
          question:
            "A cyclist pushes on a pedal crank of length {{0.18 m}} with a force of {{150 N}} at an angle of {{60°}} to the crank arm. Calculate the magnitude of the torque about the crank axle, in N m (to 3 significant figures).",
          answer: { type: "number", value: 23.4, tolerance: 0.1, display: "23.4 N m" },
          traps: [
            { spec: { type: "number", value: 13.5, tolerance: 0.1 }, feedback: "Use {{sin(60°)}}, not {{cos(60°)}}, for the force component perpendicular to the crank arm." },
            { spec: { type: "number", value: 27 }, feedback: "Remember to multiply by {{sin(60°)}} because the force is not perpendicular to the crank." },
          ],
          hints: [
            "Identify {{F = 150 N}}, {{r = 0.18 m}}, and {{θ = 60°}}.",
            "Compute {{τ = F r sin(60°)}}.",
          ],
          solution: ["{{τ = 150 * 0.18 * sin(60°) = 27 * 0.8660 = 23.4 N m}}."],
        },
        {
          id: "a2-rotational-relativity-p1-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "torque-rotational-kinematics",
          strategy: "Rotational SUVAT & conversion to revolutions",
          question:
            "A ceiling fan slows uniformly from {{180 rev min^(-1)}} to rest in {{12.0 s}}. Calculate the total number of revolutions it turns while stopping.",
          answer: { type: "number", value: 18, display: "18" },
          traps: [
            { spec: { type: "number", value: 36 }, feedback: "The fan decelerates uniformly from {{3 rev s^(-1)}} to {{0}}, so use the **average** speed {{1.5 rev s^(-1)}}." },
            { spec: { type: "number", value: 113.1, tolerance: 0.5 }, feedback: "{{113.1}} is the angular displacement in **radians** ({{36π}}); divide by {{2π}} to get revolutions." },
          ],
          hints: [
            "Convert {{180 rev min^(-1)}} into revolutions per second (or rad s⁻¹).",
            "Apply {{Δθ = (1/2)(ω_i + ω_f)t}} and divide by {{2π}} to get revolutions.",
          ],
          solution: [
            "Initial angular speed: {{ω_i = 180 * 2π / 60 = 6π rad s^(-1)}} ({{3.0 rev s^(-1)}}).",
            "Angular displacement: {{Δθ = (1/2)(6π + 0)(12.0) = 36π rad}}.",
            "Number of revolutions: {{N = 36π / (2π) = 18}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q03",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "torque-rotational-kinematics",
          strategy: "Algebraic proof of pivot-independent couple torque",
          marks: 3,
          question:
            "Define a couple and prove that the net torque produced by two opposite forces of magnitude {{F}} separated by perpendicular distance {{d}} is independent of the choice of pivot axis.",
          hints: [
            "State the three defining geometric features of a couple (magnitude, direction, lines of action).",
            "Place an arbitrary pivot at perpendicular distance {{x}} from one line of action and sum the signed torques of both forces.",
          ],
          modelAnswer:
            "A couple is a pair of forces that are equal in magnitude, opposite in direction, and parallel along different lines of action separated by perpendicular distance d, so the resultant force is zero. Place an arbitrary pivot at perpendicular distance x from the nearer line of action (so the other force acts at distance x + d on the same side). The two forces produce opposing turning senses, giving net torque τ = F(x + d) − Fx = Fd. Since the pivot coordinate x cancels completely, the torque Fd is independent of pivot choice.",
          markScheme: [
            {
              point: "Defines a couple as equal, opposite, parallel forces along different lines of action (zero resultant force).",
              keywords: ["equal", "opposite", "parallel", "resultant force is zero"],
            },
            {
              point: "Sets up torques about an arbitrary pivot at distance x (giving F(x + d) − Fx or Fx + F(d − x)).",
              keywords: ["arbitrary pivot", "x + d", "d - x", "fx"],
            },
            {
              point: "Shows x cancels algebraically leaving τ = Fd independent of the pivot location.",
              keywords: ["cancels", "fd", "independent of pivot"],
            },
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "torque-rotational-kinematics",
          strategy: "Static equilibrium Στ = 0 about the hinge",
          question:
            "A uniform horizontal shelf of mass {{8.0 kg}} and length {{2.0 m}} is hinged to a vertical wall at its left end and supported at its right end by a light cable angled at {{45°}} above the shelf. A {{4.0 kg}} toolbox rests {{1.5 m}} from the wall. Taking {{g = 9.81 m s^(-2)}}, calculate the tension in the cable, in newtons (to 3 significant figures).",
          answer: { type: "number", value: 97.1, tolerance: 0.5, display: "97.1 N" },
          traps: [
            { spec: { type: "number", value: 68.7, tolerance: 0.5 }, feedback: "Don't forget the factor of {{sin(45°)}} in the cable's vertical component {{T sin(45°)}}." },
            { spec: { type: "number", value: 83.2, tolerance: 0.5 }, feedback: "Make sure the toolbox lever arm is {{1.5 m}} (not {{1.0 m}}) from the wall hinge." },
          ],
          hints: [
            "Take moments about the wall hinge so unknown hinge forces drop out.",
            "Sum the clockwise torques of the shelf (at {{1.0 m}}) and toolbox (at {{1.5 m}}), then set equal to {{T * 2.0 * sin(45°)}}.",
          ],
          solution: [
            "Shelf weight torque: {{τ_(shelf) = 8.0 * 9.81 * 1.0 = 78.48 N m}}.",
            "Toolbox weight torque: {{τ_(box) = 4.0 * 9.81 * 1.5 = 58.86 N m}}.",
            "Rotational equilibrium about hinge: {{T * 2.0 * sin(45°) = 78.48 + 58.86 = 137.34 N m}}.",
            "{{T = 137.34 / sqrt(2) = 97.1 N}} (3 s.f.).",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Moment of inertia of discrete masses",
          question:
            "A light rigid rod of length {{1.20 m}} has a {{2.0 kg}} sphere at one end and a {{3.0 kg}} sphere at the other end. Treating the spheres as point masses, calculate the moment of inertia about a perpendicular axis through the midpoint of the rod, in kg m².",
          answer: { type: "number", value: 1.8, tolerance: 0.01, display: "1.8 kg m²" },
          traps: [
            { spec: { type: "number", value: 7.2 }, feedback: "The axis passes through the **midpoint**, so each mass is at distance {{r = 0.60 m}}, not {{1.20 m}}." },
          ],
          hints: [
            "How far is each sphere from the **midpoint** of a {{1.20 m}} rod?",
            "Apply {{I = m_1 r_1^2 + m_2 r_2^2}} with {{r_1 = r_2 = 0.60 m}}.",
          ],
          solution: [
            "Both spheres sit at {{r = 0.60 m}} from the midpoint.",
            "{{I = (2.0 + 3.0) * 0.60^2 = 5.0 * 0.36 = 1.8 kg m^2}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Newton's second law for rotation τ = Iα",
          question:
            "A flywheel of moment of inertia {{0.25 kg m^2}} accelerates uniformly from {{4.0 rad s^(-1)}} to {{20 rad s^(-1)}} in {{8.0 s}}. Calculate the constant net torque acting on the flywheel, in N m.",
          answer: { type: "number", value: 0.5, tolerance: 0.01, display: "0.50 N m" },
          traps: [
            { spec: { type: "number", value: 0.625, tolerance: 0.01 }, feedback: "Use the **change** in angular velocity {{Δω = 20 - 4.0 = 16 rad s^(-1)}}, not {{20}} alone." },
          ],
          hints: [
            "Find angular acceleration {{α = (ω_f - ω_i) / t}}.",
            "Multiply by moment of inertia: {{τ = Iα}}.",
          ],
          solution: [
            "{{α = (20 - 4.0) / 8.0 = 2.0 rad s^(-2)}}.",
            "{{τ = Iα = 0.25 * 2.0 = 0.50 N m}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Conservation of angular momentum I₁ω₁ = I₂ω₂",
          question:
            "A playground roundabout (uniform disc, {{I = (1/2)MR^2}}) of mass {{120 kg}} and radius {{2.0 m}} rotates freely at {{1.5 rad s^(-1)}}. A {{30 kg}} child steps gently onto its outer rim ({{r = 2.0 m}}) from rest. Calculate the new angular speed of the roundabout, in rad s⁻¹ (to 2 decimal places).",
          answer: { type: "number", value: 1, tolerance: 0.02, display: "1.00 rad s⁻¹" },
          traps: [
            { spec: { type: "number", value: 1.2, tolerance: 0.02 }, feedback: "Remember the child is a point mass at the rim ({{I = mR^2 = 120 kg m^2}}), NOT a disc ({{(1/2)mR^2}})!" },
          ],
          hints: [
            "Compute {{I_(disc) = (1/2)MR^2}} and add the child's point-mass inertia {{I_(child) = mR^2}}.",
            "Conserve angular momentum: {{I_(disc) ω_1 = (I_(disc) + I_(child)) ω_2}}.",
          ],
          solution: [
            "{{I_(disc) = 0.5 * 120 * 2.0^2 = 240 kg m^2}}; {{I_(child) = 30 * 2.0^2 = 120 kg m^2}}.",
            "Total final inertia: {{I_2 = 240 + 120 = 360 kg m^2}}.",
            "{{ω_2 = (240 * 1.5) / 360 = 360 / 360 = 1.00 rad s^(-1)}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q08",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Conservation of L with changing I",
          marks: 4,
          question:
            "A platform diver leaves the board rotating slowly with arms and legs extended, pulls into a tight tuck mid-air, and then opens out before entering the water. Neglecting air resistance, explain what happens during the tuck to the diver's angular momentum, angular velocity, and rotational kinetic energy, identifying the source of any energy change.",
          hints: [
            "Does gravity exert any torque about the diver's own centre of mass?",
            "Relate the tuck to moment of inertia {{I = Σmr^2}}, then trace {{L = Iω}} and {{E_k = L^2/(2I)}}.",
          ],
          modelAnswer:
            "During flight, gravity acts through the diver's centre of mass so the net external torque is zero and total angular momentum L = Iω remains constant. Pulling limbs closer to the rotation axis reduces r for body segments, decreasing the moment of inertia I = Σmr². Because L = Iω is constant and I decreases, the diver's angular velocity ω increases proportionally. Since rotational kinetic energy is E_k = L²/(2I), decreasing I at constant L causes rotational kinetic energy to increase; this additional mechanical energy comes from internal chemical work performed by the diver's muscles pulling limbs inward.",
          markScheme: [
            {
              point: "States zero net external torque (gravity acts through CM) so angular momentum L stays constant.",
              keywords: ["external torque", "constant", "conserved"],
            },
            {
              point: "Explains tucking brings mass closer to the axis, decreasing moment of inertia I.",
              keywords: ["decreases", "moment of inertia", "closer to the axis"],
            },
            {
              point: "Deduces angular velocity ω increases because L = Iω is constant.",
              keywords: ["angular velocity", "increases"],
            },
            {
              point: "States rotational kinetic energy increases (via L²/(2I)) due to internal muscular work.",
              keywords: ["kinetic energy", "muscles", "internal", "work"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics or incorrect statements throughout." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies conservation of angular momentum or decrease in I, but omits or misstates the kinetic energy change and its source." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly links zero external torque to constant L, explains reduced I and higher ω, and correctly identifies increased kinetic energy supplied by internal muscular work." },
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Total rolling kinetic energy",
          question:
            "A uniform solid sphere ({{I = (2/5)mR^2}}) of mass {{2.5 kg}} and radius {{0.10 m}} rolls without slipping along a level track at {{4.0 m s^(-1)}}. Calculate its **total** kinetic energy, in joules.",
          answer: { type: "number", value: 28, display: "28 J" },
          traps: [
            { spec: { type: "number", value: 20 }, feedback: "{{20 J}} is only the translational kinetic energy; add the rotational kinetic energy {{(1/2)Iω^2 = 8 J}}." },
            { spec: { type: "number", value: 8 }, feedback: "{{8 J}} is only the rotational kinetic energy; add the translational kinetic energy {{20 J}}." },
          ],
          hints: [
            "Sum BOTH translational KE {{(1/2)mv^2}} and rotational KE {{(1/2)Iω^2}} with {{ω = v/R}}.",
            "Notice {{E_(k,total) = (1/2)mv^2 (1 + 2/5) = (7/10)mv^2}}.",
          ],
          solution: [
            "Translational KE: {{(1/2)(2.5)(4.0)^2 = 20 J}}.",
            "Rotational KE: {{(1/2)((2/5)mR^2)(v/R)^2 = (1/5)(2.5)(16) = 8.0 J}}.",
            "Total KE: {{20 + 8.0 = 28 J}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q10",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Conservation of energy for rolling solid sphere",
          question:
            "A solid sphere ({{I = (2/5)mR^2}}) rolls without slipping from rest down an incline of vertical height {{2.80 m}}. Taking {{g = 9.81 m s^(-2)}}, calculate its centre-of-mass speed at the bottom, in m s⁻¹ (to 3 significant figures).",
          answer: { type: "number", value: 6.26, tolerance: 0.05, display: "6.26 m s⁻¹" },
          traps: [
            { spec: { type: "number", value: 7.41, tolerance: 0.05 }, feedback: "{{sqrt(2gh) = 7.41 m s^(-1)}} ignores rotational kinetic energy—include {{(1/2)Iω^2}}!" },
          ],
          hints: [
            "Equate {{mgh}} to total kinetic energy {{(1/2)mv^2 + (1/2)Iω^2 = (7/10)mv^2}}.",
            "Solve {{v = sqrt((10 g h) / 7)}}.",
          ],
          solution: [
            "{{mgh = (1/2)mv^2 (1 + 2/5) = (7/10)mv^2}}.",
            "{{v = sqrt((10 * 9.81 * 2.80) / 7) = sqrt(39.24) = 6.26 m s^(-1)}} (3 s.f.).",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Compare and contrast",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Rolling race energy split and static friction work",
          marks: 4,
          question:
            "A uniform solid cylinder ({{I = (1/2)mR^2}}) and a thin hollow hoop ({{I = mR^2}}) of equal mass and radius are released from rest together at the top of a rough incline and roll without slipping. Compare and contrast their final speeds and kinetic energy distributions at the bottom, and explain why static friction does not reduce their total mechanical energy.",
          hints: [
            "Compare the shape factor {{c = I/(mR^2)}} and what fraction of {{mgh}} goes into translation vs rotation for each body.",
            "Consider the instantaneous velocity of the bottom contact point relative to the ramp.",
          ],
          modelAnswer:
            "Both bodies start with identical gravitational potential energy mgh and convert all of it into the same total kinetic energy at the bottom, with no energy lost to heat. However, the hoop has a larger moment of inertia (mR² vs ½mR²), so it stores 50% of its energy in rotation and 50% in translation (v = √(gh)), whereas the solid cylinder stores only one-third in rotation and two-thirds in translation (v = √(4gh/3)). Consequently, the solid cylinder accelerates faster and reaches the bottom first with a greater linear speed. Static friction provides the torque needed for rolling without doing negative work because the contact point is instantaneously at rest relative to the surface (v − Rω = 0), giving zero power dissipation.",
          markScheme: [
            {
              point: "States both have the same total kinetic energy (mgh) at the bottom.",
              keywords: ["same total kinetic energy", "identical gravitational", "mgh"],
            },
            {
              point: "Contrasts energy splits: hoop allocates half (50%) to rotation vs cylinder one-third (33%) to rotation.",
              keywords: ["50%", "one-third", "two-thirds", "larger moment of inertia"],
            },
            {
              point: "Concludes the solid cylinder reaches a higher linear speed and arrives first.",
              keywords: ["greater linear speed", "accelerates faster", "reaches the bottom first"],
            },
            {
              point: "Explains static friction does zero work because the contact point is instantaneously at rest (v = Rω).",
              keywords: ["instantaneously at rest", "zero work", "zero power", "contact point"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid comparison or incorrect physical reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies which body wins or mentions different moments of inertia, but lacks quantitative energy splits or the zero-work friction explanation." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately compares total KE, contrasts translational/rotational energy partitions and speeds, and explains clearly why static friction does zero work." },
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q12",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "torque-rotational-kinematics",
          strategy: "Rotational work-energy theorem W = τΔθ = ΔE_k",
          question:
            "A flywheel of moment of inertia {{3.0 kg m^2}} spinning at {{20 rad s^(-1)}} is brought to rest by a constant braking torque of {{15 N m}}. Calculate the angular displacement through which the flywheel turns while stopping, in radians.",
          answer: { type: "number", value: 40, display: "40 rad" },
          traps: [
            { spec: { type: "number", value: 80 }, feedback: "Don't forget the factor of {{1/2}} in rotational kinetic energy {{(1/2)Iω^2}} (or the factor of {{2}} in {{2αΔθ}})." },
          ],
          hints: [
            "Method 1 (energy): equate initial kinetic energy {{(1/2)Iω^2}} to braking work {{τ Δθ}}.",
            "Method 2 (dynamics): find {{α = -τ / I = -5.0 rad s^(-2)}} and use {{ω_f^2 = ω_i^2 + 2αΔθ}}.",
          ],
          solution: [
            "Initial rotational KE: {{E_k = (1/2)(3.0)(20)^2 = 600 J}}.",
            "Work done by braking torque: {{τ Δθ = 600}} ⇒ {{Δθ = 600 / 15 = 40 rad}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q13",
          kind: "short",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Calculate",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Coupled hanging mass and rotating cylindrical pulley",
          question:
            "A {{4.0 kg}} bucket hangs from a light rope wrapped around a uniform solid cylindrical drum ({{I = (1/2)MR^2}}) of mass {{8.0 kg}} and radius {{0.25 m}} mounted on a fixed frictionless horizontal axle. Released from rest, the rope unwinds without slipping. Taking {{g = 9.81 m s^(-2)}}, calculate the downward acceleration of the bucket, in m s⁻² (to 3 significant figures).",
          answer: { type: "number", value: 4.91, tolerance: 0.05, display: "4.91 m s⁻²" },
          traps: [
            { spec: { type: "number", value: 9.81, tolerance: 0.05 }, feedback: "The rope tension {{T}} opposes gravity because torque is needed to spin up the massive drum!" },
            { spec: { type: "number", value: 3.27, tolerance: 0.05 }, feedback: "For a solid cylinder {{I = (1/2)MR^2}}, giving effective rotational mass {{M/2 = 4.0 kg}}, not {{M = 8.0 kg}}." },
          ],
          hints: [
            "Write two equations: {{mg - T = ma}} for the bucket, and {{T R = I α = (1/2)MR^2 (a/R)}} for the drum.",
            "Eliminate {{T}} to obtain {{a = mg / (m + M/2)}}.",
          ],
          solution: [
            "Drum equation: {{T R = (1/2)MR^2 (a/R)}} ⇒ {{T = (1/2)Ma}}.",
            "Substitute into bucket equation {{mg - (1/2)Ma = ma}}: {{a = mg / (m + M/2)}}.",
            "{{a = (4.0 * 9.81) / (4.0 + 4.0) = 4.905 ≈ 4.91 m s^(-2)}} (3 s.f.).",
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Derive",
          guideRef: "torque-rotational-kinematics",
          strategy: "Full static equilibrium ΣF_x = 0, ΣF_y = 0, Στ = 0",
          marks: 5,
          question:
            "A uniform ladder of mass {{m}} and length {{L}} leans at angle {{θ}} above a rough horizontal floor against a smooth (frictionless) vertical wall. Derive an expression for the minimum coefficient of static friction {{μ_s}} between the floor and the ladder required to prevent slipping, in terms of {{θ}}.",
          hints: [
            "List all four forces: weight {{mg}} at midpoint, upward floor normal {{N_f}}, horizontal floor friction {{f_s}}, and horizontal wall normal {{N_w}}.",
            "Apply {{ΣF_y = 0}}, {{ΣF_x = 0}}, and {{Στ = 0}} about the base of the ladder, then apply {{f_s <= μ_s N_f}}.",
          ],
          modelAnswer:
            "For vertical equilibrium, the upward floor normal reaction balances weight: N_f = mg. For horizontal equilibrium, static friction from the floor directed toward the wall balances the smooth wall's horizontal normal force: f_s = N_w. Taking torques about the foot of the ladder (eliminating N_f and f_s), the weight acts at L/2 with perpendicular lever arm (L/2) cos θ while N_w acts at the top with perpendicular lever arm L sin θ, so mg(L/2) cos θ = N_w L sin θ. Cancelling L gives N_w = f_s = mg / (2 tan θ). At the verge of slipping, f_s ≤ μ_s N_f yields mg / (2 tan θ) ≤ μ_s mg, so the minimum coefficient is μ_s = 1 / (2 tan θ).",
          markScheme: [
            {
              point: "Applies vertical equilibrium: N_f = mg.",
              keywords: ["n_f = mg", "balances weight", "vertical equilibrium"],
            },
            {
              point: "Applies horizontal equilibrium: f_s = N_w.",
              keywords: ["f_s = n_w", "horizontal equilibrium"],
            },
            {
              point: "Writes correct torque balance about the base (or wall): mg(L/2) cos θ = N_w L sin θ.",
              keywords: ["cos", "sin", "l/2"],
            },
            {
              point: "Solves for N_w = f_s = mg / (2 tan θ).",
              keywords: ["2 tan", "cot"],
            },
            {
              point: "Applies f_s ≤ μ_s N_f to obtain μ_s = 1 / (2 tan θ).",
              keywords: ["1 / (2 tan", "verge of slipping"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid equilibrium equations written." },
            { band: "1–2", marks: [1, 2], descriptor: "States translational equilibrium equations correctly but fails to set up or resolve the torque equation." },
            { band: "3–4", marks: [3, 4], descriptor: "Sets up both translational and rotational equilibrium with minor algebraic or trigonometric slip." },
            { band: "5", marks: [5, 5], descriptor: "Complete, rigorous derivation reaching μ_s = 1 / (2 tan θ) with every force and lever arm justified." },
          ],
        },
        {
          id: "a2-rotational-relativity-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Derive",
          guideRef: "moment-inertia-angular-momentum",
          strategy: "Coupled rolling dynamics and no-slip threshold",
          marks: 6,
          question:
            "A uniform solid sphere ({{I = (2/5)mR^2}}) rolls without slipping down a rough incline at angle {{θ}} to the horizontal. (a) Derive expressions for its centre-of-mass acceleration {{a}} and the static friction force {{f_s}} in terms of {{m}}, {{g}}, and {{θ}}. (b) Deduce the minimum coefficient of static friction {{μ_s}} required to prevent slipping, and explain what happens to {{a}} and rotation if the incline becomes completely frictionless.",
          hints: [
            "Write {{mg sin θ - f_s = ma}} and {{f_s R = I α}} together with the no-slip link {{a = R α}}.",
            "For part (b), compare {{f_s}} with the maximum available static friction {{μ_s mg cos θ}}.",
          ],
          modelAnswer:
            "(a) Along the incline, Newton's second law gives mg sin θ − f_s = ma. About the sphere's centre of mass, static friction provides the only torque: f_s R = Iα = (2/5)mR²(a/R), which simplifies to f_s = (2/5)ma. Substituting into the linear equation gives mg sin θ = (7/5)ma, so a = (5/7)g sin θ and f_s = (2/7)mg sin θ. (b) Normal reaction is N = mg cos θ, so preventing slipping requires f_s ≤ μ_s N, giving (2/7)mg sin θ ≤ μ_s mg cos θ and hence μ_s ≥ (2/7) tan θ. On a completely frictionless incline, zero torque acts about the centre of mass, so the sphere does not rotate at all and instead slides purely linearly with the larger acceleration a = g sin θ.",
          markScheme: [
            {
              point: "Writes translational equation mg sin θ − f_s = ma.",
              keywords: ["mg sin", "ma"],
            },
            {
              point: "Uses rotational law f_s R = (2/5)mR²(a/R) to obtain f_s = (2/5)ma.",
              keywords: ["2/5", "only torque", "simplifies"],
            },
            {
              point: "Derives a = (5/7)g sin θ.",
              keywords: ["5/7", "7/5"],
            },
            {
              point: "Derives f_s = (2/7)mg sin θ.",
              keywords: ["2/7"],
            },
            {
              point: "Uses f_s ≤ μ_s mg cos θ to deduce μ_s ≥ (2/7) tan θ.",
              keywords: ["mg cos", "tan"],
            },
            {
              point: "Explains that without friction there is zero torque, so it slides without rotating at a = g sin θ.",
              keywords: ["slides", "zero torque", "does not rotate"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid equations or physical explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Writes translational or rotational equation alone without coupling via a = Rα." },
            { band: "3–4", marks: [3, 4], descriptor: "Derives a and f_s accurately, or derives μ_s with an incomplete frictionless analysis." },
            { band: "5–6", marks: [5, 6], descriptor: "Full algebraic derivation of a = (5/7)g sin θ, f_s = (2/7)mg sin θ, μ_s ≥ (2/7) tan θ, plus clear physical explanation of pure sliding without friction." },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER P2: Special Relativity & Spacetime (A.5 HL)
    // -----------------------------------------------------------------------
    {
      id: "a2-rotational-relativity-p2",
      title: "Paper 2 · Special Relativity & Spacetime (A.5 HL)",
      level: "HL",
      questions: [
        {
          id: "a2-rotational-relativity-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "galilean-special-relativity",
          strategy: "Lorentz factor γ = 1/√(1 − v²/c²)",
          question:
            "A proton in a synchrotron moves at {{0.96c}}. Calculate its Lorentz factor {{γ}} (to 3 significant figures).",
          answer: { type: "number", value: 3.57, tolerance: 0.02, display: "3.57" },
          traps: [
            { spec: { type: "number", value: 12.76, tolerance: 0.1 }, feedback: "Take the square root of {{1 - 0.96^2 = 0.0784}} before inverting!" },
            { spec: { type: "number", value: 5 }, feedback: "Don't forget to **square** {{0.96}}: {{1 - 0.96^2 = 0.0784}}, not {{1 - 0.96 = 0.04}}." },
          ],
          hints: [
            "Compute {{0.96^2 = 0.9216}}, then subtract from {{1}} to get {{0.0784}}.",
            "Take {{sqrt(0.0784) = 0.28}}, then compute {{1 / 0.28}}.",
          ],
          solution: [
            "{{1 - 0.96^2 = 1 - 0.9216 = 0.0784}}.",
            "{{γ = 1 / sqrt(0.0784) = 1 / 0.28 = 25/7 ≈ 3.57}} (3 s.f.).",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "galilean-special-relativity",
          strategy: "Contracted length divided by speed",
          question:
            "A spacecraft of proper length {{80.0 m}} passes a fixed sensor on an asteroid base at {{0.80c}} ({{γ = 5/3}}). Taking {{c = 3.00 * 10^8 m s^(-1)}}, calculate the time interval, in nanoseconds, taken for the entire spacecraft to pass the sensor as measured on the base.",
          answer: { type: "number", value: 200, tolerance: 1, display: "200 ns" },
          traps: [
            { spec: { type: "number", value: 333.3, tolerance: 2 }, feedback: "In the base's frame, the moving spacecraft is **length-contracted** to {{48.0 m}}, not {{80.0 m}}!" },
          ],
          hints: [
            "First find the contracted length of the ship in the base's frame: {{L = L_0 / γ}}.",
            "Divide {{L}} by {{v = 0.80 * 3.00 * 10^8 m s^(-1)}} and convert to nanoseconds ({{1 ns = 10^(-9) s}}).",
          ],
          solution: [
            "Contracted length in base frame: {{L = 80.0 / (5/3) = 48.0 m}}.",
            "Passing time: {{Δt = L / v = 48.0 / (2.40 * 10^8) = 2.00 * 10^(-7) s = 200 ns}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q03",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "galilean-special-relativity",
          strategy: "Conflict between Galilean transformation and Maxwell's c",
          marks: 3,
          question:
            "Explain why Galilean velocity addition conflicts with Maxwell's theory of electromagnetism, and state how Einstein's two postulates resolve this contradiction.",
          hints: [
            "Apply {{u' = u - v}} to a light pulse travelling at {{u = c}}.",
            "Compare with Maxwell's prediction for {{c}} and state both of Einstein's postulates.",
          ],
          modelAnswer:
            "Maxwell's equations predict a single universal vacuum speed of light c = 1/√(μ₀ε₀) independent of observer motion, whereas Galilean velocity addition u' = u − v predicts a moving observer would measure c − v ≠ c. Einstein resolved this by postulating first that all laws of physics—including Maxwell's equations—take the exact same form in every inertial reference frame, and second that the vacuum speed of light c is invariant for all inertial observers regardless of source or observer velocity (replacing Galilean transformations with Lorentz transformations).",
          markScheme: [
            {
              point: "Explains Galilean addition u' = u − v gives c − v ≠ c, contradicting Maxwell's fixed speed c.",
              keywords: ["c - v", "maxwell", "u' = u - v"],
            },
            {
              point: "States Postulate 1: laws of physics have the same form in all inertial reference frames.",
              keywords: ["same form", "inertial"],
            },
            {
              point: "States Postulate 2: vacuum speed of light c is invariant for all inertial observers regardless of source/observer motion.",
              keywords: ["invariant", "independent of", "regardless of"],
            },
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "galilean-special-relativity",
          strategy: "Dilated lifetime and laboratory decay distance",
          question:
            "Unstable particles with proper mean lifetime {{2.80 * 10^(-8) s}} travel through a laboratory beamline at {{v = 0.96c}} ({{γ = 25/7}}). Taking {{c = 3.00 * 10^8 m s^(-1)}}, calculate the distance they travel in one dilated mean lifetime in the laboratory frame, in metres (to 3 significant figures).",
          answer: { type: "number", value: 28.8, tolerance: 0.1, display: "28.8 m" },
          traps: [
            { spec: { type: "number", value: 8.06, tolerance: 0.1 }, feedback: "{{8.06 m}} is the classical distance {{v τ_0}}; multiply the proper lifetime by {{γ}} first!" },
          ],
          hints: [
            "Dilate the proper lifetime into the laboratory frame: {{τ = γ τ_0}}.",
            "Multiply by speed {{v = 0.96 * 3.00 * 10^8 m s^(-1)}}.",
          ],
          solution: [
            "Dilated lifetime: {{τ = (25/7)(2.80 * 10^(-8)) = 1.00 * 10^(-7) s}}.",
            "Distance travelled: {{d = v τ = 0.96 * 3.00 * 10^8 * 1.00 * 10^(-7) = 28.8 m}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q05",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "galilean-special-relativity",
          strategy: "Dual-frame explanation of atmospheric muon survival",
          marks: 4,
          question:
            "Cosmic-ray muons are formed {{10 km}} above Earth's surface moving downward at {{0.995c}} ({{γ ≈ 10}}) with proper mean lifetime {{2.2 μs}}. Explain quantitatively why a large fraction reach sea level from BOTH (a) the Earth's reference frame and (b) the muon's rest frame.",
          hints: [
            "Contrast classical range {{v τ_0 ≈ 660 m}} with the relativistic calculation in each frame.",
            "Keep time dilation strictly in the Earth frame and length contraction strictly in the muon rest frame.",
          ],
          modelAnswer:
            "Classically, muons would travel only vτ₀ ≈ 0.995 × 3.00 × 10⁸ × 2.2 × 10⁻⁶ ≈ 660 m before decaying, far less than 10 km, so almost none would survive. (a) In Earth's frame, the moving muon's clock undergoes time dilation to τ = γτ₀ ≈ 10 × 2.2 = 22 μs, extending its mean range to vτ ≈ 6.6 km, comparable to the 10 km altitude so many reach the surface. (b) In the muon's rest frame, its lifetime stays 2.2 μs, but the 10 km atmosphere rushing past undergoes length contraction to L = L₀/γ ≈ 10 / 10 = 1.0 km, which passes the muon in about 3.3 μs—yielding the exact same survival fraction.",
          markScheme: [
            {
              point: "Notes classical range (~660 m) is far smaller than 10 km.",
              keywords: ["660", "657", "classically", "far less"],
            },
            {
              point: "Earth frame: invokes time dilation τ = γτ₀ ≈ 22 μs (range ~6.6 km).",
              keywords: ["time dilation", "22", "6.6"],
            },
            {
              point: "Muon frame: lifetime stays 2.2 μs while atmosphere undergoes length contraction to L = L₀/γ ≈ 1.0 km.",
              keywords: ["length contraction", "1.0 km", "1 km", "remains 2.2", "stays 2.2"],
            },
            {
              point: "Concludes both inertial frames predict the same physical survival fraction.",
              keywords: ["same survival", "same fraction", "3.3"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid relativistic explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Explains only one reference frame correctly, or applies both time dilation and length contraction in the same frame." },
            { band: "3–4", marks: [3, 4], descriptor: "Quantitatively and cleanly contrasts time dilation in Earth's frame with length contraction in the muon's frame, showing physical consistency." },
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Head-on relativistic velocity addition",
          question:
            "In Earth's inertial frame, spaceship A flies east at {{+0.70c}} and spaceship B flies west at {{-0.70c}}. Calculate the speed of spaceship B as measured by observers on spaceship A, as a multiple of {{c}} (to 3 significant figures).",
          answer: { type: "number", value: 0.94, tolerance: 0.005, display: "0.940 c" },
          traps: [
            { spec: { type: "number", value: 1.4 }, feedback: "{{1.40c}} is the Galilean sum; divide by {{1 + (0.70)(0.70) = 1.49}} in special relativity!" },
          ],
          hints: [
            "Set {{S'}} as spaceship A's frame ({{v = +0.70c}}) and {{u = -0.70c}} for B.",
            "Evaluate {{u' = (u - v) / (1 - uv/c^2)}} and take its magnitude.",
          ],
          solution: [
            "{{u' = (-0.70c - 0.70c) / (1 - (-0.70)(0.70)) = -1.40c / 1.49 = -0.940c}}.",
            "Speed measured by A is {{0.940 c}} (3 s.f.).",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Inverse relativistic velocity addition",
          question:
            "Rocket X moves away from a space station at {{0.60c}} and fires a shuttle forward at {{0.50c}} relative to rocket X. Calculate the shuttle's speed relative to the space station, as a multiple of {{c}} (to 3 significant figures).",
          answer: { type: "number", value: 0.846, tolerance: 0.005, display: "0.846 c" },
          traps: [
            { spec: { type: "number", value: 1.1 }, feedback: "{{1.10c}} uses Galilean addition; divide by {{1 + u'v/c^2 = 1.30}}." },
          ],
          hints: [
            "Since {{u' = +0.50c}} is measured in the rocket's moving frame ({{v = +0.60c}}), use the **inverse** velocity addition formula.",
            "Compute {{u = (0.50 + 0.60) / (1 + 0.50 * 0.60)}}.",
          ],
          solution: [
            "{{u = (u' + v) / (1 + u'v/c^2) = (0.50c + 0.60c) / (1 + 0.30) = 1.10c / 1.30 = 0.846 c}} (3 s.f.).",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Lorentz transformation for ct'",
          question:
            "Frame {{S'}} moves at {{v = 0.60c}} ({{γ = 1.25}}) in the {{+x}} direction relative to frame {{S}}, with origins coinciding at {{t = t' = 0}}. An event occurs at {{x = 400 m}} and {{ct = 600 m}} in {{S}}. Calculate its time coordinate {{ct'}} in frame {{S'}}, in metres.",
          answer: { type: "number", value: 450, display: "450 m" },
          traps: [
            { spec: { type: "number", value: 1050 }, feedback: "Watch the sign in {{ct' = γ(ct - (v/c)x)}}—subtract {{(v/c)x}}, don't add it!" },
            { spec: { type: "number", value: 360 }, feedback: "Don't forget to multiply by the Lorentz factor {{γ = 1.25}}." },
          ],
          hints: [
            "Multiply {{t' = γ(t - vx/c^2)}} by {{c}} to get the symmetric form {{ct' = γ(ct - (v/c)x)}}.",
            "Substitute {{γ = 1.25}}, {{ct = 600 m}}, {{v/c = 0.60}}, and {{x = 400 m}}.",
          ],
          solution: [
            "{{ct' = γ(ct - (v/c)x) = 1.25(600 - 0.60 * 400) = 1.25(600 - 240) = 1.25 * 360 = 450 m}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Proper time directly from spacetime interval",
          question:
            "Two timelike events in inertial frame {{S}} have separations {{Δx = 720 m}} and {{cΔt = 1200 m}}. Taking {{c = 3.00 * 10^8 m s^(-1)}}, calculate the proper time interval {{Δt_0}} between them in the inertial frame where both occur at the same spatial position, in microseconds (to 3 significant figures).",
          answer: { type: "number", value: 3.2, tolerance: 0.02, display: "3.20 μs" },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "{{4.00 μs}} is the lab time {{Δt = 1200 / c}}; use {{(cΔt_0)^2 = (cΔt)^2 - (Δx)^2}} to get proper time!" },
          ],
          hints: [
            "In the proper-time frame, {{Δx' = 0}}, so invariance gives {{(cΔt_0)^2 = (cΔt)^2 - (Δx)^2}}.",
            "Evaluate {{Δs = sqrt(1200^2 - 720^2) = 960 m}}, then divide by {{c}}.",
          ],
          solution: [
            "{{cΔt_0 = Δs = sqrt(1200^2 - 720^2) = sqrt(921600) = 960 m}}.",
            "{{Δt_0 = 960 / (3.00 * 10^8) = 3.20 * 10^(-6) s = 3.20 μs}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Train-and-platform relativity of simultaneity thought experiment",
          marks: 4,
          question:
            "Two lightning bolts strike the front and rear of a fast-moving train simultaneously according to a platform observer standing midway between the strike marks as the train's midpoint passes her. Using Einstein's second postulate, explain what the passenger sitting at the exact midpoint of the train observes and concludes.",
          hints: [
            "Trace the two light pulses travelling toward the midpoint in the platform frame as the train moves forward.",
            "Then shift to the passenger's frame, where she sits equidistant from both ends and light travels at {{c}} in both directions.",
          ],
          modelAnswer:
            "In the platform frame, both flashes leave the ends simultaneously and travel at the same speed c toward the midpoint. Because the train moves forward while the light is in transit, the passenger moves toward the front flash and away from the rear flash, so the front flash reaches her first—a physical coincidence all observers must agree upon. In the passenger's rest frame, she is equidistant from the front and rear of the train and, by Einstein's second postulate, light travels at the same speed c from both ends. Since the front flash arrives earlier over an equal distance at equal speed, she concludes that the front lightning bolt struck earlier than the rear bolt; simultaneity is relative.",
          markScheme: [
            {
              point: "Notes the passenger moves toward the front flash and away from the rear flash in the platform frame.",
              keywords: ["toward the front", "away from the rear"],
            },
            {
              point: "Deduces that the front flash reaches the passenger first (frame-independent event).",
              keywords: ["front flash reaches", "arrives first", "reaches her first"],
            },
            {
              point: "Applies Postulate 2 in the passenger's frame: equidistant ends and identical light speed c in both directions.",
              keywords: ["equidistant", "same speed c", "equal distance"],
            },
            {
              point: "Concludes the front bolt struck earlier than the rear bolt (relativity of simultaneity).",
              keywords: ["struck earlier", "not simultaneous", "relative"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics or claims both observers agree on simultaneity." },
            { band: "1–2", marks: [1, 2], descriptor: "States that the front flash reaches the passenger first without invoking invariant c to deduce the emission times." },
            { band: "3–4", marks: [3, 4], descriptor: "Complete causal chain linking motion toward the front flash, invariant c over equal distances, and the conclusion that the front strike happened earlier." },
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q11",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Velocity from Minkowski axis angle v/c = tan θ",
          question:
            "On a Minkowski spacetime diagram for frame {{S}}, the {{ct'}}-axis of a spacecraft's rest frame makes an angle of {{35.0°}} with the vertical {{ct}}-axis. Calculate the spacecraft's speed as a multiple of {{c}} (to 3 significant figures).",
          answer: { type: "number", value: 0.7, tolerance: 0.005, display: "0.700 c" },
          traps: [
            { spec: { type: "number", value: 0.574, tolerance: 0.005 }, feedback: "Use {{tan(35.0°)}}, NOT {{sin(35.0°)}}!" },
          ],
          hints: [
            "The angle between {{ct'}} and {{ct}} satisfies {{tan θ = v / c}}.",
            "Evaluate {{tan(35.0°)}} in degree mode.",
          ],
          solution: ["{{v / c = tan(35.0°) = 0.7002 ≈ 0.700}} ⇒ {{v = 0.700 c}}."],
        },
        {
          id: "a2-rotational-relativity-p2-q12",
          kind: "short",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Calculate",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Finding the frame of simultaneity from Δt' = 0",
          question:
            "Two firecrackers explode in frame {{S}} at {{(x_1 = 0, ct_1 = 0)}} and {{(x_2 = 1000 m, ct_2 = 600 m)}}. Calculate the velocity {{v}} (as a multiple of {{c}}) of the inertial frame {{S'}} in which both explosions occur simultaneously.",
          answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60 c" },
          traps: [
            { spec: { type: "number", value: 1.67, tolerance: 0.02 }, feedback: "Check the ratio: {{v/c = cΔt / Δx = 600 / 1000}}, not {{Δx / (cΔt)}} (which would exceed {{c}})!" },
          ],
          hints: [
            "Set {{Δt' = 0}} in the Lorentz time transformation {{Δt' = γ(Δt - vΔx/c^2)}}.",
            "Solve for {{v/c = (cΔt) / Δx}}.",
          ],
          solution: [
            "Setting {{Δt' = 0}} gives {{Δt = v Δx / c^2}} ⇒ {{v / c = (cΔt) / Δx}}.",
            "{{v / c = 600 / 1000 = 0.60}} ⇒ {{v = 0.60 c}}.",
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q13",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Describe",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Constructing tilted Minkowski axes and simultaneity lines",
          marks: 4,
          question:
            "Describe how to construct the {{ct'}}-axis and {{x'}}-axis of an inertial frame {{S'}} moving at velocity {{+v}} on a Minkowski spacetime diagram of frame {{S}}, and explain how to use the diagram to show that two events simultaneous in {{S}} are not simultaneous in {{S'}}.",
          hints: [
            "Give the exact equations and tilt angles of both {{ct'}} and {{x'}} relative to {{ct}} and {{x}}.",
            "Explain how lines of constant {{t}} vs lines of constant {{t'}} are oriented on the diagram.",
          ],
          modelAnswer:
            "Plot x horizontally and ct vertically so light rays from the origin lie along 45° lines. Draw the ct'-axis (worldline of x' = 0, where x = (v/c)ct) tilted clockwise from the vertical ct-axis by angle θ = tan⁻¹(v/c). Draw the x'-axis (line of t' = 0, where ct = (v/c)x) tilted anticlockwise from the horizontal x-axis by the exact same angle θ = tan⁻¹(v/c), scissoring symmetrically toward the 45° light cone. Two events simultaneous in S lie on a single horizontal line of constant ct at different x positions; however, lines of simultaneity in S' run parallel to the tilted x'-axis, so lines drawn parallel to x' through the two events intersect the ct'-axis at different heights, showing they have different t' coordinates (the event at larger +x occurs earlier in S').",
          markScheme: [
            {
              point: "Places ct' tilted clockwise from ct by θ = tan⁻¹(v/c) (worldline x' = 0).",
              keywords: ["clockwise", "tan", "x' = 0"],
            },
            {
              point: "Places x' tilted anticlockwise from x by the same angle θ = tan⁻¹(v/c) (line t' = 0).",
              keywords: ["anticlockwise", "same angle", "t' = 0"],
            },
            {
              point: "Identifies horizontal lines as simultaneous in S and lines parallel to x' as simultaneous in S'.",
              keywords: ["horizontal", "parallel to the tilted x'", "parallel to x'"],
            },
            {
              point: "Concludes that projections parallel to x' hit ct' at different values (different t' times).",
              keywords: ["different heights", "different t'", "occurs earlier"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid geometric description of Minkowski axes." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions tilted axes without giving tan⁻¹(v/c) or correctly explaining lines of simultaneity." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately specifies symmetric tilt angle θ = tan⁻¹(v/c) for both axes and clearly demonstrates relativity of simultaneity via lines parallel to x'." },
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Derive",
          guideRef: "galilean-special-relativity",
          strategy: "Pythagorean light-clock derivation of time dilation",
          marks: 5,
          question:
            "A light clock consists of two horizontal mirrors separated by vertical distance {{d}}. It moves horizontally at constant speed {{v}} relative to a stationary observer in frame {{S}}. Defining proper time {{Δt_0}}, derive the time dilation equation {{Δt = γ Δt_0}} using Einstein's second postulate.",
          hints: [
            "Express the round-trip proper time {{Δt_0}} in the clock's rest frame in terms of {{d}} and {{c}}.",
            "In frame {{S}}, light traces two diagonal legs of a right-angled triangle of height {{d}} and horizontal base {{v Δt / 2}}; apply Pythagoras' theorem.",
          ],
          modelAnswer:
            "Proper time Δt₀ is the time interval between emission and return of the light pulse measured in the clock's rest frame, where both events occur at the same spatial location. In the rest frame, light travels straight up and back down a total distance 2d at speed c, so d = cΔt₀/2. In frame S, the mirrors move horizontally a distance vΔt/2 during the upward leg, while by Einstein's second postulate light still travels at speed c along the diagonal hypotenuse of length cΔt/2. Applying Pythagoras' theorem to the right-angled triangle gives (cΔt/2)² = (cΔt₀/2)² + (vΔt/2)². Multiplying by 4 and rearranging yields Δt²(c² − v²) = c²Δt₀², so Δt = Δt₀ / √(1 − v²/c²) = γΔt₀.",
          markScheme: [
            {
              point: "Defines proper time Δt₀ as measured in the frame where both events occur at the same location (single clock).",
              keywords: ["same spatial location", "same location", "rest frame"],
            },
            {
              point: "Relates mirror spacing to proper time: d = cΔt₀/2 (or Δt₀ = 2d/c).",
              keywords: ["2d", "cδt₀/2"],
            },
            {
              point: "Uses Postulate 2 (same speed c) to write diagonal path length cΔt/2 and horizontal shift vΔt/2.",
              keywords: ["diagonal", "hypotenuse", "vδt/2"],
            },
            {
              point: "Applies Pythagoras' theorem: (cΔt/2)² = (cΔt₀/2)² + (vΔt/2)².",
              keywords: ["pythagoras", "right-angled triangle"],
            },
            {
              point: "Rearranges cleanly to Δt = Δt₀ / √(1 − v²/c²) = γΔt₀.",
              keywords: ["1 - v²/c²", "γδt₀"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid derivation." },
            { band: "1–2", marks: [1, 2], descriptor: "Defines proper time or sketches the diagonal path without setting up Pythagoras correctly." },
            { band: "3–4", marks: [3, 4], descriptor: "Sets up the right-angled triangle using invariant c with a minor algebraic slip." },
            { band: "5", marks: [5, 5], descriptor: "Complete, rigorous derivation from proper time definition and Postulate 2 through Pythagoras to Δt = γΔt₀." },
          ],
        },
        {
          id: "a2-rotational-relativity-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Discuss",
          guideRef: "lorentz-spacetime-diagrams",
          strategy: "Spacetime interval invariance and causal order",
          marks: 6,
          question:
            "Two events A and B are separated in inertial frame {{S}} by {{Δx}} and {{Δt}}. (a) State the invariant spacetime interval {{(Δs)^2}} and distinguish between timelike, lightlike, and spacelike intervals. (b) Discuss how the invariance of {{(Δs)^2}} protects causality across all inertial frames, even though relativity of simultaneity can reverse the time ordering of certain pairs of events.",
          hints: [
            "Examine the sign of {{(Δs)^2 = (cΔt)^2 - (Δx)^2}} for each of the three classes.",
            "Can an event outside the light cone ({{|Δx| > c|Δt|}}) ever send a causal signal to another event?",
          ],
          modelAnswer:
            "(a) The invariant spacetime interval is (Δs)² = (cΔt)² − (Δx)², which takes the exact same numerical value in every inertial reference frame. A timelike interval has (Δs)² > 0 (|Δx| < c|Δt|), meaning a subluminal object can travel from one event to the other; a lightlike (null) interval has (Δs)² = 0 (|Δx| = c|Δt|), connected by a photon; a spacelike interval has (Δs)² < 0 (|Δx| > c|Δt|), lying outside the light cone. (b) Because no physical signal or cause can travel faster than c, a causal relationship is ONLY possible for timelike or lightlike pairs ((Δs)² ≥ 0). Since (Δs)² is invariant, any timelike pair stays inside the future light cone in EVERY inertial frame, so Δt' can never change sign or reach zero—every observer strictly agrees that cause precedes effect. Only spacelike pairs ((Δs)² < 0) can have their time order reversed in a moving frame, and since no signal at or below c can link them, reversing their order never violates causality.",
          markScheme: [
            {
              point: "States (Δs)² = (cΔt)² − (Δx)² and notes it is invariant across all inertial frames.",
              keywords: ["(cδt)² - (δx)²", "same numerical value", "invariant"],
            },
            {
              point: "Defines timelike ((Δs)² > 0, subluminal connection) and lightlike ((Δs)² = 0, photon).",
              keywords: ["timelike", "lightlike", "photon", "subluminal"],
            },
            {
              point: "Defines spacelike ((Δs)² < 0, |Δx| > c|Δt|, outside light cone).",
              keywords: ["spacelike", "outside the light cone"],
            },
            {
              point: "States causality requires signals travelling at or below c, restricting cause–effect to (Δs)² ≥ 0.",
              keywords: ["faster than c", "causal relationship"],
            },
            {
              point: "Explains invariance prevents Δt' from changing sign for timelike/lightlike intervals (cause always precedes effect).",
              keywords: ["never change sign", "cause precedes effect", "future light cone"],
            },
            {
              point: "Explains time-order reversal happens ONLY for spacelike pairs, which cannot causally influence each other.",
              keywords: ["time order reversed", "never violates causality"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics." },
            { band: "1–2", marks: [1, 2], descriptor: "States the interval formula or mentions the light cone without classifying all three types or linking to causality." },
            { band: "3–4", marks: [3, 4], descriptor: "Classifies timelike, lightlike, and spacelike intervals clearly and outlines why causal links require v ≤ c." },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive discussion uniting interval invariance, the three interval classes, fixed time ordering inside the light cone, and harmless order reversal for spacelike pairs." },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 Qs, all difficulty: "challenge", level: "HL")
  // =========================================================================
  challenge: [
    {
      id: "a2-rotational-relativity-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "moment-inertia-angular-momentum",
      strategy: "Rolling energy conservation + horizontal projectile launch",
      question:
        "A uniform solid sphere ({{I = (2/5)mR^2}}) rolls without slipping from rest down a ramp of vertical height {{h = 1.75 m}} onto a short horizontal tabletop {{H = 0.80 m}} above the floor, then launches horizontally off the edge. Calculate the horizontal distance from the table edge to where the sphere hits the floor, in metres (to 2 decimal places).",
      answer: { type: "number", value: 2, tolerance: 0.03, display: "2.00 m" },
      traps: [
        { spec: { type: "number", value: 2.37, tolerance: 0.03 }, feedback: "{{2.37 m}} uses {{v = sqrt(2gh)}} without accounting for the sphere's rotational kinetic energy!" },
      ],
      hints: [
        "First find the launch speed {{v}} at the bottom of the ramp from {{mgh = (1/2)mv^2 + (1/2)Iω^2 = (7/10)mv^2}}.",
        "Next find the fall time {{t = sqrt(2H/g)}} and multiply {{R = v t}}—notice that {{g}} cancels out completely!",
      ],
      solution: [
        "Launch speed: {{v = sqrt((10 g h) / 7)}}.",
        "Fall time: {{t = sqrt((2 H) / g)}}.",
        "Horizontal range: {{R = v t = sqrt((20 h H) / 7) = sqrt((20 * 1.75 * 0.80) / 7) = sqrt(4.00) = 2.00 m}} (exact for any {{g}}!).",
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "moment-inertia-angular-momentum",
      strategy: "Angular momentum conservation in a tangential capture collision",
      question:
        "A {{0.20 kg}} puck slides on a frictionless table at {{16.0 m s^(-1)}} and strikes tangentially, sticking to the outer rim of a stationary uniform solid disc ({{I = (1/2)MR^2}}) of mass {{6.0 kg}} and radius {{0.50 m}} free to rotate about a fixed central vertical pin. Calculate the resulting angular velocity of the disc-and-puck system, in rad s⁻¹ (to 2 decimal places).",
      answer: { type: "number", value: 2, tolerance: 0.02, display: "2.00 rad s⁻¹" },
      traps: [
        { spec: { type: "number", value: 2.13, tolerance: 0.02 }, feedback: "Don't forget to include the stuck puck's own moment of inertia {{mR^2 = 0.05 kg m^2}} in the final total {{I}}!" },
      ],
      hints: [
        "Initial angular momentum about the central pin is {{L_i = m v R}} (linear momentum times perpendicular lever arm {{R}}).",
        "Final moment of inertia is {{I_(total) = (1/2)MR^2 + mR^2}}; apply {{L_i = I_(total) ω}}.",
      ],
      solution: [
        "Initial angular momentum about the pin: {{L_i = m v R = 0.20 * 16.0 * 0.50 = 1.60 kg m^2 s^(-1)}}.",
        "Total final moment of inertia: {{I_(total) = 0.5 * 6.0 * 0.50^2 + 0.20 * 0.50^2 = 0.75 + 0.05 = 0.80 kg m^2}}.",
        "Final angular velocity: {{ω = 1.60 / 0.80 = 2.00 rad s^(-1)}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "moment-inertia-angular-momentum",
      strategy: "Unwinding yo-yo coupled dynamics",
      question:
        "A uniform solid cylindrical yo-yo ({{I = (1/2)mR^2}}) is released from rest while the upper end of its string is held fixed, so it unwinds vertically downward without slipping. Taking {{g = 9.81 m s^(-2)}}, calculate its downward linear acceleration, in m s⁻² (to 3 significant figures).",
      answer: { type: "number", value: 6.54, tolerance: 0.05, display: "6.54 m s⁻²" },
      traps: [
        { spec: { type: "number", value: 9.81, tolerance: 0.05 }, feedback: "The upward string tension {{T}} reduces the downward acceleration while supplying torque to spin the yo-yo." },
        { spec: { type: "number", value: 4.91, tolerance: 0.05 }, feedback: "{{g/2 = 4.91 m s^(-2)}} applies to a thin hoop ({{I = mR^2}}); for a solid cylinder {{I = (1/2)mR^2}} gives {{(2/3)g}}." },
      ],
      hints: [
        "Write {{mg - T = ma}} for the centre of mass and {{T R = I α = (1/2)mR^2 (a/R)}} about the centre.",
        "Eliminate {{T}}—both {{m}} and {{R}} cancel out!",
      ],
      solution: [
        "From {{T R = (1/2)mR^2 (a/R)}}, {{T = (1/2)ma}}.",
        "Substitute into {{mg - T = ma}}: {{mg = (3/2)ma}} ⇒ {{a = (2/3)g = (2/3)(9.81) = 6.54 m s^(-2)}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q04",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "galilean-special-relativity",
      strategy: "Inverting time dilation to find v/c",
      question:
        "During a one-way interstellar flight at constant speed {{v}}, astronauts age {{5.0 years}} on their onboard clocks while Earth clocks record {{13.0 years}} for the voyage. Calculate the spacecraft's speed {{v}} as a multiple of {{c}} (to 3 significant figures).",
      answer: { type: "number", value: 0.923, tolerance: 0.005, display: "0.923 c" },
      traps: [
        { spec: { type: "number", value: 0.852, tolerance: 0.005 }, feedback: "Don't forget the final square root when solving {{v^2/c^2 = 1 - 1/γ^2}}!" },
      ],
      hints: [
        "First find {{γ = Δt / Δt_0 = 13.0 / 5.0}}.",
        "Solve {{v / c = sqrt(1 - 1 / γ^2) = sqrt(1 - (5/13)^2)}}.",
      ],
      solution: [
        "{{γ = 13.0 / 5.0 = 13/5}}.",
        "{{v / c = sqrt(1 - (5/13)^2) = sqrt(144 / 169) = 12/13 ≈ 0.923}} ⇒ {{v = 0.923 c}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q05",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "lorentz-spacetime-diagrams",
      strategy: "Proper lifetime from spacetime interval",
      question:
        "An unstable particle travels along the {{+x}}-axis in laboratory frame {{S}}. It is created at {{(x_1 = 0, ct_1 = 0)}} and decays at {{(x_2 = 1200 m, ct_2 = 1500 m)}}. Taking {{c = 3.00 * 10^8 m s^(-1)}}, calculate the particle's **proper lifetime** in microseconds (to 3 significant figures).",
      answer: { type: "number", value: 3, tolerance: 0.02, display: "3.00 μs" },
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "{{5.00 μs}} is the laboratory lifetime {{Δt = 1500 / c}}; divide by {{γ = 5/3}} (or use {{Δs / c}}) for proper lifetime." },
      ],
      hints: [
        "Method 1: Use the invariant interval {{cΔt_0 = sqrt((cΔt)^2 - (Δx)^2)}}.",
        "Method 2: Find {{v/c = Δx/(cΔt) = 0.80}}, compute {{γ = 5/3}}, and divide lab time {{5.00 μs}} by {{γ}}.",
      ],
      solution: [
        "{{cΔt_0 = sqrt(1500^2 - 1200^2) = sqrt(810000) = 900 m}}.",
        "{{Δt_0 = 900 / (3.00 * 10^8) = 3.00 * 10^(-6) s = 3.00 μs}}.",
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q06",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "lorentz-spacetime-diagrams",
      strategy: "Same-direction relativistic overtaking velocity",
      question:
        "Spaceship A flies away from Earth at {{0.60c}}. Spaceship B overtakes A in the same direction, moving at {{0.80c}} relative to Earth. Calculate the speed of spaceship B as measured by observers on spaceship A, as a multiple of {{c}} (to 3 significant figures).",
      answer: { type: "number", value: 0.385, tolerance: 0.005, display: "0.385 c" },
      traps: [
        { spec: { type: "number", value: 0.2 }, feedback: "{{0.20c}} is the Galilean difference {{0.80c - 0.60c}}; you must divide by {{1 - uv/c^2 = 0.52}}!" },
      ],
      hints: [
        "Take frame {{S'}} as spaceship A's rest frame ({{v = +0.60c}}) and set {{u = +0.80c}} for B.",
        "Evaluate {{u' = (0.80 - 0.60) / (1 - 0.80 * 0.60)}}.",
      ],
      solution: [
        "{{u' = (0.80c - 0.60c) / (1 - 0.80 * 0.60) = 0.20c / 0.52 = 5/13 c ≈ 0.385 c}} (3 s.f.).",
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      guideRef: "lorentz-spacetime-diagrams",
      strategy: "Ladder-and-barn paradox via relativity of simultaneity",
      marks: 6,
      question:
        "A ladder of proper length {{10.0 m}} moves horizontally at {{0.80c}} ({{γ = 5/3}}) into a barn of proper length {{8.0 m}} that has front and rear doors. (a) Calculate the contracted length of the ladder in the barn's rest frame and the contracted length of the barn in the ladder's rest frame. (b) Resolve the apparent paradox of whether the ladder can fit completely inside the closed barn using relativity of simultaneity.",
      hints: [
        "Compute {{L_(ladder) = 10.0 / γ}} in the barn frame and {{L_(barn) = 8.0 / γ}} in the ladder frame.",
        "Apply {{Δt' = γ(Δt - vΔx/c^2)}} to the two door-closing events that are simultaneous ({{Δt = 0}}) in the barn frame!",
      ],
      modelAnswer:
        "(a) In the barn's rest frame, the moving ladder contracts to L_ladder = 10.0 / (5/3) = 6.0 m, which is shorter than the 8.0 m barn. In the ladder's rest frame, the moving barn contracts to L_barn = 8.0 / (5/3) = 4.8 m, much shorter than the 10.0 m ladder. (b) In the barn frame, both doors can close and immediately reopen simultaneously (Δt = 0, Δx = 8.0 m) while the 6.0 m ladder sits completely inside. However, by the Lorentz transformation Δt' = γ(Δt − vΔx/c²), two separated events simultaneous in the barn frame are NOT simultaneous in the ladder's frame. Because the rear exit door sits at larger +x along the ladder's motion, Δt' is negative, meaning the rear door closes and reopens first (before the ladder's front reaches it or right after the front exits), and only later—after the ladder's rear end has passed inside—does the front door close. Therefore the doors are never simultaneously closed in the ladder's frame, eliminating any contradiction.",
      markScheme: [
        {
          point: "Calculates contracted ladder length in barn frame: 6.0 m (< 8.0 m).",
          keywords: ["6.0 m", "6 m"],
        },
        {
          point: "Calculates contracted barn length in ladder frame: 4.8 m (< 10.0 m).",
          keywords: ["4.8 m"],
        },
        {
          point: "Identifies that both doors closing simultaneously in the barn frame (Δt = 0) encloses the 6.0 m ladder.",
          keywords: ["simultaneously", "6.0 m ladder", "completely inside"],
        },
        {
          point: "Applies relativity of simultaneity / Δt' = γ(Δt − vΔx/c²) to show door closings are not simultaneous in the ladder frame.",
          keywords: ["not simultaneous", "vδx/c²"],
        },
        {
          point: "Identifies the order: the rear door closes and reopens BEFORE the front door closes in the ladder frame.",
          keywords: ["rear door closes", "before", "later"],
        },
        {
          point: "Concludes there is no contradiction because both doors are never closed at the same instant in the ladder's frame.",
          keywords: ["no contradiction", "eliminating", "never simultaneously closed"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant calculations or relativistic reasoning." },
        { band: "1–2", marks: [1, 2], descriptor: "Calculates one or both contracted lengths correctly without resolving the paradox." },
        { band: "3–4", marks: [3, 4], descriptor: "Calculates both lengths and invokes relativity of simultaneity qualitatively without specifying the exact sequence of door closures." },
        { band: "5–6", marks: [5, 6], descriptor: "Accurate calculations (6.0 m and 4.8 m) plus rigorous resolution specifying the order of door events from Lorentz transformation." },
      ],
    },
    {
      id: "a2-rotational-relativity-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "galilean-special-relativity",
      strategy: "Twin paradox: broken symmetry and Minkowski simultaneity jump",
      marks: 6,
      question:
        "Twin A remains on Earth while Twin B flies at {{0.80c}} ({{γ = 5/3}}) to a star at Earth proper distance {{4.0 ly}} and immediately turns around to return to Earth at {{0.80c}}. (a) Calculate the total elapsed time for both Twin A and Twin B upon reunion. (b) Evaluate the claim that symmetry implies both twins must be the same age, explaining the resolution using inertial frames and lines of simultaneity on a Minkowski diagram.",
      hints: [
        "Find Earth's round-trip time {{Δt_A = 8.0 / 0.80}} and Twin B's proper time {{Δt_B = Δt_A / γ}}.",
        "Which twin stays in a **single** inertial frame throughout? What happens to Twin B's tilted line of simultaneity at the turnaround point?",
      ],
      modelAnswer:
        "(a) In Earth's frame, the round-trip distance is 8.0 ly at 0.80c, so Twin A ages Δt_A = 8.0 / 0.80 = 10.0 years. Along each inertial leg, Twin B's onboard clock measures proper time, giving Δt_B = Δt_A / γ = 10.0 / (5/3) = 6.0 years (3.0 years outbound and 3.0 years inbound); Twin B returns 4.0 years younger. (b) The symmetry claim is false because the two journeys are physically asymmetric: Twin A remains in a single inertial frame throughout, whereas Twin B must accelerate to turn around and therefore switches between two different inertial frames (outbound +0.80c and inbound −0.80c). On Earth's Minkowski diagram, Twin B's lines of simultaneity tilt upward at slope +0.80 during the outbound leg (reading Earth time t = 1.8 years just before turnaround) and flip to slope −0.80 on the inbound leg (reading Earth time t = 8.2 years immediately after turnaround). That abrupt pivot of simultaneity accounts for the 6.4 missing Earth years, confirming special relativity is completely self-consistent.",
      markScheme: [
        {
          point: "Calculates Twin A's elapsed time: 10.0 years.",
          keywords: ["10.0 years", "10 years"],
        },
        {
          point: "Calculates Twin B's elapsed proper time: 6.0 years (4.0 years younger).",
          keywords: ["6.0 years", "6 years", "4.0 years younger"],
        },
        {
          point: "Rejects the symmetry claim: Twin A stays in a single inertial frame throughout.",
          keywords: ["single inertial frame", "asymmetric", "false"],
        },
        {
          point: "Identifies that Twin B accelerates and switches between two different inertial frames at turnaround.",
          keywords: ["accelerates", "switches", "two different inertial frames"],
        },
        {
          point: "Describes Twin B's Minkowski lines of simultaneity flipping slope from +v/c to −v/c at turnaround.",
          keywords: ["lines of simultaneity", "slope", "flip"],
        },
        {
          point: "Explains the pivot jumps across missing Earth years (1.8 yr to 8.2 yr, i.e. 6.4 yr), keeping both frames consistent.",
          keywords: ["6.4", "pivot", "self-consistent"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant physics or claims both twins return the same age." },
        { band: "1–2", marks: [1, 2], descriptor: "Calculates the ages correctly without explaining why symmetry is broken." },
        { band: "3–4", marks: [3, 4], descriptor: "Calculates both ages and explains the broken symmetry via acceleration / frame change, with limited spacetime diagram detail." },
        { band: "5–6", marks: [5, 6], descriptor: "Accurate calculations (10.0 yr vs 6.0 yr) plus thorough evaluation explaining frame-switching and the flip of Minkowski lines of simultaneity." },
      ],
    },
  ],
};
