/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, AlertCircle, TrendingUp, Zap, Target, ArrowRight, ExternalLink, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WhyStuckPage() {
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
            className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-[0.2em] text-xs"
          >
            <AlertCircle className="w-4 h-4" />
            Troubleshooting Growth
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter"
          >
            Why You’re Not Getting <span className="text-[#FFD700]">4000 Watch Hours</span> on YouTube (And How to Fix It Fast)
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-500 text-sm border-b border-white/10 pb-8"
          >
            <span>Published March 20, 2026</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span>10 Min Read</span>
          </motion.div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-yellow max-w-none space-y-8 text-gray-300 text-lg leading-relaxed">
          <div className="space-y-4">
            <p>If your YouTube channel is stuck…</p>
            <p>And you still haven’t reached <strong className="text-white">4,000 watch hours</strong>…</p>
            <p>You are not alone.</p>
            <p>Thousands of creators struggle with the exact same problem.</p>
          </div>

          <p className="text-xl text-white font-medium">
            But here’s the truth:
          </p>

          <p className="bg-red-600/10 p-6 rounded-2xl border-l-4 border-red-600 text-white">
            <strong>It’s not your content. It’s your strategy.</strong>
          </p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">The Real Reason Your Watch Hours Are Stuck</h2>

          <p>Most creators believe they need:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>More videos</li>
            <li>Better editing</li>
            <li>More subscribers</li>
          </ul>

          <p>But that’s not the real issue.</p>
          <p>The real problem is this:</p>
          <p className="text-white font-bold text-2xl">
            Your videos are not generating enough watch time per viewer.
          </p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Zap className="text-[#FFD700] w-8 h-8" />
            YouTube Doesn’t Care About Upload Frequency
          </h2>

          <p>This is one of the biggest myths.</p>
          <p>YouTube does NOT reward:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Daily uploads</li>
            <li>Quantity of content</li>
          </ul>

          <p>YouTube rewards:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Watch duration</li>
            <li>Retention</li>
            <li>Total session time</li>
          </ul>

          <p>That’s why many small channels suddenly grow fast… While others stay stuck for months.</p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <BarChart3 className="text-[#FFD700] w-8 h-8" />
            The Watch Time Gap Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
              <h4 className="text-[#FFD700] font-bold mb-4 uppercase tracking-widest text-sm">Scenario A (Short Video)</h4>
              <p className="text-sm mb-4">10-minute video. 3-minute average watch. 100 views.</p>
              <div className="text-2xl font-black text-red-500">300 Minutes</div>
              <p className="text-xs text-gray-500 mt-2">Only 5 watch hours.</p>
            </div>
            <div className="bg-[#FFD700]/5 p-6 rounded-2xl border border-[#FFD700]/20">
              <h4 className="text-[#FFD700] font-bold mb-4 uppercase tracking-widest text-sm">Scenario B (Long Video)</h4>
              <p className="text-sm mb-4">90-minute video. 30-minute average watch. 100 views.</p>
              <div className="text-2xl font-black text-[#FFD700]">3,000 Minutes</div>
              <p className="text-xs text-gray-500 mt-2">50 watch hours. <span className="text-white font-bold">10X Difference.</span></p>
            </div>
          </div>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">Why Most Creators Never Reach 4000 Watch Hours</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">1. Videos Are Too Short</h3>
              <p>Short videos limit your total watch time potential.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">2. Low Retention Content</h3>
              <p>People click… but leave quickly.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">3. Wrong Content Type</h3>
              <p>Some content types are not built for long viewing sessions.</p>
            </div>
          </div>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">How to Fix It (The Smart Way)</h2>
          <p>You don’t need to work harder. You need to work smarter.</p>

          <div className="space-y-8 mt-8">
            <div className="flex gap-6 items-start">
              <div className="bg-[#FFD700] text-black w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-white">Switch to Long-Form Content</h3>
                <p>Create videos that are at least 60–90 minutes long.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#FFD700] text-black w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-white">Focus on “Background Content”</h3>
                <p>Content people can play while doing other things.</p>
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Music playlists</li>
                  <li>Relaxation videos</li>
                  <li>Compilation content</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#FFD700] text-black w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-white">Increase Retention Naturally</h3>
                <p>Choose content that people don’t skip.</p>
              </div>
            </div>
          </div>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">The Fastest Way to Reach 4000 Watch Hours</h2>
          <p>If your goal is speed… You need a system. Not random uploads. Not guessing.</p>

          <div className="bg-gradient-to-r from-[#FFD700] to-orange-500 p-1 rounded-3xl mt-12">
            <div className="bg-black p-8 md:p-12 rounded-[1.4rem] text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-white">👉 The System That Changes Everything</h2>
              <p className="text-gray-400">There is a simple method that focuses on:</p>
              <ul className="text-left max-w-xs mx-auto space-y-3 font-bold text-white">
                <li className="flex items-center gap-3"><Target className="text-[#FFD700] w-5 h-5" /> High-retention video structure</li>
                <li className="flex items-center gap-3"><Target className="text-[#FFD700] w-5 h-5" /> Long-duration content</li>
                <li className="flex items-center gap-3"><Target className="text-[#FFD700] w-5 h-5" /> Simple tools (beginner-friendly)</li>
              </ul>
              
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#FFD700] text-black font-black py-4 px-8 rounded-xl text-xl uppercase tracking-tighter hover:bg-[#FFC400] transition-all group"
              >
                Learn The Full System
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                <ExternalLink className="inline-block w-3 h-3 mr-1" /> 4kytwatchhours.vercel.app
              </p>
            </div>
          </div>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">What Happens When You Apply the Right Strategy</h2>
          <p>Instead of slow growth… You may start to see:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Higher watch duration</li>
            <li>More consistent views</li>
            <li>Algorithm testing your content</li>
          </ul>
          <p>And when that happens… <strong className="text-white">Your watch hours grow much faster.</strong></p>

          <hr className="border-white/10" />

          <h2 className="text-3xl font-black text-white tracking-tight">Final Thoughts</h2>
          <p>Getting 4,000 watch hours is not about luck. It’s about using the right approach. Most creators stay stuck because they follow outdated advice. You don’t have to.</p>

          <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/10 text-center space-y-8">
            <h2 className="text-3xl font-black text-white">Your Next Step</h2>
            <p className="text-xl font-bold text-white">If you are serious about fixing your watch hours problem:</p>
            <button 
              onClick={() => navigate('/')}
              className="text-[#FFD700] text-2xl font-black underline decoration-4 underline-offset-8 hover:text-white transition-colors"
            >
              Access the complete step-by-step system here
            </button>
          </div>

          {/* Related Article Link */}
          <div className="pt-12 border-t border-white/5">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Related Reading</h4>
            <a 
              href="/how-to-get-4000-watch-hours" 
              className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#FFD700]/30 transition-all group"
            >
              <div className="space-y-1">
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">Guide</p>
                <p className="text-lg font-bold text-white">How to Get 4000 Watch Hours on YouTube (Fast & Beginner Friendly)</p>
              </div>
              <ChevronLeft className="w-6 h-6 rotate-180 text-gray-600 group-hover:text-[#FFD700] transition-colors" />
            </a>
          </div>
        </article>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 text-gray-700 text-[10px] text-center space-y-4 uppercase tracking-widest font-medium">
          <div className="flex flex-wrap justify-center gap-6 font-bold">
            <a href="/" className="hover:text-[#FFD700] transition-colors">Get 4000 Watch Hours</a> | <a href="/sales" className="hover:text-[#FFD700] transition-colors">Salespage</a> | <a href="/jvzoo" className="hover:text-[#FFD700] transition-colors">JVZoo</a> | <a href="/how-to-get-4000-watch-hours" className="hover:text-[#FFD700] transition-colors">How-To Guide</a> | <a href="/why-watch-hours-stuck" className="hover:text-[#FFD700] transition-colors">Troubleshooting</a>
          </div>
          <p>&copy; {new Date().getFullYear()} 4K YT Watch Hours. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
