// One Letter for Your Day — entry: the letter D.
// D stands for "doomscrolling": the day spent thumbing through bad news
// until 2 a.m., phone glow on the ceiling, one more scroll, then one more.
// Vivid, specific, funny, and honest about a real modern day — and D is
// the letter the word starts with, no gloss, no punctuation, just the letter.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "D";

function emptyDir(dir) {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

const outDir = process.argv[2] ?? "/output";
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("letter must be exactly one character A-Z");
}
emptyDir(outDir);
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");

// Gate: entry.txt must be exactly 1 character (1-1), no trailing newline,
// no whitespace-only content. "D" alone is one byte, so the file is the
// letter and nothing else.
