# 项目颜色主题配置指南

## 🎨 功能概述

本项目支持为每个项目设置独特的颜色主题，包括：
- **头图背景渐变**：项目详情页顶部的背景颜色
- **子标题渐变**：各章节标题的文字渐变效果
- **下划线渐变**：子标题下方的装饰线条颜色

## 🔧 如何配置项目颜色

### 在项目数据中添加颜色配置

在 `data/projects.js` 中，为每个项目添加 `colors` 配置：

```javascript
{
  id: 'your-project',
  title: 'Your Project',
  // ... 其他配置
  
  // ========== 项目颜色配置 ==========
  colors: {
    heroGradient: 'var(--gradient-hero)', // 头图背景渐变
    subtitleGradient: 'var(--gradient-secondary)', // 子标题渐变
    underlineGradient: 'var(--gradient-secondary)' // 下划线渐变
  }
}
```

## 🎯 预设主题样式

### 1. 紫色主题（默认）
```javascript
colors: {
  heroGradient: 'var(--gradient-hero)',
  subtitleGradient: 'var(--gradient-secondary)', 
  underlineGradient: 'var(--gradient-secondary)'
}
```
**效果**：经典的紫色渐变主题，适合大多数项目

### 2. 游戏主题（橙红-青色）
```javascript
colors: {
  heroGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
  subtitleGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
  underlineGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
}
```
**效果**：动感的橙红到青色渐变，适合游戏和创意项目

### 3. 绿色主题
```javascript
colors: {
  heroGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  subtitleGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  underlineGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
}
```
**效果**：清新的绿色渐变，适合环保、健康类项目

### 4. 粉色主题
```javascript
colors: {
  heroGradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
  subtitleGradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
  underlineGradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)'
}
```
**效果**：优雅的粉色渐变，适合时尚、艺术类项目

### 5. 蓝色主题
```javascript
colors: {
  heroGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
  subtitleGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
  underlineGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
}
```
**效果**：专业的蓝色渐变，适合技术、商务类项目

## 🎨 自定义颜色

### 使用 CSS 渐变
```javascript
colors: {
  heroGradient: 'linear-gradient(45deg, #FF0000, #00FF00, #0000FF)', // 彩虹渐变
  subtitleGradient: 'linear-gradient(90deg, #FFD700, #FFA500)', // 金色渐变
  underlineGradient: 'linear-gradient(180deg, #FF6B6B, #4ECDC4)' // 垂直渐变
}
```

### 使用 CSS 变量
```javascript
colors: {
  heroGradient: 'var(--custom-gradient)',
  subtitleGradient: 'var(--custom-gradient)',
  underlineGradient: 'var(--custom-gradient)'
}
```

### 使用 Tailwind 颜色类
```javascript
// 注意：这里需要使用实际的 CSS 值，不是 Tailwind 类名
colors: {
  heroGradient: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)', // 对应 gray-100 到 gray-200
  subtitleGradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', // 对应 red-500 到 red-600
  underlineGradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' // 对应 purple-500 到 purple-600
}
```

## 📋 配置示例

### 完整项目配置示例
```javascript
{
  id: 'my-awesome-project',
  title: 'My Awesome Project',
  subtitle: 'A Creative Solution',
  category: 'UIUX',
  tags: ['Design', 'Development', 'Innovation'],
  
  // 基本信息
  thumbnail: '/media/projects/my-project/thumbnail.jpg',
  brief: 'An innovative project that solves real-world problems.',
  
  // 详情页配置
  heroImage: '/media/projects/my-project/hero.jpg',
  heroVideo: null,
  
  // 项目标签
  domain: ['Technology', 'Innovation'],
  form: ['UI Design', 'Frontend Development'],
  collaborators: ['Solo Project'],
  
  // 项目颜色配置
  colors: {
    heroGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    subtitleGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    underlineGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  
  // 项目概述
  overview: {
    content: 'This project demonstrates innovative design thinking...',
    challenge: 'How might we create a better user experience?'
  },
  
  // 角色信息
  role: {
    title: 'Lead Designer',
    responsibilities: [
      'User Research and Analysis',
      'UI/UX Design',
      'Prototype Development'
    ]
  },
  
  // 项目章节
  sections: [
    {
      id: 'research',
      title: 'Research',
      content: 'Our research process involved...',
      images: []
    }
  ]
}
```

## 🔄 如何更新现有项目

1. **找到项目配置**：在 `data/projects.js` 中找到您要修改的项目
2. **添加颜色配置**：在 `collaborators` 字段后添加 `colors` 配置
3. **保存文件**：保存 `projects.js` 文件
4. **测试效果**：运行 `npm run dev` 查看效果

## ⚠️ 注意事项

1. **颜色格式**：必须使用有效的 CSS 渐变语法
2. **一致性**：建议三个颜色使用相同的渐变，保持视觉一致性
3. **可读性**：确保文字在背景上有足够的对比度
4. **性能**：避免过于复杂的渐变，可能影响渲染性能

## 🚀 快速开始

1. 复制一个预设主题的配置
2. 修改颜色值
3. 保存文件
4. 查看效果

现在您可以为每个项目设置独特的颜色主题了！
