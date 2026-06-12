// React Router 核心组件,实现单页应用路由
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
// 页面组件
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import AboutPage from './pages/AboutPage';
// 全局样式(含 cosmos 日/夜主题令牌)
import './App.css';
// 分析工具
import { initGA } from './components/Analytics';
// 宇宙世界:WebGL 画布跨路由持久化
import { CosmosProvider } from './cosmos/CosmosProvider';
// 游戏 HUD 层(角框/章节导航/滚动进度)
import HudLayer from './hud/HudLayer';

// ogl 只进 lazy chunk,首屏先画 CSS 降级背景
const CosmosCanvas = lazy(() => import('./cosmos/CosmosCanvas'));

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <CosmosProvider>
      <div className="App">
        {/* 持久 WebGL 宇宙背景(挂在 Routes 外,路由切换不重建 GL 上下文) */}
        <Suspense fallback={<div className="cosmos-fallback" aria-hidden="true" />}>
          <CosmosCanvas />
        </Suspense>

        {/* 页面内容浮在宇宙之上 */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        {/* 游戏 HUD(z-40,Navbar 之下) */}
        <HudLayer />
      </div>
    </CosmosProvider>
  );
}

export default App;
