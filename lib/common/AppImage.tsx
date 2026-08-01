import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/** next/image wrapper — central place for image defaults. */
export function AppImage({ className, alt, ...props }: ImageProps) {
  return <Image className={cn(className)} alt={alt} {...props} />;
}
