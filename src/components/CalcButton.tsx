import React, { useState } from 'react';
import { Bear } from './Bear';

interface CalcButtonProps {
  value: string | number;
  onClick: () => void;
  type?: 'number' | 'operator';
  className?: string;
  icon?: React.ReactNode;
}

export function CalcButton({ value, onClick, type = 'number', className = '', icon }: CalcButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    onClick();
    setTimeout(() => setIsPressed(false), 150);
  };

  const baseClass = `
    relative p-4 rounded-xl font-bold shadow-lg
    ${type === 'number' ? 'bg-amber-800 hover:bg-amber-900' : 'bg-green-700 hover:bg-green-800'}
    text-white transition-all duration-150
  `;

  return (
    <button className={`${baseClass} ${className}`}>
      <div className="flex flex-col items-center gap-2">
        {type === 'number' && <Bear isPressed={isPressed} onClick={handleClick} />}
        {icon ? (
          <div onClick={handleClick} className="mt-2">{icon}</div>
        ) : (
          <span onClick={handleClick} className="text-lg mt-2">{value}</span>
        )}
      </div>
    </button>
  );
}