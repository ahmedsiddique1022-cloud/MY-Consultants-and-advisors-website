"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email using mailto (opens default email client)
      const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company || 'N/A'}\n` +
        `Service: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
      )
      
      // Open email client with pre-filled data
      window.location.href = `mailto:myconsultantsandadvisors@gmail.com?subject=${subject}&body=${body}`
      
      // Show success message
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      }, 1000)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary border border-accent/30 rounded-full text-white text-sm uppercase tracking-widest font-semibold">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow. Our team of experts is ready to provide you with the best solutions.
          </p>
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

        <div className="grid lg:grid-cols-3 gap-12 lg:items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-bold text-foreground">Contact Information</h2>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=971553305738&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +971 55 3305 738
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:info@myconsultantsandadvisors.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    myconsultantsandadvisors@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Business+Centre+Sharjah+Publishing+City+Free+Zone+Sharjah+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Business Hours</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-foreground">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold text-foreground">Closed</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <h2 className="text-xl font-bold text-foreground p-6 pb-4">Our Location</h2>
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.532421821164!2d55.4585985!3d25.3199091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone%20-%20Business%20Setup%20In%20Sharjah%2C%20UAE!5e0!3m2!1sen!2s!4v1767290009349!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MY Consultants & Advisors Location"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-900">Message Sent Successfully!</h3>
                    <p className="text-sm text-green-700 mt-1">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="vat">VAT Services</option>
                    <option value="corporate-tax">Corporate Tax</option>
                    <option value="business-setup">Business Setup</option>
                    <option value="hr-services">HR Services</option>
                    <option value="financial-advisory">Financial Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
