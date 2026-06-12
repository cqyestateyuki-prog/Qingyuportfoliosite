/**
 * Qingyu Cao Portfolio — UI Kit
 *
 * React/JSX recreation of the portfolio's signature surfaces, in one file
 * so it can be opened directly via index.html.
 *
 * Tokens: ../../colors_and_type.css
 */

const { useState, useEffect, useRef } = React;

// ---------- Lucide-style strokes (size, stroke=2, never filled) ---------- //
const Icon = ({ d, size = 20, children, viewBox = "0 0 24 24" }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children || <path d={d} />}
  </svg>
);
const IconDownload = (p) => <Icon size={p.size}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></Icon>;
const IconChevronDown = (p) => <Icon size={p.size}><path d="m6 9 6 6 6-6"/></Icon>;
const IconArrowUp = (p) => <Icon size={p.size}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></Icon>;
const IconSend = (p) => <Icon size={p.size}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Icon>;
const IconHeart = (p) => <Icon size={p.size}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></Icon>;
const IconGlobe = (p) => <Icon size={p.size}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>;
const IconMail = (p) => <Icon size={p.size}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></Icon>;
const IconMapPin = (p) => <Icon size={p.size}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>;
const IconGithub = (p) => <Icon size={p.size}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></Icon>;
const IconLinkedin = (p) => <Icon size={p.size}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Icon>;
const IconPalette = (p) => <Icon size={p.size}><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="13" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="10" cy="19.5" r="2.5"/><path d="m16 7-3.5 3.5L8 12l3 4 5-5"/></Icon>;
const IconGamepad = (p) => <Icon size={p.size}><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/></Icon>;
const IconBars = (p) => <Icon size={p.size}><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></Icon>;
const IconSpark = (p) => <Icon size={p.size}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></Icon>;

// ---------- Project data (matches portfolio /data/projects.js) ---------- //
const PROJECTS = [
  { id: "ai-community", title: "AI Community Platform", tags: ["AI", "UIUX"],
    techs: ["Next.js", "TypeScript", "Tailwind"],
    brief: "Modern AI community focused on AI conversation sharing, prompt engineering, and community events.",
    img: "../../assets/images/aicommunity-homepage.png", featured: true },
  { id: "music-encounter", title: "Music Encounter", tags: ["Game"],
    techs: ["Unity", "C#", "3D"],
    brief: "Third-person 3D open-world social adventure set in a fantasy musical world.",
    grad: "var(--grad-game)", featured: true },
  { id: "stumbldoor", title: "Stumbldoor", tags: ["UIUX", "Product Design"],
    techs: ["React", "Figma"],
    brief: "Door-to-door real-estate prospecting tool with neighborhood routing and AI lead scoring.",
    img: "../../assets/images/aicommunity-trending.png" },
  { id: "excel-ai", title: "Excel AI Agent", tags: ["AI", "Programming"],
    techs: ["Python", "OpenAI", "Streamlit"],
    brief: "Autonomous agent that operates on real spreadsheets — formulas, pivots, and explanations.",
    img: "../../assets/images/aicommunity-search.png" },
  { id: "petiboxy", title: "Petiboxy", tags: ["UIUX"],
    techs: ["Figma", "Framer"],
    brief: "Subscription pet supply box — onboarding flow and visual identity for early launch." },
  { id: "ziplink", title: "Ziplink", tags: ["Programming"],
    techs: ["Node", "Postgres"],
    brief: "Tiny URL shortener with link analytics and team folders." },
  { id: "eternal-dreams", title: "Eternal Dreams", tags: ["Game", "Research"],
    techs: ["Unity"],
    brief: "Narrative game research probe on dream-loop mechanics and player attachment." },
  { id: "fishtank", title: "Fishtank", tags: ["UIUX"],
    techs: ["Figma"],
    brief: "Saltwater aquarium care app with chemistry tracking and reminder cadence." }
];

// ---------- Aurora hero ---------- //
const AuroraHero = () => {
  // Visible immediately — no entry fade. Hero is the always-first paint.
  const visible = true;
  return (
    <section className="qy-hero">
      <div className="qy-hero-grain" aria-hidden="true" />
      <div className="qy-aurora" aria-hidden="true">
        <div className="qy-aurora-inner" />
      </div>
      <div className="qy-pulse qy-pulse-a" />
      <div className="qy-pulse qy-pulse-b" />
      <div className="qy-pulse qy-pulse-c" />
      <div className={"qy-hero-inner " + (visible ? "is-in" : "")}>
        <h1 className="qy-hero-h1">Qingyu Cao</h1>
        <div className="qy-hero-sub">Creative Developer &amp; Designer</div>
        <p className="qy-hero-lede">
          A Product Designer who <b>builds, tests, and ships</b>. I combine design intuition
          with engineering depth to <b>launch real products</b> in fast-moving environments.
        </p>
        <div className="qy-cta-row">
          <button className="qy-btn qy-btn-light">View My Work</button>
          <button className="qy-btn qy-btn-outline-light"><IconDownload size={18}/>Resume</button>
        </div>
      </div>
      <div className="qy-hero-chevron"><IconChevronDown size={32}/></div>
    </section>
  );
};

// ---------- Glassy nav ---------- //
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

// ---------- Showcase (featured) ---------- //
const Showcase = () => {
  const featured = PROJECTS.filter(p => p.featured);
  return (
    <section className="qy-showcase">
      <div className="qy-section-head">
        <h2 className="qy-h2 qy-grad-text">Selected Work</h2>
        <p className="qy-section-sub">Projects I'm proud to ship.</p>
      </div>
      <div className="qy-showcase-grid">
        {featured.map((p, i) => (
          <a key={p.id} className={"qy-showcase-card " + (i === 0 ? "is-wide" : "")} href="#">
            <div className="qy-showcase-art" style={{ background: p.grad || "var(--gradient-primary)" }}>
              {p.img && <img src={p.img} alt="" />}
            </div>
            <div className="qy-showcase-meta">
              <div className="qy-tag-row">
                {p.tags.map(t => <span key={t} className="qy-tag qy-tag-purple">{t}</span>)}
              </div>
              <div className="qy-showcase-title">{p.title}</div>
              <div className="qy-showcase-brief">{p.brief}</div>
              <div className="qy-link">View case study →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

// ---------- Dark grid (More Projects) ---------- //
const FILTERS = ["All", "AI", "UIUX", "Product Design", "Programming", "Game", "Research"];
const DarkGrid = () => {
  const [active, setActive] = useState("All");
  const visible = PROJECTS.filter(p => active === "All" || p.tags.includes(active));
  return (
    <section className="qy-dark">
      <div className="qy-section-head qy-on-dark">
        <h2 className="qy-h2 qy-on-dark-title">More Projects</h2>
        <div className="qy-filter-row">
          {FILTERS.map(f => (
            <button key={f} className={"qy-filter " + (active === f ? "is-active" : "")}
                    onClick={() => setActive(f)}>{f.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <div className="qy-dark-grid">
        {visible.map(p => (
          <a key={p.id} className="qy-dark-card" href="#">
            <div className="qy-dark-art" style={{ background: p.grad || "linear-gradient(135deg,#1a1530,#433a6b)" }}>
              {p.img && <img src={p.img} alt="" />}
            </div>
            <div className="qy-dark-body">
              <div className="qy-tag-row">
                {p.tags.map(t => <span key={t} className="qy-tag qy-tag-on-dark">{t}</span>)}
              </div>
              <div className="qy-dark-title">{p.title}</div>
              <div className="qy-dark-brief">{p.brief}</div>
              <div className="qy-tech-row">
                {(p.techs || []).slice(0, 4).map(t => <span key={t} className="qy-tech">#{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="qy-dark-cta-row">
        <button className="qy-btn qy-btn-glow">View All Projects</button>
      </div>
    </section>
  );
};

// ---------- About + skills ---------- //
const SKILLS = [
  { icon: <IconPalette size={28}/>, title: "UI/UX Design", desc: "Web and mobile interfaces grounded in user research and rapid prototyping." },
  { icon: <IconGamepad size={28}/>, title: "Game Design", desc: "3D worlds, social play, and interactive narratives. Unity-first." },
  { icon: <IconBars size={28}/>, title: "Marketing", desc: "Brand, positioning, and growth for early-stage products." },
  { icon: <IconSpark size={28}/>, title: "Social", desc: "Editorial cadence, motion-driven posts, and cross-platform identity." }
];
const About = () => (
  <section className="qy-about">
    <div className="qy-about-grid">
      <div>
        <h2 className="qy-h2 qy-grad-text">About Me</h2>
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
            <div className="qy-skill-ico">{s.icon}</div>
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

// ---------- Contact + footer ---------- //
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
      <span>© 2025 Qingyu Cao. Made with <IconHeart size={14}/> and lots of coffee.</span>
      <span className="qy-footer-soft">Built with React &amp; Tailwind CSS</span>
    </div>
  </footer>
);

const App = () => (
  <div className="qy-app">
    <Navbar />
    <AuroraHero />
    <Showcase />
    <DarkGrid />
    <About />
    <Contact />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
