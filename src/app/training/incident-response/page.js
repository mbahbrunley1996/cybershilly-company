"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Flame, Radio, ShieldAlert, 
  Activity, Zap, Clock,
  CheckCircle2, X, Send, Loader2,
  Terminal, HardDrive, Network
} from "lucide-react";

export default function IncidentResponse() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_polrjjn', 
      'template_2avy0u8', 
      e.target, 
      'Wdc-TWzCZa2pRc_5r'
    )
    .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
    }, (error) => {
        setIsSubmitting(false);
        alert("Transmission failed. Lead not captured.");
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-red-500/30">
      
      {/* --- EMERGENCY HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-red-500 font-black uppercase tracking-[0.3em] text-xs mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Active Breach Response Protocol
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-8">
            Minutes Matter. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Stop the Bleeding.</span>
          </h1>

          <p className="max-w-2xl text-slate-400 text-xl mb-12 leading-relaxed">
            When you're under attack, you don't need a consultant—you need a strike team. We contain, eradicate, and recover your infrastructure in record time.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest transition-all shadow-2xl shadow-red-600/20 flex items-center gap-4"
          >
            <Zap fill="currentColor" /> Deploy Emergency Team
          </button>
        </div>
      </section>

      {/* --- BATTLE-TESTED STATS --- */}
      <section className="py-20 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Avg. Containment", val: "45min" },
            { label: "Recovery Rate", val: "99.2%" },
            { label: "Breaches Resolved", val: "450+" },
            { label: "Standby Readiness", val: "24/7/365" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-black mb-2">{stat.val}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE RESPONSE PIPELINE --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-12">Our Tactical <span className="text-red-500 italic">Playbook</span></h2>
              <div className="space-y-8">
                {[
                  { icon: <Radio />, title: "Triage & Identification", desc: "Immediate assessment of breach scope and entry point." },
                  { icon: <Flame />, title: "Containment", desc: "Isolating compromised systems to prevent lateral movement." },
                  { icon: <Activity />, title: "Eradication", desc: "Removing every trace of the threat actor and malware." },
                  { icon: <ShieldAlert />, title: "Hardened Recovery", desc: "Restoring services with 10x stronger security posture." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10 group">
                    <div className="text-red-500 group-hover:scale-110 transition-transform">{step.icon}</div>
                    <div>
                      <h4 className="font-black uppercase tracking-tight mb-2">{step.title}</h4>
                      <p className="text-slate-500 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE FEED SIMULATION */}
            <div className="bg-black rounded-[3rem] p-8 border border-red-500/20 shadow-3xl shadow-red-500/10 relative overflow-hidden">
               <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Live IR Console</span>
                  </div>
                  <Terminal size={16} className="text-slate-700" />
               </div>
               <div className="font-mono text-[11px] space-y-2 text-slate-400">
                  <p className="text-green-500">[SYSTEM] Initialization successful...</p>
                  <p>[INFO] Monitoring port 443 for anomalies...</p>
                  <p className="text-red-400">[WARN] Unauthorized lateral movement detected - 192.168.1.45</p>
                  <p className="text-yellow-500">[ACTION] Quarantining segment B-12...</p>
                  <p>[INFO] Memory dump analysis in progress...</p>
                  <p className="pt-4 text-white font-bold animate-pulse">{'>'} STANDBY FOR INSTRUCTIONS...</p>
               </div>
               <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">
                    <HardDrive size={16} className="text-red-500" />
                    <span className="text-[10px] font-bold uppercase">Files Locked</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">
                    <Network size={16} className="text-red-500" />
                    <span className="text-[10px] font-bold uppercase">IP Blacklisted</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL (CONNECTED TO EMAILJS) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/95 backdrop-blur-xl">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[3.5rem] p-12 relative shadow-2xl text-slate-950"
            >
              <button onClick={closeModal} className="absolute top-8 right-8 text-slate-400 hover:text-red-600"><X /></button>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form">
                    <div className="text-center mb-10">
                      <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Flame className="text-red-600" size={40} />
                      </div>
                      <h3 className="text-3xl font-black uppercase italic">Emergency Deployment</h3>
                      <p className="text-slate-500 font-bold mt-2">Enter details to initiate containment.</p>
                    </div>

                    <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
                      <input type="hidden" name="subject" value="EMERGENCY INCIDENT RESPONSE" />
                      <input type="hidden" name="message" value="CRITICAL: Client has requested immediate incident response support." />
                      
                      <input required name="name" type="text" placeholder="POC Full Name" className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-red-600 outline-none transition-all font-bold" />
                      <input required name="email" type="email" placeholder="Corporate Email" className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-red-600 outline-none transition-all font-bold" />
                      
                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full bg-red-600 text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-950 transition-all"
                      >
                        {isSubmitting ? <Loader2 className="animate-spin" /> : <>Request Extraction <Send size={18} /></>}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                    <CheckCircle2 className="text-green-500 mx-auto mb-6" size={70} />
                    <h3 className="text-4xl font-black uppercase italic text-slate-950 mb-4">Signal Sent</h3>
                    <p className="text-slate-500 mb-10">Our lead responder is reviewing your case. Stay on the line.</p>
                    <button onClick={closeModal} className="w-full bg-slate-950 text-white font-black py-5 rounded-2xl uppercase tracking-widest transition-all">
                      Acknowledge
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}