import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 questions: 4 MCQs balanced 0,1,2,3 + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "a1-mechanics-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "kinematics-projectiles",
      strategy: "SUVAT braking scaling",
      question:
        "A car travelling at speed {{v}} brakes with constant deceleration and comes to rest in distance {{d}}. With the same constant braking deceleration, what is its stopping distance from an initial speed of {{2v}}?",
      options: ["4d", "2d", "8d", "1.41d"],
      answerIndex: 0,
      hints: [
        "Use v_f² = u² + 2as with v_f = 0 to express stopping distance s in terms of u and a.",
        "Since s = u²/(2|a|), doubling u quadruples s.",
      ],
      explanation:
        "From {{0 = u^2 - 2|a|s}}, stopping distance is {{s = u^2/(2|a|)}}. Doubling initial speed multiplies {{u^2}} by 4, giving {{4d}}.",
    },
    {
      id: "a1-mechanics-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "kinematics-projectiles",
      strategy: "Definition of uniform acceleration",
      question:
        "A train accelerates uniformly along a straight track from {{10.0}} m s⁻¹ to {{26.0}} m s⁻¹ in {{8.00}} s. Calculate its acceleration in m s⁻².",
      answer: { type: "number", value: 2, tolerance: 0.02, display: "2.00 m s⁻²" },
      traps: [
        { spec: { type: "number", value: 3.25, tolerance: 0.05 }, feedback: "Remember to subtract initial velocity u = 10.0 m s⁻¹ before dividing by time." },
        { spec: { type: "number", value: 4.5, tolerance: 0.05 }, feedback: "Subtract u from v — do not add them." },
      ],
      hints: [
        "Use a = (v − u)/t.",
        "Compute (26.0 − 10.0) / 8.00.",
      ],
      solution: [
        "Change in velocity: {{Δv = 26.0 - 10.0 = 16.0}} m s⁻¹.",
        "Acceleration: {{a = Δv / t = 16.0 / 8.00 = 2.00}} m s⁻².",
      ],
    },
    {
      id: "a1-mechanics-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "kinematics-projectiles",
      strategy: "Free-fall SUVAT",
      question:
        "A pebble is dropped from rest off a footbridge and splashes into the river {{2.50}} s later (take {{g = 9.81}} m s⁻² and neglect air resistance). Calculate the height of the bridge above the water in metres, to 3 significant figures.",
      answer: { type: "number", value: 30.7, tolerance: 0.2, display: "30.7 m" },
      traps: [
        { spec: { type: "number", value: 24.5, tolerance: 0.2 }, feedback: "24.5 m s⁻¹ is the impact speed v = gt — use s = ½gt² for displacement!" },
        { spec: { type: "number", value: 61.3, tolerance: 0.3 }, feedback: "You omitted the factor of ½ in s = ½gt²." },
      ],
      hints: [
        "Initial vertical velocity u = 0, a = 9.81 m s⁻² downwards, t = 2.50 s.",
        "Substitute into s = ut + ½at².",
      ],
      solution: [
        "With {{u = 0}}, {{s = (1/2)g t^2 = (1/2)(9.81)(2.50)^2}}.",
        "{{s = 4.905 * 6.25 = 30.66}} m ≈ 30.7 m.",
      ],
    },
    {
      id: "a1-mechanics-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "forces-newton-friction",
      strategy: "Translational equilibrium",
      question:
        "A student pushes a box across a rough horizontal floor at a **constant velocity** of {{1.2}} m s⁻¹ using a steady horizontal force of {{15}} N. What is the resultant (net) force acting on the box?",
      options: ["15 N forward", "0 N", "15 N backward", "30 N forward"],
      answerIndex: 1,
      hints: [
        "What is the acceleration when velocity is constant?",
        "Apply Newton's second law F_net = ma with a = 0.",
      ],
      explanation:
        "Constant velocity means {{a = 0}}, so by Newton's first and second laws {{F_net = 0}} N (the {{15}} N forward push is exactly balanced by {{15}} N of backward dynamic friction).",
    },
    {
      id: "a1-mechanics-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "forces-newton-friction",
      strategy: "Newton's 2nd Law with friction",
      question:
        "A {{3.5}} kg wooden crate accelerates horizontally at {{2.4}} m s⁻² across a workshop floor where dynamic friction is {{6.6}} N. Calculate the magnitude of the horizontal pulling force in newtons.",
      answer: { type: "number", value: 15, tolerance: 0.1, display: "15.0 N" },
      traps: [
        { spec: { type: "number", value: 8.4, tolerance: 0.1 }, feedback: "8.4 N is the NET force ma; add the opposing friction (6.6 N) to find the pulling force." },
        { spec: { type: "number", value: 1.8, tolerance: 0.1 }, feedback: "Friction opposes the pull, so F_pull = ma + F_f, not ma − F_f." },
      ],
      hints: [
        "Find the resultant force F_net = ma first.",
        "Since F_net = F_pull − F_f, solve for F_pull = ma + F_f.",
      ],
      solution: [
        "Net force: {{F_net = m a = 3.5 * 2.4 = 8.4}} N.",
        "Pulling force must overcome friction and provide {{F_net}}: {{F_pull = 8.4 + 6.6 = 15.0}} N.",
      ],
    },
    {
      id: "a1-mechanics-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "forces-newton-friction",
      strategy: "Hooke's law",
      question:
        "A vertical spring extends by {{0.080}} m when a {{0.40}} kg mass hangs motionless from its lower end ({{g = 9.81}} m s⁻²). Calculate the spring constant {{k}} in N m⁻¹ to 3 significant figures.",
      answer: { type: "number", value: 49.1, tolerance: 0.3, display: "49.1 N m⁻¹" },
      traps: [
        { spec: { type: "number", value: 5, tolerance: 0.1 }, feedback: "Remember to convert mass 0.40 kg into weight F = mg before dividing by extension." },
      ],
      hints: [
        "Calculate the downward weight F = mg first.",
        "Apply Hooke's law k = F / x.",
      ],
      solution: [
        "Weight of hanging mass: {{F = mg = 0.40 * 9.81 = 3.924}} N.",
        "Spring constant: {{k = F / x = 3.924 / 0.080 = 49.05}} N m⁻¹ ≈ 49.1 N m⁻¹.",
      ],
    },
    {
      id: "a1-mechanics-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "momentum-circular",
      strategy: "Impulse–time relationship",
      question:
        "Why do gymnasts land on thick compressible foam mats rather than directly on a hard wooden floor?",
      options: [
        "The mat decreases the gymnast's total change in momentum",
        "The mat decreases the gymnast's landing speed before contact",
        "The mat increases the stopping time to lower average force",
        "The mat converts kinetic energy directly into momentum",
      ],
      answerIndex: 2,
      hints: [
        "From a fixed jump height, is the gymnast's change in momentum Δp different on foam vs wood?",
        "Relate average force F to impulse Δp and stopping duration Δt via F = Δp/Δt.",
      ],
      explanation:
        "For a given landing speed coming to rest, {{Δp}} is identical on either surface. The compressible mat increases stopping time {{Δt}}, so the average upward force {{F = Δp/Δt}} on the gymnast's joints is much smaller.",
    },
    {
      id: "a1-mechanics-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "momentum-circular",
      strategy: "Centripetal force via angular speed",
      question:
        "A {{0.60}} kg steel bob revolves in a horizontal circle of radius {{1.20}} m at a steady angular speed of {{5.0}} rad s⁻¹. Calculate the magnitude of the centripetal force acting on the bob, in newtons.",
      answer: { type: "number", value: 18, tolerance: 0.1, display: "18.0 N" },
      traps: [
        { spec: { type: "number", value: 3.6, tolerance: 0.1 }, feedback: "Don't forget to square angular speed ω in F_c = m ω² r!" },
      ],
      hints: [
        "Use F_c = m ω² r.",
        "Square ω = 5.0 rad s⁻¹ first to get 25 rad² s⁻².",
      ],
      solution: [
        "{{F_c = m ω^2 r = 0.60 * (5.0)^2 * 1.20}}.",
        "{{F_c = 0.60 * 25.0 * 1.20 = 18.0}} N.",
      ],
    },
    {
      id: "a1-mechanics-quiz-q09",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "work-energy-power",
      strategy: "Perpendicular force does zero work",
      question:
        "A student carries a {{50}} N backpack horizontally for {{20}} m across a flat hallway at constant velocity. How much mechanical work does the upward supporting force on the backpack do?",
      options: ["1000 J", "250 J", "500 J", "0 J"],
      answerIndex: 3,
      hints: [
        "Find the angle θ between the upward supporting force and the horizontal displacement.",
        "Evaluate W = F s cos 90°.",
      ],
      explanation:
        "The supporting force acts vertically upwards while displacement is horizontal ({{θ = 90°}}). Since {{cos 90° = 0}}, {{W = 50 * 20 * cos 90° = 0}} J.",
    },
    {
      id: "a1-mechanics-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "work-energy-power",
      strategy: "Average gravitational power output",
      question:
        "A {{60}} kg athlete runs up a staircase of vertical height {{5.0}} m in {{4.0}} s ({{g = 9.81}} m s⁻²). Calculate the athlete's average useful mechanical power output against gravity, in watts to 3 significant figures.",
      answer: { type: "number", value: 736, tolerance: 3, display: "736 W" },
      traps: [
        { spec: { type: "number", value: 2943, tolerance: 10 }, feedback: "2943 J is the work done (mgh); divide by time t = 4.0 s to find power in watts." },
        { spec: { type: "number", value: 75, tolerance: 1 }, feedback: "Remember to multiply mass 60 kg by g = 9.81 m s⁻² to get weight." },
      ],
      hints: [
        "Compute the gain in gravitational potential energy ΔE_p = m g h.",
        "Divide ΔE_p by the time interval t = 4.0 s.",
      ],
      solution: [
        "Work done against gravity: {{ΔE_p = m g h = 60 * 9.81 * 5.0 = 2943}} J.",
        "Average power: {{P = 2943 / 4.0 = 735.8}} W ≈ 736 W.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (p1 & p2, 15 questions each)
  // ===========================================================================
  papers: [
    {
      id: "a1-mechanics-p1",
      title: "Paper 2 · Practice Set 1 — Structured Calculations & Explanations",
      level: "SL",
      questions: [
        {
          id: "a1-mechanics-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "kinematics-projectiles",
          strategy: "SUVAT (no time)",
          question:
            "A passenger aircraft accelerates uniformly from rest along a runway at {{3.20}} m s⁻² and reaches take-off speed {{80.0}} m s⁻¹. Calculate the minimum runway length required, in metres.",
          answer: { type: "number", value: 1000, tolerance: 2, display: "1000 m" },
          traps: [
            { spec: { type: "number", value: 2000, tolerance: 5 }, feedback: "Check the factor of 2 in v² = u² + 2as (divide by 2a = 6.40, not a = 3.20)." },
            { spec: { type: "number", value: 25, tolerance: 0.2 }, feedback: "25.0 s is the time to take-off — the question asks for runway length in metres." },
          ],
          hints: [
            "Time is not given, so use v² = u² + 2as.",
            "Rearrange for s = (v² − u²)/(2a) with u = 0.",
          ],
          solution: [
            "Using {{v^2 = u^2 + 2as}} with {{u = 0}}, {{v = 80.0}} m s⁻¹, {{a = 3.20}} m s⁻²:",
            "{{s = 80.0^2 / (2 * 3.20) = 6400 / 6.40 = 1000}} m.",
          ],
        },
        {
          id: "a1-mechanics-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "kinematics-projectiles",
          strategy: "Vertical free-fall peak",
          question:
            "A tennis ball is launched vertically upwards from ground level at {{18.0}} m s⁻¹ ({{g = 9.81}} m s⁻², negligible air resistance). Calculate the maximum height reached in metres, to 3 significant figures.",
          answer: { type: "number", value: 16.5, tolerance: 0.15, display: "16.5 m" },
          traps: [
            { spec: { type: "number", value: 33, tolerance: 0.3 }, feedback: "Remember the factor of 2 in v² = u² + 2as (divide u² by 2g, not g)." },
            { spec: { type: "number", value: 1.83, tolerance: 0.05 }, feedback: "1.83 s is the time to reach the top — now find height s = u²/(2g)." },
          ],
          hints: [
            "At the highest point, final vertical velocity v = 0 and a = −9.81 m s⁻².",
            "Solve 0 = u² − 2gH for H.",
          ],
          solution: [
            "Set upwards positive: {{u = 18.0}} m s⁻¹, {{v = 0}}, {{a = -9.81}} m s⁻².",
            "{{H = u^2 / (2g) = 18.0^2 / (2 * 9.81) = 324 / 19.62 = 16.51}} m ≈ 16.5 m.",
          ],
        },
        {
          id: "a1-mechanics-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "kinematics-projectiles",
          strategy: "Qualitative fluid resistance in 2D flight",
          marks: 3,
          question:
            "A metal sphere is launched obliquely at {{40°}} above level ground. Explain, in terms of force components, how air resistance modifies both the maximum height reached and the symmetry of the trajectory compared with ideal vacuum motion.",
          hints: [
            "State the direction of the drag force relative to instantaneous velocity.",
            "Split drag into vertical and horizontal effects on ascent vs descent.",
            "Think about how falling horizontal speed changes the steepness of the descent.",
          ],
          modelAnswer:
            "Air drag always acts opposite to the instantaneous velocity vector, creating both a horizontal retarding force and a vertical component. During ascent, the downward drag component adds to gravity so upward deceleration exceeds g (and mechanical energy is dissipated as heat), reducing the maximum height. Because horizontal speed continuously decreases throughout flight, the horizontal distance covered while falling is shorter than while rising, producing an asymmetric curve with a steeper descent than ascent.",
          markScheme: [
            {
              point: "Air drag acts opposite to the instantaneous velocity vector (having both horizontal and vertical components).",
              keywords: ["opposite to", "retarding", "opposes velocity", "instantaneous velocity"],
            },
            {
              point: "During ascent, downward drag adds to gravity (increasing deceleration / dissipating mechanical energy), so maximum height is lower.",
              keywords: ["exceeds g", "adds to gravity", "dissipated", "reducing the maximum", "lower peak"],
            },
            {
              point: "Horizontal speed continuously decreases throughout flight, breaking symmetry so the descent is steeper than the ascent.",
              keywords: ["steeper descent", "asymmetric", "continuously decreases", "horizontal speed decreases"],
            },
          ],
        },
        {
          id: "a1-mechanics-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "kinematics-projectiles",
          strategy: "Oblique ground-to-ground range",
          question:
            "A soccer ball is kicked from level turf at {{30.0}} m s⁻¹ at {{53.1°}} above the horizontal ({{sin 53.1° = 0.800}}, {{cos 53.1° = 0.600}}, {{g = 9.81}} m s⁻², negligible air drag). Calculate its horizontal range in metres, to 3 significant figures.",
          answer: { type: "number", value: 88.1, tolerance: 0.5, display: "88.1 m" },
          traps: [
            { spec: { type: "number", value: 44.0, tolerance: 0.4 }, feedback: "44.0 m is only the distance to the midpoint — total flight time is T = 2u_y/g." },
          ],
          hints: [
            "Resolve u into u_x = 30.0 × 0.600 and u_y = 30.0 × 0.800.",
            "Find total flight time T = 2u_y / g, then compute R = u_x T.",
          ],
          solution: [
            "Horizontal speed {{u_x = 30.0 * 0.600 = 18.0}} m s⁻¹; initial vertical speed {{u_y = 30.0 * 0.800 = 24.0}} m s⁻¹.",
            "Total flight time: {{T = (2 * 24.0) / 9.81 = 4.893}} s.",
            "Horizontal range: {{R = u_x T = 18.0 * 4.893 = 88.07}} m ≈ 88.1 m.",
          ],
        },
        {
          id: "a1-mechanics-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "forces-newton-friction",
          strategy: "Newton's 3rd Law pair criteria",
          marks: 3,
          question:
            "A ceramic mug sits motionless on a horizontal desk. A student claims that the downward weight of the mug and the upward normal reaction from the desk form a Newton's third-law pair. Explain why the student is incorrect and identify the true third-law partner of the mug's weight.",
          hints: [
            "Check how many different objects are acted on by weight and normal force.",
            "Compare the physical nature (force types) of gravity and normal contact force.",
            "Swap 'Earth' and 'mug' to name the true gravitational reaction partner.",
          ],
          modelAnswer:
            "Newton's third-law pairs must act on two different bodies, whereas both weight and normal force act on the same object (the mug). Furthermore, third-law pairs must be the same physical type of force, whereas weight is gravitational and normal reaction is an electromagnetic contact force. The true reaction partner to Earth pulling down on the mug is the equal-magnitude upward gravitational attraction exerted by the mug on Earth.",
          markScheme: [
            {
              point: "Both forces act on the same object (the mug), whereas third-law pairs act on two different bodies.",
              keywords: ["different bodies", "same object", "two different"],
            },
            {
              point: "The forces are of different physical types (gravitational vs electromagnetic contact), whereas third-law pairs must be the same type.",
              keywords: ["same physical type", "electromagnetic", "different types", "same type"],
            },
            {
              point: "The true partner of weight is the upward gravitational force exerted by the mug on Earth.",
              keywords: ["mug on earth", "gravitational attraction", "upward gravitational"],
            },
          ],
        },
        {
          id: "a1-mechanics-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "forces-newton-friction",
          strategy: "Rough inclined-plane dynamics",
          question:
            "An {{8.0}} kg wooden crate slides down a rough ramp inclined at {{36.9°}} to the horizontal ({{sin 36.9° = 0.600}}, {{cos 36.9° = 0.800}}, {{g = 9.81}} m s⁻²). The coefficient of dynamic friction is {{0.35}}. Calculate the acceleration of the crate down the ramp in m s⁻², to 3 significant figures.",
          answer: { type: "number", value: 3.14, tolerance: 0.03, display: "3.14 m s⁻²" },
          traps: [
            { spec: { type: "number", value: 5.89, tolerance: 0.05 }, feedback: "5.89 m s⁻² is g sin 36.9° with zero friction — remember to subtract μ_d g cos 36.9°." },
            { spec: { type: "number", value: 25.1, tolerance: 0.2 }, feedback: "25.1 N is the net force; divide by mass 8.0 kg to get acceleration." },
          ],
          hints: [
            "Resolve weight into mg sin 36.9° along the slope and mg cos 36.9° perpendicular to the slope.",
            "Dynamic friction is F_f = μ_d F_N = μ_d mg cos 36.9°, opposing motion up the slope.",
            "Compute a = (mg sin θ − μ_d mg cos θ)/m = g(sin θ − μ_d cos θ).",
          ],
          solution: [
            "Normal force: {{F_N = m g cos 36.9° = 8.0 * 9.81 * 0.800 = 62.78}} N.",
            "Dynamic friction: {{F_f = 0.35 * 62.78 = 21.97}} N.",
            "Downhill weight component: {{m g sin 36.9° = 8.0 * 9.81 * 0.600 = 47.09}} N.",
            "Acceleration: {{a = (47.09 - 21.97) / 8.0 = 25.11 / 8.0 = 3.14}} m s⁻².",
          ],
        },
        {
          id: "a1-mechanics-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "forces-newton-friction",
          strategy: "Stokes' law viscous drag",
          question:
            "A small steel sphere of radius {{2.0 * 10^(-3)}} m falls steadily at {{0.15}} m s⁻¹ in laminar flow through oil of viscosity {{0.80}} Pa s. Using Stokes' law, calculate the viscous drag force on the sphere in millinewtons (mN), to 3 significant figures.",
          answer: { type: "number", value: 4.52, tolerance: 0.04, display: "4.52 mN" },
          traps: [
            { spec: { type: "number", value: 0.00452, tolerance: 0.0001 }, feedback: "That is the value in newtons (N) — multiply by 1000 to convert to millinewtons (mN)." },
          ],
          hints: [
            "Use the IB Data Booklet Stokes' law equation F_d = 6 π η r v.",
            "Convert the final value from newtons (N) to millinewtons (mN) by multiplying by 1000.",
          ],
          solution: [
            "{{F_d = 6 pi η r v = 6 * pi * 0.80 * (2.0 * 10^(-3)) * 0.15}}.",
            "{{F_d = 4.524 * 10^(-3)}} N = 4.52 mN.",
          ],
        },
        {
          id: "a1-mechanics-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "forces-newton-friction",
          strategy: "Terminal velocity dynamics",
          marks: 4,
          question:
            "A skydiver leaps from a hovering helicopter and reaches terminal velocity before deploying the parachute. Explain, using Newton's laws of motion, how the skydiver's acceleration and speed change from the instant of release until terminal velocity is attained.",
          hints: [
            "Describe the forces and acceleration right at t = 0 when initial speed is zero.",
            "Explain how upward air resistance depends on downward speed.",
            "Apply F_net = mg − F_d = ma to trace what happens to net force and acceleration.",
            "State the equilibrium condition when terminal velocity is achieved.",
          ],
          modelAnswer:
            "At the instant of release, speed is zero so air drag is zero; weight is the only vertical force, producing maximum downward acceleration g = 9.81 m s⁻². As the skydiver speeds up, upward drag force increases, causing the downward resultant force (mg − F_d) to decrease. By Newton's second law (a = F_net / m), downward acceleration decreases progressively while speed still rises at a slowing rate. Eventually drag grows equal in magnitude to weight so net force becomes zero; by Newton's first law, acceleration drops to zero and the skydiver falls at constant speed.",
          markScheme: [
            {
              point: "Initially speed and drag are zero, so weight gives maximum downward acceleration g.",
              keywords: ["drag is zero", "maximum downward", "9.81", "only vertical force"],
            },
            {
              point: "As speed increases, upward air drag increases, reducing the downward resultant force (mg − F_d).",
              keywords: ["drag force increases", "resultant force", "mg - f_d", "air drag increases"],
            },
            {
              point: "By Newton's second law (a = F_net/m), acceleration decreases progressively while velocity continues increasing at a decreasing rate.",
              keywords: ["acceleration decreases", "slowing rate", "decreasing rate", "newton's second law"],
            },
            {
              point: "When upward drag equals weight, net force is zero so acceleration becomes zero and motion continues at constant speed (Newton's first law).",
              keywords: ["equals weight", "equal in magnitude to weight", "constant speed", "newton's first law"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics or incorrect claim (e.g. gravity decreases during fall)." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies drag growing with speed or equilibrium at terminal velocity, but misses the link via net force and decreasing acceleration." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear causal sequence linking initial free fall (a = g), rising drag, shrinking net force via Newton's 2nd law, and zero-net-force constant velocity via Newton's 1st law." },
          ],
        },
        {
          id: "a1-mechanics-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "momentum-circular",
          strategy: "Impulse and average force",
          question:
            "A {{0.45}} kg football initially stationary on the penalty spot is kicked so that it leaves the boot at {{22.0}} m s⁻¹. The boot remains in contact with the ball for {{0.015}} s. Calculate the magnitude of the average force exerted on the ball, in newtons.",
          answer: { type: "number", value: 660, tolerance: 2, display: "660 N" },
          traps: [
            { spec: { type: "number", value: 9.9, tolerance: 0.1 }, feedback: "9.90 N s is the impulse Δp; divide by contact time 0.015 s to find average force." },
          ],
          hints: [
            "Compute the change in momentum Δp = m(v − u) with u = 0.",
            "Use F_avg = Δp / Δt.",
          ],
          solution: [
            "Impulse {{Δp = 0.45 * (22.0 - 0) = 9.90}} N s.",
            "Average force {{F = 9.90 / 0.015 = 660}} N.",
          ],
        },
        {
          id: "a1-mechanics-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "momentum-circular",
          strategy: "1D momentum conservation with rebound",
          question:
            "A {{1.5}} kg trolley moving right at {{6.0}} m s⁻¹ collides head-on with a {{2.5}} kg trolley moving left at {{2.0}} m s⁻¹ on a frictionless track. After impact, the {{1.5}} kg trolley rebounds to the left at {{1.5}} m s⁻¹. Taking right as positive, calculate the velocity of the {{2.5}} kg trolley after impact, in m s⁻¹.",
          answer: { type: "number", value: 2.5, tolerance: 0.02, display: "2.50 m s⁻¹" },
          traps: [
            { spec: { type: "number", value: 0.7, tolerance: 0.05 }, feedback: "Check the sign of the 1.5 kg trolley's rebound velocity (−1.5 m s⁻¹, NOT +1.5 m s⁻¹)." },
            { spec: { type: "number", value: 6.5, tolerance: 0.1 }, feedback: "Check the sign of the 2.5 kg trolley's initial velocity (−2.0 m s⁻¹ moving left)." },
          ],
          hints: [
            "Assign strict + / − signs: u_1 = +6.0 m s⁻¹, u_2 = −2.0 m s⁻¹, v_1 = −1.5 m s⁻¹.",
            "Set total initial momentum equal to total final momentum and solve for v_2.",
          ],
          solution: [
            "Initial momentum: {{p_i = (1.5)(+6.0) + (2.5)(-2.0) = 9.0 - 5.0 = +4.0}} kg m s⁻¹.",
            "Final momentum: {{p_f = (1.5)(-1.5) + 2.5 v_2 = -2.25 + 2.5 v_2}}.",
            "Equating {{p_i = p_f}}: {{2.5 v_2 = 4.0 + 2.25 = 6.25}} ⇒ {{v_2 = +2.50}} m s⁻¹ (to the right).",
          ],
        },
        {
          id: "a1-mechanics-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "momentum-circular",
          strategy: "Impulse safety engineering",
          marks: 3,
          question:
            "Passenger cars are designed with deformable front crumple zones. Using momentum and impulse principles, explain how a crumple zone reduces the risk of severe injury during a frontal impact.",
          hints: [
            "Compare the total change in momentum Δp for a car stopping from speed v with vs without a crumple zone.",
            "State what the crumple zone changes about the collision duration Δt.",
            "Connect Δp, Δt and average force via F = Δp / Δt.",
          ],
          modelAnswer:
            "Bringing the car and occupant from initial speed to rest fixes the total momentum change (impulse Δp = −mv) regardless of body stiffness. As the crumple zone collapses plastically, it lengthens the stopping time Δt over which deceleration occurs. Because average net force obeys F = Δp/Δt, extending Δt significantly lowers the average and peak forces acting on passengers.",
          markScheme: [
            {
              point: "The total change in momentum (impulse Δp) to come to rest is fixed/unchanged for a given speed and mass.",
              keywords: ["fixes the total", "unchanged", "same impulse", "impulse δp", "momentum change"],
            },
            {
              point: "Deforming the crumple zone increases/lengthens the impact or stopping time Δt.",
              keywords: ["lengthens", "increases the stopping time", "longer time", "extending δt"],
            },
            {
              point: "From F = Δp/Δt, a larger Δt reduces the average/peak force experienced by passengers.",
              keywords: ["f = δp/δt", "lowers the average", "reduces the force", "peak forces"],
            },
          ],
        },
        {
          id: "a1-mechanics-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "momentum-circular",
          strategy: "Flat-curve centripetal friction",
          question:
            "A {{1400}} kg saloon car drives around a flat circular roundabout of radius {{35.0}} m at a constant speed of {{14.0}} m s⁻¹ without skidding. Calculate the magnitude of the sideways static friction force providing the centripetal force, in newtons.",
          answer: { type: "number", value: 7840, tolerance: 10, display: "7840 N" },
          traps: [
            { spec: { type: "number", value: 560, tolerance: 5 }, feedback: "Remember to square the speed v = 14.0 m s⁻¹ in F_c = mv²/r." },
          ],
          hints: [
            "Sideways static friction supplies the full inward centripetal force.",
            "Substitute m = 1400 kg, v = 14.0 m s⁻¹ and r = 35.0 m into F_c = mv²/r.",
          ],
          solution: [
            "{{F_f = F_c = (m v^2)/r = (1400 * 14.0^2) / 35.0}}.",
            "{{F_f = (1400 * 196) / 35.0 = 40 * 196 = 7840}} N.",
          ],
        },
        {
          id: "a1-mechanics-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "work-energy-power",
          strategy: "Work–energy conservation",
          question:
            "A {{3.0}} kg crate starts from rest at the foot of a frictionless ramp of vertical height {{4.0}} m and is pushed to the top, arriving with speed {{4.0}} m s⁻¹ ({{g = 9.81}} m s⁻²). Calculate the total mechanical work done by the pushing force in joules, to 3 significant figures.",
          answer: { type: "number", value: 142, tolerance: 1, display: "142 J" },
          traps: [
            { spec: { type: "number", value: 118, tolerance: 1 }, feedback: "118 J is only the gain in gravitational PE — add the final kinetic energy ½mv² = 24.0 J too!" },
            { spec: { type: "number", value: 24, tolerance: 0.5 }, feedback: "24.0 J is only the kinetic energy gain — include ΔE_p = mgh as well." },
          ],
          hints: [
            "Because the ramp is smooth, all work done by the push goes into ΔE_p + ΔE_k.",
            "Calculate mgh and ½mv² separately, then add them.",
          ],
          solution: [
            "Gain in gravitational PE: {{ΔE_p = 3.0 * 9.81 * 4.0 = 117.72}} J.",
            "Gain in kinetic energy: {{ΔE_k = (1/2)(3.0)(4.0)^2 = 24.0}} J.",
            "Total work done: {{W = 117.72 + 24.0 = 141.7}} J ≈ 142 J.",
          ],
        },
        {
          id: "a1-mechanics-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "work-energy-power",
          strategy: "Collision energy classification",
          marks: 3,
          question:
            "Distinguish between an elastic collision, an inelastic collision and an explosion for an isolated system with respect to total linear momentum and total kinetic energy.",
          hints: [
            "First state what happens to linear momentum across all three events.",
            "Compare total kinetic energy before and after in elastic vs inelastic collisions.",
            "State what happens to kinetic energy in an explosion and where the extra energy comes from.",
          ],
          modelAnswer:
            "Because the system has zero net external force, total linear momentum stays conserved in all three events. In an elastic interaction, total kinetic energy remains unchanged, whereas in an inelastic impact some kinetic energy is dissipated into thermal energy, sound, or deformation so final kinetic energy is smaller. In an explosion, total kinetic energy increases because stored chemical or elastic potential energy converts into kinetic energy of the fragments.",
          markScheme: [
            {
              point: "Total linear momentum is conserved in all three (since net external force is zero).",
              keywords: ["all three", "momentum stays conserved", "momentum is conserved in all"],
            },
            {
              point: "Elastic conserves total kinetic energy, whereas inelastic loses kinetic energy to thermal/sound/deformation.",
              keywords: ["remains unchanged", "dissipated", "thermal energy", "smaller"],
            },
            {
              point: "An explosion increases total kinetic energy from stored chemical/elastic potential energy.",
              keywords: ["kinetic energy increases", "chemical", "potential energy converts"],
            },
          ],
        },
        {
          id: "a1-mechanics-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "work-energy-power",
          strategy: "System energy transfers, power & efficiency",
          marks: 5,
          question:
            "An MRT train accelerates out of a station, cruises at constant speed along a level viaduct, and slows into the next station using regenerative braking. Discuss the main energy transfers in each phase, the role of resistive work during cruising, and why regenerative braking raises overall efficiency compared with friction disc brakes.",
          hints: [
            "Trace electrical → kinetic energy during acceleration.",
            "Explain why electrical power is still needed at constant cruising speed even though ΔE_k = 0.",
            "Contrast what happens to the train's kinetic energy under friction brakes vs generator-mode regenerative braking.",
            "Relate reduced wasted heat directly to efficiency η = E_useful / E_total.",
          ],
          modelAnswer:
            "During acceleration, electrical energy from the power rail converts via traction motors into kinetic energy of the train plus minor thermal losses in windings and bearings. While cruising at steady velocity, kinetic energy remains constant, yet the motors must continue doing positive work at rate P = F_drag v to balance negative work done by air drag and rolling resistance, which turns into thermal energy of the air and rails. With conventional disc brakes, all braking kinetic energy is degraded irreversibly into brake-pad heat. Regenerative braking reverses the motors into electrical generators, recovering a substantial fraction of kinetic energy back into electrical energy on the rail network. Because far less total energy is wasted as heat per trip, useful-to-total energy ratio (overall efficiency η) increases significantly.",
          markScheme: [
            {
              point: "Acceleration: electrical energy converts into kinetic energy (plus minor resistive/thermal losses).",
              keywords: ["electrical energy", "traction motors", "into kinetic energy"],
            },
            {
              point: "Cruising: kinetic energy is constant, so motor power P = Fv balances work done against air drag and rolling resistance.",
              keywords: ["p = f_drag v", "rolling resistance", "negative work", "balances drag"],
            },
            {
              point: "Conventional friction brakes convert braking kinetic energy irreversibly into wasted thermal energy (heat).",
              keywords: ["irreversibly", "brake-pad heat", "degraded", "friction brakes waste"],
            },
            {
              point: "Regenerative braking runs motors as generators, converting kinetic energy back into recoverable electrical energy.",
              keywords: ["generators", "recovering", "back into electrical"],
            },
            {
              point: "Recovering energy lowers net energy wasted per journey, increasing overall efficiency η = E_useful / E_total.",
              keywords: ["less total energy is wasted", "efficiency η", "useful-to-total", "raises efficiency"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant physics or incorrect energy conservation statements." },
            { band: "1–2", marks: [1, 2], descriptor: "Names basic energy forms (electrical, kinetic, heat) but omits cruising resistive work or how regenerative recovery works." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains all three phases accurately and contrasts generator recovery with friction heating, with minor omissions in linking power or efficiency." },
            { band: "5", marks: [5, 5], descriptor: "Complete, rigorous discussion covering acceleration, cruising work against drag (P = Fv), generator energy recovery vs brake-pad heating, and quantitative link to higher η." },
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER 2: EXAM-STANDARD IB EXTENDED PROBLEMS (15 questions)
    // =========================================================================
    {
      id: "a1-mechanics-p2",
      title: "Paper 2 · Practice Set 2 — Exam-Standard IB Extended Problems",
      level: "SL",
      questions: [
        {
          id: "a1-mechanics-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "kinematics-projectiles",
          strategy: "SUVAT velocity–displacement",
          question:
            "A test sled already moving at {{20.0}} m s⁻¹ fires its thrusters, producing a constant acceleration of {{6.00}} m s⁻² over a straight track of length {{150}} m. Calculate its final speed in m s⁻¹, to 3 significant figures.",
          answer: { type: "number", value: 46.9, tolerance: 0.2, display: "46.9 m s⁻¹" },
          traps: [
            { spec: { type: "number", value: 42.4, tolerance: 0.2 }, feedback: "You forgot to include the initial velocity squared (u² = 400) in v² = u² + 2as." },
            { spec: { type: "number", value: 2200, tolerance: 5 }, feedback: "Remember to take the square root of v² = 2200!" },
          ],
          hints: [
            "Time is not given, so select v² = u² + 2as.",
            "Compute 20.0² + 2(6.00)(150), then take the square root.",
          ],
          solution: [
            "{{v^2 = 20.0^2 + 2(6.00)(150) = 400 + 1800 = 2200}} m² s⁻².",
            "{{v = sqrt(2200) = 46.90}} m s⁻¹ ≈ 46.9 m s⁻¹.",
          ],
        },
        {
          id: "a1-mechanics-p2-q02",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "kinematics-projectiles",
          strategy: "Elevated oblique projectile quadratic",
          question:
            "A ball is launched from the edge of a {{25.0}} m tall cliff at {{20.0}} m s⁻¹ at {{30.0°}} **above** the horizontal ({{g = 9.81}} m s⁻², no air resistance). Calculate the total flight time before it hits the level beach below, in seconds to 3 significant figures.",
          answer: { type: "number", value: 3.5, tolerance: 0.03, display: "3.50 s" },
          traps: [
            { spec: { type: "number", value: 2.04, tolerance: 0.03 }, feedback: "2.04 s only takes the ball back to cliff-top level — it still has 25.0 m further to fall!" },
            { spec: { type: "number", value: 1.46, tolerance: 0.03 }, feedback: "Check the sign of u_y (+10.0 m s⁻¹ upwards) vs landing displacement y = −25.0 m." },
          ],
          hints: [
            "Set y = 0 at the cliff top with upwards positive: u_y = +20.0 sin 30° = +10.0 m s⁻¹, a_y = −9.81 m s⁻², y = −25.0 m.",
            "Write −25.0 = 10.0 t − 4.905 t² and solve the quadratic for the positive root t > 0.",
          ],
          solution: [
            "Initial vertical speed {{u_y = 20.0 sin 30.0° = +10.0}} m s⁻¹; final vertical displacement {{y = -25.0}} m.",
            "From {{y = u_y t - (1/2)g t^2}}: {{4.905 t^2 - 10.0 t - 25.0 = 0}}.",
            "Quadratic formula: {{t = (10.0 + sqrt(100 + 4 * 4.905 * 25.0)) / 9.81 = (10.0 + 24.30) / 9.81 = 3.50}} s.",
          ],
        },
        {
          id: "a1-mechanics-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "kinematics-projectiles",
          strategy: "Independence of perpendicular projectile motions",
          marks: 3,
          question:
            "A basketball is shot through the air toward a hoop (neglect air resistance). Explain why its horizontal and vertical motions can be treated independently, and state how each velocity component behaves during flight.",
          hints: [
            "Name the single force acting on the ball after release and its direction.",
            "Deduce the horizontal acceleration a_x and vertical acceleration a_y.",
            "State what happens to v_x and v_y throughout flight.",
          ],
          modelAnswer:
            "After release, the only force acting is gravity directed strictly vertically downwards, producing zero horizontal force. Perpendicular vector components are orthogonal and do not influence one another, so the motions decouple. Consequently, horizontal velocity remains constant (a_x = 0) while vertical velocity decreases uniformly at 9.81 m s⁻² downwards (passing through zero at the peak before turning negative).",
          markScheme: [
            {
              point: "Only gravitational force acts, strictly vertically downwards, giving zero horizontal force.",
              keywords: ["strictly vertically", "zero horizontal force", "only force acting is gravity"],
            },
            {
              point: "Perpendicular force/acceleration components are independent (orthogonal), so horizontal and vertical axes decouple.",
              keywords: ["orthogonal", "decouple", "do not influence"],
            },
            {
              point: "Horizontal velocity remains constant while vertical velocity changes uniformly at g = 9.81 m s⁻² downwards.",
              keywords: ["remains constant", "uniformly at 9.81", "decreases uniformly"],
            },
          ],
        },
        {
          id: "a1-mechanics-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "forces-newton-friction",
          strategy: "Two-body pulley system with friction",
          question:
            "A {{6.0}} kg block on a rough horizontal bench ({{μ_d = 0.25}}) is connected by a light inextensible string over a frictionless pulley to a hanging {{4.0}} kg mass ({{g = 9.81}} m s⁻²). Once released, calculate the acceleration of the blocks in m s⁻², to 3 significant figures.",
          answer: { type: "number", value: 2.45, tolerance: 0.03, display: "2.45 m s⁻²" },
          traps: [
            { spec: { type: "number", value: 3.92, tolerance: 0.04 }, feedback: "3.92 m s⁻² ignores dynamic friction on the 6.0 kg block." },
            { spec: { type: "number", value: 6.13, tolerance: 0.06 }, feedback: "Remember the whole system has total mass 6.0 + 4.0 = 10.0 kg, not just 4.0 kg!" },
          ],
          hints: [
            "Compute dynamic friction on the bench block: F_f = μ_d m_1 g.",
            "Treat both blocks as one system of mass 10.0 kg driven by hanging weight m_2 g minus friction F_f.",
          ],
          solution: [
            "Dynamic friction on bench block: {{F_f = 0.25 * 6.0 * 9.81 = 14.72}} N.",
            "Driving weight of hanging mass: {{m_2 g = 4.0 * 9.81 = 39.24}} N.",
            "Net system force {{F_net = 39.24 - 14.72 = 24.53}} N over total mass {{10.0}} kg ⇒ {{a = 24.53 / 10.0 = 2.45}} m s⁻².",
          ],
        },
        {
          id: "a1-mechanics-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "forces-newton-friction",
          strategy: "Apparent weight with buoyancy",
          question:
            "A solid aluminium cylinder of density {{2700}} kg m⁻³ and volume {{5.0 * 10^(-4)}} m³ hangs motionless from a newton-meter while fully immersed in water of density {{1000}} kg m⁻³ ({{g = 9.81}} m s⁻²). Calculate the tension reading on the newton-meter in newtons, to 3 significant figures.",
          answer: { type: "number", value: 8.34, tolerance: 0.06, display: "8.34 N" },
          traps: [
            { spec: { type: "number", value: 13.2, tolerance: 0.1 }, feedback: "13.2 N is the cylinder's weight in air — subtract the upward water buoyancy force F_b." },
            { spec: { type: "number", value: 4.91, tolerance: 0.05 }, feedback: "4.91 N is the buoyancy force itself — equilibrium gives T = mg − F_b." },
          ],
          hints: [
            "Calculate cylinder weight mg = ρ_Al V g and upward buoyancy F_b = ρ_water V g.",
            "In equilibrium, T + F_b = mg, so T = mg − F_b.",
          ],
          solution: [
            "Cylinder weight: {{mg = 2700 * (5.0 * 10^(-4)) * 9.81 = 13.24}} N.",
            "Upward buoyancy: {{F_b = 1000 * (5.0 * 10^(-4)) * 9.81 = 4.905}} N.",
            "Spring-balance tension: {{T = 13.24 - 4.905 = 8.34}} N.",
          ],
        },
        {
          id: "a1-mechanics-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "forces-newton-friction",
          strategy: "Critical slip angle & static-to-dynamic jump",
          marks: 4,
          question:
            "Two crates of the same wood — one empty and one packed with books — rest side by side on a hinged ramp whose angle {{θ}} is slowly raised. Explain why both crates begin to slip at the exact same angle {{θ_c}}, and why they accelerate immediately once sliding starts.",
          hints: [
            "Write the downhill weight component and maximum static friction expression in terms of m, g, θ and μ_s.",
            "Show mathematically why mass cancels when solving for θ_c.",
            "Compare μ_d and μ_s once motion starts.",
          ],
          modelAnswer:
            "Just before slipping, the downhill weight component mg sin θ_c balances maximum static friction μ_s F_N = μ_s mg cos θ_c. Cancelling mass m and g from both sides yields tan θ_c = μ_s, which depends solely on the surface materials and not on crate mass, so both start sliding together. Once sliding begins, static friction gives way to dynamic friction μ_d mg cos θ_c. Because μ_d is strictly less than μ_s, the resistive friction suddenly drops below mg sin θ_c, creating a non-zero downhill net force that accelerates the crates.",
          markScheme: [
            {
              point: "At impending motion, downhill component mg sin θ_c equals maximum static friction μ_s mg cos θ_c.",
              keywords: ["mg sin", "μ_s mg cos", "maximum static friction"],
            },
            {
              point: "Mass m (and g) cancels out, leaving tan θ_c = μ_s independent of mass.",
              keywords: ["cancelling mass", "tan θ_c = μ_s", "independent of mass", "not on crate mass"],
            },
            {
              point: "Once sliding begins, dynamic friction μ_d F_N replaces static friction.",
              keywords: ["dynamic friction", "gives way to dynamic"],
            },
            {
              point: "Since μ_d < μ_s, friction becomes smaller than mg sin θ_c, giving a non-zero net downhill force and acceleration.",
              keywords: ["strictly less than μ_s", "μ_d < μ_s", "non-zero downhill net force", "drops below"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid explanation or claims heavier crate slips first." },
            { band: "1–2", marks: [1, 2], descriptor: "States mass cancels OR notes μ_d < μ_s, without complete derivation of tan θ_c = μ_s or net force link." },
            { band: "3–4", marks: [3, 4], descriptor: "Derives tan θ_c = μ_s showing mass cancellation clearly, and links the drop from μ_s to μ_d directly to a resultant downhill force." },
          ],
        },
        {
          id: "a1-mechanics-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "momentum-circular",
          strategy: "2D vector momentum conservation",
          question:
            "On a frictionless air table, a {{0.30}} kg puck moving due east at {{4.0}} m s⁻¹ strikes an identical stationary {{0.30}} kg puck. After collision, the first puck moves at {{2.4}} m s⁻¹ at {{53.1°}} north of east ({{sin 53.1° = 0.800}}, {{cos 53.1° = 0.600}}). Calculate the speed of the second puck after impact, in m s⁻¹ to 3 significant figures.",
          answer: { type: "number", value: 3.2, tolerance: 0.03, display: "3.20 m s⁻¹" },
          traps: [
            { spec: { type: "number", value: 1.6, tolerance: 0.03 }, feedback: "You subtracted speeds linearly (4.0 − 2.4) — momentum is a 2D vector, so resolve into east and north components!" },
          ],
          hints: [
            "Since both pucks have identical mass 0.30 kg, mass cancels out of both x and y momentum equations.",
            "East: 4.0 = 2.4 cos 53.1° + v_2x. North: 0 = 2.4 sin 53.1° + v_2y.",
            "Combine perpendicular components via Pythagoras: v_2 = √(v_2x² + v_2y²).",
          ],
          solution: [
            "Equal masses cancel. East component: {{v_2x = 4.0 - 2.4(0.600) = 4.0 - 1.44 = 2.56}} m s⁻¹.",
            "North component: {{v_2y = 0 - 2.4(0.800) = -1.92}} m s⁻¹ (south).",
            "Resultant speed: {{v_2 = sqrt(2.56^2 + (-1.92)^2) = sqrt(6.5536 + 3.6864) = sqrt(10.24) = 3.20}} m s⁻¹.",
          ],
        },
        {
          id: "a1-mechanics-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "momentum-circular",
          strategy: "Vertical circular loop (top)",
          question:
            "A {{500}} kg roller-coaster car passes upside-down through the top of a vertical circular loop of radius {{10.0}} m at {{14.0}} m s⁻¹ ({{g = 9.81}} m s⁻²). Calculate the downward normal reaction force exerted by the rails on the car at the top, in newtons to 3 significant figures.",
          answer: { type: "number", value: 4900, tolerance: 15, display: "4900 N" },
          traps: [
            { spec: { type: "number", value: 14700, tolerance: 50 }, feedback: "At the TOP of a loop, both F_N and weight mg point downwards toward the centre, so F_N = mv²/r − mg (not + mg!)." },
            { spec: { type: "number", value: 9800, tolerance: 20 }, feedback: "9800 N is the total centripetal force mv²/r — subtract weight mg = 4905 N to find the track's normal force." },
          ],
          hints: [
            "At the top of the loop, both weight mg and track normal force F_N point downwards toward the loop centre.",
            "Write F_N + mg = mv²/r and solve for F_N.",
          ],
          solution: [
            "Required centripetal force: {{F_c = (500 * 14.0^2) / 10.0 = 9800}} N.",
            "Weight of car: {{mg = 500 * 9.81 = 4905}} N.",
            "Downward normal reaction: {{F_N = 9800 - 4905 = 4895}} N ≈ 4900 N.",
          ],
        },
        {
          id: "a1-mechanics-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "momentum-circular",
          strategy: "Circular acceleration & inertia on string snap",
          marks: 3,
          question:
            "A rubber bung on a string is whirled in a horizontal circle at steady speed above a student's head. Explain why the bung is accelerating despite its constant speed, and describe its horizontal path immediately after the string snaps.",
          hints: [
            "Distinguish speed (scalar) from velocity (vector).",
            "Link changing velocity direction to centripetal acceleration directed toward the centre.",
            "Apply Newton's first law the instant tension drops to zero.",
          ],
          modelAnswer:
            "Velocity is a vector comprising both speed and direction; because the bung's direction of travel changes continuously around the circle, its velocity changes continuously. Since acceleration is the rate of change of velocity, the bung experiences a continuous inward centripetal acceleration toward the centre. The instant the string snaps, the inward tension vanishes so net horizontal force becomes zero; by Newton's first law, the bung continues in a straight line along the tangent to the circle (not radially outwards).",
          markScheme: [
            {
              point: "Velocity is a vector whose direction changes continuously, so velocity is changing despite constant speed.",
              keywords: ["vector", "direction of travel changes", "direction changes"],
            },
            {
              point: "Changing velocity implies a non-zero inward centripetal acceleration directed toward the circle centre.",
              keywords: ["centripetal acceleration", "inward", "toward the centre"],
            },
            {
              point: "When the string snaps, horizontal net force becomes zero so by inertia / Newton's 1st law it moves in a straight line along the tangent.",
              keywords: ["tangent", "straight line", "newton's first law"],
            },
          ],
        },
        {
          id: "a1-mechanics-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "momentum-circular",
          strategy: "Conical pendulum geometry",
          question:
            "A {{0.25}} kg brass bob hangs from a {{0.80}} m light string and swings as a conical pendulum with the string inclined at {{36.9°}} to the vertical ({{sin 36.9° = 0.600}}, {{cos 36.9° = 0.800}}, {{g = 9.81}} m s⁻²). Calculate the horizontal speed of the bob in m s⁻¹, to 3 significant figures.",
          answer: { type: "number", value: 1.88, tolerance: 0.02, display: "1.88 m s⁻¹" },
          traps: [
            { spec: { type: "number", value: 2.43, tolerance: 0.03 }, feedback: "Watch the radius! The circular path radius is r = L sin 36.9° = 0.480 m, NOT the full string length 0.80 m." },
          ],
          hints: [
            "First find the horizontal circle radius r = L sin 36.9°.",
            "From T cos θ = mg and T sin θ = mv²/r, eliminate T to obtain v = √(g r tan θ).",
          ],
          solution: [
            "Circle radius: {{r = L sin 36.9° = 0.80 * 0.600 = 0.480}} m, and {{tan 36.9° = 0.600 / 0.800 = 0.750}}.",
            "Conical pendulum relation: {{v = sqrt(g r tan θ) = sqrt(9.81 * 0.480 * 0.750) = sqrt(3.532) = 1.88}} m s⁻¹.",
          ],
        },
        {
          id: "a1-mechanics-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "work-energy-power",
          strategy: "Pendulum energy conservation",
          question:
            "A {{0.20}} kg pendulum bob on a {{1.25}} m string is pulled aside until the string makes an angle of {{60°}} to the vertical and released from rest ({{g = 9.81}} m s⁻², negligible drag). Calculate the bob's speed as it swings through the lowest point, in m s⁻¹ to 3 significant figures.",
          answer: { type: "number", value: 3.5, tolerance: 0.03, display: "3.50 m s⁻¹" },
          traps: [
            { spec: { type: "number", value: 4.95, tolerance: 0.05 }, feedback: "The vertical drop is h = L(1 − cos 60°) = 0.625 m, not the full length 1.25 m." },
          ],
          hints: [
            "Find the vertical drop h = L − L cos 60° = L(1 − cos 60°).",
            "Equate mgh = ½mv² to get v = √(2gh).",
          ],
          solution: [
            "Vertical drop: {{h = 1.25(1 - cos 60°) = 1.25 * 0.50 = 0.625}} m.",
            "By conservation of mechanical energy: {{v = sqrt(2gh) = sqrt(2 * 9.81 * 0.625) = sqrt(12.26) = 3.50}} m s⁻¹.",
          ],
        },
        {
          id: "a1-mechanics-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "work-energy-power",
          strategy: "Inclined-road power and drivetrain efficiency",
          question:
            "A {{1200}} kg electric van drives up a straight road inclined at {{5.74°}} ({{sin 5.74° = 0.100}}) at a steady speed of {{15.0}} m s⁻¹ against a constant resistive drag of {{420}} N ({{g = 9.81}} m s⁻²). If the drivetrain efficiency is {{80%}}, calculate the electrical input power drawn from the battery in kilowatts (kW), to 3 significant figures.",
          answer: { type: "number", value: 29.9, tolerance: 0.25, display: "29.9 kW" },
          traps: [
            { spec: { type: "number", value: 24.0, tolerance: 0.2 }, feedback: "24.0 kW is the useful mechanical output power — divide by efficiency 0.80 to get battery input power." },
            { spec: { type: "number", value: 19.2, tolerance: 0.2 }, feedback: "Electrical input power must be LARGER than useful mechanical output power: divide by 0.80 rather than multiplying." },
          ],
          hints: [
            "At steady speed up a hill, F_drive = F_drag + mg sin 5.74°.",
            "Compute useful output power P_out = F_drive v, then divide by 0.80 for electrical input power.",
          ],
          solution: [
            "Downhill weight component: {{mg sin 5.74° = 1200 * 9.81 * 0.100 = 1177.2}} N.",
            "Required driving force: {{F_drive = 1177.2 + 420 = 1597.2}} N.",
            "Useful output power: {{P_out = 1597.2 * 15.0 = 23 958}} W = 23.96 kW.",
            "Electrical input power: {{P_in = 23.96 / 0.80 = 29.95}} kW ≈ 29.9 kW.",
          ],
        },
        {
          id: "a1-mechanics-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "work-energy-power",
          strategy: "Work–energy theorem in circular orbits",
          marks: 3,
          question:
            "A weather satellite orbits Earth in a circular path under gravity. Explain why Earth's gravitational force does zero work on the satellite, and deduce what this implies for the satellite's kinetic energy and orbital speed.",
          hints: [
            "State the angle between the radially inward gravitational force and the tangential displacement.",
            "Apply W = Fs cos θ.",
            "Connect W_net = ΔE_k to kinetic energy and speed.",
          ],
          modelAnswer:
            "In a circular orbit, gravity acts radially inwards toward Earth's centre while the satellite's instantaneous displacement is always tangential to the circle, making the angle between them exactly 90°. From W = Fs cos 90° = 0, gravity transfers zero mechanical work to the satellite. By the work–energy theorem (W_net = ΔE_k = 0), the satellite's kinetic energy remains constant, meaning its orbital speed stays uniform.",
          markScheme: [
            {
              point: "Gravitational force acts radially inwards, perpendicular (90°) to the tangential displacement/velocity.",
              keywords: ["radially inwards", "tangential", "90°", "perpendicular"],
            },
            {
              point: "From W = Fs cos θ with cos 90° = 0, no mechanical work is done.",
              keywords: ["cos 90", "w = fs cos", "zero mechanical work"],
            },
            {
              point: "By the work–energy theorem (ΔE_k = 0), kinetic energy and therefore orbital speed remain constant.",
              keywords: ["work-energy", "remains constant", "stays uniform", "δe_k = 0"],
            },
          ],
        },
        {
          id: "a1-mechanics-p2-q14",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "work-energy-power",
          strategy: "Kinetic-to-elastic energy conversion",
          question:
            "A {{0.50}} kg block slides along a frictionless horizontal surface at {{4.0}} m s⁻¹ and strikes a light horizontal buffer spring of spring constant {{200}} N m⁻¹, compressing it until the block momentarily comes to rest. Calculate the maximum compression of the spring, in metres.",
          answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20 m" },
          traps: [
            { spec: { type: "number", value: 0.04, tolerance: 0.002 }, feedback: "Remember to take the square root of x² = 0.04 m²!" },
          ],
          hints: [
            "Equate initial kinetic energy ½mv² to maximum elastic potential energy ½kx².",
            "Solve x = v √(m/k).",
          ],
          solution: [
            "Initial kinetic energy: {{E_k = (1/2)(0.50)(4.0)^2 = 4.00}} J.",
            "Equate to elastic PE: {{(1/2)(200) x^2 = 4.00}} ⇒ {{100 x^2 = 4.00}} ⇒ {{x^2 = 0.040}} ⇒ {{x = 0.20}} m.",
          ],
        },
        {
          id: "a1-mechanics-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "work-energy-power",
          strategy: "Two-stage ballistic pendulum synthesis",
          marks: 6,
          question:
            "A {{0.020}} kg bullet travelling horizontally at {{400}} m s⁻¹ embeds itself into a stationary {{1.98}} kg wooden pendulum block suspended by light strings ({{g = 9.81}} m s⁻²). Analyse the two stages — (i) the embedding impact and (ii) the subsequent upward swing — by stating which conservation law applies to each stage, calculating the speed immediately after impact and the maximum vertical rise {{h}}, and explaining why mechanical energy cannot be conserved across stage (i).",
          hints: [
            "Stage (i) is a very brief completely inelastic collision: momentum is conserved, NOT kinetic energy.",
            "Compute combined velocity v = (0.020 × 400) / (0.020 + 1.98).",
            "Stage (ii) has only gravity doing work (string tension is perpendicular to velocity): conserve mechanical energy ½Mv² = Mgh.",
            "Compare initial bullet KE (1600 J) with post-impact KE (16 J) to show why energy is dissipated during embedding.",
          ],
          modelAnswer:
            "Stage (i) is a brief isolated horizontal impact where net external horizontal impulse is negligible, so linear momentum is conserved: (0.020)(400) = (0.020 + 1.98)v, giving 8.00 = 2.00v and post-impact speed v = 4.00 m s⁻¹. Kinetic energy is NOT conserved during embedding because friction and plastic wood deformation convert 99% of initial kinetic energy (1600 J down to 16.0 J, losing 1584 J) into thermal energy and sound. In stage (ii), once embedded, string tension acts perpendicular to motion and does zero work; neglecting air drag, mechanical energy is conserved as the block swings upward. Equating ½Mv² = Mgh yields h = v²/(2g) = 16.0 / (2 × 9.81) = 0.816 m.",
          markScheme: [
            {
              point: "Stage (i): linear momentum is conserved during the rapid horizontal impact.",
              keywords: ["linear momentum is conserved", "momentum is conserved"],
            },
            {
              point: "Calculates combined speed immediately after impact: v = 8.00 / 2.00 = 4.00 m s⁻¹.",
              keywords: ["4.00", "4 m s"],
            },
            {
              point: "Explains that stage (i) is completely inelastic — friction/deformation dissipates kinetic energy into heat and sound.",
              keywords: ["deformation", "thermal energy", "1584", "99%"],
            },
            {
              point: "Stage (ii): mechanical energy is conserved during the swing (string tension perpendicular to motion does zero work).",
              keywords: ["mechanical energy is conserved", "tension acts perpendicular"],
            },
            {
              point: "Equates kinetic energy after impact to gravitational PE at peak: ½Mv² = Mgh (or h = v²/2g).",
              keywords: ["mgh", "v^2/(2g)", "v²/(2g)"],
            },
            {
              point: "Calculates maximum vertical rise h = 16.0 / 19.62 = 0.816 m (accept 0.82 m).",
              keywords: ["0.816", "0.82"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Attempts to equate initial bullet kinetic energy directly to Mgh without momentum conservation." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies momentum conservation in stage (i) and finds v = 4.0 m s⁻¹, but confuses energy laws or miscomputes height." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly applies momentum conservation in stage (i) and mechanical energy conservation in stage (ii) to get h ≈ 0.816 m, with partial explanation of energy dissipation." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete two-stage analysis with exact values (v = 4.00 m s⁻¹, h = 0.816 m), clear physical justification of why KE is lost in stage (i) (1584 J to heat/deformation) and why tension does zero work in stage (ii)." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 stretch IB problems, ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "a1-mechanics-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "kinematics-projectiles",
      strategy: "2D projectile wall-impact height",
      question:
        "A stone is launched from ground level at {{25.0}} m s⁻¹ at {{36.9°}} above the horizontal ({{sin 36.9° = 0.600}}, {{cos 36.9° = 0.800}}) directly toward a tall vertical wall {{40.0}} m away ({{g = 9.81}} m s⁻², no air resistance). Calculate the height above ground at which the stone hits the wall in metres, to 3 significant figures.",
      answer: { type: "number", value: 10.4, tolerance: 0.1, display: "10.4 m" },
      traps: [
        { spec: { type: "number", value: 11.5, tolerance: 0.15 }, feedback: "11.5 m is the maximum height — check whether the stone is past its peak when it reaches x = 40.0 m!" },
      ],
      hints: [
        "Use horizontal motion (x = u_x t) first to find the exact time t when the stone reaches the wall.",
        "Substitute that time into y = u_y t − ½gt².",
      ],
      solution: [
        "{{u_x = 25.0(0.800) = 20.0}} m s⁻¹ and {{u_y = 25.0(0.600) = 15.0}} m s⁻¹.",
        "Time to reach the wall: {{t = 40.0 / 20.0 = 2.00}} s.",
        "Height at {{t = 2.00}} s: {{y = 15.0(2.00) - (1/2)(9.81)(2.00)^2 = 30.0 - 19.62 = 10.38}} m ≈ 10.4 m.",
      ],
    },
    {
      id: "a1-mechanics-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "forces-newton-friction",
      strategy: "Stacked-block static friction limit",
      question:
        "Block A ({{3.0}} kg) rests on top of Block B ({{5.0}} kg), which sits on a **frictionless** horizontal floor. The coefficient of static friction between A and B is {{μ_s = 0.40}} ({{g = 9.81}} m s⁻²). A horizontal pulling force {{F}} is applied to the lower Block B. Calculate the maximum force {{F}} in newtons before Block A starts slipping relative to Block B, to 3 significant figures.",
      answer: { type: "number", value: 31.4, tolerance: 0.2, display: "31.4 N" },
      traps: [
        { spec: { type: "number", value: 11.8, tolerance: 0.15 }, feedback: "11.8 N is the maximum friction force on Block A alone — external force F must accelerate BOTH blocks together (8.0 kg)!" },
      ],
      hints: [
        "Isolate the upper Block A: static friction from B is the ONLY horizontal force accelerating A.",
        "Find A's maximum possible acceleration a_max = F_s,max / m_A = μ_s g.",
        "Apply F = (m_A + m_B) a_max to the combined system.",
      ],
      solution: [
        "Maximum static friction on A: {{F_s,max = μ_s m_A g = 0.40 * 3.0 * 9.81 = 11.77}} N.",
        "Maximum acceleration before slip: {{a_max = 11.77 / 3.0 = 3.924}} m s⁻².",
        "External force required to accelerate both blocks at {{a_max}}: {{F_max = (3.0 + 5.0) * 3.924 = 31.39}} N ≈ 31.4 N.",
      ],
    },
    {
      id: "a1-mechanics-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "forces-newton-friction",
      strategy: "Uphill deceleration with gravity + friction",
      question:
        "A {{2.0}} kg block is launched **up** a rough ramp inclined at {{30.0°}} to the horizontal ({{μ_d = 0.20}}, {{g = 9.81}} m s⁻²) with an initial speed of {{6.00}} m s⁻¹. Calculate the distance it slides up the ramp before momentarily coming to rest, in metres to 3 significant figures.",
      answer: { type: "number", value: 2.73, tolerance: 0.03, display: "2.73 m" },
      traps: [
        { spec: { type: "number", value: 5.61, tolerance: 0.06 }, feedback: "Careful with friction direction! Going UP the slope, BOTH mg sin 30° and dynamic friction act DOWN the slope — add them." },
        { spec: { type: "number", value: 3.67, tolerance: 0.04 }, feedback: "3.67 m ignores friction on the ramp." },
      ],
      hints: [
        "Draw an FBD while the block is moving UP the ramp: which way does friction point?",
        "Both mg sin 30° and μ_d mg cos 30° oppose motion down the slope, giving a = −g(sin 30° + μ_d cos 30°).",
        "Use v² = u² + 2as with v = 0 (or energy conservation ½mu² = mgs sin 30° + μ_d mg s cos 30°).",
      ],
      solution: [
        "Magnitude of deceleration down the slope: {{a = 9.81(sin 30.0° + 0.20 cos 30.0°) = 9.81(0.500 + 0.1732) = 6.604}} m s⁻².",
        "Stopping distance along ramp: {{s = u^2 / (2a) = 6.00^2 / (2 * 6.604) = 36.0 / 13.21 = 2.73}} m.",
      ],
    },
    {
      id: "a1-mechanics-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "momentum-circular",
      strategy: "Simultaneous momentum & KE conservation (elastic)",
      question:
        "A {{0.50}} kg puck sliding right at {{5.0}} m s⁻¹ collides head-on and **elastically** with a stationary {{1.50}} kg puck on a frictionless air table. Calculate the speed of the {{1.50}} kg puck immediately after impact, in m s⁻¹.",
      answer: { type: "number", value: 2.5, tolerance: 0.02, display: "2.50 m s⁻¹" },
      traps: [
        { spec: { type: "number", value: 1.25, tolerance: 0.02 }, feedback: "1.25 m s⁻¹ is the speed if they stuck together (completely inelastic) — here the collision is ELASTIC!" },
      ],
      hints: [
        "Write BOTH conservation of momentum (0.50(5.0) = 0.50 v_1 + 1.50 v_2) AND conservation of kinetic energy.",
        "For a 1D elastic collision, relative speed of separation equals relative speed of approach: v_2 − v_1 = u_1 = 5.0.",
        "Substitute v_1 = v_2 − 5.0 into the momentum equation and solve for v_2.",
      ],
      solution: [
        "Momentum: {{2.50 = 0.50 v_1 + 1.50 v_2}} ⇒ {{5.0 = v_1 + 3 v_2}}.",
        "Elastic relative-velocity condition: {{v_2 - v_1 = 5.0}} ⇒ {{v_1 = v_2 - 5.0}}.",
        "Substitute: {{5.0 = (v_2 - 5.0) + 3 v_2 = 4 v_2 - 5.0}} ⇒ {{4 v_2 = 10.0}} ⇒ {{v_2 = 2.50}} m s⁻¹ (and {{v_1 = -2.50}} m s⁻¹).",
      ],
    },
    {
      id: "a1-mechanics-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "momentum-circular",
      strategy: "Banked circular curve without friction",
      question:
        "A circular racing bend of radius {{80.0}} m is banked at {{20.0°}} to the horizontal ({{tan 20.0° = 0.3640}}, {{g = 9.81}} m s⁻²). Calculate the ideal design speed in m s⁻¹ (to 3 significant figures) at which a car rounds the bend with **zero** sideways friction force.",
      answer: { type: "number", value: 16.9, tolerance: 0.15, display: "16.9 m s⁻¹" },
      traps: [
        { spec: { type: "number", value: 286, tolerance: 2 }, feedback: "Remember to take the square root of v² = gr tan θ!" },
      ],
      hints: [
        "Resolve the normal force F_N vertically (F_N cos θ = mg) and horizontally toward the centre of the circle (F_N sin θ = mv²/r).",
        "Divide the two equations to eliminate F_N and m, giving v = √(gr tan θ).",
      ],
      solution: [
        "Vertical equilibrium: {{F_N cos 20.0° = mg}}. Horizontal centripetal force: {{F_N sin 20.0° = (m v^2)/r}}.",
        "Dividing yields {{tan 20.0° = v^2 / (g r)}} ⇒ {{v = sqrt(9.81 * 80.0 * 0.3640) = sqrt(285.7) = 16.9}} m s⁻¹.",
      ],
    },
    {
      id: "a1-mechanics-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "work-energy-power",
      strategy: "Vertical loop + mechanical energy conservation",
      question:
        "A small frictionless block is released from rest at height {{h}} above the bottom of a vertical circular loop-the-loop of radius {{R = 2.00}} m. Calculate the minimum release height {{h}} in metres so the block stays in contact with the track all the way over the top of the loop.",
      answer: { type: "number", value: 5, tolerance: 0.05, display: "5.00 m" },
      traps: [
        { spec: { type: "number", value: 4, tolerance: 0.05 }, feedback: "Releasing from h = 2R = 4.00 m gives ZERO speed at the top, so the bead falls off before reaching the summit!" },
      ],
      hints: [
        "At the top of the loop (height 2R), staying in contact requires v_top² ≥ gR (from mg = mv²/R when F_N = 0).",
        "Apply conservation of mechanical energy between release height h and the top of the loop: mgh = mg(2R) + ½mv_top².",
      ],
      solution: [
        "Minimum speed at top of loop (height {{2R}}): {{v_top^2 = g R}}.",
        "Energy conservation: {{m g h = m g (2R) + (1/2) m (g R) = 2.5 m g R}}.",
        "Hence {{h = 2.5 R = 2.5 * 2.00 = 5.00}} m.",
      ],
    },
    {
      id: "a1-mechanics-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Derive",
      guideRef: "work-energy-power",
      strategy: "Dynamic overshoot of a dropped spring mass",
      marks: 5,
      question:
        "A light vertical spring of spring constant {{k}} hangs at its natural length. A mass {{m}} is attached to its lower end and released from rest from that unstretched position. Derive an expression for the maximum downward extension {{x_max}} reached, and explain physically why {{x_max}} is twice the static equilibrium extension {{x_eq = mg/k}}.",
      hints: [
        "Identify the velocity of the mass at release (x = 0) and at maximum extension (x = x_max).",
        "Apply conservation of mechanical energy equating loss in GPE to gain in elastic PE.",
        "Explain what the mass's speed and acceleration are as it passes x_eq on the way down.",
      ],
      modelAnswer:
        "At release (x = 0) and at the lowest turning point (x = x_max), the mass is momentarily stationary so kinetic energy is zero at both endpoints. By conservation of mechanical energy, the gravitational potential energy lost equals the elastic potential energy stored: mg x_max = ½ k x_max². Dividing by non-zero x_max gives x_max = 2mg/k, which is exactly 2 x_eq. Physically, from x = 0 down to x_eq weight exceeds upward spring tension, so the mass accelerates downward and passes through x_eq at maximum speed with substantial kinetic energy. Below x_eq, upward tension exceeds weight and decelerates the mass until all of that kinetic energy converts into additional elastic energy at the turnaround point 2 x_eq.",
      markScheme: [
        {
          point: "Recognises kinetic energy is zero at both release (x = 0) and lowest turning point (x = x_max).",
          keywords: ["momentarily stationary", "zero at both", "turning point"],
        },
        {
          point: "Equates loss of gravitational PE to gain in elastic PE: mg x_max = ½ k x_max².",
          keywords: ["mg x_max = ½ k", "½ k x_max", "0.5 k x_max"],
        },
        {
          point: "Solves for x_max = 2mg/k = 2 x_eq.",
          keywords: ["2mg/k", "2 x_eq"],
        },
        {
          point: "Explains that between 0 and x_eq, weight exceeds tension so the mass accelerates and arrives at x_eq with maximum speed / kinetic energy.",
          keywords: ["weight exceeds", "maximum speed", "substantial kinetic energy"],
        },
        {
          point: "Explains overshoot below x_eq: tension exceeds weight to decelerate the mass until kinetic energy is converted to elastic energy.",
          keywords: ["tension exceeds weight", "decelerates", "additional elastic"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Only uses Hooke's law mg = kx and concludes x_max = mg/k." },
        { band: "1–2", marks: [1, 2], descriptor: "Sets up energy conservation to get 2mg/k OR gives a vague qualitative mention of momentum/overshoot, but not both." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly derives x_max = 2mg/k from energy conservation and explains that the mass passes x_eq moving downwards before decelerating." },
        { band: "5", marks: [5, 5], descriptor: "Rigorous derivation (v = 0 at endpoints, mg x_max = ½kx_max² ⇒ 2mg/k) paired with full force-and-energy explanation of acceleration above x_eq and deceleration below x_eq." },
      ],
    },
    {
      id: "a1-mechanics-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "kinematics-projectiles",
      strategy: "Fluid drag vs mass in real free fall",
      marks: 5,
      question:
        "Two spheres of identical diameter and surface texture are dropped simultaneously from a {{100}} m tower in air: Sphere P is solid steel ({{2.0}} kg) and Sphere Q is hollow plastic ({{0.20}} kg). Evaluate a student's statement: 'Because free-fall acceleration is independent of mass, both spheres must hit the ground at the exact same instant.'",
      hints: [
        "State under what idealised condition the student's statement IS valid.",
        "Compare the air drag force F_d on both spheres when moving at the same speed.",
        "Write Newton's second law a = (mg − F_d)/m = g − F_d/m and compare F_d/m for P vs Q.",
        "Compare their terminal velocities and conclude which sphere lands first.",
      ],
      modelAnswer:
        "The student's statement is valid only in a vacuum where air resistance is zero and a = mg/m = g for all masses; in real air over a 100 m drop, the claim is incorrect. Because both spheres have identical size and shape, at any common speed v they experience the same upward drag force F_d. By Newton's second law, downward acceleration is a = (mg − F_d)/m = g − F_d/m. Since the hollow plastic sphere Q has ten times smaller mass, its deceleration term F_d/m is ten times larger, so its downward acceleration drops far more rapidly. Furthermore, Q reaches terminal velocity (where F_d = mg) at a much lower speed than steel sphere P, so P maintains a higher average speed and strikes the ground significantly earlier.",
      markScheme: [
        {
          point: "Judges the claim incorrect in air, noting mass-independence holds only in vacuum (negligible drag).",
          keywords: ["valid only in a vacuum", "claim is incorrect", "only in vacuum"],
        },
        {
          point: "Notes identical diameter/shape means both experience equal drag force F_d at the same instantaneous speed.",
          keywords: ["same upward drag", "equal drag", "identical size"],
        },
        {
          point: "Derives or applies a = g − F_d/m from Newton's second law.",
          keywords: ["g - f_d/m", "(mg - f_d)/m"],
        },
        {
          point: "Deduces smaller mass Q has a much larger drag deceleration term F_d/m and reaches a lower terminal velocity sooner.",
          keywords: ["ten times larger", "lower speed", "terminal velocity", "much lower"],
        },
        {
          point: "Concludes solid steel sphere P maintains greater downward speed and hits the ground earlier than Q.",
          keywords: ["significantly earlier", "hits the ground earlier", "lands first", "higher average speed"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Agrees with the student or claims heavier objects always have greater gravitational acceleration even in vacuum." },
        { band: "1–2", marks: [1, 2], descriptor: "States steel sphere lands first due to air resistance, without comparing F_d/m or terminal velocity." },
        { band: "3–4", marks: [3, 4], descriptor: "Distinguishes vacuum vs air, compares equal drag at equal speed and links mass difference to acceleration or terminal speed." },
        { band: "5", marks: [5, 5], descriptor: "Complete evaluation: vacuum validity condition, equal F_d(v) from identical geometry, explicit a = g − F_d/m comparison, lower terminal velocity of Q, and clear conclusion that P arrives first." },
      ],
    },
  ],
};
