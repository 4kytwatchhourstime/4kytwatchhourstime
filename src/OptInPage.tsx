/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Lock, Mail, User, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OptInPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd send this to your backend or email service
      console.log('Opt-in:', { name, email });
      setIsSubmitting(false);
      navigate('/sales');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFD700] selection:text-black flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Bar Warning */}
      <div className="fixed top-0 w-full bg-red-600 text-white text-center py-2 font-bold text-xs uppercase tracking-widest z-50">
        Limited Time Opportunity for Serious YouTubers Only
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        {/* Progress Bar */}
        <div className="max-w-md mx-auto space-y-2">
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '66%' }}
                    className="bg-[#FFD700] h-full"
                ></motion.div>
            </div>
            <p className="text-[#FFD700] font-bold uppercase tracking-widest text-[10px]">Step 1 of 2: Secure Your Access</p>
        </div>

        {/* Headline */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter"
        >
            FREE CASE STUDY: How To Reach <span className="text-[#FFD700]">4,000 Watch Hours</span> Fast... Even With <span className="text-red-600">Zero Subscribers!</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
        >
            Enter your details below to get the exact blueprint I used to monetize my channel in record time.
        </motion.p>

        {/* Main Content Area */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-[#111] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl text-left"
        >
            {/* Image Side */}
            <div className="relative hidden md:block">
                <div className="absolute -inset-4 bg-[#FFD700]/10 blur-2xl rounded-full"></div>
                <img 
                    src="/4k_yt_watch_hours_bundle.jpg" 
                    alt="Bundle Preview" 
                    className="relative rounded-xl shadow-2xl border border-white/5 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                <div className="mt-6 space-y-4">
                    {[
                        "100% Free Strategy",
                        "No Viral Luck Needed",
                        "Works for Any Niche"
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-300">
                            <CheckCircle2 className="text-[#FFD700] w-4 h-4" /> {text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Side */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold">Where should we send your <span className="text-[#FFD700]">Free Blueprint?</span></h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="name" class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Your First Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input 
                                type="text" 
                                id="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                                placeholder="Enter your name..." 
                                className="w-full bg-black border border-white/20 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#FFD700] transition-all text-white placeholder:text-gray-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Your Best Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                placeholder="Enter your email..." 
                                className="w-full bg-black border border-white/20 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#FFD700] transition-all text-white placeholder:text-gray-700"
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#FFD700] hover:bg-[#FFC400] text-black font-black py-5 rounded-xl text-xl uppercase tracking-tighter shadow-[0_6px_0_0_#B8860B] active:translate-y-1 active:shadow-none transition-all mt-4 flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                        {isSubmitting ? 'Securing Access...' : (
                            <>
                                Send Me The Blueprint Now!
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="flex items-center gap-2 text-gray-600 text-[10px] justify-center uppercase font-bold tracking-widest">
                    <Lock className="w-3 h-3" />
                    Your information is 100% secure
                </div>
            </div>
        </motion.div>

        {/* Social Proof */}
        <div className="pt-8 border-t border-white/5">
            <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">Trusted by 5,000+ Aspiring YouTubers</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-20 grayscale">
                <span className="text-xl md:text-2xl font-black tracking-tighter">YOUTUBE</span>
                <span className="text-xl md:text-2xl font-black tracking-tighter">ADSENSE</span>
                <span className="text-xl md:text-2xl font-black tracking-tighter">CREATOR STUDIO</span>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-700 text-[10px] text-center space-y-2 max-w-2xl uppercase tracking-widest font-medium">
        <p>&copy; {new Date().getFullYear()} 4K YT Watch Hours. All rights reserved.</p>
        <p className="leading-relaxed opacity-50">Disclaimer: This site is not a part of the YouTube website or Google Inc. Additionally, This site is NOT endorsed by YouTube in any way. YOUTUBE is a trademark of GOOGLE Inc.</p>
      </footer>
    </div>
  );
}
