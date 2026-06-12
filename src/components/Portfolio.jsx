import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects.js';
import { trackProjectClick } from './Analytics';
import Showcase from './Showcase';
import HudTabs from '../hud/HudTabs';
import { useLanguage } from '../i18n';
import { getLocalizedText } from '../utils/localization';

/**
 * Portfolio — 02 WORK 章节
 *
 * Selected Work(Showcase)+ HUD 档案库(More Projects):
 * 透明背景让星云透出,HUD tab 过滤,瞄准式 hover 卡片,序号读数
 */
// 星球尺寸/错落抬升(循环取用,营造星系错落感)
const PLANET_SIZES = [150, 112, 136, 104, 146, 122];
const PLANET_LIFTS = [0, 44, 12, 36, 4, 52];

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

  // Featured 项目进 Showcase,网格展示全部(按过滤)
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

      {/* ============ HUD 档案库:More Projects ============ */}
      <div className="py-20 px-5 max-w-full mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* HUD 区块标签 */}
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4 font-['Poppins']"
            style={{ color: 'var(--hud-fg-muted)' }}
          >
            ✦ {t('hud.archive')} ☾
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

        {/* ============ 星球阵列:一屏速览全部项目 ============ */}
        <motion.div
          layout
          className="flex flex-wrap justify-center items-start gap-x-8 md:gap-x-12 gap-y-6 max-w-6xl mx-auto pb-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const size = PLANET_SIZES[index % PLANET_SIZES.length];
              const lift = PLANET_LIFTS[index % PLANET_LIFTS.length];
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
                  className="planet-item relative group flex flex-col items-center"
                  style={{ paddingTop: lift }}
                >
                  <Link
                    to={`/project/${project.id}`}
                    onClick={() => handleProjectClick(project)}
                    aria-label={getLocalizedText(project.title, language)}
                    className="planet-float relative block aspect-square"
                    style={{
                      width: `min(${size}px, 27vw)`,
                      animationDelay: `${(index % 5) * 0.8}s`,
                      animationDuration: `${5.5 + (index % 3)}s`,
                    }}
                  >
                    {/* 轨道环(虚线,缓慢自转) */}
                    <span
                      className="planet-orbit absolute -inset-2.5 rounded-full border border-dashed transition-colors duration-500"
                      style={{
                        borderColor: 'var(--hud-line)',
                        animationDuration: `${20 + (index % 4) * 7}s`,
                      }}
                      aria-hidden="true"
                    />
                    {/* 星球本体 */}
                    <span className="planet-body absolute inset-0 rounded-full overflow-hidden block">
                      <img
                        src={project.thumbnail || project.heroImage}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* 球面光影:左上受光,右下背光 */}
                      <span
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle at 32% 26%, rgba(255,255,255,0.38), transparent 46%), radial-gradient(circle at 72% 80%, rgba(10, 5, 28, 0.5), transparent 62%)',
                        }}
                      />
                    </span>
                    {/* 卫星小星 */}
                    <span
                      className="absolute -top-1 right-0 text-sm transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125"
                      style={{ color: 'var(--text-accent)', textShadow: '0 0 8px var(--hud-glow)' }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </Link>

                  {/* 星球铭牌:序号 + 名称 */}
                  <p
                    className="mt-3 max-w-[150px] text-center text-xs leading-snug font-['Poppins'] transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="tabular-nums tracking-[0.2em]" style={{ color: 'var(--hud-fg-muted)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="block mt-0.5 font-medium" style={{ color: 'var(--text-hero)' }}>
                      {getLocalizedText(project.title, language)}
                    </span>
                  </p>

                  {/* hover 情报卡:年份/类别/简介(信息密度藏在悬停里) */}
                  <div
                    className="pointer-events-none absolute top-full -mt-1 w-60 z-30 rounded-xl p-3.5 text-left opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-md hidden md:block"
                    style={{
                      background: 'var(--surface-scrim-strong)',
                      border: '1px solid var(--card-glass-border)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 0 24px var(--hud-glow)',
                    }}
                  >
                    <div className="flex flex-wrap gap-1.5 mb-1.5">
                      {[project.year, ...(project.categories || []).slice(0, 2)].filter(Boolean).map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full uppercase tracking-wider"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--hud-glow) 40%, transparent)',
                            color: 'var(--text-accent)',
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--text-body)' }}>
                      {getLocalizedText(project.brief, language)}
                    </p>
                  </div>
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
