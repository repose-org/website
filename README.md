# Repose marketing site

Static landing page for the Repose project (Vite + React). This repository is also included as a **git submodule** in the Repose monorepo ([`repose-org`](https://github.com/repose-org)) under `website/`.

## Blank page at `*.github.io/<repo>`?

If the tab title appears but the page is **empty**, GitHub Pages is almost certainly serving **this repo’s source `index.html`** (the Vite dev template with `<script type="module" src="/src/main.tsx">`). Browsers then request `https://<user>.github.io/src/main.tsx`, which **404s**, so React never loads.

**Fix:** In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, not **Deploy from a branch**. The workflow publishes the **`pnpm build`** output under `dist/` (single inlined HTML), not the raw repo root.

After changing the source, re-run **Deploy to GitHub Pages** from the Actions tab (or push to `main`).

## Develop

From this repository:

```bash
pnpm install
pnpm dev
```

When working inside the monorepo checkout:

```bash
pnpm install
pnpm --filter @repose/website dev
```

## Build

```bash
pnpm run build
```

### Single-file static deploy (GitHub Pages, S3, any CDN)

The production build is **one self-contained, minified HTML file**:

- Path: **`dist/index.html`**
- **No separate JS/CSS assets** — everything is inlined by [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile).
- **No external font requests** — typography uses system font stacks so the file works offline and on locked-down hosts.
- **Relative base URL** (`./`) so it works as a GitHub Pages project site (`https://<org>.github.io/<repo>/`) or at a domain root.

`pnpm preview` serves the same output for a quick check.

## GitHub Pages (automatic deploy)

Pushes to **`main`** run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds the site and publishes the `dist/` folder to **GitHub Pages**.

### One-time repository settings

1. On [github.com/repose-org/website](https://github.com/repose-org/website): **Settings** → **Pages** (under *Code and automation*).
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. After the first successful workflow run, the site is available at **`https://repose-org.github.io/website/`** (project site URL for this repository).

Workflow runs are listed under the **Actions** tab.

### If the site returns 404

1. **Wait for Actions** — The first deploy after enabling Pages can take a minute or two. Check the latest **Deploy to GitHub Pages** run is green.
2. **Pages source** — **Settings → Pages → Build and deployment → Source** must be **GitHub Actions**, not “Deploy from a branch”.
3. **URL** — Use the project URL `https://repose-org.github.io/website/` (with trailing slash is fine). `…/website/index.html` should also return **200**.
4. **Organization policy** — The org must allow GitHub Pages for public repositories (org **Settings → Pages**).

The CI build sets **`REPOSE_SITE_BASE`** to `/<repository-name>/` so the Vite app matches the [GitHub Pages project-site path](https://vitejs.dev/guide/build.html#public-base-path).
