"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

interface BookmarkItem {
  title: string
  description: string
  url: string
  category: string
}

export default function BookmarksPage() {
  const { t } = useLocale()

  const bookmarks: BookmarkItem[] = [
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
      title: "Hacking with Swift",
      description: "Swift ve iOS geliştirme hakkında ücretsiz eğitimler ve projeler.",
      url: "https://www.hackingwithswift.com",
      category: "development",
    },
    {
      title: "Ray Wenderlich",
      description: "iOS, Android, Flutter ve Unity için kapsamlı eğitimler ve makaleler.",
      url: "https://www.raywenderlich.com",
      category: "development",
    },
    {
      title: "Figma",
      description: "Web tabanlı UI/UX tasarım aracı.",
      url: "https://www.figma.com",
      category: "design",
    },
    {
      title: "Dribbble",
      description: "Tasarımcıların çalışmalarını paylaştığı platform. İlham almak için harika bir kaynak.",
      url: "https://dribbble.com",
      category: "design",
    },
    {
      title: "Behance",
      description: "Yaratıcı profesyoneller için portfolyo platformu.",
      url: "https://www.behance.net",
      category: "design",
    },
    {
      title: "Notion",
      description: "Not alma, proje yönetimi ve veritabanı oluşturma için çok yönlü bir araç.",
      url: "https://www.notion.so",
      category: "productivity",
    },
    {
      title: "Todoist",
      description: "Görev yönetimi ve yapılacaklar listesi uygulaması.",
      url: "https://todoist.com",
      category: "productivity",
    },
    {
      title: "Obsidian",
      description: "Bilgi tabanı ve not alma uygulaması.",
      url: "https://obsidian.md",
      category: "productivity",
    },
    {
      title: "Awwwards",
      description: "En iyi web tasarımlarını sergileyen platform.",
      url: "https://www.awwwards.com",
      category: "inspiration",
    },
    {
      title: "Product Hunt",
      description: "Yeni ürünleri keşfetmek için platform.",
      url: "https://www.producthunt.com",
      category: "inspiration",
    },
    {
      title: "GitHub",
      description: "Kod paylaşımı ve versiyon kontrolü için platform.",
      url: "https://github.com",
      category: "tools",
    },
    {
      title: "VS Code",
      description: "Microsoft tarafından geliştirilen ücretsiz ve açık kaynaklı kod editörü.",
      url: "https://code.visualstudio.com",
      category: "tools",
    },
    {
      title: "Postman",
      description: "API geliştirme ve test etme aracı.",
      url: "https://www.postman.com",
      category: "tools",
    },
  ]

  const categories = [
    { id: "development", name: t("bookmarks.development") },
    { id: "design", name: t("bookmarks.design") },
    { id: "productivity", name: t("bookmarks.productivity") },
    { id: "inspiration", name: t("bookmarks.inspiration") },
    { id: "tools", name: t("bookmarks.tools") },
  ]

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-24">
      <main>
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("bookmarks.backHome")}
          </Link>
          <h1 className="text-3xl font-bold mb-4">{t("bookmarks.title")}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">{t("bookmarks.subtitle")}</p>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              {category.name}
            </h2>
            <div className="space-y-6">
              {bookmarks
                .filter((bookmark) => bookmark.category === category.id)
                .map((bookmark, index) => (
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
          </div>
        ))}
      </main>

      <footer className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-600 dark:text-neutral-400">
        <p>
          © {new Date().getFullYear()} Oğuzhan Kertmen. {t("footer.rights")}
        </p>
      </footer>
    </div>
  )
}
