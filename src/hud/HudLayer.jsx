/**
 * HudLayer — 游戏 HUD 组合层(fixed, z-40, Navbar z-50 之下)
 *
 * 首页:角框 + 左缘章节导航 + 右缘滚动进度条 + 右上章节读数
 * 其他路由:只保留角框(进入项目详情时世界感不消失)
 */

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import HudFrame from './HudFrame';
import ChapterNav from './ChapterNav';
import { useLanguage } from '../i18n';

const CHAPTER_IDS = ['vision', 'work', 'contact'];

const HudLayer = () => {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const isHome = pathname === '/';
  const [activeId, setActiveId] = useState('vision');

  // 右缘滚动进度条
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // 章节激活检测:视口中带命中哪个 section
  useEffect(() => {
    if (!isHome) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    // section 由路由内容渲染,等一帧再绑定
    const bind = () => {
      CHAPTER_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };
    const raf = requestAnimationFrame(bind);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [isHome, pathname]);

  const chapters = [
    { id: 'vision', label: t('chapters.vision') },
    { id: 'work', label: t('chapters.work') },
    { id: 'contact', label: t('chapters.contact') },
  ];

  return (
    <>
      <HudFrame />

      {isHome && (
        <>
          <ChapterNav chapters={chapters} activeId={activeId} />

          {/* 右缘滚动进度条 */}
          <div
            className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40 h-40 w-px pointer-events-none"
            style={{ background: 'var(--hud-line)' }}
            aria-hidden="true"
          >
            <motion.div
              className="w-px origin-top"
              style={{
                height: '100%',
                scaleY: progress,
                background: 'var(--hud-line-strong)',
                boxShadow: '0 0 8px var(--hud-glow)',
              }}
            />
          </div>

          {/* 右上章节读数 */}
          <div
            className="hidden md:block fixed top-20 right-6 z-40 text-[10px] tracking-[0.3em] tabular-nums font-['Poppins'] pointer-events-none"
            style={{ color: 'var(--hud-fg-muted)' }}
            aria-hidden="true"
          >
            {String(CHAPTER_IDS.indexOf(activeId) + 1).padStart(2, '0')} / {String(CHAPTER_IDS.length).padStart(2, '0')}
          </div>
        </>
      )}
    </>
  );
};

export default HudLayer;
