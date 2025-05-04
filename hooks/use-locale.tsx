"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { dictionary, type Locale } from "@/lib/i18n"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en") // Default dil İngilizce olarak değiştirildi
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "tr" || savedLocale === "en")) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (mounted) {
      localStorage.setItem("locale", newLocale)
    }
  }

  const t = (key: string): string => {
    if (!mounted) return dictionary["en"][key] || key // Default olarak İngilizce
    return dictionary[locale][key] || key
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
