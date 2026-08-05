"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { getBriefText } from "@/lib/text";

const sectionTitleClasses =
  "mb-6 font-display text-[1.75rem] font-semibold text-[var(--primary-text)] max-[768px]:text-[1.4rem]";

const expandButtonClasses = cn(
  "mt-4 inline-flex cursor-pointer items-center gap-2 border-none bg-transparent py-2",
  "font-sans text-[0.95rem] font-semibold text-accent-blue",
  "transition-all duration-300 hover:translate-x-[5px]"
);

const listItemClasses =
  "border-b border-border-color py-3 leading-[1.6] text-text-secondary last:border-b-0";

interface ExpandableSectionProps {
  title: string;
  /** Provide `text` for a paragraph section (Overview/Impact), or `items` for a list section (Features/Technical Details). */
  text?: string;
  items?: string[];
  /** How many list items show before "View More Details" — ignored for `text` sections. */
  previewCount?: number;
}

/**
 * Shared "preview + expand/collapse" section used by Overview, Key Features,
 * Technical Details, and Impact on the project detail page — replaces four
 * near-identical hand-rolled copies of the same pattern.
 */
export function ExpandableSection({
  title,
  text,
  items,
  previewCount = 3,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);

  if (text !== undefined) {
    const brief = getBriefText(text);
    const hasMore = brief !== text;

    return (
      <section className="mb-16 max-w-[900px]">
        <Title level={2} className={sectionTitleClasses}>
          {title}
        </Title>
        <div className="font-sans text-base leading-[1.8] text-[var(--secondary-text)]">
          <Text className="mb-4">{brief}</Text>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <Text>{text}</Text>
              </motion.div>
            )}
          </AnimatePresence>
          {hasMore && (
            <button
              className={expandButtonClasses}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Show Less" : "View More Details →"}
            </button>
          )}
        </div>
      </section>
    );
  }

  if (!items || items.length === 0) return null;

  const preview = items.slice(0, previewCount);
  const rest = items.slice(previewCount);

  return (
    <section className="mb-16 max-w-[900px]">
      <Title level={2} className={sectionTitleClasses}>
        {title}
      </Title>
      <div className="font-sans text-base leading-[1.8] text-[var(--secondary-text)]">
        <ul className="m-0 list-none p-0">
          {preview.map((item, index) => (
            <li key={index} className={listItemClasses}>
              {item.replace(/^[^\s]+\s/, "").split(".")[0]}
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {expanded && rest.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="m-0 list-none p-0"
            >
              {rest.map((item, index) => (
                <li key={index + preview.length} className={listItemClasses}>
                  {item.replace(/^[^\s]+\s/, "")}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        {rest.length > 0 && (
          <button
            className={expandButtonClasses}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show Less" : "View More Details →"}
          </button>
        )}
      </div>
    </section>
  );
}
