// hexaedge
export const hexaedge = {
    id: 'hexaedge',
    year: '2026',
    featured: true, order: 2, // Selected Work · 第 2 位
    title: 'HexaEdge',
    subtitle: {
      en: 'Ancient Logic, Modern Signals',
      zh: '古法新用 · 六爻金融信号'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Programming'],
    tags: ['Product Design', 'Design Engineering', 'AI/LLM', 'Decision-support UX', 'Neo-Chinese Aesthetic', 'SaaS'],
    techTags: ['#Next.js 16', '#React 19', '#TypeScript', '#FastAPI', '#Claude Code', '#Figma', '#LLM API', '#RAG', '#pgvector', '#Embeddings'],

    thumbnail: '/media/projects/hexaedge/sections/s01-cover.png',
    brief: {
      en: 'Liuyao is a 3,000-year-old decision framework that was [[binary long before Leibniz]]. HexaEdge re-engineers it into a [[deterministic engine]] for reading a market or a personal call.',
      zh: '六爻是一套三千年的决策框架，[[比莱布尼茨更早用上二进制]]。HexaEdge 把它重建为一台[[确定性推理引擎]]，用来读一笔行情或一个人生决断。'
    },
    heroImage: '/media/projects/hexaedge/sections/s01-cover.png',
    heroVideo: null,

    // domain[0] 会渲染成首页项目卡上的标签(Showcase.jsx)，所以第一项写"这是什么领域的产品"，
    // 技术架构退到第二项。Symbolic AI 是学术术语，招聘方多半不认识，换成同样准确但人人看得懂的说法。
    domain: [
      { en: 'Decision-support SaaS', zh: '决策辅助 SaaS' },
      { en: 'Deterministic Engine × LLM', zh: '确定性引擎 × 大模型' },
      { en: 'Cultural Tech · B2C', zh: '文化科技 · B2C' }
    ],
    form: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Design Engineering', zh: '设计工程' },
      { en: 'AI Integration', zh: 'AI 集成' },
      { en: 'Visual System', zh: '视觉体系' }
    ],
    collaborators: [],
    meta: {
      duration: '2026 – Present',
      team: 'Solo',
      role: 'Product Designer & Design Engineer',
      stack: 'Figma · Claude Code · Next.js 16 · React 19 · TypeScript · FastAPI · RAG + LLM',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #14233A 0%, #243E66 50%, #9C7A3A 100%)',
      subtitleGradient: 'linear-gradient(135deg, #243E66 0%, #9C7A3A 100%)',
      underlineGradient: 'linear-gradient(135deg, #9C7A3A 0%, #A8392E 100%)',
      textHighlightColor: '#243E66',
      darkColor: '#14233A',
      lightColor: '#9C7A3A'
    },

    overview: {
      // 正文与 challenge 已移走:TL;DR 在 hero 说清"是什么",challenge 移到 The Problem 做开场。
      // 这里只保留产品大图下的入口按钮和 Why I'm building this。
      buttons: [
        { label: 'Live Site', url: 'https://hexaedge.vercel.app', type: 'primary' },
        { label: 'GitHub', url: 'https://github.com/cqyestateyuki-prog/LiuyaoSaaSProject', type: 'secondary' }
      ],
      // Why I'm building this(hero meta 之下)+ 六爻线条母题(新中式鎏金)
      whyIBuild: 'HexaEdge started as a quant decision system I built for my own calls, and AI and vibe coding are what let me take it from [[a tool for one person to a product anyone can use]].',
      whyIBuildHexagram: [1, 0, 1, 1, 0, 1], // 1=阳(整) 0=阴(断),自下而上
      whyIBuildHexagramColor: '#F2F6F7', // 六爻线条颜色(近白,压在深色 hero 上)
      whyIBuildHexagramLabel: '古法新用'
    },

    sections: [
      {
        id: 'the-provocation',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: 'Legacy Usability Crisis',
        briefContent: 'Look up traditional I Ching divination today and you land on a web page that has not been touched since the 2000s: dense tables, unexplained jargon, a layout that fights you. [[The interface is what makes a rigorous logic system read as superstition]]. HexaEdge removes that [[visual friction]] so the logic underneath can be seen.',
        challenge: 'How might we carry a rigorous 3,000-year-old framework into a modern financial product without losing its logic, and without it reading as superstition to a generation that has only ever seen the ritual?',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s02-provocation.png',
            alt: 'Outdated Liuyao tools versus the HexaEdge redesign',
            caption: 'Left: the category today, a mess of dated layouts and jargon. Right: HexaEdge, method over magic.'
          }
        ]
      },

      {
        id: 'market-opportunity',
        title: 'Market & Opportunity',
        sectionTag: 'Market & Opportunity',
        mainTitle: 'The Intersection of Two Appetites',
        briefContent: 'The same young person carries two appetites: [[the deep emotional need for clarity]] and [[the high-stakes thrill of financial trading]]. They turn to traditional tools for mindfulness, then navigate modern markets with aggressive speculation.\n\nUnderneath both appetites sits [[a market worth hundreds of billions]], and no one is [[building it with taste]]. I bridge that gap through design.',
        icon: '📈',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s05-market-appetites.png',
            alt: 'Divination revival meets speculation appetite',
            caption: 'Two appetites rising together: the seeker\'s need for narrative and the speculator\'s appetite for probability.'
          },
          {
            src: '/media/projects/hexaedge/sections/s06-market-tam.png',
            alt: 'Market sizing: spiritual, astrology, and Chinese-astrology TAM',
            caption: 'A global market, fatally underserved. The Chinese-astrology vertical alone is scaling at 43.7% CAGR.'
          }
        ]
      },

      {
        id: 'highlights',
        title: 'Project Highlights',
        sectionTag: 'Project Highlights',
        mainTitle: 'A Generational Leap in UI/UX',
        icon: '✨',
        imageDisplayMode: 'alternating',
        content: [
          'AI divination apps have never had an interface worth looking at. [[HexaEdge is the first time Liuyao gets used to read a market as well as a fortune.]]',
          'Their visual language is generic chat boxes and cliché mysticism. I dropped both. Readings render as visual signals rather than paragraphs: the hexagram as a board you can actually read, moving lines laid on a calendar timeline, momentum as a chart. [[The design is what makes an ancient method feel like a tool instead of magic.]]'
        ],
        images: [
          {
            src: '/media/projects/hexaedge/sections/s03-highlights.png',
            alt: 'Six core HexaEdge product screens',
            caption: 'Six core surfaces from the shipped product, unified by one design system.'
          },
          {
            src: '/media/projects/hexaedge/sections/s04-competitive.png',
            alt: 'Competitive landscape of AI fortune and divination products',
            caption: 'The field everyone else crowds: cliché mysticism and generic chat boxes. Nobody serves Liuyao × equity trading with premium design.'
          }
        ]
      },

      {
        id: 'design-philosophy',
        title: 'Design System',
        sectionTag: 'Design System & Philosophy',
        mainTitle: 'Materializing Warmth, Coding Meaning',
        briefContent: 'Traditional SaaS feels cold and impersonal, with no temperature to it. HexaEdge draws its palette from jade and blue-and-white porcelain instead, classical Eastern colors that feel elegant and smooth to the touch, and that carry [[an energy meant to support you]].\n\nJade canvases, celadon depths, and ink-black typography build the foundation, but their true purpose is semantic. Rooted in the Five Elements, cinnabar reads as bullish momentum, while celadon maps bearish shifts. By aligning cultural intuition with financial logic, cognitive load vanishes: [[the color you feel is the exact signal you read.]]',
        icon: '🎨',
        link: {
          label: 'View the UI Kit',
          url: '/hexaedge-ui-kit/index.html',
        },
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s07-palette.png',
            alt: 'The tactile minerals palette: jade, celadon, porcelain blue, ink',
            caption: 'Ancient materials → digital tokens: a warm, tactile minerals palette.'
          },
          {
            src: '/media/projects/hexaedge/sections/s08-elements.png',
            alt: 'Signals and Five-Element color semantics',
            caption: 'The same materials carry meaning: bull, bear, and pivot signals mapped onto the Five Elements.'
          }
        ]
      },

      {
        id: 'information-architecture',
        title: 'User Flow',
        sectionTag: 'User Flow',
        mainTitle: 'The Flow Used to Stop at the Answer',
        briefContent: 'Normally, users would cast a hexagram, read the result, and still have no idea where it came from. [[So I added an AI Consultant on top of the deterministic engine.]] Users can ask why a line moves, what an elemental clash means, or how the changing hexagram affects the answer. Read gives the result; Ask helps users understand it.',
        icon: '🧭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s09-user-flow.png',
            alt: 'Cast, Board, Read, Ask: the four-step flow, with Ask added in the second iteration',
            caption: 'Cast → Board → Read → Ask. The fourth step was not in v1; it exists because people needed to interrogate the reading, not just receive it.'
          }
        ]
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'Systemic Iterations: Copy, Voice, and Flow',
        icon: '🔁',
        // 一段配一张图,不要正文堆完再堆图(alternating 走 AlternatingDisplay,支持 [[高亮]])
        imageDisplayMode: 'alternating',
        content: [
          '**Copy.** Every fixed-fate verdict came out. Each conclusion was rewritten as an active description of where the momentum is heading, which [[returns the decision to the user]] and keeps the product inside the compliance line of the markets I want to ship in.',
          '**Voice.** One engine, three registers. A trader keeps the terminology intact, with every term mapped to an observable market behaviour. A first-time user gets the same quantitative result in plain language. A personal wealth reading gets a counsellor working through one sustained metaphor, because [[the reading only works if the person understands it]].',
          '**Flow.** An expert-only ritual became a guided onboarding conversation. The front end turns a situation described in the user\'s own words into the parameters the engine needs, and [[each step exposes only the questions that belong to it]].'
        ],
        images: [
          {
            src: '/media/projects/hexaedge/sections/s10-iteration.png',
            alt: 'Rewriting verdicts into momentum language',
            caption: 'From verdict to momentum: the same reading, reframed to keep agency with the user.'
          },
          {
            src: '/media/projects/hexaedge/sections/voice-registers.png',
            alt: 'The same engine result written three ways: practitioner, first-timer, personal reading',
            caption: 'One structured result, three system prompts. Audience is a design decision, not a tone setting.'
          },
          {
            src: '/media/projects/hexaedge/sections/iteration-casting.png',
            alt: 'Before and after: a three-step casting form rebuilt as a guided conversation',
            caption: 'The form assumed the vocabulary. The conversation supplies it, one step at a time.'
          }
        ]
      },

      {
        id: 'ai-ux',
        title: 'AI Engineering',
        sectionTag: 'AI Engineering',
        mainTitle: 'The Engine Decides, the Model Explains',
        briefContent: 'The engine computes direction, timing and confidence in TypeScript, and the model never decides any of it. The [[LLM]] does the writing, in the voice that fits whoever is reading, grounded by [[RAG]] over the 64-hexagram [[knowledge base]]. The [[prompt is versioned]], [[guardrails]] scan every generation, and a [[golden eval set]] of 10 cases scores the output for compliance and faithfulness. Every cast is stored and labelled with what actually happened, so the corpus grows with use.',
        icon: '⚙️',
        link: {
          label: 'Open full view',
          url: '/hexaedge-knowledge-graph/index.html',
        },
        // 知识图谱直接在页内跑,不跳转。默认不吃鼠标,点一下才可拖拽/缩放/搜索。
        embed: {
          src: '/hexaedge-knowledge-graph/index.html',
          title: 'HexaEdge signal knowledge graph',
          ratio: '16 / 10',
          activateLabel: 'Click to explore the graph',
          caption: '66 cases, 109 signals, 333 links, generated from the case archive. Gold nodes are signals; cases are coloured by timeframe. Outcomes stay in the private copy.'
        },
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/ai-engineering.png',
            alt: 'Request path: deterministic engine, RAG retrieval, LLM generation, guardrail scan',
            caption: 'One request, four stages, plus the three things that keep the output honest.'
          },
          {
            src: '/media/projects/hexaedge/sections/ai-ux.png',
            alt: 'The prompt as an engineering artifact: ban-list, output contract, evaluation',
            caption: 'The prompt is versioned like code, from V1 "answer the fate" to V3 "describe the momentum."'
          }
        ]
      },

      {
        id: 'outcome',
        title: 'Outcome',
        sectionTag: 'Outcome',
        mainTitle: 'Design to Deploy, No Handoff',
        briefContent: 'Someone finds a hexagram page through Google, signs up, casts three coins, reads what comes back, hits a tier gate, pays, and leaves with a full PDF report. [[Every step of that is a screen I drew and a route I wrote]], including the parts that normally get handed off: [[auth]], the [[entitlement and credit ledger]] behind four pricing tiers, [[i18n]] down to the AI output itself, and the [[SEO]] content hub, structured data included, that brought them in.',
        icon: '🚀',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s12-outcome.png',
            alt: 'Shipped outcome: four-tier pricing and productized system',
            caption: 'Membership, entitlements, i18n, and export: a productized system, not a prototype.'
          }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection & Next Steps',
        mainTitle: 'The Counsellor and the Fortune-Teller',
        briefContent: 'What separates a counsellor from a fortune-teller is the question I keep coming back to. The fortune-teller keeps score on being right; the counsellor leaves you understanding your own situation better than when you walked in. [[The second one is the harder product to build]], and most of the difficulty is language: getting an AI to talk to a person so it feels like being helped rather than being told.\n\nNext: extending retrieval from the classical texts to the case archive itself, and putting the thing in front of people who have never cast a hexagram.',
        icon: '💭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s13-reflection.png',
            alt: 'Closing statement: the compliance line set the brief',
            caption: 'Where the constraint landed: stop predicting, start describing.'
          }
        ]
      }
    ]
  };
