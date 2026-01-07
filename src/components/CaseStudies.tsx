import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';

const caseStudies = [
  {
    title: 'Frustrated Client Turnaround',
    description: 'An account rebuild focused on intent + conversion paths.',
    results: [
      'Budget grew $1,000 → $5,000/month',
      '~8–10x ROAS (tracked)',
      'One $100K potential lead generated',
    ],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Physiotherapy Clinic Revival',
    description: 'Local search + creative refresh + landing page optimization.',
    results: [
      'Enquiries surged consistently',
      'Hired staff to handle demand',
      'Expanded to multiple locations',
    ],
    gradient: 'from-emerald-600 to-teal-600',
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <Section id="case-studies" background="gradient">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Proof • Real ROI
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Real Results for Real Businesses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Case studies are presented as highlights. These are verified metrics from actual clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {caseStudies.map((study, index) => (
          <Card key={index} hover3d={true} className="p-8 group">
            <div className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center mb-4`}>
              <TrendingUp className="text-white" size={24} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
            <p className="text-gray-600 mb-6">{study.description}</p>

            <div className="space-y-3 mb-6">
              {study.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{result}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                View Case Study
                <ArrowRight size={16} />
              </Button>
              <Button variant="primary" size="sm">
                Book Strategy Call
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
