"use client";

import { useEffect } from "react";
import { PENDING_SECTION_KEY } from "@/lib/section-navigation";

/**
 * Picks up a section requested via goToSection (lib/section-navigation.ts)
 * from another page and scrolls to it once the home page has mounted.
 * No URL #hash is ever read or written.
 */
export function useHashNavigation() {
  useEffect(() => {
    const id = sessionStorage.getItem(PENDING_SECTION_KEY);
    if (!id) return;
    sessionStorage.removeItem(PENDING_SECTION_KEY);

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    if (!scrollToSection()) {
      setTimeout(() => {
        if (!scrollToSection()) setTimeout(scrollToSection, 1000);
      }, 100);
    }
  }, []);
}
