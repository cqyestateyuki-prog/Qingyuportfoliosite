// music-encounter
export const musicEncounter = {
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
  };
