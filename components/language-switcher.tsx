"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { useEffect, useState } from "react"

export function LanguageSwitcher() {
  const { locale, toggleLocale } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Globe className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" className="rounded-full relative" onClick={toggleLocale}>
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute top-0 right-0 h-3 w-3 text-[8px] font-bold">{locale.toUpperCase()}</span>
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
