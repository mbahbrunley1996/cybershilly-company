import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. IMPORT YOUR GLOBAL COMPONENTS
import NavbarComponents from "@/components/Navbar/NavbarComponents";
import FooterComponents from "@/components/Footer/FooterComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShillyBrittle | Elite Defense Units",
  description: "Federal compliance, risk advisory, and tactical staff augmentation.",
};

// src/app/layout.js

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="dark" 
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning // This silences warnings from extension-injected attributes
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white min-h-screen flex flex-col`}>
        <NavbarComponents />
        <main className="flex-grow">
          {children}
        </main>
        <FooterComponents />
      </body>
    </html>
  );
}