import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants/site";
import { HomeContent } from "@/components/sections/home/HomeContent";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return <HomeContent />;
}
