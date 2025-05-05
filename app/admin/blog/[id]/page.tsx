"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState({
    title: "SwiftUI ile Modern UI Tasarımı",
    slug: "swiftui-modern-ui-tasarimi",
    content: `
SwiftUI, Apple'ın 2019 yılında tanıttığı modern bir UI framework'üdür. Declarative bir syntax kullanarak, geliştiricilerin daha az kod yazarak daha güzel ve işlevsel kullanıcı arayüzleri oluşturmasına olanak tanır.

## SwiftUI'nin Avantajları

SwiftUI'nin en büyük avantajlarından biri, tüm Apple platformları için tek bir UI toolkit sunmasıdır. Bu sayede iOS, macOS, watchOS ve tvOS için aynı kod tabanını kullanabilirsiniz.

Ayrıca, SwiftUI'nin live preview özelliği sayesinde, yazdığınız kodun nasıl görüneceğini anında görebilirsiniz. Bu, geliştirme sürecini hızlandırır ve daha verimli hale getirir.

## Temel Komponentler

SwiftUI, birçok hazır komponenti beraberinde getirir. Bunlardan bazıları:

- Text: Metin göstermek için kullanılır.
- Image: Görüntü göstermek için kullanılır.
- Button: Kullanıcı etkileşimi için düğmeler oluşturur.
- Stack: View'ları yatay, dikey veya üst üste düzenlemek için kullanılır.
- List: Veri listelerini göstermek için kullanılır.

## Örnek Kod

\`\`\`swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Merhaba, SwiftUI!")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            Image(systemName: "swift")
                .font(.system(size: 56))
                .foregroundColor(.orange)
            
            Button(action: {
                print("Düğmeye tıklandı!")
            }) {
                Text("Tıkla Bana")
                    .fontWeight(.semibold)
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
        }
        .padding()
    }
}
\`\`\`

Bu basit örnek, bir başlık, bir simge ve bir düğme içeren dikey bir stack oluşturur.

## Sonuç

SwiftUI, modern iOS uygulamaları geliştirmek için güçlü ve verimli bir araçtır. Declarative syntax'i ve zengin komponent kütüphanesi sayesinde, geliştiriciler daha az kod yazarak daha etkileyici kullanıcı arayüzleri oluşturabilirler.
    `,
    excerpt: "SwiftUI'nin sunduğu modern arayüz tasarım imkanlarını ve en iyi pratikleri inceliyoruz.",
    status: "published",
    date: "2023-04-12",
    tags: ["SwiftUI", "iOS", "UI Design"],
    coverImage: "/placeholder.svg?height=400&width=600",
  })

  const handleChange = (field: string, value: string) => {
    setPost((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/blog" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Blog Yazısını Düzenle</h1>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" /> Kaydet
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Başlık</Label>
            <Input id="title" value={post.title} onChange={(e) => handleChange("title", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">İçerik</Label>
            <Textarea
              id="content"
              value={post.content}
              onChange={(e) => handleChange("content", e.target.value)}
              className="min-h-[500px] font-mono"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="slug">URL</Label>
            <Input id="slug" value={post.slug} onChange={(e) => handleChange("slug", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Özet</Label>
            <Textarea
              id="excerpt"
              value={post.excerpt}
              onChange={(e) => handleChange("excerpt", e.target.value)}
              className="h-24"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Durum</Label>
            <Select value={post.status} onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Durum seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="published">Yayında</SelectItem>
                <SelectItem value="draft">Taslak</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Tarih</Label>
            <Input id="date" type="date" value={post.date} onChange={(e) => handleChange("date", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Etiketler (virgülle ayırın)</Label>
            <Input id="tags" value={post.tags.join(", ")} onChange={(e) => handleChange("tags", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Kapak Görseli URL</Label>
            <Input
              id="coverImage"
              value={post.coverImage}
              onChange={(e) => handleChange("coverImage", e.target.value)}
            />
            {post.coverImage && (
              <div className="mt-2 border rounded-md p-2">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt="Kapak görseli önizleme"
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
