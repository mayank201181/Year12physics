// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire IB Physics recall across Themes A–E
// (SUVAT, forces, thermal & ideal gas, circuits, SHM/waves, fields, nuclear &
// quantum calculations).
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, IBLevel, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "themeA" | "themeB" | "themeC" | "themeD" | "themeE" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["themeA", "themeB", "themeC", "themeD", "themeE", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  themeA: "Theme A: Space, Time & Motion",
  themeB: "Theme B: Particulate Nature of Matter",
  themeC: "Theme C: Wave Behaviour",
  themeD: "Theme D: Fields",
  themeE: "Theme E: Nuclear & Quantum Physics",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  themeA: {
    label: "Theme A: Motion",
    icon: "🚀",
    description: "SUVAT, projectile components, momentum, kinetic energy, torque & Lorentz factor.",
    example: "Find v from u = 4, a = 3, t = 5 · Momentum of 4 kg at 6 m s⁻¹",
  },
  themeB: {
    label: "Theme B: Matter & Circuits",
    icon: "🌡️",
    description: "Kelvin conversions, Q = mcΔT, PV = nRT, Ohm's law, series/parallel resistors & EMF.",
    example: "Convert 27 °C to K · Equivalent resistance of 6 Ω and 3 Ω in parallel",
  },
  themeC: {
    label: "Theme C: Waves & SHM",
    icon: "〰️",
    description: "Wave speed v = fλ, SHM ω = 2πf, Snell's law, double-slit spacing & pipe harmonics.",
    example: "Wavelength of a 500 Hz wave at 340 m s⁻¹ · Fundamental frequency of an open pipe",
  },
  themeD: {
    label: "Theme D: Fields",
    icon: "🧲",
    description: "Field strength g = GM/r², Coulomb's law, F = qvB, F = BIL & magnetic flux Φ = BA.",
    example: "Force on a 2 m wire carrying 3 A in 0.5 T · Magnetic flux through 0.4 m² at 0.25 T",
  },
  themeE: {
    label: "Theme E: Nuclear & Quantum",
    icon: "⚛️",
    description: "Photon energy E = hf, eV ↔ J conversions, half-life decay fractions & stellar parallax.",
    example: "Distance in parsecs for parallax 0.05 arcsec · Mass left after 3 half-lives",
  },
  mixed: {
    label: "Full IB Physics Mixed",
    icon: "🎲",
    description: "Themes A–E interleaved — rapid quantitative recall across the whole FA2025 course.",
    example: "SUVAT, circuits, waves, fields & nuclear calculations in 60 seconds",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));
const LEVEL_OF_TOPIC = new Map<string, IBLevel>(TOPIC_META.map((t) => [t.id, t.level]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic), respecting SL/HL. */
export function sprintPool(mode: SprintMode, drills: readonly Drill[], ibLevel: IBLevel = "HL"): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    const drillLevel = d.ibLevel ?? LEVEL_OF_TOPIC.get(d.topicId) ?? "SL";
    if (ibLevel === "SL" && drillLevel === "HL") return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[], ibLevel: IBLevel = "HL"): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills, ibLevel).length;
  return out;
}

/** Build a sprint item from one drill, or null if the drill fails or gives an unusable item. */
function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

/**
 * One quick item from a pool of drills. Topics are picked evenly first (so a
 * topic with many drills doesn't crowd out the rest), then a drill within it.
 * Items without a diagram are preferred — they're quicker to read.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}
