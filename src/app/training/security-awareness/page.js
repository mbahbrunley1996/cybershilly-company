// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Eye, MousePointerClick, ShieldAlert, 
//   UserCheck, AlertTriangle, Fingerprint,
//   ArrowRight, CheckCircle2, Lock, X,
//   Terminal, ShieldCheck
// } from "lucide-react";

// export default function SecurityAwareness() {
//   const [activeTab, setActiveTab] = useState("phishing");
//   const [isSimulating, setIsSimulating] = useState(false);

//   const trainingFocus = {
//     phishing: {
//       title: "Phishing Simulation",
//       desc: "We deploy controlled, benign phishing campaigns to test employee reactions and provide 'just-in-time' learning for those who click.",
//       stats: "85% click-rate reduction",
//       icon: <MousePointerClick className="text-blue-500" />
//     },
//     vishing: {
//       title: "Voice & SMS (Vishing)",
//       desc: "Training on how to handle urgent phone requests from 'IT Support' or 'Executives' that bypass email filters.",
//       stats: "100% reporting accuracy",
//       icon: <ShieldAlert className="text-blue-500" />
//     },
//     insider: {
//       title: "Insider Threat",
//       desc: "Detecting behavioral shifts and data exfiltration patterns before a disgruntled or negligent actor causes damage.",
//       stats: "Pre-incident detection",
//       icon: <Eye className="text-blue-500" />
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen text-slate-900 font-sans">
      
//       {/* SECTION 1: HERO WITH ACTIVE IMAGE */}
//       <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center bg-slate-950">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
//             alt="Cybersecurity Operations" 
//             className="w-full h-full object-cover opacity-30 scale-110" 
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center justify-center gap-2 text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8"
//           >
//             <Fingerprint size={18} /> Human Firewall Protocol
//           </motion.div>
          
//           <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter text-white">
//             Hack the <br/><span className="text-blue-600 drop-shadow-[0_0_35px_rgba(37,99,235,0.5)]">Hacker</span>
//           </h1>
          
//           <p className="mt-12 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
//             Your employees are your primary attack surface. We teach them to recognize the <strong>psychology of deception</strong> before the first click.
//           </p>

//           <div className="mt-12 flex justify-center gap-6">
//              <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-500/20">
//                 Start Training
//              </button>
//              <button className="hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">
//                 <Lock size={18} className="text-blue-500" /> View Security Suite
//              </button>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: INTERACTIVE SIMULATION & TABS */}
//       <section className="py-32 px-6 bg-slate-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {Object.keys(trainingFocus).map((key) => (
//               <button
//                 key={key}
//                 onClick={() => {
//                   setActiveTab(key);
//                   setIsSimulating(false);
//                 }}
//                 className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
//                   activeTab === key 
//                   ? "bg-blue-600 text-white shadow-xl shadow-blue-200" 
//                   : "bg-white text-slate-400 border border-slate-200 hover:border-blue-300"
//                 }`}
//               >
//                 {key}
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 grid lg:grid-cols-2 gap-16 items-center"
//             >
//               <div>
//                 <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl">
//                   {trainingFocus[activeTab].icon}
//                 </div>
//                 <h3 className="text-4xl md:text-5xl font-black uppercase italic text-slate-950 mb-8 leading-tight">
//                   {trainingFocus[activeTab].title}
//                 </h3>
//                 <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
//                   {trainingFocus[activeTab].desc}
//                 </p>
//                 <div className="flex items-center gap-4 p-5 bg-slate-950 rounded-3xl">
//                   <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
//                     <UserCheck className="text-white" />
//                   </div>
//                   <div>
//                     <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Industry Outcome</span>
//                     <span className="text-white font-black uppercase">{trainingFocus[activeTab].stats}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* ACTIVE SIMULATION TERMINAL */}
//               <div className="bg-slate-950 rounded-[3rem] p-10 text-white shadow-3xl relative overflow-hidden group">
//                 <div className="flex gap-2 mb-8">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>

//                 <div className="font-mono text-sm space-y-4">
//                   <p className="text-blue-500">shillybrittle@security:~$ <span className="text-white">init --simulation</span></p>
                  
//                   <AnimatePresence>
//                     {isSimulating ? (
//                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
//                         <p className="text-green-400">[OK] Connection Established</p>
//                         <p className="text-green-400">[OK] Hijacking SMTP Protocol...</p>
//                         <motion.p 
//                           animate={{ opacity: [0.4, 1, 0.4] }} 
//                           transition={{ repeat: Infinity, duration: 1 }}
//                           className="text-yellow-500"
//                         >
//                           [WAIT] Deploying {activeTab} Payload...
//                         </motion.p>
//                         <motion.div 
//                           initial={{ scale: 0.8, opacity: 0 }} 
//                           animate={{ scale: 1, opacity: 1 }}
//                           transition={{ delay: 1 }}
//                           className="mt-6 p-4 bg-red-600/20 border border-red-600/50 rounded-xl"
//                         >
//                           <p className="text-red-500 font-black text-xs uppercase tracking-tighter">Target Vulnerability Found:</p>
//                           <p className="text-white text-xs mt-1">Weak Credential Policy in HR_Node</p>
//                           <button 
//                             onClick={() => window.location.href = '#'}
//                             className="mt-4 w-full bg-white text-slate-950 py-3 rounded-lg font-black uppercase text-[10px] hover:bg-blue-600 hover:text-white transition-all"
//                           >
//                             Get Full Audit Report
//                           </button>
//                         </motion.div>
//                       </motion.div>
//                     ) : (
//                       <div className="space-y-6 pt-4">
//                         <div className="h-2 bg-white/10 rounded w-full"></div>
//                         <div className="h-2 bg-white/10 rounded w-5/6"></div>
//                         <div className="h-2 bg-white/10 rounded w-4/6"></div>
//                         <button 
//                           onClick={() => setIsSimulating(true)}
//                           className="mt-8 flex items-center justify-center gap-3 w-full bg-blue-600 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/30"
//                         >
//                           <Terminal size={18} /> Run Attack Simulation
//                         </button>
//                       </div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* SECTION 3: REFINED STATS SECTION */}
//       <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
//         <div>
//           <h2 className="text-5xl font-black uppercase italic mb-10 leading-none">
//             Why Awareness <br/><span className="text-blue-600">Usually Fails.</span>
//           </h2>
//           <div className="grid gap-8">
//             {[
//               { icon: <X className="text-red-500"/>, title: "Generic Content", text: "Compliance videos are boring. We use firm-specific scenarios." },
//               { icon: <AlertTriangle className="text-yellow-500"/>, title: "Lack of Urgency", text: "Employees don't think they're targets until we show them." },
//               { icon: <ShieldCheck className="text-green-500"/>, title: "No Feedback Loop", text: "We gamify the reporting process to build long-term habits." }
//             ].map((item, i) => (
//               <div key={i} className="flex gap-6 p-6 hover:bg-slate-50 rounded-[2rem] transition-colors border border-transparent hover:border-slate-100">
//                 <div className="mt-1">{item.icon}</div>
//                 <div>
//                   <h4 className="font-black uppercase tracking-tight text-xl mb-2">{item.title}</h4>
//                   <p className="text-slate-500 leading-relaxed font-medium">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="bg-slate-950 p-12 rounded-[4rem] text-white relative overflow-hidden">
//            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
//            <h4 className="text-3xl font-black uppercase italic mb-6">The ShillyBrittle <br/> Advantage</h4>
//            <div className="space-y-6 mb-10">
//               <div className="text-5xl font-black text-blue-500">91%</div>
//               <p className="text-slate-400 font-medium">Of breaches start with a phishing email. We stop them at the source.</p>
//            </div>
//            <button className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
//               Download Risk Report
//            </button>
//         </div>
//       </section>

//       {/* SECTION 4: CALL TO ACTION */}
//       <section className="py-32 bg-blue-600 text-white text-center">
//          <div className="max-w-4xl mx-auto px-6">
//             <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-12 tracking-tighter">
//               Hardened <br/> <span className="text-slate-950">Architecture.</span>
//             </h2>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                <button className="bg-slate-950 text-white px-14 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-2xl">
//                   Book A Briefing
//                </button>
//             </div>
//          </div>
//       </section>

//     </div>
//   );
// }


"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, MousePointerClick, ShieldAlert, 
  UserCheck, AlertTriangle, Fingerprint,
  CheckCircle2, Lock, X,
  Terminal, ShieldCheck, Send, Loader2
} from "lucide-react";

export default function SecurityAwareness() {
  const form = useRef();
  const [activeTab, setActiveTab] = useState("phishing");
  const [isSimulating, setIsSimulating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const trainingFocus = {
    phishing: {
      title: "Phishing Simulation",
      desc: "We deploy controlled, benign phishing campaigns to test employee reactions.",
      stats: "85% click-rate reduction",
      icon: <MousePointerClick className="text-blue-500" />
    },
    vishing: {
      title: "Voice & SMS (Vishing)",
      desc: "Training on how to handle urgent phone requests from 'IT Support' or 'Executives'.",
      stats: "100% reporting accuracy",
      icon: <ShieldAlert className="text-blue-500" />
    },
    insider: {
      title: "Insider Threat",
      desc: "Detecting behavioral shifts and data exfiltration patterns before damage occurs.",
      stats: "Pre-incident detection",
      icon: <Eye className="text-blue-500" />
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use your keys from the EmailJS dashboard
    emailjs.sendForm(
      'service_polrjjn', // Your Service ID from screenshot
      'template_2avy0u8', // Replace with your Template ID
      e.target, // Using the form target directly
      'Wdc-TWzCZa2pRc_5r'   // Replace with your Public Key
    )
    .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
    }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        alert("Transmission failed. Check console for error.");
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSimulating(false);
    }, 300);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 scale-110" 
            alt="Security"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8">
            <Fingerprint size={18} /> Human Firewall Protocol
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter text-white">
            Hack the <br/><span className="text-blue-600">Hacker</span>
          </h1>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
             <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-xl">
                Start Training
             </button>
             <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-3 bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <Lock size={18} className="text-blue-500" /> Book Briefing
             </button>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE SIMULATION --- */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(trainingFocus).map((key) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key); setIsSimulating(false); }}
                className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === key ? "bg-blue-600 text-white shadow-xl shadow-blue-200" : "bg-white text-slate-400 border border-slate-200"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase italic text-slate-950 mb-8">{trainingFocus[activeTab].title}</h3>
              <p className="text-slate-600 text-lg mb-10">{trainingFocus[activeTab].desc}</p>
              <div className="flex items-center gap-4 p-5 bg-slate-950 rounded-3xl">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center"><UserCheck className="text-white" /></div>
                <div className="text-white font-black uppercase">{trainingFocus[activeTab].stats}</div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-[3rem] p-10 text-white shadow-3xl relative font-mono text-sm border border-white/5">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <AnimatePresence mode="wait">
                {isSimulating ? (
                  <motion.div key="sim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <p className="text-green-400 font-bold tracking-tighter">[OK] INJECTING {activeTab.toUpperCase()} PAYLOAD...</p>
                    <motion.p animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="text-red-500 font-black mt-4 uppercase">Target Compromised!</motion.p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="mt-4 w-full bg-white text-slate-950 py-3 rounded-lg font-black uppercase text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-lg"
                    >
                      Receive Full Audit Report
                    </button>
                  </motion.div>
                ) : (
                  <div key="idle" className="space-y-6">
                    <p className="text-blue-400 tracking-widest animate-pulse font-bold">AWAITING_COMMAND...</p>
                    <button 
                      onClick={() => setIsSimulating(true)}
                      className="flex items-center justify-center gap-3 w-full bg-blue-600 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] transition-all shadow-lg shadow-blue-600/20"
                    >
                      <Terminal size={18} /> Run Attack Simulation
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY AWARENESS FAILS (MATCHED TO SCREENSHOT) --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-5xl font-black uppercase mb-12 italic tracking-tighter leading-none">
              WHY AWARENESS <span className="text-blue-600 underline decoration-[6px] underline-offset-[12px]">FAILS</span>
            </h2>
            <div className="space-y-12">
              {[
                { num: "01", title: "GENERIC CONTENT", text: "Standard 'compliance' videos are ignored. We use firm-specific scenarios." },
                { num: "02", title: "LACK OF URGENCY", text: "Employees don't think they are targets. We show them their own digital footprint." },
                { num: "03", title: "NO FEEDBACK LOOP", text: "If they report a threat, they never hear back. We gamify the reporting process." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-blue-600 font-black text-3xl italic min-w-[50px]">{item.num}</div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight text-2xl mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-lg leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-[#050810] p-12 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
             <AlertTriangle className="text-yellow-500 mb-8" size={44} />
             <h4 className="text-3xl font-black uppercase italic mb-6 leading-tight tracking-tighter">THE ROI OF <br/> SKEPTICISM</h4>
             <p className="text-slate-400 text-lg leading-relaxed mb-10">
               A single compromised credential can cost an organization an average of $4.5M. Our training costs a fraction of a breach response.
             </p>
             <button onClick={() => setIsModalOpen(true)} className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                DOWNLOAD RISK REPORT
             </button>
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[3.5rem] p-12 relative shadow-2xl"
            >
              <button onClick={closeModal} className="absolute top-8 right-8 text-slate-400 hover:text-red-600"><X /></button>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form">
                    <div className="text-center mb-10">
                      <ShieldCheck className="mx-auto text-blue-600 mb-6" size={50} />
                      <h3 className="text-3xl font-black uppercase italic">Secure Your Briefing</h3>
                    </div>

                   <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
  {/* HIDDEN FIELDS: These fill out your EmailJS template automatically */}
  <input type="hidden" name="subject" value="Security Awareness Inquiry" />
  <input type="hidden" name="message" value="Request for Risk Report from Awareness Page." />
  
  {/* NAME INPUT: Matches {{name}} in EmailJS */}
  <input 
    required 
    name="name" 
    type="text" 
    placeholder="Full Name" 
    className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-600 outline-none transition-all font-bold text-slate-900" 
  />

  {/* EMAIL INPUT: Matches {{email}} in EmailJS */}
  <input 
    required 
    name="email" 
    type="email" 
    placeholder="Corporate Email" 
    className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl focus:border-blue-600 outline-none transition-all font-bold text-slate-900" 
  />
  
  {/* SUBMIT BUTTON */}
  <button 
    disabled={isSubmitting}
    type="submit"
    className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <Loader2 className="animate-spin" />
    ) : (
      <>Send Request <Send size={18} /></>
    )}
  </button>
</form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                    <CheckCircle2 className="text-green-500 mx-auto mb-6" size={70} />
                    <h3 className="text-4xl font-black uppercase italic text-slate-950 mb-4">Transmission Complete</h3>
                    <p className="text-slate-500 mb-10">We've received your request. Check your inbox shortly.</p>
                    <button onClick={closeModal} className="w-full bg-slate-950 text-white font-black py-5 rounded-2xl uppercase tracking-widest transition-all">
                      Dismiss
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