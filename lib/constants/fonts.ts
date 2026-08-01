import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    { path: "../../public/assets/fonts/poppins-300.woff2", weight: "300", style: "normal" },
    { path: "../../public/assets/fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/assets/fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/assets/fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const playfair = localFont({
  src: [
    { path: "../../public/assets/fonts/playfair-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/playfair-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/assets/fonts/playfair-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/assets/fonts/playfair-600-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});
