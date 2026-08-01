"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { layout } from "@/lib/constants/styles";
import { useThemeStore } from "@/store/useThemeStore";
import { MobileMenu } from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Blog", href: "/#blogs" },
];

const navElementClasses = cn(
  "m-0 font-sans text-base font-medium text-text-secondary no-underline",
  "border-b-2 border-transparent pb-0.5 transition-colors duration-200",
  "hover:text-text-primary hover:border-text-primary focus:text-text-primary focus:border-text-primary"
);

const iconButtonClasses = cn(
  "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg p-0",
  "bg-bg-secondary border border-border-color text-text-primary",
  "transition-all duration-200 hover:bg-bg-hover hover:border-border-hover hover:-translate-y-0.5"
);

export function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme, init } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    init();
  }, [init]);

  // Mobile-only auto-hide header: hides on scroll down, reveals on scroll up,
  // always visible at the very top of the page. Desktop is unaffected.
  // A minimum-delta threshold ignores the sub-pixel jitter that
  // `scroll-behavior: smooth` (app/globals.css) produces.
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const DIRECTION_THRESHOLD = 8;

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsHeaderHidden(false);
        lastScrollY.current = window.scrollY;
        return;
      }
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      if (currentScrollY <= 10) {
        setIsHeaderHidden(false);
        lastScrollY.current = currentScrollY;
      } else if (delta > DIRECTION_THRESHOLD) {
        setIsHeaderHidden(true);
        lastScrollY.current = currentScrollY;
      } else if (delta < -DIRECTION_THRESHOLD) {
        setIsHeaderHidden(false);
        lastScrollY.current = currentScrollY;
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsHeaderHidden(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) setIsHeaderHidden(false);
      return next;
    });
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    router.push(href);
  };

  const handleMobileNavigate = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Mobile-only spacer: the real header below is fixed, so this reserves
          its layout space (position: sticky is unreliable here because
          app/globals.css sets overflow-x: hidden on html/body). */}
      <div className="h-[74px] md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 top-0 z-[100] md:relative md:inset-x-auto md:top-auto">
        <motion.header
          className={cn(
            layout.container,
            "flex items-center justify-between py-4",
            "bg-bg-primary border-b border-border-color transition-colors duration-300",
            "before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-px",
            "before:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)]"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: isHeaderHidden ? -90 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="inline-block no-underline">
            <motion.div
              className={cn(
                "group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl",
                "bg-[linear-gradient(135deg,var(--accent-blue),#2563eb)]",
                "border border-[rgba(59,130,246,0.3)]",
                "shadow-[0_2px_8px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
                "transition-all duration-300",
                "hover:shadow-[0_4px_16px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-[rgba(59,130,246,0.5)]",
                "max-[768px]:h-[42px] max-[768px]:w-[42px]"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  "bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]"
                )}
              />
              <span className="relative z-[1] font-display text-xl font-bold tracking-[0.02em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] max-[768px]:text-[1.1rem]">
                KN
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav — hidden on mobile, replaced by hamburger menu */}
          <div className="hidden items-center justify-between p-2 md:flex">
            <nav aria-label="Main Navigation" className="z-[3] rounded-xl px-8 py-2 text-white">
              <ul className="m-0 flex list-none gap-6 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      className={navElementClasses}
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link.href)}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <motion.button
              className={iconButtonClasses}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.08, rotate: 12 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {theme === "dark" ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </motion.button>

            {/* Desktop: full "Download CV" pill */}
            <motion.a
              href="/assets/pdf/Krishay_Nair_Resume.pdf"
              className="z-[3] hidden md:inline-block"
              download="resume"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span
                className={cn(
                  "inline-flex h-[2.7rem] w-32 cursor-pointer items-center justify-center rounded-lg",
                  "bg-bg-primary border border-border-color text-text-primary",
                  "font-sans text-[1.05rem] font-semibold",
                  "transition-all duration-200 hover:bg-bg-hover hover:border-border-hover hover:-translate-y-0.5"
                )}
              >
                Download CV
              </span>
            </motion.a>

            {/* Mobile: compact icon-only "Download CV" */}
            <motion.a
              href="/assets/pdf/Krishay_Nair_Resume.pdf"
              className={cn(iconButtonClasses, "md:hidden")}
              download="resume"
              aria-label="Download CV"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </motion.a>

            {/* Mobile hamburger / close toggle */}
            <button
              className={cn(iconButtonClasses, "md:hidden")}
              onClick={handleToggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </motion.header>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          links={NAV_LINKS}
          onNavigate={handleMobileNavigate}
        />
      </div>
    </>
  );
}
