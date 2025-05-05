"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function BookmarkCategoryClientPage({ params }: { params: { category: string } }) {
  const { t } = useLocale()
  const category = params.category

  // Kategori adını çeviri için kullan
  const getCategoryName = () => {
    switch (category) {
      case "development":
        return t("bookmarks.development")
      case "design":
        return t("bookmarks.design")
      case "productivity":
        return t("bookmarks.productivity")
      case "inspiration":
        return t("bookmarks.inspiration")
      case "tools":
        return t("bookmarks.tools")
      default:
        return category
    }
  }

  // Bu veri normalde bir CMS veya veritabanından gelecektir
  const bookmarks = [
    {
      title: "Apple Developer",
      description: "Apple'ın resmi geliştirici portalı. iOS, macOS, watchOS ve tvOS için geliştirme kaynakları.",
      url: "https://developer.apple.com",
      category: "development",
    },
    {
      title: "Swift by Sundell",
      description: "Swift programlama dili hakkında makaleler, ipuçları ve püf noktaları.",
      url: "https://www.swiftbysundell.com",
      category: "development",
    },
    {
      title: "Figma",
      description: "Web tabanlı UI/UX tasarım aracı.",
      url: "https://www.figma.com",
      category: "design",
    },
    {
      title: "Notion",
      description: "Not alma, proje yönetimi ve veritabanı oluşturma için çok yönlü bir araç.",
      url: "https://www.notion.so",
      category: "productivity",
    },
    {
      title: "Awwwards",
      description: "En iyi web tasarımlarını sergileyen platform.",
      url: "https://www.awwwards.com",
      category: "inspiration",
    },
    {
      title: "GitHub",
      description: "Kod paylaşımı ve versiyon kontrolü için platform.",
      url: "https://github.com",
      category: "tools",
    },
  ].filter((bookmark) => bookmark.category === category)

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-24">
      <main>
        <div className="mb-8">
          <Link
            href="/bookmarks"
            className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("bookmarks.backHome")}
          </Link>
          <h1 className="text-3xl font-bold mb-4">{getCategoryName()}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">{t("bookmarks.subtitle")}</p>
        </div>

        <div className="space-y-6">
          {bookmarks.map((bookmark, index) => (
            <div key={index} className="group">
              <h3 className="text-lg font-medium mb-1">{bookmark.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{bookmark.description}</p>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {t("bookmarks.visit")}
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
