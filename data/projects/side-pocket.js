// side-pocket
// 事实出处:Side Pocket 仓库 docs/case_study_facts.md(每条都对过代码和 git log)。
// 所有账户和金额都是虚构的示例数据(Moon Spirit、Lena Koch),正文里也写明了。
export const sidePocket = {
    id: 'side-pocket',
    year: '2026',
    featured: true, order: 4, // Selected Work · 第 4 位
    title: 'Side Pocket',
    subtitle: 'A Global Side-Income Ledger with a Tax Layer',
    categories: ['AI', 'Product Design', 'UIUX', 'Design System'],
    tags: ['Product Design', 'Design Engineering', 'Fintech', 'AI Agents', 'Mascot Design', 'Design System'],
    techTags: ['#Claude Code', '#Python', '#FastAPI', '#JavaScript', '#LLM Tool Use', '#Remotion', '#Vercel'],

    thumbnail: '/media/projects/sidepocket/cover.png',
    brief: 'Side income from global platforms shrinks on its way to the bank. Side Pocket puts statements from eight platforms into [[one ledger]] and [[links each number to the step that produced it]].',
    heroImage: '/media/projects/sidepocket/cover.png',
    // 作品集短片(61 秒,有声,Remotion 做的,按配乐 134 BPM 卡点)。16MB,moov 在前。
    heroVideo: '/media/projects/sidepocket/side-pocket-film.mp4',

    // domain[0] 是首页卡片上的标签
    domain: [
      { en: 'Personal Finance', zh: '个人财务' },
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
        mainTitle: 'The Money Shrinks Before It Lands',
        briefContent: 'Moon Spirit, the fictional New York designer in my sample account, is paid by seven platforms in two currencies. Every statement has its own date format and its own fee columns, and the amount changes several times before it reaches her bank. [[At the end of the month she cannot say what she actually kept.]]',
        challenge: 'How might we show people what they kept from every platform they earn on, and let them check each number instead of taking it on trust?',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/sidepocket/sections/problem-statements.jpg',
            alt: 'Seven platform statements in seven formats',
            caption: 'Seven of her September statements. The date format and the fee columns change with every platform.'
          },
          {
            src: '/media/projects/sidepocket/sections/problem-breakdown.jpg',
            alt: 'Gross to net for September across seven platforms',
            caption: 'Her September across seven platforms, from gross down through the fees. The last bar is the question.'
          }
        ]
      },

      {
        id: 'research',
        title: 'Research',
        sectionTag: 'Research',
        mainTitle: 'People Wanted Proof Before Tax',
        briefContent: 'My starting brief was an AI income manager that would work out tax for creators paid by Chinese and US platforms. Before designing anything, I read public Reddit threads from freelancers and creators and ranked seven pain points. Tax owed was not at the top. The loudest complaint was [[forms that did not match what landed]]: a 1099-K counting the platform\'s commission as income, PayPal reporting the same money a second time. One Fiverr seller counted more than $12,000 in fees over two years with nothing documenting them, and Upwork users called the service fee "tax".\n\nSo the ledger came first, with [[fees and withholding in separate columns]], and tax became a layer on top. I also widened the audience to anyone earning through global platforms. This was one day of desk research, and I did not interview anyone.',
        icon: '🔎'
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'Six Rounds of Iteration',
        icon: '🔁',
        // 六轮迭代收在一节里:每轮一段话 + 一行横向对比(showcases 自动编号 01-06)。block.text 不解析 [[ ]]
        showcases: [
          {
            title: 'Trust · The first version made up an exchange rate',
            text: 'The hackathon asked every team to build on PRISM by Block Convey, a tracing tool that records each step an AI agent takes, so I could reopen any run and see where it went wrong. In v1 the model read raw CSV exports and did the arithmetic itself. It got 72 of 81 reference questions right, and six of the nine misses had one cause: an exchange rate was missing, and the model quietly used a nearby day\'s rate instead. So the arithmetic moved into code, the model only calls tools and explains, and a missing rate now stops the run. v2 scored 89 of 89.',
            tabs: [
              { label: 'Iteration', image: '/media/projects/sidepocket/sections/06-prism-v1-invented-rate.jpg', alt: 'v1 trace using the wrong day\'s rate', caption: 'v1 in PRISM gives a fluent answer for Lena Koch\'s August on Freelancer.com. However, it priced an August 21 record at the August 20 rate. PRISM\'s own analysis rated the arithmetic accurate, and only my reference-answer checker caught it.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/07-prism-v2-refusal.jpg', alt: 'v2 trace stopping at the missing rate', caption: 'v2 stops at the missing EUR rate for August 21 and asks for it.' },
              { label: 'In the app', image: '/media/projects/sidepocket/sections/ask1.jpg', alt: 'Ask Tilly answer with agent steps', caption: 'Every number in Tilly\'s answer links to the step that produced it.' }
            ]
          },
          {
            title: 'Colour · The ledger green clashed with the pigeon',
            text: 'Kit v1 took its form from Linktree, in forest green with lime. It felt steady enough for a ledger and looked out of place next to the lilac and pink pigeon, so I kept one prototype and swapped only the colour variables until the product and the bird agreed, then fixed contrast to WCAG AA.',
            tabs: [
              { label: 'Iteration 1', image: '/media/projects/sidepocket/sections/palette-a-forest.jpg', alt: 'Forest green Overview', caption: 'Forest green #1F4B2C with lime. Steady and trustworthy like a ledger. However, it looked out of place next to the pink and lilac pigeon.' },
              { label: 'Iteration 2', image: '/media/projects/sidepocket/sections/palette-d-pink.jpg', alt: 'Hot pink Overview', caption: 'Hot pink #D6246E as the main colour, the most Pop Mart of the set. However, big pink blocks behind money figures might not look serious enough.' },
              { label: 'Iteration 3', image: '/media/projects/sidepocket/sections/palette-c-violet.jpg', alt: 'Electric violet Overview', caption: 'Electric violet #5B2BD6 with pink. Creative without losing professionalism, and the closest match to the pigeon. However, it was the most purple of all.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/palette-c2-soft.jpg', alt: 'Soft violet Overview', caption: 'Soft violet #6B5BC2: still violet, with less saturation and closer to a designer toy. WCAG AA fixes then took text on violet to 4.71:1, metadata to 5.21:1 and pink text to 5.22:1.' }
            ]
          },
          {
            title: 'Tilly · The first pigeon still looked like Duolingo',
            text: 'I wanted a mascot that reacts to what happens in the product, from a new payout to a missing exchange rate. The 3D toy pigeons still read as Duolingo and would not hold up as a 40 px avatar, so I closed the eyes into crescents, redrew the bird as a flat sticker and gave each state of the product its own pose.',
            tabs: [
              { label: 'Iteration 1', image: '/media/projects/sidepocket/sections/tilly-1-3d-drafts.jpg', alt: 'Six 3D mascot drafts', caption: 'Two references: Duolingo\'s owl, a character that reacts to what you do, and Pop Mart\'s blind-box toys, chubby and pastel. An owl was too close to Duolingo, so I drew a carrier pigeon with a coin bag and a map scarf, and tried round eyes, crescent eyes, a worried face, dot eyes, round glasses and a globe chick. However, the round eyes still read as Duolingo, and a 3D render would not read at small UI sizes.' },
              { label: 'Iteration 2', image: '/media/projects/sidepocket/sections/tilly-2-flat-sticker.jpg', alt: 'Flat sticker pigeon in four moods', caption: 'The pigeon as a flat sticker with closed crescent eyes, in its first four moods: wave, think, worried and celebrate. It reads at 40 px. However, four moods could not cover income and rewards.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/04-tilly-poses.jpg', alt: 'Tilly pose candidates with picks outlined', caption: '16 poses picked from 29, each with a place in the product: a laptop while the agent works, an envelope when the answer arrives, a different pose on each milestone badge.' },
              { label: 'App icon', image: '/media/projects/sidepocket/sections/logo-options.jpg', alt: 'Four app icon options', caption: 'Four icon options. The pigeon head on violet became the app icon, and the folded-map bird is kept on file as a possible brand mark.' }
            ]
          },
          {
            title: 'Your data · How would anyone know the numbers were right?',
            text: 'After the pitch, someone asked how a user would know the AI\'s numbers were right, so I let people try it on their own statements, privately. Statements stay in the browser, account IDs become four-digit labels before upload, and the model only sees the question and computed totals.',
            tabs: [
              { label: 'Four-digit labels', image: '/media/projects/sidepocket/sections/mydata.jpg', alt: 'Imported statements with four-digit account labels', caption: 'Seven imported statements. Each account appears only as a four-digit label.' },
              { label: 'ECB rates', image: '/media/projects/sidepocket/sections/18-ledger-cny-ecb.jpg', alt: 'CNY ledger with ECB rate labels', caption: 'Every converted amount carries its ECB rate and the date of that rate.' }
            ]
          },
          {
            title: 'All side income · From a tax tool back to every gig',
            text: 'The hackathon demo centred on tax. That evening I went back to the broader purpose, seeing every source of side income, and v1.4 added income and expenses you enter yourself, a kept-after-expenses total, a monthly goal and milestone badges computed from the ledger. The goal counts net income and kept after expenses is a smaller number, so each carries its own label.',
            tabs: [
              { label: 'Iteration', image: '/media/projects/sidepocket/sections/palette-c2-soft.jpg', alt: 'Hackathon Overview', caption: 'The hackathon Overview. However, it led with tax: what to set aside and the next US estimated-tax date.' },
              { label: 'Solution', image: '/media/projects/sidepocket/sections/overview.jpg', alt: 'Overview in v1.4', caption: 'Income first: net income, the goal reached on Sep 28, income by source and expenses.' },
              { label: 'Milestones', image: '/media/projects/sidepocket/sections/milestones.jpg', alt: 'Milestones', caption: '7 of 8 badges, each with its own Tilly pose and the date it was earned.' }
            ]
          },
          {
            title: 'Review · The shorter label said the opposite',
            text: 'Claude Code agents built the screens and GPT-6 Astra wrote the copy, so this round was review. All 137 UI strings went back through Astra with a plain-copy guide, and in that pass "keeps the most" became "Highest fee share", the opposite meaning, so I reverted it. The screens lost extra text and buttons, filters moved into the column headers, and real platform marks replaced colour dots.',
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
        briefContent: 'I submitted Side Pocket, then called Side Atlas, to the MONEY TALKS hackathon in New York in the Money Operations track, and v1.4 went live the same night. Every account in it is fictional. The scores come from 12 made-up creators across July to September 2026, so they show how the system behaves on controlled inputs, and they do not prove it reads every real export.\n\nI worked kit-first. The spec and the prototype were signed off before any UI code, and [[every visual ruling went into a decision log]] that the coding agents worked from.\n\nThe film at the top is built in Remotion from captures of the live screens and cut to the beat of its music.',
        icon: '🚀',
        stats: [
          { value: '89/89', label: 'reference questions right once the math moved into code, up from 72 of 81.' },
          { value: '73', label: 'design decisions logged in the kit, behind a 47-page spec.' },
          { value: '122', label: 'automated tests passing before v1.4 added more.' },
          { value: '1 day', label: 'from the first commit at 11:43 to v1.4 live that night.' }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection',
        mainTitle: 'What I Learned',
        icon: '💭',
        columns: [
          { label: 'What I learned', text: 'With agents writing the code and the copy, my job was setting the limits and reviewing the output. That review changed the calculation architecture and caught a label that reversed a metric.' },
          { label: 'If I had more time', text: 'I would test all eight statement formats against real exports first, then connect the platforms that offer APIs and add bank matching.' }
        ]
      }
    ]
  };
