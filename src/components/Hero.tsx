import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users size={16} />
              <span>Performance Marketing for Indian Businesses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Generate Profitable Leads in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                USA & Canada
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ex-Google strategists helping Indian-owned businesses generate profitable leads,
              consistent growth, and real ROI with Google Ads, Meta Ads, and conversion-focused systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" href="#contact">
                Book Free Strategy Call
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" href="#case-studies">
                <Play size={20} />
                View Case Studies
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>First Month Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>No Fake Promises</span>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Live Performance Dashboard</h3>
                  <span className="text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                    Updated now
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Qualified Leads</span>
                      <TrendingUp className="text-blue-600" size={20} />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-gray-900">+312</span>
                      <span className="text-sm text-green-600 mb-1">Last 30 days</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">Conversion rate improving</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                      <div className="text-sm text-gray-600 mb-1">Channel</div>
                      <div className="font-bold text-gray-900 mb-2">Google Ads</div>
                      <div className="flex items-center gap-2">
                        <Target size={14} className="text-blue-600" />
                        <span className="text-xs text-gray-500">ROI Focus</span>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                      <div className="text-sm text-gray-600 mb-1">Channel</div>
                      <div className="font-bold text-gray-900 mb-2">Meta Ads</div>
                      <div className="flex items-center gap-2">
                        <Target size={14} className="text-blue-600" />
                        <span className="text-xs text-gray-500">ROI Focus</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white">
                    <div className="text-sm opacity-90 mb-1">Hero Offer</div>
                    <div className="text-2xl font-bold mb-1">First Month Free</div>
                    <div className="text-sm opacity-90">Qualify → Launch → Optimize</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
