import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Play, Users, Sparkles, TrendingUp, Target, ChevronDown } from 'lucide-react';
import { AnimatedButton, AnimatedBadge, AnimatedCounter } from '../ui/AnimatedComponents';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-peach-50 via-white to-secondary-50">
      {/* Animated 3D-like floating orbs using CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(232, 93, 4, 0.4), rgba(232, 93, 4, 0.1) 50%, transparent 70%)',
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(249, 168, 37, 0.3), rgba(249, 168, 37, 0.1) 50%, transparent 70%)',
            x: useTransform(mouseXSpring, (x) => -x * 0.5),
            y: useTransform(mouseYSpring, (y) => -y * 0.5),
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(230, 57, 70, 0.2), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Smaller floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 8 + Math.random() * 20,
              height: 8 + Math.random() * 20,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(232, 93, 4, 0.6)' :
                  i % 3 === 1 ? 'rgba(249, 168, 37, 0.6)' :
                    'rgba(230, 57, 70, 0.5)'
                }, transparent 70%)`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 20, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated rings */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-primary-300/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border-2 border-secondary-300/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 93, 4, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 93, 4, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-7xl pt-20 relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <AnimatedBadge variant="primary">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <Users size={16} />
                </motion.div>
                <span>Performance Marketing for Indian Businesses</span>
              </AnimatedBadge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-800 mb-6 mt-6 leading-tight"
            >
              Generate Profitable Leads in{' '}
              <motion.span
                className="text-gradient inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                USA & Canada
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-dark-600 mb-8 leading-relaxed"
            >
              Ex-Google strategists helping Indian-owned businesses generate profitable leads,
              consistent growth, and real ROI with Google Ads, Meta Ads, and conversion-focused systems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <AnimatedButton size="lg" href="#contact">
                <span>Book Free Strategy Call</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" href="#case-studies">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play size={20} />
                </motion.div>
                <span>View Case Studies</span>
              </AnimatedButton>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-sm text-dark-600">
              {['First Month Free', 'WhatsApp Support', 'No Fake Promises'].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(232, 93, 4, 0.05)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <motion.div
                    className="w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-xs">✓</span>
                  </motion.div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="perspective-1000"
          >
            <motion.div
              className="relative"
              animate="animate"
              variants={floatingVariants}
              style={{
                x: useTransform(mouseXSpring, (x) => x * 0.5),
                y: useTransform(mouseYSpring, (y) => y * 0.5),
              }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden"
                initial={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                whileHover={{
                  boxShadow: '0 35px 60px -12px rgba(232, 93, 4, 0.3)',
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(232, 93, 4, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-xl font-bold text-dark-800">Live Performance Dashboard</h3>
                  <motion.span
                    className="text-xs font-semibold text-primary-600 bg-primary-100 px-4 py-2 rounded-full flex items-center gap-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-primary-600 rounded-full"
                      animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    Live
                  </motion.span>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Main Stats Card */}
                  <motion.div
                    className="bg-gradient-to-br from-peach-50 to-secondary-50 rounded-2xl p-6 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <span className="text-sm font-medium text-dark-600">Qualified Leads Generated</span>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="text-primary-500" size={24} />
                      </motion.div>
                    </div>
                    <div className="flex items-end gap-3 relative z-10">
                      <span className="text-5xl font-bold text-dark-800">
                        +<AnimatedCounter target={312} />
                      </span>
                      <motion.span
                        className="text-sm font-semibold text-primary-600 mb-2 flex items-center gap-1"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <TrendingUp size={16} />
                        +47% this month
                      </motion.span>
                    </div>
                    <motion.div
                      className="mt-4 h-3 bg-primary-100 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '78%', backgroundPosition: ['0% 50%', '100% 50%'] }}
                        transition={{
                          width: { delay: 1.5, duration: 1, ease: 'easeOut' },
                          backgroundPosition: { duration: 3, repeat: Infinity }
                        }}
                        style={{ backgroundSize: '200% 100%' }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Channel Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Google Ads', icon: Target, stat: '4.2x ROAS', color: 'from-primary-500 to-secondary-400' },
                      { name: 'Meta Ads', icon: Users, stat: '2.8x ROAS', color: 'from-secondary-400 to-primary-500' }
                    ].map((channel, index) => (
                      <motion.div
                        key={channel.name}
                        className="bg-white border-2 border-dark-100 rounded-xl p-5 cursor-pointer relative overflow-hidden group"
                        whileHover={{
                          borderColor: '#E85D04',
                          boxShadow: '0 10px 30px -5px rgba(232, 93, 4, 0.25)',
                          y: -5,
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.15 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5`}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="flex items-center gap-3 mb-2 relative z-10">
                          <motion.div
                            className={`w-10 h-10 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center`}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <channel.icon className="text-white" size={20} />
                          </motion.div>
                          <div>
                            <div className="font-bold text-dark-800">{channel.name}</div>
                            <div className="text-xs text-dark-500">Active Campaign</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 relative z-10">
                          <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                          />
                          <span className="text-sm font-semibold text-primary-500">{channel.stat}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Banner */}
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500 rounded-2xl p-6 text-white relative overflow-hidden"
                    style={{ backgroundSize: '200% 100%' }}
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="text-sm opacity-90 mb-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🎉 Limited Time Hero Offer
                      </motion.div>
                      <div className="text-3xl font-bold mb-2">First Month Free</div>
                      <div className="text-sm opacity-90">Qualify → Launch → Optimize → Scale</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative glow */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-3xl blur-3xl"
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary-400 to-accent-500 rounded-2xl blur-2xl"
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-dark-500 font-medium">Scroll to explore</span>
        <motion.div
          className="w-8 h-12 border-2 border-dark-300 rounded-full flex justify-center pt-2 relative overflow-hidden"
          whileHover={{ borderColor: '#E85D04' }}
        >
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-secondary-400 rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-primary-500" size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};
