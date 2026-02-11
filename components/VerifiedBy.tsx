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

        {/* Logos Pod moved to BOTTOM of the text */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 px-4 md:px-8 py-8 md:py-10 rounded-4xl md:rounded-[3rem] border border-border/50 bg-card/30 backdrop-blur-xl shadow-2xl shadow-primary/5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center"
            >
              <div className="w-24 md:w-40 h-12 md:h-20 flex items-center justify-center transition-all duration-500">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter saturate-[1.2]"
                />
              </div>
              <span className="absolute -bottom-4 text-[8px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle verification footer */}
      </div>
    </section>
  );
};

export default VerifiedBy;
