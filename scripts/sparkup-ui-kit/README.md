# Spark Up UI Kit 截图 SOP

产出 `public/sparkup-ui-kit/`：9 屏 × 桌面/手机，一页可切视口的界面总览。

**代码不在本仓** —— 在 `github.com/willinghood/willinghood-core`（组织仓）。
所以脚本放这儿，跑之前得先把那边的前后端起起来。

## 起环境

```bash
# 后端 —— 必须 Python 3.13。3.14 上装不了 pinned 的 pydantic 2.9 / fastapi 0.104
cd <willinghood-core>/backend
python3.13 -m venv venv && ./venv/bin/pip install -r requirements.txt
./venv/bin/uvicorn app.main:app --port 8000     # /health 返回 200 才算起来了

# 前端
cd <willinghood-core>/apps/web
pnpm install && npx vite --port 3050 --strictPort
```

## 跑

```bash
node scripts/sparkup-ui-kit/shoot.js
```

出图后压缩进 `public/sparkup-ui-kit/shots/`（桌面 1600 宽、手机整页 780、手机卡片缩略 640 顶部一屏，
写法同 Wishflow 那份 README）。

## 起后端踩过的两个坑

1. **`CORS_ORIGINS` 得写成 JSON 数组**。`.env` 里原本是 `http://a,http://b` 逗号分隔，
   而 `config.py` 的 `cors_origins: list[str]` 走 pydantic-settings，**list 字段只吃 JSON**，
   否则启动即报 `SettingsError: error parsing value for field "cors_origins"`。
   改成 `["http://localhost:3000","http://localhost:5173","http://localhost:3050"]`。

2. **后端的 `OPENAI_API_KEY` 失效了**（`backend/.env` 第 17 行）。
   `/api/diagnostic/submit` 会调 OpenAI 出分析，key 无效时返回
   `500 AI analysis failed: OpenAI API error: 401 - Incorrect API key provided`。
   **所以测评走不完，结果页拿不到** —— 现在收的是「Diagnostic Flow」的第 1 题。
   换 key 后验证：

   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" https://api.openai.com/v1/models \
     -H "Authorization: Bearer $(grep '^OPENAI_API_KEY=' backend/.env | cut -d= -f2-)"
   ```

   200 就对了。改完要重启 uvicorn（pydantic-settings 只在启动时读一次）。
   然后把 `shoot.js` 末尾注释里那段答题循环接进去，就能补上 test-result 与有分数的 dashboard。

## 别的已知情况

- **`/challenges` 是白屏** —— 需要 seed 数据或登录，没收进 Kit。
- **社区想法的配图全 403** —— 是 DALL·E 的限时签名 URL，生成时没落到自己的存储。
  项目**根本没开 Firebase Storage 桶**（`willinghood-core.appspot.com` 与
  `.firebasestorage.app` 都 `exists=False`），而开桶要升 Blaze 付费计划。
  好在 Idea Seeds 和 Spark Square 的卡片是纯文字+标签排版，本来就不显示配图，
  所以截图不受影响。
- **答题交互有三种形态**，脚本注释里都标了：文字选项是 `<button>`；
  量表 1–5 是**无类名的 52×52 `div`**（`cursor:pointer`）；
  最后一题多选**也是 `<button>`** 但 `cursor:default`，且 Submit 在选够前是 disabled、
  Previous 会把流程倒回去——这两颗都不能当选项点。

## 链接策略

Landing / Assessment Picker / Dashboard / Idea Bank / Create Account 跳线上
（`https://willinghood-core-wwmhkbgzea-uc.a.run.app`，这五条路由实测都不需登录）；
其余开整页长图。产品目前只有英文界面，所以是单语。
