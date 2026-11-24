import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1 — Foundations & Core Concepts (SL + HL)
  // answerIndex spread: [0:4, 1:4, 2:4, 3:3]
  // ===========================================================================
  {
    id: "b1-thermal-gases-m1",
    title: "Paper 1 · Thermal Transfers, Greenhouse & Gas Foundations",
    level: "SL",
    questions: [
      {
        id: "b1-thermal-gases-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "thermal-transfers-radiation",
        question:
          "Pure solid wax is heated steadily at its melting point until it has completely melted. Which statement correctly describes what happens to the average random kinetic energy and the intermolecular potential energy of its molecules during melting?",
        options: [
          "Average kinetic energy stays constant; intermolecular potential energy increases.",
          "Average kinetic energy increases; intermolecular potential energy stays constant.",
          "Average kinetic energy increases; intermolecular potential energy also increases.",
          "Average kinetic energy stays constant; intermolecular potential energy decreases.",
        ],
        answerIndex: 0,
        explanation:
          "During melting at constant temperature, average random molecular kinetic energy remains unchanged (since {{E_k = (3/2) k_B T}}). The supplied latent heat breaks rigid lattice bonds, increasing intermolecular potential energy. Thinking kinetic energy increases confuses a phase plateau ({{Q = m L}}) with single-phase warming ({{Q = m c ΔT}}).",
        hints: [
          "What does constant temperature tell you about average random molecular kinetic energy?",
          "Breaking or loosening intermolecular bonds requires energy input — which form of internal energy increases?",
        ],
        strategy: "Separate kinetic energy (temperature) from potential energy (phase)",
      },
      {
        id: "b1-thermal-gases-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "thermal-transfers-radiation",
        question:
          "A glass window of area {{2.0}} m² and thickness {{4.0}} mm has thermal conductivity {{k = 0.80}} W m⁻¹ K⁻¹. The inner face is at {{25}} °C and the outer face is at {{15}} °C. What is the steady-state rate of thermal energy transfer through the glass?",
        options: ["4.0 W", "1.6 kW", "4.0 kW", "8.0 kW"],
        answerIndex: 2,
        explanation:
          "Convert thickness to metres: {{Δx = 4.0 * 10^(-3)}} m, and {{ΔT = 25 - 15 = 10}} K. Using {{ΔQ/Δt = k A ΔT / Δx = (0.80 * 2.0 * 10) / (4.0 * 10^(-3)) = 16 / 0.004 = 4000}} W = 4.0 kW. Getting 4.0 W comes from forgetting to convert millimetres to metres.",
        hints: [
          "Write the steady-state conduction equation: {{ΔQ/Δt = k A ΔT / Δx}}.",
          "Convert {{4.0}} mm into metres ({{4.0 * 10^(-3)}} m) before dividing.",
        ],
        strategy: "SI unit conversion before substitution",
      },
      {
        id: "b1-thermal-gases-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "thermal-transfers-radiation",
        question:
          "Star X and Star Y both behave as ideal black bodies. Star X has twice the radius of Star Y and half the Kelvin surface temperature of Star Y. What is the luminosity ratio {{L_X / L_Y}}?",
        options: ["{{1/8}}", "{{1/4}}", "{{1/2}}", "{{1}}"],
        answerIndex: 1,
        explanation:
          "For a spherical black body, {{L = σ (4 pi R^2) T^4}}, so {{L ∝ R^2 T^4}}. Therefore {{L_X / L_Y = (R_X/R_Y)^2 (T_X/T_Y)^4 = 2^2 * (1/2)^4 = 4 * (1/16) = 1/4}}. Getting {{1/2}} comes from forgetting to raise the temperature ratio to the fourth power.",
        hints: [
          "How does spherical surface area {{A}} depend on radius {{R}}?",
          "Substitute {{R_X = 2 R_Y}} and {{T_X = (1/2) T_Y}} into {{L ∝ R^2 T^4}}.",
        ],
        strategy: "Proportionality ratios cancel constants",
      },
      {
        id: "b1-thermal-gases-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "thermal-transfers-radiation",
        question:
          "A glowing heating element acts as an ideal black body whose peak spectral emission occurs at wavelength {{λ_max = 1.45}} μm. Using Wien's constant {{2.90 * 10^(-3)}} m K, what is the Kelvin temperature of the element?",
        options: ["500 K", "1000 K", "1450 K", "2000 K"],
        answerIndex: 3,
        explanation:
          "Convert {{1.45}} μm to {{1.45 * 10^(-6)}} m. By Wien's displacement law, {{T = (2.90 * 10^(-3)) / (1.45 * 10^(-6)) = 2.00 * 10^3 = 2000}} K. Notice that {{2.90 / 1.45 = 2}} exactly.",
        hints: [
          "Recall Wien's displacement law: {{λ_max T = 2.90 * 10^(-3)}} m K.",
          "Convert {{1.45}} μm to metres ({{1.45 * 10^(-6)}} m) and solve for {{T}}.",
        ],
        strategy: "Wien's displacement law",
      },
      {
        id: "b1-thermal-gases-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "greenhouse-effect",
        question:
          "The solar constant at Earth's orbit is {{S ≈ 1360}} W m⁻², yet the average solar intensity incident across Earth's entire surface is {{S / 4 ≈ 340}} W m⁻². Why does the factor of {{1/4}} appear?",
        options: [
          "Earth intercepts sunlight across a disc of area {{pi R^2}} but spreads it over a sphere of area {{4 pi R^2}}.",
          "Earth's atmosphere reflects three-quarters of all incoming solar radiation back into space.",
          "Earth's elliptical orbit places it twice as far from the Sun during winter as during summer.",
          "Greenhouse gases absorb three-quarters of visible sunlight before it can reach Earth's surface.",
        ],
        answerIndex: 0,
        explanation:
          "Parallel rays from the Sun are intercepted by Earth's circular cross-section of area {{pi R^2}}, giving total incident power {{S pi R^2}}. Dividing by the full spherical surface area {{4 pi R^2}} yields average incident intensity {{S / 4}}. Albedo reflection (~30%) is accounted for separately via {{(1 - α)}}.",
        hints: [
          "What shape does Earth present to a beam of parallel rays arriving from the Sun?",
          "Compare the area of a circle of radius {{R}} with the surface area of a sphere of radius {{R}}.",
        ],
        strategy: "Geometric cross-section vs spherical surface area",
      },
      {
        id: "b1-thermal-gases-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "greenhouse-effect",
        question:
          "A rocky exoplanet receives top-of-atmosphere stellar intensity {{S = 1400}} W m⁻² and has global average albedo {{α = 0.40}}. What is the average stellar intensity absorbed by the planet?",
        options: ["140 W m⁻²", "210 W m⁻²", "420 W m⁻²", "840 W m⁻²"],
        answerIndex: 1,
        explanation:
          "Average absorbed intensity is {{I_abs = ((1 - α) S) / 4 = ((1 - 0.40) * 1400) / 4 = 0.60 * 350 = 210}} W m⁻². Getting 140 W m⁻² comes from mistakenly using the reflected fraction {{α = 0.40}} instead of the absorbed fraction {{1 - α = 0.60}}; 840 W m⁻² omits the factor of {{1/4}}.",
        hints: [
          "Albedo {{α}} is the *reflected* fraction — what fraction of incident light is *absorbed*?",
          "Include both {{(1 - α)}} and the spherical averaging factor {{1/4}} in {{I_abs = (1 - α) S / 4}}.",
        ],
        strategy: "Absorbed fraction (1 − α) and spherical factor 1/4",
      },
      {
        id: "b1-thermal-gases-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "greenhouse-effect",
        question:
          "Carbon dioxide (CO₂) and water vapour (H₂O) act as greenhouse gases in Earth's atmosphere, whereas nitrogen (N₂) and oxygen (O₂) do not. Which molecular property explains this difference?",
        options: [
          "CO₂ and H₂O have larger molar masses and therefore sink closer to Earth's warm surface.",
          "CO₂ and H₂O reflect short-wave ultraviolet sunlight directly back down to the ground.",
          "CO₂ and H₂O have vibrational modes that change their dipole moment and resonate with infrared photons.",
          "CO₂ and H₂O undergo chemical combustion when struck by visible photons from the Sun.",
        ],
        answerIndex: 2,
        explanation:
          "Polyatomic greenhouse gases possess natural bending/stretching vibrational frequencies matching Earth's long-wave infrared radiation (~10 μm), and those vibrations vary the molecular electric dipole moment, allowing resonant IR absorption and isotropic re-emission. Symmetric diatomic N₂ and O₂ have zero dipole moment throughout vibration.",
        hints: [
          "What wavelength region does Earth (~288 K) emit strongly in?",
          "What happens to a molecule's electric dipole moment when it resonantly absorbs an infrared photon?",
        ],
        strategy: "Molecular resonance and dipole moment change",
      },
      {
        id: "b1-thermal-gases-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "gas-laws-kmt",
        question:
          "A fixed mass of ideal gas is compressed slowly at constant temperature to half its original volume. According to the kinetic model, why does its pressure double?",
        options: [
          "Average molecular speed stays constant, while wall collision frequency doubles.",
          "Average molecular speed doubles, while wall collision frequency stays constant.",
          "Both average molecular speed and wall collision frequency increase by {{sqrt(2)}}.",
          "Intermolecular repulsive forces double as the mean separation halves.",
        ],
        answerIndex: 0,
        explanation:
          "Because temperature is constant, average translational kinetic energy {{(3/2) k_B T}} — and hence average molecular speed and momentum change per hit — stays strictly unchanged. Halving the volume halves the distance between walls (doubling number density), so wall collision frequency doubles, doubling pressure.",
        hints: [
          "Does constant temperature allow average molecular speed to change?",
          "If molecules travel at the same speed in half the volume, how does their rate of hitting the walls change?",
        ],
        strategy: "Kinetic theory: separate speed (T) from collision frequency (V)",
      },
      {
        id: "b1-thermal-gases-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-laws-kmt",
        question:
          "A fixed mass of ideal gas occupies {{0.040}} m³ at pressure {{100}} kPa and temperature {{300}} K. The gas is compressed to {{0.020}} m³ and heated to {{450}} K. What is the new pressure?",
        options: ["75 kPa", "150 kPa", "200 kPa", "300 kPa"],
        answerIndex: 3,
        explanation:
          "From the combined gas law {{P_1 V_1 / T_1 = P_2 V_2 / T_2}}, {{P_2 = P_1 (V_1/V_2)(T_2/T_1) = 100 * (0.040/0.020) * (450/300) = 100 * 2 * 1.5 = 300}} kPa. Getting 75 kPa or 150 kPa results from inverting one of the volume or temperature ratios.",
        hints: [
          "Use {{P_1 V_1 / T_1 = P_2 V_2 / T_2}} since the number of moles is fixed.",
          "Halving {{V}} multiplies {{P}} by 2; raising {{T}} from 300 K to 450 K multiplies {{P}} by 1.5.",
        ],
        strategy: "Combined gas law ratio scaling",
      },
      {
        id: "b1-thermal-gases-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "gas-laws-kmt",
        question:
          "A sealed vessel contains a mixture of ideal helium gas (molar mass {{4}} g mol⁻¹) and ideal methane gas (molar mass {{16}} g mol⁻¹) in thermal equilibrium. What are the ratios {{E_k(\"He\") / E_k(\"CH4\")}} (average translational kinetic energy) and {{v_rms(\"He\") / v_rms(\"CH4\")}}?",
        options: [
          "Kinetic energy ratio = 4; rms speed ratio = 2",
          "Kinetic energy ratio = 1; rms speed ratio = 2",
          "Kinetic energy ratio = 1; rms speed ratio = 4",
          "Kinetic energy ratio = 0.25; rms speed ratio = 0.5",
        ],
        answerIndex: 1,
        explanation:
          "In thermal equilibrium both gases share the exact same Kelvin temperature {{T}}, so both have the same average translational kinetic energy {{(3/2) k_B T}} (ratio = 1). Since {{(1/2) m v_rms^2}} is equal, {{v_rms ∝ 1/sqrt(m)}}, giving {{v_rms(\"He\") / v_rms(\"CH4\") = sqrt(16/4) = 2}}.",
        hints: [
          "Does {{E_k = (3/2) k_B T}} depend on molecular mass?",
          "Equate {{(1/2) m_1 v_1^2 = (1/2) m_2 v_2^2}} and solve for {{v_1 / v_2}}.",
        ],
        strategy: "Equal T implies equal average Ek, not equal speed",
      },
      {
        id: "b1-thermal-gases-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "gas-laws-kmt",
        question:
          "Under which combination of pressure and temperature does a real gas behave most closely like an ideal gas?",
        options: [
          "High pressure and low temperature",
          "High pressure and high temperature",
          "Low pressure and high temperature",
          "Low pressure and low temperature",
        ],
        answerIndex: 2,
        explanation:
          "At low pressure, molecules are far apart so their own volume is negligible compared to the container volume and intermolecular forces are negligible. At high temperature, molecular kinetic energy far exceeds attractive potential energy, preventing condensation.",
        hints: [
          "Which two ideal-gas assumptions break down when molecules are crammed close together?",
          "When is molecular kinetic energy much larger than intermolecular attraction?",
        ],
        strategy: "Check ideal-gas assumptions directly",
      },
      {
        id: "b1-thermal-gases-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "An ideal gas absorbs {{600}} J of thermal energy from a heater while expanding and performing {{250}} J of mechanical work on a piston. What is the change in internal energy {{ΔU}} of the gas?",
        options: ["+350 J", "−350 J", "+850 J", "−850 J"],
        answerIndex: 0,
        explanation:
          "Using the IB First Law {{Q = ΔU + W}} with {{Q = +600}} J (heat supplied to gas) and {{W = +250}} J (work done by gas during expansion): {{ΔU = Q - W = 600 - 250 = +350}} J. Getting +850 J comes from reversing the sign of {{W}}.",
        hints: [
          "Write the IB First Law: {{Q = ΔU + W}}.",
          "Expansion means work is done BY the gas, so {{W = +250}} J.",
        ],
        strategy: "IB First Law sign convention",
      },
      {
        id: "b1-thermal-gases-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "thermodynamics-hl",
        question:
          "An ideal monatomic gas undergoes a rapid adiabatic expansion inside an insulated cylinder. Using the IB First Law convention ({{Q = ΔU + W}}, where {{W}} is work done by the gas), which combination correctly describes {{Q}}, {{W}}, and the temperature change {{ΔT}}?",
        options: [
          "{{Q = 0}}, {{W > 0}}, and temperature increases ({{ΔT > 0}})",
          "{{Q = 0}}, {{W > 0}}, and temperature decreases ({{ΔT < 0}})",
          "{{Q > 0}}, {{W > 0}}, and temperature stays constant ({{ΔT = 0}})",
          "{{Q = 0}}, {{W < 0}}, and temperature decreases ({{ΔT < 0}})",
        ],
        answerIndex: 1,
        explanation:
          "Adiabatic means zero heat transfer ({{Q = 0}}). Expansion means the gas does positive work ({{W > 0}}). By the First Law {{0 = ΔU + W}}, {{ΔU = -W < 0}}, so internal energy and temperature must decrease. Confusing expansion with compression flips the sign of {{W}}.",
        hints: [
          "What does 'adiabatic' fix to zero?",
          "Use {{Q = ΔU + W}} with {{Q = 0}} and {{W > 0}} to find the sign of {{ΔU}}.",
        ],
        strategy: "First Law sign analysis for adiabatic process",
      },
      {
        id: "b1-thermal-gases-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "A Carnot heat engine operates between a hot thermal reservoir at {{327}} °C and a cold thermal reservoir at {{27}} °C. What is its maximum theoretical efficiency?",
        options: ["25%", "33%", "92%", "50%"],
        answerIndex: 3,
        explanation:
          "Always convert to Kelvin first: {{T_H = 327 + 273 = 600}} K and {{T_C = 27 + 273 = 300}} K. Then {{η_Carnot = 1 - T_C / T_H = 1 - 300/600 = 0.50 = 50%}}. Plugging Celsius temperatures directly gives the tempting trap {{1 - 27/327 ≈ 92%}}!",
        hints: [
          "Convert both {{327}} °C and {{27}} °C to Kelvin before using any ratio.",
          "Evaluate {{η_Carnot = 1 - T_C / T_H}}.",
        ],
        strategy: "Always convert to Kelvin before Carnot efficiency",
      },
      {
        id: "b1-thermal-gases-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "A block of ice at {{0}} °C ({{273}} K) melts reversibly by absorbing {{5.46 * 10^4}} J of thermal energy at constant temperature. What is the entropy change {{ΔS}} of the ice-water system?",
        options: ["−200 J K⁻¹", "+100 J K⁻¹", "+200 J K⁻¹", "+400 J K⁻¹"],
        answerIndex: 2,
        explanation:
          "For reversible isothermal heat transfer, {{ΔS = ΔQ / T = +54600 / 273 = +200}} J K⁻¹. Melting increases molecular disorder as rigid solid lattice becomes liquid, confirming {{ΔS > 0}}.",
        hints: [
          "Use {{ΔS = ΔQ / T}} with Kelvin temperature {{T = 273}} K.",
          "Heat enters the ice during melting, so is {{ΔQ}} positive or negative?",
        ],
        strategy: "Isothermal entropy change ΔS = ΔQ/T",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2 — Quantitative Thermal, Greenhouse & Gas Calculations (SL + HL)
  // answerIndex spread: [0:4, 1:3, 2:4, 3:4]
  // ===========================================================================
  {
    id: "b1-thermal-gases-m2",
    title: "Paper 2 · Quantitative Calorimetry, Radiation & Gas Problems",
    level: "SL",
    questions: [
      {
        id: "b1-thermal-gases-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "thermal-transfers-radiation",
        question:
          "Two solid blocks of identical mass are placed in thermal contact inside an insulated box. Block X ({{c_X = 400}} J kg⁻¹ K⁻¹) starts at {{100}} °C and Block Y ({{c_Y = 800}} J kg⁻¹ K⁻¹) starts at {{40}} °C. What is their final equilibrium temperature?",
        options: ["50 °C", "70 °C", "60 °C", "80 °C"],
        answerIndex: 2,
        explanation:
          "Equate heat lost by X to heat gained by Y: {{m (400) (100 - T_f) = m (800) (T_f - 40)}}. Dividing by {{400 m}} gives {{100 - T_f = 2(T_f - 40) = 2 T_f - 80}}, so {{3 T_f = 180}} and {{T_f = 60}} °C. Guessing the simple midpoint 70 °C ignores that Block Y has twice the heat capacity.",
        hints: [
          "Set {{m c_X (100 - T_f) = m c_Y (T_f - 40)}} — notice mass {{m}} cancels.",
          "Because Block Y has twice the specific heat capacity, {{T_f}} sits closer to 40 °C than to 100 °C.",
        ],
        strategy: "Conservation of energy in thermal mixtures",
      },
      {
        id: "b1-thermal-gases-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "thermal-transfers-radiation",
        question:
          "An electric immersion heater rated at {{600}} W warms {{0.50}} kg of an unknown liquid. The liquid's temperature rises steadily at {{0.40}} K s⁻¹ with negligible heat loss. What is the specific heat capacity of the liquid?",
        options: ["3000 J kg⁻¹ K⁻¹", "1500 J kg⁻¹ K⁻¹", "750 J kg⁻¹ K⁻¹", "120 J kg⁻¹ K⁻¹"],
        answerIndex: 0,
        explanation:
          "Differentiating {{Q = m c ΔT}} with respect to time gives {{P = m c (ΔT/Δt)}}. Rearranging: {{c = P / (m (ΔT/Δt)) = 600 / (0.50 * 0.40) = 600 / 0.20 = 3000}} J kg⁻¹ K⁻¹.",
        hints: [
          "Link heater power {{P}} to heating rate {{ΔT/Δt}} via {{P = m c (ΔT/Δt)}}.",
          "Calculate {{m * (ΔT/Δt) = 0.50 * 0.40 = 0.20}} kg K s⁻¹ first, then divide {{600}} by it.",
        ],
        strategy: "Power form of specific heat capacity",
      },
      {
        id: "b1-thermal-gases-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "thermal-transfers-radiation",
        question:
          "Star P has luminosity {{L}} and sits at distance {{d}} from Earth, producing apparent brightness {{b}}. Star Q has luminosity {{9 L}} and sits at distance {{3 d}} from Earth. What is the apparent brightness of Star Q?",
        options: ["{{b / 3}}", "{{3 b}}", "{{9 b}}", "{{b}}"],
        answerIndex: 3,
        explanation:
          "Apparent brightness follows {{b = L / (4 pi d^2)}}. For Star Q, {{b_Q = (9 L) / (4 pi (3 d)^2) = (9 L) / (9 * 4 pi d^2) = b}}. The factor of 9 in luminosity cancels exactly with the {{3^2 = 9}} from the inverse-square distance law.",
        hints: [
          "Write {{b = L / (4 pi d^2)}} for both stars.",
          "Remember that distance {{d}} is **squared** in the denominator.",
        ],
        strategy: "Inverse-square brightness ratio",
      },
      {
        id: "b1-thermal-gases-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "thermal-transfers-radiation",
        question:
          "A metal sphere's temperature increases from {{27}} °C to {{327}} °C while its emissivity and surface area stay constant. By what factor does its total radiated power increase?",
        options: ["4", "16", "12", "32"],
        answerIndex: 1,
        explanation:
          "Convert both temperatures to Kelvin: {{T_1 = 27 + 273 = 300}} K and {{T_2 = 327 + 273 = 600}} K, so {{T_2 / T_1 = 2}}. By Stefan–Boltzmann ({{P ∝ T^4}}), power rises by {{2^4 = 16}}. Dividing Celsius values ({{327/27 ≈ 12}}) is the classic Kelvin conversion trap.",
        hints: [
          "Convert {{27}} °C and {{327}} °C into Kelvin first.",
          "Apply Stefan–Boltzmann scaling {{P_2 / P_1 = (T_2 / T_1)^4}}.",
        ],
        strategy: "Stefan–Boltzmann fourth-power Kelvin scaling",
      },
      {
        id: "b1-thermal-gases-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "greenhouse-effect",
        question:
          "A matte painted plate at temperature {{500}} K radiates thermal energy at an intensity of {{1772}} W m⁻². Taking {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴, what is the emissivity {{e}} of the plate?",
        options: ["0.25", "0.40", "0.50", "0.80"],
        answerIndex: 2,
        explanation:
          "First compute ideal blackbody intensity at 500 K: {{σ T^4 = (5.67 * 10^(-8)) * 500^4 = (5.67 * 10^(-8)) * (6.25 * 10^10) = 3544}} W m⁻². Thus {{e = I / (σ T^4) = 1772 / 3544 = 0.50}}.",
        hints: [
          "Recall emissivity {{e = I_emitted / (σ T^4)}}.",
          "Evaluate {{500^4 = 6.25 * 10^10}} K⁴ carefully before multiplying by {{5.67 * 10^(-8)}}.",
        ],
        strategy: "Emissivity relative to ideal blackbody intensity",
      },
      {
        id: "b1-thermal-gases-m2-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "greenhouse-effect",
        question:
          "Planet A (airless black body of albedo {{α}}) orbits a star at distance {{r}} and has equilibrium surface temperature {{T}}. Planet B (identical albedo {{α}} and emissivity 1) orbits the same star at distance {{4 r}}. What is Planet B's equilibrium temperature?",
        options: ["{{T / 16}}", "{{T / 8}}", "{{T / 4}}", "{{T / 2}}"],
        answerIndex: 3,
        explanation:
          "Stellar intensity obeys the inverse-square law {{S ∝ 1/r^2}}, so at {{4 r}} the intensity falls by {{4^2 = 16}}. Since radiative equilibrium gives {{σ T^4 ∝ S}}, we have {{T_B^4 = T^4 / 16}}, hence {{T_B = T / (16^(1/4)) = T / 2}}.",
        hints: [
          "How does incident stellar intensity {{S}} scale when orbital radius quadruples?",
          "Substitute that factor into {{σ T^4 = (1 - α) S / 4}} and take the fourth root.",
        ],
        strategy: "Combine inverse-square law with T⁴ radiative balance",
      },
      {
        id: "b1-thermal-gases-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "greenhouse-effect",
        question:
          "Which sequence accurately describes the **ice-albedo positive feedback loop** in Earth's polar climate?",
        options: [
          "Warming melts sea ice → albedo decreases → more sunlight is absorbed → warming accelerates.",
          "Warming melts sea ice → albedo increases → more sunlight is reflected → warming slows down.",
          "Warming melts sea ice → emissivity drops to zero → less IR escapes → surface cools rapidly.",
          "Warming melts sea ice → solar constant increases → atmospheric CO₂ vanishes → cooling begins.",
        ],
        answerIndex: 0,
        explanation:
          "Bright ice has high albedo (~0.85), while exposed dark ocean water has very low albedo (~0.06). Melting ice lowers global albedo {{α}}, raising absorbed solar intensity {{(1 - α) S / 4}} and amplifying the initial warming (positive feedback).",
        hints: [
          "Which surface has higher albedo: bright white sea ice or dark open ocean water?",
          "If global albedo {{α}} falls, does {{1 - α}} increase or decrease?",
        ],
        strategy: "Trace sign of albedo change in positive feedback",
      },
      {
        id: "b1-thermal-gases-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "greenhouse-effect",
        question:
          "The Sun has surface temperature {{5800}} K and Earth's surface has average temperature {{290}} K. Treating both as black bodies, what is the ratio of Earth's peak emission wavelength to the Sun's peak emission wavelength, {{λ_max(\"Earth\") / λ_max(\"Sun\")}}?",
        options: ["10", "20", "0.05", "400"],
        answerIndex: 1,
        explanation:
          "By Wien's displacement law {{λ_max ∝ 1/T}}, so {{λ_max(\"Earth\") / λ_max(\"Sun\") = T_Sun / T_Earth = 5800 / 290 = 20}}. Earth peaks around 10 μm (infrared) compared to the Sun's 0.50 μm (visible light).",
        hints: [
          "From {{λ_max T = \"const\"}}, peak wavelength is inversely proportional to Kelvin temperature.",
          "Compute {{T_Sun / T_Earth = 5800 / 290}}.",
        ],
        strategy: "Inverse ratio via Wien's law",
      },
      {
        id: "b1-thermal-gases-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-laws-kmt",
        question:
          "An ideal gas occupies volume {{0.0831}} m³ at pressure {{2.0 * 10^5}} Pa and temperature {{400}} K. Given {{R = 8.31}} J K⁻¹ mol⁻¹, how many moles of gas are present?",
        options: ["0.50 mol", "2.0 mol", "2.5 mol", "5.0 mol"],
        answerIndex: 3,
        explanation:
          "Rearrange {{P V = n R T}} to {{n = (P V) / (R T) = (2.0 * 10^5 * 0.0831) / (8.31 * 400)}}. Notice {{0.0831 / 8.31 = 0.01}}, leaving {{n = (2.0 * 10^5 * 0.01) / 400 = 2000 / 400 = 5.0}} mol.",
        hints: [
          "Solve {{P V = n R T}} for {{n}}.",
          "Spot the clean cancellation {{0.0831 / 8.31 = 10^(-2)}} before multiplying!",
        ],
        strategy: "Ideal gas equation with clean power-of-10 cancellation",
      },
      {
        id: "b1-thermal-gases-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "gas-laws-kmt",
        question:
          "A sealed rigid tank of ideal gas is heated from {{300}} K to {{1200}} K. By what factor does the root-mean-square speed {{v_rms}} of the gas molecules increase?",
        options: ["1.4", "1.5", "2.0", "4.0"],
        answerIndex: 2,
        explanation:
          "Since {{(1/2) m v_rms^2 = (3/2) k_B T}}, we have {{v_rms ∝ sqrt(T)}}. Quadrupling the Kelvin temperature ({{1200/300 = 4}}) multiplies {{v_rms}} by {{sqrt(4) = 2.0}}. Picking 4.0 gives the increase in *kinetic energy* (and pressure), not rms speed.",
        hints: [
          "Average kinetic energy scales with {{T}}, and kinetic energy is proportional to {{v_rms^2}}.",
          "Take the square root of {{T_2 / T_1 = 1200 / 300}}.",
        ],
        strategy: "Root-mean-square speed scales as √T",
      },
      {
        id: "b1-thermal-gases-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-laws-kmt",
        question:
          "A cylinder of volume {{0.040}} m³ contains an ideal monatomic gas at pressure {{3.0 * 10^5}} Pa. What is the total internal energy {{U}} of the gas?",
        options: ["18 kJ", "12 kJ", "8.0 kJ", "30 kJ"],
        answerIndex: 0,
        explanation:
          "For an ideal monatomic gas, {{U = (3/2) n R T = (3/2) P V}}. Substituting gives {{U = 1.5 * (3.0 * 10^5) * 0.040 = 1.5 * 12000 = 18000}} J = 18 kJ. Getting 12 kJ omits the factor of {{3/2}}.",
        hints: [
          "Substitute {{n R T = P V}} into the monatomic internal energy formula {{U = (3/2) n R T}}.",
          "Compute {{1.5 * P * V}} in joules and convert to kJ.",
        ],
        strategy: "Direct U = (3/2)PV shortcut",
      },
      {
        id: "b1-thermal-gases-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "thermodynamics-hl",
        question:
          "An ideal monatomic gas expands isobarically at constant pressure {{2.0 * 10^5}} Pa from {{0.010}} m³ to {{0.030}} m³. What percentage of the thermal energy {{Q}} supplied to the gas is converted into mechanical work {{W}}?",
        options: ["25%", "50%", "60%", "40%"],
        answerIndex: 3,
        explanation:
          "At constant pressure, {{W = P ΔV}} and {{ΔU = (3/2) P ΔV}}, so by the First Law {{Q = ΔU + W = (5/2) P ΔV}}. Thus {{W / Q = 1 / (5/2) = 2/5 = 40%}} (while 60% goes into raising internal energy {{ΔU}}).",
        hints: [
          "Express both {{W}} and {{ΔU}} in terms of {{P ΔV}} for a monatomic gas at constant pressure.",
          "Divide {{W}} by {{Q = ΔU + W}} — notice {{P ΔV}} cancels completely!",
        ],
        strategy: "Energy partition in monatomic isobaric expansion",
      },
      {
        id: "b1-thermal-gases-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "An ideal monatomic gas at pressure {{P_0}} and volume {{8 V_0}} is compressed adiabatically to volume {{V_0}}. What is its final pressure?",
        options: ["{{8 P_0}}", "{{32 P_0}}", "{{16 P_0}}", "{{64 P_0}}"],
        answerIndex: 1,
        explanation:
          "For an adiabatic process of a monatomic ideal gas, {{P_1 V_1^(5/3) = P_2 V_2^(5/3)}}. Therefore {{P_2 = P_0 (8 V_0 / V_0)^(5/3) = P_0 * (8^(1/3))^5 = P_0 * 2^5 = 32 P_0}}. Getting {{8 P_0}} mistakenly applies Boyle's isothermal law ({{P V = \"const\"}}).",
        hints: [
          "Recall the monatomic adiabatic equation {{P V^(5/3) = \"const\"}}.",
          "Take the cube root of 8 first ({{8^(1/3) = 2}}), then raise to the 5th power.",
        ],
        strategy: "Monatomic adiabatic relation PV^(5/3) = const",
      },
      {
        id: "b1-thermal-gases-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "An ideal gas undergoes a clockwise rectangular cycle on a {{P}}–{{V}} diagram between pressures {{1.0 * 10^5}} Pa and {{4.0 * 10^5}} Pa, and between volumes {{0.020}} m³ and {{0.060}} m³. What is the net work done by the gas in one complete cycle?",
        options: ["+12 kJ", "−12 kJ", "+16 kJ", "+24 kJ"],
        answerIndex: 0,
        explanation:
          "For a clockwise closed cycle on a {{P}}–{{V}} diagram, net work done BY the gas equals the positive enclosed area: {{W_net = ΔP * ΔV = (4.0 - 1.0) * 10^5 * (0.060 - 0.020) = (3.0 * 10^5) * 0.040 = +12000}} J = +12 kJ. Getting +24 kJ multiplies maximum {{P}} by maximum {{V}} instead of taking the rectangle's side lengths.",
        hints: [
          "On a {{P}}–{{V}} diagram, net work in a cycle equals the enclosed area of the loop.",
          "Is a clockwise loop positive work (heat engine) or negative work (refrigerator)?",
        ],
        strategy: "Enclosed p–V loop area = net work",
      },
      {
        id: "b1-thermal-gases-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "thermodynamics-hl",
        question:
          "During a spontaneous free expansion into a vacuum, the number of accessible microstates {{Ω}} of a gas increases by a factor of {{e^4}}. Using Boltzmann's formula {{S = k_B ln Ω}}, what is the entropy change {{ΔS}} of the gas?",
        options: ["{{k_B / 4}}", "{{e^4 k_B}}", "{{4 k_B}}", "{{k_B ln 4}}"],
        answerIndex: 2,
        explanation:
          "{{ΔS = S_2 - S_1 = k_B ln(e^4 Ω_1) - k_B ln Ω_1 = k_B ln(e^4) = 4 k_B}}. Because the natural logarithm turns multiplicative factors in microstates into additive entropy changes, {{ln(e^4) = 4}}.",
        hints: [
          "Write {{ΔS = k_B ln(Ω_2 / Ω_1)}} using log rules.",
          "Simplify {{ln(e^4)}}.",
        ],
        strategy: "Boltzmann statistical entropy S = kB ln Ω",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3 — Exam-Style Graphs, Ratios & HL Thermodynamics
  // answerIndex spread: [0:3, 1:4, 2:4, 3:4]
  // ===========================================================================
  {
    id: "b1-thermal-gases-m3",
    title: "Paper 3 · Graphs, Models & HL Thermodynamic Cycles",
    level: "HL",
    questions: [
      {
        id: "b1-thermal-gases-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "thermal-transfers-radiation",
        question:
          "Equal masses of Liquid X and Liquid Y are heated separately by identical constant-power heaters. On a temperature–time graph, the straight-line gradient of Liquid X is twice that of Liquid Y. What is the ratio of their specific heat capacities {{c_X / c_Y}}?",
        options: ["2.0", "0.5", "4.0", "0.25"],
        answerIndex: 1,
        explanation:
          "From {{P = m c (ΔT/Δt)}}, the temperature–time gradient is {{ΔT/Δt = P / (m c)}}. With identical {{P}} and {{m}}, specific heat capacity is **inversely proportional** to gradient, so twice the gradient means half the specific heat capacity: {{c_X / c_Y = 0.5}}.",
        hints: [
          "Express the gradient {{ΔT/Δt}} in terms of {{P}}, {{m}}, and {{c}}.",
          "Does a steeper heating graph mean a larger or smaller specific heat capacity?",
        ],
        strategy: "Gradient interpretation of heating curves",
      },
      {
        id: "b1-thermal-gases-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "thermal-transfers-radiation",
        question:
          "Two flat slabs of equal cross-sectional area and equal thickness are bonded face-to-face. Slab 1 has thermal conductivity {{k}} (outer face held at {{90}} °C) and Slab 2 has thermal conductivity {{2 k}} (outer face held at {{30}} °C). In steady state, what is the temperature at the interface between the two slabs?",
        options: ["70 °C", "60 °C", "45 °C", "50 °C"],
        answerIndex: 3,
        explanation:
          "In steady state, the rate of heat conduction is identical through both slabs: {{k A (90 - T_m) / d = 2 k A (T_m - 30) / d}}. Cancelling {{k A / d}} gives {{90 - T_m = 2 T_m - 60}}, so {{3 T_m = 150}} and {{T_m = 50}} °C. The poorer conductor (Slab 1) supports twice the temperature drop (40 K vs 20 K).",
        hints: [
          "In steady state with no heat stored at the boundary, how do the heat transfer rates {{ΔQ/Δt}} through Slab 1 and Slab 2 compare?",
          "Set {{k (90 - T_m) = 2 k (T_m - 30)}} and solve for {{T_m}}.",
        ],
        strategy: "Equal steady-state heat flux in series slabs",
      },
      {
        id: "b1-thermal-gases-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "thermal-transfers-radiation",
        question:
          "A {{2.0}} kW immersion heater boils water steadily at {{100}} °C ({{L_v = 2.26 * 10^6}} J kg⁻¹). Assuming all electrical energy goes into vaporisation, what mass of water boils away in {{113}} s?",
        options: ["0.10 kg", "0.20 kg", "0.50 kg", "1.0 kg"],
        answerIndex: 0,
        explanation:
          "Total thermal energy supplied is {{Q = P t = 2000 * 113 = 2.26 * 10^5}} J. Using {{Q = m L_v}}, the vaporised mass is {{m = (2.26 * 10^5) / (2.26 * 10^6) = 0.10}} kg.",
        hints: [
          "First find total energy supplied {{Q = P t}} (convert {{2.0}} kW to watts).",
          "Divide {{Q}} by {{L_v = 2.26 * 10^6}} J kg⁻¹.",
        ],
        strategy: "Electrical power linked to latent heat",
      },
      {
        id: "b1-thermal-gases-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "greenhouse-effect",
        question:
          "In a simple single-layer greenhouse model, a blackbody planet surface at temperature {{T_s}} emits infrared intensity {{σ T_s^4}}, which is completely absorbed by an isothermal blackbody atmosphere at temperature {{T_a}}. The atmosphere radiates {{σ T_a^4}} upward to space and {{σ T_a^4}} downward to the surface. If top-of-atmosphere equilibrium holds ({{I_in = σ T_a^4}}), what is the ratio {{T_s / T_a}}?",
        options: ["1.41", "2.00", "1.19", "0.84"],
        answerIndex: 2,
        explanation:
          "At the surface, energy balance gives {{σ T_s^4 = I_in + σ T_a^4 = σ T_a^4 + σ T_a^4 = 2 σ T_a^4}}. Hence {{(T_s / T_a)^4 = 2}}, so {{T_s / T_a = 2^(1/4) ≈ 1.19}}. Choosing 1.41 takes the square root instead of the fourth root.",
        hints: [
          "Write the energy balance at the surface: emitted {{σ T_s^4}} equals absorbed solar {{I_in}} plus downward atmospheric IR {{σ T_a^4}}.",
          "Substitute {{I_in = σ T_a^4}} and take the **fourth root** of the ratio.",
        ],
        strategy: "Single-layer radiative balance algebra",
      },
      {
        id: "b1-thermal-gases-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "greenhouse-effect",
        question:
          "An ice-covered airless blackbody planet has albedo {{α_1 = 0.84}} and equilibrium surface temperature {{200}} K. If its ice melts so its albedo drops to {{α_2 = 0.19}} while incident stellar intensity stays constant, what is its new equilibrium temperature?",
        options: ["250 K", "300 K", "450 K", "225 K"],
        answerIndex: 1,
        explanation:
          "From {{σ T^4 = (1 - α) S / 4}}, we have {{(T_2 / T_1)^4 = (1 - α_2) / (1 - α_1) = (1 - 0.19) / (1 - 0.84) = 0.81 / 0.16 = 81 / 16}}. Taking the fourth root gives {{T_2 / T_1 = 3 / 2 = 1.5}}, so {{T_2 = 1.5 * 200 = 300}} K.",
        hints: [
          "Compute both absorbed fractions: {{1 - 0.84 = 0.16}} and {{1 - 0.19 = 0.81}}.",
          "Notice {{81 = 3^4}} and {{16 = 2^4}} when taking the fourth root of {{(T_2 / T_1)^4}}!",
        ],
        strategy: "Fourth-root albedo scaling",
      },
      {
        id: "b1-thermal-gases-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "greenhouse-effect",
        question:
          "Suppose atmospheric carbon dioxide concentration increases abruptly while solar output and planetary albedo remain unchanged. What happens immediately before Earth reaches a new thermal equilibrium?",
        options: [
          "Incoming absorbed solar intensity increases while outgoing infrared radiation stays unchanged.",
          "Outgoing infrared radiation to space increases above absorbed solar intensity until Earth cools.",
          "Both absorbed solar intensity and outgoing infrared radiation drop immediately to zero.",
          "Outgoing infrared radiation to space temporarily drops below absorbed solar intensity, warming Earth.",
        ],
        answerIndex: 3,
        explanation:
          "Extra CO₂ absorbs more outgoing terrestrial IR, so top-of-atmosphere outgoing IR briefly falls below the constant absorbed solar intensity (~238 W m⁻²). This net positive energy imbalance warms Earth's surface and lower atmosphere until outgoing IR rises back to restore radiative balance.",
        hints: [
          "Does adding CO₂ directly change how much visible sunlight Earth absorbs?",
          "If more outgoing IR is absorbed by the atmosphere, is Energy In greater or less than Energy Out at the top of the atmosphere?",
        ],
        strategy: "Top-of-atmosphere energy imbalance drives temperature change",
      },
      {
        id: "b1-thermal-gases-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-laws-kmt",
        question:
          "An ideal gas has density {{ρ = 1.2}} kg m⁻³ and exerts pressure {{P = 1.0 * 10^5}} Pa. Using kinetic theory ({{P = (1/3) ρ v_rms^2}}), what is the root-mean-square speed of its molecules?",
        options: ["289 m s⁻¹", "408 m s⁻¹", "500 m s⁻¹", "866 m s⁻¹"],
        answerIndex: 2,
        explanation:
          "Rearranging {{P = (1/3) ρ v_rms^2}} gives {{v_rms = sqrt((3 P) / ρ) = sqrt((3.0 * 10^5) / 1.2) = sqrt(2.5 * 10^5) = 500}} m s⁻¹. Getting 289 m s⁻¹ forgets the factor of 3 in the numerator.",
        hints: [
          "Solve {{P = (1/3) ρ v_rms^2}} for {{v_rms}}.",
          "Evaluate {{3 * 10^5 / 1.2 = 250000}} and then take the square root.",
        ],
        strategy: "Kinetic theory pressure–speed relation",
      },
      {
        id: "b1-thermal-gases-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-laws-kmt",
        question:
          "Two rigid vessels at the same constant temperature are connected by a closed tap. Vessel X has volume {{2 V}} and contains an ideal gas at {{300}} kPa; Vessel Y has volume {{V}} and contains the same gas at {{60}} kPa. The tap is opened at constant temperature. What is the final equilibrium pressure?",
        options: ["220 kPa", "180 kPa", "240 kPa", "360 kPa"],
        answerIndex: 0,
        explanation:
          "Total moles are conserved at constant {{T}}, so {{P_final V_total = P_X V_X + P_Y V_Y}}. Thus {{P_final (3 V) = 300(2 V) + 60(V) = 660 V}}, giving {{P_final = 660 / 3 = 220}} kPa. Choosing 180 kPa mistakenly takes the unweighted average of 300 and 60 kPa.",
        hints: [
          "Since {{n_total = n_X + n_Y}} and {{T}} is constant, sum the {{P V}} products before mixing.",
          "Divide the total {{P V}} by the combined volume {{2 V + V = 3 V}}.",
        ],
        strategy: "Conservation of moles in connected gas vessels",
      },
      {
        id: "b1-thermal-gases-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "gas-laws-kmt",
        question:
          "A rigid cylinder initially holds {{4.0}} mol of ideal gas at {{400}} kPa and {{300}} K. A valve leaks gas until the pressure drops to {{240}} kPa while the temperature rises to {{360}} K. How many moles of gas remain inside the cylinder?",
        options: ["1.6 mol", "2.0 mol", "2.4 mol", "2.9 mol"],
        answerIndex: 1,
        explanation:
          "Since volume {{V}} and {{R}} are constant, {{n ∝ P / T}}. Thus {{n_2 = n_1 (P_2/P_1)(T_1/T_2) = 4.0 * (240/400) * (300/360) = 4.0 * 0.60 * (5/6) = 2.0}} mol. Getting 2.4 mol ignores the rise in temperature.",
        hints: [
          "From {{P V = n R T}} at constant {{V}}, {{(P_1)/(n_1 T_1) = (P_2)/(n_2 T_2)}}.",
          "Carefully place {{T_1 / T_2}} (not {{T_2 / T_1}}) when solving for {{n_2}}.",
        ],
        strategy: "Variable-mole ideal gas ratio",
      },
      {
        id: "b1-thermal-gases-m3-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "gas-laws-kmt",
        question:
          "A fixed mass of ideal gas is heated at constant volume and its pressure {{P}} (vertical axis) is plotted against Celsius temperature {{t}} (horizontal axis), giving a straight line. What physical quantity is represented by the horizontal-axis intercept?",
        options: [
          "The boiling point of the gas at standard atmospheric pressure",
          "The internal energy of one mole of gas at room temperature",
          "The triple point of water on the Celsius temperature scale",
          "Absolute zero (−273.15 °C), where extrapolated ideal-gas pressure is zero",
        ],
        answerIndex: 3,
        explanation:
          "Since {{P = (n R / V)(t + 273.15)}}, setting {{P = 0}} yields {{t = -273.15}} °C — absolute zero, the temperature at which classical molecular kinetic energy and ideal-gas pressure extrapolate to zero.",
        hints: [
          "Write {{P}} as a linear function of Celsius temperature {{t}} using {{T = t + 273.15}}.",
          "Find the value of {{t}} when {{P = 0}}.",
        ],
        strategy: "Extrapolation of linear gas law graphs",
      },
      {
        id: "b1-thermal-gases-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "thermodynamics-hl",
        question:
          "Two identical samples of an ideal monatomic gas start at the same state {{(P_1, V_1)}} and expand to the same final volume {{V_2}}: Sample X expands isothermally, while Sample Y expands adiabatically. Which comparison is correct?",
        options: [
          "Sample Y does more work and ends at a higher pressure than Sample X.",
          "Both samples do equal work because they undergo the same volume change.",
          "Sample X does more work and ends at a higher temperature than Sample Y.",
          "Sample X does less work because no thermal energy enters Sample X.",
        ],
        answerIndex: 2,
        explanation:
          "On a {{P}}–{{V}} diagram, the adiabatic curve ({{P ∝ V^(-5/3)}}) drops more steeply below the isotherm ({{P ∝ V^(-1)}}). Therefore the area under the isotherm (work done by Sample X) is strictly larger, and Sample X remains at {{T_1}} while Sample Y cools below {{T_1}}.",
        hints: [
          "Sketch an isotherm and an adiabat starting from the same point {{(P_1, V_1)}} — which curve stays higher as {{V}} increases?",
          "Compare the area under each curve from {{V_1}} to {{V_2}}.",
        ],
        strategy: "Compare slopes and areas of isotherms vs adiabats",
      },
      {
        id: "b1-thermal-gases-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "thermodynamics-hl",
        question:
          "An engineer claims to have built a cyclic heat engine operating between reservoirs at {{800}} K and {{200}} K that absorbs {{1000}} J per cycle and rejects only {{200}} J to the cold reservoir. Why is this claim physically impossible?",
        options: [
          "It violates the First Law because total energy out does not equal energy in.",
          "Its 80% efficiency exceeds the 75% Carnot limit, violating the Second Law.",
          "It cannot absorb heat at 800 K unless the cold reservoir is at absolute zero.",
          "A cyclic engine must reject at least 50% of its input heat regardless of temperature.",
        ],
        answerIndex: 1,
        explanation:
          "The claimed efficiency is {{η = (1000 - 200)/1000 = 80%}}. However, the maximum possible Carnot efficiency between 800 K and 200 K is {{η_Carnot = 1 - 200/800 = 75%}}. Operating at 80% would produce {{ΔS_total = -1000/800 + 200/200 = -0.25}} J K⁻¹ < 0, violating the Second Law.",
        hints: [
          "Compute both the claimed efficiency {{1 - Q_C / Q_H}} and the Carnot maximum {{1 - T_C / T_H}}.",
          "Check whether energy is conserved (First Law) vs whether total entropy decreases (Second Law).",
        ],
        strategy: "Test engine claims against both First and Second Laws",
      },
      {
        id: "b1-thermal-gases-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "An ideal gas executes a clockwise triangular cycle on a {{P}}–{{V}} diagram with vertices at {{A(0.010 \" m\"^3, 1.0 * 10^5 \" Pa\")}}, {{B(0.010 \" m\"^3, 4.0 * 10^5 \" Pa\")}}, and {{C(0.030 \" m\"^3, 1.0 * 10^5 \" Pa\")}}. What is the net work done by the gas per cycle?",
        options: ["+3.0 kJ", "+6.0 kJ", "+4.0 kJ", "+1.5 kJ"],
        answerIndex: 0,
        explanation:
          "The loop is a right-angled triangle of base {{ΔV = 0.030 - 0.010 = 0.020}} m³ and height {{ΔP = (4.0 - 1.0) * 10^5 = 3.0 * 10^5}} Pa. Since the cycle runs clockwise, {{W_net = +(1/2) * base * height = 0.5 * 0.020 * 3.0 * 10^5 = +3000}} J = +3.0 kJ. Forgetting the {{1/2}} gives +6.0 kJ.",
        hints: [
          "Plot the three vertices on a quick {{P}}–{{V}} sketch — notice the right angle at vertex A.",
          "Area of a triangle is {{(1/2) * ΔV * ΔP}}.",
        ],
        strategy: "Geometric area of triangular p–V loop",
      },
      {
        id: "b1-thermal-gases-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "thermodynamics-hl",
        question:
          "Through a metal rod, {{600}} J of thermal energy flows spontaneously from a large hot reservoir held at {{600}} K to a large cold reservoir held at {{300}} K. What is the net entropy change {{ΔS_total}} of the two reservoirs?",
        options: ["0 J K⁻¹", "−1.0 J K⁻¹", "+1.0 J K⁻¹", "+3.0 J K⁻¹"],
        answerIndex: 2,
        explanation:
          "The hot reservoir loses heat ({{ΔS_H = -600 / 600 = -1.0}} J K⁻¹) while the cold reservoir gains heat ({{ΔS_C = +600 / 300 = +2.0}} J K⁻¹). Summing gives {{ΔS_total = -1.0 + 2.0 = +1.0}} J K⁻¹ > 0, confirming spontaneous conduction is irreversible.",
        hints: [
          "Compute {{ΔS_H = -Q / T_H}} (heat leaving hot body) and {{ΔS_C = +Q / T_C}} (heat entering cold body).",
          "Add the signed entropy changes together.",
        ],
        strategy: "Total entropy change across two thermal reservoirs",
      },
      {
        id: "b1-thermal-gases-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "thermodynamics-hl",
        question:
          "A Carnot engine initially operates between {{T_H = 600}} K and {{T_C = 300}} K (efficiency 50%). Engineers can either raise {{T_H}} by {{100}} K (keeping {{T_C = 300}} K) OR lower {{T_C}} by {{100}} K (keeping {{T_H = 600}} K). Which modification yields the greater efficiency?",
        options: [
          "Raising {{T_H}} by 100 K gives higher efficiency (66.7% vs 57.1%).",
          "Both modifications produce the exact same new efficiency of 60.0%.",
          "Neither modification changes Carnot efficiency because {{T_H - T_C}} increases by the same 100 K.",
          "Lowering {{T_C}} by 100 K gives higher efficiency (66.7% vs 57.1%).",
        ],
        answerIndex: 3,
        explanation:
          "Raising {{T_H}} to 700 K gives {{η_1 = 1 - 300/700 = 4/7 ≈ 57.1%}}. Lowering {{T_C}} to 200 K gives {{η_2 = 1 - 200/600 = 2/3 ≈ 66.7%}}. Reducing {{T_C}} shrinks the numerator of {{T_C/T_H}} proportionally much more than increasing the larger denominator {{T_H}}.",
        hints: [
          "Compute {{1 - 300/700}} and compare it directly with {{1 - 200/600}}.",
          "Remember that {{η = (T_H - T_C) / T_H}} — keeping {{T_H}} smaller while raising the numerator by 100 K produces a bigger fraction!",
        ],
        strategy: "Compare fractional sensitivity of ηCarnot = 1 − TC/TH",
      },
    ],
  },
];
