// "use client";
// import { Search, ChevronDown, Menu, X} from "lucide-react";
// import { useState } from "react";
// import React from "react";
// import Link from "next/link";

// const NavbarComponents = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
//   };

//   return (
//     <div className="bg-white text-black shadow-md relative">
//       <div className="flex items-center justify-between px-20 py-4">

//         {/* Logo */}
//         <h1 className="text-2xl md:text-3xl font-bold">
//           My Cybersecurity
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6 relative">

//           <li><Link href="/">HOME</Link></li>
//           <li><Link href="/about-us">ABOUT US</Link></li>
//           <li><Link href="/contact">IT STAFFING</Link></li>

//           {/* Consulting Dropdown */}
//           <li className="relative">
//             <button
//               onClick={() => toggleDropdown("consulting")}
//               className="flex items-center gap-1 hover:text-green-600"
//             >
//               IT CONSULTING <ChevronDown size={16} />
//             </button>

//             {activeDropdown === "consulting" && (
//               <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-56 p-3 space-y-2 border-t-2 border-green-200">
//                 <a href="#" className="block hover:text-green-600 green-600 border-b border-gray-200 py-3">IT Consulting Services</a>
//                 <a href="#" className="block hover:text-green-600 green-600 border-b border-gray-200 py-3">IT Auditing</a>
//                 <a href="#" className="block hover:text-green-600  py-3">Risk Advisory</a>
//               </div>
//             )}
//           </li>

//           {/* Training Dropdown */}
//           <li className="relative">
//             <button
//               onClick={() => toggleDropdown("training")}
//               className="flex items-center gap-1 hover:text-green-600"
//             >
//               CYBERSECURITY TRAINING <ChevronDown size={16} />
//             </button>

//             {activeDropdown === "training" && (
//               <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-56 p-3 space-y-2 border-t-2 border-green-200">
//                 <a href="#" className="block hover:text-green-600 green-600 border-b border-gray-200 py-3">Cybersecurity Training</a>
//                 <a href="#" className="block hover:text-green-600 green-600 border-b border-gray-200 py-3">Security Awareness</a>
//                 <a href="#" className="block hover:text-green-600 py-3">Incident Response</a>
//               </div>
//             )}
//           </li>

//           <li><a href="/contact-us">CONTACT</a></li>
//           <li><a href="/blog">BLOG</a></li>

//           {/* Search Icon */}
//           <li>
//             <button onClick={() => setSearchOpen(!searchOpen)}>
//               <Search size={20} />
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Search Bar */}
//       {searchOpen && (
//         <div className="px-6 pb-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-4 bg-white border-t">
//           <a href="/" className="block">HOME</a>
//           <a href="/about" className="block">ABOUT US</a>
//           <a href="/contact" className="block">IT STAFFING</a>
//           <a href="/services" className="block">IT CONSULTING</a>
//           <a href="/training" className="block">CYBERSECURITY TRAINING</a>
//           <a href="/signup" className="block">CONTACT</a>
//           <a href="/blog" className="block">BLOG</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavbarComponents;





"use client";
import { Search, ChevronDown, Menu, X, Shield } from "lucide-react"; // Added Shield for logo
import { useState } from "react";
import React from "react";
import Link from "next/link";

const NavbarComponents = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    /* Changed to slate-950 and added backdrop-blur for a modern feel */
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">

        {/* Logo - Matching the Bold/Italic style of the headers */}
        <Link href="/" className="flex items-center gap-2 group">
          <Shield className="text-blue-500 group-hover:rotate-12 transition-transform" size={28} />
          <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">
            Shilly<span className="text-blue-500">Brittle</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest">
          <li className="hover:text-blue-500 transition-colors"><Link href="/">HOME</Link></li>
          <li className="hover:text-blue-500 transition-colors"><Link href="/about-us">ABOUT US</Link></li>
          
          {/* Consulting Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setActiveDropdown("consulting")}
              className="flex items-center gap-1 hover:text-blue-500 transition-colors uppercase"
            >
              Consulting <ChevronDown size={14} />
            </button>

            {activeDropdown === "consulting" && (
              <div 
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full -left-4 mt-2 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl w-64 p-4 space-y-1 animate-in fade-in slide-in-from-top-2"
              >
                <Link href="#" className="block hover:bg-blue-600/10 p-3 rounded-lg transition-colors border-b border-white/5">IT Consulting Services</Link>
                <Link href="#" className="block hover:bg-blue-600/10 p-3 rounded-lg transition-colors border-b border-white/5">IT Auditing</Link>
                <Link href="#" className="block hover:bg-blue-600/10 p-3 rounded-lg transition-colors">Risk Advisory</Link>
              </div>
            )}
          </li>

          {/* Training Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setActiveDropdown("training")}
              className="flex items-center gap-1 hover:text-blue-500 transition-colors uppercase"
            >
              Training <ChevronDown size={14} />
            </button>

            {activeDropdown === "training" && (
              <div 
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full -left-4 mt-2 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl w-64 p-4 space-y-1 animate-in fade-in slide-in-from-top-2"
              >
                <Link href="#" className="block hover:bg-blue-600/10 p-3 rounded-lg transition-colors border-b border-white/5">Cybersecurity Training</Link>
                <Link href="#" className="block hover:bg-blue-600/10 p-3 rounded-lg transition-colors border-b border-white/5">Security Awareness</Link>
                <Link href="#" className="block hover:bg-blue-600/10 p-3 rounded-lg transition-colors">Incident Response</Link>
              </div>
            )}
          </li>

          <li className="hover:text-blue-500 transition-colors"><Link href="/contact-us">CONTACT</Link></li>
          <li className="hover:text-blue-500 transition-colors"><Link href="/blog">BLOG</Link></li> 

          {/* Search Toggle */}
          <li>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Search size={18} />
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Search Bar Slide-out */}
      {searchOpen && (
        <div className="px-6 py-4 bg-slate-900 border-b border-white/10 animate-in slide-in-from-top">
          <input
            type="text"
            placeholder="Search Intelligence Database..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            autoFocus
          />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-slate-950 z-50 px-6 py-10 space-y-8 text-2xl font-black italic uppercase">
          <Link href="/" className="block" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about-us" className="block" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/contact-us" className="block text-blue-500" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/blog" className="block" onClick={() => setMobileOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponents;