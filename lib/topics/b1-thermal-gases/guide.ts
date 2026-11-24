import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "b1-thermal-gases",
  title: "B.1–B.4 Thermal Transfers, Greenhouse, Gases & Thermodynamics",
  strand: "Theme B: Particulate Nature of Matter",
  icon: "🌡️",
  level: "SL",
  summary:
    "Connect the random microscopic motion of atoms to macroscopic heat transfer, blackbody radiation, Earth's greenhouse balance, ideal gas laws, and (HL) the laws of thermodynamics, Carnot heat engines and entropy.",
  intro:
    "Why does boiling a kettle take far more energy than heating the water to 100 °C? Why is Earth a habitable 15 °C instead of a frozen −18 °C? And why can no power station — however cleverly engineered — convert 100% of heat into mechanical work? Theme B bridges the invisible world of colliding particles with planetary climate and the fundamental arrow of time.",

  guide: [
    // =========================================================================
    // SECTION 1 — B.1 (SL)
    // =========================================================================
    {
      id: "thermal-transfers-radiation",
      heading: "B.1 Internal Energy, Specific/Latent Heat & Blackbody Radiation",
      level: "SL",
      discovery: {
        problem:
          "You place a 1 kg block of ice at −10 °C in a perfectly insulated saucepan on a constant-power hob until it becomes steam at 110 °C. During two stretches of time, the thermometer stops rising completely even though the hob keeps pumping energy in. Meanwhile, the metal heating element glows dull red at 1000 K, whereas a halogen bulb filament at 3000 K shines blazing white. **Before reading on:** (1) Where does the energy go when the thermometer stays flat? (2) By what factor does a blackbody's radiated power increase when its Kelvin temperature triples?",
        idea:
          "During a phase change, supplied thermal energy breaks intermolecular bonds (increasing molecular **potential energy**) rather than speeding up molecules, so average kinetic energy — and therefore temperature — stays constant. For thermal radiation, the Stefan–Boltzmann law gives {{L = σ A T^4}}, so tripling Kelvin temperature multiplies radiated power by {{3^4 = 81}}, while Wien's law ({{λ_max T = 2.90 * 10^(-3)}}) shifts the peak wavelength three times shorter from infrared into visible light.",
      },
      body:
        "### Internal Energy & The Kelvin Scale\n" +
        "Every substance consists of particles in perpetual random motion interacting through intermolecular forces. Its **internal energy** {{U}} is the sum of the **total random kinetic energy** and **total intermolecular potential energy** of all its particles. **Thermal energy (heat)** {{Q}} is energy transferred spontaneously from a hotter body to a colder one because of a temperature difference.\n\n" +
        "**Absolute (Kelvin) temperature** {{T}} is directly proportional to the **average random translational kinetic energy** of the particles:\n" +
        "- {{T / \"K\" = t / \"°C\" + 273.15}} (so a temperature *change* has the same numerical value in K and °C: {{ΔT(\"K\") = Δt(\"°C\")}})\n" +
        "- {{E_k = (3/2) k_B T}}, where {{k_B = 1.38 * 10^(-23)}} J K⁻¹ is the Boltzmann constant.\n" +
        "- At **absolute zero** (0 K = −273.15 °C), particles have minimum possible kinetic energy.\n\n" +
        "### Specific Heat Capacity vs Specific Latent Heat\n" +
        "- **Temperature change (single phase):** {{Q = m c ΔT}}, where specific heat capacity {{c}} (J kg⁻¹ K⁻¹) is the thermal energy required to raise 1 kg of a substance by 1 K without changing phase. Here supplied energy increases average random molecular **kinetic energy**.\n" +
        "- **Phase change (constant temperature):** {{Q = m L}}, where specific latent heat {{L}} (J kg⁻¹) is the thermal energy required to change the phase of 1 kg of a substance at constant temperature. During melting ({{L_f}}, fusion) or boiling ({{L_v}}, vaporisation), supplied energy increases intermolecular **potential energy** as bonds are weakened or broken.\n" +
        "- Always {{L_v > L_f}} for the same substance: melting only loosens rigid lattice bonds so molecules can slide past each other, whereas vaporisation completely separates molecules against intermolecular attraction *and* does mechanical work pushing back the surrounding atmosphere.\n\n" +
        "### Thermal Energy Transfer Mechanisms\n" +
        "1. **Conduction:** Thermal energy transfers through matter without bulk motion, via lattice vibrations (phonons) in all solids plus mobile delocalised electrons in metals. Steady-state heat transfer rate across a slab of thermal conductivity {{k}}, cross-sectional area {{A}}, thickness {{Δx}}, and temperature difference {{ΔT}} is:\n" +
        "{{ΔQ / Δt = k A (ΔT / Δx)}}\n" +
        "2. **Convection:** Bulk movement of a fluid (liquid or gas) driven by buoyancy. Heated fluid expands, its density {{ρ = m/V}} decreases, and it rises while cooler, denser fluid sinks to replace it.\n" +
        "3. **Thermal Radiation:** Emission of electromagnetic waves by any object above 0 K; requires **no medium** and travels through vacuum at speed {{c}}.\n\n" +
        "### Blackbody Radiation, Wien's Law & Luminosity\n" +
        "An **ideal black body** absorbs 100% of incident radiation at all wavelengths and is the most efficient possible thermal emitter at temperature {{T}}. Its total radiated power (**luminosity** {{L}}, in W) obeys the **Stefan–Boltzmann law**:\n" +
        "- {{L = σ A T^4}} (or {{P = e σ A T^4}} for a real surface of emissivity {{e}}), where {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴.\n" +
        "- **Wien's displacement law** links the peak emission wavelength {{λ_max}} to Kelvin temperature:\n" +
        "{{λ_max T = 2.90 * 10^(-3)}} m K. Hotter black bodies peak at shorter wavelengths (red → yellow → blue-white).\n" +
        "- At distance {{d}} from a spherical isotropic source of luminosity {{L}}, the radiation spreads over a sphere of area {{4π d^2}}, giving **apparent brightness** (intensity):\n" +
        "{{b = L / (4 pi d^2)}} (units: W m⁻²).",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 270" role="img" aria-label="Dual physics diagram: heating curve with solid, liquid, gas slopes and melting and boiling plateaus on the left, and blackbody spectral intensity curves shifting to shorter wavelengths at higher Kelvin temperatures on the right">' +
        '<rect x="4" y="4" width="328" height="262" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<rect x="344" y="4" width="332" height="262" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="168" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Heating Curve (Phase Plateaus)</text>' +
        '<line x1="46" y1="226" x2="314" y2="226" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<line x1="46" y1="226" x2="46" y2="40" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<text x="180" y="248" text-anchor="middle" font-size="11" fill="var(--ink-2)">Thermal energy supplied Q</text>' +
        '<text x="18" y="135" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 18 135)">Temperature T (°C)</text>' +
        '<line x1="46" y1="184" x2="305" y2="184" stroke="var(--line)" stroke-dasharray="4 3" stroke-width="1"/>' +
        '<line x1="46" y1="104" x2="305" y2="104" stroke="var(--line)" stroke-dasharray="4 3" stroke-width="1"/>' +
        '<text x="41" y="188" text-anchor="end" font-size="10" fill="var(--ink-2)">0</text>' +
        '<text x="41" y="108" text-anchor="end" font-size="10" fill="var(--ink-2)">100</text>' +
        '<polyline points="54,214 78,184 120,184 176,104 274,104 304,58" fill="none" stroke="#2563eb" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>' +
        '<line x1="78" y1="184" x2="120" y2="184" stroke="#ea580c" stroke-width="3.5"/>' +
        '<line x1="176" y1="104" x2="274" y2="104" stroke="#dc2626" stroke-width="3.5"/>' +
        '<text x="64" y="206" font-size="9.5" fill="var(--ink)">Solid</text>' +
        '<text x="99" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c">Melt (mLf)</text>' +
        '<text x="99" y="198" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">ΔEp ↑, Ek const</text>' +
        '<text x="136" y="146" font-size="9.5" fill="#2563eb" font-weight="700">Liquid (mcΔT)</text>' +
        '<text x="225" y="96" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Boil (mLv &gt;&gt; mLf)</text>' +
        '<text x="225" y="118" text-anchor="middle" font-size="8.5" fill="var(--ink-2)">ΔEp ↑, Ek const</text>' +
        '<text x="278" y="64" font-size="9.5" fill="#2563eb" font-weight="700">Gas</text>' +
        '<text x="510" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Blackbody Spectrum (Wien Shift)</text>' +
        '<rect x="424" y="42" width="44" height="184" fill="#fde68a" opacity="0.35"/>' +
        '<text x="446" y="54" text-anchor="middle" font-size="8.5" font-weight="700" fill="#b45309">Visible</text>' +
        '<line x1="384" y1="226" x2="660" y2="226" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<line x1="384" y1="226" x2="384" y2="40" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<text x="522" y="248" text-anchor="middle" font-size="11" fill="var(--ink-2)">Wavelength λ (μm)</text>' +
        '<text x="360" y="135" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 360 135)">Spectral intensity</text>' +
        '<text x="426" y="238" text-anchor="middle" font-size="9" fill="var(--ink-2)">0.4</text>' +
        '<text x="468" y="238" text-anchor="middle" font-size="9" fill="var(--ink-2)">0.7</text>' +
        '<text x="540" y="238" text-anchor="middle" font-size="9" fill="var(--ink-2)">1.5</text>' +
        '<text x="630" y="238" text-anchor="middle" font-size="9" fill="var(--ink-2)">2.5</text>' +
        '<path d="M 392 225 C 406 220, 424 62, 444 62 C 464 62, 495 162, 540 198 C 580 216, 622 222, 654 224" fill="none" stroke="#2563eb" stroke-width="2.6"/>' +
        '<path d="M 396 225 C 420 220, 448 134, 474 134 C 504 134, 540 192, 592 214 C 620 221, 642 223, 654 224" fill="none" stroke="#ea580c" stroke-width="2.4"/>' +
        '<path d="M 412 225 C 448 222, 486 184, 522 184 C 562 184, 602 212, 654 223" fill="none" stroke="#dc2626" stroke-width="2.2"/>' +
        '<line x1="444" y1="62" x2="444" y2="226" stroke="#2563eb" stroke-dasharray="3 3" stroke-width="1.2"/>' +
        '<line x1="474" y1="134" x2="474" y2="226" stroke="#ea580c" stroke-dasharray="3 3" stroke-width="1.2"/>' +
        '<line x1="522" y1="184" x2="522" y2="226" stroke="#dc2626" stroke-dasharray="3 3" stroke-width="1.2"/>' +
        '<text x="494" y="76" font-size="9.5" font-weight="700" fill="#2563eb">6000 K (Sun)</text>' +
        '<text x="512" y="132" font-size="9.5" font-weight="700" fill="#ea580c">4500 K</text>' +
        '<text x="546" y="176" font-size="9.5" font-weight="700" fill="#dc2626">3000 K</text>' +
        '<text x="582" y="98" font-size="9" fill="var(--ink-2)">Area ∝ T⁴</text>' +
        '<text x="582" y="112" font-size="9" fill="var(--ink-2)">λmax ∝ 1/T</text>' +
        '</svg>',
      diagramCaption:
        "Left: On a heating curve, sloping segments correspond to kinetic-energy increases (Q = mcΔT), while flat plateaus correspond to potential-energy increases during melting and boiling (Q = mL). Right: Higher Kelvin temperatures both shift the blackbody peak to shorter wavelengths (Wien's law) and dramatically enlarge the total area under the curve (Stefan–Boltzmann L ∝ T⁴).",
      workedExamples: [
        {
          title: "Calorimetry with Phase Change (Method of Mixtures)",
          problem:
            "A 0.20 kg block of ice at 0.0 °C is dropped into 1.00 kg of water at 40.0 °C inside a perfectly insulated container. Given {{c_w = 4200}} J kg⁻¹ K⁻¹ and {{L_f = 3.34 * 10^5}} J kg⁻¹, find the final equilibrium temperature of the water.",
          steps: [
            "First check whether all the ice melts: energy required to melt 0.20 kg of ice is {{Q_melt = m_i L_f = 0.20 * 3.34 * 10^5 = 66800}} J.",
            "Maximum energy the warm water can release cooling to 0 °C is {{Q_max = 1.00 * 4200 * 40.0 = 168000}} J. Since 168 000 J > 66 800 J, all the ice melts and the final temperature {{T_f > 0}} °C.",
            "Apply conservation of energy (heat gained by ice + melted ice water = heat lost by warm water): {{m_i L_f + m_i c_w (T_f - 0) = m_w c_w (40.0 - T_f)}}.",
            "Substitute values: {{66800 + 0.20 * 4200 * T_f = 1.00 * 4200 * (40.0 - T_f)}} → {{66800 + 840 T_f = 168000 - 4200 T_f}}.",
            "Collect terms: {{5040 T_f = 101200}} → {{T_f = 101200 / 5040 = 20.08}} °C ≈ **20.1 °C**.",
          ],
          answer: "20.1 °C",
          yourTurn: {
            question:
              "A 1500 W electric kettle heats 0.50 kg of water from 20 °C to 100 °C ({{c = 4200}} J kg⁻¹ K⁻¹). Assuming no thermal losses, calculate the time taken in seconds.",
            answer: { type: "number", value: 112, display: "112 s" },
            solution:
              "{{Q = m c ΔT = 0.50 * 4200 * (100 - 20) = 168000}} J. Since {{P = Q / t}}, {{t = 168000 / 1500 = 112}} s.",
          },
        },
        {
          title: "Wien's Law & Stefan–Boltzmann Luminosity of a Star",
          problem:
            "A star behaves as an ideal black body with peak emission wavelength {{λ_max = 500}} nm and radius {{R = 7.0 * 10^8}} m. Determine (a) its surface temperature {{T}}, and (b) its luminosity {{L}}.",
          steps: [
            "Convert wavelength to metres: {{λ_max = 500 * 10^(-9) = 5.00 * 10^(-7)}} m.",
            "Apply Wien's displacement law: {{T = (2.90 * 10^(-3)) / (5.00 * 10^(-7)) = 5800}} K.",
            "Calculate spherical surface area: {{A = 4 pi R^2 = 4 pi (7.0 * 10^8)^2 = 6.16 * 10^18}} m².",
            "Apply the Stefan–Boltzmann law: {{L = σ A T^4 = (5.67 * 10^(-8)) * (6.16 * 10^18) * 5800^4 = 3.95 * 10^26}} W.",
          ],
          answer: "T = 5800 K; L = 3.95 × 10²⁶ W",
          yourTurn: {
            question:
              "A blackbody furnace has an internal temperature of 2900 K. Use Wien's displacement law ({{λ_max T = 2.90 * 10^(-3)}} m K) to calculate its peak emission wavelength in nanometres (nm).",
            answer: { type: "number", value: 1000, display: "1000 nm" },
            solution:
              "{{λ_max = (2.90 * 10^(-3)) / 2900 = 1.00 * 10^(-6)}} m = **1000 nm** (in the near-infrared).",
          },
        },
      ],
      keyPoints: [
        "Temperature in Kelvin measures average random translational kinetic energy ({{E_k = (3/2) k_B T}}), whereas internal energy {{U}} sums ALL molecular kinetic and intermolecular potential energies.",
        "Use {{Q = m c ΔT}} whenever temperature changes within a single phase, and {{Q = m L}} whenever a phase change occurs at constant temperature.",
        "Always convert temperatures to **Kelvin** before using Stefan–Boltzmann ({{L = σ A T^4}}) or Wien's law ({{λ_max T = 2.90 * 10^(-3)}} m K) — Celsius temperatures give wildly wrong answers!",
        "For steady-state conduction, rate of heat flow {{ΔQ/Δt = k A ΔT / Δx}} depends on the temperature *gradient* {{ΔT/Δx}}, not absolute temperature.",
        "Apparent brightness obeys the inverse-square law {{b = L / (4 pi d^2)}}; doubling distance quarters received intensity.",
      ],
      whyItWorks:
        "Why does radiated power scale as {{T^4}}? Integrating Planck's quantum spectral radiance across all wavelengths yields a factor of {{T^3}} from the number density of thermal photons in an equilibrium cavity times a factor of {{T}} from each photon's typical energy ({{h f ≈ k_B T}}), giving total energy density proportional to {{T^4}}.",
      strategies: [
        "**Mixture problems:** Always list every separate heating/cooling and phase-change term before equating {{Q_gained = Q_lost}}, and verify whether a phase change actually completes.",
        "**Ratio questions:** When comparing two stars or radiators with {{L = σ (4 pi R^2) T^4}}, divide the two equations so {{4 pi σ}} cancels: {{L_2/L_1 = (R_2/R_1)^2 (T_2/T_1)^4}}.",
        "**Unit vigilance:** Convert nm to m ({{10^(-9)}}), μm to m ({{10^(-6)}}), grams to kg ({{10^(-3)}}), and °C to K (+273.15) on line 1 of every solution.",
      ],
      thinkDeeper:
        "If two rooms are both at 22 °C, why does a ceramic tile floor feel much colder to your bare feet than a wool rug? Both are at the exact same temperature, so neither is 'colder' — the tile has a much larger thermal conductivity {{k}}, conducting heat away from your 37 °C skin at a far greater rate {{ΔQ/Δt}}.",
    },

    // =========================================================================
    // SECTION 2 — B.2 (SL)
    // =========================================================================
    {
      id: "greenhouse-effect",
      heading: "B.2 Albedo, Emissivity & The Greenhouse Effect",
      level: "SL",
      discovery: {
        problem:
          "Sunlight reaches the top of Earth's atmosphere with intensity {{S = 1360}} W m⁻², and Earth reflects 30% of it back to space. If you spread the remaining 70% evenly over Earth's entire spherical surface and equate it to blackbody emission {{σ T^4}}, you get {{T ≈ 255}} K (−18 °C). Yet Earth's actual average surface temperature is 288 K (+15 °C). **Why is Earth 33 K warmer than this calculation predicts, and why doesn't the atmosphere block incoming sunlight just as strongly as outgoing heat?**",
        idea:
          "The Sun (5800 K) emits **short-wave visible light** ({{λ_max ≈ 0.5}} μm) to which atmospheric gases are largely transparent. Earth (288 K) emits **long-wave infrared radiation** ({{λ_max ≈ 10}} μm), which matches the resonant vibrational frequencies of greenhouse gas molecules (H₂O, CO₂, CH₄, N₂O). Those molecules absorb Earth's outgoing IR and re-emit it in **all directions** — sending a substantial fraction back down to the surface, raising surface equilibrium temperature by ~33 K.",
      },
      body:
        "### Solar Constant, Geometry & Albedo\n" +
        "At Earth's mean orbital distance ({{1.50 * 10^11}} m), the intensity of solar radiation perpendicular to the beam at the top of the atmosphere is the **solar constant** {{S = 1.36 * 10^3}} W m⁻².\n\n" +
        "- **The factor of {{1/4}}:** Earth intercepts sunlight over its circular cross-sectional disc of area {{pi R^2}}, yet distributes and radiates thermal energy over its entire spherical surface of area {{4 pi R^2}}. Hence the global average incident solar intensity is {{S / 4 = 340}} W m⁻².\n" +
        "- **Albedo ({{α}}):** The dimensionless fraction of incident radiation scattered/reflected back to space:\n" +
        "{{α = P_scattered / P_incident}} ({{0 <= α <= 1}}).\n" +
        "Fresh snow and ice have high albedo (~0.8–0.9), clouds ~0.5, forests ~0.15, and deep ocean water ~0.06. Earth's global average albedo is {{α ≈ 0.30}}.\n" +
        "- **Average absorbed solar intensity:** {{I_abs = ((1 - α) S) / 4}}. For Earth, {{I_abs = (0.70 * 1360) / 4 = 238}} W m⁻².\n\n" +
        "### Emissivity & Radiative Equilibrium\n" +
        "Real surfaces radiate less power than an ideal black body at the same temperature. **Emissivity** {{e}} is the ratio of power radiated per unit area by a surface to that of a black body at the same temperature {{T}}:\n" +
        "- {{e = I_emitted / (σ T^4)}}, so {{I_emitted = e σ T^4}} ({{0 <= e <= 1}}; {{e = 1}} for a black body).\n" +
        "- In **radiative equilibrium**, total power absorbed equals total power radiated to space:\n" +
        "{{e σ T^4 = ((1 - α) S) / 4}}.\n" +
        "For an airless blackbody Earth ({{e = 1}}, {{α = 0.30}}), {{T = (238 / (5.67 * 10^(-8)))^(1/4) ≈ 255}} K (−18 °C).\n\n" +
        "### Molecular Mechanism of the Greenhouse Effect\n" +
        "Why do **greenhouse gases** (principally **H₂O**, **CO₂**, **CH₄**, and **N₂O**) trap terrestrial radiation while N₂ and O₂ (99% of dry air) do not?\n" +
        "1. Earth's surface (~288 K) peaks in the thermal infrared ({{λ_max ≈ 10}} μm), whereas sunlight (~5800 K) peaks in visible light ({{λ_max ≈ 0.5}} μm).\n" +
        "2. Greenhouse gas molecules have three or more atoms with **natural vibrational modes** whose photon energies match infrared wavelengths, AND those vibrations change the molecule's **electric dipole moment** — enabling **resonant absorption** of IR photons. Symmetric diatomic molecules like N₂ and O₂ have zero dipole moment at all bond lengths and cannot absorb IR.\n" +
        "3. Excited greenhouse molecules quickly re-emit IR photons **isotropically (in all directions)** — roughly half upward to space and half **downward back to Earth's surface**. To balance both absorbed solar radiation and downward atmospheric IR, the surface must warm to ~288 K so that top-of-atmosphere outgoing IR still equals 238 W m⁻².\n\n" +
        "### Enhanced Greenhouse Effect & Feedback Loops\n" +
        "Human burning of fossil fuels and land-use change raise atmospheric CO₂ and CH₄ concentrations, increasing the atmosphere's effective IR opacity and producing a positive radiative imbalance until Earth warms to a higher equilibrium temperature. Crucially, warming triggers **positive feedback loops**, such as **ice-albedo feedback**: melting polar ice exposes darker ocean water, lowering global albedo {{α}}, increasing absorbed solar intensity {{(1 - α)S/4}}, and amplifying warming further.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-label="Earth radiative energy balance Sankey diagram showing 340 watts per square metre incoming shortwave solar radiation, 102 reflected by albedo 0.30, 238 absorbed by the surface, 390 longwave infrared emitted by the 288 K surface, greenhouse gas absorption and re-emission of 152 back to the surface and 198 to space plus 40 escaping through the atmospheric window">' +
        '<rect x="6" y="6" width="668" height="268" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="340" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Earth Radiative Energy Balance &amp; Greenhouse Effect (W m⁻²)</text>' +
        '<rect x="20" y="96" width="640" height="58" rx="8" fill="#0ea5e9" opacity="0.16" stroke="#0284c7" stroke-dasharray="5 3" stroke-width="1.3"/>' +
        '<text x="34" y="114" font-size="10.5" font-weight="700" fill="#0369a1">Atmosphere (Greenhouse Gases: H₂O, CO₂, CH₄, N₂O)</text>' +
        '<text x="34" y="129" font-size="9.5" fill="var(--ink-2)">Transparent to shortwave visible (~0.5 μm) · Resonant absorber of longwave IR (~10 μm)</text>' +
        '<rect x="20" y="220" width="640" height="44" rx="8" fill="#15803d" opacity="0.20" stroke="#15803d" stroke-width="1.4"/>' +
        '<text x="340" y="240" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Earth Surface (Mean T ≈ 288 K / +15 °C · Balanced: 238 + 152 = 390 W m⁻²)</text>' +
        '<text x="340" y="255" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Without greenhouse back-radiation: T = 255 K (−18 °C)</text>' +
        '<defs>' +
        '<marker id="arrY" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/></marker>' +
        '<marker id="arrR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>' +
        '<marker id="arrO" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/></marker>' +
        '</defs>' +
        '<line x1="120" y1="42" x2="120" y2="215" stroke="#d97706" stroke-width="9" opacity="0.85" marker-end="url(#arrY)"/>' +
        '<text x="120" y="38" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">Incoming Solar S/4 = 340</text>' +
        '<path d="M 124 88 Q 168 78 202 48" fill="none" stroke="#d97706" stroke-width="4.5" stroke-dasharray="5 3" marker-end="url(#arrY)"/>' +
        '<text x="210" y="49" font-size="10" font-weight="700" fill="#b45309">Reflected (α = 0.30): 102</text>' +
        '<text x="164" y="192" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">Absorbed: 238</text>' +
        '<line x1="370" y1="220" x2="370" y2="158" stroke="#dc2626" stroke-width="10" opacity="0.85" marker-end="url(#arrR)"/>' +
        '<text x="305" y="193" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">Surface IR: 390</text>' +
        '<line x1="468" y1="154" x2="468" y2="215" stroke="#ea580c" stroke-width="6.5" opacity="0.9" marker-end="url(#arrO)"/>' +
        '<text x="548" y="185" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">IR Back-Radiation: 152</text>' +
        '<text x="548" y="199" text-anchor="middle" font-size="9" fill="var(--ink-2)">(warms surface by +33 K)</text>' +
        '<line x1="450" y1="96" x2="450" y2="48" stroke="#dc2626" stroke-width="7.5" opacity="0.85" marker-end="url(#arrR)"/>' +
        '<text x="450" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">Atmosphere IR to Space: 198</text>' +
        '<line x1="594" y1="220" x2="594" y2="48" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#arrR)"/>' +
        '<text x="604" y="64" font-size="9.5" font-weight="700" fill="#dc2626">Window</text>' +
        '<text x="604" y="76" font-size="9.5" font-weight="700" fill="#dc2626">IR: 40</text>' +
        '<text x="540" y="25" text-anchor="start" font-size="9.5" fill="var(--ink-2)">Total Out = 102 + 198 + 40 = 340 ✓</text>' +
        '</svg>',
      diagramCaption:
        "Radiative equilibrium holds at every boundary: top of atmosphere (340 in = 102 reflected + 198 atmosphere IR + 40 window IR), atmosphere (350 absorbed = 198 up + 152 down), and surface (238 solar + 152 back-radiation = 390 emitted IR at 288 K).",
      workedExamples: [
        {
          title: "Planetary Equilibrium Temperature Without an Atmosphere",
          problem:
            "Earth receives solar intensity {{S = 1360}} W m⁻² and has mean albedo {{α = 0.30}}. Treating Earth as an ideal black body ({{e = 1}}) without a greenhouse atmosphere, calculate its radiative equilibrium surface temperature {{T}} in kelvin and °C.",
          steps: [
            "Average incident solar intensity across Earth's spherical surface: {{I_in = S / 4 = 1360 / 4 = 340}} W m⁻².",
            "Fraction absorbed is {{1 - α = 0.70}}, so {{I_abs = 0.70 * 340 = 238}} W m⁻².",
            "Equate absorbed intensity to blackbody emission: {{σ T^4 = 238}} → {{T^4 = 238 / (5.67 * 10^(-8)) = 4.198 * 10^9}} K⁴.",
            "Take the fourth root: {{T = (4.198 * 10^9)^(1/4) = 254.5}} K ≈ **255 K** (which is {{255 - 273 = -18}} °C).",
          ],
          answer: "255 K (−18 °C)",
          yourTurn: {
            question:
              "An exoplanet orbits a star where the top-of-atmosphere stellar intensity is {{S = 800}} W m⁻² and its albedo is {{α = 0.25}}. Calculate the average stellar intensity absorbed by the planet's surface in W m⁻².",
            answer: { type: "number", value: 150, display: "150 W m⁻²" },
            solution:
              "{{I_abs = ((1 - α) S) / 4 = (0.75 * 800) / 4 = 150}} W m⁻².",
          },
        },
        {
          title: "Emissivity & Terrestrial Peak Wavelength",
          problem:
            "A patch of Earth's surface at {{T = 290}} K radiates thermal infrared power at intensity {{321}} W m⁻². Calculate (a) the peak emission wavelength {{λ_max}} and (b) the surface emissivity {{e}}.",
          steps: [
            "(a) Apply Wien's displacement law: {{λ_max = (2.90 * 10^(-3)) / 290 = 1.00 * 10^(-5)}} m = **10.0 μm** (long-wave infrared).",
            "(b) Ideal blackbody intensity at 290 K is {{σ T^4 = (5.67 * 10^(-8)) * 290^4 = 401.0}} W m⁻².",
            "Emissivity {{e = I / (σ T^4) = 321 / 401.0 = 0.80}}.",
          ],
          answer: "λ_max = 10.0 μm; e = 0.80",
          yourTurn: {
            question:
              "A dark roof at temperature 300 K has emissivity {{e = 0.80}}. Taking {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴, calculate the thermal power radiated per square metre to the nearest whole number (in W m⁻²).",
            answer: { type: "number", value: 367, tolerance: 1, display: "367 W m⁻²" },
            solution:
              "{{I = e σ T^4 = 0.80 * (5.67 * 10^(-8)) * 300^4 = 0.80 * 459.27 = 367.4}} W m⁻² ≈ **367 W m⁻²**.",
          },
        },
      ],
      keyPoints: [
        "The geometric factor of **1/4** in {{I_avg = ((1 - α) S) / 4}} arises from dividing Earth's intercepted cross-sectional disc ({{pi R^2}}) by its full spherical radiating surface ({{4 pi R^2}}).",
        "Albedo {{α}} describes **reflection** of incoming radiation; emissivity {{e}} describes **emission** of thermal radiation relative to an ideal black body.",
        "Greenhouse gases (H₂O, CO₂, CH₄, N₂O) are transparent to incoming short-wave visible sunlight but absorb outgoing long-wave infrared radiation by **molecular vibrational resonance** and re-emit it **in all directions** (including back toward the surface).",
        "Distinguish the **natural greenhouse effect** (essential for life, raising Earth from 255 K to 288 K) from the **enhanced greenhouse effect** (additional anthropogenic radiative forcing).",
        "Reducing albedo (e.g. melting Arctic sea ice) causes **positive ice-albedo feedback**, accelerating warming.",
      ],
      whyItWorks:
        "Why does back-radiation raise surface temperature even though the atmosphere is colder than the surface? The Second Law only forbids net heat flow from cold to hot — individual photons travel both ways! By returning 152 W m⁻² of IR downward, the atmosphere reduces the surface's *net* cooling rate until the surface warms enough for its upward emission (390 W m⁻²) to balance both incoming sunlight (238 W m⁻²) and downward atmospheric IR (152 W m⁻²).",
      strategies: [
        "**IB Paper 2 greenhouse explanations (3–4 marks):** Always include four exact phrases: (1) short-wave solar radiation passes through atmosphere and warms surface; (2) surface emits long-wave infrared radiation; (3) greenhouse gases absorb IR via molecular resonance; (4) they re-emit IR in all directions, including back to the surface.",
        "**Watch {{(1 - α)}} vs {{α}}:** Albedo {{α}} is the *reflected* fraction, so the *absorbed* fraction is always {{1 - α}}.",
        "**Solar constant at another planet:** If distance from the Sun doubles, {{S}} falls to {{S/4}} (inverse-square law), so equilibrium {{T ∝ S^(1/4) ∝ d^(-1/2)}} falls by {{1/sqrt(2)}}.",
      ],
      thinkDeeper:
        "Venus orbits closer to the Sun than Earth, yet its thick bright clouds give Venus an albedo of {{α ≈ 0.77}} — meaning Venus actually absorbs *less* solar intensity per square metre than Earth! Why is Venus's surface temperature an astonishing 735 K (+462 °C)? Because its 96% CO₂ atmosphere creates a runaway greenhouse effect with optical thickness dozens of times greater than Earth's.",
    },

    // =========================================================================
    // SECTION 3 — B.3 (SL)
    // =========================================================================
    {
      id: "gas-laws-kmt",
      heading: "B.3 Ideal Gas Laws & Kinetic Theory of Gases",
      level: "SL",
      discovery: {
        problem:
          "You inflate a bicycle tyre to 400 kPa on a cool morning (280 K) and leave the bike in bright sunlight until the air inside reaches 315 K (volume constant). Meanwhile, a weather balloon filled with helium expands to 8 times its launch volume as it rises into the cold, thin upper atmosphere. **Before reading on:** (1) Why does the tyre pressure rise microscopically when the air warms? (2) If a container holds an equal-temperature mixture of light helium atoms and heavy nitrogen molecules, which molecules move faster — and which have greater average kinetic energy?",
        idea:
          "Warming raises the average speed of gas molecules, so they hit the tyre walls **more frequently** AND with a **larger change in momentum** per collision — increasing force per unit area ({{P = F/A}}). In an equal-temperature mixture, both helium and nitrogen share the **exact same average translational kinetic energy** {{(3/2) k_B T}}, which forces the lighter helium atoms to travel much faster ({{v_rms ∝ 1/sqrt(m)}}).",
      },
      body:
        "### Macroscopic Gas Variables & Equation of State\n" +
        "The macroscopic state of a gas is specified by its pressure {{P = F/A}} (Pa = N m⁻²), volume {{V}} (m³), absolute temperature {{T}} (K), and amount of substance {{n = N / N_A}} (mol), where {{N}} is the number of molecules and {{N_A = 6.02 * 10^23}} mol⁻¹ is the Avogadro constant.\n\n" +
        "An **ideal gas** obeys the equation of state at all pressures, volumes, and temperatures:\n" +
        "- {{P V = n R T = N k_B T}}\n" +
        "where {{R = 8.31}} J K⁻¹ mol⁻¹ is the universal gas constant and {{k_B = R / N_A = 1.38 * 10^(-23)}} J K⁻¹.\n\n" +
        "For a fixed amount of gas ({{n}} constant), this unifies the three empirical gas laws into the **combined gas law** {{(P_1 V_1) / T_1 = (P_2 V_2) / T_2}}:\n" +
        "- **Boyle's law** (constant {{T}}): {{P ∝ 1/V}} → {{P_1 V_1 = P_2 V_2}} (hyperbolic isotherm on a {{P}}–{{V}} graph).\n" +
        "- **Charles's law** (constant {{P}}): {{V ∝ T}} → {{V_1 / T_1 = V_2 / T_2}} (straight line through 0 K).\n" +
        "- **Gay-Lussac / Pressure law** (constant {{V}}): {{P ∝ T}} → {{P_1 / T_1 = P_2 / T_2}} (straight line through 0 K).\n\n" +
        "### Assumptions of the Kinetic Model of an Ideal Gas\n" +
        "To derive the gas laws from Newton's laws, the kinetic theory assumes:\n" +
        "1. A very large number of identical point particles move in **continual random motion**.\n" +
        "2. The total **volume of the molecules is negligible** compared with the volume of the container.\n" +
        "3. **No intermolecular forces** act between molecules except during the instant of collision (so intermolecular {{E_p = 0}}).\n" +
        "4. All collisions between molecules and with container walls are **perfectly elastic** (kinetic energy is conserved).\n" +
        "5. The **duration of each collision is negligible** compared with the time spent moving between collisions.\n\n" +
        "### Pressure, Average Kinetic Energy & Internal Energy\n" +
        "Applying Newton's second law ({{F = Δp / Δt}}) to molecules bouncing elastically off container walls gives the kinetic-theory pressure equation:\n" +
        "- {{P = (1/3) ρ v_rms^2}}, where {{ρ = N m / V}} is gas density and {{v_rms = sqrt(mean v^2)}} is the root-mean-square speed.\n" +
        "Combining {{P V = (1/3) N m v_rms^2}} with {{P V = N k_B T}} proves that absolute temperature directly measures average translational kinetic energy:\n" +
        "- {{E_k = (1/2) m v_rms^2 = (3/2) k_B T}} → {{v_rms = sqrt((3 k_B T) / m) = sqrt((3 R T) / M)}}.\n" +
        "- Because an ideal monatomic gas has **zero intermolecular potential energy**, its total **internal energy** {{U}} is purely translational kinetic energy:\n" +
        "{{U = N E_k = (3/2) N k_B T = (3/2) n R T = (3/2) P V}}.\n\n" +
        "### Real Gases vs Ideal Gases\n" +
        "Real gases approach ideal behaviour at **low pressure** (large spacing between molecules so molecular volume and intermolecular forces are negligible) and **high temperature** (high kinetic energy far above liquefaction). At very high pressure or low temperature, real gases deviate because finite molecular volume and attractive intermolecular forces become significant — and real gases can liquefy, whereas an ideal gas never does.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 270" role="img" aria-label="Dual diagram showing Boyle law pressure-volume hyperbolae at three Kelvin temperatures on the left, and Maxwell-Boltzmann molecular speed distributions at cold and hot temperatures on the right">' +
        '<rect x="4" y="4" width="328" height="262" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<rect x="344" y="4" width="332" height="262" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="168" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">p–V Isotherms (PV = nRT)</text>' +
        '<line x1="46" y1="226" x2="314" y2="226" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<line x1="46" y1="226" x2="46" y2="40" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<text x="180" y="248" text-anchor="middle" font-size="11" fill="var(--ink-2)">Volume V (m³)</text>' +
        '<text x="20" y="135" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 20 135)">Pressure P (Pa)</text>' +
        '<path d="M 62 110 Q 92 184 294 212" fill="none" stroke="#2563eb" stroke-width="2.3"/>' +
        '<path d="M 76 68 Q 118 164 294 196" fill="none" stroke="#0d9488" stroke-width="2.5"/>' +
        '<path d="M 104 46 Q 152 138 294 176" fill="none" stroke="#dc2626" stroke-width="2.6"/>' +
        '<text x="260" y="206" font-size="9.5" font-weight="700" fill="#2563eb">T₁ (low)</text>' +
        '<text x="260" y="188" font-size="9.5" font-weight="700" fill="#0d9488">T₂</text>' +
        '<text x="260" y="166" font-size="9.5" font-weight="700" fill="#dc2626">T₃ (high)</text>' +
        '<line x1="128" y1="166" x2="188" y2="108" stroke="var(--ink-2)" stroke-width="1.3" stroke-dasharray="3 2"/>' +
        '<text x="192" y="102" font-size="9.5" font-weight="700" fill="var(--ink)">Higher T ↗</text>' +
        '<text x="192" y="115" font-size="8.5" fill="var(--ink-2)">PV = const on curve</text>' +
        '<text x="510" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Molecular Speed Distribution</text>' +
        '<line x1="384" y1="226" x2="660" y2="226" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<line x1="384" y1="226" x2="384" y2="40" stroke="var(--ink)" stroke-width="1.5"/>' +
        '<text x="522" y="248" text-anchor="middle" font-size="11" fill="var(--ink-2)">Molecular speed v (m s⁻¹)</text>' +
        '<text x="360" y="135" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 360 135)">Number of molecules</text>' +
        '<path d="M 384 226 C 414 224, 434 64, 464 64 C 494 64, 514 210, 568 224 L 646 226" fill="#2563eb" fill-opacity="0.14" stroke="#2563eb" stroke-width="2.5"/>' +
        '<path d="M 384 226 C 424 224, 474 134, 524 134 C 574 134, 608 202, 656 223" fill="#dc2626" fill-opacity="0.14" stroke="#dc2626" stroke-width="2.5"/>' +
        '<line x1="472" y1="68" x2="472" y2="226" stroke="#2563eb" stroke-dasharray="3 3" stroke-width="1.2"/>' +
        '<line x1="538" y1="138" x2="538" y2="226" stroke="#dc2626" stroke-dasharray="3 3" stroke-width="1.2"/>' +
        '<text x="480" y="78" font-size="9.5" font-weight="700" fill="#2563eb">Cold T₁ (narrow, tall)</text>' +
        '<text x="546" y="128" font-size="9.5" font-weight="700" fill="#dc2626">Hot T₂ (broad, lower)</text>' +
        '<text x="472" y="238" text-anchor="middle" font-size="8.5" fill="#2563eb">v_rms(T₁)</text>' +
        '<text x="538" y="238" text-anchor="middle" font-size="8.5" fill="#dc2626">v_rms(T₂)</text>' +
        '<text x="520" y="210" text-anchor="middle" font-size="9" fill="var(--ink-2)">Same area = total N</text>' +
        '</svg>',
      diagramCaption:
        "Left: At constant temperature, P ∝ 1/V produces hyperbolic isotherms; higher Kelvin temperatures sit further from the origin. Right: Raising temperature broadens and flattens the molecular speed distribution while shifting v_rms higher, keeping the total area (total molecules N) unchanged.",
      workedExamples: [
        {
          title: "Ideal Gas Equation & Combined Gas Law",
          problem:
            "A rigid-to-adjustable cylinder of initial volume {{0.020}} m³ holds {{4.0}} mol of helium gas at {{27}} °C. (a) Calculate its initial pressure ({{R = 8.31}} J K⁻¹ mol⁻¹). (b) The piston compresses the gas to {{0.012}} m³ while heating it to {{87}} °C. Find the new pressure.",
          steps: [
            "(a) Convert temperature to kelvin: {{T_1 = 27 + 273 = 300}} K.",
            "Apply {{P_1 V_1 = n R T_1}}: {{P_1 = (4.0 * 8.31 * 300) / 0.020 = 4.986 * 10^5}} Pa ≈ **5.0 × 10⁵ Pa**.",
            "(b) Convert final temperature: {{T_2 = 87 + 273 = 360}} K.",
            "Use the combined gas law {{P_2 = P_1 (V_1 / V_2) (T_2 / T_1) = 4.986 * 10^5 * (0.020 / 0.012) * (360 / 300) = 4.986 * 10^5 * 2 = 9.97 * 10^5}} Pa ≈ **1.0 × 10⁶ Pa**.",
          ],
          answer: "(a) 5.0 × 10⁵ Pa; (b) 1.0 × 10⁶ Pa",
          yourTurn: {
            question:
              "A fixed mass of ideal gas occupies {{3.0}} m³ at pressure {{120}} kPa and temperature {{300}} K. It is heated to {{450}} K while compressed to {{2.0}} m³. Calculate the new pressure in kPa.",
            answer: { type: "number", value: 270, display: "270 kPa" },
            solution:
              "{{P_2 = P_1 (V_1 / V_2) (T_2 / T_1) = 120 * (3.0 / 2.0) * (450 / 300) = 120 * 1.5 * 1.5 = 270}} kPa.",
          },
        },
        {
          title: "Microscopic Kinetic Energy & Total Internal Energy",
          problem:
            "A sealed flask contains {{2.0}} mol of monatomic neon gas at {{400}} K. Calculate (a) the average translational kinetic energy of one neon atom, and (b) the total internal energy {{U}} of the gas.",
          steps: [
            "(a) Use {{E_k = (3/2) k_B T = 1.5 * (1.38 * 10^(-23)) * 400 = 8.28 * 10^(-21)}} J.",
            "(b) For a monatomic ideal gas, intermolecular potential energy is zero, so {{U = (3/2) n R T = 1.5 * 2.0 * 8.31 * 400 = 9972}} J ≈ **10.0 kJ**.",
            "Cross-check via {{N E_k}}: {{N = 2.0 * 6.02 * 10^23 = 1.204 * 10^24}} atoms; {{1.204 * 10^24 * 8.28 * 10^(-21) = 9969}} J (agrees to 3 s.f.!).",
          ],
          answer: "(a) 8.28 × 10⁻²¹ J; (b) 10.0 kJ",
          yourTurn: {
            question:
              "Calculate the total internal energy (in joules, exact to the nearest joule using {{R = 8.31}} J K⁻¹ mol⁻¹) of {{10.0}} mol of an ideal monatomic gas at {{200}} K.",
            answer: { type: "number", value: 24930, tolerance: 30, display: "24930 J" },
            solution:
              "{{U = (3/2) n R T = 1.5 * 10.0 * 8.31 * 200 = 24930}} J.",
          },
        },
      ],
      keyPoints: [
        "{{P V = n R T = N k_B T}} requires {{P}} in Pa, {{V}} in m³, and {{T}} in **Kelvin** (never °C!).",
        "In kinetic theory, gas pressure increases at higher {{T}} (fixed {{V}}) for TWO reasons: molecules strike walls **more frequently** AND undergo a **greater momentum change** per collision.",
        "In kinetic theory, gas pressure increases at smaller {{V}} (fixed {{T}}) for ONE reason only: molecules travel shorter distances between walls, so collision **frequency increases** (average speed and momentum per hit stay constant!).",
        "All ideal gases at the same temperature {{T}} have the **same average translational kinetic energy** {{(3/2) k_B T}}, regardless of molar mass; lighter gases simply have higher {{v_rms}}.",
        "Real gases behave most like ideal gases at **low pressure** and **high temperature**.",
      ],
      whyItWorks:
        "Why is the factor {{1/3}} in {{P = (1/3) ρ v_rms^2}}? Motion is completely random in 3 perpendicular dimensions ({{x, y, z}}), so by symmetry {{mean(v_x^2) = mean(v_y^2) = mean(v_z^2) = (1/3) v_rms^2}}. Only the {{x}}-component of velocity drives collisions against a wall perpendicular to the {{x}}-axis!",
      strategies: [
        "**Consistent ratio units:** In {{(P_1 V_1)/T_1 = (P_2 V_2)/T_2}}, {{P}} can be in kPa or atm and {{V}} in cm³ or litres (as long as both sides match) — **ONLY {{T}} MUST ALWAYS BE IN KELVIN**.",
        "**Linking pressure to internal energy:** Remember {{U = (3/2) n R T = (3/2) P V}} for a monatomic ideal gas! If a question gives {{P}} and {{V}} without {{n}} or {{T}}, you can still find {{U}} directly.",
        "**Microscopic explanation checklist:** Whenever an IB question asks you to *explain using the kinetic model* why pressure changes, explicitly mention (a) average molecular speed / momentum change per collision, AND (b) rate (frequency) of collisions with the walls.",
      ],
      thinkDeeper:
        "Why does Earth's atmosphere retain nitrogen (N₂, molar mass 28 g mol⁻¹) and oxygen (O₂, 32 g mol⁻¹) for billions of years, yet lose hydrogen (H₂, 2 g mol⁻¹) and helium (He, 4 g mol⁻¹) to space? Because at the same upper-atmosphere temperature, H₂ and He have far higher {{v_rms}}, so the high-speed tail of their Maxwell–Boltzmann distribution exceeds Earth's escape velocity (11.2 km s⁻¹)!",
    },

    // =========================================================================
    // SECTION 4 — B.4 (HL)
    // =========================================================================
    {
      id: "thermodynamics-hl",
      heading: "B.4 Laws of Thermodynamics, p–V Cycles, Carnot & Entropy",
      level: "HL",
      discovery: {
        problem:
          "A coal power plant heats steam to 800 K and cools its condenser with river water at 300 K. Meanwhile, a cyclist pumps air rapidly into a tyre and notices the brass valve feels hot, even though no flame touched it. **Before reading on:** (1) How can a gas get hotter when {{Q = 0}} (zero heat enters from outside)? (2) Why does the Second Law forbid ANY heat engine between 800 K and 300 K from exceeding 62.5% efficiency?",
        idea:
          "By the **First Law of Thermodynamics** ({{Q = ΔU + W}}), pushing the pump compresses the gas so fast that no heat escapes ({{Q = 0}}, **adiabatic compression**). Work done ON the gas ({{W < 0}}) goes directly into internal energy ({{ΔU = -W > 0}}), raising temperature! For the power plant, dumping zero waste heat would decrease total entropy — violating the **Second Law**; the Carnot limit {{η = 1 - T_C/T_H = 1 - 300/800 = 0.625}} is the exact threshold where total entropy change reaches zero.",
      },
      body:
        "### The First Law of Thermodynamics\n" +
        "The **First Law** is conservation of energy applied to a thermal system (IB sign convention):\n" +
        "- {{Q = ΔU + W}}\n" +
        "where:\n" +
        "- {{Q}} > 0 means thermal energy is supplied **to** the gas ({{Q < 0}}: heat leaves the gas).\n" +
        "- {{ΔU = (3/2) n R ΔT}} (for an ideal monatomic gas) is a **state function** depending ONLY on initial and final temperatures — independent of the path on a {{P}}–{{V}} diagram.\n" +
        "- {{W}} > 0 means work is done **by** the gas during expansion ({{W < 0}}: work done **on** the gas during compression). Graphically, {{W}} equals the **signed area under the {{P}}–{{V}} curve**; at constant pressure, {{W = P ΔV}}.\n\n" +
        "### The Four Fundamental Thermodynamic Processes (Monatomic Ideal Gas)\n" +
        "| Process | Constant | Key Relation | Work {{W}} | {{ΔU}} | First Law {{Q = ΔU + W}} |\n" +
        "|---|---|---|---|---|---|\n" +
        "| **Isobaric** | Pressure {{P}} | {{V / T = \"const\"}} | {{P ΔV}} | {{(3/2) P ΔV}} | {{Q = (5/2) P ΔV}} |\n" +
        "| **Isovolumetric (Isochoric)** | Volume {{V}} | {{P / T = \"const\"}} | {{0}} | {{(3/2) V ΔP}} | {{Q = ΔU}} |\n" +
        "| **Isothermal** | Temperature {{T}} | {{P V = \"const\"}} | Area under hyperbola | {{0}} | {{Q = W}} |\n" +
        "| **Adiabatic** | No heat flow ({{Q = 0}}) | {{P V^(5/3) = \"const\"}} | {{-ΔU}} | {{-W}} | {{0 = ΔU + W}} |\n\n" +
        "Notice that an **adiabatic curve** ({{P ∝ V^(-5/3)}}) is always **steeper** than an isotherm ({{P ∝ V^(-1)}}) passing through the same point, because adiabatic expansion drops both {{V}} *and* {{T}}, causing {{P}} to fall faster.\n\n" +
        "### Cyclic Processes, Heat Engines & Carnot Efficiency\n" +
        "In any **closed cycle** returning to its starting point on a {{P}}–{{V}} diagram, {{ΔT = 0}} so {{ΔU_cycle = 0}}. By the First Law, net work equals net heat absorbed:\n" +
        "- {{W_net = Q_net = Q_H - Q_C}} = **enclosed area** of the loop (clockwise loop: heat engine, {{W_net > 0}}; anticlockwise loop: refrigerator/heat pump, {{W_net < 0}}).\n" +
        "- **Thermal efficiency:** {{η = W_net / Q_H = 1 - Q_C / Q_H}}.\n" +
        "- The **Carnot cycle** consists of two reversible isothermal processes (at {{T_H}} and {{T_C}}) linked by two reversible adiabatic processes. No real engine working between Kelvin reservoirs {{T_H}} and {{T_C}} can exceed the **Carnot efficiency**:\n" +
        "{{η_Carnot = 1 - T_C / T_H}}.\n\n" +
        "### Entropy & The Second Law of Thermodynamics\n" +
        "**Entropy** {{S}} (units: J K⁻¹) quantifies energy dispersal and microscopic disorder:\n" +
        "- **Macroscopic (Clausius):** For reversible isothermal heat transfer {{ΔQ}} at Kelvin temperature {{T}}, {{ΔS = ΔQ / T}}.\n" +
        "- **Microscopic (Boltzmann):** {{S = k_B ln Ω}}, where {{Ω}} is the number of distinct microscopic arrangements (microstates) corresponding to a given macrostate.\n" +
        "- **Second Law of Thermodynamics** (three equivalent forms):\n" +
        "  1. **Entropy form:** The total entropy of an isolated system (or the universe) can never decrease: {{ΔS_total >= 0}} (equals 0 only for ideal reversible processes; strictly > 0 for all real irreversible processes).\n" +
        "  2. **Kelvin–Planck form:** It is impossible to construct a cyclic heat engine whose sole effect is to absorb heat from a single thermal reservoir and convert it completely into mechanical work (some heat {{Q_C}} must always be rejected).\n" +
        "  3. **Clausius form:** Thermal energy never flows spontaneously from a colder body to a hotter body without external work.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" role="img" aria-label="Carnot thermodynamic cycle on a pressure-volume diagram with clockwise arrows showing isothermal expansion at T_H, adiabatic expansion, isothermal compression at T_C, and adiabatic compression enclosing shaded net work W_net, alongside a heat engine reservoir flow diagram">' +
        '<rect x="6" y="6" width="446" height="268" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<rect x="462" y="6" width="212" height="268" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2"/>' +
        '<text x="229" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Carnot Cycle on a p–V Diagram (HL)</text>' +
        '<line x1="56" y1="234" x2="430" y2="234" stroke="var(--ink)" stroke-width="1.6"/>' +
        '<line x1="56" y1="234" x2="56" y2="40" stroke="var(--ink)" stroke-width="1.6"/>' +
        '<text x="242" y="258" text-anchor="middle" font-size="11" fill="var(--ink-2)">Volume V</text>' +
        '<text x="24" y="138" text-anchor="middle" font-size="11" fill="var(--ink-2)" transform="rotate(-90 24 138)">Pressure P</text>' +
        '<path d="M 118 68 Q 192 94 282 118 Q 332 162 376 196 Q 272 184 188 158 Q 148 118 118 68 Z" fill="#2563eb" fill-opacity="0.16"/>' +
        '<path d="M 118 68 Q 192 94 282 118" fill="none" stroke="#dc2626" stroke-width="3"/>' +
        '<path d="M 282 118 Q 332 162 376 196" fill="none" stroke="#7c3aed" stroke-width="3"/>' +
        '<path d="M 376 196 Q 272 184 188 158" fill="none" stroke="#2563eb" stroke-width="3"/>' +
        '<path d="M 188 158 Q 148 118 118 68" fill="none" stroke="#0d9488" stroke-width="3"/>' +
        '<circle cx="118" cy="68" r="4" fill="#dc2626"/>' +
        '<circle cx="282" cy="118" r="4" fill="#7c3aed"/>' +
        '<circle cx="376" cy="196" r="4" fill="#2563eb"/>' +
        '<circle cx="188" cy="158" r="4" fill="#0d9488"/>' +
        '<text x="108" y="62" font-size="11" font-weight="700" fill="var(--ink)">A</text>' +
        '<text x="288" y="112" font-size="11" font-weight="700" fill="var(--ink)">B</text>' +
        '<text x="383" y="200" font-size="11" font-weight="700" fill="var(--ink)">C</text>' +
        '<text x="172" y="168" font-size="11" font-weight="700" fill="var(--ink)">D</text>' +
        '<text x="208" y="79" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">1. Isothermal exp. (TH)</text>' +
        '<text x="208" y="92" text-anchor="middle" font-size="9" fill="#dc2626">QH absorbed →</text>' +
        '<text x="366" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#7c3aed">2. Adiabatic</text>' +
        '<text x="366" y="152" text-anchor="middle" font-size="9" fill="#7c3aed">(Q = 0) ↘</text>' +
        '<text x="282" y="212" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb">← 3. Isothermal comp. (TC, QC out)</text>' +
        '<text x="108" y="122" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0d9488">4. Adiabatic</text>' +
        '<text x="108" y="134" text-anchor="middle" font-size="9" fill="#0d9488">↖ (Q = 0)</text>' +
        '<text x="242" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Shaded area</text>' +
        '<text x="242" y="159" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2563eb">Wnet = QH − QC</text>' +
        '<text x="568" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Heat Engine Flow</text>' +
        '<rect x="492" y="42" width="152" height="36" rx="8" fill="#dc2626" opacity="0.18" stroke="#dc2626" stroke-width="1.5"/>' +
        '<text x="568" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">Hot Reservoir (TH)</text>' +
        '<circle cx="542" cy="140" r="24" fill="#2563eb" opacity="0.16" stroke="#2563eb" stroke-width="1.8"/>' +
        '<text x="542" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Engine</text>' +
        '<rect x="492" y="202" width="152" height="36" rx="8" fill="#2563eb" opacity="0.18" stroke="#2563eb" stroke-width="1.5"/>' +
        '<text x="568" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Cold Reservoir (TC)</text>' +
        '<line x1="542" y1="78" x2="542" y2="112" stroke="#dc2626" stroke-width="3"/>' +
        '<text x="518" y="100" text-anchor="end" font-size="10.5" font-weight="700" fill="#dc2626">QH</text>' +
        '<line x1="566" y1="140" x2="624" y2="140" stroke="#15803d" stroke-width="3"/>' +
        '<text x="628" y="144" font-size="10.5" font-weight="700" fill="#15803d">Wnet</text>' +
        '<line x1="542" y1="164" x2="542" y2="198" stroke="#2563eb" stroke-width="3"/>' +
        '<text x="518" y="186" text-anchor="end" font-size="10.5" font-weight="700" fill="#2563eb">QC</text>' +
        '<text x="568" y="259" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">ηCarnot = 1 − TC / TH</text>' +
        '</svg>',
      diagramCaption:
        "Left: The Carnot cycle encloses maximum net work W_net = Q_H − Q_C per unit Q_H between T_H and T_C. Notice the steeper slopes of the two adiabatic legs (B→C and D→A) compared with the isotherms (A→B and C→D). Right: Energy conservation requires Q_H = W_net + Q_C.",
      workedExamples: [
        {
          title: "First Law Applied to an Isobaric Expansion",
          problem:
            "An ideal monatomic gas at constant pressure {{P = 2.0 * 10^5}} Pa expands isobarically from volume {{0.025}} m³ to {{0.045}} m³. Determine (a) the work done by the gas {{W}}, (b) the change in internal energy {{ΔU}}, and (c) the thermal energy supplied {{Q}}.",
          steps: [
            "(a) At constant pressure, {{W = P ΔV = (2.0 * 10^5) * (0.045 - 0.025) = (2.0 * 10^5) * 0.020 = +4000}} J.",
            "(b) For a monatomic ideal gas, {{U = (3/2) n R T = (3/2) P V}}. Since {{P}} is constant, {{ΔU = (3/2) P ΔV = 1.5 * 4000 = +6000}} J.",
            "(c) Apply the First Law {{Q = ΔU + W = 6000 + 4000 = +10000}} J (10 kJ). Notice 60% of the supplied heat raises internal energy and 40% performs mechanical work!",
          ],
          answer: "W = +4000 J; ΔU = +6000 J; Q = +10 000 J",
          yourTurn: {
            question:
              "An ideal monatomic gas expands isobarically at constant pressure {{1.5 * 10^5}} Pa from {{0.020}} m³ to {{0.050}} m³. Calculate the total thermal energy {{Q}} supplied to the gas in joules.",
            answer: { type: "number", value: 11250, display: "11250 J" },
            solution:
              "{{W = P ΔV = (1.5 * 10^5) * 0.030 = 4500}} J; {{ΔU = (3/2) P ΔV = 6750}} J; {{Q = ΔU + W = 11250}} J.",
          },
        },
        {
          title: "Carnot Engine Efficiency & Entropy Change of the Universe",
          problem:
            "A Carnot engine operates between a hot reservoir at {{600}} K and a cold reservoir at {{300}} K, absorbing {{1200}} J per cycle from the hot reservoir. (a) Find its efficiency, net work output, and rejected heat {{Q_C}}. (b) Compare the total entropy change {{ΔS_total}} of the reservoirs during one Carnot cycle with direct thermal conduction of 1200 J from 600 K to 300 K.",
          steps: [
            "(a) Carnot efficiency: {{η = 1 - T_C / T_H = 1 - 300/600 = 0.50}} (50%).",
            "Net work output: {{W_net = η Q_H = 0.50 * 1200 = 600}} J; rejected heat: {{Q_C = Q_H - W_net = 600}} J.",
            "(b) For the reversible Carnot cycle: {{ΔS_total = -Q_H / T_H + Q_C / T_C = -1200/600 + 600/300 = -2.0 + 2.0 = 0}} J K⁻¹.",
            "For direct irreversible conduction of 1200 J from 600 K to 300 K: {{ΔS_total = -1200/600 + 1200/300 = -2.0 + 4.0 = +2.0}} J K⁻¹ > 0!",
          ],
          answer: "(a) η = 50%, W_net = 600 J, Q_C = 600 J; (b) 0 J K⁻¹ (Carnot) vs +2.0 J K⁻¹ (conduction)",
          yourTurn: {
            question:
              "A Carnot engine operates between a hot reservoir at {{500}} K and a cold reservoir at {{200}} K. Calculate its efficiency as a percentage.",
            answer: { type: "number", value: 60, display: "60%" },
            solution:
              "{{η = (1 - 200 / 500) * 100% = (1 - 0.40) * 100% = 60%}}.",
          },
        },
      ],
      keyPoints: [
        "Always check signs in the IB First Law {{Q = ΔU + W}}: expansion → {{W > 0}}; compression → {{W < 0}}; heating → {{Q > 0}}; temperature rise → {{ΔU > 0}}.",
        "On a {{P}}–{{V}} graph, work {{W}} is the area under the curve; for a closed cycle, {{ΔU_cycle = 0}} and {{W_net}} is the **enclosed loop area**.",
        "For an ideal monatomic gas undergoing an **adiabatic** change ({{Q = 0}}), {{P V^(5/3) = \"const\"}} and {{ΔU = -W}}; an adiabat is always steeper than an isotherm.",
        "Carnot efficiency {{η_Carnot = 1 - T_C / T_H}} uses **Kelvin** temperatures only and represents the unbreakable theoretical upper limit for any heat engine.",
        "Local entropy can decrease (e.g. water freezing in a refrigerator), provided the surrounding entropy increases by at least as much so that {{ΔS_universe >= 0}}.",
      ],
      whyItWorks:
        "Why does {{η_Carnot = 1 - T_C / T_H}} emerge directly from the Second Law? For a cyclic engine returning to its starting state, the gas itself has {{ΔS_gas = 0}}. The universe's entropy change is therefore {{ΔS_universe = -Q_H / T_H + Q_C / T_C >= 0}}, which rearranges immediately to {{Q_C / Q_H >= T_C / T_H}} and hence {{η = 1 - Q_C / Q_H <= 1 - T_C / T_H}}!",
      strategies: [
        "**Sign table method:** For any multi-step {{P}}–{{V}} cycle question, draw a quick 4-column table ({{ΔU}}, {{W}}, {{Q}}, Note) for every leg (A→B, B→C, C→A) and verify that the {{ΔU}} column sums to **zero**!",
        "**Adiabatic shortcuts:** Remember both {{P_1 V_1^(5/3) = P_2 V_2^(5/3)}} and (substituting {{P = nRT/V}}) {{T_1 V_1^(2/3) = T_2 V_2^(2/3)}}.",
        "**Improving Carnot efficiency:** Lowering {{T_C}} by {{ΔT}} boosts {{η_Carnot = 1 - T_C/T_H}} MORE than raising {{T_H}} by the same {{ΔT}} — prove it by plugging in numbers!",
      ],
      thinkDeeper:
        "Why doesn't a refrigerator violate the Second Law by pumping heat from a cold 4 °C interior into a warm 25 °C kitchen? Because it is NOT spontaneous: the compressor does electrical work {{W_in}}, rejecting {{Q_H = Q_C + W_in}} into the room so that {{Q_H / T_H > Q_C / T_C}} and {{ΔS_universe > 0}}!",
    },
  ],

  // ===========================================================================
  // LEARN SMART
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "Define **internal energy** {{U}} of a substance.",
        back: "The sum of the total random **kinetic energy** and total intermolecular **potential energy** of all particles in the substance.",
        level: "SL",
      },
      {
        front: "Why does temperature remain constant while ice melts even though heat is continuously supplied?",
        back: "Supplied thermal energy breaks intermolecular bonds (increasing molecular **potential energy**), while average random molecular **kinetic energy** — and therefore temperature — stays constant.",
        level: "SL",
      },
      {
        front: "State **Stefan–Boltzmann's law** and **Wien's displacement law**.",
        back: "Stefan–Boltzmann: {{L = σ A T^4}} (or {{P = e σ A T^4}}). Wien's law: {{λ_max T = 2.90 * 10^(-3)}} m K, with {{T}} always in **Kelvin**.",
        level: "SL",
      },
      {
        front: "Why is specific latent heat of vaporisation {{L_v}} much larger than specific latent heat of fusion {{L_f}}?",
        back: "Vaporisation completely overcomes intermolecular forces to separate molecules far apart AND requires mechanical work to expand against atmospheric pressure; melting only loosens lattice bonds.",
        level: "SL",
      },
      {
        front: "Define **albedo** {{α}} and **emissivity** {{e}}.",
        back: "Albedo {{α = P_scattered / P_incident}} (fraction of incident radiation reflected). Emissivity {{e = I_emitted / (σ T^4)}} (ratio of power per unit area emitted to that of an ideal black body at the same {{T}}).",
        level: "SL",
      },
      {
        front: "Where does the factor of {{1/4}} come from in Earth's average incident solar intensity {{S/4}}?",
        back: "Earth intercepts parallel sunlight over a flat circular disc of area {{pi R^2}}, but distributes and radiates energy over its entire spherical surface area {{4 pi R^2}}; {{(pi R^2)/(4 pi R^2) = 1/4}}.",
        level: "SL",
      },
      {
        front: "Explain at the molecular level how greenhouse gases warm Earth's surface.",
        back: "Greenhouse gases (H₂O, CO₂, CH₄, N₂O) are transparent to short-wave solar light but absorb Earth's long-wave infrared radiation by **vibrational resonance**, then re-emit IR **in all directions**, returning energy back to the surface.",
        level: "SL",
      },
      {
        front: "Why do N₂ and O₂ NOT act as greenhouse gases?",
        back: "They are symmetric diatomic molecules whose bond vibrations produce **no change in electric dipole moment**, so they cannot resonantly absorb terrestrial infrared photons.",
        level: "SL",
      },
      {
        front: "State four key assumptions of the **kinetic model of an ideal gas**.",
        back: "1. Large number of identical point particles in random motion. 2. Molecular volume negligible vs container volume. 3. No intermolecular forces except during collisions. 4. Perfectly elastic collisions of negligible duration.",
        level: "SL",
      },
      {
        front: "Under what conditions does a **real gas** most closely approximate an ideal gas?",
        back: "At **low pressure** (molecules far apart, negligible volume & forces) and **high temperature** (kinetic energy far exceeds intermolecular potential energy).",
        level: "SL",
      },
      {
        front: "What is the internal energy {{U}} of {{n}} moles of an ideal monatomic gas?",
        back: "{{U = (3/2) n R T = (3/2) N k_B T = (3/2) P V}} — purely translational kinetic energy, because intermolecular potential energy is zero.",
        level: "SL",
      },
      {
        front: "State the **First Law of Thermodynamics** and IB sign conventions.",
        back: "{{Q = ΔU + W}}: {{Q > 0}} heat supplied TO the gas; {{ΔU > 0}} internal energy (temperature) increases; {{W > 0}} work done BY the gas (expansion).",
        level: "HL",
      },
      {
        front: "Why is an **adiabatic** curve steeper than an **isotherm** on a {{P}}–{{V}} diagram?",
        back: "During adiabatic expansion ({{Q = 0}}), work done by the gas reduces its internal energy and temperature ({{ΔU = -W}}), so pressure drops faster ({{P V^(5/3) = \"const\"}}) than at constant {{T}} ({{P V = \"const\"}}).",
        level: "HL",
      },
      {
        front: "State the **Carnot efficiency** formula and what it represents.",
        back: "{{η_Carnot = 1 - T_C / T_H}} (with {{T_C, T_H}} in Kelvin). It is the absolute maximum theoretical efficiency of any cyclic heat engine operating between reservoirs at {{T_H}} and {{T_C}}.",
        level: "HL",
      },
      {
        front: "Give both the **macroscopic (Clausius)** and **microscopic (Boltzmann)** expressions for entropy.",
        back: "Macroscopic: {{ΔS = ΔQ / T}} (reversible isothermal heat transfer, J K⁻¹). Microscopic: {{S = k_B ln Ω}} ({{Ω}} = number of accessible microstates).",
        level: "HL",
      },
      {
        front: "State the **Second Law of Thermodynamics** in terms of entropy and heat engines.",
        back: "Total entropy of an isolated system never decreases ({{ΔS_universe >= 0}}). Equivalently (Kelvin–Planck), no cyclic heat engine can convert absorbed heat 100% into work without rejecting some waste heat.",
        level: "HL",
      },
    ],

    mustKnow: [
      "Always convert temperatures to **Kelvin** ({{T = t + 273.15}}) for Stefan–Boltzmann, Wien's law, ideal gas law, kinetic energy, Carnot efficiency, and entropy — ONLY temperature *differences* {{ΔT}} are identical in °C and K.",
      "Phase changes happen at constant temperature: {{Q = m L}} alters intermolecular potential energy while average kinetic energy stays constant.",
      "Conduction rate: {{ΔQ / Δt = k A (ΔT / Δx)}}; Stefan–Boltzmann: {{L = σ A T^4}}; Wien's law: {{λ_max T = 2.90 * 10^(-3)}} m K; apparent brightness: {{b = L / (4 pi d^2)}}.",
      "Planetary radiative equilibrium: {{e σ T^4 = ((1 - α) S) / 4}}. Albedo {{α}} is the *reflected* fraction, so {{1 - α}} is the *absorbed* fraction.",
      "Greenhouse warming works because the atmosphere transmits short-wave visible sunlight (~0.5 μm) but absorbs and isotropically re-emits long-wave terrestrial infrared (~10 μm).",
      "All ideal gases at the same Kelvin temperature have the exact same average translational kinetic energy {{E_k = (3/2) k_B T}}; lighter molecules simply travel faster ({{v_rms ∝ 1/sqrt(m)}}).",
      "For an ideal monatomic gas, internal energy {{U = (3/2) n R T = (3/2) P V}} depends solely on temperature (and moles).",
      "[HL] First Law {{Q = ΔU + W}}: work {{W}} is the area under a {{P}}–{{V}} curve; around any closed cycle {{ΔU = 0}} and {{W_net = Q_H - Q_C}} equals the enclosed area.",
      "[HL] Four processes: Isobaric ({{W = PΔV}}), Isovolumetric ({{W = 0, Q = ΔU}}), Isothermal ({{ΔU = 0, Q = W}}), Adiabatic ({{Q = 0, ΔU = -W, P V^(5/3) = \"const\"}}).",
      "[HL] Second Law: {{ΔS_total >= 0}}, limiting every heat engine between {{T_H}} and {{T_C}} to {{η <= 1 - T_C / T_H}}.",
    ],

    misconceptions: [
      {
        wrong: "Heat and temperature are the same thing, so an object at a higher temperature always has more internal energy.",
        right: "Temperature measures *average* random molecular kinetic energy, while internal energy sums kinetic AND potential energy over *all* particles. A lukewarm swimming pool has far more internal energy than a red-hot nail.",
        level: "SL",
      },
      {
        wrong: "Doubling the Celsius temperature (e.g. 20 °C → 40 °C) doubles the pressure of a fixed-volume gas or multiplies radiated power by 16.",
        right: "Proportionality holds ONLY on the **Kelvin** scale! Going from 20 °C (293 K) to 40 °C (313 K) increases {{T}} by only 6.8%, so pressure rises by 6.8% and {{T^4}} rises by 30%, not 16×.",
        level: "SL",
      },
      {
        wrong: "Greenhouse gases form a reflective mirror or physical glass roof that traps heat by stopping convection.",
        right: "Atmospheric greenhouse gases do NOT trap heat like a glass garden greenhouse (which stops convection). Instead, they **absorb** outgoing terrestrial IR photons via molecular vibrational resonance and **re-emit** them in all directions, including back down to Earth.",
        level: "SL",
      },
      {
        wrong: "The greenhouse effect is caused by the ozone hole letting extra sunlight in.",
        right: "Ozone depletion (UV absorption in the stratosphere) is a separate phenomenon from the greenhouse effect (IR absorption by H₂O, CO₂, CH₄, N₂O in the troposphere).",
        level: "SL",
      },
      {
        wrong: "When a gas is compressed isothermally, molecules speed up because they are squeezed closer together.",
        right: "Isothermal means **constant temperature**, so average molecular speed and kinetic energy stay strictly unchanged! Pressure rises purely because molecules travel shorter distances and hit the walls more frequently.",
        level: "SL",
      },
      {
        wrong: "If a gas undergoes an adiabatic compression ({{Q = 0}}), its temperature cannot change because no heat entered.",
        right: "With {{Q = 0}}, the First Law gives {{ΔU = -W}}. Compressing the gas means external work is done ON it ({{W < 0}}), so {{ΔU > 0}} and temperature **rises** sharply (as in a diesel engine or bicycle pump).",
        level: "HL",
      },
      {
        wrong: "A freezing puddle or a living organism violates the Second Law because its entropy decreases.",
        right: "The Second Law applies to the **total entropy of an isolated system (system + surroundings)**. Freezing water releases latent heat {{Q}} into colder surroundings, increasing surrounding entropy by MORE than the ice's entropy decreases, so {{ΔS_total > 0}}.",
        level: "HL",
      },
      {
        wrong: "In the IB First Law {{Q = ΔU + W}}, work done ON a gas is positive.",
        right: "In IB Physics, {{W}} is work done **BY** the gas ({{W = P ΔV}}). Expansion means {{W > 0}}; compression (work done ON the gas) means {{W < 0}}.",
        level: "HL",
      },
    ],

    examMistakes: [
      "Forgetting to convert °C to Kelvin in {{P V = n R T}}, {{L = σ A T^4}}, {{λ_max T = 2.90 * 10^(-3)}}, {{η_Carnot = 1 - T_C/T_H}}, or {{ΔS = ΔQ/T}}.",
      "Using albedo {{α}} instead of {{(1 - α)}} when computing absorbed solar radiation, or forgetting the geometric factor of {{1/4}}.",
      "In calorimetry mixtures with ice, forgetting the {{m_i c_w (T_f - 0)}} warming term for the melted ice water after including {{m_i L_f}}.",
      "Confusing *luminosity* {{L}} (total power emitted, W) with *apparent brightness* {{b = L/(4 pi d^2)}} (intensity received at distance {{d}}, W m⁻²).",
      "In kinetic-theory explanations of Boyle's law (constant {{T}}), wrongly writing 'molecules move faster' instead of 'molecules collide with walls more frequently at the same average speed'.",
      "Forgetting to convert cm³ to m³ ({{10^(-6)}}) or kPa to Pa ({{10^3}}) when calculating {{W = P ΔV}} in joules.",
      "[HL] Using the Carnot formula {{1 - T_C/T_H}} with temperatures in °C, or applying {{ΔU = (3/2) n R ΔT}} with {{Q}} when work {{W}} is non-zero.",
      "[HL] Calculating heat engine efficiency using {{Q_net}} in the denominator instead of total heat **input** {{Q_H}} (always {{η = W_net / Q_H}}, only summing legs where {{Q > 0}}!).",
    ],

    mnemonics: [
      {
        topic: "Kelvin Conversion & Universal Rule",
        device: "K-W-S-C-G: Kelvin Wins Every Single Gas & Radiation Formula",
        explanation:
          "**K**inetic energy, **W**ien's law, **S**tefan–Boltzmann, **C**arnot/entropy, and **G**as laws ALL demand Kelvin — never Celsius!",
        level: "SL",
      },
      {
        topic: "Major Greenhouse Gases",
        device: "Water Makes Carbon Nice (H₂O, CH₄, CO₂, N₂O)",
        explanation:
          "The four primary greenhouse gases in IB Physics: **W**ater vapour (H₂O), **M**ethane (CH₄), **C**arbon dioxide (CO₂), and **N**itrous oxide (N₂O) — all polyatomic molecules with IR-active dipole vibrations.",
        level: "SL",
      },
      {
        topic: "Four Thermodynamic Processes (HL)",
        device: "Iso-BAR (Pressure), Iso-CHOR (Volume), Iso-THERM (Temp), A-DIA-batic (No Heat)",
        explanation:
          "Barometer measures **P**; chorus fills a **V**olume; thermometer measures **T**; Greek *a-diabatos* means 'impassable' — zero heat ({{Q = 0}}) crosses the boundary.",
        level: "HL",
      },
      {
        topic: "First Law Sign Check (HL)",
        device: "Heat IN (+Q) = Energy UP (+ΔU) + Push OUT (+W)",
        explanation:
          "In {{Q = ΔU + W}}, energy supplied into the gas splits between warming the gas up ({{+ΔU}}) and pushing the piston outward ({{+W}}).",
        level: "HL",
      },
    ],

    realWorld: [
      {
        title: "Tropical Coastal Breezes & Singapore Humidity",
        emoji: "🌊",
        detail:
          "Water's exceptionally high specific heat capacity (4200 J kg⁻¹ K⁻¹) buffers coastal cities like Singapore against extreme day–night temperature swings, while high humidity slows sweat evaporation (latent heat {{L_v}} cooling).",
      },
      {
        title: "James Webb Space Telescope & Infrared Astronomy",
        emoji: "🔭",
        detail:
          "By Wien's law, cool exoplanets and dust clouds (~30–300 K) peak in the mid-to-far infrared (10–100 μm). JWST uses a five-layer sunshield to cool its mirrors to ~40 K so its own Stefan–Boltzmann radiation doesn't blind its IR detectors!",
      },
      {
        title: "Arctic Ice-Albedo Climate Feedback",
        emoji: "🧊",
        detail:
          "Bright Arctic sea ice reflects ~85% of incoming sunlight ({{α ≈ 0.85}}), whereas dark open ocean absorbs ~94% ({{α ≈ 0.06}}). As warming melts ice, Earth's albedo drops, accelerating Arctic amplification.",
      },
      {
        title: "Diesel Engines & Adiabatic Ignition (HL)",
        emoji: "⚙️",
        detail:
          "Diesel engines need no spark plugs: rapid adiabatic compression shrinks air volume by ~18:1, raising temperature above 800 K via {{T V^(2/3) = \"const\"}} so injected fuel self-ignites immediately.",
      },
      {
        title: "Combined-Cycle Gas Power Plants (HL)",
        emoji: "⚡",
        detail:
          "Modern power stations push turbine inlet temperatures above 1700 K while rejecting exhaust at ~300 K, lifting the Carnot ceiling to ~82% and achieving real-world thermal efficiencies above 60%.",
      },
      {
        title: "Thermal Imaging Cameras",
        emoji: "📷",
        detail:
          "Human skin at 310 K peaks at {{λ_max = 9.4}} μm (far infrared). Thermal cameras measure emitted IR intensity ({{e σ T^4}}) to detect fever, building insulation leaks, and overheating electrical circuits.",
      },
    ],

    videos: [
      {
        title: "IB Physics B.1 Thermal Energy Transfers & Blackbody Radiation",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=IB+Physics+B.1+Thermal+energy+transfers+Stefan+Boltzmann+Wien",
      },
      {
        title: "IB Physics B.2 Greenhouse Effect, Albedo & Radiative Balance",
        channel: "OSC / Sirius Revision IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+B.2+Greenhouse+effect+albedo+emissivity",
      },
      {
        title: "IB Physics B.3 Gas Laws & Kinetic Theory of Ideal Gases",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+B.3+ideal+gas+laws+kinetic+theory",
      },
      {
        title: "IB Physics B.4 Thermodynamics HL: p-V Diagrams, Carnot & Entropy",
        channel: "Physics Online / IB Physics HL",
        url: "https://www.youtube.com/results?search_query=IB+Physics+HL+B.4+thermodynamics+Carnot+cycle+entropy",
      },
    ],

    formulas: [
      {
        name: "Kelvin Temperature Conversion",
        formula: "{{T / \"K\" = t / \"°C\" + 273.15}}",
        note: "Mandatory for all gas, radiation, Carnot & entropy calculations",
        level: "SL",
      },
      {
        name: "Specific Heat Capacity",
        formula: "{{Q = m c ΔT}}",
        note: "Single phase; alters average random molecular kinetic energy",
        level: "SL",
      },
      {
        name: "Specific Latent Heat",
        formula: "{{Q = m L}}",
        note: "Phase change at constant T; alters intermolecular potential energy",
        level: "SL",
      },
      {
        name: "Thermal Conduction Rate",
        formula: "{{ΔQ / Δt = k A (ΔT / Δx)}}",
        note: "k = thermal conductivity (W m⁻¹ K⁻¹), Δx = thickness",
        level: "SL",
      },
      {
        name: "Stefan–Boltzmann Law",
        formula: "{{L = σ A T^4}} (or {{P = e σ A T^4}})",
        note: "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴; e = emissivity (1 for black body)",
        level: "SL",
      },
      {
        name: "Wien's Displacement Law",
        formula: "{{λ_max T = 2.90 * 10^(-3)}} m K",
        note: "Peak wavelength inversely proportional to Kelvin temperature",
        level: "SL",
      },
      {
        name: "Apparent Brightness (Inverse-Square Law)",
        formula: "{{b = L / (4 pi d^2)}}",
        note: "Intensity received at distance d from isotropic source of luminosity L",
        level: "SL",
      },
      {
        name: "Albedo & Radiative Equilibrium",
        formula: "{{α = P_scattered / P_incident}}; {{e σ T^4 = ((1 - α) S) / 4}}",
        note: "Solar constant S = 1360 W m⁻²; Earth α ≈ 0.30",
        level: "SL",
      },
      {
        name: "Ideal Gas Equation of State",
        formula: "{{P V = n R T = N k_B T}}",
        note: "R = 8.31 J K⁻¹ mol⁻¹, k_B = 1.38 × 10⁻²³ J K⁻¹, N_A = 6.02 × 10²³ mol⁻¹",
        level: "SL",
      },
      {
        name: "Average Molecular Kinetic Energy & Internal Energy",
        formula: "{{E_k = (3/2) k_B T}}; {{U = (3/2) n R T = (3/2) P V}}",
        note: "Monatomic ideal gas (zero intermolecular potential energy)",
        level: "SL",
      },
      {
        name: "Kinetic Theory Pressure",
        formula: "{{P = (1/3) ρ v_rms^2}}",
        note: "Links macroscopic pressure to density ρ and rms molecular speed",
        level: "SL",
      },
      {
        name: "First Law of Thermodynamics",
        formula: "{{Q = ΔU + W}} with {{W = P ΔV}} (isobaric)",
        note: "IB convention: Q supplied TO gas, W done BY gas",
        level: "HL",
      },
      {
        name: "Adiabatic Monatomic Process",
        formula: "{{P V^(5/3) = \"const\"}} ({{Q = 0}}, {{ΔU = -W}})",
        note: "Steeper than an isotherm on a p–V graph",
        level: "HL",
      },
      {
        name: "Heat Engine & Carnot Efficiency",
        formula: "{{η = W_net / Q_H = 1 - Q_C / Q_H}}; {{η_Carnot = 1 - T_C / T_H}}",
        note: "Carnot efficiency is the maximum possible efficiency between T_H and T_C (in K)",
        level: "HL",
      },
      {
        name: "Entropy & Second Law of Thermodynamics",
        formula: "{{ΔS = ΔQ / T}}; {{S = k_B ln Ω}}; {{ΔS_total >= 0}}",
        note: "Macroscopic (reversible isothermal) and Boltzmann statistical definitions",
        level: "HL",
      },
    ],
  },
};
