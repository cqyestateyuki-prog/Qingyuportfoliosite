/**
 * Big-Tech UIUX — Apple/Google design language
 * Single-page mockup combining:
 *   1. Projects index ("More Projects" replacement)
 *   2. Project Detail page below it
 */

const { useState } = React;

// ---------- Tiny icon ---------- //
const ArrowUR = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

// ---------- Data ---------- //
const PROJECTS = [
  { id: "ai-community", title: "AI Built-in Community Platform",
    eyebrow: "AI Product Design", year: "2025",
    role: "Design + Frontend", duration: "4 months", team: "Solo",
    tagline: "An in-app community system that turns isolated AI use into collaborative discovery.",
    tags: ["AI", "UIUX", "Programming"], fill: "fill-purple", size: "is-feature",
    img: "../../assets/images/aicommunity-homepage.png" },

  { id: "stumbldoor", title: "Stumbldoor", eyebrow: "Edtech", year: "2025",
    tagline: "Reimagining the library experience for modern readers.",
    tags: ["UIUX", "Research"], fill: "fill-dark", size: "is-large", poster: "The Future of Reading" },

  { id: "spark-up", title: "Spark Up", eyebrow: "Founder Tools", year: "2025",
    tagline: "A readiness check-in for first-time founders.",
    tags: ["AI", "Product"], fill: "fill-mint", size: "is-small",
    img: "../../assets/images/aicommunity-trending.png" },

  { id: "excel-ai", title: "Excel AI Agent", eyebrow: "AI Agent", year: "2024",
    tagline: "Natural language for spreadsheets — formulas, pivots, and explanations.",
    tags: ["AI", "Programming"], fill: "fill-blue", size: "is-half",
    img: "../../assets/images/aicommunity-search.png" },

  { id: "music-encounter", title: "Music Encounter", eyebrow: "Game Design", year: "2024",
    tagline: "A 3D open-world social adventure set in a fantasy musical world.",
    tags: ["Game", "Product"], fill: "fill-pink", size: "is-half" },

  { id: "petiboxy", title: "Petiboxy", eyebrow: "Brand & Onboarding", year: "2024",
    tagline: "Subscription pet supply box — onboarding flow and visual identity.",
    tags: ["UIUX", "Product"], fill: "fill-cream", size: "is-half" },

  { id: "ziplink", title: "Ziplink", eyebrow: "Developer Tools", year: "2024",
    tagline: "Tiny URL shortener with link analytics and team folders.",
    tags: ["Programming"], fill: "fill-cream", size: "is-half" },
];

// ---------- Nav ---------- //
const Nav = () => (
  <nav className="bt-nav">
    <div className="bt-nav-inner">
      <div className="bt-nav-logo">Qingyu Cao</div>
      <div className="bt-nav-items">
        <a className="is-active">Work</a><a>About</a><a>Writing</a><a>Contact</a>
      </div>
    </div>
  </nav>
);

// ---------- Card ---------- //
const Card = ({ p }) => {
  const isFeature = p.size === "is-feature";
  const isLarge = p.size === "is-large";

  return (
    <a className={`bt-card ${p.fill} ${p.size}`}>
      {isFeature && (
        <>
          <div className="bt-card-text">
            <div className="bt-card-eyebrow">{p.eyebrow}</div>
            <div className="bt-tag-row">
              {p.tags.map(t => <span key={t} className="bt-tag">{t}</span>)}
            </div>
            <h3 className="bt-card-title">{p.title}</h3>
            <p className="bt-card-tagline">{p.tagline}</p>
            <div className="bt-card-foot">
              <span className="bt-card-meta">{p.year} · Case Study</span>
              <div className="bt-card-arrow"><ArrowUR/></div>
            </div>
          </div>
          <div className="bt-card-art">{p.img && <img src={p.img} alt=""/>}</div>
        </>
      )}
      {!isFeature && (
        <>
          {(isLarge || p.img || p.poster) && (
            <div className="bt-card-art">
              {p.img ? <img src={p.img} alt=""/> :
                <div style={{ fontSize: isLarge ? 48 : 28, fontWeight: 600, color: p.fill === "fill-dark" ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.85)", letterSpacing: "-.02em", lineHeight: 1.05, textAlign: "center", padding: 24 }}>
                  {p.poster || p.title}
                </div>}
            </div>
          )}
          <div className="bt-card-eyebrow">{p.eyebrow}</div>
          <h3 className="bt-card-title">{p.title}</h3>
          <p className="bt-card-tagline">{p.tagline}</p>
          <div className="bt-card-foot">
            <span className="bt-card-meta">{p.year}</span>
            <div className="bt-card-arrow"><ArrowUR/></div>
          </div>
        </>
      )}
    </a>
  );
};

// ---------- Projects Index ---------- //
const FILTERS = ["All Work", "AI", "UIUX", "Product", "Programming", "Game", "Research"];

const ProjectsIndex = () => {
  const [active, setActive] = useState("All Work");
  const visible = PROJECTS.filter(p => active === "All Work"
    || p.tags.includes(active) || p.eyebrow.toLowerCase().includes(active.toLowerCase()));
  return (
    <>
      <header className="bt-page-head">
        <div className="bt-eyebrow">Selected Work · 2024–2025</div>
        <h1 className="bt-h1">Projects, in detail.</h1>
        <p className="bt-lede">A portfolio of shipped products across AI tooling, edtech, and game design — each with research, iteration, and the constraints that shaped them.</p>
      </header>
      <div className="bt-filter-bar">
        <div className="bt-filter-track">
          {FILTERS.map(f => (
            <button key={f} className={"bt-filter " + (active === f ? "is-active" : "")}
                    onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="bt-result-count">{visible.length} projects</div>
      </div>
      <div className="bt-grid">
        {visible.map(p => <Card key={p.id} p={p}/>)}
      </div>
    </>
  );
};

// ---------- Project Detail ---------- //
const ProjectDetail = () => (
  <article className="bt-detail">
    <div className="bt-anchor">
      <span className="bt-anchor-num">02 /</span>
      <span>Project Detail Page</span>
    </div>

    <header className="bt-detail-hero">
      <div className="bt-detail-eyebrow">AI Product Design · 2025</div>
      <h1 className="bt-detail-h1">Transform AI learning into community experience.</h1>
      <p className="bt-detail-sub">An in-app integrated community designed for AI tools — bridging isolated tool use with collaborative discovery, retention, and shared expertise.</p>
    </header>

    <div className="bt-detail-media">
      <div className="bt-detail-media-inner">
        <img src="../../assets/images/aicommunity-homepage.png" alt="AI Community Platform"/>
      </div>
    </div>

    <section className="bt-facts">
      <div><div className="bt-fact-label">Role</div><div className="bt-fact-value">Lead Designer · Frontend</div></div>
      <div><div className="bt-fact-label">Duration</div><div className="bt-fact-value">4 months · 2025</div></div>
      <div><div className="bt-fact-label">Team</div><div className="bt-fact-value">Solo project</div></div>
      <div><div className="bt-fact-label">Stack</div><div className="bt-fact-value">Figma · Next.js · TypeScript</div></div>
    </section>

    <section className="bt-section">
      <div className="bt-section-text">
        <div className="bt-section-num">01 — The Problem</div>
        <h2 className="bt-section-h">AI tools feel lonely.</h2>
        <p className="bt-section-p">ChatGPT, Grok, Claude — every major AI product is a one-on-one chatbox. Users discover prompts on Twitter, copy them in private, and never see how others build on their ideas.</p>
        <p className="bt-section-p">The opportunity: turn isolated tool use into a shared learning surface.</p>
      </div>
      <div className="bt-section-art is-tinted-purple">
        <img src="../../assets/images/aicommunity-search.png" alt=""/>
      </div>
    </section>

    <div className="bt-divider"></div>

    <section className="bt-section is-flipped">
      <div className="bt-section-text">
        <div className="bt-section-num">02 — Research</div>
        <h2 className="bt-section-h">Twelve interviews. One pattern.</h2>
        <p className="bt-section-p">Across twelve early adopters, the recurring pain wasn't lack of features — it was lack of <b>continuity</b>. Insights scattered across Slack threads, Notion docs, and pinned tabs.</p>
        <p className="bt-section-p">A built-in community thread per conversation became the unifying primitive.</p>
      </div>
      <div className="bt-section-art is-tinted-mint">
        <img src="../../assets/images/aicommunity-trending.png" alt=""/>
      </div>
    </section>

    <section className="bt-quote">
      <p className="bt-quote-text">"The best community feature isn't a forum. It's a footnote on every prompt that says — here's how five other people improved this."</p>
      <div className="bt-quote-author">Design principle, week 3</div>
    </section>

    <div className="bt-divider"></div>

    <section className="bt-section">
      <div className="bt-section-text">
        <div className="bt-section-num">03 — Design System</div>
        <h2 className="bt-section-h">One token map for two themes.</h2>
        <p className="bt-section-p">Every color maps to a semantic role — action, surface, content, warning. Light and dark themes share the same role structure, so swapping themes never breaks hierarchy.</p>
        <p className="bt-section-p">12 surface roles. 4 elevation levels. 1 accent.</p>
      </div>
      <div className="bt-section-art is-tinted-dark">
        <img src="../../assets/images/aicommunity-hero.jpg" alt=""/>
      </div>
    </section>

    <section className="bt-metrics">
      <div className="bt-metrics-inner">
        <div>
          <div className="bt-metric-num">+148%</div>
          <h3 className="bt-metric-h">Daily active sessions</h3>
          <p className="bt-metric-p">Measured in private beta, weeks 4–8 vs. baseline.</p>
        </div>
        <div>
          <div className="bt-metric-num">3.2×</div>
          <h3 className="bt-metric-h">Prompt re-use</h3>
          <p className="bt-metric-p">Users iterating on community-shared prompts vs. authoring from scratch.</p>
        </div>
        <div>
          <div className="bt-metric-num">9 / 10</div>
          <h3 className="bt-metric-h">"Would recommend"</h3>
          <p className="bt-metric-p">Post-beta survey, n=42.</p>
        </div>
      </div>
    </section>

    <section className="bt-gallery">
      <div className="bt-gallery-tile is-tall">
        <img src="../../assets/images/aicommunity-homepage.png" alt=""/>
        <div className="bt-gallery-tile-label">Home feed</div>
      </div>
      <div className="bt-gallery-tile">
        <img src="../../assets/images/aicommunity-trending.png" alt=""/>
        <div className="bt-gallery-tile-label">Trending</div>
      </div>
      <div className="bt-gallery-tile">
        <img src="../../assets/images/aicommunity-search.png" alt=""/>
        <div className="bt-gallery-tile-label">Search</div>
      </div>
    </section>

    <section className="bt-up-next">
      <h2 className="bt-up-next-h">Up next</h2>
      <div className="bt-up-next-row">
        <a className="bt-up-next-card">
          <div>
            <div className="bt-up-next-eyebrow">Edtech · 2025</div>
            <div className="bt-up-next-title">Stumbldoor — The Future of Reading</div>
          </div>
          <div className="bt-card-arrow"><ArrowUR/></div>
        </a>
        <a className="bt-up-next-card">
          <div>
            <div className="bt-up-next-eyebrow">Founder Tools · 2025</div>
            <div className="bt-up-next-title">Spark Up — Startup readiness</div>
          </div>
          <div className="bt-card-arrow"><ArrowUR/></div>
        </a>
      </div>
    </section>
  </article>
);

const App = () => (
  <div data-screen-label="Big-Tech Project Surfaces">
    <Nav/>
    <ProjectsIndex/>
    <ProjectDetail/>
  </div>
);

// Expose components for cross-file use (full-site.html bundles this in)
Object.assign(window, { BTArrowUR: ArrowUR, BTNav: Nav, BTCard: Card, BTProjectsIndex: ProjectsIndex, BTProjectDetail: ProjectDetail, BTApp: App, BTPROJECTS: PROJECTS });

// Only mount on the standalone index.html (it has #root and no #full-site-root)
if (document.getElementById("root") && !document.getElementById("full-site-root")) {
  ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
}
