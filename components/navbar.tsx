'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'

const navItems = [
  { label: 'Shop all', href: '/bestsellers' },
  { label: 'Bestsellers', href: '/bestsellers' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Login', href: '/login' },
  { label: 'Admin', href: '/admin/login' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white">
        <div className="flex items-center justify-between px-6 md:px-10 h-[68px] border-b border-[#e5e5e0]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span
              className="font-serif text-2xl font-bold tracking-tight text-[#0f0f0f]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              lilmessart
            </span>
          </Link>

          {/* Nav links – desktop only */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-normal text-[#0f0f0f] hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: cart + login + hamburger */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              className="flex items-center gap-1.5 rounded-full border border-[#0f0f0f] px-3 py-1.5 text-sm font-medium hover:bg-[#0f0f0f] hover:text-white transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={16} strokeWidth={1.5} />
              <span>0</span>
            </button>

            {/* Login button – desktop */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-1.5 rounded-full border border-[#0f0f0f] px-3 py-1.5 text-sm font-medium hover:bg-[#0f0f0f] hover:text-white transition-colors"
            >
              Login
            </Link>

            {/* Login icon – mobile only */}
            <Link
              href="/login"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white transition-colors"
              aria-label="Login"
            >
              <User size={16} strokeWidth={1.5} />
            </Link>

            {/* Hamburger menu icon – mobile/tablet only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className="block w-5 h-[1.5px] bg-[#0f0f0f] rounded-full transition-all duration-300"
                style={{
                  transform: menuOpen
                    ? 'translateY(3.5px) rotate(45deg)'
                    : 'translateY(0) rotate(0)',
                }}
              />
              <span
                className="block w-5 h-[1.5px] bg-[#0f0f0f] rounded-full transition-all duration-300 mt-[5px]"
                style={{
                  transform: menuOpen
                    ? 'translateY(-1px) rotate(-45deg)'
                    : 'translateY(0) rotate(0)',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/tablet sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile/tablet sidebar panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end px-6 h-[68px] border-b border-[#e5e5e0]">
          {/* Close button (X) */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span
              className="block w-5 h-[1.5px] bg-[#0f0f0f] rounded-full transition-all duration-300"
              style={{
                transform: 'translateY(3.5px) rotate(45deg)',
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-[#0f0f0f] rounded-full transition-all duration-300 mt-[5px]"
              style={{
                transform: 'translateY(-1px) rotate(-45deg)',
              }}
            />
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-6 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-normal text-[#0f0f0f] hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
