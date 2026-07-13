// excel-ai-agent
export const excelAiAgent = {
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
      mainTitle: { en: 'An AI Analyst That Shows Its Work', zh: '一个把过程摊开给你看的 AI 分析师' },
      briefContent: { en: 'Non-technical people are locked out of their own data: analysis means formulas or Python. Hand it to an AI and you hit the opposite problem, [[a black box you cannot trust]]. Excel AI Agent solves both by [[showing its work]]. You ask in plain language, and it streams back the Python it wrote, the steps it ran, and the exact columns it used. [[Transparency is what makes a non-technical user trust the answer]].', zh: '非技术的人被挡在自己的数据之外:做分析要么得会公式,要么得会 Python。交给 AI 又走到另一个极端:[[一个你无法信任的黑箱]]。Excel AI Agent 两头都解:[[把过程摊开给你看]]。你用大白话提问,它实时显示写出的 Python 代码、执行的每一步、以及用到的具体数据列。[[让非技术用户敢信结果的,正是透明]]。' },
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
        briefContent: 'The platform\'s core features directly address user pain points: [[Natural language interaction]] (text and voice) eliminates coding needs, [[streaming output]] provides real-time feedback, and [[intelligent chart generation]] automatically creates visualizations. The complete flow, from file upload to analysis results, happens through conversation.',
          icon: '✨',
        content: 'Every feature exists to close the trust gap, not to add surface. Voice and text input remove the code barrier. Streaming output turns a long wait into visible thinking. Data traceability names the exact columns behind every answer, so you can check the machine instead of taking it on faith. What matters is that you can see how it got there, column by column.',
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
        briefContent: 'The result is a data analyst anyone can talk to and still audit. No formulas, no code, and a demo you can watch run end to end. The bet the whole tool makes: for AI to be trusted with real work, it has to [[show that work, not hide it]].',
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
  };
