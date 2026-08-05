import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/sections/projects/ProjectDetail";
import { getBriefText } from "@/lib/text";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug != null && String(p.slug).trim() !== "")
    .map((p) => ({ id: String(p.slug) }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);
  if (!project) return { title: "Project not found" };
  const description = getBriefText(project.description);
  const previewImage = `/assets/images/projects/${project.previewSrc}`;
  return {
    title: `${project.title} — Yuvaraj Dekhane`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description,
      type: "website",
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      images: [previewImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return <ProjectDetail project={project} relatedProjects={relatedProjects} />;
}
