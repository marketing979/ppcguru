import React from 'react';
import { Utensils, Plane, Home, ShieldCheck, Stethoscope, Wrench, Briefcase, ShoppingBag } from 'lucide-react';
import { Section } from './Section';

const industries = [
  { icon: Utensils, name: 'Restaurants & Food', color: 'from-orange-500 to-red-500' },
  { icon: Plane, name: 'Immigration', color: 'from-blue-500 to-cyan-500' },
  { icon: Home, name: 'Real Estate & Mortgage', color: 'from-emerald-500 to-teal-500' },
  { icon: ShieldCheck, name: 'Insurance', color: 'from-violet-500 to-purple-500' },
  { icon: Stethoscope, name: 'Clinics (Dental/Physio/Medical)', color: 'from-pink-500 to-rose-500' },
  { icon: Wrench, name: 'Renovation & Home Services', color: 'from-yellow-500 to-orange-500' },
  { icon: Briefcase, name: 'Professional Services', color: 'from-slate-500 to-gray-500' },
  { icon: ShoppingBag, name: 'E-commerce', color: 'from-indigo-500 to-blue-500' },
];

export const Industries: React.FC = () => {
  return (
    <Section id="industries" background="white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Specialization • Indian Buyers
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Industries We Specialize In
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          If your customers are Indian families in North America, we understand your market.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 font-medium">
            What makes our niche advantage real: Language, cultural nuance, family decision-making,
            and community trust signals — all mapped into offer + funnel + ad execution.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <Icon className="text-white" size={28} />
              </div>

              <h3 className="text-sm font-bold text-gray-900 mb-2">{industry.name}</h3>

              <div className="space-y-1 text-xs text-gray-500">
                <div>High-intent leads</div>
                <div>Better close rates</div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-1">
                <div className="text-xs text-blue-600 font-medium">Offer mapping</div>
                <div className="text-xs text-blue-600 font-medium">ROI tracking</div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
