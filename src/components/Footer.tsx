import React from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    'Google Ads',
    'Meta Ads',
    'SEO',
    'Website & CRO',
    'Branding & Creatives',
    'Google Business Profile',
    'Reviews & Reputation',
  ],
  Industries: [
    'Restaurants & Food',
    'Immigration',
    'Real Estate & Mortgage',
    'Insurance',
    'Clinics',
    'Renovation',
  ],
  Locations: [
    'New York',
    'New Jersey',
    'Chicago',
    'Dallas',
    'Los Angeles',
    'San Francisco',
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">PPC Guru</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Performance marketing for Indian-owned businesses in the USA & Canada. Founded by ex-Google consultants.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-blue-400" />
                <span>contact@ppcguru.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-blue-400" />
                <span>WhatsApp Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-blue-400" />
                <span>USA & Canada</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 PPC Guru. All rights reserved. Serving the Indian community since 2021.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
