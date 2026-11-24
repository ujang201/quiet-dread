import { mkdirSync, writeFileSync } from "node:fs";

// One-line code review comment: approves the PR, quiet existential dread,
// flat understatement, in a tired engineer's own voice.
const ENTRY =
  "Approved. All green, no notes — just the quiet feeling this file will outlive the team that wrote it.";

// Gate: 1–140 characters, single line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry length ${ENTRY.length} out of gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
