import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';             
import Configurator from './Configurator';
 import ProductDetailsPage from './ProductDetailsPage';

export default function App() {
  // DO NOT put useNavigate here. 
  // This file CREATES the router, it doesn't USE it.
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configure" element={<Configurator />} />
        <Route path="/details/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}