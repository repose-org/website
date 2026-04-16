# Repose marketing site

Static landing page for the Repose project (Vite + React).

## Develop

From the repository root:

```bash
pnpm install
pnpm --filter @repose/website dev
```

Or from this directory:

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm --filter @repose/website build
```

### Single-file static deploy (GitHub Pages, S3, any CDN)

The production build is **one self-contained, minified HTML file**:

- Path: **`website/dist/index.html`**
- **No separate JS/CSS assets** — everything is inlined by [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile).
- **No external font requests** — typography uses system font stacks so the file works offline and on locked-down hosts.
- **Relative base URL** (`./`) so it works as a project site (`/repo/`) or at a domain root.

Deploy by uploading that file (or pointing GitHub Pages **“Deploy from branch”** at a branch that contains `dist/index.html`, or using an Action that uploads `website/dist`).

`pnpm preview` serves the same output for a quick check.
