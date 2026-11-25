import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * "Invent a Word We Need" - the coined word miswave.
 *
 * The gap is real and unnamed: everyone has waved back at a stranger who was
 * actually greeting the person behind them, then had to carry on walking as
 * if nothing happened. English has no word for that small social stumble.
 * "mis-" marks the error and "wave" the gesture, so the word is sayable,
 * spellable and self-explanatory; the definition puts the whole scene in one
 * reading and ends on the person behind you, the turn that makes it stick.
 * A single fixed string, no clock/random/network, so two runs emit identical
 * bytes into the grader's output directory.
 */
const ENTRY =
  "miswave \u2014 the wave you fire back at a stranger before you notice " +
  "they were greeting the person behind you.";

function main(): void {
  const count = Array.from(ENTRY).length;
  if (count < 1 || count > 140) {
    throw new Error(`entry must be 1-140 characters, got ${count}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
