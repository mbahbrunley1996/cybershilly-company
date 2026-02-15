// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { LogOut, ShieldCheck, Activity, Terminal, Lock, Play } from "lucide-react";
// import VideoVault from "./videovault";
"use client";
import React from "react";
// import ClientNavbar from "@/components/Navbar/ClientNavbar"; // Use our safe navbar
import VideoVault from "./videovault";
import { Terminal, Shield, LogOut, Layout } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TrainingDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "warrior_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.refresh();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* 1. DASHBOARD HEADER */}
      <header className="border-b border-white/5 bg-slate-900/20 backdrop-blur-md pt-24 pb-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-2">
              <Terminal size={16} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono">Session: Active</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Specialist <span className="text-slate-500">Dashboard</span>
            </h1>
          </div>

          {/* 2. THE QUICK ACTION BUTTONS */}
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('vault-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg shadow-blue-600/20"
            >
              <Layout size={14} /> Access Vault
            </button>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-slate-900 hover:bg-red-600/20 border border-white/10 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all"
            >
              <LogOut size={14} /> Terminate
            </button>
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        {/* Statistics/Overview section could go here */}
        
        {/* THE VIDEO VAULT SECTION */}
        <div id="vault-section">
          <VideoVault />
        </div>
      </main>
    </div>
  );
}