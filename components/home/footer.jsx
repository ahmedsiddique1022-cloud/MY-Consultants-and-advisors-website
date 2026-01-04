"use client"

import { useState } from "react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  return (
    <footer className="w-full bg-[#143F72] text-white border-t border-[#1e5a8e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#19A3D4]">
              MY Consultants and Advisors
            </h3>
            <p className="text-sm text-white/90">
              Empowering Businesses with Clarity, Confidence & Success
            </p>
            {/* <p className="text-sm text-primary-foreground/70">
              Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates
            </p> */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61585477749962" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#19A3D4] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/myconsultantsandadvisorsfzc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#19A3D4] transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/my-consultants-and-advisors-a872863a1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#19A3D4] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://x.com/siddique_m16051" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#19A3D4] transition-colors"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  Audit
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  Tax Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  HR Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about-us#team" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-[#19A3D4] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#19A3D4] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="https://api.whatsapp.com/send/?phone=971553305738&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#19A3D4] transition-colors"
                >
                  +971 55 3305 738
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#19A3D4] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:myconsultantsandadvisors@gmail.com" className="text-white/90 hover:text-[#19A3D4] transition-colors">
                  myconsultantsandadvisors@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#19A3D4] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Business+Centre+Sharjah+Publishing+City+Free+Zone+Sharjah+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#19A3D4] transition-colors"
                >
                  Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>&copy; {currentYear} MY Consultants and Advisors. All rights reserved.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-[#19A3D4] transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              className="hover:text-[#19A3D4] transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/90 p-6 flex justify-between items-center rounded-t-lg">
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <button
                onClick={() => setShowPrivacy(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4 text-gray-700 text-sm">
              <p><strong className="text-primary">Effective Date: January 1, 2026</strong></p>
              
              <h3 className="text-lg font-semibold text-primary mt-6">1. Introduction</h3>
              <p>MY Consultants and Advisors ("Company," "we," "us," or "our") operates the website and provides professional consulting services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and engage with our services.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">2. Information We Collect</h3>
              <p><strong>Personal Information:</strong> We collect information you voluntarily provide, such as your name, email address, phone number, company name, and business details when you fill out forms, request quotes, or contact us.</p>
              <p><strong>Automatic Information:</strong> We automatically collect certain information about your device and browsing activity, including IP address, browser type, operating system, referring URLs, and pages visited.</p>
              <p><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your user experience and analyze website usage patterns.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">3. How We Use Your Information</h3>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our consulting services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you promotional and marketing communications</li>
                <li>Process transactions and payments</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mt-6">4. Data Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">5. Third-Party Disclosure</h3>
              <p>We do not sell or rent your personal information to third parties. We may share information with service providers, partners, and affiliates who assist us in operating our website and providing services, all bound by confidentiality agreements.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">6. Your Rights</h3>
              <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or transfer your personal information. Contact us at myconsultantsandadvisors@gmail.com to exercise these rights.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">7. Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p>Email: myconsultantsandadvisors@gmail.com<br />Phone: +971 55 3305 738<br />Address: Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/90 p-6 flex justify-between items-center rounded-t-lg">
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
              <button
                onClick={() => setShowTerms(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4 text-gray-700 text-sm">
              <p><strong className="text-primary">Effective Date: January 1, 2026</strong></p>

              <h3 className="text-lg font-semibold text-primary mt-6">1. Agreement to Terms</h3>
              <p>By accessing and using this website and services provided by MY Consultants and Advisors, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">2. Use License</h3>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h3 className="text-lg font-semibold text-primary mt-6">3. Service Engagement</h3>
              <p>When engaging our consulting services, clients agree to provide accurate and complete information. The Company reserves the right to refuse service to anyone for any reason. Service terms, pricing, and deliverables will be specified in individual consulting agreements.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">4. Payment Terms</h3>
              <p>Payment for services is due as specified in the service agreement. Failure to pay may result in suspension of services and collection actions. We accept various payment methods and all transactions are subject to verification.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">5. Limitation of Liability</h3>
              <p>In no event shall MY Consultants and Advisors or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified of the possibility of such damage.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">6. Accuracy of Materials</h3>
              <p>The materials appearing on our website could include technical, typographical, or photographic errors. The Company does not warrant that any of the materials on its website are accurate, complete, or current. We reserve the right to make changes to the materials contained on our website at any time without notice.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">7. Confidentiality</h3>
              <p>All information shared with the Company during consulting engagements is treated as confidential. We maintain strict confidentiality and do not disclose client information to third parties without explicit consent, except as required by law.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">8. Disclaimers</h3>
              <p>The materials on our website are provided on an 'as is' basis. The Company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">9. Limitations</h3>
              <p>In no event shall MY Consultants and Advisors or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">10. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

              <h3 className="text-lg font-semibold text-primary mt-6">11. Contact</h3>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p>Email: myconsultantsandadvisors@gmail.com<br />Phone: +971 55 3305 738<br />Address: Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}


