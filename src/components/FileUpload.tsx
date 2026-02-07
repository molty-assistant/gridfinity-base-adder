import { useCallback, useRef, useState } from 'react';

interface FileUploadProps {
  onFileLoaded: (buffer: ArrayBuffer, filename: string) => void;
  disabled?: boolean;
}

export default function FileUpload({ onFileLoaded, disabled }: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.name.toLowerCase().endsWith('.stl')) {
        alert('Please upload an STL file.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          onFileLoaded(reader.result, file.name);
        }
      };
      reader.readAsArrayBuffer(file);
    },
    [onFileLoaded]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (disabled) return;
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile, disabled]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) setIsDragOver(true);
    },
    [disabled]
  );

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleClick = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      // Reset so the same file can be re-uploaded
      e.target.value = '';
    },
    [handleFile]
  );

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`
        border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
        transition-all duration-200 select-none
        ${
          isDragOver
            ? 'border-blue-400 bg-blue-950/30 text-blue-300'
            : disabled
              ? 'border-gray-700 bg-gray-900/30 text-gray-600 cursor-not-allowed'
              : 'border-gray-600 bg-gray-900/50 text-gray-400 hover:border-gray-500 hover:bg-gray-900/70'
        }
      `}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".stl"
        onChange={handleChange}
        className="hidden"
      />
      <div className="flex items-center justify-center gap-3">
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <span className="text-sm font-medium">
          Drop STL file here or click to upload
        </span>
      </div>
    </div>
  );
}
