"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/hooks/use-locale"
import { motion } from "framer-motion"

export default function ContactPage() {
  const { t } = useLocale()

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
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("contact.backHome")}
          </Link>
          <h1 className="text-3xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.div className="space-y-8" variants={item}>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {t("contact.name")}
              </label>
              <Input
                id="name"
                placeholder={t("contact.name")}
                className="bg-background border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t("contact.email")}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t("contact.email")}
                className="bg-background border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                {t("contact.subject")}
              </label>
              <Input
                id="subject"
                placeholder={t("contact.subject")}
                className="bg-background border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {t("contact.message")}
              </label>
              <Textarea
                id="message"
                placeholder={t("contact.message")}
                rows={6}
                className="bg-background border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-md transition-all duration-300"
            >
              {t("contact.send")}
            </Button>
          </form>

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-medium mb-4">{t("contact.info")}</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">{t("contact.emailLabel")}</h3>
                <a
                  href="mailto:info@kertmen.com.tr"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  info@kertmen.com.tr
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium">{t("contact.location")}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
