"use client";

import { useEffect } from "react";

const VALID_HASHES = [
  "#projects",
  "#blogs",
  "#about",
  "#experience",
  "#github-contributions",
  "#certifications",
  "#contact",
];

/**
 * Home-page hash navigation (extracted from the original pages/index.tsx):
 * cleans up double hashes and smooth-scrolls to the section when the page
 * loads with a hash or the hash changes.
 */
export function useHashNavigation() {
  useEffect(() => {
    const cleanUpDoubleHashes = () => {
      const currentUrl = window.location.href;
      if (currentUrl.includes("##")) {
        window.history.replaceState(null, "", currentUrl.replace(/##/g, "#"));
      }
    };

    cleanUpDoubleHashes();
    window.addEventListener("hashchange", cleanUpDoubleHashes);
    return () => window.removeEventListener("hashchange", cleanUpDoubleHashes);
  }, []);

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (!hash || !VALID_HASHES.includes(hash)) return;

      const scrollToSection = () => {
        const sectionElement = document.getElementById(hash.substring(1));
        if (!sectionElement) return false;
        const absoluteElementTop =
          sectionElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: absoluteElementTop - 100, behavior: "smooth" });
        return true;
      };

      if (!scrollToSection()) {
        setTimeout(() => {
          if (!scrollToSection()) {
            setTimeout(scrollToSection, 1000);
          }
        }, 100);
      }
    };

    setTimeout(handleHashNavigation, 200);
    window.addEventListener("hashchange", handleHashNavigation);
    if (window.location.hash) {
      setTimeout(handleHashNavigation, 500);
    }
    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, []);
}
