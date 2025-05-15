import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vacancies from './pages/Vacancies';
import VacancyDetail from './pages/VacancyDetail';
import InfoStand from './pages/InfoStand';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark overflow-x-hidden flex flex-col">
        <Header />
        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancy/:id" element={<VacancyDetail />} />
            <Route path="/infostand" element={<InfoStand />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
