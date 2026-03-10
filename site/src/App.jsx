import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SaveTheDate from './pages/SaveTheDate';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savethedate" element={<SaveTheDate />} />
      </Routes>
    </Router>
  );
}

export default App;
