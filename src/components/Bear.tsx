import React from 'react';

interface BearProps {
  isPressed: boolean;
  onClick: () => void;
}

export function Bear({ isPressed, onClick }: BearProps) {
  return (
    <div 
      className={`relative transition-transform duration-150 ${
        isPressed ? 'transform translate-y-1' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative">
        {/* Bear Body */}
        <div className="w-12 h-12 bg-amber-900 rounded-full mx-auto relative">
          {/* Bear Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-amber-800 rounded-full">
              {/* Eyes */}
              <div className="absolute w-1.5 h-1.5 bg-black rounded-full" style={{ top: '35%', left: '30%' }} />
              <div className="absolute w-1.5 h-1.5 bg-black rounded-full" style={{ top: '35%', right: '30%' }} />
              {/* Snout */}
              <div className="absolute w-4 h-3 bg-amber-700 rounded-full" style={{ bottom: '20%', left: '25%' }}>
                <div className="absolute w-1.5 h-1 bg-black rounded-full" style={{ bottom: '40%', left: '40%' }} />
              </div>
            </div>
          </div>
          {/* Ears */}
          <div className="absolute w-3 h-3 bg-amber-900 rounded-full" style={{ top: '-5%', left: '15%' }} />
          <div className="absolute w-3 h-3 bg-amber-900 rounded-full" style={{ top: '-5%', right: '15%' }} />
          {/* Arms */}
          <div className={`absolute w-3 h-4 bg-amber-900 rounded-full transition-transform duration-150 ${
            isPressed ? 'rotate-45' : 'rotate-0'
          }`} style={{ bottom: '20%', left: '-10%' }} />
          <div className={`absolute w-3 h-4 bg-amber-900 rounded-full transition-transform duration-150 ${
            isPressed ? '-rotate-45' : 'rotate-0'
          }`} style={{ bottom: '20%', right: '-10%' }} />
        </div>
      </div>
    </div>
  );
}