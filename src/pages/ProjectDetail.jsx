// 新增：ProjectDetail.jsx - 项目详情页组件，用于展示单个项目的完整信息
// 移除了client和completed，role部分变为可选

//导入React Hooks，用于管理组件状态和副作用
import { useState, useEffect } from 'react'
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

  // 创建导航数据（动态构建，根据实际内容）
  const navigationSections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'challenge', title: 'Challenge', icon: '🎯' },
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
      <section className="pt-32 pb-16 px-6" style={{background: project.colors?.heroGradient || 'var(--gradient-hero)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-delay-1">
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

      {/* ========== 项目概述区域 ========== */}
      <section id="overview" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{background: project.colors?.subtitleGradient || 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            PROJECT OVERVIEW
          </h2>

          {/* 主图展示 */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="aspect-[16/10] bg-gradient-to-br from-purple-100 to-blue-100">
              {project.heroVideo ? (
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
              ) : (
                <>
                  <img 
                    src={project.heroImage} 
                    alt={project.title}
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    onClick={() => handleImageClick({ src: project.heroImage, alt: project.title }, [{ src: project.heroImage, alt: project.title }])}
                  />
                </>
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
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-lg text-gray-700 leading-relaxed text-left mb-8">
              <ReactMarkdown 
                components={{
                  p: ({children}) => <p className="mb-4">{children}</p>,
                  strong: ({children}) => <strong className="font-semibold text-gray-800">{children}</strong>
                }}
              >
                {project.overview.content}
              </ReactMarkdown>
            </div>
            
            {(project.overview.challenge || project.overview.challenges) && (
              <div id="challenge" className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                {project.overview.challenges ? (
                  <div className="space-y-4">
                    {project.overview.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
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
        </div>
      </section>

      {/* ========== 角色部分（只在存在时渲染）========== */}
      {project.role && (
        <section id="role" className="py-8 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{background: project.colors?.subtitleGradient || 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              {project.role.title?.toUpperCase() || 'MY ROLE'}
            </h2>
            <div className="h-1 mb-12 w-96" style={{background: project.colors?.underlineGradient || 'var(--gradient-secondary)'}}></div>
            
            {/* 如果有responsibilities就显示，没有就只显示标题 */}
            {project.role.responsibilities && project.role.responsibilities.length > 0 && (
              <div className="grid gap-6">
                {project.role.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-transform">
                    <div className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg" style={{backgroundColor: 'var(--custom-purple)'}}>
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
          className={`py-20 px-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{background: project.colors?.subtitleGradient || 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              {section.title.toUpperCase()}
            </h2>
            <div className="h-1 mb-12 w-96" style={{background: project.colors?.underlineGradient || 'var(--gradient-secondary)'}}></div>
            
            {/* 只在非交替模式下显示文字内容 */}
            {section.imageDisplayMode !== 'alternating' && (
              <div className="prose prose-lg max-w-none mb-12">
                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, index) => (
                    <div key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
                      <ReactMarkdown 
                        components={{
                          p: ({children}) => <p className="mb-4">{children}</p>,
                          strong: ({children}) => <strong className="font-semibold text-gray-800">{children}</strong>
                        }}
                      >
                        {paragraph}
                      </ReactMarkdown>
                    </div>
                  ))
                ) : (
                  <div className="text-lg text-gray-700 leading-relaxed">
                    <ReactMarkdown 
                      components={{
                        p: ({children}) => <p className="mb-4">{children}</p>,
                        strong: ({children}) => <strong className="font-semibold text-gray-800">{children}</strong>
                      }}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            )}

            {/* 特性卡片 */}
            {section.features && section.features.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {section.features.map((feature, idx) => (
                  <Card 
                    key={idx} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-purple-50"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full mb-4 group-hover:scale-110 transition-transform" style={{backgroundColor: 'var(--custom-purple)'}}>
                        <span className="text-xl font-bold">{idx + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">
                        {feature.description}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                    className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                      button.type === 'github' 
                        ? 'bg-gray-800 text-white hover:bg-gray-900' 
                        : 'text-white hover:opacity-90'
                    }`}
                    style={button.type !== 'github' ? {
                      background: project.colors?.heroGradient || 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
                    } : {}}
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

            {/* 图片展示 */}
            {section.images && section.images.length > 0 && (
              <SmartImageDisplay 
                images={section.images}
                onImageClick={(image) => handleImageClick(image, section.images)}
                displayMode={section.imageDisplayMode || 'single'}
                content={section.content}
              />
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
    </div>
  )
}

export default ProjectDetail
