import type { Metadata } from "next";
import { poppins, playfair } from "@/lib/constants/fonts";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants/site";
import { SOCIAL_LINKS } from "@/data/socials";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Yuvaraj Dekhane",
    "Full-Stack Developer",
    "Flutter Developer",
    "Android App Developer",
    "iOS App Developer",
    "Web Developer",
    "Desktop App Developer",
    "AI Integration",
    "React Developer",
    "Next.js Developer",
    "Mobile App Development",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Full-Stack Developer & Flutter Specialist",
  url: SITE_URL,
  sameAs: SOCIAL_LINKS.filter((link) => !link.url.startsWith("mailto:")).map(
    (link) => link.url
  ),
  knowsAbout: [
    "Android App Development",
    "iOS App Development",
    "Web Development",
    "Desktop Applications",
    "AI Integration",
    "Developer Tooling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
