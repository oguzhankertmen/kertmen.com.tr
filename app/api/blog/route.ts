import { type NextRequest, NextResponse } from "next/server"

// Statik export için gerekli yapılandırma
export const dynamic = "force-static"
export const revalidate = 3600 // Her saat başı yeniden oluştur

// Blog yazılarını getir
export async function GET(request: NextRequest) {
  try {
    // CloudFlare Workers ortamında, env.KV_BLOG namespace'ine erişim sağlanacak
    // Burada simüle ediyoruz
    const posts = [
      {
        slug: "swiftui-modern-ui-tasarimi",
        title: "SwiftUI ile Modern UI Tasarımı",
        excerpt: "SwiftUI'nin sunduğu modern arayüz tasarım imkanlarını ve en iyi pratikleri inceliyoruz.",
        date: "2023-04-12",
        status: "published",
        coverImage: "/placeholder.svg?height=400&width=600",
      },
      {
        slug: "ios-16-yeni-ozellikler",
        title: "iOS 16'daki Yeni Özellikler",
        excerpt: "Apple'ın son işletim sistemi güncellemesindeki geliştiricileri ilgilendiren yenilikler.",
        date: "2023-03-05",
        status: "published",
        coverImage: "/placeholder.svg?height=400&width=600",
      },
    ]

    return NextResponse.json({ success: true, posts })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Blog yazıları alınamadı" }, { status: 500 })
  }
}

// Yeni blog yazısı ekle veya mevcut yazıyı güncelle
export async function POST(request: NextRequest) {
  try {
    const post = await request.json()

    // Gerekli alanların kontrolü
    if (!post.title || !post.slug || !post.content) {
      return NextResponse.json(
        { success: false, message: "Başlık, URL ve içerik alanları zorunludur" },
        { status: 400 },
      )
    }

    // CloudFlare Workers ortamında KV'ye kaydetme işlemi yapılacak
    // Burada başarılı olduğunu varsayıyoruz

    return NextResponse.json({
      success: true,
      message: "Blog yazısı başarıyla kaydedildi",
      post,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Blog yazısı kaydedilemedi" }, { status: 500 })
  }
}
