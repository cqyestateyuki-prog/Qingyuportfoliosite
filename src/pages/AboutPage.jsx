import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUp, Code, Palette, Gamepad2, Search, ShoppingCart, Smartphone, Zap, Figma } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // 语录数组
  const quotes = [
    "In an era of anxiety and uncertainty, I choose to respond to this world with creativity and gentleness.",
    "The world is not short of executors, nor of dreamers — it is short of those who can lead with both action and vision."
  ];

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
    // 触发动画
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // 语录切换定时器
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // 每10秒切换一次

    return () => clearInterval(interval);
  }, [quotes.length]);

  // 处理滚轮事件
  const handleWheel = (e) => {
    if (window.scrollY < 100) {
      e.preventDefault();
      // 直接滚动一小段距离
      window.scrollBy(0, 100);
    }
  };

  // 监听滚动，控制各个模块显示
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
      
      if (scrollY > 400) {
        setShowSkills(true);
      } else {
        setShowSkills(false);
      }
      
      if (scrollY > 800) {
        setShowStats(true);
      } else {
        setShowStats(false);
      }
      
      if (scrollY > 1200) {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // 监听滚动，控制返回顶部按钮的显示
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部函数
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-commerce Ops',
      description: 'Taobao, TikTok Shop, Shopify - managing 50,000+ customers',
      color: 'var(--main-blue)'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Social Media Strategy',
      description: 'Instagram, TikTok, WeChat - building engaging communities',
      color: 'var(--main-blue)'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Creative Tech',
      description: 'HTML/CSS/JS, UI/UX, Game Design - bringing ideas to life',
      color: 'var(--main-blue)'
    },
    {
      icon: <Figma className="w-8 h-8" />,
      title: 'Design Tools',
      description: 'Figma, Adobe Creative Suite - professional design workflows',
      color: 'var(--main-blue)'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI & Future Tools',
      description: 'Claude, Cursor, GPT-based workflows - next-gen creativity',
      color: 'var(--main-blue)'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-purple-100 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="text-2xl font-bold gradient-text">
              About Me
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="pt-32">
        {/* 头部区域 - 极简设计 + 光幕流动效果 */}
        <section className="pt-16 pb-12 px-6 relative overflow-hidden" style={{background: 'var(--gradient-hero)'}}>
          {/* 光幕流动效果 */}
          <div className="absolute inset-0">
            {/* 流动光点 */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/40 rounded-full light-points"></div>
            <div className="absolute top-20 right-1/3 w-1 h-1 bg-white/30 rounded-full light-points" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-white/35 rounded-full light-points" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-40 right-1/4 w-1 h-1 bg-white/25 rounded-full light-points" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-48 left-1/2 w-2 h-2 bg-white/30 rounded-full light-points" style={{animationDelay: '2s'}}></div>
            
            {/* 流动光幕 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent light-flow"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent light-flow-reverse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* 头像 - 添加进入动画 */}
            <div className={`relative inline-block mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="/media/personphoto.png" 
                  alt="Qingyu Cao"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 装饰性光环 */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
            </div>

            {/* 愿景语录 - 添加进入动画和切换效果 */}
            <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative h-8 flex items-center justify-center">
                <blockquote 
                  key={currentQuoteIndex}
                  className="absolute text-sm md:text-base text-white/90 italic leading-relaxed font-light whitespace-nowrap overflow-hidden animate-fade-in"
                >
                  "{quotes[currentQuoteIndex]}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 个人介绍区域 - 优雅布局 */}
        <section 
          id="about-content"
          className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 左侧：个人介绍 */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                    About Me
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Hi, I'm <strong className="text-gray-700">Qingyu Cao</strong> — a creative designer and developer.
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a background in UI/UX, game design, e-commerce operations, and social media strategy, I bridge the worlds of imagination and implementation. I've built ACG(Anime, comics & games) IP stores, designed TikTok livestream shopping visuals, designed marketing content for hospitality brands, and developed interactive game and web experiences.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  From operating a <strong className="text-gray-700">vertical niche ecommerce store with 50,000+ customers</strong> to managing <strong className="text-gray-700">TikTok Shop product listings, livestream events</strong> and <strong className="text-gray-700">hotel social campaigns</strong>, I've learned how to turn <strong className="text-gray-700">creative storytelling into real business results.</strong>
                </p>
              </div>
              
              {/* 右侧：愿景卡片 */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl border border-purple-100 shadow-lg">
                <div className="space-y-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    But beyond commerce or content, I see myself as someone building <strong className="text-gray-700">systems where people can bring their dreams to life</strong> — and I believe <strong className="text-gray-700">AI and creative technology</strong> are the most powerful tools we have to make that happen.
                  </p>
                  
                  <blockquote className="text-xl font-medium text-gray-600 italic border-l-4 border-purple-400 pl-6 bg-white/50 p-4 rounded-r-2xl">
                    "I want to dedicate my life to building platforms and tools that empower others to realize their deepest wishes."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技能区域 */}
        <section 
          id="skills-section"
          className={`py-24 px-6 bg-white transition-all duration-800 ease-out ${
            showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                Skills & Expertise
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 统计数据区域 */}
        <section 
          id="stats-section"
          className={`py-24 px-6 bg-gradient-to-b from-gray-50 to-white transition-all duration-800 ease-out ${
            showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                By the Numbers
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '50,000+', label: 'E-commerce Customers' },
                { number: '3+', label: 'Years Experience' },
                { number: '15+', label: 'Projects Completed' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-4"
                    style={{
                      background: 'var(--gradient-secondary)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系区域 */}
        <section 
          id="contact-section"
          className={`py-24 px-6 bg-white transition-all duration-800 ease-out ${
            showContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                Let's Build Something Amazing Together
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to turn your creative vision into reality? I'm always excited to work on projects that push the boundaries of what's possible.
            </p>
            
            <Link 
              to="/#contact"
              className="inline-block px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
              style={{
                background: 'var(--gradient-secondary)',
                border: 'none'
              }}
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 group bg-gray-500 hover:bg-gray-600"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
