import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ['#E85D04', '#F9A825', '#E63946']
    );

    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.8]);

    return (
        <>
            {/* Main progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left"
                style={{
                    scaleX,
                    backgroundColor,
                }}
            />

            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-[9998] origin-left blur-sm"
                style={{
                    scaleX,
                    backgroundColor,
                    opacity: glowOpacity,
                }}
            />
        </>
    );
};

export default ScrollProgress;
