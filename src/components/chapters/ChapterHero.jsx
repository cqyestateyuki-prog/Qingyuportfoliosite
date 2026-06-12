/**
 * ChapterHero — 01 VISION:游戏开场式叙事 Hero
 *
 * 时间轴:三句叙事按顺序自动播放,星月粒子随每句变换形态
 *   n1 → 星尘漫散(scatter)   n2 → 聚成新月(moon)   n3 → 化作星芒(star)
 *   final → 月亮定格右上,QINGYU 标题 + CTA 浮现
 *
 * - 点击任意处推进一句;SKIP 直达 final
 * - 本会话看过(sessionStorage)或 reduced-motion(low 档)直接 final
 * - 背景透明:WebGL 星云从下方透出(z-1 画布,内容 z-10)
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ScrollPrompt from '../../hud/ScrollPrompt';
import { Button } from '@/components/ui/button';
import MagneticButton from '../MagneticButton';
import DecryptedText from '../DecryptedText';
import NarrativeSequence from './NarrativeSequence';
import { useLanguage } from '../../i18n';
import { useCosmos } from '../../cosmos/CosmosProvider';

const EASE = [0.16, 1, 0.3, 1];
const SEEN_KEY = 'qy-hero-narrative-seen';

// 每句叙事对应的粒子形态
const STAGES = [
  { key: 'narrative1', shape: 'scatter', disperse: 0.7, dur: 3600 },
  { key: 'narrative2', shape: 'moon', disperse: 0, dur: 3800 },
  { key: 'narrative3', shape: 'star', disperse: 0, dur: 3800 },
];

// 星座标签(从 16 个精简到 9 个,hover 亮起 + 随机格言)
const DESIGNER_VALUES = [
  { text: 'EMPATHY', top: '14%', left: '8%', size: 'text-xl md:text-2xl' },
  { text: 'CRAFT', top: '22%', right: '12%', size: 'text-2xl md:text-3xl' },
  { text: 'INNOVATION', bottom: '24%', left: '16%', size: 'text-lg md:text-xl' },
  { text: 'SIMPLICITY', bottom: '30%', right: '8%', size: 'text-xl md:text-2xl' },
  { text: 'STRATEGY', top: '40%', left: '4%', size: 'text-lg md:text-xl' },
  { text: 'IMPACT', top: '9%', right: '30%', size: 'text-2xl md:text-3xl' },
  { text: 'DETAIL', bottom: '10%', left: '38%', size: 'text-xl md:text-2xl' },
  { text: 'USER-CENTRIC', top: '50%', right: '5%', size: 'text-lg md:text-xl' },
  { text: 'STORYTELLING', bottom: '16%', left: '58%', size: 'text-lg md:text-xl' },
];

// 梦幻城堡剪影(迪士尼开场感,仅日版浮现)+ 环绕星光
const CastleSilhouette = () => (
  <div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none select-none w-[min(92vw,680px)] opacity-100 dark:opacity-0 transition-opacity duration-1000"
    aria-hidden="true"
  >
    <svg viewBox="0 0 640 262" className="w-full h-auto" fill="none">
      <defs>
        <linearGradient id="castleFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9d82e0" stopOpacity="0.75" />
          <stop offset="1" stopColor="#d9c9f5" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* 城堡主体剪影:五塔尖顶 */}
      <path
        fill="url(#castleFade)"
        d="M40,262 V150 L65,105 L90,150 V200 H180 V120 L210,70 L240,120 V190 H280 V90 L320,18 L360,90 V190 H400 V120 L430,70 L460,120 V200 H550 V150 L575,105 L600,150 V262 Z"
      />
      {/* 中央塔旗帜 */}
      <path d="M320,18 V4 L336,10 L320,16" stroke="#9d82e0" strokeWidth="2.5" fill="#b89bf0" opacity="0.8" />
      {/* 侧塔旗帜 */}
      <path d="M210,70 V58 L222,63 L210,68" fill="#c4aef2" opacity="0.7" />
      <path d="M430,70 V58 L442,63 L430,68" fill="#c4aef2" opacity="0.7" />
      {/* 环绕星光 ✦ */}
      {[
        [120, 60, 7, '0s'],
        [255, 30, 5, '0.8s'],
        [395, 42, 6, '1.6s'],
        [520, 70, 5, '0.4s'],
      ].map(([x, y, r, delay], i) => (
        <path
          key={i}
          d={`M${x},${y - r} Q${x + r * 0.18},${y - r * 0.18} ${x + r},${y} Q${x + r * 0.18},${y + r * 0.18} ${x},${y + r} Q${x - r * 0.18},${y + r * 0.18} ${x - r},${y} Q${x - r * 0.18},${y - r * 0.18} ${x},${y - r} Z`}
          fill="#b89bf0"
          opacity="0.9"
          style={{ animation: `castle-sparkle 2.4s ease-in-out ${delay} infinite` }}
        />
      ))}
      {/* 城堡上方一弯新月 */}
      <path
        d="M488,28 a16,16 0 1,0 14,24 a12.5,12.5 0 1,1 -14,-24 Z"
        fill="#c9b4f5"
        opacity="0.85"
      />
    </svg>
  </div>
);

const DESIGN_QUOTES = [
  { en: 'Design is not just what it looks like. Design is how it works.', zh: '设计不只是看起来怎样，设计关乎如何运作。' },
  { en: 'Simplicity is the ultimate sophistication.', zh: '简约是复杂的终极形式。' },
  { en: 'Empathy is the starting point for design.', zh: '共情是设计的起点。' },
  { en: 'Details matter, they create the experience.', zh: '细节即体验。' },
  { en: 'Good design is invisible.', zh: '好的设计是隐形的。' },
];

const ChapterHero = () => {
  const { t, language } = useLanguage();
  const { set, tier } = useCosmos();

  // 已看过本会话叙事 / 低端设备 → 直达定格态
  const startAtFinal = useMemo(() => {
    if (tier === 'low') return true;
    try {
      return sessionStorage.getItem(SEEN_KEY) === '1';
    } catch {
      return false;
    }
  }, [tier]);

  const [phase, setPhase] = useState(startAtFinal ? 'final' : 0);
  const [hoveredValueIndex, setHoveredValueIndex] = useState(null);
  const [tooltipQuote, setTooltipQuote] = useState(null);

  const isFinal = phase === 'final';

  // 时间轴推进 + 粒子形态同步
  useEffect(() => {
    if (isFinal) {
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch { /* 隐私模式忽略 */ }
      set('shape', 'moon');
      set('disperse', 0.12);
      return undefined;
    }
    const stage = STAGES[phase];
    set('shape', stage.shape);
    set('disperse', stage.disperse);
    const id = setTimeout(
      () => setPhase((p) => (p + 1 < STAGES.length ? p + 1 : 'final')),
      stage.dur
    );
    return () => clearTimeout(id);
  }, [phase, isFinal, set]);

  const skip = useCallback(() => setPhase('final'), []);
  const advance = useCallback(
    () => setPhase((p) => (p === 'final' || p + 1 >= STAGES.length ? 'final' : p + 1)),
    []
  );

  // 格言 tooltip 3 秒后消失
  useEffect(() => {
    if (!tooltipQuote) return undefined;
    const id = setTimeout(() => setTooltipQuote(null), 3000);
    return () => clearTimeout(id);
  }, [tooltipQuote]);

  const scrollToWork = useCallback(() => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
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

  const narrativeLines = STAGES.map((s) => ({ id: s.key, text: t(`hero.${s.key}`), dur: s.dur }));

  return (
    <section
      id="vision"
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center selection:bg-violet-500/30"
    >
      {/* ============ 叙事播放 ============ */}
      {!isFinal && (
        <NarrativeSequence
          lines={narrativeLines}
          activeIndex={phase}
          onSkip={skip}
          onAdvance={advance}
          skipLabel={t('hero.skip')}
        />
      )}

      {/* ============ 定格态 ============ */}
      {isFinal && (
        <>
          {/* 梦幻城堡(日版限定) */}
          <CastleSilhouette />

          {/* 星座标签(可悬停/点击出格言) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {DESIGNER_VALUES.map((value, index) => (
              <div
                key={`dim-${index}`}
                className={`absolute font-normal tracking-widest ${value.size} font-['Poppins'] transition-all duration-300`}
                style={{
                  top: value.top,
                  left: value.left,
                  right: value.right,
                  bottom: value.bottom,
                  color: 'var(--text-hero)',
                  opacity: hoveredValueIndex === index ? 0.45 : 0.08,
                  textShadow: hoveredValueIndex === index ? '0 0 20px var(--hud-glow)' : 'none',
                }}
              >
                {value.text}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <div className="absolute inset-0 pointer-events-auto">
              {DESIGNER_VALUES.map((value, index) => (
                <button
                  key={`hit-${index}`}
                  type="button"
                  className={`absolute font-['Poppins'] cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded ${value.size}`}
                  style={{
                    top: value.top,
                    left: value.left,
                    right: value.right,
                    bottom: value.bottom,
                    color: 'transparent',
                    background: 'transparent',
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

          {/* 主内容 */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE }}
              className="relative"
            >
              <h1
                className="hero-title text-[15vw] md:text-[12vw] font-normal leading-none tracking-wide select-none"
                style={{ color: 'var(--text-hero)' }}
              >
                <DecryptedText text="QINGYU" className="font-['Poppins']" />
              </h1>
              <h2
                className="text-xl md:text-3xl font-light tracking-[0.5em] md:tracking-[0.8em] mt-6 md:mt-8 uppercase select-none"
                style={{ color: 'var(--text-body)' }}
              >
                {t('hero.subtitle')}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-2xl mx-auto mt-10 mb-10 text-base md:text-lg font-light leading-relaxed font-['Poppins']"
              style={{ color: 'var(--text-body)' }}
            >
              {language === 'zh' ? (
                <>
                  一位能够<span className="font-medium" style={{ color: 'var(--text-hero)' }}>{t('hero.descriptionHighlight1')}</span>的设计师。
                  我将设计直觉与工程深度相结合，在快节奏的环境中<span className="font-medium" style={{ color: 'var(--text-hero)' }}>{t('hero.descriptionHighlight2')}</span>。
                </>
              ) : (
                <>
                  A Product Designer who <span className="font-medium" style={{ color: 'var(--text-hero)' }}>{t('hero.descriptionHighlight1')}</span>.
                  I combine design intuition with engineering depth to <span className="font-medium" style={{ color: 'var(--text-hero)' }}>{t('hero.descriptionHighlight2')}</span> in fast-moving environments.
                </>
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MagneticButton>
                <Button
                  onClick={scrollToWork}
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 text-white border-none"
                  style={{
                    backgroundColor: '#8a81d7',
                    boxShadow: '0 0 25px rgba(138, 129, 215, 0.4)',
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
                  className="rounded-full px-10 py-6 text-lg font-medium tracking-wide transition-all duration-300 bg-transparent backdrop-blur-sm hover:scale-105"
                  style={{
                    border: '2px solid var(--hud-line)',
                    color: 'var(--hud-fg)',
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t('hero.resume')}
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* 滚动指示(游戏 HUD 式) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <ScrollPrompt label={t('hud.scroll')} />
          </motion.div>

          {/* 格言 tooltip */}
          {tooltipQuote && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-24 left-6 right-6 md:left-auto md:right-12 md:max-w-sm z-20 px-4 py-3 rounded-xl backdrop-blur-md text-sm font-['Poppins'] italic"
              style={{
                background: 'var(--surface-scrim)',
                border: '1px solid var(--card-glass-border)',
                color: 'var(--text-body)',
              }}
            >
              “{tooltipQuote}”
            </motion.div>
          )}
        </>
      )}
    </section>
  );
};

export default ChapterHero;
