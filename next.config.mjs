/** @type {import('next').NextConfig} */
const nextConfig = {
  // CloudFlare Pages ile uyumlu yapılandırma
  output: 'export',
  distDir: 'out',
  // Statik HTML dışa aktarımı sırasında görüntüleri optimize etme
  images: {
    unoptimized: true,
  },
  // CloudFlare Pages'in _routes.json dosyasını kullanmasını sağla
  // Bu, tüm rotaların doğru şekilde işlenmesini sağlar
  trailingSlash: false,
  // Derleme sırasında hataları görmezden gel
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // CSS optimizasyonu için ek seçenekler
  poweredByHeader: false
};

export default nextConfig;
