import { NextResponse } from "next/server";
import { GITHUB_USERNAME } from "@/lib/constants/site";

/** Always runs on the server so the token never reaches the browser; the CDN caches successes for an hour. */
export const dynamic = "force-dynamic";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const CACHE_OK = "public, s-maxage=3600, stale-while-revalidate=86400";
const CACHE_ERROR = "no-store";

const CALENDAR_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      createdAt
      repositories(privacy: PUBLIC, ownerAffiliations: OWNER) { totalCount }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`;

const TOTAL_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar { totalContributions }
      }
    }
  }
`;

interface CalendarResponse {
  user?: {
    createdAt: string;
    repositories: { totalCount: number };
    contributionsCollection: {
      contributionCalendar: {
        weeks: { contributionDays: { date: string; contributionCount: number }[] }[];
      };
    };
  };
}

interface TotalResponse {
  user?: {
    contributionsCollection: { contributionCalendar: { totalContributions: number } };
  };
}

async function ghGraphql<T>(
  token: string,
  query: string,
  variables: Record<string, string>
): Promise<T> {
  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME, ...variables } }),
  });
  if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message ?? "GraphQL error");
  return json.data as T;
}

function fail(message: string, status: number) {
  return NextResponse.json({ error: message }, { status, headers: { "Cache-Control": CACHE_ERROR } });
}

export async function GET() {
  // `NEXT_PUBLIC_GITHUB_TOKEN` is only a fallback so an existing deploy keeps working — rename it to
  // `GITHUB_TOKEN` (and rotate it) because any NEXT_PUBLIC_ variable is exposed to browsers.
  const token = process.env.GITHUB_TOKEN ?? process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) return fail("GitHub token is not configured", 503);

  try {
    const to = new Date();
    const fromCalendar = new Date(to);
    fromCalendar.setDate(fromCalendar.getDate() - 364);
    const toStr = to.toISOString().slice(0, 10) + "T23:59:59Z";

    const calendarData = await ghGraphql<CalendarResponse>(token, CALENDAR_QUERY, {
      from: fromCalendar.toISOString().slice(0, 10) + "T00:00:00Z",
      to: toStr,
    });
    const user = calendarData.user;
    if (!user) return fail("User not found", 404);

    const countByDate: Record<string, number> = {};
    for (const week of user.contributionsCollection.contributionCalendar.weeks) {
      for (const day of week.contributionDays) countByDate[day.date] = day.contributionCount;
    }
    const days: { date: string; count: number }[] = [];
    for (let i = 364; i >= 0; i--) {
      const d = new Date(to);
      d.setDate(d.getDate() - i);
      const date = d.toISOString().slice(0, 10);
      days.push({ date, count: countByDate[date] ?? 0 });
    }

    // All-time total = every full calendar year since the account was created + the current year to date.
    const currentYear = to.getFullYear();
    const startYear = new Date(user.createdAt).getFullYear();
    const yearRanges = [];
    for (let year = startYear; year < currentYear; year++) {
      yearRanges.push({ from: `${year}-01-01T00:00:00Z`, to: `${year}-12-31T23:59:59Z` });
    }
    yearRanges.push({ from: `${currentYear}-01-01T00:00:00Z`, to: toStr });

    const yearTotals = await Promise.all(
      yearRanges.map((range) => ghGraphql<TotalResponse>(token, TOTAL_QUERY, range))
    );
    const totalContributions = yearTotals.reduce(
      (sum, data) =>
        sum + (data.user?.contributionsCollection.contributionCalendar.totalContributions ?? 0),
      0
    );

    return NextResponse.json(
      { days, publicRepos: user.repositories.totalCount, totalContributions },
      { headers: { "Cache-Control": CACHE_OK } }
    );
  } catch (err) {
    return fail(err instanceof Error ? err.message : "Failed to load contributions", 502);
  }
}
