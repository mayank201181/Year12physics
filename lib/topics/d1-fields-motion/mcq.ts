import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: Gravitational & Electric Fields Core (15 MCQs)
  // answerIndex spread: 0→4, 1→4, 2→4, 3→3
  // ===========================================================================
  {
    id: "d1-fields-motion-m1",
    title: "Paper 1A · Gravitational & Electric Fields Core",
    level: "SL",
    questions: [
      {
        id: "d1-fields-motion-m1-q01",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Determine",
        guideRef: "gravitational-fields-orbits",
        strategy: "Ratio scaling",
        question:
          "Planet X has twice the mass of Earth and twice the radius of Earth. If Earth's surface gravitational field strength is {{g}}, what is the surface gravitational field strength on Planet X?",
        options: ["{{0.5 g}}", "{{1.0 g}}", "{{2.0 g}}", "{{4.0 g}}"],
        answerIndex: 0,
        hints: [
          "Write the formula for gravitational field strength at a planet's surface: {{g = G M / R^2}}.",
          "Substitute {{M_X = 2 M}} and {{R_X = 2 R}} into the ratio {{g_X / g}}.",
        ],
        explanation:
          "From {{g = G M / R^2}}, substituting {{2 M}} and {{2 R}} gives {{g_X = G(2 M)/(2 R)^2 = (2/4)(G M/R^2) = 0.5 g}}. Choosing {{1.0 g}} forgets to square the factor of 2 in the denominator.",
      },
      {
        id: "d1-fields-motion-m1-q02",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "State",
        guideRef: "electric-magnetic-fields",
        strategy: "Newton's 3rd law",
        question:
          "Two point charges {{+Q}} and {{+4Q}} are separated by a distance {{r}}. The electrostatic force exerted on {{+Q}} by {{+4Q}} has magnitude {{F}}. What is the electrostatic force exerted on {{+4Q}} by {{+Q}}?",
        options: [
          "Magnitude {{4 F}} in the opposite direction",
          "Magnitude {{0.25 F}} in the opposite direction",
          "Magnitude {{F}} in the opposite direction",
          "Magnitude {{F}} in the same direction",
        ],
        answerIndex: 2,
        hints: [
          "Recall Newton's Third Law for any pair of interacting bodies.",
          "Check the symmetry of Coulomb's law {{F = k q_1 q_2 / r^2}} when swapping {{q_1}} and {{q_2}}.",
        ],
        explanation:
          "By Newton's Third Law and Coulomb's law {{F = k(Q)(4Q)/r^2}}, both charges experience repulsive forces of equal magnitude {{F}} in opposite directions. A larger charge does not experience a smaller or larger force than its partner.",
      },
      {
        id: "d1-fields-motion-m1-q03",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "gravitational-fields-orbits",
        strategy: "Ratio scaling",
        question:
          "A satellite moves in a circular orbit of radius {{r}} around a planet with orbital speed {{v}}. A second satellite orbits the same planet in a circular orbit of radius {{4 r}}. What is the orbital speed of the second satellite?",
        options: ["{{v / 4}}", "{{v / 2}}", "{{2 v}}", "{{4 v}}"],
        answerIndex: 1,
        hints: [
          "Equate gravitational pull {{G M m / r^2}} to centripetal force {{m v^2 / r}}.",
          "How does {{v}} depend on {{r}} once you solve for {{v}}?",
        ],
        explanation:
          "Circular orbital speed is {{v = sqrt(G M / r) ∝ 1/sqrt(r)}}. Quadrupling {{r}} divides the speed by {{sqrt(4) = 2}}, giving {{v / 2}}. Higher orbits are slower, ruling out {{2 v}} and {{4 v}}.",
      },
      {
        id: "d1-fields-motion-m1-q04",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "electric-magnetic-fields",
        strategy: "Uniform field E = V/d",
        question:
          "Two parallel metal plates separated by {{2.0}} cm have a potential difference of {{400}} V between them. What is the magnitude of the electric force on an electron ({{e = 1.60 * 10^(-19)}} C) placed midway between the plates?",
        options: [
          "{{3.2 * 10^(-17)}} N",
          "{{6.4 * 10^(-17)}} N",
          "{{1.6 * 10^(-15)}} N",
          "{{3.2 * 10^(-15)}} N",
        ],
        answerIndex: 3,
        hints: [
          "Convert the plate separation {{2.0}} cm into metres first.",
          "Compute {{E = V / d}}, then multiply by the electron's charge {{e}}.",
        ],
        explanation:
          "Converting {{d = 0.020}} m gives {{E = 400 / 0.020 = 2.0 * 10^4}} V m⁻¹. The electric force is {{F = e E = 1.60 * 10^(-19) * 2.0 * 10^4 = 3.2 * 10^(-15)}} N. Forgetting to convert cm to m produces the {{3.2 * 10^(-17)}} N distractor.",
      },
      {
        id: "d1-fields-motion-m1-q05",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "gravitational-fields-orbits",
        strategy: "Kepler's Third Law ratio",
        question:
          "Moon P orbits a planet at circular radius {{R}} with orbital period {{T}}. Moon Q orbits the same planet at circular radius {{4 R}}. What is the orbital period of Moon Q?",
        options: ["{{2 T}}", "{{4 T}}", "{{8 T}}", "{{16 T}}"],
        answerIndex: 2,
        hints: [
          "Use Kepler's Third Law: {{T^2 ∝ r^3}} for satellites orbiting the same central mass.",
          "Evaluate {{(T_Q / T)^2 = (4 R / R)^3}} and take the square root.",
        ],
        explanation:
          "By Kepler's Third Law, {{(T_Q / T)^2 = 4^3 = 64}}, so {{T_Q / T = sqrt(64) = 8}} and {{T_Q = 8 T}}. Confusing the exponents ({{T ∝ r^2}}) leads to {{16 T}}.",
      },
      {
        id: "d1-fields-motion-m1-q06",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "electric-magnetic-fields",
        strategy: "Force balance",
        question:
          "A negatively charged oil drop hovers motionless between two horizontal parallel plates separated by {{d}} with constant potential difference {{V}}. If the plate separation is increased to {{2 d}} while {{V}} remains constant, how does the drop move?",
        options: [
          "It accelerates downwards with acceleration {{0.5 g}}",
          "It accelerates upwards with acceleration {{0.5 g}}",
          "It accelerates downwards with acceleration {{g}}",
          "It remains completely motionless in equilibrium",
        ],
        answerIndex: 0,
        hints: [
          "How does doubling {{d}} at constant {{V}} change the electric field {{E = V / d}}?",
          "Compare the new upward electric force {{F_e'}} with the unchanged downward weight {{m g}}.",
        ],
        explanation:
          "Initially {{q E = m g}}. Doubling {{d}} at constant {{V}} halves {{E = V / d}}, so the upward electric force halves to {{0.5 m g}}. The net force is {{m g - 0.5 m g = 0.5 m g}} downwards, giving downward acceleration {{a = 0.5 g}}.",
      },
      {
        id: "d1-fields-motion-m1-q07",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "motion-em-fields",
        strategy: "Fleming's left-hand rule (negative charge)",
        question:
          "An electron enters a uniform magnetic field directed perpendicularly **into the page**, travelling horizontally to the **right**. What is the initial direction of the magnetic force on the electron?",
        options: [
          "Upwards in the plane of the page",
          "Downwards in the plane of the page",
          "Out of the page towards the viewer",
          "Into the page away from the viewer",
        ],
        answerIndex: 1,
        hints: [
          "Remember that an electron is negatively charged, so conventional current points opposite to its velocity.",
          "Apply Fleming's left-hand rule with first finger into the page and second finger pointing to the left.",
        ],
        explanation:
          "An electron moving to the right corresponds to conventional current pointing to the **left**. With first finger {{B}} into the page and second finger {{I}} to the left, Fleming's left-hand thumb points **downwards**. Forgetting to reverse the velocity for a negative charge gives upwards.",
      },
      {
        id: "d1-fields-motion-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Centre-to-centre radial scaling",
        question:
          "The gravitational potential at the surface of a spherical planet of radius {{R}} is {{-6.0 * 10^7}} J kg⁻¹. What is the gravitational potential at an altitude of {{2 R}} above the planet's surface?",
        options: [
          "{{-0.67 * 10^7}} J kg⁻¹",
          "{{-1.5 * 10^7}} J kg⁻¹",
          "{{-3.0 * 10^7}} J kg⁻¹",
          "{{-2.0 * 10^7}} J kg⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Find the distance {{r}} from the planet's **centre**: altitude {{2 R}} above radius {{R}} means {{r = 3 R}}.",
          "Use {{V_g = -G M / r ∝ 1 / r}} (not {{1 / r^2}}).",
        ],
        explanation:
          "An altitude of {{2 R}} above the surface is at radial distance {{r = R + 2 R = 3 R}} from the centre. Since {{V_g ∝ 1 / r}}, the potential becomes {{(-6.0 * 10^7) / 3 = -2.0 * 10^7}} J kg⁻¹. Using {{r = 2 R}} gives {{-3.0 * 10^7}} J kg⁻¹, and squaring {{3}} gives {{-0.67 * 10^7}} J kg⁻¹.",
      },
      {
        id: "d1-fields-motion-m1-q09",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "State",
        guideRef: "motion-em-fields",
        strategy: "Work done by perpendicular force",
        question:
          "A proton enters a uniform magnetic field at right angles to the field lines and moves in a circular arc. While inside the magnetic field, what happens to the proton's speed and kinetic energy?",
        options: [
          "Both the proton's speed and kinetic energy remain constant",
          "The proton's speed remains constant while its kinetic energy increases",
          "Both the proton's speed and kinetic energy increase steadily",
          "The proton's speed decreases while its kinetic energy stays constant",
        ],
        answerIndex: 0,
        hints: [
          "What is the angle between the magnetic force {{F}} and the velocity {{v}}?",
          "Compute the work done {{W = F s cos θ}} when {{θ = 90°}}.",
        ],
        explanation:
          "Because the magnetic force is always perpendicular to velocity, it does zero work ({{W = F s cos 90° = 0}}). Consequently, the proton's speed and kinetic energy remain strictly constant; only its direction of motion changes.",
      },
      {
        id: "d1-fields-motion-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Orbital vs escape speed",
        question:
          "A spacecraft is in a stable circular orbit of radius {{r}} around a star, travelling at speed {{v}}. What minimum speed must it reach at radius {{r}} to escape the star's gravitational field completely?",
        options: ["{{v / sqrt(2)}}", "{{2 v}}", "{{sqrt(2) * v}}", "{{4 v}}"],
        answerIndex: 2,
        hints: [
          "Compare circular orbital speed {{v = sqrt(G M / r)}} with escape speed {{v_esc = sqrt(2 G M / r)}}.",
          "Divide {{v_esc}} by {{v}}.",
        ],
        explanation:
          "At any radius {{r}}, circular orbital speed is {{v = sqrt(G M / r)}} while escape speed (where {{E_k + E_p = 0}}) is {{v_esc = sqrt(2 G M / r) = sqrt(2) * v}}. Doubling the kinetic energy requires multiplying speed by {{sqrt(2)}}, not by {{2}}.",
      },
      {
        id: "d1-fields-motion-m1-q11",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "electric-magnetic-fields",
        strategy: "Vector superposition of E-fields",
        question:
          "Point charges {{+q}} and {{-q}} are fixed on the x-axis at {{x = -a}} and {{x = +a}} respectively. What is the net electric field at the origin {{x = 0}}?",
        options: [
          "Zero magnitude because the two charges have equal size",
          "Magnitude {{2 k q / a^2}} directed towards the negative charge",
          "Magnitude {{2 k q / a^2}} directed towards the positive charge",
          "Magnitude {{k q / a^2}} directed perpendicular to the x-axis",
        ],
        answerIndex: 1,
        hints: [
          "Place an imaginary positive test charge at the origin {{x = 0}}.",
          "Which way is it pushed by {{+q}} on the left, and which way is it pulled by {{-q}} on the right?",
        ],
        explanation:
          "A positive test charge at the origin is repelled to the right by {{+q}} (field {{k q / a^2}} in {{+x}}) and attracted to the right by {{-q}} (field {{k q / a^2}} also in {{+x}}). Both vectors point towards {{-q}} and add to {{2 k q / a^2}}.",
      },
      {
        id: "d1-fields-motion-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Scalar potential vs vector field",
        question:
          "Point charges {{+q}} and {{-q}} are fixed at {{x = -a}} and {{x = +a}}. Which statement correctly describes the net electric potential {{V_e}} and net electric field magnitude {{E}} at the midpoint {{x = 0}}?",
        options: [
          "{{V_e = 0}} and {{E = 0}}",
          "{{V_e ≠ 0}} and {{E = 0}}",
          "{{V_e ≠ 0}} and {{E ≠ 0}}",
          "{{V_e = 0}} and {{E ≠ 0}}",
        ],
        answerIndex: 3,
        hints: [
          "Electric potential {{V_e = k q / r}} is a scalar — add the two signed values at {{x = 0}}.",
          "Electric field {{E}} is a vector — check whether the two arrows at {{x = 0}} cancel or reinforce.",
        ],
        explanation:
          "The scalar potentials cancel exactly: {{V_e = k q / a + k(-q) / a = 0}}. However, the two electric field vectors both point from {{+q}} towards {{-q}} and reinforce to {{E = 2 k q / a^2 ≠ 0}}.",
      },
      {
        id: "d1-fields-motion-m1-q13",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Describe",
        guideRef: "motion-em-fields",
        strategy: "Parallel currents & Newton's 3rd law",
        question:
          "Two long straight parallel wires carry steady currents {{I}} and {{3 I}} in **opposite** directions. Which statement correctly describes the magnetic forces acting on the two wires?",
        options: [
          "The wires attract each other with forces of equal magnitude",
          "The wires repel each other, with a larger force on the {{I}} wire",
          "The wires repel each other with forces of equal magnitude",
          "The wires attract each other, with a larger force on the {{3 I}} wire",
        ],
        answerIndex: 2,
        hints: [
          "Do antiparallel (opposite-direction) currents attract or repel?",
          "Apply Newton's Third Law to compare the magnitudes of the two forces.",
        ],
        explanation:
          "Antiparallel currents repel each other, and by Newton's Third Law (and the symmetric formula {{F / L = μ_0 I_1 I_2 / (2 pi r)}}), both wires experience repulsive forces of identical magnitude despite carrying different currents.",
      },
      {
        id: "d1-fields-motion-m1-q14",
        kind: "mcq",
        level: "SL",
        difficulty: "challenge",
        commandTerm: "Determine",
        guideRef: "electric-magnetic-fields",
        strategy: "Right-hand grip rule",
        question:
          "A long vertical wire carries a steady conventional current straight **upwards**. What is the direction of the magnetic field produced by this wire at a point located directly **east** of the wire?",
        options: ["Due north", "Due south", "Due east", "Due west"],
        answerIndex: 0,
        hints: [
          "Point your right thumb straight upwards along the conventional current.",
          "Viewed from above, your fingers curl anticlockwise around the wire — which compass direction is tangent to an anticlockwise circle on its eastern side?",
        ],
        explanation:
          "By the right-hand grip rule with thumb pointing vertically upwards, magnetic field lines form anticlockwise horizontal circles when viewed from above. On the eastern side of an anticlockwise circle, the tangent points **due north**.",
      },
      {
        id: "d1-fields-motion-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Orbital energy relations",
        question:
          "A satellite of mass {{m}} orbits a planet in a circular orbit with kinetic energy {{E_k}}. What are its gravitational potential energy {{E_p}} and total mechanical energy {{E_T}}?",
        options: [
          "{{E_p = -E_k}} and {{E_T = 0}}",
          "{{E_p = -2 E_k}} and {{E_T = -E_k}}",
          "{{E_p = -2 E_k}} and {{E_T = +E_k}}",
          "{{E_p = -0.5 E_k}} and {{E_T = +0.5 E_k}}",
        ],
        answerIndex: 1,
        hints: [
          "Write {{E_k = +G M m / (2 r)}} and {{E_p = -G M m / r}} for a circular orbit.",
          "Express {{E_p}} and {{E_T = E_k + E_p}} directly as multiples of {{E_k}}.",
        ],
        explanation:
          "For a circular orbit, {{E_k = +G M m / (2 r)}} and {{E_p = -G M m / r = -2 E_k}}. Therefore total energy is {{E_T = E_k + (-2 E_k) = -E_k}}, which is negative because the satellite is gravitationally bound.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: Motion in EM Fields, Orbits & Potentials (15 MCQs)
  // answerIndex spread: 0→3, 1→4, 2→4, 3→4
  // ===========================================================================
  {
    id: "d1-fields-motion-m2",
    title: "Paper 1A · Motion in EM Fields, Orbits & Potentials",
    level: "SL",
    questions: [
      {
        id: "d1-fields-motion-m2-q01",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "motion-em-fields",
        strategy: "Velocity selector balance",
        question:
          "A crossed-field velocity selector has a uniform electric field of {{2.4 * 10^4}} V m⁻¹ perpendicular to a uniform magnetic field of {{0.080}} T. What speed must ions have to pass straight through undeflected?",
        options: [
          "{{1.9 * 10^3}} m s⁻¹",
          "{{3.0 * 10^5}} m s⁻¹",
          "{{3.3 * 10^(-6)}} m s⁻¹",
          "{{1.9 * 10^5}} m s⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "For zero deflection, electric force equals magnetic force: {{q E = q v B}}.",
          "Solve for {{v = E / B}}.",
        ],
        explanation:
          "Setting {{q E = q v B}} gives {{v = E / B = (2.4 * 10^4) / 0.080 = 3.0 * 10^5}} m s⁻¹. Multiplying {{E}} and {{B}} instead of dividing yields the {{1.9 * 10^3}} m s⁻¹ distractor.",
      },
      {
        id: "d1-fields-motion-m2-q02",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "motion-em-fields",
        strategy: "Competing forces in crossed fields",
        question:
          "In a velocity selector, the upper plate is positive (so {{E}} points downwards) and the uniform magnetic field {{B}} points into the page. A positive ion enters from the left moving horizontally to the right with speed {{v > E / B}}. How does the ion deflect?",
        options: [
          "It passes straight through because charge cancels out",
          "It curves downwards towards the negative bottom plate",
          "It curves out of the page towards the observer",
          "It curves upwards towards the positive top plate",
        ],
        answerIndex: 3,
        hints: [
          "Find the direction of {{F_e = q E}} and {{F_B = q v B}} on a positive ion moving to the right.",
          "Since {{v > E / B}}, compare {{q v B}} against {{q E}}.",
        ],
        explanation:
          "For a positive ion moving right, {{F_e = q E}} acts downwards while {{F_B = q v B}} acts upwards (Fleming's left-hand rule). Because {{v > E / B}}, {{q v B > q E}}, so the net force is upwards towards the positive top plate.",
      },
      {
        id: "d1-fields-motion-m2-q03",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "motion-em-fields",
        strategy: "Cyclotron radius ratio",
        question:
          "A proton (mass {{m}}, charge {{+e}}) and an alpha particle (mass {{4 m}}, charge {{+2 e}}) enter the same uniform magnetic field perpendicular to the field lines with the **same speed** {{v}}. What is the ratio {{r_α / r_p}} of their circular path radii?",
        options: ["{{2}}", "{{4}}", "{{1}}", "{{0.5}}"],
        answerIndex: 0,
        hints: [
          "Use the circular cyclotron radius formula {{r = m v / (q B)}}.",
          "Since {{v}} and {{B}} are identical, {{r ∝ m / q}}.",
        ],
        explanation:
          "From {{r = m v / (q B)}}, with identical {{v}} and {{B}} we have {{r ∝ m / q}}. Thus {{r_α / r_p = (4 m / 2 e) / (m / e) = 4 / 2 = 2}}. Forgetting that the alpha particle has double the charge gives {{4}}.",
      },
      {
        id: "d1-fields-motion-m2-q04",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "gravitational-fields-orbits",
        strategy: "Mass in terms of uniform density",
        question:
          "Two spherical planets X and Y have the **same uniform density** {{ρ}}, but Planet Y has twice the radius of Planet X ({{R_Y = 2 R_X}}). What is the ratio of their surface gravitational field strengths {{g_Y / g_X}}?",
        options: ["{{0.25}}", "{{0.5}}", "{{2}}", "{{8}}"],
        answerIndex: 2,
        hints: [
          "Express planet mass using density and volume: {{M = (4/3) pi R^3 ρ}}.",
          "Substitute {{M}} into {{g = G M / R^2}} to see how {{g}} depends on {{R}}.",
        ],
        explanation:
          "Substituting {{M = (4/3) pi R^3 ρ}} into {{g = G M / R^2}} gives {{g = (4/3) pi G ρ R ∝ R}}. Doubling the radius at fixed density increases mass by {{8}} and {{R^2}} by {{4}}, so {{g_Y / g_X = 8 / 4 = 2}}.",
      },
      {
        id: "d1-fields-motion-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Describe",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Potential gradient & contour spacing",
        question:
          "Equipotential surfaces are drawn around an isolated positive point charge for equal potential steps of {{ΔV = 10}} V. As radial distance {{r}} from the charge increases, what happens to the spacing between adjacent equipotential surfaces?",
        options: [
          "The spacing stays constant because {{ΔV}} is identical",
          "The spacing decreases because the field gets weaker",
          "The spacing stays constant along radial directions only",
          "The spacing increases because the field gets weaker",
        ],
        answerIndex: 3,
        hints: [
          "Relate electric field magnitude to potential gradient: {{E = |ΔV / Δr|}}.",
          "If {{ΔV}} is fixed and {{E}} decreases with {{r}}, how must {{Δr}} change?",
        ],
        explanation:
          "From {{|E| = |ΔV / Δr|}}, rearrange to {{Δr = |ΔV| / |E|}}. As distance {{r}} increases, {{E = k Q / r^2}} becomes weaker, so the spacing {{Δr}} between equal-{{ΔV}} equipotentials increases.",
      },
      {
        id: "d1-fields-motion-m2-q06",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "electric-magnetic-fields",
        strategy: "Charge conservation on contact",
        question:
          "Two identical small conducting spheres carry charges {{+6.0}} μC and {{-2.0}} μC and attract each other with force {{F}} at separation {{r}}. The spheres are touched together and returned to separation {{r}}. What is the new electrostatic force between them?",
        options: [
          "{{F / 3}}, attractive",
          "{{F / 3}}, repulsive",
          "{{F / 4}}, repulsive",
          "{{2 F / 3}}, attractive",
        ],
        answerIndex: 1,
        hints: [
          "By conservation of charge, total charge before touching equals total charge after touching.",
          "Identical spheres split the net charge equally — compare the new product {{q_1' q_2'}} with the original {{|q_1 q_2|}}.",
        ],
        explanation:
          "Total charge is {{+6.0 - 2.0 = +4.0}} μC, which splits equally to {{+2.0}} μC on each sphere (so they now **repel**). Original {{|q_1 q_2| = 12}} μC²; new {{q_1' q_2' = 4}} μC², giving {{4/12 = 1/3}} of the original magnitude: {{F / 3}}, repulsive.",
      },
      {
        id: "d1-fields-motion-m2-q07",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "motion-em-fields",
        strategy: "Magnetic levitation equilibrium",
        question:
          "A straight horizontal wire of mass {{0.040}} kg and length {{0.50}} m lies perpendicular to a horizontal uniform magnetic field of {{0.20}} T. Taking {{g = 9.81}} m s⁻², what minimum current is required to support the wire against gravity?",
        options: ["{{0.39}} A", "{{1.96}} A", "{{3.92}} A", "{{7.85}} A"],
        answerIndex: 2,
        hints: [
          "For the wire to float horizontally, upward magnetic force {{B I L}} must equal downward weight {{m g}}.",
          "Rearrange for {{I = m g / (B L)}}.",
        ],
        explanation:
          "Equating {{B I L = m g}} gives {{I = (0.040 * 9.81) / (0.20 * 0.50) = 0.3924 / 0.10 = 3.92}} A. Forgetting to multiply by {{g}} gives the {{0.40}} A scale error, while omitting {{L = 0.50}} m gives {{1.96}} A.",
      },
      {
        id: "d1-fields-motion-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Work & potential difference W = qΔV",
        question:
          "A proton (charge {{+e}}) is released from rest on an equipotential surface at {{+500}} V and accelerates to an equipotential surface at {{+200}} V. What are its change in electric potential energy {{ΔE_p}} and its gain in kinetic energy {{ΔE_k}}?",
        options: [
          "{{ΔE_p = -300}} eV and {{ΔE_k = +300}} eV",
          "{{ΔE_p = +300}} eV and {{ΔE_k = -300}} eV",
          "{{ΔE_p = -700}} eV and {{ΔE_k = +700}} eV",
          "{{ΔE_p = -300}} eV and {{ΔE_k = +200}} eV",
        ],
        answerIndex: 0,
        hints: [
          "Compute {{ΔV = V_final - V_initial = 200 - 500}}.",
          "Use {{ΔE_p = q ΔV}} and conservation of energy {{ΔE_k + ΔE_p = 0}}.",
        ],
        explanation:
          "Moving from {{+500}} V to {{+200}} V gives {{ΔV = -300}} V. For a proton of charge {{+e}}, {{ΔE_p = +e(-300" + ' "V"' + ") = -300}} eV, so by energy conservation it gains {{ΔE_k = +300}} eV.",
      },
      {
        id: "d1-fields-motion-m2-q09",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "gravitational-fields-orbits",
        strategy: "Free fall in orbit",
        question:
          "Which statement best explains why astronauts inside an orbiting space station experience apparent weightlessness?",
        options: [
          "Earth's gravitational field drops to zero above the atmosphere",
          "Centrifugal force balances Earth's inward gravitational attraction",
          "The space station's metal hull shields astronauts from gravity",
          "Both the astronauts and the station are in continuous free fall",
        ],
        answerIndex: 3,
        hints: [
          "Calculate whether {{g = G M / r^2}} is anywhere near zero at {{400}} km altitude.",
          "Think about the normal contact force between an astronaut's feet and the cabin floor when both accelerate at {{g}}.",
        ],
        explanation:
          "Gravity at low Earth orbit is still ~89% of surface gravity. Astronauts feel weightless because both they and the station accelerate towards Earth at the exact same rate {{g}} (continuous free fall), so the normal contact force is zero.",
      },
      {
        id: "d1-fields-motion-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Orbital decay energy paradox",
        question:
          "A satellite in low circular Earth orbit gradually loses mechanical energy due to slight atmospheric drag, spiralling slowly into a lower circular orbit. How do its kinetic energy {{E_k}} and gravitational potential energy {{E_p}} change?",
        options: [
          "{{E_k}} decreases and {{E_p}} decreases",
          "{{E_k}} increases and {{E_p}} decreases",
          "{{E_k}} decreases and {{E_p}} increases",
          "{{E_k}} remains constant and {{E_p}} decreases",
        ],
        answerIndex: 1,
        hints: [
          "Recall {{E_T = -G M m / (2 r)}}: losing total energy makes {{E_T}} more negative, so what happens to {{r}}?",
          "Now inspect {{E_k = +G M m / (2 r)}} and {{E_p = -G M m / r}} as {{r}} decreases.",
        ],
        explanation:
          "As drag removes total energy, {{E_T = -G M m / (2 r)}} becomes more negative, meaning the radius {{r}} shrinks. At a smaller {{r}}, {{E_p = -G M m / r}} decreases (becomes more negative), while {{E_k = +G M m / (2 r)}} actually **increases**!",
      },
      {
        id: "d1-fields-motion-m2-q11",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "electric-magnetic-fields",
        strategy: "Square-root zero-field shortcut",
        question:
          "Two point charges {{+Q}} and {{+9 Q}} are fixed a distance {{d}} apart. At what distance from {{+Q}} along the line joining them is the net electric field equal to zero?",
        options: ["{{d / 10}}", "{{d / 9}}", "{{d / 4}}", "{{d / 3}}"],
        answerIndex: 2,
        hints: [
          "Between two positive charges, their fields oppose and cancel when {{k Q / x^2 = k(9 Q) / (d - x)^2}}.",
          "Take the square root of both sides rather than expanding the quadratic.",
        ],
        explanation:
          "Equating {{Q / x^2 = 9 Q / (d - x)^2}} and taking the positive square root gives {{1 / x = 3 / (d - x)}}, so {{d - x = 3 x}}, hence {{4 x = d}} and {{x = d / 4}}. Forgetting the square root gives the {{d / 10}} distractor.",
      },
      {
        id: "d1-fields-motion-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "State",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Graph interpretation g = −ΔV/Δr",
        question:
          "A graph is plotted showing gravitational potential {{V_g}} on the vertical axis against radial distance {{r}} on the horizontal axis outside a spherical planet. How can the magnitude of the gravitational field strength {{g}} at radius {{r_0}} be determined from this graph?",
        options: [
          "From the area under the curve between {{R}} and {{r_0}}",
          "From the product {{V_g * r_0}} evaluated directly at {{r_0}}",
          "From the inverse of the vertical intercept on the {{V_g}} axis",
          "From the gradient of the tangent to the curve at {{r_0}}",
        ],
        answerIndex: 3,
        hints: [
          "Recall the differential/gradient link between gravitational field strength and gravitational potential.",
          "Look at {{g = -ΔV_g / Δr}}: what graphical feature is {{ΔV_g / Δr}}?",
        ],
        explanation:
          "Since {{g = -ΔV_g / Δr}}, the magnitude of the gravitational field strength at {{r_0}} equals the **gradient of the tangent** to the {{V_g}}–{{r}} graph at {{r_0}}. Area under a {{g}}–{{r}} graph gives {{ΔV_g}}, not the reverse.",
      },
      {
        id: "d1-fields-motion-m2-q13",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "motion-em-fields",
        strategy: "Cyclotron period invariance",
        question:
          "An ion of mass {{m}} and charge {{q}} moves perpendicular to a uniform magnetic field {{B}} in a circle of radius {{r}} and period {{T}}. If the ion's speed is doubled in the same magnetic field, what are its new circular radius and period?",
        options: [
          "Radius {{2 r}} and period {{T}}",
          "Radius {{2 r}} and period {{2 T}}",
          "Radius {{4 r}} and period {{2 T}}",
          "Radius {{2 r}} and period {{0.5 T}}",
        ],
        answerIndex: 0,
        hints: [
          "Inspect the dependence on {{v}} in {{r = m v / (q B)}}.",
          "Substitute {{r}} into {{T = 2 pi r / v}} and see if {{v}} survives.",
        ],
        explanation:
          "Since {{r = m v / (qB)}} is proportional to {{v}}, doubling {{v}} doubles the radius to {{2 r}}. However, {{T = 2 pi r / v = 2 pi m / (qB)}} does not depend on {{v}}, so the orbital period remains {{T}}.",
      },
      {
        id: "d1-fields-motion-m2-q14",
        kind: "mcq",
        level: "SL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "electric-magnetic-fields",
        strategy: "Greatest common divisor in Millikan data",
        question:
          "In a Millikan oil-drop experiment, four droplets are found to carry charges {{4.8 * 10^(-19)}} C, {{6.4 * 10^(-19)}} C, {{9.6 * 10^(-19)}} C and {{1.12 * 10^(-18)}} C. Which conclusion is best supported by this dataset?",
        options: [
          "The elementary charge must equal {{4.8 * 10^(-19)}} C",
          "Charge is quantized in integer multiples of {{1.6 * 10^(-19)}} C",
          "Charge is continuously distributed above {{4.8 * 10^(-19)}} C",
          "The elementary charge must equal {{3.2 * 10^(-19)}} C",
        ],
        answerIndex: 1,
        hints: [
          "Write all four charges in units of {{10^(-19)}} C: {{4.8, 6.4, 9.6, 11.2}}.",
          "Find the largest common step (greatest common divisor) that divides all four values cleanly.",
        ],
        explanation:
          "In units of {{10^(-19)}} C, the charges are {{4.8 = 3(1.6)}}, {{6.4 = 4(1.6)}}, {{9.6 = 6(1.6)}} and {{11.2 = 7(1.6)}}. Their greatest common factor is {{1.6 * 10^(-19)}} C (note {{3.2 * 10^(-19)}} C does not divide {{4.8}} or {{11.2}}).",
      },
      {
        id: "d1-fields-motion-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Conservation of mechanical energy",
        question:
          "What is the minimum mechanical energy required to launch a satellite of mass {{m}} from rest on the surface of a non-rotating planet (mass {{M}}, radius {{R}}) into a circular orbit of radius {{2 R}}?",
        options: [
          "{{(G M m) / (4 R)}}",
          "{{(G M m) / (2 R)}}",
          "{{(3 G M m) / (4 R)}}",
          "{{(G M m) / R}}",
        ],
        answerIndex: 2,
        hints: [
          "Write the initial total energy at rest on the surface: {{E_i = -G M m / R}}.",
          "Write the final total energy in a circular orbit of radius {{r = 2 R}}: {{E_f = -G M m / (2 r)}}.",
          "Subtract {{ΔE = E_f - E_i}}.",
        ],
        explanation:
          "Initial energy at rest on the surface is {{E_i = -G M m / R}}. Final total energy in circular orbit at {{r = 2 R}} is {{E_f = -G M m / (2 * 2 R) = -G M m / (4 R)}}. Required energy is {{E_f - E_i = -G M m / (4 R) - (-G M m / R) = 3 G M m / (4 R)}}. Choosing {{G M m / (2 R)}} accounts only for the change in potential energy and omits the orbital kinetic energy.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: Mixed SL & HL Synthesis (15 MCQs)
  // answerIndex spread: 0→4, 1→3, 2→4, 3→4
  // ===========================================================================
  {
    id: "d1-fields-motion-m3",
    title: "Paper 1A · Mixed SL & HL Synthesis",
    level: "SL",
    questions: [
      {
        id: "d1-fields-motion-m3-q01",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "gravitational-fields-orbits",
        strategy: "Geostationary orbit criteria",
        question:
          "Which condition is **not** required for a satellite to remain in a geostationary orbit above Earth?",
        options: [
          "Orbits directly in the plane of Earth's equator",
          "Has an orbital period equal to 24 hours",
          "Has a specific satellite mass fixed by Earth's radius",
          "Travels west-to-east in Earth's direction of spin",
        ],
        answerIndex: 2,
        hints: [
          "Check Kepler's Third Law {{T^2 = (4 pi^2 / (G M)) r^3}}: does satellite mass {{m}} appear anywhere?",
          "Recall the three geometric/kinematic conditions for remaining fixed above one point on Earth.",
        ],
        explanation:
          "Geostationary satellites must orbit directly over the equator, west-to-east, with period {{24}} h (which fixes orbital radius {{r}}). Satellite mass {{m}} cancels from {{G M m / r^2 = m v^2 / r}}, so satellites of any mass can share the geostationary ring.",
      },
      {
        id: "d1-fields-motion-m3-q02",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "motion-em-fields",
        strategy: "Electrostatic acceleration into B-field",
        question:
          "Protons are accelerated from rest through a potential difference {{V}} and then enter a uniform magnetic field {{B}} perpendicularly, moving in a circular path of radius {{r}}. How does {{r}} depend on the accelerating voltage {{V}}?",
        options: ["{{r ∝ sqrt(V)}}", "{{r ∝ V}}", "{{r ∝ V^2}}", "{{r ∝ 1 / sqrt(V)}}"],
        answerIndex: 0,
        hints: [
          "Use energy conservation {{(1/2) m v^2 = q V}} to relate speed {{v}} to {{V}}.",
          "Substitute {{v}} into the cyclotron radius {{r = m v / (q B)}}.",
        ],
        explanation:
          "From {{(1/2) m v^2 = q V}}, speed scales as {{v = sqrt(2 q V / m)}} (so {{v ∝ sqrt(V)}}). Since {{r = m v / (qB)}} is proportional to {{v}}, the circular radius scales as {{r ∝ sqrt(V)}}.",
      },
      {
        id: "d1-fields-motion-m3-q03",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "motion-em-fields",
        strategy: "Proportional scaling",
        question:
          "Two long parallel wires separated by distance {{r}} each carry current {{I}} in the same direction, exerting force per unit length {{f}} on each other. If both currents are doubled to {{2 I}} and the separation is halved to {{r / 2}}, what is the new force per unit length?",
        options: ["{{2 f}}", "{{4 f}}", "{{6 f}}", "{{8 f}}"],
        answerIndex: 3,
        hints: [
          "Write the formula for force per unit length between parallel currents: {{F / L = μ_0 I_1 I_2 / (2 pi r)}}.",
          "Multiply the scaling factors from {{I_1}}, {{I_2}}, and {{1 / r}}.",
        ],
        explanation:
          "Since {{F / L ∝ I_1 I_2 / r}}, doubling both currents gives {{2 * 2 = 4}} in the numerator and halving {{r}} divides by {{1/2}} (multiplying by {{2}}), yielding {{4 * 2 = 8 f}}.",
      },
      {
        id: "d1-fields-motion-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Escape velocity scaling",
        question:
          "Planet A and Planet B have the same radius {{R}}, but Planet B has four times the mass of Planet A ({{M_B = 4 M_A}}). What is the ratio of their surface escape velocities {{v_esc,B / v_esc,A}}?",
        options: ["{{sqrt(2)}}", "{{2}}", "{{4}}", "{{8}}"],
        answerIndex: 1,
        hints: [
          "Recall {{v_esc = sqrt(2 G M / R)}}.",
          "With {{R}} constant, {{v_esc ∝ sqrt(M)}}.",
        ],
        explanation:
          "From {{v_esc = sqrt(2 G M / R)}}, holding {{R}} fixed gives {{v_esc ∝ sqrt(M)}}. Since {{M_B = 4 M_A}}, the escape speed ratio is {{sqrt(4) = 2}}. Forgetting the square root yields {{4}}.",
      },
      {
        id: "d1-fields-motion-m3-q05",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Describe",
        guideRef: "electric-magnetic-fields",
        strategy: "Projectile analogy in uniform E-field",
        question:
          "An electron enters horizontally midway between two long horizontal parallel plates where a uniform electric field {{E}} points vertically **downwards**. How do the electron's path and speed behave inside the plates?",
        options: [
          "It curves upwards along a parabolic path and speeds up",
          "It curves downwards along a parabolic path and speeds up",
          "It curves upwards along a circular arc at constant speed",
          "It curves downwards along a circular arc at constant speed",
        ],
        answerIndex: 0,
        hints: [
          "Remember that a negative charge experiences an electric force **opposite** to the direction of {{E}}.",
          "A constant unidirectional force acting perpendicular to initial horizontal velocity produces what shape (just like gravity on a projectile)?",
        ],
        explanation:
          "Because the electron is negative and {{E}} points downwards, it experiences a constant **upward** electric force {{e E}}. Like a projectile under uniform gravity, it follows a **parabola** curving upwards, and its speed increases as work is done by the electric field.",
      },
      {
        id: "d1-fields-motion-m3-q06",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "motion-em-fields",
        strategy: "Magnetic force on angled conductor",
        question:
          "A straight wire of length {{0.40}} m carries a current of {{5.0}} A at an angle of {{30°}} to a uniform magnetic field of {{0.60}} T. What is the magnitude of the magnetic force on the wire?",
        options: ["{{0.30}} N", "{{1.04}} N", "{{0.60}} N", "{{1.20}} N"],
        answerIndex: 2,
        hints: [
          "Use {{F = B I L sin θ}} where {{θ}} is the angle between the current and the magnetic field.",
          "Remember {{sin 30° = 0.50}} (not {{cos 30° = 0.866}}).",
        ],
        explanation:
          "Substituting into {{F = B I L sin θ}} gives {{F = 0.60 * 5.0 * 0.40 * sin 30° = 1.20 * 0.50 = 0.60}} N. Using {{cos 30°}} yields {{1.04}} N, and omitting {{sin 30°}} yields {{1.20}} N.",
      },
      {
        id: "d1-fields-motion-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Field from negative potential gradient",
        question:
          "In a uniform electric field along the x-axis, the electric potential decreases linearly from {{+60}} V at {{x = 0.020}} m to {{+20}} V at {{x = 0.060}} m. What are the magnitude and direction of the electric field?",
        options: [
          "{{500}} V m⁻¹ in the {{-x}} direction",
          "{{500}} V m⁻¹ in the {{+x}} direction",
          "{{1000}} V m⁻¹ in the {{-x}} direction",
          "{{1000}} V m⁻¹ in the {{+x}} direction",
        ],
        answerIndex: 3,
        hints: [
          "Use {{E = -ΔV_e / Δx}} with {{ΔV_e = 20 - 60}} V and {{Δx = 0.060 - 0.020}} m.",
          "Electric field lines always point from **higher** potential towards **lower** potential.",
        ],
        explanation:
          "{{E = -ΔV_e / Δx = -(20 - 60) / (0.060 - 0.020) = +40 / 0.040 = +1000}} V m⁻¹. The positive sign confirms {{E}} points in the {{+x}} direction (from {{+60}} V downhill to {{+20}} V).",
      },
      {
        id: "d1-fields-motion-m3-q08",
        kind: "mcq",
        level: "SL",
        difficulty: "challenge",
        commandTerm: "Derive",
        guideRef: "gravitational-fields-orbits",
        strategy: "Binary star orbit geometry",
        question:
          "Two identical stars, each of mass {{M}}, orbit their common centre of mass in the same circular path of radius {{R}} (remaining diametrically opposite each other at all times). What is the orbital speed {{v}} of each star?",
        options: [
          "{{sqrt((G M) / R)}}",
          "{{sqrt((G M) / (2 R))}}",
          "{{sqrt((G M) / (4 R))}}",
          "{{sqrt((2 G M) / R)}}",
        ],
        answerIndex: 2,
        hints: [
          "Carefully distinguish between the **orbital radius** {{R}} and the **separation** {{2 R}} between the two stars!",
          "Equate gravitational attraction {{G M^2 / (2 R)^2}} to centripetal force {{M v^2 / R}}.",
        ],
        explanation:
          "The stars are separated by diameter {{2 R}}, so the gravitational pull is {{G M^2 / (2 R)^2 = G M^2 / (4 R^2)}}. Equating this to centripetal force {{M v^2 / R}} gives {{v^2 = G M / (4 R)}}, hence {{v = sqrt(G M / (4 R))}}. Using {{R}} instead of {{2 R}} in Newton's law gives the tempting {{sqrt(G M / R)}} trap.",
      },
      {
        id: "d1-fields-motion-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Scalar addition vs vector cancellation",
        question:
          "Two identical positive point charges {{+q}} are fixed at {{x = -d}} and {{x = +d}}. Which combination correctly describes the electric field magnitude {{E}} and electric potential {{V_e}} at the origin {{x = 0}}?",
        options: [
          "{{E = 0}} and {{V_e > 0}}",
          "{{E = 0}} and {{V_e = 0}}",
          "{{E ≠ 0}} and {{V_e = 0}}",
          "{{E ≠ 0}} and {{V_e > 0}}",
        ],
        answerIndex: 0,
        hints: [
          "Check the directions of the two electric field arrows at the midpoint between two identical positive charges.",
          "Add the two scalar potentials {{V_e = k q / d + k q / d}}.",
        ],
        explanation:
          "At the midpoint between two identical positive charges, the two electric field vectors are equal and opposite so {{E = 0}}. However, electric potential is a positive scalar from both charges, so {{V_e = 2 k q / d > 0}}.",
      },
      {
        id: "d1-fields-motion-m3-q10",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Describe",
        guideRef: "motion-em-fields",
        strategy: "Resolving velocity relative to B",
        question:
          "An electron enters a uniform magnetic field at an angle of {{30°}} to the magnetic field lines. What is the shape of its subsequent path inside the uniform field?",
        options: [
          "A straight line at constant velocity parallel to the field",
          "A flat circular loop lying perpendicular to the field lines",
          "A parabolic curve accelerating steadily along the field",
          "A helical path at constant speed spiralling along the field",
        ],
        answerIndex: 3,
        hints: [
          "Resolve velocity into {{v_∥ = v cos 30°}} (along {{B}}) and {{v_⊥ = v sin 30°}} (perpendicular to {{B}}).",
          "Combine constant linear drift along {{B}} with uniform circular motion perpendicular to {{B}}.",
        ],
        explanation:
          "The parallel component {{v cos 30°}} experiences zero magnetic force and drifts steadily along {{B}}, while the perpendicular component {{v sin 30°}} undergoes uniform circular motion. Together they trace a **helix** at constant speed.",
      },
      {
        id: "d1-fields-motion-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Zero work along equipotential",
        question:
          "A point charge of {{+2.0}} μC is moved along a semicircular path of constant radius {{0.10}} m around a fixed point charge of {{+5.0}} μC. How much net work is done on the {{+2.0}} μC charge by the external agent?",
        options: ["{{-0.90}} J", "{{0}} J", "{{+0.90}} J", "{{+1.80}} J"],
        answerIndex: 1,
        hints: [
          "What is true about the electric potential {{V_e = k Q / r}} at every point on a circle of constant radius {{r}}?",
          "Apply {{W = q ΔV_e}}.",
        ],
        explanation:
          "Every point at constant radius {{0.10}} m from the central point charge lies on the same **equipotential surface** ({{ΔV_e = 0}}). Therefore the net work done is {{W = q ΔV_e = 0}} J.",
      },
      {
        id: "d1-fields-motion-m3-q12",
        kind: "mcq",
        level: "SL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "electric-magnetic-fields",
        strategy: "Permittivity of a medium",
        question:
          "Two point charges in vacuum repel each other with force {{F}}. They are then immersed at the same separation inside an insulating oil whose permittivity is {{ε = 2.5 ε_0}}. What is the new electrostatic force between the charges?",
        options: ["{{0.40 F}}", "{{0.63 F}}", "{{1.58 F}}", "{{2.50 F}}"],
        answerIndex: 0,
        hints: [
          "Inspect Coulomb's law written with permittivity: {{F = q_1 q_2 / (4 pi ε r^2)}}.",
          "How does multiplying {{ε}} by {{2.5}} change {{F}}?",
        ],
        explanation:
          "Because {{F = q_1 q_2 / (4 pi ε r^2) ∝ 1 / ε}}, increasing permittivity by a factor of {{2.5}} reduces the force to {{F / 2.5 = 0.40 F}}. Polarised oil molecules partially screen the electric field.",
      },
      {
        id: "d1-fields-motion-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Compare",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Energy conservation in elliptical orbits",
        question:
          "A comet moves around the Sun in a highly elliptical orbit. At its closest approach to the Sun (perihelion), compared with its farthest point (aphelion), how do its kinetic energy {{E_k}}, gravitational potential energy {{E_p}}, and total energy {{E_T}} compare?",
        options: [
          "{{E_k}} is minimum, {{E_p}} is maximum, and {{E_T}} is greater",
          "{{E_k}} is maximum, {{E_p}} is maximum, and {{E_T}} is unchanged",
          "{{E_k}} is minimum, {{E_p}} is minimum, and {{E_T}} is unchanged",
          "{{E_k}} is maximum, {{E_p}} is minimum, and {{E_T}} is unchanged",
        ],
        answerIndex: 3,
        hints: [
          "Gravity is a conservative force, so what happens to total mechanical energy {{E_T}} around the orbit?",
          "At perihelion {{r}} is smallest — remember {{E_p = -G M m / r}} is negative!",
        ],
        explanation:
          "With no external forces, total energy {{E_T}} is constant throughout the orbit. At perihelion {{r}} is smallest, so {{E_p = -G M m / r}} is most negative (minimum), and therefore {{E_k = E_T - E_p}} is maximum (consistent with Kepler's 2nd law).",
      },
      {
        id: "d1-fields-motion-m3-q14",
        kind: "mcq",
        level: "SL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "motion-em-fields",
        strategy: "Mass spectrometer diameter scaling",
        question:
          "Singly ionised neon isotopes ²⁰Ne⁺ and ²²Ne⁺ emerge from the same velocity selector and enter a uniform deflection magnetic field, executing semicircles before hitting a flat detector plate. If ²⁰Ne⁺ strikes the detector {{20.0}} cm from the entry slit, how far from the slit does ²²Ne⁺ strike?",
        options: ["{{21.0}} cm", "{{22.0}} cm", "{{24.2}} cm", "{{18.2}} cm"],
        answerIndex: 1,
        hints: [
          "The strike distance from the slit is the semicircle's diameter {{d = 2 r = 2 m v / (qB)}}.",
          "With identical {{v}}, {{q}} and {{B}}, how does {{d}} scale with ion mass {{m}}?",
        ],
        explanation:
          "Because {{v}}, {{q}} and {{B}} are identical for both singly ionised isotopes, detector distance {{d = 2 m v / (qB)}} is directly proportional to {{m}}. Therefore {{d_22 = (22 / 20) * 20.0 = 22.0}} cm.",
      },
      {
        id: "d1-fields-motion-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "gravitational-electric-potentials-hl",
        strategy: "Neutral point & scalar potential sum",
        question:
          "Two isolated spherical bodies of masses {{M}} and {{4 M}} have centres separated by distance {{3 d}}. At the gravitational neutral point between them where net field strength is zero, what is the distance {{x}} from mass {{M}} and what is the net gravitational potential {{V_g}}?",
        options: [
          "{{x = d}} and {{V_g = 0}}",
          "{{x = 1.5 d}} and {{V_g = -(3 G M) / d}}",
          "{{x = d}} and {{V_g = -(3 G M) / d}}",
          "{{x = d}} and {{V_g = -(5 G M) / d}}",
        ],
        answerIndex: 2,
        hints: [
          "Solve {{G M / x^2 = G(4 M) / (3 d - x)^2}} by taking square roots to find {{x}}.",
          "Add the two negative scalar potentials {{V_g = -G M / x - G(4 M) / (3 d - x)}}.",
        ],
        explanation:
          "From {{1 / x = 2 / (3d - x)}}, we obtain {{3d - x = 2x ⇒ x = d}} (distance {{2d}} from {{4 M}}). Summing the scalar potentials gives {{V_g = -G M / d - G(4 M) / (2d) = -G M / d - 2 G M / d = -3 G M / d}}.",
      },
    ],
  },
];
