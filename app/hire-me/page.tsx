import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants/site";
import {
  breadcrumbJsonLd,
  buildMetadata,
  buildTitle,
  faqPageJsonLd,
  hireMePageJsonLd,
  ogImage,
} from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { HIRE_FAQ, HIRE_SERVICES } from "@/data/hireMe";
import { HireMeContent } from "@/components/sections/hire/HireMeContent";

const TITLE = buildTitle("Freelance Flutter & React Native Developer");
const DESCRIPTION =
  "Hire Yuvaraj Dekhane, a freelance Flutter, React Native and Next.js developer in Noida, India. Project-based app and website builds, 80+ delivered. Get a quote.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/hire-me",
  image: ogImage("hire-me.jpg", `Hire ${SITE_NAME} — freelance Flutter, React Native & Next.js developer`),
});

export default function HireMePage() {
  return (
    <>
      <JsonLd
        data={[
          ...hireMePageJsonLd({ title: TITLE, description: DESCRIPTION }, HIRE_SERVICES),
          faqPageJsonLd(HIRE_FAQ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Hire Me", path: "/hire-me" },
          ]),
        ]}
      />
      <HireMeContent />
    </>
  );
}
