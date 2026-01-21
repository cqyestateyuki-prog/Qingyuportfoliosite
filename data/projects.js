// src/data/projects.js
// 简化版项目数据结构 - 移除client和completed，responsibilities可选

export const projects = [

   // ========== Programming 项目示例 ==========
    // ========== AI Community MVP项目 ==========
    {
      id: 'ai-community-platform',
      title: 'AI Built-in Community Platform',
      subtitle: 'Modern integrated Community Platform for AI Tools',
      categories: ['AI', 'UIUX', 'Programming','Product Design', 'Research'],
      tags: ['UI/UX Design', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Frontend Development',  'Web Development'],
      techTags: ['#Figma','#React','#TypeScript', '#Next.js','#HTML/CSS'],
      
      thumbnail: '/media/projects/aicommunity/Hero2 copy.png',
      brief: 'An in-app integrated community system designed for AI Tools.',
      heroImage: '/media/projects/aicommunity/Hero2 copy.png',
      heroVideo: 'https://vimeo.com/1145264634?share=copy&fl=sv&fe=ci',
      
      domain: ['AI Product Design & Development', 'Web Platform', 'Learning Community'],
      form: ['UI/UX Design', 'Frontend Development', 'React + TypeScript + Tailwind CSS', 'Next.js'],
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
          id: 'problem-statement',
          title: 'Problem Statement',
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
          id: 'user-insights',
          title: 'User Research & Insights',
          sectionTag: 'User Research & Insights',
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
          id: 'solution-strategy',
          title: 'The Solution',
          sectionTag: 'The Solution',
          mainTitle: 'One Integrated Ecosystem, Three Core Functions',
          briefContent: 'I designed a specialized community platform that directly [[addresses user pain points while creating powerful network effects]]. The platform features three post types: Share Chat & Thoughts for emotional expression, Share Prompt for technical knowledge, and Community Events for real-time collaboration.',
          icon: '💡',
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
        },
        
        {
          id: 'design-process',
          title: 'Design Approach & Iteration',
          sectionTag: 'Design Approach & Iteration',
          mainTitle: 'From Insight to Interface',
          briefContent: 'I aimed to create an in-app community homepage that is both familiar—leveraging patterns users already know from Reddit, RedNotes, and YouTube—and tailored for AI-specific use cases. The design evolved from a [[three-column layout]] inspired by Reddit/YouTube into a [[two-panel structure]] that better fits AI LLM application design. The post layout was changed from single-post per row to [[multi-post previews per row]], allowing users to scan content more efficiently. Through multiple iteration sessions based on user testing and feedback, I refined the interface to improve usability, enhance the user experience, and ensure the platform addresses the core pain points identified in research.',
          icon: '🎨',
          imageDisplayMode: 'alternating',
          images: [
            {
              src: '/media/projects/aicommunity/beforeafter.png',
              alt: 'Design Process',
              caption: 'Evolved from a three-column layout into a two-panel structure'
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
          id: 'design-system',
          title: 'Design System',
          sectionTag: 'Design System',
          mainTitle: 'Familiar Yet Customizable Visual Language',
          briefContent: 'Rather than creating a proprietary visual design system, I designed a [[platform-agnostic community framework]] that adapts to [[existing AI chat interfaces]]. It acts as a functional layer on top of conversational UIs—adding community features without disrupting the core chat experience.',
          icon: '🎨',
          content: [
            '- **Leverages familiar patterns**: Users already understand chatbot-style interfaces, so the community layer feels intuitive with minimal learning curve.',
            '- **Remains content-first**: A clean, minimal structure that doesn’t compete with the AI interaction—community content stays scannable and readable.',
            '- **Enables white-label implementation**: Any AI application can adopt the framework while keeping their own brand identity and visual style.',
            '- **Focuses on information architecture**: The value is in [[how content is organized]] (post types, discovery, ranking, and navigation), not decorative styling.',
            '',
            'This framework is designed to plug into existing chat products—so teams can ship community capabilities faster while preserving the core conversational experience.'
          ],
       },
        
         {
           id: 'technical-implementation',
           title: 'Technical Implementation',
           sectionTag: 'Technical Implementation',
           mainTitle: 'Built for Scale and Performance',
           briefContent: 'Built with modern web technologies, the platform ensures excellent performance and developer experience. Next.js 14 with App Router provides optimal performance, TypeScript ensures type safety, and Tailwind CSS enables rapid development. The application is fully responsive, accessible, and optimized for all devices.',
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
          id: 'final-showcase',
          title: 'Final Showcase & Impact',
          sectionTag: 'Final Showcase & Impact',
          mainTitle: 'Community Drives Retention and Engagement',
          briefContent: 'The final platform successfully transforms [[isolated AI tool usage into collaborative community experiences]]. Users can easily [[discover relevant content, share their AI stories, and build meaningful connections]]. By integrating community directly within AI tools, I create powerful network effects that drive [[retention, engagement, and sustainable growth]].\n\n[Live Demo: https://ai-community-mvp-v2-7y9m.vercel.app/](https://ai-community-mvp-v2-7y9m.vercel.app/)',
          icon: '🚀',
          imageDisplayMode: 'single',
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
              src: '/media/projects/aicommunity/Mybookmarks.png',
              alt: 'Personal Data',
              caption: 'User dashboard with AI Coins system, bookmarks, and content management'
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

   // ========== UIUX 项目 ==========
  {
    // ========== Stumbldoor Project 图书系统==========
    id: 'stumbldoor',
    title: 'Stumbldoor',
    subtitle: 'Library Experience for the Future',
    categories: ['UIUX', 'Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    techTags: ['#Figma', '#Wireframe', '#Prototype','#Visual Design', '#Mobile App','#Design System'],  // 技术标签
    
    // ========== 主页展示 ==========
    thumbnail: '/media/projects/stumbldoor/hero/hero-image@66662x.png',  // 列表页缩略图
    brief: 'An innovative digital platform that reimagines the traditional library experience.',
    
    // ========== 详情页 Hero ==========
    heroImage: '/media/projects/stumbldoor/hero/hero-image@66662x.png',
    heroVideo: null,  // 可选：视频路径
    
    // ========== 项目标签==========
    domain: ['Edtech', 'UI/UX', 'Mobile'],
    form: ['Research', 'Mobile Application Design'],
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
    title: 'Excel AI Agent',
    subtitle: 'Intelligent Data Analysis Assistant',
    categories: ['AI', 'Programming','Product Design'],
    tags: ['AI-Powered Tool', 'Data Analysis', 'Voice Input', 'Web Application'],
    techTags: ['#AI Agent devlopment','#HTML', '#Python', '#WebSocket', '#OpenAI API', '#SSE'],
    
    thumbnail: '/media/projects/excel ai agent/hero.png',
    brief: 'A natural language-powered Excel data analysis assistant that enables non-technical users to complete complex data analysis tasks through conversational interaction.',
    
    heroImage: '/media/projects/excel ai agent/hero.png',
    heroVideo: 'https://vimeo.com/1144917772?share=copy&fl=sv&fe=ci',
    
    domain: ['AI Product Design & Development', 'Data Analysis Tool', 'Web Application'],
    form: ['UI/UX Design', 'Frontend Development', 'Backend Development', 'AI Integration'],
    collaborators: ['Solo Project', 'OpenAI API','Cursor'],
      
      colors: {
      heroGradient: 'linear-gradient(135deg, #0D5D2E 0%,rgb(43, 138, 82) 100%)', // Excel 绿色主题
      subtitleGradient: 'linear-gradient(135deg, #0D5D2E 0%,rgb(43, 138, 82) 100%)', // Excel 绿色渐变
      underlineGradient: 'linear-gradient(135deg, #0D5D2E 0%,rgb(43, 138, 82) 100%)', // Excel 绿色渐变
      textHighlightColor: '#0D5D2E' // Excel 绿色高亮
      },
      
       overview: {
      mainTitle: 'Transform Data Analysis Into Natural Conversation',
      briefContent: 'Excel AI Agent is a [[lightweight AI agent]] that enables [[non-technical users to complete complex data analysis tasks through natural language interaction]]. By understanding user questions, automatically generating Python code, and creating visual charts, I transformed technical data analysis into an accessible conversational experience.',
      content: 'Excel AI Agent is a lightweight AI agent that serves as a natural language-powered intelligent data analysis assistant, allowing users to complete complex data analysis tasks without writing code. Through AI technology, the system understands users\' natural language questions, automatically generates Python analysis code, executes analysis, and generates visual charts. The project features a clean white background design with Excel green as the primary color theme, supporting real-time streaming output and voice input, providing an efficient and intuitive data analysis experience for everyday users who need to work with Excel data but lack technical expertise.',
         challenges: [
        'How might we enable non-technical users to easily complete complex data analysis tasks?',
        'How can I make AI\'s working process transparent and understandable?',
        'How to balance feature completeness with simplicity?',
        'How to provide real-time feedback during analysis to reduce user anxiety?',
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
        title: 'Technical Implementation',
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
    title: 'Petiboxy Charity Platform',
    subtitle: 'Connecting Love, Saving Lives',
    categories: ['UIUX', 'Product Design', 'Research'],
    tags: ['Mobile App', 'Charity Platform', 'Pet Rescue', 'User Experience Design'],
    techTags: ['#Figma', '#UI/UX Design', '#Mobile App', '#Product Design'],
    
    thumbnail: '/media/projects/petiboxy/hero.png',
    brief: 'A comprehensive pet rescue ecosystem connecting people with pets in need, supporting rescue organizations, and building a compassionate community.',
    
    heroImage: '/media/projects/petiboxy/hero.png',
    heroVideo: null,
    
    domain: ['Mobile App Feature Module', 'Charity Platform', 'Pet Rescue'],
    form: ['UI/UX Design', 'Product Design', 'Research'],
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
      mainTitle: 'Building a Comprehensive Pet Rescue Ecosystem',
      briefContent: 'Expanding the mission of [[Petiboxy]], a premier pet fresh food brand, I conceptualized and delivered a dedicated charity ecosystem to tackle the crisis of [[90 million stray animals]]. This project creates a vital connection for the [[60% of inhibited adopters]], translating the abstract values of [[Professionalism, Safety, Love, and Responsibility]] into a tangible, user-centric experience.',
      challenges: [
        'How might we connect 90 million stray animals with people who want to help?',
        'How might we reduce the adoption barriers that prevent 60% of willing adopters?',
        'How might we support rescue organizations with funding and visibility?',
        'How might we create a trustworthy, accessible platform for pet rescue?'
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
      mainTitle: 'Redesigning the Future of In-Car Experience',
      briefContent: 'In the bustling streets of cities, where the rhythm of traffic never ceases, the challenge of maintaining focus while driving is ever-present. [[Ziplink]] aims to address the critical issue of [[driver distraction and cognitive overload]], particularly when interacting with in-car systems. With a focus on enhancing the driving experience for all, especially those new to the roads, the project seeks to integrate innovative solutions into the existing ZipCar app, making it a more comprehensive tool for drivers.',
      challenge: 'How might we reduce cognitive overload for new drivers by creating a unified in-car experience that minimizes the need to switch between multiple apps and screens while driving?'
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
      mainTitle: 'Music as a Universal Language for Digital Connection',
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
    title: 'Eternal Dreams',
    subtitle: 'Third Person Role Playing Game',
    categories: ['Game', 'Programming','3D Art',], // 多分类支持
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
      heroGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      subtitleGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      underlineGradient: 'linear-gradient(135deg,rgb(27, 74, 168) 0%, #4ECDC4 100%)', // 蓝色到青色
      darkColor: 'rgb(27, 74, 168)', // mainTitle 使用的深色（蓝色）
      lightColor: '#4ECDC4' // sectionTag 使用的浅色（青色）
    },
    
    overview: {
      mainTitle: 'A Journey Through Fantasy and Dreams',
      content: "Eternal Dream takes place in a fantasy world known as 'Dream', featuring an art style that leans towards 3D anime and is non-realistic. Players awaken in this fantasy-styled world, as if they are in an eternal nightmare/dream. They need to defeat unknown monsters and travel to towns as beautiful as those in fairy tales. Players will start their journey, and end up going home or being the hero of this world.",
      challenge: 'How to create an engaging narrative that adapts to player choices?'
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
    title: 'Prime Directive',
    subtitle: '2D Action-Platformer Game',
    categories: ['Game', '2D Art'],
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
      mainTitle: 'Defending the Zeta Station',
      content: "As a security robot onboard a deep space station, you were created to stop any threats that may appear. On this fateful day, you have been awoken from stasis sleep to stop a gang of pirates that have overtaken the station. Navigate through the corridors of the Zeta Station, collect weapon upgrades, defeat the invaders, and fulfill your prime directive!",
      challenge: 'How to create an engaging 2D platformer with unique vector graphics and combat mechanics?'
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
    title: 'My Little Fish Tank',
    subtitle: '3D Fish Tank Simulator',
    categories: ['Game', '3D Art'],
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
      mainTitle: 'Nostalgic Fish Tank Simulator',
      content: '"My Little Fish Tank" is a 3D fish tank simulator that taps into the childhood nostalgia associated with owning and caring for a fish tank. Inspired by the joy and responsibility of maintaining a miniature aquatic ecosystem, the game offers players the opportunity to nurture fish, decorate their tank, and manage a virtual aquatic environment. The idea is to recreate the sense of accomplishment and attachment that comes from growing and caring for fish, combined with the excitement of collecting and customizing their environment.',
      challenge: 'How to create an engaging simulation game that captures the nostalgia and joy of fishkeeping?'
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
