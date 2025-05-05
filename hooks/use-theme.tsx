"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Global değişken - sayfa geçişlerinde korunur
let globalTheme: Theme = "dark"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(globalTheme)
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Sayfa yüklendiğinde localStorage'dan tema bilgisini al
  useEffect(() => {
    setMounted(true)

    // localStorage'dan tema bilgisini al
    const savedTheme = localStorage.getItem("theme") as Theme
    const newTheme = savedTheme === "light" ? "light" : "dark"

    // Global değişkeni güncelle
    globalTheme = newTheme

    // State'i güncelle
    setThemeState(newTheme)

    // HTML sınıfını güncelle
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Tema değiştiğinde localStorage'a kaydet ve HTML sınıfını güncelle
  const setTheme = (newTheme: Theme) => {
    // Eğer geçiş süreci devam ediyorsa, işlemi engelle
    if (isTransitioning) return

    setIsTransitioning(true)

    // Global değişkeni güncelle
    globalTheme = newTheme

    // State'i güncelle
    setThemeState(newTheme)

    // localStorage'a kaydet
    localStorage.setItem("theme", newTheme)

    // HTML sınıfını güncelle
    if (newTheme === "dark") {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    }

    // Geçiş sürecinin tamamlanması için bir süre bekle
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // 500ms geçiş süresi
  }

  // Temayı değiştir
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
