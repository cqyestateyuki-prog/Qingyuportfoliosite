/**
 * Project — case study detail. Standalone page version.
 * Same structure as the original detail layout, with corrected
 * relative image paths for /site/ root and real "up next" links.
 */

const ProjectDetail = () => (
  <article className="bt-detail">
    <header className="bt-detail-hero" style={{ paddingTop: 120 }}>
      <div className="bt-detail-eyebrow">AI Product Design · 2025</div>
      <h1 className="bt-detail-h1">Transform AI learning into community experience.</h1>
      <p className="bt-detail-sub">An in-app integrated community designed for AI tools — bridging isolated tool use with collaborative discovery, retention, and shared expertise.</p>
    </header>

    <div className="bt-detail-media">
      <div className="bt-detail-media-inner">
        <img src="../assets/images/aicommunity-homepage.png" alt="AI Community Platform"/>
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
        <img src="../assets/images/aicommunity-search.png" alt=""/>
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
        <img src="../assets/images/aicommunity-trending.png" alt=""/>
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
        <img src="../assets/images/aicommunity-hero.jpg" alt=""/>
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
        <img src="../assets/images/aicommunity-homepage.png" alt=""/>
        <div className="bt-gallery-tile-label">Home feed</div>
      </div>
      <div className="bt-gallery-tile">
        <img src="../assets/images/aicommunity-trending.png" alt=""/>
        <div className="bt-gallery-tile-label">Trending</div>
      </div>
      <div className="bt-gallery-tile">
        <img src="../assets/images/aicommunity-search.png" alt=""/>
        <div className="bt-gallery-tile-label">Search</div>
      </div>
    </section>

    <section className="bt-up-next">
      <h2 className="bt-up-next-h">Up next</h2>
      <div className="bt-up-next-row">
        <a className="bt-up-next-card" href="./project.html">
          <div>
            <div className="bt-up-next-eyebrow">Edtech · 2025</div>
            <div className="bt-up-next-title">Stumbldoor — The Future of Reading</div>
          </div>
          <div className="bt-card-arrow"><ArrowUR/></div>
        </a>
        <a className="bt-up-next-card" href="./project.html">
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
  <div className="bt-page" data-screen-label="07 Project Detail">
    <Nav active="work"/>
    <main className="bt-page-body"><ProjectDetail/></main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
