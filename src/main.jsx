import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'; // Use BrowserRouter
import ProductsBasic from './components/Products/ProductsBasic.jsx';
import ProductCoustmize from './components/Products/ProductCoustmize.jsx';
import Layout from './components/Layout.jsx';
import ProductPrinted from './components/Products/ProductPrinted.jsx';
import OrderPage from './components/ProductsReuseableCompo/OrderPage.jsx';
import PageBuyCart from './components/ProductsReuseableCompo/PageBuyCart.jsx';
import AddedItems from './components/HomePage/AddedItems.jsx';
import { CartProvider } from './context/CartContext.jsx';
import UserDetails from './components/HomePage/UserDetalis.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <Router>
  <Routes>
    <Route path="" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/ProductBasics" element={<ProductsBasic />} />
      <Route path="/ProductCoustmize" element={<ProductCoustmize />} />
      <Route path="/ProductPrinted" element={<ProductPrinted />} />
      <Route path='/Form' element={<OrderPage></OrderPage>}></Route>
      <Route path='/PageBuyCart' element={<PageBuyCart></PageBuyCart>}></Route>
      <Route path='/AddedItems' element={<AddedItems></AddedItems>}></Route>
      <Route path='/UserDetalis' element={<UserDetails></UserDetails>}></Route>
    </Route>
  </Routes>
</Router>
</CartProvider>

  </StrictMode>
);
