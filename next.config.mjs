/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.pomelofashion.com',
          },
          {
            protocol: 'https',
            hostname: 'i0.wp.com',
          },
          {
            protocol: 'https',
            hostname: 'img.kwcdn.com',
          },
        ],
      },
};

export default nextConfig;
