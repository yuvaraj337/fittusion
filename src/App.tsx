import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TrainingSection from './components/TrainingSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080909] overflow-x-hidden selection:bg-[#C7F000] selection:text-[#080909]">
      <Hero />
      <AboutSection />
      <TrainingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
