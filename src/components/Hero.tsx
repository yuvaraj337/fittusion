import React, { useRef } from 'react';
import Navbar from './Navbar';
import HeroHeading from './HeroHeading';
import Athlete from './Athlete';
import FloatingStats from './FloatingStats';
import SocialProof from './SocialProof';
import HeroCTA from './HeroCTA';
import { MouseParallaxProvider } from './MouseParallaxContext';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <>
      <MouseParallaxProvider>
        <section ref={containerRef} className="relative w-full h-[150vh] bg-[#080909] selection:bg-[#C7F000] selection:text-[#080909]">
          <div className="sticky top-0 w-full h-[100svh] overflow-hidden flex flex-col hero-sticky">
            <Navbar />

            <motion.main
              className="relative flex-1 w-full h-full flex flex-col md:block pointer-events-none transform-gpu origin-top hero-main"
              style={{ scale: heroScale, opacity: heroOpacity }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none -z-10 hero-bg-gradient"
                style={{
                  background: 'radial-gradient(circle at 50% 48%, rgba(199, 240, 0, 0.06), transparent 38%)',
                  y: backgroundY
                }}
              />

              <HeroHeading scrollYProgress={scrollYProgress} />

              {/* Stats grid wrapper — becomes a 2×2 CSS grid on mobile */}
              <div className="contents md:contents hero-stats-grid">
                <FloatingStats scrollYProgress={scrollYProgress} />
              </div>

              <Athlete scrollYProgress={scrollYProgress} />

              <div className="pointer-events-auto hero-bottom-section">
                <SocialProof scrollYProgress={scrollYProgress} />
                <HeroCTA scrollYProgress={scrollYProgress} />
              </div>

              <motion.div
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-1.5 text-[#858878] opacity-50 z-40 pointer-events-none hero-scroll-indicator"
                style={{ opacity: scrollIndicatorOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <span className="text-[8px] md:text-[9px] font-syne font-bold tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ↓
                </motion.div>
              </motion.div>
            </motion.main>
          </div>
        </section>
      </MouseParallaxProvider>
    </>
  );
}

