import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "d1-fields-motion",
  title: "D.1–D.3 Gravitational, Electric & Magnetic Fields",
  strand: "Theme D: Fields",
  icon: "🧲",
  level: "SL",
  summary:
    "How invisible gravitational, electric and magnetic fields transmit forces across empty space, bind planets into Keplerian orbits, define scalar potentials and escape velocities (HL), and steer charged particles through mass spectrometers and particle accelerators.",
  intro:
    "Every push or pull you have ever felt — from the weight keeping your feet on the floor to the magnetic levitation of a high-speed train — acts through a **field**: a region of space where a mass, charge or moving current experiences a non-contact force. In IB Physics Theme D, you will see how Newton's gravitation and Coulomb's electrostatics share the exact same inverse-square geometry, why potential energy turns vector force problems into clean scalar conservation laws (HL), and how crossed electric and magnetic fields let physicists weigh individual atoms.",
  guide: [
    // =========================================================================
    // SECTION 1 — SL
    // =========================================================================
    {
      id: "gravitational-fields-orbits",
      heading: "D.1 Newton's Gravitation, Field Strength & Kepler's Third Law",
      level: "SL",
      discovery: {
        problem:
          "Astronauts aboard the International Space Station (ISS) float effortlessly at an altitude of {{400}} km above Earth (Earth's radius is {{6370}} km). Many people claim there is 'zero gravity' in space. Calculate roughly what percentage of Earth's surface gravitational field strength still acts on the ISS — and if gravity is still so strong, why doesn't the ISS crash straight into the ground?",
        idea:
          "Using the inverse-square law {{g ∝ 1/r^2}}, the ratio is {{(6370 / 6770)^2 ≈ 0.885}}, so gravity at the ISS is still **89% as strong** as on your bedroom floor! The ISS *is* constantly falling towards Earth — it is simply moving sideways at {{7.67}} km s⁻¹ so fast that Earth's curved surface drops away beneath it at the exact same rate. Weightlessness in orbit is continuous **free fall**, not zero gravity.",
      },
      body: `A **gravitational field** is a region of space in which a mass experiences an attractive gravitational force. Rather than imagining the Sun reaching instantaneously across {{1.5 * 10^11}} m of vacuum to tug on Earth, physics describes the Sun as modifying the space around it with a gravitational field, and Earth responds locally to the field at its own position.

### Newton's Law of Universal Gravitation
Every point mass attracts every other point mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres:

{{F = (G m_1 m_2) / r^2}}

where {{G = 6.67 * 10^(-11)}} N m² kg⁻² is the universal gravitational constant. By Newton's shell theorem, any **uniform spherical mass** (like a planet or star) behaves outside its surface exactly as if all its mass were concentrated at its centre — so {{r}} is always measured **centre-to-centre** ({{r = R + h}} for a satellite at altitude {{h}} above a planet of radius {{R}}).

### Gravitational Field Strength {{g}}
Gravitational field strength is defined as the **gravitational force per unit mass** acting on a small test mass placed at that point:

{{g = F / m = (G M) / r^2}}

Its SI unit is N kg⁻¹, which is dimensionally identical to m s⁻² (the acceleration of free fall). Because {{g}} is a **vector**, it always points radially **inwards** towards the source mass {{M}}.
- **Radial field (global scale):** Field lines point radially inward towards the centre of the planet; their spacing increases with distance, visually representing {{g ∝ 1/r^2}}.
- **Uniform field approximation (local scale):** Over a small height near Earth's surface ({{h << R_E}}), the radial lines appear nearly parallel and equally spaced, so {{g ≈ 9.81}} N kg⁻¹ is treated as constant.

### Circular Orbits & Kepler's Laws
For a satellite of mass {{m}} in a circular orbit of radius {{r}} around a much heavier body of mass {{M}}, the gravitational force provides the entire centripetal force:

{{(G M m) / r^2 = (m v^2) / r}}

Cancelling {{m}} and one factor of {{r}} gives the **circular orbital speed**:

{{v = sqrt((G M) / r)}}

Notice two profound facts: the satellite's own mass {{m}} cancels completely (a tiny bolt and a huge space station share the exact same orbital speed at radius {{r}}), and **higher orbits are slower** ({{v ∝ 1/sqrt(r)}}).

Substituting {{v = (2 pi r) / T}} into {{v^2 = G M / r}} yields **Kepler's Third Law**:

{{(4 pi^2 r^2) / T^2 = (G M) / r}}  ⇒  {{T^2 = ((4 pi^2) / (G M)) r^3}}

Thus {{T^2 ∝ r^3}} for all satellites orbiting the same central mass {{M}}. Alongside his harmonic third law, Kepler's empirical laws also state that orbits are **ellipses** with the Sun at one focus (1st Law) and that a line joining a planet to the Sun sweeps out **equal areas in equal times** (2nd Law — planets move fastest at perihelion and slowest at aphelion, conserving angular momentum).`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Radial gravitational field lines pointing into a planet and a satellite in circular orbit with perpendicular velocity and centripetal gravitational force">
  <rect x="0" y="0" width="640" height="270" rx="14" fill="#0f172a"/>
  <text x="155" y="24" fill="#93c5fd" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Radial Gravitational Field (g = GM/r²)</text>
  <text x="475" y="24" fill="#86efac" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Circular Orbit (F_g = mv²/r)</text>
  <line x1="315" y1="18" x2="315" y2="252" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 5"/>
  <!-- Left panel: Radial field -->
  <g stroke="#60a5fa" stroke-width="2" fill="none">
    <line x1="155" y1="42" x2="155" y2="108"/>
    <line x1="155" y1="242" x2="155" y2="176"/>
    <line x1="55" y1="142" x2="121" y2="142"/>
    <line x1="255" y1="142" x2="189" y2="142"/>
    <line x1="84" y1="71" x2="131" y2="118"/>
    <line x1="226" y1="71" x2="179" y2="118"/>
    <line x1="84" y1="213" x2="131" y2="166"/>
    <line x1="226" y1="213" x2="179" y2="166"/>
  </g>
  <!-- Inward arrowheads -->
  <g fill="#60a5fa">
    <polygon points="155,100 150,89 160,89"/>
    <polygon points="155,184 150,195 160,195"/>
    <polygon points="113,142 102,137 102,147"/>
    <polygon points="197,142 208,137 208,147"/>
    <polygon points="124,111 113,107 119,100"/>
    <polygon points="186,111 197,107 191,100"/>
    <polygon points="124,173 113,177 119,184"/>
    <polygon points="186,173 197,177 191,184"/>
  </g>
  <circle cx="155" cy="142" r="32" fill="#1d4ed8" stroke="#93c5fd" stroke-width="2"/>
  <text x="155" y="147" fill="#ffffff" font-size="15" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">M</text>
  <text x="232" y="114" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Denser lines</text>
  <text x="232" y="128" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">= stronger g</text>
  <!-- Right panel: Circular orbit -->
  <circle cx="475" cy="146" r="84" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="6 5"/>
  <circle cx="475" cy="146" r="26" fill="#1e40af" stroke="#93c5fd" stroke-width="2"/>
  <text x="475" y="151" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">M</text>
  <!-- Radius r -->
  <line x1="475" y1="146" x2="534" y2="87" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="515" y="125" fill="#e2e8f0" font-size="12" font-weight="700" font-family="system-ui, sans-serif">r = R + h</text>
  <!-- Satellite at top-right (45 deg) -->
  <circle cx="534" cy="87" r="9" fill="#facc15" stroke="#fef08a" stroke-width="1.5"/>
  <text x="553" y="84" fill="#fef08a" font-size="12" font-weight="700" font-family="system-ui, sans-serif">m</text>
  <!-- Velocity vector (tangential, perpendicular to r) -->
  <line x1="534" y1="87" x2="492" y2="45" stroke="#4ade80" stroke-width="3"/>
  <polygon points="487,40 499,44 491,52" fill="#4ade80"/>
  <text x="466" y="47" fill="#4ade80" font-size="13" font-weight="700" font-family="system-ui, sans-serif">v</text>
  <!-- Centripetal gravitational force vector (inward) -->
  <line x1="534" y1="87" x2="499" y2="122" stroke="#f87171" stroke-width="3"/>
  <polygon points="494,127 506,123 498,115" fill="#f87171"/>
  <text x="424" y="106" fill="#fca5a5" font-size="12" font-weight="700" font-family="system-ui, sans-serif">F_g = GMm/r²</text>
  <!-- 90-degree angle marker -->
  <polyline points="525,78 518,85 525,92" fill="none" stroke="#fde047" stroke-width="1.5"/>
  <text x="475" y="252" fill="#cbd5e1" font-size="11.5" text-anchor="middle" font-family="system-ui, sans-serif">F_g ⊥ v at all times → constant speed, zero work done</text>
</svg>`,
      diagramCaption:
        "Left: Radial gravitational field lines converge on mass M (closer spacing near the surface indicates larger g). Right: In a circular orbit, the inward gravitational pull provides the exact centripetal force F_g = mv²/r perpendicular to velocity v.",
      workedExamples: [
        {
          title: "Orbital Field Strength, Speed & Period of the ISS",
          problem:
            "The ISS orbits Earth ({{M = 5.97 * 10^24}} kg, {{R_E = 6.37 * 10^6}} m) in a circular orbit at altitude {{h = 400}} km. Calculate (a) the gravitational field strength {{g}} at the ISS, (b) its orbital speed {{v}}, and (c) its orbital period {{T}} in minutes.",
          steps: [
            "Convert altitude to metres and measure centre-to-centre orbital radius: {{r = R_E + h = 6.37 * 10^6 + 0.40 * 10^6 = 6.77 * 10^6}} m.",
            "(a) Gravitational field strength: {{g = (G M) / r^2 = (6.67 * 10^(-11) * 5.97 * 10^24) / (6.77 * 10^6)^2 = (3.982 * 10^14) / (4.583 * 10^13) = 8.69}} N kg⁻¹.",
            "(b) Orbital speed: {{v = sqrt((G M) / r) = sqrt((3.982 * 10^14) / (6.77 * 10^6)) = sqrt(5.882 * 10^7) = 7669}} m s⁻¹ ≈ {{7.67 * 10^3}} m s⁻¹.",
            "(c) Orbital period: {{T = (2 pi r) / v = (2 pi * 6.77 * 10^6) / 7669 = 5546}} s = {{5546 / 60 = 92.4}} min.",
          ],
          answer: "{{g = 8.69}} N kg⁻¹, {{v = 7.67 * 10^3}} m s⁻¹, {{T = 92.4}} min",
          yourTurn: {
            question:
              "A planet has mass {{M = 6.40 * 10^23}} kg and radius {{R = 3.40 * 10^6}} m. Calculate its surface gravitational field strength {{g}} in N kg⁻¹ (to 3 s.f., using {{G = 6.67 * 10^(-11)}} N m² kg⁻²).",
            answer: { type: "number", value: 3.69, tolerance: 0.03, display: "3.69 N kg⁻¹" },
            solution:
              "{{g = (G M) / R^2 = (6.67 * 10^(-11) * 6.40 * 10^23) / (3.40 * 10^6)^2 = (4.269 * 10^13) / (1.156 * 10^13) = 3.69}} N kg⁻¹.",
          },
        },
        {
          title: "Kepler's Third Law Ratio Shortcut",
          problem:
            "Moon A orbits a gas giant at radius {{r_A = 2.0 * 10^5}} km with an orbital period of {{3.0}} days. Moon B orbits the same planet at radius {{r_B = 8.0 * 10^5}} km. Determine the orbital period of Moon B.",
          steps: [
            "Both moons orbit the same central mass {{M}}, so Kepler's Third Law gives {{T^2 / r^3 = " + '"constant"' + "}} — no need to know {{G}} or {{M}}!",
            "Form the ratio: {{(T_B / T_A)^2 = (r_B / r_A)^3 = (8.0 / 2.0)^3 = 4^3 = 64}}.",
            "Take the square root: {{T_B / T_A = sqrt(64) = 8}}.",
            "Multiply by {{T_A}}: {{T_B = 8 * 3.0 = 24}} days.",
          ],
          answer: "{{24}} days",
          yourTurn: {
            question:
              "A planet orbits a star at radius {{R}} with period {{2.0}} years. A second planet orbits the same star at radius {{9 R}}. Calculate its orbital period in years.",
            answer: { type: "number", value: 54, tolerance: 0.1, display: "54 years" },
            solution:
              "{{(T_2 / T_1)^2 = (9R / R)^3 = 9^3 = 729}}, so {{T_2 / T_1 = sqrt(729) = 27}}, giving {{T_2 = 27 * 2.0 = 54}} years.",
          },
        },
      ],
      keyPoints: [
        "Newton's universal gravitation {{F = (G m_1 m_2)/r^2}} applies to point masses and outside uniform spheres, with {{r}} measured **centre-to-centre**.",
        "Gravitational field strength {{g = F/m = G M/r^2}} is a vector pointing radially towards {{M}}; it depends only on the source mass and distance, never on the test mass {{m}}.",
        "Equating gravitational pull to centripetal force gives {{v = sqrt(G M/r)}} and Kepler's Third Law {{T^2 = (4 pi^2 / (G M)) r^3}}.",
        "A **geostationary** satellite orbits directly above the equator, moving west-to-east with period {{T = 24}} h ({{86 400}} s), staying fixed over one point on Earth.",
      ],
      whyItWorks:
        "Why does gravity obey an inverse-square law {{1/r^2}}? Imagine field lines spreading uniformly in 3D space from a point mass {{M}}. At distance {{r}}, the same fixed number of field lines pierces the surface of a sphere of area {{4 pi r^2}}. Because field strength is proportional to field-line flux density (lines per unit area), {{g ∝ 1/(4 pi r^2) ∝ 1/r^2}} — a direct consequence of living in three spatial dimensions!",
      strategies: [
        "**Ratio trick first:** Whenever a question compares two orbits around the same planet (or two planets with scaled mass/radius), divide the equations so {{G}} and {{4 pi^2}} cancel cleanly before touching your calculator.",
        "**Altitude trap check:** Always ask 'was I given orbital radius {{r}} or altitude {{h}} above the surface?' Add {{R}} immediately if given altitude.",
        "**Linearization for Paper 1B:** Plotting {{T^2}} against {{r^3}} gives a straight line through the origin with gradient {{4 pi^2 / (G M)}}, allowing you to weigh an unseen planet or star from its moons.",
      ],
      thinkDeeper:
        "Inside a uniform solid sphere of density {{ρ}}, only the mass enclosed inside radius {{r}} ({{M_enc = (4/3) pi r^3 ρ}}) produces a net gravitational force — the outer spherical shell cancels to zero! Therefore inside a uniform Earth, {{g(r) = (G M_enc)/r^2 = (4/3) pi G ρ r ∝ r}}, dropping linearly to zero at Earth's centre.",
    },

    // =========================================================================
    // SECTION 2 — HL
    // =========================================================================
    {
      id: "gravitational-electric-potentials-hl",
      heading: "D.1–D.2 Gravitational & Electric Potential, Equipotentials & Escape Speed",
      level: "HL",
      discovery: {
        problem:
          "A satellite sits in a circular orbit of radius {{r}} around a planet of mass {{M}}, moving at {{v_orb = sqrt(G M / r)}}. If its engines fire suddenly to escape the planet completely (reaching infinity with zero speed), by what exact factor must its speed increase — and does the required launch direction matter (as long as it doesn't hit the planet)?",
        idea:
          "Because energy is a **scalar**, the escape speed is {{v_esc = sqrt(2 G M / r) = sqrt(2) * v_orb ≈ 1.414 v_orb}} — just a 41.4% boost in speed doubles its kinetic energy and brings its total energy from {{-G M m/(2r)}} up to {{0}}! Ignoring air resistance, the launch angle does not change the required escape speed because gravitational potential energy depends only on {{r}}.",
      },
      body: `Forces and field strengths are vectors, which can become algebraically messy when paths curve or multiple sources interact. **Potential** and **potential energy** are **scalars**, making energy conservation vastly simpler.

### Gravitational Potential {{V_g}} & Potential Energy {{E_p}} (HL)
**Gravitational potential** at a point is defined as the **work done per unit mass** in bringing a small test mass from **infinity** to that point:

{{V_g = - (G M) / r}}    (unit: J kg⁻¹)

- **Why is {{V_g}} always negative?** Gravity is purely attractive, and we set {{V_g = 0}} at {{r = ∞}}. Because gravity *pulls* a test mass inward as it approaches from infinity, an external agent must hold it back (doing negative work) — equivalently, a mass near a planet sits inside a **gravitational potential well** and must be given positive energy to climb back out to zero at infinity.
- **Gravitational potential energy** of two masses {{M}} and {{m}} separated by {{r}}:

{{E_p = m V_g = - (G M m) / r}}

- **Work done** moving a mass {{m}} between two points: {{W = m ΔV_g = m(V_2 - V_1)}}. Moving outward ({{r_2 > r_1}}) makes {{V_g}} less negative, so {{ΔV_g > 0}} and positive work must be supplied.

### Orbital Energy & Escape Velocity (HL)
For a satellite in a circular orbit of radius {{r}}, substitute {{v^2 = G M / r}} into kinetic energy:

- Kinetic energy: {{E_k = (1/2) m v^2 = + (G M m) / (2 r)}}
- Potential energy: {{E_p = - (G M m) / r}}
- **Total mechanical energy:** {{E_T = E_k + E_p = - (G M m) / (2 r)}}

Notice the elegant ratios: {{E_T = -E_k = (1/2) E_p}}. Because {{E_T < 0}}, the satellite is **gravitationally bound**. Ironically, if atmospheric drag removes total energy (making {{E_T}} *more* negative), the orbit shrinks ({{r}} decreases) and the satellite's kinetic energy **increases** — drag actually makes a satellite speed up as it spirals inward!

To **escape** completely to infinity with minimum speed ({{E_k = 0}} and {{E_p = 0}} at {{r = ∞}}), conservation of energy requires {{E_T = 0}}:

{{(1/2) m v_esc^2 - (G M m) / r = 0}}  ⇒  {{v_esc = sqrt((2 G M) / r) = sqrt(2 g r)}}

### Electric Potential {{V_e}} & Potential Energy (HL)
**Electric potential** at a point is the **work done per unit positive charge** in bringing a small positive test charge from infinity to that point:

{{V_e = (k q) / r = q / (4 pi ε_0 r)}}    (unit: J C⁻¹ = V)

Unlike gravity, charge comes in two signs: {{V_e > 0}} near a positive source charge (positive work needed to push a positive test charge in against repulsion) and {{V_e < 0}} near a negative charge. For two point charges {{q_1}} and {{q_2}}:

{{E_p = q_2 V_e = (k q_1 q_2) / r}}   and   {{W = q ΔV_e}}

Because potential is a **scalar**, the net potential from multiple charges is simply the algebraic sum {{V_total = V_1 + V_2 + …}} (keeping the signs of the charges!).

### Field Strength as Negative Potential Gradient & Equipotentials (HL)
Field strength is the **negative spatial gradient** of potential:

{{g = - (ΔV_g) / (Δr)}}     and     {{E = - (ΔV_e) / (Δr)}}

The minus sign means field lines always point in the direction of **decreasing potential** ('downhill' in the potential landscape). An **equipotential surface** connects all points of identical potential:
1. **Zero work** is done moving a mass or charge along an equipotential surface ({{W = q ΔV = 0}}).
2. Field lines are always **perpendicular (90°)** to equipotential surfaces (if there were a tangential field component, moving along the surface would require work — contradiction!).
3. For equal potential steps {{ΔV}}, equipotential surfaces are **closer together** where the field is stronger and spread farther apart as {{r}} increases.`,
      diagram: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gravitational potential well graph V_g equals minus GM over r alongside concentric equipotential circles perpendicular to radial field lines">
  <rect x="0" y="0" width="640" height="280" rx="14" fill="#0f172a"/>
  <text x="165" y="24" fill="#93c5fd" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Potential Well: V_g = −GM / r</text>
  <text x="485" y="24" fill="#fde047" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Equipotentials ⊥ Field Lines</text>
  <line x1="330" y1="18" x2="330" y2="262" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 5"/>
  <!-- Left panel: Potential well graph -->
  <!-- Axes -->
  <line x1="48" y1="62" x2="312" y2="62" stroke="#cbd5e1" stroke-width="1.8"/>
  <polygon points="315,62 306,57 306,67" fill="#cbd5e1"/>
  <line x1="56" y1="45" x2="56" y2="246" stroke="#cbd5e1" stroke-width="1.8"/>
  <text x="308" y="52" fill="#e2e8f0" font-size="12" font-weight="700" font-family="system-ui, sans-serif">r</text>
  <text x="38" y="66" fill="#e2e8f0" font-size="11" font-weight="700" font-family="system-ui, sans-serif">0</text>
  <text x="26" y="155" fill="#93c5fd" font-size="12" font-weight="700" font-family="system-ui, sans-serif">V_g</text>
  <text x="20" y="170" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">(−)</text>
  <!-- Planet surface marker R -->
  <line x1="92" y1="62" x2="92" y2="236" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="92" y="54" fill="#facc15" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">R</text>
  <!-- Potential well curve V_g = -GM/r for r >= R -->
  <path d="M 92 226 C 110 155, 145 104, 200 84 C 242 71, 278 68, 308 66" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <!-- Tangent gradient triangle -->
  <line x1="115" y1="176" x2="185" y2="96" stroke="#f87171" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="130" y1="159" x2="170" y2="159" stroke="#facc15" stroke-width="1.5"/>
  <line x1="170" y1="159" x2="170" y2="113" stroke="#facc15" stroke-width="1.5"/>
  <text x="150" y="173" fill="#facc15" font-size="10.5" text-anchor="middle" font-family="system-ui, sans-serif">Δr</text>
  <text x="186" y="140" fill="#facc15" font-size="10.5" font-family="system-ui, sans-serif">ΔV_g</text>
  <text x="234" y="122" fill="#fca5a5" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">gradient = ΔV_g/Δr</text>
  <text x="234" y="137" fill="#fca5a5" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">g = −ΔV_g/Δr</text>
  <!-- Orbital energy note -->
  <rect x="108" y="202" width="206" height="48" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="211" y="220" fill="#86efac" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Bound orbit: E_T = −GMm/(2r) &lt; 0</text>
  <text x="211" y="238" fill="#fde047" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Escape: E_T = 0 ⇒ v_esc = √(2GM/r)</text>
  <!-- Right panel: Concentric equipotentials (spacing increases outward!) -->
  <circle cx="485" cy="146" r="42" fill="none" stroke="#facc15" stroke-width="1.8" stroke-dasharray="5 4"/>
  <circle cx="485" cy="146" r="64" fill="none" stroke="#facc15" stroke-width="1.8" stroke-dasharray="5 4"/>
  <circle cx="485" cy="146" r="98" fill="none" stroke="#facc15" stroke-width="1.8" stroke-dasharray="5 4"/>
  <!-- Radial field lines -->
  <g stroke="#60a5fa" stroke-width="1.8">
    <line x1="485" y1="36" x2="485" y2="124"/>
    <line x1="485" y1="256" x2="485" y2="168"/>
    <line x1="375" y1="146" x2="463" y2="146"/>
    <line x1="595" y1="146" x2="507" y2="146"/>
    <line x1="408" y1="69" x2="469" y2="130"/>
    <line x1="562" y1="69" x2="501" y2="130"/>
    <line x1="408" y1="223" x2="469" y2="162"/>
    <line x1="562" y1="223" x2="501" y2="162"/>
  </g>
  <g fill="#60a5fa">
    <polygon points="485,112 481,102 489,102"/>
    <polygon points="485,180 481,190 489,190"/>
    <polygon points="451,146 441,142 441,150"/>
    <polygon points="519,146 529,142 529,150"/>
  </g>
  <circle cx="485" cy="146" r="22" fill="#1d4ed8" stroke="#93c5fd" stroke-width="2"/>
  <text x="485" y="151" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">M</text>
  <!-- Potential labels -->
  <text x="530" y="134" fill="#fde047" font-size="10" font-weight="700" font-family="system-ui, sans-serif">−30</text>
  <text x="553" y="134" fill="#fde047" font-size="10" font-weight="700" font-family="system-ui, sans-serif">−20</text>
  <text x="586" y="134" fill="#fde047" font-size="10" font-weight="700" font-family="system-ui, sans-serif">−10 MJ/kg</text>
  <text x="485" y="268" fill="#cbd5e1" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Equal ΔV steps space farther apart as g weakens</text>
</svg>`,
      diagramCaption:
        "Left: The gravitational potential well V_g = −GM/r approaches zero at infinity; its positive slope ΔV_g/Δr equals the magnitude of g (with g pointing inward). Right: Concentric equipotential circles for equal steps of ΔV widen outward and always cross radial field lines at 90°.",
      workedExamples: [
        {
          title: "Surface Gravitational Potential & Escape Speed of Mars (HL)",
          problem:
            "Mars has mass {{M = 6.42 * 10^23}} kg and radius {{R = 3.39 * 10^6}} m. Calculate (a) the gravitational potential {{V_g}} at the Martian surface, and (b) the escape velocity {{v_esc}} from the surface.",
          steps: [
            "(a) Surface gravitational potential: {{V_g = -(G M) / R = -(6.67 * 10^(-11) * 6.42 * 10^23) / (3.39 * 10^6)}}.",
            "{{V_g = -(4.282 * 10^13) / (3.39 * 10^6) = -1.263 * 10^7}} J kg⁻¹ ≈ {{-1.26 * 10^7}} J kg⁻¹.",
            "(b) For escape, {{(1/2) m v_esc^2 + m V_g = 0 ⇒ v_esc = sqrt(-2 V_g)}}.",
            "{{v_esc = sqrt(2 * 1.263 * 10^7) = sqrt(2.526 * 10^7) = 5026}} m s⁻¹ ≈ {{5.03 * 10^3}} m s⁻¹ ({{5.03}} km s⁻¹).",
          ],
          answer: "{{V_g = -1.26 * 10^7}} J kg⁻¹, {{v_esc = 5.03 * 10^3}} m s⁻¹",
          yourTurn: {
            question:
              "A {{500}} kg probe moves from a point where {{V_g = -5.0 * 10^7}} J kg⁻¹ to a point where {{V_g = -2.0 * 10^7}} J kg⁻¹. Calculate the minimum work done against gravity in GJ ({{10^9}} J).",
            answer: { type: "number", value: 15, tolerance: 0.1, display: "15 GJ" },
            solution:
              "{{ΔV_g = (-2.0 * 10^7) - (-5.0 * 10^7) = +3.0 * 10^7}} J kg⁻¹. Work done {{W = m ΔV_g = 500 * 3.0 * 10^7 = 1.5 * 10^10}} J = {{15}} GJ.",
          },
        },
        {
          title: "Scalar Superposition of Electric Potential (HL)",
          problem:
            "Point charges {{q_1 = +4.0}} μC and {{q_2 = -2.0}} μC are separated by {{0.60}} m in vacuum. Calculate the electric potential at the midpoint between them.",
          steps: [
            "Distance from each charge to the midpoint is {{r = 0.30}} m.",
            "Electric potential is a scalar, so add {{V_1 + V_2}} algebraically (no vector arrows needed!): {{V_e = (k q_1) / r + (k q_2) / r = (k (q_1 + q_2)) / r}}.",
            "{{q_1 + q_2 = (+4.0 - 2.0) * 10^(-6) = +2.0 * 10^(-6)}} C.",
            "{{V_e = (8.99 * 10^9 * 2.0 * 10^(-6)) / 0.30 = 5.99 * 10^4}} V ≈ {{6.0 * 10^4}} V.",
          ],
          answer: "{{+6.0 * 10^4}} V",
          yourTurn: {
            question:
              "Two parallel equipotential lines {{2.0}} cm apart have electric potentials {{+120}} V and {{+40}} V. Calculate the magnitude of the uniform electric field strength between them in V m⁻¹.",
            answer: { type: "number", value: 4000, tolerance: 10, display: "4000 V m⁻¹" },
            solution:
              "{{E = |-ΔV_e / Δr| = (120 - 40) / 0.020 = 80 / 0.020 = 4000}} V m⁻¹ (pointing from the {{+120}} V line towards the {{+40}} V line).",
          },
        },
      ],
      keyPoints: [
        "Gravitational potential {{V_g = -G M / r}} is always **negative** (zero at infinity); electric potential {{V_e = k q / r}} carries the sign of {{q}}.",
        "For a circular orbit: {{E_k = +G M m/(2r)}}, {{E_p = -G M m/r}}, and {{E_T = -G M m/(2r)}}.",
        "Escape velocity {{v_esc = sqrt(2 G M / r) = sqrt(2) * v_orb}} is independent of the escaping object's mass and launch direction.",
        "Field strength equals negative potential gradient: {{g = -ΔV_g / Δr}} and {{E = -ΔV_e / Δr}}; equipotential surfaces are always perpendicular to field lines.",
      ],
      whyItWorks:
        "Why is {{g = -ΔV_g / Δr}}? Moving a test mass {{m}} a tiny distance {{Δr}} in a field {{g}} requires an external agent to push with force {{-m g}} (opposing the field), doing work {{ΔW = (-m g) Δr}}. Dividing by {{m}} gives {{ΔV_g = -g Δr}}, hence {{g = -ΔV_g / Δr}}. The identical derivation with {{q E}} yields {{E = -ΔV_e / Δr}}!",
      strategies: [
        "**Scalar vs vector discipline:** Never resolve potentials into {{x}} and {{y}} components! Add potentials algebraically with their signs, whereas forces and fields ({{g, E}}) MUST be added as vectors.",
        "**Factor-of-2 check:** Potential {{V_g}} scales as {{1/r}} while field {{g}} scales as {{1/r^2}}; escape speed has a **2** inside the root ({{sqrt(2 G M / r)}}), while circular orbital speed has **1** ({{sqrt(G M / r)}}).",
        "**Reading equipotential maps:** Where equipotential contours crowd tightly together, {{|ΔV / Δr|}} is large → the field is strongest there, always pointing from higher (more positive / less negative) potential to lower potential.",
      ],
      thinkDeeper:
        "Between Earth and the Moon lies a neutral point where the vector gravitational fields cancel ({{g_E = g_M}}). At that exact point, is the gravitational potential {{V_g}} zero? No! Because both {{V_E}} and {{V_M}} are negative scalars, they add to a negative local **maximum** (a 'saddle ridge' between two potential wells), where the gradient {{ΔV_g / Δr = 0}}.",
    },

    // =========================================================================
    // SECTION 3 — SL
    // =========================================================================
    {
      id: "electric-magnetic-fields",
      heading: "D.2 Coulomb's Law, Electric Field Lines & Magnetic Fields",
      level: "SL",
      discovery: {
        problem:
          "Compare the electrostatic repulsion {{F_e}} and gravitational attraction {{F_g}} between two protons separated by any distance {{r}} ({{m_p = 1.67 * 10^(-27)}} kg, {{e = 1.60 * 10^(-19)}} C). Notice that {{r^2}} cancels out! Roughly how many orders of magnitude stronger is the electric force than gravity?",
        idea:
          "{{F_e / F_g = (k e^2) / (G m_p^2) = (8.99 * 10^9 * (1.60 * 10^(-19))^2) / (6.67 * 10^(-11) * (1.67 * 10^(-27))^2) ≈ 1.2 * 10^36}}! Electricity is {{10^36}} times stronger than gravity — yet gravity dominates planets and stars because positive and negative charges almost perfectly cancel on macroscopic scales, whereas mass only ever adds!",
      },
      body: `### Charge Conservation, Quantization & Coulomb's Law
Electric charge is **conserved** (net charge in an isolated system never changes) and **quantized** in integer multiples of the elementary charge {{e = 1.60 * 10^(-19)}} C ({{q = n e}}).

Two point charges {{q_1}} and {{q_2}} separated by distance {{r}} in vacuum exert equal and opposite forces (Newton's 3rd law) given by **Coulomb's Law**:

{{F = (k q_1 q_2) / r^2 = (q_1 q_2) / (4 pi ε_0 r^2)}}

where {{k = 8.99 * 10^9}} N m² C⁻² and {{ε_0 = 8.85 * 10^(-12)}} C² N⁻¹ m⁻² is the permittivity of free space. If the charges sit inside an insulating medium (dielectric) of permittivity {{ε > ε_0}}, the force decreases by the factor {{ε_0 / ε}}. Like charges repel; unlike charges attract.

### Electric Field Strength & Field Line Maps
**Electric field strength** {{E}} at a point is the **electric force per unit positive test charge** placed at that point:

{{E = F / q}}    (units: N C⁻¹ ≡ V m⁻¹)

- **Point charge (radial field):** {{E = (k Q) / r^2}}. Arrows radiate **outward** from positive charges and **inward** towards negative charges.
- **Uniform parallel plates:** Two large parallel conducting plates separated by distance {{d}} with potential difference {{V}} produce a uniform field (ignoring slight edge fringing):

{{E = V / d}}

- **Field line rules:** Lines start on positive charges (or infinity) and end on negative charges (or infinity); lines **never cross** (a point cannot have two field directions); line density shows field magnitude; lines always meet conducting surfaces at **90°**.

### Millikan's Oil-Drop Experiment
Robert Millikan sprayed tiny charged oil droplets between horizontal parallel plates. By tuning the voltage {{V}} until a droplet hovered stationary (zero acceleration), the upward electric force balanced its weight:

{{q E = m g}}  ⇒  {{q (V / d) = m g}}  ⇒  {{q = (m g d) / V}}

Measuring hundreds of droplets revealed that every charge {{q}} was an integer multiple of {{1.60 * 10^(-19)}} C, proving **charge quantization**.

### Magnetic Fields & Field Patterns
Magnetic fields (flux density {{B}}, unit **tesla**, T) are created by **moving charges** (electric currents and electron spin inside permanent magnets). Unlike electric charges, isolated magnetic monopoles have never been observed — every magnet has both North and South poles, so magnetic field lines always form **closed loops** (running N → S outside a bar magnet and S → N inside it).

Key magnetic field patterns to recognise and sketch:
- **Straight current-carrying wire:** Concentric circles centred on the wire (spacing increases outward as {{B ∝ 1/r}}). Direction from the **right-hand grip rule**: thumb along conventional current {{I}}, curled fingers show {{B}}.
- **Flat circular coil:** Field lines loop around the wire and reinforce along the central axis.
- **Long solenoid:** Field lines inside are parallel, straight and equally spaced (**uniform field**), while outside the pattern mimics a bar magnet. Curl right-hand fingers in the current direction → thumb points to the solenoid's **North** pole.`,
      diagram: `<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electric dipole field lines between positive and negative point charges and a uniform electric field between parallel plates suspending a Millikan oil drop">
  <rect x="0" y="0" width="640" height="275" rx="14" fill="#0f172a"/>
  <text x="160" y="24" fill="#fca5a5" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Electric Dipole Field (+q to −q)</text>
  <text x="480" y="24" fill="#86efac" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Uniform Field (E = V/d) &amp; Oil Drop</text>
  <line x1="320" y1="18" x2="320" y2="258" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 5"/>
  <!-- Left panel: Electric dipole -->
  <g stroke="#38bdf8" stroke-width="1.8" fill="none">
    <!-- Center straight line -->
    <line x1="100" y1="145" x2="220" y2="145"/>
    <!-- Upper/lower curved arcs -->
    <path d="M 96 130 C 125 88, 195 88, 224 130"/>
    <path d="M 96 160 C 125 202, 195 202, 224 160"/>
    <path d="M 86 125 C 105 45, 215 45, 234 125"/>
    <path d="M 86 165 C 105 245, 215 245, 234 165"/>
    <!-- Outer rays -->
    <line x1="64" y1="145" x2="28" y2="145"/>
    <path d="M 70 130 Q 45 96, 30 74"/>
    <path d="M 70 160 Q 45 194, 30 216"/>
    <line x1="256" y1="145" x2="292" y2="145"/>
    <path d="M 250 130 Q 275 96, 290 74"/>
    <path d="M 250 160 Q 275 194, 290 216"/>
  </g>
  <!-- Arrows leaving + and entering - -->
  <g fill="#38bdf8">
    <polygon points="166,145 155,140 155,150"/>
    <polygon points="166,99 155,94 155,104"/>
    <polygon points="166,191 155,186 155,196"/>
    <polygon points="166,65 155,60 155,70"/>
    <polygon points="166,225 155,220 155,230"/>
    <polygon points="36,145 47,140 47,150"/>
    <polygon points="274,145 285,140 285,150"/>
  </g>
  <circle cx="82" cy="145" r="18" fill="#dc2626" stroke="#fca5a5" stroke-width="2"/>
  <text x="82" y="151" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">+q</text>
  <circle cx="238" cy="145" r="18" fill="#2563eb" stroke="#93c5fd" stroke-width="2"/>
  <text x="238" y="151" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">−q</text>
  <text x="160" y="260" fill="#cbd5e1" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Direction = force on a positive test charge</text>
  <!-- Right panel: Parallel plates + Millikan oil drop -->
  <!-- Top plate (+V) -->
  <rect x="365" y="52" width="230" height="12" rx="3" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="605" y="62" fill="#fca5a5" font-size="12" font-weight="700" font-family="system-ui, sans-serif">+V</text>
  <!-- Bottom plate (0 V) -->
  <rect x="365" y="218" width="230" height="12" rx="3" fill="#2563eb" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="605" y="228" fill="#93c5fd" font-size="12" font-weight="700" font-family="system-ui, sans-serif">0 V</text>
  <!-- Uniform E-field lines -->
  <g stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 3">
    <line x1="395" y1="64" x2="395" y2="218"/>
    <line x1="435" y1="64" x2="435" y2="218"/>
    <line x1="525" y1="64" x2="525" y2="218"/>
    <line x1="565" y1="64" x2="565" y2="218"/>
  </g>
  <g fill="#38bdf8">
    <polygon points="395,146 390,135 400,135"/>
    <polygon points="435,146 430,135 440,135"/>
    <polygon points="525,146 520,135 530,135"/>
    <polygon points="565,146 560,135 570,135"/>
  </g>
  <text x="405" y="102" fill="#38bdf8" font-size="12" font-weight="700" font-family="system-ui, sans-serif">E</text>
  <!-- Separation d -->
  <line x1="348" y1="64" x2="348" y2="218" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="343" y1="64" x2="353" y2="64" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="343" y1="218" x2="353" y2="218" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="339" y="145" fill="#e2e8f0" font-size="12" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">d</text>
  <!-- Suspended negative oil drop -->
  <circle cx="480" cy="141" r="12" fill="#facc15" stroke="#fef08a" stroke-width="2"/>
  <text x="480" y="146" fill="#0f172a" font-size="13" font-weight="800" text-anchor="middle" font-family="system-ui, sans-serif">−q</text>
  <!-- Upward electric force -->
  <line x1="480" y1="129" x2="480" y2="85" stroke="#4ade80" stroke-width="3"/>
  <polygon points="480,78 474,90 486,90" fill="#4ade80"/>
  <text x="490" y="96" fill="#4ade80" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">F_e = qE</text>
  <!-- Downward weight -->
  <line x1="480" y1="153" x2="480" y2="197" stroke="#f87171" stroke-width="3"/>
  <polygon points="480,204 474,192 486,192" fill="#f87171"/>
  <text x="490" y="196" fill="#fca5a5" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">W = mg</text>
  <text x="480" y="256" fill="#cbd5e1" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Equilibrium: qV/d = mg → q = ne</text>
</svg>`,
      diagramCaption:
        "Left: Electric field lines leave +q and terminate on −q; they never cross. Right: Between charged parallel plates E = V/d is uniform; a negatively charged Millikan oil drop hovers when upward electric force qE equals downward weight mg.",
      workedExamples: [
        {
          title: "Millikan Oil-Drop Quantization Calculation",
          problem:
            "An oil drop of mass {{3.2 * 10^(-15)}} kg is suspended motionless between two horizontal parallel plates {{1.0}} cm apart when the upper plate is {{+981}} V relative to the lower plate. Using {{g = 9.81}} m s⁻², find the charge on the oil drop and state how many excess electrons it carries.",
          steps: [
            "Convert separation to metres: {{d = 1.0 * 10^(-2)}} m. Uniform field strength: {{E = V / d = 981 / 0.010 = 9.81 * 10^4}} V m⁻¹ (pointing downwards).",
            "For the drop to hover against gravity, the electric force must act **upwards** — opposite to {{E}} — so the drop is **negatively** charged.",
            "Equilibrium: {{q E = m g ⇒ q = (m g) / E = (3.2 * 10^(-15) * 9.81) / (9.81 * 10^4) = 3.2 * 10^(-19)}} C.",
            "Number of excess electrons: {{n = q / e = (3.2 * 10^(-19)) / (1.60 * 10^(-19)) = 2}}.",
          ],
          answer: "{{-3.2 * 10^(-19)}} C ({{2}} excess electrons)",
          yourTurn: {
            question:
              "Two parallel metal plates {{2.5}} cm apart have a potential difference of {{500}} V between them. Calculate the uniform electric field strength between the plates in V m⁻¹.",
            answer: { type: "number", value: 20000, tolerance: 10, display: "20000 V m⁻¹" },
            solution:
              "{{d = 0.025}} m, so {{E = V / d = 500 / 0.025 = 20 000}} V m⁻¹ ({{2.0 * 10^4}} V m⁻¹).",
          },
        },
        {
          title: "Zero-Field Point Between Two Positive Charges",
          problem:
            "Two point charges {{q_1 = +3.0}} μC and {{q_2 = +12.0}} μC are fixed {{0.30}} m apart. Find the distance {{x}} from {{q_1}} along the line joining them where the net electric field is zero.",
          steps: [
            "Between two positive charges, the two electric field vectors point in opposite directions, so they cancel where {{E_1 = E_2}}.",
            "{{(k q_1) / x^2 = (k q_2) / (0.30 - x)^2}}.",
            "Cancel {{k}} and rearrange: {{((0.30 - x) / x)^2 = q_2 / q_1 = 12.0 / 3.0 = 4}}.",
            "Take the positive square root (since {{0 < x < 0.30}}): {{(0.30 - x) / x = 2 ⇒ 0.30 - x = 2x ⇒ 3x = 0.30 ⇒ x = 0.10}} m.",
          ],
          answer: "{{0.10}} m from {{q_1}}",
          yourTurn: {
            question:
              "Two point charges repel each other with a force of {{36}} N at distance {{r}}. If both charges remain unchanged and the distance is tripled to {{3r}}, calculate the new repulsive force in N.",
            answer: { type: "number", value: 4, tolerance: 0.05, display: "4 N" },
            solution:
              "By Coulomb's inverse-square law {{F ∝ 1/r^2}}, tripling {{r}} reduces the force by a factor of {{3^2 = 9}}: {{F' = 36 / 9 = 4}} N.",
          },
        },
      ],
      keyPoints: [
        "Coulomb's law {{F = k q_1 q_2 / r^2}} obeys Newton's 3rd law: even if {{q_1 = 100 q_2}}, both charges experience **equal magnitude** forces in opposite directions.",
        "Electric field strength {{E = F / q}} points in the direction of the force on a **positive** test charge; negative charges accelerate **opposite** to {{E}}.",
        "Between parallel plates, {{E = V / d}} is uniform everywhere inside (constant force on a charge regardless of its position between the plates).",
        "Magnetic field lines always form closed loops; use the **right-hand grip rule** for straight wires (thumb = current, fingers = {{B}}) and solenoids (fingers = current, thumb = North).",
      ],
      whyItWorks:
        "Why does {{E = V / d}} hold for parallel plates? Moving a charge {{q}} across the full gap {{d}} against a constant electric force {{F = q E}} requires work {{W = F d = q E d}}. By the definition of potential difference, {{V = W / q = (q E d) / q = E d}}, so {{E = V / d}} — confirming that N C⁻¹ and V m⁻¹ are the exact same unit!",
      strategies: [
        "**Sign check in Coulomb's law:** Use magnitudes to calculate {{F}} and {{E}}, then draw arrows by hand ('like repel, unlike attract'; 'away from +, towards −') before adding or subtracting vectors.",
        "**Square-root shortcut for zero-field points:** Never expand a quadratic when solving {{q_1/x^2 = q_2/(d-x)^2}} — take the square root of both sides immediately!",
        "**Distinguish E-fields from B-fields:** Stationary charges feel electric forces ({{F = qE}}), never magnetic forces; magnetic fields act only on **moving** charges or currents.",
      ],
      thinkDeeper:
        "Why does a neutral balloon stick to a wall after being rubbed on your jumper? The charged balloon creates a non-uniform electric field that **polarises** the wall's surface atoms: opposite bound charges sit microscopically closer to the balloon than like bound charges. Because Coulomb's law decays as {{1/r^2}}, the slightly closer attraction beats the slightly farther repulsion!",
    },

    // =========================================================================
    // SECTION 4 — SL
    // =========================================================================
    {
      id: "motion-em-fields",
      heading: "D.3 Motion of Charges & Currents in Electromagnetic Fields",
      level: "SL",
      discovery: {
        problem:
          "A proton enters a uniform magnetic field at right angles to the field lines. Because the magnetic force is always perpendicular to the proton's velocity, what shape is its path — and if you inject a second proton with **twice the speed**, does it take more time, less time, or the exact same time to complete one full circle?",
        idea:
          "The proton follows a **circle** of radius {{r = m v / (q B)}} because a constant-magnitude force perpendicular to velocity acts as a centripetal force (doing zero work, so speed stays constant). Doubling {{v}} doubles the circumference {{2 pi r}} AND doubles the speed {{v}} — so the time for one orbit {{T = (2 pi r) / v = (2 pi m) / (q B)}} is **completely independent of speed**! That remarkable constancy is why cyclotrons work.",
      },
      body: `### Magnetic Force on a Moving Charge
A particle of charge {{q}} moving at velocity {{v}} at angle {{θ}} to a uniform magnetic field {{B}} experiences a magnetic Lorentz force of magnitude:

{{F = q v B sin θ}}

- If the charge is stationary ({{v = 0}}) or moves parallel/antiparallel to {{B}} ({{θ = 0°}} or {{180°}}), {{F = 0}}.
- The direction of {{F}} is perpendicular to **both** {{v}} and {{B}}, found using **Fleming's Left-Hand Rule**: **F**irst finger = **F**ield ({{B}}), se**C**ond finger = conventional **C**urrent (direction of **positive** charge velocity), thu**M**b = **M**otion / Force ({{F}}). **Crucial:** for an electron or negative ion, point your second finger **opposite** to its velocity!

### Circular Cyclotron Motion & Zero Work Done
Because {{F}} is always perpendicular to velocity {{v}}, the magnetic force does **zero work** ({{W = F s cos 90° = 0}}). Therefore a static magnetic field can change a particle's **direction**, never its **speed** or **kinetic energy**.

When a charge enters perpendicular to a uniform magnetic field ({{θ = 90°}}), the magnetic force provides the centripetal force:

{{q v B = (m v^2) / r}}  ⇒  {{r = (m v) / (q B)}}  and  {{T = (2 pi r) / v = (2 pi m) / (q B)}}

(If a particle enters at an oblique angle {{0° < θ < 90°}}, its parallel component {{v cos θ}} drifts steadily along {{B}} while its perpendicular component {{v sin θ}} circles, tracing a **helix** — the exact mechanism behind Earth's Van Allen radiation belts and the Aurora Borealis.)

### Velocity Selector & Bainbridge Mass Spectrometer
Suppose a beam of ions with many speeds enters a region of **crossed** (perpendicular) uniform electric field {{E}} and magnetic field {{B}} arranged so the electric force {{F_e = q E}} and magnetic force {{F_B = q v B}} pull in opposite directions. Only ions travelling at the exact speed where the forces balance pass straight through the exit slit undeflected:

{{q E = q v B}}  ⇒  {{v = E / B}}

Notice that both {{q}} and {{m}} cancel — the selector filters purely by speed! Next, the mono-energetic ions enter a uniform deflection field {{B'}} where they travel in semicircles of radius:

{{r = (m v) / (q B')}}  ⇒  {{r ∝ m / q}}

Heavier isotopes trace larger circles and hit the detector farther from the slit, separating isotopes with pinpoint precision (distance between two isotope strikes on the detector equals the difference in **diameters**, {{Δd = 2(r_2 - r_1)}}).

### Magnetic Force on Currents & Parallel Wires
A straight conductor of length {{L}} carrying current {{I}} at angle {{θ}} to a uniform field {{B}} contains moving charges whose summed Lorentz forces give:

{{F = B I L sin θ}}

Two long, parallel wires separated by distance {{r}} carrying currents {{I_1}} and {{I_2}} each sit in the circular magnetic field created by the other wire ({{B_1 = μ_0 I_1 / (2 pi r)}}). Substituting into {{F = B_1 I_2 L}} gives the **force per unit length**:

{{F / L = (μ_0 I_1 I_2) / (2 pi r)}}

where {{μ_0 = 4 pi * 10^(-7)}} T m A⁻¹ (so {{μ_0 / (2 pi) = 2.00 * 10^(-7)}} N A⁻²). Using the right-hand grip rule and Fleming's left-hand rule:
- **Same direction** (parallel currents) → wires **attract**.
- **Opposite directions** (antiparallel currents) → wires **repel**.
- By Newton's 3rd law, both wires experience equal-magnitude, opposite forces even when {{I_1 != I_2}}.`,
      diagram: `<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bainbridge mass spectrometer showing a crossed electric and magnetic velocity selector feeding into a uniform magnetic deflection chamber separating two isotope masses">
  <rect x="0" y="0" width="640" height="275" rx="14" fill="#0f172a"/>
  <text x="160" y="22" fill="#93c5fd" font-size="12.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">1. Velocity Selector (v = E/B)</text>
  <text x="480" y="22" fill="#86efac" font-size="12.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">2. Magnetic Deflection (r = mv / qB)</text>
  <!-- Left region: Velocity selector plates -->
  <rect x="78" y="64" width="190" height="10" rx="2" fill="#dc2626" stroke="#fca5a5" stroke-width="1.2"/>
  <text x="173" y="57" fill="#fca5a5" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">+ Plate</text>
  <rect x="78" y="196" width="190" height="10" rx="2" fill="#2563eb" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="173" y="222" fill="#93c5fd" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">− Plate</text>
  <!-- Downward E arrows inside selector -->
  <g stroke="#f87171" stroke-width="1.4" stroke-dasharray="3 3">
    <line x1="115" y1="74" x2="115" y2="196"/>
    <line x1="230" y1="74" x2="230" y2="196"/>
  </g>
  <g fill="#f87171">
    <polygon points="115,108 111,99 119,99"/>
    <polygon points="230,108 226,99 234,99"/>
  </g>
  <text x="103" y="102" fill="#fca5a5" font-size="11" font-weight="700" font-family="system-ui, sans-serif">E</text>
  <!-- B-field into page crosses in selector -->
  <g stroke="#38bdf8" stroke-width="1.4" fill="none">
    <circle cx="145" cy="94" r="6"/><line x1="141" y1="90" x2="149" y2="98"/><line x1="149" y1="90" x2="141" y2="98"/>
    <circle cx="200" cy="94" r="6"/><line x1="196" y1="90" x2="204" y2="98"/><line x1="204" y1="90" x2="196" y2="98"/>
    <circle cx="145" cy="176" r="6"/><line x1="141" y1="172" x2="149" y2="180"/><line x1="149" y1="172" x2="141" y2="180"/>
    <circle cx="200" cy="176" r="6"/><line x1="196" y1="172" x2="204" y2="180"/><line x1="204" y1="172" x2="196" y2="180"/>
  </g>
  <text x="202" y="114" fill="#38bdf8" font-size="10.5" font-weight="700" font-family="system-ui, sans-serif">B (into page)</text>
  <!-- Ion beam straight through selector -->
  <line x1="24" y1="135" x2="310" y2="135" stroke="#facc15" stroke-width="2.6"/>
  <polygon points="96,135 85,130 85,140" fill="#facc15"/>
  <text x="38" y="126" fill="#fde047" font-size="11" font-weight="700" font-family="system-ui, sans-serif">+q beam</text>
  <!-- Balanced forces on +q inside selector -->
  <circle cx="173" cy="135" r="7" fill="#facc15"/>
  <line x1="173" y1="128" x2="173" y2="98" stroke="#4ade80" stroke-width="2.5"/>
  <polygon points="173,92 168,102 178,102" fill="#4ade80"/>
  <text x="173" y="88" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">F_B = qvB</text>
  <line x1="173" y1="142" x2="173" y2="172" stroke="#f87171" stroke-width="2.5"/>
  <polygon points="173,178 168,168 178,168" fill="#f87171"/>
  <text x="173" y="191" fill="#fca5a5" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">F_e = qE</text>
  <!-- Collimating slit wall -->
  <rect x="298" y="40" width="12" height="86" fill="#64748b"/>
  <rect x="298" y="144" width="12" height="106" fill="#64748b"/>
  <text x="304" y="264" fill="#cbd5e1" font-size="10.5" text-anchor="middle" font-family="system-ui, sans-serif">Slit &amp; Detector</text>
  <!-- Right region: Uniform B into page -->
  <rect x="310" y="40" width="310" height="210" fill="#1e293b" fill-opacity="0.45" stroke="#334155"/>
  <g stroke="#38bdf8" stroke-width="1.3" fill="none" opacity="0.75">
    <circle cx="355" cy="72" r="5"/><line x1="352" y1="69" x2="358" y2="75"/><line x1="358" y1="69" x2="352" y2="75"/>
    <circle cx="430" cy="72" r="5"/><line x1="427" y1="69" x2="433" y2="75"/><line x1="433" y1="69" x2="427" y2="75"/>
    <circle cx="515" cy="72" r="5"/><line x1="512" y1="69" x2="518" y2="75"/><line x1="518" y1="69" x2="512" y2="75"/>
    <circle cx="585" cy="72" r="5"/><line x1="582" y1="69" x2="588" y2="75"/><line x1="588" y1="69" x2="582" y2="75"/>
    <circle cx="515" cy="145" r="5"/><line x1="512" y1="142" x2="518" y2="148"/><line x1="518" y1="142" x2="512" y2="148"/>
    <circle cx="585" cy="145" r="5"/><line x1="582" y1="142" x2="588" y2="148"/><line x1="588" y1="142" x2="582" y2="148"/>
    <circle cx="515" cy="215" r="5"/><line x1="512" y1="212" x2="518" y2="218"/><line x1="518" y1="212" x2="512" y2="218"/>
    <circle cx="585" cy="215" r="5"/><line x1="582" y1="212" x2="588" y2="218"/><line x1="588" y1="212" x2="582" y2="218"/>
  </g>
  <!-- Semicircular paths (B into page, +q moving right => F_B upward, so curves UP and back to detector on slit wall) -->
  <!-- Wait: make slit at y=200 or draw semicircles curving UP from y=135! Wait: if slit is at y=135 and radius is 38 and 62? Top wall is at y=40, 135 - 2*38 = 59 (fits!), 135 - 2*62 = 11 (too high!). Let's make radii 30 and 45! -->
  <!-- Wait: with r1=26 (diameter 52: y=135 to y=83) and r2=42 (diameter 84: y=135 to y=51) — BOTH fit inside y=40..250! -->
  <path d="M 310 135 A 26 26 0 0 0 310 83" fill="none" stroke="#4ade80" stroke-width="3"/>
  <path d="M 310 135 A 44 44 0 0 0 310 47" fill="none" stroke="#facc15" stroke-width="3"/>
  <circle cx="310" cy="83" r="4.5" fill="#4ade80"/>
  <circle cx="310" cy="47" r="4.5" fill="#facc15"/>
  <text x="372" y="106" fill="#4ade80" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Lighter ion m₁ (r₁)</text>
  <text x="386" y="64" fill="#fde047" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Heavier ion m₂ (r₂)</text>
  <rect x="332" y="176" width="268" height="58" rx="8" fill="#0f172a" stroke="#334155"/>
  <text x="466" y="197" fill="#e2e8f0" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Circular path: qvB = mv²/r ⇒ r = mv/(qB)</text>
  <text x="466" y="217" fill="#86efac" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Detector separation Δd = 2(r₂ − r₁) ∝ Δm</text>
</svg>`,
      diagramCaption:
        "Bainbridge mass spectrometer: crossed E (down) and B (into page) fields select positive ions of speed v = E/B. Entering the deflection chamber, the upward magnetic force bends them into semicircles of radius r = mv/(qB), separating isotopes on the detector.",
      workedExamples: [
        {
          title: "Velocity Selector & Mass Spectrometer Isotope Radius",
          problem:
            "A velocity selector uses {{E = 4.0 * 10^4}} V m⁻¹ and {{B = 0.20}} T. Singly ionised Carbon-12 ions ({{q = +1.60 * 10^(-19)}} C, {{m = 1.992 * 10^(-26)}} kg) emerge and enter a deflection chamber with the same {{B = 0.20}} T perpendicular to their velocity. Calculate (a) the selected speed {{v}}, and (b) the circular path radius {{r}}.",
          steps: [
            "(a) Undeflected ions satisfy {{q E = q v B ⇒ v = E / B}}.",
            "{{v = (4.0 * 10^4) / 0.20 = 2.0 * 10^5}} m s⁻¹.",
            "(b) In the deflection chamber, {{q v B = (m v^2) / r ⇒ r = (m v) / (q B)}}.",
            "{{r = (1.992 * 10^(-26) * 2.0 * 10^5) / (1.60 * 10^(-19) * 0.20) = (3.984 * 10^(-21)) / (3.20 * 10^(-20)) = 0.1245}} m ≈ {{0.125}} m ({{12.5}} cm).",
          ],
          answer: "{{v = 2.0 * 10^5}} m s⁻¹, {{r = 0.125}} m",
          yourTurn: {
            question:
              "A crossed-field velocity selector has {{E = 6.0 * 10^4}} V m⁻¹ and {{B = 0.15}} T. Calculate the speed (in m s⁻¹) of charged particles that pass straight through undeflected.",
            answer: { type: "number", value: 400000, tolerance: 100, display: "400000 m s⁻¹" },
            solution:
              "{{v = E / B = (6.0 * 10^4) / 0.15 = 4.0 * 10^5}} m s⁻¹ ({{400 000}} m s⁻¹).",
          },
        },
        {
          title: "Magnetic Force Between Two Parallel Power Cables",
          problem:
            "Two long parallel cables {{0.10}} m apart carry currents {{I_1 = 5.0}} A and {{I_2 = 8.0}} A in the same direction. Calculate the magnitude and direction of the magnetic force on a {{2.0}} m section of the {{8.0}} A cable (using {{μ_0 = 4 pi * 10^(-7)}} T m A⁻¹).",
          steps: [
            "Force per unit length: {{F / L = (μ_0 I_1 I_2) / (2 pi r)}}.",
            "Simplify {{μ_0 / (2 pi) = 2.00 * 10^(-7)}} N A⁻².",
            "{{F / L = (2.00 * 10^(-7) * 5.0 * 8.0) / 0.10 = 8.0 * 10^(-5)}} N m⁻¹.",
            "Multiply by length {{L = 2.0}} m: {{F = 8.0 * 10^(-5) * 2.0 = 1.6 * 10^(-4)}} N. Because the currents are in the **same direction**, the cables **attract** (force points towards the {{5.0}} A cable).",
          ],
          answer: "{{1.6 * 10^(-4)}} N towards the {{5.0}} A cable (attractive)",
          yourTurn: {
            question:
              "A straight wire of length {{0.50}} m carries a current of {{4.0}} A perpendicular to a uniform magnetic field of {{0.30}} T. Calculate the magnetic force on the wire in N.",
            answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60 N" },
            solution:
              "{{F = B I L sin 90° = 0.30 * 4.0 * 0.50 * 1 = 0.60}} N.",
          },
        },
      ],
      keyPoints: [
        "Magnetic force {{F = q v B sin θ}} is always perpendicular to both {{v}} and {{B}}, so a static magnetic field does **zero work** and cannot change kinetic energy.",
        "For perpendicular entry into uniform {{B}}: circular radius {{r = m v / (q B)}} and cyclotron period {{T = 2 pi m / (q B)}} (independent of speed).",
        "Crossed {{E}} and {{B}} velocity selector transmits speed {{v = E / B}} regardless of charge sign, charge magnitude, or mass.",
        "Parallel currents in the **same** direction attract; currents in **opposite** directions repel, with {{F / L = μ_0 I_1 I_2 / (2 pi r)}}.",
      ],
      whyItWorks:
        "Why does {{F = B I L}} follow directly from {{F = q v B}}? Inside a wire of length {{L}}, cross-sectional area {{A}}, and free-electron number density {{n}}, the total number of moving electrons is {{N = n A L}}, each drifting at speed {{v}}. Summing the magnetic force on all electrons gives {{F = N e v B = (n A e v) B L}}. Since electric current is {{I = n A v e}}, this collapses instantly to {{F = B I L}}!",
      strategies: [
        "**Negative-charge flip:** Whenever a question features an **electron** or **negative ion**, circle the word 'electron' and point your Fleming left-hand second finger **opposite** to its velocity arrow.",
        "**Circle vs parabola:** Uniform **electric** field perpendicular to initial velocity → **parabola** (constant force direction, like a projectile, speed increases). Uniform **magnetic** field perpendicular to velocity → **circle** (force rotates with velocity, speed stays constant).",
        "**Diameter vs radius in spectrometers:** After a semicircular turn, the ion hits the detector at distance {{2r}} from the entry slit — don't forget the factor of 2!",
      ],
      thinkDeeper:
        "Wait — if a magnetic field can NEVER do work on a charge, how can an electromagnetic railgun or an electric motor lift a heavy weight? Look closely at the conduction electrons inside a moving rod: the magnetic force pushes electrons sideways (creating a Hall voltage), and it is the resulting **electric** force from the lattice ions (or the battery driving the current against the motional back-EMF) that actually supplies the mechanical energy!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define gravitational field strength {{g}} at a point.",
        back: "The gravitational force per unit mass acting on a small test mass placed at that point: {{g = F / m = G M / r^2}} (unit: N kg⁻¹ or m s⁻²).",
        level: "SL",
      },
      {
        front: "Derive circular orbital speed {{v}} from Newton's law of gravitation.",
        back: "Equate gravitational pull to centripetal force: {{G M m / r^2 = m v^2 / r ⇒ v = sqrt(G M / r)}}. Independent of satellite mass {{m}}.",
        level: "SL",
      },
      {
        front: "State Kepler's Third Law in equation form for circular orbits.",
        back: "{{T^2 = ((4 pi^2) / (G M)) r^3}} — the square of the orbital period is proportional to the cube of the orbital radius.",
        level: "SL",
      },
      {
        front: "State the three conditions required for a geostationary satellite.",
        back: "1. Orbital period {{T = 24}} hours (matching Earth's rotation). 2. Orbits directly above the **equator**. 3. Travels **west-to-east** in the same sense as Earth's spin.",
        level: "SL",
      },
      {
        front: "Define gravitational potential {{V_g}} at a point (HL).",
        back: "The work done per unit mass in bringing a small test mass from infinity to that point: {{V_g = -G M / r}} (scalar, always negative, unit J kg⁻¹).",
        level: "HL",
      },
      {
        front: "State the expressions for {{E_k}}, {{E_p}}, and total energy {{E_T}} of a satellite in circular orbit (HL).",
        back: "{{E_k = +G M m / (2r)}}, {{E_p = -G M m / r}}, and {{E_T = E_k + E_p = -G M m / (2r)}} (negative total energy indicates a bound orbit).",
        level: "HL",
      },
      {
        front: "State the escape velocity equation and its ratio to circular orbital speed (HL).",
        back: "{{v_esc = sqrt(2 G M / r) = sqrt(2) * v_orb}}. Found by setting {{E_k + E_p = 0}} so the object just reaches infinity with zero speed.",
        level: "HL",
      },
      {
        front: "How are field strength and potential gradient linked for gravity and electricity (HL)?",
        back: "{{g = -ΔV_g / Δr}} and {{E = -ΔV_e / Δr}}. Field lines always cross equipotential surfaces at **90°** pointing towards lower potential.",
        level: "HL",
      },
      {
        front: "Define electric potential {{V_e}} at a point (HL).",
        back: "The work done per unit positive charge in bringing a small positive test charge from infinity to that point: {{V_e = k q / r}} (scalar, unit V = J C⁻¹).",
        level: "HL",
      },
      {
        front: "Define electric field strength {{E}} and give its equations for a point charge and parallel plates.",
        back: "Electric force per unit positive test charge: {{E = F / q}}. Point charge: {{E = k Q / r^2}}. Uniform parallel plates: {{E = V / d}} (unit N C⁻¹ or V m⁻¹).",
        level: "SL",
      },
      {
        front: "What did Millikan's oil-drop experiment prove, and what is the force-balance equation?",
        back: "It proved **charge quantization** ({{q = n e}}, with {{e = 1.60 * 10^(-19)}} C). For a hovering drop: {{q E = q V / d = m g}}.",
        level: "SL",
      },
      {
        front: "Why does a static magnetic field do zero work on a moving charged particle?",
        back: "The magnetic force {{F = q v B sin θ}} is always **perpendicular** to velocity {{v}}, so {{W = F s cos 90° = 0}} — speed and kinetic energy remain constant.",
        level: "SL",
      },
      {
        front: "State the circular radius {{r}} and cyclotron period {{T}} of a charge moving perpendicular to uniform {{B}}.",
        back: "{{r = m v / (q B)}} and {{T = 2 pi m / (q B)}} (period is independent of speed and radius).",
        level: "SL",
      },
      {
        front: "How does a crossed-field velocity selector work, and what speed passes undeflected?",
        back: "Perpendicular {{E}} and {{B}} fields exert opposite forces {{q E}} and {{q v B}}. Forces cancel when {{v = E / B}}, independent of charge or mass.",
        level: "SL",
      },
      {
        front: "State the force per unit length between two parallel current-carrying wires and the attraction rule.",
        back: "{{F / L = μ_0 I_1 I_2 / (2 pi r)}}. Parallel currents (same direction) **attract**; antiparallel currents (opposite directions) **repel**.",
        level: "SL",
      },
      {
        front: "Compare the trajectories of a charged particle entering perpendicular to a uniform E-field vs a uniform B-field.",
        back: "Uniform **E-field**: constant force direction → **parabolic** path, kinetic energy increases. Uniform **B-field**: force always perpendicular to {{v}} → **circular** path, kinetic energy stays constant.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Always measure radial distance {{r}} **centre-to-centre** in gravitation ({{r = R + h}}) and Coulomb's law.",
      "Gravitational and electric **forces/fields** are vectors (resolve components!); **potentials and potential energies** are scalars (add algebraically with signs) [HL].",
      "Circular orbit triad: {{F_g = G M m / r^2 = m v^2 / r}}, {{v = sqrt(G M / r)}}, and {{T^2 = (4 pi^2 / (G M)) r^3}}.",
      "Escape velocity {{v_esc = sqrt(2 G M / r)}} is {{sqrt(2)}} times the circular orbital speed at the same radius [HL].",
      "Equipotential surfaces are always perpendicular to field lines, and zero work is done moving along an equipotential [HL].",
      "Between parallel plates, electric field strength {{E = V / d}} is uniform everywhere inside (constant force on any charge).",
      "For Fleming's left-hand rule on an **electron** or negative ion, point your second finger **opposite** to the particle's velocity.",
      "A static magnetic field bends moving charges into circles of radius {{r = m v / (q B)}} without changing their speed or kinetic energy.",
      "Crossed {{E}} and {{B}} velocity selector filters for {{v = E / B}} regardless of {{q}} or {{m}}.",
      "Parallel currents in the same direction **attract**, opposite currents **repel**, with equal-magnitude Newton 3rd-law forces {{F / L = μ_0 I_1 I_2 / (2 pi r)}}.",
    ],
    misconceptions: [
      {
        wrong: "Astronauts float in the ISS because there is zero gravity in orbit.",
        right: "Gravity at ISS altitude ({{400}} km) is still ~89% of surface gravity! Astronauts are weightless because both they and the station are in continuous free fall around Earth (zero normal contact force).",
        level: "SL",
      },
      {
        wrong: "When atmospheric drag slows a satellite, it moves to a lower orbit at a slower speed.",
        right: "Losing total energy drops the satellite to a smaller radius {{r}}, where {{v = sqrt(G M / r)}} is actually **larger**! Half of the lost gravitational potential energy heats the atmosphere and the other half increases kinetic energy.",
        level: "HL",
      },
      {
        wrong: "At the neutral point between Earth and the Moon where {{g = 0}}, the gravitational potential {{V_g}} is also zero.",
        right: "{{V_g}} is a negative scalar from both bodies, so {{V_total = V_E + V_M < 0}}. At the neutral point, the **gradient** {{ΔV_g / Δr}} is zero (a local peak in the potential graph), not the value of {{V_g}} itself.",
        level: "HL",
      },
      {
        wrong: "A larger charge {{Q}} exerts a bigger Coulomb force on a tiny charge {{q}} than {{q}} exerts on {{Q}}.",
        right: "By Newton's Third Law and the symmetry of {{F = k Q q / r^2}}, both charges experience forces of **identical magnitude** in opposite directions (only their accelerations differ if their masses differ).",
        level: "SL",
      },
      {
        wrong: "A strong magnetic field speeds up a charged particle inside a cyclotron.",
        right: "Magnetic force is always perpendicular to velocity and does **zero work**. In a cyclotron, an oscillating **electric** field across the gap between the dees accelerates the ion; the magnetic field only bends it back around.",
        level: "SL",
      },
      {
        wrong: "Equipotential circles around a point mass or point charge are equally spaced for equal steps of {{ΔV}}.",
        right: "Because {{V ∝ 1/r}}, equal steps of {{ΔV}} require **wider** radial gaps {{Δr}} as {{r}} increases — mirroring the weakening field {{|ΔV / Δr| ∝ 1/r^2}}.",
        level: "HL",
      },
      {
        wrong: "Parallel wires carrying currents in the same direction repel each other, like two positive charges.",
        right: "Parallel currents in the same direction **attract**! (Apply the right-hand grip rule to wire 1 to find {{B}} at wire 2, then Fleming's left-hand rule on wire 2: the force points directly towards wire 1.)",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting to add the planet's radius {{R}} to orbital altitude {{h}} when computing {{r = R + h}}.",
      "Dropping the minus sign on gravitational potential {{V_g = -G M / r}} or total orbital energy {{E_T = -G M m / (2r)}} (HL).",
      "Confusing {{1/r}} (potential) with {{1/r^2}} (field strength and force), or forgetting to square {{r}} in Newton/Coulomb calculations.",
      "Using the velocity direction of an **electron** directly as the current finger in Fleming's left-hand rule instead of reversing it.",
      "Forgetting to convert cm/mm to metres in {{E = V / d}} or km to metres and hours/days to seconds in Kepler's Third Law.",
      "Writing 'per unit charge' instead of 'per unit **positive** test charge' when defining electric field strength {{E}} or electric potential {{V_e}}.",
      "Giving the semicircular **radius** {{r}} instead of the **diameter** {{2r}} (or {{2(r_2 - r_1)}}) when asked where an ion hits the detector plate in a mass spectrometer.",
    ],
    mnemonics: [
      {
        topic: "Fleming's Left-Hand Rule (Motor / Magnetic Force)",
        device: "FBI — Thumb = Force, First = B-field, Second = I (current)",
        explanation: "Hold thumb, first finger and second finger mutually perpendicular on your LEFT hand: **F**orce (thumb), **B**-field (first finger, N→S), conventional current **I** (second finger, direction of positive charge motion).",
        level: "SL",
      },
      {
        topic: "Potential vs Field Power of r (HL)",
        device: "Scalar Potential = Single r; Vector Force/Field = Squared r²",
        explanation: "**S**calar quantities ({{V_g, V_e, E_p}}) have a **s**ingle {{r}} in the denominator; **V**ector fields and forces ({{g, E, F}}) have {{r^2}}.",
        level: "HL",
      },
      {
        topic: "Parallel Currents Attraction Rule",
        device: "Same direction = Friends (Attract); Opposite = Foes (Repel)",
        explanation: "Opposite to the static charge rule! Currents travelling together in the same direction pull together (attract); opposite currents push apart (repel).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Geostationary Weather & Communications Satellites",
        emoji: "🛰️",
        detail: "Positioned at {{r = 4.22 * 10^7}} m (altitude ~35 800 km) above the equator so {{T = 24}} h by Kepler's Third Law, letting fixed rooftop dishes lock onto one spot in the sky continuously.",
      },
      {
        title: "CERN Large Hadron Collider Superconducting Magnets",
        emoji: "⚛️",
        detail: "1232 niobium-titanium dipole magnets cooled to {{1.9}} K generate {{8.3}} T fields to bend {{6.8}} TeV protons around a {{27}} km ring using {{r = p / (q B)}}.",
      },
      {
        title: "Mass Spectrometry in Radiocarbon Dating & Forensics",
        emoji: "🧪",
        detail: "Bainbridge-type spectrometers pass ionised samples through crossed {{E}} and {{B}} fields and separate isotopes like Carbon-12 and Carbon-14 by their deflection radius {{r = m v / (q B)}}.",
      },
      {
        title: "Earth's Magnetosphere & the Aurora Borealis",
        emoji: "🌌",
        detail: "Solar-wind protons and electrons spiral along Earth's magnetic field lines in helical paths ({{F = q v B sin θ}}), funnelling into the polar upper atmosphere where collisions ignite shimmering green and crimson auroras.",
      },
      {
        title: "Electrostatic Inkjet Printers & Millikan's Precision",
        emoji: "🖨️",
        detail: "Charged micro-droplets pass between parallel deflecting plates ({{E = V / d}}) so precise computer-controlled voltages steer every pixel onto paper with micrometre accuracy.",
      },
    ],
    videos: [
      {
        title: "IB Physics D.1 Gravitational Fields, Orbits & Potentials",
        channel: "Andy Masley / IB Physics Explained",
        url: "https://www.youtube.com/results?search_query=IB+Physics+D.1+gravitational+fields+potential+escape+velocity",
      },
      {
        title: "IB Physics D.2 Electric & Magnetic Fields + Millikan Oil Drop",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+D.2+electric+fields+Coulomb+Millikan+magnetic+fields",
      },
      {
        title: "IB Physics D.3 Motion in Electromagnetic Fields & Mass Spectrometer",
        channel: "OSC / Sirius Revision IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+D.3+motion+in+electromagnetic+fields+velocity+selector",
      },
      {
        title: "Visualising Electric & Gravitational Equipotentials",
        channel: "Physics Videos by Eugene Khutoryansky",
        url: "https://www.youtube.com/results?search_query=equipotential+surfaces+field+lines+physics+animation",
      },
    ],
    formulas: [
      {
        name: "Newton's law of universal gravitation",
        formula: "{{F = (G m_1 m_2) / r^2}}",
        note: "{{G = 6.67 * 10^(-11)}} N m² kg⁻²; {{r}} centre-to-centre",
        level: "SL",
      },
      {
        name: "Gravitational field strength",
        formula: "{{g = F / m = (G M) / r^2}}",
        note: "Vector directed radially towards {{M}} (N kg⁻¹ or m s⁻²)",
        level: "SL",
      },
      {
        name: "Circular orbital speed",
        formula: "{{v = sqrt((G M) / r)}}",
        note: "Independent of satellite mass {{m}}",
        level: "SL",
      },
      {
        name: "Kepler's Third Law (circular orbit)",
        formula: "{{T^2 = ((4 pi^2) / (G M)) r^3}}",
        note: "{{T^2 ∝ r^3}} around the same central mass {{M}}",
        level: "SL",
      },
      {
        name: "Gravitational potential & potential energy",
        formula: "{{V_g = -(G M) / r}},  {{E_p = -(G M m) / r}}",
        note: "Scalars; zero at infinity; {{W = m ΔV_g}}",
        level: "HL",
      },
      {
        name: "Circular orbital energies",
        formula: "{{E_k = (G M m) / (2 r)}},  {{E_T = -(G M m) / (2 r)}}",
        note: "{{E_T = -E_k = (1/2) E_p}} (bound orbit has {{E_T < 0}})",
        level: "HL",
      },
      {
        name: "Escape velocity",
        formula: "{{v_esc = sqrt((2 G M) / r) = sqrt(2 g r)}}",
        note: "Exactly {{sqrt(2)}} times circular orbital speed at radius {{r}}",
        level: "HL",
      },
      {
        name: "Field–potential gradient relations",
        formula: "{{g = -(ΔV_g) / (Δr)}},  {{E = -(ΔV_e) / (Δr)}}",
        note: "Field points down the potential gradient, ⊥ to equipotentials",
        level: "HL",
      },
      {
        name: "Electric potential & potential energy",
        formula: "{{V_e = (k q) / r}},  {{E_p = (k q_1 q_2) / r}}",
        note: "Scalars carrying the sign of charge; {{W = q ΔV_e}}",
        level: "HL",
      },
      {
        name: "Coulomb's law",
        formula: "{{F = (k q_1 q_2) / r^2 = (q_1 q_2) / (4 pi ε_0 r^2)}}",
        note: "{{k = 8.99 * 10^9}} N m² C⁻², {{ε_0 = 8.85 * 10^(-12)}} C² N⁻¹ m⁻²",
        level: "SL",
      },
      {
        name: "Electric field strength",
        formula: "{{E = F / q}},  {{E = (k Q) / r^2}},  {{E = V / d}}",
        note: "Uniform parallel plates: {{E = V / d}} (N C⁻¹ = V m⁻¹)",
        level: "SL",
      },
      {
        name: "Magnetic force on a moving charge & cyclotron radius",
        formula: "{{F = q v B sin θ}},  {{r = (m v) / (q B)}}",
        note: "Cyclotron period {{T = (2 pi m) / (q B)}}; zero work done by {{B}}",
        level: "SL",
      },
      {
        name: "Crossed-field velocity selector",
        formula: "{{v = E / B}}",
        note: "Undeflected speed when {{q E = q v B}}",
        level: "SL",
      },
      {
        name: "Magnetic force on a wire & parallel currents",
        formula: "{{F = B I L sin θ}},  {{F / L = (μ_0 I_1 I_2) / (2 pi r)}}",
        note: "{{μ_0 = 4 pi * 10^(-7)}} T m A⁻¹; parallel currents attract",
        level: "SL",
      },
    ],
  },
};
