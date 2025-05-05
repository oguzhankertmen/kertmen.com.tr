import EditBlogPostClient from "./EditBlogPostClient"

// Statik export için gerekli parametreleri tanımla
export function generateStaticParams() {
  // Varsayılan olarak en az bir ID için statik sayfa oluştur
  return [
    { id: "swiftui-modern-ui-tasarimi" },
    { id: "ios-16-yeni-ozellikler" },
    { id: "new" } // Yeni yazı oluşturmak için
  ]
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
  return <EditBlogPostClient params={params} />
}
