/**
 * HudTabs — 游戏 HUD 式过滤 tab 条(替代 BubbleMenu 用于档案库)
 * ALL CAPS + 字距 + 激活项发光下划线(layoutId 平滑滑动)
 */

import { motion } from 'framer-motion';

const HudTabs = ({ categories, active, onSelect }) => (
  <div
    className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 font-['Poppins']"
    role="tablist"
  >
    {categories.map((cat) => {
      const isActive = cat === active;
      return (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onSelect(cat)}
          className="relative px-4 py-2 text-xs tracking-[0.25em] uppercase transition-colors duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[var(--hud-line-strong)] rounded"
          style={{
            color: isActive ? 'var(--hud-fg)' : 'var(--hud-fg-muted)',
            textShadow: isActive ? '0 0 12px var(--hud-glow)' : 'none',
          }}
        >
          {cat}
          {isActive && (
            <motion.span
              layoutId="hud-tab-underline"
              className="absolute bottom-0 left-3 right-3 h-px"
              style={{
                background: 'var(--hud-line-strong)',
                boxShadow: '0 0 8px var(--hud-glow)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      );
    })}
  </div>
);

export default HudTabs;
