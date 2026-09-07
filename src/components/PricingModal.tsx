import React from 'react';
import Modal from './Modal';

export default function PricingModal({ isOpen, onClose, plan }: { isOpen: boolean, onClose: () => void, plan?: any }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={plan ? `Join ${plan.name}` : "Coming Soon"}>
      <div className="flex flex-col items-center justify-center py-4 text-center">
        {plan && (
          <div className="mb-6 p-4 rounded-xl border border-white/10 bg-[#080909] w-full text-center">
            <span className="block text-[#858878] text-[11px] font-bold uppercase tracking-wider mb-1">Selected Plan</span>
            <span className="block text-[#F3F6D8] font-syne font-bold text-[24px] mb-1">{plan.name}</span>
            <span className="block text-[#C7F000] font-syne font-bold text-[20px]">
              ₹{plan.isYearly ? plan.priceYearly.toLocaleString() : plan.priceMonthly.toLocaleString()} 
              <span className="text-[#858878] text-[12px]"> / {plan.isYearly ? 'year' : 'month'}</span>
            </span>
          </div>
        )}
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#858878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V12L16 14" stroke="#858878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-[#858878] text-[15px] leading-relaxed mb-8">
          Membership enrollment will be available soon.
        </p>
        <button 
          type="button"
          onClick={onClose}
          className="px-10 py-4 bg-[#C7F000] text-[#080909] rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-[#D9FF19] transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
