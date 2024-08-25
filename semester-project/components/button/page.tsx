'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface ButtonProps {
  path: string;
  name: string;
  onClick?: () => void;
  setClickedButton?: React.Dispatch<React.SetStateAction<string>>; 
  children?: React.ReactNode; // Add children prop
}

const Button: React.FC<ButtonProps> = ({ path, name, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ?  '#663300' :'#cc6600',
    color: isHovered ? '#ffd699' : '#ffd699',
    padding: '10px 15px',
    width: '110px',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    whiteSpace: 'nowrap'
  };

  return (
    <Link href={path} passHref>
      <button
        onClick={onClick}
        style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {children || name} {/* Render children if provided, otherwise fallback to name */}
      </button>
    </Link>
  );
};

export default Button;
