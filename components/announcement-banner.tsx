import Link from 'next/link'

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#740A03] text-white text-xs font-medium text-center py-2.5 px-4">
      A beauty e-commerce template for Webflow ·{' '}
      <Link href="#" className="underline hover:no-underline">
        View all templates
      </Link>
    </div>
  )
}
