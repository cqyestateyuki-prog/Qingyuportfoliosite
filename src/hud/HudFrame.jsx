/**
 * HudFrame — 四角 L 形括号 + 细线框(游戏 HUD 边框)
 * 载入后错峰淡入,纯装饰,pointer-events: none
 */

import { motion } from 'framer-motion';

const CORNERS = [
  { key: 'tl', style: { top: 16, left: 16, borderTop: '1px solid', borderLeft: '1px solid' } },
  { key: 'tr', style: { top: 16, right: 16, borderTop: '1px solid', borderRight: '1px solid' } },
  { key: 'bl', style: { bottom: 16, left: 16, borderBottom: '1px solid', borderLeft: '1px solid' } },
  { key: 'br', style: { bottom: 16, right: 16, borderBottom: '1px solid', borderRight: '1px solid' } },
];

const HudFrame = () => (
  <div className="fixed inset-0 z-40 pointer-events-none" aria-hidden="true">
    {CORNERS.map((corner, i) => (
      <motion.div
        key={corner.key}
        className="absolute w-6 h-6"
        style={{ ...corner.style, borderColor: 'var(--hud-line)' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    ))}
  </div>
);

export default HudFrame;
