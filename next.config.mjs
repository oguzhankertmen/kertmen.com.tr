/** @type {import('next').NextConfig} */
const nextConfig = {
  // CloudFlare Workers ile uyumlu yapılandırma
  output: 'standalone',
  // Görüntü optimizasyonu için CloudFlare Images'ı kullan
  images: {
    loader: 'custom',
    loaderFile: './app/image-loader.ts',
  },
  // CloudFlare Workers için gerekli yapılandırmalar
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
