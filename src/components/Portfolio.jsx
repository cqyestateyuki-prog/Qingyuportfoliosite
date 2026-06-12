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

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

// 倒金字塔牌阵:顶行最多,逐行递减(如 12 张 → 5-4-3),规整居中
const buildPyramidRows = (items) => {
  const n = items.length;
  if (n === 0) return [];
  // 找最小的顶行宽 k,使 k + (k-1) + ... 能装下全部
  let k = 1;
  while ((k * (k + 1)) / 2 < n) k++;
  k = Math.min(k, 5); // 顶行最多 5 张
  const rows = [];
  let i = 0;
  let size = k;
  while (i < n) {
    rows.push(items.slice(i, i + size));
    i += size;
    size = Math.max(size - 1, 2); // 逐行递减,最少 2 张一行
  }
  return rows;
};

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

        <div className="max-w-7xl mx-auto pb-12 space-y-8">
          <AnimatePresence mode="popLayout">
            {buildPyramidRows(filteredProjects).map((row, rowIdx) => (
              <motion.div
                layout
                key={`row-${rowIdx}-${activeFilter}`}
                className="flex flex-wrap justify-center gap-6 md:gap-8"
              >
                {row.map((project, colIdx) => {
                  const index = buildPyramidRows(filteredProjects)
                    .slice(0, rowIdx)
                    .reduce((acc, r) => acc + r.length, 0) + colIdx;
                  return (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ y: -10, scale: 1.03, zIndex: 40 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
                      className="relative"
                    >
                      <Link
                        to={`/project/${project.id}`}
                        onClick={() => handleProjectClick(project)}
                        aria-label={getLocalizedText(project.title, language)}
                        className="tarot-card group block w-[86vw] max-w-[230px] md:w-[230px] rounded-2xl overflow-hidden backdrop-blur-md"
                        style={{ background: 'var(--card-glass-bg)' }}
                      >
                        {/* 牌框:外缘留白 + 内细线框,塔罗双框 */}
                        <div
                          className="m-2 rounded-xl flex flex-col"
                          style={{ border: '1px solid var(--hud-line)' }}
                        >
                          {/* 牌首:✦ 罗马数字 ✦ */}
                          <p
                            className="text-center text-[11px] tracking-[0.35em] py-2 font-['Poppins']"
                            style={{ color: 'var(--hud-fg-muted)' }}
                          >
                            ✦ {ROMAN[index] || index + 1} ✦
                          </p>

                          {/* 牌面图(3:4 大幅) */}
                          <div className="relative mx-2 rounded-lg overflow-hidden aspect-[3/4]">
                            <img
                              src={project.thumbnail || project.heroImage}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>

                          {/* 牌名 + 简介(常显)+ 年份/类别 */}
                          <div className="px-3 pt-2.5 pb-2.5 text-center">
                            <h3
                              className="text-[15px] leading-snug font-['Tenor_Sans'] mb-1 line-clamp-1"
                              style={{ color: 'var(--text-hero)' }}
                            >
                              {getLocalizedText(project.title, language)}
                            </h3>
                            <p
                              className="text-[11px] leading-relaxed line-clamp-2 mb-1.5 font-['Poppins']"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              {getLocalizedText(project.brief, language)}
                            </p>
                            <p
                              className="text-[9px] tracking-[0.2em] uppercase font-['Poppins']"
                              style={{ color: 'var(--section-tag)' }}
                            >
                              {[project.year, ...(project.categories || []).slice(0, 2)].filter(Boolean).join(' · ')}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
