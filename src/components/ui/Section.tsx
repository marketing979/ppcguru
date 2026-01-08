import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark' | 'peach';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-dark-50',
    gradient: 'bg-gradient-to-br from-peach-50 via-white to-secondary-50',
    dark: 'bg-dark-800 text-white',
    peach: 'bg-peach-50',
  };

  return (
    <section id={id} className={`py-20 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
