import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PortfolioPage from './pages/portfolio';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
