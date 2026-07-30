# 项目协作规矩(Claude 必读)

## Git 红线

1. **永远不要在 commit message 或 PR 里加 `Co-Authored-By: Claude`、`Generated with Claude Code` 或任何 AI 参与声明。** 一行都不要。
2. **commit / push 到 main 之前必须先征得同意**,改动默认只留在本地。
3. 批量 `git add -A` 前先确认没有把个人文件带进去(`.gitignore` 里列了已知的几个)。

## 站点信息

- 对外主域名:`https://portfolio.qingyucao.com`(Vercel 部署,vercel.app 域名仅作后备)
- 所有 SEO 文件(canonical、og:url、sitemap、robots、llms.txt)统一用主域名

## 文案

- 对外英文文案要去 AI 味:不用破折号、不用 AI 高频词、不写对仗排比腔
- 案例文案硬规矩见 `WRITING-GUIDE.md`
- 项目数据在 `data/projects/<id>.js`,一文件一项目;`[[文字]]` 是高亮标记语法
