"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { getTechIcon } from "@/lib/tech-icons";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
  singleColumn?: boolean;
  showAllProjects?: boolean;
}

function TechIcon({ tech }: { tech: string }) {
  const [failed, setFailed] = useState(false);
  const iconName = getTechIcon(tech);
  const showLabel = !iconName || failed;

  return (
    <span
      title={tech}
      className={cn(
        "inline-flex h-7 min-w-7 max-w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-md px-2",
        "bg-bg-hover border border-border-color"
      )}
    >
      {iconName && !failed && (
        <AppImage
          src={`/assets/skills/${iconName}.svg`}
          alt={tech}
          width={22}
          height={22}
          className="!h-[18px] !w-[18px] object-contain"
          onError={() => setFailed(true)}
        />
      )}
      {showLabel && (
        <span className="overflow-hidden text-ellipsis whitespace-nowrap px-1 text-[0.7rem] font-semibold text-text-primary">
          {tech}
        </span>
      )}
    </span>
  );
}

export function ProjectsGrid({
  projects,
  singleColumn = false,
  showAllProjects = false,
}: ProjectsGridProps) {
  const [isHovering, setIsHovering] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (isHovering) {
      document.body.style.cursor = "none";
      window.addEventListener("mousemove", updateCursorPosition);
      return () => {
        window.removeEventListener("mousemove", updateCursorPosition);
        document.body.style.cursor = "";
      };
    }
    document.body.style.cursor = "";
  }, [isHovering, cursorX, cursorY]);

  return (
    <>
      {/* Custom "View project" cursor */}
      {isHovering && (
        <motion.div
          className={cn(
            "pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center gap-2",
            "whitespace-nowrap rounded-[2.5rem] px-6 py-3 backdrop-blur-lg",
            "bg-[rgba(240,240,240,0.98)] shadow-[0_2px_8px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)]",
            "[[data-theme=dark]_&]:bg-[rgba(45,45,45,0.98)] [[data-theme=dark]_&]:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2)]"
          )}
          style={{ x: cursorXSpring, y: cursorYSpring }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-sans text-sm font-semibold tracking-[0.01em] text-[#1a1a1a] [[data-theme=dark]_&]:text-[#f5f5f5]">
            View project
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 shrink-0 stroke-[#1a1a1a] [[data-theme=dark]_&]:stroke-[#f5f5f5]"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </motion.div>
      )}

      <div
        className={cn(
          "mx-auto grid max-w-[1200px] gap-8 py-8 max-[600px]:py-4",
          singleColumn
            ? "grid-cols-1 gap-10"
            : "max-w-[1400px] grid-cols-2 max-[900px]:grid-cols-1"
        )}
      >
        {displayedProjects.map((project, index) => {
          const techList = project.tech
            ? project.tech.split(",").map((t) => t.trim())
            : [];
          const imageSrc = project.src || project.previewSrc;
          const liveUrl = project.liveUrls?.[0]?.url;

          return (
            <motion.article
              key={project.slug || index}
              className={cn(
                "flex flex-col items-stretch overflow-hidden rounded-xl",
                "bg-bg-secondary border border-border-color",
                "transition-[border-color,box-shadow] duration-200",
                "hover:border-border-hover hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
                singleColumn && "min-h-[280px] flex-row max-[900px]:min-h-0 max-[900px]:flex-col"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={cn(
                  "w-full shrink-0 overflow-hidden bg-bg-secondary [aspect-ratio:16/10]",
                  singleColumn &&
                  "w-auto max-w-[720px] flex-[0_0_68%] max-[900px]:w-full max-[900px]:max-w-none max-[900px]:flex-none"
                )}
              >
                {imageSrc ? (
                  liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block h-full w-full text-inherit no-underline"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/assets/images/projects/${imageSrc}`}
                        alt={project.title}
                        className="block h-full w-full object-cover object-center"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-[rgba(0,0,0,0.7)] px-3 py-2 text-[0.8rem] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        View live site →
                      </span>
                    </a>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/assets/images/projects/${imageSrc}`}
                      alt={project.title}
                      className="block h-full w-full object-cover object-center"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-bg-hover text-[0.9rem] text-text-secondary">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 px-6 py-5 max-[900px]:p-5">
                <Title
                  level={3}
                  className="m-0 text-[1.1rem] font-semibold leading-[1.3] text-text-primary"
                >
                  {project.title}
                </Title>
                <Text className="m-0 line-clamp-4 text-[0.85rem] leading-[1.45] text-text-secondary">
                  {project.description}
                </Text>
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.05em] text-text-secondary">
                    Technologies
                  </span>
                  <div className="flex min-w-0 max-h-[calc(2*(28px+0.4rem))] flex-wrap content-start items-center gap-[0.4rem] overflow-hidden">
                    {techList.slice(0, 6).map((tech, techIndex) => (
                      <TechIcon key={techIndex} tech={tech} />
                    ))}
                    {techList.length > 6 && (
                      <span className="px-1 text-xs text-text-secondary">
                        +{techList.length - 6}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-1 flex flex-wrap gap-3">
                  <Link
                    href={project.detailsUrl}
                    className={cn(
                      "inline-flex items-center gap-[0.4rem] rounded-lg px-4 py-2.5",
                      "bg-bg-secondary border border-border-color text-sm font-medium text-text-primary no-underline",
                      "transition-colors duration-200",
                      "hover:bg-bg-hover hover:border-accent-blue hover:text-accent-blue"
                    )}
                  >
                    View Details
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {!showAllProjects && projects.length > 4 && (
        <motion.div
          className="mt-4 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/projects"
              className={cn(
                "inline-block cursor-pointer rounded-lg px-8 py-3.5",
                "bg-bg-secondary border border-border-color font-sans text-base font-medium text-text-primary no-underline",
                "transition-all duration-300",
                "hover:bg-bg-hover hover:border-border-hover hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
              )}
            >
              View all projects
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
