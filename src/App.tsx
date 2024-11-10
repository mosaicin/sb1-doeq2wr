import React, { useState } from 'react';
import { Calculator, Plus, Minus, X, Divide, Equal, Delete } from 'lucide-react';
import { CalcButton } from './components/CalcButton';
import { Display } from './components/Display';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [lastOperation, setLastOperation] = useState(false);

  const handleNumber = (num: string) => {
    setLastOperation(false);
    if (display === '0' || lastOperation) {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setLastOperation(true);
    setEquation(display + ' ' + op + ' ');
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setLastOperation(true);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setLastOperation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        {/* Forest Theme Header */}
        <div className="flex items-center justify-center gap-2 text-white mb-8">
          <Calculator className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Bear Calculator</h1>
        </div>

        {/* Calculator Body */}
        <div className="bg-brown-100 rounded-3xl p-6 shadow-2xl bg-opacity-90 backdrop-blur-sm border-4 border-amber-900 relative">
          {/* Forest Decorations */}
          <div className="absolute -top-6 left-4">🌲</div>
          <div className="absolute -top-8 right-8">🌲</div>
          <div className="absolute -bottom-4 left-8">🌿</div>
          <div className="absolute -bottom-4 right-4">🌿</div>

          <Display equation={equation} value={display} />

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Clear and Delete */}
            <button
              onClick={clear}
              className="col-span-2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg flex items-center justify-center gap-2"
            >
              <span className="text-xl">Clear</span>
            </button>
            <button
              onClick={() => setDisplay(display.slice(0, -1) || '0')}
              className="col-span-2 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-xl font-bold transform hover:scale-95 transition-transform duration-150 ease-in-out shadow-lg flex items-center justify-center gap-2"
            >
              <Delete className="w-6 h-6" />
            </button>

            {/* Numbers */}
            {[7, 8, 9].map((num) => (
              <CalcButton
                key={num}
                value={num}
                onClick={() => handleNumber(num.toString())}
              />
            ))}
            <CalcButton
              value="/"
              onClick={() => handleOperator('/')}
              type="operator"
              icon={<Divide className="w-6 h-6" />}
            />

            {[4, 5, 6].map((num) => (
              <CalcButton
                key={num}
                value={num}
                onClick={() => handleNumber(num.toString())}
              />
            ))}
            <CalcButton
              value="*"
              onClick={() => handleOperator('*')}
              type="operator"
              icon={<X className="w-6 h-6" />}
            />

            {[1, 2, 3].map((num) => (
              <CalcButton
                key={num}
                value={num}
                onClick={() => handleNumber(num.toString())}
              />
            ))}
            <CalcButton
              value="-"
              onClick={() => handleOperator('-')}
              type="operator"
              icon={<Minus className="w-6 h-6" />}
            />

            <CalcButton
              value="0"
              onClick={() => handleNumber('0')}
            />
            <CalcButton
              value="."
              onClick={() => handleNumber('.')}
            />
            <CalcButton
              value="="
              onClick={calculate}
              type="operator"
              icon={<Equal className="w-6 h-6" />}
            />
            <CalcButton
              value="+"
              onClick={() => handleOperator('+')}
              type="operator"
              icon={<Plus className="w-6 h-6" />}
            />
          </div>
        </div>

        {/* Forest Footer */}
        <div className="text-center text-green-100 text-sm">
          🌲 Powered by Bear Math 🌲
        </div>
      </div>
    </div>
  );
}

export default App;