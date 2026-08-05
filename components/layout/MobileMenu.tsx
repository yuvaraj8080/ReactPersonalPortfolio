"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileMenuLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: MobileMenuLink[];
  onNavigate: (href: string) => void;
}

const menuLinkClasses = cn(
  "block w-full rounded-lg px-4 py-3 font-sans text-base font-medium text-text-primary no-underline",
  "transition-colors duration-200 hover:bg-bg-hover"
);

/** Mobile nav dropdown: link list + Download CV, shown below the header on <768px. */
export function MobileMenu({ isOpen, links, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          className={cn(
            "absolute inset-x-0 top-full z-[99] overflow-hidden md:hidden",
            "bg-bg-primary border-b border-border-color shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
          )}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 px-6 py-4"
          >
            {links.map((link) => (
              <button
                key={link.name}
                className={menuLinkClasses}
                onClick={() => onNavigate(link.href)}
              >
                {link.name}
              </button>
            ))}

            <div className="mt-3 border-t border-border-color pt-4">
              <a
                href="/assets/pdf/resume.pdf"
                download="resume"
                className={cn(
                  "flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg",
                  "bg-bg-primary border border-border-color text-text-primary",
                  "font-sans text-sm font-semibold",
                  "transition-all duration-200 hover:bg-bg-hover hover:border-border-hover"
                )}
              >
                <svg
                  width="16"
                  height="16"
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
                Download CV
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
