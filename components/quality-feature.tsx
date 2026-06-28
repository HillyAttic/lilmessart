import Image from 'next/image'

export default function QualityFeature() {
  return (
    <section className="px-6 md:px-10 py-20 border-t border-[#e5e5e0]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative aspect-[3/4] max-w-sm w-full">
          <Image
            src="https://i.pinimg.com/1200x/10/87/7d/10877dc82e533eff4c7e5528b7d574d7.jpg"
            alt="Feature image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 40vw"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Text */}
        <div>
          <hr className="border-[#0f0f0f] mb-6" />
          <h2
            className="font-sans font-black uppercase text-[#0f0f0f] leading-[0.9] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Quality meets
            <br />
            intention
          </h2>
          <p className="mt-6 text-sm md:text-base text-[#0f0f0f]/70 max-w-sm leading-relaxed">
            We believe in creating items with purpose. Using only the finest materials and expert craftsmanship. Every
            detail is considered and refined, ensuring products that are meaningful, durable, and timeless.
          </p>
        </div>
      </div>
    </section>
  )
}
