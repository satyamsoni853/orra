"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const orders = [
    {
      id: "ORRA-8291",
      date: "Oct 12, 2026",
      status: "Delivered",
      total: "₹84.99",
      items: "Ashwagandha, Triphala",
    },
    {
      id: "ORRA-7102",
      date: "Sep 28, 2026",
      status: "In Transit",
      total: "₹125.00",
      items: "Eco-Jute Mat, Wellness Oil",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-[2rem] p-8 overflow-hidden">
              <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-4xl mb-4 border-4 border-background overflow-hidden font-bold text-primary">
                  AS
                </div>
                <h2 className="text-xl font-bold">Aarav Sharma</h2>
                <p className="text-xs opacity-60 uppercase tracking-widest font-bold">
                  Vata-Pitta Balance
                </p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "dashboard", label: "Dashboard", icon: "🏠" },
                  { id: "orders", label: "Order History", icon: "📦" },
                  { id: "consults", label: "My Consults", icon: "🧘" },
                  { id: "settings", label: "Settings", icon: "⚙️" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "hover:bg-secondary text-foreground/70"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-500/5 mt-10">
                  <span>🚪</span> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <div className="space-y-10 animate-fade-in">
                <header>
                  <h1 className="text-4xl font-bold mb-2">
                    Welcome Back, Aarav
                  </h1>
                  <p className="opacity-60">
                    Continue your journey towards holistic harmony today.
                  </p>
                </header>

                {/* Stats Cards */}
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Wellness Streak",
                      value: "14 Days",
                      color: "bg-emerald-500/10 text-emerald-600",
                    },
                    {
                      label: "Points Earned",
                      value: "850",
                      color: "bg-amber-500/10 text-amber-600",
                    },
                    {
                      label: "Pending Consults",
                      value: "1",
                      color: "bg-primary/10 text-primary",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`p-8 rounded-[2rem] border border-border bg-card group hover:-translate-y-1 transition-all`}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">
                        {stat.label}
                      </p>
                      <p
                        className={`text-3xl font-bold ${stat.color.split(" ")[1]}`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-card border border-border rounded-[2.5rem] p-10">
                  <h3 className="text-xl font-bold mb-8">
                    Vedic Recommendations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-secondary border border-border">
                      <p className="text-xs font-bold text-primary mb-2">
                        YOGA PRACTICE
                      </p>
                      <h4 className="font-bold mb-3">
                        Surya Namaskar Morning Flow
                      </h4>
                      <p className="text-sm opacity-60 leading-relaxed mb-4">
                        Your Dosha analysis suggests a dynamic flow this week to
                        clear morning stagnant energy.
                      </p>
                      <button className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                        Start Practice →
                      </button>
                    </div>
                    <div className="p-6 rounded-3xl bg-secondary border border-border">
                      <p className="text-xs font-bold text-accent mb-2">
                        DIETARY TIP
                      </p>
                      <h4 className="font-bold mb-3">Warm Spiced Ghee</h4>
                      <p className="text-sm opacity-60 leading-relaxed mb-4">
                        Adding cardamom and ginger to your evening milk will
                        support your digestion tonight.
                      </p>
                      <button className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-card border border-border rounded-[2.5rem] p-10 overflow-hidden">
                <h2 className="text-2xl font-bold mb-8">Your Order History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border opacity-40 text-[10px] uppercase font-bold tracking-widest">
                        <th className="pb-4 px-4">Order ID</th>
                        <th className="pb-4 px-4">Date</th>
                        <th className="pb-4 px-4">Status</th>
                        <th className="pb-4 px-4 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="group hover:bg-secondary/30 transition-colors"
                        >
                          <td className="py-6 px-4 font-bold text-sm">
                            {order.id}
                          </td>
                          <td className="py-6 px-4 text-sm opacity-60">
                            {order.date}
                          </td>
                          <td className="py-6 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                                order.status === "Delivered"
                                  ? "bg-emerald-500/10 text-emerald-600"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-6 px-4 text-right font-bold text-sm">
                            {order.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "consults" && (
              <div className="bg-card border border-border rounded-[2.5rem] p-10 text-center py-20">
                <div className="text-6xl mb-6 opacity-20">🌿</div>
                <h2 className="text-2xl font-bold mb-4">
                  Upcoming Consultations
                </h2>
                <p className="opacity-60 mb-8 max-w-sm mx-auto">
                  You have a 30-minute session with Dr. Nair scheduled for
                  tomorrow at 10:00 AM.
                </p>
                <button className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                  Join Room
                </button>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-card border border-border rounded-[2.5rem] p-10">
                <h2 className="text-2xl font-bold mb-8">Account Settings</h2>
                <form className="space-y-6 max-w-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold opacity-40 uppercase tracking-widest pl-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Aarav Sharma"
                        className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold opacity-40 uppercase tracking-widest pl-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="aarav@veda.io"
                        className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold opacity-40 uppercase tracking-widest pl-2">
                      Vedic Consultation Address
                    </label>
                    <textarea
                      className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none h-32 resize-none"
                      defaultValue="Himalayan Valley Retreat, Block B, Dharamsala"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-10 py-4 rounded-full bg-primary text-white font-bold text-xs tracking-widest uppercase shadow-lg shadow-primary/10"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountPage;
