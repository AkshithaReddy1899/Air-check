import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';

const App = () => {
  console.log('OM');
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
