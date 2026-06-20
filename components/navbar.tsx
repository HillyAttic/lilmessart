'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 md:px-10 h-[68px] border-b border-[#e5e5e0]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="font-serif text-2xl font-bold tracking-tight text-[#0f0f0f]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Fern
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Shop all', href: '/bestsellers' },
            { label: 'Bestsellers', href: '/bestsellers' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Admin', href: '/admin/login' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-normal text-[#0f0f0f] hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Cart */}
        <button
          className="flex items-center gap-1.5 rounded-full border border-[#0f0f0f] px-3 py-1.5 text-sm font-medium hover:bg-[#0f0f0f] hover:text-white transition-colors"
          aria-label="Open cart"
        >
          <ShoppingCart size={16} strokeWidth={1.5} />
          <span>0</span>
        </button>
      </div>
    </header>
  )
}
