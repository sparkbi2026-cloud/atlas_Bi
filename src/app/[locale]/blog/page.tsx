import Navbar from "@/components/ui/Navbar";
import InteractiveGridPattern from "@/components/ui/InteractiveGridPattern";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import { Sparkles } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import BlogSearchAndFilter from "@/components/ui/BlogSearchAndFilter";

import { getDictionary } from "@/lib/get-dictionary";

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
   const dictionary = await getDictionary(locale);
   const posts = getAllPosts(locale as any);

   return (
      <main className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
         <Navbar dictionary={dictionary} />

         {/* ── BLOG HERO ── */}
          <section className="relative pt-48 pb-32 overflow-hidden bg-slate-900">
            {/* ── BACKGROUND LAYER ── */}
            <div className="absolute inset-0 z-0">
               <img 
                  src="https://i.pinimg.com/1200x/e1/67/e9/e167e90787db6e935413e6c2f8d9596d.jpg" 
                  alt="Future of Data" 
                  className="w-full h-full object-cover"
               />
               {/* Sophisticated overlays for readability and depth */}
               <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]"></div>
               <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-5xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                     <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                     AtlasBI Intelligence
                  </div>
                  
                  <h1 className="serif-heading text-7xl md:text-9xl text-white leading-[0.9] mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                     Insights from the <br />
                     <span className="text-indigo-400 italic relative">
                        future of data.
                        <svg className="absolute -bottom-2 left-0 w-full h-2 text-indigo-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                           <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                     </span>
                  </h1>
                  
                  <p className="text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                     Expert analysis, industry guides, and strategic insights on AI-driven
                     business intelligence and data storytelling.
                  </p>
               </div>
            </div>
          </section>

         {/* ── SEARCH & FILTERED GRID ── */}
         <section className="pb-32 relative z-10" id="articles">
            <BlogSearchAndFilter allPosts={posts} />
         </section>

         <CTAAndFooter dictionary={dictionary} />
      </main>
   );
}
