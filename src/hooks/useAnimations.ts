import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hook for scroll-triggered animations
export const useScrollAnimation = (
    animationConfig: gsap.TweenVars = {},
    triggerConfig: ScrollTrigger.Vars = {}
) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const defaultAnimation: gsap.TweenVars = {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            ...animationConfig,
        };

        const defaultTrigger: ScrollTrigger.Vars = {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...triggerConfig,
        };

        gsap.set(element, { opacity: 0, y: 50 });

        gsap.to(element, {
            ...defaultAnimation,
            scrollTrigger: defaultTrigger,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return elementRef;
};

// Hook for staggered children animations
export const useStaggerAnimation = (
    staggerDelay: number = 0.1,
    animationConfig: gsap.TweenVars = {}
) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = container.children;

        gsap.set(children, { opacity: 0, y: 30 });

        gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: staggerDelay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            ...animationConfig,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [staggerDelay]);

    return containerRef;
};

// Hook for parallax effect
export const useParallax = (speed: number = 0.5) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        gsap.to(element, {
            y: () => window.innerHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [speed]);

    return elementRef;
};

// Hook for magnetic button effect
export const useMagneticEffect = (strength: number = 0.3) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            setPosition({ x: deltaX, y: deltaY });
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return { elementRef, position };
};

// Hook for text reveal animation
export const useTextReveal = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        const text = element.innerText;
        element.innerHTML = text
            .split('')
            .map(char => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');

        const chars = element.querySelectorAll('span');

        gsap.set(chars, { opacity: 0, y: 50, rotateX: -90 });

        gsap.to(chars, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return textRef;
};

// Hook for counter animation
export const useCountUp = (endValue: number, duration: number = 2) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const counter = { value: 0 };

        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    value: endValue,
                    duration: duration,
                    ease: 'power2.out',
                    onUpdate: () => setCount(Math.round(counter.value)),
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [endValue, duration]);

    return { count, elementRef };
};
