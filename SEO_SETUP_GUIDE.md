# 📊 网站分析设置指南

## 🎯 获取访客洞察的方法

### 1. Google Analytics 4 (推荐)

#### 设置步骤：
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新属性，选择 "Web"
3. 获取测量 ID (格式: G-XXXXXXXXXX)
4. 在 `src/components/Analytics.jsx` 中替换 `GA_TRACKING_ID`

#### 能获得的数据：
- **访客数量**: 每日/每月访问量
- **页面浏览量**: 哪些页面最受欢迎
- **项目点击**: 哪个项目被点击最多
- **用户行为**: 停留时间、跳出率、滚动深度
- **流量来源**: 直接访问、搜索引擎、社交媒体
- **设备信息**: 桌面端 vs 移动端
- **地理位置**: 访客来自哪些国家/城市

### 2. Vercel Analytics (简单易用)

#### 设置步骤：
1. 在 Vercel 项目设置中启用 Analytics
2. 安装 Vercel Analytics 包：
```bash
npm install @vercel/analytics
```

3. 在 `src/main.jsx` 中添加：
```jsx
import { Analytics } from '@vercel/analytics/react';

// 在 App 组件中使用
<Analytics />
```

#### 能获得的数据：
- 页面浏览量
- 访客数量
- 性能指标
- 实时数据

### 3. Plausible Analytics (隐私友好)

#### 特点：
- 无 Cookie
- 符合 GDPR
- 简单易用
- 月费 $9

#### 设置步骤：
1. 注册 [Plausible](https://plausible.io/)
2. 添加网站域名
3. 在 `index.html` 中添加脚本

### 4. Hotjar (用户行为分析)

#### 功能：
- 热力图 (Heatmaps)
- 用户录制 (Session Recordings)
- 用户反馈
- 表单分析

## 📈 关键指标说明

### 基础指标：
- **Sessions**: 会话数 (用户访问次数)
- **Users**: 独立访客数
- **Page Views**: 页面浏览量
- **Bounce Rate**: 跳出率 (只看一页就离开的比例)
- **Session Duration**: 平均停留时间

### 项目相关指标：
- **Project Clicks**: 项目点击次数
- **Most Popular Projects**: 最受欢迎的项目
- **Project View Duration**: 项目页面停留时间
- **Download Clicks**: 下载按钮点击次数

### 流量来源：
- **Direct**: 直接访问 (输入网址或书签)
- **Organic Search**: 搜索引擎自然流量
- **Social**: 社交媒体
- **Referral**: 其他网站链接
- **Email**: 邮件营销

## 🔧 已实现的分析功能

### 1. 项目点击跟踪
```javascript
// 当用户点击项目卡片时
trackProjectClick(projectId, projectTitle);
```

### 2. 按钮点击跟踪
```javascript
// 当用户点击按钮时
trackButtonClick(buttonText, location);
```

### 3. 下载跟踪
```javascript
// 当用户下载文件时
trackDownload(fileName, fileType);
```

### 4. 外部链接跟踪
```javascript
// 当用户点击外部链接时
trackExternalLink(url, linkText);
```

## 📊 查看数据的方法

### Google Analytics 4:
1. 登录 [analytics.google.com](https://analytics.google.com)
2. 选择你的属性
3. 查看 "报告" 部分
4. 重点关注：
   - 概览 → 了解总体流量
   - 事件 → 查看项目点击等自定义事件
   - 页面和屏幕 → 查看最受欢迎的页面
   - 流量获取 → 了解访客来源

### 自定义事件查看：
1. 在 GA4 中进入 "事件"
2. 查看以下事件：
   - `project_click`: 项目点击
   - `button_click`: 按钮点击
   - `file_download`: 文件下载
   - `form_submit`: 表单提交

## 🚀 优化建议

### 1. 内容优化
- 根据最受欢迎的项目调整展示顺序
- 为点击率低的项目优化描述和图片
- 添加更多相关内容

### 2. 用户体验优化
- 降低跳出率：优化页面加载速度
- 增加停留时间：添加更多互动元素
- 提高转化率：优化 CTA 按钮

### 3. SEO 优化
- 定期更新 sitemap.xml
- 优化页面标题和描述
- 添加结构化数据

## 📱 移动端分析

确保在移动端也能正常跟踪：
- 响应式设计
- 触摸事件跟踪
- 移动端性能监控

## 🔒 隐私合规

- 添加 Cookie 同意横幅
- 遵守 GDPR 和 CCPA 规定
- 提供数据删除选项
- 透明化数据收集政策