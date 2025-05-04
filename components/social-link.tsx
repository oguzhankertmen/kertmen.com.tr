import type { ReactNode } from "react"

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
