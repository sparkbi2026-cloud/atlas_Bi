import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import Link from "next/link";
import { SOLUTIONS, getSolutionBySlug, getAllSolutionSlugs } from "@/lib/solutions";
import { ArrowRight, Check, Sparkles, TrendingUp, Shield, Lock, MessageSquare, Users, BarChart3, Target, Trophy, Map, Database, DollarSign, Filter, Megaphone, FileText, PieChart, CreditCard, Presentation, Calculator, Clock, Rocket } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Shield, Lock, MessageSquare, Users, BarChart3, Target, Trophy, Map, Database, DollarSign, Filter, Megaphone, FileText, PieChart, CreditCard, Presentation, Calculator, Clock, Rocket,
};

// ── Static Params ──
export function generateStaticParams() {
  const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
  const paths = [];
  
  for (const locale of locales) {
    const slugs = getAllSolutionSlugs();
    for (const slug of slugs) {
      paths.push({
        locale,
        solution: slug,
      });
    }
  }
  return paths;
}

// ── Dynamic Metadata ──
export async function generateMetadata({ params }: { params: Promise<{ solution: string; locale: string }> }): Promise<Metadata> {
  const { solution: slug, locale } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution Not Found" };

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords.join(", "),
    alternates: {
      canonical: `/${locale}/solutions/${solution.slug}`,
      languages: {
        'en': `/en/solutions/${solution.slug}`,
        'fr': `/fr/solutions/${solution.slug}`,
        'de': `/de/solutions/${solution.slug}`,
        'it': `/it/solutions/${solution.slug}`,
        'es': `/es/solutions/${solution.slug}`,
        'pl': `/pl/solutions/${solution.slug}`,
        'x-default': `/en/solutions/${solution.slug}`,
      },
    },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      type: "website",
      url: `https://atlasbi.live/${locale}/solutions/${solution.slug}`,
    },
  };
}

import { getDictionary } from "@/lib/get-dictionary";

export default async function SolutionPage({ params }: { params: Promise<{ solution: string; locale: string }> }) {
  const { solution: slug, locale } = await params;
  const dictionary = await getDictionary(locale);
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  // Schema.org Data for LLMs/AEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": solution.title,
    "description": solution.metaDescription,
    "url": `https://atlasbi.live/${locale}/solutions/${solution.slug}`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://atlasbi.live/${locale}` },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": `https://atlasbi.live/${locale}/solutions` },
        { "@type": "ListItem", "position": 3, "name": solution.title, "item": `https://atlasbi.live/${locale}/solutions/${solution.slug}` }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": solution.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar dictionary={dictionary} />

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white to-white" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {solution.title}
          </div>
          <h1 className="serif-heading text-3xl md:text-5xl lg:text-6xl text-slate-900 mb-6 italic leading-tight">
            {solution.h1}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl leading-relaxed mb-10">
            {solution.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://atlasbi.live" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-lg active:scale-95">
              {solution.ctaText} <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/free-tools" className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all">
              Try Free Tools
            </Link>
          </div>

          {/* ── METRICS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-100">
            {solution.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{metric.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">The Problem</h2>
          <p className="text-slate-500 mb-12 max-w-2xl">
            Challenges that {solution.title.toLowerCase().replace("ai analytics for ", "")} teams face with traditional analytics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.painPoints.map((pain, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 text-sm font-bold mb-3">
                  ✕
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{pain.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES / SOLUTION ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">The AtlasBI Solution</h2>
          <p className="text-slate-500 mb-12 max-w-2xl">
            AI-powered analytics built for the speed and precision your team demands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] || BarChart3;
              return (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">How Teams Use AtlasBI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.useCases.map((uc, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <blockquote className="serif-heading text-2xl md:text-3xl text-slate-900 italic leading-relaxed mb-8">
            &ldquo;{solution.testimonialQuote}&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-slate-900">{solution.testimonialAuthor}</p>
            <p className="text-sm text-slate-500">{solution.testimonialRole}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {solution.faqs.map((faq, i) => (
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

      {/* ── RELATED BLOGS ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Reading</h2>
          <div className="flex flex-wrap gap-3">
            {solution.relatedBlogs.map((blog, i) => (
              <Link
                key={i}
                href={blog}
                className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline bg-slate-50 px-4 py-2 rounded-full border border-slate-100"
              >
                {blog.replace("/blog/", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your {solution.title.toLowerCase().replace("ai analytics for ", "")} analytics?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Join thousands of teams using AtlasBI for faster, smarter decisions.
          </p>
          <a href="https://atlasbi.live" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all shadow-lg active:scale-95">
            {solution.ctaText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── JSON-LD FAQ Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": solution.faqs.map(faq => ({
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

      {/* ── JSON-LD Product Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `AtlasBI for ${solution.title.replace("AI Analytics for ", "")}`,
            "description": solution.metaDescription,
            "brand": { "@type": "Brand", "name": "AtlasBI" },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0",
              "highPrice": "49",
              "priceCurrency": "USD",
              "offerCount": "3",
            },
            "url": `https://atlasbi.live/solutions/${solution.slug}`,
            "review": {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": solution.testimonialAuthor },
              "reviewBody": solution.testimonialQuote,
            },
          }),
        }}
      />

      <CTAAndFooter dictionary={dictionary} />
    </main>
  );
}
