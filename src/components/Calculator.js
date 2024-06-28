import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel 
        onClick={handleClick} 
        onClear={handleClear} 
        onEqual={handleEqual} 
      />
    </div>
  );
};

export default Calculator;
