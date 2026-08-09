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
import Media from './Media';
import { thumbSrc } from '../utils/thumbs';

/**
 * Portfolio — 02 WORK 章节
 *
 * Selected Work(Showcase 碎裂式大卡)+ Passion Projects(纯图卡片):
 * 下半区每个项目就是一张图,统一 16:10 流式居中,hover 才浮出名字和年份
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
      // #work 含 Showcase + 牌阵,远高于视口;阈值必须为 0,
      // 否则可见占比够不到 0.1,观察器永不触发 → 标题卡在 opacity-0
      { threshold: 0 }
    );

    const section = document.querySelector('#projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'AI', 'UIUX', 'Product Design', 'Programming', 'Game', 'Research'];

  // Featured = Professional Work(进 Showcase 大卡);其余 = Personal Projects(牌阵)
  // 两个版块互不重复:牌阵只展示非 featured 的个人项目
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  const showcaseItems = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);
  const personalProjects = projects.filter((p) => !p.featured);

  const filteredProjects = personalProjects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories?.includes(activeFilter);
  });

  const handleProjectClick = (project) => {
    trackProjectClick(project.id, getLocalizedText(project.title, language));
  };

  return (
    <>
      {/* ============ Selected Work(Showcase 大卡)============ */}
      <section id="work" className="relative">
        <Showcase projects={showcaseItems} />
      </section>

      {/* ============ Passion Projects(塔罗牌阵)============ */}
      <section id="projects" className="relative">
      <div className="py-20 px-5 max-w-full mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* HUD 区块标签 */}
          <p
            className="text-[11px] font-medium tracking-[0.3em] uppercase mb-4 font-['Poppins']"
            style={{ color: 'var(--section-tag)' }}
          >
            <MoonIcon /> {t('hud.archive')} ✦
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

        <div className="max-w-7xl mx-auto pb-12">
          {/* 切分类时别再叠 FLIP 了:这一屏同时还挂着上面碎片墙的四十多个格子,
              每格五层绝对定位,加上全屏 WebGL,主线程已经很紧。
              外层容器的 layout 去掉(容器高度补间没什么可看的),
              卡片只留 opacity + 位移,hover 交给 CSS 走合成层。 */}
          <motion.div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* 纯图卡片:平时只有图,名字和年份 hover 才浮出。
                      统一 16:10 裁切 —— 这批图 1.50~1.88 比例不一,
                      16:10 居中,平均裁得最少 */}
                  <Link
                    to={`/project/${project.id}`}
                    onClick={() => handleProjectClick(project)}
                    aria-label={getLocalizedText(project.title, language)}
                    className="passion-card group block w-[92vw] max-w-[400px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden relative"
                  >
                    <Media
                      src={thumbSrc(project.thumbnail || project.heroImage)}
                      alt={getLocalizedText(project.title, language)}
                      className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-[1.06]"
                    />

                    <div className="passion-meta">
                      <h3
                        className="text-[15px] leading-snug font-['Tenor_Sans'] mb-1"
                        style={{ color: '#fff' }}
                      >
                        {getLocalizedText(project.title, language)}
                      </h3>
                      <p
                        className="text-[9px] tracking-[0.22em] uppercase font-['Poppins']"
                        style={{ color: 'rgba(255,255,255,0.7)' }}
                      >
                        {[project.year, ...(project.categories || []).slice(0, 2)].filter(Boolean).join(' · ')}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Portfolio;
