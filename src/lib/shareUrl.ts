export type ShareFitMode = 'inside' | 'outside' | 'custom';
export type ShareOrientation = '+z' | '-z' | '+x' | '-x' | '+y' | '-y';
export type SharePlacement = 'outside' | 'inside';

export interface ShareableConfig {
  gridX: number;
  gridY: number;
  offsetX: number;
  offsetY: number;
  fitMode: ShareFitMode;
  magnets: boolean;
  screws: boolean;
  orientation: ShareOrientation;
  placement: SharePlacement;
  activeCells: Set<string>;
}

const FIT_ENCODE: Record<ShareFitMode, string> = { inside: 'i', outside: 'o', custom: 'c' };
const FIT_DECODE: Record<string, ShareFitMode> = { i: 'inside', o: 'outside', c: 'custom' };
const VALID_ORIENTATIONS: ShareOrientation[] = ['+z', '-z', '+x', '-x', '+y', '-y'];
const SHARE_PARAM_KEYS = ['gx', 'gy', 'ox', 'oy', 'fit', 'mag', 'scr', 'ori', 'pla', 'cells'];

/** Returns true if the search string contains any of our share params. */
export function hasShareParams(search: string): boolean {
  const p = new URLSearchParams(search);
  return SHARE_PARAM_KEYS.some((k) => p.has(k));
}

/**
 * Encodes a ShareableConfig into URLSearchParams.
 * Only non-default values are included to keep URLs short.
 */
export function encodeShareParams(config: ShareableConfig): URLSearchParams {
  const p = new URLSearchParams();
  p.set('gx', String(config.gridX));
  p.set('gy', String(config.gridY));
  if (config.offsetX !== 0) p.set('ox', config.offsetX.toFixed(1));
  if (config.offsetY !== 0) p.set('oy', config.offsetY.toFixed(1));
  p.set('fit', FIT_ENCODE[config.fitMode]);
  if (!config.magnets) p.set('mag', '0');   // default true → only encode if false
  if (config.screws) p.set('scr', '1');     // default false → only encode if true
  if (config.orientation !== '-z') p.set('ori', config.orientation);
  if (config.placement !== 'outside') p.set('pla', 'in');

  if (config.fitMode === 'custom' && config.activeCells.size > 0) {
    // Encode as a compact bitfield: bit index = y*gridX + x
    const total = config.gridX * config.gridY;
    const bytes = new Uint8Array(Math.ceil(total / 8));
    for (const cell of config.activeCells) {
      const [x, y] = cell.split(',').map(Number);
      if (x >= 0 && x < config.gridX && y >= 0 && y < config.gridY) {
        const idx = y * config.gridX + x;
        bytes[Math.floor(idx / 8)] |= 1 << (idx % 8);
      }
    }
    p.set('cells', btoa(String.fromCharCode(...bytes)));
  }

  return p;
}

/**
 * Decodes URL search string into a partial ShareableConfig.
 * Returns null if no share params are present.
 * Throws if params are present but malformed.
 */
export function decodeShareParams(search: string): Partial<ShareableConfig> | null {
  if (!hasShareParams(search)) return null;

  const p = new URLSearchParams(search);
  const result: Partial<ShareableConfig> = {};

  const gx = parseInt(p.get('gx') ?? '');
  if (!isNaN(gx)) result.gridX = Math.max(1, Math.min(20, gx));

  const gy = parseInt(p.get('gy') ?? '');
  if (!isNaN(gy)) result.gridY = Math.max(1, Math.min(20, gy));

  const ox = parseFloat(p.get('ox') ?? '');
  if (!isNaN(ox)) result.offsetX = Math.max(-21, Math.min(21, ox));

  const oy = parseFloat(p.get('oy') ?? '');
  if (!isNaN(oy)) result.offsetY = Math.max(-21, Math.min(21, oy));

  const fit = p.get('fit');
  if (fit && fit in FIT_DECODE) result.fitMode = FIT_DECODE[fit];

  if (p.has('mag')) result.magnets = p.get('mag') !== '0';
  if (p.has('scr')) result.screws = p.get('scr') === '1';

  const ori = p.get('ori');
  if (ori && VALID_ORIENTATIONS.includes(ori as ShareOrientation)) {
    result.orientation = ori as ShareOrientation;
  }

  const pla = p.get('pla');
  if (pla === 'in') result.placement = 'inside';
  else if (pla === 'out') result.placement = 'outside';

  const cellsB64 = p.get('cells');
  if (cellsB64 && result.gridX && result.gridY) {
    // May throw if base64 is invalid — let the caller handle it
    const bytes = Uint8Array.from(atob(cellsB64), (c) => c.charCodeAt(0));
    const cells = new Set<string>();
    for (let y = 0; y < result.gridY; y++) {
      for (let x = 0; x < result.gridX; x++) {
        const idx = y * result.gridX + x;
        if (bytes[Math.floor(idx / 8)] & (1 << (idx % 8))) {
          cells.add(`${x},${y}`);
        }
      }
    }
    result.activeCells = cells;
  }

  return result;
}

/** Builds a full shareable URL for the given config. */
export function buildShareUrl(config: ShareableConfig): string {
  const params = encodeShareParams(config);
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}
