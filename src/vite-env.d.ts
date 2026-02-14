/// <reference types="vite/client" />

declare const __APP_VERSION__: string;

interface KofiWidgetOverlay {
  draw: (username: string, options: Record<string, string>) => void;
}

interface Window {
  kofiWidgetOverlay?: KofiWidgetOverlay;
  __kofiOverlayInit?: boolean;
}
