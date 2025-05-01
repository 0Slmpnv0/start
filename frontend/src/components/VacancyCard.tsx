import React from 'react';
import Card from './Card';
import Icon from './Icon';

interface VacancyCardProps {
  title: string;
  description: string;
  salary: string;
  onClick?: () => void;
  className?: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ title, description, salary, onClick, className = '' }) => (
  <Card
    className={`group relative overflow-hidden min-h-[200px] md:min-h-[300px] xl:min-h-[400px] p-6 md:p-8 xl:p-12 flex flex-col justify-center w-full md:w-[360px] lg:w-[420px] xl:w-[480px] ${className}`}
    onClick={onClick}
  >
    <div className="flex items-center mb-6 md:mb-8">
      <Icon name="search" className="text-brand-light mr-4 md:mr-6 group-hover:scale-110 transition-transform text-3xl md:text-5xl" />
      <h3 className="text-2xl md:text-4xl font-bold text-brand-light group-hover:text-brand-gray transition-colors">{title}</h3>
    </div>
    <p className="text-brand-light mb-4 md:mb-8 text-lg md:text-2xl">{description}</p>
    {salary && salary.trim() !== '' && (
      <span className="inline-block bg-brand-light text-brand-dark px-4 py-1 rounded-full font-semibold text-lg md:text-2xl shadow">
        {salary}
      </span>
    )}
  </Card>
);

export default VacancyCard; 