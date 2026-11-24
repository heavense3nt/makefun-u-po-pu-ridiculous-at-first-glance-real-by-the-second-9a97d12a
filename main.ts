// Ridiculous at First Glance, Real by the Second — one-sentence startup pitch.
// A dating app that matches people by the contents of their fridge:
// absurd on first hearing, then the business logic lands — shared condiments
// predict compatibility better than star signs, and grocery brands pay for
// the introduction. Writes the entry to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
import { isAbsolute, join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A dating app that matches people by the contents of their fridge, because shared condiments predict compatibility better than star signs — and grocery brands pay for the introduction.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const dest = outDir
  ? isAbsolute(outDir)
    ? join(outDir, "entry.txt")
    : join(process.cwd(), outDir, "entry.txt")
  : join(process.cwd(), "out", "entry.txt");

mkdirSync(dest.slice(0, dest.lastIndexOf("/")), { recursive: true });
writeFileSync(dest, LINE + "\n", "utf8");
