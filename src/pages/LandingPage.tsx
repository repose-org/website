/** Organization profile (canonical entry point). */
const ORG = "https://github.com/repose-org";
/** Monorepo root — used for blob/tree links (must match the GitHub repository name under the org). */
const REPOSITORY = `${ORG}/repose`;

const LINKS = {
  org: ORG,
  readmeSpec: `${REPOSITORY}/blob/main/specifications/readme-specification/README.spec.md`,
  readmePlayground: `${REPOSITORY}/tree/main/packages/readme-website`,
  agentsSpec: `${REPOSITORY}/blob/main/specifications/agents-specification/AGENTS%20Specification.md`,
  agentsPlayground: `${REPOSITORY}/tree/main/packages/agents-website`,
  contribSpec: `${REPOSITORY}/blob/main/specifications/contributing-specification/CONTRIBUTING.spec.md`,
  contribPlayground: `${REPOSITORY}/tree/main/packages/contributing-website`,
  mission: `${REPOSITORY}/blob/main/documentation/Repose-mission.md`,
  roadmap: `${REPOSITORY}/blob/main/ROADMAP.md`,
  contributing: `${REPOSITORY}/blob/main/CONTRIBUTING.md`,
} as const;

function IconGithub(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconReadme() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAgents() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 10v2a7 7 0 0 1-14 0v-2M12 18v4M8 22h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconContrib() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M17 11a4 4 0 1 0-4 4M3 21v-2a4 4 0 0 1 4-4h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LandingPage() {
  return (
    <div className="repose-page">
      <div className="aurora" aria-hidden>
        <div className="aurora__grid" />
        <div className="aurora__noise" />
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
        <div className="aurora__blob aurora__blob--4" />
      </div>

      <header className="nav">
        <div className="nav__inner">
          <a className="nav__brand" href="#top">
            <span className="nav__logo" aria-hidden />
            <span>Repose</span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a className="nav__link" href="#verticals">
              Verticals
            </a>
            <a className="nav__link" href="#philosophy">
              Philosophy
            </a>
            <a className="nav__link" href={LINKS.mission}>
              Mission
            </a>
            <a className="nav__cta" href={LINKS.org}>
              <IconGithub />
              Source
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="shell">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero__glow" aria-hidden />
            <p className="hero__eyebrow">Repository governance</p>
            <h1 id="hero-title" className="hero__title">
              <span className="hero__title-gradient">Repose</span>
            </h1>
            <p className="hero__lead">
              A formal standards ecosystem for the files that shape how humans and coding
              agents understand your project—specifications, validators, and playgrounds
              that keep prose and machine checks in lockstep.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={LINKS.org}>
                <IconGithub />
                Explore on GitHub
              </a>
              <a className="btn btn--ghost" href={LINKS.roadmap}>
                View roadmap
              </a>
            </div>
            <div className="hero__pills" role="list">
              <span className="pill" role="listitem">
                RFC-style specs
              </span>
              <span className="pill" role="listitem">
                CLI + browser parity
              </span>
              <span className="pill" role="listitem">
                Weighted scoring
              </span>
              <span className="pill" role="listitem">
                Presets &amp; modes
              </span>
            </div>
          </section>

          <section id="verticals" className="section" aria-labelledby="verticals-title">
            <div className="section__head">
              <p className="section__label">Three verticals, one engine each</p>
              <h2 id="verticals-title" className="section__title">
                Standards you can lint—beautifully
              </h2>
              <p className="section__desc">
                Every shipped vertical pairs a normative specification with a TypeScript
                validator and an interactive playground, so CI and the browser always agree.
              </p>
            </div>

            <div className="bento">
              <article className="card card--span-4">
                <div className="card__icon card__icon--readme" style={{ color: "#67e8f9" }}>
                  <IconReadme />
                </div>
                <h3 className="card__title">README.md</h3>
                <p className="card__body">
                  Repository README Specification (RRS): cognitive funnel, personas,
                  compliance tiers, and dozens of structural and quality rules—with
                  curated presets for libraries, CLIs, and research repos.
                </p>
                <div className="card__meta">
                  <span className="tag">@rhythmus/readme-validator</span>
                  <span className="tag">v1.x</span>
                </div>
                <div className="card__links">
                  <a className="link-arrow" href={LINKS.readmeSpec}>
                    Specification
                    <IconArrow />
                  </a>
                  <a className="link-arrow link-arrow--muted" href={LINKS.readmePlayground}>
                    Playground package
                    <IconArrow />
                  </a>
                </div>
              </article>

              <article className="card card--span-4">
                <div className="card__icon card__icon--agents" style={{ color: "#c4b5fd" }}>
                  <IconAgents />
                </div>
                <h3 className="card__title">AGENTS.md</h3>
                <p className="card__body">
                  Structured onboarding for AI assistants: policies, modes, diagnostics
                  with stable codes, and validation postures from lenient to strict—so
                  agent context stays auditable as your repo evolves.
                </p>
                <div className="card__meta">
                  <span className="tag">agents-md-validator</span>
                  <span className="tag">v1.x</span>
                </div>
                <div className="card__links">
                  <a className="link-arrow" href={LINKS.agentsSpec}>
                    Specification
                    <IconArrow />
                  </a>
                  <a className="link-arrow link-arrow--muted" href={LINKS.agentsPlayground}>
                    Playground package
                    <IconArrow />
                  </a>
                </div>
              </article>

              <article className="card card--span-4">
                <div className="card__icon card__icon--contrib" style={{ color: "#fcd34d" }}>
                  <IconContrib />
                </div>
                <h3 className="card__title">CONTRIBUTING.md</h3>
                <p className="card__body">
                  Dual-audience contribution protocols: human-readable lifecycle and
                  workflow, plus machine-readable validation hooks—branching conventions,
                  Conventional Commits, and CI alignment out of the box.
                </p>
                <div className="card__meta">
                  <span className="tag">@rhythmus/contributing-validator</span>
                  <span className="tag">v1.x</span>
                </div>
                <div className="card__links">
                  <a className="link-arrow" href={LINKS.contribSpec}>
                    Specification
                    <IconArrow />
                  </a>
                  <a className="link-arrow link-arrow--muted" href={LINKS.contribPlayground}>
                    Playground package
                    <IconArrow />
                  </a>
                </div>
              </article>

              <div className="card card--span-12 philo">
                <div>
                  <p className="section__label">Agentic coding</p>
                  <h2 id="philosophy" className="section__title" style={{ marginBottom: "0.75rem" }}>
                    Built for humans—and for the tools that pair with them
                  </h2>
                  <p className="section__desc">
                    Repose treats governance files like code: versioned specs, explicit
                    rules, and validators that integrate with CI. Contributors get clarity;
                    agents get a stable protocol instead of a one-off prompt.
                  </p>
                  <p className="section__desc" style={{ marginTop: "1rem" }}>
                    Run each playground locally from the monorepo (<code
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.85em", color: "var(--accent-cyan)" }}
                    >
                      pnpm --filter … dev
                    </code>
                    )—same engines the CLIs use.
                  </p>
                </div>
                <div className="philo__visual">
                  <div className="philo__orbit" aria-hidden />
                  <div className="philo__panel">
                    <div className="philo__row">
                      <span className="philo__dot philo__dot--human" />
                      <span>Authors write prose with intent.</span>
                    </div>
                    <div className="philo__row">
                      <span className="philo__dot philo__dot--machine" />
                      <span>Validators enforce structure &amp; policy.</span>
                    </div>
                    <div className="philo__row" style={{ opacity: 0.85 }}>
                      <span style={{ width: 8 }} />
                      <span>Scores &amp; badges track drift over time.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="cta-title">
            <div className="cta-band">
              <h2 id="cta-title" className="cta-band__title">
                Ship a gold-standard repository—without the audit anxiety
              </h2>
              <p className="cta-band__text">
                Read the mission statement, adopt the specs that fit your team, and let
                validators keep your governance files honest as your project grows.
              </p>
              <div className="hero__actions" style={{ justifyContent: "center" }}>
                <a className="btn btn--primary" href={LINKS.mission}>
                  Read Repose mission
                </a>
                <a className="btn btn--ghost" href={LINKS.contributing}>
                  Contributing guide
                </a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="footer__left">
              <span className="footer__mark" aria-hidden />
              <span>
                Repose — standards ecosystem for repository governance files.
              </span>
            </div>
            <div className="footer__links">
              <a href={LINKS.org}>GitHub</a>
              <a href={LINKS.roadmap}>Roadmap</a>
              <a href={LINKS.mission}>Mission</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
