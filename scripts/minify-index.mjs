/**
 * Post-build: shrink the single-file HTML (whitespace/comments).
 * JS/CSS are already minified by Vite; we avoid re-minifying <script> bodies.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "html-minifier-terser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, "..", "dist", "index.html");

const html = readFileSync(indexPath, "utf8");
const out = await minify(html, {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
  removeRedundantAttributes: true,
  minifyCSS: true,
  minifyJS: false,
});

writeFileSync(indexPath, out);
process.stdout.write(`minified ${indexPath}\n`);
