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
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Quality First</h3>
              <p className="text-[#6b6b6b] leading-relaxed text-lg">
                Every piece is crafted with care and built to last. We never compromise on quality, ensuring each item brings joy for years to come.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#740A03] text-white rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Sustainability</h3>
              <p className="text-[#6b6b6b] leading-relaxed text-lg">
                We're committed to sustainable practices and work with eco-conscious artisans who share our vision for a better future.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#740A03] text-white rounded-full">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
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
              <div className="flex-shrink-0 w-20 h-20 bg-[#740A03] text-white rounded-full flex items-center justify-center">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">
                  <span className="text-[#740A03]">2018</span> — The Beginning
                </h3>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  lilmessart was born from a simple idea: to bring beautiful, quality homeware to modern homes. We started with just 10 carefully curated pieces.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#740A03] text-white rounded-full flex items-center justify-center">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">
                  <span className="text-[#740A03]">2020</span> — Growing Community
                </h3>
                <p className="text-lg text-[#6b6b6b] leading-relaxed">
                  Our community grew to over 5,000 customers. We expanded our collection and partnered with artisans from around the world.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#740A03] text-white rounded-full flex items-center justify-center">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.281 5.941" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">
                  <span className="text-[#740A03]">2024</span> — Today
                </h3>
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
