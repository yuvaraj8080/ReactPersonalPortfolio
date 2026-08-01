"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";
import { AppLink } from "@/lib/common/AppLink";
import { SOCIAL_LINKS } from "@/data/socials";

const socialLogoClasses = cn(
  "h-11 w-11 min-h-8 min-w-8 rounded-xl object-contain p-1",
  "bg-bg-hover border border-border-color",
  "max-[768px]:h-9 max-[768px]:w-9 max-[768px]:min-h-7 max-[768px]:min-w-7"
);

export function Footer() {
  return (
    <motion.footer
      className={cn(
        "mt-8 flex w-full flex-col items-center gap-8 rounded-t-[2rem] bg-bg-secondary pb-8 pt-12",
        "border-t border-border-color shadow-[0_-4px_32px_rgba(0,0,0,0.1)] transition-colors duration-300",
        "max-[768px]:gap-6 max-[768px]:rounded-t-3xl max-[768px]:pb-6 max-[768px]:pt-10"
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          "flex w-full max-w-[min(1400px,96vw)] flex-row items-center justify-between gap-8 px-8",
          "max-[768px]:gap-6 max-[768px]:px-6 max-[480px]:px-4"
        )}
      >
        <AppImage
          className="w-48 max-h-36 shrink-0 object-contain opacity-85 max-[900px]:w-40 max-[768px]:w-32 max-[480px]:w-24"
          src="/assets/images/home/footerleft.svg"
          alt=""
          width={192}
          height={144}
        />
        <div className="flex shrink-0 flex-col items-center">
          <h2 className="m-0 mb-3 text-center font-sans text-2xl font-bold tracking-[0.04em] !text-text-primary">
            Follow Me
          </h2>
          <div className="flex flex-row items-center justify-center gap-3">
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
                  width={44}
                  height={44}
                />
              </AppLink>
            ))}
          </div>
        </div>
        <AppImage
          className="w-48 max-h-36 shrink-0 object-contain opacity-85 max-[900px]:w-40 max-[768px]:hidden"
          src="/assets/images/home/footerright.svg"
          alt=""
          width={192}
          height={144}
        />
      </div>
      <div className="w-full max-w-[min(1400px,96vw)] px-8 text-center max-[768px]:px-6 max-[480px]:px-4">
        <p className="m-0 mb-1 font-sans text-sm tracking-[0.04em] text-text-secondary">
          Designed and created by
        </p>
        <p className="m-0 font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold italic tracking-[0.02em] !text-text-primary">
          Krishay Nair
        </p>
      </div>
    </motion.footer>
  );
}
