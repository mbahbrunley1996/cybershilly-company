"use client";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, ExternalLink } from "lucide-react";

export default function SuperStarFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-16 relative overflow-hidden border-t border-blue-900/30">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Authority */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                Shilly<span className="text-blue-500 font-normal">Brittle</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Maryland’s vanguard in cybersecurity and elite technical staffing. 
              We don't just secure networks; we architect digital resilience for 
              the modern enterprise.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-blue-600 pl-3">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Cybersecurity Audit</Link></li>
              <li><Link href="#" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Cloud Migration (FedRAMP)</Link></li>
              <li><Link href="#" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Managed IT Services</Link></li>
              <li><Link href="#" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">Staff Augmentation</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Maryland Focus) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-blue-600 pl-3">
              Headquarters
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>Maryland, USA <br /><span className="text-gray-600 text-xs">Innovation District</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>+1 (XXX) SHILLY-B</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>security@shillybrittle.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Injection */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-blue-600 pl-3">
              Stay Shielded
            </h4>
            <p className="text-xs mb-4 text-gray-500 italic">
              Join 500+ CTOs receiving our weekly threat intelligence briefing.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter business email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 hover:bg-blue-500 rounded text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide">
          <p>© {currentYear} ShillyBrittle Innovations LLC. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors uppercase">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors uppercase">Terms of Defense</Link>
            <Link href="#" className="flex items-center space-x-1 hover:text-white transition-colors uppercase font-bold text-blue-500">
              <span>Client Portal</span>
              <ExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}