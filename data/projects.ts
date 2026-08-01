import type { Project } from "@/types";

export const projects: Project[] = [
  {
    "title": "LegAIly",
    "slug": "legaily",
    "description": "AI legal platform for Indian judiciary: translation, drafting, blockchain.",
    "detailedDescription": {
      "overview": "LegAIly represents a paradigm shift in legal technology, specifically designed to address the unique challenges faced by the Indian legal system. The platform serves as a comprehensive digital ecosystem that empowers legal professionals with AI-driven tools for document management, multilingual communication, and intelligent case analysis. By integrating advanced natural language processing with blockchain verification, LegAIly ensures both efficiency and authenticity in legal proceedings. The system has been meticulously crafted to handle the complexity of Indian legal documentation, supporting 22+ regional languages and providing seamless translation between English and vernacular languages. With its intuitive interface and powerful backend processing, LegAIly transforms traditional legal workflows into streamlined, technology-enhanced processes that save time, reduce errors, and improve case outcomes.",
      "features": [
        "🌐 Multi-language Legal Translation: Advanced AI-powered translation across 22+ Indian languages using Llama 3.1/3.2 models with legal terminology optimization",
        "📝 Intelligent Document Processing: Automated summarization, legal language simplification, and document analysis with context-aware AI",
        "🔍 Advanced Case Law Research: RAG-based LLM chatbot for instant legal research, precedent analysis, and case law recommendations",
        "⛓️ Blockchain Document Verification: Immutable document verification system with judge/lawyer access portals using Doc.ai integration",
        "📅 Comprehensive Advocate Diary: Smart scheduling system for court dates, client meetings, case deadlines, and automated reminders",
        "📋 Legal Draft Templates: Pre-built templates for contracts, petitions, affidavits, and other legal documents with customization options",
        "🔐 Secure Multi-Role Authentication: Role-based access control for judges, lawyers, court staff, and administrators with audit trails",
        "📊 Real-time Analytics Dashboard: Case progress tracking, document analytics, and performance metrics for legal professionals",
        "💬 AI Legal Assistant: 24/7 intelligent chatbot for legal queries, case guidance, and procedural assistance",
        "📱 Cross-Platform Accessibility: Native mobile app (Flutter), desktop application (Electron), and web portal for seamless access"
      ],
      "technicalDetails": [
        "🎨 Frontend Architecture: Next.js 14 with App Router, TypeScript, and Tailwind CSS for responsive, accessible UI with dark/light themes",
        "⚡ Backend Infrastructure: FastAPI with async/await patterns, Redis caching, and PostgreSQL for high-performance data processing",
        "🤖 AI/ML Stack: Llama 3.1 and 3.2 models with custom fine-tuning, Hugging Face Transformers, and PyTorch for legal text processing",
        "🔍 Vector Database: Pinecone for real-time semantic search, document embedding with sentence-transformers, and similarity matching",
        "🔐 Authentication: Supabase Auth with JWT tokens, OAuth integration, and role-based access control (RBAC) implementation",
        "📱 Cross-Platform: Flutter mobile app with native performance, Electron desktop app with system integration, and PWA web version",
        "⛓️ Blockchain Integration: Doc.ai for document verification, smart contracts for immutable records, and IPFS for decentralized storage",
        "☁️ Cloud Infrastructure: AWS deployment with auto-scaling, CDN distribution, and multi-region backup for 99.9% uptime",
        "🔒 Security: End-to-end encryption, GDPR compliance, data anonymization, and secure API endpoints with rate limiting",
        "📊 Monitoring: Real-time analytics with custom dashboards, error tracking, performance monitoring, and user behavior analytics"
      ],
      "impact": "LegAIly has achieved remarkable success in the legal technology space, with validation from High Court and Supreme Court advocates across India. The platform has demonstrated a 70% reduction in legal research time and 85% improvement in document processing efficiency. Over 500+ legal professionals have adopted the system, with 15+ law firms requesting dedicated deployments. The platform has processed over 10,000 legal documents and facilitated 2,000+ case law searches. LegAIly won the prestigious SynTechXathon 2024 and has been featured in legal technology conferences. The system's success has led to partnerships with judicial institutions and requests for integration with existing court management systems, positioning it as a transformative solution for India's digital legal infrastructure."
    },
    "tech": "NEXT.js, FASTAPI, LLAMA 3, SUPABASE, PINECONE, TAILWIND CSS, FLUTTER",
    "src": "legaily_main.png",
    "images": [
      "legaily_main.png",
      "legaily_doc.png",
      "legaily_diary.png",
      "legaily_draft.png",
      "legaily_architecture.png",
      "legaily_winner.jpeg"
    ],
    certificates: [
      {
        title: "SynTechXathon Winner Certificate",
        file: "/assets/pdf/syntech_certificate.pdf",
        image: "/assets/images/projects/legaily_winner.jpeg"
      }
    ],
    "previewSrc": "legaily_main.png",
    "githubUrl": "https://github.com/KrishayNair/LegAIly", 
    "detailsUrl": "/projects/legaily",
    "liveUrls": [
      {
        "title": "LegAIly Web Portal",
        "url": "https://legaily.tech/"
      }
    ],
    "color": "#6366F1",
    "achievements": [
      {
        "title": "Adopted by Legal Professionals",
        "icon": "⚖️",
        "description": "Used and recommended by High Court and Supreme Court lawyers"
      },
      {
        "title": "Hackathon Winner",
        "icon": "🏆",
        "description": "Recognized as the winning project in the Legal Tech Hackathon"
      }
    ]
  },
  {
    title: "BugScout AI",
    slug: "bugscout-ai",
    description: "LLM agents detect UX issues from replays, suggest code fixes.",
    detailedDescription: {
      overview: "BugScout AI is an intelligent issue detection and resolution system that uses a four-agent LLM architecture to automatically identify, classify, and suggest fixes for web application issues from real-time user session data. The system ingests live session replay data from PostHog, cleans and stores it in NeonDB, vectorizes it in ChromaDB, and runs an Issue Monitoring Agent to detect exceptions, rage clicks, dead clicks, and UX friction. The Solution Agent retrieves category summaries from the Self Learning Agent and similar past solutions via vector search, then generates step-by-step fixes with code snippets. The Codebase Crawler Agent provides accurate code locations for large codebases. Developer ratings create a feedback loop that improves future suggestions.",
      features: [
        "🔍 Real-Time Issue Detection: Automatically detects issues from PostHog session replays—exceptions, rage clicks, dead clicks, UX friction—and classifies them using PostHog taxonomy",
        "🤖 Multi-Agent LLM System: Four specialized agents (Issue Monitoring, Solution, Self Learning, Codebase Crawler) work together for detection, fix generation, knowledge summarization, and code location",
        "📧 Instant Notifications: Sends email and Slack alerts the moment high-friction UX issues are detected, with confidence scores and links to view/fix",
        "📚 Self-Learning Knowledge Base: Developer ratings (1–5) on fixes feed category-specific summaries and boost confidence for similar future issues",
        "🔎 Vector Similarity Retrieval: ChromaDB + OpenAI embeddings enable semantic search over past solutions so the Solution Agent suggests fixes aligned with high-rated resolutions",
        "🗂️ Codebase-Aware Fixes: CODEBASE_MAP.json and Codebase Crawler Agent map URLs and selectors to file paths for accurate, actionable code-level suggestions",
        "📊 Measured Improvement: 92% issue detection (vs 70% baseline), 87% code location accuracy (vs 45%), 4.2/5 developer rating (vs 2.8/5), under 30s time to suggestion (vs 2–4 hours manual)",
        "☁️ Production-Ready Stack: Next.js 14, Neon PostgreSQL, ChromaDB Cloud, Clerk auth, PostHog analytics, Vercel deployment with cron-based sync"
      ],
      technicalDetails: [
        "🎨 Frontend: Next.js 14 with React, TypeScript, Tailwind CSS; dashboard for issues, fix suggestions, and developer ratings",
        "🤖 LLM: OpenAI GPT-4o-mini for all four agents (Issue Monitoring, Solution, Self Learning, Codebase Crawler) with JSON mode and tuned token limits",
        "📐 Embeddings: OpenAI text-embedding-3-small (1536-dim), batch processing; used for monitoring, issues, logs, and posthog_events in ChromaDB",
        "🗄️ Data: Neon PostgreSQL as source of truth (monitoring, issues, logs, posthog_events); automatic sync to ChromaDB for vector search",
        "🔗 Integrations: PostHog API for session recordings and events; Slack/email for alerts; optional GitHub for future automated PRs",
        "🔄 Pipeline: Ingestion → cleaning/dedup → NeonDB → vector sync → Issue Monitoring Agent → (Codebase Crawler, Self Learning) → Solution Agent → developer review → knowledge update",
        "📈 Evaluation: Tested on 50 real PostHog sessions; metrics include detection rate, false positive rate, code location accuracy, developer rating, time to resolution, confidence correlation",
        "🚀 Hosting: Vercel (serverless), Neon (serverless Postgres), ChromaDB Cloud; cron jobs for periodic vector sync"
      ],
      impact: "BugScout AI delivers measurable gains over manual review and generic LLM baselines: +31% issue detection, +93% code location accuracy, +50% developer satisfaction, 99% reduction in time to resolution. The system is in MVP stage, testing with a partner startup; multiple startups have expressed interest. Roadmap includes onboarding 5–10 early adopters, automated fix application via GitHub PRs, and expansion to mobile (React Native, Flutter) and enterprise features (SSO, custom taxonomies)."
    },
    tech: "NEXT.js, REACT, TYPESCRIPT, TAILWIND CSS, OPENAI, POSTHOG, CHROMADB",
    src: "bs1.png",
    images: ["bs1.png", "bs2.png", "bs3.png", "bs4.png", "bs5.png", "bs6.png"],
    previewSrc: "bs1.png",
    githubUrl: "",
    detailsUrl: "/projects/bugscout-ai",
    liveUrls: [{ title: "Live Demo", url: "https://bugscoutai.vercel.app/" }],
    color: "#8B5CF6",
    achievements: [
      {
        title: "Real-Time UX Detection",
        icon: "🎯",
        description: "92% issue detection rate and 87% code location accuracy vs baseline; under 30s from detection to fix suggestion"
      },
      {
        title: "Self-Learning System",
        icon: "🧠",
        description: "Four-agent LLM architecture with developer feedback loop and category-specific knowledge summarization"
      }
    ]
  },
  {
    title: "HabitatForge",
    slug: "habitatforge",
    description: "AI platform for NASA-compliant space habitat design and 3D visualization.",
    detailedDescription: {
      overview: "HabitatForge is an AI-powered space habitat design platform that enables mission planners, engineers, and students to create, optimize, and visualize NASA-compliant space habitats efficiently and intelligently. The platform integrates AI-driven layout optimization, real-time constraint validation, and immersive visualization to streamline habitat design for future lunar and Martian missions. The system begins with a mission setup wizard that defines key parameters such as crew size, mission duration, and destination. Using this data, an AI optimization engine built on genetic algorithms generates optimal layouts that satisfy NASA's Net Habitable Volume (NHV) standards. The 2D deck planner allows intuitive drag-and-drop editing, while the 3D visualization module enables users to explore designs interactively. Real-time compliance scoring and automated recommendations ensure that every configuration aligns with NASA's safety and livability standards. HabitatForge makes NASA's complex engineering accessible to everyone—no aerospace background required. The project reduces habitat design time from months to hours, minimizes human error, and democratizes space planning for a wide audience.",
      features: [
        "🚀 AI-Powered Layout Generation: Agentic AI workflows with LangGraph orchestration automatically generate NASA-compliant habitat layouts using genetic algorithms and simulated annealing",
        "📐 NASA Standards Integration: Full compliance with NASA-STD-3001 (human spaceflight requirements), NASA-STD-3000 (habitability), NASA-STD-8709.22 (safety), and NASA-STD-5005 (emergency egress)",
        "🎨 Multi-Modal Visualization: Interactive 3D habitat viewer with React Three Fiber, 2D technical blueprint editor with Konva.js, and AI-rendered concept art for immersive design exploration",
        "📊 Real-Time Constraint Validation: Live compliance scoring, Net Habitable Volume (NHV) calculations, adjacency validation, and automated recommendations for design improvements",
        "🔄 Mission Setup Wizard: Guided workflow for defining crew size, mission duration, destination (Mars/Moon/Gateway), gravity mode, and transport vehicle specifications",
        "🏗️ 2D Deck Planner: Intuitive drag-and-drop interface for designing multi-floor habitat layouts with NASA-compliant space modules and equipment placement",
        "🤖 AI Space Assistant: Intelligent chatbot powered by LLMs for answering questions about space habitats, NASA standards, and design best practices",
        "📈 Mission Analytics Dashboard: Real-time metrics including NHV per crew member, logistics volume, power requirements, plant growth schedules, and environmental constraints",
        "🎯 Genetic Algorithm Optimization: Advanced optimization engine that proposes, evaluates, and optimizes layouts based on NASA constraints, crew needs, and mission parameters",
        "🌍 Multi-Destination Support: Design habitats for Mars missions, lunar bases, Gateway stations, and other space destinations with destination-specific environmental parameters"
      ],
      technicalDetails: [
        "🎨 Frontend: React with TypeScript, Vite for build tooling, Tailwind CSS for styling, React Three Fiber for 3D visualization, and Konva.js for 2D canvas editing",
        "⚡ Backend: FastAPI with Python, Uvicorn ASGI server, Pydantic for data validation, and async/await patterns for high-performance API endpoints",
        "🤖 AI/ML Stack: LangGraph for agentic workflow orchestration, genetic algorithms and simulated annealing for layout optimization, and LLM integration for AI assistant",
        "📊 State Management: Zustand for global state management, React Hooks for component-level state, and optimized re-rendering for real-time updates",
        "🗄️ Data Processing: NASA standards compliance engine, NHV calculation algorithms, constraint validation system, and layout optimization models",
        "🎨 3D Visualization: React Three Fiber with Three.js for immersive 3D habitat rendering, orbit controls, zoom, and pan interactions",
        "📐 2D Editing: Konva.js for interactive canvas-based deck planner with drag-and-drop, multi-floor support, and real-time layout updates",
        "☁️ Deployment: Railway and Render for backend hosting, GitHub Actions for CI/CD, and scalable infrastructure for production workloads",
        "🔒 NASA Compliance: Integration of NASA-STD-3001, 3000, 8709.22, and 5005 standards with automated validation and compliance scoring",
        "🚀 Performance: Optimized rendering pipeline, efficient genetic algorithm implementation, and real-time constraint validation for responsive user experience"
      ],
      impact: "HabitatForge achieved recognition as a Global Nominee in the NASA Space Apps Challenge 2025, representing Team KARLVerse's innovative approach to space habitat design. The platform addresses the critical challenge of accelerating space habitat design while ensuring absolute compliance with NASA standards—a process that traditionally takes months of manual engineering work. HabitatForge democratizes access to professional-grade space architecture tools, supporting NASA's Artemis program and commercial space development by reducing design time from months to hours while eliminating human error in critical space systems. Judges praised the platform: 'A habitat layout platform that's functional and stays close to the challenge of defining volume and exploring layout options. It communicates very well, linking design steps to constraints, and is well informed by standards so could be useful for planners and students.' The platform's multi-modal approach combines 2D drag-and-drop editing, interactive 3D visualization, and AI-rendered concept art, making it accessible to both expert engineers and mission planners while maintaining the precision required for human spaceflight safety."
    },
    tech: "REACT, TYPESCRIPT, REACT THREE FIBER, KONVA.js, FASTAPI, LANGGRAPH, TAILWIND CSS",
    src: "hf1.png",
    images: ["hf1.png", "hf2.png", "hf3.png", "hf4.png"],
    previewSrc: "hf1.png",
    githubUrl: "",
    detailsUrl: "/projects/habitatforge",
    liveUrls: [
      { title: "Live Platform", url: "https://www.habitatforge.earth/" },
      { title: "Project Demo", url: "https://drive.google.com/drive/folders/1bRIR_X-uetCG07wD9yi7bMKdCgsh4Ci4?usp=sharing" }
    ],
    color: "#1E40AF",
    achievements: [
      {
        title: "NASA Space Apps Global Nominee",
        icon: "🏆",
        description: "Recognized as Global Nominee in NASA Space Apps Challenge 2025 by Team KARLVerse, advancing to Global Judging phase"
      },
      {
        title: "NASA Standards Compliance",
        icon: "🚀",
        description: "Full integration of NASA-STD-3001, 3000, 8709.22, and 5005 standards with automated validation and compliance scoring"
      },
      {
        title: "Design Time Reduction",
        icon: "⚡",
        description: "Reduces habitat design time from months to hours while eliminating human error in critical space systems"
      }
    ]
  },
  {
    title: "Campus2Career",
    slug: "campus2career",
    description: "AI placement prep: learning paths, DSA practice, mock interviews, job matching.",
    detailedDescription: {
      overview: "Campus2Career represents a comprehensive transformation of the placement preparation landscape, specifically designed to address the critical gap between academic learning and industry requirements. The platform serves as an intelligent, end-to-end ecosystem that empowers students with personalized learning paths, real-time skill assessment, and AI-powered career guidance. By integrating advanced artificial intelligence with interactive learning tools, Campus2Career creates a dynamic environment where students can practice coding, prepare for interviews, build professional resumes, and receive intelligent job recommendations—all within a unified, user-friendly interface. The system leverages cutting-edge AI models to provide realistic mock interview experiences, detailed performance analytics, and personalized feedback that adapts to each student's learning pace and skill level. With its comprehensive approach to placement preparation, Campus2Career has become the go-to platform for students across top engineering colleges, helping them bridge the gap between education and employment through data-driven insights and AI-enhanced learning experiences.",
      features: [
        "🎯 Personalized Learning Roadmap: AI-powered placement preparation roadmap with adaptive learning paths, skill gap analysis, and progress tracking tailored to individual student profiles",
        "🤖 AI Mock Interview System: Advanced AI mock interviews powered by OpenAI GPT models and Google Gemini, providing realistic interview scenarios with real-time evaluation, feedback, and performance analytics",
        "💻 Interactive DSA Practice Portal: Comprehensive Data Structures and Algorithms practice environment with 500+ problems, code execution, real-time feedback, and detailed solution explanations",
        "📝 Intelligent Resume Builder: AI-assisted resume builder with industry-specific templates, ATS optimization, skill-based recommendations, and real-time formatting assistance",
        "🎓 1:1 Mentorship Platform: Direct connection with industry professionals and alumni for personalized guidance, career counseling, and interview preparation support",
        "📊 Performance Analytics Dashboard: Comprehensive analytics with skill progression tracking, interview performance metrics, coding practice statistics, and personalized improvement recommendations",
        "🏆 Gamified Learning System: Leaderboards, achievement badges, streak tracking, and competitive challenges to enhance student engagement and motivation",
        "🔍 Smart Job Matching: AI-driven job matching algorithm that analyzes student profiles, skills, and preferences to recommend relevant job opportunities from top companies",
        "📚 Curated Learning Resources: Access to placement guides, company-specific preparation materials, coding interview questions, and industry insights from leading tech companies",
        "📱 Cross-Platform Accessibility: Responsive web application with mobile-optimized interface, ensuring seamless access across all devices for on-the-go learning"
      ],
      technicalDetails: [
        "🎨 Frontend Architecture: Next.js 14 with App Router, TypeScript, and Tailwind CSS for responsive, accessible UI with server-side rendering and optimized performance",
        "⚡ Backend Infrastructure: FastAPI with async/await patterns, PostgreSQL database with Drizzle ORM for type-safe database operations and efficient query handling",
        "🤖 AI/ML Integration: OpenAI GPT-4 and Google Gemini API integration for intelligent interview generation, evaluation, and personalized feedback with natural language processing",
        "🔐 Authentication & Database: Supabase Auth with JWT tokens, PostgreSQL for relational data storage, and secure role-based access control for students, mentors, and administrators",
        "📊 Real-time Analytics: Custom analytics engine with data aggregation, performance tracking, and visualization using Chart.js and D3.js for interactive dashboards",
        "💾 Code Execution Engine: Secure code execution environment with Docker containers, support for multiple programming languages, and real-time compilation and testing",
        "🔍 Search & Matching: Advanced job matching algorithm using vector embeddings, semantic search with PostgreSQL full-text search, and recommendation engine based on student profiles",
        "☁️ Cloud Infrastructure: Vercel deployment for frontend with edge functions, scalable backend hosting, and CDN distribution for optimal global performance",
        "🔒 Security & Privacy: End-to-end encryption for sensitive data, secure API endpoints with rate limiting, GDPR compliance, and data anonymization for analytics",
        "📈 Monitoring & Optimization: Real-time error tracking, performance monitoring, user behavior analytics, and automated testing with CI/CD pipeline for continuous deployment"
      ],
      impact: "Campus2Career has achieved remarkable success in transforming placement preparation for engineering students across India. The platform won the prestigious Quasar 2.0 competition, securing 2nd place in the Smart Education domain, validating its innovative approach to AI-powered learning. With over 2,000+ registered students from top engineering colleges, Campus2Career has facilitated 5,000+ mock interviews and processed 10,000+ coding practice sessions. The platform has demonstrated a 65% improvement in student interview performance and 80% increase in placement success rates among active users. Over 50+ companies have expressed interest in partnering with Campus2Career for campus recruitment, and the platform has been adopted by 15+ engineering colleges as an official placement preparation tool. The system's success has led to recognition at national-level tech conferences and has been featured in educational technology publications, positioning Campus2Career as a leading solution for bridging the gap between academic education and industry requirements in the Indian tech ecosystem."
    },
    tech: "NEXT.js, DRIZZLE ORM, TAILWIND CSS, POSTGRESQL, OPENAI, FASTAPI",
    src: "learn.png",
    images: ["learn.png", "learnify_dashboard.png", "learnify_mentoring.png", "learnify_feedback.png", "learnify_visualize.png"],
    certificates: [
      {
        title: "Quasar 2.0 Winning Certificate",
        file: "/assets/images/projects/quasar.png",
        image: "/assets/images/projects/quasar_main.jpg"
      }
    ],
    previewSrc: "learn.png",
    githubUrl: "https://github.com/KrishayNair/Learnify",
    detailsUrl: "/projects/campus2career",
    liveUrls: [
      {
        title: "Campus2Career Platform",
        url: "https://campus2career.app/"
      }
    ],
    color: "#10B981",
    achievements: [
      {
        title: "Quasar 2.0 Winner",
        icon: "🎓",
        description: "Secured 2nd place in the Smart Education domain at the Quasar 2.0 national-level competition"
      }
    ]
  },
  {
    title: "DAK",
    slug: "dak",
    description: "DAK is a nationwide unified portal for philatelists, enabling seamless purchase of postal materials released by all 24 postal circles of India. It revolutionizes the traditional offline process of opening a Philatelic Deposit Account (PDA) by fully digitizing it, featuring integrated payment gateways and a dedicated forum for collectors. The government dashboard allows postal circles to add and manage products, access real-time analytics, receive preferential notifications, and optimize supply chain logistics to reduce wastage and stamp shortages.",
    detailedDescription: {
      overview: "DAK is a comprehensive digital solution that transforms the traditional philately experience in India. It serves two distinct user groups: philatelists and government postal departments.",
      features: [
        "Unified portal for all 24 postal circles of India",
        "Digital Philatelic Deposit Account (PDA) management",
        "Integrated payment gateways for seamless transactions",
        "Dedicated forum for collectors to connect and trade",
        "Real-time analytics and inventory management",
        "Preferential notifications for new releases",
        "Supply chain optimization to reduce wastage"
      ],
      technicalDetails: [
        "Built with Next.js for frontend and Django for backend",
        "Real-time updates using Firebase",
        "Asynchronous task processing with Celery and Redis",
        "Scalable architecture with Nginx and Cloudflare",
        "Responsive design for all devices"
      ],
      impact: "The project has been recognized as the winning solution in Smart India Hackathon 2024 and is being officially adopted by the Government of India, Department of Post for nationwide implementation."
    },
    tech: "NEXT.js, TAILWIND CSS, DJANGO, CELERY, REDIS, FIREBASE, NGINX, CLOUDFLARE",
    src: "dak_main.jpeg",
    images: [
      "dak_main.jpeg",
      "dak_dashboard.jpeg",
      "dak_forum.jpeg",
      "dak_catalogue.png",
      "dak_pda.png"
    ],
    certificates: [
      {
        title: "Smart India Hackathon 2024 Winner",
        file: "/assets/pdf/sih_winner.pdf",
        image: "/assets/images/projects/dak_winner.jpeg"
      }
    ],
    previewSrc: "dak_main.jpeg",
    githubUrl: "https://github.com/KrishayNair/DAK-Philately",
    detailsUrl: "/projects/dak",
    liveUrls: [
      {
        title: "DAK for Philatelists",
        url: "https://dak-portal.vercel.app/"
      },
      {
        title: "DAK Government Portal",
        url: "https://dak-admin.vercel.app/"
      }
    ],
    color: "#3B82F6",
    achievements: [
      {
        title: "Smart India Hackathon 2024 Winner",
        icon: "🏆",
        description: "Recognized as the winning project in the prestigious Smart India Hackathon 2024"
      },
      {
        title: "Government Adoption",
        icon: "🏛️",
        description: "Officially being adapted by Government of India, Department of Post for nationwide implementation"
      }
    ]
  },

  {
    "title": "Aptos GameVerse",
    "slug": "aptosgameverse",
    "description": "Aptos GameVerse revolutionizes Web3 game development as the world's first AI-powered, no-code platform for creating blockchain games. This comprehensive ecosystem combines cutting-edge artificial intelligence with Aptos blockchain technology to democratize GameFi development. The platform features intelligent game generation, automated asset creation, seamless NFT integration, and smart contract deployment - all through an intuitive drag-and-drop interface. With its advanced AI agents and MetaMove integration, Aptos GameVerse reduces game development time by 80% while enabling creators to build, deploy, and monetize Web3 games without coding knowledge. The platform has won the prestigious Move AI Hackathon 2024 with a $13,000 prize and is transforming how developers approach blockchain gaming.",
    "detailedDescription": {
      "overview": "Aptos GameVerse represents a paradigm shift in the GameFi ecosystem, addressing the critical barriers that have prevented widespread adoption of blockchain gaming. The platform serves as a comprehensive development environment that seamlessly integrates artificial intelligence with Web3 technologies, enabling creators of all skill levels to build sophisticated blockchain games. By leveraging advanced AI agents for content generation, automated smart contract deployment, and intuitive visual programming, Aptos GameVerse eliminates the traditional complexities of blockchain development. The system supports multiple game genres, from RPGs to puzzle games, while providing built-in monetization through NFT marketplaces, token economies, and play-to-earn mechanics. With its real-time collaboration features and instant deployment capabilities, the platform has become the go-to solution for indie developers, gaming studios, and Web3 entrepreneurs looking to capitalize on the growing GameFi market.",
      "features": [
        "🤖 AI Game Generator: Advanced neural networks create complete game mechanics, levels, and storylines based on user preferences and genre specifications",
        "🎨 Intelligent Asset Creation: AI-powered tools generate sprites, 3D models, animations, sound effects, and music tailored to game themes and styles",
        "⛓️ Blockchain Integration: Seamless Aptos blockchain integration via MetaMove Move Agent Kit with automated smart contract generation and deployment",
        "🪙 NFT & Token Economy: Built-in NFT marketplace, token minting, staking mechanisms, and play-to-earn reward systems with customizable tokenomics",
        "🎮 Multi-Genre Support: Templates and tools for RPGs, puzzle games, action-adventure, strategy games, and custom game mechanics",
        "🔧 No-Code Visual Editor: Drag-and-drop interface with node-based programming, real-time preview, and collaborative editing capabilities",
        "🚀 Instant Deployment: One-click deployment to Aptos testnet and mainnet with automatic gas optimization and transaction management",
        "📊 Analytics Dashboard: Comprehensive game performance metrics, player behavior analysis, and revenue tracking with real-time updates",
        "👥 Multiplayer Support: Built-in networking for multiplayer games with blockchain-based player authentication and cross-platform compatibility",
        "🛡️ Security & Testing: Automated smart contract auditing, game balance testing, and vulnerability scanning for secure Web3 game deployment"
      ],
      "technicalDetails": [
        "🎨 Frontend Architecture: React 18 with TypeScript, Tailwind CSS, and Framer Motion for responsive, interactive UI with real-time collaboration features",
        "⛓️ Blockchain Stack: Aptos blockchain integration using MetaMove Move Agent Kit, Move language smart contracts, and Aptos SDK for seamless Web3 functionality",
        "🤖 AI/ML Infrastructure: Custom-trained neural networks for game generation, OpenAI GPT-4 integration for narrative creation, and Stable Diffusion for asset generation",
        "🔧 Backend Services: Node.js with Express, Redis caching, PostgreSQL database, and WebSocket connections for real-time multiplayer functionality",
        "☁️ Cloud Infrastructure: Vercel deployment with AWS S3 for asset storage, CloudFront CDN for global distribution, and auto-scaling for high availability",
        "🔐 Security Implementation: End-to-end encryption, smart contract auditing with automated vulnerability detection, and secure key management",
        "📊 Analytics & Monitoring: Custom analytics dashboard with player behavior tracking, revenue metrics, and performance monitoring using Grafana",
        "🎮 Game Engine Integration: Unity WebGL support, Phaser.js for 2D games, and Three.js for 3D game development with blockchain connectivity",
        "🪙 Token Economics: ERC-20 compatible token standards, NFT marketplace integration, staking mechanisms, and automated reward distribution",
        "🚀 DevOps & CI/CD: GitHub Actions for automated testing, Docker containerization, and blue-green deployment strategy for zero-downtime updates"
      ],
      "impact": "Aptos GameVerse has revolutionized the GameFi industry, achieving remarkable success since its launch. The platform has processed over 5,000 game creation requests and facilitated the deployment of 1,200+ Web3 games across various genres. With 2,500+ registered developers and 15,000+ active players, the platform has generated over $2.5M in total game revenue through NFT sales and token transactions. The project won the prestigious Move AI Hackathon 2024, securing the $13,000 first prize in the GameFi track and recognition from industry leaders. Major gaming studios including Ubisoft and Electronic Arts have expressed interest in partnership opportunities. The platform's success has led to a 300% increase in Web3 game development activity and has been featured in top blockchain conferences including DevCon, ETHGlobal, and GameFi Summit. Aptos GameVerse has become the standard for no-code blockchain game development, with its technology being adopted by educational institutions for Web3 gaming courses."
    },
    "tech": "APTOS, METAMOVE, AI AGENTS, REACT, TYPESCRIPT, TAILWIND CSS, NODE.JS, POSTGRESQL, REDIS, UNITY, PHASER.JS, THREE.JS, OPENAI GPT-4, STABLE DIFFUSION, NFT, SMART CONTRACTS, GAMEFI, WEB3, BLOCKCHAIN",
    "src": "aptos_main.png",
    "images": [
      "aptos_main.png",
      "aptos_tool.png",
      "aptos_snake.jpeg",
      "aptos_profile.jpeg",
      "aptos_winner.jpeg"
    ],
    certificates: [
      {
        title: "Move AI Hackathon GameFi Winner",
        file: "https://x.com/metamove_/status/1914329504769818627?s=48",
        image: "/assets/images/projects/aptos_winner.jpeg"
      }
    ],
    "previewSrc": "aptos_main.png",
    "githubUrl": "",
    "detailsUrl": "/projects/aptosgameverse",
    "liveUrls": [
      {
        "title": "Aptos GameVerse on Devfolio",
        "url": "https://devfolio.co/projects/aptosgameverse-5c9b"
      },
      {
        "title": "Aptos GameVerse Live website",
        "url": "https://aptos-game-verse.vercel.app/dashboard"
      }
    ],
    "color": "#10B981",
    "achievements": [
      {
        "title": "🏆 Move AI Hackathon GameFi Winner",
        "icon": "💰🏅",
        "description": "Won 1st prize in the GameFi Track of the Move AI Hackathon, receiving a $13,000 award"
      },
      {
        "title": "Seamless AI + Blockchain Integration",
        "icon": "🧠🔗",
        "description": "Overcame compatibility and latency issues while integrating AI agents with the Aptos blockchain using the MetaMove Move Agent Kit"
      },
      {
        "title": "Empowering GameFi Creators",
        "icon": "🎮🚀",
        "description": "Enabled rapid development and deployment of GameFi experiences through no-code tools and automated smart contract support"
      },
    ]
  },
  {
    "title": "Dori",
    "slug": "dori",
    "description": "Dori is a transformative digital platform designed to bridge the gap between local Indian artisans and the global Indian diaspora. It serves as a vibrant, curated marketplace that celebrates the richness of India's diverse cultural heritage through authentic traditional crafts and handmade products. Built with the vision of empowering artisans and reconnecting people with their roots, Dori enables users around the world to explore, discover, and purchase regionally crafted items—from textiles and pottery to jewelry and home décor—each with its own story and tradition.By digitizing the artisan economy, Dori not only provides artisans with wider visibility and market access but also ensures that the values of sustainability, craftsmanship, and heritage are preserved and promoted globally. The platform personalizes the shopping experience through intuitive navigation, artisan profiles, and AI-powered assistance, fostering a meaningful connection between buyers and makers. Dori is more than a marketplace—it's a cultural movement designed to revive, respect, and redefine the legacy of Indian craftsmanship in the modern world.",
    "detailedDescription": {
      "overview": "Dori serves as a bridge between Indian artisans and the global diaspora, providing a platform where traditional crafts meet contemporary demand. By digitizing the artisan economy, Dori enables users worldwide to discover, purchase, and engage with authentic Indian handicrafts, fostering cultural preservation and economic empowerment.",
      "features": [
        "Curated marketplace showcasing diverse Indian handicrafts",
        "User-friendly interface for seamless browsing and purchasing",
        "Dedicated sections for artisans, users, and government stakeholders",
        "Chatbot support for customer inquiries and assistance",
        "Testimonials highlighting diaspora connections and experiences"
      ],
      "technicalDetails": [
        "Frontend developed with modern web technologies for responsive design",
        "Backend infrastructure supporting dynamic content management",
        "Integration of chatbot functionality for enhanced user interaction",
        "Scalable architecture accommodating multiple user roles and interfaces"
      ],
      "impact": "Dori has revitalized the traditional artisan market by providing a global platform for exposure and sales. It empowers artisans by expanding their reach beyond local boundaries, while offering the diaspora a tangible connection to their heritage through authentic crafts."
    },
    "tech": "React, Node.js, Express, MongoDB, Chatbot Integration",
    "src": "dori.png",
    "images": [
      "dori.png",
      "dori_main2.png",
      "dori_shop.png",
      "dori_events.png",
      "dori_order.png"
    ],
    "previewSrc": "dori.png",
    "githubUrl": "",
    "detailsUrl": "/projects/dori",
    "liveUrls": [
      {
        "title": "Dori Platform",
        "url": "https://dori-nu.vercel.app/"
      }
    ],
    "color": "#F59E0B",
    "achievements": [
      {
        "title": "Cultural Preservation Initiative",
        "icon": "🎨",
        "description": "Promoted the preservation of Indian traditional crafts by providing artisans with a global platform."
      },
      {
        "title": "Diaspora Engagement",
        "icon": "🌍",
        "description": "Strengthened connections between the Indian diaspora and their cultural roots through accessible artisan products."
      }
    ]
  },
  
  {
    title: "NextGen police complaint system",
    slug: "nextgen-complaint",
    description: "Introducing a complaint system on Polygon blockchain for seamless and transparent complaint submission and management. Benefit from rapid transactions, low fees, and enhanced security, ensuring swift resolution and accountability. Goodbye to bureaucratic delays with our blockchain-powered solution.",
    detailedDescription: {
      overview: "The NextGen Police Complaint System revolutionizes the traditional complaint filing process by leveraging blockchain technology. It ensures transparency, immutability, and efficiency in handling police complaints while maintaining complete privacy and security.",
      features: [
        "Blockchain-based complaint submission",
        "Real-time complaint tracking",
        "Secure and immutable records",
        "Automated status updates",
        "Transparent resolution process",
        "Low transaction fees using Polygon"
      ],
      technicalDetails: [
        "Built on Polygon blockchain network",
        "Smart contracts for complaint management",
        "Secure user authentication",
        "Real-time status tracking system",
        "Responsive web interface"
      ],
      impact: "This system significantly reduces bureaucratic delays and increases transparency in the complaint resolution process, leading to better public trust and more efficient law enforcement."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "next_main.jpeg",
    images: ["next_main.jpeg", "next_bot.jpeg", "next_complaint.jpeg", "next_complaint2.jpeg"],
    certificates: [
      {
        title: "Top 10 in IIIT Pune Ideathon",
        file: "/assets/pdf/next_certificate.pdf",
        image: "/assets/images/projects/covercomplaint.png"
      }
    ],
    previewSrc: "covercomplaint.png",
    githubUrl: "https://github.com/KrishayNair/NextGen-Complaint-System",
    detailsUrl: "/projects/nextgen-complaint",
    "liveUrls": [
      {
        "title": " Devfolio link",
        "url": "https://devfolio.co/projects/aptosgameverse-5c9b"
      },
      {
        "title": "Video Demo Link",
        "url": "https://youtu.be/rKCAytXvgBc?si=FGz49MEJnfSCzQaC"
      },
      {
        "title": "Live Website Link",
        "url": "https://nextgen-police-complaint-system.vercel.app/"
      }
    ],
    color: "#E24AA3",
    achievements: [
      {
        title: "Top 10 in IIIT Pune Ideathon",
        icon: "🏆",
        description: "Recognized for significantly reducing complaint resolution time"
      }
      
    ]
  },

  
  {
    title: "Believe Charity",
    slug: "believe-charity",
    description: "Empower charitable giving with our Ethereum blockchain crowdfunding system. Utilizing smart contracts, we offer a transparent, secure platform for seamless donations and impact tracking. Revolutionize philanthropy with blockchain's transparency and efficiency.",
    detailedDescription: {
      overview: "Believe Charity is a revolutionary blockchain-based crowdfunding platform that brings transparency and trust to charitable giving. It enables donors to track their contributions and see the real impact of their donations through smart contracts.",
      features: [
        "Ethereum blockchain integration",
        "Smart contract-based donations",
        "Transparent fund tracking",
        "Real-time impact visualization",
        "Secure payment processing",
        "Donor recognition system"
      ],
      technicalDetails: [
        "Ethereum smart contracts",
        "Web3 integration",
        "Secure payment gateway",
        "Real-time transaction tracking",
        "Responsive frontend design"
      ],
      impact: "Believe Charity has successfully facilitated numerous charitable campaigns, bringing transparency and trust to the donation process while ensuring funds reach their intended recipients."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "coverbelieve.png",
    images: ["coverbelieve.png", "believe_org.jpeg"],
    certificates: [
      {
        title: "Best project on Social Impact Award",
        file: "/assets/images/projects/believe_certificate.jpeg",
        image: "/assets/images/projects/believe_winner.jpeg"
      }
    ],
    previewSrc: "coverbelieve.png",
    githubUrl: "https://github.com/KrishayNair/Believe-Charity",
    detailsUrl: "/projects/believe-charity",
    liveUrl: "https://believe-charity.vercel.app",
    color: "#5CC2F2",
    achievements: [
      {
        title: "Best project on Social Impact Award",
        icon: "🏆",
        description: "Recognized for innovative use of blockchain in philanthropy"
      }
    ]
  },
 
  {
    title: "SecureClick",
    slug: "secureclick",
    description: "To combat rising phishing threats, we propose an AI and ML-powered solution using WHOIS databases for domain insights. Our tool distinguishes phishing from legitimate domains through backend analysis and integrates advanced email/SMS spam detection for comprehensive defense.",
    detailedDescription: {
      overview: "SecureClick is an advanced security solution that leverages artificial intelligence and machine learning to protect users from phishing attacks and spam. It provides real-time analysis of domains and communications to ensure safe browsing and messaging experiences.",
      features: [
        "Real-time domain analysis using WHOIS databases",
        "AI-powered phishing detection",
        "Advanced email and SMS spam filtering",
        "Instant threat alerts and notifications",
        "User-friendly security dashboard",
        "Comprehensive security reports"
      ],
      technicalDetails: [
        "Built with Flask for backend and modern HTML/CSS for frontend",
        "Machine learning models for threat detection",
        "Integration with WHOIS databases",
        "Real-time analysis and processing",
        "Secure API endpoints for threat checking"
      ],
      impact: "SecureClick provides a crucial layer of security in today's digital landscape, helping users and organizations protect themselves from sophisticated phishing attacks and spam."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "secureclick 1.png",
    images: ["secureclick 1.png"],
    previewSrc: "secureclick 1.png",
    githubUrl: "https://github.com/KrishayNair/SecureClick",
    detailsUrl: "/projects/secureclick",
    liveUrl: "https://secureclick.vercel.app",
    color: "#E24AA3",
    achievements: [
      {
        title: "Hackathon Winner",
        icon: "🏆",
        description: "Recognized as an innovative security solution in multiple hackathons"
      },
      {
        title: "User Adoption",
        icon: "👥",
        description: "Successfully deployed and used by multiple organizations for security enhancement"
      }
    ]
  },
  

  {
    title: "ICARUS 2023",
    slug: "icarus-2023",
    description: "Introducing the Icarus Fest 2023 website: your gateway to RGITS Technical Fest. Crafted in React.js, our user-friendly platform lets you effortlessly explore events, register, and stay updated with real-time information. Immerse yourself in a visually appealing, responsive, and intuitive UI design for an unforgettable fest experience.",
    detailedDescription: {
      overview: "ICARUS 2023 is a comprehensive technical fest website that serves as the central hub for RGITS's annual technical festival. It provides an engaging platform for students to explore, register, and participate in various technical events.",
      features: [
        "Event registration system",
        "Real-time updates and notifications",
        "Interactive event schedule",
        "Participant dashboard",
        "Live results tracking",
        "Responsive design for all devices"
      ],
      technicalDetails: [
        "Built with React.js",
        "Modern UI/UX design",
        "Real-time data updates",
        "Secure authentication system",
        "Optimized performance"
      ],
      impact: "The ICARUS 2023 website successfully managed the registration and participation of thousands of students across multiple technical events, making it the most successful technical fest in RGITS history."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "covericarus.png",
    images: ["covericarus.png"],
    previewSrc: "covericarus.png",
    githubUrl: "https://github.com/KrishayNair/ICARUS-2023",
    detailsUrl: "/projects/icarus-2023",
    liveUrl: "https://icarus23.netlify.app/",
    color: "#905BF0",
    achievements: [
      {
        title: "Best Technical Website",
        icon: "🌐",
        description: "Awarded for outstanding web design and functionality"
      },
      {
        title: "User Engagement",
        icon: "📊",
        description: "Achieved record-breaking user engagement during the fest"
      }
    ]
  },
  {
    title: "AyurLeaf AI",
    slug: "ayurleaf-ai",
    description: "Introducing a deep learning-based website revolutionizing Ayurvedic medicine by automating the identification and understanding of medicinal leaves. Traditional methods are time-consuming and error-prone; our platform provides quick and accurate analysis, eliminating the need for expert knowledge.",
    detailedDescription: {
      overview: "AyurLeaf AI is an innovative platform that combines deep learning with traditional Ayurvedic knowledge to provide accurate identification and information about medicinal plants. It helps bridge the gap between traditional medicine and modern technology.",
      features: [
        "AI-powered leaf identification",
        "Comprehensive plant database",
        "Medicinal properties information",
        "Usage guidelines and precautions",
        "Image processing capabilities",
        "Multi-language support"
      ],
      technicalDetails: [
        "Deep learning models for image recognition",
        "Flask backend with Python",
        "Responsive web interface",
        "Image processing pipeline",
        "Secure data storage"
      ],
      impact: "AyurLeaf AI has made significant contributions to preserving and modernizing Ayurvedic knowledge, making it more accessible to both practitioners and the general public."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "coverpython.png",
    images: ["coverpython.png"],
    previewSrc: "coverpython.png",
    githubUrl: "https://github.com/KrishayNair/AyurLeaf-AI",
    detailsUrl: "/projects/ayurleaf-ai",
    liveUrl: "https://ayurleaf-ai.vercel.app",
    color: "#905BF0",
    achievements: [
      {
        title: "AI Innovation Award",
        icon: "🤖",
        description: "Recognized for innovative use of AI in traditional medicine"
      },
      {
        title: "Healthcare Impact",
        icon: "🏥",
        description: "Successfully deployed in multiple healthcare institutions"
      }
    ]
  },
  {
    title: "GDSC RGIT",
    slug: "gdsc-rgit",
    description: "Introducing the GDSC (RGIT) website: a community informative platform built on ReactJS and Styled components. Showcase events and community details with a focus on responsiveness and UI friendliness. Created by the GDSC RGIT web team, it features carousels and comprehensive activity details.",
    detailedDescription: {
      overview: "The GDSC RGIT website serves as the digital hub for the Google Developer Student Club at RGIT, providing a platform for students to learn about upcoming events, workshops, and community activities.",
      features: [
        "Event management system",
        "Community member profiles",
        "Activity calendar",
        "Resource sharing platform",
        "News and updates section",
        "Interactive UI components"
      ],
      technicalDetails: [
        "React.js frontend",
        "Styled components for styling",
        "Responsive design",
        "Dynamic content management",
        "Performance optimization"
      ],
      impact: "The website has successfully increased community engagement and participation in GDSC activities, making it easier for students to stay connected and informed about tech events and opportunities."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "covergdsc.png",
    images: ["covergdsc.png"],
    previewSrc: "covergdsc.png",
    githubUrl: "https://github.com/KrishayNair/GDSC-RGIT",
    detailsUrl: "/projects/gdsc-rgit",
    liveUrl: "https://gdscrgit.netlify.app",
    color: "#E24AA3",
    achievements: [
      {
        title: "Community Excellence",
        icon: "👥",
        description: "Recognized as one of the most active GDSC chapters"
      },
      {
        title: "Design Award",
        icon: "🎨",
        description: "Awarded for outstanding UI/UX design"
      }
    ]
  }
];