import React from 'react';
import { Target, TrendingUp, Users, Shield } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';

const reasons = [
  {
    icon: Target,
    title: 'Ex-Google Expertise',
    description: 'Managed/advised on high-spend portfolios and learned what drives profit at scale.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Over Promises',
    description: 'Leads, sales, and ROI — not vanity metrics.',
  },
  {
    icon: Users,
    title: 'Deep Indian Community Insight',
    description: 'We understand Indian family decision-making, cultural nuance, and buying behavior.',
  },
  {
    icon: Shield,
    title: 'Honest & Transparent',
    description: 'Clear reporting, clear recommendations, no hype.',
  },
];

export const WhyUs: React.FC = () => {
  return (
    <Section id="why-us" background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Indian Businesses Choose PPC Guru
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          You'll get enterprise-level strategy with a community-first execution style —
          culturally aligned, WhatsApp-friendly, and focused on profit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Card key={index} className="p-6 text-center group hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
