// ---------------------------------------------------------------------------
// IB Diploma Physics (First Assessment 2025) — Paper 2 (SL)
// 15 structured & extended-response questions (ALL level: "SL") spanning
// all 8 SL topics across Themes A–E. Calculator & Data Booklet permitted.
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const SVG_VELOCITY_SELECTOR =
  '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crossed electric and magnetic field velocity selector with positive top plate, negative bottom plate, downward electric field E, magnetic field B directed into the page, and an electron travelling horizontally from left to right">' +
  '<rect x="0" y="0" width="500" height="240" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<rect x="115" y="34" width="270" height="12" rx="3" fill="#dc2626"/>' +
  '<rect x="115" y="194" width="270" height="12" rx="3" fill="#2563eb"/>' +
  '<g font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">' +
  '<text x="150" y="26" fill="#dc2626">+</text><text x="200" y="26" fill="#dc2626">+</text><text x="250" y="26" fill="#dc2626">+</text><text x="300" y="26" fill="#dc2626">+</text><text x="350" y="26" fill="#dc2626">+</text>' +
  '<text x="150" y="222" fill="#2563eb">−</text><text x="200" y="222" fill="#2563eb">−</text><text x="250" y="222" fill="#2563eb">−</text><text x="300" y="222" fill="#2563eb">−</text><text x="350" y="222" fill="#2563eb">−</text>' +
  "</g>" +
  '<g stroke="#ef4444" stroke-width="1.4" stroke-dasharray="4,4">' +
  '<line x1="155" y1="50" x2="155" y2="188"/><line x1="250" y1="50" x2="250" y2="188"/><line x1="345" y1="50" x2="345" y2="188"/>' +
  "</g>" +
  '<g fill="#ef4444">' +
  '<polygon points="155,190 151,181 159,181"/><polygon points="250,190 246,181 254,181"/><polygon points="345,190 341,181 349,181"/>' +
  "</g>" +
  '<text x="360" y="84" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">E (down)</text>' +
  '<g stroke="#0f766e" stroke-width="1.6" fill="none">' +
  '<circle cx="195" cy="80" r="8"/><line x1="190" y1="75" x2="200" y2="85"/><line x1="200" y1="75" x2="190" y2="85"/>' +
  '<circle cx="305" cy="80" r="8"/><line x1="300" y1="75" x2="310" y2="85"/><line x1="310" y1="75" x2="300" y2="85"/>' +
  '<circle cx="195" cy="160" r="8"/><line x1="190" y1="155" x2="200" y2="165"/><line x1="200" y1="155" x2="190" y2="165"/>' +
  '<circle cx="305" cy="160" r="8"/><line x1="300" y1="155" x2="310" y2="165"/><line x1="310" y1="155" x2="300" y2="165"/>' +
  "</g>" +
  '<text x="394" y="164" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f766e">B (into page)</text>' +
  '<line x1="30" y1="120" x2="455" y2="120" stroke="#334155" stroke-width="2" stroke-dasharray="7,5"/>' +
  '<polygon points="462,120 450,115 450,125" fill="#334155"/>' +
  '<circle cx="90" cy="120" r="11" fill="#0f172a"/>' +
  '<text x="90" y="124" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">e⁻</text>' +
  '<line x1="103" y1="120" x2="142" y2="120" stroke="#0f172a" stroke-width="2.4"/>' +
  '<polygon points="148,120 138,115 138,125" fill="#0f172a"/>' +
  '<text x="126" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">v</text>' +
  "</svg>";

export const paper: ExamPaper = {
  id: "exam-p2-sl",
  title: "Paper 2 (SL) · Structured & Extended Response",
  paperType: "Paper 2 (SL)",
  level: "SL",
  calculator: true,
  minutes: 90,
  questions: [
    // ===================== Q01: A.1 Projectile Max Height (SL) ==============
    {
      id: "exam-p2-sl-q01",
      kind: "short",
      topicId: "a1-mechanics",
      guideRef: "kinematics-projectiles",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Resolve initial vertical velocity and use v_y² = u_y² − 2gH",
      question:
        "A football is kicked from level ground with an initial velocity of `25.0 m s⁻¹` at an angle of `36.9°` above the horizontal (`sin 36.9° = 0.600`, `cos 36.9° = 0.800`). Air resistance is negligible (take `g = 9.81 m s⁻²`). Calculate the maximum height reached by the football, to 3 significant figures (in `m`).",
      answer: { type: "number", value: 11.5, tolerance: 0.1, display: "11.5 m" },
      traps: [
        {
          spec: { type: "number", value: 31.9, tolerance: 0.3 },
          feedback: "You used the total launch speed 25.0 m s⁻¹ instead of the vertical component u_y = 25.0 sin 36.9° = 15.0 m s⁻¹.",
        },
        {
          spec: { type: "number", value: 20.4, tolerance: 0.3 },
          feedback: "That uses cos 36.9° (horizontal component) instead of sin 36.9° (vertical component).",
        },
      ],
      hints: [
        "Find the initial vertical velocity component `u_y = u sin 36.9°`.",
        "At maximum height, the vertical velocity is zero (`v_y = 0`), so solve `0 = u_y² − 2gH`.",
      ],
      solution: [
        "Initial vertical velocity: `u_y = 25.0 × 0.600 = 15.0 m s⁻¹`.",
        "Using `v_y² = u_y² − 2gH` with `v_y = 0`: `H = 15.0² / (2 × 9.81) = 225 / 19.62 = 11.47 m ≈ 11.5 m`.",
      ],
      commonError: "Substituting the full speed `25.0 m s⁻¹` instead of the vertical component `u_y` into `v² = u² + 2as`.",
    },

    // ===================== Q02: A.2 Circular Motion & Friction (SL) =========
    {
      id: "exam-p2-sl-q02",
      kind: "short",
      topicId: "a1-mechanics",
      guideRef: "momentum-circular",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Equate maximum static friction μ_s mg to centripetal force mv²/r",
      question:
        "A `1200 kg` car drives around a flat, unbanked circular roundabout of radius `45.0 m` at a constant speed of `15.0 m s⁻¹`. Take `g = 9.81 m s⁻²`. Calculate the minimum coefficient of static friction `μ_s` between the tyres and the road required to prevent the car from skidding outward, to 3 significant figures.",
      answer: { type: "number", value: 0.51, tolerance: 0.005, display: "0.510" },
      traps: [
        {
          spec: { type: "number", value: 6000, tolerance: 50 },
          feedback: "6000 N is the required centripetal force mv²/r; divide by normal reaction mg to obtain the dimensionless coefficient μ_s.",
        },
      ],
      hints: [
        "On a flat road, inward static friction provides the centripetal force: `F_f = mv²/r`.",
        "Set `μ_s mg = mv²/r` and notice that mass `m` cancels out.",
        "Compute `μ_s = v² / (gr)`.",
      ],
      solution: [
        "Required centripetal force equals maximum static friction: `μ_s mg = mv²/r`.",
        "Cancelling `m`: `μ_s = v² / (gr) = 15.0² / (9.81 × 45.0) = 225 / 441.45 = 0.5097 ≈ 0.510`.",
      ],
      commonError: "Forgetting to divide by `g` (calculating `v²/r = 5.00 m s⁻²` instead of `v²/(gr)`).",
    },

    // ===================== Q03: A.3 Terminal Velocity & Energy (SL, 5m) =====
    {
      id: "exam-p2-sl-q03",
      kind: "written",
      topicId: "a1-mechanics",
      guideRef: "work-energy-power",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 5,
      strategy: "Trace net force, acceleration, and energy pathways across every flight stage",
      question:
        "A skydiver of mass `75 kg` steps out of a hovering helicopter and accelerates vertically downward until reaching a terminal speed of `54 m s⁻¹`. Later, the skydiver deploys a parachute and slows to a much lower terminal speed of `5.0 m s⁻¹`. Explain the skydiver's motion and energy transformations from leaving the helicopter until reaching the second terminal speed, in terms of Newton's laws and conservation of energy.",
      hints: [
        "Begin at `t = 0`: what is the air drag when speed is zero, and what is the initial acceleration?",
        "Explain how rising air resistance alters the resultant downward force until the first constant speed is reached.",
        "Explain the direction of the net force immediately after the canopy opens, and then how drag settles back to equal weight.",
        "Include the energy conversion both while accelerating and while falling at constant speed.",
      ],
      modelAnswer:
        "At the moment of exit, speed is zero so air resistance is zero; the resultant force equals weight `mg` downward, giving an initial downward acceleration of `9.81 m s⁻²`. As speed grows, upward air drag increases, lowering the resultant force and decreasing acceleration until upward drag equals weight (`ΣF = 0`), establishing the first steady fall speed by Newton's first law. Deploying the canopy dramatically enlarges surface area so upward drag momentarily exceeds weight, creating a net upward force that decelerates the skydiver rapidly. As speed drops, drag decreases until it balances weight again at the lower steady `5.0 m s⁻¹`. Throughout the descent, gravitational potential energy initially converts into both kinetic energy and thermal energy of the air, and at constant terminal speed all lost gravitational potential energy is dissipated as thermal energy via work done against drag.",
      markScheme: [
        {
          point: "Initially speed and drag are zero, so net downward force equals weight `mg` and initial acceleration is `g` (`9.81 m s⁻²`).",
          keywords: ["initial", "9.81", "weight", "zero"],
        },
        {
          point: "As speed rises, upward drag grows, reducing resultant force and acceleration until drag balances weight (`ΣF = 0`, first steady speed).",
          keywords: ["drag increases", "balances weight", "resultant force", "equals weight"],
        },
        {
          point: "Opening the canopy makes upward drag exceed weight, producing a net upward force and strong deceleration.",
          keywords: ["exceeds weight", "upward force", "decelerat"],
        },
        {
          point: "As speed drops, drag falls until it again balances weight at the lower constant speed of `5.0 m s⁻¹`.",
          keywords: ["drag decreases", "balances weight again", "lower"],
        },
        {
          point: "Gravitational potential energy transfers into kinetic energy and thermal energy while accelerating, and entirely into thermal energy (work against drag) at constant speed.",
          keywords: ["gravitational potential", "thermal", "kinetic"],
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
          descriptor: "Describes weight vs air resistance qualitatively for one phase, with incomplete Newton's law links or missing energy analysis.",
          indicators: ["States drag equals weight at terminal speed without explaining parachute deceleration or energy"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains both terminal speeds and the net upward force upon parachute opening accurately, with minor gaps in acceleration or energy detail.",
          indicators: ["Clear force-balance transitions across all phases; partial energy pathway"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, precise Newtonian force-acceleration narrative across every stage plus accurate gravitational-to-kinetic and thermal energy transformations.",
          indicators: ["Explicit `ΣF` direction in all four stages and full energy conservation breakdown"],
        },
      ],
      commonError: "Saying the skydiver moves *upward* when the parachute opens — the net force and acceleration point upward, which slows the *downward* velocity.",
    },

    // ===================== Q04: B.1 Calorimetry with Latent Heat (SL) =======
    {
      id: "exam-p2-sl-q04",
      kind: "short",
      topicId: "b1-thermal-gases",
      guideRef: "thermal-transfers-radiation",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Energy lost by warm water = latent heat to melt ice + sensible heat to warm melted water",
      question:
        "An insulated calorimeter of negligible heat capacity holds `0.250 kg` of water at `20.0 °C`. A `0.050 kg` block of ice at `0.0 °C` is added and melts completely. Take specific heat capacity of water `c = 4180 J kg⁻¹ K⁻¹` and specific latent heat of fusion of ice `L_f = 3.34 × 10⁵ J kg⁻¹`. Calculate the final equilibrium temperature of the mixture, to 3 significant figures (in `°C`).",
      answer: { type: "number", value: 3.35, tolerance: 0.05, display: "3.35 °C" },
      traps: [
        {
          spec: { type: "number", value: 4.02, tolerance: 0.08 },
          feedback: "You forgot to warm the 0.050 kg of melted ice water from 0.0 °C up to the final temperature T.",
        },
        {
          spec: { type: "number", value: 16.7, tolerance: 0.2 },
          feedback: "That omits the latent heat of fusion m_ice L_f needed to melt the ice at 0 °C.",
        },
      ],
      hints: [
        "Account for *two* energy terms absorbed by the ice: melting at `0.0 °C` (`m_i L_f`) AND warming the melted water from `0.0 °C` to `T` (`m_i c T`).",
        "Set total thermal energy gained by the ice equal to thermal energy lost by the `0.250 kg` of warm water: `m_w c (20.0 − T)`.",
        "Collect all `T` terms on one side and solve for `T`.",
      ],
      solution: [
        "Energy to melt ice: `m_i L_f = 0.050 × 3.34 × 10⁵ = 16700 J`.",
        "Energy to warm melted ice from `0.0 °C` to `T`: `0.050 × 4180 × T = 209 T`.",
        "Energy lost by warm water: `0.250 × 4180 × (20.0 − T) = 20900 − 1045 T`.",
        "Equating: `16700 + 209 T = 20900 − 1045 T` → `1254 T = 4200` → `T = 3.35 °C`.",
      ],
      commonError: "Forgetting the `m_ice c (T − 0)` warming term for the melted ice water after phase change.",
    },

    // ===================== Q05: B.3 Kinetic Theory Pressure Explanation (SL, 4m) ==
    {
      id: "exam-p2-sl-q05",
      kind: "written",
      topicId: "b1-thermal-gases",
      guideRef: "gas-laws-kmt",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      strategy: "Link constant T → constant speed/impulse → smaller volume → higher collision rate → larger F/A",
      question:
        "A fixed sample of ideal gas is compressed slowly inside a metal cylinder by pushing a piston inward while the cylinder stays submerged in a large constant-temperature water bath. Using the kinetic model of an ideal gas, explain why the gas pressure rises.",
      hints: [
        "What does constant temperature tell you about the average kinetic energy and rms speed of the gas molecules?",
        "Does the average momentum change (`Δp`) per wall collision change or remain the same?",
        "Why do wall collisions happen more often per second when the volume decreases, and how does Newton's second law connect this to pressure?",
      ],
      modelAnswer:
        "Because the water bath maintains constant temperature, the average translational kinetic energy of the molecules (`{{3/2}} k_B T`) and their average speed stay unchanged. Consequently, each elastic impact with the walls transfers the same average impulse (`Δp`). However, shrinking the volume increases the number density of molecules and shortens the distance between opposite walls, so molecules strike each unit area of the wall far more frequently. By Newton's second law (`F = Δp/Δt`), this greater rate of momentum change produces a larger average force per unit area (`P = F/A`), raising the pressure.",
      markScheme: [
        {
          point: "Constant temperature means average molecular kinetic energy and average/rms speed remain unchanged.",
          keywords: ["average kinetic energy", "kinetic energy", "unchanged", "constant"],
        },
        {
          point: "Each collision with a wall produces the same average change in momentum / impulse (`Δp`).",
          keywords: ["impulse", "same average", "momentum"],
        },
        {
          point: "Smaller volume increases molecular number density / shortens travel distance, increasing the frequency (rate) of collisions with the walls.",
          keywords: ["more frequently", "collision", "frequency", "number density", "rate"],
        },
        {
          point: "Greater rate of momentum transfer increases average force per unit area (`F = Δp/Δt`, `P = F/A`), so pressure rises.",
          keywords: ["force per unit area", "rate of momentum", "newton's second law", "f/a"],
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
          descriptor: "Quotes `PV = constant` or mentions more collisions without linking temperature to molecular speed or momentum transfer to force.",
          indicators: ["Macroscopic law only, or misses constant speed / Newton's second law"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Full microscopic kinetic-theory causal chain from constant `E_k` and constant impulse per hit to higher collision frequency and larger `Δp/Δt` per unit area.",
          indicators: ["Explicitly holds molecular speed constant and connects collision rate to `F = Δp/Δt`"],
        },
      ],
      commonError: "Claiming molecules move *faster* during isothermal compression — at constant temperature, molecular speed does not change!",
    },

    // ===================== Q06: B.5 Potential Divider with NTC Thermistor (SL) ===
    {
      id: "exam-p2-sl-q06",
      kind: "short",
      topicId: "b2-circuits",
      guideRef: "potential-dividers-sensors",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply V_out = V_in R_therm / (R_fixed + R_therm)",
      question:
        "A `12.0 V` DC supply with negligible internal resistance is connected across a potential divider made of a fixed `4.0 kΩ` resistor in series with an NTC thermistor. At `25 °C`, the thermistor resistance is `8.0 kΩ`. Calculate the potential difference across the thermistor at `25 °C`, to 2 significant figures (in `V`).",
      answer: { type: "number", value: 8.0, tolerance: 0.05, display: "8.0 V" },
      traps: [
        {
          spec: { type: "number", value: 4.0, tolerance: 0.05 },
          feedback: "4.0 V is the potential difference across the fixed 4.0 kΩ resistor; the question asks for the p.d. across the 8.0 kΩ thermistor.",
        },
      ],
      hints: [
        "Use the potential divider ratio `V_out = V_in × R_2 / (R_1 + R_2)`.",
        "Put the thermistor resistance (`8.0 kΩ`) in the numerator and total series resistance (`4.0 + 8.0 = 12.0 kΩ`) in the denominator.",
      ],
      solution: [
        "Total series resistance `R_tot = 4.0 + 8.0 = 12.0 kΩ`.",
        "`V_out = 12.0 × (8.0 / 12.0) = 8.0 V`.",
      ],
      commonError: "Putting the fixed resistor (`4.0 kΩ`) in the numerator instead of the sensing component across which `V_out` is measured.",
    },

    // ===================== Q07: B.5 Kirchhoff & Non-Ohmic Parallel Branch (SL, 3m) ==
    {
      id: "exam-p2-sl-q07",
      kind: "written",
      topicId: "b2-circuits",
      guideRef: "series-parallel-kirchhoff",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 3,
      strategy: "State junction rule + charge conservation, then compare heated filament resistance vs constant R",
      question:
        "A tungsten filament lamp and an ohmic carbon resistor are wired in parallel across a variable DC power supply. State Kirchhoff's junction rule and the fundamental conservation law it represents, and explain how the current ratio `I_lamp / I_resistor` changes as the supply voltage is raised from `1 V` to `12 V`.",
      hints: [
        "Recall what is conserved at an electrical junction (`ΣI_in = ΣI_out`).",
        "Since both components are in parallel, they share the same p.d. `V`, so `I_lamp / I_resistor = R_resistor / R_lamp`.",
        "What happens to the temperature and resistance of a tungsten filament as voltage increases?",
      ],
      modelAnswer:
        "Kirchhoff's junction rule states that the sum of currents entering any node equals the sum of currents leaving it (`ΣI_in = ΣI_out`), expressing conservation of electric charge. As the potential difference rises from `1 V` to `12 V`, Joule heating elevates the tungsten filament's temperature, increasing metal lattice vibrations and electron scattering so the filament's resistance rises sharply. Because the carbon resistor maintains constant resistance while `R_lamp` grows, the ratio `I_lamp / I_resistor = R_resistor / R_lamp` decreases.",
      markScheme: [
        {
          point: "States Kirchhoff's junction rule (`ΣI_in = ΣI_out`) and identifies conservation of electric charge.",
          keywords: ["conservation of", "charge", "leaving"],
        },
        {
          point: "Explains that heating raises lattice vibrations / electron collisions in the tungsten filament, increasing its resistance.",
          keywords: ["lattice", "temperature", "resistance rises", "resistance increases"],
        },
        {
          point: "Concludes that since `R_resistor` stays constant while `R_lamp` rises at the same parallel `V`, `I_lamp / I_resistor` decreases.",
          keywords: ["decreases", "falls", "smaller"],
        },
      ],
      commonError: "Confusing Kirchhoff's junction rule (charge conservation) with the loop rule (energy conservation).",
    },

    // ===================== Q08: C.2 Wave Speed on a Stretched String (SL) ===
    {
      id: "exam-p2-sl-q08",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "wave-model-graphs",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Convert mass to kg, compute linear density μ = m/L, then v = √(T/μ)",
      question:
        "A guitar string of length `0.650 m` and mass `1.95 g` is stretched under a tension of `75.0 N`. Calculate the speed of transverse waves travelling along the string, to 3 significant figures (in `m s⁻¹`).",
      answer: { type: "number", value: 158, tolerance: 1, display: "158 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 5.0, tolerance: 0.1 },
          feedback: "Convert the mass from grams to kilograms (1.95 g = 1.95 × 10⁻³ kg) before finding μ = m/L.",
        },
      ],
      hints: [
        "Convert mass to kilograms (`1.95 g = 1.95 × 10⁻³ kg`) and compute linear mass density `μ = m / L`.",
        "Apply `v = {{sqrt(T / μ)}}`.",
      ],
      solution: [
        "Linear mass density: `μ = (1.95 × 10⁻³ kg) / 0.650 m = 3.00 × 10⁻³ kg m⁻¹`.",
        "Wave speed: `v = {{sqrt(75.0 / 0.00300)}} = {{sqrt(25000)}} = 158 m s⁻¹`.",
      ],
      commonError: "Leaving mass in grams instead of converting to SI kilograms, making `v` too small by `√1000 ≈ 31.6`.",
    },

    // ===================== Q09: C.1 SHM Definition & Energy Cycle (SL, 4m) ==
    {
      id: "exam-p2-sl-q09",
      kind: "written",
      topicId: "c1-shm-waves",
      guideRef: "shm-foundations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Outline",
      marks: 4,
      strategy: "State both defining features of a = −ω²x, then map E_k, E_p and E_total across the cycle",
      question:
        "A glider attached to a light horizontal helical spring oscillates freely on a frictionless air track. Define simple harmonic motion, and outline how the glider's kinetic energy, elastic potential energy, and total mechanical energy vary over one full oscillation starting from maximum positive displacement.",
      hints: [
        "Your SHM definition must state BOTH proportionality to displacement AND direction toward equilibrium.",
        "Identify where kinetic energy and elastic potential energy reach their maxima and zeros (`±x₀` vs `x = 0`).",
        "State how total mechanical energy behaves in the absence of friction and how many times energy exchanges per cycle.",
      ],
      modelAnswer:
        "Simple harmonic motion is oscillatory motion in which acceleration is directly proportional to displacement from a fixed equilibrium position and is always directed back toward equilibrium (`a = −ω²x`). Starting at maximum positive displacement (`+x₀`), the glider is instantaneously at rest so kinetic energy is zero and elastic potential energy is maximum. Passing through equilibrium (`x = 0`), speed peaks so kinetic energy is maximum and elastic potential energy is zero, before reversing to maximum elastic potential energy at `−x₀` and returning via equilibrium to `+x₀`. Thus kinetic and elastic potential energy interchange twice per period while their sum, total mechanical energy, remains constant because no dissipative forces act.",
      markScheme: [
        {
          point: "Defines SHM: acceleration is directly proportional to displacement and always directed toward equilibrium (`a = −ω²x`).",
          keywords: ["proportional to displacement", "toward equilibrium", "equilibrium"],
        },
        {
          point: "At maximum displacement (`±x₀`), kinetic energy is zero and elastic potential energy is maximum.",
          keywords: ["zero", "maximum", "rest"],
        },
        {
          point: "At equilibrium (`x = 0`), kinetic energy is maximum and elastic potential energy is zero.",
          keywords: ["speed peaks", "kinetic energy is maximum", "potential energy is zero"],
        },
        {
          point: "Energy interchanges continuously twice per period while total mechanical energy stays constant (no friction/damping).",
          keywords: ["twice per period", "constant", "dissipative"],
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
          descriptor: "Gives an incomplete definition of SHM (missing direction or proportionality) or only states that total energy is conserved.",
          indicators: ["Omits restoring direction or fails to locate maxima/zeros at `x = 0` and `±x₀`"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Gives the complete two-part SHM definition and clearly tracks `E_k`, `E_p`, and constant `E_total` at extreme and equilibrium positions through a full cycle.",
          indicators: ["Both `a ∝ −x` conditions stated; accurate `E_k`/`E_p` swap twice per cycle"],
        },
      ],
      commonError: "Forgetting to specify the *direction* ('directed toward equilibrium' / minus sign) in the definition of SHM.",
    },

    // ===================== Q10: C.3 Critical Angle Glass-Water (SL) =========
    {
      id: "exam-p2-sl-q10",
      kind: "short",
      topicId: "c2-wave-phenomena",
      guideRef: "refraction-diffraction-double-slit",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply Snell's law n₁ sin θ_c = n₂ sin 90°",
      question:
        "A ray of light travelling inside flint glass (refractive index `n₁ = 1.62`) strikes the plane interface with water (refractive index `n₂ = 1.33`). Calculate the critical angle `θ_c` for total internal reflection at this boundary, to 3 significant figures (in degrees `°`).",
      answer: { type: "number", value: 55.2, tolerance: 0.2, display: "55.2°" },
      traps: [
        {
          spec: { type: "number", value: 38.1, tolerance: 0.3 },
          feedback: "38.1° is the critical angle for glass–air (sin⁻¹(1/1.62)); here the second medium is water (n₂ = 1.33), not air.",
        },
      ],
      hints: [
        "At the critical angle, the refracted ray skims along the boundary at `θ₂ = 90°`.",
        "Substitute `n₁ = 1.62`, `n₂ = 1.33`, and `sin 90° = 1` into `n₁ sin θ_c = n₂ sin 90°`.",
      ],
      solution: [
        "By Snell's law at `θ₂ = 90°`: `sin θ_c = n₂ / n₁ = 1.33 / 1.62 = 0.8210`.",
        "`θ_c = arcsin(0.8210) = 55.2°`.",
      ],
      commonError: "Using `sin θ_c = 1 / n₁` as if the second medium were air (`n₂ = 1.00`) instead of water (`n₂ = 1.33`).",
    },

    // ===================== Q11: C.4 Travelling vs Standing Waves (SL, 4m) ===
    {
      id: "exam-p2-sl-q11",
      kind: "written",
      topicId: "c2-wave-phenomena",
      guideRef: "standing-waves-resonance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Distinguish",
      marks: 4,
      strategy: "Address both wave types explicitly across energy, amplitude, phase, and superposition",
      question:
        "Distinguish between a travelling (progressive) wave and a standing (stationary) wave with reference to energy transfer, particle amplitude, phase relationships between neighbouring points, and how a standing wave forms inside a resonant air pipe.",
      hints: [
        "For IB 'Distinguish' marks, explicitly state BOTH sides ('travelling wave does X, whereas standing wave does Y') for every criterion.",
        "Compare energy propagation, uniform vs node–antinode amplitude, continuous vs in-phase/antiphase loops, and counter-propagating superposition.",
      ],
      modelAnswer:
        "First, a progressive wave propagates energy along its travel direction, whereas a stationary wave stores vibrational energy locally with zero net energy transfer between nodes. Second, all particles in an undamped progressive wave oscillate with identical amplitude, whereas in a stationary wave amplitude varies smoothly with position from zero at nodes to a maximum at antinodes. Third, phase shifts continuously along a progressive wave, whereas all particles between two adjacent nodes oscillate in phase with one another and `π rad` (`180°`) out of phase with adjacent loops. Fourth, a stationary wave forms by superposition of two coherent waves of equal frequency, wavelength, and amplitude travelling in opposite directions (incident and reflected waves inside the pipe).",
      markScheme: [
        {
          point: "Energy: progressive transfers energy along propagation direction, whereas stationary has zero net energy transfer.",
          keywords: ["zero net energy", "stores", "propagates energy"],
        },
        {
          point: "Amplitude: uniform across all points in a progressive wave, whereas varies from zero at nodes to maximum at antinodes in a stationary wave.",
          keywords: ["nodes", "antinodes", "identical amplitude", "uniform"],
        },
        {
          point: "Phase: varies continuously along progressive wave, whereas points between adjacent nodes are in phase (`π` out of phase in neighbouring loops).",
          keywords: ["in phase", "continuously", "out of phase"],
        },
        {
          point: "Formation: superposition of two waves of equal frequency, wavelength, and amplitude travelling in opposite directions.",
          keywords: ["superposition", "opposite directions", "reflected"],
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
          descriptor: "States features of only one wave type or covers only 1–2 of the four required comparison criteria.",
          indicators: ["Fails to contrast both wave types or omits phase / superposition mechanism"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly contrasts both wave types across energy, amplitude, and phase, and accurately explains standing-wave formation via opposite-travelling superposition.",
          indicators: ["Explicit both-sides contrast on all four points"],
        },
      ],
      commonError: "Describing only the standing wave without stating the corresponding property of the travelling wave.",
    },

    // ===================== Q12: D.1 Circular Satellite Speed (SL) ===========
    {
      id: "exam-p2-sl-q12",
      kind: "short",
      topicId: "d1-fields-motion",
      guideRef: "gravitational-fields-orbits",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Add altitude h to Earth's radius R_E before using v = √(GM/r)",
      question:
        "A weather satellite moves in a circular orbit at an altitude of `800 km` above Earth's surface. Earth has mass `M = 5.97 × 10²⁴ kg` and radius `R_E = 6.37 × 10⁶ m` (take `G = 6.67 × 10⁻¹¹ N m² kg⁻²`). Calculate the orbital speed of the satellite, to 3 significant figures (in `m s⁻¹`).",
      answer: { type: "number", value: 7450, tolerance: 30, display: "7450 m s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 22300, tolerance: 150 },
          feedback: "You used r = 800 km alone instead of orbital radius from Earth's centre: r = R_E + h = 7.17 × 10⁶ m.",
        },
        {
          spec: { type: "number", value: 7910, tolerance: 30 },
          feedback: "7910 m s⁻¹ is orbital speed at Earth's surface (r = R_E); remember to add the 800 km altitude.",
        },
      ],
      hints: [
        "Always measure orbital radius `r` from Earth's *centre*: `r = R_E + h = 6.37 × 10⁶ + 0.80 × 10⁶ m`.",
        "Equate `mv²/r = GMm/r²` to get `v = {{sqrt(GM / r)}}`.",
      ],
      solution: [
        "Orbital radius from Earth's centre: `r = 6.37 × 10⁶ + 8.00 × 10⁵ = 7.17 × 10⁶ m`.",
        "`v = {{sqrt(GM / r)}} = {{sqrt(6.67 * 10^(-11) * 5.97 * 10^24 / (7.17 * 10^6))}} = {{sqrt(5.554 * 10^7)}} = 7450 m s⁻¹`.",
      ],
      commonError: "Substituting altitude `h = 800 km` directly for orbital radius `r` instead of `R_E + h`.",
    },

    // ===================== Q13: D.3 Crossed-Field Velocity Selector (SL, 4m) ==
    {
      id: "exam-p2-sl-q13",
      kind: "written",
      topicId: "d1-fields-motion",
      guideRef: "motion-em-fields",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Explain",
      marks: 4,
      strategy: "Find directions of F_E and F_B on negative charge, equate magnitudes, then note B does zero work",
      diagram: SVG_VELOCITY_SELECTOR,
      question:
        "An electron enters a region of crossed uniform electric field `E` (directed vertically downward) and uniform magnetic field `B` (directed into the page), moving horizontally from left to right at speed `v` as shown above. Explain how this arrangement selects only electrons of speed `v = E/B` to pass straight through undeflected, and state what happens to the electron's kinetic energy if the electric field is switched off while the magnetic field stays on.",
      hints: [
        "Remember the electron carries a *negative* charge (`−e`): which way does the electric force act relative to a downward `E`-field?",
        "Apply Fleming's left-hand rule (with conventional current opposite to electron motion!) to find the direction of the magnetic force `F_B`.",
        "Equate the two opposing forces to derive `v = E/B`, and recall the angle between magnetic force and velocity when `E = 0`.",
      ],
      modelAnswer:
        "Because the electron is negatively charged, the electrostatic force `F_E = eE` acts vertically upward, opposite to the downward electric field. With electrons travelling right, conventional current points left; by Fleming's left-hand rule with `B` into the page, the magnetic force `F_B = evB` acts vertically downward. Only when these opposing vertical forces balance (`eE = evB`) is the net force zero, allowing electrons of unique speed `v = E/B` to travel straight undeflected (independent of charge and mass). If the electric field is turned off, the remaining magnetic force acts perpendicular to velocity at all times, doing zero mechanical work so the electron bends into a circular arc with constant kinetic energy.",
      markScheme: [
        {
          point: "Identifies that electric force `F_E = eE` acts vertically upward on the negatively charged electron.",
          keywords: ["upward", "negatively charged", "opposite"],
        },
        {
          point: "Identifies that magnetic force `F_B = evB` acts vertically downward (using left-hand rule with conventional current left).",
          keywords: ["downward", "evb", "left-hand"],
        },
        {
          point: "Equates opposing forces `eE = evB` for zero net force, yielding `v = E/B`.",
          keywords: ["balance", "zero", "e/b"],
        },
        {
          point: "States that with `E` off, magnetic force is always perpendicular to velocity, does zero work, and kinetic energy remains constant (circular path).",
          keywords: ["perpendicular", "zero", "constant", "circular"],
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
          descriptor: "Equates `qE = qvB` algebraically without establishing opposite force directions on an electron, or wrongly claims kinetic energy changes in the `B`-field.",
          indicators: ["Reverses force directions for negative charge or omits zero-work argument"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately justifies upward `F_E` and downward `F_B` on the electron, derives `v = E/B`, and explains constant kinetic energy via perpendicular magnetic force doing zero work.",
          indicators: ["Correct negative-charge directions and explicit zero-work explanation"],
        },
      ],
      commonError: "Forgetting that an electron is negatively charged, which reverses the directions of both `F_E` and `F_B` (or claiming magnetic force speeds up the electron).",
    },

    // ===================== Q14: E.1 Atomic Absorption & Emission Spectra (SL, 4m) ==
    {
      id: "exam-p2-sl-q14",
      kind: "written",
      topicId: "e1-atom-quantum",
      guideRef: "atomic-spectra-levels",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      strategy: "Quantized levels → exact photon energy absorption → isotropic re-emission → identical ΔE downward",
      question:
        "When continuous white light passes through cool hydrogen gas and enters a spectrometer, sharp dark lines appear across the coloured spectrum. Explain the physical origin of these dark absorption lines and why their wavelengths match the bright emission lines seen from hot glowing hydrogen gas.",
      hints: [
        "Start with the quantized structure of atomic energy levels inside hydrogen.",
        "Which specific photons from the white light can excite electrons to higher levels?",
        "Why don't the re-emitted photons simply refill the dark lines along the spectrometer's line of sight?",
      ],
      modelAnswer:
        "Electrons inside hydrogen atoms are restricted to discrete, quantized energy levels. Photons from the continuous white beam whose exact energy `hf = hc/λ` matches the gap `ΔE = E_upper − E_lower` between two allowed levels are absorbed, promoting electrons to higher excited states. Those excited electrons rapidly de-excite and re-emit photons of those same energies randomly in all directions (`4π` steradians), leaving far fewer photons travelling along the original beam direction and producing dark gaps. Because downward transitions in hot hydrogen involve the exact same discrete energy gaps `ΔE`, the bright lines appear at identical wavelengths.",
      markScheme: [
        {
          point: "States that electrons in hydrogen occupy discrete / quantized energy levels.",
          keywords: ["discrete", "quantized"],
        },
        {
          point: "Photons with exact energy `hf = hc/λ = ΔE` matching an allowed energy gap are absorbed to excite electrons upward.",
          keywords: ["absorbed", "excite", "hc/λ", "exact energy"],
        },
        {
          point: "Re-emission occurs randomly in all directions during de-excitation, depleting intensity along the original beam direction to leave dark gaps.",
          keywords: ["all directions", "de-excite", "randomly"],
        },
        {
          point: "Identical energy level gaps `ΔE` govern downward transitions in hot hydrogen, giving identical bright line wavelengths.",
          keywords: ["identical", "same", "downward"],
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
          descriptor: "Mentions energy levels and photon absorption, but omits isotropic re-emission or does not link matching wavelengths to identical `ΔE` gaps.",
          indicators: ["Misses why lines stay dark after de-excitation"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Fully accounts for quantized absorption (`hf = ΔE`), random isotropic re-emission depleting the forward beam, and identical emission wavelengths from the same gaps.",
          indicators: ["Includes isotropic re-emission and explicit `ΔE = hc/λ` match"],
        },
      ],
      commonError: "Forgetting to explain why re-emitted photons do not fill in the dark lines (they are re-emitted isotropically in all directions, not just straight ahead).",
    },

    // ===================== Q15: E.4–E.5 Fission, Fusion & Stellar Equilibrium (SL, 6m) ==
    {
      id: "exam-p2-sl-q15",
      kind: "written",
      topicId: "e2-nuclear-stars",
      guideRef: "fusion-stars-hr",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      marks: 6,
      strategy: "Anchor both processes to the Fe-56 BE/A peak, compare operating conditions, then explain stellar hydrostatic balance",
      question:
        "Compare the physical origin of energy release in a uranium-235 nuclear fission reactor with nuclear fusion inside the core of a main-sequence star such as the Sun. In your answer, refer explicitly to the binding energy per nucleon curve, the physical conditions needed to sustain each process, and how the Sun remains stable on the main sequence.",
      hints: [
        "Where is the peak of the binding energy per nucleon curve, and which side do U-235 and hydrogen sit on?",
        "How does total binding energy (and total mass via `ΔE = Δmc²`) change in both reactions?",
        "Contrast how thermal neutrons trigger fission (moderator & control rods) with why fusion demands ~10⁷ K temperatures to overcome Coulomb repulsion.",
        "Name and explain the balance of inward and outward pressures maintaining a main-sequence star.",
      ],
      modelAnswer:
        "The binding energy per nucleon curve peaks near iron-56 (`A ≈ 56–62`). Heavy nuclei such as uranium-235 lie above the peak and split into medium-mass daughter fragments with higher binding energy per nucleon, while light hydrogen nuclei lie well below the peak and fuse into helium-4 with much higher binding energy per nucleon; in both processes total nuclear mass decreases and energy `ΔE = Δmc²` is released. Uranium-235 fission is induced by slow thermal neutrons—which experience no electrostatic repulsion—maintained by a moderator that slows fast neutrons and regulated by neutron-absorbing control rods. By contrast, stellar fusion requires extreme core temperatures (above `10⁷ K`) and high density so positively charged protons carry enough kinetic energy to overcome strong Coulomb repulsion and enter the short range of the strong nuclear force. Inside the Sun, outward radiation pressure (and thermal gas pressure) powered by core hydrogen fusion exactly balances inward gravitational attraction; this state of hydrostatic equilibrium maintains a constant stellar radius and luminosity throughout the main-sequence stage.",
      markScheme: [
        {
          point: "Notes the binding energy per nucleon peak near iron-56 / nickel-62: heavy U-235 splits into more tightly bound medium-mass daughters.",
          keywords: ["iron-56", "iron", "peak", "daughters", "higher binding energy"],
        },
        {
          point: "Light hydrogen nuclei fuse into helium with much higher binding energy per nucleon; total mass decreases (`ΔE = Δmc²`) in both reactions.",
          keywords: ["helium", "mass decreases", "mc²", "mc^2"],
        },
        {
          point: "Fission is induced by thermal neutrons (no Coulomb barrier), slowed by a moderator and controlled by neutron-absorbing control rods.",
          keywords: ["thermal neutrons", "moderator", "control rods"],
        },
        {
          point: "Fusion requires very high core temperature (~10⁷ K) and density to overcome electrostatic Coulomb repulsion between positive nuclei so the strong nuclear force binds them.",
          keywords: ["coulomb", "repulsion", "10⁷", "strong nuclear"],
        },
        {
          point: "Inside the Sun, outward radiation/thermal gas pressure from fusion balances inward gravitational attraction.",
          keywords: ["radiation pressure", "gravitational", "balances"],
        },
        {
          point: "Identifies this stable balance as hydrostatic equilibrium, keeping radius and luminosity steady on the main sequence.",
          keywords: ["hydrostatic equilibrium", "radius", "luminosity"],
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
          descriptor: "Identifies fission as splitting and fusion as joining nuclei, with vague reference to mass defect or stellar gravity.",
          indicators: ["Lacks binding-energy-per-nucleon curve link or operating conditions"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately links both processes to increasing binding energy per nucleon toward Fe-56 and describes most reactor/stellar conditions, with minor omissions.",
          indicators: ["Clear Fe-56 peak reasoning plus moderator/Coulomb barrier or hydrostatic balance"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Comprehensive, well-structured IB synthesis linking the Fe-56 curve and `ΔE = Δmc²`, contrasting thermal-neutron reactor control with extreme-temperature Coulomb overcoming, and explaining stellar hydrostatic equilibrium.",
          indicators: ["All 6 physical pillars addressed rigorously with precise IB terminology"],
        },
      ],
      commonError: "Saying products have *lower* binding energy after fusion/fission — energy is released precisely because products are *more* tightly bound (higher binding energy per nucleon, lower total mass).",
    },
  ],
};
