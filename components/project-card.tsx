"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
  return (
    <motion.div
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 apple-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group/link apple-link"
        >
          Detayları Gör
          <motion.span initial={{ x: 0 }} whileHover={{ x: 3 }} className="inline-block ml-1">
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}
