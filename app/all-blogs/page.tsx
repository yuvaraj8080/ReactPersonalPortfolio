import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants/site";
import { AllBlogsContent } from "@/components/sections/blog/AllBlogsContent";

const title = "Blog — Yuvaraj Dekhane";
const description =
  "Notes on AI-assisted development, shipping production apps fast, and the tools and workflows behind them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/all-blogs",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/all-blogs`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  return <AllBlogsContent />;
}
