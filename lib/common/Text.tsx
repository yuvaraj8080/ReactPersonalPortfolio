import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

/** Body text widget — global `p` styles apply (identical to original). */
export function Text({ className, children, ...props }: TextProps) {
  return (
    <p className={cn(className)} {...props}>
      {children}
    </p>
  );
}
