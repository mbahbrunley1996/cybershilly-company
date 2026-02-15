// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Lock, Shield, Terminal, ArrowRight, User, Key, Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // 1. ADD THIS

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const router = useRouter(); // 2. INITIALIZE ROUTER
//   const [isLoginView, setIsLoginView] = useState(true);

//   // 3. THE UPDATED LOGIN LOGIC
//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     // For a client demo: Create the "Session Cookie" that the Middleware looks for
//     document.cookie = "warrior_session=active; path=/; max-age=86400; SameSite=Strict";
    
//     // Redirect the Specialist to their Command Dashboard
//     router.push('/training/dashboard');
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
//       {/* Background Matrix-style Grid */}
//       <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>

//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md relative z-10"
//       >
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
//             <Shield className="text-white" size={32} />
//           </div>
//           <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter">
//             Warrior <span className="text-blue-500">Terminal</span>
//           </h1>
//           <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-2">
//             {isLogin ? "Authorization Required" : "Request Specialist Credentials"}
//           </p>
//         </div>

//         <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
//           {/* 4. ATTACH THE HANDLELOGIN TO THE FORM */}
//           <form onSubmit={handleLogin} className="space-y-5">
//             <div>
//               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 mb-2 block">Personnel ID (Email)</label>
//               <div className="relative">
//                 <User className="absolute left-4 top-4 text-slate-500" size={18} />
//                 <input 
//                   required
//                   type="email" 
//                   placeholder="name@shillybrittle.com" 
//                   className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all font-mono text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 mb-2 block">Access Cipher (Password)</label>
//               <div className="relative">
//                 <Key className="absolute left-4 top-4 text-slate-500" size={18} />
//                 <input 
//                   required
//                   type={showPassword ? "text" : "password"} 
//                   placeholder="••••••••" 
//                   className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 pr-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all font-mono text-sm"
//                 />
//                 <button 
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-4 text-slate-500 hover:text-blue-500"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             {isLogin && (
//               <div className="flex justify-end">
//                 <button type="button" className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
//                   Forgot Cipher?
//                 </button>
//               </div>
//             )}

//             {/* 5. MAKE SURE THIS IS A SUBMIT BUTTON */}
//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl uppercase tracking-tighter flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/20 group"
//             >
//               {isLogin ? "Authenticate" : "Submit Request"} 
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//           </form>
          
//           <div className="mt-8 pt-6 border-t border-white/5 text-center">
//             <button 
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-slate-500 text-xs font-bold hover:text-white transition-colors"
//             >
//               {isLogin ? "No access? Request Specialist Enrollment" : "Already have access? Return to Login"}
//             </button>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-between items-center px-4">
//           <div className="flex items-center gap-2">
//             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest font-mono">Auth Service: Online</span>
//           </div>
//           <Link href="/" className="text-[10px] font-black uppercase text-slate-600 tracking-widest hover:text-blue-500 transition-colors">
//             Return to HQ
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, User, Key, Eye, EyeOff, Mail, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const signupForm = useRef(); 
  const router = useRouter();

  // --- RESTORED HANDLELOGIN FUNCTION ---
  const handleLogin = (e) => {
    e.preventDefault();
    // 1. Set the session cookie
    document.cookie = "warrior_session=active; path=/; max-age=86400; SameSite=Strict";
    
    // 2. Teleport to the Specialist Dashboard
    router.push('/training/dashboard');
  };

  // --- CLEANED HANDLESIGNUP FUNCTION ---
  const handleSignupRequest = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_polrjjn', 
      'template_2avy0u8', 
      signupForm.current, 
      'Wdc-TWzCZa2pRc_5r'
    )
    .then(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsLoginView(true);
      }, 3000);
    }, (error) => {
      setIsSending(false);
      console.error("FAILED...", error.text);
      alert("Signal Lost. Terminal could not transmit request.");
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter">
            Warrior <span className="text-blue-500">Terminal</span>
          </h1>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
          <AnimatePresence mode="wait">
            {isLoginView ? (
              <motion.div key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Authorization Required</p>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 mb-2 block">Personnel ID</label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 text-slate-500" size={18} />
                      <input required type="email" placeholder="name@shillybrittle.com" className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all font-mono text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 mb-2 block">Access Cipher</label>
                    <div className="relative">
                      <Key className="absolute left-4 top-4 text-slate-500" size={18} />
                      <input required type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 pr-12 rounded-xl text-white outline-none focus:border-blue-500 transition-all font-mono text-sm" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-slate-500 hover:text-blue-500">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl uppercase tracking-tighter flex items-center justify-center gap-3 transition-all group">
                    Authenticate <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            ) : isSubmitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <CheckCircle2 className="text-green-500 mx-auto mb-4" size={64} />
                <h3 className="text-xl font-black text-white uppercase italic mb-2">Request Transmitted</h3>
                <p className="text-slate-400 text-xs font-mono">Uplink established. Awaiting review.</p>
              </motion.div>
            ) : (
              <motion.div key="signup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <p className="text-center text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Enlistment Request</p>
                <form ref={signupForm} onSubmit={handleSignupRequest} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input name="first_name" required type="text" placeholder="First Name" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-blue-500 font-mono text-xs" />
                    <input name="last_name" required type="text" placeholder="Last Name" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-blue-500 font-mono text-xs" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-slate-500" size={18} />
                    <input name="user_email" required type="email" placeholder="Official Email" className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 rounded-xl text-white outline-none focus:border-blue-500 font-mono text-sm" />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-white text-slate-950 hover:bg-blue-600 hover:text-white font-black py-4 rounded-xl uppercase tracking-tighter transition-all disabled:opacity-50"
                  >
                    {isSending ? "Transmitting..." : "Initialize Enrollment"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <button 
              onClick={() => { setIsLoginView(!isLoginView); setIsSubmitted(false); }}
              className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
            >
              {isLoginView ? "No Access? Request Credentials" : "Back to Authentication"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}