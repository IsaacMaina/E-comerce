'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import Hero3DCanvasOptimized from './Hero3DCanvasOptimized';

const Hero3D = () => {
  const { scrollYProgress } = useScroll();
  const cameraZ = useTransform(scrollYProgress, [0, 1], [5, 10]);

  return (
    <div className="relative w-full h-[70vh] bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <Hero3DCanvasOptimized />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Electronic Sales
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Premium electronics with immersive 3D visualization
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero3D;