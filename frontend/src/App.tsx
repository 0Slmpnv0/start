import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Vacancies from './pages/Vacancies';
import VacancyDetail from './pages/VacancyDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark overflow-x-hidden">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancy/:id" element={<VacancyDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 