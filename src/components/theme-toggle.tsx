'use client'

import clsx from 'clsx' // Import clsx
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

type Props = {
  className?: string
}

const ThemeToggle = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={clsx('rounded-full', className)}
      />
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={clsx(
        'rounded-full',
        className,
        resolvedTheme === 'dark'
          ? 'bg-[#101820] text-[#FFFBEB]' // Dark mode: dark yellow background, black icon
          : 'bg-background text-foreground', // Light mode: default background, default icon
      )}
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeToggle
