import { ChevronRight } from 'lucide-react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { useMouseParallax } from './MouseParallaxContext';
import { useIsMobile } from '../hooks/useIsMobile';

export default function HeroCTA({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  const { mouseX, reducedMotion } = useMouseParallax();
  const isMobile = useIsMobile();
  const scrollY = useTransform(scrollYProgress || mouseX, [0, 1], [0, reducedMotion ? 0 : (isMobile ? -20 : -35)]);
  const scrollOpacity = useTransform(scrollYProgress || mouseX, [0, 0.8], [1, 0]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={reducedMotion || !scrollYProgress ? {} : { y: scrollY, opacity: scrollOpacity }}
    >
      <motion.div
        className="absolute left-6 right-6 bottom-4 md:left-auto md:right-[48px] md:bottom-[38px] z-40 scale-[0.9] md:scale-100 origin-bottom-right pointer-events-auto hero-cta"
        initial={{ opacity: 0, y: 15, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#about" className="group relative flex w-full md:w-auto items-center justify-center gap-2 px-8 py-[18px] bg-[#C7F000] text-[#080909] rounded-full font-bold text-[14px] uppercase tracking-[0.1em] overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_25px_rgba(199,240,0,0.25)]">
          <span className="relative z-10">Let's Start</span>
          <div className="relative z-10 flex -space-x-3 ml-1 transition-transform duration-300 group-hover:translate-x-[5px]">
            <ChevronRight size={16} strokeWidth={3} className="opacity-40" />
            <ChevronRight size={16} strokeWidth={3} className="opacity-70" />
            <ChevronRight size={16} strokeWidth={3} />
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
