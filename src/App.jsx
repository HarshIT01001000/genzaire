import { useState, useEffect } from 'react';
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
import { ThemeProvider } from './context/Theme.jsx';
import ThemeBtn from './components/Themebtn.jsx';

function App() {
   const [themeMode, setthemeMode] = useState("light")

  const lightTheme=()=>{
    setthemeMode("light")
  }
  const darkTheme=()=>{
    setthemeMode("dark")
  }
//actual theme change
useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
    


        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
          <Hero />
        <FeaturedCollection />
        <Marquee />
        <BestSeller/>
        <Exclusive />
        <ThemeBtn></ThemeBtn>
        </ThemeProvider>

    
    </div>
  );
}

export default App;
