"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { GraduationCap, Briefcase, Code2, Cpu, ArrowRight, X, Send, Loader2, CheckCircle2, Globe, Phone, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CompanyProfile from "../companyprofile/cv/page";
import Link from "next/link";

const trainingModules = [
  {
    icon: <Code2 size={32} />,
    title: "Tool Mastery",
    desc: "Hands-on training with industry-standard tools like Splunk, Wireshark, and Kali Linux.",
    curriculumLink: "/curriculum-tools.pdf" // Update this path to your actual CV/PDF
  },
  {
    icon: <Cpu size={32} />,
    title: "Real-World Sims",
    desc: "Go beyond theory. Work on live breach simulations and incidence response scenarios.",
    curriculumLink: "/curriculum-sims.pdf"
  },
  {
    icon: <Briefcase size={32} />,
    title: "Job Readiness",
    desc: "Resume building, technical interview prep, and placement with our partner firms.",
    curriculumLink: "/curriculum-career.pdf"
  }
];

export default function TrainingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleApply = (e) => {
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
      alert("Recruitment signal failed. Please try again.");
    });
  };

  return (
    <section className="py-24 bg-white text-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        {/* HEADER AREA */}
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
  <div className="max-w-2xl">
    <h2 className="text-5xl font-black uppercase italic leading-none mb-6">
      From Practitioner to <span className="text-blue-600">Specialist</span>
    </h2>
    <p className="text-xl text-slate-600 font-medium">
      Refine your tactical edge. We bridge the gap between foundational knowledge and elite industry performance through high-intensity, tool-based training.
    </p>
  </div>
  <button 
    onClick={() => setIsModalOpen(true)}
    className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-xl"
  >
    Apply for Specialization <GraduationCap size={20} />
  </button>
</div>

{/* --- NEW: CINEMATIC CLASSROOM VISUAL --- */}
<div className="mb-20 relative rounded-[4rem] overflow-hidden group shadow-2xl">
  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
  <img 
    src="/servies/training.png" 
    alt="Elite Cyber Training Lab" 
    className="w-full h-[500px] object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
  />
  
  {/* Tactical Overlay Labels */}
  <div className="absolute top-10 left-10 z-20 hidden md:block">
    <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Lab Session: Active Alpha-7</span>
    </div>
  </div>

  <div className="absolute bottom-10 right-10 z-20">
    <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-2xl max-w-xs transform hover:-rotate-2 transition-transform">
      <h5 className="text-2xl font-black italic uppercase leading-none mb-2">2026 Curriculum</h5>
      <p className="text-xs font-bold text-blue-100 opacity-80 uppercase tracking-widest">Certified USA standard tactical training environments.</p>
    </div>
  </div>
</div>

        {/* MODULE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {trainingModules.map((module, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border-2 border-slate-100 hover:border-blue-600/20 transition-all group relative overflow-hidden">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h4 className="text-2xl font-black uppercase mb-4">{module.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{module.desc}</p>
              
              {/* VITAL LINK: VIEW CURRICULUM */}
              <Link 
                   href="/companyprofile/cv" 
                     className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest cursor-pointer hover:gap-4 transition-all"
                     >
                     View Curriculum <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* --- USA STANDARD RECRUITMENT FORM (MODAL) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-2xl rounded-[3rem] p-8 md:p-12 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-blue-600 transition-colors">
                <X size={28} />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-10 text-center md:text-left">
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter">Warrior Enrollment</h3>
                    <p className="text-slate-500 font-bold mt-2">USA Training Standard • Employment Pipeline</p>
                  </div>

                  <form ref={form} onSubmit={handleApply} className="space-y-4">
                    {/* EMAILJS HIDDEN IDENTIFIERS */}
                    <input type="hidden" name="subject" value="NEW ACADEMY ENROLLMENT" />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-5 text-slate-400" size={18} />
                        <input required name="name" type="text" placeholder="Full Name" className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-xl focus:border-blue-600 outline-none transition-all font-bold" />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-5 text-slate-400" size={18} />
                        <input required name="email" type="email" placeholder="Email Address" className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-xl focus:border-blue-600 outline-none transition-all font-bold" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-4 top-5 text-slate-400" size={18} />
                        <input required name="phone" type="tel" placeholder="Phone (USA Format)" className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-xl focus:border-blue-600 outline-none transition-all font-bold" />
                      </div>
                      <div className="relative">
                        <Globe className="absolute left-4 top-5 text-slate-400" size={18} />
                        <input required name="location" type="text" placeholder="State / City" className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-12 rounded-xl focus:border-blue-600 outline-none transition-all font-bold" />
                      </div>
                    </div>

                    <textarea required name="message" rows="3" placeholder="Tell us about your interest in Cyber Security..." className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-xl focus:border-blue-600 outline-none transition-all font-bold"></textarea>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-blue-600 text-white font-black py-5 rounded-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-950 transition-all shadow-lg"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : <>Deploy Application <Send size={18} /></>}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <CheckCircle2 size={80} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-4xl font-black uppercase italic">Signal Received</h3>
                  <p className="text-slate-500 mb-8 font-medium italic">Our Recruitment Officers will reach out via email within 48 hours for your screening.</p>
                  <button onClick={() => {setIsModalOpen(false); setIsSubmitted(false);}} className="bg-slate-950 text-white px-10 py-4 rounded-xl font-bold uppercase">Close Terminal</button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}