"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";
import { getTechIconPath } from "@/lib/tech-icons";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

/** Icon + label chip for a technology name — looks up its icon via lib/tech-icons. */
export function TechBadge({ tech, className }: TechBadgeProps) {
  const [failed, setFailed] = useState(false);
  const iconPath = getTechIconPath(tech);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border-color bg-bg-secondary px-4 py-2",
        className
      )}
    >
      {iconPath && !failed && (
        <AppImage
          src={iconPath}
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
          onError={() => setFailed(true)}
        />
      )}
      <span className="whitespace-nowrap font-sans text-[0.9rem] text-text-primary">
        {tech}
      </span>
    </span>
  );
}
