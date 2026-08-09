"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/lib/common/Container";
import { AppImage } from "@/lib/common/AppImage";
import { AppLink } from "@/lib/common/AppLink";
import { sizes } from "@/lib/constants/styles";
import { NAV_LINKS } from "@/lib/constants/nav";
import { SOCIAL_LINKS } from "@/data/socials";
import { goToSection } from "@/lib/section-navigation";

const CONTACT_EMAIL = "yuvarajdekhane8080@gmail.com";

const columnHeadingClasses =
  "m-0 font-display text-sm font-semibold uppercase tracking-[0.08em] text-text-primary transition-colors duration-300";

const footerLinkClasses = cn(
  "font-sans text-sm font-medium text-text-secondary no-underline",
  "transition-colors duration-200 hover:text-text-primary"
);

const socialLogoClasses = cn(
  "h-10 w-10 rounded-lg object-contain p-1.5",
  "bg-bg-hover border border-border-color transition-all duration-200",
  "max-[768px]:h-9 max-[768px]:w-9"
);

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    goToSection(href.replace("/#", ""), pathname, router.push);
  };

  return (
    <motion.footer
      className={cn(
        "mt-8 w-full rounded-t-[2rem] border-t border-border-color bg-bg-secondary pb-8 pt-12",
        "shadow-[0_-4px_32px_rgba(0,0,0,0.1)] transition-colors duration-300",
        "max-[768px]:rounded-t-3xl max-[768px]:pb-6 max-[768px]:pt-10"
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Container className="flex flex-col gap-10 max-[768px]:gap-8">
        <div
          className={cn(
            "grid grid-cols-[1.3fr_1fr_1fr]",
            sizes.gap,
            "max-[768px]:grid-cols-2 max-[768px]:gap-x-6 max-[768px]:gap-y-8 max-[768px]:text-left"
          )}
        >
          {/* Brand */}
          <div className="flex flex-col items-start gap-3 max-[768px]:col-span-2 max-[768px]:items-center max-[768px]:text-center">
            <div className="flex flex-row items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
                <AppImage
                  src="/assets/logo/YD_Logo.webp"
                  alt="YD logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start max-[768px]:items-center">
                <p className="m-0 font-display text-lg font-semibold text-text-primary transition-colors duration-300">
                  Yuvaraj Dekhane
                </p>
                <p className="m-0 font-sans text-sm text-text-secondary transition-colors duration-300">
                  Full-Stack Developer &amp; Flutter Specialist
                </p>
              </div>
            </div>
            <AppLink
              href={`mailto:${CONTACT_EMAIL}`}
              className={cn(footerLinkClasses, "mt-1")}
            >
              {CONTACT_EMAIL}
            </AppLink>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start gap-3 max-[768px]:items-start max-[768px]:border-t max-[768px]:border-border-color max-[768px]:pt-6">
            <span className={columnHeadingClasses}>Navigation</span>
            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-2.5 max-[768px]:gap-3"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={footerLinkClasses}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Follow Me */}
          <div className="flex flex-col items-start gap-3 max-[768px]:items-start max-[768px]:border-t max-[768px]:border-border-color max-[768px]:pt-6">
            <span className={columnHeadingClasses}>Follow Me</span>
            <div className="flex flex-row flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <AppLink
                  key={social.name}
                  href={social.url}
                  external={!social.url.startsWith("mailto:")}
                  className="inline-flex transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                  aria-label={social.name}
                >
                  <AppImage
                    className={socialLogoClasses}
                    src={social.icon}
                    alt={social.name}
                    width={40}
                    height={40}
                  />
                </AppLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-color pt-6 text-center transition-colors duration-300">
          <p className="m-0 font-display text-sm font-medium text-text-secondary transition-colors duration-300">
            Designed and created by{" "}
            <span className="text-text-primary">Yuvaraj Dekhane</span>
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}
