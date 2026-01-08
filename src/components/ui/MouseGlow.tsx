import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MouseGlow: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 30, stiffness: 200 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            className="fixed pointer-events-none z-0"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* Large outer glow */}
            <motion.div
                className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'radial-gradient(circle, rgba(232, 93, 4, 0.08) 0%, rgba(249, 168, 37, 0.04) 30%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Medium glow */}
            <motion.div
                className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'radial-gradient(circle, rgba(232, 93, 4, 0.12) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
            />

            {/* Inner bright glow */}
            <motion.div
                className="absolute w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'radial-gradient(circle, rgba(232, 93, 4, 0.15) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    );
};

export default MouseGlow;
