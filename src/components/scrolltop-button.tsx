'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 lg:bottom-9 lg:right-9"
        >
          <Button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="dark:border[#101820]/70 h-10 w-10 rounded-full border border-[#101820]/10 bg-background/70 text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-background/90 dark:border-[#FFFBEB]/20 dark:bg-[#101820]/70 md:h-11 md:w-11 lg:h-12 lg:w-12"
          >
            <ArrowUp className="h-5 w-5 text-[#101820] dark:text-[#FFFBEB] md:h-6 md:w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
