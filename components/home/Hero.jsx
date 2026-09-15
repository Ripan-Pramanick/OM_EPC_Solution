"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const WebThreads = dynamic(() => import('@/components/ui/WebThreads'), { 
    ssr: false, 
    loading: () => <div className="absolute inset-0 bg-emerald-950 z-0"></div> 
});

export default function Hero() {
    const inlineImages = [
        "/images/inline_1.jpg",
        "/images/inline_2.jpg",
        "/images/inline_3.jpg",
        "/images/inline_4.jpg",
    ];

    return (
        <section className="relative w-full pt-20 pb-10 min-h-screen px-4 md:px-8 bg-emerald-950 flex flex-col justify-center overflow-hidden">
            
            {/* Background WebThreads Animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
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

            {/* Main Inner Container */}
            <div className="relative w-full max-w-[1600px] mx-auto min-h-[650px] h-[85vh] lg:h-[80vh] xl:h-[85vh] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex items-start justify-center md:justify-end bg-emerald-950 z-10">

                {/* Background Image inside the floating box */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/home-hero.png"
                        alt="Modern IT Server Room"
                        fill
                        className="object-cover opacity-60 md:opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-emerald-950/40 md:bg-transparent" />
                </div>

                {/* The White Docked Card */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-emerald-50 w-[92%] md:w-full max-w-[340px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px] h-auto pt-8 pb-10 md:pt-12 md:pb-12 px-6 md:px-10 flex flex-col justify-center relative z-10 md:mr-12 lg:mr-24 xl:mr-36 2xl:mr-48 shadow-2xl rounded-b-[2.5rem] border-b border-emerald-100"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {/* Staggered Typography - Adjusted font sizes for laptops (lg/xl) */}
                        <div className="flex flex-col gap-2 md:gap-2.5 mb-8">
                            
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold text-emerald-950 leading-none tracking-tight">Reliable</span>
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-11 lg:h-11 xl:w-[52px] xl:h-[52px] rounded-full overflow-hidden relative shrink-0 shadow-sm border border-emerald-100">
                                    <Image src={inlineImages[0]} alt="Servers" fill className="object-cover" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-11 lg:h-11 xl:w-[52px] xl:h-[52px] rounded-full overflow-hidden relative shrink-0 shadow-sm border border-emerald-100">
                                    <Image src={inlineImages[1]} alt="Network" fill className="object-cover" />
                                </div>
                                <span className="text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold text-emerald-950 leading-none tracking-tight">Scalable</span>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold text-emerald-950 leading-none tracking-tight">Systems</span>
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-11 lg:h-11 xl:w-[52px] xl:h-[52px] rounded-full overflow-hidden relative shrink-0 shadow-sm border border-emerald-100">
                                    <Image src={inlineImages[2]} alt="Security" fill className="object-cover" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-11 lg:h-11 xl:w-[52px] xl:h-[52px] rounded-full overflow-hidden relative shrink-0 shadow-sm border border-emerald-100">
                                    <Image src={inlineImages[3]} alt="Hardware" fill className="object-cover" />
                                </div>
                                <span className="text-[2.5rem] md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold text-emerald-950 leading-none tracking-tight">Solutions</span>
                            </div>
                            
                        </div>

                        <p className="text-emerald-900/70 text-sm lg:text-[15px] mb-8 leading-relaxed pr-2">
                            Engineering elegant, functional IT infrastructure that blends high-performance networking and power backup for lasting continuity.
                        </p>

                        {/* Pill Button */}
                        <Link href="/services" className="block w-fit">
                            <Button className="!bg-emerald-950 hover:!bg-emerald-800 text-emerald-50 shadow-lg">
                                Explore Our Services
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}