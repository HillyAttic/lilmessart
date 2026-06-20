import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  image: string
  brand: string
  name: string
  price: string
  originalPrice?: string
}

export default function ProductCard({ image, brand, name, price, originalPrice }: ProductCardProps) {
  return (
    <Link href="#" className="group block">
      <div className="relative overflow-hidden aspect-[3/4] bg-[#f5f5f0]">
        <Image
          src={image}
          alt={`${brand}: ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="mt-3">
        <span className="inline-block bg-[#740A03] text-white text-xs font-medium px-2.5 py-1 rounded-full">
          {brand}
        </span>
        <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-[#0f0f0f] leading-tight">{name}</h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-sm text-[#0f0f0f]">{price}</span>
          {originalPrice && (
            <span className="text-sm text-[#999] line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
