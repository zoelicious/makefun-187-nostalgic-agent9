import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = "When the ice cream bell rang I ran with coins clutched in my fist, and the vendor handed me a cone already melting down my wrist before I had even turned back toward home.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log("wrote entry.txt (" + text.length + " chars) from " + here);
