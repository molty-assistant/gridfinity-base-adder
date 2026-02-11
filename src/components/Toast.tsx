import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onDismiss: () => void;
}

export default function Toast({ message, type = 'success', duration = 4000, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 300); // Wait for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  const bgClass = type === 'success'
    ? 'bg-emerald-900/90 border-emerald-600/50 text-emerald-200'
    : type === 'error'
      ? 'bg-red-900/90 border-red-600/50 text-red-200'
      : 'bg-blue-900/90 border-blue-600/50 text-blue-200';

  return (
    <div
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-xl border
        shadow-2xl backdrop-blur-sm text-sm font-medium
        transition-all duration-300
        ${bgClass}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
      `}
    >
      <div className="flex items-center gap-2">
        <span>{message}</span>
        <button
          onClick={() => { setVisible(false); setTimeout(onDismiss, 300); }}
          className="ml-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
