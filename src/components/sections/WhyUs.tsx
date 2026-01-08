import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Shield } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, MagneticCard, AnimatedCounter } from '../ui/AnimatedComponents';

const reasons = [
  {
    icon: Target,
    title: 'Ex-Google Expertise',
    description: 'Managed/advised on high-spend portfolios and learned what drives profit at scale.',
    color: 'from-primary-500 to-secondary-400',
    stat: '500+',
    statLabel: 'Campaigns Managed',
  },
  {
    icon: TrendingUp,
    title: 'Performance Over Promises',
    description: 'Leads, sales, and ROI — not vanity metrics.',
    color: 'from-secondary-400 to-primary-500',
    stat: '8x',
    statLabel: 'Average ROAS',
  },
  {
    icon: Users,
    title: 'Deep Indian Community Insight',
    description: 'We understand Indian family decision-making, cultural nuance, and buying behavior.',
    color: 'from-accent-500 to-primary-500',
    stat: '100+',
    statLabel: 'Indian Businesses',
  },
  {
    icon: Shield,
    title: 'Honest & Transparent',
    description: 'Clear reporting, clear recommendations, no hype.',
    color: 'from-primary-500 to-accent-500',
    stat: '24/7',
    statLabel: 'WhatsApp Support',
  },
];

export const WhyUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatedSection id="why-us" background="white">
      <div className="text-center mb-16">
        <AnimatedHeading className="mb-4">
          Why Indian Businesses Choose{' '}
          <span className="text-gradient">PPC Guru</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          You'll get enterprise-level strategy with a community-first execution style —
          culturally aligned, WhatsApp-friendly, and focused on profit.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div key={index} variants={cardVariants}>
              <MagneticCard className="p-6 text-center group h-full">
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}
                  whileHover={{
                    scale: 1.15,
                    rotate: 12,
                    boxShadow: '0 20px 40px -15px rgba(232, 93, 4, 0.4)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Icon className="text-white" size={32} />

                  {/* Animated ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-primary-500`}
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                </motion.div>

                {/* Stat */}
                <motion.div
                  className="mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl font-bold text-gradient">{reason.stat}</span>
                  <p className="text-xs text-dark-500">{reason.statLabel}</p>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 leading-relaxed">{reason.description}</p>

                {/* Decorative line */}
                <motion.div
                  className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
              </MagneticCard>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
};
