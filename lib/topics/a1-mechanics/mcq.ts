import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: FOUNDATIONS & CORE CONCEPTS (answerIndex spread: 4, 4, 4, 3)
  // ===========================================================================
  {
    id: "a1-mechanics-m1",
    title: "Paper 1A · Set 1 — Foundations & Core Concepts",
    level: "SL",
    questions: [
      {
        id: "a1-mechanics-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "kinematics-projectiles",
        strategy: "SUVAT (average velocity)",
        question:
          "A cyclist accelerates uniformly from {{4.0}} m s⁻¹ to {{12.0}} m s⁻¹ in {{4.0}} s along a straight road. What distance does the cyclist travel during this interval?",
        options: ["32 m", "16 m", "24 m", "48 m"],
        answerIndex: 0,
        hints: [
          "List the known SUVAT quantities: u = 4.0 m s⁻¹, v = 12.0 m s⁻¹, t = 4.0 s, and you want s.",
          "Acceleration is neither given nor needed, so use s = ((u + v)/2)t.",
        ],
        explanation:
          "With constant acceleration, average velocity is {{(4.0 + 12.0)/2 = 8.0}} m s⁻¹, so {{s = 8.0 * 4.0 = 32}} m. Multiplying {{4.0 * 4.0 = 16}} m ignores the acceleration, and {{12.0 * 4.0 = 48}} m assumes the cyclist travelled at top speed the whole time.",
      },
      {
        id: "a1-mechanics-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "kinematics-projectiles",
        strategy: "Free-fall kinematics",
        question:
          "A stone is thrown vertically upwards in a vacuum near Earth's surface. At the very highest point of its flight, what are the magnitudes of its velocity and acceleration?",
        options: [
          "Velocity 0 m s⁻¹ and acceleration 0 m s⁻²",
          "Velocity 9.81 m s⁻¹ and acceleration 0 m s⁻²",
          "Velocity 0 m s⁻¹ and acceleration 9.81 m s⁻²",
          "Velocity 9.81 m s⁻¹ and acceleration 9.81 m s⁻²",
        ],
        answerIndex: 2,
        hints: [
          "At the turning point, vertical motion momentarily stops before reversing downwards.",
          "Does Earth's gravity switch off at the top of the throw?",
        ],
        explanation:
          "At the highest point the stone momentarily stops rising, so {{v = 0}}, yet weight {{mg}} still acts vertically downwards, giving constant downward acceleration {{g = 9.81}} m s⁻². Setting acceleration to zero at the peak would mean the stone could never start falling back down.",
      },
      {
        id: "a1-mechanics-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "kinematics-projectiles",
        strategy: "Independent 2D projectile components",
        question:
          "A ball is launched horizontally at {{15.0}} m s⁻¹ from a balcony {{19.62}} m above level ground (take {{g = 9.81}} m s⁻² and neglect air resistance). How far horizontally from the base of the balcony does the ball land?",
        options: ["15.0 m", "30.0 m", "45.0 m", "60.0 m"],
        answerIndex: 1,
        hints: [
          "Find the time of fall first using vertical motion with u_y = 0.",
          "Use s_y = ½gt² to find t, then compute horizontal range x = u_x t.",
        ],
        explanation:
          "Vertically: {{19.62 = (1/2)(9.81)t^2 = 4.905 t^2}}, so {{t^2 = 4.00}} and {{t = 2.00}} s. Horizontally, velocity stays constant at {{15.0}} m s⁻¹, giving {{x = 15.0 * 2.00 = 30.0}} m. Forgetting the factor of {{1/2}} gives {{t = 1.41}} s, while squaring {{t}} gives 60.0 m.",
      },
      {
        id: "a1-mechanics-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "kinematics-projectiles",
        strategy: "Qualitative fluid drag",
        question:
          "Compared with an ideal trajectory in a vacuum, how does air resistance alter the path of a ball launched obliquely from level ground?",
        options: [
          "Higher maximum height, longer horizontal range and steeper ascent",
          "Same maximum height, shorter horizontal range and symmetric curve",
          "Lower maximum height, longer horizontal range and gentler descent",
          "Lower maximum height, shorter horizontal range and steeper descent",
        ],
        answerIndex: 3,
        hints: [
          "Air drag always opposes the instantaneous velocity, removing mechanical energy throughout flight.",
          "Because horizontal speed continuously decreases, compare the steepness of the falling branch with the rising branch.",
        ],
        explanation:
          "Drag opposes upward motion (lowering peak height) and continuously reduces horizontal velocity (shortening range and making the final descent steeper than the launch ascent, breaking symmetry).",
      },
      {
        id: "a1-mechanics-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "forces-newton-friction",
        strategy: "Newton's 3rd Law pair test",
        question:
          "A wooden crate sits motionless on a rough horizontal floor. Which force is the Newton's third-law reaction pair to Earth's downward gravitational pull on the crate?",
        options: [
          "The upward gravitational pull of the crate on the Earth",
          "The upward normal contact force of the floor on the crate",
          "The downward normal contact force of the crate on the floor",
          "The horizontal static friction force of the floor on the crate",
        ],
        answerIndex: 0,
        hints: [
          "A Newton's third-law pair must be the SAME type of force acting on TWO DIFFERENT objects.",
          "Swap the roles of 'Earth' and 'crate' in the phrase 'gravitational pull of Earth on the crate'.",
        ],
        explanation:
          "Swapping the interacting bodies gives the upward gravitational pull of the crate on Earth — same force type (gravitational), equal magnitude, opposite direction, on different bodies. The floor's upward normal force acts on the same crate and is an electromagnetic contact force, not a third-law pair to gravity.",
      },
      {
        id: "a1-mechanics-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "forces-newton-friction",
        strategy: "Self-adjusting static friction",
        question:
          "A {{6.0}} kg block rests on a rough horizontal table where {{μ_s = 0.40}} and {{μ_d = 0.25}} ({{g = 9.81}} m s⁻²). A horizontal pull of {{18.0}} N is applied to the block. What is the magnitude of the friction force acting on the block?",
        options: ["14.7 N", "23.5 N", "18.0 N", "5.54 N"],
        answerIndex: 2,
        hints: [
          "First calculate the maximum possible static friction F_s,max = μ_s F_N.",
          "Compare the applied pull (18.0 N) with F_s,max to decide whether the block moves.",
        ],
        explanation:
          "Maximum static friction is {{F_s,max = 0.40 * 6.0 * 9.81 = 23.5}} N. Since the applied pull ({{18.0}} N) is less than {{23.5}} N, the block stays at rest in equilibrium, so static friction self-adjusts to match the pull at exactly {{18.0}} N (not 23.5 N, and not dynamic friction 14.7 N).",
      },
      {
        id: "a1-mechanics-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "forces-newton-friction",
        strategy: "Archimedes' principle",
        question:
          "A small solid sphere of volume {{4.0 * 10^(-4)}} m³ is completely submerged in water of density {{1000}} kg m⁻³ ({{g = 9.81}} m s⁻²). What is the magnitude of the upward buoyancy force acting on the sphere?",
        options: ["0.392 N", "3.92 N", "39.2 N", "0.400 N"],
        answerIndex: 1,
        hints: [
          "Use the IB Data Booklet buoyancy formula F_b = ρ V g.",
          "Be careful with powers of ten: 1000 × 4.0 × 10⁻⁴ = 0.40 kg of displaced water.",
        ],
        explanation:
          "Buoyancy equals the weight of displaced fluid: {{F_b = ρ V g = 1000 * 4.0 * 10^(-4) * 9.81 = 3.924}} N ≈ 3.92 N. Leaving out {{g}} gives 0.400 kg (a mass, not a force), and slipping a power of ten yields 0.392 N or 39.2 N.",
      },
      {
        id: "a1-mechanics-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "forces-newton-friction",
        strategy: "Inclined-plane force resolution",
        question:
          "A {{2.0}} kg block slides down a frictionless ramp inclined at {{30°}} to the horizontal ({{g = 9.81}} m s⁻²). What is the magnitude of the normal reaction force exerted by the ramp on the block?",
        options: ["9.81 N", "19.6 N", "11.3 N", "17.0 N"],
        answerIndex: 3,
        hints: [
          "There is no acceleration perpendicular to the ramp surface, so F_N balances the perpendicular component of weight.",
          "Resolve mg perpendicular to the slope: F_N = mg cos 30°.",
        ],
        explanation:
          "Perpendicular to the slope, {{F_N = m g cos 30° = 2.0 * 9.81 * 0.8660 = 16.99}} N ≈ 17.0 N. Using {{mg sin 30° = 9.81}} N finds the parallel downhill component instead of the normal force, and {{19.6}} N is the full vertical weight.",
      },
      {
        id: "a1-mechanics-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Vector sign in rebound impulse",
        question:
          "A {{0.50}} kg ball travelling horizontally at {{8.0}} m s⁻¹ strikes a rigid vertical wall perpendicularly and rebounds straight back at {{6.0}} m s⁻¹. What is the magnitude of the impulse exerted on the ball by the wall?",
        options: ["7.0 N s", "1.0 N s", "4.0 N s", "14 N s"],
        answerIndex: 0,
        hints: [
          "Velocity reverses direction on rebound — choose a positive direction so u and v have opposite signs.",
          "Compute J = Δp = m(v − u).",
        ],
        explanation:
          "Taking the rebound direction as positive gives {{u = -8.0}} m s⁻¹ and {{v = +6.0}} m s⁻¹, so {{J = 0.50 * (6.0 - (-8.0)) = 0.50 * 14.0 = 7.0}} N s. Subtracting speeds ({{0.50 * (8.0 - 6.0) = 1.0}} N s) forgets the vector direction reversal.",
      },
      {
        id: "a1-mechanics-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "1D conservation of linear momentum",
        question:
          "A {{3.0}} kg trolley moving right at {{4.0}} m s⁻¹ collides with and sticks to a stationary {{1.0}} kg trolley on a frictionless horizontal track. What is their common speed immediately after impact?",
        options: ["1.0 m s⁻¹", "2.0 m s⁻¹", "3.0 m s⁻¹", "4.0 m s⁻¹"],
        answerIndex: 2,
        hints: [
          "With no external horizontal force, total linear momentum is conserved.",
          "Set m_1 u_1 = (m_1 + m_2) v and solve for v.",
        ],
        explanation:
          "Total initial momentum is {{3.0 * 4.0 + 1.0 * 0 = 12.0}} kg m s⁻¹. After sticking together, the combined mass is {{4.0}} kg, so {{v = 12.0 / 4.0 = 3.0}} m s⁻¹. Dividing by 6 or forgetting the 3.0 kg mass produces the wrong speeds.",
      },
      {
        id: "a1-mechanics-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Centripetal force",
        question:
          "A stone of mass {{0.40}} kg is whirled in a horizontal circle of radius {{0.80}} m at a constant speed of {{4.0}} m s⁻¹. What is the magnitude of the resultant centripetal force acting on the stone?",
        options: ["2.0 N", "8.0 N", "16 N", "4.0 N"],
        answerIndex: 1,
        hints: [
          "Recall the centripetal force formula linking mass m, speed v and radius r.",
          "Substitute into F_c = mv²/r and make sure you square v.",
        ],
        explanation:
          "{{F_c = (m v^2)/r = (0.40 * 4.0^2)/0.80 = 6.4 / 0.80 = 8.0}} N. Forgetting to square {{v}} gives {{2.0}} N, while multiplying by {{r}} instead of dividing gives incorrect units and value.",
      },
      {
        id: "a1-mechanics-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "momentum-circular",
        strategy: "Uniform circular motion vectors",
        question:
          "A satellite moves around Earth in a uniform circular orbit at constant speed. Which statement about the satellite's motion is correct?",
        options: [
          "Its velocity is constant and its net acceleration is zero",
          "Its momentum is constant and centripetal force does work",
          "Its speed is constant and its net force acts tangentially",
          "Its speed is constant and its acceleration points inward",
        ],
        answerIndex: 3,
        hints: [
          "Velocity and momentum are vectors — do they stay constant when direction continuously turns?",
          "Centripetal force and acceleration point radially toward the centre of the circle, perpendicular to velocity.",
        ],
        explanation:
          "Because the direction of motion turns continuously, velocity and momentum change continuously even though speed is constant. The resultant gravitational force and centripetal acceleration always point radially inwards, doing zero work.",
      },
      {
        id: "a1-mechanics-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Work done at an angle",
        question:
          "A constant tension of {{50}} N pulls a suitcase {{10}} m across a horizontal floor along a strap angled at {{60°}} above the horizontal. How much mechanical work is done by the {{50}} N force?",
        options: ["250 J", "433 J", "500 J", "125 J"],
        answerIndex: 0,
        hints: [
          "Only the component of force parallel to displacement does mechanical work.",
          "Apply W = F s cos θ with θ = 60° (cos 60° = 0.50).",
        ],
        explanation:
          "{{W = F s cos 60° = 50 * 10 * 0.50 = 250}} J. Ignoring the angle gives {{500}} J, and mistakenly using {{sin 60°}} gives {{433}} J.",
      },
      {
        id: "a1-mechanics-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Elastic potential energy",
        question:
          "A Hookean spring of spring constant {{200}} N m⁻¹ is stretched by {{0.15}} m within its elastic limit. How much elastic potential energy is stored in the spring?",
        options: ["15.0 J", "4.50 J", "2.25 J", "30.0 J"],
        answerIndex: 2,
        hints: [
          "Elastic potential energy is the area under the triangular F–x graph: E_H = ½kΔx².",
          "Square Δx = 0.15 m first (0.0225 m²), then multiply by ½ × 200.",
        ],
        explanation:
          "{{E_H = (1/2) k Δx^2 = (1/2)(200)(0.15)^2 = 100 * 0.0225 = 2.25}} J. Omitting the {{1/2}} gives {{4.50}} J, while forgetting to square {{0.15}} gives {{15.0}} J.",
      },
      {
        id: "a1-mechanics-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Efficiency ratio",
        question:
          "An electric hoist motor draws {{800}} W of electrical power while raising a load at a useful mechanical output power of {{520}} W. What is the efficiency of the motor?",
        options: ["35%", "65%", "52%", "72%"],
        answerIndex: 1,
        hints: [
          "Efficiency is the ratio of useful output power to total input power.",
          "Compute η = (520 / 800) × 100%.",
        ],
        explanation:
          "{{η = (P_useful / P_total) * 100% = (520 / 800) * 100% = 65%}}. The remaining {{35%}} ({{280}} W) is the wasted fraction dissipated mainly as thermal energy.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: MULTI-STEP IB APPLICATIONS (answerIndex spread: 4, 4, 3, 4)
  // ===========================================================================
  {
    id: "a1-mechanics-m2",
    title: "Paper 1A · Set 2 — Multi-Step IB Applications",
    level: "SL",
    questions: [
      {
        id: "a1-mechanics-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "kinematics-projectiles",
        strategy: "Two-stage motion / v–t area",
        question:
          "A car starts from rest, accelerates uniformly at {{2.5}} m s⁻² for {{6.0}} s, and then continues at constant velocity for a further {{4.0}} s. What total displacement does the car cover in the {{10.0}} s?",
        options: ["90 m", "105 m", "125 m", "150 m"],
        answerIndex: 1,
        hints: [
          "Split the journey into the acceleration stage (0–6 s) and the constant-velocity stage (6–10 s).",
          "Find the speed reached at t = 6.0 s first (v = at), then sum the triangle area and rectangle area on a v–t graph.",
        ],
        explanation:
          "After {{6.0}} s, {{v = 2.5 * 6.0 = 15.0}} m s⁻¹ and {{s_1 = (1/2)(2.5)(6.0)^2 = 45}} m. Over the next {{4.0}} s at steady speed, {{s_2 = 15.0 * 4.0 = 60}} m. Total displacement is {{45 + 60 = 105}} m. Applying {{(1/2)at^2}} to all 10 s wrongly yields 125 m.",
      },
      {
        id: "a1-mechanics-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "kinematics-projectiles",
        strategy: "Projectile velocity at peak",
        question:
          "A ball is projected from level ground at {{20.0}} m s⁻¹ at an angle of {{30°}} above the horizontal ({{g = 9.81}} m s⁻², negligible air resistance). What is the speed of the ball at the highest point of its flight?",
        options: ["0 m s⁻¹", "10.0 m s⁻¹", "20.0 m s⁻¹", "17.3 m s⁻¹"],
        answerIndex: 3,
        hints: [
          "At the peak, v_y = 0, but is horizontal velocity zero?",
          "Calculate the constant horizontal velocity component u cos 30°.",
        ],
        explanation:
          "At maximum height {{v_y = 0}}, leaving only the unchanged horizontal velocity {{v_x = 20.0 cos 30° = 17.3}} m s⁻¹. Writing {{0}} m s⁻¹ confuses vertical velocity with total speed, while {{10.0}} m s⁻¹ is the initial vertical component {{20.0 sin 30°}}.",
      },
      {
        id: "a1-mechanics-m2-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "kinematics-projectiles",
        strategy: "Proportional scaling in free fall",
        question:
          "Sphere X is dropped from rest from a height {{H}} and takes time {{T}} to hit the floor (negligible air resistance). From what height must Sphere Y be dropped from rest to take time {{2T}}?",
        options: ["4H", "2H", "8H", "1.41H"],
        answerIndex: 0,
        hints: [
          "Write the SUVAT relation between drop height h and fall time t when u = 0.",
          "Since h = ½gt², h is proportional to t² — what happens when t doubles?",
        ],
        explanation:
          "From {{H = (1/2)g T^2}}, replacing {{T}} with {{2T}} gives {{h_Y = (1/2)g (2T)^2 = 4((1/2)g T^2) = 4H}}. Linearly guessing {{2H}} forgets that speed also grows with time during fall.",
      },
      {
        id: "a1-mechanics-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "forces-newton-friction",
        strategy: "FBD in an accelerating lift",
        question:
          "A {{70}} kg passenger stands on bathroom scales inside a lift accelerating vertically downwards at {{1.81}} m s⁻² ({{g = 9.81}} m s⁻²). What normal force does the scale register?",
        options: ["687 N", "813 N", "560 N", "127 N"],
        answerIndex: 2,
        hints: [
          "The scale reads the upward normal reaction F_N, not the true weight mg.",
          "Taking downwards as positive: mg − F_N = ma.",
        ],
        explanation:
          "Since the passenger accelerates downwards, weight exceeds normal force: {{mg - F_N = ma}} ⇒ {{F_N = mg - ma = 70 * (9.81 - 1.81) = 70 * 8.00 = 560}} N. Adding {{ma}} gives {{813}} N (which corresponds to upward acceleration), while {{687}} N is the stationary weight.",
      },
      {
        id: "a1-mechanics-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "forces-newton-friction",
        strategy: "Critical angle of repose",
        question:
          "A wooden block rests on an adjustable inclined plane. As the ramp angle {{θ}} is slowly increased from zero, the block just begins to slide when {{θ = 26.6°}} ({{tan 26.6° = 0.50}}). What is the coefficient of static friction {{μ_s}}?",
        options: ["0.45", "0.89", "0.25", "0.50"],
        answerIndex: 3,
        hints: [
          "At the instant slipping begins, static friction reaches its maximum value F_f = μ_s F_N.",
          "Balance forces along and perpendicular to the slope: mg sin θ = μ_s (mg cos θ).",
        ],
        explanation:
          "Setting {{m g sin θ = μ_s m g cos θ}} cancels {{mg}} and gives {{μ_s = sin θ / cos θ = tan θ = tan 26.6° = 0.50}}. Choosing {{0.45}} uses {{sin 26.6°}} and forgets that normal force also shrinks by {{cos θ}}.",
      },
      {
        id: "a1-mechanics-m2-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "forces-newton-friction",
        strategy: "Connected-body dynamics",
        question:
          "A {{4.0}} kg block on a frictionless horizontal bench is attached by a light inextensible string over a frictionless pulley to a {{1.0}} kg hanging mass ({{g = 9.81}} m s⁻²). What is the tension in the string once the system is released?",
        options: ["7.85 N", "9.81 N", "1.96 N", "19.6 N"],
        answerIndex: 0,
        hints: [
          "Find the common acceleration first by treating both masses as a single 5.0 kg system.",
          "Then isolate the 4.0 kg block on the smooth bench: its only horizontal force is T = m_1 a.",
        ],
        explanation:
          "Whole-system acceleration is {{a = (1.0 * 9.81)/(4.0 + 1.0) = 1.962}} m s⁻². Isolating the {{4.0}} kg block gives {{T = 4.0 * 1.962 = 7.85}} N. Tension must be strictly less than the hanging weight {{9.81}} N so the hanging mass can accelerate downwards.",
      },
      {
        id: "a1-mechanics-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "forces-newton-friction",
        strategy: "Hooke's law for parallel springs",
        question:
          "Two identical Hookean springs of spring constant {{k}} are hung side-by-side in parallel to support a single mass {{m}}. Compared with one spring alone supporting mass {{m}}, what is the equilibrium extension of the parallel pair?",
        options: [
          "Twice the original extension",
          "Half the original extension",
          "Four times the original extension",
          "Equal to the original extension",
        ],
        answerIndex: 1,
        hints: [
          "In parallel, the two identical springs share the downward weight mg equally.",
          "Apply F = kx to one spring carrying load mg/2.",
        ],
        explanation:
          "Each spring supports {{mg/2}}, so its extension is {{x_parallel = (mg/2)/k = (1/2)(mg/k)}} — half the original extension (effective spring constant doubles to {{2k}}). Putting springs in *series* instead doubles the extension.",
      },
      {
        id: "a1-mechanics-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Impulse from F–t graph area",
        question:
          "A horizontal force acts on a stationary {{2.0}} kg puck on frictionless ice for {{0.40}} s. On an {{F}}–{{t}} graph, the force forms a triangle rising linearly from {{0}} N to a peak of {{30}} N and returning to {{0}} N. What is the puck's final speed?",
        options: ["6.0 m s⁻¹", "12 m s⁻¹", "3.0 m s⁻¹", "1.5 m s⁻¹"],
        answerIndex: 2,
        hints: [
          "Impulse equals the area under the F–t graph (area of a triangle = ½ × base × height).",
          "Equate impulse J to momentum change m v − 0 and divide by m = 2.0 kg.",
        ],
        explanation:
          "Area of the triangle gives impulse {{J = (1/2) * 0.40 * 30 = 6.0}} N s. Since the puck starts from rest, {{v = J / m = 6.0 / 2.0 = 3.0}} m s⁻¹. Treating the force as constant at 30 N doubles the answer to {{6.0}} m s⁻¹.",
      },
      {
        id: "a1-mechanics-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Recoil momentum conservation",
        question:
          "A stationary space probe of total mass {{5.0}} kg ejects a {{1.0}} kg instrument capsule backwards at {{20}} m s⁻¹, leaving a {{4.0}} kg main body. What is the recoil speed of the {{4.0}} kg main body?",
        options: ["4.0 m s⁻¹", "20 m s⁻¹", "2.5 m s⁻¹", "5.0 m s⁻¹"],
        answerIndex: 3,
        hints: [
          "Initial total momentum is zero, so the two parts separate with equal and opposite momenta.",
          "Be careful to use the remaining mass (4.0 kg), not the original 5.0 kg total mass.",
        ],
        explanation:
          "Momentum conservation gives {{0 = 4.0 v - 1.0 * 20}}, so {{v = 20 / 4.0 = 5.0}} m s⁻¹. Dividing by the total pre-separation mass {{5.0}} kg wrongly produces {{4.0}} m s⁻¹.",
      },
      {
        id: "a1-mechanics-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Angular speed conversion",
        question:
          "A laboratory turntable rotates steadily at {{30}} revolutions per minute (rpm). What is its angular speed {{ω}}?",
        options: ["3.14 rad s⁻¹", "6.28 rad s⁻¹", "1.57 rad s⁻¹", "188 rad s⁻¹"],
        answerIndex: 0,
        hints: [
          "Convert revolutions per minute to frequency f in revolutions per second (Hz) by dividing by 60.",
          "Multiply frequency by 2π using ω = 2πf.",
        ],
        explanation:
          "Frequency is {{f = 30 / 60 = 0.50}} Hz, so {{ω = 2 pi f = 2 pi (0.50) = pi ≈ 3.14}} rad s⁻¹. Forgetting to divide by 60 yields {{188}} rad s⁻¹.",
      },
      {
        id: "a1-mechanics-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Critical speed at top of vertical circle",
        question:
          "A {{0.50}} kg mass attached to a light string of length {{0.90}} m is swung in a vertical circle ({{g = 9.81}} m s⁻²). What is the minimum speed at the highest point for the string to just remain taut?",
        options: ["4.20 m s⁻¹", "2.97 m s⁻¹", "8.83 m s⁻¹", "2.10 m s⁻¹"],
        answerIndex: 1,
        hints: [
          "At the top of the circle, both tension T and weight mg point downwards toward the centre: T + mg = mv²/r.",
          "The string just stays taut when T = 0, leaving mg = mv²/r.",
        ],
        explanation:
          "Setting {{T = 0}} at the top gives {{mg = (m v^2)/r}} ⇒ {{v_min = sqrt(g r) = sqrt(9.81 * 0.90) = sqrt(8.829) = 2.97}} m s⁻¹. Notice {{8.83}} forgets to take the square root, and mass cancels out.",
      },
      {
        id: "a1-mechanics-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "work-energy-power",
        strategy: "Kinetic energy in terms of momentum",
        question:
          "An initially stationary nucleus decays into two fragments X and Y of masses {{m}} and {{3m}} respectively. What is the ratio {{E_k(X) : E_k(Y)}} of their kinetic energies?",
        options: ["1 : 9", "1 : 3", "9 : 1", "3 : 1"],
        answerIndex: 3,
        hints: [
          "Since initial momentum is zero, fragments X and Y fly apart with equal momentum magnitudes p.",
          "Express kinetic energy via E_k = p²/(2m) so you can compare at fixed p.",
        ],
        explanation:
          "With equal momentum magnitude {{p}}, {{E_k = p^2/(2m)}} is inversely proportional to mass: {{E_k(X)/E_k(Y) = (1/m)/(1/(3m)) = 3/1}}, so the lighter fragment X receives 3 times more kinetic energy (ratio 3 : 1).",
      },
      {
        id: "a1-mechanics-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Work–energy with friction",
        question:
          "A {{2.0}} kg block slides from rest down a rough {{5.0}} m long ramp of vertical height {{2.0}} m ({{g = 9.81}} m s⁻²) and reaches the bottom at {{4.0}} m s⁻¹. How much mechanical energy is dissipated against friction?",
        options: ["23.2 J", "39.2 J", "16.0 J", "82.1 J"],
        answerIndex: 0,
        hints: [
          "Calculate initial gravitational PE using vertical height h = 2.0 m (NOT ramp length 5.0 m!).",
          "Subtract final kinetic energy ½mv² from initial gravitational PE.",
        ],
        explanation:
          "Initial {{E_p = m g h = 2.0 * 9.81 * 2.0 = 39.24}} J and final {{E_k = (1/2)(2.0)(4.0)^2 = 16.0}} J. By energy conservation, work done against friction is {{39.24 - 16.0 = 23.2}} J. Mistakenly using ramp length 5.0 m as height yields {{82.1}} J.",
      },
      {
        id: "a1-mechanics-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Power at constant velocity",
        question:
          "A cyclist rides along a flat road at a steady speed of {{10.0}} m s⁻¹ while delivering {{240}} W of useful mechanical power to the rear wheel. What is the total resistive force opposing the cyclist?",
        options: ["2400 N", "24.0 N", "12.0 N", "48.0 N"],
        answerIndex: 1,
        hints: [
          "At steady speed on a flat road, driving force equals resistive force.",
          "Rearrange P = F v to solve for F.",
        ],
        explanation:
          "Since acceleration is zero, {{F_resist = F_drive = P / v = 240 / 10.0 = 24.0}} N. Multiplying instead of dividing gives {{2400}} N.",
      },
      {
        id: "a1-mechanics-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Fractional KE loss in inelastic collision",
        question:
          "A {{1.0}} kg glider moving at {{6.0}} m s⁻¹ collides head-on with a stationary {{2.0}} kg glider on a frictionless air track and sticks to it. What percentage of the initial kinetic energy is converted to thermal energy and sound?",
        options: ["33.3%", "50.0%", "66.7%", "75.0%"],
        answerIndex: 2,
        hints: [
          "Use momentum conservation first to find the combined velocity after impact.",
          "Compare E_k,initial and E_k,final, then compute ((E_i − E_f)/E_i) × 100%.",
        ],
        explanation:
          "Combined velocity is {{v = (1.0 * 6.0)/(1.0 + 2.0) = 2.0}} m s⁻¹. Initial {{E_k = (1/2)(1.0)(6.0)^2 = 18.0}} J and final {{E_k = (1/2)(3.0)(2.0)^2 = 6.0}} J, so {{12.0}} J is dissipated: {{(12.0 / 18.0) * 100% = 66.7%}}. Writing 33.3% gives the fraction *retained* rather than lost.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: EXAM-STYLE SYNTHESIS & GRAPHS (answerIndex spread: 3, 4, 4, 4)
  // ===========================================================================
  {
    id: "a1-mechanics-m3",
    title: "Paper 1A · Set 3 — Exam-Style Synthesis & Graphs",
    level: "SL",
    questions: [
      {
        id: "a1-mechanics-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "kinematics-projectiles",
        strategy: "Signed area under a v–t graph",
        diagram: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph showing a straight line from +6.0 m/s at t=0 passing through 0 at t=3.0 s to -4.0 m/s at t=5.0 s">
  <rect x="0" y="0" width="360" height="190" fill="#ffffff"/>
  <line x1="52" y1="115" x2="335" y2="115" stroke="#334155" stroke-width="1.8"/>
  <line x1="52" y1="18" x2="52" y2="176" stroke="#334155" stroke-width="1.8"/>
  <polygon points="52,115 52,31 202,115" fill="#dbeafe" fill-opacity="0.75"/>
  <polygon points="202,115 302,115 302,171" fill="#fee2e2" fill-opacity="0.75"/>
  <line x1="52" y1="31" x2="302" y2="171" stroke="#2563eb" stroke-width="2.6"/>
  <circle cx="52" cy="31" r="3.5" fill="#1d4ed8"/>
  <circle cx="202" cy="115" r="3.5" fill="#1d4ed8"/>
  <circle cx="302" cy="171" r="3.5" fill="#1d4ed8"/>
  <text x="44" y="35" font-size="11" font-weight="700" text-anchor="end" fill="#1e293b">+6.0</text>
  <text x="44" y="119" font-size="11" font-weight="700" text-anchor="end" fill="#1e293b">0</text>
  <text x="44" y="174" font-size="11" font-weight="700" text-anchor="end" fill="#1e293b">−4.0</text>
  <text x="202" y="106" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">3.0</text>
  <text x="302" y="106" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">5.0</text>
  <text x="336" y="130" font-size="11" font-weight="700" text-anchor="end" fill="#334155">t / s</text>
  <text x="60" y="20" font-size="11" font-weight="700" fill="#334155">v / m s⁻¹</text>
</svg>`,
        question:
          "The velocity–time graph shows an object starting at {{+6.0}} m s⁻¹ at {{t = 0}}, crossing zero at {{t = 3.0}} s, and reaching {{-4.0}} m s⁻¹ at {{t = 5.0}} s with constant acceleration. What is the object's **net displacement** from {{t = 0}} to {{t = 5.0}} s?",
        options: ["13.0 m", "9.0 m", "5.0 m", "1.0 m"],
        answerIndex: 2,
        hints: [
          "Displacement is the SIGNED area between the v–t line and the time axis.",
          "Area above the axis (0 to 3.0 s) is positive; area below the axis (3.0 to 5.0 s) is negative.",
        ],
        explanation:
          "Positive triangle area = {{(1/2)(3.0)(6.0) = +9.0}} m; negative triangle area = {{(1/2)(2.0)(-4.0) = -4.0}} m. Net displacement = {{9.0 - 4.0 = +5.0}} m. Adding magnitudes gives {{13.0}} m, which is total *distance* travelled, not displacement.",
      },
      {
        id: "a1-mechanics-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "kinematics-projectiles",
        strategy: "Complementary launch angles",
        question:
          "Two projectiles P and Q are launched from level ground with identical initial speed {{u}} at angles {{30°}} and {{60°}} above the horizontal respectively (negligible air resistance). How do their horizontal ranges and flight times compare?",
        options: [
          "P has a larger range and a shorter flight time than Q",
          "P and Q have equal ranges, while Q has a longer flight time",
          "P and Q have equal ranges and identical total flight times",
          "Q has a larger range and a shorter flight time than P",
        ],
        answerIndex: 1,
        hints: [
          "Total flight time depends only on initial vertical speed: T = 2u sin θ / g.",
          "Horizontal range on level ground is R = (u cos θ)(2u sin θ / g) = u² sin(2θ) / g; compare sin 60° and sin 120°.",
        ],
        explanation:
          "Complementary angles ({{30° + 60° = 90°}}) give identical {{sin(2θ)}} values ({{sin 60° = sin 120° = 0.866}}), so ranges are equal. However, {{T = 2u sin θ / g}} is larger for Q since {{sin 60° > sin 30°}}.",
      },
      {
        id: "a1-mechanics-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "kinematics-projectiles",
        strategy: "Terminal velocity acceleration profile",
        question:
          "A small steel ball is released from rest inside a tall cylinder of viscous oil. Which statement accurately describes the magnitude of its acceleration as a function of time until terminal velocity is reached?",
        options: [
          "Starts at zero and rises linearly to a constant positive value",
          "Starts at a constant value and remains horizontal throughout",
          "Starts at a maximum and drops linearly straight down to zero",
          "Starts at a maximum and curves smoothly asymptotically to zero",
        ],
        answerIndex: 3,
        hints: [
          "At t = 0, speed is zero so viscous drag is zero — net force is at its maximum.",
          "As acceleration drops, speed grows more slowly, so drag also grows more slowly.",
        ],
        explanation:
          "Initially {{v = 0}} gives zero drag and maximum net downward force, hence maximum acceleration. As speed rises, upward drag grows proportionally to {{v}}, reducing acceleration at a progressively slower rate so {{a(t)}} curves asymptotically toward zero.",
      },
      {
        id: "a1-mechanics-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "forces-newton-friction",
        strategy: "Scaling with Stokes' law",
        question:
          "A small sphere of radius {{r}} falls at terminal speed {{v_T}} through a viscous fluid in laminar flow (assume buoyancy is negligible compared with weight). What is the terminal speed of a sphere of the same material with radius {{2r}} in the same fluid?",
        options: ["4 v_T", "2 v_T", "8 v_T", "0.5 v_T"],
        answerIndex: 0,
        hints: [
          "At terminal velocity, weight equals Stokes' drag: mg = 6πηrv_T.",
          "How does mass m = (4/3)πr³ρ scale with radius r compared with the r in 6πηrv_T?",
        ],
        explanation:
          "Equating weight to Stokes' drag gives {{(4/3) pi r^3 ρ g = 6 pi η r v_T}}, so {{v_T}} is proportional to {{r^2}}. Doubling the radius multiplies terminal speed by {{2^2 = 4}}, giving {{4 v_T}}.",
      },
      {
        id: "a1-mechanics-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "forces-newton-friction",
        strategy: "Angled pulling force reduces normal reaction",
        question:
          "A {{10.0}} kg sled is pulled across a rough horizontal snowfield ({{μ_d = 0.20}}, {{g = 9.81}} m s⁻²) by a rope under tension {{50.0}} N angled at {{36.9°}} above horizontal ({{sin 36.9° = 0.60}}, {{cos 36.9° = 0.80}}). What is the horizontal acceleration of the sled?",
        options: ["2.04 m s⁻²", "3.04 m s⁻²", "2.64 m s⁻²", "4.00 m s⁻²"],
        answerIndex: 2,
        hints: [
          "The upward component of tension reduces the normal reaction force: F_N + T sin 36.9° = mg.",
          "Use the reduced F_N to compute F_f = μ_d F_N, then find a = (T cos 36.9° − F_f)/m.",
        ],
        explanation:
          "Vertically: {{F_N = mg - T sin 36.9° = 98.1 - 30.0 = 68.1}} N, so dynamic friction is {{F_f = 0.20 * 68.1 = 13.62}} N. Horizontally: {{F_net = 50.0(0.80) - 13.62 = 26.38}} N, giving {{a = 26.38 / 10.0 = 2.64}} m s⁻². Forgetting to reduce {{F_N}} yields the trap value {{2.04}} m s⁻².",
      },
      {
        id: "a1-mechanics-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "forces-newton-friction",
        strategy: "Static equilibrium with angled cables",
        question:
          "A {{1.5}} kg ceiling lamp hangs motionless from two identical symmetric cables, each making an angle of {{30°}} with the horizontal ceiling ({{g = 9.81}} m s⁻²). What is the tension in each cable?",
        options: ["7.36 N", "8.49 N", "29.4 N", "14.7 N"],
        answerIndex: 3,
        hints: [
          "The vertical components of both cables together must balance the lamp's weight mg.",
          "Since each cable is 30° from the horizontal, its vertical component is T sin 30°.",
        ],
        explanation:
          "Vertical equilibrium gives {{2 T sin 30° = m g}}. Because {{2 sin 30° = 2(0.50) = 1}}, the tension in each cable equals the entire weight: {{T = 1.5 * 9.81 = 14.7}} N. Dividing weight by 2 gives {{7.36}} N, ignoring the angle.",
      },
      {
        id: "a1-mechanics-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Momentum rate for continuous fluid stream",
        question:
          "A horizontal hose delivers {{2.5}} kg of water per second at {{12}} m s⁻¹ perpendicularly onto a flat vertical wall. After striking the wall, the water falls straight down with zero horizontal rebound velocity. What average horizontal force does the jet exert on the wall?",
        options: ["15 N", "30 N", "60 N", "180 N"],
        answerIndex: 1,
        hints: [
          "Use Newton's second law in rate-of-change-of-momentum form: F = Δp/Δt = (Δm/Δt) Δv.",
          "Because the water stops horizontally without rebounding, Δv = 12 m s⁻¹.",
        ],
        explanation:
          "Each second, {{2.5}} kg of water loses {{12}} m s⁻¹ of horizontal velocity, so {{F = (Δm/Δt) Δv = 2.5 * 12 = 30}} N. Doubling to {{60}} N applies only if the water rebounded elastically at {{12}} m s⁻¹.",
      },
      {
        id: "a1-mechanics-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "momentum-circular",
        strategy: "Tension at the bottom of a vertical circle",
        question:
          "A {{0.80}} kg pendulum bob on a light string of length {{0.50}} m passes through the lowest point of its circular swing at {{4.0}} m s⁻¹ ({{g = 9.81}} m s⁻²). What is the tension in the string at that instant?",
        options: ["33.4 N", "25.6 N", "17.8 N", "7.85 N"],
        answerIndex: 0,
        hints: [
          "At the bottom of the arc, tension acts upwards (inward) while weight acts downwards (outward).",
          "Set the inward resultant force equal to mv²/r: T − mg = mv²/r.",
        ],
        explanation:
          "At the lowest point, {{T - mg = (m v^2)/r}}, so {{T = 0.80(9.81) + 0.80(4.0^2)/0.50 = 7.85 + 25.6 = 33.4}} N. Writing {{25.6}} N forgets to support the bob's weight, while {{17.8}} N subtracts weight (which applies at the top, not the bottom).",
      },
      {
        id: "a1-mechanics-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "momentum-circular",
        strategy: "2D perpendicular momentum conservation",
        question:
          "On a frictionless air table, Puck A slides due east and collides glancingly with stationary Puck B. Afterwards, Puck A moves {{30°}} north of east and Puck B moves {{60°}} south of east. Which statement MUST be true?",
        options: [
          "Puck A and Puck B must have equal speeds after impact",
          "Total kinetic energy must remain strictly unchanged",
          "The north momentum of A equals the south momentum of B",
          "The east momentum of A equals the east momentum of B",
        ],
        answerIndex: 2,
        hints: [
          "Check the total momentum along the north–south axis BEFORE the collision.",
          "Because initial north–south momentum is zero, the final perpendicular momentum components must cancel.",
        ],
        explanation:
          "Initial momentum is purely eastwards ({{p_y,initial = 0}}), so by 2D momentum conservation the northward momentum component of A must exactly match the southward momentum component of B. Kinetic energy is not necessarily conserved unless the collision is stated to be elastic.",
      },
      {
        id: "a1-mechanics-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Derive",
        guideRef: "momentum-circular",
        strategy: "Conical pendulum force resolution",
        question:
          "A conical pendulum bob of mass {{m}} moves in a horizontal circle of radius {{r}} with its string making a constant angle {{θ}} to the vertical. Which expression gives the bob's speed {{v}}?",
        options: [
          "{{sqrt(g r sin θ)}}",
          "{{sqrt(g r cos θ)}}",
          "{{sqrt(g r / tan θ)}}",
          "{{sqrt(g r tan θ)}}",
        ],
        answerIndex: 3,
        hints: [
          "Resolve string tension T vertically (T cos θ = mg) and horizontally toward the circle centre (T sin θ = mv²/r).",
          "Divide the horizontal equation by the vertical equation to eliminate T and m.",
        ],
        explanation:
          "Dividing {{T sin θ = (m v^2)/r}} by {{T cos θ = mg}} eliminates both {{T}} and {{m}}, yielding {{tan θ = v^2/(g r)}} and hence {{v = sqrt(g r tan θ)}}. Check the limit {{θ -> 0°}}: {{v -> 0}}, which fails for {{1/tan θ}} and {{cos θ}}.",
      },
      {
        id: "a1-mechanics-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Work–energy theorem from F–x area",
        diagram: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force-displacement graph showing force rising linearly from 0 N at x=0 to 20 N at x=4.0 m and remaining constant at 20 N up to x=8.0 m">
  <rect x="0" y="0" width="360" height="175" fill="#ffffff"/>
  <line x1="52" y1="142" x2="335" y2="142" stroke="#334155" stroke-width="1.8"/>
  <line x1="52" y1="18" x2="52" y2="142" stroke="#334155" stroke-width="1.8"/>
  <polygon points="52,142 182,42 312,42 312,142" fill="#dcfce7" fill-opacity="0.8"/>
  <polyline points="52,142 182,42 312,42" fill="none" stroke="#15803d" stroke-width="2.6"/>
  <line x1="182" y1="42" x2="182" y2="142" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="44" y="46" font-size="11" font-weight="700" text-anchor="end" fill="#1e293b">20</text>
  <text x="44" y="146" font-size="11" font-weight="700" text-anchor="end" fill="#1e293b">0</text>
  <text x="182" y="158" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">4.0</text>
  <text x="312" y="158" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">8.0</text>
  <text x="336" y="170" font-size="11" font-weight="700" text-anchor="end" fill="#334155">x / m</text>
  <text x="60" y="24" font-size="11" font-weight="700" fill="#334155">F / N</text>
</svg>`,
        question:
          "The force–displacement graph shows the net horizontal force acting on a {{4.0}} kg block initially at rest on a frictionless floor. What is the speed of the block at {{x = 8.0}} m?",
        options: ["6.32 m s⁻¹", "7.75 m s⁻¹", "8.94 m s⁻¹", "10.9 m s⁻¹"],
        answerIndex: 1,
        hints: [
          "Work done equals the total area under the F–x graph (triangle + rectangle).",
          "Set total work equal to ½mv² and solve for v.",
        ],
        explanation:
          "Area under the graph is {{W = (1/2)(4.0)(20) + (4.0)(20) = 40 + 80 = 120}} J. By the work–energy theorem, {{(1/2)(4.0)v^2 = 120}} ⇒ {{v^2 = 60}} ⇒ {{v = 7.75}} m s⁻¹. Taking the whole area as a rectangle ({{160}} J) wrongly gives {{8.94}} m s⁻¹.",
      },
      {
        id: "a1-mechanics-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Conservation of mechanical energy",
        question:
          "A {{1.5}} kg ball is thrown downwards from a rooftop {{12.0}} m above a street at {{8.0}} m s⁻¹ ({{g = 9.81}} m s⁻², negligible air resistance). What is its speed just before striking the street?",
        options: ["15.3 m s⁻¹", "23.3 m s⁻¹", "17.3 m s⁻¹", "13.1 m s⁻¹"],
        answerIndex: 2,
        hints: [
          "Equate initial kinetic + gravitational PE to final kinetic energy (mass cancels!).",
          "Compute v = √(u² + 2gh) — remember NOT to simply add u and √(2gh).",
        ],
        explanation:
          "By energy conservation, {{(1/2)m v^2 = (1/2)m u^2 + m g h}}, giving {{v = sqrt(8.0^2 + 2 * 9.81 * 12.0) = sqrt(64 + 235.44) = sqrt(299.44) = 17.3}} m s⁻¹. Dropping from rest gives {{15.3}} m s⁻¹, and linearly adding {{8.0 + 15.3}} gives the trap value {{23.3}} m s⁻¹.",
      },
      {
        id: "a1-mechanics-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "work-energy-power",
        strategy: "Combined GPE and KE power output",
        question:
          "A pump lifts {{30}} kg of water every minute through a vertical height of {{12}} m and ejects it horizontally from a pipe at {{6.0}} m s⁻¹ ({{g = 9.81}} m s⁻²). What is the minimum useful power output of the pump?",
        options: ["58.9 W", "76.9 W", "4070 W", "67.9 W"],
        answerIndex: 3,
        hints: [
          "Convert the mass flow rate to kg s⁻¹ first (30 kg / 60 s = 0.50 kg s⁻¹).",
          "Sum BOTH the rate of GPE gain ((Δm/Δt)gh) AND the rate of KE gain (½(Δm/Δt)v²).",
        ],
        explanation:
          "Mass flow rate is {{0.50}} kg s⁻¹. Rate of GPE gain = {{0.50 * 9.81 * 12 = 58.86}} W; rate of KE gain = {{(1/2)(0.50)(6.0)^2 = 9.00}} W. Total useful power = {{58.86 + 9.00 = 67.9}} W. Omitting kinetic energy yields {{58.9}} W, and forgetting to convert minutes to seconds gives {{4070}} W.",
      },
      {
        id: "a1-mechanics-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "work-energy-power",
        strategy: "Cubic power–speed scaling with quadratic drag",
        question:
          "A car driving along a level highway faces aerodynamic drag proportional to speed squared ({{F_d = c v^2}}). With useful engine power {{P}}, its top speed is {{v_max}}. What is its new top speed if useful engine power is increased to {{8P}}?",
        options: ["2 v_max", "4 v_max", "8 v_max", "2.83 v_max"],
        answerIndex: 0,
        hints: [
          "At top speed, driving force equals drag force: F_drive = c v_max².",
          "Substitute into P = F_drive v_max to see how P scales with v_max.",
        ],
        explanation:
          "At terminal top speed, {{P = F_d v_max = (c v_max^2) v_max = c v_max^3}}, so {{v_max}} scales as the cube root of power ({{P^(1/3)}}). Multiplying power by 8 multiplies top speed by {{cbrt(8) = 2}}.",
      },
      {
        id: "a1-mechanics-m3-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "work-energy-power",
        strategy: "Elastic head-on equal-mass collision",
        question:
          "A billiard ball of mass {{m}} moving at speed {{u}} collides head-on and **elastically** with an identical stationary billiard ball of mass {{m}}. What happens immediately after the collision?",
        options: [
          "Both balls stick together and move forward at half speed",
          "The first ball stops and the second moves forward at u",
          "The first ball rebounds at u and the second remains still",
          "Both balls separate symmetrically at equal speeds of u/2",
        ],
        answerIndex: 1,
        hints: [
          "Both total momentum (mu) and total kinetic energy (½mu²) must be conserved simultaneously.",
          "Test each proposed outcome against BOTH p_after = mu AND E_k,after = ½mu².",
        ],
        explanation:
          "In a 1D elastic collision of equal masses, the balls exchange velocities: {{v_1 = 0}} and {{v_2 = u}}, which uniquely satisfies both {{p = mu}} and {{E_k = (1/2)m u^2}}. Sticking together at {{u/2}} conserves momentum but loses half the kinetic energy.",
      },
    ],
  },
];
