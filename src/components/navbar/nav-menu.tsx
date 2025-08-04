import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import type { NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

// Data menu sebagai array of objects (JSON-style)
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-labs', label: 'The Labs' },
  { href: '/pricing', label: 'Pricing' },
]

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navLinks.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink asChild>
            <Link href={item.href}>{item.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
)
