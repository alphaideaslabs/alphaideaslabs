// 'use client'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { NavMenu } from './nav-menu'

export const NavigationSheet = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full">
        <Menu className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={clsx(
            'rounded-full',
            resolvedTheme === 'dark'
              ? 'bg-[#101820] text-[#FFFBEB]'
              : 'bg-background text-foreground',
          )}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  )
}
