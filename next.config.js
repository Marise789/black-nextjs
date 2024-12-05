/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'store.storeimages.cdn-apple.com',
        },
        {
          protocol: 'https',
          hostname: 'example.com', // Outros domínios que você já configurou
        },
        {
          protocol: 'https',
          hostname: 'another-domain.com', // Outros domínios que você já configurou
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  