import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { gsap } from 'gsap';

interface AnimatedButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
    href?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    href,
}) => {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-500 to-secondary-400 text-white',
        secondary: 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white',
        accent: 'bg-gradient-to-r from-accent-500 to-primary-500 text-white',
        outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const handleMouseEnter = () => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    };

    const handleMouseLeave = () => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const MotionComponent = motion[href ? 'a' : 'button'] as any;

    return (
        <MotionComponent
            ref={buttonRef}
            href={href}
            onClick={onClick}
            className={classes}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </MotionComponent>
    );
};

// Magnetic hover effect card
interface MagneticCardProps {
    children: React.ReactNode;
    className?: string;
}

export const MagneticCard: React.FC<MagneticCardProps> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ['7deg', '-7deg']);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-7deg', '7deg']);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;
        x.set(mouseX / centerX);
        y.set(mouseY / centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
        </motion.div>
    );
};

// Animated section wrapper
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'gray' | 'gradient' | 'dark' | 'peach';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    id,
    background = 'white',
}) => {
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-dark-50',
        gradient: 'bg-gradient-to-br from-peach-50 via-white to-secondary-50',
        dark: 'bg-dark-800 text-white',
        peach: 'bg-peach-50',
    };

    return (
        <motion.section
            id={id}
            className={`py-20 ${backgrounds[background]} ${className} overflow-hidden`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                {children}
            </div>
        </motion.section>
    );
};

// Animated heading with gradient reveal
interface AnimatedHeadingProps {
    children: React.ReactNode;
    className?: string;
    gradient?: boolean;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
    children,
    className = '',
    gradient = false,
}) => {
    return (
        <motion.h2
            className={`text-4xl md:text-5xl font-bold ${gradient ? 'text-gradient' : 'text-dark-800'} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.h2>
    );
};

// Floating badge with animation
interface AnimatedBadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent';
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ children, variant = 'primary' }) => {
    const variants = {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-secondary-100 text-secondary-700',
        accent: 'bg-accent-100 text-accent-700',
    };

    return (
        <motion.div
            className={`inline-flex items-center gap-2 ${variants[variant]} px-4 py-2 rounded-full text-sm font-semibold`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
        >
            {children}
        </motion.div>
    );
};

// Staggered list animation
interface StaggeredListProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
    children,
    className = '',
    staggerDelay = 0.1,
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

// Animated counter
interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    target,
    suffix = '',
    prefix = '',
    duration = 2,
}) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const counter = { value: 0 };
                    gsap.to(counter, {
                        value: target,
                        duration,
                        ease: 'power2.out',
                        onUpdate: () => setCount(Math.round(counter.value)),
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
};

// Glowing orb effect
export const GlowingOrb: React.FC<{ color?: string; size?: string; className?: string }> = ({
    color = 'primary',
    size = '96',
    className = '',
}) => {
    const colors = {
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-400',
        accent: 'bg-accent-500',
    };

    return (
        <motion.div
            className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${colors[color as keyof typeof colors] || color} w-${size} h-${size} ${className}`}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
};
