import BookmarkCategoryClientPage from "./BookmarkCategoryClientPage"

// Bu fonksiyon build zamanında hangi kategori'lerin statik olarak oluşturulacağını belirtir
export function generateStaticParams() {
  return [
    { category: "development" },
    { category: "design" },
    { category: "productivity" },
    { category: "inspiration" },
    { category: "tools" },
  ]
}

export default function BookmarkCategoryPage({ params }: { params: { category: string } }) {
  return <BookmarkCategoryClientPage params={params} />
}
