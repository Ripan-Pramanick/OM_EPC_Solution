"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, User, Loader2, Eye, EyeOff, CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck } from "lucide-react";



export default function AuthClient() {
    const [isLogin, setIsLogin] = useState(true);
    const [isPending, startTransition] = useTransition();
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: "", type: "success" });

    const [isOtpStep, setIsOtpStep] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState("");
    const [otpCode, setOtpCode] = useState("");

    const showPopupMessage = (message, type = "success") => {
        setPopup({ show: true, message, type });
        setTimeout(() => {
            setPopup({ show: false, message: "", type: "success" });
        }, 3000);
    };

    const handleLogin = (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");

        startTransition(async () => {
            try {
                const supabase = createClient();

                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) {
                    showPopupMessage("Invalid email or password", "error");
                } else if (data?.user) {
                    showPopupMessage("Login Successful! Redirecting...", "success");
                    const role = data.user.user_metadata?.role;
                    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

                    setTimeout(() => {
                        if (role === 'admin' || email === adminEmail) {
                            window.location.href = "/admin";
                        } else {
                            window.location.href = "/";
                        }
                    }, 1500);
                }
            } catch (error) {
                showPopupMessage("Something went wrong. Please try again.", "error");
            }
        });
    };

    const handleRegister = (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");

        startTransition(async () => {
            try {
                const supabase = createClient();

                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            first_name: firstName,
                            last_name: lastName,
                            name: `${firstName} ${lastName}`,
                            role: 'customer'
                        }
                    }
                });

                if (error) {
                    showPopupMessage(error.message, "error");
                } else {
                    setRegisteredEmail(email);
                    setIsOtpStep(true);
                    showPopupMessage("OTP sent to your email. Please verify.", "success");
                }
            } catch (error) {
                showPopupMessage("Something went wrong during registration.", "error");
            }
        });
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        startTransition(async () => {
            try {
                const supabase = createClient();
                const { data, error } = await supabase.auth.verifyOtp({
                    email: registeredEmail,
                    token: otpCode,
                    type: 'signup'
                });

                if (error) {
                    showPopupMessage(error.message, "error");
                } else {
                    showPopupMessage("Account verified successfully! Logging in...", "success");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1500);
                }
            } catch (error) {
                showPopupMessage("Something went wrong.", "error");
            }
        });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#F5F7FF] p-6 overflow-hidden relative">


            {/* Subtle Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Toast Notification */}
            {popup.show && (
                <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3.5 rounded-2xl shadow-xl backdrop-blur-md font-semibold text-[14px] flex items-center gap-3 transition-all duration-300 transform translate-y-0 ${popup.type === 'success' ? 'bg-indigo-700 text-white border border-indigo-600' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                    {popup.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    {popup.message}
                </div>
            )}

            {/* Main Card Container */}
            <div className="relative w-full max-w-[1000px] h-[850px] md:h-[650px] bg-[#FAF9F6] border border-gray-100 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(67,56,202,0.15)] overflow-hidden flex z-10">

                {/* LEFT PANEL: Register & OTP */}
                <div className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-8 md:p-14 flex flex-col justify-center bg-[#FAF9F6] transition-all duration-700 ease-in-out z-20 ${isLogin ? 'opacity-0 pointer-events-none -translate-x-full md:translate-x-0' : 'opacity-100 pointer-events-auto translate-x-0 md:translate-x-[100%]'}`}>

                    {isOtpStep ? (
                        <>
                            <div className="text-center mb-8">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-700 mx-auto mb-4 border border-indigo-100">
                                    <ShieldCheck size={24} />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2 tracking-tight">
                                    Verify Email
                                </h1>
                                <p className="text-[#64748B] text-sm">Code sent to <span className="font-semibold text-indigo-700">{registeredEmail}</span></p>
                            </div>

                            <form onSubmit={handleVerifyOtp} className="space-y-6">
                                <div className="relative">
                                    <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[11px] font-bold text-indigo-700 uppercase tracking-wider z-10">8-Digit OTP</span>
                                    <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all">
                                        <Lock className="text-gray-400 mr-3 shrink-0" size={18} />
                                        <input
                                            type="text"
                                            value={otpCode}
                                            onChange={(e) => setOtpCode(e.target.value)}
                                            required
                                            maxLength={8}
                                            className="w-full bg-transparent outline-none text-[18px] text-center text-[#111827] font-mono tracking-[0.5em] placeholder:text-gray-300 placeholder:tracking-normal"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-2">
                                    <button disabled={isPending} type="submit" className="w-full flex justify-center items-center gap-2 cursor-pointer bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-[13px] py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-700/30 uppercase tracking-widest disabled:opacity-70">
                                        {isPending && <Loader2 size={16} className="animate-spin" />}
                                        Verify Account
                                    </button>

                                    <div className="flex items-center my-2">
                                        <div className="flex-grow border-t border-gray-100"></div>
                                        <span className="px-4 text-xs font-semibold text-gray-400 uppercase">Or</span>
                                        <div className="flex-grow border-t border-gray-100"></div>
                                    </div>

                                    <button type="button" onClick={() => setIsOtpStep(false)} className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-200 hover:border-indigo-700 hover:text-indigo-700 text-[#111827] font-bold text-[13px] py-3.5 rounded-xl transition-all uppercase tracking-widest group">
                                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                        Back to Register
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2 tracking-tight">
                                    Create Account
                                </h1>
                                <p className="text-[#64748B] text-sm">Join OM EPC for premium IT solutions</p>
                            </div>

                            <form action={handleRegister} className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="relative w-1/2">
                                        <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[10px] font-bold text-indigo-700 uppercase tracking-wider z-10">First Name</span>
                                        <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all shadow-sm">
                                            <User className="text-gray-400 mr-3 shrink-0" size={18} />
                                            <input name="firstName" type="text" required className="w-full bg-transparent outline-none text-[14px] text-[#111827] font-medium placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="relative w-1/2">
                                        <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[10px] font-bold text-indigo-700 uppercase tracking-wider z-10">Last Name</span>
                                        <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all shadow-sm">
                                            <input name="lastName" type="text" required className="w-full bg-transparent outline-none text-[14px] text-[#111827] font-medium placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[10px] font-bold text-indigo-700 uppercase tracking-wider z-10">Email Address</span>
                                    <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all shadow-sm">
                                        <Mail className="text-gray-400 mr-3 shrink-0" size={18} />
                                        <input name="email" type="email" required className="w-full bg-transparent outline-none text-[14px] text-[#111827] font-medium placeholder:text-gray-400" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[10px] font-bold text-indigo-700 uppercase tracking-wider z-10">Password</span>
                                    <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all shadow-sm">
                                        <Lock className="text-gray-400 mr-3 shrink-0" size={18} />
                                        <input name="password" type={showRegisterPassword ? "text" : "password"} minLength="6" required className="w-full bg-transparent outline-none text-[14px] text-[#111827] font-medium placeholder:text-gray-400" />
                                        <button type="button" onClick={() => setShowRegisterPassword(!showRegisterPassword)} className="text-gray-400 hover:text-indigo-700 transition-colors cursor-pointer">
                                            {showRegisterPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-4">
                                    <button disabled={isPending} type="submit" className="w-full flex justify-center items-center gap-2 cursor-pointer bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-[13px] py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-700/30 uppercase tracking-widest disabled:opacity-70">
                                        {isPending && <Loader2 size={16} className="animate-spin" />}
                                        Register
                                    </button>

                                    <div className="flex items-center my-2">
                                        <div className="flex-grow border-t border-gray-100"></div>
                                        <span className="px-4 text-xs font-semibold text-gray-400 uppercase">Or</span>
                                        <div className="flex-grow border-t border-gray-100"></div>
                                    </div>

                                    <Link href="/" className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-200 hover:border-indigo-700 hover:text-indigo-700 text-[#111827] font-bold text-[13px] py-3.5 rounded-xl transition-all uppercase tracking-widest group">
                                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                        Back to Home
                                    </Link>
                                </div>
                            </form>

                            <div className="mt-8 text-center text-sm md:hidden">
                                <span className="text-[#64748B]">Already have an account? </span>
                                <button onClick={() => { setIsLogin(true); setIsOtpStep(false); }} className="font-bold text-indigo-700 hover:text-indigo-800 transition-colors ml-1">
                                    Login Now
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* LEFT PANEL (VISUALLY): Login */}
                <div className={`absolute top-0 left-0 w-full md:w-1/2 h-full p-8 md:p-14 flex flex-col justify-center bg-[#FAF9F6] transition-all duration-700 ease-in-out z-20 ${isLogin
                    ? 'opacity-100 pointer-events-auto translate-x-0'
                    : 'opacity-0 pointer-events-none translate-x-[100%]'
                    }`}>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2 tracking-tight">
                            Welcome Back
                        </h1>
                        <p className="text-[#64748B] text-sm">Sign in to your OM EPC account</p>
                    </div>

                    <form action={handleLogin} className="space-y-6">
                        <div className="relative">
                            <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[10px] font-bold text-indigo-700 uppercase tracking-wider z-10">Email Address</span>
                            <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all shadow-sm">
                                <Mail className="text-gray-400 mr-3 shrink-0" size={18} />
                                <input
                                    name="email"
                                    type="email"
                                    className="w-full bg-transparent outline-none text-[14px] text-[#111827] font-medium placeholder:text-gray-400"
                                    required
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <span className="absolute -top-2.5 left-4 bg-[#FAF9F6] px-2 text-[10px] font-bold text-indigo-700 uppercase tracking-wider z-10">Password</span>
                            <div className="flex items-center border border-gray-200 hover:border-indigo-300 focus-within:border-indigo-600 rounded-xl px-4 py-3.5 bg-[#FAF9F6] transition-all shadow-sm">
                                <Lock className="text-gray-400 mr-3 shrink-0" size={18} />
                                <input
                                    name="password"
                                    type={showLoginPassword ? "text" : "password"}
                                    className="w-full bg-transparent outline-none text-[14px] text-[#111827] font-medium placeholder:text-gray-400"
                                    required
                                />
                                <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="text-gray-400 hover:text-indigo-700 transition-colors cursor-pointer">
                                    {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="text-right">
                            <Link href="/forgot-password" className="text-[12px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                                Forgot your password?
                            </Link>
                        </div>

                        <div className="flex flex-col gap-4 pt-2">
                            <button disabled={isPending} type="submit" className="w-full flex justify-center items-center gap-2 cursor-pointer bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-[13px] py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-700/30 uppercase tracking-widest disabled:opacity-70">
                                {isPending && <Loader2 size={16} className="animate-spin" />}
                                Login
                            </button>

                            <div className="flex items-center my-2">
                                <div className="flex-grow border-t border-gray-100"></div>
                                <span className="px-4 text-xs font-semibold text-gray-400 uppercase">Or</span>
                                <div className="flex-grow border-t border-gray-100"></div>
                            </div>

                            <Link href="/" className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-200 hover:border-indigo-700 hover:text-indigo-700 text-[#111827] font-bold text-[13px] py-3.5 rounded-xl transition-all uppercase tracking-widest group">
                                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm md:hidden">
                        <span className="text-[#64748B]">Don't have an account? </span>
                        <button onClick={() => setIsLogin(false)} className="font-bold text-indigo-700 hover:text-indigo-800 transition-colors ml-1">
                            Register Now
                        </button>
                    </div>
                </div>

                {/* RIGHT OVERLAY PANEL (Image sliding panel) */}
                <div className={`hidden md:flex absolute top-0 left-0 w-1/2 h-full z-50 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isLogin ? 'translate-x-[100%]' : 'translate-x-0'}`}>
                    <div className="relative w-full h-full overflow-hidden shadow-2xl">
                        {/* Tech Background Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                            alt="OM EPC Solution IT Support"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        {/* Indigo Overlay */}
                        <div className="absolute inset-0 bg-indigo-900/80 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-transparent to-indigo-900/40"></div>

                        {/* View for Registration overlay */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-12 text-white transition-opacity duration-500 ${isLogin ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}>
                            <div className="w-16 h-16 bg-[#FAF9F6]/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg">
                                <User size={28} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">New to OM EPC?</h2>
                            <p className="text-indigo-100 text-sm mb-10 leading-relaxed max-w-[280px]">
                                Create an account to manage your IT infrastructure services, track quotes, and get technical support.
                            </p>
                            <button
                                onClick={() => { setIsLogin(false); setIsOtpStep(false); }}
                                className="border-2 border-white/50 hover:border-white rounded-xl px-12 py-3.5 font-bold text-[13px] hover:bg-[#FAF9F6] hover:text-indigo-700 transition-all uppercase tracking-widest shadow-lg cursor-pointer"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* View for Login overlay */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-12 text-white transition-opacity duration-500 ${!isLogin ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}>
                            <div className="w-16 h-16 bg-[#FAF9F6]/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg">
                                <Lock size={28} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">One of Us?</h2>
                            <p className="text-indigo-100 text-sm mb-10 leading-relaxed max-w-[280px]">
                                If you already have an account, just sign in. We've missed you!
                            </p>
                            <button
                                onClick={() => { setIsLogin(true); setIsOtpStep(false); }}
                                className="border-2 border-white/50 hover:border-white rounded-xl px-12 py-3.5 font-bold text-[13px] hover:bg-[#FAF9F6] hover:text-indigo-700 transition-all uppercase tracking-widest shadow-lg cursor-pointer"
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