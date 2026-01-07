import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business the Right Way?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free strategy call with ex-Google marketers who understand Indian businesses in North America.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg">
              Book Your Free Strategy Call
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Case Studies
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-white">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>No pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>No fake promises</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Just honest advice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
