// The Dog Ate My Homework: Funniest Excuse — the excuse a DOG gives after
// being caught eating the homework. One line, funniest wins.
// Why it wins: the dog reframes the crime as heroic protection, then flips
// the blame onto the cat — the classic homework alibi, retold from the dog's
// point of view with a shameless "you're welcome" as the punchline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "It wasn't homework — it was a threat letter from the cat,",
  "and I ate it to protect you. You're welcome.",
];
const MAX_CHARS = 200;

export const ENTRY_LINE = ENTRY_BEATS.join(" ");

const charCount = (text: string) => [...text].length;

function buildEntryLine(): string {
  return ENTRY_BEATS.join(" ");
}

const isValidEntry = (text: string): boolean =>
  text.trim().length > 0 && charCount(text) >= 1 && charCount(text) <= MAX_CHARS;

if (!isValidEntry(buildEntryLine())) {
  throw new Error("Entry line fails the 1–200 character gate");
}

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), buildEntryLine());
