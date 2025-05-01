import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, as: Component = 'div', onMouseEnter, onMouseLeave }) => (
  <Component
    className={`bg-brand-darkblue hover:bg-brand-blue border border-brand-blue rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer ${className}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </Component>
);

export default Card; 