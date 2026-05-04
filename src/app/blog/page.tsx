import Navbar from "@/components/ui/Navbar";
import InteractiveGridPattern from "@/components/ui/InteractiveGridPattern";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import { Sparkles } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import BlogSearchAndFilter from "@/components/ui/BlogSearchAndFilter";

export default async function BlogPage() {
   const posts = getAllPosts('en');

   return (
      <main className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
         <Navbar />

         {/* ── BLOG HERO ── */}
         <section className="relative pt-48 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
               <InteractiveGridPattern
                  width={40}
                  height={40}
                  squares={[80, 80]}
                  radius={1.5}
                  opacity={0.8}
               />
            </div>

            <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-4xl mx-auto text-center mb-20">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black tracking-widest uppercase mb-6">
                     <Sparkles className="w-3.5 h-3.5" />
                     AtlasBI Intelligence
                  </div>
                  <h1 className="serif-heading text-6xl md:text-8xl text-slate-900 leading-[1] mb-6 tracking-tight">
                     Insights from the <br />
                     <span className="text-primary italic">future of data.</span>
                  </h1>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
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

         <CTAAndFooter />
      </main>
   );
}
