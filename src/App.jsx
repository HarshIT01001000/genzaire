import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/HomePage/Nav.jsx'
import Hero from './components/HomePage/Hero.jsx'
import FeaturedCollection from './components/HomePage/FeaturedCollection.jsx'
import Footer from './components/HomePage/Footer.jsx'
import Exclusive from './components/HomePage/Exclusive.jsx'
import BestSeller from './components/HomePage/BestSAeller.jsx'
import Marquee from './components/HomePage/Marquee.jsx'
import ProductsBasic from './components/Products/ProductsBasic.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero></Hero>
    <FeaturedCollection></FeaturedCollection>
    <Marquee></Marquee>
    <BestSeller></BestSeller>
    <Exclusive></Exclusive>
    </>
  )
}

export default App
