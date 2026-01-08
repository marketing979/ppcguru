import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Plane, Home, ShieldCheck, Stethoscope, Wrench, Briefcase, ShoppingBag } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge } from '../ui/AnimatedComponents';

const industries = [
  { icon: Utensils, name: 'Restaurants & Food', color: 'from-primary-500 to-accent-500' },
  { icon: Plane, name: 'Immigration', color: 'from-secondary-400 to-primary-500' },
  { icon: Home, name: 'Real Estate & Mortgage', color: 'from-primary-500 to-secondary-400' },
  { icon: ShieldCheck, name: 'Insurance', color: 'from-accent-500 to-primary-500' },
  { icon: Stethoscope, name: 'Clinics (Dental/Physio/Medical)', color: 'from-primary-400 to-secondary-400' },
  { icon: Wrench, name: 'Renovation & Home Services', color: 'from-secondary-400 to-primary-400' },
  { icon: Briefcase, name: 'Professional Services', color: 'from-dark-600 to-dark-800' },
  { icon: ShoppingBag, name: 'E-commerce', color: 'from-accent-400 to-primary-500' },
];

export const Industries: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatedSection id="industries" background="white">
      <div className="text-center mb-16">
        <AnimatedBadge variant="secondary">
          Specialization • Indian Buyers
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          Industries We <span className="text-gradient">Specialize In</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          If your customers are Indian families in North America, we understand your market.
        </motion.p>

        <motion.div
          className="bg-gradient-to-r from-peach-50 to-secondary-50 border-l-4 border-primary-500 p-6 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-dark-700 font-medium">
            What makes our niche advantage real: Language, cultural nuance, family decision-making,
            and community trust signals — all mapped into offer + funnel + ad execution.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl border-2 border-dark-100 p-6 cursor-pointer overflow-hidden"
              whileHover={{
                borderColor: 'transparent',
                boxShadow: '0 25px 50px -12px rgba(232, 93, 4, 0.25)',
                y: -5,
              }}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0`}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                whileHover={{
                  scale: 1.15,
                  rotate: 12,
                  boxShadow: '0 15px 30px -10px rgba(232, 93, 4, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon className="text-white" size={28} />
              </motion.div>

              <h3 className="text-sm font-bold text-dark-800 mb-2 group-hover:text-primary-500 transition-colors relative z-10">
                {industry.name}
              </h3>

              <div className="space-y-1 text-xs text-dark-500 relative z-10">
                <motion.div
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  High-intent leads
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  Better close rates
                </motion.div>
              </div>

              <motion.div
                className="mt-4 pt-4 border-t border-dark-100 space-y-1 relative z-10"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-xs text-primary-500 font-medium">Offer mapping</div>
                <div className="text-xs text-primary-500 font-medium">ROI tracking</div>
              </motion.div>

              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
};
