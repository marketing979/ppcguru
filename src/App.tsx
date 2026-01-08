import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { CaseStudies } from './components/sections/CaseStudies';
import { Industries } from './components/sections/Industries';
import { Process } from './components/sections/Process';
import { HeroOffer } from './components/sections/HeroOffer';
import { Team } from './components/sections/Team';
import { Testimonials } from './components/sections/Testimonials';
import { Locations } from './components/sections/Locations';
import { Insights } from './components/sections/Insights';
import { CTA } from './components/sections/CTA';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { FloatingElements } from './components/ui/FloatingElements';
import { MouseGlow } from './components/ui/MouseGlow';

// Loading screen component
const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-dark-900 flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Animated logo/brand */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="mb-8"
      >
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(232, 93, 4, 0.3)',
                '0 0 60px rgba(232, 93, 4, 0.6)',
                '0 0 20px rgba(232, 93, 4, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white text-4xl font-bold">PG</span>
          </motion.div>

          {/* Orbiting ring */}
          <motion.div
            className="absolute inset-0 -m-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-32 h-32 border-2 border-primary-500/30 rounded-full border-t-primary-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        className="text-3xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-gradient">PPC Guru</span>
      </motion.h1>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Progress text */}
      <motion.p
        className="text-dark-400 text-sm mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading amazing experience... {progress}%
      </motion.p>

      {/* Floating particles in loading screen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? '#E85D04' : '#F9A825',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="min-h-screen bg-white font-sans relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Interactive background elements - hide on mobile for performance */}
            {!isMobile && (
              <>
                <FloatingElements />
                <MouseGlow />
                <CustomCursor />
              </>
            )}

            {/* Scroll progress indicator */}
            <ScrollProgress />

            {/* Main content */}
            <Navbar />
            <main>
              <Hero />
              <Services />
              <WhyUs />
              <CaseStudies />
              <Industries />
              <Process />
              <HeroOffer />
              <Team />
              <Testimonials />
              <Locations />
              <Insights />
              <CTA />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
