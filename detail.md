# Project Detail — Krishay Nair Portfolio

A complete technical breakdown of this repository: what it is, what stack it's built on, how the folders are organized, and how data flows from content → types → components → pages.

> Companion docs: [`CLAUDE.md`](CLAUDE.md) (coding rules for this repo) and [`IMPROVEMENT.md`](IMPROVEMENT.md) (the migration plan/checklist this project followed).

---

## 1. What This Project Is

A personal portfolio website (site title: **"Krishay Nair — Site Reliability Engineer, CKA Certified"**) showcasing:

- **Hero** section with animated intro, tech-stack badges, resume download, social links
- **Experience** timeline (expandable cards per job)
- **Projects** grid (home preview + a full `/projects` listing + per-project `/projects/[id]` detail pages with an image gallery)
- **Skills** icon grid
- **GitHub Contributions** heatmap (live data via GitHub's GraphQL API)
- **Certifications** list (Kubernetes/Oracle/Google-style badges)
- **Connect/Contact** section with a multi-step modal that embeds **Cal.com** for booking
- **Achievements ("Hall of Fame")** — an auto-scrolling carousel on the home page + a full `/achievements` page
- **Blogs** section (featured + regular post cards)
- Light/dark **theme toggle** persisted to `localStorage`
- Mobile hamburger menu, scroll-progress bar, hash-based in-page navigation (`/#projects`, `/#contact`, etc.)

---

## 2. Tech Stack

This repo is (per `CLAUDE.md`) deliberately **one tool per job — no duplicates**. Exact versions from `package.json`:

| Concern | Tool | Version |
|---|---|---|
| Language | **TypeScript** | `6.0.3` (`.ts` / `.tsx` only — no `.js`/`.jsx` remain) |
| Framework | **Next.js** (App Router) | `^16.2.10` |
| UI runtime | **React** / **React DOM** | `^19.2.7` |
| Styling | **Tailwind CSS v4** | `^4.3.3` (via `@tailwindcss/postcss`) — the only CSS file is `app/globals.css` |
| UI primitives | **shadcn/ui** (`new-york` style, `components/ui/`) | — |
| Variant styling | **class-variance-authority (cva)** + **clsx** + **tailwind-merge** | `0.7.1` / `2.1.1` / `3.6.0` |
| Icons | **lucide-react** | `^1.25.0` |
| Animation | **Framer Motion** | `^12.42.2` |
| State management | **Zustand** | `^5.0.14` (theme store only) |
| Fonts | **`next/font/local`** — Poppins & Playfair Display shipped as local `.woff2` files (no Google Fonts CDN) | — |
| Booking | **`@calcom/embed-react`** | `^1.5.3` |
| Email (available, not wired into a form currently) | **`@emailjs/browser`** | `^4.2.0` |
| Linting | **ESLint** (`eslint-config-next`, flat config) | `^9.39.5` |

Scripts (`package.json`):
```bash
npm run dev     # next dev
npm run build   # next build
npm run start   # next start
npm run lint    # eslint .
```

---

## 3. Architecture Pattern — "MVC-style"

The codebase is explicitly organized to mirror MVC, as documented in `IMPROVEMENT.md`:

- **Model** → `data/` (typed content) + `types/` (TypeScript interfaces)
- **View** → `components/` (all `.tsx`, Tailwind-only, no CSS Modules)
- **Controller** → `app/` (routes) + `hooks/` + `store/`

Rule of thumb used throughout: **a page file (`app/**/page.tsx`) only imports and renders one `*Content` component**; all real markup lives in `components/sections/**`.

---

## 4. Full Folder Structure

```
Yuvaraj_Dekhane_Portfolio/
├── app/                                # Routes (Next.js App Router)
│   ├── layout.tsx                      # Root layout: fonts, <html data-theme>, inline theme-init script, <ScrollProgress/>
│   ├── template.tsx                    # Route-change fade/slide-in transition (Framer Motion)
│   ├── globals.css                     # ONLY CSS file — Tailwind import + design-token CSS variables + base element styles
│   ├── page.tsx                        # "/" → renders <HomeContent/>
│   ├── projects/
│   │   ├── page.tsx                    # "/projects" → renders <AllProjectsContent/>
│   │   └── [id]/page.tsx               # "/projects/:slug" → dynamic project detail (generateStaticParams + generateMetadata)
│   └── achievements/page.tsx           # "/achievements" → renders <AchievementsContent/>
│
├── components/
│   ├── ui/                             # shadcn/ui primitives (cva-based variants)
│   │   ├── button.tsx                  # default/outline/ghost/link variants, sm/default/lg/icon sizes
│   │   ├── badge.tsx                   # default/outline variants
│   │   └── card.tsx                    # Card, CardHeader, CardTitle, CardContent
│   │
│   ├── common/                         # Reusable, presentational widgets used across all pages
│   │   ├── Container.tsx               # site-wide horizontal container (max-width 1200px + responsive padding)
│   │   ├── Title.tsx                   # <h1>–<h6> via a `level` prop — enforces one semantic h1/page
│   │   ├── Text.tsx                    # <p> wrapper, styled by global element CSS
│   │   ├── AppButton.tsx               # wraps ui/button
│   │   ├── Chip.tsx                    # wraps ui/badge (tags)
│   │   ├── AnimatedSection.tsx         # shared Framer Motion scroll-in wrapper (fade + slide-up)
│   │   ├── AppImage.tsx                # next/image wrapper
│   │   └── AppLink.tsx                 # next/link wrapper (supports `external` → new tab + rel safety)
│   │
│   ├── layout/                         # Chrome shared by every page
│   │   ├── Navbar.tsx                  # sticky header, desktop nav links, theme toggle, CV download, hamburger trigger
│   │   ├── MobileMenu.tsx              # animated dropdown menu for <768px
│   │   ├── Footer.tsx                  # social links + "Designed and created by" credit
│   │   └── ScrollProgress.tsx          # fixed top progress bar bound to scroll position
│   │
│   └── sections/                       # Page-specific composition (one subfolder per route)
│       ├── home/
│       │   ├── HomeContent.tsx         # assembles the entire "/" page (imports every section below in order)
│       │   ├── Hero.tsx                # animated name/title, tech badges, CTAs, socials
│       │   ├── PixelGrid.tsx           # animated hover-reactive background grid behind the Hero
│       │   ├── ExperienceSection.tsx   # expandable job-history cards
│       │   ├── Skills.tsx              # icon grid with hover tooltips
│       │   ├── GitHubContributions.tsx # fetches + renders a GitHub contribution heatmap (client-side GraphQL call)
│       │   ├── Certifications.tsx      # certification list w/ custom SVG badge icons
│       │   ├── ConnectSection.tsx      # contact CTA + multi-step modal + Cal.com inline embed
│       │   ├── Achievements.tsx        # auto-scrolling "Hall of Fame" carousel (pauses on hover/touch)
│       │   └── Blogs.tsx               # featured + all blog post cards
│       ├── projects/
│       │   ├── ProjectsGrid.tsx        # reusable project card grid (used on home preview AND /projects); custom "View project" cursor
│       │   ├── AllProjectsContent.tsx  # full "/projects" page composition
│       │   ├── ProjectDetail.tsx       # full "/projects/[id]" page composition (overview/features/technical/impact/achievements/certs/related)
│       │   └── ProjectGallery.tsx      # image carousel w/ swipe + keyboard-arrow support
│       └── achievements/
│           ├── AchievementCard.tsx     # single achievement card (used on the dedicated page)
│           └── AchievementsContent.tsx # full "/achievements" page composition
│
├── data/                                # Model — typed static content (previously one big data.js)
│   ├── hero.ts                          # HERO_TITLE, HERO_TECH_STACK
│   ├── menu.ts                          # MENULINKS
│   ├── socials.ts                       # SOCIAL_LINKS (LinkedIn, GitHub, Email, Instagram)
│   ├── skills.ts                        # SKILLS grouped by category (sreCloudNetworking, languagesAndTools, …)
│   ├── experiences.ts                   # experiences[] (eBay, Communicore FiberInfra, …)
│   ├── projects.ts                      # projects[] — full project content incl. detailedDescription, images, certificates
│   ├── achievements.ts                  # achievements[] (Hall of Fame entries)
│   ├── certifications.ts                # certifications[] (CKA, etc.)
│   └── blogs.ts                         # blogs[]
│
├── types/                                # Model — TypeScript interfaces (barrel-exported via index.ts)
│   ├── index.ts                          # `export * from` project/achievement/skill/experience
│   ├── project.ts                        # Project, ProjectLiveUrl, ProjectCertificate, ProjectAchievement, ProjectDetailedDescription
│   ├── skill.ts                           # SkillGroups, MenuLink
│   ├── experience.ts                      # Experience
│   └── achievement.ts                     # Achievement
│
├── hooks/
│   └── useHashNavigation.ts              # cleans up "##" URLs + smooth-scrolls to a section when the URL has a known hash
│
├── store/
│   └── useThemeStore.ts                  # Zustand store: theme ("dark"|"light"), toggle/set/init, syncs <html data-theme> + localStorage
│
├── lib/
│   ├── utils.ts                          # cn() = twMerge(clsx(...)) — the one class-merging helper used everywhere
│   ├── tech-icons.ts                      # technology name → icon filename map (used by Experience/ProjectsGrid tech badges)
│   ├── text.ts                            # getBriefText() / getBriefAchievement() text-truncation helpers
│   └── constants/
│       ├── styles.ts                     # layout/typography/sizes tokens (container widths, section padding, gaps…)
│       ├── fonts.ts                       # next/font/local definitions for Poppins + Playfair Display
│       └── colors.ts                      # JS references to the CSS color variables (for inline/SVG/motion use)
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── home/                     # footerleft.svg, footerright.svg
│   │   │   ├── experience/                # company logos (ebay, communicore, easycompany, iit-bombay)
│   │   │   ├── projects/                  # all project screenshots/covers (renamed from public/images/*)
│   │   │   └── socials/                   # LinkedIn/GitHub/Gmail/Instagram/Discord/LeetCode icons
│   │   ├── skills/                        # one SVG per technology (react, nextjs, docker, kubernetes, …)
│   │   ├── fonts/                         # poppins-*.woff2 (300–700), playfair-*.woff2 (incl. italics)
│   │   └── pdf/                           # resumes + hackathon/certificate PDFs
│   └── favicon.ico
│
├── .claude/launch.json                   # dev-server launch config (npm run dev, port 3000)
├── .env.local.example                    # NEXT_PUBLIC_GITHUB_TOKEN (raises GitHub API rate limit for the contributions graph)
├── CLAUDE.md                             # Hard rules for how code must be written in this repo
├── IMPROVEMENT.md                        # The migration plan this codebase was built from (all steps checked off)
├── README.md                             # Short human-facing overview + getting-started
├── components.json                       # shadcn/ui config (new-york style, @/* aliases, lucide icons)
├── next.config.mjs                       # minimal — just reactStrictMode: true
├── postcss.config.mjs                    # @tailwindcss/postcss plugin only
├── eslint.config.mjs                     # flat config: eslint-config-next core-web-vitals + typescript
└── tsconfig.json                         # strict TS, `@/*` path alias → project root
```

---

## 5. Routing Map

| Route | File | Renders |
|---|---|---|
| `/` | `app/page.tsx` | `HomeContent` → Navbar, Hero, ExperienceSection, ProjectsGrid (preview), Skills, GitHubContributions, Certifications, ConnectSection, Achievements, Blogs, Footer |
| `/projects` | `app/projects/page.tsx` | `AllProjectsContent` → Navbar, full ProjectsGrid, Footer |
| `/projects/[id]` | `app/projects/[id]/page.tsx` | `ProjectDetail` (static params pre-generated from `data/projects.ts` slugs; 404 via `notFound()` if slug doesn't match) |
| `/achievements` | `app/achievements/page.tsx` | `AchievementsContent` → Navbar, full achievement card grid, Footer |

In-page anchors handled by `useHashNavigation` (home only): `#home`, `#experience`, `#projects`, `#skills`, `#github-contributions`, `#certifications`, `#contact`, `#achievements`, `#blogs`.

---

## 6. Styling System

- **Tailwind CSS v4**, imported once at the top of `app/globals.css` via `@import "tailwindcss";` — there is no `tailwind.config.js` (v4 is CSS-first).
- Design tokens are defined as CSS variables in `:root` (dark theme values) and overridden under `[data-theme="light"]`. These are then exposed to Tailwind as utility colors/fonts through an `@theme inline { ... }` block (e.g. `--color-bg-primary`, `--color-text-primary`, `--font-sans`), so components can use classes like `bg-bg-primary`, `text-text-secondary`, `border-border-color` directly.
- Theme switching is instant and flicker-free: an inline `<script>` in `app/layout.tsx` reads `localStorage` and sets `data-theme` on `<html>` **before** React hydrates; `store/useThemeStore.ts` (Zustand) then keeps the UI and `localStorage` in sync afterward.
- Reusable non-color tokens (container widths, section padding/gaps, heading/body typography classes, icon/button/card sizes) live in `lib/constants/styles.ts` and are composed via `cn()` (from `lib/utils.ts`, itself `twMerge(clsx(...))`).
- Component variants (Button/Badge) use **class-variance-authority** in `components/ui/`.
- No CSS Modules, Sass, styled-components, or inline `style={}` for layout — the only exceptions are a few `style={{ backgroundColor: ... }}` cases driven by dynamic per-item data (e.g. experience-logo fallback color) and Framer Motion's own `style` prop for animated values.

---

## 7. Data Flow

1. **Content** is authored once in `data/*.ts` as plain typed arrays/objects (e.g. `projects`, `experiences`, `achievements`, `certifications`, `blogs`, `SKILLS`, `SOCIAL_LINKS`, `HERO_TECH_STACK`).
2. **Shape** of that content is declared in `types/*.ts` (e.g. `Project`, `Experience`, `Achievement`, `SkillGroups`) and re-exported from `types/index.ts`.
3. **Section components** (`components/sections/**`) import data directly from `data/` and map over it — no prop-drilling through `app/`. Page files in `app/` typically just render a single `*Content` wrapper component.
4. Dynamic route `app/projects/[id]/page.tsx` looks up a project by `slug` from `data/projects.ts`, generates static params for every slug at build time, builds per-page `<title>`/`<meta description>`, and 404s via `notFound()` for unknown slugs.

---

## 8. Notable Behaviors

- **GitHub Contributions**: `GitHubContributions.tsx` calls the GitHub GraphQL API directly from the client (`fetch("https://api.github.com/graphql")`) for a hardcoded username (`KrishayNair`), builds a 365-day heatmap + all-time total, and optionally uses `NEXT_PUBLIC_GITHUB_TOKEN` (from `.env.local`) to avoid the 60 req/hour unauthenticated rate limit.
- **Connect/Contact modal**: A 2-step form (role + inquiry type) that, once both are chosen, reveals an inline **Cal.com** embed (`@calcom/embed-react`, namespace `"secret"`, username `krishaynair`) for booking a call.
- **Theme toggle**: `useThemeStore` (Zustand) exposes `theme`, `toggleTheme`, `setTheme`, `init`; `Navbar`/`MobileMenu` call `toggleTheme()`, and `init()` re-syncs state with the value the inline script already applied to `<html data-theme>` on first paint.
- **Custom cursor**: `ProjectsGrid.tsx` swaps the OS cursor for a "View project →" pill that follows the mouse (via `useMotionValue`/`useSpring`) while hovering a project card that links out to a live site.
- **PixelGrid**: a decorative, pointer-reactive grid of cells behind the Hero section, with per-cell hover colors generated using a golden-angle hue distribution, and cell count capped by viewport width for performance.

---

## 9. Migration History (for context)

`git status` currently shows this repo mid-migration: the old Next.js **Pages Router** implementation (`pages/`, `.js`/`.jsx` components, CSS Modules like `Hero.module.css`, a `contexts/ThemeContext.jsx`, loose `public/images/*` and `public/skills/*`) is staged as **deleted**, while the new **App Router / TypeScript / Tailwind** implementation described above is **untracked** (not yet committed). `IMPROVEMENT.md` is the plan that drove this rewrite — every checkbox in it is already marked done:

- Pages Router → App Router
- `.js`/`.jsx` → `.tsx`/`.ts`
- CSS Modules → Tailwind CSS v4 + design tokens
- `contexts/ThemeContext.jsx` → `store/useThemeStore.ts` (Zustand)
- One large `data.js` → per-domain files in `data/*.ts` + `types/*.ts`
- Loose `public/images/`, `public/skills/`, `public/pdf/`, `public/experience-logos/` → organized under `public/assets/{images/<domain>, skills, pdf, fonts}/`
- Google-Fonts-style usage → local `next/font/local` fonts

**Nothing in the working tree was changed as part of this task** — this file is purely descriptive, produced by reading the current code.
