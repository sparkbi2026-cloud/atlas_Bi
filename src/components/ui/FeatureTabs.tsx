"use client";
import React, { useState, useRef } from 'react';
import { Sparkles, BarChart2, PieChart, FileText, ArrowUp, ChevronLeft, ChevronRight, Globe, Lock, Search, Database, Columns, LayoutDashboard, ArrowRight, Share2, Users, Download, Palette, Type, CheckCircle2, TrendingUp, Filter, Check, Copy, Plus, Zap } from 'lucide-react';

const tabs = [
  { 
    id: 'auto_charts', 
    label: 'Auto Generated Charts',
    title: 'Auto Generated Charts',
    desc: 'Simply connect your data and let our AI instantly build the perfect visualizations for you. No manual configuration required.',
    bullets: [
      'Upload CSV, Excel, or connect a live database',
      'AI picks the best chart type automatically',
      'Edit, rename, and export in one click',
    ]
  },
  { 
    id: 'custom_widgets', 
    label: 'Customizable Widgets',
    title: 'Customizable Dashboard Widgets',
    desc: 'Resize, drag, and drop your way to the perfect dashboard. Pin your most important metrics right where you need them.',
    bullets: [
      'Drag-and-drop layout with snap-to-grid',
      'Save multiple dashboard views per project',
      'Pin KPIs and refresh live without re-uploading',
    ]
  },
  { 
    id: 'sharing', 
    label: 'Sharing & Tracking',
    title: 'Dashboard Sharing & Tracking',
    desc: 'Share your dashboards via a secure link. See exactly who is viewing your data, when they viewed it, and what they interacted with.',
    bullets: [
      'One-click shareable link — no login required',
      'Real-time view tracking per recipient',
      'Set expiry dates and password protection',
    ]
  },
  { 
    id: 'domain', 
    label: 'Custom Domain',
    title: 'Custom Domain',
    desc: 'Host your analytics on your own branded domain. Give your clients a fully white-labeled experience that matches your brand.',
    bullets: [
      'Map any subdomain in under 2 minutes',
      'Full white-label — zero AtlasBI branding',
      'SSL & custom favicon included for free',
    ]
  },
  { 
    id: 'insights', 
    label: 'AI Based Insights',
    title: 'AI Based Insights',
    desc: 'Stop digging for answers. Our AI constantly scans your data to highlight key trends, anomalies, and opportunities automatically.',
    bullets: [
      'Proactive anomaly detection with alerts',
      'Plain-English summaries of complex datasets',
      'Actionable recommendations, not just charts',
    ]
  },
  { 
    id: 'comparison', 
    label: 'Sheet Comparison',
    title: 'Sheet Comparison',
    desc: 'Upload two spreadsheets and let AtlasBI instantly highlight the differences. Perfect for version control and financial reconciliations.',
    bullets: [
      'Side-by-side diff view for any two sheets',
      'Highlights additions, deletions, and changes',
      'Export a clean diff report as PDF or CSV',
    ]
  },
  { 
    id: 'cleanup', 
    label: 'Data Cleanup',
    title: 'AI Based Data Cleanup',
    desc: 'Messy data? No problem. Our AI automatically detects and fixes formatting errors, missing values, and duplicates before visualizing.',
    bullets: [
      'Auto-detects null values, duplicates, typos',
      'One-click bulk fix with a full audit log',
      'Preview before applying — always reversible',
    ]
  },
  { 
    id: 'columns', 
    label: 'Dynamic Comparison',
    title: 'Dynamic Column Comparison',
    desc: 'Interactively compare different data columns on the fly. Swap metrics with a single click to uncover hidden correlations.',
    bullets: [
      'Swap axes and metrics without re-uploading',
      'Overlay multiple columns on the same chart',
      'Instant correlation score and trend lines',
    ]
  }
];

export default function FeatureTabs() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
      {/* Pill Nav with Scroll Arrows */}
      <div className="relative w-full flex items-center mb-12 px-12">
         <button 
           onClick={() => scroll('left')}
           className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
         >
           <ChevronLeft className="w-5 h-5" />
         </button>

         <div 
           ref={scrollRef}
           className="flex items-center gap-2 p-2 bg-slate-100/80 backdrop-blur-sm rounded-[2rem] overflow-x-auto w-full shadow-inner border border-slate-200 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
         >
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTabId(tab.id)}
               className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                 activeTabId === tab.id 
                   ? 'bg-slate-900 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] scale-105' 
                   : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
               }`}
             >
               {tab.label}
             </button>
           ))}
         </div>

         <button 
           onClick={() => scroll('right')}
           className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
         >
           <ChevronRight className="w-5 h-5" />
         </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-white rounded-[48px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700">
        
        {/* Dynamic Background Accents */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        
        {/* Soft Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />

        {/* Left Content */}
        <div className="w-full md:w-5/12 z-10 text-left flex flex-col gap-8">
          <div key={`title-${activeTab.id}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-3xl md:text-5xl serif-heading italic mb-4 leading-tight text-slate-900">
              {activeTab.title}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed font-sans" key={`desc-${activeTab.id}`}>
              {activeTab.desc}
            </p>
          </div>
          <ul className="space-y-3" key={`bullets-${activeTab.id}`}>
            {activeTab.bullets?.map((b, i) => (
              <li key={i} className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="mt-0.5 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-700 text-[15px] font-medium leading-snug">{b}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:gap-3 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Area (High-Fidelity Code Mockups) */}
        <div className="w-full md:w-7/12 relative z-10 flex justify-center md:justify-end min-h-[360px]" key={`mockup-${activeTab.id}`}>
           
           {/* 1. Auto Charts (Premium Search AI) */}
           {activeTab.id === 'auto_charts' && (
              <div className="flex flex-col items-end justify-center w-full max-w-[600px] animate-in zoom-in-95 duration-700">
                <div className="bg-white rounded-[40px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] w-full border border-slate-100 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <img 
                    src="/auto_genearted_chart.png" 
                    alt="Auto Generated Chart" 
                    className="w-full h-auto rounded-[32px] shadow-sm relative z-10"
                  />
                </div>
              </div>
           )}

           {/* 2. Customizable Widgets */}
           {activeTab.id === 'custom_widgets' && (
              <div className="flex flex-col items-end justify-center w-full max-w-[600px] animate-in zoom-in-95 duration-700">
                <div className="bg-white rounded-[40px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] w-full border border-slate-100 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <img 
                    src="/custmzeable_dashboard_wdget.png" 
                    alt="Customizable Dashboard Widgets" 
                    className="w-full h-auto rounded-[32px] shadow-sm relative z-10"
                  />
                </div>
              </div>
           )}

           {/* 3. Dashboard Sharing */}
           {activeTab.id === 'sharing' && (
              <div className="flex flex-col items-end justify-center w-full max-w-[600px] animate-in zoom-in-95 duration-700">
                <div className="bg-white rounded-[40px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] w-full border border-slate-100 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <img 
                    src="/dashboard_sharing_tracking.png" 
                    alt="Dashboard Sharing & Tracking" 
                    className="w-full h-auto rounded-[32px] shadow-sm relative z-10"
                  />
                </div>
              </div>
           )}

           {/* 4. Custom Domain */}
           {activeTab.id === 'domain' && (
              <div className="flex flex-col items-end justify-center w-full max-w-[600px] animate-in zoom-in-95 duration-700">
                <div className="bg-white rounded-[40px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] w-full border border-slate-100 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <img 
                    src="/custom_domain.png" 
                    alt="Custom Domain White-labeling" 
                    className="w-full h-auto rounded-[32px] shadow-sm relative z-10"
                  />
                </div>
              </div>
           )}

           {/* 5. AI Insights (Glowing Floating Cards) */}
           {activeTab.id === 'insights' && (
              <div className="w-full max-w-[500px] relative animate-in fade-in zoom-in-95 duration-700">
                 {/* Floating Core AI Unit */}
                 <div className="bg-white rounded-[40px] p-8 shadow-[0_50px_100px_-20px_rgba(79,70,229,0.15)] border border-slate-100 relative z-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-60" />
                    
                    <div className="flex justify-between items-center mb-10">
                       <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl relative group">
                             <Sparkles className="w-6 h-6" />
                             <div className="absolute inset-0 rounded-2xl bg-indigo-500 animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900">AtlasBI AI</h4>
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Intelligence</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    <div className="space-y-6">
                       <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 relative group transition-all hover:bg-white hover:shadow-lg hover:border-indigo-100">
                          <div className="flex items-center gap-2 mb-3">
                             <div className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-wider">Trend Alert</div>
                             <span className="text-[10px] text-slate-400 font-bold">2m ago</span>
                          </div>
                          <p className="text-slate-700 text-[15px] leading-relaxed font-medium">
                            Weekly revenue is trending <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">12% higher</span> than average. Most growth comes from <span className="text-slate-900 font-bold">Mobile Tier</span> users.
                          </p>
                       </div>

                       <div className="p-6 rounded-3xl bg-indigo-600 text-white shadow-xl relative overflow-hidden group">
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          <div className="flex items-center gap-2 mb-3">
                             <div className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[10px] font-black uppercase tracking-wider">Recommendation</div>
                          </div>
                          <p className="text-white text-[15px] leading-relaxed font-semibold mb-6">
                            Maximize ROI by increasing ad spend in <span className="underline decoration-indigo-300 underline-offset-4">North America</span>. High-conversion patterns detected.
                          </p>
                          <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl text-sm font-black shadow-lg hover:bg-slate-50 transition-all active:scale-95">
                             Scale Ad Spend
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           )}

           {/* 6. Sheet Comparison (Complex Table UI) */}
           {activeTab.id === 'comparison' && (
              <div className="w-full max-w-[600px] bg-slate-900 rounded-[32px] p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-slate-700 animate-in slide-in-from-bottom-8 duration-500">
                 <div className="flex justify-between items-center mb-6 px-2">
                    <h4 className="text-white font-bold text-lg">Diff Viewer</h4>
                    <div className="flex gap-4 text-xs font-bold">
                       <span className="flex items-center gap-1.5 text-red-400"><div className="w-2 h-2 rounded-full bg-red-400"></div> Removed (1)</span>
                       <span className="flex items-center gap-1.5 text-emerald-400"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Added (2)</span>
                    </div>
                 </div>
                 
                 <div className="flex bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden text-sm font-mono">
                    {/* Left side v1 */}
                    <div className="flex-1 border-r border-slate-700">
                       <div className="bg-slate-900/50 p-3 text-slate-400 text-xs font-bold border-b border-slate-700">Q3_Financials_v1.csv</div>
                       <div className="p-2 space-y-1">
                          <div className="flex p-2 text-slate-300"><span className="w-8 text-slate-500">12</span> <span>{"{ id: '1A', val: $4,000 }"}</span></div>
                          <div className="flex p-2 bg-red-500/10 text-red-300 border-l-2 border-red-500"><span className="w-8 text-slate-500">13</span> <span>{"{ id: '1B', val: $2,500 }"}</span></div>
                          <div className="flex p-2 text-slate-300"><span className="w-8 text-slate-500">14</span> <span>{"{ id: '1C', val: $8,200 }"}</span></div>
                          <div className="flex p-2 text-slate-300"><span className="w-8 text-slate-500">15</span> <span>{"{ id: '1D', val: $1,100 }"}</span></div>
                       </div>
                    </div>
                    {/* Right side v2 */}
                    <div className="flex-1">
                       <div className="bg-slate-900/50 p-3 text-slate-400 text-xs font-bold border-b border-slate-700">Q3_Financials_FINAL.csv</div>
                       <div className="p-2 space-y-1">
                          <div className="flex p-2 text-slate-300"><span className="w-8 text-slate-500">12</span> <span>{"{ id: '1A', val: $4,000 }"}</span></div>
                          <div className="flex p-2 bg-slate-800 text-slate-500"><span className="w-8"></span> <span className="italic">// row removed</span></div>
                          <div className="flex p-2 bg-emerald-500/10 text-emerald-300 border-l-2 border-emerald-500"><span className="w-8 text-emerald-600/50">14</span> <span>{"{ id: '1C', val: $9,500 }"}</span></div>
                          <div className="flex p-2 text-slate-300"><span className="w-8 text-slate-500">15</span> <span>{"{ id: '1D', val: $1,100 }"}</span></div>
                       </div>
                    </div>
                 </div>
              </div>
           )}

           {/* 7. Data Cleanup */}
           {activeTab.id === 'cleanup' && (
              <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] p-8 text-slate-800 animate-in slide-in-from-top-8 duration-500">
                 <div className="flex justify-between items-center mb-8">
                    <div>
                       <h4 className="font-black text-xl mb-1">Data Transformer</h4>
                       <p className="text-sm text-slate-500">Auto-detected anomalies</p>
                    </div>
                    <span className="px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-black tracking-wide border border-violet-200 shadow-sm">1,240 Rows Cleaned</span>
                 </div>
                 
                 <div className="space-y-4">
                    {/* Row 1 */}
                    <div className="relative flex flex-col p-4 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm group hover:border-violet-300 transition-colors">
                       <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Column: Location</span>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">Whitespace Trimmed</span>
                       </div>
                       <div className="flex items-center gap-4 text-sm font-mono">
                          <span className="text-red-500 line-through decoration-red-500/50 bg-red-50 px-2 py-1 rounded w-1/3 truncate">" New York, NY "</span>
                          <ArrowRight className="w-5 h-5 text-slate-300" />
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-bold border border-emerald-200 w-1/3 text-center">"New York, NY"</span>
                       </div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="relative flex flex-col p-4 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm group hover:border-violet-300 transition-colors">
                       <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Column: Revenue</span>
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-100 px-2 py-0.5 rounded border border-blue-200">Null Imputed</span>
                       </div>
                       <div className="flex items-center gap-4 text-sm font-mono">
                          <span className="text-slate-400 italic bg-slate-200/50 px-2 py-1 rounded w-1/3 text-center">NULL</span>
                          <ArrowRight className="w-5 h-5 text-slate-300" />
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-bold border border-emerald-200 w-1/3 text-center">0.00</span>
                       </div>
                    </div>
                 </div>
                 <button className="w-full mt-6 py-3.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-slate-800 transition-colors">Approve Changes</button>
              </div>
           )}

           {/* 8. Dynamic Columns (Interactive Data Viz Mockup) */}
           {activeTab.id === 'columns' && (
              <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] p-8 animate-in zoom-in-95 duration-500 border border-slate-100">
                 <div className="flex justify-between items-center mb-8">
                    {/* Select 1 */}
                    <div className="px-5 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-bold text-slate-700 flex items-center gap-3 cursor-pointer hover:border-slate-300 transition-all">
                       <div className="w-3 h-3 rounded-sm bg-slate-300"></div> Marketing Spend <ChevronRight className="w-4 h-4 rotate-90 text-slate-400" />
                    </div>
                    <div className="text-xs font-black text-slate-300 uppercase tracking-widest">VS</div>
                    {/* Select 2 */}
                    <div className="px-5 py-3 bg-pink-50 border border-pink-200 shadow-sm rounded-xl text-sm font-bold text-pink-700 flex items-center gap-3 cursor-pointer hover:border-pink-300 transition-all">
                       <div className="w-3 h-3 rounded-sm bg-pink-500"></div> New Customers <ChevronRight className="w-4 h-4 rotate-90 text-pink-400" />
                    </div>
                 </div>
                 
                 {/* Chart Grid Lines */}
                 <div className="relative h-48 w-full border-b border-slate-200 flex items-end justify-between gap-4 pb-0 mt-4">
                    <div className="absolute inset-0 flex flex-col justify-between border-l border-slate-200 pb-0 -ml-2 pl-2">
                       <div className="w-full border-t border-dashed border-slate-200"></div>
                       <div className="w-full border-t border-dashed border-slate-200"></div>
                       <div className="w-full border-t border-dashed border-slate-200"></div>
                       <div className="w-full"></div>
                    </div>
                    
                    {/* Bars */}
                    {[
                      { s: 40, c: 50, label: 'Jan' },
                      { s: 60, c: 75, label: 'Feb' },
                      { s: 45, c: 55, label: 'Mar' },
                      { s: 90, c: 100, label: 'Apr' },
                      { s: 65, c: 80, label: 'May' },
                      { s: 80, c: 90, label: 'Jun' }
                    ].map((data, i) => (
                       <div key={i} className="relative z-10 w-full flex justify-center gap-1.5 group h-full items-end">
                          <div className="w-1/2 bg-slate-200 rounded-t-md transition-all duration-500 group-hover:bg-slate-300" style={{ height: `${data.s}%` }}></div>
                          <div className="w-1/2 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-md transition-all duration-500 group-hover:from-pink-500 group-hover:to-pink-300 shadow-sm relative" style={{ height: `${data.c}%` }}>
                             {/* Tooltip on hover */}
                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
                                {data.c}k
                             </div>
                          </div>
                          {/* X-axis label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">{data.label}</div>
                       </div>
                    ))}
                 </div>
              </div>
           )}

        </div>
      </div>
    </div>
  );
}
