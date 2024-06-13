import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import DogsPage from './pages/DogsPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<DogsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
