"use client";
import { motion } from "framer-motion";
import { 
  FileSearch, ShieldCheck, ClipboardCheck, 
  Search, Database, Fingerprint, Activity,
  Lock, AlertTriangle
} from "lucide-react";

const auditPoints = [
  {
    title: "System Integrity Verification",
    desc: "Comprehensive analysis of OS kernels, file systems, and configuration drifts.",
    icon: <Fingerprint className="text-blue-500" />
  },
  {
    title: "Access Control Audit",
    desc: "Evaluating the principle of least privilege across all administrative tiers.",
    icon: <Lock className="text-blue-500" />
  },
  {
    title: "Network Forensic Analysis",
    desc: "Deep packet inspection and traffic pattern auditing to identify anomalies.",
    icon: <Activity className="text-blue-500" />
  }
];

export default function ITAuditing() {
  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans">
      
      {/* 1. AUDIT HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 border-b border-white/5 overflow-hidden min-h-[70vh] flex items-center">
        {/* FORENSIC BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" 
            alt="Data Audit" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
          {/* Scanning Line Animation */}
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-blue-500 mb-8"
          >
            <Search size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service: IT Auditing</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]"
          >
            Forensic <br />
            <span className="text-blue-600">Verification</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed font-medium"
          >
            Independent, data-driven audits designed to uncover vulnerabilities and ensure total compliance with global security frameworks.
          </motion.p>
        </div>
      </section>

      {/* 2. THE COMPLIANCE LEDGER (Feature Grid) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {auditPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-slate-900/20 border border-white/5 rounded-2xl hover:bg-slate-900/40 transition-all"
            >
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE AUDIT PROCESS (Visual Section) */}
      <section className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative order-2 lg:order-1">
             {/* Floating HUD Elements */}
             <div className="absolute -top-6 -left-6 bg-blue-600 p-4 rounded-xl z-20 shadow-xl">
                <ClipboardCheck className="text-white" size={32} />
             </div>
             
             <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
                  alt="Security Posture" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700"
                />
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
              Rigorous <br /><span className="text-blue-600">Post-Mortem Analysis</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our auditing protocol doesn't just check boxes. We simulate breach scenarios to verify that your "on-paper" security actually holds up under real-world pressure.
            </p>
            
            <div className="grid gap-4">
              {[
                { label: "FedRAMP Readiness Audit", value: "98%" },
                { label: "ISO 27001 Compliance", value: "Verified" },
                { label: "SOC2 Type II Examination", value: "Certified" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center p-5 rounded-xl bg-slate-950 border border-white/5 group hover:border-blue-500/30 transition-all">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{stat.label}</span>
                  <span className="text-blue-500 font-mono font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL REPORT CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           
           <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-10"
           >
              <AlertTriangle className="mx-auto mb-8 text-white/50" size={48} />
              <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-8 leading-none">
                Request a Forensic <br /> System Audit
              </h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto font-medium">
                Identify the silent vulnerabilities in your infrastructure before they are exploited. 
              </p>
              <button className="bg-white text-blue-900 font-black px-12 py-5 rounded-full uppercase tracking-tighter hover:scale-105 transition-all shadow-2xl text-lg">
                Initialize Deep Scan
              </button>
           </motion.div>
        </div>
      </section>

    </div>
  );
}