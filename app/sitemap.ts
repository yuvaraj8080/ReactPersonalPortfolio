import type { MetadataRoute } from "next";
import { absoluteUrl, ogImage, ogImageFor } from "@/lib/seo";
import { projects } from "@/data/projects";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeImage = absoluteUrl(ogImage("home.jpg", "").url);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1, images: [homeImage] },
    { url: absoluteUrl("/projects"), changeFrequency: "weekly", priority: 0.9, images: [homeImage] },
    { url: absoluteUrl("/all-blogs"), changeFrequency: "weekly", priority: 0.8, images: [homeImage] },
    {
      url: absoluteUrl("/hire-me"),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl(ogImage("hire-me.jpg", "").url)],
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(project.detailsUrl),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(ogImageFor("projects", project.slug, project.title).url)],
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: absoluteUrl(`/blog/${blog.slug}`),
    lastModified: blog.date,
    changeFrequency: "monthly",
    priority: 0.6,
    images: [absoluteUrl(ogImageFor("blog", blog.slug, blog.title).url)],
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
