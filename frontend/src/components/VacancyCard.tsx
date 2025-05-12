import React from 'react';
import Card from './Card';
import Icon from './Icon';

interface VacancyCardProps {
  title: string;
  recruiter_company: string;
  salary: string;
  onClick?: () => void;
  className?: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ title, salary, recruiter_company, onClick, className = '' }) => (
  <Card
    className={`group relative overflow-hidden min-h-[200px] md:min-h-[300px] xl:min-h-[400px] p-6 md:p-8 xl:p-12 flex flex-col w-full md:w-[360px] lg:w-[420px] xl:w-[480px] ${className}`}
    onClick={onClick}
  >
    <div className="flex mb-6 md:mb-8">
      <Icon name="search" className="text-brand-light mr-4 md:mr-6 @media (hover: hover) { group-hover:scale-110 } transition-transform text-3xl md:text-5xl flex-shrink-0" />
      <div className="min-h-[3.5rem] md:min-h-[4.5rem]">
        <h3 className="text-2xl md:text-4xl font-bold text-brand-light @media (hover: hover) { group-hover:text-brand-gray } transition-colors line-clamp-2">{title}</h3>
      </div>
    </div>
    <div className="mb-4 md:mb-8 min-h-[4.5rem] md:min-h-[6rem]">
      <p className="text-brand-light text-lg md:text-2xl line-clamp-3 overflow-hidden mb-4">{recruiter_company}</p>
      {salary && salary.trim() !== '' && (
        <span className="inline-block bg-brand-light text-brand-dark px-4 py-1 rounded-full font-semibold text-lg md:text-2xl shadow">
          {salary}
        </span>
      )}
    </div>
  </Card>
);

export default VacancyCard; 