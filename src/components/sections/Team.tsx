import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, MagneticCard } from '../ui/AnimatedComponents';

const team = [
  {
    name: 'Dhaval',
    role: 'Marketing / Strategy',
    description: 'Performance strategist with deep experience managing North American accounts and scaling ROI.',
    skills: ['Strategy', 'Execution', 'Clear communication'],
    gradient: 'from-primary-500 to-secondary-400',
  },
  {
    name: 'Jaydeep',
    role: 'Sales / Growth',
    description: 'Growth partner focused on outcomes, clarity, and building systems business owners actually use.',
    skills: ['Strategy', 'Execution', 'Clear communication'],
    gradient: 'from-secondary-400 to-primary-500',
  },
];

export const Team: React.FC = () => {
  return (
    <AnimatedSection id="about" background="white">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary">
          Founded 2021 • Ex-Google Experience
        </AnimatedBadge>
        <AnimatedHeading className="mb-4 mt-4">
          About <span className="text-gradient">PPC Guru</span>
        </AnimatedHeading>
        <motion.p
          className="text-xl text-dark-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Founded in 2021 by Dhaval and Jaydeep. We bring enterprise-level performance expertise
          to Indian-owned businesses in the USA & Canada.
        </motion.p>
        <motion.div
          className="bg-gradient-to-r from-peach-50 to-secondary-50 border-l-4 border-primary-500 p-6 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-dark-700 font-medium">
            Our edge: Community trust via Millennial Events + Indian Business Meetup (IBM).
            That means better buyer understanding, better messaging, and faster learning loops.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: index === 0 ? -10 : 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <MagneticCard className="p-8 group h-full bg-gradient-to-br from-white to-peach-50">
              {/* Avatar */}
              <motion.div
                className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 mx-auto relative`}
                whileHover={{
                  scale: 1.1,
                  rotate: 6,
                  boxShadow: '0 20px 40px -15px rgba(232, 93, 4, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {member.name[0]}

                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary-500"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-dark-800 mb-2 group-hover:text-primary-500 transition-colors">
                  {member.name}
                </h3>
                <motion.div
                  className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {member.role}
                </motion.div>

                <p className="text-dark-600 mb-6 leading-relaxed">{member.description}</p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="bg-peach-100 text-dark-700 px-4 py-2 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: '#E85D04', color: '#fff' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </MagneticCard>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};
