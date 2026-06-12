import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects.js';
import { trackProjectClick } from './Analytics';
import Showcase from './Showcase';
import HudTabs from '../hud/HudTabs';
import MoonIcon from '../hud/MoonIcon';
import { useLanguage } from '../i18n';
import { getLocalizedText } from '../utils/localization';

/**
 * Portfolio — 02 WORK 章节
 *
 * Selected Work(Showcase)+ 塔罗牌阵档案库(More Projects):
 * 每个项目是一张塔罗牌,扇形牌阵错落排开,hover 抽出端正 + 翻出简介
 */

// 牌阵:旋转角与弧形下沉(循环取用,像摊开的手牌)
const CARD_ROTATIONS = [-7, -4, -1, 2, 5, 8];
const CARD_DIPS = [26, 10, 0, 4, 14, 30];
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#work');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'AI', 'UIUX', 'Product Design', 'Programming', 'Game', 'Research'];

  // Featured 项目进 Showcase,牌阵展示全部(按过滤)
  const featuredProjects = projects.filter((p) => p.featured);
  const showcaseItems = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories?.includes(activeFilter);
  });

  const handleProjectClick = (project) => {
    trackProjectClick(project.id, getLocalizedText(project.title, language));
  };

  return (
    <section id="work" className="relative">
      {/* Selected Work (Showcase) */}
      <Showcase projects={showcaseItems} />

      {/* ============ 塔罗牌阵:More Projects ============ */}
      <div className="py-20 px-5 max-w-full mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* HUD 区块标签 */}
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4 font-['Poppins']"
            style={{ color: 'var(--section-tag)' }}
          >
            ✦ {t('hud.archive')} <MoonIcon />
          </p>
          <h2
            className="text-4xl md:text-5xl font-normal mb-8"
            style={{ color: 'var(--text-hero)' }}
          >
            {t('portfolio.moreProjects')}
          </h2>

          {/* HUD tab 过滤条 */}
          <HudTabs categories={filters} active={activeFilter} onSelect={setActiveFilter} />
        </div>

        <motion.div
          layout
          className="flex flex-wrap justify-center items-start gap-x-4 md:gap-x-6 gap-y-10 max-w-6xl mx-auto pb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const rotate = CARD_ROTATIONS[index % CARD_ROTATIONS.length];
              const dip = CARD_DIPS[index % CARD_DIPS.length];
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate }}
                  exit={{ opacity: 0, y: -24, rotate: 0 }}
                  whileHover={{ rotate: 0, y: -16, scale: 1.05, zIndex: 40 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
                  className="relative"
                  style={{ marginTop: dip }}
                >
                  <Link
                    to={`/project/${project.id}`}
                    onClick={() => handleProjectClick(project)}
                    aria-label={getLocalizedText(project.title, language)}
                    className="tarot-card group block w-[42vw] max-w-[190px] md:w-48 rounded-2xl overflow-hidden backdrop-blur-md"
                    style={{ background: 'var(--card-glass-bg)' }}
                  >
                    {/* 牌框:外缘留白 + 内细线框,塔罗双框 */}
                    <div
                      className="m-2 rounded-xl flex flex-col"
                      style={{ border: '1px solid var(--hud-line)' }}
                    >
                      {/* 牌首:✦ 罗马数字 ✦ */}
                      <p
                        className="text-center text-[10px] tracking-[0.3em] py-1.5 font-['Poppins']"
                        style={{ color: 'var(--hud-fg-muted)' }}
                      >
                        ✦ {ROMAN[index] || index + 1} ✦
                      </p>

                      {/* 牌面图 + hover 翻出简介 */}
                      <div className="relative mx-1.5 rounded-lg overflow-hidden aspect-[4/3]">
                        <img
                          src={project.thumbnail || project.heroImage}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* hover:简介浮现 */}
                        <div
                          className="absolute inset-0 flex items-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(14, 10, 31, 0.92) 30%, rgba(14, 10, 31, 0.4) 70%, transparent)',
                          }}
                        >
                          <p className="text-[11px] leading-relaxed line-clamp-4 text-white/90">
                            {getLocalizedText(project.brief, language)}
                          </p>
                        </div>
                      </div>

                      {/* 牌名 + 年份/类别 */}
                      <div className="px-2 pt-2 pb-2.5 text-center">
                        <h3
                          className="text-[13px] leading-snug font-['Tenor_Sans'] mb-1.5 line-clamp-2"
                          style={{ color: 'var(--text-hero)' }}
                        >
                          {getLocalizedText(project.title, language)}
                        </h3>
                        <p
                          className="text-[9px] tracking-[0.18em] uppercase font-['Poppins']"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {[project.year, project.categories?.[0]].filter(Boolean).join(' · ')}
                        </p>
                        {/* 牌脚饰线 */}
                        <div className="flex items-center justify-center gap-1.5 mt-1.5" aria-hidden="true">
                          <span className="h-px w-6" style={{ background: 'var(--hud-line)' }} />
                          <MoonIcon size={8} style={{ color: 'var(--hud-fg-muted)' }} />
                          <span className="h-px w-6" style={{ background: 'var(--hud-line)' }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
