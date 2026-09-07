import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useIsMobile } from '../hooks/useIsMobile';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "ASSESS",
    desc: "Understand your current fitness level, goals, strengths, and limitations."
  },
  {
    num: "02",
    title: "PLAN",
    desc: "Build a structured training approach around your specific objective."
  },
  {
    num: "03",
    title: "TRAIN",
    desc: "Follow focused workouts with clear exercises, sets, and progression."
  },
  {
    num: "04",
    title: "PROGRESS",
    desc: "Track meaningful improvements and adapt your training over time."
  }
];

const FeatureStep: React.FC<{ 
  step: { num: string; title: string; desc: string; }; 
  i: number; 
  scrollYProgress: any; 
  reducedMotion: boolean | null; 
}> = ({ 
  step, 
  i, 
  scrollYProgress, 
  reducedMotion 
}) => {
  // Calculate activation range for each step (0 to 0.25, 0.25 to 0.5, etc.)
  const stepStart = i * 0.25;
  
  // Map progress to opacity/color
  const numColor = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.1],
    ["rgba(255,255,255,0.03)", "rgba(199,240,0,0.6)"]
  );
  const titleColor = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.1],
    ["rgba(243,246,216,0.5)", "rgba(243,246,216,1)"]
  );

  return (
    <motion.div 
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: reducedMotion ? 0 : i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex md:flex-col items-start gap-8 md:gap-0 pl-16 md:pl-0"
    >
      {/* Large Number */}
      <motion.div 
        className="absolute left-0 top-[-20px] md:relative md:top-0 md:mb-12 font-syne font-extrabold leading-[0.8] tracking-tighter text-[clamp(60px,8vw,120px)] transition-all duration-300 pointer-events-none md:text-left"
        style={reducedMotion ? { color: "rgba(199,240,0,0.6)" } : { color: numColor }}
      >
        {step.num}
      </motion.div>

      {/* Content */}
      <div className="flex-1 md:pt-4">
        <motion.h3 
          className="font-syne font-bold text-[clamp(24px,2.5vw,38px)] uppercase tracking-[-0.02em] mb-4 transition-transform duration-300 group-hover:translate-y-[-3px]"
          style={reducedMotion ? { color: "#F3F6D8" } : { color: titleColor }}
        >
          {step.title}
        </motion.h3>
        <p className="text-[#858878] text-[15px] md:text-[16px] leading-[1.6] opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-[260px]">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"]
  });

  return (
    <section id="features" ref={sectionRef} className="w-full bg-[#080909] relative z-10 py-[120px] md:py-[160px] px-6 lg:px-12 xl:px-24 min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <motion.header
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32"
        >
          <div className="text-[#C7F000] font-syne text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">
            How FiTusion Works
          </div>
          <h2 className="font-syne font-bold leading-[0.95] tracking-[-0.04em] text-[#F3F6D8] text-[clamp(54px,7vw,100px)] mb-6 md:mb-8 max-w-[900px]">
            Train With <span className="text-[#C7F000]">Intelligence.</span>
          </h2>
          <p className="text-[#858878] text-[15px] md:text-[18px] leading-[1.6] max-w-[520px]">
            From your first goal to every measurable improvement, FiTusion turns training into a focused system.
          </p>
        </motion.header>

        {/* Timeline Area */}
        <div className="relative">
          {/* Desktop Connecting Line (Background) */}
          <div className="hidden md:block absolute top-[60px] left-[40px] right-[40px] h-[1px] bg-white/5 z-0" />
          
          {/* Desktop Connecting Line (Active) */}
          <motion.div 
            className="hidden md:block absolute top-[60px] left-[40px] right-[40px] h-[1px] bg-[#C7F000] z-0 origin-left"
            style={reducedMotion ? { scaleX: 1 } : { scaleX: scrollYProgress }}
          />

          {/* Mobile Connecting Line (Background) */}
          <div className="md:hidden absolute top-[40px] bottom-[40px] left-[24px] w-[1px] bg-white/5 z-0" />

          {/* Mobile Connecting Line (Active) */}
          <motion.div 
            className="md:hidden absolute top-[40px] bottom-[40px] left-[24px] w-[1px] bg-[#C7F000] z-0 origin-top"
            style={reducedMotion ? { scaleY: 1 } : { scaleY: scrollYProgress }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <FeatureStep
                key={step.num}
                step={step}
                i={i}
                scrollYProgress={scrollYProgress}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-32 flex justify-start md:justify-end">
          <motion.a 
            href="#contact" 
            className="group flex items-center gap-3 text-[#F3F6D8] text-[12px] font-syne font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#C7F000]"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="transition-colors duration-300 group-hover:text-[#C7F000]">Start Your Journey</span>
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-[6px] text-[#C7F000]" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
