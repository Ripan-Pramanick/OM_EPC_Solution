"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import DarkBtn from '../ui/DarkBtn';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const pathname = usePathname();
  const logo = "/light_logo.webp";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/login') return null;

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-emerald-950/90 backdrop-blur-md shadow-lg border-emerald-900/50 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 tracking-tight">
            <Image src={logo} alt="OM EPC" width={150} height={60} className="w-auto h-13" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || pathname.startsWith(link.path + '/');
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[17px] font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-emerald-100/90 text-emerald-950 shadow-sm' 
                    : 'text-emerald-50 hover:bg-emerald-800/40 hover:text-white' 
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Fix: Wrapped in Link instead of using onClick scrollIntoView */}
          <Link href="/contact#contact-form">
            <DarkBtn className="cursor-pointer">Get a Quote</DarkBtn>
          </Link>
        </div>

        <button 
          className="lg:hidden text-emerald-50 hover:text-white transition-colors" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-emerald-950 shadow-2xl border-t border-emerald-900 py-6 px-6 flex flex-col gap-4 lg:hidden z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || pathname.startsWith(link.path + '/');
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-bold text-lg transition-all duration-300 flex justify-between items-center px-4 py-3 rounded-xl ${
                  isActive 
                    ? 'bg-emerald-800 text-white shadow-md' 
                    : 'text-emerald-100 hover:bg-emerald-800/50 hover:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
                <ChevronDown size={16} className={`transition-transform ${isActive ? 'text-white' : 'text-emerald-100/50'}`} />
              </Link>
            );
          })}

          {/* Fix: Wrapped in Link, added close mobile menu onClick */}
          <Link href="/contact#contact-form" onClick={() => setMobileOpen(false)} className="mt-4">
             <DarkBtn className="cursor-pointer w-full justify-center">Get a Quote</DarkBtn>
          </Link>
        </div>
      )}
    </header>
  );
}