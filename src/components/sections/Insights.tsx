import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, MagneticCard, AnimatedButton } from '../ui/AnimatedComponents';

const posts = [
  {
    title: 'Google Ads ROI Audit Checklist',
    description: 'Premium, actionable insights you can use today to improve your Google Ads performance.',
    tag: 'Featured',
    gradient: 'from-primary-500 to-secondary-400',
  },
  {
    title: 'Meta Creative System for Indian Buyers',
    description: 'How to create scroll-stopping creative that resonates with Indian audiences in North America.',
    tag: 'Featured',
    gradient: 'from-secondary-400 to-primary-500',
  },
  {
    title: 'Local SEO + GBP Growth Playbook',
    description: 'Complete guide to dominating local search and Google Business Profile for Indian businesses.',
    tag: 'Featured',
    gradient: 'from-accent-500 to-primary-500',
  },
];

export const Insights: React.FC = () => {
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
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatedSection background="peach">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary">
          <Sparkles size={16} />
          Insights • Playbooks
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          <span className="text-gradient">Insights</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Blog posts, offer breakdowns, and industry guides to help you grow.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {posts.map((post, index) => (
          <motion.div key={index} variants={cardVariants}>
            <MagneticCard className="p-6 group h-full">
              {/* Tag */}
              <motion.div
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4`}
                whileHover={{ scale: 1.05 }}
              >
                {post.tag}
              </motion.div>

              {/* Icon */}
              <motion.div
                className={`w-12 h-12 bg-gradient-to-br ${post.gradient} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{
                  scale: 1.1,
                  rotate: 6,
                  boxShadow: '0 15px 30px -10px rgba(232, 93, 4, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <BookOpen className="text-white" size={24} />
              </motion.div>

              <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors">
                {post.title}
              </h3>

              <p className="text-dark-600 mb-6 leading-relaxed">
                {post.description}
              </p>

              <div className="flex gap-3">
                <AnimatedButton variant="outline" size="sm">
                  Read
                  <ArrowRight size={16} />
                </AnimatedButton>
                <AnimatedButton variant="primary" size="sm">
                  Book Call
                </AnimatedButton>
              </div>
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};
