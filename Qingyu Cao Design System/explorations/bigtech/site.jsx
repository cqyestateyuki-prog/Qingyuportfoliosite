/**
 * Big-Tech full-site demo.
 * Reuses BTProjectsIndex, BTProjectDetail from bigtech.jsx (exported to window).
 */

const FullNav = () => (
  <nav className="bt-nav">
    <div className="bt-nav-inner">
      <div className="bt-nav-logo">Qingyu Cao</div>
      <div className="bt-nav-items">
        <a>Home</a><a className="is-active">Work</a><a>About</a><a>Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <>
    <section className="bt-hero">
      <div className="bt-hero-eyebrow">Product Designer · Engineer · NYC</div>
      <h1 className="bt-hero-h1">
        Design that ships.<br/>
        <span className="accent">Code that lasts.</span>
      </h1>
      <p className="bt-hero-sub">
        I'm Qingyu — a product designer who builds, tests, and ships across AI tooling, edtech, and game UX.
      </p>
      <div className="bt-hero-cta-row">
        <button className="bt-btn bt-btn-primary">View my work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
        <button className="bt-btn bt-btn-ghost">Download resume</button>
      </div>
    </section>
    <div className="bt-hero-showcase">
      <div className="bt-hero-showcase-inner">
        <img src="../../assets/images/aicommunity-homepage.png" alt="Featured product"/>
      </div>
    </div>
  </>
);

const About = () => (
  <>
    <section className="bt-about">
      <div className="bt-about-eyebrow">About</div>
      <h2 className="bt-about-h">A designer who codes, &amp; an engineer who designs.</h2>
      <p className="bt-about-p">My favorite shipping cadence is Friday: <b>a real merge, a real screenshot, a real user</b>.</p>
      <p className="bt-about-p">I work at the intersection of design, AI tooling, and game systems — drawing fast, prototyping faster, and always testing on a friend before shipping.</p>
    </section>
    <div className="bt-skills">
      {[
        {n:"01", h:"Product Design", p:"End-to-end UI/UX for web and mobile, grounded in research and rapid prototyping."},
        {n:"02", h:"Design Engineering", p:"React, TypeScript, Tailwind. Bridge between Figma and production."},
        {n:"03", h:"AI Tooling", p:"Practical AI integrations — agents, prompt design, retrieval systems."},
        {n:"04", h:"Game UX", p:"3D worlds, social play, and interactive narratives in Unity."}
      ].map(s => (
        <div key={s.n} className="bt-skill">
          <div className="bt-skill-num">— {s.n}</div>
          <h3 className="bt-skill-h">{s.h}</h3>
          <p className="bt-skill-p">{s.p}</p>
        </div>
      ))}
    </div>
  </>
);

const Contact = () => (
  <section className="bt-contact">
    <div className="bt-contact-card">
      <h2 className="bt-contact-h">Have a project<br/>worth shipping?</h2>
      <p className="bt-contact-p">I'm open to product design and design engineering roles. Let's talk.</p>
      <button className="bt-btn bt-btn-primary">cqyestateyuki@gmail.com →</button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bt-footer">
    <div className="bt-footer-inner">
      <div>
        <div className="bt-footer-brand">Qingyu Cao</div>
        <p className="bt-footer-blurb">Product designer &amp; engineer based in New York. Currently building tools for the AI-first product era.</p>
      </div>
      <div>
        <div className="bt-footer-h">Work</div>
        <ul className="bt-footer-list"><li>All projects</li><li>AI tooling</li><li>Edtech</li><li>Games</li></ul>
      </div>
      <div>
        <div className="bt-footer-h">Connect</div>
        <ul className="bt-footer-list"><li>Email</li><li>LinkedIn</li><li>GitHub</li><li>Read.cv</li></ul>
      </div>
      <div>
        <div className="bt-footer-h">More</div>
        <ul className="bt-footer-list"><li>About</li><li>Resume</li><li>Writing</li></ul>
      </div>
    </div>
    <div className="bt-footer-bar">
      <span>© 2026 Qingyu Cao</span>
      <span>Made in New York</span>
    </div>
  </footer>
);

const FullSite = () => (
  <div data-screen-label="Big-Tech Full Site">
    <FullNav/>
    <Hero/>
    <window.BTProjectsIndex/>
    <About/>
    <window.BTProjectDetail/>
    <Contact/>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("full-site-root")).render(<FullSite/>);
