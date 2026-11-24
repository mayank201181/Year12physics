import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "e2-nuclear-stars",
  title: "E.3–E.5 Radioactive Decay, Fission, Fusion & Stars",
  strand: "Theme E: Nuclear & Quantum Physics",
  icon: "⭐",
  level: "SL",
  summary:
    "Binding energy and nuclear stability, α/β/γ radioactive decay, HL exponential decay laws and neutrino evidence, induced nuclear fission and reactors, stellar nuclear fusion, parallax, luminosity and the Hertzsprung–Russell diagram.",
  intro:
    "Every joule of sunlight warming Singapore and every megawatt from a nuclear power station comes from the same equation: {{E = mc^2}}. When nucleons bind more tightly together, a tiny fraction of mass vanishes and emerges as enormous kinetic and radiant energy. In this topic you will track that missing mass from the binding-energy curve through spontaneous radioactive decay (with the HL exponential calculus and neutrino discovery), into controlled U-235 fission reactors, and finally outward to the cores of stars — learning how astronomers read a star's distance, temperature, radius and entire life story from a single pinpoint of light.",
  guide: [
    // =========================================================================
    // SECTION 1: E.3 Mass Defect, Binding Energy & Radioactive Decay [SL]
    // =========================================================================
    {
      id: "binding-energy-decay",
      heading: "E.3 Mass Defect, Binding Energy & Radioactive Decay",
      level: "SL",
      discovery: {
        problem:
          "Take two free protons (each {{1.00728}} u) and two free neutrons (each {{1.00867}} u) and assemble them into a helium-4 nucleus ({{4.00151}} u). Add up the masses of the four separate building blocks and compare the total with the finished nucleus. Where did the missing {{0.03039}} u go — and why does a helium-4 nucleus NOT fall apart into four free nucleons?",
        idea:
          "The assembled nucleus weighs LESS than its separated parts! To tear the helium-4 nucleus apart you would have to supply work equal to {{Δm c^2 ≈ 28.3}} MeV — its **binding energy**. Conversely, when separate nucleons fuse into helium-4, {{28.3}} MeV of energy is released, leaving the nucleus trapped in a deep energy well.",
      },
      body: `### Nuclide Notation, Isotopes & Nuclear Forces
A nuclide is written as **ᴬ_Z X**, where **Z** is the proton (atomic) number, **A** is the nucleon (mass) number, and **N = A − Z** is the neutron number. **Isotopes** are nuclides of the same element (same Z, identical chemical behaviour) with different neutron numbers N (different nuclear stability and mass).

Inside a nucleus (~{{10^(-15)}} m across), two forces compete:
- **Electrostatic (Coulomb) repulsion** between positively charged protons — **long-range** (acts across the entire nucleus).
- **Strong nuclear force** between all adjacent nucleons (p–p, n–n, p–n) — overwhelmingly attractive at ~{{1–2}} fm, repulsive below ~{{0.5}} fm, and **very short-range** (drops to zero beyond ~{{3}} fm).

For light stable nuclei (Z ≤ 20), **N ≈ Z**. As Z grows larger, every proton repels *every other* proton across the whole nucleus, whereas each nucleon only feels the strong force from its immediate neighbours. Heavy stable nuclei therefore require extra neutrons (**N > Z**) to add strong-force "glue" without adding electrostatic repulsion. Beyond Z = 82 (lead), no stable nuclei exist.

### Mass Defect & Binding Energy
The **mass defect** {{Δm}} is the difference between the total mass of the separated nucleons and the mass of the bound nucleus:
{{Δm = Z m_p + (A - Z) m_n - m_nucleus}}

By Einstein's mass–energy equivalence {{E = Δm c^2}}, the **nuclear binding energy** {{E_B}} is the minimum work required to completely separate a nucleus into its constituent nucleons at infinity (equivalently, the energy released when the nucleus is assembled from free nucleons). In nuclear physics, masses are given in unified atomic mass units (**1 u = {{1.661 * 10^(-27)}} kg**) with the IB Data Booklet conversion:
**1 u corresponds to {{931.5}} MeV** (so {{1 u = 931.5}} MeV c⁻², and {{1 MeV = 1.60 * 10^(-13)}} J).

Nuclear stability is measured not by total binding energy, but by **binding energy per nucleon** ({{E_B / A}}):
- It rises steeply from hydrogen to a sharp local peak at **⁴He** (~7.1 MeV/nucleon), explaining why α-particles are emitted as tightly bound clusters.
- It peaks broadly around **⁵⁶Fe** (8.79 MeV/nucleon) and **⁶²Ni** (8.795 MeV/nucleon) — the most tightly bound, most stable nuclei.
- **Fusion** of light nuclei (left of Fe-56) and **fission** of heavy nuclei (right of Fe-56) both move products *upward* toward the peak: products have higher {{E_B / A}} (less mass per nucleon), so the difference in total binding energy is released!

### Radioactive Decay Modes (α, β⁻, β⁺, γ) & Half-Life
Unstable nuclei decay **spontaneously** (unaffected by temperature, pressure, or chemical bonding) and **randomly** (impossible to predict when any single nucleus will decay). Every nuclear equation conserves **nucleon number A**, **charge Z**, **mass–energy**, **momentum**, and **lepton number**:

| Decay | Particle emitted | Equation change | Why it occurs | Ionizing / Penetrating power |
|---|---|---|---|---|
| **Alpha (α)** | ⁴₂He nucleus | A → A − 4, Z → Z − 2 | Nucleus too heavy (Z > 82) | Very strong / stopped by paper or ~5 cm air |
| **Beta-minus (β⁻)** | Electron e⁻ + electron antineutrino ν̄_e | A unchanged, Z → Z + 1 | Too neutron-rich (n → p + e⁻ + ν̄_e) | Moderate / stopped by few mm Al |
| **Beta-plus (β⁺)** | Positron e⁺ + electron neutrino ν_e | A unchanged, Z → Z − 1 | Too proton-rich (p → n + e⁺ + ν_e) | Moderate / annihilates with e⁻ → 2γ |
| **Gamma (γ)** | High-energy photon | A and Z unchanged | Excited daughter nucleus drops to ground state | Weak / reduced by thick Pb or concrete |

The **half-life** T_½ is the average time taken for half of the undecayed radioactive nuclei in a sample to decay (equivalently, for the **corrected** activity or count rate to halve). After *n* half-lives, the fraction remaining is {{(1/2)^n}}. Always subtract the **background radiation** count rate (from cosmic rays, radon gas, rocks, medical sources) *before* applying halving, and add it back at the end if asked for the detector reading.`,
      diagram: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Binding energy per nucleon versus nucleon number A curve peaking at iron-56, showing fusion on the left and fission on the right">
  <rect x="0" y="0" width="640" height="340" rx="14" fill="var(--surface-2)"/>
  <!-- Grid & Axes -->
  <g stroke="var(--line)" stroke-width="1">
    <line x1="76" y1="280" x2="600" y2="280"/>
    <line x1="76" y1="230" x2="600" y2="230" stroke-dasharray="4 4"/>
    <line x1="76" y1="180" x2="600" y2="180" stroke-dasharray="4 4"/>
    <line x1="76" y1="130" x2="600" y2="130" stroke-dasharray="4 4"/>
    <line x1="76" y1="80" x2="600" y2="80" stroke-dasharray="4 4"/>
    <line x1="76" y1="30" x2="600" y2="30" stroke-dasharray="4 4"/>
  </g>
  <!-- Axes arrows -->
  <line x1="76" y1="286" x2="76" y2="22" stroke="var(--ink)" stroke-width="2"/>
  <line x1="70" y1="280" x2="608" y2="280" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="76,18 71,28 81,28" fill="var(--ink)"/>
  <polygon points="614,280 604,275 604,285" fill="var(--ink)"/>
  <!-- Y-axis ticks & labels -->
  <g font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)" text-anchor="end">
    <text x="68" y="284">0</text>
    <text x="68" y="234">2</text>
    <text x="68" y="184">4</text>
    <text x="68" y="134">6</text>
    <text x="68" y="84">8</text>
    <text x="68" y="34">10</text>
  </g>
  <text x="20" y="155" transform="rotate(-90 20 155)" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Binding energy per nucleon (MeV)</text>
  <!-- X-axis ticks & labels (A from 0 to 250 -> x = 76 + A * 2.08) -->
  <g font-family="system-ui, sans-serif" font-size="11" fill="var(--ink-2)" text-anchor="middle">
    <text x="76" y="298">0</text>
    <text x="180" y="298">50</text>
    <text x="284" y="298">100</text>
    <text x="388" y="298">150</text>
    <text x="492" y="298">200</text>
    <text x="596" y="298">250</text>
  </g>
  <text x="338" y="324" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Nucleon number, A</text>
  <!-- Vertical dashed line at Fe-56 (A=56 -> x=192.5, y=60.2) -->
  <line x1="192" y1="60" x2="192" y2="280" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- Shaded regions labels -->
  <rect x="92" y="220" width="90" height="44" rx="8" fill="var(--good-soft)" opacity="0.9"/>
  <text x="137" y="238" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--good)" text-anchor="middle">FUSION</text>
  <text x="137" y="253" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="middle">Light → heavier</text>
  <rect x="330" y="138" width="136" height="44" rx="8" fill="var(--bad-soft)" opacity="0.9"/>
  <text x="398" y="156" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--bad)" text-anchor="middle">FISSION</text>
  <text x="398" y="171" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="middle">Heavy → medium fragments</text>
  <!-- Curve: H-2(80,252), He-4(84,103), Li-6(89,146), C-12(101,88), O-16(109,81), Fe-56(192,60), Ni-62(205,60), Kr-92(267,67), Ba-141(369,72), U-235(565,90) -->
  <path d="M 80 252 L 84 103 L 89 146 L 101 88 L 109 81 C 132 72, 165 61, 192 60 C 235 60, 310 66, 390 73 C 460 80, 520 85, 578 92" fill="none" stroke="var(--brand)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Arrows showing direction toward stability peak -->
  <path d="M 108 195 Q 130 140 166 90" fill="none" stroke="var(--good)" stroke-width="2.4"/>
  <polygon points="170,84 160,89 168,95" fill="var(--good)"/>
  <path d="M 540 120 Q 410 100 245 80" fill="none" stroke="var(--bad)" stroke-width="2.4"/>
  <polygon points="237,79 247,85 248,75" fill="var(--bad)"/>
  <!-- Key nuclide markers -->
  <circle cx="80" cy="252" r="4" fill="var(--brand)"/>
  <text x="89" y="256" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--ink)">²H</text>
  <circle cx="84" cy="103" r="4.5" fill="var(--good)"/>
  <text x="92" y="101" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--good)">⁴He (7.08)</text>
  <circle cx="192" cy="60" r="5.5" fill="var(--accent)" stroke="var(--ink)" stroke-width="1.2"/>
  <text x="200" y="45" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink)">⁵⁶Fe / ⁶²Ni peak (≈8.8 MeV)</text>
  <circle cx="565" cy="90" r="5" fill="var(--bad)"/>
  <text x="565" y="77" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--bad)" text-anchor="middle">²³⁵U (7.59)</text>
</svg>`,
      diagramCaption:
        "Binding energy per nucleon versus nucleon number A. Moving upward toward the Fe-56 / Ni-62 peak increases binding energy per nucleon and releases nuclear energy — via fusion on the steep left slope and fission on the gentler right slope.",
      workedExamples: [
        {
          title: "Mass Defect & Binding Energy per Nucleon of Helium-4",
          problem:
            "A helium-4 nucleus (⁴₂He) has nuclear mass {{4.00151}} u. Given {{m_p = 1.00728}} u and {{m_n = 1.00867}} u, calculate (a) the mass defect in u, (b) the total binding energy in MeV, and (c) the binding energy per nucleon.",
          steps: [
            "Count nucleons: Z = 2 protons and N = 4 − 2 = 2 neutrons.",
            "Total mass of separated nucleons = {{2(1.00728) + 2(1.00867) = 2.01456 + 2.01734 = 4.03190}} u.",
            "Mass defect: {{Δm = 4.03190 - 4.00151 = 0.03039}} u.",
            "Convert mass defect to energy using {{1 u = 931.5}} MeV c⁻²: {{E_B = 0.03039 * 931.5 = 28.31}} MeV ≈ {{28.3}} MeV.",
            "Divide by A = 4 nucleons: {{E_B / A = 28.31 / 4 = 7.08}} MeV nucleon⁻¹.",
          ],
          answer: "{{Δm = 0.03039}} u; {{E_B = 28.3}} MeV; {{E_B / A = 7.08}} MeV nucleon⁻¹",
          yourTurn: {
            question:
              "A deuterium nucleus (²₁H) has nuclear mass {{2.01355}} u. Using {{m_p = 1.00728}} u, {{m_n = 1.00867}} u and {{1 u = 931.5}} MeV c⁻², calculate its total binding energy in MeV to 3 significant figures.",
            answer: { type: "number", value: 2.24, tolerance: 0.02, display: "2.24 MeV" },
            solution:
              "{{Δm = (1.00728 + 1.00867) - 2.01355 = 0.00240}} u. Then {{E_B = 0.00240 * 931.5 = 2.2356 ≈ 2.24}} MeV.",
          },
        },
        {
          title: "Half-Life with Background Radiation",
          problem:
            "A Geiger–Müller (GM) tube placed near a radioactive sample records {{340}} counts s⁻¹. With the sample removed, the background count rate is {{20}} counts s⁻¹. The source has a half-life of {{12}} hours. Predict the GM tube reading {{36}} hours later.",
          steps: [
            "Subtract background first to get the true source count rate: {{C_0 = 340 - 20 = 320}} s⁻¹.",
            "Find the number of half-lives elapsed: {{n = 36 / 12 = 3}}.",
            "Halve the source count rate 3 times: {{C = 320 / 2^3 = 320 / 8 = 40}} s⁻¹.",
            "Add background back because the GM tube measures source + background: {{40 + 20 = 60}} counts s⁻¹.",
          ],
          answer: "{{60}} counts s⁻¹",
          yourTurn: {
            question:
              "A GM tube records {{175}} counts min⁻¹ near a source of half-life {{6.0}} hours, while background is {{15}} counts min⁻¹. Calculate the total count rate (in counts min⁻¹) recorded {{24}} hours later.",
            answer: { type: "number", value: 25 },
            solution:
              "Corrected initial rate = {{175 - 15 = 160}} min⁻¹. Elapsed half-lives = {{24 / 6.0 = 4}}. Remaining source rate = {{160 / 16 = 10}} min⁻¹. Adding background gives {{10 + 15 = 25}} counts min⁻¹.",
          },
        },
      ],
      keyPoints: [
        "Binding energy is NOT energy 'stored inside' the nucleus waiting to come out — it is the energy *missing* from the nucleus, equal to the work required to split it into free nucleons.",
        "Higher binding energy per nucleon ({{E_B / A}}) means a MORE stable nucleus and LOWER mass per nucleon.",
        "Always check nuclear vs atomic masses: if atomic masses are given, electron masses cancel automatically in {{Z m_H + (A - Z) m_n - m_atom}}.",
        "In β⁻ decay, a neutron transforms into a proton, an electron and an **electron antineutrino** (ν̄_e); in β⁺ decay, a proton transforms into a neutron, a positron and an **electron neutrino** (ν_e).",
        "Always subtract background count rate *before* halving, and add it back *after* halving if asked for the measured detector reading.",
      ],
      whyItWorks:
        "Why does binding energy per nucleon flatten and then gently decrease above A ≈ 60? Because the strong nuclear force saturates! Its range is only ~2–3 fm, so each nucleon only pulls on its immediate neighbours regardless of how huge the nucleus gets — contributing roughly a constant binding energy per nucleon. Meanwhile, the electrostatic repulsion between protons is infinite-range: every new proton repels ALL Z − 1 other protons, growing roughly as {{Z^2 / R ∝ Z^2 / A^(1/3)}}. Above Fe-56, that cumulative Coulomb penalty gradually reduces the net binding energy per nucleon.",
      strategies: [
        "Keep at least 5 decimal places for atomic masses in u until the very final step: mass defects are tiny (~0.01 u), so premature rounding destroys accuracy!",
        "Check reaction energy release two equivalent ways: {{Q = (m_reactants - m_products) c^2}} OR {{Q = Σ E_(B,products) - Σ E_(B,reactants)}} — note the opposite order of subtraction!",
        "Use a quick halving table ({{t = 0, T_½, 2T_½, 3T_½ ...}}) on SL half-life questions rather than guessing exponentials.",
      ],
      thinkDeeper:
        "Notice how much steeper the binding-energy curve is on the left (fusion) than on the right (fission). Fusing four protons into ⁴He releases ~6.7 MeV per nucleon (~0.7% of rest mass), whereas fissioning ²³⁵U releases only ~0.85 MeV per nucleon (~0.09% of rest mass). Why is fusion almost 8× more energy-dense per kilogram of fuel than fission, yet far harder to achieve on Earth?",
    },

    // =========================================================================
    // SECTION 2: E.3 Exponential Decay Law, Decay Constant & Neutrino Evidence [HL]
    // =========================================================================
    {
      id: "decay-law-hl",
      heading: "E.3 Exponential Decay Law, Decay Constant & Neutrino Evidence",
      level: "HL",
      discovery: {
        problem:
          "Imagine rolling 600 six-sided dice and removing every die that lands on a 6. In the first roll you expect ~100 dice to vanish; when only 60 dice remain, you expect only ~10 to vanish. Why does the rate of disappearance shrink in exact proportion to the number remaining — and what constant ratio links the decay rate to the surviving population?",
        idea:
          "Because every undecayed nucleus has the **exact same probability per unit time** (the decay constant {{λ}}) of decaying, completely independent of its age or neighbours. Thus the decay rate {{A = -dN/dt = λ N}}, whose unique solution is exponential decay: {{N(t) = N_0 e^(-λ t)}}.",
      },
      body: `### The Decay Constant λ & Exponential Decay Law [HL]
The **decay constant** {{λ}} (unit: s⁻¹, or min⁻¹, day⁻¹, yr⁻¹) is the **probability of decay of a single nucleus per unit time** (for a short time interval {{Δt}}).

Because decays are independent and random, for a large sample of *N* undecayed nuclei, the **activity** *A* (number of decays per second, unit: **becquerel, 1 Bq = 1 decay s⁻¹**) is directly proportional to *N*:
{{A = - dN / dt = λ N}}

Integrating from {{N_0}} at {{t = 0}} yields the exponential decay laws:
{{N = N_0 e^(-λ t)}}   and   {{A = A_0 e^(-λ t) = λ N_0 e^(-λ t)}}

Setting {{N = N_0 / 2}} at {{t = T_½}} gives the exact link between half-life and decay constant:
{{1/2 = e^(-λ T_½) => ln(2) = λ T_½ => T_½ = ln(2) / λ}}

Make sure the time units of {{λ}} and *t* match! When computing activity in **Bq (s⁻¹)** from {{A = λ N}}, {{λ}} MUST be in **s⁻¹**. However, inside the dimensionless exponent {{λ t}}, any consistent unit pair (e.g. hours⁻¹ and hours, or years⁻¹ and years) works cleanly.

### Linearizing Decay Data & Measuring Extreme Half-Lives [HL]
Taking natural logarithms of {{A = A_0 e^(-λ t)}} produces a straight-line equation of the form {{y = c + m x}}:
{{ln(A) = ln(A_0) - λ t}}
- **y-intercept** = {{ln(A_0)}}
- **gradient** = {{ -λ }} (always negative; remember to drop the minus sign when quoting the positive decay constant {{λ}}!)

How do physicists measure half-lives that are billions of years long (like ²³⁸U, {{T_½ = 4.5 * 10^9}} yr)? You cannot wait for the activity to halve! Instead, weigh a pure sample to find *N* via Avogadro's constant ({{N = (m / M) N_A}}), measure its current activity *A* with a calibrated detector, compute {{λ = A / N}}, and finally obtain {{T_½ = ln(2) / λ}}. Conversely, for short half-lives (seconds to days), plot {{ln(A)}} vs *t* directly and extract {{λ = -(gradient)}}.

### Evidence for Discrete Nuclear Levels & The Neutrino [HL]
Spectroscopy of emitted radiation reveals deep nuclear structure:
1. **Discrete α and γ spectra:** Every α-particle from a given transition carries the **exact same kinetic energy** (with the heavy daughter recoiling slightly to conserve momentum), and γ-photons appear only at sharp, discrete energies. Just like atomic line spectra, this proves **nuclei possess discrete, quantized energy levels**.
2. **Continuous β-energy spectrum (evidence for the neutrino):** In a two-body decay, conservation of energy and momentum would force every β⁻ electron to emerge with one single fixed kinetic energy {{E_max}}. Experimentally, however, β⁻ electrons emerge with a **continuous range of kinetic energies from 0 up to {{E_max}}**! In 1930 Wolfgang Pauli proposed that a third, nearly massless, electrically neutral particle — the **electron antineutrino** (ν̄_e in β⁻; electron neutrino ν_e in β⁺) — carries away the missing energy, momentum, and spin so that {{E_β + E_ν ≈ E_max}}.`,
      diagram: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-panel HL decay diagram showing exponential N versus t decay, linearized ln A versus t with gradient minus lambda, and discrete alpha versus continuous beta energy spectrum">
  <rect x="0" y="0" width="640" height="320" rx="14" fill="var(--surface-2)"/>
  <!-- Panel 1: N(t) exponential -->
  <rect x="14" y="16" width="194" height="288" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="111" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">1. Exponential Decay</text>
  <line x1="44" y1="252" x2="44" y2="56" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="40" y1="248" x2="196" y2="248" stroke="var(--ink)" stroke-width="1.6"/>
  <!-- Half-life guide dashes -->
  <g stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3">
    <line x1="44" y1="164" x2="90" y2="164"/>
    <line x1="90" y1="164" x2="90" y2="248"/>
    <line x1="44" y1="206" x2="136" y2="206"/>
    <line x1="136" y1="206" x2="136" y2="248"/>
    <line x1="44" y1="227" x2="182" y2="227"/>
    <line x1="182" y1="227" x2="182" y2="248"/>
  </g>
  <!-- Exponential curve: y = 248 - 168 * 2^(-(x-44)/46) -->
  <path d="M 44 80 C 60 120, 74 146, 90 164 C 108 184, 120 196, 136 206 C 154 217, 168 223, 188 229" fill="none" stroke="var(--brand)" stroke-width="2.8"/>
  <circle cx="44" cy="80" r="3.5" fill="var(--brand)"/>
  <circle cx="90" cy="164" r="3.5" fill="var(--brand)"/>
  <circle cx="136" cy="206" r="3.5" fill="var(--brand)"/>
  <circle cx="182" cy="227" r="3.5" fill="var(--brand)"/>
  <g font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)">
    <text x="39" y="84" text-anchor="end">N₀</text>
    <text x="39" y="167" text-anchor="end">½N₀</text>
    <text x="39" y="209" text-anchor="end">¼N₀</text>
    <text x="90" y="263" text-anchor="middle">T½</text>
    <text x="136" y="263" text-anchor="middle">2T½</text>
    <text x="182" y="263" text-anchor="middle">3T½</text>
  </g>
  <text x="115" y="287" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--brand)" text-anchor="middle">N = N₀ e⁻λᵗ</text>

  <!-- Panel 2: ln A vs t -->
  <rect x="223" y="16" width="194" height="288" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="320" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">2. Linearized ln A vs t</text>
  <line x1="256" y1="252" x2="256" y2="56" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="252" y1="248" x2="404" y2="248" stroke="var(--ink)" stroke-width="1.6"/>
  <!-- Straight line -->
  <line x1="256" y1="84" x2="394" y2="226" stroke="var(--good)" stroke-width="2.8"/>
  <!-- Gradient triangle -->
  <path d="M 294 123 L 294 185 L 354 185" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="290" y="158" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--accent)" text-anchor="end">Δ(ln A)</text>
  <text x="324" y="199" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--accent)" text-anchor="middle">Δt</text>
  <circle cx="256" cy="84" r="3.5" fill="var(--good)"/>
  <text x="262" y="79" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--ink)">ln A₀</text>
  <text x="249" y="64" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="end">ln A</text>
  <text x="401" y="263" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="end">t</text>
  <text x="320" y="287" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="var(--good)" text-anchor="middle">gradient = −λ</text>

  <!-- Panel 3: Beta continuous vs Alpha discrete -->
  <rect x="432" y="16" width="194" height="288" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2"/>
  <text x="529" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--ink)" text-anchor="middle">3. β⁻ vs α Energy Spectra</text>
  <line x1="462" y1="252" x2="462" y2="56" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="458" y1="248" x2="614" y2="248" stroke="var(--ink)" stroke-width="1.6"/>
  <!-- Continuous beta curve filled -->
  <path d="M 462 248 C 474 140, 496 96, 514 114 C 532 132, 554 205, 578 248 Z" fill="var(--bad-soft)" opacity="0.75"/>
  <path d="M 462 248 C 474 140, 496 96, 514 114 C 532 132, 554 205, 578 248" fill="none" stroke="var(--bad)" stroke-width="2.6"/>
  <!-- Discrete alpha spike -->
  <line x1="598" y1="248" x2="598" y2="86" stroke="var(--brand)" stroke-width="3"/>
  <text x="515" y="102" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--bad)" text-anchor="middle">β⁻ (continuous)</text>
  <text x="598" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--brand)" text-anchor="middle">α (discrete)</text>
  <text x="578" y="263" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--bad)" text-anchor="middle">Emax</text>
  <text x="529" y="278" font-family="system-ui, sans-serif" font-size="10" fill="var(--ink-2)" text-anchor="middle">Kinetic energy, Ek</text>
  <text x="529" y="294" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--bad)" text-anchor="middle">Missing E carried by ν̄ₑ</text>
</svg>`,
      diagramCaption:
        "HL decay analysis: (1) exponential fall-off in N(t), (2) linearizing ln A against t gives gradient −λ and y-intercept ln A₀, and (3) the continuous β⁻ kinetic energy spectrum proves a third particle (the antineutrino) shares the decay energy.",
      workedExamples: [
        {
          title: "Decay Constant, Initial Activity & Activity at Non-Integer Half-Lives [HL]",
          problem:
            "A medical sample of iodine-131 ({{T_½ = 8.02}} days) initially contains {{N_0 = 4.00 * 10^15}} nuclei. Calculate (a) the decay constant {{λ}} in s⁻¹, (b) the initial activity {{A_0}} in Bq, and (c) the activity after {{20.0}} days.",
          steps: [
            "Convert half-life to seconds: {{T_½ = 8.02 * 24 * 3600 = 6.929 * 10^5}} s.",
            "Decay constant: {{λ = ln(2) / T_½ = 0.69315 / (6.929 * 10^5) = 1.00 * 10^(-6)}} s⁻¹.",
            "Initial activity: {{A_0 = λ N_0 = (1.000 * 10^(-6))(4.00 * 10^15) = 4.00 * 10^9}} Bq (4.00 GBq).",
            "For t = 20.0 days, keep consistent units in the exponent: {{λ t = ln(2) * (20.0 / 8.02) = 1.7285}}.",
            "{{A = A_0 e^(-1.7285) = (4.00 * 10^9)(0.1775) = 7.10 * 10^8}} Bq.",
          ],
          answer: "{{λ = 1.00 * 10^(-6)}} s⁻¹; {{A_0 = 4.00 * 10^9}} Bq; {{A(20 d) = 7.10 * 10^8}} Bq",
          yourTurn: {
            question:
              "A radioactive isotope has decay constant {{λ = 0.0350}} h⁻¹ and initial activity {{800}} Bq. Calculate its activity in Bq after {{40.0}} hours (give your answer to 3 s.f.).",
            answer: { type: "number", value: 197, tolerance: 1.5, display: "197 Bq" },
            solution:
              "{{λ t = 0.0350 * 40.0 = 1.40}}. Thus {{A = 800 * e^(-1.40) = 800 * 0.2466 = 197}} Bq.",
          },
        },
        {
          title: "Extracting λ and Half-Life from a Linearized ln A vs t Graph [HL]",
          problem:
            "A student plots {{ln(A / Bq)}} against time *t* (in minutes) and obtains a best-fit straight line passing through (0, 6.91) and (50.0, 4.41). Determine the decay constant {{λ}} (in min⁻¹) and the half-life {{T_½}} (in minutes).",
          steps: [
            "Write the linearized law: {{ln(A) = ln(A_0) - λ t}}, so the gradient equals {{ -λ }}.",
            "Calculate the gradient: {{m = (4.41 - 6.91) / (50.0 - 0) = -2.50 / 50.0 = -0.0500}} min⁻¹.",
            "Hence {{λ = 0.0500}} min⁻¹.",
            "Compute half-life: {{T_½ = ln(2) / λ = 0.69315 / 0.0500 = 13.9}} minutes.",
          ],
          answer: "{{λ = 0.0500}} min⁻¹; {{T_½ = 13.9}} min",
          yourTurn: {
            question:
              "A graph of {{ln(A)}} against time *t* (in days) has gradient {{ -0.1155}} day⁻¹. Calculate the half-life {{T_½}} in days to 2 significant figures.",
            answer: { type: "number", value: 6.0, tolerance: 0.1, display: "6.0 days" },
            solution:
              "{{λ = 0.1155}} day⁻¹, so {{T_½ = ln(2) / 0.1155 = 0.69315 / 0.1155 = 6.0}} days.",
          },
        },
      ],
      keyPoints: [
        "Decay constant {{λ}} is the probability of decay of a single nucleus per unit time; larger {{λ}} means a shorter half-life ({{T_½ = ln(2) / λ}}).",
        "Always convert {{T_½}} to **seconds** before calculating {{λ}} for {{A = λ N}} in becquerels (Bq = s⁻¹).",
        "The number of **decayed** nuclei after time *t* is {{N_0 - N = N_0 (1 - e^(-λ t))}}, NOT {{N_0 e^(-λ t)}}!",
        "The gradient of {{ln(A)}} vs *t* (or {{ln(N)}} vs *t*) is {{ -λ }}; if plotted with base-10 log ({{log_10(A)}}), the gradient is {{ -λ / ln(10) }}.",
        "Continuous β-spectra prove a three-body decay (daughter + β + neutrino/antineutrino); discrete α and γ spectra prove quantized nuclear energy levels.",
      ],
      whyItWorks:
        "Why is the decay curve exponential rather than linear? In a small interval {{Δt}}, each surviving nucleus has probability {{λ Δt}} of decaying, so {{ΔN = -λ N Δt}}. Dividing by {{Δt}} gives {{dN/dt = -λ N}}. The only function whose derivative is a constant negative multiple of itself is the exponential function {{N_0 e^(-λ t)}}. That memoryless property also explains why a 10,000-year-old carbon-14 nucleus has the exact same chance of decaying in the next second as one created moments ago!",
      strategies: [
        "Before touching a calculator, estimate how many half-lives have passed ({{t / T_½}}): if {{t ≈ 2.5 T_½}}, your answer MUST sit between 25% and 12.5% of the initial value.",
        "For 'time taken to drop to a fraction *f*' problems, rearrange directly: {{t = - ln(f) / λ = T_½ * ln(1/f) / ln(2)}}.",
        "Distinguish carefully between **remaining** nuclei ({{N}}) and **decayed / daughter** nuclei ({{N_0 - N}}): if the ratio daughter : parent = 7 : 1, then 1/8 of the parent remains (3 half-lives).",
      ],
      thinkDeeper:
        "Why doesn't the daughter nucleus take all the missing energy in β⁻ decay so that a two-body decay could still give a continuous spectrum? Apply conservation of momentum and energy to a parent nucleus decaying at rest into ONLY two bodies (daughter + β⁻): two equations with two unknown speeds fix BOTH kinetic energies uniquely! Only a third particle (ν̄_e) introduces an extra degree of freedom.",
    },

    // =========================================================================
    // SECTION 3: E.4 Nuclear Fission & Power Reactors [SL]
    // =========================================================================
    {
      id: "nuclear-fission",
      heading: "E.4 Nuclear Fission & Power Reactors",
      level: "SL",
      discovery: {
        problem:
          "Uranium-235 splits only when it captures a *slow* (thermal) neutron (~0.025 eV), yet each fission spits out 2 or 3 *fast* neutrons (~2 MeV). If you pile up pure natural uranium (99.3% U-238, 0.7% U-235), fast neutrons mostly bounce away or get swallowed by U-238 without causing fission. How would you redesign the pile so that one fission reliably triggers the next — without letting the reaction run away into a meltdown?",
        idea:
          "You need two separate engineering tricks: (1) enrich the fuel slightly (~3–5% U-235) and surround the fuel rods with a **moderator** of light nuclei (like water or graphite) that slows fast neutrons down to thermal speeds via elastic collisions; and (2) insert neutron-absorbing **control rods** (boron or cadmium) to tune the chain reaction so on average *exactly one* neutron from each fission triggers the next fission.",
      },
      body: `### Induced Fission & Chain Reactions
**Nuclear fission** is the splitting of a heavy nucleus (such as ²³⁵₉₂U) into two lighter, more tightly bound daughter nuclei, releasing 2–3 fast neutrons and ~200 MeV of energy. A typical reaction is:
²³⁵₉₂U + ¹₀n → ²³⁶₉₂U* → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy

Notice why the energy is released: the two fission fragments lie closer to the Fe-56 peak on the binding-energy curve (~8.4 MeV/nucleon) than ²³⁵U (~7.59 MeV/nucleon). The total binding energy of the products exceeds that of the reactants by ~174–200 MeV (equivalently, total rest mass decreases by ~0.2 u). Most of this energy (~80–85%) appears immediately as **kinetic energy of the two fission fragments**, which collide with surrounding atoms in the fuel rod and heat it up.

Because each fission produces 2–3 neutrons, those neutrons can trigger further fissions in a **chain reaction**:
- **Critical mass:** the minimum mass (and geometry) of fissile fuel needed for a self-sustaining chain reaction — below it, too many neutrons escape through the surface before hitting another ²³⁵U nucleus.
- **Controlled chain reaction (power reactor):** exactly **one** neutron per fission goes on to cause another fission, keeping power output steady.
- **Uncontrolled chain reaction (nuclear weapon):** more than one neutron per fission causes further fissions, producing exponential power growth in microseconds.

### Inside a Pressurized Thermal Nuclear Reactor
Every major component has a distinct IB exam role:
1. **Fuel rods (enriched uranium, ~3–5% ²³⁵U):** contain the fissile nuclei where thermal energy is generated.
2. **Moderator (water, heavy water D₂O, or graphite):** slows fast fission neutrons (~2 MeV) down to **thermal speeds** (~0.025 eV) via repeated **elastic collisions** with light nuclei, without absorbing many neutrons. Thermal neutrons have a vastly higher probability of being captured by ²³⁵U.
3. **Control rods (boron or cadmium):** strongly **absorb** neutrons. Lowering them deeper into the core reduces the fission rate (and can shut the reactor down completely); raising them increases power output.
4. **Coolant & Heat Exchanger:** pressurized water (or liquid sodium / CO₂ gas) circulates through the core, transferring thermal energy to a **heat exchanger** that boils water in a separate secondary loop into high-pressure steam. Keeping the radioactive primary coolant isolated from the steam turbine prevents contamination.
5. **Turbine, Generator & Containment Shielding:** steam drives a turbine coupled to an AC electrical generator. Thick steel pressure vessels and reinforced concrete shielding absorb penetrating γ-rays and stray neutrons.

### Radioactive Waste, Advantages & Safety Challenges
Fission fragments (like ¹³⁷Cs and ⁹⁰Sr) have far too many neutrons for their smaller proton numbers, making spent fuel rods intensely **β⁻ and γ radioactive** with half-lives ranging from seconds to tens of thousands of years (plus transuranic isotopes like ²³⁹Pu formed by neutron capture in ²³⁸U):
- **Advantages:** extremely high energy density (~{{8 * 10^13}} J kg⁻¹ for ²³⁵U vs ~{{3 * 10^7}} J kg⁻¹ for coal), continuous baseload power, and virtually zero operational CO₂ emissions.
- **Disadvantages:** high-level radioactive waste must be cooled in storage ponds for years, vitrified in glass, and isolated in deep geological repositories; risk of core meltdown if cooling fails (Chernobyl, Fukushima); high decommissioning costs; nuclear weapons proliferation risks.`,
      diagram: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic of a pressurized water nuclear fission reactor showing fuel rods, moderator, movable control rods, primary coolant loop, heat exchanger, steam turbine and concrete shielding">
  <rect x="0" y="0" width="640" height="330" rx="14" fill="var(--surface-2)"/>
  <!-- Concrete Biological Shield -->
  <rect x="20" y="24" width="248" height="278" rx="12" fill="var(--line)" stroke="var(--ink-2)" stroke-width="2"/>
  <text x="144" y="44" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Concrete &amp; Steel Shielding</text>
  <!-- Reactor Pressure Vessel -->
  <rect x="44" y="58" width="200" height="218" rx="22" fill="var(--info-soft)" stroke="var(--brand)" stroke-width="2.5"/>
  <!-- Moderator label -->
  <text x="144" y="262" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--info)" text-anchor="middle">Moderator &amp; Primary Coolant (H₂O)</text>
  <!-- Fuel Rods (orange/red) -->
  <g fill="var(--bad)" stroke="var(--ink)" stroke-width="1">
    <rect x="74" y="132" width="16" height="106" rx="3"/>
    <rect x="116" y="132" width="16" height="106" rx="3"/>
    <rect x="158" y="132" width="16" height="106" rx="3"/>
    <rect x="200" y="132" width="16" height="106" rx="3"/>
  </g>
  <!-- Control Rods (dark grey/ink, descending from top) -->
  <g fill="var(--ink)" stroke="var(--surface)" stroke-width="1">
    <rect x="97" y="48" width="12" height="122" rx="2"/>
    <rect x="139" y="48" width="12" height="122" rx="2"/>
    <rect x="181" y="48" width="12" height="122" rx="2"/>
  </g>
  <rect x="86" y="44" width="118" height="10" rx="3" fill="var(--ink-2)"/>
  <!-- Labels for rods -->
  <text x="144" y="22" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--ink)" text-anchor="middle">Control rods (B/Cd — absorb n)</text>
  <text x="144" y="294" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--bad)" text-anchor="middle">Fuel rods (enriched ²³⁵U)</text>

  <!-- Primary Coolant Hot Pipe (top right from core to heat exchanger) -->
  <path d="M 244 106 L 348 106 L 348 134 C 328 144, 368 156, 348 168 C 328 180, 368 192, 348 204 L 348 232 L 244 232" fill="none" stroke="var(--bad)" stroke-width="6" stroke-linejoin="round"/>
  <path d="M 348 204 L 348 232 L 244 232" fill="none" stroke="var(--brand)" stroke-width="6" stroke-linejoin="round"/>
  <!-- Arrows on primary loop -->
  <polygon points="300,106 289,100 289,112" fill="var(--surface)"/>
  <polygon points="286,232 297,226 297,238" fill="var(--surface)"/>
  <text x="296" y="96" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--bad)" text-anchor="middle">Hot coolant</text>
  <text x="296" y="250" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--brand)" text-anchor="middle">Cooled return</text>

  <!-- Heat Exchanger / Steam Generator -->
  <rect x="316" y="76" width="96" height="186" rx="14" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="2" opacity="0.55"/>
  <rect x="316" y="76" width="96" height="186" rx="14" fill="none" stroke="var(--ink-2)" stroke-width="2"/>
  <text x="364" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Heat Exchanger</text>

  <!-- Secondary Steam Loop -->
  <path d="M 384 76 L 384 52 L 504 52 L 504 114" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linejoin="round"/>
  <text x="448" y="44" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--warn)" text-anchor="middle">High-pressure steam</text>

  <!-- Turbine -->
  <polygon points="476,114 532,102 532,166 476,154" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
  <text x="504" y="138" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="middle">Turbine</text>

  <!-- Shaft + Generator -->
  <line x1="532" y1="134" x2="554" y2="134" stroke="var(--ink)" stroke-width="4"/>
  <rect x="554" y="108" width="66" height="52" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>
  <text x="587" y="132" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--good)" text-anchor="middle">AC</text>
  <text x="587" y="146" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="var(--good)" text-anchor="middle">Gen</text>
  <text x="587" y="176" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="var(--good)" text-anchor="middle">To Grid ⚡</text>

  <!-- Condenser & Water Return -->
  <rect x="466" y="218" width="76" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="504" y="244" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="var(--brand)" text-anchor="middle">Condenser</text>
  <path d="M 504 166 L 504 218" fill="none" stroke="var(--ink-2)" stroke-width="3.5" stroke-dasharray="5 3"/>
  <path d="M 466 240 L 412 240" fill="none" stroke="var(--brand)" stroke-width="4.5"/>
  <polygon points="424,240 434,234 434,246" fill="var(--surface)"/>
  <text x="454" y="294" font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)" text-anchor="middle">Secondary loop isolates steam from radioactive core</text>
</svg>`,
      diagramCaption:
        "Pressurized thermal fission reactor: enriched U-235 fuel rods heat the primary coolant; the moderator slows fast neutrons to thermal energies; boron/cadmium control rods regulate the chain reaction; the heat exchanger transfers energy safely to the steam turbine loop.",
      workedExamples: [
        {
          title: "Fission Energy Release from Binding Energy per Nucleon",
          problem:
            "In one fission pathway, ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n. Given average binding energies per nucleon of {{7.59}} MeV for ²³⁵U, {{8.33}} MeV for ¹⁴¹Ba, and {{8.51}} MeV for ⁹²Kr, calculate the energy released per fission in MeV and in joules.",
          steps: [
            "Total binding energy of reactants (a free neutron has 0 binding energy): {{E_in = 235 * 7.59 = 1783.65}} MeV.",
            "Total binding energy of products (3 free neutrons have 0 binding energy): {{E_out = 141 * 8.33 + 92 * 8.51 = 1174.53 + 782.92 = 1957.45}} MeV.",
            "Energy released = {{E_out - E_in = 1957.45 - 1783.65 = 173.8}} MeV ≈ {{174}} MeV.",
            "Convert to joules ({{1 MeV = 1.60 * 10^(-13)}} J): {{Q = 173.8 * 1.60 * 10^(-13) = 2.78 * 10^(-11)}} J.",
          ],
          answer: "{{174}} MeV ({{2.78 * 10^(-11)}} J)",
          yourTurn: {
            question:
              "A nuclear power station produces {{900}} MW of electrical power at {{30}}% overall efficiency. Each ²³⁵U fission releases {{3.20 * 10^(-11)}} J. Calculate the number of fissions per second (give your answer in standard form, e.g. 2.50 * 10^18, to 3 s.f.).",
            answer: {
              type: "number",
              value: 9.38e19,
              tolerance: 2e17,
              standardForm: true,
              display: "{{9.38 * 10^19}}",
            },
            solution:
              "Thermal power required = {{900 / 0.30 = 3000}} MW = {{3.00 * 10^9}} W. Fission rate = {{(3.00 * 10^9) / (3.20 * 10^(-11)) = 9.375 * 10^19 ≈ 9.38 * 10^19}} s⁻¹.",
          },
        },
        {
          title: "Mass Defect in Fission & Fuel Mass Consumed",
          problem:
            "A fission reaction has a net decrease in rest mass of {{0.215}} u per fission event. Calculate (a) the energy released per fission in MeV and J, and (b) the mass of ²³⁵U undergoing fission in one day inside a {{1500}} MW thermal reactor.",
          steps: [
            "(a) {{Q = 0.215 * 931.5 = 200.3}} MeV ≈ {{200}} MeV; in joules, {{200.3 * 1.60 * 10^(-13) = 3.20 * 10^(-11)}} J.",
            "(b) Total thermal energy in 1 day (86 400 s): {{E = P t = (1.50 * 10^9)(86400) = 1.296 * 10^14}} J.",
            "Number of fissions = {{(1.296 * 10^14) / (3.20 * 10^(-11)) = 4.05 * 10^24}} nuclei.",
            "Mass of ²³⁵U consumed = {{(4.05 * 10^24) * 235 * 1.661 * 10^(-27) = 1.58}} kg per day!",
          ],
          answer: "{{200}} MeV ({{3.20 * 10^(-11)}} J); {{1.58}} kg of ²³⁵U per day",
        },
      ],
      keyPoints: [
        "Never confuse **moderator** and **control rods**: the moderator *slows* fast neutrons to thermal energies (elastic collisions); control rods *absorb* neutrons to control the reaction rate.",
        "Elastic collisions transfer maximum kinetic energy when the target nucleus has a mass close to a neutron's mass — that is why light nuclei (¹H in water, ²H in heavy water, ¹²C in graphite) make ideal moderators, NOT heavy nuclei like lead!",
        "Energy released in fission = (total BE of products) − (total BE of reactants) = (total mass of reactants − total mass of products) × c².",
        "Always check whether a reactor question gives **electrical power** or **thermal power**: divide electrical power by efficiency {{η}} to get thermal power before dividing by energy per fission.",
        "Energy in a fission reactor follows the Sankey chain: nuclear binding energy → KE of fission fragments → thermal energy of core/coolant → KE of steam & turbine → electrical energy.",
      ],
      whyItWorks:
        "Why does a slow (thermal) neutron split ²³⁵U far more effectively than a fast neutron, and why must a moderator use light nuclei? First, a slower neutron has a longer de Broglie wavelength and spends more time near a ²³⁵U nucleus, giving a dramatically larger nuclear capture cross-section (and ²³⁵U + n forms an even-even ²³⁶U* nucleus with extra pairing energy exceeding the fission barrier). Second, in a 1D head-on elastic collision between a moving neutron of mass *m* and a stationary moderator nucleus of mass *M*, the fraction of kinetic energy transferred is {{4 m M / (m + M)^2}}, which equals 100% when {{M = m}} (hydrogen) and approaches 0% when {{M >> m}} (heavy nuclei just bounce the neutron back at full speed!).",
      strategies: [
        "When balancing a fission equation, ALWAYS verify both top (nucleon A) and bottom (proton Z) numbers — remember to include the incident neutron (+1 to A) and multiply any emitted neutrons (e.g. 3 ¹₀n adds +3 to A)!",
        "On reactor efficiency problems, write {{P_elec = η P_th}} explicitly on line 1 so you never multiply by efficiency by mistake.",
        "When comparing fuel mass vs mass defect: ~1.6 kg of U-235 fissions in a day, yet only ~0.1% (~1.5 g!) of that mass actually converts into energy via {{E = Δm c^2}} — distinguish total fuel mass from mass converted to energy!",
      ],
      thinkDeeper:
        "Why does ²³⁸U NOT undergo fission with thermal neutrons even though it makes up 99.3% of natural uranium? Look at nucleon pairing: capturing a neutron turns odd-N ²³⁵U into even-N ²³⁶U, releasing extra pairing energy that pushes the nucleus over its fission threshold. Capturing a thermal neutron turns even-N ²³⁸U into odd-N ²³⁹U without that pairing bonus — instead it decays via two β⁻ emissions into fissile plutonium-239 (²³⁹Pu)!",
    },

    // =========================================================================
    // SECTION 4: E.5 Nuclear Fusion, Stellar Equilibrium, Parallax & HR Diagrams [SL]
    // =========================================================================
    {
      id: "fusion-stars-hr",
      heading: "E.5 Nuclear Fusion, Stellar Equilibrium, Parallax & HR Diagrams",
      level: "SL",
      discovery: {
        problem:
          "Betelgeuse (a cool red star at ~3500 K) radiates roughly 100,000 times more power than the Sun (~5800 K), while Sirius B (a blazing-hot white star at ~25,000 K) radiates less than 3% as much power as the Sun! How can a cooler star outshine a much hotter one by a factor of millions?",
        idea:
          "By the Stefan–Boltzmann law, luminosity depends on BOTH surface temperature and surface area: {{L = σ A T^4 = 4 pi R^2 σ T^4}}. Betelgeuse is a colossally swollen **red supergiant** (~900× the Sun's radius), whereas Sirius B is a crushed, Earth-sized **white dwarf** (~0.008× the Sun's radius). Plotting luminosity against temperature on a Hertzsprung–Russell diagram instantly reveals every star's radius and evolutionary stage!",
      },
      body: `### Nuclear Fusion & Hydrostatic Equilibrium
**Nuclear fusion** joins two light nuclei into a heavier, more tightly bound nucleus, releasing energy because mass decreases (binding energy per nucleon increases sharply). In the core of main-sequence stars like the Sun, the **proton–proton chain** converts four protons into one helium-4 nucleus:
4 ¹₁H → ⁴₂He + 2 e⁺ + 2 ν_e + γ (releasing ~26.7 MeV overall)

Fusion requires **extreme core temperature (~{{10^7}} K)** and **high density/pressure**:
- Both reacting nuclei are positively charged and experience fierce **electrostatic (Coulomb) repulsion**.
- High temperature gives nuclei enough kinetic energy (assisted by quantum tunnelling) to approach within the ~{{10^(-15)}} m range of the attractive **strong nuclear force**; high density ensures a high collision rate.

A main-sequence star remains stable for billions of years in **hydrostatic equilibrium**: the **inward gravitational force** pulling stellar gas toward the centre is exactly balanced by the **outward radiation pressure** (from core fusion photons) and **thermal gas pressure**.

### Measuring Stars: Parallax, Wien's Law, Luminosity & Brightness
Astronomers decode starlight using four core IB Physics laws:
1. **Stellar parallax:** As Earth orbits the Sun (baseline {{1 AU}}), a nearby star appears to shift against distant background stars by a parallax angle *p* (half the peak-to-peak 6-month angular shift). Measuring *p* in **arcseconds** gives distance *d* in **parsecs** (**1 pc = 3.26 ly = {{3.09 * 10^16}} m**):
   {{d = 1 / p}}  (with *d* in parsecs and *p* in arcseconds)
   Ground-based parallax is limited by atmospheric blurring to *d* ≲ 100 pc (space observatories like *Gaia* reach much further).
2. **Wien's displacement law:** Treats a star's photosphere as a blackbody; peak emission wavelength {{λ_max}} gives surface temperature *T* (in kelvin):
   {{λ_max T = 2.90 * 10^(-3)}} m K   (hotter stars peak at shorter, bluer wavelengths; cooler stars peak at longer, redder wavelengths).
3. **Stefan–Boltzmann luminosity law:** Total radiant power emitted across all wavelengths:
   {{L = σ A T^4 = 4 pi R^2 σ T^4}}   where {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴.
4. **Apparent brightness *b* (intensity received at Earth, W m⁻²):** Follows the inverse-square law:
   {{b = L / (4 pi d^2)}}

### The Hertzsprung–Russell (HR) Diagram & Stellar Evolution
An **HR diagram** plots **luminosity** ({{L / L_☉}}, logarithmic vertical axis) against **surface temperature** (*T*, logarithmic horizontal axis **increasing to the LEFT** — hot blue O/B stars on the left, cool red K/M stars on the right). Because {{L ∝ R^2 T^4}}, lines of **constant stellar radius** run diagonally from top-left to bottom-right: larger stars sit toward the upper-right, tiny stars sit at the bottom-left.

Four main regions appear:
- **Main Sequence (diagonal band, top-left to bottom-right):** stable core hydrogen fusion. Follows the **mass–luminosity relation** {{L ∝ M^3.5}}. Since fuel supply {{∝ M}} and burn rate {{∝ L}}, main-sequence lifetime scales as {{τ ∝ M / L ∝ M^(-2.5)}} — massive blue O-stars burn furiously and live only millions of years, while low-mass red dwarfs live trillions of years!
- **Red Giants (upper-right):** cool (~3500–5000 K) yet luminous ({{10^2–10^3 L_☉}}) → huge radii.
- **Supergiants (very top):** extraordinarily luminous ({{10^4–10^6 L_☉}}), enormous radii (up to ~1000 {{R_☉}}).
- **White Dwarfs (bottom-left):** very hot (~10,000–30,000 K) yet dim ({{10^(-4)–10^(-2) L_☉}}) → Earth-sized radii (~0.01 {{R_☉}}).

**Two Evolutionary Fate Tracks (determined by initial mass):**
- **Low/medium-mass star (like the Sun, {{M < 8 M_☉}}):** Core H runs out → core contracts & heats, outer envelope expands & cools → moves up-right to **Red Giant** (He fuses to C/O via triple-alpha) → outer layers ejected as a glowing **planetary nebula** → exposed hot C/O core cools along the bottom-left as a **White Dwarf**, stabilized against gravity by **electron degeneracy pressure** (possible only below the **Chandrasekhar limit ≈ 1.4 {{M_☉}}**).
- **High-mass star ({{M > 8 M_☉}}):** Evolves across top of HR diagram into a **Red Supergiant**, fusing successively heavier shells (He → C → Ne → O → Si → **Fe-56**). Because fusing iron is *endothermic* (past the binding-energy peak!), outward pressure abruptly collapses → core implodes and rebounds in a catastrophic **Type II Supernova** (forging elements heavier than iron!) → remnant becomes an ultra-dense **Neutron Star** (held up by **neutron degeneracy pressure**, up to the **Oppenheimer–Volkoff limit ≈ 2–3 {{M_☉}}**) or, if heavier still, collapses into a **Black Hole**.`,
      diagram: `<svg viewBox="0 0 640 370" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hertzsprung-Russell diagram with inverted logarithmic surface temperature axis showing Main Sequence, Red Giants, Supergiants, White Dwarfs, constant-radius lines, and the Sun's evolutionary track">
  <rect x="0" y="0" width="640" height="370" rx="14" fill="var(--surface-2)"/>
  <!-- Plot box: x from 84 to 596 (T: 40000K at x=96 -> 2500K at x=584, log2 scale), y from 44 to 306 (log10 L/L_sun: +6 at y=54 -> -4 at y=294, 24px per decade) -->
  <rect x="84" y="44" width="512" height="262" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/>
  <!-- Constant radius diagonal dashed lines -->
  <g stroke="var(--line)" stroke-width="1.2" stroke-dasharray="5 4">
    <!-- 100 R_sun -->
    <line x1="250" y1="44" x2="596" y2="178"/>
    <!-- 1 R_sun (passes near Sun: T=5800K -> x=428, L=1 -> y=198) -->
    <line x1="150" y1="90" x2="596" y2="262"/>
    <!-- 0.01 R_sun -->
    <line x1="84" y1="160" x2="462" y2="306"/>
  </g>
  <g font-family="system-ui, sans-serif" font-size="9.5" fill="var(--ink-2)">
    <text x="546" y="150" transform="rotate(21 546 150)">100 R☉</text>
    <text x="554" y="239" transform="rotate(21 554 239)">1 R☉</text>
    <text x="385" y="295" transform="rotate(21 385 295)">0.01 R☉</text>
  </g>
  <!-- Supergiants region -->
  <ellipse cx="430" cy="76" rx="135" ry="22" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5" opacity="0.88"/>
  <text x="430" y="80" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--bad)" text-anchor="middle">Supergiants (Betelgeuse, Rigel)</text>
  <!-- Red Giants region -->
  <ellipse cx="496" cy="146" rx="68" ry="28" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5" opacity="0.92"/>
  <text x="496" y="143" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="var(--warn)" text-anchor="middle">Red Giants</text>
  <text x="496" y="158" font-family="system-ui, sans-serif" font-size="9.5" fill="var(--ink-2)" text-anchor="middle">(Cool, huge R)</text>
  <!-- Main Sequence band -->
  <path d="M 116 74 C 210 108, 325 160, 428 198 C 488 220, 535 256, 566 286" fill="none" stroke="var(--brand-soft)" stroke-width="30" stroke-linecap="round"/>
  <path d="M 116 74 C 210 108, 325 160, 428 198 C 488 220, 535 256, 566 286" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linecap="round"/>
  <text x="278" y="160" transform="rotate(24 278 160)" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="var(--brand)" text-anchor="middle">MAIN SEQUENCE (L ∝ M³·⁵)</text>
  <!-- White Dwarfs region -->
  <ellipse cx="222" cy="264" rx="76" ry="22" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.5" opacity="0.92"/>
  <text x="222" y="261" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--info)" text-anchor="middle">White Dwarfs</text>
  <text x="222" y="275" font-family="system-ui, sans-serif" font-size="9.5" fill="var(--ink-2)" text-anchor="middle">(Hot, tiny R)</text>
  <!-- Sun's evolutionary track (dashed green arrow) -->
  <path d="M 428 198 C 455 186, 488 170, 502 146 C 460 112, 260 118, 224 238" fill="none" stroke="var(--good)" stroke-width="2.4" stroke-dasharray="5 3"/>
  <polygon points="222,245 219,233 229,236" fill="var(--good)"/>
  <text x="342" y="114" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="var(--good)" text-anchor="middle">Sun's track → Red Giant → Planetary Nebula → White Dwarf</text>
  <!-- Sun dot -->
  <circle cx="428" cy="198" r="6" fill="var(--accent)" stroke="var(--ink)" stroke-width="1.6"/>
  <text x="415" y="216" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="var(--ink)" text-anchor="end">Sun (1 L☉, 5800 K)</text>
  <!-- Y-axis labels -->
  <g font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)" text-anchor="end">
    <text x="77" y="58">10⁶</text>
    <text x="77" y="106">10⁴</text>
    <text x="77" y="154">10²</text>
    <text x="77" y="202">1</text>
    <text x="77" y="250">10⁻²</text>
    <text x="77" y="298">10⁻⁴</text>
  </g>
  <text x="24" y="175" transform="rotate(-90 24 175)" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">Luminosity (L / L☉, log scale)</text>
  <!-- X-axis inverted temperature labels -->
  <g font-family="system-ui, sans-serif" font-size="10.5" fill="var(--ink-2)" text-anchor="middle">
    <text x="108" y="324">40 000</text>
    <text x="218" y="324">20 000</text>
    <text x="330" y="324">10 000</text>
    <text x="434" y="324">5 800</text>
    <text x="562" y="324">3 000</text>
  </g>
  <!-- Spectral class top bar -->
  <g font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle">
    <text x="112" y="34" fill="var(--brand)">O</text>
    <text x="184" y="34" fill="var(--info)">B</text>
    <text x="268" y="34" fill="var(--ink)">A</text>
    <text x="348" y="34" fill="var(--ink-2)">F</text>
    <text x="428" y="34" fill="var(--warn)">G</text>
    <text x="500" y="34" fill="var(--accent)">K</text>
    <text x="566" y="34" fill="var(--bad)">M</text>
  </g>
  <text x="340" y="352" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">← Hotter (Blue)     Surface Temperature, T / K (log scale)     Cooler (Red) →</text>
</svg>`,
      diagramCaption:
        "The Hertzsprung–Russell diagram: notice that surface temperature INCREASES to the left! Diagonal dashed lines show constant radius; the green track traces a Sun-like star from Main Sequence to Red Giant and finally to White Dwarf.",
      workedExamples: [
        {
          title: "Parallax, Luminosity & Radius from Starlight",
          problem:
            "A star exhibits a parallax angle {{p = 0.050}} arcsec, an apparent brightness {{b = 3.20 * 10^(-9)}} W m⁻², and a surface temperature {{T = 6000}} K. Determine (a) its distance in parsecs and metres, (b) its luminosity *L*, and (c) its radius *R*.",
          steps: [
            "(a) Distance in parsecs: {{d = 1 / p = 1 / 0.050 = 20}} pc. Convert to metres ({{1 pc = 3.09 * 10^16}} m): {{d = 20 * 3.09 * 10^16 = 6.18 * 10^17}} m.",
            "(b) Rearrange {{b = L / (4 pi d^2)}}: {{L = 4 pi (6.18 * 10^17)^2 (3.20 * 10^(-9)) = 1.54 * 10^28}} W (~40 {{L_☉}}).",
            "(c) Use Stefan–Boltzmann {{L = 4 pi R^2 σ T^4}} with {{σ = 5.67 * 10^(-8)}} W m⁻² K⁻⁴:",
            "{{R = sqrt(L / (4 pi σ T^4)) = sqrt((1.536 * 10^28) / (4 pi * 5.67 * 10^(-8) * 6000^4)) = 4.08 * 10^9}} m (~5.9 {{R_☉}}).",
          ],
          answer: "{{d = 20}} pc ({{6.18 * 10^17}} m); {{L = 1.54 * 10^28}} W; {{R = 4.08 * 10^9}} m",
          yourTurn: {
            question:
              "A nearby star has a parallax angle of {{0.250}} arcsec. Using {{1 pc = 3.26}} ly, calculate its distance from Earth in light-years to 3 significant figures.",
            answer: { type: "number", value: 13.0, tolerance: 0.1, display: "13.0 ly" },
            solution:
              "{{d = 1 / 0.250 = 4.00}} pc. Converting to light-years: {{4.00 * 3.26 = 13.04 ≈ 13.0}} ly.",
          },
        },
        {
          title: "Stellar Radius Ratios on the HR Diagram",
          problem:
            "A red giant star X has surface temperature {{T_X = (1/2) T_☉}} and luminosity {{L_X = 100 L_☉}}. Find the ratio of its radius to the Sun's radius, {{R_X / R_☉}}.",
          steps: [
            "Form the ratio from {{L = 4 pi R^2 σ T^4}} so constants {{4 pi σ}} cancel cleanly:",
            "{{L_X / L_☉ = (R_X / R_☉)^2 (T_X / T_☉)^4}}.",
            "Substitute values: {{100 = (R_X / R_☉)^2 (1/2)^4 = (R_X / R_☉)^2 / 16}}.",
            "Solve: {{(R_X / R_☉)^2 = 1600 => R_X / R_☉ = 40}}.",
          ],
          answer: "{{R_X / R_☉ = 40}}",
          yourTurn: {
            question:
              "A white dwarf has a surface temperature twice the Sun's ({{T = 2 T_☉}}) and a radius {{0.010 R_☉}}. Calculate its luminosity as a multiple of {{L_☉}} (give your answer as a decimal).",
            answer: { type: "number", value: 0.0016, tolerance: 0.00005 },
            solution:
              "{{L / L_☉ = (0.010)^2 * 2^4 = 0.0001 * 16 = 0.0016}}.",
          },
        },
      ],
      keyPoints: [
        "Always check the HR diagram horizontal axis: surface temperature *T* **increases to the left** (hot blue stars left, cool red stars right).",
        "Use ratio form {{L_1 / L_2 = (R_1 / R_2)^2 (T_1 / T_2)^4}} whenever comparing two stars — constants {{4 pi σ}} cancel and rounding errors vanish!",
        "Parallax {{d = 1 / p}} works ONLY when *p* is in **arcseconds** and *d* is in **parsecs**; convert *d* to metres before substituting into {{b = L / (4 pi d^2)}}.",
        "On the Main Sequence, {{L ∝ M^3.5}}, so more massive stars are hotter, far more luminous, and live **much shorter** lives ({{τ ∝ M^(-2.5)}}).",
        "Stellar fate depends on initial mass: low/medium-mass stars → Red Giant → Planetary Nebula → White Dwarf (electron degeneracy pressure, {{< 1.4 M_☉}}); high-mass stars → Red Supergiant → Type II Supernova → Neutron Star or Black Hole.",
      ],
      whyItWorks:
        "Why can't a massive star keep fusing iron to stave off collapse? Look back at Section 1's binding-energy curve! Up to ⁵⁶Fe, every fusion step climbs *up* the curve, releasing binding energy that provides outward radiation pressure to hold up the star's crushing mass. Beyond ⁵⁶Fe, the curve turns *downward*: fusing iron nuclei *absorbs* energy instead of releasing it! Within a fraction of a second, the core's pressure vanishes and gravity wins catastrophically, triggering a core-collapse supernova.",
      strategies: [
        "When an HR diagram question asks 'which star has the larger radius?', don't guess — rearrange {{R ∝ sqrt(L) / T^2}} or locate the star further toward the **upper-right**!",
        "Watch out for the factor of 2 in parallax: the parallax angle *p* is **half** the total angular shift observed over 6 months (Earth moves 2 AU across its orbit, but the parallax baseline is 1 AU).",
        "Remember the four-step 'astrophysics chain' for unknown star properties: Spectrum ({{λ_max}}) → Wien's law (*T*) + Parallax (*d*) + Brightness (*b*) → Luminosity (*L*) → Stefan–Boltzmann (*R*).",
      ],
      thinkDeeper:
        "If two stars have identical apparent brightness *b* in Singapore's night sky, can you tell from *b* alone which star is more luminous or closer? No — a dim nearby dwarf and a distant blazing supergiant can produce the exact same flux {{b = L / (4 pi d^2)}}! How do astronomers break this degeneracy when a star is too far away for trigonometric parallax (>100 pc)?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define **mass defect** ({{Δm}}) and **nuclear binding energy** ({{E_B}}).",
        back: "Mass defect is the difference between the total mass of separated constituent nucleons and the mass of the bound nucleus. Binding energy ({{E_B = Δm c^2}}) is the minimum work required to completely separate a nucleus into its individual nucleons at infinity.",
        level: "SL",
      },
      {
        front: "Which nuclides sit at the peak of the binding energy per nucleon curve, and what does that imply for fusion and fission?",
        back: "**⁵⁶Fe / ⁶²Ni** (~8.8 MeV nucleon⁻¹). Fusing light nuclei (left of peak) and fissioning heavy nuclei (right of peak) both move products *upward* to higher {{E_B / A}} (less mass per nucleon), releasing energy.",
        level: "SL",
      },
      {
        front: "Why do stable heavy nuclei have more neutrons than protons (**N > Z**)?",
        back: "Electrostatic repulsion between protons is long-range (every proton repels all others), while the attractive strong nuclear force is short-range (~2–3 fm). Extra neutrons add strong-force attraction and spacing without adding Coulomb repulsion.",
        level: "SL",
      },
      {
        front: "Write the nucleon-level equations for **β⁻** and **β⁺** decay, including leptons.",
        back: "β⁻ decay: {{n -> p + e^- +}} ν̄_e (electron antineutrino). β⁺ decay: {{p -> n + e^+ +}} ν_e (electron neutrino). Both conserve charge, nucleon number, energy, momentum, and lepton number.",
        level: "SL",
      },
      {
        front: "Define the **decay constant** {{λ}} and state how it relates to half-life {{T_½}}. [HL]",
        back: "{{λ}} is the probability of decay of a single nucleus per unit time (unit: s⁻¹). Half-life is {{T_½ = ln(2) / λ}}.",
        level: "HL",
      },
      {
        front: "How do you extract {{λ}} and {{A_0}} from a linearized graph of {{ln(A)}} vs *t*? [HL]",
        back: "From {{ln(A) = ln(A_0) - λ t}}, the **gradient** equals {{ -λ }} and the **y-intercept** equals {{ln(A_0)}} (so {{A_0 = e^(intercept)}}).",
        level: "HL",
      },
      {
        front: "Why did the β-decay energy spectrum provide experimental evidence for the **neutrino**? [HL]",
        back: "β particles emerge with a **continuous** spectrum of kinetic energies from 0 up to {{E_max}} (unlike discrete α/γ energies). To conserve energy and momentum, a third neutral particle (ν̄_e in β⁻, ν_e in β⁺) must carry away the missing energy.",
        level: "HL",
      },
      {
        front: "Distinguish the roles of the **moderator** and **control rods** in a nuclear fission reactor.",
        back: "**Moderator** (water/graphite): slows fast neutrons to thermal energies via elastic collisions so ²³⁵U can capture them. **Control rods** (boron/cadmium): absorb neutrons to regulate or shut down the chain reaction.",
        level: "SL",
      },
      {
        front: "Why must a moderator consist of **light** nuclei (like H, D, or C) rather than heavy nuclei?",
        back: "In an elastic collision, a neutron transfers the greatest fraction of kinetic energy when colliding with a nucleus of similar mass (a neutron bouncing off a heavy nucleus keeps almost all its speed).",
        level: "SL",
      },
      {
        front: "Why do nuclear fusion reactions require temperatures of ~{{10^7}} K and high core density?",
        back: "High temperature gives positively charged nuclei sufficient kinetic energy (plus quantum tunnelling) to overcome electrostatic Coulomb repulsion and reach strong nuclear force range (~{{10^(-15)}} m); high density ensures frequent collisions.",
        level: "SL",
      },
      {
        front: "What maintains **hydrostatic equilibrium** in a main-sequence star?",
        back: "The exact balance between the **inward gravitational force** and the **outward radiation pressure** (plus thermal gas pressure) generated by core hydrogen fusion.",
        level: "SL",
      },
      {
        front: "How is **stellar parallax** defined, and what is the equation linking *d* and *p*?",
        back: "Parallax angle *p* is half the angular shift of a nearby star over 6 months (1 AU baseline). With *p* in arcseconds, {{d = 1 / p}} (in pc), where 1 pc = 3.26 ly = {{3.09 * 10^16}} m.",
        level: "SL",
      },
      {
        front: "State the four main stellar groups on an HR diagram and how radius varies across it.",
        back: "**Main Sequence** (diagonal band), **Red Giants** (upper-right), **Supergiants** (very top), **White Dwarfs** (bottom-left). Surface temperature increases to the **left**; stellar radius increases toward the **upper-right**.",
        level: "SL",
      },
      {
        front: "Compare the final remnants of a Sun-like star ({{< 8 M_☉}}) and a high-mass star ({{> 8 M_☉}}).",
        back: "Sun-like star → Red Giant → Planetary Nebula → **White Dwarf** (electron degeneracy pressure, {{< 1.4 M_☉}}). High-mass star → Red Supergiant → Type II Supernova → **Neutron Star** (neutron degeneracy pressure) or **Black Hole**.",
        level: "SL",
      },
    ],
    mustKnow: [
      "1 u = {{1.661 * 10^(-27)}} kg corresponds to **931.5 MeV**; 1 MeV = {{1.60 * 10^(-13)}} J.",
      "Binding energy per nucleon peaks at **⁵⁶Fe / ⁶²Ni** (~8.8 MeV/nucleon) — both fusion (left) and fission (right) move products *up* toward this peak.",
      "Every nuclear decay conserves A, Z, mass–energy, momentum and lepton number (β⁻ emits ν̄_e; β⁺ emits ν_e).",
      "Radioactive decay is spontaneous and random; subtract background radiation *before* applying half-life calculations.",
      "[HL] {{N = N_0 e^(-λ t)}}, {{A = λ N = A_0 e^(-λ t)}}, {{T_½ = ln(2) / λ}}, and gradient of {{ln(A)}} vs *t* is {{ -λ }}.",
      "[HL] Discrete α/γ spectra prove quantized nuclear energy levels; the continuous β-energy spectrum proves the neutrino/antineutrino.",
      "In a fission reactor: **moderator** slows neutrons (elastic collisions with light nuclei), **control rods** absorb neutrons (B/Cd), **heat exchanger** isolates primary coolant from steam.",
      "Luminosity {{L = 4 pi R^2 σ T^4}}, apparent brightness {{b = L / (4 pi d^2)}}, Wien's law {{λ_max T = 2.90 * 10^(-3)}} m K, and parallax {{d = 1 / p}} (pc, arcsec).",
      "HR diagram temperature axis is **reversed** (hot left, cool right); on the Main Sequence {{L ∝ M^3.5}} so massive stars live far shorter lives ({{τ ∝ M^(-2.5)}}).",
      "Chandrasekhar limit (~1.4 {{M_☉}}) is the maximum mass of a white dwarf supported by electron degeneracy pressure; above it, core collapse forms a neutron star or black hole.",
    ],
    misconceptions: [
      {
        wrong: "Energy is released in fission/fusion because total binding energy decreases.",
        right: "Energy is released because total **binding energy INCREASES** (products are more tightly bound, meaning their total rest mass is *smaller*, so {{Δm c^2}} is released as kinetic/radiant energy).",
        level: "SL",
      },
      {
        wrong: "Heating a radioactive sample or reacting it chemically speeds up its decay and shortens its half-life.",
        right: "Radioactive decay is **spontaneous** — chemical bonds (~eV) and thermal energy (~0.03 eV) are millions of times smaller than nuclear binding energies (~MeV) and have zero effect on {{T_½}} or {{λ}}.",
        level: "SL",
      },
      {
        wrong: "Control rods slow down fast neutrons, and the moderator absorbs excess neutrons.",
        right: "Exact opposite! The **moderator** slows fast neutrons down to thermal speeds (elastic collisions); **control rods** absorb neutrons to keep the chain reaction steady or shut it down.",
        level: "SL",
      },
      {
        wrong: "In {{N = N_0 e^(-λ t)}}, *N* is the number of nuclei that have decayed after time *t*.",
        right: "*N* is the number of **undecayed (remaining)** nuclei! The number that have decayed is {{N_0 - N = N_0(1 - e^(-λ t))}}.",
        level: "HL",
      },
      {
        wrong: "More massive main-sequence stars live longer because they have more hydrogen fuel.",
        right: "More massive stars live **much shorter** lives! Although fuel scales as {{M}}, luminosity scales as {{M^3.5}}, so lifetime scales as {{M / L ∝ M^(-2.5)}} — a 10 {{M_☉}} star burns out ~300× faster than the Sun.",
        level: "SL",
      },
      {
        wrong: "On an HR diagram, hotter stars are plotted on the right like a normal x-axis.",
        right: "The HR temperature axis is **inverted** — hot blue O/B stars are on the **left** (~40 000 K) and cool red K/M stars are on the **right** (~3 000 K).",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting to subtract background count rate *before* halving (or forgetting to add it back when asked for the GM counter reading).",
      "Rounding atomic masses to 3 s.f. before subtracting — mass defects occur in the 3rd–5th decimal place, so keep ALL given digits until the final energy calculation!",
      "[HL] Plugging {{λ}} in days⁻¹ or hours⁻¹ into {{A = λ N}} and labelling the answer 'Bq' — Bq strictly requires {{λ}} in **s⁻¹**!",
      "[HL] Forgetting the minus sign when reading {{λ}} from a {{ln(A)}} vs *t* graph (gradient is {{ -λ }}, so {{λ}} itself is positive).",
      "Multiplying electrical power by efficiency instead of **dividing** ({{P_th = P_elec / η}}) when calculating nuclear fuel consumption rate.",
      "Substituting parallax distance *d* in **parsecs** directly into {{b = L / (4 pi d^2)}} instead of converting parsecs to **metres** ({{1 pc = 3.09 * 10^16}} m).",
      "Using the full 6-month angular shift instead of **half** of it for the parallax angle *p* in {{d = 1 / p}}.",
    ],
    mnemonics: [
      {
        topic: "Spectral classes from hottest (left) to coolest (right) on the HR diagram",
        device: "**O**h **B**e **A** **F**ine **G**irl/Guy, **K**iss **M**e (O–B–A–F–G–K–M)",
        explanation: "Maps left-to-right across the inverted HR temperature axis: O (~40 000 K, blue) → B → A → F → G (Sun, ~5800 K, yellow-white) → K → M (~3000 K, red).",
        level: "SL",
      },
      {
        topic: "Nuclear reactor rods vs moderator",
        device: "**M**oderator **M**akes neutrons **M**ellow (slow); **C**ontrol rods **C**atch (absorb) neutrons",
        explanation: "Prevents the classic IB exam mix-up between slowing neutrons (elastic collisions in water/graphite) and absorbing neutrons (boron/cadmium rods).",
        level: "SL",
      },
      {
        topic: "Sign of energy release from binding energy vs mass",
        device: "**M**ass: **R**eactants − **P**roducts (MRP); **B**inding energy: **P**roducts − **R**eactants (BPR)",
        explanation: "Exothermic nuclear reactions lose mass (reactant mass > product mass) and gain binding energy (product BE > reactant BE).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Radiocarbon & Uranium–Lead Dating",
        emoji: "🦴",
        detail: "Archaeologists measure the remaining ¹⁴C/¹²C ratio ({{T_½ = 5730}} yr) to date organic artefacts up to ~50 000 years old, while geologists use ²³⁸U → ²⁰⁶Pb ({{T_½ = 4.5 * 10^9}} yr) to date Earth's oldest zircons at 4.4 billion years.",
      },
      {
        title: "Medical Radioisotopes & PET Scans",
        emoji: "🏥",
        detail: "Technetium-99m ({{T_½ = 6.0}} h, pure γ-emitter) is injected for gamma-camera imaging because its short half-life limits patient dose. PET scanners use β⁺-emitters like fluorine-18, detecting pairs of 0.511 MeV annihilation γ-photons.",
      },
      {
        title: "ITER & Terrestrial Fusion Research",
        emoji: "🔥",
        detail: "In southern France, the ITER tokamak uses superconducting magnets to confine deuterium–tritium plasma at 150 million K (10× hotter than the Sun's core!) to replicate stellar fusion cleanly without long-lived fission waste.",
      },
      {
        title: "ESA's Gaia Space Observatory",
        emoji: "🛰️",
        detail: "Operating above Earth's turbulent atmosphere, Gaia has measured micro-arcsecond parallaxes and HR-diagram positions for nearly two billion Milky Way stars, mapping our galaxy in 3D.",
      },
      {
        title: "Supernovae & Cosmic Element Forging",
        emoji: "💥",
        detail: "Every atom of gold, iodine, and uranium on Earth was forged beyond the Fe-56 binding-energy barrier in core-collapse supernovae and neutron-star mergers — you are literally made of stardust!",
      },
    ],
    videos: [
      {
        title: "IB Physics E.3 Mass Defect, Binding Energy & Radioactive Decay",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.3+binding+energy+radioactive+decay+half+life",
      },
      {
        title: "IB Physics E.3 HL Exponential Decay Law, Decay Constant & Neutrino",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+HL+decay+constant+exponential+decay+neutrino+beta+spectrum",
      },
      {
        title: "IB Physics E.4 Nuclear Fission & Power Reactors Explained",
        channel: "OSC IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.4+nuclear+fission+moderator+control+rods+reactor",
      },
      {
        title: "IB Physics E.5 Nuclear Fusion, Stellar Parallax & HR Diagrams",
        channel: "Physics Online / IB Astrophysics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.5+fusion+stars+HR+diagram+stellar+parallax",
      },
    ],
    formulas: [
      {
        name: "Mass–energy equivalence",
        formula: "{{E = Δm c^2}}",
        note: "1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV c⁻²; 1 MeV = 1.60 × 10⁻¹³ J",
        level: "SL",
      },
      {
        name: "Nuclear mass defect",
        formula: "{{Δm = Z m_p + (A - Z) m_n - m_nucleus}}",
        note: "Multiply Δm (in u) by 931.5 MeV u⁻¹ to get total binding energy E_B; divide by A for E_B / A",
        level: "SL",
      },
      {
        name: "Reaction energy release (Q-value)",
        formula: "{{Q = Σ E_(B,products) - Σ E_(B,reactants)}}",
        note: "Equivalently Q = (Σm_reactants − Σm_products) c²",
        level: "SL",
      },
      {
        name: "Exponential decay law (nuclei)",
        formula: "{{N = N_0 e^(-λ t)}}",
        note: "N = undecayed nuclei remaining; decayed nuclei = N₀(1 − e^(−λt))",
        level: "HL",
      },
      {
        name: "Activity & decay constant",
        formula: "{{A = λ N = λ N_0 e^(-λ t) = A_0 e^(-λ t)}}",
        note: "A in Bq (s⁻¹) strictly requires λ in s⁻¹",
        level: "HL",
      },
      {
        name: "Half-life & decay constant",
        formula: "{{T_½ = ln(2) / λ}}",
        note: "Linearized form: ln A = ln A₀ − λt (gradient = −λ)",
        level: "HL",
      },
      {
        name: "Stellar parallax distance",
        formula: "{{d = 1 / p}}",
        note: "d in parsecs (pc) when p is in arcseconds; 1 pc = 3.26 ly = 3.09 × 10¹⁶ m",
        level: "SL",
      },
      {
        name: "Wien's displacement law",
        formula: "{{λ_max T = 2.90 * 10^(-3)}} m K",
        note: "Relates peak blackbody wavelength λ_max (m) to surface temperature T (K)",
        level: "SL",
      },
      {
        name: "Stefan–Boltzmann stellar luminosity",
        formula: "{{L = σ A T^4 = 4 pi R^2 σ T^4}}",
        note: "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴; ratio form L₁/L₂ = (R₁/R₂)²(T₁/T₂)⁴",
        level: "SL",
      },
      {
        name: "Apparent brightness (inverse-square law)",
        formula: "{{b = L / (4 pi d^2)}}",
        note: "b in W m⁻², L in W, d MUST be in metres (m)",
        level: "SL",
      },
      {
        name: "Main-sequence mass–luminosity & lifetime",
        formula: "{{L / L_0 = (M / M_0)^3.5}}",
        note: "Main-sequence lifetime scales as τ ∝ M / L ∝ M^(−2.5)",
        level: "SL",
      },
      {
        name: "Reactor power & efficiency",
        formula: "{{η = P_elec / P_th}}",
        note: "Fission rate = P_th / Q_fission",
        level: "SL",
      },
    ],
  },
};
