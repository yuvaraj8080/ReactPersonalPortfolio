import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/lib/constants/site";
import {
  blogFaqJsonLd,
  blogPostJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  buildTitle,
  clampDescription,
  ogImageFor,
} from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { blogs } from "@/data/blogs";
import { BlogDetail } from "@/components/sections/blog/BlogDetail";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return { title: "Post not found", robots: { index: false, follow: false } };
  }
  return buildMetadata({
    title: buildTitle(blog.seoTitle ?? blog.title),
    description: blog.seoDescription ?? clampDescription(blog.excerpt),
    path: `/blog/${blog.slug}`,
    image: ogImageFor("blog", blog.slug, `${blog.title} — article by ${SITE_NAME}`),
    article: { publishedTime: blog.date, modifiedTime: blog.updated, tags: blog.tags },
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);
  const faq = blogFaqJsonLd(blog);

  return (
    <>
      <JsonLd
        data={[
          blogPostJsonLd(blog),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/all-blogs" },
            { name: blog.title, path: `/blog/${blog.slug}` },
          ]),
          ...(faq ? [faq] : []),
        ]}
      />
      <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
