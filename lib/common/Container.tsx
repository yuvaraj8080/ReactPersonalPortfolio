import { cn } from "@/lib/utils";
import { layout } from "@/lib/constants/styles";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/** Site-wide horizontal container (the original .pageContainer). */
export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn(layout.container, className)} {...props}>
      {children}
    </div>
  );
}
