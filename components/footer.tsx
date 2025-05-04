"use client"

import { useLocale } from "@/hooks/use-locale"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <div className="max-w-3xl mx-auto px-4">
        <p>
          © {new Date().getFullYear()} Oğuzhan Kertmen. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
