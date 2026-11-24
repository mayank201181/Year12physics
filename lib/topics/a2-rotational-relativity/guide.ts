import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "a2-rotational-relativity",
  title: "A.4–A.5 Rigid Body Mechanics & Special Relativity",
  strand: "Theme A: Space, Time & Motion",
  icon: "🌀",
  level: "HL",
  summary:
    "Extend Newtonian mechanics to spinning, rolling rigid bodies (torque, moment of inertia, angular momentum) and rebuild space and time from Einstein's postulates (Lorentz transformations, time dilation, length contraction, and Minkowski spacetime diagrams).",
  intro:
    "In SL mechanics every object is treated as a point particle moving far slower than light. This HL-only unit breaks **both** simplifications. First, in **A.4 Rigid Body Mechanics**, extended objects can rotate as well as translate: where mass sits relative to the pivot matters just as much as how much mass there is. Second, in **A.5 Galilean and Special Relativity**, approaching the speed of light {{c}} shatters absolute time and absolute space—forcing clocks to slow down, rulers to contract, and simultaneous events to split apart in Minkowski spacetime.",
  guide: [
    // =========================================================================
    // SECTION 1: Torque, Rotational Equilibrium & Rotational SUVAT
    // =========================================================================
    {
      id: "torque-rotational-kinematics",
      heading: "A.4 Torque, Rotational Equilibrium & Rotational SUVAT",
      level: "HL",
      discovery: {
        problem:
          "Try pushing a heavy classroom door open with one finger at three places: right next to the hinges, in the middle of the door, and at the outer handle—first pushing perpendicular to the door, then pushing almost parallel to the door towards the hinges. Why does the **exact same force** produce completely different turning effects?",
        idea:
          "Rotation is driven not by force alone, but by **torque** {{τ = F r sin θ}}: only the component of force perpendicular to the lever arm ({{F sin θ}}) creates a turning effect, and multiplying by the distance {{r}} from the pivot magnifies that leverage.",
      },
      body: `When a rigid body rotates about a fixed axis, every particle in the body sweeps through the same **angular displacement** {{θ}} (in **radians**, where {{2π rad = 360°}}) in the same time, even though outer particles travel faster linearly.

### Linear–Angular Dictionary (Always in Radians!)

| Translational quantity | Rotational analogue | Exact link (with {{θ}} in rad) | SI unit |
|---|---|---|---|
| Displacement {{s}} | Angular displacement {{θ}} | {{s = rθ}} | rad |
| Velocity {{v}} | Angular velocity {{ω = Δθ/Δt}} | {{v = rω}} | rad s⁻¹ |
| Tangential acceleration {{a}} | Angular acceleration {{α = Δω/Δt}} | {{a = rα}} | rad s⁻² |
| Frequency {{f}}, period {{T}} | Angular speed {{ω}} | {{ω = 2πf = 2π/T}} | rad s⁻¹ |

Note that a particle on a spinning disc with non-zero {{α}} experiences **two** perpendicular linear accelerations simultaneously: tangential acceleration {{a_t = rα}} (changing speed) and centripetal acceleration {{a_c = v^2/r = ω^2 r}} (changing direction).

### Rotational SUVAT Equations (Constant {{α}} Only)

Because {{α = dω/dt}} and {{ω = dθ/dt}} have the exact same calculus structure as linear {{a}} and {{v}}, every constant-acceleration SUVAT formula translates directly:

- {{ω_f = ω_i + αt}}
- {{Δθ = ω_i t + (1/2)αt^2}}
- {{Δθ = (1/2)(ω_i + ω_f)t}}
- {{ω_f^2 = ω_i^2 + 2αΔθ}}

### Torque and Couples

The **torque** (moment of a force) about a chosen pivot measures its turning effectiveness:

{{τ = F r sin θ}}

where {{r}} is the distance from the pivot to the point of application of the force and {{θ}} is the angle between the position vector **r** and the force vector **F**. Equivalently, {{τ = F d_⊥}}, where {{d_⊥ = r sin θ}} is the **perpendicular lever arm** from the pivot to the line of action of the force. Its SI unit is **N m** (never write joules for torque, even though dimensions match—work is a dot product {{F · s}}, whereas torque is a cross-product turning effect!).

A **couple** consists of two forces that are **equal in magnitude**, **opposite in direction**, and act along **different parallel lines** separated by perpendicular distance {{d}}. A couple produces **zero net force** ({{ΣF = 0}}) so it causes pure rotation with torque:

{{τ_(couple) = F d}}

Crucially, the torque of a couple is **independent of the pivot position**!

### Complete Static Equilibrium

For an extended rigid body to remain completely at rest (or move with constant linear and angular velocity), **both** equilibrium conditions must hold simultaneously:

1. **Translational equilibrium:** {{ΣF_x = 0}} and {{ΣF_y = 0}}
2. **Rotational equilibrium:** {{Στ = 0}} about **any** chosen axis (taking anticlockwise as positive and clockwise as negative, or balancing clockwise and anticlockwise torques).`,
      diagram: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing single lever-arm torque τ = Fr sin θ about a pivot and a pure couple τ = Fd">
  <rect x="0" y="0" width="520" height="230" fill="#ffffff" rx="10"/>
  <!-- Left panel: Lever arm torque -->
  <rect x="10" y="10" width="275" height="210" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="148" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">1. Torque about Pivot P: τ = Fr sin θ</text>
  <!-- Beam -->
  <rect x="44" y="146" width="175" height="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8" rx="3"/>
  <!-- Pivot triangle -->
  <polygon points="44,158 34,178 54,178" fill="#64748b"/>
  <circle cx="44" cy="152" r="4.5" fill="#1e293b"/>
  <text x="44" y="194" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">Pivot P</text>
  <!-- Position vector r -->
  <line x1="48" y1="168" x2="205" y2="168" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="128" y="182" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">r (lever distance)</text>
  <!-- Line of action extended -->
  <line x1="125" y1="208" x2="255" y2="56" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>
  <!-- Perpendicular lever arm d_perp -->
  <line x1="44" y1="152" x2="145" y2="184" stroke="#059669" stroke-width="2"/>
  <text x="90" y="198" font-size="10.5" font-weight="700" fill="#059669">d⊥ = r sin θ</text>
  <!-- Force vector F -->
  <line x1="205" y1="146" x2="250" y2="62" stroke="#dc2626" stroke-width="3"/>
  <polygon points="250,62 241,70 250,74" fill="#dc2626"/>
  <text x="256" y="70" font-size="12" font-weight="800" fill="#dc2626">F</text>
  <!-- F sin theta component -->
  <line x1="205" y1="146" x2="205" y2="62" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="205,62 200,72 210,72" fill="#7c3aed"/>
  <text x="198" y="75" font-size="10.5" font-weight="700" text-anchor="end" fill="#7c3aed">F sin θ</text>
  <!-- Horizontal reference and angle arc -->
  <line x1="205" y1="146" x2="262" y2="146" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
  <path d="M 232 146 A 27 27 0 0 0 218 122" fill="none" stroke="#d97706" stroke-width="2"/>
  <text x="236" y="135" font-size="11" font-weight="700" fill="#d97706">θ</text>
  <!-- Right panel: Couple -->
  <rect x="295" y="10" width="215" height="210" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="402" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">2. Pure Couple: τ = Fd</text>
  <!-- Steering wheel / disc -->
  <circle cx="402" cy="122" r="56" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="402" cy="122" r="4" fill="#1e293b"/>
  <!-- Diameter d -->
  <line x1="346" y1="122" x2="458" y2="122" stroke="#059669" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="402" y="114" font-size="11" font-weight="700" text-anchor="middle" fill="#059669">d</text>
  <!-- Left downward force -->
  <line x1="346" y1="122" x2="346" y2="188" stroke="#dc2626" stroke-width="3"/>
  <polygon points="346,188 341,177 351,177" fill="#dc2626"/>
  <text x="334" y="176" font-size="12" font-weight="800" text-anchor="end" fill="#dc2626">F</text>
  <!-- Right upward force -->
  <line x1="458" y1="122" x2="458" y2="56" stroke="#dc2626" stroke-width="3"/>
  <polygon points="458,56 453,67 463,67" fill="#dc2626"/>
  <text x="470" y="70" font-size="12" font-weight="800" fill="#dc2626">F</text>
  <!-- Rotation curved arrow -->
  <path d="M 380 86 A 42 42 0 0 1 426 86" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="380,86 389,80 390,90" fill="#7c3aed"/>
  <text x="402" y="205" font-size="10.5" font-weight="600" text-anchor="middle" fill="#475569">ΣF = 0, τ = Fd (any pivot)</text>
</svg>`,
      diagramCaption:
        "Left: Only the perpendicular component F sin θ (equivalently F times perpendicular lever arm d⊥) produces torque about pivot P. Right: Two equal, opposite, parallel forces separated by d form a couple with ΣF = 0 and pivot-independent torque τ = Fd.",
      workedExamples: [
        {
          title: "Static Equilibrium of a Hinged Beam",
          problem:
            "A uniform horizontal beam of mass {{12.0 kg}} and length {{4.00 m}} is hinged to a vertical wall at its left end P. A light cable attached to its right end makes an angle of {{30.0°}} above the beam and holds it in horizontal equilibrium. Taking {{g = 9.81 m s^(-2)}}, calculate the tension {{T}} in the cable.",
          steps: [
            "Choose the hinge P as the pivot so the unknown reaction forces at the hinge exert **zero torque** ({{r = 0}}).",
            "Weight acts downward at the centre of mass ({{r_W = 2.00 m}}): {{W = mg = 12.0 * 9.81 = 117.72 N}}. Clockwise torque: {{τ_W = 117.72 * 2.00 = 235.44 N m}}.",
            "Tension {{T}} acts at {{r_T = 4.00 m}} at {{θ = 30.0°}} to the beam. Anticlockwise torque: {{τ_T = T * 4.00 * sin(30.0°) = 2.00 T}}.",
            "Apply rotational equilibrium {{Στ_P = 0}}: {{2.00 T = 235.44}} ⇒ {{T = 117.72 N ≈ 118 N}} (3 s.f.).",
          ],
          answer: "{{T = 118 N}} (3 s.f.)",
          yourTurn: {
            question:
              "A mechanic pulls on a spanner of length {{0.35 m}} with a force of {{40 N}} at an angle of {{30°}} to the handle. Calculate the magnitude of the torque about the nut, in N m.",
            answer: { type: "number", value: 7, display: "7 N m" },
            solution:
              "{{τ = F r sin θ = 40 * 0.35 * sin(30°) = 40 * 0.35 * 0.5 = 7 N m}}.",
          },
        },
        {
          title: "Rotational SUVAT on a Flywheel",
          problem:
            "A flywheel accelerates uniformly from rest to {{600 rev min^(-1)}} in {{8.0 s}}. Calculate (a) its angular acceleration {{α}} in rad s⁻², and (b) the total number of revolutions completed during these {{8.0 s}}.",
          steps: [
            "Convert final angular velocity to rad s⁻¹: {{ω_f = (600 * 2π) / 60 = 20π ≈ 62.83 rad s^(-1)}}.",
            "Use {{ω_f = ω_i + αt}} with {{ω_i = 0}}: {{α = 20π / 8.0 = 2.5π ≈ 7.85 rad s^(-2)}}.",
            "Find angular displacement: {{Δθ = (1/2)(ω_i + ω_f)t = (1/2)(0 + 20π)(8.0) = 80π rad}}.",
            "Convert radians to revolutions: {{N = Δθ / (2π) = 80π / (2π) = 40 revolutions}}.",
          ],
          answer: "(a) {{α = 7.85 rad s^(-2)}}; (b) {{40 revolutions}}",
          yourTurn: {
            question:
              "A grinding wheel spinning at {{24 rad s^(-1)}} slows uniformly with angular acceleration {{-3.0 rad s^(-2)}} until it stops. Calculate its angular displacement in radians.",
            answer: { type: "number", value: 96, display: "96 rad" },
            solution:
              "Using {{ω_f^2 = ω_i^2 + 2αΔθ}}: {{0 = 24^2 + 2(-3.0)Δθ}} ⇒ {{6Δθ = 576}} ⇒ {{Δθ = 96 rad}}.",
          },
        },
      ],
      keyPoints: [
        "Always convert rpm, degrees, or revolutions into **radians** ({{1 rev = 2π rad}}) before using {{s = rθ}}, {{v = rω}}, {{a = rα}}, or rotational SUVAT.",
        "Torque {{τ = Fr sin θ}} depends on force magnitude, distance from pivot, AND the sine of the angle between **r** and **F**.",
        "A couple consists of two equal, opposite, parallel forces separated by {{d}}; it produces zero net force and torque {{τ = Fd}} about **any** pivot.",
        "Complete static equilibrium requires BOTH {{ΣF = 0}} (horizontal and vertical) AND {{Στ = 0}} about any chosen axis.",
        "Choosing the pivot at a point where unknown reaction forces act eliminates those unknowns from the torque equation immediately.",
      ],
      whyItWorks:
        "Why is a couple's torque independent of pivot? Place a pivot anywhere at perpendicular distance {{x}} from one force (and {{x + d}} from the other, on the same side). One force produces clockwise torque {{F(x + d)}} while the opposite force produces anticlockwise torque {{Fx}}. Their net torque is {{F(x + d) - Fx = Fd}}—the pivot coordinate {{x}} cancels identically!",
      strategies: [
        "In equilibrium problems, draw a full free-body diagram showing **exact points of application**—never collapse an extended rigid body to a dot!",
        "Pick your pivot through the hinge or support with the most unknown force components so their lever arms equal zero.",
        "Check your units: if angular speed is given in rpm, divide by 60 and multiply by {{2π}} in line 1.",
        "Remember the hinge/wall force on a beam is usually NOT purely vertical or purely horizontal—find its components from {{ΣF_x = 0}} and {{ΣF_y = 0}} after finding tension from {{Στ = 0}}.",
      ],
      thinkDeeper:
        "A ladder leans against a frictionless vertical wall on a rough horizontal floor. Why can it NEVER stay in static equilibrium if the floor were also frictionless—even if the wall were rough?",
    },

    // =========================================================================
    // SECTION 2: Moment of Inertia, Angular Momentum & Rolling Energy
    // =========================================================================
    {
      id: "moment-inertia-angular-momentum",
      heading: "A.4 Moment of Inertia, Angular Momentum & Rolling Energy",
      level: "HL",
      discovery: {
        problem:
          "Take two cylinders of the **exact same mass** and **exact same outer radius**: one is a solid brass rod and the other is a thin hollow pipe. Release them together from rest at the top of a ramp so both roll without slipping. Which reaches the bottom first—and does their mass or radius change the winner?",
        idea:
          "The **solid cylinder always wins**! Because the hollow pipe stores all its mass at the rim ({{I = mR^2}} vs {{I = (1/2)mR^2}}), a larger fraction of its gravitational potential energy gets locked into rotational kinetic energy ({{(1/2)Iω^2}}), leaving less for forward translational speed.",
      },
      body: `In linear motion, mass {{m}} measures resistance to linear acceleration. In rotation, **moment of inertia** {{I}} measures resistance to angular acceleration about a specific axis:

{{I = Σ m_i r_i^2}}

where {{r_i}} is the perpendicular distance of mass element {{m_i}} from the **axis of rotation**. Because {{r_i}} is **squared**, moving mass twice as far from the axis quadruples its contribution to {{I}}!

### Common Rigid-Body Moments of Inertia (About Symmetry Axis)

| Rigid body (mass {{m}}, radius {{R}} or length {{L}}) | Moment of inertia {{I}} | Shape factor {{c = I/(mR^2)}} |
|---|---|---|
| Point mass / thin hoop (ring) about centre | {{I = mR^2}} | {{1}} |
| Solid cylinder / uniform disc about centre | {{I = (1/2)mR^2}} | {{1/2 = 0.50}} |
| Solid sphere about diameter | {{I = (2/5)mR^2}} | {{2/5 = 0.40}} |
| Thin hollow spherical shell about diameter | {{I = (2/3)mR^2}} | {{2/3 ≈ 0.67}} |
| Uniform thin rod about centre / about end | {{(1/12)mL^2}} / {{(1/3)mL^2}} | — |

*(In IB exams, formulas for continuous bodies such as discs or spheres are provided in the question stem, while {{I = Σ m_i r_i^2}} is in the Data Booklet.)*

### Rotational Dynamics, Angular Momentum & Impulse

- **Newton's 2nd law for rotation:** {{τ_(net) = Iα}}
- **Angular momentum:** {{L = Iω}} (units: kg m² s⁻¹ or N m s)
- **Angular impulse:** {{ΔL = τ Δt = Δ(Iω)}} (equals the area under a torque–time graph; {{τ_(net) = ΔL/Δt}})
- **Conservation of angular momentum:** If the net external torque on a system is zero ({{Στ_(ext) = 0}}), total angular momentum stays constant:

{{I_1 ω_1 = I_2 ω_2}}

### Rotational Kinetic Energy & Rolling Without Slipping

A spinning body stores **rotational kinetic energy**:

{{E_(k,rot) = (1/2)Iω^2 = L^2 / (2I)}}

Look closely at {{L^2 / (2I)}}: if an ice skater pulls her arms inward with zero external torque, {{L}} is constant while {{I}} **decreases**, so {{E_(k,rot)}} **increases**! That extra energy comes from internal chemical work done by her muscles pulling mass inward.

For a round body of radius {{R}} **rolling without slipping**, the contact point with the ground is instantaneously at rest, giving the no-slip constraints {{v = Rω}} and {{a = Rα}}. Its total kinetic energy splits between translation of the centre of mass and rotation about the centre of mass:

{{E_(k,total) = (1/2)mv^2 + (1/2)Iω^2 = (1/2)mv^2 (1 + I / (mR^2)) = (1/2)mv^2 (1 + c)}}

Rolling down a ramp of vertical height {{h}} from rest (static friction supplies the torque without slipping, so it does **zero work**!):

{{mgh = (1/2)mv^2 (1 + c)}}  ⇒  {{v = sqrt((2gh) / (1 + c))}}

Notice that **mass {{m}} and radius {{R}} cancel completely**—only the mass distribution factor {{c = I/(mR^2)}} determines who wins the race!`,
      diagram: `<svg viewBox="0 0 520 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of a thin hoop and a solid cylinder rolling without slipping down an incline showing their translational and rotational kinetic energy splits">
  <rect x="0" y="0" width="520" height="235" fill="#ffffff" rx="10"/>
  <!-- Left side: Ramp -->
  <rect x="10" y="10" width="245" height="215" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="132" y="29" font-size="12.5" font-weight="700" text-anchor="middle" fill="#1e293b">Rolling Without Slipping (v = Rω)</text>
  <!-- Incline triangle -->
  <polygon points="32,195 235,195 32,75" fill="#e2e8f0" stroke="#64748b" stroke-width="1.8"/>
  <!-- Height marker -->
  <line x1="22" y1="75" x2="22" y2="195" stroke="#059669" stroke-width="1.8"/>
  <line x1="17" y1="75" x2="27" y2="75" stroke="#059669" stroke-width="1.8"/>
  <line x1="17" y1="195" x2="27" y2="195" stroke="#059669" stroke-width="1.8"/>
  <text x="16" y="140" font-size="11" font-weight="700" fill="#059669" text-anchor="end">h</text>
  <!-- Hoop (behind) -->
  <circle cx="96" cy="95" r="19" fill="none" stroke="#dc2626" stroke-width="4.5"/>
  <circle cx="96" cy="95" r="2.5" fill="#dc2626"/>
  <text x="118" y="80" font-size="10.5" font-weight="700" fill="#dc2626">Hoop (slower)</text>
  <!-- Solid cylinder (ahead) -->
  <circle cx="166" cy="136" r="19" fill="#93c5fd" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="166" cy="136" r="2.5" fill="#1e293b"/>
  <text x="188" y="124" font-size="10.5" font-weight="700" fill="#2563eb">Cylinder (faster)</text>
  <!-- Friction arrow at contact -->
  <line x1="156" y1="152" x2="132" y2="138" stroke="#d97706" stroke-width="2.2"/>
  <polygon points="132,138 141,139 137,146" fill="#d97706"/>
  <text x="128" y="160" font-size="10" font-weight="700" fill="#d97706">f_s (static)</text>
  <text x="132" y="213" font-size="10.5" font-weight="600" text-anchor="middle" fill="#475569">Static friction gives τ, does zero work!</text>

  <!-- Right side: Energy bars -->
  <rect x="265" y="10" width="245" height="215" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="387" y="29" font-size="12.5" font-weight="700" text-anchor="middle" fill="#1e293b">Energy Split at Bottom (Total = mgh)</text>

  <!-- Hoop bar -->
  <text x="280" y="57" font-size="11" font-weight="700" fill="#1e293b">Thin Hoop (I = mR², c = 1)</text>
  <rect x="280" y="64" width="105" height="24" fill="#3b82f6" rx="3"/>
  <rect x="385" y="64" width="105" height="24" fill="#f97316" rx="3"/>
  <text x="332" y="80" font-size="10.5" font-weight="700" text-anchor="middle" fill="#ffffff">Trans 50%</text>
  <text x="437" y="80" font-size="10.5" font-weight="700" text-anchor="middle" fill="#ffffff">Rot 50%</text>
  <text x="280" y="101" font-size="10" fill="#475569">v = √(gh) = 0.707 √(2gh)</text>

  <!-- Solid cylinder bar -->
  <text x="280" y="127" font-size="11" font-weight="700" fill="#1e293b">Solid Cylinder (I = ½mR², c = 0.5)</text>
  <rect x="280" y="134" width="140" height="24" fill="#3b82f6" rx="3"/>
  <rect x="420" y="134" width="70" height="24" fill="#f97316" rx="3"/>
  <text x="350" y="150" font-size="10.5" font-weight="700" text-anchor="middle" fill="#ffffff">Trans 66.7%</text>
  <text x="455" y="150" font-size="10.5" font-weight="700" text-anchor="middle" fill="#ffffff">33.3%</text>
  <text x="280" y="171" font-size="10" fill="#475569">v = √(4gh/3) = 0.816 √(2gh)</text>

  <!-- Legend -->
  <rect x="282" y="192" width="12" height="12" fill="#3b82f6" rx="2"/>
  <text x="298" y="202" font-size="10" font-weight="600" fill="#334155">E_k,trans = ½mv²</text>
  <rect x="394" y="192" width="12" height="12" fill="#f97316" rx="2"/>
  <text x="410" y="202" font-size="10" font-weight="600" fill="#334155">E_k,rot = ½Iω²</text>
</svg>`,
      diagramCaption:
        "A thin hoop puts 50% of its mgh into rotational kinetic energy, whereas a solid cylinder puts only 33.3% into rotation—so the solid cylinder translates faster and wins the race regardless of mass or radius.",
      workedExamples: [
        {
          title: "Conservation of Angular Momentum & Energy Change",
          problem:
            "A figure skater spins with arms outstretched at {{ω_1 = 2.5 rad s^(-1)}} with moment of inertia {{I_1 = 4.2 kg m^2}}. She pulls her arms tightly to her body, reducing her moment of inertia to {{I_2 = 1.5 kg m^2}}. Assuming negligible ice friction, calculate (a) her new angular speed {{ω_2}}, and (b) the change in her rotational kinetic energy.",
          steps: [
            "Zero external torque ⇒ angular momentum is conserved: {{I_1 ω_1 = I_2 ω_2}}.",
            "Solve for {{ω_2}}: {{ω_2 = (4.2 * 2.5) / 1.5 = 10.5 / 1.5 = 7.0 rad s^(-1)}}.",
            "Initial kinetic energy: {{E_(k1) = (1/2) I_1 ω_1^2 = 0.5 * 4.2 * 2.5^2 = 13.125 J}}.",
            "Final kinetic energy: {{E_(k2) = (1/2) I_2 ω_2^2 = 0.5 * 1.5 * 7.0^2 = 36.75 J}}.",
            "Change: {{ΔE_k = 36.75 - 13.125 = +23.625 J ≈ +23.6 J}} (work done by her muscles pulling her arms inward).",
          ],
          answer: "(a) {{ω_2 = 7.0 rad s^(-1)}}; (b) {{ΔE_k = +23.6 J}}",
          yourTurn: {
            question:
              "A freely spinning turntable with moment of inertia {{0.40 kg m^2}} rotates at {{6.0 rad s^(-1)}}. A piece of clay drops vertically onto it, raising the total moment of inertia to {{0.60 kg m^2}}. Calculate the new angular speed in rad s⁻¹.",
            answer: { type: "number", value: 4, display: "4 rad s⁻¹" },
            solution:
              "{{I_1 ω_1 = I_2 ω_2}} ⇒ {{0.40 * 6.0 = 0.60 * ω_2}} ⇒ {{ω_2 = 2.4 / 0.60 = 4.0 rad s^(-1)}}.",
          },
        },
        {
          title: "Solid Cylinder Rolling Without Slipping Down an Incline",
          problem:
            "A uniform solid cylinder ({{I = (1/2)mR^2}}) of mass {{3.0 kg}} and radius {{0.15 m}} rolls without slipping from rest down an incline of vertical height {{h = 1.80 m}}. Taking {{g = 9.81 m s^(-2)}}, determine its linear speed {{v}} at the bottom.",
          steps: [
            "Apply conservation of mechanical energy (static friction does zero work when there is no slipping): {{mgh = (1/2)mv^2 + (1/2)Iω^2}}.",
            "Substitute {{I = (1/2)mR^2}} and the no-slip link {{ω = v/R}}: {{mgh = (1/2)mv^2 + (1/2)((1/2)mR^2)(v/R)^2 = (1/2)mv^2 + (1/4)mv^2 = (3/4)mv^2}}.",
            "Cancel {{m}}: {{v = sqrt((4gh)/3) = sqrt((4 * 9.81 * 1.80)/3) = sqrt(23.544) = 4.852 m s^(-1)}}.",
          ],
          answer: "{{v = 4.85 m s^(-1)}} (3 s.f.)",
          yourTurn: {
            question:
              "A thin hollow hoop ({{I = mR^2}}) rolls without slipping from rest down a ramp of vertical height {{1.25 m}}. Taking {{g = 9.80 m s^(-2)}}, calculate its linear speed at the bottom in m s⁻¹ (to 2 decimal places).",
            answer: { type: "number", value: 3.5, tolerance: 0.02, display: "3.50 m s⁻¹" },
            solution:
              "{{mgh = (1/2)mv^2 + (1/2)(mR^2)(v/R)^2 = mv^2}} ⇒ {{v = sqrt(gh) = sqrt(9.80 * 1.25) = sqrt(12.25) = 3.50 m s^(-1)}}.",
          },
        },
      ],
      keyPoints: [
        "Moment of inertia {{I = Σ m_i r_i^2}} depends on BOTH mass and how far that mass sits from the **specific axis of rotation**.",
        "Rotational 2nd law {{τ_(net) = Iα}} and angular impulse {{ΔL = τ Δt}} mirror {{F = ma}} and {{Δp = F Δt}}.",
        "When {{Στ_(ext) = 0}}, angular momentum {{L = Iω}} is conserved, but kinetic energy {{E_k = L^2/(2I)}} is **not** conserved if {{I}} changes.",
        "For rolling without slipping ({{v = Rω}}), total kinetic energy is {{(1/2)mv^2 + (1/2)Iω^2}} and static friction does zero work because the contact point has zero instantaneous velocity.",
        "Down any incline, bodies with smaller {{c = I/(mR^2)}} win the race: solid sphere ({{2/5}}) beats solid cylinder ({{1/2}}) beats hollow sphere ({{2/3}}) beats thin hoop ({{1}}).",
      ],
      whyItWorks:
        "Why does static friction do **zero work** during rolling without slipping? At every instant, the bottom point of the wheel has forward translational velocity {{+v}} and backward tangential velocity {{-Rω = -v}}, so its instantaneous velocity relative to the ground is **zero**! Since {{P = F_s · v_(contact) = 0}}, static friction converts translational energy into rotational energy without dissipating a single joule as heat (unlike kinetic friction during skidding).",
      strategies: [
        "In rolling-down-a-ramp questions, use **energy conservation** first for speed {{v}}—it is much faster than solving coupled {{F = ma}} and {{τ = Iα}} equations!",
        "When asked for the **static friction force** {{f_s}} or **acceleration** {{a}} on a ramp, write BOTH {{mg sin θ - f_s = ma}} and {{f_s R = Iα = I(a/R)}}, then eliminate {{f_s}}.",
        "For rotational collisions (dropping clay onto a disc or clutching two discs together), conserve **angular momentum** {{L}}—never assume kinetic energy is conserved!",
        "Remember {{E_k = L^2 / (2I)}} is a golden shortcut whenever {{L}} is constant and {{I}} changes by a known ratio.",
      ],
      thinkDeeper:
        "A collapsing star's radius shrinks by a factor of 1000 while keeping its mass roughly constant (forming a neutron star/pulsar). By what factor does its angular speed increase, and where does the massive increase in its rotational kinetic energy come from?",
    },

    // =========================================================================
    // SECTION 3: Galilean Transformations, Postulates & Time/Length Effects
    // =========================================================================
    {
      id: "galilean-special-relativity",
      heading: "A.5 Galilean Transformations, Postulates & Time/Length Effects",
      level: "HL",
      discovery: {
        problem:
          "Imagine standing on a train moving at {{0.5c}} and switching on a torch pointing forward. Galilean intuition says a bystander on the platform should measure the light moving at {{c + 0.5c = 1.5c}}. Yet Maxwell's electromagnetism predicts the speed of light in vacuum is strictly {{c = 1/sqrt(μ_0 ε_0)}}—with NO mention of who is moving! If both observers really measure the exact same speed {{c}}, what classical assumption about space or time **must** break?",
        idea:
          "Speed is distance divided by time. If two observers in relative motion measure the **exact same speed** {{c}} for the same light beam, they CANNOT agree on both distances and time intervals—time itself must dilate and lengths must contract!",
      },
      body: `An **inertial reference frame** is a non-accelerating frame in which Newton's first law holds (free bodies move at constant velocity).

### Galilean Relativity vs Maxwell's Crisis

Suppose frame {{S'}} moves at constant velocity {{+v}} along the {{x}}-axis relative to frame {{S}}, with origins coinciding at {{t = t' = 0}}. Classical **Galilean transformations** assume universal absolute time ({{t' = t}}):

- {{x' = x - vt}}
- {{t' = t}}
- {{u' = u - v}}

Newton's second law {{F = ma}} is invariant under Galilean transformations (since {{a' = a}}). However, applying {{u' = u - v}} to a light pulse travelling at {{u = c}} predicts {{u' = c - v ≠ c}}, clashing head-on with Maxwell's equations and the null result of the Michelson–Morley experiment.

### Einstein's Two Postulates of Special Relativity (1905)

1. **Principle of Relativity:** The laws of physics have the same form in all inertial reference frames.
2. **Constancy of the Speed of Light:** The speed of light in a vacuum, {{c}}, has the same value for all inertial observers, regardless of the motion of the source or the observer.

### The Lorentz Factor {{γ}}

Every relativistic correction depends on the dimensionless **Lorentz factor**:

{{γ = 1 / sqrt(1 - v^2 / c^2)}}

Notice {{γ >= 1}} always: at everyday speeds ({{v ≪ c}}), {{γ ≈ 1}} and Newtonian physics is recovered; as {{v → c}}, {{γ → ∞}}. Handy exact Pythagorean ratios appear constantly in IB exams:
- {{v = 0.60c}} ⇒ {{γ = 1.25 = 5/4}}
- {{v = 0.80c}} ⇒ {{γ = 1.67 = 5/3}}
- {{v = 0.995c}} ⇒ {{γ ≈ 10.0}}

### Time Dilation & Proper Time {{Δt_0}}

The **proper time interval** {{Δt_0}} between two events is the time measured in the inertial frame where **both events happen at the same spatial location** (so a single clock present at both events measures it). Any other inertial observer moving at speed {{v}} relative to that clock measures a **longer** (dilated) time interval:

{{Δt = γ Δt_0}}

**"Moving clocks run slow."** Proper time is always the **shortest** possible time interval between two timelike-separated events.

### Length Contraction & Proper Length {{L_0}}

The **proper length** {{L_0}} of an object (or distance between two fixed points) is measured in the inertial frame in which the object is **at rest**. An observer moving at speed {{v}} parallel to that length measures a **shorter** (contracted) length:

{{L = L_0 / γ}}

Proper length is always the **longest** possible measured length. Dimensions **perpendicular** to the velocity vector are completely unaffected!

### Experimental Evidence: Atmospheric Muons

Cosmic rays create unstable **muons** roughly {{10 km}} above Earth moving downward at {{v ≈ 0.995c}} ({{γ ≈ 10}}). Their proper mean lifetime is only {{τ_0 ≈ 2.2 μs}}. Classically, they should travel only {{v τ_0 ≈ 660 m}} before decaying, so almost none should reach sea level—yet detectors at sea level count abundant muons! Both frames agree on the survival fraction, via two different explanations:
- **Earth frame:** The muon's internal clock is time-dilated to {{τ = γ τ_0 ≈ 22 μs}}, giving a mean range of {{≈ 6.6 km}}, allowing many muons to reach the surface.
- **Muon rest frame:** The muon lives only {{2.2 μs}}, but the {{10 km}} atmosphere rushing past it is length-contracted to {{L = L_0 / γ ≈ 1.0 km}}, which passes by in {{≈ 3.3 μs}}—well within reach of a large surviving fraction!`,
      diagram: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Light-clock thought experiment deriving time dilation Δt = γΔt_0 from a right-angled triangle">
  <rect x="0" y="0" width="520" height="230" fill="#ffffff" rx="10"/>
  <!-- Left box: Rest frame S' -->
  <rect x="10" y="10" width="165" height="210" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="92" y="29" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Clock Rest Frame (S')</text>
  <!-- Top and bottom mirrors -->
  <rect x="52" y="54" width="80" height="8" fill="#64748b" rx="2"/>
  <rect x="52" y="168" width="80" height="8" fill="#64748b" rx="2"/>
  <!-- Vertical light path -->
  <line x1="92" y1="168" x2="92" y2="64" stroke="#f59e0b" stroke-width="3"/>
  <polygon points="92,64 87,74 97,74" fill="#f59e0b"/>
  <text x="104" y="118" font-size="11" font-weight="700" fill="#b45309">d = c(Δt₀/2)</text>
  <text x="92" y="194" font-size="10.5" font-weight="600" text-anchor="middle" fill="#334155">Same x' position</text>
  <text x="92" y="209" font-size="10.5" font-weight="700" text-anchor="middle" fill="#2563eb">Proper time Δt₀</text>

  <!-- Right box: Lab frame S -->
  <rect x="185" y="10" width="325" height="210" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="347" y="29" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Observer Frame (S): Clock Moves Right at v</text>
  <!-- Three mirror positions -->
  <rect x="210" y="168" width="56" height="8" fill="#64748b" rx="2"/>
  <rect x="319" y="54" width="56" height="8" fill="#64748b" rx="2"/>
  <rect x="428" y="168" width="56" height="8" fill="#64748b" rx="2"/>
  <!-- Diagonal light path -->
  <line x1="238" y1="168" x2="347" y2="62" stroke="#f59e0b" stroke-width="3"/>
  <line x1="347" y1="62" x2="456" y2="168" stroke="#f59e0b" stroke-width="3"/>
  <!-- Right triangle helper lines -->
  <line x1="347" y1="62" x2="347" y2="168" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="238" y1="168" x2="347" y2="168" stroke="#059669" stroke-width="2.5"/>
  <!-- Right-angle symbol -->
  <polyline points="337,168 337,158 347,158" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <!-- Labels on triangle -->
  <text x="275" y="107" font-size="11" font-weight="700" fill="#b45309" text-anchor="end">c(Δt/2)</text>
  <text x="354" y="122" font-size="11" font-weight="700" fill="#2563eb">c(Δt₀/2)</text>
  <text x="292" y="185" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">v(Δt/2)</text>
  <!-- Velocity arrow -->
  <line x1="418" y1="74" x2="474" y2="74" stroke="#dc2626" stroke-width="2.2"/>
  <polygon points="474,74 464,69 464,79" fill="#dc2626"/>
  <text x="446" y="67" font-size="11" font-weight="700" text-anchor="middle" fill="#dc2626">v</text>
  <!-- Pythagoras footer -->
  <text x="347" y="208" font-size="11" font-weight="700" text-anchor="middle" fill="#1e293b">Pythagoras: (cΔt)² = (cΔt₀)² + (vΔt)²  ⇒  Δt = γΔt₀</text>
</svg>`,
      diagramCaption:
        "Because light travels at the same speed c along the longer diagonal path in frame S, Pythagoras' theorem directly yields Δt = Δt₀ / √(1 − v²/c²) = γΔt₀.",
      workedExamples: [
        {
          title: "Interstellar Voyage: Proper Time vs Proper Length",
          problem:
            "A spacecraft travels from Earth to a star at rest relative to Earth at proper distance {{L_0 = 4.80 ly}} at constant speed {{v = 0.800c}}. Calculate (a) the Lorentz factor {{γ}}, (b) the journey time measured on Earth, (c) the journey time measured on the spacecraft, and (d) the distance to the star measured by the astronauts.",
          steps: [
            "Lorentz factor: {{γ = 1 / sqrt(1 - 0.800^2) = 1 / sqrt(0.36) = 1 / 0.600 = 5/3 ≈ 1.667}}.",
            "In Earth's frame, the distance is the proper length {{L_0 = 4.80 ly}}, so Earth time is {{Δt = L_0 / v = 4.80 / 0.800 = 6.00 years}}.",
            "Departure and arrival both happen **at the spacecraft**, so the spacecraft clock measures the **proper time**: {{Δt_0 = Δt / γ = 6.00 / (5/3) = 3.60 years}}.",
            "In the spacecraft frame, the Earth–star distance is moving past at {{0.800c}} and contracts to {{L = L_0 / γ = 4.80 / (5/3) = 2.88 ly}}. Cross-check: {{L / v = 2.88 / 0.800 = 3.60 years}}!",
          ],
          answer: "(a) {{γ = 1.67}}; (b) {{6.00 yr}}; (c) {{3.60 yr}}; (d) {{2.88 ly}}",
          yourTurn: {
            question:
              "A rocket of proper length {{150 m}} flies past a space station at {{0.60c}}. Calculate the length of the rocket measured by an observer on the space station, in metres.",
            answer: { type: "number", value: 120, display: "120 m" },
            solution:
              "{{γ = 1 / sqrt(1 - 0.60^2) = 1 / 0.80 = 1.25}}. Then {{L = L_0 / γ = 150 / 1.25 = 120 m}}.",
          },
        },
        {
          title: "Atmospheric Muons in Two Inertial Frames",
          problem:
            "A muon is produced {{10.0 km}} above sea level and moves vertically downward at {{v = 0.995c}}. Its proper mean lifetime is {{τ_0 = 2.20 μs}}. Calculate (a) its dilated mean lifetime in Earth's frame, and (b) the contracted thickness of the {{10.0 km}} atmosphere in the muon's rest frame.",
          steps: [
            "Compute {{γ}}: {{1 - v^2/c^2 = 1 - 0.995^2 = 1 - 0.990025 = 0.009975}}, so {{γ = 1 / sqrt(0.009975) ≈ 10.01}}.",
            "(a) Earth frame: {{τ = γ τ_0 = 10.01 * 2.20 μs ≈ 22.0 μs}} (giving mean range {{v τ ≈ 6.58 km}}, far larger than the classical {{657 m}}).",
            "(b) Muon frame: {{L = L_0 / γ = 10.0 km / 10.01 ≈ 0.999 km ≈ 1.00 km}} (Earth rushes upward to meet the muon in {{3.35 μs}}).",
          ],
          answer: "(a) {{τ = 22.0 μs}}; (b) {{L = 1.00 km}}",
          yourTurn: {
            question:
              "An unstable pion with proper lifetime {{26.0 ns}} moves through a laboratory at a speed where {{γ = 5.0}}. Calculate its dilated lifetime measured in the laboratory, in ns.",
            answer: { type: "number", value: 130, display: "130 ns" },
            solution: "{{Δt = γ Δt_0 = 5.0 * 26.0 = 130 ns}}.",
          },
        },
      ],
      keyPoints: [
        "Einstein's postulates: (1) laws of physics are identical in all inertial frames; (2) vacuum speed of light {{c}} is invariant for all inertial observers.",
        "Lorentz factor {{γ = 1 / sqrt(1 - v^2/c^2) >= 1}}; never forget the square root or the square on {{v/c}}.",
        "**Proper time** {{Δt_0}} is measured by ONE clock present at both events (shortest time); **dilated time** is {{Δt = γ Δt_0}}.",
        "**Proper length** {{L_0}} is measured in the object's rest frame (longest length); **contracted length** is {{L = L_0 / γ}} along the direction of motion only.",
        "Both time dilation (Earth frame) and length contraction (muon frame) explain muon survival with identical quantitative predictions.",
      ],
      whyItWorks:
        "Why doesn't the symmetry ('A says B's clock is slow, and B says A's clock is slow') create a contradiction? Comparing a single moving clock against two separated clocks in another frame relies on how those two separated clocks are **synchronised**. Because observers in relative motion disagree about **simultaneity**, each genuinely sees the other's single clock ticking more slowly without any logical paradox!",
      strategies: [
        "Before plugging into {{Δt = γ Δt_0}}, ask one question: **Which observer has a single clock physically present at BOTH events?** That observer measures {{Δt_0}}.",
        "Before plugging into {{L = L_0 / γ}}, ask: **In which frame are the two endpoints of the object/gap AT REST?** That frame measures {{L_0}}.",
        "Always sanity-check direction: {{Δt >= Δt_0}} (time gets bigger) and {{L <= L_0}} (length gets smaller).",
        "When {{v}} is given as a decimal multiple of {{c}} (e.g. {{0.8c}}), cancel {{c}} immediately inside {{v^2/c^2 = 0.8^2 = 0.64}} instead of multiplying by {{3 * 10^8}}!",
      ],
      thinkDeeper:
        "If an astronaut travels at {{0.8c}} to a star and then **turns around** and returns to Earth, why does the astronaut genuinely return younger than her Earth-bound twin—breaking the symmetry between their two frames?",
    },

    // =========================================================================
    // SECTION 4: Lorentz Transformations, Velocity Addition & Spacetime Diagrams
    // =========================================================================
    {
      id: "lorentz-spacetime-diagrams",
      heading: "A.5 Lorentz Transformations, Velocity Addition & Spacetime Diagrams",
      level: "HL",
      discovery: {
        problem:
          "Suppose two lightning bolts strike the front and rear of a fast-moving train simultaneously according to a bystander on the platform, right as the midpoint of the train passes her. Because light travels at speed {{c}} in EVERY frame, which flash reaches the passenger sitting at the **midpoint** of the train first—and what must she conclude about when the two strikes occurred?",
        idea:
          "As the flashes travel inward at {{c}}, the passenger moves **toward** the front flash and **away from** the rear flash, so the front flash reaches her first! Since she is equidistant from both ends of her own train and light moves at {{c}} in both directions, she **must** conclude the front bolt struck **earlier** than the rear bolt: **simultaneity is relative**!",
      },
      body: `Time dilation and length contraction are special cases of the full **Lorentz transformations**, which convert the spacetime coordinates {{(x, t)}} of any event in inertial frame {{S}} into {{(x', t')}} in frame {{S'}} moving at velocity {{+v}} along {{+x}}:

### Lorentz Coordinate Transformations

- {{x' = γ(x - vt)}}   and   {{Δx' = γ(Δx - vΔt)}}
- {{t' = γ(t - (vx)/c^2)}}   and   {{Δt' = γ(Δt - (vΔx)/c^2)}}

To transform **back** from {{S'}} to {{S}}, simply swap primed/unprimed symbols and flip the sign of {{v}} ({{v → -v}}):
- {{x = γ(x' + vt')}}   and   {{t = γ(t' + (vx')/c^2)}}

Look at the {{-vx/c^2}} term in {{t'}}: even when two events are simultaneous in {{S}} ({{Δt = 0}}) at different positions ({{Δx ≠ 0}}), frame {{S'}} measures {{Δt' = -γ v Δx / c^2 ≠ 0}}! That algebraic term IS the **relativity of simultaneity**.

### Relativistic Velocity Addition

If an object moves at velocity {{u}} along the {{x}}-axis in frame {{S}}, and frame {{S'}} moves at velocity {{v}} relative to {{S}}, the object's velocity in {{S'}} is:

{{u' = (u - v) / (1 - (uv)/c^2)}}

And the inverse (knowing {{u'}} in {{S'}} and finding {{u}} in {{S}}) flips {{v → -v}}:

{{u = (u' + v) / (1 + (u'v)/c^2)}}

Test it on a light beam ({{u = c}}): {{u' = (c - v)/(1 - v/c) = c}}! No combination of velocities below {{c}} can ever exceed {{c}}.

### The Invariant Spacetime Interval

Although observers disagree on {{Δx}} and {{Δt}} separately, **every** inertial observer computes the exact same **spacetime interval**:

{{(Δs)^2 = (cΔt)^2 - (Δx)^2 = (cΔt')^2 - (Δx')^2}}

- **Timelike** ({{(Δs)^2 > 0}}, {{|Δx| < c|Δt|}}): one event can cause the other; a frame exists where both occur at the same place, giving proper time {{Δt_0 = Δs / c}}.
- **Lightlike / null** ({{(Δs)^2 = 0}}, {{|Δx| = c|Δt|}}): connected by a light ray.
- **Spacelike** ({{(Δs)^2 < 0}}, {{|Δx| > c|Δt|}}): no signal can connect the two events; different observers can even disagree on which event happened first!

### Minkowski Spacetime Diagrams

A **Minkowski diagram** plots position {{x}} horizontally and **{{ct}}** vertically (same units of length on both axes!).
- A **light ray** from the origin obeys {{x = ±ct}}, forming **45° lines** (the **light cone**). Any massive particle's **worldline** must stay steeper than 45° (inside the light cone).
- For frame {{S'}} moving at velocity {{+v}} relative to {{S}}:
  1. The **{{ct'}}-axis** is the worldline of {{x' = 0}} ({{x = vt = (v/c)(ct)}}), tilted clockwise from {{ct}} by angle {{θ = tan^(-1)(v/c)}}.
  2. The **{{x'}}-axis** is the line of {{t' = 0}} ({{ct = (v/c)x}}), tilted anticlockwise from {{x}} by the **same angle** {{θ = tan^(-1)(v/c)}}.
- Both axes close symmetrically like scissors toward the 45° light cone as {{v → c}}.
- **Reading coordinates & simultaneity:** Lines of constant {{t'}} (simultaneous events in {{S'}}) run **parallel to the {{x'}}-axis**; lines of constant {{x'}} run **parallel to the {{ct'}}-axis**.`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minkowski spacetime diagram showing S axes (x, ct), tilted S' axes (x', ct') at angle θ = tan⁻¹(v/c), 45 degree light cone, and lines of simultaneity">
  <rect x="0" y="0" width="520" height="265" fill="#ffffff" rx="10"/>
  <!-- Grid background -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="60" y1="30" x2="60" y2="235"/><line x1="110" y1="30" x2="110" y2="235"/>
    <line x1="160" y1="30" x2="160" y2="235"/><line x1="210" y1="30" x2="210" y2="235"/>
    <line x1="260" y1="30" x2="260" y2="235"/><line x1="310" y1="30" x2="310" y2="235"/>
    <line x1="30" y1="45" x2="330" y2="45"/><line x1="30" y1="95" x2="330" y2="95"/>
    <line x1="30" y1="145" x2="330" y2="145"/><line x1="30" y1="195" x2="330" y2="195"/>
  </g>
  <!-- Origin at (110, 195), scale: 100px = 2 units -->
  <!-- Light cone 45 deg -->
  <line x1="110" y1="195" x2="290" y2="15" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="6 4"/>
  <line x1="110" y1="195" x2="30" y2="115" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="292" y="25" font-size="11" font-weight="700" fill="#b45309">Light cone (x = ct, 45°)</text>

  <!-- S axes (x and ct) -->
  <line x1="30" y1="195" x2="325" y2="195" stroke="#1e293b" stroke-width="2.2"/>
  <polygon points="325,195 316,190 316,200" fill="#1e293b"/>
  <text x="330" y="199" font-size="13" font-weight="800" fill="#1e293b">x</text>

  <line x1="110" y1="235" x2="110" y2="20" stroke="#1e293b" stroke-width="2.2"/>
  <polygon points="110,20 105,29 115,29" fill="#1e293b"/>
  <text x="103" y="20" font-size="13" font-weight="800" text-anchor="end" fill="#1e293b">ct</text>

  <!-- S' axes for v = 0.5c: ct' has dx/dct = 0.5, x' has dct/dx = 0.5 -->
  <!-- ct' from (110,195) to (110+85, 195-170) = (195, 25) -->
  <line x1="95" y1="225" x2="195" y2="25" stroke="#2563eb" stroke-width="2.4"/>
  <polygon points="195,25 186,31 195,35" fill="#2563eb"/>
  <text x="200" y="34" font-size="13" font-weight="800" fill="#2563eb">ct′</text>

  <!-- x' from (110,195) to (110+190, 195-95) = (300, 100) -->
  <line x1="50" y1="225" x2="300" y2="100" stroke="#2563eb" stroke-width="2.4"/>
  <polygon points="300,100 290,100 294,108" fill="#2563eb"/>
  <text x="305" y="101" font-size="13" font-weight="800" fill="#2563eb">x′</text>

  <!-- Angle arcs θ -->
  <path d="M 110 135 A 60 60 0 0 1 137 141" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <text x="124" y="131" font-size="11" font-weight="700" fill="#7c3aed">θ</text>
  <path d="M 175 195 A 65 65 0 0 0 168 166" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <text x="178" y="182" font-size="11" font-weight="700" fill="#7c3aed">θ</text>

  <!-- Simultaneous events A and B in S (same horizontal line ct = 95) -->
  <line x1="110" y1="125" x2="265" y2="125" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3 3"/>
  <!-- Line of simultaneity in S' through B parallel to x' -->
  <line x1="145" y1="165" x2="275" y2="100" stroke="#059669" stroke-width="1.6" stroke-dasharray="4 3"/>
  <circle cx="155" cy="125" r="4.5" fill="#dc2626"/>
  <text x="150" y="116" font-size="11" font-weight="800" fill="#dc2626">A</text>
  <circle cx="225" cy="125" r="4.5" fill="#dc2626"/>
  <text x="231" y="118" font-size="11" font-weight="800" fill="#dc2626">B</text>

  <!-- Explanatory key panel on right -->
  <rect x="348" y="20" width="162" height="225" fill="#f8fafc" stroke="#cbd5e1" rx="8"/>
  <text x="429" y="42" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Key Geometry</text>
  <text x="358" y="66" font-size="10.5" font-weight="700" fill="#7c3aed">tan θ = v / c</text>
  <text x="358" y="84" font-size="10" fill="#334155">• ct′ is worldline x′ = 0</text>
  <text x="358" y="100" font-size="10" fill="#334155">• x′ is line t′ = 0</text>
  <text x="358" y="122" font-size="10.5" font-weight="700" fill="#dc2626">Events A &amp; B:</text>
  <text x="358" y="138" font-size="10" fill="#334155">Simultaneous in S</text>
  <text x="358" y="152" font-size="10" fill="#334155">(same horizontal ct).</text>
  <text x="358" y="174" font-size="10.5" font-weight="700" fill="#059669">In frame S′:</text>
  <text x="358" y="190" font-size="10" fill="#334155">Parallel to x′ hits ct′</text>
  <text x="358" y="204" font-size="10" fill="#334155">lower for B than A:</text>
  <text x="358" y="220" font-size="10.5" font-weight="700" fill="#059669">B happens BEFORE A!</text>
</svg>`,
      diagramCaption:
        "In a Minkowski diagram, frame S' (moving at +v) has axes ct' and x' tilted symmetrically by θ = tan⁻¹(v/c) toward the 45° light cone. Events A and B are simultaneous in S, but B has a smaller t' coordinate so B occurs earlier in S'.",
      workedExamples: [
        {
          title: "Lorentz Transformation & Invariant Spacetime Interval",
          problem:
            "Frame {{S'}} moves at {{v = 0.60c}} along {{+x}} relative to frame {{S}}, with origins coinciding at {{t = t' = 0}}. Event A is at the origin {{(0, 0)}} and Event B occurs at {{x = 500 m}}, {{ct = 1000 m}} in {{S}}. (a) Calculate the coordinates {{(x', ct')}} of Event B in {{S'}}. (b) Verify that {{(Δs)^2}} is invariant.",
          steps: [
            "Compute {{γ = 1 / sqrt(1 - 0.60^2) = 1 / 0.80 = 1.25}} and note {{v/c = 0.60}}.",
            "{{x' = γ(x - (v/c)(ct)) = 1.25(500 - 0.60 * 1000) = 1.25(-100) = -125 m}}.",
            "{{ct' = γ(ct - (v/c)x) = 1.25(1000 - 0.60 * 500) = 1.25(700) = 875 m}}.",
            "In {{S}}: {{(Δs)^2 = (1000)^2 - (500)^2 = 1000000 - 250000 = 750000 m^2}}.",
            "In {{S'}}: {{(Δs')^2 = (875)^2 - (-125)^2 = 765625 - 15625 = 750000 m^2}} — identical!",
          ],
          answer: "(a) {{x' = -125 m}}, {{ct' = 875 m}}; (b) {{(Δs)^2 = 7.50 * 10^5 m^2}} in both frames",
          yourTurn: {
            question:
              "Two events in inertial frame {{S}} have separations {{Δx = 300 m}} and {{cΔt = 500 m}}. Calculate the invariant spacetime interval {{Δs = sqrt((cΔt)^2 - (Δx)^2)}} in metres.",
            answer: { type: "number", value: 400, display: "400 m" },
            solution:
              "{{Δs = sqrt(500^2 - 300^2) = sqrt(250000 - 90000) = sqrt(160000) = 400 m}}.",
          },
        },
        {
          title: "Head-On Relativistic Velocity Addition & Axis Tilt",
          problem:
            "In Earth's frame {{S}}, spacecraft A travels at {{+0.80c}} and spacecraft B travels toward A at {{-0.60c}}. Calculate (a) the velocity of B as measured by A, and (b) the angle {{θ}} between A's {{ct'}}-axis and Earth's {{ct}}-axis on a Minkowski diagram.",
          steps: [
            "Set frame {{S'}} as spacecraft A's rest frame, so {{v = +0.80c}} relative to Earth, and B has velocity {{u = -0.60c}} in Earth's frame.",
            "Apply {{u' = (u - v) / (1 - uv/c^2)}}: {{u' = (-0.60c - 0.80c) / (1 - (-0.60)(0.80)) = -1.40c / (1 + 0.48) = -1.40c / 1.48 ≈ -0.946c}}.",
            "The magnitude is {{0.946c}} (approaching A)—strictly less than {{c}}, unlike the Galilean {{1.40c}}!",
            "Minkowski axis tilt angle: {{θ = tan^(-1)(v/c) = tan^(-1)(0.80) = 38.7°}}.",
          ],
          answer: "(a) {{u' = -0.946c}} (speed {{0.946c}}); (b) {{θ = 38.7°}}",
          yourTurn: {
            question:
              "A rocket flies past a space station at {{0.50c}} and fires a probe forward at {{0.50c}} relative to the rocket. Calculate the probe's speed relative to the space station as a multiple of {{c}} (give your answer to 2 decimal places).",
            answer: { type: "number", value: 0.8, tolerance: 0.01, display: "0.80 c" },
            solution:
              "Using the inverse velocity addition formula {{u = (u' + v)/(1 + u'v/c^2)}}: {{u = (0.50c + 0.50c)/(1 + 0.50 * 0.50) = 1.00c / 1.25 = 0.80c}}.",
          },
        },
      ],
      keyPoints: [
        "Lorentz transformations mix space and time symmetrically when written with {{ct}}: {{x' = γ(x - (v/c)ct)}} and {{ct' = γ(ct - (v/c)x)}}.",
        "Always check velocity-addition signs: {{u' = (u - v)/(1 - uv/c^2)}} transforms FROM {{S}} TO {{S'}}; flip {{v → -v}} to go FROM {{S'}} TO {{S}}.",
        "The spacetime interval {{(Δs)^2 = (cΔt)^2 - (Δx)^2}} is **invariant** across all inertial frames (timelike {{> 0}}, lightlike {{= 0}}, spacelike {{< 0}}).",
        "On a Minkowski diagram, light rays lie at 45°, while {{ct'}} and {{x'}} tilt inward by {{θ = tan^(-1)(v/c)}}.",
        "Lines of simultaneity in {{S'}} are **parallel to the {{x'}}-axis**—events with the same {{ct}} in {{S}} occur at different {{ct'}} in {{S'}}.",
      ],
      whyItWorks:
        "Why do {{ct'}} and {{x'}} tilt by the **exact same angle** {{θ = tan^(-1)(v/c)}} toward the 45° line? Because the speed of light MUST be {{c}} in {{S'}} as well! A light ray satisfies {{x = ct}} in {{S}} and MUST also satisfy {{x' = ct'}} in {{S'}}. The only linear coordinate axes whose angle bisector stays fixed at 45° are axes that scissor inward symmetrically by the same angle {{θ}}.",
      strategies: [
        "Rewrite {{t' = γ(t - vx/c^2)}} as {{ct' = γ(ct - βx)}} with {{β = v/c}}—you avoid messy powers of {{3 * 10^8}} and see the symmetry instantly!",
        "When reading an event's {{x'}} coordinate on a Minkowski diagram, draw a line **parallel to the {{ct'}}-axis** down to {{x'}} (NOT vertically straight down!).",
        "When reading an event's {{ct'}} coordinate, draw a line **parallel to the {{x'}}-axis** across to {{ct'}} (NOT horizontally!).",
        "To find proper time directly from two events in {{S}} without computing {{γ}}, use {{Δt_0 = sqrt((cΔt)^2 - (Δx)^2) / c}} whenever {{c|Δt| > |Δx|}}.",
      ],
      thinkDeeper:
        "On a Minkowski diagram, one unit along the tilted {{ct'}}-axis is actually **longer on paper** than one unit along the vertical {{ct}}-axis (by the factor {{sqrt((1 + β^2)/(1 - β^2))}}). How can you prove this directly from the invariant hyperbola {{(ct)^2 - x^2 = 1}}?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Define torque and state its formula and SI unit.",
        back: "Torque is the turning effect of a force about an axis: {{τ = F r sin θ}}, where {{r}} is the distance from the pivot to the point of application and {{θ}} is the angle between **r** and **F**. SI unit: **N m** (never write joules).",
        level: "HL",
      },
      {
        front: "What is a couple, and why is its torque pivot-independent?",
        back: "Two equal, opposite, parallel forces separated by perpendicular distance {{d}}. Net force {{ΣF = 0}} and {{τ = Fd}}; shifting the pivot adds {{Fx}} to one torque and subtracts {{Fx}} from the other, leaving {{Fd}} unchanged.",
        level: "HL",
      },
      {
        front: "State the two conditions for complete static equilibrium of a rigid body.",
        back: "1. Zero net force: {{ΣF = 0}} (translational equilibrium).\n2. Zero net torque about **any** axis: {{Στ = 0}} (rotational equilibrium).",
        level: "HL",
      },
      {
        front: "Define moment of inertia {{I}} and explain what it depends on.",
        back: "{{I = Σ m_i r_i^2}} (unit: kg m²). It measures resistance to angular acceleration and depends on BOTH total mass and how far that mass is distributed from the **chosen axis of rotation**.",
        level: "HL",
      },
      {
        front: "State Newton's second law for rotation and the angular impulse equation.",
        back: "{{τ_(net) = Iα = ΔL / Δt}} and angular impulse {{ΔL = τ Δt = Δ(Iω)}} (area under a torque–time graph).",
        level: "HL",
      },
      {
        front: "When an ice skater pulls her arms inward, what happens to {{L}}, {{I}}, {{ω}}, and {{E_k}}?",
        back: "With zero external torque: {{I}} decreases, {{L = Iω}} stays **constant**, {{ω}} increases, and {{E_k = L^2/(2I)}} **increases** because her muscles do internal mechanical work.",
        level: "HL",
      },
      {
        front: "Why does static friction do ZERO work on a cylinder rolling without slipping?",
        back: "At the instant of contact, the bottom point has zero velocity relative to the surface ({{v - Rω = 0}}), so {{P = f_s v_(contact) = 0}}. Static friction provides torque without dissipating energy.",
        level: "HL",
      },
      {
        front: "Compare the race order down a ramp: solid sphere ({{2/5}}), solid cylinder ({{1/2}}), hollow sphere ({{2/3}}), thin hoop ({{1}}).",
        back: "1st: Solid sphere → 2nd: Solid cylinder → 3rd: Hollow sphere → 4th: Thin hoop. Smaller {{c = I/(mR^2)}} puts less energy into rotation and more into forward speed {{v = sqrt(2gh/(1+c))}}.",
        level: "HL",
      },
      {
        front: "State Einstein's two postulates of special relativity.",
        back: "1. The laws of physics are the same in all inertial reference frames.\n2. The speed of light in vacuum, {{c}}, is the same for all inertial observers, independent of source or observer motion.",
        level: "HL",
      },
      {
        front: "What is **proper time** {{Δt_0}}, and how does it compare to dilated time {{Δt}}?",
        back: "The time interval between two events measured in the inertial frame where **both events happen at the same place** (single clock). Proper time is always the **shortest** time: {{Δt = γ Δt_0 >= Δt_0}}.",
        level: "HL",
      },
      {
        front: "What is **proper length** {{L_0}}, and along which direction does length contraction act?",
        back: "Length measured in the frame where the object is **at rest** (longest possible length). Length contracts to {{L = L_0 / γ}} **only parallel** to the relative velocity; perpendicular dimensions are unchanged.",
        level: "HL",
      },
      {
        front: "Explain atmospheric muon survival in BOTH Earth's frame and the muon's rest frame.",
        back: "**Earth frame:** Muon lifetime is time-dilated ({{τ = γ τ_0}}), so it travels much farther before decaying.\n**Muon frame:** Muon lives {{τ_0}}, but the atmosphere's thickness is length-contracted ({{L = L_0 / γ}}).",
        level: "HL",
      },
      {
        front: "Write the Lorentz transformations for {{x'}} and {{t'}} (frame {{S'}} moving at {{+v}} along {{+x}}).",
        back: "{{x' = γ(x - vt)}} and {{t' = γ(t - vx/c^2)}} (and the same with {{Δ}} for coordinate intervals). Replace {{v}} with {{-v}} for the inverse.",
        level: "HL",
      },
      {
        front: "What is the invariant spacetime interval {{(Δs)^2}}, and what do its signs mean?",
        back: "{{(Δs)^2 = (cΔt)^2 - (Δx)^2}}, identical in all inertial frames. {{> 0}}: timelike (causal link possible); {{= 0}}: lightlike (light ray); {{< 0}}: spacelike (no causal link, time order can reverse).",
        level: "HL",
      },
      {
        front: "How are the {{ct'}} and {{x'}} axes drawn on a Minkowski diagram for frame {{S'}} moving at {{+v}}?",
        back: "The {{ct'}}-axis tilts clockwise from {{ct}} by {{θ = tan^(-1)(v/c)}}; the {{x'}}-axis tilts anticlockwise from {{x}} by the **same angle** {{θ = tan^(-1)(v/c)}}, scissoring symmetrically toward the 45° light cone.",
        level: "HL",
      },
      {
        front: "How do you identify simultaneous events in frame {{S'}} on a Minkowski diagram?",
        back: "Draw a straight line **parallel to the {{x'}}-axis**: every event lying on that tilted line has the same {{t'}} coordinate in {{S'}}.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Angular quantities in rotational equations MUST be in **radians**, rad s⁻¹, and rad s⁻² ({{1 rev = 2π rad}}).",
      "Torque {{τ = Fr sin θ}} has SI units **N m**; complete static equilibrium requires BOTH {{ΣF = 0}} and {{Στ = 0}}.",
      "Moment of inertia {{I = Σ m_i r_i^2}} depends on axis choice; moving mass outward increases {{I}} quadratically.",
      "Angular momentum {{L = Iω}} is conserved when {{Στ_(ext) = 0}}, while rotational KE {{E_k = L^2/(2I)}} changes whenever {{I}} changes.",
      "For rolling without slipping ({{v = Rω}}), {{E_(k,total) = (1/2)mv^2 + (1/2)Iω^2}} and downhill speed {{v = sqrt(2gh/(1 + I/(mR^2)))}} is independent of {{m}} and {{R}}.",
      "Galilean velocity addition {{u' = u - v}} breaks the invariance of {{c}}; Einstein's postulates force the Lorentz factor {{γ = 1/sqrt(1 - v^2/c^2)}}.",
      "Proper time {{Δt_0}} is measured by ONE clock at both events (shortest); proper length {{L_0}} is measured in the rest frame of the object (longest).",
      "Lorentz transformations give {{x' = γ(x - vt)}} and {{t' = γ(t - vx/c^2)}}; the {{-vx/c^2}} term produces the relativity of simultaneity.",
      "Relativistic velocity addition {{u' = (u - v)/(1 - uv/c^2)}} keeps {{c}} invariant and prevents any relative speed from exceeding {{c}}.",
      "On a Minkowski diagram, light travels at 45°, tilted axes make angle {{θ = tan^(-1)(v/c)}} with {{ct}} and {{x}}, and lines of simultaneity in {{S'}} run parallel to {{x'}}.",
    ],
    misconceptions: [
      {
        wrong: "Heavier or wider cylinders always roll faster down a ramp than lighter or thinner ones.",
        right: "Mass {{m}} and radius {{R}} cancel completely in {{v = sqrt(2gh/(1 + c))}}. Only the **shape factor** {{c = I/(mR^2)}} determines speed—every solid cylinder ties every other solid cylinder!",
        level: "HL",
      },
      {
        wrong: "Static friction slows a rolling cylinder down by dissipating mechanical energy into heat.",
        right: "When rolling **without slipping**, the contact point has zero instantaneous velocity, so static friction does **zero work**. Mechanical energy is conserved—friction merely channels part of {{mgh}} into rotation.",
        level: "HL",
      },
      {
        wrong: "When an ice skater pulls her arms inward with no external torque, both angular momentum and rotational kinetic energy are conserved.",
        right: "Only angular momentum {{L = Iω}} is conserved. Because {{E_k = L^2/(2I)}}, decreasing {{I}} **increases** {{E_k}}—supplied by internal muscular work pulling the arms inward.",
        level: "HL",
      },
      {
        wrong: "A torque of 10 N m is the same physical quantity as 10 J of energy.",
        right: "Although both share base units kg m² s⁻², torque is a vector turning effect ({{F r sin θ}}) while work is scalar energy transfer ({{τ Δθ}}). Always write **N m** for torque and **J** for work.",
        level: "HL",
      },
      {
        wrong: "Proper time {{Δt_0}} always means the time measured by the 'stationary' observer on Earth.",
        right: "There is no absolute rest! Proper time is measured in whichever inertial frame has **one single clock present at BOTH events** (e.g. the clock on the moving spaceship or inside the muon).",
        level: "HL",
      },
      {
        wrong: "Length contraction shrinks a fast-moving spaceship uniformly in all three dimensions.",
        right: "Length contraction {{L = L_0 / γ}} applies **only parallel** to the direction of relative velocity. Width and height perpendicular to motion remain completely unchanged!",
        level: "HL",
      },
      {
        wrong: "If two spaceships approach each other at 0.8c relative to Earth, each sees the other approaching at 1.6c.",
        right: "In special relativity, velocities combine via {{u' = (u - v)/(1 - uv/c^2)}}, giving {{(0.8c + 0.8c)/(1 + 0.64) = 0.976c < c}}. Earth observes their separation closing at 1.6c, but neither ship measures the other exceeding {{c}}.",
        level: "HL",
      },
      {
        wrong: "To read the {{x'}} coordinate of an event on a Minkowski diagram, drop a vertical line straight down to the {{x'}}-axis.",
        right: "You must draw a line **parallel to the {{ct'}}-axis** to read {{x'}}, and **parallel to the {{x'}}-axis** to read {{ct'}}—never horizontally or vertically!",
        level: "HL",
      },
    ],
    examMistakes: [
      "Plugging angular speed in **rpm** or **degrees s⁻¹** directly into {{ω_f = ω_i + αt}} or {{E_k = (1/2)Iω^2}} without converting to rad s⁻¹.",
      "Forgetting the rotational kinetic energy term {{(1/2)Iω^2}} when a ball, hoop, or cylinder rolls down an incline—writing {{mgh = (1/2)mv^2}} instead of {{mgh = (1/2)mv^2 + (1/2)Iω^2}}.",
      "Using the wrong angle in {{τ = Fr sin θ}} (e.g. taking the angle with the vertical instead of the angle between **r** and **F**, or forgetting to double-check whether {{sin θ}} or {{cos θ}} gives the perpendicular component).",
      "Swapping {{Δt}} and {{Δt_0}} or {{L}} and {{L_0}}—forgetting that proper time is the **shortest** time while proper length is the **longest** length.",
      "Getting the sign of {{v}} backwards in Lorentz transformations {{x' = γ(x - vt)}} or velocity addition {{u' = (u - v)/(1 - uv/c^2)}}—especially when objects move in opposite directions.",
      "Forgetting to square {{v/c}} or forgetting the square root when calculating {{γ = 1/sqrt(1 - v^2/c^2)}}.",
      "Confusing the **closing speed** seen by a third-party lab observer ({{0.8c + 0.8c = 1.6c}}) with the **relative velocity** measured inside one spaceship's own rest frame.",
      "Drawing lines of simultaneity for frame {{S'}} horizontally instead of **parallel to the tilted {{x'}}-axis** on a Minkowski diagram.",
    ],
    mnemonics: [
      {
        topic: "Proper Time vs Proper Length",
        device: "Proper Time is TINY ({{Δt_0}} = min); Proper Length is LONG ({{L_0}} = max)",
        explanation:
          "Since {{γ >= 1}}, multiplying by {{γ}} makes dilated time bigger ({{Δt = γΔt_0}}) and dividing by {{γ}} makes contracted length smaller ({{L = L_0/γ}}). Never get {{×γ}} and {{/γ}} backwards again!",
        level: "HL",
      },
      {
        topic: "Rolling Race Winner Order",
        device: "Solid Sphere Beats Solid Cylinder Beats Hollow Sphere Beats Hoop (2/5 < 1/2 < 2/3 < 1)",
        explanation:
          "Think 'mass close to the heart wins the start': the closer the mass sits to the rotation axis, the smaller {{c = I/(mR^2)}} and the faster it accelerates down any slope.",
        level: "HL",
      },
      {
        topic: "Minkowski Axis Tilt Direction",
        device: "Positive {{+v}} Scissors Shut toward 45°",
        explanation:
          "When frame {{S'}} moves in the {{+x}} direction, both {{ct'}} and {{x'}} tilt **inward** toward the {{+45°}} light ray by {{θ = tan^(-1)(v/c)}}. If {{S'}} moves in {{-x}}, both tilt outward into the second/fourth quadrants by the same angle.",
        level: "HL",
      },
      {
        topic: "Linear-to-Rotational Translation Key",
        device: "{{m → I}}, {{F → τ}}, {{p → L}}, {{x → θ}}, {{v → ω}}, {{a → α}}",
        explanation:
          "Almost every A.4 equation is just an A.1–A.3 mechanics formula translated through this 6-symbol dictionary: {{F = ma}} becomes {{τ = Iα}}, {{p = mv}} becomes {{L = Iω}}, and {{(1/2)mv^2}} becomes {{(1/2)Iω^2}}.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        emoji: "🛰️",
        title: "GPS Satellites & Relativistic Clock Corrections",
        detail:
          "GPS satellites orbit at ~3.9 km s⁻¹, causing special-relativistic time dilation of −7 μs per day (alongside +45 μs/day from general relativity). Without relativistic corrections, GPS positions would drift by over 11 km every single day!",
      },
      {
        emoji: "⛸️",
        title: "Olympic Figure Skaters & Platform Divers",
        detail:
          "By pulling arms and legs close to their spin axis, divers slash their moment of inertia {{I}} by a factor of 3–4, tripling or quadrupling their angular speed {{ω}} mid-air to complete triple somersaults before opening out to stop spinning just before entry.",
      },
      {
        emoji: "🌌",
        title: "Millisecond Pulsars & Conservation of Angular Momentum",
        detail:
          "When a massive star collapses into a 20 km neutron star, its moment of inertia plummets by ten orders of magnitude, spinning it up to hundreds of revolutions per second purely by conservation of {{L = Iω}}.",
      },
      {
        emoji: "⚡",
        title: "CERN LHC Particle Lifetimes",
        detail:
          "Protons in the Large Hadron Collider reach {{0.999999991c}} ({{γ ≈ 7460}}). Unstable particles created in collisions live thousands of times longer in the lab frame, leaving measurable centimetre-long tracks in silicon detectors before decaying.",
      },
      {
        emoji: "🏎️",
        title: "Flywheel Energy Storage & Formula 1 KERS",
        detail:
          "High-speed carbon-fibre flywheels place mass near the outer rim (maximising {{I}}) and spin at tens of thousands of rpm to store megajoules of rotational kinetic energy {{(1/2)Iω^2}} for instant hybrid power recovery.",
      },
      {
        emoji: "🧲",
        title: "Magnetism as a Relativistic Effect of Electricity",
        detail:
          "A current-carrying wire that is electrically neutral in the lab frame acquires a tiny net charge density in a moving charge's rest frame due to differential length contraction of moving electrons vs stationary ions—giving rise to the magnetic force!",
      },
    ],
    videos: [
      {
        title: "IB Physics HL A.4 Rigid Body Mechanics — Full Topic Review",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=IB+Physics+A.4+rigid+body+mechanics+torque+moment+of+inertia",
      },
      {
        title: "IB Physics HL A.5 Special Relativity & Spacetime Diagrams",
        channel: "Chris Doner (IB Physics)",
        url: "https://www.youtube.com/results?search_query=Chris+Doner+IB+Physics+special+relativity+spacetime+diagrams",
      },
      {
        title: "Why No One Has Measured the Speed of Light / Special Relativity",
        channel: "Veritasium",
        url: "https://www.youtube.com/results?search_query=Veritasium+special+relativity+time+dilation+muons",
      },
      {
        title: "Lorentz Transformations & Minkowski Diagrams Visualised",
        channel: "MinutePhysics",
        url: "https://www.youtube.com/results?search_query=MinutePhysics+Lorentz+transformations+spacetime+globe",
      },
      {
        title: "Rolling Without Slipping & Moment of Inertia Explained",
        channel: "Michel van Biezen / Physics",
        url: "https://www.youtube.com/results?search_query=rolling+without+slipping+incline+moment+of+inertia+physics",
      },
    ],
    formulas: [
      {
        name: "Torque",
        formula: "{{τ = F r sin θ}}",
        note: "SI unit N m; {{θ}} is the angle between position vector **r** and force **F**.",
        level: "HL",
      },
      {
        name: "Linear–Angular Kinematic Links",
        formula: "{{s = rθ}},  {{v = rω}},  {{a = rα}},  {{ω = 2πf}}",
        note: "Angles {{θ}} MUST be in radians.",
        level: "HL",
      },
      {
        name: "Rotational SUVAT (Constant {{α}})",
        formula: "{{ω_f = ω_i + αt}},  {{Δθ = ω_i t + (1/2)αt^2}},  {{ω_f^2 = ω_i^2 + 2αΔθ}}",
        note: "Also {{Δθ = (1/2)(ω_i + ω_f)t}}.",
        level: "HL",
      },
      {
        name: "Moment of Inertia",
        formula: "{{I = Σ m_i r_i^2}}",
        note: "Unit kg m²; depends on axis of rotation.",
        level: "HL",
      },
      {
        name: "Newton's Second Law for Rotation",
        formula: "{{τ = Iα}}",
        note: "Net external torque equals moment of inertia times angular acceleration.",
        level: "HL",
      },
      {
        name: "Angular Momentum & Angular Impulse",
        formula: "{{L = Iω}},   {{ΔL = τ Δt}}",
        note: "Conserved ({{I_1 ω_1 = I_2 ω_2}}) whenever {{Στ_(ext) = 0}}.",
        level: "HL",
      },
      {
        name: "Rotational Kinetic Energy",
        formula: "{{E_(k,rot) = (1/2)Iω^2 = L^2 / (2I)}}",
        note: "Total rolling KE: {{E_k = (1/2)mv^2 + (1/2)Iω^2}} with {{v = Rω}}.",
        level: "HL",
      },
      {
        name: "Galilean Transformations",
        formula: "{{x' = x - vt}},  {{t' = t}},  {{u' = u - v}}",
        note: "Low-speed limit ({{v ≪ c}}) of Lorentz transformations.",
        level: "HL",
      },
      {
        name: "Lorentz Factor",
        formula: "{{γ = 1 / sqrt(1 - v^2 / c^2)}}",
        note: "Dimensionless, always {{γ >= 1}}.",
        level: "HL",
      },
      {
        name: "Time Dilation",
        formula: "{{Δt = γ Δt_0}}",
        note: "{{Δt_0}} is proper time (single clock present at both events; shortest time).",
        level: "HL",
      },
      {
        name: "Length Contraction",
        formula: "{{L = L_0 / γ}}",
        note: "{{L_0}} is proper length (rest frame; longest length). Parallel to **v** only.",
        level: "HL",
      },
      {
        name: "Lorentz Coordinate Transformations",
        formula: "{{x' = γ(x - vt)}},   {{t' = γ(t - (vx)/c^2)}}",
        note: "Also valid for intervals {{Δx'}} and {{Δt'}}; flip {{v → -v}} for inverse.",
        level: "HL",
      },
      {
        name: "Relativistic Velocity Addition",
        formula: "{{u' = (u - v) / (1 - (uv)/c^2)}}",
        note: "Inverse from {{S'}} to {{S}}: {{u = (u' + v) / (1 + (u'v)/c^2)}}.",
        level: "HL",
      },
      {
        name: "Invariant Spacetime Interval & Minkowski Axis Angle",
        formula: "{{(Δs)^2 = (cΔt)^2 - (Δx)^2}},   {{θ = tan^(-1)(v/c)}}",
        note: "{{(Δs)^2}} is identical in all inertial frames; {{θ}} is the tilt of {{ct'}} and {{x'}}.",
        level: "HL",
      },
    ],
  },
};
