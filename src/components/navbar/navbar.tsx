'use client'
import { Button } from '@/components/button'
import { Logo } from '@/components/logo'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavMenu } from './nav-menu'
import { NavigationSheet } from './navigation-sheet'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 300
      setScrolled(window.scrollY > heroHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-1/2 top-6 z-50 w-full -translate-x-1/2 px-4">
      <motion.nav
        initial={false}
        animate={scrolled ? 'scrolled' : 'default'}
        variants={{
          default: {},
          scrolled: {},
        }}
        transition={{ duration: 2.0, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          'pointer-events-auto w-full',
          'max-w-[80%]', // ✅ di semua screen: max 80%
          'h-[60px]',
          'rounded-full px-4 py-2', // lebih halus di mobile
          'lg:max-w-fit lg:rounded-full lg:px-6', // ✅ desktop: fit & rounded full
          'border bg-background/70',
          'shadow-md backdrop-blur transition-all duration-300',
          'dark:border[#101820]/70',
          'flex items-center justify-between gap-4',
          'mx-auto',
        )}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center: NavMenu */}
        <div className="hidden lg:flex">
          <NavMenu />
        </div>

        {/* Right: Login button and Mobile Menu */}
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                className="hidden lg:block"
              >
                <Button>Get started</Button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
