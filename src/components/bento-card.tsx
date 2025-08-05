'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean
  className?: string
  eyebrow: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic: React.ReactNode
  fade?: ('top' | 'bottom')[]
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-background/70 shadow-sm ring-1 ring-black/5',
        'dark:bg-[#101820]/70 dark:ring-white/15',
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes('top') && (
          <div className="absolute inset-0 bg-gradient-to-b from-white to-50% dark:from-gray-800 dark:from-[-25%]" />
        )}
        {fade.includes('bottom') && (
          <div className="absolute inset-0 bg-gradient-to-t from-white to-50% dark:from-gray-800 dark:from-[-25%]" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-[#101820] dark:text-[#FFFBEB]">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-[#101820]/70 dark:text-[#FFFBEB]/70">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
