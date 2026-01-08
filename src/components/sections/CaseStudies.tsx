import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, MagneticCard, AnimatedButton, AnimatedCounter } from '../ui/AnimatedComponents';

const caseStudies = [
  {
    title: 'Frustrated Client Turnaround',
    description: 'An account rebuild focused on intent + conversion paths.',
    results: [
      { metric: '$1K → $5K', label: 'Budget Growth' },
      { metric: '8-10x', label: 'ROAS Achieved' },
      { metric: '$100K', label: 'Potential Lead' },
    ],
    gradient: 'from-primary-500 to-secondary-400',
  },
  {
    title: 'Physiotherapy Clinic Revival',
    description: 'Local search + creative refresh + landing page optimization.',
    results: [
      { metric: '300%', label: 'Lead Increase' },
      { metric: '5+', label: 'New Staff Hired' },
      { metric: '3x', label: 'Locations' },
    ],
    gradient: 'from-secondary-400 to-primary-500',
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <AnimatedSection id="case-studies" background="gradient">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary">
          Proof • Real ROI
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          Real Results for <span className="text-gradient">Real Businesses</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Case studies are presented as highlights. These are verified metrics from actual clients.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <MagneticCard className="p-8 group h-full bg-gradient-to-br from-white to-peach-50">
              {/* Icon */}
              <motion.div
                className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 12 }}
              >
                <TrendingUp className="text-white" size={24} />
              </motion.div>

              <h3 className="text-2xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors">
                {study.title}
              </h3>
              <p className="text-dark-600 mb-6">{study.description}</p>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.results.map((result, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-3 bg-white rounded-lg shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-lg font-bold text-gradient">{result.metric}</div>
                    <div className="text-xs text-dark-500">{result.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3">
                <AnimatedButton variant="outline" size="sm">
                  View Case Study
                  <ArrowRight size={16} />
                </AnimatedButton>
                <AnimatedButton variant="primary" size="sm">
                  Book Strategy Call
                </AnimatedButton>
              </div>

              {/* Decorative sparkle */}
              <motion.div
                className="absolute top-4 right-4 text-primary-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={24} />
              </motion.div>
            </MagneticCard>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};
