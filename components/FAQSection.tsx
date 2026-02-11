"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is the core philosophy of Orra Ayurveda?",
    answer:
      "Orra is founded on the 5,000-year-old Vedic principle of 'Prakriti'—the recognition that every human being is a unique energetic ecosystem. Our remedies do not merely mask symptoms; they are precision-crafted to harmonize your inner Doshas (Vata, Pitta, Kapha) using high-vibration botanicals sourced from sacred Himalayan peaks.",
  },
  {
    question: "Are these remedies safe for contemporary lifestyles?",
    answer:
      "Absolutely. While our wisdom is ancient, our validation is modern. Every Orra formulation undergoes rigorous multi-phase testing for heavy metals, microbial purity, and synthetic binders. We adhere to clinical-grade GMP standards to ensure that Vedic purity meets 21st-century safety expectations.",
  },
  {
    question: "How do I identify the right path for my constitution?",
    answer:
      "Self-discovery is the first step of the Vedic journey. We recommend starting with our 'Dosha Assessment' or booking a private 'Vedic Consult' with our certified practitioners. This allows us to map your current imbalances and curate a specific botanical protocol tailored to your vital energy.",
  },
  {
    question: "How does Orra honor the Earth and local communities?",
    answer:
      "We practice 'Dharma'—the law of righteous living—across our entire supply chain. Our herbs are wild-harvested or fair-trade sourced from small-scale ancestral farms. Furthermore, our packaging is 95% plastic-free, utilizing Miron violet glass and recycled cotton paper to preserve both the potency of the medicine and the health of the planet.",
  },
  {
    question: "What if the remedies do not resonate with my body?",
    answer:
      "Healing is a dialogue. If you do not feel a shift in your vitality within 30 days of consistent ritual use, we offer our 'Harmony Guarantee'. This includes a full refund or a personalized adjustment of your wellness path through a complimentary guide session.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Fixed Content on Desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative">
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">
                Sanctuary Wisdom
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground leading-[0.85] tracking-tighter mb-8">
                Questions <br />
                <span className="text-primary italic font-serif font-normal">
                  & Answers
                </span>
              </h2>
              <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-12 max-w-sm">
                Unveiling the science and spirit behind your journey to Vedic
                balance. Discover how we bridge ancient roots with modern
                clinical truth.
              </p>

              <div className="hidden lg:block">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 group-hover:text-primary transition-colors">
                    Chat with a Guru
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-border/50 border-t border-border/50">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left py-8 flex items-start justify-between gap-8 group/btn"
                  >
                    <div className="flex gap-8 items-start">
                      <span
                        className={`text-sm font-black tracking-tighter text-primary/20 transition-all duration-700 ${openIndex === index ? "opacity-100 scale-125" : "opacity-40"}`}
                      >
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <h3
                        className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-500 ${openIndex === index ? "text-primary" : "text-foreground"}`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`mt-2 shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-700 ${openIndex === index ? "rotate-45 text-primary" : "text-foreground/20"}`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
                      openIndex === index
                        ? "max-h-[500px] pb-10 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-16 md:pl-20 max-w-2xl">
                      <p className="text-foreground/60 text-sm md:text-lg leading-relaxed font-medium mb-8">
                        {faq.answer}
                      </p>
                      <div className="flex items-center gap-6">
                        <div className="h-px w-8 bg-primary/30" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                          Verified Wisdom
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Chat Button */}
            <div className="lg:hidden mt-16 text-center">
              <button className="w-full py-6 rounded-2xl bg-card border border-border flex items-center justify-center gap-4 text-primary font-bold text-xs tracking-widest uppercase shadow-xl shadow-primary/5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Chat with a Guru
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Polish */}
      <div className="absolute top-0 right-0 p-12 text-[12rem] font-black text-primary/5 select-none pointer-events-none rotate-90 origin-top-right uppercase leading-none">
        Ritual
      </div>
    </section>
  );
};

export default FAQSection;
