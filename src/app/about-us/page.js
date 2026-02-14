"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDownIcon, Eye, ShieldCheck, Target, Rocket, 
  Quote, ChevronLeft, ChevronRight, Shield 
} from "lucide-react";
// import NavbarComponents from "@/components/Navbar/NavbarComponents";
// import FooterComponents from "@/components/Footer/FooterComponents"

const services = [
  {
    title: "Elite Talent Augmentation & Managed Services",
    content: `In a high-stakes digital economy, scaling your IT infrastructure requires more than just "extra hands"—it requires specialized expertise. ShillyBrittle Innovations bridges the talent gap by providing rapid access to a vetted network of cybersecurity professionals. 
    
    Whether you are navigating a sudden surge in demand or facing a critical project deadline, our 3-to-1 hiring ratio ensures you secure the right expertise at the right time, allowing your core team to focus on business growth while we handle the technical heavy lifting.`,
  },
  {
    title: "Managed Security & Business Continuity",
    content: `Cyber threats are evolving; your defense should too. We provide a multi-layered security ecosystem designed to neutralize risks before they reach your network. 
    
    From real-time threat monitoring to robust disaster recovery, our Business Continuity solutions ensure your data is redundant, secure, and instantly accessible. We don't just protect data; we protect your reputation and operational uptime.`,
  },
  {
    title: "Cloud Migration & FedRAMP Compliance",
    content: `Transitioning to the cloud is a strategic necessity, not just a technical shift. Our experts architect custom IaaS, PaaS, and SaaS environments tailored to your specific regulatory needs. 
    
    We specialize in FedRAMP implementations and secure cloud governance, ensuring that your migration is seamless, scalable, and fully compliant with federal and industry standards.`,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    role: "CTO, Tech Solutions Inc.",
    content: "ShillyBrittle’s expertise is unparalleled. Their team seamlessly integrated with ours, delivering fortified defenses and optimized IT infrastructure. A true partner in security.",
    initials: "SL",
    image: "/testimonials/first.png " // Place your images in public/testimonials/
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Director of IT, Maryland Health",
    content: "Scaling our security operations was a massive hurdle until we found ShillyBrittle. Their managed services gave us the breathing room to focus on patient care while staying compliant.",
    initials: "MC",
    image: "/testimonials/second.png"
  },
  {
    id: 3,
    name: "David V.",
    role: "Founder, CyberStream",
    content: "The level of precision in their FedRAMP implementation saved us months of rework. ShillyBrittle doesn't just consult; they execute with clinical accuracy.",
    initials: "DV",
    image: "/testimonials/third.png "
  }
];
export default function About() {
  // Accordion State
  const [openIndex, setOpenIndex] = useState(null);
  
  // Testimonial Slider State
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
    <div className="min-h-screen bg-white font-sans">
      {/* <NavbarComponents /> */}

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative flex min-h-[60vh] w-full items-center justify-center bg-slate-900 overflow-hidden">
  {/* SWAPPED Image for img */}
  <img
    src="/hero/image .png "
    alt="Cybersecurity Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
    loading="eager" 
  />
  
  <div className="relative z-10 px-6 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight"
    >
      Securing the Future of <span className="text-blue-500">Innovation</span>
    </motion.h1>
    {/* ... rest of your code */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            ShillyBrittle Innovations is Maryland’s premier cybersecurity partner, 
            defending enterprise infrastructure with intelligence-driven solutions.
          </p>
          <div className="mt-10">
            <Link href="/" className="text-sm font-semibold text-blue-400 hover:text-white transition-colors">
              ← Return to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
          Cybersecurity Redefined
        </h2>
        <p className="text-gray-600 mb-4 max-w-3xl mx-auto text-lg leading-relaxed">
          We are a forward-thinking cybersecurity firm dedicated to fortifying 
          businesses in an increasingly hostile digital landscape.
        </p>
      </section>

      {/* Who We Are & Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Based in Maryland, USA, ShillyBrittle is a leader in 
                Specialized Staffing and Security Consulting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Security Architects", "Cryptanalysts", "SOC Engineers", "Compliance Officers", "Cloud Security Devs", "Incident Responders"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <ShieldCheck className="text-blue-600 w-5 h-5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative bg-slate-200">
              <iframe
                title="ShillyBrittle Maryland Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1547.4587653245!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8035f8e0d6943%3A0x6b772c726372c38d!2sMaryland%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-black">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            {services.map((service, idx) => (
              <div key={idx} className={`rounded-xl overflow-hidden hover:bg-gray-300 transition-all duration-300 border ${openIndex === idx ? "bg-blue-600 border-blue-600 shadow-lg text-white" : "bg-white border-gray-200"}`}>
                <button onClick={() => toggleAccordion(idx)} className="flex items-center justify-between w-full px-6 py-5 text-left">
                  <span className="font-bold text-lg">{service.title}</span>
                  <ChevronDownIcon className={`w-6 h-6 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-500 ${openIndex === idx ? "max-h-96 pb-6" : "max-h-0"}`}>
                  <p className="leading-relaxed opacity-90">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">360° Defensive Coverage</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We empower our clients with the "Zeal of Certainty." In a world where tech shifts 
                overnight, we provide the steady hand of expertise to ensure your 
                investments are protected, compliant, and optimized for peak performance.
              </p>
              <button className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-lg transition-all w-max shadow-lg">
                REQUEST A SECURITY AUDIT
              </button>
            </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest">The ShillyBrittle Standard</h2>
            <p className="text-blue-400 mt-2">Excellence in every line of code.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { icon: <Eye />, title: "OUR VISION", text: "To be the global benchmark for digital trust and safe innovation." },
              { icon: <Target />, title: "OUR MISSION", text: "To provide uncompromising security intelligence and elite technical staffing." },
              { icon: <Rocket />, title: "CORE VALUES", text: "Integrity, Relentless Innovation, and Client-Centric Precision." }
            ].map((v, i) => (
              <div key={i} className="group p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:rotate-6 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
     <section className="relative bg-slate-950 py-32 overflow-hidden">
  {/* Circuit Background Decorations */}
  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
  <div className="absolute top-1/2 left-[-10%] w-[120%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rotate-12 blur-sm"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Section Header */}
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold text-white uppercase italic tracking-tighter">
        What Our Partners Say
      </h2>
      <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
    </div>

    <div className="relative flex items-center justify-center min-h-[400px]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full max-w-4xl"
        >
          <div className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10">
            
            {/* PHOTO HOLDER LOGIC */}
            <div className="relative flex-shrink-0 group">
              {/* Blue Glow Behind Photo */}
              <div className="absolute -inset-2 bg-blue-600/20 rounded-full blur-xl group-hover:bg-blue-600/40 transition-all duration-500"></div>
              
              {/* Inside the Testimonial Slider Photo Holder */}
<div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-slate-900 shadow-2xl">
  {testimonials[index].image ? (
    <img
      src={testimonials[index].image}
      alt={testimonials[index].name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-white bg-gradient-to-br from-blue-600 to-blue-900">
      {testimonials[index].initials}
    </div>
  )}
</div>

              {/* Verification Badge Icon */}
              <div className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full border-4 border-slate-900 shadow-lg">
                <ShieldCheck size={18} className="text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 text-center md:text-left">
              <Quote className="text-blue-500/30 w-12 h-12 mb-4 mx-auto md:mx-0" />
              <p className="text-gray-200 text-xl leading-relaxed italic mb-8">
                "{testimonials[index].content}"
              </p>
              <div>
                <h4 className="text-white text-2xl font-bold tracking-tight">
                  {testimonials[index].name}
                </h4>
                <p className="text-blue-400 font-medium uppercase tracking-widest text-sm mt-1">
                  {testimonials[index].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute -bottom-16 flex gap-6">
        <button 
          onClick={prevStep} 
          className="p-4 rounded-full border border-blue-500/30 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextStep} 
          className="p-4 rounded-full border border-blue-500/30 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>

    {/* CTA Banner Integration */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-40 relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="relative z-10 mb-8 md:mb-0">
        <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase leading-tight">
          Ready to Secure <br /> Your Future?
        </h3>
        <p className="text-blue-200 mt-2 opacity-80 uppercase tracking-widest text-xs font-bold">Initiate Mission Protocol</p>
      </div>
      <Link 
        href="/contact"
        className="relative z-10 bg-white text-blue-900 font-black py-5 px-14 rounded-full hover:scale-105 hover:bg-slate-100 transition-all shadow-xl uppercase tracking-tighter text-lg"
      >
        Get In Touch
      </Link>
      
      {/* Background Accent for CTA */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
    </motion.div>
  </div>
</section>
    </div>
    {/* <FooterComponents /> */}
    </>
  );
}