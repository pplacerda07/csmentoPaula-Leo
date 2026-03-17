import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Hotels from './pages/Hotels';
import Beauty from './pages/Beauty';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/hoteis" element={<Hotels />} />
        <Route path="/beleza" element={<Beauty />} />
      </Routes>
    </Router>
  );
}

export default App;
