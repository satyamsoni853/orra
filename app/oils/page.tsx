"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 4,
    title: "Vitaora Abhyanga Oil",
    description:
      "Therapeutic herbal oil for soothing relief and muscle nourishment.",
    price: "₹284.99",
    category: "Healing Oils",
    img: "/Products/spray.avif",
  },
  {
    id: 7,
    title: "Knee Relief Pain Oil",
    description: "Ayurvedic blend for joint comfort. 100% natural.",
    price: "₹244.99",
    category: "Healing Oils",
    img: "/Products/spray.avif",
  },
];

const OilsPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Sacred Elixirs
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Ayurvedic{" "}
              <span className="text-primary italic font-serif font-normal">
                Oils
              </span>
            </h1>
            <p className="max-w-2xl mx-auto opacity-70">
              Discover potent oil blends traditionally used for Abhyanga, joint
              relief, and deep nourishment.
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

export default OilsPage;
