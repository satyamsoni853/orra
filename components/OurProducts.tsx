"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    title: "Knee Relief Pain Oil",
    description:
      "Ayurvedic blend for fast-acting joint and muscle comfort. 100% natural and high-potency.",
    price: "$24.99",
    category: "Healing Oils",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    details:
      "A therapeutic blend infused with Mahanarayan and Vishagarbha oils. Designed to penetrate deep into the joints to reduce inflammation and promote tissue repair. Ideal for sports recovery, age-related discomfort, and winter stiffness.",
  },
  {
    id: 2,
    title: "Orra Pure Shilajeet",
    description:
      "Himalayan gold-grade resin for peak vitality and spiritual clarity. Sustainably harvested.",
    price: "$49.99",
    category: "Vitality",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
    details:
      "Purified using traditional Agnitapi techniques. This gold-grade resin contains over 84 trace minerals and fulvic acid. It helps optimize testosterone levels, boosts cognitive function, and provides a clean, sustainable energy source.",
  },
  {
    id: 3,
    title: "Vitaora King Ashwagandha",
    description:
      "The root of balance. Full-spectrum extract for stress relief and cognitive support.",
    price: "$32.50",
    category: "Supplements",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=400",
    details:
      "Using only the most potent roots harvested at dawn. king Ashwagandha is an adaptogen that modulates the body's response to stress, lowering cortisol and supporting a steady, focused mind throughout the day.",
  },
  {
    id: 4,
    title: "Vitaora Long Lasting",
    description:
      "Enhanced formula for sustained energy levels and physical endurance.",
    price: "$38.00",
    category: "Vitality",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
    details:
      "A synergistic blend of Safed Musli and Kaunch Beej. Scientifically balanced to support healthy circulation and metabolic efficiency, ensuring you have the endurance for both physical activity and mental focus.",
  },
  {
    id: 5,
    title: "Vitaora Wellness Essence",
    description:
      "Sacred essence oil for holistic protection and daily mind-body harmony.",
    price: "$19.99",
    category: "Healing Oils",
    img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400",
    details:
      "An aromatic shield of essential oils including Frankincense and Holy Basil. Designed to be used in daily self-care rituals to ground the senses and provide a protective layer of natural antimicrobial protection.",
  },
  {
    id: 6,
    title: "Eco-Jute Yoga Mat",
    description:
      "Sustainable, non-toxic mat for your grounded daily yoga practice.",
    price: "$65.00",
    category: "Yoga Gear",
    img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=400",
    details:
      "Hand-woven from natural jute and sustainable rubber. This mat provides superior grip and cushioning. It is completely biodegradable and free from the harmful PVCs and phthalates found in conventional mats.",
  },
];

const OurProducts = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="py-16 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 relative">
          {/* Subtle Background Mark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[10rem] font-black text-primary/5 select-none pointer-events-none uppercase tracking-tighter w-full">
            Essence
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm mb-4 block">
              The Sacred Apothecary
            </span>
            <h2 className="text-4xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
              Ancient Wisdom{" "}
              <span className="text-primary italic font-serif font-normal lowe-case">
                &
              </span>{" "}
              <br />
              <span className="text-3xl md:text-7xl uppercase tracking-widest font-light text-foreground/80">
                Modern Vitality
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card border border-border rounded-4xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-secondary m-4 rounded-3xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-1 rounded-full hover:bg-primary/10 text-primary/40 hover:text-primary transition-colors"
                    title="View Details"
                  >
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm opacity-60 mb-6 line-clamp-2 leading-relaxed text-foreground">
                  {product.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-[10px] font-bold text-primary/60 hover:text-primary uppercase tracking-widest text-left transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 group/btn"
                  >
                    Add
                    <span className="transition-transform group-hover/btn:translate-y-[-2px]">
                      +
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-foreground/10 hover:text-foreground transition-all z-10"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                  {selectedProduct.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
                  {selectedProduct.details}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                  <span className="text-2xl font-bold text-foreground">
                    {selectedProduct.price}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="bg-primary text-white px-8 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProducts;
