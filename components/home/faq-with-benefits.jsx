"use client"

import { useState } from "react"
import { MdLaptop } from "react-icons/md"

export default function FAQWithBenefits() {
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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes faqFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: faqFadeInUp 0.8s ease-out 0.2s backwards;
        }
      `}} />
      
    <section className="w-full py-20 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary border border-accent/30 rounded-full text-white text-sm uppercase tracking-widest font-semibold">FAQ</span>
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

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Benefits of Outsourcing Your Accounting Department</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Discover how outsourcing your accounting functions can transform your business operations and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1: Cost Savings */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Cost Savings</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No need to hire full-time staff (Accountant, Finance Manager, etc.)</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Avoid visa costs, health insurance, gratuity, and payroll expenses</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pay only for what you need — monthly or project-based</span>
              </li>
            </ul>
          </div>

          {/* Benefit 2: Expertise on Demand */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Expertise on Demand</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Access to a team of qualified accountants, auditors, and tax experts</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stay updated with UAE laws, FTA guidelines, and tax regulations</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Avoid costly errors and penalties due to inexperience</span>
              </li>
            </ul>
          </div>

          {/* Benefit 3: Scalability & Flexibility */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Scalability & Flexibility</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Easily scale services up or down as your business grows</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Choose from daily, weekly, or monthly reporting cycles</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Switch from basic bookkeeping to full CFO-level support as needed</span>
              </li>
            </ul>
          </div>

          {/* Benefit 4: Better Compliance */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Better Compliance</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Accurate VAT and Corporate Tax filing</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FTA-compliant record keeping</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Timely submissions avoid late penalties and audits</span>
              </li>
            </ul>
          </div>

          {/* Benefit 5: Focus on Core Business */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Focus on Core Business</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free up your time and energy to focus on growth and operations</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Let finance and reporting be handled by professionals in the background</span>
              </li>
            </ul>
          </div>

          {/* Benefit 6: Access to Modern Tools */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <MdLaptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Access to Modern Tools & Software</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>We use cloud-based accounting systems like Zoho Books, Oracle Fusion, Odoo</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real-time access to reports and dashboards</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Automation reduces errors and improves efficiency</span>
              </li>
            </ul>
          </div>

          {/* Benefit 7: Confidentiality & Data Security */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Confidentiality & Data Security</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Professional-grade security protocols for sensitive data</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>NDA and service-level agreements to ensure trust and transparency</span>
              </li>
            </ul>
          </div>

          {/* Benefit 8: Strategic Financial Insights */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Strategic Financial Insights</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Monthly MIS reports to support smart decision-making</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Budgeting, forecasting, and cash flow analysis</span>
              </li>
              <li className="flex gap-2 items-start">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Business performance dashboards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
