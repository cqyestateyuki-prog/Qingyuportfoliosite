# 作品集文案写作规范

写 `data/projects/*.js` 里的任何对外英文文案之前，先读这份。
这些规则是从实际返工里攒出来的，每一条都对应一次被打回的稿子。

---

## 一、每一节都要有转折，不要写清单

一节文案的价值不在于"我做了什么"，而在于"我遇到了什么，然后怎么办"。
**没有张力的段落，读者不会读第二句。**

清单式（被打回的）：

> The loop is closed. A user lands on an encyclopedia page, signs up, casts, reads,
> hits a tier gate, pays, and exports a share card. I built every step of that.

故事式（通过的）：

> **Most case studies end at the handoff. This one never had one, because there was
> nobody on the other side of the wall.**
>
> So I kept going. Someone finds a hexagram page through Google, signs up, casts three
> coins, reads what comes back, hits a tier gate, pays, and leaves with a share card.

同样的事实，前者是报告，后者是故事。区别只在于**开头那一句有没有制造问题**。

好用的转折结构：

- **绝境 → 转机 → 洞察**（Reflection：合规红线像堵墙 → 回到原典发现"势"本不是宿命 → 约束反而让产品更忠于源头）
- **常识 → 例外**（Outcome：大多数案例止步于交接 → 这个没有交接对象）
- **场景 → 问题**（The Problem：你今天搜六爻，打开的是 2000 年代没动过的网页）
- **想要的 → 不能给的**（Iteration：判决正是人们来求的东西，而它恰恰是我唯一不能交付的）

## 二、文字给判断，图给证据

PPT 图里已经画出来的东西，**正文一个字都不要复述**。
读者会看图，你再抄一遍就是让人读两遍。

- ❌ AI UX 正文列出 ban-list 有哪些词、四段叫什么、三个 commit 号 —— 图里全有
- ✅ 正文只留图里没有的：一句判断（`A rule the model can ignore is not a rule.`）

每写完一段，去看配图。**重合的部分删掉。**

## 三、反 AI 味（她极在意，尤其语法）

**硬性禁止：**

| 禁 | 原因 | 改法 |
|---|---|---|
| 句中破折号 `—` | 最可靠的 AI 指纹 | 句号、逗号、冒号，或重写 |
| 负向对仗 `not just X, but Y` / `isn't A—it's B` | AI 最爱的句式 | 正面陈述。`Willingness is not the bottleneck. Access is.` |
| `not to X, but to Y` | 同上 | 直接说分工：`The engine computes. The consultant explains.` |
| Rule of three（凑三项） | 显得"全面"的假象 | 有几项写几项 |
| `**标题：** 内容` 的清单 | inline-header list | 写成句子 |
| AI 高频词 | `delve` `crucial` `pivotal` `underscore` `tapestry` `testament` `landscape` `showcase` `vibrant` | 换普通词 |
| 意义拔高 | `captures a rare psychological convergence` / `That single layer changed what the product does` | 删掉，或换成具体的 |
| 生僻词 | `omen` | 用常用词（`magic`） |

**合法的 `–`**：数字范围（`2026 – Present`、`18–27`），不要动。

## 四、人称

- 个人项目一律 **`I`**。`We` / `Our` 会把功劳让出去（`meta.team: Solo` 却写 `we`，自相矛盾）。
- **例外**：`How might we…` 是设计思维的固定句式，即使个人项目也这么写。
- 批量替换 `our → my` 时**必须用词边界**：`four` 里含 `our`，我踩过这个坑，把 `four pricing tiers` 改成了 `fthe pricing tiers` 并推上了线。

## 五、TL;DR 与 Overview

- **TL;DR（`brief`）在 hero，是电梯陈述**，招聘方唯一保证会读到的地方。把最好的钩子放这（`binary long before Leibniz`、`stumble onto genres you would never have searched for`）。
- **吸收 `overview.briefContent` 时，尽量直接用原文句子，只做删减和拼接，不要重写、不要造新句。**
- Overview 正文若与 TL;DR 重复，**删 Overview**（长的、位置差的那个），留 TL;DR。
- Overview 区块保留：产品大图、`Live Site`/`GitHub` 按钮、`Why I'm building this`。

## 六、Why I'm building this

- **只有 featured 项目需要写**，可有可无（没填就不渲染）。
- **一句话**。
- 讲**你**，不讲产品愿景。动机要真实、要有个人色彩：
  - HexaEdge：本是自用的量化决策系统，AI 与 vibe coding 让一个人也能推向所有人
  - Kogna：为了搞懂高管怎么决策，因为我自己也想成为 leader
  - Stumbldoor：从小爱图书馆，想让它重新值得走进去

## 七、The Challenge

- 用 **How Might We** 句式。
- **搬运时原样照抄，不要改写、不要自己编。**
- 注意有两个字段：`challenge`（单数字符串）和 `challenges`（数组，渲染成带编号列表）。
  **看清项目用的是哪个，两个都要搬。**
- 挂在该项目的第一个问题类章节（`section.challenge` / `section.challenges`），不要留在 overview。

## 八、高亮 `[[ ]]`

- 只落在**论点**上，不要满屏。一节 1 到 3 处。
- 不要高亮没有信息量的词（比如单独一个 `design`）。
- 不要高亮 AI 味的句式（我曾把 `Not to generate readings, but to…` 这个负向对仗高亮起来，等于把最 AI 的一句放大）。
- `alternating` 图文交替模式下也支持（走 `src/utils/highlight.js`）。

## 九、跨章节：同一个论点只讲一次

写完通读一遍，**查重复**：

- 合规这条线一度在 Iteration / AI UX / Reflection 讲了三遍
- "六爻 × 金融是空白地带" 一度在 Project Highlights 和 Market & Opportunity 各讲一遍

分工示例（HexaEdge）：

| 章节 | 只讲 |
|---|---|
| The Problem | 现存工具有多烂 |
| Market | 市场为什么在 |
| Highlights | 设计手法 |
| Design System | 配色为什么是功能层 |
| User Flow | 加了 Ask 这一步 |
| Iteration | **为什么**删掉判决（伦理决定） |
| AI UX | **怎么做到**让模型做不到（工程约束） |
| Outcome | 交付了什么 |
| Reflection | 回头看学到了什么 |

## 十、事实不许编

- 数据、禁词、commit、模块数，全部从 PPT 图或代码里取，**不许编**。
- 图里有错字要回 PPT 改（例：`ai-ux.png` 的 `Definetely` → `Definitely`，`Sale` → `Sell`）。
- 说不准的地方，问，不要猜。
