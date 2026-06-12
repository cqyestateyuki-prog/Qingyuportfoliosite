/**
 * ScrollPrompt — “SCROLL TO EXPLORE” + 流动光点竖线(游戏式引导)
 * 开始滚动后自动淡出
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollPrompt = ({ label = 'Scroll to Explore' }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[10px] tracking-[0.45em] uppercase font-['Poppins']"
            style={{ color: 'var(--hud-fg-muted)' }}
          >
            {label}
          </span>
          {/* 竖线 + 流动光点 */}
          <div className="relative h-10 w-px overflow-hidden" style={{ background: 'var(--hud-line)' }}>
            <motion.div
              className="absolute left-0 w-px h-3"
              style={{ background: 'var(--hud-line-strong)', boxShadow: '0 0 6px var(--hud-glow)' }}
              animate={{ y: [-12, 44] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPrompt;
