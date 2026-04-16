import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

/**
 * GitHub project Pages are served under `https://<org>.github.io/<repo>/`.
 * Set `REPOSE_SITE_BASE` to `/<repo>/` in CI so Vite emits `<base href>` and correct asset roots.
 * Local dev omits it → `./` (see https://vitejs.dev/guide/build.html#public-base-path).
 */
function siteBase(): string {
  const raw = process.env.REPOSE_SITE_BASE?.trim();
  if (!raw) return "./";
  let b = raw.startsWith("/") ? raw : `/${raw}`;
  if (!b.endsWith("/")) b += "/";
  return b;
}

export default defineConfig({
  base: siteBase(),
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
