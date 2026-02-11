"use client";

import React from "react";

const reasons = [
  {
    title: "Vedic Lineage",
    desc: "Our formulations are derived directly from 3,000-year-old preserved Vedic manuscripts, ensuring authentic therapeutic wisdom in every drop.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Clinical Purity",
    desc: "Every batch is multi-tested against heavy metals and synthetic binders. We provide clinical-grade results with zero artificial intervention.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.477-2.387a2 2 0 00-.547-1.022L2.05 3.21a2 2 0 10-2.828-2.828l2.387 2.387a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.022-.547l2.387-2.387a2 2 0 10-2.828-2.828l-2.387 2.387a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 01.517 3.86l-.477 2.387a2 2 0 00.547 1.022l2.387 2.387a2 2 0 102.828 2.828l-2.387-2.387z"
        />
      </svg>
    ),
  },
  {
    title: "High-Altitude Sourcing",
    desc: "Our ingredients are wild-harvested at 15,000+ feet in the Himalayas, where botanical potency is at its naturally-occuring peak.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
];

const WhyTrust = () => {
  return (
    <section className="relative py-16 bg-background overflow-hidden">
      {/* Visual background texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-3 block">
              The Path of Clarity
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6 tracking-tighter">
              A Foundation of <br />
              <span className="text-primary italic font-serif">
                Deep-Rooted Trust
              </span>
            </h2>
            <p className="text-foreground/50 text-sm md:text-lg leading-relaxed mb-8 font-medium">
              We don&apos;t just sell remedies; we preserve a 5,000-year legacy
              of healing. Our commitment to Vedic purity is validated by modern
              science.
            </p>

            <div className="flex flex-row gap-4">
              <div className="flex-1 p-4 md:p-6 rounded-3xl bg-card border border-border shadow-xl shadow-primary/5 hover:-translate-y-1 transition-all">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  98%
                </p>
                <p className="text-[8px] md:text-[10px] font-bold text-foreground/40 uppercase tracking-widest leading-loose">
                  Customer Longevity
                </p>
              </div>
              <div className="flex-1 p-4 md:p-6 rounded-3xl bg-card border border-border shadow-xl shadow-primary/5 hover:-translate-y-1 transition-all">
                <p className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  15k+
                </p>
                <p className="text-[8px] md:text-[10px] font-bold text-foreground/40 uppercase tracking-widest leading-loose">
                  Healing Journeys
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex gap-5 p-6 rounded-[2rem] bg-card/40 backdrop-blur-sm border border-border hover:border-primary/20 hover:bg-card transition-all duration-500"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-lg shadow-primary/5">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-foreground tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Polish mark */}
      <div className="absolute bottom-6 right-6 text-[8rem] font-bold text-foreground/5 select-none pointer-events-none tracking-tighter uppercase leading-none">
        Trust
      </div>
    </section>
  );
};

export default WhyTrust;
