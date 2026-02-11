export default function EmptyState() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
      {/* Gridfinity-style icon */}
      <div className="mb-6 relative">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30">
          {/* Grid cells */}
          <rect x="4" y="4" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
          <rect x="42" y="4" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
          <rect x="4" y="42" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
          <rect x="42" y="42" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
          {/* Magnet holes */}
          <circle cx="21" cy="21" r="5" stroke="currentColor" strokeWidth="1.5" className="text-gray-500" />
          <circle cx="59" cy="21" r="5" stroke="currentColor" strokeWidth="1.5" className="text-gray-500" />
          <circle cx="21" cy="59" r="5" stroke="currentColor" strokeWidth="1.5" className="text-gray-500" />
          <circle cx="59" cy="59" r="5" stroke="currentColor" strokeWidth="1.5" className="text-gray-500" />
        </svg>
        {/* Upload arrow overlay */}
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>

      <h3 className="text-base font-semibold text-gray-400 mb-2">
        Upload an STL file to get started
      </h3>
      <p className="text-sm text-gray-600 max-w-xs mb-4">
        Add a Gridfinity-compatible base to any 3D model — right in your browser.
      </p>

      {/* Use cases */}
      <div className="flex flex-wrap gap-2 justify-center">
        {['Bins', 'Holders', 'Organizers', 'Tool holders', 'Trays'].map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
