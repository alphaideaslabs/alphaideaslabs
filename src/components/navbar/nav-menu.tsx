'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import type { NavigationMenuProps } from '@radix-ui/react-navigation-menu' // Re-import the type
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Data menu sebagai array of objects (JSON-style)
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-labs', label: 'The Labs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export const NavMenu = (props: NavigationMenuProps) => {
  // Accept props again
  const pathname = usePathname()

  return (
    <NavigationMenu {...props}>
      {' '}
      {/* Spread props here */}
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navLinks.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={clsx(
                  'block rounded-full px-4 py-2 text-sm font-medium text-[#101820] transition-colors duration-200 dark:text-[#FFFBEB]',
                  'hover:bg-[#FFC62B]/20 dark:hover:bg-[#FFC62B]/30', // Hover effect
                  pathname === item.href
                    ? 'bg-[#FFC62B]/20 text-[#101820] dark:bg-[#FFC62B]/30 dark:text-[#FFFBEB]' // Active effect
                    : '', // Active effect
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
