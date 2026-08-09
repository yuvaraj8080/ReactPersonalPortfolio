"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { Container } from "@/lib/common/Container";
import { sizes } from "@/lib/constants/styles";
import { certifications, type Certification } from "@/data/certifications";

function CertIcon({ icon }: { icon: Certification["icon"] }) {
  if (icon === "hackathon") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1" />
        <path
          d="M8 4.5h8v3.5a4 4 0 0 1-8 0V4.5z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M8 5.5H5.5a1.8 1.8 0 0 0 1.8 3.6M16 5.5h2.5a1.8 1.8 0 0 1-1.8 3.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M12 12v2.5M9.5 19h5M10 15.5h4a1.7 1.7 0 0 1 1.7 1.7V19H8.3v-1.8a1.7 1.7 0 0 1 1.7-1.7z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
      </svg>
    );
  }
  if (icon === "paper") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1" />
        <path
          d="M7 3.5h7l3 3v13.2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
        <path d="M14 3.5v3h3" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" fill="none" opacity="0.85" />
        <path
          d="M9 12.5l1.8 1.8L14.5 10M9 16.5h6"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
      </svg>
    );
  }
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
          className="mb-12 max-[600px]:mb-8"
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
        </motion.div>

        <div className={cn("flex flex-col", sizes.gap)}>
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center gap-5 no-underline",
                sizes.card,
                "border border-border-color bg-bg-secondary",
                "transition-[border-color,box-shadow,transform] duration-300",
                "hover:border-border-hover hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-0.5",
                "max-[600px]:flex-col max-[600px]:items-start"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
                  "bg-bg-primary border border-border-color text-text-primary transition-all duration-300",
                  "group-hover:border-border-hover group-hover:scale-105"
                )}
              >
                <CertIcon icon={cert.icon} />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <Title
                  level={3}
                  className="m-0 font-sans text-base font-semibold leading-[1.3] text-text-primary transition-colors duration-300 group-hover:text-accent-blue"
                >
                  {cert.title}
                </Title>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-xs text-text-secondary">
                  <span className="font-medium">@{cert.issuer}</span>
                  {cert.date && (
                    <>
                      <span className="text-border-color opacity-50">|</span>
                      <span>
                        {cert.date}
                        {cert.expires && ` · Expires ${cert.expires}`}
                      </span>
                    </>
                  )}
                </div>

                {cert.description ? (
                  <Text className="m-0 line-clamp-2 text-sm leading-[1.5] text-text-secondary">
                    {cert.description}
                  </Text>
                ) : cert.credentialId ? (
                  <span className="font-sans text-xs tracking-[0.02em] text-text-secondary opacity-90">
                    Credential ID · {cert.credentialId}
                  </span>
                ) : null}
              </div>

              <span
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 font-sans text-sm font-semibold text-text-primary",
                  "transition-all duration-200 group-hover:text-accent-blue group-hover:translate-x-[3px]",
                  "max-[600px]:mt-1"
                )}
              >
                View certificate
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H3.33334M12.6667 3.33334V12.6667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
