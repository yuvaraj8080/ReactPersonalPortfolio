import { Container } from "@/lib/common/Container";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { FaqList } from "@/lib/common/FaqList";
import { typography } from "@/lib/constants/styles";
import type { FaqItem } from "@/types";

interface FaqSectionProps {
  items: FaqItem[];
}

/** Server-rendered (no hooks) — rendered from app/page.tsx and passed into HomeContent so it ships no JS. */
export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className="w-full bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16"
    >
      <Container>
        <Title level={2} className={typography.pageHeading}>
          Frequently Asked Questions
        </Title>
        <Text className={typography.pageSubheading}>
          Quick answers about my work, tech stack and availability
        </Text>
        <FaqList items={items} className="max-w-[860px]" />
      </Container>
    </section>
  );
}
