/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Matches the 30-day Cache-Control on /assets in vercel.json, so optimized variants aren't re-generated every minute.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
