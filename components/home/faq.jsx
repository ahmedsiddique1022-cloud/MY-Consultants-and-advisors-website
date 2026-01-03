"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Do I need to register for VAT even if my revenue is low?",
      answer:
        "If your taxable turnover exceeds AED 375,000 annually, VAT registration is mandatory. We also offer voluntary registration for businesses below this threshold.",
    },
    {
      question: "What is the deadline for Corporate Tax filing in the UAE?",
      answer:
        "The first corporate tax return is due within 9 months after the end of your financial year. We help you stay ahead of deadlines.",
    },
    {
      question: "Can I set up a business in the UAE without being a resident?",
      answer:
        "Yes! Especially in Freezones, 100% foreign ownership is allowed, and we can assist with residency visa processing also.",
    },
    {
      question: "What's included in your AED 6,850 business setup plan?",
      answer:
        "It covers Freezone license, documentation, and establishment card. Additional costs may apply for visas or specific activities.",
    },
    {
      question: "Can I outsource only payroll under HR Services?",
      answer:
        "Absolutely. We offer modular HR services, including standalone payroll processing.",
    },
    {
      question: "Do I need a full audit every year?",
      answer:
        "Not all businesses require it, but certain Freezones, banks, and investors may mandate annual audits. We guide you case-by-case.",
    },
    {
      question: "Which accounting software do you recommend?",
      answer:
        "We work with Zoho Books, Odoo, Oracle, EPMS, QuickBooks etc. We'll recommend the best fit based on your size and needs.",
    },
    {
      question: "Can we outsource our entire Accounts Department to MY Consultants and Advisors?",
      answer:
        "Yes, absolutely! We offer full-fledged outsourced accounting solutions, acting as your virtual finance department. From daily bookkeeping to tax filing and financial reporting, our team handles it all — at a fraction of the cost of hiring in-house staff.",
    },
  ]

  return (
    <section id="faq" className="w-full py-20 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Common Questions</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-card border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


