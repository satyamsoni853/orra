"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CartPage = () => {
  const { cart, removeFromCart, addToCart, cartCount } = useCart();

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("₹", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
              <h1 className="text-4xl font-bold">Your Healing Basket</h1>
              <span className="text-sm font-medium opacity-60 uppercase tracking-widest">
                {cartCount} Items
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="py-20 text-center bg-card rounded-[2rem] border border-border">
                <div className="text-6xl mb-6 opacity-20">🧘</div>
                <h2 className="text-2xl font-bold mb-4">
                  Your basket is empty
                </h2>
                <p className="opacity-60 mb-8 max-w-sm mx-auto">
                  It seems you haven&apos;t started your journey to wellness
                  yet. Explore our Ayurvedic remedies to find your balance.
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Explore Remedies
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-card border border-border rounded-3xl group hover:shadow-lg transition-all"
                  >
                    <div className="w-24 h-24 bg-secondary rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={
                          item.img ||
                          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"
                        }
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-60 font-bold">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-background border border-border rounded-full p-1">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-500/10 hover:text-red-500 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right hidden sm:block">
                      <p className="font-bold text-lg">
                        ₹
                        {(
                          parseFloat(item.price.replace("₹", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="lg:w-96">
            <div className="bg-card border border-border rounded-[2.5rem] p-8 sticky top-28 shadow-xl shadow-primary/5">
              <h2 className="text-2xl font-bold mb-8">Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="opacity-60">Subtotal</span>
                  <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-60">Shipping</span>
                  <span className="text-accent font-bold uppercase tracking-widest text-[10px]">
                    Free Shipping
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-60">Vedic Tax</span>
                  <span className="font-bold">₹0.00</span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-end">
                  <span className="font-bold">Total</span>
                  <span className="text-3xl font-bold text-primary">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                disabled={cart.length === 0}
                className="w-full py-5 rounded-full bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                Proceed to Checkout
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 opacity-40">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Secure Vedic Checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
