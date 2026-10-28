import Link from "next/link";
import { AppImage } from "@/lib/common/AppImage";
import { PROFILE_IMAGE, SITE_JOB_TITLE, SITE_LOCATION, SITE_NAME } from "@/lib/constants/site";
import { SOCIAL_LINKS } from "@/data/socials";

const authorLinkClasses =
  "inline-flex min-h-10 items-center font-sans text-sm font-semibold text-accent-blue no-underline transition-colors duration-200 hover:text-text-primary";

const profileLinks = SOCIAL_LINKS.filter((social) => ["LinkedIn", "GitHub"].includes(social.name));

/** End-of-post author card — a visible, linked byline that matches the Person in the page's structured data. */
export function AuthorBox() {
  return (
    <aside
      aria-label="About the author"
      className="mx-auto mt-16 flex gap-5 rounded-2xl border border-border-color bg-bg-secondary p-6 max-[600px]:flex-col"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
        <AppImage src={PROFILE_IMAGE} alt={SITE_NAME} fill sizes="64px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent-blue">
          Written by
        </span>
        <p className="m-0 font-display text-lg font-semibold text-text-primary">{SITE_NAME}</p>
        <p className="m-0 text-sm leading-[1.6] text-text-secondary">
          {SITE_JOB_TITLE} in {SITE_LOCATION.city}, India. 80+ projects delivered across Flutter, React Native
          and the web.
        </p>
        <div className="mt-1 flex flex-wrap gap-x-5">
          <Link href="/hire-me" className={authorLinkClasses}>
            Hire me
          </Link>
          {profileLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={authorLinkClasses}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
