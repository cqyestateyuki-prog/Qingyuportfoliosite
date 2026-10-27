// side-pocket
// 事实出处:Side Pocket 仓库 docs/case_study_facts.md(每条都对过代码和 git log)。
// 所有账户和金额都是虚构的示例数据(Moon Spirit、Lena Koch),正文里也写明了。
export const sidePocket = {
    id: 'side-pocket',
    year: '2026',
    featured: false, order: 0.5, // More Projects 第二排第二张(2026-10-26 顺延)
    title: 'Side Pocket',
    subtitle: 'A Global Side-Income Ledger with a Tax Layer',
    categories: ['AI', 'Product Design', 'UIUX', 'Design System'],
    tags: ['Product Design', 'Design Engineering', 'Fintech', 'AI Agents', 'Mascot Design', 'Design System'],
    techTags: ['#Claude Code', '#Python', '#FastAPI', '#JavaScript', '#LLM Tool Use', '#Remotion', '#Vercel'],

    thumbnail: '/media/projects/sidepocket/cover.png',
    brief: 'Side income now comes from many platforms, currencies and fee rules. Side Pocket puts eight platforms into [[one ledger]] with a tax layer, and [[every number links to its source]].',
    heroImage: '/media/projects/sidepocket/cover.png',
    // 作品集短片(61 秒,有声,Remotion 做的,按配乐 134 BPM 卡点)。16MB,moov 在前。
    heroVideo: '/media/projects/sidepocket/side-pocket-film.mp4',

    // domain[0] 是首页卡片上的标签
    domain: [
      { en: 'Finance', zh: '财务' },
      { en: 'Creator & Gig Economy', zh: '创作者与零工经济' },
      { en: 'AI Agent × Deterministic Ledger', zh: 'AI 智能体 × 确定性账本' }
    ],
    form: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Design Engineering', zh: '设计工程' },
      { en: 'Mascot & Brand', zh: '吉祥物与品牌' },
      { en: 'AI Integration', zh: 'AI 集成' }
    ],
    collaborators: [],
    meta: {
      role: 'Founder & Product Designer',
      duration: 'Oct 2026 · MONEY TALKS Hackathon',
      team: 'Solo, with AI agents for code, copy and art',
      stack: 'Claude Code · Python · FastAPI · JavaScript · Vercel · Remotion',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #3F3480 0%, #6B5BC2 55%, #FF7AB6 100%)',
      subtitleGradient: 'linear-gradient(135deg, #6B5BC2 0%, #FF7AB6 100%)',
      underlineGradient: 'linear-gradient(135deg, #6B5BC2 0%, #FF7AB6 100%)',
      textHighlightColor: '#6B5BC2',
      darkColor: '#191A2B',
      lightColor: '#FF7AB6'
    },

    // overview 只放入口按钮;问题陈述在 The Problem
    overview: {
      buttons: [
        { label: 'Live Site', url: 'https://side-pocket-app.vercel.app', type: 'primary' },
        { label: 'GitHub', url: 'https://github.com/cqyestateyuki-prog/side-pocket', type: 'secondary' }
      ]
    },

    sections: [
      {
        id: 'the-problem',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: 'Keeping Track Became a Second Job',
        briefContent: '64 million Americans freelanced in 2023 (Upwork), and 18.5 million work as digital nomads (MBO Partners, 2025). Their income comes from many platforms, each with its own currency, schedule and fees. [[Tracking it, tax included, turns into a second job.]]',
        challenge: 'How might we make side income from every platform easy to track, tax included?',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          { src: '/media/projects/sidepocket/sections/problem.jpg', alt: 'Seven platform statements for one month', caption: 'One month of side income, written seven different ways.' }
        ]
      },

      {
        id: 'research',
        title: 'Research',
        sectionTag: 'Research',
        mainTitle: 'People Wanted Proof Before Tax',
        briefContent: 'I read Reddit threads from freelancers and creators and ranked seven pain points. The loudest was [[forms that did not match what landed]], with fees nobody could explain. So the ledger came first, with fees and tax in separate columns. Desk research only.',
        icon: '🔎'
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'Six Rounds of Iteration',
        icon: '🔁',
        // 六轮迭代收在一节里:每轮一两句 + 一行横向对比(showcases 自动编号 01-06)。block.text 不解析 [[ ]]
        showcases: [
          {
            title: 'Trust · The first version made up an exchange rate',
            text: 'PRISM by Block Convey, the hackathon\'s tracing tool, records each step an AI agent takes. In v1 the model did the math and, missing an exchange rate, borrowed another day\'s. I moved the math into code and made a missing rate stop the run: 72/81 became 89/89.',
            tabs: [
              { label: 'Iteration', image: '/media/projects/sidepocket/sections/06-prism-v1-invented-rate.jpg', alt: 'v1 trace using the wrong day\'s rate', caption: 'v1 prices an August 21 record at the August 20 rate. PRISM rated it accurate; my answer checker did not.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/07-prism-v2-refusal.jpg', alt: 'v2 trace stopping at the missing rate', caption: 'v2 stops and asks for the missing rate.' },
              { label: 'In the app', image: '/media/projects/sidepocket/sections/ask1.jpg', alt: 'Ask Tilly answer with agent steps', caption: 'Every number links to the step behind it.' }
            ]
          },
          {
            title: 'Colour · The ledger green clashed with the pigeon',
            text: 'Forest green suited a ledger but clashed with the pigeon. I swapped only the colour variables until the product and the bird matched.',
            tabs: [
              { label: 'Iteration 1', image: '/media/projects/sidepocket/sections/palette-a-forest.jpg', alt: 'Forest green Overview', caption: 'Forest green: steady, but wrong next to the pigeon.' },
              { label: 'Iteration 2', image: '/media/projects/sidepocket/sections/palette-d-pink.jpg', alt: 'Hot pink Overview', caption: 'Hot pink: playful, but not serious enough for money.' },
              { label: 'Iteration 3', image: '/media/projects/sidepocket/sections/palette-c-violet.jpg', alt: 'Electric violet Overview', caption: 'Electric violet: the right family, but too purple.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/palette-c2-soft.jpg', alt: 'Soft violet Overview', caption: 'Soft violet #6B5BC2 with pink, checked to WCAG AA.' }
            ]
          },
          {
            title: 'Tilly · The first pigeon still looked like Duolingo',
            text: 'I wanted a mascot that reacts to what happens in the product. The 3D drafts read as Duolingo and blurred at small sizes, so Tilly became a flat sticker with a pose for each state.',
            tabs: [
              { label: 'Iteration 1', image: '/media/projects/sidepocket/sections/tilly-1-3d-drafts.jpg', alt: 'Six 3D mascot drafts', caption: 'Inspired by Duolingo\'s owl and Pop Mart\'s blind-box toys. The round eyes still read as Duolingo.' },
              { label: 'Iteration 2', image: '/media/projects/sidepocket/sections/tilly-2-flat-sticker.jpg', alt: 'Flat sticker pigeon in four moods', caption: 'A flat sticker with crescent eyes, clear at 40 px. Four moods were not enough.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/04-tilly-poses.jpg', alt: 'Tilly pose candidates with picks outlined', caption: '16 poses picked from 29, one for each state.' },
              { label: 'App icon', image: '/media/projects/sidepocket/sections/logo-options.jpg', alt: 'Four app icon options', caption: 'The pigeon head became the app icon.' }
            ]
          },
          {
            title: 'Your data · How would anyone know the numbers were right?',
            text: 'After the pitch, someone asked how they could trust the numbers. Now you can use your own statements: they stay in your browser, accounts become four-digit labels, and the AI only sees totals.',
            tabs: [
              { label: 'Four-digit labels', image: '/media/projects/sidepocket/sections/mydata.jpg', alt: 'Imported statements with four-digit account labels', caption: 'Each account shows only as a four-digit label.' },
              { label: 'ECB rates', image: '/media/projects/sidepocket/sections/18-ledger-cny-ecb.jpg', alt: 'CNY ledger with ECB rate labels', caption: 'Every conversion shows its ECB rate and date.' }
            ]
          },
          {
            title: 'All side income · From a tax tool back to every gig',
            text: 'The hackathon demo was about tax. Version 1.4 turned it back to all side income: entries you add yourself, expenses, a monthly goal and milestone badges.',
            tabs: [
              { label: 'Iteration', image: '/media/projects/sidepocket/sections/palette-c2-soft.jpg', alt: 'Hackathon Overview', caption: 'The hackathon Overview led with tax.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/overview.jpg', alt: 'Overview in v1.4', caption: 'Income first, with the monthly goal.' },
              { label: 'Milestones', image: '/media/projects/sidepocket/sections/milestones.jpg', alt: 'Milestones', caption: '7 of 8 badges earned.' }
            ]
          },
          {
            title: 'Review · The shorter label said the opposite',
            text: 'Agents wrote the code and GPT-6 Astra the copy, so my job was review. One shortened label, "Highest fee share", meant the opposite of the original, so I reverted it. Screens lost extra text and buttons.',
            tabs: [
              { label: 'Ledger · before', image: '/media/projects/sidepocket/sections/14-ledger-before.jpg', alt: 'Ledger in kit v1.1' },
              { label: 'Ledger · now', image: '/media/projects/sidepocket/sections/ledger.jpg', alt: 'Ledger now' },
              { label: 'My data · before', image: '/media/projects/sidepocket/sections/12-mydata-before.jpg', alt: 'My data before the trim' },
              { label: 'My data · now', image: '/media/projects/sidepocket/sections/mydata-empty.jpg', alt: 'My data now' },
              { label: 'Tax · before', image: '/media/projects/sidepocket/sections/16-tax-before.jpg', alt: 'Tax before the copy pass' },
              { label: 'Tax · now', image: '/media/projects/sidepocket/sections/tax.jpg', alt: 'Tax now' }
            ]
          }
        ]
      },

      {
        id: 'outcome',
        title: 'Outcome',
        sectionTag: 'Outcome',
        mainTitle: 'Built in a Day, Checked Against 89 Answers',
        briefContent: 'Submitted to the MONEY TALKS hackathon in New York. v1.4 went live the same night. All data is fictional.',
        icon: '🚀',
        stats: [
          { value: '89/89', label: 'answers correct once the math moved into code, up from 72/81.' },
          { value: '73', label: 'design decisions logged in the kit.' },
          { value: '129', label: 'automated tests passing.' },
          { value: '1 day', label: 'from first commit to v1.4 live.' }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection',
        mainTitle: 'What I Learned',
        icon: '💭',
        columns: [
          { label: 'What I learned', text: 'With agents doing the building, my job was setting limits and reviewing. That review changed the architecture and caught a reversed label.' },
          { label: 'If I had more time', text: 'Test all eight statement formats against real exports, then connect the platforms that have APIs.' }
        ]
      }
    ]
  };
