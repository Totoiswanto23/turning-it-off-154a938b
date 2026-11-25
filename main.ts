// Have You Tried Turning It Off? — a hopeless tech support agent's one line.
// The customer is desperate (deadline burning, nothing works); the agent's
// cheerful uselessness is the joke: the classic reboot line IS the whole plan.
// This program writes that one line to /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: empathy up front, the classic reboot question, then the twist —
// there is no step two, because the agent has nothing else to offer.
const ENTRY = "I hear you — your deadline's burning and nothing works. Have you tried turning it off and on again? That's the whole plan; there is no step two.";

// Count characters the way the gate does: one per code point, so the
// em-dash counts as one, not three bytes.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  // Mirror the sealed gate exactly: 1-199 chars, one line, not only whitespace.
  if (chars < 1 || chars > 199 || ENTRY.includes('\n') || ENTRY.trim().length === 0) {
    throw new Error(`entry must be one line of 1-199 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
