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
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
