import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    brand: 'Willow',
    name: 'Geo Play Blocks',
    price: '$ 30.00 USD',
    originalPrice: '$ 35.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    brand: 'Oaked',
    name: 'Plush Pebble Stools',
    price: '$ 125.00 USD',
    originalPrice: '$ 140.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=600&q=80',
    brand: 'Ember',
    name: 'Serene Sphere Decor',
    price: '$ 24.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    brand: 'Radiate',
    name: 'Skincare Collection',
    price: '$ 85.00 USD',
    originalPrice: '$ 100.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    brand: 'Linen',
    name: 'Minimalist Vase Set',
    price: '$ 45.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1540932239986-30128072f229?w=600&q=80',
    brand: 'Terra',
    name: 'Ceramic Bowl Collection',
    price: '$ 68.00 USD',
    originalPrice: '$ 80.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80',
    brand: 'Bloom',
    name: 'Botanical Print Set',
    price: '$ 52.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    brand: 'Haven',
    name: 'Cozy Throw Blanket',
    price: '$ 95.00 USD',
    originalPrice: '$ 110.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80',
    brand: 'Moss',
    name: 'Wooden Cutting Board',
    price: '$ 38.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80',
    brand: 'Sage',
    name: 'Linen Tea Towels',
    price: '$ 28.00 USD',
    originalPrice: '$ 32.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1583847267825-b4d8e2f6f9a6?w=600&q=80',
    brand: 'Fern',
    name: 'Ceramic Plant Pot',
    price: '$ 42.00 USD',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-44e3e9399a2f?w=600&q=80',
    brand: 'Oak',
    name: 'Serving Tray',
    price: '$ 58.00 USD',
    originalPrice: '$ 65.00 USD',
  },
]

const categories = [
  { name: 'All Products', count: 12 },
  { name: 'Homeware', count: 5 },
  { name: 'Lifestyle', count: 4 },
  { name: 'Beauty', count: 3 },
]

export default function BestsellersPage() {
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
              <div className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-2">500+</div>
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
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-[#0f0f0f] text-white'
                      : 'bg-[#f5f5f0] text-[#0f0f0f] hover:bg-[#e5e5e0]'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={`${product.name}-${index}`} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="px-6 md:px-10 py-20 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Featured collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="inline-block bg-[#740A03] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Featured Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6 leading-tight">
                The Essentials Collection
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                Discover our curated selection of everyday essentials designed to bring beauty and functionality to your daily rituals. Each piece is thoughtfully crafted to stand the test of time.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#0f0f0f] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#333] transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-16">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f0] p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#740A03]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                "Absolutely love the quality! Every piece I've purchased has exceeded my expectations. The attention to detail is remarkable."
              </p>
              <p className="font-bold text-[#0f0f0f]">— Emma Thompson</p>
            </div>
            <div className="bg-[#f5f5f0] p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#740A03]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                "Fast shipping, beautiful packaging, and the products are even better in person. Fern has become my go-to for home decor."
              </p>
              <p className="font-bold text-[#0f0f0f]">— Michael Rodriguez</p>
            </div>
            <div className="bg-[#f5f5f0] p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#740A03]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                "The craftsmanship is outstanding. You can tell these pieces are made with care. Highly recommend to anyone who appreciates quality."
              </p>
              <p className="font-bold text-[#0f0f0f]">— Sarah Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-20 bg-[#0f0f0f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover More
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Explore our complete collection of handcrafted homeware and lifestyle products
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
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
