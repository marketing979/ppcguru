import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
  variant?: 'default' | 'bordered' | 'gradient';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover3d = false,
  variant = 'default'
}) => {
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

  const variants = {
    default: 'bg-white shadow-lg hover:shadow-xl',
    bordered: 'bg-white border-2 border-primary-100 hover:border-primary-300 shadow-sm hover:shadow-lg',
    gradient: 'bg-gradient-to-br from-white to-peach-50 shadow-lg hover:shadow-xl',
  };

  return (
    <div
      className={`rounded-xl transition-all duration-300 ${hover3d ? 'transform-gpu' : 'hover:-translate-y-1'
        } ${variants[variant]} ${className}`}
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
