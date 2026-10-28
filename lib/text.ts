/** First two sentences of a text block. */
export function getBriefText(text?: string) {
  if (!text || typeof text !== "string") return "";
  // Split only where punctuation is followed by whitespace, so "1.56M+" isn't cut in half.
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.replace(/[.!?]+$/, "").trim())
    .filter(Boolean);
  return sentences.slice(0, 2).join(". ") + (sentences.length > 2 ? "." : "");
}

/** First ten words of a text block. */
export function getBriefAchievement(text?: string) {
  if (!text || typeof text !== "string") return "";
  const words = text.split(" ");
  return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
}
