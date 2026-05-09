"use client";

import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity, Server, Lock, Trash2, Cloud, BarChart3, ChevronDown } from 'lucide-react';

// Interactive Dotted Background (from Pricing page)
function InteractiveDottedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    let animationFrameId: number;

    const draw = () => {
      mouseX += (targetMouseX - mouseX) * 0.15;
      mouseY += (targetMouseY - mouseY) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const spacing = 40;
      const cols = Math.ceil(width / spacing) + 1;
      const rowsCount = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rowsCount; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 200;
          let radius = 1.5;
          let opacity = 0.15;

          if (dist < maxDist) {
            const factor = 1 - (dist / maxDist);
            radius = 1.5 + (Math.pow(factor, 2) * 3);
            opacity = 0.15 + (factor * 0.5);
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

export default function CTAAndFooter({ dictionary }: { dictionary: any }) {
  return (
    <div className="bg-[#0B0D14] font-sans text-white">
      {/* ── CTA SECTION ── */}
      <section className="relative py-32 overflow-hidden border-y border-slate-800/50">
        <InteractiveDottedGrid />

        {/* Blue Glow Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {dictionary.navbar.get_started}
          </div>

          <h2 className="serif-heading text-5xl md:text-7xl text-white mb-8 leading-tight">
            {dictionary.footer.cta_title}
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Every dataset you upload from now on comes with full AI intelligence.
            Know what happened, why it happened, and exactly what to do next.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <button className="w-full md:w-72 bg-[#F2C94C] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#e6bf41] transition-all active:scale-95 group shadow-[0_20px_40px_-10px_rgba(242,201,76,0.3)]">
              {dictionary.footer.cta_button} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full md:w-64 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all active:scale-95">
              Watch Demo
            </button>
          </div>

          <p className="text-slate-500 text-sm font-medium tracking-wide">
            No credit card required. GDPR compliant. Global data centers.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-32 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden">
        {/* Interactive Grid Background */}
        <div className="absolute inset-0 z-0">
          <InteractiveDottedGrid />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">

            {/* Column 1: Brand & Badges */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-8 group">
                <img 
                  src="/logo.png" 
                  alt="AtlasBI Logo" 
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              </Link>
              <p className="text-slate-500 text-[14px] leading-relaxed mb-8 max-w-[200px]">
                AI-powered data visualization and autonomous business intelligence.
              </p>

              <div className="space-y-2 mb-10">
                <a href="mailto:hello@atlasbi.live" className="text-[13px] font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  hello@atlasbi.live
                </a>
                <p className="text-[13px] text-slate-400 font-medium ml-3.5">
                  650 California St, San Francisco,<br />CA 94108, United States
                </p>
              </div>

              <div className="space-y-4">

                {/* Trustpilot Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-white shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900">Trustpilot</span>
                  </div>
                  <div className="w-px h-3 bg-slate-200" />
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map((s) => (
                      <svg key={s} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-emerald-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-slate-200"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                  </div>
                  <span className="text-sm font-black text-slate-900">4.2</span>
                </div>

                {/* Product Hunt Badge */}
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-all group max-w-[200px]">
                  <div className="w-6 h-6 rounded-full bg-[#DA552F] flex items-center justify-center text-white text-[10px] font-black">P</div>
                  <div className="flex-1">
                    <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Featured on</div>
                    <div className="text-xs font-bold text-slate-900 leading-none">Product Hunt</div>
                  </div>
                  <div className="text-slate-400 group-hover:text-yellow-500 transition-colors">★</div>
                </a>
              </div>
            </div>

            {/* Link Columns - High Fidelity AtlasBI Content */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
              {/* Alternatives & Tools */}
              <div>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mb-8">Alternatives</h4>
                <ul className="space-y-4">
                  {[
                    { label: "vs Power BI", href: "/vs/powerbi" },
                    { label: "vs Tableau", href: "/vs/tableau" },
                    { label: "vs Looker", href: "/vs/looker" },
                  ].map(link => (
                    <li key={link.label}><a href={link.href} className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link.label}</a></li>
                  ))}
                </ul>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mt-12 mb-8">Free Resources</h4>
                <ul className="space-y-4">
                  <li><Link href="/prompts" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">AI Prompt Library &rarr;</Link></li>
                  <li><Link href="/free-tools" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">Free Analytics Tools &rarr;</Link></li>
                </ul>
              </div>

              {/* Solutions & Use Cases */}
              <div>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mb-8">Solutions</h4>
                <ul className="space-y-4">
                  {[
                    "SaaS Analytics", "Marketing ROI", "Finance Teams", "Product Growth",
                    "Sales Tracking", "Ops Intelligence", "Customer Health", "E-commerce",
                    "Engineering", "HR Analytics"
                  ].map(link => (
                    <li key={link}><a href="#" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              {/* Use Cases & Get Started */}
              <div>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mb-8">Use Cases</h4>
                <ul className="space-y-4">
                  {["Data Teams", "Founders", "Agencies", "Enterprise", "Startups"].map(link => (
                    <li key={link}><a href="#" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a></li>
                  ))}
                </ul>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mt-12 mb-8">Get Started</h4>
                <ul className="space-y-4">
                  {["Log in", "Start for Free", "Book a Demo"].map(link => (
                    <li key={link}><a href="#" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              {/* Legal & Company */}
              <div>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mb-8">Legal</h4>
                <ul className="space-y-4">
                  {["Privacy Policy", "Terms of Service", "Security", "GDPR", "Cookie Policy"].map(link => (
                    <li key={link}><a href="#" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a></li>
                  ))}
                </ul>
                <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400 mt-12 mb-8">Company</h4>
                <ul className="space-y-4">
                  {["About", "Blog", "Careers", "Contact"].map(link => (
                    <li key={link}>
                      {link === "Blog" ? (
                        <Link href="/blog" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</Link>
                      ) : (
                        <a href="#" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">{link}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-10">
              <div className="text-[12px] font-bold tracking-widest uppercase text-slate-400">© 2026 ATLASBI.</div>
              <div className="flex items-center gap-6">
                {[
                  { name: 'Twitter', icon: '𝕏' },
                  { name: 'LinkedIn', icon: 'in' },
                  { name: 'Discord', icon: '🎮' }
                ].map((s) => (
                  <a key={s.name} href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-sm">{s.icon}</a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-slate-300" />, label: "GDPR Compliant" },
                { icon: <div className="w-2 h-2 rounded-full bg-emerald-500" />, label: "Systems Live" },
                { icon: <Lock className="w-4 h-4 text-slate-300" />, label: "AES-256 Encryption" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-slate-400">
                  {badge.icon}
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
