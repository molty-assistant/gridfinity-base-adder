import { useMemo } from 'react';

interface GridSelectorProps {
  gridX: number;
  gridY: number;
  activeCells: Set<string>;
  onToggleCell: (x: number, y: number) => void;
  disabled?: boolean;
}

/**
 * 2D Grid selector for custom fitting mode.
 * Shows a grid of clickable cells where users can toggle individual units on/off.
 */
export default function GridSelector({
  gridX,
  gridY,
  activeCells,
  onToggleCell,
  disabled = false,
}: GridSelectorProps) {
  // Generate cell data
  const cells = useMemo(() => {
    const result: Array<{ x: number; y: number; isActive: boolean }> = [];
    for (let y = 0; y < gridY; y++) {
      for (let x = 0; x < gridX; x++) {
        result.push({
          x,
          y,
          isActive: activeCells.has(`${x},${y}`),
        });
      }
    }
    return result;
  }, [gridX, gridY, activeCells]);

  const activeCount = activeCells.size;
  const totalCount = gridX * gridY;
  const isAllActive = activeCount === totalCount;
  const isNoneActive = activeCount === 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-medium text-gray-400">
          Grid Units
        </label>
        <div className="text-xs text-gray-500">
          {activeCount} / {totalCount} active
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            for (let y = 0; y < gridY; y++) {
              for (let x = 0; x < gridX; x++) {
                onToggleCell(x, y);
              }
            }
          }}
          disabled={disabled || isAllActive}
          className="flex-1 text-xs px-2 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Select All
        </button>
        <button
          onClick={() => {
            for (let y = 0; y < gridY; y++) {
              for (let x = 0; x < gridX; x++) {
                onToggleCell(x, y);
              }
            }
          }}
          disabled={disabled || isNoneActive}
          className="flex-1 text-xs px-2 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Grid visualization */}
      <div
        className="grid gap-1 p-3 bg-gray-900/50 rounded-xl border border-gray-800"
        style={{
          gridTemplateColumns: `repeat(${gridX}, minmax(0, 1fr))`,
          aspectRatio: `${gridX} / ${gridY}`,
          minHeight: Math.min(150, gridX * 25),
          maxHeight: 200,
        }}
      >
        {cells.map((cell) => (
          <button
            key={`${cell.x},${cell.y}`}
            onClick={() => onToggleCell(cell.x, cell.y)}
            disabled={disabled}
            title={`${cell.x + 1}, ${cell.y + 1}`}
            className={`
              relative rounded-md transition-all duration-150
              ${
                cell.isActive
                  ? 'bg-blue-600/30 border-2 border-blue-500 hover:bg-blue-600/40'
                  : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-750'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            style={{ minHeight: '20px' }}
          >
            {/* Optional: show coordinate on hover or for smaller grids */}
            {gridX * gridY <= 16 && (
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-gray-400">
                {cell.x + 1},{cell.y + 1}
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="text-[10px] text-gray-600">
        Click cells to toggle. X axis (width) is horizontal.
      </p>
    </div>
  );
}
