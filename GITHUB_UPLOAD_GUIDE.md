# GitHub 大图片上传指南

## 📋 GitHub 文件大小限制

- **警告阈值**: 单个文件 > 50MB
- **拒绝阈值**: 单个文件 > 100MB
- **推荐大小**: 图片 < 5MB，视频 < 50MB

## 🚀 上传方式

### 方式1: 使用 Git 命令（推荐）

如果已经配置好 SSH 密钥，可以直接使用 Git 命令：

```bash
# 1. 添加文件
git add public/media/projects/your-project/image.jpg

# 2. 提交
git commit -m "Add project images"

# 3. 推送到 GitHub
git push origin main
```

### 方式2: 使用 Git LFS（大文件存储）

对于超过 50MB 的文件，建议使用 Git LFS：

```bash
# 1. 安装 Git LFS（如果还没安装）
# macOS: brew install git-lfs
# 或访问: https://git-lfs.github.com/

# 2. 初始化 Git LFS
git lfs install

# 3. 跟踪大文件类型
git lfs track "*.jpg"
git lfs track "*.png"
git lfs track "*.mp4"
git lfs track "*.mov"

# 4. 提交 .gitattributes 文件
git add .gitattributes
git commit -m "Add Git LFS tracking"

# 5. 正常添加和提交文件
git add public/media/projects/your-project/large-image.jpg
git commit -m "Add large image via Git LFS"
git push origin main
```

### 方式3: 压缩图片后再上传（推荐）

在本地压缩图片，减小文件大小：

```bash
# 使用 ImageOptim (macOS)
# 下载: https://imageoptim.com/mac

# 或使用命令行工具
# 安装 imagemagick
brew install imagemagick

# 压缩图片
convert input.jpg -quality 85 -resize 1920x1080> output.jpg
```

## 📁 项目图片路径结构

```
public/media/projects/
├── your-project-id/
│   ├── hero-image.jpg          # 主图
│   ├── thumbnail.jpg           # 缩略图
│   └── sections/
│       ├── image-1.jpg
│       └── image-2.jpg
```

## ⚠️ 注意事项

1. **SSH 密钥配置**: 确保已配置 SSH 密钥到 GitHub
   ```bash
   # 检查 SSH 连接
   ssh -T git@github.com
   ```

2. **文件大小检查**: 上传前检查文件大小
   ```bash
   ls -lh public/media/projects/your-project/*.jpg
   ```

3. **压缩建议**:
   - Hero 图片: 压缩到 1-2MB
   - Section 图片: 压缩到 500KB-1MB
   - 缩略图: 压缩到 100-200KB

4. **格式建议**:
   - 使用 JPG 格式（比 PNG 小）
   - 考虑使用 WebP 格式（更小，但需要浏览器支持）

## 🔧 快速上传步骤

```bash
# 1. 进入项目目录
cd "/Users/qingyu/Desktop/作品集网站/qingyu-portfolio-v3 claude"

# 2. 检查文件大小
ls -lh public/media/projects/your-project/

# 3. 添加文件
git add public/media/projects/your-project/

# 4. 提交
git commit -m "Add project images"

# 5. 推送（使用 SSH）
git push origin main
```

## 💡 最佳实践

1. **本地压缩**: 上传前在本地压缩图片
2. **分批上传**: 如果有很多大文件，分批提交
3. **使用 Git LFS**: 对于真正的大文件（>50MB）
4. **检查大小**: 定期检查仓库大小，避免过大

## 🆘 如果遇到问题

### 文件太大被拒绝
```bash
# 方案1: 使用 Git LFS
git lfs track "*.jpg"
git add .gitattributes
git add your-large-file.jpg
git commit -m "Add large file via LFS"
git push origin main

# 方案2: 压缩后重新上传
# 使用 ImageOptim 或其他工具压缩
```

### SSH 连接问题
```bash
# 检查 SSH 配置
cat ~/.ssh/config

# 测试连接
ssh -T git@github.com

# 如果使用 HTTPS，可以切换到 SSH
git remote set-url origin git@github.com:username/repo.git
```

