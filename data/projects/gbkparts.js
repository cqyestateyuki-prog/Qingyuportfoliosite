// gbkparts
// 2026-10-19 从"直接跳外站"改成站内案例页。讲法(她定的):一家靠电话和 PDF 做生意的配件供应商,
// 怎么靠自助 B2B 网站和 AI 工作流运转起来。她是 GBK 的全职员工,网站和 skill 都是她做的(她 10-19 确认)。
// 事实出处:Claude Docs 作品集文档(https://claude.ai/artifact/5Lsn1EWi5kXTYp21BoGAyq)的「数据展示」表,以它为准;10-19 的旧大纲 md 已清掉。
// 不写:"family"(她说是正规公司)、省了多少工时(没有记录)、批发账户数和金额(公司数据)。
export const gbkparts = {
  id: 'gbkparts',
  year: '2026',
  featured: true, order: 2, // Selected Work · 第 2 位(2026-10-20 她定:Kogna、GBK、HexaEdge、Stumbldoor)

  // 首页卡片 hover 时播这段录屏(静音循环),移开就卸载
  hoverVideo: '/media/projects/gbkparts/landing-flow.mp4',
  // 点卡片直接进正文,不弹放映厅(她 10-19 定的)
  skipTheater: true,

  title: { en: 'GBK Parts', zh: 'GBK Parts' },
  subtitle: {
    en: 'A phone-and-PDF parts supplier, now run on a self-serve B2B website and AI workflows',
    zh: '一家靠电话和 PDF 做生意的配件供应商，现在靠自助 B2B 网站和 AI 工作流运转',
  },
  categories: ['Product Design', 'UIUX', 'AI', 'E-commerce'],
  // 2026-10-26 她定:关键词放网页文字里(筛简历的系统读不到图里的字),只放面试讲得清的。#GitHub Actions 等每小时同步跑通再加
  tags: ['Agentic Workflows', 'Human-in-the-loop', 'AI Agents', 'B2B E-commerce', 'Data Dashboard', 'Design System'],
  techTags: ['#WordPress', '#WooCommerce', '#PHP', '#Python', '#Claude Code'],

  // Selected Work 大卡要 16:9;16:10 的 gbk-hero.png 留着,撤回 More Projects 时换回去。两张都由 scripts/visuals/gbk-hero/build.py 出
  thumbnail: '/media/projects/gbkparts/gbk-hero-169.png',
  heroImage: '/media/projects/gbkparts/gbk-hero-169.png',
  // 86 秒走查片 v9(素材/portfolio-reel-2026-10/v7/stage9.html,CRF 21,17MB,低于 Cloudflare 25MB 上限)。
  // v9 = v8 去掉开头的 "family"(她 10-19:我们是正规公司)
  heroVideo: '/media/projects/gbkparts/gbk-casewalk.mp4',

  brief: {
    // 2026-10-25 她定:TL;DR 一句话只写方向,具体数字(排名、订单差异、SKU 数)放后面各节和配图
    en: 'I rebuilt how a truck-parts supplier sells and operates: a self-serve B2B website that [[replaced phone calls and PDF price lists]], a decision dashboard across all sales channels, and human-approved AI agents that [[run its weekly operations]], cutting wasted ad spend from 39% to 20% while ad-driven sales grew 69%.',
    zh: '我重做了一家卡车配件供应商卖货和运营的方式：[[取代电话和 PDF 价目表]]的自助 B2B 网站、汇总全渠道数据做经营决策的看板，以及由人把关、[[接手每周运营]]的 AI agent，把浪费的广告花费从 39% 降到 20%，广告带来的销售额同时增长 69%。',
  },

  meta: {
    role: 'Product Design, Design Engineering & AI Workflows',
    duration: 'Feb 2026 – Present · Full-time',
    team: 'In-house, with the owner and the ops team',
    stack: 'WordPress · WooCommerce · custom PHP plugins · Claude Code skills',
  },

  // domain[0] 是首页卡片上的标签
  domain: [
    { en: 'B2B Wholesale', zh: 'B2B 批发' },
    { en: 'AI Workflows', zh: 'AI 工作流' },
    { en: 'E-commerce', zh: '电商' },
  ],
  form: [
    { en: 'Product Design', zh: '产品设计' },
    { en: 'Design Engineering', zh: '设计工程' },
    { en: 'AI Workflow Design', zh: 'AI 工作流设计' },
  ],
  collaborators: [],

  colors: {
    heroGradient: 'linear-gradient(135deg, #1b1f16 0%, #7cb342 100%)',
    subtitleGradient: 'linear-gradient(135deg, #4a6b28 0%, #7cb342 100%)',
    underlineGradient: 'linear-gradient(135deg, #4a6b28 0%, #7cb342 100%)',
    textHighlightColor: '#7cb342',
    darkColor: '#3f5c22',
    lightColor: '#7cb342',
  },

  overview: {
    buttons: [
      { label: 'Live Site', url: 'https://gbkparts.com/', type: 'primary' }
    ]
  },

  sections: [
    // 2026-10-26 她定的格式:TL;DR → 三组 Problem / Solution(每组一张问题图、一张方案图)→ Design Iteration(待做)→ Impact。
    // 文案和图对应 Claude Docs 作品集文档 Project Overview 的三组;图里画了的正文不复述,只留主旨句和图里没有的。
    // 配图源文件:~/Desktop/作品集项目列表/GBK首图素材/案例配图/源文件/build_ps.py,数字出处写在脚本注释里。
    // 原来的 for-buyers 四组 showcase、one-view、ai-workflows 三节被这六节取代(buy-search/product/paste/matched/order 图还在 sections/)。
    {
      id: 'problem-1',
      title: 'Problem 01',
      sectionTag: 'Problem 01',
      mainTitle: 'Every Order Started With a Phone Call',
      briefContent: 'GBK Parts supplies heavy-duty truck parts to repair shops, fleets and distributors. [[Every order needed someone at GBK to answer it.]] Each distributor had its own price list and payment terms, kept by hand.',
      challenge: 'How might we let a buyer find, price and order a part without calling us?',
      icon: '💡',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/ps-1-problem.jpg', labelInImage: true, alt: 'Before: PDF price lists, phone calls and email. After: the GBK Parts B2B website with part number search', caption: 'Prices on the PDF are blurred.' }
      ]
    },

    {
      id: 'solution-1',
      title: 'Solution 01',
      sectionTag: 'Solution 01',
      mainTitle: 'Buyers Now Order Without Calling',
      briefContent: 'I designed the B2B website\'s design system and ordering experience. On Shopify or WooCommerce, tier pricing and invoicing each cost a separate subscription, so [[I built both as GBK\'s own plugins with coding agents]]. Sales now spends less time on the phone and in the inbox.',
      icon: '🛒',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/ps-1-solution.jpg', labelInImage: true, alt: 'Four steps on the GBK Parts B2B website: search any part number, see your own price, paste a parts list, pay on Net 30' }
      ]
    },

    {
      id: 'problem-2',
      title: 'Problem 02',
      sectionTag: 'Problem 02',
      mainTitle: 'Every Issue Turned Into a Meeting',
      briefContent: 'Once sales moved online, the website, Amazon, Walmart and QuickBooks each kept their own numbers. [[Every mismatch took days of cross-department meetings to trace.]]',
      icon: '🧩',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/ps-2-problem.jpg', labelInImage: true, alt: 'Three mismatches: one product with stock counts of 18, 18 and 100; 54 of 272 marketplace order lines missing from the books; 39% of Amazon ad spend on searches that never sold. All lead to days of cross-team meetings', caption: 'Stock from the October 12 check. Orders from the July to October reconciliation. Ads from the week before the October 6 rules.' }
      ]
    },

    {
      id: 'solution-2',
      title: 'Solution 02',
      sectionTag: 'Solution 02',
      mainTitle: 'Issues Now Surface Within Hours',
      // 「hourly / daily」要等 gbk-live-data 同步跑通、Ads API 批下来才是真的(看板待办 t-ops-live-data-*、t-amz-ads-api-1026),上线前核对
      briefContent: 'I designed a decision dashboard that brings every platform into one view. Discrepancies are flagged and routed to an owner, me or an agent, so [[issues that took days of meetings are now caught within hours]].',
      icon: '📊',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/ps-2-solution.jpg', labelInImage: true, alt: 'Website, Amazon, Walmart and QuickBooks feeding one GBK decision dashboard', caption: 'Dollar amounts are blurred.' }
      ]
    },

    {
      id: 'problem-3',
      title: 'Problem 03',
      sectionTag: 'Problem 03',
      mainTitle: 'Automation Had to Be Trustworthy',
      briefContent: 'Every week someone still downloaded the reports and checked them by hand. Handing that work to AI raised a harder question: [[an agent that can change bids, prices and listings can also make expensive mistakes]].',
      icon: '⚠️',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/ps-3-problem.jpg', labelInImage: true, alt: 'A stack of weekly reports done by hand, and a search for stainless steel exhaust coupler where our own clamp ad was hidden because the agent blocked the term' }
      ]
    },

    {
      id: 'solution-3',
      title: 'Solution 03',
      sectionTag: 'Solution 03',
      mainTitle: 'Nothing That Costs Money Goes Live Without Human Approval',
      briefContent: 'I designed an agent workflow with human approval built in. [[The agents do the legwork, and my time goes to improving the business.]]',
      icon: '🤖',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/ps-3-solution.jpg', labelInImage: true, alt: 'Agents draft, code checks money rules, a human approves prices, stock, ad budgets and payments, then it goes live. A mistake that slips through becomes a new rule' }
      ]
    },

    {
      id: 'design-system',
      title: 'Design System',
      sectionTag: 'Design System',
      mainTitle: 'From 45 Font Sizes to Four',
      // 线上实测(2026-10-19):产品页和 Shop 守住了;首页 hero、Wholesale、登录页、Quick Order 还没改,所以只说前两个
      briefContent: 'The site had grown to 45 font sizes and 135 colors. I cut it to four sizes, and [[green now means a price, a link or the main button]]. The product and shop pages run on it, and the home and wholesale pages are next.',
      icon: '🎨',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/design-system.jpg', alt: 'GBK Parts color tokens, type scale, buttons and product row', caption: 'Tokens from DESIGN.md v2.1.' },
        { src: '/media/projects/gbkparts/sections/mobile.jpg', alt: 'GBK Parts pages on phones', caption: 'The same system on phones.' }
      ]
    },

    {
      id: 'impact',
      title: 'Impact',
      sectionTag: 'Impact',
      mainTitle: 'Live at gbkparts.com',
      // 广告数字:W/周报/10.14广告报表 原始报表重算,10/6 改动前后各 7 天(9/29–10/5 对 10/7–10/13)。
      // 同一周还涨了价,所以只放花费和零单词占比(由出价和否定词直接决定),不放 ROAS/ACOS。14 天复查做完再看要不要更新
      // 排名:工作台看板 site_weeks(Search Console 经 Site Kit),8/17 那周平均排名 20.4、10/12 那周 9.4。同期点击一直约 20 次/周,面试被问照实说
      // 2026-10-25 四个数做成一张配图(案例配图/源文件/build.py 第 7 节),替掉原来的 stats 小卡
      // 同日按用户意见改:第三张从卡箍单个活动换成 10/6 一起调过的 3 个活动合计 ACOS 21% → 15%(10-06改动复查.md,花费 −29%、销售额 −0.9%)
      // 10-25 第二版配图:6 张卡(上排排名、浪费的广告、ACOS;下排订单差异 54/272≈20%、交叉号改正 79/479≈16%、agent 18 自己做 / 9 交给人定),数字出处见作品集文档「Impact 页数据」
      briefContent: 'I set out to cut wasted ad spend. The bigger find came from putting every channel in one view, which surfaced orders the books had missed for months.',
      icon: '🚀',
      imageDisplayMode: 'single',
      images: [
        { src: '/media/projects/gbkparts/sections/impact.jpg', alt: 'Quantifiable business results. Wasted ad spend 39% to 20%, ACOS across three tuned campaigns 21% to 15%, Amazon ad-driven sales up 69% on flat ad spend, average Google position up 11 places to 9.4, 20% of marketplace orders since July found missing from the books, 18 of 27 changes made by the agent and 9 left for a human to decide', caption: 'Ranking from Search Console. Ad numbers compare the week before and after the October 6 rules. Order numbers come from the July to October reconciliation.' }
      ],
      columns: [
        { label: 'What I\'ve learned', text: 'At first the agent only wrote files for me to upload. Now it uploads its own changes once I approve the list, because every limit is a rule it checks before it acts.' },
        { label: 'If I had more time', text: 'Run the 14-day reviews, then count how many orders still come in by phone and email.' }
      ]
    }
  ],
};
