import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Yuvaraj Dekhane — Full-Stack Developer & Flutter Specialist";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage();
}
