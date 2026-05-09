"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import Link from "next/link";
import { FREE_TOOLS } from "@/lib/free-tools";
import * as Icons from "lucide-react";
import { Search, X } from "lucide-react";
import InteractiveGridPattern from "@/components/ui/InteractiveGridPattern";

export default function FreeToolsClient({ dictionary }: { dictionary: any }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = FREE_TOOLS.filter(tool => 
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar dictionary={dictionary} />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900">
        {/* ── BACKGROUND LAYER ── */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/736x/4b/91/76/4b91764f2e3ba450a704947f7ec1c0ed.jpg" 
            alt="Free Analytics Tools" 
            className="w-full h-full object-cover"
          />
          {/* Sophisticated dark overlays */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-widest uppercase mb-8">
            <Icons.Zap className="w-3.5 h-3.5 text-yellow-400" />
            AtlasBI Command Center
          </div>

          <h1 className="serif-heading text-6xl md:text-8xl text-white leading-[1] mb-8 tracking-tighter">
            Free Analytics <br />
            <span className="text-indigo-400 italic">Command Center.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Professional-grade tools built for Excel, CSV, and Power BI workflows. 
            Automate your data prep and visualization instantly.
          </p>

          {/* ── SEARCH BAR ── */}
          <div className="max-w-2xl mx-auto relative mb-20">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text"
                placeholder="Search tools (e.g. 'excel', 'sql', 'clean')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-5 pl-14 pr-14 text-white placeholder:text-slate-500 shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all text-lg"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['Excel', 'CSV', 'SQL', 'Cleaning', 'AI'].map(tag => (
                <button 
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:border-white hover:text-white transition-all"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTools.map((tool) => {
                // @ts-ignore
                const Icon = Icons[tool.icon] || Icons.HelpCircle;
                
                return (
                  <Link 
                    key={tool.slug} 
                    href={`/free-tools/${tool.slug}`}
                    className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-black transition-colors">
                      {tool.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                      {tool.metaDescription.split('.')[0]}.
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                        {tool.category}
                      </span>
                      <Icons.ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No tools found</h3>
              <p className="text-slate-500">Try searching for something else like "Excel" or "CSV".</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-6 text-slate-900 font-bold hover:underline"
              >
                View all tools
              </button>
            </div>
          )}
        </div>
      </section>

      <CTAAndFooter dictionary={dictionary} />
    </main>
  );
}
