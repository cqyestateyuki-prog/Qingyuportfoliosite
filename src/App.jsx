// 新增：导入React Router的核心组件，用于实现单页应用的路由功能
import { Routes, Route } from 'react-router-dom';
// 新增：导入主页组件，包含所有主页内容（Hero、Portfolio、About、Contact等）
import HomePage from './pages/HomePage';
// 新增：导入项目详情页组件，用于展示单个项目的详细信息
import ProjectDetail from './pages/ProjectDetail';
// 新增：导入About页面组件
import AboutPage from './pages/AboutPage';
// 新增：导入全局样式文件，包含所有自定义CSS变量和样式
import './App.css';
// 新增：导入分析工具
import { initGA } from './components/Analytics';
import { useEffect } from 'react';

// 新增：App组件是整个应用的根组件，负责路由配置
function App() {
  // 新增：初始化 Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="App">
      {/* 新增：Routes组件定义所有路由规则 */}
      <Routes>
        {/* 新增：根路径"/"对应主页，element属性指定要渲染的组件 */}
        <Route path="/" element={<HomePage />} />
        {/* 新增：动态路由"/project/:id"，:id是参数，可以匹配任何项目ID */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* 新增：About页面路由 */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
