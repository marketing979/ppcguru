import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge } from '../ui/AnimatedComponents';

const locations = [
  { city: 'New York', country: 'USA' },
  { city: 'New Jersey', country: 'USA' },
  { city: 'Chicago', country: 'USA' },
  { city: 'Dallas', country: 'USA' },
  { city: 'Los Angeles', country: 'USA' },
  { city: 'San Francisco Bay Area', country: 'USA' },
  { city: 'Toronto', country: 'Canada' },
  { city: 'Vancouver', country: 'Canada' },
  { city: 'Calgary', country: 'Canada' },
  { city: 'Ottawa', country: 'Canada' },
];

export const Locations: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatedSection background="white">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary">
          USA & Canada • Local Expertise
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          Locations We <span className="text-gradient">Serve</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Remote-first delivery with local nuance for Indian communities across North America.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {locations.map((location, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white border-2 border-dark-100 rounded-xl p-6 cursor-pointer relative overflow-hidden"
            whileHover={{
              borderColor: '#E85D04',
              boxShadow: '0 20px 40px -15px rgba(232, 93, 4, 0.25)',
              y: -5,
            }}
          >
            {/* Hover background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4 mx-auto relative z-10"
              whileHover={{
                scale: 1.15,
                rotate: 12,
                backgroundColor: '#E85D04',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MapPin className="text-primary-500 group-hover:text-white transition-colors" size={24} />
            </motion.div>

            <div className="text-center relative z-10">
              <div className="font-bold text-dark-800 mb-1 group-hover:text-primary-500 transition-colors">
                {location.city}
              </div>
              <div className="text-xs text-dark-500">{location.country}</div>
            </div>

            <motion.div
              className="mt-4 pt-4 border-t border-dark-100 space-y-1 text-xs text-dark-500 relative z-10"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
            >
              <div>Indian community focus</div>
              <div className="text-primary-500 font-medium">Lead gen • Local SEO</div>
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};
