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
import PassionTheater from './PassionTheater';

/**
 * Portfolio — 02 WORK 章节
 *
 * Selected Work(Showcase 碎裂式大卡)+ Passion Projects(纯图卡片):
 * 下半区每个项目就是一张图,统一 16:10 流式居中,hover 才浮出名字和年份
 */

/**
 * hover 播放用的片段。只认本地文件。
 *
 * 不走 vimeo:隐藏控件要 background=1 或 controls=0,这两个参数都是 Plus 以上
 * 才有的,免费档下播放器整块白屏;不加又会在卡片上糊一条进度条和 vimeo logo。
 * 所以 hoverVideo 填 public 下的 mp4/webm 路径,没填就还是静态图。
 */
const localVideo = (src) => (/\.(mp4|webm)$/i.test(String(src || '')) ? src : null);

/**
 * 一张 passion 卡片。
 * 有片段的项目 hover 才挂 <video>,鼠标离开立刻卸掉 ——
 * 不能让六七个视频在后台一直解码。触屏没有 hover,不挂。
 */
const PassionCard = ({ project, title, meta, onClick, onOpen }) => {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const clip = localVideo(project.hoverVideo || project.heroVideo);

  const start = () => {
    if (!clip) return;
    if (!window.matchMedia?.('(hover: hover)').matches) return;
    setPlaying(true);
  };
  const stop = () => { setPlaying(false); setReady(false); };

  // 配了 externalUrl 的是线上跑着的真站,点了新标签打开,不进站内详情页
  const external = project.externalUrl;
  const Wrapper = external ? 'a' : Link;
  const wrapperProps = external
    ? { href: external, target: '_blank', rel: 'noopener noreferrer' }
    : { to: `/project/${project.id}` };

  return (
    <Wrapper
      {...wrapperProps}
      /* 点一下不再直接跳走:先在站内的放映厅里大屏看视频,外站 / 案例页的入口在放映厅里。
         href 留着,右键新开或中键点仍然是原来的目标 */
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        onClick?.();
        onOpen?.(project);
      }}
      aria-label={external ? `${title}(新窗口打开)` : title}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className="passion-card group block w-full aspect-[16/10] rounded-2xl overflow-hidden relative"
    >
      <Media
        src={thumbSrc(project.thumbnail || project.heroImage)}
        alt={title}
        className="w-full h-full object-cover block"
      />

      {playing && (
        <video
          className="passion-video"
          data-ready={ready ? 'yes' : 'no'}
          src={clip}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          /* 等到真有画面了再淡入,不然会闪一下黑底 */
          onPlaying={() => setReady(true)}
        />
      )}

      {/* 外站的角标常驻,不等 hover —— 点下去会离开作品集,这个得先说 */}
      {external && (
        <span className="passion-external" aria-hidden="true">
          ↗
        </span>
      )}

      <div className="passion-meta">
        <h3 className="text-[15px] leading-snug font-['Tenor_Sans'] mb-1" style={{ color: '#fff' }}>
          {title}
        </h3>
        <p
          className="text-[9px] tracking-[0.22em] uppercase font-['Poppins']"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {meta}
        </p>
      </div>
    </Wrapper>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  // 放映厅里正在看的项目;null = 关着。组件常驻,只切内容和开关属性
  const [theater, setTheater] = useState(null);
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

  const filters = ['All', 'AI', 'Creative Coding', 'UIUX', 'Product Design', 'Web Design', 'Game', 'Research'];

  // Featured = Professional Work(进 Showcase 大卡);其余 = Personal Projects(牌阵)
  // 两个版块互不重复:牌阵只展示非 featured 的个人项目
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  const showcaseItems = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);
  // 和上面的 Showcase 一样按 order 排,没写 order 的沉到后面、保持 registry 里的先后
  const personalProjects = projects
    .filter((p) => !p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

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
          <motion.div className="passion-grid flex flex-wrap justify-center items-center gap-4 md:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  /* 只让位置走 FLIP。用整个 layout 的话,hover 时 CSS 改的 flex-basis
                     会被 framer-motion 当成布局变化,用 scale 补偿抵消掉,卡片就不会挤 */
                  layout="position"
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="passion-slot relative"
                >
                  {/* 纯图卡片:平时只有图,名字和年份 hover 才浮出。
                      统一 16:10 裁切 —— 这批图 1.50~1.88 比例不一,
                      16:10 居中,平均裁得最少。有 vimeo 的 hover 会开始播 */}
                  <PassionCard
                    project={project}
                    title={getLocalizedText(project.title, language)}
                    meta={[project.year, ...(project.categories || []).slice(0, 2)].filter(Boolean).join(' · ')}
                    onClick={() => handleProjectClick(project)}
                    onOpen={setTheater}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Passion 放映厅:大屏 + 进度条,常驻 DOM,靠 data-open 开关 */}
      <PassionTheater project={theater} onClose={() => setTheater(null)} />
    </>
  );
};

export default Portfolio;
