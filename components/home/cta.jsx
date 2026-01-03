"use client"

import Link from "next/link"

export default function CTA({ variant = "primary" }) {
  const isPrimary = variant === "primary"

  return (
    <section
      className={`w-full py-20 bg-gradient-to-r from-primary via-primary/90 to-[#4A7BA7]`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-balance text-white">
            {isPrimary ? "Ready to Transform Your Business?" : "Need Expert Consulting Services?"}
          </h2>
          <p className="text-lg md:text-xl 2xl:text-2xl text-white/90 max-w-2xl mx-auto text-balance">
            {isPrimary
              ? "Let our team of expert consultants help you achieve your business goals and unlock new opportunities for growth."
              : "Contact our team to discuss your business challenges and discover tailored solutions that drive real results."}
          </p>
        </div>

        {isPrimary ? (
          <Link href="https://wa.me/971553305738" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold inline-flex items-center gap-2 group">
            Schedule Your Consultation Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        ) : (
          <Link href="https://wa.me/971553305738" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold inline-flex items-center gap-2 group">
            Contact Us Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  )
}
