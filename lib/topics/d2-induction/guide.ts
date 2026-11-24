import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "d2-induction",
  title: "D.4 Electromagnetic Induction",
  strand: "Theme D: Fields",
  icon: "⚡",
  level: "HL",
  summary:
    "Magnetic flux & flux linkage, Faraday's & Lenz's laws, conservation of energy in induction, motional EMF & magnetic braking, and rotating-coil AC generators (IB Physics HL).",
  intro:
    "In D.3 you saw how an electric current inside a magnetic field produces a force (the motor effect). Electromagnetic induction is the grand reverse symmetry of nature: **changing** a magnetic field through a conductor generates an electromotive force (EMF) — the principle powering every wind turbine, hydroelectric dam, regenerative EV brake, and induction hob on Earth. At HL, IB examiners love testing two deep ideas: **rate of change** (a huge static field induces zero EMF!) and **energy conservation** (Lenz's law forbids free energy).",
  guide: [
    // =========================================================================
    // SECTION 1: MAGNETIC FLUX & FLUX LINKAGE
    // =========================================================================
    {
      id: "magnetic-flux-linkage",
      heading: "D.4 Magnetic Flux & Flux Linkage",
      level: "HL",
      discovery: {
        problem:
          "Imagine holding a square wire loop under steady vertical rain. You want as many raindrops per second as possible to pass through the hoop. How should you tilt the hoop — flat (horizontal) or edge-on (vertical)? Now imagine tilting it by 60° from horizontal: what fraction of the maximum rainfall still passes through?",
        idea:
          "Holding the hoop **flat** (its plane perpendicular to the rain, so its **normal** points straight into the rain, {{theta = 0°}}) catches the maximum rain. Holding it edge-on ({{theta = 90°}}) catches zero. At angle {{theta}} between the rain and the hoop's **normal**, the effective cross-sectional area facing the rain shrinks to {{A cos theta}}, so at {{theta = 60°}} exactly {{cos 60° = 0.5}} (half) the maximum passes through. Magnetic flux works identically: replace rain density with magnetic flux density {{B}}!",
      },
      body: `Before we can describe how a *changing* magnetic environment induces an EMF, we need a way to count "how much magnetic field passes through a surface". That quantity is **magnetic flux**, denoted {{Φ}}.

For a flat surface of area {{A}} in a uniform magnetic field of flux density {{B}}:

{{Φ = B A cos theta}}

Here is the single most important geometric rule in D.4:
- **{{theta}} is the angle between the magnetic field vector {{B}} and the *normal* to the plane of the loop** — NOT the angle between {{B}} and the plane of the loop itself!
- If the plane of the coil is **perpendicular** to {{B}}, the normal is **parallel** to {{B}}, so {{theta = 0°}} and {{Φ = BA}} (maximum flux).
- If the plane of the coil is **parallel** to {{B}}, the normal is **perpendicular** to {{B}}, so {{theta = 90°}} and {{Φ = 0}} (zero flux — field lines skim past without threading through the loop).
- If the plane of the coil makes an angle {{α}} with the field lines, then {{theta = 90° - α}}, so {{cos theta = sin α}}.

### Units & Sign Convention
- The SI unit of magnetic flux is the **weber (Wb)**, where {{1 Wb = 1 T m^2 = 1 V s}}.
- Magnetic flux density {{B = Φ/A}} (when perpendicular) literally means *flux per unit area* ({{1 T = 1 Wb m^(-2)}}).
- Flux is a **signed scalar**: if you flip a loop upside down ({{theta}} changes from {{0°}} to {{180°}}), the normal reverses direction and {{Φ}} flips from {{+BA}} to {{-BA}}. The *change* in flux is therefore {{ΔΦ = (-BA) - (+BA) = -2BA}}, **not zero**!

### Magnetic Flux Linkage
Practical coils contain {{N}} tightly wound identical turns stacked together. Every turn experiences the same flux {{Φ}}, so the total **magnetic flux linkage** is:

{{NΦ = N B A cos theta}}

Its SI unit is also the **weber (Wb)** (sometimes written Wb-turns for clarity, though IB Data Booklet treats {{N}} as a dimensionless count so {{NΦ}} has unit Wb).

### Three Ways to Change Flux Linkage
Because {{NΦ = NBA cos theta}}, there are **three** independent physical ways to change flux linkage and hence induce an EMF:
1. **Change {{B}}** — strengthen, weaken, or reverse an electromagnet, or move a bar magnet closer/farther from a coil.
2. **Change {{A}}** — stretch, squash, or slide one side of a conducting loop (motional EMF in rails), or move a loop partially into/out of a finite magnetic field region.
3. **Change {{theta}}** — rotate a coil inside a uniform magnetic field (the AC generator!).`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tilted coil in a uniform horizontal magnetic field showing the area normal vector at angle theta to B, alongside comparison insets for zero degrees and ninety degrees">
  <defs>
    <marker id="arrB1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#2563eb"/>
    </marker>
    <marker id="arrN1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#dc2626"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="265" fill="#ffffff"/>
  <text x="16" y="22" font-size="13" font-weight="700" fill="#1e293b">Tilted Coil in Uniform Magnetic Field B</text>

  <!-- Uniform horizontal B field lines -->
  <g stroke="#2563eb" stroke-width="1.8" marker-end="url(#arrB1)">
    <line x1="25" y1="68" x2="315" y2="68"/>
    <line x1="25" y1="108" x2="315" y2="108"/>
    <line x1="25" y1="148" x2="315" y2="148"/>
    <line x1="25" y1="188" x2="315" y2="188"/>
    <line x1="25" y1="228" x2="315" y2="228"/>
  </g>
  <text x="30" y="56" font-size="13" font-weight="700" fill="#2563eb">Uniform B-field</text>

  <!-- Tilted coil ellipse (axis tilted 35 deg from vertical, so normal is 35 deg above horizontal) -->
  <g transform="translate(175, 148)">
    <!-- Back half of coil -->
    <ellipse cx="0" cy="0" rx="26" ry="74" transform="rotate(-35)" fill="#fef3c7" fill-opacity="0.65" stroke="#b45309" stroke-width="3.5"/>
    <!-- Plane reference dashed line along coil -->
    <line x1="-42" y1="-60" x2="42" y2="60" stroke="#92400e" stroke-width="1.4" stroke-dasharray="4,3"/>
    <!-- Area label -->
    <text x="-48" y="-30" font-size="12" font-weight="700" fill="#92400e">Area A</text>
    <text x="-52" y="-15" font-size="11" fill="#92400e">(N turns)</text>
    <!-- Horizontal B direction from centre -->
    <line x1="0" y1="0" x2="105" y2="0" stroke="#2563eb" stroke-width="2.2" marker-end="url(#arrB1)"/>
    <text x="110" y="4" font-size="13" font-weight="700" fill="#2563eb">B</text>
    <!-- Area normal vector n (35 deg above horizontal) -->
    <line x1="0" y1="0" x2="86" y2="-60" stroke="#dc2626" stroke-width="2.6" marker-end="url(#arrN1)"/>
    <text x="90" y="-62" font-size="12" font-weight="700" fill="#dc2626">Normal n</text>
    <!-- Right-angle square between coil plane and normal -->
    <polyline points="11,-8 19,3 8,11" fill="none" stroke="#dc2626" stroke-width="1.4"/>
    <!-- Angle arc for theta between B and Normal -->
    <path d="M 46 0 A 46 46 0 0 0 37.7 -26.4" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="51" y="-10" font-size="14" font-weight="700" fill="#dc2626">θ</text>
    <!-- Angle alpha between coil plane and B (warning) -->
    <path d="M 32 0 A 32 32 0 0 1 18.4 26.2" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="31" y="24" font-size="11" fill="#64748b">α = 90°−θ</text>
  </g>

  <!-- Right-hand comparison panel -->
  <rect x="345" y="34" width="162" height="214" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="426" y="54" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Key Orientations</text>

  <!-- Case 1: theta = 0 -->
  <g transform="translate(360, 72)">
    <text x="0" y="0" font-size="11" font-weight="700" fill="#15803d">θ = 0° (Max Flux)</text>
    <line x1="6" y1="22" x2="112" y2="22" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrB1)"/>
    <line x1="6" y1="36" x2="112" y2="36" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrB1)"/>
    <line x1="56" y1="8" x2="56" y2="48" stroke="#b45309" stroke-width="4"/>
    <line x1="56" y1="28" x2="88" y2="28" stroke="#dc2626" stroke-width="2" marker-end="url(#arrN1)"/>
    <text x="64" y="60" font-size="11" text-anchor="middle" fill="#334155">Plane ⊥ B → Φ = BA</text>
  </g>

  <line x1="358" y1="144" x2="494" y2="144" stroke="#e2e8f0" stroke-width="1.2"/>

  <!-- Case 2: theta = 90 -->
  <g transform="translate(360, 162)">
    <text x="0" y="0" font-size="11" font-weight="700" fill="#c2410c">θ = 90° (Zero Flux)</text>
    <line x1="6" y1="26" x2="112" y2="26" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrB1)"/>
    <line x1="6" y1="44" x2="112" y2="44" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrB1)"/>
    <line x1="30" y1="35" x2="86" y2="35" stroke="#b45309" stroke-width="4"/>
    <line x1="58" y1="35" x2="58" y2="10" stroke="#dc2626" stroke-width="2" marker-end="url(#arrN1)"/>
    <text x="64" y="64" font-size="11" text-anchor="middle" fill="#334155">Plane ∥ B → Φ = 0</text>
  </g>
</svg>`,
      diagramCaption:
        "Always measure θ between the magnetic field B and the normal n to the coil face. If a question gives the angle α between the coil plane and B, convert using θ = 90° − α.",
      workedExamples: [
        {
          title: "Flux & Flux Linkage of a Tilted Circular Coil",
          problem:
            "A circular coil of {{N = 250}} turns and radius {{r = 4.0 cm}} is placed in a uniform magnetic field of {{B = 0.30 T}}. The **plane of the coil** makes an angle of {{30°}} with the magnetic field lines. Calculate (a) the magnetic flux through one turn, and (b) the total magnetic flux linkage.",
          steps: [
            "**Spot the angle trap first:** the question gives the angle between the *plane* and {{B}} as {{30°}}, so the angle between the *normal* and {{B}} is {{theta = 90° - 30° = 60°}}.",
            "**Find the area in m²:** {{r = 4.0 * 10^(-2) m}}, so {{A = pi r^2 = pi * (0.040)^2 = 5.027 * 10^(-3) m^2}}.",
            "**Magnetic flux per turn:** {{Φ = B A cos theta = 0.30 * 5.027 * 10^(-3) * cos 60° = 0.30 * 5.027 * 10^(-3) * 0.50 = 7.54 * 10^(-4) Wb}}.",
            "**Magnetic flux linkage:** {{NΦ = 250 * 7.540 * 10^(-4) = 0.188 Wb}} (3 s.f.).",
          ],
          answer: "{{Φ = 7.54 * 10^(-4) Wb}}, {{NΦ = 0.188 Wb}}",
          yourTurn: {
            question:
              "A rectangular coil of 120 turns has dimensions 5.0 cm × 8.0 cm in a uniform magnetic field of 0.50 T. The plane of the coil makes an angle of 30° with the field lines. Calculate the magnetic flux linkage in Wb.",
            answer: { type: "number", value: 0.12, tolerance: 0.002, display: "0.12 Wb" },
            solution:
              "Area {{A = 0.050 * 0.080 = 4.0 * 10^(-3) m^2}}. Normal angle {{theta = 90° - 30° = 60°}}. {{NΦ = 120 * 0.50 * 4.0 * 10^(-3) * cos 60° = 0.12 Wb}}.",
          },
        },
        {
          title: "Flipping a Coil Through 180°",
          problem:
            "A 400-turn coil of area {{2.5 * 10^(-3) m^2}} initially lies with its plane perpendicular to a uniform magnetic field of {{0.40 T}}. It is then flipped completely over through {{180°}}. Calculate the magnitude of the change in magnetic flux linkage {{|Δ(NΦ)|}}.",
          steps: [
            "Initially the plane is perpendicular to {{B}}, so {{theta_1 = 0°}}: {{NΦ_1 = NBA cos 0° = 400 * 0.40 * 2.5 * 10^(-3) * 1 = +0.40 Wb}}.",
            "After flipping by {{180°}}, the normal points opposite to {{B}}, so {{theta_2 = 180°}}: {{NΦ_2 = NBA cos 180° = -0.40 Wb}}.",
            "Change in flux linkage: {{Δ(NΦ) = NΦ_2 - NΦ_1 = -0.40 - 0.40 = -0.80 Wb}}.",
            "Magnitude of the change is {{0.80 Wb}} — exactly **double** the initial flux linkage.",
          ],
          answer: "{{0.80 Wb}}",
        },
      ],
      keyPoints: [
        "Magnetic flux through a single flat area is {{Φ = B A cos theta}}, where {{theta}} is the angle between {{B}} and the **normal** to the area.",
        "Magnetic flux linkage for an {{N}}-turn coil is {{NΦ = N B A cos theta}}, measured in **webers (Wb)**, where {{1 Wb = 1 T m^2 = 1 V s}}.",
        "Always convert areas from {{cm^2}} to {{m^2}} using {{1 cm^2 = 10^(-4) m^2}} (not {{10^(-2)}}!).",
        "Flipping a coil through {{180°}} reverses the sign of flux through the loop, producing a total change of {{2NBA}}, not zero.",
      ],
      whyItWorks:
        "Only the component of the magnetic field perpendicular to the surface, {{B_⊥ = B cos theta}}, actually pierces the loop; the parallel component {{B sin theta}} slides harmlessly along the surface without crossing it. Summing {{B_⊥}} across area {{A}} gives {{Φ = (B cos theta) A = BA cos theta}}, and wiring {{N}} identical loops in series adds their contributions to give {{NΦ}}.",
      strategies: [
        "Sketch a 1-second side view of the coil and draw a dashed arrow perpendicular to the coil face for the normal before touching your calculator.",
        "Underline the exact wording in IB Paper 1/2: 'angle between the **plane** of the coil and the field' vs 'angle between the **normal** to the coil and the field'.",
        "If a flux-linkage problem mentions flipping or reversing {{B}}, write signed values ({{+NBA}} and {{-NBA}}) explicitly so you never miss the factor of 2.",
      ],
      thinkDeeper:
        "Gauss's law for magnetism states that the total magnetic flux out of any **closed** 3D surface (like a sphere or box) is always exactly zero, even if a bar magnet sits inside it. Why? Because magnetic monopoles do not exist — every magnetic field line that leaves a north pole must loop back and enter a south pole, so as much flux enters any closed surface as leaves it!",
    },

    // =========================================================================
    // SECTION 2: FARADAY'S LAW & LENZ'S LAW
    // =========================================================================
    {
      id: "faraday-lenz-laws",
      heading: "D.4 Faraday's Law & Lenz's Law",
      level: "HL",
      discovery: {
        problem:
          "Drop a strong neodymium magnet down a vertical plastic tube and it hits the floor in a fraction of a second. Now drop the **same** magnet down a vertical **copper** tube (copper is non-magnetic — a magnet does not stick to it!). Instead of plunging straight through, the magnet floats down eerily in slow motion. Where did the upward braking force come from, and where did the missing gravitational potential energy go?",
        idea:
          "As the magnet falls, the magnetic flux changes through every horizontal slice of the copper pipe. That changing flux induces circular **eddy currents** in the copper wall. By **Lenz's law**, those currents create their own magnetic field that **opposes** the magnet's motion — repelling the falling bottom pole and attracting the receding top pole. The missing gravitational potential energy is dissipated as **thermal energy (Joule heating {{I^2 R}})** inside the copper pipe!",
      },
      body: `A steady magnetic flux — no matter how enormous — induces **zero** EMF. Nature only generates an EMF when the magnetic flux linkage **changes**.

### Faraday's Law of Electromagnetic Induction
> **The magnitude of the induced EMF is directly proportional to (and in SI units equal to) the rate of change of magnetic flux linkage.**

{{ε = -N (ΔΦ / Δt) = -(Δ(NΦ) / Δt)}}

- Notice that an **EMF** is always induced across an open coil whenever flux changes — even if the circuit is broken! An **induced current** ({{I = ε / R}}) only flows if there is a **complete closed conducting circuit**.
- On a flux-linkage vs time ({{NΦ}}–{{t}}) graph, the instantaneous induced EMF is the **negative gradient**: {{ε = -d(NΦ)/dt}}.
- Conversely, on an induced EMF vs time ({{ε}}–{{t}}) graph, the **area under the curve** equals the magnitude of the total change in flux linkage:

{{"Area under " ε - t " graph" = |Δ(NΦ)| = N |ΔΦ|}}

### Lenz's Law & Conservation of Energy
The minus sign in Faraday's law encodes **Lenz's law**:

> **The direction of an induced EMF (and any induced current it drives) is always such as to oppose the change in magnetic flux that produces it.**

Why **must** Lenz's law be true? Suppose the opposite happened when you pushed a bar magnet's North pole towards a closed coil. If the coil induced a South pole on its near face, it would *attract* the magnet faster and faster — increasing the speed, which increases the rate of flux change, which induces an even bigger current and even greater attraction! You would gain unbounded kinetic energy AND electrical energy from a tiny initial nudge — violating the **law of conservation of energy**.

Instead, the near face becomes a **North pole**, repelling the approaching magnet. You must do mechanical work pushing against that repulsive magnetic force, and that mechanical work is precisely what converts into electrical energy ({{I^2 R t}}) in the circuit!

### Classic IB Experiment: Magnet Falling Through a Coil
When a bar magnet drops vertically through a coil connected to a data-logger:
1. **Entry:** Flux through the coil increases rapidly → first EMF pulse induced. Top face of coil opposes the incoming pole (repulsive braking force).
2. **Middle (if coil is longer than magnet):** Flux is momentarily constant → {{ΔΦ/Δt = 0}}, so {{ε = 0}}.
3. **Exit:** Flux decreases rapidly → second EMF pulse of **opposite polarity** (Lenz's law now *attracts* the departing tail pole upwards to oppose its departure).
4. **Why the second pulse is taller and narrower:** Because the magnet accelerates downward under gravity, it leaves the bottom of the coil **faster** than it entered the top. Greater speed gives a steeper {{ΔΦ/Δt}} (**larger peak EMF**) over a **shorter time**.
5. **Equal areas:** Because the total flux enters from {{0}} to {{NΦ_max}} and then exits from {{NΦ_max}} back to {{0}}, the **magnitude of the area under both pulses is identical**: {{|A_1| = |A_2| = NΦ_max}}!`,
      diagram: `<svg viewBox="0 0 520 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar magnet falling through a coil showing induced north pole opposing approach by Lenz's law, paired with an asymmetric double-pulse EMF versus time graph having equal positive and negative areas">
  <defs>
    <marker id="arrDark2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#1e293b"/>
    </marker>
    <marker id="arrRed2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#dc2626"/>
    </marker>
    <marker id="arrGrn2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#15803d"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="275" fill="#ffffff"/>

  <!-- Left panel: Falling magnet & coil -->
  <text x="14" y="21" font-size="12.5" font-weight="700" fill="#1e293b">1. Lenz's Law: Opposing Pole</text>
  <!-- Bar magnet -->
  <rect x="74" y="34" width="32" height="34" fill="#3b82f6" stroke="#1e3a8a" stroke-width="1.5"/>
  <rect x="74" y="68" width="32" height="34" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
  <text x="90" y="56" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">S</text>
  <text x="90" y="90" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">N</text>

  <!-- Velocity arrow down -->
  <line x1="122" y1="45" x2="122" y2="96" stroke="#1e293b" stroke-width="2.2" marker-end="url(#arrDark2)"/>
  <text x="128" y="75" font-size="12" font-weight="700" fill="#1e293b">v</text>

  <!-- Upward opposing magnetic force -->
  <line x1="58" y1="100" x2="58" y2="52" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrRed2)"/>
  <text x="14" y="78" font-size="11" font-weight="700" fill="#dc2626">F_mag</text>
  <text x="14" y="91" font-size="10" fill="#dc2626">(repels)</text>

  <!-- Solenoid / coil cylinder -->
  <rect x="52" y="128" width="76" height="92" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <!-- Coil windings -->
  <g stroke="#b45309" stroke-width="2.6" fill="none">
    <path d="M52,140 C72,147 108,147 128,140"/>
    <path d="M52,155 C72,162 108,162 128,155"/>
    <path d="M52,170 C72,177 108,177 128,170"/>
    <path d="M52,185 C72,192 108,192 128,185"/>
    <path d="M52,200 C72,207 108,207 128,200"/>
    <path d="M52,213 C72,220 108,220 128,213"/>
  </g>
  <!-- Induced top N pole badge -->
  <rect x="68" y="114" width="44" height="19" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="90" y="127" font-size="11" font-weight="700" text-anchor="middle" fill="#b91c1c">Ind. N</text>

  <!-- Induced current arrows & resistor loop -->
  <polyline points="128,140 156,140 156,162" fill="none" stroke="#15803d" stroke-width="1.8"/>
  <rect x="149" y="162" width="14" height="30" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="170" y="181" font-size="11" font-weight="700" fill="#15803d">R</text>
  <polyline points="156,192 156,213 128,213" fill="none" stroke="#15803d" stroke-width="1.8"/>
  <line x1="156" y1="145" x2="156" y2="157" stroke="#15803d" stroke-width="1.8" marker-end="url(#arrGrn2)"/>
  <text x="163" y="154" font-size="10.5" font-weight="700" fill="#15803d">I</text>

  <!-- Caption under coil -->
  <text x="92" y="240" font-size="10.5" text-anchor="middle" fill="#334155">Anticlockwise from above</text>
  <text x="92" y="254" font-size="10.5" text-anchor="middle" fill="#334155">→ opposes incoming N pole</text>

  <!-- Divider -->
  <line x1="192" y1="18" x2="192" y2="262" stroke="#e2e8f0" stroke-width="1.4"/>

  <!-- Right panel: Double-pulse EMF-time graph -->
  <text x="208" y="21" font-size="12.5" font-weight="700" fill="#1e293b">2. Induced EMF vs Time (Falling Magnet)</text>

  <!-- Axes -->
  <line x1="230" y1="248" x2="230" y2="38" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrDark2)"/>
  <line x1="224" y1="138" x2="504" y2="138" stroke="#1e293b" stroke-width="1.8" marker-end="url(#arrDark2)"/>
  <text x="218" y="46" font-size="12" font-weight="700" fill="#1e293b">ε</text>
  <text x="502" y="154" font-size="12" font-weight="700" fill="#1e293b">t</text>
  <text x="216" y="142" font-size="10" fill="#64748b">0</text>

  <!-- Positive pulse (entry: lower peak, wider) -->
  <path d="M 244 138 C 266 138, 274 72, 296 72 C 318 72, 326 138, 348 138 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2.4"/>
  <text x="296" y="61" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Entry (slower)</text>
  <text x="296" y="114" font-size="11" font-weight="700" text-anchor="middle" fill="#1e40af">+A₁</text>

  <!-- Zero middle region -->
  <line x1="348" y1="138" x2="386" y2="138" stroke="#64748b" stroke-width="2.6"/>
  <text x="367" y="129" font-size="9.5" text-anchor="middle" fill="#475569">Inside</text>
  <text x="367" y="153" font-size="9.5" text-anchor="middle" fill="#475569">ΔΦ/Δt = 0</text>

  <!-- Negative pulse (exit: taller peak, narrower) -->
  <path d="M 386 138 C 400 138, 405 232, 420 232 C 435 232, 440 138, 454 138 Z" fill="#ffedd5" stroke="#ea580c" stroke-width="2.4"/>
  <text x="420" y="248" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">Exit (faster: taller &amp; narrower)</text>
  <text x="420" y="182" font-size="11" font-weight="700" text-anchor="middle" fill="#9a3412">−A₂</text>

  <!-- Equal areas callout -->
  <rect x="368" y="42" width="136" height="44" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.2"/>
  <text x="436" y="59" font-size="10.5" font-weight="700" text-anchor="middle" fill="#15803d">Equal Areas:</text>
  <text x="436" y="75" font-size="10.5" text-anchor="middle" fill="#166534">|A₁| = |A₂| = NΦ_max</text>
</svg>`,
      diagramCaption:
        "Left: Approaching N pole induces an opposing N pole on top of the coil (Lenz's law). Right: Because gravity accelerates the magnet, the exit pulse has opposite polarity, a larger peak magnitude, a shorter duration, and the exact same enclosed area NΦ_max.",
      workedExamples: [
        {
          title: "Average Induced EMF & Current in a Ramping Field",
          problem:
            "A 500-turn square coil of side {{4.0 cm}} and total resistance {{2.5 Ω}} lies perpendicular to a uniform magnetic field. The field increases uniformly from {{0.15 T}} to {{0.65 T}} in {{0.080 s}}. Calculate (a) the magnitude of the induced EMF, and (b) the induced current.",
          steps: [
            "**Coil area:** {{A = (0.040)^2 = 1.6 * 10^(-3) m^2}}.",
            "**Change in flux density:** {{ΔB = 0.65 - 0.15 = 0.50 T}}.",
            "**Faraday's law (since A and θ = 0° are constant):** {{|ε| = N (ΔΦ / Δt) = N A (ΔB / Δt)}}.",
            "Substitute values: {{|ε| = 500 * 1.6 * 10^(-3) * (0.50 / 0.080) = 0.80 * 6.25 = 5.0 V}}.",
            "**Induced current:** {{I = ε / R = 5.0 / 2.5 = 2.0 A}}.",
          ],
          answer: "{{|ε| = 5.0 V}}, {{I = 2.0 A}}",
          yourTurn: {
            question:
              "A 300-turn coil of area 2.0 × 10⁻³ m² sits perpendicular to a uniform magnetic field that decreases linearly from 0.80 T to 0.20 T in 0.12 s. Calculate the magnitude of the induced EMF in volts.",
            answer: { type: "number", value: 3, tolerance: 0.05, display: "3.0 V" },
            solution:
              "{{|ε| = N A |ΔB| / Δt = 300 * 2.0 * 10^(-3) * (0.80 - 0.20) / 0.12 = 0.36 / 0.12 = 3.0 V}}.",
          },
        },
        {
          title: "Applying Lenz's Law & Energy Conservation (Copper Pipe)",
          problem:
            "A strong cylindrical magnet is dropped down a long vertical copper pipe and quickly reaches a constant terminal velocity {{v_T}} much smaller than in free fall. Explain this observation using Faraday's law, Lenz's law, and conservation of energy.",
          steps: [
            "**Faraday's law:** As the magnet falls, the magnetic flux linking horizontal cross-sections of the conducting copper wall changes, inducing an EMF and circulating **eddy currents** in the copper.",
            "**Lenz's law:** The magnetic field created by these eddy currents opposes the change causing them, exerting an **upward magnetic braking force** on the magnet.",
            "**Terminal velocity:** Because induced EMF and current are proportional to speed ({{I ∝ v}}), the upward braking force grows with speed until {{F_mag = mg}}, at which point net force is zero and the magnet falls at constant {{v_T}}.",
            "**Conservation of energy:** At terminal velocity kinetic energy is constant, so the rate of loss of gravitational potential energy ({{mg v_T}}) equals the rate of electrical Joule heating ({{I^2 R}}) dissipated in the copper pipe.",
          ],
          answer:
            "Eddy currents exert an upward opposing magnetic force proportional to v until F_mag = mg; gravitational PE converts to thermal energy in the copper.",
        },
      ],
      keyPoints: [
        "Faraday's law: {{ε = -N (ΔΦ / Δt)}}; an EMF is induced **only** while magnetic flux linkage is changing.",
        "Lenz's law (the minus sign): the induced current creates a magnetic field that **opposes the change** in magnetic flux, guaranteeing **conservation of energy**.",
        "An EMF is induced even across an **open** loop, but an induced **current** (and magnetic braking force) requires a **closed** conducting path.",
        "The area under an {{ε}}–{{t}} graph equals the total change in magnetic flux linkage {{|Δ(NΦ)|}}.",
        "For a magnet falling through a coil, the exit EMF pulse has opposite sign, higher peak, narrower width, and the **same area** as the entry pulse.",
      ],
      whyItWorks:
        "Lenz's law is not an extra independent mystery bolted onto Faraday's law — it is conservation of energy wearing a magnetic coat. Any induced current dissipates thermal energy {{I^2 R t > 0}} in a resistor. That energy must be paid for by mechanical work {{W = F d}} done by an external agent pushing against an opposing force; if the induced field ever helped the motion instead of opposing it, a single tap would create a perpetual-motion machine.",
      strategies: [
        "For any Lenz's law direction question, follow the 3-step chain: (1) Is flux **increasing** or **decreasing** in which direction? (2) Induced B-field must **oppose** that change (anti-parallel if increasing, parallel if decreasing). (3) Use the **right-hand grip rule** (thumb = induced B, curled fingers = induced current).",
        "In IB extended-response questions on a falling magnet or copper tube, always name all three pillars: **changing flux → Faraday's law**, **opposing field/force → Lenz's law**, and **GPE → thermal/electrical energy → conservation of energy**.",
        "Check if the loop is **open** or **closed**: if a copper tube has a full-length vertical slit cut down its side, big circumferential eddy currents cannot flow, so braking vanishes dramatically!",
      ],
      thinkDeeper:
        "If you cut a narrow **vertical** slit all the way down the copper tube, the magnet drops almost as fast as in free fall. What if you instead cut horizontal rings (slicing the tube into a stack of separate washers)? Surprisingly, the magnet STILL falls slowly! Why? Because the eddy currents circulate horizontally around each ring, so horizontal cuts do not break their paths, whereas a vertical slit cuts right across every horizontal current loop.",
    },

    // =========================================================================
    // SECTION 3: MOTIONAL EMF IN STRAIGHT CONDUCTORS & MOVING LOOPS
    // =========================================================================
    {
      id: "motional-emf",
      heading: "D.4 Motional EMF in Straight Conductors & Moving Loops",
      level: "HL",
      discovery: {
        problem:
          "Picture a metal bar of length {{L}} sliding rightwards at speed {{v}} across a magnetic field {{B}} pointing into the page — with NO wires attached to it at all! Every conduction electron inside the bar is moving rightwards through the B-field. What happens to those electrons, and when does the pile-up stop?",
        idea:
          "By the Lorentz force {{F_B = qvB}}, the magnetic field pushes negative electrons towards one end of the bar (leaving the opposite end positively charged). This charge separation creates an internal **electric field** {{E}} pointing from positive to negative end. Charge stops piling up when the electric force balances the magnetic force: {{qE = qvB ⇒ E = vB}}. Across length {{L}}, that uniform electric field maintains a steady potential difference {{ε = EL = BvL}}!",
      },
      body: `When a straight conductor of length {{L}} moves at speed {{v}} perpendicular to a uniform magnetic field {{B}}, a **motional EMF** is induced across its ends:

{{ε = B v L}}

IB HL expects you to be able to derive {{ε = BvL}} in **two completely independent ways** — and both give the exact same formula!

### Derivation 1: From Faraday's Law (Swept-Area Method)
Suppose the rod slides along conducting U-shaped rails connected to a resistor {{R}}:
1. In time {{Δt}}, the rod advances a distance {{Δx = v Δt}}.
2. The area of the closed loop increases by {{ΔA = L Δx = L v Δt}}.
3. Since {{B}} is uniform and perpendicular to the loop ({{theta = 0°}}), the change in flux is {{ΔΦ = B ΔA = B L v Δt}}.
4. Applying Faraday's law (with {{N = 1}}):

{{|ε| = ΔΦ / Δt = (B L v Δt) / Δt = B v L}}

### Derivation 2: From Magnetic Force on Conduction Electrons (Microscopic Method)
1. Each free electron (charge {{e}}) moves with the rod at speed {{v}} perpendicular to {{B}}, experiencing a magnetic force {{F_B = e v B}} along the rod.
2. Electrons accumulate at one end of the rod, leaving the other end positive, establishing a uniform electric field {{E = ε / L}} inside the rod.
3. In steady state (open circuit), electric and magnetic forces on electrons balance: {{eE = evB ⇒ E = vB}}.
4. Therefore the induced potential difference between the ends is:

{{ε = E L = B v L}}

*(Notice why Derivation 2 is even more general: it explains why an isolated airplane wing or metal rod moving through a B-field develops an EMF between its ends even when there is no closed loop!)*

### Induced Current, Magnetic Braking & Power Balance
Now close the circuit through resistance {{R}} (rails + resistor + rod):
- **Induced current:** {{I = ε / R = (B v L) / R}}
- **Magnetic braking force (Lenz's law in action!):** Because current {{I}} now flows through the rod in magnetic field {{B}}, the rod experiences a motor-effect force {{F_B = B I L}} directed **opposite** to velocity {{v}}:

{{F_B = B I L = B ((B v L) / R) L = (B^2 L^2 v) / R}}

- **Mechanical-to-electrical power balance:** To keep the rod moving at constant velocity {{v}}, you must pull with an external force {{F_app = F_B}}. Your mechanical power input is:

{{P_mech = F_app v = (B^2 L^2 v^2) / R}}

Meanwhile, the electrical power dissipated as heat in the resistor is:

{{P_elec = ε^2 / R = (B v L)^2 / R = (B^2 L^2 v^2) / R}}

**Exact match: {{P_mech = P_elec}}!** Every joule of mechanical work done pushing the rod against the magnetic drag emerges as electrical energy in the circuit.

### Special Case: A Whole Closed Loop Moving in a Uniform Field
What if a **closed rectangular loop** moves entirely *inside* a uniform magnetic field?
- Both the leading edge and trailing edge cut field lines at speed {{v}}, so **both** induce identical EMFs {{ε = BvL}} pushing in the **same direction** (e.g. both upwards) — which oppose each other around the loop!
- Net EMF around the loop is {{ε_net = BvL - BvL = 0}}, matching Faraday's law since total flux {{Φ = BA}} is constant ({{ΔΦ = 0}}).
- Current flows **only while the loop is entering or leaving** the field region (when only one edge is inside {{B}}).`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conducting rod of length L sliding rightward at speed v on U-shaped rails across a magnetic field into the page, showing induced current I, magnetic braking force F_B, external force F_app, and swept area Lv delta t">
  <defs>
    <marker id="arrV3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#15803d"/>
    </marker>
    <marker id="arrF3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#dc2626"/>
    </marker>
    <marker id="arrI3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#7c3aed"/>
    </marker>
    <marker id="arrApp3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#0369a1"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="265" fill="#ffffff"/>
  <text x="16" y="22" font-size="13" font-weight="700" fill="#1e293b">Sliding Rod on Conducting Rails (B into page ⊗)</text>

  <!-- B-field region background -->
  <rect x="112" y="34" width="388" height="176" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="488" y="51" font-size="11.5" font-weight="700" text-anchor="end" fill="#1d4ed8">Uniform B (into page)</text>

  <!-- Grid of X markers for B into page -->
  <g stroke="#3b82f6" stroke-width="1.5" fill="none">
    <g transform="translate(145,62)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(210,62)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(275,62)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(340,62)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(405,62)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(465,62)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>

    <g transform="translate(145,122)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(210,122)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(405,122)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(465,122)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>

    <g transform="translate(145,182)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(210,182)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(275,182)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(340,182)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(405,182)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
    <g transform="translate(465,182)"><circle r="6"/><path d="M-4,-4 L4,4 M4,-4 L-4,4"/></g>
  </g>

  <!-- Swept area delta A = L v delta t -->
  <rect x="304" y="76" width="66" height="92" fill="#fde68a" fill-opacity="0.55" stroke="#d97706" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="337" y="156" font-size="10.5" font-weight="700" text-anchor="middle" fill="#92400e">ΔA = LvΔt</text>

  <!-- U-shaped rails -->
  <polyline points="455,76 62,76 62,102" fill="none" stroke="#334155" stroke-width="3.2"/>
  <polyline points="62,144 62,168 455,168" fill="none" stroke="#334155" stroke-width="3.2"/>

  <!-- Resistor R on left -->
  <rect x="52" y="102" width="20" height="42" rx="2" fill="#f8fafc" stroke="#334155" stroke-width="2.2"/>
  <text x="36" y="127" font-size="13" font-weight="700" fill="#1e293b">R</text>

  <!-- Sliding conducting rod -->
  <rect x="294" y="66" width="12" height="112" rx="4" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
  <text x="285" y="72" font-size="12" font-weight="700" fill="#dc2626">+</text>
  <text x="285" y="182" font-size="14" font-weight="700" fill="#2563eb">−</text>
  <text x="300" y="60" font-size="11.5" font-weight="700" text-anchor="middle" fill="#92400e">Rod (L)</text>

  <!-- Current arrows (anticlockwise: up in rod, left on top rail, down through R, right on bottom rail) -->
  <line x1="300" y1="146" x2="300" y2="96" stroke="#7c3aed" stroke-width="2.2" marker-end="url(#arrI3)"/>
  <text x="278" y="125" font-size="11.5" font-weight="700" fill="#7c3aed">I</text>
  <line x1="185" y1="76" x2="155" y2="76" stroke="#7c3aed" stroke-width="2.4" marker-end="url(#arrI3)"/>
  <text x="170" y="69" font-size="10.5" font-weight="700" text-anchor="middle" fill="#7c3aed">I</text>
  <line x1="155" y1="168" x2="185" y2="168" stroke="#7c3aed" stroke-width="2.4" marker-end="url(#arrI3)"/>

  <!-- Velocity vector v to the right -->
  <line x1="312" y1="100" x2="386" y2="100" stroke="#15803d" stroke-width="2.5" marker-end="url(#arrV3)"/>
  <text x="392" y="104" font-size="12.5" font-weight="700" fill="#15803d">v</text>

  <!-- Applied force F_app to the right -->
  <line x1="312" y1="126" x2="378" y2="126" stroke="#0369a1" stroke-width="2.2" marker-end="url(#arrApp3)"/>
  <text x="383" y="130" font-size="11" font-weight="700" fill="#0369a1">F_app</text>

  <!-- Braking force F_B to the left -->
  <line x1="292" y1="122" x2="226" y2="122" stroke="#dc2626" stroke-width="2.4" marker-end="url(#arrF3)"/>
  <text x="218" y="114" font-size="11" font-weight="700" text-anchor="end" fill="#dc2626">F_B = BIL</text>
  <text x="218" y="136" font-size="10" text-anchor="end" fill="#dc2626">(braking)</text>

  <!-- Formula summary footer -->
  <rect x="16" y="220" width="488" height="34" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.3"/>
  <text x="260" y="241" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">ε = BvL   |   I = BvL / R   |   F_B = B²L²v / R   |   P_mech = F_app v = I²R = P_elec</text>
</svg>`,
      diagramCaption:
        "Moving the rod rightward increases flux into the page, inducing anticlockwise current I (by Lenz's law). That current feels a leftward magnetic braking force F_B = B²L²v/R, balancing mechanical power Fv with electrical heating I²R.",
      workedExamples: [
        {
          title: "Sliding Rod Power Balance & Braking Force",
          problem:
            "A conducting rod of length {{L = 0.40 m}} slides rightward at constant speed {{v = 5.0 m s^(-1)}} along frictionless horizontal rails connected across a resistor {{R = 1.5 Ω}} in a uniform vertical magnetic field {{B = 0.60 T}}. Calculate (a) the induced EMF, (b) the current, (c) the pulling force required to maintain constant speed, and (d) verify that mechanical power input equals electrical power dissipated.",
          steps: [
            "**Motional EMF:** {{ε = B v L = 0.60 * 5.0 * 0.40 = 1.2 V}}.",
            "**Induced current:** {{I = ε / R = 1.2 / 1.5 = 0.80 A}}.",
            "**Magnetic braking force:** {{F_B = B I L = 0.60 * 0.80 * 0.40 = 0.192 N}}. For constant velocity, {{F_app = F_B = 0.192 N}} (0.19 N to 2 s.f.).",
            "**Power check:** {{P_mech = F_app v = 0.192 * 5.0 = 0.96 W}}, and {{P_elec = I^2 R = (0.80)^2 * 1.5 = 0.96 W}} — exact energy conservation!",
          ],
          answer: "{{ε = 1.2 V}}, {{I = 0.80 A}}, {{F = 0.192 N}}, {{P = 0.96 W}}",
          yourTurn: {
            question:
              "An aircraft of wingspan 32 m flies horizontally at 250 m s⁻¹ through a region where the vertical component of Earth's magnetic field is 5.0 × 10⁻⁵ T. Calculate the induced EMF between its wingtips in volts.",
            answer: { type: "number", value: 0.4, tolerance: 0.01, display: "0.40 V" },
            solution:
              "The wings cut the vertical component of Earth's magnetic field perpendicularly: {{ε = B v L = 5.0 * 10^(-5) * 250 * 32 = 0.40 V}}.",
          },
        },
        {
          title: "Terminal Velocity of a Rod Falling on Vertical Rails",
          problem:
            "A metal rod of mass {{m = 0.040 kg}} and length {{L = 0.50 m}} slides without friction down vertical conducting rails joined at the top by a {{R = 0.50 Ω}} resistor, inside a uniform horizontal field {{B = 0.70 T}} perpendicular to the rails. Find its terminal velocity {{v_T}} (use {{g = 9.8 m s^(-2)}}).",
          steps: [
            "As the rod falls at speed {{v}}, the upward magnetic braking force is {{F_B = (B^2 L^2 v) / R}}.",
            "At terminal velocity {{v_T}}, upward magnetic force balances weight: {{(B^2 L^2 v_T) / R = m g}}.",
            "Rearrange for {{v_T}}: {{v_T = (m g R) / (B^2 L^2)}}.",
            "Substitute: {{v_T = (0.040 * 9.8 * 0.50) / (0.70^2 * 0.50^2) = 0.196 / 0.1225 = 1.60 m s^(-1)}}.",
          ],
          answer: "{{v_T = 1.60 m s^(-1)}}",
        },
      ],
      keyPoints: [
        "Motional EMF across a straight conductor cutting field lines perpendicularly is {{ε = B v L}}.",
        "If velocity makes angle {{φ}} with {{B}}, only the perpendicular component cuts field lines: {{ε = B v L sin φ}}.",
        "Closed loop with resistance {{R}}: {{I = B v L / R}}, magnetic braking force {{F_B = B^2 L^2 v / R}}, and power {{P = F_B v = B^2 L^2 v^2 / R = ε^2 / R}}.",
        "Notice the scaling! Doubling {{B}} or {{L}} **quadruples** the braking force and power ({{∝ B^2 L^2}}), while doubling {{R}} **halves** them ({{∝ 1/R}}).",
        "A closed loop translating entirely inside a uniform magnetic field has **zero net induced EMF** and zero current, because opposite sides induce equal and opposing EMFs.",
      ],
      whyItWorks:
        "Motional EMF unifies two halves of electromagnetism: in the laboratory frame, charges inside the rod feel a magnetic force {{qvB}}; in the rod's rest frame, Einstein's special relativity (Theme A.5!) shows that a moving magnetic field transforms partly into an **electric field** {{E' = vB}}. Both frames predict the exact same voltage {{ε = BvL}}!",
      strategies: [
        "For an aircraft flying horizontally, use ONLY the **vertical** component of Earth's magnetic field ({{B_V = B sin(dip)}}) — the horizontal component is parallel to the velocity/wingspan plane and contributes zero EMF.",
        "To find which end of a moving rod is **positive**, apply Fleming's Right-Hand (Generator) Rule — or simply pretend positive charges move with velocity {{v}} and find {{q v × B}} using your right hand (palm/middle finger points toward the **positive** end!).",
        "Whenever a sliding-rod question mentions 'constant speed' or 'terminal speed', immediately set {{F_driving = B^2 L^2 v / R}} (or equate {{P_mech = P_elec}}).",
      ],
      thinkDeeper:
        "Could you power an aircraft's cabin lights by connecting a wire between its wingtips to tap that {{0.40 V}} motional EMF? No! Because the return wire inside the fuselage moves at the exact same speed {{v}} through the exact same magnetic field, it develops an equal opposing {{0.40 V}} EMF — the closed loop encloses constant magnetic flux, so net EMF is strictly zero!",
    },

    // =========================================================================
    // SECTION 4: AC GENERATORS & SINUSOIDAL EMF GRAPHS
    // =========================================================================
    {
      id: "ac-generators-sinusoidal",
      heading: "D.4 Rotating-Coil AC Generators & Sinusoidal EMF Graphs",
      level: "HL",
      discovery: {
        problem:
          "A hand-cranked AC generator spins a coil in a uniform magnetic field and lights a bulb. Suppose you crank it **twice as fast** (doubling the rotation frequency {{f}}). Two things change on the oscilloscope trace of voltage vs time: the waves get twice as squished horizontally (double the frequency), AND do the peaks stay the same height or grow twice as tall? Why?",
        idea:
          "The peaks grow **twice as tall** too! Every half-turn still sweeps the same flux change {{2NBA}}, so doubling the spin rate completes that flux change in **half the time**. By Faraday's law {{ε = -Δ(NΦ)/Δt}}, halving {{Δt}} **doubles the peak EMF** ({{ε_0 = NBAω = 2πfNBA}}). This is the #1 AC-generator graph question on IB Paper 1 and Paper 2!",
      },
      body: `An **alternating current (AC) generator** converts rotational mechanical energy into electrical energy by spinning a coil of {{N}} turns and area {{A}} at constant angular speed {{ω = 2πf = 2π/T}} inside a uniform magnetic field {{B}}.

### Exact Sinusoidal Equations
Measure {{t = 0}} when the **plane of the coil is perpendicular to {{B}}** (so the normal is parallel to {{B}}, {{theta(0) = 0}}). At time {{t}}, the coil has rotated through angle {{theta = ωt}}:

1. **Magnetic flux linkage:**
   {{NΦ(t) = N B A cos(ωt)}}

2. **Induced EMF (differentiating via Faraday's law {{ε = -d(NΦ)/dt}}):**
   {{ε(t) = N B A ω sin(ωt) = ε_0 sin(ωt)}}

where the **peak (maximum) induced EMF** is:

{{ε_0 = N B A ω = 2 pi f N B A}}

*(Alternative derivation using motional EMF: the two active sides of length {{L}} at radius {{r}} move at tangential speed {{v = ωr}}, cutting field lines at angle {{ωt}}. Together for {{N}} turns, {{ε = 2 N B L (ωr) sin(ωt) = N B (2rL) ω sin(ωt) = NBAω sin(ωt)}} since area {{A = 2rL}}!)*

### The Crucial 90° (π/2 rad) Phase Shift
Compare the {{NΦ(t)}} and {{ε(t)}} graphs carefully — this is a favourite IB conceptual check:
- **When the coil plane is perpendicular to {{B}} ({{theta = 0°, 180°}}):** Flux linkage is at a **maximum** ({{±NBA}}), so the gradient of the cosine curve is **zero**. The sides of the coil are moving momentarily parallel to {{B}}, cutting zero field lines → **{{ε = 0}}**!
- **When the coil plane is parallel to {{B}} ({{theta = 90°, 270°}}):** Flux linkage passes through **zero**, where the cosine curve is **steepest**. The sides of the coil cut perpendicular to {{B}} at full speed → **{{|ε| = ε_0}} (maximum EMF)**!
- Therefore, **flux linkage and induced EMF are {{90°}} ({{π/2}} rad or {{T/4}}) out of phase**.

### Effect of Changing Rotation Frequency {{f}} (or {{ω}})
| Change to Generator | Peak Flux Linkage {{NΦ_0 = NBA}} | Peak EMF {{ε_0 = 2πfNBA}} | Output Frequency {{f}} | Period {{T = 1/f}} |
|---|---|---|---|---|
| Double spin rate ({{f → 2f}}) | Unchanged | **Doubles** ({{2ε_0}}) | **Doubles** ({{2f}}) | **Halves** ({{T/2}}) |
| Halve spin rate ({{f → f/2}}) | Unchanged | **Halves** ({{ε_0/2}}) | **Halves** ({{f/2}}) | **Doubles** ({{2T}}) |
| Double {{N}}, {{B}}, or {{A}} (same {{f}}) | **Doubles** | **Doubles** ({{2ε_0}}) | Unchanged | Unchanged |

### Slip Rings vs Split-Ring Commutator
- **AC generator (alternator):** Uses **two separate slip rings** and carbon brushes. Each end of the coil stays permanently connected to its own output terminal, so as the induced EMF reverses every half-turn, the external circuit receives a smooth **alternating sinusoidal EMF** (reversing polarity twice per cycle).
- **DC generator (dynamo):** Replaces the slip rings with a **split-ring commutator** that swaps the external connections every half-turn (precisely when {{ε = 0}}). The output becomes pulsating unidirectional DC: {{ε_DC(t) = |ε_0 sin(ωt)|}} (all lobes positive!).`,
      diagram: `<svg viewBox="0 0 520 318" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vertically aligned AC generator graphs showing coil orientations, cosine magnetic flux linkage N Phi of t, and ninety-degree phase-shifted sine induced EMF epsilon of t over one full period T">
  <defs>
    <marker id="arrAx4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
      <path d="M0,1 L9,5 L0,9 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="318" fill="#ffffff"/>
  <text x="16" y="20" font-size="12.5" font-weight="700" fill="#1e293b">AC Generator: 90° Phase Shift Between Flux Linkage and Induced EMF</text>

  <!-- Vertical alignment guide lines at t = 0, T/4, T/2, 3T/4, T -->
  <!-- x coords: x0=76, x1=172, x2=268, x3=364, x4=460 (quarter period = 96 px) -->
  <g stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,3">
    <line x1="172" y1="36" x2="172" y2="292"/>
    <line x1="268" y1="36" x2="268" y2="292"/>
    <line x1="364" y1="36" x2="364" y2="292"/>
    <line x1="460" y1="36" x2="460" y2="292"/>
  </g>

  <!-- Top row: Coil orientations relative to horizontal B-field -->
  <text x="14" y="54" font-size="10.5" font-weight="700" fill="#475569">Coil vs B→</text>
  <!-- t=0: vertical coil (perp to B, max +flux) -->
  <g transform="translate(76,50)">
    <line x1="-18" y1="0" x2="18" y2="0" stroke="#93c5fd" stroke-width="1.4"/>
    <line x1="0" y1="-13" x2="0" y2="13" stroke="#b45309" stroke-width="3.5"/>
    <circle cx="0" cy="-13" r="2.8" fill="#dc2626"/>
    <text x="0" y="24" font-size="9.5" text-anchor="middle" fill="#475569">θ = 0°</text>
  </g>
  <!-- t=T/4: horizontal coil (parallel to B, zero flux, max +EMF) -->
  <g transform="translate(172,50)">
    <line x1="-18" y1="0" x2="18" y2="0" stroke="#93c5fd" stroke-width="1.4"/>
    <line x1="-13" y1="0" x2="13" y2="0" stroke="#b45309" stroke-width="3.5"/>
    <circle cx="13" cy="0" r="2.8" fill="#dc2626"/>
    <text x="0" y="24" font-size="9.5" text-anchor="middle" fill="#475569">θ = 90°</text>
  </g>
  <!-- t=T/2: vertical flipped -->
  <g transform="translate(268,50)">
    <line x1="-18" y1="0" x2="18" y2="0" stroke="#93c5fd" stroke-width="1.4"/>
    <line x1="0" y1="-13" x2="0" y2="13" stroke="#b45309" stroke-width="3.5"/>
    <circle cx="0" cy="13" r="2.8" fill="#dc2626"/>
    <text x="0" y="24" font-size="9.5" text-anchor="middle" fill="#475569">θ = 180°</text>
  </g>
  <!-- t=3T/4: horizontal flipped -->
  <g transform="translate(364,50)">
    <line x1="-18" y1="0" x2="18" y2="0" stroke="#93c5fd" stroke-width="1.4"/>
    <line x1="-13" y1="0" x2="13" y2="0" stroke="#b45309" stroke-width="3.5"/>
    <circle cx="-13" cy="0" r="2.8" fill="#dc2626"/>
    <text x="0" y="24" font-size="9.5" text-anchor="middle" fill="#475569">θ = 270°</text>
  </g>
  <!-- t=T: vertical back to start -->
  <g transform="translate(460,50)">
    <line x1="-18" y1="0" x2="18" y2="0" stroke="#93c5fd" stroke-width="1.4"/>
    <line x1="0" y1="-13" x2="0" y2="13" stroke="#b45309" stroke-width="3.5"/>
    <circle cx="0" cy="-13" r="2.8" fill="#dc2626"/>
    <text x="0" y="24" font-size="9.5" text-anchor="middle" fill="#475569">θ = 360°</text>
  </g>

  <!-- MIDDLE GRAPH: Flux linkage NPhi(t) = NBA cos(wt), center y = 134, amp = 38 -->
  <line x1="76" y1="180" x2="76" y2="86" stroke="#1e293b" stroke-width="1.6" marker-end="url(#arrAx4)"/>
  <line x1="70" y1="134" x2="494" y2="134" stroke="#1e293b" stroke-width="1.6" marker-end="url(#arrAx4)"/>
  <text x="68" y="99" font-size="10.5" font-weight="700" text-anchor="end" fill="#2563eb">+NBA</text>
  <text x="68" y="176" font-size="10.5" font-weight="700" text-anchor="end" fill="#2563eb">−NBA</text>
  <text x="14" y="138" font-size="12" font-weight="700" fill="#2563eb">NΦ(t)</text>
  <text x="496" y="138" font-size="11" font-weight="700" fill="#1e293b">t</text>

  <!-- Smooth cosine wave: 4 cubic beziers (k = 0.5523 * 96 / (pi/2) approx 35 px tangent) -->
  <path d="M 76 96 C 111 96, 138 110, 172 134 C 206 158, 233 172, 268 172 C 303 172, 330 158, 364 134 C 398 110, 425 96, 460 96" fill="none" stroke="#2563eb" stroke-width="2.8"/>
  <text x="466" y="102" font-size="10.5" font-weight="700" fill="#2563eb">NBA cos(ωt)</text>
  <!-- Key dots on cosine -->
  <circle cx="76" cy="96" r="3.5" fill="#2563eb"/>
  <circle cx="172" cy="134" r="3.5" fill="#2563eb"/>
  <circle cx="268" cy="172" r="3.5" fill="#2563eb"/>
  <circle cx="364" cy="134" r="3.5" fill="#2563eb"/>
  <circle cx="460" cy="96" r="3.5" fill="#2563eb"/>

  <!-- Steepest negative gradient annotation -->
  <line x1="156" y1="120" x2="188" y2="148" stroke="#ea580c" stroke-width="1.6" stroke-dasharray="3,2"/>
  <text x="220" y="114" font-size="9.5" font-weight="700" fill="#c2410c">Steepest slope</text>
  <text x="220" y="125" font-size="9.5" fill="#c2410c">→ Max +ε below!</text>

  <!-- BOTTOM GRAPH: Induced EMF e(t) = NBAw sin(wt), center y = 246, amp = 38 -->
  <line x1="76" y1="292" x2="76" y2="198" stroke="#1e293b" stroke-width="1.6" marker-end="url(#arrAx4)"/>
  <line x1="70" y1="246" x2="494" y2="246" stroke="#1e293b" stroke-width="1.6" marker-end="url(#arrAx4)"/>
  <text x="68" y="212" font-size="10.5" font-weight="700" text-anchor="end" fill="#ea580c">+ε₀</text>
  <text x="68" y="288" font-size="10.5" font-weight="700" text-anchor="end" fill="#ea580c">−ε₀</text>
  <text x="14" y="250" font-size="12" font-weight="700" fill="#ea580c">ε(t)</text>
  <text x="496" y="250" font-size="11" font-weight="700" fill="#1e293b">t</text>

  <!-- Smooth sine wave -->
  <path d="M 76 246 C 110 222, 137 208, 172 208 C 207 208, 234 222, 268 246 C 302 270, 329 284, 364 284 C 399 284, 426 270, 460 246" fill="none" stroke="#ea580c" stroke-width="2.8"/>
  <text x="464" y="232" font-size="10.5" font-weight="700" fill="#ea580c">ε₀ sin(ωt)</text>
  <text x="464" y="244" font-size="9.5" fill="#c2410c">ε₀ = NBAω</text>

  <!-- Key dots on sine -->
  <circle cx="76" cy="246" r="3.5" fill="#ea580c"/>
  <circle cx="172" cy="208" r="3.5" fill="#ea580c"/>
  <circle cx="268" cy="246" r="3.5" fill="#ea580c"/>
  <circle cx="364" cy="284" r="3.5" fill="#ea580c"/>
  <circle cx="460" cy="246" r="3.5" fill="#ea580c"/>

  <!-- Time axis labels -->
  <text x="76" y="308" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">0</text>
  <text x="172" y="308" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">T/4</text>
  <text x="268" y="308" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">T/2</text>
  <text x="364" y="308" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">3T/4</text>
  <text x="460" y="308" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">T</text>
</svg>`,
      diagramCaption:
        "Because ε(t) = −d(NΦ)/dt, induced EMF peaks at T/4 and 3T/4 exactly when flux linkage crosses zero, and vanishes at 0, T/2, and T when flux linkage reaches ±NBA.",
      workedExamples: [
        {
          title: "Calculating Peak EMF & Doubling Rotation Speed",
          problem:
            "An AC generator consists of a 200-turn coil of cross-sectional area {{0.015 m^2}} rotating at {{f = 50 Hz}} in a uniform magnetic field {{B = 0.20 T}}. Calculate (a) the peak flux linkage, (b) the peak induced EMF, and (c) the new peak EMF and period if the rotation frequency is doubled to {{100 Hz}}.",
          steps: [
            "**Peak flux linkage:** {{NΦ_0 = N B A = 200 * 0.20 * 0.015 = 0.60 Wb}}.",
            "**Angular speed:** {{ω = 2 pi f = 2 pi * 50 = 100 pi ≈ 314.2 rad s^(-1)}}.",
            "**Peak induced EMF:** {{ε_0 = N B A ω = 0.60 * 100 pi = 60 pi ≈ 188 V}} (3 s.f.).",
            "**Doubling f to 100 Hz:** Both {{ω}} and {{ε_0}} double → new peak EMF {{ε_0' = 120 pi ≈ 377 V}}, and new period {{T' = 1 / 100 = 0.010 s}} (10 ms, half the original 20 ms).",
          ],
          answer: "{{NΦ_0 = 0.60 Wb}}, {{ε_0 = 188 V}}; at 100 Hz: {{ε_0' = 377 V}}, {{T' = 0.010 s}}",
          yourTurn: {
            question:
              "A generator coil with 100 turns and area 0.020 m² rotates at angular speed ω = 25 rad s⁻¹ in a uniform magnetic field of 0.40 T. Calculate the peak induced EMF ε₀ in volts.",
            answer: { type: "number", value: 20, tolerance: 0.2, display: "20 V" },
            solution:
              "{{ε_0 = N B A ω = 100 * 0.40 * 0.020 * 25 = 20 V}}.",
          },
        },
        {
          title: "Extracting Peak Flux Linkage from an EMF–Time Graph",
          problem:
            "An oscilloscope connected to an AC generator displays a sinusoidal EMF of amplitude {{ε_0 = 12.0 V}} and time period {{T = 0.040 s}}. Determine the maximum magnetic flux linkage {{NΦ_0}} of the coil.",
          steps: [
            "**Find frequency and angular speed:** {{f = 1 / T = 1 / 0.040 = 25 Hz}}, so {{ω = 2 pi f = 50 pi ≈ 157.1 rad s^(-1)}}.",
            "**Link peak EMF to peak flux linkage:** {{ε_0 = (NΦ_0) ω}}.",
            "**Solve for {{NΦ_0}}:** {{NΦ_0 = ε_0 / ω = 12.0 / (50 pi) = 0.0764 Wb}} (3 s.f.).",
          ],
          answer: "{{NΦ_0 = 0.0764 Wb}}",
        },
      ],
      keyPoints: [
        "For a coil starting perpendicular to {{B}}: {{NΦ(t) = NBA cos(ωt)}} and {{ε(t) = NBAω sin(ωt)}} with peak {{ε_0 = NBAω = 2πfNBA}}.",
        "Flux linkage and induced EMF are always **{{90°}} ({{π/2}} rad) out of phase**: peak EMF occurs when flux is **zero** (plane parallel to {{B}}).",
        "Doubling the rotational speed {{f}} changes **two** features of the {{ε}}–{{t}} graph: it **doubles the peak EMF** AND **halves the period** (doubles the frequency).",
        "Connecting a load resistor to a generator draws current, creating an opposing torque (Lenz's law) so the turbine must supply extra mechanical power.",
        "**Slip rings** deliver alternating current (AC); a **split-ring commutator** rectifies the output into pulsating direct current (DC).",
      ],
      whyItWorks:
        "Faraday's law tells us {{ε}} is the negative time derivative of {{NΦ}}. Differentiating {{cos(ωt)}} with respect to {{t}} via the chain rule does two things at once: it shifts the wave by {{90°}} ({{-d/dt[cos(ωt)] = +ω sin(ωt)}}) AND pulls a factor of {{ω}} out front — directly explaining both the {{90°}} phase lag and why faster spinning scales peak voltage linearly with {{ω}}!",
      strategies: [
        "When asked to sketch a new {{ε}}–{{t}} curve after changing spin rate by a factor {{k}}, check **both** axes before drawing: amplitude multiplies by {{k}} AND the number of complete waves in the same time window multiplies by {{k}}.",
        "Never guess whether flux is max or zero from memory — visualise the coil face: when the face points straight into the field (catching max rain), it is momentarily flat-topped in flux, so {{ε = 0}}.",
        "Remember: increasing the **load resistance** connected to an AC generator reduces the current and the braking torque, making the generator *easier* to spin (while peak open-circuit EMF {{ε_0}} stays unchanged!).",
      ],
      thinkDeeper:
        "Why does a bicycle dynamo or hand-cranked generator suddenly feel noticeably **harder to turn** the moment you switch the lamp ON? When the switch is open, {{I = 0}} so there is zero magnetic braking torque — you only fight bearing friction. Closing the switch lets induced current flow in the coil, creating a Lenz opposing torque {{τ ∝ I}} so your muscles must supply mechanical power {{P = τω}} equal to the electrical power lighting the lamp!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define magnetic flux Φ and state its SI unit.",
        back: "Magnetic flux is {{Φ = B A cos theta}}, where {{B}} is magnetic flux density, {{A}} is the area, and {{theta}} is the angle between {{B}} and the **normal** to the area. SI unit: **weber (Wb)**, where {{1 Wb = 1 T m^2 = 1 V s}}.",
        level: "HL",
      },
      {
        front: "What is magnetic flux linkage, and how does it differ from magnetic flux?",
        back: "Magnetic flux linkage {{NΦ = N B A cos theta}} is the magnetic flux through a single turn multiplied by the number of turns {{N}} in the coil. Unit: Wb.",
        level: "HL",
      },
      {
        front: "If the plane of a coil makes an angle of 35° with a uniform magnetic field, what angle θ goes into Φ = BA cos θ?",
        back: "{{theta = 90° - 35° = 55°}}, because {{theta}} is always measured between {{B}} and the **normal** to the coil plane (equivalently {{cos 55° = sin 35°}}).",
        level: "HL",
      },
      {
        front: "State Faraday's law of electromagnetic induction.",
        back: "The magnitude of the induced EMF is equal to the rate of change of magnetic flux linkage: {{ε = -N (ΔΦ / Δt)}}.",
        level: "HL",
      },
      {
        front: "State Lenz's law and explain its connection to a fundamental law of physics.",
        back: "The direction of an induced EMF/current always **opposes the change in magnetic flux** producing it. It is a direct consequence of **conservation of energy**: mechanical work must be done against the opposing magnetic force to supply the electrical energy generated.",
        level: "HL",
      },
      {
        front: "What does the area under an induced EMF vs time (ε–t) graph represent?",
        back: "The magnitude of the **total change in magnetic flux linkage**, {{|Δ(NΦ)| = N |ΔΦ|}}. For a magnet falling completely through a coil, the entry and exit pulses have **equal areas**.",
        level: "HL",
      },
      {
        front: "Why is the exit EMF pulse taller and narrower than the entry pulse when a bar magnet falls vertically through a coil?",
        back: "Gravity accelerates the magnet so it exits **faster** than it entered. Faster motion gives a greater rate of change of flux ({{|ΔΦ/Δt|}} → taller peak) over a shorter duration (narrower pulse), while total flux change {{NΦ_max}} (the area) stays the same.",
        level: "HL",
      },
      {
        front: "State the motional EMF equation for a straight conductor and give the two ways to derive it.",
        back: "{{ε = B v L}}. Derived from (1) **Faraday's law** via swept area {{ΔA = LvΔt}}, or (2) **Lorentz force balance** on conduction electrons ({{qE = qvB ⇒ ε = EL = BvL}}).",
        level: "HL",
      },
      {
        front: "A rod of length L slides at speed v on rails with circuit resistance R in perpendicular field B. What is the magnetic braking force F_B and power P?",
        back: "{{I = BvL / R}}, so {{F_B = B I L = B^2 L^2 v / R}} opposing motion. Mechanical power {{P = F_B v = B^2 L^2 v^2 / R}} equals electrical Joule heating {{I^2 R = ε^2 / R}}.",
        level: "HL",
      },
      {
        front: "A closed rectangular wire loop moves at constant velocity entirely inside a uniform magnetic field. What is the induced EMF around the loop?",
        back: "**Zero!** The total magnetic flux through the loop does not change ({{ΔΦ = 0}}); equivalently, the equal EMFs {{BvL}} induced in the leading and trailing edges oppose each other around the loop.",
        level: "HL",
      },
      {
        front: "Write the flux linkage and induced EMF equations for a rotating AC generator coil starting perpendicular to B.",
        back: "{{NΦ(t) = N B A cos(ωt)}} and {{ε(t) = N B A ω sin(ωt)}}, where {{ω = 2πf}} and peak EMF is {{ε_0 = N B A ω = 2πfNBA}}.",
        level: "HL",
      },
      {
        front: "At what coil orientation in an AC generator is the induced EMF maximum, and what is the flux at that instant?",
        back: "Induced EMF is **maximum** ({{±ε_0}}) when the **plane of the coil is parallel to {{B}}** ({{theta = 90°}} or {{270°}}) — at the exact instant when magnetic flux linkage is **zero** (rate of change of flux is steepest).",
        level: "HL",
      },
      {
        front: "How does doubling the rotational frequency f of an AC generator affect its EMF vs time graph?",
        back: "It changes **two** things simultaneously: (1) the **peak EMF doubles** ({{ε_0 ∝ f}}), and (2) the **period halves** / frequency doubles (twice as many cycles per second).",
        level: "HL",
      },
      {
        front: "Distinguish between slip rings and a split-ring commutator in a generator.",
        back: "**Slip rings** maintain continuous contact with each coil end, producing **alternating (sinusoidal) EMF (AC)**. A **split-ring commutator** reverses external connections every half-turn at {{ε = 0}}, producing pulsating **unidirectional EMF (DC)**.",
        level: "HL",
      },
    ],
    mustKnow: [
      "{{Φ = B A cos theta}} where {{theta}} is ALWAYS the angle between {{B}} and the **normal** to the coil face.",
      "Flipping a coil through {{180°}} changes flux linkage from {{+NBA}} to {{-NBA}}, giving {{|Δ(NΦ)| = 2NBA}}.",
      "Faraday's law {{ε = -N (ΔΦ / Δt)}}: a steady magnetic field induces **zero** EMF, no matter how strong {{B}} is.",
      "Lenz's law (the minus sign) enforces **conservation of energy** by making induced currents oppose the flux change causing them.",
      "An EMF is induced in an open circuit whenever flux changes, but **current** and **magnetic braking force** require a closed conducting path.",
      "For a falling magnet through a coil, the exit EMF pulse is opposite in polarity, **taller**, **narrower**, and has **equal area** ({{NΦ_max}}) compared to the entry pulse.",
      "Motional EMF {{ε = BvL}} can be derived from swept area {{ΔA = LvΔt}} OR electron force balance {{qE = qvB}}.",
      "Magnetic braking force on a sliding rod is {{F_B = B^2 L^2 v / R}}, and mechanical power {{Fv}} equals electrical power {{ε^2 / R}}.",
      "AC generator: {{NΦ = NBA cos(ωt)}} and {{ε = NBAω sin(ωt)}} are **{{90°}} out of phase** (max EMF when flux = 0; zero EMF when flux = max).",
      "Doubling the spin rate {{f}} of an AC generator **doubles peak EMF AND doubles frequency** (halves period).",
    ],
    misconceptions: [
      {
        wrong: "Using the angle between the plane of the coil and B directly in Φ = BA cos θ.",
        right: "{{theta}} in {{Φ = BA cos theta}} is the angle between {{B}} and the **normal** to the coil. If the plane makes angle {{α}} with {{B}}, use {{theta = 90° - α}} (so {{Φ = BA sin α}}).",
        level: "HL",
      },
      {
        wrong: "A stronger magnetic field always produces a larger induced EMF.",
        right: "Induced EMF depends on the **rate of change** of flux ({{ΔΦ/Δt}}), not the static value of {{B}}. A massive 10 T MRI field that is completely steady induces **zero** EMF in a stationary coil!",
        level: "HL",
      },
      {
        wrong: "In an AC generator, induced EMF is maximum when magnetic flux through the coil is maximum.",
        right: "The exact opposite! When flux is maximum (coil perpendicular to {{B}}), the cosine curve is momentarily flat so {{dΦ/dt = 0}} and **EMF is zero**. Peak EMF occurs when flux crosses **zero** (coil parallel to {{B}}).",
        level: "HL",
      },
      {
        wrong: "Doubling the rotation speed of an AC generator only doubles the frequency of the output wave (keeping peak voltage the same).",
        right: "Because {{ε_0 = 2πfNBA}}, doubling {{f}} **doubles peak EMF** AND **doubles frequency** (halves the period).",
        level: "HL",
      },
      {
        wrong: "Flipping a coil by 180° in a uniform field gives zero net change in flux because the final orientation looks the same.",
        right: "Flux is signed relative to the coil's face normal! Going from {{θ = 0°}} to {{θ = 180°}} takes flux linkage from {{+NBA}} to {{-NBA}}, so {{|Δ(NΦ)| = 2NBA}}.",
        level: "HL",
      },
      {
        wrong: "Moving a closed metal loop at high speed completely inside a huge uniform magnetic field generates a large current.",
        right: "While the entire loop stays inside a uniform field, total enclosed flux {{Φ = BA}} is constant ({{ΔΦ = 0}}), so net EMF and current are strictly **zero**. Current only flows while entering or leaving the field boundary.",
        level: "HL",
      },
      {
        wrong: "Eddy-current braking in a copper tube can stop a falling magnet completely and hold it hovering in mid-air.",
        right: "Braking force is proportional to velocity ({{F_B ∝ v}}). If the magnet ever stopped ({{v = 0}}), flux would stop changing, eddy currents would vanish, and gravity would pull it down again — so it settles to a slow **non-zero terminal velocity**.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting to convert {{cm^2}} to {{m^2}} by multiplying by {{10^(-4)}} (many students divide by 100 instead of 10,000!).",
      "Forgetting to multiply by the number of turns {{N}} when calculating flux linkage {{NΦ}} or EMF {{ε = -N ΔΦ/Δt}}.",
      "Writing 'Lenz's law opposes the magnetic field' instead of 'opposes the **change** in magnetic flux' — IB markschemes penalise omitting the word **change**!",
      "Confusing frequency {{f}} (Hz) with angular speed {{ω = 2πf}} (rad s⁻¹) when computing {{ε_0 = NBAω}}, missing the factor of {{2π}}.",
      "Drawing the exit pulse of a falling magnet through a coil with the same width or smaller height than the entry pulse, or with the same polarity.",
      "Stating that no EMF is induced when a coil circuit is open — an **EMF** IS induced across the terminals; it is the induced **current** (and braking force) that is zero!",
      "Forgetting to square {{B}} and {{L}} in the magnetic braking force {{F_B = B^2 L^2 v / R}} when scaling variables in Paper 1A ratio questions.",
    ],
    mnemonics: [
      {
        topic: "Normal Angle in Flux",
        device: "N-C-N: Normal goes with Cosine, Never the plane!",
        explanation: "Use {{cos theta}} only with the angle to the **Normal**; if given the angle to the coil plane, switch to {{90° - α}} (or {{sin α}}).",
        level: "HL",
      },
      {
        topic: "AC Generator Peak EMF",
        device: "NBA-ω ('NBA Wow!')",
        explanation: "{{ε_0 = N B A ω = 2πf NBA}} — remember all four factors ({{N}}, {{B}}, {{A}}, {{ω}}) scale peak EMF linearly!",
        level: "HL",
      },
      {
        topic: "Lenz's Law 3-Step Chain",
        device: "C-O-G: Change → Oppose → Grip",
        explanation: "(1) Find the flux **Change** (increasing/decreasing?); (2) draw the induced B-field to **Oppose** that change; (3) apply the right-hand **Grip** rule to get induced current direction.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Eddy-Current Brakes on High-Speed Trains & Roller Coasters",
        emoji: "🎢",
        detail:
          "Drop-tower rides and Shinkansen trains pass thick copper or aluminium fins through strong magnets. Changing flux induces eddy currents that produce smooth, wear-free braking force {{F ∝ v}} — requiring zero electrical power to fail-safe!",
      },
      {
        title: "Induction Cooktops",
        emoji: "🍳",
        detail:
          "A coil under the glass surface carries high-frequency alternating current (20–50 kHz), creating a rapidly oscillating magnetic field. This induces intense eddy currents directly inside ferromagnetic pan bases, heating the pan via {{I^2 R}} while the glass stays cool.",
      },
      {
        title: "EV Regenerative Braking",
        emoji: "🔋",
        detail:
          "When you lift off the accelerator in an electric vehicle, its traction motor switches into AC generator mode: the wheels spin the rotor, Lenz's opposing torque slows the car, and kinetic energy feeds back into the battery instead of heating brake pads.",
      },
      {
        title: "Electric Guitar Pickups & Dynamic Microphones",
        emoji: "🎸",
        detail:
          "Vibrating steel guitar strings (or a magnet-linked microphone diaphragm) continuously alter the magnetic flux through a tiny multi-thousand-turn coil, translating sound vibrations directly into an alternating voltage signal via Faraday's law.",
      },
      {
        title: "Power-Station AC Alternators",
        emoji: "🏭",
        detail:
          "Hydroelectric, wind, and steam turbines spin giant electromagnets inside stator coils at exact synchronous speeds (e.g. 50 Hz in Singapore & Europe, 60 Hz in North America) to generate sinusoidal AC electricity for the grid.",
      },
    ],
    videos: [
      {
        title: "IB Physics D.4: Magnetic Flux, Faraday's & Lenz's Laws",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=Andy+Masley+IB+Physics+electromagnetic+induction+Faraday+Lenz",
      },
      {
        title: "Electromagnetic Induction & AC Generators (IB HL Physics)",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=Chris+Doner+IB+Physics+electromagnetic+induction+AC+generator",
      },
      {
        title: "Why Does a Magnet Fall Slowly Through a Copper Pipe? (Eddy Currents)",
        channel: "Veritasium / Physics Demos",
        url: "https://www.youtube.com/results?search_query=magnet+falling+through+copper+pipe+Lenz+law+eddy+currents",
      },
      {
        title: "Motional EMF, Sliding Rails & Magnetic Braking Explained",
        channel: "Michel van Biezen",
        url: "https://www.youtube.com/results?search_query=Michel+van+Biezen+motional+EMF+sliding+rod+rails",
      },
    ],
    formulas: [
      {
        name: "Magnetic Flux",
        formula: "{{Φ = B A cos theta}}",
        note: "θ = angle between B and the area normal; unit: Wb (1 Wb = 1 T m² = 1 V s).",
        level: "HL",
      },
      {
        name: "Magnetic Flux Linkage",
        formula: "{{NΦ = N B A cos theta}}",
        note: "Total flux linked by an N-turn coil; unit: Wb.",
        level: "HL",
      },
      {
        name: "Faraday's Law of Induction",
        formula: "{{ε = -N (ΔΦ / Δt)}}",
        note: "Induced EMF equals negative rate of change of flux linkage; minus sign = Lenz's law.",
        level: "HL",
      },
      {
        name: "Area Under EMF–Time Graph",
        formula: "{{\"Area\" = |Δ(NΦ)| = N |ΔΦ|}}",
        note: "Integrating |ε| over time gives total flux-linkage change.",
        level: "HL",
      },
      {
        name: "Motional EMF (Straight Conductor)",
        formula: "{{ε = B v L}}",
        note: "For conductor of length L moving perpendicular to uniform B at speed v (general: BvL sin φ).",
        level: "HL",
      },
      {
        name: "Induced Current in Sliding-Rod Loop",
        formula: "{{I = (B v L) / R}}",
        note: "R = total resistance of closed rail–rod–resistor loop.",
        level: "HL",
      },
      {
        name: "Magnetic Braking Force on Sliding Rod",
        formula: "{{F_B = B I L = (B^2 L^2 v) / R}}",
        note: "Always opposes velocity v (Lenz's law).",
        level: "HL",
      },
      {
        name: "Mechanical–Electrical Power Balance",
        formula: "{{P = F_B v = I^2 R = (B^2 L^2 v^2) / R}}",
        note: "Work per second done pulling rod equals thermal power dissipated in R.",
        level: "HL",
      },
      {
        name: "AC Generator Flux Linkage",
        formula: "{{NΦ(t) = N B A cos(ωt)}}",
        note: "Starting at t = 0 with coil plane perpendicular to B (θ = 0); ω = 2πf.",
        level: "HL",
      },
      {
        name: "AC Generator Sinusoidal EMF",
        formula: "{{ε(t) = N B A ω sin(ωt) = ε_0 sin(ωt)}}",
        note: "90° (π/2 rad) out of phase with NΦ(t).",
        level: "HL",
      },
      {
        name: "Peak Induced EMF of AC Generator",
        formula: "{{ε_0 = N B A ω = 2 pi f N B A}}",
        note: "Doubling f doubles both ε₀ and output frequency.",
        level: "HL",
      },
    ],
  },
};
