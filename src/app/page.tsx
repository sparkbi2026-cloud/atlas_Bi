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
   MousePointer2,
   BarChart,
   PieChart,
   LineChart,
   Bot,
   Zap,
   Layout,
   Database,
   BarChart3,
   Star
} from "lucide-react";

export default function Home() {
   return (
      <main className="min-h-screen bg-white selection:bg-indigo-100">
         <Navbar />

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
                  Data Analysis Reimagined
               </div>

               <h1 className="sn-reveal serif-heading text-6xl md:text-8xl text-slate-900 leading-[1.05] tracking-tight mb-8">
                  Professional charts.<br />
                  <span className="text-primary italic">Built in seconds.</span>
               </h1>

               <p className="sn-reveal [animation-delay:200ms] text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Stop wrestling with complex BI tools. AtlasBI turns raw data into stunning, board-ready 
                  visualizations instantly. The fastest way to share insights and make data-driven 
                  decisions with your team.
               </p>

               <div className="sn-reveal [animation-delay:400ms] flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                  <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 group shadow-none">
                     Start Visualizing Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full md:w-auto px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
                     Watch Demo
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
                     <span className="text-[13px] font-medium text-slate-600">5,000+ teams trust AtlasBI</span>
                  </div>
                  <div className="h-4 w-px bg-slate-200 hidden md:block" />
                  <div className="flex items-center gap-1.5">
                     <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(s => (
                           <Star key={s} className="w-3 h-3 fill-slate-900 text-slate-900" />
                        ))}
                     </div>
                     <span className="text-[13px] font-medium text-slate-600">4.9/5 on G2</span>
                  </div>
               </div>
            </div>
         </section>

         {/* ── LOGO MARQUEE ── */}
         <section className="py-16 border-y border-slate-100 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
               <p className="text-center text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Trusted by data teams at global leaders</p>
            </div>

            <div className="relative flex overflow-x-hidden">
               <div className="animate-marquee whitespace-nowrap flex items-center py-4">
                  {[
                     { name: "Microsoft", url: "https://cdn.simpleicons.org/microsoft/000" },
                     { name: "Google", url: "https://cdn.simpleicons.org/google/000" },
                     { name: "Figma", url: "https://cdn.simpleicons.org/figma/000" },
                     { name: "Slack", url: "https://cdn.simpleicons.org/slack/000" },
                     { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000" },
                     { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/000" },
                     { name: "Airbnb", url: "https://cdn.simpleicons.org/airbnb/000" },
                     { name: "GitHub", url: "https://cdn.simpleicons.org/github/000" },
                     { name: "Notion", url: "https://cdn.simpleicons.org/notion/000" },
                     { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/000" }
                  ].map((logo, i) => (
                     <div key={i} className="mx-12 flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                        <img
                           src={logo.url}
                           alt={logo.name}
                           className="h-7 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors">{logo.name}</span>
                     </div>
                  ))}
               </div>

               <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
                  {[
                     { name: "Microsoft", url: "https://cdn.simpleicons.org/microsoft/000" },
                     { name: "Google", url: "https://cdn.simpleicons.org/google/000" },
                     { name: "Figma", url: "https://cdn.simpleicons.org/figma/000" },
                     { name: "Slack", url: "https://cdn.simpleicons.org/slack/000" },
                     { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000" },
                     { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/000" },
                     { name: "Airbnb", url: "https://cdn.simpleicons.org/airbnb/000" },
                     { name: "GitHub", url: "https://cdn.simpleicons.org/github/000" },
                     { name: "Notion", url: "https://cdn.simpleicons.org/notion/000" },
                     { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/000" }
                  ].map((logo, i) => (
                     <div key={i} className="mx-12 flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                        <img
                           src={logo.url}
                           alt={logo.name}
                           className="h-7 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors">{logo.name}</span>
                     </div>
                  ))}
               </div>

               {/* Gradient Overlays for smooth fading */}
               <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10" />
               <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10" />
            </div>

            <style jsx>{`
               .animate-marquee {
                  display: inline-flex;
                  animation: marquee 40s linear infinite;
               }
               .animate-marquee2 {
                  display: inline-flex;
                  animation: marquee2 40s linear infinite;
               }
               @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-100%); }
               }
               @keyframes marquee2 {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(0%); }
               }
            `}</style>
         </section>

         {/* ── VIDEO SHOWCASE ── */}
         <VideoShowcase />

         {/* ── FEATURE TABS SECTION ── */}
         <section id="features" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
               <InteractiveGridPattern />
            </div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
               <div className="text-center mb-16">
                  <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 mb-6 italic">Built for modern data workflows</h2>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">Everything you need to turn raw data into professional insights in seconds.</p>
               </div>
               <FeatureTabs />
            </div>
         </section>

         {/* ── TEAMS SECTION ── */}
         <TeamsSection />

         {/* ── TRUST SIGNALS SECTION ── */}
         <TrustSignals />

         {/* ── PRICING SECTION ── */}
         <PricingSection />

         {/* ── PROFESSIONAL COMPARISON SECTION ── */}
         <section id="comparison" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
               <InteractiveGridPattern />
            </div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
               <div className="text-center mb-20">
                  <h2 className="serif-heading text-5xl md:text-6xl text-slate-900 mb-6 italic leading-tight">Why AtlasBI?</h2>
                  <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                     Traditional BI tools were built for data analysts. AtlasBI is built for the entire team.
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-7xl mx-auto">

                  {/* Competitor Side */}
                  <div className="p-10 rounded-[32px] border border-slate-100 bg-slate-50/50 flex flex-col h-full">
                     <div className="flex items-center gap-4 mb-12 pb-6 border-b border-slate-200/50">
                        <div className="w-10 h-10 rounded-xl bg-slate-200/50 flex items-center justify-center text-slate-400">
                           <Layout className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900 leading-tight">Traditional Tools</h3>
                           <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Power BI, Tableau, Excel</p>
                        </div>
                     </div>

                     <ul className="space-y-10 flex-1">
                        {[
                           { title: "Steep learning curve", desc: "Requires technical training and manual setup for every dashboard." },
                           { title: "Siloed data prep", desc: "Data must be cleaned and structured manually before visualization." },
                           { title: "Static reports", desc: "Dashboards often require manual refreshes and aren't live-collaborative." },
                           { title: "High analyst dependency", desc: "Teams wait days for analysts to build or update specific views." },
                           { title: "Generic design aesthetics", desc: "Standard charts that require extra tools for presentation-ready quality." },
                           { title: "Fragmented file sharing", desc: "Sharing requires exporting PDFs or sending large, static files." }
                        ].map((item, i) => (
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
                  <div className="p-10 rounded-[32px] border-2 border-slate-900 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col h-full relative">
                     <div className="absolute top-6 right-8 bg-slate-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">The Winner</div>

                     <div className="flex items-center gap-4 mb-12 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                           <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900 leading-tight">AtlasBI Intelligence</h3>
                           <p className="text-[10px] text-slate-900/50 font-black uppercase tracking-widest mt-1">Powered by Autonomous AI</p>
                        </div>
                     </div>

                     <ul className="space-y-10 flex-1">
                        {[
                           { title: "Zero learning curve", desc: "Build professional charts instantly using natural language prompts." },
                           { title: "Autonomous data prep", desc: "AI automatically summarizes, cleans, and structures your datasets." },
                           { title: "Live collaboration", desc: "Every dashboard is live and collaborative by default for your entire team." },
                           { title: "Instant self-serve insights", desc: "Anyone can get answers in seconds without waiting for a data team." },
                           { title: "Studio-grade visual polish", desc: "Presentation-ready aesthetics out of the box, no extra design work needed." },
                           { title: "Real-time collaborative links", desc: "Share live, interactive links that stay updated as your data changes." }
                        ].map((item, i) => (
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

         {/* ── FAQ SECTION ── */}
         <FAQSection />

         {/* ── CTA & FOOTER SECTION ── */}
         <ReviewSection />
         <CTAAndFooter />
      </main>
   );
}
