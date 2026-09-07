import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useIsMobile } from '../hooks/useIsMobile';
import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: "12K+", label: "ACTIVE MEMBERS" },
  { value: "94%", label: "CONSISTENCY RATE" },
  { value: "18K+", label: "WORKOUTS COMPLETED" }
];

const secondaryTestimonials = [
  { num: "02", name: "PRIYA S.", quote: "“Training finally feels structured instead of overwhelming.”" },
  { num: "03", name: "DANIEL R.", quote: "“The biggest difference is knowing exactly what to do next.”" },
  { num: "04", name: "MAYA K.", quote: "“I've stayed consistent longer than ever.”" }
];

export default function TestimonialsSection() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-10px", "10px"]);

  // Subtle CSS noise for the placeholder
  const noiseBg = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#080909] relative z-10 py-[90px] md:py-[160px] px-6 lg:px-12 xl:px-24 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#C7F000] font-syne text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8"
          >
            Real Progress
          </motion.div>
          
          <motion.h2
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-bold leading-[0.95] tracking-[-0.04em] text-[#F3F6D8] text-[clamp(52px,7vw,96px)] mb-6 md:mb-8"
          >
            Built Through<br />
            <span className="text-[#C7F000]">Discipline.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#858878] text-[15px] md:text-[16px] leading-[1.6] max-w-[480px]"
          >
            Thousands of members are building stronger bodies, better habits, and measurable progress with FiTusion.
          </motion.p>
        </div>

        {/* Featured Testimonial Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-20 md:mb-32">
          
          {/* Left Side: Testimonial Text */}
          <motion.div 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-center"
          >
            <motion.div style={!isMobile && !reducedMotion ? { y: textY } : {}}>
              <h3 className="font-syne font-bold text-[clamp(30px,4vw,58px)] leading-[1.05] tracking-[-0.02em] text-[#F3F6D8]">
                “Consistency changed everything. I stopped guessing and started progressing.”
              </h3>
              
              <div className="mt-12 md:mt-16 flex flex-row items-end justify-between border-t border-white/10 pt-8">
                <div>
                  <h4 className="font-syne font-bold text-[#F3F6D8] text-[15px] md:text-[18px] uppercase tracking-wide">ALEX MORGAN</h4>
                  <p className="text-[#858878] text-[13px] md:text-[14px] mt-1">Strength Program</p>
                </div>
                <div className="text-right">
                  <div className="font-syne font-bold text-[#C7F000] text-[24px] md:text-[32px] leading-none">+18%</div>
                  <div className="text-[#858878] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mt-2">STRENGTH</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Placeholder */}
          <motion.div 
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-[45%] lg:w-[42%] aspect-[3/4] md:aspect-[4/5] relative group overflow-hidden rounded-sm"
          >
            {/* Inner wrapper for image parallax & hover scale */}
            <motion.div 
              className="absolute inset-0 w-full h-full transform-gpu transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
              style={!isMobile && !reducedMotion ? { y: imageY, scale: 1.1 } : {}}
            >
              {/* Ultra Premium Visual Placeholder */}
              <div className="relative w-full h-full bg-[#050606]">
                {/* Dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050606] via-[#0B0D0C] to-[#121614] z-0" />
                {/* SVG Noise Texture */}
                <div className="absolute inset-0 z-10 mix-blend-overlay" style={noiseBg} />
                {/* Subtle Lime Accent Glow */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_top_right,rgba(199,240,0,0.04),transparent_70%)] z-0 pointer-events-none" />
                {/* Subtle border to frame it */}
                <div className="absolute inset-0 border border-white/5 z-20 pointer-events-none" />
                
                {/* Stylized Initial or Monogram */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="font-syne font-extrabold text-[140px] md:text-[180px] text-white/[0.03] tracking-tighter select-none">
                    AM
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-6 py-12 md:py-16 border-t border-b border-white/10 mb-16 md:mb-20"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col gap-3 md:gap-4 md:items-start text-center md:text-left">
              <span className="font-syne font-bold text-[clamp(38px,5vw,64px)] text-[#F3F6D8] leading-[0.9] tracking-tight">
                {metric.value}
              </span>
              <span className="text-[#858878] text-[10px] md:text-[12px] font-bold tracking-[0.15em] uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Secondary Testimonials */}
        <div className="flex flex-col">
          {secondaryTestimonials.map((test, i) => (
            <motion.a
              href="#contact"
              key={test.num}
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.4 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 md:py-10 border-b border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center gap-6 md:w-[240px] shrink-0">
                <span className="text-[#858878] font-syne font-bold text-[13px] tracking-widest transition-colors duration-400 group-hover:text-[#C7F000]">
                  {test.num}
                </span>
                <span className="text-[#F3F6D8] font-syne font-bold tracking-wide uppercase text-[15px]">
                  {test.name}
                </span>
              </div>
              <p className="text-[#858878] text-[16px] md:text-[18px] leading-[1.5] flex-1 transition-colors duration-400 group-hover:text-white/90">
                {test.quote}
              </p>
              <div className="text-white/20 transition-all duration-400 group-hover:text-[#C7F000] md:group-hover:translate-x-[6px] hidden md:block">
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
