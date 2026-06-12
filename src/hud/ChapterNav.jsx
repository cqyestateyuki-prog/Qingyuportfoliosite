/**
 * ChapterNav — 左缘垂直章节导航(01 VISION / 02 WORK / 03 CONTACT)
 * 激活项:全亮 + 横向刻度线 + 辉光;点击平滑滚动;< md 隐藏
 */

import { motion } from 'framer-motion';

const ChapterNav = ({ chapters, activeId }) => {
  const scrollToChapter = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-5 font-['Poppins']"
      aria-label="Chapter navigation"
    >
      {chapters.map((ch, i) => {
        const isActive = ch.id === activeId;
        return (
          <button
            key={ch.id}
            type="button"
            onClick={() => scrollToChapter(ch.id)}
            className="group flex items-center gap-3 text-left transition-opacity duration-300"
            style={{ opacity: isActive ? 1 : 0.35, color: 'var(--hud-fg)' }}
          >
            {/* 刻度线 */}
            <motion.span
              className="h-px"
              style={{
                background: isActive ? 'var(--hud-line-strong)' : 'var(--hud-line)',
                boxShadow: isActive ? '0 0 8px var(--hud-glow)' : 'none',
              }}
              animate={{ width: isActive ? 28 : 12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <span className="flex items-baseline gap-2">
              <span className="text-[10px] tabular-nums tracking-widest opacity-70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="text-xs tracking-[0.3em] uppercase group-hover:opacity-100"
                style={{
                  textShadow: isActive ? '0 0 12px var(--hud-glow)' : 'none',
                }}
              >
                {ch.label}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default ChapterNav;
