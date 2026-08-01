# CLAUDE.md — Code Writing Rules

Read this before writing ANY code. This portfolio's target quality bar is a **senior/staff-level engineer's site** — the kind of polish, consistency, and responsive craft you see on Vercel, Linear, or Stripe's own marketing sites. Every rule below exists to prevent a real bug already found and fixed in this codebase (inconsistent padding between sections, a footer that broke in light theme, a stale `components/common/` path). Follow them literally — don't improvise a new pattern when an existing token already covers it.

## 0. Workflow (how I work on this project)

1. **Before writing code for a non-trivial change: present a short plan and get approval first.** No code without approval.
2. Build every component from `lib/common/` widgets + `lib/constants/` tokens — never raw duplicated markup/styles.
3. After finishing a change: verify in the browser at **375px, 768px, 1280px** (mobile / tablet / desktop), in both light and dark theme, before calling it done.
4. If you find a value repeated in 2+ components (a color, a padding chain, a shadow), stop and lift it into `lib/constants/` instead of copy-pasting it a third time.
5. Before adding a new shared widget/token, `grep` for whether the "obvious" one already exists — this codebase previously had `AppButton`, `Chip`, `AnimatedSection`, `colors.ts`, and shadcn's `components/ui/` (button/badge/card) sitting around **completely unused** (zero imports anywhere), because every section quietly reimplemented the same thing inline instead of adopting them. They were deleted for being dead code. Don't recreate that situation — if you build a new shared primitive, actually wire it into at least one section in the same change, or it will rot the same way.

## 1. Hard Rules

1. **TSX + Tailwind only.** No `.js`/`.jsx`, no CSS Modules, no inline `style={}` (framer-motion's own `style`/animated props are the only exception), no CSS-in-JS, no new `.css` files (only `app/globals.css`).
2. **One tool per job:** UI kit = none currently (plain Tailwind + hand-built markup — shadcn/ui was scaffolded but never adopted, so it was removed; see §0.5) · Icons = lucide-react · Animation = Framer Motion · State = Zustand. Never install a duplicate library for something already covered.
3. **UI never changes without being asked** — this is a maintained site, not a redesign sandbox. Verify pixel-parity on mobile AND desktop after every change.
4. **Fonts local only** — `next/font/local` from `public/assets/fonts/` via `lib/constants/fonts.ts`. Never a Google Fonts CDN link.
5. **Reuse first** — `lib/common/` widgets (`Container`, `Title`, `Text`, `AppImage`, `AppLink` — this is the complete current list) + `lib/constants/` tokens. Copy-pasted className strings = wrong.
6. **No string constants** — content lives in `data/*.ts`; section copy stays inline in the section component.

## 2. Responsive System — Mobile vs Desktop

This is the section that matters most. A senior-level site *feels* different on a phone than on a laptop — not just "the same layout squeezed," but different button sizes, different spacing, sometimes different alignment. Two distinct Tailwind techniques are used here, for two distinct jobs. Do not mix them up.

### 2.1 Two techniques, two jobs

| Job | Technique | Example |
|---|---|---|
| **Swap which markup renders** (show desktop nav OR mobile hamburger, never both) | Mobile-first `md:`/`lg:` (min-width) | `hidden md:flex` (desktop-only), `md:hidden` (mobile-only) |
| **Scale a value that exists on both** (padding, font-size, gap, icon size shrinking as the viewport narrows) | Desktop-first descending `max-[Npx]:` chain | `px-[12rem] max-[1200px]:px-16 max-[600px]:px-6` |

Every component in this codebase already follows this split (`Navbar.tsx`'s `md:flex`/`md:hidden` hamburger swap vs. its `max-[768px]:h-[42px]` logo shrink is the canonical example). **Never invent a third pattern** (e.g. don't write `sm:`/`md:`/`lg:` ascending classes to shrink a value that should use the descending chain — it will visually disagree with every sibling section).

### 2.2 The site's breakpoint chain — reuse these exact values

```
1600px → 1400px → 1200px → 900px → 768px → 600px → 480px
```

- `max-[768px]` and `md:` (=768px) are the **structural** mobile/desktop line — hamburger vs. full nav, single-column vs. grid.
- The rest (`1600/1400/1200/900/600/480`) are the **scaling** steps for horizontal padding, gaps, and font-size as things shrink. This exact chain is what `layout.container` in `lib/constants/styles.ts` uses — always reuse it, never write a shorter/different chain for a "quick" component.
- Also know: `app/globals.css` drops the **root font-size to 15px below 600px width**. Every `rem`-based value (most of them) automatically shrinks ~6% site-wide under 600px — you don't need to compensate for this manually, just be aware it's already happening.

### 2.3 Typography — desktop vs. mobile sizing

Base heading sizes are fixed at the element level in `app/globals.css` (`h1` 2.25rem, `h2` 1.875rem, `h3` 1.5rem, `h4` 1.25rem, `h5` 1.125rem, `h6`/`p` 1rem). A component that needs a *bigger* display heading than the element default (e.g. a hero `<h1>`) sets its own Tailwind text-size class as the **desktop** value, then shrinks it with `max-[768px]:`/`max-[480px]:` overrides — e.g. `text-4xl max-[768px]:text-3xl`. Rule of thumb: **mobile heading ≈ 75–85% of the desktop size**, never smaller than `text-2xl` for an `h1`. Body copy generally does NOT need a mobile override — `text-sm`/`text-base` already reads fine at both sizes; only shrink body text if a line is visibly cramped at 375px.

### 2.4 Buttons & touch targets

- There is currently **no shared Button/Badge primitive** in this codebase (shadcn's `components/ui/button.tsx`/`badge.tsx` and their `AppButton`/`Chip` wrappers were removed — see §0.5). Every button is hand-styled per component via `cn(...)` — e.g. `Navbar.tsx`'s `iconButtonClasses`, `ConnectSection.tsx`'s `ctaButtonClasses`. Match the sizing/shape of the nearest existing button of the same kind (icon button vs. pill CTA) rather than inventing new proportions.
- **Minimum tap target on mobile is 40px (`h-10`/`w-10`)** — this project's icon buttons (`iconButtonClasses` in `Navbar.tsx`) are the reference. Never go smaller, even for a "small" decorative icon button.
- Desktop can afford tighter, more precise click targets (mouse vs. finger) — it's fine for a desktop-only hover-driven control to be smaller than 40px, but every control reachable on `<768px` must hit the 40px floor.
- If you find yourself writing the *same* button style a third time across sections, that's the trigger to extract a shared `AppButton` again — but only if you actually replace all 3+ call sites with it in that same change (see §0.5).

### 2.5 Spacing — padding, margin, gap

- **Horizontal section padding**: always `<Container>` (wraps `layout.container` from `lib/constants/styles.ts`). Never write your own `px-[Nrem] max-[...]:px-N` chain on a `<section>` — that is exactly the bug that made `ExperienceSection`/`Skills` sit at a 38px gutter while every other section sat at 23px, and `ProjectsGrid` double up to 45px when nested in an already-padded `<main>`. **Before adding horizontal padding to any element, check whether an ancestor (`<Container>`, or a parent `<main>`) already supplies it — if so, add none.**
- **Vertical section rhythm**: `layout.section` (`py-24 max-[900px]:py-16`) — mobile gets noticeably less vertical breathing room than desktop, not just a linear scale-down.
- **Grid/flex gaps**: `sizes.gap` (`gap-4 md:gap-6 lg:gap-8`) — mobile gaps are tighter (cards closer together, more content visible per scroll), desktop gaps are more generous (more whitespace, calmer feel). This is one of the few places genuine mobile-first `md:`/`lg:` ascending classes are correct, because it's scaling *up* from a sensible mobile default rather than shrinking *down* from a desktop one.

### 2.6 Text & content alignment

- **Body copy and paragraphs: always left-aligned**, mobile and desktop alike. Never center a paragraph of more than one line — it hurts readability.
- **Section headings** (`typography.sectionHeading`) are center-aligned by existing convention on both mobile and desktop — keep this consistent, don't switch a heading to left-aligned on one breakpoint only.
- **Cards in a grid**: left-align the card's own text content; only the icon/badge at the top of the card may be centered.
- **Rows that reflow to stacked on mobile** (e.g. a label/value pair that's `justify-between` on desktop): when they stack via `max-[768px]:flex-col`, add `max-[768px]:items-start` so the stacked content goes left-aligned instead of staying centered — see `ExperienceSection.tsx`'s date/location block for the reference pattern.

### 2.7 Horizontal scroll / list-row (carousel) pattern

For any horizontally-scrolling row of cards (see `Achievements.tsx` for the canonical implementation):

- The **outer, non-scrolling wrapper** carries the normal `Container`/`layout.container` padding. This is what gives the first card a left inset matching the rest of the page.
- The **inner scrolling track** (`overflow-x-auto`) gets **zero horizontal padding of its own** — only a `gap-*` between cards (`flex w-max flex-row gap-5`).
- Do **not** add padding *inside* the scroll track to try to "match" the outer inset — that reintroduces the inset after every card as you scroll, which looks broken. The inset should only ever appear once, at the very start, from the outer wrapper's padding.
- Always pair with `-webkit-overflow-scrolling: touch` behavior (already default via `overflow-x-auto`) and a visible scrollbar treatment (see `Achievements.tsx`'s `[&::-webkit-scrollbar]` classes) rather than hiding the scrollbar entirely — a hidden scrollbar with no other affordance reads as broken/stuck content on desktop.

## 3. Design Tokens — the single source of truth

**Rule: if the same color, spacing chain, or type scale is used in two components, it must be a named token here — never a copy-pasted literal.** Change the token once, and the whole site updates; that's the entire point.

### 3.1 Colors — real token names (do not use generic shadcn names like `bg-background`)

Defined as CSS variables in `app/globals.css`, exposed to Tailwind via `@theme inline`. For the rare case a literal is required (canvas, inline SVG, a framer-motion animated color prop), reference the CSS variable directly — e.g. `"var(--accent-blue)"` — not a hardcoded hex. (A `lib/constants/colors.ts` re-export of these existed at one point purely as a convenience wrapper but was never actually imported anywhere, so it was removed — don't recreate it unless you're actually going to import it somewhere.)

```
bg-bg-primary        text-text-primary       border-border-color
bg-bg-secondary      text-text-secondary     border-border-hover
bg-bg-hover          text-secondary-text     text-accent-blue
                                              text-accent-green
```

Every one of these flips automatically between dark and light theme via `[data-theme="light"]` in `globals.css` — **never hardcode a hex value or `rgba(255,255,255,...)`/`rgba(0,0,0,...)` literal in a component.** If you catch yourself writing `rgba(255,255,255,0.05)`, that's `bg-bg-secondary` in dark theme — use the token, not the literal, so it also works in light theme.

### 3.2 Layout, typography, and size tokens (`lib/constants/styles.ts` — current, real values)

```ts
export const layout = {
  container: "relative mx-auto w-full max-w-[1200px] px-[12rem] max-[1600px]:px-32 max-[1400px]:px-24 max-[1200px]:px-16 max-[900px]:px-8 max-[600px]:px-6",
  section: "mx-auto max-w-[1200px] py-24 max-[900px]:py-16",
  sectionGap: "mb-12",
} as const;

export const typography = {
  sectionHeading: "text-center text-3xl font-semibold tracking-[0.04em] text-[var(--text-primary)] mb-12 transition-colors duration-300",
  subHeading: "text-center text-lg font-medium leading-relaxed text-[var(--text-secondary)] mb-12 transition-colors duration-300",
  body: "text-base leading-[1.7] text-[var(--secondary-text)]",
  caption: "text-sm text-[var(--text-secondary)]",
} as const;

export const sizes = {
  iconSm: "h-4 w-4",
  icon: "h-5 w-5",
  iconLg: "h-6 w-6",
  gap: "gap-4 md:gap-6 lg:gap-8",
  card: "rounded-xl p-4 md:p-6",
} as const;
```

This list **grows over time** — if you need a new repeated pattern (e.g. a standard modal padding, a standard badge size), add it here as a new key, don't invent it inline. There is no dedicated button/badge size token here — see §2.4.

**Known adoption gap (be honest about this, don't assume otherwise):** `layout`/`typography`/`sizes` above are defined but **not yet imported by any section component** — every section still writes its own equivalent padding/heading/gap classes inline instead. Only `Container` and `Title` (and `Text`/`AppImage`/`AppLink`) are actually wired in from `lib/common/`. Don't write new code assuming a token is "already used everywhere" just because it's exported — `grep` for it first. When you touch a section for another reason, prefer migrating it onto the real tokens over adding another inline duplicate. (`AppButton`, `Chip`, `AnimatedSection`, `colors.ts`, and shadcn's `components/ui/` were the same kind of gap, except nobody ever migrated onto them at all — they were deleted rather than left to rot further; see §0.5.)

### 3.3 Anti-patterns (real bugs already found — don't repeat them)

- ❌ Writing a one-off padding chain on a `<section>` instead of wrapping content in `<Container>` (caused a 15px mobile gutter mismatch between `Skills`/`ExperienceSection` and every other section).
- ❌ Adding a grid/flex wrapper's own responsive padding when it's already nested inside a padded `<main>`/`<Container>` (caused `ProjectsGrid` to sit at a 45px gutter on the home page instead of 23px).
- ❌ Hardcoding `bg-[#1a1b26]` / `!text-white` for a "always dark" section instead of theme tokens — broke the footer's "Follow Me" heading (rendered invisible black-on-dark) the moment someone used light theme.
- ❌ Mixing ascending (`md:`/`lg:`) and descending (`max-[Npx]:`) responsive techniques for the *same* property on the *same* element — pick one per §2.1's table and stay consistent with sibling components.
- ❌ Writing `text-[var(--accent-blue,#3b82f6)]` / `border-[var(--accent-blue,#3b82f6)]` / `bg-[var(--accent-blue,#3b82f6)]` instead of the real generated utilities `text-accent-blue` / `border-accent-blue` / `bg-accent-blue` — this pattern was copy-pasted 20+ times across 7 files with a hardcoded fallback hex baked into every copy. Fixed once already; if you're about to reference the accent color as a plain text/border/bg value, use the utility class, not an arbitrary `[var(...)]` bracket. (The bracket form is still correct — with no hardcoded fallback — when it's embedded inside a larger literal like a `linear-gradient(...)` or `box-shadow` value, since Tailwind has no plain utility for those.)

## 4. Layout Rules

- Grids stack on mobile: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` + `sizes.gap`.
- Widths: `w-full max-w-*` only — never fixed pixel widths on containers.
- No horizontal scroll ever: no child wider than viewport; wide content gets `overflow-x-auto` on itself (see §2.7).
- Flex direction swap: `flex flex-col md:flex-row`, with `max-[768px]:items-start` if the row was `items-center`/`justify-between` (see §2.6).
- Show/hide per device only when design requires it: `hidden md:flex` / `md:hidden` — always the structural technique from §2.1, never `opacity-0`/`invisible` as a substitute for actually removing markup from a breakpoint.
- **Before adding padding/margin to any new element, ask: does a parent already supply this?** If yes, add none (see §2.5 and §3.3).
- Images: `lib/common/AppImage` (next/image wrapper) with correct `sizes` attr; `priority` only on the hero image; `alt` always.

## 5. Component Pattern (every section actually looks like this — see `Skills.tsx` for the real file)

```tsx
// components/sections/home/Skills.tsx
"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Container } from "@/lib/common/Container";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-bg-primary py-16 transition-colors duration-300 max-[768px]:py-12 max-[480px]:py-8"
    >
      <Container className="flex flex-col gap-8">
        <Title level={2} className="text-center font-display text-3xl font-bold ...">
          My Skills
        </Title>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-6 ...">
          {skills.map((skill) => (
            <motion.div key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              {/* icon */}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

Note the vertical padding (`py-16 ...`) lives directly on the `<section>`, while `<Container>` alone supplies the horizontal padding — never add horizontal padding to the `<section>` itself (§2.5, §3.3).

- Headings: `lib/common/Title` with `level` prop — exactly one `h1` per page, sections use `h2`, cards `h3`.
- Text: `lib/common/Text`. No shared Button/Badge component right now (§2.4).
- Data always imported from `data/*.ts` — never hardcoded arrays in components.
- Props typed with `interface`, no `any`.
- Server Component by default; `"use client"` only for state/effects/animation — most sections use `framer-motion` (`initial`/`whileInView`/`transition`), which requires `"use client"`.
- Heavy below-the-fold widgets (GitHub graph, Cal.com): `next/dynamic`.
- The persistent header (`components/layout/Navbar.tsx`) is rendered once from `app/layout.tsx`, not per-page — never re-add `<Navbar />` inside a page's content component.

## 6. Definition of Done (per change)

- [ ] Builds with zero TS/ESLint errors
- [ ] Checked at **375px** (mobile), **768px** (tablet), **1280px+** (desktop) — in both light and dark theme
- [ ] No horizontal scroll at any width
- [ ] Only Tailwind classes + tokens from `lib/constants/` used — no hardcoded hex/rgba, no one-off breakpoint chain
- [ ] New/changed section's horizontal gutter matches its siblings at every breakpoint (spot-check against `Hero`/`Certifications` if unsure — see §3.3's anti-patterns)
- [ ] Any horizontally-scrolling list follows §2.7's outer-padding/inner-no-padding pattern
- [ ] Touch targets on mobile are ≥40px (§2.4)
