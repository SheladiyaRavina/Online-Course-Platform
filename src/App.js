import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <CourseProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </CourseProvider>
  );
};

export default App;
