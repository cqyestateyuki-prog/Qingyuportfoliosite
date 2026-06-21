// ziplink
export const ziplink = {
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
  };
