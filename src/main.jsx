import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'; // Use BrowserRouter
import ProductsBasic from './components/Products/ProductsBasic.jsx';
import ProductCoustmize from './components/Products/ProductCoustmize.jsx';
import Layout from './components/Layout.jsx';
import ProductPrinted from './components/Products/ProductPrinted.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
  <Routes>
    <Route path="" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/ProductBasics" element={<ProductsBasic />} />
      <Route path="/ProductCoustmize" element={<ProductCoustmize />} />
      <Route path="/ProductPrinted" element={<ProductPrinted />} />
    </Route>
  </Routes>
</Router>

  </StrictMode>
);
