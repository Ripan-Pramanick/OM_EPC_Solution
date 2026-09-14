"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { productPageImages } from '@/data/images';
import Button from '@/components/ui/Button';
import { ShieldCheck, MonitorSmartphone, HeadphonesIcon, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic'; 

const WebThreads = dynamic(() => import('@/components/ui/WebThreads'), { 
    ssr: false, 
    loading: () => <div className="absolute inset-0 bg-emerald-950 z-0"></div> 
});

export default function ProductHero() {
    return (
      
        <section className="relative w-full pt-24 pb-10 min-h-screen px-4 md:px-8 bg-emerald-950 flex flex-col justify-center overflow-hidden">
         
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <WebThreads
                    color1="#00ff8b"
                    color2="#00ff10"
                    color3="#00ad26ff"
                    speed={0.2}
                    threadCount={6}
                    frequency={5}
                    spread={0.18}
                    taper={1}
                    position={0.5}
                    fanMode="center"
                    glow={0.02}
                    falloff={0.6}
                    thickness={1.1}
                    brightness={0.6}
                    opacity={1}
                    mirror={true}
                    shimmer={false}
                    grain={true}
                    grainIntensity={0.05}
                    mouseInteraction={true}
                    mouseStrength={0.3}
                />
            </div>

            {/* Inner Floating Light Container */}
            {/* FIXED: Changed fixed 'h-[85vh]' to 'min-h-[85vh] h-auto lg:h-[85vh]' to prevent content spilling on mobile */}
            <div className="relative w-full max-w-[1600px] min-h-[85vh] h-auto lg:h-[85vh] mx-auto bg-emerald-100 rounded-[2.5rem] md:rounded-[3rem] px-8 py-12 md:px-12 lg:px-16 grid xl:grid-cols-2 gap-12 lg:gap-16 items-center shadow-2xl overflow-hidden z-10">

                {/* LEFT CONTENT */}
                <div className="max-w-2xl relative z-10 py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-emerald-950 leading-[1.1] mb-6 tracking-tight"
                    >
                        Reliable Technology<br /> Products for <span className="text-emerald-700">Your Business</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-emerald-900/70 text-lg md:text-xl leading-relaxed mb-10"
                    >
                        Discover a wide range of high-quality computers, UPS, printers, CCTV, networking equipment and more — all in one place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-14"
                    >
                        <Link href="/services" className="w-full sm:w-auto">
                            <Button >
                                Browse services
                            </Button>
                        </Link>
                        <Link href="/contact#contact-form" className="w-full sm:w-auto">
                            <Button variant="outline" >
                                Get a Quote
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6 pt-8 border-t border-emerald-200/60"
                    >
                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900/80">
                            <ShieldCheck size={18} className="text-emerald-600" /> 100% Genuine Products
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900/80">
                            <MonitorSmartphone size={18} className="text-emerald-600" /> Multi-Brand Availability
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900/80">
                            <HeadphonesIcon size={18} className="text-emerald-600" /> Expert Support & Guidance
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT CONTENT: Art-directed composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[500px] w-full hidden xl:block"
                >
                    {/* Main Back Image */}
                    <div className="absolute right-0 top-4 w-3/4 h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 animate-[floating_6s_ease-in-out_infinite]">
                        <Image src={productPageImages.hero.main} alt="Technology Infrastructure" fill className="object-cover" />
                        <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />
                    </div>

                    {/* Front Overlapping Image */}
                    <div className="absolute left-0 bottom-[5%] w-[65%] h-[60%] rounded-[1.5rem] bg-emerald-50 overflow-hidden shadow-2xl z-20 border-[6px] border-emerald-100 animate-[floating_8s_ease-in-out_infinite_reverse]">
                        <Image src={productPageImages.hero.secondary} alt="Business IT" fill className="object-cover" />
                    </div>

                    {/* Floating Info Card */}
                    <div className="absolute top-[25%] -left-6 bg-white/95 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-xl z-30 flex items-center gap-4 border border-emerald-50">
                        <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-wider mb-0.5">Quality Products</p>
                            <p className="text-sm font-bold text-emerald-950">Stronger Business</p>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center ml-2 cursor-pointer hover:bg-emerald-800 transition-colors">
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}