// src/data/projects.js
// 简化版项目数据结构 - 移除client和completed，responsibilities可选

export const projects = [
  {
    // ========== 基本信息 ==========
    id: 'stumbldoor',
    title: 'Stumbldoor',
    subtitle: 'Library Experience for the Future',
    categories: ['UIUX', 'Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    techTags: ['#Figma', '#Wireframe', '#Prototype','#Visual Design'],  // 技术标签
    
    // ========== 主页展示 ==========
    thumbnail: '/media/projects/stumbldoor/hero/hero-image.jpg',  // 列表页缩略图
    brief: 'An innovative digital platform that reimagines the traditional library experience.',
    
    // ========== 详情页 Hero ==========
    heroImage: '/media/projects/stumbldoor/hero/hero-image.jpg',
    heroVideo: null,  // 可选：视频路径
    
    // ========== 项目标签==========
    domain: ['Edtech', 'UI/UX', 'Mobile'],
    form: ['Research', 'Mobile Application Design'],
    collaborators: ['Solo Project'],  // 或其他合作者名字
    
    // ========== 项目颜色配置 ==========
    colors: {
      heroGradient: 'var(--gradient-hero)', // 头图背景渐变
      subtitleGradient: 'var(--gradient-secondary)', // 子标题渐变
      underlineGradient: 'var(--gradient-secondary)' // 下划线渐变
    },
    
    // ========== 项目概述 ==========
    overview: {
      content: 'STUMBLEDOOR is an innovative digital platform app that reimagines the traditional library experience, transforming it into an interactive and captivating journey. It enables users to document their reading adventures, providing personalized book recommendations and locating nearby libraries. The app allows users to create and share custom reading lists and reviews, track their reading and borrowing history, thus cultivating a community of avid readers and thinkers. Moreover, it transforms the in-person library visit into an exploratory adventure, encouraging users to discover new genres and authors.',
      challenge: 'How might we make libraries more relevant, inclusive, culturally dynamic & appealing in the future?',
      mainImage: {
        src: '/media/projects/stumbldoor/overview/main-image.jpg',
        alt: 'Stumbldoor App Overview',
        caption: 'The Stumbldoor app interface showcasing the library experience transformation'
      }
    },
    
    // ========== 角色（可选）==========
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
    
    // ========== 项目章节 ==========
    sections: [
      {
        id: 'research',
        title: 'Research',
        icon: '🔍',  //用于左侧导航显示
        content: 'To comprehend the needs of users regarding physical and digital library experiences, we conducted comprehensive research combining secondary research on library evolution and trends, primary field research across four NYC libraries, and user interviews with 35 survey responses and 8 in-depth interviews. This multi-method approach enabled us to synthesize valuable insights into current user experiences and future expectations for digital reading.',
        imageDisplayMode: 'two-column', // 网格模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/2-SD Research.jpg',
            alt: 'Secondary Research of libraries',
            caption: 'Secondary Research of libraries'  // 可选
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
            src: '/media/projects/stumbldoor/sections/2-Fieldsearch2.jpg',
            alt: 'NYC library field research documentation',
            caption: 'Stavros Niarchos Foundation Library Field Research'
          },
         
          {
            src: '/media/projects/stumbldoor/sections/2-affinitymap.jpg',
            alt: 'User research affinity mapping',
            caption: 'Affinity Mapping: Synthesizing user insights and pain points'
          },
        ]
      },
      {
        id: 'problem',
        title: 'Problem Statement',
        icon: '💡',
        content: 'With the noticeable decline in visits to physical libraries, our challenge is to determine how we might make libraries more relevant, inclusive, culturally dynamic, and appealing in the future.',
        images: []  // 可以没有图片
      },
      {
        id: 'brainstorming',
        title: 'Concept Ideas & Brainstorming',
        icon: '💡',
        content: "Defining the app concept, our team wants to emphasize on gamifying knowledge discovery, integrating online and offline read-and-borrowing book experience, provides user with personalized book recommendations and form a community in book finding and sharing. We want the app not just a tool for finding reading resources; it's a gateway to a vast world of knowledge and community, seamlessly integrating the digital and physical realms of the literary universe.",
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/3-concept.jpg',
            alt: 'APP Concept',
            caption: 'Concept Design'
          },
        ]  
      },
      {
        id: 'features',
        title: 'Unique Features',
        icon: '✨',
        content: 'The app introduces three key innovative features.',
        // 特性卡片（可选）
        features: [
          {
            name: 'Scrollstack',
            description: 'Personalized Readlists',
            detail: 'Hyper-personalized reading playlists'
          },
          {
            name: 'Gameful UX',
            description: 'Joy of Reading',
            detail: 'Achievements and reading stats'
          },
          {
            name: 'AR Assist',
            description: 'Find My Book',
            detail: 'AR Navigator for library layouts'
          }
        ],
        images: []
      },
      {
        id: 'userflow',
        title: 'User Flow, Personas and Journey Maps',
        icon: '🎨',
        content: 'Target users include college students in New York City, individuals who possess smartphones and are open to reading, and book enthusiasts.',
        imageDisplayMode: 'single', // 单图模式
        images: [
          {
            src: '/media/projects/stumbldoor/sections/4-userflow.jpg',
            alt: 'User Flow',
          },
          {
            src: '/media/projects/stumbldoor/sections/4-userpersona.jpg',
            alt: 'User Persona',
          },
          {
            src: '/media/projects/stumbldoor/sections/4-userjourneymap.jpg',
            alt: 'User Journey Map',
          }
        ]
      },

      {
        id: 'designprocess',
        title: 'Design Process',
        icon: '💡',
        content: "",
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
          {
            src: '/media/projects/stumbldoor/sections/7-designprocess.jpg',
            alt: 'Design Process',
          },
        ] 
      },

      {
        id: 'final',
        title: 'Final Showcase',
        icon: '🚀',
        content: 'The final app design showcases a clean, intuitive interface.',
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
          }
        ]
      }
    ]
  },
  
    // ========== Programming 项目示例 ==========
    // ========== AI Community MVP项目 ==========
    {
      id: 'ai-community-platform',
      title: 'AI Built-in Community Platform',
      subtitle: 'Modern integrated Community Platform for AI Tools',
      categories: ['UIUX', 'Programming', 'Research'],
      tags: ['UI/UX Design', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Frontend Development',  'Web Development'],
      techTags: ['#Figma','#React','#TypeScript', '#Next.js','#HTML/CSS'],
      
      thumbnail: '/media/projects/aicommunity/Hero.jpg',
      brief: 'An in-app integrated community system designed for AI Tools.',
      heroImage: '/media/projects/aicommunity/Hero.jpg',
      heroVideo: null,
      
      domain: ['AI Product Design & Development', 'Web Platform', 'Learning Community'],
      form: ['UI/UX Design', 'Frontend Development', 'React + TypeScript + Tailwind CSS', 'Next.js'],
      collaborators: ['Solo Project','Cursor AI + ChatGPT + Claude'],
      
      colors: {
        heroGradient: 'linear-gradient(135deg, #000000 0%, #374151 100%)',
        subtitleGradient: 'linear-gradient(135deg,#374151 0%,rgb(72, 81, 97) 100%)',
        underlineGradient: 'linear-gradient(135deg,#374151 0%, #374151 100%)'
      },
      
       overview: {
         content: 'AI applications such as ChatGPT, Grok, and Claude currently lack built-in communities, leaving everyday users without a dedicated space to learn, share, and connect while using these tools. AI Built-in Community Platform **fills this critical gap by offering an intuitive, accessible experience that transforms isolated AI use into collaborative discovery**. This platform supports multiple post types: conversation & thoughts sharing, prompt discovery, and community events—along with trending search and a prompt voting system. This combination enables users not only to **learn useful AI tips but also to express themselves, exchange ideas, and feel a sense of belonging**. For product owners, the community **drives user retention, UGC content creation, and continuous feedback loops for their products, making it a strategic addition to any AI tool**. Built with **Next.js 14 + TypeScript + Tailwind CSS**, the platform blends modern design with seamless functionality to make AI learning and sharing accessible for everyone.',
         challenge: 'How might we create an ecosystem where users connect, collaborate, and create value for one another?',
         challenges: [
           'How might we create an ecosystem where users connect, collaborate, and create value for one another?',
           'How might we enable users to easily share their AI usage experiences and insights?',
           'How might we help users quickly find relevant, high-quality AI content, prompts, and events?',
           'How might we lower the barrier to entry for AI users to participate in community learning?',
           'How might we ensure the quality and reliability of shared AI content and prompts?'
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
          id: 'user-insights',
          title: 'User Research & Market Insights',
          icon: '🔍', 
          content: "Through online questionnaires, user interviews, and research, we revealed that AI tool users face three critical challenges: fragmented knowledge sharing across social platforms, lack of specialized spaces for sharing and learning, and difficulty getting accurate/expected answers from AI tools. Users want to share their AI stories and creative AI interactions, learn from others' experiences to put in refined prompts to get the expected response sooner, not just access technical documentation. The platform should focus on human-centered AI knowledge sharing rather than purely technical information.",
          imageDisplayMode: 'two-column',
           images: [
             {
               src: '/media/projects/aicommunity/MarketInsights.jpg',
               alt: 'User Interview & Market Insights',
               caption: 'Key insight: 90% of participants want to have an in-app community.'
             },
             {
               src: '/media/projects/aicommunity/CompetitiveAnalysis.jpg',
               alt: 'Competitive Analysis',
               caption: 'Analysis of existing platforms: Twitter, Reddit, Discord - all lack specialized AI community features'
             },
             {
               src: '/media/projects/aicommunity/UserPersona.jpg',
               alt: 'User Personas',
               caption: 'Key user personas'
             },
             {
               src: '/media/projects/aicommunity/Userjourneymap.jpg',
               alt: 'User Journey Map',
               caption: 'User journey from discovery to active community participation'
             }
           ]
        },
        
        {
          id: 'solution-strategy',
          title: 'Solution & Design Process',
          icon: '💡',
          content: [
            'We aimed to create an in-app community homepage that is both familiar—leveraging patterns users already know from Reddit, RedNotes, and YouTube—and tailored for AI-specific use cases such as prompt sharing and event discovery. The design evolved from a **three-column layout** inspired by Reddit/YouTube into a **two-panel structure** that better fits AI LLM application design. In addition, the post layout was changed from single-post per row to multi-post previews per row, allowing users to scan content more efficiently. ',
            'Our solution addresses the core insight: **users want to share their AI experiences, not just learn techniques.** So we designed a **three-post-type** system that accommodates different sharing needs: Share Chat & Thoughts for AI interactions, Share Prompt for technical knowledge, and Community Events for real-time collaboration.',
            "Our **rating system** enables users to rate prompt effectiveness, creating a **positive feedback loop** that surfaces the most valuable content. High-rated prompts gain visibility, encouraging quality contributions and providing immediate recognition to creators.",
          ],
          imageDisplayMode: 'alternating',
          images: [
            {
              src: '/media/projects/aicommunity/Designprocess.jpg',
              alt: 'Design Process',
              caption: 'Share Chat & Thoughts, Share Prompt, and Community Event interfaces with distinct visual treatments'
            },
            {
              src: '/media/projects/aicommunity/DiagramPost.jpg',
              alt: 'Three Post Types',
              caption: 'Share Chat & Thoughts, Share Prompt, and Community Event interfaces with distinct visual treatments'
            },
            {
              src: '/media/projects/aicommunity/Ratingsystem2.jpg',
              alt: 'Rating System',
              caption: 'Interactive voting and rating system for prompt effectiveness with real-time feedback'
            },
          ]
        },
        
        {
          id: 'features',
          title: 'Core Features & User Experience',
          icon: '✨',
          content: 'The platform\'s three-post-type system directly addresses our research findings. Share Chat & Thoughts enables users to share their emotional AI interactions with privacy protection, Share Prompt facilitates technical knowledge exchange with voting systems, and Events creates more connection opportunities. Each feature is designed to encourage specific types of engagement while maintaining the platform\'s focus on community building and knowledge sharing.',
          features: [
            {
              name: 'Share Chat & Thoughts',
              description: 'AI Conversation Sharing',
              detail: 'Users share their creative AI interactions with built-in privacy protection and content filtering'
            },
            {
              name: 'Share Prompt',
              description: 'Prompt Engineering Hub',
              detail: 'Technical knowledge sharing with voting system and effectiveness ratings'
            },
            {
              name: 'Events',
              description: 'Connect with Others',
              detail: 'Online & offline events, workshops, and discussions for community building'
            },
          ],
          imageDisplayMode: 'two-column',
          images: [
            {
              src: '/media/projects/aicommunity/Postingflow.jpg',
              alt: 'Three Post Types',
              caption: 'Share Chat & Thoughts, Share Prompt, and Community Event interfaces with distinct visual treatments'
            },
            {
              src: '/media/projects/aicommunity/Ratingsystem.jpg',
              alt: 'Rating System',
              caption: 'Interactive voting and rating system for prompt effectiveness with real-time feedback'
            },
            {
              src: '/media/projects/aicommunity/Search.png',
              alt: 'Search & Filter',
              caption: 'Advanced search capabilities with tag filtering and content categorization'
            },
            {
              src: '/media/projects/aicommunity/Mybookmarks.png',
              alt: 'Personal Center',
              caption: 'User dashboard with AI Coins system, bookmarks, and content management'
            }
          ]
        },
        
         {
           id: 'technical-implementation',
           title: 'Technical Implementation & Coding Structure',
           icon: '💻',
           content:  ['Built with modern web technologies, the platform ensures excellent performance and developer experience. Next.js 14 with App Router provides optimal performance, TypeScript ensures type safety, and Tailwind CSS enables rapid development. The application is fully responsive, accessible, and optimized for all devices with a focus on user experience and maintainability.',
            'Core code structure is based on INFORMATION_ARCHITECTURE_CN_EN.md, ARCHITECTURE_CN_EN.md andREADME.md',
           ],
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
          id: 'design-system',
          title: 'Design System & Visual Language',
          icon: '🎨',
          content: 'Rather than creating a completely new design system, we used ChatGPT\'s built-in community as our design reference and foundation. This approach ensures familiarity and reduces user learning curve while maintaining a clean, content-focused aesthetic. The design system is built to be highly customizable, allowing other AI applications to adapt the visual language to match their brand identity—colors, typography, spacing, and component styles can all be easily modified to align with different AI tools\' existing design systems. We followed basic accessibility principles including good color contrast, readable typography, and responsive design to ensure the platform works well across different devices and user needs.',
         
       },

        {
          id: 'final-showcase',
          title: 'Final Showcase & Impact',
          icon: '🚀',
          content: 'The final platform successfully transforms isolated AI tool usage into collaborative community experiences. Users can easily discover relevant content, share their AI stories, and build meaningful connections. The platform serves as both a knowledge repository and social hub, addressing the critical gap in AI community building.\n\n**Live Demo:** [https://ai-community-mvp-v2-7y9m.vercel.app/](https://ai-community-mvp-v2-7y9m.vercel.app/)',
          imageDisplayMode: 'two-column',
          images: [
            {
              src: '/media/projects/aicommunity/Homepage.png',
              alt: 'Homepage',
              caption: 'Clean, modern homepage with intelligent content feed and seamless navigation'
            },
             {
              src: '/media/projects/aicommunity/Postingflow.jpg',
              alt: 'Posting Flow',
              caption: 'Intuitive posting process with real-time preview and privacy protection'
            },
            {
              src: '/media/projects/aicommunity/Trendingprompts.png',
              alt: 'Trending Page',
              caption: 'Smart trending content switched between prompts, posts & events'
            },
            {
              src: '/media/projects/aicommunity/Postdetailpage.jpg',
              alt: 'Post Detail Page',
              caption: 'Rich post detail view with voting, comments, and social interactions'
            },
            {
              src: '/media/projects/aicommunity/Mypost.png',
              alt: 'Personal Data',
              caption: 'Manage user posts,and bookmarks,and coins'
            },
             {
              src: '/media/projects/aicommunity/Guide.png',
              alt: 'Guidelines & Rules',
              caption: 'Easy to understand guidelines and rules for beginners'
            },
        ]
      }
    ]
  },
  
  // ========== Ziplink UIUX项目示例 ==========
  {
    id: 'ziplink',
    title: 'Ziplink',
    subtitle: '',
    categories: ['UIUX','Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    techTags: ['#Figma', '#Wireframe', '#Prototype'],
    
    thumbnail: '/media/projects/ziplink/Slide27.jpeg',  // 列表页缩略图
    brief: 'Redesign the user experience of future in-car system.',
    
    heroImage: '/media/projects/ziplink/Slide1.jpeg',
    heroVideo: null,  // 可选：视频路径
    domain: ['In-Car System', 'UI/UX'],
    form: ['Research', 'Wireframing & Prototyping'],
    collaborators: ['Yu Zhou', 'Francisco Guerrero'],  // 或其他合作者名字
  
    colors: {
      heroGradient: 'linear-gradient(135deg, #69a84f 0%, #b2e36e 100%)', // 橙红到青色
      subtitleGradient: 'linear-gradient(135deg, #69a84f 0%, #b2e36e 100%)', // 橙红到青色
      underlineGradient: 'linear-gradient(135deg, #69a84f 0%, #b2e36e 100%)' // 橙红到青色
    },

    overview: {
      content: "In the bustling streets of cities, where the rhythm of traffic never ceases, the challenge of maintaining focus while driving is ever-present. Our project, Ziplink, aims to address the critical issue of driver distraction and cognitive overload, particularly when interacting with in-car systems. With a focus on enhancing the driving experience for all, especially those new to the roads, our project seeks to integrate innovative solutions into the existing ZipCar app, making it a more comprehensive tool for drivers.",
      challenge: 'How might we reduce cognitive overload for new drivers by creating a unified in-car experience that minimizes the need to switch between multiple apps and screens while driving?'
    },
    
    sections: [

      {
        id: 'problemstatement',
        title: 'Problem Statement',
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
    title: 'Music Encounter',
    subtitle: '3D Open World Social Adventure Game',
    categories: ['Game', 'Research', 'Programming'],
    tags: ['Game Design', 'Unity', 'Music Interaction', 'Social Gaming', 'Research'],
    techTags: ['#Unity', 'C#', '#Interactive Design', '#Music notes from text'],
    
    thumbnail: '/media/projects/musicencounter/Hero.png',
    brief: 'Exploring music and sound as primary means of interaction and connection in games.',
    
    heroImage: '/media/projects/musicencounter/Hero.png',
    heroVideo: null,
    
    domain: ['Video Game', 'Interactive Design', 'Music Technology', 'Research'],
    form: ['Game Design & Development', 'C# Programming', 'Interactive Design','Research'],
    collaborators: ['Solo Project', 'Parsons School of Design'],
    
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(88, 80, 201) 0%,rgb(231, 135, 103) 100%)',
      subtitleGradient: 'linear-gradient(135deg,rgb(88, 80, 201) 0%,rgb(254, 142, 73)  100%)',
      underlineGradient: 'linear-gradient(135deg, #534ea3 0%, #dd8b59 100%)'
    },
    
    overview: {
      content: "Music Encounter is a groundbreaking Open World 3D world adventure game that explores how music and sound can serve as the primary means of interaction and connection between people.Music moves people. Its kinetic power can affect human emotions and behaviors, and people can feel the bonds between people under certain circumstances across different cultures. The goal of the game is to use music and sound to connect and match people, and to provide people with a good interactive and social experience. ",
      challenges:[
        'How can music and sound create deeper, more meaningful connections between people in digital spaces?',
        'Can music and sound help to build connections between people, and help people find their partners, friends, or even lovers in a more efficient and interesting way?',
        'How will musical communication be different from traditional text, video, or voice communication?',
        'How would open world 3D games fit into these interests?'
      ] 
    },
    
    sections: [
      {
        id: 'research-background',
        title: 'Research Background',
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
        title: 'Technical Implementation & Future Vision',
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
            text: '查看论文',
            url: '/files/Music Encounter.pdf',
            type: 'download',
            downloadName: 'Music Encounter.pdf'
          },
          {
            text: '玩游戏',
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
    title: 'Eternal Dreams',
    subtitle: 'Third Person Role Playing Game',
    categories: ['Game', '3D', 'Programming'], // 多分类支持
    tags: ['Game Design', 'Unity', '3D Environment Design', 'C#'],
    techTags: ['#Unity', 'C#', '#Maya', '#Blender', '#3D Modeling'],
    
    thumbnail: '/media/projects/eternaldreams/HeroCover.jpg',
    brief: 'A Third Person 3D Role-playing game made in Unity. You are the chosen adventurer, who came into this fantastic world.',
    
    heroImage: '/media/projects/eternaldreams/HeroCover.jpg',
    heroVideo: null,  // 游戏可以有预告片
    
    domain: ['Video Game', 'Entertainment', '3D Art'],
    form: ['Game Design & Development', 'Level Design', '3D Modeling', 'C# Programming'],
    collaborators: ['Solo Project','University of Florida'],
    
    // ========== 项目颜色配置 ==========
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 橙红到青色
      subtitleGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 橙红到青色
      underlineGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)' // 橙红到青色
    },
    
    overview: {
      content: "Eternal Dream takes place in a fantasy world known as 'Dream', featuring an art style that leans towards 3D anime and is non-realistic. Players awaken in this fantasy-styled world, as if they are in an eternal nightmare/dream. They need to defeat unknown monsters and travel to towns as beautiful as those in fairy tales. Players will start their journey, and end up going home or being the hero of this world.",
      challenge: 'How to create an engaging narrative that adapts to player choices?'
    },
    
    sections: [
      {
        id: 'mechanics',
        title: 'Game Mechanics',
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
    title: 'Prime Directive',
    subtitle: '2D Action-Platformer Game',
    categories: ['Game', '2D GameArt'],
    techTags: ['#Unity', '#Level Design','#Adobe Illustrator','#Adobe Creative Suite'],
    
    thumbnail: '/media/projects/primedirective/Hero3.png',
    brief: 'A 2D Action-Platformer game made in Unity. The player acts as a security bot on a space station, defending the station and defeating all enemies.',
    
    heroImage: '/media/projects/primedirective/Hero3.png',
    heroVideo: 'https://vimeo.com/654379482',
    
    domain: ['Video Game', 'Entertainment', 'Art Design'],
    form: ['Game Design & Development', 'Level Design', '2D Art'],
    collaborators: ['Qingyu Cao(Lead Artist & Level Designer)', 'Griffin Mckee(Artist)', 'Tyler C.Mueller(Programmer)','Yifan Zhu(Programmer)'],
    
    colors: {
      heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      subtitleGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      underlineGradient: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)'
    },
    
    overview: {
      content: "As a security robot onboard a deep space station, you were created to stop any threats that may appear. On this fateful day, you have been awoken from stasis sleep to stop a gang of pirates that have overtaken the station. Navigate through the corridors of the Zeta Station, collect weapon upgrades, defeat the invaders, and fulfill your prime directive!",
      challenge: 'How to create an engaging 2D platformer with unique vector graphics and combat mechanics?'
    },
    
    sections: [
      {
        id: 'game-mechanics',
        title: 'Game Concept & Mechanics',
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
        icon: '⚡',
        content: 'A recurrent challenge in game design is the task of infusing familiar mechanics with a fresh and captivating allure. Many science fiction games conventionally gravitate towards pixel art or 3D photorealistic styles. In our endeavor, we opted for a vector graphic art style, which imparts a vibrant and distinct visual character to the project. This approach yields a cleaner and more individualistic aesthetic, setting our game apart and enhancing its uniqueness.',
      },

      {
        id: 'player-experience',
        title: 'Player Experience Goals',
        icon: '🎯',
        content: 'The primary ambition for players of "Prime Directive" is to deliver an exhilarating combat-centric gaming experience. The game is designed to immerse players in intense shootouts, challenging them to survive onslaughts from multiple enemies and to effectively defend the station. Emphasis is placed on mastering the shooting mechanics, and strategically utilizing the environment to ensure the station\'s security. The aim is to provide a thrilling sense of achievement through overcoming the escalating challenges presented throughout the game.',
      },

      {
        id: 'final-showcase',
        title: 'Final Showcase',
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
    title: 'My Little Fish Tank',
    subtitle: '3D Fish Tank Simulator',
    categories: ['Game', '3D'],
    techTags: ['#Unity','#Maya', '#3D Modeling & Animation','Texturing'],
    
    thumbnail: '/media/projects/fishtank/Picture2.png',
    brief: 'A 3D fish tank simulator that taps into childhood nostalgia of owning and caring for a fish tank, allowing players to maintain their own little ecosystem.',
    
    heroImage: '/media/projects/fishtank/Picture2.png',
    heroVideo:'https://vimeo.com/644155060',
    
    domain: ['Video Game', '3D Art'],
    form: ['Game Design', '3D  Modeling & Animation','Texturing'],
    collaborators: [''],
    
    colors: {
      heroGradient: 'linear-gradient(135deg,rgb(93, 155, 217) 0%,rgb(55, 136, 177) 50%,rgb(7, 70, 101) 100%)',
      subtitleGradient: 'linear-gradient(135deg,rgb(93, 155, 217) 0%,rgb(55, 136, 177) 50%,rgb(7, 70, 101) 100%',
      underlineGradient: 'linear-gradient(135deg,rgb(93, 155, 217) 0%,rgb(55, 136, 177) 50%,rgb(7, 70, 101) 100%'
    },
    
    overview: {
      content: '"My Little Fish Tank" is a 3D fish tank simulator that taps into the childhood nostalgia associated with owning and caring for a fish tank. Inspired by the joy and responsibility of maintaining a miniature aquatic ecosystem, the game offers players the opportunity to nurture fish, decorate their tank, and manage a virtual aquatic environment. The idea is to recreate the sense of accomplishment and attachment that comes from growing and caring for fish, combined with the excitement of collecting and customizing their environment.',
      challenge: 'How to create an engaging simulation game that captures the nostalgia and joy of fishkeeping?'
    },
    
    sections: [
      {
        id: 'game-mechanics',
        title: 'Game Mechanics',
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
  }
  
]

// ========== 辅助函数 ==========
export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects
  return projects.filter(project => project.categories?.includes(category))
}

export const getFeaturedProjects = () => {
  // 可以添加 featured 字段，或者返回前几个项目
  return projects.slice(0, 3)
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
