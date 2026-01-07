import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Section } from './Section';
import { Button } from './Button';

const weeks = [
  { week: 'Week 1', title: 'Audit + Strategy', description: 'Deep dive into your business, competitors, and market opportunities.' },
  { week: 'Week 2', title: 'Offer + Funnel Alignment', description: 'Map your value proposition to customer intent and conversion paths.' },
  { week: 'Week 3', title: 'Launch + Conversion Tracking', description: 'Deploy campaigns with proper tracking and measurement systems.' },
  { week: 'Week 4', title: 'Optimize + Scale Plan', description: 'Analyze performance and create a roadmap for profitable scaling.' },
];

export const HeroOffer: React.FC = () => {
  return (
    <Section background="gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Hero Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            First Month Free
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our PeriHero / Hero Offer is designed to remove risk and prove ROI quickly — the right way.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-4">
            {weeks.map((item, index) => (
              <div
                key={index}
                className="p-8 border-b md:border-b-0 md:border-r border-gray-100 last:border-0 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
              >
                <div className="text-sm font-bold text-blue-600 mb-2">{item.week}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>

                <div className="mt-4">
                  <CheckCircle className="text-green-500 transform group-hover:scale-110 transition-transform" size={24} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-blue-100">We only take fits we can win.</p>
            <Button variant="secondary" size="lg">
              Qualify for Hero Offer
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
