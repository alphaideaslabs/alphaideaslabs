'use client'

import { Globe } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LanguageToggleProps = {
  className?: string
}

export function LangToggle({ className }: LanguageToggleProps) {
  const [language, setLanguage] = React.useState('eng') // Default ke English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'eng' ? 'id' : 'eng'))
    // Di sini Anda akan memperbarui pengaturan bahasa aplikasi Anda
    console.log(`Language toggled to: ${language === 'eng' ? 'id' : 'eng'}`)
  }

  const displayLanguageText = language === 'eng' ? 'ENG' : 'ID'

  return (
    <Button
      variant="outline"
      // size="icon" dihapus karena kita punya teks
      onClick={toggleLanguage}
      className={cn(
        'flex h-10 items-center justify-center gap-2 rounded-full px-4', // Tinggi default, padding horizontal, bentuk pill, flexbox untuk ikon & teks
        className,
      )}
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">Toggle Language</span>
      <span className="text-sm font-medium">{displayLanguageText}</span>{' '}
      {/* Teks bahasa */}
    </Button>
  )
}
