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
