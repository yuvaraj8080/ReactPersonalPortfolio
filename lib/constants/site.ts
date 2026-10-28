/** Every SEO surface (sitemap, robots, canonical/OG URLs) reads from this one constant. */
export const SITE_URL = "https://yuvarajdekhane.me";

export const SITE_NAME = "Yuvaraj Dekhane";
/** Home <title> — keyword-led, ≤60 chars. */
export const SITE_TITLE = "Yuvaraj Dekhane — Flutter, React Native & Web Developer";
/** Home meta description — 150–160 chars. */
export const SITE_DESCRIPTION =
  "Yuvaraj Dekhane is a Flutter, React Native and full-stack developer in Noida, India. 80+ apps built, 25+ live on Android, iOS and web. See projects and hire me.";
/** Shown in Person schema; matches the Hero's positioning. */
export const SITE_JOB_TITLE = "Full-Stack Developer & Flutter Specialist";

export const SITE_LANG = "en-IN";
export const SITE_LOCALE = "en_IN";

export const SITE_LOCATION = {
  city: "Noida",
  region: "Uttar Pradesh",
  countryCode: "IN",
} as const;

export const CONTACT_EMAIL = "yuvarajdekhane8080@gmail.com";

export const GITHUB_USERNAME = "yuvaraj8080";

export const CAL_COM_USERNAME = "yuvaraj-dekhane-h4iqhf";
export const CAL_BOOKING_URL = `https://cal.com/${CAL_COM_USERNAME}/15min`;

/**
 * Image used for the Person schema and author boxes. It is the logo until a real photo exists —
 * drop one in (e.g. /assets/images/profile/yuvaraj-dekhane.webp) and change only this constant.
 */
export const PROFILE_IMAGE = "/assets/logo/YD_Logo.webp";

/** WhatsApp number in the international format wa.me needs (digits only, no "+"): 91 = India. */
export const WHATSAPP_NUMBER = "918080737803";
export const WHATSAPP_DISPLAY = "+91 80807 37803";

/** Click-to-chat link with the first message pre-filled. */
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
