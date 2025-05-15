import React from 'react';
import SectionTitle from './SectionTitle';

const AboutSection: React.FC = () => (
  <section className="max-w-3xl mx-auto bg-brand-dark rounded-2xl shadow-lg p-8 mt-12 flex flex-col items-center border border-brand-blue">
    <img src="/start_icon_gradient.PNG" alt="О нас" className="mb-1 w-16 h-16 object-contain" />
    <SectionTitle className="mb-2">О нас</SectionTitle>
    <p className="text-lg text-brand-light text-center">
      Мы помогаем молодым людям найти свою первую работу и начать карьеру. Наша платформа специально разработана для подростков, чтобы сделать процесс поиска работы простым, современным и понятным. Здесь вы найдете только актуальные вакансии и поддержку на каждом этапе!
    </p>
  </section>
);

export default AboutSection;
