/**
 * Showcase Component
 *
 * Featured 项目展示区域,采用极简高端设计风格
 * - 整块 hero 点击碎裂成案例页卡片墙(ShatterGrid)
 * - 3D 倾斜悬停效果(仅折叠态,展开后关掉,否则读碎片很晕)
 * - 精简的标签展示
 *
 * @param {Array} projects - Featured 项目列表
 */

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import MoonIcon from '../hud/MoonIcon';
import { useLanguage } from '../i18n';
import { getLocalizedText } from '../utils/localization';
import { splitHighlightSegments } from '../utils/highlight';
import ShatterGrid from './ShatterGrid';
import { countProjectPages } from '../utils/projectSlides';

// ============ 3D 倾斜卡片组件 ============
const TiltCard = ({ children, className = '', max = 8 }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 鼠标位置追踪
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // 弹簧动画配置
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const enabled = max > 0;
  const active = isHovered && enabled;

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: active ? rotateX : 0,
        rotateY: active ? rotateY : 0,
        // 关掉倾斜时必须连 3D 上下文一起关:preserve-3d 里套十几个各自带
        // transform 的碎片,Chrome 会画不出靠后的几行(整行空白但 DOM 一切正常)
        transformStyle: enabled ? 'preserve-3d' : 'flat',
        perspective: enabled ? 1000 : 'none',
      }}
    >
      {children}
    </motion.div>
  );
};

// ============ 胶卷景深 ============
// 电影卷轴感:项目滑出视口上方时缩小、后退、变暗,滑入时从远处浮现
const ReelItem = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.32, 0.68, 1], [0.86, 1, 1, 0.84]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.15, 1, 1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.32, 0.68, 1], [90, 0, 0, -48]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, y }}>
      {children}
    </motion.div>
  );
};

// ============ 主组件 ============
const Showcase = ({ projects }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // 首个项目默认摊开:既示范了「这里能点开」,访客也不至于滑过一整屏只看到几张封面
  const [expandedIds, setExpandedIds] = useState(() => {
    const first = projects?.[0]?.id;
    return new Set(first ? [first] : []);
  });
  // 每个项目当前翻到第几页(九格一页)
  const [pages, setPages] = useState({});

  const toggle = (id, next) => {
    setExpandedIds((prev) => {
      const s = new Set(prev);
      if (next) s.add(id);
      else s.delete(id);
      return s;
    });
  };

  if (!projects || projects.length === 0) return null;

  return (
    <div className="py-24 px-6 md:px-20 lg:px-28 relative">
      {/* HUD 区块标签 + 标题 */}
      <div className="text-center mb-20">
        <p
          className="text-[11px] font-medium tracking-[0.3em] uppercase mb-4 font-['Poppins']"
          style={{ color: 'var(--section-tag)' }}
        >
          <MoonIcon /> 02 · {t('chapters.work')} ✦
        </p>
        <h2 className="text-4xl md:text-5xl font-normal" style={{ color: 'var(--text-hero)' }}>
          {t('portfolio.title')}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-28 relative" style={{ perspective: '1200px' }}>
        {projects.map((project, index) => {
          const isExpanded = expandedIds.has(project.id);
          // 线上版入口:优先 primary,否则拿第一个
          const btns = project.overview?.buttons || [];
          const liveLink = btns.find((b) => b.type === 'primary') || btns[0] || null;
          const totalPages = countProjectPages(project, language);
          const page = Math.min(pages[project.id] || 0, totalPages - 1);
          const turnPage = (d) =>
            setPages((prev) => ({
              ...prev,
              [project.id]: (page + d + totalPages) % totalPages,
            }));

          return (
            <ReelItem key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 180, damping: 22, delay: index * 0.05 }}
                className="feature-panel"
              >
                {/* ====== 抬头:标题 + 一排标签(左) / 线上版入口(右) ====== */}
                <div className="flex flex-wrap items-end justify-between gap-3 mb-6 font-['Poppins']">
                  <div>
                    {/* 领域和年份/类别做成同一种 chip 排在一起,读起来是一串定位信息。
                        2026-08-08 用户: 标签放标题上面 (eyebrow 式 — 先定位, 后名字) */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(() => {
                        // domain 和 category 常常说的是同一件事(「AI Product」+「AI」),
                        // 并排两个 chip 读起来是重复的。被 domain 盖住的 category 直接不排,
                        // 空出来的位置让给后面还没说过的那一个
                        const lead = getLocalizedText(project.domain?.[0], language);
                        const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                        const leadKey = norm(lead);
                        const cats = (project.categories || []).filter((c) => {
                          const k = norm(c);
                          return k && leadKey && !(leadKey.includes(k) || k.includes(leadKey));
                        });
                        return [lead, project.year, ...cats.slice(0, 2)];
                      })()
                        .filter(Boolean)
                        .map((chip) => (
                          <span
                            key={chip}
                            className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                            style={{
                              backgroundColor: 'color-mix(in srgb, var(--hud-glow) 35%, transparent)',
                              color: 'var(--text-accent)',
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                    </div>
                    <Link to={`/project/${project.id}`}>
                      <h3
                        className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight transition-opacity hover:opacity-70"
                        style={{ color: 'var(--text-hero)' }}
                      >
                        {getLocalizedText(project.title, language)}
                      </h3>
                    </Link>
                  </div>

                  {/* 线上跑着的版本。只有配了 overview.buttons 的项目才有,没有就空着 */}
                  {liveLink && (
                    <a
                      href={liveLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.18em]"
                    >
                      {liveLink.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                {/* ====== 整块 hero → 点击碎成案例页卡片墙 ====== */}
                {/* 外层不能包 Link:一点就跳走,展开永远触发不了。进详情页走标题和下面的箭头 */}
                <div className="relative">
                  <TiltCard max={isExpanded ? 0 : 4} className="relative">
                    <ShatterGrid
                      project={project}
                      language={language}
                      expanded={isExpanded}
                      page={page}
                      onToggle={(next) => toggle(project.id, next)}
                      onTileClick={() => navigate(`/project/${project.id}`)}
                    />
                  </TiltCard>

                  {/* 翻页竖着贴在卡片右外侧,和左边那条章节导航是一对。
                      按钮沿用 Live Site 那套发光,这一屏就这两处会亮。
                      一页九格,剩下的缩略图在后面几页;只有一页的项目不显示 */}
                  {isExpanded && totalPages > 1 && (
                    <div className="shatter-pager shatter-pager-side">
                      <button
                        type="button"
                        onClick={() => turnPage(-1)}
                        aria-label="上一页缩略图"
                        data-tip="View previous page"
                      >
                        ∧
                      </button>
                      <span className="pager-count tabular-nums">
                        {String(page + 1).padStart(2, '0')}
                        <i>/</i>
                        {String(totalPages).padStart(2, '0')}
                      </span>
                      <button
                        type="button"
                        onClick={() => turnPage(1)}
                        aria-label="下一页缩略图"
                        data-tip="View next page"
                      >
                        ∨
                      </button>
                    </div>
                  )}
                </div>

                {/* ====== 底行:简介 + View Project ====== */}
                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 font-['Poppins']">
                  <p
                    className="text-base font-light leading-snug line-clamp-2 max-w-2xl"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {splitHighlightSegments(
                      getLocalizedText(project.brief, language) || getLocalizedText(project.subtitle, language)
                    ).map((seg, i) =>
                      seg.highlighted ? (
                        <span key={i} className="font-normal" style={{ color: 'var(--section-tag)' }}>
                          {seg.text}
                        </span>
                      ) : (
                        <span key={i}>{seg.text}</span>
                      )
                    )}
                  </p>
                  <div className="flex items-center gap-6 shrink-0">
                    <Link to={`/project/${project.id}`}>
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium tracking-[0.15em] uppercase transition-colors"
                        style={{ color: 'var(--section-tag)' }}
                      >
                        {t('portfolio.viewProject')} <span aria-hidden="true">→</span>
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ReelItem>
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;
