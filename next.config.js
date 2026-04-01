/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-us-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'd1lu8vbgap5ai0.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'c.tenor.com',
      },
      {
        protocol: 'https',
        hostname: 'cf.geekdo-images.com',
      },
    ],
  },
  sassOptions: {
    quietDeps: true,
  },
};

export default nextConfig;
