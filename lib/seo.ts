import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  PROFILE_IMAGE,
  SITE_DESCRIPTION,
  SITE_JOB_TITLE,
  SITE_LANG,
  SITE_LOCALE,
  SITE_LOCATION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants/site";
import { SOCIAL_LINKS } from "@/data/socials";
import { SKILLS } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { experiences } from "@/data/experiences";
import { formatSkillName } from "@/lib/skill-names";
import { getBriefText } from "@/lib/text";
import type { Blog, BlogContentBlock, FaqItem, Project } from "@/types";

/**
 * Server-only SEO helpers (uses fs for the share-image lookup) — import from pages,
 * layout and sitemap, never from a "use client" component.
 */

type JsonLdNode = Record<string, unknown>;

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const PERSON_REF: JsonLdNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_NAME,
  url: SITE_URL,
};

/* ------------------------------------------------------------------ */
/* URLs, titles, descriptions                                          */
/* ------------------------------------------------------------------ */

export function absoluteUrl(pathname = "/") {
  return pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;
}

/** "<keyword> | Yuvaraj Dekhane", dropping the brand only when it would push past 60 chars. */
export function buildTitle(keyword: string) {
  const withBrand = `${keyword} | ${SITE_NAME}`;
  return withBrand.length <= 60 ? withBrand : keyword;
}

/** Trims to `max` chars at a word boundary so snippets never cut mid-word. */
export function clampDescription(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return `${base.replace(/[\s.,;:—-]+$/, "")}…`;
}

export function projectDescription(project: Project) {
  const brief = getBriefText(project.description).replace(/\.+$/, "");
  const stack = project.tech
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  // Prefer the longest "brief + stack" that fits in 160 chars; shrink the stack before ever truncating.
  for (let count = Math.min(4, stack.length); count >= 1; count--) {
    const text = `${brief}. Built by ${SITE_NAME} with ${stack.slice(0, count).join(", ")}.`;
    if (text.length <= 160) return text;
  }
  const withAuthor = `${brief}. Built by ${SITE_NAME}.`;
  return withAuthor.length <= 160 ? withAuthor : clampDescription(brief);
}

/* ------------------------------------------------------------------ */
/* Share images (1200x630 JPEGs in public/assets/og/, < 300 KB)         */
/* ------------------------------------------------------------------ */

const OG_SIZE = { width: 1200, height: 630 } as const;

export function ogImage(file: string, alt: string) {
  return { url: `/assets/og/${file}`, ...OG_SIZE, alt };
}

export type OgImage = ReturnType<typeof ogImage>;

/** Per-page share image; falls back to the brand banner if a new page has none yet. */
export function ogImageFor(kind: "projects" | "blog", slug: string, alt: string): OgImage {
  const file = `${kind}/${slug}.jpg`;
  const exists = fs.existsSync(path.join(process.cwd(), "public", "assets", "og", file));
  return ogImage(exists ? file : "home.jpg", alt);
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image: OgImage;
  article?: { publishedTime: string; modifiedTime?: string; tags: string[] };
}

/**
 * One complete Metadata object per page. A page-level `openGraph`/`twitter` REPLACES the
 * layout's (it isn't deep-merged), so every field a share card needs is set here —
 * including the image, which file-based opengraph-image does not inherit into child routes.
 */
export function buildMetadata({ title, description, path: pathname, image, article }: BuildMetadataInput): Metadata {
  const base = {
    title,
    description,
    url: absoluteUrl(pathname),
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    images: [image],
  };
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: article
      ? {
          ...base,
          type: "article",
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime ?? article.publishedTime,
          authors: [SITE_NAME],
          tags: article.tags,
        }
      : { ...base, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */

const PERSON_DESCRIPTION = `Flutter, React Native and full-stack developer in ${SITE_LOCATION.city}, India with 80+ apps built and 25+ live in production. Led a Flutter & Dart bootcamp at DMX RGIT and holds hackathon and research-conference credentials.`;

const CORE_TOPICS = [
  "Flutter App Development",
  "React Native App Development",
  "Android App Development",
  "iOS App Development",
  "Web Development",
  "Full-Stack Development",
  "Mobile App Development",
  "AI Integration",
];

/** Employer homepages for the Person's `worksFor` (not stored on the Experience data). */
const EMPLOYER_URLS: Record<string, string> = {
  MagicMond: "https://magicmond.com/",
};

function personNode(): JsonLdNode {
  const current = experiences.find((e) => e.endDate === "Present") ?? experiences[0];
  const skillNames = [
    ...SKILLS.languages,
    ...SKILLS.framework,
    ...SKILLS.database,
    ...SKILLS.stateManagement,
  ].map(formatSkillName);
  const employerUrl = EMPLOYER_URLS[current.company];

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    alternateName: ["Yuvraj Dekhane", "Yuvaraj Dharmaraj Dekhane"],
    url: SITE_URL,
    image: absoluteUrl(PROFILE_IMAGE),
    description: PERSON_DESCRIPTION,
    jobTitle: SITE_JOB_TITLE,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCATION.city,
      addressRegion: SITE_LOCATION.region,
      addressCountry: SITE_LOCATION.countryCode,
    },
    sameAs: SOCIAL_LINKS.filter((link) => !link.url.startsWith("mailto:")).map((link) => link.url),
    knowsAbout: Array.from(new Set([...CORE_TOPICS, ...skillNames])),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Rajiv Gandhi Institute of Technology (RGIT), Mumbai",
    },
    worksFor: {
      "@type": "Organization",
      name: current.company,
      ...(employerUrl && { url: employerUrl }),
    },
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
      url: cert.url,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "business inquiries",
      email: CONTACT_EMAIL,
    },
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ["Yuvaraj Dekhane Portfolio", "yuvarajdekhane.me"],
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANG,
    publisher: PERSON_REF,
    author: PERSON_REF,
  };
}

/** Site-wide graph (every page): the Person entity + the WebSite it owns. */
export function siteJsonLd(): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": [personNode(), websiteNode()] };
}

export function profilePageJsonLd(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANG,
    isPartOf: { "@id": WEBSITE_ID },
    about: PERSON_REF,
    mainEntity: PERSON_REF,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectsPageJsonLd(projects: Project[], title: string, description: string): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/projects")}#collection`,
    url: absoluteUrl("/projects"),
    name: title,
    description,
    inLanguage: SITE_LANG,
    isPartOf: { "@id": WEBSITE_ID },
    author: PERSON_REF,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: absoluteUrl(project.detailsUrl),
      })),
    },
  };
}

export function blogsPageJsonLd(blogs: Blog[], title: string, description: string): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/all-blogs")}#blog`,
    url: absoluteUrl("/all-blogs"),
    name: title,
    description,
    inLanguage: SITE_LANG,
    isPartOf: { "@id": WEBSITE_ID },
    author: PERSON_REF,
    publisher: PERSON_REF,
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      url: absoluteUrl(`/blog/${blog.slug}`),
      datePublished: blog.date,
      author: PERSON_REF,
    })),
  };
}

export function projectJsonLd(project: Project): JsonLdNode {
  const url = absoluteUrl(project.detailsUrl);
  const image = ogImageFor("projects", project.slug, project.title);
  const liveUrls = project.liveUrls?.map((live) => live.url) ?? [];
  const client = project.client;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    headline: project.seoTitle ?? project.title,
    description: projectDescription(project),
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(image.url),
    keywords: project.tech,
    inLanguage: SITE_LANG,
    isPartOf: { "@id": WEBSITE_ID },
    author: PERSON_REF,
    creator: PERSON_REF,
    ...(client && {
      publisher: {
        "@type": "Organization",
        name: client.name,
        ...(client.url && { url: client.url }),
      },
    }),
    ...(liveUrls.length > 0 && { sameAs: liveUrls }),
  };
}

export function blogPostJsonLd(blog: Blog): JsonLdNode {
  const url = absoluteUrl(`/blog/${blog.slug}`);
  const image = ogImageFor("blog", blog.slug, blog.title);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: blog.title,
    description: blog.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [absoluteUrl(image.url)],
    datePublished: blog.date,
    dateModified: blog.updated ?? blog.date,
    keywords: blog.tags.join(", "),
    articleSection: blog.category,
    inLanguage: SITE_LANG,
    isPartOf: { "@id": WEBSITE_ID },
    author: PERSON_REF,
    publisher: PERSON_REF,
  };
}

/** FAQPage for posts that contain a `faq` content block; null otherwise. */
export function faqPageJsonLd(items: FaqItem[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function blogFaqJsonLd(blog: Blog): JsonLdNode | null {
  const faqBlock = blog.content.find(
    (block): block is Extract<BlogContentBlock, { type: "faq" }> => block.type === "faq"
  );
  return faqBlock ? faqPageJsonLd(faqBlock.items) : null;
}

/** /hire-me: the page itself plus the freelance service it offers (no prices are published, so no Offer price). */
export function hireMePageJsonLd(
  page: { title: string; description: string },
  services: { title: string; description: string }[]
): JsonLdNode[] {
  const url = absoluteUrl("/hire-me");
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: SITE_LANG,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#service` },
      author: PERSON_REF,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Freelance Flutter, React Native & web development by ${SITE_NAME}`,
      serviceType: "Mobile app and web development",
      description: page.description,
      url,
      provider: PERSON_REF,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freelance development services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.title, description: service.description },
        })),
      },
    },
  ];
}
