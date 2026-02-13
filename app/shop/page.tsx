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
    id: 2,
    title: "Vitaora Wellness Blend",
    description:
      "Signature blend for daily vitality and holistic health balance.",
    price: "₹289.99",
    category: "Vitality",
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
    id: 4,
    title: "Vitaora Abhyanga Oil",
    description:
      "Therapeutic herbal oil for soothing relief and muscle nourishment.",
    price: "₹284.99",
    category: "Healing Oils",
    img: "/Products/spray.avif",
  },
  {
    id: 5,
    title: "Radiance Serum",
    description: "Concentrated botanical serum for skin rejuvenation.",
    price: "₹845.00",
    category: "Skincare",
    img: "/Products/faceserium.avif",
  },
  {
    id: 6,
    title: "Revitalizing Mist",
    description: "Refreshing herbal mist for instant revitalization.",
    price: "₹1879.99",
    category: "Apothecary",
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
  {
    id: 8,
    title: "Shilajeet Resin",
    description: "Himalayan gold-grade resin for peak vitality.",
    price: "₹449.99",
    category: "Vitality",
    img: "/Products/vitora.avif",
  },
];

const ShopPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
              The Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Shop All{" "}
              <span className="text-primary italic font-serif font-normal">
                Essentials
              </span>
            </h1>
            <p className="max-w-2xl mx-auto opacity-70">
              Explore our complete range of Ayurvedic formulations, crafted with
              purity and tradition specifically for the modern Indian lifestyle.
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

export default ShopPage;
