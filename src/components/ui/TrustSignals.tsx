"use client";

import React from "react";
import { ShieldCheck, Lock, Globe, Zap, Award, Star } from "lucide-react";
import InteractiveGridPattern from "./InteractiveGridPattern";

export default function TrustSignals() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <InteractiveGridPattern />
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Row 1: Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { label: "Data Points Analyzed", value: "500M+" },
            { label: "Active Organizations", value: "10,000+" },
            { label: "Time Saved / Week", value: "12 Hours" },
            { label: "Uptime Reliability", value: "99.99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Row 2: Security & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Badge 1: Security */}
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Bank-grade AES-256 encryption for all data at rest and in transit. SOC2 Type II compliant infrastructure.
              </p>
              <div className="flex gap-3">
                <div className="px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-900 uppercase tracking-wider">SOC2 Type II</div>
                <div className="px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-900 uppercase tracking-wider">GDPR</div>
              </div>
            </div>
          </div>

          {/* Badge 2: Reliability */}
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 flex-shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Leader in AI BI</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Rated #1 High Performer on G2 for Autonomous Business Intelligence and AI Data Visualization in 2026.
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
                ))}
                <span className="text-xs font-bold text-slate-900 ml-2">4.9/5 on G2</span>
              </div>
            </div>
          </div>

          {/* Badge 3: Global Scale */}
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 flex-shrink-0">
              <Globe className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Global Infrastructure</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Data centers across 12 regions. Local data residency options for US, EU, and APAC enterprise customers.
              </p>
              <div className="flex items-center gap-2 text-slate-900">
                <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">All Systems Operational</span>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Trust Bar */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-30">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-[10px] font-black text-white">G2</div>
            <span className="text-sm font-black text-slate-900 tracking-tighter">G2 LEADER</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-[10px] font-black text-white">C</div>
            <span className="text-sm font-black text-slate-900 tracking-tighter">CAPTERRA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-black text-white">P</div>
            <span className="text-sm font-black text-slate-900 tracking-tighter">PRODUCT HUNT</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-slate-900 text-slate-900" />
            <span className="text-sm font-black text-slate-900 tracking-tighter">TRUSTPILOT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
