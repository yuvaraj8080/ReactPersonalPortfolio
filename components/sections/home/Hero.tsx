"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";
import { Container } from "@/lib/common/Container";
import { HERO_TECH_STACK, HERO_TITLE } from "@/data/hero";

const ctaBaseClasses = cn(
  "relative z-[1] flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg px-6 py-3.5",
  "text-[0.9375rem] font-medium no-underline transition-all duration-300",
  "max-[768px]:w-full max-[768px]:justify-center"
);

const socialLinkClasses = cn(
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text-secondary",
  "transition-all duration-200",
  "hover:text-accent-blue hover:bg-bg-hover",
  "hover:shadow-[0_4px_12px_rgba(59,130,246,0.3),0_0_0_1px_rgba(59,130,246,0.15)]"
);

const buttonGlowClasses = cn(
  "pointer-events-none absolute -inset-1 z-[-1] rounded-lg opacity-0 blur-lg transition-opacity duration-300",
  "bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)]"
);

export function Hero() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const titleWords = HERO_TITLE.split(" ");

  return (
    <section
      id="home"
      className="relative flex w-full items-center justify-center overflow-hidden bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16"
    >
      <Container className="z-[1] flex items-center justify-center">
        {!hasMounted ? (
          <div
            className="pointer-events-none min-h-80 w-full opacity-0"
            aria-hidden="true"
          />
        ) : (
          <motion.div
            className="flex w-full max-w-full flex-col gap-8 max-[768px]:gap-6 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_span]:pointer-events-auto"
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="m-0 w-full max-w-full font-display text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-text-primary transition-colors duration-300 max-[768px]:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {titleWords.map((word, index) => {
                const isName = word === "Yuvaraj" || word === "Dekhane";
                return (
                  <motion.span
                    key={index}
                    className={cn(
                      isName &&
                      "relative inline-block cursor-default font-bold"
                    )}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={
                      isName
                        ? {
                          scale: 1.05,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                        }
                        : {}
                    }
                  >
                    {isName ? (
                      <>
                        <motion.span className="relative inline-block text-accent-blue [filter:drop-shadow(0_0_8px_rgba(59,130,246,0.35))]">
                          {word}
                        </motion.span>
                        {word === "Yuvaraj" && " "}
                      </>
                    ) : (
                      word
                    )}
                    {index < titleWords.length - 1 && word !== "Yuvaraj" && " "}
                  </motion.span>
                );
              })}
            </motion.h1>

            <motion.p
              className="m-0 text-base leading-[1.7] text-text-secondary transition-colors duration-300 max-[768px]:text-[0.9375rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              I design and ship production-ready apps across Android, iOS,
              and the web — from React Native and Flutter apps to full-stack
              platforms and automation tools. 80+ projects delivered, 25+
              live in production, including a CRM platform serving 500+
              active clients.
            </motion.p>

            {/* Tech Stack Badges */}
            <motion.div
              className="mt-4 flex flex-wrap gap-3 max-[768px]:gap-2"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {HERO_TECH_STACK.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={cn(
                    "group flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2",
                    "bg-bg-secondary border border-border-color text-sm font-medium text-text-primary",
                    "transition-all duration-200",
                    "hover:bg-bg-hover hover:border-accent-blue",
                    "hover:shadow-[0_4px_12px_rgba(59,130,246,0.25),0_0_0_1px_rgba(59,130,246,0.15)]",
                    "max-[768px]:px-3 max-[768px]:py-1.5 max-[768px]:text-[0.8rem]"
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 20,
                    delay: 0.7 + index * 0.04,
                  }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AppImage
                    src={`/assets/skills/${tech.icon}.svg`}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-4 flex flex-wrap gap-4 max-[768px]:flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="/assets/pdf/Yuvaraj_Dekhane_Resume.pdf"
                download="Yuvaraj_Dekhane_Resume.pdf"
                className={cn(
                  ctaBaseClasses,
                  "bg-bg-primary border border-border-color text-text-primary",
                  "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
                  "before:bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(37,99,235,0.08))]",
                  "hover:before:opacity-100 hover:bg-bg-hover hover:border-accent-blue",
                  "hover:shadow-[0_4px_16px_rgba(59,130,246,0.25),0_0_0_1px_rgba(59,130,246,0.15)]"
                )}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className={buttonGlowClasses}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  initial={{ opacity: 0 }}
                />
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </motion.svg>
                <span>Resume / CV</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.a
                  href="/#contact"
                  className={cn(
                    ctaBaseClasses,
                    "bg-text-primary border border-text-primary text-bg-primary",
                    "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
                    "before:bg-[linear-gradient(135deg,rgba(59,130,246,0.2),rgba(37,99,235,0.2))]",
                    "hover:before:opacity-100 hover:border-accent-blue",
                    "hover:bg-[linear-gradient(135deg,var(--accent-blue),#2563eb)]",
                    "hover:shadow-[0_4px_16px_rgba(59,130,246,0.35),0_0_0_1px_rgba(59,130,246,0.2)]"
                  )}
                  onClick={(e) => {
                    const el = document.getElementById("contact");
                    if (el && window.location.pathname === "/") {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                      window.history.replaceState(null, "", "/#contact");
                    }
                  }}
                >
                  <motion.div
                    className={buttonGlowClasses}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    initial={{ opacity: 0 }}
                  />
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    whileHover={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </motion.svg>
                  <span>Get in touch</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-4 flex items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/yuvaraj-dekhane-473064297/"
                className={socialLinkClasses}
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </motion.svg>
              </motion.a>
              <motion.a
                target="_blank"
                href="https://github.com/yuvaraj8080"
                className={socialLinkClasses}
                aria-label="GitHub"
                whileHover={{ scale: 1.2, y: -4, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="mailto:tech@astrovedansh.com"
                className={socialLinkClasses}
                aria-label="Email"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  whileHover={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </motion.svg>
              </motion.a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/yuvaraj_dekhane/"
                className={socialLinkClasses}
                aria-label="Instagram"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
