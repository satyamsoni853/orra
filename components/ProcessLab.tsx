"use client";

import React from "react";

const steps = [
  {
    id: "01",
    title: "Sacred Sourcing",
    tagline: "Himalayan Harvest",
    desc: "Harvested at 15,000+ feet during peak Prana season. We select only the most potent botanicals.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    stats: ["15,000ft Elev.", "Solar Dried"],
  },
  {
    id: "02",
    title: "Vedic Extraction",
    tagline: "Agnitapi Tech",
    desc: "Dual-phase extraction combining traditional copper vessels with modern CO2 methods for purity.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    stats: ["Copper Infused", "CO2 Purity"],
  },
  {
    id: "03",
    title: "Clinical Integrity",
    tagline: "Sanctuary Lab",
    desc: "Tested for 180+ impurities. We ensure absolute safety without compromising spiritual potency.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFicCUyMHdpdGglMjBwbGFudHN8ZW58MHx8MHx8fDA%3D",
    stats: ["Zero Metals", "Non-GMO"],
  },
  {
    id: "04",
    title: "Vibration Bottling",
    tagline: "Miron Glass",
    desc: "Sealed in violet glass to block damaging light and preserve the bio-photonic energy of the elixir.",
    img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800",
    stats: ["UV Shield", "Bio-Active"],
  },
];

const ProcessLab = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">
              The Alchemy of Purity
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[0.9] tracking-tighter">
              Witness the <br />
              <span className="text-primary italic font-serif font-normal">
                Vedic Lab.
              </span>
            </h2>
          </div>

          <div className="hidden md:flex gap-8 opacity-40">
            <div className="text-right">
              <span className="block text-2xl font-bold font-mono">04</span>
              <span className="text-[10px] uppercase tracking-widest">
                Protocol Stages
              </span>
            </div>
            <div className="text-right">
              <span className="block text-2xl font-bold font-mono">180+</span>
              <span className="text-[10px] uppercase tracking-widest">
                Quality Checks
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500 rounded-[2rem] overflow-hidden"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="mb-auto flex justify-between items-start">
                    <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-mono text-sm border border-white/20">
                      {step.id}
                    </span>
                  </div>

                  <span className="text-primary font-bold tracking-widest uppercase text-[9px] mb-2 block">
                    {step.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-3">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.stats.map((stat, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm text-[8px] font-bold text-white/80 uppercase tracking-wider"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer */}
      </div>
    </section>
  );
};

export default ProcessLab;
