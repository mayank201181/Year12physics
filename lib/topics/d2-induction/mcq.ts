import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: MAGNETIC FLUX, FARADAY'S LAW & LENZ'S LAW
  // ===========================================================================
  {
    id: "d2-induction-m1",
    title: "Paper 1A · Magnetic Flux, Faraday & Lenz",
    level: "HL",
    questions: [
      {
        id: "d2-induction-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "magnetic-flux-linkage",
        question: "Which combination of SI units is equivalent to the weber (Wb), the unit of magnetic flux?",
        options: ["{{V s}}", "{{V s^(-1)}}", "{{T m^(-2)}}", "{{N A^(-1) m^(-1)}}"],
        answerIndex: 0,
        hints: [
          "Recall Faraday's law relating EMF (in volts) to the rate of change of magnetic flux (in Wb per second).",
          "Rearranging {{ε = ΔΦ / Δt}} gives {{ΔΦ = ε Δt}}.",
        ],
        explanation:
          "From Faraday's law {{ε = -N(ΔΦ/Δt)}}, magnetic flux has units of EMF × time = **V s** (also equivalent to {{T m^2}} from {{Φ = BA}}). By contrast, {{N A^(-1) m^(-1)}} is the tesla (magnetic flux density), not the weber.",
      },
      {
        id: "d2-induction-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "magnetic-flux-linkage",
        question:
          "A square coil of side {{10 cm}} has {{50}} turns and lies with its plane perpendicular to a uniform magnetic field of {{0.40 T}}. What is the magnetic flux linkage through the coil?",
        options: ["0.0040 Wb", "0.20 Wb", "2.0 Wb", "20 Wb"],
        answerIndex: 1,
        hints: [
          "Convert the side length to metres first before computing the area {{A}}.",
          "Plane perpendicular to {{B}} means the normal is parallel to {{B}} ({{theta = 0°}}), so {{NΦ = NBA}}.",
        ],
        explanation:
          "Area {{A = (0.10 m)^2 = 0.010 m^2}}. Since the plane is perpendicular to {{B}}, {{theta = 0°}} and {{NΦ = N B A = 50 * 0.40 * 0.010 = 0.20 Wb}}. Forgetting {{N}} gives {{0.0040 Wb}}, and forgetting to convert {{cm^2}} to {{m^2}} gives an answer off by powers of 10.",
      },
      {
        id: "d2-induction-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "magnetic-flux-linkage",
        question:
          "A rectangular coil of {{100}} turns and area {{0.020 m^2}} is placed in a uniform magnetic field of {{0.50 T}}. The **plane of the coil** makes an angle of {{30°}} with the magnetic field lines. What is the magnetic flux linkage?",
        options: ["0.0050 Wb", "0.87 Wb", "0.50 Wb", "1.0 Wb"],
        answerIndex: 2,
        hints: [
          "Be careful: {{theta}} in {{NΦ = NBA cos theta}} is the angle between {{B}} and the **normal** to the coil, not its plane.",
          "If the plane makes {{30°}} with {{B}}, then {{theta = 90° - 30° = 60°}}.",
        ],
        explanation:
          "The normal makes {{theta = 90° - 30° = 60°}} with {{B}}, so {{NΦ = 100 * 0.50 * 0.020 * cos 60° = 1.0 * 0.50 = 0.50 Wb}}. Using {{cos 30°}} instead of {{cos 60°}} is the classic angle trap that produces {{0.87 Wb}}.",
      },
      {
        id: "d2-induction-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "magnetic-flux-linkage",
        question:
          "A 200-turn coil of area {{5.0 * 10^(-3) m^2}} initially lies with its plane perpendicular to a uniform magnetic field of {{0.30 T}}. The coil is then rotated through {{180°}}. What is the magnitude of the change in magnetic flux linkage?",
        options: ["0 Wb", "0.15 Wb", "0.30 Wb", "0.60 Wb"],
        answerIndex: 3,
        hints: [
          "Flux is a signed quantity relative to the coil's normal vector.",
          "Rotating by {{180°}} flips the flux linkage from {{+NBA}} to {{-NBA}}, so {{|Δ(NΦ)| = 2NBA}}.",
        ],
        explanation:
          "Initially {{NΦ_1 = +200 * 0.30 * 5.0 * 10^(-3) = +0.30 Wb}}. After rotating {{180°}}, {{NΦ_2 = -0.30 Wb}}. Thus {{|Δ(NΦ)| = |-0.30 - 0.30| = 0.60 Wb}}. Assuming zero change ignores the reversal of the coil's face normal.",
      },
      {
        id: "d2-induction-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "faraday-lenz-laws",
        question:
          "A stationary closed copper coil sits inside an intense, completely uniform and steady {{5.0 T}} magnetic field for {{10 s}}. What is the induced EMF in the coil during this interval?",
        options: [
          "0 V, because magnetic flux is not changing",
          "0.50 V, because flux equals field over time",
          "5.0 V, because EMF equals magnetic field",
          "50 V, because EMF scales with field and time",
        ],
        answerIndex: 0,
        hints: [
          "Check Faraday's law: {{ε = -N(ΔΦ/Δt)}}.",
          "Does the magnetic flux {{Φ = BA cos theta}} change while the coil is stationary and {{B}} is steady?",
        ],
        explanation:
          "Induced EMF depends solely on the **rate of change** of flux linkage ({{ΔΦ/Δt}}). Because {{B}}, {{A}}, and {{theta}} are all constant, {{ΔΦ = 0}} and therefore {{ε = 0 V}} regardless of how strong the static field is.",
      },
      {
        id: "d2-induction-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "faraday-lenz-laws",
        question:
          "The magnetic flux through a single turn of a 400-turn coil increases uniformly from {{1.5 mWb}} to {{6.5 mWb}} in {{0.25 s}}. What is the magnitude of the induced EMF?",
        options: ["0.020 V", "8.0 V", "10.4 V", "12.8 V"],
        answerIndex: 1,
        hints: [
          "First find the change in flux {{ΔΦ = Φ_2 - Φ_1}} in webers ({{1 mWb = 10^(-3) Wb}}).",
          "Apply {{|ε| = N (ΔΦ / Δt)}}.",
        ],
        explanation:
          "{{ΔΦ = (6.5 - 1.5) * 10^(-3) = 5.0 * 10^(-3) Wb}}. By Faraday's law, {{|ε| = 400 * 5.0 * 10^(-3) / 0.25 = 2.0 / 0.25 = 8.0 V}}. Forgetting to multiply by {{N = 400}} yields the distractor {{0.020 V}}.",
      },
      {
        id: "d2-induction-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "faraday-lenz-laws",
        question:
          "A 250-turn coil of area {{4.0 * 10^(-3) m^2}} lies perpendicular to a magnetic field whose flux density reverses uniformly from {{+0.40 T}} to {{-0.40 T}} in {{0.050 s}}. What is the magnitude of the induced EMF?",
        options: ["0 V", "8.0 V", "16 V", "32 V"],
        answerIndex: 2,
        hints: [
          "When a field reverses from {{+0.40 T}} to {{-0.40 T}}, what is the magnitude of {{ΔB}}?",
          "Use {{|ΔB| = 0.80 T}} inside {{|ε| = N A |ΔB| / Δt}}.",
        ],
        explanation:
          "The total change in flux density is {{|ΔB| = |-0.40 - 0.40| = 0.80 T}}. Therefore {{|ε| = 250 * 4.0 * 10^(-3) * 0.80 / 0.050 = 0.80 / 0.050 = 16 V}}. Taking {{ΔB = 0.40 T}} halves the answer to {{8.0 V}}.",
      },
      {
        id: "d2-induction-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "faraday-lenz-laws",
        question: "Lenz's law is a direct consequence of which fundamental principle of physics?",
        options: [
          "Conservation of electric charge in closed loops",
          "Conservation of linear momentum in collisions",
          "Quantization of angular momentum in atoms",
          "Conservation of energy during flux changes",
        ],
        answerIndex: 3,
        hints: [
          "Ask what would happen if an induced current *aided* the motion of an approaching magnet instead of opposing it.",
          "If a magnet accelerated spontaneously while lighting a bulb, energy would appear out of nothing.",
        ],
        explanation:
          "If an induced current aided the flux change, a tiny nudge would produce runaway kinetic and electrical energy for free. Opposing the change ensures external mechanical work must be done to supply the electrical energy — expressing **conservation of energy**.",
      },
      {
        id: "d2-induction-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "faraday-lenz-laws",
        question:
          "The North pole of a bar magnet is pushed straight downwards towards the top face of a horizontal closed wire coil. Viewed from **above**, what magnetic pole is induced on the top face and in which direction does the induced current flow?",
        options: [
          "North pole; anticlockwise current",
          "North pole; clockwise current",
          "South pole; anticlockwise current",
          "South pole; clockwise current",
        ],
        answerIndex: 0,
        hints: [
          "By Lenz's law, the top face must **repel** the approaching North pole.",
          "Point your right thumb upwards (out of a North face); which way do your fingers curl when viewed from above?",
        ],
        explanation:
          "To oppose the approaching North pole, the top face of the coil becomes an induced **North pole** (repelling the magnet). By the right-hand grip rule with thumb pointing up out of the top face, fingers curl **anticlockwise** when viewed from above.",
      },
      {
        id: "d2-induction-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "faraday-lenz-laws",
        question:
          "The South pole of a bar magnet is pulled rapidly **upwards away** from the top face of a horizontal closed wire coil. Viewed from **above**, what magnetic pole is induced on the top face and in which direction does the induced current flow?",
        options: [
          "South pole; clockwise current",
          "North pole; anticlockwise current",
          "South pole; anticlockwise current",
          "North pole; clockwise current",
        ],
        answerIndex: 1,
        hints: [
          "Lenz's law opposes the magnet **leaving** — so should the coil attract or repel the receding South pole?",
          "An induced North pole attracts a receding South pole; now apply the right-hand grip rule from above.",
        ],
        explanation:
          "To oppose the departure of the South pole, the top face of the coil must **attract** it, becoming an induced **North pole**. Equally, upward flux entering the South pole is decreasing, so the coil induces an upward field — thumb up gives **anticlockwise** current from above.",
      },
      {
        id: "d2-induction-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "faraday-lenz-laws",
        question:
          "A bar magnet is dropped from rest vertically through a stationary solenoid connected to a voltage sensor. Compared with the entry EMF pulse, how does the **exit** EMF pulse compare?",
        options: [
          "Same polarity, taller peak, shorter duration, larger area",
          "Opposite polarity, equal peak, equal duration, equal area",
          "Opposite polarity, taller peak, shorter duration, equal area",
          "Opposite polarity, taller peak, longer duration, larger area",
        ],
        answerIndex: 2,
        hints: [
          "Flux increases on entry and decreases on exit, so how do the polarities compare? Does gravity accelerate the magnet as it falls?",
          "Recall that the area under an {{ε}}–{{t}} pulse equals the total change in flux linkage {{|Δ(NΦ)|}}.",
        ],
        explanation:
          "Because the magnet accelerates under gravity, it leaves faster than it entered, producing an **opposite polarity** pulse with a **taller peak** and **shorter duration**. Since total flux linkage enters from {{0}} to {{NΦ_max}} and exits back to {{0}}, both pulses enclose **equal area**.",
      },
      {
        id: "d2-induction-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "faraday-lenz-laws",
        question:
          "The induced EMF across a 200-turn coil forms a triangular pulse rising linearly from {{0 V}} to {{6.0 V}} and returning linearly to {{0 V}} over a total duration of {{0.040 s}}. What is the magnitude of the total change in magnetic flux through **one turn**?",
        options: ["0.12 Wb", "1.2 mWb", "24 Wb", "0.60 mWb"],
        answerIndex: 3,
        hints: [
          "The area under an {{ε}}–{{t}} graph equals the total change in flux **linkage** {{N |ΔΦ|}}.",
          "Compute the triangle area {{1/2 * base * height}}, then divide by {{N = 200}} to get flux change per turn.",
        ],
        explanation:
          "Area of triangle = {{1/2 * 0.040 * 6.0 = 0.12 Wb = N |ΔΦ|}}. Dividing by {{N = 200}} turns gives {{|ΔΦ| = 0.12 / 200 = 6.0 * 10^(-4) Wb = 0.60 mWb}}. Forgetting to divide by {{N}} gives {{0.12 Wb}}.",
      },
      {
        id: "d2-induction-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "faraday-lenz-laws",
        question:
          "A uniform magnetic field perpendicular to a closed coil of fixed resistance {{R}} changes linearly from {{B_1}} to {{B_2}}. If the exact same change from {{B_1}} to {{B_2}} is repeated in **half the time**, how do the induced EMF and the total charge flowing around the coil change?",
        options: [
          "EMF doubles; total charge unchanged",
          "EMF doubles; total charge doubles",
          "EMF halves; total charge unchanged",
          "EMF unchanged; total charge halves",
        ],
        answerIndex: 0,
        hints: [
          "From {{|ε| = N ΔΦ / Δt}}, halving {{Δt}} doubles both {{|ε|}} and the current {{I}}.",
          "Total charge is {{Q = I Δt}}: substitute {{I = N ΔΦ / (R Δt)}} and see what cancels!",
        ],
        explanation:
          "Halving {{Δt}} **doubles** the induced EMF and current. However, total induced charge {{Q = I Δt = (N ΔΦ / (R Δt)) * Δt = N ΔΦ / R}} depends ONLY on total flux change and resistance — so {{Q}} is completely **unchanged**!",
      },
      {
        id: "d2-induction-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "faraday-lenz-laws",
        question:
          "Identical strong magnets are dropped down two vertical copper pipes: Pipe X is solid, while Pipe Y has a narrow vertical slit cut along its entire length. What is observed?",
        options: [
          "Both magnets fall slowly at the same terminal speed",
          "Magnet falls slowly in Pipe X, fast in Pipe Y",
          "Magnet falls fast in Pipe X, slowly in Pipe Y",
          "Both magnets hover motionless halfway down each pipe",
        ],
        answerIndex: 1,
        hints: [
          "In which plane do the braking eddy currents circulate around the falling magnet?",
          "A vertical slit cuts straight across horizontal circular current loops in the copper wall.",
        ],
        explanation:
          "In solid Pipe X, large horizontal eddy currents circulate freely around the tube wall, creating strong Lenz magnetic braking so the magnet falls very slowly. In Pipe Y, the vertical slit interrupts those circular loops, drastically reducing eddy currents so the magnet falls almost in free fall.",
      },
      {
        id: "d2-induction-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "magnetic-flux-linkage",
        question:
          "A circular coil of {{N}} turns and radius {{r}} is unwound and rewound using the exact same length of wire into a circular coil of radius {{r/2}} (which therefore has {{2N}} turns). Both coils sit perpendicular to the same uniform magnetic field {{B}}. What is the ratio {{(\"new flux linkage\") / (\"original flux linkage\")}}?",
        options: ["0.25", "2.0", "0.50", "1.0"],
        answerIndex: 2,
        hints: [
          "Express area in terms of radius: {{A = pi r^2}}. What happens to {{A}} when {{r}} is halved?",
          "Multiply the factor by which {{N}} changes ({{2}}) by the factor by which {{A}} changes ({{1/4}}).",
        ],
        explanation:
          "Original flux linkage is {{N B (pi r^2)}}. Halving the radius reduces area to {{A' = pi (r/2)^2 = A/4}}, while doubling the number of turns gives {{N' = 2N}}. Thus {{N' B A' = (2N) B (A/4) = 0.50 N B A}}, giving a ratio of **0.50**.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: MOTIONAL EMF, SLIDING RODS & MOVING LOOPS
  // ===========================================================================
  {
    id: "d2-induction-m2",
    title: "Paper 1A · Motional EMF & Moving Loops",
    level: "HL",
    questions: [
      {
        id: "d2-induction-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "motional-emf",
        question:
          "A straight conducting rod of length {{0.50 m}} moves at {{6.0 m s^(-1)}} perpendicular to a uniform magnetic field of {{0.40 T}}. What is the motional EMF induced across its ends?",
        options: ["0.12 V", "0.30 V", "4.8 V", "1.2 V"],
        answerIndex: 3,
        hints: [
          "Use the motional EMF formula for a straight conductor cutting field lines perpendicularly.",
          "Substitute into {{ε = B v L}}.",
        ],
        explanation:
          "Using {{ε = B v L = 0.40 * 6.0 * 0.50 = 1.2 V}}. Dividing instead of multiplying by length {{0.50 m}} produces the tempting error {{4.8 V}}.",
      },
      {
        id: "d2-induction-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "motional-emf",
        question:
          "An aircraft of wingspan {{40 m}} flies horizontally due north at {{200 m s^(-1)}} in a region where Earth's magnetic field has a vertical component of {{4.5 * 10^(-5) T}} and a horizontal component of {{2.0 * 10^(-5) T}}. What is the induced EMF between its wingtips?",
        options: ["0.36 V", "0.16 V", "0.39 V", "0.52 V"],
        answerIndex: 0,
        hints: [
          "As the wings sweep out a horizontal plane, which component of Earth's magnetic field passes perpendicularly through that swept area?",
          "Only the **vertical** component {{B_V = 4.5 * 10^(-5) T}} is cut by horizontal wings flying north.",
        ],
        explanation:
          "The horizontal wings sweep out a horizontal area, cutting only the **vertical** component of Earth's field: {{ε = B_V v L = 4.5 * 10^(-5) * 200 * 40 = 0.36 V}}. Using the horizontal component gives {{0.16 V}}, and using the total field magnitude gives {{0.39 V}}.",
      },
      {
        id: "d2-induction-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "motional-emf",
        question:
          "In the microscopic derivation of {{ε = BvL}} for an isolated metal rod moving across a magnetic field, charge accumulation at the rod's ends stops when the magnetic force {{qvB}} on conduction electrons balances which force?",
        options: [
          "The gravitational weight of the electron",
          "The internal electrostatic force qE",
          "The viscous drag from the metal lattice",
          "The centripetal force along the rod",
        ],
        answerIndex: 1,
        hints: [
          "Separating negative electrons to one end and positive ions at the other creates a field inside the rod.",
          "Equilibrium occurs when {{qE = qvB}}, yielding {{E = vB}} and {{ε = EL = BvL}}.",
        ],
        explanation:
          "Charge separation builds up an internal uniform electric field {{E}} along the rod. Accumulation stops when the opposing **electrostatic force {{qE}}** equals the magnetic Lorentz force {{qvB}}, giving {{E = vB}} and potential difference {{ε = EL = BvL}}.",
      },
      {
        id: "d2-induction-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "motional-emf",
        question:
          "A vertical metal rod moves horizontally to the **right** through a uniform magnetic field directed **into the page**. Which end of the rod becomes positively charged, and where do conduction electrons accumulate?",
        options: [
          "Bottom end positive; electrons accumulate at top",
          "Top end positive; electrons accumulate at top",
          "Top end positive; electrons accumulate at bottom",
          "Bottom end positive; electrons accumulate at bottom",
        ],
        answerIndex: 2,
        hints: [
          "Find the direction of {{v × B}} for a positive charge moving right in a field into the page (right-hand rule).",
          "Remember electrons carry **negative** charge, so their magnetic force is opposite to {{v × B}}!",
        ],
        explanation:
          "For {{v}} right and {{B}} into the page, {{v × B}} points **upwards**. Negative electrons therefore experience a **downward** magnetic force and accumulate at the **bottom end**, leaving the **top end positively charged**.",
      },
      {
        id: "d2-induction-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "motional-emf",
        question:
          "A conducting rod of length {{0.60 m}} slides at {{4.0 m s^(-1)}} along smooth horizontal rails connected across a {{3.0 Ω}} resistor in a perpendicular uniform magnetic field of {{0.50 T}}. Assuming negligible rod and rail resistance, what is the induced current?",
        options: ["0.12 A", "1.2 A", "3.6 A", "0.40 A"],
        answerIndex: 3,
        hints: [
          "First find the motional EMF {{ε = B v L}}.",
          "Then apply Ohm's law {{I = ε / R}}.",
        ],
        explanation:
          "Motional EMF {{ε = B v L = 0.50 * 4.0 * 0.60 = 1.2 V}}. Dividing by total circuit resistance {{R = 3.0 Ω}} gives {{I = 1.2 / 3.0 = 0.40 A}}. Multiplying {{ε}} by {{R}} instead of dividing yields {{3.6 A}}.",
      },
      {
        id: "d2-induction-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Derive",
        guideRef: "motional-emf",
        question:
          "A conducting rod of length {{L}} slides at speed {{v}} along rails forming a closed loop of total resistance {{R}} in a uniform perpendicular magnetic field {{B}}. What is the magnitude of the magnetic braking force opposing its motion?",
        options: [
          "{{(B^2 L^2 v) / R}}",
          "{{(B L v) / R}}",
          "{{(B^2 L^2 v^2) / R}}",
          "{{(B L v^2) / R}}",
        ],
        answerIndex: 0,
        hints: [
          "Combine the motor force {{F_B = B I L}} with the induced current {{I = B v L / R}}.",
          "Watch out not to confuse braking **force** ({{∝ v}}) with **power** ({{∝ v^2}})!",
        ],
        explanation:
          "Substituting {{I = BvL / R}} into {{F_B = B I L}} gives {{F_B = B^2 L^2 v / R}}. Note that {{B L v / R}} is the current, while {{B^2 L^2 v^2 / R}} is the mechanical/electrical power.",
      },
      {
        id: "d2-induction-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "motional-emf",
        question:
          "A conducting rod is pulled at constant speed {{v}} along smooth conducting rails across a uniform perpendicular field {{B}} with load resistor {{R}}. If {{B}} is **doubled** while {{v}}, {{L}}, and {{R}} stay fixed, how does the mechanical power required to maintain speed {{v}} change?",
        options: [
          "Increases by a factor of 2",
          "Increases by a factor of 4",
          "Increases by a factor of 8",
          "Remains unchanged",
        ],
        answerIndex: 1,
        hints: [
          "Write power in terms of {{B}}: {{P = ε^2 / R = (B v L)^2 / R}}.",
          "Because {{B}} is squared, doubling {{B}} changes {{P}} by {{2^2}}.",
        ],
        explanation:
          "Since {{P = F_B v = B^2 L^2 v^2 / R}}, power scales with {{B^2}}. Doubling {{B}} doubles the EMF (and current) AND doubles the field acting on that current, so braking force and mechanical power both **increase by a factor of 4**.",
      },
      {
        id: "d2-induction-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Describe",
        guideRef: "motional-emf",
        question:
          "A closed rectangular wire loop moves at constant velocity from left to right across a wide region of uniform magnetic field {{B}} (much wider than the loop). When does an induced current flow in the loop?",
        options: [
          "Only while the entire loop is inside the field",
          "Continuously with constant direction across all stages",
          "While entering and exiting, in opposite directions",
          "While entering and exiting, in the same direction",
        ],
        answerIndex: 2,
        hints: [
          "When is the magnetic flux through the loop actually changing?",
          "While entering, flux increases; while fully inside, flux is constant; while exiting, flux decreases.",
        ],
        explanation:
          "Current flows **only while flux changes** — during entry (flux increasing) and exit (flux decreasing) — and in **opposite directions** by Lenz's law. While completely inside the uniform field, {{ΔΦ = 0}} so net EMF and current are zero.",
      },
      {
        id: "d2-induction-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "motional-emf",
        question:
          "A straight conductor of length {{0.50 m}} moves at {{8.0 m s^(-1)}} through a uniform magnetic field of {{0.25 T}}. The conductor is perpendicular to both {{v}} and {{B}}, while the velocity vector makes an angle of {{30°}} with the magnetic field lines. What is the induced EMF?",
        options: ["0 V", "0.87 V", "1.0 V", "0.50 V"],
        answerIndex: 3,
        hints: [
          "Only the velocity component **perpendicular** to {{B}} cuts magnetic field lines.",
          "Compute {{ε = B v L sin 30°}}.",
        ],
        explanation:
          "The perpendicular velocity component is {{v_⊥ = v sin 30° = 4.0 m s^(-1)}}. Thus {{ε = B L v sin 30° = 0.25 * 0.50 * 8.0 * 0.50 = 0.50 V}}. Using {{cos 30°}} gives {{0.87 V}}, and ignoring the angle gives {{1.0 V}}.",
      },
      {
        id: "d2-induction-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "motional-emf",
        question:
          "A metal rod slides at constant velocity {{v}} along smooth horizontal U-rails in a perpendicular magnetic field {{B}}. If the resistor {{R}} is suddenly removed (leaving an open circuit), what happens to the induced EMF across the rod and the magnetic braking force?",
        options: [
          "EMF stays BvL; braking force drops to zero",
          "EMF drops to zero; braking force drops to zero",
          "EMF stays BvL; braking force stays unchanged",
          "EMF doubles; braking force drops to zero",
        ],
        answerIndex: 0,
        hints: [
          "Does charge separation inside a moving conductor require a closed circuit?",
          "Without a closed path, {{I = 0}} — what does that do to {{F_B = B I L}}?",
        ],
        explanation:
          "The magnetic Lorentz force still separates electrons in the moving rod, so the **induced EMF remains {{BvL}}**. However, in an open circuit **current is zero** ({{I = 0}}), so the magnetic braking force {{F_B = BIL}} immediately drops to **zero**.",
      },
      {
        id: "d2-induction-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "motional-emf",
        question:
          "A rod slides on frictionless rails connected across a {{2.0 Ω}} resistor in a perpendicular magnetic field. A constant external pulling force of {{0.50 N}} keeps the rod moving at {{4.0 m s^(-1)}}. What is the induced EMF?",
        options: ["1.0 V", "2.0 V", "4.0 V", "8.0 V"],
        answerIndex: 1,
        hints: [
          "Use mechanical-to-electrical power conservation: {{P_mech = F v = ε^2 / R}}.",
          "Find {{P = 0.50 * 4.0 = 2.0 W}}, then solve {{ε = sqrt(P R)}}.",
        ],
        explanation:
          "Mechanical power input is {{P = F v = 0.50 * 4.0 = 2.0 W}}. By conservation of energy, {{P = ε^2 / R ⇒ ε = sqrt(2.0 * 2.0) = 2.0 V}}. Forgetting the square root gives the distractor {{4.0 V}}.",
      },
      {
        id: "d2-induction-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "motional-emf",
        question:
          "A conducting rod of mass {{m}} slides without friction down vertical conducting rails (joined at the top by resistor {{R}}) inside a horizontal magnetic field {{B}} perpendicular to the rails. If the resistance {{R}} is **doubled**, what happens to the rod's terminal velocity {{v_T}}?",
        options: ["Halves", "Decreases by a factor of 4", "Doubles", "Remains unchanged"],
        answerIndex: 2,
        hints: [
          "At terminal velocity, upward magnetic braking force equals downward weight: {{B^2 L^2 v_T / R = m g}}.",
          "Rearrange for {{v_T}} and check how {{v_T}} depends on {{R}}.",
        ],
        explanation:
          "Setting {{B^2 L^2 v_T / R = m g}} gives {{v_T = m g R / (B^2 L^2)}}. Doubling {{R}} halves the induced current at any given speed, so the rod must fall **twice as fast** before braking equals weight — {{v_T}} **doubles**.",
      },
      {
        id: "d2-induction-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Derive",
        guideRef: "motional-emf",
        question:
          "A square wire loop of side {{L}} and total resistance {{R}} is pushed at constant speed {{v}} perpendicularly into a uniform magnetic field {{B}}. What total thermal energy is dissipated in the loop during the interval from first touching the field boundary to being completely inside?",
        options: [
          "{{(B^2 L^2 v) / R}}",
          "{{(B^2 L^2 v^2) / R}}",
          "{{(B L^3 v) / R}}",
          "{{(B^2 L^3 v) / R}}",
        ],
        answerIndex: 3,
        hints: [
          "Find the power dissipated while the leading edge crosses the field ({{P = ε^2 / R}}).",
          "Multiply power by the time required to move distance {{L}} at speed {{v}}: {{Δt = L / v}}.",
        ],
        explanation:
          "While entering, {{ε = BvL}}, so electrical power is {{P = B^2 L^2 v^2 / R}}. Entry takes time {{Δt = L / v}}. Total thermal energy dissipated is {{E = P Δt = (B^2 L^2 v^2 / R)(L / v) = B^2 L^3 v / R}} (equivalently work {{F_B L}}).",
      },
      {
        id: "d2-induction-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "motional-emf",
        question:
          "A straight conducting rod of length {{L = 0.40 m}} rotates in a flat plane about one fixed end at constant angular speed {{ω = 10 rad s^(-1)}}, perpendicular to a uniform magnetic field {{B = 0.50 T}}. What is the magnitude of the induced EMF between its pivot and outer tip?",
        options: ["0.40 V", "0.80 V", "0.20 V", "1.6 V"],
        answerIndex: 0,
        hints: [
          "Different parts of the rod move at different speeds — from {{0}} at the pivot to {{ωL}} at the tip — so use average speed {{v_avg = 1/2 ω L}}, OR use area swept per second!",
          "In one revolution ({{T = 2π/ω}}), the rod sweeps area {{π L^2}}, giving {{ε = B (π L^2) / (2π/ω) = 1/2 B ω L^2}}.",
        ],
        explanation:
          "Since speed varies linearly from {{0}} to {{ωL}}, the average speed is {{v_avg = 1/2 ωL}}, giving {{ε = B v_avg L = 1/2 B ω L^2 = 0.5 * 0.50 * 10 * (0.40)^2 = 0.40 V}}. Using tip speed {{ωL}} without the factor of {{1/2}} gives {{0.80 V}}.",
      },
      {
        id: "d2-induction-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Describe",
        guideRef: "motional-emf",
        question:
          "A conducting rod on frictionless horizontal rails (connected across resistor {{R}} in a uniform vertical magnetic field {{B}}) is launched at initial speed {{v_0}} and then released with no external force. How does its velocity evolve?",
        options: [
          "Decelerates uniformly until stopping in finite distance",
          "Decelerates with decreasing magnitude as speed drops",
          "Continues at constant speed v₀ since rails are smooth",
          "Accelerates initially then settles to terminal speed",
        ],
        answerIndex: 1,
        hints: [
          "Express acceleration using {{a = F_B / m = -(B^2 L^2 / (mR)) v}}.",
          "As speed {{v}} drops, what happens to the braking force {{F_B ∝ v}} and the magnitude of deceleration?",
        ],
        explanation:
          "Because magnetic braking force is proportional to speed ({{F_B = B^2 L^2 v / R}}), the deceleration {{|a| = (B^2 L^2 / (mR)) v}} is greatest at launch and **decreases exponentially** as the rod slows down, converting its initial kinetic energy into heat in {{R}}.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: AC GENERATORS & MIXED D.4 HL
  // ===========================================================================
  {
    id: "d2-induction-m3",
    title: "Paper 1A · AC Generators & Mixed D.4 HL",
    level: "HL",
    questions: [
      {
        id: "d2-induction-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ac-generators-sinusoidal",
        question:
          "A rectangular generator coil of {{50}} turns and area {{0.040 m^2}} rotates at constant angular speed {{ω = 20 rad s^(-1)}} in a uniform magnetic field of {{0.30 T}}. What is the peak induced EMF?",
        options: ["0.60 V", "12 V", "24 V", "75 V"],
        answerIndex: 1,
        hints: [
          "Peak induced EMF of a rotating coil is {{ε_0 = N B A ω}}.",
          "Note that {{ω}} is already given in {{rad s^(-1)}}, so do NOT multiply by {{2π}}!",
        ],
        explanation:
          "{{ε_0 = N B A ω = 50 * 0.30 * 0.040 * 20 = 12 V}}. Multiplying by {{2π}} by mistake (treating {{ω}} as frequency {{f}}) produces the distractor {{75 V}}.",
      },
      {
        id: "d2-induction-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "State",
        guideRef: "ac-generators-sinusoidal",
        question:
          "For a coil rotating at constant angular speed in a uniform magnetic field, what is the phase difference between the magnetic flux linkage {{NΦ(t)}} and the induced EMF {{ε(t)}}?",
        options: ["0 rad (in phase)", "{{pi / 4}} rad (45°)", "{{pi / 2}} rad (90°)", "{{pi}} rad (180°)"],
        answerIndex: 2,
        hints: [
          "Compare {{NΦ(t) = NBA cos(ωt)}} and {{ε(t) = NBAω sin(ωt)}}.",
          "Sine and cosine waves are shifted by one quarter of a full cycle.",
        ],
        explanation:
          "Because {{ε(t) = -d(NΦ)/dt}}, a cosine flux linkage produces a sine induced EMF — shifted by a quarter cycle, i.e. **{{π/2}} rad ({{90°}})**.",
      },
      {
        id: "d2-induction-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "ac-generators-sinusoidal",
        question:
          "At the exact instant when a rotating AC generator coil produces its **maximum** induced EMF, what are the orientation of the coil plane and the magnetic flux through the coil?",
        options: [
          "Plane perpendicular to B; flux is maximum",
          "Plane perpendicular to B; flux is zero",
          "Plane parallel to B; flux is maximum",
          "Plane parallel to B; flux is zero",
        ],
        answerIndex: 3,
        hints: [
          "Induced EMF is proportional to the **rate of change** (gradient) of flux linkage, not its value.",
          "Where is a cosine graph steepest? Right where it crosses zero!",
        ],
        explanation:
          "When the coil **plane is parallel to {{B}}** ({{theta = 90°}}), the magnetic flux through the coil is **zero**, yet the sides of the coil cut field lines perpendicularly at full speed — giving the steepest {{dΦ/dt}} and **maximum induced EMF**.",
      },
      {
        id: "d2-induction-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "ac-generators-sinusoidal",
        question:
          "An AC generator outputs a sinusoidal EMF with peak {{10 V}} and period {{0.040 s}}. If the angular speed of the coil is **doubled**, what are the new peak EMF and new period?",
        options: [
          "Peak EMF 20 V; period 0.020 s",
          "Peak EMF 10 V; period 0.020 s",
          "Peak EMF 20 V; period 0.040 s",
          "Peak EMF 40 V; period 0.020 s",
        ],
        answerIndex: 0,
        hints: [
          "Check both {{ε_0 = NBAω}} and {{T = 2π / ω}} when {{ω}} doubles.",
          "Doubling the spin rate cuts the time for each full turn in half AND doubles the rate of flux change.",
        ],
        explanation:
          "Because {{ε_0 = NBAω ∝ ω}} and {{T = 2π/ω ∝ 1/ω}}, doubling the rotation speed **doubles peak EMF to {{20 V}}** AND **halves the period to {{0.020 s}}**. Keeping peak EMF fixed at {{10 V}} is the most common IB exam error.",
      },
      {
        id: "d2-induction-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ac-generators-sinusoidal",
        question:
          "A 100-turn generator coil of cross-sectional area {{0.025 m^2}} spins at frequency {{50 Hz}} inside a uniform magnetic field of {{0.20 T}}. What is the peak induced EMF?",
        options: ["25 V", "157 V", "78.5 V", "314 V"],
        answerIndex: 1,
        hints: [
          "First convert frequency {{f = 50 Hz}} to angular speed {{ω = 2πf}}.",
          "Substitute into {{ε_0 = 2π f N B A}}.",
        ],
        explanation:
          "{{ω = 2π(50) = 100π rad s^(-1)}}. Peak EMF {{ε_0 = NBAω = 100 * 0.20 * 0.025 * 100π = 50π ≈ 157 V}}. Forgetting the {{2π}} factor yields {{25 V}}.",
      },
      {
        id: "d2-induction-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "ac-generators-sinusoidal",
        question:
          "The magnetic flux linkage of a rotating coil varies with time according to {{NΦ(t) = 0.080 cos(100 pi t)}} (in Wb, with {{t}} in seconds). What is the peak induced EMF?",
        options: ["4.0 V", "8.0 V", "25.1 V", "50.3 V"],
        answerIndex: 2,
        hints: [
          "Read off {{NΦ_0 = 0.080 Wb}} and {{ω = 100π rad s^(-1)}} directly from {{NΦ(t) = NΦ_0 cos(ωt)}}.",
          "Differentiating gives {{ε_0 = NΦ_0 ω}}.",
        ],
        explanation:
          "Since {{NΦ_0 = 0.080 Wb}} and {{ω = 100π rad s^(-1)}}, the peak induced EMF is {{ε_0 = NΦ_0 ω = 0.080 * 100π = 8.0π ≈ 25.1 V}}. Dropping {{π}} gives {{8.0 V}}.",
      },
      {
        id: "d2-induction-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "ac-generators-sinusoidal",
        question:
          "Replacing the two slip rings of a simple AC generator with a **split-ring commutator** changes the output voltage across an external resistor to which waveform?",
        options: [
          "A perfectly steady, flat constant DC voltage",
          "A sinusoidal AC wave with twice the frequency",
          "A half-wave pulse with alternating zero gaps",
          "A pulsating unidirectional (full-wave) DC voltage",
        ],
        answerIndex: 3,
        hints: [
          "A split-ring commutator reverses the coil's connection to the external circuit every half-turn at {{ε = 0}}.",
          "What does flipping every negative half-cycle of {{ε_0 sin(ωt)}} upward produce?",
        ],
        explanation:
          "A split-ring commutator swaps external contacts twice per cycle (whenever {{ε = 0}}), flipping the negative half-cycles positive to yield a **pulsating unidirectional (full-wave) DC voltage**, {{|ε_0 sin(ωt)|}} — not a flat constant voltage.",
      },
      {
        id: "d2-induction-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "ac-generators-sinusoidal",
        question:
          "An AC generator of negligible internal resistance spins at constant angular speed {{ω}} while connected to a load resistor {{R}}. If {{R}} is **halved**, what happens to the peak EMF {{ε_0}} and the average external torque required to maintain constant {{ω}}?",
        options: [
          "Peak EMF unchanged; required torque doubles",
          "Peak EMF doubles; required torque doubles",
          "Peak EMF halves; required torque halves",
          "Peak EMF unchanged; required torque halves",
        ],
        answerIndex: 0,
        hints: [
          "Does {{ε_0 = NBAω}} depend on the load resistance {{R}}?",
          "Halving {{R}} doubles the induced current and electrical power output — so what happens to Lenz's opposing magnetic torque?",
        ],
        explanation:
          "Peak EMF {{ε_0 = NBAω}} is independent of {{R}}, so it stays **unchanged**. Halving {{R}} doubles the induced current and electrical power {{P = ε^2 / R}}, so by energy conservation ({{P = τω}}) the driving **torque doubles**.",
      },
      {
        id: "d2-induction-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ac-generators-sinusoidal",
        question:
          "An AC generator outputs a peak EMF of {{18 V}} at frequency {{25 Hz}}. If the magnetic field strength {{B}} is **halved** while the rotation frequency is **tripled** to {{75 Hz}}, what is the new peak EMF?",
        options: ["9.0 V", "27 V", "54 V", "108 V"],
        answerIndex: 1,
        hints: [
          "Use the proportionality {{ε_0 = 2π f N B A ∝ B f}}.",
          "Multiply {{18 V}} by {{(1/2) * 3}}.",
        ],
        explanation:
          "Since {{ε_0 ∝ B f}}, halving {{B}} and tripling {{f}} scales the peak EMF by {{0.5 * 3 = 1.5}}: {{ε_0' = 1.5 * 18 = 27 V}}.",
      },
      {
        id: "d2-induction-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ac-generators-sinusoidal",
        question:
          "An AC generator has period {{T = 20 ms}} and starts at {{t = 0}} with {{ε(0) = 0}} (rising positively). What is the earliest time {{t > 0}} at which the induced EMF equals **half** its peak value ({{+0.50 ε_0}})?",
        options: ["2.5 ms", "5.0 ms", "1.67 ms", "3.33 ms"],
        answerIndex: 2,
        hints: [
          "Set {{sin(ωt) = 0.50}} — a sine wave is NOT linear, so half-peak is NOT halfway to {{T/4}}!",
          "{{sin(30°) = 0.50}}, and {{30°}} is {{1/12}} of a full {{360°}} cycle.",
        ],
        explanation:
          "Solving {{sin(2πt / T) = 0.50}} gives {{2πt / T = π/6 ⇒ t = T/12 = 20 ms / 12 = 1.67 ms}}. Assuming linear growth up to {{T/4 = 5.0 ms}} gives the common trap {{2.5 ms}}.",
      },
      {
        id: "d2-induction-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "ac-generators-sinusoidal",
        question:
          "At a certain instant during the rotation of an AC generator coil, the instantaneous magnetic flux linkage is {{0.60}} of its maximum value ({{0.60 NΦ_0}}). What is the magnitude of the instantaneous induced EMF as a fraction of the peak EMF {{ε_0}}?",
        options: ["0.36 ε₀", "0.40 ε₀", "0.60 ε₀", "0.80 ε₀"],
        answerIndex: 3,
        hints: [
          "Write {{NΦ / NΦ_0 = cos(ωt) = 0.60}} and {{|ε| / ε_0 = |sin(ωt)|}}.",
          "Apply the Pythagorean identity {{sin^2(ωt) + cos^2(ωt) = 1}}.",
        ],
        explanation:
          "Since {{cos(ωt) = 0.60}}, {{|sin(ωt)| = sqrt(1 - 0.60^2) = sqrt(0.64) = 0.80}}. Hence {{|ε| = 0.80 ε_0}}. Subtracting {{1 - 0.60 = 0.40}} is a common linear-thinking misconception.",
      },
      {
        id: "d2-induction-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "faraday-lenz-laws",
        question:
          "A small flat wire loop lies concentrically inside a larger wire loop in the same plane. The large outer loop carries a **clockwise** current that is steadily **decreasing** towards zero. What is the direction of the induced current in the small inner loop?",
        options: [
          "Clockwise, to oppose decreasing inward flux",
          "Anticlockwise, to oppose decreasing inward flux",
          "Clockwise, to oppose increasing outward flux",
          "Zero, because the two loops do not touch",
        ],
        answerIndex: 0,
        hints: [
          "Use the right-hand grip rule on the outer clockwise loop: does its magnetic field point into or out of the page inside the loop?",
          "Because that inward flux is **decreasing**, Lenz's law induces a field in the **same** direction (into the page) to prop it up.",
        ],
        explanation:
          "A clockwise outer current creates magnetic flux **into the page**. As the current decreases, this inward flux weakens. By Lenz's law, the inner loop opposes the decrease by generating its own inward magnetic field, requiring a **clockwise** induced current.",
      },
      {
        id: "d2-induction-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "magnetic-flux-linkage",
        question:
          "A 100-turn flat coil of area {{0.050 m^2}} sits in a uniform {{0.80 T}} magnetic field. Its normal is rotated from {{theta = 0°}} to {{theta = 60°}} in {{0.025 s}}. What is the magnitude of the **average** induced EMF during this rotation?",
        options: ["40 V", "80 V", "160 V", "139 V"],
        answerIndex: 1,
        hints: [
          "Find {{Φ_1 = BA cos 0°}} and {{Φ_2 = BA cos 60°}}, then take their difference {{|ΔΦ|}}.",
          "Apply {{|ε_avg| = N |ΔΦ| / Δt}}.",
        ],
        explanation:
          "{{BA = 0.80 * 0.050 = 0.040 Wb}}. Since {{cos 0° = 1}} and {{cos 60° = 0.50}}, {{|ΔΦ| = 0.040(1 - 0.50) = 0.020 Wb}}. Thus {{|ε_avg| = 100 * 0.020 / 0.025 = 80 V}}.",
      },
      {
        id: "d2-induction-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "motional-emf",
        question:
          "Two identical conducting rods slide on identical smooth horizontal U-rails in identical perpendicular fields {{B}}, connected to resistors {{R_1 = R}} and {{R_2 = 2R}}. Both rods are pulled by the **same constant external force** {{F}} and settle to constant speeds {{v_1}} and {{v_2}}. What is the ratio {{v_2 / v_1}}?",
        options: ["0.25", "0.50", "2.0", "4.0"],
        answerIndex: 2,
        hints: [
          "At constant speed, pulling force equals magnetic braking force: {{F = B^2 L^2 v / R}}.",
          "Rearrange for {{v}} when {{F}}, {{B}}, and {{L}} are all constant.",
        ],
        explanation:
          "Solving {{F = B^2 L^2 v / R}} gives {{v = F R / (B^2 L^2) ∝ R}}. Because {{R_2 = 2 R_1}}, the second rod must travel **twice as fast** to generate the same braking force {{F}}, so {{v_2 / v_1 = 2.0}}.",
      },
      {
        id: "d2-induction-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "ac-generators-sinusoidal",
        question:
          "An AC generator of negligible internal resistance is connected across a fixed resistor {{R}}. If the rotational frequency {{f}} of the generator is **doubled**, by what factor does the **average electrical power** dissipated in the resistor change?",
        options: [
          "Remains unchanged",
          "Increases by a factor of 2",
          "Increases by a factor of 8",
          "Increases by a factor of 4",
        ],
        answerIndex: 3,
        hints: [
          "How does peak EMF {{ε_0 = 2πfNBA}} change when {{f}} doubles?",
          "Recall electrical power {{P ∝ ε_0^2 / R}} (specifically {{P_avg = ε_0^2 / (2R)}}).",
        ],
        explanation:
          "Doubling {{f}} doubles peak EMF {{ε_0}}. Because electrical power dissipated in a fixed resistor scales with the **square** of voltage ({{P_avg = ε_0^2 / (2R) ∝ f^2}}), the average power **increases by a factor of 4**.",
      },
    ],
  },
];
