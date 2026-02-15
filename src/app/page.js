// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Shield, Lock, Zap, ChevronRight, Activity, Terminal } from "lucide-react";
// import NavbarComponents from "@/components/Navbar/NavbarComponents";

// export default function Home() {
//   return (
//     <div className="bg-slate-950 text-white min-h-screen selection:bg-blue-500 selection:text-white">
//       <NavbarComponents />

//       {/* 1. HERO SECTION: THE COMMAND CENTER */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated Grid Background */}
//         <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
//         <div className="container mx-auto px-6 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
//               <Activity size={14} /> System Status: Optimal
//             </div>
            
//             <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
//               Defending the <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
//                 Digital Frontier
//               </span>
//             </h1>
            
//             <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
//               Elite cybersecurity solutions for the modern enterprise. We provide the shielding you need to innovate without fear.
//             </p>

//             <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
//               <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-tighter transition-all flex items-center justify-center gap-2 group">
//                 Initiate Defense Protocol <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border border-slate-800 hover:bg-white/5 text-white px-10 py-4 rounded-full font-black uppercase tracking-tighter transition-all">
//                 View Intelligence
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. STATS BAR: THE TRUTH IN NUMBERS */}
//       <section className="border-y border-white/5 bg-slate-900/50 backdrop-blur-sm py-12">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { label: "Threats Blocked", val: "1.2M+" },
//             { label: "System Uptime", val: "99.9%" },
//             { label: "Response Time", val: "<15m" },
//             { label: "NIST Compliant", val: "100%" },
//           ].map((stat, i) => (
//             <div key={i} className="text-center">
//               <h3 className="text-3xl font-black italic text-white">{stat.val}</h3>
//               <p className="text-xs text-blue-500 uppercase font-bold tracking-widest mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. CORE SERVICES: THE ARSENAL */}
//       <section className="py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-20">
//             <div>
//               <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">The Arsenal</h2>
//               <p className="text-gray-500 mt-4 max-w-md uppercase text-xs font-bold tracking-widest">Advanced modular security for high-growth infrastructure.</p>
//             </div>
//             <div className="hidden md:block h-[2px] flex-1 mx-10 mb-4 bg-slate-900"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <ServiceCard 
//               icon={<Shield className="text-blue-500" />} 
//               title="FedRAMP Ready" 
//               desc="Accelerated compliance pathways for government-grade cloud architecture."
//             />
//             <ServiceCard 
//               icon={<Terminal className="text-blue-500" />} 
//               title="Audit & Risk" 
//               desc="Deep-packet inspection and risk assessment to identify vulnerabilities before they are exploited."
//             />
//             <ServiceCard 
//               icon={<Zap className="text-blue-500" />} 
//               title="Staff Augmentation" 
//               desc="Deploying veteran security engineers directly into your workflow within 48 hours."
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function ServiceCard({ icon, title, desc }) {
//   return (
//     <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all group">
//       <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-blue-600 transition-colors">
//         {React.cloneElement(icon, { size: 28, className: "group-hover:text-white transition-colors" })}
//       </div>
//       <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{title}</h3>
//       <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
//     </div>
//   );
// }


// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Shield, ChevronRight, Activity, Terminal, Zap, Lock } from "lucide-react";
// import NavbarComponents from "@/components/Navbar/NavbarComponents";

// const HERO_IMAGES = [
//   "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80", // Tech Mesh
//   "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80", // Server Room
//   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80", // Global Data
//   "https://images.unsplash.com/photo-1510511459019-5dee667ff18b?auto=format&fit=crop&q=80"  // Code HUD
// ];

// export default function Home() {
//   const [currentImg, setCurrentImg] = useState(0);

//   // Auto-slide logic for the fragmented slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-slate-950 text-white min-h-screen selection:bg-blue-500 selection:text-white">
//       <NavbarComponents />

//       {/* 1. FRAGMENTED HERO SECTION */}
//       <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden border-b border-white/5">
        
//         {/* LEFT HALF: DATA & COMMAND */}
//         <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative z-20 px-6 lg:px-20 bg-slate-950">
//           {/* Subtle Grid overlay for the left side */}
//           <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
          
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative z-10"
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
//               <Activity size={12} className="animate-pulse" /> Live System: Maryland Central
//             </div>
            
//             <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
//               Elite <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
//                 Defense
//               </span> <br />
//               Units
//             </h1>
            
//             <p className="text-gray-400 text-lg max-w-lg leading-relaxed font-medium mb-10">
//               We specialize in FedRAMP compliance, risk advisory, and rapid staff augmentation for organizations that cannot afford a single second of downtime.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center gap-3 group shadow-[0_10px_40px_rgba(37,99,235,0.3)]">
//                 Initiate Protocol <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="bg-slate-900 border border-slate-800 hover:border-slate-600 px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all">
//                 The Intelligence
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT HALF: FRAGMENTED SLIDER */}
//         <div className="w-full lg:w-1/2 h-full relative overflow-hidden bg-slate-900">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentImg}
//               initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
//               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//               exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
//               transition={{ duration: 1.2 }}
//               className="absolute inset-0"
//             >
//               <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
//               <img 
//                 src={HERO_IMAGES[currentImg]} 
//                 alt="Cyber Visual" 
//                 className="w-full h-full object-cover"
//               />
//               {/* Scanline Effect Overlay */}
//               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-20"></div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Slider Indicators (HUD Style) */}
//           <div className="absolute bottom-10 right-10 z-30 flex flex-col gap-4 items-end">
//             {HERO_IMAGES.map((_, i) => (
//               <div key={i} className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentImg(i)}>
//                 <span className={`text-[10px] font-bold ${currentImg === i ? 'text-blue-500' : 'text-white/20'}`}>0{i + 1}</span>
//                 <div className={`h-[2px] transition-all duration-500 ${currentImg === i ? 'w-12 bg-blue-500' : 'w-6 bg-white/20 group-hover:bg-white/40'}`}></div>
//               </div>
//             ))}
//           </div>

//           {/* Side Label */}
//           <div className="absolute left-6 bottom-10 z-30 hidden lg:block">
//             <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 rotate-180 [writing-mode:vertical-lr]">
//               Secure Visual Feed // SB-00{currentImg + 1}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATS BAR */}
//       <section className="border-b border-white/5 bg-slate-950 py-16">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
//           {[
//             { label: "Threats Blocked", val: "1.2M+" },
//             { label: "Uptime Protocol", val: "99.9%" },
//             { label: "Response Velocity", val: "<15m" },
//             { label: "Gov Compliance", val: "NIST" },
//           ].map((stat, i) => (
//             <div key={i} className="relative group">
//               <div className="absolute -left-4 top-0 h-full w-[2px] bg-blue-600 opacity-0 group-hover:opacity-100 transition-all"></div>
//               <h3 className="text-4xl font-black italic text-white tracking-tighter">{stat.val}</h3>
//               <p className="text-[10px] text-blue-500 uppercase font-bold tracking-widest mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. CORE SERVICES */}
//       <section className="py-32 px-6 bg-slate-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-24">
//             <div className="space-y-4">
//               <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">The <span className="text-blue-600">Arsenal</span></h2>
//               <p className="text-gray-500 max-w-sm uppercase text-[10px] font-bold tracking-[0.3em]">Deploying advanced defensive measures.</p>
//             </div>
//             <div className="h-[1px] flex-1 bg-white/10 ml-12 mb-6 hidden lg:block"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             <ServiceCard 
//               icon={<Shield className="text-blue-500" />} 
//               title="FedRAMP Readiness" 
//               desc="We guide federal contractors through the rigorous authorization process with surgical precision."
//             />
//             <ServiceCard 
//               icon={<Terminal className="text-blue-500" />} 
//               title="Offensive Security" 
//               desc="Penetration testing and red-teaming to find the cracks in your armor before the enemy does."
//             />
//             <ServiceCard 
//               icon={<Zap className="text-blue-500" />} 
//               title="IT Augmentation" 
//               desc="Instantly inject elite security engineers into your internal teams to bridge the talent gap."
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function ServiceCard({ icon, title, desc }) {
//   return (
//     <div className="group relative p-10 bg-slate-900/50 border border-white/5 rounded-[2rem] hover:bg-slate-900 transition-all duration-500">
//       <div className="w-16 h-16 bg-slate-950 border border-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500/50 transition-colors">
//         {React.cloneElement(icon, { size: 32 })}
//       </div>
//       <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-blue-500 transition-colors">{title}</h3>
//       <p className="text-gray-400 leading-relaxed text-sm font-medium">{desc}</p>
      
//       {/* Visual Corner Decor */}
//       <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white/5 group-hover:border-blue-500 transition-colors"></div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, ChevronRight, Activity, Terminal, Zap, 
  Lock, Globe, Users, BarChart3, Search, ArrowUpRight, Clock, ShieldCheck, GraduationCap

} from "lucide-react";
import Link from 'next/link';


const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1510511459019-5dee667ff18b?auto=format&fit=crop&q=80"
];

const PARTNERS = [
  { name: "FORGE CORE", icon: <Lock size={20} /> },
  { name: "NEXUS DEFENSE", icon: <Shield size={20} /> },
  { name: "QUANTUM SEC", icon: <Activity size={20} /> },
  { name: "FEDERAL CLOUD", icon: <Globe size={20} /> },
  { name: "APEX SYSTEMS", icon: <Zap size={20} /> },
];

const BLOG_POSTS = [
  {
    id: 1,
    category: "THREAT INTEL",
    title: "The Rise of Quantum-Resistant Encryption",
    excerpt: "Analyzing the NIST transition to post-quantum cryptography standards for 2026.",
    date: "FEB 14, 2026",
    readTime: "8 MIN",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "OPERATIONS",
    title: "Zero-Trust with AI Firewalls",
    excerpt: "How machine learning is reducing response times by 40%.",
    date: "FEB 05, 2026",
    readTime: "6 MIN",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    featured: false,
  },
];

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-blue-500 selection:text-white font-sans">
     

      {/* 1. FRAGMENTED HERO SECTION */}
      <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden border-b border-white/5">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative z-20 px-6 lg:px-20 bg-slate-950">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <Activity size={12} className="animate-pulse" /> Live System: Maryland Central
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-6">
              Elite <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Defense</span> <br />
              Units
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed font-medium mb-10">
              We specialize in FedRAMP compliance, risk advisory, and rapid staff augmentation for organizations that cannot afford a single second of downtime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center gap-3 group shadow-[0_10px_40px_rgba(37,99,235,0.3)]">
                Initiate Protocol <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-slate-900 border border-slate-800 hover:border-slate-600 px-8 py-4 rounded-xl font-black uppercase tracking-tighter transition-all">
                The Intelligence
              </button>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 h-full relative overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div key={currentImg} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 1.2 }} className="absolute inset-0">
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
              <img src={HERO_IMAGES[currentImg]} alt="Cyber Visual" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-20"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4.5 NEW: THE ACADEMY (RECRUITMENT) */}
<section className="py-32 px-6 bg-blue-600 relative overflow-hidden">
  {/* Decorative background element */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-950 skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          <GraduationCap size={14} /> Career Forge Now Active
        </div>
        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none mb-8">
          Don't just watch <br /> the fight. <span className="text-slate-950">Join it.</span>
        </h2>
        <p className="text-blue-100 text-xl max-w-lg leading-relaxed font-medium mb-12">
          We are recruiting the next generation of Cyber Warriors. Get hands-on training with elite tools and secure your place in the 2026 job market.
        </p>
        
        {/* BUTTON THAT DIRECTS TO THE TRAINING PAGE */}
       <Link href="/training-section">
  <button className="bg-slate-950 hover:bg-white hover:text-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all flex items-center gap-4 group shadow-2xl">
    Enter The Academy <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
  </button>
</Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Tools Mastered", val: "15+" },
          { label: "Job Placement", val: "94%" },
          { label: "Live Simulations", val: "Unlimited" },
          { label: "Industry Mentor", val: "1-on-1" }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-950/40 backdrop-blur-md border border-white/10 p-8 rounded-[2rem]">
            <div className="text-4xl font-black text-white mb-1">{stat.val}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 2. PARTNER MARQUEE */}
      <section className="py-12 bg-slate-950 border-b border-white/5 overflow-hidden">
        <div className="flex animate-loop-scroll gap-20 items-center justify-around min-w-full px-10">
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-crosshair">
              <div className="text-blue-500">{partner.icon}</div>
              <span className="text-xl font-black italic tracking-tighter uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BUSINESS BRIEFING */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
              Security is not a product. <span className="text-blue-600">It is a standard.</span>
            </h2>
            <p className="text-gray-400 text-lg border-l-2 border-blue-600 pl-6">
              ShillyBrittle architects resilient digital fortresses that allow businesses to scale in the face of global threats.
            </p>
          </div>
          <div className="relative bg-slate-900 border border-white/10 p-1 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" className="w-full h-[450px] object-cover rounded-[2.3rem] opacity-70 grayscale" alt="Briefing" />
          </div>
        </div>
      </section>

      {/* 4. THE ARSENAL (SERVICES) */}
      <section className="py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-20">The <span className="text-blue-600">Arsenal</span></h2>
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard icon={<Shield className="text-blue-500" />} title="FedRAMP Readiness" desc="Surgical precision in federal authorization." />
            <ServiceCard icon={<Terminal className="text-blue-500" />} title="Offensive Security" desc="Red-teaming your infrastructure." />
            <ServiceCard icon={<Zap className="text-blue-500" />} title="IT Augmentation" desc="Injecting elite engineers into your team." />
          </div>
        </div>
      </section>

      {/* 5. THE BRIEFING (BLOG) */}
      <section className="py-32 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">The <span className="text-blue-600">Briefing</span></h2>
            <div className="hidden md:flex items-center gap-2 text-blue-500 font-bold tracking-widest text-xs uppercase">
              <ShieldCheck size={16} /> Verified Intelligence
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className={`${post.featured ? 'lg:col-span-8' : 'lg:col-span-4'} group relative rounded-[2rem] overflow-hidden border border-white/5 bg-slate-900`}>
                <img src={post.image} className="w-full h-[400px] object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-8 flex flex-col justify-end">
                  <span className="text-blue-500 text-[10px] font-bold tracking-[0.3em] mb-2">{post.category}</span>
                  <h3 className="text-2xl font-black italic uppercase mb-4">{post.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <ArrowUpRight className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <FooterComponents /> */}
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group relative p-10 bg-slate-900/50 border border-white/5 rounded-[2rem] hover:bg-slate-900 transition-all duration-500">
      <div className="w-16 h-16 bg-slate-950 border border-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500/50">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm font-medium">{desc}</p>
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white/5 group-hover:border-blue-500 transition-colors"></div>
    </div>
  );
}