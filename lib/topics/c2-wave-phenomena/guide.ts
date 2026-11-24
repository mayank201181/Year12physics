import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "c2-wave-phenomena",
  title: "C.3–C.5 Wave Phenomena, Standing Waves & Doppler Effect",
  strand: "Theme C: Wave Behaviour",
  icon: "🌈",
  level: "SL",
  summary:
    "Refraction, total internal reflection, diffraction, double-slit interference, single-slit modulation & gratings [HL], standing waves, resonance, and the Doppler effect (SL & HL).",
  intro:
    "Waves reveal their true nature whenever they meet a boundary, squeeze through an aperture, overlap with a twin, or race away from a moving source. In **C.3** you master Snell's law, total internal reflection, diffraction, and Young's double-slit fringes—extended at **HL** to single-slit modulation and diffraction gratings. In **C.4** trapped waves interfere with their own reflections to form quantised standing-wave harmonics on strings and in pipes, and forced oscillators hit resonance. Finally, **C.5** explains the Doppler shift qualitatively and for starlight (**SL**) before unlocking exact moving-source and moving-observer sound equations (**HL**).",
  guide: [
    // =========================================================================
    // SECTION 1: C.3 Reflection, Refraction, Diffraction & Double-Slit (SL)
    // =========================================================================
    {
      id: "refraction-diffraction-double-slit",
      heading: "C.3 Reflection, Refraction, Diffraction & Double-Slit Interference",
      level: "SL",
      discovery: {
        problem:
          "Shine a single red laser beam through two razor-thin parallel slits onto a wall 2 m away. Common sense suggests you should see two red lines on the wall—one behind each slit. Instead, you see a wide ladder of dozens of equally spaced bright and dark vertical bars! How can adding a *second* source of light create *darkness* at spots that were bright when only one slit was open?",
        idea:
          "Light behaves as a wave. At any point on the wall, waves from the two slits travel different distances. Whenever that **path difference** is a half-integer number of wavelengths ({{(n + 1/2) λ}}), a crest from one slit meets a trough from the other and the electric fields cancel to zero—**destructive interference**! Where the path difference is a whole number of wavelengths ({{n λ}}), crests reinforce crests to produce a bright fringe.",
      },
      body: `**Wavefronts and rays.** A *wavefront* joins neighbouring points oscillating in phase (for example, consecutive crests). A *ray* shows the direction of energy transfer and is always **perpendicular** to the wavefronts. All angles of incidence ({{θ_1}}), reflection, and refraction ({{θ_2}}) are measured between the **ray and the normal** (equivalently, between the wavefront and the boundary).

**Refraction and Snell's law.** When a wave crosses a boundary into a medium where its speed changes, its **frequency {{f}} stays constant** (driven by the source), so its wavelength changes in direct proportion to speed ({{v = f λ}}). Defining the absolute refractive index of a medium for light as {{n = c / v}} (where {{c = 3.00 * 10^8}} m s⁻¹ in vacuum), Snell's law links the two media:

{{n_1 sin θ_1 = n_2 sin θ_2}}   equivalently   {{n_1 / n_2 = sin θ_2 / sin θ_1 = v_2 / v_1 = λ_2 / λ_1}}

Entering an optically denser medium ({{n_2 > n_1}}) slows the wave down, shortens {{λ}}, and bends the ray **towards the normal** ({{θ_2 < θ_1}}). Entering a less dense medium ({{n_2 < n_1}}) speeds it up and bends the ray **away from the normal** ({{θ_2 > θ_1}}).

**Critical angle and Total Internal Reflection (TIR).** When light travels from an optically denser medium into a less dense one ({{n_1 > n_2}}), increasing {{θ_1}} eventually pushes the refracted ray along the boundary ({{θ_2 = 90°}}). This incidence angle is the **critical angle {{θ_c}}**:

{{sin θ_c = n_2 / n_1}}

For any angle {{θ_1 > θ_c}}, no refracted ray exists and 100% of the energy reflects internally—the principle behind step-index optical fibres (high-{{n}} glass core surrounded by lower-{{n}} cladding).

**Diffraction.** When a wave passes through an aperture of width {{b}} or around an obstacle, it spreads into the geometric shadow. Diffraction is **most pronounced when {{b ≈ λ}}** (or {{b <= λ}}); when {{b >> λ}}, wavefronts stay nearly straight with only slight curving at the edges. Crucially, diffraction changes **neither** wave speed, frequency, nor wavelength.

**Superposition, coherence, and Young's double-slit interference.** By the *principle of superposition*, when two waves overlap at a point, the resultant displacement is the vector sum of their individual displacements. To observe a **stable, stationary interference pattern**, the two sources must be **coherent**—meaning they have a **constant phase difference** (which requires the same frequency)—and comparable amplitudes. In Young's double-slit setup, illuminating both slits with a single monochromatic source guarantees coherence.

| Condition at point P | Path difference {{Δ}} | Phase difference {{Δφ}} | Result |
| --- | --- | --- | --- |
| Constructive interference | {{n λ}} ({{n = 0, 1, 2, ...}}) | {{2 π n}} rad | Bright fringe (maximum) |
| Destructive interference | {{(n + 1/2) λ}} ({{n = 0, 1, 2, ...}}) | {{(2n + 1) π}} rad | Dark fringe (minimum) |

For slits separated by {{d}} and a distant screen at distance {{D}} ({{D >> d}}, so angles are small and {{sin θ ≈ tan θ ≈ y/D}}), the extra distance travelled by the lower ray is {{Δ = d sin θ}}. Setting {{d (s/D) = λ}} gives the uniform **fringe spacing**:

{{s = (λ D) / d}}

With **white light**, all wavelengths have zero path difference at the centre, producing a **white central maximum**. Away from the centre, shorter-wavelength violet fringes have smaller spacing than red fringes, creating coloured spectra with violet closest to the centre and red furthest out; after a few orders the fringes overlap and wash out into white.`,
      diagram: `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram: left panel shows Snell's law refraction of wavefronts and ray bending towards the normal entering glass; right panel shows Young's double-slit geometry with slit separation d, path difference d sin theta, screen distance D, and fringe spacing s">
  <rect x="0" y="0" width="520" height="250" fill="#ffffff" />
  <!-- Left Panel: Snell's Law -->
  <rect x="10" y="10" width="236" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="128" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Snell's Law &amp; Wavefronts</text>
  <!-- Air / Glass regions -->
  <rect x="20" y="128" width="216" height="102" fill="#dbeafe" fill-opacity="0.65" />
  <line x1="20" y1="128" x2="236" y2="128" stroke="#1e40af" stroke-width="2" />
  <text x="30" y="52" font-size="10.5" font-weight="600" fill="#334155">Air (n₁ = 1.00, v₁, λ₁)</text>
  <text x="30" y="218" font-size="10.5" font-weight="600" fill="#1e3a8a">Glass (n₂ = 1.50, v₂ &lt; v₁, λ₂ &lt; λ₁)</text>
  <!-- Normal line -->
  <line x1="128" y1="44" x2="128" y2="210" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4" />
  <text x="134" y="55" font-size="9.5" fill="#64748b">Normal</text>
  <!-- Incident ray & wavefronts -->
  <line x1="56" y1="56" x2="128" y2="128" stroke="#dc2626" stroke-width="2.2" />
  <polygon points="94,94 84,91 91,84" fill="#dc2626" />
  <!-- Incident wavefronts perpendicular to (1,1) => direction (-1,1) -->
  <line x1="54" y1="80" x2="80" y2="54" stroke="#2563eb" stroke-width="1.6" />
  <line x1="72" y1="98" x2="98" y2="72" stroke="#2563eb" stroke-width="1.6" />
  <line x1="90" y1="116" x2="116" y2="90" stroke="#2563eb" stroke-width="1.6" />
  <!-- Refracted ray (bends towards normal: dx=40, dy=76) -->
  <line x1="128" y1="128" x2="168" y2="204" stroke="#dc2626" stroke-width="2.2" />
  <polygon points="150,170 142,163 151,158" fill="#dc2626" />
  <!-- Refracted wavefronts closer together -->
  <line x1="125" y1="154" x2="155" y2="138" stroke="#2563eb" stroke-width="1.6" />
  <line x1="133" y1="169" x2="163" y2="153" stroke="#2563eb" stroke-width="1.6" />
  <line x1="141" y1="184" x2="171" y2="168" stroke="#2563eb" stroke-width="1.6" />
  <!-- Angle arcs -->
  <path d="M 128 96 A 32 32 0 0 0 105 105" fill="none" stroke="#dc2626" stroke-width="1.4" />
  <text x="110" y="92" font-size="11" font-weight="700" fill="#dc2626">θ₁</text>
  <path d="M 128 164 A 36 36 0 0 0 145 160" fill="none" stroke="#dc2626" stroke-width="1.4" />
  <text x="131" y="177" font-size="11" font-weight="700" fill="#dc2626">θ₂</text>

  <!-- Right Panel: Young's Double Slit -->
  <rect x="256" y="10" width="254" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="383" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Young's Double-Slit Interference</text>
  <!-- Barrier with two slits S1, S2 -->
  <line x1="292" y1="50" x2="292" y2="96" stroke="#1e293b" stroke-width="3.5" />
  <line x1="292" y1="108" x2="292" y2="152" stroke="#1e293b" stroke-width="3.5" />
  <line x1="292" y1="164" x2="292" y2="214" stroke="#1e293b" stroke-width="3.5" />
  <text x="272" y="105" font-size="10.5" font-weight="700" fill="#0f172a">S₁</text>
  <text x="272" y="161" font-size="10.5" font-weight="700" fill="#0f172a">S₂</text>
  <!-- Slit separation d -->
  <line x1="281" y1="102" x2="281" y2="158" stroke="#0d9488" stroke-width="1.4" />
  <text x="268" y="134" font-size="11" font-weight="700" fill="#0d9488">d</text>
  <!-- Centre axis -->
  <line x1="292" y1="130" x2="462" y2="130" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3" />
  <!-- Rays to P (first bright fringe at y=92) -->
  <line x1="292" y1="102" x2="462" y2="84" stroke="#2563eb" stroke-width="1.7" />
  <line x1="292" y1="158" x2="462" y2="84" stroke="#7c3aed" stroke-width="1.7" />
  <!-- Path difference highlight -->
  <line x1="292" y1="102" x2="313" y2="149" stroke="#d97706" stroke-width="1.4" stroke-dasharray="2,2" />
  <line x1="292" y1="158" x2="313" y2="149" stroke="#dc2626" stroke-width="3" />
  <text x="314" y="168" font-size="9.8" font-weight="700" fill="#dc2626">Δ = d sin θ = nλ</text>
  <!-- Screen & bright fringes -->
  <line x1="462" y1="48" x2="462" y2="214" stroke="#1e293b" stroke-width="2.5" />
  <!-- Intensity curve beside screen -->
  <path d="M 464 56 Q 486 58 464 68 Q 496 84 464 100 Q 500 130 464 160 Q 496 176 464 192 Q 486 202 464 206" fill="#bfdbfe" fill-opacity="0.7" stroke="#2563eb" stroke-width="1.6" />
  <circle cx="462" cy="84" r="3.2" fill="#dc2626" />
  <circle cx="462" cy="130" r="3.2" fill="#dc2626" />
  <circle cx="462" cy="176" r="3.2" fill="#dc2626" />
  <text x="451" y="87" text-anchor="end" font-size="9.5" font-weight="700" fill="#0f172a">P (n=1)</text>
  <text x="451" y="133" text-anchor="end" font-size="9.5" font-weight="700" fill="#0f172a">O (n=0)</text>
  <!-- Fringe spacing s bracket -->
  <line x1="497" y1="84" x2="497" y2="130" stroke="#0d9488" stroke-width="1.6" />
  <line x1="493" y1="84" x2="501" y2="84" stroke="#0d9488" stroke-width="1.4" />
  <line x1="493" y1="130" x2="501" y2="130" stroke="#0d9488" stroke-width="1.4" />
  <text x="503" y="111" font-size="11" font-weight="700" fill="#0d9488">s</text>
  <!-- Distance D arrow -->
  <line x1="292" y1="224" x2="462" y2="224" stroke="#334155" stroke-width="1.3" />
  <polygon points="292,224 298,221 298,227" fill="#334155" />
  <polygon points="462,224 456,221 456,227" fill="#334155" />
  <text x="377" y="236" text-anchor="middle" font-size="10.5" font-weight="700" fill="#334155">D  (s = λD / d)</text>
</svg>`,
      diagramCaption:
        "Left: entering glass slows the wave and shortens λ at fixed frequency, bending the ray toward the normal. Right: double-slit path difference Δ = d sin θ produces equally spaced bright fringes separated by s = λD / d.",
      workedExamples: [
        {
          title: "Optical fibre critical angle and wave speed",
          problem:
            "A step-index optical fibre has a glass core of refractive index {{n_1 = 1.52}} surrounded by cladding of refractive index {{n_2 = 1.44}}. (a) Calculate the speed of light inside the core. (b) Determine the critical angle at the core–cladding boundary.",
          steps: [
            "Use {{n = c / v}} with {{c = 3.00 * 10^8}} m s⁻¹: {{v = (3.00 * 10^8) / 1.52 = 1.97 * 10^8}} m s⁻¹.",
            "Confirm TIR is possible: light travels from higher {{n_1 = 1.52}} to lower {{n_2 = 1.44}}.",
            "Apply {{sin θ_c = n_2 / n_1 = 1.44 / 1.52 = 0.9474}}.",
            "Take inverse sine: {{θ_c = 71.3°}} (to 3 s.f.).",
          ],
          answer: "(a) {{1.97 * 10^8}} m s⁻¹; (b) 71.3°",
          yourTurn: {
            question:
              "Calculate the critical angle (in degrees, to 1 decimal place) for light travelling from crown glass ({{n_1 = 1.50}}) into air ({{n_2 = 1.00}}).",
            answer: { type: "number", value: 41.8, tolerance: 0.15, display: "41.8°" },
            solution: "{{sin θ_c = 1.00 / 1.50 = 0.6667}}, giving {{θ_c = 41.8°}}.",
          },
        },
        {
          title: "Measuring laser wavelength with Young's double slits",
          problem:
            "Red light of wavelength {{λ = 632}} nm passes through two slits separated by {{d = 0.40}} mm onto a screen {{D = 2.50}} m away. Calculate the distance between the central bright fringe and the 4th bright fringe on one side.",
          steps: [
            "Convert all quantities to SI metres: {{λ = 632 * 10^(-9)}} m, {{d = 0.40 * 10^(-3)}} m, {{D = 2.50}} m.",
            "Find one fringe spacing: {{s = (λ D) / d = (632 * 10^(-9) * 2.50) / (0.40 * 10^(-3)) = 3.95 * 10^(-3)}} m = 3.95 mm.",
            "The distance from the 0th (central) bright fringe to the 4th bright fringe spans 4 spacings: {{y_4 = 4s = 4 * 3.95 = 15.8}} mm.",
          ],
          answer: "15.8 mm (or 1.58 cm)",
          yourTurn: {
            question:
              "In a double-slit experiment with {{d = 0.30}} mm and {{D = 2.00}} m, the distance across 5 consecutive fringe spacings (from central maximum to the 5th bright fringe) is 18.0 mm. Calculate the wavelength of the light in nm.",
            answer: { type: "number", value: 540, tolerance: 2, display: "540 nm" },
            solution:
              "One fringe spacing is {{s = 18.0 / 5 = 3.60}} mm = {{3.60 * 10^(-3)}} m. Then {{λ = (s d) / D = (3.60 * 10^(-3) * 0.30 * 10^(-3)) / 2.00 = 5.40 * 10^(-7)}} m = 540 nm.",
          },
        },
      ],
      keyPoints: [
        "Refraction changes speed {{v}} and wavelength {{λ}} in the same ratio while **frequency {{f}} remains strictly constant**.",
        "Total internal reflection requires BOTH {{n_1 > n_2}} (denser to less dense) AND {{θ_1 > θ_c}} where {{sin θ_c = n_2 / n_1}}.",
        "Coherent waves have a **constant phase difference** (and therefore identical frequency); this is required for a stable interference pattern.",
        "Constructive interference occurs at path difference {{n λ}}; destructive interference occurs at {{(n + 1/2) λ}}.",
        "Young's fringe spacing {{s = λ D / d}} increases if {{λ}} or {{D}} increases, or if slit separation {{d}} decreases.",
      ],
      whyItWorks:
        "Why does light bend toward the normal when it slows down? Think of a marching band walking diagonally from tarmac onto mud. The soldiers on the side hitting the mud first slow down while those still on tarmac keep moving fast, pivoting the entire wavefront towards the boundary—so the perpendicular ray swings closer to the normal. Quantitatively, the segment of boundary shared by one incident wavelength {{λ_1}} and one refracted wavelength {{λ_2}} satisfies {{λ_1 / sin θ_1 = λ_2 / sin θ_2}}, which immediately yields Snell's law {{n_1 sin θ_1 = n_2 sin θ_2}}.",
      strategies: [
        "Always check whether angles given in a problem are measured to the **normal** or to the **surface** (subtract from 90° if measured to the surface!).",
        "When counting fringes, remember that the span between {{k}} bright fringes (e.g. 1st to 6th) contains **{{k - 1}} spacings**, not {{k}}.",
        "Before touching a calculator, convert mm ({{10^(-3)}}), μm ({{10^(-6)}}), and nm ({{10^(-9)}}) into metres so powers of ten never trip you up.",
      ],
      thinkDeeper:
        "If you submerge an entire Young's double-slit apparatus in water ({{n = 1.33}}), the frequency of the laser is unchanged, so its wavelength shrinks to {{λ / n}}. How does the fringe spacing {{s}} change? It shrinks by the same factor {{1 / n}}—making the fringes 25% tighter!",
    },

    // =========================================================================
    // SECTION 2: C.3 Single-Slit Diffraction, Modulation & Gratings (HL)
    // =========================================================================
    {
      id: "single-slit-grating-hl",
      heading: "C.3 Single-Slit Diffraction, Modulation & Diffraction Gratings",
      level: "HL",
      discovery: {
        problem:
          "Suppose you have a double-slit slide with slit separation {{d = 0.24}} mm and each individual slit has width {{b = 0.08}} mm. You count bright fringes outward from the centre: 0, 1, 2… and then the 3rd bright fringe is completely **missing**, even though the 4th and 5th fringes appear right after it! Why did order 3 disappear?",
        idea:
          "Each individual slit of width {{b}} creates its own single-slit diffraction pattern whose first zero occurs at {{sin θ = λ / b}}. Because {{d / b = 0.24 / 0.08 = 3}}, the angle where the double-slit path difference predicts the 3rd bright maximum ({{sin θ = 3 λ / d}}) lands *exactly* on the first single-slit dark minimum ({{sin θ = λ / b}}). Zero multiplied by a maximum is still zero!",
      },
      body: `**Single-slit diffraction (HL).** Real slits have a finite width {{b}}. Treating the slit as a continuous line of secondary Huygens wavelets, the **first minimum** occurs when every wavelet in the top half of the slit pairs with a wavelet {{b / 2}} below it that travels an extra half-wavelength {{λ / 2}} to cancel it out: {{(b / 2) sin θ = λ / 2}}, so {{b sin θ = λ}}. In the small-angle approximation (with {{θ}} in **radians**):

{{θ ≈ λ / b}}   (first minimum; general minima at {{b sin θ = m λ}}, {{m = 1, 2, 3, ...}})

Key features of a single-slit intensity pattern:
- The **central maximum** extends from {{-λ / b}} to {{+λ / b}}, so its angular width is {{2 λ / b}} (linear width {{2 λ D / b}})—**twice as wide** as every secondary maximum (width {{λ / b}}).
- Intensity falls off sharply: the first secondary maximum is only about 4.5% as intense as the central peak, and the second about 1.6%.
- Making the slit **narrower** (decreasing {{b}}) makes the central maximum **wider** and dimmer; increasing {{λ}} (e.g. blue → red) also widens the central peak.

**Modulation of double-slit fringes (HL).** Real double-slit fringes do **not** have uniform height. The fast double-slit interference cosine-squared oscillations (spaced by {{λ / d}}) are **modulated** (multiplied) by the broader single-slit diffraction envelope (first zero at {{λ / b}}).
- **Missing orders:** Whenever a double-slit maximum ({{d sin θ = n λ}}) coincides with a single-slit minimum ({{b sin θ = m λ}}), that interference peak is extinguished: {{n / m = d / b}}.
- **Peaks inside the central diffraction envelope:** All interference orders satisfying {{|n| < d / b}} sit inside the central single-slit maximum. When {{k = d / b}} is an integer, orders {{-(k-1), ..., 0, ..., (k-1)}} appear, giving **{{2k - 1}}** bright fringes inside the central envelope.

**Diffraction gratings (HL).** Replacing 2 slits with {{N}} equally spaced slits (often hundreds of lines per millimetre, so slit spacing {{d = 1 / ("lines per metre")}}) produces constructive interference along sharp **principal maxima**:

{{n λ = d sin θ}}   ({{n = 0, 1, 2, ...}})

Never apply the small-angle approximation to a diffraction grating—angles routinely reach 20°–70°!
- **Maximum observable order:** Because {{sin θ <= 1}}, the highest integer order visible on either side is {{n_max = floor(d / λ)}}. The total number of bright spots visible across both sides plus the central {{n = 0}} beam is {{2 n_max + 1}}.
- **Effect of increasing the number of illuminated slits {{N}} (at fixed {{d}}):** The angular positions {{θ}} of principal maxima are **unchanged**, their peak intensity scales as **{{N^2}}** (much brighter), and their angular width shrinks roughly as {{1 / N}} (**much sharper**, separated by wide dark regions).
- **White light through a grating:** The central {{n = 0}} maximum is white. Each higher order {{n >= 1}} disperses white light into a continuous spectrum with **violet** (smallest {{λ}}) at the smallest angle and **red** (largest {{λ}}) at the largest angle. Unlike a glass prism, a grating bends red *more* than violet!`,
      diagram: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel HL diagram: left panel shows double-slit interference fringes modulated inside a dashed single-slit diffraction envelope with missing orders at n equals plus or minus 3; right panel shows a diffraction grating splitting light into sharp principal maxima with red diffracted through a larger angle than violet">
  <rect x="0" y="0" width="520" height="260" fill="#ffffff" />
  <!-- Left Panel: Modulated Double-Slit Intensity -->
  <rect x="10" y="10" width="268" height="240" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="144" y="30" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Double-Slit Inside Single-Slit Envelope (d/b = 3)</text>
  <!-- Axes -->
  <line x1="26" y1="195" x2="264" y2="195" stroke="#334155" stroke-width="1.4" />
  <line x1="144" y1="45" x2="144" y2="205" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
  <text x="256" y="210" font-size="10" font-weight="700" fill="#334155">θ</text>
  <text x="30" y="54" font-size="10" font-weight="700" fill="#334155">Intensity I</text>
  <!-- Single-slit diffraction envelope (dashed orange): zeros at x=84 and x=204 (dist 60 from 144) -->
  <path d="M 28 195 Q 54 184 84 195 Q 114 148 144 58 Q 174 148 204 195 Q 234 184 260 195" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="5,3" />
  <!-- Double-slit modulated peaks at n = 0 (144), ±1 (124,164), ±2 (104,184), ±3 missing (84,204), ±4 (64,224) -->
  <path d="M 48 195 Q 56 195 64 189 Q 72 195 84 195 Q 94 195 104 176 Q 114 195 124 109 Q 134 195 144 58 Q 154 195 164 109 Q 174 195 184 176 Q 194 195 204 195 Q 216 195 224 189 Q 232 195 240 195" fill="#bfdbfe" fill-opacity="0.55" stroke="#2563eb" stroke-width="1.9" />
  <!-- Missing order markers -->
  <circle cx="84" cy="195" r="3.5" fill="#dc2626" />
  <circle cx="204" cy="195" r="3.5" fill="#dc2626" />
  <text x="84" y="212" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">−λ/b</text>
  <text x="204" y="212" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">+λ/b</text>
  <text x="144" y="212" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">0</text>
  <text x="144" y="227" text-anchor="middle" font-size="9.2" fill="#dc2626">Missing orders: n = ±3 (5 peaks in central envelope)</text>
  <text x="195" y="76" font-size="9" font-weight="700" fill="#d97706">Single-slit</text>
  <text x="195" y="87" font-size="9" font-weight="700" fill="#d97706">envelope</text>
  <!-- Width 2λ/b arrow -->
  <line x1="84" y1="238" x2="204" y2="238" stroke="#0d9488" stroke-width="1.4" />
  <text x="144" y="246" text-anchor="middle" font-size="9.2" font-weight="700" fill="#0d9488">Central width = 2λ/b</text>

  <!-- Right Panel: Diffraction Grating -->
  <rect x="288" y="10" width="222" height="240" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="399" y="30" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Diffraction Grating (nλ = d sin θ)</text>
  <!-- Incident white light arrow -->
  <line x1="298" y1="130" x2="334" y2="130" stroke="#334155" stroke-width="2.4" />
  <polygon points="336,130 328,126 328,134" fill="#334155" />
  <text x="315" y="120" text-anchor="middle" font-size="9" font-weight="600" fill="#334155">White</text>
  <text x="315" y="144" text-anchor="middle" font-size="9" font-weight="600" fill="#334155">light</text>
  <!-- Grating bar with many slits -->
  <line x1="340" y1="68" x2="340" y2="192" stroke="#1e293b" stroke-width="3" stroke-dasharray="4,3" />
  <text x="340" y="208" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f172a">Grating (d)</text>
  <!-- Screen -->
  <line x1="486" y1="48" x2="486" y2="212" stroke="#1e293b" stroke-width="2.2" />
  <!-- n = 0 white beam -->
  <line x1="342" y1="130" x2="486" y2="130" stroke="#475569" stroke-width="2" />
  <circle cx="486" cy="130" r="3.5" fill="#475569" />
  <text x="492" y="133" font-size="9" font-weight="700" fill="#334155">0</text>
  <!-- n = +1 violet and red -->
  <line x1="342" y1="130" x2="486" y2="96" stroke="#7c3aed" stroke-width="1.6" />
  <line x1="342" y1="130" x2="486" y2="74" stroke="#dc2626" stroke-width="1.6" />
  <text x="462" y="94" font-size="8.5" font-weight="700" fill="#7c3aed">V</text>
  <text x="462" y="72" font-size="8.5" font-weight="700" fill="#dc2626">R</text>
  <text x="492" y="86" font-size="9" font-weight="700" fill="#dc2626">+1</text>
  <!-- n = -1 violet and red -->
  <line x1="342" y1="130" x2="486" y2="164" stroke="#7c3aed" stroke-width="1.6" />
  <line x1="342" y1="130" x2="486" y2="186" stroke="#dc2626" stroke-width="1.6" />
  <text x="462" y="170" font-size="8.5" font-weight="700" fill="#7c3aed">V</text>
  <text x="462" y="191" font-size="8.5" font-weight="700" fill="#dc2626">R</text>
  <text x="491" y="178" font-size="9" font-weight="700" fill="#dc2626">−1</text>
  <!-- Angle θ arc -->
  <path d="M 382 130 A 42 42 0 0 0 378 116" fill="none" stroke="#dc2626" stroke-width="1.3" />
  <text x="387" y="121" font-size="10" font-weight="700" fill="#dc2626">θ</text>
  <text x="399" y="232" text-anchor="middle" font-size="9.3" font-weight="600" fill="#334155">Sharper peaks (I ∝ N²); θ_red &gt; θ_violet</text>
</svg>`,
      diagramCaption:
        "Left: finite slit width b modulates double-slit fringes; when d/b = 3, orders ±3 fall on single-slit zeros and vanish. Right: a diffraction grating produces sharp maxima at nλ = d sin θ, diffracting red through a larger angle than violet.",
      workedExamples: [
        {
          title: "Single-slit envelope and missing double-slit orders [HL]",
          problem:
            "Monochromatic light of wavelength {{λ = 600}} nm illuminates two slits of individual width {{b = 0.080}} mm and centre-to-centre separation {{d = 0.32}} mm. A screen stands {{D = 1.60}} m away. (a) Find the linear width of the central diffraction maximum. (b) State the first missing interference order and the number of bright interference fringes inside the central diffraction envelope.",
          steps: [
            "First single-slit minimum angle: {{θ = λ / b = (600 * 10^(-9)) / (0.080 * 10^(-3)) = 7.50 * 10^(-3)}} rad.",
            "Linear half-width on the screen: {{y = D θ = 1.60 * 7.50 * 10^(-3) = 0.0120}} m = 12.0 mm. Therefore the full central maximum width is {{2y = 24.0}} mm.",
            "Ratio {{d / b = 0.32 / 0.080 = 4}}. The 4th double-slit maximum coincides with the 1st single-slit minimum, so **{{n = 4}}** (and ±4, ±8…) is missing.",
            "Orders {{n = -3, -2, -1, 0, +1, +2, +3}} lie strictly inside the central diffraction envelope, giving {{2(4) - 1 = 7}} bright fringes.",
          ],
          answer: "(a) 24.0 mm; (b) first missing order {{n = 4}}, 7 bright fringes inside the central envelope",
          yourTurn: {
            question:
              "Light of wavelength 500 nm passes through a single slit of width 0.10 mm onto a screen 2.0 m away. Calculate the total linear width of the central bright maximum in mm.",
            answer: { type: "number", value: 20, tolerance: 0.2, display: "20 mm" },
            solution:
              "Half-width {{y = (λ D) / b = (500 * 10^(-9) * 2.0) / (0.10 * 10^(-3)) = 0.010}} m = 10 mm. Full central maximum width = {{2y = 20}} mm.",
          },
        },
        {
          title: "Diffraction grating angle and maximum observable order [HL]",
          problem:
            "A diffraction grating ruled with 600 lines per mm is illuminated normally by green light of wavelength {{λ = 500}} nm. (a) Calculate the diffraction angle of the 2nd-order principal maximum. (b) Determine the highest order visible and the total number of bright maxima seen on a semicircular screen.",
          steps: [
            "Convert lines per mm to slit spacing {{d}} in metres: 600 lines mm⁻¹ = {{6.00 * 10^5}} lines m⁻¹, so {{d = 1 / (6.00 * 10^5) = 1.667 * 10^(-6)}} m.",
            "Apply {{n λ = d sin θ}} for {{n = 2}}: {{sin θ = (2 * 500 * 10^(-9)) / (1.667 * 10^(-6)) = 0.600}}.",
            "Take inverse sine: {{θ = 36.9°}}.",
            "For the highest order, set {{sin θ <= 1}}: {{n <= d / λ = (1.667 * 10^(-6)) / (500 * 10^(-9)) = 3.33}}, so {{n_max = 3}}.",
            "Total maxima on both sides plus central zero order: {{2(3) + 1 = 7}} bright spots.",
          ],
          answer: "(a) 36.9°; (b) {{n_max = 3}}, 7 bright maxima in total",
          yourTurn: {
            question:
              "Red light of wavelength 620 nm hits a diffraction grating with 500 lines mm⁻¹ at normal incidence. Determine the highest integer order {{n_max}} observable.",
            answer: { type: "number", value: 3, tolerance: 0, display: "3" },
            solution:
              "Slit spacing {{d = 1 / (5.00 * 10^5) = 2.00 * 10^(-6)}} m = 2000 nm. Then {{d / λ = 2000 / 620 = 3.23}}, so rounding down gives {{n_max = 3}}.",
          },
        },
      ],
      keyPoints: [
        "Single-slit first minimum is at {{θ = λ / b}} (**radians**); the central maximum has angular width {{2 λ / b}}—twice the width of any secondary maximum.",
        "In a modulated double-slit pattern, slit separation {{d}} sets the fine fringe spacing while slit width {{b}} sets the overarching diffraction envelope.",
        "Missing orders occur when {{d / b = n / m}}; increasing {{b}} narrows the envelope and leaves *fewer* fringes visible inside the central maximum.",
        "For a diffraction grating, {{n λ = d sin θ}} with {{d = 1 / N_per_metre}}; always use {{sin θ}} (never small-angle {{θ}}) and round {{d / λ}} **down** for {{n_max}}.",
        "Increasing the number of illuminated slits {{N}} keeps maxima at the same angles, makes them sharper, and boosts peak intensity as {{N^2}}.",
      ],
      whyItWorks:
        "Why do grating maxima become razor-sharp when {{N}} is large? At the exact angle {{d sin θ = n λ}}, all {{N}} wavelets arrive in phase and add to {{N A}}, giving intensity {{I ∝ N^2}}. Shift the angle by just a tiny amount {{δθ}} so that neighbouring slits are out of phase by only {{2π / N}}: now the {{N}} wavelet phasors curl into a closed regular {{N}}-gon whose vector sum is **zero**! The larger {{N}} is, the tinier the shift {{δθ}} needed to hit complete darkness.",
      strategies: [
        "Always check whether a question gives lines per **mm** or lines per **cm** before computing {{d = 1 / N}}; 500 lines mm⁻¹ = {{5 * 10^5}} lines m⁻¹ → {{d = 2.0 * 10^(-6)}} m.",
        "Do not confuse {{d}} (centre-to-centre slit separation) with {{b}} (width of a single slit): {{d}} is always greater than {{b}}.",
        "If asked for the *angular separation* between the two 1st-order maxima (left and right of centre), remember to **double** {{θ_1}}!",
      ],
      thinkDeeper:
        "Can the 2nd-order red line ({{λ = 700}} nm) ever overlap the 3rd-order violet line ({{λ = 400}} nm) in a diffraction grating spectrum? Check {{n λ}}: for red, {{2 * 700 = 1400}} nm; for violet, {{3 * 400 = 1200}} nm. Because {{1200 < 1400}}, the 3rd-order violet appears at a *smaller* angle than 2nd-order red—spectra overlap from {{n = 2}} onwards!",
    },

    // =========================================================================
    // SECTION 3: C.4 Standing Waves on Strings & Pipes, Damping & Resonance (SL)
    // =========================================================================
    {
      id: "standing-waves-resonance",
      heading: "C.4 Standing Waves on Strings & Pipes, Damping & Resonance",
      level: "SL",
      discovery: {
        problem:
          "Blow gently across the top of a tall glass bottle (closed at the bottom, open at the top) to hear a deep note. Now imagine cutting the bottom off so both ends are open—keeping the exact same tube length {{L}}. Will the fundamental pitch stay the same, drop by an octave, or jump up by an octave?",
        idea:
          "It **jumps up by an octave** (doubles in frequency)! With one closed end (a displacement node) and one open end (an antinode), only a **quarter** of a wavelength fits inside the tube ({{L = λ / 4}}, so {{λ = 4L}}). Opening both ends puts an antinode at each end, fitting **half** a wavelength inside ({{L = λ / 2}}, so {{λ = 2L}}). Halving the wavelength at fixed sound speed doubles the fundamental frequency!",
      },
      body: `**Formation of standing (stationary) waves.** A standing wave forms when two **progressive waves** of the **same frequency, same wavelength, and same amplitude** travel in **opposite directions** and superpose (most commonly an incident wave interfering with its own reflection from a boundary).

| Property | Progressive (travelling) wave | Standing (stationary) wave |
| --- | --- | --- |
| Energy transfer | Transfers energy along propagation direction | **Zero net energy transfer** along the wave |
| Amplitude | Same for all particles (no damping) | Varies from 0 at **nodes (N)** to max at **antinodes (A)** |
| Phase relationship | Phase changes continuously with distance | Points between adjacent nodes are **in phase**; across a node are in **antiphase** (π rad) |
| Wavelength {{λ}} | Distance between adjacent crests | **Twice** the distance between adjacent nodes ({{d_(N-N) = λ / 2}}) |

Key spatial spacings in every standing wave:
- Node to adjacent Node (or Antinode to adjacent Antinode): **{{λ / 2}}**.
- Node to adjacent Antinode: **{{λ / 4}}**.

**Harmonics on strings and in air columns.** Boundaries impose strict conditions: fixed string ends and closed pipe ends are **displacement nodes (N)**; open pipe ends are **displacement antinodes (A)**. (Note: inside air columns, a displacement node is a *pressure antinode* where air compresses and rarefies maximally, while an open end is a *pressure node* fixed at atmospheric pressure.)

| System | Boundary ends | Allowed harmonics | Wavelength {{λ}} | Frequency {{f}} |
| --- | --- | --- | --- | --- |
| Stretched string | N – N | All: {{n = 1, 2, 3, ...}} | {{λ_n = (2L) / n}} | {{f_n = (n v) / (2L) = n f_1}} |
| Open–open pipe | A – A | All: {{n = 1, 2, 3, ...}} | {{λ_n = (2L) / n}} | {{f_n = (n v) / (2L) = n f_1}} |
| Open–closed pipe | N – A | **Odd only:** {{1, 3, 5, ...}} (mode {{k}}: {{2k - 1}}) | {{λ = (4L) / (2k - 1)}} | {{f = ((2k - 1) v) / (4L)}} |

On a stretched string of tension {{T}} and mass per unit length {{μ}}, wave speed is {{v = sqrt(T / μ)}}, so tightening a guitar string raises {{v}} and proportionally raises every harmonic frequency.

**Damping and forced resonance.** Real oscillators lose mechanical energy to resistive forces (air drag, friction):
- **Light damping (underdamped):** amplitude decays exponentially over many oscillations; period stays nearly constant.
- **Critical damping:** system returns to equilibrium in the **shortest possible time without oscillating** (ideal for car shock absorbers and analogue meters).
- **Heavy damping (overdamped):** system creeps slowly back to equilibrium with no oscillation.

When an external periodic driver of frequency {{f_d}} drives an oscillator whose natural frequency is {{f_0}}, **resonance** occurs when {{f_d = f_0}}: energy is transferred at the maximum rate and the oscillation amplitude peaks. Increasing damping **reduces** the peak amplitude, **broadens** the resonance curve, and **shifts** the peak frequency slightly below {{f_0}}.`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram: left panel compares the first three standing-wave harmonics on a fixed string or open-open pipe with the odd harmonics of an open-closed pipe; right panel plots resonance amplitude versus driving frequency for light, moderate, and heavy damping">
  <rect x="0" y="0" width="520" height="265" fill="#ffffff" />
  <!-- Left Panel: Standing Wave Harmonics -->
  <rect x="10" y="10" width="268" height="245" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="144" y="29" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Standing-Wave Harmonics (Length L)</text>

  <!-- Sub-header: Fixed String -->
  <text x="24" y="47" font-size="9.8" font-weight="700" fill="#1e40af">Fixed String (N–N): all harmonics, fₙ = n f₁</text>
  <!-- n=1 string -->
  <line x1="28" y1="70" x2="188" y2="70" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,2" />
  <path d="M 28 70 Q 108 46 188 70" fill="none" stroke="#2563eb" stroke-width="2" />
  <path d="M 28 70 Q 108 94 188 70" fill="none" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="4,3" />
  <circle cx="28" cy="70" r="3" fill="#dc2626" />
  <circle cx="188" cy="70" r="3" fill="#dc2626" />
  <text x="108" y="67" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0d9488">A</text>
  <text x="196" y="73" font-size="9.2" font-weight="600" fill="#334155">n=1, λ=2L</text>

  <!-- n=2 string -->
  <line x1="28" y1="106" x2="188" y2="106" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,2" />
  <path d="M 28 106 Q 68 84 108 106 Q 148 128 188 106" fill="none" stroke="#2563eb" stroke-width="2" />
  <path d="M 28 106 Q 68 128 108 106 Q 148 84 188 106" fill="none" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="4,3" />
  <circle cx="28" cy="106" r="3" fill="#dc2626" />
  <circle cx="108" cy="106" r="3" fill="#dc2626" />
  <circle cx="188" cy="106" r="3" fill="#dc2626" />
  <text x="196" y="109" font-size="9.2" font-weight="600" fill="#334155">n=2, λ=L</text>

  <!-- Sub-header: Open-Closed Pipe -->
  <text x="24" y="142" font-size="9.8" font-weight="700" fill="#7c3aed">Open–Closed Pipe (N–A): odd only, f = (2k−1)f₁</text>
  <!-- 1st harmonic (k=1) -->
  <line x1="28" y1="154" x2="188" y2="154" stroke="#1e293b" stroke-width="1.6" />
  <line x1="28" y1="186" x2="188" y2="186" stroke="#1e293b" stroke-width="1.6" />
  <line x1="28" y1="154" x2="28" y2="186" stroke="#1e293b" stroke-width="2.6" />
  <path d="M 28 170 Q 108 156 188 156" fill="none" stroke="#7c3aed" stroke-width="2" />
  <path d="M 28 170 Q 108 184 188 184" fill="none" stroke="#7c3aed" stroke-width="1.4" stroke-dasharray="4,3" />
  <circle cx="28" cy="170" r="3" fill="#dc2626" />
  <text x="36" y="173" font-size="8.5" font-weight="700" fill="#dc2626">N</text>
  <text x="176" y="173" font-size="8.5" font-weight="700" fill="#0d9488">A</text>
  <text x="196" y="173" font-size="9.2" font-weight="600" fill="#334155">1st: λ=4L</text>

  <!-- 3rd harmonic (k=2) -->
  <line x1="28" y1="202" x2="188" y2="202" stroke="#1e293b" stroke-width="1.6" />
  <line x1="28" y1="234" x2="188" y2="234" stroke="#1e293b" stroke-width="1.6" />
  <line x1="28" y1="202" x2="28" y2="234" stroke="#1e293b" stroke-width="2.6" />
  <path d="M 28 218 Q 55 204 81 204 Q 108 204 135 218 Q 161 232 188 232" fill="none" stroke="#7c3aed" stroke-width="2" />
  <path d="M 28 218 Q 55 232 81 232 Q 108 232 135 218 Q 161 204 188 204" fill="none" stroke="#7c3aed" stroke-width="1.4" stroke-dasharray="4,3" />
  <circle cx="28" cy="218" r="3" fill="#dc2626" />
  <circle cx="135" cy="218" r="3" fill="#dc2626" />
  <text x="196" y="221" font-size="9.2" font-weight="600" fill="#334155">3rd: λ=4L/3</text>

  <!-- Right Panel: Resonance Curve -->
  <rect x="288" y="10" width="222" height="245" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="399" y="29" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Forced Resonance &amp; Damping</text>
  <!-- Axes -->
  <line x1="316" y1="215" x2="496" y2="215" stroke="#334155" stroke-width="1.5" />
  <line x1="316" y1="48" x2="316" y2="215" stroke="#334155" stroke-width="1.5" />
  <text x="406" y="242" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Driving frequency f_d</text>
  <text x="303" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#334155" transform="rotate(-90 303 132)">Amplitude A</text>
  <!-- Natural frequency f0 dashed line -->
  <line x1="408" y1="50" x2="408" y2="215" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="4,3" />
  <text x="408" y="228" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">f₀</text>
  <!-- Light damping curve (sharp tall peak near f0) -->
  <path d="M 316 186 C 362 182 388 158 405 62 C 420 158 446 196 492 208" fill="none" stroke="#2563eb" stroke-width="2.2" />
  <text x="414" y="72" font-size="9.2" font-weight="700" fill="#2563eb">Light damping</text>
  <!-- Moderate damping curve (lower, broader, shifted slightly left) -->
  <path d="M 316 186 C 354 180 378 148 398 124 C 418 148 446 194 492 209" fill="none" stroke="#d97706" stroke-width="2" />
  <text x="424" y="132" font-size="9.2" font-weight="700" fill="#d97706">Moderate</text>
  <!-- Heavy damping curve (flat, peak shifted further left) -->
  <path d="M 316 186 C 344 179 366 172 386 173 C 414 176 452 200 492 211" fill="none" stroke="#0d9488" stroke-width="2" />
  <text x="434" y="176" font-size="9.2" font-weight="700" fill="#0d9488">Heavy damping</text>
</svg>`,
      diagramCaption:
        "Left: boundary conditions quantise allowed standing waves—strings/open–open pipes support all harmonics, whereas open–closed pipes support only odd harmonics. Right: heavier damping lowers, broadens, and slightly left-shifts the resonance peak.",
      workedExamples: [
        {
          title: "Comparing open–closed and open–open pipes",
          problem:
            "An organ pipe of length {{L = 0.85}} m is filled with air in which the speed of sound is {{v = 340}} m s⁻¹. Calculate the fundamental frequency and the next higher resonant frequency if the pipe is (a) closed at one end and open at the other, and (b) open at both ends.",
          steps: [
            "(a) Open–closed pipe: {{λ_1 = 4L = 4 * 0.85 = 3.40}} m, so {{f_1 = v / λ_1 = 340 / 3.40 = 100}} Hz.",
            "Only odd harmonics exist in an open–closed pipe, so the next allowed resonance is the 3rd harmonic: {{f_3 = 3 f_1 = 300}} Hz.",
            "(b) Open–open pipe: {{λ_1 = 2L = 2 * 0.85 = 1.70}} m, so {{f_1 = 340 / 1.70 = 200}} Hz.",
            "All integer harmonics exist, so the next resonance is the 2nd harmonic: {{f_2 = 2 f_1 = 400}} Hz.",
          ],
          answer: "(a) 100 Hz and 300 Hz; (b) 200 Hz and 400 Hz",
          yourTurn: {
            question:
              "A stretched guitar string of length 0.60 m vibrates in its 3rd harmonic at a frequency of 450 Hz. Calculate the wave speed along the string in m s⁻¹.",
            answer: { type: "number", value: 180, tolerance: 0.5, display: "180 m s^-1" },
            solution:
              "For the 3rd harmonic on a fixed string, {{λ_3 = (2L) / 3 = 1.20 / 3 = 0.40}} m. Therefore {{v = f λ = 450 * 0.40 = 180}} m s⁻¹.",
          },
        },
        {
          title: "Identifying an unknown pipe from consecutive resonances",
          problem:
            "Two **consecutive** resonant frequencies of a mystery air pipe are measured as 420 Hz and 700 Hz (speed of sound {{v = 340}} m s⁻¹). Deduce whether the pipe is open–open or open–closed, and find its length {{L}}.",
          steps: [
            "Compute the ratio of the two consecutive frequencies: {{420 / 700 = 3 / 5}}.",
            "Consecutive harmonics in the ratio {{3 : 5}} are odd-only harmonics (3rd and 5th), proving the pipe is **open–closed**.",
            "For an open–closed pipe, the spacing between consecutive resonances is {{Δf = 2 f_1 = 700 - 420 = 280}} Hz, so the fundamental frequency is {{f_1 = 140}} Hz (check: {{3 * 140 = 420}} Hz, {{5 * 140 = 700}} Hz).",
            "Using {{f_1 = v / (4L)}}: {{L = 340 / (4 * 140) = 0.607}} m.",
          ],
          answer: "Open–closed pipe of length 0.607 m",
          yourTurn: {
            question:
              "An open–closed organ pipe has a fundamental frequency of 125 Hz. Calculate the frequency of its 5th harmonic in Hz.",
            answer: { type: "number", value: 625, tolerance: 0, display: "625 Hz" },
            solution:
              "The 5th harmonic has frequency {{f_5 = 5 f_1 = 5 * 125 = 625}} Hz.",
          },
        },
      ],
      keyPoints: [
        "Standing waves transfer **no net energy**; adjacent nodes are separated by {{λ / 2}}, and a node to an adjacent antinode is {{λ / 4}}.",
        "Particles between two adjacent nodes oscillate **in phase** (0 rad); particles on opposite sides of a node oscillate in **antiphase** (π rad).",
        "Fixed strings (N–N) and open–open pipes (A–A) support all harmonics ({{f_n = n v / (2L)}}); open–closed pipes (N–A) support **odd harmonics only** ({{f = (2k - 1) v / (4L)}}).",
        "Critical damping returns an oscillator to equilibrium in the minimum time without overshooting.",
        "Resonance occurs when driving frequency equals natural frequency ({{f_d = f_0}}); adding damping lowers, broadens, and slightly left-shifts the peak.",
      ],
      whyItWorks:
        "Why can only discrete wavelengths survive on a guitar string or in a pipe? Suppose a wave travels down a fixed string, reflects with a π-radian phase inversion at each end, and returns to the start. Unless the round-trip length {{2L}} equals an exact integer multiple of {{λ}} ({{2L = n λ}}), each reflected bounce arrives out of phase with the next, and over hundreds of reflections the waves cancel themselves out completely. Only resonant modes satisfy the boundary conditions and build constructively!",
      strategies: [
        "Always sketch the displacement loops inside the string or pipe first—counting quarter-wavelengths ({{λ / 4}}) eliminates formula mix-ups between {{2L}} and {{4L}}.",
        "For consecutive pipe resonances {{f_a}} and {{f_b}}, simplify the fraction {{f_a / f_b}}: if it reduces to adjacent integers like {{2/3}} or {{3/4}}, the pipe is open–open; if it reduces to consecutive **odd** integers like {{3/5}} or {{5/7}}, it is open–closed.",
        "In exam explanations of standing-wave formation, always mention ALL FOUR conditions: two waves of equal **frequency**, equal **wavelength**, equal **amplitude**, travelling in **opposite directions** and superposing.",
      ],
      thinkDeeper:
        "In a real open-ended flute or organ pipe, air just slightly outside the mouth also oscillates, so the displacement antinode actually sits a tiny distance {{e}} (the *end correction*) beyond the rim. That makes the effective acoustic length {{L_eff = L + e}} (or {{L + 2e}} for open–open), slightly lowering the real resonant frequency below the ideal {{v / (2L)}} formula!",
    },

    // =========================================================================
    // SECTION 4: C.5 Doppler Effect (SL Core & HL Extension)
    // =========================================================================
    {
      id: "doppler-effect-sl-hl",
      heading: "C.5 Doppler Effect: Wavefronts, Redshift & Quantitative Equations",
      level: "HL",
      discovery: {
        problem:
          "Stand on a pavement as an ambulance races toward you at 30 m s⁻¹ sounding a constant 600 Hz siren. Now imagine a second experiment: the ambulance parks, and *you* drive toward it at 30 m s⁻¹. In both cases your relative approach speed is 30 m s⁻¹. Do you hear the **exact same** shifted frequency in both cases?",
        idea:
          "Surprisingly, **no**—not for sound! Sound travels through a physical medium (air). When the *source* moves toward you, each new crest is emitted closer to the previous one, compressing the **wavelength** in the air; when *you* move toward a parked siren, the wavelength in the air is unchanged and only your encounter speed rises. Using {{v = 340}} m s⁻¹, the moving siren gives {{600 * 340 / 310 = 658.1}} Hz, whereas moving yourself gives {{600 * 370 / 340 = 652.9}} Hz! For **light in vacuum**, however, there is no medium, so only relative velocity matters.",
      },
      body: `**SL Core — Wavefront picture of the Doppler effect.** The *Doppler effect* is the observed change in frequency (and wavelength for a moving source) of a wave when there is relative motion between the source and the observer.
- **Moving source (stationary observer):** As the source moves toward the observer, it chases its own emitted wavefronts, **compressing the wavelength** ahead ({{λ' < λ}}). Because wave speed {{v}} in the medium is unchanged, more wavefronts arrive per second, so observed frequency rises ({{f' > f}}). Behind the source, wavefronts are **stretched** ({{λ' > λ}}), lowering observed frequency ({{f' < f}}).
- **Moving observer (stationary source):** The wavefronts in the medium stay equally spaced (wavelength {{λ}} is **unchanged**), but an approaching observer sweeps through them at a higher relative speed ({{v + u_o}}), measuring a higher frequency; a receding observer intercepts fewer per second, measuring a lower frequency.

**SL Core — Electromagnetic Doppler shift ({{v << c}}).** Because electromagnetic waves require no medium and always travel at {{c}} in vacuum, only the relative radial speed {{v}} between source and observer matters. When {{v << c}}:

{{Δf / f ≈ Δλ / λ ≈ v / c}}

- Source and observer **receding**: observed wavelength increases (**redshift**, {{λ' > λ}}, {{f' < f}}). Nearly all distant galaxies show cosmological redshift, providing key evidence for the expanding Universe.
- Source and observer **approaching**: observed wavelength decreases (**blueshift**, {{λ' < λ}}, {{f' > f}}).

**HL Extension — Quantitative Doppler equations for mechanical (sound) waves.** Let {{v}} be the wave speed in the stationary medium, {{f}} the emitted frequency, {{u_s}} the source speed, and {{u_o}} the observer speed (along the line joining them):

| Situation | Formula | Wavelength in medium |
| --- | --- | --- |
| **Moving source** approaching | {{f' = f (v / (v - u_s))}} | Shorter: {{λ' = (v - u_s) / f}} |
| **Moving source** receding | {{f' = f (v / (v + u_s))}} | Longer: {{λ' = (v + u_s) / f}} |
| **Moving observer** approaching | {{f' = f ((v + u_o) / v)}} | Unchanged: {{λ = v / f}} |
| **Moving observer** receding | {{f' = f ((v - u_o) / v)}} | Unchanged: {{λ = v / f}} |

In IB Data Booklet shorthand, these are compactly written as {{f' = f (v / (v ∓ u_s))}} and {{f' = f ((v ± u_o) / v)}}.

**Double Doppler shift (reflection off a moving target).** In police radar guns and medical Doppler ultrasound measuring blood-cell velocity {{u}}, waves reflect off a moving object. The target first acts as a **moving observer** receiving frequency {{f_1}}, and immediately re-emits (reflects) {{f_1}} as a **moving source** back to the detector:
- For an approaching reflecting target (sound/ultrasound): {{f'' = f ((v + u) / (v - u))}}.
- For slow targets ({{u << v}}) or EM radar ({{v << c}}), this simplifies cleanly to a **double shift**: {{Δf / f ≈ (2 u) / v}} (or {{(2 v) / c}} for radar).`,
      diagram: `<svg viewBox="0 0 520 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-panel diagram: left panel shows circular wavefronts emitted by a source moving to the right, compressed in front and stretched behind; right panel compares a laboratory rest absorption spectrum with a redshifted galaxy spectrum showing delta lambda">
  <rect x="0" y="0" width="520" height="255" fill="#ffffff" />
  <!-- Left Panel: Moving Source Wavefronts -->
  <rect x="10" y="10" width="276" height="235" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="148" y="30" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Moving Source Wavefronts (u_s →)</text>
  <!-- Non-concentric circles: source moves right (oldest center=118 r=86, next=140 r=64, next=162 r=42, newest=184 r=20, current source=200) -->
  <circle cx="118" cy="132" r="82" fill="none" stroke="#3b82f6" stroke-width="1.6" />
  <circle cx="140" cy="132" r="61" fill="none" stroke="#3b82f6" stroke-width="1.6" />
  <circle cx="162" cy="132" r="40" fill="none" stroke="#2563eb" stroke-width="1.8" />
  <circle cx="184" cy="132" r="19" fill="none" stroke="#1d4ed8" stroke-width="2" />
  <!-- Source dot and velocity arrow -->
  <circle cx="198" cy="132" r="5" fill="#dc2626" />
  <line x1="205" y1="132" x2="230" y2="132" stroke="#dc2626" stroke-width="2.2" />
  <polygon points="233,132 225,128 225,136" fill="#dc2626" />
  <text x="218" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">u_s</text>
  <!-- Observer A (behind, receding) -->
  <circle cx="24" cy="132" r="5" fill="#0f172a" />
  <text x="24" y="152" text-anchor="middle" font-size="9.2" font-weight="700" fill="#0f172a">Obs A</text>
  <text x="58" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Stretched λ' &gt; λ</text>
  <text x="58" y="238" text-anchor="middle" font-size="9.2" fill="#334155">Lower f' (receding)</text>
  <!-- Observer B (ahead, approaching) -->
  <circle cx="268" cy="132" r="5" fill="#0f172a" />
  <text x="268" y="152" text-anchor="middle" font-size="9.2" font-weight="700" fill="#0f172a">Obs B</text>
  <text x="224" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb">Compressed λ' &lt; λ</text>
  <text x="224" y="238" text-anchor="middle" font-size="9.2" fill="#334155">Higher f' (approaching)</text>
  <!-- λ' brackets -->
  <line x1="36" y1="115" x2="79" y2="115" stroke="#dc2626" stroke-width="1.5" />
  <text x="57" y="110" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">λ'_back</text>

  <!-- Right Panel: Astronomical Redshift -->
  <rect x="296" y="10" width="214" height="235" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="403" y="30" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">EM Redshift (Δλ / λ ≈ v / c)</text>
  <!-- Wavelength direction label -->
  <text x="312" y="54" font-size="9.5" font-weight="700" fill="#7c3aed">Blue (400 nm)</text>
  <text x="494" y="54" text-anchor="end" font-size="9.5" font-weight="700" fill="#dc2626">Red (700 nm)</text>
  <!-- Lab Spectrum -->
  <text x="312" y="76" font-size="10" font-weight="700" fill="#1e293b">Lab (at rest)</text>
  <defs>
    <linearGradient id="visSpec" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="28%" stop-color="#3b82f6" />
      <stop offset="52%" stop-color="#22c55e" />
      <stop offset="76%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
  </defs>
  <rect x="312" y="82" width="182" height="32" rx="4" fill="url(#visSpec)" stroke="#334155" stroke-width="1" />
  <!-- Lab absorption lines -->
  <line x1="342" y1="82" x2="342" y2="114" stroke="#0f172a" stroke-width="2.6" />
  <line x1="388" y1="82" x2="388" y2="114" stroke="#0f172a" stroke-width="2.6" />
  <line x1="448" y1="82" x2="448" y2="114" stroke="#0f172a" stroke-width="2.6" />

  <!-- Receding Galaxy Spectrum -->
  <text x="312" y="148" font-size="10" font-weight="700" fill="#dc2626">Receding galaxy (shifted right)</text>
  <rect x="312" y="154" width="182" height="32" rx="4" fill="url(#visSpec)" stroke="#334155" stroke-width="1" />
  <!-- Shifted absorption lines (+18px toward red) -->
  <line x1="360" y1="154" x2="360" y2="186" stroke="#0f172a" stroke-width="2.6" />
  <line x1="406" y1="154" x2="406" y2="186" stroke="#0f172a" stroke-width="2.6" />
  <line x1="466" y1="154" x2="466" y2="186" stroke="#0f172a" stroke-width="2.6" />

  <!-- Shift arrows -->
  <line x1="342" y1="126" x2="358" y2="126" stroke="#0f172a" stroke-width="1.6" />
  <polygon points="361,126 355,123 355,129" fill="#0f172a" />
  <line x1="448" y1="126" x2="464" y2="126" stroke="#0f172a" stroke-width="1.6" />
  <polygon points="467,126 461,123 461,129" fill="#0f172a" />
  <text x="403" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">+Δλ (redshift)</text>
  <text x="403" y="212" text-anchor="middle" font-size="9.5" fill="#334155">Pattern spacing preserved;</text>
  <text x="403" y="226" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">all lines shift to longer λ</text>
</svg>`,
      diagramCaption:
        "Left: a moving source compresses wavefronts in front (higher f') and stretches them behind (lower f'). Right: a receding galaxy shifts every absorption line toward longer wavelengths by Δλ ≈ λ(v/c).",
      workedExamples: [
        {
          title: "Galactic recession speed from H-α redshift [SL Core]",
          problem:
            "In a laboratory, the hydrogen-alpha absorption line has wavelength {{λ_0 = 656.3}} nm. In the spectrum of a distant galaxy, this same line is measured at {{λ' = 669.4}} nm. State whether the galaxy is approaching or receding and calculate its radial speed.",
          steps: [
            "Because {{λ' > λ_0}}, the light is **redshifted**, so the galaxy is **receding** from Earth.",
            "Find the wavelength shift: {{Δλ = 669.4 - 656.3 = 13.1}} nm.",
            "Apply {{Δλ / λ_0 ≈ v / c}}: {{v = (Δλ / λ_0) c = (13.1 / 656.3) * 3.00 * 10^8 = 5.99 * 10^6}} m s⁻¹.",
            "Sanity check: {{v / c ≈ 0.020 << 1}}, so the non-relativistic Doppler approximation is valid.",
          ],
          answer: "Receding at {{5.99 * 10^6}} m s⁻¹ (about 2% of {{c}})",
          yourTurn: {
            question:
              "A spectral line of rest wavelength 500 nm from an approaching star is observed to be blueshifted by 0.25 nm. Calculate the speed of the star toward Earth in km s⁻¹ (use {{c = 3.00 * 10^5}} km s⁻¹).",
            answer: { type: "number", value: 150, tolerance: 1, display: "150" },
            solution:
              "{{v = c * (Δλ / λ) = 3.00 * 10^5 * (0.25 / 500) = 150}} km s⁻¹.",
          },
        },
        {
          title: "Approaching and receding ambulance siren [HL]",
          problem:
            "An ambulance travels straight past a stationary pedestrian at {{u_s = 20}} m s⁻¹ while sounding a 680 Hz siren. Taking the speed of sound in air as {{v = 340}} m s⁻¹, calculate the frequency heard (a) as it approaches, and (b) after it passes and recedes.",
          steps: [
            "Identify that the **source** is moving, so use {{f' = f (v / (v ∓ u_s))}}.",
            "(a) Approaching → pitch must be **higher**, so choose the minus sign in the denominator: {{f' = 680 * (340 / (340 - 20)) = 680 * (340 / 320) = 722.5}} Hz ≈ 723 Hz.",
            "(b) Receding → pitch must be **lower**, so choose the plus sign in the denominator: {{f' = 680 * (340 / (340 + 20)) = 680 * (340 / 360) = 642.2}} Hz ≈ 642 Hz.",
          ],
          answer: "(a) 723 Hz approaching; (b) 642 Hz receding",
          yourTurn: {
            question:
              "A stationary foghorn emits a 400 Hz note in air where {{v = 340}} m s⁻¹. A speedboat drives directly toward the foghorn at 17 m s⁻¹. Calculate the frequency heard by the boat's captain in Hz.",
            answer: { type: "number", value: 420, tolerance: 0.5, display: "420 Hz" },
            solution:
              "Moving observer approaching: {{f' = f ((v + u_o) / v) = 400 * ((340 + 17) / 340) = 400 * 1.05 = 420}} Hz.",
          },
        },
      ],
      keyPoints: [
        "Moving source changes **both** observed wavelength {{λ'}} and frequency {{f'}}; moving observer leaves {{λ}} in the medium **unchanged** and alters only {{f'}}.",
        "For electromagnetic waves with {{v << c}}, {{Δf / f ≈ Δλ / λ ≈ v / c}}: recession causes **redshift** (longer {{λ}}), approach causes **blueshift** (shorter {{λ}}).",
        "[HL] Moving source: {{f' = f v / (v ∓ u_s)}} (minus for approach, plus for recession).",
        "[HL] Moving observer: {{f' = f (v ± u_o) / v}} (plus for approach, minus for recession).",
        "[HL] For a wave reflected from a moving target (ultrasound/radar), apply the Doppler shift **twice** ({{Δf / f ≈ 2v / c}} for {{v << c}}).",
      ],
      whyItWorks:
        "Why does a moving source put {{u_s}} in the denominator? During one period {{T = 1/f}}, the first wavefront travels distance {{v T}} forward while the source chases after it by distance {{u_s T}}. The next wavefront is therefore emitted only {{λ' = (v - u_s) T = (v - u_s) / f}} behind the first! Because sound still propagates through air at speed {{v}}, the stationary listener receives crests at rate {{f' = v / λ' = f v / (v - u_s)}}.",
      strategies: [
        "Never memorise ± signs blindly: check physically whether distance is shrinking (**higher** {{f'}}) or growing (**lower** {{f'}}), then choose the sign that makes the fraction > 1 or < 1.",
        "Always check whether the problem asks for the **observed frequency {{f'}}** or the **frequency shift {{Δf = |f' - f|}}**.",
        "In radar or ultrasound problems, watch for the word *reflected* or *echo*—that signals a **double** Doppler shift!",
      ],
      thinkDeeper:
        "What happens if a jet approaches at exactly the speed of sound ({{u_s = v}})? The denominator {{v - u_s}} hits zero: every wavefront piles on top of the previous ones right at the nose of the jet, forming a high-pressure **shock wave** (a sonic boom when it sweeps past an observer)!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "State Snell's law and what happens to f, v, and λ when light enters a denser medium.",
        back: "{{n_1 sin θ_1 = n_2 sin θ_2}} (with {{n = c / v}}). Frequency {{f}} stays **constant**; speed {{v}} and wavelength {{λ}} both **decrease**, and the ray bends **toward** the normal.",
        level: "SL",
      },
      {
        front: "What two conditions are required for Total Internal Reflection (TIR)?",
        back: "1. Wave travels from an optically denser to a less dense medium ({{n_1 > n_2}}). 2. Angle of incidence exceeds the critical angle ({{θ_1 > θ_c}} where {{sin θ_c = n_2 / n_1}}).",
        level: "SL",
      },
      {
        front: "When is diffraction through an aperture most significant, and what wave properties change?",
        back: "Most significant when aperture width {{b ≈ λ}}. Speed {{v}}, frequency {{f}}, and wavelength {{λ}} are all **unchanged**—only the direction/shape of the wavefronts spreads.",
        level: "SL",
      },
      {
        front: "What does it mean for two wave sources to be coherent?",
        back: "They maintain a **constant phase difference** (which requires them to have the same frequency).",
        level: "SL",
      },
      {
        front: "Give the path-difference conditions for constructive and destructive interference (in-phase sources).",
        back: "Constructive (bright): {{Δ = n λ}} ({{n = 0, 1, 2, ...}}). Destructive (dark): {{Δ = (n + 1/2) λ}}.",
        level: "SL",
      },
      {
        front: "State Young's double-slit fringe spacing formula and its validity condition.",
        back: "{{s = (λ D) / d}}, valid when screen distance {{D >> d}} (small-angle approximation, {{sin θ ≈ tan θ ≈ θ}}).",
        level: "SL",
      },
      {
        front: "[HL] State the single-slit first minimum angle and the angular width of the central maximum.",
        back: "First minimum: {{θ = λ / b}} (radians). Central maximum angular width = {{2 λ / b}} (twice as wide as every secondary maximum).",
        level: "HL",
      },
      {
        front: "[HL] When do missing orders occur in a modulated double-slit pattern?",
        back: "Whenever a double-slit maximum ({{d sin θ = n λ}}) falls on a single-slit minimum ({{b sin θ = m λ}}), i.e., {{n / m = d / b}}.",
        level: "HL",
      },
      {
        front: "[HL] State the diffraction grating equation and how to find the maximum observable order.",
        back: "{{n λ = d sin θ}} where {{d = 1 / N}} (lines per metre). Since {{sin θ <= 1}}, {{n_max = floor(d / λ)}}.",
        level: "HL",
      },
      {
        front: "[HL] How does illuminating more slits N (at fixed spacing d) change a grating pattern?",
        back: "Principal maxima stay at the **same angles**, become **much sharper/narrower**, and increase in peak intensity proportional to {{N^2}}.",
        level: "HL",
      },
      {
        front: "List three key differences between a standing wave and a progressive wave.",
        back: "Standing wave: (1) zero net energy transfer; (2) amplitude varies from 0 (node) to max (antinode); (3) all points between adjacent nodes oscillate in phase, and points across a node are in antiphase (π rad).",
        level: "SL",
      },
      {
        front: "What is the distance between (a) two adjacent nodes and (b) a node and an adjacent antinode?",
        back: "(a) Adjacent nodes (or adjacent antinodes): {{λ / 2}}. (b) Node to adjacent antinode: {{λ / 4}}.",
        level: "SL",
      },
      {
        front: "Compare the allowed harmonics of an open–open pipe vs an open–closed pipe of length L.",
        back: "Open–open (and fixed string): **all** harmonics {{n = 1, 2, 3, ...}} with {{f_n = n v / (2L)}}. Open–closed: **odd harmonics only** ({{1, 3, 5, ...}}) with {{f = (2k - 1) v / (4L)}}.",
        level: "SL",
      },
      {
        front: "How does increasing damping affect a forced oscillation resonance curve?",
        back: "The resonance peak amplitude **decreases**, the curve becomes **broader/flatter**, and the peak frequency shifts **slightly below {{f_0}}**.",
        level: "SL",
      },
      {
        front: "State the electromagnetic Doppler shift equation (v ≪ c) and define redshift vs blueshift.",
        back: "{{Δf / f ≈ Δλ / λ ≈ v / c}}. Receding source → longer {{λ}} (**redshift**); approaching source → shorter {{λ}} (**blueshift**).",
        level: "SL",
      },
      {
        front: "[HL] Compare the moving-source and moving-observer sound Doppler equations.",
        back: "Moving source: {{f' = f v / (v ∓ u_s)}} (wavelength in air changes). Moving observer: {{f' = f (v ± u_o) / v}} (wavelength in air is unchanged). Approach raises {{f'}}; recession lowers {{f'}}.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Frequency {{f}} NEVER changes during reflection, refraction, or diffraction—only when source and observer have relative motion (Doppler effect).",
      "Snell's law angles {{θ_1, θ_2}} are ALWAYS measured to the **normal**, never to the boundary surface.",
      "Double-slit fringe spacing {{s = λ D / d}} applies only for small angles ({{D >> d}}); diffraction gratings ALWAYS require {{n λ = d sin θ}}.",
      "[HL] In single-slit diffraction, {{θ = λ / b}} gives the **half-width** of the central maximum in **radians**; full width is {{2 λ / b}}.",
      "[HL] White light through a diffraction grating bends **red** through a larger angle than **violet** (opposite to a glass prism!).",
      "Adjacent nodes in any standing wave are separated by {{λ / 2}}—NOT a full wavelength {{λ}}.",
      "Open–closed pipes produce ONLY odd harmonics ({{f_1, 3 f_1, 5 f_1, ...}}), with fundamental wavelength {{λ_1 = 4L}}.",
      "At resonance ({{f_d = f_0}}), energy transfer from the driver to the oscillator is maximised; critical damping removes oscillations in the shortest time.",
      "In the Doppler effect, a moving source alters the wavelength in the medium, whereas a moving observer does NOT change the wavelength in the medium.",
      "[HL] Moving source and moving observer at the same speed {{u}} do NOT produce the same frequency shift for sound: {{v / (v - u) > (v + u) / v}}.",
    ],
    misconceptions: [
      {
        wrong: "Light slows down in glass because its frequency decreases.",
        right: "Frequency is fixed by the source and stays **constant** across any boundary; in glass, wave speed and wavelength decrease proportionally ({{v = f λ}}).",
        level: "SL",
      },
      {
        wrong: "Total internal reflection can happen at any boundary if the angle of incidence is large enough.",
        right: "TIR can ONLY occur when the wave travels from a **higher** to a **lower** refractive index ({{n_1 > n_2}}). From air into glass, light always refracts regardless of {{θ_1}}.",
        level: "SL",
      },
      {
        wrong: "In Young's double slit, widening the slit separation d makes the fringes wider apart.",
        right: "Fringe spacing {{s = λ D / d}} is **inversely** proportional to {{d}}: increasing {{d}} squeezes fringes closer together!",
        level: "SL",
      },
      {
        wrong: "[HL] The single-slit equation θ = λ / b gives the full width of the central maximum in degrees.",
        right: "{{θ = λ / b}} gives the **half-width** (from centre to first minimum) in **radians**. Full angular width is {{2 λ / b}}.",
        level: "HL",
      },
      {
        wrong: "The distance between two neighbouring nodes on a vibrating string equals one wavelength λ.",
        right: "One full wavelength contains two loops (three nodes), so adjacent nodes are only **half a wavelength** ({{λ / 2}}) apart.",
        level: "SL",
      },
      {
        wrong: "The second allowed resonant mode of an open–closed pipe is the 2nd harmonic (2 f₁).",
        right: "An open–closed pipe forbids all even harmonics; its second resonant mode is the **3rd harmonic** at {{3 f_1}}.",
        level: "SL",
      },
      {
        wrong: "[HL] For sound, a source moving at 20 m s⁻¹ toward a stationary listener gives the exact same frequency as a listener moving at 20 m s⁻¹ toward a stationary source.",
        right: "Sound travels relative to the air medium, so moving source ({{v/(v - u)}}) gives a slightly **higher** frequency than moving observer ({{(v + u)/v}}).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Using the angle between the ray and the surface instead of the angle to the normal in Snell's law {{n_1 sin θ_1 = n_2 sin θ_2}}.",
      "Counting {{n}} bright fringes (e.g., from fringe 1 to fringe 6) as 6 spacings instead of {{6 - 1 = 5}} spacings when finding {{s}}.",
      "[HL] Plugging {{N}} (lines per mm) directly as {{d}} instead of converting to metres and taking the reciprocal {{d = 1 / (N * 10^3)}}.",
      "[HL] Rounding {{d / λ}} **up** instead of **down** when finding the maximum diffraction grating order (if {{d / λ = 3.85}}, {{n = 4}} would require {{sin θ > 1}}, which is impossible!).",
      "[HL] Using the double-slit small-angle formula {{s = λ D / d}} for a diffraction grating—IB examiners strictly require {{n λ = d sin θ}} and {{y = D tan θ}}.",
      "Forgetting that a closed pipe end is a **displacement node** but a **pressure antinode**, leading to inverted sketches.",
      "Using {{f_2 = 2 f_1}} for an open–closed pipe when asked for the *next higher resonant frequency* (it is {{3 f_1}}!).",
      "[HL] Forgetting the factor of 2 in **reflected** Doppler problems (radar speed guns and medical blood-flow ultrasound).",
    ],
    mnemonics: [
      {
        topic: "Snell's Law Bending Direction",
        device: "FST – SFA (Fast-to-Slow Towards; Slow-to-Fast Away)",
        explanation: "When a wave slows down entering a denser medium it bends **Towards** the normal; when it speeds up entering a rarer medium it bends **Away** from the normal.",
        level: "SL",
      },
      {
        topic: "Pipe Harmonics",
        device: "Open–Closed = Odd Only (O–C → 1, 3, 5)",
        explanation: "A closed end forces a node while the open end forces an antinode, fitting only odd multiples of {{λ / 4}} inside {{L}}.",
        level: "SL",
      },
      {
        topic: "EM Doppler Colour Shift",
        device: "Red = Receding (R–R); Blue = Coming closer",
        explanation: "A receding galaxy stretches light to longer (**Red**) wavelengths; an approaching star compresses light to shorter (**Blue**) wavelengths.",
        level: "SL",
      },
      {
        topic: "HL Sound Doppler Signs",
        device: "Top = Observer (O on top), Bottom = Source (S underneath); Approach = Bigger f'",
        explanation: "In {{f' = f ((v ± u_o) / (v ∓ u_s))}}, observer speed sits in the numerator and source speed in the denominator; always pick signs that make {{f' > f}} for approach and {{f' < f}} for recession.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Submarine Fibre-Optic Internet Cables",
        emoji: "🌐",
        detail: "Over 95% of intercontinental internet traffic pulses as infrared laser light trapped inside hair-thin glass fibres by Total Internal Reflection ({{n_core > n_cladding}}), crossing oceans with tiny signal loss.",
      },
      {
        title: "Diffraction Grating Spectrometers & Exoplanet Atmospheres",
        emoji: "🔭",
        detail: "Astronomical spectrographs use precision diffraction gratings ({{n λ = d sin θ}}) to split starlight into ultra-sharp absorption spectra, revealing gases like water vapour and methane in distant exoplanet atmospheres.",
      },
      {
        title: "Musical Acoustics & Concert Hall Instruments",
        emoji: "🎺",
        detail: "Flutes behave like open–open pipes producing rich all-harmonic spectra, whereas clarinets behave like open–closed pipes emphasising odd harmonics—giving them their warm, woody timbre an octave lower.",
      },
      {
        title: "Earthquake Tuned Mass Dampers (Taipei 101)",
        emoji: "🏙️",
        detail: "Skyscrapers install giant damped pendulums tuned to the building's natural swaying frequency {{f_0}}, absorbing resonant wind and seismic energy so structural amplitude stays safe.",
      },
      {
        title: "Medical Doppler Ultrasound & Galactic Redshift",
        emoji: "🩺",
        detail: "Hospitals bounce MHz ultrasound off moving red blood cells to map blood-flow speeds via the double Doppler shift, while telescopes use the exact same physics ({{Δλ / λ ≈ v / c}}) to track the expansion of the Universe.",
      },
    ],
    videos: [
      {
        title: "IB Physics C.3 Wave Phenomena: Refraction, Diffraction & Double Slit",
        channel: "OSC / Andy Masley IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+C.3+wave+phenomena+double+slit+diffraction+grating",
      },
      {
        title: "Single-Slit Diffraction & Double-Slit Modulation Visualised (HL)",
        channel: "Physics Online / Sir Isaac",
        url: "https://www.youtube.com/results?search_query=IB+Physics+HL+single+slit+diffraction+modulation+missing+orders",
      },
      {
        title: "IB Physics C.4 Standing Waves on Strings, Pipes & Resonance",
        channel: "Chris Doner IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+C.4+standing+waves+pipes+harmonics+resonance",
      },
      {
        title: "IB Physics C.5 Doppler Effect (SL Redshift & HL Sound Equations)",
        channel: "Paper Plainz / IB Physics",
        url: "https://www.youtube.com/results?search_query=IB+Physics+C.5+Doppler+effect+HL+moving+source+observer",
      },
    ],
    formulas: [
      {
        name: "Refractive index",
        formula: "{{n = c / v}}",
        note: "{{c = 3.00 * 10^8}} m s⁻¹ in vacuum; dimensionless ({{n >= 1}})",
        level: "SL",
      },
      {
        name: "Snell's law of refraction",
        formula: "{{n_1 / n_2 = sin θ_2 / sin θ_1 = v_2 / v_1}}",
        note: "Equivalently {{n_1 sin θ_1 = n_2 sin θ_2}}; angles measured to the normal",
        level: "SL",
      },
      {
        name: "Critical angle for TIR",
        formula: "{{sin θ_c = n_2 / n_1}}",
        note: "Valid ONLY when {{n_1 > n_2}} (optically denser to less dense medium)",
        level: "SL",
      },
      {
        name: "Double-slit interference conditions",
        formula: "Constructive: {{Δ = n λ}} ;   Destructive: {{Δ = (n + 1/2) λ}}",
        note: "For coherent sources oscillating in phase ({{n = 0, 1, 2, ...}})",
        level: "SL",
      },
      {
        name: "Young's double-slit fringe spacing",
        formula: "{{s = (λ D) / d}}",
        note: "Small-angle approximation ({{D >> d}}); {{s}} = fringe spacing",
        level: "SL",
      },
      {
        name: "Single-slit diffraction first minimum",
        formula: "{{θ = λ / b}}",
        note: "{{θ}} in **radians** (small angles); full central maximum width = {{2 λ / b}}",
        level: "HL",
      },
      {
        name: "Missing orders in modulated double-slit",
        formula: "{{n / m = d / b}}",
        note: "Double-slit max {{n}} suppressed by single-slit min {{m}}",
        level: "HL",
      },
      {
        name: "Diffraction grating equation",
        formula: "{{n λ = d sin θ}}",
        note: "{{d = 1 / N}} (slit spacing in m); max order {{n_max = floor(d / λ)}}",
        level: "HL",
      },
      {
        name: "Fixed string & open–open pipe harmonics",
        formula: "{{λ_n = (2 L) / n}} ,   {{f_n = (n v) / (2 L)}}",
        note: "All integer harmonics {{n = 1, 2, 3, ...}} allowed",
        level: "SL",
      },
      {
        name: "Open–closed pipe harmonics",
        formula: "{{λ = (4 L) / (2k - 1)}} ,   {{f = ((2k - 1) v) / (4 L)}}",
        note: "Odd harmonics only ({{1, 3, 5, ...}} for {{k = 1, 2, 3, ...}})",
        level: "SL",
      },
      {
        name: "Wave speed on a stretched string",
        formula: "{{v = sqrt(T / μ)}}",
        note: "{{T}} = tension (N), {{μ}} = mass per unit length (kg m⁻¹)",
        level: "SL",
      },
      {
        name: "Electromagnetic Doppler shift (v ≪ c)",
        formula: "{{Δf / f ≈ Δλ / λ ≈ v / c}}",
        note: "Redshift when receding ({{λ' > λ}}), blueshift when approaching ({{λ' < λ}})",
        level: "SL",
      },
      {
        name: "Sound Doppler — moving source",
        formula: "{{f' = f (v / (v ∓ u_s))}}",
        note: "Minus (−) for approaching source, plus (+) for receding source",
        level: "HL",
      },
      {
        name: "Sound Doppler — moving observer",
        formula: "{{f' = f ((v ± u_o) / v)}}",
        note: "Plus (+) for approaching observer, minus (−) for receding observer",
        level: "HL",
      },
    ],
  },
};
