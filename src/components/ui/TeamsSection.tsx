"use client";

import React from 'react';
import { 
  GraduationCap, HeartPulse, Landmark, ShoppingCart, 
  Factory, Home, Cpu, HardHat, TrendingUp, Megaphone, Users, 
  BadgeDollarSign, Headphones, Settings, Terminal, Rocket, 
  Store, Building, Globe, ChevronRight 
} from 'lucide-react';
import InteractiveGridPattern from './InteractiveGridPattern';
import Link from 'next/link';

const industries = [
  { icon: BadgeDollarSign, title: "Financial Services", slug: "financial-services", desc: "Turn financial data into dashboards fast. Analyze market trends and portfolio performance with AI insights on the fly." },
  { icon: GraduationCap, title: "Education", desc: "Empower educators to visualize performance. Transform enrollment data into actionable growth strategies effortlessly every day." },
  { icon: HeartPulse, title: "Healthcare", desc: "Bridge the gap between data and insights. Build secure, compliant dashboards to monitor health outcomes in real-time." },
  { icon: Landmark, title: "Government", desc: "Modernize agency reporting with portals. Improve transparency with data visualizations for public policy impact instantly." },
  { icon: ShoppingCart, title: "Retail", desc: "Optimize inventory and sales performance. Identify top-selling products and customer behavior patterns with ease." },
  { icon: Factory, title: "Manufacturing", desc: "Track production efficiency and health. Predict equipment maintenance needs using advanced data exploration tools." },
  { icon: Home, title: "Real Estate", desc: "Visualize property market values today. Share professional market analysis dashboards with clients in one simple click." },
  { icon: Cpu, title: "Technology", desc: "Scale reporting across engineering teams. Track feature adoption and system uptime with zero manual setup required." },
];

const teams = [
  { icon: TrendingUp, title: "Sales", slug: "sales", desc: "Impress stakeholders with real-time reports. Uncover win rates and territory performance using natural language queries." },
  { icon: Megaphone, title: "Marketing", slug: "marketing", desc: "Connect data to measure ROI instantly. Visualize customer acquisition costs and conversion funnels without an analyst." },
  { icon: Users, title: "HR & People", desc: "Analyze diversity and retention insights. Build internal dashboards to track hiring goals and team performance metrics." },
  { icon: BadgeDollarSign, title: "Finance", desc: "Transform balance sheets into stories. Automate monthly variance reports and budget tracking for every department." },
  { icon: Headphones, title: "Support", desc: "Turn ticket data into insights fast. Identify common pain points and resolution times to improve team efficiency." },
  { icon: Settings, title: "Operations", desc: "Build dashboards to monitor logistics. Scale your processes with data-driven insights that anyone on the team can use." },
  { icon: Terminal, title: "IT & Dev", desc: "Monitor health and deployment metrics. Centralize log data into professional charts for better team visibility." },
  { icon: HardHat, title: "Construction", desc: "Monitor project timelines and costs. Stay under budget with real-time tracking of material expenses and resources across sites." },
];

const sizes = [
  { icon: Rocket, title: "Startups", slug: "startups", desc: "Skip the expensive data team today. Scale your reporting as your product grows with flexible, AI-first dashboards." },
  { icon: Store, title: "Small Business", desc: "Get enterprise reports without technicality. Manage your business with data-driven confidence using simple tools." },
  { icon: Building, title: "Mid-Market", desc: "Professionalize reporting across teams. Connect all your data sources and find correlations across the company." },
  { icon: Globe, title: "Enterprise", desc: "Scale to thousands with security. Maintain visual consistency and data governance across global teams effortlessly." },
];

export default function TeamsSection({ dictionary }: { dictionary: any }) {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <InteractiveGridPattern />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 mb-6 italic">
            {dictionary.teams.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {dictionary.teams.description}
          </p>
        </div>

        {/* ── SOLUTIONS GRID ── */}
        <div className="space-y-32">
          
          {/* By Industry */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-12 text-center">{dictionary.teams.by_industry}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {industries.map((item) => (
                <div key={item.title} className="p-8 rounded-[32px] bg-white/70 backdrop-blur-sm border border-slate-100 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-6 h-[60px] line-clamp-3">
                    {item.desc}
                  </p>
                  {item.slug ? (
                    <Link href={`/solutions/${item.slug}`} className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* By Team */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-12 text-center">{dictionary.teams.by_team}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {teams.map((item) => (
                <div key={item.title} className="p-8 rounded-[32px] bg-white/70 backdrop-blur-sm border border-slate-100 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-6 h-[60px] line-clamp-3">
                    {item.desc}
                  </p>
                  {item.slug ? (
                    <Link href={`/solutions/${item.slug}`} className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* By Size */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-12 text-center">{dictionary.teams.by_size}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {sizes.map((item) => (
                <div key={item.title} className="p-8 rounded-[32px] bg-white/70 backdrop-blur-sm border border-slate-100 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-6 h-[60px] line-clamp-3">
                    {item.desc}
                  </p>
                  {item.slug ? (
                    <Link href={`/solutions/${item.slug}`} className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group/btn">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
