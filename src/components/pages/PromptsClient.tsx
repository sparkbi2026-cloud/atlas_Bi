"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import Link from "next/link";
import { PROMPTS, PROMPT_CATEGORIES } from "@/lib/prompts";
import { Search, Terminal, ArrowRight, Database, BarChart, Filter } from "lucide-react";

export default function PromptsClient({ dictionary }: { dictionary: any }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPrompts = PROMPTS.filter((prompt) => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.thePrompt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || prompt.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F0F9FF] font-sans text-slate-900">
      <Navbar dictionary={dictionary} />

      {/* ── HERO ── */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Analytical Prompt Library
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            50+ Production-ready prompts engineered for data intelligence. 
            Search, copy, and visualize your data in seconds.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text"
              placeholder="Search prompts by title or use-case..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS ── */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'}`}
          >
            All Prompts
          </button>
          {PROMPT_CATEGORIES.map((cat) => (
            <button 
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.slug ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <Link 
                key={prompt.slug} 
                href={`/prompts/${prompt.slug}`}
                className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {prompt.category}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {prompt.title}
                </h3>
                
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mb-6 flex-1">
                  <code className="text-xs text-slate-600 font-mono line-clamp-3 leading-relaxed">
                    {prompt.thePrompt}
                  </code>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <BarChart className="w-3.5 h-3.5" />
                    {prompt.chartType}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400">No prompts found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <CTAAndFooter dictionary={dictionary} />
    </main>
  );
}
