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
    
    // ========== 主页展示 ==========
    thumbnail: '/media/projects/stumbldoor/hero/hero-image.jpg',  // 列表页缩略图
    brief: 'An innovative digital platform that reimagines the traditional library experience.',
    
    // ========== 详情页 Hero ==========
    heroImage: '/media/projects/stumbldoor/hero/hero-image.jpg',
    heroVideo: null,  // 可选：视频路径
    
    // ========== 项目标签（参考Reshma的设计）==========
    domain: ['Edtech', 'UI/UX', 'Mobile'],
    form: ['UX Research', 'App Design', 'Prototyping'],
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
        imageDisplayMode: 'grid', // 网格模式
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
        title: 'Final Display',
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
  
  // ========== Ziplink UIUX项目示例 ==========
  {
    id: 'ziplink',
    title: 'Ziplink',
    subtitle: '',
    categories: ['UIUX','Research'],  // 多分类支持
    tags: ['User Experience Design', 'Mobile App', 'Research'],
    
    thumbnail: '/media/projects/ziplink/Slide27.jpeg',  // 列表页缩略图
    brief: 'Redesign the user experience of future in-car system.',
    
    heroImage: '/media/projects/ziplink/Slide1.jpeg',
    heroVideo: null,  // 可选：视频路径
    domain: ['In-Car System', 'UI/UX'],
    form: ['UX Research', 'App Design', 'Research'],
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
        imageDisplayMode: 'grid', // 网格模式
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
        title: 'Final Display',
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
            alt: 'Final Display2'
          },
          {
            src: '/media/projects/ziplink/Slide26.jpeg',
            alt: 'Final Display3'
          },
          {
            src: '/media/projects/ziplink/Slide2.jpeg',
            alt: 'Final Display4'
          }
        ]
      }
    ]
  },
  
  // ========== game项目示例 ==========
  {
    id: 'eternal-dreams',
    title: 'Eternal Dreams',
    subtitle: 'Third Person Role Playing Game',
    categories: ['Game', '3D', 'Programming'], // 多分类支持
    tags: ['Game Design', 'Unity', '3D Environment Design', 'C#'],
    
    thumbnail: '/media/projects/eternaldreams/HeroCover.jpg',
    brief: 'A Third Person 3D Role-playing game made in Unity. You are the chosen adventurer, who came into this fantastic world.',
    
    heroImage: '/media/projects/eternaldreams/HeroCover.jpg',
    heroVideo: null,  // 游戏可以有预告片
    
    domain: ['Gaming', 'Entertainment', '3D Art'],
    form: ['Game Design', 'Level Design', '3D Modeling', 'C# Programming'],
    collaborators: ['Solo Project'],
    
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
        imageDisplayMode: 'grid', // 网格模式
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
        imageDisplayMode: 'grid', // 网格模式
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
  
  // ========== Programming 项目示例 ==========
  {
    id: 'web-app',
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Web Application',
    categories: ['Programming'], // 多分类支持
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
    
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    brief: 'A comprehensive e-commerce platform built with modern web technologies.',
    
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    heroVideo: null,
    
    domain: ['E-commerce', 'Web Development', 'Business'],
    form: ['Frontend Development', 'Backend Development', 'Database Design'],
    collaborators: ['Solo Project'],
    
    overview: {
      content: 'A full-stack e-commerce platform featuring user authentication, product management, shopping cart, and payment processing.',
      challenge: 'How to create a scalable and user-friendly e-commerce solution?'
    },
    
    role: {
      title: 'Full-Stack Developer',
      responsibilities: [
        'Frontend Development: React.js with modern hooks',
        'Backend Development: Node.js and Express.js',
        'Database Design: MongoDB with Mongoose ODM',
        'API Integration: RESTful API design and implementation'
      ]
    },
    
    sections: [
      {
        id: 'tech-stack',
        title: 'Technology Stack',
        icon: '💻',
        content: 'The project utilizes a modern MERN stack with additional technologies for enhanced functionality.',
        features: [
          {
            name: 'Frontend',
            description: 'React.js with Hooks',
            detail: 'Modern functional components and state management'
          },
          {
            name: 'Backend',
            description: 'Node.js & Express',
            detail: 'RESTful API with middleware and authentication'
          },
          {
            name: 'Database',
            description: 'MongoDB',
            detail: 'NoSQL database with Mongoose ODM'
          }
        ],
        images: []
      }
    ]
  },
  
  // ========== Research 项目示例 ==========
  {
    id: 'user-research',
    title: 'UX Research Study',
    subtitle: 'Mobile App Usability Analysis',
    categories: ['Research'], // 多分类支持
    tags: ['User Research', 'Usability Testing', 'Data Analysis'],
    
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    brief: 'Comprehensive user research study analyzing mobile app usability patterns.',
    
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    heroVideo: null,
    
    domain: ['Research', 'UX', 'Mobile'],
    form: ['User Research', 'Data Analysis', 'Usability Testing'],
    collaborators: ['Research Team'],
    
    overview: {
      content: 'A comprehensive research study examining user behavior and usability patterns in mobile applications.',
      challenge: 'How do users interact with mobile interfaces and what patterns can we identify?'
    },
    
    role: {
      title: 'UX Researcher',
      responsibilities: [
        'Research Design: Methodology and participant recruitment',
        'Data Collection: User interviews and usability testing',
        'Analysis: Qualitative and quantitative data analysis',
        'Reporting: Findings documentation and recommendations'
      ]
    },
    
    sections: [
      {
        id: 'methodology',
        title: 'Research Methodology',
        icon: '🔬',
        content: 'The study employed mixed-methods research approach combining qualitative and quantitative data.',
        images: []
      }
    ]
  },
  
  // ========== 3D 项目示例 ==========
  {
    id: '3d-modeling',
    title: '3D Environment Design',
    subtitle: 'Virtual World Creation',
    categories: ['3D', 'Graphic Design'], // 多分类支持
    tags: ['3D Modeling', 'Blender', 'Texturing', 'Rendering'],
    
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    brief: 'Immersive 3D environment design for virtual reality applications.',
    
    heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    heroVideo: null,
    
    domain: ['3D Art', 'Virtual Reality', 'Gaming'],
    form: ['3D Modeling', 'Texturing', 'Rendering'],
    collaborators: ['3D Art Team'],
    
    overview: {
      content: 'A detailed 3D environment created for immersive virtual reality experiences.',
      challenge: 'How to create realistic and engaging 3D environments for VR?'
    },
    
    role: {
      title: '3D Artist',
      responsibilities: [
        '3D Modeling: High-poly and low-poly asset creation',
        'Texturing: UV mapping and material creation',
        'Lighting: Scene lighting and atmosphere design',
        'Optimization: Performance optimization for real-time rendering'
      ]
    },
    
    sections: [
      {
        id: 'modeling',
        title: '3D Modeling Process',
        icon: '🎨',
        content: 'The 3D modeling process involved creating detailed assets optimized for real-time rendering.',
        images: []
      }
    ]
  },
  
  // ========== Graphic Design 项目示例 ==========
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    subtitle: 'Complete Visual Identity System',
    categories: ['Graphic Design'], // 多分类支持
    tags: ['Branding', 'Logo Design', 'Typography', 'Visual Identity'],
    
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
    brief: 'Comprehensive brand identity design for a modern tech startup.',
    
    heroImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop',
    heroVideo: null,
    
    domain: ['Branding', 'Visual Design', 'Marketing'],
    form: ['Logo Design', 'Typography', 'Color Palette', 'Brand Guidelines'],
    collaborators: ['Design Team'],
    
    overview: {
      content: 'A complete brand identity system including logo design, typography, color palette, and comprehensive brand guidelines.',
      challenge: 'How to create a memorable and cohesive brand identity that reflects the company values?'
    },
    
    role: {
      title: 'Graphic Designer',
      responsibilities: [
        'Logo Design: Creating multiple logo concepts and final design',
        'Typography: Selecting and customizing brand fonts',
        'Color Palette: Developing cohesive color system',
        'Brand Guidelines: Documenting usage rules and applications'
      ]
    },
    
    sections: [
      {
        id: 'logo-design',
        title: 'Logo Design Process',
        icon: '🎨',
        content: 'The logo design process involved extensive research, sketching, and digital refinement.',
        features: [
          {
            name: 'Research',
            description: 'Brand Analysis',
            detail: 'Understanding company values and target audience'
          },
          {
            name: 'Sketching',
            description: 'Concept Development',
            detail: 'Hand-drawn concepts and initial ideas'
          },
          {
            name: 'Digital Design',
            description: 'Final Execution',
            detail: 'Vector-based logo design and variations'
          }
        ],
        images: []
      },
      {
        id: 'brand-guidelines',
        title: 'Brand Guidelines',
        icon: '📋',
        content: 'Comprehensive brand guidelines ensuring consistent application across all touchpoints.',
        images: []
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