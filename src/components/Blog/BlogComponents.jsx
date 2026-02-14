"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, Clock, ShieldCheck, Tag, ChevronRight } from "lucide-react";
// import FooterComponents from "@/components/Footer/FooterComponents"

const BLOG_POSTS = [
  {
    id: 1,
    category: "THREAT INTEL",
    title: "The Rise of Quantum-Resistant Encryption in Federal Systems",
    excerpt: "Analyzing the NIST transition to post-quantum cryptography standards for 2026. As classical computing limits approach, the federal landscape must pivot to lattice-based primitives to ensure long-term data sovereignty.",
    date: "FEB 14, 2026",
    readTime: "8 MIN",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "COMPLIANCE",
    title: "FedRAMP High Baseline: A Survival Guide",
    excerpt: "Navigating the complexities of the new security controls for cloud service providers.",
    date: "FEB 10, 2026",
    readTime: "12 MIN",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: 3,
    category: "OPERATIONS",
    title: "Automating Zero-Trust with AI-Driven Firewalls",
    excerpt: "How machine learning is reducing response times by 40% in SOC environments.",
    date: "FEB 05, 2026",
    readTime: "6 MIN",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    featured: false,
  },
];

export default function BlogComponents() {
  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const secondaryPosts = BLOG_POSTS.filter(p => !p.featured);

  return (
    <>
    <section className="bg-slate-950 text-white pb-32">
      
      {/* 1. FULL WIDTH FEATURED HERO */}
      <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <img 
          src="/hero/hero 3.png" 
          alt={featuredPost.title}
          className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-1000 hover:scale-105"
        />
        
        {/* Scanline / HUD Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_2px,3px_100%] pointer-events-none z-20"></div>

        <div className="absolute inset-0 z-30 flex items-end">
          <div className="max-w-7xl mx-auto px-6 w-full pb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                <ShieldCheck size={12} className="animate-pulse" /> Critical Briefing // {featuredPost.category}
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium mb-8 line-clamp-2 max-w-2xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center gap-3 group shadow-[0_10px_40px_rgba(37,99,235,0.3)]">
                  Access Intelligence <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="flex items-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                   <span className="flex items-center gap-2"><Clock size={14} /> {featuredPost.readTime}</span>
                   <span>{featuredPost.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32">
        
        {/* HEADER: SUB-BRIEFINGS & SEARCH */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-l-2 border-blue-600 pl-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
              The <span className="text-blue-600">Archive</span>
            </h2>
            <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">Secondary Intelligence Reports</p>
          </div>
          
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH DATABASE..."
              className="w-full bg-slate-900 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-xs font-bold tracking-widest focus:outline-none focus:border-blue-500 transition-all uppercase"
            />
          </div>
        </div>

        {/* SECONDARY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:bg-slate-900 transition-all duration-500 flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={post.title} />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-blue-500 text-[10px] font-black tracking-widest uppercase mb-4 block">
                  {post.category}
                </span>
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2">{post.excerpt}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
                  <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    READ <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-blue-600 rounded-[2rem] p-10 relative overflow-hidden group flex flex-col justify-center items-start border border-blue-400/20 shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
          >
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Stay <br />Synced.</h3>
              <p className="text-blue-100 text-sm font-medium leading-relaxed">Join the high-clearance mailing list for zero-day alerts.</p>
              <div className="pt-4 w-full space-y-3">
                <input 
                  type="email" 
                  placeholder="EMAIL@DATABASE.GOV" 
                  className="w-full bg-blue-700/50 border border-white/20 rounded-xl py-4 px-4 text-xs font-bold placeholder:text-blue-300 focus:outline-none"
                />
                <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-black uppercase text-xs tracking-tighter hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                  Initialize Sync <Tag size={14} />
                </button>
              </div>
            </div>
            {/* Visual background decor */}
            <div className="absolute -bottom-10 -right-10 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
               <ShieldCheck size={240} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
      {/* <FooterComponents /> */}
    </>
  );
}