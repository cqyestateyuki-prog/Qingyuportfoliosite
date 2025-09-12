
import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import MagicCursor from './MagicCursor';

// Hero组件是主页的顶部横幅区域，包含个人介绍和主要行动按钮
const Hero = () => {
  // 使用useState Hook管理动画可见性状态，用于控制淡入动画
  const [isVisible, setIsVisible] = useState(false);

  //useEffect Hook在组件挂载后立即触发动画
  useEffect(() => {
    setIsVisible(true); // 设置为可见，触发CSS动画, 空依赖数组，只在组件挂载时执行一次
  }, []); 

       // 定义滚动到作品集区域的函数，实现平滑滚动导航
  const scrollToWork = () => {
       // 查找ID为'work'的DOM元素（Portfolio组件）
    const workSection = document.querySelector('#work');
    if (workSection) {
       // 使用scrollIntoView API实现平滑滚动到目标元素
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 定义下载简历的函数
  const downloadResume = () => {
    // 创建下载链接
    const link = document.createElement('a');
    link.href = '/files/Qingyu_Cao_Resume.pdf'; // 简历文件路径
    link.download = 'Qingyu_Cao_Resume.pdf'; // 下载文件名
    link.target = '_blank'; // 在新标签页打开
    document.body.appendChild(link);
    link.click(); // 触发下载
    document.body.removeChild(link); // 清理DOM
  };

  return (
    // Hero区域的主容器，使用flexbox居中对齐，相对定位用于装饰元素
    <section className="hero-section flex items-center justify-center relative">
      {/* 魔法棒光标效果 */}
      <MagicCursor />
      {/* 内容容器，设置最大宽度、居中对齐和响应式内边距 */}
      <div className="container mx-auto px-6 text-center relative z-10">
         {/* 更改margin 调整内容区域与顶部距离*/}
        {/* 动画容器，根据isVisible状态控制淡入和上移动画 */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{marginTop: '80px'}}>
          {/* 主标题，使用响应式字体大小和白色文字 */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Qingyu Cao
          </h1>
          
          {/* 副标题，描述个人职业身份 */}
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Creative Developer & Designer
          </h2>
          
          {/* 个人介绍描述文字，使用半透明白色和响应式字体 */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-snug">
            Specializing in games, web and UI/UX design. 
            I merge creative expertise with strategic thinking to create 
            innovative solutions that captivate and engage.
          </p>
          
          {/* 行动按钮区域，使用flexbox布局，响应式排列 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* 主要CTA按钮，点击后滚动到作品集区域 */}
            <Button 
              onClick={scrollToWork}
              size="lg"
              style={{ color: "var(--custom-purple)" }}
              className="bg-white hover:bg-white/90 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            
            {/* 次要CTA按钮，轮廓样式，用于下载简历 */}
            <Button 
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
              style={{ 
                '--hover-text-color': 'var(--custom-purple)',
                color: 'white'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--custom-purple)'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
        
        {/* 滚动指示器，引导用户向下滚动查看更多内容 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          {/* 可点击的向下箭头按钮，点击后滚动到作品集区域 */}
          <button 
            onClick={scrollToWork}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      
      {/* 装饰性背景元素，增加视觉层次和动态效果 */}
      {/* 左上角装饰圆圈，半透明白色，模糊效果，脉冲动画 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      {/* 右下角装饰圆圈，更大尺寸，延迟脉冲动画 */}
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      {/* 右侧中间装饰圆圈，中等尺寸，延迟脉冲动画 */}
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;

