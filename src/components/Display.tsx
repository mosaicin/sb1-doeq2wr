import React from 'react';

interface DisplayProps {
  equation: string;
  value: string;
}

export function Display({ equation, value }: DisplayProps) {
  return (
    <div className="bg-green-50 rounded-xl p-4 mb-4 h-24 flex flex-col justify-end items-end relative overflow-hidden">
      {/* Forest Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-4 h-12 bg-green-800 rounded-t-lg" />
        <div className="absolute bottom-0 left-1/2 w-4 h-16 bg-green-800 rounded-t-lg" />
        <div className="absolute bottom-0 right-1/4 w-4 h-14 bg-green-800 rounded-t-lg" />
      </div>
      
      <div className="relative">
        <div className="text-gray-600 text-sm h-6">{equation}</div>
        <div className="text-4xl font-bold text-gray-800 break-all break-words">
          {value}
        </div>
      </div>
    </div>
  );
}