# Repose marketing site

Static landing page for the Repose project (Vite + React). This repository is also included as a **git submodule** in the Repose monorepo ([`repose-org`](https://github.com/repose-org)) under `website/`.

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
