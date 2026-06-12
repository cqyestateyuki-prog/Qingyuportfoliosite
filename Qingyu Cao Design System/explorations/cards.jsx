/**
 * 5 different design directions for the More Projects card.
 * Each artboard shows the SAME 3 projects, so you compare apples-to-apples.
 */

const SAMPLES = [
  { id: "ai", title: "AI Built-in Community Platform",
    tags: ["AI", "UIUX", "Programming"],
    techs: ["Figma", "React", "TypeScript", "Next.js"],
    brief: "An in-app integrated community system designed for AI Tools.",
    img: "../assets/images/aicommunity-homepage.png",
    poster: "AI" },
  { id: "stumb", title: "Stumbldoor",
    tags: ["UIUX", "Research"],
    techs: ["Figma", "Wireframe", "Prototype"],
    brief: "Reimagining the traditional library experience for modern users.",
    img: null, poster: "The Future of Reading" },
  { id: "spark", title: "Spark Up",
    tags: ["AI", "Product Design", "Programming"],
    techs: ["Figma", "Next.js", "Tailwind", "OpenAI"],
    brief: "A startup readiness tool that helps first-time founders understand where they stand.",
    img: "../assets/images/aicommunity-trending.png", poster: "Spark" },
];

// ============================================================
// A — Editorial Magazine
// ============================================================
const CardA = ({ p, n }) => (
  <div className="exp-card exp-a">
    <div className="exp-a-num">N° {String(n).padStart(2, "0")}</div>
    <div className="exp-a-img">{p.img && <img src={p.img} alt="" />}</div>
    <h3 className="exp-a-title">{p.title}</h3>
    <div className="exp-a-meta">
      <div className="exp-a-tags">{p.tags.slice(0,2).map(t => <span key={t}>{t}</span>)}</div>
      <span style={{ marginLeft: "auto" }}>2025</span>
    </div>
  </div>
);

// ============================================================
// B — Brutalist Mono
// ============================================================
const CardB = ({ p, n }) => (
  <div className="exp-card exp-b">
    <div className="exp-b-bar">
      <span>PROJECT_{String(n).padStart(2,"0")}</span>
      <span className="dot"/>
    </div>
    <div className="exp-b-img">{p.img && <img src={p.img} alt="" />}</div>
    <div className="exp-b-body">
      <div className="exp-b-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
      <h3 className="exp-b-title">{p.title}</h3>
      <div className="exp-b-meta">
        <span>// {p.techs[0]}</span>
        <span>READ →</span>
      </div>
    </div>
  </div>
);

// ============================================================
// C — Glass Stack
// ============================================================
const CardC = ({ p }) => (
  <div className="exp-card exp-c">
    <div className="exp-c-img">
      <div className="exp-c-img-glow"/>
      {p.img && <img src={p.img} alt="" />}
    </div>
    <div className="exp-c-body">
      <div className="exp-c-tags">{p.tags.slice(0,3).map(t => <span key={t}>{t}</span>)}</div>
      <h3 className="exp-c-title">{p.title}</h3>
      <p className="exp-c-brief">{p.brief}</p>
      <div className="exp-c-foot">
        <div className="exp-c-techs">{p.techs.slice(0,2).map(t => "#"+t).join(" ")}</div>
        <div className="exp-c-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  </div>
);

// ============================================================
// D — Asymmetric Poster
// ============================================================
const CardD = ({ p, n }) => (
  <div className="exp-card exp-d">
    <div className="exp-d-float">
      {p.img ? <img src={p.img} alt="" /> :
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 700, color: "rgba(255,255,255,.7)",
          letterSpacing: "-.02em", textAlign: "center", padding: 20, lineHeight: 1 }}>{p.poster}</div>}
    </div>
    <div className="exp-d-side">{p.tags[0]} · {String(n).padStart(2, "0")}</div>
    <div className="exp-d-num">{String(n).padStart(2, "0")}</div>
    <h3 className="exp-d-title">{p.title}</h3>
    <p className="exp-d-brief">{p.brief}</p>
    <div className="exp-d-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
  </div>
);

// ============================================================
// E — Hover Reveal Minimal
// ============================================================
const CardE = ({ p }) => (
  <div className="exp-card exp-e">
    <div className="exp-e-img">
      {p.img ? <img src={p.img} alt="" /> : (
        <>
          <div className="exp-e-img-fallback"/>
          <div className="exp-e-img-label">{p.poster}</div>
        </>
      )}
    </div>
    <div className="exp-e-overlay"/>
    <div className="exp-e-body">
      <div className="exp-e-tags">{p.tags.slice(0,3).map(t => <span key={t}>{t}</span>)}</div>
      <h3 className="exp-e-title">{p.title}</h3>
      <p className="exp-e-brief">{p.brief}</p>
      <div className="exp-e-cta">View case study →</div>
    </div>
  </div>
);

// ============================================================
// Stack — three cards rendered with the same direction
// ============================================================
const Stack = ({ Card, label, desc }) => (
  <div className="exp-stack">
    <div>
      <div className="exp-label">{label}</div>
      <div className="exp-desc">{desc}</div>
    </div>
    {SAMPLES.map((p, i) => <Card key={p.id} p={p} n={i+1} />)}
  </div>
);

// ============================================================
// Canvas
// ============================================================
const App = () => (
  <div className="exp-bg">
    <DesignCanvas>
      <DCSection id="more-projects" title="More Projects — Card Directions"
                 subtitle="Five distinct design treatments, all rendering the same three projects. Drag to reorder, double-click any artboard to focus.">
        <DCArtboard id="a" label="A · Editorial Magazine" width={384} height={1640}>
          <Stack Card={CardA}
            label="A — Editorial"
            desc="Big serif titles, hairline dividers, no chrome. Reads like a printed feature column. Restrained metadata at the bottom." />
        </DCArtboard>
        <DCArtboard id="b" label="B · Brutalist Mono" width={384} height={1640}>
          <Stack Card={CardB}
            label="B — Brutalist"
            desc="Sharp 2px borders, monospaced metadata, solid color header bar. Hover snaps offset for a print-block effect. High contrast, opinionated." />
        </DCArtboard>
        <DCArtboard id="c" label="C · Glass Stack" width={384} height={1640}>
          <Stack Card={CardC}
            label="C — Glass"
            desc="Frosted glass surface, inner top-edge highlight, soft purple radial glow under the image. Hover lifts and rotates the corner arrow." />
        </DCArtboard>
        <DCArtboard id="d" label="D · Asymmetric Poster" width={384} height={1700}>
          <Stack Card={CardD}
            label="D — Poster"
            desc="Image floats above the card, rotated label runs up the right edge, oversized ghost number behind the title. Magazine-spread feel." />
        </DCArtboard>
        <DCArtboard id="e" label="E · Hover Reveal" width={384} height={1640}>
          <Stack Card={CardE}
            label="E — Hover Reveal"
            desc="Image fills the card. Rest = title only. Hover slides up the brief, tags, and CTA. Cleanest possible grid; rewards exploration." />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
