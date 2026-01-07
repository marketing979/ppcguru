import React from 'react';
import { Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';

const team = [
  {
    name: 'Dhaval',
    role: 'Marketing / Strategy',
    description: 'Performance strategist with deep experience managing North American accounts and scaling ROI.',
    skills: ['Strategy', 'Execution', 'Clear communication'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Jaydeep',
    role: 'Sales / Growth',
    description: 'Growth partner focused on outcomes, clarity, and building systems business owners actually use.',
    skills: ['Strategy', 'Execution', 'Clear communication'],
    gradient: 'from-emerald-600 to-teal-600',
  },
];

export const Team: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Founded 2021 • Ex-Google Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About PPC Guru
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Founded in 2021 by Dhaval and Jaydeep. We bring enterprise-level performance expertise
          to Indian-owned businesses in the USA & Canada.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 font-medium">
            Our edge: Community trust via Millennial Events + Indian Business Meetup (IBM).
            That means better buyer understanding, better messaging, and faster learning loops.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <Card key={index} hover3d={true} className="p-8 group">
            <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              {member.name[0]}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                {member.role}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>

              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
