import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Right now, invisible nitrogen and oxygen molecules are slamming into every square centimetre of your skin at nearly 500 m s⁻¹ — faster than a commercial airliner — while your own body glows brightly in 9.4 μm infrared light like a 100 W human lamp. Theme B explains how those microscopic collisions power steam turbines, keep Earth's oceans liquid instead of frozen solid, and enforce the universe's one-way arrow of time.",

  didYouKnow: [
    "At room temperature (300 K), air molecules move at about 500 m s⁻¹, yet a puff of perfume takes seconds to cross a room because each molecule collides roughly 7 billion times per second and zigzags in a random walk.",
    "The Stefan–Boltzmann {{T^4}} law is extraordinarily sensitive: increasing a star's surface temperature by just 19% (a factor of {{2^(1/4)}}) doubles its total radiated power per square metre!",
    "Without Earth's natural greenhouse effect (+33 K warming), Earth's mean surface temperature would sit near −18 °C (255 K) — colder than a domestic freezer — and the oceans would freeze over, triggering a runaway ice-albedo snowball Earth.",
    "Ludwig Boltzmann's tomb in Vienna's Zentralfriedhof has his immortal statistical entropy formula {{S = k log W}} (written {{S = k_B ln Ω}} in IB notation) carved straight into the marble above his bust.",
    "Even the cleanest nuclear or natural-gas power plant must dump roughly 40%–65% of its thermal energy as waste heat — not because of poor engineering, but because the Second Law of Thermodynamics forbids converting heat 100% into cyclic work.",
    "A single gram of steam condensing at 100 °C releases 2260 J of latent heat — nearly seven times more energy than cooling that same gram of boiling water all the way down to body temperature — which is why steam burns are far worse than boiling-water scalds.",
  ],

  activities: [
    {
      title: "Adiabatic Heating & Cooling You Can Feel",
      emoji: "🚲",
      materials: [
        "A manual bicycle pump (or a large plastic syringe with finger sealing the nozzle)",
        "A compressed-air duster or deodorant aerosol spray",
        "An infrared thermometer (optional, to record exact °C jumps)",
      ],
      steps: [
        "Block the outlet of the bicycle pump tightly and pump down 10–15 vigorous strokes in quick succession.",
        "Carefully touch the metal barrel near the base of the pump — notice how noticeably hot it has become even though no external heater touched it.",
        "Now spray a short 3-second burst from an aerosol can and feel the metal canister cool rapidly in your hand.",
      ],
      maths:
        "Fast compression happens too quickly for heat to escape ({{Q ≈ 0}}), so external work done ON the air ({{W < 0}}) raises its internal energy ({{ΔU = -W > 0}}) via {{T V^(2/3) = \"const\"}}. Conversely, rapid expansion of propellant does positive work pushing against air ({{W > 0}}), draining internal energy ({{ΔU < 0}}) and chilling the canister!",
    },
    {
      title: "Foam-Cup Ice Calorimetry (Measure L_f at Home)",
      emoji: "🧊",
      materials: [
        "Two nested polystyrene or insulated cups + digital kitchen scale (1 g resolution)",
        "Digital kitchen thermometer (0.1 °C resolution)",
        "200 g of warm tap water (~40 °C) and 40–50 g of melting ice cubes blotted dry with tissue",
      ],
      steps: [
        "Weigh {{m_w}} (~0.200 kg) of warm water in the insulated cup and record its initial temperature {{T_w}}.",
        "Blot 2–3 melting ice cubes dry (so they are at 0 °C without clinging surface water), drop them in, stir gently until completely melted, and record the lowest equilibrium temperature {{T_f}}.",
        "Re-weigh the cup to find the exact mass of ice added ({{m_i = m_final - m_w}}).",
        "Compute your experimental specific latent heat of fusion and compare with the textbook value {{3.34 * 10^5}} J kg⁻¹!",
      ],
      maths:
        "From energy conservation {{m_i L_f + m_i c_w (T_f - 0) = m_w c_w (T_w - T_f)}}, solve {{L_f = (m_w c_w (T_w - T_f) - m_i c_w T_f) / m_i}}. Notice why blotting the ice dry matters: clinging liquid water adds to {{m_i}} without absorbing {{L_f}}, systematically lowering your measured {{L_f}}!",
    },
    {
      title: "Albedo Contrast Experiment in Sunlight",
      emoji: "☀️",
      materials: [
        "Two identical glass jars or aluminium cans (one wrapped in white paper/foil, one wrapped in matte black paper)",
        "Equal volumes of water (150 mL each) and two thermometers",
        "Direct midday sunlight (or a desk lamp placed symmetrically between both jars)",
      ],
      steps: [
        "Record the starting water temperature of both jars, then place them side-by-side in direct sunlight for 15 minutes.",
        "Log temperatures every 2 minutes and plot {{T}} against time {{t}} for both surfaces on the same axes.",
        "Compare the initial slopes {{ΔT/Δt}} to estimate the ratio of absorbed fractions {{(1 - α_black) / (1 - α_white)}}!",
      ],
      maths:
        "Initial heating rate obeys {{m c (ΔT/Δt) = (1 - α) I A}}. The matte black jar (low albedo {{α ≈ 0.05}}) warms much faster than the shiny/white jar (high albedo {{α ≈ 0.80}}), modelling directly why dark open Arctic oceans absorb far more solar power than bright sea ice.",
    },
  ],

  history: {
    title: "From Steam Engines to Climate Science: Carnot, Boltzmann & Arrhenius",
    story:
      "In 1824, a 28-year-old French military engineer named **Sadi Carnot** asked a deceptively practical question: *how much mechanical work can ever be squeezed out of a kilogram of coal in a steam engine?* Remarkably, Carnot still believed heat was an invisible weightless fluid ('caloric') flowing downhill like water over a millwheel — yet his idealized reversible cycle proved a timeless truth that outlived caloric theory: maximum engine efficiency depends ONLY on the temperature drop between the boiler and condenser ({{η_Carnot = 1 - T_C / T_H}}). Tragically, Carnot died of cholera at 36, and his notes were rescued by Lord Kelvin and Rudolf Clausius, who unified them into the **Second Law of Thermodynamics** and named **entropy**.\n\n" +
      "Half a century later, Austrian physicist **Ludwig Boltzmann** revolutionized physics by insisting that temperature and entropy were not mysterious fluids at all, but pure statistics of invisibly small colliding atoms. Faced with fierce skepticism from colleagues who doubted atoms even existed, Boltzmann derived {{S = k_B ln Ω}} — explaining that the arrow of time points forward simply because disordered arrangements vastly outnumber ordered ones.\n\n" +
      "Meanwhile in Stockholm in 1896, Swedish physicist and Nobel laureate **Svante Arrhenius** applied Stefan–Boltzmann radiation and infrared absorption measurements (originally pioneered by Eunice Foote in 1856 and John Tyndall in 1859) to perform the world's first hand-calculated climate model — spending a full year filling sheets of paper with tens of thousands of arithmetic steps! Arrhenius concluded that halving atmospheric CO₂ would trigger an Ice Age, while doubling CO₂ would warm Earth by roughly 4–5 °C — astonishingly close to modern supercomputer climate projections over a century later.",
  },
};
