/**
 * More — 4 DENSE gallery patterns. All show many projects at once;
 * none reveal "one at a time" linearly.
 *
 *  A · Mosaic Grid — asymmetric 6-col blocks, mix of image + typography
 *  B · Index Wall — clean 4-col card grid, all visible at once
 *  C · Pinterest Masonry — variable-height columns, mood-board feel
 *  D · Sticker Sheet — overlapping cards on a dotted board
 */

const { useState, useMemo } = React;

// Visual variety helpers — apply colors per project
const FILLS = ["fill-purple", "fill-dark", "fill-mint", "fill-pink", "fill-amber"];
const fillFor = i => FILLS[i % FILLS.length];

// ============================================================
// A · MOSAIC GRID — 6-col asymmetric blocks
// ============================================================
const Mosaic = () => {
  // Hand-tuned layout for 7 projects: 5 sizes mixing image + text tiles
  const layout = [
    { p: PROJECTS[0], size: "s-3x2", kind: "image" },          // hero img — big
    { p: PROJECTS[1], size: "s-3x2", kind: "text", fill: "fill-dark" },  // dark poster
    { p: PROJECTS[2], size: "s-2x1", kind: "image" },
    { p: PROJECTS[3], size: "s-2x1", kind: "image" },
    { p: PROJECTS[4], size: "s-2x1", kind: "text", fill: "fill-pink" },
    { p: PROJECTS[5], size: "s-3x1", kind: "text", fill: "fill-amber" },
    { p: PROJECTS[6], size: "s-3x1", kind: "text", fill: "fill-mint" },
  ];
  return (
    <section className="bt-more-section">
      <div className="bt-more-h">
        <div>
          <div className="bt-more-label">— Pattern A</div>
          <h2 className="bt-more-title">Mosaic grid</h2>
          <p className="bt-more-blurb">All projects on one screen. Asymmetric 6-column blocks mix image-led and typography-led tiles for visual rhythm. Hover any tile to see the arrow rotate.</p>
        </div>
      </div>
      <div className="bt-mosaic">
        {layout.map((it, i) => (
          <a key={it.p.id} className={`bt-mosaic-tile ${it.size}`} href="./project.html">
            {it.kind === "image" ? (
              <>
                <img src={it.p.img || "../assets/images/aicommunity-hero.jpg"} alt=""/>
                <div className="bt-mosaic-overlay">
                  <div className="bt-mosaic-eyebrow">{it.p.eyebrow} · {it.p.year}</div>
                  <div className="bt-mosaic-title">{it.p.title}</div>
                </div>
              </>
            ) : (
              <div className={`bt-mosaic-text ${it.fill} ${it.size}-text`}>
                <div>
                  <div className="bt-mosaic-eyebrow" style={{ marginBottom: 16 }}>{it.p.eyebrow} · {it.p.year}</div>
                  <div className="bt-mosaic-title">{it.p.tagline.length > 60 ? it.p.title : it.p.tagline}</div>
                </div>
                <div className="bt-mosaic-foot">
                  <span>{it.p.title}</span>
                  <div className="bt-mosaic-arrow"><ArrowR size={12}/></div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// B · INDEX WALL — 4-col uniform card grid + filter chips
// ============================================================
const FILTERS = ["All", "AI", "UIUX", "Product", "Programming", "Game", "Research"];

const IndexWall = () => {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(active)), [active]);
  return (
    <section className="bt-more-section">
      <div className="bt-more-h">
        <div>
          <div className="bt-more-label">— Pattern B</div>
          <h2 className="bt-more-title">Index wall</h2>
          <p className="bt-more-blurb">A clean 4-column card grid where every project lives at the same scale. Predictable, scannable, easy to filter. The default for someone who knows what they're looking for.</p>
        </div>
      </div>
      <div className="bt-filter-bar" style={{ marginBottom: 32 }}>
        <div className="bt-filter-track">
          {FILTERS.map(f => (
            <button key={f} className={"bt-filter " + (active === f ? "is-active" : "")} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="bt-result-count">{visible.length} {visible.length === 1 ? "project" : "projects"}</div>
      </div>
      <div className="bt-index-wall">
        {visible.map((p, i) => (
          <a key={p.id} className="bt-iw-card" href="./project.html">
            {p.img ? (
              <div className="bt-iw-thumb"><img src={p.img} alt=""/></div>
            ) : (
              <div className={`bt-iw-thumb is-text ${fillFor(i + 1)}`}>
                <div className="bt-iw-thumb-text">{p.poster || p.title}</div>
              </div>
            )}
            <div className="bt-iw-body">
              <div className="bt-iw-eyebrow">{p.eyebrow}</div>
              <h3 className="bt-iw-title">{p.title}</h3>
              <div className="bt-iw-meta">
                <div className="bt-iw-tags">{p.tags.slice(0, 2).map(t => <span key={t} className="bt-iw-tag">{t}</span>)}</div>
                <span>{p.year}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// C · PINTEREST MASONRY — variable column heights
// ============================================================
const Masonry = () => {
  // 12 tiles to show density — repeat projects with mix of image/text and varied heights
  const tiles = [
    { p: PROJECTS[0], kind: "image", h: "is-tall" },
    { p: PROJECTS[1], kind: "text", h: "is-extra-tall", fill: "fill-dark" },
    { p: PROJECTS[2], kind: "image" },
    { p: PROJECTS[3], kind: "text", h: "", fill: "fill-purple" },
    { p: PROJECTS[4], kind: "text", h: "is-tall", fill: "fill-pink" },
    { p: PROJECTS[5], kind: "image", h: "is-tall" },
    { p: PROJECTS[6], kind: "text", h: "", fill: "fill-amber" },
    { p: PROJECTS[0], kind: "image" },
    { p: PROJECTS[3], kind: "image", h: "is-tall" },
    { p: PROJECTS[1], kind: "text", h: "", fill: "fill-mint" },
    { p: PROJECTS[2], kind: "image", h: "is-tall" },
    { p: PROJECTS[5], kind: "text", h: "", fill: "fill-purple" },
  ];
  return (
    <section className="bt-more-section">
      <div className="bt-more-h">
        <div>
          <div className="bt-more-label">— Pattern C</div>
          <h2 className="bt-more-title">Mood-board masonry</h2>
          <p className="bt-more-blurb">Pinterest-style columns of mixed-height tiles. Showcases project breadth and visual range — best for someone browsing aesthetically.</p>
        </div>
      </div>
      <div className="bt-pin">
        {tiles.map((t, i) => (
          <a key={i} className={`bt-pin-tile ${t.h || ""} ${t.kind === "text" ? `is-text ${t.fill}` : ""}`} href="./project.html">
            {t.kind === "image" && (
              <>
                <img src={t.p.img || "../assets/images/aicommunity-trending.png"} alt=""/>
                <div className="bt-pin-tile-overlay">
                  <div className="bt-pin-tile-eyebrow">{t.p.eyebrow} · {t.p.year}</div>
                  <div className="bt-pin-tile-title">{t.p.title}</div>
                </div>
              </>
            )}
            {t.kind === "text" && (
              <>
                <div className="bt-pin-tile-eyebrow">{t.p.eyebrow} · {t.p.year}</div>
                <div className="bt-pin-tile-title">{t.p.title}</div>
              </>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// D · STICKER SHEET — overlapping cards, dotted board background
// ============================================================
const Sticker = () => {
  // Pre-positioned absolute placements for 8 stickers (px coords)
  const stickers = [
    { p: PROJECTS[0], left: "4%",  top: 40,  w: 320, h: 240, rot: -3, kind: "image" },
    { p: PROJECTS[1], left: "33%", top: 100, w: 280, h: 200, rot: 2,  kind: "text", fill: "fill-dark" },
    { p: PROJECTS[2], left: "62%", top: 30,  w: 300, h: 220, rot: -2, kind: "image" },
    { p: PROJECTS[3], left: "12%", top: 320, w: 260, h: 200, rot: 4,  kind: "image" },
    { p: PROJECTS[4], left: "38%", top: 360, w: 300, h: 200, rot: -1, kind: "text", fill: "fill-pink" },
    { p: PROJECTS[5], left: "68%", top: 290, w: 260, h: 220, rot: 3,  kind: "text", fill: "fill-mint" },
    { p: PROJECTS[6], left: "20%", top: 580, w: 280, h: 180, rot: -2, kind: "text", fill: "fill-amber" },
    { p: PROJECTS[2], left: "52%", top: 600, w: 300, h: 200, rot: 1,  kind: "image" },
  ];
  return (
    <section className="bt-more-section" style={{ paddingBottom: 160 }}>
      <div className="bt-more-h">
        <div>
          <div className="bt-more-label">— Pattern D</div>
          <h2 className="bt-more-title">Sticker board</h2>
          <p className="bt-more-blurb">Cards arranged like Polaroids on a pinboard. A little playful, a little messy. Hover snaps the card straight + brings it forward. Best for portfolio-as-personality.</p>
        </div>
      </div>
      <div className="bt-sticker">
        {stickers.map((s, i) => (
          <a key={i} href="./project.html"
             className={`bt-sticker-tile ${s.kind === "text" ? `is-text ${s.fill}` : ""}`}
             style={{ left: s.left, top: s.top, width: s.w, height: s.h,
                      transform: `rotate(${s.rot}deg)`, zIndex: i }}>
            {s.kind === "image" ? (
              <>
                <img src={s.p.img || "../assets/images/aicommunity-search.png"} alt=""/>
                <div className="bt-sticker-overlay">
                  <div className="bt-sticker-tile-eyebrow">{s.p.eyebrow}</div>
                  <div className="bt-sticker-tile-title">{s.p.title}</div>
                </div>
              </>
            ) : (
              <>
                <div className="bt-sticker-tile-eyebrow">{s.p.eyebrow} · {s.p.year}</div>
                <div className="bt-sticker-tile-title">{s.p.title}</div>
              </>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

const App = () => (
  <div className="bt-page" data-screen-label="03 More Projects">
    <Nav active="more"/>
    <main className="bt-page-body bt-more-page">
      <header className="bt-page-head">
        <div className="bt-eyebrow">— Browse</div>
        <h1 className="bt-h1">Many at once.<br/>Pick your favorite.</h1>
        <p className="bt-lede">Four dense gallery layouts, each showing every project on one screen — no carousels, no one-at-a-time scroll. Same projects, different reading modes.</p>
      </header>
      <Mosaic/>
      <IndexWall/>
      <Masonry/>
      <Sticker/>
    </main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
