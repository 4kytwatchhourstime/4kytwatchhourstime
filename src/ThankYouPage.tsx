/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYouPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/sales');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFD700] selection:text-black flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl w-full text-center space-y-12 relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200 }}
          className="flex justify-center"
        >
          <div className="bg-[#FFD700] p-6 rounded-full shadow-[0_0_50px_rgba(255,215,0,0.3)]">
            <CheckCircle2 className="w-16 h-16 text-black" />
          </div>
        </motion.div>

        {/* Main Message */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter"
          >
            SUCCESS!<br/> YOUR BLUEPRINT IS <span className="text-[#FFD700]">ON THE WAY!</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-center gap-3 text-[#FFD700]">
              <Mail className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase tracking-widest">Check Your Inbox</h2>
            </div>
            <p className="text-gray-400 text-lg">
              We've just sent the <span className="text-white font-bold">4,000 Watch Hours Blueprint</span> to your email. Please check your inbox (and spam folder) to download it.
            </p>
          </motion.div>
        </div>

        {/* Redirect Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3 text-gray-500 font-bold uppercase tracking-widest text-sm">
            <Loader2 className="w-5 h-5 animate-spin" />
            Redirecting to the next step in {countdown} seconds...
          </div>
          
          <button
            onClick={() => navigate('/sales')}
            className="inline-flex items-center gap-2 text-[#FFD700] hover:text-[#FFC400] font-bold transition-colors group"
          >
            Click here if you are not redirected automatically
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-xs mx-auto w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '66%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="bg-[#FFD700] h-full"
          ></motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-700 text-[10px] text-center space-y-2 max-w-2xl uppercase tracking-widest font-medium">
        <p>&copy; {new Date().getFullYear()} 4K YT Watch Hours. All rights reserved.</p>
      </footer>
    </div>
  );
}

