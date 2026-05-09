"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "de", label: "DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "FR", name: "Français", flag: "🇫🇷" },
  { code: "it", label: "IT", name: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "ES", name: "Español", flag: "🇪🇸" },
  { code: "pl", label: "PL", name: "Polski", flag: "🇵🇱" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Get current locale from pathname (segments are ["", "en", "path..."])
  const currentLocale = pathname?.split('/')[1] || 'en';
  const selected = languages.find(l => l.code === currentLocale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative font-sans pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-white hover:border-slate-300 transition-all shadow-sm group"
      >
        <span className="text-base">{selected.flag}</span>
        <span>{selected.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-3 w-48 bg-[#FCFBF8] border border-[#E9E4D9] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-2 z-50 overflow-hidden"
            >
              <div className="space-y-1">
                {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => handleLanguageChange(lang.code)}
                     className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                       selected.code === lang.code 
                         ? 'bg-[#F5F1E8] text-[#8B734B] font-bold' 
                         : 'text-slate-600 hover:bg-[#F5F1E8]/50'
                     }`}
                   >
                     <span className="text-base grayscale-0">{lang.flag}</span>
                     <span>{lang.name}</span>
                   </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
