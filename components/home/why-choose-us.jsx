"use client"

import { MdCheck } from "react-icons/md"

export default function   WhyChooseUs() {
  const features = [
    { title: "Expert Team", description: "Over 15+ years of industry experience" },
    { title: "Proven Results", description: "Delivered successful projects" },
    { title: "Dedicated Support", description: "24/7 client support and consultation" },
    { title: "Cost Effective", description: "Competitive pricing with no hidden fees" },
  ]

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">Why Choose Us</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Why Businesses Trust Us</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We combine strategic thinking with practical execution to deliver measurable results for our clients.
              </p>
              <p className="text-lg text-muted-foreground">
                Our approach is tailored to your unique business needs, ensuring maximum impact and sustainable growth.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                      <MdCheck className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image card with improved UI */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-white">
              <img
                src="/assets/home/business-trust.jpeg"
                alt="Team working together"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
