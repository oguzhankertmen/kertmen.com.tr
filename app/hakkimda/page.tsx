"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, GithubIcon, LinkedinIcon, Mail, X } from "lucide-react"
import { SocialLink } from "@/components/social-link"
import { useLocale } from "@/hooks/use-locale"
import { motion } from "framer-motion"

export default function AboutPage() {
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
            <ArrowLeft className="mr-1 h-4 w-4" /> {t("about.backHome")}
          </Link>
          <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row gap-8 items-start" variants={item}>
          <div className="w-full md:w-1/4">
            <div className="sticky top-24">
              <div className="mb-6 relative w-32 h-32 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-800 mx-auto md:mx-0">
                <Image
                  src="/about-photo.jpg?height=200&width=200"
                  alt="Oğuzhan Kertmen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center md:justify-start gap-3">
                <SocialLink href="https://github.com/oguzhankertmen" icon={<GithubIcon className="h-4 w-4" />} label="GitHub" />
                <SocialLink href="https://x.com/Obivankenogi" icon={<XIcon  className="h-4 w-4" />} label="X (Twitter)" />
                <SocialLink
                  href="https://linkedin.com/in/oguzhan-kertmen"
                  icon={<LinkedinIcon className="h-4 w-4" />}
                  label="LinkedIn"
                />
                <SocialLink href="mailto:oguzhan@kertmen.com.tr" icon={<Mail className="h-4 w-4" />} label="E-posta" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>{t("about.intro")}</p>

              <h2>{t("about.experience")}</h2>
              <p className="whitespace-pre-line">{t("about.experienceText")}</p>

              <h2>{t("about.education")}</h2>
              <p>{t("about.educationText")}</p>

              <h2>{t("about.skills")}</h2>
              <ul>
                <li>Swift</li>
                <li>SwiftUI</li>
                <li>UIKit</li>
                <li>MVVM, MVC, Clean Architecture</li>
                <li>Core Data, Realm</li>
                <li>RESTful API entegrasyonu</li>
                <li>Unit ve UI Testing</li>
                <li>CI/CD (Fastlane, Jenkins)</li>
                <li>Git</li>
              </ul>

              <h2>{t("about.interests")}</h2>
              <p>{t("about.interestsText")}</p>

              <h2>{t("about.contact")}</h2>
              <p>{t("about.contactText")}</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}

// X (Twitter) ikonu
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768" />
      <path d="M20 4l-7.955 7.955" />
    </svg>
  )
}
