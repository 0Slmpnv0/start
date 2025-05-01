import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import VacancyCard from '../components/VacancyCard';
import AnnouncementCard from '../components/AnnouncementCard';
import AboutSection from '../components/AboutSection';
import SectionTitle from '../components/SectionTitle';
import Icon from '../components/Icon';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle className="text-center mb-16">Найдите себе работу на старте!</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto items-stretch">
        <div className="flex justify-center">
          <VacancyCard
            title="Вакансии"
            description="Ищите подходящую работу среди множества предложений от работодателей"
            salary=""
            onClick={() => navigate('/vacancies')}
          />
        </div>
        <div className="flex justify-center">
          <AnnouncementCard />
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default Home; 
