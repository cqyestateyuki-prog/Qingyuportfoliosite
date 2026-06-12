/**
 * Work — full filtered grid of all projects (the main "case study index").
 */

const { useState } = React;

const FILTERS = ["All Work", "AI", "UIUX", "Product", "Programming", "Game", "Research"];

const ProjectsIndex = () => {
  const [active, setActive] = useState("All Work");
  const visible = PROJECTS.filter(p => active === "All Work"
    || p.tags.includes(active) || p.eyebrow.toLowerCase().includes(active.toLowerCase()));
  return (
    <>
      <header className="bt-page-head">
        <div className="bt-eyebrow">All Work · 2024–2026</div>
        <h1 className="bt-h1">Projects, in detail.</h1>
        <p className="bt-lede">A portfolio of shipped products across AI tooling, edtech, and game design — each with research, iteration, and the constraints that shaped them.</p>
      </header>
      <div className="bt-filter-bar">
        <div className="bt-filter-track">
          {FILTERS.map(f => (
            <button key={f} className={"bt-filter " + (active === f ? "is-active" : "")}
                    onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="bt-result-count">{visible.length} projects</div>
      </div>
      <div className="bt-grid">
        {visible.map(p => <Card key={p.id} p={p}/>)}
      </div>
      <div style={{ textAlign: "center", paddingBottom: 160 }}>
        <a className="bt-btn bt-btn-ghost" href="./more.html">Browse different layouts <ArrowR/></a>
      </div>
    </>
  );
};

const App = () => (
  <div className="bt-page" data-screen-label="02 Work">
    <Nav active="work"/>
    <main className="bt-page-body"><ProjectsIndex/></main>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
