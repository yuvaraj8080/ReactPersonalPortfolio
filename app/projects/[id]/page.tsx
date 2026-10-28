import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/lib/constants/site";
import {
  breadcrumbJsonLd,
  buildMetadata,
  buildTitle,
  faqPageJsonLd,
  ogImageFor,
  projectDescription,
  projectJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { projects } from "@/data/projects";
import { blogs } from "@/data/blogs";
import { buildProjectFaq } from "@/lib/project-faq";
import { ProjectDetail } from "@/components/sections/projects/ProjectDetail";

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
  if (!project) {
    return { title: "Project not found", robots: { index: false, follow: false } };
  }
  return buildMetadata({
    title: buildTitle(project.seoTitle ?? project.title),
    description: projectDescription(project),
    path: `/projects/${project.slug}`,
    image: ogImageFor("projects", project.slug, `${project.title} — project by ${SITE_NAME}`),
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const faq = buildProjectFaq(project);

  // Only the fields the card needs cross the server→client boundary (not whole post bodies).
  const relatedPosts = blogs
    .filter((blog) => blog.relatedProjectSlugs?.includes(project.slug))
    .map(({ slug, title, excerpt, category, coverImage }) => ({
      slug,
      title,
      excerpt,
      category,
      coverImage,
    }));

  return (
    <>
      <JsonLd
        data={[
          projectJsonLd(project),
          faqPageJsonLd(faq),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <ProjectDetail
        project={project}
        relatedProjects={relatedProjects}
        relatedPosts={relatedPosts}
        faq={faq}
      />
    </>
  );
}
