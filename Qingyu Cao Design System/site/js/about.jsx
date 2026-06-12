/**
 * About — full page. Bio, skill stats, timeline, what-i-believe.
 */

const SKILLS = [
  { n: "01", t: "Product Design", d: "End-to-end UX, from research to shipped UI.", value: "8 yrs" },
  { n: "02", t: "Front-end Engineering", d: "React, TypeScript, Tailwind. Comfortable in any modern stack.", value: "6 yrs" },
  { n: "03", t: "AI Tooling", d: "Prompt engineering, agent UX, generative imagery pipelines.", value: "2 yrs" },
  { n: "04", t: "Game UX", d: "3D worldbuilding, social systems, onboarding for play.", value: "1 yr" },
];

const TIMELINE = [
  { y: "2026", t: "Independent", d: "Building Spark Up & Excel AI Agent. Consulting on AI product UX." },
  { y: "2025", t: "AI Community Platform", d: "Lead designer & engineer on the AI Built-in Community Platform — solo build to v1." },
  { y: "2024", t: "Stumbldoor", d: "Reimagined the library experience — research, design, prototype." },
  { y: "2022", t: "MFA, Carnegie Mellon", d: "Master's in Design, focus on emerging tech & speculative interfaces." },
];

const Beliefs = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
    {[
      { h: "Ship Friday.", p: "A merged PR, a real screenshot, a real user. Anything else is rehearsal." },
      { h: "Design with the model.", p: "AI is a third teammate — not a button. Treat it as such and the work changes." },
      { h: "Edit harder.", p: "Subtraction is the underrated craft. Most polish is just deleting the things that aren't right." },
      { h: "Everything is research.", p: "A bad prototype is a published paper. Failures get more honest answers than surveys." },
    ].map(b => (
      <div key={b.h} style={{ background: "#f5f5f7", borderRadius: 24, padding: 32 }}>
        <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-.01em", margin: "0 0 12px" }}>{b.h}</h3>
        <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.55, margin: 0 }}>{b.p}</p>
      </div>
    ))}
  </div>
);

const App = () => (
  <div className="bt-page" data-screen-label="05 About">
    <Nav active="about"/>
    <main className="bt-page-body">
      <header className="bt-page-head">
        <div className="bt-eyebrow">— About</div>
        <h1 className="bt-h1">Designer who codes,<br/>engineer who designs.</h1>
        <p className="bt-lede">I'm Qingyu Cao — a product designer who builds, tests, and ships. I bridge the gap between idea and interface, between brand and pixel, between vision and implementation.</p>
      </header>

      <section className="bt-skills" style={{ paddingBottom: 80 }}>
        {SKILLS.map(s => (
          <div key={s.n} className="bt-skill">
            <div className="bt-skill-num">{s.n}</div>
            <h3 className="bt-skill-title">{s.t}</h3>
            <p className="bt-skill-desc">{s.d}</p>
            <div style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--custom-purple)" }}>{s.value}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#1d1d1f", color: "#fff", padding: "140px 24px", borderRadius: 0 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "#c4b5fd", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>— Timeline</div>
          <h2 className="bt-h1" style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#fff", marginBottom: 64 }}>The road so far.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", rowGap: 32, columnGap: 48 }}>
            {TIMELINE.map(r => (
              <React.Fragment key={r.y}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "#86868b", paddingTop: 4 }}>{r.y}</div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 16 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-.01em", margin: "0 0 8px", color: "#fff" }}>{r.t}</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", lineHeight: 1.55, margin: 0 }}>{r.d}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "140px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="bt-eyebrow">— What I believe</div>
          <h2 className="bt-h1" style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 64 }}>Four working principles.</h2>
          <Beliefs/>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
