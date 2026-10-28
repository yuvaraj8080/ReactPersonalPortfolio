import Link from "next/link";
import { cn } from "@/lib/utils";

interface Crumb {
  name: string;
  /** Omit on the current page. */
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

/**
 * Visible breadcrumb trail. Real links give every detail page a crawlable path back to its
 * index page; pair it with `breadcrumbJsonLd()` from lib/seo.ts so markup and structured data agree.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-2", className)}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 p-0 font-sans text-sm text-text-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex min-w-0 items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-text-secondary no-underline transition-colors duration-200 hover:text-text-primary"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="truncate text-text-primary">
                  {item.name}
                </span>
              )}
              {!isLast && <span aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
