import type { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    title: "Fast Website Development with Vibe Coding: How We Shipped MagicMond Global in 3 Days",
    slug: "fast-website-development-with-vibe-coding",
    excerpt:
      "How vibe coding with Claude Code took MagicMond Global — the agency's own marketing site — from idea to a live, production website in 3 days with the MagicMond Magicians Team, and how the same workflow shipped Shri Yamuna Infra just as fast.",
    category: "AI & Development",
    date: "2026-08-01",
    tags: ["Vibe Coding", "AI Agents", "Web Development"],
    featured: true,
    coverImage: "/assets/images/projects/magicmond/secondScreen.webp",
    keyTakeaways: [
      "Vibe coding means directing an AI agent with **plain-language intent** and reviewing its output — not hand-typing every line.",
      "The same **React, Vite, Tailwind CSS, Framer Motion, React Router, and Zustand** stack shipped two separate production sites, reused rather than rebuilt each time.",
      "Popular tools for this workflow include **Claude Code**, **Cursor**, **GitHub Copilot**, and **Windsurf** — different entry points to the same discipline.",
      "Speed came from **rapid iteration and tight team collaboration**, not from writing less code.",
    ],
    relatedProjectSlugs: ["magicmond-global", "shri-yamuna-infra"],
    content: [
      {
        type: "paragraph",
        text: "MagicMond Global — the agency's own marketing site, introducing itself as \"the house of Magicians\" across Design, Growth, Tech, and AI — went from an idea to a live, production website in 3 days. I built it with the MagicMond Magicians Team using vibe coding: describing intent to an AI coding agent and reviewing/iterating on what it produced, instead of hand-typing every line.",
      },
      { type: "heading", level: 2, text: "How the vibe coding loop actually worked" },
      {
        type: "paragraph",
        text: "In practice this meant: describe what a section should do, let the agent draft it, review the diff, run it, move to the next piece. Architecture, review, and final judgment stayed mine — the agent did the typing and the first pass of pattern-matching. Run tightly, that loop is what turns a multi-week build into a multi-day one, without the codebase turning into a mess.",
      },
      {
        type: "image",
        src: "/assets/images/blog/VibeCoading.png",
        alt: "Infographic: What is Vibe Coding? Choose your AI assistant, write a natural-language prompt, let AI generate the code, then review and refine the output.",
        caption: "Choose an assistant, describe intent, let it generate, then review and refine.",
      },
      {
        type: "callout",
        variant: "tip",
        text: "One habit that made this reliable: a written instructions file the agent reads before touching anything — conventions, breakpoints, and tokens already in the codebase, so nothing needs re-explaining every session. (This portfolio's own CLAUDE.md does exactly that job.)",
      },
      { type: "heading", level: 2, text: "Popular vibe-coding tools" },
      {
        type: "list",
        items: [
          "**Claude Code** — an agent-first CLI that plans, edits, and verifies multi-file changes on its own before handing control back",
          "**Cursor** — an IDE built around AI edits, good for watching a diff form line-by-line as it happens",
          "**GitHub Copilot** — the most widely adopted, IDE-integrated assistant, strongest at in-line autocomplete and small edits",
          "**Windsurf** — an agentic IDE built around a similar plan-edit-verify loop",
        ],
      },
      { type: "heading", level: 2, text: "The tech stack" },
      {
        type: "paragraph",
        text: "Both MagicMond Global and Shri Yamuna Infra ran on the same core stack — reused, not rebuilt:",
      },
      {
        type: "tech-stack",
        items: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router", "Zustand"],
      },
      { type: "heading", level: 2, text: "Both projects, live in production" },
      {
        type: "paragraph",
        text: "**MagicMond Global** (the agency's own marketing site) and **Shri Yamuna Infra** (a responsive, production-ready real-estate marketing site for a Vrindavan developer) both shipped with the same **vibe-coding workflow** — modern technology, production-ready design, and business goals brought together **in days, not weeks**.",
      },
      {
        type: "link-card-row",
        items: [
          {
            title: "MagicMond Global",
            url: "https://magicmond.com/",
            image: "/assets/images/projects/magicmond/introPage.webp",
          },
          {
            title: "Shri Yamuna Infra",
            url: "https://lnkd.in/gqJ23XzG",
            image: "/assets/images/projects/sreeYamunaInfra/introPage.webp",
          },
        ],
      },
      { type: "heading", level: 2, text: "What I learned" },
      {
        type: "list",
        items: [
          "Building **production-ready software** with speed, without trading away quality or reliability",
          "Leveraging **vibe coding** to accelerate development while keeping the codebase clean and maintainable",
          "Designing **clean, scalable, reusable** frontend architecture that both projects could reuse instead of rebuilding from scratch",
          "Strengthening **debugging, testing, and continuous iteration** to keep fast-moving work stable",
          "**Collaboration, code reviews, and fast feedback loops** turn ideas into shipped products — not just fewer keystrokes",
          "How **design, development, marketing, and team collaboration** come together on a real client project, not just the code",
        ],
      },
      {
        type: "quote",
        text: "Great products aren't built by writing more code — they're built through collaboration, rapid iteration, continuous learning, and a team committed to delivering quality.",
      },
      {
        type: "paragraph",
        text: "Both of these shipped with the MagicMond Magicians Team — with guidance from Chirag Pachauri across architecture, development, debugging, and deployment on MagicMond Global, and production-ready design support from Kunal Naskar and Abhishek Saini on Shri Yamuna Infra. Vibe coding didn't replace any of that collaboration — it just removed the typing bottleneck so there was more time for it.",
      },
    ],
  },
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
    coverImage: "/assets/images/blog/vibe-coding-workflow.svg",
    keyTakeaways: [
      "An AI coding agent's loop is: **read the relevant code, propose a change, apply it, verify it** — the same loop a careful human engineer follows, just faster at the reading and typing steps.",
      "**Claude Code** is agent-first and CLI-native — good for larger, multi-file changes and running its own verification (build, browser checks) before handing back.",
      "**Cursor** is IDE-integrated — good for tight, in-context edits where you want to watch and steer line by line.",
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
    title: "React Case Study: Shipping PerfectCareer in 5 Days",
    slug: "perfect-career-react-case-study",
    excerpt:
      "How PerfectCareer's core platform — a React, Vite, and Tailwind CSS web app with Node.js APIs and full WhatsApp/email automation — got built in 5 days, then scaled to 353K+ campaign impressions.",
    category: "Case Study",
    date: "2026-08-03",
    tags: ["React", "Automation", "Google Cloud Tasks", "WhatsApp Automation"],
    featured: false,
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
        items: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Node.js"],
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
      {
        type: "paragraph",
        text: "This shipped with guidance from Chirag Pachauri as Senior Developer — the same collaborator who guided the MagicMond Global build. Different companies, different stacks, same discipline: describe the change, review it, ship it.",
      },
    ],
  },
];
