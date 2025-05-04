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
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
