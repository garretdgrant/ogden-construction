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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Our Process
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          A clear, step-by-step approach keeps your project on track from the
          first call to the final walkthrough.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-stone-200 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-accent mb-2">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
