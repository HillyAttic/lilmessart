const logos = [
  { name: 'Accent', style: 'text-2xl font-bold tracking-tight' },
  { name: 'SOMEDAY', style: 'text-xl font-black tracking-widest' },
  { name: 'IRENE', style: 'text-2xl font-bold tracking-widest' },
  { name: 'n•a', style: 'text-2xl font-bold' },
  { name: 'Compose', style: 'text-2xl font-light tracking-wide' },
]

export default function AsSeenOn() {
  return (
    <section className="border-b border-[#e5e5e0]">
      <div className="px-6 md:px-10 py-12">
        <div className="flex flex-wrap items-center gap-8 md:gap-0 md:justify-between">
          <p className="text-sm font-medium uppercase tracking-widest text-[#0f0f0f]">As seen on</p>
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`${logo.style} text-[#0f0f0f] opacity-80 hover:opacity-100 transition-opacity cursor-default`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
