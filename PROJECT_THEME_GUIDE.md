# 项目主题颜色配置指南

## 🎨 如何为不同项目设置不同的颜色

### 1. 在项目数据中添加主题配置

在 `data/projects.js` 中，为每个项目添加 `theme` 配置：

```javascript
{
  id: 'your-project',
  title: 'Your Project',
  // ... 其他配置
  
  // ========== 项目样式配置 ==========
  theme: {
    // 子标题样式
    subtitleStyle: {
      gradient: 'var(--gradient-secondary)' // 或自定义渐变
    },
    // 背景颜色配置
    backgroundColors: [
      'bg-gradient-to-br from-purple-50 to-blue-50', // 偶数章节背景
      'bg-gradient-to-br from-blue-50 to-purple-50'  // 奇数章节背景
    ],
    // 章节标题下划线样式
    underlineStyle: {
      gradient: 'var(--gradient-secondary)'
    }
  }
}
```

### 2. 预设主题样式

#### 紫色主题（默认）
```javascript
theme: {
  subtitleStyle: {
    gradient: 'var(--gradient-secondary)'
  },
  backgroundColors: [
    'bg-gradient-to-br from-purple-50 to-blue-50',
    'bg-gradient-to-br from-blue-50 to-purple-50'
  ],
  underlineStyle: {
    gradient: 'var(--gradient-secondary)'
  }
}
```

#### 游戏主题（橙红-青色）
```javascript
theme: {
  subtitleStyle: {
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
  },
  backgroundColors: [
    'bg-gradient-to-br from-orange-50 to-red-50',
    'bg-gradient-to-br from-cyan-50 to-blue-50'
  ],
  underlineStyle: {
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
  }
}
```

#### 绿色主题
```javascript
theme: {
  subtitleStyle: {
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  },
  backgroundColors: [
    'bg-gradient-to-br from-green-50 to-emerald-50',
    'bg-gradient-to-br from-emerald-50 to-teal-50'
  ],
  underlineStyle: {
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  }
}
```

#### 粉色主题
```javascript
theme: {
  subtitleStyle: {
    gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)'
  },
  backgroundColors: [
    'bg-gradient-to-br from-pink-50 to-rose-50',
    'bg-gradient-to-br from-rose-50 to-pink-50'
  ],
  underlineStyle: {
    gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)'
  }
}
```

### 3. 自定义颜色

您可以使用任何 CSS 渐变或颜色：

```javascript
theme: {
  subtitleStyle: {
    gradient: 'linear-gradient(45deg, #FF0000, #00FF00, #0000FF)' // 彩虹渐变
  },
  backgroundColors: [
    'bg-gradient-to-br from-yellow-100 to-orange-100',
    'bg-gradient-to-br from-indigo-100 to-purple-100'
  ],
  underlineStyle: {
    gradient: 'linear-gradient(90deg, #FFD700, #FFA500)'
  }
}
```

### 4. 使用 Tailwind 颜色类

```javascript
backgroundColors: [
  'bg-gradient-to-br from-slate-50 to-gray-50',    // 灰色系
  'bg-gradient-to-br from-red-50 to-pink-50',      // 红色系
  'bg-gradient-to-br from-blue-50 to-indigo-50',   // 蓝色系
  'bg-gradient-to-br from-green-50 to-lime-50',    // 绿色系
  'bg-gradient-to-br from-yellow-50 to-orange-50', // 黄色系
  'bg-gradient-to-br from-purple-50 to-violet-50'  // 紫色系
]
```

### 5. 不设置主题

如果项目没有 `theme` 配置，将使用默认的紫色主题。

## 🎯 效果预览

- **子标题**：使用渐变文字效果
- **背景**：章节之间交替使用不同的渐变背景
- **下划线**：与子标题使用相同的渐变颜色

现在您可以为每个项目设置独特的颜色主题了！
