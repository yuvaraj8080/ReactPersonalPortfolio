export interface NavLink {
  name: string;
  href: string;
}

/** Site-wide section navigation — shared by Navbar, MobileMenu, and Footer. */
export const NAV_LINKS: NavLink[] = [
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Blog", href: "/#blogs" },
];

/** Freelance landing page — in the header nav and the footer so every page links to it. */
export const HIRE_LINK: NavLink = { name: "Hire Me", href: "/hire-me" };

/** Real routes (not in-page sections) — gives every page a crawlable path to the key pages. */
export const PAGE_LINKS: NavLink[] = [
  HIRE_LINK,
  { name: "All Projects", href: "/projects" },
  { name: "All Blog Posts", href: "/all-blogs" },
];
