"use client";
import { useState, useRef } from "react"; // Added useRef
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Phone, Mail, MapPin, 
  ShieldCheck, Globe, MessageSquare, Activity 
} from "lucide-react";
import emailjs from '@emailjs/browser'; // Ensure this is installed

export default function Contact() {
  const [formState, setFormState] = useState("idle"); // idle | sending | success
  const contactForm = useRef(); // Ref for the contact form

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");

    // Reuse your established EmailJS credentials
    const SERVICE_ID = "service_polrjjn"; 
    const TEMPLATE_ID = "template_2avy0u8"; // You can use a specific contact template if preferred
    const PUBLIC_KEY = "Wdc-TWzCZa2pRc_5r";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.current, PUBLIC_KEY)
      .then(() => {
        setFormState("success");
      }, (error) => {
        console.error("Uplink Failure:", error.text);
        setFormState("idle");
        alert("Transmission failed. Please use the direct email link.");
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact/contacthero.png" 
            alt="Global Network" 
            className="w-full h-full object-cover opacity-30 grayscale transition-transform duration-[10000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_2px,3px_100%] pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-20"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <Activity size={12} className="animate-pulse" /> Secure Connection Established
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Establish <span className="text-blue-500">Contact</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Maryland's elite cybersecurity unit is on standby. 
            Initiate a secure uplink to discuss your defensive requirements.
          </p>
        </motion.div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Information Command */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-black italic mb-8 border-l-4 border-blue-600 pl-4 uppercase tracking-widest">
                Global Headquarters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-blue-500 transition-colors">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm">Maryland Office</h4>
                    <p className="text-gray-400">123 Security Plaza, Tech Corridor<br />Maryland, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-blue-500 transition-colors">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm">Secure Email</h4>
                    <p className="text-gray-400 font-mono tracking-tighter hover:text-blue-400 transition-colors cursor-pointer">uplink@shillybrittle.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 space-y-6 relative overflow-hidden">
              <h3 className="font-black text-blue-400 uppercase tracking-tight flex items-center gap-2 italic">
                <ShieldCheck size={20} /> Response Protocol
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <p className="text-2xl font-black text-white italic tracking-tighter">{"<"}2h</p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Initial Review</p>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <p className="text-2xl font-black text-white italic tracking-tighter">24/7</p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Threat Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Secure Uplink Form */}
          <div className="lg:col-span-7">
            <motion.div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <AnimatePresence>
                {formState === "success" && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20 bg-slate-900 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                      <ShieldCheck size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-black italic text-white mb-2 tracking-tighter uppercase">Message Encrypted</h3>
                    <p className="text-gray-400">Our analysts will review your uplink shortly.</p>
                    <button onClick={() => setFormState("idle")} className="mt-8 text-blue-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest underline decoration-2 underline-offset-8">New Transmission</button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Added ref and onSubmit to the form */}
              <form ref={contactForm} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input name="from_name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="SHILLY BRITTLE" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Business Email</label>
                    <input name="reply_to" required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="AGENT@GMAIL.COM" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject / Interest Area</label>
                  <select name="subject" className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none font-medium">
                    <option>Cybersecurity Audit</option>
                    <option>Staff Augmentation</option>
                    <option>Cloud Migration (FedRAMP)</option>
                    <option>Managed IT Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message Detail</label>
                  <textarea name="message" rows="5" required className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-blue-500 transition-all resize-none font-medium" placeholder="DESCRIBE CHALLENGE..."></textarea>
                </div>

                <button disabled={formState === "sending"} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 uppercase tracking-widest">
                  {formState === "sending" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      Transmit Uplink
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TACTICAL MAP OVERLAY */}
      <section className="h-[500px] w-full bg-slate-950 border-t border-white/10 relative overflow-hidden">
        {/* HUD Scanline Overlay for the Map */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[size:100%_4px]"></div>
        
        {/* Vignette to blend edges */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>

   <iframe
  title="Maryland HQ Location"
  /* This specific URL includes the 'q=' parameter which forces the red pin/indicator to appear */
  src="https://www.google.com/maps?q=Maryland,USA&output=embed"
  width="100%"
  height="100%"
  style={{ 
    border: 0, 
    /* Tactical 'Warrior' Filter: Inverts the colors to create a dark-mode command center look */
    filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2) grayscale(0.5)' 
  }}
  allowFullScreen=""
  loading="lazy"
></iframe>

        {/* Floating Location Marker Detail */}
        <div className="absolute bottom-10 right-10 z-20 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white font-mono">
              HQ Coordinates: 39.0458° N, 76.6413° W
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}