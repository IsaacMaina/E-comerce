'use client';

import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

const LoadingOverlay = ({ isLoading, message }: LoadingOverlayProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center">
        <LoadingSpinner size="lg" />
        {message && <p className="mt-4 text-gray-700 dark:text-gray-300">{message}</p>}
      </div>
    </motion.div>
  );
};

export default LoadingOverlay;