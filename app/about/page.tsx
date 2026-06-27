import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="About lilmessart - Our story"
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
            Our Story
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
            Crafting beautiful, timeless pieces for modern living since 2018
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-10 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6 leading-tight">
                Bringing warmth and charm to every space
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                At lilmessart, we believe that every corner of your home should tell a story. Our curated collection of homeware
                and lifestyle goods is designed to bring warmth, character, and exceptional quality to your everyday life.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Founded in 2018, we've grown from a small studio to a beloved brand trusted by thousands of homes worldwide.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Founded by Akanksha Sharma with a passion in crafting and exceptional art.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg flex items-center justify-center bg-[#f5f5f0] p-8">
              <img
                src="/images/founder.svg"
                alt="Our founder"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-10 py-24 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#740A03] text-white rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Quality First</h3>
              <p className="text-[#6b6b6b] leading-relaxed text-lg">
                Every piece is crafted with care and built to last. We never compromise on quality, ensuring each item brings joy for years to come.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#740A03] text-white rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Sustainability</h3>
              <p className="text-[#6b6b6b] leading-relaxed text-lg">
                We're committed to sustainable practices and work with eco-conscious artisans who share our vision for a better future.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#740A03] text-white rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Craftsmanship</h3>
              <p className="text-[#6b6b6b] leading-relaxed text-lg">
                Supporting traditional craftsmanship and celebrating the art of making. Each piece tells a story of dedication and skill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 md:px-10 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#740A03] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                2018
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">The Beginning</h3>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  lilmessart was born from a simple idea: to bring beautiful, quality homeware to modern homes. We started with just 10 carefully curated pieces.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#740A03] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                2020
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">Growing Community</h3>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  Our community grew to over 5,000 customers. We expanded our collection and partnered with artisans from around the world.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#740A03] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                2024
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">Today</h3>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  Now serving over 50,000 homes worldwide with a collection of 500+ unique pieces. Our mission remains the same: crafting for every corner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-10 py-24 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                <img
                  src="https://mindandculture.org/wordpress6/wp-content/uploads/2018/06/Fotolia_188161178_XS.jpg"
                  alt="Nidhi Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">Nidhi Sharma</h3>
              <p className="text-lg text-[#6b6b6b] mb-4">Head of Operations</p>
              <p className="text-[#6b6b6b] leading-relaxed">
                Nidhi keeps everything running smoothly, ensuring exceptional customer experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                <img
                  src="https://mindandculture.org/wordpress6/wp-content/uploads/2018/06/Fotolia_188161178_XS.jpg"
                  alt="Arpita Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">Arpita Sharma</h3>
              <p className="text-lg text-[#6b6b6b] mb-4">Co-Founder</p>
              <p className="text-[#6b6b6b] leading-relaxed">
                Arpita brings vision and passion to every collection with years of creative direction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                <img
                  src="https://mindandculture.org/wordpress6/wp-content/uploads/2018/06/Fotolia_188161178_XS.jpg"
                  alt="Ayush Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">Ayush Sharma</h3>
              <p className="text-lg text-[#6b6b6b] mb-4">Manager</p>
              <p className="text-[#6b6b6b] leading-relaxed">
                Ayush ensures every piece meets our high standards with an eye for detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-24 bg-[#0f0f0f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Explore our collection and find the perfect pieces for your home
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/bestsellers"
              className="inline-flex items-center gap-2 bg-[#740A03] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#8C0E04] transition-colors"
            >
              Shop Bestsellers
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0f0f0f] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
