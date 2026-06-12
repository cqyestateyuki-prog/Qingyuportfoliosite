//导入React的useEffect Hook，用于处理副作用（如DOM操作、事件监听等）
import { useEffect, useState } from 'react';
//导入导航栏组件，包含网站logo和导航链接
import Navbar from '../components/Navbar';
//导入Hero组件：游戏开场式叙事 + 星月粒子(替代旧 HeroSpotlight)
import ChapterHero from '../components/chapters/ChapterHero';
//导入Portfolio组件，展示项目作品集的部分
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';
import { useCosmos } from '../cosmos/CosmosProvider';


function HomePage() {
  // 管理返回顶部按钮的显示状态
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { set } = useCosmos();

  // 全页滚动进度 → 星云 uScroll(滚动时天空在移动),ref 总线零重渲染
  // 粒子编排:Hero 区(顶部)归 ChapterHero 管;中段星尘漫游;近 Contact 聚合成星
  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      set('scroll', p);
      if (p > 0.82) {
        set('shape', 'star');
        set('disperse', 0);
      } else if (p > 0.15) {
        set('shape', 'scatter');
        set('disperse', 0.8);
      } else if (window.scrollY < 10) {
        // 回到顶部:星月对角重新定格(叙事期间该值会被 ChapterHero 覆盖)
        set('shape', 'moon');
        set('disperse', 0.12);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [set]);

  //useEffect Hook在组件挂载时执行，用于设置页面级别的样式和行为
  useEffect(() => {
    //启用平滑滚动效果，当点击锚点链接时页面会平滑滚动到目标位置
    document.documentElement.style.scrollBehavior = 'smooth';
    
    //添加页面加载动画类，实现页面淡入效果
    document.body.classList.add('fade-in');
    
    // 处理hash导航
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#work') {
        // 直接跳转到My Projects板块，无动画
        const workSection = document.getElementById('work');
        if (workSection) {
          const offset = 100; // 考虑导航栏高度
          const elementPosition = workSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          // 直接跳转，无动画效果
          window.scrollTo(0, offsetPosition);
        }
      }
    };

    // 初始检查hash
    handleHashNavigation();

    // 监听hash变化
    window.addEventListener('hashchange', handleHashNavigation);
    
    //清理函数，在组件卸载时恢复默认滚动行为
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []); //空依赖数组表示这个effect只在组件挂载时执行一次

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

  return (
    <div className="App">
      {/* 导航栏，固定在页面顶部 */}
      <Navbar />
      {/* 主要内容区域，包含所有页面部分 */}
      <main>
        {/* Hero区域：开场叙事 + 星月粒子 */}
        <ChapterHero />
        {/* 作品集展示区域 */}
        <Portfolio />
        {/* 联系我部分，联系表单和信息 */}
        <Contact />
      </main>
      {/* 页脚，版权和链接信息 */}
      <Footer />

      {/* 返回顶部按钮 */}
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
          aria-label="返回顶部"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
}

export default HomePage;
