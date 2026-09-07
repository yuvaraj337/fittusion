import React, { useState } from 'react';
import Modal from './Modal';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('success');
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus('idle'), 300); // reset after closing animation
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Contact Us">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#858878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8v4" stroke="#858878" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="#858878"/>
            </svg>
          </div>
          <h3 className="font-syne font-bold text-[#F3F6D8] text-[20px] mb-2">Feature Coming Soon</h3>
          <p className="text-[#858878] text-[15px]">Message sending will be available soon.</p>
          <button 
            type="button"
            onClick={handleClose}
            className="mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[#F3F6D8] font-bold text-[13px] uppercase tracking-wider transition-colors"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#858878] text-[12px] font-bold uppercase tracking-wider">Name</label>
            <input 
              required 
              id="name"
              type="text" 
              className="w-full bg-[#080909] border border-white/10 rounded-lg px-4 py-3.5 text-[#F3F6D8] focus:outline-none focus:border-[#C7F000]/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#858878] text-[12px] font-bold uppercase tracking-wider">Email</label>
            <input 
              required 
              id="email"
              type="email" 
              className="w-full bg-[#080909] border border-white/10 rounded-lg px-4 py-3.5 text-[#F3F6D8] focus:outline-none focus:border-[#C7F000]/50 transition-colors"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#858878] text-[12px] font-bold uppercase tracking-wider">Message</label>
            <textarea 
              required 
              id="message"
              rows={4}
              className="w-full bg-[#080909] border border-white/10 rounded-lg px-4 py-3 text-[#F3F6D8] focus:outline-none focus:border-[#C7F000]/50 transition-colors resize-none"
              placeholder="How can we help?"
            ></textarea>
          </div>
          
          <button 
            disabled={status === 'submitting'}
            type="submit" 
            className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 mt-2 rounded-full text-[14px] font-bold tracking-[0.1em] uppercase transition-all duration-300 bg-[#C7F000] text-[#080909] hover:bg-[#D9FF19] disabled:opacity-70 disabled:hover:bg-[#C7F000]"
          >
            {status === 'submitting' ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <span className="relative z-10">Send Message</span>
                <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}
    </Modal>
  );
}
