export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if (src.startsWith('data:')) return src
  if (src.startsWith('http://') || src.startsWith('https://')) return src

  return `https://kertmen.com.tr${src}?width=${width}&quality=${quality || 75}`
} 