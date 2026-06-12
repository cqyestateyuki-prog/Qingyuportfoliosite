/**
 * NarrativeSequence — 游戏开场式的逐句叙事播放器(纯展示)
 *
 * 父组件持有时间轴(推进/跳过/与 WebGL 粒子同步),这里只负责:
 * 当前句的 blur 淡入淡出、HUD 风格进度线段、SKIP 按钮。
 * 可复用于后续 About / 项目详情页的开场。
 */

import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const NarrativeSequence = ({ lines, activeIndex, onSkip, onAdvance, skipLabel = 'Skip' }) => {
  const current = lines[activeIndex];

  return (
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 cursor-pointer select-none"
      onClick={onAdvance}
      role="presentation"
    >
      {/* 当前叙事句 */}
      <div className="max-w-4xl text-center min-h-[8rem] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {current && (
            <motion.p
              key={current.id}
              initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-2xl md:text-4xl lg:text-5xl leading-snug tracking-wide font-['Tenor_Sans']"
              style={{ color: 'var(--text-hero)', textShadow: '0 0 30px var(--hud-glow)' }}
            >
              {current.text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* HUD 风格进度线段(像游戏对白进度) */}
      <div className="absolute bottom-24 flex items-center gap-2">
        {lines.map((line, i) => (
          <div
            key={line.id}
            className="h-px w-10 overflow-hidden"
            style={{ background: 'var(--hud-line)' }}
          >
            <motion.div
              className="h-full"
              style={{ background: 'var(--hud-line-strong)', originX: 0 }}
              initial={false}
              animate={{ scaleX: i < activeIndex ? 1 : i === activeIndex ? 1 : 0 }}
              transition={
                i === activeIndex
                  ? { duration: (line.dur || 3400) / 1000, ease: 'linear' }
                  : { duration: 0.2 }
              }
            />
          </div>
        ))}
      </div>

      {/* SKIP */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSkip();
        }}
        className="absolute bottom-12 text-xs tracking-[0.35em] uppercase transition-opacity hover:opacity-100 opacity-60 font-['Poppins']"
        style={{ color: 'var(--hud-fg)' }}
      >
        {skipLabel} ▸
      </button>
    </div>
  );
};

export default NarrativeSequence;
