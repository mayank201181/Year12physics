import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "c1-shm-waves",
  title: "C.1–C.2 Simple Harmonic Motion & The Wave Model",
  strand: "Theme C: Wave Behaviour",
  icon: "〰️",
  level: "SL",
  summary:
    "Discover why springs and pendulums keep steady time through the defining SHM law a = −ω²x, master HL phase and energy equations, decode travelling-wave graphs, and link EM spectra to inverse-square intensity.",
  intro:
    "From atomic vibrations inside crystals to seismic waves crossing the Earth and starlight crossing galaxies, almost every signal in physics starts with a simple oscillation and travels as a wave. In **C.1 Simple Harmonic Motion** you uncover the exact mathematical condition that makes an oscillation isochronous (constant period), while **HL** deepens this into analytical sine/cosine equations, phase differences, and parabolic energy transfers. In **C.2 The Wave Model** you scale from one oscillator to millions coupled together—learning to read displacement–distance and displacement–time graphs without ever mixing them up, compute wave speeds on strings and in vacuum, and apply the inverse-square intensity law.",

  guide: [
    // =========================================================================
    // SECTION 1: C.1 SL — SHM FOUNDATIONS, PENDULUMS & SPRINGS
    // =========================================================================
    {
      id: "shm-foundations",
      heading: "C.1 Defining Simple Harmonic Motion, Pendulums & Springs",
      level: "SL",
      discovery: {
        problem:
          "Compare two periodic motions: (1) a superball bouncing elastically up and down on a hard concrete floor, and (2) a mass hanging on a helical spring bobbing up and down. Both repeat with a fixed period. Yet **only one** is Simple Harmonic Motion (SHM). Also, if you pull the spring mass **twice as far** down before releasing it, does its period double, halve, or stay the same?",
        idea:
          "The bouncing ball is **not** SHM: while in mid-air its acceleration is constant (−g) regardless of height, and at the floor it receives a sudden upward impulse. By contrast, a spring's restoring force grows linearly with stretch ({{F = -k x}}), so acceleration is proportional to displacement and directed back toward equilibrium ({{a = -ω^2 x}}). Pulling twice as far doubles the distance to travel **and** doubles the restoring force and acceleration at every point—those two effects cancel out exactly, so the period stays **unchanged** (isochronous)!",
      },
      body: `An **oscillation** is a repetitive back-and-forth motion about a stable **equilibrium position** ({{x = 0}}). Every periodic oscillation has:

- **Displacement ({{x}}):** signed distance from equilibrium (unit: m).
- **Amplitude ({{x_0}}):** maximum magnitude of displacement from equilibrium (unit: m).
- **Period ({{T}}):** time for one complete oscillation (unit: s).
- **Frequency ({{f}}):** number of complete oscillations per second, {{f = 1/T}} (unit: Hz = s⁻¹).
- **Angular frequency ({{ω}}):** rate of change of phase angle in radians per second, {{ω = 2πf = 2π/T}} (unit: rad s⁻¹).

### The Defining Equation of SHM
A particle executes **Simple Harmonic Motion (SHM)** if and only if its acceleration {{a}} satisfies:

{{a = -ω^2 x}}

In words (memorise both clauses for IB Paper 2 "Define SHM" marks!):
1. The acceleration is **directly proportional** to the displacement {{x}} from a fixed equilibrium position.
2. The acceleration is always **directed towards the equilibrium position** (opposite in direction to {{x}}, shown by the minus sign).

Plotting {{a}} against {{x}} produces a **straight line through the origin with a negative gradient equal to {{−ω^2}}**, terminating at {{x = ±x_0}} where {{|a_max| = ω^2 x_0}}.

### Two Classic IB Oscillators
- **Mass–spring system:** By Hooke's law, the net restoring force is {{F = -k x}}. Applying Newton's second law {{F = ma}} gives {{a = -(k/m) x}}. Comparing with {{a = -ω^2 x}} identifies {{ω^2 = k/m}}, yielding:
  {{T = 2π sqrt(m/k)}}
  Notice {{T}} depends **only** on mass {{m}} and spring constant {{k}}—never on amplitude {{x_0}} or gravitational field strength {{g}}! A vertical spring simply shifts the equilibrium point downward by {{mg/k}}; oscillations about that new equilibrium still have the exact same period.
- **Simple pendulum (small angles, {{θ <= 10°}}):** The tangential restoring component of weight is {{F = -mg sin(θ)}}. For small angles in radians, {{sin(θ) ≈ θ = x/l}}, so {{a ≈ -(g/l) x}}. Comparing with {{a = -ω^2 x}} gives {{ω^2 = g/l}} and:
  {{T = 2π sqrt(l/g)}}
  Here {{T}} depends **only** on pendulum length {{l}} (pivot to centre of mass of bob) and {{g}}—never on bob mass {{m}} or small amplitude {{x_0}}.

### Qualitative Energy Exchange (SL)
In an undamped SHM oscillator, total mechanical energy {{E_T = E_k + E_p}} stays constant as energy continuously transforms between kinetic energy ({{E_k}}) and potential energy ({{E_p}}):
- **At equilibrium ({{x = 0}}):** restoring force and acceleration are zero, speed is **maximum**, so {{E_k}} is maximum and {{E_p = 0}}.
- **At the extremes ({{x = ±x_0}}):** the oscillator momentarily stops ({{v = 0}}), restoring force and acceleration magnitude are **maximum**, so {{E_p}} is maximum and {{E_k = 0}}.`,
      diagram: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acceleration versus displacement straight line graph with negative slope minus omega squared alongside mass-spring and simple pendulum oscillators">
  <rect x="0" y="0" width="520" height="260" fill="#ffffff" rx="8"/>
  <!-- Left panel: a vs x graph -->
  <text x="130" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#171a2f">Defining SHM Graph: a vs x</text>
  <!-- Axes -->
  <line x1="30" y1="138" x2="232" y2="138" stroke="#555b78" stroke-width="1.5"/>
  <line x1="130" y1="42" x2="130" y2="235" stroke="#555b78" stroke-width="1.5"/>
  <polygon points="235,138 227,134 227,142" fill="#555b78"/>
  <polygon points="130,38 126,46 134,46" fill="#555b78"/>
  <text x="238" y="142" font-size="12" font-weight="700" fill="#171a2f">x</text>
  <text x="136" y="46" font-size="12" font-weight="700" fill="#171a2f">a</text>
  <!-- Dashed boundary lines -->
  <line x1="56" y1="68" x2="56" y2="138" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="56" y1="68" x2="130" y2="68" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="204" y1="208" x2="204" y2="138" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="204" y1="208" x2="130" y2="208" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- Straight line a = -w^2 x -->
  <line x1="56" y1="68" x2="204" y2="208" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <circle cx="56" cy="68" r="4.5" fill="#2563eb"/>
  <circle cx="204" cy="208" r="4.5" fill="#2563eb"/>
  <circle cx="130" cy="138" r="3.5" fill="#171a2f"/>
  <!-- Labels -->
  <text x="56" y="154" font-size="11" text-anchor="middle" fill="#171a2f">−x₀</text>
  <text x="204" y="130" font-size="11" text-anchor="middle" fill="#171a2f">+x₀</text>
  <text x="136" y="72" font-size="10.5" fill="#2563eb">+ω²x₀</text>
  <text x="124" y="212" font-size="10.5" text-anchor="end" fill="#2563eb">−ω²x₀</text>
  <rect x="140" y="92" width="100" height="24" rx="5" fill="#dbeafe"/>
  <text x="190" y="108" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">slope = −ω²</text>
  <text x="130" y="250" font-size="10.5" text-anchor="middle" fill="#555b78">Straight line through (0, 0), negative gradient</text>

  <!-- Divider -->
  <line x1="262" y1="18" x2="262" y2="246" stroke="#e0e3ef" stroke-width="1.5"/>

  <!-- Right Top: Mass-Spring System -->
  <text x="392" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#171a2f">Mass–Spring &amp; Simple Pendulum</text>
  <!-- Wall -->
  <rect x="280" y="42" width="10" height="58" fill="#cbd5e1" stroke="#555b78" stroke-width="1.2"/>
  <line x1="280" y1="100" x2="498" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Equilibrium dashed line -->
  <line x1="382" y1="36" x2="382" y2="112" stroke="#15803d" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="382" y="122" font-size="10" text-anchor="middle" fill="#15803d">x = 0</text>
  <!-- Spring zigzag -->
  <polyline points="290,72 304,72 311,60 321,84 331,60 341,84 351,60 361,84 371,60 381,84 391,60 401,84 409,72 420,72" fill="none" stroke="#171a2f" stroke-width="2"/>
  <!-- Block -->
  <rect x="420" y="54" width="38" height="36" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="439" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#1d4ed8">m</text>
  <!-- Displacement arrow x right -->
  <line x1="382" y1="45" x2="436" y2="45" stroke="#171a2f" stroke-width="1.8"/>
  <polygon points="439,45 432,41 432,49" fill="#171a2f"/>
  <text x="411" y="40" font-size="11" font-weight="700" text-anchor="middle" fill="#171a2f">+x</text>
  <!-- Restoring force arrow F left -->
  <line x1="420" y1="72" x2="394" y2="72" stroke="#c2410c" stroke-width="2.4"/>
  <polygon points="390,72 398,68 398,76" fill="#c2410c"/>
  <text x="478" y="66" font-size="10.5" font-weight="700" fill="#c2410c">F = −kx</text>
  <text x="478" y="82" font-size="10" fill="#555b78">T = 2π√(m/k)</text>

  <!-- Right Bottom: Simple Pendulum -->
  <line x1="340" y1="142" x2="444" y2="142" stroke="#555b78" stroke-width="2.5"/>
  <!-- Vertical equilibrium -->
  <line x1="392" y1="142" x2="392" y2="236" stroke="#15803d" stroke-width="1.2" stroke-dasharray="3 3"/>
  <!-- Displaced string -->
  <line x1="392" y1="142" x2="438" y2="220" stroke="#171a2f" stroke-width="2"/>
  <path d="M 392 174 A 32 32 0 0 0 409 170" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <text x="406" y="185" font-size="11" font-weight="700" fill="#a16207">θ</text>
  <text x="424" y="176" font-size="11" font-weight="700" fill="#171a2f">l</text>
  <!-- Bob -->
  <circle cx="438" cy="220" r="11" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="438" y="224" font-size="10" font-weight="700" text-anchor="middle" fill="#a16207">m</text>
  <!-- Restoring force tangent arrow -->
  <line x1="428" y1="226" x2="404" y2="236" stroke="#c2410c" stroke-width="2.2"/>
  <polygon points="400,238 408,238 405,231" fill="#c2410c"/>
  <text x="330" y="196" font-size="10.5" font-weight="700" fill="#c2410c">F = −mg sin θ</text>
  <text x="330" y="212" font-size="10.5" fill="#555b78">≈ −(mg/l)x</text>
  <text x="330" y="232" font-size="10.5" font-weight="700" fill="#1d4ed8">T = 2π√(l/g)</text>
</svg>`,
      diagramCaption:
        "Left: The signature straight-line a–x graph of SHM through the origin with slope −ω². Right: Restoring forces for a horizontal mass–spring system and a small-angle simple pendulum.",
      workedExamples: [
        {
          title: "Extracting ω, T, and k from an a–x Graph",
          problem:
            "A block of mass {{0.25}} kg oscillates in SHM on a frictionless horizontal track attached to a spring. Its acceleration–displacement graph is a straight line passing through the endpoints {{(+0.040 m, -16.0 m s^(-2))}} and {{(-0.040 m, +16.0 m s^(-2))}}. Calculate (a) the angular frequency {{ω}}, (b) the period {{T}}, and (c) the spring constant {{k}}.",
          steps: [
            "Identify the gradient of the {{a}}–{{x}} graph, which equals {{-ω^2}}: {{gradient = (-16.0 - 16.0)/(0.040 - (-0.040)) = -32.0/0.080 = -400}} s⁻².",
            "Equate to {{-ω^2}}: {{ω^2 = 400}} s⁻² ⇒ {{ω = sqrt(400) = 20}} rad s⁻¹.",
            "Find the period: {{T = 2π/ω = 2π/20 = π/10 ≈ 0.314}} s (3 s.f.).",
            "Use {{ω^2 = k/m}} to find the spring constant: {{k = m ω^2 = 0.25 * 400 = 100}} N m⁻¹.",
          ],
          answer: "{{ω = 20}} rad s⁻¹, {{T = 0.314}} s, {{k = 100}} N m⁻¹",
          yourTurn: {
            question:
              "A mass of {{0.50}} kg oscillates on a spring with SHM. At displacement {{x = +0.050}} m, its acceleration is {{a = -18.0}} m s⁻². Calculate the spring constant {{k}} in N m⁻¹.",
            answer: { type: "number", value: 180, tolerance: 0.5, display: "180 N m⁻¹" },
            solution:
              "From {{a = -ω^2 x}}, {{ω^2 = -a/x = 18.0/0.050 = 360}} s⁻². Then {{k = m ω^2 = 0.50 * 360 = 180}} N m⁻¹. (Alternatively, {{F = ma = 0.50 * 18.0 = 9.0}} N and {{k = F/x = 9.0/0.050 = 180}} N m⁻¹.)",
          },
        },
        {
          title: "Pendulum Period on Earth vs Mars",
          problem:
            "A simple pendulum has length {{l = 1.20}} m. Take {{g = 9.8}} m s⁻² on Earth and {{g_Mars = 3.7}} m s⁻² on Mars. Calculate its period on Earth and on Mars.",
          steps: [
            "On Earth: {{T_Earth = 2π sqrt(l/g) = 2π sqrt(1.20/9.8) = 2π * 0.3499 ≈ 2.20}} s.",
            "On Mars, use scaling {{T ∝ 1/sqrt(g)}}: {{T_Mars = T_Earth sqrt(9.8/3.7) = 2.199 * 1.627 ≈ 3.58}} s.",
            "Sanity check: weaker gravity means a smaller restoring force for the same angle, so the pendulum swings more sluggishly (longer period).",
          ],
          answer: "{{T_Earth = 2.20}} s; {{T_Mars = 3.58}} s",
          yourTurn: {
            question:
              "Calculate the length {{l}} (in metres, to 2 decimal places) of a simple pendulum that has a period of exactly {{2.00}} s on Earth (take {{g = 9.8}} m s⁻²).",
            answer: { type: "number", value: 0.99, tolerance: 0.01, display: "0.99 m" },
            solution:
              "Rearranging {{T = 2π sqrt(l/g)}} gives {{l = (g T^2)/(4π^2) = (9.8 * 4.00)/(4π^2) = 9.8/π^2 ≈ 0.993}} m ≈ {{0.99}} m.",
          },
        },
      ],
      keyPoints: [
        "SHM defining equation: {{a = -ω^2 x}} — proportional to displacement and always directed towards equilibrium.",
        "An {{a}}–{{x}} graph for SHM is strictly a straight line through the origin with negative slope {{-ω^2}}.",
        "Mass–spring period {{T = 2π sqrt(m/k)}} is independent of amplitude {{x_0}} and gravitational field strength {{g}}.",
        "Simple pendulum period {{T = 2π sqrt(l/g)}} holds for small angles ({{θ <= 10°}}) and is independent of bob mass {{m}}.",
        "At {{x = 0}}: {{v}} and {{E_k}} are maximum while {{a = 0}} and {{E_p = 0}}; at {{x = ±x_0}}: {{v = 0}}, {{E_k = 0}}, while {{|a|}} and {{E_p}} are maximum.",
      ],
      whyItWorks:
        "Why is the mass–spring period completely independent of amplitude? Imagine scaling the amplitude up by a factor {{λ}}. Because Hooke's law is linear ({{F = -kx}}), the force—and therefore the acceleration—at every fraction of the cycle is multiplied by the exact same factor {{λ}}. Covering {{λ}} times the distance at {{λ}} times the acceleration takes the exact same time, just like zooming a film in spatially without changing its frame rate! For a pendulum, {{sin(θ) ≈ θ}} only stays linear for small angles; at large angles {{sin(θ) < θ}}, so the restoring force is slightly weaker than linear and the true period lengthens.",
      strategies: [
        "When given an {{a}}–{{x}} graph, read the **magnitude** of the gradient straight off as {{ω^2}} (don't forget to take the square root to get {{ω}}!).",
        "Check units carefully before using {{a = -ω^2 x}}: convert centimetres or millimetres into metres!",
        "For ratio questions (e.g. 'mass is quadrupled and spring constant is doubled'), use proportionality {{T ∝ sqrt(m/k)}} rather than inventing fake numbers.",
      ],
      thinkDeeper:
        "What happens if you attach two identical springs (each with constant {{k}}) to a mass {{m}}? In **parallel** (side by side), stretching by {{x}} pulls both springs, so {{F = -2kx}} and {{k_eff = 2k}} (period drops by {{1/sqrt(2)}}). In **series** (end to end), each spring stretches by {{x/2}} for the same tension, so {{k_eff = k/2}} (period increases by {{sqrt(2)}}). Remarkably, a mass placed **between** two fixed walls with one spring on each side acts like **parallel** springs because moving right stretches one spring and compresses the other—both push left!",
    },

    // =========================================================================
    // SECTION 2: C.1 HL — QUANTITATIVE SHM EQUATIONS, PHASE & ENERGY
    // =========================================================================
    {
      id: "shm-equations-hl",
      heading: "C.1 Quantitative SHM Equations, Phase Angle & Energy Graphs",
      level: "HL",
      discovery: {
        problem:
          "Imagine a peg rotating at constant angular speed {{ω}} around a circle of radius {{x_0}}, illuminated from above so its shadow slides along a horizontal wall. Its horizontal coordinate is {{x = x_0 sin(ωt)}} and its horizontal velocity is the horizontal component of its tangential speed {{ω x_0}}. Without using calculus, use **Pythagoras' theorem** on the circle to predict the shadow's speed {{v}} at any displacement {{x}}!",
        idea:
          "On the circle, the radius vector has horizontal coordinate {{x}} and vertical coordinate {{y = ±sqrt(x_0^2 - x^2)}}. The velocity vector (magnitude {{ω x_0}}) is perpendicular to the radius, so by similar right triangles its horizontal component is {{v = ±ω y = ±ω sqrt(x_0^2 - x^2)}}! That's why the speed–displacement formula looks like a circle equation.",
      },
      body: `At Higher Level, we solve the differential equation {{d^2 x / dt^2 = -ω^2 x}} analytically to predict displacement, velocity, acceleration, phase, and energy at **any** instant or position.

### Time-Dependent SHM Solutions (HL)
Starting with an arbitrary **phase constant** {{φ}} (in radians), the general equations are:

- **Displacement:** {{x = x_0 sin(ωt + φ)}}
- **Velocity:** {{v = dx/dt = ω x_0 cos(ωt + φ)}}
- **Acceleration:** {{a = dv/dt = -ω^2 x_0 sin(ωt + φ) = -ω^2 x}}

Special starting conditions you see constantly in IB exams:
- Starts at equilibrium moving positively ({{x = 0, v > 0}} at {{t = 0}}): {{φ = 0}} ⇒ {{x = x_0 sin(ωt)}}, {{v = ω x_0 cos(ωt)}}.
- Released from rest at maximum positive displacement ({{x = +x_0, v = 0}} at {{t = 0}}): {{φ = π/2}} ⇒ {{x = x_0 cos(ωt)}}, {{v = -ω x_0 sin(ωt)}}.

### Phase Difference ({{Δφ}})
- **Velocity leads displacement by {{π/2}} rad ({{90°}}, or {{T/4}}):** {{v}} peaks a quarter-cycle before {{x}} peaks.
- **Acceleration is in antiphase with displacement ({{π}} rad, {{180°}}, or {{T/2}}):** whenever {{x}} is positive, {{a}} is negative.
- For two identical-frequency oscillators separated by a time lag {{Δt}}: {{Δφ = 2π (Δt/T)}}.

### Velocity as a Function of Displacement (HL)
Using {{sin^2(θ) + cos^2(θ) = 1}} to eliminate time {{t}} between {{x}} and {{v}} yields:

{{v = ±ω sqrt(x_0^2 - x^2)}}

- The {{±}} reflects that at any displacement {{x}} (except {{±x_0}}), the particle passes through going either right ({{+}}) or left ({{-}}).
- Maximum speed occurs at {{x = 0}}: {{v_max = ω x_0}}.

### Exact Energy Equations (HL)
Substituting {{v^2 = ω^2(x_0^2 - x^2)}} into {{E_k = 1/2 m v^2}} gives all three SHM energy expressions:

- **Total mechanical energy (constant):** {{E_T = 1/2 m ω^2 x_0^2}}
- **Potential energy at displacement {{x}}:** {{E_p = 1/2 m ω^2 x^2}}
- **Kinetic energy at displacement {{x}}:** {{E_k = 1/2 m ω^2 (x_0^2 - x^2)}}

Notice two classic IB exam favourites:
1. {{E_T ∝ x_0^2}} and {{E_T ∝ f^2}}: doubling the amplitude **quadruples** the total energy!
2. {{E_k = E_p = 1/2 E_T}} occurs when {{x^2 = x_0^2 / 2}}, i.e. at {{x = ±x_0 / sqrt(2) ≈ ±0.707 x_0}} — **not** at half amplitude!
3. As functions of **time**, {{E_p ∝ sin^2(ωt)}} and {{E_k ∝ cos^2(ωt)}} reach their maxima **twice per period**, so energy oscillates at frequency {{2f}} (period {{T/2}}).`,
      diagram: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked SHM displacement, velocity, and acceleration time graphs alongside kinetic, potential, and total energy versus displacement parabola graph">
  <rect x="0" y="0" width="520" height="290" fill="#ffffff" rx="8"/>
  <!-- LEFT PANEL: Stacked x-t, v-t, a-t -->
  <text x="132" y="20" font-size="12.5" font-weight="700" text-anchor="middle" fill="#171a2f">Phase-Shifted SHM Graphs (φ = 0)</text>
  <!-- Vertical T/4, T/2, 3T/4, T guides -->
  <line x1="82" y1="32" x2="82" y2="262" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="128" y1="32" x2="128" y2="262" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="174" y1="32" x2="174" y2="262" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="220" y1="32" x2="220" y2="262" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>

  <!-- x(t) = x0 sin(wt) centered at y=68 -->
  <line x1="36" y1="68" x2="234" y2="68" stroke="#64748b" stroke-width="1.2"/>
  <line x1="36" y1="36" x2="36" y2="100" stroke="#64748b" stroke-width="1.2"/>
  <text x="26" y="46" font-size="11" font-weight="700" text-anchor="end" fill="#2563eb">x</text>
  <text x="32" y="45" font-size="9" text-anchor="end" fill="#64748b">+x₀</text>
  <path d="M 36 68 C 52 38, 66 38, 82 38 C 98 38, 112 38, 128 68 C 144 98, 158 98, 174 98 C 190 98, 204 98, 220 68" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="236" y="64" font-size="9.5" fill="#2563eb">sin</text>

  <!-- v(t) = wx0 cos(wt) centered at y=148 -->
  <line x1="36" y1="148" x2="234" y2="148" stroke="#64748b" stroke-width="1.2"/>
  <line x1="36" y1="116" x2="36" y2="180" stroke="#64748b" stroke-width="1.2"/>
  <text x="26" y="126" font-size="11" font-weight="700" text-anchor="end" fill="#15803d">v</text>
  <path d="M 36 118 C 52 118, 66 118, 82 148 C 98 178, 112 178, 128 178 C 144 178, 158 178, 174 148 C 190 118, 204 118, 220 118" fill="none" stroke="#15803d" stroke-width="2.5"/>
  <text x="236" y="144" font-size="9.5" fill="#15803d">cos</text>

  <!-- a(t) = -w^2 x0 sin(wt) centered at y=228 -->
  <line x1="36" y1="228" x2="234" y2="228" stroke="#64748b" stroke-width="1.2"/>
  <line x1="36" y1="196" x2="36" y2="260" stroke="#64748b" stroke-width="1.2"/>
  <text x="26" y="206" font-size="11" font-weight="700" text-anchor="end" fill="#c2410c">a</text>
  <path d="M 36 228 C 52 258, 66 258, 82 258 C 98 258, 112 258, 128 228 C 144 198, 158 198, 174 198 C 190 198, 204 198, 220 228" fill="none" stroke="#c2410c" stroke-width="2.5"/>
  <text x="236" y="224" font-size="9.5" fill="#c2410c">−sin</text>

  <!-- Time ticks -->
  <text x="36" y="276" font-size="10" text-anchor="middle" fill="#555b78">0</text>
  <text x="82" y="276" font-size="10" text-anchor="middle" fill="#555b78">T/4</text>
  <text x="128" y="276" font-size="10" text-anchor="middle" fill="#555b78">T/2</text>
  <text x="174" y="276" font-size="10" text-anchor="middle" fill="#555b78">3T/4</text>
  <text x="220" y="276" font-size="10" text-anchor="middle" fill="#555b78">T</text>

  <!-- Divider -->
  <line x1="264" y1="16" x2="264" y2="278" stroke="#e0e3ef" stroke-width="1.5"/>

  <!-- RIGHT PANEL: Energy vs Displacement -->
  <text x="392" y="20" font-size="12.5" font-weight="700" text-anchor="middle" fill="#171a2f">SHM Energy vs Displacement</text>
  <!-- Axes: origin at (392, 232), x0 = 96px (296 to 488), E_T at y = 72 (height 160) -->
  <line x1="284" y1="232" x2="504" y2="232" stroke="#555b78" stroke-width="1.5"/>
  <line x1="392" y1="48" x2="392" y2="244" stroke="#555b78" stroke-width="1.5"/>
  <polygon points="507,232 499,228 499,236" fill="#555b78"/>
  <polygon points="392,44 388,52 396,52" fill="#555b78"/>
  <text x="506" y="246" font-size="11" font-weight="700" fill="#171a2f">x</text>
  <text x="398" y="54" font-size="11" font-weight="700" fill="#171a2f">Energy</text>

  <!-- E_T horizontal line -->
  <line x1="296" y1="72" x2="488" y2="72" stroke="#171a2f" stroke-width="2.2" stroke-dasharray="6 3"/>
  <text x="488" y="64" font-size="10.5" font-weight="700" text-anchor="end" fill="#171a2f">E_T = ½mω²x₀²</text>

  <!-- E_p upward parabola: y = 232 - 160*((x-392)/96)^2; quadratic Bezier control point at (392, 392) gives vertex at (392, 232)! Wait: midpoint of (296,72) and (488,72) is (392,72); M_y = 0.5*72 + 0.5*C_y = 232 => C_y = 392 -->
  <path d="M 296 72 Q 392 392 488 72" fill="none" stroke="#c2410c" stroke-width="2.6"/>
  <!-- E_k downward parabola: endpoints (296,232) and (488,232), vertex (392,72) => 0.5*232 + 0.5*C_y = 72 => C_y = -88 -->
  <path d="M 296 232 Q 392 -88 488 232" fill="none" stroke="#15803d" stroke-width="2.6"/>

  <!-- Intersections at x = 392 ± 96/sqrt(2) = 392 ± 67.9 => 324.1 and 459.9, y = 152 -->
  <line x1="324" y1="152" x2="324" y2="232" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="460" y1="152" x2="460" y2="232" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="324" cy="152" r="4" fill="#7c3aed"/>
  <circle cx="460" cy="152" r="4" fill="#7c3aed"/>

  <!-- Axis ticks and curve labels -->
  <text x="296" y="247" font-size="10.5" text-anchor="middle" fill="#171a2f">−x₀</text>
  <text x="488" y="247" font-size="10.5" text-anchor="middle" fill="#171a2f">+x₀</text>
  <text x="392" y="247" font-size="10.5" text-anchor="middle" fill="#171a2f">0</text>
  <text x="460" y="261" font-size="9.5" text-anchor="middle" fill="#7c3aed">+x₀/√2</text>
  <text x="324" y="261" font-size="9.5" text-anchor="middle" fill="#7c3aed">−x₀/√2</text>
  <text x="392" y="96" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">E_k</text>
  <text x="315" y="106" font-size="11" font-weight="700" fill="#c2410c">E_p</text>
  <text x="468" y="106" font-size="11" font-weight="700" text-anchor="end" fill="#c2410c">E_p</text>
  <text x="392" y="279" font-size="10" text-anchor="middle" fill="#555b78">E_k = E_p = ½E_T at x = ±x₀/√2 ≈ ±0.71x₀</text>
</svg>`,
      diagramCaption:
        "Left: Velocity leads displacement by π/2 (T/4), while acceleration is in antiphase (π) with displacement. Right: Kinetic and potential energies trace symmetric parabolas whose sum is constant E_T.",
      workedExamples: [
        {
          title: "Speed and Phase in Quantitative SHM (HL)",
          problem:
            "A particle executes SHM with amplitude {{x_0 = 0.050}} m and frequency {{f = 2.0}} Hz. At {{t = 0}}, it passes through equilibrium moving in the positive direction ({{φ = 0}}). Calculate (a) its angular frequency {{ω}}, (b) its maximum speed {{v_max}}, and (c) its speed at displacement {{x = 0.030}} m.",
          steps: [
            "Angular frequency: {{ω = 2πf = 2π(2.0) = 4π ≈ 12.6}} rad s⁻¹.",
            "Maximum speed at equilibrium: {{v_max = ω x_0 = 4π * 0.050 = 0.20π ≈ 0.628}} m s⁻¹.",
            "Speed at {{x = 0.030}} m: {{|v| = ω sqrt(x_0^2 - x^2) = 4π sqrt(0.050^2 - 0.030^2) = 4π * 0.040 = 0.16π ≈ 0.503}} m s⁻¹.",
          ],
          answer: "{{ω = 12.6}} rad s⁻¹, {{v_max = 0.628}} m s⁻¹, {{|v| = 0.503}} m s⁻¹",
          yourTurn: {
            question:
              "An oscillator undergoes SHM with angular frequency {{ω = 10}} rad s⁻¹ and amplitude {{x_0 = 0.13}} m. Calculate its speed (in m s⁻¹) when its displacement is {{x = 0.050}} m.",
            answer: { type: "number", value: 1.2, tolerance: 0.02, display: "1.2 m s⁻¹" },
            solution:
              "{{|v| = ω sqrt(x_0^2 - x^2) = 10 * sqrt(0.13^2 - 0.050^2) = 10 * sqrt(0.0169 - 0.0025) = 10 * 0.12 = 1.2}} m s⁻¹.",
          },
        },
        {
          title: "Energy Partitioning in SHM (HL)",
          problem:
            "A {{0.40}} kg mass oscillates with SHM at {{ω = 5.0}} rad s⁻¹ and amplitude {{x_0 = 0.20}} m. Calculate (a) its total energy {{E_T}}, and (b) the displacement magnitude {{|x|}} at which {{E_k = 3 E_p}}.",
          steps: [
            "Total energy: {{E_T = 1/2 m ω^2 x_0^2 = 0.5 * 0.40 * 5.0^2 * 0.20^2 = 0.20}} J.",
            "Since {{E_k + E_p = E_T}} and {{E_k = 3 E_p}}, we have {{4 E_p = E_T}}, so {{E_p = 1/4 E_T}}.",
            "Because {{E_p ∝ x^2}}, {{(x/x_0)^2 = E_p/E_T = 1/4}} ⇒ {{|x| = x_0 / 2 = 0.10}} m.",
          ],
          answer: "{{E_T = 0.20}} J; {{|x| = 0.10}} m",
          yourTurn: {
            question:
              "A {{0.20}} kg mass oscillates in SHM with {{ω = 10}} rad s⁻¹ and amplitude {{x_0 = 0.15}} m. Calculate its kinetic energy {{E_k}} (in joules) at displacement {{x = 0.090}} m.",
            answer: { type: "number", value: 0.144, tolerance: 0.002, display: "0.144 J" },
            solution:
              "{{E_k = 1/2 m ω^2 (x_0^2 - x^2) = 0.5 * 0.20 * 10^2 * (0.15^2 - 0.090^2) = 10 * (0.0225 - 0.0081) = 10 * 0.0144 = 0.144}} J.",
          },
        },
      ],
      keyPoints: [
        "Set your calculator to **RADIANS** before evaluating {{sin(ωt + φ)}} or {{cos(ωt + φ)}}!",
        "Velocity leads displacement by {{π/2}} rad ({{T/4}}); acceleration is in antiphase ({{π}} rad, {{T/2}}) with displacement.",
        "{{v = ±ω sqrt(x_0^2 - x^2)}} connects speed and position directly without needing to find time {{t}}.",
        "{{E_T = 1/2 m ω^2 x_0^2}} depends on amplitude **squared** and frequency **squared**.",
        "Kinetic and potential energy are equal at {{|x| = x_0/sqrt(2)}} (not {{x_0/2}}), and each energy oscillates at frequency {{2f}}.",
      ],
      whyItWorks:
        "Why does {{E_T = 1/2 m ω^2 x_0^2}} stay constant at every instant? Compute the sum {{E_k + E_p = 1/2 m ω^2 x_0^2 cos^2(ωt + φ) + 1/2 m ω^2 x_0^2 sin^2(ωt + φ) = 1/2 m ω^2 x_0^2 [cos^2(θ) + sin^2(θ)]}}. Because {{cos^2(θ) + sin^2(θ) ≡ 1}} identically for all angles, every joule lost from potential energy instantly appears in kinetic energy, proving mechanical energy conservation directly from trigonometry!",
      strategies: [
        "Decide first: if the question gives **position {{x}}** and asks for speed or energy, skip sine/cosine and jump straight to {{v = ±ω sqrt(x_0^2 - x^2)}} and {{E_p/E_T = (x/x_0)^2}}.",
        "If the question asks for the fraction of energy at a given {{x}}, divide {{E_p/E_T = (x/x_0)^2}} and {{E_k/E_T = 1 - (x/x_0)^2}}—mass and {{ω}} cancel completely!",
        "To find phase constant {{φ}} from an initial condition, plug {{t = 0}} into **both** {{x(0)}} and the sign of {{v(0)}} so you pick the right quadrant.",
      ],
      thinkDeeper:
        "What is the **time-averaged** kinetic energy of an SHM oscillator over one complete cycle? Since {{cos^2(ωt)}} is symmetric with {{sin^2(ωt)}} and their sum is always 1, the time average of each is exactly {{1/2}}. Thus {{E_k,avg = E_p,avg = 1/2 E_T = 1/4 m ω^2 x_0^2}}. Remarkably, because the oscillator moves slower near the turning points and spends **more time** near {{±x_0}} than near {{0}}, the **space-averaged** potential energy is only {{1/3 E_T}}, whereas the **time-averaged** potential energy is {{1/2 E_T}}!",
    },

    // =========================================================================
    // SECTION 3: C.2 SL — TRANSVERSE & LONGITUDINAL WAVES, WAVE EQUATION & GRAPHS
    // =========================================================================
    {
      id: "wave-model-graphs",
      heading: "C.2 Transverse & Longitudinal Waves, Wave Equation & Graphs",
      level: "SL",
      discovery: {
        problem:
          "During a stadium 'Mexican wave', the ripple races around the stands at {{15}} m s⁻¹. How far sideways does any single fan move? And if you take a **photograph** of the stadium at one instant vs filming **one fan** over 10 seconds, both graphs look like sine waves—how can you tell which graph gives wavelength {{λ}} and which gives period {{T}}?",
        idea:
          "Each fan only moves **up and down** about their seat (zero net sideways motion), yet energy and the wave profile travel sideways! The **photograph** freezes time and plots displacement against **distance** ({{x}}), so peak-to-peak distance is **wavelength {{λ}}**. Filming **one fan** fixes position and plots displacement against **time** ({{t}}), so peak-to-peak separation is **period {{T}}**.",
      },
      body: `A **travelling (progressive) wave** transfers **energy** (and momentum) from one place to another **without any net transfer of matter**. Individual particles of the medium oscillate about fixed equilibrium positions.

### Classifying Waves
| Feature | Transverse Waves | Longitudinal Waves |
|---|---|---|
| Particle oscillation vs energy transfer | **Perpendicular** ({{90°}}) | **Parallel** ({{0° / 180°}}) |
| Key features | **Crests** and **troughs** | **Compressions** (high density/pressure) and **rarefactions** (low density/pressure) |
| Can be polarised? | **Yes** | **No** (oscillation is already along one line) |
| Examples | All EM waves, waves on strings, water surface ripples, seismic S-waves | Sound waves, ultrasound, slinky pulses, seismic P-waves |

- **Mechanical waves** (sound, water, strings, seismic) require a material medium and travel via elastic restoring forces between particles.
- **Electromagnetic waves** consist of oscillating electric and magnetic fields and can travel through a **vacuum**.

### The Wave Equation & Wave Speed on a String
In one period {{T}}, a wave profile advances by exactly one wavelength {{λ}}, giving the universal **wave equation**:

{{v = λ/T = fλ}}

**Golden rule of wave propagation:**
- **Frequency {{f}}** is set solely by the vibrating **source** (and stays constant when a wave crosses into a new medium).
- **Wave speed {{v}}** is determined solely by the **medium** (stiffness/tension and inertia/density).
- **Wavelength {{λ = v/f}}** adjusts automatically whenever {{v}} changes.

For a transverse wave on a stretched string of tension {{F_T}} (often written {{T}} in tables) and linear mass density {{μ = m/L}} (mass per unit length in kg m⁻¹):

{{v = sqrt(F_T / μ)}}

### Decoding Wave Graphs Without Mixing Them Up
Always inspect the **horizontal axis label** first!
1. **Displacement–distance ({{y}}–{{x}}) graph:** a frozen **snapshot** of all particles at one instant. Peak-to-peak = **wavelength {{λ}}**.
   - *Finding a particle's instantaneous velocity direction:* sketch the same wave shifted **slightly forward** in the direction of wave travel. If the shifted curve lies above a particle's current position, that particle is moving **upward** right now; if below, it is moving **downward**.
   - *Longitudinal {{y}}–{{x}} trick:* taking positive displacement as "to the right", a **compression** lies where {{y = 0}} with a **negative gradient** (particles on the left are displaced right; particles on the right are displaced left—piling up at the crossing!). A **rarefaction** lies where {{y = 0}} with a **positive gradient**.
2. **Displacement–time ({{y}}–{{t}}) graph:** a **video** of one single particle over time. Peak-to-peak = **period {{T}}** (and {{f = 1/T}}). Its gradient at any time equals that particle's instantaneous velocity {{v_y}} (NOT the wave speed {{v}}!).`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side displacement versus distance graph showing wavelength and displacement versus time graph showing period, plus longitudinal compression and rarefaction strip">
  <rect x="0" y="0" width="520" height="265" fill="#ffffff" rx="8"/>
  <!-- LEFT PANEL: y vs x (Snapshot) -->
  <text x="130" y="20" font-size="12.5" font-weight="700" text-anchor="middle" fill="#171a2f">Displacement–Distance (Snapshot)</text>
  <line x1="28" y1="102" x2="246" y2="102" stroke="#555b78" stroke-width="1.4"/>
  <line x1="34" y1="40" x2="34" y2="164" stroke="#555b78" stroke-width="1.4"/>
  <polygon points="249,102 241,98 241,106" fill="#555b78"/>
  <polygon points="34,36 30,44 38,44" fill="#555b78"/>
  <text x="244" y="118" font-size="11" font-weight="700" text-anchor="end" fill="#171a2f">distance x</text>
  <text x="41" y="45" font-size="11" font-weight="700" fill="#171a2f">y</text>

  <!-- Main wave (lambda = 128px: x=34 to 162, plus half cycle to 226) -->
  <path d="M 34 102 C 50 54, 58 54, 66 54 C 74 54, 82 54, 98 102 C 114 150, 122 150, 130 150 C 138 150, 146 150, 162 102 C 178 54, 186 54, 194 54 C 202 54, 210 54, 226 102" fill="none" stroke="#2563eb" stroke-width="2.6"/>
  <!-- Shifted wave (slightly later, moved right by 12px) -->
  <path d="M 46 102 C 62 54, 70 54, 78 54 C 86 54, 94 54, 110 102 C 126 150, 134 150, 142 150 C 150 150, 158 150, 174 102 C 190 54, 198 54, 206 54 C 214 54, 222 54, 238 102" fill="none" stroke="#93c5fd" stroke-width="1.6" stroke-dasharray="4 3"/>

  <!-- Wavelength bracket between two crests (x=66 to x=194) -->
  <line x1="66" y1="42" x2="194" y2="42" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="66" y1="37" x2="66" y2="49" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="194" y1="37" x2="194" y2="49" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="130" y="37" font-size="12" font-weight="700" text-anchor="middle" fill="#1d4ed8">λ</text>

  <!-- Amplitude arrow -->
  <line x1="130" y1="102" x2="130" y2="148" stroke="#c2410c" stroke-width="1.8"/>
  <polygon points="130,150 126,143 134,143" fill="#c2410c"/>
  <text x="138" y="132" font-size="11" font-weight="700" fill="#c2410c">A</text>

  <!-- Particle P moving up at x=98 -->
  <circle cx="98" cy="102" r="4" fill="#15803d"/>
  <line x1="98" y1="98" x2="98" y2="75" stroke="#15803d" stroke-width="2"/>
  <polygon points="98,71 94,79 102,79" fill="#15803d"/>
  <text x="105" y="84" font-size="9.5" font-weight="700" fill="#15803d">P moves ↑</text>
  <text x="210" y="160" font-size="9.5" font-weight="700" text-anchor="end" fill="#2563eb">wave →</text>

  <!-- Divider -->
  <line x1="262" y1="14" x2="262" y2="178" stroke="#e0e3ef" stroke-width="1.5"/>

  <!-- RIGHT PANEL: y vs t (One Particle) -->
  <text x="392" y="20" font-size="12.5" font-weight="700" text-anchor="middle" fill="#171a2f">Displacement–Time (1 Particle)</text>
  <line x1="282" y1="102" x2="504" y2="102" stroke="#555b78" stroke-width="1.4"/>
  <line x1="288" y1="40" x2="288" y2="164" stroke="#555b78" stroke-width="1.4"/>
  <polygon points="507,102 499,98 499,106" fill="#555b78"/>
  <polygon points="288,36 284,44 292,44" fill="#555b78"/>
  <text x="502" y="118" font-size="11" font-weight="700" text-anchor="end" fill="#171a2f">time t</text>
  <text x="295" y="45" font-size="11" font-weight="700" fill="#171a2f">y</text>

  <!-- Wave over time (T = 128px) -->
  <path d="M 288 102 C 304 54, 312 54, 320 54 C 328 54, 336 54, 352 102 C 368 150, 376 150, 384 150 C 392 150, 400 150, 416 102 C 432 54, 440 54, 448 54 C 456 54, 464 54, 480 102" fill="none" stroke="#7c3aed" stroke-width="2.6"/>

  <!-- Period bracket -->
  <line x1="320" y1="42" x2="448" y2="42" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="320" y1="37" x2="320" y2="49" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="448" y1="37" x2="448" y2="49" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="384" y="37" font-size="12" font-weight="700" text-anchor="middle" fill="#7c3aed">T = 1/f</text>

  <!-- Amplitude arrow -->
  <line x1="384" y1="102" x2="384" y2="148" stroke="#c2410c" stroke-width="1.8"/>
  <polygon points="384,150 380,143 388,143" fill="#c2410c"/>
  <text x="392" y="132" font-size="11" font-weight="700" fill="#c2410c">A</text>
  <text x="394" y="168" font-size="10" text-anchor="middle" fill="#555b78">Combine both graphs: v = λ / T = fλ</text>

  <!-- BOTTOM STRIP: Longitudinal wave compressions & rarefactions -->
  <rect x="24" y="186" width="472" height="68" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <text x="36" y="203" font-size="11" font-weight="700" fill="#171a2f">Longitudinal Wave (e.g. sound):</text>
  <!-- Vertical particle bars: compressed around 90, 270, 450; rarefied around 180, 360 -->
  <line x1="74" y1="212" x2="74" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="82" y1="212" x2="82" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="88" y1="212" x2="88" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="94" y1="212" x2="94" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="100" y1="212" x2="100" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="110" y1="212" x2="110" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="126" y1="212" x2="126" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="150" y1="212" x2="150" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="180" y1="212" x2="180" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="210" y1="212" x2="210" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="234" y1="212" x2="234" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="250" y1="212" x2="250" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="260" y1="212" x2="260" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="266" y1="212" x2="266" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="272" y1="212" x2="272" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="278" y1="212" x2="278" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="288" y1="212" x2="288" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="306" y1="212" x2="306" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="332" y1="212" x2="332" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="360" y1="212" x2="360" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="388" y1="212" x2="388" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="414" y1="212" x2="414" y2="236" stroke="#64748b" stroke-width="1.6"/>
  <line x1="432" y1="212" x2="432" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="440" y1="212" x2="440" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="446" y1="212" x2="446" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="452" y1="212" x2="452" y2="236" stroke="#2563eb" stroke-width="2"/>
  <line x1="460" y1="212" x2="460" y2="236" stroke="#2563eb" stroke-width="2"/>
  <!-- C / R and lambda labels -->
  <text x="91" y="249" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8">Compression</text>
  <text x="180" y="249" font-size="10" text-anchor="middle" fill="#64748b">Rarefaction</text>
  <text x="270" y="249" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8">Compression</text>
  <text x="360" y="249" font-size="10" text-anchor="middle" fill="#64748b">Rarefaction</text>
  <line x1="91" y1="204" x2="270" y2="204" stroke="#c2410c" stroke-width="1.5"/>
  <text x="180" y="200" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">← λ (C to C) →</text>
</svg>`,
      diagramCaption:
        "Top left: Displacement–distance snapshot gives wavelength λ (nudging the wave forward reveals particle P moves up). Top right: Displacement–time graph for one particle gives period T. Bottom: Longitudinal compressions and rarefactions separated by λ.",
      workedExamples: [
        {
          title: "Combining Displacement–Distance and Displacement–Time Graphs",
          problem:
            "A transverse wave travels in the {{+x}} direction. Its displacement–distance snapshot shows {{2.5}} complete wavelengths spanning {{1.50}} m. A displacement–time graph for one point on the string records {{4}} complete oscillations in {{0.080}} s. Calculate the wavelength {{λ}}, frequency {{f}}, and wave speed {{v}}.",
          steps: [
            "From the snapshot: {{λ = 1.50 / 2.5 = 0.60}} m.",
            "From the time graph: {{T = 0.080 / 4 = 0.020}} s, so {{f = 1/T = 1/0.020 = 50}} Hz.",
            "Wave speed: {{v = fλ = 50 * 0.60 = 30}} m s⁻¹.",
          ],
          answer: "{{λ = 0.60}} m, {{f = 50}} Hz, {{v = 30}} m s⁻¹",
          yourTurn: {
            question:
              "A guitar string of length {{0.80}} m and mass {{3.2}} g is stretched to a tension of {{160}} N. Calculate the speed of a transverse wave on the string (in m s⁻¹).",
            answer: { type: "number", value: 200, tolerance: 0.5, display: "200 m s⁻¹" },
            solution:
              "Linear mass density {{μ = m/L = (3.2 * 10^(-3) kg)/(0.80 m) = 4.0 * 10^(-3)}} kg m⁻¹. Wave speed {{v = sqrt(F_T / μ) = sqrt(160 / (4.0 * 10^(-3))) = sqrt(40000) = 200}} m s⁻¹.",
          },
        },
        {
          title: "Wave Entering a New Medium",
          problem:
            "A sound wave of frequency {{440}} Hz travels in air at {{330}} m s⁻¹ and enters water where its speed increases to {{1485}} m s⁻¹. Calculate its wavelength in air and in water.",
          steps: [
            "In air: {{λ_air = v_air / f = 330 / 440 = 0.75}} m.",
            "At the boundary, the frequency {{f = 440}} Hz stays **unchanged** because water molecules are driven by the arriving air oscillations.",
            "In water: {{λ_water = v_water / f = 1485 / 440 = 3.375 ≈ 3.38}} m.",
          ],
          answer: "{{λ_air = 0.75}} m; {{λ_water = 3.38}} m",
        },
      ],
      keyPoints: [
        "Travelling waves transfer energy without net transfer of matter.",
        "Transverse waves oscillate perpendicular to energy transfer (and can be polarised); longitudinal waves oscillate parallel to energy transfer (compressions & rarefactions).",
        "Universal wave equation: {{v = fλ = λ/T}}; transverse speed on a string: {{v = sqrt(F_T / μ)}} where {{μ = m/L}}.",
        "Always check the horizontal axis: **distance** gives wavelength {{λ}}; **time** gives period {{T}}.",
        "When a wave crosses into a new medium, **frequency stays constant** while speed {{v}} and wavelength {{λ}} change in the same ratio.",
      ],
      whyItWorks:
        "Why does {{v = sqrt(F_T / μ)}} make physical sense? A wave moves down a string because each displaced segment pulls its neighbour into motion. Higher tension {{F_T}} supplies a stronger restoring pull (faster acceleration → higher speed), whereas higher mass per unit length {{μ}} gives each segment greater inertia (slower acceleration → lower speed). Dimensional analysis confirms it: {{[F_T / μ] = (kg m s^(-2)) / (kg m^(-1)) = m^2 s^(-2)}}, whose square root is m s⁻¹!",
      strategies: [
        "To find which way a particle moves on a {{y}}–{{x}} graph, **draw a dotted wave slightly shifted in the direction of wave propagation**—never guess from the slope alone without checking the travel direction!",
        "When computing {{μ = m/L}} for a string, convert grams to kilograms ({{1 g = 10^(-3) kg}}) before taking the square root.",
        "Count **complete cycles** carefully on graphs: crest-to-crest is {{1λ}}, crest-to-adjacent-trough is {{0.5λ}}, and zero-crossing to next zero-crossing is {{0.5λ}}.",
      ],
      thinkDeeper:
        "Don't confuse **wave speed {{v = fλ}}** with **particle oscillation speed {{v_y}}**! For a sinusoidal transverse wave, the wave profile advances steadily at constant speed {{v}}, whereas each particle on the string executes SHM vertically with maximum speed {{v_max = 2πfA}}. You can easily have a high-amplitude wave where particles whip vertically faster than the wave travels horizontally—or a gentle ripple where particles barely creep while the wave races ahead!",
    },

    // =========================================================================
    // SECTION 4: C.2 SL — ELECTROMAGNETIC SPECTRUM, INTENSITY & AMPLITUDE
    // =========================================================================
    {
      id: "em-spectrum-intensity",
      heading: "C.2 Electromagnetic Spectrum, Intensity & Amplitude",
      level: "SL",
      discovery: {
        problem:
          "A deep-space probe's solar panels generate {{900}} W at {{1}} AU from the Sun. If the probe journeys out to Jupiter at {{5}} AU, how much power will the same panels produce? And by what factor does the **amplitude** of the sunlight's oscillating electric field shrink?",
        idea:
          "The Sun's radiation spreads evenly over a sphere of area {{4πr^2}}. At {{5}} times the distance, the same solar power spreads over {{5^2 = 25}} times the area, so intensity—and panel power—drops by a factor of {{25}} to {{900/25 = 36}} W! Since intensity {{I ∝ A^2}}, shrinking intensity by {{25}} shrinks electric-field amplitude by {{sqrt(25) = 5}} (so {{A ∝ 1/r}}).",
      },
      body: `### The Electromagnetic (EM) Spectrum
All electromagnetic waves are **transverse waves** made of mutually perpendicular oscillating electric and magnetic fields, travelling through a vacuum at the universal speed of light:

{{c = 3.00 * 10^8}} m s⁻¹ ({{c = fλ}})

Although the EM spectrum is completely continuous, IB Physics expects you to know the seven regions in order and their approximate **vacuum wavelength** ranges:

| Region | Approximate Wavelength {{λ}} | Typical Frequency {{f}} | Key Applications / Notes |
|---|---|---|---|
| **Radio** | {{> 10^(-1)}} m | {{< 3 * 10^9}} Hz | Broadcasting, radio astronomy |
| **Microwave** | {{10^(-3)}} m to {{10^(-1)}} m | {{3 * 10^9}} to {{3 * 10^11}} Hz | Wi-Fi, radar, satellite links, CMB |
| **Infrared (IR)** | {{7 * 10^(-7)}} m to {{10^(-3)}} m | {{3 * 10^11}} to {{4.3 * 10^14}} Hz | Thermal imaging, remote controls |
| **Visible** | **400 nm (violet) – 700 nm (red)** | {{4.3 * 10^14}} to {{7.5 * 10^14}} Hz | Human vision, optical fibres |
| **Ultraviolet (UV)** | {{10^(-8)}} m to {{4 * 10^(-7)}} m | {{7.5 * 10^14}} to {{3 * 10^16}} Hz | Fluorescence, sterilisation |
| **X-rays** | {{10^(-11)}} m to {{10^(-8)}} m | {{3 * 10^16}} to {{3 * 10^19}} Hz | Medical imaging, crystallography |
| **Gamma (γ) rays** | {{< 10^(-11)}} m | {{> 3 * 10^19}} Hz | Nuclear decay, radiotherapy |

*(Note: X-rays and gamma rays overlap in wavelength; they are distinguished by **origin**—X-rays come from fast electron deceleration or inner-shell electron transitions, whereas gamma rays originate from atomic **nuclei**.)*

### Wave Intensity & The Inverse-Square Law
**Intensity ({{I}})** is the wave power transmitted per unit cross-sectional area perpendicular to the direction of propagation:

{{I = P/A}} (unit: W m⁻²)

If a point source emits power {{P}} **isotropically** (equally in all directions) into a non-absorbing medium, at distance {{r}} the energy spreads uniformly over a spherical surface of area {{4πr^2}}:

{{I = P / (4π r^2)}} ⇒ {{I ∝ 1 / r^2}}

Therefore, comparing two distances {{r_1}} and {{r_2}} from the same point source:

{{I_2 / I_1 = (r_1 / r_2)^2}}

### Linking Intensity and Amplitude
Every particle oscillating in a wave behaves like an SHM oscillator whose energy is proportional to amplitude squared ({{E ∝ A^2}}). Consequently, for waves of the same frequency in the same medium:

{{I ∝ A^2}} ⇒ {{I_2 / I_1 = (A_2 / A_1)^2}}

Combining {{I ∝ 1/r^2}} with {{I ∝ A^2}} for an unabsorbed spherical wave yields a crisp bonus law: **{{A ∝ 1/r}}** (doubling the distance quarters the intensity and **halves** the amplitude).`,
      diagram: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electromagnetic spectrum logarithmic wavelength scale from radio to gamma rays above an inverse-square law spherical shell diagram at distances r, 2r, and 3r">
  <rect x="0" y="0" width="520" height="280" fill="#ffffff" rx="8"/>
  <!-- TOP: EM Spectrum log scale -->
  <text x="260" y="19" font-size="12.5" font-weight="700" text-anchor="middle" fill="#171a2f">Electromagnetic Spectrum (all travel at c = 3.00 × 10⁸ m s⁻¹ in vacuum)</text>
  <!-- Arrows for lambda and f -->
  <text x="22" y="34" font-size="10" font-weight="700" fill="#2563eb">← Longer λ (lower f)</text>
  <text x="498" y="34" font-size="10" font-weight="700" text-anchor="end" fill="#7c3aed">Shorter λ (higher f) →</text>

  <!-- Band boxes y=42..76 -->
  <rect x="20" y="42" width="76" height="34" fill="#fee2e2" stroke="#fca5a5"/>
  <text x="58" y="63" font-size="10.5" font-weight="700" text-anchor="middle" fill="#991b1b">Radio</text>

  <rect x="96" y="42" width="78" height="34" fill="#ffedd5" stroke="#fdba74"/>
  <text x="135" y="63" font-size="10.5" font-weight="700" text-anchor="middle" fill="#9a3412">Microwave</text>

  <rect x="174" y="42" width="76" height="34" fill="#fef3c7" stroke="#fcd34d"/>
  <text x="212" y="63" font-size="10.5" font-weight="700" text-anchor="middle" fill="#92400e">Infrared</text>

  <!-- Narrow visible rainbow band -->
  <rect x="250" y="42" width="7" height="34" fill="#ef4444"/>
  <rect x="257" y="42" width="6" height="34" fill="#f59e0b"/>
  <rect x="263" y="42" width="6" height="34" fill="#eab308"/>
  <rect x="269" y="42" width="6" height="34" fill="#22c55e"/>
  <rect x="275" y="42" width="6" height="34" fill="#3b82f6"/>
  <rect x="281" y="42" width="7" height="34" fill="#8b5cf6"/>
  <rect x="250" y="42" width="38" height="34" fill="none" stroke="#171a2f" stroke-width="1"/>
  <text x="269" y="92" font-size="9.5" font-weight="700" text-anchor="middle" fill="#171a2f">Visible (700–400 nm)</text>

  <rect x="288" y="42" width="68" height="34" fill="#ede9fe" stroke="#c4b5fd"/>
  <text x="322" y="63" font-size="10.5" font-weight="700" text-anchor="middle" fill="#5b21b6">UV</text>

  <rect x="356" y="42" width="72" height="34" fill="#e0f2fe" stroke="#7dd3fc"/>
  <text x="392" y="63" font-size="10.5" font-weight="700" text-anchor="middle" fill="#075985">X-ray</text>

  <rect x="428" y="42" width="72" height="34" fill="#dbeafe" stroke="#93c5fd"/>
  <text x="464" y="63" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e3a8a">Gamma (γ)</text>

  <!-- Wavelength scale ticks -->
  <text x="96" y="88" font-size="9" text-anchor="middle" fill="#555b78">10⁻¹ m</text>
  <text x="174" y="88" font-size="9" text-anchor="middle" fill="#555b78">10⁻³ m</text>
  <text x="356" y="88" font-size="9" text-anchor="middle" fill="#555b78">10⁻⁸ m</text>
  <text x="428" y="88" font-size="9" text-anchor="middle" fill="#555b78">10⁻¹¹ m</text>

  <!-- Divider -->
  <line x1="20" y1="106" x2="500" y2="106" stroke="#e0e3ef" stroke-width="1.5"/>

  <!-- BOTTOM: Inverse-Square Law Cone & Shells -->
  <text x="260" y="125" font-size="12.5" font-weight="700" text-anchor="middle" fill="#171a2f">Inverse-Square Law: I = P / (4πr²) and I ∝ A²</text>

  <!-- Source at (68, 198) -->
  <circle cx="68" cy="198" r="8" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
  <text x="68" y="220" font-size="10" font-weight="700" text-anchor="middle" fill="#92400e">Point source</text>
  <text x="68" y="232" font-size="9.5" text-anchor="middle" fill="#555b78">Power P</text>

  <!-- Diverging cone rays -->
  <line x1="76" y1="195" x2="438" y2="138" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="76" y1="201" x2="438" y2="258" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="4 3"/>

  <!-- Patch at r (x=180): 1x1 -->
  <rect x="172" y="180" width="22" height="36" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="2"/>
  <text x="183" y="202" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">A</text>
  <text x="183" y="246" font-size="10.5" font-weight="700" text-anchor="middle" fill="#171a2f">r</text>
  <text x="183" y="261" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">I, A₀</text>

  <!-- Patch at 2r (x=296): 2x2 grid -->
  <rect x="282" y="162" width="44" height="72" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="2"/>
  <line x1="304" y1="162" x2="304" y2="234" stroke="#60a5fa" stroke-width="1"/>
  <line x1="282" y1="198" x2="326" y2="198" stroke="#60a5fa" stroke-width="1"/>
  <text x="304" y="155" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">4A</text>
  <text x="304" y="250" font-size="10.5" font-weight="700" text-anchor="middle" fill="#171a2f">2r</text>
  <text x="304" y="264" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">I/4, A₀/2</text>

  <!-- Patch at 3r (x=420): 3x3 grid -->
  <rect x="394" y="144" width="66" height="108" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="2"/>
  <line x1="416" y1="144" x2="416" y2="252" stroke="#60a5fa" stroke-width="1"/>
  <line x1="438" y1="144" x2="438" y2="252" stroke="#60a5fa" stroke-width="1"/>
  <line x1="394" y1="180" x2="460" y2="180" stroke="#60a5fa" stroke-width="1"/>
  <line x1="394" y1="216" x2="460" y2="216" stroke="#60a5fa" stroke-width="1"/>
  <text x="427" y="139" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">9A</text>
  <text x="427" y="266" font-size="10.5" font-weight="700" text-anchor="middle" fill="#171a2f">3r → I/9, A₀/3</text>
</svg>`,
      diagramCaption:
        "Top: Continuous EM spectrum across 15+ orders of magnitude of wavelength. Bottom: As distance r doubles or triples, spherical area expands by r², diluting intensity as 1/r² and amplitude as 1/r.",
      workedExamples: [
        {
          title: "Identifying an EM Region from Frequency",
          problem:
            "A modern Wi-Fi router broadcasts an electromagnetic signal at frequency {{f = 5.00}} GHz ({{5.00 * 10^9}} Hz). Calculate its vacuum wavelength and identify its region in the EM spectrum.",
          steps: [
            "Use {{c = fλ}} with {{c = 3.00 * 10^8}} m s⁻¹.",
            "{{λ = c/f = (3.00 * 10^8) / (5.00 * 10^9) = 0.0600}} m ({{6.00}} cm).",
            "Since {{6.00 * 10^(-2)}} m lies between {{10^(-3)}} m and {{10^(-1)}} m, it is in the **microwave** region.",
          ],
          answer: "{{λ = 0.0600}} m (microwave region)",
          yourTurn: {
            question:
              "Green laser light has a vacuum wavelength of {{500}} nm ({{5.00 * 10^(-7)}} m). Calculate its frequency in THz ({{1 THz = 10^12 Hz}}).",
            answer: { type: "number", value: 600, tolerance: 1, display: "600 THz" },
            solution:
              "{{f = c/λ = (3.00 * 10^8)/(5.00 * 10^(-7)) = 6.00 * 10^14}} Hz = {{600 * 10^12}} Hz = {{600}} THz.",
          },
        },
        {
          title: "Inverse-Square Intensity & Amplitude Scaling",
          problem:
            "An isotropic loudspeaker radiates sound power {{P = 12.0}} W uniformly in all directions. Calculate (a) the intensity at {{r_1 = 2.0}} m, and (b) the factor by which the sound-wave amplitude changes when a listener walks out to {{r_2 = 6.0}} m.",
          steps: [
            "Intensity at {{2.0}} m: {{I_1 = P/(4π r_1^2) = 12.0 / (4π * 2.0^2) = 12.0 / (16π) ≈ 0.239}} W m⁻².",
            "Moving from {{2.0}} m to {{6.0}} m triples the distance ({{r_2 / r_1 = 3}}), so intensity falls by {{3^2 = 9}}: {{I_2 / I_1 = 1/9}}.",
            "Since {{I ∝ A^2}}, the amplitude ratio is {{A_2 / A_1 = sqrt(I_2 / I_1) = sqrt(1/9) = 1/3}} (amplitude becomes one-third).",
          ],
          answer: "{{I_1 = 0.239}} W m⁻²; amplitude becomes {{1/3}} as large",
          yourTurn: {
            question:
              "At a distance of {{4.0}} m from an isotropic point source, the wave intensity is {{36}} W m⁻². Calculate the intensity (in W m⁻²) at a distance of {{12.0}} m from the source.",
            answer: { type: "number", value: 4, tolerance: 0.05, display: "4 W m⁻²" },
            solution:
              "Distance increases by a factor of {{12.0/4.0 = 3}}, so by {{I ∝ 1/r^2}} the intensity decreases by {{3^2 = 9}}: {{I_2 = 36 / 9 = 4.0}} W m⁻².",
          },
        },
      ],
      keyPoints: [
        "All EM waves are transverse and travel at {{c = 3.00 * 10^8}} m s⁻¹ in vacuum regardless of frequency or wavelength.",
        "Memorise the visible spectrum limits: **400 nm (violet)** to **700 nm (red)**.",
        "Intensity {{I = P/A}} has SI units W m⁻²; for a point isotropic source, {{I = P/(4πr^2)}}.",
        "Intensity is proportional to **amplitude squared**: {{I ∝ A^2}} (doubling amplitude quadruples intensity).",
        "For an unabsorbed spherical wave, {{I ∝ 1/r^2}} and {{I ∝ A^2}} together imply {{A ∝ 1/r}}.",
      ],
      whyItWorks:
        "Why does {{I = P/(4πr^2)}} hold only for a **point source** in a **non-absorbing medium**? Because conservation of energy says the total power crossing every concentric sphere centred on the source must equal the emitted power {{P}}. Dividing constant power {{P}} by sphere surface area {{4πr^2}} forces intensity to fall as {{1/r^2}}. A tightly focused **laser beam** barely diverges (nearly constant area), so it does **not** obey the inverse-square law over short laboratory distances; and in fog or murky water, absorption removes power exponentially on top of spreading!",
      strategies: [
        "Use SI prefix powers fluently: nm = {{10^(-9)}} m, μm = {{10^(-6)}} m, mm = {{10^(-3)}} m, kHz = {{10^3}} Hz, MHz = {{10^6}} Hz, GHz = {{10^9}} Hz.",
        "When comparing two intensities at two distances, skip computing {{P}} and {{4π}} entirely: go straight to {{I_2/I_1 = (r_1/r_2)^2}}.",
        "Double-check whether a question asks for the change in **intensity** ({{∝ 1/r^2}}) or **amplitude** ({{∝ 1/r}} or {{∝ sqrt(I)}}).",
      ],
      thinkDeeper:
        "Why do circular ripples spreading on a **2D** pond surface lose amplitude more slowly than 3D spherical sound waves? On a 2D surface, wave power spreads over a **circumference** {{2πr}} rather than a sphere {{4πr^2}}, so 2D intensity falls only as {{1/r}} and ripple amplitude falls even more gently as {{1/sqrt(r)}}! This geometric spreading exponent explains why surface seismic waves (Rayleigh & Love waves, 2D) cause far more distant building damage than body P- and S-waves (3D).",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "State the two conditions in the IB definition of Simple Harmonic Motion (SHM).",
        back: "Acceleration is (1) **directly proportional** to displacement from a fixed equilibrium position, and (2) always **directed towards** the equilibrium position: {{a = -ω^2 x}}.",
      },
      {
        front: "What is the gradient and shape of an acceleration–displacement ({{a}}–{{x}}) graph for SHM?",
        back: "A **straight line through the origin** bounded at {{±x_0}}, with a **negative gradient** equal to {{-ω^2}}.",
      },
      {
        front: "Period formula for a mass–spring system and what it does NOT depend on.",
        back: "{{T = 2π sqrt(m/k)}}. It is independent of **amplitude {{x_0}}** and **gravitational field strength {{g}}**.",
      },
      {
        front: "Period formula for a simple pendulum and its validity condition.",
        back: "{{T = 2π sqrt(l/g)}}, valid for **small angles** ({{θ <= 10°}}, where {{sin(θ) ≈ θ}}). Independent of bob mass {{m}}.",
      },
      {
        front: "How is angular frequency {{ω}} related to period {{T}} and frequency {{f}}?",
        back: "{{ω = 2πf = 2π/T}} (measured in rad s⁻¹).",
      },
      {
        front: "[HL] State the phase relationships between {{x}}, {{v}}, and {{a}} in SHM.",
        back: "Velocity **leads** displacement by {{π/2}} rad ({{90°}}, {{T/4}}); acceleration is in **antiphase** ({{π}} rad, {{180°}}, {{T/2}}) with displacement.",
        level: "HL",
      },
      {
        front: "[HL] Formula for SHM speed as a function of displacement {{x}}.",
        back: "{{v = ±ω sqrt(x_0^2 - x^2)}}, giving maximum speed {{v_max = ω x_0}} at {{x = 0}}.",
        level: "HL",
      },
      {
        front: "[HL] At what displacement {{x}} does {{E_k = E_p}} in SHM?",
        back: "At {{x = ±x_0 / sqrt(2) ≈ ±0.707 x_0}} (NOT {{x_0/2}}), where {{E_k = E_p = 1/2 E_T}}.",
        level: "HL",
      },
      {
        front: "[HL] State the exact equations for {{E_T}}, {{E_p}}, and {{E_k}} in SHM.",
        back: "{{E_T = 1/2 m ω^2 x_0^2}}, {{E_p = 1/2 m ω^2 x^2}}, and {{E_k = 1/2 m ω^2 (x_0^2 - x^2)}}.",
        level: "HL",
      },
      {
        front: "Distinguish between a transverse wave and a longitudinal wave.",
        back: "**Transverse:** medium oscillates **perpendicular** to energy transfer (crests/troughs; polarisable). **Longitudinal:** medium oscillates **parallel** to energy transfer (compressions/rarefactions; cannot be polarised).",
      },
      {
        front: "What is read from a displacement–distance graph vs a displacement–time graph?",
        back: "**Displacement–distance:** amplitude {{A}} and **wavelength {{λ}}**. **Displacement–time:** amplitude {{A}} and **period {{T}}** (so {{f = 1/T}}).",
      },
      {
        front: "How do you identify a compression on a longitudinal displacement–distance graph?",
        back: "Where displacement crosses **zero** ({{y = 0}}) with a **negative gradient** (particles to the left shift right, particles to the right shift left).",
      },
      {
        front: "Formula for the speed of a transverse wave on a stretched string.",
        back: "{{v = sqrt(F_T / μ)}}, where {{F_T}} is string tension (N) and {{μ = m/L}} is linear mass density (kg m⁻¹).",
      },
      {
        front: "List the 7 regions of the EM spectrum in order of **decreasing wavelength** (increasing frequency).",
        back: "Radio → Microwave → Infrared → Visible (700 nm red to 400 nm violet) → Ultraviolet → X-rays → Gamma rays.",
      },
      {
        front: "State the inverse-square law for wave intensity and its proportionality to amplitude.",
        back: "{{I = P / (4π r^2)}} ({{I ∝ 1/r^2}}) for a point isotropic source, and {{I ∝ A^2}}. Together they give {{A ∝ 1/r}}.",
      },
      {
        front: "What happens to {{f}}, {{v}}, and {{λ}} when a wave passes into a faster medium?",
        back: "**Frequency {{f}} stays constant** (fixed by source); wave speed {{v}} increases, so wavelength {{λ = v/f}} increases by the same factor.",
      },
    ],
    mustKnow: [
      "SHM requires BOTH proportionality to displacement AND direction toward equilibrium ({{a = -ω^2 x}}); periodic motion alone is NOT sufficient.",
      "Mass–spring period {{T = 2π sqrt(m/k)}} is unaffected by gravity {{g}}; pendulum period {{T = 2π sqrt(l/g)}} is unaffected by mass {{m}}.",
      "In HL SHM, {{E_T = 1/2 m ω^2 x_0^2}} scales with amplitude **squared** and frequency **squared**, and {{E_k}} & {{E_p}} oscillate at **twice** the motion frequency ({{2f}}).",
      "Always check the horizontal axis of a wave graph first: distance → {{λ}}; time → {{T}}.",
      "Travelling waves transport energy without net transport of medium particles; particle speed ({{v_y}}) is completely distinct from wave speed ({{v = fλ}}).",
      "Only transverse waves can be polarised; longitudinal waves (like sound) cannot.",
      "When a wave changes medium, frequency {{f}} NEVER changes—only {{v}} and {{λ}} change together.",
      "All EM waves travel at {{c = 3.00 * 10^8}} m s⁻¹ in vacuum; visible light spans **400 nm (violet) to 700 nm (red)**.",
      "Intensity {{I = P/(4πr^2)}} obeys the inverse-square law for an unabsorbed point source, while {{I ∝ A^2}} links intensity to amplitude.",
      "For a spherical wave without absorption, doubling distance quarters intensity ({{I/4}}) and **halves** amplitude ({{A/2}}).",
    ],
    misconceptions: [
      {
        wrong: "Pulling a mass on a spring or a pendulum twice as far increases its period because it has further to travel.",
        right: "SHM is **isochronous**: doubling amplitude doubles the restoring force and acceleration everywhere, so the oscillator moves twice as fast on average and finishes each cycle in the exact same period {{T}}.",
      },
      {
        wrong: "A vertical mass–spring system oscillates slower on the Moon because gravity is weaker.",
        right: "Gravity only shifts the static equilibrium stretch ({{mg/k}}). The restoring force about equilibrium is still {{-kx}}, so {{T = 2π sqrt(m/k)}} is completely identical on Earth and on the Moon.",
      },
      {
        wrong: "In SHM, kinetic energy equals potential energy halfway to the amplitude ({{x = x_0 / 2}}).",
        right: "Since {{E_p ∝ x^2}}, at {{x = x_0/2}} potential energy is only {{(1/2)^2 = 1/4}} of {{E_T}} (leaving {{3/4 E_T}} as {{E_k}}). Equal sharing ({{E_k = E_p = 1/2 E_T}}) occurs at {{x = ±x_0/sqrt(2) ≈ ±0.707 x_0}}.",
        level: "HL",
      },
      {
        wrong: "On a longitudinal displacement–distance graph, a compression is located at a peak (maximum displacement).",
        right: "At a peak, particles have maximum displacement to the right, and neighbouring particles shift almost equally right, so spacing is normal! A **compression** occurs at {{y = 0}} with a **negative gradient**, where particles on both sides crowd inward.",
      },
      {
        wrong: "When light or sound enters a denser medium, its frequency changes.",
        right: "Frequency is fixed by the **source** and remains strictly constant across any boundary. Only wave speed {{v}} and wavelength {{λ = v/f}} change.",
      },
      {
        wrong: "Gamma rays travel faster in vacuum than radio waves because they have higher frequency and energy.",
        right: "ALL electromagnetic waves travel at the exact same speed {{c = 3.00 * 10^8}} m s⁻¹ in vacuum regardless of frequency or wavelength.",
      },
      {
        wrong: "Doubling the distance from a point source halves the wave intensity.",
        right: "Intensity follows the **inverse-square law** {{I ∝ 1/r^2}}: doubling distance divides intensity by {{2^2 = 4}} (it is the **amplitude** that halves, since {{A ∝ 1/r}}).",
      },
    ],
    examMistakes: [
      "Forgetting the **minus sign** or the phrase 'directed towards equilibrium' when defining SHM—this instantly loses 1 of the 2 marks on IB Paper 2.",
      "Reading the gradient of an {{a}}–{{x}} graph as {{ω}} instead of {{ω^2}} (always take the square root of the gradient magnitude!).",
      "Leaving a scientific calculator in **DEGREES** instead of **RADIANS** when evaluating {{x = x_0 sin(ωt + φ)}} in HL Paper 2.",
      "Reading **period {{T}}** off a displacement–**distance** graph (or wavelength {{λ}} off a displacement–**time** graph) without checking the axis label.",
      "Confusing total **crest-to-trough height** ({{2A}}) with **amplitude** ({{A}}) when reading graphs.",
      "Forgetting to square the ratio when using {{I ∝ A^2}} or {{I ∝ 1/r^2}} (or forgetting to convert nm to {{10^(-9)}} m in {{c = fλ}}).",
      "Forgetting to convert grams to kilograms when computing linear mass density {{μ = m/L}} for {{v = sqrt(F_T / μ)}}.",
    ],
    mnemonics: [
      {
        topic: "EM Spectrum Order (Long λ → Short λ)",
        device: "Real Men In Violet Underwear X-ray Ghosts",
        explanation:
          "**R**adio → **M**icrowave → **I**nfrared → **V**isible (Red→Violet) → **U**ltraviolet → **X**-ray → **G**amma. Remember **Red** sits next to Infra**red** (700 nm) and **Violet** sits next to Ultra**violet** (400 nm)!",
      },
      {
        topic: "SHM Derivatives & Phase Order (HL)",
        device: "X–V–A: Sin → Cos → Minus Sin",
        explanation:
          "Starting from {{x = x_0 sin(ωt)}}: differentiate once for {{v = +ω x_0 cos(ωt)}} (leads by {{π/2}}), differentiate again for {{a = -ω^2 x_0 sin(ωt)}} (flips upside down, {{π}} out of phase with {{x}}).",
        level: "HL",
      },
      {
        topic: "Pendulum vs Spring Periods",
        device: "More Mass / Longer Length = Lazier (Longer T)",
        explanation:
          "Bigger inertia ({{m}}) or longer string ({{l}}) goes in the **numerator** of {{2π sqrt(m/k)}} and {{2π sqrt(l/g)}}; stronger restoring pull (stiff {{k}} or strong {{g}}) goes in the **denominator**!",
      },
    ],
    realWorld: [
      {
        title: "Taipei 101 Tuned Mass Damper",
        emoji: "🏙️",
        detail:
          "A 660-tonne steel sphere hangs as a giant simple pendulum inside Taipei 101's 87th–92nd floors. Its length is tuned via {{T = 2π sqrt(l/g)}} so it oscillates out of phase with typhoon winds and earthquakes, slashing tower sway by up to 40%.",
      },
      {
        title: "Quartz Crystal Clocks",
        emoji: "⌚",
        detail:
          "Every smartphone and wristwatch keeps time using a tiny tuning-fork quartz crystal vibrating in SHM at exactly {{32768 = 2^15}} Hz. Because SHM is isochronous, its period stays ultra-stable even as battery voltage drifts.",
      },
      {
        title: "Seismic P-Waves & S-Waves Reveal Earth's Liquid Core",
        emoji: "🌍",
        detail:
          "Earthquakes launch longitudinal **P-waves** (travel through solids and liquids) and transverse **S-waves** (travel through solids only, since liquids lack shear restoring forces). The global S-wave shadow zone proved Earth has a liquid outer core.",
      },
      {
        title: "James Webb Space Telescope (Infrared EM Band)",
        emoji: "🔭",
        detail:
          "Because cosmic expansion stretches ancient starlight from visible wavelengths into the **infrared** ({{0.6}} μm to {{28}} μm), JWST's gold-coated mirror is optimised to reflect IR photons while a tennis-court sunshield keeps it cold.",
      },
      {
        title: "Deep-Space Telemetry & The Inverse-Square Law",
        emoji: "🛰️",
        detail:
          "Voyager 1 transmits at just {{23}} W from over 24 billion km away. Spreading over {{4πr^2}} reduces the received intensity on Earth to roughly {{10^(-21)}} W m⁻², requiring 70-metre Deep Space Network dish antennas to capture it.",
      },
    ],
    videos: [
      {
        title: "IB Physics C.1 Simple Harmonic Motion (SL & HL Complete Review)",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=Andy+Masley+IB+Physics+simple+harmonic+motion+C.1",
      },
      {
        title: "Simple Harmonic Motion — Energy Graphs & Phase Angle (HL)",
        channel: "OSC IB Physics",
        url: "https://www.youtube.com/results?search_query=OSC+IB+Physics+simple+harmonic+motion+energy+graphs",
      },
      {
        title: "IB Physics C.2 The Wave Model: Graphs, Wave Equation & String Speed",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=Chris+Doner+IB+Physics+travelling+waves+displacement+distance+time",
      },
      {
        title: "Electromagnetic Spectrum & Inverse-Square Law of Intensity",
        channel: "Physics Online / IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+electromagnetic+spectrum+wave+intensity+inverse+square+law",
      },
    ],
    formulas: [
      {
        name: "SHM Defining Equation",
        formula: "{{a = -ω^2 x}}",
        note: "Acceleration proportional to displacement and opposite in direction (a–x slope = −ω²).",
      },
      {
        name: "Angular Frequency & Period",
        formula: "{{ω = 2πf = 2π/T}}",
        note: "ω in rad s⁻¹, f in Hz, T in s.",
      },
      {
        name: "Mass–Spring Period",
        formula: "{{T = 2π sqrt(m/k)}}",
        note: "Independent of amplitude x₀ and gravitational field strength g.",
      },
      {
        name: "Simple Pendulum Period",
        formula: "{{T = 2π sqrt(l/g)}}",
        note: "Valid for small angles (θ ≤ 10°); independent of bob mass m.",
      },
      {
        name: "SHM Displacement & Velocity (Time)",
        formula: "{{x = x_0 sin(ωt + φ)}}, {{v = ω x_0 cos(ωt + φ)}}",
        note: "Keep calculator in radians; φ is phase constant.",
        level: "HL",
      },
      {
        name: "SHM Velocity–Displacement",
        formula: "{{v = ±ω sqrt(x_0^2 - x^2)}}",
        note: "Maximum speed v_max = ωx₀ at equilibrium (x = 0).",
        level: "HL",
      },
      {
        name: "SHM Total, Potential & Kinetic Energy",
        formula: "{{E_T = 1/2 m ω^2 x_0^2}}, {{E_p = 1/2 m ω^2 x^2}}, {{E_k = 1/2 m ω^2 (x_0^2 - x^2)}}",
        note: "E_k = E_p = ½E_T at x = ±x₀/√2.",
        level: "HL",
      },
      {
        name: "Phase Difference from Time Delay",
        formula: "{{Δφ = 2π (Δt / T)}}",
        note: "In radians; Δφ = π for antiphase, π/2 for quarter-cycle lead/lag.",
        level: "HL",
      },
      {
        name: "Universal Wave Equation",
        formula: "{{v = fλ = λ/T}}",
        note: "For EM waves in vacuum: c = fλ with c = 3.00 × 10⁸ m s⁻¹.",
      },
      {
        name: "Transverse Wave Speed on a String",
        formula: "{{v = sqrt(F_T / μ)}}",
        note: "F_T = tension (N); μ = m/L = linear mass density (kg m⁻¹).",
      },
      {
        name: "Wave Intensity (Isotropic Point Source)",
        formula: "{{I = P / (4π r^2)}}",
        note: "Units: W m⁻². Inverse-square law: I ∝ 1/r².",
      },
      {
        name: "Intensity–Amplitude Proportionality",
        formula: "{{I ∝ A^2}}",
        note: "Combined with I ∝ 1/r², spherical waves obey A ∝ 1/r.",
      },
    ],
  },
};
