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

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.03 }}
                className="archive-card group block flex flex-col rounded-xl overflow-hidden"
              >
                {/* 瞄准角标(hover 锁定) */}
                <span className="target-corner tl" aria-hidden="true" />
                <span className="target-corner tr" aria-hidden="true" />
                <span className="target-corner bl" aria-hidden="true" />
                <span className="target-corner br" aria-hidden="true" />

                <Link
                  to={`/project/${project.id}`}
                  onClick={() => handleProjectClick(project)}
                  className="block flex flex-col flex-grow"
                >
                  {/* 图片 */}
                  <div className="relative overflow-hidden aspect-[4/3]" style={{ background: 'var(--card-glass-bg)' }}>
                    <img
                      src={project.thumbnail || project.heroImage}
                      alt={getLocalizedText(project.title, language)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* HUD 序号读数 */}
                    <span
                      className="absolute top-3 right-3 px-2 py-0.5 text-[10px] tracking-[0.25em] tabular-nums font-['Poppins'] rounded backdrop-blur-sm"
                      style={{
                        color: 'var(--hud-fg)',
                        background: 'var(--surface-scrim)',
                        border: '1px solid var(--hud-line)',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* 内容:类别 → 标题 → 简介 → tech */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.year && (
                        <span
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--hud-glow) 40%, transparent)',
                            color: 'var(--text-accent)',
                            border: '1px solid var(--card-glass-border)',
                          }}
                        >
                          {project.year}
                        </span>
                      )}
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--hud-glow) 40%, transparent)',
                            color: 'var(--text-accent)',
                            border: '1px solid var(--card-glass-border)',
                          }}
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="text-xl font-semibold mb-2 transition-colors"
                      style={{ color: 'var(--text-hero)' }}
                    >
                      {getLocalizedText(project.title, language)}
                    </h3>

                    <p
                      className="text-sm line-clamp-2 leading-relaxed mb-4 font-['Poppins']"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {getLocalizedText(project.brief, language)}
                    </p>

                    <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--card-glass-border)' }}>
                      {project.techTags && project.techTags.length > 0 ? (
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {project.techTags.slice(0, 4).map((tag) => (
                            <span key={tag} className="text-xs" style={{ color: 'var(--text-muted)' }}>
                              #{tag.replace(/^#/, '')}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="h-4"></div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
