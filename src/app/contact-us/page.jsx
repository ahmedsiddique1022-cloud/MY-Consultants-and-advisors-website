import Header from "@/components/home/header"
import Footer from "@/components/home/footer"
import ContactForm from "@/components/home/contact-form"

export const metadata = {
  title: "Contact Us - MY Consultants & Advisors",
  description: "Get in touch with our team of expert consultants. We're here to help your business grow with our professional accounting, tax, and business advisory services.",
}

export default function ContactUsPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
