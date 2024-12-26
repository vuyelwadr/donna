import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: Props) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-md w-full animate-modal flex items-center justify-between`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}