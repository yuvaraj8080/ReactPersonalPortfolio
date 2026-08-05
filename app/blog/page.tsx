import type { Metadata } from "next";
import { AllBlogsContent } from "@/components/sections/blog/AllBlogsContent";

export const metadata: Metadata = {
  title: "Blog — Yuvaraj Dekhane",
  description:
    "Notes on AI-assisted development, shipping production apps fast, and the tools and workflows behind them.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <AllBlogsContent />;
}
