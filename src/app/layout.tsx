import { ScrollProgress } from '@/components/magicui/scroll-progress'
import { ScrollToTopButton } from '@/components/scrolltop-button'
import { SmoothCursor } from '@/components/ui/smooth-cursor'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

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
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/guton" rel="stylesheet" />

        {/* <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        /> */}
      </head>
      <body className="text-gray-950 antialiased">
        <ScrollProgress className="top-0 z-50" />
        <SmoothCursor />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  )
}
