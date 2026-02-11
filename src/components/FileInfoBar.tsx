interface FileInfoBarProps {
  filename: string;
  triangleCount: number;
  dimensions: { width: number; depth: number; height: number } | null;
  onRemove: () => void;
}

export default function FileInfoBar({ filename, triangleCount, dimensions, onRemove }: FileInfoBarProps) {
  return (
    <div className="flex items-center gap-3 bg-gray-800/60 border border-gray-700/50 rounded-xl px-3 py-2.5">
      {/* File icon */}
      <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      </div>

      {/* File details */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-200 truncate">{filename}</div>
        <div className="text-xs text-gray-500 flex flex-wrap gap-x-3 gap-y-0.5">
          <span>▲ {triangleCount.toLocaleString()} triangles</span>
          {dimensions && (
            <span>
              {dimensions.width.toFixed(1)} × {dimensions.depth.toFixed(1)} × {dimensions.height.toFixed(1)} mm
            </span>
          )}
        </div>
      </div>

      {/* Remove button */}
      <button
        onClick={onRemove}
        className="shrink-0 p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-950/30 transition-all"
        title="Remove file"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
