import { motion, MotionValue, useTransform } from 'motion/react';
import { useMouseParallax } from './MouseParallaxContext';
import { useIsMobile } from '../hooks/useIsMobile';

export default function SocialProof({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  const { mouseX, reducedMotion } = useMouseParallax();
  const isMobile = useIsMobile();
  const scrollY = useTransform(scrollYProgress || mouseX, [0, 1], [0, reducedMotion ? 0 : (isMobile ? -20 : -35)]);
  const scrollOpacity = useTransform(scrollYProgress || mouseX, [0, 0.8], [1, 0]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={reducedMotion || !scrollYProgress ? {} : { y: isMobile ? 0 : scrollY, opacity: isMobile ? 1 : scrollOpacity }}
    >
      <motion.div
        className="absolute left-6 bottom-[82px] md:left-[48px] md:bottom-[38px] flex flex-col gap-1.5 md:gap-2 z-40 scale-[0.8] md:scale-100 origin-bottom-left pointer-events-auto hero-social-proof"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex -space-x-2">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&auto=format&fit=crop" alt="User 1" className="w-10 h-10 rounded-full border-2 border-[#080909] object-cover" />
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=100&auto=format&fit=crop" alt="User 2" className="w-10 h-10 rounded-full border-2 border-[#080909] object-cover z-10" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" alt="User 3" className="w-10 h-10 rounded-full border-2 border-[#080909] object-cover z-20" />
        </div>
        <div className="flex flex-col mt-0.5">
          <span className="text-[28px] leading-none font-bold tracking-tight text-[#F3F6D8]">12K+</span>
          <span className="text-[12px] text-[#858878] font-medium tracking-wide">Happy Spirits</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
