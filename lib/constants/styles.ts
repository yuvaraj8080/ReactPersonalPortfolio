/**
 * Reusable style tokens. Values mirror the original design exactly
 * (globals.css :root variables) — do not invent new values.
 */

export const layout = {
  /** .pageContainer — site-wide horizontal container */
  container:
    "relative mx-auto w-full max-w-[1600px] px-[12rem] max-[1600px]:px-32 max-[1400px]:px-24 max-[1200px]:px-16 max-[900px]:px-8 max-[600px]:px-[16px]",
  /** .section-container — standard vertical rhythm */
  section: "mx-auto max-w-[1200px] py-24 max-[900px]:py-16",
  sectionGap: "mb-12",
} as const;

export const typography = {
  /** .section-heading */
  sectionHeading:
    "text-center text-3xl font-semibold tracking-[0.04em] text-[var(--text-primary)] mb-12 transition-colors duration-300",
  /** .sub-heading */
  subHeading:
    "text-center text-lg font-medium leading-relaxed text-[var(--text-secondary)] mb-12 transition-colors duration-300",
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
