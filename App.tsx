import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ForHim from './pages/ForHim';
import ForHer from './pages/ForHer';
import Collections from './pages/Collections';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-luxury-bg text-luxury-charcoal min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-him" element={<ForHim />} />
            <Route path="/for-her" element={<ForHer />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
