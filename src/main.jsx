// 导入React的严格模式，用于检测潜在问题
import { StrictMode } from 'react'
// 导入React 18的新API，用于创建根节点并渲染应用
import { createRoot } from 'react-dom/client'
// 导入BrowserRouter，提供基于浏览器历史记录的路由功能
import { BrowserRouter } from 'react-router-dom'
// 导入国际化语言上下文
import { LanguageProvider } from './i18n'
// 导入全局CSS样式文件
import './index.css'
import App from './App.jsx'

// 创建React应用的入口点，将App组件渲染到DOM中
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* LanguageProvider 提供国际化上下文 */}
    <LanguageProvider>
      {/* BrowserRouter提供路由上下文，使所有子组件都能使用路由功能 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
