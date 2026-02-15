"use client";
import React, { useState } from "react";
import { Play, Lock, Clock, Shield, Search, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Network Infiltration 101",
    duration: "45:20",
    level: "Intermediate",
    category: "Offensive",
    // Standard YouTube Embed format
    videoUrl: "https://www.youtube.com/embed/fN25f68_uy8?rel=0&autoplay=1", 
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Advanced Risk Mitigation",
    duration: "32:15",
    level: "Advanced",
    category: "Compliance",
    videoUrl: "https://www.youtube.com/embed/668nUCeB73A?rel=0&autoplay=1",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
  id: 3,
  title: "Incident Response Protocol",
  duration: "58:40",
  level: "Expert",
  category: "Defensive",
  // A reliable cybersecurity educational video link
  videoUrl: "https://www.youtube.com/embed/U_O_itW7Lrk?rel=0&autoplay=1", 
  // High-reliability thumbnail from Unsplash
  thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
}
];

export default function VideoVault() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="space-y-8">
      {/* Vault Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">
            Specialist <span className="text-blue-500">Vault</span>
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Encrypted Archive // Level 4</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="Filter Archive..." 
            className="bg-slate-900 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs font-mono text-white outline-none focus:border-blue-500 transition-all w-full md:w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase())).map((video) => (
          <motion.div 
            key={video.id}
            whileHover={{ y: -5 }}
            className="group relative bg-slate-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl"
          >
            {/* Thumbnail Area */}
            <div className="relative h-48 overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                  <Play className="text-white fill-current" size={24} />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-slate-950/90 px-2 py-1 rounded text-[10px] font-mono text-blue-400 border border-blue-500/20">
                {video.duration}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                  {video.category}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-1">
                  <Shield size={10} /> {video.level}
                </span>
              </div>
              <h4 className="text-lg font-black uppercase italic text-white group-hover:text-blue-500 transition-colors">
                {video.title}
              </h4>
              <button className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-all">
                Access Recording <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}