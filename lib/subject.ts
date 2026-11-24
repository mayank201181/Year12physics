// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Physics (SL & HL).
// Single source of truth for UI labels, storage keys, AI tutor persona,
// Data Booklet / reference cards, IB command terms, and exam blueprints.
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12physics",
  cookieName: "y12physics_session",
  shortName: "IB Physics",
  fullName: "Year 12–13 IB Diploma Physics (SL/HL)",
  shortTitle: "IB DP Physics",
  badge: "IB DP Physics · First Assessment 2025",
  groupLabel: "Group 4 · Experimental Sciences",
  icon: "⚛️",
  themeColorLight: "#2563eb",
  themeColorDark: "#0e1020",
  provisionalBanner: null as string | null,
  tutorName: "Professor Maxwell",
  tutorEmoji: "⚛️",
  tutorScope: "IB Diploma Physics (SL & HL, First Assessment 2025)",
  tutorSystemPrompt: `You are Professor Maxwell, a warm, rigorous IB Diploma Physics (SL & HL, First Assessment 2025) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned to IBO FA2025 Physics):
- If the learner asks about a question they are working on, do NOT give the full answer immediately. Ask one guiding question or give only the next small nudge (e.g. "Which conservation law links before and after the collision?", "Is that quantity a vector or a scalar, and what sign convention did you pick?"), then stop and let them reason.
- Only give a complete worked solution if they explicitly say they give up, or the context says they have already answered (then highlight IB mark-scheme phrasing, significant figures, SI units, and common examiner traps).
- Follow the IB Physics First Assessment 2025 syllabus strictly: Themes A–E (A.1–E.5), Paper 1A (MCQ), Paper 1B (Data-based & experimental skills), Paper 2 (short & extended response) — there is NO Paper 3 or legacy Options. Respect the SL vs HL boundary (A.4 Rigid body mechanics, A.5 Relativity, B.4 Thermodynamics, D.4 Induction, E.2 Quantum physics, plus HL extensions in C.1, C.3, C.5, D.1, D.2, E.1, E.3).
- Double-check every calculation, sign convention, vector component, uncertainty propagation, and unit conversion before replying.

Style:
- Concise: usually 2–6 sentences. British spelling. Warm, encouraging, never patronising.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Physics, experimental data analysis, and IA/exam technique. For anything else, kindly steer back to Physics.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Physics Data Booklet & Mark-Savers",
  vaultShort: "Data Booklet",
  vaultIcon: "📘",
  vaultBlurb: "Official Themes A–E formulas (SL & HL), SI constants, uncertainty propagation rules, and IB examiner mark-savers.",
  vaultSearchPlaceholder: "Filter e.g. SUVAT, Carnot, Faraday, Bohr, uncertainty…",
  examTitle: "IB Physics Mock Papers (Paper 1A, 1B & Paper 2)",
  examShort: "Mock Papers",
  examBlurb: "Paper 1A (MCQ), Paper 1B (Data-based & experimental skills) and Paper 2 (SL & HL structured + extended response) — aligned to First Assessment 2025 (no Paper 3).",
  iaNavLabel: "IA Guide",
  iaTitle: "IB Physics Scientific Investigation (IA)",
  cramBanner: "Stop losing easy IB marks: check SI base units & 2–3 s.f., propagate fractional vs absolute uncertainties cleanly, match every IB command term (State vs Explain vs Derive), and toggle SL/HL anytime.",
  searchPlaceholder: "Search, e.g. “SUVAT”, “Carnot”, “SHM”, “Faraday” or “photoelectric”",
  sitcomSeriesName: "IB Physics Studio (Phase C)",
  sitcomBlurb: "Narrated IB Physics episodes and vertical Concept Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-p1a", expectedCount: 25, level: "SL", paperType: "Paper 1A · Multiple Choice (SL & HL)" },
  { id: "exam-p1b", expectedCount: 15, level: "SL", paperType: "Paper 1B · Data-Based & Experimental" },
  { id: "exam-p2-sl", expectedCount: 15, level: "SL", paperType: "Paper 2 (SL) · Structured & Extended" },
  { id: "exam-p2-hl", expectedCount: 20, level: "HL", paperType: "Paper 2 (HL) · Structured & Extended" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Theme A: Space, Time & Motion": { slug: "theme-a", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Theme B: Particulate Nature of Matter": { slug: "theme-b", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Theme C: Wave Behaviour": { slug: "theme-c", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Theme D: Fields": { slug: "theme-d", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
  "Theme E: Nuclear & Quantum Physics": { slug: "theme-e", text: "text-s-stats", bg: "bg-s-stats", soft: "bg-s-stats/15", border: "border-s-stats" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. Fundamental Constants & SI Base Units",
    badge: "Data Booklet",
    level: "SL",
    lines: [
      "`g = 9.81 m s⁻²` · `c = 3.00 × 10⁸ m s⁻¹` · `G = 6.67 × 10⁻¹¹ N m² kg⁻²`",
      "`k_B = 1.38 × 10⁻²³ J K⁻¹` · `R = 8.31 J mol⁻¹ K⁻¹` · `N_A = 6.02 × 10²³ mol⁻¹`",
      "`e = 1.60 × 10⁻¹⁹ C` · `h = 6.63 × 10⁻³⁴ J s` · `σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴`",
      "7 SI base units: `kg, m, s, A, K, mol, cd`. Always convert `°C → K` (`+ 273.15`) and `eV → J` (`× 1.60 × 10⁻¹⁹`) before plugging into formulas!",
    ],
  },
  {
    title: "2. Paper 1B Uncertainties & Linearization",
    badge: "Paper 1B & IA",
    level: "SL",
    lines: [
      "Add/subtract `y = a ± b` → **add absolute uncertainties**: `Δy = Δa + Δb`.",
      "Multiply/divide `y = ab/c` → **add fractional (%) uncertainties**: `Δy/y = Δa/a + Δb/b + Δc/c`.",
      "Powers `y = aⁿ` → **multiply fractional uncertainty by |n|**: `Δy/y = |n|(Δa/a)`.",
      "Gradient uncertainty from error bars: `Δm = (m_max − m_min) / 2` (round uncertainty to **1 s.f.**, then match decimal places of the value!).",
    ],
  },
  {
    title: "3. HL Mechanics, Relativity & Thermodynamics",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Rigid Body (A.4):** `τ = Fr sin θ = Iα` · `L = Iω` · `E_k,rot = ½Iω²`.",
      "**Special Relativity (A.5):** `γ = 1 / √(1 − v²/c²)` · `Δt = γΔt₀` (proper time in rest frame) · `L = L₀/γ`.",
      "**Thermodynamics (B.4):** `Q = ΔU + W` (with `W = PΔV` isobaric) · `ΔU = (3/2)nRΔT` · `η_Carnot = 1 − T_C/T_H` (Kelvin!).",
    ],
  },
  {
    title: "4. HL Fields, Induction & Quantum Physics",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Potentials (D.1–D.2):** `V_g = −GM/r` · `v_esc = √(2GM/r)` · `V_e = kq/r` · `g = −ΔV_g/Δr`, `E = −ΔV_e/Δr`.",
      "**Induction (D.4):** `Φ = BA cos θ` · `ε = −N ΔΦ/Δt` · motional EMF `ε = BvL`.",
      "**Quantum & Nuclear (E.2–E.3):** `hf = Φ + E_k,max` · `λ = h/p` · `R = R₀ A^(1/3)` · `N = N₀ e^(−λt)` · `T_½ = ln 2 / λ`.",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🧮",
    title: "Calculators & Data Booklet allowed on ALL papers (FA2025)",
    text: "Under the 2025 IB Physics syllabus, you get your GDC/scientific calculator and a clean Data Booklet in Paper 1A, Paper 1B, and Paper 2. There is no Paper 3.",
  },
  {
    icon: "📏",
    title: "Match significant figures & show SI conversions",
    text: "Round final numerical answers to the least number of significant figures in the given data (typically 2–3 s.f.), and never round intermediate steps.",
  },
  {
    icon: "📊",
    title: "Paper 1B tests experimental reasoning, not recall",
    text: "State the line of best fit passes through all error bars (not just 'it is straight'), quote exact coordinates from graphs, and distinguish random vs systematic errors.",
  },
  {
    icon: "🎯",
    title: "Obey IB command terms strictly",
    text: "'State' needs a brief fact; 'Derive' requires algebraic manipulation from Data Booklet equations; 'Show that' demands unrounded intermediate figures before the target value.",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "State", ao: "AO1", meaning: "Give a specific name, value or other brief answer without explanation or calculation.", examTip: "Be concise — one crisp phrase or value; don't waste time writing a paragraph." },
  { term: "Define", ao: "AO1", meaning: "Give the precise meaning of a word, phrase, concept or physical quantity.", examTip: "If defining from an equation, define EVERY symbol (e.g. 'force per unit positive test charge')." },
  { term: "Outline", ao: "AO2", meaning: "Give a brief account or summary.", examTip: "Hit 2–3 core physical steps without deep derivation." },
  { term: "Describe", ao: "AO2", meaning: "Give a detailed account of a trend, graph, or physical situation.", examTip: "For graphs, quote regions (linear, plateau, gradient increases/decreases) and key values." },
  { term: "Calculate", ao: "AO2", meaning: "Obtain a numerical answer showing the relevant stages in the working.", examTip: "Write formula → substitution → unrounded value → final rounded value + SI unit." },
  { term: "Determine", ao: "AO2", meaning: "Obtain the only possible answer (often from a graph or multi-step reasoning).", examTip: "Show graph read-offs or triangle coordinates clearly." },
  { term: "Derive", ao: "AO3", meaning: "Manipulate a mathematical relationship to give a new equation or relationship.", examTip: "Start from a Data Booklet law and show every algebraic substitution explicitly." },
  { term: "Explain", ao: "AO3", meaning: "Give a detailed account including reasons or causes.", examTip: "Chain cause → physical mechanism → observed effect (use 'because' / 'therefore')." },
  { term: "Sketch", ao: "AO3", meaning: "Represent by means of a diagram or graph labelled with key features.", examTip: "Label axes with quantities/units and mark intercepts, asymptotes, peaks or symmetry." },
  { term: "Distinguish", ao: "AO2", meaning: "Make clear the differences between two or more concepts or items.", examTip: "State BOTH sides explicitly ('X does..., whereas Y does...')." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced review including a range of arguments or factors.", examTip: "Present competing physical mechanisms, limitations, or evidence on both sides." },
  { term: "Evaluate", ao: "AO3", meaning: "Make an appraisal by weighing up the strengths and limitations.", examTip: "Weigh validity/uncertainties/assumptions and end with a reasoned judgement." },
];
