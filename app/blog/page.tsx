import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    category: 'Collaboration',
    title: '5 Simple Ways to Create a Cosy Home This Season',
    excerpt: 'Transform your space into a warm, inviting sanctuary with these easy styling tips that bring comfort and character to every room.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Sarah Johnson',
  },
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    category: 'Collaboration',
    title: 'The Art of Intentional Living: Choosing Pieces That Last',
    excerpt: 'Discover how mindful selection of quality homeware can elevate your daily rituals and create a more meaningful living space.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    author: 'Michael Chen',
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    category: 'Announcements',
    title: 'How to Style Your Shelves Like a Pro',
    excerpt: 'Master the art of shelf styling with our expert guide on creating balanced, visually appealing displays that tell your story.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    author: 'Emma Davis',
  },
  {
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800&q=80',
    category: 'Lifestyle',
    title: 'Embracing Minimalism: Less is More',
    excerpt: 'Learn how to embrace minimalist design principles without sacrificing warmth and personality in your home.',
    date: 'February 28, 2024',
    readTime: '8 min read',
    author: 'Sarah Johnson',
  },
  {
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    category: 'Design',
    title: 'The Beauty of Natural Materials',
    excerpt: 'Explore how incorporating natural materials like wood, stone, and linen can bring organic beauty and texture to your space.',
    date: 'February 20, 2024',
    readTime: '6 min read',
    author: 'Michael Chen',
  },
  {
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
    category: 'Collaboration',
    title: 'Behind the Scenes: Our Artisan Partners',
    excerpt: 'Meet the skilled craftspeople behind our collections and discover the stories that inspire their work.',
    date: 'February 15, 2024',
    readTime: '10 min read',
    author: 'Emma Davis',
  },
  {
    image: 'https://images.unsplash.com/photo-1540932239986-30128072f229?w=800&q=80',
    category: 'Lifestyle',
    title: 'Creating a Morning Routine That Nourishes',
    excerpt: 'Design a morning ritual that sets a positive tone for your day with thoughtful touches and intentional spaces.',
    date: 'February 10, 2024',
    readTime: '5 min read',
    author: 'Sarah Johnson',
  },
  {
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80',
    category: 'Design',
    title: 'Color Palettes for Every Room',
    excerpt: 'Discover how to choose the perfect color schemes that create harmony and flow throughout your home.',
    date: 'February 5, 2024',
    readTime: '7 min read',
    author: 'Michael Chen',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    category: 'Announcements',
    title: 'New Collection Launch: Spring Essentials',
    excerpt: 'Get excited for our latest collection featuring fresh designs perfect for the spring season.',
    date: 'February 1, 2024',
    readTime: '4 min read',
    author: 'Emma Davis',
  },
]

const categories = [
  { name: 'All Posts', count: 9 },
  { name: 'Collaboration', count: 3 },
  { name: 'Lifestyle', count: 2 },
  { name: 'Design', count: 2 },
  { name: 'Announcements', count: 2 },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
          alt="Fern Blog"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="font-sans font-black uppercase text-white leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Our Blog
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
            Stories, inspiration, and insights on design, living, and craftsmanship
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="inline-block bg-[#740A03] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Featured Post
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-4 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#6b6b6b] mb-6">
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#0f0f0f] text-white px-6 py-3 rounded-full font-medium hover:bg-[#333] transition-colors"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-10 py-8 bg-[#f5f5f0] border-y border-[#e5e5e0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[#0f0f0f] text-white'
                    : 'bg-white text-[#0f0f0f] hover:bg-[#e5e5e0]'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link key={index} href="#" className="group block">
                <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <span className="inline-block bg-[#740A03] text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-[#0f0f0f] mb-3 group-hover:opacity-70 transition-opacity leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#6b6b6b] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-[#999]">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-10 py-20 bg-[#0f0f0f] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Inspired
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Subscribe to our newsletter for the latest stories, design tips, and exclusive offers delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#740A03] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-[#740A03] text-white font-medium hover:bg-[#8C0E04] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-white/60 mt-4">
            Join 10,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="px-6 md:px-10 py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-16">
            Popular Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex gap-6">
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={blogPosts[1].image}
                    alt={blogPosts[1].title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div>
                  <span className="inline-block bg-[#740A03] text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {blogPosts[1].category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f0f0f] mb-2 leading-tight">
                    {blogPosts[1].title}
                  </h3>
                  <p className="text-sm text-[#999]">{blogPosts[1].date}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="flex gap-6">
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={blogPosts[2].image}
                    alt={blogPosts[2].title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div>
                  <span className="inline-block bg-[#740A03] text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {blogPosts[2].category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f0f0f] mb-2 leading-tight">
                    {blogPosts[2].title}
                  </h3>
                  <p className="text-sm text-[#999]">{blogPosts[2].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-[#6b6b6b] mb-10 max-w-2xl mx-auto">
            Explore our curated collection of beautiful, timeless pieces
          </p>
          <Link
            href="/bestsellers"
            className="inline-flex items-center gap-2 bg-[#0f0f0f] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#333] transition-colors"
          >
            Shop Bestsellers
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
