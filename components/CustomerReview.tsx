"use client";

import React from "react";

const reviews = [
  {
    name: "Aman V.",
    content:
      "The quality of 'Orra' products is visible from the packaging itself. The Long Lasting capsules have significantly improved my stamina. Highly recommended for busy professionals.",
    date: "1 day ago",
    stars: 5,
    tag: "Verified Purchase",
  },
  {
    name: "Sarah K.",
    content:
      "I've been using the Knee Relief Oil for my mother, and the results are better than any modern ointment we've tried. It's truly a gift from the ancient texts.",
    date: "3 days ago",
    stars: 5,
    tag: "Verified Buyer",
  },
  {
    name: "Rajesh M.",
    content:
      "The Ashwagandha blend is very potent. I can feel the calm within a few days of use. Great service and fast delivery too!",
    date: "5 days ago",
    stars: 5,
    tag: "Verified Purchase",
  },
];

const CustomerReview = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Decorative Orra Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 pointer-events-none skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Trust Scoring Section */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-6xl font-bold text-foreground leading-tight mb-6 md:mb-8">
              Exceptional Purity. <br />
              <span className="text-primary italic">
                Verified by Thousands.
              </span>
            </h2>

            <p className="text-foreground/60 text-base md:text-lg mb-8 md:mb-12 leading-relaxed font-medium">
              Join a growing community of 15,000+ souls who have found their
              balance. Our commitment to Vedic clinical standards ensures every
              drop is a promise of health.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start sm:items-center p-8 md:p-10 rounded-4xl md:rounded-[2.5rem] bg-card border border-border shadow-2xl shadow-primary/5">
              <div className="text-center w-full sm:w-auto">
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-1">
                  4.9
                </p>
                <div className="flex gap-1 text-accent justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 md:w-4 h-3 md:h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">
                  Average Score
                </p>
              </div>
              <div className="h-px w-full sm:h-16 sm:w-px bg-border sm:mx-4" />
              <div>
                <p className="text-base md:text-lg font-extrabold text-foreground mb-1 lowercase italic">
                  excellent rating
                </p>
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-medium">
                  Verified reviews on Trustpilot and Google Business.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Stack Section */}
          <div className="relative space-y-4 md:space-y-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`p-6 md:p-10 rounded-4xl md:rounded-[2.5rem] border border-border bg-card shadow-lg transition-all duration-700 hover:-translate-x-2 ${
                  i === 1
                    ? "lg:-translate-x-12 bg-white/60 backdrop-blur-xl"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{review.name}</h4>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-tighter">
                        {review.tag}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold opacity-30 uppercase">
                    {review.date}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed text-sm font-medium italic">
                  &quot;{review.content}&quot;
                </p>
              </div>
            ))}

            {/* Background Polish Element */}
            <div className="absolute -z-10 -bottom-10 -right-10 text-[8rem] md:text-[15rem] font-bold text-primary/5 select-none pointer-events-none leading-none">
              PURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
