"use client";

import React from "react";

const VerifiedBy = () => {
  const partners = [
    { name: "FDA", src: "/trustedcompany/FDA.avif" },
    { name: "GMP", src: "/trustedcompany/GMP.avif" },
    { name: "ISO", src: "/trustedcompany/ISO.avif" },
    { name: "FSSAI", src: "/trustedcompany/fssai.avif" },
    { name: "Quality", src: "/trustedcompany/explorequality.avif" },
  ];

  return (
    <section className="relative py-20 bg-background overflow-hidden border-b border-border/30">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Headline moved back to TOP */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
            Trusted & Certified for <br />
            <span className="text-primary italic font-serif relative">
              Absolute Purity
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Infinite Scroll Logos */}
        <div className="relative flex overflow-hidden py-4 md:py-8">
          <div className="flex animate-infinite-scroll gap-12 md:gap-24 min-w-full items-center">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="group relative shrink-0 flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-500"
              >
                <div className="w-24 md:w-32 h-12 md:h-16 flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter saturate-0 hover:saturate-100 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VerifiedBy;
