import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './pages/Home';
import { Services as ServicesPage } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { FloatingElements } from './components/ui/FloatingElements';
import { MouseGlow } from './components/ui/MouseGlow';

// Wrapper for common layout elements (Navbar, Footer, Effects)
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      className="min-h-screen bg-white font-sans relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!isMobile && (
        <>
          <FloatingElements />
          <MouseGlow />
          <CustomCursor />
        </>
      )}
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/services/:slug" element={<Layout><ServiceDetail /></Layout>} />
        {/* Fallback to Home or 404 */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
