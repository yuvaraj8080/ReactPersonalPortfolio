"use client";

import { create } from "zustand";

export type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  /** True once the client has read the persisted theme (avoids hydration mismatch). */
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  /** Called once on mount to sync store with the attribute set by the inline script. */
  init: () => void;
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "dark",
  mounted: false,
  setTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const next: Theme = get().theme === "dark" ? "light" : "dark";
    applyTheme(next);
    set({ theme: next });
  },
  init: () => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    set({ theme: saved, mounted: true });
  },
}));
