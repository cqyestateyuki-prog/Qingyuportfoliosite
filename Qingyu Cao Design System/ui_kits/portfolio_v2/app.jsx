/**
 * Qingyu Cao Portfolio — UI Kit v2
 *
 * Tracks the live site (portfolio.qingyucao.com) more closely:
 *  - Hero: word constellation + giant QINGYU + spaced PRODUCT DESIGNER caption
 *  - Selected Work: asymmetric editorial rows (text left / framed mockup right)
 *  - More Projects: stacked tags above title, hashtag techs, segmented filter
 *  - Project Detail: numbered sections, sticky TOC, callout boxes
 *
 * Tokens: ../../colors_and_type.css  + portfolio.css (base) + v2.css (deltas)
 */

const { useState, useEffect, useRef } = React;

// ---------- Lucide-style strokes ---------- //
const Icon = ({ size = 20, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const IconDownload = (p) => <Icon size={p.size}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></Icon>;
const IconChevronDown = (p) => <Icon size={p.size}><path d="m6 9 6 6 6-6"/></Icon>;
const IconArrowUp = (p) => <Icon size={p.size}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></Icon>;
const IconArrowRight = (p) => <Icon size={p.size}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>;
const IconSend = (p) => <Icon size={p.size}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Icon>;
const IconHeart = (p) => <Icon size={p.size}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></Icon>;
const IconGlobe = (p) => <Icon size={p.size}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>;
const IconMail = (p) => <Icon size={p.size}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></Icon>;
const IconMapPin = (p) => <Icon size={p.size}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>;
const IconGithub = (p) => <Icon size={p.size}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></Icon>;
const IconLinkedin = (p) => <Icon size={p.size}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Icon>;

// ---------- Project data ---------- //
const PROJECTS = [
  { id: "ai-community", title: "AI Built-in Community Platform",
    tags: ["AI", "UIUX", "Programming", "Product Design", "Research"],
    techs: ["Figma", "React", "TypeScript", "Next.js"],
    brief: "An in-app integrated community system designed for AI Tools.",
    img: "../../assets/images/aicommunity-homepage.png",
    headline: "AI Built-in Community Platform", category: "AI Product Design & Development" },
  { id: "stumbldoor", title: "Stumbldoor",
    tags: ["UIUX", "Research"],
    techs: ["Figma", "Wireframe", "Prototype", "Visual Design"],
    brief: "An innovative digital platform that reimagines the traditional library experience for modern users.",
    headline: ["The", "Future of", "Reading"], category: "Edtech" },
  { id: "spark-up", title: "Spark Up",
    tags: ["AI", "Product Design", "UIUX", "Programming", "Research"],
    techs: ["Figma", "Next.js", "Tailwind CSS", "OpenAI API"],
    brief: "A startup readiness tool that helps first-time founders understand where they stand and what to do next." },
  { id: "excel-ai", title: "Excel AI Agent",
    tags: ["AI", "Programming", "Product Design"],
    techs: ["AI Agent development", "HTML", "Python", "WebSocket"],
    brief: "A natural language-powered Excel data analysis assistant that enables non-technical users to query spreadsheets.",
    img: "../../assets/images/aicommunity-search.png" },
  { id: "music-encounter", title: "Music Encounter",
    tags: ["Game", "Product Design"],
    techs: ["Unity", "C#", "3D Modeling", "Game Design"],
    brief: "Third-person 3D open-world social adventure set in a fantasy musical world." },
  { id: "petiboxy", title: "Petiboxy",
    tags: ["UIUX", "Product Design"],
    techs: ["Figma", "Framer", "Brand Identity"],
    brief: "Subscription pet supply box — onboarding flow and visual identity for early launch." },
  { id: "ziplink", title: "Ziplink",
    tags: ["Programming", "Product Design"],
    techs: ["Node.js", "Postgres", "TypeScript"],
    brief: "Tiny URL shortener with link analytics and team folders." },
  { id: "eternal-dreams", title: "Eternal Dreams",
    tags: ["Game", "Research"],
    techs: ["Unity", "Narrative Design"],
    brief: "Narrative game research probe on dream-loop mechanics and player attachment." }
];

// ---------- Word constellation data ---------- //
const HERO_WORDS = [
  { t: "PROTOTYPE",   x: 40, y: 6,  s: 28 }, { t: "IMPACT",      x: 64, y: 9,  s: 30 },
  { t: "EMPATHY",     x: 8,  y: 14, s: 26 }, { t: "RESEARCH",    x: 22, y: 22, s: 18 },
  { t: "CRAFT",       x: 78, y: 22, s: 28 }, { t: "STRATEGY",    x: 4,  y: 36, s: 18 },
  { t: "USER-CENTRIC",x: 80, y: 50, s: 18 }, { t: "ITERATION",   x: 12, y: 50, s: 16 },
  { t: "RIGOR",       x: 28, y: 60, s: 18 }, { t: "LISTEN",      x: 70, y: 56, s: 17 },
  { t: "CLARITY",     x: 60, y: 68, s: 22 }, { t: "SIMPLICITY",  x: 82, y: 70, s: 24 },
  { t: "INNOVATION",  x: 18, y: 76, s: 18 }, { t: "STORYTELLING",x: 48, y: 84, s: 17 },
  { t: "DETAIL",      x: 32, y: 90, s: 18 }, { t: "SYSTEMS",     x: 66, y: 38, s: 16 }
];
const HERO_PARTICLES = [
  { x: 86, y: 32, d: 0 }, { x: 88, y: 38, d: .8 }, { x: 84, y: 44, d: 1.2 },
  { x: 78, y: 36, d: .4 }, { x: 80, y: 28, d: 1.6 }, { x: 76, y: 50, d: 2.0 },
  { x: 12, y: 84, d: .6 }, { x: 18, y: 82, d: 1.4 }
];

// ---------- Hero v2 ---------- //
const HeroV2 = () => (
  <section className="qy-hero-v2">
    <div className="qy-hero-grain" aria-hidden="true" />
    <div className="qy-words" aria-hidden="true">
      {HERO_WORDS.map((w, i) => (
        <span key={i} className="qy-word" style={{ left: `${w.x}%`, top: `${w.y}%`, fontSize: w.s }}>{w.t}</span>
      ))}
    </div>
    <div className="qy-particles" aria-hidden="true">
      {HERO_PARTICLES.map((p, i) => (
        <div key={i} className="qy-particle" style={{ left: `${p.x}%`, top: `${p.y}%`,
          animation: `qy-pulse 3s ease-in-out ${p.d}s infinite` }} />
      ))}
    </div>
    <div className="qy-hero-v2-inner">
      <h1 className="qy-marquee">QINGYU</h1>
      <div className="qy-marquee-cap">PRODUCT DESIGNER</div>
      <p className="qy-hero-v2-lede">
        A Product Designer who <b>builds, tests, and ships</b>. I combine design intuition
        with engineering depth to <b>launch real products</b> in fast-moving environments.
      </p>
      <div className="qy-cta-row">
        <button className="qy-btn qy-btn-light">View Works</button>
        <button className="qy-btn qy-btn-outline-light"><IconDownload size={18}/>Resume</button>
      </div>
    </div>
    <div className="qy-hero-chevron"><IconChevronDown size={28}/></div>
  </section>
);

// ---------- Glassy nav (unchanged behaviour) ---------- //
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"qy-nav " + (scrolled ? "is-scrolled" : "")}>
      <div className="qy-nav-inner">
        <div className="qy-nav-logo qy-grad-text">Home</div>
        <div className="qy-nav-items">
          <span className="qy-nav-link is-active">Work</span>
          <span className="qy-nav-link">About</span>
          <span className="qy-nav-link">Contact</span>
          <span className="qy-lang"><IconGlobe size={14}/>EN</span>
        </div>
      </div>
    </nav>
  );
};

// ---------- Selected Work v2 — asymmetric editorial rows ---------- //
const FEATURE_ROWS = [
  {
    p: PROJECTS[0],
    artStyle: { background: "#f3f0ff" },
    artNode: <img src="../../assets/images/aicommunity-homepage.png" alt="AI Community Platform" />
  },
  {
    p: PROJECTS[1],
    artStyle: { background: "#0a0a14" },
    artNode: (
      <>
        <div className="qy-feature-art-glow" />
        <div className="qy-feature-art-particle" style={{ top: "20%", left: "18%" }} />
        <div className="qy-feature-art-particle" style={{ top: "32%", left: "12%" }} />
        <div className="qy-feature-art-particle" style={{ top: "62%", left: "22%" }} />
        <div className="qy-feature-art-particle" style={{ top: "70%", left: "10%" }} />
        <div className="qy-feature-art-headline">
          <span>The</span><span>Future of</span><span>Reading</span>
        </div>
      </>
    )
  }
];

const SelectedWorkV2 = () => (
  <section className="qy-showcase-v2">
    <div className="qy-section-head">
      <span className="qy-eyebrow">Selected Work</span>
      <h2>Projects I've shipped &amp; refined.</h2>
    </div>

    {FEATURE_ROWS.map((row, i) => (
      <div key={row.p.id} className={"qy-feature-row " + (i % 2 === 1 ? "is-flipped" : "")}>
        <div className="qy-feature-text">
          <div className="qy-feature-eyebrow">{String(i + 1).padStart(2, "0")} / Featured</div>
          <div className="qy-feature-tags">
            {row.p.tags.slice(0, 3).map(t => <span key={t} className="qy-tag qy-tag-purple">{t}</span>)}
          </div>
          <h3 className="qy-feature-title">{row.p.title}</h3>
          <p className="qy-feature-tagline">{row.p.brief}</p>
          <a className="qy-feature-link">View Project <IconArrowRight size={14}/></a>
        </div>
        <div>
          <div className="qy-feature-art" style={row.artStyle}>{row.artNode}</div>
          <div className="qy-feature-foot">
            <span>{row.p.category || row.p.tags[0]}</span>
            <a className="qy-link">Click to explore →</a>
          </div>
        </div>
      </div>
    ))}
  </section>
);

// ---------- More Projects v2 ---------- //
const FILTERS = ["All", "AI", "UIUX", "Product Design", "Programming", "Game", "Research"];
const MoreProjectsV2 = () => {
  const [active, setActive] = useState("All");
  const visible = PROJECTS.filter(p => active === "All" || p.tags.includes(active));
  return (
    <section className="qy-dark">
      <div className="qy-section-head qy-on-dark" style={{ marginBottom: 0 }}>
        <h2 className="qy-on-dark-title">More Projects</h2>
        <div className="qy-filter-row-v2">
          {FILTERS.map(f => (
            <button key={f} className={"qy-filter-v2 " + (active === f ? "is-active" : "")}
                    onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
      </div>
      <div className="qy-dark-grid-v2">
        {visible.map(p => (
          <a key={p.id} className="qy-dark-card-v2" href="#">
            <div className="qy-dark-card-v2-art">
              {p.img ? <img src={p.img} alt="" /> : <span className="qy-dark-card-v2-art-label">{p.title}</span>}
            </div>
            <div className="qy-dark-card-v2-body">
              <div className="qy-dark-card-v2-tags">
                {p.tags.map(t => <span key={t} className="qy-tag">{t}</span>)}
              </div>
              <div className="qy-dark-card-v2-title">{p.title}</div>
              <div className="qy-dark-card-v2-brief">{p.brief}</div>
              <div className="qy-dark-card-v2-techs">
                {(p.techs || []).slice(0, 4).map(t => <span key={t}>#{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

// ---------- About + skills (unchanged) ---------- //
const SKILLS = [
  { title: "UI/UX Design", desc: "Web and mobile interfaces grounded in user research and rapid prototyping." },
  { title: "Game Design",  desc: "3D worlds, social play, and interactive narratives. Unity-first." },
  { title: "Product Strategy", desc: "Brand, positioning, and growth for early-stage products." },
  { title: "AI Tooling",   desc: "Practical AI integrations — agents, prompt design, retrieval." }
];
const About = () => (
  <section className="qy-about">
    <div className="qy-about-grid">
      <div>
        <span className="qy-eyebrow" style={{ display: "block", color: "var(--custom-purple)", fontSize: 13, letterSpacing: ".3em", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>About Me</span>
        <h2 className="qy-h2" style={{ background: "none", WebkitTextFillColor: "initial", color: "var(--fg)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-.02em", marginBottom: 32 }}>
          A builder who designs, &amp; a designer who codes.
        </h2>
        <p>I'm a product designer who codes. My favorite shipping cadence is Friday: a real merge, a real screenshot, a real user.</p>
        <p>Most of my work lives at the intersection of <b>design</b>, <b>game systems</b>, and <b>AI tooling</b> — which means I draw a lot, prototype faster than I'd like to admit, and always test on a friend before I ship.</p>
        <p>Currently in NYC. Open to product design, design engineering, and game UX roles.</p>
        <div className="qy-tag-stack">
          <span className="qy-tag qy-tag-purple">Builder</span>
          <span className="qy-tag qy-tag-blue">Researcher</span>
          <span className="qy-tag qy-tag-green">Storyteller</span>
        </div>
      </div>
      <div className="qy-skills-grid">
        {SKILLS.map(s => (
          <div key={s.title} className="qy-skill">
            <div className="qy-skill-ico" style={{ borderRadius: 12 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20 }}>
                {s.title.charAt(0)}
              </span>
            </div>
            <div className="qy-skill-title">{s.title}</div>
            <div className="qy-skill-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="qy-stats">
      <div><div className="qy-stat-num qy-grad-text">15+</div><div className="qy-stat-lab">Projects Completed</div></div>
      <div><div className="qy-stat-num qy-grad-text">3+</div><div className="qy-stat-lab">Years Experience</div></div>
    </div>
  </section>
);

// ---------- Project Detail surface ---------- //
const TOC_ITEMS = ["Overview", "The Problem", "Research", "Iteration", "Technical", "Final Solution", "Impact & Reflection"];
const ProjectDetail = () => {
  const [active, setActive] = useState("Overview");
  return (
    <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid var(--border)" }}>
      <div className="qy-kit-label">
        <span className="qy-kit-label-num">06 /</span>
        <span className="qy-kit-label-name">Project Detail Surface</span>
      </div>
      <div className="qy-detail">
        <div>
          <div className="qy-detail-overview">
            <p className="qy-detail-eyebrow">Project Overview</p>
            <h1 className="qy-detail-h1">Transform AI Learning Into Community Experience</h1>
            <p>
              AI applications such as ChatGPT, Grok, and Claude currently <a className="qy-em-link">lack built-in communities</a>,
              leaving everyday users without a dedicated space to learn, share, and connect. AI Built-in Community Platform <a className="qy-em-link">fills this critical gap</a> by
              offering an intuitive, accessible experience that <a className="qy-em-link">transforms isolated AI use into collaborative discovery</a>.
              The platform supports multiple post types: conversation &amp; thoughts sharing, prompt discovery, and community
              events along with trending search and a prompt voting system. This combination enables users not only to <a className="qy-em-link">learn
              useful AI tips but also to express themselves, exchange ideas, and feel a sense of belonging.</a> For product
              owners, the community drives <a className="qy-em-link">user retention</a>.
            </p>
          </div>

          <div className="qy-callout">
            <div className="qy-callout-h">The Challenge</div>
            <ol>
              <li>How might I create an ecosystem where users connect, collaborate, and create value for one another?</li>
              <li>How might I enable users to easily share their AI usage experiences and insights?</li>
              <li>How might I help users quickly find relevant, high-quality AI content, prompts, and events?</li>
              <li>How might I lower the barrier to entry for AI users to participate in community learning?</li>
              <li>How might I ensure the quality and reliability of shared AI content and prompts?</li>
            </ol>
          </div>

          <div className="qy-detail-section" id="the-problem">
            <div className="qy-detail-num">01</div>
            <h2 className="qy-detail-h2">Color &amp; Token System</h2>
            <div className="qy-detail-sublab">Semantic roles, not just a palette</div>
            <p>
              Every color maps to a purpose: cyan signals action, violet carries brand authority, and four surface
              layers create depth. Light and dark themes share the same semantic structure, so switching themes never
              breaks the hierarchy.
            </p>
            <p>
              I started with one guiding principle: <b>executive clarity</b>. When the canvas spans 12+ pages, the system
              has to do the thinking for the user — what's important, what's secondary, what's context.
            </p>
          </div>

          <div className="qy-detail-section" id="research">
            <div className="qy-detail-num">02</div>
            <h2 className="qy-detail-h2">Research &amp; Discovery</h2>
            <div className="qy-detail-sublab">Talking to 12 founders before drawing a pixel</div>
            <p>
              I ran semi-structured interviews with twelve early-stage founders. The recurring pain wasn't lack of
              tools — it was lack of <b>continuity</b> between tools. Insights were scattered across Slack threads,
              voice memos, and pinned tabs, and nobody had a way to braid them back together.
            </p>
          </div>

          <div className="qy-detail-section" id="iteration">
            <div className="qy-detail-num">03</div>
            <h2 className="qy-detail-h2">Iteration &amp; Prototype</h2>
            <div className="qy-detail-sublab">Three rounds, each one tighter than the last</div>
            <p>
              The first round shipped wide — five competing nav models, three onboarding flows. Round two cut to one
              clear winner. Round three was just polish: copy, pacing, the friction points users had circled in red.
            </p>
          </div>

          <div className="qy-detail-foot">
            <button className="qy-back-top" aria-label="Back to top"><IconArrowUp size={18}/></button>
          </div>
        </div>

        <aside className="qy-toc">
          <ul className="qy-toc-list">
            {TOC_ITEMS.map(item => (
              <li key={item} className={active === item ? "is-active" : ""} onClick={() => setActive(item)}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

// ---------- Contact + footer (unchanged) ---------- //
const Contact = () => (
  <section className="qy-contact">
    <div className="qy-section-head">
      <h2 className="qy-h2 qy-grad-text">Let's Connect</h2>
      <p className="qy-section-sub">Have a project? A coffee? An idea half-baked? I want to hear it.</p>
    </div>
    <div className="qy-contact-grid">
      <div>
        <h3 className="qy-h3">Get in Touch</h3>
        <div className="qy-contact-row">
          <div className="qy-contact-ico"><IconMail size={20}/></div>
          <div><div className="qy-contact-lab">Email</div><div className="qy-contact-val">cqyestateyuki@gmail.com</div></div>
        </div>
        <div className="qy-contact-row">
          <div className="qy-contact-ico"><IconMapPin size={20}/></div>
          <div><div className="qy-contact-lab">Location</div><div className="qy-contact-val">New York, NY</div></div>
        </div>
        <div className="qy-socials">
          <a className="qy-social"><IconGithub size={20}/></a>
          <a className="qy-social"><IconLinkedin size={20}/></a>
        </div>
      </div>
      <form className="qy-form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="qy-h3">Send a Message</h3>
        <div className="qy-form-row">
          <label>Name<input placeholder="Your name"/></label>
          <label>Email<input placeholder="you@example.com"/></label>
        </div>
        <label>Subject<input placeholder="Project subject"/></label>
        <label>Message<textarea rows="4" placeholder="Your message"/></label>
        <button className="qy-btn qy-btn-glow qy-btn-wide" type="submit"><IconSend size={18}/>Send Message</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="qy-footer">
    <div className="qy-footer-grid">
      <div>
        <div className="qy-footer-logo qy-grad-text">Qingyu Cao</div>
        <p className="qy-footer-blurb">Creative Developer &amp; Designer specializing in innovative digital experiences. Let's create something amazing together.</p>
      </div>
      <div>
        <div className="qy-footer-h">Quick Links</div>
        <ul><li>Work</li><li>About</li><li>Contact</li></ul>
      </div>
      <div>
        <div className="qy-footer-h">Get in Touch</div>
        <p className="qy-footer-soft">cqyestateyuki@gmail.com<br/>New York, NY</p>
      </div>
    </div>
    <div className="qy-footer-bar">
      <span>© 2026 Qingyu Cao. Made with <IconHeart size={14}/> and lots of coffee.</span>
      <span className="qy-footer-soft">Built with React &amp; Tailwind CSS</span>
    </div>
  </footer>
);

// ---------- Section labels (so the kit reads as a kit) ---------- //
const KitLabel = ({ num, name, onDark }) => (
  <div className={"qy-kit-label " + (onDark ? "is-on-dark" : "")}>
    <span className="qy-kit-label-num">{num} /</span>
    <span className="qy-kit-label-name">{name}</span>
  </div>
);

const App = () => (
  <div className="qy-app" data-screen-label="Portfolio UI Kit v2">
    <Navbar />
    <HeroV2 />
    <KitLabel num="01" name="Hero — Word Constellation" />
    <KitLabel num="02" name="Selected Work — Editorial Rows" />
    <SelectedWorkV2 />
    <KitLabel num="03" name="More Projects — Filtered Grid" onDark={false} />
    <MoreProjectsV2 />
    <KitLabel num="04" name="About" />
    <About />
    <ProjectDetail />
    <KitLabel num="07" name="Contact" />
    <Contact />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
