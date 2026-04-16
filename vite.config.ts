import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

/** Relative base so the single-file build works on GitHub Pages (project or root) and static hosts. */
const base = "./";

export default defineConfig({
  base,
  plugins: [
    react(),
    viteSingleFile({
      removeViteModuleLoader: true,
      deleteInlinedFiles: true,
    }),
  ],
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
});
