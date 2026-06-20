'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How do I track my order',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    question: 'What is your return and exchange policy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    question: 'How long will it take for my order to arrive?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
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
