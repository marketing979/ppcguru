import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';

const posts = [
  {
    title: 'Google Ads ROI Audit Checklist',
    description: 'Premium, actionable insights you can use today to improve your Google Ads performance.',
    tag: 'Featured',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Meta Creative System for Indian Buyers',
    description: 'How to create scroll-stopping creative that resonates with Indian audiences in North America.',
    tag: 'Featured',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Local SEO + GBP Growth Playbook',
    description: 'Complete guide to dominating local search and Google Business Profile for Indian businesses.',
    tag: 'Featured',
    gradient: 'from-orange-600 to-red-600',
  },
];

export const Insights: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Insights • Playbooks
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Insights
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Blog posts, offer breakdowns, and industry guides to help you grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} hover3d={true} className="p-6 group">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4`}>
              {post.tag}
            </div>

            <div className={`w-12 h-12 bg-gradient-to-br ${post.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <BookOpen className="text-white" size={24} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {post.description}
            </p>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Read
                <ArrowRight size={16} />
              </Button>
              <Button variant="primary" size="sm">
                Book Call
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
