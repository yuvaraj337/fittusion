import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMotionValue, useSpring, MotionValue, useReducedMotion } from 'motion/react';

type MouseParallaxContextType = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  reducedMotion: boolean | null;
};

const MouseParallaxContext = createContext<MouseParallaxContextType | null>(null);

export function useMouseParallax() {
  const context = useContext(MouseParallaxContext);
  if (!context) {
    throw new Error('useMouseParallax must be used within MouseParallaxProvider');
  }
  return context;
}

export function MouseParallaxProvider({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    // Check if device is touch-only
    const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, reducedMotion]);

  return (
    <MouseParallaxContext.Provider value={{ mouseX: smoothX, mouseY: smoothY, reducedMotion }}>
      {children}
    </MouseParallaxContext.Provider>
  );
}
