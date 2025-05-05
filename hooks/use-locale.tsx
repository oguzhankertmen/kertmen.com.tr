"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { dictionary, type Locale } from "@/lib/i18n"
import { useRouter } from "next/navigation"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

// Global değişken - sayfa geçişlerinde korunur
let globalLocale: Locale = "en"

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(globalLocale)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const savedLocale = localStorage.getItem("locale") as Locale

    // Geçerli bir locale değeri mi kontrol et
    const newLocale = savedLocale === "tr" ? "tr" : "en"

    // Global değişkeni güncelle
    globalLocale = newLocale

    // State'i güncelle
    setLocaleState(newLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    // Global değişkeni güncelle
    globalLocale = newLocale

    // State'i güncelle
    setLocaleState(newLocale)

    // localStorage'a kaydet
    localStorage.setItem("locale", newLocale)

    // Sayfa geçiş animasyonu için sayfayı yeniden yükle
    // Bu, mevcut sayfayı yeniden yükleyerek geçiş animasyonunu tetikler
    router.refresh()
  }

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "tr" : "en"
    setLocale(newLocale)
  }

  const t = (key: string): string => {
    if (!mounted) return dictionary["en"][key] || key
    // Her seferinde dictionary'den al, önbelleklemeye izin verme
    return dictionary[locale]?.[key] || key
  }

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
