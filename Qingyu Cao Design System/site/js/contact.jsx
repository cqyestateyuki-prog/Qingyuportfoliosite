/**
 * Contact — full page version with form, FAQ, calendar links.
 */

const App = () => (
  <div className="bt-page" data-screen-label="06 Contact">
    <Nav active=""/>
    <main className="bt-page-body">
      <section className="bt-contact" style={{ paddingTop: 120 }}>
        <div className="bt-contact-card">
          <div className="bt-eyebrow" style={{ color: "rgba(255,255,255,.5)" }}>— Contact</div>
          <h1 className="bt-contact-h">Let's build<br/>something useful.</h1>
          <p className="bt-contact-sub">Open to product design roles, AI tooling collaborations, and short consulting engagements. I reply within two days.</p>
          <div className="bt-contact-actions">
            <a className="bt-btn bt-btn-primary" style={{ background: "#fff", color: "#1d1d1f" }} href="mailto:hello@qingyucao.com">hello@qingyucao.com</a>
            <a className="bt-btn bt-btn-ghost" style={{ background: "rgba(255,255,255,.08)", color: "#fff" }} href="#">Book a call <ArrowR/></a>
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="bt-eyebrow">— FAQ</div>
          <h2 className="bt-h1" style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: 64 }}>Quick answers.</h2>
          <div style={{ display: "grid", gap: 0 }}>
            {[
              { q: "Are you available for full-time roles?", a: "Yes — open to senior product / design engineering roles in NYC, SF, or remote (US hours)." },
              { q: "What's a typical engagement?", a: "4–12 weeks. Big enough to ship something real, small enough to stay sharp. I scope and fixed-price each one." },
              { q: "Do you work on AI products specifically?", a: "Yes — that's most of my recent work. UX for agents, generative tooling, prompt-driven interfaces." },
              { q: "Can I see code samples?", a: "GitHub is linked in the footer. For private work, I share representative case studies on request." },
            ].map(({ q, a }) => (
              <div key={q} style={{ padding: "32px 0", borderBottom: "1px solid rgba(0,0,0,.08)" }}>
                <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.01em", margin: "0 0 12px" }}>{q}</h3>
                <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.6, margin: 0, maxWidth: 760 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
