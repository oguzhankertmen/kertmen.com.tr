/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statik export için yapılandırma
  output: 'export',
  // Görüntü optimizasyonu için CloudFlare Images'ı kullan
  images: {
    unoptimized: true,
  },
  // Dinamik sayfaları belirt
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Statik olarak oluşturulacak sayfaları belirt
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/hakkimda': { page: '/hakkimda' },
      '/iletisim': { page: '/iletisim' },
      '/bookmarks': { page: '/bookmarks' },
      '/admin': { page: '/admin' },
      '/admin/blog': { page: '/admin/blog' },
      '/admin/login': { page: '/admin/login' },
    }
  },
};

export default nextConfig;
