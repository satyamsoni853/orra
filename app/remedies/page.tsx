"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    title: "Vitaora King Ashwagandha",
    description:
      "Full-spectrum extract for stress relief and cognitive support.",
    price: "₹382.50",
    category: "Supplements",
    img: "/Products/vitora.avif",
  },
  {
    id: 3,
    title: "Long Lasting Endurance",
    description:
      "Enhanced formula for sustained energy levels and physical endurance.",
    price: "₹388.00",
    category: "Vitality",
    img: "/current/1.avif",
  },
  {
    id: 8,
    title: "Shilajeet Resin",
    description: "Himalayan gold-grade resin for peak vitality.",
    price: "₹449.99",
    category: "Vitality",
    img: "/Products/vitora.avif",
  },
  {
    id: 201,
    title: "Triphala Churna",
    description:
      "Classic blend of three fruits for gentle digestive support and detox.",
    price: "₹185.00",
    category: "Digestion",
    img: "https://images.unsplash.com/photo-1629814400267-8898b0f8540b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 202,
    title: "Brahmi Vati",
    description:
      "Focus and memory enhancer. Calms the mind and improves cognitive function.",
    price: "₹320.00",
    category: "Mind",
    img: "https://images.unsplash.com/photo-1579154273007-44f056f53e6e?w=800&auto=format&fit=crop&q=60",
  },
];

const RemediesPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Nature's Pharmacy
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Herbal{" "}
              <span className="text-primary italic font-serif font-normal">
                Remedies
              </span>
            </h1>
            <p className="max-w-2xl mx-auto opacity-70">
              Time-tested formulations to bring your body back into balance.
              Plant-based wisdom for modern healing.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm opacity-60 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RemediesPage;
