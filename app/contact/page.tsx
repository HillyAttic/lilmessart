import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Contact Fern"
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
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f0] p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#740A03] rounded-full">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Email Us</h3>
              <p className="text-[#6b6b6b] mb-1">hello@fern.com</p>
              <p className="text-[#6b6b6b]">support@fern.com</p>
            </div>
            <div className="bg-[#f5f5f0] p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#740A03] rounded-full">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Call Us</h3>
              <p className="text-[#6b6b6b] mb-1">+1 (555) 123-4567</p>
              <p className="text-[#6b6b6b]">Mon-Fri 9am-6pm EST</p>
            </div>
            <div className="bg-[#f5f5f0] p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#740A03] rounded-full">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Visit Us</h3>
              <p className="text-[#6b6b6b] mb-1">123 Design Street</p>
              <p className="text-[#6b6b6b]">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 md:px-10 py-16 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-[#0f0f0f] mb-4">Send Us a Message</h2>
            <p className="text-lg text-[#6b6b6b] mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#0f0f0f] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-[#e5e5e0] rounded-lg bg-white focus:outline-none focus:border-[#0f0f0f] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#0f0f0f] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-[#e5e5e0] rounded-lg bg-white focus:outline-none focus:border-[#0f0f0f] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0f0f0f] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-[#e5e5e0] rounded-lg bg-white focus:outline-none focus:border-[#0f0f0f] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#0f0f0f] mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-[#e5e5e0] rounded-lg bg-white focus:outline-none focus:border-[#0f0f0f] transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Returns & Exchanges</option>
                  <option>Wholesale Inquiry</option>
                  <option>Press & Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0f0f0f] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-[#e5e5e0] rounded-lg bg-white focus:outline-none focus:border-[#0f0f0f] transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f0f0f] text-white px-6 py-4 rounded-lg font-medium text-lg hover:bg-[#333] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div>
            <h2 className="text-4xl font-bold text-[#0f0f0f] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[#6b6b6b] mb-8">
              Find quick answers to common questions below.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0f0f0f] mb-2">What is your return policy?</h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  We offer a 30-day return policy for all unused items in their original packaging. Contact our support team to initiate a return.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0f0f0f] mb-2">How long does shipping take?</h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available at checkout.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0f0f0f] mb-2">Do you ship internationally?</h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Yes! We ship to over 50 countries worldwide. International shipping times vary by location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#0f0f0f] mb-2">Can I track my order?</h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Absolutely! You'll receive a tracking number via email once your order ships. Track your package anytime through our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">
            Follow Us
          </h2>
          <p className="text-xl text-[#6b6b6b] mb-10 max-w-2xl mx-auto">
            Stay connected with us on social media for daily inspiration, behind-the-scenes content, and exclusive offers.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-[#0f0f0f] text-white rounded-full hover:bg-[#333] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-[#0f0f0f] text-white rounded-full hover:bg-[#333] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-[#0f0f0f] text-white rounded-full hover:bg-[#333] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="#" className="w-14 h-14 flex items-center justify-center bg-[#0f0f0f] text-white rounded-full hover:bg-[#333] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-10 py-16 bg-[#f5f5f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-12">Find Us</h2>
          <div className="aspect-video bg-[#e5e5e0] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353039!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1618573900000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fern location map"
            />
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] text-center mb-12">
            Business Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f0] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Customer Support</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b6b6b]">Monday - Friday</span>
                  <span className="font-medium text-[#0f0f0f]">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b6b6b]">Saturday</span>
                  <span className="font-medium text-[#0f0f0f]">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b6b6b]">Sunday</span>
                  <span className="font-medium text-[#0f0f0f]">Closed</span>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f0] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">Showroom</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b6b6b]">Monday - Friday</span>
                  <span className="font-medium text-[#0f0f0f]">10:00 AM - 7:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b6b6b]">Saturday</span>
                  <span className="font-medium text-[#0f0f0f]">11:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b6b6b]">Sunday</span>
                  <span className="font-medium text-[#0f0f0f]">12:00 PM - 5:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
