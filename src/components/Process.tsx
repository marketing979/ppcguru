import React from 'react';
import { MessageSquare, FileSearch, Rocket, TrendingUp } from 'lucide-react';
import { Section } from './Section';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Business Understanding',
    description: 'Understand your offer, margins, close process, and what "good" looks like for ROI.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Strategy & Funnel Design',
    description: 'Map intent → message → landing pages → tracking so leads turn into revenue.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Optimization',
    description: 'Ship fast, measure cleanly, and iterate weekly.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale Profitably',
    description: 'Scale budgets only when tracking and unit economics make sense.',
    color: 'from-violet-500 to-purple-500',
  },
];

export const Process: React.FC = () => {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Process • Simple • Proven
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Simple, Proven Process
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Built for busy founders: clarity, speed, and transparent actions.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <div className="flex-1">
                      <div className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}>
                        Step {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
