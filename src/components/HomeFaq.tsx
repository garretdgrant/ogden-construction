import { homeFaqItems } from "@/lib/homeFaq";

export const HomeFaq = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Quick answers to common questions about planning a deck, addition, or
          remodeling project with our team.
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {homeFaqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-stone-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.question}
              </h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
