export const PENDING_SECTION_KEY = "pendingSection";

/**
 * Scrolls to a home-page section by id without ever putting a #hash in the
 * URL. If we're already on "/", scrolls immediately; otherwise stashes the
 * target id and navigates to "/", where useHashNavigation picks it up.
 */
export function goToSection(
  id: string,
  pathname: string,
  push: (href: string) => void
) {
  if (pathname === "/") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  sessionStorage.setItem(PENDING_SECTION_KEY, id);
  push("/");
}
