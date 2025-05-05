"use client"

import type React from "react"

// Bu dosya artık kullanılmıyor, hooks/use-theme.tsx dosyasına taşındı
// Geriye dönük uyumluluk için boş bir bileşen bırakıyoruz
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function useTheme() {
  console.warn("useTheme is deprecated, use hooks/use-theme.tsx instead")
  return {
    theme: "dark",
    setTheme: () => {},
    resolvedTheme: "dark",
  }
}
