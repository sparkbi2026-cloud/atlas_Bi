"use client";

import React, { useState, useMemo } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
];

export default function BlogSearchAndFilter({ allPosts }: { allPosts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLang, setActiveLang] = useState("en");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [allPosts, searchQuery]);

  // Pagination logic
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to articles section
    const element = document.getElementById("articles");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reset to page 1 when search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <>
      {/* ── SEARCH & FILTER ── */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or keyword..." 
              className="w-full pl-14 pr-8 py-5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[32px] text-lg font-medium text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-500/10 focus:border-slate-900 transition-all shadow-xl shadow-slate-200/20"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setActiveLang(lang.code)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                activeLang === lang.code
                  ? "bg-white text-slate-900 border-slate-900 shadow-md ring-1 ring-slate-900"
                  : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-white hover:border-slate-300"
              }`}
            >
              <span className="text-base grayscale-0">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── BLOG GRID ── */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden"
              >
                {/* Real Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={post.heroImage || `https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800`} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288560-19969488a381?q=80&w=800";
                    }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                       Article #{post.blogNumber}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-900 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                        CH
                      </div>
                      <span className="text-[13px] font-bold text-slate-900">AtlasBI Team</span>
                    </div>
                    <div className="text-slate-900 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>

        {/* ── PAGINATION & COUNT ── */}
        <div className="mt-20 flex flex-col items-center gap-8">
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-full border border-slate-100 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                      currentPage === number
                        ? "bg-slate-900 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full border border-slate-100 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, totalPosts)} of {totalPosts} articles
          </div>
        </div>
      </div>
    </>
  );
}
