"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedOrb() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
            // Slight floating animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
            <MeshDistortMaterial
                color="#00B8A9"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </Sphere>
    );
}

export function OrbScene() {
    return (
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full -z-10 opacity-70 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <pointLight position={[-5, -5, -5]} intensity={1} color="#ffffff" />
                <AnimatedOrb />
            </Canvas>
        </div>
    );
}
