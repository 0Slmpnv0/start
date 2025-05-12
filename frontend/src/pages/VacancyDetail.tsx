import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVacancyInfo, VacancyFull } from '../api';
import Icon from '../components/Icon';

const VacancyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vacancy, setVacancy] = useState<VacancyFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const goBack = () => navigate('/vacancies');

  useEffect(() => {
    if (!id) return;
    getVacancyInfo(Number(id))
      .then(setVacancy)
      .catch(() => setError('Ошибка загрузки вакансии'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-brand-gray">Загрузка...</div>;
  }
  if (error || !vacancy) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error || 'Вакансия не найдена'}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-brand-darkblue rounded-lg shadow-md p-8 border border-brand-blue">
        <h1 className="text-3xl font-bold mb-4 text-brand-light select-text">{vacancy.name}</h1>
        <p className="text-2xl font-semibold text-brand-light mb-2 select-text">{vacancy.payment} ₽</p>
        <p className="text-brand-light mb-6 select-text">{vacancy.recruiter_company}</p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-brand-light select-text">Возрастное ограничение</h2>
            <p className="text-brand-gray select-text">{vacancy.age_restriction}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-brand-light select-text">График работы</h2>
            <p className="text-brand-gray select-text">{vacancy.work_time}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-brand-light select-text">Подробное описание</h2>
            <p className="text-brand-gray select-text">{vacancy.full_description}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-brand-light select-text">Связь с работодателем</h2>
            <p className="text-brand-gray select-text">{vacancy.connection}</p>
          </section>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-8">
        <button 
          onClick={goBack}
          className="flex items-center text-brand-light @media (hover: hover) { hover:text-brand-gray } transition-colors group"
        >
          <Icon name="arrow-left" className="mr-2 @media (hover: hover) { group-hover:translate-x-[-4px] } transition-transform" />
          <span className="text-lg">Назад к списку вакансий</span>
        </button>
      </div>
    </div>
  );
};

export default VacancyDetail; 