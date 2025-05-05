/** @type {import('next').NextConfig} */
const nextConfig = {
  // CloudFlare Pages ile uyumlu yapılandırma
  output: 'export',
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
  // CloudFlare Workers için gerekli ayarlar
  experimental: {
    // Statik HTML dışa aktarımı için gerekli
    appDir: true,
    // Daha küçük paket boyutu için
    optimizeCss: true,
    // Daha hızlı derleme için
    turbotrace: {
      logLevel: 'error',
    },
  },
};

export default nextConfig;
