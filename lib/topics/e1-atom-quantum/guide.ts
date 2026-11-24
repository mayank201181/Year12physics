import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "e1-atom-quantum",
  title: "E.1–E.2 Atomic Structure & Quantum Physics",
  strand: "Theme E: Nuclear & Quantum Physics",
  icon: "🔬",
  level: "SL",
  summary:
    "Discover how alpha scattering revealed the tiny atomic nucleus, how discrete energy levels paint atomic fingerprints, and (HL) how the photoelectric effect, Compton scattering, and electron diffraction overturned classical physics with wave–particle duality.",
  intro:
    "At the start of the twentieth century, classical physics seemed nearly complete — yet two puzzles refused to fit: glowing gases emitted sharp bars of colour instead of smooth rainbows, and dim ultraviolet light knocked electrons out of metal while blindingly bright red light did nothing at all. Solving those mysteries gave us the nuclear atom (E.1) and quantum physics (E.2), the foundation of lasers, solar cells, electron microscopes, and modern spectroscopy.",

  guide: [
    // =========================================================================
    // SECTION 1 (SL): Rutherford Scattering, Energy Levels & Line Spectra
    // =========================================================================
    {
      id: "atomic-spectra-levels",
      heading: "E.1 Rutherford Scattering, Energy Levels & Line Spectra",
      level: "SL",
      discovery: {
        problem:
          "Imagine firing thousands of heavy, positively charged α-particles at a tissue-thin sheet of gold foil. Under J. J. Thomson's 'plum pudding' model (positive charge spread smoothly across the whole atom), what deflections would you expect? And what single observation would shatter that model instantly?",
        idea:
          "A smeared-out positive charge creates only weak electric fields, so every fast α-particle should pass straight through with deflections of at most a degree or two. When Geiger and Marsden saw roughly 1 in 8000 α-particles bounce almost straight back (θ > 90°), Rutherford realized the atom's positive charge and nearly all its mass must be packed into a tiny, super-dense central nucleus — leaving the rest of the atom almost entirely empty space.",
      },
      body: `### Geiger–Marsden–Rutherford α-Scattering

In 1909–1911, Hans Geiger and Ernest Marsden directed a narrow beam of mono-energetic α-particles ({{^4_2}}He nuclei, charge +2*e*) at ultra-thin gold foil inside an evacuated chamber and counted flashes on a movable zinc sulfide (ZnS) screen.

| Observation | Conclusion about atomic structure |
|---|---|
| Most α-particles (> 99%) pass straight through with tiny or zero deflection | The atom is **mostly empty space**; the nucleus occupies a minuscule fraction of the atomic volume (nuclear radius ~ {{10^(-15)}} m vs atomic radius ~ {{10^(-10)}} m). |
| A small fraction are deflected through moderate angles | The nucleus carries a **positive charge** that electrostatically repels the positive α-particles via Coulomb's law. |
| Very few (~1 in 8000) scatter through angles > 90° (nearly straight back) | Almost all of the atom's **mass** and positive charge are concentrated in a tiny, dense central **nucleus** — heavy enough not to recoil away when hit. |

*Why gold foil and vacuum?* Gold is malleable enough to be hammered only a few hundred atoms thick (minimizing multiple scattering), and the vacuum prevents α-particles from losing energy by ionizing air molecules before reaching the foil or screen.

### Discrete Atomic Energy Levels & Photons

Classical electromagnetism predicted that an orbiting, accelerating electron should radiate energy continuously and spiral into the nucleus in ~{{10^(-11)}} s. Atoms are stable because bound electrons can only occupy **discrete (quantized) energy levels**.

- By convention, a free electron at rest far from the atom has **zero energy** (*E* = 0). Bound electrons have **negative** total energies because external work must be supplied to free (ionize) them.
- The lowest energy state (*n* = 1) is the **ground state**; higher levels (*n* = 2, 3, …) are **excited states**.
- When an electron jumps from a higher level {{E_i}} to a lower level {{E_f}}, it emits a single quantum of electromagnetic radiation — a **photon** — carrying the exact energy difference:

{{ΔE = E_i - E_f = hf = hc/λ}}

where Planck's constant {{h = 6.63 * 10^(-34)}} J s and {{c = 3.00 * 10^8}} m s⁻¹. Converting between electronvolts and joules uses {{1 " eV" = 1.60 * 10^(-19) " J"}}.

### Emission vs Absorption Line Spectra

- **Emission line spectrum**: A hot, low-pressure gas has excited electrons dropping to lower levels, producing bright, sharp coloured lines at specific wavelengths against a **dark background**.
- **Absorption line spectrum**: White light (a continuous spectrum of all wavelengths) passes through a cool, low-pressure gas. Atoms absorb ONLY photons whose energy exactly matches an upward level jump, leaving **dark lines against a continuous rainbow** at the exact same wavelengths as the element's emission lines. (Re-emitted photons scatter randomly in all directions, so very little intensity continues along the original beam.)
- Because every element has a unique nuclear charge and electron configuration, its set of energy-level gaps is unique — making line spectra **atomic fingerprints** used to identify the composition of stars and nebulae.

In hydrogen, transitions down to *n* = 1 form the ultraviolet **Lyman series** (largest Δ*E*, shortest λ), transitions to *n* = 2 form the visible **Balmer series**, and transitions to *n* = 3 form the infrared **Paschen series**.`,
      diagram: `<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel: Rutherford alpha-particle scattering around a dense positive gold nucleus. Right panel: Hydrogen energy level ladder from n=1 to n=4 showing Lyman ultraviolet and Balmer visible emission transitions plus photon absorption.">
  <rect x="0" y="0" width="660" height="280" fill="#ffffff"/>
  <!-- Left Panel: Rutherford Scattering -->
  <rect x="12" y="12" width="308" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="166" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Rutherford α-Scattering (Gold Foil)</text>
  <!-- Atom outline -->
  <circle cx="205" cy="145" r="88" fill="#eff6ff" fill-opacity="0.55" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="205" y="72" font-family="system-ui, sans-serif" font-size="10.5" fill="#1d4ed8" text-anchor="middle">Mostly empty space (~10⁻¹⁰ m)</text>
  <!-- Nucleus -->
  <circle cx="205" cy="145" r="10" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/>
  <text x="205" y="149" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">+</text>
  <text x="248" y="168" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#991b1b">Gold nucleus</text>
  <text x="248" y="180" font-family="system-ui, sans-serif" font-size="9.5" fill="#991b1b">(+79e, ~10⁻¹⁵ m)</text>
  <!-- Straight-through alpha rays -->
  <defs>
    <marker id="arrBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="arrRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="arrPurp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed"/>
    </marker>
    <marker id="arrCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0891b2"/>
    </marker>
    <marker id="arrGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
  </defs>
  <path d="M 28 88 L 300 88" stroke="#2563eb" stroke-width="2" fill="none" marker-end="url(#arrBlue)"/>
  <path d="M 28 214 L 300 214" stroke="#2563eb" stroke-width="2" fill="none" marker-end="url(#arrBlue)"/>
  <!-- Moderate deflection -->
  <path d="M 28 118 Q 185 118 286 64" stroke="#d97706" stroke-width="2" fill="none" marker-end="url(#arrRed)"/>
  <path d="M 28 182 Q 185 182 284 238" stroke="#d97706" stroke-width="2" fill="none" marker-end="url(#arrRed)"/>
  <!-- Backscatter (>90 deg) -->
  <path d="M 28 140 Q 178 140 178 145 Q 178 152 60 164" stroke="#dc2626" stroke-width="2.2" fill="none" marker-end="url(#arrRed)"/>
  <text x="32" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">α beam (+2e)</text>
  <text x="32" y="246" font-family="system-ui, sans-serif" font-size="10" fill="#334155">Blue: straight (&gt;99%) · Red: backscatter (~1 in 8000)</text>

  <!-- Right Panel: Hydrogen Energy Levels -->
  <rect x="332" y="12" width="316" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="490" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Hydrogen Energy Levels &amp; Transitions</text>
  <!-- Energy levels -->
  <!-- n=inf -->
  <line x1="395" y1="54" x2="585" y2="54" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3"/>
  <text x="388" y="58" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569" text-anchor="end">n = ∞</text>
  <text x="592" y="58" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">0.00 eV</text>
  <!-- n=4 -->
  <line x1="395" y1="78" x2="585" y2="78" stroke="#1e293b" stroke-width="2"/>
  <text x="388" y="82" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#1e293b" text-anchor="end">n = 4</text>
  <text x="592" y="82" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">−0.85 eV</text>
  <!-- n=3 -->
  <line x1="395" y1="106" x2="585" y2="106" stroke="#1e293b" stroke-width="2"/>
  <text x="388" y="110" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#1e293b" text-anchor="end">n = 3</text>
  <text x="592" y="110" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">−1.51 eV</text>
  <!-- n=2 -->
  <line x1="395" y1="154" x2="585" y2="154" stroke="#1e293b" stroke-width="2"/>
  <text x="388" y="158" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#1e293b" text-anchor="end">n = 2</text>
  <text x="592" y="158" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">−3.40 eV</text>
  <!-- n=1 -->
  <line x1="395" y1="234" x2="585" y2="234" stroke="#0f172a" stroke-width="2.6"/>
  <text x="388" y="238" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="end">n = 1</text>
  <text x="592" y="238" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a">−13.6 eV</text>

  <!-- Absorption arrow n=1 -> n=2 -->
  <line x1="418" y1="231" x2="418" y2="159" stroke="#15803d" stroke-width="2.2" marker-end="url(#arrGreen)"/>
  <text x="415" y="198" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d" text-anchor="end">Absorb</text>
  <text x="415" y="209" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="end">10.2 eV</text>

  <!-- Lyman UV n=2 -> n=1 -->
  <line x1="454" y1="157" x2="454" y2="229" stroke="#7c3aed" stroke-width="2.2" marker-end="url(#arrPurp)"/>
  <text x="460" y="196" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6d28d9">Lyman (UV)</text>
  <text x="460" y="208" font-family="system-ui, sans-serif" font-size="9" fill="#6d28d9">122 nm</text>

  <!-- Balmer visible n=3 -> n=2 (red) & n=4 -> n=2 (cyan) -->
  <line x1="514" y1="109" x2="514" y2="149" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrRed)"/>
  <text x="514" y="100" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">656 nm</text>
  <line x1="556" y1="81" x2="556" y2="149" stroke="#0891b2" stroke-width="2.2" marker-end="url(#arrCyan)"/>
  <text x="556" y="72" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0e7490" text-anchor="middle">486 nm</text>
  <text x="536" y="170" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f172a" text-anchor="middle">Balmer (Visible)</text>

  <text x="490" y="256" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">ΔE = hf = hc/λ (levels converge toward n = ∞)</text>
</svg>`,
      diagramCaption:
        "Rutherford scattering proves the atom has a compact positive nucleus; discrete atomic energy levels produce sharp emission and absorption lines.",
      workedExamples: [
        {
          title: "Calculating the wavelength of a Balmer emission line",
          problem:
            "In a hydrogen atom, an electron makes a transition from the *n* = 3 energy level (−1.51 eV) to the *n* = 2 level (−3.40 eV). Calculate the wavelength of the emitted photon and identify the region of the electromagnetic spectrum.",
          steps: [
            "Find the energy difference between the two levels: {{ΔE = E_3 - E_2 = -1.51 - (-3.40) = 1.89}} eV.",
            "Convert Δ*E* from electronvolts to joules: {{ΔE = 1.89 * 1.60 * 10^(-19) = 3.024 * 10^(-19)}} J.",
            "Rearrange {{ΔE = hc/λ}} for λ: {{λ = hc / ΔE = (6.63 * 10^(-34) * 3.00 * 10^8) / (3.024 * 10^(-19))}}.",
            "Evaluate: {{λ = (1.989 * 10^(-25)) / (3.024 * 10^(-19)) = 6.58 * 10^(-7)}} m = 658 nm (high-precision value: 656 nm, red visible light in the Balmer series).",
          ],
          answer: "λ ≈ 658 nm (red visible light, H-α line)",
          yourTurn: {
            question:
              "An electron in a mercury atom drops from an excited level at −3.70 eV to a lower level at −6.70 eV. Using h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹ and e = 1.60 × 10⁻¹⁹ C, calculate the wavelength of the emitted photon in nm (to 3 significant figures).",
            answer: { type: "number", value: 414, tolerance: 2, display: "414 nm" },
            solution:
              "ΔE = −3.70 − (−6.70) = 3.00 eV = 3.00 × 1.60 × 10⁻¹⁹ = 4.80 × 10⁻¹⁹ J. Then λ = hc/ΔE = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (4.80 × 10⁻¹⁹) = 4.14 × 10⁻⁷ m = 414 nm (violet light).",
          },
        },
        {
          title: "Counting distinct spectral lines from excited states",
          problem:
            "A collection of identical atoms has electrons excited up to the *n* = 4 energy level. How many distinct emission wavelengths can be observed as they cascade to *n* = 1, and which transition emits the longest wavelength?",
          steps: [
            "List every possible downward transition between pairs of distinct levels from {4, 3, 2, 1}: 4→3, 4→2, 4→1, 3→2, 3→1, and 2→1.",
            "Use the pair-counting formula for *N* levels: {{N(N - 1)/2 = 4(3)/2 = 6}} distinct emission lines.",
            "Since {{λ = hc/ΔE}}, the **longest wavelength** corresponds to the **smallest** energy gap Δ*E*.",
            "Energy levels converge as *n* increases, so the smallest gap is between the top two levels: *n* = 4 → *n* = 3.",
          ],
          answer: "6 distinct emission lines; longest wavelength is n = 4 → n = 3",
          yourTurn: {
            question:
              "If a large sample of hydrogen atoms is excited up to the n = 5 level, how many distinct spectral emission lines can be produced as electrons return to the ground state?",
            answer: { type: "number", value: 10 },
            solution:
              "With 5 levels accessible (n = 1 to 5), the number of distinct downward transitions is 5 × 4 / 2 = 10.",
          },
        },
      ],
      keyPoints: [
        "Rutherford's gold-foil experiment showed atoms are mostly empty space with a tiny, dense, positively charged central nucleus (~{{10^(-15)}} m vs atomic ~{{10^(-10)}} m).",
        "Atomic electrons occupy discrete, quantized energy levels; bound energies are negative with *E* = 0 at *n* = ∞ (ionization).",
        "A photon is emitted (downward jump) or absorbed (upward jump) only when its energy matches the exact level separation: {{ΔE = hf = hc/λ}}.",
        "Emission lines (bright on dark) and absorption lines (dark on continuous rainbow) of the same element occur at identical wavelengths.",
        "For *N* accessible levels, up to {{N(N-1)/2}} distinct emission lines can appear; bigger Δ*E* means higher frequency and shorter wavelength.",
      ],
      whyItWorks:
        "Why doesn't a passing photon with *almost* the right energy partially excite an electron? Because a photon is an indivisible packet of energy — in an atomic transition, it is all or nothing. Unless {{hf}} matches an exact gap Δ*E* (or exceeds the ionization energy so the electron escapes into the continuum of free kinetic energies), the photon passes straight through unabsorbed.",
      strategies: [
        "Always check units first: convert eV to joules (× 1.60 × 10⁻¹⁹) BEFORE substituting into {{E = hf}} or {{λ = hc/E}}.",
        "Sketch an energy-level ladder with arrows pointing DOWN for emission and UP for absorption; the longest arrow is the shortest wavelength (highest frequency).",
        "When explaining Rutherford scattering in Paper 2, pair EVERY observation with its specific conclusion (straight through → empty space; small deflection → positive repulsion; > 90° backscatter → tiny, dense, massive positive nucleus).",
      ],
      thinkDeeper:
        "When white light shines through cool hydrogen gas in a star's outer atmosphere, electrons absorb photons and quickly re-emit identical photons — so why do dark absorption lines still appear in the spectrum we observe? Because absorption removes photons travelling strictly along our line of sight, whereas spontaneous re-emission scatters photons isotropically in all 4π steradians, leaving only a tiny fraction heading toward our telescope!",
    },

    // =========================================================================
    // SECTION 2 (HL): Closest Approach, Nuclear Radius & Bohr Quantization
    // =========================================================================
    {
      id: "nuclear-radius-bohr-hl",
      heading: "E.1 Closest Approach, Nuclear Radius & Bohr Quantization",
      level: "HL",
      discovery: {
        problem:
          "How can you measure the size of a nucleus that is 100,000 times smaller than an atom and impossible to see with visible light? Suppose you fire a 5 MeV α-particle directly head-on at a gold nucleus (+79*e*). What determines how close it gets before stopping and turning back?",
        idea:
          "By conservation of energy, the α-particle stops momentarily when all of its initial kinetic energy has turned into electrostatic potential energy {{E_k = k(2e)(Ze)/d}}. That turning distance *d* gives an upper bound on the nuclear radius! To measure the true nuclear radius *R*, physicists either raise α-energy until deviations from Rutherford's pure-Coulomb prediction reveal the short-range **strong nuclear force**, or diffract high-energy electrons (which don't feel the strong force) off nuclei.",
      },
      body: `### Distance of Closest Approach & Deviations from Rutherford Scattering [HL]

For a head-on collision of an α-particle (charge {{q_1 = +2e}}, initial kinetic energy {{E_k}}) with a stationary target nucleus (charge {{q_2 = +Ze}}), conservation of energy at the turning point (distance *d* from the nuclear centre) gives:

{{E_k = (k q_1 q_2)/d = (2 Z k e^2)/d}}  ⇒  {{d = (2 Z k e^2)/E_k}}

where {{k = 1/(4π ε_0) = 8.99 * 10^9}} N m² C⁻².

- At moderate α-energies (~5 MeV), *d* is still several times larger than the gold nucleus, so *d* provides an **upper limit** for the nuclear radius (and assumes the heavy nucleus does not recoil).
- At very high α-energies (~25–30 MeV for light/medium nuclei), α-particles approach within ~{{10^(-15)}} m of the nuclear surface and experience the **attractive, short-range strong nuclear force**. Scattering intensities then **deviate below** Rutherford's purely electrostatic formula — directly signalling nuclear contact!

### Nuclear Radius Law & Constant Nuclear Density [HL]

High-energy **electron diffraction** off thin nuclear targets provides the sharpest measurement of nuclear diameter *D* = 2*R*, because electrons are leptons (unaffected by the strong nuclear force) and can be accelerated to de Broglie wavelengths λ comparable to nuclear dimensions (~1 fm). The first diffraction minimum satisfies:

{{sin θ ≈ λ/D}}

Measurements across the periodic table follow the empirical nuclear radius relation:

{{R = R_0 A^(1/3)}}

where {{R_0 = 1.20 * 10^(-15)}} m (1.20 fm) is the Fermi constant and *A* is the nucleon (mass) number.

**Proving nuclear density is constant:** Modeling the nucleus as a sphere of volume {{V = (4/3)π R^3 = (4/3)π R_0^3 A}} and mass {{M ≈ A u}} (where {{u = 1.661 * 10^(-27)}} kg):

{{ρ = M/V = (A u)/((4/3)π R_0^3 A) = (3u)/(4π R_0^3) ≈ 2.3 * 10^(17)}} kg m⁻³

Because *A* cancels completely, **all nuclei have roughly the same colossal density** (~{{2.3 * 10^(17)}} kg m⁻³, comparable to a neutron star), proving that nucleons pack tightly like incompressible marbles with a short-range force.

### Bohr Model & Quantization of Angular Momentum [HL]

In 1913, Niels Bohr explained hydrogen's exact spectral lines by postulating that an electron can orbit stably without radiating only when its orbital angular momentum *L* is an integer multiple of {{h/(2π)}}:

{{L = m v r = (n h)/(2π)}}  for {{n = 1, 2, 3, …}}

Combining this quantization rule with Coulomb centripetal force {{m v^2/r = k e^2/r^2}} yields quantized orbital radii {{r_n ∝ n^2}} and exact hydrogen energy levels:

{{E_n = -13.6/n^2}} eV`,
      diagram: `<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel: Head-on alpha particle distance of closest approach d and strong-force deviation graph. Right panel: Nuclear radius R equals R0 A to the one-third power curve and electron diffraction first minimum angle theta.">
  <rect x="0" y="0" width="660" height="280" fill="#ffffff"/>
  <defs>
    <marker id="arrDark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
    </marker>
    <marker id="arrOrg" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/>
    </marker>
  </defs>

  <!-- Left Panel: Closest Approach + Strong Force Deviation -->
  <rect x="12" y="12" width="310" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="167" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Closest Approach &amp; Strong-Force Deviation</text>

  <!-- Top half: Head-on collision schematic -->
  <circle cx="52" cy="86" r="8" fill="#2563eb"/>
  <text x="52" y="90" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">α</text>
  <line x1="64" y1="86" x2="156" y2="86" stroke="#2563eb" stroke-width="2" marker-end="url(#arrDark)"/>
  <text x="108" y="76" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#1d4ed8" text-anchor="middle">E_k → 0 at turn</text>
  <!-- Turning point dashed line -->
  <line x1="166" y1="62" x2="166" y2="112" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="166" cy="86" r="5" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <!-- Gold nucleus -->
  <circle cx="264" cy="86" r="18" fill="#dc2626" fill-opacity="0.18" stroke="#dc2626" stroke-width="2"/>
  <circle cx="264" cy="86" r="9" fill="#dc2626"/>
  <text x="264" y="90" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">+Ze</text>
  <!-- Dimension arrow d -->
  <line x1="168" y1="108" x2="262" y2="108" stroke="#0f172a" stroke-width="1.4" marker-start="url(#arrDark)" marker-end="url(#arrDark)"/>
  <text x="215" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">d = k(2e)(Ze)/E_k</text>

  <!-- Bottom half: Scattering intensity vs angle / energy -->
  <line x1="50" y1="234" x2="296" y2="234" stroke="#334155" stroke-width="1.6" marker-end="url(#arrDark)"/>
  <line x1="50" y1="234" x2="50" y2="144" stroke="#334155" stroke-width="1.6" marker-end="url(#arrDark)"/>
  <text x="175" y="254" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">Scattering angle θ (high-energy α)</text>
  <text x="36" y="190" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle" transform="rotate(-90 36 190)">Intensity</text>
  <!-- Pure Rutherford curve -->
  <path d="M 62 152 Q 115 190 282 214" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 3" fill="none"/>
  <text x="234" y="200" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#2563eb">Rutherford</text>
  <!-- Actual curve with strong force deviation -->
  <path d="M 62 152 Q 115 190 165 204 Q 210 218 282 228" stroke="#dc2626" stroke-width="2.2" fill="none"/>
  <text x="228" y="226" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#dc2626">Strong force</text>

  <!-- Right Panel: R = R0 A^(1/3) & Electron Diffraction -->
  <rect x="334" y="12" width="314" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="491" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Nuclear Sizing: R = R₀A¹/³ &amp; e⁻ Diffraction</text>

  <!-- Top: R vs A graph -->
  <line x1="382" y1="146" x2="622" y2="146" stroke="#334155" stroke-width="1.5" marker-end="url(#arrDark)"/>
  <line x1="382" y1="146" x2="382" y2="52" stroke="#334155" stroke-width="1.5" marker-end="url(#arrDark)"/>
  <text x="502" y="162" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">Nucleon number A</text>
  <text x="358" y="100" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle" transform="rotate(-90 358 100)">R (fm)</text>
  <!-- Cube root curve -->
  <path d="M 382 146 C 392 108 442 84 612 68" stroke="#0d9488" stroke-width="2.6" fill="none"/>
  <!-- Sample nuclei dots: He-4, C-12, Fe-56, Au-197 -->
  <circle cx="395" cy="123" r="3.5" fill="#0f766e"/>
  <text x="404" y="129" font-family="system-ui, sans-serif" font-size="9" fill="#0f766e">He-4</text>
  <circle cx="448" cy="96" r="3.5" fill="#0f766e"/>
  <text x="453" y="91" font-family="system-ui, sans-serif" font-size="9" fill="#0f766e">Fe-56</text>
  <circle cx="585" cy="71" r="3.5" fill="#0f766e"/>
  <text x="580" y="62" font-family="system-ui, sans-serif" font-size="9" fill="#0f766e" text-anchor="middle">Au-197 (7.0 fm)</text>
  <text x="530" y="114" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f766e">V ∝ A ⇒ ρ = const</text>

  <!-- Bottom: Electron diffraction intensity vs angle -->
  <line x1="382" y1="242" x2="622" y2="242" stroke="#334155" stroke-width="1.5" marker-end="url(#arrDark)"/>
  <line x1="382" y1="242" x2="382" y2="178" stroke="#334155" stroke-width="1.5" marker-end="url(#arrDark)"/>
  <text x="502" y="258" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">Diffraction angle θ (sin θ_min ≈ λ / D)</text>
  <text x="364" y="212" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155" text-anchor="middle" transform="rotate(-90 364 212)">log I</text>
  <path d="M 384 184 Q 440 202 474 234 Q 492 214 522 222 Q 554 238 578 228 Q 600 232 616 238" stroke="#7c3aed" stroke-width="2.2" fill="none"/>
  <circle cx="474" cy="234" r="3.5" fill="#dc2626"/>
  <line x1="474" y1="234" x2="474" y2="242" stroke="#dc2626" stroke-width="1.5"/>
  <text x="488" y="202" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#dc2626">1st min: θ_min</text>
</svg>`,
      diagramCaption:
        "Energy conservation gives the closest-approach upper limit, while high-energy electron diffraction and R = R₀A¹/³ confirm constant nuclear density.",
      workedExamples: [
        {
          title: "Distance of closest approach for a 5.00 MeV α-particle on gold",
          problem:
            "A 5.00 MeV α-particle (charge +2*e*) travels directly head-on toward a stationary gold nucleus (*Z* = 79). Calculate its distance of closest approach *d* and compare it with the actual gold-197 nuclear radius.",
          steps: [
            "Convert kinetic energy to joules: {{E_k = 5.00 * 10^6 * 1.60 * 10^(-19) = 8.00 * 10^(-13)}} J.",
            "Equate initial {{E_k}} to electrostatic potential energy at rest: {{E_k = (k (2e)(79e))/d}}.",
            "Solve for *d*: {{d = (8.99 * 10^9 * 158 * (1.60 * 10^(-19))^2) / (8.00 * 10^(-13)) = (3.636 * 10^(-26)) / (8.00 * 10^(-13)) = 4.55 * 10^(-14)}} m (45.5 fm).",
            "Compare with gold-197 radius: {{R = 1.20 * 10^(-15) * 197^(1/3) = 6.98 * 10^(-15)}} m (6.98 fm). Since {{d >> R}}, the α-particle turns back well outside the nucleus, so *d* is an upper bound only.",
          ],
          answer: "d = 4.55 × 10⁻¹⁴ m (45.5 fm), about 6.5× larger than R_Au = 6.98 fm",
          yourTurn: {
            question:
              "Using R = R₀A^(1/3) with R₀ = 1.20 fm, calculate the nuclear radius of copper-64 (A = 64) in femtometres (enter the numerical value only).",
            answer: { type: "number", value: 4.8, tolerance: 0.05 },
            solution: "Since 64^(1/3) = 4, R = 1.20 × 4 = 4.80 fm.",
          },
        },
        {
          title: "Bohr energy levels and angular momentum in hydrogen",
          problem:
            "A hydrogen electron is in the *n* = 2 state. Calculate (a) the minimum photon energy needed to ionize it from this state, and (b) its orbital angular momentum according to the Bohr model.",
          steps: [
            "(a) Use {{E_n = -13.6/n^2}} eV: {{E_2 = -13.6/2^2 = -3.40}} eV.",
            "Ionization raises the electron to *E* = 0 eV (*n* = ∞), so the minimum required energy is {{ΔE = 0 - (-3.40) = 3.40}} eV.",
            "(b) Use Bohr's quantization condition {{L = nh/(2π)}} with *n* = 2: {{L = (2 * 6.63 * 10^(-34)) / (2π) = (6.63 * 10^(-34)) / π = 2.11 * 10^(-34)}} J s.",
          ],
          answer: "(a) 3.40 eV; (b) 2.11 × 10⁻³⁴ J s",
          yourTurn: {
            question:
              "Calculate the energy (in eV, including the negative sign, to 2 decimal places) of an electron in the n = 4 energy level of hydrogen using E_n = −13.6/n² eV.",
            answer: { type: "number", value: -0.85, tolerance: 0.01, display: "−0.85 eV" },
            solution: "E_4 = −13.6 / 4² = −13.6 / 16 = −0.85 eV.",
          },
        },
      ],
      keyPoints: [
        "Closest approach {{d = k(2e)(Ze)/E_k}} uses energy conservation and gives an **upper bound** on nuclear radius (assuming no nuclear recoil).",
        "At very high α-energies, observed scattering deviates from Rutherford's pure-Coulomb prediction because α-particles enter the range of the **strong nuclear force**.",
        "High-energy electron diffraction ({{sin θ ≈ λ/D}}) measures nuclear diameter cleanly because electrons do not experience the strong nuclear force.",
        "{{R = R_0 A^(1/3)}} implies {{V ∝ A}}, proving that **nuclear density is approximately constant** (~{{2.3 * 10^(17)}} kg m⁻³) across all nuclides.",
        "Bohr quantized orbital angular momentum as {{mvr = nh/(2π)}}, deriving hydrogen's energy levels {{E_n = -13.6/n^2}} eV.",
      ],
      whyItWorks:
        "Why does electron diffraction outperform α-scattering for measuring nuclear radius? First, electrons are leptons so they interact only electromagnetically (no messy strong-force distortion). Second, their tiny rest mass means relativistic energies of a few hundred MeV give de Broglie wavelengths λ ≈ 1 fm — matching nuclear diameters so crisp diffraction minima appear.",
      strategies: [
        "For ratio problems with {{R = R_0 A^(1/3)}}, never plug in {{R_0}} unnecessarily — just take {{R_2/R_1 = (A_2/A_1)^(1/3)}} directly!",
        "When computing closest approach, remember the α-particle charge is **+2e** (not +e) and convert MeV to joules by multiplying by {{1.60 * 10^(-13)}}.",
        "Always check whether a Bohr question asks for the energy *of* level *n* (negative, e.g. −3.40 eV) or the *ionization/transition energy* (positive magnitude, e.g. +3.40 eV).",
      ],
      thinkDeeper:
        "If nuclear volume scales strictly with *A*, why can't nuclei grow arbitrarily large forever? Because the attractive strong nuclear force saturates over ~2–3 fm (acting only on nearest neighbours), whereas electrostatic proton–proton repulsion is long-range and acts across the *entire* nucleus — eventually winning out for heavy elements beyond bismuth (*Z* > 83).",
    },

    // =========================================================================
    // SECTION 3 (HL): The Photoelectric Effect & Compton Scattering
    // =========================================================================
    {
      id: "photoelectric-compton-hl",
      heading: "E.2 The Photoelectric Effect & Compton Scattering",
      level: "HL",
      discovery: {
        problem:
          "Shine an ultra-bright red laser onto a clean zinc plate and zero electrons escape — wait an hour, still zero. Now shine a faint ultraviolet lamp onto the same zinc plate and electrons pop out **immediately**. Why does classical wave theory completely fail to explain this?",
        idea:
          "In classical wave theory, wave energy spreads smoothly over the metal surface and grows with intensity (∝ amplitude²), so bright red light should eventually supply enough energy to eject electrons, while dim UV light should require a long 'soaking' delay. Einstein's 1905 photon model resolved every contradiction at once: light energy arrives in discrete quanta {{E = hf}}, and each electron absorbs **one single photon** instantaneously.",
      },
      body: `### Classical Wave Predictions vs Experimental Photoelectric Observations [HL]

| Feature | Classical wave prediction | Experimental observation | Photon explanation |
|---|---|---|---|
| **Threshold frequency {{f_0}}** | Any frequency should eject electrons if light is bright enough | No emission at any intensity if {{f < f_0}} | One photon must supply at least the work function: {{hf ≥ Φ}} |
| **Emission time delay** | Dim light should require measurable time to accumulate energy | Emission is **instantaneous** (if {{f ≥ f_0}}) | Single-photon energy transfer happens in one quantum interaction |
| **Effect of intensity** | Higher intensity should raise electron kinetic energy | Higher intensity raises **photocurrent** (rate of emission), NOT {{E_(k,max)}} | Greater intensity at fixed *f* means more photons per second, each with the same {{hf}} |
| **Effect of frequency** | Frequency should not determine {{E_(k,max)}} | {{E_(k,max)}} increases linearly with *f* above {{f_0}} | Excess energy above Φ becomes kinetic energy: {{E_(k,max) = hf - Φ}} |

### Einstein's Photoelectric Equation & Stopping Potential [HL]

The **work function** Φ is the minimum energy required to release an electron from the surface of a metal. A surface electron absorbing a photon of energy {{hf}} escapes with the maximum possible kinetic energy:

{{E_(k,max) = hf - Φ}}

Electrons originating slightly deeper below the surface lose extra energy in collisions before escaping, so emitted photoelectrons emerge with a range of kinetic energies from 0 up to {{E_(k,max)}}.

To measure {{E_(k,max)}}, a reverse (opposing) voltage is increased until the fastest electrons just fail to reach the collector plate (photocurrent drops to zero). This voltage is the **stopping potential** {{V_s}}:

{{e V_s = E_(k,max) = hf - Φ}}  ⇒  {{V_s = (h/e) f - Φ/e}}

Plotting {{V_s}} against *f* (Millikan's graph) gives a straight line with:
- **Gradient** = {{h/e ≈ 4.14 * 10^(-15)}} V s (**universal** — identical for every metal!)
- **Horizontal intercept** = threshold frequency {{f_0 = Φ/h}}
- **Vertical intercept** = {{-Φ/e}} (extrapolated below *f* = {{f_0}})

### Compton Scattering & Photon Momentum [HL]

In 1923, Arthur Compton fired monochromatic X-rays (wavelength {{λ_i}}) at loosely bound (effectively free) electrons in a graphite target and found that scattered X-rays emerged at a **longer wavelength** {{λ_f > λ_i}}, with the shift depending strictly on the scattering angle θ:

{{Δλ = λ_f - λ_i = (h/(m_e c))(1 - cos θ)}}

where the **Compton wavelength** of the electron is {{h/(m_e c) ≈ 2.43 * 10^(-12)}} m (2.43 pm).

- Classical EM wave theory predicts that an oscillating electric field shakes an electron at the *same* incident frequency, re-radiating the *same* wavelength (Δλ = 0).
- Compton explained Δλ > 0 by treating the collision as a relativistic **billiard-ball impact** conserving BOTH energy and momentum, proving that massless photons carry **linear momentum**:

{{p = E/c = h/λ}}

- At θ = 0° (straight through), Δλ = 0. At θ = 90°, {{Δλ = h/(m_e c) = 2.43}} pm. At θ = 180° (head-on backscatter), Δλ reaches its maximum {{2h/(m_e c) ≈ 4.85}} pm and the electron gains maximum recoil kinetic energy.`,
      diagram: `<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel: Millikan stopping potential Vs versus frequency f graph for two metals showing parallel straight lines of gradient h over e, threshold frequencies f0, and negative y-intercepts minus phi over e. Right panel: Compton scattering of an incident X-ray photon off a stationary electron through angle theta with increased wavelength.">
  <rect x="0" y="0" width="660" height="280" fill="#ffffff"/>
  <defs>
    <marker id="arrBlk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
    </marker>
    <marker id="arrP1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="arrP2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Left Panel: Millikan V_s vs f graph -->
  <rect x="12" y="12" width="318" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="171" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Photoelectric Millikan Graph (V_s vs f)</text>

  <!-- Axes -->
  <line x1="68" y1="246" x2="68" y2="48" stroke="#1e293b" stroke-width="1.7" marker-end="url(#arrBlk)"/>
  <line x1="56" y1="166" x2="312" y2="166" stroke="#1e293b" stroke-width="1.7" marker-end="url(#arrBlk)"/>
  <text x="58" y="56" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end">V_s</text>
  <text x="312" y="182" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end">f</text>

  <!-- Metal 1 (Na, lower work function) -->
  <!-- y=166 is V=0. Gradient = -0.82 px/px. f0 at x=142, y-intercept at x=68 -> y = 166 + 0.82*(142-68)=227 -->
  <line x1="68" y1="214" x2="136" y2="166" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="136" y1="166" x2="276" y2="67" stroke="#2563eb" stroke-width="2.6"/>
  <circle cx="136" cy="166" r="3.5" fill="#2563eb"/>
  <text x="136" y="182" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">f₀(Na)</text>
  <text x="62" y="218" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#2563eb" text-anchor="end">−Φ₁/e</text>
  <text x="242" y="76" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb">Metal 1 (Na)</text>

  <!-- Metal 2 (Zn, higher work function, strictly parallel!) -->
  <line x1="68" y1="244" x2="178" y2="166" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="178" y1="166" x2="304" y2="77" stroke="#0d9488" stroke-width="2.6"/>
  <circle cx="178" cy="166" r="3.5" fill="#0d9488"/>
  <text x="184" y="182" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f766e" text-anchor="middle">f₀(Zn)</text>
  <text x="62" y="248" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0f766e" text-anchor="end">−Φ₂/e</text>
  <text x="266" y="120" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f766e">Metal 2 (Zn)</text>

  <!-- Slope triangle -->
  <polyline points="178,136 226,136 226,102" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="150" y="96" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#c2410c">Gradient = h / e</text>
  <text x="150" y="109" font-family="system-ui, sans-serif" font-size="9.5" fill="#c2410c">(same for all metals)</text>

  <!-- Right Panel: Compton Scattering -->
  <rect x="342" y="12" width="306" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="495" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Compton Scattering (p = h / λ)</text>

  <!-- Reference horizontal axis -->
  <line x1="362" y1="146" x2="626" y2="146" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5 4"/>

  <!-- Incident X-ray wavy photon -->
  <path d="M 364 146 Q 371 136 378 146 T 392 146 T 406 146 T 420 146 T 434 146 T 448 146" fill="none" stroke="#2563eb" stroke-width="2.2" marker-end="url(#arrP1)"/>
  <text x="406" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">Incident photon</text>
  <text x="406" y="134" font-family="system-ui, sans-serif" font-size="9.5" fill="#1d4ed8" text-anchor="middle">λ_i, p_i = h/λ_i</text>

  <!-- Target electron at rest -->
  <circle cx="468" cy="146" r="9" fill="#0f172a"/>
  <text x="468" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">e⁻</text>
  <text x="468" y="170" font-family="system-ui, sans-serif" font-size="9" fill="#475569" text-anchor="middle">at rest</text>

  <!-- Scattered longer-wavelength photon at angle theta -->
  <path d="M 477 139 L 604 72" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="8 4" marker-end="url(#arrP2)"/>
  <text x="562" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Scattered photon</text>
  <text x="566" y="106" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#dc2626">λ_f &gt; λ_i</text>

  <!-- Angle arc theta -->
  <path d="M 518 146 A 50 50 0 0 0 512 121" fill="none" stroke="#dc2626" stroke-width="1.8"/>
  <text x="528" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">θ</text>

  <!-- Recoil electron -->
  <line x1="476" y1="154" x2="584" y2="218" stroke="#0d9488" stroke-width="2.2" marker-end="url(#arrBlk)"/>
  <circle cx="592" cy="222" r="7" fill="#0d9488"/>
  <text x="592" y="225" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">e⁻</text>
  <text x="515" y="216" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0f766e">Recoil electron</text>

  <!-- Formula box -->
  <rect x="366" y="236" width="258" height="24" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
  <text x="495" y="252" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a" text-anchor="middle">Δλ = (h / m_e c)(1 − cos θ),  h/m_e c = 2.43 pm</text>
</svg>`,
      diagramCaption:
        "Millikan's V_s–f graph directly measures h/e and Φ/e; Compton's angle-dependent wavelength shift proves photons carry momentum p = h/λ.",
      workedExamples: [
        {
          title: "Photoelectric stopping potential and maximum electron speed",
          problem:
            "Ultraviolet light of wavelength 250 nm illuminates a clean zinc surface whose work function is Φ = 4.30 eV. Calculate (a) the stopping potential {{V_s}}, and (b) the maximum speed of the emitted photoelectrons.",
          steps: [
            "Calculate the incident photon energy: {{E = hc/λ = (6.63 * 10^(-34) * 3.00 * 10^8) / (250 * 10^(-9)) = 7.956 * 10^(-19)}} J.",
            "Convert Φ to joules: {{Φ = 4.30 * 1.60 * 10^(-19) = 6.880 * 10^(-19)}} J (or convert *E* to eV: {{7.956/1.60 = 4.97}} eV).",
            "(a) Maximum kinetic energy: {{E_(k,max) = 7.956 * 10^(-19) - 6.880 * 10^(-19) = 1.076 * 10^(-19)}} J = 0.67 eV. Therefore stopping potential {{V_s = E_(k,max)/e = 0.67}} V.",
            "(b) From {{E_(k,max) = (1/2) m_e v_(max)^2}}: {{v_(max) = sqrt((2 * 1.076 * 10^(-19)) / (9.11 * 10^(-31))) = 4.86 * 10^5}} m s⁻¹.",
          ],
          answer: "(a) V_s = 0.67 V; (b) v_max = 4.86 × 10⁵ m s⁻¹",
          yourTurn: {
            question:
              "Monochromatic light with photon energy 4.20 eV strikes a sodium surface of work function 2.28 eV. Calculate the stopping potential V_s in volts (to 2 decimal places).",
            answer: { type: "number", value: 1.92, tolerance: 0.02, display: "1.92 V" },
            solution: "E_k,max = hf − Φ = 4.20 − 2.28 = 1.92 eV, so V_s = E_k,max / e = 1.92 V.",
          },
        },
        {
          title: "Compton wavelength shift at θ = 60°",
          problem:
            "An X-ray photon of wavelength 0.0500 nm undergoes Compton scattering off a stationary free electron through an angle of 60°. Calculate the scattered photon's wavelength and explain why the electron recoils.",
          steps: [
            "Recall the Compton wavelength of the electron: {{h/(m_e c) = (6.63 * 10^(-34)) / (9.11 * 10^(-31) * 3.00 * 10^8) = 2.43 * 10^(-12)}} m = 0.00243 nm.",
            "Apply the Compton shift formula: {{Δλ = (h/(m_e c))(1 - cos 60°) = 0.00243 * (1 - 0.500) = 0.00122}} nm.",
            "Add the shift to the incident wavelength: {{λ_f = λ_i + Δλ = 0.0500 + 0.00122 = 0.0512}} nm.",
            "Because {{λ_f > λ_i}}, the scattered photon has lower energy and momentum; by conservation of energy and momentum, the difference is transferred to the recoiling electron.",
          ],
          answer: "λ_f = 0.0512 nm",
          yourTurn: {
            question:
              "An X-ray photon of initial wavelength 0.0800 nm is Compton scattered through 90° off a free electron. Using h/(m_e c) = 0.00243 nm, calculate the wavelength of the scattered photon in nm (to 4 decimal places).",
            answer: { type: "number", value: 0.0824, tolerance: 0.0002, display: "0.0824 nm" },
            solution:
              "At θ = 90°, cos 90° = 0, so Δλ = 0.00243(1 − 0) = 0.00243 nm. Therefore λ_f = 0.0800 + 0.00243 = 0.08243 nm ≈ 0.0824 nm.",
          },
        },
      ],
      keyPoints: [
        "Einstein's photoelectric equation {{E_(k,max) = hf - Φ = e V_s}} proves light transfers energy in discrete quanta (photons) via one-to-one photon–electron interactions.",
        "Above {{f_0}}, increasing intensity increases the **number** of photoelectrons per second (current) while leaving {{E_(k,max)}} and {{V_s}} unchanged.",
        "On a {{V_s}} vs *f* graph, all metals produce parallel straight lines of gradient {{h/e}}, x-intercept {{f_0}}, and y-intercept {{-Φ/e}}.",
        "Compton scattering {{Δλ = (h/(m_e c))(1 - cos θ)}} depends ONLY on scattering angle θ (not on {{λ_i}}) and confirms photons carry momentum {{p = h/λ}}.",
        "Compton shifts are fractional ~{{10^(-5)}} for visible light (negligible) but several percent for X-rays and γ-rays.",
      ],
      whyItWorks:
        "Why doesn't the stopping potential change when you double the light intensity? Because stopping potential measures the kinetic energy of the *single fastest electron*. Doubling intensity at constant frequency doubles the arrival rate of photons — like throwing twice as many identical tennis balls per second — so twice as many electrons get knocked out, but no single electron receives more energy.",
      strategies: [
        "Check whether a photoelectric graph plots {{E_(k,max)}} vs *f* (gradient = *h*, y-intercept = −Φ) or {{V_s}} vs *f* (gradient = *h/e*, y-intercept = −Φ/*e*) — mixing these up is a classic Paper 1 trap!",
        "When working in eV, remember the shortcut: if {{E_(k,max) = 2.40}} eV, then {{V_s}} is immediately **2.40 V** (no multiplication by *e* needed until you calculate speed *v*).",
        "In Compton problems, double-check that your calculator is in **degrees** when evaluating {{1 - cos θ}}, and remember Δλ is strictly **positive** ({{λ_f > λ_i}}).",
      ],
      thinkDeeper:
        "Why can't a completely *free* electron in empty space absorb a photon completely (as in the photoelectric effect)? Try conserving both relativistic energy and momentum simultaneously — you'll find no solution exists! Photoelectric absorption requires a nearby heavy atom/lattice to soak up the excess recoil momentum, whereas a free electron can only *scatter* the photon (Compton scattering).",
    },

    // =========================================================================
    // SECTION 4 (HL): Matter Waves, de Broglie Wavelength & Electron Diffraction
    // =========================================================================
    {
      id: "wave-particle-duality-hl",
      heading: "E.2 Matter Waves, de Broglie Wavelength & Electron Diffraction",
      level: "HL",
      discovery: {
        problem:
          "If light — which we always thought was a wave — can act like a particle carrying momentum {{p = h/λ}}, Louis de Broglie asked a breathtaking symmetry question in his 1924 PhD thesis: could an electron — which we always thought was a particle — act like a wave? And if so, why don't you diffract when walking through a doorway?",
        idea:
          "Flipping the photon momentum relation gives the **de Broglie wavelength** {{λ = h/p = h/(mv)}}. A 60 kg student walking at 1 m s⁻¹ has {{λ ≈ 10^(-35)}} m — twenty-five orders of magnitude smaller than an atom, so doorway diffraction is utterly invisible. An electron, however, is {{10^31}} times lighter, giving λ ~ 0.1 nm at modest voltages — an exact match for atomic crystal spacings!",
      },
      body: `### The de Broglie Wavelength [HL]

In 1924, Louis de Broglie proposed that **all matter** exhibits wave-like properties, with a wavelength inversely proportional to its linear momentum *p*:

{{λ = h/p = h/(mv)}}

For a non-relativistic particle of mass *m* and charge *q* accelerated from rest through a potential difference *V*, its kinetic energy is {{E_k = qV = p^2/(2m)}}, giving {{p = sqrt(2 m E_k) = sqrt(2 m q V)}} and therefore:

{{λ = h/sqrt(2 m E_k) = h/sqrt(2 m q V)}}

Notice the key scaling laws:
- Doubling momentum *p* halves λ.
- Quadrupling accelerating voltage *V* (or {{E_k}}) doubles *p* and **halves** λ ({{λ ∝ 1/sqrt(V)}}).
- At equal kinetic energy, a heavier particle (e.g. a proton vs an electron) has larger momentum and a much **shorter** de Broglie wavelength ({{λ ∝ 1/sqrt(m)}}).

### Experimental Evidence: Electron Diffraction [HL]

In 1927, Clinton Davisson and Lester Germer (scattering electrons off a nickel crystal) and George Paget Thomson (passing fast electrons through thin polycrystalline gold/graphite film) independently observed **concentric circular diffraction rings** on a fluorescent screen — a hallmark exclusively of wave interference!

- Each tiny crystal grain acts like a miniature diffraction grating with interatomic spacing *d* (~0.2 nm). Because the grains are randomly oriented around the beam axis, constructive interference spots smear into concentric bright rings at angles satisfying {{sin θ ∝ λ/d}}.
- **Crucial diagnostic test**: Increasing the accelerating voltage *V* increases electron momentum *p*, which **decreases** de Broglie wavelength λ — causing the **diffraction rings to contract (shrink in diameter)**!
- Even when electrons are fired **one at a time** through a double slit, each electron lands as a single localized dot (particle), yet thousands of electrons gradually build up a wave interference fringe pattern (wave probability distribution).

### Wave–Particle Duality & Standing Waves in the Bohr Atom [HL]

Matter and radiation exhibit **wave–particle duality**:
- **Wave behaviour** dominates propagation and interference (double-slit fringes, electron diffraction, diffraction gratings).
- **Particle behaviour** dominates localized energy/momentum exchanges (photoelectric effect, Compton scattering, individual detector clicks).

de Broglie's matter waves gave an immediate physical reason for Bohr's mysterious quantization rule! For an electron wave wrapped around a circular orbit of radius *r* not to cancel itself out by destructive interference, the circumference must contain an exact **integer number of de Broglie wavelengths** (a circular standing wave):

{{2π r = n λ}}  ⇒  {{2π r = n (h/(mv))}}  ⇒  {{m v r = (n h)/(2π)}}

Only those discrete standing-wave orbits survive — explaining why atomic energy levels are quantized!`,
      diagram: `<svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel: Electron diffraction tube producing concentric bright rings through thin graphite film, showing rings shrinking as accelerating voltage V increases. Right panel: Bohr standing-wave electron orbit 2 pi r equals n lambda for allowed n=4 standing wave versus forbidden non-integer destructive interference.">
  <rect x="0" y="0" width="660" height="280" fill="#ffffff"/>
  <defs>
    <marker id="arrTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488"/>
    </marker>
  </defs>

  <!-- Left Panel: Electron Diffraction Tube & Rings -->
  <rect x="12" y="12" width="318" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="171" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Electron Diffraction (Polycrystalline Graphite)</text>

  <!-- Electron gun -->
  <rect x="26" y="112" width="44" height="32" rx="4" fill="#334155"/>
  <text x="48" y="132" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">e⁻ gun</text>
  <text x="48" y="158" font-family="system-ui, sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Accel. V</text>

  <!-- Beam -->
  <line x1="70" y1="128" x2="124" y2="128" stroke="#0d9488" stroke-width="2.4" marker-end="url(#arrTeal)"/>
  <!-- Graphite target -->
  <rect x="128" y="96" width="8" height="64" rx="2" fill="#475569"/>
  <text x="132" y="88" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#334155" text-anchor="middle">Graphite</text>

  <!-- Diffracted cones -->
  <line x1="136" y1="128" x2="210" y2="128" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="136" y1="128" x2="210" y2="96" stroke="#16a34a" stroke-width="1.8"/>
  <line x1="136" y1="128" x2="210" y2="160" stroke="#16a34a" stroke-width="1.8"/>
  <line x1="136" y1="128" x2="210" y2="76" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="4 2"/>
  <line x1="136" y1="128" x2="210" y2="180" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="4 2"/>

  <!-- Fluorescent screen face view -->
  <circle cx="264" cy="128" r="54" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
  <circle cx="264" cy="128" r="4.5" fill="#4ade80"/>
  <circle cx="264" cy="128" r="22" fill="none" stroke="#4ade80" stroke-width="3" stroke-opacity="0.9"/>
  <circle cx="264" cy="128" r="40" fill="none" stroke="#86efac" stroke-width="2.4" stroke-opacity="0.75"/>
  <text x="264" y="198" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Phosphor Screen</text>

  <!-- Scaling callout -->
  <rect x="26" y="212" width="290" height="44" rx="7" fill="#ecfdf5" stroke="#a7f3d0"/>
  <text x="171" y="230" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#065f46" text-anchor="middle">Higher voltage V ↑ ⇒ p ↑ ⇒ λ = h/√(2meV) ↓</text>
  <text x="171" y="246" font-family="system-ui, sans-serif" font-size="10" fill="#065f46" text-anchor="middle">⇒ Diffraction angle θ ↓ ⇒ Concentric rings SHRINK</text>

  <!-- Right Panel: Bohr Standing Wave 2 pi r = n lambda -->
  <rect x="342" y="12" width="306" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="495" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Bohr Standing Electron Wave (2πr = nλ)</text>

  <!-- Allowed orbit n = 4 (left sub-circle) -->
  <circle cx="430" cy="136" r="50" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <circle cx="430" cy="136" r="5" fill="#dc2626"/>
  <!-- 4-wavelength closed standing wave around r=50 centered at (430,136) -->
  <path d="M 488 136 C 488 150 472 161 465 171 C 458 181 444 194 430 194 C 416 194 405 178 395 171 C 385 164 372 150 372 136 C 372 122 388 111 395 101 C 402 91 416 78 430 78 C 444 78 455 94 465 101 C 475 108 488 122 488 136 Z" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <text x="430" y="210" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">Allowed: n = 4</text>
  <text x="430" y="224" font-family="system-ui, sans-serif" font-size="9.5" fill="#15803d" text-anchor="middle">Closed standing wave</text>

  <!-- Forbidden non-integer orbit (right sub-circle) -->
  <circle cx="574" cy="136" r="44" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <circle cx="574" cy="136" r="5" fill="#dc2626"/>
  <path d="M 624 136 Q 618 164 596 174 Q 568 188 548 168 Q 524 148 536 116 Q 548 86 580 92 Q 614 96 618 124 Q 620 144 606 146" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
  <text x="574" y="210" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="middle">Forbidden: n = 3.5</text>
  <text x="574" y="224" font-family="system-ui, sans-serif" font-size="9.5" fill="#dc2626" text-anchor="middle">Destructive interference</text>

  <!-- Derivation strip -->
  <rect x="358" y="238" width="274" height="22" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
  <text x="495" y="253" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">2πr = n(h / mv)  ⇒  mvr = nh / (2π)</text>
</svg>`,
      diagramCaption:
        "Electron diffraction rings prove matter behaves as a wave; circular standing waves 2πr = nλ explain Bohr's angular momentum quantization.",
      workedExamples: [
        {
          title: "de Broglie wavelength in an electron diffraction tube",
          problem:
            "Electrons are accelerated from rest through a potential difference of 2500 V before passing through a thin graphite target. Calculate their de Broglie wavelength and explain why diffraction occurs.",
          steps: [
            "Find kinetic energy gained: {{E_k = eV = 1.60 * 10^(-19) * 2500 = 4.00 * 10^(-16)}} J.",
            "Calculate momentum: {{p = sqrt(2 m_e E_k) = sqrt(2 * 9.11 * 10^(-31) * 4.00 * 10^(-16)) = 2.70 * 10^(-23)}} kg m s⁻¹.",
            "Compute de Broglie wavelength: {{λ = h/p = (6.63 * 10^(-34)) / (2.70 * 10^(-23)) = 2.46 * 10^(-11)}} m = 0.0246 nm.",
            "Because λ is comparable to (within an order of magnitude of) the ~0.14–0.21 nm spacing between carbon atomic planes in graphite, electrons diffract measurably into concentric rings.",
          ],
          answer: "λ = 2.46 × 10⁻¹¹ m (0.0246 nm)",
          yourTurn: {
            question:
              "If the accelerating potential V in an electron diffraction tube is increased from 1000 V to 4000 V, by what factor does the de Broglie wavelength λ of the electrons change? (Give your answer as a decimal or fraction.)",
            answer: { type: "number", value: 0.5, allowFraction: true, display: "0.5" },
            solution:
              "Since λ = h / √(2meV), λ ∝ 1/√V. Quadrupling V multiplies λ by 1/√4 = 1/2 = 0.5.",
          },
        },
        {
          title: "Connecting standing matter waves to the Bohr ground state",
          problem:
            "An electron orbits the hydrogen nucleus in the *n* = 1 Bohr state at radius {{r_1 = 5.29 * 10^(-11)}} m. Show how {{2π r = n λ}} leads to Bohr's quantization rule, and calculate the electron's de Broglie wavelength in *n* = 1.",
          steps: [
            "Substitute de Broglie's relation {{λ = h/(mv)}} into the standing-wave condition {{2π r = n λ}}: {{2π r = n h/(mv)}}.",
            "Rearrange for orbital angular momentum *mvr*: {{m v r = nh/(2π)}} — recovering Bohr's exact postulate!",
            "For *n* = 1, one complete wavelength fits around the circumference: {{λ_1 = 2π r_1 = 2π * 5.29 * 10^(-11) = 3.32 * 10^(-10)}} m = 0.332 nm.",
          ],
          answer: "λ₁ = 3.32 × 10⁻¹⁰ m (0.332 nm)",
          yourTurn: {
            question:
              "A particle of mass m and a second particle of mass 4m have the exact same kinetic energy. What is the ratio λ_light / λ_heavy of the de Broglie wavelength of the lighter particle to that of the heavier particle?",
            answer: { type: "number", value: 2 },
            solution:
              "Since λ = h / √(2mE_k), at fixed E_k we have λ ∝ 1/√m. Therefore λ_light / λ_heavy = √(4m / m) = 2.",
          },
        },
      ],
      keyPoints: [
        "Every moving particle has a de Broglie wavelength {{λ = h/p = h/(mv) = h/sqrt(2mE_k)}}.",
        "For electrons accelerated through potential difference *V*, {{λ = h/sqrt(2meV)}}, so increasing *V* shortens λ and **shrinks** diffraction rings.",
        "Davisson–Germer and thin-graphite electron diffraction prove matter exhibits wave interference when λ is comparable to atomic lattice spacing.",
        "Wave–particle duality: both light and matter travel and interfere like waves, yet interact and are detected as discrete quanta/particles.",
        "Fitting an integer number of de Broglie wavelengths around an orbit ({{2π r = n λ}}) derives Bohr's quantization rule {{mvr = nh/(2π)}}.",
      ],
      whyItWorks:
        "Why do electron microscopes resolve features a thousand times smaller than optical microscopes? Resolution is limited by diffraction to roughly one wavelength λ. Visible light has λ ~ 500 nm, whereas electrons accelerated through 50 kV have λ ~ 0.005 nm — enabling scientists to image individual virus capsids and atomic lattices!",
      strategies: [
        "Never use {{E = hc/λ}} for electrons or protons! Electrons have rest mass and travel below *c*, so use {{λ = h/p = h/sqrt(2mE_k)}} (whereas {{E = hc/λ}} applies strictly to massless photons).",
        "Memorize the two proportionalities for quick Paper 1 MCQs: at fixed *V* (same charge), {{λ ∝ 1/sqrt(m V)}}; at fixed speed *v*, {{λ ∝ 1/m}}.",
        "When describing single-electron double-slit experiments, mention BOTH aspects: localized single dots on the detector (particle) AND interference maxima/minima building up over many detections (wave probability).",
      ],
      thinkDeeper:
        "Why can't we use {{λ = h/sqrt(2meV)}} for 100 MeV electrons probing nuclear radii? Because an electron's rest-mass energy {{m_e c^2}} is only 0.511 MeV! At 100 MeV the electron is ultra-relativistic (*v* ≈ *c*), so {{E ≈ pc}} and its wavelength is {{λ ≈ hc/E}} — just like a high-energy photon.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What three conclusions did Rutherford draw from Geiger–Marsden α-scattering?",
        back: "1) Most α pass straight through → atom is mostly empty space. 2) Some deflect → nucleus is positively charged. 3) Very few (~1 in 8000) backscatter > 90° → positive charge and nearly all mass are concentrated in a tiny, dense nucleus.",
        level: "SL",
      },
      {
        front: "Why are bound atomic energy levels written as negative numbers?",
        back: "Zero energy (E = 0) is defined for a free electron at rest infinitely far from the nucleus (n = ∞). Work must be supplied to remove a bound electron, so bound states have negative total energy.",
        level: "SL",
      },
      {
        front: "How do emission and absorption line spectra of the same element compare?",
        back: "Emission has bright coloured lines on a dark background; absorption has dark lines on a continuous spectrum. Both appear at the EXACT same wavelengths because they correspond to the same atomic energy-level gaps ΔE = hc/λ.",
        level: "SL",
      },
      {
        front: "How many distinct emission spectral lines can be produced when electrons are excited to level N?",
        back: "{{N(N - 1)/2}} lines (every pair of levels yields one downward transition). Longest λ = smallest ΔE; shortest λ = largest ΔE.",
        level: "SL",
      },
      {
        front: "Why does the distance of closest approach d = k(2e)(Ze)/E_k only give an UPPER BOUND on nuclear radius?",
        back: "Because unless the α-particle energy is high enough to touch the nucleus and feel the strong nuclear force, Coulomb repulsion turns it back outside the nuclear surface (d > R).",
        level: "HL",
      },
      {
        front: "What causes high-energy α-scattering to deviate from Rutherford's pure-Coulomb formula?",
        back: "At very small separations (~10⁻¹⁵ m), the attractive, short-range strong nuclear force acts alongside electrostatic repulsion, altering the scattering distribution.",
        level: "HL",
      },
      {
        front: "How does R = R₀A^(1/3) prove that all nuclei have the same density?",
        back: "Nuclear volume {{V = (4/3)π R^3 = (4/3)π R_0^3 A}} and mass {{M ≈ A u}}. Dividing cancels A: {{ρ = 3u/(4π R_0^3) ≈ 2.3 * 10^(17)}} kg m⁻³, independent of A.",
        level: "HL",
      },
      {
        front: "Why is high-energy electron diffraction preferred over α-scattering for measuring nuclear diameter D?",
        back: "Electrons are leptons unaffected by the strong nuclear force, and can easily be given de Broglie wavelengths λ ~ 1 fm so the first minimum satisfies {{sin θ ≈ λ/D}}.",
        level: "HL",
      },
      {
        front: "State Bohr's angular momentum quantization condition and hydrogen energy-level formula.",
        back: "{{mvr = nh/(2π)}} (n = 1, 2, 3, …) and {{E_n = -13.6/n^2}} eV.",
        level: "HL",
      },
      {
        front: "State three observations of the photoelectric effect that classical wave theory CANNOT explain.",
        back: "1) Existence of a sharp threshold frequency f₀ below which no intensity ejects electrons. 2) Instantaneous emission even at very low intensity. 3) E_k,max depends on frequency f, NOT on light intensity.",
        level: "HL",
      },
      {
        front: "What do the gradient, x-intercept, and y-intercept of a stopping potential V_s vs frequency f graph represent?",
        back: "Gradient = {{h/e}} (identical for all metals); x-intercept = threshold frequency {{f_0 = Φ/h}}; y-intercept = {{-Φ/e}}.",
        level: "HL",
      },
      {
        front: "What does Compton scattering prove, and what does Δλ depend on?",
        back: "Compton scattering ({{Δλ = (h/(m_e c))(1 - cos θ)}}) proves photons carry linear momentum {{p = h/λ}}. The shift Δλ depends ONLY on scattering angle θ, NOT on incident wavelength {{λ_i}}.",
        level: "HL",
      },
      {
        front: "How do electron diffraction rings change when accelerating voltage V increases?",
        back: "Increasing V raises electron momentum p, which decreases de Broglie wavelength {{λ = h/sqrt(2meV)}}, decreasing diffraction angle θ so the concentric rings SHRINK.",
        level: "HL",
      },
      {
        front: "How does de Broglie's matter-wave hypothesis explain Bohr's quantization rule?",
        back: "A stable orbit must form a closed circular standing wave: {{2π r = n λ = nh/(mv)}}, which rearranges directly to {{mvr = nh/(2π)}}.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Photon energy relation: {{E = hf = hc/λ}}, with 1 eV = {{1.60 * 10^(-19)}} J.",
      "Rutherford α-scattering: >99% undeflected → empty space; small fraction >90° → tiny, dense, massive positive nucleus.",
      "Emission vs absorption spectra: bright lines on dark vs dark lines on continuous rainbow at identical element-specific wavelengths.",
      "[HL] Distance of closest approach {{E_k = k(2e)(Ze)/d}} gives an upper limit on nuclear radius; deviations at high energy reveal the strong nuclear force.",
      "[HL] Nuclear radius {{R = R_0 A^(1/3)}} ({{R_0 = 1.20 * 10^(-15)}} m) implies constant nuclear density ~{{2.3 * 10^(17)}} kg m⁻³.",
      "[HL] Electron diffraction nuclear sizing: {{sin θ ≈ λ/D}}; Bohr quantization: {{mvr = nh/(2π)}} and {{E_n = -13.6/n^2}} eV.",
      "[HL] Photoelectric equation: {{E_(k,max) = hf - Φ = e V_s}}; intensity controls emission rate (current), frequency controls {{E_(k,max)}}.",
      "[HL] Compton scattering: {{Δλ = (h/(m_e c))(1 - cos θ)}} with {{h/(m_e c) = 2.43}} pm proves photon momentum {{p = h/λ}}.",
      "[HL] de Broglie wavelength {{λ = h/p = h/sqrt(2meV)}}; electron diffraction rings shrink as accelerating voltage *V* increases.",
      "[HL] Standing electron waves {{2π r = n λ}} prevent destructive self-interference and yield Bohr's quantized orbits.",
    ],
    misconceptions: [
      {
        wrong: "Increasing the intensity (brightness) of light in the photoelectric effect increases the maximum kinetic energy of emitted electrons.",
        right: "Intensity at fixed frequency increases only the number of photons per second — raising the photoelectric current (emission rate). Only increasing frequency *f* increases {{E_(k,max)}} and stopping potential {{V_s}}.",
        level: "HL",
      },
      {
        wrong: "You can calculate an electron's energy from its de Broglie wavelength using E = hc/λ.",
        right: "{{E = hc/λ}} applies ONLY to massless photons moving at speed *c*! For a non-relativistic particle of mass *m*, use {{λ = h/p}} and {{E_k = p^2/(2m) = h^2/(2m λ^2)}}.",
        level: "HL",
      },
      {
        wrong: "In Rutherford scattering, α-particles bounce back because they collide with orbiting electrons.",
        right: "An α-particle is ~7300 times more massive than an electron (like a bowling ball hitting a ping-pong ball), so electrons cause negligible deflection. Backscattering requires a heavy, dense, positively charged nucleus.",
        level: "SL",
      },
      {
        wrong: "Every photoelectron emitted from a metal surface has the exact kinetic energy hf − Φ.",
        right: "{{hf - Φ}} is the **maximum** kinetic energy (for electrons right at the surface). Deeper electrons lose energy in collisions on their way out, so emitted electrons have a range from 0 up to {{E_(k,max)}}.",
        level: "HL",
      },
      {
        wrong: "Larger nuclei (higher A) are denser because they pack more protons and neutrons together.",
        right: "Since {{R = R_0 A^(1/3)}}, nuclear volume scales directly with *A* ({{V ∝ A}}), so adding nucleons enlarges the nucleus proportionally and nuclear density remains constant (~{{2.3 * 10^(17)}} kg m⁻³).",
        level: "HL",
      },
      {
        wrong: "Compton wavelength shift Δλ is larger for longer-wavelength photons.",
        right: "{{Δλ = (h/(m_e c))(1 - cos θ)}} depends ONLY on the scattering angle θ, NOT on {{λ_i}}. The *fractional* shift {{Δλ/λ_i}} is actually much smaller for long-wavelength visible light than for X-rays.",
        level: "HL",
      },
      {
        wrong: "A higher-energy photon has a longer wavelength.",
        right: "Since {{E = hc/λ}}, energy is **inversely** proportional to wavelength: larger level jumps Δ*E* emit higher-frequency, **shorter**-wavelength photons (e.g. UV Lyman lines have shorter λ than visible Balmer lines).",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting to convert electronvolts (eV) to joules (× 1.60 × 10⁻¹⁹) before using {{E = hf}}, {{λ = hc/E}}, or {{E_k = (1/2)mv^2}}.",
      "Confusing the gradient of a {{V_s}} vs *f* graph (*h/e*) with the gradient of an {{E_(k,max)}} vs *f* graph (*h*).",
      "Using charge +*e* instead of +2*e* for an α-particle in distance-of-closest-approach calculations.",
      "Writing that dark absorption lines appear because atoms 'never re-emit the absorbed photons' — in fact they DO re-emit them, but isotropically in all directions rather than along the original beam.",
      "Forgetting to take the **cube root** of *A* in {{R = R_0 A^(1/3)}} or squaring instead of taking the square root of *V* in {{λ = h/sqrt(2meV)}}.",
      "Using {{1 - cos θ}} in radians when θ is given in degrees in Compton scattering problems (e.g. θ = 60° → cos 60° = 0.5).",
      "Assuming an electron accelerated from rest at 100 V has the same wavelength as a proton accelerated through 100 V — the proton's 1836× larger mass makes its wavelength ~43× shorter!",
    ],
    mnemonics: [
      {
        topic: "Hydrogen spectral series (lower level n = 1, 2, 3)",
        device: "Lazy Bears Purr → Lyman (n=1, UV), Balmer (n=2, Visible), Paschen (n=3, IR)",
        explanation: "Remember the bottom landing level in order 1, 2, 3 — and notice energy drops from UV → Visible → Infrared as the landing level rises.",
        level: "SL",
      },
      {
        topic: "Photoelectric variables: Frequency vs Intensity",
        device: "F for Fast (Frequency → E_k,max & V_s), I for I-current (Intensity → Current / number of e⁻ per second)",
        explanation: "Separates the two most confused experimental controls instantly: Frequency determines how FAST each electron leaves; Intensity determines how MANY leave per second.",
        level: "HL",
      },
      {
        topic: "Electron diffraction voltage scaling",
        device: "Voltage Up → Momentum Up → Wavelength Down → Rings Shrink",
        explanation: "Trace the four-step causal chain V ↑ → p ↑ → λ ↓ → θ ↓ whenever an exam asks how changing accelerating potential alters diffraction rings.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Stellar Spectroscopy & Exoplanet Atmospheres",
        detail: "Astronomers decode dark absorption lines in starlight (including James Webb Space Telescope spectra) to determine the exact chemical elements, temperatures, and motions of distant stars and exoplanet atmospheres.",
        emoji: "🔭",
      },
      {
        title: "Photovoltaic Solar Panels & Digital Camera Sensors",
        detail: "Solar cells and CMOS camera pixels rely on the internal photoelectric effect: incoming photons above a semiconductor's bandgap threshold liberate charge carriers to generate electrical current.",
        emoji: "☀️",
      },
      {
        title: "Transmission Electron Microscopes (TEM)",
        detail: "By accelerating electrons through 100–300 kV to achieve sub-picometre de Broglie wavelengths, electron microscopes resolve individual virus structures, nanomaterials, and atomic crystal planes.",
        emoji: "🔬",
      },
      {
        title: "Medical X-ray Imaging & Compton Scattering",
        detail: "In diagnostic radiology, photoelectric absorption creates sharp bone-vs-tissue contrast at lower X-ray energies, while Compton scattering dominates at higher energies and must be filtered with anti-scatter grids to keep images crisp.",
        emoji: "🩻",
      },
      {
        title: "Atomic Clocks & Street-Lamp Spectroscopy",
        detail: "Sodium street lamps glow yellow from a sharp 589 nm atomic transition, while caesium-133 atomic clocks define the SI second using an exact microwave transition frequency of 9,192,631,770 Hz.",
        emoji: "⏱️",
      },
    ],
    videos: [
      {
        title: "Rutherford Gold Foil Experiment & Atomic Line Spectra (IB Physics E.1)",
        channel: "Andy Masley's IB Physics Lectures",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.1+Rutherford+scattering+atomic+energy+levels+spectra",
      },
      {
        title: "Nuclear Radius, Closest Approach & Bohr Model (IB Physics E.1 HL)",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.1+HL+distance+of+closest+approach+nuclear+radius+Bohr",
      },
      {
        title: "Photoelectric Effect & Compton Scattering Explained (IB Physics E.2 HL)",
        channel: "Oscars IB Physics / Physics Online",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.2+HL+photoelectric+effect+Compton+scattering",
      },
      {
        title: "de Broglie Matter Waves & Electron Diffraction (IB Physics E.2 HL)",
        channel: "IB Physics Revision",
        url: "https://www.youtube.com/results?search_query=IB+Physics+E.2+HL+de+Broglie+wavelength+electron+diffraction",
      },
    ],
    formulas: [
      {
        name: "Photon energy",
        formula: "{{E = hf = hc/λ}}",
        note: "h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹; convert eV to J via × 1.60 × 10⁻¹⁹",
        level: "SL",
      },
      {
        name: "Atomic level transition",
        formula: "{{ΔE = E_i - E_f = hf = hc/λ}}",
        note: "Downward jump emits photon; upward jump absorbs exact photon energy",
        level: "SL",
      },
      {
        name: "Distance of closest approach",
        formula: "{{E_k = (k q_1 q_2)/d = (2 Z k e^2)/d}}",
        note: "Head-on α-particle (+2e) on nucleus (+Ze); upper bound on nuclear radius",
        level: "HL",
      },
      {
        name: "Nuclear radius law",
        formula: "{{R = R_0 A^(1/3)}}",
        note: "R₀ = 1.20 × 10⁻¹⁵ m; implies constant nuclear density ρ ≈ 2.3 × 10¹⁷ kg m⁻³",
        level: "HL",
      },
      {
        name: "Electron diffraction nuclear sizing",
        formula: "{{sin θ ≈ λ/D}}",
        note: "First diffraction minimum for high-energy electrons scattered off a nucleus of diameter D = 2R",
        level: "HL",
      },
      {
        name: "Bohr angular momentum quantization",
        formula: "{{m v r = (n h)/(2π)}}",
        note: "n = 1, 2, 3, …; equivalent to standing matter wave 2πr = nλ",
        level: "HL",
      },
      {
        name: "Hydrogen energy levels",
        formula: "{{E_n = -13.6/n^2}} eV",
        note: "n = 1 ground state (−13.6 eV); n = ∞ ionization (0 eV)",
        level: "HL",
      },
      {
        name: "Einstein's photoelectric equation",
        formula: "{{E_(k,max) = hf - Φ}}",
        note: "Φ = h f₀ is the metal's work function; emission occurs only if f ≥ f₀",
        level: "HL",
      },
      {
        name: "Stopping potential relation",
        formula: "{{e V_s = E_(k,max) = hf - Φ}}",
        note: "V_s vs f graph has gradient h/e and y-intercept −Φ/e",
        level: "HL",
      },
      {
        name: "Photon momentum",
        formula: "{{p = E/c = h/λ}}",
        note: "Massless photons carry momentum proportional to frequency",
        level: "HL",
      },
      {
        name: "Compton scattering shift",
        formula: "{{Δλ = λ_f - λ_i = (h/(m_e c))(1 - cos θ)}}",
        note: "Compton wavelength h/(m_e c) = 2.43 × 10⁻¹² m (2.43 pm); independent of λ_i",
        level: "HL",
      },
      {
        name: "de Broglie matter wavelength",
        formula: "{{λ = h/p = h/(mv) = h/sqrt(2 m e V)}}",
        note: "Non-relativistic particle accelerated from rest through potential difference V",
        level: "HL",
      },
    ],
  },
};
