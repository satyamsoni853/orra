"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    title: "Vitaora King Ashwagandha",
    description:
      "The root of balance. Full-spectrum extract for stress relief and cognitive support.",
    price: "$32.50",
    category: "Supplements",
    img: "/Products/vitora.avif",
    details:
      "Using only the most potent roots harvested at dawn. king Ashwagandha is an adaptogen that modulates the body's response to stress, lowering cortisol and supporting a steady, focused mind throughout the day.",
  },
  {
    id: 2,
    title: "Vitaora",
    description:
      "Our signature wellness blend for daily vitality and holistic health balance.",
    price: "$29.99",
    category: "Vitality",
    img: "/Products/vitora.avif",
    details:
      "The foundation of the Vitaora line. This blend combines ancient Ayurvedic wisdom with modern nutritional science to support overall well-being, energy levels, and immunity.",
  },
  {
    id: 3,
    title: "Long Lasting",
    description:
      "Enhanced formula for sustained energy levels and physical endurance.",
    price: "$38.00",
    category: "Vitality",
    img: "/current/1.avif",
    details:
      "A synergistic blend of Safed Musli and Kaunch Beej. Scientifically balanced to support healthy circulation and metabolic efficiency, ensuring you have the endurance for both physical activity and mental focus.",
  },
  {
    id: 4,
    title: "Vitaora Oil",
    description:
      "Therapeutic herbal oil for soothing relief and deep muscle nourishment.",
    price: "$24.99",
    category: "Healing Oils",
    img: "/Products/spray.avif",
    details:
      "An intensive treatment oil infused with rare botanicals. Designed to penetrate deep into tissues to relieve tension, improve circulation, and promote natural healing processes.",
  },
  {
    id: 5,
    title: "Serum",
    description:
      "Concentrated botanical serum for skin rejuvenation and natural radiance.",
    price: "$45.00",
    category: "Skincare",
    img: "/Products/faceserium.avif",
    details:
      "A high-potency serum featuring cold-pressed oils and herbal extracts. It deeply hydrates, reduces the appearance of fine lines, and restores the skin's natural glow.",
  },
  {
    id: 6,
    title: "Spray",
    description:
      "Refreshing herbal mist for instant revitalization and protection.",
    price: "$19.99",
    category: "Apothecary",
    img: "/Products/spray.avif",
    details:
      "A versatile mist that can be used on the face, body, or in your environment. Infused with soothing lavender and energizing citrus to uplift the spirit and refresh the senses.",
  },
  {
    id: 7,
    title: "Knee Relief Pain Oil",
    description:
      "Ayurvedic blend for fast-acting joint and muscle comfort. 100% natural.",
    price: "$24.99",
    category: "Healing Oils",
    img: "/Products/spray.avif",
    details:
      "A therapeutic blend infused with Mahanarayan and Vishagarbha oils. Designed to penetrate deep into the joints to reduce inflammation and promote tissue repair.",
  },
  {
    id: 8,
    title: "Orra Pure Shilajeet",
    description:
      "Himalayan gold-grade resin for peak vitality and spiritual clarity.",
    price: "$49.99",
    category: "Vitality",
    img: "/Products/vitora.avif",
    details:
      "Purified using traditional Agnitapi techniques. This gold-grade resin contains over 84 trace minerals and fulvic acid for cognitive function and energy.",
  },
];

const OurProducts = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      className="py-16 bg-background overflow-hidden relative"
      id="products"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 relative">
          {/* Subtle Background Mark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[10rem] font-black text-primary/5 select-none pointer-events-none uppercase tracking-tighter w-full">
            Orra Picks
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm mb-4 block">
              The Sacred Apothecary
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-foreground leading-[0.9] tracking-tighter uppercase">
              Discover <br />
              <span className="text-primary italic font-serif font-normal lowercase">
                Orra
              </span>{" "}
              Picks
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card border border-border rounded-4xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-secondary m-4 rounded-3xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                      Details
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

        {visibleCount < products.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group relative px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-xs uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:text-white"
            >
              <div className="absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative z-10 transition-colors">
                Load More Products
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Product Details Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
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
