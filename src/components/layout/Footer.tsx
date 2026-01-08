import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const footerLinks = {
  Services: [
    'Google Ads',
    'Meta Ads',
    'SEO',
    'Website & CRO',
    'Branding & Creatives',
    'Google Business Profile',
    'Reviews & Reputation',
    'WhatsApp Campaigns',
  ],
  Industries: [
    'Restaurants & Food',
    'Immigration',
    'Real Estate & Mortgage',
    'Insurance',
    'Clinics',
    'Renovation & Home Services',
    'Professional Services',
    'E-commerce',
  ],
  Locations: [
    'New York',
    'New Jersey',
    'Chicago',
    'Dallas',
    'Los Angeles',
    'San Francisco Bay Area',
    'Toronto',
    'Vancouver',
    'Calgary',
    'Ottawa',
  ],
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-dark-800 text-dark-300 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #E85D04 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-4 max-w-7xl py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                alt="PPC Guru"
                className="h-12 w-auto brightness-0 invert"
              />
            </motion.div>
            <p className="text-sm text-dark-400 mb-6">
              Performance marketing for Indian-owned businesses in the USA & Canada. Founded by ex-Google consultants.
            </p>
            <div className="space-y-3">
              {[
                { icon: Mail, text: 'contact@ppcguru.ca' },
                { icon: Phone, text: 'WhatsApp Support Available' },
                { icon: MapPin, text: 'USA & Canada' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm"
                  whileHover={{ x: 5, color: '#E85D04' }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon size={16} className="text-primary-500" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: '#E85D04',
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div key={title} variants={itemVariants}>
              <h3 className="text-white font-bold mb-4 text-lg">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      className="text-sm text-dark-400 hover:text-primary-400 transition-colors inline-block"
                      whileHover={{ x: 5, color: '#E85D04' }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-dark-400">
            © 2024 PPC Guru. All rights reserved. Serving the Indian community since 2021.
          </p>
          <div className="flex gap-6 text-sm text-dark-400">
            {['Privacy Policy', 'Terms of Service'].map((text) => (
              <motion.a
                key={text}
                href="#"
                className="hover:text-primary-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
