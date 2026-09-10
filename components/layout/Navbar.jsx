"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const pathname = usePathname();
  const logo = "/logo.webp";

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
      className={`relative w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-emerald-100 shadow-sm border-emerald-200 py-3'
          : 'bg-emerald-100 border-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-2 md:px-10 flex items-center justify-between">

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
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-emerald-950 text-emerald-50 shadow-md' 
                    : 'text-emerald-950 hover:bg-emerald-950/10' 
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>

        <button 
          className="lg:hidden text-emerald-950 hover:text-emerald-700 transition-colors" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-emerald-100 shadow-2xl border-t border-emerald-200 py-6 px-6 flex flex-col gap-4 lg:hidden z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || pathname.startsWith(link.path + '/');
            
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-bold text-lg transition-all duration-300 flex justify-between items-center px-4 py-3 rounded-xl ${
                  isActive 
                    ? 'bg-emerald-950 text-emerald-50 shadow-md' 
                    : 'text-emerald-950 hover:bg-emerald-950/10'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
                <ChevronDown size={16} className={`transition-transform ${isActive ? 'text-emerald-50' : 'text-emerald-800/40'}`} />
              </Link>
            );
          })}

          <Link href="/login" onClick={() => setMobileOpen(false)} className="mt-4">
            <Button className="w-full justify-center">Login</Button>
          </Link>
        </div>
      )}
    </header>
  );
}