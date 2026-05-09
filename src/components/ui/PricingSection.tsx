"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Building2 } from 'lucide-react';

// Interactive Dotted Background Component
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
      
      const spacing = 40; // Distance between dots
      const cols = Math.ceil(width / spacing) + 1;
      const rowsCount = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rowsCount; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 200; // Interaction radius
          let radius = 1.5;
          let opacity = 0.15;
          
          if (dist < maxDist) {
            const factor = 1 - (dist / maxDist);
            // Non-linear scaling for a pronounced center bulge
            radius = 1.5 + (Math.pow(factor, 2) * 3);
            opacity = 0.15 + (factor * 0.5);
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White dots for dark mode
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

export default function PricingSection({ dictionary }: { dictionary: any }) {
  const [isYearly, setIsYearly] = useState(true);

  // Pricing Logic (applying 40% discount for yearly)
  const monthlyPro = 29;
  const yearlyPro = Math.floor(monthlyPro * 12 * 0.6); // 40% off
  const monthlyRatePro = Math.floor(yearlyPro / 12);

  return (
    <section id="pricing" className="py-24 bg-[#0B0D14] relative overflow-hidden text-white font-sans">
      {/* Interactive Dotted Background */}
      <InteractiveDottedGrid />
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 italic">
            {dictionary.pricing.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            {dictionary.pricing.description}
          </p>

          {/* Pricing Switcher */}
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center p-1 bg-slate-900/80 rounded-2xl border border-slate-800 backdrop-blur-md relative">
                <button 
                  onClick={() => setIsYearly(false)}
                  className={`relative z-10 px-8 py-2.5 rounded-xl text-[13px] font-black transition-all duration-300 w-[110px] ${!isYearly ? 'text-white' : 'text-slate-500 hover:text-slate-400'}`}
                >
                   {dictionary.pricing.monthly}
                </button>
                <button 
                  onClick={() => setIsYearly(true)}
                  className={`relative z-10 px-8 py-2.5 rounded-xl text-[13px] font-black transition-all duration-300 w-[110px] ${isYearly ? 'text-white' : 'text-slate-500 hover:text-slate-400'}`}
                >
                   {dictionary.pricing.yearly}
                </button>
                
                {/* Switcher Indicator */}
                <div 
                   className={`absolute inset-y-1 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) bg-slate-700/50 rounded-xl border border-slate-600 shadow-lg ${isYearly ? 'left-[114px] w-[106px]' : 'left-1 w-[106px]'}`}
                />
             </div>
             
             {/* Discount Badge */}
             <div className="flex items-center gap-2.5 px-4 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-blue-400">{dictionary.pricing.save}</span>
                <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.05em]">{dictionary.pricing.annual_billing}</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          
          {/* Free Tier */}
          <div className="bg-[#131620] border border-slate-800 rounded-[2rem] p-8 shadow-2xl relative group hover:border-slate-700 transition-colors">
             <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 border border-slate-700">
                      <Star className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-bold">Hobby</h3>
                </div>
                <div className="text-sm text-slate-500 mb-6 mt-4">Perfect for side projects and individual data explorers.</div>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black">$0</span>
                   <span className="text-slate-500 text-sm font-medium">/ forever</span>
                </div>
             </div>
             
             <button className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold shadow-sm transition-colors mb-8 border border-slate-700">
               Get Started for Free
             </button>

             <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Includes</div>
                {dictionary.pricing.hobby_features.map((feature: string, i: number) => (
                   <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                         <Check className="w-2.5 h-2.5 text-slate-400" />
                      </div>
                      {feature}
                   </div>
                ))}
             </div>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="bg-gradient-to-b from-[#1C2333] to-[#131620] border border-blue-500/30 rounded-[2rem] p-8 shadow-[0_0_80px_rgba(37,99,235,0.15)] relative transform md:-translate-y-4">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="px-4 py-1.5 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg border border-blue-400 whitespace-nowrap">Most Popular</div>
             </div>
             <div className="mb-8 mt-2">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <Zap className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-bold">Pro</h3>
                </div>
                <div className="text-sm text-slate-400 mb-6 mt-4">Advanced visualization and collaboration for professionals.</div>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black transition-all duration-300">
                      ${isYearly ? monthlyRatePro : monthlyPro}
                   </span>
                   <span className="text-slate-500 text-sm font-medium">/ month</span>
                </div>
                {isYearly && (
                   <div className="text-[10px] font-bold text-blue-400/80 mt-1 uppercase tracking-widest animate-in fade-in slide-in-from-top-1 duration-300">
                      Billed ${yearlyPro} annually
                   </div>
                )}
             </div>
             
             <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-colors mb-8 border border-blue-500">
               Start 14-Day Free Trial
             </button>

             <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Everything in Hobby, plus</div>
                {dictionary.pricing.pro_features.map((feature: string, i: number) => (
                   <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                         <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      {feature}
                   </div>
                ))}
             </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-[#131620] border border-slate-800 rounded-[2rem] p-8 shadow-2xl relative group hover:border-slate-700 transition-colors">
             <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 border border-slate-700">
                      <Building2 className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-bold">Enterprise</h3>
                </div>
                <div className="text-sm text-slate-500 mb-6 mt-4">For large teams needing advanced security, compliance, and support.</div>
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black">Custom</span>
                </div>
             </div>
             
             <button className="w-full py-3.5 bg-transparent hover:bg-slate-800 text-white rounded-xl text-sm font-bold shadow-sm transition-colors mb-8 border border-slate-600">
               Contact Sales
             </button>

             <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Everything in Pro, plus</div>
                {dictionary.pricing.enterprise_features.map((feature: string, i: number) => (
                   <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                         <Check className="w-2.5 h-2.5 text-slate-400" />
                      </div>
                      {feature}
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
