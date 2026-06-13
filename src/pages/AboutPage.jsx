/**
 * AboutPage — 03 ABOUT:宇宙风重做版
 *
 * - 全部文案来自 src/data/aboutContent.js(Figma 同步的唯一数据源)
 * - cosmos token 化,日夜双主题可读;全局 Navbar(带主题/语言切换)
 * - 结构:hero(左文右卡叠)→ 元信息条 → What I Do → How I Work → Experience 时间线
 */

import { useState, useEffect } from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { PiPaintBrushBroadDuotone, PiTrendUpDuotone, PiLightningDuotone } from 'react-icons/pi';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CodeProfile from '../components/CodeProfile';
import Timeline from '../components/Timeline';
import MoonIcon from '../hud/MoonIcon';
import { useLanguage } from '../i18n';
import { aboutContent } from '../data/aboutContent';

const EASE = [0.16, 1, 0.3, 1];

const WHAT_ICONS = {
  design: PiPaintBrushBroadDuotone,
  market: PiTrendUpDuotone,
  iteration: PiLightningDuotone,
};

// How I Work 卡片的光晕(紫系,双主题通用)
const HOW_GLOWS = [
  'radial-gradient(circle, rgba(138, 129, 215, 0.35) 0%, rgba(138, 129, 215, 0.08) 50%, transparent 75%)',
  'radial-gradient(circle, rgba(99, 102, 241, 0.32) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 75%)',
  'radial-gradient(circle, rgba(196, 190, 240, 0.38) 0%, rgba(196, 190, 240, 0.08) 50%, transparent 75%)',
  'radial-gradient(circle, rgba(139, 92, 246, 0.32) 0%, rgba(139, 92, 246, 0.06) 50%, transparent 75%)',
  'radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, rgba(167, 139, 250, 0.08) 50%, transparent 75%)',
];

const HOW_OFFSETS = [
  { top: -8, rotate: -3 },
  { top: 12, rotate: 2 },
  { top: -4, rotate: -2 },
  { top: 16, rotate: 3 },
  { top: 4, rotate: -1 },
];

const AboutPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { language } = useLanguage();
  const c = aboutContent[language] || aboutContent.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen">
      {/* 全局导航(主题/语言切换自带) */}
      <Navbar />

      <main className="pt-32 pb-16">
        {/* ============ 1. Hero:左文右卡叠 ============ */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          {/* HUD 章节标签 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.4em] uppercase mb-10 font-['Poppins']"
            style={{ color: 'var(--section-tag)' }}
          >
            <MoonIcon /> {c.tag} ✦
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* 左:排版 */}
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <h1 className="font-normal mb-6 leading-tight tracking-tight" style={{ color: 'var(--text-hero)' }}>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="text-2xl md:text-3xl">{c.hero.intro}</span>
                    <span className="text-5xl md:text-7xl">{c.hero.role}</span>
                  </div>
                  <div className="text-5xl md:text-7xl">
                    <span className="italic font-serif" style={{ color: 'var(--text-muted)' }}>{c.hero.who}</span>{' '}
                    <span style={{ color: 'var(--text-accent)' }}>{c.hero.verbs}</span>
                  </div>
                </h1>
                <div
                  className="text-xl leading-relaxed mb-8 max-w-xl space-y-2 font-['Poppins']"
                  style={{ color: 'var(--text-body)' }}
                >
                  {c.hero.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <a
                  href="/files/Qingyu_Cao_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: '#8a81d7',
                    boxShadow: '0 0 25px rgba(138, 129, 215, 0.4)',
                  }}
                >
                  <span>{c.hero.resumeLabel}</span>
                  <Download size={18} />
                </a>
              </motion.div>
            </div>

            {/* 右:三卡叠放(照片×2 + CodeProfile) */}
            <div className="flex-1 w-full flex justify-center lg:justify-end relative min-h-[720px]">
              <div className="relative w-full max-w-md mx-auto lg:mr-0">
                {[
                  { src: '/files/profile picture/profile_picture.png', y: 0, rotate: -3, z: 'z-10', delay: 0 },
                  { src: '/files/profile picture/profile_picture2.jpg', y: 260, rotate: 2, z: 'z-20', delay: 0.2 },
                ].map((card) => (
                  <motion.div
                    key={card.src}
                    initial={{ opacity: 0, y: 20, rotate: card.rotate }}
                    animate={{ opacity: 1, y: card.y, rotate: card.rotate }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                    transition={{ duration: 0.8, delay: card.delay }}
                    className={`absolute top-0 left-0 w-full p-3 rounded-2xl backdrop-blur-md ${card.z}`}
                    style={{
                      background: 'var(--card-glass-bg)',
                      border: '1px solid var(--card-glass-border)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 0 24px var(--hud-glow)',
                    }}
                  >
                    <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                      <img src={card.src} alt="Qingyu Cao" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-overlay" />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -1 }}
                  animate={{ opacity: 1, y: 520, rotate: -1 }}
                  whileHover={{ rotate: 0, zIndex: 40 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute top-0 left-0 lg:left-4 w-full z-30"
                >
                  <CodeProfile />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 2. 元信息条 ROLE / LOCATION / FOCUS / STATUS ============ */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 py-7"
            style={{ borderTop: '1px solid var(--hud-line)', borderBottom: '1px solid var(--hud-line)' }}
          >
            {c.meta.map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-[11px] tracking-[0.25em] uppercase mb-1.5 font-['Poppins']"
                  style={{ color: 'var(--hud-fg-muted)' }}
                >
                  {label}
                </p>
                <p className="text-base md:text-lg font-medium" style={{ color: 'var(--text-hero)' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 3. What I Do ============ */}
        <section className="max-w-7xl mx-auto px-6 mb-28">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-14">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-normal text-5xl md:text-7xl leading-tight tracking-tight"
            >
              <span style={{ color: 'var(--text-accent)' }}>{c.what.titleAccent}</span>{' '}
              <span style={{ color: 'var(--text-hero)' }}>{c.what.titleRest}</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
              {c.what.items.map((item, i) => {
                const Icon = WHAT_ICONS[item.icon] || PiPaintBrushBroadDuotone;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                    className="group"
                  >
                    <div
                      className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      style={{
                        background: 'color-mix(in srgb, var(--hud-glow) 45%, transparent)',
                        color: 'var(--text-accent)',
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-medium mb-4" style={{ color: 'var(--text-hero)' }}>
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed font-['Poppins']" style={{ color: 'var(--text-body)' }}>
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ============ 4. How I Work:5 卡散落 + 虚线 ============ */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-normal mb-4 leading-tight tracking-tight flex flex-wrap items-baseline gap-3">
              <span className="text-5xl md:text-7xl" style={{ color: 'var(--text-accent)' }}>{c.how.titleAccent}</span>
              <span className="text-2xl md:text-3xl" style={{ color: 'var(--text-hero)' }}>{c.how.titleRest}</span>
            </h2>
            <p className="text-xl leading-relaxed mb-12 max-w-2xl font-['Poppins']" style={{ color: 'var(--text-body)' }}>
              {c.how.subtitle}
            </p>

            <div className="relative pt-4 pb-4">
              {/* 虚线波浪连接线 */}
              <svg
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 pointer-events-none z-0"
                viewBox="0 0 800 80"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M 0,40 Q 100,20 200,40 Q 300,60 400,40 Q 500,20 600,40 Q 700,60 800,40"
                  fill="none"
                  stroke="var(--text-accent)"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                />
              </svg>

              <div className="relative z-10 flex flex-wrap justify-center md:justify-between gap-6 md:gap-4">
                {c.how.cards.map((item, i) => {
                  const offset = HOW_OFFSETS[i % HOW_OFFSETS.length];
                  return (
                    <div
                      key={item.label}
                      className="w-44 md:w-48 flex-shrink-0"
                      style={{ transform: `translateY(${offset.top}px) rotate(${offset.rotate}deg)` }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: { type: 'spring', stiffness: 340, damping: 13, delay: i * 0.08 },
                        }}
                        viewport={{ once: true, amount: 0.15 }}
                        whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.2 } }}
                        className="w-full h-full relative p-3 rounded-2xl overflow-hidden backdrop-blur-md"
                        style={{
                          background: 'var(--card-glass-bg)',
                          border: '1px solid var(--card-glass-border)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 0 20px var(--hud-glow)',
                        }}
                      >
                        {/* 光晕 */}
                        <div className="absolute inset-0 pointer-events-none rounded-2xl flex items-center justify-center z-20" aria-hidden>
                          <div
                            className="w-[140%] h-[140%] rounded-full -translate-y-1/4"
                            style={{ background: HOW_GLOWS[i % HOW_GLOWS.length] }}
                          />
                        </div>
                        <div className="relative z-10 aspect-[3/4] rounded-xl overflow-hidden p-5 flex flex-col" style={{ background: 'var(--surface-scrim)' }}>
                          <div className="flex-1 flex flex-col">
                            <h3 className="font-medium mb-3 text-base md:text-lg leading-tight" style={{ color: 'var(--text-hero)' }}>
                              {item.label}
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed flex-1 font-['Poppins']" style={{ color: 'var(--text-body)' }}>
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 引言 */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mt-16 max-w-2xl mx-auto text-center px-4"
            >
              <span
                className="absolute top-1/2 -translate-y-1/2 -left-2 md:left-0 text-[5rem] md:text-[6rem] font-serif leading-none select-none opacity-25"
                style={{ color: 'var(--text-accent)' }}
                aria-hidden
              >
                “
              </span>
              <p
                className="relative z-10 text-xl md:text-2xl font-medium italic leading-relaxed pl-14 pr-14 md:pl-16 md:pr-16"
                style={{ color: 'var(--text-accent)' }}
              >
                {c.how.quote}
              </p>
              <span
                className="absolute top-1/2 -translate-y-1/2 -right-2 md:right-0 text-[5rem] md:text-[6rem] font-serif leading-none select-none opacity-25"
                style={{ color: 'var(--text-accent)' }}
                aria-hidden
              >
                ”
              </span>
            </motion.blockquote>
          </motion.div>
        </section>

        {/* ============ 5. Experience 时间线 ============ */}
        <section className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-normal text-5xl md:text-7xl leading-tight tracking-tight mb-6"
          >
            <span style={{ color: 'var(--text-accent)' }}>{c.experience.titleAccent}</span>{' '}
            <span style={{ color: 'var(--text-hero)' }}>{c.experience.titleRest}</span>
          </motion.h2>
          <Timeline items={c.experience.items} />
        </section>
      </main>

      {/* 返回顶部 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 group backdrop-blur-sm"
          style={{
            color: 'var(--hud-fg)',
            border: '1px solid var(--hud-line-strong)',
            background: 'var(--card-glass-bg)',
            boxShadow: '0 0 16px var(--hud-glow)',
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default AboutPage;
