// my-little-fish-tank
export const myLittleFishTank = {
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
  };
