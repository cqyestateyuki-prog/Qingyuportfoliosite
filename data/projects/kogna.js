// kogna
export const kogna = {
    id: 'kogna',
    year: '2026',
    featured: true, order: 1, // Selected Work · 第 1 位
    title: 'Kogna AI',
    subtitle: {
      en: 'Designing a Building-Block Project Hub & AI Workspace for Lean Teams',
      zh: '为精益团队设计积木式项目中心与 AI 工作空间'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Design System'],
    tags: ['Design System', 'UI Design', 'Product Design', 'SaaS', 'B2B', 'AI Platform', 'Dark Mode', 'Component Library'],
    techTags: ['#Design System', '#Next.js', '#Tailwind CSS', '#React', '#TypeScript', '#Dark Mode', '#Design Tooling', '#AI Workflow'],

    thumbnail: '/media/projects/kogna/slides/slide-01.png',
    brief: {
      en: 'Led the design system and UI/UX for Kogna, AI project management that keeps tasks, timelines and team chat in one place, and finds what\'s holding a project back. Live at kogna.io.',
      zh: '主导 Kogna 的设计系统与 UI/UX:一个把任务、时间线和团队聊天放在一处、还能找出项目卡点的 AI 项目管理工具;已在 kogna.io 上线。'
    },
    heroImage: '/media/projects/kogna/redesign-2026-10/kit-home.jpg', // Kit v2 Home (Oct 2026); the June cover stays as the card thumbnail
    heroVideo: null,

    domain: [
      { en: 'AI Platform', zh: 'AI 平台' },
      { en: 'B2B SaaS', zh: 'B2B SaaS' },
      { en: 'Project Management', zh: '项目管理' }
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
        caption: 'The work in one place. The blocker, found for you.'
      },
      // Why I'm building this:压成 hero 题注一句
      whyIBuild: 'I joined Kogna to get inside [[how teams and the people who lead them actually decide]], what they worry about and what they need to see before they commit, because [[I want to be running something myself one day]].'
    },

    sections: [
      // ── 01 · The Problem ──
      {
        id: 'problem',
        title: 'The Problem',
        sectionTag: '01 · The Problem',
        mainTitle: 'Five apps, and none of them says what\'s stuck',
        briefContent: 'Kogna\'s founders found themselves switching between five apps just to keep a single project moving, and small teams live the same way: tasks in a tracker, updates in a chat app, dates in a spreadsheet. Each of those tools records the work and none of them reads it, so someone spends the week chasing people for status, and a slipping task only surfaces once it is already late. I joined [[Kogna]] as the [[design system lead]] while the product was growing faster than its UI could keep up: every new page looked a little different, and the whole thing read as [[a patchwork instead of one product]]. My job was to make it feel like one product, and trustworthy enough to base a real decision on.',
        challenge: 'How might we point a manager at the one blocker that matters, across every project, without a wall of alerts?',
        challenges: [
          'How might we point a manager at the one blocker that matters, across every project, without a wall of alerts?',
          'How might we keep people in charge of an AI that will sometimes be wrong?',
          'How might we make it obvious when the AI is talking, on every screen, while the product changes every week?'
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
        mainTitle: 'Three ways to find where to step in',
        briefContent: 'Three pieces that work together: [[Kogna Insight]], which states the risk plainly and turns it into a plan; [[Smart Tiles]], a home each person builds from tiles; and [[Ask Kogna]], the assistant that reads a board and finds what\'s stuck. Each came down to one hard call, unpacked next.',
        icon: '✦',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Kogna Insight',
            detail: 'The risk, stated plainly. Insight reads the work you\'ve connected and opens with what\'s at risk, how serious it is, and a Strategy button that turns it into a plan, instead of a report to dig through.',
            image: '/media/projects/kogna/pillars/insight.png'
          },
          {
            name: 'Smart Tiles',
            detail: 'Everyone\'s own home, built from tiles. Open work, overdue, shipped and cycle time across every project, with the strategy Ask Kogna drafted pinned next to the numbers.',
            image: '/media/projects/kogna/pillars/smart-tiles.png'
          },
          {
            name: 'Ask Kogna',
            detail: 'Catches the blocker before it stalls a launch. Ask from any board and it reads what\'s overdue, what\'s blocked and who\'s carrying the most, then drafts the next moves as cards. You make the call: nothing changes until you tap.',
            image: '/media/projects/kogna/redesign-2026-10/kit-ask-kogna.jpg'
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
            detail: 'A: show the metric and let the leader read it. B: state the risk and the one move to make. I chose B. "Data to decision" is a stated brand value, and in discovery leaders wanted the answer, not another chart, so every insight leads with a plainly stated risk, its severity, and a Strategy button that turns it into a plan. The pattern outlived the pivot: on a project today, Ask Kogna names the missing piece first and offers the moves after it.',
            image: '/media/projects/kogna/slides/slide-07.png',
            imageCaption: 'Every insight leads with a risk and the action to take'
          },
          {
            name: 'Smart Tiles: a home that bends to how you work',
            label: 'Tile System',
            detail: 'A: one fixed dashboard for everyone. B: let each person assemble their own. I chose B. A CEO and a COO lead from different numbers, so instead of one fixed dashboard each person snaps together their own from tiles, pins an AI insight beside them, and finds it the same way next visit. When Kogna turned into project management the idea carried over: Smart Tiles is now the manager\'s home, open, overdue and shipped across every project, with the strategy Ask Kogna drafted pinned next to the numbers.',
            image: '/media/projects/kogna/slides/slide-08.png',
            imageCaption: 'The first version, on live Jira data; the layout persists'
          },
          {
            name: 'Cyan means AI',
            label: 'Colour',
            detail: 'A: cyan as the general brand accent. B: cyan only where the AI is. I chose B. By August cyan had leaked into status and payment: a trial countdown, "Start free", confirmation checks, a Retry button. If everything is cyan, nothing says "AI". I read every call site in context and took cyan back from the twelve that weren\'t AI, so the brightest thing left in the header is the one door to the assistant, Ask Kogna. When the brand went cyan-led in October, the rule carried over as one primary per page: in the header, Ask Kogna is still the only cyan block, and the shared top-bar button takes its size and edge from it.',
            image: '/media/projects/kogna/slides/slide-09.png',
            imageCaption: 'Before and after the cyan rule, and the header today'
          }
        ]
      },

      // ── 05 · AI UX & Trust (real mechanisms only: severity ramp, source+confidence+audit, human-in-the-loop, empty states) ──
      {
        id: 'ai-ux',
        title: 'AI UX & Trust',
        sectionTag: '05 · AI UX & Trust',
        mainTitle: 'Designing for an assistant that can be wrong',
        briefContent: 'An AI that reads your projects only helps if the team can trust it and stays in charge. Ask Kogna drafts, a person decides. Three rules carry most of that trust.',
        icon: '🛡️',
        features: [
          {
            name: 'Nothing moves without you',
            detail: 'Task changes arrive as cards and a strategy arrives as a draft you can refine. Nothing is written to a board until a person approves it, so the AI can be bold in what it suggests and never touches the work on its own.'
          },
          {
            name: 'Answers that show their work',
            detail: 'Every answer opens into the steps behind it: what it read, the passages it leaned on, and how sure it is. When the data isn\'t there, it says what\'s missing instead of filling the gap with something plausible.'
          },
          {
            name: 'Signal over noise',
            detail: 'Findings land on one severity scale, from critical down to low, so the problem worth acting on today sits on top and the rest stays quiet. If a screen turns into a wall of colour, the ranking is wrong.'
          }
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-10.png',
            alt: 'AI UX & Trust',
            caption: 'Three rules, each shown with the demo project from the kogna.io landing page'
          }
        ]
      },

      // ── 06 · How We Build (design-engineer evidence: single source of truth + Figma↔Claude Code loop) ──
      {
        id: 'how-we-build',
        title: 'How We Build',
        sectionTag: '06 · How We Build',
        mainTitle: 'Using AI to ship an AI product',
        briefContent: 'Kogna changes every week and much of its code is written with an AI in the loop, so a design system that lived only in Figma would drift within weeks. I put the system where the AI works. Tokens, the type ramp and every component are written once, in [[globals.css and DESIGN.md]], and mirrored into the Figma library under the same names. Figma and Claude Code talk over MCP in both directions: a screen I draw in Figma comes back as token-correct React, and a token I change in code updates the Figma variables. A Claude Code skill reviews screens against DESIGN.md, unauthenticated preview routes render every screen without a login, and [[gates in CI stop a merge when the AI gets it wrong]]. The person who designs the screen is the one who ships it, usually the same week.',
        icon: '⚡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-11.png',
            alt: 'Design Process',
            caption: 'Kit first, build with AI, review on screen, ship: the same loop every day'
          },
          {
            src: '/media/projects/kogna/slides/slide-12.png',
            alt: 'Design System',
            caption: 'The kit, measured: white labels on every fill, and eight decisions on record'
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
            label: '868 lines · 20 rules · blocks the merge',
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
        mainTitle: 'From an insight dashboard to a live workspace',
        briefContent: 'Kogna is [[live at kogna.io]]: free for teams of up to ten, with Standard at $9 a seat and Pro on a waitlist, and its first two partnerships, with [[Startup Gainesville]] and [[Nexus at UCF]], put ten free seats in front of every team. My September system was replaced in October, and [[the lint gate I wrote for it now checks Kit v2\'s rules on every pull request]]. What ships next: predictive blockers, a strategy sandbox where a director tries a plan before committing the team, and one AI surface that widens out of the side menu next to the open project.',
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
            src: '/media/projects/kogna/slides/slide-16.png',
            alt: 'Outcome',
            caption: 'Live at kogna.io · 2 partnerships · 20 lint rules in CI · 3 systems in six months'
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
