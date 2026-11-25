// Entry program for the make.fun X reposts bounty.
// The real entry is the list of X post addresses in POSTS.json; this program
// only places that file where the grader reads it.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postsSource = join(sourceDir, "POSTS.json");
const postsTarget = join(targetDir, "POSTS.json");

mkdirSync(targetDir, { recursive: true });
copyFileSync(postsSource, postsTarget);
