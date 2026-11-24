import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "b2-circuits",
  title: "B.5 Current, Resistance, EMF & Electrical Circuits",
  strand: "Theme B: Particulate Nature of Matter",
  icon: "🔌",
  level: "SL",
  summary:
    "Master electric current, potential difference, Ohm's law, non-ohmic I–V curves, resistivity, Kirchhoff's conservation laws, real cells with internal resistance, and sensor-driven potential dividers for IB Physics FA2025.",
  intro:
    "Why does a car's headlights dim for a split second when you turn the ignition key, and how does an automatic streetlight know the instant dusk falls? Both phenomena obey the same two bedrock principles of Theme B.5: **charge is conserved** at every junction, and **energy is conserved** around every closed loop. Once you see voltage as energy carried per coulomb of charge and internal resistance as an unavoidable toll inside every real battery, even complex resistor networks and sensor circuits unravel cleanly.",
  guide: [
    // =========================================================================
    // SECTION 1: CURRENT, DRIFT VELOCITY, POTENTIAL DIFFERENCE & RESISTANCE
    // =========================================================================
    {
      id: "current-pd-ohm",
      heading: "B.5 Current, Drift Velocity, Potential Difference & Resistance",
      level: "SL",
      discovery: {
        problem:
          "A copper wire of cross-sectional area {{1.0 * 10^(-6)}} m² carries a steady current of 1.6 A. Copper has roughly {{8.5 * 10^28}} free electrons per cubic metre. Estimate how fast an individual electron actually drifts down the wire — is it close to the speed of light, highway speed, or slower than a garden snail? And if electrons crawl that slowly, why does a ceiling lamp light up the instant you flick the wall switch?",
        idea:
          "Using {{I = n A v q}}, the drift speed is only {{v = 1.6 / (8.5 * 10^28 * 1.0 * 10^(-6) * 1.6 * 10^(-19)) ≈ 1.2 * 10^(-4)}} m s⁻¹ — barely **0.12 mm per second**, far slower than a snail! The lamp lights immediately because closing the switch establishes an **electric field** throughout the entire wire at close to the speed of light, nudging ALL free electrons already inside the filament to start drifting simultaneously, like pushing water through an already-full garden hose.",
      },
      body:
        "### Electric Current & Charge Flow\n" +
        "**Electric current** ({{I}}) is the rate of flow of electric charge past a point in a circuit:\n" +
        "{{I = Δq / Δt}}\n" +
        "The SI unit is the **ampere (A)**, where {{1 \" A\" = 1 \" C s\"^(-1)}}. By historical convention, **conventional current** points in the direction positive charge would move (from `+` to `−` around the external circuit), whereas free conduction electrons in a metal drift in the opposite direction (`−` to `+`).\n\n" +
        "At the microscopic level, if a conductor of cross-sectional area {{A}} contains {{n}} free charge carriers per unit volume, each carrying charge {{q}} (for electrons, {{e = 1.60 * 10^(-19)}} C) moving with mean **drift speed** {{v}}, then in time {{Δt}} the charge crossing a slice is {{Δq = n A (v Δt) q}}, giving the drift-velocity relation:\n" +
        "{{I = n A v q}}\n\n" +
        "### Potential Difference, Resistance & Ohm's Law\n" +
        "**Potential difference** ({{V}}) between two points is the work done per unit positive test charge moved between them — equivalently, the electrical energy transferred to other forms (thermal, light, mechanical) per coulomb passing through a component:\n" +
        "{{V = W / q}}\n" +
        "One **volt (V)** equals {{1 \" J C\"^(-1)}}.\n\n" +
        "**Electrical resistance** ({{R}}) of any component at a given operating point is defined purely as the ratio of potential difference across it to the current through it:\n" +
        "{{R = V / I}}\n" +
        "measured in **ohms (Ω)**, where {{1 \" Ω\" = 1 \" V A\"^(-1)}}.\n\n" +
        "**Ohm's law** is *not* just the equation {{V = IR}} — it is an empirical law stating that the current through a metallic conductor is **directly proportional** to the potential difference across it, **provided temperature and other physical conditions remain constant**. A component obeying this linear proportionality is **ohmic**; otherwise it is **non-ohmic**.\n\n" +
        "| Component | Shape of I–V graph | Physical explanation |\n" +
        "|---|---|---|\n" +
        "| Metallic resistor (constant T) | Straight line through the origin | Constant lattice vibration amplitude; resistance {{R = V/I}} stays constant |\n" +
        "| Filament lamp | S-shaped curve through origin; slope flattens at larger {{|V|}} | Higher current heats the tungsten filament; lattice ions vibrate with larger amplitude, causing more frequent electron collisions so {{R = V/I}} increases |\n" +
        "| Semiconductor diode | Virtually zero current for {{V < 0}} and below threshold (~0.7 V); steep rise above threshold | Very high resistance in reverse bias (blocks current); once forward threshold p.d. is exceeded, resistance drops dramatically |\n\n" +
        "### Resistivity & Geometry\n" +
        "For a uniform wire of length {{L}}, cross-sectional area {{A}}, and material **resistivity** {{ρ}} (unit: Ω m):\n" +
        "{{R = (ρ L) / A}}\n" +
        "Notice how wire diameter {{d}} enters: since {{A = π r^2 = (π d^2)/4}}, halving the diameter divides the area by 4 and **quadruples** the resistance! Resistivity {{ρ}} is an intrinsic property of the material (at a given temperature) and does not depend on wire shape.\n\n" +
        "### Electrical Power & Energy\n" +
        "Since each coulomb transfers energy {{V}} joules and {{I}} coulombs pass every second, the rate of energy transfer (**electrical power**, unit watt W) is:\n" +
        "{{P = I V = I^2 R = V^2 / R}}\n" +
        "Total electrical energy dissipated over time {{t}} is {{E = P t = V I t}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 230" role="img" aria-label="Comparison of I-V characteristic graphs for an ohmic conductor, a filament lamp, and a semiconductor diode">' +
        '<rect x="0" y="0" width="600" height="230" fill="#ffffff" rx="8"/>' +
        // Panel 1: Ohmic conductor
        '<rect x="12" y="14" width="182" height="202" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="8"/>' +
        '<text x="103" y="34" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">1. Ohmic Resistor</text>' +
        '<line x1="28" y1="122" x2="178" y2="122" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="103" y1="50" x2="103" y2="192" stroke="#475569" stroke-width="1.5"/>' +
        '<polygon points="178,118 185,122 178,126" fill="#475569"/>' +
        '<polygon points="99,50 103,43 107,50" fill="#475569"/>' +
        '<text x="176" y="114" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">V</text>' +
        '<text x="111" y="55" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">I</text>' +
        '<line x1="42" y1="183" x2="164" y2="61" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>' +
        '<text x="103" y="208" font-family="system-ui,sans-serif" font-size="10.5" fill="#2563eb" font-weight="600" text-anchor="middle">Constant R = V/I (const T)</text>' +
        // Panel 2: Filament lamp
        '<rect x="209" y="14" width="182" height="202" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="8"/>' +
        '<text x="300" y="34" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">2. Filament Lamp</text>' +
        '<line x1="225" y1="122" x2="375" y2="122" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="300" y1="50" x2="300" y2="192" stroke="#475569" stroke-width="1.5"/>' +
        '<polygon points="375,118 382,122 375,126" fill="#475569"/>' +
        '<polygon points="296,50 300,43 304,50" fill="#475569"/>' +
        '<text x="373" y="114" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">V</text>' +
        '<text x="308" y="55" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">I</text>' +
        '<path d="M 232 162 C 260 160, 286 146, 300 122 C 314 98, 340 84, 368 82" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="348" cy="87" r="3.5" fill="#dc2626"/>' +
        '<line x1="300" y1="122" x2="348" y2="87" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="4,3"/>' +
        '<text x="300" y="208" font-family="system-ui,sans-serif" font-size="10.5" fill="#b45309" font-weight="600" text-anchor="middle">R rises as T rises (chord = I/V)</text>' +
        // Panel 3: Semiconductor diode
        '<rect x="406" y="14" width="182" height="202" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="8"/>' +
        '<text x="497" y="34" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">3. Semiconductor Diode</text>' +
        '<line x1="422" y1="158" x2="572" y2="158" stroke="#475569" stroke-width="1.5"/>' +
        '<line x1="497" y1="50" x2="497" y2="192" stroke="#475569" stroke-width="1.5"/>' +
        '<polygon points="572,154 579,158 572,162" fill="#475569"/>' +
        '<polygon points="493,50 497,43 501,50" fill="#475569"/>' +
        '<text x="570" y="150" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">V</text>' +
        '<text x="505" y="55" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">I</text>' +
        '<path d="M 426 158 L 520 158 C 532 158, 539 145, 545 112 L 554 58" fill="none" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>' +
        '<line x1="524" y1="154" x2="524" y2="162" stroke="#dc2626" stroke-width="1.5"/>' +
        '<text x="525" y="175" font-family="system-ui,sans-serif" font-size="9.5" fill="#dc2626" font-weight="700" text-anchor="middle">~0.7 V</text>' +
        '<text x="458" y="148" font-family="system-ui,sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Reverse bias</text>' +
        '<text x="497" y="208" font-family="system-ui,sans-serif" font-size="10.5" fill="#15803d" font-weight="600" text-anchor="middle">One-way conduction above threshold</text>' +
        "</svg>",
      diagramCaption:
        "I–V characteristics of an ohmic metallic resistor, a tungsten filament lamp (dashed red chord from origin gives I/V = 1/R at that point), and a silicon diode.",
      workedExamples: [
        {
          title: "Wire Resistivity & Diameter Scaling",
          problem:
            "A nichrome heating wire of length 2.5 m and diameter 0.40 mm has resistivity {{1.10 * 10^(-6)}} Ω m. Calculate its resistance and the power dissipated when connected to a 12 V supply.",
          steps: [
            "Convert diameter to radius in metres: {{r = 0.20 * 10^(-3) = 2.0 * 10^(-4)}} m.",
            "Compute cross-sectional area: {{A = π r^2 = π * (2.0 * 10^(-4))^2 = 1.257 * 10^(-7)}} m².",
            "Apply {{R = (ρ L)/A}}: {{R = (1.10 * 10^(-6) * 2.5) / (1.257 * 10^(-7)) = 21.88 ≈ 21.9}} Ω.",
            "Find electrical power using {{P = V^2 / R}}: {{P = 12^2 / 21.88 = 144 / 21.88 = 6.58 ≈ 6.6}} W.",
          ],
          answer: "{{R = 22 \" Ω\"}}, {{P = 6.6 \" W\"}} (to 2 s.f.)",
          yourTurn: {
            question:
              "A second wire made of the SAME nichrome alloy has twice the length (5.0 m) and twice the diameter (0.80 mm). Given the original wire has resistance 22.0 Ω, calculate the resistance of the second wire in Ω.",
            answer: { type: "number", value: 11, tolerance: 0.05, display: "11 Ω" },
            solution:
              "Since {{R = ρ L / A}} and {{A ∝ d^2}}, doubling length multiplies {{R}} by 2 while doubling diameter multiplies {{A}} by 4 (dividing {{R}} by 4). Net factor: {{2 / 4 = 1/2}}, so {{R_2 = 22.0 / 2 = 11 \" Ω\"}}.",
          },
        },
        {
          title: "Resistance on a Non-Ohmic I–V Curve",
          problem:
            "A filament lamp carries 0.40 A at 2.0 V and 0.60 A at 6.0 V. Determine the resistance at each voltage and explain why using {{ΔV / ΔI}} would give the wrong resistance at 6.0 V.",
          steps: [
            "At 2.0 V: {{R_1 = V_1 / I_1 = 2.0 / 0.40 = 5.0}} Ω.",
            "At 6.0 V: {{R_2 = V_2 / I_2 = 6.0 / 0.60 = 10.0}} Ω.",
            "The chord ratio {{V/I}} doubled from 5.0 Ω to 10.0 Ω because heating increased lattice vibrations. By contrast, {{ΔV / ΔI = (6.0 - 2.0)/(0.60 - 0.40) = 20}} Ω is only the differential slope between points, NOT the resistance at 6.0 V.",
          ],
          answer: "5.0 Ω at 2.0 V and 10.0 Ω at 6.0 V (always use {{R = V/I}} at the point itself).",
        },
      ],
      keyPoints: [
        "Current is rate of charge flow {{I = Δq/Δt}}; potential difference is energy transferred per unit charge {{V = W/q}}.",
        "Resistance at ANY point on an I–V graph is ALWAYS the coordinate ratio {{R = V/I}}, never the inverse tangent gradient {{1/(dI/dV)}}.",
        "Ohm's law requires {{I ∝ V}} at constant temperature (straight line passing through the origin).",
        "Resistivity {{R = ρL/A}} means resistance scales with {{L}} and inversely with diameter squared ({{R ∝ L / d^2}}).",
        "Choose the power form that uses the constant quantity: {{P = I^2 R}} for series (same {{I}}), {{P = V^2 / R}} for parallel (same {{V}}).",
      ],
      whyItWorks:
        "In a metal, free electrons accelerate briefly in the electric field and repeatedly scatter off vibrating positive lattice ions, transferring kinetic energy into lattice thermal vibrations (Joule heating). As current rises, the lattice gets hotter and ions vibrate with greater amplitude, shrinking the electrons' mean free path between collisions — that is precisely why metallic resistance increases with temperature. In contrast, semiconductors like thermistors gain exponentially more free charge carriers when heated, which overwhelms the extra scattering so their resistance falls.",
      strategies: [
        "Before plugging into {{R = ρL/A}}, check whether you were given **diameter** or **radius**, and convert mm to m ({{1 \" mm\" = 10^(-3) \" m\"}}) BEFORE squaring!",
        "When comparing power dissipated by two resistors, ask first: 'Are they in series (same {{I}}, use {{P = I^2 R}}) or in parallel (same {{V}}, use {{P = V^2/R}})?'",
        "When an IB question asks 'Does this component obey Ohm's law?', check BOTH conditions: straight line AND passes through the origin (0, 0).",
      ],
      thinkDeeper:
        "If a tungsten wire is stretched uniformly to double its original length while keeping its volume constant, its resistance does not merely double — it increases by a factor of **4**! Why? Because constant volume {{V_0 = A L}} means doubling {{L}} halves {{A}}, so {{R' = ρ(2L)/(A/2) = 4R}}.",
    },

    // =========================================================================
    // SECTION 2: KIRCHHOFF'S LAWS, SERIES & PARALLEL NETWORKS
    // =========================================================================
    {
      id: "series-parallel-kirchhoff",
      heading: "B.5 Kirchhoff's Laws, Series & Parallel Networks",
      level: "SL",
      discovery: {
        problem:
          "You have a box of identical 12 Ω resistors. How can you connect **three** of them to obtain a total resistance of **8.0 Ω**, and why does adding an extra resistor in parallel ALWAYS make the total resistance *smaller* than the smallest individual branch resistor?",
        idea:
          "Put two 12 Ω resistors in series (giving 24 Ω) and connect that 24 Ω branch in parallel with the third 12 Ω resistor: {{1/R_p = 1/24 + 1/12 = 3/24}}, so {{R_p = 8.0}} Ω! Adding a parallel branch always lowers total resistance because it opens an **additional independent pathway** for charge to flow at the same potential difference, increasing total current {{I = V / R_p}}.",
      },
      body:
        "### Kirchhoff's Two Conservation Laws\n" +
        "Every electrical network — no matter how tangled — obeys Gustav Kirchhoff's two laws:\n\n" +
        "1. **Kirchhoff's First Law (Junction Rule):** The algebraic sum of currents entering any junction equals the sum leaving it ({{ΣI = 0}}). This is a direct statement of **conservation of electric charge** — charge cannot pile up or vanish at a wire junction.\n" +
        "2. **Kirchhoff's Second Law (Loop Rule):** Around any closed circuit loop, the sum of all electromotive forces equals the sum of all potential differences ({{Σ ε = Σ I R}}, or {{ΣV = 0}}). This is a direct statement of **conservation of energy** — a coulomb returning to its starting point must have the same electrical potential energy.\n\n" +
        "### Series vs Parallel Combinations\n" +
        "| Property | Series connection | Parallel connection |\n" +
        "|---|---|---|\n" +
        "| Current {{I}} | Same through every component ({{I_1 = I_2 = I}}) | Splits across branches ({{I = I_1 + I_2 + …}}); larger current takes the lower-resistance path |\n" +
        "| Potential difference {{V}} | Splits across components ({{V = V_1 + V_2 + …}}); larger p.d. across larger {{R}} | Same across every branch ({{V_1 = V_2 = V}}) |\n" +
        "| Equivalent resistance | {{R_s = R_1 + R_2 + …}} (larger than the largest resistor) | {{1/R_p = 1/R_1 + 1/R_2 + …}} (smaller than the smallest resistor) |\n\n" +
        "For **two resistors in parallel**, the fast product-over-sum shortcut is {{R_p = (R_1 R_2) / (R_1 + R_2)}}. For {{N}} identical resistors of value {{R}} in parallel, {{R_p = R / N}}.\n\n" +
        "### Ideal vs Non-Ideal Meters\n" +
        "- An **ammeter** is connected in **series** with a component so the same current passes through both. An **ideal ammeter has zero resistance** ({{R_A = 0}}) so it causes zero voltage drop and does not reduce the circuit current. A real (non-ideal) ammeter adds small series resistance, slightly lowering the measured current.\n" +
        "- A **voltmeter** is connected in **parallel** across a component so it shares the same potential difference. An **ideal voltmeter has infinite resistance** ({{R_V → ∞}}) so it draws zero current from the circuit. A real (non-ideal) voltmeter acts as a parallel resistor across the component, reducing the combined resistance of that section and causing the measured p.d. to read *lower* than the true unloaded value.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 250" role="img" aria-label="Mixed series-parallel Kirchhoff circuit showing a 12 V cell, 2 ohm series resistor, and 3 ohm and 6 ohm parallel branches with currents and voltages labelled">' +
        '<rect x="0" y="0" width="580" height="250" fill="#ffffff" rx="8"/>' +
        // Outer loop wires
        '<line x1="65" y1="55" x2="130" y2="55" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="210" y1="55" x2="310" y2="55" stroke="#1e293b" stroke-width="2.4"/>' +
        // Parallel split at node A (310, 55) to top branch y=55 and lower branch y=135
        '<line x1="310" y1="55" x2="355" y2="55" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="435" y1="55" x2="495" y2="55" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="310" y1="55" x2="310" y2="135" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="310" y1="135" x2="355" y2="135" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="435" y1="135" x2="495" y2="135" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="495" y1="55" x2="495" y2="205" stroke="#1e293b" stroke-width="2.4"/>' +
        // Return bottom wire to cell
        '<line x1="65" y1="205" x2="495" y2="205" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="65" y1="55" x2="65" y2="116" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="65" y1="142" x2="65" y2="205" stroke="#1e293b" stroke-width="2.4"/>' +
        // Cell symbol (vertical: + long thin at y=116, - short thick at y=132)
        '<line x1="45" y1="116" x2="85" y2="116" stroke="#1e293b" stroke-width="2.4"/>' +
        '<line x1="55" y1="130" x2="75" y2="130" stroke="#1e293b" stroke-width="5"/>' +
        '<line x1="65" y1="130" x2="65" y2="142" stroke="#1e293b" stroke-width="2.4"/>' +
        '<text x="36" y="114" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#dc2626">+</text>' +
        '<text x="37" y="140" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#2563eb">−</text>' +
        '<text x="20" y="128" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">12 V</text>' +
        // Series Resistor R1 = 2 ohm (IEC rectangle)
        '<rect x="130" y="42" width="80" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2" rx="3"/>' +
        '<text x="170" y="59" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">R₁ = 2 Ω</text>' +
        '<text x="170" y="33" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">V₁ = 6.0 V</text>' +
        // Parallel Resistor R2 = 3 ohm
        '<rect x="355" y="42" width="80" height="26" fill="#f0fdf4" stroke="#15803d" stroke-width="2.2" rx="3"/>' +
        '<text x="395" y="59" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">R₂ = 3 Ω</text>' +
        '<text x="395" y="33" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">V₂ = 6.0 V</text>' +
        // Parallel Resistor R3 = 6 ohm
        '<rect x="355" y="122" width="80" height="26" fill="#fefce8" stroke="#ca8a04" stroke-width="2.2" rx="3"/>' +
        '<text x="395" y="139" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#713f12" text-anchor="middle">R₃ = 6 Ω</text>' +
        '<text x="395" y="164" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#a16207" text-anchor="middle">V₃ = 6.0 V</text>' +
        // Junction nodes A & B
        '<circle cx="310" cy="55" r="5" fill="#dc2626"/>' +
        '<text x="310" y="39" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Node A</text>' +
        '<circle cx="495" cy="135" r="5" fill="#dc2626"/>' +
        '<text x="526" y="139" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Node B</text>' +
        // Current arrows & labels
        '<polygon points="97,50 109,55 97,60" fill="#dc2626"/>' +
        '<text x="100" y="42" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">I = 3.0 A</text>' +
        '<polygon points="333,50 344,55 333,60" fill="#15803d"/>' +
        '<text x="336" y="75" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">2.0 A</text>' +
        '<polygon points="333,130 344,135 333,140" fill="#ca8a04"/>' +
        '<text x="336" y="155" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#a16207" text-anchor="middle">1.0 A</text>' +
        '<polygon points="285,200 273,205 285,210" fill="#dc2626"/>' +
        '<text x="279" y="224" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">Return I = 3.0 A</text>' +
        // Summary box
        '<rect x="102" y="102" width="182" height="72" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" rx="6"/>' +
        '<text x="193" y="121" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e293b" text-anchor="middle">KCL at Node A: 3.0 = 2.0 + 1.0 A</text>' +
        '<text x="193" y="139" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e293b" text-anchor="middle">KVL outer loop: 12 = 6.0 + 6.0 V</text>' +
        '<text x="193" y="157" font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#475569" text-anchor="middle">R_p = (3×6)/(3+6) = 2 Ω → R_tot = 4 Ω</text>' +
        "</svg>",
      diagramCaption:
        "Mixed network illustrating Kirchhoff's current law at Node A (charge conservation) and Kirchhoff's voltage law around both closed loops (energy conservation).",
      workedExamples: [
        {
          title: "Solving a Mixed Series–Parallel Network",
          problem:
            "A 18 V ideal battery feeds a 3.0 Ω resistor in series with a parallel pair of 4.0 Ω and 12.0 Ω resistors. Find the total current and the current through the 12.0 Ω resistor.",
          steps: [
            "Collapse the parallel pair first: {{R_p = (4.0 * 12.0)/(4.0 + 12.0) = 48 / 16 = 3.0}} Ω.",
            "Add the series resistor: {{R_total = 3.0 + 3.0 = 6.0}} Ω.",
            "Find total current from the battery: {{I_total = V / R_total = 18 / 6.0 = 3.0}} A.",
            "Find the p.d. across the parallel pair: {{V_p = I_total * R_p = 3.0 * 3.0 = 9.0}} V (or by symmetry, 18 V splits 9.0 V + 9.0 V across two equal 3.0 Ω sections).",
            "Current through the 12.0 Ω branch: {{I_12 = V_p / 12.0 = 9.0 / 12.0 = 0.75}} A (and {{I_4 = 9.0 / 4.0 = 2.25}} A; check: {{2.25 + 0.75 = 3.0}} A).",
          ],
          answer: "Total current = 3.0 A; current through 12.0 Ω resistor = 0.75 A.",
          yourTurn: {
            question:
              "A 24 V ideal supply is connected to a 4.0 Ω resistor in series with a parallel pair of 6.0 Ω and 12.0 Ω resistors. Calculate the current through the 6.0 Ω resistor in A.",
            answer: { type: "number", value: 2, tolerance: 0.02, display: "2.0 A" },
            solution:
              "Parallel pair: {{R_p = (6 * 12)/(6 + 12) = 4.0}} Ω. Total resistance: {{R_tot = 4.0 + 4.0 = 8.0}} Ω. Total current: {{I = 24 / 8.0 = 3.0}} A. Parallel p.d.: {{V_p = 3.0 * 4.0 = 12}} V. Current in 6.0 Ω branch: {{I_6 = 12 / 6.0 = 2.0}} A.",
          },
        },
        {
          title: "Non-Ideal Voltmeter Loading Effect",
          problem:
            "Two 10 kΩ resistors are connected in series across a 12.0 V ideal battery. A non-ideal voltmeter of resistance 10 kΩ is placed across one resistor. What does the voltmeter read?",
          steps: [
            "Without the meter, the 12.0 V splits equally: 6.0 V across each 10 kΩ resistor.",
            "Connecting the 10 kΩ voltmeter in parallel across the lower 10 kΩ resistor replaces it with {{R_p = (10 * 10)/(10 + 10) = 5.0}} kΩ.",
            "Now the circuit is 10 kΩ in series with 5.0 kΩ (total 15 kΩ).",
            "The voltmeter reads {{V_m = 12.0 * 5.0 / (10.0 + 5.0) = 4.0}} V — 2.0 V lower than the unloaded p.d.!",
          ],
          answer: "4.0 V (loading reduces the effective resistance of the measured branch).",
        },
      ],
      keyPoints: [
        "Kirchhoff's junction rule ({{ΣI = 0}}) expresses **conservation of electric charge**; Kirchhoff's loop rule ({{ΣV = 0}}) expresses **conservation of energy**.",
        "In parallel, total resistance is always smaller than the smallest branch resistor; remember to take the **reciprocal** at the end of {{1/R_p = 1/R_1 + 1/R_2}}!",
        "Current divides between parallel branches in the **inverse** ratio of their resistances ({{I_1 / I_2 = R_2 / R_1}}).",
        "Ideal ammeter: {{R = 0}} (connected in series). Ideal voltmeter: {{R = ∞}} (connected in parallel).",
        "Closing a switch in parallel with a lamp **short-circuits** that lamp (p.d. drops to 0 V), extinguishing it while increasing total circuit current.",
      ],
      whyItWorks:
        "Why must voltages around a closed loop sum to zero? Because electric potential {{V}} is a single-valued function of position (potential energy per unit charge). Just as hiking around any mountain loop back to your starting tent guarantees your net elevation change is zero — every climb (EMF) must be matched by descents (potential drops across resistors) — every coulomb completing a circuit loop loses exactly as much electrical potential energy as the cells gave it.",
      strategies: [
        "Always collapse mixed networks **from the inside out**: simplify inner parallel blocks into single equivalent resistors, find total current, then unfold step-by-step back to individual branch p.d.s and currents.",
        "Quick sanity check for parallel calculations: if your calculated {{R_p}} is larger than the smallest branch resistor, you forgot to invert {{1/R_p}}!",
        "For two-loop circuits with two cells, assign clear current arrows first, write KCL at one node to eliminate one unknown, then apply KVL around two independent loops keeping strict sign discipline.",
      ],
      thinkDeeper:
        "In a symmetrical Wheatstone bridge where {{R_1 / R_2 = R_3 / R_4}}, the two mid-nodes sit at the exact same electric potential. Even if you connect a 1 Ω resistor or a sensitive galvanometer directly across the middle bridge, **zero current** flows through it — so you can erase that middle resistor completely when finding the equivalent resistance!",
    },

    // =========================================================================
    // SECTION 3: CELLS, EMF & INTERNAL RESISTANCE
    // =========================================================================
    {
      id: "emf-internal-resistance",
      heading: "B.5 Cells, Electromotive Force (EMF) & Internal Resistance",
      level: "SL",
      discovery: {
        problem:
          "A fresh 12.6 V car battery reads 12.6 V on a digital voltmeter when the engine is off. The moment the starter motor draws 150 A, the voltmeter across the battery terminals plunges to 9.6 V — yet the battery is completely healthy. Where did the missing 3.0 V go?",
        idea:
          "Every real cell contains chemical electrolytes and metal plates that oppose current flow — its **internal resistance** {{r}}. Pushing 150 A through that internal resistance uses up {{I r = 3.0}} V inside the battery itself (dissipated as heat), leaving only {{V = ε - I r = 12.6 - 3.0 = 9.6}} V across the external terminals. Here {{r = 3.0 / 150 = 0.020}} Ω — tiny, yet crucial at 150 A!",
      },
      body:
        "### Electromotive Force (EMF) vs Potential Difference\n" +
        "Inside a chemical cell, exothermic redox reactions separate charge and convert chemical energy into electrical potential energy:\n" +
        "- **Primary cells** (e.g. zinc–carbon, alkaline) rely on irreversible chemical reactions and are disposed of once spent.\n" +
        "- **Secondary (rechargeable) cells** (e.g. lithium-ion, lead–acid) use reversible reactions: forcing current *backwards* into the positive terminal from an external charger reverses the chemistry and restores stored chemical energy.\n\n" +
        "The **electromotive force (EMF, {{ε}})** of a source is the **total energy transferred from non-electrical (chemical) to electrical form per unit charge** passing through the source — equivalently, the work done per unit charge in driving charge completely around the circuit. Its unit is the **volt (V)**.\n\n" +
        "By contrast, **potential difference ({{V}})** across an external resistor is the energy transferred *from* electrical form to thermal/other forms per unit charge.\n\n" +
        "### Real Cell Equation & V–I Graph\n" +
        "A real cell is modelled as an ideal EMF {{ε}} in series with an **internal resistance** {{r}}. Applying Kirchhoff's loop rule around a circuit with external load resistance {{R}}:\n" +
        "{{ε = I R + I r = I(R + r)}}\n" +
        "Since the **terminal potential difference** measured across the cell's terminals equals the p.d. across the external load ({{V = I R}}):\n" +
        "{{V = ε - I r}}\n" +
        "The term {{I r}} is called the **lost volts** — the potential drop across the cell's own internal resistance.\n\n" +
        "Comparing {{V = (-r) I + ε}} with the straight-line form {{y = m x + c}}:\n" +
        "- **y-intercept** (when {{I = 0}}, open circuit) = **EMF {{ε}}**.\n" +
        "- **Gradient** = **{{−r}}** (so internal resistance {{r = -\"gradient\"}}).\n" +
        "- **x-intercept** (when {{V = 0}}, short circuit) = **short-circuit current {{I_(\"sc\") = ε / r}}**.\n\n" +
        "### Power Transfer & Efficiency\n" +
        "The total chemical power supplied by the cell is {{P_(\"total\") = ε I}}, split between useful external load power {{P_(\"load\") = I^2 R = V I}} and wasted internal heating {{P_(\"int\") = I^2 r}}.\n" +
        "- **Electrical efficiency** of power delivery to the load: {{η = P_(\"load\") / P_(\"total\") = (I^2 R) / (I^2(R + r)) = R / (R + r)}}. High efficiency requires {{R >> r}}.\n" +
        "- **Maximum Power Transfer Theorem:** Expressing load power as {{P_(\"load\") = (ε^2 R) / (R + r)^2}}, {{P_(\"load\")}} is zero when {{R = 0}} (no external resistance) and approaches zero as {{R → ∞}} (tiny current), reaching its **maximum when the load resistance matches the internal resistance ({{R = r}})**, where {{P_(\"max\") = ε^2 / (4 r)}} and efficiency is exactly 50%.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" role="img" aria-label="Real cell circuit with internal resistance r and load R alongside its terminal voltage V versus current I graph">' +
        '<rect x="0" y="0" width="600" height="250" fill="#ffffff" rx="8"/>' +
        // Left side: Circuit diagram
        '<text x="148" y="24" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#1e293b" text-anchor="middle">Real Cell Circuit Model</text>' +
        // Dashed real cell enclosure
        '<rect x="36" y="42" width="194" height="72" fill="#fffbeb" stroke="#d97706" stroke-width="1.8" stroke-dasharray="6,4" rx="8"/>' +
        '<text x="133" y="57" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Real Cell (terminals X, Y)</text>' +
        // Cell symbol inside box
        '<line x1="20" y1="84" x2="72" y2="84" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="72" y1="68" x2="72" y2="100" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="84" y1="74" x2="84" y2="94" stroke="#1e293b" stroke-width="4.5"/>' +
        '<text x="78" y="110" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">ε</text>' +
        '<line x1="84" y1="84" x2="128" y2="84" stroke="#1e293b" stroke-width="2.2"/>' +
        // Internal resistance r
        '<rect x="128" y="73" width="58" height="22" fill="#ffedd5" stroke="#c2410c" stroke-width="2" rx="3"/>' +
        '<text x="157" y="88" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#9a3412" text-anchor="middle">r</text>' +
        '<line x1="186" y1="84" x2="262" y2="84" stroke="#1e293b" stroke-width="2.2"/>' +
        // Terminal dots X and Y
        '<circle cx="36" cy="84" r="4" fill="#2563eb"/>' +
        '<circle cx="230" cy="84" r="4" fill="#2563eb"/>' +
        '<text x="27" y="76" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#2563eb">X</text>' +
        '<text x="237" y="76" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#2563eb">Y</text>' +
        // Voltmeter across X and Y
        '<line x1="36" y1="84" x2="36" y2="144" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="230" y1="84" x2="230" y2="144" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="36" y1="144" x2="117" y2="144" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="149" y1="144" x2="230" y2="144" stroke="#2563eb" stroke-width="1.6"/>' +
        '<circle cx="133" cy="144" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="133" y="148" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">V</text>' +
        // Outer loop with Ammeter and Load R
        '<line x1="20" y1="84" x2="20" y2="206" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="262" y1="84" x2="262" y2="206" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="20" y1="206" x2="54" y2="206" stroke="#1e293b" stroke-width="2.2"/>' +
        '<circle cx="70" cy="206" r="15" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>' +
        '<text x="70" y="210" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">A</text>' +
        '<line x1="85" y1="206" x2="132" y2="206" stroke="#1e293b" stroke-width="2.2"/>' +
        '<rect x="132" y="193" width="84" height="26" fill="#f1f5f9" stroke="#334155" stroke-width="2.2" rx="3"/>' +
        '<text x="174" y="210" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1e293b" text-anchor="middle">Load R</text>' +
        '<line x1="216" y1="206" x2="262" y2="206" stroke="#1e293b" stroke-width="2.2"/>' +
        // Variable arrow across R
        '<line x1="152" y1="227" x2="196" y2="185" stroke="#475569" stroke-width="1.6"/>' +
        '<polygon points="192,184 200,181 197,189" fill="#475569"/>' +
        // Right side: V-I Graph
        '<rect x="296" y="12" width="292" height="226" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="8"/>' +
        '<text x="442" y="30" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">Terminal p.d. Graph: V = ε − Ir</text>' +
        // Axes
        '<line x1="340" y1="200" x2="564" y2="200" stroke="#334155" stroke-width="1.8"/>' +
        '<line x1="340" y1="200" x2="340" y2="48" stroke="#334155" stroke-width="1.8"/>' +
        '<polygon points="564,196 572,200 564,204" fill="#334155"/>' +
        '<polygon points="336,48 340,40 344,48" fill="#334155"/>' +
        '<text x="562" y="216" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">I / A</text>' +
        '<text x="322" y="54" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">V / V</text>' +
        // Horizontal dashed line at EMF epsilon
        '<line x1="340" y1="68" x2="538" y2="68" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>' +
        // Linear V = eps - Ir line from (340, 68) to (538, 200)
        '<line x1="340" y1="68" x2="538" y2="200" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>' +
        // Shaded Lost volts vs Terminal V at a sample current x=439 (midpoint, y=134)
        '<line x1="439" y1="68" x2="439" y2="134" stroke="#dc2626" stroke-width="2.5"/>' +
        '<line x1="439" y1="134" x2="439" y2="200" stroke="#15803d" stroke-width="2.5"/>' +
        '<circle cx="439" cy="134" r="4" fill="#2563eb"/>' +
        '<text x="446" y="103" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">Lost volts = Ir</text>' +
        '<text x="446" y="170" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#15803d">Terminal V = IR</text>' +
        // Intercept labels
        '<circle cx="340" cy="68" r="4" fill="#d97706"/>' +
        '<text x="331" y="72" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#b45309" text-anchor="end">ε</text>' +
        '<circle cx="538" cy="200" r="4" fill="#dc2626"/>' +
        '<text x="538" y="217" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="middle">I_sc = ε/r</text>' +
        '<text x="400" y="92" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1d4ed8">gradient = −r</text>' +
        "</svg>",
      diagramCaption:
        "Measuring terminal p.d. V across a real cell as load R varies yields a straight line V = ε − Ir with y-intercept ε, gradient −r, and x-intercept ε/r.",
      workedExamples: [
        {
          title: "Finding EMF and Internal Resistance from Two Load Readings",
          problem:
            "When a cell is connected to a 5.0 Ω resistor, the current is 1.5 A. When connected to an 11.0 Ω resistor, the current drops to 0.75 A. Determine the cell's EMF {{ε}} and internal resistance {{r}}.",
          steps: [
            "Write {{ε = I(R + r)}} for both setups:",
            "Equation (1): {{ε = 1.5(5.0 + r) = 7.5 + 1.5 r}}",
            "Equation (2): {{ε = 0.75(11.0 + r) = 8.25 + 0.75 r}}",
            "Set them equal: {{7.5 + 1.5 r = 8.25 + 0.75 r}} → {{0.75 r = 0.75}} → {{r = 1.0}} Ω.",
            "Substitute back into (1): {{ε = 1.5(5.0 + 1.0) = 9.0}} V.",
          ],
          answer: "{{ε = 9.0 \" V\"}} and {{r = 1.0 \" Ω\"}}.",
          yourTurn: {
            question:
              "A battery has terminal p.d. 11.4 V when delivering 1.2 A, and 10.2 V when delivering 3.6 A. Calculate its internal resistance r in Ω.",
            answer: { type: "number", value: 0.5, tolerance: 0.01, display: "0.50 Ω" },
            solution:
              "From {{V = ε - I r}}, the internal resistance is {{r = -ΔV / ΔI = -(10.2 - 11.4) / (3.6 - 1.2) = 1.2 / 2.4 = 0.50}} Ω (and {{ε = 11.4 + 1.2 * 0.50 = 12.0}} V).",
          },
        },
        {
          title: "Maximum Power Transfer vs Efficiency",
          problem:
            "A 12.0 V battery has internal resistance {{r = 1.5}} Ω. Calculate (a) the maximum power it can deliver to an external load resistor, and (b) the efficiency when delivering that maximum power.",
          steps: [
            "Maximum power transfer occurs when load resistance equals internal resistance: {{R = r = 1.5}} Ω.",
            "Current at maximum power: {{I = ε / (R + r) = 12.0 / (1.5 + 1.5) = 4.0}} A.",
            "Load power: {{P_(\"max\") = I^2 R = 4.0^2 * 1.5 = 24.0}} W (equivalently {{ε^2 / (4r) = 144 / 6.0 = 24.0}} W).",
            "Efficiency: {{η = R / (R + r) = 1.5 / 3.0 = 0.50}} (50%), because half the battery's power heats the load and half heats the battery itself!",
          ],
          answer: "(a) 24 W, (b) 50% efficiency.",
        },
      ],
      keyPoints: [
        "EMF {{ε}} is total non-electrical to electrical energy per coulomb; terminal p.d. {{V = ε - I r}} is always less than {{ε}} when the cell is discharging.",
        "On a {{V}}–{{I}} graph, **y-intercept = {{ε}}**, **gradient = {{−r}}**, and **x-intercept = {{ε/r}}**.",
        "When a rechargeable cell is being **charged** (current forced into the `+` terminal), terminal p.d. *exceeds* EMF: {{V = ε + I r}}.",
        "Connecting {{N}} identical cells in **series** gives {{ε_(\"tot\") = N ε}} and {{r_(\"tot\") = N r}}; in **parallel**, {{ε_(\"tot\") = ε}} and {{r_(\"tot\") = r / N}}.",
        "Maximum power is transferred to the load when {{R = r}} (50% efficiency), whereas high efficiency (e.g. mains power grid) demands {{R >> r}}.",
      ],
      whyItWorks:
        "Why does terminal voltage equal EMF only on open circuit ({{I = 0}})? Because internal resistance only consumes energy when charge actually moves through the electrolyte. Even a tiny current through a non-ideal voltmeter creates a small {{I r}} drop, which is why laboratories use very high-resistance digital voltmeters (often 10 MΩ) to measure open-circuit EMF accurately — and why an aged battery with high {{r}} can still read 1.5 V unloaded yet collapse immediately inside a torch!",
      strategies: [
        "In IB Paper 1B/Paper 2 data questions, check whether the x-axis starts at {{I = 0}}! If the graph has a false origin, NEVER read the y-intercept visually — calculate {{r = -ΔV / ΔI}} from two widely spaced points on the line of best fit, then compute {{ε = V + I r}}.",
        "Watch out for cell orientation in series: if one cell is reversed, subtract its EMF ({{ε_1 - ε_2}}), **but ALWAYS ADD internal resistances** ({{r_1 + r_2}}) — resistance never subtracts!",
        "When asked why a high-voltage lab supply (e.g. 5 kV) is safe to touch accidentally while a 12 V car battery can weld a wrench, compare their internal resistances ({{r}} in MΩ limits short-circuit current to mA, whereas {{r ≈ 0.01}} Ω allows hundreds of amps).",
      ],
      thinkDeeper:
        "If an engineering team wants maximum **power** (like an audio amplifier driving a speaker or a solar panel MPPT tracker), they match {{R = r}}. If an electrical utility wants maximum **efficiency** (like Singapore's power grid), they make {{R >> r}} so almost none of the generated energy is wasted inside the generator coils and cables!",
    },

    // =========================================================================
    // SECTION 4: POTENTIAL DIVIDERS, THERMISTORS, LDRs & CIRCUIT DIAGNOSTICS
    // =========================================================================
    {
      id: "potential-dividers-sensors",
      heading: "B.5 Potential Dividers, Thermistors, LDRs & Circuit Diagnostics",
      level: "SL",
      discovery: {
        problem:
          "You want a cooling fan to turn ON automatically whenever a server room gets too hot, using a 12 V supply, a fixed resistor {{R_1}}, and an NTC thermistor (whose resistance *drops* as temperature rises). Should you wire the fan's trigger across the **thermistor** or across the **fixed resistor {{R_1}}**?",
        idea:
          "Across the **fixed resistor {{R_1}}**! In a series divider, the two voltages always sum to 12 V. As temperature rises, the NTC thermistor's resistance falls, so it takes a *smaller* share of the 12 V — which forces the voltage across the fixed resistor {{R_1}} to **increase**, triggering the cooling fan!",
      },
      body:
        "### The Potential Divider Equation\n" +
        "Two resistors {{R_1}} and {{R_2}} connected in series across a supply {{V_(\"in\")}} share the same current {{I = V_(\"in\") / (R_1 + R_2)}}. Therefore, the output potential difference taken across {{R_2}} is simply its fractional share of the total resistance:\n" +
        "{{V_(\"out\") = V_(\"in\") * R_2 / (R_1 + R_2)}}\n" +
        "Likewise, the ratio of potential differences equals the ratio of resistances: {{V_1 / V_2 = R_1 / R_2}}.\n\n" +
        "### Potentiometer vs Variable Resistor (Rheostat)\n" +
        "A **potentiometer** uses all three terminals of a uniform resistance wire (or track) with a sliding contact. Moving the wiper smoothly adjusts {{V_(\"out\")}} continuously from **0 V all the way up to {{V_(\"in\")}}** — essential when plotting the full {{I–V}} curve of a filament lamp starting from (0, 0). By contrast, a simple series rheostat cannot reduce the lamp voltage to zero because the lamp always retains a finite share of {{V_(\"in\")}}.\n\n" +
        "### Semiconductor Sensors in Potential Dividers\n" +
        "| Sensor | Resistance response | Microscopic mechanism | Typical application |\n" +
        "|---|---|---|---|\n" +
        "| **NTC Thermistor** | Resistance **decreases** steeply as **temperature increases** | Thermal energy excites far more electrons into the conduction band, dramatically raising free carrier density {{n}} | Fire alarms, incubator thermostats, laptop fan control |\n" +
        "| **LDR** (Light-Dependent Resistor) | Resistance **decreases** steeply as **light intensity increases** | Absorbed photons free bound electrons in the semiconductor (photoconductivity), increasing {{n}} | Automatic street lighting, camera exposure meters |\n" +
        "| **Strain Gauge** | Resistance **increases** slightly when **stretched** (decreases when compressed) | Stretching increases length {{L}} and slightly shrinks cross-sectional area {{A}} in {{R = ρL/A}} | Structural bridge monitoring, electronic bathroom scales |\n\n" +
        "### Loading Effect & Circuit Fault Diagnostics\n" +
        "If an external load resistor {{R_L}} (such as a lamp or low-resistance meter) is connected across the output {{R_2}}, the bottom section becomes the parallel combination {{R_(\"eff\") = (R_2 R_L)/(R_2 + R_L) < R_2}}. Consequently, {{V_(\"out\")}} **drops below** the unloaded divider prediction unless {{R_L >> R_2}}.\n\n" +
        "For **circuit diagnostics** with a voltmeter:\n" +
        "- **Open-circuit fault** (broken wire or blown filament in a series chain): current drops to **0 A** everywhere; the voltmeter reads **0 V** across all intact resistors (since {{I R = 0}}) and reads the **full supply EMF {{ε}}** across the open break!\n" +
        "- **Short-circuit fault** (zero-resistance bypass across one component): the p.d. across the shorted component collapses to **0 V**, total circuit resistance drops, current increases, and the remaining series components receive a larger share of {{V_(\"in\")}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 255" role="img" aria-label="Potential divider circuit with fixed resistor R1 and NTC thermistor R2 alongside resistance versus temperature curve">' +
        '<rect x="0" y="0" width="600" height="255" fill="#ffffff" rx="8"/>' +
        // Left: Potential Divider Schematic
        '<text x="155" y="24" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#1e293b" text-anchor="middle">Sensor Potential Divider</text>' +
        // Supply rails
        '<line x1="60" y1="46" x2="215" y2="46" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="60" y1="216" x2="215" y2="216" stroke="#1e293b" stroke-width="2.2"/>' +
        '<circle cx="60" cy="46" r="4" fill="#dc2626"/>' +
        '<circle cx="60" cy="216" r="4" fill="#2563eb"/>' +
        '<text x="50" y="50" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#dc2626" text-anchor="end">+V_in</text>' +
        '<text x="50" y="220" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#2563eb" text-anchor="end">0 V</text>' +
        // Vertical divider chain at x=145
        '<line x1="145" y1="46" x2="145" y2="66" stroke="#1e293b" stroke-width="2.2"/>' +
        // Fixed resistor R1
        '<rect x="131" y="66" width="28" height="54" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2" rx="3"/>' +
        '<text x="116" y="97" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="end">R₁</text>' +
        '<text x="116" y="111" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569" text-anchor="end">(fixed)</text>' +
        // Middle node at y=134
        '<line x1="145" y1="120" x2="145" y2="146" stroke="#1e293b" stroke-width="2.2"/>' +
        '<circle cx="145" cy="134" r="4" fill="#15803d"/>' +
        '<line x1="145" y1="134" x2="215" y2="134" stroke="#15803d" stroke-width="2"/>' +
        // Thermistor R2 (IEC box with hockey-stick line)
        '<rect x="131" y="146" width="28" height="54" fill="#f0fdf4" stroke="#15803d" stroke-width="2.2" rx="3"/>' +
        '<polyline points="122,193 128,193 166,153" fill="none" stroke="#15803d" stroke-width="2"/>' +
        '<text x="116" y="172" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="end">R₂</text>' +
        '<text x="116" y="186" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569" text-anchor="end">(NTC/LDR)</text>' +
        '<line x1="145" y1="200" x2="145" y2="216" stroke="#1e293b" stroke-width="2.2"/>' +
        // Output terminals V_out
        '<circle cx="215" cy="134" r="4" fill="#15803d"/>' +
        '<circle cx="215" cy="216" r="4" fill="#15803d"/>' +
        '<line x1="215" y1="142" x2="215" y2="208" stroke="#15803d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<text x="226" y="179" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#15803d">V_out</text>' +
        // Formula pill bottom left
        '<rect x="28" y="226" width="246" height="22" fill="#f1f5f9" rx="5"/>' +
        '<text x="151" y="241" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">V_out = V_in × R₂ / (R₁ + R₂)</text>' +
        // Right: Sensor characteristic curve
        '<rect x="298" y="14" width="288" height="228" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" rx="8"/>' +
        '<text x="442" y="34" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">NTC Thermistor / LDR Response</text>' +
        '<line x1="342" y1="190" x2="562" y2="190" stroke="#334155" stroke-width="1.8"/>' +
        '<line x1="342" y1="190" x2="342" y2="54" stroke="#334155" stroke-width="1.8"/>' +
        '<polygon points="562,186 570,190 562,194" fill="#334155"/>' +
        '<polygon points="338,54 342,46 346,54" fill="#334155"/>' +
        '<text x="452" y="209" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">Temperature (NTC) or Light Intensity (LDR)</text>' +
        '<text x="331" y="64" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#334155" text-anchor="end">R₂</text>' +
        // Steep decreasing curve
        '<path d="M 354 66 C 368 128, 412 166, 552 180" fill="none" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>' +
        // Callout labels
        '<circle cx="372" cy="112" r="4" fill="#dc2626"/>' +
        '<text x="382" y="108" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#dc2626">Cold / Dark → High R₂ → High V_out</text>' +
        '<circle cx="496" cy="175" r="4" fill="#2563eb"/>' +
        '<text x="488" y="162" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">Hot / Bright → Low R₂ → Low V_out</text>' +
        '<text x="442" y="232" font-family="system-ui,sans-serif" font-size="10" fill="#475569" font-weight="600" text-anchor="middle">Swap R₁ and R₂ to invert the output logic!</text>' +
        "</svg>",
      diagramCaption:
        "A sensor potential divider converts temperature or light intensity changes into a measurable output voltage V_out. Placing the sensor on top inverts the output response.",
      workedExamples: [
        {
          title: "Designing an Automatic Streetlight Trigger",
          problem:
            "A 9.0 V supply feeds a potential divider made of a fixed resistor {{R_1 = 4.0}} kΩ in series with an LDR ({{R_2}}). The streetlight switches ON when {{V_(\"out\")}} across the LDR reaches 6.0 V. Find the LDR resistance at which the lamp turns ON.",
          steps: [
            "Write the divider equation: {{V_(\"out\") = V_(\"in\") * R_2 / (R_1 + R_2)}}.",
            "Substitute {{V_(\"out\") = 6.0}} V, {{V_(\"in\") = 9.0}} V, {{R_1 = 4.0}} kΩ: {{6.0 / 9.0 = R_2 / (4.0 + R_2)}}.",
            "Simplify {{2/3 = R_2 / (4.0 + R_2)}} → {{8.0 + 2 R_2 = 3 R_2}} → {{R_2 = 8.0}} kΩ.",
            "Check via ratios: {{V_1 = 9.0 - 6.0 = 3.0}} V and {{V_2 = 6.0}} V, so {{V_2 = 2 V_1}}, hence {{R_2 = 2 R_1 = 8.0}} kΩ!",
          ],
          answer: "{{R_2 = 8.0 \" kΩ\"}} (as dusk falls and light drops, {{R_2}} rises past 8.0 kΩ and switches the lamp ON).",
          yourTurn: {
            question:
              "A 12.0 V supply drives a potential divider with fixed resistor R₁ = 6.0 kΩ and an NTC thermistor R₂ = 2.0 kΩ at 40 °C. Calculate V_out across the thermistor in V.",
            answer: { type: "number", value: 3, tolerance: 0.02, display: "3.0 V" },
            solution:
              "{{V_(\"out\") = 12.0 * 2.0 / (6.0 + 2.0) = 12.0 * 2.0 / 8.0 = 3.0}} V.",
          },
        },
        {
          title: "Loaded Potential Divider Calculation",
          problem:
            "A 12.0 V potential divider uses two 600 Ω resistors ({{R_1 = R_2 = 600}} Ω). A 300 Ω load resistor is connected across {{R_2}}. Calculate the new output p.d. across the load.",
          steps: [
            "Unloaded output would be {{12.0 * 600 / 1200 = 6.0}} V.",
            "Combine {{R_2}} (600 Ω) in parallel with the load (300 Ω): {{R_(\"eff\") = (600 * 300) / (600 + 300) = 200}} Ω.",
            "Apply the potential divider formula with {{R_1 = 600}} Ω and {{R_(\"eff\") = 200}} Ω: {{V_(\"out\") = 12.0 * 200 / (600 + 200) = 3.0}} V.",
          ],
          answer: "3.0 V (loading cuts the output p.d. in half because the load is smaller than {{R_2}}).",
        },
      ],
      keyPoints: [
        "Potential divider rule: {{V_(\"out\") = V_(\"in\") * R_2 / (R_1 + R_2)}}, valid when negligible current is drawn from the output terminals.",
        "Both **NTC thermistors** (hotter → lower {{R}}) and **LDRs** (brighter → lower {{R}}) are semiconductors whose resistance falls as external energy frees more charge carriers.",
        "If {{V_(\"out\")}} is taken across a sensor whose resistance falls, {{V_(\"out\")}} **decreases**; if taken across the paired fixed resistor, {{V_(\"out\")}} **increases**.",
        "A **potentiometer** allows {{V_(\"out\")}} to be varied all the way down to **0 V**; a series rheostat cannot reach 0 V unless the circuit is opened.",
        "Connecting a finite load {{R_L}} across {{R_2}} reduces the bottom resistance to {{R_2 || R_L}}, lowering {{V_(\"out\")}}.",
      ],
      whyItWorks:
        "A potential divider works simply because series resistors carry identical current {{I}}. Since {{V_1 = I R_1}} and {{V_2 = I R_2}}, the fraction of energy per coulomb dropped across each resistor is strictly proportional to its fraction of the total resistance. That is why semiconductor sensors are almost always placed inside potential dividers: digital microcontrollers and comparators read *voltage*, not resistance directly!",
      strategies: [
        "Use the ratio shortcut {{V_1 / V_2 = R_1 / R_2}} whenever you know {{V_(\"in\")}} and {{V_(\"out\")}}: immediately subtract {{V_1 = V_(\"in\") - V_(\"out\")}} to avoid algebraic rearrangement errors.",
        "For qualitative 'what happens when temperature/light rises?' questions, write a 3-arrow chain: `T ↑  →  R_therm ↓  →  V_therm ↓  →  V_fixed ↑` (since {{V_(\"therm\") + V_(\"fixed\") = V_(\"in\")}} is constant).",
        "When diagnosing an open-circuit fault, remember: ZERO current means ZERO p.d. across every working resistor, so the FULL supply voltage appears across the open break!",
      ],
      thinkDeeper:
        "Why do real thermostats use a tiny amount of **hysteresis** (switching ON at e.g. 25.5 °C and OFF at 24.5 °C) instead of a single sharp threshold voltage? Because without hysteresis, tiny voltage fluctuations near the threshold would chatter the relay on and off hundreds of times per minute!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define electric current and give its SI base unit.",
        back: "Electric current is the rate of flow of electric charge past a point: {{I = Δq / Δt}}. Its SI base unit is the **ampere (A)** ({{1 \" A\" = 1 \" C s\"^(-1)}}).",
        level: "SL",
      },
      {
        front: "Distinguish between electromotive force (EMF) and potential difference (p.d.).",
        back: "**EMF ({{ε}})** is the energy converted from non-electrical (e.g. chemical) to electrical form per unit charge by a source. **Potential difference ({{V}})** is the energy converted from electrical to other forms (e.g. thermal) per unit charge across a component.",
        level: "SL",
      },
      {
        front: "State Ohm's law accurately for IB Physics.",
        back: "The current through a conductor is directly proportional to the potential difference across it, **provided temperature and other physical conditions remain constant**.",
        level: "SL",
      },
      {
        front: "How do you find resistance from a non-ohmic I–V curve at a point {{(V, I)}}?",
        back: "Always compute the coordinate ratio {{R = V / I}} at that point — **NEVER** use the inverse of the tangent gradient {{1 / (dI/dV)}}.",
        level: "SL",
      },
      {
        front: "Why does the resistance of a tungsten filament lamp increase as current increases?",
        back: "Higher current heats the filament; positive lattice ions vibrate with greater amplitude, increasing the frequency of collisions with drifting electrons and increasing resistance {{R = V / I}}.",
        level: "SL",
      },
      {
        front: "How does doubling a wire's diameter (at constant length and material) affect its resistance?",
        back: "Resistance becomes **one quarter** ({{R / 4}}), because {{R = ρL/A}} and cross-sectional area {{A = π d^2 / 4}} quadruples.",
        level: "SL",
      },
      {
        front: "State Kirchhoff's two laws and the fundamental conservation principle behind each.",
        back: "1. **Junction rule** ({{ΣI = 0}}): conservation of **electric charge**.\n2. **Loop rule** ({{ΣV = 0}} or {{Σε = ΣIR}}): conservation of **energy**.",
        level: "SL",
      },
      {
        front: "What are the resistances and circuit connections of an ideal ammeter and an ideal voltmeter?",
        back: "**Ideal ammeter:** {{0 \" Ω\"}}, connected in **series**.\n**Ideal voltmeter:** {{∞ \" Ω\"}}, connected in **parallel**.",
        level: "SL",
      },
      {
        front: "How do you extract EMF {{ε}} and internal resistance {{r}} from a terminal p.d. ({{V}}) vs current ({{I}}) graph?",
        back: "Since {{V = ε - I r}}, the **y-intercept** equals {{ε}}, the **gradient** equals {{−r}}, and the **x-intercept** equals the short-circuit current {{ε / r}}.",
        level: "SL",
      },
      {
        front: "When does a real cell (EMF {{ε}}, internal resistance {{r}}) deliver maximum power to an external load {{R}}?",
        back: "When **{{R = r}}**, yielding {{P_(\"max\") = ε^2 / (4 r)}} at an efficiency of exactly **50%**.",
        level: "SL",
      },
      {
        front: "How do an NTC thermistor and an LDR respond to temperature and light intensity?",
        back: "**NTC thermistor:** resistance decreases sharply as temperature increases.\n**LDR:** resistance decreases sharply as light intensity increases (more free charge carriers released in both semiconductors).",
        level: "SL",
      },
      {
        front: "Why is a potentiometer preferred over a series rheostat when measuring the I–V curve of a lamp?",
        back: "A potentiometer varies the p.d. across the lamp continuously from **0 V to {{V_(\"in\")}}**, whereas a series rheostat cannot reduce the lamp p.d. all the way to 0 V.",
        level: "SL",
      },
      {
        front: "What happens to the terminal p.d. of a rechargeable battery while it is being charged?",
        back: "Current is forced into the positive terminal, so the external charger must overcome both EMF and internal resistance: {{V = ε + I r}}, making terminal p.d. **greater than {{ε}}**.",
        level: "SL",
      },
      {
        front: "What does a voltmeter read across an open-circuit break in an otherwise intact series circuit?",
        back: "The **full supply EMF {{ε}}**! Because {{I = 0}}, zero voltage is dropped across all intact resistors, leaving the full supply potential across the break.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Conventional current flows from `+` to `−` around the external circuit; conduction electrons drift from `−` to `+` at speeds of order {{10^(-4)}} m s⁻¹.",
      "Resistance is ALWAYS defined as {{R = V / I}}; Ohm's law adds the condition that {{R}} is constant at constant temperature.",
      "Resistivity {{ρ = R A / L}} depends only on material and temperature; for a circular wire {{A = π r^2 = π d^2 / 4}}.",
      "Kirchhoff's junction rule = charge conservation; Kirchhoff's loop rule = energy conservation.",
      "Adding a resistor in parallel ALWAYS reduces total resistance below the smallest branch resistor.",
      "For identical resistors, compare powers using {{P = I^2 R}} in series (same {{I}}) and {{P = V^2 / R}} in parallel (same {{V}}).",
      "Real cell equations: {{ε = I(R + r)}} and terminal p.d. {{V = ε - I r}} (discharging); lost volts = {{I r}}.",
      "Maximum power transfer occurs at {{R = r}} (50% efficiency); high efficiency {{η = R/(R+r)}} requires {{R >> r}}.",
      "Potential divider output across {{R_2}}: {{V_(\"out\") = V_(\"in\") * R_2 / (R_1 + R_2)}} (unloaded).",
      "Connecting a non-ideal voltmeter or load {{R_L}} across {{R_2}} lowers the effective resistance of that branch and reduces {{V_(\"out\")}}.",
    ],
    misconceptions: [
      {
        wrong: "Resistance on a curved I–V graph equals the reciprocal of the tangent gradient ({{1 / (dI/dV)}}).",
        right: "Resistance at ANY point {{(V, I)}} is ALWAYS the simple ratio {{R = V / I}} — the inverse slope of the **chord from the origin** to that point, NOT the local tangent!",
        level: "SL",
      },
      {
        wrong: "Current gets 'used up' as it passes through resistors and lamps around a series circuit.",
        right: "Electric **charge** (and therefore current) is strictly conserved everywhere around a series loop. What gets transformed into heat and light is **electrical potential energy** (voltage), not current!",
        level: "SL",
      },
      {
        wrong: "A higher-resistance resistor ALWAYS dissipates more power because {{P = I^2 R}}.",
        right: "That is only true in **series** (where {{I}} is the same). In **parallel** (where {{V}} is the same), {{P = V^2 / R}}, so the **lower-resistance** resistor dissipates MORE power!",
        level: "SL",
      },
      {
        wrong: "A cell is a constant-current source, so adding a parallel branch splits the original current in half.",
        right: "An ideal cell is a **constant-voltage** source! Adding a parallel branch draws *additional* current from the cell while leaving the original branch's voltage and current unchanged (for {{r = 0}}).",
        level: "SL",
      },
      {
        wrong: "Reversing one cell in a series battery pack cancels out its internal resistance too.",
        right: "Reversing a cell subtracts its EMF ({{ε_1 - ε_2}}), **but internal resistances ALWAYS add** ({{r_1 + r_2}}), because current still suffers collisions inside both cells' electrolytes.",
        level: "SL",
      },
      {
        wrong: "When a wire is stretched to twice its length, its resistance simply doubles.",
        right: "Stretching a fixed volume of metal to length {{2L}} halves its cross-sectional area to {{A/2}}, so {{R = ρ(2L)/(A/2) = 4R}} — resistance **quadruples**!",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting to take the reciprocal at the final step of {{1/R_p = 1/R_1 + 1/R_2}}, writing e.g. {{0.25 \" Ω\"}} instead of {{4.0 \" Ω\"}}.",
      "Plugging **diameter** instead of **radius** into {{A = π r^2}} (off by a factor of 4!), or forgetting to convert mm to m before squaring ({{1 \" mm\"^2 = 10^(-6) \" m\"^2}}, NOT {{10^(-3) \" m\"^2}}).",
      "Defining Ohm's law merely as 'V = IR' without stating direct proportionality between {{I}} and {{V}} **at constant temperature**.",
      "Reading the y-intercept directly off a {{V–I}} graph whose horizontal axis does NOT start at {{I = 0}} (false-origin trap in IB Paper 1B/2!).",
      "Assuming a potential divider's {{V_(\"out\")}} stays unchanged when a low-resistance lamp or non-ideal voltmeter is wired in parallel with {{R_2}}.",
      "Stating that an NTC thermistor's resistance drops with temperature 'because atoms vibrate less' — lattice vibrations actually *increase*, but the huge surge in free charge carrier density {{n}} dominates.",
      "Forgetting to convert mA to A or kΩ to Ω when mixing units in {{P = IV}} or {{V = IR}} (note: mA × kΩ = V directly, which is a neat check!).",
    ],
    mnemonics: [
      {
        topic: "Ideal Meter Resistances",
        device: "**A**mmeter = **A**lmost zero Ω (in **S**eries); **V**oltmeter = **V**ast / infinite Ω (in **P**arallel)",
        explanation:
          "An ammeter sits in the main stream so it must not block flow ({{R = 0}}); a voltmeter peeks across two points so it must not steal flow ({{R = ∞}}).",
        level: "SL",
      },
      {
        topic: "Kirchhoff's Laws Conservation Pair",
        device: "**J**unction = **C**harge (**KCL**); **L**oop = **E**nergy (**KVL**)",
        explanation:
          "Think 'Current is Charge in motion' (junction rule) and 'Voltage is Energy per coulomb' (loop rule).",
        level: "SL",
      },
      {
        topic: "NTC & LDR Sensor Rule",
        device: "**More energy in → More carriers free → Less resistance**",
        explanation:
          "Both heat (in an NTC thermistor) and light photons (in an LDR) liberate extra charge carriers inside the semiconductor, lowering resistance.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Why Car Headlights Dim During Ignition",
        detail:
          "A starter motor draws 100–250 A from a 12 V lead–acid battery. Even an internal resistance of just 0.02 Ω causes 2–5 V of lost volts, momentarily dropping terminal voltage across the parallel headlights.",
        emoji: "🚗",
      },
      {
        title: "High-Voltage National Power Grids",
        detail:
          "For fixed transmitted power {{P = V I}}, stepping transmission voltage up by 10× cuts current by 10× and slashes cable Joule heating {{P_(\"loss\") = I^2 R_(\"cable\")}} by **100×**!",
        emoji: "⚡",
      },
      {
        title: "Automatic Streetlights & Night-Mode Displays",
        detail:
          "An LDR inside a potential divider senses falling ambient light at sunset: as {{R_(\"LDR\")}} surges from ~500 Ω to >100 kΩ, {{V_(\"out\")}} crosses the comparator threshold and switches LED streetlamps ON.",
        emoji: "🌆",
      },
      {
        title: "Lithium-Ion Battery Ageing in Smartphones",
        detail:
          "Over hundreds of charge cycles, chemical degradation raises a phone battery's internal resistance {{r}}. Under heavy processor load (high {{I}}), {{V = ε - I r}} dips below the shutdown threshold even when 20% charge remains.",
        emoji: "📱",
      },
      {
        title: "Bridge Structural Strain Gauges",
        detail:
          "Thin metallic foil strain gauges bonded onto suspension bridges stretch microscopically under traffic loads, changing {{R = ρL/A}} inside a sensitive potential-divider bridge to measure stress in real time.",
        emoji: "🌉",
      },
    ],
    videos: [
      {
        title: "IB Physics B.5: Current, Potential Difference, Resistance & Ohm's Law",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=Andy+Masley+IB+Physics+Ohm+law+resistance+current",
      },
      {
        title: "IB Physics B.5: Kirchhoff's Laws & Series-Parallel Circuits",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=Chris+Doner+IB+Physics+Kirchhoff+laws+circuits",
      },
      {
        title: "IB Physics B.5: EMF, Internal Resistance & Terminal Potential Difference",
        channel: "OSC IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+EMF+internal+resistance+terminal+potential+difference",
      },
      {
        title: "Potential Dividers, NTC Thermistors & LDRs Explained",
        channel: "Physics Online",
        url: "https://www.youtube.com/results?search_query=potential+divider+thermistor+LDR+IB+Physics",
      },
    ],
    formulas: [
      {
        name: "Electric current",
        formula: "{{I = Δq / Δt}}",
        note: "1 A = 1 C s⁻¹; charge flow rate (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Drift velocity equation",
        formula: "{{I = n A v q}}",
        note: "n = free carrier density (m⁻³), A = area, v = drift speed, q = carrier charge",
        level: "SL",
      },
      {
        name: "Potential difference",
        formula: "{{V = W / q}}",
        note: "Work done / energy transferred per unit charge; 1 V = 1 J C⁻¹ (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Electrical resistance",
        formula: "{{R = V / I}}",
        note: "Always the coordinate ratio V/I, even on non-ohmic graphs (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Resistivity equation",
        formula: "{{R = (ρ L) / A}}",
        note: "ρ in Ω m; for circular wire {{A = π r^2 = π d^2 / 4}} (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Electrical power",
        formula: "{{P = I V = I^2 R = V^2 / R}}",
        note: "Energy dissipated {{E = P t = V I t}} (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Resistors in series",
        formula: "{{R_s = R_1 + R_2 + …}}",
        note: "Same current I; voltages add (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Resistors in parallel",
        formula: "{{1 / R_p = 1 / R_1 + 1 / R_2 + …}}",
        note: "Same p.d. V; currents add; two-resistor shortcut {{R_p = (R_1 R_2)/(R_1 + R_2)}} (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Kirchhoff's laws",
        formula: "{{ΣI = 0}}  and  {{ΣV = 0}}",
        note: "Junction rule (charge conservation) and Loop rule (energy conservation)",
        level: "SL",
      },
      {
        name: "EMF & internal resistance",
        formula: "{{ε = I(R + r)}}  and  {{V = ε - I r}}",
        note: "V = terminal p.d., Ir = lost volts; V–I intercept = ε, gradient = −r (Data Booklet B.5)",
        level: "SL",
      },
      {
        name: "Maximum power transfer & efficiency",
        formula: "{{P_(\"max\") = ε^2 / (4 r)}} (at {{R = r}})  and  {{η = R / (R + r)}}",
        note: "50% efficiency at maximum load power; high efficiency when R ≫ r",
        level: "SL",
      },
      {
        name: "Potential divider equation",
        formula: "{{V_(\"out\") = V_(\"in\") * R_2 / (R_1 + R_2)}}",
        note: "Unloaded output p.d. across R₂; equivalent ratio {{V_1 / V_2 = R_1 / R_2}}",
        level: "SL",
      },
    ],
  },
};
