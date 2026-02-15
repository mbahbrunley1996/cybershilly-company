"use client";
import { motion } from "framer-motion";
import { 
  Award, Briefcase, Globe, Zap, ShieldCheck, 
  Download, FileText, ChevronRight, User,
  Linkedin, Twitter, Verified, Mail // <--- Added Mail here
} from "lucide-react";

export default function CompanyProfile() {
  const handlePrint = () => {
    window.print(); // Simple way to allow "Export to PDF" via browser print
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      
      {/* 1. HEADER / BRAND IDENTITY */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
            >
              Official Capability Statement
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none text-slate-950">
              Shilly<span className="text-blue-600">Brittle</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 font-medium max-w-xl">
              A premier technical consultancy specializing in high-fidelity IT auditing, risk advisory, and elite cybersecurity training.
            </p>
          </div>
          <div className="flex gap-4 no-print">
             <button 
               onClick={handlePrint}
               className="flex items-center gap-2 bg-slate-950 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
             >
               <Download size={16} /> Export PDF
             </button>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE LEADERSHIP SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-b border-slate-100">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                  alt="Company Owner / Principal Consultant" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 pt-4">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
               <Verified size={20} />
               <span className="text-xs font-black uppercase tracking-widest">Principal Strategy Architect</span>
            </div>
            <h2 className="text-4xl font-black uppercase italic text-slate-950 mb-6">
              Leadership <span className="text-blue-600">& Vision</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium italic">
              "At ShillyBrittle, we don't just secure networks; we protect the continuity of progress. Our mission is to ensure that your technical infrastructure is an asset, never a liability."
            </p>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed mb-8">
              <p>
                Led by a veteran consultant with over 20 years in the IT sector, our leadership brings a forensic mindset to every engagement. From securing federal data centers to training Fortune 500 executives, the focus remains the same: Absolute Integrity.
              </p>
            </div>
            <div className="flex gap-4">
               <div className="p-3 bg-slate-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                 <Linkedin size={20} />
               </div>
               <div className="p-3 bg-slate-100 rounded-xl hover:bg-blue-400 hover:text-white transition-all cursor-pointer">
                 <Twitter size={20} />
               </div>
               <div className="p-3 bg-slate-100 rounded-xl hover:bg-slate-950 hover:text-white transition-all cursor-pointer">
                 <Mail size={20} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIRM OVERVIEW & STATS */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
               <Zap className="mb-4" />
               <h3 className="text-xl font-black uppercase italic mb-2">The Mission</h3>
               <p className="text-sm text-blue-100 leading-relaxed">To harden global infrastructure through forensic analysis and the cultivation of human intelligence.</p>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 border-b-2 border-blue-600 w-fit pb-2">Capability Overview</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-950 italic">ShillyBrittle</strong> operates as an elite strike-team for IT resilience. We provide independent, third-party counsel for organizations that require more than just a "checkbox" solution.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                {[
                  { label: "Successful Audits", val: "450+" },
                  { label: "Compliance Rate", val: "100%" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-slate-950">{stat.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE COMPETENCIES MATRIX */}
      <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden rounded-[4rem] mx-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic mb-16 text-center">Core <span className="text-blue-600">Competencies</span></h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Infrastructure Hardening", tags: ["Zero-Trust", "Cloud Migration", "SCADA"] },
              { title: "Compliance Auditing", tags: ["ISO 27001", "FedRAMP", "GDPR"] },
              { title: "Personnel Development", tags: ["Social Engineering", "Red-Team Labs"] },
              { title: "Risk Advisory", tags: ["BIA Analysis", "Business Continuity"] }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all">
                <h4 className="text-xl font-black uppercase italic mb-6 text-blue-500">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="py-32 px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">Secure Your <span className="text-blue-600">Strategic Edge</span></h2>
            <p className="text-slate-500 font-medium mb-12">Available for domestic and international engagements. Contact our headquarters to initialize consultation.</p>
            <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-black uppercase tracking-tighter hover:bg-slate-950 transition-all shadow-2xl">
              Initialize Engagement
            </button>
         </div>
      </section>
    </div>
  );
}