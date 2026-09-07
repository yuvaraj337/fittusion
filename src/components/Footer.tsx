import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const [clickedItem, setClickedItem] = React.useState<string | null>(null);

  const handleComingSoon = (item: string) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 2000);
  };

  return (
    <footer className="relative w-full bg-[#050606] overflow-hidden pt-[80px] md:pt-[120px] pb-[24px] md:pb-[30px]">
      {/* Extremely subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[70%] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(199,240,0,0.015),transparent_60%)] pointer-events-none z-0" />

      {/* Decorative Oversized Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none z-0">
        <span className="font-syne font-extrabold text-[15vw] leading-none text-white opacity-[0.025] tracking-tighter select-none whitespace-nowrap">
          FITUSION
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        
        {/* Top Footer CTA */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-bold leading-[0.9] tracking-[-0.04em] text-[#F3F6D8] text-[clamp(42px,12vw,100px)] md:text-[clamp(48px,7vw,100px)] uppercase max-w-[1200px]"
          >
            Ready to Become<br />
            <span className="text-[#C7F000]">Your Strongest Self?</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12"
          >
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 bg-[#B8F000] text-[#050606] px-8 py-[18px] rounded-full font-bold text-[14px] md:text-[15px] tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_25px_rgba(184,240,0,0.25)]">
              <span>Start Training</span>
              <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-[5px]" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/[0.12] mb-12 md:mb-16" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-24">
          
          {/* Column 1: Brand */}
          <motion.div 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <button 
              type="button" 
              aria-label="Go to homepage"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="flex items-center gap-2 cursor-pointer group mb-6 bg-transparent border-none p-0 focus:outline-none"
            >
              {/* Abstract logo mark similar to navbar */}
              <div className="relative w-6 h-4 md:w-7 md:h-5 flex flex-col justify-between">
                <div className="h-[2px] md:h-[3px] w-full bg-[#C7F000] rounded-full"></div>
                <div className="h-[2px] md:h-[3px] w-full bg-[#C7F000] rounded-full -ml-1.5"></div>
                <div className="h-[2px] md:h-[3px] w-3/4 bg-[#C7F000] rounded-full -ml-0.5"></div>
              </div>
              <span className="text-[18px] md:text-[20px] font-extrabold tracking-tight text-[#C7F000]">
                FiTusion
              </span>
            </button>
            <p className="text-[#858878] text-[13px] md:text-[14px] leading-[1.6]">
              Train with purpose.<br />
              Build strength.<br />
              Become your strongest self.
            </p>
          </motion.div>

          {/* Column 2: Explore */}
          <motion.div 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-syne font-bold text-[#F3F6D8] text-[12px] uppercase tracking-[0.15em] mb-2">Explore</h4>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit cursor-pointer bg-transparent border-none p-0">Home</button>
            <a href="#about" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">About</a>
            <a href="#features" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Features</a>
            <a href="#pricing" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Service</a>
            <a href="#exercises" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Exercise</a>
          </motion.div>

          {/* Column 3: Training */}
          <motion.div 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-syne font-bold text-[#F3F6D8] text-[12px] uppercase tracking-[0.15em] mb-2">Training</h4>
            <a href="#exercises" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Strength</a>
            <a href="#exercises" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Hypertrophy</a>
            <a href="#exercises" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Conditioning</a>
            <a href="#exercises" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Mobility</a>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-syne font-bold text-[#F3F6D8] text-[12px] uppercase tracking-[0.15em] mb-2">Connect</h4>
            <button type="button" onClick={() => handleComingSoon('instagram')} className="group flex items-center gap-1 text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit cursor-pointer">
              {clickedItem === 'instagram' ? 'Coming Soon' : 'Instagram'} <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <button type="button" onClick={() => handleComingSoon('youtube')} className="group flex items-center gap-1 text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit cursor-pointer">
              {clickedItem === 'youtube' ? 'Coming Soon' : 'YouTube'} <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <a href="mailto:contact@fitusion.com" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Email</a>
            <a href="#contact" className="text-[#858878] text-[13px] hover:text-[#C7F000] transition-colors duration-300 w-fit">Contact</a>
          </motion.div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full h-[1px] bg-white/[0.08] mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[11px] md:text-[12px] tracking-wide">
          <p>© 2026 FiTusion. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button type="button" onClick={() => handleComingSoon('privacy')} className="hover:text-white transition-colors duration-300 cursor-pointer">
              {clickedItem === 'privacy' ? 'Coming Soon' : 'Privacy'}
            </button>
            <button type="button" onClick={() => handleComingSoon('terms')} className="hover:text-white transition-colors duration-300 cursor-pointer">
              {clickedItem === 'terms' ? 'Coming Soon' : 'Terms'}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
