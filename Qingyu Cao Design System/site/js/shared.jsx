/**
 * site/js/shared.jsx — page-shared bits: nav, footer, project data, tiny icons.
 * Loads BEFORE each page's own jsx. Exports to window.
 */

const PROJECTS = [
  { id: "ai-community", title: "AI Built-in Community Platform",
    eyebrow: "AI Product Design", year: "2025",
    role: "Lead Designer · Frontend", duration: "4 months", team: "Solo",
    stack: "Figma · Next.js · TypeScript",
    tagline: "An in-app community system that turns isolated AI use into collaborative discovery.",
    tags: ["AI", "UIUX", "Programming"], fill: "fill-purple", size: "is-feature",
    img: "../assets/images/aicommunity-homepage.png" },
  { id: "stumbldoor", title: "Stumbldoor", eyebrow: "Edtech", year: "2025",
    tagline: "Reimagining the library experience for modern readers.",
    tags: ["UIUX", "Research"], fill: "fill-dark", size: "is-large",
    poster: "The Future of Reading" },
  { id: "spark-up", title: "Spark Up", eyebrow: "Founder Tools", year: "2025",
    tagline: "A readiness check-in for first-time founders.",
    tags: ["AI", "Product"], fill: "fill-mint", size: "is-small",
    img: "../assets/images/aicommunity-trending.png" },
  { id: "excel-ai", title: "Excel AI Agent", eyebrow: "AI Agent", year: "2024",
    tagline: "Natural language for spreadsheets — formulas, pivots, and explanations.",
    tags: ["AI", "Programming"], fill: "fill-blue", size: "is-half",
    img: "../assets/images/aicommunity-search.png" },
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

const ArrowUR = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const ArrowR = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const Sparkle = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
  </svg>
);

const Nav = ({ active }) => {
  const items = [
    { id: "home", label: "Home", href: "./home.html" },
    { id: "work", label: "Work", href: "./work.html" },
    { id: "more", label: "Projects", href: "./more.html" },
    { id: "ai-lab", label: "AI Lab", href: "./ai-lab.html" },
    { id: "about", label: "About", href: "./about.html" },
  ];
  return (
    <nav className="bt-nav">
      <div className="bt-nav-inner">
        <a href="./home.html" className="bt-nav-logo" style={{ color: "inherit", textDecoration: "none" }}>Qingyu Cao</a>
        <div className="bt-nav-items">
          {items.map(it => (
            <a key={it.id} href={it.href} className={active === it.id ? "is-active" : ""}>{it.label}</a>
          ))}
          <a href="./contact.html" className="bt-nav-cta">Contact →</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bt-footer">
    <div className="bt-footer-inner">
      <div>
        <div className="bt-footer-brand">Qingyu Cao</div>
        <p className="bt-footer-blurb">Product designer &amp; engineer based in New York. Currently building tools for the AI-first product era.</p>
      </div>
      <div>
        <div className="bt-footer-h">Pages</div>
        <ul className="bt-footer-list">
          <li><a href="./home.html" style={{color: "inherit"}}>Home</a></li>
          <li><a href="./work.html" style={{color: "inherit"}}>Work</a></li>
          <li><a href="./more.html" style={{color: "inherit"}}>All projects</a></li>
          <li><a href="./ai-lab.html" style={{color: "inherit"}}>AI Lab</a></li>
        </ul>
      </div>
      <div>
        <div className="bt-footer-h">Connect</div>
        <ul className="bt-footer-list"><li>Email</li><li>LinkedIn</li><li>GitHub</li><li>Read.cv</li></ul>
      </div>
      <div>
        <div className="bt-footer-h">More</div>
        <ul className="bt-footer-list"><li><a href="./about.html" style={{color: "inherit"}}>About</a></li><li>Resume</li><li>Writing</li></ul>
      </div>
    </div>
    <div className="bt-footer-bar">
      <span>© 2026 Qingyu Cao</span>
      <span>Made in New York</span>
    </div>
  </footer>
);

// Project card (re-used on Home + Work pages)
const Card = ({ p, href }) => {
  const isFeature = p.size === "is-feature";
  const isLarge = p.size === "is-large";
  return (
    <a className={`bt-card ${p.fill} ${p.size}`} href={href || "./project.html"}>
      {isFeature && (
        <>
          <div className="bt-card-text">
            <div className="bt-card-eyebrow">{p.eyebrow}</div>
            <div className="bt-tag-row">{p.tags.map(t => <span key={t} className="bt-tag">{t}</span>)}</div>
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
                <div style={{ fontSize: isLarge ? 48 : 28, fontWeight: 600,
                  color: p.fill === "fill-dark" ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.85)",
                  letterSpacing: "-.02em", lineHeight: 1.05, textAlign: "center", padding: 24 }}>
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

Object.assign(window, { PROJECTS, ArrowUR, ArrowR, Sparkle, Nav, Footer, Card });
