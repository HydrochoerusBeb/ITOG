import React from 'react';
import s from './ButtonUniversal.module.css';

const ButtonUniversal = ({ title, color, textColor, isDisabled, onClick, isAdded }) => {
  const buttonClass = color === 'green' ? `${s.button} ${s.green}` : s.button;
  const addedClass = isAdded && `${s.sended}`;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${buttonClass} ${addedClass}`}
      style={{
        color: isAdded ? 'rgba(40, 40, 40, 1)' : textColor,
        border: isAdded && '1px solid rgba(40, 40, 40, 1)',
      }}
    >
      {title}
    </button>
  );
};

export default ButtonUniversal;
