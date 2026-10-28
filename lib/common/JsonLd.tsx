interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Structured-data widget. Server component on purpose: the JSON-LD must be in the
 * initial HTML (crawlers and AI engines don't run JS), and a <script> rendered from a
 * client component triggers React's "script tag in component" warning.
 * `<` is escaped so no string in the data can close the script tag early.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
