# 图片展示模式配置指南

## 📸 图片展示模式

现在您的项目支持两种图片展示模式：

### 1. **单张模式 (single)** - 默认模式
- 每张图片单独占一行
- 适合展示大图、详细设计图
- 类似您提供的 Stumbldoor 项目页面效果

### 2. **网格模式 (grid)**
- 多张图片以网格形式展示
- 1张图片：单列
- 2张图片：双列
- 3张图片：三列
- 4张以上：双列

## 🔧 如何配置

### 在项目数据中配置

在 `data/projects.js` 中，为每个 section 添加 `imageDisplayMode` 字段：

```javascript
sections: [
  {
    id: 'research',
    title: 'Research',
    icon: '🔍',
    content: '...',
    imageDisplayMode: 'single', // 单张模式
    images: [
      {
        src: '/media/projects/stumbldoor/sections/research/research-1.jpg',
        alt: 'Research process',
        caption: 'User interview session'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design Process',
    icon: '🎨',
    content: '...',
    imageDisplayMode: 'grid', // 网格模式
    images: [
      {
        src: '/media/projects/stumbldoor/sections/design/design-1.jpg',
        alt: 'Design system'
      },
      {
        src: '/media/projects/stumbldoor/sections/design/design-2.jpg',
        alt: 'Wireframes'
      },
      {
        src: '/media/projects/stumbldoor/sections/design/design-3.jpg',
        alt: 'Mockups'
      }
    ]
  }
]
```

### 配置选项

- `'single'` - 单张模式（默认）
- `'grid'` - 网格模式
- 不设置或设置为 `null` - 使用默认的单张模式

## 🎯 使用建议

### 单张模式适用于：
- 项目主图
- 详细的设计图
- 需要突出展示的图片
- 长图或宽图
- 过程记录图

### 网格模式适用于：
- 多张相关图片
- 对比展示
- 设计变体
- 小尺寸图片
- 快速浏览的图片集

## 📝 示例配置

```javascript
// 示例1：研究阶段使用单张模式
{
  id: 'research',
  title: 'Research',
  imageDisplayMode: 'single',
  images: [
    { src: '/media/projects/stumbldoor/sections/research/research-1.jpg', alt: 'Research' }
  ]
}

// 示例2：设计阶段使用网格模式
{
  id: 'design',
  title: 'Design Process',
  imageDisplayMode: 'grid',
  images: [
    { src: '/media/projects/stumbldoor/sections/design/design-1.jpg', alt: 'Design 1' },
    { src: '/media/projects/stumbldoor/sections/design/design-2.jpg', alt: 'Design 2' },
    { src: '/media/projects/stumbldoor/sections/design/design-3.jpg', alt: 'Design 3' }
  ]
}
```

## 🚀 开始使用

1. 在您的项目数据中添加 `imageDisplayMode` 字段
2. 根据内容选择合适的展示模式
3. 上传图片到对应的文件夹
4. 测试效果并调整

现在您可以灵活地为每个章节选择最适合的图片展示方式了！
