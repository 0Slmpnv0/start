export interface VacancyShort {
  vac_id: number;
  name: string;
  description: string;
  payment: number;
}

export interface VacancyFull {
  name: string;
  payment: number;
  description: string;
  age_restriction: string;
  work_time: string;
  required_skills: string;
  full_description: string;
  connection: string;
}

const API_URL = 'https://api.startlab.site';

export async function getVacanciesList(): Promise<VacancyShort[]> {
  const res = await fetch(`${API_URL}/vacancies/list`);
  if (!res.ok) throw new Error('Ошибка загрузки списка вакансий');
  const data = await res.json();
  return (data.vacancies || []).map(
    ([vac_id, name, description, payment]: [number, string, string, number]) => ({
      vac_id,
      name,
      description,
      payment,
    })
  );
}

export async function getVacancyInfo(vac_id: number): Promise<VacancyFull> {
  const res = await fetch(`${API_URL}/vacancies/all_info/${vac_id}`);
  if (!res.ok) throw new Error('Ошибка загрузки вакансии');
  const data = await res.json();
  const [
    name,
    payment,
    description,
    age_restriction,
    work_time,
    required_skills,
    full_description,
    connection
  ] = data.vacancies;
  return {
    name,
    payment,
    description,
    age_restriction,
    work_time,
    required_skills,
    full_description,
    connection
  };
} 
