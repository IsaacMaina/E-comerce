import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const LoadingSpinner = ({ size = 'md', label }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Loader2 className={`animate-spin ${sizeClasses[size]} text-blue-600`} />
      {label && <p className="mt-2 text-gray-600 dark:text-gray-400">{label}</p>}
    </div>
  );
};

export default LoadingSpinner;