import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import Link from "next/link";
import { COMPETITORS, getCompetitorBySlug, getAllCompetitorSlugs } from "@/lib/competitors";
import { ArrowRight, Check, Sparkles, Layout, BarChart2, Search, X, MessageSquare, Zap, DollarSign, Laptop, Palette, Users } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout, BarChart2, Search, MessageSquare, Zap, DollarSign, Laptop, Palette, Users
};

// ── Static Params ──
export function generateStaticParams() {
  const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
  const paths = [];
  
  for (const locale of locales) {
    const slugs = getAllCompetitorSlugs();
    for (const slug of slugs) {
      paths.push({
        locale,
        competitor: slug,
      });
    }
  }
  return paths;
}

// ── Dynamic Metadata ──
export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor: slug } = await params;
  const competitor = getCompetitorBySlug(slug);
  if (!competitor) return { title: "Comparison Not Found" };

  return {
    title: competitor.metaTitle,
    description: competitor.metaDescription,
    keywords: competitor.keywords.join(", "),
    openGraph: {
      title: competitor.metaTitle,
      description: competitor.metaDescription,
      type: "website",
      url: `https://atlasbi.live/vs/${competitor.slug}`,
    },
    alternates: {
      canonical: `https://atlasbi.live/vs/${competitor.slug}`,
    },
  };
}

import { getDictionary } from "@/lib/get-dictionary";

export default async function CompetitorPage({ params }: { params: Promise<{ competitor: string; locale: string }> }) {
  const { competitor: slug, locale } = await params;
  const dictionary = await getDictionary(locale);
  const competitor = getCompetitorBySlug(slug);
  if (!competitor) notFound();

  const CompetitorIcon = iconMap[competitor.theirLogo] || Layout;

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
      <Navbar dictionary={dictionary} />

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white to-white" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Comparison
          </div>
          <h1 className="serif-heading text-3xl md:text-5xl lg:text-6xl text-slate-900 mb-6 italic leading-tight">
            {competitor.h1}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl leading-relaxed mb-10">
            {competitor.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://atlasbi.live" className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-lg active:scale-95">
              Start Using AtlasBI <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/blog/best-ai-chart-generator-2026" className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all">
              Read Deep Dive
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE VERDICT ── */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="p-8 md:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-4">The Verdict</h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "{competitor.verdict}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AtlasBI vs {competitor.name}</h2>
            <p className="text-slate-500">Feature-by-feature comparison for modern teams.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="p-6 font-semibold text-slate-900 w-1/3">Feature</th>
                  <th className="p-6 font-bold text-indigo-600 w-1/3 bg-indigo-50/30">AtlasBI</th>
                  <th className="p-6 font-semibold text-slate-500 w-1/3 flex items-center gap-2">
                    <CompetitorIcon className="w-4 h-4" /> {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {competitor.featureComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 text-sm font-medium text-slate-700">{row.feature}</td>
                    <td className="p-6 text-sm text-slate-900 font-semibold bg-indigo-50/10">
                      {typeof row.atlasbi === 'boolean' ? (
                        row.atlasbi ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />
                      ) : (
                        row.atlasbi
                      )}
                    </td>
                    <td className="p-6 text-sm text-slate-500">
                      {typeof row.competitor === 'boolean' ? (
                        row.competitor ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-400" />
                      ) : (
                        row.competitor
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING COMPARISON ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The True Cost of {competitor.name}</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                  <p className="text-sm font-bold text-red-800 mb-1">{competitor.name} Pricing</p>
                  <p className="text-xl font-black text-red-900">{competitor.pricingComparison.theirs}</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                  <p className="text-sm font-bold text-green-800 mb-1">AtlasBI Pricing</p>
                  <p className="text-xl font-black text-green-900">{competitor.pricingComparison.ours}</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">The Hidden Cost</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {competitor.pricingComparison.hiddenCosts}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SWITCH / PAIN POINTS ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-16 text-center">Why teams leave {competitor.name} for AtlasBI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {competitor.painPoints.map((pain, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-4">
                  <X className="w-4 h-4" />
                </div>
                <h3 className="font-bold mb-2">{pain.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitor.whySwitch.map((reason, i) => {
              const Icon = iconMap[reason.icon] || Check;
              return (
                <div key={i} className="p-6 rounded-2xl bg-indigo-600 border border-indigo-500">
                  <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-indigo-100 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ (AEO/SGE Optimized) ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {competitor.faqs.map((faq, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-slate-50 border border-slate-100">
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

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="serif-heading text-4xl md:text-5xl text-slate-900 italic mb-6">
            Ready for a faster alternative?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Join the teams that stopped waiting for {competitor.name} dashboards and started getting answers in seconds.
          </p>
          <a href="https://atlasbi.live" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition-all shadow-lg active:scale-95 text-lg">
            Try AtlasBI For Free <ArrowRight className="w-5 h-5" />
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
            "mainEntity": competitor.faqs.map(faq => ({
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

      {/* ── JSON-LD Software/Product Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AtlasBI",
            "description": competitor.metaDescription,
            "brand": { "@type": "Brand", "name": "AtlasBI" },
            "isSimilarTo": {
              "@type": "Product",
              "name": competitor.name
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0",
              "highPrice": "49",
              "priceCurrency": "USD",
              "offerCount": "3"
            },
            "url": `https://atlasbi.live/vs/${competitor.slug}`
          }),
        }}
      />

      <CTAAndFooter dictionary={dictionary} />
    </main>
  );
}
