import Image from 'next/image'

const testimonials = [
  {
    quote: (
      <>
        These products don&apos;t just look beautiful;{' '}
        <strong>they&apos;ve completely transformed how I feel about my space</strong>. I love how thoughtful and
        well-crafted everything is.
      </>
    ),
    name: 'PRIYA S',
    handle: '@priya.artspace',
    image:
      'https://images.unsplash.com/photo-1622207691293-5cd80466dab3?w=200&h=200&fit=crop&crop=face&auto=format',
  },
  {
    quote: (
      <>
        I was <strong>blown away by the quality and attention to detail</strong>. Every piece feels like it was made
        just for my home. I&apos;ll definitely be coming back for more!
      </>
    ),
    name: 'ARJUN K',
    handle: '@arjun_kreative',
    image:
      'https://images.unsplash.com/photo-1712425718137-491250cfde88?w=200&h=200&fit=crop&crop=face&auto=format',
  },
  {
    quote: (
      <>
        Simple, elegant, and timeless. It&apos;s{' '}
        <strong>rare to find items that combine style and practicality so perfectly</strong>. I couldn&apos;t be
        happier!
      </>
    ),
    name: 'ANANYA M',
    handle: '@ananya.home',
    image:
      'https://images.unsplash.com/photo-1628477116196-48afe0d209e0?w=200&h=200&fit=crop&crop=face&auto=format',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#740A03] text-white py-20 px-6 md:px-10">
      <h2 className="text-center text-xl font-bold uppercase tracking-wide text-white mb-12">
        Loved by those who care
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white px-6 py-8 flex flex-col justify-between gap-6"
          >
            <p className="text-sm text-[#0f0f0f] leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.image} alt={`Testimonial image`} fill className="object-cover" sizes="44px" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#0f0f0f]">{t.name}</p>
                <p className="text-xs text-[#6b6b6b]">{t.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
