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
    categories: ['AI', 'Product Design', 'UIUX'],
    tags: ['Product Design', 'Design Engineering', 'AI/LLM', 'Decision-support UX', 'Neo-Chinese Aesthetic', 'SaaS'],
    techTags: ['#Next.js 16', '#React 19', '#TypeScript', '#FastAPI', '#Claude Code', '#Figma', '#LLM API', '#RAG', '#pgvector', '#Embeddings'],

    thumbnail: '/media/projects/hexaedge/sections/s01-cover.png',
    brief: {
      en: 'Liuyao is a 3,000-year-old decision framework that was [[binary long before Leibniz]]. HexaEdge re-engineers it into a [[deterministic engine]] for reading a market or a personal call.',
      zh: '六爻是一套三千年的决策框架，[[比莱布尼茨更早用上二进制]]。HexaEdge 把它重建为一台[[确定性推理引擎]]，用来读一笔行情或一个人生决断。'
    },
    heroImage: '/media/projects/hexaedge/sections/s01-cover.png',
    // 宣传片(50s,有声)。首页碎片墙:悬停静音起播 / 点击有声播放,播完碎开成案例页;详情页主图也用它。
    // 用的是 ffmpeg 压过的网页版(12.8MB, faststart),原片 promo-en.mp4 留着不动。
    heroVideo: '/media/projects/hexaedge/videos/promo-en-web.mp4',

    // 首页碎片墙折叠态:底图用抠掉罗盘的那版,罗盘单独叠一层慢慢转。
    // 位置是拿原封面和这张底图做差分量出来的 —— 盘在封面上圆心 (3220,210)、半径约 1000,
    // 换算成相对 3840×2160 的百分比。盘被画布右上角裁掉一块,转起来那块会露出来,正常。
    // 数值都是相对量,所以容器多大都对得上(折叠态容器锁死 16:9,和封面同比例)
    heroCompose: {
      base: '/media/projects/hexaedge/hero/s01-cover-base.png',
      spin: {
        src: '/media/projects/hexaedge/hero/bagua.png',
        size: '72%',      // 盘 PNG 显示宽度 / 封面宽度
        left: '83.9%',
        top: '9.7%',
        duration: '28s',
      },
    },

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
        { label: 'Live Site', url: 'https://hexaedge.co', type: 'primary' },
        { label: 'GitHub', url: 'https://github.com/cqyestateyuki-prog/LiuyaoSaaSProject', type: 'secondary' }
      ],
      // Why I'm building this(hero meta 之下)+ 六爻线条母题(新中式鎏金)
      whyIBuild: {
        en: 'HexaEdge started as a quant decision system I built for my own calls, and AI and vibe coding are what let me take it from [[a tool for one person to a product anyone can use]].',
        zh: 'HexaEdge 最早是我给自己做决策用的量化系统，是 AI 和 vibe coding 让我把它从[[一个人的工具变成谁都能用的产品]]。'
      },
      whyIBuildHexagram: [1, 0, 1, 1, 0, 1], // 1=阳(整) 0=阴(断),自下而上
      whyIBuildHexagramColor: '#F2F6F7', // 六爻线条颜色(近白,压在深色 hero 上)
      whyIBuildHexagramLabel: '古法新用'
    },

    sections: [
      {
        id: 'the-provocation',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: {
          en: 'Legacy Usability Crisis',
          zh: '老界面的可用性危机'
        },
        briefContent: {
          en: 'Look up traditional I Ching divination today and you land on a web page that has not been touched since the 2000s: dense tables, unexplained jargon, a layout that fights you. [[The interface is what makes a rigorous logic system read as superstition]]. HexaEdge removes that [[visual friction]] so the logic underneath can be seen.',
          zh: '今天你去搜传统的易经占卜，打开的多半是一个二十年没动过的网页：密密麻麻的表格，没人解释的术语，处处跟你作对的版式。[[让一套严谨的推演体系看着像迷信的，是界面]]。HexaEdge 把这层[[视觉阻力]]拿掉，底下的逻辑才露得出来。'
        },
        challenge: {
          en: 'How might we carry a rigorous 3,000-year-old framework into a modern financial product without losing its logic, and without it reading as superstition to a generation that has only ever seen the ritual?',
          zh: '如何把一套三千年的严谨框架搬进现代金融产品，既不丢掉底下的推演逻辑，也不让只见过它仪式那一面的年轻人把它当成迷信？'
        },
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s02-provocation.png',
            alt: 'The Design Challenge',
            caption: {
              en: 'Left: the category today, a mess of dated layouts and jargon. Right: HexaEdge, method over magic.',
              zh: '左边是这个品类现在的样子，过时的版式加满屏术语。右边是 HexaEdge，讲方法，不讲玄学。'
            }
          }
        ]
      },

      {
        id: 'market-opportunity',
        title: 'Market & Opportunity',
        sectionTag: 'Market & Opportunity',
        mainTitle: {
          en: 'The Intersection of Two Appetites',
          zh: '两种胃口的交汇处'
        },
        briefContent: {
          en: 'The same young person carries two appetites: [[the deep emotional need for clarity]] and [[the high-stakes thrill of financial trading]]. They turn to traditional tools for mindfulness, then navigate modern markets with aggressive speculation.\n\nUnderneath both appetites sits [[a market worth hundreds of billions]], and no one is [[building it with taste]]. I bridge that gap through design.',
          zh: '同一个年轻人身上装着两种胃口：[[想把事情看清楚的情绪需求]]，和[[在市场上下重注的那点刺激]]。他们一边用传统方术求个心安，一边在现代市场里激进投机。\n\n两种胃口底下压着[[一个几千亿的市场]]，却[[没人把它做得有品位]]。这道缝，我用设计来接。'
        },
        icon: '📈',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s05-market-appetites.png',
            alt: 'Market & Opportunities',
            caption: {
              en: 'Two appetites rising together: the seeker\'s need for narrative and the speculator\'s appetite for probability.',
              zh: '两条曲线一起往上走：求解的人要一个说法，投机的人要一个概率。'
            }
          },
          {
            src: '/media/projects/hexaedge/sections/s06-market-tam.png',
            alt: 'Market Sizing',
            caption: {
              en: 'A global market, fatally underserved. The Chinese-astrology vertical alone is scaling at 43.7% CAGR.',
              zh: '全球盘子够大，却几乎没人好好服务。光是中式命理这一条线，年复合增长率就有 43.7%。'
            }
          }
        ]
      },

      {
        id: 'highlights',
        title: 'Project Highlights',
        sectionTag: 'Project Highlights',
        mainTitle: {
          en: 'A Generational Leap in UI/UX',
          zh: 'UI/UX 上的一次代际跨越'
        },
        icon: '✨',
        imageDisplayMode: 'alternating',
        content: [
          {
            en: 'AI divination apps have never had an interface worth looking at. [[HexaEdge is the first time Liuyao gets used to read a market as well as a fortune.]]',
            zh: 'AI 占卜类产品从来没有一个界面值得看第二眼。[[六爻第一次不只用来算命，还用来读盘。]]'
          },
          {
            en: 'Their visual language is generic chat boxes and cliché mysticism. I dropped both. Readings render as visual signals rather than paragraphs: the hexagram as a board you can actually read, moving lines laid on a calendar timeline, momentum as a chart. [[The design is what makes an ancient method feel like a tool instead of magic.]]',
            zh: '它们的视觉语言无非是通用聊天框加俗套的神秘感，这两样我都不要。解读不写成段落，而是画成信号：卦象排成一张看得懂的盘，动爻落在日历时间轴上，势画成一条曲线。[[让一套古法用起来像工具而不是法术的，是设计。]]'
          }
        ],
        images: [
          {
            src: '/media/projects/hexaedge/sections/s03-highlights.png',
            alt: 'Project Highlights',
            caption: {
              en: 'Six core surfaces from the shipped product, unified by one design system.',
              zh: '上线产品里的六个核心界面，共用同一套设计系统。'
            }
          },
          {
            src: '/media/projects/hexaedge/sections/s04-competitive.png',
            alt: 'Competitive Landscape',
            hideInGallery: true, // 案例里留着,首页碎片墙不占格
            caption: {
              en: 'The field everyone else crowds: cliché mysticism and generic chat boxes. Nobody serves Liuyao × equity trading with premium design.',
              zh: '别人都挤在同一块地方：俗套的神秘感加通用聊天框。六爻 × 股票交易这一格，没人用像样的设计做过。'
            }
          }
        ]
      },

      {
        id: 'design-philosophy',
        title: 'Design System',
        sectionTag: 'Design System & Philosophy',
        mainTitle: {
          en: 'Materializing Warmth, Coding Meaning',
          zh: '让颜色有温度，也有含义'
        },
        briefContent: {
          en: 'Traditional SaaS feels cold and impersonal, with no temperature to it. HexaEdge draws its palette from jade and blue-and-white porcelain instead, classical Eastern colors that feel elegant and smooth to the touch, and that carry [[an energy meant to support you]].\n\nJade canvases, celadon depths, and ink-black typography build the foundation, but their true purpose is semantic. Rooted in the Five Elements, cinnabar reads as bullish momentum, while celadon maps bearish shifts. By aligning cultural intuition with financial logic, cognitive load vanishes: [[the color you feel is the exact signal you read.]]',
          zh: '一般 SaaS 的界面又冷又没人味，是没有温度的。HexaEdge 的配色改从玉石和青花瓷里取，东方古典的那几种颜色，看着体面，摸上去也顺，还带着[[一股托着你的气]]。\n\n玉色打底，青瓷压深，墨黑排字，这套颜色真正的用处却在语义上。按五行分，朱砂是上行的势，青瓷是转弱的方向。文化直觉和金融逻辑对上了，人就不用多想一步：[[你感觉到的颜色，就是你读到的信号。]]'
        },
        icon: '🎨',
        link: {
          label: {
            en: 'View the UI Kit',
            zh: '查看 UI Kit'
          },
          url: '/hexaedge-ui-kit/index.html',
        },
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s07-palette.png',
            alt: 'Color Palette',
            caption: {
              en: 'Ancient materials → digital tokens: a warm, tactile minerals palette.',
              zh: '从古物取材到数字 token：一套有温度、摸得着质感的矿物色。'
            }
          },
          {
            src: '/media/projects/hexaedge/sections/s08-elements.png',
            alt: 'Color Semantics',
            caption: {
              en: 'The same materials carry meaning: bull, bear, and pivot signals mapped onto the Five Elements.',
              zh: '同一批材质也担着含义：涨、跌、转折三种信号对到五行上。'
            }
          }
        ]
      },

      {
        id: 'information-architecture',
        title: 'User Flow',
        sectionTag: 'User Flow',
        mainTitle: {
          en: 'The Flow Used to Stop at the Answer',
          zh: '以前的流程，到答案就停了'
        },
        briefContent: {
          en: 'Normally, users would cast a hexagram, read the result, and still have no idea where it came from. [[So I added an AI Consultant on top of the deterministic engine.]] Users can ask why a line moves, what an elemental clash means, or how the changing hexagram affects the answer. Read gives the result; Ask helps users understand it.',
          zh: '原来的路径是起一卦，看结果，然后完全不知道这结果从哪来。[[所以我在确定性引擎上面加了一位 AI 顾问]]。用户可以追问某一爻为什么动、五行相冲是什么意思、变卦又怎么改写答案。Read 给结果，Ask 让人看懂结果。'
        },
        icon: '🧭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s09-user-flow.png',
            alt: 'User Flow',
            caption: {
              en: 'Cast → Board → Read → Ask. The fourth step was not in v1; it exists because people needed to interrogate the reading, not just receive it.',
              zh: '起卦 → 排盘 → 解读 → 追问。第四步 v1 里没有，加它是因为人拿到解读之后还要往下问，光给一个结果不够。'
            }
          }
        ]
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: {
          en: 'Two Things the First Build Got Wrong',
          zh: '第一版做错的两件事'
        },
        icon: '🔁',
        // 一段配一张图,不要正文堆完再堆图(alternating 走 AlternatingDisplay,支持 [[高亮]])
        imageDisplayMode: 'alternating',
        content: [
          {
            en: 'The old screen forced users to fill out a complex form before asking a question. It required them to already know Liuyao, which most of my users didn\'t. To fix this, I replaced the form with [[a single text box]]. Now, the app asks one plain question and guides users through a natural conversation instead.',
            zh: '旧界面要求用户先填完一张复杂表单才能提问，等于默认对方已经懂六爻，可我的用户大多不懂。我把表单换成了[[一个输入框]]。现在产品先问一句大白话，再顺着对话把人带下去。'
          },
          {
            en: 'A verdict is exactly what people arrive wanting, and it is the one thing I cannot ship. So every fixed-fate sentence came out, and each conclusion was rewritten as a description of where the momentum is heading. [[The decision goes back to the user]], and the product stays inside the compliance line of the markets I want to sell in.',
            zh: '人来这儿要的就是一句准话，而这句准话恰恰是我不能给的。所以凡是把结果说死的句子全删了，结论重写成势往哪个方向走。[[决定权还给用户]]，产品也就守在了目标市场的合规线以内。'
          }
        ],
        images: [
          {
            src: '/media/projects/hexaedge/sections/s10-iteration-2.png',
            alt: 'AI-native Design',
            caption: {
              en: 'One screen now does the work the form and its instruction page used to split between them.',
              zh: '以前要一张表单加一页说明才办完的事，现在一屏就够。'
            }
          },
          {
            src: '/media/projects/hexaedge/sections/s10-iteration.png',
            alt: 'De-Verdict',
            caption: {
              en: 'Same engine output, same numbers underneath. Only the sentence that reaches the screen changed.',
              zh: '引擎输出没变，底下的数字也没变，变的只是最后落到屏幕上那句话。'
            }
          }
        ]
      },

      {
        id: 'ai-ux',
        title: 'AI Engineering',
        sectionTag: 'AI Engineering',
        mainTitle: {
          en: 'The Engine Decides, the Model Explains',
          zh: '判断归引擎，解释归模型'
        },
        briefContent: {
          en: 'The engine computes direction, timing and confidence in TypeScript, and the model never decides any of it. The [[LLM]] does the writing, in the voice that fits whoever is reading, grounded by [[RAG]] over the 64-hexagram [[knowledge base]]. The [[prompt is versioned]], [[guardrails]] scan every generation, and a [[golden eval set]] of 10 cases scores the output for compliance and faithfulness. Every cast is stored and labelled with what actually happened, so the corpus grows with use.',
          zh: '方向、时点、置信度都由 TypeScript 里的引擎算，模型一个都插不上手。[[LLM]] 只负责写，按读的人是谁换语气，内容靠 [[RAG]] 从六十四卦[[知识库]]里取。[[Prompt 走版本管理]]，每一次生成都过一遍[[护栏]]，还有 10 条案例的[[黄金评测集]]给输出打分，看合不合规、忠不忠于原典。每一次起卦都存下来，事后标上实际发生了什么，语料就随着用量一起长。'
        },
        icon: '⚙️',
        link: {
          label: {
            en: 'Open full view',
            zh: '打开完整视图'
          },
          url: '/hexaedge-knowledge-graph/index.html',
        },
        // 知识图谱直接在页内跑,不跳转。默认不吃鼠标,点一下才可拖拽/缩放/搜索。
        embed: {
          src: '/hexaedge-knowledge-graph/index.html',
          title: 'HexaEdge signal knowledge graph',
          ratio: '16 / 10',
          activateLabel: 'Click to explore the graph',
          caption: {
            en: '66 cases, 109 signals, 333 links, generated from the case archive. Gold nodes are signals; cases are coloured by timeframe. Outcomes stay in the private copy.',
            zh: '66 个案例、109 个信号、333 条连线，全部从案例库生成。金色节点是信号，案例按周期上色。结果字段只留在私有版本里。'
          }
        },
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/ai-engineering.png',
            alt: 'AI Engineering',
            caption: {
              en: 'One request, four stages, plus the three things that keep the output honest.',
              zh: '一次请求走四个阶段，外加三样东西盯着输出别跑偏。'
            }
          },
          {
            src: '/media/projects/hexaedge/sections/ai-ux.png',
            alt: 'Prompt Engineering',
            caption: {
              en: 'The prompt is versioned like code, from V1 "answer the fate" to V3 "describe the momentum."',
              zh: 'Prompt 像代码一样打版本，从 V1 的「直接断吉凶」到 V3 的「描述势往哪走」。'
            }
          }
        ]
      },

      {
        id: 'outcome',
        title: 'Outcome',
        sectionTag: 'Outcome',
        mainTitle: {
          en: 'Design to Deploy, No Handoff',
          zh: '从设计到上线，中间没有交接'
        },
        briefContent: {
          en: 'Someone finds a hexagram page through Google, signs up, casts three coins, reads what comes back, hits a tier gate, pays, and leaves with a full PDF report. [[Every step of that is a screen I drew and a route I wrote]], including the parts that normally get handed off: [[auth]], the [[entitlement and credit ledger]] behind four pricing tiers, [[i18n]] down to the AI output itself, and the [[SEO]] content hub, structured data included, that brought them in.\n\nThree modules, 17 API routes, 387 bilingual UI keys, 21 editorial articles. [[Every screen in this case study is the shipped product]].',
          zh: '有人从 Google 搜到某一卦的页面，注册，掷三枚铜钱，读到结果，撞上付费墙，付款，最后带走一份完整的 PDF 报告。[[这条路上每一步都是我画的界面和我写的接口]]，包括平时会交出去的那几块：[[登录鉴权]]、四档定价背后的[[权益与额度账本]]、一直做到 AI 输出层的 [[i18n]]，还有把人引进来的那个 [[SEO]] 内容库，结构化数据也在里面。\n\n三个模块，17 条 API 路由，387 个双语 UI 文案键，21 篇专栏文章。[[这份案例里的每一张图都是已经上线的产品]]。'
        },
        icon: '🚀',
        // 闭环转盘直接在页内跑,不跳转。默认不吃鼠标,点一下才可拖拽旋转。
        embed: {
          src: '/hexaedge-loop/index.html',
          title: 'The Business Loop',
          ratio: '1 / 1',
          activateLabel: 'Click to turn the wheel',
          caption: {
            en: 'Six stops, one loop, and the last one feeds the first. Under each screen is the team that would normally own it.',
            zh: '六个环节转成一圈，最后一环又喂回第一环。每块界面下面写着平时该归哪个团队管。'
          }
        },
        // s12-outcome.png 已撤:转盘把这一节讲得更清楚,图里那组数字挪进了正文
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection & Next Steps',
        mainTitle: {
          en: 'The Counsellor and the Fortune-Teller',
          zh: '顾问和算命先生'
        },
        briefContent: {
          en: 'What separates a counsellor from a fortune-teller is the question I keep coming back to. The fortune-teller keeps score on being right; the counsellor leaves you understanding your own situation better than when you walked in. [[The second one is the harder product to build]], and most of the difficulty is language: getting an AI to talk to a person so it feels like being helped rather than being told.\n\nNext: extending retrieval from the classical texts to the case archive itself, and putting the thing in front of people who have never cast a hexagram.',
          zh: '顾问和算命先生差在哪，这个问题我一直在想。算命先生比的是算得准不准，顾问是让你走出门时比进门时更明白自己的处境。[[后一种产品难做得多]]，难点大半在语言上：让 AI 跟人说话，说完对方觉得是被帮了一把，而不是被人下了定论。\n\n接下来：把检索从古籍扩到案例库本身，再把这东西拿给从没起过卦的人试。'
        },
        icon: '💭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/s13-reflection.png',
            alt: 'Reflection',
            caption: {
              en: 'Where the constraint landed: stop predicting, start describing.',
              zh: '约束最后落在哪：别预测了，改成描述。'
            }
          }
        ]
      }
    ]
  };
