// 新增：ProjectDetail.jsx - 项目详情页组件，用于展示单个项目的完整信息
// 移除了client和completed，role部分变为可选

//导入React Hooks，用于管理组件状态和副作用
import { useState, useEffect } from 'react'
import React from 'react'
//导入React Router Hooks，用于获取URL参数和导航
import { useParams, Link, useNavigate } from 'react-router-dom'
//导入shadcn/ui组件库的UI组件
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowUp, ZoomIn } from 'lucide-react'
//导入Markdown渲染组件
import ReactMarkdown from 'react-markdown'
//导入项目数据获取函数
import { getProjectById } from '../../data/projects'
import ImageGallery, { SingleImageDisplay, MultiImageGrid, SmartImageDisplay } from '../components/ImageGallery'
import Footer from '../components/Footer'
import FeedbackBot from '../components/FeedbackBot'

// 辅助函数：从项目的 colors 中提取主色
const getProjectHighlightColor = (project) => {
  // 如果项目有 textHighlightColor，直接使用
  if (project.colors?.textHighlightColor) {
    return project.colors.textHighlightColor;
  }
  // 如果有 heroGradient，尝试提取第一个颜色
  if (project.colors?.heroGradient) {
    const match = project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/);
    if (match) return match[0];
  }
  // 默认使用紫色
  return '#8B5CF6';
};

// 辅助函数：将 rgb 格式转换为十六进制
const rgbToHex = (rgb) => {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  return null;
};

// 辅助函数：从渐变色中提取深色（第一个颜色）
const getProjectDarkColor = (project) => {
  // 如果项目直接指定了 darkColor，优先使用
  if (project.colors?.darkColor) {
    return project.colors.darkColor;
  }
  if (project.colors?.heroGradient) {
    // 先尝试匹配十六进制颜色
    let matches = project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/g);
    if (matches && matches.length > 0) {
      return matches[0]; // 返回第一个颜色（深色端）
    }
    // 如果没有十六进制，尝试匹配 rgb 格式
    const rgbMatch = project.colors.heroGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
    if (rgbMatch) {
      const hex = rgbToHex(rgbMatch[0]);
      if (hex) return hex;
    }
  }
  if (project.colors?.subtitleGradient) {
    let matches = project.colors.subtitleGradient.match(/#[0-9a-fA-F]{6}/g);
    if (matches && matches.length > 0) {
      return matches[0];
    }
    const rgbMatch = project.colors.subtitleGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
    if (rgbMatch) {
      const hex = rgbToHex(rgbMatch[0]);
      if (hex) return hex;
    }
  }
  return '#0D0D0D'; // 默认深色
};

// 辅助函数：从渐变色中提取浅色（最后一个颜色）
const getProjectLightColor = (project) => {
  // 如果项目直接指定了 lightColor，优先使用
  if (project.colors?.lightColor) {
    return project.colors.lightColor;
  }
  if (project.colors?.heroGradient) {
    // 先尝试匹配十六进制颜色
    let matches = project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/g);
    if (matches && matches.length > 0) {
      return matches[matches.length - 1]; // 返回最后一个颜色（浅色端）
    }
    // 如果没有十六进制，尝试匹配 rgb 格式（取最后一个）
    const rgbMatches = project.colors.heroGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/g);
    if (rgbMatches && rgbMatches.length > 0) {
      const hex = rgbToHex(rgbMatches[rgbMatches.length - 1]);
      if (hex) return hex;
    }
  }
  if (project.colors?.subtitleGradient) {
    let matches = project.colors.subtitleGradient.match(/#[0-9a-fA-F]{6}/g);
    if (matches && matches.length > 0) {
      return matches[matches.length - 1];
    }
    const rgbMatches = project.colors.subtitleGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/g);
    if (rgbMatches && rgbMatches.length > 0) {
      const hex = rgbToHex(rgbMatches[rgbMatches.length - 1]);
      if (hex) return hex;
    }
  }
  return '#565869'; // 默认浅灰色
};

// 辅助函数：预处理文本，将 [[text]] 转换为 Markdown 加粗格式
const preprocessHighlightMarkers = (text) => {
  if (typeof text !== 'string') return text;
  // 将 [[text]] 转换为 **text** 格式，这样 ReactMarkdown 会将其作为加粗处理
  // 然后在 strong 组件中应用颜色
  return text.replace(/\[\[([^\]]+)\]\]/g, '**$1**');
};

// 辅助函数：将标题中的部分单词渲染为主题色
const renderTitleWithAccent = (title, themeColor, darkColor) => {
  if (!title) return null;
  // 按空格分割单词，保留空格
  const words = title.split(/(\s+)/);
  // 使用一个模式：让部分单词使用主题色，创造视觉层次
  // 大约30-40%的单词使用主题色
  return words.map((word, index) => {
    // 如果是空格，保持原色
    if (word.trim() === '') {
      return <span key={index} style={{ color: darkColor }}>{word}</span>;
    }
    // 使用一个模式：索引能被3整除，或者索引能被5整除且余数为2
    const shouldHighlight = (index % 3 === 0) || (index % 5 === 2);
    return (
      <span 
        key={index} 
        style={{ color: shouldHighlight ? themeColor : darkColor }}
      >
        {word}
      </span>
    );
  });
};

// 注意：数字自动高亮功能已移除，只保留 [[文字]] 和 **文字** 的高亮

//ProjectDetail组件，展示单个项目的详细信息
const ProjectDetail = () => {
  /*从URL参数中获取项目ID，用于查找对应的项目数据
   根据ID获取项目数据，如果找不到则返回undefined
   管理选中的图片状态，用于图片画廊功能
   管理当前激活的章节，用于左侧导航高亮
   管理返回顶部按钮的显示状态
  */
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(id)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [allImages, setAllImages] = useState([])
  const [activeSection, setActiveSection] = useState('overview')
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  // 获取项目的高亮颜色
  const highlightColor = project ? getProjectHighlightColor(project) : '#8B5CF6'
  // 获取项目的深色（用于日间版标题）
  const darkColor = project ? getProjectDarkColor(project) : '#0D0D0D'
  // 获取项目的主题色（用于日间版标签）
  const themeColor = project ? getProjectHighlightColor(project) : '#8B5CF6'
  // 检查是否使用日间版 hero
  const useLightHero = project?.colors?.heroStyle === 'light'

  // 创建导航数据（动态构建，根据实际内容）
  const navigationSections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    // 只有当role存在时才添加
    ...(project?.role ? [{ id: 'role', title: 'My Role', icon: '👤' }] : []),
    // 添加所有章节
    ...project?.sections?.map(section => ({
      id: section.id,
      title: section.title,
      icon: section.icon || '📌'
    })) || []
  ]

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
      
      const scrollPosition = window.scrollY + 150
      
      for (let section of navigationSections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navigationSections])

  // 滚动到指定部分
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // 处理图片点击
  const handleImageClick = (image, allImagesArray = []) => {
    setSelectedImage(image)
    setAllImages(allImagesArray)
    setCurrentImageIndex(allImagesArray.findIndex(img => img.src === image.src))
  }

  // 上一张图片
  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1
      setCurrentImageIndex(newIndex)
      setSelectedImage(allImages[newIndex])
    }
  }

  // 下一张图片
  const handleNextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      const newIndex = currentImageIndex + 1
      setCurrentImageIndex(newIndex)
      setSelectedImage(allImages[newIndex])
    }
  }

  // 关闭图片查看器
  const handleCloseImage = () => {
    setSelectedImage(null)
    setAllImages([])
    setCurrentImageIndex(0)
  }

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 返回主页并滚动到My Projects板块
  const handleBackToWork = () => {
    // 导航到主页并添加hash参数
    navigate('/#work')
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ========== 顶部导航栏 ========== */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-purple-100 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={handleBackToWork}
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Work</span>
            </button>
            
             {/* ========== 更新category为categories 项目标签分类========== */}
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              {project.categories?.[0]?.toUpperCase() || 'PROJECT'}
            </Badge>
          </div>
        </div>
      </nav>

      {/* ========== 右侧进度导航 ========== */}
      <aside className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-30 max-w-[160px]">
        <nav className="flex flex-col gap-4">
          {navigationSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-3 relative text-left"
            >
              {/* 连接线（除了最后一个）*/}
              {index < navigationSections.length - 1 && (
                <div className="absolute left-[4px] top-6 bottom-0 w-[1px] bg-gray-200 -z-10" />
              )}
              
              {/* 进度点 */}
              <div className="relative flex-shrink-0">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'scale-125'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  style={activeSection === section.id ? {background: project.colors?.heroGradient || 'var(--gradient-hero)'} : {}}
                />
                {activeSection === section.id && (
                  <div className="absolute inset-0 w-2 h-2 rounded-full animate-ping" style={{background: project.colors?.heroGradient || 'var(--gradient-hero)'}} />
                )}
              </div>
              
              {/* 标签文字 - 始终显示 */}
              <div
                className={`flex items-center gap-1.5 px-2 py-1 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'scale-105'
                    : 'hover:bg-white/50'
                }`}
              >
                <span className={`text-xs font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-gray-700'
                    : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {section.title}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* ========== 顶部标题区域 ========== */}
      {useLightHero ? (
        // 日间版 hero：浅灰色背景，深灰色标题（部分字符主题色），主题色标签
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: '#f7f7f8' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 
                className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in whitespace-nowrap"
                style={{ 
                  fontFamily: "'Poppins', 'Inter', sans-serif"
                }}
              >
                {renderTitleWithAccent(project.title, themeColor, darkColor)}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-delay-1" style={{ color: darkColor }}>
                {project.subtitle}
              </p>
            </div>

            {/* 项目标签区域 */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* DOMAIN */}
              <div className="group">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                  <span style={{ color: themeColor }}>●</span> DOMAIN
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.domain.map((item) => (
                    <Badge 
                      key={item} 
                      className="transition-all"
                      style={{ 
                        backgroundColor: `${themeColor}20`,
                        color: themeColor,
                        borderColor: `${themeColor}40`
                      }}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* FORM */}
              <div className="group">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                  <span style={{ color: themeColor }}>●</span> FORM
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.form.map((item) => (
                    <Badge 
                      key={item} 
                      className="transition-all"
                      style={{ 
                        backgroundColor: `${themeColor}20`,
                        color: themeColor,
                        borderColor: `${themeColor}40`
                      }}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* COLLABORATORS */}
              <div className="group">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: themeColor }}>
                  <span style={{ color: themeColor }}>●</span> COLLABORATORS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.collaborators.map((item) => (
                    <Badge 
                      key={item} 
                      className="transition-all"
                      style={{ 
                        backgroundColor: `${themeColor}20`,
                        color: themeColor,
                        borderColor: `${themeColor}40`
                      }}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // 原版 hero：渐变背景，白色文字
        <section className="pt-32 pb-16 px-6" style={{background: project.colors?.heroGradient || 'var(--gradient-hero)'}}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in whitespace-nowrap"
                style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
              >
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-delay-1 font-['Poppins']">
                {project.subtitle}
              </p>
            </div>

            {/* 项目标签区域 */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* DOMAIN */}
              <div className="group">
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-white">●</span> DOMAIN
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.domain.map((item) => (
                    <Badge 
                      key={item} 
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* FORM */}
              <div className="group">
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-white">●</span> FORM
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.form.map((item) => (
                    <Badge 
                      key={item} 
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* COLLABORATORS */}
              <div className="group">
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-white">●</span> COLLABORATORS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.collaborators.map((item) => (
                    <Badge 
                      key={item} 
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== 项目概述区域 ========== */}
      <section id="overview" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* 主图展示 */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="aspect-[16/10] bg-gradient-to-br from-purple-100 to-blue-100">
              {project.heroVideo ? (
                // 如果有视频，优先显示视频
                // 检查是否是 Vimeo 链接
                project.heroVideo.includes('vimeo.com') ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${project.heroVideo.split('/').pop().split('?')[0]}?autoplay=0&loop=0&muted=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                ) : 
                // 检查是否是 YouTube 链接
                project.heroVideo.includes('youtube.com') || project.heroVideo.includes('youtu.be') ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.heroVideo.includes('youtu.be') ? project.heroVideo.split('youtu.be/')[1].split('?')[0] : project.heroVideo.split('v=')[1].split('&')[0]}?autoplay=0&rel=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                ) : (
                  // 普通视频文件
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster={project.heroImage}
                  >
                    <source src={project.heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : project.heroImage ? (
                // 如果没有视频但有图片，显示图片
                <img 
                  src={project.heroImage} 
                  alt={project.title}
                  className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
                  onClick={() => handleImageClick({ src: project.heroImage, alt: project.title }, [{ src: project.heroImage, alt: project.title }])}
                />
              ) : (
                // 如果既没有视频也没有图片，显示占位符
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">No image or video available</p>
                </div>
              )}
            </div>
            
            {/* AI Community项目的重叠按钮 */}
            {project.id === 'ai-community-platform' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <a
                  href="https://ai-community-mvp-v2-7y9m.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50"
                >
                  Visit AI Community Platform
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            {/* Stumbldoor项目的Figma按钮 */}
            {project.id === 'stumbldoor' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <a
                  href="https://www.figma.com/proto/XWqBQZuoMeZCWbhwrfaWBP/Final-UI--Copy-?node-id=97-4335&t=4v7H3T97OyRDa3Ds-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50"
                >
                  View in Figma
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Section Header */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            {/* Section Tag */}
            <div 
              className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
              style={{ color: getProjectLightColor(project) }}
            >
              Project Overview
            </div>
            
            {/* Main Title */}
            <h2 
              className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"
              style={{ color: getProjectDarkColor(project) }}
            >
              {project.overview.mainTitle || 'Transform AI Learning Into Community Experience'}
            </h2>
            
            {/* Brief Content */}
            {project.overview.briefContent && (
              <div className="text-sm md:text-base lg:text-lg text-[#565869] leading-relaxed [&_strong]:!font-bold [&_strong]:!text-[var(--highlight-color)]" style={{ '--highlight-color': highlightColor }}>
                <ReactMarkdown 
                  components={{
                    p: ({children}) => {
                      return <p className="mb-0">{children}</p>;
                    },
                    strong: ({children}) => {
                      return (
                        <strong 
                          className="font-bold" 
                          style={{ 
                            color: highlightColor, 
                            fontWeight: 'bold'
                          }}
                        >
                          {children}
                        </strong>
                      );
                    },
                    highlight: ({children}) => <span className="font-bold" style={{ color: highlightColor }}>{children}</span>
                  }}
                  rehypePlugins={[]}
                  remarkPlugins={[]}
                >
                  {preprocessHighlightMarkers(project.overview.briefContent)}
                </ReactMarkdown>
              </div>
            )}
          </div>
          
          {/* Full Content (只在没有 briefContent 时显示) */}
          {!project.overview.briefContent && (
            <div className="prose prose-lg max-w-none mb-12 [&_strong]:!text-[var(--highlight-color)]">
              <div className="text-lg text-gray-700 leading-relaxed text-left mb-8" style={{ '--highlight-color': highlightColor }}>
                <ReactMarkdown 
                  components={{
                    p: ({children}) => {
                      return <p className="mb-4">{children}</p>;
                    },
                    strong: ({children}) => {
                      return (
                        <strong 
                          className="font-bold" 
                          style={{ 
                            color: highlightColor, 
                            fontWeight: 'bold'
                          }}
                        >
                          {children}
                        </strong>
                      );
                    },
                    highlight: ({children}) => <span className="font-bold" style={{ color: highlightColor }}>{children}</span>
                  }}
                  rehypePlugins={[]}
                  remarkPlugins={[]}
                >
                  {Array.isArray(project.overview.content) 
                    ? project.overview.content
                        .map((para, idx) => 
                          typeof para === 'string' ? preprocessHighlightMarkers(para) : String(para)
                        )
                        .join('\n\n')
                    : typeof project.overview.content === 'string' 
                      ? preprocessHighlightMarkers(project.overview.content)
                      : String(project.overview.content || '')}
                </ReactMarkdown>
              </div>
            </div>
          )}
            
            {(project.overview.challenge || project.overview.challenges) && (
              <div 
                id="challenge" 
                className="p-8 rounded-2xl border-l-4 relative overflow-hidden"
                style={{
                  background: project.colors?.subtitleGradient 
                    ? (() => {
                        // Extract colors from gradient and create light version
                        const gradient = project.colors.subtitleGradient;
                        // Try hex colors first
                        let colorMatches = gradient.match(/#[0-9a-fA-F]{6}/g) || [];
                        // If no hex, try RGB
                        if (colorMatches.length === 0) {
                          const rgbMatches = gradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/g) || [];
                          if (rgbMatches.length > 0) {
                            colorMatches = rgbMatches.map(rgb => {
                              const hex = rgbToHex(rgb);
                              return hex || null;
                            }).filter(Boolean);
                          }
                        }
                        if (colorMatches.length > 0) {
                          const colors = colorMatches.map(hex => {
                            const r = parseInt(hex.slice(1, 3), 16);
                            const g = parseInt(hex.slice(3, 5), 16);
                            const b = parseInt(hex.slice(5, 7), 16);
                            return `rgba(${r}, ${g}, ${b}, 0.1)`;
                          });
                          return `linear-gradient(to right, ${colors.join(', ')}, rgba(255, 255, 255, 0.5))`;
                        }
                        return 'linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))';
                      })()
                    : 'linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                  borderLeftColor: project.colors?.heroGradient 
                    ? (() => {
                        // Try hex first
                        let match = project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/);
                        if (match) return match[0];
                        // Try RGB
                        const rgbMatch = project.colors.heroGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
                        if (rgbMatch) {
                          const hex = rgbToHex(rgbMatch[0]);
                          if (hex) return hex;
                        }
                        return '#8b5cf6';
                      })()
                    : '#8b5cf6'
                }}
              >
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                >
                  The Challenge
                </h3>
                {project.overview.challenges ? (
                  <div className="space-y-4">
                    {project.overview.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div 
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                          style={{
                            background: project.colors?.heroGradient 
                              ? (() => {
                                  // Try hex first
                                  let match = project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/);
                                  if (match) return `${match[0]}20`;
                                  // Try RGB
                                  const rgbMatch = project.colors.heroGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
                                  if (rgbMatch) {
                                    const hex = rgbToHex(rgbMatch[0]);
                                    if (hex) return `${hex}20`;
                                  }
                                  return 'rgba(139, 92, 246, 0.2)';
                                })()
                              : 'rgba(139, 92, 246, 0.2)'
                          }}
                        >
                          <span 
                            className="font-semibold text-sm"
                            style={{
                              color: project.colors?.heroGradient 
                                ? (() => {
                                    // Try hex first
                                    let match = project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/);
                                    if (match) return match[0];
                                    // Try RGB
                                    const rgbMatch = project.colors.heroGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
                                    if (rgbMatch) {
                                      const hex = rgbToHex(rgbMatch[0]);
                                      if (hex) return hex;
                                    }
                                    return '#8b5cf6';
                                  })()
                                : '#8b5cf6'
                            }}
                          >
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.overview.challenge}
                  </p>
                )}
              </div>
            )}
        </div>
      </section>

      {/* ========== 角色部分（只在存在时渲染）========== */}
      {project.role && (
        <section id="role" className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 md:mb-12 lg:mb-16">
              {/* Section Tag */}
              <div 
                className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
                style={{ color: getProjectLightColor(project) }}
              >
                {project.role.title || 'My Role'}
              </div>
              
              {/* Main Title */}
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight"
                style={{ 
                  color: getProjectDarkColor(project),
                  fontFamily: "'Poppins', 'Inter', sans-serif"
                }}
              >
                {project.role.title?.toUpperCase() || 'MY ROLE'}
              </h2>
            </div>
            
            {/* 如果有responsibilities就显示，没有就只显示标题 */}
            {project.role.responsibilities && project.role.responsibilities.length > 0 && (
              <div className="grid gap-6">
                {project.role.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-transform">
                    <div 
                      className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg" 
                      style={{
                        backgroundColor: getProjectLightColor(project)
                      }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-2">{responsibility}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ========== 项目内容章节 ========== */}
      {project.sections.map((section, index) => (
        <section 
          key={section.id} 
          id={section.id}
          className={`py-12 md:py-20 lg:py-24 px-4 md:px-6 ${index % 2 === 0 ? 'bg-[#F7F7F8]' : 'bg-white'}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 md:mb-12 lg:mb-16">
              {/* Section Tag (小标题) - 如果有 sectionTag 就显示 sectionTag，否则如果有 mainTitle 就用 title 作为小标题 */}
              {(section.sectionTag || (section.mainTitle && section.title)) && (
                <div 
                  className="text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
                  style={{ color: getProjectLightColor(project) }}
                >
                  {section.sectionTag || section.title}
                </div>
              )}
              
              {/* Main Title (大标题) - 如果有 mainTitle 就显示 mainTitle，否则显示 title */}
              <h2 
                className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"
                style={{ 
                  color: getProjectDarkColor(project),
                  fontFamily: "'Poppins', 'Inter', sans-serif"
                }}
              >
                {section.mainTitle || section.title}
              </h2>
              
              {/* Brief Content (100-150字正文) */}
              {section.briefContent && (
                <div className="text-sm md:text-base lg:text-lg text-[#565869] leading-relaxed [&_strong]:!font-bold [&_strong]:!text-[var(--highlight-color)]" style={{ '--highlight-color': highlightColor }}>
                  <ReactMarkdown 
                    components={{
                      p: ({children}) => {
                        return <p className="mb-0">{children}</p>;
                      },
                      strong: ({children}) => {
                      return (
                        <strong 
                          className="font-bold" 
                          style={{ 
                            color: highlightColor, 
                            fontWeight: 'bold'
                          }}
                        >
                          {children}
                        </strong>
                      );
                    },
                      highlight: ({children}) => <span className="font-bold" style={{ color: highlightColor }}>{children}</span>
                    }}
                    rehypePlugins={[]}
                    remarkPlugins={[]}
                  >
                    {preprocessHighlightMarkers(section.briefContent)}
                  </ReactMarkdown>
                </div>
              )}
            </div>
            
            {/* 只在非交替模式下显示完整文字内容（保留原有功能） */}
            {section.imageDisplayMode !== 'alternating' && section.content && !section.briefContent && (
              <div className="prose prose-lg max-w-none mb-12 [&_strong]:!text-[var(--highlight-color)]" style={{ '--highlight-color': highlightColor }}>
                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, index) => (
                    <div key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
                      <ReactMarkdown 
                        components={{
                          p: ({children}) => {
                            return <p className="mb-4">{children}</p>;
                          },
                          strong: ({children}) => {
                      return (
                        <strong 
                          className="font-bold" 
                          style={{ 
                            color: highlightColor, 
                            fontWeight: 'bold'
                          }}
                        >
                          {children}
                        </strong>
                      );
                    },
                          highlight: ({children}) => <span className="font-bold" style={{ color: highlightColor }}>{children}</span>
                        }}
                        rehypePlugins={[]}
                        remarkPlugins={[]}
                      >
                        {typeof paragraph === 'string' ? preprocessHighlightMarkers(paragraph) : paragraph}
                      </ReactMarkdown>
                    </div>
                  ))
                ) : (
                  <div className="text-lg text-gray-700 leading-relaxed">
                    <ReactMarkdown 
                      components={{
                        p: ({children}) => {
                          return <p className="mb-4">{children}</p>;
                        },
                        strong: ({children}) => {
                      return (
                        <strong 
                          className="font-bold" 
                          style={{ 
                            color: highlightColor, 
                            fontWeight: 'bold'
                          }}
                        >
                          {children}
                        </strong>
                      );
                    },
                        highlight: ({children}) => <span className="font-bold" style={{ color: highlightColor }}>{children}</span>
                      }}
                      rehypePlugins={[]}
                      remarkPlugins={[]}
                    >
                      {typeof section.content === 'string' ? preprocessHighlightMarkers(section.content) : section.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            )}

            {/* 特性卡片 */}
            {section.features && section.features.length > 0 && (
              section.featureDisplayMode === 'side-by-side' ? (
                // 新的左右布局样式：一边是数字和文字，另一边是图片
                <div className="space-y-16 md:space-y-24 mb-12">
                  {section.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                    >
                      {/* 左侧/右侧：数字和文字描述 */}
                      <div className="flex-1 space-y-4">
                        <div 
                          className="text-5xl md:text-6xl font-bold mb-6"
                          style={{
                            color: getProjectLightColor(project)
                          }}
                        >
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <h3 
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{
                            color: getProjectDarkColor(project),
                            fontFamily: "'Poppins', 'Inter', sans-serif"
                          }}
                        >
                          {feature.name}
                        </h3>
                        {feature.detail && (
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {feature.detail}
                          </p>
                        )}
                        {feature.description && (
                          <p className="text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                      
                      {/* 右侧/左侧：图片或 GIF */}
                      {(feature.image || feature.gif) && (
                        <div className="flex-1 w-full flex items-center justify-center">
                          <div 
                            className="relative rounded-2xl overflow-hidden shadow-lg"
                          >
                            {feature.gif ? (
                              <img 
                                src={feature.gif} 
                                alt={feature.name}
                                className="w-full h-auto object-contain"
                                style={{ maxHeight: '50vh' }}
                              />
                            ) : (
                              <img 
                                src={feature.image} 
                                alt={feature.name}
                                className="w-full h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
                                style={{ maxHeight: '50vh' }}
                                onClick={() => handleImageClick(
                                  { src: feature.image, alt: feature.name },
                                  section.features.filter(f => f.image || f.gif).map(f => ({
                                    src: f.image || f.gif,
                                    alt: f.name
                                  }))
                                )}
                              />
                            )}
                          </div>
                          {feature.imageCaption && (
                            <p className="text-sm text-gray-500 mt-2 text-center">
                              {feature.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // 原有的三列网格布局
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {section.features.map((feature, idx) => (
                    <Card 
                      key={idx} 
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0"
                      style={{
                        background: project.colors?.heroGradient 
                          ? `linear-gradient(to bottom right, white, ${project.colors.heroGradient.includes('#') ? `${project.colors.heroGradient.match(/#[0-9a-fA-F]{6}/)?.[0] || '#8b5cf6'}15` : 'rgba(139, 92, 246, 0.15)'})`
                          : 'linear-gradient(to bottom right, white, rgba(139, 92, 246, 0.15))'
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <div 
                          className="text-4xl font-bold mb-4"
                          style={{
                            color: getProjectLightColor(project)
                          }}
                        >
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="mb-3">
                          <span 
                            className="inline-block text-xl font-bold"
                            style={{
                              color: getProjectLightColor(project)
                            }}
                          >
                            {feature.name}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature.detail}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )
            )}

            {/* 按钮 */}
            {section.buttons && section.buttons.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-4 justify-center">
                {section.buttons.map((button, buttonIndex) => (
                  <a
                    key={buttonIndex}
                    href={button.url}
                    target={button.type === 'download' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    download={button.type === 'download' ? (button.downloadName || true) : false}
                    className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-white hover:opacity-90"
                    style={{
                      background: project.colors?.heroGradient || 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
                    }}
                  >
                    {button.text}
                    {button.type === 'download' ? (
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ) : (
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            )}

            {/* 图片展示 - 支持多个图片组，每个组可以有不同的 display mode */}
            {section.imageGroups && section.imageGroups.length > 0 ? (
              // 如果定义了 imageGroups，渲染多个图片组
              <div className="space-y-12">
                {section.imageGroups.map((group, groupIndex) => {
                  const allImagesInGroup = group.images || [];
                  return (
                    <div key={groupIndex}>
                      {group.title && (
                        <h3 
                          className="text-xl font-semibold mb-4" 
                          style={{ 
                            color: getProjectDarkColor(project),
                            fontFamily: "'Poppins', 'Inter', sans-serif"
                          }}
                        >
                          {group.title}
                        </h3>
                      )}
                      {group.description && (
                        <p className="text-gray-600 mb-6">{group.description}</p>
                      )}
                      <SmartImageDisplay 
                        images={allImagesInGroup}
                        onImageClick={(image) => handleImageClick(image, allImagesInGroup)}
                        displayMode={group.displayMode || 'single'}
                        content={group.content}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              // 向后兼容：如果只有 images 和 imageDisplayMode，使用原有逻辑
              section.images && section.images.length > 0 && (
                <SmartImageDisplay 
                  images={section.images}
                  onImageClick={(image) => handleImageClick(image, section.images)}
                  displayMode={section.imageDisplayMode || 'single'}
                  content={section.content}
                />
              )
            )}
          </div>
        </section>
      ))}


      {/* ========== 返回顶部按钮 ========== */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 group bg-gray-500 hover:bg-gray-600"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* ========== 图片画廊 ========== */}
      {selectedImage && (
        <ImageGallery 
          image={selectedImage}
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={handleCloseImage}
          onPrevious={handlePreviousImage}
          onNext={handleNextImage}
        />
      )}

      {/* ========== Footer ========== */}
      <Footer />
      
      {/* ========== 反馈机器人 ========== */}
      <FeedbackBot />
    </div>
  )
}

export default ProjectDetail
