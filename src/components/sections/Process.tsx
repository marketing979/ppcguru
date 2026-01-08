import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge } from '../ui/AnimatedComponents';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Business Understanding',
    description: 'Understand your offer, margins, close process, and what "good" looks like for ROI.',
    color: 'from-primary-500 to-secondary-400',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Strategy & Funnel Design',
    description: 'Map intent → message → landing pages → tracking so leads turn into revenue.',
    color: 'from-secondary-400 to-primary-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Optimization',
    description: 'Ship fast, measure cleanly, and iterate weekly.',
    color: 'from-primary-500 to-accent-500',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale Profitably',
    description: 'Scale budgets only when tracking and unit economics make sense.',
    color: 'from-accent-500 to-primary-500',
  },
];

export const Process: React.FC = () => {
  return (
    <AnimatedSection background="gray">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary">
          Process • Simple • Proven
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          Our Simple, <span className="text-gradient">Proven Process</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Built for busy founders: clarity, speed, and transparent actions.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Connection Line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-400 to-accent-500 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative ${isEven ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step number indicator */}
                  <motion.div
                    className={`hidden md:flex absolute top-8 ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border-4 border-primary-500 z-10`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-primary-500 font-bold">{step.number}</span>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 12,
                          boxShadow: '0 15px 30px -10px rgba(232, 93, 4, 0.4)',
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>

                      <div className="flex-1">
                        <motion.div
                          className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}
                        >
                          Step {step.number}
                        </motion.div>
                        <h3 className="text-xl font-bold text-dark-800 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-dark-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow to next step */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="mt-4 flex justify-end"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="text-primary-500" size={24} />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
