/**
 * Hero Motion Lab — signature animated hero for the Qingyu Cao system.
 * All effects use the purple/aurora tokens from colors_and_type.css.
 * Effects are individually toggleable so you can compare combinations.
 */

const { useState, useEffect, useRef, useCallback } = React;

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

/* Shared smoothed pointer (normalized -0.5..0.5 of viewport) */
function usePointer() {
  const ref = useRef({ x: 0, y: 0, sx: 0, sy: 0, px: 0, py: 0, active: false });
  useEffect(() => {
    const onMove = (e) => {
      const p = ref.current;
      p.px = e.clientX; p.py = e.clientY;
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
function AuroraCanvas({ pointer, intensity, mode }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (mode !== "fluid") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1);

    const PALETTE = [
      [151, 152, 238], // #9798ee periwinkle
      [139, 92, 246],  // #8B5CF6 primary
      [161, 95, 223],  // #a15fdf secondary
      [77, 100, 230],  // #4d64e6 blue
      [196, 181, 253], // #C4B5FD light
    ];

    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 6;
    const blobs = Array.from({ length: N }, (_, i) => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: lerp(180, 360, Math.random()),
      col: PALETTE[i % PALETTE.length],
      follow: i === 0, // first blob chases cursor
    }));

    const draw = () => {
      const k = intensity / 100;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const p = pointer.current;
      const mx = (p.x + 0.5) * w, my = (p.y + 0.5) * h;
      for (const b of blobs) {
        if (b.follow && p.active) {
          b.x = lerp(b.x, mx, 0.06 * (0.4 + k));
          b.y = lerp(b.y, my, 0.06 * (0.4 + k));
        } else {
          b.x += b.vx * (0.3 + k * 1.4);
          b.y += b.vy * (0.3 + k * 1.4);
          if (b.x < -b.r) b.x = w + b.r; if (b.x > w + b.r) b.x = -b.r;
          if (b.y < -b.r) b.y = h + b.r; if (b.y > h + b.r) b.y = -b.r;
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
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, [mode, intensity, pointer]);

  if (mode !== "fluid") return null;
  return <canvas ref={canvasRef} className="hm-aurora-canvas" aria-hidden="true" />;
}

/* ============================================================
   2. CURSOR TRAIL — purple "splash" particle trail.
   ============================================================ */
function CursorTrail({ enabled, intensity }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
    let particles = [];
    let last = { x: 0, y: 0, has: false };

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#8981d7", "#a15fdf", "#9798ee", "#C4B5FD"];
    const k = intensity / 100;

    const onMove = (e) => {
      if (!last.has) { last = { x: e.clientX, y: e.clientY, has: true }; return; }
      const dx = e.clientX - last.x, dy = e.clientY - last.y;
      const dist = Math.hypot(dx, dy);
      const count = clamp(Math.floor(dist / 6), 0, 5) + 1;
      for (let i = 0; i < count; i++) {
        const t = i / count;
        particles.push({
          x: lerp(last.x, e.clientX, t) + (Math.random() - 0.5) * 6,
          y: lerp(last.y, e.clientY, t) + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8 - 0.3,
          life: 1, size: lerp(2, 6, Math.random()) * (0.6 + k * 0.8),
          col: COLORS[(Math.random() * COLORS.length) | 0],
        });
      }
      if (particles.length > 320) particles = particles.slice(-320);
      last = { x: e.clientX, y: e.clientY, has: true };
    };
    window.addEventListener("pointermove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.012; p.life -= 0.022;
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
      particles = particles.filter((p) => p.life > 0);
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
  return <canvas ref={canvasRef} className="hm-trail-canvas" aria-hidden="true" />;
}

/* ============================================================
   3. DECRYPTED TEXT — letter-scramble reveal.
   ============================================================ */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>/\\".split("");
const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function DecryptedText({ text, trigger, speed = 1 }) {
  const [display, setDisplay] = useState(text.split(""));
  const timer = useRef(0);

  const run = useCallback(() => {
    clearInterval(timer.current);
    const chars = text.split("");
    if (reduceMotion()) { setDisplay(chars); return; }
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
        return GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }));
    }, 33);
  }, [text, speed]);

  useEffect(() => { run(); return () => clearInterval(timer.current); }, [trigger, run]);

  return (
    <span className="hm-decrypt" onMouseEnter={run}>
      {display.map((c, i) => (
        <span key={i} className={c === text[i] ? "hm-d-on" : "hm-d-off"}>{c || "\u00A0"}</span>
      ))}
    </span>
  );
}

/* Typewriter reveal */
function Typewriter({ text, trigger, speed = 1 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i++; setN(i);
      if (i >= text.length) clearInterval(id);
    }, 70 / speed);
    return () => clearInterval(id);
  }, [text, trigger, speed]);
  return (
    <span className="hm-typer">
      {text.slice(0, n)}<span className="hm-caret" style={{ opacity: n < text.length ? 1 : 0 }}>|</span>
    </span>
  );
}

/* ============================================================
   4. MAGNETIC BUTTON
   ============================================================ */
function MagneticButton({ enabled, className, children, onClick }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!enabled) return;
    const el = ref.current; const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px) scale(1.06)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <button ref={ref} className={className + (enabled ? " hm-magnetic" : "")}
      onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}>
      {children}
    </button>
  );
}

/* ============================================================
   HERO
   ============================================================ */
const IconDownload = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);
const IconChevron = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
);

function Hero({ t }) {
  const pointer = usePointer();
  const [trigger, setTrigger] = useState(0);
  const layerRef = useRef(null);

  /* Parallax: shift inner layers with smoothed pointer */
  useEffect(() => {
    if (!t.parallax) { if (layerRef.current) layerRef.current.style.transform = ""; return; }
    let raf = 0; let cx = 0, cy = 0;
    const loop = () => {
      const p = pointer.current;
      cx = lerp(cx, p.x, 0.06); cy = lerp(cy, p.y, 0.06);
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
  if (t.nameReveal === "decrypt") nameEl = <DecryptedText text="Qingyu Cao" trigger={trigger} speed={speed} />;
  else if (t.nameReveal === "typewriter") nameEl = <Typewriter text="Qingyu Cao" trigger={trigger} speed={speed} />;
  else if (t.nameReveal === "shimmer") nameEl = <span className="hm-shimmer">Qingyu Cao</span>;
  else nameEl = <span className="hm-fadeup" key={trigger}>Qingyu Cao</span>;

  return (
    <section className={"hm-hero " + (t.grain ? "has-grain" : "")} data-screen-label="Hero">
      {/* Background layers by mode */}
      {t.bgMode === "curtain" && (
        <div className="hm-curtain" aria-hidden="true"><div className="hm-curtain-inner" /></div>
      )}
      {t.bgMode === "mesh" && <div className="hm-mesh" aria-hidden="true" />}
      <AuroraCanvas pointer={pointer} intensity={t.intensity} mode={t.bgMode} />

      {/* decorative pulses (always-on, subtle) */}
      <div className="hm-pulse hm-pulse-a" />
      <div className="hm-pulse hm-pulse-b" />
      <div className="hm-pulse hm-pulse-c" />

      <div className="hm-hero-inner" ref={layerRef}>
        <div className="hm-eyebrow" style={{ ["--depth"]: 0.4 }}>Portfolio · NYC</div>
        <h1 className="hm-h1" style={{ ["--depth"]: 1 }} onClick={() => setTrigger((v) => v + 1)}>
          {nameEl}
        </h1>
        <div className="hm-sub" style={{ ["--depth"]: 0.7 }}>Creative Developer &amp; Designer</div>
        <p className="hm-lede" style={{ ["--depth"]: 0.5 }}>
          A Product Designer who <b>builds, tests, and ships</b>. I combine design intuition
          with engineering depth to <b>launch real products</b> in fast-moving environments.
        </p>
        <div className="hm-cta-row" style={{ ["--depth"]: 0.6 }}>
          <MagneticButton enabled={t.magnetic} className="hm-btn hm-btn-light">View My Work</MagneticButton>
          <MagneticButton enabled={t.magnetic} className="hm-btn hm-btn-outline">
            <IconDownload size={18} /> Resume
          </MagneticButton>
        </div>
        <button className="hm-replay" onClick={() => setTrigger((v) => v + 1)}>↺ Replay reveal</button>
      </div>

      <div className="hm-chevron" aria-hidden="true"><IconChevron size={30} /></div>
    </section>
  );
}

window.Hero = Hero;
window.CursorTrail = CursorTrail;
