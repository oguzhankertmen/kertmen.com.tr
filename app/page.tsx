"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLink } from "@/components/social-link"
import { useLocale } from "@/hooks/use-locale"
import { motion } from "framer-motion"

export default function Home() {
  const { t } = useLocale()

  // Son blog yazıları
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
  ]

  // Projeler
  const projects = [
    {
      title: t("project.fitness.title"),
      description: t("project.fitness.description"),
      tags: ["Swift", "SwiftUI", "CoreData", "HealthKit"],
      link: "#",
    },
    {
      title: t("project.ecommerce.title"),
      description: t("project.ecommerce.description"),
      tags: ["Swift", "UIKit", "MVVM", "Firebase"],
      link: "#",
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
      <motion.main className="space-y-24" variants={container} initial="hidden" animate="show">
        {/* Hakkımda Bölümü */}
        <motion.section className="flex flex-col items-center text-center" variants={item}>
          <div className="mb-6 relative w-24 h-24 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-800">
            <Image src="/placeholder.svg?height=200&width=200" alt="Oğuzhan Kertmen" fill className="object-cover" />
          </div>

          <h1 className="text-3xl font-bold mb-2">Oğuzhan Kertmen</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">iOS Engineer</p>

          <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mb-8">{t("home.intro")}</p>

          <div className="flex space-x-4 mb-8">
            <SocialLink href="https://github.com/kertmen" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="https://twitter.com/kertmen" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink
              href="https://linkedin.com/in/kertmen"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialLink href="mailto:info@kertmen.com.tr" icon={<Mail className="h-5 w-5" />} label="E-posta" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/hakkimda">{t("about.title")}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/iletisim">{t("contact.title")}</Link>
            </Button>
          </div>
        </motion.section>

        {/* Projeler Bölümü */}
        <motion.section variants={item}>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            {t("home.featured")}
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Link href={project.link} className="block">
                  <h3 className="text-xl font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Yazıları Bölümü */}
        <motion.section variants={item}>
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold">{t("home.latestPosts")}</h2>
            <Link
              href="/blog"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center group"
            >
              {t("home.allPosts")}
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Link href={post.slug} className="block">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                    <h3 className="text-lg font-medium group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-neutral-500 dark:text-neutral-500 text-sm mt-1 sm:mt-0">{post.date}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  )
}
