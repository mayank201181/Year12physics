import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Right now, Earth's invisible gravitational field reaches {{384 000}} km out to keep the Moon in orbit, Earth's invisible magnetic field deflects {{500}} km s⁻¹ solar-wind protons towards the poles, and inside your phone's microchip, electric fields of millions of volts per metre switch billions of transistors every second — all obeying the exact same Theme D field laws.",
  didYouKnow: [
    "Because the electric force between two protons is roughly {{1.2 * 10^36}} times stronger than their gravitational attraction, if you stood {{1}} m from a friend and both of you carried just **1% more electrons than protons**, the electrostatic repulsion between you would be large enough to lift the entire weight of the Earth!",
    "The International Space Station loses about {{2}} km of altitude every month to wisps of upper-atmosphere drag — and as it sinks lower, it actually **speeds up** because half of its released gravitational potential energy converts into extra kinetic energy.",
    "At CERN's Large Hadron Collider, {{1232}} superconducting dipole magnets generate an {{8.3}} T magnetic field (over {{160 000}} times Earth's magnetic field) using {{11 850}} A of current cooled to {{1.9}} K — colder than deep outer space — just to bend {{6.8}} TeV protons around a {{27}} km ring.",
    "Using Kepler's Third Law ({{T^2 ∝ r^3}}) on stars orbiting Sagittarius A* at the centre of the Milky Way, astronomers Andrea Ghez and Reinhard Genzel weighed our galaxy's invisible central supermassive black hole at {{4.3 * 10^6}} solar masses — winning the 2020 Nobel Prize in Physics.",
    "A single lightning bolt transfers roughly {{15}} C of charge across a potential difference of {{10^8}} V — releasing over {{1.5}} GJ of electrical energy in a few milliseconds!",
    "The SI definition of the **ampere** used to be anchored directly to the magnetic force between two parallel wires: {{1}} A was the current that produced exactly {{2.0 * 10^(-7)}} N m⁻¹ between two infinite wires {{1}} m apart (now defined via the exact elementary charge {{e = 1.602176634 * 10^(-19)}} C).",
  ],
  activities: [
    {
      title: "Weigh Jupiter with Real Galilean Moon Data",
      emoji: "🪐",
      materials: [
        "Calculator or spreadsheet",
        "Orbital data for Io ({{r = 4.22 * 10^8}} m, {{T = 1.77}} d), Europa ({{6.71 * 10^8}} m, {{3.55}} d), Ganymede ({{1.07 * 10^9}} m, {{7.15}} d), Callisto ({{1.88 * 10^9}} m, {{16.69}} d)",
      ],
      steps: [
        "Convert each moon's orbital period {{T}} from days into seconds ({{* 86 400}}).",
        "Compute {{T^2}} and {{r^3}} for all four moons, then plot {{T^2}} (vertical) against {{r^3}} (horizontal).",
        "Verify that all four points lie on a razor-straight line through the origin, and measure its gradient {{m}}.",
        "Use {{m = (4 pi^2) / (G M_J)}} to solve for Jupiter's mass {{M_J}} and compare with the accepted {{1.90 * 10^27}} kg!",
      ],
      maths:
        "Linearizing Kepler's Third Law {{T^2 = ((4 pi^2) / (G M)) r^3}} is a classic IB Paper 1B and Physics IA technique: the gradient immediately yields the central mass {{M = (4 pi^2) / (G * m)}} without ever needing to touch the planet.",
    },
    {
      title: "Map Equipotentials & Field Lines with Conductive Paper",
      emoji: "🗺️",
      materials: [
        "Conductive carbon paper (Teledeltos paper) & silver-ink pen",
        "Low-voltage DC power supply ({{6}} V) and digital voltmeter",
        "Graph paper matching the conductive sheet coordinates",
      ],
      steps: [
        "Paint two parallel straight electrodes (or two circular dot electrodes for a dipole) onto the conductive paper and connect them to {{0}} V and {{+6}} V.",
        "Keep the black voltmeter probe fixed at the {{0}} V electrode and gently touch the red probe across the paper to locate ten points all reading exactly {{+1.0}} V, then {{+2.0}} V, {{+3.0}} V, {{+4.0}} V and {{+5.0}} V.",
        "Join equal-voltage points with smooth dashed curves — these are your **equipotential lines**.",
        "Now sketch solid field lines crossing every equipotential at {{90°}} from higher to lower voltage, and measure {{E = |ΔV / Δr|}} where the contours crowd closest together.",
      ],
      maths:
        "You directly verify {{E = -ΔV_e / Δr}} (HL): between parallel electrodes the equipotentials are equally spaced (uniform {{E = V / d}}), whereas around point electrodes they spread wider with distance as {{E ∝ 1 / r^2}}.",
    },
    {
      title: "Visualise Fleming's Left-Hand Rule with a Foil Swing",
      emoji: "⚡",
      materials: [
        "Strip of kitchen aluminium foil suspended as a loose U-loop",
        "Strong horseshoe magnet (or pair of neodymium magnets on an iron yoke)",
        "1.5 V AA battery with momentary switch (tap briefly only!)",
      ],
      steps: [
        "Hang the foil strip freely between the North and South poles of the magnet so the bottom segment crosses the magnetic field at {{90°}}.",
        "Note the directions of {{B}} (N → S) and conventional current {{I}} (+ terminal → − terminal) and predict which way the foil will kick using Fleming's left-hand rule.",
        "Tap the battery switch briefly for a fraction of a second and observe the foil jump cleanly out of or into the magnet gap.",
        "Reverse either the battery polarity OR the magnet poles (not both!) and confirm the kick reverses direction.",
      ],
      maths:
        "Directly demonstrates {{F = B I L sin θ}}: reversing either {{I}} or {{B}} flips the sign of the magnetic force, while reversing both leaves the direction unchanged.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Parallel vs Antiparallel Currents: Why Like Currents Attract",
      svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of parallel currents attracting and antiparallel currents repelling with magnetic field directions">
  <rect x="0" y="0" width="600" height="220" rx="14" fill="#0f172a"/>
  <text x="150" y="24" fill="#86efac" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Same Direction → ATTRACT</text>
  <text x="450" y="24" fill="#fca5a5" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Opposite Directions → REPEL</text>
  <line x1="300" y1="16" x2="300" y2="204" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 5"/>
  <!-- Left: Same direction (both UP) -->
  <line x1="95" y1="185" x2="95" y2="48" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
  <polygon points="95,42 88,56 102,56" fill="#facc15"/>
  <text x="72" y="122" fill="#fde047" font-size="13" font-weight="700" font-family="system-ui, sans-serif">I₁</text>
  <line x1="205" y1="185" x2="205" y2="48" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
  <polygon points="205,42 198,56 212,56" fill="#facc15"/>
  <text x="224" y="122" fill="#fde047" font-size="13" font-weight="700" font-family="system-ui, sans-serif">I₂</text>
  <!-- Attraction force arrows -->
  <line x1="103" y1="115" x2="140" y2="115" stroke="#4ade80" stroke-width="3"/>
  <polygon points="146,115 135,109 135,121" fill="#4ade80"/>
  <line x1="197" y1="115" x2="160" y2="115" stroke="#4ade80" stroke-width="3"/>
  <polygon points="154,115 165,109 165,121" fill="#4ade80"/>
  <text x="150" y="103" fill="#86efac" font-size="11.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">F</text>
  <text x="150" y="205" fill="#cbd5e1" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">B₁ into page at wire 2 → F₂ left</text>
  <!-- Right: Opposite directions (I1 up, I2 down) -->
  <line x1="395" y1="185" x2="395" y2="48" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
  <polygon points="395,42 388,56 402,56" fill="#facc15"/>
  <text x="412" y="82" fill="#fde047" font-size="13" font-weight="700" font-family="system-ui, sans-serif">I₁</text>
  <line x1="505" y1="48" x2="505" y2="185" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
  <polygon points="505,191 498,177 512,177" fill="#facc15"/>
  <text x="480" y="156" fill="#fde047" font-size="13" font-weight="700" font-family="system-ui, sans-serif">I₂</text>
  <!-- Repulsion force arrows -->
  <line x1="387" y1="115" x2="350" y2="115" stroke="#f87171" stroke-width="3"/>
  <polygon points="344,115 355,109 355,121" fill="#f87171"/>
  <line x1="513" y1="115" x2="550" y2="115" stroke="#f87171" stroke-width="3"/>
  <polygon points="556,115 545,109 545,121" fill="#f87171"/>
  <text x="355" y="103" fill="#fca5a5" font-size="11.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">F</text>
  <text x="545" y="103" fill="#fca5a5" font-size="11.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">F</text>
  <text x="450" y="205" fill="#cbd5e1" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">B₁ into page at wire 2 (I₂ down) → F₂ right</text>
</svg>`,
      caption:
        "Both interactions obey F/L = μ₀I₁I₂/(2πr) with equal-magnitude Newton 3rd-law forces: currents in the same direction attract, while opposite currents repel.",
    },
  ],
  history: {
    title: "From Kepler's Planetary Tables & Coulomb's Torsion Balance to CERN's LHC",
    story:
      "In 1619, after ten years of painstaking arithmetic on Tycho Brahe's naked-eye Mars observations, **Johannes Kepler** uncovered his Third Law ({{T^2 ∝ r^3}}) — a cosmic harmony whose hidden cause remained a mystery until **Isaac Newton** showed in 1687 that one universal inverse-square law of gravitation governs both a falling apple and the Moon's orbit. Nearly a century later, in 1785, French military engineer **Charles-Augustin de Coulomb** suspended a gilded pith ball from a hair-thin silver wire inside a glass torsion balance to measure tiny electrostatic pushes and pulls, discovering that electric charges obey the exact same {{1 / r^2}} geometry as gravity. In 1820 Hans Christian Ørsted noticed a compass needle twitch beside a live wire, linking electricity and magnetism forever — and Michael Faraday soon imagined space filled with invisible 'lines of force' (fields). Today, that four-century thread converges 100 metres beneath the Franco-Swiss border at **CERN's Large Hadron Collider**, where electric cavities accelerate protons to {{99.999999%}} the speed of light and {{1232}} superconducting dipole magnets bend them relentlessly along {{r = p / (q B)}} — turning Kepler, Coulomb and Faraday's field equations into humanity's sharpest microscope for probing the fabric of matter.",
  },
};
