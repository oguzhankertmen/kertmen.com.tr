"use client"

import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Sadece client-side'da render edildiğinden emin oluyoruz
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
        theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 16 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-3 h-3 text-neutral-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-3 h-3 text-amber-500"
          >
            <circle cx={12} cy={12} r={5} strokeWidth={2} />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
        )}
      </motion.div>
    </button>
  )
}
