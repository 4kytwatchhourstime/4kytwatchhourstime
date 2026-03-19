/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Info, Users, Target, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFD700] selection:text-black flex flex-col items-center px-4 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-[#FFD700] p-6 rounded-full shadow-[0_0_50px_rgba(255,215,0,0.2)]">
              <Info className="w-12 h-12 text-black" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            ABOUT <span className="text-[#FFD700]">ME</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
          >
            Empowering the next generation of YouTube Creators to break through the 4,000-hour barrier.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-3 text-[#FFD700]">
              <Target className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase tracking-widest">Our Mission</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              My mission is simple: To provide creators with the exact blueprint needed to reach 4,000 watch hours without the burnout. I believe monetization shouldn't be a mystery, but a milestone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-3 text-[#FFD700]">
              <Users className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase tracking-widest">Who I Am</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I am not an expert, not a seasoned content creator, and not an experienced YouTuber. I am simply a beginner who happened to discover a simple way to reach 4,000 watch hours faster and easier.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-b from-[#111] to-transparent p-12 rounded-[3rem] border border-white/10 text-center space-y-8"
        >
          <h3 className="text-3xl font-black tracking-tight">WHY WE DO IT</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We saw too many talented creators giving up just before the finish line. The "4,000-hour wall" is where most dreams go to die. We created this blueprint to ensure that your voice gets heard and your hard work gets rewarded.
          </p>
        </motion.div>

        {/* Back Button */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all group border border-white/10"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-700 text-[10px] text-center space-y-2 max-w-2xl uppercase tracking-widest font-medium">
        <p>&copy; {new Date().getFullYear()} 4K YT Watch Hours. All rights reserved.</p>
      </footer>
    </div>
  );
}
