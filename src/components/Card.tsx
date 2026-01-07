import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover3d = false }) => {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3d) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 ${
        hover3d ? 'transform-gpu' : 'hover:shadow-2xl hover:-translate-y-1'
      } ${className}`}
      style={
        hover3d
          ? {
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
