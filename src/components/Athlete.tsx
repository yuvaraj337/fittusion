import { motion, useTransform, MotionValue } from 'motion/react';
import { useMouseParallax } from './MouseParallaxContext';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Athlete({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  const { mouseX, mouseY, reducedMotion } = useMouseParallax();
  const isMobile = useIsMobile();

  const parallaxX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-5, 5]);
  const scrollY = useTransform(scrollYProgress || mouseX, [0, 1], [0, reducedMotion ? 0 : (isMobile ? -30 : -60)]);
  const combinedX = useTransform(parallaxX, (x) => `calc(-50% + ${x}px)`);

  return (
    <motion.div
      className="absolute inset-0 flex items-end justify-center pointer-events-none z-20 overflow-hidden md:overflow-visible"
      style={reducedMotion || !scrollYProgress ? {} : { y: isMobile ? 0 : scrollY }}
    >
      <motion.div
        className="absolute bottom-[108px] md:bottom-0 left-1/2 w-[92vw] md:w-auto h-[42vh] sm:h-[46vh] md:h-[88vh] max-h-[920px] flex justify-center items-end hero-athlete"
        initial={{ opacity: 0, x: isMobile ? 0 : "-50%", y: isMobile ? 20 : 40, scale: 0.96 }}
        animate={{ opacity: 1, x: isMobile ? 0 : "-50%", y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        style={{
          x: isMobile ? 0 : (reducedMotion ? "-50%" : combinedX),
          y: isMobile ? 0 : (reducedMotion ? 0 : parallaxY)
        }}
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full"
        >
          <img
            src="/images/athlete.png"
            alt="FiTusion athlete"
            className="object-contain object-bottom h-full max-w-none"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

