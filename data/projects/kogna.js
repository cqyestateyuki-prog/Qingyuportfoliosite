// kogna
export const kogna = {
    id: 'kogna',
    year: '2026',
    featured: true, order: 1, // Selected Work · 第 1 位
    title: 'Kogna AI',
    subtitle: {
      en: 'Strategic Business Insight, For All',
      zh: '战略洞察 · 人人可及'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Design System'],
    tags: ['Design System', 'UI Design', 'Product Design', 'SaaS', 'B2B', 'AI Platform', 'Dark Mode', 'Component Library'],
    techTags: ['#Design System', '#Next.js', '#Tailwind CSS', '#React', '#TypeScript', '#Dark Mode', '#Design Tooling', '#AI Workflow'],

    thumbnail: '/media/projects/kogna/slides/slide-01.png',
    brief: {
      en: 'Led the design system and UI/UX for an AI decision-support platform that turns fragmented business data into real-time strategic intelligence for leaders. Now a live V1 in private beta, with its first design-partner users onboard.',
      zh: '主导一个 AI 决策支持平台的设计系统与 UI/UX:将碎片化的企业数据转化为面向高管的实时战略洞察;V1 已上线并进入私测,首批深度体验用户已在使用。'
    },
    heroImage: '/media/projects/kogna/slides/slide-01.png',
    heroVideo: null,

    domain: [
      { en: 'AI Platform', zh: 'AI 平台' },
      { en: 'B2B SaaS', zh: 'B2B SaaS' },
      { en: 'Strategy Intelligence', zh: '战略智能' }
    ],
    form: [
      { en: 'Design System', zh: '设计系统' },
      { en: 'UI/UX Design', zh: 'UI/UX 设计' },
      { en: 'Frontend', zh: '前端开发' }
    ],
    collaborators: [],
    meta: {
      role: 'Lead Product Designer & Design Engineer',
      duration: 'Feb 2026 – Present',
      team: '10-person startup · CEO, COO, 3 frontend, 5 backend',
      stack: 'Figma · Claude Code · Next.js · React · Playwright · Supabase',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #0B0716 0%, #0a1628 50%, #0D3B66 100%)',
      subtitleGradient: 'linear-gradient(135deg, #0D5FC2 0%, #0D8CE2 100%)',
      underlineGradient: 'linear-gradient(135deg, #0D5FC2 0%, #0D8CE2 100%)',
      textHighlightColor: '#6B3FC4',
      darkColor: '#140826',
      lightColor: '#0D3B66'
    },

        // 全站规范:overview 只承载"产品全貌图 + 入口 + Why I'm building"，
    // 问题陈述一律独立成 The Problem 章节(见 sections[0])。
    overview: {
      buttons: [
        { label: 'Live Site', url: 'https://kogna.io/', type: 'primary' }
      ],
      mainImage: {
        src: '/media/projects/kogna/slides/slide-02.png',
        alt: 'TL;DR · What Kogna Does',
        caption: 'Every tool fans into one AI command center'
      },
      // Why I'm building this:压成 hero 题注一句
      whyIBuild: 'I built Kogna to get inside [[how leaders actually decide]], what they worry about and what they need to see before they commit, because [[I want to be running something myself one day]].'
    },

    sections: [
      // ── 01 · The Problem ──
      {
        id: 'problem',
        title: 'The Problem',
        sectionTag: '01 · The Problem',
        mainTitle: 'Every leader pays a fragmentation tax',
        briefContent: 'Leadership teams run the business from four or five tools at once: CRM, project tracker, finance, BI dashboards, a stack of spreadsheets. By the time someone stitches those into one picture (often a chief of staff burning hours on it every week), the picture is already weeks old. I joined [[Kogna]] as the [[design system lead]] while the product was growing faster than its UI could keep up: every new page looked a little different, and the whole thing read as [[a patchwork instead of one product]]. My job was to make it feel like one product, and trustworthy enough to base a real decision on.',
        challenge: 'How might we give a leader the whole business at a glance without burying the detail behind any single number?',
        challenges: [
          'How might we turn dozens of disconnected metrics into one signal a leader can act on at a glance, with the detail still one click away?',
          'How might we make dense, data-heavy screens feel calm enough for an executive to trust?',
          'How might we hold every screen together inside a product that ships new features every week?'
        ],
        icon: '💡'
      },

      // ── 02 · Research (single directional insight) ──
      {
        id: 'research',
        title: 'Research',
        sectionTag: '02 · Research',
        mainTitle: 'Leaders asked for the decision, not the data',
        briefContent: 'Before drawing a screen I sat in on customer discovery: [[180+ outreach contacts]], [[3 in-depth operator interviews]] and [[1 beta session]], and three validated personas across CEOs, COOs and chiefs of staff. One line kept coming back, and it set the whole direction: leaders don\'t want another dashboard to read, they want the [[decision surfaced]] for them.',
        icon: '🔍',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-05.png',
            alt: 'User Research',
            caption: 'Customer discovery across CEOs, COOs and chiefs of staff'
          }
        ]
      },

      // ── 03 · The Solution: three named pillars (mapped 1:1 to Key Decisions) ──
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: '03 · The Solution',
        mainTitle: 'Three pillars, one panoramic view',
        briefContent: 'The answer is three pillars that work as one view: [[Kogna Insight]], a Business Radar that ranks what needs attention; [[Smart Tiles]], a dashboard each leader assembles from live data; and [[What → Why]], which connects the stack and answers questions over it. Each pillar came down to one hard call, unpacked next.',
        icon: '✦',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Kogna Insight',
            detail: 'A Business Radar for the whole company. It reads strengths, weaknesses, opportunities and threats through proven frameworks (SWOT, SOAR, VRIO and TOWS), ranks them by live severity, and puts the most urgent signal first.',
            image: '/media/projects/kogna/pillars/insight.png'
          },
          {
            name: 'Smart Tiles',
            detail: 'A dashboard the leader assembles. Adaptive KPI tiles pull live from Salesforce, HubSpot, Jira and Asana and snap into a grid they arrange, with an AI insight pinned right to the board.',
            image: '/media/projects/kogna/pillars/smart-tiles.png'
          },
          {
            name: 'What → Why',
            detail: 'Connect the stack, then see what changed and why. Ten-plus sources link together, and Ask Kogna answers questions over your connected data.',
            image: '/media/projects/kogna/pillars/what-why.png'
          }
        ]
      },

      // ── 04 · Key Decisions (the fork behind each pillar: A vs B → chose B) ──
      {
        id: 'decisions',
        title: 'Key Decisions',
        sectionTag: '04 · Key Decisions',
        mainTitle: 'Three forks, and why I went the way I did',
        briefContent: 'Each pillar came down to one fork in the road. These are the calls that shaped how the product actually feels to use.',
        icon: '🧭',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Kogna Insight: from data to a decision',
            label: 'From Data to Decision',
            detail: 'A: show the metric and let the leader read it. B: state the risk and the one move to make. I chose B. "Data to decision" is a stated brand value, and in discovery leaders wanted the answer, not another chart, so every insight now leads with a plainly stated risk, its severity, and a Strategy button that turns it into a plan. When sales dips, the card says whether it reads as a production bottleneck or a market shift.',
            image: '/media/projects/kogna/slides/slide-07.png',
            imageCaption: 'Every insight leads with a risk and the action to take'
          },
          {
            name: 'Smart Tiles: a fixed board, or one that builds itself',
            label: 'Tile System',
            detail: 'A: ship one executive template for everyone. B: let each leader assemble their own board. I chose B. A CEO and a COO lead from different numbers, so adaptive tiles for pipeline, win rate, blocked issues and company health snap into a grid the leader arranges, and the layout persists between visits. An AI insight can be pinned straight onto the board.',
            image: '/media/projects/kogna/slides/slide-08.png',
            imageCaption: 'The leader arranges the board; the layout persists'
          },
          {
            name: 'Where the AI assistant lives',
            label: 'AI Assistant',
            detail: 'A: give the AI its own page you navigate to. B: keep it one tap away, in context. I chose B. A separate chat page breaks the train of thought, so Ask Kogna opens beside the work and answers about the risk or tile in front of you. On mobile, built for a leader on the go, the assistant stays a single tap from every screen.',
            image: '/media/projects/kogna/slides/slide-11.png',
            imageCaption: 'Ask Kogna stays in context, next to the work'
          }
        ]
      },

      // ── 05 · AI UX & Trust (real mechanisms only: severity ramp, source+confidence+audit, human-in-the-loop, empty states) ──
      {
        id: 'ai-ux',
        title: 'AI UX & Trust',
        sectionTag: '05 · AI UX & Trust',
        mainTitle: 'Designing for a system that can be wrong',
        briefContent: 'An engine that reads your business only helps if a leader can trust it and stay in control. Human-in-the-loop is a brand value here, not a footnote: the AI drafts, you decide. Three UX choices carry most of that trust.',
        icon: '🛡️',
        features: [
          {
            name: 'Priority over noise',
            detail: 'The Business Radar watches strengths, weaknesses, opportunities and threats around the clock, but it never dumps them on you. Findings are ranked on one severity ramp, from critical down to a neutral low, so the signal worth acting on today sits at the top and quiet items stay quiet. If a screen turns into a wall of color, the ranking is wrong.'
          },
          {
            name: 'Answers that show their work',
            detail: 'Ask Kogna answers over your connected data, names the sources behind the answer, and carries a confidence read. A separate audit step checks those sources actually support the claim and sends the answer back to be redone if they do not. When the data cannot support an answer, it says "I don\'t have information on this" instead of inventing one.'
          },
          {
            name: 'Nothing acts without you',
            detail: 'A risk becomes a plan only when you say so: the AI proposes a strategy and its tasks, you refine it in a preview, and nothing is saved until you commit. Empty and loading states are held to the same honesty. A blank panel says why it is empty and what to do next, and the branded spinner is reserved for the moments the AI is actually thinking.'
          }
        ]
      },

      // ── 06 · How We Build (design-engineer evidence: single source of truth + Figma↔Claude Code loop) ──
      {
        id: 'how-we-build',
        title: 'How We Build',
        sectionTag: '06 · How We Build',
        mainTitle: 'One source of truth, checked on every change',
        briefContent: 'The product changes every week and much of the code is written with an AI in the loop, so a design system that only lived in Figma would have drifted from the product within a month. So it lives in code. Tokens, the type ramp and every component are written once, in [[globals.css and an 882-line DESIGN.md]], and mirrored into the Figma library under the same names; a map file records which Figma node is which component. Figma and Claude Code talk over MCP in both directions: a screen I draw in Figma comes back as token-correct React, and a token I change in code updates the Figma variables. [[Nineteen unauthenticated preview routes]] render every screen in a fixed state, so the whole product can be screenshotted without a login, and every visual change ships with its own before/after page diff. The person who designs the screen is the one who ships it, usually the same week.',
        icon: '⚡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-12.png',
            alt: 'Design Process',
            caption: 'Design, build with AI, review, ship: the same system every day'
          },
          {
            src: '/media/projects/kogna/slides/slide-10.png',
            alt: 'Design System',
            caption: 'One source of truth: tokens, color and an Inter type ramp across the product'
          }
        ]
      },

      // ── 07 · The Tooling (the workflow, and the tools that keep it honest) ──
      {
        id: 'tooling',
        title: 'The Tooling',
        sectionTag: '07 · The Tooling',
        mainTitle: 'The tools I wrote to keep the system honest',
        briefContent: 'Rules that nobody checks stop being rules. So beside the design system I wrote six small tools and wired two of them into CI as merge-blocking steps. On every pull request they answer three questions: does this code break a rule, is the codebase drifting, and did a page change that nobody meant to change. [[Every number below is read out of the repo, not estimated.]]',
        icon: '🛠️',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'design-lint',
            label: '867 lines · 22 rules · blocks the merge',
            detail: 'A static check that reads DESIGN.md back to the code. It fails a pull request for raw hex where a token exists, pixel sizes off the type ramp, a fifth font size in one view, weight-500 text, off-ladder radii, coloured left-edge bars, and hover states that point at a token nobody defined. A rule can be broken on purpose, but only with a written reason on that line.'
          },
          {
            name: 'design-budget',
            label: '8 counters · numbers only move down',
            detail: 'Some drift is legal line by line and still bad in total: 558 raw colour literals, 110 off-scale spacing values, 90 off-ramp type sizes. The budget records those counts and fails CI if any of them goes up. Nothing has to be fixed all at once; the backlog just cannot grow.'
          },
          {
            name: 'page-snapshot + page-diff-report',
            label: '19 preview routes · 22 baselines · per-pixel diff',
            detail: 'One command screenshots every route in light and dark into a versioned set, with a manifest of what was captured and what was not. Another compares two sets pixel by pixel and writes a report sorted most-changed first, with unchanged pages folded away. It is how a "small tweak" gets caught touching six pages.'
          },
          {
            name: 'ds-inspect',
            label: '1,558 lines · every route, every token',
            detail: 'The cross-reference a designer keeps asking engineers for. It walks every route, resolves the component tree, and reports which type role, colour token and spacing step each page is wearing, and which design-system entry owns that value. Off-ramp values are flagged in place.'
          },
          {
            name: 'figma-web-snapshots + kogna-ui-review',
            label: 'Figma stays anchored · an agent runs the review',
            detail: 'A script re-anchors the Figma "Live App Snapshots" page to the running app, so the file cannot drift from the product. A review skill for Claude Code reads DESIGN.md, runs the gate, and reports the pass rate together with the parts of the app the gate does not cover yet, citing a rule ID on every finding.'
          }
        ]
      },

      // ── 08 · Outcomes (real beta signal + founder quote; keeps counts) ──
      {
        id: 'outcomes',
        title: 'Outcomes',
        sectionTag: '08 · Outcomes',
        mainTitle: 'From idea to a live, validated platform',
        briefContent: 'Kogna is a [[live V1 in private beta]], running on a [[10+ connector]] backbone and validated against [[180+ discovery outreach]], with [[2 pilot companies and 1 partner organization]] onboard and a post-beta pricing path. Its founder, CEO Jonathan Beck, frames the bet plainly: "today\'s strategy tools show you what happened; we built something that shows you what\'s next, and why." What ships next is as deliberate as what shipped: custom model training on a feedback-enriched lakehouse, more connectors, and multi-step agents that run an analysis end to end.',
        icon: '🚀',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-13.png',
            alt: 'Outcome',
            caption: 'V1 live · 10+ connectors · 180+ discovery outreach · private beta'
          }
        ]
      },

      // ── 09 · Reflection ──
      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: '09 · Reflection',
        mainTitle: 'A design system is leverage',
        briefContent: 'At Kogna I design the screens and write the code that ships them, so I design what I can actually build and put it live the same week. The product is young and changes constantly, so I lock the flow and logic first and let the polish catch up release by release. [[I\'d rather put a working version in front of real users than hold back a perfect one.]] The lesson I\'ll keep: [[a system earns its place only when reaching for it is the easy choice.]]',
        icon: '💭'
      }
    ]
  };
