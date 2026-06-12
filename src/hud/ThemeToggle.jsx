/**
 * ThemeToggle — 日/月仪式感主题切换
 *
 * 切换时从按钮位置发出一圈 clip-path 圆形光晕过渡（遮住 CSS 变量切换的不连续），
 * WebGL 星云同时由 CosmosProvider 的 themeMix 做 1.4s 天空渐变。
 */

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const WIPE_DURATION = 1.1; // s

const ThemeToggle = ({ className = '' }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [wipe, setWipe] = useState(null); // { x, y, toDark }
  const btnRef = useRef(null);

  // next-themes 在客户端水合前 resolvedTheme 为 undefined，避免图标闪错
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    const rect = btnRef.current?.getBoundingClientRect();
    setWipe({
      x: rect ? rect.left + rect.width / 2 : window.innerWidth - 80,
      y: rect ? rect.top + rect.height / 2 : 40,
      toDark: !isDark ? true : false,
    });
    setTheme(isDark ? 'light' : 'dark');
  };

  // wipe 放完自动卸载
  useEffect(() => {
    if (!wipe) return;
    const id = setTimeout(() => setWipe(null), WIPE_DURATION * 1000 + 100);
    return () => clearTimeout(id);
  }, [wipe]);

  if (!mounted) {
    return <div className={`w-9 h-9 ${className}`} aria-hidden="true" />;
  }

  // 覆盖全屏所需的最大半径
  const maxRadius = wipe
    ? Math.hypot(
        Math.max(wipe.x, window.innerWidth - wipe.x),
        Math.max(wipe.y, window.innerHeight - wipe.y)
      )
    : 0;

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleToggle}
        aria-label={isDark ? 'Switch to dawn theme' : 'Switch to night theme'}
        title={isDark ? '切换到晨曦' : '切换到深夜宇宙'}
        className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110 ${className}`}
        style={{
          color: 'var(--hud-fg)',
          border: '1px solid var(--hud-line)',
          background: 'var(--card-glass-bg)',
          boxShadow: '0 0 12px var(--hud-glow)',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* 仪式感 wipe：从按钮扩散的柔光圆环 */}
      <AnimatePresence>
        {wipe && (
          <motion.div
            key="theme-wipe"
            className="fixed inset-0 z-[90] pointer-events-none"
            initial={{ clipPath: `circle(0px at ${wipe.x}px ${wipe.y}px)`, opacity: 0.9 }}
            animate={{ clipPath: `circle(${maxRadius}px at ${wipe.x}px ${wipe.y}px)`, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: WIPE_DURATION, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: wipe.toDark
                ? 'radial-gradient(circle, rgba(196, 181, 253, 0.5), rgba(26, 21, 48, 0.85))'
                : 'radial-gradient(circle, rgba(255, 244, 235, 0.7), rgba(251, 217, 232, 0.85))',
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;
