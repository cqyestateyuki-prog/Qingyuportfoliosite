# 如何添加项目详情 - 完整指南

本指南将详细说明如何为作品集网站添加新的项目详情页面。

## 📋 目录

1. [准备工作](#准备工作)
2. [媒体文件组织](#媒体文件组织)
3. [项目数据配置](#项目数据配置)
4. [项目详情页面结构](#项目详情页面结构)
5. [颜色主题配置](#颜色主题配置)
6. [图片展示模式](#图片展示模式)
7. [内容格式说明](#内容格式说明)
8. [测试和验证](#测试和验证)
9. [常见问题](#常见问题)

## 🚀 准备工作

### 1. 确定项目信息
在开始之前，请准备好以下信息：
- 项目名称和副标题
- 项目分类（UIUX、Programming、Research、3D、Graphic Design）
- 项目简介和详细描述
- 项目挑战和目标
- 您的角色和职责
- 项目成果和特色功能
- 技术栈和工具

### 2. 准备媒体资源
- 项目主图（Hero Image）
- 各章节的图片和视频
- 项目缩略图
- 项目演示视频（可选）

## 📁 媒体文件组织

### 文件结构
为每个项目创建以下文件夹结构：

```
public/media/projects/your-project-id/
├── hero/
│   ├── hero-image.jpg          # 项目主图
│   └── hero-video.mp4          # 项目视频（可选）
├── sections/
│   ├── research/               # 研究章节
│   │   ├── research-1.jpg
│   │   ├── research-2.jpg
│   │   └── research-3.jpg
│   ├── design/                 # 设计章节
│   │   ├── design-1.jpg
│   │   ├── design-2.jpg
│   │   └── design-3.jpg
│   ├── development/            # 开发章节
│   │   ├── dev-1.jpg
│   │   └── dev-2.jpg
│   ├── features/               # 功能展示
│   │   ├── feature-1.jpg
│   │   └── feature-2.jpg
│   └── final/                  # 最终成果
│       ├── final-1.jpg
│       └── final-2.jpg
└── thumbnails/
    └── thumbnail.jpg           # 项目缩略图
```

### 图片规格建议
- **Hero Image**: 1920x1080px 或 16:9 比例
- **Section Images**: 1200x800px 或 3:2 比例
- **Thumbnail**: 400x300px 或 4:3 比例
- **格式**: 推荐使用 WebP 格式，备选 JPG

## 📝 项目数据配置

### 1. 打开项目数据文件
编辑 `data/projects.js` 文件，在 `projects` 数组中添加新项目。

### 2. 基本项目结构
```javascript
{
  // ========== 基本信息 ==========
  id: 'your-project-id',                    // 唯一标识符
  title: 'Your Project Name',               // 项目名称
  subtitle: 'Project Description',          // 项目副标题
  category: 'UIUX',                         // 项目分类
  tags: ['Tag1', 'Tag2', 'Tag3'],          // 项目标签
  
  // ========== 主页展示 ==========
  thumbnail: '/media/projects/your-project-id/thumbnails/thumbnail.jpg',
  brief: 'Brief project description for homepage.',
  
  // ========== 详情页 Hero ==========
  heroImage: '/media/projects/your-project-id/hero/hero-image.jpg',
  heroVideo: null,                          // 可选：视频路径
  
  // ========== 项目标签 ==========
  domain: ['Domain1', 'Domain2'],           // 领域标签
  form: ['Form1', 'Form2'],                 // 形式标签
  collaborators: ['Collaborator1'],         // 合作者标签
  
  // ========== 项目颜色配置 ==========
  colors: {
    heroGradient: 'var(--gradient-hero)',
    subtitleGradient: 'var(--gradient-secondary)',
    underlineGradient: 'var(--gradient-secondary)'
  },
  
  // ========== 项目概述 ==========
  overview: {
    content: 'Detailed project description...',
    challenge: 'Project challenge statement...',
    mainImage: {
      src: '/media/projects/your-project-id/overview/main-image.jpg',
      alt: 'Project Overview Image',
      caption: 'Image caption text'
    }
  },
  
  // ========== 角色和职责 ==========
  role: {
    title: 'Role and Responsibilities',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3'
    ]
  },
  
  // ========== 项目章节 ==========
  sections: [
    {
      title: 'Research',
      displayMode: 'grid',                  // 或 'single'
      content: 'Research content...',
      images: [
        {
          src: '/media/projects/your-project-id/sections/research/research-1.jpg',
          alt: 'Research Image 1',
          caption: 'Research finding 1'
        },
        {
          src: '/media/projects/your-project-id/sections/research/research-2.jpg',
          alt: 'Research Image 2',
          caption: 'Research finding 2'
        }
      ]
    },
    {
      title: 'Design',
      displayMode: 'single',
      content: 'Design content...',
      images: [
        {
          src: '/media/projects/your-project-id/sections/design/design-1.jpg',
          alt: 'Design Image 1',
          caption: 'Design concept'
        }
      ]
    }
  ]
}
```

## 🎨 颜色主题配置

### 预设主题
项目支持以下预设颜色主题：

```javascript
// 默认主题
colors: {
  heroGradient: 'var(--gradient-hero)',
  subtitleGradient: 'var(--gradient-secondary)',
  underlineGradient: 'var(--gradient-secondary)'
}

// 自定义主题示例
colors: {
  heroGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
  subtitleGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
  underlineGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
}
```

### 颜色配置说明
- **heroGradient**: 项目详情页顶部背景渐变
- **subtitleGradient**: 章节标题文字渐变
- **underlineGradient**: 章节标题下划线渐变

## 🖼️ 图片展示模式

### 单图模式 (single)
每行显示一张图片，适合展示重要内容：
```javascript
{
  title: 'Design',
  displayMode: 'single',
  images: [
    {
      src: '/path/to/image.jpg',
      alt: 'Design Image',
      caption: 'Design concept'
    }
  ]
}
```

### 网格模式 (grid)
每行显示多张图片，适合展示多个相关图片：
```javascript
{
  title: 'Research',
  displayMode: 'grid',
  images: [
    {
      src: '/path/to/image1.jpg',
      alt: 'Research Image 1',
      caption: 'Finding 1'
    },
    {
      src: '/path/to/image2.jpg',
      alt: 'Research Image 2',
      caption: 'Finding 2'
    }
  ]
}
```

## 📄 内容格式说明

### 多段落内容
支持两种内容格式：

#### 1. 字符串格式（自动分段）
```javascript
content: '这是第一段内容。\n\n这是第二段内容。\n\n这是第三段内容。'
```

#### 2. 数组格式（手动分段）
```javascript
content: [
  '这是第一段内容。',
  '这是第二段内容。',
  '这是第三段内容。'
]
```

### 特殊字符处理
在JavaScript字符串中使用单引号：

```javascript
// 方法1：使用双引号
content: "It's a great project that demonstrates our capabilities."

// 方法2：使用反斜杠转义
content: 'It\'s a great project that demonstrates our capabilities.'

// 方法3：使用模板字符串
content: `It's a great project that demonstrates our capabilities.`
```

## 🧪 测试和验证

### 1. 开发环境测试
```bash
npm run dev
# 或
pnpm dev
```

### 2. 构建测试
```bash
npm run build
# 或
pnpm build
```

### 3. 预览测试
```bash
npm run preview
# 或
pnpm preview
```

### 4. 功能验证
- [ ] 项目在主页正确显示
- [ ] 项目详情页正常加载
- [ ] 图片正确显示和放大
- [ ] 导航链接正常工作
- [ ] 颜色主题正确应用
- [ ] 响应式设计正常

## ❓ 常见问题

### Q: 图片不显示怎么办？
A: 检查图片路径是否正确，确保图片文件存在于指定位置。

### Q: 如何添加视频？
A: 在 `heroVideo` 字段中添加视频路径，支持 MP4 格式。

### Q: 如何修改项目分类？
A: 在 `category` 字段中设置：'UIUX'、'Programming'、'Research'、'3D'、'Graphic Design'。

### Q: 如何添加新的章节？
A: 在 `sections` 数组中添加新的章节对象，包含 `title`、`displayMode`、`content` 和 `images`。

### Q: 如何自定义颜色主题？
A: 在 `colors` 对象中设置自定义的渐变颜色值。

### Q: 项目不显示在主页怎么办？
A: 检查项目数据格式是否正确，确保所有必需字段都已填写。

## 📚 相关文档

- [项目颜色主题配置指南](./PROJECT_COLOR_THEME_README.md)
- [添加主图功能指南](./ADD_MAIN_IMAGE_GUIDE.md)
- [图片展示模式指南](./public/media/IMAGE_DISPLAY_GUIDE.md)
- [项目主README](./README.md)

## 🎯 最佳实践

1. **保持一致性**：使用统一的命名规范和文件结构
2. **优化图片**：使用适当的图片尺寸和格式
3. **内容质量**：确保内容清晰、准确、有吸引力
4. **测试充分**：在多个设备和浏览器上测试
5. **定期更新**：保持项目信息的时效性

---

*最后更新：2024年12月*
