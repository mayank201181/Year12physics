import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Every second, the Sun converts **4.3 million tonnes of matter** straight into starlight — yet it has been doing this so steadily for 4.6 billion years that it has lost less than 0.03% of its mass. Meanwhile, right here on Earth, a single fingernail-sized pellet of uranium dioxide carries the same energy as a whole tonne of coal. Both miracles come down to the exact same curve: binding energy per nucleon.",
  didYouKnow: [
    "Every second, roughly **65 billion solar neutrinos** produced by proton–proton fusion in the Sun's core pass straight through every square centimetre of your body — day and night, even straight through the solid Earth beneath Singapore!",
    "Bananas are naturally (and harmlessly!) radioactive: each banana contains trace potassium-40 ({{T_½ = 1.25 * 10^9}} yr), emitting roughly 15 β⁻ or γ decays every second — physicists jokingly measure tiny radiation doses in 'Banana Equivalent Doses'.",
    "Almost 2 billion years ago in Oklo, Gabon, a rich natural uranium deposit had ~3% ²³⁵U (today's enrichment level!) and groundwater acting as a natural moderator — creating **Earth's only known natural nuclear fission reactors**, which pulsed gently on and off for hundreds of thousands of years!",
    "A single teaspoon of **neutron star** material (collapsed beyond the Chandrasekhar limit) would weigh roughly **100 million tonnes** on Earth — about the mass of Mount Everest compressed into a sugar cube.",
    "Although Betelgeuse is ~600 light-years away, it is so colossal (~900 {{R_☉}}) that if it replaced our Sun, its glowing red photosphere would swallow Mercury, Venus, Earth, Mars, and reach out toward Jupiter's orbit!",
  ],
  activities: [
    {
      title: "Dice-Decay Exponential Lab (Simulate λ & ln N vs t)",
      emoji: "🎲",
      materials: [
        "100 small coins, M&Ms, or 6-sided dice",
        "A tray or flat desk",
        "Spreadsheet or graph paper & calculator",
      ],
      steps: [
        "Start with {{N_0 = 100}} dice (or coins) representing undecayed radioactive nuclei at throw {{t = 0}}.",
        "Roll all remaining dice together. Every die showing a **6** has 'decayed' — remove it and record the number of surviving dice *N*.",
        "Repeat for 15–20 throws until fewer than 5 dice remain.",
        "Plot *N* against throw number *t* to see the classic exponential curve, then plot {{ln N}} against *t* and draw a line of best fit.",
      ],
      maths:
        "Each throw gives every surviving die probability {{p = 1/6}} of decaying, so {{N(t) = N_0 (5/6)^t = N_0 e^(-λ t)}} with effective decay constant {{λ = -ln(5/6) ≈ 0.182}} per throw and theoretical half-life {{T_½ = ln(2) / 0.182 ≈ 3.80}} throws! Compare the negative gradient of your {{ln N}} vs *t* line with {{0.182}} — notice how random fluctuations grow larger when *N* becomes small!",
    },
    {
      title: "Thumb-Blink Stellar Parallax right at your desk",
      emoji: "👍",
      materials: [
        "Your thumb at arm's length",
        "A distant wall clock or window frame across the room",
        "A 30 cm ruler",
      ],
      steps: [
        "Hold your thumb straight out at arm's length and close your left eye; note which background feature on the far wall lines up with your thumb.",
        "Without moving your thumb, switch eyes (close right, open left) and observe how far your thumb appears to jump against the distant wall.",
        "Bring your thumb halfway closer to your nose and repeat — notice the apparent angular jump doubles!",
        "Measure the distance between your pupils (~6.5 cm — your mini '2 AU orbital baseline') and use similar triangles to estimate the angular shift {{2p}} in degrees and radians.",
      ],
      maths:
        "Your two eyes act like Earth in January and July (2 AU apart), your thumb is a nearby star, and the distant wall represents background galaxies. Halving the angular jump gives the parallax angle *p*, obeying {{d ∝ 1 / p}} — the exact geometry behind {{d = 1 / p}} in parsecs and arcseconds!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Two Cosmic Destinies: Stellar Mass Decides Everything",
      svg: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart comparing the stellar evolution of a Sun-like star below 8 solar masses versus a massive star above 8 solar masses">
  <rect x="0" y="0" width="640" height="240" rx="14" fill="var(--surface-2)"/>
  <!-- Left start node: Stellar Nebula -->
  <rect x="16" y="88" width="96" height="64" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="64" y="116" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">Molecular</text>
  <text x="64" y="132" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--brand)" text-anchor="middle">Cloud / Nebula</text>
  <!-- Split arrows -->
  <path d="M 112 106 L 148 64 L 166 64" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <polygon points="170,64 161,59 161,69" fill="var(--accent)"/>
  <path d="M 112 134 L 148 176 L 166 176" fill="none" stroke="var(--bad)" stroke-width="2.4"/>
  <polygon points="170,176 161,171 161,181" fill="var(--bad)"/>
  <!-- Top row: Low/Medium mass (< 8 M_sun) -->
  <text x="150" y="42" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="var(--warn)">M &lt; 8 M☉</text>
  <rect x="170" y="40" width="98" height="48" rx="8" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>
  <text x="219" y="61" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">Sun-like</text>
  <text x="219" y="76" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="middle">Main Sequence</text>
  <line x1="268" y1="64" x2="290" y2="64" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="294,64 286,59 286,69" fill="var(--accent)"/>
  <rect x="294" y="40" width="88" height="48" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.8"/>
  <text x="338" y="61" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--warn)" text-anchor="middle">Red Giant</text>
  <text x="338" y="76" font-family="system-ui, sans-serif" font-size="9.5" fill="var(--ink-2)" text-anchor="middle">He → C / O</text>
  <line x1="382" y1="64" x2="404" y2="64" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="408,64 400,59 400,69" fill="var(--accent)"/>
  <rect x="408" y="40" width="92" height="48" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="454" y="61" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--good)" text-anchor="middle">Planetary</text>
  <text x="454" y="76" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--good)" text-anchor="middle">Nebula</text>
  <line x1="500" y1="64" x2="520" y2="64" stroke="var(--info)" stroke-width="2"/>
  <polygon points="524,64 516,59 516,69" fill="var(--info)"/>
  <rect x="524" y="38" width="102" height="52" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="2"/>
  <text x="575" y="59" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--info)" text-anchor="middle">White Dwarf</text>
  <text x="575" y="74" font-family="system-ui, sans-serif" font-size="9" fill="var(--ink-2)" text-anchor="middle">e⁻ degen. (&lt;1.4 M☉)</text>

  <!-- Bottom row: High mass (> 8 M_sun) -->
  <text x="150" y="216" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="var(--bad)">M &gt; 8 M☉</text>
  <rect x="170" y="152" width="98" height="48" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="219" y="173" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">Massive Blue</text>
  <text x="219" y="188" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="middle">Main Sequence</text>
  <line x1="268" y1="176" x2="290" y2="176" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="294,176 286,171 286,181" fill="var(--bad)"/>
  <rect x="294" y="152" width="88" height="48" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="338" y="173" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--bad)" text-anchor="middle">Supergiant</text>
  <text x="338" y="188" font-family="system-ui, sans-serif" font-size="9.5" fill="var(--ink-2)" text-anchor="middle">Shells → ⁵⁶Fe</text>
  <line x1="382" y1="176" x2="404" y2="176" stroke="var(--bad)" stroke-width="2"/>
  <polygon points="408,176 400,171 400,181" fill="var(--bad)"/>
  <rect x="408" y="152" width="92" height="48" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>
  <text x="454" y="173" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--bad)" text-anchor="middle">Type II</text>
  <text x="454" y="188" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--bad)" text-anchor="middle">Supernova</text>
  <line x1="500" y1="176" x2="520" y2="176" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="524,176 516,171 516,181" fill="var(--ink)"/>
  <rect x="524" y="148" width="102" height="56" rx="8" fill="var(--ink)" stroke="var(--ink)" stroke-width="1.5"/>
  <text x="575" y="170" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--surface)" text-anchor="middle">Neutron Star</text>
  <text x="575" y="184" font-family="system-ui, sans-serif" font-size="9.5" fill="var(--surface)" text-anchor="middle">or Black Hole</text>
  <text x="575" y="197" font-family="system-ui, sans-serif" font-size="8.5" fill="var(--accent)" text-anchor="middle">n degen. / collapse</text>
</svg>`,
      caption:
        "Initial mass determines a star's entire evolutionary track and final compact remnant — separated around ~8 M☉ on the main sequence and ~1.4 M☉ (Chandrasekhar limit) for the collapsing core.",
    },
  ],
  history: {
    title: "Three Breakthroughs That Unlocked the Nucleus and the Stars",
    story:
      "Three of the boldest breakthroughs in Topic E came from physicists whose insights initially stunned the scientific establishment.\n\n**1. Cecilia Payne-Gaposchkin (1925):** While writing her Harvard PhD thesis at age 25, Cecilia Payne applied newly developed quantum ionization physics to stellar absorption spectra and proved that stars are NOT made of the same rocky metals as Earth — instead, the Sun and stars are overwhelmingly **hydrogen and helium** (over 98% by atom count). Senior astronomer Henry Norris Russell initially urged her to downplay her 'almost certainly not real' result, before confirming four years later that she had been completely right — laying the foundation for stellar nuclear fusion.\n\n**2. Subrahmanyan Chandrasekhar (1930):** On a 19-day steamship voyage from Madras (Chennai) to Cambridge at just 19 years old, 'Chandra' combined special relativity with quantum electron degeneracy pressure to calculate the maximum mass a white dwarf can sustain against gravity: **~1.4 solar masses**. Famous astrophysicist Arthur Eddington publicly ridiculed the result, insisting nature would prevent runaway gravitational collapse. Decades later, observations of Type Ia supernovae, neutron stars, and black holes vindicated Chandrasekhar completely, earning him the 1983 Nobel Prize in Physics.\n\n**3. Lise Meitner (Christmas 1938):** Forced to flee Nazi Berlin for Sweden, Austrian-Jewish physicist Lise Meitner received a bewildered letter from chemist Otto Hahn: bombarding uranium with slow neutrons had unexpectedly produced *barium*! Walking through the snow in Kungälv with her nephew Otto Frisch, Meitner sat on a tree trunk, pictured the uranium nucleus as an oscillating liquid drop tearing cleanly in two, and calculated the missing mass on scraps of paper using {{E = Δm c^2}} — predicting **~200 MeV per split**, naming the process **nuclear fission**, and ushering in the atomic age. Though Hahn alone received the 1944 Nobel Prize, element 109 — **meitnerium (Mt)** — honours her brilliance forever.",
  },
};
