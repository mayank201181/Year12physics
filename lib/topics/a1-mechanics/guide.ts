import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "a1-mechanics",
  title: "A.1–A.3 Kinematics, Forces, Momentum & Energy",
  strand: "Theme A: Space, Time & Motion",
  icon: "🚀",
  level: "SL",
  summary:
    "Describe motion with graphs and SUVAT equations, model forces with Newton's laws and friction, analyse collisions and circular orbits via momentum and centripetal force, and solve complex multi-stage problems with work, mechanical energy and power.",
  intro:
    "Theme A is the bedrock of the entire IB Physics Diploma: nearly every later topic — from gases and charged particles in magnetic fields to orbital mechanics and nuclear decays — relies on the core mechanics tools you build here. In A.1–A.3 you learn three complementary lenses on the same physical world: **kinematics** (describing *how* objects move), **dynamics & momentum** (explaining *why* motion changes through forces and impulse), and **work & energy** (tracking conserved quantities to bypass messy intermediate forces).",
  guide: [
    // =========================================================================
    // SECTION 1: A.1 KINEMATICS, MOTION GRAPHS & PROJECTILE MOTION
    // =========================================================================
    {
      id: "kinematics-projectiles",
      heading: "A.1 Kinematics, Motion Graphs & Projectile Motion",
      level: "SL",
      discovery: {
        problem:
          "Stand on a balcony and release two identical metal spheres at the exact same instant: Sphere A is simply dropped from rest, while Sphere B is fired strictly horizontally at 18 m s⁻¹ (assume negligible air resistance). Which sphere hits the level ground below first — or do they land together? What if Sphere B is fired at 180 m s⁻¹?",
        idea:
          "They hit the ground at the **exact same instant** (even at 180 m s⁻¹, neglecting Earth's curvature and drag). Gravity pulls strictly vertically downwards, so it produces zero horizontal acceleration. Both spheres start with vertical velocity {{u_y = 0}} and fall through the same vertical displacement {{h}} with the same downward acceleration {{g = 9.81}} m s⁻², so both take {{t = sqrt(2h/g)}}. Horizontal motion and vertical motion are completely independent.",
      },
      body: `**1. Scalars vs vectors in kinematics**
- **Displacement** ({{s}}, vector, m) is the straight-line change in position in a specified direction; **distance** (scalar) is total path length.
- **Velocity** ({{v = Δs/Δt}}, vector, m s⁻¹) is the rate of change of displacement; **speed** (scalar) is rate of change of distance. Instantaneous velocity is the gradient of the tangent to an {{s}}–{{t}} graph.
- **Acceleration** ({{a = Δv/Δt}}, vector, m s⁻²) is the rate of change of velocity. An object accelerates whenever its speed changes, its direction changes, or both.

**2. Motion graphs ({{s}}–{{t}}, {{v}}–{{t}}, {{a}}–{{t}})**
| Graph | Gradient gives… | Area between curve and time axis gives… |
|---|---|---|
| Displacement–time ({{s}}–{{t}}) | Instantaneous velocity {{v}} | Not physically meaningful |
| Velocity–time ({{v}}–{{t}}) | Instantaneous acceleration {{a}} | Displacement {{Δs}} (signed; total distance uses unsigned area) |
| Acceleration–time ({{a}}–{{t}}) | Rate of change of acceleration (jerk) | Change in velocity {{Δv}} |

**3. Uniform-acceleration (SUVAT) equations**
When (and **only** when) acceleration {{a}} is constant along a straight line, the four IB Data Booklet equations relate displacement {{s}}, initial velocity {{u}}, final velocity {{v}}, acceleration {{a}} and time {{t}}:
- {{v = u + at}}
- {{s = ut + (1/2)at^2}}
- {{v^2 = u^2 + 2as}}
- {{s = ((u + v)/2)t}}

Always fix a positive direction at the start (e.g. upwards positive, so free-fall acceleration is {{a = -g = -9.81}} m s⁻²).

**4. Two-dimensional projectile motion (no air resistance)**
Resolve the launch velocity {{u}} at angle {{θ}} above the horizontal into two independent 1D motions that share only the same time {{t}}:
- **Horizontal (constant velocity, {{a_x = 0}}):** {{u_x = u cos θ}}, {{v_x = u cos θ}}, and horizontal position {{x = (u cos θ)t}}.
- **Vertical (constant acceleration, {{a_y = -g}}):** {{u_y = u sin θ}}, {{v_y = u sin θ - gt}}, {{y = (u sin θ)t - (1/2)gt^2}}.
- At the **maximum height**, {{v_y = 0}}, while the speed is NOT zero — it equals the horizontal component {{v_x = u cos θ}}.

**5. Qualitative effects of fluid resistance & terminal velocity**
In real air, drag opposes the instantaneous velocity and increases with speed. Compared with an ideal vacuum parabola, air resistance causes a projectile to reach a **lower maximum height**, travel a **shorter horizontal range**, and follow an **asymmetric path** whose descent is steeper than its ascent (because horizontal speed continuously decays). For a falling body, as speed grows, upward fluid drag increases until drag equals weight ({{F_d = mg}}); net force and acceleration drop to zero and the object falls at constant **terminal velocity**.`,
      diagram: `<svg viewBox="0 0 520 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2D projectile motion parabola showing constant horizontal velocity vectors, changing vertical velocity vectors, maximum height H, range R, and the asymmetric lower path with air resistance">
  <defs>
    <marker id="ar-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="ar-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="ar-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
    <marker id="ar-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="275" fill="#ffffff"/>
  <!-- Axes -->
  <line x1="48" y1="228" x2="492" y2="228" stroke="#334155" stroke-width="2" marker-end="url(#ar-slate)"/>
  <line x1="48" y1="228" x2="48" y2="22" stroke="#334155" stroke-width="2" marker-end="url(#ar-slate)"/>
  <text x="498" y="232" font-size="12" font-weight="700" fill="#1e293b">x</text>
  <text x="42" y="16" font-size="12" font-weight="700" fill="#1e293b">y</text>

  <!-- Ideal parabola: M 48,228 Q 258,-72 468,228 (vertex at x=258, y=78) -->
  <path d="M 48 228 Q 258 -72 468 228" fill="none" stroke="#2563eb" stroke-width="2.6"/>
  <!-- Air resistance curve: lower, shorter, steeper descent -->
  <path d="M 48 228 C 145 78, 285 92, 348 228" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="6 4"/>

  <!-- Max height H guide -->
  <line x1="258" y1="78" x2="258" y2="228" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 4"/>
  <text x="264" y="162" font-size="12" font-weight="700" fill="#475569">H (max height)</text>
  <!-- Range R guide -->
  <line x1="48" y1="248" x2="468" y2="248" stroke="#475569" stroke-width="1.4" marker-start="url(#ar-slate)" marker-end="url(#ar-slate)"/>
  <text x="258" y="264" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Range R = (u cos θ) T</text>

  <!-- Launch point vectors -->
  <circle cx="48" cy="228" r="4" fill="#1e293b"/>
  <line x1="48" y1="228" x2="108" y2="228" stroke="#15803d" stroke-width="2.4" marker-end="url(#ar-green)"/>
  <line x1="48" y1="228" x2="48" y2="146" stroke="#dc2626" stroke-width="2.4" marker-end="url(#ar-red)"/>
  <line x1="48" y1="228" x2="108" y2="146" stroke="#2563eb" stroke-width="2.6" marker-end="url(#ar-blue)"/>
  <path d="M 76 228 A 28 28 0 0 0 65 205" fill="none" stroke="#1e293b" stroke-width="1.4"/>
  <text x="80" y="216" font-size="12" font-weight="700" fill="#1e293b">θ</text>
  <text x="112" y="144" font-size="12" font-weight="700" fill="#2563eb">u</text>
  <text x="56" y="140" font-size="11" font-weight="700" fill="#dc2626">u sin θ</text>
  <text x="72" y="242" font-size="11" font-weight="700" fill="#15803d">u cos θ</text>

  <!-- Peak vectors (x=258, y=78) -->
  <circle cx="258" cy="78" r="4.5" fill="#2563eb"/>
  <line x1="258" y1="78" x2="318" y2="78" stroke="#15803d" stroke-width="2.4" marker-end="url(#ar-green)"/>
  <text x="258" y="56" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">Peak: v_y = 0, v = u cos θ</text>
  <text x="322" y="82" font-size="11" font-weight="700" fill="#15803d">v_x</text>

  <!-- Descent point vectors (t = 0.75 T -> x=363, y=115.5) -->
  <circle cx="363" cy="115.5" r="4" fill="#2563eb"/>
  <line x1="363" y1="115.5" x2="423" y2="115.5" stroke="#15803d" stroke-width="2.2" marker-end="url(#ar-green)"/>
  <line x1="363" y1="115.5" x2="363" y2="156" stroke="#dc2626" stroke-width="2.2" marker-end="url(#ar-red)"/>
  <line x1="363" y1="115.5" x2="423" y2="156" stroke="#2563eb" stroke-width="2.2" marker-end="url(#ar-blue)"/>
  <text x="427" y="119" font-size="11" font-weight="700" fill="#15803d">v_x (constant)</text>
  <text x="342" y="156" font-size="11" font-weight="700" fill="#dc2626">v_y</text>

  <!-- Legend -->
  <line x1="340" y1="24" x2="366" y2="24" stroke="#2563eb" stroke-width="2.6"/>
  <text x="372" y="28" font-size="11" font-weight="700" fill="#1e293b">No air resistance</text>
  <line x1="340" y1="42" x2="366" y2="42" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="6 4"/>
  <text x="372" y="46" font-size="11" font-weight="700" fill="#b45309">With air resistance</text>
</svg>`,
      diagramCaption:
        "Horizontal velocity v_x remains constant throughout an ideal flight while vertical velocity v_y decreases at g = 9.81 m s⁻². Air drag lowers the peak, shortens the range, and steepens the descent.",
      workedExamples: [
        {
          title: "Oblique projectile from level ground",
          problem:
            "A golf ball is struck from level ground at {{u = 25.0}} m s⁻¹ at an angle {{θ = 36.9°}} above the horizontal (take {{sin 36.9° = 0.600}}, {{cos 36.9° = 0.800}}, {{g = 9.81}} m s⁻², negligible air resistance). Calculate (a) the maximum height reached and (b) the horizontal range.",
          steps: [
            "Resolve the initial velocity into horizontal and vertical components: {{u_x = 25.0 * 0.800 = 20.0}} m s⁻¹ and {{u_y = 25.0 * 0.600 = 15.0}} m s⁻¹.",
            "(a) At maximum height, {{v_y = 0}} and {{a_y = -9.81}} m s⁻². Use {{v_y^2 = u_y^2 + 2 a_y H}}: {{0 = 15.0^2 - 2(9.81)H}}, so {{H = 225 / 19.62 = 11.47}} m ≈ 11.5 m.",
            "(b) For total flight time {{T}}, landing back at {{y = 0}} gives {{0 = u_y T - (1/2)g T^2}}, hence {{T = 2 u_y / g = 30.0 / 9.81 = 3.058}} s.",
            "Since horizontal velocity is constant, range {{R = u_x T = 20.0 * 3.058 = 61.16}} m ≈ 61.2 m.",
          ],
          answer: "Maximum height H = 11.5 m; horizontal range R = 61.2 m.",
          yourTurn: {
            question:
              "A stone is thrown horizontally at 12.0 m s⁻¹ from the top of a 45.0 m vertical cliff (g = 9.81 m s⁻², negligible air resistance). Calculate the horizontal distance from the cliff base where it hits the sea, in metres to 3 s.f.",
            answer: { type: "number", value: 36.3, tolerance: 0.2, display: "36.3 m" },
            solution:
              "Vertically: u_y = 0, s_y = 45.0 m, a_y = 9.81 m s⁻² downwards. Using s_y = ½gt² gives t = √(2 × 45.0 / 9.81) = 3.029 s. Horizontally: x = u_x t = 12.0 × 3.029 = 36.3 m.",
          },
        },
        {
          title: "Uniform braking using two SUVAT equations",
          problem:
            "A car travelling at {{24.0}} m s⁻¹ brakes with constant deceleration and comes to rest in {{72.0}} m. Determine its acceleration and stopping time.",
          steps: [
            "List knowns: {{u = 24.0}} m s⁻¹, {{v = 0}}, {{s = 72.0}} m. Want {{a}} and {{t}}.",
            "Choose the equation without {{t}}: {{v^2 = u^2 + 2as}} → {{0 = 24.0^2 + 2a(72.0)}} → {{144a = -576}} → {{a = -4.00}} m s⁻².",
            "Find time using {{s = ((u + v)/2)t}}: {{72.0 = ((24.0 + 0)/2)t = 12.0t}} → {{t = 6.00}} s (independent check: {{v = u + at}} gives {{0 = 24 - 4t}} → {{t = 6.00}} s).",
          ],
          answer: "a = −4.00 m s⁻² (deceleration of 4.00 m s⁻²); stopping time t = 6.00 s.",
        },
      ],
      keyPoints: [
        "SUVAT equations are strictly valid ONLY for constant (uniform) acceleration — never apply them across a changing-acceleration region such as a falling skydiver with drag.",
        "Always resolve 2D projectiles into separate horizontal (a_x = 0) and vertical (a_y = −g) tables; time t is the sole scalar link between the two.",
        "At the highest point of a projectile's path, v_y = 0, but acceleration is still g = 9.81 m s⁻² downwards and horizontal velocity is still u cos θ.",
        "On a v–t graph, signed area gives displacement while total area above plus below the axis gives total distance travelled.",
      ],
      whyItWorks:
        "Why does {{s = ut + (1/2)at^2}} have that exact factor of {{1/2}}? Draw a velocity–time graph for constant acceleration from {{u}} to {{v = u + at}} over time {{t}}. The region under the straight line splits into a rectangle of area {{ut}} plus a right-angled triangle of base {{t}} and height {{(v - u) = at}}, whose area is {{(1/2) * t * (at) = (1/2)at^2}}. Total area = displacement = {{ut + (1/2)at^2}}. Eliminating {{t = (v - u)/a}} from the trapezium area {{s = ((u + v)/2)t}} immediately yields {{v^2 - u^2 = 2as}}.",
      strategies: [
        "Write down a neat vertical S-U-V-A-T column with explicit + / − signs before picking any equation.",
        "For 2D cliff projectiles, set y = 0 at launch so landing at the foot of a cliff of height h gives y = −h (not +h!).",
        "Check limiting cases: when θ = 0° (horizontal throw), u_y = 0; when θ = 90° (vertical throw), range R = 0.",
      ],
      thinkDeeper:
        "On level ground, range {{R = (u^2 sin 2θ)/g}} is maximised at {{θ = 45°}}. When launching from a high cliff of height {{h > 0}}, is the optimal angle for maximum horizontal range greater than, equal to, or less than 45°? (Hint: the extra height already gifts extra flight time, so putting slightly more initial speed into {{u_x}} beats 45° — the optimum is always strictly less than 45°!)",
    },

    // =========================================================================
    // SECTION 2: A.2 FREE-BODY DIAGRAMS, NEWTON'S LAWS & FRICTION
    // =========================================================================
    {
      id: "forces-newton-friction",
      heading: "A.2 Free-Body Diagrams, Newton's Laws & Friction",
      level: "SL",
      discovery: {
        problem:
          "A 10 kg wooden crate sits at rest on a rough ramp tilted at 20° to the horizontal. The coefficients of friction between crate and ramp are {{μ_s = 0.45}} and {{μ_d = 0.30}} ({{g = 9.81}} m s⁻²). A student calculates the friction force as {{F_f = μ_s m g cos 20° = 41.5}} N. Why is 41.5 N physically impossible here, and what is the true friction force?",
        idea:
          "The downhill component of weight is only {{m g sin 20° = 10 * 9.81 * 0.3420 = 33.6}} N. If friction really pushed uphill with 41.5 N, the crate would spontaneously accelerate *up* the ramp! Static friction is **self-adjusting**: {{F_f <= μ_s F_N}}. Here 41.5 N is the *maximum* static friction available; because 33.6 N < 41.5 N, the crate stays in equilibrium with {{F_f = 33.6}} N exactly.",
      },
      body: `**1. Free-Body Diagrams (FBDs) and translational equilibrium**
A **free-body diagram** isolates a single object and draws every external force acting **on** that object as a labelled arrow from its centre of mass (or point of application). Never draw velocity vectors or "{{ma}}" on an FBD — {{ma}} is the *effect* of the resultant force, not a separate force.
- An object is in **translational equilibrium** when the vector sum of all forces is zero ({{ΣF = 0}}), meaning {{ΣF_x = 0}} and {{ΣF_y = 0}} simultaneously (either stationary or moving at constant velocity).

**2. Newton's three laws of motion**
- **Newton's 1st Law (Inertia):** A body remains at rest or moves at constant velocity unless acted upon by a non-zero resultant external force.
- **Newton's 2nd Law:** The resultant force equals the rate of change of momentum ({{F = Δp/Δt}}), which for constant mass reduces to {{F_net = ma}}, with acceleration in the same direction as {{F_net}}.
- **Newton's 3rd Law:** If body A exerts a force on body B, then body B simultaneously exerts an equal-magnitude, opposite-direction force of the **same physical type** on body A ({{F_AB = -F_BA}}). Because the two forces act on *different bodies*, they never cancel each other on a single FBD.

**3. Contact friction and inclined planes**
- **Static friction** opposes impending relative motion between stationary surfaces and adjusts up to a ceiling: {{F_f <= μ_s F_N}}.
- **Dynamic (kinetic) friction** opposes ongoing sliding with constant magnitude: {{F_f = μ_d F_N}}, where typically {{μ_d < μ_s}}. Notice both depend on the **normal reaction** {{F_N}} (NOT automatically equal to {{mg}}!) and are independent of apparent contact area.
- On an incline of angle {{θ}}, align axes parallel and perpendicular to the slope: weight {{mg}} resolves into {{mg sin θ}} down the slope and {{mg cos θ}} into the slope. With no other perpendicular forces, {{F_N = mg cos θ}}.

**4. Elastic, buoyant & viscous forces (IB FA2025 A.2)**
- **Hooke's law (springs):** Restoring force {{F_H = -kx}}, proportional to extension/compression {{x}} within the elastic limit ({{k}} in N m⁻¹).
- **Buoyancy (Archimedes' principle):** Upward upthrust equals the weight of displaced fluid: {{F_b = ρ V g}}, where {{ρ}} is the **fluid** density and {{V}} is the **submerged** volume.
- **Viscous drag (Stokes' law):** For a small sphere of radius {{r}} moving at slow laminar speed {{v}} through a fluid of viscosity {{η}}, {{F_d = 6 pi η r v}}. At terminal velocity inside a fluid, {{F_b + F_d = mg}}.`,
      diagram: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Free-body diagram of a block on an inclined plane at angle theta showing normal reaction F_N, friction F_f up the slope, weight mg vertically downwards, and its resolved components mg sin theta parallel and mg cos theta perpendicular to the slope">
  <defs>
    <marker id="f-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="f-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="f-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
    <marker id="f-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="290" fill="#ffffff"/>
  <!-- Ramp triangle: angle 26.57° (slope 1/2): base (50,250) to (370,250), top (370,90) -->
  <polygon points="50,250 370,250 370,90" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <path d="M 105 250 A 55 55 0 0 0 99 225.5" fill="none" stroke="#1e293b" stroke-width="1.6"/>
  <text x="112" y="242" font-size="13" font-weight="700" fill="#1e293b">θ</text>

  <!-- Block centred at (210, 148), rotated -26.57° -->
  <g transform="translate(210,148) rotate(-26.57)">
    <rect x="-34" y="-22" width="68" height="44" rx="4" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
    <text x="0" y="5" font-size="13" font-weight="800" text-anchor="middle" fill="#1e3a8a">m</text>
  </g>
  <circle cx="210" cy="148" r="3.5" fill="#1e293b"/>

  <!-- Normal force F_N: perpendicular UP-LEFT from slope. Slope vector up-right = (0.894, -0.447); normal up-left = (-0.447, -0.894). Length 88 -> (-39.3, -78.7) -->
  <line x1="210" y1="148" x2="171" y2="69" stroke="#15803d" stroke-width="2.6" marker-end="url(#f-green)"/>
  <text x="150" y="64" font-size="13" font-weight="800" fill="#15803d">F_N</text>

  <!-- Friction F_f: up the slope (+0.894, -0.447) * 76 = (+68, -34) -->
  <line x1="210" y1="148" x2="278" y2="114" stroke="#d97706" stroke-width="2.6" marker-end="url(#f-amber)"/>
  <text x="284" y="110" font-size="13" font-weight="800" fill="#b45309">F_f</text>

  <!-- Weight mg: straight down (0, +100) -->
  <line x1="210" y1="148" x2="210" y2="246" stroke="#dc2626" stroke-width="2.8" marker-end="url(#f-red)"/>
  <text x="216" y="246" font-size="13" font-weight="800" fill="#dc2626">mg</text>

  <!-- Weight components (dashed): mg cos θ into slope (+0.447, +0.894)*89.4 = (+40, +80) -> (250, 228) -->
  <line x1="210" y1="148" x2="250" y2="228" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#f-blue)"/>
  <!-- mg sin θ down slope (-0.894, +0.447)*44.7 = (-40, +20) from (250,228) to (210,248) and also from CM to (170,168) -->
  <line x1="210" y1="148" x2="170" y2="168" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#f-blue)"/>
  <line x1="250" y1="228" x2="210" y2="248" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="255" y="232" font-size="11.5" font-weight="700" fill="#2563eb">mg cos θ</text>
  <text x="106" y="166" font-size="11.5" font-weight="700" fill="#2563eb">mg sin θ</text>

  <!-- Angle theta between mg and mg cos theta -->
  <path d="M 210 190 A 42 42 0 0 0 228.5 185.5" fill="none" stroke="#1e293b" stroke-width="1.3"/>
  <text x="215" y="203" font-size="11" font-weight="700" fill="#1e293b">θ</text>

  <!-- Equations box -->
  <rect x="385" y="34" width="124" height="132" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>
  <text x="395" y="55" font-size="11.5" font-weight="800" fill="#0f172a">Slope axes:</text>
  <text x="395" y="76" font-size="11" font-weight="700" fill="#15803d">F_N = mg cos θ</text>
  <text x="395" y="98" font-size="11" font-weight="700" fill="#b45309">F_f ≤ μ_s F_N</text>
  <text x="395" y="118" font-size="11" font-weight="700" fill="#b45309">F_f = μ_d F_N</text>
  <text x="395" y="140" font-size="11" font-weight="700" fill="#2563eb">F_net = mg sin θ − F_f</text>
  <text x="395" y="156" font-size="10.5" font-weight="600" fill="#475569">(if sliding down)</text>
</svg>`,
      diagramCaption:
        "Resolving weight parallel and perpendicular to an inclined plane immediately gives F_N = mg cos θ and the downhill driving component mg sin θ. Draw solid arrows for real forces and dashed arrows for components.",
      workedExamples: [
        {
          title: "Block sliding down a rough inclined plane",
          problem:
            "A {{5.0}} kg block slides down a ramp inclined at {{30°}} to the horizontal. The coefficient of dynamic friction is {{μ_d = 0.25}} ({{g = 9.81}} m s⁻²). Calculate the acceleration of the block down the ramp.",
          steps: [
            "Resolve weight along and perpendicular to the ramp: {{mg sin 30° = 5.0 * 9.81 * 0.500 = 24.53}} N down the slope; {{mg cos 30° = 5.0 * 9.81 * 0.8660 = 42.48}} N into the slope.",
            "No acceleration perpendicular to the slope gives {{F_N = mg cos 30° = 42.48}} N.",
            "Dynamic friction acts up the slope opposing motion: {{F_f = μ_d F_N = 0.25 * 42.48 = 10.62}} N.",
            "Apply Newton's 2nd Law parallel to the slope: {{F_net = mg sin 30° - F_f = 24.53 - 10.62 = 13.91}} N.",
            "Hence {{a = F_net / m = 13.91 / 5.0 = 2.78}} m s⁻² down the slope. (Notice mass cancels: {{a = g(sin θ - μ_d cos θ)}}!)",
          ],
          answer: "a = 2.78 m s⁻² down the ramp.",
          yourTurn: {
            question:
              "A 4.0 kg crate is pulled across a rough horizontal floor by a horizontal force of 22.0 N. The coefficient of dynamic friction is 0.30 (g = 9.81 m s⁻²). Calculate the crate's acceleration in m s⁻² to 3 s.f.",
            answer: { type: "number", value: 2.56, tolerance: 0.03, display: "2.56 m s⁻²" },
            solution:
              "On a flat floor with a horizontal pull, F_N = mg = 4.0 × 9.81 = 39.24 N. Dynamic friction F_f = μ_d F_N = 0.30 × 39.24 = 11.77 N. Net force F_net = 22.0 − 11.77 = 10.23 N, so a = 10.23 / 4.0 = 2.56 m s⁻².",
          },
        },
        {
          title: "Connected masses over a smooth pulley",
          problem:
            "A {{3.0}} kg block on a frictionless horizontal table is linked by a light inextensible string over a frictionless pulley to a hanging {{2.0}} kg mass ({{g = 9.81}} m s⁻²). Find (a) the common acceleration and (b) the string tension {{T}}.",
          steps: [
            "(a) Treat both blocks together as one system of total mass {{M = 3.0 + 2.0 = 5.0}} kg. Tension is internal and cancels; the only external driving force along the string direction is the hanging weight {{m_2 g = 2.0 * 9.81 = 19.62}} N.",
            "By Newton's 2nd Law on the combined system: {{a = 19.62 / 5.0 = 3.924}} m s⁻² ≈ 3.92 m s⁻².",
            "(b) Isolate the 3.0 kg block on the smooth table: its only horizontal force is tension {{T}}, so {{T = m_1 a = 3.0 * 3.924 = 11.77}} N ≈ 11.8 N. (Check on hanging mass: {{m_2 g - T = 19.62 - 11.77 = 7.85 = 2.0 * 3.924}} N!)",
          ],
          answer: "a = 3.92 m s⁻²; tension T = 11.8 N.",
        },
      ],
      keyPoints: [
        "Every Newton's 3rd Law pair involves the SAME type of force (e.g. gravity–gravity or normal–normal) acting on TWO DIFFERENT objects.",
        "On a ramp tilted at angle θ, static friction just before slipping satisfies tan θ_max = μ_s (independent of mass and g).",
        "Normal reaction F_N is NOT always equal to mg — it changes on slopes, in accelerating lifts, and whenever a pulling force has a vertical component.",
        "For a small sphere falling at terminal velocity in a viscous fluid, mg = F_b + F_d = ρ_f V g + 6πηrv.",
      ],
      whyItWorks:
        "Why does the angle between vertical weight {{mg}} and the perpendicular to the slope equal the ramp angle {{θ}}? In the right-angled ramp triangle, the ramp rises at {{θ}} above horizontal, so the angle between the vertical and the slope line is {{90° - θ}}. Since the normal line is at {{90°}} to the slope, the angle between vertical {{mg}} and the inward normal is {{90° - (90° - θ) = θ}}. A fast sanity check: let {{θ -> 0°}} (flat ground). Then {{mg sin 0° = 0}} (no downhill pull) and {{mg cos 0° = mg}} (full normal reaction)!",
      strategies: [
        "Always draw a clean FBD before writing ΣF = ma; never include components and the original vector as separate arrows of the same style.",
        "In connected-body problems, use the 'whole system' trick to get acceleration quickly, then isolate one body to solve for internal tension or contact force.",
        "When a problem states 'constant velocity', immediately set ΣF = 0 — that includes steady climbs, descents, and terminal velocity.",
      ],
      thinkDeeper:
        "A physics textbook rests motionless on a horizontal table. Its downward weight {{W}} and the table's upward normal force {{F_N}} are equal and opposite — yet they are **NOT** a Newton's 3rd Law pair. Why? They act on the *same* object (the book) and are *different* force types (gravitational vs electromagnetic contact). What is the actual 3rd-Law partner of the book's weight? It is the book's tiny upward gravitational pull on the entire planet Earth!",
    },

    // =========================================================================
    // SECTION 3: A.2 MOMENTUM, IMPULSE & UNIFORM CIRCULAR MOTION
    // =========================================================================
    {
      id: "momentum-circular",
      heading: "A.2 Momentum, Impulse & Uniform Circular Motion",
      level: "SL",
      discovery: {
        problem:
          "A 0.15 kg cricket ball approaches a bat horizontally at 30 m s⁻¹ and is struck directly back along the same line at 30 m s⁻¹. The impact lasts 0.010 s. A student writes {{Δp = m(v - u) = 0.15(30 - 30) = 0}} and concludes the bat exerted zero force. What critical error did the student make, and what is the actual average force?",
        idea:
          "Momentum is a **vector**! Defining the rebound direction as positive gives {{u = -30}} m s⁻¹ and {{v = +30}} m s⁻¹. Thus {{Δp = 0.15 * (30 - (-30)) = +9.0}} N s, NOT zero! Dividing by {{Δt = 0.010}} s gives an average force of {{F = 9.0 / 0.010 = 900}} N — reversing a velocity doubles the impulse compared with merely stopping the ball.",
      },
      body: `**1. Linear momentum, impulse and Newton's 2nd Law**
- **Linear momentum:** {{p = mv}} (vector, units kg m s⁻¹ ≡ N s).
- **General Newton's 2nd Law:** {{F = Δp/Δt}} — resultant force is the rate of change of momentum. This form works even when mass flows continuously (water jets, rockets, sand falling onto a conveyor belt).
- **Impulse:** {{J = F Δt = Δp}}. When force varies with time, impulse equals the **area under the force–time ({{F}}–{{t}}) graph**. Safety features (airbags, crumple zones, landing mats) do not change {{Δp}} for a given crash, but they increase impact duration {{Δt}}, dramatically lowering the average and peak force {{F = Δp/Δt}}.

**2. Conservation of linear momentum**
In any **isolated (closed) system** where the net external force is zero ({{ΣF_ext = 0}}), total linear momentum is conserved in every direction:
- 1D collision: {{m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2}}
- 2D collision: conserve {{x}}-momentum and {{y}}-momentum independently ({{Σp_x}} constant, {{Σp_y}} constant).
- Explosions / recoils from rest: {{0 = m_1 v_1 + m_2 v_2}}, so fragments fly apart with equal-magnitude, opposite-direction momenta.

**3. Uniform circular motion**
An object moving in a circle of radius {{r}} at constant speed {{v}} continuously changes its velocity **direction**, so it always accelerates toward the centre of the circle.
- **Angular speed:** {{ω = Δθ/Δt = 2pi / T = 2pi f}} (in rad s⁻¹), linked to linear (tangential) speed by {{v = ω r}}.
- **Centripetal acceleration:** {{a = v^2 / r = ω^2 r = (4 pi^2 r)/T^2}}, always directed radially inwards (perpendicular to {{v}}).
- **Centripetal force:** {{F_c = (m v^2)/r = m ω^2 r}}. Crucial IB rule: centripetal force is **not** a new force to add to an FBD — it is the **resultant inward force** supplied by real forces (tension, static friction, gravity, or a component of normal reaction).
- **Vertical circles:** At the **bottom** of a vertical loop, {{T - mg = mv^2/r}} (maximum tension/normal force). At the **top**, {{T + mg = mv^2/r}}, so the minimum speed to stay on a track or keep a string taut (where {{T = 0}} or {{F_N = 0}}) is {{v_min = sqrt(gr)}}.`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram: left panel compares narrow high-force and wide low-force F-t impulse curves with equal shaded area J equals delta p; right panel shows uniform circular motion with tangential velocity v perpendicular to inward centripetal force F_c and acceleration a_c">
  <defs>
    <marker id="mc-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="mc-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="mc-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="520" height="265" fill="#ffffff"/>
  <!-- Divider -->
  <line x1="268" y1="16" x2="268" y2="250" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- LEFT PANEL: F-t Impulse graph -->
  <text x="134" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="#0f172a">Impulse = Area under F–t graph</text>
  <line x1="36" y1="215" x2="252" y2="215" stroke="#334155" stroke-width="2" marker-end="url(#mc-slate)"/>
  <line x1="36" y1="215" x2="36" y2="42" stroke="#334155" stroke-width="2" marker-end="url(#mc-slate)"/>
  <text x="250" y="232" font-size="11.5" font-weight="700" fill="#1e293b">t</text>
  <text x="24" y="48" font-size="11.5" font-weight="700" fill="#1e293b">F</text>

  <!-- Sharp peak (hard impact): small Δt, huge F_max -->
  <path d="M 52 215 Q 82 55 112 215 Z" fill="#fee2e2" fill-opacity="0.7" stroke="#dc2626" stroke-width="2.2"/>
  <text x="88" y="64" font-size="10.5" font-weight="700" fill="#b91c1c">Hard impact</text>
  <text x="88" y="77" font-size="10" font-weight="600" fill="#b91c1c">(small Δt, high F)</text>

  <!-- Broad curve (airbag): large Δt, smaller F_max, same area -->
  <path d="M 52 215 Q 144 132 236 215 Z" fill="#dbeafe" fill-opacity="0.65" stroke="#2563eb" stroke-width="2.2"/>
  <text x="166" y="150" font-size="10.5" font-weight="700" fill="#1d4ed8">Airbag / pad</text>
  <text x="166" y="163" font-size="10" font-weight="600" fill="#1d4ed8">(large Δt, lower F)</text>
  <text x="142" y="242" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">Same area → same J = Δp</text>

  <!-- RIGHT PANEL: Uniform Circular Motion -->
  <text x="394" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="#0f172a">Uniform Circular Motion</text>
  <circle cx="394" cy="142" r="72" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="394" cy="142" r="3.5" fill="#1e293b"/>
  <!-- Radius r -->
  <line x1="394" y1="142" x2="343" y2="193" stroke="#475569" stroke-width="1.6"/>
  <text x="357" y="166" font-size="12" font-weight="700" fill="#334155">r</text>

  <!-- Position 1: Top (394, 70) moving right (clockwise) -->
  <circle cx="394" cy="70" r="6" fill="#2563eb"/>
  <line x1="394" y1="70" x2="454" y2="70" stroke="#2563eb" stroke-width="2.6" marker-end="url(#mc-blue)"/>
  <line x1="394" y1="70" x2="394" y2="118" stroke="#dc2626" stroke-width="2.6" marker-end="url(#mc-red)"/>
  <!-- Right angle mark -->
  <polyline points="394,80 404,80 404,70" fill="none" stroke="#334155" stroke-width="1.2"/>
  <text x="458" y="74" font-size="12" font-weight="800" fill="#2563eb">v</text>
  <text x="401" y="114" font-size="11.5" font-weight="800" fill="#dc2626">F_c, a_c</text>

  <!-- Position 2: Right (466, 142) moving down -->
  <circle cx="466" cy="142" r="6" fill="#2563eb"/>
  <line x1="466" y1="142" x2="466" y2="198" stroke="#2563eb" stroke-width="2.6" marker-end="url(#mc-blue)"/>
  <line x1="466" y1="142" x2="420" y2="142" stroke="#dc2626" stroke-width="2.6" marker-end="url(#mc-red)"/>
  <text x="474" y="198" font-size="12" font-weight="800" fill="#2563eb">v</text>

  <!-- ω arc -->
  <path d="M 332 95 A 78 78 0 0 1 362 69" fill="none" stroke="#15803d" stroke-width="2" marker-end="url(#mc-slate)"/>
  <text x="320" y="78" font-size="12" font-weight="800" fill="#15803d">ω</text>

  <text x="394" y="242" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">v ⊥ F_c  |  a_c = v²/r = ω²r</text>
</svg>`,
      diagramCaption:
        "Left: Equal impulses (equal areas under F–t) can have very different peak forces depending on contact duration Δt. Right: In uniform circular motion, velocity v is tangent to the path while centripetal force F_c and acceleration a_c always point toward the centre.",
      workedExamples: [
        {
          title: "1D inelastic collision & kinetic energy loss",
          problem:
            "A {{2.0}} kg trolley moving right at {{4.5}} m s⁻¹ collides head-on with a {{1.0}} kg trolley moving left at {{1.5}} m s⁻¹ on a frictionless track. They stick together after impact. Calculate (a) their common velocity after collision and (b) the kinetic energy dissipated.",
          steps: [
            "(a) Take right as positive: {{u_1 = +4.5}} m s⁻¹, {{u_2 = -1.5}} m s⁻¹. Total initial momentum {{p_i = (2.0)(4.5) + (1.0)(-1.5) = 9.0 - 1.5 = +7.5}} kg m s⁻¹.",
            "No net external horizontal force acts, so momentum is conserved: {{7.5 = (2.0 + 1.0)v = 3.0v}} → {{v = +2.5}} m s⁻¹ (to the right).",
            "(b) Initial kinetic energy: {{E_ki = (1/2)(2.0)(4.5)^2 + (1/2)(1.0)(1.5)^2 = 20.25 + 1.125 = 21.375}} J.",
            "Final kinetic energy: {{E_kf = (1/2)(3.0)(2.5)^2 = 9.375}} J. Energy dissipated = {{21.375 - 9.375 = 12.0}} J (into thermal energy and sound).",
          ],
          answer: "v = 2.5 m s⁻¹ to the right; 12.0 J of kinetic energy is dissipated.",
          yourTurn: {
            question:
              "A 0.20 kg ball travelling horizontally at 15 m s⁻¹ hits a rigid vertical wall perpendicularly and rebounds straight back at 10 m s⁻¹. Contact lasts 0.025 s. Calculate the magnitude of the average force exerted by the wall on the ball, in newtons.",
            answer: { type: "number", value: 200, tolerance: 0.5, display: "200 N" },
            solution:
              "Take rebound direction as positive: u = −15 m s⁻¹, v = +10 m s⁻¹. Change in momentum Δp = 0.20 × (10 − (−15)) = 5.0 N s. Average force F = Δp/Δt = 5.0 / 0.025 = 200 N.",
          },
        },
        {
          title: "Maximum cornering speed on a flat circular bend",
          problem:
            "A {{1200}} kg car negotiates a flat circular bend of radius {{50.0}} m. The coefficient of static friction between tyres and dry tarmac is {{μ_s = 0.60}} ({{g = 9.81}} m s⁻²). Calculate the maximum speed at which the car can round the bend without skidding.",
          steps: [
            "On a flat road, vertical equilibrium gives {{F_N = mg}}.",
            "Static friction provides the inward centripetal force: {{F_c = (m v^2)/r <= μ_s F_N = μ_s m g}}.",
            "Notice the mass {{m}} cancels on both sides: {{v_max = sqrt(μ_s g r)}}.",
            "Substitute values: {{v_max = sqrt(0.60 * 9.81 * 50.0) = sqrt(294.3) = 17.16}} m s⁻¹ ≈ 17.2 m s⁻¹.",
          ],
          answer: "v_max = 17.2 m s⁻¹ (independent of the car's mass).",
        },
      ],
      keyPoints: [
        "Impulse J = FΔt = Δp is a vector equal to the area under a force–time graph; never forget the sign flip on rebounds!",
        "Linear momentum is conserved in ALL isolated collisions (elastic, inelastic, and explosions) provided net external force is zero.",
        "In uniform circular motion, speed is constant so ΔE_k = 0 and centripetal force does ZERO work because F_c is always perpendicular to velocity v.",
        "At the top of a vertical circle, weight assists tension/normal force toward the centre (F_N + mg = mv²/r); at the bottom, weight opposes it (F_N − mg = mv²/r).",
      ],
      whyItWorks:
        "Why is total momentum always conserved during a collision? By Newton's 3rd Law, at every instant of contact the force A exerts on B equals minus the force B exerts on A ({{F_AB = -F_BA}}). Since both bodies stay in contact for the exact same time interval {{Δt}}, their impulses are equal and opposite: {{Δp_B = F_AB Δt = -F_BA Δt = -Δp_A}}, hence {{Δ(p_A + p_B) = 0}}. Meanwhile, centripetal acceleration {{a = v^2/r}} follows from two similar isosceles triangles: in a tiny angle {{Δθ}}, position sweeps chord {{Δs ≈ r Δθ = v Δt}} while velocity turns by {{Δv ≈ v Δθ}}, so {{a = Δv/Δt = v(v/r) = v^2/r}}.",
      strategies: [
        "Sketch 'Before' and 'After' momentum diagrams with explicit arrows and a clear + direction sign before writing Σp_before = Σp_after.",
        "For any circular-motion problem, draw the FBD first, identify which real force (or component) points toward the centre, and ONLY THEN set that inward resultant equal to mv²/r.",
        "Always check whether angles are in radians when using ω = Δθ/Δt or v = ωr (1 revolution = 2π rad).",
      ],
      thinkDeeper:
        "Students often imagine an outward 'centrifugal force' flinging a ball away when a string breaks. In an inertial frame, no outward force exists: the string was continuously pulling the ball *inward* off a straight line. The instant the string snaps, {{F_net = 0}}, so by Newton's 1st Law the ball flies off along the **tangent** to the circle at its exact instantaneous velocity {{v}}, not radially outward!",
    },

    // =========================================================================
    // SECTION 4: A.3 WORK, MECHANICAL ENERGY, POWER & EFFICIENCY
    // =========================================================================
    {
      id: "work-energy-power",
      heading: "A.3 Work, Mechanical Energy, Power & Efficiency",
      level: "SL",
      discovery: {
        problem:
          "Two identical sleds are released from rest at the top of two frictionless hills of the exact same vertical height {{h = 20}} m. Hill A is a steep straight ramp; Hill B is a much longer, gently curving slide. Which sled has the greater speed at the bottom — and which sled reaches the bottom in less time?",
        idea:
          "Both sleds reach the bottom with the **exact same speed**, {{v = sqrt(2gh) = sqrt(2 * 9.81 * 20) = 19.8}} m s⁻¹, because gravitational potential energy {{mgh}} converts entirely into kinetic energy {{(1/2)mv^2}} regardless of path shape! However, Sled A arrives **first** because its steeper slope gives a larger component of acceleration early on over a shorter distance.",
      },
      body: `**1. Mechanical work and variable forces**
- **Work done** by a constant force {{F}} moving its point of application through displacement {{s}} at angle {{θ}} to the force:
  {{W = F s cos θ}} (scalar, unit joule: 1 J = 1 N m = 1 kg m² s⁻²).
- If {{θ = 90°}}, {{W = 0}} (normal force on a level track and centripetal force do zero work). If {{90° < θ <= 180°}} (such as friction opposing motion), work is **negative**, removing mechanical energy from the body.
- For a **varying force** (e.g. stretching a spring), work done equals the **area under the force–displacement ({{F}}–{{s}}) graph**.

**2. Mechanical energy stores & conservation**
- **Kinetic energy:** {{E_k = (1/2)m v^2 = p^2 / (2m)}}. The {{p^2/(2m)}} form is invaluable when comparing fragments of equal momentum!
- **Gravitational potential energy:** {{ΔE_p = m g Δh}} (near Earth's surface where {{g}} is uniform).
- **Elastic potential energy (Hookean spring):** {{E_H = (1/2)k Δx^2}} (area of the triangle under {{F = k Δx}}).
- **Work–energy theorem:** Net work done on an object equals its change in kinetic energy ({{W_net = ΔE_k}}).
- **Conservation of mechanical energy:** When no resistive/dissipative forces act, total mechanical energy stays constant: {{E_k + E_p + E_H = "constant"}}. When friction or drag acts over distance {{d}}, {{E_initial = E_final + F_f d}}.

**3. Classifying collisions by kinetic energy**
- **Elastic collision:** Both momentum {{p}} AND total kinetic energy {{E_k}} are conserved (idealised atomic/billiard collisions).
- **Inelastic collision:** Momentum {{p}} is conserved, but total {{E_k}} decreases (transferred to thermal energy, sound, or plastic deformation). A **completely inelastic** collision (objects stick together) loses the maximum fraction of {{E_k}} allowed by momentum conservation.
- **Explosion:** Momentum {{p}} is conserved, while total {{E_k}} *increases* at the expense of stored chemical or elastic energy.

**4. Power, efficiency and Sankey diagrams**
- **Power** is the rate of doing work or transferring energy: {{P = ΔW/Δt = ΔE/Δt}} (watt, 1 W = 1 J s⁻¹).
- For a constant force {{F}} driving a body at velocity {{v}} in the same direction: {{P = F v}} (valid instantaneously too).
- **Efficiency:** {{η = E_useful / E_total = P_useful / P_total}} (expressed as a decimal between 0 and 1, or as a percentage; always {{<= 1}}).
- **Sankey diagrams** visualise energy or power flows using arrows whose widths are drawn strictly **proportional** to the energy/power of each branch (useful outputs go straight; wasted energy curves downwards or sideways).`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sankey power-flow diagram showing 1000 W electrical input splitting into 750 W useful mechanical output straight ahead and 250 W wasted thermal and sound energy curving downward for 75 percent efficiency, next to an energy conservation bar chart">
  <rect x="0" y="0" width="520" height="265" fill="#ffffff"/>
  <line x1="334" y1="16" x2="334" y2="250" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- LEFT PANEL: Sankey Diagram (scale: 1000 W = 80 px height) -->
  <text x="167" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="#0f172a">Sankey Diagram (Motor, η = 75%)</text>

  <!-- Input trunk: 1000 W -> y=60 to y=140 (height 80) -->
  <rect x="20" y="60" width="96" height="80" fill="#3b82f6" fill-opacity="0.85"/>
  <text x="68" y="96" font-size="11.5" font-weight="800" text-anchor="middle" fill="#ffffff">Input</text>
  <text x="68" y="113" font-size="11.5" font-weight="800" text-anchor="middle" fill="#ffffff">1000 W</text>

  <!-- Useful straight arrow: 750 W -> y=60 to y=120 (height 60) -->
  <polygon points="116,60 270,60 270,48 318,90 270,132 270,120 116,120" fill="#16a34a" fill-opacity="0.85"/>
  <text x="202" y="87" font-size="11.5" font-weight="800" text-anchor="middle" fill="#ffffff">Useful mechanical</text>
  <text x="202" y="103" font-size="11.5" font-weight="800" text-anchor="middle" fill="#ffffff">750 W (75%)</text>

  <!-- Waste thermal branch: 200 W -> height 16 (y=120 to y=136) curving down to x=224..240 -->
  <path d="M 116 120 C 178 120, 212 146, 212 198 L 204 198 L 220 222 L 236 198 L 228 198 C 228 140, 186 136, 116 136 Z" fill="#f97316" fill-opacity="0.88"/>
  <text x="220" y="238" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">Thermal 200 W</text>

  <!-- Waste sound/friction branch: 50 W -> height 4 (y=136 to y=140) curving down earlier -->
  <path d="M 116 136 C 142 136, 154 156, 154 198 L 148 198 L 156 214 L 164 198 L 158 198 C 158 152, 145 140, 116 140 Z" fill="#eab308" fill-opacity="0.9"/>
  <text x="140" y="228" font-size="10" font-weight="700" text-anchor="middle" fill="#a16207">Sound</text>
  <text x="140" y="240" font-size="10" font-weight="700" text-anchor="middle" fill="#a16207">50 W</text>

  <text x="167" y="258" font-size="10.5" font-weight="600" text-anchor="middle" fill="#475569">Arrow width ∝ power (750 + 200 + 50 = 1000 W)</text>

  <!-- RIGHT PANEL: Mechanical Energy Bars (frictionless drop) -->
  <text x="427" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="#0f172a">Energy Conservation</text>
  <line x1="352" y1="212" x2="506" y2="212" stroke="#334155" stroke-width="1.8"/>

  <!-- Top: 100% Ep -->
  <rect x="364" y="72" width="32" height="140" rx="3" fill="#2563eb"/>
  <text x="380" y="146" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">E_p</text>
  <text x="380" y="228" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e293b">Top</text>

  <!-- Mid: 50% Ep + 50% Ek -->
  <rect x="412" y="72" width="32" height="70" rx="3" fill="#2563eb"/>
  <rect x="412" y="142" width="32" height="70" rx="3" fill="#16a34a"/>
  <text x="428" y="111" font-size="10.5" font-weight="800" text-anchor="middle" fill="#ffffff">E_p</text>
  <text x="428" y="181" font-size="10.5" font-weight="800" text-anchor="middle" fill="#ffffff">E_k</text>
  <text x="428" y="228" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e293b">Mid</text>

  <!-- Bottom: 100% Ek -->
  <rect x="460" y="72" width="32" height="140" rx="3" fill="#16a34a"/>
  <text x="476" y="146" font-size="11" font-weight="800" text-anchor="middle" fill="#ffffff">E_k</text>
  <text x="476" y="228" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e293b">Base</text>

  <line x1="356" y1="72" x2="500" y2="72" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="428" y="62" font-size="10.5" font-weight="700" text-anchor="middle" fill="#475569">Total E = E_p + E_k = const</text>
  <text x="428" y="252" font-size="10.5" font-weight="600" text-anchor="middle" fill="#475569">(no friction)</text>
</svg>`,
      diagramCaption:
        "Left: In a Sankey diagram, total output width matches input width and efficiency η = P_useful / P_total = 750 / 1000 = 75%. Right: Without dissipative forces, E_p + E_k stays constant at every height.",
      workedExamples: [
        {
          title: "Spring launcher and smooth ramp (energy conservation)",
          problem:
            "A horizontal spring of spring constant {{k = 800}} N m⁻¹ is compressed by {{0.25}} m and used to launch a {{0.50}} kg block along a frictionless horizontal track and up a smooth ramp ({{g = 9.81}} m s⁻²). Calculate (a) the block's launch speed and (b) the maximum vertical height reached on the ramp.",
          steps: [
            "(a) Elastic potential energy initially stored: {{E_H = (1/2) k Δx^2 = (1/2)(800)(0.25)^2 = 25.0}} J.",
            "All elastic PE converts to kinetic energy on leaving the spring: {{(1/2) m v^2 = 25.0}} → {{0.25 v^2 = 25.0}} → {{v^2 = 100}} → {{v = 10.0}} m s⁻¹.",
            "(b) At the maximum height {{h}}, all kinetic energy converts to gravitational PE: {{m g h = 25.0}} → {{h = 25.0 / (0.50 * 9.81) = 5.097}} m ≈ 5.10 m.",
          ],
          answer: "Launch speed v = 10.0 m s⁻¹; maximum vertical height h = 5.10 m.",
          yourTurn: {
            question:
              "A 1500 kg car drives up a hill inclined at 5.74° (sin 5.74° = 0.100) at a steady speed of 20.0 m s⁻¹ against a constant resistive drag force of 500 N (g = 9.81 m s⁻²). Calculate the useful driving power of the engine in kilowatts (kW) to 3 s.f.",
            answer: { type: "number", value: 39.4, tolerance: 0.2, display: "39.4 kW" },
            solution:
              "At constant speed, driving force balances both drag and the downhill weight component: F_drive = 500 + mg sin 5.74° = 500 + 1500 × 9.81 × 0.100 = 1971.5 N. Useful power P = F_drive v = 1971.5 × 20.0 = 39 430 W = 39.4 kW.",
          },
        },
        {
          title: "Power and efficiency of an electric hoist",
          problem:
            "An electric hoist of efficiency {{75%}} raises a {{400}} kg steel beam vertically through {{12.0}} m at constant speed in {{16.0}} s ({{g = 9.81}} m s⁻²). Determine (a) the useful output power and (b) the electrical input power.",
          steps: [
            "(a) Useful work done equals gain in gravitational PE: {{ΔE_p = m g Δh = 400 * 9.81 * 12.0 = 47 088}} J.",
            "Useful output power: {{P_out = ΔE_p / Δt = 47 088 / 16.0 = 2943}} W ≈ 2.94 kW.",
            "(b) Efficiency {{η = P_out / P_in}}, so {{P_in = P_out / 0.75 = 2943 / 0.75 = 3924}} W ≈ 3.92 kW.",
          ],
          answer: "P_out = 2.94 kW; electrical input power P_in = 3.92 kW.",
        },
      ],
      keyPoints: [
        "Work W = Fs cos θ depends ONLY on the force component parallel to displacement; perpendicular forces do zero work.",
        "Use E_k = p²/(2m) whenever two objects share equal momentum (such as recoil fragments): the lighter object carries strictly MORE kinetic energy.",
        "For vehicles moving at constant speed up a slope, P = F_drive v where F_drive = F_drag + mg sin θ.",
        "Energy conservation is path-independent for gravity and springs — use it whenever a problem asks for speed vs height without asking for time.",
      ],
      whyItWorks:
        "Where does {{E_k = (1/2)mv^2}} come from? Start with constant net force {{F = ma}} acting over displacement {{s}} so {{W_net = F s = m a s}}. From SUVAT, {{v^2 - u^2 = 2 a s}}, meaning {{a s = (v^2 - u^2)/2}}. Substitute directly: {{W_net = (1/2)m v^2 - (1/2)m u^2 = ΔE_k}}. Similarly, stretching a Hookean spring from 0 to {{Δx}} increases force linearly from 0 to {{k Δx}}, so average force is {{(1/2)k Δx}} and work stored is {{E_H = ((1/2)k Δx) * Δx = (1/2)k Δx^2}}.",
      strategies: [
        "Before reaching for SUVAT or forces on a curved track (roller coaster, pendulum), ask: 'Does this link speed and height without time?' If yes, energy conservation solves it in two lines!",
        "When friction acts over distance d along a ramp of vertical drop h, write mgh = ½mv² + F_f d (be sure NOT to mix up vertical h and slope length d!).",
        "Check efficiency answers: P_in must always be LARGER than P_out (if your calculated efficiency exceeds 100%, you inverted the ratio).",
      ],
      thinkDeeper:
        "When a rifle fires a bullet from rest, total momentum stays zero, so {{p_bullet = -p_rifle}} (equal magnitudes!). Yet the bullet flies off with devastating kinetic energy while the rifle gives only a manageable recoil. Why? Rewrite kinetic energy as {{E_k = p^2 / (2m)}}. Because {{p^2}} is identical for both, kinetic energy is **inversely proportional to mass**: a rifle 500 times heavier than the bullet receives only {{1/500}} as much kinetic energy!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "State the four uniform-acceleration (SUVAT) equations and the single condition required to use them.",
        back: "v = u + at, s = ut + ½at², v² = u² + 2as, s = ((u + v)/2)t. Condition: acceleration a must be **constant** (uniform) along the line of motion.",
        level: "SL",
      },
      {
        front: "What do the gradient and area of a velocity–time (v–t) graph represent?",
        back: "Gradient = instantaneous acceleration a. Signed area between the curve and time axis = displacement Δs (sum of unsigned areas = total distance).",
        level: "SL",
      },
      {
        front: "At the highest point of an oblique projectile's path (no drag), what are its velocity and acceleration?",
        back: "Vertical velocity v_y = 0, so velocity is purely horizontal with magnitude v = u cos θ. Acceleration is still g = 9.81 m s⁻² vertically downwards (NOT zero!).",
        level: "SL",
      },
      {
        front: "How does air resistance alter a projectile's trajectory compared with vacuum?",
        back: "Lower maximum height, shorter horizontal range, and an asymmetric path whose descent is steeper than its ascent.",
        level: "SL",
      },
      {
        front: "State Newton's 3rd Law and list the three criteria for a true action–reaction pair.",
        back: "If body A exerts a force on body B, B exerts an equal-magnitude, opposite-direction force on A. Criteria: (1) equal magnitude & opposite direction, (2) SAME type of force, (3) act on TWO DIFFERENT bodies.",
        level: "SL",
      },
      {
        front: "Contrast static friction and dynamic friction quantitatively.",
        back: "Static friction opposes impending sliding and adjusts up to a ceiling: F_f ≤ μ_s F_N. Dynamic friction opposes active sliding with constant magnitude F_f = μ_d F_N, where typically μ_d < μ_s.",
        level: "SL",
      },
      {
        front: "State the expressions for buoyancy (upthrust) and Stokes' viscous drag force.",
        back: "Buoyancy F_b = ρVg (ρ = fluid density, V = displaced fluid volume). Stokes' law F_d = 6πηrv (small sphere, radius r, speed v, laminar flow in fluid of viscosity η).",
        level: "SL",
      },
      {
        front: "What are the components of weight mg parallel and perpendicular to an incline at angle θ?",
        back: "Parallel (down the slope): mg sin θ. Perpendicular (into the slope): mg cos θ.",
        level: "SL",
      },
      {
        front: "State Newton's 2nd Law in momentum form and define impulse.",
        back: "F = Δp/Δt (resultant force equals rate of change of momentum). Impulse J = FΔt = Δp, equal to the area under a force–time (F–t) graph.",
        level: "SL",
      },
      {
        front: "Under what condition is total linear momentum conserved?",
        back: "Total linear momentum of a system is conserved whenever the net external force acting on the system is zero (an isolated system).",
        level: "SL",
      },
      {
        front: "Relate angular speed ω, period T, frequency f, linear speed v, and centripetal acceleration a_c.",
        back: "ω = 2π/T = 2πf; v = ωr; a_c = v²/r = ω²r = 4π²r/T², always directed toward the centre of the circle.",
        level: "SL",
      },
      {
        front: "Why does a centripetal force do zero work on an object in uniform circular motion?",
        back: "Because W = Fs cos θ and centripetal force is always perpendicular (θ = 90°, cos 90° = 0) to the instantaneous velocity/displacement, so kinetic energy remains constant.",
        level: "SL",
      },
      {
        front: "How is kinetic energy expressed in terms of linear momentum p and mass m?",
        back: "E_k = p²/(2m) (from p = mv and E_k = ½mv²). For equal momenta, the smaller mass has larger kinetic energy.",
        level: "SL",
      },
      {
        front: "Distinguish elastic collisions, inelastic collisions, and explosions.",
        back: "All three conserve momentum (if isolated). Elastic: total E_k conserved. Inelastic: total E_k decreases (to heat/sound/deformation). Explosion: total E_k increases (from stored energy).",
        level: "SL",
      },
      {
        front: "State the equations for mechanical power and efficiency.",
        back: "P = ΔW/Δt = ΔE/Δt = Fv. Efficiency η = E_useful / E_total = P_useful / P_total (≤ 1 or ≤ 100%).",
        level: "SL",
      },
      {
        front: "What is the minimum speed needed at the top of a vertical circular loop of radius r to stay in contact?",
        back: "At the top, F_N + mg = mv²/r. Losing contact means F_N = 0, so mg = mv_min²/r ⇒ v_min = √(gr).",
        level: "SL",
      },
    ],
    mustKnow: [
      "Acceleration is the gradient of a v–t graph; displacement is the signed area under a v–t graph.",
      "Projectile motion splits into constant horizontal velocity (a_x = 0) and free-fall vertical acceleration (a_y = −9.81 m s⁻²) sharing the same time t.",
      "Always draw ONLY real external forces acting ON the object in a free-body diagram — never include 'ma' or 'centripetal force' as an extra force.",
      "Static friction is self-adjusting (F_f ≤ μ_s F_N); only use F_f = μ_s F_N at the exact threshold of slipping.",
      "Momentum and impulse are vectors: a rebound reverses velocity sign, so |Δp| = m(v_after + v_before), NOT the difference of speeds.",
      "Area under an F–t graph equals impulse (Δp); area under an F–s graph equals mechanical work done (W).",
      "In circular motion, centripetal acceleration a_c = v²/r = ω²r points radially inwards and is supplied by the net inward component of real forces.",
      "Total mechanical energy E_k + E_p + E_H is conserved whenever no dissipative forces (friction, air drag) do work.",
      "Kinetic energy E_k = ½mv² = p²/(2m): two fragments with equal and opposite momentum split kinetic energy inversely with their masses.",
      "For steady motion against resistive force F_r (plus mg sin θ on a hill), engine power is P = F_drive v and electrical/fuel input is P_in = P_out / η.",
    ],
    misconceptions: [
      {
        wrong: "At the highest point of a projectile's trajectory, both velocity and acceleration are zero.",
        right: "Only the VERTICAL velocity component v_y is zero at the peak. Horizontal velocity is still u cos θ, and downward acceleration is STILL g = 9.81 m s⁻² (if acceleration were zero, it would hover forever!).",
        level: "SL",
      },
      {
        wrong: "Weight and normal reaction on a book resting on a table are a Newton's 3rd Law action–reaction pair.",
        right: "They are NOT a 3rd-Law pair because both act on the SAME object (the book) and are different force types. They happen to be equal and opposite only because the book is in equilibrium (Newton's 1st/2nd Law).",
        level: "SL",
      },
      {
        wrong: "Static friction always equals μ_s F_N whenever an object is stationary on a rough surface.",
        right: "μ_s F_N is the MAXIMUM possible static friction. If the pushing or downhill force is smaller than μ_s F_N, static friction exactly matches that smaller force so ΣF = 0.",
        level: "SL",
      },
      {
        wrong: "Heavier objects fall faster and need a greater minimum speed to stay on a vertical loop-the-loop.",
        right: "Mass m cancels out of both free fall (mg = ma ⇒ a = g) and loop contact (mg = mv²/r ⇒ v_min = √(gr)), as well as frictionless slides (mgh = ½mv²) and flat-curve skidding (μ_s mg = mv²/r)!",
        level: "SL",
      },
      {
        wrong: "Centripetal force is an extra force pushing objects outward ('centrifugal force') or added alongside tension on an FBD.",
        right: "Centripetal force is simply the NAME for the net inward resultant of existing real forces (tension, friction, gravity, normal force). Never draw it as an extra arrow on an FBD.",
        level: "SL",
      },
      {
        wrong: "Airbags reduce the total impulse Δp experienced by a passenger during a collision.",
        right: "For a given initial speed coming to rest, Δp = −mu is IDENTICAL with or without an airbag. The airbag increases collision time Δt, which reduces the average force F = Δp/Δt.",
        level: "SL",
      },
      {
        wrong: "In an inelastic collision, linear momentum is lost along with kinetic energy.",
        right: "Provided no net external force acts, linear momentum is ALWAYS strictly conserved in every collision — only mechanical kinetic energy is transformed into thermal/sound energy.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting the negative sign on rebound velocity when calculating impulse Δp = m(v − u) or momentum conservation in head-on collisions.",
      "Using SUVAT equations during non-uniform acceleration (e.g. a skydiver approaching terminal velocity or a mass oscillating on a spring).",
      "Swapping sin θ and cos θ on inclined planes — always check θ → 0° (downhill pull mg sin θ must vanish!).",
      "Assuming F_N = mg when a rope pulls diagonally upwards/downwards or on a banked/inclined surface.",
      "Writing 'centripetal force' as a force label on an IB Paper 2 free-body diagram (examiners explicitly penalise this!).",
      "Using slope length d instead of vertical height h = d sin θ in ΔE_p = mgΔh, or using vertical height h instead of slope distance d in friction work W_f = F_f d.",
      "Leaving angles in degrees instead of radians when applying ω = Δθ/Δt, or forgetting to convert rpm to rev s⁻¹ (divide by 60) before computing ω = 2πf.",
      "Using g = 10 m s⁻² when the IB exam paper requires g = 9.81 m s⁻² from the Data Booklet (only use g = 9.8 or 10 if explicitly instructed).",
    ],
    mnemonics: [
      {
        topic: "Choosing a SUVAT equation",
        device: "Spot the Missing Letter (No s / No v / No t / No a)",
        explanation:
          "Each of the 4 SUVAT equations omits exactly one variable: v = u + at (no s), s = ut + ½at² (no v), v² = u² + 2as (no t), s = ((u+v)/2)t (no a). Identify the single variable neither given nor asked for, and the unique equation picks itself.",
        level: "SL",
      },
      {
        topic: "Inclined-plane weight components",
        device: "SIN Slides down the Slope; COS Clings to the Contact",
        explanation:
          "mg sin θ pulls the block sliding parallel down the slope, while mg cos θ presses into the contact surface (giving F_N = mg cos θ).",
        level: "SL",
      },
      {
        topic: "Free-Body Diagram sanity check",
        device: "REAL ONLY — No Velocity, No ma, No 'Centripetal' Arrow",
        explanation:
          "Before leaving any IB FBD question, check that every arrow is a real physical interaction (Weight, Normal, Tension, Friction, Drag, Upthrust) acting ON that single body.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Formula 1 Singapore Grand Prix cornering",
        detail:
          "At Marina Bay Street Circuit, F1 cars generate huge aerodynamic downforce that dramatically boosts normal reaction F_N without adding mass m. Because maximum tyre friction F_f = μ_s F_N supplies centripetal force mv²/r, cars can corner at over 4g lateral acceleration!",
        emoji: "🏎️",
      },
      {
        title: "Automotive crumple zones and airbags",
        detail:
          "During a 60 km h⁻¹ frontal impact, a passenger's momentum change Δp is fixed by mass and speed. Crumple zones and airbags stretch the stopping time Δt from ~15 ms to ~100 ms, slashing average deceleration force F = Δp/Δt by more than a factor of six.",
        emoji: "🚗",
      },
      {
        title: "Singapore MRT regenerative braking",
        detail:
          "When an MRT train decelerates into a station, traction motors run as generators, converting kinetic energy E_k = ½mv² back into electrical energy fed to the power rail rather than wasting 100% as brake-pad heat — dramatically lifting system efficiency η.",
        emoji: "🚆",
      },
      {
        title: "Badminton smash impulse and drag",
        detail:
          "A shuttlecock can leave a racket at over 110 m s⁻¹ after a millisecond-scale impulse, yet air drag quickly dominates because its feathered skirt has huge drag-to-weight ratio, producing a sharply asymmetric trajectory that plunges almost vertically onto the court.",
        emoji: "🏸",
      },
      {
        title: "Roller-coaster teardrop loops",
        detail:
          "Modern coaster loops use a tighter radius r at the top than at the bottom: at the top, slower speed still exceeds v_min = √(gr), while a larger radius at the fast bottom keeps rider normal force F_N = mg + mv²/r comfortable and safe.",
        emoji: "🎢",
      },
    ],
    videos: [
      {
        title: "IB Physics A.1 Kinematics & Projectile Motion",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=Andy+Masley+IB+Physics+kinematics+projectile+motion",
      },
      {
        title: "IB Physics A.2 Forces, Free-Body Diagrams & Friction",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=Chris+Doner+IB+Physics+Newton+laws+friction+inclined+plane",
      },
      {
        title: "IB Physics A.2 Momentum, Impulse & Circular Motion",
        channel: "OSC IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+momentum+impulse+uniform+circular+motion",
      },
      {
        title: "IB Physics A.3 Work, Energy, Power & Efficiency",
        channel: "Sirius Revision / IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+A.3+work+energy+power+efficiency+Sankey",
      },
    ],
    formulas: [
      {
        name: "SUVAT (velocity–time)",
        formula: "{{v = u + at}}",
        note: "Constant acceleration only; no s.",
        level: "SL",
      },
      {
        name: "SUVAT (displacement–time)",
        formula: "{{s = ut + (1/2)at^2}}",
        note: "Constant acceleration only; no v.",
        level: "SL",
      },
      {
        name: "SUVAT (velocity–displacement)",
        formula: "{{v^2 = u^2 + 2as}}",
        note: "Constant acceleration only; no t.",
        level: "SL",
      },
      {
        name: "SUVAT (average velocity)",
        formula: "{{s = ((u + v)/2)t}}",
        note: "Constant acceleration only; no a.",
        level: "SL",
      },
      {
        name: "Static & dynamic friction",
        formula: "{{F_f <= μ_s F_N}}  and  {{F_f = μ_d F_N}}",
        note: "F_N is normal reaction; μ_d < μ_s typically.",
        level: "SL",
      },
      {
        name: "Hooke's law, buoyancy & Stokes' drag",
        formula: "{{F_H = -kx}},  {{F_b = ρ V g}},  {{F_d = 6 pi η r v}}",
        note: "IB FA2025 A.2 Data Booklet forces.",
        level: "SL",
      },
      {
        name: "Linear momentum & Newton's 2nd Law",
        formula: "{{p = mv}},  {{F = Δp/Δt = ma}}",
        note: "Vector quantities; F = ma holds for constant mass.",
        level: "SL",
      },
      {
        name: "Impulse",
        formula: "{{J = F Δt = Δp}}",
        note: "Equals area under the F–t graph.",
        level: "SL",
      },
      {
        name: "Uniform circular motion",
        formula: "{{v = ω r}},  {{a = v^2/r = ω^2 r = (4 pi^2 r)/T^2}}",
        note: "Resultant inward centripetal force F_c = mv²/r.",
        level: "SL",
      },
      {
        name: "Mechanical work done",
        formula: "{{W = F s cos θ}}",
        note: "Scalar (J); equals area under F–s graph for varying force.",
        level: "SL",
      },
      {
        name: "Kinetic energy",
        formula: "{{E_k = (1/2)m v^2 = p^2 / (2m)}}",
        note: "Both forms are in the IB FA2025 Data Booklet.",
        level: "SL",
      },
      {
        name: "Gravitational & elastic potential energy",
        formula: "{{ΔE_p = m g Δh}},  {{E_H = (1/2)k Δx^2}}",
        note: "Uniform g near surface; Hookean spring extension Δx.",
        level: "SL",
      },
      {
        name: "Mechanical power & efficiency",
        formula: "{{P = ΔW/Δt = F v}},  {{η = E_useful / E_total = P_useful / P_total}}",
        note: "1 W = 1 J s⁻¹; η ≤ 1 (or ≤ 100%).",
        level: "SL",
      },
    ],
  },
};
