# 邮件反馈功能设置指南

## 功能说明
现在HR可以通过右下角的机器人图标快速发送反馈，反馈会直接发送到你的邮箱！

## 设置步骤

### 1. 注册 EmailJS 账号
1. 访问 [EmailJS官网](https://www.emailjs.com/)
2. 注册免费账号（每月200封邮件免费）

### 2. 创建邮件服务
1. 登录后进入 Dashboard
2. 点击 "Add New Service"
3. 选择你的邮箱服务商（Gmail、Outlook等）
4. 按照指引连接你的邮箱
5. 记录下 Service ID（类似：service_xxxxx）

### 3. 创建邮件模板
1. 在 EmailJS Dashboard 中点击 "Email Templates"
2. 点击 "Create New Template"
3. 设置模板内容：

**Subject（主题）:**
```
Portfolio HR反馈 - {{timestamp}}
```

**Content（内容）:**
```
收到新的HR反馈：

时间：{{timestamp}}
发送者：{{from_name}}

反馈内容：
{{message}}

---
此邮件来自作品集反馈系统
```

4. 记录下 Template ID（类似：template_xxxxx）

### 4. 获取 Public Key
1. 在 EmailJS Dashboard 中点击 "Account"
2. 找到 "Public Key" 并复制

### 5. 更新代码配置
打开 `src/components/FeedbackBot.jsx` 文件，找到第12-14行，替换为你的实际配置：

```javascript
const serviceId = 'service_xxxxx'; // 替换为你的 Service ID
const templateId = 'template_xxxxx'; // 替换为你的 Template ID  
const publicKey = 'your_public_key'; // 替换为你的 Public Key
```

同时在第20行替换为你的邮箱：
```javascript
to_email: 'your-email@example.com' // 替换为你的邮箱
```

## 测试功能
1. 保存文件后刷新页面
2. 点击右下角的机器人图标
3. 输入测试反馈并发送
4. 检查你的邮箱是否收到邮件

## 功能特点
- ✅ 超简单：HR只需点击机器人图标，输入一句话反馈
- ✅ 实时通知：反馈直接发送到你的邮箱
- ✅ 本地备份：同时保存到浏览器本地存储
- ✅ 响应式：支持手机和电脑访问
- ✅ 无服务器：纯前端实现，无需后端

## 注意事项
- 免费版每月限制200封邮件
- 如果邮件发送失败，反馈仍会保存到本地
- 建议定期检查本地存储的反馈作为备份
