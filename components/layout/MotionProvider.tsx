"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Loads Framer Motion's animation + hover/tap/in-view features once for the whole app.
 * Components use the slim `m.*` elements (`import * as m from "framer-motion/m"`) instead of
 * the full `motion.*` ones, which keeps the library's weight out of every route's bundle.
 * `strict` throws if someone reintroduces `motion.*`, so a regression can't ship quietly.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
