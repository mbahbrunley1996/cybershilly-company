import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Point this exactly to where you saved ClientNavbar
import ClientNavbar from "../components/Navbar/NavbarComponents"; 
import FooterComponents from "../components/Footer/FooterComponents";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white min-h-screen flex flex-col`}>
        {/* 2. Place the wrapper here */}
        <ClientNavbar />
        
        <main className="flex-grow pt-20"> 
          {children}
        </main>
        
        <FooterComponents />
      </body>
    </html>
  );
}