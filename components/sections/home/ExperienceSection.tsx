"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";
import { Title } from "@/lib/common/Title";
import { Container } from "@/lib/common/Container";
import { getTechIconPath } from "@/lib/tech-icons";
import { experiences } from "@/data/experiences";

const socialIconClasses = cn(
  "flex h-6 w-6 cursor-pointer items-center justify-center border-none bg-transparent p-0",
  "text-text-secondary transition-all duration-200 hover:text-text-primary hover:-translate-y-0.5"
);

/** Renders `**bold**` segments (from data/experiences.ts) as <strong>. */
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    if (!match) return <Fragment key={i}>{part}</Fragment>;
    return (
      <strong key={i} className="font-semibold text-text-primary">
        {match[1]}
      </strong>
    );
  });
}

export function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      id="experience"
      className="w-full bg-bg-primary py-16 transition-colors duration-300 max-[768px]:py-12 max-[480px]:py-8"
    >
      <Container>
        <motion.h2
          className="m-0 mb-12 text-left font-display text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-text-primary transition-colors duration-300 max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="flex flex-col gap-5">
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems[index];
            return (
              <motion.div
                key={index}
                className={cn(
                  "rounded-2xl border border-border-color bg-bg-secondary p-5 transition-all duration-300",
                  "hover:border-border-hover hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:-translate-y-0.5",
                  "max-[480px]:p-3.5"
                )}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 24,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -2 }}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]",
                        "max-[480px]:h-9 max-[480px]:w-9",
                        exp.logoSrc &&
                        "!bg-white p-1.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
                      )}
                      style={
                        exp.logoSrc
                          ? undefined
                          : { backgroundColor: exp.logoColor }
                      }
                    >
                      {exp.logoSrc ? (
                        <AppImage
                          src={exp.logoSrc}
                          alt={`${exp.company} logo`}
                          width={34}
                          height={34}
                          className="h-full w-full object-contain"
                          unoptimized
                        />
                      ) : (
                        <span className="font-display text-lg font-bold text-white max-[480px]:text-sm">
                          {exp.logo}
                        </span>
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <div className="flex min-w-0 flex-col gap-0.5">
                          <Title
                            level={3}
                            className="m-0 truncate font-sans text-lg font-semibold text-text-primary transition-colors duration-300 max-[480px]:text-base"
                          >
                            {exp.company}
                          </Title>
                          <span className="truncate font-sans text-sm font-medium text-text-primary transition-colors duration-300 max-[480px]:text-[0.8rem]">
                            {exp.role}
                          </span>
                        </div>
                        <div className="flex shrink-0 items-center gap-3">
                          <span className="whitespace-nowrap font-sans text-sm text-text-secondary transition-colors duration-300 max-[480px]:text-[0.8rem]">
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <div className="flex shrink-0 items-center gap-2">
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialIconClasses}
                                title="Website"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                              </a>
                            )}
                            {exp.linkedin && (
                              <a
                                href={exp.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialIconClasses}
                                title="LinkedIn"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                                  <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                              </a>
                            )}
                            <button
                              className={cn(
                                socialIconClasses,
                                "hover:translate-y-0"
                              )}
                              onClick={() => toggleExpand(index)}
                              aria-label={isExpanded ? "Collapse" : "Expand"}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                style={{
                                  transform: isExpanded
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                  transition: "transform 0.3s ease",
                                }}
                              >
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies & Tools */}
                <div className="my-4 border-t border-border-color pt-4 transition-colors duration-300">
                  <span className="mb-3 block font-sans text-sm font-semibold uppercase tracking-[0.5px] text-text-primary transition-colors duration-300">
                    Technologies &amp; Tools
                  </span>
                  <div className="flex flex-wrap gap-3 max-[768px]:gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const iconPath = getTechIconPath(tech);
                      return (
                        <div
                          key={techIndex}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2",
                            "border border-border-color bg-bg-secondary transition-all duration-200",
                            "hover:bg-bg-hover hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
                            "max-[768px]:px-2.5 max-[768px]:py-1.5"
                          )}
                        >
                          {iconPath && (
                            <AppImage
                              src={iconPath}
                              alt={tech}
                              width={20}
                              height={20}
                              className="h-5 w-5 shrink-0 object-contain"
                            />
                          )}
                          <span className="whitespace-nowrap font-sans text-sm font-medium text-text-primary transition-colors duration-300 max-[768px]:text-[0.8rem]">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Description — expandable */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden border-t border-border-color pt-4 transition-colors duration-300"
                    >
                      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                        {exp.description.map((item, descIndex) => (
                          <li
                            key={descIndex}
                            className={cn(
                              "relative pl-6 font-sans text-[0.9375rem] leading-[1.6] text-text-secondary transition-colors duration-300",
                              "before:absolute before:left-0 before:text-[1.2rem] before:font-bold before:text-text-primary before:content-['•']"
                            )}
                          >
                            {renderWithBold(item)}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
