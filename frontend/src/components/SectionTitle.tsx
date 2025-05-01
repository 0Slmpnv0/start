import React from 'react';

const SectionTitle: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-gray to-brand-light mb-6 ${className}`}>
    {children}
  </h2>
);

export default SectionTitle; 