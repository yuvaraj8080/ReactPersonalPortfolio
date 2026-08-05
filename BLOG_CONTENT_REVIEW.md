# Blog Content — Schema Guide + Final JSON (for review)

This is a working doc, not part of the app. It mirrors [`data/blogs.ts`](data/blogs.ts) in plain JSON so we can discuss/edit the content without digging through TSX. Once we agree on changes here, I'll port them back into `data/blogs.ts`.

---

## 1. What each field means, and what to actually write in it

### Card-level fields (used everywhere: home row, `/blog` grid, related-posts)

| Field | What it is | What to write |
|---|---|---|
| `title` | The post's headline | Front-load the topic in plain language — this is what shows in Google/AI search results, so it should read like an answer to a query, not a clever pun. |
| `slug` | URL segment (`/blog/<slug>`) | Lowercase, hyphenated, stable forever once published — changing it later breaks any inbound links/citations. |
| `excerpt` | Card summary + meta description + OG description | 1–2 sentences that **answer** what the post is about, not tease it. This is the single most-reused string in the whole system (card, `<meta description>`, OG tags) — make it stand alone. |
| `category` | Topic label shown on the card | Keep to the existing set (`AI & Development`, `Tools & Workflow`, `Case Study`, ...) so cards group sensibly; add a new one only if a post genuinely doesn't fit. |
| `date` | Publish date (`YYYY-MM-DD`) | Real date it goes live. Also feeds `datePublished` in the JSON-LD schema search engines read. |
| `readTime` | Shown on the card | Rough honest estimate — `words / 200`, rounded. |
| `tags` | Small pills on the card | 2–4 short tags. These aren't a taxonomy, just scannable keywords — reuse across posts where it's genuinely the same topic (e.g. "AI Agents" appears on 3 posts). |
| `featured` | Currently unused now that the home row shows all posts equally | Kept for future use (e.g. sorting order, a "featured" badge) — safe to ignore for now. |
| `coverImage` | Card thumbnail + OG image | Optional. Omit it and the card shows a generic icon placeholder instead (that's what "Vibe Coding Explained" and the workflow post do right now, since there's no dedicated image for them). Only set this when there's a real screenshot to show — don't fake one. |

### Detail-page-only fields

| Field | What it is | What to write |
|---|---|---|
| `keyTakeaways` | Bullet list rendered in a callout box near the top of the post | **This is the most important field for GEO** (AI answer engines like ChatGPT/Perplexity lift this almost verbatim when citing the post). 3–5 bullets, each a complete, quotable claim — not a fragment. Write these *last*, after the body is done, so they actually summarize what's there instead of what you intended to write. |
| `relatedProjectSlugs` | Cross-links to `/projects/[slug]` | Only set this when the post genuinely discusses that project (used for MagicMond posts here). Not currently rendered on the page yet — reserved for a future "related project" card, flag if you want that wired up now. |
| `content` | The full post body | Array of typed blocks, see below. |

### `content` block types — what each one is for

| Block type | Fields | When to use it |
|---|---|---|
| `paragraph` | `text` | Default prose. Most of the post. |
| `heading` | `level` (2 or 3), `text` | Section breaks. Phrase these as **questions or clear statements** ("What vibe coding actually means", not "Overview") — this is the #2 GEO lever after Key Takeaways, since AI engines match these against how people phrase prompts. |
| `list` | `items[]`, optional `ordered` | Use `ordered: true` for sequential steps (Day 1/2/3, a numbered process); plain bullets for non-sequential points. |
| `image` | `src`, `alt`, optional `caption` | A real screenshot embedded in the body (not the card thumbnail — that's `coverImage`). Needs a real file in `public/assets/...`; don't reference a path that doesn't exist. |
| `code` | `language`, `code` | Actual runnable snippets only — a real command or config, not pseudo-code dressed up to look technical. |
| `quote` | `text`, optional `author` | Pull-quote treatment for a single strong claim (currently used for MagicMond's project-impact line). |
| `callout` | `variant` (`"tip"` \| `"key-takeaway"`), `text` | A one-off boxed note *inside* the body (separate from the `keyTakeaways` array at the top). Use sparingly — one or two per post max, or they lose their weight. |
| `link-card` | `title`, `url`, optional `description`/`image` | The "here's the live site / project" card. Internal links (`/projects/...`) open in the same tab; external links (`https://...`) open in a new tab automatically. |

---

## 2. Final JSON — current 4 posts (as shipped in `data/blogs.ts`)

```json
[
  {
    "title": "Vibe Coding Explained: What It Is, What It Isn't, and When to Use It",
    "slug": "vibe-coding-explained",
    "excerpt": "Vibe coding means directing an AI coding agent with plain-language intent and iterating on its output, instead of hand-writing every line yourself. Here's what that actually looks like in practice, and where it earns its keep.",
    "category": "AI & Development",
    "date": "2026-07-28",
    "readTime": "6 min read",
    "tags": ["Vibe Coding", "AI", "Developer Workflow"],
    "featured": true,
    "keyTakeaways": [
      "Vibe coding means directing an AI coding agent with plain-language intent and iterating on its output, instead of hand-writing every line yourself.",
      "It's fastest for scaffolding, UI sections, and repetitive patterns — not a substitute for reviewing architecture or security-sensitive code.",
      "The best results come from small, verifiable steps: describe one change, review the diff, then move to the next one.",
      "Treat the agent like a fast engineer with total codebase recall, not an oracle — you're still the one who understands the product."
    ],
    "relatedProjectSlugs": ["magicmond-global"],
    "content": [
      { "type": "paragraph", "text": "\"Vibe coding\" gets used two different ways online — as a dismissive joke about typing prompts and hoping for the best, and as a real, disciplined workflow professional developers use to ship production software faster. This post is about the second one, based on how I actually build." },
      { "type": "heading", "level": 2, "text": "What vibe coding actually means" },
      { "type": "paragraph", "text": "In practice, vibe coding is describing your intent to an AI coding agent — what a component should do, what a bug's symptom is, what a page should look like — and reviewing/iterating on what it produces, rather than typing every line by hand. The agent reads the existing codebase, makes the change, and you verify it. It's still your architecture, your decisions, your review — the agent is doing the typing and the first pass of pattern-matching." },
      { "type": "callout", "variant": "key-takeaway", "text": "The failure mode isn't \"the AI wrote bad code\" — it's accepting a large, unreviewed diff. Small steps with a review in between are what make this workflow reliable." },
      { "type": "heading", "level": 2, "text": "Where it works well" },
      { "type": "list", "items": [
        "Scaffolding new pages, routes, and components that follow an existing pattern in the codebase",
        "Repetitive, mechanical changes across many files (renames, prop threading, consistent styling updates)",
        "First-pass UI implementation from a design or a rough description",
        "Debugging — an agent can grep, read, and trace a stack faster than switching files by hand"
      ]},
      { "type": "heading", "level": 2, "text": "Where it doesn't" },
      { "type": "list", "items": [
        "Deciding the architecture itself — the agent will happily build the wrong thing well",
        "Security-sensitive code (auth, payments, data access) without a careful manual review",
        "Anything where you can't clearly describe what \"correct\" looks like"
      ]},
      { "type": "paragraph", "text": "The projects on this site built in a handful of days — MagicMond Global among them — weren't built by trusting the agent blindly. They were built by keeping the loop tight: describe one change, read the diff, run it, move on. That loop is the actual skill, not the prompt." }
    ]
  },
  {
    "title": "How I Ship a Production App in 3 Days with AI Coding Agents",
    "slug": "ship-production-app-3-days-ai-agents",
    "excerpt": "A day-by-day breakdown of how MagicMond Global — the agency's own marketing site — went from an empty repo to a live, production site in 3 days, using an AI-agent-driven workflow instead of a multi-week build.",
    "category": "AI & Development",
    "date": "2026-07-20",
    "readTime": "8 min read",
    "tags": ["AI Agents", "Workflow", "Case Study"],
    "featured": true,
    "keyTakeaways": [
      "A 3-day timeline works when the scope is fixed upfront — content, pages, and brand direction are locked before Day 1 starts.",
      "Day 1 is structure and content wiring, Day 2 is visual polish and animation, Day 3 is responsive QA and deployment — not evenly split thirds.",
      "AI agents remove the typing bottleneck, not the review bottleneck — every section still gets checked at 375px, 768px, and desktop before it's called done.",
      "Real example: magicmond.com, live in production, built this way with the MagicMond Magicians Team."
    ],
    "relatedProjectSlugs": ["magicmond-global"],
    "content": [
      { "type": "paragraph", "text": "MagicMond Global — the agency's own marketing site, introducing itself as \"the house of Magicians\" across Design, Growth, Tech, and AI — went from a blank repository to a live production site at magicmond.com in 3 days. Here's the actual day-by-day breakdown, not the highlight reel." },
      { "type": "heading", "level": 2, "text": "Day 1 — Structure and content wiring" },
      { "type": "paragraph", "text": "Before any UI work, the full page structure gets locked: which sections exist, what content lives in each, and how the sub-brand pages (InfraEdge, Sports partnerships) relate to the main site. This is the step most 3-day builds skip — and the reason most of them slip past day 3. With the structure fixed, an AI agent scaffolds every section and page shell against real content (client logos, the Reidius Infra case study, service descriptions) in parallel, instead of one section at a time." },
      { "type": "heading", "level": 2, "text": "Day 2 — Visual polish and motion" },
      { "type": "list", "items": [
        "Apply the brand's dark, purple-accented visual identity consistently across every section",
        "Add scroll-based animations and micro-interactions with Framer Motion",
        "Pass over every section a second time for spacing/typography consistency — this is where an agent's ability to grep the whole codebase for \"every place this pattern appears\" matters most"
      ]},
      { "type": "heading", "level": 2, "text": "Day 3 — Responsive QA and deployment" },
      { "type": "paragraph", "text": "The last day is entirely verification: every section checked at mobile, tablet, and desktop widths, in both the brand's light and dark presentation, before deployment. No new features get added on Day 3 — only fixes. That discipline is what keeps a 3-day build from becoming a 3-day build with two more weeks of bug fixes after launch." },
      { "type": "link-card", "title": "MagicMond Global — live site", "url": "https://magicmond.com/", "description": "The production result of this 3-day build, shipped with the MagicMond Magicians Team.", "image": "/assets/images/projects/magicmond/introPage.webp" },
      { "type": "image", "src": "/assets/images/projects/magicmond/firstScreen.webp", "alt": "MagicMond Global service showcase section", "caption": "The service showcase section, built and polished on Day 2." }
    ]
  },
  {
    "title": "Inside My AI Agent Workflow: Claude Code, Cursor, and How I Actually Use Them",
    "slug": "ai-coding-agent-workflow-claude-code-cursor",
    "excerpt": "A practitioner's breakdown of how Claude Code and Cursor fit into a real development loop — planning, tool calls, verification, and where I still step in by hand.",
    "category": "Tools & Workflow",
    "date": "2026-07-12",
    "readTime": "7 min read",
    "tags": ["Claude Code", "Cursor", "AI Agents"],
    "featured": false,
    "keyTakeaways": [
      "An AI coding agent's loop is: read the relevant code, propose a change, apply it, verify it — the same loop a careful human engineer follows, just faster at the reading and typing steps.",
      "Claude Code is agent-first and CLI-native — good for larger, multi-file changes and running its own verification (build, browser checks) before handing back.",
      "Cursor is IDE-integrated — good for tight, in-context edits where you want to watch and steer line by line.",
      "The highest-leverage habit either way: give the agent the constraints up front (existing patterns, tokens, breakpoints) instead of correcting it after the fact."
    ],
    "content": [
      { "type": "paragraph", "text": "Most of the production sites on this portfolio — including this one — were built with an AI coding agent doing a large share of the typing. The tool matters less than the loop, but the tools do shape how that loop feels day to day." },
      { "type": "heading", "level": 2, "text": "The agent loop, stripped down" },
      { "type": "list", "ordered": true, "items": [
        "Read — the agent greps/reads the relevant files before touching anything, the same way a careful engineer would orient before editing unfamiliar code",
        "Plan — for anything non-trivial, state the approach before writing code",
        "Change — apply the edit, scoped as small as the task allows",
        "Verify — run the build, check the browser at the breakpoints that matter, read the diff back"
      ]},
      { "type": "code", "language": "bash", "code": "npm run build\n# then check at 375px / 768px / 1280px, light + dark, before calling it done" },
      { "type": "heading", "level": 2, "text": "Claude Code vs. Cursor, in practice" },
      { "type": "paragraph", "text": "Claude Code lives in the terminal and is built agent-first: it can plan a multi-file change, execute it, and run its own verification (builds, browser checks, screenshots) before handing control back. That makes it strong for larger, cross-file work — a new page, a data-model change that touches five components, a full section redesign." },
      { "type": "paragraph", "text": "Cursor lives inside the editor, so edits stay visible line-by-line as they happen. That's better suited to tight, local changes where I want to watch the diff form in real time rather than review it after the fact — a single component's styling, a targeted bug fix." },
      { "type": "callout", "variant": "tip", "text": "The single habit that improves agent output the most: front-load the constraints (existing tokens, breakpoint conventions, component patterns already in the codebase) instead of describing the feature in isolation and fixing the mismatches afterward." }
    ]
  },
  {
    "title": "From Idea to Production in 3 Days: The MagicMond Global Case Study",
    "slug": "magicmond-3-day-case-study",
    "excerpt": "A full breakdown of building MagicMond Global — the agency's own marketing site — end-to-end in 3 days with the MagicMond Magicians Team: the stack, the workflow, and the live result.",
    "category": "Case Study",
    "date": "2026-06-30",
    "readTime": "6 min read",
    "tags": ["Case Study", "React", "Vibe Coding"],
    "featured": false,
    "coverImage": "/assets/images/projects/magicmond/introPage.webp",
    "keyTakeaways": [
      "MagicMond Global is the agency's own marketing site — Design x Growth x Tech x AI — shipped in 3 days with the MagicMond Magicians Team.",
      "Stack: React + Vite for the frontend, Tailwind CSS for styling, Framer Motion for scroll animation.",
      "The site covers multi-brand messaging (main site, InfraEdge, Sports partnerships) and a full client case study (Reidius Infra) with real client logos.",
      "Live at magicmond.com — built using an AI-agent-driven (vibe coding) workflow to compress the timeline without cutting corners on responsiveness or polish."
    ],
    "relatedProjectSlugs": ["magicmond-global"],
    "content": [
      { "type": "paragraph", "text": "MagicMond Global introduces the agency as \"the house of Magicians\" — Design x Growth x Tech x AI — across its own marketing site, a dedicated InfraEdge sub-brand page (a 90-day qualified-meeting engine for construction and real estate), and a Sports partnerships page for athlete sponsorships. It went from a blank repo to a live site at magicmond.com in 3 days." },
      { "type": "heading", "level": 2, "text": "What the site covers" },
      { "type": "list", "items": [
        "Multi-brand marketing site — Design, Growth, Tech & AI services, plus dedicated InfraEdge and Sports partnership pages",
        "Service showcase: brand identity, website & landing page design, lead generation, social/content marketing, WhatsApp outreach",
        "A full client case study — Reidius Infra's growth from a Jaipur construction firm to a 60+ client brand in a year — alongside logos from KFC, Western Union, My11Circle, Dalmia Cement, and Etihad",
        "Scroll-based animation and micro-interactions throughout"
      ]},
      { "type": "heading", "level": 2, "text": "The stack" },
      { "type": "list", "items": [
        "React with Vite for fast dev/build tooling",
        "Tailwind CSS for a clean, reusable component architecture",
        "Framer Motion for scroll and interaction animation",
        "Built using an AI-agent-driven (vibe coding) workflow to accelerate development without sacrificing code quality"
      ]},
      { "type": "quote", "text": "Delivered a production-ready website in just 3 days through rapid iteration, continuous feedback, and close team collaboration — demonstrating how an AI-agent-driven workflow can significantly accelerate delivery without cutting corners on quality." },
      { "type": "link-card", "title": "See the full project breakdown", "url": "/projects/magicmond-global", "description": "Tech stack, all screenshots, and the complete feature list on the project page.", "image": "/assets/images/projects/magicmond/DetailsPage.webp" }
    ]
  }
]
```

---

## 3. Things worth flagging before this is "final"

- **`relatedProjectSlugs` isn't rendered anywhere yet** — it's stored on 3 posts but there's no UI pulling it in on the detail page. Say the word and I'll add a "Related Project" card using it.
- **Two posts have no `coverImage`** (Vibe Coding Explained, AI Agent Workflow) — they show the generic icon placeholder on cards. If you have or want a screenshot/graphic for either, tell me the file and I'll wire it in.
- **Dates are placeholders** (Jul 12 – Jul 28, 2026) spaced out to look like a real posting cadence — replace with real publish dates once you know when each goes live.
- **"Claude Code vs. Cursor" post has no real code example beyond one `npm run build` line** — if you want a more substantive snippet (an actual prompt, an actual diff), give me the example and I'll drop it in as a `code` block.
