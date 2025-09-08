//导入React的useEffect Hook，用于处理副作用（如DOM操作、事件监听等）
import { useEffect } from 'react';
//导入导航栏组件，包含网站logo和导航链接
import Navbar from '../components/Navbar';
//导入Hero组件，主页的顶部横幅区域，包含个人介绍和CTA按钮
import Hero from '../components/Hero';
//导入Portfolio组件，展示项目作品集的部分
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function HomePage() {
  //useEffect Hook在组件挂载时执行，用于设置页面级别的样式和行为
  useEffect(() => {
    //启用平滑滚动效果，当点击锚点链接时页面会平滑滚动到目标位置
    document.documentElement.style.scrollBehavior = 'smooth';
    
    //添加页面加载动画类，实现页面淡入效果
    document.body.classList.add('fade-in');
    
    //清理函数，在组件卸载时恢复默认滚动行为
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []); //空依赖数组表示这个effect只在组件挂载时执行一次

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
    </div>
  );
}

export default HomePage;
