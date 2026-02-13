"use client";

import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Vedic Yoga Instructor",
    content:
      "The Eco-Jute mat provides a grounding connection. It holds the energy of my practice perfectly. Truly a game-changer.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Dr. Priya Nair",
    role: "Holistic Health Coach",
    content:
      "I recommend Orra's Ashwagandha to all my clients. The clinical-grade purity and traditional methods are unmatched.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Rohan Mehta",
    role: "Daily Wellness Seeker",
    content:
      "Applying the Ayurvedic oils has become my favorite evening ritual. My sleep quality has improved significantly.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sneha Gupta",
    role: "Meditation Guide",
    content:
      "The essence oils translate peace into a physical sensation. My studio atmosphere has been completely transformed.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Arjun Kapoor",
    role: "Athlete",
    content:
      "The Knee Relief oil is my post-training secret. Natural recovery that actually works faster than synthetic creams.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Meera Reddy",
    role: "Nutritionist",
    content:
      "Finding Shilajeet of this purity in a luxury format is rare. It has become a staple in my morning vitality routine.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  // Triple the items to ensure a seamless infinite scroll across all screen sizes
  const scrollItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 bg-background text-foreground overflow-hidden border-b border-border/30">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
            Trusted by the <br />
            <span className="text-primary italic font-serif">
              Global Wellness Family
            </span>
          </h2>
          <p className="text-foreground/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Join thousands who have discovered their path to natural vitality.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll Container */}
      <div className="relative flex overflow-hidden py-10">
        <div className="flex animate-infinite-scroll gap-8 min-w-full">
          {scrollItems.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] md:w-[400px] group relative bg-card/40 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-border/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-xl shadow-primary/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-accent fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/70 text-base font-medium leading-[1.8] mb-10 flex-1 italic">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-border/50">
                <div className="w-14 h-14 rounded-full border-2 border-border/50 p-1 group-hover:border-primary transition-colors duration-500">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full filter saturate-[0.8]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">
                    {t.name}
                  </h4>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-40 h-full bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-full bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
