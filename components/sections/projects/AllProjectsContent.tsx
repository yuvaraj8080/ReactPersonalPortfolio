"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { layout } from "@/lib/constants/styles";
import { Footer } from "@/components/layout/Footer";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { projects } from "@/data/projects";

export function AllProjectsContent() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-200">
      <main
        className={cn(
          layout.container,
          "py-8 pt-32 max-[1200px]:pt-24 max-[900px]:pt-20 max-[600px]:py-4 max-[600px]:pt-16"
        )}
      >
        <motion.h1
          className={cn(
            "mb-4 text-center text-[3.5rem] font-bold leading-[1.2] text-text-primary transition-colors duration-200",
            "max-[1200px]:text-[2.5rem] max-[900px]:text-[2rem] max-[600px]:text-[1.75rem]"
          )}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          All Projects
        </motion.h1>

        <motion.p
          className="mx-auto mb-16 max-w-[600px] text-center text-lg text-text-secondary transition-colors duration-200 max-[900px]:mb-12 max-[900px]:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A collection of my work showcasing various technologies and solutions
        </motion.p>

        <ProjectsGrid projects={projects} showAllProjects />
      </main>

      <Footer />
    </div>
  );
}
