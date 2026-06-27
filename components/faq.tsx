'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How do I track my order?',
    answer:
      'Once your artwork ships, you\'ll receive a confirmation email with a tracking number and link. You can also log into your account to view real-time shipping updates. For custom or framed pieces, production time is typically 3–5 business days before dispatch.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship worldwide! International shipping costs are calculated at checkout based on the size and destination of your artwork. Please note that customs duties and taxes may apply depending on your country\'s policies, and delivery times range from 7–21 business days.',
  },
  {
    question: 'Can I return or exchange an artwork?',
    answer:
      'Absolutely — we offer a 14-day satisfaction guarantee. If your artwork arrives damaged or isn\'t what you expected, contact us within 14 days of delivery for a full refund or exchange. The piece must be returned in its original condition and packaging. Printed and framed items are eligible; digital downloads are final sale.',
  },
  {
    question: 'Are the artworks original or prints?',
    answer:
      'We offer both. Each product page clearly states whether the listing is for an original one-of-a-kind piece, a limited-edition print (signed and numbered), or an open-edition print. Originals come with a certificate of authenticity, and all prints are produced on archival-quality paper.',
  },
  {
    question: 'How is the artwork packaged for shipping?',
    answer:
      'Every piece is carefully packed using acid-free tissue, foam corner protectors, and sturdy cardboard mailers or custom wood crates for larger canvases. Framed artworks are additionally wrapped in bubble film and shipped in double-walled boxes to ensure safe arrival.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach us by email at support@lilmessart.com or through the contact form on our website. Our team typically responds within 24 hours on weekdays. For urgent inquiries about an existing order, include your order number for the fastest response.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2
            className="font-sans font-black uppercase text-[#0f0f0f] leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
          >
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#e5e5e0]">
              <button
                className="flex items-center justify-between w-full py-5 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-bold uppercase tracking-wide text-[#0f0f0f]">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 bg-[#f5f5f0] rounded-sm flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus size={14} strokeWidth={2} className="text-[#0f0f0f]" />
                  ) : (
                    <Plus size={14} strokeWidth={2} className="text-[#0f0f0f]" />
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
