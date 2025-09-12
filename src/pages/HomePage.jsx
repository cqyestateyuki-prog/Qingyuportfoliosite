//导入React的useEffect Hook，用于处理副作用（如DOM操作、事件监听等）
import { useEffect, useState } from 'react';
//导入导航栏组件，包含网站logo和导航链接
import Navbar from '../components/Navbar';
//导入Hero组件，主页的顶部横幅区域，包含个人介绍和CTA按钮
import Hero from '../components/Hero';
//导入Portfolio组件，展示项目作品集的部分
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';


function HomePage() {
  // 管理返回顶部按钮的显示状态
  const [showBackToTop, setShowBackToTop] = useState(false);

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
        {/* Hero区域，个人介绍和主要CTA */}
        <Hero />
        {/* 作品集展示区域 */}
        <Portfolio />
        {/* 关于我部分，个人介绍和技能 */}
        <About />
        {/* 联系我部分，联系表单和信息 */}
        <Contact />
      </main>
      {/* 页脚，版权和链接信息 */}
      <Footer />

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
    </div>
  );
}

export default HomePage;
