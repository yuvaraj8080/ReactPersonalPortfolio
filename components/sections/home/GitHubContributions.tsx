"use client";

import { useState, useEffect } from "react";
import * as m from "framer-motion/m";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { Container } from "@/lib/common/Container";
import { GITHUB_USERNAME } from "@/lib/constants/site";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

function getLevel(count: number, maxCount: number) {
  if (count === 0) return 0;
  if (maxCount <= 0) return 1;
  const ratio = count / maxCount;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  return 3;
}

const outerSectionClasses =
  "w-full bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16";

const headingClasses =
  "mb-3 text-left font-display text-3xl font-semibold leading-[1.2] tracking-[0.04em] !text-text-primary transition-colors duration-300";

/** Longest run of consecutive contributing days, and the current run ending today. */
function computeStreaks(days: { count: number }[]) {
  let longest = 0;
  let running = 0;
  for (const day of days) {
    if (day.count > 0) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  }
  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current += 1;
    else break;
  }
  return { current, longest };
}

const levelClasses: Record<number, string> = {
  0: "bg-bg-secondary border-border-color [[data-theme=light]_&]:bg-[rgba(0,0,0,0.06)] [[data-theme=light]_&]:border-[rgba(0,0,0,0.1)]",
  1: "bg-[rgba(59,130,246,0.35)] border-[rgba(59,130,246,0.4)] [[data-theme=light]_&]:bg-[rgba(37,99,235,0.25)] [[data-theme=light]_&]:border-[rgba(37,99,235,0.35)]",
  2: "bg-[rgba(59,130,246,0.6)] border-[rgba(59,130,246,0.65)] [[data-theme=light]_&]:bg-[rgba(37,99,235,0.5)] [[data-theme=light]_&]:border-[rgba(37,99,235,0.6)]",
  3: "bg-accent-blue border-[rgba(59,130,246,0.9)] [[data-theme=light]_&]:border-[rgba(37,99,235,0.9)]",
};

const linkClasses = cn(
  "inline-flex items-center text-lg font-semibold text-text-primary no-underline transition-all duration-200",
  "hover:text-accent-blue hover:translate-x-[5px]"
);

function getMonthLabels() {
  const months: string[] = [];
  const today = new Date();
  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    months.push(date.toLocaleDateString("en-US", { month: "short" }));
  }
  return months;
}

export function GitHubContributions() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState(0);
  const [publicRepos, setPublicRepos] = useState(0);
  const [streaks, setStreaks] = useState({ current: 0, longest: 0 });

  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      try {
        const res = await fetch("/api/github-contributions");
        if (!res.ok) throw new Error(`Request failed with ${res.status}`);
        const data: {
          days: { date: string; count: number }[];
          publicRepos: number;
          totalContributions: number;
        } = await res.json();
        if (cancelled) return;

        const maxInList = Math.max(...data.days.map((d) => d.count), 1);
        setContributions(
          data.days.map((d) => ({ ...d, level: getLevel(d.count, maxInList) }))
        );
        setStreaks(computeStreaks(data.days));
        setPublicRepos(data.publicRepos);
        setTotalContributions(data.totalContributions);
      } catch {
        if (!cancelled) setError("Couldn't load GitHub contributions right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchContributions();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div id="github-contributions" className={outerSectionClasses}>
        <Container>
          <Title level={2} className={headingClasses}>GitHub Contributions</Title>
          <div className="p-16 text-center text-[1.2rem] text-text-secondary">
            Loading contributions...
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div id="github-contributions" className={outerSectionClasses}>
        <Container>
          <Title level={2} className={headingClasses}>GitHub Contributions</Title>
          <div className="p-16 text-center text-[1.2rem] text-text-secondary">
            <Text>{error}</Text>
            <Text className="mx-auto my-4 max-w-[420px] text-[0.9rem] leading-normal">
              You can still browse my full activity on GitHub.
            </Text>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              View on GitHub →
            </a>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div id="github-contributions" className={outerSectionClasses}>
      <Container>
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} className={headingClasses}>GitHub Contributions</Title>
          <Text className="mb-12 text-left font-sans text-lg font-medium leading-[1.7] text-text-secondary transition-colors duration-300">
            My coding activity and contributions
          </Text>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-[768px]:grid-cols-2 max-[768px]:gap-4"
        >
          {[
            {
              value: totalContributions.toLocaleString(),
              label: "Total contributions (all time)",
            },
            {
              value: streaks.current.toLocaleString(),
              label: streaks.current === 1 ? "Day current streak" : "Days current streak",
            },
            {
              value: streaks.longest.toLocaleString(),
              label: streaks.longest === 1 ? "Day longest streak" : "Days longest streak",
            },
            {
              value: publicRepos.toLocaleString(),
              label: "Public repositories",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-2xl border border-border-color bg-bg-secondary p-8 text-center transition-all duration-300",
                "hover:border-border-hover hover:bg-bg-hover hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
                "max-[768px]:p-6"
              )}
            >
              <div className="mb-2 font-display text-4xl font-semibold text-text-primary transition-colors duration-300 max-[768px]:text-3xl">
                {stat.value}
              </div>
              <div className="text-[0.95rem] uppercase tracking-[0.5px] text-text-secondary transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 overflow-x-auto rounded-2xl border border-border-color bg-bg-secondary p-8 transition-colors duration-300 max-[768px]:p-4"
        >
          <div className="min-w-[800px] max-[768px]:min-w-[600px]">
            <div className="mb-2 flex min-w-0 flex-nowrap justify-between gap-1 pl-[30px]">
              {getMonthLabels().map((month, i) => (
                <span
                  key={i}
                  className="min-w-0 flex-1 whitespace-nowrap text-left text-[0.7rem] font-medium text-text-secondary transition-colors duration-300 max-[768px]:text-[0.65rem]"
                >
                  {month}
                </span>
              ))}
            </div>
            <div className="mb-4 grid grid-cols-[repeat(53,1fr)] gap-[3px]">
              {contributions.map((contribution) => {
                const date = new Date(contribution.date);
                return (
                  // Plain div + CSS hover: one Framer Motion component per cell (365 of them) is needless hydration work.
                  <div
                    key={contribution.date}
                    className={cn(
                      "relative h-3 w-3 cursor-pointer rounded-[2px] border transition-all duration-200",
                      "hover:z-10 hover:scale-[1.2] hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] hover:!border-accent-blue",
                      "max-[768px]:h-2.5 max-[768px]:w-2.5",
                      levelClasses[contribution.level]
                    )}
                    title={`${contribution.count} contributions on ${date.toLocaleDateString()}`}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <span className="text-[0.85rem] text-text-secondary transition-colors duration-300">
              Less
            </span>
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={cn(
                    "h-3 w-3 rounded-[2px] border transition-all duration-300",
                    levelClasses[level]
                  )}
                />
              ))}
            </div>
            <span className="text-[0.85rem] text-text-secondary transition-colors duration-300">
              More
            </span>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            View on GitHub →
          </a>
        </m.div>
      </Container>
    </div>
  );
}
