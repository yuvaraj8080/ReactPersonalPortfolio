"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Container } from "@/lib/common/Container";
import { certifications, type Certification } from "@/data/certifications";

function CertIcon({ icon }: { icon: Certification["icon"] }) {
  if (icon === "oracle") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1" />
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
      </svg>
    );
  }
  if (icon === "google") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="currentColor"
          opacity="0.8"
        />
        <path d="M12 6L8 10L12 14L16 10L12 6Z" fill="currentColor" opacity="0.8" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1" />
      <path
        d="M12 4.5l7 4v9l-7 4-7-4v-9l7-4z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="12" cy="12" r="2.25" fill="currentColor" opacity="0.9" />
      <path
        d="M12 7v3M12 14v3M8.2 9.5l2.6 1.5M13.2 13l2.6 1.5M8.2 14.5l2.6-1.5M13.2 11l2.6-1.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-bg-primary py-24 max-[900px]:py-16"
    >
      <Container>
        <motion.div
          className="mb-12 flex items-baseline gap-4 max-[600px]:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title
            level={2}
            className="m-0 font-display text-4xl font-semibold tracking-[0.04em] text-text-primary max-[900px]:text-3xl max-[600px]:text-2xl"
          >
            Certifications
          </Title>
          <span className="font-sans text-lg font-normal text-text-secondary max-[600px]:text-base">
            ({certifications.length})
          </span>
        </motion.div>

        <div className="flex flex-col">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group border-b border-border-color transition-all duration-300 last:border-b-0 hover:bg-bg-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-6 py-6 transition-all duration-300 max-[900px]:gap-4 max-[900px]:py-5 max-[600px]:gap-3 max-[600px]:py-4">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
                    "bg-bg-secondary border border-border-color text-text-primary transition-all duration-300",
                    "group-hover:bg-bg-hover group-hover:border-border-hover group-hover:scale-105",
                    "max-[900px]:h-10 max-[900px]:w-10 max-[600px]:h-9 max-[600px]:w-9 max-[600px]:[&_svg]:h-5 max-[600px]:[&_svg]:w-5"
                  )}
                >
                  <CertIcon icon={cert.icon} />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <Title
                    level={3}
                    className="m-0 font-sans text-lg font-semibold leading-[1.2] text-text-primary transition-colors duration-300 max-[900px]:text-base max-[600px]:text-sm"
                  >
                    {cert.title}
                  </Title>
                  <div className="flex items-center gap-3 font-sans text-sm text-text-secondary max-[900px]:flex-wrap max-[900px]:text-xs">
                    <span className="font-medium">@{cert.issuer}</span>
                    <span className="text-border-color opacity-50">|</span>
                    <span className="font-normal">
                      {cert.date}
                      {cert.expires && ` · Expires ${cert.expires}`}
                    </span>
                  </div>
                  {cert.credentialId && (
                    <span className="font-sans text-xs tracking-[0.02em] text-text-secondary opacity-90">
                      Credential ID · {cert.credentialId}
                    </span>
                  )}
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-text-secondary",
                    "transition-all duration-300 hover:text-text-primary hover:bg-bg-hover hover:translate-x-0.5 hover:-translate-y-0.5",
                    "max-[600px]:h-7 max-[600px]:w-7"
                  )}
                  aria-label={`View ${cert.title} credential`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H3.33334M12.6667 3.33334V12.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
