'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D model component to ensure it only runs on the client
const RotatingProduct = dynamic(() => import('@/components/3d/RotatingProduct'), {
  loading: () => null,
  ssr: false
});

const Hero3DCanvasOptimized = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile to potentially show a different experience
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // For mobile devices, we could show a static image or a simpler 3D model
  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
      </div>
    );
  }

  return (
    <Suspense fallback={null}>
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <RotatingProduct />
        </Suspense>
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
    </Suspense>
  );
};

export default Hero3DCanvasOptimized;