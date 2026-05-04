"use client";

import React from "react";
import Link from "next/link";
import { BarChart3, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
       <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        {/* Outer Frame (the frosted stage) */}
        <nav 
          className="pointer-events-auto w-full max-w-5xl font-sans"
          style={{
            background: "rgba(240,240,240,0.6)",
            backdropFilter: "blur(60px) saturate(1.5)",
            WebkitBackdropFilter: "blur(60px) saturate(1.5)",
            borderRadius: 48,
            padding: 6,
            boxShadow: "0 0 0 0.5px rgba(0,0,0,0.04), 0 8px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          {/* Inner Card (the white surface) */}
          <div 
            className="flex items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.92)",
              borderRadius: 42,
              padding: "12px 24px 12px 32px",
              boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <Link href="/" className="flex items-center mr-8 group">
              <img 
                src="/logo.png" 
                alt="AtlasBI Logo" 
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center gap-2 flex-1">
              {[
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Prompt Library", href: "/prompts" },
                { label: "Free Tools", href: "/free-tools" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className="text-[15px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 px-4 py-2 rounded-full transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <div className="h-4 w-px bg-slate-200 mx-2" />
              <Link href="/signup" className="bg-slate-900 text-white text-[15px] font-semibold px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 text-slate-600 pointer-events-auto" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-24 left-4 right-4 bg-white border border-slate-100 rounded-2xl shadow-xl p-6 md:hidden z-40"
        >
          <div className="flex flex-col gap-4">
            {[
              { label: "Features", href: "/#features" },
              { label: "Pricing", href: "/#pricing" },
              { label: "Prompt Library", href: "/prompts" },
              { label: "Free Tools", href: "/free-tools" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
            <hr className="border-slate-100" />
            <Link href="/signup" className="bg-primary text-white text-center py-3 rounded-xl font-bold" onClick={() => setIsOpen(false)}>Sign Up Free</Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
