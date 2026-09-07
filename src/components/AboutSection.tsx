import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Activity, Target, TrendingUp, RefreshCw } from 'lucide-react';

const features = [
  {
    num: "01",
    title: "SMART TRAINING",
    desc: "Train with structured workouts designed around your goals.",
    icon: <Activity size={18} strokeWidth={2.5} />
  },
  {
    num: "02",
    title: "PERSONALIZED WORKOUTS",
    desc: "Experience routines adapted perfectly to your fitness level.",
    icon: <Target size={18} strokeWidth={2.5} />
  },
  {
    num: "03",
    title: "REAL PROGRESS",
    desc: "Track meaningful metrics that prove your continuous improvement.",
    icon: <TrendingUp size={18} strokeWidth={2.5} />
  },
  {
    num: "04",
    title: "CONSISTENT RESULTS",
    desc: "Build sustainable habits that last a lifetime, not just a season.",
    icon: <RefreshCw size={18} strokeWidth={2.5} />
  }
];

export default function AboutSection() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: reducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.15,
        delayChildren: reducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="w-full bg-[#0B0D0C] relative z-10 border-t border-white/5 py-[100px] md:py-[140px] px-6 lg:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        <motion.header
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-start mb-20 md:mb-32"
        >
          {/* Left Intro */}
          <div className="max-w-[540px]">
            <p className="text-[#C7F000] font-syne text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">
              Why FiTusion
            </p>
            <h2 className="font-syne font-bold leading-[0.95] tracking-[-0.04em] text-[#F3F6D8] text-[clamp(38px,10vw,56px)] lg:text-[clamp(48px,5vw,76px)] mb-6 md:mb-8">
              Train With Purpose.<br />
              <span className="text-white/60">Become Your Strongest Self.</span>
            </h2>
            <p className="text-[#858878] text-[15px] md:text-[16px] leading-[1.6] max-w-[480px]">
              FiTusion combines intelligent training, structured workouts, and measurable progress into one focused fitness experience.
            </p>
          </div>

          {/* Right Statement */}
          <div className="hidden md:flex flex-col items-end text-right shrink-0 self-center">
            <div aria-hidden="true" className="text-[120px] font-syne font-extrabold text-white/5 leading-[0.8] mb-4">
              01
            </div>
            <p className="text-[#F3F6D8] font-syne font-bold text-lg md:text-xl tracking-wide uppercase leading-[1.2]">
              Discipline<br />
              Over<br />
              <span className="text-[#C7F000]">Motivation</span>
            </p>
          </div>
        </motion.header>

        {/* Features Strip */}
        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-0"
        >
          {features.map((feature, i) => (
            <motion.li 
              key={feature.num} 
              variants={itemVariants}
              className="group relative lg:px-6 lg:border-l border-white/5 lg:first:border-l-0 lg:first:pl-0 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[12px] font-syne font-bold tracking-widest text-[#858878] group-hover:text-[#C7F000] transition-colors duration-300">
                  {feature.num}
                </span>
                <div aria-hidden="true" className="text-white/20 group-hover:text-[#C7F000] group-hover:-translate-y-[3px] transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-[#F3F6D8] font-syne text-[15px] font-bold tracking-wide uppercase mb-3 group-hover:-translate-y-[3px] transition-transform duration-300">
                {feature.title}
              </h3>
              <p className="text-[#858878] text-[14px] leading-[1.6] pr-4">
                {feature.desc}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
