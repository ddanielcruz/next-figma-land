import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from './Button'
import Input from './Input'

const LINKS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Product',
    href: '/product'
  },
  {
    label: 'Pricing',
    href: '/pricing'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

export default function Navbar() {
  // TODO Animate mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <nav className="relative bg-white text-primary h-28 md:h-40">
      <div className="flex items-center justify-between h-full max-w-container px-8 mx-auto">
        <Link href="/">
          <Image src="/logo-black.webp" alt="Figma Land Logo" width={186} height={59} priority />
        </Link>

        {/* MOBILE TOGGLE */}
        <Image
          src="/menu.svg"
          alt="Toggle Menu"
          width={40}
          height={32}
          onClick={toggleMenu}
          className="md:hidden"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-3">
          <ul className="flex gap-8 mr-8">
            {LINKS.map(link => (
              <li key={link.label}>
                <Link href={link.href} className="font-semibold hover:opacity-80">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Input placeholder="Your Email" className="w-72" />
          <Button>Subscribe</Button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute bg-white list-none top-20 flex-col gap-4 py-4 w-full`}
      >
        {LINKS.map(link => (
          <li key={link.label} className="w-full flex text-center">
            <Link href={link.href} className="text-xl flex-1 py-4">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
