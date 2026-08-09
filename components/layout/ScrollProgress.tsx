"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <motion.div
      className="scroll-progress-bar fixed inset-x-0 top-0 z-[9999] h-[3px] origin-left bg-[linear-gradient(90deg,var(--accent-blue),#2563eb)]"
      style={{ scaleX }}
    />
  );
}
