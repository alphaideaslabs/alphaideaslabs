'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Custom hook untuk tunggu mount
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

interface Logo {
  src: string
  alt: string
  height: number
  darkSrc?: string
}

const logos: Logo[] = [
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753755769/vscode-logo.svg',
    alt: 'VSCode',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753755939/figma-logo.svg',
    alt: 'Figma',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753756170/react-logo.svg',
    alt: 'React',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754365682/nextjs-light-original.svg',
    darkSrc:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754365682/nextjs-dark-original.svg',
    alt: 'Next JS',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753756248/typescript-logo.svg',
    alt: 'TypeScript',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753756250/tailwindcss-logo.svg',
    alt: 'Tailwind CSS',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366296/shadcn-ui-light-original.svg',
    darkSrc:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366296/shadcn-ui-dark-original.svg',
    alt: 'Shadcn UI',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366297/radixui-light-original.svg',
    darkSrc:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366297/radixui-dark-original.svg',
    alt: 'Radix UI',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366296/vercel-light-original.svg',
    darkSrc:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366296/vercel-dark-original.svg',
    alt: 'Vercel',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366557/chatgpt-light-original.svg',
    darkSrc:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1754366557/chatgpt-dark-original.svg',
    alt: 'OpenAI',
    height: 50,
  },
]

interface LogoCloudProps {
  className?: string
}

export function LogoCloud({ className }: LogoCloudProps) {
  const { resolvedTheme } = useTheme()
  const hasMounted = useHasMounted()

  return (
    <section
      className={`overflow-hidden bg-background py-12 md:py-20 lg:py-32 ${className}`}
    >
      <div className="relative m-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center">
        {/* Text Panel */}
        <div className="mb-4 flex w-full items-center md:mb-0 md:w-48 md:shrink-0 md:pr-6 md:text-end">
          <div className="w-[60%] border-[#101820]/20 pb-6 dark:border-[#FFFBEB]/20 md:mx-0 md:w-full md:max-w-44 md:border-b-0 md:border-r-2 md:pb-0 md:pr-6 lg:w-full">
            <p className="text-start text-sm font-medium text-[#101820] dark:text-[#FFFBEB] md:text-end">
              We use these tools and stacks to build our products.
            </p>
            <div className="mt-6 h-[1.5px] w-[90%] bg-[#101820]/20 md:hidden" />
          </div>
        </div>

        {/* Logos */}
        <div className="relative w-full items-center">
          <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
            {logos.map((logo, i) => {
              const imageSrc =
                hasMounted && resolvedTheme === 'dark' && logo.darkSrc
                  ? logo.darkSrc
                  : logo.src
              return (
                <div
                  key={i}
                  className="group relative flex items-center justify-center"
                >
                  <Image
                    src={imageSrc}
                    alt={`${logo.alt} Logo`}
                    width={50}
                    height={logo.height}
                  />
                  <span className="absolute bottom-full mb-2 hidden rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {logo.alt}
                  </span>
                </div>
              )
            })}
          </InfiniteSlider>

          {/* Gradient Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background" />

          {/* Blur Effect */}
          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-20"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  )
}
