import type { Metadata } from "next";
import { poppins, playfair } from "@/lib/constants/fonts";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuvaraj Dekhane — Site Reliability Engineer",
  description:
    "Portfolio of Yuvaraj Dekhane — Site Reliability Engineer, CKA Certified. I build reliable systems at scale: container orchestration, service mesh, observability, and secure networking.",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

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
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
