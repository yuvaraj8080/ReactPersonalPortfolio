import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "LevelUp Media",
    slug: "levelup-media",
    seoTitle: "LevelUp Media — Sports Marketing Website",
    description: "Sports marketing agency website — scroll-driven story, 9-region audience globe, fan journey and match calendar.",
    detailedDescription: {
      overview: "LevelUp Media is a sports marketing and media agency that connects brands with new-age sports fans across MENA and South Asia — through team sponsorships, athlete partnerships and publisher media across cricket and football. This website tells that story in a single scroll: it opens with \"Let Your Brand Hangout With The New-Age Sports Fans\", introduces the agency's \"one partner, every touchpoint\" model (talent sourcing, exclusive sports media, sponsorship opportunities, end-to-end execution and content production), and backs it up with reach numbers, a live audience globe and CREX × ILT20 case studies. A dedicated sports calendar page lets brands browse Cricket and Football leagues season by season and enquire about the moments they want to own.",
      features: [
        "🌍 Interactive audience globe — \"9 regions activated\" with per-region reach (USA, Europe, Turkey, North Africa, GCC, KSA, South Africa, India, South Asia) and a Cricket / Football toggle",
        "🎬 Scroll-driven storytelling — pinned, GSAP-powered sections guide visitors from the hero through \"Everything Sport Touches. One Partner. Every Touchpoint.\" to proof of results",
        "🧭 Fan Journey — an interactive pre-match, live-match and post-match view of a dozen brand touchpoints, from YouTube match predictions to on-ground spectators and reaction videos",
        "📅 Sports Calendar — Cricket and Football tabs with league detail pages (season dates, where viewers come from, opportunities, matches, impressions, views and inventories) and an Enquire Now call-to-action",
        "📊 Case studies — CREX × ILT20 full-season activation (120M+ TV impressions, 31.2M video views) and matchday reach (23.1M+ impressions, 7.7M unique reach)",
        "🧩 The 360° Ecosystem and Myth-vs-Reality storytelling — Digital, Matchday, Team and Content access, positioned as modular, flexible packages instead of huge sponsorships",
        "📱 Fully responsive across mobile and desktop, with a consistent navy-and-blue brand system and a free-consultation CTA throughout"
      ],
      technicalDetails: [
        "⚛️ Frontend: Next.js with React, prerendered so the first paint is fast and crawlable",
        "💅 Styling: Tailwind CSS for a consistent, reusable component and design system",
        "🎞️ Animation: GSAP with ScrollTrigger for pinned, scroll-scrubbed sections and smooth transitions",
        "🖼️ Canvas-based image sequences and an interactive globe for the immersive hero, journey and region views",
        "🔎 SEO: descriptive titles and meta descriptions, Open Graph and Twitter share cards, and a clean heading structure"
      ],
      impact: "Turns a complex, multi-sport media network into one clear, story-led experience — brands can see the reach, understand the fan journey, check the league calendar and start a conversation within a few scrolls, on any device."
    },
    tech: "Next.js, React, Tailwind CSS, GSAP, SEO Optimization",
    src: "levelupMedia/introPage.webp",
    images: [
      "levelupMedia/introPage.webp",
      "levelupMedia/firstScreen.webp",
      "levelupMedia/secondScreen.webp",
      "levelupMedia/thirdScreen.webp",
      "levelupMedia/fourthScreen.webp",
      "levelupMedia/fifthScreen.webp",
      "levelupMedia/sixthScreen.webp",
      "levelupMedia/seventhScreen.webp"
    ],
    previewSrc: "levelupMedia/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/levelup-media",
    status: "Completed",
    client: { name: "LevelUp Media" },
    liveUrls: [
      {
        title: "LevelUp Media Website",
        url: "https://testing.levelupmedia.ai/"
      }
    ],
    achievements: [
      {
        title: "9 Regions, One Globe",
        icon: "🌍",
        description: "Turned audience reach across 9 regions into an interactive globe with a Cricket / Football toggle"
      },
      {
        title: "Scroll-Driven Story",
        icon: "🎬",
        description: "Pinned GSAP ScrollTrigger sections that walk visitors from the brand promise to proof of results"
      },
      {
        title: "Calendar & Case Studies",
        icon: "📅",
        description: "League-by-league sports calendar plus CREX × ILT20 case studies with 120M+ TV impressions"
      }
    ]
  },
  {
    title: "GemoStone",
    slug: "gemostone",
    seoTitle: "GemoStone — Gemstone E-commerce App",
    description: "Mobile-first gemstone & Rudraksha store for AstroVedansh — shop by purpose, origin and lab-certified stones.",
    detailedDescription: {
      overview: "GemoStone (\"Wear your Luck\") is a mobile-first e-commerce store for certified gemstones, Rudraksha and spiritual accessories, built for AstroVedansh. Shoppers can browse 1,300+ live products by category, by purpose (Career, Success, Wealth, Protection and more) or by origin (Zambia, Thailand, Italy and more), then narrow them with price, weight in ratti, shape and quality filters. Each product page shows a photo gallery with the lab certificate, a ring, pendant, bracelet or loose-stone style choice, an optional lab certificate, video, specifications and reviews — with a sticky total and Add to cart / Buy now bar. It was built with interns Dipti Mahajan, Harsh Saini and Jay Rode, and designer Ayushi Yadav, and is designed phone-first with a bottom navigation bar for Home, Wishlist, Shop and Profile.",
      features: [
        "🏠 Home with a 7-slide hero, Shop by Category, Shop by Purpose and Shop by Origin rows, bestsellers and editorial story banners",
        "🧭 Three ways to shop — 32 stone categories, 13 purposes such as Career, Success and Wealth, and 12 origins such as Zambia and Thailand",
        "🔎 Filters and sorting — price range, weight in ratti, in-stock only, shape and quality, with live product counts",
        "💎 Product pages with a 4-image gallery (stone, lab certificate, box, styles), Loose / Ring / Pendant / Bracelet style picker and an optional lab certificate",
        "🎥 Product video, specification table (origin, type, shape, quality, weight, purpose) and a customer-reviews section with star breakdown",
        "🛒 Wishlist, search, cart and checkout with a sticky Total and Add to cart / Buy now bar, and OTP-based login",
        "📜 Trust built in — free shipping above ₹999, authenticity-certified messaging, refund policy, support and FAQ pages"
      ],
      technicalDetails: [
        "⚛️ Frontend: Next.js with React, prerendered and cached so category and product pages load fast",
        "💅 Styling: Tailwind CSS v4, built mobile-first with a fixed bottom navigation and bottom-sheet filters",
        "🧠 State: Zustand for cart, wishlist and filter state, with toast notifications for feedback",
        "🔎 SEO: unique titles and descriptions per page, canonical URLs, Store, Product and Breadcrumb structured data, a 1,400-URL sitemap and a robots file that keeps cart and checkout out of search",
        "🖼️ Images: responsive, lazy-loaded product photos with skeleton placeholders"
      ],
      impact: "Gives AstroVedansh a fast, trustworthy storefront where a shopper can go from a purpose like Career or Wealth to a certified stone, its lab report and a checkout in a few taps — on any phone."
    },
    tech: "Next.js, React, Tailwind CSS, Zustand, SEO Optimization",
    src: "gemostone/introPage.webp",
    images: [
      "gemostone/introPage.webp",
      "gemostone/firstScreen.webp",
      "gemostone/secondScreen.webp",
      "gemostone/thirdScreen.webp",
      "gemostone/fourthScreen.webp",
      "gemostone/fifthScreen.webp"
    ],
    previewSrc: "gemostone/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/gemostone",
    role: "Full Stack Developer",
    status: "Completed",
    liveUrls: [
      {
        title: "GemoStone Store",
        url: "https://gemostone.com/"
      }
    ],
    achievements: [
      {
        title: "1,300+ Live Products",
        icon: "💎",
        description: "A catalogue of 1,300+ live products across 32 categories, 13 purposes and 12 origins, with filters on price, ratti, shape and quality"
      },
      {
        title: "Built to Be Trusted",
        icon: "📜",
        description: "Lab certificate, specifications, video and one-of-a-kind stock shown on every product page"
      },
      {
        title: "Built With the Team",
        icon: "🤝",
        description: "Delivered with interns Dipti Mahajan, Harsh Saini and Jay Rode, and designer Ayushi Yadav"
      }
    ]
  },
  {
    title: "LevelUp Media Admin Panel",
    slug: "levelup-cms",
    seoTitle: "LevelUp Admin Panel — React & Node CMS",
    description: "Custom CMS for LevelUp Media — manage sports pages, tournaments, blogs, inventory and leads from one dashboard.",
    detailedDescription: {
      overview: "LevelUp CMS is the admin panel behind the LevelUp Media website — the sports marketing platform that connects brands with new-age sports fans across MENA and South Asia. It lets the LevelUp team run the whole public site without a developer: build each sport's page from hero banners, carousels and horizontal cards, keep the tournament calendar and broadcast schedule up to date, publish editorial articles, manage the commercial inventory pages for partner platforms, upload downloadable sport portfolios and follow every inbound lead in one pipeline. Access is controlled — anyone can sign up, but nobody gets in until a super admin approves them. It was designed and built in 3–4 days with Kunal Naskar (senior developer and designer) and the MagicMond team, and works on both desktop and mobile.",
      features: [
        "🏆 Sports & Offerings builder — per-sport hero banner, multi-card carousel and horizontal-card sections with reordering, an On-the-website toggle and Add More Sport",
        "📅 Calendar & Events — Cricket and Football tournaments with season window, duration, expected tags, home-page flag and a website on/off switch",
        "📰 Blogs & Editorial — articles filtered by sport and type (Trending, Insight, Featured, Case study) with author, publish date and a live toggle",
        "📦 Inventory management — one public inventory page per partner platform (m-scores, Just Cricket, Cricket Guru, Sofascore) with ad cards and quick edit",
        "📄 Sport portfolios — upload, replace, download or copy the link of a portfolio PDF for each sport, ready for the website's download button",
        "📥 Inbound leads pipeline — leads from the home page, sports calendar, offerings and blog with search, filters and a live count (contact details are hidden in the screenshots)",
        "🔐 Team members & access — Sales and Super admin roles, last login, approved-by trail and an approval step before anyone can sign in",
        "📱 Fully responsive — the same panel works as a sidebar dashboard on desktop and a slide-out menu on mobile"
      ],
      technicalDetails: [
        "⚛️ Frontend: React 19 with Vite as a single-page admin app",
        "💅 Styling: Tailwind CSS v4 for a consistent, reusable component system",
        "🟢 Backend: Node.js API behind the CMS",
        "🐘 Database: PostgreSQL for sports, tournaments, articles, inventory, leads and team access",
        "🖥️ Hosting: backend on a VPS, admin front end deployed on Vercel",
        "✅ Validation and feedback: form validation and toast notifications across the dashboard"
      ],
      impact: "Gives the LevelUp team full control of the public site — new sports, tournaments, articles and partner inventory are managed from one dashboard without a developer, and every inbound enquiry lands in a single pipeline for the sales team."
    },
    tech: "React, Vite, Node.js, PostgreSQL, Tailwind CSS, VPS",
    src: "levelupCms/introPage.webp",
    images: [
      "levelupCms/introPage.webp",
      "levelupCms/firstScreen.webp",
      "levelupCms/secondScreen.webp",
      "levelupCms/thirdScreen.webp",
      "levelupCms/fourthScreen.webp",
      "levelupCms/fifthScreen.webp",
      "levelupCms/sixthScreen.webp",
      "levelupCms/seventhScreen.webp"
    ],
    previewSrc: "levelupCms/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/levelup-cms",
    role: "Full Stack Developer",
    status: "Completed",
    timeline: "3–4 days",
    achievements: [
      {
        title: "Shipped in 3–4 Days",
        icon: "⚡",
        description: "Designed, built and delivered a full CMS covering sports, tournaments, blogs, inventory, leads and team access in 3–4 days"
      },
      {
        title: "Built With the MagicMond Team",
        icon: "🤝",
        description: "Developed with Kunal Naskar (senior developer and designer) and Chirag Pachauri of the MagicMond team"
      },
      {
        title: "Whole Site, One Dashboard",
        icon: "🧩",
        description: "The LevelUp team manages every sport page, tournament, article and partner inventory page without a developer"
      }
    ]
  },
  {
    title: "GRAH9",
    slug: "grah9",
    seoTitle: "GRAH9 — Flutter CRM & Analytics Dashboard",
    description: "Flutter CRM & analytics dashboard — sales, ads and website traffic across AstroVedansh's product suite.",
    detailedDescription: {
      overview: "GRAH9 is the centralized CRM, admin and analytics platform behind AstroVedansh's product suite — Perfect Timing, Perfect Career, Perfect Name, AstroTry and Consultancy all run through one control room. The Today view gives the team a live pulse of the business: revenue, paid orders, checkout conversion and average order compared with the same hours yesterday, plus a daily plan that suggests when to push the ad budget. Sales analytics, website traffic (Google Analytics) and Meta ads sit beside order, delivery and consultation management, with Yesterday, Last 7 days, Last 30 days and custom date ranges across the dashboard. It is a responsive Flutter web app that works on desktop, tablet and phone, and it currently manages 2000+ users.",
      features: [
        "📅 Today view — revenue, paid orders, checkout conversion and average order against the same hours yesterday, with a daily plan for the ad budget and a Needs-attention queue",
        "📊 Sales analytics by product (Perfect Timing, Perfect Career, Perfect Name, AstroTry, Consultancy) with Yesterday, Last 7 days, Last 30 days and custom ranges, plus checkout outcomes and revenue by product",
        "🌐 Website traffic from Google Analytics — visitors, sessions, engagement, channels, devices, landing pages and the checkout funnel for every product site and the AstroTry app",
        "📣 Meta Ads overview and Ad creatives — spend vs budget, ROAS, cost per purchase and campaign performance, plus which ads earn and which waste money",
        "🛒 Orders, deliveries and consultations — per-product order queues, payment and stage tracking, consultation bookings and CSV export",
        "🚀 AstroTry growth tracker — installs, uninstalls, errors and active users, with a Road to 1M app users progress card",
        "🤖 Automation and product tools — WhatsApp workflows, coupons, consultation pricing, banners and media management for every connected product"
      ],
      technicalDetails: [
        "📱 Frontend: Flutter Web — one responsive admin dashboard with a desktop sidebar and a mobile drawer layout",
        "🔥 Backend: Firebase for authentication, data, and real-time sync",
        "🧠 State Management: GetX for reactive state management",
        "💳 Integrations: Razorpay for payments, Google Analytics for web and app traffic, Meta Ads for campaign analytics, WhatsApp for automated communication",
        "⏱️ Date ranges: Today, Yesterday, Last 7 days, Last 30 days, This month, This year and Custom, shared across the analytics, traffic and ads pages"
      ],
      impact: "GRAH9 currently manages 2000+ users and handles complete backend operations for AstroVedansh's product suite. It improved strategic decision-making with live analytics, increased efficiency through automation-driven workflows, and was built as a scalable system ready for long-term growth."
    },
    tech: "Flutter, Firebase, GetX, Razorpay, Google Analytics, Meta",
    src: "grah9/introPage.webp",
    images: [
      "grah9/introPage.webp",
      "grah9/firstScreen.webp",
      "grah9/secondScreen.webp",
      "grah9/thirdScreen.webp",
      "grah9/fourthScreen.webp",
      "grah9/fifthScreen.webp",
      "grah9/sixthScreen.webp"
    ],
    previewSrc: "grah9/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/grah9",
    role: "Full Stack Developer",
    status: "Completed",
    client: { name: "AstroVedansh", url: "https://astrovedansh.com/" },
    achievements: [
      {
        title: "2000+ Users Managed",
        icon: "👥",
        description: "Complete CRM handling backend operations for 2000+ users across the AstroVedansh product suite"
      },
      {
        title: "Multi-Product Platform",
        icon: "🧩",
        description: "Single admin system centrally managing Perfect Timing, Perfect Career, Perfect Name, AstroTry and Consultancy"
      },
      {
        title: "Live Business Analytics",
        icon: "📊",
        description: "Sales, website traffic and Meta ads performance in one dashboard with Yesterday, 7-day and 30-day ranges"
      }
    ]
  },
  {
    title: "GemoStone Admin Panel",
    slug: "gemostone-admin",
    seoTitle: "GemoStone Admin — Next.js E-commerce CMS",
    description: "E-commerce admin for the GemoStone store — manage products, categories, banners, reviews and team access from one dashboard.",
    detailedDescription: {
      overview: "GemoStone Admin is the control room behind the GemoStone store. It lets the AstroVedansh team run the whole shop from one desktop dashboard: a needs-attention queue, sales and stock at a glance, a 1,300+ product catalogue with filters, and editors for categories, purposes and origins — each with its own picture and wording. Homepage hero slides, the announcement bar, category banners and pop-ups are managed from the Banners page, with optional start and end dates. Orders, customers, reviews, a gemstone quiz builder, shipping rules and role-based team access complete the panel. It was built with interns Dipti Mahajan, Harsh Saini and Jay Rode, and designer Ayushi Yadav, as the companion to the GemoStone storefront.",
      features: [
        "📋 Dashboard — a Needs attention queue (orders to send, refunds, reviews to moderate, low stock), sales today / 7 days / 30 days and shop totals",
        "🛍️ Products — 1,300+ products with search and filters for status, category, purpose, origin, shape, quality and needs-attention, plus bulk select and a default markup",
        "🗂️ Categories, purposes and origins — edit wording, search text, picture and order, switch one off, or add your own; purposes and origins can have their own mobile picture",
        "🖼️ Banners — homepage hero, announcement bar, category top, pop-ups and story grid, each with optional dates and a separate mobile picture",
        "🔄 Wholesale catalogue sync — pulls categories, draft products, cost, stock, designs and metals from the wholesale partner so staff only review and publish",
        "💍 Customisation, reviews and quiz — manage ring, pendant and bracelet designs and metals, moderate reviews, and build the gemstone quiz (answers map to a purpose, zodiac sign or planet)",
        "📦 Orders, customers and shop settings — an order pipeline from Pending to Delivered, coupons, free-shipping rules and role-based Members (customer data is hidden in these screenshots)"
      ],
      technicalDetails: [
        "⚛️ Frontend: Next.js with React as a desktop-first admin app, with a collapsible sidebar",
        "💅 Styling: Tailwind CSS v4 for a clean, consistent component system that matches the store's orange brand",
        "🔐 Access: sign-in with roles — a Super admin approves and manages team members",
        "☁️ Hosting: deployed on Vercel, separate from the storefront",
        "🔎 Integrations: wholesale-partner catalogue sync, with a log of how each sync went"
      ],
      impact: "Gives the team full control of the GemoStone catalogue, banners and orders from one place — new products, pictures and campaigns can be reviewed and published without touching code."
    },
    tech: "Next.js, React, Tailwind CSS, Vercel",
    src: "gemostoneAdmin/introPage.webp",
    images: [
      "gemostoneAdmin/introPage.webp",
      "gemostoneAdmin/firstScreen.webp",
      "gemostoneAdmin/secondScreen.webp",
      "gemostoneAdmin/thirdScreen.webp",
      "gemostoneAdmin/fourthScreen.webp"
    ],
    previewSrc: "gemostoneAdmin/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/gemostone-admin",
    role: "Full Stack Developer",
    status: "Completed",
    achievements: [
      {
        title: "One Panel, Whole Store",
        icon: "🧩",
        description: "Products, categories, purposes, origins, banners, reviews, orders and team access managed from a single dashboard"
      },
      {
        title: "Publish Without Code",
        icon: "🖼️",
        description: "Banners, pop-ups and the announcement bar are edited in the panel, with optional schedule dates and mobile pictures"
      },
      {
        title: "Built With the Team",
        icon: "🤝",
        description: "Delivered with interns Dipti Mahajan, Harsh Saini and Jay Rode, and designer Ayushi Yadav"
      }
    ]
  },
  {
    "title": "MagicMond Global",
    "slug": "magicmond-global",
    "seoTitle": "MagicMond Global — React Agency Website",
    "description": "MagicMond's own marketing site — design, growth, tech & AI services — shipped in 3 days with the MagicMond Magicians Team.",
    "detailedDescription": {
      "overview": "MagicMond Global is the agency's own marketing website, designed and built end-to-end with the MagicMond Magicians Team in just 3 days. The site introduces MagicMond as \"the house of Magicians\" — Design x Growth x Tech x AI — and showcases the agency's services across its own sub-brands, including InfraEdge (a 90-day qualified-meeting engine for construction and real estate) and a dedicated Sports partnerships page for athlete sponsorships and brand deals. Real client work is featured throughout, including a full case study on Reidius Infra's growth from a Jaipur construction firm to a 60+ client brand in one year, alongside logos from KFC, Western Union, My11Circle, Dalmia Cement, and Etihad.",
      "features": [
        "🏠 Multi-brand marketing site covering Design, Growth, Tech & AI services, with dedicated sub-brand pages for InfraEdge and Sports partnerships",
        "🧩 Service showcase: Brand Identity Development, Website & Landing Page Design, Lead Generation & Marketing, Social Media & Content Marketing, WhatsApp & Digital Outreach",
        "📈 Client & case-study section featuring real client logos (Reidius Infra, KFC, Western Union, My11Circle, Dalmia Cement, Etihad) and a full Reidius Infra growth case study",
        "🎬 Scroll-based animations and micro-interactions built with Framer Motion for a premium feel",
        "📱 Fully responsive across desktop and mobile, matching the agency's dark, purple-accented brand identity"
      ],
      "technicalDetails": [
        "🎨 Frontend: React with Vite for fast dev/build tooling",
        "💅 Styling: Tailwind CSS for a clean, scalable, reusable component architecture",
        "🎞️ Animation: Framer Motion for scroll and interaction animations",
        "⚡ Built using Vibe Coding to accelerate development while keeping the codebase clean and maintainable"
      ],
      "impact": "Delivered a production-ready website in just 3 days through rapid iteration, continuous feedback, and close team collaboration with the MagicMond Magicians Team — demonstrating how modern development practices can significantly accelerate product delivery, without cutting corners on quality or reliability."
    },
    "tech": "React, Vite, HTML, CSS, Tailwind CSS, Framer Motion, Redux Toolkit, SEO Optimization",
    "src": "magicmond/introPage.webp",
    "images": [
      "magicmond/introPage.webp",
      "magicmond/DetailsPage.webp",
      "magicmond/firstScreen.webp",
      "magicmond/secondScreen.webp",
      "magicmond/thirdScreen.webp",
      "magicmond/fourthScreen.webp"
    ],
    "previewSrc": "magicmond/introPage.webp",
    "previewFit": "contain",
    "githubUrl": "",
    "detailsUrl": "/projects/magicmond-global",
    "role": "Frontend Developer",
    "status": "Completed",
    "client": { "name": "MagicMond Global", "url": "https://magicmond.com/" },
    "timeline": "3 days",
    "liveUrls": [
      {
        "title": "MagicMond Website",
        "url": "https://magicmond.com/"
      }
    ],
    "achievements": [
      {
        "title": "Shipped in 3 Days",
        "icon": "⚡",
        "description": "Took the project from idea to a production-ready website in just 3 days through rapid iteration and Vibe Coding"
      },
      {
        "title": "Team Collaboration",
        "icon": "🤝",
        "description": "Built with the MagicMond Magicians Team, with guidance from Chirag Pachauri across architecture, development, debugging, and deployment"
      }
    ]
  },
  {
    title: "Dosha Detector",
    slug: "dosha-detector",
    seoTitle: "Dosha Detector — Flutter Astrology App",
    description: "AI-powered Vedic astrology app — dosha detection, birth chart analysis, personalized remedies. 500+ downloads.",
    detailedDescription: {
      overview: "Dosha Detector is an AI-powered Vedic astrology companion published on the Google Play Store under Astro Vedansh Innovations. Users share their birth details (date, time, place) and the app analyzes planetary positions to identify present doshas in their birth chart, explains their effects, recommends personalized remedies, and generates a detailed Janam Kundali (birth chart). Whether someone is curious about their karmic influences or seeking harmony in life, the app offers insights guided by traditional astrological wisdom, backed by an option to consult expert astrologers live for deeper guidance.",
      features: [
        "📅 Birth-detail input flow (date, time, place) to generate an accurate Janam Kundali",
        "🔮 AI-based dosha detection — surfaces afflictions like 8th House Affliction, Poverty Dosha, Guru Chandal Dosha, and Mangal Dosha, each with a calculated strength score",
        "📜 Interactive birth chart (Kundali) visualization with full planetary placements",
        "💊 Personalized remedies and an effects breakdown for each detected dosha — career, relationships, and health",
        "📹 Live video consultations with expert astrologers directly in-app",
        "🔒 Privacy-first design — birth details kept confidential"
      ],
      technicalDetails: [
        "📱 Frontend: Flutter for a native, cross-platform mobile experience",
        "🔥 Backend: Firebase for authentication, data storage, and real-time sync",
        "🧠 State Management: GetX for lightweight, reactive state management",
        "🤖 Astrology Engine: Automated Vedic astrology calculations to detect doshas and generate a Janam Kundali from birth data"
      ],
      impact: "Published on the Google Play Store under Astro Vedansh Innovations, Dosha Detector has reached 500+ downloads with a 4.3★ rating. Users highlight the app for identifying the real reason behind personal and professional setbacks and offering both remedies and live astrologer consultations to act on them."
    },
    tech: "Flutter, Firebase, GetX",
    src: "doshaDetector/introPageGenerated.webp",
    images: [
      "doshaDetector/introPageGenerated.webp",
      "doshaDetector/firstScreen.webp",
      "doshaDetector/secondScreen.webp",
      "doshaDetector/thirdScreen.webp"
    ],
    previewSrc: "doshaDetector/introPageGenerated.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/dosha-detector",
    role: "Flutter Developer",
    status: "Completed",
    client: { name: "AstroVedansh", url: "https://astrovedansh.com/" },
    liveUrls: [
      {
        title: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.DoshaDetector.app&hl=en_IN"
      }
    ],
    achievements: [
      {
        title: "500+ Downloads",
        icon: "📲",
        description: "Published on the Google Play Store with a 4.3★ rating across early reviews"
      },
      {
        title: "AI-Powered Astrology",
        icon: "🔮",
        description: "Automated dosha detection and Janam Kundali generation from just birth date, time, and place"
      }
    ]
  },
  {
    title: "Shri Yamuna Infra",
    slug: "shri-yamuna-infra",
    seoTitle: "Shri Yamuna Infra — React Real-Estate Site",
    description: "Real-estate marketing site for a Vrindavan developer — spiritual living, RERA-verified projects, lead generation.",
    detailedDescription: {
      overview: "Shri Yamuna Infra is a responsive, production-ready marketing website built with the MagicMond Magicians Team for a Vrindavan-based real estate developer (est. 2011). The site positions the brand around \"Creating Global Spiritual Communities\" — premium, RERA-registered residential projects (Tulsi Wings, Vrinda Apartments, Kanha Tulsi Heights, Shri Braj Rani Apartments) aimed at both local and international buyers drawn to Vrindavan's spiritual significance and fast-growing tourism. It blends investor-facing messaging — location analysis, price trends, documentation and RERA verification — with devotional, lifestyle-first framing: founder story, spiritual-living positioning, and testimonials from international buyers.",
      features: [
        "🏘️ Project showcase for multiple developments (Tulsi Wings, Vrinda Apartments, Kanha Tulsi Heights, Shri Braj Rani Apartments) with dedicated detail sections",
        "📄 Trust & compliance section — MVDA-approved developments, RERA-registered projects, clear land documentation, transparent ownership structure",
        "📝 Lead-capture forms (\"Unlock Pricing & Brochure\") with name/mobile/purpose fields, plus a persistent WhatsApp click-to-chat button",
        "🗺️ Interactive strategic-location map with travel times (45 min from Jewar Airport, 1.5 hrs from Delhi NCR, 10 min from Vrindavan Railway Station) and nearby 7-star hospitality brands",
        "📚 Buyer-education knowledge base (why documentation matters, location vs price, how to verify a builder) and a founder-story video section",
        "💬 International buyer testimonials reinforcing the \"global spiritual community\" positioning"
      ],
      technicalDetails: [
        "🎨 Frontend: React with Vite for fast dev/build tooling",
        "💅 Styling: Tailwind CSS for a clean, scalable, reusable component architecture",
        "📦 State Management: Zustand for lightweight, global UI and form state",
        "⚡ Built using Vibe Coding to accelerate development while keeping the codebase clean and maintainable"
      ],
      impact: "Delivered with the MagicMond Magicians Team, bringing together modern technology, production-ready design, and business goals into one digital experience. Production-ready design contributions from Kunal Naskar and Abhishek Saini helped solve complex UI/UX challenges through close design-development collaboration."
    },
    tech: "React, Vite, Tailwind CSS, Zustand, Framer Motion, MVC",
    src: "sreeYamunaInfra/introPage.webp",
    images: [
      "sreeYamunaInfra/introPage.webp",
      "sreeYamunaInfra/firstyScreen.webp",
      "sreeYamunaInfra/secondScreen.webp",
      "sreeYamunaInfra/thirdScreen.webp",
      "sreeYamunaInfra/fourthScreen.webp"
    ],
    previewSrc: "sreeYamunaInfra/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/shri-yamuna-infra",
    role: "Frontend Developer",
    status: "Completed",
    client: { name: "Shri Yamuna Infra", url: "https://shriyamunainfra.com/" },
    liveUrls: [{ title: "Shri Yamuna Infra Website", url: "https://shriyamunainfra.com/" }],
    achievements: [
      {
        title: "Trust-First Real Estate Platform",
        icon: "🛕",
        description: "Positioned MVDA-approved, RERA-registered projects with full documentation transparency for buyers"
      },
      {
        title: "Design-Development Collaboration",
        icon: "🎨",
        description: "Built with production-ready design support from Kunal Naskar and Abhishek Saini, closely aligning UI/UX with business goals"
      }
    ]
  },
  {
    title: "PerfectTiming",
    slug: "perfect-timing",
    seoTitle: "PerfectTiming — Flutter Web Astrology App",
    description: "Astrology web app for personalized Kundli-based predictions and timing insights — 1.56M+ campaign impressions.",
    detailedDescription: {
      overview: "PerfectTiming is a modern astrology platform by AstroVedansh, built to deliver highly personalized, Kundli-based predictions and divine timing insights with accuracy and depth. Users submit astro-queries across major life domains — career, relationships, finance, health, and auspicious timing (Muhurat) — and each response is crafted by expert astrologers through detailed analysis of Kundli charts, planetary movements, and Dasha timelines. The core platform was built in just 7 days under the guidance of Rajat Vallabh, with Prem Patel leading the automation workflows, followed by continuous improvements and production fixes to keep the system fast, stable, and user-ready.",
      features: [
        "🔮 Astro-query submission across 5 life domains: Career & Opportunities, Relationships & Compatibility, Finance & Stability, Health & Well-being, and Life Decisions & Auspicious Timing (Muhurat)",
        "📄 Personalized reports with detailed Kundli analysis and Dasha timelines, delivered by expert astrologers",
        "⏳ Accurate timing insights — Perfect Muhurat and divine timing guidance for major life decisions",
        "💳 Full checkout flow — birth details, coupon codes, English/Hindi language selection, and express delivery option",
        "📊 Admin dashboard with campaign performance, Razorpay financials, and engagement analytics",
        "🎥 Embedded video content and social proof (4.9 rating from 10,000+ customers) to build trust"
      ],
      technicalDetails: [
        "📱 Frontend: Flutter Web for a single cross-platform codebase running in the browser",
        "🔥 Backend: Firebase with Cloud Functions for serverless business logic",
        "🧠 State Management: GetX for reactive state management",
        "🔌 Integrations: REST APIs and real-time processing for report generation and delivery",
        "⚙️ Full ownership: development, deployment, analytics integration, and admin panel"
      ],
      impact: "PerfectTiming launched with 1.56M+ campaign impressions and 1,000+ conversions in its initial launch cycle, delivering 18,000+ personalized reports in its first month alone. Built under the guidance of Rajat Vallabh, with Prem Patel leading automation workflows, and supported by the full AstroVedansh team of astrologers, designers, and analysts."
    },
    tech: "Flutter, Firebase, GetX, Cloud Functions, Razorpay, OpenAI, Interakt",
    src: "perfectTiming/introPage.webp",
    images: [
      "perfectTiming/introPage.webp",
      "perfectTiming/firstScreen1.webp",
      "perfectTiming/secondScreen.webp",
      "perfectTiming/thirdScreen.webp"
    ],
    previewSrc: "perfectTiming/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/perfect-timing",
    role: "Full Stack Developer",
    status: "Completed",
    client: { name: "AstroVedansh", url: "https://astrovedansh.com/" },
    timeline: "7 days",
    liveUrls: [
      {
        title: "PerfectTiming Web App",
        url: "https://perfect-timing.astrovedansh.com/#/landing"
      }
    ],
    achievements: [
      {
        title: "1.56M+ Campaign Impressions",
        icon: "📈",
        description: "Reached over 1.56 million impressions in the initial launch campaign"
      },
      {
        title: "1,000+ Conversions",
        icon: "🎯",
        description: "Converted 1,000+ users in the initial launch cycle, with 18,000+ personalized reports delivered in the first month"
      }
    ]
  },
  {
    title: "PerfectCareer",
    slug: "perfect-career",
    seoTitle: "PerfectCareer — React Career Platform",
    description: "Astrology-based career guidance web app — personalized profession direction from birth details. 353K+ campaign impressions.",
    detailedDescription: {
      overview: "PerfectCareer is an astrology web app by AstroVedansh that helps users find direction when they're stuck between career, job, business, or income decisions. Instead of generic advice, users select a specific career question, submit their birth details, and receive a personalized Perfect Career Report — expert hand analysis combining astrology and numerology to recommend a clear profession, top skills to focus on, and an income roadmap. The core platform was built in just 5 days, with continuous enhancements, automation, and production improvements since launch, under the guidance of Chirag Pachauri as Senior Developer.",
      features: [
        "🎯 Career-question selector across categories (Trending, Career Crossroad, Job, Business/Family) instead of generic astrology",
        "📊 \"Normal Confusion vs Perfect Career Report\" comparison — replaces random advice and trial-and-error with a personalized, Kundli-based direction, clear profession recommendation, and focused decision making",
        "📄 Personalized report combining birth date, astrology, and numerology — career nature, top professions, income & skills, and a roadmap with remedies",
        "📲 Report delivery via WhatsApp in Hindi & English, with an express delivery option",
        "💳 Full checkout flow with coupon codes, discounts, and a price breakdown",
        "📥 Downloadable sample report so users can preview the report structure before paying"
      ],
      technicalDetails: [
        "⚛️ Frontend: React with Vite, Tailwind CSS, and MVC architecture",
        "⚙️ Backend: Node.js APIs with automation-driven workflows",
        "📩 Communication: Interakt WhatsApp automation and SMTP email delivery for report and order updates",
        "☁️ Background Processing: Google Cloud Tasks for reliable queued delivery workflows",
        "🎨 Continuous refinement of UI/UX, functionality, and system architecture through multiple production iterations"
      ],
      impact: "PerfectCareer's early campaign reached 353K+ impressions, 3.5K+ website clicks, and 2.5K+ link clicks. Built in 5 days under the guidance of Chirag Pachauri as Senior Developer, the project strengthened experience in building scalable web applications, integrating automation services, and delivering production-ready software within tight timelines."
    },
    tech: "React, Vite, Tailwind CSS, Node.js",
    src: "perfectCareer/introPage.webp",
    images: [
      "perfectCareer/introPage.webp",
      "perfectCareer/firstScreen.webp",
      "perfectCareer/secondScreen.webp"
    ],
    previewSrc: "perfectCareer/introPage.webp",
    previewFit: "contain",
    githubUrl: "",
    detailsUrl: "/projects/perfect-career",
    role: "Full Stack Developer",
    status: "Completed",
    client: { name: "AstroVedansh", url: "https://astrovedansh.com/" },
    timeline: "5 days",
    liveUrls: [
      {
        title: "PerfectCareer Live Platform",
        url: "https://perfect-career.astrovedansh.com/"
      }
    ],
    achievements: [
      {
        title: "353K+ Campaign Impressions",
        icon: "📢",
        description: "Reached over 353,000 impressions in the early campaign"
      },
      {
        title: "3.5K+ Website Clicks",
        icon: "👆",
        description: "Drove 3.5K+ website clicks and 2.5K+ link clicks in the initial results"
      }
    ]
  },
  {
    "title": "Ecommerce App & Admin Panel",
    "slug": "ecommerce-app",
    "seoTitle": "Flutter E-Commerce App & Admin Panel",
    "description": "Flutter e-commerce app with a companion admin panel — Razorpay payments, variable products, order & inventory management.",
    "detailedDescription": {
      "overview": "A full-featured e-commerce mobile app built with Flutter, paired with a companion admin panel for store owners to manage products, orders, categories, and banners in real time. Shoppers can browse branded, categorized products with size and color variations, save favorites, manage multiple delivery addresses, and check out securely via Razorpay or Cash on Delivery. The admin panel gives store owners a live dashboard — sales totals, a weekly revenue chart, order status breakdown, and Razorpay payment/settlement tracking — alongside full management tools for products, categories, brands, and promotional banners.",
      "features": [
        "🛍️ Store browsing with categories, subcategories, and branded products — single and variable products with size/color variations",
        "❤️ Favorite products saved locally, plus cart management before checkout",
        "💳 Razorpay payment gateway and Cash on Delivery, with two-step authentication for account security",
        "🏠 Address management, order history, and profile management",
        "🎉 Offer banners and promotional campaigns",
        "📊 Admin dashboard — sales totals, weekly revenue chart, order status breakdown, and Razorpay payment/settlement tracking",
        "🗂️ Admin tools to manage products, categories, brands, and banners",
        "☎️ 24/7 help center for customer support"
      ],
      "technicalDetails": [
        "📱 Frontend: Flutter with MVC architecture for both the shopping app and admin panel",
        "🧠 State Management: GetX for reactive state management",
        "💾 Local Storage: Hive for offline-first favorites and local caching",
        "🔥 Backend: Firebase for authentication, data, and real-time sync",
        "💳 Payments: Razorpay integration for online payments and settlement tracking"
      ],
      "impact": "Built as a complete, production-style e-commerce solution — a Flutter shopping app backed by a real-time admin panel for managing sales, orders, products, and promotions, with secure Razorpay payments and two-step authentication for user accounts."
    },
    "tech": "Flutter, GetX, Hive, Firebase, Razorpay",
    "src": "ecommerce/introPage.webp",
    "images": [
      "ecommerce/introPage.webp",
      "ecommerce/sebIntroPage.webp",
      "ecommerce/firstScren.webp",
      "ecommerce/secondScreen.webp",
      "ecommerce/thirdScreen.webp",
      "ecommerce/fourthScreen.webp",
      "ecommerce/fifthScreen.webp",
      "ecommerce/sixthScreen.webp",
      "ecommerce/sevenScreen.webp"
    ],
    "previewSrc": "ecommerce/introPage.webp",
    "previewFit": "contain",
    "githubUrl": "",
    "detailsUrl": "/projects/ecommerce-app",
    "role": "Flutter Developer",
    "status": "Completed",
    "achievements": [
      {
        "title": "Full E-Commerce Ecosystem",
        "icon": "🛒",
        "description": "Shopping app and admin panel built together — from product browsing to order fulfillment and payment settlement"
      },
      {
        "title": "Secure Payments",
        "icon": "💳",
        "description": "Razorpay integration with two-step authentication and Cash on Delivery as an alternative payment option"
      }
    ]
  },
];