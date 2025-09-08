# 在 Challenge 下面添加主图功能指南

## 📸 功能概述

在 "The Challenge" 部分下面添加一个主图，支持：
- 图片展示
- 悬停放大效果
- 点击查看大图
- 图片说明文字

## 🔧 需要修改的代码

### 1. 在项目数据中添加主图配置

在 `data/projects.js` 中，为 Stumbldoor 项目的 `overview` 部分添加：

```javascript
overview: {
  content: 'STUMBLEDOOR is an innovative digital platform app...',
  challenge: 'How might we make libraries more relevant, inclusive, culturally dynamic & appealing in the future?',
  mainImage: {
    src: '/media/projects/stumbldoor/overview/main-image.jpg',
    alt: 'Stumbldoor App Overview',
    caption: 'The Stumbldoor app interface showcasing the library experience transformation'
  }
}
```

### 2. 在 ProjectDetail.jsx 中添加主图显示

找到 "The Challenge" 部分（大约第290行），在 `{project.overview.challenge}` 后面添加：

```javascript
{/* 主图展示 */}
{project.overview.mainImage && (
  <div className="mt-12">
    <div className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer" onClick={() => setSelectedImage(project.overview.mainImage)}>
      <img 
        src={project.overview.mainImage.src} 
        alt={project.overview.mainImage.alt}
        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
    {project.overview.mainImage.caption && (
      <p className="text-center text-white/80 mt-4 text-sm italic">
        {project.overview.mainImage.caption}
      </p>
    )}
  </div>
)}
```

## 📁 文件结构

确保图片文件放在正确的位置：
```
public/media/projects/stumbldoor/overview/
├── main-image.jpg
```

## 🎨 样式效果

- **悬停效果**：图片会轻微放大（scale-105）
- **遮罩效果**：悬停时显示半透明黑色遮罩
- **放大镜图标**：悬停时显示放大镜图标
- **点击功能**：点击图片可以查看大图（使用现有的图片画廊功能）

## 🔄 为其他项目添加主图

为其他项目添加主图，只需要在对应的 `overview` 部分添加 `mainImage` 配置即可。

## ✅ 完成后的效果

"The Challenge" 部分会显示：
1. 挑战问题文字
2. 主图（带悬停效果）
3. 图片说明文字（如果有）

现在您可以按照这个指南手动添加主图功能了！
