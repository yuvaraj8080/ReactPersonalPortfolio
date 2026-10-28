import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/lib/common/Container";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { buttons, sizes } from "@/lib/constants/styles";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/all-blogs" },
  { name: "Hire Me", href: "/hire-me" },
];

export default function NotFound() {
  return (
    <main className="min-h-[60vh] bg-bg-primary py-24 max-[900px]:py-16">
      <Container>
        <Title
          level={1}
          className="font-display text-4xl font-bold leading-[1.2] text-text-primary max-[768px]:text-3xl"
        >
          Page not found
        </Title>
        <Text className="mb-8 mt-4 max-w-[560px] text-base leading-[1.7] text-text-secondary">
          This page doesn&apos;t exist or has moved. Try one of these instead.
        </Text>
        <div className={cn("flex flex-wrap", sizes.gap, "max-[768px]:flex-col")}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn(buttons.base, buttons.secondary)}>
              {link.name}
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
