"use client"

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your business, understand challenges, and identify growth opportunities.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Create a tailored action plan aligned with your business goals and market realities.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute the strategy with precision and adapt as needed for optimal results.",
    },
    {
      number: "04",
      title: "Growth & Success",
      description: "Achieve measurable results and sustainable growth for your organization.",
    },
  ]

  return (
    <section id="process" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-primary text-sm uppercase tracking-widest font-semibold">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">How We Help You Succeed</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process ensures strategic alignment and successful business transformation.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Full connecting line behind circles */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary" />
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step card */}
                <div className="space-y-4">
                  {/* Circle with solid background to cover the line */}
                  <div className="w-16 h-16 rounded-full bg-background border border-primary flex items-center justify-center mx-auto relative z-20">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
