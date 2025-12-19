'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Box, Sphere, Torus, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';
import { Product } from '@/data/products';

interface ProductModelProps {
  product: Product;
  color: string;
}

const ProductModel = ({ product, color }: ProductModelProps) => {
  const meshRef = useRef<any>(null);
  
  // Rotate the product model slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // For demo purposes, we'll create a shape that represents different product types
  // In a real implementation, we would load the actual GLTF model based on product.modelPath

  // Create a different shape based on product category
  let category = '';
  if (product && product.category) {
    category = product.category.toLowerCase();
  }

  // Map categories to corresponding 3D shapes - DEFAULT to a shape if category doesn't match
  if (category.includes('laptop') || category.includes('computer') || category.includes('accessories')) {
    return (
      <Box ref={meshRef} args={[1.2, 0.8, 0.6]}>
        <MeshTransmissionMaterial
          transmission={0.9}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.05}
          color={color}
        />
      </Box>
    );
  } else if (category.includes('phone')) {
    return (
      <Box ref={meshRef} args={[0.8, 1.4, 0.2]}>
        <MeshTransmissionMaterial
          transmission={0.9}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.05}
          color={color}
        />
      </Box>
    );
  } else if (category.includes('watch') || category.includes('wearable')) {
    return (
      <TorusKnot ref={meshRef} args={[0.6, 0.2, 128, 32]}>
        <MeshTransmissionMaterial
          transmission={0.9}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.05}
          color={color}
        />
      </TorusKnot>
    );
  } else if (category.includes('speaker') || category.includes('audio')) {
    return (
      <Sphere ref={meshRef} args={[0.7, 32, 32]}>
        <MeshTransmissionMaterial
          transmission={0.9}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.05}
          color={color}
        />
      </Sphere>
    );
  } else {
    // Default shape for other categories or if product/category is invalid
    return (
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 100]}>
        <MeshTransmissionMaterial
          transmission={0.9}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.05}
          color={color || "#ffffff"}
        />
      </Torus>
    );
  }
};

export default ProductModel;