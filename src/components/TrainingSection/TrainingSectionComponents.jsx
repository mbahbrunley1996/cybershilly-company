"use client";
import React from "react";
import { GraduationCap, Briefcase, Code2, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const trainingModules = [
  {
    icon: <Code2 size={32} />,
    title: "Tool Mastery",
    desc: "Hands-on training with industry-standard tools like Splunk, Wireshark, and Kali Linux."
  },
  {
    icon: <Cpu size={32} />,
    title: "Real-World Sims",
    desc: "Go beyond theory. Work on live breach simulations and incidence response scenarios."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Job Readiness",
    desc: "Resume building, technical interview prep, and placement with our partner firms."
  }
];

export default function TrainingSection() {
  return (
    <section className="py-24 bg-white text-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black uppercase italic leading-none mb-6">
              From Student to <span className="text-blue-600">Cyber Warrior</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              We don't just teach cybersecurity; we build the next generation of the workforce. Join our intensive training program designed to get you hired.
            </p>
          </div>
          <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all">
            Apply for Training <GraduationCap size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingModules.map((module, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border-2 border-slate-100 hover:border-blue-600/20 transition-all group">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h4 className="text-2xl font-black uppercase mb-4">{module.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{module.desc}</p>
              <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest cursor-pointer">
                View Curriculum <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}