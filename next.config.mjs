/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Ensures compatibility with static exports
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/public/images/:path*',
      },
    ];
  },
};

export default nextConfig;
