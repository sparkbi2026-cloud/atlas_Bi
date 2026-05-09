"use client";

import Navbar from "@/components/ui/Navbar";
import FeatureTabs from "@/components/ui/FeatureTabs";
import InteractiveGridPattern from "@/components/ui/InteractiveGridPattern";
import PricingSection from "@/components/ui/PricingSection";
import TeamsSection from "@/components/ui/TeamsSection";
import FAQSection from "@/components/ui/FAQSection";
import ReviewSection from "@/components/ui/ReviewSection";
import TrustSignals from "@/components/ui/TrustSignals";
import VideoShowcase from "@/components/ui/VideoShowcase";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import {
   Sparkles,
   ArrowRight,
   Star,
   Layout
} from "lucide-react";

export default function HomePageClient({ dictionary }: { dictionary: any }) {
   return (
      <main className="min-h-screen bg-white selection:bg-indigo-100">
         <Navbar dictionary={dictionary} />

         {/* ── HERO SECTION ── */}
         <section 
            className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://i.pinimg.com/1200x/eb/cb/92/ebcb92ef541eb615595538a879c3c0cc.jpg')` }}
         >
            {/* Gradient Overlay for Readability and Premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />

            <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
               <div className="sn-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  {dictionary.hero.badge}
               </div>

               <h1 className="sn-reveal serif-heading text-6xl md:text-8xl text-slate-900 leading-[1.05] tracking-tight mb-8">
                  {dictionary.hero.title_part1}<br />
                  <span className="text-primary italic">{dictionary.hero.title_italic}</span>
               </h1>

               <p className="sn-reveal [animation-delay:200ms] text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                  {dictionary.hero.description}
               </p>

               <div className="sn-reveal [animation-delay:400ms] flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                  <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 group shadow-none">
                     {dictionary.hero.button_primary} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full md:w-auto px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
                     {dictionary.hero.button_secondary}
                  </button>
               </div>

               {/* Hero Trust Bar */}
               <div className="sn-reveal [animation-delay:600ms] flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70">
                  <div className="flex items-center gap-2">
                     <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(i => (
                           <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-6 h-6 rounded-full border-2 border-white" alt="user" />
                        ))}
                     </div>
                     <span className="text-[13px] font-medium text-slate-600">{dictionary.hero.trust}</span>
                  </div>
                  <div className="h-4 w-px bg-slate-200 hidden md:block" />
                  <div className="flex items-center gap-1.5">
                     <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(s => (
                           <Star key={s} className="w-3 h-3 fill-slate-900 text-slate-900" />
                        ))}
                     </div>
                     <span className="text-[13px] font-medium text-slate-600">{dictionary.hero.rating}</span>
                  </div>
               </div>
            </div>
         </section>

         {/* ── VIDEO SHOWCASE ── */}
         <VideoShowcase dictionary={dictionary} />

         {/* ── FEATURE TABS SECTION ── */}
         <section id="features" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
               <InteractiveGridPattern />
            </div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
               <div className="text-center mb-16">
                  <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 mb-6 italic">{dictionary.features.badge}</h2>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">{dictionary.features.description}</p>
               </div>
               <FeatureTabs />
            </div>
         </section>

         {/* ── TEAMS SECTION ── */}
         <TeamsSection dictionary={dictionary} />

         {/* ── TRUST SIGNALS SECTION ── */}
         <TrustSignals dictionary={dictionary} />

         {/* ── PRICING SECTION ── */}
         <PricingSection dictionary={dictionary} />

         {/* ── PROFESSIONAL COMPARISON SECTION ── */}
         <section id="comparison" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
               <InteractiveGridPattern />
            </div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
               <div className="text-center mb-20">
                  <h2 className="serif-heading text-5xl md:text-6xl text-slate-900 mb-6 italic leading-tight">{dictionary.comparison.title}</h2>
                  <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                     {dictionary.comparison.description}
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-7xl mx-auto">

                  {/* Competitor Side */}
                  <div className="p-10 rounded-[32px] border border-slate-100 bg-slate-50/50 flex flex-col h-full text-left">
                     <div className="flex items-center gap-4 mb-12 pb-6 border-b border-slate-200/50">
                        <div className="w-10 h-10 rounded-xl bg-slate-200/50 flex items-center justify-center text-slate-400">
                           <Layout className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900 leading-tight">{dictionary.comparison.traditional_title}</h3>
                           <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{dictionary.comparison.traditional_subtitle}</p>
                        </div>
                     </div>

                     <ul className="space-y-10 flex-1">
                        {dictionary.comparison.traditional_features.map((item: any, i: number) => (
                           <li key={i} className="flex items-start gap-5">
                              <div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 flex-shrink-0 text-[10px] font-black">
                                 ✕
                              </div>
                              <div>
                                 <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                 <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* AtlasBI Side */}
                  <div className="p-10 rounded-[32px] border-2 border-slate-900 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col h-full relative text-left">
                     <div className="absolute top-6 right-8 bg-slate-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{dictionary.comparison.winner}</div>

                     <div className="flex items-center gap-4 mb-12 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                           <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900 leading-tight">{dictionary.comparison.atlas_title}</h3>
                           <p className="text-[10px] text-slate-900/50 font-black uppercase tracking-widest mt-1">{dictionary.comparison.atlas_subtitle}</p>
                        </div>
                     </div>

                     <ul className="space-y-10 flex-1">
                        {dictionary.comparison.atlas_features.map((item: any, i: number) => (
                           <li key={i} className="flex items-start gap-5">
                              <div className="mt-1 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 text-[10px] font-black shadow-[0_4px_10px_rgba(79,70,229,0.3)]">
                                 ✓
                              </div>
                              <div>
                                 <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                 <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

               </div>
            </div>
         </section>

         <FAQSection dictionary={dictionary} />
         <ReviewSection dictionary={dictionary} />
         <CTAAndFooter dictionary={dictionary} />
      </main>
   );
}
