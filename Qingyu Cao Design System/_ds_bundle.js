/* @ds-bundle: {"format":3,"namespace":"QingyuCaoDesignSystem_019ddc","components":[],"sourceHashes":{"explorations/bigtech/bigtech.jsx":"2e45f9486eb3","explorations/bigtech/site.jsx":"a17105e30bc1","explorations/cards.jsx":"7b8df053484b","explorations/design-canvas.jsx":"5d0e39003628","explorations/hero-motion/hero.jsx":"e77b2f11d9ab","explorations/hero-motion/tweaks-panel.jsx":"6591467622ed","site/js/about.jsx":"997cce292a18","site/js/ai-lab.jsx":"242055b3f6e4","site/js/contact.jsx":"11d41e9ee445","site/js/home.jsx":"fdae4aa030a0","site/js/more.jsx":"dc3c197dd5e4","site/js/project.jsx":"0d12da23af7e","site/js/shared.jsx":"88921ba7bd10","site/js/work.jsx":"3834890d0513","ui_kits/portfolio/app.jsx":"b6ebc87dda10","ui_kits/portfolio_v2/app.jsx":"00ab8bccbafc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QingyuCaoDesignSystem_019ddc = window.QingyuCaoDesignSystem_019ddc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// explorations/bigtech/bigtech.jsx
try { (() => {
/**
 * Big-Tech UIUX — Apple/Google design language
 * Single-page mockup combining:
 *   1. Projects index ("More Projects" replacement)
 *   2. Project Detail page below it
 */

const {
  useState
} = React;

// ---------- Tiny icon ---------- //
const ArrowUR = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));

// ---------- Data ---------- //
const PROJECTS = [{
  id: "ai-community",
  title: "AI Built-in Community Platform",
  eyebrow: "AI Product Design",
  year: "2025",
  role: "Design + Frontend",
  duration: "4 months",
  team: "Solo",
  tagline: "An in-app community system that turns isolated AI use into collaborative discovery.",
  tags: ["AI", "UIUX", "Programming"],
  fill: "fill-purple",
  size: "is-feature",
  img: "../../assets/images/aicommunity-homepage.png"
}, {
  id: "stumbldoor",
  title: "Stumbldoor",
  eyebrow: "Edtech",
  year: "2025",
  tagline: "Reimagining the library experience for modern readers.",
  tags: ["UIUX", "Research"],
  fill: "fill-dark",
  size: "is-large",
  poster: "The Future of Reading"
}, {
  id: "spark-up",
  title: "Spark Up",
  eyebrow: "Founder Tools",
  year: "2025",
  tagline: "A readiness check-in for first-time founders.",
  tags: ["AI", "Product"],
  fill: "fill-mint",
  size: "is-small",
  img: "../../assets/images/aicommunity-trending.png"
}, {
  id: "excel-ai",
  title: "Excel AI Agent",
  eyebrow: "AI Agent",
  year: "2024",
  tagline: "Natural language for spreadsheets — formulas, pivots, and explanations.",
  tags: ["AI", "Programming"],
  fill: "fill-blue",
  size: "is-half",
  img: "../../assets/images/aicommunity-search.png"
}, {
  id: "music-encounter",
  title: "Music Encounter",
  eyebrow: "Game Design",
  year: "2024",
  tagline: "A 3D open-world social adventure set in a fantasy musical world.",
  tags: ["Game", "Product"],
  fill: "fill-pink",
  size: "is-half"
}, {
  id: "petiboxy",
  title: "Petiboxy",
  eyebrow: "Brand & Onboarding",
  year: "2024",
  tagline: "Subscription pet supply box — onboarding flow and visual identity.",
  tags: ["UIUX", "Product"],
  fill: "fill-cream",
  size: "is-half"
}, {
  id: "ziplink",
  title: "Ziplink",
  eyebrow: "Developer Tools",
  year: "2024",
  tagline: "Tiny URL shortener with link analytics and team folders.",
  tags: ["Programming"],
  fill: "fill-cream",
  size: "is-half"
}];

// ---------- Nav ---------- //
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "bt-nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-nav-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-nav-logo"
}, "Qingyu Cao"), /*#__PURE__*/React.createElement("div", {
  className: "bt-nav-items"
}, /*#__PURE__*/React.createElement("a", {
  className: "is-active"
}, "Work"), /*#__PURE__*/React.createElement("a", null, "About"), /*#__PURE__*/React.createElement("a", null, "Writing"), /*#__PURE__*/React.createElement("a", null, "Contact"))));

// ---------- Card ---------- //
const Card = ({
  p
}) => {
  const isFeature = p.size === "is-feature";
  const isLarge = p.size === "is-large";
  return /*#__PURE__*/React.createElement("a", {
    className: `bt-card ${p.fill} ${p.size}`
  }, isFeature && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bt-card-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-card-eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "bt-tag-row"
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "bt-tag"
  }, t))), /*#__PURE__*/React.createElement("h3", {
    className: "bt-card-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "bt-card-tagline"
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-card-meta"
  }, p.year, " \xB7 Case Study"), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-arrow"
  }, /*#__PURE__*/React.createElement(ArrowUR, null)))), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-art"
  }, p.img && /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  }))), !isFeature && /*#__PURE__*/React.createElement(React.Fragment, null, (isLarge || p.img || p.poster) && /*#__PURE__*/React.createElement("div", {
    className: "bt-card-art"
  }, p.img ? /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isLarge ? 48 : 28,
      fontWeight: 600,
      color: p.fill === "fill-dark" ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.85)",
      letterSpacing: "-.02em",
      lineHeight: 1.05,
      textAlign: "center",
      padding: 24
    }
  }, p.poster || p.title)), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "bt-card-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "bt-card-tagline"
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-card-meta"
  }, p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-arrow"
  }, /*#__PURE__*/React.createElement(ArrowUR, null)))));
};

// ---------- Projects Index ---------- //
const FILTERS = ["All Work", "AI", "UIUX", "Product", "Programming", "Game", "Research"];
const ProjectsIndex = () => {
  const [active, setActive] = useState("All Work");
  const visible = PROJECTS.filter(p => active === "All Work" || p.tags.includes(active) || p.eyebrow.toLowerCase().includes(active.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "bt-page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-eyebrow"
  }, "Selected Work \xB7 2024\u20132025"), /*#__PURE__*/React.createElement("h1", {
    className: "bt-h1"
  }, "Projects, in detail."), /*#__PURE__*/React.createElement("p", {
    className: "bt-lede"
  }, "A portfolio of shipped products across AI tooling, edtech, and game design \u2014 each with research, iteration, and the constraints that shaped them.")), /*#__PURE__*/React.createElement("div", {
    className: "bt-filter-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-filter-track"
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "bt-filter " + (active === f ? "is-active" : ""),
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "bt-result-count"
  }, visible.length, " projects")), /*#__PURE__*/React.createElement("div", {
    className: "bt-grid"
  }, visible.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    p: p
  }))));
};

// ---------- Project Detail ---------- //
const ProjectDetail = () => /*#__PURE__*/React.createElement("article", {
  className: "bt-detail"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-anchor"
}, /*#__PURE__*/React.createElement("span", {
  className: "bt-anchor-num"
}, "02 /"), /*#__PURE__*/React.createElement("span", null, "Project Detail Page")), /*#__PURE__*/React.createElement("header", {
  className: "bt-detail-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-detail-eyebrow"
}, "AI Product Design \xB7 2025"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-detail-h1"
}, "Transform AI learning into community experience."), /*#__PURE__*/React.createElement("p", {
  className: "bt-detail-sub"
}, "An in-app integrated community designed for AI tools \u2014 bridging isolated tool use with collaborative discovery, retention, and shared expertise.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-detail-media"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-detail-media-inner"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-homepage.png",
  alt: "AI Community Platform"
}))), /*#__PURE__*/React.createElement("section", {
  className: "bt-facts"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Role"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "Lead Designer \xB7 Frontend")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Duration"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "4 months \xB7 2025")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Team"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "Solo project")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Stack"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "Figma \xB7 Next.js \xB7 TypeScript"))), /*#__PURE__*/React.createElement("section", {
  className: "bt-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-num"
}, "01 \u2014 The Problem"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-section-h"
}, "AI tools feel lonely."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "ChatGPT, Grok, Claude \u2014 every major AI product is a one-on-one chatbox. Users discover prompts on Twitter, copy them in private, and never see how others build on their ideas."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "The opportunity: turn isolated tool use into a shared learning surface.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-section-art is-tinted-purple"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-search.png",
  alt: ""
}))), /*#__PURE__*/React.createElement("div", {
  className: "bt-divider"
}), /*#__PURE__*/React.createElement("section", {
  className: "bt-section is-flipped"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-num"
}, "02 \u2014 Research"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-section-h"
}, "Twelve interviews. One pattern."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "Across twelve early adopters, the recurring pain wasn't lack of features \u2014 it was lack of ", /*#__PURE__*/React.createElement("b", null, "continuity"), ". Insights scattered across Slack threads, Notion docs, and pinned tabs."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "A built-in community thread per conversation became the unifying primitive.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-section-art is-tinted-mint"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-trending.png",
  alt: ""
}))), /*#__PURE__*/React.createElement("section", {
  className: "bt-quote"
}, /*#__PURE__*/React.createElement("p", {
  className: "bt-quote-text"
}, "\"The best community feature isn't a forum. It's a footnote on every prompt that says \u2014 here's how five other people improved this.\""), /*#__PURE__*/React.createElement("div", {
  className: "bt-quote-author"
}, "Design principle, week 3")), /*#__PURE__*/React.createElement("div", {
  className: "bt-divider"
}), /*#__PURE__*/React.createElement("section", {
  className: "bt-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-num"
}, "03 \u2014 Design System"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-section-h"
}, "One token map for two themes."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "Every color maps to a semantic role \u2014 action, surface, content, warning. Light and dark themes share the same role structure, so swapping themes never breaks hierarchy."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "12 surface roles. 4 elevation levels. 1 accent.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-section-art is-tinted-dark"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-hero.jpg",
  alt: ""
}))), /*#__PURE__*/React.createElement("section", {
  className: "bt-metrics"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-metrics-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-metric-num"
}, "+148%"), /*#__PURE__*/React.createElement("h3", {
  className: "bt-metric-h"
}, "Daily active sessions"), /*#__PURE__*/React.createElement("p", {
  className: "bt-metric-p"
}, "Measured in private beta, weeks 4\u20138 vs. baseline.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-metric-num"
}, "3.2\xD7"), /*#__PURE__*/React.createElement("h3", {
  className: "bt-metric-h"
}, "Prompt re-use"), /*#__PURE__*/React.createElement("p", {
  className: "bt-metric-p"
}, "Users iterating on community-shared prompts vs. authoring from scratch.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-metric-num"
}, "9 / 10"), /*#__PURE__*/React.createElement("h3", {
  className: "bt-metric-h"
}, "\"Would recommend\""), /*#__PURE__*/React.createElement("p", {
  className: "bt-metric-p"
}, "Post-beta survey, n=42.")))), /*#__PURE__*/React.createElement("section", {
  className: "bt-gallery"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile is-tall"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-homepage.png",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile-label"
}, "Home feed")), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-trending.png",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile-label"
}, "Trending")), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-search.png",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile-label"
}, "Search"))), /*#__PURE__*/React.createElement("section", {
  className: "bt-up-next"
}, /*#__PURE__*/React.createElement("h2", {
  className: "bt-up-next-h"
}, "Up next"), /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-row"
}, /*#__PURE__*/React.createElement("a", {
  className: "bt-up-next-card"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-eyebrow"
}, "Edtech \xB7 2025"), /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-title"
}, "Stumbldoor \u2014 The Future of Reading")), /*#__PURE__*/React.createElement("div", {
  className: "bt-card-arrow"
}, /*#__PURE__*/React.createElement(ArrowUR, null))), /*#__PURE__*/React.createElement("a", {
  className: "bt-up-next-card"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-eyebrow"
}, "Founder Tools \xB7 2025"), /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-title"
}, "Spark Up \u2014 Startup readiness")), /*#__PURE__*/React.createElement("div", {
  className: "bt-card-arrow"
}, /*#__PURE__*/React.createElement(ArrowUR, null))))));
const App = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "Big-Tech Project Surfaces"
}, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(ProjectsIndex, null), /*#__PURE__*/React.createElement(ProjectDetail, null));

// Expose components for cross-file use (full-site.html bundles this in)
Object.assign(window, {
  BTArrowUR: ArrowUR,
  BTNav: Nav,
  BTCard: Card,
  BTProjectsIndex: ProjectsIndex,
  BTProjectDetail: ProjectDetail,
  BTApp: App,
  BTPROJECTS: PROJECTS
});

// Only mount on the standalone index.html (it has #root and no #full-site-root)
if (document.getElementById("root") && !document.getElementById("full-site-root")) {
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/bigtech/bigtech.jsx", error: String((e && e.message) || e) }); }

// explorations/bigtech/site.jsx
try { (() => {
/**
 * Big-Tech full-site demo.
 * Reuses BTProjectsIndex, BTProjectDetail from bigtech.jsx (exported to window).
 */

const FullNav = () => /*#__PURE__*/React.createElement("nav", {
  className: "bt-nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-nav-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-nav-logo"
}, "Qingyu Cao"), /*#__PURE__*/React.createElement("div", {
  className: "bt-nav-items"
}, /*#__PURE__*/React.createElement("a", null, "Home"), /*#__PURE__*/React.createElement("a", {
  className: "is-active"
}, "Work"), /*#__PURE__*/React.createElement("a", null, "About"), /*#__PURE__*/React.createElement("a", null, "Contact"))));
const Hero = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
  className: "bt-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-eyebrow"
}, "Product Designer \xB7 Engineer \xB7 NYC"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-hero-h1"
}, "Design that ships.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "accent"
}, "Code that lasts.")), /*#__PURE__*/React.createElement("p", {
  className: "bt-hero-sub"
}, "I'm Qingyu \u2014 a product designer who builds, tests, and ships across AI tooling, edtech, and game UX."), /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-cta-row"
}, /*#__PURE__*/React.createElement("button", {
  className: "bt-btn bt-btn-primary"
}, "View my work", /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}))), /*#__PURE__*/React.createElement("button", {
  className: "bt-btn bt-btn-ghost"
}, "Download resume"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-showcase"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-showcase-inner"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/images/aicommunity-homepage.png",
  alt: "Featured product"
}))));
const About = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
  className: "bt-about"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-about-eyebrow"
}, "About"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-about-h"
}, "A designer who codes, & an engineer who designs."), /*#__PURE__*/React.createElement("p", {
  className: "bt-about-p"
}, "My favorite shipping cadence is Friday: ", /*#__PURE__*/React.createElement("b", null, "a real merge, a real screenshot, a real user"), "."), /*#__PURE__*/React.createElement("p", {
  className: "bt-about-p"
}, "I work at the intersection of design, AI tooling, and game systems \u2014 drawing fast, prototyping faster, and always testing on a friend before shipping.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-skills"
}, [{
  n: "01",
  h: "Product Design",
  p: "End-to-end UI/UX for web and mobile, grounded in research and rapid prototyping."
}, {
  n: "02",
  h: "Design Engineering",
  p: "React, TypeScript, Tailwind. Bridge between Figma and production."
}, {
  n: "03",
  h: "AI Tooling",
  p: "Practical AI integrations — agents, prompt design, retrieval systems."
}, {
  n: "04",
  h: "Game UX",
  p: "3D worlds, social play, and interactive narratives in Unity."
}].map(s => /*#__PURE__*/React.createElement("div", {
  key: s.n,
  className: "bt-skill"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-skill-num"
}, "\u2014 ", s.n), /*#__PURE__*/React.createElement("h3", {
  className: "bt-skill-h"
}, s.h), /*#__PURE__*/React.createElement("p", {
  className: "bt-skill-p"
}, s.p)))));
const Contact = () => /*#__PURE__*/React.createElement("section", {
  className: "bt-contact"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-contact-card"
}, /*#__PURE__*/React.createElement("h2", {
  className: "bt-contact-h"
}, "Have a project", /*#__PURE__*/React.createElement("br", null), "worth shipping?"), /*#__PURE__*/React.createElement("p", {
  className: "bt-contact-p"
}, "I'm open to product design and design engineering roles. Let's talk."), /*#__PURE__*/React.createElement("button", {
  className: "bt-btn bt-btn-primary"
}, "cqyestateyuki@gmail.com \u2192")));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "bt-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-brand"
}, "Qingyu Cao"), /*#__PURE__*/React.createElement("p", {
  className: "bt-footer-blurb"
}, "Product designer & engineer based in New York. Currently building tools for the AI-first product era.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-h"
}, "Work"), /*#__PURE__*/React.createElement("ul", {
  className: "bt-footer-list"
}, /*#__PURE__*/React.createElement("li", null, "All projects"), /*#__PURE__*/React.createElement("li", null, "AI tooling"), /*#__PURE__*/React.createElement("li", null, "Edtech"), /*#__PURE__*/React.createElement("li", null, "Games"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-h"
}, "Connect"), /*#__PURE__*/React.createElement("ul", {
  className: "bt-footer-list"
}, /*#__PURE__*/React.createElement("li", null, "Email"), /*#__PURE__*/React.createElement("li", null, "LinkedIn"), /*#__PURE__*/React.createElement("li", null, "GitHub"), /*#__PURE__*/React.createElement("li", null, "Read.cv"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-h"
}, "More"), /*#__PURE__*/React.createElement("ul", {
  className: "bt-footer-list"
}, /*#__PURE__*/React.createElement("li", null, "About"), /*#__PURE__*/React.createElement("li", null, "Resume"), /*#__PURE__*/React.createElement("li", null, "Writing")))), /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-bar"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Qingyu Cao"), /*#__PURE__*/React.createElement("span", null, "Made in New York")));
const FullSite = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "Big-Tech Full Site"
}, /*#__PURE__*/React.createElement(FullNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(window.BTProjectsIndex, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(window.BTProjectDetail, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("full-site-root")).render(/*#__PURE__*/React.createElement(FullSite, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/bigtech/site.jsx", error: String((e && e.message) || e) }); }

// explorations/cards.jsx
try { (() => {
/**
 * 5 different design directions for the More Projects card.
 * Each artboard shows the SAME 3 projects, so you compare apples-to-apples.
 */

const SAMPLES = [{
  id: "ai",
  title: "AI Built-in Community Platform",
  tags: ["AI", "UIUX", "Programming"],
  techs: ["Figma", "React", "TypeScript", "Next.js"],
  brief: "An in-app integrated community system designed for AI Tools.",
  img: "../assets/images/aicommunity-homepage.png",
  poster: "AI"
}, {
  id: "stumb",
  title: "Stumbldoor",
  tags: ["UIUX", "Research"],
  techs: ["Figma", "Wireframe", "Prototype"],
  brief: "Reimagining the traditional library experience for modern users.",
  img: null,
  poster: "The Future of Reading"
}, {
  id: "spark",
  title: "Spark Up",
  tags: ["AI", "Product Design", "Programming"],
  techs: ["Figma", "Next.js", "Tailwind", "OpenAI"],
  brief: "A startup readiness tool that helps first-time founders understand where they stand.",
  img: "../assets/images/aicommunity-trending.png",
  poster: "Spark"
}];

// ============================================================
// A — Editorial Magazine
// ============================================================
const CardA = ({
  p,
  n
}) => /*#__PURE__*/React.createElement("div", {
  className: "exp-card exp-a"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-a-num"
}, "N\xB0 ", String(n).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
  className: "exp-a-img"
}, p.img && /*#__PURE__*/React.createElement("img", {
  src: p.img,
  alt: ""
})), /*#__PURE__*/React.createElement("h3", {
  className: "exp-a-title"
}, p.title), /*#__PURE__*/React.createElement("div", {
  className: "exp-a-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-a-tags"
}, p.tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement("span", {
  key: t
}, t))), /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto"
  }
}, "2025")));

// ============================================================
// B — Brutalist Mono
// ============================================================
const CardB = ({
  p,
  n
}) => /*#__PURE__*/React.createElement("div", {
  className: "exp-card exp-b"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-b-bar"
}, /*#__PURE__*/React.createElement("span", null, "PROJECT_", String(n).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
  className: "dot"
})), /*#__PURE__*/React.createElement("div", {
  className: "exp-b-img"
}, p.img && /*#__PURE__*/React.createElement("img", {
  src: p.img,
  alt: ""
})), /*#__PURE__*/React.createElement("div", {
  className: "exp-b-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-b-tags"
}, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
  key: t
}, t))), /*#__PURE__*/React.createElement("h3", {
  className: "exp-b-title"
}, p.title), /*#__PURE__*/React.createElement("div", {
  className: "exp-b-meta"
}, /*#__PURE__*/React.createElement("span", null, "// ", p.techs[0]), /*#__PURE__*/React.createElement("span", null, "READ \u2192"))));

// ============================================================
// C — Glass Stack
// ============================================================
const CardC = ({
  p
}) => /*#__PURE__*/React.createElement("div", {
  className: "exp-card exp-c"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-c-img"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-c-img-glow"
}), p.img && /*#__PURE__*/React.createElement("img", {
  src: p.img,
  alt: ""
})), /*#__PURE__*/React.createElement("div", {
  className: "exp-c-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-c-tags"
}, p.tags.slice(0, 3).map(t => /*#__PURE__*/React.createElement("span", {
  key: t
}, t))), /*#__PURE__*/React.createElement("h3", {
  className: "exp-c-title"
}, p.title), /*#__PURE__*/React.createElement("p", {
  className: "exp-c-brief"
}, p.brief), /*#__PURE__*/React.createElement("div", {
  className: "exp-c-foot"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-c-techs"
}, p.techs.slice(0, 2).map(t => "#" + t).join(" ")), /*#__PURE__*/React.createElement("div", {
  className: "exp-c-arrow"
}, /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}))))));

// ============================================================
// D — Asymmetric Poster
// ============================================================
const CardD = ({
  p,
  n
}) => /*#__PURE__*/React.createElement("div", {
  className: "exp-card exp-d"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-d-float"
}, p.img ? /*#__PURE__*/React.createElement("img", {
  src: p.img,
  alt: ""
}) : /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontSize: 40,
    fontWeight: 700,
    color: "rgba(255,255,255,.7)",
    letterSpacing: "-.02em",
    textAlign: "center",
    padding: 20,
    lineHeight: 1
  }
}, p.poster)), /*#__PURE__*/React.createElement("div", {
  className: "exp-d-side"
}, p.tags[0], " \xB7 ", String(n).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
  className: "exp-d-num"
}, String(n).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
  className: "exp-d-title"
}, p.title), /*#__PURE__*/React.createElement("p", {
  className: "exp-d-brief"
}, p.brief), /*#__PURE__*/React.createElement("div", {
  className: "exp-d-tags"
}, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
  key: t
}, t))));

// ============================================================
// E — Hover Reveal Minimal
// ============================================================
const CardE = ({
  p
}) => /*#__PURE__*/React.createElement("div", {
  className: "exp-card exp-e"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-e-img"
}, p.img ? /*#__PURE__*/React.createElement("img", {
  src: p.img,
  alt: ""
}) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "exp-e-img-fallback"
}), /*#__PURE__*/React.createElement("div", {
  className: "exp-e-img-label"
}, p.poster))), /*#__PURE__*/React.createElement("div", {
  className: "exp-e-overlay"
}), /*#__PURE__*/React.createElement("div", {
  className: "exp-e-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "exp-e-tags"
}, p.tags.slice(0, 3).map(t => /*#__PURE__*/React.createElement("span", {
  key: t
}, t))), /*#__PURE__*/React.createElement("h3", {
  className: "exp-e-title"
}, p.title), /*#__PURE__*/React.createElement("p", {
  className: "exp-e-brief"
}, p.brief), /*#__PURE__*/React.createElement("div", {
  className: "exp-e-cta"
}, "View case study \u2192")));

// ============================================================
// Stack — three cards rendered with the same direction
// ============================================================
const Stack = ({
  Card,
  label,
  desc
}) => /*#__PURE__*/React.createElement("div", {
  className: "exp-stack"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "exp-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "exp-desc"
}, desc)), SAMPLES.map((p, i) => /*#__PURE__*/React.createElement(Card, {
  key: p.id,
  p: p,
  n: i + 1
})));

// ============================================================
// Canvas
// ============================================================
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "exp-bg"
}, /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
  id: "more-projects",
  title: "More Projects \u2014 Card Directions",
  subtitle: "Five distinct design treatments, all rendering the same three projects. Drag to reorder, double-click any artboard to focus."
}, /*#__PURE__*/React.createElement(DCArtboard, {
  id: "a",
  label: "A \xB7 Editorial Magazine",
  width: 384,
  height: 1640
}, /*#__PURE__*/React.createElement(Stack, {
  Card: CardA,
  label: "A \u2014 Editorial",
  desc: "Big serif titles, hairline dividers, no chrome. Reads like a printed feature column. Restrained metadata at the bottom."
})), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "b",
  label: "B \xB7 Brutalist Mono",
  width: 384,
  height: 1640
}, /*#__PURE__*/React.createElement(Stack, {
  Card: CardB,
  label: "B \u2014 Brutalist",
  desc: "Sharp 2px borders, monospaced metadata, solid color header bar. Hover snaps offset for a print-block effect. High contrast, opinionated."
})), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "c",
  label: "C \xB7 Glass Stack",
  width: 384,
  height: 1640
}, /*#__PURE__*/React.createElement(Stack, {
  Card: CardC,
  label: "C \u2014 Glass",
  desc: "Frosted glass surface, inner top-edge highlight, soft purple radial glow under the image. Hover lifts and rotates the corner arrow."
})), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "d",
  label: "D \xB7 Asymmetric Poster",
  width: 384,
  height: 1700
}, /*#__PURE__*/React.createElement(Stack, {
  Card: CardD,
  label: "D \u2014 Poster",
  desc: "Image floats above the card, rotated label runs up the right edge, oversized ghost number behind the title. Magazine-spread feel."
})), /*#__PURE__*/React.createElement(DCArtboard, {
  id: "e",
  label: "E \xB7 Hover Reveal",
  width: 384,
  height: 1640
}, /*#__PURE__*/React.createElement(Stack, {
  Card: CardE,
  label: "E \u2014 Hover Reveal",
  desc: "Image fills the card. Rest = title only. Hover slides up the brief, tags, and CTA. Cleanest possible grid; rewards exploration."
})))));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/cards.jsx", error: String((e && e.message) || e) }); }

// explorations/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), labels/titles are inline-editable,
// and any artboard can be opened in a fullscreen focus overlay (←/→/Esc).
// State persists to a .design-canvas.state.json sidecar via the host
// bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px}', '.dc-grip{cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{cursor:pointer;border-radius:4px;padding:3px 6px;display:flex;align-items:center;transition:background .12s}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-expand{position:absolute;bottom:100%;right:0;margin-bottom:5px;z-index:2;opacity:0;transition:opacity .12s,background .12s;', '  width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center}', '.dc-expand:hover{background:rgba(0,0,0,.06);color:#2a251f}', '[data-dc-slot]:hover .dc-expand{opacity:1}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, focused
// artboard). Order/titles/labels persist to a .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const srcIds = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (!aid) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const srcOrder = artboards.map(a => a.props.id ?? a.props.label);
  const sec = ctx && sid && ctx.section(sid) || {};
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 56px'
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: -4,
      marginBottom: 4,
      color: DC.label
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    onPointerDown: e => e.stopPropagation(),
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    const ns = sectionOrder[(secIdx + d + sectionOrder.length) % sectionOrder.length];
    const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
    if (first) ctx.setFocus(`${ns}/${first}`);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/design-canvas.jsx", error: String((e && e.message) || e) }); }

// explorations/hero-motion/hero.jsx
try { (() => {
/**
 * Hero Motion Lab — signature animated hero for the Qingyu Cao system.
 * All effects use the purple/aurora tokens from colors_and_type.css.
 * Effects are individually toggleable so you can compare combinations.
 */

const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

/* Shared smoothed pointer (normalized -0.5..0.5 of viewport) */
function usePointer() {
  const ref = useRef({
    x: 0,
    y: 0,
    sx: 0,
    sy: 0,
    px: 0,
    py: 0,
    active: false
  });
  useEffect(() => {
    const onMove = e => {
      const p = ref.current;
      p.px = e.clientX;
      p.py = e.clientY;
      p.x = e.clientX / window.innerWidth - 0.5;
      p.y = e.clientY / window.innerHeight - 0.5;
      p.active = true;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}

/* ============================================================
   1. FLUID AURORA — canvas of soft purple light blobs.
   One blob is pulled toward the cursor for a liquid-light feel.
   ============================================================ */
function AuroraCanvas({
  pointer,
  intensity,
  mode
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  useEffect(() => {
    if (mode !== "fluid") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0,
      h = 0,
      dpr = Math.min(2, window.devicePixelRatio || 1);
    const PALETTE = [[151, 152, 238],
    // #9798ee periwinkle
    [139, 92, 246],
    // #8B5CF6 primary
    [161, 95, 223],
    // #a15fdf secondary
    [77, 100, 230],
    // #4d64e6 blue
    [196, 181, 253] // #C4B5FD light
    ];
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const N = 6;
    const blobs = Array.from({
      length: N
    }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: lerp(180, 360, Math.random()),
      col: PALETTE[i % PALETTE.length],
      follow: i === 0 // first blob chases cursor
    }));
    const draw = () => {
      const k = intensity / 100;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const p = pointer.current;
      const mx = (p.x + 0.5) * w,
        my = (p.y + 0.5) * h;
      for (const b of blobs) {
        if (b.follow && p.active) {
          b.x = lerp(b.x, mx, 0.06 * (0.4 + k));
          b.y = lerp(b.y, my, 0.06 * (0.4 + k));
        } else {
          b.x += b.vx * (0.3 + k * 1.4);
          b.y += b.vy * (0.3 + k * 1.4);
          if (b.x < -b.r) b.x = w + b.r;
          if (b.x > w + b.r) b.x = -b.r;
          if (b.y < -b.r) b.y = h + b.r;
          if (b.y > h + b.r) b.y = -b.r;
        }
        const rad = b.r * (0.7 + k * 0.6);
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);
        const [r, gg, bb] = b.col;
        const a = (b.follow ? 0.5 : 0.34) * (0.5 + k * 0.7);
        g.addColorStop(0, `rgba(${r},${gg},${bb},${a})`);
        g.addColorStop(1, `rgba(${r},${gg},${bb},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [mode, intensity, pointer]);
  if (mode !== "fluid") return null;
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "hm-aurora-canvas",
    "aria-hidden": "true"
  });
}

/* ============================================================
   2. CURSOR TRAIL — purple "splash" particle trail.
   ============================================================ */
function CursorTrail({
  enabled,
  intensity
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0,
      h = 0,
      dpr = Math.min(2, window.devicePixelRatio || 1);
    let particles = [];
    let last = {
      x: 0,
      y: 0,
      has: false
    };
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const COLORS = ["#8981d7", "#a15fdf", "#9798ee", "#C4B5FD"];
    const k = intensity / 100;
    const onMove = e => {
      if (!last.has) {
        last = {
          x: e.clientX,
          y: e.clientY,
          has: true
        };
        return;
      }
      const dx = e.clientX - last.x,
        dy = e.clientY - last.y;
      const dist = Math.hypot(dx, dy);
      const count = clamp(Math.floor(dist / 6), 0, 5) + 1;
      for (let i = 0; i < count; i++) {
        const t = i / count;
        particles.push({
          x: lerp(last.x, e.clientX, t) + (Math.random() - 0.5) * 6,
          y: lerp(last.y, e.clientY, t) + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.3,
          life: 1,
          size: lerp(2, 6, Math.random()) * (0.6 + k * 0.8),
          col: COLORS[Math.random() * COLORS.length | 0]
        });
      }
      if (particles.length > 320) particles = particles.slice(-320);
      last = {
        x: e.clientX,
        y: e.clientY,
        has: true
      };
    };
    window.addEventListener("pointermove", onMove);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.012;
        p.life -= 0.022;
        if (p.life <= 0) continue;
        ctx.globalAlpha = clamp(p.life, 0, 1) * 0.9;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.4);
        g.addColorStop(0, p.col);
        g.addColorStop(1, "rgba(137,129,215,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      particles = particles.filter(p => p.life > 0);
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [enabled, intensity]);
  if (!enabled) return null;
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "hm-trail-canvas",
    "aria-hidden": "true"
  });
}

/* ============================================================
   3. DECRYPTED TEXT — letter-scramble reveal.
   ============================================================ */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>/\\".split("");
const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function DecryptedText({
  text,
  trigger,
  speed = 1
}) {
  const [display, setDisplay] = useState(text.split(""));
  const timer = useRef(0);
  const run = useCallback(() => {
    clearInterval(timer.current);
    const chars = text.split("");
    if (reduceMotion()) {
      setDisplay(chars);
      return;
    }
    let revealed = 0;
    let tick = 0;
    const period = Math.max(1, Math.round(3 / speed));
    // setInterval keeps firing even when the tab is throttled, so the reveal
    // always resolves (rAF would freeze on a hidden tab and never finish).
    timer.current = setInterval(() => {
      tick++;
      if (tick % period === 0) revealed++;
      if (revealed > chars.length) {
        setDisplay(chars);
        clearInterval(timer.current);
        return;
      }
      setDisplay(chars.map((c, i) => {
        if (c === " ") return " ";
        if (i < revealed) return c;
        return GLYPHS[Math.random() * GLYPHS.length | 0];
      }));
    }, 33);
  }, [text, speed]);
  useEffect(() => {
    run();
    return () => clearInterval(timer.current);
  }, [trigger, run]);
  return /*#__PURE__*/React.createElement("span", {
    className: "hm-decrypt",
    onMouseEnter: run
  }, display.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: c === text[i] ? "hm-d-on" : "hm-d-off"
  }, c || "\u00A0")));
}

/* Typewriter reveal */
function Typewriter({
  text,
  trigger,
  speed = 1
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, 70 / speed);
    return () => clearInterval(id);
  }, [text, trigger, speed]);
  return /*#__PURE__*/React.createElement("span", {
    className: "hm-typer"
  }, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    className: "hm-caret",
    style: {
      opacity: n < text.length ? 1 : 0
    }
  }, "|"));
}

/* ============================================================
   4. MAGNETIC BUTTON
   ============================================================ */
function MagneticButton({
  enabled,
  className,
  children,
  onClick
}) {
  const ref = useRef(null);
  const onMove = e => {
    if (!enabled) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px) scale(1.06)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    className: className + (enabled ? " hm-magnetic" : ""),
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick: onClick
  }, children);
}

/* ============================================================
   HERO
   ============================================================ */
const IconDownload = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  x2: "12",
  y1: "15",
  y2: "3"
}));
const IconChevron = ({
  size = 30
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
function Hero({
  t
}) {
  const pointer = usePointer();
  const [trigger, setTrigger] = useState(0);
  const layerRef = useRef(null);

  /* Parallax: shift inner layers with smoothed pointer */
  useEffect(() => {
    if (!t.parallax) {
      if (layerRef.current) layerRef.current.style.transform = "";
      return;
    }
    let raf = 0;
    let cx = 0,
      cy = 0;
    const loop = () => {
      const p = pointer.current;
      cx = lerp(cx, p.x, 0.06);
      cy = lerp(cy, p.y, 0.06);
      const el = layerRef.current;
      if (el) {
        el.style.setProperty("--px", (cx * 26).toFixed(2) + "px");
        el.style.setProperty("--py", (cy * 22).toFixed(2) + "px");
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [t.parallax, pointer]);
  const speed = t.intensity / 60;
  let nameEl;
  if (t.nameReveal === "decrypt") nameEl = /*#__PURE__*/React.createElement(DecryptedText, {
    text: "Qingyu Cao",
    trigger: trigger,
    speed: speed
  });else if (t.nameReveal === "typewriter") nameEl = /*#__PURE__*/React.createElement(Typewriter, {
    text: "Qingyu Cao",
    trigger: trigger,
    speed: speed
  });else if (t.nameReveal === "shimmer") nameEl = /*#__PURE__*/React.createElement("span", {
    className: "hm-shimmer"
  }, "Qingyu Cao");else nameEl = /*#__PURE__*/React.createElement("span", {
    className: "hm-fadeup",
    key: trigger
  }, "Qingyu Cao");
  return /*#__PURE__*/React.createElement("section", {
    className: "hm-hero " + (t.grain ? "has-grain" : ""),
    "data-screen-label": "Hero"
  }, t.bgMode === "curtain" && /*#__PURE__*/React.createElement("div", {
    className: "hm-curtain",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hm-curtain-inner"
  })), t.bgMode === "mesh" && /*#__PURE__*/React.createElement("div", {
    className: "hm-mesh",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(AuroraCanvas, {
    pointer: pointer,
    intensity: t.intensity,
    mode: t.bgMode
  }), /*#__PURE__*/React.createElement("div", {
    className: "hm-pulse hm-pulse-a"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hm-pulse hm-pulse-b"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hm-pulse hm-pulse-c"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hm-hero-inner",
    ref: layerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "hm-eyebrow",
    style: {
      ["--depth"]: 0.4
    }
  }, "Portfolio \xB7 NYC"), /*#__PURE__*/React.createElement("h1", {
    className: "hm-h1",
    style: {
      ["--depth"]: 1
    },
    onClick: () => setTrigger(v => v + 1)
  }, nameEl), /*#__PURE__*/React.createElement("div", {
    className: "hm-sub",
    style: {
      ["--depth"]: 0.7
    }
  }, "Creative Developer & Designer"), /*#__PURE__*/React.createElement("p", {
    className: "hm-lede",
    style: {
      ["--depth"]: 0.5
    }
  }, "A Product Designer who ", /*#__PURE__*/React.createElement("b", null, "builds, tests, and ships"), ". I combine design intuition with engineering depth to ", /*#__PURE__*/React.createElement("b", null, "launch real products"), " in fast-moving environments."), /*#__PURE__*/React.createElement("div", {
    className: "hm-cta-row",
    style: {
      ["--depth"]: 0.6
    }
  }, /*#__PURE__*/React.createElement(MagneticButton, {
    enabled: t.magnetic,
    className: "hm-btn hm-btn-light"
  }, "View My Work"), /*#__PURE__*/React.createElement(MagneticButton, {
    enabled: t.magnetic,
    className: "hm-btn hm-btn-outline"
  }, /*#__PURE__*/React.createElement(IconDownload, {
    size: 18
  }), " Resume")), /*#__PURE__*/React.createElement("button", {
    className: "hm-replay",
    onClick: () => setTrigger(v => v + 1)
  }, "\u21BA Replay reveal")), /*#__PURE__*/React.createElement("div", {
    className: "hm-chevron",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(IconChevron, {
    size: 30
  })));
}
window.Hero = Hero;
window.CursorTrail = CursorTrail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/hero-motion/hero.jsx", error: String((e && e.message) || e) }); }

// explorations/hero-motion/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/hero-motion/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// site/js/about.jsx
try { (() => {
/**
 * About — full page. Bio, skill stats, timeline, what-i-believe.
 */

const SKILLS = [{
  n: "01",
  t: "Product Design",
  d: "End-to-end UX, from research to shipped UI.",
  value: "8 yrs"
}, {
  n: "02",
  t: "Front-end Engineering",
  d: "React, TypeScript, Tailwind. Comfortable in any modern stack.",
  value: "6 yrs"
}, {
  n: "03",
  t: "AI Tooling",
  d: "Prompt engineering, agent UX, generative imagery pipelines.",
  value: "2 yrs"
}, {
  n: "04",
  t: "Game UX",
  d: "3D worldbuilding, social systems, onboarding for play.",
  value: "1 yr"
}];
const TIMELINE = [{
  y: "2026",
  t: "Independent",
  d: "Building Spark Up & Excel AI Agent. Consulting on AI product UX."
}, {
  y: "2025",
  t: "AI Community Platform",
  d: "Lead designer & engineer on the AI Built-in Community Platform — solo build to v1."
}, {
  y: "2024",
  t: "Stumbldoor",
  d: "Reimagined the library experience — research, design, prototype."
}, {
  y: "2022",
  t: "MFA, Carnegie Mellon",
  d: "Master's in Design, focus on emerging tech & speculative interfaces."
}];
const Beliefs = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16
  }
}, [{
  h: "Ship Friday.",
  p: "A merged PR, a real screenshot, a real user. Anything else is rehearsal."
}, {
  h: "Design with the model.",
  p: "AI is a third teammate — not a button. Treat it as such and the work changes."
}, {
  h: "Edit harder.",
  p: "Subtraction is the underrated craft. Most polish is just deleting the things that aren't right."
}, {
  h: "Everything is research.",
  p: "A bad prototype is a published paper. Failures get more honest answers than surveys."
}].map(b => /*#__PURE__*/React.createElement("div", {
  key: b.h,
  style: {
    background: "#f5f5f7",
    borderRadius: 24,
    padding: 32
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: "-.01em",
    margin: "0 0 12px"
  }
}, b.h), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: "#6e6e73",
    lineHeight: 1.55,
    margin: 0
  }
}, b.p))));
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "05 About"
}, /*#__PURE__*/React.createElement(Nav, {
  active: "about"
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body"
}, /*#__PURE__*/React.createElement("header", {
  className: "bt-page-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-eyebrow"
}, "\u2014 About"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-h1"
}, "Designer who codes,", /*#__PURE__*/React.createElement("br", null), "engineer who designs."), /*#__PURE__*/React.createElement("p", {
  className: "bt-lede"
}, "I'm Qingyu Cao \u2014 a product designer who builds, tests, and ships. I bridge the gap between idea and interface, between brand and pixel, between vision and implementation.")), /*#__PURE__*/React.createElement("section", {
  className: "bt-skills",
  style: {
    paddingBottom: 80
  }
}, SKILLS.map(s => /*#__PURE__*/React.createElement("div", {
  key: s.n,
  className: "bt-skill"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-skill-num"
}, s.n), /*#__PURE__*/React.createElement("h3", {
  className: "bt-skill-title"
}, s.t), /*#__PURE__*/React.createElement("p", {
  className: "bt-skill-desc"
}, s.d), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    color: "var(--custom-purple)"
  }
}, s.value)))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#1d1d1f",
    color: "#fff",
    padding: "140px 24px",
    borderRadius: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: "#c4b5fd",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    marginBottom: 16
  }
}, "\u2014 Timeline"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-h1",
  style: {
    fontSize: "clamp(40px, 5vw, 64px)",
    color: "#fff",
    marginBottom: 64
  }
}, "The road so far."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    rowGap: 32,
    columnGap: 48
  }
}, TIMELINE.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
  key: r.y
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 14,
    color: "#86868b",
    paddingTop: 4
  }
}, r.y), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: "1px solid rgba(255,255,255,.1)",
    paddingTop: 16
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: "-.01em",
    margin: "0 0 8px",
    color: "#fff"
  }
}, r.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: "rgba(255,255,255,.6)",
    lineHeight: 1.55,
    margin: 0
  }
}, r.d))))))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 24px",
    background: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-eyebrow"
}, "\u2014 What I believe"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-h1",
  style: {
    fontSize: "clamp(32px, 4vw, 56px)",
    marginBottom: 64
  }
}, "Four working principles."), /*#__PURE__*/React.createElement(Beliefs, null)))), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/about.jsx", error: String((e && e.message) || e) }); }

// site/js/ai-lab.jsx
try { (() => {
/**
 * AI Lab — full page dedicated to AI-generated imagery + experiments.
 * Sections:
 *  - Hero w/ animated prompt input
 *  - "Series" — a single concept with multiple variations
 *  - Tools used / process
 *  - Mini experiments (small projects that use AI)
 */

const {
  useState,
  useEffect
} = React;
const PROMPTS = ["soft minimal cover art for a reading app, lavender and cream", "isometric AI dashboard, glassmorphism, 8k, octane render", "abstract neural network, generative, midnight blue", "playful onboarding mascot for a pet subscription brand"];
const TypingPrompt = () => {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState("typing"); // typing -> hold -> erasing
  useEffect(() => {
    const target = PROMPTS[idx];
    let t;
    if (phase === "typing") {
      if (shown.length < target.length) t = setTimeout(() => setShown(target.slice(0, shown.length + 1)), 35);else t = setTimeout(() => setPhase("hold"), 1800);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erasing"), 1200);
    } else {
      if (shown.length > 0) t = setTimeout(() => setShown(target.slice(0, shown.length - 1)), 18);else {
        setIdx((idx + 1) % PROMPTS.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [shown, phase, idx]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-prompt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-prompt-icon"
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-prompt-text"
  }, shown, /*#__PURE__*/React.createElement("span", {
    className: "ai-cur"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bt-ai-prompt-tag"
  }, "flux-1.1-pro"));
};

// ----- Hero -----
const AIHero = () => /*#__PURE__*/React.createElement("section", {
  className: "bt-ai-section",
  style: {
    paddingTop: 120,
    paddingBottom: 120
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-eyebrow"
}, "\u2014 AI Lab \xB7 2025 ongoing"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-ai-h"
}, "A studio inside a ", /*#__PURE__*/React.createElement("span", {
  className: "accent"
}, "studio.")), /*#__PURE__*/React.createElement("p", {
  className: "bt-ai-sub"
}, "Generative imagery, agent prototypes, prompt-driven systems. The AI Lab is where I treat the model as a collaborator \u2014 not a button."), /*#__PURE__*/React.createElement(TypingPrompt, null), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "flux \xB7 02"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#7a3f"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-2 is-tall"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "mj \xB7 06"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#9c11"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-3"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "flux \xB7 04"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#3e88"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "mj \xB7 08"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#bc20"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-5"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "flux \xB7 11"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#aa48"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "mj \xB7 14"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#dd91"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-7"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "flux \xB7 17"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#5f72"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-8"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "mj \xB7 21"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#ee06")))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tools"
}, /*#__PURE__*/React.createElement("span", {
  className: "bt-ai-tools-label"
}, "Tools"), /*#__PURE__*/React.createElement("span", null, "midjourney v7"), /*#__PURE__*/React.createElement("span", null, "flux 1.1 pro"), /*#__PURE__*/React.createElement("span", null, "runway gen-3"), /*#__PURE__*/React.createElement("span", null, "krea"), /*#__PURE__*/React.createElement("span", null, "cursor"), /*#__PURE__*/React.createElement("span", null, "claude 4.5"))));

// ----- Series — same prompt evolved -----
const Series = () => {
  const variants = ["art-1", "art-3", "art-4", "art-5"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      color: "#1d1d1f",
      padding: "140px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 80,
      alignItems: "start",
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bt-eyebrow"
  }, "\u2014 Series 01"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-h1",
    style: {
      fontSize: "clamp(32px, 4vw, 56px)"
    }
  }, "One prompt,", /*#__PURE__*/React.createElement("br", null), "many memories.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "bt-lede",
    style: {
      marginTop: 0
    }
  }, "I treat each generative session like a sketchbook \u2014 same idea, ten directions, then pick. This series started as ", /*#__PURE__*/React.createElement("em", null, "\"a quiet morning, lavender light, paper texture\""), " and ran through Flux variations until something felt like the cover I wanted."), /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-prompt",
    style: {
      background: "#f5f5f7",
      border: "1px solid rgba(0,0,0,.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-prompt-icon"
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-prompt-text",
    style: {
      color: "#1d1d1f"
    }
  }, "a quiet morning, lavender light, paper texture, soft grain, 4:5"), /*#__PURE__*/React.createElement("span", {
    className: "bt-ai-prompt-tag",
    style: {
      background: "rgba(138,129,215,.18)",
      color: "var(--custom-purple)"
    }
  }, "seed:7a3f")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, variants.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v,
    className: `bt-ai-tile ${v}`,
    style: {
      aspectRatio: "4/5"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-ai-tile-meta"
  }, /*#__PURE__*/React.createElement("span", null, "v", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "seed"
  }, "#7a3f"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 32,
      color: "#86868b",
      fontSize: 13,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "steps: 30"), /*#__PURE__*/React.createElement("span", null, "cfg: 7.5"), /*#__PURE__*/React.createElement("span", null, "sampler: euler_a"), /*#__PURE__*/React.createElement("span", null, "seed locked, prompt drift +5%"))));
};

// ----- Process -----
const Process = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#f5f5f7",
    padding: "140px 24px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-eyebrow"
}, "\u2014 Process"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-h1",
  style: {
    fontSize: "clamp(32px, 4vw, 56px)",
    marginBottom: 64
  }
}, "Less prompt-fishing.", /*#__PURE__*/React.createElement("br", null), "More art-directing."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  }
}, [{
  n: "01",
  t: "Brief like a designer",
  d: "Aesthetic references, mood, palette, format. The model needs the same brief a human collaborator would."
}, {
  n: "02",
  t: "Generate in series",
  d: "Always 8–16 candidates per direction. Variation is data — pick the strongest, regenerate around it."
}, {
  n: "03",
  t: "Edit, don't accept",
  d: "Bring outputs into Figma. Mask, recolor, retype. The AI is a sketch, not a final asset."
}].map(s => /*#__PURE__*/React.createElement("div", {
  key: s.n,
  style: {
    background: "#fff",
    borderRadius: 24,
    padding: 40,
    border: "1px solid rgba(0,0,0,.04)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 500,
    color: "var(--custom-purple)",
    letterSpacing: ".04em",
    marginBottom: 24
  }
}, s.n), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: "-.01em",
    marginTop: 0,
    marginBottom: 12
  }
}, s.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: "#6e6e73",
    lineHeight: 1.55,
    margin: 0
  }
}, s.d))))));

// ----- Mini experiments -----
const Experiments = () => {
  const items = [{
    tag: "Agent",
    title: "Excel AI Agent",
    blurb: "A natural-language layer over spreadsheets — formulas, pivots, narration.",
    art: "art-2"
  }, {
    tag: "Agent",
    title: "Reading copilot",
    blurb: "Highlights, summarizes, and threads questions back to your library.",
    art: "art-7"
  }, {
    tag: "Asset",
    title: "Generative covers",
    blurb: "Per-chapter book covers for the Stumbldoor case study.",
    art: "art-3"
  }, {
    tag: "Tool",
    title: "Brand color extractor",
    blurb: "Drop an image, get a 5-color tonal palette in OKLCH.",
    art: "art-1"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      padding: "140px 24px 160px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-eyebrow"
  }, "\u2014 Experiments"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-h1",
    style: {
      fontSize: "clamp(32px, 4vw, 56px)",
      marginBottom: 12
    }
  }, "Tiny tools,", /*#__PURE__*/React.createElement("br", null), "big lessons."), /*#__PURE__*/React.createElement("p", {
    className: "bt-lede",
    style: {
      marginBottom: 64
    }
  }, "Side experiments where the AI does real work \u2014 not just decoration."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 24
    }
  }, items.map(x => /*#__PURE__*/React.createElement("a", {
    key: x.title,
    href: "./project.html",
    style: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 32,
      padding: 32,
      borderRadius: 32,
      background: "#f5f5f7",
      textDecoration: "none",
      color: "inherit",
      transition: "background .25s"
    },
    onMouseEnter: e => e.currentTarget.style.background = "#efeaff",
    onMouseLeave: e => e.currentTarget.style.background = "#f5f5f7"
  }, /*#__PURE__*/React.createElement("div", {
    className: `bt-ai-tile ${x.art}`,
    style: {
      aspectRatio: "1/1",
      borderRadius: 16,
      height: 180,
      border: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: "var(--custom-purple)",
      textTransform: "uppercase",
      letterSpacing: ".08em",
      marginBottom: 8
    }
  }, x.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-.01em",
      margin: "0 0 12px"
    }
  }, x.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "#6e6e73",
      lineHeight: 1.55,
      margin: "0 0 24px"
    }
  }, x.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14,
      fontWeight: 500
    }
  }, "Read more ", /*#__PURE__*/React.createElement(ArrowR, {
    size: 14
  }))))))));
};
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "04 AI Lab",
  style: {
    background: "#fff"
  }
}, /*#__PURE__*/React.createElement(Nav, {
  active: "ai-lab"
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body"
}, /*#__PURE__*/React.createElement(AIHero, null), /*#__PURE__*/React.createElement(Series, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Experiments, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/ai-lab.jsx", error: String((e && e.message) || e) }); }

// site/js/contact.jsx
try { (() => {
/**
 * Contact — full page version with form, FAQ, calendar links.
 */

const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "06 Contact"
}, /*#__PURE__*/React.createElement(Nav, {
  active: ""
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body"
}, /*#__PURE__*/React.createElement("section", {
  className: "bt-contact",
  style: {
    paddingTop: 120
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-contact-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-eyebrow",
  style: {
    color: "rgba(255,255,255,.5)"
  }
}, "\u2014 Contact"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-contact-h"
}, "Let's build", /*#__PURE__*/React.createElement("br", null), "something useful."), /*#__PURE__*/React.createElement("p", {
  className: "bt-contact-sub"
}, "Open to product design roles, AI tooling collaborations, and short consulting engagements. I reply within two days."), /*#__PURE__*/React.createElement("div", {
  className: "bt-contact-actions"
}, /*#__PURE__*/React.createElement("a", {
  className: "bt-btn bt-btn-primary",
  style: {
    background: "#fff",
    color: "#1d1d1f"
  },
  href: "mailto:hello@qingyucao.com"
}, "hello@qingyucao.com"), /*#__PURE__*/React.createElement("a", {
  className: "bt-btn bt-btn-ghost",
  style: {
    background: "rgba(255,255,255,.08)",
    color: "#fff"
  },
  href: "#"
}, "Book a call ", /*#__PURE__*/React.createElement(ArrowR, null))))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 24px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1080,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-eyebrow"
}, "\u2014 FAQ"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-h1",
  style: {
    fontSize: "clamp(32px, 4vw, 56px)",
    marginBottom: 64
  }
}, "Quick answers."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: 0
  }
}, [{
  q: "Are you available for full-time roles?",
  a: "Yes — open to senior product / design engineering roles in NYC, SF, or remote (US hours)."
}, {
  q: "What's a typical engagement?",
  a: "4–12 weeks. Big enough to ship something real, small enough to stay sharp. I scope and fixed-price each one."
}, {
  q: "Do you work on AI products specifically?",
  a: "Yes — that's most of my recent work. UX for agents, generative tooling, prompt-driven interfaces."
}, {
  q: "Can I see code samples?",
  a: "GitHub is linked in the footer. For private work, I share representative case studies on request."
}].map(({
  q,
  a
}) => /*#__PURE__*/React.createElement("div", {
  key: q,
  style: {
    padding: "32px 0",
    borderBottom: "1px solid rgba(0,0,0,.08)"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: "-.01em",
    margin: "0 0 12px"
  }
}, q), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    color: "#6e6e73",
    lineHeight: 1.6,
    margin: 0,
    maxWidth: 760
  }
}, a))))))), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/contact.jsx", error: String((e && e.message) || e) }); }

// site/js/home.jsx
try { (() => {
/**
 * Home — hero + featured 3 projects + AI Lab teaser + about teaser.
 * Keeps the Apple/Google feel with a tighter, marketing-style flow.
 */

const Hero = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
  className: "bt-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-pills"
}, /*#__PURE__*/React.createElement("span", {
  className: "is-on"
}, "Product Design"), /*#__PURE__*/React.createElement("span", null, "Design Engineering"), /*#__PURE__*/React.createElement("span", null, "AI Tooling")), /*#__PURE__*/React.createElement("h1", {
  className: "bt-hero-h1"
}, "Design that ships.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "accent"
}, "Code that lasts.")), /*#__PURE__*/React.createElement("p", {
  className: "bt-hero-sub"
}, "I'm Qingyu \u2014 a product designer who builds, tests, and ships. Across AI tooling, edtech, and game UX."), /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-cta-row"
}, /*#__PURE__*/React.createElement("a", {
  className: "bt-btn bt-btn-primary",
  href: "./work.html"
}, "View my work ", /*#__PURE__*/React.createElement(ArrowR, null)), /*#__PURE__*/React.createElement("a", {
  className: "bt-btn bt-btn-ghost",
  href: "./about.html"
}, "About me"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-showcase"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-hero-showcase-inner"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-homepage.png",
  alt: "Featured product"
}))));
const FeaturedWork = () => {
  const featured = PROJECTS.slice(0, 4); // first 4 only on home
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "bt-page-head",
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-eyebrow"
  }, "Selected Work \xB7 2024\u20132026"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-h1",
    style: {
      fontSize: "clamp(40px, 5vw, 72px)"
    }
  }, "Recent projects."), /*#__PURE__*/React.createElement("p", {
    className: "bt-lede"
  }, "A few highlights \u2014 research, design, and shipped product.")), /*#__PURE__*/React.createElement("div", {
    className: "bt-grid"
  }, featured.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    p: p
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "bt-btn bt-btn-ghost",
    href: "./work.html"
  }, "See all 7 projects ", /*#__PURE__*/React.createElement(ArrowR, null))));
};
const AILabTeaser = () => /*#__PURE__*/React.createElement("section", {
  className: "bt-ai-section",
  style: {
    padding: "120px 24px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-eyebrow"
}, "\u2014 AI Lab"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-ai-h"
}, "Designing ", /*#__PURE__*/React.createElement("span", {
  className: "accent"
}, "with"), " AI,", /*#__PURE__*/React.createElement("br", null), "not just for it."), /*#__PURE__*/React.createElement("p", {
  className: "bt-ai-sub"
}, "A live notebook of generative experiments \u2014 covers, mood boards, brand systems, and one-off tools. Made with Midjourney, Flux, and a lot of prompt rewrites."), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-grid",
  style: {
    gridTemplateColumns: "repeat(4, 1fr)"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "flux \xB7 02"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#7a3f"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-2"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "mj \xB7 06"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#9c11"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-3"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "flux \xB7 04"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#3e88"))), /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile art-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-ai-tile-meta"
}, /*#__PURE__*/React.createElement("span", null, "mj \xB7 08"), /*#__PURE__*/React.createElement("span", {
  className: "seed"
}, "#bc20")))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "bt-btn bt-btn-primary",
  style: {
    background: "#fff",
    color: "#1d1d1f"
  },
  href: "./ai-lab.html"
}, "Enter the lab ", /*#__PURE__*/React.createElement(ArrowR, null)))));
const AboutTeaser = () => /*#__PURE__*/React.createElement("section", {
  className: "bt-about",
  style: {
    padding: "160px 24px 80px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-about-eyebrow"
}, "About"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-about-h"
}, "A designer who codes, & an engineer who designs."), /*#__PURE__*/React.createElement("p", {
  className: "bt-about-p"
}, "My favorite shipping cadence is Friday: ", /*#__PURE__*/React.createElement("b", null, "a real merge, a real screenshot, a real user.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "bt-btn bt-btn-ghost",
  href: "./about.html"
}, "More about me ", /*#__PURE__*/React.createElement(ArrowR, null))));
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "01 Home"
}, /*#__PURE__*/React.createElement(Nav, {
  active: "home"
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FeaturedWork, null), /*#__PURE__*/React.createElement(AILabTeaser, null), /*#__PURE__*/React.createElement(AboutTeaser, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/home.jsx", error: String((e && e.message) || e) }); }

// site/js/more.jsx
try { (() => {
/**
 * More — 4 DENSE gallery patterns. All show many projects at once;
 * none reveal "one at a time" linearly.
 *
 *  A · Mosaic Grid — asymmetric 6-col blocks, mix of image + typography
 *  B · Index Wall — clean 4-col card grid, all visible at once
 *  C · Pinterest Masonry — variable-height columns, mood-board feel
 *  D · Sticker Sheet — overlapping cards on a dotted board
 */

const {
  useState,
  useMemo
} = React;

// Visual variety helpers — apply colors per project
const FILLS = ["fill-purple", "fill-dark", "fill-mint", "fill-pink", "fill-amber"];
const fillFor = i => FILLS[i % FILLS.length];

// ============================================================
// A · MOSAIC GRID — 6-col asymmetric blocks
// ============================================================
const Mosaic = () => {
  // Hand-tuned layout for 7 projects: 5 sizes mixing image + text tiles
  const layout = [{
    p: PROJECTS[0],
    size: "s-3x2",
    kind: "image"
  },
  // hero img — big
  {
    p: PROJECTS[1],
    size: "s-3x2",
    kind: "text",
    fill: "fill-dark"
  },
  // dark poster
  {
    p: PROJECTS[2],
    size: "s-2x1",
    kind: "image"
  }, {
    p: PROJECTS[3],
    size: "s-2x1",
    kind: "image"
  }, {
    p: PROJECTS[4],
    size: "s-2x1",
    kind: "text",
    fill: "fill-pink"
  }, {
    p: PROJECTS[5],
    size: "s-3x1",
    kind: "text",
    fill: "fill-amber"
  }, {
    p: PROJECTS[6],
    size: "s-3x1",
    kind: "text",
    fill: "fill-mint"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bt-more-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-label"
  }, "\u2014 Pattern A"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-more-title"
  }, "Mosaic grid"), /*#__PURE__*/React.createElement("p", {
    className: "bt-more-blurb"
  }, "All projects on one screen. Asymmetric 6-column blocks mix image-led and typography-led tiles for visual rhythm. Hover any tile to see the arrow rotate."))), /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic"
  }, layout.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: it.p.id,
    className: `bt-mosaic-tile ${it.size}`,
    href: "./project.html"
  }, it.kind === "image" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: it.p.img || "../assets/images/aicommunity-hero.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-eyebrow"
  }, it.p.eyebrow, " \xB7 ", it.p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-title"
  }, it.p.title))) : /*#__PURE__*/React.createElement("div", {
    className: `bt-mosaic-text ${it.fill} ${it.size}-text`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-eyebrow",
    style: {
      marginBottom: 16
    }
  }, it.p.eyebrow, " \xB7 ", it.p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-title"
  }, it.p.tagline.length > 60 ? it.p.title : it.p.tagline)), /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-foot"
  }, /*#__PURE__*/React.createElement("span", null, it.p.title), /*#__PURE__*/React.createElement("div", {
    className: "bt-mosaic-arrow"
  }, /*#__PURE__*/React.createElement(ArrowR, {
    size: 12
  }))))))));
};

// ============================================================
// B · INDEX WALL — 4-col uniform card grid + filter chips
// ============================================================
const FILTERS = ["All", "AI", "UIUX", "Product", "Programming", "Game", "Research"];
const IndexWall = () => {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active)), [active]);
  return /*#__PURE__*/React.createElement("section", {
    className: "bt-more-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-label"
  }, "\u2014 Pattern B"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-more-title"
  }, "Index wall"), /*#__PURE__*/React.createElement("p", {
    className: "bt-more-blurb"
  }, "A clean 4-column card grid where every project lives at the same scale. Predictable, scannable, easy to filter. The default for someone who knows what they're looking for."))), /*#__PURE__*/React.createElement("div", {
    className: "bt-filter-bar",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-filter-track"
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "bt-filter " + (active === f ? "is-active" : ""),
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "bt-result-count"
  }, visible.length, " ", visible.length === 1 ? "project" : "projects")), /*#__PURE__*/React.createElement("div", {
    className: "bt-index-wall"
  }, visible.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    className: "bt-iw-card",
    href: "./project.html"
  }, p.img ? /*#__PURE__*/React.createElement("div", {
    className: "bt-iw-thumb"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  })) : /*#__PURE__*/React.createElement("div", {
    className: `bt-iw-thumb is-text ${fillFor(i + 1)}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-iw-thumb-text"
  }, p.poster || p.title)), /*#__PURE__*/React.createElement("div", {
    className: "bt-iw-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-iw-eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "bt-iw-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "bt-iw-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-iw-tags"
  }, p.tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "bt-iw-tag"
  }, t))), /*#__PURE__*/React.createElement("span", null, p.year)))))));
};

// ============================================================
// C · PINTEREST MASONRY — variable column heights
// ============================================================
const Masonry = () => {
  // 12 tiles to show density — repeat projects with mix of image/text and varied heights
  const tiles = [{
    p: PROJECTS[0],
    kind: "image",
    h: "is-tall"
  }, {
    p: PROJECTS[1],
    kind: "text",
    h: "is-extra-tall",
    fill: "fill-dark"
  }, {
    p: PROJECTS[2],
    kind: "image"
  }, {
    p: PROJECTS[3],
    kind: "text",
    h: "",
    fill: "fill-purple"
  }, {
    p: PROJECTS[4],
    kind: "text",
    h: "is-tall",
    fill: "fill-pink"
  }, {
    p: PROJECTS[5],
    kind: "image",
    h: "is-tall"
  }, {
    p: PROJECTS[6],
    kind: "text",
    h: "",
    fill: "fill-amber"
  }, {
    p: PROJECTS[0],
    kind: "image"
  }, {
    p: PROJECTS[3],
    kind: "image",
    h: "is-tall"
  }, {
    p: PROJECTS[1],
    kind: "text",
    h: "",
    fill: "fill-mint"
  }, {
    p: PROJECTS[2],
    kind: "image",
    h: "is-tall"
  }, {
    p: PROJECTS[5],
    kind: "text",
    h: "",
    fill: "fill-purple"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bt-more-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-label"
  }, "\u2014 Pattern C"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-more-title"
  }, "Mood-board masonry"), /*#__PURE__*/React.createElement("p", {
    className: "bt-more-blurb"
  }, "Pinterest-style columns of mixed-height tiles. Showcases project breadth and visual range \u2014 best for someone browsing aesthetically."))), /*#__PURE__*/React.createElement("div", {
    className: "bt-pin"
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: `bt-pin-tile ${t.h || ""} ${t.kind === "text" ? `is-text ${t.fill}` : ""}`,
    href: "./project.html"
  }, t.kind === "image" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: t.p.img || "../assets/images/aicommunity-trending.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "bt-pin-tile-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-pin-tile-eyebrow"
  }, t.p.eyebrow, " \xB7 ", t.p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-pin-tile-title"
  }, t.p.title))), t.kind === "text" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bt-pin-tile-eyebrow"
  }, t.p.eyebrow, " \xB7 ", t.p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-pin-tile-title"
  }, t.p.title))))));
};

// ============================================================
// D · STICKER SHEET — overlapping cards, dotted board background
// ============================================================
const Sticker = () => {
  // Pre-positioned absolute placements for 8 stickers (px coords)
  const stickers = [{
    p: PROJECTS[0],
    left: "4%",
    top: 40,
    w: 320,
    h: 240,
    rot: -3,
    kind: "image"
  }, {
    p: PROJECTS[1],
    left: "33%",
    top: 100,
    w: 280,
    h: 200,
    rot: 2,
    kind: "text",
    fill: "fill-dark"
  }, {
    p: PROJECTS[2],
    left: "62%",
    top: 30,
    w: 300,
    h: 220,
    rot: -2,
    kind: "image"
  }, {
    p: PROJECTS[3],
    left: "12%",
    top: 320,
    w: 260,
    h: 200,
    rot: 4,
    kind: "image"
  }, {
    p: PROJECTS[4],
    left: "38%",
    top: 360,
    w: 300,
    h: 200,
    rot: -1,
    kind: "text",
    fill: "fill-pink"
  }, {
    p: PROJECTS[5],
    left: "68%",
    top: 290,
    w: 260,
    h: 220,
    rot: 3,
    kind: "text",
    fill: "fill-mint"
  }, {
    p: PROJECTS[6],
    left: "20%",
    top: 580,
    w: 280,
    h: 180,
    rot: -2,
    kind: "text",
    fill: "fill-amber"
  }, {
    p: PROJECTS[2],
    left: "52%",
    top: 600,
    w: 300,
    h: 200,
    rot: 1,
    kind: "image"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bt-more-section",
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-h"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bt-more-label"
  }, "\u2014 Pattern D"), /*#__PURE__*/React.createElement("h2", {
    className: "bt-more-title"
  }, "Sticker board"), /*#__PURE__*/React.createElement("p", {
    className: "bt-more-blurb"
  }, "Cards arranged like Polaroids on a pinboard. A little playful, a little messy. Hover snaps the card straight + brings it forward. Best for portfolio-as-personality."))), /*#__PURE__*/React.createElement("div", {
    className: "bt-sticker"
  }, stickers.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "./project.html",
    className: `bt-sticker-tile ${s.kind === "text" ? `is-text ${s.fill}` : ""}`,
    style: {
      left: s.left,
      top: s.top,
      width: s.w,
      height: s.h,
      transform: `rotate(${s.rot}deg)`,
      zIndex: i
    }
  }, s.kind === "image" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: s.p.img || "../assets/images/aicommunity-search.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "bt-sticker-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-sticker-tile-eyebrow"
  }, s.p.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "bt-sticker-tile-title"
  }, s.p.title))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bt-sticker-tile-eyebrow"
  }, s.p.eyebrow, " \xB7 ", s.p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-sticker-tile-title"
  }, s.p.title))))));
};
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "03 More Projects"
}, /*#__PURE__*/React.createElement(Nav, {
  active: "more"
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body bt-more-page"
}, /*#__PURE__*/React.createElement("header", {
  className: "bt-page-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-eyebrow"
}, "\u2014 Browse"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-h1"
}, "Many at once.", /*#__PURE__*/React.createElement("br", null), "Pick your favorite."), /*#__PURE__*/React.createElement("p", {
  className: "bt-lede"
}, "Four dense gallery layouts, each showing every project on one screen \u2014 no carousels, no one-at-a-time scroll. Same projects, different reading modes.")), /*#__PURE__*/React.createElement(Mosaic, null), /*#__PURE__*/React.createElement(IndexWall, null), /*#__PURE__*/React.createElement(Masonry, null), /*#__PURE__*/React.createElement(Sticker, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/more.jsx", error: String((e && e.message) || e) }); }

// site/js/project.jsx
try { (() => {
/**
 * Project — case study detail. Standalone page version.
 * Same structure as the original detail layout, with corrected
 * relative image paths for /site/ root and real "up next" links.
 */

const ProjectDetail = () => /*#__PURE__*/React.createElement("article", {
  className: "bt-detail"
}, /*#__PURE__*/React.createElement("header", {
  className: "bt-detail-hero",
  style: {
    paddingTop: 120
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-detail-eyebrow"
}, "AI Product Design \xB7 2025"), /*#__PURE__*/React.createElement("h1", {
  className: "bt-detail-h1"
}, "Transform AI learning into community experience."), /*#__PURE__*/React.createElement("p", {
  className: "bt-detail-sub"
}, "An in-app integrated community designed for AI tools \u2014 bridging isolated tool use with collaborative discovery, retention, and shared expertise.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-detail-media"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-detail-media-inner"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-homepage.png",
  alt: "AI Community Platform"
}))), /*#__PURE__*/React.createElement("section", {
  className: "bt-facts"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Role"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "Lead Designer \xB7 Frontend")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Duration"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "4 months \xB7 2025")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Team"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "Solo project")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-label"
}, "Stack"), /*#__PURE__*/React.createElement("div", {
  className: "bt-fact-value"
}, "Figma \xB7 Next.js \xB7 TypeScript"))), /*#__PURE__*/React.createElement("section", {
  className: "bt-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-num"
}, "01 \u2014 The Problem"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-section-h"
}, "AI tools feel lonely."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "ChatGPT, Grok, Claude \u2014 every major AI product is a one-on-one chatbox. Users discover prompts on Twitter, copy them in private, and never see how others build on their ideas."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "The opportunity: turn isolated tool use into a shared learning surface.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-section-art is-tinted-purple"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-search.png",
  alt: ""
}))), /*#__PURE__*/React.createElement("div", {
  className: "bt-divider"
}), /*#__PURE__*/React.createElement("section", {
  className: "bt-section is-flipped"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-num"
}, "02 \u2014 Research"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-section-h"
}, "Twelve interviews. One pattern."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "Across twelve early adopters, the recurring pain wasn't lack of features \u2014 it was lack of ", /*#__PURE__*/React.createElement("b", null, "continuity"), ". Insights scattered across Slack threads, Notion docs, and pinned tabs."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "A built-in community thread per conversation became the unifying primitive.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-section-art is-tinted-mint"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-trending.png",
  alt: ""
}))), /*#__PURE__*/React.createElement("section", {
  className: "bt-quote"
}, /*#__PURE__*/React.createElement("p", {
  className: "bt-quote-text"
}, "\"The best community feature isn't a forum. It's a footnote on every prompt that says \u2014 here's how five other people improved this.\""), /*#__PURE__*/React.createElement("div", {
  className: "bt-quote-author"
}, "Design principle, week 3")), /*#__PURE__*/React.createElement("div", {
  className: "bt-divider"
}), /*#__PURE__*/React.createElement("section", {
  className: "bt-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-section-num"
}, "03 \u2014 Design System"), /*#__PURE__*/React.createElement("h2", {
  className: "bt-section-h"
}, "One token map for two themes."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "Every color maps to a semantic role \u2014 action, surface, content, warning. Light and dark themes share the same role structure, so swapping themes never breaks hierarchy."), /*#__PURE__*/React.createElement("p", {
  className: "bt-section-p"
}, "12 surface roles. 4 elevation levels. 1 accent.")), /*#__PURE__*/React.createElement("div", {
  className: "bt-section-art is-tinted-dark"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-hero.jpg",
  alt: ""
}))), /*#__PURE__*/React.createElement("section", {
  className: "bt-metrics"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-metrics-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-metric-num"
}, "+148%"), /*#__PURE__*/React.createElement("h3", {
  className: "bt-metric-h"
}, "Daily active sessions"), /*#__PURE__*/React.createElement("p", {
  className: "bt-metric-p"
}, "Measured in private beta, weeks 4\u20138 vs. baseline.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-metric-num"
}, "3.2\xD7"), /*#__PURE__*/React.createElement("h3", {
  className: "bt-metric-h"
}, "Prompt re-use"), /*#__PURE__*/React.createElement("p", {
  className: "bt-metric-p"
}, "Users iterating on community-shared prompts vs. authoring from scratch.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-metric-num"
}, "9 / 10"), /*#__PURE__*/React.createElement("h3", {
  className: "bt-metric-h"
}, "\"Would recommend\""), /*#__PURE__*/React.createElement("p", {
  className: "bt-metric-p"
}, "Post-beta survey, n=42.")))), /*#__PURE__*/React.createElement("section", {
  className: "bt-gallery"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile is-tall"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-homepage.png",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile-label"
}, "Home feed")), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-trending.png",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile-label"
}, "Trending")), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile"
}, /*#__PURE__*/React.createElement("img", {
  src: "../assets/images/aicommunity-search.png",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "bt-gallery-tile-label"
}, "Search"))), /*#__PURE__*/React.createElement("section", {
  className: "bt-up-next"
}, /*#__PURE__*/React.createElement("h2", {
  className: "bt-up-next-h"
}, "Up next"), /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-row"
}, /*#__PURE__*/React.createElement("a", {
  className: "bt-up-next-card",
  href: "./project.html"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-eyebrow"
}, "Edtech \xB7 2025"), /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-title"
}, "Stumbldoor \u2014 The Future of Reading")), /*#__PURE__*/React.createElement("div", {
  className: "bt-card-arrow"
}, /*#__PURE__*/React.createElement(ArrowUR, null))), /*#__PURE__*/React.createElement("a", {
  className: "bt-up-next-card",
  href: "./project.html"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-eyebrow"
}, "Founder Tools \xB7 2025"), /*#__PURE__*/React.createElement("div", {
  className: "bt-up-next-title"
}, "Spark Up \u2014 Startup readiness")), /*#__PURE__*/React.createElement("div", {
  className: "bt-card-arrow"
}, /*#__PURE__*/React.createElement(ArrowUR, null))))));
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "07 Project Detail"
}, /*#__PURE__*/React.createElement(Nav, {
  active: "work"
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body"
}, /*#__PURE__*/React.createElement(ProjectDetail, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/project.jsx", error: String((e && e.message) || e) }); }

// site/js/shared.jsx
try { (() => {
/**
 * site/js/shared.jsx — page-shared bits: nav, footer, project data, tiny icons.
 * Loads BEFORE each page's own jsx. Exports to window.
 */

const PROJECTS = [{
  id: "ai-community",
  title: "AI Built-in Community Platform",
  eyebrow: "AI Product Design",
  year: "2025",
  role: "Lead Designer · Frontend",
  duration: "4 months",
  team: "Solo",
  stack: "Figma · Next.js · TypeScript",
  tagline: "An in-app community system that turns isolated AI use into collaborative discovery.",
  tags: ["AI", "UIUX", "Programming"],
  fill: "fill-purple",
  size: "is-feature",
  img: "../assets/images/aicommunity-homepage.png"
}, {
  id: "stumbldoor",
  title: "Stumbldoor",
  eyebrow: "Edtech",
  year: "2025",
  tagline: "Reimagining the library experience for modern readers.",
  tags: ["UIUX", "Research"],
  fill: "fill-dark",
  size: "is-large",
  poster: "The Future of Reading"
}, {
  id: "spark-up",
  title: "Spark Up",
  eyebrow: "Founder Tools",
  year: "2025",
  tagline: "A readiness check-in for first-time founders.",
  tags: ["AI", "Product"],
  fill: "fill-mint",
  size: "is-small",
  img: "../assets/images/aicommunity-trending.png"
}, {
  id: "excel-ai",
  title: "Excel AI Agent",
  eyebrow: "AI Agent",
  year: "2024",
  tagline: "Natural language for spreadsheets — formulas, pivots, and explanations.",
  tags: ["AI", "Programming"],
  fill: "fill-blue",
  size: "is-half",
  img: "../assets/images/aicommunity-search.png"
}, {
  id: "music-encounter",
  title: "Music Encounter",
  eyebrow: "Game Design",
  year: "2024",
  tagline: "A 3D open-world social adventure set in a fantasy musical world.",
  tags: ["Game", "Product"],
  fill: "fill-pink",
  size: "is-half"
}, {
  id: "petiboxy",
  title: "Petiboxy",
  eyebrow: "Brand & Onboarding",
  year: "2024",
  tagline: "Subscription pet supply box — onboarding flow and visual identity.",
  tags: ["UIUX", "Product"],
  fill: "fill-cream",
  size: "is-half"
}, {
  id: "ziplink",
  title: "Ziplink",
  eyebrow: "Developer Tools",
  year: "2024",
  tagline: "Tiny URL shortener with link analytics and team folders.",
  tags: ["Programming"],
  fill: "fill-cream",
  size: "is-half"
}];
const ArrowUR = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));
const ArrowR = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));
const Sparkle = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
}));
const Nav = ({
  active
}) => {
  const items = [{
    id: "home",
    label: "Home",
    href: "./home.html"
  }, {
    id: "work",
    label: "Work",
    href: "./work.html"
  }, {
    id: "more",
    label: "Projects",
    href: "./more.html"
  }, {
    id: "ai-lab",
    label: "AI Lab",
    href: "./ai-lab.html"
  }, {
    id: "about",
    label: "About",
    href: "./about.html"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bt-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./home.html",
    className: "bt-nav-logo",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Qingyu Cao"), /*#__PURE__*/React.createElement("div", {
    className: "bt-nav-items"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: it.href,
    className: active === it.id ? "is-active" : ""
  }, it.label)), /*#__PURE__*/React.createElement("a", {
    href: "./contact.html",
    className: "bt-nav-cta"
  }, "Contact \u2192"))));
};
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "bt-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-brand"
}, "Qingyu Cao"), /*#__PURE__*/React.createElement("p", {
  className: "bt-footer-blurb"
}, "Product designer & engineer based in New York. Currently building tools for the AI-first product era.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-h"
}, "Pages"), /*#__PURE__*/React.createElement("ul", {
  className: "bt-footer-list"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "./home.html",
  style: {
    color: "inherit"
  }
}, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "./work.html",
  style: {
    color: "inherit"
  }
}, "Work")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "./more.html",
  style: {
    color: "inherit"
  }
}, "All projects")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "./ai-lab.html",
  style: {
    color: "inherit"
  }
}, "AI Lab")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-h"
}, "Connect"), /*#__PURE__*/React.createElement("ul", {
  className: "bt-footer-list"
}, /*#__PURE__*/React.createElement("li", null, "Email"), /*#__PURE__*/React.createElement("li", null, "LinkedIn"), /*#__PURE__*/React.createElement("li", null, "GitHub"), /*#__PURE__*/React.createElement("li", null, "Read.cv"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-h"
}, "More"), /*#__PURE__*/React.createElement("ul", {
  className: "bt-footer-list"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "./about.html",
  style: {
    color: "inherit"
  }
}, "About")), /*#__PURE__*/React.createElement("li", null, "Resume"), /*#__PURE__*/React.createElement("li", null, "Writing")))), /*#__PURE__*/React.createElement("div", {
  className: "bt-footer-bar"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Qingyu Cao"), /*#__PURE__*/React.createElement("span", null, "Made in New York")));

// Project card (re-used on Home + Work pages)
const Card = ({
  p,
  href
}) => {
  const isFeature = p.size === "is-feature";
  const isLarge = p.size === "is-large";
  return /*#__PURE__*/React.createElement("a", {
    className: `bt-card ${p.fill} ${p.size}`,
    href: href || "./project.html"
  }, isFeature && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bt-card-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-card-eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "bt-tag-row"
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "bt-tag"
  }, t))), /*#__PURE__*/React.createElement("h3", {
    className: "bt-card-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "bt-card-tagline"
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-card-meta"
  }, p.year, " \xB7 Case Study"), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-arrow"
  }, /*#__PURE__*/React.createElement(ArrowUR, null)))), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-art"
  }, p.img && /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  }))), !isFeature && /*#__PURE__*/React.createElement(React.Fragment, null, (isLarge || p.img || p.poster) && /*#__PURE__*/React.createElement("div", {
    className: "bt-card-art"
  }, p.img ? /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isLarge ? 48 : 28,
      fontWeight: 600,
      color: p.fill === "fill-dark" ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.85)",
      letterSpacing: "-.02em",
      lineHeight: 1.05,
      textAlign: "center",
      padding: 24
    }
  }, p.poster || p.title)), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "bt-card-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "bt-card-tagline"
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bt-card-meta"
  }, p.year), /*#__PURE__*/React.createElement("div", {
    className: "bt-card-arrow"
  }, /*#__PURE__*/React.createElement(ArrowUR, null)))));
};
Object.assign(window, {
  PROJECTS,
  ArrowUR,
  ArrowR,
  Sparkle,
  Nav,
  Footer,
  Card
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/shared.jsx", error: String((e && e.message) || e) }); }

// site/js/work.jsx
try { (() => {
/**
 * Work — full filtered grid of all projects (the main "case study index").
 */

const {
  useState
} = React;
const FILTERS = ["All Work", "AI", "UIUX", "Product", "Programming", "Game", "Research"];
const ProjectsIndex = () => {
  const [active, setActive] = useState("All Work");
  const visible = PROJECTS.filter(p => active === "All Work" || p.tags.includes(active) || p.eyebrow.toLowerCase().includes(active.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "bt-page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-eyebrow"
  }, "All Work \xB7 2024\u20132026"), /*#__PURE__*/React.createElement("h1", {
    className: "bt-h1"
  }, "Projects, in detail."), /*#__PURE__*/React.createElement("p", {
    className: "bt-lede"
  }, "A portfolio of shipped products across AI tooling, edtech, and game design \u2014 each with research, iteration, and the constraints that shaped them.")), /*#__PURE__*/React.createElement("div", {
    className: "bt-filter-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt-filter-track"
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "bt-filter " + (active === f ? "is-active" : ""),
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "bt-result-count"
  }, visible.length, " projects")), /*#__PURE__*/React.createElement("div", {
    className: "bt-grid"
  }, visible.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    p: p
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "bt-btn bt-btn-ghost",
    href: "./more.html"
  }, "Browse different layouts ", /*#__PURE__*/React.createElement(ArrowR, null))));
};
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "bt-page",
  "data-screen-label": "02 Work"
}, /*#__PURE__*/React.createElement(Nav, {
  active: "work"
}), /*#__PURE__*/React.createElement("main", {
  className: "bt-page-body"
}, /*#__PURE__*/React.createElement(ProjectsIndex, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app.jsx
try { (() => {
/**
 * Qingyu Cao Portfolio — UI Kit
 *
 * React/JSX recreation of the portfolio's signature surfaces, in one file
 * so it can be opened directly via index.html.
 *
 * Tokens: ../../colors_and_type.css
 */

const {
  useState,
  useEffect,
  useRef
} = React;

// ---------- Lucide-style strokes (size, stroke=2, never filled) ---------- //
const Icon = ({
  d,
  size = 20,
  children,
  viewBox = "0 0 24 24"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: viewBox,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, children || /*#__PURE__*/React.createElement("path", {
  d: d
}));
const IconDownload = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  x2: "12",
  y1: "15",
  y2: "3"
}));
const IconChevronDown = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const IconArrowUp = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "m5 12 7-7 7 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5"
}));
const IconSend = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "m22 2-7 20-4-9-9-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 2 11 13"
}));
const IconHeart = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}));
const IconGlobe = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
}));
const IconMail = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 5L2 7"
}));
const IconMapPin = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const IconGithub = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
}));
const IconLinkedin = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "12"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}));
const IconPalette = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "13.5",
  cy: "6.5",
  r: "2.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19",
  cy: "13",
  r: "2.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "2.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10",
  cy: "19.5",
  r: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m16 7-3.5 3.5L8 12l3 4 5-5"
}));
const IconGamepad = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("line", {
  x1: "6",
  x2: "10",
  y1: "11",
  y2: "11"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  x2: "8",
  y1: "9",
  y2: "13"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15",
  x2: "15.01",
  y1: "12",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "18",
  x2: "18.01",
  y1: "10",
  y2: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"
}));
const IconBars = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 3v18h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 14l4-4 4 4 5-5"
}));
const IconSpark = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
}));

// ---------- Project data (matches portfolio /data/projects.js) ---------- //
const PROJECTS = [{
  id: "ai-community",
  title: "AI Community Platform",
  tags: ["AI", "UIUX"],
  techs: ["Next.js", "TypeScript", "Tailwind"],
  brief: "Modern AI community focused on AI conversation sharing, prompt engineering, and community events.",
  img: "../../assets/images/aicommunity-homepage.png",
  featured: true
}, {
  id: "music-encounter",
  title: "Music Encounter",
  tags: ["Game"],
  techs: ["Unity", "C#", "3D"],
  brief: "Third-person 3D open-world social adventure set in a fantasy musical world.",
  grad: "var(--grad-game)",
  featured: true
}, {
  id: "stumbldoor",
  title: "Stumbldoor",
  tags: ["UIUX", "Product Design"],
  techs: ["React", "Figma"],
  brief: "Door-to-door real-estate prospecting tool with neighborhood routing and AI lead scoring.",
  img: "../../assets/images/aicommunity-trending.png"
}, {
  id: "excel-ai",
  title: "Excel AI Agent",
  tags: ["AI", "Programming"],
  techs: ["Python", "OpenAI", "Streamlit"],
  brief: "Autonomous agent that operates on real spreadsheets — formulas, pivots, and explanations.",
  img: "../../assets/images/aicommunity-search.png"
}, {
  id: "petiboxy",
  title: "Petiboxy",
  tags: ["UIUX"],
  techs: ["Figma", "Framer"],
  brief: "Subscription pet supply box — onboarding flow and visual identity for early launch."
}, {
  id: "ziplink",
  title: "Ziplink",
  tags: ["Programming"],
  techs: ["Node", "Postgres"],
  brief: "Tiny URL shortener with link analytics and team folders."
}, {
  id: "eternal-dreams",
  title: "Eternal Dreams",
  tags: ["Game", "Research"],
  techs: ["Unity"],
  brief: "Narrative game research probe on dream-loop mechanics and player attachment."
}, {
  id: "fishtank",
  title: "Fishtank",
  tags: ["UIUX"],
  techs: ["Figma"],
  brief: "Saltwater aquarium care app with chemistry tracking and reminder cadence."
}];

// ---------- Aurora hero ---------- //
const AuroraHero = () => {
  // Visible immediately — no entry fade. Hero is the always-first paint.
  const visible = true;
  return /*#__PURE__*/React.createElement("section", {
    className: "qy-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-hero-grain",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-aurora",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-aurora-inner"
  })), /*#__PURE__*/React.createElement("div", {
    className: "qy-pulse qy-pulse-a"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-pulse qy-pulse-b"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-pulse qy-pulse-c"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-hero-inner " + (visible ? "is-in" : "")
  }, /*#__PURE__*/React.createElement("h1", {
    className: "qy-hero-h1"
  }, "Qingyu Cao"), /*#__PURE__*/React.createElement("div", {
    className: "qy-hero-sub"
  }, "Creative Developer & Designer"), /*#__PURE__*/React.createElement("p", {
    className: "qy-hero-lede"
  }, "A Product Designer who ", /*#__PURE__*/React.createElement("b", null, "builds, tests, and ships"), ". I combine design intuition with engineering depth to ", /*#__PURE__*/React.createElement("b", null, "launch real products"), " in fast-moving environments."), /*#__PURE__*/React.createElement("div", {
    className: "qy-cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "qy-btn qy-btn-light"
  }, "View My Work"), /*#__PURE__*/React.createElement("button", {
    className: "qy-btn qy-btn-outline-light"
  }, /*#__PURE__*/React.createElement(IconDownload, {
    size: 18
  }), "Resume"))), /*#__PURE__*/React.createElement("div", {
    className: "qy-hero-chevron"
  }, /*#__PURE__*/React.createElement(IconChevronDown, {
    size: 32
  })));
};

// ---------- Glassy nav ---------- //
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "qy-nav " + (scrolled ? "is-scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-nav-logo qy-grad-text"
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    className: "qy-nav-items"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qy-nav-link is-active"
  }, "Work"), /*#__PURE__*/React.createElement("span", {
    className: "qy-nav-link"
  }, "About"), /*#__PURE__*/React.createElement("span", {
    className: "qy-nav-link"
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    className: "qy-lang"
  }, /*#__PURE__*/React.createElement(IconGlobe, {
    size: 14
  }), "EN"))));
};

// ---------- Showcase (featured) ---------- //
const Showcase = () => {
  const featured = PROJECTS.filter(p => p.featured);
  return /*#__PURE__*/React.createElement("section", {
    className: "qy-showcase"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-section-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "qy-h2 qy-grad-text"
  }, "Selected Work"), /*#__PURE__*/React.createElement("p", {
    className: "qy-section-sub"
  }, "Projects I'm proud to ship.")), /*#__PURE__*/React.createElement("div", {
    className: "qy-showcase-grid"
  }, featured.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    className: "qy-showcase-card " + (i === 0 ? "is-wide" : ""),
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-showcase-art",
    style: {
      background: p.grad || "var(--gradient-primary)"
    }
  }, p.img && /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "qy-showcase-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-tag-row"
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "qy-tag qy-tag-purple"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "qy-showcase-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "qy-showcase-brief"
  }, p.brief), /*#__PURE__*/React.createElement("div", {
    className: "qy-link"
  }, "View case study \u2192"))))));
};

// ---------- Dark grid (More Projects) ---------- //
const FILTERS = ["All", "AI", "UIUX", "Product Design", "Programming", "Game", "Research"];
const DarkGrid = () => {
  const [active, setActive] = useState("All");
  const visible = PROJECTS.filter(p => active === "All" || p.tags.includes(active));
  return /*#__PURE__*/React.createElement("section", {
    className: "qy-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-section-head qy-on-dark"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "qy-h2 qy-on-dark-title"
  }, "More Projects"), /*#__PURE__*/React.createElement("div", {
    className: "qy-filter-row"
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "qy-filter " + (active === f ? "is-active" : ""),
    onClick: () => setActive(f)
  }, f.toUpperCase())))), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-grid"
  }, visible.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    className: "qy-dark-card",
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-art",
    style: {
      background: p.grad || "linear-gradient(135deg,#1a1530,#433a6b)"
    }
  }, p.img && /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-tag-row"
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "qy-tag qy-tag-on-dark"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-brief"
  }, p.brief), /*#__PURE__*/React.createElement("div", {
    className: "qy-tech-row"
  }, (p.techs || []).slice(0, 4).map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "qy-tech"
  }, "#", t))))))), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "qy-btn qy-btn-glow"
  }, "View All Projects")));
};

// ---------- About + skills ---------- //
const SKILLS = [{
  icon: /*#__PURE__*/React.createElement(IconPalette, {
    size: 28
  }),
  title: "UI/UX Design",
  desc: "Web and mobile interfaces grounded in user research and rapid prototyping."
}, {
  icon: /*#__PURE__*/React.createElement(IconGamepad, {
    size: 28
  }),
  title: "Game Design",
  desc: "3D worlds, social play, and interactive narratives. Unity-first."
}, {
  icon: /*#__PURE__*/React.createElement(IconBars, {
    size: 28
  }),
  title: "Marketing",
  desc: "Brand, positioning, and growth for early-stage products."
}, {
  icon: /*#__PURE__*/React.createElement(IconSpark, {
    size: 28
  }),
  title: "Social",
  desc: "Editorial cadence, motion-driven posts, and cross-platform identity."
}];
const About = () => /*#__PURE__*/React.createElement("section", {
  className: "qy-about"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-about-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  className: "qy-h2 qy-grad-text"
}, "About Me"), /*#__PURE__*/React.createElement("p", null, "I'm a product designer who codes. My favorite shipping cadence is Friday: a real merge, a real screenshot, a real user."), /*#__PURE__*/React.createElement("p", null, "Most of my work lives at the intersection of ", /*#__PURE__*/React.createElement("b", null, "design"), ", ", /*#__PURE__*/React.createElement("b", null, "game systems"), ", and ", /*#__PURE__*/React.createElement("b", null, "AI tooling"), " \u2014 which means I draw a lot, prototype faster than I'd like to admit, and always test on a friend before I ship."), /*#__PURE__*/React.createElement("p", null, "Currently in NYC. Open to product design, design engineering, and game UX roles."), /*#__PURE__*/React.createElement("div", {
  className: "qy-tag-stack"
}, /*#__PURE__*/React.createElement("span", {
  className: "qy-tag qy-tag-purple"
}, "Builder"), /*#__PURE__*/React.createElement("span", {
  className: "qy-tag qy-tag-blue"
}, "Researcher"), /*#__PURE__*/React.createElement("span", {
  className: "qy-tag qy-tag-green"
}, "Storyteller"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-skills-grid"
}, SKILLS.map(s => /*#__PURE__*/React.createElement("div", {
  key: s.title,
  className: "qy-skill"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-skill-ico"
}, s.icon), /*#__PURE__*/React.createElement("div", {
  className: "qy-skill-title"
}, s.title), /*#__PURE__*/React.createElement("div", {
  className: "qy-skill-desc"
}, s.desc))))), /*#__PURE__*/React.createElement("div", {
  className: "qy-stats"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-num qy-grad-text"
}, "15+"), /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-lab"
}, "Projects Completed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-num qy-grad-text"
}, "3+"), /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-lab"
}, "Years Experience"))));

// ---------- Contact + footer ---------- //
const Contact = () => /*#__PURE__*/React.createElement("section", {
  className: "qy-contact"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-section-head"
}, /*#__PURE__*/React.createElement("h2", {
  className: "qy-h2 qy-grad-text"
}, "Let's Connect"), /*#__PURE__*/React.createElement("p", {
  className: "qy-section-sub"
}, "Have a project? A coffee? An idea half-baked? I want to hear it.")), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "qy-h3"
}, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-ico"
}, /*#__PURE__*/React.createElement(IconMail, {
  size: 20
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-lab"
}, "Email"), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-val"
}, "cqyestateyuki@gmail.com"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-ico"
}, /*#__PURE__*/React.createElement(IconMapPin, {
  size: 20
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-lab"
}, "Location"), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-val"
}, "New York, NY"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-socials"
}, /*#__PURE__*/React.createElement("a", {
  className: "qy-social"
}, /*#__PURE__*/React.createElement(IconGithub, {
  size: 20
})), /*#__PURE__*/React.createElement("a", {
  className: "qy-social"
}, /*#__PURE__*/React.createElement(IconLinkedin, {
  size: 20
})))), /*#__PURE__*/React.createElement("form", {
  className: "qy-form",
  onSubmit: e => e.preventDefault()
}, /*#__PURE__*/React.createElement("h3", {
  className: "qy-h3"
}, "Send a Message"), /*#__PURE__*/React.createElement("div", {
  className: "qy-form-row"
}, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
  placeholder: "Your name"
})), /*#__PURE__*/React.createElement("label", null, "Email", /*#__PURE__*/React.createElement("input", {
  placeholder: "you@example.com"
}))), /*#__PURE__*/React.createElement("label", null, "Subject", /*#__PURE__*/React.createElement("input", {
  placeholder: "Project subject"
})), /*#__PURE__*/React.createElement("label", null, "Message", /*#__PURE__*/React.createElement("textarea", {
  rows: "4",
  placeholder: "Your message"
})), /*#__PURE__*/React.createElement("button", {
  className: "qy-btn qy-btn-glow qy-btn-wide",
  type: "submit"
}, /*#__PURE__*/React.createElement(IconSend, {
  size: 18
}), "Send Message"))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "qy-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-logo qy-grad-text"
}, "Qingyu Cao"), /*#__PURE__*/React.createElement("p", {
  className: "qy-footer-blurb"
}, "Creative Developer & Designer specializing in innovative digital experiences. Let's create something amazing together.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-h"
}, "Quick Links"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Work"), /*#__PURE__*/React.createElement("li", null, "About"), /*#__PURE__*/React.createElement("li", null, "Contact"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-h"
}, "Get in Touch"), /*#__PURE__*/React.createElement("p", {
  className: "qy-footer-soft"
}, "cqyestateyuki@gmail.com", /*#__PURE__*/React.createElement("br", null), "New York, NY"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-bar"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Qingyu Cao. Made with ", /*#__PURE__*/React.createElement(IconHeart, {
  size: 14
}), " and lots of coffee."), /*#__PURE__*/React.createElement("span", {
  className: "qy-footer-soft"
}, "Built with React & Tailwind CSS")));
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "qy-app"
}, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(AuroraHero, null), /*#__PURE__*/React.createElement(Showcase, null), /*#__PURE__*/React.createElement(DarkGrid, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio_v2/app.jsx
try { (() => {
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

const {
  useState,
  useEffect,
  useRef
} = React;

// ---------- Lucide-style strokes ---------- //
const Icon = ({
  size = 20,
  children
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, children);
const IconDownload = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  x2: "12",
  y1: "15",
  y2: "3"
}));
const IconChevronDown = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const IconArrowUp = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "m5 12 7-7 7 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5"
}));
const IconArrowRight = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));
const IconSend = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "m22 2-7 20-4-9-9-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 2 11 13"
}));
const IconHeart = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}));
const IconGlobe = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
}));
const IconMail = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 5L2 7"
}));
const IconMapPin = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const IconGithub = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
}));
const IconLinkedin = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "12"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}));

// ---------- Project data ---------- //
const PROJECTS = [{
  id: "ai-community",
  title: "AI Built-in Community Platform",
  tags: ["AI", "UIUX", "Programming", "Product Design", "Research"],
  techs: ["Figma", "React", "TypeScript", "Next.js"],
  brief: "An in-app integrated community system designed for AI Tools.",
  img: "../../assets/images/aicommunity-homepage.png",
  headline: "AI Built-in Community Platform",
  category: "AI Product Design & Development"
}, {
  id: "stumbldoor",
  title: "Stumbldoor",
  tags: ["UIUX", "Research"],
  techs: ["Figma", "Wireframe", "Prototype", "Visual Design"],
  brief: "An innovative digital platform that reimagines the traditional library experience for modern users.",
  headline: ["The", "Future of", "Reading"],
  category: "Edtech"
}, {
  id: "spark-up",
  title: "Spark Up",
  tags: ["AI", "Product Design", "UIUX", "Programming", "Research"],
  techs: ["Figma", "Next.js", "Tailwind CSS", "OpenAI API"],
  brief: "A startup readiness tool that helps first-time founders understand where they stand and what to do next."
}, {
  id: "excel-ai",
  title: "Excel AI Agent",
  tags: ["AI", "Programming", "Product Design"],
  techs: ["AI Agent development", "HTML", "Python", "WebSocket"],
  brief: "A natural language-powered Excel data analysis assistant that enables non-technical users to query spreadsheets.",
  img: "../../assets/images/aicommunity-search.png"
}, {
  id: "music-encounter",
  title: "Music Encounter",
  tags: ["Game", "Product Design"],
  techs: ["Unity", "C#", "3D Modeling", "Game Design"],
  brief: "Third-person 3D open-world social adventure set in a fantasy musical world."
}, {
  id: "petiboxy",
  title: "Petiboxy",
  tags: ["UIUX", "Product Design"],
  techs: ["Figma", "Framer", "Brand Identity"],
  brief: "Subscription pet supply box — onboarding flow and visual identity for early launch."
}, {
  id: "ziplink",
  title: "Ziplink",
  tags: ["Programming", "Product Design"],
  techs: ["Node.js", "Postgres", "TypeScript"],
  brief: "Tiny URL shortener with link analytics and team folders."
}, {
  id: "eternal-dreams",
  title: "Eternal Dreams",
  tags: ["Game", "Research"],
  techs: ["Unity", "Narrative Design"],
  brief: "Narrative game research probe on dream-loop mechanics and player attachment."
}];

// ---------- Word constellation data ---------- //
const HERO_WORDS = [{
  t: "PROTOTYPE",
  x: 40,
  y: 6,
  s: 28
}, {
  t: "IMPACT",
  x: 64,
  y: 9,
  s: 30
}, {
  t: "EMPATHY",
  x: 8,
  y: 14,
  s: 26
}, {
  t: "RESEARCH",
  x: 22,
  y: 22,
  s: 18
}, {
  t: "CRAFT",
  x: 78,
  y: 22,
  s: 28
}, {
  t: "STRATEGY",
  x: 4,
  y: 36,
  s: 18
}, {
  t: "USER-CENTRIC",
  x: 80,
  y: 50,
  s: 18
}, {
  t: "ITERATION",
  x: 12,
  y: 50,
  s: 16
}, {
  t: "RIGOR",
  x: 28,
  y: 60,
  s: 18
}, {
  t: "LISTEN",
  x: 70,
  y: 56,
  s: 17
}, {
  t: "CLARITY",
  x: 60,
  y: 68,
  s: 22
}, {
  t: "SIMPLICITY",
  x: 82,
  y: 70,
  s: 24
}, {
  t: "INNOVATION",
  x: 18,
  y: 76,
  s: 18
}, {
  t: "STORYTELLING",
  x: 48,
  y: 84,
  s: 17
}, {
  t: "DETAIL",
  x: 32,
  y: 90,
  s: 18
}, {
  t: "SYSTEMS",
  x: 66,
  y: 38,
  s: 16
}];
const HERO_PARTICLES = [{
  x: 86,
  y: 32,
  d: 0
}, {
  x: 88,
  y: 38,
  d: .8
}, {
  x: 84,
  y: 44,
  d: 1.2
}, {
  x: 78,
  y: 36,
  d: .4
}, {
  x: 80,
  y: 28,
  d: 1.6
}, {
  x: 76,
  y: 50,
  d: 2.0
}, {
  x: 12,
  y: 84,
  d: .6
}, {
  x: 18,
  y: 82,
  d: 1.4
}];

// ---------- Hero v2 ---------- //
const HeroV2 = () => /*#__PURE__*/React.createElement("section", {
  className: "qy-hero-v2"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-hero-grain",
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "qy-words",
  "aria-hidden": "true"
}, HERO_WORDS.map((w, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  className: "qy-word",
  style: {
    left: `${w.x}%`,
    top: `${w.y}%`,
    fontSize: w.s
  }
}, w.t))), /*#__PURE__*/React.createElement("div", {
  className: "qy-particles",
  "aria-hidden": "true"
}, HERO_PARTICLES.map((p, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "qy-particle",
  style: {
    left: `${p.x}%`,
    top: `${p.y}%`,
    animation: `qy-pulse 3s ease-in-out ${p.d}s infinite`
  }
}))), /*#__PURE__*/React.createElement("div", {
  className: "qy-hero-v2-inner"
}, /*#__PURE__*/React.createElement("h1", {
  className: "qy-marquee"
}, "QINGYU"), /*#__PURE__*/React.createElement("div", {
  className: "qy-marquee-cap"
}, "PRODUCT DESIGNER"), /*#__PURE__*/React.createElement("p", {
  className: "qy-hero-v2-lede"
}, "A Product Designer who ", /*#__PURE__*/React.createElement("b", null, "builds, tests, and ships"), ". I combine design intuition with engineering depth to ", /*#__PURE__*/React.createElement("b", null, "launch real products"), " in fast-moving environments."), /*#__PURE__*/React.createElement("div", {
  className: "qy-cta-row"
}, /*#__PURE__*/React.createElement("button", {
  className: "qy-btn qy-btn-light"
}, "View Works"), /*#__PURE__*/React.createElement("button", {
  className: "qy-btn qy-btn-outline-light"
}, /*#__PURE__*/React.createElement(IconDownload, {
  size: 18
}), "Resume"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-hero-chevron"
}, /*#__PURE__*/React.createElement(IconChevronDown, {
  size: 28
})));

// ---------- Glassy nav (unchanged behaviour) ---------- //
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "qy-nav " + (scrolled ? "is-scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-nav-logo qy-grad-text"
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    className: "qy-nav-items"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qy-nav-link is-active"
  }, "Work"), /*#__PURE__*/React.createElement("span", {
    className: "qy-nav-link"
  }, "About"), /*#__PURE__*/React.createElement("span", {
    className: "qy-nav-link"
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    className: "qy-lang"
  }, /*#__PURE__*/React.createElement(IconGlobe, {
    size: 14
  }), "EN"))));
};

// ---------- Selected Work v2 — asymmetric editorial rows ---------- //
const FEATURE_ROWS = [{
  p: PROJECTS[0],
  artStyle: {
    background: "#f3f0ff"
  },
  artNode: /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/aicommunity-homepage.png",
    alt: "AI Community Platform"
  })
}, {
  p: PROJECTS[1],
  artStyle: {
    background: "#0a0a14"
  },
  artNode: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "qy-feature-art-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-feature-art-particle",
    style: {
      top: "20%",
      left: "18%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-feature-art-particle",
    style: {
      top: "32%",
      left: "12%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-feature-art-particle",
    style: {
      top: "62%",
      left: "22%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-feature-art-particle",
    style: {
      top: "70%",
      left: "10%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "qy-feature-art-headline"
  }, /*#__PURE__*/React.createElement("span", null, "The"), /*#__PURE__*/React.createElement("span", null, "Future of"), /*#__PURE__*/React.createElement("span", null, "Reading")))
}];
const SelectedWorkV2 = () => /*#__PURE__*/React.createElement("section", {
  className: "qy-showcase-v2"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-section-head"
}, /*#__PURE__*/React.createElement("span", {
  className: "qy-eyebrow"
}, "Selected Work"), /*#__PURE__*/React.createElement("h2", null, "Projects I've shipped & refined.")), FEATURE_ROWS.map((row, i) => /*#__PURE__*/React.createElement("div", {
  key: row.p.id,
  className: "qy-feature-row " + (i % 2 === 1 ? "is-flipped" : "")
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-feature-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-feature-eyebrow"
}, String(i + 1).padStart(2, "0"), " / Featured"), /*#__PURE__*/React.createElement("div", {
  className: "qy-feature-tags"
}, row.p.tags.slice(0, 3).map(t => /*#__PURE__*/React.createElement("span", {
  key: t,
  className: "qy-tag qy-tag-purple"
}, t))), /*#__PURE__*/React.createElement("h3", {
  className: "qy-feature-title"
}, row.p.title), /*#__PURE__*/React.createElement("p", {
  className: "qy-feature-tagline"
}, row.p.brief), /*#__PURE__*/React.createElement("a", {
  className: "qy-feature-link"
}, "View Project ", /*#__PURE__*/React.createElement(IconArrowRight, {
  size: 14
}))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-feature-art",
  style: row.artStyle
}, row.artNode), /*#__PURE__*/React.createElement("div", {
  className: "qy-feature-foot"
}, /*#__PURE__*/React.createElement("span", null, row.p.category || row.p.tags[0]), /*#__PURE__*/React.createElement("a", {
  className: "qy-link"
}, "Click to explore \u2192"))))));

// ---------- More Projects v2 ---------- //
const FILTERS = ["All", "AI", "UIUX", "Product Design", "Programming", "Game", "Research"];
const MoreProjectsV2 = () => {
  const [active, setActive] = useState("All");
  const visible = PROJECTS.filter(p => active === "All" || p.tags.includes(active));
  return /*#__PURE__*/React.createElement("section", {
    className: "qy-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-section-head qy-on-dark",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "qy-on-dark-title"
  }, "More Projects"), /*#__PURE__*/React.createElement("div", {
    className: "qy-filter-row-v2"
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "qy-filter-v2 " + (active === f ? "is-active" : ""),
    onClick: () => setActive(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-grid-v2"
  }, visible.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    className: "qy-dark-card-v2",
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-card-v2-art"
  }, p.img ? /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "qy-dark-card-v2-art-label"
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-card-v2-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-card-v2-tags"
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "qy-tag"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-card-v2-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-card-v2-brief"
  }, p.brief), /*#__PURE__*/React.createElement("div", {
    className: "qy-dark-card-v2-techs"
  }, (p.techs || []).slice(0, 4).map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, "#", t))))))));
};

// ---------- About + skills (unchanged) ---------- //
const SKILLS = [{
  title: "UI/UX Design",
  desc: "Web and mobile interfaces grounded in user research and rapid prototyping."
}, {
  title: "Game Design",
  desc: "3D worlds, social play, and interactive narratives. Unity-first."
}, {
  title: "Product Strategy",
  desc: "Brand, positioning, and growth for early-stage products."
}, {
  title: "AI Tooling",
  desc: "Practical AI integrations — agents, prompt design, retrieval."
}];
const About = () => /*#__PURE__*/React.createElement("section", {
  className: "qy-about"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-about-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "qy-eyebrow",
  style: {
    display: "block",
    color: "var(--custom-purple)",
    fontSize: 13,
    letterSpacing: ".3em",
    textTransform: "uppercase",
    marginBottom: 20,
    fontWeight: 500
  }
}, "About Me"), /*#__PURE__*/React.createElement("h2", {
  className: "qy-h2",
  style: {
    background: "none",
    WebkitTextFillColor: "initial",
    color: "var(--fg)",
    fontSize: "clamp(40px, 5vw, 64px)",
    fontWeight: 500,
    letterSpacing: "-.02em",
    marginBottom: 32
  }
}, "A builder who designs, & a designer who codes."), /*#__PURE__*/React.createElement("p", null, "I'm a product designer who codes. My favorite shipping cadence is Friday: a real merge, a real screenshot, a real user."), /*#__PURE__*/React.createElement("p", null, "Most of my work lives at the intersection of ", /*#__PURE__*/React.createElement("b", null, "design"), ", ", /*#__PURE__*/React.createElement("b", null, "game systems"), ", and ", /*#__PURE__*/React.createElement("b", null, "AI tooling"), " \u2014 which means I draw a lot, prototype faster than I'd like to admit, and always test on a friend before I ship."), /*#__PURE__*/React.createElement("p", null, "Currently in NYC. Open to product design, design engineering, and game UX roles."), /*#__PURE__*/React.createElement("div", {
  className: "qy-tag-stack"
}, /*#__PURE__*/React.createElement("span", {
  className: "qy-tag qy-tag-purple"
}, "Builder"), /*#__PURE__*/React.createElement("span", {
  className: "qy-tag qy-tag-blue"
}, "Researcher"), /*#__PURE__*/React.createElement("span", {
  className: "qy-tag qy-tag-green"
}, "Storyteller"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-skills-grid"
}, SKILLS.map(s => /*#__PURE__*/React.createElement("div", {
  key: s.title,
  className: "qy-skill"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-skill-ico",
  style: {
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20
  }
}, s.title.charAt(0))), /*#__PURE__*/React.createElement("div", {
  className: "qy-skill-title"
}, s.title), /*#__PURE__*/React.createElement("div", {
  className: "qy-skill-desc"
}, s.desc))))), /*#__PURE__*/React.createElement("div", {
  className: "qy-stats"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-num qy-grad-text"
}, "15+"), /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-lab"
}, "Projects Completed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-num qy-grad-text"
}, "3+"), /*#__PURE__*/React.createElement("div", {
  className: "qy-stat-lab"
}, "Years Experience"))));

// ---------- Project Detail surface ---------- //
const TOC_ITEMS = ["Overview", "The Problem", "Research", "Iteration", "Technical", "Final Solution", "Impact & Reflection"];
const ProjectDetail = () => {
  const [active, setActive] = useState("Overview");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      padding: "80px 0",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-kit-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qy-kit-label-num"
  }, "06 /"), /*#__PURE__*/React.createElement("span", {
    className: "qy-kit-label-name"
  }, "Project Detail Surface")), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-overview"
  }, /*#__PURE__*/React.createElement("p", {
    className: "qy-detail-eyebrow"
  }, "Project Overview"), /*#__PURE__*/React.createElement("h1", {
    className: "qy-detail-h1"
  }, "Transform AI Learning Into Community Experience"), /*#__PURE__*/React.createElement("p", null, "AI applications such as ChatGPT, Grok, and Claude currently ", /*#__PURE__*/React.createElement("a", {
    className: "qy-em-link"
  }, "lack built-in communities"), ", leaving everyday users without a dedicated space to learn, share, and connect. AI Built-in Community Platform ", /*#__PURE__*/React.createElement("a", {
    className: "qy-em-link"
  }, "fills this critical gap"), " by offering an intuitive, accessible experience that ", /*#__PURE__*/React.createElement("a", {
    className: "qy-em-link"
  }, "transforms isolated AI use into collaborative discovery"), ". The platform supports multiple post types: conversation & thoughts sharing, prompt discovery, and community events along with trending search and a prompt voting system. This combination enables users not only to ", /*#__PURE__*/React.createElement("a", {
    className: "qy-em-link"
  }, "learn useful AI tips but also to express themselves, exchange ideas, and feel a sense of belonging."), " For product owners, the community drives ", /*#__PURE__*/React.createElement("a", {
    className: "qy-em-link"
  }, "user retention"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "qy-callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-callout-h"
  }, "The Challenge"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "How might I create an ecosystem where users connect, collaborate, and create value for one another?"), /*#__PURE__*/React.createElement("li", null, "How might I enable users to easily share their AI usage experiences and insights?"), /*#__PURE__*/React.createElement("li", null, "How might I help users quickly find relevant, high-quality AI content, prompts, and events?"), /*#__PURE__*/React.createElement("li", null, "How might I lower the barrier to entry for AI users to participate in community learning?"), /*#__PURE__*/React.createElement("li", null, "How might I ensure the quality and reliability of shared AI content and prompts?"))), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-section",
    id: "the-problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-num"
  }, "01"), /*#__PURE__*/React.createElement("h2", {
    className: "qy-detail-h2"
  }, "Color & Token System"), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-sublab"
  }, "Semantic roles, not just a palette"), /*#__PURE__*/React.createElement("p", null, "Every color maps to a purpose: cyan signals action, violet carries brand authority, and four surface layers create depth. Light and dark themes share the same semantic structure, so switching themes never breaks the hierarchy."), /*#__PURE__*/React.createElement("p", null, "I started with one guiding principle: ", /*#__PURE__*/React.createElement("b", null, "executive clarity"), ". When the canvas spans 12+ pages, the system has to do the thinking for the user \u2014 what's important, what's secondary, what's context.")), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-section",
    id: "research"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-num"
  }, "02"), /*#__PURE__*/React.createElement("h2", {
    className: "qy-detail-h2"
  }, "Research & Discovery"), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-sublab"
  }, "Talking to 12 founders before drawing a pixel"), /*#__PURE__*/React.createElement("p", null, "I ran semi-structured interviews with twelve early-stage founders. The recurring pain wasn't lack of tools \u2014 it was lack of ", /*#__PURE__*/React.createElement("b", null, "continuity"), " between tools. Insights were scattered across Slack threads, voice memos, and pinned tabs, and nobody had a way to braid them back together.")), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-section",
    id: "iteration"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-num"
  }, "03"), /*#__PURE__*/React.createElement("h2", {
    className: "qy-detail-h2"
  }, "Iteration & Prototype"), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-sublab"
  }, "Three rounds, each one tighter than the last"), /*#__PURE__*/React.createElement("p", null, "The first round shipped wide \u2014 five competing nav models, three onboarding flows. Round two cut to one clear winner. Round three was just polish: copy, pacing, the friction points users had circled in red.")), /*#__PURE__*/React.createElement("div", {
    className: "qy-detail-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "qy-back-top",
    "aria-label": "Back to top"
  }, /*#__PURE__*/React.createElement(IconArrowUp, {
    size: 18
  })))), /*#__PURE__*/React.createElement("aside", {
    className: "qy-toc"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "qy-toc-list"
  }, TOC_ITEMS.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    className: active === item ? "is-active" : "",
    onClick: () => setActive(item)
  }, item))))));
};

// ---------- Contact + footer (unchanged) ---------- //
const Contact = () => /*#__PURE__*/React.createElement("section", {
  className: "qy-contact"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-section-head"
}, /*#__PURE__*/React.createElement("h2", {
  className: "qy-h2 qy-grad-text"
}, "Let's Connect"), /*#__PURE__*/React.createElement("p", {
  className: "qy-section-sub"
}, "Have a project? A coffee? An idea half-baked? I want to hear it.")), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "qy-h3"
}, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-ico"
}, /*#__PURE__*/React.createElement(IconMail, {
  size: 20
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-lab"
}, "Email"), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-val"
}, "cqyestateyuki@gmail.com"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-ico"
}, /*#__PURE__*/React.createElement(IconMapPin, {
  size: 20
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-lab"
}, "Location"), /*#__PURE__*/React.createElement("div", {
  className: "qy-contact-val"
}, "New York, NY"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-socials"
}, /*#__PURE__*/React.createElement("a", {
  className: "qy-social"
}, /*#__PURE__*/React.createElement(IconGithub, {
  size: 20
})), /*#__PURE__*/React.createElement("a", {
  className: "qy-social"
}, /*#__PURE__*/React.createElement(IconLinkedin, {
  size: 20
})))), /*#__PURE__*/React.createElement("form", {
  className: "qy-form",
  onSubmit: e => e.preventDefault()
}, /*#__PURE__*/React.createElement("h3", {
  className: "qy-h3"
}, "Send a Message"), /*#__PURE__*/React.createElement("div", {
  className: "qy-form-row"
}, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
  placeholder: "Your name"
})), /*#__PURE__*/React.createElement("label", null, "Email", /*#__PURE__*/React.createElement("input", {
  placeholder: "you@example.com"
}))), /*#__PURE__*/React.createElement("label", null, "Subject", /*#__PURE__*/React.createElement("input", {
  placeholder: "Project subject"
})), /*#__PURE__*/React.createElement("label", null, "Message", /*#__PURE__*/React.createElement("textarea", {
  rows: "4",
  placeholder: "Your message"
})), /*#__PURE__*/React.createElement("button", {
  className: "qy-btn qy-btn-glow qy-btn-wide",
  type: "submit"
}, /*#__PURE__*/React.createElement(IconSend, {
  size: 18
}), "Send Message"))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "qy-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-logo qy-grad-text"
}, "Qingyu Cao"), /*#__PURE__*/React.createElement("p", {
  className: "qy-footer-blurb"
}, "Creative Developer & Designer specializing in innovative digital experiences. Let's create something amazing together.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-h"
}, "Quick Links"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Work"), /*#__PURE__*/React.createElement("li", null, "About"), /*#__PURE__*/React.createElement("li", null, "Contact"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-h"
}, "Get in Touch"), /*#__PURE__*/React.createElement("p", {
  className: "qy-footer-soft"
}, "cqyestateyuki@gmail.com", /*#__PURE__*/React.createElement("br", null), "New York, NY"))), /*#__PURE__*/React.createElement("div", {
  className: "qy-footer-bar"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Qingyu Cao. Made with ", /*#__PURE__*/React.createElement(IconHeart, {
  size: 14
}), " and lots of coffee."), /*#__PURE__*/React.createElement("span", {
  className: "qy-footer-soft"
}, "Built with React & Tailwind CSS")));

// ---------- Section labels (so the kit reads as a kit) ---------- //
const KitLabel = ({
  num,
  name,
  onDark
}) => /*#__PURE__*/React.createElement("div", {
  className: "qy-kit-label " + (onDark ? "is-on-dark" : "")
}, /*#__PURE__*/React.createElement("span", {
  className: "qy-kit-label-num"
}, num, " /"), /*#__PURE__*/React.createElement("span", {
  className: "qy-kit-label-name"
}, name));
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "qy-app",
  "data-screen-label": "Portfolio UI Kit v2"
}, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(HeroV2, null), /*#__PURE__*/React.createElement(KitLabel, {
  num: "01",
  name: "Hero \u2014 Word Constellation"
}), /*#__PURE__*/React.createElement(KitLabel, {
  num: "02",
  name: "Selected Work \u2014 Editorial Rows"
}), /*#__PURE__*/React.createElement(SelectedWorkV2, null), /*#__PURE__*/React.createElement(KitLabel, {
  num: "03",
  name: "More Projects \u2014 Filtered Grid",
  onDark: false
}), /*#__PURE__*/React.createElement(MoreProjectsV2, null), /*#__PURE__*/React.createElement(KitLabel, {
  num: "04",
  name: "About"
}), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(ProjectDetail, null), /*#__PURE__*/React.createElement(KitLabel, {
  num: "07",
  name: "Contact"
}), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio_v2/app.jsx", error: String((e && e.message) || e) }); }

})();
