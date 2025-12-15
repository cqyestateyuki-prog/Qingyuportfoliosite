# Qingyu Cao - Portfolio Website

A modern, responsive portfolio website showcasing my creative work and professional experience in the field of design and technology. 

## Project Includes

Game Design
UI/UX Design (Web design, mobile app design)
Research
Graphic Design
Programming Projects

## About

This is my personal portfolio website built with React and Vite, featuring:
- Interactive project showcases
- Responsive design
- Modern UI/UX
- Smooth animations

## Contact

- **Email**: [cqyestateyuki@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/qingyu-cao-b1421b175/]
- **Portfolio**: [https://qingyuportfolio.vercel.app/]

---

© 2025 Qingyu Cao. All rights reserved.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide React
- **Routing**: React Router
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```
   
   If you encounter dependency conflicts, use:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   - The development server will start at `http://localhost:5173` (or the next available port)
   - The terminal will display the exact URL

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Deployment & Git Workflow

### Setting Up SSH for GitHub

1. **Check if SSH key exists**:
   ```bash
   ls -al ~/.ssh
   ```

2. **Generate SSH key (if needed)**:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Press Enter to accept default file location
   # Enter a passphrase (optional but recommended)
   ```

3. **Add SSH key to ssh-agent**:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. **Copy public key to clipboard**:
   ```bash
   pbcopy < ~/.ssh/id_ed25519.pub
   # On Linux: cat ~/.ssh/id_ed25519.pub | xclip
   ```

5. **Add SSH key to GitHub**:
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key and save

6. **Test SSH connection**:
   ```bash
   ssh -T git@github.com
   # Should see: "Hi username! You've successfully authenticated..."
   ```

### Configuring Git Remote to Use SSH

1. **Check current remote**:
   ```bash
   git remote -v
   ```

2. **Switch to SSH (if using HTTPS)**:
   ```bash
   git remote set-url origin git@github.com:username/repository.git
   ```

3. **Verify the change**:
   ```bash
   git remote -v
   ```

### Pushing to GitHub via SSH

1. **Stage your changes**:
   ```bash
   git add .
   ```

2. **Commit your changes**:
   ```bash
   git commit -m "Your commit message"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

### Handling Merge Conflicts

If you encounter merge conflicts when pushing:

1. **Fetch latest changes**:
   ```bash
   git fetch origin
   ```

2. **Pull and merge**:
   ```bash
   git pull origin main
   ```

3. **Resolve conflicts** (if any):
   - Open conflicted files
   - Resolve conflicts manually
   - Stage resolved files: `git add .`
   - Complete merge: `git commit -m "Resolve merge conflicts"`

4. **Push again**:
   ```bash
   git push origin main
   ```

### Repository Information

- **GitHub Repository**: https://github.com/cqyestateyuki-prog/Qingyuportfoliosite
- **Deployment**: https://qingyuportfolio.vercel.app/
- **Remote URL**: `git@github.com:cqyestateyuki-prog/Qingyuportfoliosite.git`

## Typography

This project uses the following fonts:
- **Primary Font**: [Inter](https://fonts.google.com/specimen/Inter) - Modern sans-serif for body text
- **Heading Font**: [Poppins](https://fonts.google.com/specimen/Poppins) - Bold sans-serif for headings

Fonts are loaded via Google Fonts CDN.

## Contact

- **Email**: cqyestateyuki@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/qingyu-cao-b1421b175/
- **Portfolio**: https://qingyuportfolio.vercel.app/

---

© 2025 Qingyu Cao. All rights reserved.
