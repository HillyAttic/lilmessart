import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    image: '/images/blog-cosy-home.png',
    category: 'Collaboration',
    title: '5 Simple Ways to Create a Cosy Home This Season',
  },
  {
    image: '/images/blog-intentional-living.png',
    category: 'Collaboration',
    title: 'The Art of Intentional Living: Choosing Pieces That Last',
  },
  {
    image: '/images/blog-style-shelves.png',
    category: 'Announcements',
    title: 'How to Style Your Shelves Like a Pro',
  },
]

export default function BlogPosts() {
  return (
    <section id="blog" className="px-6 md:px-10 py-20 border-t border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide text-[#0f0f0f]">Blog Posts</h2>
        <Link
          href="#"
          className="flex items-center gap-2 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
        >
          <span className="opacity-60">◐</span> Read all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.title} href="#" className="group block">
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4">
              <span className="inline-block bg-[#740A03] text-[#0f0f0f] text-xs font-medium px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-[#0f0f0f] leading-snug">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
