import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface AppLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: React.ReactNode;
  /** External links open in a new tab with safe rel. */
  external?: boolean;
}

export function AppLink({
  className,
  external,
  children,
  ...props
}: AppLinkProps) {
  if (external) {
    return (
      <a
        href={typeof props.href === "string" ? props.href : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={cn(className)} {...props}>
      {children}
    </Link>
  );
}
