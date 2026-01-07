import React from 'react';
import { Quote } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';

const testimonials = [
  {
    quote: 'Finally an agency that delivered real leads and explained everything clearly. No fluff — just results.',
    author: 'Indian Business Owner',
    location: 'USA',
  },
  {
    quote: 'They understand Indian customers. WhatsApp support makes it easy, and reporting is transparent.',
    author: 'Founder',
    location: 'Canada',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section background="gradient">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Testimonials • Community Trust
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Indian Business Owners Say
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} hover3d={true} className="p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Quote size={80} className="text-blue-600" />
            </div>

            <div className="relative z-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
