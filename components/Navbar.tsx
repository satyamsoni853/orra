"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initialize theme state safely on client side
    const initTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    initTheme();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "SHOP ALL", href: "/shop" },
    { name: "Ayurvedic Oils", href: "/oils" },
    { name: "Yoga Gear", href: "/yoga" },
    { name: "Herbal Remedies", href: "/remedies" },
    { name: "Wellness Consult", href: "/consult" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins border-b border-foreground/5 bg-background md:bg-background/60 md:backdrop-blur-xl ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Top Bar / Socials - Hidden on Mobile */}
      <div
        className={`hidden md:block border-b border-border transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-[0.1em] text-foreground/60 uppercase">
            FREE SHIPPING - ORDER TODAY
          </span>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/p/Orra-Healthy-Cure-61578281830439/"
              className="w-8 h-8 flex items-center justify-center text-foreground/60 rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/orraheathycure/"
              className="w-8 h-8 flex items-center justify-center text-foreground/60 rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849C2.63 4.14 4.145 2.625 7.15 2.476 8.416 2.418 8.796 2.406 12 2.406M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@orrahealthycure"
              className="w-8 h-8 flex items-center justify-center text-foreground/60 rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}
      >
        <div className="flex items-center gap-4 lg:gap-0">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground/70"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
              Orra
            </span>
            <span className="text-[10px] md:text-xs font-medium tracking-widest opacity-60 uppercase">
              Healthy Cure
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[13px] font-semibold tracking-wide uppercase py-1"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-foreground/70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 rounded-full">
            <svg
              className="w-5 h-5 text-foreground/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span
              className={`absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center rounded-full transition-opacity duration-300 ${cartCount > 0 ? "opacity-100 scale-110" : "opacity-0 scale-50"}`}
            >
              {cartCount}
            </span>
          </Link>

          <Link
            href="/account"
            className="hidden sm:block px-4 md:px-5 py-2 rounded-lg bg-accent text-white text-[12px] md:text-[13px] font-bold shadow-md shadow-accent/10"
          >
            ACCOUNT
          </Link>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className="absolute top-0 left-0 w-4/5 max-w-sm h-full bg-background shadow-2xl p-8 flex flex-col border-r border-border/50">
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-primary">
                Orra
              </span>
              <span className="text-[10px] font-medium tracking-widest opacity-60 uppercase">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40"
            >
              <svg
                className="w-6 h-6"
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
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground border-b border-border/50 pb-4 tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10">
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full block text-center px-5 py-4 rounded-2xl bg-accent text-white font-bold text-sm tracking-widest shadow-lg shadow-accent/20 uppercase"
            >
              Access Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
