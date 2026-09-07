import { motion, useTransform, MotionValue } from 'motion/react';
import { useMouseParallax } from './MouseParallaxContext';
import { useIsMobile } from '../hooks/useIsMobile';

export default function HeroHeading({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  const { mouseX, mouseY, reducedMotion } = useMouseParallax();
  const isMobile = useIsMobile();

  const parallaxX = useTransform(mouseX, [-1, 1], [-3, 3]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-2, 2]);

  const scrollY = useTransform(scrollYProgress || mouseX, [0, 1], [0, reducedMotion ? 0 : (isMobile ? -45 : -100)]);
  const scrollOpacity = useTransform(scrollYProgress || mouseX, [0, 0.8], [1, 0]);

  return (
    <motion.div
      className="absolute inset-x-0 top-0 md:inset-0 flex items-start pt-[108px] md:pt-[140px] justify-center pointer-events-none z-10 px-4 hero-heading"
      style={reducedMotion || !scrollYProgress ? {} : { y: isMobile ? 0 : scrollY, opacity: isMobile ? 1 : scrollOpacity }}
    >
      <motion.h1
        className="font-syne font-bold text-center leading-[0.92] tracking-[-0.045em] md:tracking-[-0.05em] flex flex-col items-center max-w-[95vw] md:max-w-[1180px] mx-auto w-full"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        style={reducedMotion || isMobile ? {} : { x: parallaxX, y: parallaxY }}
      >
        <span className="hidden md:block mb-5 text-[10px] font-medium tracking-[0.45em] uppercase text-[#858878]">
          Fitness for a better you
        </span>
        <span className="md:hidden mb-5 text-[9px] font-medium tracking-[0.38em] uppercase leading-none text-[#858878] whitespace-nowrap">
          Fitness for a better you
        </span>
        <span className="block text-[clamp(40px,11vw,58px)] md:text-[clamp(56px,5.8vw,100px)] text-[#F3F6D8]">
          Sculpt <span className="text-[#C7F000] md:text-[#C7F000]/30">Your</span> Body.
        </span>
        <span className="block text-[clamp(40px,11vw,58px)] md:text-[clamp(56px,5.8vw,100px)] text-[#F3F6D8] md:ml-[1.5em]">
          Elevate <span className="text-[#C7F000] md:text-[#C7F000]/30">Your</span> Spirit
        </span>
        <p className="mt-4 max-w-[340px] text-[14px] leading-[1.35] font-inter font-medium tracking-wide text-[#D7DAC8] md:hidden">
          Train smarter. Get stronger. Live better.
        </p>
      </motion.h1>

      <motion.div
        className="absolute left-[32px] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[#858878] font-syne text-[10px] font-bold tracking-[0.35em] uppercase opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span>P</span><span>R</span><span>E</span><span>V</span>
      </motion.div>

      <motion.div
        className="absolute right-[32px] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[#858878] font-syne text-[10px] font-bold tracking-[0.35em] uppercase opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span>N</span><span>E</span><span>X</span><span>T</span>
      </motion.div>
    </motion.div>
  );
}
