"use client"

import Header from "@/components/home/header"
import ServicesDetailed from "@/components/home/services-detailed"
import CTA from "@/components/home/cta"
import Footer from "@/components/home/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ServicesDetailed />
      </div>
      {/* <CTA variant="secondary" /> */}
      <Footer />
    </main>
  )
}
