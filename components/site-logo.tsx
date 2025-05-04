"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export function SiteLogo() {
  const letters = "kertmen".split("")

  return (
    <Link href="/" className="relative group">
      <div className="flex items-center overflow-hidden">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block text-lg font-medium"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}
