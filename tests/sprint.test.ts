import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["SI unit of magnetic flux?", "weber"],
    ["SI unit of electrical resistance?", "ohm"],
    ["SI unit of force?", "newton"],
    ["SI unit of frequency?", "hertz"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Physics drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.momentum`,
    topicId,
    title: "Fake momentum drill",
    level: 1,
    generate(rng) {
      const m = rng.int(2, 9);
      return {
        prompt: `Momentum of ${m} kg moving at 4 m s^-1?`,
        answer: { type: "number", value: m * 4, tolerance: 0 },
        solution: [`p = mv = ${m} × 4 = ${m * 4}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are Themes A–E plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["themeA", "themeB", "themeC", "themeD", "themeE", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper1"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const tA = firstTopic("Theme A: Space, Time & Motion");
  const tB = firstTopic("Theme B: Particulate Nature of Matter");
  const drills = [
    bankDrill(tA, 1, "sl", "SL"),
    bankDrill(tA, 2, "hl", "HL"),
    bankDrill(tA, 3, "hard", "SL"),
    bankDrill(tB, 2, "b", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("themeA", drills, "HL").map((d) => d.id), [`${tA}.sl`, `${tA}.hl`]);
  assert.deepEqual(sprintPool("themeA", drills, "SL").map((d) => d.id), [`${tA}.sl`]);
  assert.deepEqual(sprintPool("themeB", drills, "HL").map((d) => d.id), [`${tB}.b`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${tA}.sl`, `${tB}.b`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const tA = firstTopic("Theme A: Space, Time & Motion");
  const pool = sprintPool("mixed", [bankDrill(tA, 1), numberDrill(tA)]);
  const rng = makeRng(42);
  const keys = new Set<string>();
  for (let i = 0; i < 200; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it, "always produces an item");
    assert.ok(it.prompt && it.answerText && it.key);
    keys.add(it.key);
    if (it.answer.type === "text") {
      assert.equal(it.answerText, it.answer.accept[0]);
      assert.equal(checkAnswer(it.answer, it.answer.accept[0].toUpperCase()).status, "correct");
    } else if (it.answer.type === "number") {
      assert.equal(it.answerText, String(it.answer.value));
      assert.equal(checkAnswer(it.answer, String(it.answer.value)).status, "correct");
    }
  }
  assert.ok(keys.size > 8, "varied items");
});

test("a drill that throws is skipped, not fatal", () => {
  const tA = firstTopic("Theme A: Space, Time & Motion");
  const broken: Drill = { id: `${tA}.broken`, topicId: tA, title: "Broken", level: 1, generate() { throw new Error("boom"); } };
  const pool = sprintPool("themeA", [broken, bankDrill(tA, 1)]);
  const rng = makeRng(7);
  for (let i = 0; i < 50; i++) assert.ok(sprintItem(pool, rng));
  assert.equal(sprintItem(sprintPool("themeA", [broken]), makeRng(3)), null);
});
