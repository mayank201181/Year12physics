import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: Atomic Spectra, Rutherford Scattering & Nuclear Sizing
  // answerIndex spread: [0,1,2,3,1,0,3,2,0,2,3,1,3,0,2] -> 0:4, 1:3, 2:4, 3:4
  // ===========================================================================
  {
    id: "e1-atom-quantum-m1",
    title: "Paper 1A · Atomic Spectra, Rutherford & Nuclear Sizing",
    level: "SL",
    questions: [
      {
        id: "e1-atom-quantum-m1-q01",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Identify",
        question:
          "In the Geiger–Marsden–Rutherford experiment, more than 99% of α-particles pass straight through thin gold foil with negligible deflection. What does this observation directly show?",
        options: [
          "The atom consists mostly of empty space with a tiny nucleus",
          "Gold atoms contain an equal number of protons and neutrons",
          "Alpha particles carry zero net electric charge in a vacuum",
          "Electrons are uniformly embedded across a positive atomic sphere",
        ],
        answerIndex: 0,
        explanation:
          "Because almost all fast α-particles travel straight through undeflected, the dense positive nucleus must occupy a minuscule fraction of the atomic volume, leaving most of the atom as empty space. Backscattering (~1 in 8000), not straight passage, indicates a dense positive core.",
        hints: [
          "Think about what happens when you fire projectiles through a target and almost none hit anything solid.",
          "Compare the nuclear radius (~10⁻¹⁵ m) with the overall atomic radius (~10⁻¹⁰ m).",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q02",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Explain",
        question:
          "Why was the Geiger–Marsden gold-foil apparatus enclosed inside an evacuated (vacuum) chamber?",
        options: [
          "To stop the gold foil from oxidizing when struck by electrons",
          "To prevent α-particles from colliding with and ionizing air molecules",
          "To accelerate the α-particles to relativistic speeds before impact",
          "To eliminate Earth's gravitational force on the α-particle beam",
        ],
        answerIndex: 1,
        explanation:
          "Alpha particles are strongly ionizing and have a range of only a few centimetres in air. Evacuating the chamber prevents collisions with air molecules from slowing down or scattering the beam before it reaches the gold foil and zinc sulfide detector.",
        hints: [
          "How far do α-particles typically travel through ordinary air before stopping?",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q03",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Calculate",
        question:
          "An electron in a hydrogen atom drops from the energy level at −0.85 eV to the level at −3.40 eV. What is the frequency of the emitted photon? (Take {{h = 6.63 * 10^(-34)}} J s and {{e = 1.60 * 10^(-19)}} C.)",
        options: [
          "{{1.28 * 10^(14)}} Hz",
          "{{3.85 * 10^(14)}} Hz",
          "{{6.15 * 10^(14)}} Hz",
          "{{8.20 * 10^(14)}} Hz",
        ],
        answerIndex: 2,
        explanation:
          "The energy difference is ΔE = −0.85 − (−3.40) = 2.55 eV = 2.55 × 1.60 × 10⁻¹⁹ = 4.08 × 10⁻¹⁹ J. Dividing by Planck's constant gives f = ΔE / h = (4.08 × 10⁻¹⁹) / (6.63 × 10⁻³⁴) = 6.15 × 10¹⁴ Hz. Using only −0.85 eV or forgetting the eV-to-J conversion leads to the distractors.",
        hints: [
          "First find the positive energy gap ΔE = E_upper − E_lower in eV.",
          "Convert ΔE into joules (× 1.60 × 10⁻¹⁹), then divide by h = 6.63 × 10⁻³⁴ J s.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q04",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Explain",
        question:
          "White light passes through a cool, low-pressure hydrogen gas, producing dark absorption lines against a continuous spectrum. Why do these lines appear dark to a viewer along the beam?",
        options: [
          "Absorbed photons are permanently converted into nuclear binding energy",
          "Excited electrons remain stuck in upper energy levels indefinitely",
          "Hydrogen atoms refract those specific wavelengths through 90 degrees",
          "Absorbed photons are re-emitted randomly in all directions rather than along the beam",
        ],
        answerIndex: 3,
        explanation:
          "Hydrogen atoms absorb photons whose energy exactly matches an upward transition along the incident beam. When the excited electrons de-excite shortly afterward, photons are re-emitted isotropically in all directions, so only a tiny fraction continues along the original line of sight, leaving dark lines.",
        hints: [
          "Do excited electrons stay excited forever, or do they quickly drop back down?",
          "In which direction are spontaneously re-emitted photons sent compared with the incoming beam?",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q05",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Deduce",
        question:
          "A simplified atom has four bound energy levels at −10.0 eV, −6.0 eV, −3.0 eV, and −1.0 eV. Which photon energy CANNOT be emitted by a transition between two of these levels?",
        options: [
          "3.0 eV",
          "6.0 eV",
          "7.0 eV",
          "9.0 eV",
        ],
        answerIndex: 1,
        explanation:
          "The possible energy differences between pairs of levels are: 10−6 = 4.0 eV, 10−3 = 7.0 eV, 10−1 = 9.0 eV, 6−3 = 3.0 eV, 6−1 = 5.0 eV, and 3−1 = 2.0 eV. Although −6.0 eV is the energy of one level itself, no pair of levels is separated by 6.0 eV.",
        hints: [
          "Photon energies equal DIFFERENCES between pairs of levels, not the energies of single levels.",
          "List all 6 differences between {−10, −6, −3, −1} eV and check which value is missing.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q06",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Determine",
        question:
          "Atomic transition X emits a photon of energy 6.0 eV, while transition Y emits a photon of energy 2.0 eV. What is the wavelength ratio {{λ_X / λ_Y}}?",
        options: [
          "1 : 3",
          "3 : 1",
          "1 : 9",
          "9 : 1",
        ],
        answerIndex: 0,
        explanation:
          "Since E = hc/λ, wavelength is inversely proportional to photon energy (λ ∝ 1/E). Therefore λ_X / λ_Y = E_Y / E_X = 2.0 / 6.0 = 1/3 (ratio 1 : 3). Taking 3 : 1 confuses direct and inverse proportionality.",
        hints: [
          "Recall how photon energy E relates to wavelength λ: {{E = hc/λ}}.",
          "Does a higher-energy photon have a shorter or longer wavelength?",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q07",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Determine",
        question:
          "Electrons in a large sample of hydrogen atoms are excited up to the *n* = 5 energy level. How many distinct emission spectral lines can be produced as they de-excite to *n* = 1?",
        options: [
          "4 distinct lines",
          "5 distinct lines",
          "8 distinct lines",
          "10 distinct lines",
        ],
        answerIndex: 3,
        explanation:
          "Every distinct pair of levels among n = 1, 2, 3, 4, 5 gives one unique downward transition. The total number of pairs is N(N − 1)/2 = 5 × 4 / 2 = 10 distinct spectral lines (not 4, which only counts direct single-step cascades).",
        hints: [
          "An electron at n = 5 can drop directly to n = 1, or cascade through intermediate levels like 5→3→2→1.",
          "Count all pairs of levels from {5, 4, 3, 2, 1} using N(N − 1)/2.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q08",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Calculate",
        question:
          "What is the energy, in joules, of a green photon of wavelength 500 nm? (Take {{h = 6.63 * 10^(-34)}} J s and {{c = 3.00 * 10^8}} m s⁻¹.)",
        options: [
          "{{1.99 * 10^(-19)}} J",
          "{{2.49 * 10^(-19)}} J",
          "{{3.98 * 10^(-19)}} J",
          "{{7.96 * 10^(-19)}} J",
        ],
        answerIndex: 2,
        explanation:
          "Using E = hc/λ with λ = 500 × 10⁻⁹ m = 5.00 × 10⁻⁷ m: E = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (5.00 × 10⁻⁷) = 1.989 × 10⁻²⁵ / 5.00 × 10⁻⁷ = 3.98 × 10⁻¹⁹ J.",
        hints: [
          "Convert 500 nm to metres: 500 × 10⁻⁹ m.",
          "Substitute into {{E = hc/λ}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Deduce",
        question:
          "A head-on α-particle of kinetic energy {{E_k}} has a distance of closest approach *d* to a stationary nucleus of charge +*Ze*. If the α-particle's kinetic energy is doubled to {{2 E_k}} and it is aimed at a nucleus of charge +2*Ze*, what is the new distance of closest approach?",
        options: [
          "1.0 d",
          "0.5 d",
          "2.0 d",
          "4.0 d",
        ],
        answerIndex: 0,
        explanation:
          "From conservation of energy, E_k = k(2e)(Ze)/d, so d = 2kZe² / E_k ∝ Z / E_k. Doubling both Z (numerator) and E_k (denominator) leaves the distance of closest approach unchanged at d.",
        hints: [
          "Write the closest-approach equation from {{E_k = k q_1 q_2 / d}} and rearrange for d.",
          "Check how d scales with both target proton number Z and initial kinetic energy E_k.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Explain",
        question:
          "When very high-energy α-particles are scattered off a light nucleus, the measured intensity at large scattering angles falls well below Rutherford's prediction. What causes this deviation?",
        options: [
          "The gold foil melts and loses its crystalline lattice arrangement",
          "Orbital electrons begin repelling the α-particles strongly at high speeds",
          "The α-particles come close enough to feel the attractive strong nuclear force",
          "Relativistic length contraction causes the α-particles to miss the nucleus",
        ],
        answerIndex: 2,
        explanation:
          "Rutherford's formula assumes pure electrostatic Coulomb repulsion. When high-energy α-particles approach within ~10⁻¹⁵ m of the nuclear surface, the attractive short-range strong nuclear force acts alongside Coulomb repulsion (and nuclear absorption can occur), causing deviations from Rutherford scattering.",
        hints: [
          "Which force operates only at femtometre separations inside or right at the nuclear boundary?",
          "Rutherford's scattering formula only includes electrostatic repulsion.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Calculate",
        question:
          "Using {{R = R_0 A^(1/3)}}, what is the ratio of the nuclear radius of lead-216 (*A* = 216) to the nuclear radius of aluminium-27 (*A* = 27)?",
        options: [
          "8.0",
          "4.0",
          "2.8",
          "2.0",
        ],
        answerIndex: 3,
        explanation:
          "Taking the ratio cancels R₀: R_Pb / R_Al = (216 / 27)^(1/3) = 8^(1/3) = 2.0. Getting 8.0 forgets the cube root, while 2.8 mistakenly takes the square root.",
        hints: [
          "Divide the two nuclear radius equations so R₀ cancels out.",
          "Compute {{216/27}} first, then take the cube root.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Compare",
        question:
          "How does the nuclear density of uranium-238 (*A* = 238) compare with the nuclear density of carbon-12 (*A* = 12)?",
        options: [
          "Uranium-238 is nearly 20 times denser because it contains 20 times more nucleons",
          "Both nuclei have approximately the same density because nuclear volume scales with A",
          "Carbon-12 is denser because its protons experience weaker electrostatic repulsion",
          "Uranium-238 is about 2.7 times denser because its radius increases as A^(1/3)",
        ],
        answerIndex: 1,
        explanation:
          "Since R = R₀A^(1/3), nuclear volume V = (4/3)πR³ = (4/3)πR₀³A is proportional to A, and nuclear mass M ≈ Au is also proportional to A. Thus A cancels in ρ = M/V = 3u/(4πR₀³) ≈ 2.3 × 10¹⁷ kg m⁻³, giving nearly identical density for all nuclei.",
        hints: [
          "Write nuclear volume V = (4/3)πR³ in terms of A using {{R = R_0 A^(1/3)}}.",
          "Divide mass M ≈ Au by volume V and see what happens to A.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Calculate",
        question:
          "High-energy electrons of de Broglie wavelength 2.0 fm diffract off a target nucleus of diameter 8.0 fm. Using {{sin θ ≈ λ/D}}, what is {{sin θ}} for the first diffraction minimum?",
        options: [
          "0.125",
          "0.50",
          "4.0",
          "0.25",
        ],
        answerIndex: 3,
        explanation:
          "Substituting directly into sin θ ≈ λ / D gives sin θ = 2.0 fm / 8.0 fm = 0.25. (Notice 0.50 uses radius instead of diameter, and 4.0 inverts the fraction.)",
        hints: [
          "Check whether the formula uses nuclear diameter D or radius R.",
          "Divide λ = 2.0 fm by D = 8.0 fm.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Determine",
        question:
          "According to the Bohr model of hydrogen, what are the energy *E* and orbital angular momentum *L* of an electron in the *n* = 3 stationary state?",
        options: [
          "E = −1.51 eV and L = 3h / (2π)",
          "E = −4.53 eV and L = 3h / (2π)",
          "E = −1.51 eV and L = 9h / (2π)",
          "E = −3.40 eV and L = h / (2π)",
        ],
        answerIndex: 0,
        explanation:
          "Hydrogen energy levels satisfy E_n = −13.6/n² eV, so E_3 = −13.6 / 9 = −1.51 eV. Bohr's angular momentum condition is L = nh/(2π), which for n = 3 gives L = 3h/(2π). Notice E scales with 1/n² whereas L scales linearly with n.",
        hints: [
          "Use {{E_n = -13.6/n^2}} eV — remember to square n in the denominator!",
          "Use {{L = nh/(2π)}} — here n is NOT squared.",
        ],
      },
      {
        id: "e1-atom-quantum-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Predict",
        question:
          "A hydrogen atom initially in the *n* = 2 state ({{E_2 = -3.40}} eV) is struck by a single photon of energy 5.00 eV. What is the outcome?",
        options: [
          "The photon passes through unabsorbed because 5.00 eV misses every bound level",
          "The electron jumps to n = 5 and emits a 1.60 eV infrared photon immediately",
          "The atom is ionized and the freed electron leaves with 1.60 eV kinetic energy",
          "The atom is ionized and the freed electron leaves with 8.40 eV kinetic energy",
        ],
        answerIndex: 2,
        explanation:
          "Above E = 0 (n = ∞), electron energies form a continuum rather than discrete levels. Since the photon energy (5.00 eV) exceeds the 3.40 eV needed to ionize the atom from n = 2, the photon IS absorbed, freeing the electron with excess kinetic energy E_k = 5.00 − 3.40 = 1.60 eV.",
        hints: [
          "How much energy is needed to raise an electron from n = 2 (−3.40 eV) to ionization (0 eV)?",
          "Are free electron energies above E = 0 discrete or continuous?",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: Photoelectric Effect & Compton Scattering (HL)
  // answerIndex spread: [2,0,3,1,2,3,0,1,3,0,1,2,1,2,0] -> 0:4, 1:4, 2:4, 3:3
  // ===========================================================================
  {
    id: "e1-atom-quantum-m2",
    title: "Paper 1A · Photoelectric Effect & Compton Scattering",
    level: "HL",
    questions: [
      {
        id: "e1-atom-quantum-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Define",
        question:
          "In the photoelectric effect, what is the physical meaning of the work function Φ of a metal?",
        options: [
          "The kinetic energy of the fastest electron emitted by ultraviolet light",
          "The energy required to completely ionize an isolated metal atom in a gas",
          "The minimum energy required to liberate an electron from the metal surface",
          "The electric potential difference needed to stop all emitted photoelectrons",
        ],
        answerIndex: 2,
        explanation:
          "The work function Φ is defined as the minimum energy needed to remove a delocalized electron from the surface of a solid metal into vacuum (equal to h f₀). Stopping potential is Φ subtracted from hf then divided by e.",
        hints: [
          "Think about the threshold condition where an electron just barely escapes with zero kinetic energy.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Predict",
        question:
          "Monochromatic light of frequency above the threshold frequency strikes a clean metal cathode. If the light intensity is doubled while its frequency stays constant, what happens to the stopping potential {{V_s}} and the maximum photocurrent *I*?",
        options: [
          "V_s remains unchanged and I doubles",
          "V_s doubles and I remains unchanged",
          "Both V_s and I double",
          "V_s increases by √2 and I doubles",
        ],
        answerIndex: 0,
        explanation:
          "At constant frequency, each photon still carries the same energy hf, so E_k,max = hf − Φ and V_s = E_k,max/e remain unchanged. Doubling intensity doubles the number of photons arriving per second, which doubles the rate of electron emission and therefore doubles the photocurrent I.",
        hints: [
          "Remember: frequency controls individual photon energy; intensity controls photon arrival rate.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Explain",
        question:
          "When strictly monochromatic ultraviolet light strikes a sodium surface, emitted photoelectrons are detected with kinetic energies ranging from 0 up to {{E_(k,max)}}. Why do they not all have the same kinetic energy?",
        options: [
          "Monochromatic photons actually carry a continuous spread of energies",
          "Individual electrons can absorb two or three photons simultaneously",
          "The metal's work function oscillates randomly as light strikes it",
          "Electrons below the surface lose extra energy in collisions while escaping",
        ],
        answerIndex: 3,
        explanation:
          "Every incident photon has identical energy hf. Surface electrons need only the minimum work function Φ to escape and leave with E_k,max = hf − Φ, whereas electrons originating deeper inside the metal suffer inelastic collisions and lose additional energy before reaching the surface.",
        hints: [
          "Are all conduction electrons sitting right on the top atomic layer of the metal?",
          "What happens to an electron's energy as it travels upward through the metal lattice?",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Calculate",
        question:
          "Photons of energy 5.10 eV illuminate a metal plate whose work function is 2.30 eV. What is the stopping potential {{V_s}}?",
        options: [
          "2.30 V",
          "2.80 V",
          "5.10 V",
          "7.40 V",
        ],
        answerIndex: 1,
        explanation:
          "By Einstein's equation, E_k,max = hf − Φ = 5.10 − 2.30 = 2.80 eV. Since eV_s = E_k,max, an energy of 2.80 eV corresponds directly to a stopping potential of 2.80 V. Adding Φ instead of subtracting gives the 7.40 V distractor.",
        hints: [
          "Apply {{E_(k,max) = hf - Φ}} directly in electronvolts.",
          "Recall that 1 eV divided by charge e is simply 1 volt.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Calculate",
        question:
          "A metal exhibits a photoelectric threshold frequency of {{6.00 * 10^(14)}} Hz. What is its work function Φ in joules? (Take {{h = 6.63 * 10^(-34)}} J s.)",
        options: [
          "{{1.11 * 10^(-19)}} J",
          "{{2.49 * 10^(-19)}} J",
          "{{3.98 * 10^(-19)}} J",
          "{{6.63 * 10^(-19)}} J",
        ],
        answerIndex: 2,
        explanation:
          "At threshold frequency f₀, E_k,max = 0, so Φ = h f₀ = (6.63 × 10⁻³⁴) × (6.00 × 10¹⁴) = 3.98 × 10⁻¹⁹ J.",
        hints: [
          "Set {{E_(k,max) = 0}} in {{E_(k,max) = hf - Φ}}.",
          "Multiply Planck's constant h by {{f_0 = 6.00 * 10^(14)}} Hz.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Compare",
        question:
          "Stopping potential {{V_s}} is plotted against incident frequency *f* for two metals X and Y, where metal Y has a larger work function than metal X ({{Φ_Y > Φ_X}}). How do the two straight-line graphs compare?",
        options: [
          "Metal Y has a steeper gradient and passes through the same x-intercept",
          "Metal Y has a shallower gradient and a smaller threshold frequency",
          "Both lines share the same y-intercept while metal Y has a steeper gradient",
          "Both lines are parallel with gradient h/e, and metal Y sits to the right of X",
        ],
        answerIndex: 3,
        explanation:
          "From V_s = (h/e)f − Φ/e, the gradient h/e is a universal ratio of fundamental constants, so both metals produce parallel lines. Because Φ_Y > Φ_X, metal Y has a higher threshold frequency f₀ = Φ/h (shifted right) and a more negative y-intercept −Φ/e.",
        hints: [
          "Write {{V_s}} in straight-line form {{y = mx + c}}: {{V_s = (h/e)f - Φ/e}}.",
          "Does the gradient {{h/e}} depend on the choice of metal?",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Identify",
        question:
          "If the maximum kinetic energy {{E_(k,max)}} (in joules) of emitted photoelectrons is plotted against light frequency *f* (in Hz), what do the gradient and vertical intercept represent?",
        options: [
          "Gradient is h and vertical intercept is −Φ",
          "Gradient is h/e and vertical intercept is −Φ/e",
          "Gradient is Φ and vertical intercept is −h",
          "Gradient is e/h and vertical intercept is −Φ",
        ],
        answerIndex: 0,
        explanation:
          "Einstein's equation E_k,max = hf − Φ is already in y = mx + c form when y = E_k,max (in joules) and x = f (in Hz), so the gradient is h and the vertical intercept is −Φ. The h/e gradient applies only when V_s (in volts) is plotted on the vertical axis.",
        hints: [
          "Check which variable is on the vertical axis: {{E_(k,max)}} (joules) or {{V_s}} (volts)?",
          "Match {{E_(k,max) = h f - Φ}} directly to {{y = m x + c}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Identify",
        question:
          "Potassium has a photoelectric threshold wavelength of 540 nm. Which light source will eject photoelectrons from a clean potassium plate?",
        options: [
          "Very intense red laser light of wavelength 650 nm",
          "Very dim blue light of wavelength 450 nm",
          "High-power infrared radiation of wavelength 900 nm",
          "Bright yellow sodium light of wavelength 590 nm",
        ],
        answerIndex: 1,
        explanation:
          "Photoelectric emission requires f ≥ f₀, which means λ ≤ λ₀ (shorter wavelength = higher photon energy). Only 450 nm blue light has λ ≤ 540 nm, and it ejects electrons immediately even at very low intensity.",
        hints: [
          "Remember that higher frequency corresponds to a SHORTER wavelength.",
          "Compare each wavelength against the maximum (threshold) wavelength of 540 nm.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Deduce",
        question:
          "Light of frequency *f* ejects photoelectrons from a metal (with work function Φ > 0) with maximum kinetic energy *E*. If the incident frequency is doubled to 2*f* on the same metal, what is the new maximum kinetic energy?",
        options: [
          "Equal to E",
          "Between E and 2E",
          "Exactly equal to 2E",
          "Greater than 2E",
        ],
        answerIndex: 3,
        explanation:
          "Initially E = hf − Φ, so hf = E + Φ. Doubling the frequency gives E' = h(2f) − Φ = 2(E + Φ) − Φ = 2E + Φ. Since Φ > 0, the new maximum kinetic energy is strictly greater than 2E! Students often assume direct proportionality (2E) and forget the negative intercept −Φ.",
        hints: [
          "Write {{E = hf - Φ}} and express {{hf}} in terms of E and Φ.",
          "Substitute {{2f}} into {{E' = 2hf - Φ}} and compare with {{2E}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Calculate",
        question:
          "What is the linear momentum of an X-ray photon of wavelength {{3.32 * 10^(-10)}} m? (Take {{h = 6.63 * 10^(-34)}} J s.)",
        options: [
          "{{2.00 * 10^(-24)}} kg m s⁻¹",
          "{{6.00 * 10^(-16)}} kg m s⁻¹",
          "{{2.20 * 10^(-43)}} kg m s⁻¹",
          "{{5.00 * 10^(23)}} kg m s⁻¹",
        ],
        answerIndex: 0,
        explanation:
          "Photon momentum is p = h / λ = (6.63 × 10⁻³⁴) / (3.32 × 10⁻¹⁰) = 2.00 × 10⁻²⁴ kg m s⁻¹. Multiplying h by λ instead of dividing produces 2.20 × 10⁻⁴³.",
        hints: [
          "Use the photon momentum formula {{p = h/λ}}.",
          "Check the powers of ten: {{10^(-34) / 10^(-10) = 10^(-24)}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Calculate",
        question:
          "An X-ray photon undergoes Compton scattering straight backward (θ = 180°) off a stationary free electron. Using {{h/(m_e c) = 2.43 * 10^(-12)}} m, what is the wavelength shift Δλ?",
        options: [
          "0 m",
          "{{4.86 * 10^(-12)}} m",
          "{{2.43 * 10^(-12)}} m",
          "{{9.72 * 10^(-12)}} m",
        ],
        answerIndex: 1,
        explanation:
          "From Δλ = (h / m_e c)(1 − cos θ), at θ = 180° we have cos 180° = −1, so 1 − cos 180° = 2. Thus Δλ = 2 × 2.43 × 10⁻¹² = 4.86 × 10⁻¹² m (the maximum possible Compton shift).",
        hints: [
          "Recall that cos 180° = −1 (not 0 or +1).",
          "Evaluate {{1 - (-1)}} and multiply by the Compton wavelength {{2.43 * 10^(-12)}} m.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Predict",
        question:
          "In a Compton scattering experiment at a fixed scattering angle of 90°, the incident X-ray wavelength {{λ_i}} is doubled. How does the wavelength shift {{Δλ = λ_f - λ_i}} change?",
        options: [
          "It doubles because the shift is proportional to the incident wavelength",
          "It halves because lower-energy photons transfer less momentum",
          "It remains unchanged because Δλ depends only on the scattering angle θ",
          "It falls to one quarter because photon energy scales inversely with λ",
        ],
        answerIndex: 2,
        explanation:
          "In Δλ = (h / m_e c)(1 − cos θ), the incident wavelength λ_i does not appear at all! Therefore Δλ depends strictly on θ and stays constant at 2.43 pm for θ = 90° (only the fractional shift Δλ / λ_i halves).",
        hints: [
          "Look closely at every symbol inside {{Δλ = (h/(m_e c))(1 - cos θ)}}.",
          "Does {{λ_i}} appear anywhere on the right-hand side?",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Identify",
        question:
          "During Compton scattering off a stationary free electron, at which photon scattering angle θ does the recoiling electron acquire the MAXIMUM kinetic energy?",
        options: [
          "0° (undeflected forward scattering)",
          "180° (head-on backward scattering)",
          "90° (perpendicular scattering)",
          "45° (intermediate oblique scattering)",
        ],
        answerIndex: 1,
        explanation:
          "By conservation of energy, the electron's kinetic energy equals the photon's energy loss (hc/λ_i − hc/λ_f). Energy loss is maximized when Δλ = (h/m_e c)(1 − cos θ) is largest, which happens when cos θ = −1, i.e., θ = 180°.",
        hints: [
          "Where does the recoiling electron's kinetic energy come from?",
          "Which angle θ maximizes {{1 - cos θ}} and therefore maximizes the photon's energy loss?",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q14",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Calculate",
        question:
          "A monochromatic laser emits {{5.0 * 10^(18)}} photons per second, each of frequency {{6.0 * 10^(14)}} Hz. What is the total radiant power of the laser beam? (Take {{h = 6.63 * 10^(-34)}} J s.)",
        options: [
          "0.50 W",
          "1.0 W",
          "2.0 W",
          "4.0 W",
        ],
        answerIndex: 2,
        explanation:
          "Each photon carries energy E = hf = 6.63 × 10⁻³⁴ × 6.0 × 10¹⁴ = 3.98 × 10⁻¹⁹ J. Total power is P = (number of photons per second) × E = (5.0 × 10¹⁸) × (3.98 × 10⁻¹⁹) = 1.99 W ≈ 2.0 W.",
        hints: [
          "First find the energy of one single photon using {{E = hf}}.",
          "Multiply single-photon energy by the number of photons emitted per second.",
        ],
      },
      {
        id: "e1-atom-quantum-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "photoelectric-compton-hl",
        commandTerm: "Predict",
        question:
          "Monochromatic light illuminates a metal plate above its threshold frequency. The wavelength λ is decreased while the total incident light **power (intensity)** is kept strictly constant. Assuming the same fraction of photons eject electrons, what happens to the stopping potential {{V_s}} and the maximum photocurrent?",
        options: [
          "V_s increases and the maximum photocurrent decreases",
          "V_s increases and the maximum photocurrent stays constant",
          "V_s decreases and the maximum photocurrent increases",
          "V_s stays constant and the maximum photocurrent decreases",
        ],
        answerIndex: 0,
        explanation:
          "Decreasing λ raises frequency f and photon energy hf, so E_k,max and V_s increase. However, since total power P = (N/t)·hf is constant and each photon now carries MORE energy, fewer photons arrive per second (N/t decreases) — causing the maximum photocurrent to decrease!",
        hints: [
          "First decide how shorter wavelength λ changes single-photon energy {{hc/λ}} and thus {{V_s}}.",
          "Next use {{P = (N/t) * (hc/λ)}} at CONSTANT power P: what happens to photon arrival rate N/t?",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: Matter Waves, Wave-Particle Duality & Mixed Synthesis
  // answerIndex spread: [1,3,0,2,3,1,2,0,1,3,0,2,0,1,3] -> 0:4, 1:4, 2:3, 3:4
  // ===========================================================================
  {
    id: "e1-atom-quantum-m3",
    title: "Paper 1A · Matter Waves, Duality & Mixed Synthesis",
    level: "HL",
    questions: [
      {
        id: "e1-atom-quantum-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Calculate",
        question:
          "An electron moves with linear momentum {{3.32 * 10^(-24)}} kg m s⁻¹. What is its de Broglie wavelength? (Take {{h = 6.63 * 10^(-34)}} J s.)",
        options: [
          "{{5.00 * 10^(-11)}} m",
          "{{2.00 * 10^(-10)}} m",
          "{{2.20 * 10^(-57)}} m",
          "{{5.00 * 10^9}} m",
        ],
        answerIndex: 1,
        explanation:
          "By de Broglie's equation, λ = h / p = (6.63 × 10⁻³⁴) / (3.32 × 10⁻²⁴) = 2.00 × 10⁻¹⁰ m (0.200 nm). Dividing p by h gives 5.00 × 10⁹ m.",
        hints: [
          "Apply {{λ = h/p}} and check the exponent {{10^(-34) / 10^(-24) = 10^(-10)}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Predict",
        question:
          "In a thin-graphite electron diffraction tube, the accelerating potential difference is raised from 1.5 kV to 6.0 kV. How do the electron de Broglie wavelength λ and the diameter of the diffraction rings on the screen change?",
        options: [
          "λ doubles and the diffraction rings expand",
          "λ halves and the diffraction rings expand",
          "λ quarters and the diffraction rings contract",
          "λ halves and the diffraction rings contract",
        ],
        answerIndex: 3,
        explanation:
          "Since λ = h / √(2meV), quadrupling V multiplies λ by 1/√4 = 1/2 (λ halves). Because diffraction angle obeys sin θ ∝ λ/d, halving λ decreases θ so the concentric rings contract.",
        hints: [
          "How does {{λ = h/sqrt(2meV)}} scale when V is multiplied by 4?",
          "Does a shorter wavelength diffract through a larger or smaller angle?",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Compare",
        question:
          "A proton (mass {{m_p}}) and an electron (mass {{m_e}}) have the exact same non-relativistic kinetic energy {{E_k}}. How do their de Broglie wavelengths compare?",
        options: [
          "The electron has a longer wavelength by a factor of {{sqrt(m_p / m_e)}}",
          "The proton has a longer wavelength by a factor of {{sqrt(m_p / m_e)}}",
          "Both particles have equal wavelengths because their kinetic energies match",
          "The electron has a longer wavelength by a factor of {{m_p / m_e}}",
        ],
        answerIndex: 0,
        explanation:
          "Since λ = h / √(2mE_k), at identical kinetic energy λ ∝ 1/√m. The lighter electron has smaller momentum and therefore a LONGER wavelength than the proton by a factor of √(m_p / m_e) ≈ 42.9. The factor m_p / m_e applies only when speeds (not kinetic energies) are equal.",
        hints: [
          "Express momentum p in terms of mass m and kinetic energy {{E_k}}: {{p = sqrt(2m E_k)}}.",
          "Substitute into {{λ = h/p}} and take the ratio {{λ_e / λ_p}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Calculate",
        question:
          "Particle 1 (charge *q*, mass *m*) and Particle 2 (charge 2*q*, mass 8*m*) are both accelerated from rest through the same potential difference *V*. What is the ratio {{λ_2 / λ_1}} of their de Broglie wavelengths?",
        options: [
          "{{1/16}}",
          "{{1/2}}",
          "{{1/4}}",
          "4",
        ],
        answerIndex: 2,
        explanation:
          "From λ = h / √(2mqV), at fixed V we have λ ∝ 1/√(mq). Thus λ_2 / λ_1 = √(mq / (8m · 2q)) = √(1/16) = 1/4.",
        hints: [
          "Write {{λ = h/sqrt(2 m q V)}} for both particles.",
          "Take the ratio {{λ_2 / λ_1 = sqrt((m_1 q_1) / (m_2 q_2))}}.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Explain",
        question:
          "Why is diffraction readily observed for electrons passing through graphite crystal, yet completely unobservable for a moving tennis ball passing through a doorway?",
        options: [
          "Only electrically charged particles possess a de Broglie matter wave",
          "Macroscopic objects travel too slowly for relativistic wave effects",
          "A tennis ball's wavelength is far larger than the width of a doorway",
          "A tennis ball's wavelength is enormously smaller than the doorway width",
        ],
        answerIndex: 3,
        explanation:
          "Observable diffraction requires λ to be comparable to the aperture/spacing d. Because a tennis ball has huge momentum p = mv, its de Broglie wavelength λ = h/p (~10⁻³⁴ m) is utterly minuscule compared with a ~1 m doorway, making diffraction angles zero.",
        hints: [
          "Estimate the order of magnitude of {{λ = h/(mv)}} for a 0.06 kg ball at 10 m s⁻¹.",
          "Compare that wavelength with a 1 m doorway.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Identify",
        question:
          "Which pair of experimental observations provides direct evidence for the **wave nature of matter** and the **particle nature of light**, respectively?",
        options: [
          "Compton scattering and Young's double-slit fringes",
          "Electron diffraction and the photoelectric effect",
          "The photoelectric effect and X-ray diffraction",
          "Atomic emission spectra and single-slit light diffraction",
        ],
        answerIndex: 1,
        explanation:
          "Electron diffraction through crystals demonstrates wave interference of matter particles (electrons), while the photoelectric effect (and Compton scattering) demonstrates the discrete particle/photon nature of electromagnetic radiation.",
        hints: [
          "Match 'wave nature of matter' to an interference/diffraction experiment using electrons.",
          "Match 'particle nature of light' to an experiment where light transfers energy/momentum in discrete packets.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Determine",
        question:
          "According to de Broglie's standing-wave interpretation of the Bohr atom, how many complete electron de Broglie wavelengths fit around the circumference of the *n* = 3 stationary orbit of hydrogen?",
        options: [
          "1 wavelength",
          "2 wavelengths",
          "3 wavelengths",
          "9 wavelengths",
        ],
        answerIndex: 2,
        explanation:
          "The standing-wave condition 2πr = nλ requires exactly n complete de Broglie wavelengths around the nth orbit so the electron wave interferes constructively with itself. For n = 3, exactly 3 wavelengths fit.",
        hints: [
          "Use the circular standing-wave condition {{2π r = n λ}}.",
          "Substitute n = 3 directly (do not square n here).",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Describe",
        question:
          "A beam of electrons is dimmed so that only **one electron at a time** passes through a double slit onto a sensitive detector screen. What pattern is recorded?",
        options: [
          "Individual localized dots arrive one by one and build up an interference fringe pattern",
          "Two sharp vertical bands appear directly behind the slits with zero interference",
          "Each single electron smears faintly across the entire screen as a dim wave",
          "A uniform random scatter of dots appears because one electron cannot interfere",
        ],
        answerIndex: 0,
        explanation:
          "Single-electron double-slit experiments showcase wave–particle duality directly: each electron is detected at one localized point (particle), yet its arrival probability is governed by wave superposition through both slits, so thousands of dots build up bright and dark interference fringes.",
        hints: [
          "Each electron arrives as a single click/dot — does that eliminate wave interference over many trials?",
          "Consider both single detection events and the accumulated pattern after many electrons.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q09",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Describe",
        question:
          "A cool, low-pressure vapour of sodium sits between a bright white-light bulb and a diffraction-grating spectroscope. What does the observer see?",
        options: [
          "Two bright yellow lines on a completely black background",
          "A continuous rainbow spectrum crossed by dark lines at sodium's wavelengths",
          "A continuous rainbow spectrum shifted uniformly toward the red end",
          "Dark lines at every wavelength except sodium's yellow doublet",
        ],
        answerIndex: 1,
        explanation:
          "A cool gas in front of a continuous white-light source absorbs photons matching its own energy-level transitions, producing a continuous rainbow crossed by dark absorption lines at sodium's exact characteristic wavelengths.",
        hints: [
          "Is the gas hot and glowing on its own (emission), or cool and placed in front of white light (absorption)?",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q10",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Identify",
        question:
          "Which electron transition in hydrogen emits a photon with the **shortest wavelength**?",
        options: [
          "n = 4 to n = 3",
          "n = 3 to n = 2",
          "n = 6 to n = 2",
          "n = 2 to n = 1",
        ],
        answerIndex: 3,
        explanation:
          "Shortest wavelength corresponds to the LARGEST energy drop ΔE. Because energy levels converge sharply upward (E_n = −13.6/n² eV), n = 2 → 1 releases 10.2 eV (UV Lyman-α), far larger than 6 → 2 (3.02 eV), 3 → 2 (1.89 eV), or 4 → 3 (0.66 eV).",
        hints: [
          "Recall {{λ = hc/ΔE}}: does shortest wavelength mean largest or smallest ΔE?",
          "Remember that the gap between n = 1 (−13.6 eV) and n = 2 (−3.40 eV) is huge compared to all upper gaps.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Calculate",
        question:
          "An electron is accelerated from rest through a potential difference of 100 V. What is its de Broglie wavelength? ({{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C.)",
        options: [
          "{{1.23 * 10^(-10)}} m",
          "{{1.23 * 10^(-8)}} m",
          "{{2.46 * 10^(-11)}} m",
          "{{4.14 * 10^(-15)}} m",
        ],
        answerIndex: 0,
        explanation:
          "Kinetic energy E_k = eV = 1.60 × 10⁻¹⁷ J. Momentum p = √(2 m_e E_k) = √(2 × 9.11 × 10⁻³¹ × 1.60 × 10⁻¹⁷) = 5.40 × 10⁻²⁴ kg m s⁻¹. Hence λ = h/p = (6.63 × 10⁻³⁴) / (5.40 × 10⁻²⁴) = 1.23 × 10⁻¹⁰ m (0.123 nm).",
        hints: [
          "Use {{λ = h / sqrt(2 m_e e V)}}.",
          "Calculate {{2 * 9.11 * 10^(-31) * 1.60 * 10^(-19) * 100}} first, then take its square root.",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        guideRef: "nuclear-radius-bohr-hl",
        commandTerm: "Identify",
        question:
          "Why does high-energy electron diffraction provide a cleaner measurement of nuclear diameter than high-energy α-particle scattering?",
        options: [
          "Electrons carry more kinetic energy per unit charge than α-particles",
          "Electrons are positively charged and never penetrate atomic shells",
          "Electrons are leptons and do not experience the strong nuclear force",
          "Electrons have larger rest mass so they experience zero recoil",
        ],
        answerIndex: 2,
        explanation:
          "Electrons are leptons that interact strictly via the electromagnetic force, avoiding the complex strong-nuclear-force distortion that affects α-particles (hadrons) at femtometre separations.",
        hints: [
          "Which fundamental force complicates high-energy α-particle scattering close to a nucleus?",
          "Do electrons feel the strong nuclear force?",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q13",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        guideRef: "atomic-spectra-levels",
        commandTerm: "Explain",
        question:
          "In the Rutherford scattering experiment, why was it essential to use extremely thin gold foil (only a few hundred atoms thick)?",
        options: [
          "So most α-particles undergo at most a single nuclear encounter without absorption",
          "So gold electrons could easily ionize the incoming α-particles",
          "So α-particles would reflect smoothly like light off a flat mirror",
          "So the foil could vibrate in resonance with the radioactive source",
        ],
        answerIndex: 0,
        explanation:
          "Using ultra-thin foil ensures that α-particles are not stopped inside the gold and that large-angle deflections result from single close encounters with one nucleus rather than cumulative multiple small deflections.",
        hints: [
          "What happens to α-particles when they pass through thick metal?",
          "Why does Rutherford's analysis require single-scattering events?",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Compare",
        question:
          "An electron and an X-ray photon have the exact same wavelength {{λ = 1.0 * 10^(-10)}} m. How do their linear momenta compare?",
        options: [
          "The photon has much greater momentum because it travels at speed c",
          "Both have the exact same linear momentum equal to h/λ",
          "The electron has much greater momentum because it has rest mass",
          "The photon has zero momentum because it has zero rest mass",
        ],
        answerIndex: 1,
        explanation:
          "Both photons (p = h/λ) and matter particles (λ = h/p ⇒ p = h/λ) obey the identical de Broglie momentum–wavelength relation! Equal wavelength therefore guarantees identical momentum (even though the photon's energy hc/λ is far greater than the electron's kinetic energy p²/2m).",
        hints: [
          "Write down the momentum formula in terms of wavelength λ for a photon AND for an electron.",
          "Notice that neither formula contains mass m or speed v once written in terms of λ!",
        ],
      },
      {
        id: "e1-atom-quantum-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        guideRef: "wave-particle-duality-hl",
        commandTerm: "Calculate",
        question:
          "Photons of energy 3.50 eV strike a metal with work function 2.00 eV. What is the **shortest** de Broglie wavelength among the emitted photoelectrons? ({{h = 6.63 * 10^(-34)}} J s, {{m_e = 9.11 * 10^(-31)}} kg, {{e = 1.60 * 10^(-19)}} C.)",
        options: [
          "0.66 nm",
          "0.83 nm",
          "1.50 nm",
          "1.00 nm",
        ],
        answerIndex: 3,
        explanation:
          "The shortest wavelength belongs to the fastest photoelectrons, which have E_k,max = 3.50 − 2.00 = 1.50 eV = 2.40 × 10⁻¹⁹ J. Their momentum is p_max = √(2 m_e E_k,max) = √(2 × 9.11 × 10⁻³¹ × 2.40 × 10⁻¹⁹) = 6.61 × 10⁻²⁵ kg m s⁻¹, giving λ_min = h / p_max = 6.63 × 10⁻³⁴ / 6.61 × 10⁻²⁵ = 1.00 × 10⁻⁹ m = 1.00 nm.",
        hints: [
          "Which photoelectrons have the SHORTEST de Broglie wavelength — the fastest or slowest?",
          "Find {{E_(k,max) = hf - Φ}}, convert to joules, then substitute into {{λ = h / sqrt(2 m_e E_(k,max))}}.",
        ],
      },
    ],
  },
];
