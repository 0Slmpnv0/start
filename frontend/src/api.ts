export interface VacancyShort {
  vac_id: number;
  name: string;
  recruiter_company: string;
  payment: string;
}

export interface VacancyFull {
  name: string;
  payment: string;
  recruiter_company: string;
  age_restriction: string;
  work_time: string;
  full_description: string;
  connection: string;
}

const API_URL = 'https://api.startlab.site';

export async function getVacanciesList(): Promise<VacancyShort[]> {
  const res = await fetch(`${API_URL}/vacancies/list`);
  if (!res.ok) throw new Error('Ошибка загрузки списка вакансий');
  const data = await res.json();
  return (data.vacancies || []).map(
    ([vac_id, name, payment, recruiter_company]: [number, string, string, string]) => ({
      vac_id,
      name,
      payment,
      recruiter_company,
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
    recruiter_company,
    age_restriction,
    work_time,
    full_description,
    connection
  ] = data.vacancies;
  return {
    name,
    payment,
    recruiter_company,
    age_restriction,
    work_time,
    full_description,
    connection
  };
} 
