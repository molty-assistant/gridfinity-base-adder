import { useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import type { FitMode } from '../lib/gridfinity';
import { GRID_UNIT, BASE_HEIGHT } from '../lib/gridfinity';

export type OrientationAxis = '+z' | '-z' | '+x' | '-x' | '+y' | '-y';
export type BasePlacement = 'outside' | 'inside';

interface ControlsProps {
  gridX: number;
  gridY: number;
  offsetX: number;
  offsetY: number;
  magnets: boolean;
  screws: boolean;
  fitMode: FitMode;
  orientation: OrientationAxis;
  placement: BasePlacement;
  modelDims: { width: number; depth: number; height: number } | null;
  hasModel: boolean;
  hasBase: boolean;
  hasCombined: boolean;
  isProcessing: boolean;
  filename: string;
  onGridXChange: (v: number) => void;
  onGridYChange: (v: number) => void;
  onOffsetXChange: (v: number) => void;
  onOffsetYChange: (v: number) => void;
  onMagnetsChange: (v: boolean) => void;
  onScrewsChange: (v: boolean) => void;
  onFitModeChange: (v: FitMode) => void;
  onOrientationChange: (v: OrientationAxis) => void;
  onPlacementChange: (v: BasePlacement) => void;
  onGenerate: () => void;
  onDownload: () => void;
}

const fitModeLabels: Record<FitMode, { label: string; desc: string }> = {
  inside: { label: 'Fit Inside', desc: 'Max grid units within model footprint' },
  outside: { label: 'Fit Outside', desc: 'Grid units encompass entire model' },
  custom: { label: 'Custom', desc: 'Manual grid count' },
};

const orientationButtons: { axis: OrientationAxis; label: string; title: string }[] = [
  { axis: '-z', label: '⊥', title: 'Bottom (-Z) — default' },
  { axis: '+z', label: '⊤', title: 'Top (+Z)' },
  { axis: '-x', label: '◀', title: 'Left (-X)' },
  { axis: '+x', label: '▶', title: 'Right (+X)' },
  { axis: '-y', label: '▼', title: 'Front (-Y)' },
  { axis: '+y', label: '▲', title: 'Back (+Y)' },
];

const placementLabels: Record<BasePlacement, { label: string; desc: string }> = {
  outside: { label: 'Outside', desc: 'Attach base outside the selected bottom face' },
  inside: { label: 'Inside', desc: 'Attach base inward on the selected face' },
};

export default function Controls({
  gridX,
  gridY,
  offsetX,
  offsetY,
  magnets,
  screws,
  fitMode,
  orientation,
  placement,
  modelDims,
  hasModel,
  hasCombined,
  isProcessing,
  filename,
  onGridXChange,
  onGridYChange,
  onOffsetXChange,
  onOffsetYChange,
  onMagnetsChange,
  onScrewsChange,
  onFitModeChange,
  onOrientationChange,
  onPlacementChange,
  onGenerate,
  onDownload,
}: ControlsProps) {
  const [settingsCopied, setSettingsCopied] = useState(false);

  const copySettings = () => {
    const text = [
      `Gridfinity Base Adder Settings`,
      `File: ${filename}`,
      `Grid: ${gridX}×${gridY} (${(gridX * GRID_UNIT).toFixed(0)}×${(gridY * GRID_UNIT).toFixed(0)}mm)`,
      `Fit Mode: ${fitModeLabels[fitMode].label}`,
      `Orientation: ${orientation}`,
      `Base Side: ${placementLabels[placement].label}`,
      `Offset: X=${offsetX.toFixed(1)}mm, Y=${offsetY.toFixed(1)}mm`,
      `Magnets: ${magnets ? 'Yes' : 'No'}`,
      `Screws: ${screws ? 'Yes' : 'No'}`,
      modelDims ? `Model: ${modelDims.width.toFixed(1)}×${modelDims.depth.toFixed(1)}×${modelDims.height.toFixed(1)}mm` : '',
      `\nhttps://molty-assistant.github.io/gridfinity-base-adder/`,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setSettingsCopied(true);
      setTimeout(() => setSettingsCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Generate Button — always visible and prominent */}
      <button
        onClick={onGenerate}
        disabled={!hasModel || isProcessing}
        className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all
          bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg shadow-blue-600/20
          disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none
          flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Generating…
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

      {!hasCombined && hasModel && !isProcessing && (
        <p className="text-xs text-yellow-400/70 text-center">
          Adjust settings below, then generate.
        </p>
      )}

      {/* Placement choice should always be visible */}
      {hasModel && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3">
          <label className="block text-xs font-medium text-gray-400 mb-2">
            Placement
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {(Object.keys(placementLabels) as BasePlacement[]).map((value) => (
              <button
                key={value}
                onClick={() => onPlacementChange(value)}
                disabled={isProcessing}
                className={`
                  py-2 px-2 rounded-lg text-xs font-medium transition-all
                  ${placement === value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {placementLabels[value].label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-gray-600 mt-1.5">
            {placementLabels[placement].desc}
          </p>
        </div>
      )}

      {/* Download section — prominent when available */}
      {hasCombined && (
        <div className="bg-emerald-950/30 border border-emerald-700/40 rounded-xl p-3 space-y-2.5">
          <button
            onClick={onDownload}
            disabled={isProcessing}
            className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all
              bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20
              disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download STL
          </button>

          <div className="flex items-center justify-between text-xs text-emerald-400/70">
            <span>{gridX}×{gridY} grid · {magnets ? 'magnets' : ''}{magnets && screws ? ' + ' : ''}{screws ? 'screws' : ''}{!magnets && !screws ? 'no features' : ''}</span>
            <button
              onClick={copySettings}
              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-emerald-800/30 transition-colors"
            >
              {settingsCopied ? (
                <>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  Copy settings
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Grid & Size — open by default */}
      <CollapsibleSection title="Grid Size" defaultOpen={true} badge={hasModel ? `${gridX}×${gridY}` : undefined}>
        <div className="space-y-3">
          {/* Fitting Mode */}
          {hasModel && (
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Fitting Mode
              </label>
              <div className="flex gap-1">
                {(Object.keys(fitModeLabels) as FitMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => onFitModeChange(mode)}
                    disabled={isProcessing}
                    className={`
                      flex-1 text-center px-2 py-2 rounded-lg text-xs transition-all
                      ${fitMode === mode
                        ? 'bg-blue-600/20 border border-blue-500/50 text-blue-300'
                        : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
                      }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                  >
                    <div className="font-medium">{fitModeLabels[mode].label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Grid X
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={gridX}
                onChange={(e) => onGridXChange(Math.max(1, parseInt(e.target.value) || 1))}
                disabled={!hasModel || isProcessing || (fitMode !== 'custom')}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Grid Y
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={gridY}
                onChange={(e) => onGridYChange(Math.max(1, parseInt(e.target.value) || 1))}
                disabled={!hasModel || isProcessing || (fitMode !== 'custom')}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm
                  text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="text-xs text-gray-500">
            Base: {(gridX * 42).toFixed(0)} × {(gridY * 42).toFixed(0)} mm · Height: {BASE_HEIGHT.toFixed(1)} mm
          </div>
        </div>
      </CollapsibleSection>

      {/* Orientation */}
      {hasModel && (
        <CollapsibleSection title="Orientation" badge={orientation}>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-2">
              Bottom Face
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {orientationButtons.map((btn) => (
                <button
                  key={btn.axis}
                  title={btn.title}
                  onClick={() => onOrientationChange(btn.axis)}
                  disabled={isProcessing}
                  className={`
                    py-2.5 px-2 rounded-lg text-sm font-medium transition-all
                    ${orientation === btn.axis
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-600'
                    }
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-gray-600 mt-1.5">
              Rotate model so a different face becomes the bottom
            </p>
          </div>

        </CollapsibleSection>
      )}

      {/* Offset & Features */}
      <CollapsibleSection title="Offset & Features">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Offset X: {offsetX.toFixed(1)} mm
            </label>
            <input
              type="range"
              min={-21}
              max={21}
              step={0.5}
              value={offsetX}
              onChange={(e) => onOffsetXChange(parseFloat(e.target.value))}
              disabled={!hasModel || isProcessing}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Offset Y: {offsetY.toFixed(1)} mm
            </label>
            <input
              type="range"
              min={-21}
              max={21}
              step={0.5}
              value={offsetY}
              onChange={(e) => onOffsetYChange(parseFloat(e.target.value))}
              disabled={!hasModel || isProcessing}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                accent-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2 pt-1">
            <label className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={magnets}
                onChange={(e) => onMagnetsChange(e.target.checked)}
                disabled={!hasModel || isProcessing}
                className="w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-500
                  focus:ring-blue-500 focus:ring-offset-gray-900
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div>
                <div className="text-sm text-gray-300">Magnet holes</div>
                <div className="text-[10px] text-gray-600">6×3mm round magnets</div>
              </div>
            </label>

            <label className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={screws}
                onChange={(e) => onScrewsChange(e.target.checked)}
                disabled={!hasModel || isProcessing}
                className="w-5 h-5 rounded bg-gray-800 border-gray-600 text-blue-500
                  focus:ring-blue-500 focus:ring-offset-gray-900
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div>
                <div className="text-sm text-gray-300">Screw holes</div>
                <div className="text-[10px] text-gray-600">M3 countersunk</div>
              </div>
            </label>
          </div>
        </div>
      </CollapsibleSection>

      {/* Model dimensions */}
      {modelDims && (
        <div className="bg-gray-900/50 rounded-xl p-3 text-xs text-gray-400 space-y-1">
          <div className="font-medium text-gray-300">Model Dimensions</div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-gray-500 text-[10px]">Width</div>
              <div>{modelDims.width.toFixed(1)}</div>
            </div>
            <div>
              <div className="text-gray-500 text-[10px]">Depth</div>
              <div>{modelDims.depth.toFixed(1)}</div>
            </div>
            <div>
              <div className="text-gray-500 text-[10px]">Height</div>
              <div>{modelDims.height.toFixed(1)}</div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-[10px] pt-1">
            Grid unit: {GRID_UNIT}mm · All processing runs in your browser
          </div>
        </div>
      )}
    </div>
  );
}
