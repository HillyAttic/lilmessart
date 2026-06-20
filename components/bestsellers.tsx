import Link from 'next/link'
import ProductCard from './product-card'

const products = [
  {
    image: '/images/geo-play-blocks.png',
    brand: 'Willow',
    name: 'Geo Play Blocks',
    price: '$ 30.00 USD',
    originalPrice: '$ 35.00 USD',
  },
  {
    image: '/images/plush-pebble-stools.png',
    brand: 'Oaked',
    name: 'Plush Pebble Stools',
    price: '$ 125.00 USD',
    originalPrice: '$ 140.00 USD',
  },
  {
    image: '/images/serene-sphere-decor.png',
    brand: 'Ember',
    name: 'Serene Sphere Decor',
    price: '$ 24.00 USD',
  },
  {
    image: '/images/skincare-collection.png',
    brand: 'Radiate',
    name: 'Skincare Collection',
    price: '$ 85.00 USD',
    originalPrice: '$ 100.00 USD',
  },
]

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="px-6 md:px-10 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f0f0f]">Bestsellers</h2>
        <Link
          href="#"
          className="flex items-center gap-2 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
        >
          <span className="opacity-60">◐</span> Shop all
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}
