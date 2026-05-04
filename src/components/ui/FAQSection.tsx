"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import InteractiveGridPattern from './InteractiveGridPattern';

const faqs = [
  {
    question: "How does AtlasBI connect to my data?",
    answer: "AtlasBI supports a wide range of data sources. You can upload CSV or Excel files directly, or connect to live databases like PostgreSQL, MySQL, and Snowflake. We also integrate with popular SaaS tools via API."
  },
  {
    question: "Do I need to know SQL to use AtlasBI?",
    answer: "Not at all! AtlasBI is designed for everyone. Our AI understands natural language, so you can just ask questions like 'Show me monthly revenue growth' and it will generate the chart for you instantly."
  },
  {
    question: "Is my data secure with AtlasBI?",
    answer: "Security is our top priority. We use enterprise-grade encryption (AES-256) for data at rest and TLS for data in transit. We are SOC2 compliant and offer on-premise deployment options for enterprise customers."
  },
  {
    question: "Can I share dashboards with people outside my team?",
    answer: "Yes! You can create public sharing links, embed charts into your own applications, or invite external stakeholders with specific view-only permissions. Pro users can also white-label their dashboards."
  },
  {
    question: "How much does AtlasBI cost?",
    answer: "We offer a free Hobby tier for individuals, a Pro tier at $29/month (or less with annual billing) for power users and small teams, and custom Enterprise pricing for large organizations."
  },
  {
    question: "Can I use AI to analyze a competitor's marketing strategy?",
    answer: "While AtlasBI primarily focuses on your own internal data, you can upload publicly available competitor data or market research reports to find correlations and strategic insights using our AI exploration tools."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <InteractiveGridPattern />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 mb-6 italic">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about AtlasBI and how it can transform your data workflow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors group"
              >
                <span className="font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {faq.question}
                </span>
                <div className={`p-1 rounded-lg bg-slate-50 border border-slate-100 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-500 text-[15px] leading-relaxed border-t border-slate-50 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
