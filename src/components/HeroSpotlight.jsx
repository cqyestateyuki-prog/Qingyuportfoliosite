/**
 * HeroSpotlight Component
 * 
 * 首页Hero区域，包含：
 * - 鼠标追踪聚光灯效果
 * - 设计师价值观文字（背景/被照亮）
 * - Featured项目图片闪现（可点击跳转）
 * - 主标题动效（DecryptedText）
 * - 鼠标拖尾特效（SplashCursor）
 * 
 * @author Qingyu Cao
 */

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ChevronDown, Download, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from './MagneticButton';
import DecryptedText from './DecryptedText';
import { useLanguage } from '../i18n';
import { projects } from '../../data/projects';
import { getLocalizedText } from '../utils/localization';

// ============ 常量配置 ============
const BRAND_COLORS = {
  primary: '#8a81d7',
  primaryRgb: { r: 138, g: 129, b: 215 },
  highlight: '#c4bef0',
  background: 'linear-gradient(160deg, #1a1530 0%, #2a2450 35%, #433a6b 70%, #3d3560 100%)'
};

// 设计师核心价值观 - 散布在背景中，有疏有密（左上/右下更密）
const DESIGNER_VALUES = [
  { text: "EMPATHY", top: "12%", left: "8%", size: "text-xl md:text-2xl" },
  { text: "CRAFT", top: "22%", right: "12%", size: "text-2xl md:text-3xl" },
  { text: "INNOVATION", bottom: "22%", left: "18%", size: "text-lg md:text-xl" },
  { text: "SIMPLICITY", bottom: "28%", right: "8%", size: "text-xl md:text-2xl" },
  { text: "STRATEGY", top: "38%", left: "4%", size: "text-lg md:text-xl" },
  { text: "IMPACT", top: "8%", right: "28%", size: "text-2xl md:text-3xl" },
  { text: "DETAIL", bottom: "8%", left: "38%", size: "text-xl md:text-2xl" },
  { text: "USER-CENTRIC", top: "48%", right: "4%", size: "text-lg md:text-xl" },
  { text: "RESEARCH", top: "18%", left: "22%", size: "text-sm md:text-base" },
  { text: "ITERATION", top: "55%", left: "12%", size: "text-lg md:text-xl" },
  { text: "CLARITY", bottom: "35%", right: "22%", size: "text-xl md:text-2xl" },
  { text: "SYSTEMS", top: "35%", right: "25%", size: "text-sm md:text-base" },
  { text: "STORYTELLING", bottom: "15%", left: "55%", size: "text-lg md:text-xl" },
  { text: "PROTOTYPE", top: "5%", left: "45%", size: "text-2xl md:text-3xl" },
  { text: "LISTEN", bottom: "45%", right: "18%", size: "text-base md:text-lg" },
  { text: "RIGOR", top: "62%", left: "30%", size: "text-sm md:text-base" },
];

// 图片闪现配置
const IMAGE_FLASH_CONFIG = {
  interval: 3000,      // 检查间隔（毫秒）
  duration: 1500,      // 显示时长（毫秒）
  probability: 0.7,    // 显示概率
  minSize: 200,        // 最小尺寸
  maxSize: 400,        // 最大尺寸
  aspectRatio: 0.6     // 宽高比
};

// 点击价值观词时随机展示的设计格言（中英）
const DESIGN_QUOTES = [
  { en: "Design is not just what it looks like. Design is how it works.", zh: "设计不只是看起来怎样，设计关乎如何运作。" },
  { en: "Simplicity is the ultimate sophistication.", zh: "简约是复杂的终极形式。" },
  { en: "Empathy is the starting point for design.", zh: "共情是设计的起点。" },
  { en: "Details matter, they create the experience.", zh: "细节即体验。" },
  { en: "Good design is invisible.", zh: "好的设计是隐形的。" },
];

// ============ 主组件 ============
const HeroSpotlight = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  
  // ============ 鼠标追踪 ============
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // ============ Featured项目数据 ============
  // 使用 useMemo 缓存计算结果，避免每次渲染重新计算
  const featuredProjectsData = useMemo(() => {
    // 优先使用标记为 featured 的项目，否则取前3个
    const featured = projects.filter(p => p.featured);
    const selectedProjects = featured.length > 0 ? featured : projects.slice(0, 3);
    
    // 提取项目图片和ID，用于闪现展示
    return selectedProjects.map(p => ({
      id: p.id,
      title: p.title,
      image: p.thumbnail || p.heroImage
    })).filter(p => p.image);
  }, []);

  // ============ 闪现图片状态 ============
  const [activeImage, setActiveImage] = useState(null);

  // ============ 价值观可玩性：悬停 / 点击格言 ============
  const [hoveredValueIndex, setHoveredValueIndex] = useState(null);
  const [tooltipQuote, setTooltipQuote] = useState(null);

  // 主动触发下一张闪现（供角落按钮调用）
  const showNextFlash = useCallback(() => {
    if (featuredProjectsData.length === 0) return;
    const { duration, minSize, maxSize } = IMAGE_FLASH_CONFIG;
    const randomProject = featuredProjectsData[
      Math.floor(Math.random() * featuredProjectsData.length)
    ];
    const randomX = Math.floor(Math.random() * 70) + 15;
    const randomY = Math.floor(Math.random() * 60) + 20;
    const randomSize = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    setActiveImage({
      ...randomProject,
      top: `${randomY}%`,
      left: `${randomX}%`,
      width: randomSize
    });
    setTimeout(() => setActiveImage(null), duration);
  }, [featuredProjectsData]);

  // ============ 初始化和事件监听 ============
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // ============ 图片闪现逻辑（定时 + showNextFlash 供按钮调用） ============
  useEffect(() => {
    if (!isMounted || featuredProjectsData.length === 0) return;
    const { interval, probability } = IMAGE_FLASH_CONFIG;
    const tick = () => {
      if (Math.random() > (1 - probability)) showNextFlash();
    };
    const intervalId = setInterval(tick, interval);
    return () => clearInterval(intervalId);
  }, [isMounted, featuredProjectsData, showNextFlash]);

  // 点击价值观词时显示随机格言，3 秒后消失
  useEffect(() => {
    if (!tooltipQuote) return;
    const t = setTimeout(() => setTooltipQuote(null), 3000);
    return () => clearTimeout(t);
  }, [tooltipQuote]);

  // ============ 导航函数 ============
  const scrollToWork = useCallback(() => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const downloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/files/Qingyu_Cao_Resume.pdf';
    link.download = 'Qingyu_Cao_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const navigateToProject = useCallback((projectId) => {
    navigate(`/project/${projectId}`);
  }, [navigate]);

  // ============ 聚光灯遮罩 ============
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, black, transparent)`;

  // ============ 渲染 ============
  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center selection:bg-violet-500/30"
      style={{ background: BRAND_COLORS.background }}
    >
      {/* Layer 1: 背景价值观文字（始终可见，非常暗淡；悬停时该词略亮） */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {DESIGNER_VALUES.map((value, index) => (
          <div 
            key={`dim-${index}`}
            className={`absolute font-normal tracking-widest ${value.size} font-['Poppins'] transition-all duration-200 ${
              hoveredValueIndex === index ? 'text-white/20' : 'text-white/5'
            }`}
            style={{ top: value.top, left: value.left, right: value.right, bottom: value.bottom }}
          >
            {value.text}
          </div>
        ))}
      </div>

      {/* Layer 1.5: 价值观词可点击/悬停热区（不阻挡下层按钮） */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          {DESIGNER_VALUES.map((value, index) => (
            <button
              key={`hit-${index}`}
              type="button"
              className={`absolute font-['Poppins'] cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded ${
                value.size
              }`}
              style={{
                top: value.top,
                left: value.left,
                right: value.right,
                bottom: value.bottom,
                color: 'transparent',
                background: 'transparent'
              }}
              onMouseEnter={() => setHoveredValueIndex(index)}
              onMouseLeave={() => setHoveredValueIndex(null)}
              onClick={() => {
                const q = DESIGN_QUOTES[Math.floor(Math.random() * DESIGN_QUOTES.length)];
                setTooltipQuote(language === 'zh' ? q.zh : q.en);
              }}
              aria-label={value.text}
            >
              {value.text}
            </button>
          ))}
        </div>
      </div>

      {/* Layer 2: Featured项目图片闪现（可点击跳转）- 弹性滑入动效 */}
      <div className="absolute inset-0 z-[5] overflow-hidden">
        {activeImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="absolute cursor-pointer group"
            style={{
              top: activeImage.top,
              left: activeImage.left,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => navigateToProject(activeImage.id)}
          >
            <img
              src={activeImage.image}
              alt={getLocalizedText(activeImage.title, language)}
              className="object-cover rounded-lg grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-300"
              style={{
                width: activeImage.width,
                height: activeImage.width * IMAGE_FLASH_CONFIG.aspectRatio,
              }}
              loading="lazy"
            />
            {/* Hover时显示项目标题 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-medium px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                {getLocalizedText(activeImage.title, language)}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Layer 3: 聚光灯照亮层（价值观文字在鼠标附近高亮；悬停时轻微放大） */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        {DESIGNER_VALUES.map((value, index) => (
          <motion.div 
            key={`lit-${index}`}
            className={`absolute font-normal tracking-widest ${value.size} font-['Poppins']`}
            style={{ 
              top: value.top, 
              left: value.left, 
              right: value.right, 
              bottom: value.bottom,
              color: BRAND_COLORS.highlight,
              textShadow: `0 0 15px rgba(138, 129, 215, 0.8), 0 0 30px rgba(138, 129, 215, 0.5)`
            }}
            animate={{ scale: hoveredValueIndex === index ? 1.08 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {value.text}
          </motion.div>
        ))}
        
        {/* 网格纹理 */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </motion.div>

      {/* Layer 4: 主要内容（标题、描述、按钮） */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* 主标题 - 带解密动效 */}
          <h1 className="text-[15vw] md:text-[12vw] font-normal text-white leading-none tracking-wide select-none">
            <DecryptedText text="QINGYU" className="font-['Poppins']" />
          </h1>
          
          {/* 副标题 - 职位 */}
          <h2 className="text-xl md:text-3xl text-white/90 font-light tracking-[0.5em] md:tracking-[0.8em] mt-6 md:mt-8 uppercase select-none">
            {t('hero.subtitle')}
          </h2>
        </motion.div>

        {/* 个人介绍 */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white/80 max-w-2xl mx-auto mt-10 mb-10 text-base md:text-lg font-light leading-relaxed font-['Poppins']"
        >
          {language === 'zh' ? (
            <>
              一位能够<span className="text-white font-medium">{t('hero.descriptionHighlight1')}</span>的设计师。
              我将设计直觉与工程深度相结合，在快节奏的环境中<span className="text-white font-medium">{t('hero.descriptionHighlight2')}</span>。
            </>
          ) : (
            <>
              A Product Designer who <span className="text-white font-medium">{t('hero.descriptionHighlight1')}</span>. 
              I combine design intuition with engineering depth to <span className="text-white font-medium">{t('hero.descriptionHighlight2')}</span> in fast-moving environments.
            </>
          )}
        </motion.p>

        {/* 行动按钮 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticButton>
            <Button 
              onClick={scrollToWork}
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 text-white border-none"
              style={{ 
                backgroundColor: BRAND_COLORS.primary,
                boxShadow: `0 0 25px rgba(138, 129, 215, 0.4)`
              }}
            >
              {t('hero.viewWorks')}
            </Button>
          </MagneticButton>
          
          <MagneticButton>
            <Button 
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-6 text-lg font-medium tracking-wide transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              {t('hero.resume')}
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Layer 5: 滚动指示器 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <button 
          onClick={scrollToWork}
          className="text-white/40 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to work section"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>

      {/* 可玩性：下一张闪现 - 角落小按钮 */}
      {featuredProjectsData.length > 0 && (
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          onClick={showNextFlash}
          className="absolute top-6 left-6 md:left-8 z-20 p-2 rounded-full text-white/35 hover:text-white/70 hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Show next project preview"
        >
          <ImageIcon size={22} />
        </motion.button>
      )}

      {/* 点击价值观词后的格言 tooltip */}
      {tooltipQuote && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-24 left-6 right-6 md:left-auto md:right-12 md:max-w-sm z-20 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-sm font-['Poppins'] italic"
        >
          "{tooltipQuote}"
        </motion.div>
      )}

      {/* 聚光灯光晕效果 */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(138, 129, 215, 0.2), transparent 70%)`
        }}
      />
    </section>
  );
};

export default HeroSpotlight;
