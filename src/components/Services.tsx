import React from 'react';
import { Search, Share2, TrendingUp, Globe, Palette, Star, MessageCircle } from 'lucide-react';
import { Card } from './Card';
import { Section } from './Section';

const services = [
  {
    icon: Search,
    title: 'Google Ads Management',
    description: 'High-intent lead capture with account structure, keyword strategy, and landing page alignment.',
    tags: ['Search', 'Performance Max', 'Local'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Meta Ads (Facebook/Instagram)',
    description: 'Scroll-stopping creative + sharp targeting to drive demand, leads, and repeat customers.',
    tags: ['Reels', 'Stories', 'Lead Forms'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Local Visibility',
    description: 'Rank for the terms your customers actually search — and convert that visibility into calls.',
    tags: ['Local SEO', 'On-page', 'Content'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'High-Conversion Websites & Funnels',
    description: 'Conversion-first design, copy, and CRO to turn traffic into booked appointments and sales.',
    tags: ['Landing Pages', 'CRO', 'Analytics'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'Branding & Creatives',
    description: 'Premium creative systems: ad creatives, banners, social kits, and offer visuals that build trust.',
    tags: ['Design', 'Video', 'Templates'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Star,
    title: 'Reputation & Local Presence',
    description: 'Google Business Profile, reviews, and community trust systems that reduce CAC and boost ROI.',
    tags: ['GBP', 'Reviews', 'Listings'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" background="gray">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Full-funnel Performance Partner
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What We Do
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          PPC Guru is a full-funnel performance partner built for Indian-owned businesses.
          We don't just run ads — we build revenue systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              hover3d={true}
              className="p-6 group cursor-pointer overflow-hidden relative"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}></div>

              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <Icon className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <MessageCircle size={16} />
                <span className="text-sm">WhatsApp support</span>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
