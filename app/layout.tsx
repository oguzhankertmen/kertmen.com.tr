import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { PageTransition } from "@/components/page-transition"
import { LocaleProvider } from "@/hooks/use-locale"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Oğuzhan Kertmen - iOS Mühendisi & Mobil Uygulama Geliştirici",
  description: "iOS geliştirme, Swift ve mobil teknolojiler hakkında blog yazıları ve portfolio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="kertmen-theme">
          <LocaleProvider>
            <Header />
            <div className="flex-grow">
              <PageTransition>{children}</PageTransition>
            </div>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
