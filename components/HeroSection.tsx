"use client";

import React, { useState, useEffect, useCallback } from "react";

const slides = [
  {
    title: "Knee Relief Pain",
    accent: "Ayurvedic Healing",
    desc: "Targeted botanical formula for deep joint recovery and natural mobility. Heritage-inspired, clinical-grade purity.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1920",
    theme: "primary",
  },
  {
    title: "Ayurvedic Shilajeet",
    accent: "Himalayan Vitality",
    desc: "Gold-grade resin harvested from the heart of the Himalayas. The ultimate source of energy and mental clarity.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920",
    theme: "primary",
  },
  {
    title: "King Ashwagandha",
    accent: "Vitaora Essential",
    desc: "The supreme restorative tonic. Balance your stress hormones and reclaim your daily vitality with 'Orra' wisdom.",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d04fcad?auto=format&fit=crop&q=80&w=1920",
    theme: "primary",
  },
  {
    title: "Long Lasting",
    accent: "Vitaora Endurance",
    desc: "Sustainable strength and focus for the modern achiever. Rooted in ancient Vedic endurance principles.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920",
    theme: "primary",
  },
  {
    title: "Vitaora Oil",
    accent: "Wellness Protection",
    desc: "Sacred oils for daily holistic protection. A shield of natural purity for your mind, body, and spirit.",
    img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=1920",
    theme: "primary",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="relative h-[80vh] md:h-screen min-h-[500px] md:min-h-[700px] w-full bg-background overflow-hidden">
      {/* Dynamic Background with Ken Burns Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Selective Overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10" />

          <img
            src={slide.img}
            alt={slide.title}
            className={`h-full w-full object-cover transition-transform duration-6000 ease-linear ${
              index === current ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      <div className="container mx-auto px-6 h-full relative z-20">
        <div className="flex flex-col justify-center h-full max-w-4xl py-20 md:py-0">
          {/* Animated Decorative Element */}
          <div className="flex items-center gap-3 mb-4 md:mb-6 animate-fade-in">
            <div className="h-px w-8 md:w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Ancient Wisdom • Modern Purity
            </span>
          </div>

          <div className="relative overflow-hidden mb-2 md:mb-4">
            <h2
              className={`text-accent font-bold tracking-widest uppercase text-xs md:text-base transition-all duration-700 ${isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
            >
              Orra {slides[current].accent}
            </h2>
          </div>

          <div className="relative overflow-hidden mb-6 md:mb-8">
            <h1
              className={`text-3xl sm:text-4xl md:text-7xl font-bold leading-tight text-foreground transition-all duration-700 delay-100 ${isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
            >
              {slides[current].title}
            </h1>
          </div>

          <p
            className={`text-base md:text-xl text-foreground/70 mb-10 md:mb-12 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}
          >
            {slides[current].desc}
          </p>

          {/* Slider Status */}
          <div className="absolute bottom-10 right-6 md:bottom-20 flex items-end gap-6 md:gap-12 w-full justify-between md:justify-end md:w-auto">
            <div className="hidden sm:flex flex-col items-end gap-1 text-right">
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                Next Chapter
              </span>
              <span className="text-xs font-bold text-foreground lowercase">
                {slides[(current + 1) % slides.length].title.substring(0, 20)}
                ...
              </span>
            </div>

            <div className="flex gap-2 md:gap-3 ml-auto md:ml-0">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="group py-3 md:py-4 relative"
                >
                  <div
                    className={`h-[2px] transition-all duration-500 rounded-full ${i === current ? "w-12 md:w-16 bg-primary" : "w-6 md:w-8 bg-foreground/10 group-hover:bg-foreground/30"}`}
                  />
                  <span
                    className={`absolute top-0 right-0 text-[9px] md:text-[10px] font-bold transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0"}`}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extreme Visual Polish Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      {/* Floating Orra Brand Mark */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 hidden xl:flex flex-col items-center gap-10">
        <div className="w-px h-32 bg-linear-to-b from-transparent via-primary/30 to-transparent" />
        <span className="rotate-90 text-[10px] font-bold tracking-[0.8em] uppercase text-foreground/20 whitespace-nowrap">
          The Orra Collective • Est. 2026
        </span>
        <div className="w-px h-32 bg-linear-to-b from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
