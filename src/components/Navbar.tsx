import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] md:h-[90px] flex items-center justify-between px-5 lg:px-12 xl:px-24 pointer-events-auto transition-colors duration-300 ${isScrolled ? 'bg-[#080909]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          aria-label="Go to homepage"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group w-auto md:w-[150px] bg-transparent border-none p-0 focus:outline-none"
        >
          <div className="relative w-7 h-5 md:w-7 md:h-5 flex flex-col justify-between">
            <div className="h-[3px] w-full bg-[#C7F000] rounded-full"></div>
            <div className="h-[3px] w-full bg-[#C7F000] rounded-full -ml-1.5"></div>
            <div className="h-[3px] w-3/4 bg-[#C7F000] rounded-full -ml-0.5"></div>
          </div>
          <span className="text-[22px] md:text-[20px] font-extrabold tracking-tight text-[#C7F000]">FiTusion</span>
        </button>

        <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-[13px] font-semibold tracking-wide text-[#858878]">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#F3F6D8] transition-colors duration-250 ease-out hover:text-white cursor-pointer bg-transparent border-none p-0">Home</button>
          <a href="#about" className="transition-colors duration-250 ease-out hover:text-[#F3F6D8]">About</a>
          <a href="#features" className="transition-colors duration-250 ease-out hover:text-[#F3F6D8]">Features</a>
          <a href="#pricing" className="transition-colors duration-250 ease-out hover:text-[#F3F6D8]">Service</a>
          <a href="#exercises" className="transition-colors duration-250 ease-out hover:text-[#F3F6D8]">Exercise</a>
        </div>

        <div className="hidden lg:flex items-center gap-4 w-auto justify-end">
          <button type="button" onClick={() => setContactModalOpen(true)} className="px-5 py-2 text-[12px] font-bold rounded-full border border-white/10 text-[#858878] hover:text-[#F3F6D8] hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">Contact Us</button>
          <a href="#contact" className="px-5 py-2 text-[12px] font-bold rounded-full bg-[#C7F000] text-[#080909] hover:bg-[#D9FF19] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(199,240,0,0.25)] whitespace-nowrap">Get Started</a>
        </div>

        <div className="lg:hidden flex items-center">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="text-[#F3F6D8] p-1 focus:outline-none" aria-label="Open menu">
            <div className="w-8 h-[3px] bg-current mb-2 rounded-full"></div>
            <div className="w-8 h-[3px] bg-current mb-2 rounded-full"></div>
            <div className="w-6 h-[3px] bg-current rounded-full ml-auto"></div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[200] bg-[#050606]/95 backdrop-blur-xl flex flex-col pointer-events-auto lg:hidden">
            <div className="h-[80px] px-6 flex items-center justify-between border-b border-white/5">
              <button type="button" aria-label="Go to homepage" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 bg-transparent border-none p-0 focus:outline-none">
                <div className="relative w-6 h-4 flex flex-col justify-between"><div className="h-[2px] w-full bg-[#C7F000] rounded-full"></div><div className="h-[2px] w-full bg-[#C7F000] rounded-full -ml-1.5"></div><div className="h-[2px] w-3/4 bg-[#C7F000] rounded-full -ml-0.5"></div></div>
                <span className="text-[18px] font-extrabold tracking-tight text-[#C7F000]">FiTusion</span>
              </button>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="text-[#858878] hover:text-[#F3F6D8] p-2 transition-colors duration-200" aria-label="Close menu"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8">
              <div className="flex flex-col gap-6 text-[18px] font-syne font-bold uppercase tracking-wider text-[#F3F6D8]">
                <button type="button" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-[#C7F000] transition-colors bg-transparent border-none p-0 cursor-pointer">Home</button>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C7F000] transition-colors">About</a>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C7F000] transition-colors">Features</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C7F000] transition-colors">Service</a>
                <a href="#exercises" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C7F000] transition-colors">Exercise</a>
              </div>
              <div className="mt-auto flex flex-col gap-4 pb-12">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-[13px] font-bold rounded-full bg-[#B8F000] text-[#050606] hover:bg-[#D9FF19] transition-all text-center tracking-[0.1em] uppercase">Get Started</a>
                <button type="button" onClick={() => { setMobileMenuOpen(false); setContactModalOpen(true); }} className="w-full py-4 text-[13px] font-bold rounded-full border border-white/10 text-[#858878] hover:text-[#F3F6D8] transition-all text-center tracking-[0.1em] uppercase">Contact Us</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}
