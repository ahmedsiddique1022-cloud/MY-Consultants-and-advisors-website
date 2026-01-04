"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MdPhone } from "react-icons/md"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false) 
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const serviceLinks = [
    { label: "Business Consulting", href: "#services" },
    { label: "Tax Advisory", href: "#services" },
    { label: "Audit & Assurance", href: "#services" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo/logo-5.svg"
            alt="MY Consultant & Advisors"
            width={220}
            height={60}
            className="h-68 w-auto object-contain" 
            priority
          />
          {/* <span className="text-xl font-bold text-foreground hidden sm:block">
            MY Consultants and Advisors
          </span> */}
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
           <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>

          <Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>

          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>

          {/* <Link href="#blog" className="text-sm text-muted-foreground hover:text-forefground transition-colors">
            Blogs
          </Link> */}

          <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </Link>

          <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>

          {/* Call Now button */}
          <a href="tel:+971588438475" className="flex items-center gap-3 px-4 py-2 hover:opacity-80 transition-opacity group">
            <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 shadow-lg group-hover:shadow-xl group-hover:transition-all group-hover:duration-300 animate-popDiv">
              <MdPhone className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Call Now</span>
              <span className="text-sm font-bold text-primary">+971553305738</span>
            </div>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg border border-border" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card p-4 space-y-2">
          <Link href="/about-us" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            About Us
          </Link>

          <Link href="/services" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            Services
          </Link>

          <Link href="#blog" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            Blogs
          </Link>

          <Link href="/contact-us" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            Contact Us
          </Link>

          <Link href="/faq" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            FAQ
          </Link>

          {/* Call Now button */}
          <a href="tel:+971588438475" className="w-full px-4 py-3 flex items-center gap-3 hover:opacity-80 transition-opacity group border border-border rounded-lg relative">
            {/* Ripple circles */}
            <div className="absolute w-11 h-11 rounded-full border border-primary/30 animate-ripple1" style={{ left: '28px', top: '50%', transform: 'translate(-50%, -50%)' }} />
            <div className="absolute w-11 h-11 rounded-full border border-primary/30 animate-ripple2" style={{ left: '28px', top: '50%', transform: 'translate(-50%, -50%)' }} />
            <div className="absolute w-11 h-11 rounded-full border border-primary/30 animate-ripple3" style={{ left: '28px', top: '50%', transform: 'translate(-50%, -50%)' }} />
            
            {/* Main icon circle */}
            <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl relative z-10">
              <MdPhone className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Call Now</span>
              <span className="text-sm font-bold text-primary">+971 58 843 8475</span>
            </div>
          </a>
        </nav>
      )}

      <style jsx>{`
        @keyframes ripple1 {
          0% {
            width: 2.75rem;
            height: 2.75rem;
            opacity: 1;
          }
          100% {
            width: 5rem;
            height: 5rem;
            opacity: 0;
          }
        }

        @keyframes ripple2 {
          0% {
            width: 2.75rem;
            height: 2.75rem;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          100% {
            width: 5rem;
            height: 5rem;
            opacity: 0;
          }
        }

        @keyframes ripple3 {
          0% {
            width: 2.75rem;
            height: 2.75rem;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 5rem;
            height: 5rem;
            opacity: 0;
          }
        }

        .animate-ripple1 {
          animation: ripple1 2s ease-out infinite;
        }

        .animate-ripple2 {
          animation: ripple2 2s ease-out infinite;
        }

        .animate-ripple3 {
          animation: ripple3 2s ease-out infinite;
        }
      `}</style>
    </header>
  )
}
