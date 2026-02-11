import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  badge?: string;
}

export default function CollapsibleSection({ title, defaultOpen = false, children, badge }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left
          bg-gray-900/30 hover:bg-gray-800/50 transition-colors active:bg-gray-800/70"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          {badge && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`transition-all duration-200 overflow-hidden ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
