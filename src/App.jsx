import { useState } from 'react';
import './App.css';
import Nav from './components/HomePage/Nav.jsx';
import Hero from './components/HomePage/Hero.jsx';
import FeaturedCollection from './components/HomePage/FeaturedCollection.jsx';
import Footer from './components/HomePage/Footer.jsx';
import Exclusive from './components/HomePage/Exclusive.jsx';
import BestSeller from './components/HomePage/BestSAeller.jsx';
import Marquee from './components/HomePage/Marquee.jsx';
import PageBuyCart from './components/ProductsReuseableCompo/PageBuyCart.jsx';
import OrderPage from './components/ProductsReuseableCompo/OrderPage.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
    


        <Hero />
        <FeaturedCollection addToCart={addToCart} />
        <Marquee />
        <BestSeller addToCart={addToCart}/>
        <Exclusive />
        {/* <PageBuyCart /> */}

    
    </div>
  );
}

export default App;
