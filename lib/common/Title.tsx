import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading level — exactly one level-1 per page. */
  level: HeadingLevel;
  children: React.ReactNode;
}

/**
 * Heading widget. Visual style comes from the global element styles
 * (identical to the original design); `level` controls semantics only.
 */
export function Title({ level, className, children, ...props }: TitleProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={cn(className)} {...props}>
      {children}
    </Tag>
  );
}
