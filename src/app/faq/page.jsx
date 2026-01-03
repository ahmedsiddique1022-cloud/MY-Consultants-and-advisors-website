import Header from "@/components/home/header"
import Footer from "@/components/home/footer"
import FAQWithBenefits from "@/components/home/faq-with-benefits"

export const metadata = {
  title: "FAQ - MY Consultants & Advisors",
  description: "Frequently asked questions about our accounting, tax, audit, and business setup services in the UAE.",
}

export default function FAQPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <FAQWithBenefits />
      </div>
      <Footer />
    </main>
  )
}
