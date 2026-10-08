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
    heroImage: '/media/projects/kogna/redesign-2026-10/kit-home.jpg', // Kit v2 Home (Oct 2026); the June cover stays as the card thumbnail
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
        briefContent: 'Rules that nobody checks stop being rules. So beside the design system I wrote a set of small tools and wired two of them into CI as merge-blocking steps. On every pull request they answer three questions: does this code break a rule, is the codebase drifting, and did a page change that nobody meant to change. [[Every number below is read out of the repo, not estimated.]]',
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
            name: 'ui-diff',
            label: 'since · refs · compare · history — runs itself every Friday',
            detail: 'A standalone tool that answers "what changed on screen?" without reading a diff. Give it two commits and it checks both out, starts both, screenshots every route in light and dark, and ranks the pages by how far they moved, with the commits, the merged PRs and the files behind the change attached, plus a list of the changed UI files no screenshot can reach. "compare" puts design-kit screens or a competitor beside the build, row by row, with timed flows and a notes box that exports to Markdown; "history" lays every captured version of a screen in one strip so the evolution is visible at a glance. A Friday job runs it on its own and opens the report.'
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

      // ── 08 · The Redesign (Oct 2026: the kit that replaced the September system, and the lesson) ──
      {
        id: 'redesign',
        title: 'The Redesign',
        sectionTag: '08 · The Redesign',
        mainTitle: 'The week the whole look was replaced, and what I kept',
        briefContent: 'In October 2026 the CEO sent a 24-page alignment spec: the app had to read like the landing page, cyan-led and bright, not purple-led and pale. A day later came a complete design kit: a spec, tokens, 43 icons, two interactive mockups of every screen, and a drop-in stylesheet. An engineer applied it across [[231 files in two days]]. My September system had been built the other way round: [[dozens of careful rulings]], one at a time, each measured for contrast and enforced by lint, and next to a language decided all at once it read as thin. I audited the new branch against the spec ([[6 done, 4 half, 5 untouched]]), filed the gaps, and rewrote how I work: [[kit first, then one sweep]]. Measure after you look, not instead of looking. The tools I built are what made the audit possible: every screen before and after, side by side, in an afternoon.',
        icon: '🔁',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'The kit',
            label: 'Spec · tokens · icons · mockups · screens',
            detail: 'Everything an engineer needs, decided once: a 27-page spec with a one-line brand test, W3C tokens that import into Figma, a 10-colour palette with a tint and a text colour for every fill, 43 icons, fonts, and a full interactive mockup of the desktop and phone apps. The spec ends with a fix list and a release checklist, so "done" is a set of checks rather than an opinion.',
            image: '/media/projects/kogna/redesign-2026-10/kit-board.jpg',
            imageCaption: 'Design Kit v2 · the board screen, as specified'
          },
          {
            name: 'Timeline, before',
            label: 'September · the calm system',
            detail: 'Pale bars, labels dropped when they did not fit, a diamond for a milestone, a violet Today line. Every value was on a token and cleared its contrast floor. It still carried almost no information at a glance, which is what the audit said.',
            image: '/media/projects/kogna/redesign-2026-10/timeline-before.jpg',
            imageCaption: 'Stagging, 5 October, before the kit'
          },
          {
            name: 'Timeline, after',
            label: 'October · the kit applied',
            detail: 'Solid bars in the column colour, titles inside, an overdue flag, a dashed amber Today line, a check on finished work, due-only tasks as labelled chips. The same data, now readable from across the room.',
            image: '/media/projects/kogna/redesign-2026-10/timeline-after.jpg',
            imageCaption: 'Stagging, 5 October, after PR #318'
          },
          {
            name: 'Design beside build',
            label: 'ui-diff compare · the audit in one report',
            detail: 'Kit screens on the left, the running build on the right, one row per screen, notes under each. This is how the gaps were found: a stored project code where the spec wanted initials, nine columns that still scroll at 1440px, a help button in the wrong green, an overflow count that should open a member list.',
            image: '/media/projects/kogna/redesign-2026-10/kit-vs-build.jpg',
            imageCaption: 'Kit v2 vs the build, 7 October'
          },
          {
            name: 'How every screen evolved',
            label: 'ui-diff history · four versions, one strip',
            detail: 'One row per route, one frame per captured version, oldest first: the August system, the September pass, the day before the kit, the kit. Every Friday run adds a column, so the record keeps itself.',
            image: '/media/projects/kogna/redesign-2026-10/ui-history.jpg',
            imageCaption: 'Home, chrome and timeline across four versions'
          }
        ]
      },

      // ── 09 · Outcomes (real beta signal + founder quote; keeps counts) ──
      {
        id: 'outcomes',
        title: 'Outcomes',
        sectionTag: '09 · Outcomes',
        mainTitle: 'From idea to a live, validated platform',
        briefContent: 'Kogna is a [[live V1 in private beta]], running on a [[10+ connector]] backbone and validated against [[180+ discovery outreach]], with [[2 pilot companies and 1 partner organization]] onboard and a post-beta pricing path. Its founder, CEO Jonathan Beck, frames the bet plainly: "today\'s strategy tools show you what happened; we built something that shows you what\'s next, and why." What ships next is as deliberate as what shipped: custom model training on a feedback-enriched lakehouse, more connectors, and multi-step agents that run an analysis end to end.',
        icon: '🚀',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/videos/kogna-promo-2026-05-web.mp4',
            poster: '/media/projects/kogna/videos/kogna-promo-2026-05-poster.jpg',
            alt: 'Kogna launch video',
            caption: 'The team\'s launch video, May 2026 · 55 s'
          },
          {
            src: '/media/projects/kogna/slides/slide-13.png',
            alt: 'Outcome',
            caption: 'V1 live · 10+ connectors · 180+ discovery outreach · private beta'
          }
        ]
      },

      // ── 10 · Reflection ──
      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: '10 · Reflection',
        mainTitle: 'A design system is leverage',
        briefContent: 'At Kogna I design the screens and write the code that ships them, so I design what I can actually build and put it live the same week. The product is young and changes constantly, so I lock the flow and logic first and let the polish catch up release by release. [[I\'d rather put a working version in front of real users than hold back a perfect one.]] The lesson I\'ll keep: [[a system earns its place only when reaching for it is the easy choice.]] The October redesign sharpened that: leverage comes from deciding the whole language once, in a kit anyone can build from, and then applying it in one sweep. A thousand careful rulings are not a system; a kit is.',
        icon: '💭'
      }
    ]
  };
