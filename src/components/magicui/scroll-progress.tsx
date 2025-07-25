'use client'

import { cn } from '@/lib/utils'
import { motion, type MotionProps, useScroll } from 'motion/react'
import React from 'react'
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#FFC62B]/30 via-[#FFC62B]/70 to-[#FFC62B]/100 backdrop-blur-sm',
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
})

ScrollProgress.displayName = 'ScrollProgress'
