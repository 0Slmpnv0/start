import React, { useState, useEffect } from 'react';
import Card from './Card';
import Icon from './Icon';

type IconName = 'search' | 'megaphone' | 'user' | 'mail' | 'phone' | 'arrow-left';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: IconName;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  onMouseEnter,
  onMouseLeave,
  className = '' 
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const isAnnouncements = title === 'Доска объявлений';

  useEffect(() => {
    const handleDocumentClick = () => {
      if (isAnnouncements && isClicked) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isAnnouncements, isClicked]);

  const handleClick = () => {
    if (isAnnouncements) {
      setIsClicked(true);
    }
    onClick?.();
  };

  return (
    <Card
      className={`group relative overflow-hidden min-h-[200px] md:min-h-[300px] xl:min-h-[400px] p-6 md:p-8 xl:p-12 flex flex-col w-full md:w-[360px] lg:w-[420px] xl:w-[480px] select-none ${className} ${isClicked ? 'bg-brand-blue' : ''}`}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex mb-6 md:mb-8">
        <Icon 
          name={icon} 
          className={`text-brand-light mr-4 md:mr-6 ${!isAnnouncements ? 'group-hover:scale-110' : ''} transition-transform text-3xl md:text-5xl flex-shrink-0`} 
        />
        <div className="min-h-[3.5rem] md:min-h-[4.5rem]">
          <h3 className={`text-2xl md:text-4xl font-bold text-brand-light ${!isAnnouncements ? 'group-hover:text-brand-gray' : ''} transition-colors line-clamp-2`}>
            {title}
          </h3>
        </div>
      </div>
      <div className="mb-4 md:mb-8 min-h-[4.5rem] md:min-h-[6rem]">
        <p className={`text-brand-light text-lg md:text-2xl line-clamp-3 overflow-hidden ${isClicked ? 'hidden' : ''}`}>
          {description}
        </p>
        {isClicked && (
          <p className="text-brand-light text-lg md:text-2xl line-clamp-3 overflow-hidden">
            В разработке
          </p>
        )}
      </div>
    </Card>
  );
};

export default NavigationCard; 