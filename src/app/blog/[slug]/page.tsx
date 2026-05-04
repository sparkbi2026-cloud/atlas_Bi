import React from "react";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import InteractiveGridPattern from "@/components/ui/InteractiveGridPattern";
import {
  Calendar,
  Clock,
  ChevronLeft,
  Share2,
  Bookmark,
  ArrowRight,
  TrendingUp,
  Zap
} from "lucide-react";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts('en');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'en');

  if (!post) {
    notFound();
  }

  // Auto-generate FAQ Schema for LLMs/AEO
  const faqItems: { question: string; answer: string }[] = [];
  const lines = post.content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^#{2,3}\s+(How |What |Why |Is |Are |Can |Does |Where |When |Which ).*\?\s*$/i) ||
      lines[i].match(/^\*\*Q:\s+(.*)\?\*\*/i) ||
      lines[i].match(/^#{2,3}\s+(.*)\?\s*$/i);
    if (match) {
      const question = (match[1] || lines[i]).replace(/^#{2,3}\s+/, "").replace(/^\*\*Q:\s+/, "").trim();
      let answer = "";
      for (let j = i + 1; j < lines.length; j++) {
        const line = lines[j].trim();
        if (line.startsWith("#") || line.startsWith("---")) break;
        if (line) answer += (answer ? " " : "") + line;
      }
      if (question.length > 10 && answer.length > 30) {
        faqItems.push({ question, answer: answer.substring(0, 400) });
      }
    }
  }

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
      <Navbar />

      {/* SEO & AEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.description || post.content.substring(0, 160).replace(/[#\n-]/g, ""),
            "author": {
              "@type": "Person",
              "name": "AtlasBI Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AtlasBI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://atlasbi.live/logo.png"
              }
            },
            "datePublished": post.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://atlasbi.live/blog/${post.slug}`
            }
          })
        }}
      />

      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      )}

      {/* ── ARTICLE HEADER ── */}
      <header className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <InteractiveGridPattern
            width={40}
            height={40}
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [10, 15],
              [15, 15],
              [10, 10],
              [12, 12],
              [12, 15],
              [15, 12],
            ]}
            radius={3}
            opacity={0.3}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors mb-12 group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-xs font-black text-indigo-600 uppercase tracking-widest mb-8">
              <span className="px-3 py-1 bg-indigo-50 rounded-full">Article #{post.blogNumber}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="serif-heading text-5xl md:text-7xl text-slate-900 mb-8 leading-[1.1] italic">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-8 border-y border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white uppercase">
                  CH
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">AtlasBI Team</div>
                  <div className="text-xs text-slate-400">Data Intelligence Specialists</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-3 rounded-full border border-slate-100 hover:bg-slate-50 transition-all">
                  <Share2 className="w-4 h-4 text-slate-600" />
                </button>
                <button className="p-3 rounded-full border border-slate-100 hover:bg-slate-50 transition-all">
                  <Bookmark className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── ARTICLE CONTENT ── */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sidebar / TOC */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Table of Contents</h4>
                <nav className="space-y-4">
                  {post.content.split("\n")
                    .filter(line => line.startsWith("## "))
                    .map((line, i) => {
                      const title = line.replace("## ", "").replace(/\*/g, "");
                      return (
                        <div
                          key={i}
                          className="block text-[13px] font-bold text-slate-600 hover:text-indigo-600 transition-colors leading-snug cursor-pointer"
                        >
                          {title}
                        </div>
                      );
                    })}
                </nav>

                <hr className="my-8 border-slate-200" />

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-slate-900">
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Trending Now</span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[13px] font-bold text-slate-500 leading-snug hover:text-slate-900 cursor-pointer transition-colors">
                      Why AI agents are replacing static dashboards in 2026
                    </p>
                    <p className="text-[13px] font-bold text-slate-500 leading-snug hover:text-slate-900 cursor-pointer transition-colors">
                      The ethics of autonomous data storytelling
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <div className="lg:col-span-9 max-w-4xl">
              <article className="prose prose-slate prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-8 pb-4 border-b border-slate-100" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6" {...props} />,
                    p: ({ node, ...props }) => <p className="text-slate-600 leading-relaxed text-lg mb-8" {...props} />,
                    li: ({ node, ...props }) => <li className="text-slate-600 text-lg mb-2" {...props} />,
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-12 border border-slate-100 rounded-3xl shadow-sm">
                        <table className="w-full text-left text-base" {...props} />
                      </div>
                    ),
                    th: ({ node, ...props }) => <th className="p-4 bg-slate-50 font-bold text-slate-900 border-b border-slate-100" {...props} />,
                    td: ({ node, ...props }) => <td className="p-4 border-b border-slate-50 text-slate-600" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 italic text-slate-700 bg-indigo-50/50 rounded-r-2xl my-10" {...props} />
                    ),
                    hr: () => <hr className="my-16 border-slate-100" />
                  }}
                >
                  {post.content}
                </ReactMarkdown>

                {/* CTA Block */}
                <div className="p-10 rounded-[32px] bg-slate-900 text-white relative overflow-hidden my-16 shadow-2xl">
                  <Zap className="absolute top-0 right-0 w-64 h-64 text-white/5 -translate-y-1/4 translate-x-1/4" />
                  <div className="relative z-10 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-6 italic text-white">Experience the "Speed of Thought"</h3>
                    <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                      Join 20k+ data-first teams who use AtlasBI to turn raw datasets into professional insights in seconds.
                    </p>
                    <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-all active:scale-95 shadow-xl flex items-center gap-2">
                      Start Visualizing Free <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>

              {/* Author Footer */}
              <div className="mt-20 p-10 rounded-[40px] border border-slate-100 bg-white flex flex-col md:flex-row items-center gap-8 shadow-sm">
                <div className="w-24 h-24 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white">
                  CH
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Written by AtlasBI Team</h4>
                  <p className="text-slate-500 leading-relaxed">
                    The AtlasBI Team is dedicated to building the future of autonomous business intelligence,
                    helping teams reclaim their time and lead with data-driven confidence.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Follow on LinkedIn</button>
                    <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">View all articles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAAndFooter />
    </main>
  );
}
