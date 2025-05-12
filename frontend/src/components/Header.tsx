import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-brand-darker border-b border-brand-blue shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {/* <img 
            src="public/images/logo.jpg" 
            alt="СТАРТ"
            className="h-10 w-auto object-contain"
            style={{ minWidth: '120px' }}
          /> */}
          СТАРТ
        </Link>
        <nav className="flex space-x-6">
          <Link
            to="/vacancies"
            className={`text-brand-gray @media (hover: hover) { hover:text-brand-light } transition-colors font-medium ${location.pathname.startsWith('/vacancies') ? 'text-brand-light underline underline-offset-4' : ''}`}
          >
            Смотреть вакансии
          </Link>
          <Link
            to="/infostand"
            className={`text-brand-gray @media (hover: hover) { hover:text-brand-light } transition-colors font-medium ${location.pathname.startsWith('/infostand') ? 'text-brand-light underline underline-offset-4' : ''}`}
          >
            Инфостенд
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 