'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const logos = [
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958651/react-original.svg',
    alt: 'GitHub',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958251/typescript-original.svg',
    alt: 'Nvidia',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1751958648/tailwindcss-original.svg',
    alt: 'Column',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1751960617/nextjs-dark-original.svg',
    alt: 'Nike',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1752025357/shadcn-ui-light-original.svg',
    alt: 'GitHub',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029833/chatgpt-light-original.svg',
    alt: 'Lemon Squeezy',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029960/figma-original.svg',
    alt: 'Laravel',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1752029479/vercel-light-original.svg',
    alt: 'Lilly',
    height: 50,
  },
  {
    src: 'https://res.cloudinary.com/dnuusu1kb/image/upload/v1752027524/solidity-light-original.svg',
    alt: 'OpenAI',
    height: 50,
  },
]

export function LogoCloud() {
  return (
    <section className="overflow-hidden py-16">
      <div className="relative m-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:items-start">
        {/* Caption */}
        <div className="mb-4 w-full text-center md:mb-0 md:w-48 md:shrink-0 md:pr-6 md:text-end">
          <div className="mx-auto border-b pb-6 md:mx-0 md:max-w-44 md:border-r md:pr-6">
            <p className="text-sm">
              We use these tools and stacks to build our products.
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="relative w-full">
          <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
            {logos.map((logo, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center"
              >
                <img
                  className="h-auto dark:invert"
                  src={logo.src}
                  alt={`${logo.alt} Logo`}
                  style={{ height: `${logo.height}px` }}
                />
                <span className="absolute bottom-full mb-2 hidden rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {logo.alt}
                </span>
              </div>
            ))}
          </InfiniteSlider>

          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background"></div>

          {/* Blur effect */}
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
