/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Youtube, Clock, Zap, Target, ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ArticlePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFD700] selection:text-black flex flex-col items-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl w-full space-y-12 relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FFD700] transition-colors font-bold uppercase tracking-widest text-xs group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Article Header */}
        <header className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-[0.2em] text-xs"
          >
            <Youtube className="w-4 h-4" />
            YouTube Growth Strategy
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter"
          >
            How to Get <span className="text-[#FFD700]">4000 Watch Hours</span> on YouTube (Fast & Beginner Friendly)
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-500 text-sm border-b border-white/10 pb-8"
          >
            <span>Published March 20, 2026</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span>8 Min Read</span>
          </motion.div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-yellow max-w-none space-y-8 text-gray-300 text-lg leading-relaxed">
          <p className="text-xl text-white font-medium">
            If you're trying to monetize your YouTube channel, you've probably realized one thing:
          </p>

          <p className="bg-[#111] p-6 rounded-2xl border-l-4 border-[#FFD700] text-white">
            <strong>Getting 4,000 watch hours is the hardest part.</strong>
          </p>

          <p>
            This is where most creators get stuck — not because they lack talent, but because they use the wrong strategy.
          </p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <XCircle className="text-red-500 w-8 h-8" />
            Why Most People Fail to Get 4000 Watch Hours
          </h2>

          <p>Let’s be honest.</p>
          <p>Most creators focus on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uploading more videos</li>
            <li>Chasing subscribers</li>
            <li>Hoping for viral content</li>
          </ul>

          <p>But YouTube doesn’t reward effort alone.</p>
          <p className="text-white font-bold text-2xl">
            YouTube rewards watch time.
          </p>
          <p>That means:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>How long people stay on your video</li>
            <li>How much total time they watch</li>
          </ul>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Clock className="text-[#FFD700] w-8 h-8" />
            How to Get 4000 Watch Hours on YouTube
          </h2>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#FFD700] uppercase tracking-widest">1. Focus on Watch Time (Not Views)</h3>
            <p>Views don’t matter if people leave early. Watch time is the real metric that drives growth.</p>

            <h3 className="text-xl font-bold text-[#FFD700] uppercase tracking-widest">2. Create Long-Duration Content</h3>
            <p>A 10-minute video limits your growth. A 90-minute video multiplies your watch hour potential.</p>

            <h3 className="text-xl font-bold text-[#FFD700] uppercase tracking-widest">3. Use High-Retention Content Types</h3>
            <p>The best types include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Music playlists</li>
              <li>Compilation videos</li>
              <li>Relaxing long-form content</li>
            </ul>
            <p>These formats naturally keep people watching longer.</p>
          </div>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Zap className="text-[#FFD700] w-8 h-8" />
            How to Get 4000 Watch Hours on YouTube Fast
          </h2>

          <p>If your goal is speed, you need a different approach.</p>
          
          <div className="bg-[#111] p-8 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">The Fast Strategy</h3>
            <p>Instead of uploading many short videos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create fewer but longer videos</li>
              <li>Focus on retention</li>
              <li>Use content people let play for long periods</li>
            </ul>
          </div>

          <p>This increases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Average watch duration</li>
            <li>Total session time</li>
            <li>Algorithm exposure</li>
          </ul>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Target className="text-[#FFD700] w-8 h-8" />
            The Key Insight Most Creators Miss
          </h2>

          <p className="text-2xl text-white font-black italic">
            "You don’t need many videos. You need the right type of video."
          </p>

          <p>One optimized video can generate more watch hours than dozens of regular uploads.</p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">Real Possibility (Not Theory)</h2>
          <p>Many creators experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rapid watch hour growth</li>
            <li>Algorithm testing their content</li>
            <li>Sudden spikes in traffic</li>
          </ul>
          <p>This is not guaranteed. But it becomes much more likely when you use the right structure.</p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">The Smarter Way to Reach 4000 Watch Hours</h2>
          <p>If you want to stop guessing and start executing a proven structure:</p>
          <p className="text-white font-bold text-2xl uppercase tracking-tighter">You need a clear system.</p>

          <div className="bg-gradient-to-r from-[#FFD700] to-orange-500 p-1 rounded-3xl mt-12">
            <div className="bg-black p-8 md:p-12 rounded-[1.4rem] text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-white">👉 Learn the Exact System (Step-by-Step)</h2>
              <p className="text-gray-400">This is the same type of approach used to:</p>
              <ul className="text-left max-w-xs mx-auto space-y-3 font-bold text-white">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#FFD700] w-5 h-5" /> Generate high-retention videos</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#FFD700] w-5 h-5" /> Maximize watch time</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#FFD700] w-5 h-5" /> Reach monetization faster</li>
              </ul>
              
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black py-4 px-8 rounded-xl text-xl uppercase tracking-tighter hover:bg-[#FFC400] transition-all group"
              >
                Access The Full System
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                <ExternalLink className="inline-block w-3 h-3 mr-1" /> 4kytwatchhours.vercel.app
              </p>
            </div>
          </div>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">Final Thoughts</h2>
          <p>Getting 4,000 watch hours is not about luck. It’s about:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strategy</li>
            <li>Structure</li>
            <li>Execution</li>
          </ul>
          <p>Most creators stay stuck because they follow outdated advice. Now you know a smarter path.</p>

          <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/10 text-center space-y-8">
            <h2 className="text-3xl font-black text-white">Your Next Step</h2>
            <p className="text-gray-400">You have two choices:</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-bold uppercase tracking-widest">
              <div className="bg-black/50 px-6 py-3 rounded-full border border-white/5">Keep guessing</div>
              <div className="bg-[#FFD700]/10 text-[#FFD700] px-6 py-3 rounded-full border border-[#FFD700]/20">Use a proven system</div>
            </div>
            <p className="text-xl font-bold text-white">If you’re serious about reaching 4,000 watch hours faster:</p>
            <button 
              onClick={() => navigate('/')}
              className="text-[#FFD700] text-2xl font-black underline decoration-4 underline-offset-8 hover:text-white transition-colors"
            >
              Access the full system here
            </button>
          </div>
        </article>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 text-gray-700 text-[10px] text-center space-y-4 uppercase tracking-widest font-medium">
          <div className="flex justify-center gap-6 font-bold">
            <a href="/" className="hover:text-[#FFD700] transition-colors">Get 4000 Watch Hours</a> | <a href="/sales" className="hover:text-[#FFD700] transition-colors">Salespage</a> | <a href="/jvzoo" className="hover:text-[#FFD700] transition-colors">JVZoo</a> | <a href="/how-to-get-4000-watch-hours" className="hover:text-[#FFD700] transition-colors">How-To Guide</a> | <a href="/why-watch-hours-stuck" className="hover:text-[#FFD700] transition-colors">Troubleshooting</a>
          </div>
          <p>&copy; {new Date().getFullYear()} 4K YT Watch Hours. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

function XCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
