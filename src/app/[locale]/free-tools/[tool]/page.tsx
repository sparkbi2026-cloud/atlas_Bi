import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import Link from "next/link";
import { FREE_TOOLS, getToolBySlug, getAllToolSlugs, FreeTool } from "@/lib/free-tools";
import { ArrowRight, Check, Sparkles, ArrowLeft } from "lucide-react";
import ToolPlayground from "@/components/ui/ToolPlayground";
import InteractiveGridPattern from "@/components/ui/InteractiveGridPattern";

// ── Static Params for Build-Time Generation (pSEO) ──
export function generateStaticParams() {
  const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
  const paths = [];
  
  for (const locale of locales) {
    const slugs = getAllToolSlugs();
    for (const slug of slugs) {
      paths.push({
        locale,
        tool: slug,
      });
    }
  }
  return paths;
}

// ── Dynamic Metadata for SEO ──
export async function generateMetadata({ params }: { params: Promise<{ tool: string; locale: string }> }): Promise<Metadata> {
  const { tool: slug, locale } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords.join(", "),
    alternates: {
      canonical: `/${locale}/free-tools/${tool.slug}`,
      languages: {
        'en': `/en/free-tools/${tool.slug}`,
        'fr': `/fr/free-tools/${tool.slug}`,
        'de': `/de/free-tools/${tool.slug}`,
        'it': `/it/free-tools/${tool.slug}`,
        'es': `/es/free-tools/${tool.slug}`,
        'pl': `/pl/free-tools/${tool.slug}`,
        'x-default': `/en/free-tools/${tool.slug}`,
      },
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      type: "website",
      url: `https://atlasbi.live/${locale}/free-tools/${tool.slug}`,
    },
  };
}

import { getDictionary } from "@/lib/get-dictionary";

export default async function FreeToolPage({ params }: { params: Promise<{ tool: string; locale: string }> }) {
  const { tool: slug, locale } = await params;
  const dictionary = await getDictionary(locale);
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const relatedTools = (tool.relatedTools || [])
    .map(s => FREE_TOOLS.find(t => t.slug === s))
    .filter((t): t is FreeTool => !!t);

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
      <Navbar dictionary={dictionary} />

      {/* SEO & AEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://atlasbi.live/${locale}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Free Tools",
                "item": `https://atlasbi.live/${locale}/free-tools`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tool.title,
                "item": `https://atlasbi.live/${locale}/free-tools/${tool.slug}`
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": tool.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <InteractiveGridPattern />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link href="/free-tools" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Free Tools
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[10px] font-black tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" /> Free — No Signup Required
          </div>
          <h1 className="serif-heading text-3xl md:text-5xl text-slate-900 mb-6 italic leading-tight">
            {tool.h1}
          </h1>
          <p className="text-lg text-slate-500 max-w-3xl leading-relaxed mb-8">
            {tool.description}
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="https://atlasbi.live" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-lg active:scale-95">
              Try {tool.title} Free <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/blog/best-ai-chart-generator-2026" className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all">
              See Comparison
            </Link>
          </div>
          <ToolPlayground tool={tool} />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Who Uses This Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tool.useCases.map((uc, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 text-sm font-bold mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VS COMPETITORS ── */}
      {(tool.competitors || []).length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              AtlasBI vs. Alternatives
            </h2>
            <p className="text-slate-500 mb-10">How {tool.title} compares to traditional tools.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900">AtlasBI</th>
                    {(tool.competitors || []).slice(0, 3).map((c, i) => (
                      <th key={i} className="text-center py-3 px-4 font-semibold text-slate-50">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "AI chart type selection", atlasbi: true, others: [false, false, false] },
                    { feature: "Natural language queries", atlasbi: true, others: [false, false, false] },
                    { feature: "Auto data cleaning", atlasbi: true, others: [false, false, false] },
                    { feature: "AI narrative generation", atlasbi: true, others: [false, false, false] },
                    { feature: "No signup required", atlasbi: true, others: [false, true, false] },
                    { feature: "Export as PNG/SVG/PDF", atlasbi: true, others: [true, true, true] },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-4 text-slate-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-green-600 font-bold">✓</td>
                      {row.others.map((val, j) => (
                        <td key={j} className="py-3 px-4 text-center text-slate-400">
                          {val ? "✓" : "✕"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ (AEO/SGE Optimized) ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {tool.faqs.map((faq, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-white border border-slate-100">
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ── */}
      {relatedTools.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Free Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((rt) => rt && (
                <Link
                  key={rt.slug}
                  href={`/free-tools/${rt.slug}`}
                  className="group p-5 rounded-2xl border border-slate-100 hover:border-slate-900 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-slate-900 mb-2">{rt.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{rt.description.substring(0, 80)}...</p>
                  <span className="text-sm font-semibold text-slate-900 group-hover:underline">Try Free →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED BLOG POSTS (Internal Linking) ── */}
      {(tool.relatedBlogs || []).length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Learn More</h2>
            <div className="flex flex-wrap gap-3">
              {(tool.relatedBlogs || []).map((blog: string, i: number) => (
                <Link
                  key={i}
                  href={blog}
                  className="text-sm text-slate-900 hover:text-black hover:underline bg-white px-4 py-2 rounded-full border border-slate-100"
                >
                  {blog.replace("/blog/", "").replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── JSON-LD FAQ Schema (for Google Rich Snippets + AEO) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": tool.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />

      {/* ── JSON-LD Software Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": `AtlasBI ${tool.title}`,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "description": tool.metaDescription,
            "url": `https://atlasbi.live/free-tools/${tool.slug}`,
          }),
        }}
      />

      <CTAAndFooter dictionary={dictionary} />
    </main>
  );
}
