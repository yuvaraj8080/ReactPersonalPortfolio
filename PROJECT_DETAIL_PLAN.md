# Project Detail Page — Redesign Plan

Scope: `app/projects/[id]/page.tsx`, `components/sections/projects/ProjectDetail.tsx`, `components/sections/projects/ProjectGallery.tsx`, `types/project.ts`, `data/projects.ts`. Nothing outside this project-detail feature is touched.

## 1. Current state (already exists — this is a fix/redesign, not a new build)

Good news: the "reusable model" you asked for already exists end-to-end, it just has bugs and a few duplicated blocks.

- **Data model** — `types/project.ts` exports a `Project` interface (title, slug, description, `detailedDescription: {overview, features[], technicalDetails[], impact}`, `tech`, `images[]`, `certificates?`, `liveUrls?`, `githubUrl`, `achievements[]`, …).
- **JSON-equivalent data** — `data/projects.ts` is a typed array of 13 `Project` entries (this is your "JSON" — TypeScript objects, type-checked against the model above).
- **Reusable detail screen** — `components/sections/projects/ProjectDetail.tsx` takes `{ project, relatedProjects }` as props and is the *same component* rendered for every project.
- **Dynamic route** — `app/projects/[id]/page.tsx` looks up a project by slug from `data/projects.ts`, pre-generates a static page per project (`generateStaticParams`), and renders `<ProjectDetail>`. This is exactly the "pass data in, reuse the screen" pattern you described — it's already wired up.

So the ask isn't "build a project detail page" — it's "fix these bugs in the existing one and remove the duplication."

## 2. Confirmed bugs / gaps (verified in the running site, not guessed)

1. **Timeline / Role / Status are hardcoded**, not from data. `ProjectDetail.tsx` lines ~104–122 literally render the strings `"2 months"`, `"Full Stack"`, `"Completed"` for *every* project regardless of which one you're viewing. `Project` has no `timeline`/`role`/`status` fields to source this from.
2. **Mobile image carousel wastes most of the box.** The gallery box is a fixed height (`h-[350px]` on mobile) and images use `object-contain`. Your screenshots are wide/landscape (website screenshots), so at a narrow fixed-height box they shrink to fit width and leave a large empty black band above/below the image. Confirmed on a live `375px` screenshot — roughly 60% of the box is empty black space.
3. **Left/right arrow buttons show on mobile too.** You asked for these removed on mobile in favor of a scrollable list; currently `ProjectGallery.tsx` renders the same `←`/`→` circular buttons at every breakpoint (just shrunk via `max-[768px]:h-10 max-[768px]:w-10`), confirmed visible in the mobile screenshot.
4. **Padding doesn't match the rest of the site.** `ProjectDetail.tsx`'s outer wrapper uses its own one-off `max-w-[1400px] p-8 max-[768px]:p-4` instead of the shared `<Container>` / `layout.container` token every other section uses (`px-[12rem]` down through the `1600/1400/1200/900/600` chain). This is exactly the anti-pattern CLAUDE.md §3.3 calls out — the detail page's horizontal gutter visibly doesn't match the home page's.
5. **Code duplication.** The Overview / Key Features / Technical Details / Impact sections (`ProjectDetail.tsx` lines ~177–348) are four near-identical copies of the same "show first N, expand/collapse the rest with a `View More Details →` button" block. This should be one reusable component parameterized by content.
6. **Stale placeholder data.** 9 of 13 projects' `githubUrl` still points at `github.com/KrishayNair/...` (the old fictional persona this portfolio started from) instead of your real GitHub. This isn't a UI bug but it is "wrong data" that would ship publicly — flagging it here so you can confirm your real GitHub username before I fix it.

## 3. Proposed changes

### 3a. Extend the data model (`types/project.ts` + `data/projects.ts`)
Add to `Project`:
```ts
timeline: string;   // e.g. "2 months"
role: string;        // e.g. "Full Stack"
status: "Completed" | "In Progress" | "Archived";
```
Fill real values per project in `data/projects.ts` (I'll need your input on timeline/role/status for the 12 non-LegAlly projects — LegAlly's current hardcoded values look plausible but should be confirmed too).

### 3b. Deduplicate the four expandable sections
Extract one `ExpandableSection` component (title, `previewCount`, `items: string[]` or a single long string, section key) and use it for Overview/Features/Technical/Impact instead of four hand-rolled copies. Same visual output, ~150 fewer duplicated lines.

### 3c. Fix padding to match the rest of the site
Replace the outer `max-w-[1400px] p-8 max-[768px]:p-4` wrapper with `<Container>` (from `lib/common/Container`), matching every other page's gutter at every breakpoint. Keep the page's own `max-w-[1400px]`/vertical spacing as-is where it doesn't conflict.

### 3d. Fix the mobile gallery
- **≥768px (desktop/tablet):** keep the current arrow-button + fixed-height carousel — this already looks right in the reference screenshots and on desktop here.
- **<768px (mobile):** replace the arrow-button carousel with a horizontally-scrolling list of images (same pattern as `Achievements.tsx` — outer `Container` padding, inner `overflow-x-auto` track with zero extra padding, per CLAUDE.md §2.7), so the user scrolls/swipes through screenshots instead of tapping arrows. Each image gets a sensible `aspect-video`-style box (or auto height) instead of the fixed `350px` box that currently starves landscape screenshots of space.
- Dot pagination stays desktop-only (it's meaningless once mobile is a free-scrolling list).

### 3e. Fix stale GitHub URLs
Once you confirm your real GitHub username, replace all 9 `github.com/KrishayNair/...` URLs in `data/projects.ts`.

## 4. Explicitly NOT changing
- `ProjectsGrid.tsx` (the card grid on the home page / `/projects`) — out of scope unless you say otherwise.
- Any section outside `app/projects/**` and `components/sections/projects/**`.
- The existing section *content* (Overview/Features/etc. copy) — only the rendering mechanism (3b) changes, not the words, unless you flag specific copy to fix.

## 5. Open questions before I write code
1. Do you want the `timeline` / `role` / `status` values filled in now for all 13 projects, or should I leave placeholders (e.g. `"—"`) for the ones you haven't decided yet?
2. What's your real GitHub username, so I can fix the 9 stale `KrishayNair` URLs?
3. For the mobile gallery redesign — full-bleed edge-to-edge scroll, or should it keep the same inset as the rest of the mobile page (`Container` padding on the first/last image, like `Achievements.tsx`)?
