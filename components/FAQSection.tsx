"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is the philosophy behind Orra Ayurveda?",
    answer:
      "Orra is built on the 5,000-year-old Vedic principle of 'Prakriti' - the belief that every individual has a unique constitution. Our remedies are crafted to restore your innate balance using high-vibration, sustainably sourced botanicals from the Himalayan foothills.",
  },
  {
    question: "Are your products safe for long-term use?",
    answer:
      "Yes. All Orra products are formulated with standardized herbal extracts and are free from heavy metals, synthetic binders, and pesticides. We follow rigorous GMP and FDA standards to ensure clinical-grade safety and purity.",
  },
  {
    question: "How do I determine which remedy is right for my Dosha?",
    answer:
      "Doshas (Vata, Pitta, Kapha) represent your unique biological energy. While our product descriptions provide guidance, we recommend booking a 'Wellness Consult' through our platform to receive a personalized analysis from our Vedic experts.",
  },
  {
    question: "Does Orra support sustainable and ethical sourcing?",
    answer:
      "Absolutely. We practice 'Dharma' in our supply chain. Our herbs are fair-trade sourced, and our packaging is designed to be 90% plastic-free, using amber glass and recycled paper to preserve potency and the planet.",
  },
  {
    question: "What is the 'Harmony Guarantee' return policy?",
    answer:
      "We believe in the transformative power of our remedies. If you do not feel a shift in your wellness within 30 days of consistent use, we offer a full 'Harmony Refund' or a free consultation to adjust your supplement path.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Header Section */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                Sanctuary Wisdom
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Seeking <br />{" "}
                <span className="text-primary italic">Clarity?</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
                Understanding your journey to wellness is the first step toward
                balance. Explore our most common inquiries or reach out to our
                Vedic guides.
              </p>

              <div className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-xl shadow-primary/5">
                <p className="text-sm font-bold mb-4">Still have questions?</p>
                <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all">
                  Talk to a Guru
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group rounded-4xl border transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? "bg-card border-primary/20 shadow-2xl shadow-primary/5"
                      : "bg-transparent border-border hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left px-8 py-7 flex items-center justify-between gap-4"
                  >
                    <span
                      className={`text-lg font-bold transition-colors duration-300 ${
                        openIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-500 ${
                        openIndex === index
                          ? "rotate-180 bg-primary border-primary text-white"
                          : "group-hover:border-primary text-foreground/40"
                      }`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${
                      openIndex === index
                        ? "max-h-[300px] pb-8 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
