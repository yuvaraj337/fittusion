import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';
import ContactModal from './ContactModal';

export default function CtaSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the athlete image
  const athleteY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion || isMobile ? 0 : -35]);

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative w-full min-h-[85vh] bg-[#050606] flex flex-col justify-center overflow-hidden py-[100px] md:py-[120px]"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(199,240,0,0.015),transparent_60%)] pointer-events-none z-0" />

      {/* Decorative Side Text */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-8 text-white/[0.02] font-syne font-bold text-[8vw] leading-none select-none pointer-events-none rotate-[-90deg] origin-center tracking-widest uppercase">
        Discipline
      </div>
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-8 text-white/[0.02] font-syne font-bold text-[8vw] leading-none select-none pointer-events-none rotate-[90deg] origin-center tracking-widest uppercase">
        Progress
      </div>

      {/* Athlete Silhouette */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 top-1/4 md:top-0 z-0 flex justify-center pointer-events-none opacity-40 md:opacity-35"
        style={{ y: athleteY }}
        initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src="/images/athlete.png" 
          alt="" 
          aria-hidden="true"
          className="object-contain object-bottom h-full max-w-none grayscale mix-blend-screen"
        />
      </motion.div>

      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#858878] font-syne text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase mb-8 md:mb-12"
        >
          Your Strongest Self Starts Here.
        </motion.div>

        {/* Main Heading */}
        <div className="flex flex-col items-center gap-1 md:gap-0 mb-16 md:mb-20">
          <h2 className="sr-only">Your Body. Your Discipline. Your Time. Make It Count.</h2>
          <div className="overflow-hidden">
            <motion.div 
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-bold text-[#F3F6D8] text-[clamp(44px,12vw,70px)] md:text-[clamp(60px,10vw,150px)] leading-[0.92] md:leading-[0.88] tracking-[-0.05em] uppercase"
              aria-hidden="true"
            >
              Your Body.
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div 
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-bold text-[#F3F6D8] text-[clamp(44px,12vw,70px)] md:text-[clamp(60px,10vw,150px)] leading-[0.92] md:leading-[0.88] tracking-[-0.05em] uppercase"
              aria-hidden="true"
            >
              Your Discipline.
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div 
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-bold text-[#F3F6D8] text-[clamp(44px,12vw,70px)] md:text-[clamp(60px,10vw,150px)] leading-[0.92] md:leading-[0.88] tracking-[-0.05em] uppercase"
              aria-hidden="true"
            >
              Your Time.
            </motion.div>
          </div>
          <div className="overflow-hidden mt-2 md:mt-4">
            <motion.div 
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne font-bold text-[#C7F000] text-[clamp(44px,12vw,70px)] md:text-[clamp(60px,10vw,150px)] leading-[0.92] md:leading-[0.88] tracking-[-0.05em] uppercase"
              aria-hidden="true"
            >
              Make It Count.
            </motion.div>
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <button 
            type="button"
            onClick={() => setContactModalOpen(true)}
            className="group relative flex items-center justify-center gap-3 bg-[#B8F000] text-[#080909] px-8 py-[18px] rounded-full font-bold text-[14px] md:text-[15px] tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_25px_rgba(184,240,0,0.25)]"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-[5px]" />
          </button>
          <a href="#exercises" className="text-[#858878] text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase hover:text-[#F3F6D8] transition-colors duration-300 flex items-center gap-2 group mt-2">
            <span>Explore Training</span>
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-col md:flex-row items-center gap-4 text-center md:text-left opacity-80"
        >
          <div className="flex -space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&auto=format&fit=crop" 
              alt="Member" 
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#050606] object-cover grayscale opacity-80"
            />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=100&auto=format&fit=crop" 
              alt="Member" 
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#050606] object-cover grayscale opacity-80 z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" 
              alt="Member" 
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#050606] object-cover grayscale opacity-80 z-20"
            />
          </div>
          <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#858878] leading-snug">
            12K+ Members<br/>
            Already Training With FiTusion
          </span>
        </motion.div>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </section>
  );
}
