"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

  return (
    <span
      title={tech}
      className={cn(
        "inline-flex h-7 max-w-full shrink-0 items-center gap-1.5 overflow-hidden rounded-md px-2",
        "bg-bg-hover border border-border-color"
      )}
    >
      {iconName && !failed && (
        <AppImage
          src={`/assets/skills/${iconName}.svg`}
          alt=""
          width={22}
          height={22}
          className="!h-[16px] !w-[16px] shrink-0 object-contain"
          onError={() => setFailed(true)}
        />
      )}
      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.7rem] font-semibold text-text-primary">
        {tech}
      </span>
    </span>
  );
}

export function ProjectsGrid({
  projects,
  singleColumn = false,
  showAllProjects = false,
}: ProjectsGridProps) {
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <>
      <div
        className={cn(
          "grid gap-8 py-8 max-[600px]:py-4",
          singleColumn
            ? "grid-cols-1 gap-10"
            : "grid-cols-2 max-[900px]:grid-cols-1"
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
                  singleColumn && project.previewFit === "contain"
                    ? "w-auto max-w-[720px] flex-[0_0_68%] self-start max-[900px]:w-full max-[900px]:max-w-none max-[900px]:flex-none max-[900px]:self-auto"
                    : singleColumn &&
                      "w-auto max-w-[720px] flex-[0_0_68%] max-[900px]:w-full max-[900px]:max-w-none max-[900px]:flex-none"
                )}
                style={
                  project.previewFit === "contain"
                    ? { aspectRatio: "16 / 9" }
                    : undefined
                }
              >
                {imageSrc ? (
                  liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block h-full w-full text-inherit no-underline"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/assets/images/projects/${imageSrc}`}
                        alt={project.title}
                        className={cn(
                          "block h-full w-full object-center",
                          project.previewFit === "contain" ? "object-contain" : "object-cover"
                        )}
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
                      className={cn(
                        "block h-full w-full object-center",
                        project.previewFit === "contain" ? "object-contain" : "object-cover"
                      )}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-bg-hover text-[0.9rem] text-text-secondary">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2.5 px-5 pb-5 pt-4 max-[900px]:p-4">
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
                  <div className="flex min-w-0 flex-wrap content-start items-center gap-[0.4rem]">
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
                <div className="mt-auto flex pt-1">
                  <Link
                    href={project.detailsUrl}
                    className={cn(
                      "flex w-full items-center justify-center gap-[0.4rem] rounded-lg px-4 py-2.5",
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
