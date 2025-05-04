"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface AnimatedLogoProps {
  className?: string
}

export function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      letterRefs.current.forEach((letter, index) => {
        if (!letter) return

        const rect = letter.getBoundingClientRect()
        const x = rect.left + rect.width / 2 - e.clientX
        const y = rect.top + rect.height / 2 - e.clientY
        const distance = Math.sqrt(x * x + y * y)

        // Etki alanı - fare ne kadar yakınsa o kadar güçlü etki
        const maxDistance = 200
        const intensity = Math.max(0, 1 - distance / maxDistance)

        // Harflerin hafif dönmesi ve hareket etmesi
        const rotateIntensity = intensity * 5 // max 5 derece
        const translateIntensity = intensity * 3 // max 3px

        const xDirection = x > 0 ? 1 : -1
        const yDirection = y > 0 ? 1 : -1

        letter.style.transform = `
          translate(${translateIntensity * xDirection * -0.5}px, ${translateIntensity * yDirection * -0.5}px)
          rotate(${rotateIntensity * xDirection * -0.5}deg)
        `
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const letters = "kertmen".split("")

  return (
    <Link href="/" className={`relative group ${className}`}>
      <div className="flex items-center overflow-hidden">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            ref={(el) => (letterRefs.current[index] = el)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block text-xl font-medium tracking-tight transition-transform duration-200"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-foreground w-0 group-hover:w-full"
        initial={{ width: 0 }}
        animate={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  )
}
