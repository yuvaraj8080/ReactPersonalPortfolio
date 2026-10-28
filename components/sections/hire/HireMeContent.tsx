import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Globe,
  Layers,
  LayoutDashboard,
  Mail,
  Server,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/lib/common/Container";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { FaqList } from "@/lib/common/FaqList";
import { Breadcrumbs } from "@/lib/common/Breadcrumbs";
import { buttons, sizes, typography } from "@/lib/constants/styles";
import { CAL_BOOKING_URL, CONTACT_EMAIL, SITE_NAME, whatsappUrl } from "@/lib/constants/site";
import { WhatsAppIcon } from "@/lib/common/WhatsAppIcon";
import { Footer } from "@/components/layout/Footer";
import { getBriefText } from "@/lib/text";
import {
  HIRE_FAQ,
  HIRE_FEATURED_SLUGS,
  HIRE_PROCESS,
  HIRE_PROOF,
  HIRE_SERVICES,
  type HireServiceIcon,
} from "@/data/hireMe";
import { projects } from "@/data/projects";

const SERVICE_ICONS: Record<HireServiceIcon, LucideIcon> = {
  smartphone: Smartphone,
  layers: Layers,
  globe: Globe,
  dashboard: LayoutDashboard,
  server: Server,
  sparkles: Sparkles,
};

const sectionClasses = "relative bg-bg-primary py-24 max-[900px]:py-16";

const cardClasses = cn(
  "flex flex-col items-start border border-border-color bg-bg-secondary transition-colors duration-200",
  "hover:border-border-hover",
  sizes.card
);

const textLinkClasses = cn(
  "inline-flex min-h-10 items-center gap-1.5 font-sans text-[0.95rem] font-semibold text-accent-blue no-underline",
  "transition-all duration-200 hover:translate-x-1"
);

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Freelance project enquiry")}`;
const featuredProjects = HIRE_FEATURED_SLUGS.flatMap((slug) => {
  const project = projects.find((p) => p.slug === slug);
  return project ? [project] : [];
});

function CtaButtons() {
  return (
    <div className="flex flex-wrap gap-4 max-[768px]:flex-col">
      <a href={mailtoHref} className={cn(buttons.base, buttons.primary)}>
        <Mail className="h-4 w-4" aria-hidden="true" />
        Email for a quote
      </a>
      <a
        href={CAL_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttons.base, buttons.secondary)}
      >
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        Book a 15-minute call
      </a>
      <a
        href={whatsappUrl("Hi Yuvaraj, I'd like a quote for a project.")}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttons.base, buttons.secondary)}
      >
        <WhatsAppIcon className="h-4 w-4 text-green-400" />
        WhatsApp me
      </a>
    </div>
  );
}

/** /hire-me — freelance landing page. Server-rendered, no client JS beyond the shared footer. */
export function HireMeContent() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <main>
        {/* Hero */}
        <section className={sectionClasses}>
          <Container>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Hire Me" }]} />
            <Title
              level={1}
              className="mt-4 max-w-[900px] text-balance font-display text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-text-primary max-[768px]:text-3xl"
            >
              Hire a freelance Flutter, React Native &amp; Next.js developer
            </Title>
            <Text className="mb-8 mt-6 max-w-[760px] text-base leading-[1.7] text-text-secondary">
              I&apos;m <strong className="font-semibold text-text-primary">{SITE_NAME}</strong>, a Flutter, React
              Native and full-stack developer in Noida, India. I take on project-based freelance work — mobile
              apps, websites, admin panels and the integrations behind them. 80+ projects delivered, 25+ live in
              production. Tell me what you are building and I will reply with a scoped quote.
            </Text>
            <CtaButtons />
          </Container>
        </section>

        {/* Proof */}
        <section className="relative bg-bg-primary pb-24 max-[900px]:pb-16">
          <Container>
            <dl
              className={cn(
                "m-0 grid grid-cols-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1",
                sizes.gap
              )}
            >
              {HIRE_PROOF.map((stat) => (
                <div key={stat.label} className={cardClasses}>
                  <dt className="order-2 mt-1 font-sans text-sm text-text-secondary">{stat.label}</dt>
                  <dd className="m-0 font-display text-3xl font-semibold text-text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* Services */}
        <section className={sectionClasses}>
          <Container>
            <Title level={2} className={typography.pageHeading}>
              What I build
            </Title>
            <Text className={typography.pageSubheading}>
              Mobile apps, websites and the systems behind them
            </Text>
            <ul className={cn("m-0 grid list-none grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-3", sizes.gap)}>
              {HIRE_SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.icon];
                const project = projects.find((p) => p.slug === service.projectSlug);
                return (
                  <li key={service.title} className={cn(cardClasses, "gap-3")}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-color bg-bg-hover text-accent-blue">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <Title level={3} className="m-0 font-display text-lg font-semibold text-text-primary">
                      {service.title}
                    </Title>
                    <Text className="m-0 text-base leading-[1.7] text-text-secondary">{service.description}</Text>
                    {project && (
                      <Link href={project.detailsUrl} className={cn(textLinkClasses, "mt-auto")}>
                        See {project.title}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* Selected work */}
        <section className={sectionClasses}>
          <Container>
            <Title level={2} className={typography.pageHeading}>
              Selected work
            </Title>
            <Text className={typography.pageSubheading}>Recent projects, built end to end</Text>
            <ul className={cn("m-0 grid list-none grid-cols-1 p-0 md:grid-cols-2", sizes.gap)}>
              {featuredProjects.map((project) => (
                <li key={project.slug} className={cn(cardClasses, "gap-2")}>
                  <Title level={3} className="m-0 font-display text-lg font-semibold text-text-primary">
                    {project.title}
                  </Title>
                  <Text className="m-0 text-base leading-[1.7] text-text-secondary">
                    {getBriefText(project.description)}
                  </Text>
                  <Link href={project.detailsUrl} className={cn(textLinkClasses, "mt-auto")}>
                    View the {project.title} case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/projects" className={cn(textLinkClasses, "mt-6")}>
              Browse all projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Container>
        </section>

        {/* Process */}
        <section className={sectionClasses}>
          <Container>
            <Title level={2} className={typography.pageHeading}>
              How a project works
            </Title>
            <Text className={typography.pageSubheading}>From first message to launch</Text>
            <ol className={cn("m-0 grid list-none grid-cols-4 p-0 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1", sizes.gap)}>
              {HIRE_PROCESS.map((step, index) => (
                <li key={step.title} className={cn(cardClasses, "gap-2")}>
                  <span className="font-display text-sm font-semibold text-accent-blue">0{index + 1}</span>
                  <Title level={3} className="m-0 font-display text-lg font-semibold text-text-primary">
                    {step.title}
                  </Title>
                  <Text className="m-0 text-base leading-[1.7] text-text-secondary">{step.description}</Text>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* FAQ */}
        <section className={sectionClasses}>
          <Container>
            <Title level={2} className={typography.pageHeading}>
              Freelance FAQ
            </Title>
            <Text className={typography.pageSubheading}>Answers to what clients ask before they start</Text>
            <FaqList items={HIRE_FAQ} className="max-w-[860px]" />
          </Container>
        </section>

        {/* Final CTA */}
        <section className={cn(sectionClasses, "pb-24")}>
          <Container>
            <Title level={2} className={typography.pageHeading}>
              Have a project in mind?
            </Title>
            <Text className="mb-8 max-w-[640px] text-base leading-[1.7] text-text-secondary">
              Send a few lines about what you are building — the idea, the platforms and the deadline — and I will
              come back with a scoped quote.
            </Text>
            <CtaButtons />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
