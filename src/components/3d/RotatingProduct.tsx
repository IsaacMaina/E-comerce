'use client';

import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Box } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingProduct = () => {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  // For demo purposes, we'll create an electronic-like 3D shape
  // Using a box to represent a tech device like a smart device or electronic component
  return (
    <Box ref={meshRef} args={[1, 0.8, 0.5]}>
      <MeshTransmissionMaterial
        transmission={0.9}
        roughness={0.1}
        thickness={0.3}
        ior={1.5}
        chromaticAberration={0.05}
        color="#0ea5e9" // Using a tech blue color
      />
    </Box>
  );
};

export default RotatingProduct;