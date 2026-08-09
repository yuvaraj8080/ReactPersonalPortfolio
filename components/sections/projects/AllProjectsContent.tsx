"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { layout } from "@/lib/constants/styles";
import { Footer } from "@/components/layout/Footer";
import { AppImage } from "@/lib/common/AppImage";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { getTechIcon } from "@/lib/tech-icons";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const rowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function TechBadge({ tech }: { tech: string }) {
  const [failed, setFailed] = useState(false);
  const iconName = getTechIcon(tech);

  return (
    <span
      title={tech}
      className="inline-flex h-7 shrink-0 items-center gap-1.5 overflow-hidden rounded-md border border-border-color bg-bg-hover px-2"
    >
      {iconName && !failed && (
        <AppImage
          src={`/assets/skills/${iconName}.svg`}
          alt=""
          width={16}
          height={16}
          className="shrink-0 object-contain"
          onError={() => setFailed(true)}
        />
      )}
      <span className="whitespace-nowrap text-[0.7rem] font-semibold text-text-primary">
        {tech}
      </span>
    </span>
  );
}

interface ProjectRowProps {
  project: Project;
  reverse: boolean;
}

function ProjectRow({ project, reverse }: ProjectRowProps) {
  const techList = project.tech ? project.tech.split(",").map((t) => t.trim()) : [];
  const imageSrc = project.src || project.previewSrc;
  const liveUrl = project.liveUrls?.[0]?.url;

  const imageVariants: Variants = {
    hidden: { clipPath: reverse ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      transition: { duration: 0.7, ease: EASE },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE, delay: 0.2 },
    },
  };

  const image = imageSrc ? (
    <AppImage
      src={`/assets/images/projects/${imageSrc}`}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={cn(
        "transition-transform duration-[400ms] group-hover:scale-105",
        project.previewFit === "contain" ? "object-contain" : "object-cover"
      )}
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-bg-hover text-sm text-text-secondary">
      {project.title}
    </div>
  );

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={rowVariants}
    >
      <div
        className={cn(
          "group flex flex-col overflow-hidden rounded-xl border border-border-color bg-bg-secondary",
          "shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300",
          "hover:border-border-hover hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",
          "md:flex-row md:items-stretch",
          reverse && "md:flex-row-reverse"
        )}
      >
        <motion.div
          variants={imageVariants}
          className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-bg-hover md:w-1/2"
        >
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/image relative block h-full w-full"
            >
              {image}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 bg-[rgba(0,0,0,0.7)] px-3 py-2 text-[0.8rem] font-medium text-white",
                  "opacity-0 transition-opacity duration-200 group-hover/image:opacity-100"
                )}
              >
                View live site →
              </span>
            </a>
          ) : (
            image
          )}
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-col items-start gap-3 p-5 md:w-1/2 md:p-8"
        >
          <Title
            level={3}
            className={cn(
              "m-0 font-display text-3xl font-semibold leading-[1.3] text-text-primary",
              "transition-colors duration-200 group-hover:text-accent-blue max-[768px]:text-2xl"
            )}
          >
            {project.title}
          </Title>

          <Text className="m-0 line-clamp-3 text-base leading-[1.6] text-text-secondary">
            {project.description}
          </Text>

          {techList.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {techList.slice(0, 6).map((tech, techIndex) => (
                <TechBadge key={techIndex} tech={tech} />
              ))}
              {techList.length > 6 && (
                <span className="px-1 text-xs text-text-secondary">
                  +{techList.length - 6}
                </span>
              )}
            </div>
          )}

          <Link
            href={project.detailsUrl}
            className={cn(
              "mt-1 inline-flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-sm font-semibold text-text-primary no-underline",
              "transition-all duration-200 hover:border-accent-blue hover:bg-accent-blue hover:text-white"
            )}
          >
            View Details
            <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function AllProjectsContent() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-200">
      <main
        className={cn(
          layout.container,
          "py-8 pt-32 max-[1200px]:pt-24 max-[900px]:pt-20 max-[600px]:py-4 max-[600px]:pt-16"
        )}
      >
        <h1
          className={cn(
            "mb-4 text-center text-[3.5rem] font-bold leading-[1.2] text-text-primary transition-colors duration-200",
            "max-[1200px]:text-[2.5rem] max-[900px]:text-[2rem] max-[600px]:text-[1.75rem]"
          )}
        >
          All Projects
        </h1>

        <p className="mx-auto mb-16 max-w-[600px] text-center text-lg text-text-secondary transition-colors duration-200 max-[900px]:mb-12 max-[900px]:text-base">
          A collection of my work showcasing various technologies and solutions
        </p>

        <div className="mx-auto flex max-w-[1000px] flex-col gap-16 py-8 max-[768px]:gap-10 max-[600px]:py-4">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
