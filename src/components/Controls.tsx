interface ControlsProps {
  gridX: number;
  gridY: number;
  offsetX: number;
  offsetY: number;
  magnets: boolean;
  modelDims: { width: number; depth: number; height: number } | null;
  hasModel: boolean;
  hasBase: boolean;
  hasCombined: boolean;
  isProcessing: boolean;
  onGridXChange: (v: number) => void;
  onGridYChange: (v: number) => void;
  onOffsetXChange: (v: number) => void;
  onOffsetYChange: (v: number) => void;
  onMagnetsChange: (v: boolean) => void;
  onGenerate: () => void;
  onDownload: () => void;
}

export default function Controls({
  gridX,
  gridY,
  offsetX,
  offsetY,
  magnets,
  modelDims,
  hasModel,
  hasBase,
  hasCombined,
  isProcessing,
  onGridXChange,
  onGridYChange,
  onOffsetXChange,
  onOffsetYChange,
  onMagnetsChange,
  onGenerate,
  onDownload,
}: ControlsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
        Controls
      </h2>

      {modelDims && (
        <div className="bg-gray-900/50 rounded-lg p-3 text-xs text-gray-400 space-y-1">
          <div className="font-medium text-gray-300 mb-1">Model Size</div>
          <div>X: {modelDims.width.toFixed(1)} mm</div>
          <div>Y: {modelDims.depth.toFixed(1)} mm</div>
          <div>Z: {modelDims.height.toFixed(1)} mm</div>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">
            Grid Units X
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={gridX}
            onChange={(e) => onGridXChange(Math.max(1, parseInt(e.target.value) || 1))}
            disabled={!hasModel || isProcessing}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">
            Grid Units Y
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={gridY}
            onChange={(e) => onGridYChange(Math.max(1, parseInt(e.target.value) || 1))}
            disabled={!hasModel || isProcessing}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="text-xs text-gray-500">
          Base size: {(gridX * 42).toFixed(0)} × {(gridY * 42).toFixed(0)} mm
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">
            Offset X (mm)
          </label>
          <input
            type="number"
            step={0.5}
            value={offsetX}
            onChange={(e) => onOffsetXChange(parseFloat(e.target.value) || 0)}
            disabled={!hasModel || isProcessing}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">
            Offset Y (mm)
          </label>
          <input
            type="number"
            step={0.5}
            value={offsetY}
            onChange={(e) => onOffsetYChange(parseFloat(e.target.value) || 0)}
            disabled={!hasModel || isProcessing}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm
              text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="magnets"
            checked={magnets}
            onChange={(e) => onMagnetsChange(e.target.checked)}
            disabled={!hasModel || isProcessing}
            className="w-4 h-4 rounded bg-gray-800 border-gray-600 text-blue-500
              focus:ring-blue-500 focus:ring-offset-gray-900
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <label htmlFor="magnets" className="text-sm text-gray-300">
            Magnet holes (6mm)
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={onGenerate}
          disabled={!hasModel || isProcessing}
          className="w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all
            bg-blue-600 hover:bg-blue-500 text-white
            disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
            flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
              Generate Base
            </>
          )}
        </button>

        <button
          onClick={onDownload}
          disabled={!hasCombined || isProcessing}
          className="w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all
            bg-emerald-600 hover:bg-emerald-500 text-white
            disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
            flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download STL
        </button>
      </div>

      {hasBase && !hasCombined && (
        <p className="text-xs text-yellow-400/70">
          Base preview shown in green. Click Generate to create the combined mesh.
        </p>
      )}
    </div>
  );
}
