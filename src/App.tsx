/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Timer,
  ArrowUp
} from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#FFD700] text-black p-4 rounded-full shadow-2xl hover:bg-[#FFC400] transition-colors group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="flex flex-col items-center">
        <div className="bg-[#FFD700] text-black text-3xl md:text-4xl font-black p-3 rounded-lg min-w-[60px] md:min-w-[80px]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-[10px] uppercase font-bold mt-1 text-gray-500">Minutes</span>
      </div>
      <div className="text-3xl md:text-4xl font-black text-[#FFD700] mb-6">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-[#FFD700] text-black text-3xl md:text-4xl font-black p-3 rounded-lg min-w-[60px] md:min-w-[80px]">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-[10px] uppercase font-bold mt-1 text-gray-500">Seconds</span>
      </div>
    </div>
  );
};

const Button = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`bg-[#FFD700] hover:bg-[#FFC400] text-black font-black py-6 px-8 rounded-lg text-2xl md:text-3xl uppercase tracking-tighter shadow-[0_10px_0_0_#B8860B] active:shadow-none active:translate-y-[10px] transition-all transform hover:scale-105 ${className}`}
  >
    {children}
  </button>
);

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 px-4 md:px-8 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Top Bar Warning */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold text-sm md:text-base uppercase tracking-widest">
        WARNING: Do not read this if you are not serious about monetizing your YouTube channel
      </div>

      {/* Hero Section */}
      <Section className="text-center pt-12 pb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#FFD700] font-bold text-xl md:text-2xl mb-6 uppercase tracking-tight"
        >
          ATTENTION YOUTUBERS WHO HAVE REACHED 1,000 SUBSCRIBERS BUT WATCH TIME IS STILL STUCK...
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
        >
          There is a simple way to reach <span className="text-[#FFD700]">4,000 watch hours</span>... even from just 1 video.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 relative inline-block"
        >
          <div className="absolute -inset-4 bg-[#FFD700]/20 blur-3xl rounded-full"></div>
          <img 
            src="../4k_yt_watch_hours_bundle.jpg" 
            alt="4000 YouTube Watch Hours Time" 
            className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-lg md:text-xl font-medium text-gray-400 mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <XCircle className="text-red-500 w-5 h-5" /> No daily uploads required
          </div>
          <div className="flex items-center justify-center gap-2">
            <XCircle className="text-red-500 w-5 h-5" /> No viral videos needed
          </div>
          <div className="flex items-center justify-center gap-2">
            <XCircle className="text-red-500 w-5 h-5" /> No massive subscriber base needed
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.6 }}
        >
          <Button className="w-full md:w-auto">
            GET THE EBOOK NOW <ChevronRight className="inline-block ml-2 w-8 h-8" />
          </Button>
        </motion.div>
      </Section>

      {/* The Pain Section */}
      <div className="bg-[#111] border-y border-white/10">
        <Section className="py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                If you open your <span className="text-red-600">YouTube Studio</span> right now...
              </h3>
              <p className="text-xl text-gray-400">
                And you see something like this:
              </p>
              
              <div className="bg-black p-8 rounded-2xl border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-xl font-bold">Subscribers: 1,000</span>
                  <CheckCircle2 className="text-emerald-500 w-8 h-8" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-red-500/30">
                  <span className="text-xl font-bold text-red-500">Watch time: Still far from 4,000</span>
                  <XCircle className="text-red-500 w-8 h-8" />
                </div>
              </div>

              <p className="text-2xl font-bold italic text-[#FFD700]">
                "You are not alone. Thousands of YouTubers are experiencing the same thing."
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-300">
              <p>And this is very painful... Because without 4,000 watch hours, <span className="text-white font-bold">YouTube will never pay you.</span></p>
              <div className="h-px bg-white/10 w-full my-8" />
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">This is a brutal reality that is rarely talked about…</h4>
              <p>Many YouTubers upload dozens… even hundreds of videos… and still fail to reach 4,000 watch hours.</p>
              <p>They waste months… even years… <span className="text-red-500 font-bold">with no results.</span></p>
            </div>
          </div>
        </Section>
      </div>

      {/* The Contrast Section */}
      <Section className="py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-2xl md:text-3xl font-medium text-gray-400">Meanwhile...</h3>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            There are small channels, few subscribers, few videos... but they manage to reach <span className="text-[#FFD700]">4,000 watch hours quickly.</span>
          </h2>
          <p className="text-3xl font-bold">Why? Because they know this.</p>
          
          <div className="pt-12">
            <div className="inline-block p-1 bg-gradient-to-r from-[#FFD700] to-orange-500 rounded-2xl">
              <div className="bg-[#0A0A0A] px-8 py-12 rounded-xl border border-white/5">
                <p className="text-2xl md:text-3xl font-bold mb-4">They use a method that is almost never discussed.</p>
                <ul className="text-xl text-gray-400 space-y-4">
                  <li>• Simple method</li>
                  <li>• A method that even a 10-year-old can do</li>
                  <li>• A method that is more copy-paste than thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Product Reveal */}
      <div className="bg-[#FFD700] text-black py-24">
        <Section className="text-center">
          <h4 className="text-2xl font-bold mb-4 uppercase tracking-widest">And now that method is in this ebook:</h4>
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-none tracking-tighter">
            FAST WAY TO GENERATE 4,000 WATCH HOURS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-left items-center">
            <div className="md:col-span-1 bg-black/5 p-8 rounded-2xl border border-black/10">
              <h3 className="text-3xl font-black mb-8 underline decoration-4 underline-offset-8">Inside, you will find:</h3>
              <ul className="space-y-6 text-xl font-bold">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 mt-1 flex-shrink-0" />
                  <span>8 Simple Steps You Can Follow Today</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 mt-1 flex-shrink-0" />
                  <span>No experience & special skills required</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 mt-1 flex-shrink-0" />
                  <span>No expensive tools (100% free tools)</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1 flex justify-center">
              <img 
                src="../ebook_4k_yt_watch_hours.png" 
                alt="4000 YouTube Watch Hours Time" 
                className="w-full max-w-sm rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="md:col-span-1 space-y-8">
              <h3 className="text-3xl font-black">This method works even if:</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "You only have 10 subscribers",
                  "You have 0 subscribers",
                  "You are a total beginner YouTuber",
                  "You are not good at editing",
                  "You have never gone viral"
                ].map((item, i) => (
                  <div key={i} className="bg-black text-white p-4 rounded-lg font-bold flex items-center gap-3">
                    <Zap className="text-[#FFD700] w-5 h-5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* The "Crazy" Part */}
      <Section className="py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">And here's the craziest part…</h2>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
            You have the potential to reach 4,000 watch hours… <span className="text-white font-bold underline decoration-[#FFD700]">with just 1 video.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 text-center">
          {[
            { label: "100 Hours", color: "bg-white/5" },
            { label: "500 Hours", color: "bg-white/10" },
            { label: "1,000 Hours", color: "bg-white/20" },
            { label: "3,000 Hours", color: "bg-[#FFD700] text-black" }
          ].map((step, i) => (
            <motion.div 
              key={i}
              whileInView={{ scale: [0.9, 1.05, 1] }}
              className={`${step.color} p-12 rounded-2xl font-black text-3xl flex flex-col items-center justify-center gap-4`}
            >
              <TrendingUp className="w-10 h-10" />
              {step.label}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-8">
          <p className="text-3xl font-bold italic">"Until finally… 4,000 hours are reached. And monetization is unlocked."</p>
          <h3 className="text-4xl md:text-6xl font-black">Your channel can make money.</h3>
          <p className="text-xl text-gray-400">And not only that… Once you know how… you can even help other channels… and get paid to increase their watch time.</p>
        </div>
      </Section>

      {/* Pricing & Offer */}
      <div className="bg-[#111] border-t border-white/10 py-32">
        <Section className="text-center">
          <div className="max-w-4xl mx-auto bg-black p-12 rounded-[3rem] border-4 border-[#FFD700] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FFD700] text-black px-8 py-2 font-black rotate-45 translate-x-8 translate-y-4">
              BEST DEAL
            </div>
            
            <h3 className="text-2xl text-gray-500 line-through mb-2">Normal Price of This Ebook is $47</h3>
            <p className="text-lg text-gray-400 mb-8 italic">And that's still cheap... because 4,000 watch hours can unlock long-term income.</p>
            
            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
              <p className="text-[#FFD700] font-black uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <Timer className="w-5 h-5" /> Special Offer Ends In:
              </p>
              <CountdownTimer />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">But today you don't have to pay $47</h2>
            <p className="text-xl mb-8">You can get it now for only:</p>
            
            <div className="text-7xl md:text-9xl font-black text-[#FFD700] mb-8 tracking-tighter">
              $9
            </div>

            <div className="mb-12">
              <img 
                src="../4k_yt_watch_hours_bundle.jpg" 
                alt="4000 YouTube Watch Hours Time" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>

            <Button className="w-full mb-8">
              GET THE EBOOK NOW
            </Button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-left border-t border-white/10 pt-12">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-16 h-16 text-emerald-500" />
                <div>
                  <h4 className="font-black text-xl">100% RISK-FREE</h4>
                  <p className="text-gray-400">If you are not satisfied, you can ask for a refund. No questions asked.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-red-900/20 border border-red-500/50 p-8 rounded-2xl flex items-start gap-6 text-left">
            <AlertTriangle className="text-red-500 w-12 h-12 flex-shrink-0" />
            <div>
              <h4 className="font-black text-xl text-red-500 uppercase">ATTENTION:</h4>
              <p className="text-gray-300">This price can go up at any time. And after you close this page… the price might not be the same again.</p>
            </div>
          </div>
        </Section>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#0A0A0A] border-t border-white/10 py-24">
        <Section>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 tracking-tighter">
            FREQUENTLY ASKED <span className="text-[#FFD700]">QUESTIONS</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                q: "What exactly is inside the ebook?",
                a: "It contains a step-by-step 8-step blueprint to reach 4,000 watch hours using free tools and a specific content strategy that doesn't require daily uploads or viral luck."
              },
              {
                q: "How will I receive the ebook after purchase?",
                a: "Immediately after your payment is confirmed, you will receive a download link via email. You can access it on any device including your phone, tablet, or computer."
              },
              {
                q: "How long does it take to see results?",
                a: "While results vary, many users start seeing a significant increase in watch time within the first 14-30 days of implementing the strategy correctly."
              },
              {
                q: "Is this method safe for my YouTube channel?",
                a: "Yes, 100%. We do not use bots, fake views, or any 'black hat' techniques. The method is based on organic content optimization and leveraging YouTube's algorithm naturally."
              },
              {
                q: "Do I need to buy any additional tools or software?",
                a: "No. The entire strategy is designed to work with 100% free tools that are available to everyone. You won't need to spend a single extra penny."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#FFD700]/30 transition-colors group">
                <h4 className="text-xl md:text-2xl font-bold mb-4 flex items-start gap-3">
                  <span className="text-[#FFD700] font-black">Q:</span> {faq.q}
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  <span className="text-white font-bold">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Final CTA */}
      <Section className="py-32 text-center">
            <div className="mb-12">
              <img 
                src="../4k_yt_watch_hours_bundle.jpg" 
                alt="4000 YouTube Watch Hours Time" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>
        <h2 className="text-4xl md:text-6xl font-black mb-12">The choice is in your hands.</h2>
        <div className="space-y-8 text-xl text-gray-400 max-w-2xl mx-auto mb-16">
          <p>Click the Button Below Now and start chasing your 4,000 watch hours today.</p>
          <p>Or you can close this page… and stay in the same position 6 months from now.</p>
        </div>
        
        <Button className="w-full md:w-auto px-16">
          GET THE EBOOK NOW
        </Button>
        
        <div className="mt-24 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} 4K YT Watch Hours. All rights reserved.
          <br />
          Disclaimer: Results are not guaranteed and may vary from person to person depending on your effort, consistency, skills, experience, and how effectively you apply the methods described in this ebook; this ebook is intended for educational purposes only and does not promise or guarantee specific results. Results may vary. Hard work is still required.
        </div>
      </Section>

      <ScrollToTop />
    </div>
  );
}
