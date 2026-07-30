// 导入React的严格模式，用于检测潜在问题
import { StrictMode } from 'react'
// 导入React 18的新API，用于创建根节点并渲染应用
import { createRoot } from 'react-dom/client'
// 导入BrowserRouter，提供基于浏览器历史记录的路由功能
import { BrowserRouter } from 'react-router-dom'
// 主题系统：夜 = 深夜紫宇宙（默认），日 = 梦幻晨曦
import { ThemeProvider } from 'next-themes'
// 导入国际化语言上下文
import { LanguageProvider } from './i18n'
// 导入全局CSS样式文件
import './index.css'
import App from './App.jsx'

// 新版本部署后,旧标签页懒加载的 chunk 哈希已失效,服务器回退返回 index.html(text/html),
// Vite 会派发 vite:preloadError。整页刷新一次拿新构建;30 秒窗口防连环刷新。
window.addEventListener('vite:preloadError', (event) => {
  const lastReload = Number(sessionStorage.getItem('chunk-reload-at') || 0)
  if (Date.now() - lastReload < 30000) return
  sessionStorage.setItem('chunk-reload-at', String(Date.now()))
  event.preventDefault()
  window.location.reload()
})

// 创建React应用的入口点，将App组件渲染到DOM中
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 夜版是主人格，首次访问默认深夜紫宇宙 */}
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={['light', 'dark']}>
      {/* LanguageProvider 提供国际化上下文 */}
      <LanguageProvider>
        {/* BrowserRouter提供路由上下文，使所有子组件都能使用路由功能 */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
