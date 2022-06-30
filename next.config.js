/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's3-us-west-1.amazonaws.com',
      'd1lu8vbgap5ai0.cloudfront.net',
      'c.tenor.com',
    ],
  },
};

module.exports = nextConfig;
