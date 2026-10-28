import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants/site";
import {
  blogsPageJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  buildTitle,
  ogImage,
} from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { blogs } from "@/data/blogs";
import { AllBlogsContent } from "@/components/sections/blog/AllBlogsContent";

const title = buildTitle("Blog: Flutter, React & AI Coding Workflow");
const description = `Articles by ${SITE_NAME} on Flutter and React case studies, AI-assisted development with Claude Code and Cursor, and how to ship production apps fast.`;

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/all-blogs",
  image: ogImage("home.jpg", `${SITE_NAME} — blog on Flutter, React and AI-assisted development`),
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          blogsPageJsonLd(blogs, title, description),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/all-blogs" },
          ]),
        ]}
      />
      <AllBlogsContent />
    </>
  );
}
