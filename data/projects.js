// src/data/projects.js
// 简化版项目数据结构 - 移除client和completed，responsibilities可选

export const projects = [

  // ========== Spark Up ==========
  {
    id: 'sparkup',
    featured: true, order: 2, // Selected Work · 第 2 位
    title: 'Spark Up',
    year: '2026',
    subtitle: {
      en: 'Where Ideas Get Their First Spark',
      zh: '让创意迸发第一道火花'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Programming', 'Research'],
    tags: ['Product Strategy', 'UX Design', 'UI Design', 'Figma Make', 'Google AI Studio', 'Next.js', 'Tailwind CSS', 'FastAPI', 'Firebase', 'OpenAI API', 'AWS', 'JTBD', 'Kano Model'],
    techTags: ['#Figma Make', '#Google AI Studio', '#Next.js', '#Tailwind CSS', '#FastAPI', '#Firebase', '#OpenAI API', '#AWS'],

    thumbnail: '/media/projects/sparkup/hero.png',
    brief: {
      en: 'An AI platform that diagnoses startup readiness, generates personalized business ideas, and validates them through community feedback.',
      zh: '一个用于诊断创业准备度、AI 生成创业想法，并通过社区反馈验证想法的平台。'
    },
    heroImage: '/media/projects/sparkup/hero.png',
    heroVideo: null,

    domain: [
      { en: 'AI Product', zh: 'AI 产品' },
      { en: 'Startup Mentorship', zh: '创业辅导' },
      { en: 'B2B SaaS', zh: 'B2B SaaS' }
    ],
    form: [
      { en: 'Product Strategy', zh: '产品策略' },
      { en: 'UX/UI Design', zh: 'UX/UI 设计' },
      { en: 'Design System', zh: '设计系统' },
      { en: 'User Research', zh: '用户研究' }
    ],
    collaborators: ['Yi Bao (Team Lead)', 'Qingyu Cao (Designer)', 'Peixin Gao (Developer)', 'Jinjing Yi (Developer)'],

    role: {
      sectionTag: '4-person team · 3 months',
      title: 'Product Lead & Design Lead',
      responsibilities: [
        'Led product strategy: user research (151 surveys, 10+ interviews), JTBD / Four Forces / Kano analysis, and the pivot from community platform to AI-first diagnostic',
        'Owned end-to-end UX/UI: Figma sketches → Figma Make for prototyping and iteration → Google AI Studio for finalizing the component library and design system',
        'Defined the Two-Tier Diagnostic framework (Lite 10Q + Enhanced 30Q+) and Guest-to-User conversion flow',
        'Designed the Spark Forge interaction: constrained AI generation with drag-and-drop Idea Seeds, budget/scope inputs, and Forging animation',
      ]
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #0081d4 100%)',
      subtitleGradient: 'linear-gradient(135deg, #0081d4 0%, #0081d4 100%)',
      underlineGradient: 'linear-gradient(135deg, #0081d4 0%, #0081d4 100%)',
      textHighlightColor: '#0081d4',
      darkColor: '#1a1a2e',
      lightColor: '#0081d4'
    },

    overview: {
      mainTitle: 'A Reality Check for People With Startup Anxiety',
      briefContent: '**SparkUp** is an [[AI-powered pre-entrepreneurship platform]] that [[diagnoses startup readiness, generates personalized business ideas, and validates them through community feedback]]. It targets a specific audience: people who scroll through startup success stories on social media and feel a mix of envy and anxiety—wondering, "Could I do this too?" Instead of offering motivational platitudes, SparkUp gives users an [[honest diagnostic of where they stand]] across six dimensions, then uses AI to [[forge business ideas tailored to their strengths and constraints]]. The core loop: diagnose your readiness, forge ideas with AI, and validate them with the community.',
      challenge: 'How might we help people with vague startup ambitions get an honest, low-pressure read on their readiness—without discouraging them or wasting their time?',
      challenges: [
        'How might we help people with vague startup ambitions get an honest read on their readiness without discouraging them?',
        'How might we make a diagnostic assessment feel low-stakes enough for cold traffic to complete?',
        'How might we bridge the gap between "I want to start something" and "Here is something concrete I could start"?',
        'How might we design around AI latency so wait time feels productive, not frustrating?'
      ],
      buttons: []
    },

    sections: [
      {
        id: 'the-problem',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: '"Am I Even Capable?"—The Question No One Was Answering',
        briefContent: 'Our JTBD research surfaced a core tension: when people see startup stories on social media, their first question is not "Who can help me?"—it is [["Am I even capable?"]] Existing tools skip this entirely, jumping to networking, pitch decks, or motivational content. But the real anxiety is personal: wanting to know, at low cost, whether it is worth pursuing at all. The [[Four Forces model]] made this sharp—the push was income ceilings and meaning loss at work; the pull was wanting honest self-knowledge instead of guesswork; the anxiety was fear of wasting time on an unvalidated path; the habit was endless research without structured self-reflection. The design problem: build a tool that [[replaces vague self-doubt with a structured, honest readiness picture]].',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/sparkup/problemstatement.png',
            alt: 'Problem Statement — The "Day One" Paralysis',
            caption: '90% of aspiring founders never launch. The biggest hurdle is the lack of structured guidance.'
          }
        ]
      },

      {
        id: 'process-research',
        title: 'Research',
        sectionTag: 'Research',
        mainTitle: '151 Surveys Killed Our First Idea—and Gave Us a Better One',
        briefContent: 'As Product Lead I ran [[151 survey responses and 70+ qualitative interviews]], applying JTBD, Four Forces, and the Kano Model. The pivotal finding: users\' core pain was not [[lack of connections or mentorship]]—it was [[not knowing whether they were ready to start]]. This killed our original community-matching concept and drove a full pivot to an AI-first diagnostic tool. From Kano analysis, forced login before value delivery was a [[reverse attribute]]—so I designed a [[Guest-to-User flow]] where anyone can complete the Lite Diagnostic (10 questions) without signing up, then gets prompted to save results. The [[Two-Tier Strategy]] emerged: a quick Lite assessment as a low-friction hook with instant Readiness Score, and an Enhanced version (30+ questions) with a [[6-dimensional radar breakdown]], AI-generated action plans, and pattern analysis. As Design Lead I owned the full UX/UI pipeline—Figma sketches → Figma Make for prototyping and iteration → Google AI Studio for finalizing the component library and design system.',
        icon: '🔍',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/sparkup/marketresearch.png',
            alt: 'Market Research — Global Side Hustle Trend',
            caption: '72% of Americans and 73% of Chinese consumers are engaged in or considering side hustles.'
          },
          {
            src: '/media/projects/sparkup/userresearch.png',
            alt: 'User Research — JTBD, Four Forces, and Kano Model',
            caption: '151 surveys and 10+ interviews revealed the core pain: not knowing whether they are ready.'
          }
        ]
      },

      {
        id: 'process-design',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'From Boring Survey to 3D Command Deck',
        briefContent: '**Phase 1 (Dashboard)**: flat layout → [["Future Lab"]] style with Bento Grid, Glassmorphism cards, and 3D parallax mouse tracking. **Phase 2 (AI Diagnostic)**: Google Forms survey → [[3D grid background]] with radar-scan iconography and Quick/Full dual-path selection. **Phase 3 (Idea Bank → Spark Forge)**: static card grid → [[Spark Forge]] where users drag seeds, set constraints, and Ignite to generate ideas.',
        icon: '🎨',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/sparkup/sections/phase1-dashboard.png',
            alt: 'Phase 1: Dashboard — flat layout to Future Lab style',
            caption: 'Phase 1: Flat layout → Bento Grid + Glassmorphism + 3D parallax'
          },
          {
            src: '/media/projects/sparkup/sections/phase2-diagnostic.png',
            alt: 'Phase 2: AI Diagnostic — Google Forms to lab-grade interface',
            caption: 'Phase 2: Plain survey → 3D grid background + dual-path selection'
          },
          {
            src: '/media/projects/sparkup/sections/phase3-forge.png',
            alt: 'Phase 3: Idea Bank to Spark Forge',
            caption: 'Phase 3: Static card grid → Spark Forge generation platform'
          }
        ]
      },

      {
        id: 'process-tech',
        title: 'Technical',
        sectionTag: 'Technical',
        mainTitle: 'Next.js + AWS, Delivered in 3 Months',
        briefContent: 'The project was [[delivered in 3 months]] by a 4-person team. Tech stack: **Next.js** + **TypeScript** + **Tailwind CSS** for the frontend, **FastAPI (Python)** for the backend, **Firebase** for auth and data, **OpenAI API** for AI features, and **AWS** (ECR + App Runner + Terraform) for deployment. Bilingual i18n (EN/ZH); mobile-first responsive design.',
        icon: '💻',
        buttons: [],
        features: [
          {
            name: 'Next.js + Tailwind CSS',
            description: 'Frontend & UI',
            detail: 'Next.js + TypeScript; Tailwind CSS + Radix UI components; bilingual i18n (EN/ZH); mobile-first responsive design'
          },
          {
            name: 'FastAPI + Firebase + OpenAI',
            description: 'Backend & AI',
            detail: 'Python FastAPI backend; Firebase Auth + Firestore for persistence; OpenAI API for diagnostic analysis, idea generation, business plans, and challenge paths'
          },
          {
            name: 'AWS Deployment',
            description: 'Infrastructure & CI/CD',
            detail: 'Docker → AWS ECR → AWS App Runner; Terraform for infrastructure; GitHub Actions CI/CD with version-tag triggered deploys'
          }
        ]
      },

      {
        id: 'the-solution',
        title: 'Final Solution',
        sectionTag: 'Final Solution',
        mainTitle: 'Diagnose → Forge → Validate: One Continuous Journey',
        briefContent: 'Three capabilities, one continuous flow: [[Diagnose]] your readiness, [[Forge]] personalized ideas with AI, and [[Validate]] them through community feedback. Launched on [[Product Hunt]].',
        icon: '🚀',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'AI Readiness Diagnostic',
            detail: 'Lite (10Q) + Enhanced (30Q+) across 6 dimensions with smart routing. Radar Chart makes strengths and gaps actionable at a glance.',
            image: '/media/projects/sparkup/sections/solution-dashboard.png'
          },
          {
            name: 'Spark Forge',
            detail: 'Set keywords, budget, and scope—optionally drag an Idea Seed—and AI generates business ideas matched to your diagnostic profile.',
            image: '/media/projects/sparkup/sections/solution-idea-bank.png'
          },
          {
            name: 'Validation & Dashboard',
            detail: 'Publish ideas to Spark Square for community feedback. Dashboard ties it together: Readiness Score, radar breakdown, Spark Stash, and recommendations.',
            image: '/media/projects/sparkup/sections/solution-design-system.png'
          }
        ],
        imageGroups: [
          {
            title: 'Final Visuals',
            displayMode: 'single',
            images: [
              {
                src: '/media/projects/sparkup/sections/final-dashboard.png',
                alt: 'Spark Up Dashboard',
                caption: 'Command center with Radar Chart and personalized action steps'
              },
              {
                src: '/media/projects/sparkup/sections/final-idea-bank.png',
                alt: 'Idea Bank and Spark Square',
                caption: 'Idea Bank with Forging flow; Spark Square for lightweight validation'
              }
            ]
          }
        ]
      },

      {
        id: 'impact-reflection',
        title: 'Impact & Reflection',
        sectionTag: 'Impact & Reflection',
        mainTitle: 'Data Over Intuition; Honest Assessment Over Empty Encouragement',
        briefContent: '[[151 survey responses]] drove a complete product pivot—from community matching to AI-first diagnostic and ideation. North Star metric: **Readiness-to-Action Conversion** (user completes Enhanced Diagnostic and forges ≥1 personalized idea). Design targets: Lite completion rate >70%, Lite→Enhanced conversion >40%, ideas forged per user >3, community share rate >50%. The deeper lesson: the best products don\'t always encourage action—sometimes they encourage [[honest reflection]]. SparkUp doesn\'t tell everyone "You can do this!"—it asks [["Are you ready?"]] and gives an evidence-based answer. In a space full of noise saying "just start," we designed the signal that helps people start [[with clarity]].',
        icon: '💭',
        content: [
          '**Impact**:',
          '- **Research**: 151 responses validated the "honest readiness check" positioning and killed the original community-matching concept; age cohort differences (18–27, 28–34, 35+) informed roadmap priorities.',
          '- **Design**: AI-augmented pipeline (Figma sketches → Figma Make for prototyping → Google AI Studio for component library and design system). Radar Chart, Forge Engine drag-and-drop, and Forging animation were all validated in user testing.',
          '- **Team**: Evidence-based decision culture; achievable success criteria; reusable 6-dimensional diagnostic framework.',
          '',
          '**Reflection**:',
          '- **Pivot courage**: Throwing away months of community-platform work was painful; 151 surveys don\'t lie. Data trumps intuition.',
          '- **Honesty + encouragement**: Always pair critique with actionable next steps (e.g. "Your Market score is low → Take Market Research Challenge").',
          '- **Edge cases**: Fallback UI when AI fails; encouraging messaging for low scores; Idea Seeds as scaffolding when users have no starting point.',
          '- **If I had more time**: Longitudinal study (6 months post-diagnostic); AI model iteration from idea-quality feedback; deeper community features (cautiously); content marketing (Xiaohongshu, Product Hunt).'
        ]
      }
    ]
  },

   // ========== Programming 项目示例 ==========
    // ========== AI Community MVP项目 ==========
    {
      id: 'ai-community-platform',
      year: '2025',
      featured: false, // 移至 Passion Projects
      title: {
        en: 'AI Built-in Community Platform',
        zh: 'AI 产品内嵌社区平台'
      },
      subtitle: {
        en: 'Modern integrated Community Platform for AI Tools',
        zh: '为 AI 工具打造的现代化集成社区平台'
      },
      categories: ['AI', 'UIUX', 'Programming','Product Design', 'Research'],
      tags: ['UI/UX Design', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Frontend Development',  'Web Development'],
      techTags: ['#Figma','#React','#TypeScript', '#Next.js','#HTML/CSS'],
      
      thumbnail: '/media/projects/aicommunity/Hero2 copy.png',
      brief: {
        en: 'An in-app integrated community system designed for AI Tools.',
        zh: '专为 AI 工具设计的应用内集成社区系统。'
      },
      heroImage: '/media/projects/aicommunity/Hero2 copy.png',
      heroVideo: 'https://vimeo.com/1145264634?share=copy&fl=sv&fe=ci',
      
      domain: [
        { en: 'AI Product Design & Development', zh: 'AI 产品设计与开发' },
        { en: 'Web Platform', zh: 'Web 平台' },
        { en: 'Learning Community', zh: '学习社区' }
      ],
      form: [
        { en: 'UI/UX Design', zh: 'UI/UX 设计' },
        { en: 'Frontend Development', zh: '前端开发' },
        { en: 'React + TypeScript + Tailwind CSS', zh: 'React + TypeScript + Tailwind CSS' },
        { en: 'Next.js', zh: 'Next.js' }
      ],
      collaborators: ['Solo Project','Cursor AI + ChatGPT + Claude'],
      
      colors: {
        heroGradient: 'linear-gradient(135deg, #000000 0%, #374151 100%)',
        subtitleGradient: 'linear-gradient(135deg,#374151 0%,rgb(72, 81, 97) 100%)',
        underlineGradient: 'linear-gradient(135deg,#374151 0%, #374151 100%)',
        textHighlightColor: '#3686ff', // 自定义正文中加粗文字和数字的颜色
        darkColor: 'rgb(40, 39, 39)', // mainTitle 使用的深色（比 #8a81d7 深一些）
        lightColor: '#3686ff' // sectionTag 使用的浅色
      },
      
       overview: {
         mainTitle: 'Transform AI Learning Into Community Experience',
         briefContent: 'AI applications such as ChatGPT, Grok, and Claude currently [[lack built-in communities]], leaving everyday users without a dedicated space to learn, share, and connect. AI Built-in Community Platform [[fills this critical gap]] by offering an intuitive, accessible experience that [[transforms isolated AI use into collaborative discovery]]. The platform supports multiple post types: conversation & thoughts sharing, prompt discovery, and community events along with trending search and a prompt voting system. This combination enables users not only to [[learn useful AI tips but also to express themselves, exchange ideas, and feel a sense of belonging]]. For product owners, the community drives [[user retention]].',
         challenge: 'How might I create an ecosystem where users connect, collaborate, and create value for one another?',
         challenges: [
           'How might I create an ecosystem where users connect, collaborate, and create value for one another?',
           'How might I enable users to easily share their AI usage experiences and insights?',
           'How might I help users quickly find relevant, high-quality AI content, prompts, and events?',
           'How might I lower the barrier to entry for AI users to participate in community learning?',
           'How might I ensure the quality and reliability of shared AI content and prompts?'
         ],
         buttons: [
           {
             text: 'Visit Live Community Platform',
             url: 'https://ai-community-mvp-v2-7y9m.vercel.app/',
             type: 'external'
           }
         ]
       },
  
      sections: [ 
        {
          id: 'the-problem',
          title: 'The Problem',
          sectionTag: 'The Problem',
          mainTitle: 'Isolated Learning in a Connected World',
          briefContent: 'While AI adoption explodes ([[375% growth from 2023-2025]]), users face a critical challenge: [[they learn alone, struggle with adoption barriers, and have no specialized community to support their journey]].',
          icon: '💡',
          imageDisplayMode: 'single',
          images: [
           {
             src: '/media/projects/aicommunity/marketcontext.png',
             alt: 'User Interview & Market Insights',
             caption: 'Key insight: 90% of participants want to have an in-app community. 58% face prompt engineering barriers.'
           },
          ]
        },
        
        {
          id: 'process-research',
          title: 'Research',
          sectionTag: 'Research',
          mainTitle: 'The Demand for Connection',
          briefContent: 'Through surveys and interviews, I discovered that users don\'t just want to learn techniques—they seek [[emotional connection, recognition, and a sense of belonging]] in the AI era. [[90% of participants]] want an in-app community, and [[58% face prompt engineering barriers]].',
          icon: '🔍', 
          imageDisplayMode: 'single',
           images: [
            {
              src: '/media/projects/aicommunity/Userresearch.png',
              alt: 'User Interview & Market Insights',
              caption: 'Key insight: 90% of participants want to have an in-app community. 58% face prompt engineering barriers.'
            },
            {
              src: '/media/projects/aicommunity/UserPersona.jpg',
              alt: 'User Personas',
            },
            {
              src: '/media/projects/aicommunity/journeymap.png',
              alt: 'User Journey Map',
            },
           ]
        },

        {
          id: 'process-design',
          title: 'Iteration',
          sectionTag: 'Iteration',
          mainTitle: 'From Insight to Interface',
          briefContent: 'I aimed to create an in-app community homepage that is both familiar—leveraging patterns users already know from Reddit, RedNotes, and YouTube—and tailored for AI-specific use cases. The design evolved through multiple rounds of sketching and testing.',
          icon: '🎨',
          content: [
            '**Three-column to Two-panel**: The initial design used a standard three-column layout. However, testing revealed that AI generated content required more horizontal space. I pivoted to a two-panel structure that better accommodates the AI chat interface alongside community content.',
            '',
            '**Visual System**: Rather than creating a proprietary visual design system, I designed a [[platform-agnostic community framework]]. It acts as a functional layer on top of conversational UIs—adding community features without disrupting the core chat experience.',
            '',
            '**Interaction Patterns**: I focused on lowering the barrier to entry by using familiar patterns. The "Share Prompt" flow was simplified from 5 steps to 2 steps based on user feedback.'
          ],
          imageDisplayMode: 'alternating',
          images: [
            {
              src: '/media/projects/aicommunity/beforeafter.png',
              alt: 'Design Iteration',
              caption: 'Evolution: From a dense three-column layout to a focused two-panel structure'
            },
            {
              src: '/media/projects/aicommunity/DiagramPost.jpg',
              alt: 'Post Types',
              caption: 'Defining distinct visual treatments for Chat, Prompt, and Event posts'
            },
            {
              src: '/media/projects/aicommunity/Ratingsystem2.jpg',
              alt: 'Rating System',
              caption: 'Iterating on the voting mechanism to ensure quality content surfaces'
            }
          ]
        },
        
         {
           id: 'process-tech',
           title: 'Technical',
           sectionTag: 'Technical',
           mainTitle: 'Built for Scale and Performance',
           briefContent: 'To bring the design to life, I built a high-performance web application using a modern tech stack. The focus was on component modularity and type safety to ensure the platform could scale.',
           icon: '💻',
           buttons: [
             {
               text: 'View Full Code & Documentation',
               url: 'https://github.com/cqyestateyuki-prog/AI-Community-MVP-v2',
               type: 'github'
             }
           ],
          features: [
            {
              name: 'Next.js 14',
              description: 'React Framework',
              detail: 'App Router, Server Components, and optimized performance with automatic code splitting'
            },
            {
              name: 'TypeScript',
              description: 'Type Safety',
              detail: '100% TypeScript coverage ensuring reliable code and better developer experience'
            },
            {
              name: 'Tailwind CSS',
              description: 'Styling System',
              detail: 'Utility-first CSS framework for consistent design and rapid development'
            },
          ],
          
        },

        {
          id: 'the-solution',
          title: 'Final Solution',
          sectionTag: 'Final Solution',
          mainTitle: 'One Integrated Ecosystem',
          briefContent: 'The final platform successfully transforms [[isolated AI tool usage into collaborative community experiences]]. Users can easily [[discover relevant content, share their AI stories, and build meaningful connections]]. By integrating community directly within AI tools, I create powerful network effects that drive [[retention, engagement, and sustainable growth]].',
          icon: '🚀',
          featureDisplayMode: 'side-by-side',
          features: [
            {
              name: 'Three Post Types',
              detail: 'Share Chat & Thoughts enables users to share their emotional AI interactions with privacy protection, Share Prompt facilitates technical knowledge exchange with voting systems, and Events creates more connection opportunities.',
              image: '/media/projects/aicommunity/Postingflow.jpg',
            },
            {
              name: 'Prompt Rating System',
              detail: 'Technical knowledge sharing with voting system and effectiveness ratings.',
              image: '/media/projects/aicommunity/Ratingsystem.jpg',
            },
            {
              name: 'Trending Content',
              detail: 'Users can discover trending posts, prompts, and events in one place. The trending feed automatically surfaces the most popular and engaging content, helping users stay connected with what\'s happening in the community.',
              image: '/media/projects/aicommunity/Trendingprompts.png',
            },
          ],
          imageGroups: [
            {
              title: 'Final Visuals',
              displayMode: 'single',
              images: [
                {
                  src: '/media/projects/aicommunity/Homepage.png',
                  alt: 'Homepage',
                  caption: 'Clean, modern homepage with intelligent content feed and seamless navigation'
                },
                {
                  src: '/media/projects/aicommunity/Postdetailpage.jpg',
                  alt: 'Post Detail Page',
                  caption: 'Rich post detail view with voting, comments, and social interactions'
                },
                {
                  src: '/media/projects/aicommunity/Mybookmarks.png',
                  alt: 'Personal Data',
                  caption: 'User dashboard with AI Coins system, bookmarks, and content management'
                }
              ]
            }
          ]
        },

        {
          id: 'impact-reflection',
          title: 'Impact & Reflection',
          sectionTag: 'Impact & Reflection',
          mainTitle: 'Learnings & Future Steps',
          briefContent: 'This project demonstrated how community features can significantly enhance the value of AI tools. By moving beyond simple chat interfaces to a connected ecosystem, we can create more sticky, engaging products.',
          icon: '💭',
          content: [
            '**Impact**:',
            '- **Retention**: Community features create a reason for users to return even when they don\'t have a specific task.',
            '- **Knowledge Sharing**: Lowered the barrier for prompt engineering by allowing users to learn from each other.',
            '',
            '**Reflection**:',
            '- **Simplicity is Key**: Users are already overwhelmed by AI complexity. The community layer must be incredibly simple and intuitive.',
            '- **Content Moderation**: As the community grows, automated and community-driven moderation tools will be essential.',
            '- **Next Steps**: I would focus on implementing a "Remix" feature, allowing users to fork and improve shared prompts directly.'
          ]
        }
      ]
  },

   // ========== UIUX 项目 ==========
  {
    // ========== Stumbldoor Project 图书系统==========
    id: 'stumbldoor',
    year: '2024',
    featured: false, // 移至 Passion Projects
    title: 'Stumbldoor',
    subtitle: {
      en: 'Library Experience for the Future',
      zh: '未来图书馆体验'
    },
    categories: ['UIUX', 'Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    techTags: ['#Figma', '#Wireframe', '#Prototype','#Visual Design', '#Mobile App','#Design System'],  // 技术标签
    
    // ========== 主页展示 ==========
    thumbnail: '/media/projects/stumbldoor/hero/hero-image@66662x.png',  // 列表页缩略图
    brief: {
      en: 'An innovative digital platform that reimagines the traditional library experience.',
      zh: '一个创新的数字平台，重新定义传统图书馆体验。'
    },
    
    // ========== 详情页 Hero ==========
    heroImage: '/media/projects/stumbldoor/hero/hero-image@66662x.png',
    heroVideo: null,  // 可选：视频路径
    
    // ========== 项目标签==========
    domain: [
      { en: 'Edtech', zh: '教育科技' },
      { en: 'UI/UX', zh: 'UI/UX' },
      { en: 'Mobile', zh: '移动端' }
    ],
    form: [
      { en: 'Research', zh: '用户研究' },
      { en: 'Mobile Application Design', zh: '移动应用设计' }
    ],
    collaborators: ['Solo Project'],  // 或其他合作者名字
    
    // ========== 项目颜色配置 ==========
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(28, 1, 65)0%, #8a81d7 100%)', // 黑色到紫色渐变
      subtitleGradient: 'linear-gradient(135deg,rgb(65, 27, 118) 0%,rgb(84, 77, 152) 100%)', 
      underlineGradient: 'linear-gradient(135deg,rgb(65, 27, 118)0%, rgb(84, 77, 152) 100%)',
      textHighlightColor: '#8a81d7', // 自定义正文中加粗文字和数字的颜色（紫色）
      darkColor: '#6059A5', // mainTitle 使用的深色（比 #8a81d7 深一些）
      lightColor: '#8a81d7' // sectionTag 使用的浅色
    },
    
    // ========== 项目概述 ==========
    overview: {
      mainTitle: 'Reimagining the Library Experience',
      briefContent: '[[STUMBLEDOOR]] is an innovative digital platform app that [[reimagines the traditional library experience, transforming it into an interactive and captivating journey.]] It enables users to document their reading adventures, providing personalized book recommendations and locating nearby libraries. Moreover, it transforms the in-person library visit into an exploratory adventure, encouraging users to discover new genres and authors.',
      challenge: 'How might I make libraries more relevant, inclusive, culturally dynamic & appealing in the future?',
      challenges: [
        'How might we make libraries more relevant, inclusive, culturally dynamic & appealing in the future?',
        'How might we bridge the gap between physical and digital library experiences?',
        'How might we encourage users to discover new genres and authors?',
        'How might we address the 21.2% decline in physical library visits?'
      ],
      mainImage: {
        src: '/media/projects/stumbldoor/overview/main-image.jpg',
        alt: 'Stumbldoor App Overview',
        caption: 'The Stumbldoor app interface showcasing the library experience transformation'
      }
    },
    
    // ========== 角色（可选）==========
    /*
    role: {
      title: 'Role and Responsibilities',  // 简短的角色标题
      // responsibilities 是可选的，可以不填
      responsibilities: [
        'User Research: Investigating both physical and digital library user needs.',
        'User Persona & Journey Map Creation: Developing personas to guide design decisions.',
        'Information Architecture: Structuring the app content for optimal user navigation.',
        'Wireframing & Prototyping: Sketching out and testing preliminary app designs.',
        'Visual Design: Crafting the aesthetic components of the app.',
        'User Testing: Conducting usability testing to ensure the app is user-friendly.',
      ]
    },
    // 如果不想显示role部分，可以直接设置 role: null
    */

    
    // ========== 项目章节 ==========
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        sectionTag: 'Problem Statement',
        mainTitle: 'The Crisis of Libraries',
        briefContent: 'From 2009 to 2022, physical library visits declined by [[21.2%]]. Yet library card registrations [[peaked in 2019]]. This paradox reveals a critical gap: [[people want to read, but the traditional library experience is failing them]]. Libraries face an [[identity crisis]]—while younger generations still value physical books, they\'re intimidated by formal library spaces, struggle to navigate complex layouts, and crave a more personalized, social reading experience.',
        icon: '💡',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/research.png',
            alt: 'Research Stats',
          },
        ]  // 可以没有图片
      },
      {
        id: 'research',
        title: 'User Research & Insights',
        sectionTag: 'User Research & Insights',
        mainTitle: 'Understanding Library Users & Readers',
        briefContent: 'Our team conducted comprehensive research across [[4 NYC libraries]], surveying [[135 users]] and conducting [[8 in-depth interviews]]. Our findings revealed three critical barriers: [[intimidating spaces, confusing navigation, and lack of personalization.]]',
        icon: '💡',
        imageGroups: [
          {
            displayMode: 'single',
        images: [
          {
                src: '/media/projects/stumbldoor/sections/userresearch.png',
                alt: 'Research Summary',
                caption: 'Key research findings and insights'
              },
            ]
          },
          {
            displayMode: 'two-column',
            images: [
              {
                src: '/media/projects/stumbldoor/sections/2-Fieldsearch2.jpg',
                alt: 'NYC library field research documentation',
                caption: 'Stavros Niarchos Foundation Library Field Research'
          },
          {
            src: '/media/projects/stumbldoor/sections/2-Fieldsearch.jpg',
            alt: 'NYC library field research documentation',
            caption: 'NY Society Library Field Search'
          },
          {
            src: '/media/projects/stumbldoor/sections/2-Survey.jpg',
            alt: 'Survey Insights',
            caption: 'Survey Insights'
          },
          {
            src: '/media/projects/stumbldoor/sections/2-affinitymap.jpg',
            alt: 'User research affinity mapping',
            caption: 'Affinity Mapping: Synthesizing user insights and pain points'
          },
        ]
          },
        ]  
      },
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: 'The Solution',
        mainTitle: 'Stumbldoor: Three Pillars of Innovation',
        briefContent: 'Stumbldoor transforms the library experience into an [[interactive adventure]]. [[It\'s not just a tool; it\'s a gateway to a world of knowledge and community, seamlessly integrating the digital and physical]]. The solution features three core innovations: [[Scrollstack]] for hyper-personalized reading playlists, [[Gameful UX]] for achievements and community, and [[AR Assist]] for navigating library layouts.',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Scrollstack',
            description: 'Personalized Readlists',
            detail: 'Designed to gamify the browsing experience, Scrollstack transforms static lists into an interactive, scrolling deck. It invites users to tactilely swipe through recommendations, bringing the serendipitous joy of "stumbling" upon a book to the digital screen.',
            gif: '/media/projects/stumbldoor/sections/Scrollgif.gif'
          },
          {
            name: 'Gameful UX',
            description: 'Joy of Reading',
            detail: 'Achievements and reading stats transform reading from solitary to social experience, providing recognition and increasing engagement.',
            gif: '/media/projects/stumbldoor/sections/gameux.gif'
          },
          {
            name: 'AR Assist',
            description: 'Find My Book',
            detail: 'Augmented reality navigator for library layouts that eliminates confusion and reduces time spent searching for books, making physical library visits more enjoyable.',
            gif: '/media/projects/stumbldoor/sections/ARgif.gif'
          }
        ],
        images: [
          
        ]  
      },
     
      {
        id: 'usermapping',
        title: 'User Mapping',
        sectionTag: 'User Mapping',
        mainTitle: 'Designing for Teenagers, College Students and Book Enthusiasts',
        briefContent: 'Target users are NYC individuals who possess smartphones and are open to reading, library users and book enthusiasts. I created user personas, journey maps, and user flows to guide the design decisions and ensure the app meets their specific needs.',
        icon: '🎨',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-userpersona.jpg',
            alt: 'User Persona',
          },
          {
            src: '/media/projects/stumbldoor/sections/4-userjourneymap.jpg',
            alt: 'User Journey Map',
          },
          {
            src: '/media/projects/stumbldoor/sections/4-userflow.jpg',
            alt: 'User Flow',
          },
        ]
      },

      {
        id: 'designprocess',
        title: 'Design Process',
        sectionTag: 'Design Process',
        mainTitle: 'From Insight to Interface',
        briefContent: 'My design process was iterative and user-centric. I structured the app content through information architecture, created wireframes and prototypes, and developed the visual design system. I developed a brand voice that is [[reliable, comfy, and intelligent]], with the tagline  [["Curiosity Stumbls, Knowledge Unfolds"]]  capturing the spirit of discovery.',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-informationarchi.jpg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/stumbldoor/sections/5-wireframe.jpg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/stumbldoor/sections/5-wireframe2.jpg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/stumbldoor/sections/6-designprocess.jpg',
            alt: 'Design Process',
          },
        ] 
      },

      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: 'Iteration',
        mainTitle: 'From Chaotic Exploration to Structured Discovery',
        briefContent: 'Through multiple iteration sessions, I refined the design with three key strategic decisions: [[Content-First Strategy]] (removing decorative backgrounds to let book covers take center stage), [[Modular Scalability]] (abandoning skeuomorphism in favor of a Grid system to accommodate thousands of books), and [[Progressive Disclosure]] (using "Stack" format to guide user interaction).',
        icon: '🔄',
        content: [
          '**Content-First Strategy**: I decided to remove decorative backgrounds and let book covers become the main focus. This approach prioritizes content over visual decoration, making it easier for users to discover and engage with books.',
          '**Modular Scalability**: I abandoned skeuomorphic design in favor of a Grid system, enabling the platform to accommodate thousands of books efficiently. This modular approach ensures the interface remains clean and functional as the library collection grows.',
          '**Progressive Disclosure**: Instead of displaying all books at once, I implemented a "Stack" format that guides users to click and explore. This approach reduces cognitive load and creates a more engaging discovery experience.'
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/iteration1.png',
            alt: 'Iteration 1'
          },
          {
            src: '/media/projects/stumbldoor/sections/iteration2.png',
            alt: 'Iteration 2'
          },
        ] 
      },

      {
        id: 'final',
        title: 'Final Showcase & Impact',
        sectionTag: 'Final Showcase & Impact',
        mainTitle: 'A New Chapter for Libraries',
        briefContent: 'Stumbldoor is more than just an app; [[it\'s a vision for the future of libraries.]] By integrating the digital and physical, I can bridge the [[21.2% gap in physical visits and make libraries vital cultural hubs for generations to come.]] The solution addresses the crisis by turning peak card registrations into active engagement, creating a virtuous cycle of discovery and community, and fostering the next generation of library-goers.',
        icon: '🚀',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/8-final.jpg',
            alt: 'App home screen'
          },
          {
            src: '/media/projects/stumbldoor/sections/8-final2.jpg',
            alt: 'Book discovery interface'
          },
          {
            src: '/media/projects/stumbldoor/sections/8-final3.jpg',
            alt: 'Book discovery interface'
          },
          {
            src: '/media/projects/stumbldoor/sections/8-final4.jpg',
            alt: 'AR Assist Interface'
          },
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection',
        mainTitle: 'Reflection & Future Roadmap',
        briefContent: 'Key learnings and the path forward for Stumbldoor.',
        icon: '💭',
        images: [
          {
            src: '/media/projects/stumbldoor/sections/reflection.png',
            alt: 'Reflection'
          },
        ]
      },
    ]
  },
  
  // ========== Excel AI Agent 项目 ==========
  {
    id: 'excel-ai-agent',
    year: '2025',
    title: { en: 'Excel AI Agent', zh: 'Excel AI 智能体' },
    subtitle: { en: 'Intelligent Data Analysis Assistant', zh: '智能数据分析助手' },
    categories: ['AI', 'Programming','Product Design'],
    tags: ['AI-Powered Tool', 'Data Analysis', 'Voice Input', 'Web Application'],
    techTags: ['#AI Agent devlopment','#HTML', '#Python', '#WebSocket', '#OpenAI API', '#SSE'],
    
    thumbnail: '/media/projects/excel ai agent/hero.png',
    brief: { en: 'A natural language-powered Excel data analysis assistant that enables non-technical users to complete complex data analysis tasks through conversational interaction.', zh: '一款基于自然语言的 Excel 数据分析助手，让非技术用户通过对话完成复杂的数据分析任务。' },
    
    heroImage: '/media/projects/excel ai agent/hero.png',
    heroVideo: 'https://vimeo.com/1144917772?share=copy&fl=sv&fe=ci',
    
    domain: [
      { en: 'AI Product Design & Development', zh: 'AI 产品设计与开发' },
      { en: 'Data Analysis Tool', zh: '数据分析工具' },
      { en: 'Web Application', zh: 'Web 应用' }
    ],
    form: [
      { en: 'UI/UX Design', zh: 'UI/UX 设计' },
      { en: 'Frontend Development', zh: '前端开发' },
      { en: 'Backend Development', zh: '后端开发' },
      { en: 'AI Integration', zh: 'AI 集成' }
    ],
    collaborators: ['Solo Project', 'OpenAI API','Cursor'],
      
      colors: {
      heroGradient: 'linear-gradient(135deg, #0D5D2E 0%,rgb(43, 138, 82) 100%)', // Excel 绿色主题
      subtitleGradient: 'linear-gradient(135deg, #0D5D2E 0%,rgb(43, 138, 82) 100%)', // Excel 绿色渐变
      underlineGradient: 'linear-gradient(135deg, #0D5D2E 0%,rgb(43, 138, 82) 100%)', // Excel 绿色渐变
      textHighlightColor: '#0D5D2E' // Excel 绿色高亮
      },
      
       overview: {
      mainTitle: { en: 'Transform Data Analysis Into Natural Conversation', zh: '将数据分析转化为自然对话' },
      briefContent: { en: 'Excel AI Agent is a [[lightweight AI agent]] that enables [[non-technical users to complete complex data analysis tasks through natural language interaction]]. By understanding user questions, automatically generating Python code, and creating visual charts, I transformed technical data analysis into an accessible conversational experience.', zh: 'Excel AI Agent 是一款[[轻量级 AI 智能体]]，让[[非技术用户通过自然语言交互完成复杂数据分析任务]]。通过理解用户问题、自动生成 Python 代码并生成可视化图表，将技术型数据分析转化为易用的对话体验。' },
      content: { en: 'Excel AI Agent is a lightweight AI agent that serves as a natural language-powered intelligent data analysis assistant, allowing users to complete complex data analysis tasks without writing code. Through AI technology, the system understands users\' natural language questions, automatically generates Python analysis code, executes analysis, and generates visual charts. The project features a clean white background design with Excel green as the primary color theme, supporting real-time streaming output and voice input, providing an efficient and intuitive data analysis experience for everyday users who need to work with Excel data but lack technical expertise.', zh: 'Excel AI Agent 是一款基于自然语言的智能数据分析助手，用户无需写代码即可完成复杂分析。系统理解自然语言问题、自动生成并执行 Python 分析代码、生成可视化图表；界面以白色为主、Excel 绿为主题色，支持实时流式输出与语音输入，为需要处理 Excel 但缺乏技术背景的用户提供高效直观的体验。' },
         challenges: [
        { en: 'How might we enable non-technical users to easily complete complex data analysis tasks?', zh: '如何让非技术用户轻松完成复杂的数据分析任务？' },
        { en: 'How can I make AI\'s working process transparent and understandable?', zh: '如何让 AI 的工作过程透明、可理解？' },
        { en: 'How to balance feature completeness with simplicity?', zh: '如何在功能完整与简洁之间取得平衡？' },
        { en: 'How to provide real-time feedback during analysis to reduce user anxiety?', zh: '如何在分析过程中提供实时反馈以降低用户焦虑？' },
         ]
       },
  
      sections: [ 
        {
        id: 'design-challenge',
        title: 'Problem Statement',
        sectionTag: 'Problem Statement',
        mainTitle: 'Breaking Down Technical Barriers in Data Analysis',
        briefContent: 'Traditional data analysis tools require users to master formulas, functions, or programming languages, creating steep learning curves. Users [[face complex multi-step operations, feedback delays, and struggle to understand code outputs.]] My goal was to create a [[zero-learning-cost experience]] with natural language interaction.',
          icon: '🔍', 
        content: [
          'Traditional data analysis tools (such as Excel, Python) have steep learning curves, requiring users to master formulas, functions, or programming languages. The interaction is complex with multi-step operations that are error-prone. Users also face feedback delays and struggle to understand code outputs.',
          'My design goal was to create a zero-learning-cost experience with natural language interaction, provide instant feedback through real-time streaming output, automatically generate visualizations to display data insights intuitively, and show clear data traceability to enhance trust.'
        ],
        imageDisplayMode: 'single',
           images: [
             {
            src: '/media/projects/excel ai agent/UserJourneyMap.png',
               alt: 'User Personas',
            caption: 'User personas and User journey Map'
             },
           ]
        },
        
        {
          id: 'solution-strategy',
          title: 'The Solution',
        sectionTag: 'The Solution',
        mainTitle: 'Natural Language Meets Real-Time Intelligence',
        briefContent: 'I designed a [[natural language interaction]] system that eliminates coding requirements. The interface features [[real-time streaming output]] to show analysis progress, [[automatic chart generation]] for visual insights, and [[data traceability]] to enhance trust. The clean white background with Excel green creates a professional, accessible experience. I adopted a [[natural language interaction approach]] to lower the barrier to entry, used streaming output to let users understand analysis progress in real-time, and structured display to make results easier to understand.',
          icon: '💡',
          content: [
          '',
          'The interface uses a clean white background with Excel green as the primary color, creating a clear and professional appearance. Left panel cards use light gray backgrounds to establish visual hierarchy. The left-right panel layout (1:3 ratio) separates input and output logically, allowing the results area to scroll independently without affecting input. Streaming output reduces user waiting anxiety and enhances the sense of interaction and participation.'
          ],
          imageDisplayMode: 'alternating',
          images: [
            {
            src: '/media/projects/excel ai agent/information architecture.png',
            alt: 'Information Architecture',
            caption: 'Page structure and content hierarchy'
          }
          ]
        },
        
        {
          id: 'features',
        title: 'Core Features',
        sectionTag: 'Key Features',
        mainTitle: 'Three Pillars of Intelligent Analysis',
        briefContent: 'The platform\'s core features directly address user pain points: [[Natural language interaction]] (text and voice) eliminates coding needs, [[streaming output]] provides real-time feedback, and [[intelligent chart generation]] automatically creates visualizations. The complete flow—from file upload to analysis results—happens seamlessly through conversation.',
          icon: '✨',
        content: 'The platform\'s core features directly address user pain points. Natural language interaction (both text and voice) eliminates the need for code, streaming output provides real-time feedback, intelligent chart generation automatically creates appropriate visualizations, and data traceability enhances trust. The main user flow starts with uploading an Excel file, which triggers automatic preprocessing and indexing. Users then input natural language questions and click "Run". The system generates an analysis plan with progress display, generates Python code with streaming output to the UI, executes the code with streaming execution results, generates visualization charts automatically, generates analysis summary with AI, and finally displays data traceability showing used data columns.',
        images:[
          {
            src: '/media/projects/excel ai agent/5.png',
            alt: 'Analysis Results',
          },
        ],  
        features: [
            {
            name: 'Natural Language Interaction',
            description: 'Text & Voice Input',
            detail: 'Users can ask questions in natural language through text or voice input, with real-time transcription support. No need to learn formulas or programming.'
          },
          {
            name: 'Intelligent Chart Generation',
            description: 'Auto Visualization',
            detail: 'Automatically determines chart type and generates interactive visualizations using Plotly'
          },
          {
            name: 'Data Traceability',
            description: 'Transparency & Trust',
            detail: 'Clearly shows which data columns were used, enhancing result credibility'
          }
        ],
        
        },
        
         {
           id: 'technical-implementation',
        title: 'Technical',
        sectionTag: 'Technical Implementation',
        mainTitle: 'Three-Phase Intelligent Architecture',
        briefContent: 'I built a lightweight architecture using [[native JavaScript]] for the frontend and [[Flask + Socket.IO]] for the backend. The system operates in three phases: preprocessing and knowledge base construction, structure analysis and code generation, and execution with result presentation. [[SSE]] enables real-time streaming, while [[Jupyter Kernel]] provides secure code execution.',
           icon: '💻',
        content: [
          'The frontend uses native JavaScript with no framework dependencies for optimal performance. SSE (Server-Sent Events) enables real-time streaming output, WebSocket supports real-time voice input transmission, and responsive CSS implements complex layouts and animations.',
          'The backend uses Flask + Socket.IO as a lightweight web framework. Jupyter Kernel provides an isolated code execution environment for security. OpenAI API handles code generation, summarization, and voice transcription. The application is a single-page application with no page navigation, providing a smooth experience.'
           ],
          features: [
            {
            name: 'Preprocessing & Knowledge Base Construction',
            detail: 'Clean and standardize Excel data, extract headers to build searchable indexes.'
          },
          {
            name: 'Structure Analysis & Code Generation',
            detail: 'Transform user intent into analysis steps and generate executable code.'
          },
          {
            name: 'Execution & Result Presentation',
            detail: 'Execute code, provide data traceability, and output visualizations. '
          }
           ],
           buttons: [
             {
               text: 'View Full Code & Documentation',
            url: 'https://github.com/cqyestateyuki-prog/excelaiagent',
               type: 'github'
             }
           ],
        },

        {
          id: 'design-system',
        title: 'Design System',
        sectionTag: 'Design System',
        mainTitle: 'Clean, Professional, Accessible',
        briefContent: 'I established a [[clean white background]] as the main canvas with [[Excel green]] as the primary brand color. The layout uses a [[1:3 ratio]] for left and right panels, creating clear visual hierarchy. All components follow consistent spacing, border radius, and flat design principles for simplicity and clarity.',
          icon: '🎨',
        content: [
          'The design uses a clean white background as the main canvas, with Excel green as the primary brand color for titles, buttons, and emphasis. Left panel cards use light gray backgrounds to create visual hierarchy, while top sections use an even lighter gray.  Text colors follow a clear hierarchy: Excel green for primary text and titles, deep green for body text, and medium gray for secondary information.',
          'The layout uses CSS Grid with a 1:3 ratio for left and right panels. All cards use consistent border radius, padding with no shadows for a clean, flat design. The design emphasizes simplicity, clarity, and consistency throughout.'
        ],
        imageDisplayMode: 'single',
          images: [
            {
            src: '/media/projects/excel ai agent/DesignSystem.png',
            alt: 'Design System',
            caption: 'Color palette, typography, spacing system, and component styles'
          },
        ]
       },

        {
          id: 'final-showcase',
          title: 'Final Showcase & Impact',
        sectionTag: 'Final Showcase & Impact',
        mainTitle: 'From Technical Complexity to Natural Conversation',
        briefContent: 'Excel AI Agent transforms data analysis from a [[technical task requiring coding skills]] into a [[conversational experience accessible to everyone]]. The platform reduces learning costs, improves efficiency through automation, and enhances visualization from plain text to [[interactive charts]]. The design demonstrates how AI technology can solve real-world problems while maintaining excellent user experience.',
          icon: '🚀',
        content: 'Excel AI Agent successfully transforms complex data analysis from a technical task requiring coding skills into a conversational experience accessible to everyone. The platform reduces learning costs from needing to learn Excel/Python to simply asking questions in natural language, improves efficiency from manually writing code to automatic generation and execution, and enhances result visualization from plain text output to interactive charts. The design demonstrates how AI technology can be applied to solve real-world problems while maintaining excellent user experience.',
          imageDisplayMode: 'single',
          images: [
            {
            src: '/media/projects/excel ai agent/home.png',
              alt: 'Homepage',
            caption: 'Clean, modern homepage with file upload and query input'
          },
          {
            src: '/media/projects/excel ai agent/5.png',
            alt: 'Analysis Results',
            caption: 'Structured results display: summary, traceability, code, output, and charts'
          },
          {
            src: '/media/projects/excel ai agent/4.png',
            alt: 'Charts',
            caption: 'Automatically generated charts with Plotly'
          },
          {
            src: '/media/projects/excel ai agent/7.png',
            alt: 'Multiple languages support',
            caption: 'Support Chinese and English'
          }
        ]
      }
    ]
  },

  // ========== Petiboxy Charity Platform 项目 ==========
  {
    id: 'petiboxy',
    year: '2025',
    featured: true, order: 4, // 提进 Selected Work · 第 4 位
    title: { en: 'Petiboxy Charity Platform', zh: 'Petiboxy 宠物救助平台' },
    subtitle: { en: 'Connecting Love, Saving Lives', zh: '连接爱心，拯救生命' },
    categories: ['UIUX', 'Product Design', 'Research'],
    tags: ['Mobile App', 'Charity Platform', 'Pet Rescue', 'User Experience Design'],
    techTags: ['#Figma', '#UI/UX Design', '#Mobile App', '#Product Design'],
    
    thumbnail: '/media/projects/petiboxy/hero.png',
    brief: { en: 'A comprehensive pet rescue ecosystem connecting people with pets in need, supporting rescue organizations, and building a compassionate community.', zh: '一个连接求助宠物与领养者、支持救助机构、共建爱心社区的宠物救助生态平台。' },
    
    heroImage: '/media/projects/petiboxy/hero.png',
    heroVideo: null,
    
    domain: [
      { en: 'Mobile App Feature Module', zh: '移动应用功能模块' },
      { en: 'Charity Platform', zh: '公益平台' },
      { en: 'Pet Rescue', zh: '宠物救助' }
    ],
    form: [
      { en: 'UI/UX Design', zh: 'UI/UX 设计' },
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Research', zh: '用户研究' }
    ],
    collaborators: ['Solo Project'],
    
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(146, 51, 75) 0%,rgb(231, 74, 74)  100%)',
      subtitleGradient: 'linear-gradient(135deg, #FF7675 0%, #E85C5C 100%)',
      underlineGradient: 'linear-gradient(135deg, #FF7675 0%, #E85C5C 100%)',
      textHighlightColor: '#FF7675',
      darkColor: '#333333',
      lightColor: '#FF7675',
      heroStyle: 'light' // 'light' for white background, 'gradient' for gradient background
    },
    
    overview: {
      mainTitle: { en: 'Building a Comprehensive Pet Rescue Ecosystem', zh: '构建完整的宠物救助生态' },
      briefContent: { en: 'Expanding the mission of [[Petiboxy]], a premier pet fresh food brand, I conceptualized and delivered a dedicated charity ecosystem to tackle the crisis of [[90 million stray animals]]. This project creates a vital connection for the [[60% of inhibited adopters]], translating the abstract values of [[Professionalism, Safety, Love, and Responsibility]] into a tangible, user-centric experience.', zh: '延续高端宠物鲜食品牌 Petiboxy 的使命，我为[[9000 万流浪动物]]危机设计并交付了独立的公益生态，为[[60% 有顾虑的潜在领养者]]建立连接，将[[专业、安全、爱与责任]]转化为可感知的、以用户为中心的体验。' },
      challenges: [
        { en: 'How might we connect 90 million stray animals with people who want to help?', zh: '如何连接 9000 万流浪动物与愿意帮助的人？' },
        { en: 'How might we reduce the adoption barriers that prevent 60% of willing adopters?', zh: '如何降低阻碍 60% 有意领养者的门槛？' },
        { en: 'How might we support rescue organizations with funding and visibility?', zh: '如何从资金与曝光上支持救助机构？' },
        { en: 'How might we create a trustworthy, accessible platform for pet rescue?', zh: '如何打造可信、易用的宠物救助平台？' }
      ]
    },
    
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        sectionTag: 'The Crisis',
        mainTitle: '90 Million Stray Animals in China Await For Help',
        briefContent: 'Behind every statistic is a life. [[90 million stray animals]] (50 million cats, 40 million dogs) [[face abandonment, disease, and uncertain futures]]. Yet most people don\'t know where to find them or how to help. This represents [[1/5 of the world\'s stray animal population]], with consistent high numbers since 2021.',
        icon: '💡',
        content: [
          'Behind every statistic is a life. These animals face abandonment, disease, and uncertain futures. Yet most people don\'t know where to find them or how to help.',
          'The scale of the crisis includes 50 million stray cats, 40 million stray dogs, representing 1/5 of the world\'s stray animal population, with consistent high numbers since 2021.'
        ],
        images: [
          {
            src: '/media/projects/petiboxy/problem2.png',
            alt: 'user research',
          }
        ]
      },
      
      {
        id: 'research',
        title: 'User Research',
        sectionTag: 'User Research',
        mainTitle: 'Why 60% Want to Adopt But Can\'t',
        briefContent: 'Despite strong adoption intent, structural barriers prevent most people from adopting. [[60% of potential pet owners]] express willingness to adopt if a reliable platform existed. However, [[43.9% of current pets]] come from pet stores, [[only 35%]] are acquired through adoption, and [[21.1%]] come from other sources. The problem isn\'t lack of willingness—[[it\'s lack of access.]]',
        icon: '🔍',
        content: [
          'Despite strong adoption intent, structural barriers prevent most people from adopting. The missing link: a trustworthy, accessible platform.',
          '60% of potential pet owners express willingness to adopt if a reliable platform existed. However, 43.9% of current pets come from pet stores, only 35% are acquired through adoption, and 21.1% come from other sources. The problem isn\'t lack of willingness—it\'s lack of access.'
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/petiboxy/userresearch.png',
            alt: 'user research',
          }
        ]
      },
      
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: 'The Solution',
        mainTitle: 'Three Core Features to Address the Crisis',
        briefContent: 'The platform addresses three critical barriers: [[Information Fragmentation]] (lost pet information scattered across WeChat, Weibo, and TikTok), [[Adoption Barriers]] (potential adopters don\'t know where to find adoptable pets), and [[Resource Scarcity]] (rescue organizations struggle for funding and visibility). A comprehensive ecosystem designed to connect people with pets in need, support rescue organizations, and build a compassionate community. The platform features [[Baby Come Home]] for lost pet reunification, [[Adoption & Rescue]] for pet matching, and [[Charity Organizations]] for supporting rescue work.',
        icon: '💡',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Find Lost Pets Easily',
            detail: 'Centralized lost pet reporting system with community-powered search network and geo-location search. Help reunite lost pets with their families.',
            image: '/media/projects/petiboxy/baby-come-home.png',
          },
          {
            name: 'Convenient Adoption Process',
            detail: 'Comprehensive pet profiles with health records, personality descriptions, and photos. Connect adopters with their perfect companion.',
            image: '/media/projects/petiboxy/adoption-rescue.png',
          },
          {
            name: 'Easy Connection to Rescue Organizations',
            detail: 'Verified rescue organization directory with integrated fundraising. Support professional rescue work with transparency and accountability.',
            image: '/media/projects/petiboxy/charity-orgs.png',
          }
        ]
      },
      
      {
        id: 'design-philosophy',
        title: 'Design Approach & Iteration',
        sectionTag: 'Design Approach & Iteration',
        mainTitle: 'Built on Three Core Principles',
        briefContent: 'The platform is built on three core principles: [[Integrated Pet Profiles]] (seamless connection between Petiboxy\'s nutrition app and charity features), [[Multi-Channel Rescue]] (lost pet finding + adoption matching + organization support), and [[Community-Driven Growth]] (users share pet stories and success narratives to build trust through emotional storytelling).',
          icon: '🎨',
        content: [
          'Principle 1: Integrated Pet Profiles - Seamless connection between Petiboxy\'s nutrition app and charity features. Complete pet health records support better adoption matches.',
          'Principle 2: Multi-Channel Rescue - Lost pet finding + adoption matching + organization support. Users can participate at any comfort level.',
          'Principle 3: Community-Driven Growth - Users share pet stories and success narratives. Social proof builds trust and encourages participation through emotional storytelling.'
        ],
        imageDisplayMode: 'single',
        images: [
          {
            
          }
        ]
      },
      
      {
        id: 'final-showcase',
        title: 'Final Showcase',
        sectionTag: 'Final Showcase',
        mainTitle: 'Every Life Matters',
        briefContent: 'Together, we can transform [[90 million lives]]. One adoption, one rescue, one act of kindness at a time. Petiboxy creates a platform where love connects, lives are saved, and communities grow stronger through compassion and responsibility.',
        icon: '🚀',
        content: 'Together, we can transform 90 million lives. One adoption, one rescue, one act of kindness at a time. Petiboxy creates a platform where love connects, lives are saved, and communities grow stronger through compassion and responsibility. The platform represents a shift from purchase-based to adoption-based pet culture, reducing stray animal populations and building a more compassionate society.',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/petiboxy/final1.png',
            alt: 'Final Visual',
          },
          {
            src: '/media/projects/petiboxy/final2.png',
            alt: 'Final Visual',
          }, 
          {
            src: '/media/projects/petiboxy/final3.png',
            alt: 'Final Visual',
          },
        ]
      },
      
      {
        id: 'impact',
        title: 'Expected Impact',
        sectionTag: 'Expected Impact',
        mainTitle: 'Platform Success Metrics',
        briefContent: 'The platform aims for measurable social impact: [[+45% Lost Pets Found]] (improvement in reunion success rate), [[+60% Adoption Rate]] (increase in adoption-over-purchase decisions), [[+75% Org Support]] (growth in funding and resources), and [[80% Community Engagement]] (users participate in platform activities). Long-term vision: Shift China\'s pet culture from purchase-based to adoption-based.',
        icon: '📊',
        content: [
          'Measurable Social Impact:',
          '+45% Lost Pets Found - Improvement in reunion success rate',
          '+60% Adoption Rate - Increase in adoption-over-purchase decisions',
          '+75% Org Support - Growth in funding and resources',
          '80% Community Engagement - Users participate in platform activities',
          'Long-term vision: Shift China\'s pet culture from purchase-based to adoption-based, reducing stray animal populations and building a more compassionate society.'
        ],
          imageDisplayMode: 'single',
          images: [
            {
            src: '/media/projects/petiboxy/impact.png',
            alt: 'Expected Outcomes',
            caption: 'Platform success metrics and expected impact'
          }
        ]
      }
    ]
  },
  
  // ========== Ziplink UIUX项目示例 ==========
  {
    id: 'ziplink',
    year: '2024',
    title: { en: 'Ziplink', zh: 'Ziplink' },
    subtitle: { en: 'In-Car Experience Redesign', zh: '车载体验重设计' },
    categories: ['UIUX','Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    techTags: ['#Figma', '#Wireframe', '#Prototype'],
    
    thumbnail: '/media/projects/ziplink/Slide27.jpeg',  // 列表页缩略图
    brief: { en: 'Redesign the user experience of future in-car system.', zh: '面向未来车载系统的用户体验重设计。' },
    
    heroImage: '/media/projects/ziplink/Slide1.jpeg',
    heroVideo: null,  // 可选：视频路径
    domain: [
      { en: 'In-Car System', zh: '车载系统' },
      { en: 'UI/UX', zh: 'UI/UX' }
    ],
    form: [
      { en: 'Research', zh: '用户研究' },
      { en: 'Wireframing & Prototyping', zh: '线框与原型' }
    ],
    collaborators: ['Yu Zhou', 'Francisco Guerrero'],  // 或其他合作者名字
  
    colors: {
      heroGradient: 'linear-gradient(135deg, #69a84f 0%, #b2e36e 100%)', // 橙红到青色
      subtitleGradient: 'linear-gradient(135deg, #69a84f 0%, #b2e36e 100%)', // 橙红到青色
      underlineGradient: 'linear-gradient(135deg, #69a84f 0%, #b2e36e 100%)' // 橙红到青色
    },

    overview: {
      mainTitle: { en: 'Redesigning the Future of In-Car Experience', zh: '重设计未来车载体验' },
      briefContent: { en: 'In the bustling streets of cities, where the rhythm of traffic never ceases, the challenge of maintaining focus while driving is ever-present. [[Ziplink]] aims to address the critical issue of [[driver distraction and cognitive overload]], particularly when interacting with in-car systems. With a focus on enhancing the driving experience for all, especially those new to the roads, the project seeks to integrate innovative solutions into the existing ZipCar app, making it a more comprehensive tool for drivers.', zh: '在城市车流中，保持驾驶专注始终是挑战。[[Ziplink]] 针对[[驾驶员分心与认知负荷]]问题，尤其在车载系统交互场景下，为所有人（尤其是新手上路者）提升体验，并将创新方案整合进现有 ZipCar 应用，使其成为更完整的驾驶工具。' },
      challenge: { en: 'How might we reduce cognitive overload for new drivers by creating a unified in-car experience that minimizes the need to switch between multiple apps and screens while driving?', zh: '如何通过统一的车载体验减少新手驾驶员的认知负荷，从而减少驾驶时在多个应用与屏幕间切换？' }
    },
    
    sections: [

      {
        id: 'problemstatement',
        title: 'Problem Statement',
        sectionTag: 'Problem Statement',
        mainTitle: 'The Challenge of Driver Distraction and Cognitive Overload',
        briefContent: 'In the current urban landscape, drivers face the significant challenge of [[minimizing distractions and reducing cognitive load]] while navigating complex in-car systems. This issue is particularly acute for [[new drivers]], who must juggle the demands of traffic, stress, and the pace of driving, all while interacting with electronic screens and in-car navigation.',
        content: "In the current urban landscape, drivers face the significant challenge of minimizing distractions and reducing cognitive load while navigating complex in-car systems. This issue is particularly acute for new drivers, who must juggle the demands of traffic, stress, and the pace of driving, all while interacting with electronic screens and in-car navigation. The danger of dividing attention between the road and these systems cannot be overstated, as it not only increases the risk of accidents but also contributes to a heightened sense of anxiety and discomfort.",
        imageDisplayMode: 'two-column', // 网格模式
        images: [
          {
            src: '/media/projects/ziplink/Slide5.jpeg',
            alt: 'Problem Statement',
          },
        ]
      },
      {
        id: 'research',
        title: 'Research',
        sectionTag: 'User Research',
        mainTitle: 'Understanding New Drivers\' Challenges',
        briefContent: 'Our investigation into the new driver\'s driving experience highlights a [[critical gap in the current in-car system interaction paradigm]]. Drivers, especially those new to the city\'s roads, often find themselves overwhelmed by the simultaneous demands of traffic navigation, sign comprehension, and the use of electronic navigation aids. Our competitive analysis focused on [[Zipcar, Google Maps, and Garmin]], identifying gaps in their offerings that impact the driving experience, especially for new drivers in urban settings.',
        icon: '💡',
        content: "Our investigation into the new driver's driving experience highlights a critical gap in the current in-car system interaction paradigm. Drivers, especially those new to the city's roads, often find themselves overwhelmed by the simultaneous demands of traffic navigation, sign comprehension, and the use of electronic navigation aids. Our competitive analysis focused on Zipcar, Google Maps, and Garmin, identifying gaps in their offerings that impact the driving experience, especially for new drivers in urban settings.",
        images: [
          {
            src: '/media/projects/ziplink/Slide7.jpeg',
            alt: 'Research - Zipcar',
          },
          {
            src: '/media/projects/ziplink/Slide8.jpeg',
            alt: 'Research - Google Maps',
          },
          {
            src: '/media/projects/ziplink/Slide9.jpeg',
            alt: 'Research - Garmin',
          },
          {
            src: '/media/projects/ziplink/Slide10.jpeg',
            alt: 'Research Interviews',
          },
          {
            src: '/media/projects/ziplink/Slide11.jpeg',
            alt: 'Interview Takeaways',
          },
          {
            src: '/media/projects/ziplink/Slide12.jpeg',
            alt: 'Interview Takeaways2',
          },
          {
            src: '/media/projects/ziplink/Slide6.jpeg',
            alt: 'Early Concepts',
          },
        ]  
      },
      {
        id: 'features',
        title: 'Solution & Features',
        sectionTag: 'The Solution',
        mainTitle: 'A Unified Platform for Safer Driving',
        briefContent: 'To address these challenges, we propose a comprehensive enhancement of the existing ZipCar app, transforming it into a [[unified platform]] that integrates essential navigation and AI-assisted driving support. The upgraded app features [[Integrated Navigation]], [[AI Assistant]], and [[Heads-Up Display (HUD)]] to significantly enhance the driving experience, making it safer, more comfortable, and less stressful, particularly for new drivers.',
        icon: '✨',
        content: [
          'To address these challenges, we propose a comprehensive enhancement of the existing ZipCar app, transforming it into a unified platform that not only simplifies car rental but also integrates essential navigation and AI-assisted driving support. The upgraded app will feature:',
          'Integrated Navigation: A new navigation feature within the ZipCar app will offer maps, search capabilities, and real-time navigation, eliminating the need for drivers to switch between different apps for directions. This integration aims to streamline the driving process, making it more intuitive and less distracting.',
          "AI Assistant: An embedded AI assistant will act as a co-pilot, providing real-time traffic insights, system interaction support, and proactive driving and parking suggestions. This assistant is designed to adapt to the driver's needs, offering personalized guidance that enhances understanding of traffic patterns and in-car system functionalities.",
          "Heads-Up Display (HUD): To further reduce cognitive load and keep drivers' eyes on the road, a small projector will display critical traffic information directly onto the windshield. This feature ensures that drivers can access navigation data without the need to look away from their driving path, significantly reducing the risk of distraction.",
          "By integrating these features into a single app, we aim to significantly enhance the driving experience, making it safer, more comfortable, and less stressful, particularly for new drivers like Lucas. This holistic approach addresses the core issues identified in our research, offering a practical solution to the problem of driver distraction and cognitive overload in urban driving environments."
        ],
        images: [
          {
            src: '/media/projects/ziplink/Slide14.jpeg',
            alt: 'Unique Features',
          },
        ]
      },

      {
        id: 'userflow',
        title: 'User Flow, Personas and Journey Maps',
        sectionTag: 'User Mapping',
        mainTitle: 'Mapping the Driver\'s Journey',
        briefContent: 'The persona and journey maps reveal [[critical decision points]] from initial car rental through navigation setup to driving completion, showing where users needed AI assistance versus manual control. These visualizations exposed [[key friction points where cognitive overload occurs]], particularly when users must decide between different navigation modes or when the system switches between automated and manual controls. This comprehensive mapping directly informed our solution to integrate all functions into a unified interface with contextual AI support.',
        icon: '🎨',
        content: 'The pictures present the persona and mapped out critical decision points from initial car rental through navigation setup to driving completion, revealing where users needed AI assistance versus manual control. The journey maps illustrated how different user types navigate the system - from accessing the Zipcar app, through the AI assistant onboarding, to destination input and route selection. These visualizations exposed key friction points where cognitive overload occurs, particularly when users must decide between different navigation modes or when the system switches between automated and manual controls. This comprehensive mapping directly informed our solution to integrate all functions into a unified interface with contextual AI support.',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/ziplink/Slide13.jpeg',
            alt: 'User Persona',
          },
          {
            src: '/media/projects/ziplink/Slide15.jpeg',
            alt: 'User Flow',
          },
          {
            src: '/media/projects/ziplink/Slide16.jpeg',
            alt: 'User Journey Map',
          }
        ]
      },

      {
        id: 'prototypes',
        title: 'Wireframes & Prototypes',
        sectionTag: 'Design Process',
        mainTitle: 'From Concept to Prototype',
        briefContent: 'The wireframes and prototypes demonstrate the evolution of the design, from initial concepts to refined interfaces that integrate navigation, AI assistance, and HUD features into a cohesive user experience.',
        icon: '💡',
        content: "",
        images: [
          {
            src: '/media/projects/ziplink/Slide17.jpeg',
            alt: 'Design Process',
          },
          {
            src: '/media/projects/ziplink/Slide18.jpeg',
            alt: 'Design Process2',
          },
          {
            src: '/media/projects/ziplink/Slide19.jpeg',
            alt: 'Design Process3',
          },
          {
            src: '/media/projects/ziplink/Slide20.jpeg',
            alt: 'Design Process4',
          },
          {
            src: '/media/projects/ziplink/Slide23.jpeg',
            alt: 'Design Process5',
          },
        ] 
      },

      {
        id: 'final',
        title: 'Final Showcase',
        sectionTag: 'Final Showcase',
        mainTitle: 'A Clean, Intuitive Interface for Safer Driving',
        briefContent: 'The final app design showcases a [[clean, intuitive interface]] that integrates all essential features into a unified platform, reducing cognitive load and enhancing the driving experience for all users, especially new drivers.',
        icon: '🚀',
        content: 'The final app design showcases a clean, intuitive interface.',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/ziplink/Slide22.jpeg',
            alt: 'Final Logo'
          },
          {
            src: '/media/projects/ziplink/Slide25.jpeg',
            alt: 'Final Showcase2'
          },
          {
            src: '/media/projects/ziplink/Slide26.jpeg',
            alt: 'Final Showcase3'
          },
          {
            src: '/media/projects/ziplink/Slide2.jpeg',
            alt: 'Final Showcase4'
          }
        ]
      }
    ]
  },

  // ========== Music Encounter 游戏项目 ==========
  {
    id: 'music-encounter',
    year: '2024',
    title: { en: 'Music Encounter', zh: '音乐邂逅' },
    subtitle: { en: '3D Open World Social Adventure Game', zh: '3D 开放世界社交冒险游戏' },
    categories: ['Game', 'Research', 'Programming'],
    tags: ['Game Design', 'Unity', 'Music Interaction', 'Social Gaming', 'Research'],
    techTags: ['#Unity', 'C#', '#Interactive Design', '#Music notes from text'],
    
    thumbnail: '/media/projects/musicencounter/Hero.png',
    brief: { en: 'Exploring music and sound as primary means of interaction and connection in games.', zh: '探索音乐与声音作为游戏中互动与连接的主要方式。' },
    
    heroImage: '/media/projects/musicencounter/Hero.png',
    heroVideo: null,
    
    domain: [
      { en: 'Video Game', zh: '电子游戏' },
      { en: 'Interactive Design', zh: '交互设计' },
      { en: 'Music Technology', zh: '音乐技术' },
      { en: 'Research', zh: '研究' }
    ],
    form: [
      { en: 'Game Design & Development', zh: '游戏设计与开发' },
      { en: 'C# Programming', zh: 'C# 编程' },
      { en: 'Interactive Design', zh: '交互设计' },
      { en: 'Research', zh: '研究' }
    ],
    collaborators: ['Solo Project', 'Parsons School of Design'],
    
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(88, 80, 201) 0%,rgb(231, 135, 103) 100%)',
      subtitleGradient: 'linear-gradient(135deg,rgb(88, 80, 201) 0%,rgb(254, 142, 73)  100%)',
      underlineGradient: 'linear-gradient(135deg, #534ea3 0%, #dd8b59 100%)'
    },
    
    overview: {
      mainTitle: { en: 'Music as a Universal Language for Digital Connection', zh: '音乐作为数字连接的世界语' },
      content: { en: "Music Encounter is a groundbreaking Open World 3D world adventure game that explores how music and sound can serve as the primary means of interaction and connection between people.Music moves people. Its kinetic power can affect human emotions and behaviors, and people can feel the bonds between people under certain circumstances across different cultures. The goal of the game is to use music and sound to connect and match people, and to provide people with a good interactive and social experience. ", zh: '《音乐邂逅》是一款以音乐与声音为主要互动与连接方式的 3D 开放世界冒险游戏。音乐能打动人，其动能可影响情绪与行为，在不同文化下让人感受到人与人的纽带。游戏目标是以音乐与声音连接、匹配玩家，提供优质的互动与社交体验。' },
      challenges:[
        { en: 'How can music and sound create deeper, more meaningful connections between people in digital spaces?', zh: '音乐与声音如何在数字空间中创造更深、更有意义的连接？' },
        { en: 'Can music and sound help to build connections between people, and help people find their partners, friends, or even lovers in a more efficient and interesting way?', zh: '音乐与声音能否更高效、有趣地帮助人们建立连接，找到伴侣、朋友甚至恋人？' },
        { en: 'How will musical communication be different from traditional text, video, or voice communication?', zh: '音乐沟通与传统的文字、视频或语音沟通有何不同？' },
        { en: 'How would open world 3D games fit into these interests?', zh: '开放世界 3D 游戏如何与这些诉求结合？' }
      ] 
    },
    
    sections: [
      {
        id: 'research-background',
        title: 'Research Background',
        mainTitle: 'Scientific Foundation for Musical Connection',
        icon: '🔬',
        content: [
          "This game project emerged from a fundamental question: Can music and sound help build connections between people more effectively than traditional text, video, or voice communication? The research is grounded in scientific evidence showing that music has universal patterns that can indicate personality traits and create emotional resonance across cultures.",
          "Studies demonstrate that people with similar musical preferences often share personality characteristics, making music an effective tool for matching and connecting individuals. The 2012 research by Sievers et al. proved that emotional expressions in music are universal across cultures, sharing similar dynamic profiles both musically and in movement.",
          "The project aims to address the gap in current digital social platforms, which lack integrated, immersive environments for emotional-level communication and deep relationship building through music."
        ],
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/musicencounter/research.jpg',
            alt: 'Music Research',
            caption: 'Research showing universal patterns in musical preferences and emotional expression'
          },
        ]
      },

      {
        id: 'design-process',
        title: 'Brainstorming & Prototyping',
        mainTitle: 'From Paper Prototypes to Game Design',
        icon: '📋',
        content: [
          "Until 2023, most games or social media applications have a relatively single function that contains musical elements. There are music-based audio games like Karaoke Party, Beat Saber, and Taiko no Tatsujin, and music social platforms like Netease Music and Smule, but they lack a diverse, integrated, and immersive platform for people to have communication on an emotional level.",
          "I created 5 characters on sketch paper and delivered the characters to different people for acting as the characters. The condition was: if people can only use sound effects and music to communicate/interact with each other, what will they do? The result showed several different outcomes when people meet. Some people gave common greeting sounds similar to 'Hello' and mimicked friend voices, trying to reach a resonance. Some people mimicked the sound of fights and attacks. Some people kept silent.",
          "Inspired by the paper prototype, I created the game design document, storyboards, and UI wireframes of the game. Inspired by games like Sky: Children of the Light and Journey, I decided to abandon/reduce the use of language and text, and use a minimalist and low-poly art style in the game, striving to bring relaxation and comfort to the players."
        ],
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/musicencounter/paperprototype.jpg',
            alt: 'Paper Prototype Characters',
            caption: 'Hand-drawn character sketches used for paper prototype' 
          },
        ]
      },

      {
        id: 'game-concept',
        title: 'Game Concept & World Design',
        mainTitle: 'The Magical World of Sonorians',
        icon: '🎵',
        content: [
          "Music Encounter is set in a magical world where everyone is a 'Sonorian' - derived from 'sonorous' meaning rich and full in sound. Each character is born with a unique melody representing their persona.",
          "The world is threatened by 'chaos' - monsters that disturb the harmony of the Sonorians. Players must use music and sound to communicate and connect with others, solve puzzles, and restore balance to their musical world.",
          "The game is aimed at young people aged between 12-35. These people usually have a strong adventure and social desire, although hypothetically the game may attract more introverted people."
        ],
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/musicencounter/Story.png',
            alt: 'Musical Fantasy World',
            caption: 'The magical world of Sonorians'
          },
          {
            src: '/media/projects/musicencounter/StartScreen.png',
            alt: 'Game Screen', 
            caption: 'Game Screen'
          },
          {
            src: '/media/projects/musicencounter/environment.png',
            alt: 'Low-poly Art Style',
            caption: 'Minimalist, relaxing visual design inspired by Journey and Sky'
          }
        ]
      },

      {
        id: 'development-testing',
        title: 'Iteration & User Testing',
        mainTitle: 'Two Major Iterations with 105 Participants',
        icon: '⚙️',
        content: [
          "The development followed a rigorous research methodology with two major iterations. Iteration I focused on basic core features including character controller, UI interface, and instrument performance functions. The open world was built using Unity Asset Store assets with basic musical elements integrated.\n\nIteration II implemented most features from the game design document, including a polished game environment, interactable objects, inventory systems, NPCs, and an expanded instrument collection. A text-to-music input field was added, allowing players to convert text into musical notes for communication.",
          "The user feedback and gaming experience were collected through a survey that was delivered after people exited the game. The survey included questions such as demographic information, player's characteristics, player's satisfaction level with various functions in the game, the difficulties and problems they faced while playing the game, etc. Most of the questions in the survey use a five-point scale, while other questions are short answer questions. The players' in-game data, such as the total time they spent in the game, was collected through Unity Tinylytics. An iterative approach was used to improve players' gaming experience based on their feedback in the survey.\n\nThe research collected data from 105 participants across two iterations. Key findings showed that 52.4% of testers were introverted, 17.1% outgoing, and 29.5% in-between, supporting the hypothesis that Music Encounter would attract introverted players. 62.8% of participants rated their overall gaming experience 3+ out of 5, while 72.3% rated their musical experience 3+ out of 5, describing it as 'fun,' 'interesting,' and 'relaxing.' 82.9 percent of people would like to talk to someone if his surrounding melody is somewhat that they like or enjoy. 78.1 percent of people believe that playing music/sound together with someone increases their connection with others. These all suggest that there is a great possibility to use music to connect, match and build relationships between people. ",
        ],
        imageDisplayMode: 'alternating',
        images: [
            {
              src: '/media/projects/musicencounter/iteration.jpg',
              alt: 'Iteration Screenshot',
              caption: 'Iteration Screenshot'
            },
            {
              src: '/media/projects/musicencounter/Playerfeedback.jpg',
              alt: 'User Feedback & Gaming Experience data',
              caption: 'User Feedback & Gaming Experience data'
            },
          ]
      },

      {
        id: 'technical-challenges',
        title: 'Technical Implementation',
        mainTitle: 'Unity Development with Music Integration',
        icon: '💻',
        content: [
          "The game was developed in Unity using C# for core mechanics and music integration. Major technical challenges included implementing a text-to-music conversion system, and a knapsnap system to collect different musical instruments and switch them.",
          "Current limitations include a limited music generation library that selects from pre-composed tracks rather than truly generating music based on personality data. Future improvements would integrate AI music generation APIs like Google's MusicLM for more dynamic, personalized musical experiences.",
          "The project can also explore connecting external MIDI devices and integrating with music streaming platforms like YouTube Music for enhanced personalization and social sharing capabilities in the future. Future development includes implementing Universal Design principles to accommodate diverse individual differences and ensure the game is accessible to players with various abilities and needs."
        ],
        imageDisplayMode: 'two-column',
        images: [
          {
            src: '/media/projects/musicencounter/unity-code.jpg',
            alt: 'Unity C# Code',
            caption: 'Core game mechanics and music interaction code'
          },
          {
            src: '/media/projects/musicencounter/music-system.jpg',
            alt: 'Music Generation System',
            caption: 'Technical architecture for music generation and interaction'
          },
        ]
      },

      {
        id: 'showcase',
        title: 'Final Showcase',
        mainTitle: 'Proving Music as a Universal Connection Tool',
        icon: '🏆',
        content: "Music Encounter successfully demonstrates the potential of music as a universal language for digital social interaction. The research proves that music can effectively connect people, with 78.1% of participants reporting increased connection through musical collaboration. This project was developed as part of my Creative and Practice Seminar at Parsons School of Design under Professor John Sharp, culminating in a comprehensive academic paper titled 'Music Encounter: Exploring Sound and Music as Primary Means of Interaction in Games' published in May 2023.\n\nThe work contributes to the growing field of musical human-computer interaction and provides a foundation for future developments in AI-powered music generation and social matching systems.",
        imageDisplayMode: 'two-column',
        images: [
          {
            src: '/media/projects/musicencounter/StartScreen.png',
            alt: 'Gameplay Screenshot - Start Screen',
            caption: 'Game Start Screen'
          },
          {
            src: '/media/projects/musicencounter/personality.png',
            alt: 'Gameplay Screenshot - Set your personality',
            caption: 'Players set their personality and a melody will be generated'
          },
          {
            src: '/media/projects/musicencounter/123.png',
            alt: 'Gameplay Screenshot - Explore the world',
            caption: 'Players having adventures in the world'
          },
          {
            src: '/media/projects/musicencounter/456.png',
            alt: 'Gameplay Screenshot - Explore the world2',
            caption: 'Players having adventures in the world'
          },
        
        
        ],
        buttons: [
          {
            text: 'View Research Paper',
            url: '/files/Music Encounter.pdf',
            type: 'download',
            downloadName: 'Music Encounter.pdf'
          },
          {
            text: 'Play Game',
            url: 'https://caoqingyu.itch.io/musicencounter',
            type: 'external'
          }
        ]
      }
    ]
  },
  
  // ========== game项目示例 eternal-dreams==========
  {
    id: 'eternal-dreams',
    year: '2024',
    title: { en: 'Eternal Dreams', zh: '永恒之梦' },
    subtitle: { en: 'Third Person Role Playing Game', zh: '第三人称角色扮演游戏' },
    categories: ['Game', 'Programming','3D Art',], // 多分类支持
    tags: ['Game Design', 'Unity', '3D Environment Design', 'C#'],
    techTags: ['#Unity', 'C#', '#Maya', '#Blender', '#3D Modeling'],
    
    thumbnail: '/media/projects/eternaldreams/HeroCover.jpg',
    brief: { en: 'A Third Person 3D Role-playing game made in Unity. You are the chosen adventurer, who came into this fantastic world.', zh: '一款用 Unity 制作的第三人称 3D 角色扮演游戏。你是被选中的冒险者，踏入这片奇幻世界。' },
    
    heroImage: '/media/projects/eternaldreams/HeroCover.jpg',
    heroVideo: null,  // 游戏可以有预告片
    
    domain: [
      { en: 'Video Game', zh: '电子游戏' },
      { en: 'Entertainment', zh: '娱乐' },
      { en: '3D Art', zh: '3D 美术' }
    ],
    form: [
      { en: 'Game Design & Development', zh: '游戏设计与开发' },
      { en: 'Level Design', zh: '关卡设计' },
      { en: '3D Modeling', zh: '3D 建模' },
      { en: 'C# Programming', zh: 'C# 编程' }
    ],
    collaborators: ['Solo Project','University of Florida'],
    
    // ========== 项目颜色配置 ==========
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      subtitleGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      underlineGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      darkColor: 'rgb(27, 74, 168)', // mainTitle 使用的深色（蓝色）
      lightColor: '#4ECDC4' // sectionTag 使用的浅色（青色）
    },
    
    overview: {
      mainTitle: { en: 'A Journey Through Fantasy and Dreams', zh: '穿越幻想与梦境之旅' },
      content: { en: "Eternal Dream takes place in a fantasy world known as 'Dream', featuring an art style that leans towards 3D anime and is non-realistic. Players awaken in this fantasy-styled world, as if they are in an eternal nightmare/dream. They need to defeat unknown monsters and travel to towns as beautiful as those in fairy tales. Players will start their journey, and end up going home or being the hero of this world.", zh: '《永恒之梦》发生在名为「梦」的幻想世界，采用偏 3D 动漫的非写实美术风格。玩家在奇幻世界中苏醒，仿佛置身永恒梦魇/美梦，需击败未知怪物、造访如童话般的小镇，开启旅程，最终归家或成为世界英雄。' },
      challenge: { en: 'How to create an engaging narrative that adapts to player choices?', zh: '如何创造能随玩家选择而变化的引人入胜的叙事？' }
    },
    
    sections: [
      {
        id: 'mechanics',
        title: 'Game Mechanics',
        mainTitle: 'Two Contrasting Worlds of Dream and Fantasy',
        icon: '🎮',
        content: 'The dreamland is divided into two different parts, a dangerous "dream" environment where bad creature skeletons live; and a beautiful fantasy village environment where good creatures live. As a third person role-playing game, the player will act as an archer, fight against the skeletons in bad "dream" and enjoy peach in the good "dream."',
        images: [
          {
            src: '/media/projects/eternaldreams/environment/largeshot.png',
            alt: 'Fantasy village'
          },
          {
            src: '/media/projects/eternaldreams/environment/4.png',
            alt: 'Dream world'
          }
        ]
      },

      {
        id: 'inspirations',
        title: 'Concept and Inspirations',
        mainTitle: 'From Personal Dreams to Game Reality',
        icon: '⚙️',
        content: "The core idea of this game, Eternal Dream,stems from my own dreams, as I am a person with a vivid imagination who frequently experiences fantastical dreams. These dreams often involve battling alongside or against a myriad of mythical creatures, leaving me questioning their reality upon awakening. Inspired by this personal experience, I created a game that encapsulates the essence of navigating through a dreamlike world, offering players the choice to either escape the dream or become engrossed within it.",
        imageDisplayMode: 'two-column', // 网格模式
        images: [
          {
            src: '/media/projects/eternaldreams/0.jpg',
            alt: 'Concept art'
          },
          {
            src: '/media/projects/eternaldreams/0-1.jpg',
            alt: 'Concept art2'
          }
        ]
      },
      {
        id: 'narrative',
        title: 'Story and Narrative',
        mainTitle: 'Awakening in an Unknown Dream World',
        icon: '🎨',
        content:[
          "Players awaken in an unknown place, believing themselves to be in a nightmare. Surrounded by a dangerous, dark forest inhabited by skeleton monsters, they embark on a journey to explore this world. By defeating the skeletons, players eventually reach a village where elves and humans live in harmony, and are hailed as heroes for protecting the village from the skeletons.",
          "The primary goal for player experience in Eternal Dream is to immerse players in a vivid, dreamlike world that blurs the lines between fantasy and reality, challenging them to question what is real and what is not. We aim to provide an experience that is both captivating and thought-provoking, where players feel a deep sense of adventure and exploration as they navigate through the contrasting environments of the dream world.",
        ],
        images: [
          {
            src: '/media/projects/eternaldreams/environment/3.png',
            alt: 'Concept art'
          },
          {
            src: '/media/projects/eternaldreams/dialogue.png',
            alt: 'Concept art'
          },
        ]
      },

      {
        id: 'levelEnvironmentDesign',
        title: 'Level and Environment Design',
        mainTitle: 'Genshin-Inspired 2D Style Rendering',
        icon: '⚙️',
        content: [
          "The game comprises two distinct levels: a gloomy, dilapidated forest filled with low visibility and skeleton monsters that players must defeat; and a village inhabited by elves and humans, characterized by harmony and beauty. Unique to this game, the elves' homes are built into the mountains with distinctive shapes, made from trees, leaves, and mushrooms, contrasting with the human's more conventional houses. The focus on environmental construction utilized Maya and Blender for building different houses, trees, decorations, and flora, with shaders applied in Unity to render the game world in a cute, two-dimensional style.",
          "I was inspired by the two-dimensional game environment style of Genshin Impact and aimed to achieve a similar effect. However, I had no prior knowledge in this area. Through self-study on YouTube, I learned how to use shaders in Unity to achieve this style of rendering. Completing the entire game construction alone was time-consuming. Initially, my plan also included developing the game's storyline, quests, and combat system, but due to time constraints, I focused mainly on environment design and polishing. I am still satisfied with the outcome.",
        ],
        imageDisplayMode: 'two-column', // 网格模式
        images: [
          {
            src: '/media/projects/eternaldreams/1.png',
            alt: 'Environment Art Design'
          },
          {
            src: '/media/projects/eternaldreams/2.png',
            alt: 'Environment Art Design2'
          },
          {
            src: '/media/projects/eternaldreams/3.png',
            alt: 'Environment Art Design3'
          },
          {
            src: '/media/projects/eternaldreams/4.png',
            alt: 'Environment Art Design4'
          },
          {
            src: '/media/projects/eternaldreams/5.png',
            alt: 'Environment Art Design5'
          },
          {
            src: '/media/projects/eternaldreams/6.png',
            alt: 'Level Design'
          },
          {
            src: '/media/projects/eternaldreams/7.png',
            alt: 'Level Design2'
          },
          {
            src: '/media/projects/eternaldreams/Shader3.png',
            alt: 'Shader3'
          },
          {
            src: '/media/projects/eternaldreams/Shader1.png',
            alt: 'Shader'
          }
        ]
      },

      {
        id: 'showcase',
        title: 'Final Showcase',
        mainTitle: 'A Journey of Growth and Discovery',
        icon: '🏆',
        content: "The key takeaways from the Eternal Dream project include the importance of a cohesive game world that captivates players' imaginations, and the balance between exploration and combat. This project taught me the significance of environmental storytelling and how it can be used to enhance the narrative and player immersion. The challenges faced during development, particularly in achieving a specific art style and refining gameplay mechanics, have greatly contributed to my growth as a game designer. This experience has improved my skills in environmental design and narrative construction to create a more engaging and enjoyable game. Eternal Dream represents not just a journey for the player, but also a significant step in my journey as a game designer, underscoring the importance of vision, adaptability, and the continuous pursuit of improvement.",
        images: [
          {
            src: '/media/projects/eternaldreams/environment/StartScreen.png',
            alt: 'Game Start Screen'
          },
          {
            src: '/media/projects/eternaldreams/environment/closeup.png',
            alt: 'Closeup Environment'
          },
          {
            src: '/media/projects/eternaldreams/environment/closeup2.png',
            alt: 'Closeup Environment2'
          },
          {
            src: '/media/projects/eternaldreams/environment/closeup3.png',
            alt: 'Closeup Environment3'
          },
          {
            src: '/media/projects/eternaldreams/environment/largeshot2.png',
            alt: 'Large Shot'
          },
          {
            src: '/media/projects/eternaldreams/environment/largeshot.png',
            alt: 'Large Shot2'
          },
          {
            src: '/media/projects/eternaldreams/environment/5.png',
            alt: 'Large Shot3'
          },
          {
            src: '/media/projects/eternaldreams/environment/4.png',
            alt: 'Battle'
          },
        ]
      }
    ]
  },
  
  

  // ========== Prime Directive 游戏项目 ==========
  {
    id: 'prime-directive',
    year: '2024',
    title: { en: 'Prime Directive', zh: '首要指令' },
    subtitle: { en: '2D Action-Platformer Game', zh: '2D 动作平台游戏' },
    categories: ['Game', '2D Art'],
    techTags: ['#Unity', '#Level Design','#Adobe Illustrator','#Adobe Creative Suite'],
    
    thumbnail: '/media/projects/primedirective/Hero3.png',
    brief: { en: 'A 2D Action-Platformer game made in Unity. The player acts as a security bot on a space station, defending the station and defeating all enemies.', zh: '一款用 Unity 制作的 2D 动作平台游戏。玩家扮演空间站上的安保机器人，保卫站点并消灭所有敌人。' },
    
    heroImage: '/media/projects/primedirective/Hero3.png',
    heroVideo: 'https://vimeo.com/654379482',
    
    domain: [
      { en: 'Video Game', zh: '电子游戏' },
      { en: 'Entertainment', zh: '娱乐' },
      { en: 'Art Design', zh: '美术设计' }
    ],
    form: [
      { en: 'Game Design & Development', zh: '游戏设计与开发' },
      { en: 'Level Design', zh: '关卡设计' },
      { en: '2D Art', zh: '2D 美术' }
    ],
    collaborators: ['Qingyu Cao(Lead Artist & Level Designer)', 'Griffin Mckee(Artist)', 'Tyler C.Mueller(Programmer)','Yifan Zhu(Programmer)'],
    
    colors: {
      heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      subtitleGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      underlineGradient: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)'
    },
    
    overview: {
      mainTitle: { en: 'Defending the Zeta Station', zh: '保卫泽塔空间站' },
      content: { en: "As a security robot onboard a deep space station, you were created to stop any threats that may appear. On this fateful day, you have been awoken from stasis sleep to stop a gang of pirates that have overtaken the station. Navigate through the corridors of the Zeta Station, collect weapon upgrades, defeat the invaders, and fulfill your prime directive!", zh: '你是深空站上的安保机器人，被制造用来消灭一切威胁。在这注定的一天，你从休眠中苏醒，去阻止占领空间站的海盗团伙。穿越泽塔站的走廊、收集武器升级、击败入侵者，完成你的首要指令。' },
      challenge: { en: 'How to create an engaging 2D platformer with unique vector graphics and combat mechanics?', zh: '如何用独特的矢量美术与战斗机制打造引人入胜的 2D 平台游戏？' }
    },
    
    sections: [
      {
        id: 'game-mechanics',
        title: 'Game Concept & Mechanics',
        mainTitle: 'Action-Platformer with Weapon Collection',
        icon: '🎮',
        content:[ '"Prime Directive" incorporates exploration and combat within 2D platforming levels. Players can collect power-ups and weapon upgrades to enhance their abilities. The unique mechanics allows player to collect different weapons, affecting gameplay and strategy. The final boss encounter suggests a shift in mechanics to a "shoot-em-up" style, adding variety to the core platforming gameplay.',
        'The core idea of "Prime Directive" is a classic action-platformer experience with a science fiction setting. The game places players in the role of a security robot tasked with defending a space station from a pirate invasion. Inspiration likely comes from classic platformers and sci-fi tropes, such as sentient robots, space stations, and alien pirates, calling back to the golden age of arcade games while incorporating modern game mechanics.',
        ],
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/primedirective/Illustration.jpg',
            alt: 'Concept Art',
            caption: 'Space Illustration'
          },
          {
            src: '/media/projects/primedirective/CharacterDesign.png',
            alt: 'Character Design',
            caption: 'Character Design & Illustration'
          },
          {
            src: '/media/projects/primedirective/EnemyDesign.jpg',
            alt: 'Enemy Design',
            caption: 'Enemy Design'
          },
        ]
      },

      {
        id: 'storyline-narrative',
        title: 'Storyline and Narrative',
        mainTitle: 'A Security Robot\'s Mission',
        icon: '📖',
        content: 'The narrative follows a security robot activated to defend the Zeta Station against pirates. As the robot progresses through levels, it encounters various enemies. The storyline unfolds through level progression, culminating in a final boss battle.',
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/primedirective/Narrative.png',
            alt: 'Story Scene 1',
          },
          {
            src: '/media/projects/primedirective/Narrative2.png',
            alt: 'Story Scene 2',
          }
        ]
      },

      {
        id: 'level-environment',
        title: 'Level and Environment Design',
        mainTitle: 'Vector Graphics Space Station Corridors',
        icon: '🏗️',
        content: 'I crafted 2D levels set within the network of passageways that make up Zeta Station. Drawing inspiration from cinematic depictions of space station corridors and spacecraft interiors, I designed the levels with a vector graphic style. To enrich the backdrop and add depth to the environment, numerous windows have been integrated, through which dynamic cosmic scenes are visible, creating a sense of image parallelism. The adversaries are modeled after traditional alien archetypes and spaceships in final boss battle, supplemented with various drones, and flying objects serving as additional enemies. This combination not only enhances the visual appeal but also diversifies the gameplay experience.',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/primedirective/LevelDesign.png',
            alt: 'Level Design 1',
            caption: 'Space station corridor design with vector graphics'
          },
          {
            src: '/media/projects/primedirective/LevelDesign2.png',
            alt: 'Level Design 2',
          },
        ]
      },

      {
        id: 'challenges-solutions',
        title: 'Challenges and Solutions',
        mainTitle: 'Choosing Vector Graphics Over Traditional Styles',
        icon: '⚡',
        content: 'A recurrent challenge in game design is the task of infusing familiar mechanics with a fresh and captivating allure. Many science fiction games conventionally gravitate towards pixel art or 3D photorealistic styles. In our endeavor, we opted for a vector graphic art style, which imparts a vibrant and distinct visual character to the project. This approach yields a cleaner and more individualistic aesthetic, setting our game apart and enhancing its uniqueness.',
      },

      {
        id: 'player-experience',
        title: 'Player Experience Goals',
        mainTitle: 'Intense Combat-Centric Action',
        icon: '🎯',
        content: 'The primary ambition for players of "Prime Directive" is to deliver an exhilarating combat-centric gaming experience. The game is designed to immerse players in intense shootouts, challenging them to survive onslaughts from multiple enemies and to effectively defend the station. Emphasis is placed on mastering the shooting mechanics, and strategically utilizing the environment to ensure the station\'s security. The aim is to provide a thrilling sense of achievement through overcoming the escalating challenges presented throughout the game.',
      },

      {
        id: 'final-showcase',
        title: 'Final Showcase',
        mainTitle: 'Thrilling Combat and Station Defense',
        icon: '🚀',
        content: 'The objective for players within "Prime Directive" is to revel in a thrilling combat experience, focusing on the satisfaction that comes from engaging shootouts. Players are tasked to protecting the Zeta Station. The design of the game is such that it not only tests the players\' reflexes and tactical skills but also immerses them in a narrative of survival and defense. This player-centric approach to game design ensures that those who embark on the "Prime Directive" journey will find themselves captivated by the intense action and the rewarding feeling of safeguarding their space station against formidable adversaries.',
        images: [{
          src: '/media/projects/primedirective/Hero.png',
          alt: 'Boss Battle',
          caption: 'Final boss encounter with alien spaceships and drones'
        },
        {
          src: '/media/projects/primedirective/Hero2.png',
          alt: 'Finished Gameplay',
          caption: 'Finished Gameplay'
        }
      ]
      }
    ]
  },

  // ========== My Little Fish Tank 游戏项目 ==========
  {
    id: 'my-little-fish-tank',
    year: '2024',
    title: { en: 'My Little Fish Tank', zh: '我的小鱼缸' },
    subtitle: { en: '3D Fish Tank Simulator', zh: '3D 鱼缸模拟器' },
    categories: ['Game', '3D Art'],
    techTags: ['#Unity','#Maya', '#3D Modeling & Animation','Texturing'],
    
    thumbnail: '/media/projects/fishtank/Picture2.png',
    brief: { en: 'A 3D fish tank simulator that taps into childhood nostalgia of owning and caring for a fish tank, allowing players to maintain their own little ecosystem.', zh: '一款唤起养鱼童年回忆的 3D 鱼缸模拟器，让玩家经营自己的小生态。' },
    
    heroImage: '/media/projects/fishtank/Picture2.png',
    heroVideo:'https://vimeo.com/644155060',
    
    domain: [
      { en: 'Video Game', zh: '电子游戏' },
      { en: '3D Art', zh: '3D 美术' }
    ],
    form: [
      { en: 'Game Design', zh: '游戏设计' },
      { en: '3D  Modeling & Animation', zh: '3D 建模与动画' },
      { en: 'Texturing', zh: '贴图' }
    ],
    collaborators: [''],
    
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(93, 155, 217) 0%,rgb(55, 136, 177) 50%,rgb(7, 70, 101) 100%)',
      subtitleGradient: 'linear-gradient(135deg,rgb(93, 155, 217) 0%,rgb(55, 136, 177) 50%,rgb(7, 70, 101) 100%',
      underlineGradient: 'linear-gradient(135deg,rgb(93, 155, 217) 0%,rgb(55, 136, 177) 50%,rgb(7, 70, 101) 100%'
    },
    
    overview: {
      mainTitle: { en: 'Nostalgic Fish Tank Simulator', zh: '怀旧鱼缸模拟器' },
      content: { en: '"My Little Fish Tank" is a 3D fish tank simulator that taps into the childhood nostalgia associated with owning and caring for a fish tank. Inspired by the joy and responsibility of maintaining a miniature aquatic ecosystem, the game offers players the opportunity to nurture fish, decorate their tank, and manage a virtual aquatic environment. The idea is to recreate the sense of accomplishment and attachment that comes from growing and caring for fish, combined with the excitement of collecting and customizing their environment.', zh: '《我的小鱼缸》是一款 3D 鱼缸模拟器，唤起童年养鱼的回忆。玩家可以养鱼、装饰鱼缸、管理虚拟水族环境，在照料与成长中获得成就感与归属感，并结合收集与自定义环境的乐趣。' },
      challenge: { en: 'How to create an engaging simulation game that captures the nostalgia and joy of fishkeeping?', zh: '如何做出一款能捕捉养鱼怀旧与乐趣的模拟游戏？' }
    },
    
    sections: [
      {
        id: 'game-mechanics',
        title: 'Game Mechanics',
        mainTitle: 'Ecosystem Management and Commerce',
        icon: '🎮',
        content: 'The game employs mechanics centered around ecosystem management, commerce, and progression. Players interact with their tank through a first-person view, utilizing mouse clicks for navigation and selection within the UI. The core mechanics involve purchasing fish and decorations from the pet store, feeding fish, and arranging the tank\'s layout. Fish grow over time and can be sold at a profit, contributing to a currency system that enables the purchase of more exotic items and unlocks achievements. Proficiency levels are introduced as a means to track progress and unlock new options for the player.',
        buttons: [
            {
              text: 'Preview Game Design Document',
              url: '/files/MyLittleFishTankGDD.pdf',
              type: 'external'
            }
        ]
      },

      {
        id: 'level-environment',
        title: 'Level and Environment Design',
        mainTitle: 'Two Main Environments: Tank and Store',
        icon: '🏗️',
        content: 'The game is set in two main environments: the player\'s fish tank and the fish store. The fish tank serves as the primary canvas for player interaction, designed in 3D to offer an immersive view of the aquatic life and decorations within. The fish store provides a contrasting scene where players can browse and purchase new fish and accessories, enhancing their tank. The design focuses on realism and detail to create a captivating and authentic fish tank experience.',
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/fishtank/Picture1.png',
            alt: 'Fish Tank Environment',
            caption: '3D fish tank with decoration assets'
          },
          {
            src: '/media/projects/fishtank/fishtank2.jpg',
            alt: 'Fish Store Environment',
            caption: 'Pet store interface for browsing and purchasing items'
          }
        ]
      },

      {
        id: 'player-experience',
        title: 'Player Experience Goals',
        mainTitle: 'Relaxing Nostalgia and Creative Freedom',
        icon: '🎯',
        content: 'The goal is to provide players with a relaxing, engaging experience that combines the joys of fishkeeping with the thrill of collection and customization. The game aims to evoke a sense of nostalgia and accomplishment, encouraging players to invest time in creating their unique aquatic world. By balancing management mechanics with creative freedom, the game seeks to appeal to a broad audience, including those who enjoy casual simulation games and aquarium enthusiasts alike.',
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/fishtank/model.png',
          },
          {
            src: '/media/projects/fishtank/model2.png',
          }
        ]
      },

      {
        id: 'final-showcase',
        title: 'Final Showcase',
        mainTitle: 'A Unique Blend of Simulation and Creativity',
        icon: '🚀',
        content: '"My Little Fish Tank" represents a unique blend of simulation, management, and creativity, offering players a chance to dive into the serene world of fishkeeping virtually. Through its immersive environments, detailed mechanics, and progression system, the game delivers a fulfilling experience of nurturing and expanding a personal aquarium. This project has not only allowed our team, Unorthodox, to explore innovative game design concepts but also to contribute meaningfully to the genre of simulation games, marking significant growth in our capabilities as game designers.',
        imageDisplayMode: 'grid',
        images: [
          {
            src: '/media/projects/fishtank/Picture2.png',
            alt: 'Fish Tank Environment',
            caption: '3D fish tank with detailed aquatic life and decorations'
          },
          {
            src: '/media/projects/fishtank/fishtank1.jpg',
            alt: 'Fish Tank Environment',
            caption: '3D fish tank with detailed aquatic life and decorations'
          },
        ]
      }
    ]
  },

  // ========== Kogna AI ==========
  {
    id: 'kogna',
    year: '2026',
    featured: true, order: 1,
    title: 'Kogna AI',
    subtitle: {
      en: 'Strategic Business Insight, For All',
      zh: '战略洞察 · 人人可及'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Design System'],
    tags: ['Design System', 'UI Design', 'Product Design', 'SaaS', 'B2B', 'AI Platform', 'Dark Mode', 'Component Library'],
    techTags: ['#Design System', '#Next.js', '#Tailwind CSS', '#React', '#TypeScript', '#Dark Mode'],

    thumbnail: '/media/projects/kogna/slides/slide-01.png',
    brief: {
      en: 'Led the design system and UI/UX for an AI decision-support platform that turns fragmented business data into real-time strategic intelligence for the C-suite — now a live V1 with its first paying customers onboard.',
      zh: '主导一个 AI 决策支持平台的设计系统与 UI/UX——将碎片化的企业数据转化为面向 C-suite 高管的实时战略洞察;V1 已上线,并已拿下首批付费客户。'
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
      role: 'Product & Frontend Designer',
      duration: 'Jan 2026 – Present',
      team: '10-person team',
      stack: 'Figma · Claude Code · Next.js · React · Supabase',
    },

    colors: {
      heroGradient: 'linear-gradient(135deg, #0B0716 0%, #0a1628 50%, #0D3B66 100%)',
      subtitleGradient: 'linear-gradient(135deg, #0D5FC2 0%, #0D8CE2 100%)',
      underlineGradient: 'linear-gradient(135deg, #0D5FC2 0%, #0D8CE2 100%)',
      textHighlightColor: '#6B3FC4',
      darkColor: '#140826',
      lightColor: '#0D3B66'
    },

    overview: {
      mainTitle: 'From Feature UI to Product Design System',
      briefContent: '[[Kogna]] helps leadership teams make faster decisions by pulling fragmented business data into one place. Executives today toggle between CRM, PM tools, BI dashboards, and spreadsheets—by the time they piece together a picture, it\'s already outdated. I joined as the [[design system lead]] at a stage where the product was growing fast but the UI wasn\'t keeping up: every new page looked slightly different, and the experience felt like [[a patchwork instead of one product]]. My job was to bring it all together—define a shared visual language, build components the team could reuse, and make the product feel as trustworthy as the decisions it supports.',
      challenge: 'How do you give every leader a 60,000-foot view of the whole business — without losing the detail behind any single metric?',
      challenges: [
        'Surface decisions, not just data — turn dozens of disconnected metrics into a signal the leader can act on at a glance, with the detail still one click away.',
        'Make dense, data-heavy views feel calm and trustworthy enough for executive buyers.',
        'Keep every screen coherent inside a product still shipping new features every week.'
      ],
      mainImage: {
        src: '/media/projects/kogna/slides/slide-02.png',
        alt: 'What Kogna does — fragmented tools converging into one command center',
        caption: 'TL;DR — every tool fans into one AI command center'
      },
      // Why I'm building this:案例头部 meta 之下的 POV 段落
      whyIBuild: 'I\'m fascinated by how leaders actually decide — the tools they live in, what they trust, what they\'re missing. Today that means building for the [[C-suite]], who feel the pain most and can act on it. But we\'re entering an age where AI makes almost anyone a kind of CEO — solo founders, one-person companies, small teams punching above their weight. Strategic clarity shouldn\'t stay a privilege of the C-suite; the mission is to make it [[for all]].'
    },

    sections: [
      // ── 01 · Problem ──
      {
        id: 'problem',
        title: 'Problem Statement',
        sectionTag: '01 · Problem',
        mainTitle: 'The 1,000-Tab Nightmare',
        briefContent: 'Every leader was paying a hidden [[fragmentation tax]] — hours each week clicking between CRM, project, finance and BI tools just to piece together where the business stands, only to act on a picture that\'s already weeks out of date.',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-03.png',
            alt: 'The problem — fragmented tools, stale reporting',
            caption: 'Dozens of disconnected tools · 2–4 week reporting lag · 20+ hours a week synthesizing'
          }
        ]
      },

      // ── 02 · User Research ──
      {
        id: 'research',
        title: 'User Research & Discovery',
        sectionTag: '02 · Research',
        mainTitle: 'Validated Before Designing',
        briefContent: 'Demand was validated through [[180+ discovery contacts]], [[15+ executive interviews]] and [[3 validated personas]] — and one insight shaped everything: leaders don\'t want another dashboard, they want decisions surfaced, not data displayed.',
        icon: '🔍',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-05.png',
            alt: 'Research — outreach, interviews, personas',
            caption: 'Customer discovery across CEOs, COOs and chiefs of staff'
          }
        ]
      },

      // ── 03 · The Solution: 3 Pillars ──
      {
        id: 'solution',
        title: 'The Solution',
        sectionTag: '03 · The Solution',
        mainTitle: 'Three Pillars, One Panoramic View',
        briefContent: 'From fragmented data to a panoramic, actionable view — built on three pillars: a 24/7 strategic radar, a dashboard that builds itself, and a platform that connects the [[what]] to the [[why]].',
        icon: '✦',
        featureDisplayMode: 'side-by-side',
        features: [
          {
            name: 'Kogna Insight',
            detail: 'A smart radar for the business — it scans strengths, weaknesses, opportunities and threats 24/7, surfaces the most urgent signal first, and shows the path forward.',
            image: '/media/projects/kogna/pillars/insight.png'
          },
          {
            name: 'Smart Tiles',
            detail: 'Beautifully simple visuals — mix and match adaptive KPI tiles to build exactly the view a leader needs, pulling live from Salesforce, HubSpot, Jira and Asana, with an AI insight pinned right to the board.',
            image: '/media/projects/kogna/pillars/smart-tiles.png'
          },
          {
            name: 'What → Why',
            detail: 'Connect the stack, then see what changed and why — 10+ sources linked with real-world market shifts, and a RAG assistant answering questions over your connected data.',
            image: '/media/projects/kogna/pillars/what-why.png'
          }
        ]
      },

      // ── 04 · How We Build (Design System + AI loop) ──
      {
        id: 'how-we-build',
        title: 'How We Build',
        sectionTag: '04 · How We Build',
        mainTitle: 'One Source of Truth, an AI-Accelerated Loop',
        briefContent: 'A [[token-first design system]] — logo, color, an Inter type ramp and components — is the single source of truth in code and Figma. [[Claude Code and Figma stay in sync both ways over MCP]]: a Figma frame becomes token-correct React, and code changes flow back into the file — so the maker who designs a screen also ships it. Page-diffs, test suites and an AI review catch drift before it goes live on Next.js.',
        icon: '⚡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-10.png',
            alt: 'Design system — logo, color, typography',
            caption: 'One source of truth — tokens, color and an Inter type ramp across the whole product'
          },
          {
            src: '/media/projects/kogna/slides/slide-12.png',
            alt: 'How we build — designer who codes, AI-accelerated loop',
            caption: 'Design → build with AI → review → ship — the same system, every day'
          }
        ]
      },

      // ── 05 · Iteration ──
      {
        id: 'iteration',
        title: 'Iteration',
        sectionTag: '05 · Iteration',
        mainTitle: 'How the Design Evolved',
        briefContent: 'I inherited a patchwork product — and through cycles of [[executive and team feedback]], three core experiences earned their final form: [[where the AI assistant lives]] (a contextual side panel vs. a dedicated page), how the dashboard organizes a leader\'s KPIs, and how an insight card went from [[showing data to surfacing a decision]] — a risk plus the action to take.',
        icon: '🔄',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-11.png',
            alt: 'Iteration — before and after',
            caption: 'Before → after: AI placement · the dashboard · from data to decision'
          }
        ]
      },

      // ── 06 · Outcomes ──
      {
        id: 'outcomes',
        title: 'Outcomes & What\'s Next',
        sectionTag: '06 · Outcomes',
        mainTitle: 'From Idea to a Live, Validated Platform',
        briefContent: 'A live V1 with [[10+ managed connectors]] and a RAG assistant — validated by [[15+ leaders]] and its first paying customers. Next: custom model training, more connectors, and multi-step agents.',
        icon: '🚀',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-13.png',
            alt: 'Outcomes — live V1 and what is next',
            caption: 'V1 live · 10+ connectors · 180+ discovery outreach · first paying customers'
          }
        ]
      },

      // ── 07 · Reflection ──
      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: '07 · Reflection',
        mainTitle: 'A Design System Is Leverage',
        briefContent: 'Building Kogna end-to-end [[changed how I design]] — when you also ship the code, you stop drawing things you can\'t build, and every choice gets pressure-tested against what\'s real. The design system turned out to be the quiet leverage: it let me move from Figma to production without a handoff, and let AI build straight from it without drifting off-brand. The lesson I\'m keeping isn\'t that a system is a product, not a document — it\'s that [[a system only becomes leverage when using it is easier than working around it]], for the whole team and the AI alike.',
        icon: '💭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/kogna/slides/slide-14.png',
            alt: 'Closing — strategic business insight, for all',
            caption: 'Kogna — strategic business insight, for all'
          }
        ]
      }
    ]
  },

  // ========== HexaEdge 点卦 ==========
  {
    id: 'hexaedge',
    year: '2026',
    featured: true, order: 3,
    title: 'HexaEdge',
    subtitle: {
      en: 'Ancient Logic, Modern Signals',
      zh: '古法新用 · 六爻金融信号'
    },
    categories: ['AI', 'Product Design', 'UIUX', 'Programming'],
    tags: ['Product Design', 'Design Engineering', 'AI/LLM', 'Financial Signal', 'Neo-Chinese Aesthetic', 'SaaS'],
    techTags: ['#Next.js 16', '#React 19', '#TypeScript', '#Claude Code', '#Figma', '#LLM API'],

    thumbnail: '/media/projects/hexaedge/hero.png',
    brief: {
      en: 'A full-stack financial tool that turns I Ching logic into quantitative market signals through a Neo-Chinese design system.',
      zh: '一款把中国传统文化《易经》改写成金融量化信号的工具。'
    },
    heroImage: '/media/projects/hexaedge/hero.png',
    heroVideo: null,

    domain: [
      { en: 'FinTech Signal Tool', zh: '金融信号工具' },
      { en: 'Cultural Tech', zh: '文化科技' },
      { en: 'B2C SaaS', zh: 'B2C SaaS' }
    ],
    form: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Design Engineering', zh: '设计工程' },
      { en: 'AI Integration', zh: 'AI 集成' },
      { en: 'Visual System', zh: '视觉体系' }
    ],
    collaborators: ['Solo Project', 'Claude Code', 'Figma', 'Google Stitch'],

    colors: {
      heroGradient: 'linear-gradient(135deg, #14233A 0%, #243E66 50%, #9C7A3A 100%)',
      subtitleGradient: 'linear-gradient(135deg, #243E66 0%, #9C7A3A 100%)',
      underlineGradient: 'linear-gradient(135deg, #9C7A3A 0%, #A8392E 100%)',
      textHighlightColor: '#9C7A3A',
      darkColor: '#14233A',
      lightColor: '#9C7A3A'
    },

    role: {
      title: 'Product Designer & Design Engineer (Solo)',
      responsibilities: [
        'End-to-end product design: research, UX/UI, visual system, implementation',
        'Proprietary Liuyao analysis engine development',
        '2+ years structured data collection & RAG knowledge base',
        'AI interpretation pipeline (LLM API integration)',
        'Neo-Chinese design system: color tokens from traditional materials'
      ]
    },

    overview: {
      mainTitle: 'Reshaping Unstructured Classical Logic into Quantitative Signals',
      briefContent: '**HexaEdge (点卦)** is a financial signal tool that deeply integrates traditional Liuyao logic. Built on the I Ching as its underlying architecture, it uses a modern SaaS interface to [[deconstruct and extract]] the complex, multidimensional variables embedded within the 64 hexagrams — such as Five Elements interactions and moving-line transformations — reshaping unstructured classical logic into [[standardized quantitative signals]]. This highly integrated pipeline delivers a seamless flow from raw hexagram input to Bull/Bear signal generation on a [[calendar timeline]], transforming an intricate ancient analytical system into a decision-support view that modern traders can consume directly.',
      challenge: 'How might we transform a 3,000-year-old analytical framework into a modern financial product — without losing its logical rigor or alienating either traditional practitioners or new investors?',
      buttons: [
        { label: 'Live Site', url: 'https://hexaedge.vercel.app', type: 'primary' },
        { label: 'GitHub', url: 'https://github.com/cqyestateyuki-prog/LiuyaoSaaSProject', type: 'secondary' }
      ]
    },

    sections: [
      {
        id: 'the-problem',
        title: 'The Problem',
        sectionTag: 'The Problem',
        mainTitle: 'Two Failures and One Untouched Opportunity',
        briefContent: 'Traditional I Ching and Liuyao websites are stuck in the early 2000s — dense forum layouts, walls of classical Chinese jargon, and zero onboarding for newcomers.\n\n**Accessibility failure.** Young users bounce immediately. The terminology barrier is too high, the UI is unreadable, and there\'s no progressive disclosure. A rigorous analytical system stays locked inside a shrinking niche community.\n\n**Cultural failure.** When the interface looks like a relic, the logic within is dismissed as superstition. This [[\"time-gap\" in design]] prevents ancient analytical frameworks from going global or being taken seriously by a modern audience.\n\n**Opportunity.** The use cases haven\'t evolved — still love, career, and health. But today\'s young generation cares about [[investing, crypto, and stock markets]]. Meanwhile, AI-powered fortune-telling products focus on BaZi (八字) and Ziwei Doushu (紫微斗数) — no one has applied AI to Liuyao signal analysis. A redesigned interface + a new domain = an untouched market.',
        icon: '💡',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/problem.png',
            alt: 'Traditional Liuyao tools vs modern expectations',
            caption: 'The "time-gap" in design: traditional tools stuck in the 2000s while user expectations have evolved.'
          }
        ]
      },

      {
        id: 'concept',
        title: 'Concept',
        sectionTag: 'Concept',
        mainTitle: 'Ancient Methods, Modern Use — 古法新用',
        briefContent: 'Liuyao is not fortune-telling. At its core, it\'s a [[structured decision-analysis framework]]: you define a question, generate a hexagram through a controlled random process, then systematically evaluate relationships between six lines (爻) using rules about elemental interaction, timing, and transformation.\n\nHexaEdge takes this framework and points it at a new domain — the stock market. The question becomes "will this stock go up or down this week?", and the output becomes a [[bull/bear signal calendar]] instead of a vague prose prediction.\n\nThis isn\'t about whether divination "works" for stocks. It\'s about demonstrating that [[traditional philosophical systems can find new life in digital products]] — if someone bothers to redesign the experience.',
        icon: '🧭',
        imageDisplayMode: 'single',
        images: [
          {
            src: '/media/projects/hexaedge/sections/concept.png',
            alt: 'From hexagram to signal calendar',
            caption: 'Transforming classical hexagram analysis into actionable trading signals.'
          }
        ]
      },

      {
        id: 'design-direction',
        title: 'Design Direction',
        sectionTag: 'Design Direction',
        mainTitle: 'Neo-Chinese Aesthetic — 新中式',
        briefContent: 'I collected reference images of jade, celadon porcelain, blue-and-white ceramics (青花瓷), ink-wash paintings, and cinnabar seals — assembled into a moodboard and used as the foundation for color extraction, working with AI (Claude) to translate material qualities into digital design tokens.\n\nThe goal: **warm and refined, never cold or sterile.** The interface should feel like holding a piece of jade — smooth, substantial, alive with subtle color — not like using a fintech dashboard.\n\nThe palette is drawn entirely from traditional Chinese materials: Jade White (#F2F6F7), Celadon Glaze (#E4ECEE), Blue-and-White (#243E66), Ink Black (#14233A), Cinnabar (#A8392E), Gilding (#9C7A3A), and Bamboo Green (#6E9387). Five Elements semantic mappings reuse the same palette.',
        icon: '🎨',
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/hexaedge/sections/moodboard.png',
            alt: 'Neo-Chinese moodboard and color extraction',
            caption: 'Ancient materials → digital tokens: jade, celadon, cinnabar, gilding.'
          },
          {
            src: '/media/projects/hexaedge/sections/color-system.png',
            alt: 'Color system and typography',
            caption: 'Seven color tokens from traditional materials + dual-script type system.'
          }
        ]
      },

      {
        id: 'design-solutions',
        title: 'Design Solutions',
        sectionTag: 'Design Solutions',
        mainTitle: 'From Dense Symbols to Consumable Signals',
        briefContent: 'Traditional Liuyao tools only generate the hexagram plate — they don\'t analyze, don\'t interpret, and have zero AI involvement. HexaEdge breaks this into [[three progressive steps]] — every label, every interpretation is written in plain language that any trader or investor can understand:\n\n**1. Cast (起卦)** — Enter your numbers and select the date. The system calculates the hexagram automatically. No knowledge required.\n\n**2. Read (排盘)** — The hexagram plate appears as a structured table: six lines with elements, relatives, spirits, and transformations. Color-coded by Five Elements for instant scanning.\n\n**3. Predict (预测)** — AI-generated plain-language interpretation + bull/bear signals rendered on a calendar timeline. Exportable as image or PDF.',
        icon: '✨',
        content: [
          '**Hexagram Plate Redesign**: Preserved the traditional top-to-bottom structure but added Five-element color coding, visual hierarchy (moving lines in gilding gold), and spatial grouping for elemental relationships.',
          '',
          '**Prediction Calendar**: The core output — daily cells colored by signal strength (bull red, bear green, neutral gray), key events marked with badges, weekly/monthly/quarterly timeline tabs, one-click export.',
          '',
          '**64 Hexagram Encyclopedia**: Reference library with classical text, modern commentary, six-line analysis, traditional readings, and historical scholar interpretations. Progressive disclosure: overview → detail → scholarly depth.'
        ],
        imageDisplayMode: 'alternating',
        images: [
          {
            src: '/media/projects/hexaedge/sections/3-step-wizard.png',
            alt: '3-step wizard: Cast, Read, Predict',
            caption: 'Three progressive steps — each reduces complexity for the user.'
          },
          {
            src: '/media/projects/hexaedge/sections/prediction-calendar.png',
            alt: 'Prediction calendar with signal timeline',
            caption: 'Bull/Bear signals mapped to specific dates with level badges and event tags.'
          },
          {
            src: '/media/projects/hexaedge/sections/encyclopedia.png',
            alt: '64 Hexagram Encyclopedia',
            caption: 'All 64 hexagrams with classical text, commentary, and progressive disclosure.'
          }
        ]
      },

      {
        id: 'technical',
        title: 'Technical',
        sectionTag: 'Technical',
        mainTitle: 'Claude Code + Proprietary Engine + LLM Pipeline',
        briefContent: '**Design & Frontend**: The entire UI was built with [[Claude Code]] (AI pair-programming) + [[Figma]] + [[Google Stitch]] for rapid design exploration and high-fidelity implementation. Frontend: Next.js 16, React 19, TypeScript. All 64 hexagram pages statically generated via SSG.\n\n**Proprietary Analysis Engine**: 2+ years of structured data collection via custom auto-entry pipeline. RAG knowledge base indexing classical texts and historical cases. A multi-stage scoring engine evaluating line vitality, elemental interactions, transformation chains, and timing windows to produce weighted Bull/Bear signals. LLM interpretation layer transforms raw engine output into plain-language market analysis.',
        icon: '⚙️',
        features: [
          {
            name: 'Claude Code + Figma + Google Stitch',
            description: 'Design & Frontend',
            detail: 'AI pair-programming for rapid implementation; Figma for visual design; Google Stitch for design exploration. Next.js 16 + React 19 + SSG.'
          },
          {
            name: '2+ Years Structured Data',
            description: 'Data Foundation',
            detail: 'Custom Liuyao auto-entry pipeline accumulating hexagram records with tagged market outcomes for pattern recognition and back-testing.'
          },
          {
            name: 'Multi-Stage Scoring Engine',
            description: 'Proprietary Algorithm',
            detail: 'Evaluates line vitality, elemental interactions, transformation chains, and timing windows. Produces weighted Bull/Bear voting signals.'
          },
          {
            name: 'RAG + LLM Interpretation',
            description: 'AI Pipeline',
            detail: 'Classical texts indexed for retrieval-augmented generation. LLM API transforms engine output into plain-language market analysis.'
          }
        ]
      },

      {
        id: 'reflection',
        title: 'Reflection',
        sectionTag: 'Reflection & Next Steps',
        mainTitle: 'What Worked, and Where We\'re Going',
        briefContent: '**What worked:**\n- The "ancient material → digital token" color process produced a palette that feels genuinely different from typical SaaS blue-gray. The result is warm, refined, and distinctly [[Eastern-elegant]] — never cold or sterile.\n- The 3-step wizard successfully got non-practitioners through the casting process without documentation.\n- Working with AI as a design collaborator (moodboard → tokens → implementation) compressed what would normally be weeks of iteration into days.\n\n**What\'s next:**\n- [[English translation layer]] — full bilingual hexagram encyclopedia and AI interpretation for global reach.\n- [[Deeper RAG & data feeding]] — expanding the knowledge base with more classical texts and real-market outcome data.\n- [[Signal visualization & accuracy]] — confidence heatmaps, trend overlays, and iterative scoring engine refinement.\n- [[User testing with young investors]] — usability studies with 18–30 year-old users with no Liuyao background.',
        icon: '💭'
      }
    ]
  },


]

// ========== 辅助函数 ==========
export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}

/** 获取下一个项目（按列表顺序，循环） */
export const getNextProject = (currentId) => {
  const i = projects.findIndex(p => p.id === currentId)
  if (i === -1) return null
  const nextIndex = (i + 1) % projects.length
  return projects[nextIndex] || null
}

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects
  return projects.filter(project => project.categories?.includes(category))
}

export const getFeaturedProjects = () => {
  // 返回标记为 featured 的项目，若无则返回前3个
  const featured = projects.filter(p => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}

/* ==========================================
   数据结构说明：
   
   必填字段：
   - id, title, category, overview, sections
   
   可选字段：
   - role (包括 responsibilities)
   - heroVideo
   - images 的 caption
   - sections 的 features
   
   已移除：
   - client (根据你的要求)
   - completed (根据你的要求)
   
   灵活性：
   - role 可以设为 null 完全不显示
   - role.responsibilities 可以省略
   - 每个 section 的 images 可以为空数组
========================================== */
