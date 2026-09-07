import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useIsMobile } from '../hooks/useIsMobile';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    num: "01",
    title: "STRENGTH",
    desc: "Build power and strength.",
    count: "24 exercises",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "HYPERTROPHY",
    desc: "Maximize muscle growth and definition.",
    count: "32 exercises",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "CONDITIONING",
    desc: "Enhance endurance and cardiovascular health.",
    count: "18 exercises",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "MOBILITY",
    desc: "Improve flexibility and joint health.",
    count: "20 exercises",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function TrainingSection() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Extremely subtle image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);

  return (
    <section id="exercises" ref={containerRef} className="w-full bg-[#080909] relative z-10 py-[120px] md:py-[160px] px-6 lg:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        <motion.header
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="text-[#C7F000] font-syne text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">
            Explore Training
          </div>
          <h2 className="font-syne font-bold leading-[0.95] tracking-[-0.04em] text-[#F3F6D8] text-[clamp(48px,6vw,88px)] mb-6 md:mb-8">
            Train Hard.<br />
            <span className="text-white/60">Train Smart.</span>
          </h2>
          <p className="text-[#858878] text-[15px] md:text-[16px] leading-[1.6] max-w-[480px]">
            Structured workouts designed to build strength, endurance, mobility, and confidence.
          </p>
        </motion.header>

        <div className="flex flex-col border-t border-white/10">
          {categories.map((cat, i) => (
            <motion.a
              href="#contact"
              key={cat.num}
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group block relative overflow-hidden py-8 md:py-12 border-b border-white/10"
            >
              {/* Desktop Hover Image Area */}
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[55%] pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#080909] to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#080909]/50 to-transparent z-10" />
                <div className="w-full h-full transform-gpu transition-all duration-600 ease-[0.16,1,0.3,1] scale-100 opacity-35 group-[.active]:opacity-50 group-hover:scale-[1.03] group-hover:opacity-85">
                  <motion.img 
                    src={cat.image} 
                    alt={cat.title} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    style={!isMobile && !reducedMotion ? { y: imageY, scale: 1.1 } : {}}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 relative z-10">
                {/* Number & Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 lg:gap-24 md:w-[45%]">
                  <div className="text-[#858878] font-syne font-bold text-[13px] tracking-widest transition-colors duration-300 group-hover:text-[#C7F000] group-[.active]:text-[#C7F000]">
                    {cat.num}
                  </div>
                  <h3 className="text-[#F3F6D8] font-syne font-bold text-[clamp(30px,3vw,52px)] uppercase tracking-[-0.02em] leading-[1] transition-transform duration-500 ease-out md:group-hover:translate-x-[8px]">
                    {cat.title}
                  </h3>
                </div>

                {/* Mobile-only Image (Stacked) */}
                <div className="md:hidden w-full h-[240px] relative overflow-hidden rounded-sm my-4">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover object-center" />
                </div>

                {/* Desc & Count & Arrow */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 md:flex-1">
                  <p className="text-[#858878] text-[14px] leading-[1.5] max-w-[200px] transition-colors duration-500 group-hover:text-white/80">
                    {cat.desc}
                  </p>
                  <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                    <span className="text-[#858878] text-[12px] uppercase tracking-wider font-semibold group-hover:text-white/70 transition-colors duration-500">
                      {cat.count}
                    </span>
                    <div className="text-[#F3F6D8] opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:text-[#C7F000] md:group-hover:translate-x-[6px]">
                      <ArrowRight size={24} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Subtle Glow/Line on Hover */}
              <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-[#C7F000] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-[0.16,1,0.3,1] z-20" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 flex justify-start md:justify-end">
          <motion.a 
            href="#contact" 
            className="group flex items-center gap-3 text-[#F3F6D8] text-[12px] font-syne font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#C7F000]"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>View All Exercises</span>
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
