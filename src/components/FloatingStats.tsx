import React from 'react';
import { Clock, Activity, Flame, Dumbbell } from 'lucide-react';
import { motion, useTransform, MotionValue } from 'motion/react';
import { useMouseParallax } from './MouseParallaxContext';
import { useIsMobile } from '../hooks/useIsMobile';

type FloatingStatCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    className?: string;
    delay?: number;
    floatDirection?: 'up' | 'down';
    floatDuration?: number;
    scrollDistance?: number;
    scrollYProgress?: MotionValue<number>;
};

export function FloatingStatCard({ icon, label, value, className = '', delay = 0, floatDirection = 'up', floatDuration = 4.5, scrollDistance = -50, scrollYProgress }: FloatingStatCardProps) {
  const { mouseX, mouseY, reducedMotion } = useMouseParallax();
  const isMobile = useIsMobile();

  const parallaxX = useTransform(mouseX, [-1, 1], [-6, 6]);
  const parallaxY = useTransform(mouseY, [-1, 1], [-4, 4]);
  const scrollY = useTransform(scrollYProgress || mouseX, [0, 1], [0, reducedMotion ? 0 : (isMobile ? scrollDistance * 0.5 : scrollDistance)]);
  const floatY = floatDirection === 'up' ? [0, -4, 0] : [0, 4, 0];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={reducedMotion || !scrollYProgress ? {} : { y: scrollY }}
    >
      <motion.div
        className={`stat-card ${className} transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(0,0,0,0.35)] pointer-events-auto`}
        initial={{ opacity: 0, y: 25, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
        style={{ ...(reducedMotion ? {} : { x: parallaxX, y: parallaxY }) }}
      >
        <motion.div
          className="stat-card-inner w-full h-full flex flex-col items-center justify-center pointer-events-none"
          animate={reducedMotion ? {} : { y: floatY }}
          transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="stat-icon text-[#C7F000] mb-1 md:mb-2 scale-[0.65] md:scale-100">
            {icon}
          </div>
          <div className="stat-text flex flex-col">
            <div className="stat-label text-[#858878] text-[8px] md:text-[10px] mb-0 md:mb-1 font-medium tracking-wider uppercase leading-none">{label}</div>
            <div className="stat-value text-[#F3F6D8] text-base md:text-2xl font-bold font-syne tracking-tight drop-shadow-md leading-none mt-1 md:mt-0">{value}</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function FloatingStats({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  return (
    <>
      <FloatingStatCard icon={<Clock size={36} strokeWidth={2.5} />} label="Hours" value="1.5" className="stat-hours" delay={0.55} floatDirection="up" floatDuration={4.6} scrollDistance={-50} scrollYProgress={scrollYProgress} />
      <FloatingStatCard icon={<Activity size={36} strokeWidth={2.5} />} label="Poses" value="20" className="stat-poses" delay={0.65} floatDirection="down" floatDuration={4.9} scrollDistance={-65} scrollYProgress={scrollYProgress} />
      <FloatingStatCard icon={<Flame size={36} strokeWidth={2.5} />} label="Kcal" value="550" className="stat-kcal" delay={0.75} floatDirection="up" floatDuration={4.7} scrollDistance={-45} scrollYProgress={scrollYProgress} />
      <FloatingStatCard icon={<Dumbbell size={36} strokeWidth={2.5} />} label="Sets" value="5" className="stat-sets" delay={0.85} floatDirection="down" floatDuration={5.1} scrollDistance={-60} scrollYProgress={scrollYProgress} />
    </>
  );
}
