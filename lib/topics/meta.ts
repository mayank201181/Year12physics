// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Physics (SL & HL, First Assessment 2025).
// Pure data — safe to import from Node scripts.
//
// Covers all 5 IBO Themes (A–E) and all 24 official sub-topics (A.1–E.5).
// HL-only topics and HL-only sections are explicitly tagged level: "HL".
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Theme A: Space, Time & Motion",
  "Theme B: Particulate Nature of Matter",
  "Theme C: Wave Behaviour",
  "Theme D: Fields",
  "Theme E: Nuclear & Quantum Physics",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== THEME A: SPACE, TIME & MOTION =====================
  {
    id: "a1-mechanics",
    title: "A.1–A.3 Kinematics, Forces, Momentum & Energy",
    strand: "Theme A: Space, Time & Motion",
    icon: "🚀",
    level: "SL",
    curriculum: "IB Physics FA2025 A.1 Kinematics, A.2 Forces & momentum, A.3 Work, energy & power (SL & HL core)",
    sections: [
      {
        id: "kinematics-projectiles",
        heading: "A.1 Kinematics, Motion Graphs & Projectile Motion",
        level: "SL",
        covers: "Displacement, velocity, acceleration; uniform-acceleration SUVAT equations; gradients & areas of s–t, v–t, a–t graphs; 2D projectile motion (independent horizontal/vertical components) and qualitative effects of fluid resistance / terminal velocity.",
      },
      {
        id: "forces-newton-friction",
        heading: "A.2 Free-Body Diagrams, Newton's Laws & Friction",
        level: "SL",
        covers: "Translational equilibrium, Newton's 1st/2nd/3rd laws (action–reaction pairs on different bodies), static vs dynamic friction (F_f ≤ μ_s F_N, F_f = μ_d F_N), Hooke's law, buoyancy & viscous drag (Stokes' law).",
      },
      {
        id: "momentum-circular",
        heading: "A.2 Momentum, Impulse & Uniform Circular Motion",
        level: "SL",
        covers: "Linear momentum p = mv, Newton's 2nd law as F = Δp/Δt, impulse J = FΔt = Δp (area under F–t graph), conservation of momentum in 1D/2D collisions & explosions; angular speed ω = 2πf, centripetal acceleration a = v²/r = ω²r and centripetal force.",
      },
      {
        id: "work-energy-power",
        heading: "A.3 Work, Mechanical Energy, Power & Efficiency",
        level: "SL",
        covers: "Work W = Fs cos θ, kinetic energy E_k = ½mv² = p²/(2m), gravitational PE ΔE_p = mgΔh, elastic PE E_H = ½kΔx², conservation of mechanical energy, elastic vs inelastic collisions, power P = ΔW/Δt = Fv, efficiency η and Sankey diagrams.",
      },
    ],
  },
  {
    id: "a2-rotational-relativity",
    title: "A.4–A.5 Rigid Body Mechanics & Special Relativity",
    strand: "Theme A: Space, Time & Motion",
    icon: "🌀",
    level: "HL",
    curriculum: "IB Physics FA2025 A.4 Rigid body mechanics & A.5 Galilean and special relativity (HL Only)",
    sections: [
      {
        id: "torque-rotational-kinematics",
        heading: "A.4 Torque, Rotational Equilibrium & Rotational SUVAT",
        level: "HL",
        covers: "Angular displacement θ, angular velocity ω, angular acceleration α, rotational SUVAT equations, linear–angular links (s = rθ, v = rω, a = rα), torque τ = Fr sin θ, couple, and full static equilibrium (ΣF = 0 and Στ = 0).",
      },
      {
        id: "moment-inertia-angular-momentum",
        heading: "A.4 Moment of Inertia, Angular Momentum & Rolling Energy",
        level: "HL",
        covers: "Moment of inertia I = Σm_i r_i², Newton's 2nd law for rotation τ = Iα, angular momentum L = Iω, angular impulse ΔL = τΔt, conservation of angular momentum, rotational kinetic energy E_k = ½Iω² = L²/(2I), rolling without slipping down an incline.",
      },
      {
        id: "galilean-special-relativity",
        heading: "A.5 Galilean Transformations, Postulates & Time/Length Effects",
        level: "HL",
        covers: "Inertial reference frames, Galilean transformations vs Einstein's two postulates (invariance of physical laws and speed of light c), Lorentz factor γ = 1/√(1 − v²/c²), proper time Δt₀ & time dilation Δt = γΔt₀, proper length L₀ & length contraction L = L₀/γ, muon decay evidence.",
      },
      {
        id: "lorentz-spacetime-diagrams",
        heading: "A.5 Lorentz Transformations, Velocity Addition & Spacetime Diagrams",
        level: "HL",
        covers: "Lorentz transformations for x' and t', relativistic velocity addition u' = (u − v)/(1 − uv/c²), invariant spacetime interval (Δs)² = (cΔt)² − (Δx)², Minkowski spacetime diagrams (worldlines, tilted ct' and x' axes, relativity of simultaneity, light cones).",
      },
    ],
  },

  // ============== THEME B: PARTICULATE NATURE OF MATTER ====================
  {
    id: "b1-thermal-gases",
    title: "B.1–B.4 Thermal Transfers, Greenhouse, Gases & Thermodynamics",
    strand: "Theme B: Particulate Nature of Matter",
    icon: "🌡️",
    level: "SL",
    curriculum: "IB Physics FA2025 B.1 Thermal energy transfers, B.2 Greenhouse effect, B.3 Gas laws & B.4 Thermodynamics [HL]",
    sections: [
      {
        id: "thermal-transfers-radiation",
        heading: "B.1 Internal Energy, Specific/Latent Heat & Blackbody Radiation",
        level: "SL",
        covers: "Molecular kinetic & potential energy, Kelvin temperature scale (T/K = t/°C + 273.15), Q = mcΔT, Q = mL, conduction (ΔQ/Δt = kAΔT/Δx), convection, thermal radiation: Stefan–Boltzmann law L = σAT⁴, Wien's displacement law λ_max T = 2.90 × 10⁻³ m K, luminosity & apparent brightness b = L/(4πd²).",
      },
      {
        id: "greenhouse-effect",
        heading: "B.2 Albedo, Emissivity & The Greenhouse Effect",
        level: "SL",
        covers: "Solar constant S ≈ 1360 W m⁻², average incident intensity S/4, albedo α = P_scattered/P_incident, emissivity e, Earth's radiative energy balance, molecular resonance absorption of terrestrial infrared radiation by greenhouse gases (H₂O, CO₂, CH₄, N₂O) and enhanced greenhouse effect.",
      },
      {
        id: "gas-laws-kmt",
        heading: "B.3 Ideal Gas Laws & Kinetic Theory of Gases",
        level: "SL",
        covers: "Pressure P = F/A, moles n = N/N_A, equation of state PV = nRT = Nk_B T, Boyle/Charles/Gay-Lussac laws, assumptions of the kinetic model of an ideal gas, internal energy U = (3/2)nRT and average molecular kinetic energy Ē_k = (3/2)k_B T, real vs ideal gas behaviour.",
      },
      {
        id: "thermodynamics-hl",
        heading: "B.4 Laws of Thermodynamics, p–V Cycles, Carnot & Entropy",
        level: "HL",
        covers: "First law Q = ΔU + W, work done by gas W = PΔV (area under p–V curve), isothermal, isobaric, isovolumetric & adiabatic (PV^(5/3) = const) processes, cyclic heat engines, Carnot efficiency η_Carnot = 1 − T_C/T_H, entropy ΔS = ΔQ/T and S = k_B ln Ω, Second Law of Thermodynamics.",
      },
    ],
  },
  {
    id: "b2-circuits",
    title: "B.5 Current, Resistance, EMF & Electrical Circuits",
    strand: "Theme B: Particulate Nature of Matter",
    icon: "🔌",
    level: "SL",
    curriculum: "IB Physics FA2025 B.5 Current and circuits (SL & HL core)",
    sections: [
      {
        id: "current-pd-ohm",
        heading: "B.5 Current, Drift Velocity, Potential Difference & Resistance",
        level: "SL",
        covers: "Electric current I = Δq/Δt, potential difference V = W/q, resistance R = V/I, Ohm's law & ohmic vs non-ohmic I–V graphs (metallic conductor, filament lamp, semiconductor diode), resistivity R = ρL/A, electrical power P = IV = I²R = V²/R.",
      },
      {
        id: "series-parallel-kirchhoff",
        heading: "B.5 Kirchhoff's Laws, Series & Parallel Networks",
        level: "SL",
        covers: "Kirchhoff's junction rule (ΣI = 0, conservation of charge) and loop rule (ΣV = 0, conservation of energy), equivalent resistance in series (R_s = ΣR_i) and parallel (1/R_p = Σ1/R_i), ideal vs non-ideal ammeters and voltmeters.",
      },
      {
        id: "emf-internal-resistance",
        heading: "B.5 Cells, Electromotive Force (EMF) & Internal Resistance",
        level: "SL",
        covers: "Chemical cells (primary vs rechargeable), electromotive force ε as total energy per unit charge supplied by the source, internal resistance r, terminal potential difference V = ε − Ir, determining ε and r from V–I graph intercept and gradient, maximum power transfer.",
      },
      {
        id: "potential-dividers-sensors",
        heading: "B.5 Potential Dividers, Thermistors, LDRs & Circuit Diagnostics",
        level: "SL",
        covers: "Potential divider equation V_out = V_in R₂/(R₁ + R₂), potentiometer variable voltage output, NTC thermistors, light-dependent resistors (LDRs) and strain gauges in automated sensing circuits, power dissipation & short-circuit analysis.",
      },
    ],
  },

  // ====================== THEME C: WAVE BEHAVIOUR ==========================
  {
    id: "c1-shm-waves",
    title: "C.1–C.2 Simple Harmonic Motion & The Wave Model",
    strand: "Theme C: Wave Behaviour",
    icon: "〰️",
    level: "SL",
    curriculum: "IB Physics FA2025 C.1 Simple harmonic motion (SL + HL) & C.2 Wave model (SL & HL core)",
    sections: [
      {
        id: "shm-foundations",
        heading: "C.1 Defining Simple Harmonic Motion, Pendulums & Springs",
        level: "SL",
        covers: "Restoring force & defining equation a = −ω²x, amplitude x₀, period T, frequency f, angular frequency ω = 2π/T, time period of mass–spring T = 2π√(m/k) and simple pendulum T = 2π√(l/g), qualitative kinetic/potential energy exchange.",
      },
      {
        id: "shm-equations-hl",
        heading: "C.1 Quantitative SHM Equations, Phase Angle & Energy Graphs",
        level: "HL",
        covers: "Analytical SHM solutions x = x₀ sin(ωt + φ), v = ωx₀ cos(ωt + φ) = ±ω√(x₀² − x²), a = −ω²x₀ sin(ωt + φ), phase difference φ, exact total energy E_T = ½mω²x₀², E_p = ½mω²x² and E_k = ½mω²(x₀² − x²).",
      },
      {
        id: "wave-model-graphs",
        heading: "C.2 Transverse & Longitudinal Waves, Wave Equation & Graphs",
        level: "SL",
        covers: "Mechanical vs electromagnetic waves, transverse (crest/trough) vs longitudinal (compression/rarefaction), v = fλ, distinguishing displacement–distance (wavelength λ) and displacement–time (period T) graphs, wave speed on a string v = √(T/μ).",
      },
      {
        id: "em-spectrum-intensity",
        heading: "C.2 Electromagnetic Spectrum, Intensity & Amplitude",
        level: "SL",
        covers: "Regions and wavelengths of the electromagnetic spectrum travelling at c in vacuum, wave intensity I = P/(4πr²) (inverse-square law) and proportionality I ∝ A².",
      },
    ],
  },
  {
    id: "c2-wave-phenomena",
    title: "C.3–C.5 Wave Phenomena, Standing Waves & Doppler Effect",
    strand: "Theme C: Wave Behaviour",
    icon: "🌈",
    level: "SL",
    curriculum: "IB Physics FA2025 C.3 Wave phenomena (SL + HL), C.4 Standing waves & resonance, C.5 Doppler effect (SL + HL)",
    sections: [
      {
        id: "refraction-diffraction-double-slit",
        heading: "C.3 Reflection, Refraction, Diffraction & Double-Slit Interference",
        level: "SL",
        covers: "Wavefronts & rays, Snell's law n₁ sin θ₁ = n₂ sin θ₂ = v₂/v₁ (n = c/v), critical angle & total internal reflection, superposition, coherence, path difference (nλ constructive, (n+½)λ destructive), Young's double-slit fringe spacing s = λD/d.",
      },
      {
        id: "single-slit-grating-hl",
        heading: "C.3 Single-Slit Diffraction, Modulation & Diffraction Gratings",
        level: "HL",
        covers: "Single-slit diffraction first minimum θ ≈ λ/b (central maximum twice as wide, intensity distribution), modulation of double-slit interference by the single-slit diffraction envelope (missing orders), diffraction grating equation nλ = d sin θ, sharper maxima and spectral resolution.",
      },
      {
        id: "standing-waves-resonance",
        heading: "C.4 Standing Waves on Strings & Pipes, Damping & Resonance",
        level: "SL",
        covers: "Formation of standing waves from opposite-travelling waves (nodes, antinodes, phase, zero net energy transfer), harmonics on fixed strings, open–open pipes (all harmonics, λ_n = 2L/n) and open–closed pipes (odd harmonics only, λ_n = 4L/(2n−1)), light/critical/heavy damping and forced resonance.",
      },
      {
        id: "doppler-effect-sl-hl",
        heading: "C.5 Doppler Effect: Wavefronts, Redshift & Quantitative Equations",
        level: "HL",
        covers: "SL core: qualitative wavefront compression/stretching & astronomical EM Doppler shift Δf/f ≈ Δλ/λ ≈ v/c (cosmological redshift). HL extension: quantitative sound Doppler equations for moving source f' = f v/(v ∓ u_s) and moving observer f' = f (v ± u_o)/v.",
      },
    ],
  },

  // ========================== THEME D: FIELDS ==============================
  {
    id: "d1-fields-motion",
    title: "D.1–D.3 Gravitational, Electric & Magnetic Fields",
    strand: "Theme D: Fields",
    icon: "🧲",
    level: "SL",
    curriculum: "IB Physics FA2025 D.1 Gravitational fields (SL + HL), D.2 Electric & magnetic fields (SL + HL), D.3 Motion in EM fields",
    sections: [
      {
        id: "gravitational-fields-orbits",
        heading: "D.1 Newton's Gravitation, Field Strength & Kepler's Third Law",
        level: "SL",
        covers: "Newton's law of universal gravitation F = Gm₁m₂/r², gravitational field strength g = F/m = GM/r², radial vs uniform field lines, circular orbital speed v = √(GM/r) and derivation of Kepler's 3rd law T² = (4π²/GM) r³.",
      },
      {
        id: "gravitational-electric-potentials-hl",
        heading: "D.1–D.2 Gravitational & Electric Potential, Equipotentials & Escape Speed",
        level: "HL",
        covers: "Gravitational potential V_g = −GM/r, gravitational PE E_p = −GMm/r, orbital kinetic & total energy E_T = −GMm/(2r), escape velocity v_esc = √(2GM/r), electric potential V_e = kq/r, electric PE E_p = kq₁q₂/r, field–potential gradient g = −ΔV_g/Δr and E = −ΔV_e/Δr, equipotential surfaces perpendicular to field lines.",
      },
      {
        id: "electric-magnetic-fields",
        heading: "D.2 Coulomb's Law, Electric Field Lines & Magnetic Fields",
        level: "SL",
        covers: "Charge quantization & conservation, Coulomb's law F = kq₁q₂/r² (k = 1/(4πε₀)), electric field strength E = F/q = V/d (parallel plates), Millikan oil-drop concept, magnetic field patterns (bar magnet, straight wire right-hand grip rule, flat coil, solenoid).",
      },
      {
        id: "motion-em-fields",
        heading: "D.3 Motion of Charges & Currents in Electromagnetic Fields",
        level: "SL",
        covers: "Magnetic force on a moving charge F = qvB sin θ (circular cyclotron path r = mv/(qB), zero work done by B-field), crossed E & B velocity selector (v = E/B), force on a current-carrying wire F = BIL sin θ (Fleming's left-hand rule), force per unit length between parallel currents F/L = μ₀I₁I₂/(2πr).",
      },
    ],
  },
  {
    id: "d2-induction",
    title: "D.4 Electromagnetic Induction",
    strand: "Theme D: Fields",
    icon: "⚡",
    level: "HL",
    curriculum: "IB Physics FA2025 D.4 Electromagnetic induction (HL Only)",
    sections: [
      {
        id: "magnetic-flux-linkage",
        heading: "D.4 Magnetic Flux & Flux Linkage",
        level: "HL",
        covers: "Magnetic flux Φ = BA cos θ (angle θ between B and the area normal, unit weber Wb = T m²), magnetic flux linkage NΦ = NBA cos θ, visualising ways to change flux (changing B, area A, or orientation θ).",
      },
      {
        id: "faraday-lenz-laws",
        heading: "D.4 Faraday's Law & Lenz's Law",
        level: "HL",
        covers: "Faraday's law ε = −N ΔΦ/Δt, interpreting the minus sign via Lenz's law (induced current produces a magnetic field opposing the flux change) and proving Lenz's law is a direct consequence of conservation of energy; dropping a magnet through a coil / copper pipe.",
      },
      {
        id: "motional-emf",
        heading: "D.4 Motional EMF in Straight Conductors & Moving Loops",
        level: "HL",
        covers: "Deriving ε = BvL from both Faraday's law (swept area ΔA = LvΔt) and magnetic Lorentz force on conduction electrons (qE = qvB), induced current I = BvL/R, magnetic braking force F = B²L²v/R and mechanical-to-electrical power balance P = Fv = ε²/R.",
      },
      {
        id: "ac-generators-sinusoidal",
        heading: "D.4 Rotating-Coil AC Generators & Sinusoidal EMF Graphs",
        level: "HL",
        covers: "Flux linkage NΦ(t) = NBA cos(ωt) and induced EMF ε(t) = NBAω sin(ωt), 90° phase shift between flux and EMF, effect of doubling rotational frequency ω on BOTH peak EMF (ε₀ = NBAω) AND output frequency, slip rings vs split-ring commutator.",
      },
    ],
  },

  // ================== THEME E: NUCLEAR & QUANTUM PHYSICS ===================
  {
    id: "e1-atom-quantum",
    title: "E.1–E.2 Atomic Structure & Quantum Physics",
    strand: "Theme E: Nuclear & Quantum Physics",
    icon: "🔬",
    level: "SL",
    curriculum: "IB Physics FA2025 E.1 Structure of the atom (SL + HL) & E.2 Quantum physics [HL]",
    sections: [
      {
        id: "atomic-spectra-levels",
        heading: "E.1 Rutherford Scattering, Energy Levels & Line Spectra",
        level: "SL",
        covers: "Geiger–Marsden–Rutherford α-scattering conclusions (dense positive nucleus, mostly empty space), discrete atomic energy levels, photon emission & absorption E = hf = hc/λ, emission vs absorption line spectra as atomic fingerprints, hydrogen series.",
      },
      {
        id: "nuclear-radius-bohr-hl",
        heading: "E.1 Closest Approach, Nuclear Radius & Bohr Quantization",
        level: "HL",
        covers: "Distance of closest approach from energy conservation (E_k = kQ₁Q₂/d), deviations from Rutherford scattering at high energy (strong nuclear force), nuclear radius R = R₀ A^(1/3) & constant nuclear density, electron diffraction nuclear sizing (sin θ ≈ λ/D), Bohr quantization mvr = nh/(2π) and hydrogen levels E_n = −13.6/n² eV.",
      },
      {
        id: "photoelectric-compton-hl",
        heading: "E.2 The Photoelectric Effect & Compton Scattering",
        level: "HL",
        covers: "Failure of classical wave theory (threshold frequency f₀, instantaneous emission, intensity vs E_k,max), Einstein's photoelectric equation hf = Φ + E_k,max, stopping potential eV_s = E_k,max, Millikan V_s–f graph (gradient h/e, intercept −Φ/e); Compton scattering Δλ = (h/m_e c)(1 − cos θ) proving photon momentum p = h/λ.",
      },
      {
        id: "wave-particle-duality-hl",
        heading: "E.2 Matter Waves, de Broglie Wavelength & Electron Diffraction",
        level: "HL",
        covers: "de Broglie wavelength λ = h/p = h/√(2meV), Davisson–Germer / thin-graphite electron diffraction rings as evidence for wave nature of matter, wave–particle duality, standing electron waves in the Bohr atom (2πr = nλ).",
      },
    ],
  },
  {
    id: "e2-nuclear-stars",
    title: "E.3–E.5 Radioactive Decay, Fission, Fusion & Stars",
    strand: "Theme E: Nuclear & Quantum Physics",
    icon: "⭐",
    level: "SL",
    curriculum: "IB Physics FA2025 E.3 Radioactive decay (SL + HL), E.4 Fission, E.5 Fusion and stars",
    sections: [
      {
        id: "binding-energy-decay",
        heading: "E.3 Mass Defect, Binding Energy & Radioactive Decay",
        level: "SL",
        covers: "Isotopes & nuclide notation, mass–energy equivalence E = mc² (1 u = 931.5 MeV c⁻²), mass defect & binding energy per nucleon curve (peak at Fe-56/Ni-62), strong nuclear vs electrostatic forces, α, β⁻ (antineutrino), β⁺ (neutrino) & γ decay, half-life T_½ and background radiation.",
      },
      {
        id: "decay-law-hl",
        heading: "E.3 Exponential Decay Law, Decay Constant & Neutrino Evidence",
        level: "HL",
        covers: "Probabilistic decay constant λ, exponential laws N = N₀ e^(−λt) and activity A = λN = A₀ e^(−λt), T_½ = ln 2 / λ, linearizing ln A vs t (gradient −λ), continuous β-energy spectrum vs discrete α/γ spectra as evidence for the neutrino.",
      },
      {
        id: "nuclear-fission",
        heading: "E.4 Nuclear Fission & Power Reactors",
        level: "SL",
        covers: "Induced fission of U-235 by thermal neutrons, chain reactions & critical mass, roles of moderator (slows fast neutrons via elastic collisions), control rods (absorb neutrons), coolant & heat exchanger, energy release from binding-energy difference, radioactive waste & safety.",
      },
      {
        id: "fusion-stars-hr",
        heading: "E.5 Nuclear Fusion, Stellar Equilibrium, Parallax & HR Diagrams",
        level: "SL",
        covers: "Proton–proton chain fusion (high T & density to overcome Coulomb repulsion), hydrostatic equilibrium (radiation pressure vs gravity), stellar parallax d(pc) = 1/p(arcsec), luminosity L = σAT⁴ & apparent brightness b = L/(4πd²), Hertzsprung–Russell (HR) diagram (main sequence, giants, supergiants, white dwarfs, M–L relation L ∝ M^3.5) and stellar evolution (red giant → white dwarf vs red supergiant → supernova → neutron star / black hole).",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
