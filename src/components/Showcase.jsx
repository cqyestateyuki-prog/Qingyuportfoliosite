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

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
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

// ============ 主组件 ============
const Showcase = ({ projects }) => {
  const { t, language } = useLanguage();
  
  if (!projects || projects.length === 0) return null;

  return (
    <div 
      className="py-24 px-6 relative"
      style={{
        background: 'radial-gradient(ellipse 70% 100% at 0% 50%, rgba(255,255,255,0.7), transparent 45%), linear-gradient(to bottom, rgb(249,250,251), white)'
      }}
    >
      <div className="max-w-7xl mx-auto space-y-40 relative" style={{ perspective: '1200px' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 48, rotateY: index % 2 === 0 ? -4 : 4 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: index * 0.06 }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-8 lg:gap-12`}
          >
            {/* ====== 文字区域（三级层级：类别 → 标题 → 描述） ====== */}
            <div className="w-full lg:w-[32%] lg:min-w-[280px] flex-shrink-0 space-y-4 text-center lg:text-left font-['Poppins']">
              {/* 二级：项目类型标签 - 小且克制 */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.categories?.slice(0, 2).map((cat) => (
                  <span 
                    key={cat}
                    className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-gray-500"
                    style={{ 
                      backgroundColor: 'rgba(137, 129, 215, 0.1)', 
                      color: 'var(--custom-purple)' 
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* 一级：项目标题 */}
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight">
                {getLocalizedText(project.title, language)}
              </h3>

              {/* 三级：副标题/简介 - 弱化，行数限制 */}
              <p className="text-base text-gray-600 font-light leading-snug line-clamp-2 max-w-sm mx-auto lg:mx-0">
                {getLocalizedText(project.subtitle, language) || getLocalizedText(project.brief, language)?.substring(0, 80)}
              </p>

              {/* 行动链接 - 极简 */}
              <div className="pt-2">
                <Link to={`/project/${project.id}`}>
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="inline-block text-sm font-medium text-gray-600 hover:text-[var(--custom-purple)] transition-colors underline underline-offset-2"
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
                  {/* 图片容器 - 大画幅比例，视觉主导 */}
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500 group-hover:shadow-2xl"
                    style={{ 
                      aspectRatio: '16/10',
                      background: project.colors?.heroGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                  >
                    <motion.img
                      src={project.heroImage || project.thumbnail}
                      alt={getLocalizedText(project.title, language)}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      loading="lazy"
                    />
                    
                    {/* 悬停遮罩 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* 底部信息条 - 低调不抢图 */}
                  <div className="mt-4 flex items-center justify-between text-xs font-['Poppins']">
                    <span className="text-gray-600 font-medium">
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
        ))}
      </div>
    </div>
  );
};

export default Showcase;
