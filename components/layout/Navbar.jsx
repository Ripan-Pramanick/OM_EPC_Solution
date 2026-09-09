"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-6 ${
          isScrolled 
            ? 'bg-white/65 backdrop-blur-lg shadow-lg border border-gray-200 py-3' 
            : 'bg-white/85 backdrop-blur-sm shadow-sm border border-white/50 py-4'
        }`}
      >
        <Link href="/" className="flex items-center gap-2 tracking-tight">
          <Image src={logo} alt="OM EPC" width={100} height={40} className="w-auto h-8" />
        </Link>
        
        <nav className="hidden md:flex gap-8 text-md font-bold text-navy">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/login">
            <Button variant="primary">Login</Button>
          </Link>
        </div>

        <button className="md:hidden text-navy" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl py-6 px-6 flex flex-col gap-5 md:hidden border border-gray-100 z-50">
          <Link href="/about" className="text-navy font-bold hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/services" className="text-navy font-bold hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/products" className="text-navy font-bold hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link href="/contact" className="text-navy font-bold hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link>
          
          <Link href="/login" onClick={() => setMobileOpen(false)}>
            <Button variant="primary" className="w-full mt-2">Login</Button>
          </Link>
        </div>
      )}
    </header>
  );
}