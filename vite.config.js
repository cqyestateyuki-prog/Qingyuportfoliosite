import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { spawn } from 'node:child_process'

/**
 * 改完 public/media/projects 里的图,自动重生成缩略图。
 *
 * 首页读的是 public/media/thumbs(900px)和 thumbs-hi(2200px)的 WebP 副本,
 * 不是原图 —— 换了源图不重新生成,页面上还是旧的,而且很难看出来。
 * 这里替人记着这一步:存图 → 自动跑脚本 → 页面刷新就是新的。
 *
 * 脚本自身按修改时间增量,没变的会跳过,所以跑起来是秒级的。
 */
const autoThumbs = () => ({
  name: 'auto-thumbs',
  apply: 'serve',
  configureServer(server) {
    const watched = path.resolve(__dirname, 'public/media/projects')
    let timer = null
    let running = false
    let queued = false

    const run = () => {
      if (running) {
        queued = true // 跑的过程中又存了图,结束后再补一次
        return
      }
      running = true
      server.config.logger.info('\n[thumbs] 源图有变动,重新生成缩略图…')
      const proc = spawn('python3', [path.resolve(__dirname, 'scripts/build-thumbs.py')], {
        cwd: __dirname,
        stdio: 'inherit',
      })
      proc.on('error', (err) => {
        running = false
        // 没装 python3/Pillow 就安静降级,不要拦着开发
        server.config.logger.warn(`[thumbs] 跳过(${err.message})。手动跑:python3 scripts/build-thumbs.py`)
      })
      proc.on('close', () => {
        running = false
        if (queued) {
          queued = false
          run()
        }
      })
    }

    server.watcher.add(watched)
    server.watcher.on('all', (_event, file) => {
      if (!file.startsWith(watched)) return
      if (!/\.(png|jpe?g|gif)$/i.test(file)) return
      clearTimeout(timer)
      // 防抖:一次拖进来十几张图时只跑一遍
      timer = setTimeout(run, 500)
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoThumbs()],
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
