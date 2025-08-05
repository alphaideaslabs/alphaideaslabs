import { ScrollProgress } from '@/components/magicui/scroll-progress'
import { ScrollToTopButton } from '@/components/scrolltop-button'
import { SmoothCursor } from '@/components/ui/smooth-cursor'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: {
    template: '%s - Alpha Ideas Labs',
    default: 'Alpha Ideas Labs - Build your next big thing',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/guton" rel="stylesheet" />
      </head>
      <body className="text-[#101820] antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress className="top-0 z-50" />
          <SmoothCursor />
          <ScrollToTopButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
