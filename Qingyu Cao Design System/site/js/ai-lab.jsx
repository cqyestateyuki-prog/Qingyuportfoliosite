/**
 * AI Lab — full page dedicated to AI-generated imagery + experiments.
 * Sections:
 *  - Hero w/ animated prompt input
 *  - "Series" — a single concept with multiple variations
 *  - Tools used / process
 *  - Mini experiments (small projects that use AI)
 */

const { useState, useEffect } = React;

const PROMPTS = [
  "soft minimal cover art for a reading app, lavender and cream",
  "isometric AI dashboard, glassmorphism, 8k, octane render",
  "abstract neural network, generative, midnight blue",
  "playful onboarding mascot for a pet subscription brand",
];

const TypingPrompt = () => {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState("typing"); // typing -> hold -> erasing
  useEffect(() => {
    const target = PROMPTS[idx];
    let t;
    if (phase === "typing") {
      if (shown.length < target.length) t = setTimeout(() => setShown(target.slice(0, shown.length + 1)), 35);
      else t = setTimeout(() => setPhase("hold"), 1800);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erasing"), 1200);
    } else {
      if (shown.length > 0) t = setTimeout(() => setShown(target.slice(0, shown.length - 1)), 18);
      else { setIdx((idx + 1) % PROMPTS.length); setPhase("typing"); }
    }
    return () => clearTimeout(t);
  }, [shown, phase, idx]);
  return (
    <div className="bt-ai-prompt">
      <div className="bt-ai-prompt-icon"><Sparkle size={16}/></div>
      <div className="bt-ai-prompt-text">{shown}<span className="ai-cur"/></div>
      <span className="bt-ai-prompt-tag">flux-1.1-pro</span>
    </div>
  );
};

// ----- Hero -----
const AIHero = () => (
  <section className="bt-ai-section" style={{ paddingTop: 120, paddingBottom: 120 }}>
    <div className="bt-ai-inner">
      <div className="bt-ai-eyebrow">— AI Lab · 2025 ongoing</div>
      <h1 className="bt-ai-h">A studio inside a <span className="accent">studio.</span></h1>
      <p className="bt-ai-sub">Generative imagery, agent prototypes, prompt-driven systems. The AI Lab is where I treat the model as a collaborator — not a button.</p>
      <TypingPrompt/>
      <div className="bt-ai-grid">
        <div className="bt-ai-tile art-1"><div className="bt-ai-tile-meta"><span>flux · 02</span><span className="seed">#7a3f</span></div></div>
        <div className="bt-ai-tile art-2 is-tall"><div className="bt-ai-tile-meta"><span>mj · 06</span><span className="seed">#9c11</span></div></div>
        <div className="bt-ai-tile art-3"><div className="bt-ai-tile-meta"><span>flux · 04</span><span className="seed">#3e88</span></div></div>
        <div className="bt-ai-tile art-4"><div className="bt-ai-tile-meta"><span>mj · 08</span><span className="seed">#bc20</span></div></div>
        <div className="bt-ai-tile art-5"><div className="bt-ai-tile-meta"><span>flux · 11</span><span className="seed">#aa48</span></div></div>
        <div className="bt-ai-tile art-6"><div className="bt-ai-tile-meta"><span>mj · 14</span><span className="seed">#dd91</span></div></div>
        <div className="bt-ai-tile art-7"><div className="bt-ai-tile-meta"><span>flux · 17</span><span className="seed">#5f72</span></div></div>
        <div className="bt-ai-tile art-8"><div className="bt-ai-tile-meta"><span>mj · 21</span><span className="seed">#ee06</span></div></div>
      </div>
      <div className="bt-ai-tools">
        <span className="bt-ai-tools-label">Tools</span>
        <span>midjourney v7</span>
        <span>flux 1.1 pro</span>
        <span>runway gen-3</span>
        <span>krea</span>
        <span>cursor</span>
        <span>claude 4.5</span>
      </div>
    </div>
  </section>
);

// ----- Series — same prompt evolved -----
const Series = () => {
  const variants = ["art-1", "art-3", "art-4", "art-5"];
  return (
    <section style={{ background: "#fff", color: "#1d1d1f", padding: "140px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start", marginBottom: 64 }}>
          <div>
            <div className="bt-eyebrow">— Series 01</div>
            <h2 className="bt-h1" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>One prompt,<br/>many memories.</h2>
          </div>
          <div>
            <p className="bt-lede" style={{ marginTop: 0 }}>
              I treat each generative session like a sketchbook — same idea, ten directions, then pick. This series started as <em>"a quiet morning, lavender light, paper texture"</em> and ran through Flux variations until something felt like the cover I wanted.
            </p>
            <div className="bt-ai-prompt" style={{ background: "#f5f5f7", border: "1px solid rgba(0,0,0,.08)" }}>
              <div className="bt-ai-prompt-icon"><Sparkle size={16}/></div>
              <div className="bt-ai-prompt-text" style={{ color: "#1d1d1f" }}>a quiet morning, lavender light, paper texture, soft grain, 4:5</div>
              <span className="bt-ai-prompt-tag" style={{ background: "rgba(138,129,215,.18)", color: "var(--custom-purple)" }}>seed:7a3f</span>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {variants.map((v, i) => (
            <div key={v} className={`bt-ai-tile ${v}`} style={{ aspectRatio: "4/5" }}>
              <div className="bt-ai-tile-meta"><span>v{i+1}</span><span className="seed">#7a3f</span></div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 24, marginTop: 32, color: "#86868b", fontSize: 13, fontFamily: "var(--font-mono)" }}>
          <span>steps: 30</span><span>cfg: 7.5</span><span>sampler: euler_a</span><span>seed locked, prompt drift +5%</span>
        </div>
      </div>
    </section>
  );
};

// ----- Process -----
const Process = () => (
  <section style={{ background: "#f5f5f7", padding: "140px 24px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div className="bt-eyebrow">— Process</div>
      <h2 className="bt-h1" style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 64 }}>Less prompt-fishing.<br/>More art-directing.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {[
          { n: "01", t: "Brief like a designer", d: "Aesthetic references, mood, palette, format. The model needs the same brief a human collaborator would." },
          { n: "02", t: "Generate in series", d: "Always 8–16 candidates per direction. Variation is data — pick the strongest, regenerate around it." },
          { n: "03", t: "Edit, don't accept", d: "Bring outputs into Figma. Mask, recolor, retype. The AI is a sketch, not a final asset." },
        ].map(s => (
          <div key={s.n} style={{ background: "#fff", borderRadius: 24, padding: 40, border: "1px solid rgba(0,0,0,.04)" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--custom-purple)", letterSpacing: ".04em", marginBottom: 24 }}>{s.n}</div>
            <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-.01em", marginTop: 0, marginBottom: 12 }}>{s.t}</h3>
            <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.55, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ----- Mini experiments -----
const Experiments = () => {
  const items = [
    { tag: "Agent", title: "Excel AI Agent", blurb: "A natural-language layer over spreadsheets — formulas, pivots, narration.", art: "art-2" },
    { tag: "Agent", title: "Reading copilot", blurb: "Highlights, summarizes, and threads questions back to your library.", art: "art-7" },
    { tag: "Asset", title: "Generative covers", blurb: "Per-chapter book covers for the Stumbldoor case study.", art: "art-3" },
    { tag: "Tool", title: "Brand color extractor", blurb: "Drop an image, get a 5-color tonal palette in OKLCH.", art: "art-1" },
  ];
  return (
    <section style={{ background: "#fff", padding: "140px 24px 160px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="bt-eyebrow">— Experiments</div>
        <h2 className="bt-h1" style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 12 }}>Tiny tools,<br/>big lessons.</h2>
        <p className="bt-lede" style={{ marginBottom: 64 }}>Side experiments where the AI does real work — not just decoration.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {items.map(x => (
            <a key={x.title} href="./project.html" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: 32, borderRadius: 32,
              background: "#f5f5f7", textDecoration: "none", color: "inherit", transition: "background .25s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#efeaff"}
              onMouseLeave={e => e.currentTarget.style.background = "#f5f5f7"}>
              <div className={`bt-ai-tile ${x.art}`} style={{ aspectRatio: "1/1", borderRadius: 16, height: 180, border: "none" }}/>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "var(--custom-purple)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8 }}>{x.tag}</div>
                <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-.01em", margin: "0 0 12px" }}>{x.title}</h3>
                <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.55, margin: "0 0 24px" }}>{x.blurb}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                  Read more <ArrowR size={14}/>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <div className="bt-page" data-screen-label="04 AI Lab" style={{ background: "#fff" }}>
    <Nav active="ai-lab"/>
    <main className="bt-page-body">
      <AIHero/>
      <Series/>
      <Process/>
      <Experiments/>
    </main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
