import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: 'Beauty', image: '/images/category-beauty.png' },
  { name: 'Bestsellers', image: '/images/category-bestsellers.png' },
  { name: 'Lifestyle', image: '/images/category-lifestyle.png' },
  { name: 'Homeware', image: '/images/category-homeware.png' },
]

export default function Categories() {
  return (
    <section className="px-6 md:px-10 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f0f0f]">Categories</h2>
        <Link
          href="#"
          className="flex items-center gap-2 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
        >
          Shop all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href="#"
            className="group relative overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Label area at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center gap-3">
              <h3 className="text-white font-black uppercase text-2xl md:text-4xl tracking-tight text-shadow">
                {cat.name}
              </h3>
              <span className="flex items-center gap-1.5 bg-[#740A03] text-[#0f0f0f] text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#8C0E04] transition-colors whitespace-nowrap">
                Shop {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
