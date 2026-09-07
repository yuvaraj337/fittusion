import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import PricingModal from './PricingModal';

const plans = [
  {
    id: "starter",
    num: "01",
    name: "STARTER",
    desc: "For people beginning their fitness journey.",
    priceMonthly: 999,
    priceYearly: 9590,
    features: [
      "Structured workouts",
      "Exercise library",
      "Progress tracking",
      "Basic training plans"
    ],
    featured: false
  },
  {
    id: "pro",
    num: "02",
    name: "PRO",
    desc: "For serious training and measurable progress.",
    priceMonthly: 1999,
    priceYearly: 19190,
    features: [
      "Everything in Starter",
      "Personalized training",
      "Advanced programs",
      "Progress analytics",
      "Priority support"
    ],
    featured: true
  },
  {
    id: "elite",
    num: "03",
    name: "ELITE",
    desc: "For maximum performance and complete guidance.",
    priceMonthly: 3499,
    priceYearly: 33590,
    features: [
      "Everything in Pro",
      "Advanced personalization",
      "Performance tracking",
      "Nutrition guidance",
      "1-on-1 coaching"
    ],
    featured: false
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const reducedMotion = useReducedMotion();

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan({ ...plan, isYearly });
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="w-full bg-[#080909] relative z-10 py-[90px] md:py-[160px] px-6 lg:px-12 xl:px-24">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(199,240,0,0.02),transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#C7F000] font-syne text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8"
          >
            Membership
          </motion.div>
          
          <motion.h2
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-bold leading-[0.95] tracking-[-0.04em] text-[#F3F6D8] text-[clamp(42px,6vw,84px)] mb-6"
          >
            Choose Your<br />
            <span className="text-[#C7F000]">Commitment.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#858878] text-[15px] md:text-[18px] leading-[1.6] max-w-[420px]"
          >
            Simple plans. Serious training. No distractions.
          </motion.p>
        </div>

        {/* Billing Switcher */}
        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <div className="flex items-center bg-[#0D0F0E] rounded-full p-1 border border-white/10">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase transition-all duration-300 ${
                !isYearly ? 'bg-white/10 text-[#F3F6D8]' : 'text-[#858878] hover:text-[#F3F6D8]'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                isYearly ? 'bg-white/10 text-[#F3F6D8]' : 'text-[#858878] hover:text-[#F3F6D8]'
              }`}
            >
              Yearly
              <span className={`text-[9px] px-2 py-0.5 rounded-full transition-colors duration-300 ${isYearly ? 'bg-[#C7F000] text-[#080909]' : 'bg-white/10 text-white/70'}`}>
                SAVE 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col p-8 md:p-10 rounded-[20px] bg-[#0D0F0E] transition-all duration-350 ease-out hover:-translate-y-[6px] border ${
                plan.featured 
                  ? 'border-[#C7F000] order-first md:col-span-2 lg:col-span-1 lg:order-none' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C7F000] text-[#080909] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full z-20">
                  Most Popular
                </div>
              )}

              {/* Large Background Number */}
              <div className="absolute top-6 right-8 font-syne font-extrabold text-[80px] leading-none text-white/[0.03] pointer-events-none transition-colors duration-300 group-hover:text-white/[0.05] select-none">
                {plan.num}
              </div>

              {/* Plan Header */}
              <div className="relative z-10 mb-8 border-b border-white/5 pb-8">
                <h3 className="font-syne font-bold text-[#F3F6D8] text-[20px] tracking-wide uppercase mb-2">{plan.name}</h3>
                <p className="text-[#858878] text-[14px] leading-[1.5] max-w-[200px] min-h-[42px]">{plan.desc}</p>
                
                <div className="mt-8 flex items-end gap-2">
                  <span className="font-syne font-bold text-[#F3F6D8] text-[clamp(38px,4vw,60px)] leading-[0.9] tracking-tight">
                    ₹{isYearly ? plan.priceYearly.toLocaleString() : plan.priceMonthly.toLocaleString()}
                  </span>
                  <span className="text-[#858878] text-[12px] font-semibold uppercase tracking-wider mb-1">
                    / {isYearly ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="relative z-10 flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={3} className="text-[#C7F000] mt-[2px] shrink-0" />
                    <span className="text-[#E0E2D1] text-[14px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                type="button"
                onClick={() => handleSelectPlan(plan)}
                className={`group relative w-full flex items-center justify-center gap-2 px-8 py-[18px] rounded-full text-[14px] font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-[3px] ${
                plan.featured
                  ? 'bg-[#C7F000] text-[#080909] hover:bg-[#D9FF19] hover:shadow-[0_4px_25px_rgba(199,240,0,0.25)]'
                  : 'bg-transparent text-[#F3F6D8] border border-white/20 hover:border-white/50 hover:bg-white/5'
              }`}>
                <span className="relative z-10">Start Now</span>
                <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:translate-x-[5px]" />
              </button>

            </motion.div>
          ))}
        </div>
      </div>
      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} plan={selectedPlan} />
    </section>
  );
}
