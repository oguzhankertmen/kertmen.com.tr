"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/hooks/use-locale"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export function BlogPostCard({ title, excerpt, date, slug }: BlogPostCardProps) {
  const { t } = useLocale()

  return (
    <motion.div
      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full apple-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{date}</div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">{excerpt}</p>
      <Link
        href={slug}
        className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 group transition-colors mt-auto apple-link"
      >
        {t("blog.readMore")}
        <motion.span className="inline-block ml-1" initial={{ x: 0 }} whileHover={{ x: 3 }}>
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </Link>
    </motion.div>
  )
}
