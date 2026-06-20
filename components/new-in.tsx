import Link from 'next/link'
import ProductCard from './product-card'

const newProducts = [
  {
    image: '/images/obsidian-teapot-set.png',
    brand: 'Solace Living',
    name: 'Obsidian Teapot Set',
    price: '$ 44.00 USD',
  },
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
    image: '/images/sakura-stoneware-set.png',
    brand: 'Solace Living',
    name: 'Sakura Stoneware Set',
    price: '$ 70.00 USD',
  },
]

export default function NewIn() {
  return (
    <section id="new-in" className="px-6 md:px-10 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f0f0f]">New In</h2>
        <Link
          href="#"
          className="flex items-center gap-2 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
        >
          <span className="opacity-60">◐</span> Shop all
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {newProducts.map((product) => (
          <ProductCard key={product.name + product.brand} {...product} />
        ))}
      </div>
    </section>
  )
}
