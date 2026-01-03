"use client"

import Link from "next/link"

export default function AboutUs() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Excellence",
      description: "We strive for the highest standards in every service we deliver",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Innovation",
      description: "We continuously evolve to provide cutting-edge consulting solutions",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description: "We work closely with clients as trusted partners in their success",
    },
  ]

  const expertise = [
    { label: "Years of Experience", value: "15+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Expert Consultants", value: "50+" },
    { label: "Services Offered", value: "30+" },
  ]

  const teamMembers = [
    {
      name: "M. Siddique",
      role: "Managing Partner",
      specialization: "Corporate strategy, client advisory, and growth leadership",
      bgColor: "bg-gradient-to-br from-primary to-primary/70",
    },
    {
      name: "Muhammad",
      role: "Lead Tax Advisor",
      specialization: "Tax planning, compliance frameworks, and cross-border advisory",
      bgColor: "bg-gradient-to-br from-primary to-primary/70",
    },
    {
      name: "Taha",
      role: "Product Development Lead",
      specialization: "Digital product strategy, UX delivery, and scalable platform builds",
      bgColor: "bg-gradient-to-br from-primary to-primary/70",
    },
  ]

  return (
    <section className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen pt-24 flex items-center justify-center overflow-hidden border-b border-accent/20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/about/about-us-bg.jpeg')" }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/35 to-black/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fadeInUp">
            <span className="inline-block px-4 py-2 bg-primary border border-accent/30 rounded-full text-white text-sm uppercase tracking-widest font-semibold">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 text-white">
              MY Consultants and Advisors
            </h1>
            <p className="text-xl text-white/90 mt-6">
              Businesses with Clarity, Confidence & Success
            </p>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
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
            animation: fadeInUp 0.8s ease-out 0.2s backwards;
          }
        `}</style>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4 text-lg text-justify">
                MY Consultants and Advisors is a professional services firm delivering comprehensive and expert guidance in Accounting, Bookkeeping, Audit, Taxation, Advisory, Business Setup, Recruitment, Payroll, and Business Management.
              </p>
              <p className="text-muted-foreground mb-4 text-lg text-justify">
                We provide our services with unwavering dedication, strong commitment, and complete clarity, ensuring that clients receive reliable and results-driven support.
              </p>
              <p className="text-muted-foreground mb-6 text-lg text-justify">
                With extensive experience and a team of qualified professionals, we go beyond traditional practices to deliver high-quality results. We provide end-to-end solutions and ERP implementation services for leading systems such as Oracle, EPMS, Zoho, Odoo, and more. We serve as strategic partners, supporting our clients in operating their businesses across the United Arab Emirates and assisting with company formation in both Free Zones and the Mainland.
              </p>
            </div>
            <div className="rounded-lg border border-accent/20 overflow-hidden aspect-square">
              <img 
                src="/assets/about/who-we-are-2.jpg" 
                alt="Who We Are" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                To be a trusted and leading advisory firm recognized for empowering businesses with clarity, compliance, and strategic insight driving sustainable growth and operational excellence.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                Our mission is to build trust and address critical challenges by delivering high-quality services including Accounting, Bookkeeping, Audit, Taxation, Advisory, Business Setup, Recruitment, and Business Management. We are committed to helping clients and organizations adapt, grow, and achieve sustainable outcomes in an increasingly complex environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header and Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Values</h2>

              {/* Introductory Text */}
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  At MY Consultants and Advisors, our Values set us apart. They are the principles that unite us, strengthen our culture, and inspire us to bring our best to every engagement. When we live our Values consistently, we build trust within our team, with our clients, and across every relationship we cultivate.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  Our Values define who we are and what it means to be part of MY Consultants and Advisors. They form the foundation of every decision we make and every action we take. They guide how we collaborate, how we serve our clients, and how we uphold our responsibilities to our stakeholders and to each other.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  Each of our five Values is designed to work alongside the others. They bind us together, across our different backgrounds and cultures and are common to each of us.
                </p>
              </div>
            </div>

            {/* Values Image Placeholder */}
            <div className="rounded-lg border border-accent/20 overflow-hidden aspect-square">
              <img 
                src="/assets/about/our-value-4.avif" 
                alt="Our Values" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Value 1: Integrity */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent text-accent-foreground w-14 h-14 rounded-lg text-2xl font-bold flex-shrink-0 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Integrity</h3>
                  <p className="text-muted-foreground text-lg">We do what is right.</p>
                </div>
              </div>
            </div>

            {/* Value 2: Excellence */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent text-accent-foreground w-14 h-14 rounded-lg text-2xl font-bold flex-shrink-0 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-lg">We never stop learning and improving.</p>
                </div>
              </div>
            </div>

            {/* Value 3: Courage */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent text-accent-foreground w-14 h-14 rounded-lg text-2xl font-bold flex-shrink-0 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Courage</h3>
                  <p className="text-muted-foreground text-lg">We think and act boldly.</p>
                </div>
              </div>
            </div>

            {/* Value 4: Together */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent text-accent-foreground w-14 h-14 rounded-lg text-2xl font-bold flex-shrink-0 flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Together</h3>
                  <p className="text-muted-foreground text-lg">We respect each other and draw strength from our differences.</p>
                </div>
              </div>
            </div>

            {/* Value 5: For Better */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent text-accent-foreground w-14 h-14 rounded-lg text-2xl font-bold flex-shrink-0 flex items-center justify-center">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">For Better</h3>
                  <p className="text-muted-foreground text-lg">We do what matters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Our Expertise Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">Areas of Focus</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Our Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Strategy & Advisory",
                description: "Strategic planning, market analysis, and competitive positioning for sustainable growth",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Tax & Compliance",
                description: "Comprehensive tax planning, compliance, and risk management across all jurisdictions",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Accounting & Financial Reporting",
                description: "Professional bookkeeping, accounting, and financial statements preparation",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
              },
              {
                title: "HR & Payroll Management",
                description: "Complete payroll processing, HR consulting, and employee management solutions",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Audit & Assurance",
                description: "Internal audits, financial audits, and assurance services for compliance and transparency",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Technology & Digital Solutions",
                description: "ERP implementation, cloud accounting, and IT services for digital transformation",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
            ].map((area, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
                <div className="text-accent mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">Meet Our Leaders</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Our Experienced Team</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our team consists of industry experts with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className={`h-40 w-full ${member.bgColor}`} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">Why Partner With Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Track Record",
                description:
                  "Satisfied clients and a 95% client retention rate speak to our commitment to excellence",
              },
              {
                title: "Expert Team",
                description: "Experienced consultants with diverse industry backgrounds and specialized expertise",
              },
              {
                title: "Customized Solutions",
                description:
                  "We tailor our services to meet the unique needs of each client for maximum impact",
              },
              {
                title: "Technology-Driven",
                description:
                  "We leverage cutting-edge tools and platforms to deliver efficient and scalable solutions",
              },
              {
                title: "Industry Knowledge",
                description: "Deep expertise across multiple sectors including finance, manufacturing, retail, and more",
              },
              {
                title: "Ongoing Support",
                description: "Continuous support and follow-up to ensure your business achieves its goals",
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-accent/20 text-accent">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground mt-1">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-accent/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our team of expert consultants help you achieve your business goals and unlock new opportunities for growth.
          </p>
          <Link href="https://wa.me/971553305738" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold inline-flex items-center gap-2 group">
            Schedule Your Consultation Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </section>
  )
}
