# Portfolio — Krishay Nair

Personal portfolio built with a single, modern stack. See `CLAUDE.md` for the coding rules every component follows.

## Tech Stack

- **Next.js (App Router)** + **React** — file-based routing, Server Components, SSG
- **TypeScript** only (`.tsx`/`.ts`)
- **Tailwind CSS v4** — the only styling system (no CSS modules / CSS-in-JS)
- **lucide-react** icons (no UI kit currently — see `CLAUDE.md` §0.5/§1)
- **Framer Motion** — animations
- **Zustand** — theme state
- **Local fonts** via `next/font/local` (Poppins, Playfair Display — no CDN requests)
- **EmailJS** + **Cal.com** integrations

## Structure (MVC-style)

```
app/                  # Routes (Controller) — each page only assembles section components
components/
  layout/             # Navbar, Footer, ScrollProgress
  sections/           # Page-wise components (home/, projects/, achievements/)
data/                 # Typed content (Model) — projects, skills, experiences, …
types/                # TypeScript interfaces
hooks/  store/        # Logic, Zustand state
lib/
  common/             # Reusable widgets (Container, Title, Text, AppImage, AppLink)
  constants/          # style/font tokens (see CLAUDE.md §3)
public/assets/        # images/<section>/, skills/, fonts/, pdf/
```

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages prerendered)
```

Optional: copy `.env.local.example` to `.env.local` and add a GitHub token for the contributions graph.
