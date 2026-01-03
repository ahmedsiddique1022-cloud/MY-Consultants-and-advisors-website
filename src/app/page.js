import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import WhyChooseUs from "@/components/home/why-choose-us"
import Services from "@/components/home/services"
import CTA from "@/components/home/cta"
import Process from "@/components/home/process"
import FAQ from "@/components/home/faq"
import Footer from "@/components/home/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <CTA variant="primary" />
      <Process />
      <CTA variant="secondary" />
      <FAQ />
      <Footer />
    </main>
  )
}
