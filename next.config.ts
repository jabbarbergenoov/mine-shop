/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // ← для работы с картинками
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
