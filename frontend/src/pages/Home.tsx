import { useNavigate } from 'react-router-dom';
import NavigationCard from '../components/NavigationCard';
import AboutSection from '../components/AboutSection';
import SectionTitle from '../components/SectionTitle';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [isAnnouncementsHovered, setIsAnnouncementsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle className="text-center mb-16">Найдите себе работу на старте!</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto items-stretch">
        <div className="flex justify-center">
          <NavigationCard
            title="Вакансии"
            description="Ищите подходящую работу среди множества предложений от работодателей"
            icon="search"
            onClick={() => navigate('/vacancies')}
          />
        </div>
        <div className="flex justify-center">
          <NavigationCard
            title="Доска объявлений"
            description={isAnnouncementsHovered ? "В разработке" : "Скоро здесь будут объявления!"}
            icon="megaphone"
            onMouseEnter={() => setIsAnnouncementsHovered(true)}
            onMouseLeave={() => setIsAnnouncementsHovered(false)}
          />
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default Home; 
