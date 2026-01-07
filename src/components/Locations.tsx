import React from 'react';
import { MapPin } from 'lucide-react';
import { Section } from './Section';

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
  return (
    <Section background="white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          USA & Canada • Local Expertise
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Locations We Serve
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Remote-first delivery with local nuance for Indian communities across North America.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <MapPin className="text-blue-600" size={24} />
            </div>

            <div className="text-center">
              <div className="font-bold text-gray-900 mb-1">{location.city}</div>
              <div className="text-xs text-gray-500">{location.country}</div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-xs text-gray-500">
              <div>Indian community focus</div>
              <div className="text-blue-600 font-medium">Lead gen • Local SEO</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
