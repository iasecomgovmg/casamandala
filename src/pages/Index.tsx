
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import FacilitatorsSection from '@/components/FacilitatorsSection';
import LocationSection from '@/components/LocationSection';
import PricingSection from '@/components/PricingSection';
import QuoteSection from '@/components/QuoteSection';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    const loadPage = async () => {
      // Simulate loading
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });
    };

    loadPage();
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="overflow-hidden"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <FacilitatorsSection />
      <QuoteSection />
      <LocationSection />
      <PricingSection />
      <SignupForm />
      <Footer />
    </motion.div>
  );
};

export default Index;
