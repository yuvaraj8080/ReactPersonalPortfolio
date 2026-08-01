"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { Container } from "@/lib/common/Container";

const GITHUB_USERNAME = "KrishayNair";

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
  "min-h-screen w-full bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16";

const headingClasses =
  "mb-12 text-center font-display text-3xl font-semibold leading-[1.2] tracking-[0.04em] !text-text-primary transition-colors duration-300";

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

  useEffect(() => {
    let cancelled = false;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      }),
    };

    async function ghGraphql(
      query: string,
      variables: Record<string, unknown>
    ) {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({
          query,
          variables: { username: GITHUB_USERNAME, ...variables },
        }),
      });
      const json = await res.json();
      if (json.errors)
        throw new Error(json.errors[0]?.message || "GraphQL error");
      return json.data;
    }

    async function fetchContributions() {
      const to = new Date();
      const fromCalendar = new Date(to);
      fromCalendar.setDate(fromCalendar.getDate() - 364);
      const fromStr = fromCalendar.toISOString().slice(0, 10) + "T00:00:00Z";
      const toStr = to.toISOString().slice(0, 10) + "T23:59:59Z";

      const calendarQuery = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      const totalOnlyQuery = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar { totalContributions }
            }
          }
        }
      `;

      try {
        const data = await ghGraphql(calendarQuery, {
          from: fromStr,
          to: toStr,
        });
        if (cancelled) return;

        const calendar =
          data?.user?.contributionsCollection?.contributionCalendar;
        if (!calendar) {
          setError("User not found or no contribution data");
          setLoading(false);
          return;
        }

        const countByDate: Record<string, number> = {};
        for (const week of calendar.weeks || []) {
          for (const day of week.contributionDays || []) {
            countByDate[day.date] = day.contributionCount;
          }
        }

        const list: { date: string; count: number }[] = [];
        for (let i = 364; i >= 0; i--) {
          const d = new Date(to);
          d.setDate(d.getDate() - i);
          const dateStr = d.toISOString().slice(0, 10);
          list.push({ date: dateStr, count: countByDate[dateStr] ?? 0 });
        }

        const maxInList = Math.max(...list.map((d) => d.count), 1);
        setContributions(
          list.map((d) => ({ ...d, level: getLevel(d.count, maxInList) }))
        );

        let allTimeTotal = 0;
        const createdAtRes = await ghGraphql(
          `query($username: String!) { user(login: $username) { createdAt } }`,
          {}
        );
        if (cancelled) return;

        const createdAt = createdAtRes?.user?.createdAt;
        const currentYear = to.getFullYear();
        const startYear = createdAt
          ? new Date(createdAt).getFullYear()
          : currentYear - 10;

        for (let year = startYear; year < currentYear; year++) {
          const yearData = await ghGraphql(totalOnlyQuery, {
            from: `${year}-01-01T00:00:00Z`,
            to: `${year}-12-31T23:59:59Z`,
          });
          if (cancelled) return;
          allTimeTotal +=
            yearData?.user?.contributionsCollection?.contributionCalendar
              ?.totalContributions ?? 0;
        }
        const currentYearData = await ghGraphql(totalOnlyQuery, {
          from: `${currentYear}-01-01T00:00:00Z`,
          to: toStr,
        });
        if (!cancelled) {
          allTimeTotal +=
            currentYearData?.user?.contributionsCollection?.contributionCalendar
              ?.totalContributions ?? 0;
          setTotalContributions(allTimeTotal);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load contributions"
          );
        }
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
            <Text className="mx-auto mt-4 max-w-[420px] text-[0.9rem] leading-normal">
              Unauthenticated requests are limited. Add{" "}
              <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-[0.85em]">
                NEXT_PUBLIC_GITHUB_TOKEN
              </code>{" "}
              in{" "}
              <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-[0.85em]">
                .env.local
              </code>{" "}
              for reliable access, or try again later.
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} className={headingClasses}>GitHub Contributions</Title>
          <Text className="mb-16 text-center font-sans text-lg font-medium leading-[1.7] text-text-secondary transition-colors duration-300">
            My coding activity and contributions
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-[768px]:grid-cols-2 max-[768px]:gap-4"
        >
          <div
            className={cn(
              "rounded-2xl border border-border-color bg-bg-secondary p-8 text-center transition-all duration-300",
              "hover:border-border-hover hover:bg-bg-hover hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
              "max-[768px]:p-6"
            )}
          >
            <div className="mb-2 font-display text-4xl font-semibold text-text-primary transition-colors duration-300 max-[768px]:text-3xl">
              {totalContributions.toLocaleString()}
            </div>
            <div className="text-[0.95rem] uppercase tracking-[0.5px] text-text-secondary transition-colors duration-300">
              Total contributions (all time)
            </div>
          </div>
        </motion.div>

        <motion.div
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
              {contributions.map((contribution, index) => {
                const date = new Date(contribution.date);
                return (
                  <motion.div
                    key={contribution.date}
                    className={cn(
                      "relative h-3 w-3 cursor-pointer rounded-[2px] border transition-all duration-200",
                      "hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] hover:!border-accent-blue",
                      "max-[768px]:h-2.5 max-[768px]:w-2.5",
                      levelClasses[contribution.level]
                    )}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    title={`${contribution.count} contributions on ${date.toLocaleDateString()}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.001 }}
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
        </motion.div>

        <motion.div
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
        </motion.div>
      </Container>
    </div>
  );
}
