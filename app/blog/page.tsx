"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { motion } from "framer-motion"

export default function BlogPage() {
  const { t } = useLocale()

  // Bu veri normalde bir CMS veya veritabanından gelecektir
  const blogPosts = [
    {
      title: t("blog.post1.title"),
      date: t("blog.post1.date"),
      slug: "/blog/swiftui-modern-ui-tasarimi",
    },
    {
      title: t("blog.post2.title"),
      date: t("blog.post2.date"),
      slug: "/blog/ios-16-yeni-ozellikler",
    },
    {
      title: t("blog.post3.title"),
      date: t("blog.post3.date"),
      slug: "/blog/swift-concurrency-asenkron-programlama",
    },
    {
      title: t("blog.post4.title"),
      date: t("blog.post4.date"),
      slug: "/blog/core-data-veritabani-yonetimi",
    },
    {
      title: t("blog.post5.title"),
      date: t("blog.post5.date"),
      slug: "/blog/combine-framework-kullanimi",
    },
    {
      title: t("blog.post6.title"),
      date: t("blog.post6.date"),
      slug: "/blog/ios-uygulamalarinda-test-yazimi",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-24">
      <motion.main variants={container} initial="hidden" animate="show">
        <motion.div className="mb-8" variants={item}>
          <Link
            href="/"
            className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("blog.backHome")}
          </Link>
          <h1 className="text-3xl font-bold mb-4">{t("blog.title")}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">{t("blog.subtitle")}</p>
        </motion.div>

        <motion.div className="space-y-6" variants={item}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Link href={post.slug} className="block py-3">
                <div className="flex justify-between mb-1">
                  <h3 className="text-lg font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-neutral-500 dark:text-neutral-500 text-sm">{post.date}</span>
                </div>
              </Link>
              {index < blogPosts.length - 1 && (
                <div className="border-b border-neutral-200 dark:border-neutral-800"></div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </motion.main>
    </div>
  )
}
