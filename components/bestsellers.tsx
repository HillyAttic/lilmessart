'use client'

import Link from 'next/link'
import ProductCard from './product-card'
import { useStore } from '@/lib/store-context'

export default function Bestsellers() {
  const { products } = useStore()
  const featured = products.slice(0, 4)

  return (
    <section id="bestsellers" className="px-6 md:px-10 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f0f0f]">Bestsellers</h2>
        <Link
          href="/bestsellers"
          className="flex items-center gap-2 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
        >
          <span className="opacity-60">◐</span> Shop all
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image || '/images/geo-play-blocks.png'}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </section>
  )
}
