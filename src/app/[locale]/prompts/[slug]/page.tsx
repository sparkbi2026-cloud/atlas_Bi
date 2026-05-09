import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import CTAAndFooter from "@/components/ui/CTAAndFooter";
import Link from "next/link";
import { getPromptBySlug, getAllPromptSlugs } from "@/lib/prompts";
import { Terminal, Copy, ArrowRight, Activity, Database, GitBranch, Play, ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  const locales = ['en', 'fr', 'de', 'it', 'es', 'pl'];
  const paths = [];
  
  for (const locale of locales) {
    const slugs = getAllPromptSlugs();
    for (const slug of slugs) {
      paths.push({
        locale,
        slug: slug,
      });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return { title: "Prompt Not Found" };

  return {
    title: prompt.metaTitle,
    description: prompt.metaDescription,
    keywords: prompt.seoKeywords.join(", "),
    openGraph: {
      title: prompt.metaTitle,
      description: prompt.metaDescription,
      type: "article",
      url: `https://atlasbi.live/prompts/${prompt.slug}`,
    },
  };
}

import { getDictionary } from "@/lib/get-dictionary";

export default async function PromptPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const dictionary = await getDictionary(locale);
  const prompt = getPromptBySlug(slug);
  if (!prompt) notFound();

  return (
    <main className="min-h-screen bg-[#F0F9FF] font-sans text-slate-900">
      <Navbar dictionary={dictionary} />
      
      {/* SEO & GEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": prompt.title,
            "description": prompt.metaDescription,
            "step": [
              {
                "@type": "HowToStep",
                "text": "Copy the prompt text below."
              },
              {
                "@type": "HowToStep",
                "text": "Paste it into AtlasBI or your preferred LLM."
              },
              {
                "@type": "HowToStep",
                "text": "Upload your dataset to generate the " + prompt.chartType + "."
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
            "@type": "SoftwareSourceCode",
            "name": prompt.title,
            "text": prompt.thePrompt,
            "programmingLanguage": "Natural Language",
            "codeSampleType": "AI Prompt"
          })
        }}
      />

      {prompt.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": prompt.faqs.map(faq => ({
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
      )}

      <div className="container mx-auto px-6 max-w-5xl pt-32 pb-24">
        {/* Back Button */}
        <Link href="/prompts" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 bg-white px-4 py-2 rounded-lg border border-blue-100 mb-12 hover:bg-blue-50 transition-all shadow-sm">
          <ChevronLeft className="w-4 h-4" /> All Prompts
        </Link>

        {/* Main Card Container */}
        <div className="bg-white rounded-[32px] border border-blue-100 shadow-xl shadow-blue-900/5 overflow-hidden mb-12">
          
          {/* Header Section */}
          <div className="p-8 md:p-12 border-b border-slate-50">
            <div className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> {prompt.category} Analysis Engine
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {prompt.title}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-3xl">
              {prompt.metaDescription}
            </p>
          </div>

          {/* Prompt Execution Area */}
          <div className="p-8 md:p-12 bg-slate-50/50">
            <div className="max-w-4xl mx-auto">
              
              {/* Prompt Block */}
              <div className="bg-[#0D1117] rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Prompt Input</span>
                  </div>
                  <button className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </button>
                </div>
                <div className="p-6 md:p-8">
                  <code className="text-sm md:text-base text-green-400 font-mono leading-relaxed block">
                    "{prompt.thePrompt}"
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Content Section */}
          <div className="p-8 md:p-12 lg:p-20 border-t border-slate-50">
            <article 
              className="prompt-article max-w-none"
              dangerouslySetInnerHTML={{ __html: prompt.deepExplanationHtml }}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technical FAQ</h2>
          <div className="space-y-4">
            {prompt.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-blue-400 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-loose">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <CTAAndFooter dictionary={dictionary} />
    </main>
  );
}
