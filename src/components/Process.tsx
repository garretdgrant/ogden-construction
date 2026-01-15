const steps = [
  {
    title: "Consultation",
    description:
      "We listen to your goals, review the site, and outline the best path forward.",
  },
  {
    title: "Planning & Design",
    description:
      "We refine scope, materials, and budget details so you know exactly what to expect.",
  },
  {
    title: "Build & Manage",
    description:
      "Our crew executes the plan with clear communication and respect for your home.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We review the finished work together and make sure every detail feels right.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="py-24 bg-white texture-wood-planks relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      {/* Diagonal wood plank accents */}
      <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
      <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            A clear, step-by-step approach keeps your project on track from the
            first call to the final walkthrough. We outline budget ranges,
            materials, and realistic timelines before build day.{" "}
            <a
              href="#contact-section"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              Book a consultation
            </a>{" "}
            to get started.
          </p>
        </div>

        {/* Timeline-style process steps */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connection line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20"></div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative opacity-0 animate-fade-up stagger-${index + 1}`}
              >
                {/* Step number with enhanced design */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    {/* Outer ring animation */}
                    <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse"></div>
                    {/* Main circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="rounded-xl border-2 border-stone-200 p-6 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-500 bg-white group hover:-translate-y-1">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-accent/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
