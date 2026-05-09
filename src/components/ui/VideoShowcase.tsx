import React from 'react';
import InteractiveGridPattern from './InteractiveGridPattern';

export default function VideoShowcase({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <InteractiveGridPattern />
      </div>
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        {/* Heading Section */}
        <div className="mb-16">
          <h2 className="serif-heading text-4xl md:text-6xl text-slate-900 mb-8 leading-[1.1] italic">
            {dictionary.video.title_part1} <br className="hidden md:block" />
            {dictionary.video.title_part2}
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {dictionary.video.description}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-indigo-500/5 rounded-[40px] blur-2xl group-hover:bg-indigo-500/10 transition-all duration-700" />
          
          <div className="relative aspect-video rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-slate-50">
            <iframe 
              src="https://player.vimeo.com/video/1188360056?h=a1b2c3d4e5&badge=0&autopause=0&player_id=0&app_id=58479" 
              className="absolute inset-0 w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              title="AtlasBI in Action"
            ></iframe>
          </div>
        </div>

        {/* Stats / Info Below Video */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Insights Generated", value: "10M+" },
             { label: "Data Sources", value: "50+" },
             { label: "Team Efficiency", value: "3x Faster" },
             { label: "User Rating", value: "4.9/5" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
