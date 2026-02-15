"use client";
import { motion } from "framer-motion";
import { 
  ShieldAlert, TrendingUp, Anchor, 
  ShieldCheck, AlertCircle, BarChart, 
  Lightbulb, Compass, ArrowRight 
} from "lucide-react";

const riskFactors = [
  {
    title: "Proactive Threat Intelligence",
    desc: "Anticipating adversary moves before they manifest in your network architecture.",
    icon: <TrendingUp className="text-blue-600" />
  },
  {
    title: "Strategic Governance",
    desc: "Aligning your risk appetite with international standards like NIST and ISO 27001.",
    icon: <Anchor className="text-blue-600" />
  },
  {
    title: "Business Impact Analysis",
    desc: "Quantifying the potential fallout of disruptions to ensure rapid recovery.",
    icon: <BarChart className="text-blue-600" />
  }
];

export default function RiskAdvisory() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      
      {/* 1. BRIGHT HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 border-b border-slate-100 overflow-hidden min-h-[60vh] flex items-center bg-blue-50/30">
        {/* BRIGHTER BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-0274b27c28a0?auto=format&fit=crop&q=80" 
            alt="Business Strategy" 
            className="w-full h-full object-cover opacity-60" // High opacity for brightness
          />
          {/* Light gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-blue-600 mb-8"
          >
            <Compass size={18} className="animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Strategic: Risk Advisory</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-slate-950"
          >
            Tactical <br />
            <span className="text-blue-600">Risk Forecast</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-2xl text-slate-600 text-lg md:text-xl leading-relaxed font-medium"
          >
            Navigate the complexities of the modern threat landscape with precision. We identify, prioritize, and neutralize risks before they reach your perimeter.
          </motion.p>
        </div>
      </section>

      {/* 2. RISK CAPABILITIES (White Grid) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {riskFactors.map((risk, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                <div className="group-hover:text-white transition-colors">
                  {risk.icon}
                </div>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight text-slate-900">{risk.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {risk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. DYNAMIC THREAT LANDSCAPE (Blue Section) */}
      <section className="py-32 px-6 bg-blue-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
              Adaptive Security <br />Governance
            </h2>
            <p className="text-blue-50 opacity-80 text-lg leading-relaxed font-medium">
              Static defense is a liability. Our advisory services provide a dynamic framework that evolves alongside emerging global threats.
            </p>
            
            <div className="space-y-4">
              {[
                "Executive Risk Reporting",
                "Regulatory Compliance Alignment",
                "Supply Chain Vulnerability Assessment",
                "Crisis Management & Resilience"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <ShieldCheck size={20} className="text-blue-300" />
                  <span className="uppercase text-xs font-black tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                alt="Risk Analysis Center" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <AlertCircle size={12} /> Threat Level: Critical
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGY CALL TO ACTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 p-12 md:p-24 rounded-[4rem] bg-slate-50 border border-slate-200">
          <div className="max-w-xl">
            <Lightbulb className="text-blue-600 mb-6" size={48} />
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 mb-6">
              Build a Resilient <br />Future
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Strategy is the difference between a secure enterprise and a headline. Let’s architect your defense.
            </p>
          </div>
          <button className="group flex items-center gap-4 bg-blue-600 text-white font-black px-12 py-6 rounded-full uppercase tracking-tighter hover:bg-slate-950 transition-all shadow-xl text-xl whitespace-nowrap">
            Book a Strategy Session
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}