// shared/components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white p-6 rounded-md"
      style={{
        width: '328px',
        height: '68px',
        fontFamily: 'Lexend',
        fontSize: '17px',
        fontWeight: 500,
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign: 'center',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
