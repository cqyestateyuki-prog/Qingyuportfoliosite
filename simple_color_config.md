# 简单颜色配置方案

## 已添加的项目颜色配置

### Stumbldoor 项目
```javascript
colors: {
  heroGradient: 'var(--gradient-hero)', // 头图背景渐变
  subtitleGradient: 'var(--gradient-secondary)', // 子标题渐变
  underlineGradient: 'var(--gradient-secondary)' // 下划线渐变
}
```

### 游戏项目
```javascript
colors: {
  heroGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)', // 橙红到青色
  subtitleGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)', // 橙红到青色
  underlineGradient: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)' // 橙红到青色
}
```

## 需要手动修改的代码

在 `src/pages/ProjectDetail.jsx` 中：

1. **第179行** - 头图背景：
```javascript
// 原来：
<section id="overview" className="pt-32 pb-16 px-6" style={{background: 'var(--gradient-hero)'}}>

// 修改为：
<section id="overview" className="pt-32 pb-16 px-6" style={{background: project.colors?.heroGradient || 'var(--gradient-hero)'}}>
```

2. **第329行** - 子标题：
```javascript
// 原来：
<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{background: 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>

// 修改为：
<h2 className="text-3xl md:text-4xl font-bold mb-4" style={{background: project.colors?.subtitleGradient || 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
```

3. **第332行** - 下划线：
```javascript
// 原来：
<div className="h-1 mb-12 w-96" style={{background: 'var(--gradient-secondary)'}}></div>

// 修改为：
<div className="h-1 mb-12 w-96" style={{background: project.colors?.underlineGradient || 'var(--gradient-secondary)'}}></div>
```

## 效果
- Stumbldoor 项目：保持原来的紫色主题
- 游戏项目：使用橙红到青色的渐变主题
- 其他项目：如果没有配置 colors，使用默认的紫色主题
