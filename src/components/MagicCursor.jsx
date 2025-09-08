import { useState, useEffect } from 'react';

const MagicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // 添加拖尾效果 - 增加粒子数量让金粉效果更细腻
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        // 只保留最近的20个点，让拖尾更长更细腻
        return newTrail.slice(-20);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // 只在Hero区域添加事件监听
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', updateMousePosition);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      heroSection.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('mousemove', updateMousePosition);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>

      {/* 拖尾效果 - 白色粉粒子轨迹 */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40 transition-all duration-500 ease-out magic-white-trail"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.8, // 渐变透明度
            scale: (index + 1) / trail.length * 0.6, // 渐变大小
          }}
        >
          {/* 白色粉粒子 - 更小的尺寸 */}
          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-white/80 to-pink-200/60 animate-pulse white-particle"></div>
          
          {/* 白色粉光晕 */}
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-white/40 to-pink-100/40 opacity-70 animate-ping"></div>
        </div>
      ))}

    </>
  );
};

export default MagicCursor;
