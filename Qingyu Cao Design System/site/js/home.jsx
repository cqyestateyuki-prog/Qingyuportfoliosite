/**
 * Home — hero + featured 3 projects + AI Lab teaser + about teaser.
 * Keeps the Apple/Google feel with a tighter, marketing-style flow.
 */

const Hero = () => (
  <>
    <section className="bt-hero">
      <div className="bt-hero-pills">
        <span className="is-on">Product Design</span><span>Design Engineering</span><span>AI Tooling</span>
      </div>
      <h1 className="bt-hero-h1">
        Design that ships.<br/>
        <span className="accent">Code that lasts.</span>
      </h1>
      <p className="bt-hero-sub">
        I'm Qingyu — a product designer who builds, tests, and ships. Across AI tooling, edtech, and game UX.
      </p>
      <div className="bt-hero-cta-row">
        <a className="bt-btn bt-btn-primary" href="./work.html">View my work <ArrowR/></a>
        <a className="bt-btn bt-btn-ghost" href="./about.html">About me</a>
      </div>
    </section>
    <div className="bt-hero-showcase">
      <div className="bt-hero-showcase-inner">
        <img src="../assets/images/aicommunity-homepage.png" alt="Featured product"/>
      </div>
    </div>
  </>
);

const FeaturedWork = () => {
  const featured = PROJECTS.slice(0, 4); // first 4 only on home
  return (
    <>
      <header className="bt-page-head" style={{ paddingBottom: 24 }}>
        <div className="bt-eyebrow">Selected Work · 2024–2026</div>
        <h2 className="bt-h1" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Recent projects.</h2>
        <p className="bt-lede">A few highlights — research, design, and shipped product.</p>
      </header>
      <div className="bt-grid">
        {featured.map(p => <Card key={p.id} p={p}/>)}
      </div>
      <div style={{ textAlign: "center", paddingBottom: 160 }}>
        <a className="bt-btn bt-btn-ghost" href="./work.html">See all 7 projects <ArrowR/></a>
      </div>
    </>
  );
};

const AILabTeaser = () => (
  <section className="bt-ai-section" style={{ padding: "120px 24px" }}>
    <div className="bt-ai-inner">
      <div className="bt-ai-eyebrow">— AI Lab</div>
      <h2 className="bt-ai-h">Designing <span className="accent">with</span> AI,<br/>not just for it.</h2>
      <p className="bt-ai-sub">
        A live notebook of generative experiments — covers, mood boards, brand systems, and one-off tools. Made with Midjourney, Flux, and a lot of prompt rewrites.
      </p>
      <div className="bt-ai-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="bt-ai-tile art-1"><div className="bt-ai-tile-meta"><span>flux · 02</span><span className="seed">#7a3f</span></div></div>
        <div className="bt-ai-tile art-2"><div className="bt-ai-tile-meta"><span>mj · 06</span><span className="seed">#9c11</span></div></div>
        <div className="bt-ai-tile art-3"><div className="bt-ai-tile-meta"><span>flux · 04</span><span className="seed">#3e88</span></div></div>
        <div className="bt-ai-tile art-4"><div className="bt-ai-tile-meta"><span>mj · 08</span><span className="seed">#bc20</span></div></div>
      </div>
      <div style={{ marginTop: 48 }}>
        <a className="bt-btn bt-btn-primary" style={{ background: "#fff", color: "#1d1d1f" }} href="./ai-lab.html">
          Enter the lab <ArrowR/>
        </a>
      </div>
    </div>
  </section>
);

const AboutTeaser = () => (
  <section className="bt-about" style={{ padding: "160px 24px 80px" }}>
    <div className="bt-about-eyebrow">About</div>
    <h2 className="bt-about-h">A designer who codes, &amp; an engineer who designs.</h2>
    <p className="bt-about-p">
      My favorite shipping cadence is Friday: <b>a real merge, a real screenshot, a real user.</b>
    </p>
    <div style={{ marginTop: 32 }}>
      <a className="bt-btn bt-btn-ghost" href="./about.html">More about me <ArrowR/></a>
    </div>
  </section>
);

const App = () => (
  <div className="bt-page" data-screen-label="01 Home">
    <Nav active="home"/>
    <main className="bt-page-body">
      <Hero/>
      <FeaturedWork/>
      <AILabTeaser/>
      <AboutTeaser/>
    </main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
