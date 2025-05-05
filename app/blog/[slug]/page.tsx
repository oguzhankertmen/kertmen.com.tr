import { BlogPostPageClient } from "./BlogPostPageClient"

// Bu fonksiyon build zamanında hangi slug'ların statik olarak oluşturulacağını belirtir
export function generateStaticParams() {
  return [
    { slug: "swiftui-modern-ui-tasarimi" },
    { slug: "ios-16-yeni-ozellikler" },
    { slug: "swift-concurrency-asenkron-programlama" },
    { slug: "core-data-veritabani-yonetimi" },
    { slug: "combine-framework-kullanimi" },
    { slug: "ios-uygulamalarinda-test-yazimi" },
  ]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient params={params} />
}
