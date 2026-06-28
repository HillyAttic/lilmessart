import Image from 'next/image'

export default function EverydayLiving() {
  return (
    <section className="bg-[#f0f9a0] py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text on left */}
        <div>
          <hr className="border-[#0f0f0f] mb-6" />
          <h2
            className="font-sans font-black uppercase text-[#0f0f0f] leading-[0.9] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Made for
            <br />
            everyday living
          </h2>
          <p className="mt-6 text-sm md:text-base text-[#0f0f0f]/80 max-w-sm leading-relaxed">
            Practicality meets elegance. Products designed to enhance your daily routines and moments. Each piece is
            carefully crafted to fit into your lifestyle. Adding comfort, charm, and ease.
          </p>
        </div>

        {/* Image on right */}
        <div className="relative aspect-[3/4] max-w-sm w-full md:ml-auto">
          <Image
            src="https://i.pinimg.com/1200x/9d/0d/25/9d0d258c0b2749011b8aee24b22c2edb.jpg"
            alt="Feature image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 40vw"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  )
}
