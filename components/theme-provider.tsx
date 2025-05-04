"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme as useNextThemes } from "next-themes"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  attribute?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: Theme | undefined
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "dark", // Default tema dark olarak ayarlandı
  storageKey = "kertmen-theme",
  attribute = "class",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useNextThemes({
    defaultTheme,
    storageKey,
    attribute,
    enableSystem,
  })

  // Tema değişikliğini anında uygulamak için
  useEffect(() => {
    const root = window.document.documentElement

    // Sayfa yüklendiğinde veya tema değiştiğinde
    if (resolvedTheme) {
      root.classList.remove("light", "dark")
      root.classList.add(resolvedTheme)
    }

    if (!mounted) {
      setMounted(true)
    }
  }, [resolvedTheme, mounted])

  // Sayfa ilk yüklendiğinde dark mode'u zorla
  useEffect(() => {
    if (!mounted) {
      document.documentElement.classList.add("dark")
    }
  }, [mounted])

  // Tema değişikliğini localStorage'a kaydet
  useEffect(() => {
    if (mounted && theme) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, mounted, storageKey])

  const value = {
    theme: theme as Theme,
    setTheme: setTheme as (theme: Theme) => void,
    resolvedTheme: resolvedTheme as Theme | undefined,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
