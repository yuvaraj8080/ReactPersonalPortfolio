import type { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    title: "Vibe Coding Explained: What It Is, What It Isn't, and When to Use It",
    slug: "vibe-coding-explained",
    excerpt:
      "Vibe coding means directing an AI coding agent with plain-language intent and iterating on its output, instead of hand-writing every line yourself. Here's what that actually looks like in practice, and where it earns its keep.",
    category: "AI & Development",
    date: "2026-07-28",
    tags: ["Vibe Coding", "AI", "Developer Workflow"],
    featured: true,
    coverImage: "/assets/images/blog/VibeCoading.png",
    keyTakeaways: [
      "Vibe coding means directing an AI coding agent with **plain-language intent** and iterating on its output, instead of hand-writing every line yourself.",
      "It's fastest for **scaffolding, UI sections, and repetitive patterns** — not a substitute for reviewing architecture or security-sensitive code.",
      "The best results come from **small, verifiable steps**: describe one change, review the diff, then move to the next one.",
      "Treat the agent like a fast engineer with **total codebase recall**, not an oracle — you're still the one who understands the product.",
    ],
    relatedProjectSlugs: ["magicmond-global"],
    content: [
      {
        type: "paragraph",
        text: "\"Vibe coding\" gets used two different ways online — as a dismissive joke about typing prompts and hoping for the best, and as a real, disciplined workflow professional developers use to ship production software faster. This post is about the second one, based on how I actually build.",
      },
      { type: "heading", level: 2, text: "Where the term comes from" },
      {
        type: "paragraph",
        text: "The phrase isn't just internet slang — it traces back to a specific, widely-cited post. AI researcher Andrej Karpathy (a founding member of OpenAI and Tesla's former AI director) used it in a viral post on X in February 2025, describing a workflow where he'd \"fully give in to the vibes\" and stop reading every diff the agent produced. His original post was candid about how far he took it — leaning almost entirely on natural-language prompts, sometimes dictated by voice, and accepting AI output with minimal manual review. That's the loose, no-review end of the spectrum. The disciplined version most professional developers actually use — the one this post is about — keeps the same natural-language workflow but puts the review step back in.",
      },
      { type: "heading", level: 2, text: "What vibe coding actually means" },
      {
        type: "paragraph",
        text: "In practice, vibe coding is describing your intent to an AI coding agent — what a component should do, what a bug's symptom is, what a page should look like — and reviewing/iterating on what it produces, rather than typing every line by hand. The agent reads the existing codebase, makes the change, and you verify it. It's still your architecture, your decisions, your review — the agent is doing the typing and the first pass of pattern-matching.",
      },
      {
        type: "callout",
        variant: "key-takeaway",
        text: "The failure mode isn't \"the AI wrote bad code\" — it's accepting a large, unreviewed diff. Small steps with a review in between are what make this workflow reliable.",
      },
      { type: "heading", level: 2, text: "Where it works well" },
      {
        type: "list",
        items: [
          "Scaffolding new pages, routes, and components that follow an existing pattern in the codebase",
          "Repetitive, mechanical changes across many files (renames, prop threading, consistent styling updates)",
          "First-pass UI implementation from a design or a rough description",
          "Debugging — an agent can grep, read, and trace a stack faster than switching files by hand",
        ],
      },
      { type: "heading", level: 2, text: "Where it doesn't" },
      {
        type: "list",
        items: [
          "Deciding the architecture itself — the agent will happily build the wrong thing well",
          "Security-sensitive code (auth, payments, data access) without a careful manual review",
          "Anything where you can't clearly describe what \"correct\" looks like",
          "Deeply stateful or distributed systems — an agent can draft one piece convincingly without reasoning about the system-wide consequences",
        ],
      },
      {
        type: "paragraph",
        text: "The projects on this site built in a handful of days — MagicMond Global among them — weren't built by trusting the agent blindly. They were built by keeping the loop tight: describe one change, read the diff, run it, move on. That loop is the actual skill, not the prompt.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            question: "Do you need to know how to code to try vibe coding?",
            answer:
              "Not to get started — you can describe an interface in plain language and get something working. But without any coding background, you'll struggle to judge whether what the agent produced is actually correct, secure, or maintainable. The less you know, the more you're trusting the output at face value.",
          },
          {
            question: "How is this different from autocomplete tools?",
            answer:
              "Inline autocomplete completes what you're already typing, one suggestion at a time. Vibe coding flips the direction — you describe the outcome, and the agent writes the whole change: new files, multiple edits, sometimes a full feature, not just the next few characters.",
          },
          {
            question: "Is code built this way safe to ship to production?",
            answer:
              "For prototypes and internal tools, yes, with normal review. For anything touching auth, payments, or user data, AI-generated code needs the same scrutiny hand-written code would get — vibe coding speeds up the first draft, it doesn't replace review.",
          },
          {
            question: "What tools do people actually use for this?",
            answer:
              "Claude Code, Cursor, GitHub Copilot, and Replit come up most often. Each fits a different habit — terminal-first, editor-integrated, or fully hosted in the browser — but they're all running the same basic loop underneath.",
          },
        ],
      },
    ],
  },
  {
    title: "Inside My AI Agent Workflow: Claude Code, Cursor, and How I Actually Use Them",
    slug: "ai-coding-agent-workflow-claude-code-cursor",
    excerpt:
      "A practitioner's breakdown of how Claude Code and Cursor fit into a real development loop — planning, tool calls, verification, and where I still step in by hand.",
    category: "Tools & Workflow",
    date: "2026-07-12",
    tags: ["Claude Code", "Cursor", "AI Agents"],
    featured: false,
    coverImage: "/assets/images/blog/AgentWorkflow.png",
    keyTakeaways: [
      "An AI coding agent's loop is: **read the relevant code, propose a change, apply it, verify it** — the same loop a careful human engineer follows, just faster at the reading and typing steps.",
      "**Claude Code** is agent-first and CLI-native — good for larger, multi-file changes and running its own verification (build, browser checks) before handing back.",
      "**Cursor** is IDE-integrated — good for tight, in-context edits where you want to watch and steer line by line.",
      "Agents are strongest **extending an existing pattern** and weakest **inventing a new one from scratch** — for genuinely novel design, sketch the first version by hand, then hand off the repetition.",
      "The highest-leverage habit either way: **give the agent the constraints up front** (existing patterns, tokens, breakpoints) instead of correcting it after the fact.",
    ],
    content: [
      {
        type: "paragraph",
        text: "Most of the production sites on this portfolio — including this one — were built with an AI coding agent doing a large share of the typing. The tool matters less than the loop, but the tools do shape how that loop feels day to day.",
      },
      { type: "heading", level: 2, text: "The agent loop, stripped down" },
      {
        type: "list",
        ordered: true,
        items: [
          "Read — the agent greps/reads the relevant files before touching anything, the same way a careful engineer would orient before editing unfamiliar code",
          "Plan — for anything non-trivial, state the approach before writing code",
          "Change — apply the edit, scoped as small as the task allows",
          "Verify — run the build, check the browser at the breakpoints that matter, read the diff back",
        ],
      },
      {
        type: "image",
        src: "/assets/images/blog/AgentWorkflow.png",
        alt: "Infographic of the seven-step AI agent workflow: ideation & planning, code & build with Cursor, deep thinking & complex logic with Claude Code, terminal & automation, testing & debugging, review & polish, and commit & deploy",
        caption: "The full loop end to end — Cursor for speed and flow, Claude Code for depth and execution.",
        fit: "contain",
        aspectRatio: "8/5",
      },
      {
        type: "code",
        language: "bash",
        code: "npm run build\n# then check at 375px / 768px / 1280px, light + dark, before calling it done",
      },
      { type: "heading", level: 2, text: "Claude Code vs. Cursor, in practice" },
      {
        type: "paragraph",
        text: "Claude Code lives in the terminal and is built agent-first: it can plan a multi-file change, execute it, and run its own verification (builds, browser checks, screenshots) before handing control back. That makes it strong for larger, cross-file work — a new page, a data-model change that touches five components, a full section redesign.",
      },
      {
        type: "paragraph",
        text: "Cursor lives inside the editor, so edits stay visible line-by-line as they happen. That's better suited to tight, local changes where I want to watch the diff form in real time rather than review it after the fact — a single component's styling, a targeted bug fix.",
      },
      { type: "heading", level: 2, text: "Where agents still fall short" },
      {
        type: "paragraph",
        text: "Neither tool is magic, and the gaps matter as much as the wins. An agent that isn't told to stay scoped will happily \"improve\" a couple of nearby functions while fixing the one thing you actually asked for — which is why this repo's own CLAUDE.md has a rule that a requested change should stay just that change.",
      },
      {
        type: "paragraph",
        text: "They're also much better at extending an existing pattern than inventing a new one. Point either tool at a component that already exists five times in the codebase and ask for a sixth, and it nails it. Ask for something with no precedent in the repo — a layout or interaction nobody has built here before — and the output needs far heavier editing before it's usable.",
      },
      {
        type: "paragraph",
        text: "Context also doesn't fully survive between sessions. A context file recovers the big picture at the start of a new one — stack, conventions, current priorities — but not the small stuff: a debugging path already ruled out, the reasoning behind a decision made minutes before the session ended. Some of that has to be re-established by hand.",
      },
      { type: "heading", level: 2, text: "A routine that actually works" },
      {
        type: "paragraph",
        text: "In practice the split comes down to the size of the change, not loyalty to one tool. Anything that touches several files — a new page, a shared component's props changing everywhere it's used, a data-model update — goes to an agent that can read broadly, plan the whole change, and verify it before handing back.",
      },
      {
        type: "paragraph",
        text: "Anything I want to watch happen line by line — tuning one component's spacing, chasing a single bug — stays in the editor, where the diff forms in front of me instead of arriving as a finished patch.",
      },
      {
        type: "paragraph",
        text: "And for genuine one-liners — a typo, an import path, a stray console.log — neither tool is worth invoking. Opening an agent for a single keystroke change is more overhead than the change itself.",
      },
      {
        type: "image",
        src: "/assets/images/blog/AgentArchitecture.png",
        alt: "Claude Code architecture and integration flow: the AI assistant core and context management connect through an extension bridge into Cursor's IDE, with user input flowing through the extension to the Claude API and back",
        caption: "Same request/response loop under the hood, whichever editor it's running in.",
        fit: "contain",
        aspectRatio: "4/3",
      },
      {
        type: "callout",
        variant: "tip",
        text: "The single habit that improves agent output the most: front-load the constraints (existing tokens, breakpoint conventions, component patterns already in the codebase) instead of describing the feature in isolation and fixing the mismatches afterward.",
      },
    ],
  },
  {
    title: "From Idea to Production in 3 Days: The MagicMond Global Case Study",
    slug: "magicmond-3-day-case-study",
    excerpt:
      "A full breakdown of building MagicMond Global — the agency's own marketing site — end-to-end in 3 days with the MagicMond Magicians Team: the stack, the workflow, and the live result.",
    category: "Case Study",
    date: "2026-06-30",
    tags: ["Case Study", "React", "Vibe Coding"],
    featured: false,
    coverImage: "/assets/images/projects/magicmond/introPage.webp",
    keyTakeaways: [
      "MagicMond Global is the agency's own marketing site — Design x Growth x Tech x AI — shipped in **3 days** with the MagicMond Magicians Team.",
      "Stack: **React + Vite** for the frontend, **Tailwind CSS** for styling, **Framer Motion** for scroll animation.",
      "The site covers multi-brand messaging (main site, **InfraEdge**, **Sports partnerships**) and a full client case study (**Reidius Infra**) with real client logos.",
      "Live at **magicmond.com** — built using an AI-agent-driven (vibe coding) workflow to compress the timeline without cutting corners on responsiveness or polish.",
    ],
    relatedProjectSlugs: ["magicmond-global"],
    content: [
      {
        type: "paragraph",
        text: "MagicMond Global introduces the agency as \"the house of Magicians\" — Design x Growth x Tech x AI — across its own marketing site, a dedicated InfraEdge sub-brand page (a 90-day qualified-meeting engine for construction and real estate), and a Sports partnerships page for athlete sponsorships. It went from a blank repo to a live site at magicmond.com in 3 days.",
      },
      { type: "heading", level: 2, text: "What the site covers" },
      {
        type: "list",
        items: [
          "Multi-brand marketing site — Design, Growth, Tech & AI services, plus dedicated InfraEdge and Sports partnership pages",
          "Service showcase: brand identity, website & landing page design, lead generation, social/content marketing, WhatsApp outreach",
          "A full client case study — Reidius Infra's growth from a Jaipur construction firm to a 60+ client brand in a year — alongside logos from KFC, Western Union, My11Circle, Dalmia Cement, and Etihad",
          "Scroll-based animation and micro-interactions throughout",
        ],
      },
      { type: "heading", level: 2, text: "The stack" },
      {
        type: "list",
        items: [
          "React with Vite for fast dev/build tooling",
          "Tailwind CSS for a clean, reusable component architecture",
          "Framer Motion for scroll and interaction animation",
          "Built using an AI-agent-driven (vibe coding) workflow to accelerate development without sacrificing code quality",
        ],
      },
      {
        type: "quote",
        text: "Delivered a production-ready website in just 3 days through rapid iteration, continuous feedback, and close team collaboration — demonstrating how an AI-agent-driven workflow can significantly accelerate delivery without cutting corners on quality.",
      },
      {
        type: "link-card",
        title: "See the full project breakdown",
        url: "/projects/magicmond-global",
        description: "Tech stack, all screenshots, and the complete feature list on the project page.",
        image: "/assets/images/projects/magicmond/DetailsPage.webp",
      },
    ],
  },
  {
    title: "React Case Studies: PerfectCareer, Reidius Infra Global & Landing Page",
    slug: "react-case-studies",
    excerpt:
      "Three React builds in production: PerfectCareer's automation-driven platform, Reidius Infra Global's Dubai villa-construction site, and the Reidius Infra lead-gen landing page — same stack, same fast-shipping discipline.",
    category: "Case Study",
    date: "2026-08-03",
    tags: [
      "React",
      "Automation",
      "Google Cloud Tasks",
      "WhatsApp Automation",
      "Google Analytics",
      "Google Tag Manager",
      "Meta Pixel",
    ],
    featured: false,
    coverImage: "/assets/images/blog/CaseReactCover.png",
    relatedProjectSlugs: ["perfect-career"],
    keyTakeaways: [
      "Built with guidance from **Chirag Pachauri** as Senior Developer, on a tight, fixed timeline from day one.",
      "Frontend: **React, Vite, Tailwind CSS, shadcn/ui, Redux Toolkit, and MVC architecture**. Backend: **Node.js** APIs with automation-driven workflows.",
      "Order and report delivery ran through **Interakt WhatsApp automation**, **SMTP email**, and **Google Cloud Tasks** for reliable background processing.",
      "Early results: **353K+ campaign impressions**, **3.5K+ website clicks**, **2.5K+ link clicks**.",
    ],
    content: [
      {
        type: "paragraph",
        text: "PerfectCareer — an AstroVedansh platform that turns a person's birth details into a personalized career report — had its core platform built in just 5 days, followed by continuous enhancements, automation, and production improvements. I built it with guidance from Chirag Pachauri as Senior Developer, which shaped how I think about scalable, production-ready software.",
      },
      { type: "heading", level: 2, text: "What was built" },
      {
        type: "list",
        items: [
          "A scalable web platform using **React, Vite, Tailwind CSS, shadcn/ui**, and **MVC architecture** on the frontend",
          "**Redux Toolkit** for state management across the app",
          "Backend APIs built with **Node.js**, with automation-driven workflows instead of manual order handling",
          "Continuous refinement of UI/UX, functionality, and system architecture across multiple production iterations",
        ],
      },
      { type: "heading", level: 2, text: "How this actually loads: client-side vs. server-side rendering" },
      {
        type: "paragraph",
        text: "Client-side rendering (CSR) — what PerfectCareer's frontend runs on — means the server sends a mostly-empty HTML shell plus a JavaScript bundle; the browser downloads that JS, executes it, and only then builds and paints the page. Fast to build, cheap to host, but there's a blank-ish moment while the JS finishes loading.",
      },
      {
        type: "image",
        src: "/assets/images/blog/ReactRendering.png",
        alt: "How client-side rendering works: the browser requests a site, the server sends HTML with JS links, the browser downloads and executes the JS, then loads the site",
        caption: "The client-side rendering flow this platform's frontend runs on.",
        fit: "contain",
        aspectRatio: "4/3",
      },
      {
        type: "paragraph",
        text: "Server-side rendering (SSR) flips the order: the server renders the actual HTML for that specific request before sending it, so the browser has real content to paint immediately, then \"hydrates\" it with JavaScript to make it interactive. Slower to build per request, but a faster first paint and stronger out-of-the-box SEO — the trade-off that matters most on lead-generation pages, where the first few seconds decide whether a visitor stays.",
      },
      { type: "heading", level: 2, text: "The tech stack" },
      {
        type: "tech-stack",
        items: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Node.js", "React Bits", "Framer Motion"],
      },
      { type: "heading", level: 2, text: "Automation that shipped with it" },
      {
        type: "list",
        items: [
          "**Interakt WhatsApp automation** for report delivery and order updates, in Hindi and English",
          "**SMTP email delivery** as a parallel channel for order and report notifications",
          "**Google Cloud Tasks** for reliable, queued background processing — the difference between a report request that occasionally fails silently and one that always completes",
        ],
      },
      { type: "heading", level: 2, text: "Early results" },
      {
        type: "list",
        items: [
          "**353K+ campaign impressions** in the early launch push",
          "**3.5K+ website clicks**",
          "**2.5K+ link clicks**",
        ],
      },
      {
        type: "link-card",
        title: "PerfectCareer",
        url: "https://lnkd.in/g43TY_FE",
        description: "Live platform — personalized career reports from birth details.",
      },
      { type: "heading", level: 2, text: "Also shipped in React: Reidius Infra Global and the landing page" },
      {
        type: "paragraph",
        text: "Reidius Infra's Dubai arm and its lead-generation landing page are two more React builds from the same discipline — different business, same describe-review-ship loop.",
      },
      {
        type: "list",
        items: [
          "**Reidius Infra Global (Dubai)** — a turnkey villa-construction site built around one promise: one contract, one team, full accountability, for Dubai's fragmented villa-building market — 14+ years in Dubai, 50+ projects delivered",
          "**The Reidius Infra landing page** — a focused lead-gen page with transparent per-square-foot pricing across civil, semi-furnished, and fully-furnished tiers, and a direct cost comparison against typical contractor markups",
        ],
      },
      {
        type: "link-card-row",
        items: [
          { title: "Reidius Infra Global (Dubai)", url: "https://reidiusinfraglobal.com/" },
          { title: "Reidius Infra — Landing Page", url: "https://lp.reidiusinfra.com/" },
        ],
      },
      {
        type: "paragraph",
        text: "This shipped with guidance from Chirag Pachauri as Senior Developer — the same collaborator who guided the MagicMond Global build. Different companies, different stacks, same discipline: describe the change, review it, ship it.",
      },
    ],
  },
  {
    title: "Flutter Case Studies: Dosha Detector, GRAH9 & E-Commerce App",
    slug: "flutter-case-studies",
    excerpt:
      "Three Flutter apps in production — Dosha Detector's AI-powered astrology insights, GRAH9's CRM managing 2000+ users, and a full e-commerce app + admin panel — all built on Flutter, GetX, and Firebase.",
    category: "Case Study",
    date: "2026-08-04",
    tags: [
      "Flutter",
      "GetX",
      "Firebase",
      "Google Analytics",
      "Interakt",
      "Meta Pixel",
      "Pie Chart",
      "Pagination",
    ],
    featured: false,
    coverImage: "/assets/images/blog/CaseFlutterCover.png",
    relatedProjectSlugs: ["dosha-detector", "grah9", "ecommerce-app"],
    keyTakeaways: [
      "**Dosha Detector** — a Flutter astrology app with **500+ downloads** on the Play Store, detecting 10+ types of doshas from a birth chart with personalized remedies.",
      "**GRAH9** — an internal Flutter admin panel/CRM managing **2000+ users** across AstroVedansh's product suite, with WhatsApp automation via Interakt.",
      "A full **e-commerce app + admin panel** — Razorpay payments, two-step authentication, variable products, and real-time order management.",
      "Same core stack across all three: **Flutter, GetX, Firebase**, and **Dart** throughout, MVVM-style architecture.",
    ],
    content: [
      {
        type: "paragraph",
        text: "Alongside the React builds, three Flutter apps shipped for AstroVedansh's product suite: Dosha Detector (a consumer astrology app), GRAH9 (the internal CRM that runs the business), and a full e-commerce app with its own admin panel. Same team, same discipline, a different stack.",
      },
      {
        type: "image",
        src: "/assets/images/blog/FlutterWorkFlow.png",
        alt: "How Flutter works: Dart code drives Widgets, a Render Engine, and Platform Channels, which talk to the platform's Canvas, Events, and native APIs like Camera, Audio, Location, and Sensors",
        caption: "App code, Flutter's engine, and the native platform — how a Flutter app actually runs.",
        fit: "contain",
        aspectRatio: "8/5",
      },
      { type: "heading", level: 2, text: "Dosha Detector — AI-powered Vedic astrology" },
      {
        type: "paragraph",
        text: "Dosha Detector is a consumer astrology app published under Astro Vedansh Innovations. Users enter their birth date, time, and place; the app analyzes planetary positions to surface doshas in their birth chart, explains what each one means, and recommends personalized remedies — with an option to book a live consultation with an astrologer for deeper guidance.",
      },
      {
        type: "list",
        items: [
          "**10+ dosha types** detected from a full Janam Kundali (birth chart), each with a calculated strength score",
          "Interactive birth chart visualization with complete planetary placements",
          "Personalized remedies and an effects breakdown per dosha — career, relationships, health",
          "Live video consultations with expert astrologers, built directly into the app",
        ],
      },
      {
        type: "link-card",
        title: "Dosha Detector",
        url: "https://play.google.com/store/apps/details?id=com.DoshaDetector.app&hl=en_IN",
        description: "Live on the Google Play Store — 500+ downloads.",
      },
      { type: "heading", level: 2, text: "GRAH9 — the CRM behind the product suite" },
      {
        type: "paragraph",
        text: "GRAH9 is the centralized admin panel and CRM that runs AstroVedansh's entire product line — Perfect Timing, Perfect Career, and Dosha Detector all get managed from one dashboard. It's an internal tool, not a public site, so there's no live link to share — but it's the system doing the heaviest daily lifting.",
      },
      {
        type: "list",
        items: [
          "Manages **2000+ users** across every connected AstroVedansh product from a single dashboard",
          "**Interakt WhatsApp template automation** for order updates and customer communication",
          "Real-time revenue, tax, and campaign analytics — Razorpay financials plus ad-performance tracking",
          "Order and consultation management, coupon configuration, and content/banner management across products",
        ],
      },
      { type: "heading", level: 2, text: "E-commerce App + Admin Panel" },
      {
        type: "paragraph",
        text: "A complete Flutter shopping app paired with a companion admin panel — one codebase for the shopper experience, one for the store owner running it.",
      },
      {
        type: "list",
        items: [
          "**Razorpay** payment gateway plus Cash on Delivery, with two-step authentication on accounts",
          "Single and variable products (size/color), categories, brands, and favorites saved via **Hive** local storage",
          "Address management, order history, and profile management for shoppers",
          "Admin dashboard — live sales totals, a weekly revenue chart, and order-status breakdown",
        ],
      },
      { type: "heading", level: 2, text: "The tech stack" },
      {
        type: "tech-stack",
        items: ["Flutter", "Dart", "GetX", "Firebase", "Razorpay"],
      },
      {
        type: "paragraph",
        text: "Three different products, three different jobs — a consumer app, an internal CRM, and a full commerce platform — built on the same Flutter/GetX/Firebase foundation, with each one reusing patterns the last one already proved out.",
      },
    ],
  },
];
