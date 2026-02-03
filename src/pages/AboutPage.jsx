import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { PiPaintBrushBroadDuotone, PiTrendUpDuotone, PiLightningDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CodeProfile from '../components/CodeProfile';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* 1. Hero Section: Split Layout */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Typography */}
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-normal text-gray-900 mb-6 leading-tight tracking-tight">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="text-2xl md:text-3xl text-gray-900">I am a</span>
                    <span className="text-5xl md:text-7xl text-gray-900">Designer</span>
                  </div>
                  <div className="text-5xl md:text-7xl">
                    <span className="italic font-serif text-gray-400">who</span> <span style={{ color: 'var(--custom-purple)' }}>builds, tests, and ships.</span>
                  </div>
                </h1>
                <div className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl space-y-2">
                  <p>I design intuitive UX and solve complex problems.</p>
                  <p>I bridge the gap between design and engineering.</p>
                  <p>I focus on launching real products in fast-moving environments.</p>
                </div>
                
                <a 
                  href="/files/Qingyu_Cao_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:brightness-95"
                  style={{ backgroundColor: 'var(--custom-purple)' }}
                >
                  <span>Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
              </motion.div>
            </div>

            {/* Right: Visuals (Stack of 3 Cards) */}
            <div className="flex-1 w-full flex justify-center lg:justify-end relative min-h-[720px] lg:min-h-[720px]">
              <div className="relative w-full max-w-md mx-auto lg:mr-0">
                
                {/* Card 1: Photo (Top) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: -3 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 left-0 lg:left-0 w-full bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-10"
                >
                   <div className="aspect-[16/10] bg-gray-200 rounded-xl overflow-hidden relative">
                      <img 
                        src="/files/profile picture/profile_picture.png" 
                        alt="Profile 1" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-overlay"></div>
                   </div>
                </motion.div>

                {/* Card 2: Photo (Middle) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: 2 }}
                  animate={{ opacity: 1, y: 260, rotate: 2 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-0 right-0 lg:right-0 w-full bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-20"
                >
                   <div className="aspect-[16/10] bg-gray-200 rounded-xl overflow-hidden relative">
                      <img 
                        src="/files/profile picture/profile_picture2.jpg" 
                        alt="Profile 2" 
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-indigo-500/10 mix-blend-multiply"></div>
                   </div>
                </motion.div>

                {/* Card 3: Code Profile (Bottom) */}
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

        {/* 2. What I Do: Redesigned for Clarity & Impact */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Section Title */}
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-normal text-5xl md:text-7xl leading-tight tracking-tight"
            >
              <span style={{ color: 'var(--custom-purple)' }}>What</span> <span className="text-gray-900">I Do</span>
            </motion.h2>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
              
              {/* Column 1: Design */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 text-[var(--custom-purple)] group-hover:scale-110 group-hover:bg-[var(--custom-purple)] group-hover:text-white transition-all duration-300">
                  <PiPaintBrushBroadDuotone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Product Design</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I craft intuitive interfaces and engaging user journeys. From initial sketches to high-fidelity prototypes in Figma, I focus on clean aesthetics and usability.
                </p>
              </motion.div>

              {/* Column 2: Market Insights */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 text-[var(--custom-purple)] group-hover:scale-110 group-hover:bg-[var(--custom-purple)] group-hover:text-white transition-all duration-300">
                  <PiTrendUpDuotone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Market Strategy</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I connect design with business growth. Through market analysis and data-driven insights, I create strategies that position products effectively and maximize user engagement.
                </p>
              </motion.div>

              {/* Column 3: Fast Iteration */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 text-[var(--custom-purple)] group-hover:scale-110 group-hover:bg-[var(--custom-purple)] group-hover:text-white transition-all duration-300">
                  <PiLightningDuotone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Fast Iteration</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I move fast. By combining design intuition with modern developer tools, I experiment quickly and launch polished products in less time.
                </p>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* 3. How I Work: 横着散落 — 一行内左右分布 + 轻微上下错落 */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-normal mb-4 leading-tight tracking-tight flex flex-wrap items-baseline gap-3">
              <span className="text-5xl md:text-7xl" style={{ color: 'var(--custom-purple)' }}>How</span>
              <span className="text-2xl md:text-3xl text-gray-900">I Work</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
              I combine strong analytical capabilities with human judgment:
            </p>
            <div className="relative pt-4 pb-4">
              {/* 虚线波浪连接线：绝对定位在卡片行背后 */}
              <svg
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 pointer-events-none z-0"
                viewBox="0 0 800 80"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M 0,40 Q 100,20 200,40 Q 300,60 400,40 Q 500,20 600,40 Q 700,60 800,40"
                  fill="none"
                  stroke="var(--custom-purple)"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                  strokeOpacity="1"
                />
              </svg>
              <div className="relative z-10 flex flex-wrap justify-center md:justify-between gap-6 md:gap-4">
              {[
                { label: 'Contextual understanding', text: 'I process complex, ambiguous information quickly.', top: -8, rotate: -3 },
                { label: 'Judgment over optimization', text: "I know what's worth doing, not just what's possible.", top: 12, rotate: 2 },
                { label: 'User intuition', text: 'I understand what people need beyond what they say.', top: -4, rotate: -2 },
                { label: 'Taste', text: 'I recognize quality and can distinguish "technically correct" from "actually good."', top: 16, rotate: 3 },
                { label: 'Adaptive execution', text: 'I adjust direction mid-work based on what I learn.', top: 4, rotate: -1 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-44 md:w-48 flex-shrink-0"
                  style={{ transform: `translateY(${item.top}px) rotate(${item.rotate}deg)` }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ 
                      scale: 1.05, 
                      zIndex: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="w-full h-full bg-white p-3 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <div className="aspect-[3/4] rounded-xl overflow-hidden relative bg-gray-50/80 p-5 flex flex-col">
                      <div className="relative z-10 flex-1 flex flex-col">
                        <h3 className="font-medium text-gray-900 mb-3 text-base md:text-lg leading-tight">{item.label}</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">{item.text}</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-overlay pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
              ))}
              </div>
            </div>
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mt-16 max-w-2xl mx-auto text-center px-4"
            >
              <span className="absolute top-1/2 -translate-y-1/2 -left-2 md:left-0 text-[5rem] md:text-[6rem] font-serif leading-none select-none opacity-25" style={{ color: 'var(--custom-purple)' }} aria-hidden>{"\u201C"}</span>
              <p className="relative z-10 text-xl md:text-2xl font-medium italic leading-relaxed pl-14 pr-14 md:pl-16 md:pr-16" style={{ color: 'var(--custom-purple)' }}>
                I don't just solve problems — I figure out which problems are worth solving.
              </p>
              <span className="absolute top-1/2 -translate-y-1/2 -right-2 md:right-0 text-[5rem] md:text-[6rem] font-serif leading-none select-none opacity-25" style={{ color: 'var(--custom-purple)' }} aria-hidden>{"\u201D"}</span>
            </motion.blockquote>
          </motion.div>
        </section>

      </main>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gray-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
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
