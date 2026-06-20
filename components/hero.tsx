import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.svg"
        alt="Crafted for every corner - minimalist living room"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          className="font-sans font-medium uppercase text-white leading-[0.95] tracking-[-0.02em] text-balance"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.75rem)' }}
        >
          Crafted for every corner
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/90 max-w-md leading-relaxed">
          Bring warmth and charm to your space. Our curated collection of homeware and lifestyle goods. Unique pieces
          with exceptional quality
        </p>

        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <Link
            href="#"
            className="flex items-center gap-2 bg-[#740A03] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#8C0E04] transition-colors"
          >
            <span className="opacity-60">◐</span> Shop collection
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 bg-[#0f0f0f] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#333] transition-colors"
          >
            <span className="opacity-60">◐</span> About us
          </Link>
        </div>
      </div>
    </section>
  )
}
