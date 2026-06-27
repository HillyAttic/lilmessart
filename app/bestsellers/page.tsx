'use client'

import { Suspense, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { useStore } from '@/lib/store-context'

function BestsellersContent() {
  const { products, loading } = useStore()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All Products'

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category))
    return ['All Products', ...Array.from(set)]
  }, [products])

  const filtered = useMemo(
    () =>
      activeCategory === 'All Products'
        ? products
        : products.filter((p) => p.category === activeCategory),
    [products, activeCategory]
  )

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Bestsellers collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="font-sans font-black uppercase text-white leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Bestsellers
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
            Our most loved pieces, curated for quality and timeless design
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-10 py-16 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-2">50K+</div>
              <div className="text-lg text-[#6b6b6b]">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-2">{products.length}+</div>
              <div className="text-lg text-[#6b6b6b]">Unique Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-2">4.9</div>
              <div className="text-lg text-[#6b6b6b]">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-2">50+</div>
              <div className="text-lg text-[#6b6b6b]">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 md:px-10 py-12 bg-white border-b border-[#e5e5e0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={category === 'All Products' ? '/bestsellers' : `/bestsellers?category=${encodeURIComponent(category)}`}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#0f0f0f] text-white'
                      : 'bg-[#f5f5f0] text-[#0f0f0f] hover:bg-[#e5e5e0]'
                  }`}
                >
                  {category} ({category === 'All Products' ? products.length : products.filter((p) => p.category === category).length})
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2.5 border border-[#e5e5e0] rounded-lg text-sm font-medium focus:outline-none focus:border-[#0f0f0f]">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center text-[#6b6b6b] py-20">Loading products…</div>
          ) : filtered.length === 0 ? (
            <div className="text-center text-[#6b6b6b] py-20">
              <p className="text-lg">No products found in this category.</p>
              <Link href="/bestsellers" className="text-[#740A03] underline mt-2 inline-block">
                View all products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image || '/images/geo-play-blocks.png'}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-20 bg-[#0f0f0f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Discover More</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Explore our complete collection of handcrafted homeware and lifestyle products
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/bestsellers"
              className="inline-flex items-center gap-2 bg-[#740A03] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#8C0E04] transition-colors"
            >
              Shop All Products
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-[#0f0f0f] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function BestsellersPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-[#6b6b6b]">Loading…</div>}>
      <BestsellersContent />
    </Suspense>
  )
}
