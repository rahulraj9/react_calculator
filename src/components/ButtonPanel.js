import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onClick, onClear, onEqual }) => {
  const buttons = [
    { value: 'C', onClick: onClear },
    { value: '+/-', onClick },
    { value: '%', onClick },
    { value: '/', onClick },
    { value: '7', onClick },
    { value: '8', onClick },
    { value: '9', onClick },
    { value: '*', onClick },
    { value: '4', onClick },
    { value: '5', onClick },
    { value: '6', onClick },
    { value: '-', onClick },
    { value: '1', onClick },
    { value: '2', onClick },
    { value: '3', onClick },
    { value: '+', onClick },
    { value: '0', onClick },
    { value: '00', onClick },
    { value: '.', onClick },
    { value: '=', onClick: onEqual }
  ];

  return (
    <div className="buttons">
      {buttons.map((btn, index) => (
        <Button key={index} onClick={btn.onClick} value={btn.value} />
      ))}
    </div>
  );
};

export default ButtonPanel;
