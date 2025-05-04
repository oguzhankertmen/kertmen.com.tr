/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statik export için yapılandırma
  output: 'export',
  // Görüntü optimizasyonu için CloudFlare Images'ı kullan
  images: {
    unoptimized: true,
  },
  // Statik export için gerekli yapılandırmalar
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
