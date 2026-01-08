import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating sphere with distortion
const FloatingSphere: React.FC<{ color: string; position: [number, number, number]; scale?: number }> = ({
    color,
    position,
    scale = 1
}) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

// Animated torus
const AnimatedTorus: React.FC<{ color: string; position: [number, number, number] }> = ({ color, position }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={position}>
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
            </Torus>
        </Float>
    );
};

// Animated cube
const AnimatedCube: React.FC<{ color: string; position: [number, number, number]; scale?: number }> = ({
    color,
    position,
    scale = 0.8
}) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
            <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale}>
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
            </Box>
        </Float>
    );
};

// Particle field effect
const ParticleField: React.FC<{ count?: number; color?: string }> = ({ count = 100, color = '#E85D04' }) => {
    const points = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.05;
            points.current.rotation.x = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color={color} transparent opacity={0.6} sizeAttenuation />
        </points>
    );
};

// Main 3D Hero Scene Component
export const Hero3DScene: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F9A825" />

                <FloatingSphere color="#E85D04" position={[2.5, 1, 0]} scale={0.8} />
                <FloatingSphere color="#F9A825" position={[-2.5, -1, -1]} scale={0.6} />
                <AnimatedTorus color="#E63946" position={[0, 2, -2]} />
                <AnimatedCube color="#F9A825" position={[-3, 0, 0]} scale={0.5} />
                <ParticleField count={80} color="#E85D04" />

                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

// Floating elements for sections
export const FloatingElements3D: React.FC<{ variant?: 'orange' | 'gold' | 'accent' }> = ({ variant = 'orange' }) => {
    const colors = {
        orange: '#E85D04',
        gold: '#F9A825',
        accent: '#E63946',
    };

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />

                <FloatingSphere color={colors[variant]} position={[3, 1, -1]} scale={0.4} />
                <AnimatedCube color={colors[variant]} position={[-3, -1, -1]} scale={0.3} />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

// Interactive rotating logo-like element
export const Interactive3DElement: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
            groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#E85D04"
                    distort={0.3}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Sphere>
            <Torus args={[1.2, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#F9A825" metalness={0.9} roughness={0.1} />
            </Torus>
            <Torus args={[1.4, 0.03, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
                <meshStandardMaterial color="#E63946" metalness={0.8} roughness={0.2} />
            </Torus>
        </group>
    );
};

export const Dashboard3DScene: React.FC = () => {
    return (
        <div className="w-full h-64">
            <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#F9A825" />

                <Interactive3DElement />

                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};
