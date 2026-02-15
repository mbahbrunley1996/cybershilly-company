"use client";
import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  GraduationCap, Users, ShieldCheck, 
  BrainCircuit, Trophy, Target, 
  PlayCircle, BookOpen, ArrowRight, Star,
  FileText, X, Zap // Added FileText and X
} from "lucide-react";

const courses = [
  {
    title: "Executive Cyber Awareness",
    level: "Management",
    desc: "Critical decision-making frameworks for leadership during high-pressure security incidents.",
    icon: <Users className="text-blue-600" />
  },
  {
    title: "Red Team Simulation",
    level: "Technical",
    desc: "Hands-on offensive security training focusing on real-world penetration techniques.",
    icon: <Target className="text-blue-600" />
  },
  {
    title: "Social Engineering Defense",
    level: "All Staff",
    desc: "Training employees to detect and neutralize phishing and psychological manipulation.",
    icon: <BrainCircuit className="text-blue-600" />
  }
];

export default function CyberTraining() {
  // State for the Video Modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const router = useRouter();

  // Tactical function to handle the Company CV/Curriculum
  const handleDownloadCV = () => {
    // const cvUrl = "/documents/shillybrittle-company-profile.pdf";
    // window.open(cvUrl, "_blank");
    router.push("/companyprofile/cv");
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      
      {/* 1. VIBRANT HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" 
            alt="Cybersecurity Training Workshop" 
            className="w-full h-full object-cover opacity-40 brightness-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 text-blue-600 mb-6 bg-blue-100/50 w-fit px-4 py-1 rounded-full border border-blue-200">
              <Star size={16} className="fill-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Industry Leading Pedagogy</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-slate-950">
              Forge Your <br />
              <span className="text-blue-600 text-glow">Human Firewall</span>
            </h1>
            
            <p className="mt-10 max-w-xl text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              Technology is only half the battle. We empower your workforce with the skills to identify, disrupt, and report cyber threats in real-time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={handleDownloadCV}
                className="group flex items-center gap-3 bg-blue-600 text-white font-black px-10 py-5 rounded-full uppercase tracking-tighter hover:bg-slate-950 transition-all shadow-xl shadow-blue-200"
              >
                <FileText size={20} />
                View Curriculum (CV)
              </button>

              <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3 bg-white text-slate-950 font-black px-10 py-5 rounded-full uppercase tracking-tighter border-2 border-slate-100 hover:border-blue-600 transition-all group"
              >
                <PlayCircle className="text-blue-600 group-hover:scale-110 transition-transform" /> 
                Watch Demo
              </button>
            </div>
          </motion.div>

          <div className="hidden lg:grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full"></div>
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 transform -rotate-3 hover:rotate-0 transition-transform">
               <Trophy className="text-yellow-500 mb-4" size={40} />
               <h4 className="text-3xl font-black">98%</h4>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Breach Reduction Rate</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 translate-y-12 rotate-3 hover:rotate-0 transition-transform">
               <GraduationCap className="text-blue-600 mb-4" size={40} />
               <h4 className="text-3xl font-black">15k+</h4>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Certified Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE LEARNING PATHS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase italic text-slate-950">Specialized <span className="text-blue-600">Learning Tracks</span></h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {courses.map((course, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group p-1 bg-gradient-to-b from-slate-100 to-white rounded-[3rem] shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="bg-white p-10 rounded-[2.8rem] h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{course.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {course.desc}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-xs tracking-tighter cursor-pointer group-hover:gap-4 transition-all">
                  Explore Course <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRANSFORMATION STORY */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
              Top-Class Training <br /><span className="text-blue-600">Personalized for You</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We don't believe in "one-size-fits-all" security. Our trainers embed themselves in your company culture.
            </p>
            <ul className="space-y-4">
              {["Customized Lab Environments", "Live Fire Drill Scenarios", "Post-Training Certification"].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                  <span className="uppercase text-xs font-black tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-[4rem] overflow-hidden group shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
               alt="Collaboration" 
               className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                <p className="italic font-bold text-white mb-4">"ShillyBrittle saved us during a major phishing campaign."</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-widest">Chief Information Officer</p>
                      <p className="text-[10px] text-blue-300">Global Logistics Corp</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3.5 NEW: PRACTITIONER DEPLOYMENT CTA */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 min-h-[500px] flex items-center shadow-3xl">
      {/* Background Image of Trainer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573163281530-5be9c2807973?auto=format&fit=crop&q=80" 
          alt="Cyber Trainer" 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-10 md:px-20 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={14} fill="currentColor" /> Advanced Recruitment
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-[0.85] mb-8">
            Master the <br /> 
            <span className="text-blue-600">Specialist</span> <br /> 
            Skillset
          </h2>

          <p className="text-slate-300 text-lg mb-10 font-medium leading-relaxed">
            Ready to transition from basic practice to elite specialization? Our Academy portal is now accepting practitioner applications for the 2026 intake.
          </p>

          <button 
            onClick={() => router.push('/training-section')} // Directs them to the Home Page where the Training Section sits
            className="group bg-blue-600 hover:bg-white text-white hover:text-slate-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center gap-4 shadow-2xl shadow-blue-500/20"
          >
            Launch Academy Portal <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Tactical Element */}
      <div className="hidden xl:block absolute right-20 bottom-20 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-64">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Portal Status: Online</span>
        </div>
        <p className="text-xs text-slate-300 font-bold italic">"We are looking for practitioners who refuse to settle for the status quo."</p>
      </div>
    </div>
  </div>
</section>

      {/* 4. FINAL MOTIVATION */}
      <section className="py-32 px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <BookOpen className="mx-auto mb-8 text-blue-600" size={60} />
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-10">Ready to <span className="text-blue-600">Upgrade</span> Your Team?</h2>
            <button className="bg-slate-950 text-white font-black px-16 py-6 rounded-full uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl">
               Inquire About Corporate Rates
            </button>
         </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-red-600 p-2 rounded-full transition-colors text-white"
              >
                <X size={24} />
              </button>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="ShillyBrittle Demo"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
       </AnimatePresence>
    </div>
  );
}