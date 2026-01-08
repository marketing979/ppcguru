import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle, Rocket, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, AnimatedButton } from '../ui/AnimatedComponents';

const weeks = [
  {
    week: 'Week 1',
    title: 'Audit + Strategy',
    description: 'Deep dive into your business, competitors, and market opportunities.',
    icon: '🔍',
    color: 'from-primary-500 to-secondary-400'
  },
  {
    week: 'Week 2',
    title: 'Offer + Funnel Alignment',
    description: 'Map your value proposition to customer intent and conversion paths.',
    icon: '🎯',
    color: 'from-secondary-400 to-accent-500'
  },
  {
    week: 'Week 3',
    title: 'Launch + Conversion Tracking',
    description: 'Deploy campaigns with proper tracking and measurement systems.',
    icon: '🚀',
    color: 'from-accent-500 to-primary-500'
  },
  {
    week: 'Week 4',
    title: 'Optimize + Scale Plan',
    description: 'Analyze performance and create a roadmap for profitable scaling.',
    icon: '📈',
    color: 'from-primary-400 to-secondary-400'
  },
];

// 3D Card Component with tilt effect
const TiltCard: React.FC<{ children: React.ReactNode; className?: string; index: number }> = ({
  children,
  className = '',
  index
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const HeroOffer: React.FC = () => {
  return (
    <AnimatedSection background="gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <AnimatedBadge variant="secondary">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Rocket size={16} />
              </motion.div>
              Hero Offer
            </AnimatedBadge>
          </motion.div>

          <AnimatedHeading className="mb-4 mt-4">
            <motion.span
              className="text-gradient inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              First Month Free
            </motion.span>
          </AnimatedHeading>

          <motion.p
            className="text-xl text-dark-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our PeriHero / Hero Offer is designed to remove risk and prove ROI quickly — the right way.
          </motion.p>
        </div>

        {/* Weeks Cards */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background decoration */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-400/5"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          />

          <div className="grid md:grid-cols-4 relative z-10">
            {weeks.map((item, index) => (
              <TiltCard key={index} index={index} className="h-full">
                <motion.div
                  className="p-8 border-b md:border-b-0 md:border-r border-dark-100 last:border-0 group relative overflow-hidden h-full"
                  whileHover={{ backgroundColor: 'rgba(253, 248, 246, 0.5)' }}
                >
                  {/* Hover gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />

                  <div className="relative z-10">
                    {/* Icon with animation */}
                    <motion.div
                      className="text-4xl mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Week badge */}
                    <motion.div
                      className={`inline-block text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.week}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-dark-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Check icon with animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                      className="mt-4"
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="text-white" size={20} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Connection line */}
                  {index < weeks.length - 1 && (
                    <motion.div
                      className="hidden md:flex absolute top-1/2 -right-3 z-20 items-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-white rounded-full border-2 border-primary-500 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="text-primary-500" size={12} />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </TiltCard>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500"
              style={{ backgroundSize: '200% 100%' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <div className="relative z-10 p-10 text-center text-white">
              <motion.div
                className="flex items-center justify-center gap-2 mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={24} />
                </motion.div>
                <span className="text-sm font-semibold opacity-90">Limited Time Offer</span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={24} />
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Get Started?
              </motion.h3>

              <motion.p
                className="mb-6 text-primary-100 text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We only take fits we can win. Book your strategy call today.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <AnimatedButton variant="secondary" size="lg">
                  <Zap size={20} />
                  Qualify for Hero Offer
                </AnimatedButton>

                <motion.div
                  className="flex items-center gap-2 text-sm text-white/80"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star size={16} className="text-yellow-300" />
                  <span>No credit card required</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-12 gap-8">
          {['Google Partner', 'Meta Partner', '100+ Clients'].map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center gap-2 text-dark-500 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, color: '#E85D04' }}
            >
              <CheckCircle size={16} className="text-primary-500" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
