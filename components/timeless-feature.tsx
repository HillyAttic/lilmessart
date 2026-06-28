import Image from 'next/image'

export default function TimelessFeature() {
  return (
    <section className="bg-[#740A03] text-white py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative aspect-[3/4] max-w-sm w-full">
          <Image
            src="https://i.pinimg.com/736x/18/8f/a1/188fa103e56eee0a4b9a0380072dba60.jpg"
            alt="Feature image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 40vw"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Text */}
        <div>
          <hr className="border-white/30 mb-6" />
          <h2
            className="font-sans font-black uppercase text-white leading-[0.9] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Timeless pieces,
            <br />
            careful design
          </h2>
          <p className="mt-6 text-sm md:text-base text-white/80 max-w-sm leading-relaxed">
            Our collection blends classic aesthetics with modern functionality. Creating pieces that suit any setting.
            Thoughtfully designed to stand the test of time. Items that bring lasting beauty and purpose to your home.
          </p>
        </div>
      </div>
    </section>
  )
}
