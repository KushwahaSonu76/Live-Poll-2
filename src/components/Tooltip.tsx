import React from 'react';

interface Props {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: Props) {
  return (
    <div className="relative group flex items-center">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-xs text-gray-200 px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
        {text}
      </div>
    </div>
  );
}
