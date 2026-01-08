import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingShapeProps {
    color: string;
    size: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    delay?: number;
    duration?: number;
    shape?: 'circle' | 'square' | 'triangle' | 'ring' | 'blob';
    blur?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({
    color,
    size,
    top,
    left,
    right,
    bottom,
    delay = 0,
    duration = 6,
    shape = 'circle',
    blur = 0,
}) => {
    const shapeStyles: Record<string, React.ReactNode> = {
        circle: (
            <div
                className="rounded-full"
                style={{
                    width: size,
                    height: size,
                    background: `linear-gradient(135deg, ${color}, transparent)`,
                    filter: blur ? `blur(${blur}px)` : undefined,
                }}
            />
        ),
        square: (
            <div
                className="rounded-lg"
                style={{
                    width: size,
                    height: size,
                    background: `linear-gradient(135deg, ${color}, transparent)`,
                    filter: blur ? `blur(${blur}px)` : undefined,
                }}
            />
        ),
        ring: (
            <div
                className="rounded-full"
                style={{
                    width: size,
                    height: size,
                    border: `3px solid ${color}`,
                    opacity: 0.5,
                    filter: blur ? `blur(${blur}px)` : undefined,
                }}
            />
        ),
        blob: (
            <div
                style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    filter: blur ? `blur(${blur}px)` : undefined,
                }}
            />
        ),
        triangle: (
            <div
                style={{
                    width: 0,
                    height: 0,
                    borderLeft: `${size / 2}px solid transparent`,
                    borderRight: `${size / 2}px solid transparent`,
                    borderBottom: `${size}px solid ${color}`,
                    opacity: 0.5,
                    filter: blur ? `blur(${blur}px)` : undefined,
                }}
            />
        ),
    };

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ top, left, right, bottom }}
            animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, 10, 0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 0.95, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {shapeStyles[shape]}
        </motion.div>
    );
};

export const FloatingElements: React.FC = () => {
    const { scrollY } = useScroll();

    // Parallax transforms for different layers
    const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y3 = useTransform(scrollY, [0, 1000], [0, -50]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Layer 1 - Slow moving large shapes */}
            <motion.div style={{ y: y1 }}>
                <FloatingShape
                    shape="blob"
                    color="rgba(232, 93, 4, 0.1)"
                    size={400}
                    top="-10%"
                    right="-5%"
                    blur={40}
                    duration={8}
                />
                <FloatingShape
                    shape="blob"
                    color="rgba(249, 168, 37, 0.1)"
                    size={350}
                    bottom="10%"
                    left="-10%"
                    blur={40}
                    duration={10}
                    delay={2}
                />
            </motion.div>

            {/* Layer 2 - Medium shapes */}
            <motion.div style={{ y: y2 }}>
                <FloatingShape
                    shape="ring"
                    color="#E85D04"
                    size={100}
                    top="20%"
                    left="10%"
                    duration={7}
                />
                <FloatingShape
                    shape="ring"
                    color="#F9A825"
                    size={80}
                    top="60%"
                    right="15%"
                    duration={6}
                    delay={1}
                />
                <FloatingShape
                    shape="circle"
                    color="rgba(232, 93, 4, 0.2)"
                    size={60}
                    top="30%"
                    right="25%"
                    blur={10}
                    duration={5}
                    delay={0.5}
                />
            </motion.div>

            {/* Layer 3 - Small fast shapes */}
            <motion.div style={{ y: y3 }}>
                <FloatingShape
                    shape="square"
                    color="rgba(230, 57, 70, 0.3)"
                    size={30}
                    top="40%"
                    left="20%"
                    duration={4}
                />
                <FloatingShape
                    shape="circle"
                    color="rgba(249, 168, 37, 0.4)"
                    size={20}
                    top="70%"
                    left="60%"
                    duration={3}
                    delay={0.5}
                />
                <FloatingShape
                    shape="triangle"
                    color="rgba(232, 93, 4, 0.3)"
                    size={40}
                    top="50%"
                    right="30%"
                    duration={5}
                    delay={1}
                />
                <FloatingShape
                    shape="ring"
                    color="#E63946"
                    size={50}
                    bottom="30%"
                    left="30%"
                    duration={4}
                    delay={2}
                />
            </motion.div>

            {/* Gradient orbs with glow */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(232, 93, 4, 0.15) 0%, transparent 70%)',
                    y: y1,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(249, 168, 37, 0.15) 0%, transparent 70%)',
                    y: y2,
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />
        </div>
    );
};

export default FloatingElements;
