import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedComponents';
import logo from '../../assets/images/logo.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <motion.div
        className={`absolute inset-0 backdrop-blur-lg transition-all duration-300`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        }}
        style={{
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={logo}
              alt="PPC Guru"
              className="h-12 md:h-14 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 relative z-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.label === 'Services' ? '/services' : link.href} // Use href for simpler integration with existing animation logic, but point Services to /services
                className={`relative font-medium transition-colors duration-200 ${activeSection === link.href.slice(1)
                  ? 'text-primary-500'
                  : 'text-dark-700 hover:text-primary-500'
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-400"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === link.href.slice(1) ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block relative z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AnimatedButton href="/#contact" size="md">
              Book Strategy Call
            </AnimatedButton>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden relative z-10 text-dark-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-dark-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.label === 'Services' ? '/services' : link.href}
                  className={`py-3 px-4 rounded-lg font-medium transition-colors ${activeSection === link.href.slice(1)
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-dark-700 hover:bg-primary-50 hover:text-primary-500'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                <AnimatedButton href="/#contact" size="md" className="w-full">
                  Book Strategy Call
                </AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
