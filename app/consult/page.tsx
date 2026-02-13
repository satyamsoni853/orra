"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConsultPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Column: Info */}
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
                Personalized Healing
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Discover Your <br />
                <span className="text-primary italic font-serif font-normal">
                  Dosha Balance
                </span>
              </h1>
              <p className="text-lg opacity-70 mb-8 leading-relaxed">
                Ayurveda teaches that health is the delicate balance of three
                energies: Vata, Pitta, and Kapha. Our expert Vaidyas (Ayurvedic
                Doctors) provide personalized consultations to understand your
                unique constitution (Prakriti) and current imbalances (Vikriti).
              </p>

              <ul className="space-y-6 mb-10">
                {[
                  {
                    title: "In-Depth Analysis",
                    desc: "45-minute video consultation with a certified Vaidya.",
                  },
                  {
                    title: "Customized Plan",
                    desc: "Dietary guidelines, lifestyle adjustments, and herbal recommendations.",
                  },
                  {
                    title: "Follow-up Support",
                    desc: "Monthly check-ins to track your progress and adjust the plan.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="opacity-60 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-background bg-secondary overflow-hidden"
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`}
                        alt="Doctor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-sm">
                    Trusted by 10,000+ Seekers
                  </span>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100%] z-0" />

                <h2 className="text-2xl font-bold mb-8 relative z-10">
                  Book a Consultation
                </h2>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold opacity-60 uppercase tracking-widest pl-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Amit"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold opacity-60 uppercase tracking-widest pl-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Sharma"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold opacity-60 uppercase tracking-widest pl-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                      placeholder="amit@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold opacity-60 uppercase tracking-widest pl-2">
                      Health Concern
                    </label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none appearance-none">
                      <option>Digestion & Gut Health</option>
                      <option>Stress & Anxiety</option>
                      <option>Skin & Hair</option>
                      <option>Joint Pain</option>
                      <option>Immunity</option>
                      <option>General Wellness</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full py-4 rounded-xl bg-primary text-white font-bold tracking-widest uppercase hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      Schedule Session • ₹1,499
                    </button>
                    <p className="text-center text-[10px] opacity-40 mt-4 uppercase tracking-widest">
                      100% Confidential • Secure Payment
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultPage;
