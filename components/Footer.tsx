import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground border-t border-border py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-primary mb-6 block"
            >
              ORRA
            </Link>
            <p className="text-sm leading-relaxed opacity-70 max-w-sm">
              Honoring the heritage of Ayurveda and the discipline of Yoga. We
              are dedicated to high-vibration living through natural purity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Vedic Roots
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Ayurvedic Oils
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Yoga Gear
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Herbal Blends
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-6">Stay Healthy</h4>
            <p className="text-sm mb-4 opacity-70">
              Get health tips and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-background border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary w-full text-foreground"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-colors whitespace-nowrap">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Orra Healthy Cure. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              YouTube
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
