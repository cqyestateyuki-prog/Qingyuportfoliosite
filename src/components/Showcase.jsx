/**
 * Showcase Component
 * 
 * Featured 项目展示区域，采用极简高端设计风格
 * - 交替左右布局
 * - 3D 倾斜悬停效果
 * - 精简的标签展示
 * 
 * @param {Array} projects - Featured 项目列表
 */

import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MoonIcon from '../hud/MoonIcon';
import { useLanguage } from '../i18n';
import { getLocalizedText, getLocalizedArray } from '../utils/localization';

// ============ 3D 倾斜卡片组件 ============
const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 鼠标位置追踪
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // 弹簧动画配置
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);

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

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
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

// ============ 同框快翻画廊 ============
// 主项目卡内浏览内容图(hero + 案例章节图,最多 6 张):
// 鼠标悬在图上滚动 = 左右翻页;翻到头继续滚 = 放行页面滚到下一个项目
const ProjectGallery = ({ project, language }) => {
  const images = useMemo(() => {
    const list = [project.heroImage || project.thumbnail];
    project.sections?.forEach((s) => {
      s.images?.forEach((img) => img?.src && list.push(img.src));
      s.imageGroups?.forEach((g) => g.images?.forEach((img) => img?.src && list.push(img.src)));
    });
    return [...new Set(list.filter(Boolean))].slice(0, 6);
  }, [project]);

  const [[idx, dir], setSlide] = useState([0, 0]);
  const boxRef = useRef(null);
  const idxRef = useRef(0);
  const wheelLockRef = useRef(0);
  idxRef.current = idx;

  const go = (d) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSlide(([i]) => [(i + d + images.length) % images.length, d]);
  };

  // 滚轮翻页(非 passive 才能拦截页面滚动;React 合成 wheel 是 passive 的)
  useEffect(() => {
    const el = boxRef.current;
    if (!el || images.length <= 1) return undefined;
    const onWheel = (e) => {
      // 触控板横滑优先,普通滚轮用纵向
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      const forward = delta > 0;
      const i = idxRef.current;
      // 边界:不拦截,放行页面滚动去下一个项目
      if (forward ? i >= images.length - 1 : i <= 0) return;
      e.preventDefault();
      const now = Date.now();
      if (now - wheelLockRef.current < 550) return;
      wheelLockRef.current = now;
      setSlide([i + (forward ? 1 : -1), forward ? 1 : -1]);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [images.length]);

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? '38%' : d < 0 ? '-38%' : 0, opacity: 0, scale: 1.04 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d > 0 ? '-30%' : '30%', opacity: 0, scale: 0.98 }),
  };

  return (
    <div
      ref={boxRef}
      className="relative rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500 group-hover:shadow-2xl"
      style={{
        aspectRatio: '16/10',
        background: project.colors?.heroGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={getLocalizedText(project.title, language)}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>

      {/* 悬停遮罩 */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

      {images.length > 1 && (
        <>
          {/* 左右快翻箭头(桌面 hover 浮现,触屏常显) */}
          {[
            { d: -1, side: 'left-3', Icon: ChevronLeft, label: 'Previous image' },
            { d: 1, side: 'right-3', Icon: ChevronRight, label: 'Next image' },
          ].map(({ d, side, Icon, label }) => (
            <button
              key={side}
              type="button"
              onClick={go(d)}
              onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
              aria-label={label}
              className={`absolute ${side} top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 md:opacity-0 md:group-hover:opacity-100`}
              style={{
                background: 'rgba(16, 12, 32, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <Icon size={18} />
            </button>
          ))}

          {/* HUD 计数读数 */}
          <span
            className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded text-[10px] tracking-[0.25em] tabular-nums font-['Poppins'] backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'rgba(16, 12, 32, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')} ⇅
          </span>

          {/* 进度圆点 */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? 16 : 5,
                  height: 5,
                  background: i === idx ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ============ 主组件 ============
const Showcase = ({ projects }) => {
  const { t, language } = useLanguage();
  
  if (!projects || projects.length === 0) return null;

  return (
    <div className="py-24 px-6 relative">
      {/* HUD 区块标签 + 标题 */}
      <div className="text-center mb-20">
        <p
          className="text-[11px] tracking-[0.4em] uppercase mb-4 font-['Poppins']"
          style={{ color: 'var(--section-tag)' }}
        >
          ✦ 02 · {t('chapters.work')} <MoonIcon />
        </p>
        <h2 className="text-4xl md:text-5xl font-normal" style={{ color: 'var(--text-hero)' }}>
          {t('portfolio.title')}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-28 relative" style={{ perspective: '1200px' }}>
        {projects.map((project, index) => (
          <ReelItem key={project.id}>
          <motion.div
            initial={{ opacity: 0, y: 48, rotateY: index % 2 === 0 ? -4 : 4 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: index * 0.06 }}
            className={`feature-panel flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-8 lg:gap-12`}
          >
            {/* ====== 文字区域（三级层级：类别 → 标题 → 描述） ====== */}
            <div className="w-full lg:w-[32%] lg:min-w-[280px] flex-shrink-0 space-y-4 text-center lg:text-left font-['Poppins']">
              {/* 二级：项目类型标签 - 小且克制 */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.year && (
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--hud-glow) 35%, transparent)',
                      color: 'var(--text-accent)'
                    }}
                  >
                    {project.year}
                  </span>
                )}
                {project.categories?.slice(0, 2).map((cat) => (
                  <span 
                    key={cat}
                    className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--hud-glow) 35%, transparent)',
                      color: 'var(--text-accent)'
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* 一级：项目标题 */}
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight" style={{ color: 'var(--text-hero)' }}>
                {getLocalizedText(project.title, language)}
              </h3>

              {/* 三级：副标题/简介 - 弱化，行数限制 */}
              <p className="text-base font-light leading-snug line-clamp-3 max-w-sm mx-auto lg:mx-0" style={{ color: 'var(--text-body)' }}>
                {getLocalizedText(project.brief, language) || getLocalizedText(project.subtitle, language)}
              </p>

              {/* 行动链接 - 极简 */}
              <div className="pt-2">
                <Link to={`/project/${project.id}`}>
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="inline-block text-sm font-medium hover:text-[var(--custom-purple)] transition-colors underline underline-offset-2"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {t('portfolio.viewProject')}
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* ====== 图片区域（大占比，视觉主导） ====== */}
            <div className="w-full lg:flex-1 lg:min-w-0">
              <Link to={`/project/${project.id}`} className="block">
                <TiltCard className="relative group cursor-pointer">
                  {/* 图片容器:同框左右快翻画廊 */}
                  <ProjectGallery project={project} language={language} />

                  {/* 底部信息条 - 低调不抢图 */}
                  <div className="mt-4 flex items-center justify-between text-xs font-['Poppins']">
                    <span className="font-medium" style={{ color: 'var(--text-body)' }}>
                      {getLocalizedText(project.domain?.[0], language) || project.categories?.[0]}
                    </span>
                    <span 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
                      style={{ color: 'var(--custom-purple)' }}
                    >
                      {t('portfolio.clickToExplore')}
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </div>
          </motion.div>
          </ReelItem>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
