/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "shopquickprintz.tdstudiosny.com" }],
        destination: "/web",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tdstudiosny.com" }],
        destination: "https://tdstudiosny.com/:path*",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
