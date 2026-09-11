"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, ShieldCheck } from "lucide-react";

export default function AuthClient() {
    // UI Navigation States
    const [isLogin, setIsLogin] = useState(true);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    // OTP UI States
    const [isOtpStep, setIsOtpStep] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState("user@omepc.com");
    const [otpCode, setOtpCode] = useState("");

    // Dummy UI Handlers to prevent page reload and show UI flow
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Add your own login logic here
        console.log("Login Form Submitted");
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Add your own register logic here
        // Transition to OTP step for UI demonstration
        setIsOtpStep(true); 
    };

    const handleVerifyOtpSubmit = (e) => {
        e.preventDefault();
        // Add your own OTP verification logic here
        console.log("OTP Verified");
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-emerald-50/60 p-6 overflow-hidden relative">

            {/* Subtle Emerald Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Main Card Container */}
            <div className="relative w-full max-w-[1000px] h-[850px] md:h-[650px] bg-emerald-100 border border-emerald-200 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(4,120,87,0.15)] overflow-hidden flex z-10">

                {/* LEFT PANEL: Register & OTP */}
                <div className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-8 md:p-14 flex flex-col justify-center bg-emerald-100 transition-all duration-700 ease-in-out z-20 ${isLogin ? 'opacity-0 pointer-events-none -translate-x-full md:translate-x-0' : 'opacity-100 pointer-events-auto translate-x-0 md:translate-x-[100%]'}`}>

                    {isOtpStep ? (
                        <>
                            <div className="text-center mb-8">
                                <div className="w-12 h-12 bg-emerald-200/50 rounded-2xl flex items-center justify-center text-emerald-800 mx-auto mb-4 border border-emerald-300">
                                    <ShieldCheck size={24} />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-2 tracking-tight">
                                    Verify Email
                                </h1>
                                <p className="text-emerald-800/80 text-sm">Code sent to <span className="font-semibold text-emerald-800">{registeredEmail}</span></p>
                            </div>

                            <form onSubmit={handleVerifyOtpSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">8-Digit OTP</label>
                                    <div className="flex items-center border border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all">
                                        <Lock className="text-emerald-600/60 mr-3 shrink-0" size={18} />
                                        <input
                                            type="text"
                                            value={otpCode}
                                            onChange={(e) => setOtpCode(e.target.value)}
                                            required
                                            maxLength={8}
                                            className="w-full bg-transparent outline-none text-[18px] text-center text-emerald-950 font-mono tracking-[0.5em] placeholder:text-emerald-800/30 placeholder:tracking-normal"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-2">
                                    <button type="submit" className="w-full flex justify-center items-center gap-2 cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/20 uppercase tracking-widest">
                                        Verify Account
                                    </button>

                                    <div className="flex items-center my-2">
                                        <div className="flex-grow border-t border-emerald-200"></div>
                                        <span className="px-4 text-xs font-semibold text-emerald-700/50 uppercase">Or</span>
                                        <div className="flex-grow border-t border-emerald-200"></div>
                                    </div>

                                    <button type="button" onClick={() => setIsOtpStep(false)} className="w-full cursor-pointer flex items-center justify-center gap-2 border border-emerald-300 hover:border-emerald-700 hover:text-emerald-800 text-emerald-950 font-bold text-[13px] py-3.5 rounded-xl transition-all uppercase tracking-widest group">
                                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                        Back to Register
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-2 tracking-tight">
                                    Create Account
                                </h1>
                                <p className="text-emerald-800/80 text-sm">Join OM EPC for premium IT solutions</p>
                            </div>

                            <form onSubmit={handleRegisterSubmit} className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">First Name</label>
                                        <div className="flex items-center border border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all shadow-sm">
                                            <User className="text-emerald-600/60 mr-3 shrink-0" size={18} />
                                            <input name="firstName" type="text" required className="w-full bg-transparent outline-none text-[14px] text-emerald-950 font-medium placeholder:text-emerald-800/40" />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">Last Name</label>
                                        <div className="flex items-center border border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all shadow-sm">
                                            <input name="lastName" type="text" required className="w-full bg-transparent outline-none text-[14px] text-emerald-950 font-medium placeholder:text-emerald-800/40" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                                    <div className="flex items-center border border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all shadow-sm">
                                        <Mail className="text-emerald-600/60 mr-3 shrink-0" size={18} />
                                        <input name="email" type="email" required onChange={(e) => setRegisteredEmail(e.target.value)} className="w-full bg-transparent outline-none text-[14px] text-emerald-950 font-medium placeholder:text-emerald-800/40" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">Password</label>
                                    <div className="flex items-center border border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all shadow-sm">
                                        <Lock className="text-emerald-600/60 mr-3 shrink-0" size={18} />
                                        <input name="password" type={showRegisterPassword ? "text" : "password"} minLength="6" required className="w-full bg-transparent outline-none text-[14px] text-emerald-950 font-medium placeholder:text-emerald-800/40" />
                                        <button type="button" onClick={() => setShowRegisterPassword(!showRegisterPassword)} className="text-emerald-600/60 hover:text-emerald-800 transition-colors cursor-pointer">
                                            {showRegisterPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-4">
                                    <button type="submit" className="w-full flex justify-center items-center gap-2 cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/20 uppercase tracking-widest">
                                        Register
                                    </button>

                                    <div className="flex items-center my-2">
                                        <div className="flex-grow border-t border-emerald-200"></div>
                                        <span className="px-4 text-xs font-semibold text-emerald-700/50 uppercase">Or</span>
                                        <div className="flex-grow border-t border-emerald-200"></div>
                                    </div>

                                    <Link href="/" className="w-full cursor-pointer flex items-center justify-center gap-2 border border-emerald-300 hover:border-emerald-700 hover:text-emerald-800 text-emerald-950 font-bold text-[13px] py-3.5 rounded-xl transition-all uppercase tracking-widest group">
                                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                        Back to Home
                                    </Link>
                                </div>
                            </form>

                            <div className="mt-8 text-center text-sm md:hidden">
                                <span className="text-emerald-800/80">Already have an account? </span>
                                <button onClick={() => { setIsLogin(true); setIsOtpStep(false); }} className="font-bold text-emerald-800 hover:text-emerald-950 transition-colors ml-1">
                                    Login Now
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* LEFT PANEL (VISUALLY): Login */}
                <div className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-8 md:p-14 flex flex-col justify-center bg-white transition-all duration-700 ease-in-out z-20 ${isLogin
                    ? 'opacity-100 pointer-events-auto translate-x-0'
                    : 'opacity-0 pointer-events-none translate-x-[100%]'
                    }`}>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-2 tracking-tight">
                            Welcome Back
                        </h1>
                        <p className="text-emerald-800/80 text-sm">Sign in to your OM EPC account</p>
                    </div>

                    <form onSubmit={handleLoginSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                            <div className="flex items-center border border-emerald-200/80 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all shadow-sm">
                                <Mail className="text-emerald-600/60 mr-3 shrink-0" size={18} />
                                <input
                                    name="email"
                                    type="email"
                                    className="w-full bg-transparent outline-none text-[14px] text-emerald-950 font-medium placeholder:text-emerald-800/40"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 ml-1">Password</label>
                            <div className="flex items-center border border-emerald-200/80 hover:border-emerald-400 focus-within:border-emerald-600 rounded-xl px-4 py-3.5 bg-emerald-50/60 transition-all shadow-sm">
                                <Lock className="text-emerald-600/60 mr-3 shrink-0" size={18} />
                                <input
                                    name="password"
                                    type={showLoginPassword ? "text" : "password"}
                                    className="w-full bg-transparent outline-none text-[14px] text-emerald-950 font-medium placeholder:text-emerald-800/40"
                                    required
                                />
                                <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="text-emerald-600/60 hover:text-emerald-800 transition-colors cursor-pointer">
                                    {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="text-right -mt-2">
                            <Link href="/forgot-password" className="text-[12px] font-bold text-emerald-700 hover:text-emerald-900 transition-colors">
                                Forgot your password?
                            </Link>
                        </div>

                        <div className="flex flex-col gap-4 pt-2">
                            <button type="submit" className="w-full flex justify-center items-center gap-2 cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[13px] py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/20 uppercase tracking-widest">
                                Login
                            </button>

                            <div className="flex items-center my-2">
                                <div className="flex-grow border-t border-emerald-200"></div>
                                <span className="px-4 text-xs font-semibold text-emerald-700/50 uppercase">Or</span>
                                <div className="flex-grow border-t border-emerald-200"></div>
                            </div>

                            <Link href="/" className="w-full cursor-pointer flex items-center justify-center gap-2 border border-emerald-300 hover:border-emerald-700 hover:text-emerald-800 text-emerald-950 font-bold text-[13px] py-3.5 rounded-xl transition-all uppercase tracking-widest group">
                                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm md:hidden">
                        <span className="text-emerald-800/80">Don't have an account? </span>
                        <button onClick={() => setIsLogin(false)} className="font-bold text-emerald-800 hover:text-emerald-950 transition-colors ml-1">
                            Register Now
                        </button>
                    </div>
                </div>

                {/* RIGHT OVERLAY PANEL (Image sliding panel) */}
                <div className={`hidden md:flex absolute top-0 left-0 w-1/2 h-full z-50 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isLogin ? 'translate-x-[100%]' : 'translate-x-0'}`}>
                    <div className="relative w-full h-full overflow-hidden shadow-2xl bg-emerald-950">
                        {/* Tech Background Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                            alt="OM EPC Solution IT Support"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover opacity-80"
                            priority
                        />
                        {/* Emerald Dark Overlay */}
                        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-emerald-900/40"></div>

                        {/* View for Registration overlay */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-12 text-white transition-opacity duration-500 ${isLogin ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}>
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg">
                                <User size={28} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">New to OM EPC?</h2>
                            <p className="text-emerald-50 text-sm mb-10 leading-relaxed max-w-[280px]">
                                Create an account to manage your IT infrastructure services, track quotes, and get technical support.
                            </p>
                            <button
                                onClick={() => { setIsLogin(false); setIsOtpStep(false); }}
                                className="border-2 border-white/50 hover:border-white rounded-xl px-12 py-3.5 font-bold text-[13px] hover:bg-emerald-50 hover:text-emerald-950 transition-all uppercase tracking-widest shadow-lg cursor-pointer"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* View for Login overlay */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-12 text-white transition-opacity duration-500 ${!isLogin ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}>
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg">
                                <Lock size={28} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">One of Us?</h2>
                            <p className="text-emerald-50 text-sm mb-10 leading-relaxed max-w-[280px]">
                                If you already have an account, just sign in. We've missed you!
                            </p>
                            <button
                                onClick={() => { setIsLogin(true); setIsOtpStep(false); }}
                                className="border-2 border-white/50 hover:border-white rounded-xl px-12 py-3.5 font-bold text-[13px] hover:bg-emerald-50 hover:text-emerald-950 transition-all uppercase tracking-widest shadow-lg cursor-pointer"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}