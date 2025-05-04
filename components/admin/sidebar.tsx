"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, ImageIcon, Settings, Users, Home, Menu, X } from "lucide-react"
import { useState } from "react"
import { AnimatedLogo } from "@/components/animated-logo"
import { cn } from "@/lib/utils"

export function AdminSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Blog Yazıları", href: "/admin/blog", icon: FileText },
    { name: "Medya", href: "/admin/medya", icon: ImageIcon },
    { name: "Sayfalar", href: "/admin/sayfalar", icon: FileText },
    { name: "Ayarlar", href: "/admin/ayarlar", icon: Settings },
    { name: "Kullanıcılar", href: "/admin/kullanicilar", icon: Users },
    { name: "Siteye Git", href: "/", icon: Home },
  ]

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsMobileOpen(true)} className="p-2 bg-white rounded-md shadow-md">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={cn("fixed inset-0 z-40 bg-black/50 md:hidden", isMobileOpen ? "block" : "hidden")}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <AnimatedLogo />
          <button onClick={() => setIsMobileOpen(false)} className="p-1 rounded-full hover:bg-gray-100 md:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-neutral-100 text-neutral-900 font-medium"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50",
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                {/* @ts-expect-error */}
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
