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
const PLANET_SIZES = [225, 160, 205, 148, 240, 178];
const PLANET_LIFTS = [0, 84, 22, 104, 40, 66];

// 每颗星球用自己项目的品牌色发光
const getPlanetGlowHex = (project) => {
  const c = project.colors || {};
  const src = c.lightColor || c.textHighlightColor || c.heroGradient || '';
  const m = String(src).match(/#[0-9a-fA-F]{6}/);
  return m ? m[0] : '#8a81d7';
};

const hexToRgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  // 触屏:第一次点选中(弹资料卡),进入项目走卡内 CTA
  const [selectedPlanet, setSelectedPlanet] = useState(null);
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

        {/* ============ 星球阵列:错落星系,hover/点选弹出资料卡 ============ */}
        <motion.div
          layout
          className="flex flex-wrap justify-center items-start gap-x-10 md:gap-x-16 gap-y-10 max-w-7xl mx-auto pb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const size = PLANET_SIZES[index % PLANET_SIZES.length];
              const lift = PLANET_LIFTS[index % PLANET_LIFTS.length];
              const glowHex = getPlanetGlowHex(project);
              const isSelected = selectedPlanet === project.id;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
                  className={`planet-item relative group flex flex-col items-center ${isSelected ? 'planet-selected' : ''}`}
                  style={{
                    paddingTop: lift,
                    '--planet-glow': hexToRgba(glowHex, 0.55),
                    '--planet-glow-soft': hexToRgba(glowHex, 0.28),
                  }}
                >
                  <Link
                    to={`/project/${project.id}`}
                    onClick={(e) => {
                      // 触屏:第一次点 = 选中弹资料卡,不跳转
                      const touchOnly = window.matchMedia('(hover: none)').matches;
                      if (touchOnly && !isSelected) {
                        e.preventDefault();
                        setSelectedPlanet(project.id);
                        return;
                      }
                      handleProjectClick(project);
                    }}
                    aria-label={getLocalizedText(project.title, language)}
                    className="planet-float relative block aspect-square"
                    style={{
                      width: `min(${size}px, 38vw)`,
                      animationDelay: `${(index % 5) * 0.8}s`,
                      animationDuration: `${5.5 + (index % 3)}s`,
                    }}
                  >
                    {/* 轨道环(虚线,缓慢自转,品牌色随 hover 点亮) */}
                    <span
                      className="planet-orbit absolute -inset-3 rounded-full border border-dashed transition-colors duration-500"
                      style={{
                        borderColor: 'var(--hud-line)',
                        animationDuration: `${20 + (index % 4) * 7}s`,
                      }}
                      aria-hidden="true"
                    />
                    {/* 星球本体(品牌色光晕) */}
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
                    {/* 卫星小星(品牌色) */}
                    <span
                      className="absolute -top-1 right-1 text-base transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125"
                      style={{ color: glowHex, textShadow: `0 0 10px ${hexToRgba(glowHex, 0.8)}` }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                  </Link>

                  {/* 星球铭牌:序号 + 名称 */}
                  <p
                    className="mt-4 max-w-[180px] text-center text-xs leading-snug font-['Poppins'] transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="tabular-nums tracking-[0.2em]" style={{ color: 'var(--hud-fg-muted)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="block mt-0.5 text-sm font-medium" style={{ color: 'var(--text-hero)' }}>
                      {getLocalizedText(project.title, language)}
                    </span>
                  </p>

                  {/* 星球资料卡:hover / 点选时弹出 */}
                  <div
                    className="planet-dossier absolute top-full -mt-2 w-72 z-40 rounded-2xl p-4 text-left backdrop-blur-md"
                    style={{
                      background: 'var(--surface-scrim-strong)',
                      border: `1px solid ${hexToRgba(glowHex, 0.45)}`,
                      boxShadow: `0 12px 40px rgba(0,0,0,0.25), 0 0 32px ${hexToRgba(glowHex, 0.35)}`,
                    }}
                  >
                    {/* 资料卡抬头:序号 + 标题 */}
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-1 font-['Poppins']" style={{ color: 'var(--hud-fg-muted)' }}>
                      ✦ Planet {String(index + 1).padStart(2, '0')}
                    </p>
                    <h4 className="text-base font-semibold mb-2" style={{ color: 'var(--text-hero)' }}>
                      {getLocalizedText(project.title, language)}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {[project.year, ...(project.categories || []).slice(0, 3)].filter(Boolean).map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full uppercase tracking-wider"
                          style={{
                            backgroundColor: hexToRgba(glowHex, 0.16),
                            color: glowHex,
                            border: `1px solid ${hexToRgba(glowHex, 0.3)}`,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed line-clamp-3 mb-2.5" style={{ color: 'var(--text-body)' }}>
                      {getLocalizedText(project.brief, language)}
                    </p>
                    {project.techTags && project.techTags.length > 0 && (
                      <p className="text-[10px] mb-3 flex flex-wrap gap-x-2.5 gap-y-0.5" style={{ color: 'var(--text-muted)' }}>
                        {project.techTags.slice(0, 4).map((tag) => (
                          <span key={tag}>#{tag.replace(/^#/, '')}</span>
                        ))}
                      </p>
                    )}
                    <Link
                      to={`/project/${project.id}`}
                      onClick={() => handleProjectClick(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.2em] uppercase transition-all hover:gap-2.5"
                      style={{ color: glowHex }}
                    >
                      {t('portfolio.viewProject')} <span aria-hidden="true">→</span>
                    </Link>
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
