import { useEffect, useState } from 'react';
import VacancyCard from '../components/VacancyCard';
import { getVacanciesList, VacancyShort, getVacancyInfo } from '../api';
import { useNavigate } from 'react-router-dom';

interface VacancyWithName extends VacancyShort {
  name: string;
}

const Vacancies = () => {
  const [vacancies, setVacancies] = useState<VacancyWithName[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getVacanciesList()
      .then(async (list) => {
        // Для каждой вакансии делаем запрос за именем
        const withNames = await Promise.all(
          list.map(async (v) => {
            try {
              const info = await getVacancyInfo(v.vac_id);
              return { ...v, name: info.name };
            } catch {
              return { ...v, name: 'Вакансия' };
            }
          })
        );
        setVacancies(withNames);
      })
      .catch(() => setError('Ошибка загрузки вакансий'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-brand-light">Вакансии</h1>
      {loading && <div className="text-brand-gray">Загрузка...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {vacancies && (
        <div className="flex flex-wrap justify-center gap-8 mb-20 max-w-6xl mx-auto min-h-[60vh]">
          {vacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.vac_id}
              title={vacancy.name}
              salary={vacancy.payment.toString()}
              recruiter_company={vacancy.recruiter_company}
              onClick={() => navigate(`/vacancy/${vacancy.vac_id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Vacancies; 