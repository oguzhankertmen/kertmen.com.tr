"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const { t } = useLocale()

  // Örnek blog yazısı içeriği
  const post = {
    title: "SwiftUI ile Modern UI Tasarımı",
    date: "12 Nisan 2023",
    content: `
      <p>SwiftUI, Apple'ın 2019 yılında tanıttığı modern bir UI framework'üdür. Declarative bir syntax kullanarak, geliştiricilerin daha az kod yazarak daha güzel ve işlevsel kullanıcı arayüzleri oluşturmasına olanak tanır.</p>
      
      <h2>SwiftUI'nin Avantajları</h2>
      
      <p>SwiftUI'nin en büyük avantajlarından biri, tüm Apple platformları için tek bir UI toolkit sunmasıdır. Bu sayede iOS, macOS, watchOS ve tvOS için aynı kod tabanını kullanabilirsiniz.</p>
      
      <p>Ayrıca, SwiftUI'nin live preview özelliği sayesinde, yazdığınız kodun nasıl görüneceğini anında görebilirsiniz. Bu, geliştirme sürecini hızlandırır ve daha verimli hale getirir.</p>
      
      <h2>Temel Komponentler</h2>
      
      <p>SwiftUI, birçok hazır komponenti beraberinde getirir. Bunlardan bazıları:</p>
      
      <ul>
        <li>Text: Metin göstermek için kullanılır.</li>
        <li>Image: Görüntü göstermek için kullanılır.</li>
        <li>Button: Kullanıcı etkileşimi için düğmeler oluşturur.</li>
        <li>Stack: View'ları yatay, dikey veya üst üste düzenlemek için kullanılır.</li>
        <li>List: Veri listelerini göstermek için kullanılır.</li>
      </ul>
      
      <h2>Örnek Kod</h2>
      
      <pre><code>
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
      </code></pre>
      
      <p>Bu basit örnek, bir başlık, bir simge ve bir düğme içeren dikey bir stack oluşturur.</p>
      
      <h2>Sonuç</h2>
      
      <p>SwiftUI, modern iOS uygulamaları geliştirmek için güçlü ve verimli bir araçtır. Declarative syntax'i ve zengin komponent kütüphanesi sayesinde, geliştiriciler daha az kod yazarak daha etkileyici kullanıcı arayüzleri oluşturabilirler.</p>
    `,
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-24">
      <main>
        <article>
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> {t("blog.backToBlog")}
            </Link>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="text-neutral-500 dark:text-neutral-500 text-sm">{post.date}</div>
          </div>

          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg font-medium mb-4">{t("blog.share")}</h3>
            <div className="flex space-x-4">
              <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                Twitter
              </button>
              <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                LinkedIn
              </button>
              <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
