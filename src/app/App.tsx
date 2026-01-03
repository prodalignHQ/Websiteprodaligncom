import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { TrainingPage } from './components/TrainingPage';
import { HiringPage } from './components/HiringPage';
import { BuildingPage } from './components/BuildingPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/hiring" element={<HiringPage />} />
          <Route path="/building" element={<BuildingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}