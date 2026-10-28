import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

interface FaqListProps {
  items: FaqItem[];
  className?: string;
}

/**
 * Accordion built on native <details>: zero JavaScript, keyboard/screen-reader accessible,
 * and every answer is in the HTML so crawlers read it whether or not it is expanded.
 * Pair with `faqPageJsonLd(items)` so the markup and structured data stay identical.
 */
export function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <details
          key={item.question}
          className={cn(
            "group rounded-xl border border-border-color bg-bg-secondary",
            "transition-colors duration-200 open:border-border-hover"
          )}
        >
          <summary
            className={cn(
              "flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3",
              "[&::-webkit-details-marker]:hidden"
            )}
          >
            <h3 className="m-0 font-sans text-base font-semibold leading-snug text-text-primary">
              {item.question}
            </h3>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-5">
            <p className="m-0 text-base leading-[1.7] text-text-secondary">{item.answer}</p>
            {item.link && (
              <Link
                href={item.link.href}
                className="mt-3 inline-flex min-h-10 items-center font-sans text-[0.95rem] font-semibold text-accent-blue no-underline transition-all duration-200 hover:translate-x-1"
              >
                {item.link.label} →
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
