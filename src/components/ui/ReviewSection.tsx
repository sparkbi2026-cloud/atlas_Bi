"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviewsRow1 = [
  {
    name: "Sarah Thompson",
    role: "Head of Finance",
    company: "Series B Fintech",
    content: "AtlasBI transformed our monthly board reports. What used to take two days of manual Excel work now takes literally seconds. The AI's ability to clean raw CSVs is magic.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Data Lead",
    company: "Global Logistics Co.",
    content: "We replaced our complex Tableau setup with AtlasBI for our non-technical managers. Now they build their own charts without opening a Jira ticket for our data team.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emily Rodriguez",
    role: "COO",
    company: "Fast-Growth SaaS",
    content: "The autonomous anomalies detection found a $12k billing error in our stripe data that we had missed for months. It paid for itself in the first 10 minutes.",
    avatar: "https://i.pravatar.cc/150?u=emily"
  },
  {
    name: "David Patel",
    role: "Founder",
    company: "Analytics Studio",
    content: "I've tried every BI tool out there. AtlasBI is the first one that actually understands context. It doesn't just draw charts; it explains what the data means.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];

const reviewsRow2 = [
  {
    name: "Olivia Harper",
    role: "Marketing Director",
    company: "Consumer Brand",
    content: "I can finally see our CAC and LTV trends across 5 different platforms in one view. AtlasBI's cross-dataset merging is the best I've ever used.",
    avatar: "https://i.pravatar.cc/150?u=olivia"
  },
  {
    name: "James Carter",
    role: "VP Operations",
    company: "Enterprise Retail",
    content: "The security features are what won us over. Having SOC2 compliance and enterprise-grade encryption for our sensitive data was non-negotiable.",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "Sophia Lee",
    role: "Product Manager",
    company: "NextGen AI",
    content: "Visualizing our user engagement metrics is now a breeze. The board-ready export feature makes my weekly presentations look like they were made by a pro designer.",
    avatar: "https://i.pravatar.cc/150?u=sophia"
  },
  {
    name: "Alex Rivera",
    role: "Financial Analyst",
    company: "Capital Partners",
    content: "AtlasBI is a force multiplier for our team. We've cut down reporting time by 90%, allowing us to focus on actual strategy instead of data entry.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  }
];

const ReviewCard = ({ review }: { review: typeof reviewsRow1[0] }) => (
  <div className="w-[380px] flex-shrink-0 p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group mx-3">
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className="w-4 h-4 fill-slate-900 text-slate-900" />
      ))}
    </div>
    <p className="text-slate-600 text-[16px] leading-relaxed mb-8 font-medium italic">
      "{review.content}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
      <div>
        <h4 className="text-slate-900 font-bold text-sm leading-none mb-1">{review.name}</h4>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{review.role} · {review.company}</p>
      </div>
    </div>
  </div>
);

export default function ReviewSection({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="serif-heading italic text-5xl md:text-6xl text-slate-900 mb-6">Loved by the best teams</h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">Join 10,000+ data-driven companies visualizing the future with AtlasBI.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative">
          <motion.div 
            className="flex"
            animate={{ x: [0, -1600] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...reviewsRow1, ...reviewsRow1].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
          {/* Overlay Gradients */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden relative">
          <motion.div 
            className="flex"
            animate={{ x: [-1600, 0] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...reviewsRow2, ...reviewsRow2].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
          {/* Overlay Gradients */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
