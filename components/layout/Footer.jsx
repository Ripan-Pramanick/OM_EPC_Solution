"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/login') return null;

  return (
    <footer className="text-white bg-[#FAF9F6] pt-12 px-4 md:px-6">
      <div className="bg-[#030021] rounded-t-[3rem] md:rounded-t-[120px] pt-16 md:pt-20 pb-8 mx-auto max-w-[1400px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-8 block">
              <Image src="/light_logo.webp" alt="OM EPC Solution" width={150} height={50} className="w-auto h-auto" />
            </Link>
            <p className="text-indigo-200 max-w-sm mb-10 leading-relaxed text-sm md:text-base">
              Your trusted partner for comprehensive IT infrastructure, networking, power backup, and security solutions.
            </p>

            <div className="flex flex-col gap-5 text-sm md:text-base text-indigo-100">
              <span className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300 shrink-0">
                  <Phone size={18} />
                </div>
                +91 98765 43210
              </span>
              <span className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300 shrink-0">
                  <Mail size={18} />
                </div>
                contact@omepcsolution.com
              </span>
              <span className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300 shrink-0">
                  <MapPin size={18} />
                </div>
                Tech Park, Business District
              </span>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="text-lg font-bold mb-8 text-white">Services</h4>
            <ul className="space-y-4 text-sm md:text-base text-indigo-200">
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> Computer AMC
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> Network Cabling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> UPS Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> CCTV Setup
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3 lg:pl-4">
            <h4 className="text-lg font-bold mb-8 text-white">Company</h4>
            <ul className="space-y-4 text-sm md:text-base text-indigo-200">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-[#FAF9F6] transition-colors shrink-0"></span> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-indigo-700/50 text-center text-sm text-indigo-300">
          © {new Date().getFullYear()} OM EPC Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}