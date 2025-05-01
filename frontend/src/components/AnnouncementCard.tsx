import React, { useState } from 'react';
import Card from './Card';
import Icon from './Icon';

const AnnouncementCard: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      className={`group relative flex flex-col items-center justify-center h-full transition-colors duration-300 min-h-[200px] md:min-h-[300px] xl:min-h-[400px] p-6 md:p-8 xl:p-12 w-full md:w-[360px] lg:w-[420px] xl:w-[480px]`}
      onClick={() => {}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon name="megaphone" className="text-brand-light mb-3 group-hover:text-brand-gray transition-colors" />
      <h3 className="text-2xl font-bold text-brand-light mb-2">Доска объявлений</h3>
      <p className="text-brand-gray group-hover:text-brand-light transition-colors text-lg">{hovered ? 'В разработке' : 'Скоро здесь будут объявления!'}</p>
    </Card>
  );
};

export default AnnouncementCard; 