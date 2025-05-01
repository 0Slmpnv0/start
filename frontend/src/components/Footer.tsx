import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-darker border-t border-brand-blue py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="text-brand-gray text-sm">
            © {currentYear} Все права АО СТАРТ защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 