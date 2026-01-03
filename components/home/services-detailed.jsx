"use client"

import Link from "next/link"

export default function ServicesDetailed() {
  
  const services = [
    {
      id: 1,
      title: "Accounting & Bookkeeping",
      description: "We provide a full range of accounting services to ensure your financial records are accurate, compliant, and up to date. From daily bookkeeping to comprehensive financial reporting.",
      image: "/assets/services/accounting-service.jpeg",
      includes: [
        "Transactional Accounting: Recording daily business transactions like sales, purchases, receipts, and payments",
        "Month-End Closing: Reconciling accounts, accruals, month end adjustments, depreciation, generating financial statements",
        "Financial Reporting: Preparation of comprehensive management and statutory financial reports"
      ]
    },
    {
      id: 2,
      title: "Audit",
      description: "Our audit services help assess the accuracy & integrity of your financial information and the strength of your internal controls to ensure transparency and compliance.",
      image: "/assets/services/audit-service.jpg",
      includes: [
        "Internal Audit: Reviewing internal processes to improve efficiency and detect risks or weaknesses",
        "External Audit: Independent examination of financial statements to ensure they represent true and fair financial information",
        "Compliance Audit: Ensuring your business adheres to applicable statutory reporting frameworks and regulations"
      ]
    },
    {
      id: 3,
      title: "Tax Consultancy",
      description: "Our tax consultancy services are designed to ensure full compliance with tax regulations while strategically minimizing tax liabilities through effective planning and execution.",
      image: "/assets/services/tax-service.jpg",
      includes: [
        "VAT (Value Added Tax): Registration, filing, return preparation, and comprehensive advisory services",
        "WHT (Withholding Tax): Advisory on applicable deductions and reporting requirements",
        "CIT (Corporate Income Tax): Impact assessment, categorization & structuring of information, calculation, return filing & compliance"
      ]
    },
    {
      id: 4,
      title: "Company Formation",
      description: "We help you establish your company efficiently with all necessary legal and regulatory support, guiding you through every step of the business setup process.",
      image: "/assets/services/company-formation-service.jpg",
      includes: [
        "Mainland Formation: Setting up businesses licensed by the Department of Economic Development (DED), with full access to local markets",
        "Free Zone Formation: Establishing entities in UAE free zones, offering benefits like 100% ownership, tax exemptions",
        "Licensing & Permits: Complete assistance with obtaining necessary business licenses and operational permits"
      ]
    },
    {
      id: 5,
      title: "Advisory Services",
      description: "We offer strategic business advisory to support growth and transformation, helping you make informed decisions for sustainable business success.",
      image: "/assets/services/advisory-service.jpg",
      includes: [
        "Business Restructuring: Strategic restructuring to improve efficiency and profitability",
        "Financial Planning: Comprehensive financial planning and forecasting services",
        "Risk Management: Identification and mitigation of business risks",
        "Operational Improvements: Process optimization and operational excellence initiatives"
      ]
    },
    {
      id: 6,
      title: "Compliance (ESR/AML)",
      description: "We ensure that your business complies with UAE regulatory requirements to avoid penalties and maintain good standing with regulatory authorities.",
      image: "/assets/services/AML-compliance-service.webp",
      includes: [
        "ESR (Economic Substance Regulations): Assistance with assessment, notifications, and annual reports",
        "AML (Anti-Money Laundering): Development of AML policies, staff training, risk assessments, and ongoing monitoring",
        "Regulatory Compliance: Ensuring adherence to all UAE regulatory and compliance requirements"
      ]
    },
    {
      id: 7,
      title: "Accounting Software Solutions",
      description: "We assist with selection, setup, integration, and training for industry-leading accounting software, enabling efficient financial management and automation.",
      image: "/assets/services/accounting-software-service.jpeg",
      includes: [
        "QuickBooks: Ideal for small to mid-sized businesses with comprehensive accounting features",
        "Zoho Books: Cloud-based, scalable, and user-friendly accounting solution",
        "Odoo: A full ERP suite with strong accounting capabilities and business management tools",
        "Oracle/Oracle Fusion: Full ERP accounting capabilities and business management solution in the oddo card  done"
      ]
    },
    {
      id: 8,
      title: "HR Services",
      description: "Human Resource (HR) services include managing employee records, payroll, compliance, and recruitment — allowing companies to focus on core operations.",
      image: "/assets/services/HR-service.jpg",
      includes: [
        "Payroll Processing: Payroll processing and salary WPS compliance",
        "Employee Onboarding: Employee onboarding and record keeping",
        "HR Policies: HR policies and documentation",
        "Labor Law Compliance: Labor law compliance and HR audits",
        "Recruitment Advisory: Recruitment and employee relations advisory"
      ]
    },
    {
      id: 9,
      title: "Finance Transformation",
      description: "We help cope up with the future of finance and gain efficiencies with automated tools.",
      image: "/assets/services/finance-transformation-service.jpg",
      includes: [
        "Financial Process Automation: Streamline finance operations with automated workflows",
        "Digital Transformation: Implement modern tools and technologies for enhanced efficiency",
        "Finance Analytics: Advanced reporting and analytics to drive better financial decisions",
        "Cost Optimization: Identify and implement cost-saving opportunities through technology"
      ]
    },
    {
      id: 10,
      title: "Product Design and Development",
      description:
        "We help businesses design and build modern digital products that improve customer engagement, streamline internal workflows, and support long-term growth through scalable, user-centric systems.",
      image: "/assets/services/product-service.webp",
      includes: [
        "Web Application Development: Design and development of secure, scalable web platforms tailored to business operations, client interaction, and internal process management.",
        "Mobile Application Development: Custom Android and iOS applications built to enhance accessibility, automate processes, and extend business services to mobile users.",
        "UI/UX & Product Design: Research-driven interface and experience design focused on usability, clarity, and conversion across web and mobile platforms.",
        "Custom Business Platforms: Development of tailored internal systems such as dashboards, portals, and workflow tools aligned with organizational needs"
      ]
    }
  ]

  return (
    <>
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center space-y-4 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary border border-accent/30 rounded-full text-white text-sm uppercase tracking-widest font-semibold">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Comprehensive Business Solutions</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Professional consulting services tailored to drive growth and ensure compliance for your business in the UAE
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

        {/* Services grid - 2 columns on tablet, 3 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Included services - bullet points */}
                <div className="space-y-3">
                  {service.includes.map((item, index) => {
                    const [boldPart, ...rest] = item.split(':')
                    const normalPart = rest.join(':')
                    
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-bold text-foreground">{boldPart}:</span>{normalPart}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full py-20 bg-accent/10 border-y border-accent/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Need Expert Consulting Services?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contact our team to discuss your business challenges and discover tailored solutions that drive real results.
        </p>
        <Link href="https://wa.me/971553305738" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold inline-flex items-center gap-2 group">
          Contact Us Today
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  </>
  )
}
