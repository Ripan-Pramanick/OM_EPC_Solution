"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ChevronDown, ArrowRight, Grid3X3 } from 'lucide-react';
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
      // Removed 'fixed top-0 left-0 right-0' and replaced with 'relative w-full'
      className={`relative w-full z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-[#FAF9F6] shadow-sm border-gray-100 py-3'
          : 'bg-[#FAF9F6] border-transparent py-5'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Left Section: Logo & Search */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 tracking-tight">
            <Image src={logo} alt="OM EPC" width={150} height={60} className="w-auto h-13" />
          </Link>

          {/* <button className="hidden lg:flex items-center justify-center text-[#111827] hover:text-indigo-700 transition-colors">
            <Search size={20} strokeWidth={2} />
          </button> */}
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="flex items-center gap-1.5 text-[15px] font-bold text-[#111827] hover:text-indigo-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: CTA Button & Grid Menu */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Custom Pill Button Group */}
          <Link href="/login" className="flex items-center p-1 border border-gray-300 rounded-full bg-transparent hover:border-indigo-700 transition-all duration-300 group">
            <div className="px-3 text-[#111827] group-hover:text-indigo-700 transition-colors">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
            <div className="bg-[#111827] group-hover:bg-indigo-700 text-white text-[15px] font-bold px-7 py-2.5 rounded-full transition-colors">
              Login
            </div>
          </Link>

          {/* Circular Grid Menu Icon */}
          <button className="w-12 h-12 border border-gray-300 bg-transparent rounded-full flex items-center justify-center text-[#111827] hover:border-indigo-700 hover:text-indigo-700 transition-colors">
            <Grid3X3 size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden text-[#111827]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FAF9F6] shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col gap-4 lg:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-[#111827] font-bold text-lg hover:text-indigo-700 transition-colors flex justify-between items-center border-b border-gray-50 pb-3"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
              <ChevronDown size={16} className="text-gray-400" />
            </Link>
          ))}

          <Link href="/login" onClick={() => setMobileOpen(false)} className="mt-4">
            <div className="flex items-center p-1 border border-gray-300 rounded-full bg-[#FAF9F6] w-max mx-auto group">
              <div className="px-4 text-[#111827]">
                <ArrowRight size={18} />
              </div>
              <div className="bg-[#111827] text-white text-sm font-bold px-8 py-3 rounded-full">
                Login
              </div>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}