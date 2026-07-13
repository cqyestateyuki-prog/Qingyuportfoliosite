// 新增：ProjectDetail.jsx - 项目详情页组件，用于展示单个项目的完整信息
// 移除了client和completed，role部分变为可选

//导入React Hooks，用于管理组件状态和副作用
import { useState, useEffect } from 'react'
import React from 'react'
//导入React Router Hooks，用于获取URL参数和导航
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MoonIcon from '../hud/MoonIcon'
//导入shadcn/ui组件库的UI组件
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowUp, ArrowUpRight, ZoomIn } from 'lucide-react'
//导入Markdown渲染组件
import ReactMarkdown from 'react-markdown'
//导入项目数据获取函数
import { getProjectById, getNextProject } from '../../data/projects'
import ImageGallery, { SingleImageDisplay, MultiImageGrid, SmartImageDisplay } from '../components/ImageGallery'
import NextProject from '../components/NextProject'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DecryptedText from '../components/DecryptedText'
// 导入国际化
import { useLanguage } from '../i18n'
import { getLocalizedText, getLocalizedArray, localizeProject } from '../utils/localization'
import { preprocessHighlightMarkers } from '../utils/highlight'

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

// 辅助函数：判断 lightColor 是否为渐变，返回对应的 style 对象
const getLightColorStyle = (project) => {
  const lc = getProjectLightColor(project);
  if (lc && lc.includes('gradient')) {
    return {
      background: lc,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };
  }
  return { color: lc };
};

// [[高亮]] 语法的预处理与 ImageGallery 共用同一份实现(见 utils/highlight)

// 宣言大字:把 [[高亮]] 渲染成高亮色 span(关键词上品牌色)
const renderManifestoLine = (line, color) =>
  String(line).split(/(\[\[.+?\]\])/g).map((part, i) => {
    const m = part.match(/^\[\[(.+?)\]\]$/);
    return m
      ? <span key={i} style={{ color, fontWeight: 600 }}>{m[1]}</span>
      : <React.Fragment key={i}>{part}</React.Fragment>;
  });

//ProjectDetail组件，展示单个项目的详细信息
const ProjectDetail = () => {
  /*从URL参数中获取项目ID，用于查找对应的项目数据
   根据ID获取项目数据，如果找不到则返回undefined
   管理选中的图片状态，用于图片画廊功能
   管理当前激活的章节，用于左侧导航高亮
   管理返回顶部按钮的显示状态
  */
  const { id } = useParams()
  const { t, language } = useLanguage()
  const rawProject = getProjectById(id)
  // 本地化项目数据
  const project = rawProject ? localizeProject(rawProject, language) : null
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [allImages, setAllImages] = useState([])
  const [activeSection, setActiveSection] = useState('overview')
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  // 获取项目的高亮颜色（使用原始数据）
  // 高亮色:夜版统一紫(--detail-highlight),日版回退到项目自己的高亮色
  const highlightColor = rawProject
    ? `var(--detail-highlight, ${getProjectHighlightColor(rawProject)})`
    : 'var(--text-accent)'
  // 六爻母题等装饰用的「项目本色」(不走主题 var,日夜都保持项目调色,如 HexaEdge 鎏金)
  const projectAccent = rawProject ? getProjectHighlightColor(rawProject) : '#8B5CF6'
  // 获取项目的深色（用于日间版标题）
  const darkColor = rawProject ? getProjectDarkColor(rawProject) : '#0D0D0D'

  // ROLE / DURATION / TEAM / STACK 元信息(真实项目数据:优先 projects.js 的 meta 字段,缺省自动推断)
  const metaItems = project ? [
    { label: t('project.metaRole'), value: rawProject?.meta?.role || project.role?.title || project.domain?.[0] },
    { label: t('project.metaDuration'), value: rawProject?.meta?.duration || project.year },
    {
      label: t('project.metaTeam'),
      // 列出每位协作者及角色(取代"N 人团队");每个人名整体不换行,逐人折行如名单
      value: project.collaborators?.length ? (
        <span className="flex flex-col gap-0.5">
          {project.collaborators.map((c, i) => (
            <span key={i} className="whitespace-nowrap">{c}</span>
          ))}
        </span>
      ) : (rawProject?.meta?.team || (language === 'zh' ? '个人项目' : 'Solo project')),
    },
    {
      label: t('project.metaStack'),
      value:
        rawProject?.meta?.stack ||
        project.techTags?.slice(0, 3).map((tag) => tag.replace(/^#/, '')).join(' · '),
    },
  ].filter((m) => m.value) : []

  // TL;DR 速览:取项目 brief(简短事实型一句话,与下方 Overview 长简介区分)
  const tldr = project ? (getLocalizedText(project.brief, language) || '') : ''

  // 获取项目的主题色（用于日间版标签）
  const themeColor = rawProject ? getProjectHighlightColor(rawProject) : '#8B5CF6'

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

  // Why I'm building this:POV 段落 + 六爻线条母题。挂在 Overview(产品大图之下)。
  const WhyIBuild = () => {
    if (!project.overview?.whyIBuild) return null
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 pt-8 max-w-4xl"
        style={{ borderTop: '1px solid var(--hud-line)' }}
      >
        <p
          className="text-xs md:text-sm lg:text-base font-medium uppercase tracking-[0.3em] mb-4 flex items-center gap-2 font-['Poppins']"
          style={{ color: 'var(--hud-fg-muted)' }}
        >
          <span style={{ color: 'var(--section-tag)' }}>✦</span> Why I&apos;m building this
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <p
            className="text-lg md:text-xl leading-relaxed tracking-[0.01em] font-['Poppins'] flex-1 max-w-3xl"
            style={{ color: 'var(--text-body)' }}
          >
            {renderManifestoLine(project.overview.whyIBuild, highlightColor)}
          </p>
          {project.overview.whyIBuildHexagram && (
            <div className="shrink-0 flex flex-col items-center gap-3 mx-auto md:mx-0" aria-hidden="true">
              <div className="flex flex-col gap-2.5" style={{ width: 168 }}>
                {[...project.overview.whyIBuildHexagram].reverse().map((yao, p) => (
                  <div key={p} className="flex items-center justify-between" style={{ height: 12 }}>
                    {yao === 1 ? (
                      <motion.span
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ delay: (5 - p) * 0.13, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        style={{ width: '100%', height: '100%', background: (project.overview.whyIBuildHexagramColor || projectAccent), borderRadius: 3, transformOrigin: 'center' }}
                      />
                    ) : (
                      [0, 1].map((s) => (
                        <motion.span
                          key={s}
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ delay: (5 - p) * 0.13, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          style={{ width: '44%', height: '100%', background: (project.overview.whyIBuildHexagramColor || projectAccent), borderRadius: 3, transformOrigin: 'center' }}
                        />
                      ))
                    )}
                  </div>
                ))}
              </div>
              {project.overview.whyIBuildHexagramLabel && (
                <p className="text-[12px] tracking-[0.4em] font-['Poppins']" style={{ color: projectAccent }}>
                  {project.overview.whyIBuildHexagramLabel}
                </p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  // The Challenge 卡片:玻璃底 + 左侧品牌色边。overview 和任意 section 都能挂。
  const ChallengeCard = ({ challenge, challenges, id }) => {
    if (!challenge && !(challenges?.length > 0)) return null
    return (
      <div
        id={id}
        className="p-8 rounded-2xl relative overflow-hidden backdrop-blur-md"
        style={{
          background: 'var(--card-glass-bg)',
          border: '1px solid var(--card-glass-border)',
          borderLeft: `3px solid ${highlightColor}`,
        }}
      >
        <h3
          className="text-xl font-semibold mb-4"
          style={{ fontFamily: "'Poppins', 'Inter', sans-serif", color: 'var(--text-hero)' }}
        >
          {t('project.challenge')}
        </h3>
        {challenges?.length > 0 ? (
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                  style={{ background: `var(--detail-badge-bg, ${getProjectHighlightColor(rawProject)}20)` }}
                >
                  <span
                    className="font-semibold text-sm"
                    style={{ color: `var(--detail-badge, ${getProjectHighlightColor(rawProject)})` }}
                  >
                    {index + 1}
                  </span>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-body)' }}>{item}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-body)' }}>{challenge}</p>
        )}
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="text-center rounded-2xl px-10 py-12 backdrop-blur-md"
          style={{ background: 'var(--surface-scrim)', border: '1px solid var(--card-glass-border)' }}
        >
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-hero)' }}>Project Not Found</h1>
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
    <div className={`project-detail project-detail--${id} min-h-screen`}>
      {/* ========== 顶部导航栏（与首页一致）========== */}
      <Navbar />

      {/* ========== 右侧进度导航 ========== */}
      {/* translate="no":滚动会重渲染这块 UI。若浏览器翻译改写了它的文本节点,
          React 的节点引用就会失效并抛 insertBefore 错误,整棵树被卸载。正文不受影响,仍可翻译。 */}
      <aside translate="no" className="notranslate hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-30 max-w-[160px]">
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
                  style={activeSection === section.id ? {background: rawProject?.colors?.heroGradient || 'var(--gradient-hero)'} : {}}
                />
                <div
                  className={`absolute inset-0 w-2 h-2 rounded-full ${activeSection === section.id ? 'animate-ping' : 'opacity-0'}`}
                  style={{background: rawProject?.colors?.heroGradient || 'var(--gradient-hero)'}}
                />
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

      {/* ========== 顶部标题区域:Case Study 头部 ==========
          左对齐、容器与下方所有章节统一(max-w-5xl + px-4 md:px-6),
          边距像素级对齐;日/夜全靠 token,不再分浅/深两套 hero */}
      <section className="pt-28 pb-12 md:pb-16 px-4 md:px-6">
        <div className="relative max-w-5xl mx-auto">
          {/* HUD 角标:贴合内容框上沿两角,与下方章节左右边距对齐(移动端隐藏) */}
          <span className="hidden md:block absolute -top-4 -left-3 w-5 h-5 border-t border-l pointer-events-none" style={{ borderColor: 'var(--hud-line-strong)' }} aria-hidden="true" />
          <span className="hidden md:block absolute -top-4 -right-3 w-5 h-5 border-t border-r pointer-events-none" style={{ borderColor: 'var(--hud-line-strong)' }} aria-hidden="true" />

          {/* 顶栏读数:Case Study ✦ ——————— 年份 */}
          <div className="flex items-center gap-4 mb-7">
            <p
              className="text-xs md:text-sm lg:text-base font-medium tracking-[0.3em] uppercase whitespace-nowrap font-['Poppins']"
              style={{ color: 'var(--section-tag)' }}
            >
              <MoonIcon /> Case Study ✦
            </p>
            <span className="h-px flex-1" style={{ background: 'var(--hud-line)' }} aria-hidden="true" />
            {project.year && (
              <span
                className="text-xs md:text-sm lg:text-base tracking-[0.3em] tabular-nums font-['Poppins']"
                style={{ color: 'var(--hud-fg-muted)' }}
              >
                {project.year}
              </span>
            )}
          </div>

          {/* 标题(柔光)+ 副标题,左对齐贴合下方章节节奏 */}
          <h1
            className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight mb-5 animate-fade-in font-['Poppins']"
            style={{ color: 'var(--text-hero)', textShadow: '0 0 40px var(--hud-glow)' }}
          >
            <DecryptedText text={project.title} />
          </h1>
          {project.subtitle && (
            <p
              className="text-lg md:text-xl font-light leading-relaxed max-w-2xl animate-fade-in-delay-1 font-['Poppins']"
              style={{ color: 'var(--text-body)' }}
            >
              {project.subtitle}
            </p>
          )}

          {/* TL;DR 一段速览(替代原 DOMAIN/FORM/COLLABORATORS 标签组) */}
          {tldr && (
            <div className="mt-9 max-w-3xl">
              <p
                className="text-xs md:text-sm lg:text-base font-medium uppercase tracking-[0.3em] mb-3 flex items-center gap-2 font-['Poppins']"
                style={{ color: 'var(--hud-fg-muted)' }}
              >
                <span style={{ color: 'var(--section-tag)' }}>✦</span> TL;DR
              </p>
              {/* 导语级字号：TL;DR 是电梯陈述,不该被排成正文 */}
              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed tracking-[0.01em] font-['Poppins']"
                style={{ color: 'var(--text-hero)' }}
              >
                {renderManifestoLine(tldr, highlightColor)}
              </p>
            </div>
          )}

          {/* 元信息条:ROLE / DURATION / TEAM / STACK(真实项目数据) */}
          {metaItems.length > 0 && (
            <div
              className="mt-12 pt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5"
              style={{ borderTop: '1px solid var(--hud-line)' }}
            >
              {metaItems.map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-xs md:text-sm lg:text-base font-medium tracking-[0.25em] uppercase mb-1.5 font-['Poppins']"
                    style={{ color: 'var(--hud-fg-muted)' }}
                  >
                    {label}
                  </p>
                  <p className="text-lg md:text-xl font-normal tracking-[0.01em]" style={{ color: 'var(--text-hero)' }}>{value}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========== 项目概述区域 ========== */}
      <section id="overview" className="py-10 md:py-14 lg:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* 主图展示 */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-blue-100">
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
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-[#2d2356] font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50"
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
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-[#2d2356] font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50"
                >
                  View in Figma
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            {/* Kogna:首图跳转线上产品 */}
            {project.id === 'kogna' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <a
                  href="https://kogna.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-[#0a1628] font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50"
                >
                  Visit Kogna
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            {/* HexaEdge:首图跳转线上产品 */}
            {project.id === 'hexaedge' && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <a
                  href="https://hexaedge.vercel.app/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-[#14233A] font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50"
                >
                  Visit HexaEdge
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

            {/* Why I'm building this：动机段落，挂在产品大图之下（hero 只负责"是什么"） */}
            <WhyIBuild />

            {/* Section Header：项目若没写 overview 正文，整块不渲染（TL;DR 已在 hero 说清是什么） */}
            {(project.overview.mainTitle || project.overview.briefContent) && (
            <div className="mb-8 md:mb-12 lg:mb-16">
            {/* Section Tag */}
            <div
              className="detail-accent-text text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
            >
              {t('project.projectOverview')}
            </div>

            {/* Main Title */}
            {project.overview.mainTitle && (
              <h2
                className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"
                style={{ color: `var(--detail-heading, ${getProjectDarkColor(rawProject)})` }}
              >
                {project.overview.mainTitle}
              </h2>
            )}

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
          )}

          {/* Full Content (只在没有 briefContent 时显示) */}
          {!project.overview.briefContent && project.overview.content && (
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
            
            {/* overview 的 Challenge 卡片(项目没写就不渲染) */}
            <ChallengeCard
              id="challenge"
              challenge={project.overview.challenge}
              challenges={project.overview.challenges}
            />

            {/* Overview 独立主图（data 中 overview.mainImage: {src, alt, caption}） */}
            {project.overview.mainImage && (
              <figure className="mt-10">
                <img
                  src={project.overview.mainImage.src}
                  alt={project.overview.mainImage.alt || ''}
                  className="w-full rounded-2xl"
                  style={{ border: '1px solid var(--card-glass-border)' }}
                />
                {project.overview.mainImage.caption && (
                  <figcaption className="mt-3 text-sm text-gray-500 text-center leading-relaxed">
                    {project.overview.mainImage.caption}
                  </figcaption>
                )}
              </figure>
            )}
        </div>
      </section>

      {/* ========== 角色部分（只在存在时渲染）========== */}
      {project.role && (
        <section id="role" className="py-10 md:py-14 lg:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 md:mb-12 lg:mb-16">
              {/* Section Tag */}
              <div
                className="detail-accent-text text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
              >
                {project.role.sectionTag || 'My Role'}
              </div>

              {/* Main Title */}
              <h2
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight"
                style={{
                  color: `var(--detail-heading, ${getProjectDarkColor(rawProject)})`,
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
                        backgroundColor: `var(--detail-badge, ${getProjectHighlightColor(rawProject)})`
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
          className={`py-10 md:py-14 lg:py-16 px-4 md:px-6 ${index % 2 === 0 ? 'detail-section-alt' : ''}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 md:mb-12 lg:mb-16">
              {/* Section Tag (小标题) - 如果有 sectionTag 就显示 sectionTag，否则如果有 mainTitle 就用 title 作为小标题 */}
              {(section.sectionTag || (section.mainTitle && section.title)) && (
                <div 
                  className="detail-accent-text text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[2px] mb-3 md:mb-4"
                >
                  {section.sectionTag || section.title}
                </div>
              )}
              
              {/* Main Title (大标题) - 如果有 mainTitle 就显示 mainTitle，否则显示 title */}
              <h2 
                className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight"
                style={{ 
                  color: `var(--detail-heading, ${getProjectDarkColor(rawProject)})`,
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
                        return <p className="mb-4 last:mb-0">{children}</p>;
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

              {/* 章节自己的 The Challenge 卡片(如 The Problem) */}
              {(section.challenge || section.challenges?.length > 0) && (
                <div className="mt-8">
                  <ChallengeCard challenge={section.challenge} challenges={section.challenges} />
                </div>
              )}

              {/* 章节外链(如 Design System 的 UI Kit) */}
              {section.link?.url && (
                <a
                  href={section.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    color: 'var(--text-hero)',
                    border: '1px solid var(--card-glass-border)',
                    background: 'var(--surface-scrim)',
                  }}
                >
                  {section.link.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
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
                          style={{ color: highlightColor }}
                        >
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <h3 
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{
                            color: `var(--detail-heading, ${getProjectDarkColor(rawProject)})`,
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
                // 三列玻璃卡(HUD 序号 + 左对齐)
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {section.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5"
                      style={{
                        background: 'var(--card-glass-bg)',
                        border: '1px solid var(--card-glass-border)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1), 0 0 18px var(--hud-glow)',
                      }}
                    >
                      <p
                        className="text-xs md:text-sm lg:text-base font-medium tracking-[0.3em] uppercase mb-3 font-['Poppins']"
                        style={{ color: 'var(--section-tag)' }}
                      >
                        ✦ {(idx + 1).toString().padStart(2, '0')}
                      </p>
                      <h4
                        className="text-lg font-semibold mb-2.5 leading-snug"
                        style={{ color: highlightColor, fontFamily: "'Poppins', 'Inter', sans-serif" }}
                      >
                        {feature.name}
                      </h4>
                      <span className="block h-px w-10 mb-3" style={{ background: 'var(--hud-line)' }} aria-hidden="true" />
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                        {feature.detail}
                      </p>
                    </div>
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
                      background: rawProject?.colors?.heroGradient || 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
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
                            color: `var(--detail-heading, ${getProjectDarkColor(rawProject)})`,
                            fontFamily: "'Poppins', 'Inter', sans-serif"
                          }}
                        >
                          {group.title}
                        </h3>
                      )}
                      {group.description && (
                        <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
                      )}
                      <SmartImageDisplay 
                        images={allImagesInGroup}
                        onImageClick={(image) => handleImageClick(image, allImagesInGroup)}
                        displayMode={group.displayMode || 'single'}
                        content={group.content}
                        highlightColor={highlightColor}
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
                  highlightColor={highlightColor}
                />
              )
            )}
          </div>
        </section>
      ))}


      {/* ========== 返回顶部按钮 ==========
          常驻 DOM,只用 CSS 显隐。之前这里是条件渲染,滚过 400px 时插入节点;
          一旦浏览器翻译改写过页面文本,这次插入就会抛 insertBefore 错误并卸载整棵树。 */}
      <button
        onClick={scrollToTop}
        translate="no"
        className={`notranslate fixed bottom-8 right-8 p-4 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 group bg-gray-500 hover:bg-gray-600 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        aria-label="返回顶部"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

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

      {/* ========== Next Project ========== */}
      <NextProject nextProject={rawProject ? localizeProject(getNextProject(id), language) : null} />

      {/* ========== Footer ========== */}
      <Footer />
      
      {/* ========== 反馈机器人 ========== */}
    </div>
  )
}

export default ProjectDetail
