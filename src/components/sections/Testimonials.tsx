import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, MagneticCard } from '../ui/AnimatedComponents';

const testimonials = [
  {
    quote: 'Finally an agency that delivered real leads and explained everything clearly. No fluff — just results.',
    author: 'Indian Business Owner',
    location: 'USA',
    rating: 5,
  },
  {
    quote: 'They understand Indian customers. WhatsApp support makes it easy, and reporting is transparent.',
    author: 'Founder',
    location: 'Canada',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <AnimatedSection background="gradient">
      <div className="text-center mb-16">
        <AnimatedBadge variant="secondary">
          Testimonials • Community Trust
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          What Indian Business Owners <span className="text-gradient">Say</span>
        </AnimatedHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: index === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <MagneticCard className="p-8 relative overflow-hidden h-full bg-gradient-to-br from-white to-peach-50">
              {/* Quote icon */}
              <motion.div
                className="absolute top-4 right-4 opacity-10"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Quote size={80} className="text-primary-500" />
              </motion.div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                    >
                      <Star className="w-5 h-5 fill-secondary-400 text-secondary-400" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-lg text-dark-700 leading-relaxed mb-6 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonial.quote}"
                </motion.p>

                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {testimonial.author[0]}
                  </motion.div>
                  <div>
                    <div className="font-bold text-dark-800">{testimonial.author}</div>
                    <div className="text-sm text-dark-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </MagneticCard>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};
