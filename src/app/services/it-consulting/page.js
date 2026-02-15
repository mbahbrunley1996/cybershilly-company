"use client";
import { motion } from "framer-motion";
import { 
  BarChart3, ShieldAlert, Terminal, Globe, 
  CheckCircle2, Building2, Layers, Cpu 
} from "lucide-react";

const capabilities = [
  {
    title: "Strategic Infrastructure Planning",
    desc: "Aligning your hardware and cloud architecture with federal performance standards.",
    icon: <Terminal className="text-blue-500" />
  },
  {
    title: "Vulnerability Management",
    desc: "Continuous scanning and patching protocols to minimize the attack surface.",
    icon: <ShieldAlert className="text-blue-500" />
  },
  {
    title: "Operational Efficiency Audit",
    desc: "Reducing technical debt and streamlining DevOps pipelines for maximum uptime.",
    icon: <BarChart3 className="text-blue-500" />
  }
];

export default function ITConsultingServices() {
  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans">
      
      {/* 1. PRIMARY HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative pt-48 pb-32 px-6 border-b border-white/5 overflow-hidden min-h-[70vh] flex items-center">
        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            alt="Cyber Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          {/* Gradients to blend the image into the dark UI */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Grid Overlay for Technical Feel */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-3 text-blue-500 mb-8"
          >
            <Globe size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sector: IT Consulting</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]"
          >
            Technical <br />
            <span className="text-blue-600">Consultancy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed font-medium"
          >
            We provide outside counsel to ensure an objective, high-fidelity view of your security posture and operational architecture.
          </motion.p>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all">
                {cap.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{cap.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ARCHITECTURAL REVEAL (OFFICE & INFRASTRUCTURE DESIGN) */}
      <section className="py-32 px-6 bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Structural Integrity
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight mb-8">
                  Operations <br /><span className="text-blue-600">Command Centers</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: <Building2 size={18}/>, text: "High-security physical infrastructure planning." },
                    { icon: <Layers size={18}/>, text: "Multi-layered operational redundancy protocols." },
                    { icon: <Cpu size={18}/>, text: "Next-generation data center architectural design." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-center p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                      <div className="text-blue-500">{item.icon}</div>
                      <p className="text-gray-300 font-bold uppercase text-xs tracking-widest">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[600px]">
              <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-3xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Modern Office" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
              </motion.div>
              <div className="grid grid-rows-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Architecture" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" alt="Design" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
                </motion.div>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="text-[10px] font-mono text-blue-500/60 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  LIVE_FACILITY_SCAN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OBJECTIVE COUNSEL BODY */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><ShieldAlert size={200} /></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-black uppercase italic mb-10">Objective <span className="text-blue-500">Counsel</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                "Independent advice based on industry best-practices.",
                "Over two decades of experience protecting global organizations.",
                "Engineering hardened IT security environments.",
                "Risk-management strategy tailored to federal compliance."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-400 font-bold text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}