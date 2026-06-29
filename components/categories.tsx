'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '@/lib/store-context'

// Hardcoded image overrides — Firestore may have stale paths
const CATEGORY_IMAGES: Record<string, string> = {
  Illustration: 'https://i.pinimg.com/736x/0e/03/a4/0e03a4da5bb2815d33a845a6ba517219.jpg',
  Abstract: 'https://i.pinimg.com/1200x/cf/83/49/cf83490e2a369ef7d8752f37bb26553b.jpg',
  Landscape: 'https://i.pinimg.com/736x/e5/25/fd/e525fd76fcf1accf55dd8f23930fba47.jpg',
  'Still Life': 'https://i.pinimg.com/736x/bc/f7/5c/bcf75ccedc9a18775af72f09bec40376.jpg',
}

export default function Categories() {
  const { categories } = useStore()

  if (categories.length === 0) return null

  return (
    <section className="px-6 md:px-10 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f0f0f]">Categories</h2>
        <Link
          href="/bestsellers"
          className="flex items-center gap-2 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
        >
          Shop all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/bestsellers?category=${encodeURIComponent(cat.name)}`}
            className="group relative overflow-hidden rounded-xl aspect-[155/207] md:aspect-[4/3]"
          >
            {/* Mobile: 155x207px plain img */}
            <img
              alt={cat.name}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform duration-500 group-hover:scale-105 md:hidden"
              src={CATEGORY_IMAGES[cat.name] || cat.image || '/images/category-bestsellers.png'}
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
              referrerPolicy="no-referrer"
              width={155}
              height={207}
            />
            {/* Desktop: optimized Next.js Image */}
            <Image
              src={CATEGORY_IMAGES[cat.name] || cat.image || '/images/category-bestsellers.png'}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 hidden md:block"
              sizes="(max-width: 768px) 50vw, 50vw"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Label area at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center gap-3">
              <h3 className="text-white font-black uppercase text-sm md:text-4xl tracking-tight text-shadow leading-tight text-center w-full px-2">
                {cat.name}
              </h3>
              <span className="flex items-center gap-1.5 bg-[#740A03] text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#8C0E04] transition-colors whitespace-nowrap">
                Shop {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
