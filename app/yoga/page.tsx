"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 101,
    title: "Eco-Jute Yoga Mat",
    description:
      "Natural jute fiber mat for superior grip and earth connection.",
    price: "₹1,299.00",
    category: "Yoga Gear",
    img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 102,
    title: "Meditation Cushion (Zafu)",
    description:
      "Organic cotton cushion filled with buckwheat hulls for posture support.",
    price: "₹899.00",
    category: "Yoga Gear",
    img: "https://images.unsplash.com/photo-1593164842264-854604db0060?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 103,
    title: "Pure Copper Bottle",
    description:
      "Hammered copper bottle for tamra jal (copper water) benefits.",
    price: "₹1,450.00",
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 104,
    title: "Sandalwood Incense Sticks",
    description: "Hand-rolled incense for deep meditation and space clearing.",
    price: "₹250.00",
    category: "Ritual",
    img: "https://images.unsplash.com/photo-1549488331-b844ca70a4a8?auto=format&fit=crop&q=80&w=800",
  },
];

const YogaPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
              Alignment & Flow
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Yoga{" "}
              <span className="text-primary italic font-serif font-normal">
                Essentials
              </span>
            </h1>
            <p className="max-w-2xl mx-auto opacity-70">
              Ethically sourced gear to support your daily sadhana. From mats to
              meditation tools, find your ground.
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

export default YogaPage;
