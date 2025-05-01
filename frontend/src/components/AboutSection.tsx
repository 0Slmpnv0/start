import React from 'react';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

const AboutSection: React.FC = () => (
  <section className="max-w-3xl mx-auto bg-brand-dark rounded-2xl shadow-lg p-8 mt-12 flex flex-col items-center border border-brand-blue">
    <Icon name="user" className="text-brand-light mb-4" />
    <SectionTitle className="mb-2">О нас</SectionTitle>
    <p className="text-lg text-brand-light text-center">
      Мы помогаем молодым людям найти свою первую работу и начать карьеру. Наша платформа специально разработана для подростков, чтобы сделать процесс поиска работы простым, современным и понятным. Здесь вы найдете только актуальные вакансии и поддержку на каждом этапе!
    </p>
  </section>
);

export default AboutSection; 