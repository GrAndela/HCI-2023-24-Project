'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './button.css'; // Make sure to import your CSS file

interface ButtonProps {
  path: string;
  name: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ path, name, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Link href={path} passHref>
      <button
        className={`button ${isHovered ? 'hovered' : ''}`}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {children || name}
      </button>
    </Link>
  );
};

export default Button;
