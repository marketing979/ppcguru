import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { CaseStudies } from './components/CaseStudies';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { HeroOffer } from './components/HeroOffer';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Locations } from './components/Locations';
import { Insights } from './components/Insights';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
