"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle language</span>
      </Button>
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full focus:outline-none focus:ring-0">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent align="end" asChild forceMount>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DropdownMenuItem
                onClick={() => {
                  setLocale("tr")
                  setIsOpen(false)
                }}
              >
                <span className={locale === "tr" ? "font-medium" : ""}>{t("lang.tr")}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setLocale("en")
                  setIsOpen(false)
                }}
              >
                <span className={locale === "en" ? "font-medium" : ""}>{t("lang.en")}</span>
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  )
}
