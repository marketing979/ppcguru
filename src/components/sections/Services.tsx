import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, TrendingUp, Globe, Palette, Star, MessageCircle } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, MagneticCard, StaggeredList } from '../ui/AnimatedComponents';

const services = [
  {
    icon: Search,
    title: 'Google Ads Management',
    description: 'High-intent lead capture with account structure, keyword strategy, and landing page alignment.',
    tags: ['Search', 'Performance Max', 'Local'],
    color: 'from-primary-500 to-secondary-400',
  },
  {
    icon: Share2,
    title: 'Meta Ads (Facebook/Instagram)',
    description: 'Scroll-stopping creative + sharp targeting to drive demand, leads, and repeat customers.',
    tags: ['Reels', 'Stories', 'Lead Forms'],
    color: 'from-accent-500 to-primary-500',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Local Visibility',
    description: 'Rank for the terms your customers actually search — and convert that visibility into calls.',
    tags: ['Local SEO', 'On-page', 'Content'],
    color: 'from-secondary-400 to-primary-500',
  },
  {
    icon: Globe,
    title: 'High-Conversion Websites & Funnels',
    description: 'Conversion-first design, copy, and CRO to turn traffic into booked appointments and sales.',
    tags: ['Landing Pages', 'CRO', 'Analytics'],
    color: 'from-primary-500 to-accent-500',
  },
  {
    icon: Palette,
    title: 'Branding & Creatives',
    description: 'Premium creative systems: ad creatives, banners, social kits, and offer visuals that build trust.',
    tags: ['Design', 'Video', 'Templates'],
    color: 'from-secondary-500 to-secondary-400',
  },
  {
    icon: Star,
    title: 'Reputation & Local Presence',
    description: 'Google Business Profile, reviews, and community trust systems that reduce CAC and boost ROI.',
    tags: ['GBP', 'Reviews', 'Listings'],
    color: 'from-secondary-400 to-primary-400',
  },
];

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <AnimatedSection id="services" background="gray">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary">
          Full-funnel Performance Partner
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          What We <span className="text-gradient">Do</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          PPC Guru is a full-funnel performance partner built for Indian-owned businesses.
          We don't just run ads — we build revenue systems.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} variants={cardVariants}>
              <MagneticCard className="p-6 group cursor-pointer overflow-hidden relative h-full">
                {/* Background glow on hover */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 rounded-full blur-3xl`}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 6,
                    boxShadow: '0 10px 30px -10px rgba(232, 93, 4, 0.5)',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors relative z-10"
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <p className="text-dark-600 mb-4 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {service.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-peach-100 text-dark-700 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: '#E85D04', color: '#fff' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* WhatsApp link */}
                <motion.div
                  className="flex items-center gap-2 text-primary-500 font-semibold relative z-10"
                  whileHover={{ x: 5 }}
                >
                  <MessageCircle size={16} />
                  <span className="text-sm">WhatsApp support</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </MagneticCard>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
};
