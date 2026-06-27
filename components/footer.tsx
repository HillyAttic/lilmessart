import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e0] px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Shop */}
          <div>
            <Link href="/">
              <span
                className="font-serif text-2xl font-bold tracking-tight text-[#0f0f0f]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                lilmessart
              </span>
            </Link>
            <nav className="mt-6">
              <Link href="#" className="block text-sm text-[#0f0f0f] font-medium mb-3 hover:opacity-60 transition-opacity">
                Shop all
              </Link>
              <ul className="flex flex-col gap-2">
                {['Illustration', 'Abstract', 'Landscape', 'Still Life'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#0f0f0f] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f0f0f] mb-4">Pages</p>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'FAQs', href: '/contact' },
                { label: 'Contact', href: '/contact' },
                { label: 'Returns', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#6b6b6b] hover:text-[#0f0f0f] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f0f0f] mb-4">Socials</p>
            <ul className="flex flex-col gap-2">
              {['Instagram', 'TikTok', 'Pinterest', 'X (Twitter)', 'LinkedIn', 'YouTube'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#0f0f0f] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f0f0f] mb-4">More</p>
            <ul className="flex flex-col gap-2">
              {['Style guide', 'Licenses', 'Password', '404'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#0f0f0f] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e5e5e0] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#6b6b6b]">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#0f0f0f] transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#0f0f0f] transition-colors">
              Privacy
            </Link>
          </div>
          <p className="text-xs text-[#6b6b6b]">&copy; lilmessart 2026</p>
        </div>
      </div>
    </footer>
  )
}
